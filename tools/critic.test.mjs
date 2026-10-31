#!/usr/bin/env node
/*
 * Controls for critic.mjs. Each check has a page that must stay quiet and a page that must fire.
 * The fixtures are in tools/fixtures/critic/; each one is clean.html with one defect added, and the
 * defect is asserted to be in the file before the result is read (a mutation that silently does
 * nothing looks exactly like a passing test, website MISTAKES.md 35).
 *
 *   node tools/critic.test.mjs
 *
 * Needs Playwright and its Chromium. Where Playwright is not installed the controls are skipped and
 * the script says so; it does not claim they passed.
 */
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { critique, loadPlaywright } from "./critic.mjs";

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures", "critic");
if (!loadPlaywright()) { console.log("critic controls skipped: playwright is not installed"); process.exit(0); }

const TYPES = { ".html": "text/html; charset=utf-8", ".jpg": "image/jpeg" };
const server = http.createServer((q, r) => {
  if (q.url.startsWith("/hang/")) return;   // a request that never answers (lazy-hang.html)
  const f = path.join(DIR, decodeURIComponent(new URL(q.url, "http://x").pathname).replace(/^\/+/, ""));
  if (!f.startsWith(DIR) || !fs.existsSync(f) || !fs.statSync(f).isFile()) { r.writeHead(404, { "content-type": "text/plain" }); return r.end("not found"); }
  r.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(r);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/`;

// fixture, the text that makes it differ from clean.html, the check that must fire (null: none),
// the level it must have, and the width it is read at
const CASES = [
  ["clean.html", null, null],
  ["overlap-text.html", 'class="pull"', "overlap.text", "blocking", 390],
  ["card-spill.html", "card fixed", "overlap.spill", "blocking", 1440],
  ["badge-in-photo.html", 'class="badge"', null],
  ["broken-image.html", "missing-photo.jpg", "photos.broken", "blocking", 1440],
  ["blog-no-photo.html", null, "photos.blog-no-photo", "blocking", 1440],
  ["small-text.html", "font-size:14px", "read.small-text", "blocking", 390],
  ["long-paragraph.html", null, "read.long-paragraph", "warning", 390],
  ["skipped-heading.html", "<h4>", "read.heading-skip", "warning", 1440],
  // clean.html pulls a rounded band up 28 px over an empty strip of the band above (quiet, by
  // design); this one pulls it up 90 px, over that band's words
  ["block-overlap.html", "margin-top:-90px", "overlap.block", "blocking", 390],
  // The verifier's fixtures (2026-10-31). Each one was a miss or a near miss before the fix named
  // in critic.mjs, or is a correct page that must stay quiet.
  ["overlap-3px.html", "margin-top:-19.2px", "overlap.text", "blocking", 390],          // capitals 3 px into the line above
  ["overlap-phone-only.html", ".chip{", "overlap.text-covered", "blocking", 390],      // the H1 wraps into its chip on a phone only
  ["abs-label-card.html", 'class="tag"', "overlap.text-on-card", "blocking", 1440],    // a label from one card on the next card
  ["table-phone.html", "<table class=\"fees\">", "overlap.page-scroll", "blocking", 390],  // a wide table, no scroll wrapper
  ["table-phone-clipped.html", "html,body{overflow-x:hidden}", "overlap.cut-off", "blocking", 390], // the same, cut off by the page
  ["lazy-never.html", "data-src=", "photos.broken", "blocking", 1440],                 // the lazy script never swaps in the photo
  ["lazy-hang.html", "hang/", "photos.broken", "blocking", 1440],                      // the photo request never answers
  ["icons-only.html", '<svg width="48"', "photos.blog-no-photo", "blocking", 1440],    // icons and a drawing, no photo
  ["sticky-badge.html", "position:sticky", null],                                      // correct: must be quiet
  ["skip-link.html", "left:-9999px", null],                                            // correct: must be quiet
  ["table-phone-scroll.html", '<div class="scroll">', "read.table-scroll", "warning", 390], // the table scrolls in its box, cut mid-word
  ["form-note.html", 'id="ldWrap"', null],                                             // correct: a lead form's small print is not body text
];
// pages that must have no findings at all at the given widths
const QUIET = [
  ["sticky-badge.html", [390, 1440]], ["skip-link.html", [390, 1440]],
  ["overlap-phone-only.html", [1440]], ["table-phone.html", [1440]], ["table-phone-clipped.html", [1440]],
  ["table-phone-scroll.html", [1440]], ["form-note.html", [390, 1440]],
];

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "ok  " : "FAIL"} ${msg}`); if (!cond) failures++; };

