#!/usr/bin/env node
/*
 * gsc.js - what Google does with our pages, from the owner's Search Console exports.
 * Our own scorer only checks our rules; this checks the result (2026-11-05).
 *
 *   node tools/gsc.js import <export folder or .csv> [--date YYYY-MM-DD] [--kind pages|indexed|not-indexed]
 *   node tools/gsc.js report  <website-repo>          the latest numbers, each page's last change, and
 *                                                     sitemap pages Google showed nobody
 *   node tools/gsc.js compare <date-a> <date-b>       which pages gained or lost clicks or position
 *
 * Exports (measure/GSC-HOWTO.md):
 *  - Performance > Search results > Pages tab, last 28 days > Export > CSV. The zip holds Pages.csv
 *    (columns Top pages, Clicks, Impressions, CTR, Position). Import the folder or that file.
 *  - Indexing > Pages > a reason row > Export. Its Table.csv lists URLs; pass --kind not-indexed, or
 *    --kind indexed for "View data about indexed pages".
 * Each import is saved under measure/gsc/<date>/ as JSON. Nothing is sent anywhere.
 */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..", "measure");
const GSC = path.join(ROOT, "gsc");
const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const pos = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1].startsWith("--")));
const [cmd, a1, a2] = pos;

function csv(textIn) {
  const rows = []; let row = [], cell = "", q = false; const t = textIn.replace(/^﻿/, "");
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"' && t[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((x) => x.trim()));
}
const urlPath = (u) => { try { return new URL(u).pathname; } catch { return u; } };
const num = (x) => +String(x).replace(/[%,]/g, "") || 0;

function importOne(file, date, kind) {
  const rows = csv(fs.readFileSync(file, "utf8"));
  const head = rows[0].map((h) => h.trim().toLowerCase());
  const ci = (re) => head.findIndex((h) => re.test(h));
  const iu = ci(/^(top pages|page|pages|url)$/), ic = ci(/^clicks$/);
  if (iu < 0) return null;
  const dir = path.join(GSC, date); fs.mkdirSync(dir, { recursive: true });
  if (ic >= 0) {
    const ii = ci(/^impressions$/), ict = ci(/^ctr$/), ip = ci(/^position$/), out = {};
    for (const r of rows.slice(1)) out[urlPath(r[iu])] = { clicks: num(r[ic]), impressions: num(r[ii]), ctr: num(r[ict]), position: num(r[ip]) };
    fs.writeFileSync(path.join(dir, "pages.json"), JSON.stringify(out, null, 1) + "\n");
    return `pages.json: ${Object.keys(out).length} pages`;
  }
  const k = kind || "not-indexed", f = path.join(dir, `${k}.json`);
  const prev = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : [];
  const list = [...new Set(prev.concat(rows.slice(1).map((r) => urlPath(r[iu]))))].sort();
  fs.writeFileSync(f, JSON.stringify(list, null, 1) + "\n");
  return `${k}.json: ${list.length} URLs`;
}

const dates = () => (fs.existsSync(GSC) ? fs.readdirSync(GSC).filter((d) => /^\d{4}-\d\d-\d\d$/.test(d)).sort() : []);
const load = (d, f) => { const p = path.join(GSC, d, f); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : null; };
const pad = (s, n) => String(s).padEnd(n).slice(0, n), lpad = (s, n) => String(s).padStart(n);

if (cmd === "import") {
  if (!a1) throw new Error("usage: gsc.js import <export folder or .csv> [--date YYYY-MM-DD] [--kind ...]");
  const date = opt("--date", new Date().toISOString().slice(0, 10)), kind = opt("--kind");
  const files = fs.statSync(a1).isDirectory() ? fs.readdirSync(a1).filter((f) => /\.csv$/i.test(f)).map((f) => path.join(a1, f)) : [a1];
  for (const f of files) { const r = importOne(f, date, kind); if (r) console.log(`${path.basename(f)} -> measure/gsc/${date}/${r}`); }
} else if (cmd === "report") {
  const d = dates().filter((x) => load(x, "pages.json")).pop();
  if (!d) { console.log("No Search Console import yet. See measure/GSC-HOWTO.md."); process.exit(0); }
  const P = load(d, "pages.json"), NI = new Set(load(d, "not-indexed.json") || []);
  const CH = fs.existsSync(path.join(ROOT, "changes.json")) ? JSON.parse(fs.readFileSync(path.join(ROOT, "changes.json"), "utf8")).pages : {};
  let site = [];
  if (a1) { const sm = path.join(a1, "chapter3realty", "sitemap.xml"); if (fs.existsSync(sm)) site = [...fs.readFileSync(sm, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => urlPath(m[1])); }
  const urls = [...new Set(Object.keys(P).concat(site))];
  const rows = urls.map((u) => ({ u, ...(P[u] || { clicks: 0, impressions: 0, ctr: 0, position: 0 }), last: ((CH[u] || {}).events || []).slice(-1)[0] }));
  rows.sort((x, y) => y.impressions - x.impressions || y.clicks - x.clicks);
  console.log(`Search Console, 28 days to ${d}\n${pad("page", 46)} ${lpad("clicks", 6)} ${lpad("impr", 7)} ${lpad("ctr%", 5)} ${lpad("pos", 5)}  last change`);
  for (const r of rows) console.log(`${pad(r.u, 46)} ${lpad(r.clicks, 6)} ${lpad(r.impressions, 7)} ${lpad(r.ctr.toFixed(1), 5)} ${lpad(r.position ? r.position.toFixed(1) : "-", 5)}  ${r.last ? `${r.last.date} ${r.last.what}` : ""}${NI.has(r.u) ? "  NOT INDEXED" : ""}`);
  const none = rows.filter((r) => !r.impressions && site.includes(r.u));
  if (site.length) console.log(`\n${site.length} sitemap pages; ${site.length - none.length} shown in Google at least once; ${none.length} shown to nobody in 28 days (not indexed, or ranked past page 10).`);
} else if (cmd === "compare") {
  const A = load(a1, "pages.json"), B = load(a2, "pages.json");
  if (!A || !B) throw new Error("usage: gsc.js compare <date-a> <date-b> (both imported)");
  const rows = [...new Set(Object.keys(A).concat(Object.keys(B)))].map((u) => {
    const x = A[u] || { clicks: 0, impressions: 0, position: 0 }, y = B[u] || { clicks: 0, impressions: 0, position: 0 };
    return { u, dc: y.clicks - x.clicks, di: y.impressions - x.impressions, dp: x.position && y.position ? y.position - x.position : 0, x, y };
  }).sort((p, q) => p.dc - q.dc);
  console.log(`${pad("page", 46)} ${lpad("clicks", 13)} ${lpad("impressions", 15)} ${lpad("position", 13)}`);
  for (const r of rows) {
    const flag = (r.x.clicks >= 10 && r.y.clicks < r.x.clicks * 0.7) || r.dp >= 3 ? "  DOWN" : (r.y.clicks >= r.x.clicks * 1.3 && r.dc >= 5) || r.dp <= -3 ? "  UP" : "";
    console.log(`${pad(r.u, 46)} ${lpad(`${r.x.clicks}->${r.y.clicks}`, 13)} ${lpad(`${r.x.impressions}->${r.y.impressions}`, 15)} ${lpad(r.x.position && r.y.position ? `${r.x.position.toFixed(1)}->${r.y.position.toFixed(1)}` : "-", 13)}${flag}`);
  }
} else {
  console.log("usage: gsc.js import <folder|csv> [--date] [--kind] | report <website-repo> | compare <date-a> <date-b>");
}
