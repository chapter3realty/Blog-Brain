#!/usr/bin/env node
/*
 * trim-check.js - prove a trimmed page adds no new facts (owner, 2026-11-07: cut the pages to one main question).
 *
 *   node tools/trim-check.js <before.html> <after.html>
 *
 * A trim only cuts, moves and rewords. So every number in the trimmed page's main text, and every name
 * (a run of capitalised words that is not a sentence's first word), must already be on the page before the trim.
 * A new one is a new fact, and needs a verified ledger row and the verifier, not a trim. It also prints the change
 * in prose words and sections, and fails if the page lost its last offer or any source link.
 * Exit 0 when clean, 1 when it finds a new number, a new name, or a lost source.
 */
"use strict";
const fs = require("fs");
const cheerio = require("cheerio");

function read(file) {
  const $ = cheerio.load(fs.readFileSync(file, "utf8"));
  const main = $("main");
  main.find("script, style, svg, noscript, template").remove();
  const text = main.text().replace(/\s+/g, " ");
  const sources = new Set(main.find("a[href^='http']").map((_, a) => $(a).attr("href").replace(/[#?].*$/, "").replace(/\/$/, "")).get()
    .filter((h) => !/chapter3realty\.com/.test(h)));
  const offers = main.find("a.btn, a[href^='/contact/'], a[href^='tel:'], a[href='#lead-form']").length;
  const h2 = main.find("h2").length;
  return { text, sources, offers, h2, words: text.split(" ").filter(Boolean).length };
}

/* Numbers as written: 1,815 / $418,000 / 4% / 11.5 / 2026. A bare one-digit number is skipped (steps, "two"). */
const numbers = (t) => new Set((t.match(/\$?\d[\d,]*(?:\.\d+)?%?/g) || []).map((n) => n.replace(/[,$%]/g, "").replace(/\.0+$/, "")).filter((n) => n.length > 1));
/* Names: two or more capitalised words in a row, not at the start of a sentence. */
function names(t) {
  const out = new Set();
  for (const m of t.matchAll(/(?<![.!?:]\s)(?<!^)\b([A-Z][a-z]+(?:\s+(?:of|the|and|at|on)?\s*[A-Z][a-z]+)+)/g)) out.add(m[1].replace(/\s+/g, " "));
  return out;
}

const [a, b] = process.argv.slice(2);
if (!a || !b) { console.error("usage: node tools/trim-check.js <before.html> <after.html>"); process.exit(2); }
const before = read(a), after = read(b);
const nb = numbers(before.text), nbText = before.text;
const newNums = [...numbers(after.text)].filter((n) => !nb.has(n));
const newNames = [...names(after.text)].filter((n) => !nbText.includes(n));
const lostSources = [...before.sources].filter((s) => !after.sources.has(s));

console.log(`words ${before.words} -> ${after.words} (${Math.round(100 * (after.words - before.words) / before.words)}%), h2 ${before.h2} -> ${after.h2}, offers ${before.offers} -> ${after.offers}`);
let bad = 0;
if (newNums.length) { bad++; console.log(`NEW NUMBERS (${newNums.length}): ${newNums.slice(0, 30).join(", ")}`); }
if (newNames.length) { bad++; console.log(`NEW NAMES (${newNames.length}): ${newNames.slice(0, 30).join(" | ")}`); }
if (lostSources.length) { bad++; console.log(`SOURCES DROPPED (${lostSources.length}), keep each in the sources box: ${lostSources.slice(0, 20).join(" ")}`); }
if (before.offers && !after.offers) { bad++; console.log("NO OFFER LEFT"); }
console.log(bad ? "trim-check: FAIL" : "trim-check: clean (no new number, no new name, every source kept)");
process.exit(bad ? 1 : 0);
