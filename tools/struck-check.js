#!/usr/bin/env node
/*
 * struck-check.js - find wording a verifier struck that a rewrite put back (lesson B30).
 *
 * Verifiers correct a page's wording in its fact ledger (batches/<batch>/facts/*-facts.md): a row's status
 * says "verified with corrected wording", "wrong" or "partly wrong", and its note says what to drop and
 * what to write instead. In round 10 of batch 2026-10-b the writers rewrote entries for depth and put struck
 * wording back: nine phrases on two pages, among them "Tilghman Beach", "three phases", "storage yard" and
 * "owners drive golf carts". Nothing caught it. This tool does. The struck wording goes in a list, one list
 * per page, next to the ledger; the tool reads the built page and reports every struck phrase it finds.
 *
 *   node tools/struck-check.js <struck.json> <page.html> [--json]
 *   node tools/struck-check.js --batch <batch-dir> --preview <dir> [--json] [--strict]
 *
 * The list: batches/<batch>/facts/<slug>-struck.json, a JSON array of entries:
 *   { "row": "gated 115",                 the ledger row that struck it
 *     "pattern": "Tilghman",              a regular expression; case is ignored
 *     "unless": "...",                    optional: a sentence that also matches this is not a hit
 *     "struck": "Seaside Plantation is in the Tilghman Beach part of North Myrtle Beach.",
 *                                         the struck wording, as the ledger or the page had it
 *     "use": "Seaside Plantation is in North Myrtle Beach." }
 *                                         the approved wording from the row's note; text in round
 *                                         brackets, "(cut it)", is an instruction, not wording
 * A pattern matches inside one sentence. Write it to match the struck claim, not its subject: "bluff"
 * alone would fire on Kimbel's bluff, which is approved; "Resort Course[^.]{0,80}\bbluff\b" does not.
 *
 * Batch mode reads every <slug>-struck.json in <batch-dir>/facts/ and checks <preview>/<slug>.html (or
 * <preview>/<slug>/index.html). <preview> can be a folder of built pages or a website clone's page folder.
 *
 * What it reads: the visible text of <main> (or <body> if there is none), one block at a time: headings,
 * paragraphs, list items, table cells and captions, figure captions, quotes. Scripts, styles, SVG, images,
 * navigation and forms are left out. The sentences are split as tools/repeat-check.js splits them. Curly
 * quotes become straight quotes, so a pattern can use ' and ".
 *
 * Exit 1 if any struck wording is found. Exit 2 on a bad list or a missing file. With --strict, batch mode
 * also exits 1 when a list has no page or an entry lacks its row, pattern or struck wording.
 *
 * Controls: tools/struck-check.test.js. Every entry's own "struck" text must fire it, and its "use" text
 * must not fire any entry on its page.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");
const { sentences } = require("./repeat-check.js");

const BLOCKS = "h1, h2, h3, h4, h5, h6, p, li, dt, dd, blockquote, td, th, caption, figcaption, summary";
const BLOCK_TAGS = new Set(BLOCKS.split(/,\s*/));
const INLINE = new Set("a abbr b bdi cite code data em i kbd label mark q s small span strong sub sup time u".split(" "));
const norm = (s) => String(s || "").replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"').replace(/­/g, "").replace(/[\s ]+/g, " ").trim();

/* ---------------------------------------------------------------- the list */

function compile(entries, file = "list") {
  if (!Array.isArray(entries)) throw new Error(`${file}: the list must be a JSON array`);
  return entries.map((e, i) => {
    const where = `${file} entry ${i + 1}${e && e.row ? ` (${e.row})` : ""}`;
    if (!e || typeof e.pattern !== "string" || !e.pattern) throw new Error(`${where}: no pattern`);
    let re, unless = null;
    try { re = new RegExp(e.pattern, "i"); } catch (err) { throw new Error(`${where}: bad pattern: ${err.message}`); }
    try { if (e.unless) unless = new RegExp(e.unless, "i"); } catch (err) { throw new Error(`${where}: bad unless: ${err.message}`); }
    const missing = ["row", "struck", "use"].filter((k) => typeof e[k] !== "string" || !e[k].trim());
    return { ...e, re, unlessRe: unless, missing };
  });
}

function loadList(file) {
  let raw;
  try { raw = JSON.parse(fs.readFileSync(file, "utf8")); } catch (err) { throw new Error(`${file}: ${err.message}`); }
  return compile(raw, path.basename(file));
}

/* ---------------------------------------------------------------- the page */

/* Visible text of the page, block by block, each block split into sentences. Each sentence keeps the
   heading of its section, so a hit can be found on the page. */
