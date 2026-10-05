#!/usr/bin/env node
/*
 * record-edit.js - add the owner's edits on a draft to the edit memory.
 *
 *   node tools/record-edit.js <draft.txt> <edited.txt> --page /buyers/flood-zone/ [--note "what he said"]
 *
 * Both files are the page text, one paragraph per line (copy them from the
 * document he edited). Each sentence he deleted, added or rewrote becomes one
 * line in voice/edits.jsonl with class "unclassified". The reviewer agent then
 * gives each a class, and adds a rule to voice/RULES.md when the same class
 * shows up twice. Prints a summary; --dry prints the records without writing.
 */
"use strict";
const fs = require("fs"), path = require("path");

const MEMORY = path.join(__dirname, "..", "voice", "edits.jsonl");
const clean = (s) => String(s || "").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
const sentences = (t) => clean(t).split(/(?<=[.!?])\s+(?=["'(]?[A-Z0-9$])/).map(s => s.trim()).filter(Boolean);
const words = (s) => s.toLowerCase().replace(/[^a-z0-9$% ]/g, " ").split(/\s+/).filter(Boolean);
function similarity(a, b) {
  const A = new Set(words(a)), B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  let n = 0; for (const w of A) if (B.has(w)) n++;
  return n / Math.max(A.size, B.size);
}

/* Pair each changed draft sentence with the edited sentence most like it. A pair under 0.4 alike is a delete plus an add. */
function diff(draftText, editedText) {
  const d = sentences(draftText), e = sentences(editedText);
  const eSet = new Set(e), dSet = new Set(d);
  const gone = d.filter(s => !eSet.has(s)), added = e.filter(s => !dSet.has(s));
  const used = new Set(), out = [];
  for (const s of gone) {
    let best = -1, score = 0;
    added.forEach((a, i) => { if (used.has(i)) return; const x = similarity(s, a); if (x > score) { score = x; best = i; } });
    if (best >= 0 && score >= 0.4) { used.add(best); out.push({ kind: "rewrite", before: s, after: added[best] }); }
    else out.push({ kind: "delete", before: s, after: "" });
  }
  added.forEach((a, i) => { if (!used.has(i)) out.push({ kind: "add", before: "", after: a }); });
  return out;
}

function main() {
  const args = process.argv.slice(2);
  const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : ""; };
  const [draft, edited] = args.filter((a, i) => !a.startsWith("--") && !["--page", "--note"].includes(args[i - 1]));
  if (!draft || !edited || !opt("--page")) { console.error("usage: node tools/record-edit.js <draft.txt> <edited.txt> --page /url/ [--note \"...\"] [--dry]"); process.exit(2); }
  const date = new Date().toISOString().slice(0, 10);
  const recs = diff(fs.readFileSync(draft, "utf8"), fs.readFileSync(edited, "utf8"))
    .map(c => ({ date, page: opt("--page"), before: c.before, instruction: c.kind, after: c.after, class: "unclassified", quote: opt("--note"), source: `record-edit ${path.basename(edited)}` }));
  if (args.includes("--dry")) { for (const r of recs) console.log(JSON.stringify(r)); }
  else fs.appendFileSync(MEMORY, recs.map(r => JSON.stringify(r)).join("\n") + (recs.length ? "\n" : ""));
  const n = (k) => recs.filter(r => r.instruction === k).length;
  console.log(`${recs.length} edits${args.includes("--dry") ? " (dry run)" : ` added to voice/edits.jsonl`}: ${n("rewrite")} rewritten, ${n("delete")} deleted, ${n("add")} added.`);
}

module.exports = { diff, sentences };
if (require.main === module) main();
