#!/usr/bin/env node
/*
 * inbound.js - how many other pages link to each page from their content (owner, 2026-11-09: "make sure
 * every page has referring pages ... for indexing purposes").
 *
 *   node tools/inbound.js <site> [--min 5] [--only /url/] [--json file]
 *
 * <site> is the website repo root. Pages are the sitemap's (sitemap.xml), less /homes/. A referring page
 * counts once, and only for a link inside its <main>: the header, footer and menus link to almost
 * everything and say nothing about the topic. Exits 1 when a page has fewer than --min (default 5).
 */
"use strict";
const fs = require("fs"), path = require("path");
const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const site = argv.find((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1].startsWith("--")));
if (!site) { console.error("usage: node tools/inbound.js <site> [--min 5] [--only /url/] [--json file]"); process.exit(2); }
const MIN = +opt("--min", 5), ONLY = opt("--only", null);
const root = fs.existsSync(path.join(site, "chapter3realty")) ? path.join(site, "chapter3realty") : site;
const sm = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sm.matchAll(/<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.startsWith("/homes"));
const norm = (h) => { h = h.split(/[?#]/)[0]; if (!h.startsWith("/")) return null; return h.endsWith("/") || /\.[a-z0-9]+$/i.test(h) ? h : h + "/"; };
const file = (u) => path.join(root, u.endsWith("/") ? u + "index.html" : u);
const inb = new Map(urls.map((u) => [u, new Set()]));
for (const u of urls) {
  if (!fs.existsSync(file(u))) continue;
  const s = fs.readFileSync(file(u), "utf8");
  const a = s.indexOf("<main"), z = s.indexOf("</main>");
  const main = a >= 0 && z > a ? s.slice(a, z) : "";
  for (const m of main.matchAll(/href="([^"]+)"/g)) {
    const h = norm(m[1]);
    if (h && h !== u && inb.has(h)) inb.get(h).add(u);
  }
}
const rows = urls.filter((u) => !ONLY || u === ONLY).map((u) => ({ url: u, n: inb.get(u).size, from: [...inb.get(u)].sort() })).sort((x, y) => x.n - y.n || x.url.localeCompare(y.url));
const weak = rows.filter((r) => r.n < MIN);
for (const r of rows) if (ONLY || r.n < MIN) console.log(`${String(r.n).padStart(3)}  ${r.url}${r.n ? "  <- " + r.from.join(", ") : ""}`);
console.log(`${rows.length} pages; ${weak.length} with fewer than ${MIN} referring pages in content.`);
if (opt("--json", null)) fs.writeFileSync(opt("--json"), JSON.stringify(rows, null, 1));
process.exit(weak.length ? 1 : 0);
