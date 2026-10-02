#!/usr/bin/env node
/*
 * claims-scan.js - find claims Chapter3 may not make, on every surface a
 * reader, a search engine or an AI answer engine reads.
 *
 *   node tools/claims-scan.js <website-repo>            every page + llms.txt
 *   node tools/claims-scan.js <website-repo> --json
 *   node tools/claims-scan.js <file.html>               one page
 *
 * Why a second scanner: the website's build.js scans prose inside <main>
 * against exact phrasings. The 2026-10-01 audit found the same banned claims
 * restated ("same company", "own mortgage team") and living where build.js
 * does not look: the footer on 131 pages ("DSCR financing"), meta and social
 * descriptions ("licensed agent and MLO"), calculator default values (a 7% rate
 * pre-filled), the search modal and llms.txt. AI answers then repeated them.
 *
 * Surfaces scanned per page: <title>, meta description, og/twitter text,
 * visible body text (header, main, footer, modals), JSON-LD string values,
 * and input default values and placeholders. Rules live in rules/claims.json.
 * Exit 1 on any critical or high finding.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

const RULES = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "rules", "claims.json"), "utf8"));
const compiled = RULES.rules.map(r => ({ ...r, res: r.patterns.map(p => new RegExp(p, "i")), unlessRe: r.unless ? new RegExp(r.unless, "i") : null, requiresRe: r.requires ? new RegExp(r.requires, "i") : null }));
const inp = RULES.inputDefaults;
const fieldRe = new RegExp(inp.fieldPattern, "i"), notFieldRe = new RegExp(inp.notFieldPattern, "i");

const clean = (s) => String(s || "").replace(/&#39;|&#x27;|’/g, "'").replace(/\s+/g, " ").trim();
const sentences = (t) => clean(t).split(/(?<=[.!?])\s+(?=["'(]?[A-Z0-9$])/);

/* Text of an HTML fragment with a space between elements, so "%s" + "Analyze" stays two words. */
const textOf = ($, el) => clean(cheerio.load(($(el).html() || "").replace(/</g, " <")).text());