function pageSentences(html) {
  const $ = cheerio.load(html);
  let main = $("main").first();
  if (!main.length) main = $("body");
  main = main.clone();
  main.find("script, style, noscript, template, svg, img, picture, source, iframe, video, audio, nav, form, [hidden]").remove();
  const out = [];
  let section = "(top of page)";
  const add = (text, tag) => {
    const t = norm(text).replace(/\s+([.,;:!?])/g, "$1");
    if (!t) return;
    if (tag === "h2") section = t;
    for (const s of sentences(t)) out.push({ text: s, section });
  };
  main.find(`${BLOCKS}, div, section, article, aside, header, footer`).each((_, e) => {
    const el = $(e);
    const tag = e.tagName.toLowerCase();
    if (!BLOCK_TAGS.has(tag)) {
      /* Text that sits straight in a div, outside any block (credits, labels, pill text): its text nodes
         and inline elements, read together. */
      if (el.parents(BLOCKS).length) return;
      const own = el.contents().filter((_, n) => n.type === "text" || (n.type === "tag" && INLINE.has(n.tagName.toLowerCase()) && !$(n).find(`${BLOCKS}, div`).length))
        .map((_, n) => (n.type === "text" ? n.data : $(n).text())).get().join(" ");
      if (norm(own)) add(own, tag);
      return;
    }
    if (el.find(BLOCKS).length) return;
    /* A space where two inline elements meet with none between them: "<strong>Pool</strong>A large pool". */
    add(cheerio.load((el.html() || "").replace(/(<\/(?:strong|b|em|i|span|a|div)>|<br\s*\/?>)/gi, "$1 ")).text(), tag);
  });
  return out;
}

/* ---------------------------------------------------------------- the check */

/* The words around a match: a table row or a long sentence can run to hundreds of words. */
function around(s, m) {
  if (s.length <= 320) return s;
  const a = Math.max(0, m.index - 140), b = Math.min(s.length, m.index + m[0].length + 140);
  return (a > 0 ? "..." : "") + s.slice(a, b) + (b < s.length ? "..." : "");
}

function check(list, html) {
  const hits = [], seen = new Set();
  for (const s of pageSentences(html)) for (const e of list) {
    const m = s.text.match(e.re);
    if (!m || (e.unlessRe && e.unlessRe.test(s.text))) continue;
    const k = `${e.row}|${e.pattern}|${s.text}`;
    if (seen.has(k)) continue;
    seen.add(k);
    hits.push({ row: e.row, pattern: e.pattern, match: m[0], sentence: around(s.text, m), section: s.section, struck: e.struck, use: e.use });
  }
  return hits;
}

/* ---------------------------------------------------------------- report */

function report(file, hits) {
  const L = [`${file}: ${hits.length ? `${hits.length} struck phrase${hits.length > 1 ? "s" : ""} found` : "no struck wording"}`];
  for (const h of hits) {
    L.push(`  ${h.row}  "${h.match}"  in ${h.section}`);
    L.push(`    sentence: ${h.sentence}`);
    L.push(`    struck:   ${h.struck}`);
    L.push(`    use:      ${h.use}`);
  }
  return L.join("\n");
}

function findPage(dir, slug) {
  for (const p of [path.join(dir, `${slug}.html`), path.join(dir, slug, "index.html")]) if (fs.existsSync(p)) return p;
  return null;
}

function runBatch(batchDir, previewDir, strict) {
  const factsDir = path.join(batchDir, "facts");
  const lists = fs.readdirSync(factsDir).filter((f) => f.endsWith("-struck.json")).sort();
  const results = [], problems = [];
  if (!lists.length) problems.push(`no *-struck.json in ${factsDir}`);
  for (const f of lists) {
    const slug = f.replace(/-struck\.json$/, "");
    const list = loadList(path.join(factsDir, f));
    for (const e of list) if (e.missing.length) problems.push(`${f}: entry ${e.row || e.pattern} lacks ${e.missing.join(", ")}`);
    const page = findPage(previewDir, slug);
    if (!page) { problems.push(`${f}: no page ${slug}.html in ${previewDir}`); results.push({ slug, list: f, page: null, patterns: list.length, hits: [] }); continue; }
    results.push({ slug, list: f, page, patterns: list.length, hits: check(list, fs.readFileSync(page, "utf8")) });
  }
  return { results, problems, fail: results.some((r) => r.hits.length) || (strict && problems.length > 0) };
}

module.exports = { compile, loadList, pageSentences, check, report, runBatch };

if (require.main === module) {
  const args = process.argv.slice(2);
  const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
  const json = args.includes("--json"), strict = args.includes("--strict");
  const usage = "usage: node tools/struck-check.js <struck.json> <page.html> [--json]\n       node tools/struck-check.js --batch <batch-dir> --preview <dir> [--json] [--strict]";
  try {
    if (args.includes("--batch")) {
      const batch = opt("--batch"), preview = opt("--preview");
      if (!batch || !preview) { console.error(usage); process.exit(2); }
      const r = runBatch(batch, preview, strict);
      if (json) console.log(JSON.stringify(r, null, 2));
      else {
        for (const x of r.results) console.log(x.page ? report(`${x.slug} (${x.patterns} patterns)`, x.hits) : `${x.slug}: no page to check`);
        for (const p of r.problems) console.log(`problem: ${p}`);
        const n = r.results.reduce((s, x) => s + x.hits.length, 0);
        console.log(n ? `\n${n} struck phrase${n > 1 ? "s" : ""} back on the pages. Use each row's approved wording.` : "\nno struck wording on any page");
      }
      process.exitCode = r.fail ? 1 : 0;
    } else {
      const files = args.filter((a) => !a.startsWith("--"));
      if (files.length !== 2) { console.error(usage); process.exit(2); }
      const hits = check(loadList(files[0]), fs.readFileSync(files[1], "utf8"));
      console.log(json ? JSON.stringify(hits, null, 2) : report(files[1], hits));
      process.exitCode = hits.length ? 1 : 0;
    }
  } catch (err) {
    console.error(err.message);
    process.exit(2);
  }
}
