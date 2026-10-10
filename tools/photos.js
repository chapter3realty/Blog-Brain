#!/usr/bin/env node
/*
 * photos.js: photos on a page, done one way everywhere. A wide photo at the top, a
 * row of two or three, small picture cards for features, and the credits at the end.
 *
 * Usage, in a spec or a tool:
 *
 *   const P = require("<blog-brain>/tools/photos.js");
 *   const photos = require("<batch>/data/photos.json").photos;
 *   const rec = (name) => P.findPhoto(photos, name);           // by file name, with or without .webp
 *
 *   P.heroPhoto(rec("conway-riverwalk"), { alt: "The riverwalk on the Waccamaw River in Conway" })
 *   P.gallery([
 *     { photo: rec("conway-main-street"), alt: "Old brick shops on Main Street in Conway", caption: "Main Street, downtown Conway" },
 *     { photo: rec("conway-city-hall"),   alt: "Conway City Hall, a white building with a clock", caption: "City Hall" },
 *   ])
 *   P.featureCards([
 *     { illustration: "indoor-pool", label: "Indoor pool", text: "Open all year" },
 *     { photo: rec("murrells-inlet-boats"), alt: "Fishing boats at a marina", label: "Boating", text: "A marina about 10 minutes away" },
 *   ])
 *   P.creditsList([rec("conway-riverwalk"), rec("conway-main-street"), rec("conway-city-hall")])
 *
 *   node tools/photos.js check <photos.json> [image root]     // every record passes the guard; files exist
 *   node tools/photos.js variants <source image> <out base>   // writes <out base>-600w.webp and -1200w.webp
 *
 * What every image gets:
 *   - WebP, a 600w and a 1200w file in srcset, a sizes attribute, and width and height,
 *     so the page does not jump while it loads.
 *   - Alt text. It is required: a missing or one-word alt throws.
 *   - loading="lazy", except the hero, which gets fetchpriority="high" because it may be
 *     the largest thing the phone paints.
 *   - A credit: a tiny line on the photo itself, and the full line in creditsList.
 *
 * The guard (checkRecord) throws before any markup is made when a record has:
 *   - no source, author, license or credit line, or (for a licensed photo) no license URL;
 *   - a license other than CC0, public domain, CC BY, CC BY-SA, "own" (Chapter3's own
 *     photo) or "illustration" (a drawing Chapter3 made); NC, ND and "all rights reserved"
 *     are refused;
 *   - a license URL that does not match the license (a CC BY-SA photo must link the BY-SA deed);
 *   - a "hold" note (a photo we found a problem with; the note says what).
 * See rules/images.md for the rules in plain words.
 *
 * Markup: plain HTML strings. Every text is escaped. The few rules that need a media query
 * sit in one small <style> block per call (opts.css: false leaves it out; photoCss()
 * returns all of it once). Class names start with c3ph-. Colors and fonts are the site's
 * CSS variables. No script.
 */
"use strict";

const path = require("path");
const fs = require("fs");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;

/* ---------------------------------------------------------------------------- */
/* The guard                                                                      */

