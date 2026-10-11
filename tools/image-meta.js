#!/usr/bin/env node
/*
 * image-meta.js: every picture on a page carries what search engines and answer engines
 * read. STANDARD S13; the findings and their sources are in rules/image-metadata.md.
 *
 *   node tools/image-meta.js <site>/chapter3realty                    pages that use photos.js
 *   node tools/image-meta.js <site>/chapter3realty --only /buyers/55-plus-communities/myrtle-trace/
 *   node tools/image-meta.js <site>/chapter3realty --all              every <img> on every page
 *   add --json for machine output
 *
 * A page fails when:
 *   - an <img> in <main> has no alt, an alt under 3 words or over 250 characters, an alt
 *     that starts "image of", "photo of" or "picture of", or an alt that is a file name;
 *   - an <img> file name is not descriptive (img_1234, DSC0042, image1);
 *   - an <img> file (its src, and every srcset file) is missing, or is a WebP, JPG or PNG
 *     without the embedded metadata Google reads: Creator, Credit Line, Copyright Notice,
 *     Web Statement of Rights, Licensor URL, Description, Alt Text (Accessibility) and
 *     Digital Source Type (tools/photos.js embedMetadata writes them);
 *   - an <img> has no ImageObject in the page's JSON-LD with its src as contentUrl, or that
 *     ImageObject lacks creator, creditText, copyrightNotice, license or acquireLicensePage;
 *   - an inline <svg> in <main> is neither labelled (role="img" with an aria-label of 12 or
 *     more characters, or a <title>) nor hidden (aria-hidden="true");
 *   - the page has a hero photo and Article.image is not that photo in 1x1, 4x3 and 16x9,
 *     each 1200 px wide, each file present with its metadata; or Article.image or
 *     primaryImageOfPage is a share card with text on it (/og/ or og-image.jpg).
 *
 * By default only pages built with tools/photos.js (class c3ph-) are checked: the older
 * pages have no licensed photos yet, and would fail on every image. --all checks them too.
 * Needs exiftool for the embedded fields (apt-get install libimage-exiftool-perl); without
 * it, those checks fail with a note, so a missing tool never reads as a pass.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");
const P = require("./photos.js");

const SITE = P.SITE;
const RATIOS = { "1x1": 1, "4x3": 4 / 3, "16x9": 16 / 9 };

function walk(d, out = []) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p, out); else if (f === "index.html") out.push(p);
  }
  return out;
}

/* The alt text rules, in one place (Google image SEO, Bing guidelines, IPTC Alt Text). */
function altProblem(alt) {
  if (alt === undefined) return "no alt attribute";
  const a = String(alt).trim();
  if (!a) return "empty alt on a content image";
  if (a.split(/\s+/).length < 3) return `alt "${a}" is under 3 words; say what the picture shows and where`;
  if (a.length > 250) return `alt is ${a.length} characters; IPTC and screen readers want 250 or fewer`;
  if (/^(?:an? )?(?:image|photo|photograph|picture|graphic) of\b/i.test(a)) return `alt "${a.slice(0, 40)}" starts with "${a.split(" ").slice(0, 2).join(" ")}"; a screen reader already says it is an image`;
  if (/\.(?:jpe?g|png|webp|gif|avif|svg)\b/i.test(a) || /^[\w-]+$/.test(a)) return `alt "${a}" is a file name`;
  return "";
}
const GENERIC_NAME = /^(?:img|image|photo|pic|picture|dsc|dscn|dcim|pxl|screenshot|untitled|file)[-_ ]?\d*(?:[-_]\d+w)?$/i;

