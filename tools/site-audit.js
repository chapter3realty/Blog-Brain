#!/usr/bin/env node
/*
 * site-audit.js - the sitewide technical checks that no single page shows.
 * Written from the 2026-10-01 audit (audit/AUDIT.md). Run it before every
 * deploy and once a month.
 *
 *   node tools/site-audit.js <website-repo>              source checks only (fast, offline)
 *   node tools/site-audit.js <website-repo> --live       also hits https://chapter3realty.com
 *   add --json for machine output
 *
 * Source checks (the files in <website-repo>/chapter3realty):
 *   broken internal links and #anchors, links into _redirects, redirect chains,
 *   canonical and og:url = the page URL, sitemap = indexable pages, llms.txt
 *   lists every sitemap URL, JSON-LD parses, one H1, html lang, img alt and
 *   dimensions, odd tel: links, pages with fewer than 2 body inbound links,
 *   unbalanced <div>/<section> inside <main>, sitemap lastmod bulk-stamping,
 *   template residue (%s, {{, undefined, NaN) in rendered text.
 *
 * Live checks (--live):
 *   every sitemap URL returns 200; http, www, no-slash and index.html variants
 *   reach the canonical in one hop; a bad URL returns 404; repo-only files
 *   (.git, build.js, HANDOFF.md) are not served; every /assets/ file a live page
 *   references exists; every external link resolves. External failures are split
 *   into BROKEN (404, 410, DNS) and BLOCKED (401/403/405/429/503, usually a bot
 *   wall). Check BLOCKED ones once in a browser.
 *
 * Exit 1 on any error-level finding. Every check was run against a planted
 * defect before it was trusted (website MISTAKES rule 4): a link to a missing
 * page and an href to a missing #id both fire.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

const SITE = "https://chapter3realty.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36";
const RESIDUE_RE = /(?:(?<![0-9])%[sd]\b|\{\{|\}\}|\bundefined\b|\bNaN\b|\[object Object\]|lorem ipsum)/;

const findings = [];
const add = (level, check, url, detail) => findings.push({ level, check, url, detail });

function walk(d, out = []) {
  for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, out); else out.push(p); }
  return out;
}

function sourceChecks(root) {
  const files = walk(root);
  const fileSet = new Set(files.map(f => "/" + path.relative(root, f).split(path.sep).join("/")));
  const pages = files.filter(f => path.basename(f) === "index.html").map(f => {
    const rel = path.relative(root, path.dirname(f)).split(path.sep).join("/");
    const html = fs.readFileSync(f, "utf8");
    return { url: rel ? `/${rel}/` : "/", html, $: cheerio.load(html) };
  });
  const byUrl = new Map(pages.map(p => [p.url, p]));
  const sitemapXml = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const sitemap = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE, ""));
  const redirects = new Map(fs.existsSync(path.join(root, "_redirects")) ? fs.readFileSync(path.join(root, "_redirects"), "utf8").split("\n")
    .filter(l => l.trim() && !l.startsWith("#")).map(l => l.trim().split(/\s+/)).map(r => [r[0], r[1]]) : []);
  const ids = new Map(pages.map(p => [p.url, new Set(p.$("[id], a[name]").map((_, e) => p.$(e).attr("id") || p.$(e).attr("name")).get())]));
  const inbound = new Map();

  for (const p of pages) {
    const { $, url } = p;
    const noindex = /noindex/i.test($('meta[name="robots"]').attr("content") || "");
    p.noindex = noindex;
    const canon = $('link[rel="canonical"]').attr("href") || "";
    if (url !== "/404/" && !noindex) {
      if (!canon) add("error", "canonical", url, "missing");
      else if (canon !== SITE + url) add("error", "canonical", url, `points at ${canon}`);
      const ogu = $('meta[property="og:url"]').attr("content");
      if (ogu && ogu !== SITE + url) add("warn", "og:url", url, ogu);
      if (!sitemap.includes(url)) add("error", "sitemap", url, "indexable page missing from sitemap.xml");
    }
    if (noindex && sitemap.includes(url)) add("error", "sitemap", url, "noindex page listed in sitemap.xml");
    if ($("h1").length !== 1) add("warn", "h1", url, `${$("h1").length} H1 elements`);
    if (!$("html").attr("lang")) add("warn", "lang", url, "no <html lang>");
    $("img").each((_, e) => {
      const el = $(e);
      if (el.attr("alt") === undefined) add("error", "img-alt", url, el.attr("src"));
      if (!el.attr("width") || !el.attr("height")) add("warn", "img-dimensions", url, `${el.attr("src")} has no width/height (layout shift)`);
    });
    $('script[type="application/ld+json"]').each((_, e) => { try { JSON.parse($(e).text()); } catch (err) { add("error", "json-ld", url, err.message.slice(0, 80)); } });

    const main = p.html.slice(Math.max(0, p.html.indexOf("<main")), p.html.indexOf("</main>") + 7);
    for (const tag of ["div", "section"]) {
      const open = (main.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length, close = (main.match(new RegExp(`</${tag}>`, "g")) || []).length;
      if (open !== close) add("error", "markup", url, `${open} <${tag}> against ${close} </${tag}> inside <main>; the browser re-parents what follows`);
    }
    /* A space before every tag, so text from adjacent elements does not run together ("%s" + "Analyze" -> "%sAnalyze"). */
    const mainText = cheerio.load(main.replace(/<(script|style)[\s\S]*?<\/\1>/g, "").replace(/</g, " <")).text().replace(/\s+/g, " ");
    const m = mainText.match(RESIDUE_RE);
    if (m) add("error", "residue", url, `"${m[0]}" in rendered text: ...${mainText.slice(Math.max(0, m.index - 40), m.index + 30)}...`);

    $("a[href]").each((_, a) => {
      const el = $(a), href = (el.attr("href") || "").trim();
      if (/^tel:/i.test(href) && el.closest("main").length && href.replace(/\D/g, "") !== "18543332135" && !/^\+1/.test(href.slice(4)))
        add("warn", "tel", url, `${href} has no +1 country code`);
      if (/^#./.test(href)) { if (!ids.get(url).has(href.slice(1))) add("error", "anchor", url, `${href} has no matching id on the page`); return; }
      if (!/^\/(?!\/)/.test(href)) return;
      const [pathPart, hash] = href.split("#"), target = pathPart.split("?")[0];
      const exists = byUrl.has(target) || fileSet.has(target) || fileSet.has(target.replace(/\/?$/, "/index.html"));
      if (!exists) {
        const r = redirects.get(target) || redirects.get(target.replace(/\/$/, ""));
        add(r ? "warn" : "error", "internal-link", url, r ? `${href} goes through a redirect to ${r}; link to ${r} directly` : `${href} does not exist`);
      } else if (hash && byUrl.has(target) && !ids.get(target).has(hash)) add("error", "anchor", url, `${href}: no id="${hash}" on ${target}`);
      if (el.closest("main").length && target !== url && byUrl.has(target)) { if (!inbound.has(target)) inbound.set(target, new Set()); inbound.get(target).add(url); }
    });
  }
  /* Lead delivery. c3SendForm() silently drops any call without `consent`
     (`if (!crm.consent) { ... return; }`), while the page shows its thank-you
     message anyway. On 2026-10-01 four forms lost every lead that way, including
     the property search on every page. Every call must pass consent. */
  const pageSrc = new Map(pages.map(p => [p.url, p.html]));
  const jsFiles = files.filter(f => /\.(?:js|html)$/.test(f));
  for (const f of jsFiles) {
    const src = fs.readFileSync(f, "utf8"), rel = "/" + path.relative(root, f).split(path.sep).join("/");
    for (const m of src.matchAll(/(?<!function )c3SendForm\(\s*\{([\s\S]{0,800}?)\}\s*,\s*(['"][^'"]*['"])?/g)) {
      if (/consent\s*:/.test(m[1])) continue;
      const name = (m[2] || "(unnamed)").replace(/['"]/g, "");
      /* The handler that encloses this call: the latest declared function whose body is still
         open at the call (brace count > 0). A nested helper declared and closed before the call
         (ltrGateSubmit() holds a small val() helper) is skipped. */
      let fn;
      for (const d of [...src.slice(0, m.index).matchAll(/function\s+([A-Za-z0-9_$]+)\s*\([^)]*\)\s*\{/g)].reverse()) {
        let depth = 0, closed = false;
        for (const ch of src.slice(d.index + d[0].length - 1, m.index)) { if (ch === "{") depth++; else if (ch === "}" && --depth === 0) { closed = true; break; } }
        if (!closed) { fn = d[1]; break; }
      }
      if (!rel.startsWith("/assets/")) { add("error", "form-consent", rel.replace(/index\.html$/, ""), `c3SendForm(..., "${name}") passes no consent, so the lead is dropped after the thank-you message`); continue; }
      /* A call in a shared bundle loses leads only on pages that load the bundle, call the
         handler, and do not define their own version of it (a later inline definition wins). */
      const bundle = rel.slice(1);
      const live = [], overridden = [];
      for (const [url, html] of pageSrc) {
        if (!html.includes(bundle) || !fn || !new RegExp(`\\b${fn}\\s*\\(`).test(html.replace(new RegExp(`function\\s+${fn}\\s*\\(`, "g"), ""))) continue;
        (new RegExp(`function\\s+${fn}\\s*\\(`).test(html) ? overridden : live).push(url);
      }
      if (live.length) add("error", "form-consent", `${live.slice(0, 3).join(" ")}${live.length > 3 ? ` (+${live.length - 3} more)` : ""}`, `${fn}() in ${rel} calls c3SendForm(..., "${name}") with no consent, so the lead is dropped after the thank-you message`);
      else add("warn", "form-consent", rel, `${fn || "a handler"}() calls c3SendForm(..., "${name}") with no consent. No page uses it today (${overridden.length ? `overridden inline on ${overridden.join(" ")}` : "unused"}); fix or delete it before a page relies on it`);
    }
  }
  /* A phone field needs the locked consent checkbox in its form block: the nearest
     ancestor that holds a submit control (TCPA). */
  for (const p of pages) {
    const { $, url } = p;
    $('input[type="tel"], input[id*="phone" i], input[name*="phone" i], input[placeholder*="phone" i]').each((_, e) => {
      let block = $(e).parent();
      for (let i = 0; i < 8 && block.length && !block.is("body"); i++) {
        if (block.find('button, input[type="submit"], [onclick]').length) break;
        block = block.parent();
      }
      if (!/I consent to receive calls and text messages/.test(block.text())) add("error", "phone-consent", url, `phone field #${$(e).attr("id") || $(e).attr("name") || "?"} has no consent checkbox in its form block`);
    });
  }

  for (const p of pages) {
    if (p.noindex || p.url === "/" || p.url === "/404/") continue;
    const n = (inbound.get(p.url) || new Set()).size;
    if (n < 2) add(n ? "warn" : "error", "inbound", p.url, `${n} other page(s) link here from body copy`);
  }
  for (const [src, dst] of redirects) {
    const d = dst.split("#")[0];
    if (redirects.has(d)) add("warn", "redirect-chain", src, `${dst} redirects again to ${redirects.get(d)}`);
    if (!/^https?:/.test(d) && !byUrl.has(d) && !fileSet.has(d)) add("error", "redirect-target", src, `${dst} does not exist`);
  }
  /* llms.txt lists every sitemap URL. */
  const llmsFile = path.join(root, "llms.txt");
  if (fs.existsSync(llmsFile)) {
    const listed = new Set([...fs.readFileSync(llmsFile, "utf8").matchAll(/https:\/\/chapter3realty\.com(\/[^)\s]*)/g)].map(m => m[1]));
    for (const u of sitemap) if (u !== "/" && !listed.has(u)) add("warn", "llms.txt", u, "in sitemap.xml but not in llms.txt");
  }
  /* Bulk-stamped lastmod: Google discounts a sitemap where most dates match. */
  const lastmods = [...sitemapXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map(m => m[1]);
  const counts = lastmods.reduce((a, d) => (a[d] = (a[d] || 0) + 1, a), {});
  const [topDate, topN] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || [];
  if (topN / Math.max(1, lastmods.length) > 0.5) add("warn", "sitemap-lastmod", "/sitemap.xml", `${topN} of ${lastmods.length} URLs share lastmod ${topDate}`);
  return { pages, sitemap };
}

async function fetchStatus(url, method = "GET", follow = false) {
  try {
    const r = await fetch(url, { method, redirect: follow ? "follow" : "manual", headers: { "user-agent": UA }, signal: AbortSignal.timeout(20000) });
    return { s: r.status, loc: r.headers.get("location"), type: r.headers.get("content-type") || "", text: method === "GET" && !follow ? await r.text() : "" };
  } catch (e) { return { s: 0, err: String((e.cause && e.cause.code) || e.message) }; }
}
async function pool(items, n, fn) { const out = []; let i = 0; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } })); return out; }