// the mutations landed
const clean = fs.readFileSync(path.join(DIR, "clean.html"), "utf8");
for (const [f, marker] of CASES) {
  if (!marker) continue;
  const t = fs.readFileSync(path.join(DIR, f), "utf8");
  ok(t.includes(marker) && !clean.includes(marker), `${f}: the defect "${marker}" is in the fixture and not in clean.html`);
}
ok(!fs.readFileSync(path.join(DIR, "blog-no-photo.html"), "utf8").includes("<img"), "blog-no-photo.html: has no <img>");
ok((fs.readFileSync(path.join(DIR, "long-paragraph.html"), "utf8").match(/<p>([^<]*)<\/p>/g) || []).some((p) => p.split(/\s+/).length > 110), "long-paragraph.html: has a paragraph of more than 110 words");

let out;
try { out = await critique({ base, paths: CASES.map((c) => "/" + c[0]), widths: [390, 1440] }); }
finally { server.closeAllConnections(); server.close(); }
const at = (f, w) => out.results.find((r) => r.path === "/" + f && r.width === w);

// the clean page: nothing at all, at either width
for (const w of [390, 1440]) {
  const r = at("clean.html", w);
  ok(r && r.findings.length === 0, `clean.html at ${w}: no findings${r && r.findings.length ? " (got " + r.findings.map((x) => x.check + ' "' + x.words + '" ' + (x.detail || "")).join("; ") + ")" : ""}`);
}
// the page facts are read once, at the widest width
ok(at("clean.html", 1440).facts.isBlog && at("clean.html", 1440).facts.photos === 1, "clean.html: read as a blog with 1 photo");
// the badge inside its own photo: no overlap finding at either width
for (const w of [390, 1440]) {
  const r = at("badge-in-photo.html", w);
  const ov = r.findings.filter((x) => /^overlap\./.test(x.check));
  ok(ov.length === 0, `badge-in-photo.html at ${w}: a badge inside its own photo is quiet${ov.length ? " (got " + ov.map((x) => x.check + " " + x.detail).join("; ") + ")" : ""}`);
}
for (const [f, ws] of QUIET) for (const w of ws) {
  const r = at(f, w);
  ok(r && r.findings.length === 0, `${f} at ${w}: no findings${r && r.findings.length ? " (got " + r.findings.map((x) => x.check + ' "' + x.words + '" ' + (x.detail || "")).join("; ") + ")" : ""}`);
}
// the 3 px overlap fires at both widths; the overlap that only exists on a phone names the chip
ok(at("overlap-3px.html", 1440).findings.some((x) => x.check === "overlap.text"), "overlap-3px.html at 1440: overlap.text fires");
ok(at("overlap-phone-only.html", 390).findings.some((x) => x.check === "overlap.text-covered" && /chip/.test(x.detail)), "overlap-phone-only.html at 390: the finding names the chip that covers the H1");
ok(at("table-phone-clipped.html", 390).findings.some((x) => x.check === "overlap.cut-off" && /the page/.test(x.detail)), "table-phone-clipped.html at 390: the cut-off finding names the page as the clipper");
// each defect fires, at the right level
for (const [f, , check, level, w] of CASES) {
  if (!check) continue;
  const r = at(f, w);
  const hit = r.findings.filter((x) => x.check === check);
  ok(hit.length > 0 && hit.every((x) => x.level === level), `${f} at ${w}: ${check} fires as ${level}${hit.length ? ' ("' + hit[0].words.slice(0, 50) + '")' : " (no finding: " + r.findings.map((x) => x.check).join(", ") + ")"}`);
  ok(hit.every((x) => x.words || x.detail), `${f} at ${w}: the finding names the words or the element`);
}
// the overlap finding gives a position
{
  const h = at("overlap-text.html", 390).findings.find((x) => x.check === "overlap.text");
  ok(h && h.y > 0 && h.w > 0 && /settlement/.test(h.words) && /pulled up/.test(h.words), "overlap-text.html: the finding has the overlapping words and a position");
}
// exit code: blocking findings exist on the defect pages and not on the clean one
ok(out.blocking > 0, "the run has blocking findings, so the CLI would exit 1");

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