/* A site path ("/images/x.webp" or "https://chapter3realty.com/images/x.webp") on disk. */
function onDisk(root, u) {
  const p = String(u || "").replace(SITE, "").split(/[?#]/)[0];
  if (!p.startsWith("/")) return null;
  return path.join(root, ...p.split("/").filter(Boolean));
}

function readLd($) {
  const out = [];
  $('script[type="application/ld+json"]').each((_, e) => {
    try { const j = JSON.parse($(e).text()); for (const x of (j["@graph"] || [].concat(j))) out.push(x); } catch { out.push({ "@type": "__PARSE_ERROR__" }); }
  });
  return out;
}
const isType = (x, t) => [].concat((x && x["@type"]) || []).includes(t);

/* Embedded metadata, with a cache: one exiftool call per file. */
function embeddedProblems(file, cache) {
  if (cache.has(file)) return cache.get(file);
  let out;
  if (!/\.(?:webp|jpe?g|png)$/i.test(file)) out = [];
  else if (!P.hasExiftool()) out = ["exiftool is not installed, so the embedded metadata cannot be read"];
  else { try { out = P.checkEmbedded(null, file); } catch (e) { out = [`unreadable: ${e.message.slice(0, 80)}`]; } }
  cache.set(file, out);
  return out;
}

/*
 * Checks one page. Returns a list of { check, detail }. html: the page; root: the site
 * folder (<site>/chapter3realty) for the image files.
 */
function checkPage(html, root, o = {}) {
  const $ = cheerio.load(html);
  const problems = [];
  const add = (check, detail) => problems.push({ check, detail });
  const cache = o.cache || new Map();
  const ld = readLd($);
  if (ld.some((x) => isType(x, "__PARSE_ERROR__"))) add("json-ld", "a JSON-LD block does not parse");
  const objects = ld.filter((x) => isType(x, "ImageObject"));
  const byUrl = new Map(objects.map((x) => [x.contentUrl || x.url, x]));
  const main = $("main").first();

  /* <img> in main */
  main.find("img").each((_, e) => {
    const el = $(e);
    const src = el.attr("src") || "";
    const name = path.basename(src.split(/[?#]/)[0]).replace(/\.[a-z0-9]+$/i, "");
    const ap = altProblem(el.attr("alt"));
    if (ap) add("alt", `${src}: ${ap}`);
    if (GENERIC_NAME.test(name)) add("file-name", `${src}: name the file for what it shows (Google: "short, but descriptive")`);
    const files = [src, ...String(el.attr("srcset") || "").split(",").map((s) => s.trim().split(/\s+/)[0]).filter(Boolean)];
    for (const f of [...new Set(files)]) {
      const at = onDisk(root, f);
      if (!at || !fs.existsSync(at)) { add("file", `${f}: not found under the site folder`); continue; }
      const bad = embeddedProblems(at, cache);
      if (bad.length) add("embedded", `${f}: ${bad.join("; ")}`);
    }
    const abs = src.startsWith("http") ? src : SITE + src;
    const io = byUrl.get(abs);
    if (!io) add("schema", `${src}: no ImageObject with this contentUrl in the page's JSON-LD (photos.js imageSchema)`);
    else {
      const miss = ["creator", "creditText", "copyrightNotice", "license", "acquireLicensePage"].filter((k) => !io[k]);
      if (miss.length) add("schema", `${src}: the ImageObject has no ${miss.join(", ")}`);
    }
  });

  /* inline <svg> in main: labelled or hidden */
  main.find("svg").each((_, e) => {
    const el = $(e);
    if (el.parents("svg").length) return;
    if (el.attr("aria-hidden") === "true") return;
    const label = String(el.attr("aria-label") || "").trim();
    const title = String(el.children("title").first().text() || "").trim();
    if (el.attr("role") === "img" && (label.length >= 12 || title.length >= 12)) return;
    if (el.attr("role") !== "img" && !label && !title) add("svg", `an inline <svg>${el.attr("id") ? ` (#${el.attr("id")})` : ""} has no role="img" with a label and is not aria-hidden`);
    else add("svg", `an inline <svg>${el.attr("id") ? ` (#${el.attr("id")})` : ""} has a label under 12 characters: "${label || title}"`);
  });

  /* Article.image and primaryImageOfPage */
  const article = ld.find((x) => isType(x, "Article") || isType(x, "BlogPosting") || isType(x, "NewsArticle"));
  const webpage = ld.find((x) => isType(x, "WebPage"));
  const hero = main.find(".c3ph-hero img, img[fetchpriority=high]").first();
  const card = (u) => /\/og\/[^/]+\.(?:jpe?g|png)$|\/og-image\.(?:jpe?g|png)$/.test(String(u || ""));
  const imgs = article ? [].concat(article.image || []) : [];
  const urlOf = (i) => (typeof i === "string" ? i : i && (i.contentUrl || i.url));
  if (hero.length) {
    if (!article) add("article-image", "the page has a hero photo but no Article schema");
    else {
      if (imgs.some((i) => card(urlOf(i)))) add("article-image", "Article.image is a share card with text on it; Google: avoid \"an image with text in the schema.org markup\"");
      for (const [k, r] of Object.entries(RATIOS)) {
        const hit = imgs.find((i) => typeof i === "object" && i.width >= 1200 && i.height > 0 && Math.abs(i.width / i.height - r) < 0.01);
        if (!hit) { add("article-image", `Article.image has no ${k} image 1200 px wide (photos.js pageImages)`); continue; }
        const at = onDisk(root, urlOf(hit));
        if (!at || !fs.existsSync(at)) { add("article-image", `${urlOf(hit)}: not found under the site folder`); continue; }
        if (P.hasExiftool()) {
          const e = P.readEmbedded(at);
          const w = e["RIFF:ImageWidth"] || e["File:ImageWidth"] || e["PNG:ImageWidth"], h = e["RIFF:ImageHeight"] || e["File:ImageHeight"] || e["PNG:ImageHeight"];
          if (w && h && (w !== hit.width || h !== hit.height)) add("article-image", `${urlOf(hit)}: the file is ${w} x ${h}, the schema says ${hit.width} x ${hit.height}`);
        }
        const bad = embeddedProblems(at, cache);
        if (bad.length) add("embedded", `${urlOf(hit)}: ${bad.join("; ")}`);
        const miss = ["creator", "creditText", "copyrightNotice", "license", "acquireLicensePage"].filter((x) => !hit[x]);
        if (miss.length) add("article-image", `${urlOf(hit)}: no ${miss.join(", ")}`);
      }
    }
    const pi = webpage && webpage.primaryImageOfPage;
    if (pi && card(urlOf(pi))) add("article-image", "WebPage.primaryImageOfPage is a share card with text on it; use the hero photo");
  }
  return problems;
}

function run(root, o = {}) {
  const pages = walk(root).map((f) => {
    const rel = path.relative(root, path.dirname(f)).split(path.sep).join("/");
    return { url: rel ? `/${rel}/` : "/", file: f };
  });
  const cache = new Map();
  const out = [];
  for (const p of pages) {
    if (o.only && p.url !== o.only) continue;
    const html = fs.readFileSync(p.file, "utf8");
    if (!o.only && !o.all && !/class="c3ph-/.test(html)) continue;
    out.push({ url: p.url, problems: checkPage(html, root, { cache }) });
  }
  return out;
}

module.exports = { checkPage, run, altProblem, GENERIC_NAME };

if (require.main === module) {
  const args = process.argv.slice(2);
  const root = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--only");
  if (!root) { console.log("node tools/image-meta.js <site>/chapter3realty [--only /url/] [--all] [--json]"); process.exit(1); }
  const oi = args.indexOf("--only");
  const res = run(path.resolve(root), { only: oi >= 0 ? args[oi + 1] : null, all: args.includes("--all") });
  if (args.includes("--json")) { console.log(JSON.stringify(res, null, 1)); }
  else {
    for (const r of res) {
      console.log(`${r.problems.length ? "FAIL" : "ok  "}  ${r.url}`);
      for (const p of r.problems) console.log(`      ${p.check}: ${p.detail}`);
    }
    const bad = res.filter((r) => r.problems.length).length;
    console.log(!res.length ? "\nno page checked" : bad ? `\n${bad} of ${res.length} page(s) fail S13` : `\nall ${res.length} page(s) pass: every image carries its metadata`);
  }
  process.exitCode = res.some((r) => r.problems.length) || !res.length ? 1 : 0;
}