async function liveChecks(src) {
  const pageResults = await pool(src.sitemap, 6, async (u) => ({ u, r: await fetchStatus(SITE + u) }));
  const assets = new Set();
  for (const { u, r } of pageResults) {
    if (r.s !== 200) add("error", "live-status", u, `returns ${r.s || r.err}`);
    for (const m of (r.text || "").matchAll(/(?:href|src)="(\/assets\/[^"]+)"/g)) assets.add(m[1]);
  }
  for (const a of assets) { const r = await fetchStatus(SITE + a, "GET"); if (r.s !== 200 || /text\/html/.test(r.type)) add("error", "live-asset", a, `returns ${r.s} ${r.type}`); }

  const variants = [["http://chapter3realty.com/", "/"], ["https://www.chapter3realty.com/", "/"], [`${SITE}/invest/llc`, "/invest/llc/"], [`${SITE}/invest/llc/index.html`, "/invest/llc/"]];
  for (const [from, to] of variants) {
    const r = await fetchStatus(from);
    const dest = r.loc ? new URL(r.loc, from).href : "";
    if (![301, 308].includes(r.s) || dest !== SITE + to) add("error", "live-redirect", from, `${r.s} -> ${dest || "(none)"}; expected one permanent hop to ${SITE + to}`);
  }
  const nf = await fetchStatus(`${SITE}/blog-brain-404-check/`);
  if (nf.s !== 404) add("error", "live-404", "/blog-brain-404-check/", `a missing page returns ${nf.s}, not 404`);
  for (const f of ["/.git/config", "/build.js", "/HANDOFF.md", "/PLAYBOOK.md"]) { const r = await fetchStatus(SITE + f); if (r.s === 200) add("error", "live-exposed", f, "a repo file is publicly served"); }

  const ext = new Map();
  for (const p of src.pages) p.$('a[href^="http"]').each((_, a) => { const h = p.$(a).attr("href"); if (/chapter3realty\.com/.test(h)) return; if (!ext.has(h)) ext.set(h, new Set()); ext.get(h).add(p.url); });
  await pool([...ext.keys()], 8, async (u) => {
    let r = await fetchStatus(u, "HEAD", true);
    if (!r.s || r.s >= 400) r = await fetchStatus(u, "GET", true);
    const where = [...ext.get(u)].slice(0, 3).join(" ");
    if (r.s === 404 || r.s === 410 || /ENOTFOUND|EAI_AGAIN/.test(r.err || "")) add("error", "external-broken", where, `${u} -> ${r.s || r.err}`);
    else if (!r.s || r.s >= 400) add("info", "external-blocked", where, `${u} -> ${r.s || r.err} (usually a bot wall; check once in a browser)`);
  });
}

async function main() {
  const args = process.argv.slice(2), repo = args.find(a => !a.startsWith("--"));
  if (!repo) { console.error("usage: node tools/site-audit.js <website-repo> [--live] [--json]"); process.exit(2); }
  const root = fs.existsSync(path.join(repo, "chapter3realty")) ? path.join(repo, "chapter3realty") : repo;
  const src = sourceChecks(root);
  if (args.includes("--live")) await liveChecks(src);
  if (args.includes("--json")) console.log(JSON.stringify(findings, null, 1));
  else {
    const order = { error: 0, warn: 1, info: 2 };
    findings.sort((a, b) => order[a.level] - order[b.level] || a.check.localeCompare(b.check));
    for (const f of findings) console.log(`${f.level.toUpperCase().padEnd(5)} ${f.check.padEnd(16)} ${f.url}  ${f.detail}`);
    const c = findings.reduce((a, f) => (a[f.level] = (a[f.level] || 0) + 1, a), {});
    console.log(`\n${src.pages.length} pages. ${c.error || 0} errors, ${c.warn || 0} warnings, ${c.info || 0} info.`);
  }
  process.exitCode = findings.some(f => f.level === "error") ? 1 : 0;
}

module.exports = { sourceChecks, findings };
if (require.main === module) main();