function surfaces(html, url) {
  const $ = cheerio.load(html);
  const out = [];
  const push = (surface, text) => { if (clean(text)) out.push({ surface, text: clean(text) }); };
  push("title", $("head > title").first().text());
  $('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"], meta[property="og:image:alt"]')
    .each((_, e) => push(`meta ${$(e).attr("name") || $(e).attr("property")}`, $(e).attr("content")));
  $('script[type="application/ld+json"]').each((_, e) => {
    let j; try { j = JSON.parse($(e).text()); } catch { return; }
    const walk = (v, k) => { if (typeof v === "string") { if (!/^(?:https?:|@|#)/.test(v) && !/^(?:@id|@type|url|image|logo|sameAs)$/.test(k)) push("json-ld", v); } else if (v && typeof v === "object") for (const [kk, vv] of Object.entries(v)) walk(vv, kk); };
    walk(j, "");
  });
  const body = $("body").clone();
  body.find("script, style, noscript, template, svg title").remove();
  for (const region of ["header", "main", "footer"]) body.find(region).each((_, e) => { push(region, textOf($, e)); $(e).remove(); });
  push("body", textOf($, body));
  return { $, out };
}

function scanText(url, surface, text, findings) {
  for (const s of sentences(text)) {
    for (const r of compiled) {
      if (r.allowPages && r.allowPages.includes(url)) continue;
      const hit = r.res.map(re => s.match(re)).find(Boolean);
      if (!hit) continue;
      if (r.unlessRe && r.unlessRe.test(s)) continue;
      /* 'requires': the sentence must also be about Chapter3 (we, our, Chapter3), unless it sits on a
         surface that speaks for the firm by itself (footer, title, meta), where a bare list is a service list. */
      if (r.requiresRe && !r.requiresRe.test(s) && !(r.alwaysOnSurfaces || []).some(x => surface.startsWith(x))) continue;
      findings.push({ url, rule: r.id, severity: r.severity, surface, match: hit[0], sentence: s.slice(0, 220), fix: r.fix });
    }
  }
}

function scanInputs($, url, findings) {
  $("input").each((_, e) => {
    const el = $(e), type = (el.attr("type") || "text").toLowerCase();
    if (["checkbox", "radio", "hidden", "submit", "button", "email", "tel"].includes(type)) return;
    const id = el.attr("id") || "", name = el.attr("name") || "";
    const label = clean((id && $(`label[for="${id}"]`).text()) || el.closest("label").text() || el.prev("label").text() || el.parent().prev("label").text());
    const key = `${id} ${name} ${label}`;
    if (!fieldRe.test(key) || notFieldRe.test(key)) return;
    const isDown = /down/i.test(key);
    if (isDown && inp.allowDownPaymentPages.includes(url)) return;
    for (const attr of ["value", "placeholder"]) {
      const v = el.attr(attr);
      if (v && /\d/.test(v) && !/^0+(?:\.0+)?$/.test(v.trim())) findings.push({ url, rule: isDown ? "default-down-payment" : "default-rate", severity: inp.severity, surface: `input #${id || name} ${attr}`, match: v, sentence: `${label || id || name}: ${attr}="${v}"`, fix: "Leave the box empty with a visible label; the reader types their own lender's number." });
    }
  });
}

function scanPage(html, url) {
  const findings = [];
  const { $, out } = surfaces(html, url);
  for (const s of out) scanText(url, s.surface, s.text, findings);
  scanInputs($, url, findings);
  /* One finding per rule, surface and sentence. The footer repeats on every page; report it once per page. */
  const seen = new Set();
  return findings.filter(f => { const k = `${f.rule}|${f.surface}|${f.sentence}`; if (seen.has(k)) return false; seen.add(k); return true; });
}

function walk(d, o = []) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, o); else if (f === "index.html") o.push(p); } return o; }

function scanSite(repo) {
  const root = fs.existsSync(path.join(repo, "chapter3realty")) ? path.join(repo, "chapter3realty") : repo;
  let findings = [];
  for (const f of walk(root)) {
    const rel = path.relative(root, path.dirname(f)).split(path.sep).join("/");
    findings = findings.concat(scanPage(fs.readFileSync(f, "utf8"), rel ? `/${rel}/` : "/"));
  }
  const llms = path.join(root, "llms.txt");
  if (fs.existsSync(llms)) { const fl = []; scanText("/llms.txt", "llms.txt", fs.readFileSync(llms, "utf8"), fl); findings = findings.concat(fl); }
  return findings;
}

function main() {
  const args = process.argv.slice(2), target = args.find(a => !a.startsWith("--"));
  if (!target) { console.error("usage: node tools/claims-scan.js <website-repo | page.html> [--json]"); process.exit(2); }
  const findings = fs.statSync(target).isDirectory() ? scanSite(target) : scanPage(fs.readFileSync(target, "utf8"), target);
  if (args.includes("--json")) { console.log(JSON.stringify(findings, null, 1)); }
  else {
    const order = { critical: 0, high: 1, medium: 2, low: 3 };
    findings.sort((a, b) => order[a.severity] - order[b.severity] || a.rule.localeCompare(b.rule) || a.url.localeCompare(b.url));
    /* Group sitewide repeats (the footer, the search modal) into one line with a page count. */
    const groups = new Map();
    for (const f of findings) { const k = `${f.severity}|${f.rule}|${f.surface.replace(/^(?:header|footer|body)$/, "$&")}|${f.sentence}`; if (!groups.has(k)) groups.set(k, { ...f, pages: [] }); groups.get(k).pages.push(f.url); }
    for (const g of groups.values()) console.log(`${g.severity.toUpperCase().padEnd(8)} ${g.rule.padEnd(20)} ${g.pages.length > 3 ? `${g.pages.length} pages` : g.pages.join(" ")}  [${g.surface}] "${g.match}"  ${g.sentence}`);
    const c = findings.reduce((a, f) => (a[f.severity] = (a[f.severity] || 0) + 1, a), {});
    console.log(`\n${findings.length} findings (${Object.entries(c).map(([k, v]) => `${v} ${k}`).join(", ")}) in ${groups.size} distinct sentences.`);
  }
  process.exitCode = findings.some(f => f.severity === "critical" || f.severity === "high") ? 1 : 0;
}

module.exports = { scanPage, scanSite };
if (require.main === module) main();
