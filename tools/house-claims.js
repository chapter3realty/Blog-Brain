#!/usr/bin/env node
/* house-claims.js: list every sentence that says what "most", "many" or "about half" of the houses
 * in a place have or are, with nothing in the sentence that scopes it (listed for sale, county parcels,
 * flood zone, a count). Lesson B48, and B54: the same drift came back in two checks in a row (round 14,
 * 2026-10-15 and 2026-10-21). A writer's self-check, not a gate: some hits are fine (a census figure,
 * a builder's full plan list). For each hit, scope it to "the houses listed for sale", cite a full
 * source in the ledger, or cut it.
 * Usage: node tools/house-claims.js <page.html | site-dir>
 */
const fs = require("fs"), path = require("path");
const P = /\b(most|many|almost every|nearly every|about half)( of)?( the| these| its| their)? (houses|homes|townhomes)( here| there| in [A-Z][\w ]+?)? (have|has|are|is|stand|were|was|sit)\b/i;
const U = /listed|for sale|on the market|flood|county|parcel|border|lots? |outside|inside|HOA|fee|within|miles?\b|minutes?\b|condos\b|sold|census|\?$/i;
function sentences(html) {
  const m = (html.match(/<main[\s\S]*<\/main>/) || [html])[0].replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  return m.split(/(?<=[.!?])\s+/);
}
function scan(file, label) {
  let n = 0;
  for (const s of sentences(fs.readFileSync(file, "utf8"))) if (P.test(s) && !U.test(s.trim()) && !/how many/i.test(s)) { n++; console.log(`${label} | ${s.trim().slice(0, 200)}`); }
  return n;
}
const arg = process.argv[2];
if (!arg || !fs.existsSync(arg)) { console.error("usage: node tools/house-claims.js <page.html | site-dir>"); process.exit(2); }
let total = 0;
if (fs.statSync(arg).isDirectory()) {
  (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (!/^(images|node_modules)$/.test(f)) walk(p); } else if (f === "index.html") total += scan(p, path.relative(arg, d) || "/"); } })(arg);
} else total = scan(arg, path.basename(arg));
console.log(`${total} sentence(s) to scope or source`);
