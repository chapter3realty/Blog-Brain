#!/usr/bin/env node
/*
 * facts-check.js - hold every page to facts/registry.json.
 *
 *   node tools/facts-check.js <website-repo>          every page
 *   node tools/facts-check.js <website-repo> --json
 *   node tools/facts-check.js --stale                 only list registry entries past their staleBy date
 *
 * Two checks:
 *   1. WRONG: a sentence on any page (visible text, meta, JSON-LD) matches a
 *      known-wrong shape of a registered fact, and does not match its 'unless'.
 *   2. STALE: a registry entry is past its 'staleBy' date. Re-open its source,
 *      update value, asOf and staleBy, then fix every page the check names.
 *
 * Why: on 2026-10-01 twelve facts disagreed across pages (lodging tax 10 vs 13
 * percent; rental tax "double" vs 3.3 to 4.3 times), and two traps the website's
 * HANDOFF had already recorded (Pawleys Island's county; stacking SC deductions)
 * were live again. A fact written once and copied by hand drifts. A fact held in
 * one registry and checked on every build does not.
 *
 * Exit 1 on any WRONG finding or STALE entry.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

const REG = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "facts", "registry.json"), "utf8"));
const TODAY = process.env.SCORE_TODAY || new Date().toISOString().slice(0, 10);
const clean = (s) => String(s || "").replace(/&#39;|&#x27;|’/g, "'").replace(/\s+/g, " ").trim();
const sentences = (t) => clean(t).split(/(?<=[.!?])\s+(?=["'(]?[A-Z0-9$])/);

const rules = REG.facts.flatMap(f => f.wrong.map(w => ({ fact: f, re: new RegExp(w.pattern, "i"), unless: w.unless ? new RegExp(w.unless, "i") : null, note: w.note })));

function pageTexts(html) {
  const $ = cheerio.load(html);
  const out = [];
  out.push($("head > title").text());
  $('meta[name="description"], meta[property="og:description"]').each((_, e) => out.push($(e).attr("content")));
  $('script[type="application/ld+json"]').each((_, e) => {
    try { const walk = (v) => { if (typeof v === "string") out.push(v); else if (v && typeof v === "object") Object.values(v).forEach(walk); }; walk(JSON.parse($(e).text())); } catch { /* build.js reports bad JSON-LD */ }
  });
  const body = $("body").clone(); body.find("script, style, noscript, svg").remove();
  out.push(cheerio.load((body.html() || "").replace(/</g, " <")).text());
  return out;
}

function checkPage(html, url) {
  const found = [], seen = new Set();
  for (const text of pageTexts(html)) for (const s of sentences(text)) for (const r of rules) {
    const m = s.match(r.re);
    if (!m || (r.unless && r.unless.test(s))) continue;
    const k = `${r.fact.id}|${s}`; if (seen.has(k)) continue; seen.add(k);
    /* Show the words around the match: a merged table row can run to hundreds of words. */
    const ctx = (m.index > 120 ? "..." : "") + s.slice(Math.max(0, m.index - 120), m.index + m[0].length + 100) + (m.index + m[0].length + 100 < s.length ? "..." : "");
    found.push({ url, fact: r.fact.id, match: m[0], sentence: ctx, note: r.note, correct: r.fact.fact, ownerPage: r.fact.ownerPage, source: r.fact.source });
  }
  return found;
}

function staleEntries() { return REG.facts.filter(f => f.staleBy && f.staleBy <= TODAY).map(f => ({ fact: f.id, staleBy: f.staleBy, asOf: f.asOf, source: f.source })); }

function walk(d, o = []) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, o); else if (f === "index.html") o.push(p); } return o; }

function main() {
  const args = process.argv.slice(2), repo = args.find(a => !a.startsWith("--"));
  const stale = staleEntries();
  if (args.includes("--stale") || !repo) {
    if (!repo && !args.includes("--stale")) { console.error("usage: node tools/facts-check.js <website-repo> [--json] | --stale"); process.exit(2); }
    for (const s of stale) console.log(`STALE ${s.fact}  staleBy ${s.staleBy}  (as of ${s.asOf})  re-open: ${s.source}`);
    console.log(`${stale.length} of ${REG.facts.length} registry entries are past their staleBy date.`);
    process.exitCode = stale.length ? 1 : 0; return;
  }
  const root = fs.existsSync(path.join(repo, "chapter3realty")) ? path.join(repo, "chapter3realty") : repo;
  let found = [];
  for (const f of walk(root)) { const rel = path.relative(root, path.dirname(f)).split(path.sep).join("/"); found = found.concat(checkPage(fs.readFileSync(f, "utf8"), rel ? `/${rel}/` : "/")); }
  if (args.includes("--json")) console.log(JSON.stringify({ wrong: found, stale }, null, 1));
  else {
    found.sort((a, b) => a.fact.localeCompare(b.fact) || a.url.localeCompare(b.url));
    let last = "";
    for (const f of found) {
      if (f.fact !== last) { console.log(`\n${f.fact}: ${f.note}\n  correct: ${f.correct}${f.ownerPage ? `\n  owner page: ${f.ownerPage}` : ""}`); last = f.fact; }
      console.log(`  WRONG ${f.url}  "${f.sentence}"`);
    }
    for (const s of stale) console.log(`STALE ${s.fact}  staleBy ${s.staleBy}  re-open: ${s.source}`);
    console.log(`\n${found.length} wrong sentences on ${new Set(found.map(f => f.url)).size} pages, ${new Set(found.map(f => f.fact)).size} facts; ${stale.length} stale registry entries.`);
  }
  process.exitCode = found.length || stale.length ? 1 : 0;
}

module.exports = { checkPage, staleEntries };
if (require.main === module) main();