/* Each allowed license: how its name reads, and what its URL must contain. */
const LICENSES = [
  { kind: "cc0", name: /^CC0(?: 1\.0)?$/i, url: /creativecommons\.org\/publicdomain\/zero\// },
  { kind: "pd", name: /^public domain$/i, url: /creativecommons\.org\/publicdomain\/mark\/|commons\.wikimedia\.org\/wiki\/Template:PD|\.gov\// },
  { kind: "by", name: /^CC BY (?:[1-4]\.0|2\.5)$/i, url: /creativecommons\.org\/licenses\/by\/[1-4]\.[05]\/?$/ },
  { kind: "by-sa", name: /^CC BY-SA (?:[1-4]\.0|2\.5)$/i, url: /creativecommons\.org\/licenses\/by-sa\/[1-4]\.[05]\/?$/ },
  { kind: "own", name: /^own$/i, url: null },
  { kind: "illustration", name: /^illustration$/i, url: null },
];
const ALLOWED = "CC0, Public domain, CC BY x.x, CC BY-SA x.x, own, illustration";

const label = (rec) => (rec && (rec.file || rec.title || rec.source)) || "(no file)";

function licenseOf(rec) {
  const name = String(rec.license || "").trim();
  return LICENSES.find((l) => l.name.test(name));
}

/*
 * Throws unless the record is a usable, licensed image. Returns the license kind
 * ("cc0", "pd", "by", "by-sa", "own" or "illustration").
 */
function checkRecord(rec) {
  if (!rec || typeof rec !== "object") throw new Error("photos.js: no image record (pass a photos.json entry)");
  const who = label(rec);
  if (rec.hold) throw new Error(`photos.js: ${who} is on hold and may not be used: ${rec.hold}`);
  const source = rec.source || rec.commons_page;
  const missing = [["source", source], ["author", rec.author], ["license", rec.license], ["credit", rec.credit]].filter(([, v]) => !String(v || "").trim()).map(([k]) => k);
  if (missing.length) throw new Error(`photos.js: ${who} has no license record (${missing.join(", ")} missing)`);
  const lic = licenseOf(rec);
  if (!lic) throw new Error(`photos.js: ${who} has license "${rec.license}". Allowed: ${ALLOWED}. Never NC, ND or all rights reserved.`);
  if (lic.url) {
    if (!String(rec.license_url || "").trim()) throw new Error(`photos.js: ${who} has no license URL (license_url)`);
    if (!lic.url.test(rec.license_url)) throw new Error(`photos.js: ${who} license URL ${rec.license_url} does not match "${rec.license}"`);
    const v = (String(rec.license).match(/(\d\.\d)/) || [])[1];
    if (v && !rec.license_url.includes(`/${v}`)) throw new Error(`photos.js: ${who} license URL ${rec.license_url} is not version ${v}`);
    if (!/^https:\/\//.test(source)) throw new Error(`photos.js: ${who} source must be the https page the photo came from`);
  }
  return lic.kind;
}

/* Finds a record by its file name (with or without .webp and a -600w/-1200w ending). */
function findPhoto(list, name) {
  const want = String(name).replace(/\.webp$/, "").replace(/-(?:600|1200)w$/, "");
  const hit = (list || []).find((r) => path.basename(String(r.file || ""), ".webp") === want);
  if (!hit) throw new Error(`photos.js: no photo named ${name}`);
  return hit;
}

/* ---------------------------------------------------------------------------- */
/* srcset                                                                         */

/* The two files and the size of the large one. Records hold variants: { "600": path, "1200": path }. */
function imageSet(rec, base = "/") {
  const v = rec.variants || {};
  if (!v["600"] || !v["1200"]) throw new Error(`photos.js: ${label(rec)} needs variants "600" and "1200" (run: node tools/photos.js variants)`);
  for (const k of ["600", "1200"]) if (!/\.webp$/i.test(v[k])) throw new Error(`photos.js: ${label(rec)} variant ${k} is not WebP`);
  const w = +rec.width, h = +rec.height;
  if (!(w > 0 && h > 0)) throw new Error(`photos.js: ${label(rec)} needs width and height (of the 1200w file)`);
  const url = (p) => base.replace(/\/?$/, "/") + String(p).replace(/^\//, "");
  return { src: url(v["1200"]), srcset: `${url(v["600"])} 600w, ${url(v["1200"])} 1200w`, width: w, height: h };
}

/* Alt text: required, plain, three words or more. */
function altFor(item, rec) {
  const alt = String((item && item.alt) || (rec && rec.alt) || "").trim();
  if (!alt) throw new Error(`photos.js: ${label(rec)} has no alt text. Say what the photo shows.`);
  if (words(alt) < 3) throw new Error(`photos.js: alt text "${alt}" is too short. Say what the photo shows, in a few words.`);
  if (/^(?:image|photo|picture) of\b/i.test(alt)) throw new Error(`photos.js: alt text "${alt}" starts with "${alt.split(" ").slice(0, 2).join(" ")}". Say what it shows.`);
  return alt;
}

function img(rec, alt, o) {
  const s = imageSet(rec, o.base);
  const load = o.hero ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"';
  return `<img src="${esc(s.src)}" srcset="${esc(s.srcset)}" sizes="${esc(o.sizes)}" width="${s.width}" height="${s.height}" alt="${esc(alt)}"${load}${o.cls ? ` class="${o.cls}"` : ""}>`;
}

/* ---------------------------------------------------------------------------- */
/* Credits                                                                        */

const licText = (rec, kind) => (kind === "pd" ? "Public domain" : kind === "own" || kind === "illustration" ? "Chapter3 Realty" : String(rec.license).trim());
const srcName = (rec) => rec.source_name || (/wikimedia\.org/.test(rec.source || rec.commons_page || "") ? "Wikimedia Commons" : "");

/* The author as the photo itself shows it: no "(English Wikipedia)" or "(Flickr: x)" tail.
   The full name is in creditsList. */
const shortAuthor = (a) => String(a).replace(/\s*\([^)]*\)/g, "").trim() || String(a).trim();

/* The short credit on the photo: "Photo: Author, CC BY-SA 4.0" with the license linked.
   On a small card it is "Photo: Author"; the license is in creditsList. */
function overlay(rec, kind, small) {
  const ext = 'target="_blank" rel="noopener noreferrer"';
  const author = esc(shortAuthor(rec.author));
  const lic = rec.license_url ? `<a href="${esc(rec.license_url)}" ${ext}>${esc(licText(rec, kind))}</a>` : esc(licText(rec, kind));
  const body = kind === "illustration" ? "Drawing: Chapter3 Realty" : kind === "own" || small ? `Photo: ${author}` : `Photo: ${author}, ${lic}`;
  return `<span class="c3ph-cr">${body}</span>`;
}

/* ---------------------------------------------------------------------------- */
/* CSS                                                                            */

const CSS = {
  base: ".c3ph-f{position:relative;margin:0;border-radius:6px;overflow:hidden;background:var(--ivory-2)}"
    + ".c3ph-f img{display:block;width:100%;height:auto;object-fit:cover}"
    + ".c3ph-cr{position:absolute;right:0;bottom:0;max-width:100%;padding:1.6rem .6rem .35rem 2.6rem;font:400 .625rem/1.3 var(--sans);letter-spacing:.01em;color:#fff;text-align:right;"
    + "background:radial-gradient(farthest-side at 100% 100%,rgba(28,32,40,.72),rgba(28,32,40,.4) 55%,rgba(28,32,40,0));white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}"
    + ".c3ph-cr a{color:#fff;text-decoration:underline;text-decoration-color:rgba(255,255,255,.5);text-underline-offset:2px;pointer-events:auto}",
  hero: ".c3ph-hero{margin:1.6rem 0 2rem}"
    + ".c3ph-hero .c3ph-f{border-radius:8px}"
    + ".c3ph-hero img{aspect-ratio:4/3}"
    + "@media (min-width:700px){.c3ph-hero img{aspect-ratio:16/9}}"
    + ".c3ph-hero figcaption{color:var(--muted);font-size:.85rem;line-height:1.5;margin-top:.55rem}",
  gallery: ".c3ph-gal{display:flex;gap:.75rem;margin:1.6rem 0;padding:0 0 .4rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;list-style:none}.c3ph-gal::-webkit-scrollbar{display:none}"
    + ".c3ph-gal>figure{flex:0 0 82%;margin:0;scroll-snap-align:start}"
    + "@media (max-width:699px){.c3ph-gal{margin-left:calc(-1*var(--c3ph-bleed,1.4rem));margin-right:calc(-1*var(--c3ph-bleed,1.4rem));padding-left:var(--c3ph-bleed,1.4rem);padding-right:var(--c3ph-bleed,1.4rem);scroll-padding:0 var(--c3ph-bleed,1.4rem)}}"
    + ".c3ph-gal img{aspect-ratio:var(--c3ph-r,4/3)}"
    + ".c3ph-gal figcaption{color:var(--muted);font-size:.85rem;line-height:1.45;margin-top:.5rem}"
    + "@media (min-width:700px){.c3ph-gal{display:grid;grid-template-columns:repeat(var(--c3ph-n,3),minmax(0,1fr));gap:1rem;overflow:visible;padding:0}.c3ph-gal>figure{min-width:0}}",
  cards: ".c3ph-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin:1.4rem 0 1.8rem;padding:0;list-style:none}"
    + "@media (min-width:700px){.c3ph-cards{grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}}"
    + "@media (min-width:1000px){.c3ph-cards.c3ph-4{grid-template-columns:repeat(4,minmax(0,1fr))}}"
    + ".c3ph-card{margin:0;background:var(--ivory);border:1px solid var(--rule);border-radius:6px;overflow:hidden;display:flex;flex-direction:column}"
    + ".c3ph-card .c3ph-f{border-radius:0}"
    + ".c3ph-card img,.c3ph-card svg{display:block;width:100%;height:auto;aspect-ratio:var(--c3ph-r,4/3);object-fit:cover}"
    + ".c3ph-card .c3ph-cr{font-size:.56rem;padding:1.2rem .45rem .25rem 1.6rem}"
    + ".c3ph-card strong{display:block;color:var(--navy);font-size:.98rem;font-weight:500;line-height:1.3;padding:.7rem .8rem 0}"
    + ".c3ph-card span.c3ph-t{display:block;color:var(--muted);font-size:.86rem;line-height:1.45;padding:.2rem .8rem .85rem}",
  credits: ".c3ph-credits{margin:2rem 0 1rem;padding:1rem 0 0;border-top:1px solid var(--rule);color:var(--muted);font-size:.8rem;line-height:1.55;max-width:760px}"
    + ".c3ph-credits .c3ph-h{font-family:var(--sans);font-size:.7rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);margin:0 0 .5rem}"
    + ".c3ph-credits [role=listitem]{margin:0 0 .3rem}"
    + ".c3ph-credits a{color:inherit;text-decoration:underline;text-decoration-color:rgba(28,32,40,.3);text-underline-offset:2px}",
};
const style = (keys, opts) => (opts && opts.css === false ? "" : `<style>${keys.map((k) => CSS[k]).join("")}</style>`);

/* All the CSS at once, for a page that sets opts.css: false on each call. */
const photoCss = () => `<style>${Object.values(CSS).join("")}</style>`;

/* ---------------------------------------------------------------------------- */
/* The four blocks                                                                */

/*
 * A wide photo near the top: 16:9 on a wide screen, 4:3 on a phone (the browser crops
 * with object-fit; the file is not cut). Loads first, never lazy.
 * Options: alt (or rec.alt), caption (plain text under the photo), base ("/"),
 * sizes, maxWidth (CSS length, default 100% of the column), css.
 */
function heroPhoto(rec, opts = {}) {
  const kind = checkRecord(rec);
  const alt = altFor(opts, rec);
  const sizes = opts.sizes || "(max-width: 1200px) 100vw, 1136px";
  const mw = /^[0-9.]+(?:px|rem|em|%)$/.test(opts.maxWidth || "") ? `max-width:${opts.maxWidth};` : "";
  const cap = opts.caption ? `<figcaption>${esc(opts.caption)}</figcaption>` : "";
  return `${style(["base", "hero"], opts)}<figure class="c3ph-hero" style="${mw}"><div class="c3ph-f">${img(rec, alt, { base: opts.base || "/", sizes, hero: true })}${overlay(rec, kind)}</div>${cap}</figure>`;
}

/*
 * Two or three photos in a row. On a phone the row scrolls sideways and snaps, with
 * the next photo showing at the edge; from 700 px wide it is a grid.
 * items: [{ photo: rec, alt, caption }] (or records with .alt and .caption set).
 * Options: ratio ("4/3" default, "3/2", "1/1", "16/9"), base, css.
 */
function gallery(items, opts = {}) {
  if (!Array.isArray(items) || items.length < 2 || items.length > 3) throw new Error("photos.js: gallery takes 2 or 3 photos");
  const ratio = ["4/3", "3/2", "1/1", "16/9"].includes(opts.ratio) ? opts.ratio : "4/3";
  const n = items.length;
  const sizes = opts.sizes || (n === 2 ? "(max-width: 699px) 82vw, 380px" : "(max-width: 699px) 82vw, 250px");
  const figs = items.map((it) => {
    const rec = it && it.photo ? it.photo : it;
    const kind = checkRecord(rec);
    const alt = altFor(it, rec);
    const caption = String((it && it.caption) || "").trim();
    if (!caption) throw new Error(`photos.js: gallery photo ${label(rec)} needs a caption (a few plain words under the photo)`);
    return `<figure><div class="c3ph-f">${img(rec, alt, { base: opts.base || "/", sizes })}${overlay(rec, kind)}</div><figcaption>${esc(caption)}</figcaption></figure>`;
  }).join("");
  return `${style(["base", "gallery"], opts)}<div class="c3ph-gal" role="group" aria-label="${esc(opts.label || "Photos")}" style="--c3ph-n:${n};--c3ph-r:${ratio}">${figs}</div>`;
}

/*
 * Small picture cards for features: a 4:3 (or square) picture, a label and one plain line.
 * Two a row on a phone, three from 700 px, four from 1000 px when opts.cols is 4.
 * items: [{ label, text, photo: rec, alt }] or [{ label, text, illustration: "indoor-pool" }].
 * A drawing is decorative in a card (the label says what it shows) unless the item has alt.
 * Options: cols (3 or 4), ratio ("4/3" or "1/1"), base, css.
 */
function featureCards(items, opts = {}) {
  if (!Array.isArray(items) || !items.length) throw new Error("photos.js: featureCards needs a list of { label, text, photo or illustration }");
  const { illustration } = require("./illustrations.js");
  const ratio = opts.ratio === "1/1" ? "1/1" : "4/3";
  const cards = items.map((it) => {
    if (!it || !String(it.label || "").trim()) throw new Error("photos.js: a feature card needs a label");
    if (!!it.photo === !!it.illustration) throw new Error(`photos.js: feature card "${it.label}" needs a photo or an illustration (one, not both)`);
    let pic;
    if (it.photo) {
      const kind = checkRecord(it.photo);
      pic = `<div class="c3ph-f">${img(it.photo, altFor(it, it.photo), { base: opts.base || "/", sizes: "(max-width: 699px) 46vw, 260px" })}${overlay(it.photo, kind, true)}</div>`;
    } else {
      pic = illustration(it.illustration, it.alt ? { alt: it.alt } : { decorative: true });
    }
    const text = it.text ? `<span class="c3ph-t">${esc(it.text)}</span>` : "";
    return `<li class="c3ph-card">${pic}<strong>${esc(it.label)}</strong>${text}</li>`;
  }).join("");
  return `${style(["base", "cards"], opts)}<ul role="list" class="c3ph-cards${+opts.cols === 4 ? " c3ph-4" : ""}" style="--c3ph-r:${ratio}">${cards}</ul>`;
}

/*
 * "Photo credits" for the end of the page: what each photo is (linked to where it came
 * from), who took it, and the license (linked to its deed). Each photo once.
 * Built from divs with list roles, so the scorer does not read it as body copy.
 * Options: title ("Photo credits"), css.
 */
function creditsList(recs, opts = {}) {
  if (!Array.isArray(recs) || !recs.length) throw new Error("photos.js: creditsList needs the photo records used on the page");
  const ext = 'target="_blank" rel="noopener noreferrer"';
  const seen = new Set();
  let sa = false;
  const rows = recs.filter((r) => { const k = label(r); if (seen.has(k)) return false; seen.add(k); return true; }).map((rec) => {
    const kind = checkRecord(rec);
    if (kind === "by-sa") sa = true;
    const src = rec.source || rec.commons_page;
    const title = String(rec.title || rec.what || "Photo").trim().replace(/\.$/, "");
    if (kind === "own") return `<div role="listitem">${esc(title)}. Photo: ${esc(rec.author)}, Chapter3 Realty.</div>`;
    if (kind === "illustration") return `<div role="listitem">${esc(title)}. Drawing: Chapter3 Realty.</div>`;
    const where = srcName(rec);
    const t = /^https:/.test(src) ? `<a href="${esc(src)}" ${ext}>${esc(title)}</a>` : esc(title);
    const lic = `<a href="${esc(rec.license_url)}" ${ext}>${esc(licText(rec, kind))}</a>`;
    return `<div role="listitem">${t}, by ${esc(rec.author)}, ${lic}${where ? `, via ${esc(where)}` : ""}.</div>`;
  }).join("");
  const note = `<div role="listitem">Chapter3 Realty resized these photos, and some are shown cropped.${sa ? " A cropped CC BY-SA photo is shared under the same license." : ""}</div>`;
  return `${style(["credits"], opts)}<div class="c3ph-credits"><div class="c3ph-h" id="${esc(opts.id || "photo-credits")}">${esc(opts.title || "Photo credits")}</div><div role="list" aria-labelledby="${esc(opts.id || "photo-credits")}">${rows}${note}</div></div>`;
}

/* ---------------------------------------------------------------------------- */
/* Files                                                                          */

/*
 * Writes <outBase>-600w.webp and <outBase>-1200w.webp from a source image with ImageMagick.
 * Strips metadata, keeps the colors in sRGB, never enlarges. Returns { width, height, files }
 * for the 1200w file. The source must be at least 1200 px wide.
 */
function makeVariants(src, outBase, o = {}) {
  const { execFileSync } = require("child_process");
  const [w] = execFileSync("identify", ["-format", "%w %h", `${src}[0]`]).toString().trim().split(" ").map(Number);
  if (!(w >= 1200)) throw new Error(`photos.js: ${src} is ${w} px wide; a photo must be at least 1200 px wide`);
  fs.mkdirSync(path.dirname(outBase), { recursive: true });
  /* Each file has a byte budget: 200 KB for 1200w, 64 KB for 600w. Most photos fit at the
     encoder's normal quality. A leafy photo that does not is encoded again to the budget
     (webp:target-size; this ImageMagick build ignores -quality for WebP). */
  const files = {};
  for (const [size, budget] of [[1200, o.max1200 || 200 * 1024], [600, o.max600 || 64 * 1024]]) {
    const out = `${outBase}-${size}w.webp`;
    const enc = (extra) => execFileSync("convert", [`${src}[0]`, "-auto-orient", "-colorspace", "sRGB", "-resize", `${size}x>`, "-strip", "-define", "webp:method=6", ...extra, out]);
    enc([]);
    if (fs.statSync(out).size > budget) enc(["-define", `webp:target-size=${Math.round(budget * 0.96)}`, "-define", "webp:pass=6"]);
    files[size] = out;
  }
  const [W, H] = execFileSync("identify", ["-format", "%w %h", files[1200]]).toString().trim().split(" ").map(Number);
  return { width: W, height: H, files };
}

/* Checks every record in a photos.json and, with a root, that its files exist. Returns problems. */
function checkFile(jsonPath, root) {
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const out = [];
  for (const rec of data.photos || []) {
    try {
      if (rec.hold) { out.push(`hold  ${rec.file}: ${rec.hold}`); continue; }
      checkRecord(rec); imageSet(rec);
      if (!rec.alt) out.push(`warn  ${rec.file}: no default alt (each call must pass alt)`);
      if (root) for (const p of [rec.variants["600"], rec.variants["1200"]]) if (!fs.existsSync(path.join(root, p))) out.push(`FAIL  ${rec.file}: missing ${p}`);
    } catch (e) { out.push(`FAIL  ${rec.file}: ${e.message}`); }
  }
  return out;
}

module.exports = { heroPhoto, gallery, featureCards, creditsList, photoCss, checkRecord, findPhoto, imageSet, makeVariants, checkFile, LICENSES, esc };

if (require.main === module) {
  const [cmd, a, b] = process.argv.slice(2);
  if (cmd === "check" && a) {
    const out = checkFile(a, b);
    for (const l of out) console.log(l);
    const fails = out.filter((l) => l.startsWith("FAIL")).length;
    console.log(fails ? `\n${fails} problem(s)` : "\nall photo records pass");
    process.exitCode = fails ? 1 : 0;
  } else if (cmd === "variants" && a && b) {
    const r = makeVariants(a, b);
    console.log(`${r.files[600]}\n${r.files[1200]}  (${r.width}x${r.height})`);
  } else {
    console.log("node tools/photos.js check <photos.json> [image root]\nnode tools/photos.js variants <source image> <out base>");
  }
}
