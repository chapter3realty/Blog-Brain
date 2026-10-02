#!/usr/bin/env node
/*
 * fix-list.js - every wrong sentence on the site, page by page, with what is
 * wrong and what to do. Merges four sources:
 *   1. tools/claims-scan.js    (rules/claims.json)       claims Chapter3 may not make
 *   2. tools/facts-check.js    (facts/registry.json)     known-wrong facts
 *   3. tools/site-audit.js     source checks             residue, markup, forms, links
 *   4. audit/manual-findings.json                        reviewers' findings, each quote
 *                                                        verified on the live page
 *
 *   node tools/fix-list.js <website-repo> > audit/FIX-LIST.md
 *
 * Sentences in the shared header, footer or search modal are listed once under
 * "Every page" instead of 131 times. Pages are ordered by how many critical and
 * high items they carry. Re-run after each fix batch: a fixed sentence drops out
 * of the scanner sections, and a manual finding whose quote is no longer on the
 * page is listed at the end as "no longer found" so it can be removed.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");
const { scanSite } = require("./claims-scan.js");
const { checkPage, staleEntries } = require("./facts-check.js");
const siteAudit = require("./site-audit.js");
const CLAIMS = require("../rules/claims.json");
const REGISTRY = require("../facts/registry.json");
const MANUAL = (() => { try { return require("../audit/manual-findings.json"); } catch { return []; } })();

const SEV = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
const clean = (s) => String(s || "").replace(/&#39;|&#x27;|’/g, "'").replace(/\s+/g, " ").trim();
const squash = (s) => clean(s).replace(/[^A-Za-z0-9%$+]/g, "").toLowerCase();

function walk(d, o = []) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, o); else if (f === "index.html") o.push(p); } return o; }

function main() {
  const repo = process.argv[2];
  if (!repo) { console.error("usage: node tools/fix-list.js <website-repo> > audit/FIX-LIST.md"); process.exit(2); }
  const root = fs.existsSync(path.join(repo, "chapter3realty")) ? path.join(repo, "chapter3realty") : repo;
  const pages = walk(root).map(f => { const rel = path.relative(root, path.dirname(f)).split(path.sep).join("/"); return { url: rel ? `/${rel}/` : "/", file: f }; });
  const items = [];   /* { url, severity, kind, quote, problem, fix, where } */

  /* 1. Claims. A sentence found on more than 20 pages is shared chrome. */
  const fixFor = Object.fromEntries(CLAIMS.rules.map(r => [r.id, r]));
  for (const f of scanSite(repo)) {
    const r = fixFor[f.rule];
    items.push({ url: f.url, severity: f.severity, kind: `claim: ${f.rule}`, quote: f.sentence, where: f.surface,
      problem: r ? r.why : f.rule === "default-rate" ? "A calculator ships with an interest rate already typed in, which states a rate (non-negotiable 3, Reg Z)." : "A calculator ships with a down payment already typed in on an owner-occupied page (Reg Z).",
      fix: f.fix || (r && r.fix) || "" });
  }
  /* 2. Facts. */
  for (const p of pages) for (const f of checkPage(fs.readFileSync(p.file, "utf8"), p.url))
    items.push({ url: p.url, severity: (REGISTRY.facts.find(x => x.id === f.fact) || {}).severity || "high", kind: `fact: ${f.fact}`, quote: f.sentence, where: "page", problem: f.note, fix: `Correct: ${f.correct}${f.ownerPage ? ` Link ${f.ownerPage}, which owns this figure.` : ""}` });
  /* 3. Site audit, the findings that are about what a visitor reads or does. */
  siteAudit.findings.length = 0;
  siteAudit.sourceChecks(root);
  for (const f of siteAudit.findings) {
    if (!["residue", "form-consent", "phone-consent", "markup", "internal-link", "anchor"].includes(f.check) || f.level === "info") continue;
    const urls = /\(\+\d+ more\)/.test(f.url) ? ["*"] : String(f.url).split(" ").filter(x => x.startsWith("/") && !x.startsWith("/assets/"));
    for (const u of urls)
      items.push({ url: u, severity: f.level === "error" ? (/consent/.test(f.check) ? "critical" : "high") : "medium", kind: `site: ${f.check}`, quote: "", where: "page", problem: f.detail, fix: f.check === "form-consent" ? "Pass consent: box.checked ? 'yes' : 'no' in the c3SendForm call, then test that the request is sent." : f.check === "markup" ? "Balance the tags so later content is not re-parented." : "" });
  }
  /* 4. Manual findings, re-verified against the page as it is now. */
  const textCache = {};
  const pageText = (u) => {
    if (textCache[u] !== undefined) return textCache[u];
    const p = pages.find(x => x.url === u); if (!p) return (textCache[u] = "");
    const $ = cheerio.load(fs.readFileSync(p.file, "utf8"));
    const meta = $('meta[name="description"]').attr("content") + " " + $("title").text();
    $("script, style").remove();
    return (textCache[u] = squash(meta + " " + $("html").text() + " " + $("input").map((_, e) => $(e).attr("placeholder") || "").get().join(" ")));
  };
  /* Text of the shared partials: a manual finding whose quote is there is on every page. */
  const partialsDir = path.join(path.dirname(root), "partials");
  const chrome = fs.existsSync(partialsDir) ? squash(fs.readdirSync(partialsDir).map(f => cheerio.load(fs.readFileSync(path.join(partialsDir, f), "utf8")).text()).join(" ")) : "";
  const gone = [];
  for (const m of MANUAL) {
    if (!pageText(m.url).includes(squash(m.quote.replace(/\.\.\./g, "")))) { gone.push(m); continue; }
    const inChrome = chrome && chrome.includes(squash(m.quote));
    items.push({ url: inChrome ? "*" : m.url, severity: m.severity, kind: `${m.category}`, quote: m.quote, where: "page", problem: m.problem, fix: m.replacement ? `${m.fix} Write: "${m.replacement}"` : m.fix, owner: m.needsOwner, source: m.source });
  }

  /* A sentence both a scanner and a reviewer caught is listed once, with the reviewer's fix. */
  const manualOn = items.filter(it => it.source !== undefined && it.quote);
  const overlaps = (x, y) => { const a = squash(x.quote.replace(/\.\.\./g, "")), b = squash(y.quote.replace(/\.\.\./g, "")); return a.length > 20 && b.length > 20 && (a.includes(b) || b.includes(a)); };
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    if (it.source !== undefined || !it.quote) continue;
    const twins = manualOn.filter(m => (m.url === it.url || m.url === "*") && overlaps(m, it));
    if (!twins.length) continue;
    for (const m of twins) if (SEV[it.severity] < SEV[m.severity]) m.severity = it.severity;   /* keep the higher severity */
    items.splice(i, 1);
  }

  /* Shared chrome: the same sentence on more than 20 pages. */
  const bySentence = new Map();
  for (const it of items) if (it.quote) { const k = `${it.kind}|${it.quote}`; if (!bySentence.has(k)) bySentence.set(k, new Set()); bySentence.get(k).add(it.url); }
  const shared = new Set([...bySentence].filter(([, s]) => s.size > 20).map(([k]) => k));
  const sitewide = [], perPage = new Map();
  const seen = new Set();
  for (const it of items) {
    const k = `${it.kind}|${it.quote}`;
    if (shared.has(k) || it.url === "*") { if (!seen.has(k + it.problem)) { seen.add(k + it.problem); sitewide.push({ ...it, pages: it.url === "*" ? pages.length - 1 : bySentence.get(k).size }); } continue; }
    const pk = `${it.url}|${k}|${it.problem}`; if (seen.has(pk)) continue; seen.add(pk);
    if (!perPage.has(it.url)) perPage.set(it.url, []);
    perPage.get(it.url).push(it);
  }

  /* Output. */
  const out = [];
  const total = [...perPage.values()].reduce((a, l) => a + l.length, 0) + sitewide.length;
  const count = (l, s) => l.filter(i => i.severity === s).length;
  const all = [...perPage.values()].flat().concat(sitewide);
  out.push("# Fix list: every wrong sentence, page by page", "");
  out.push(`Generated by \`node tools/fix-list.js\` from the live branch of the website repo. Re-run it after each batch of fixes; fixed sentences drop out.`, "");
  out.push(`**${total} items:** ${["critical", "high", "medium", "low"].map(s => `${count(all, s)} ${s}`).join(", ")}, on ${perPage.size} pages plus ${sitewide.length} that sit in the shared header, footer or search box and appear on every page.`, "");
  out.push("**Sources:**", "");
  out.push("- the claims scanner (`rules/claims.json`)");
  out.push("- the facts registry (`facts/registry.json`)");
  out.push("- the site audit");
  out.push("- the reviewers' findings in `audit/manual-findings.json`, each quote re-checked on the page", "");
  out.push(`Items marked **(owner)** need a decision or a fact only the owner or counsel can give. This is not legal advice.`, "");
  out.push("**How to use it:**", "");
  out.push("1. Fix the \"Every page\" section first, in the website's `partials/`, then run `node build.js stitch`.");
  out.push("2. Fix pages top to bottom; they are ordered by critical and high items.");
  out.push("3. On generated pages, edit the spec, never the page.", "");

  const fmt = (it) => {
    const lines = [`- **${it.severity}** · ${it.kind}${it.owner ? " · **(owner)**" : ""}${it.where && it.where !== "page" ? ` · in ${it.where}` : ""}`];
    if (it.quote) lines.push(`  - Wrong: "${clean(it.quote)}"`);
    if (it.problem) lines.push(`  - Why: ${clean(it.problem)}`);
    if (it.fix) lines.push(`  - Fix: ${clean(it.fix)}`);
    return lines.join("\n");
  };
  out.push("## Every page (shared header, footer and search box)", "");
  out.push("Fix once in `partials/` and run `node build.js stitch`.", "");
  for (const it of sitewide.sort((a, b) => SEV[a.severity] - SEV[b.severity])) out.push(fmt({ ...it, kind: `${it.kind} · on ${it.pages} pages` }));
  out.push("");
  const order = [...perPage].sort((a, b) => (count(b[1], "critical") * 100 + count(b[1], "high") * 10 + b[1].length) - (count(a[1], "critical") * 100 + count(a[1], "high") * 10 + a[1].length));
  out.push("## Pages, worst first", "");
  out.push("| Page | Critical | High | Medium | Low |", "|---|---|---|---|---|");
  for (const [u, l] of order) out.push(`| [${u}](#${u.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "home"}) | ${count(l, "critical")} | ${count(l, "high")} | ${count(l, "medium")} | ${count(l, "low")} |`);
  out.push("");
  for (const [u, l] of order) {
    out.push(`### ${u}`, "", `<a id="${u.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "home"}"></a>`, "");
    for (const it of l.sort((a, b) => SEV[a.severity] - SEV[b.severity])) out.push(fmt(it));
    out.push("");
  }
  const stale = staleEntries();
  if (stale.length) { out.push("## Registry facts past their re-check date", ""); for (const s of stale) out.push(`- ${s.fact}: re-open ${s.source}`); out.push(""); }
  if (gone.length) { out.push("## Manual findings no longer found on their page", "", "Fixed, or the page changed. Remove them from `audit/manual-findings.json`.", ""); for (const m of gone) out.push(`- ${m.url}: "${clean(m.quote).slice(0, 120)}"`); out.push(""); }
  console.log(out.join("\n"));
}

if (require.main === module) main();
