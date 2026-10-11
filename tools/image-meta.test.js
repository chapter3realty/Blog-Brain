#!/usr/bin/env node
/*
 * Controls for the image metadata: tools/photos.js (metaFor, embedMetadata, checkEmbedded,
 * imageObject, imageSchema, pageImages, makeCrops) and tools/image-meta.js (the page check,
 * STANDARD S13). Each rule has a firing control and a quiet one. The quiet page is real
 * photos.js output; the alt texts and the map label are the batch 2026-10-a ones.
 *
 *   node tools/image-meta.test.js
 *
 * The file controls need ImageMagick and exiftool. Without them they are skipped and say so.
 */
"use strict";
const fs = require("fs"), path = require("path"), os = require("os");
const { execFileSync } = require("child_process");
const P = require("./photos.js");
const M = require("./image-meta.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };
const SITE = "https://chapter3realty.com";

const rec = (o = {}) => Object.assign({
  file: "images/t/beach.webp",
  variants: { 600: "images/t/beach-600w.webp", 1200: "images/t/beach-1200w.webp" },
  width: 1200, height: 800,
  title: "Beach_at_sunrise_2019.jpg", what: "Sand, sea oats and small waves at sunrise in Myrtle Beach.",
  alt: "Sand, sea oats and small waves at sunrise in Myrtle Beach",
  place: { city: "Myrtle Beach" },
  source: "https://commons.wikimedia.org/wiki/File:Beach.jpg",
  author: "Jane Doe", license: "CC BY-SA 4.0", license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
  credit: "Photo: Jane Doe, CC BY-SA 4.0, via Wikimedia Commons",
  taken: "2019-06-01",
  crops: { "1x1": { path: "images/t/beach-1x1.webp", width: 1200, height: 1200 }, "4x3": { path: "images/t/beach-4x3.webp", width: 1200, height: 900 }, "16x9": { path: "images/t/beach-16x9.webp", width: 1200, height: 675 } },
}, o);

/* ---- metaFor: the one source for the file and the page ---- */
{
  const m = P.metaFor(rec());
  check("metaFor: creator, credit without 'Photo:', copyright with the license", m.creator === "Jane Doe" && m.credit === "Jane Doe, CC BY-SA 4.0, via Wikimedia Commons" && m.copyright === "© Jane Doe, CC BY-SA 4.0");
  check("metaFor: license is the deed, the license page is the source page", m.license === "https://creativecommons.org/licenses/by-sa/4.0/" && m.acquire === "https://commons.wikimedia.org/wiki/File:Beach.jpg");
  check("metaFor: a photo is digitalCapture", m.dst === "digitalCapture");
  check("metaFor: the place is the city and South Carolina", m.place.city === "Myrtle Beach" && m.place.state === "South Carolina" && m.place.code === "US");
  const note = P.metaFor(rec({ credit: "Photo: Pubdog, public domain, via Wikimedia Commons. Credit not required; give it anyway.", license: "Public domain", license_url: "https://creativecommons.org/publicdomain/mark/1.0/", author: "Pubdog" }));
  check("metaFor: the credit drops our note after it (real record text)", note.credit === "Pubdog, public domain, via Wikimedia Commons" && note.copyright === "Public domain (Pubdog)" && note.marked === false);
  check("metaFor: a CC BY-SA crop says it keeps the same license", /same license, CC BY-SA 4\.0/.test(P.metaFor(rec(), { adapted: true }).note) && !/same license/.test(m.note));
  const own = P.metaFor(rec({ license: "own", license_url: undefined, author: "A. Agent", credit: "Photo: Chapter3 Realty", source: "Chapter3 Realty, at the clubhouse lot" }));
  check("metaFor: our own photo points to our terms and contact pages", own.license === `${SITE}/terms/` && own.acquire === `${SITE}/contact/` && own.copyright === "© Chapter3 Realty");
  const ill = P.metaFor(rec({ license: "illustration", license_url: undefined, author: "Chapter3 Realty", credit: "Drawing: Chapter3 Realty", source: "tools/illustrations.js" }));
  check("metaFor: a drawing is by Chapter3 Realty, an Organization, made with generative AI", ill.creator === "Chapter3 Realty" && ill.creatorType === "Organization" && ill.dst === "trainedAlgorithmicMedia");
  check("metaFor: a map is dataDrivenMedia", P.metaFor(rec({ kind: "map" })).dst === "dataDrivenMedia");
  check("metaFor: a made-up digital source type throws", throws(() => P.metaFor(rec({ digital_source_type: "camera" })), /not an IPTC term/));
  check("metaFor: a record with a one-word alt throws", throws(() => P.metaFor(rec({ alt: "Beach" })), /3 or more words/));
  check("metaFor: a photo on hold throws", throws(() => P.metaFor(rec({ hold: "brand sign" })), /on hold/));
}

/* ---- the page schema ---- */
{
  const r = rec();
  const hero = P.heroPhoto(r, { alt: "Sand and sea oats at sunrise on the beach in Myrtle Beach", caption: "The beach in Myrtle Beach at sunrise. A short walk from the pool." });
  const io = P.imageObject(r);
  check("imageObject: contentUrl is the absolute 1200w file, the <img> src", io.contentUrl === `${SITE}/images/t/beach-1200w.webp` && hero.includes('src="/images/t/beach-1200w.webp"'));
  check("imageObject: caption is the visible caption, description the alt shown", io.caption === "The beach in Myrtle Beach at sunrise. A short walk from the pool." && io.description === "Sand and sea oats at sunrise on the beach in Myrtle Beach");
  check("imageObject: the hero is representativeOfPage", io.representativeOfPage === true);
  check("imageObject: every Google license field", io.creator.name === "Jane Doe" && io.creditText && io.copyrightNotice && io.license && io.acquireLicensePage && io.isBasedOn === r.source);
  check("imageObject: the place", io.contentLocation && io.contentLocation.name === "Myrtle Beach, South Carolina");
  check("imageObject: named by what it shows, never the Commons file title", io.name !== r.title && !/\.jpg/.test(io.name));
  const g = rec({ file: "images/t/pier.webp", variants: { 600: "images/t/pier-600w.webp", 1200: "images/t/pier-1200w.webp" }, alt: "A long fishing pier over the ocean in Myrtle Beach" });
  P.gallery([{ photo: g, caption: "A fishing pier" }, { photo: rec({ file: "images/t/b.webp", variants: { 600: "images/t/b-600w.webp", 1200: "images/t/b-1200w.webp" } }), caption: "The beach" }]);
  check("imageObject: a gallery photo is not representativeOfPage and keeps its caption", P.imageObject(g).representativeOfPage === undefined && P.imageObject(g).caption === "A fishing pier");
  const card = rec({ file: "images/t/c.webp", variants: { 600: "images/t/c-600w.webp", 1200: "images/t/c-1200w.webp" } });
  P.featureCards([{ photo: card, label: "Boating", text: "A marina about 10 minutes away" }]);
  check("imageObject: a card photo's caption is its label and line", P.imageObject(card).caption === "Boating. A marina about 10 minutes away");
  const s = P.imageSchema([r, g, r]);
  const j = JSON.parse(s.replace(/^<script type="application\/ld\+json">|<\/script>$/g, ""));
  check("imageSchema: one parseable block, an @graph with each photo once", j["@context"] === "https://schema.org" && j["@graph"].length === 2);
  check("imageSchema: no '<' inside the script", !/</.test(s.replace(/^<script[^>]*>|<\/script>$/g, "")));
  check("imageSchema: no records throws", throws(() => P.imageSchema([]), /needs the photo records/));
  const pi = P.pageImages(r);
  check("pageImages: 1x1, 4x3 and 16x9, 1200 px wide, absolute, with the rights", pi.length === 3 && pi.map((x) => `${x.width}x${x.height}`).join(",") === "1200x1200,1200x900,1200x675"
    && pi.every((x) => x.contentUrl.startsWith(`${SITE}/images/t/`) && x.license && x.creator && x.copyrightNotice));
  check("pageImages: a record without crops throws", throws(() => P.pageImages(rec({ crops: undefined })), /no 1x1, 4x3, 16x9 crop/));
  check("pageImages: a crop under 1200 px wide throws", throws(() => P.pageImages(rec({ crops: Object.assign({}, rec().crops, { "1x1": { path: "images/t/x.webp", width: 900, height: 900 } }) })), /no 1x1 crop/));
}

/* ---- alt text rules (image-meta.js) ---- */
{
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "batches", "2026-10-a", "data", "photos.json"), "utf8"));
  const live = data.photos.filter((p) => !p.hold);
  const bad = live.filter((p) => M.altProblem(p.alt)).map((p) => `${p.file}: ${M.altProblem(p.alt)}`);
  check("alt: every batch 2026-10-a alt passes (quiet)", !bad.length, bad.join("; "));
  const noPlace = live.filter((p) => !(p.place && (p.place.city || p.place.sublocation))).map((p) => p.file);
  check("batch 2026-10-a: every photo names its place (IPTC Location Shown)", !noPlace.length, noPlace.join(", "));
  const placeInAlt = live.filter((p) => ![p.place.city, p.place.sublocation].filter(Boolean).some((w) => p.alt.includes(w.split(",")[0].replace(/^The /, "")))).map((p) => `${p.file}: ${p.alt}`);
  check("batch 2026-10-a: every default alt names the place", !placeInAlt.length, placeInAlt.join("; "));
  for (const [alt, re] of [[undefined, /no alt/], ["", /empty/], ["Beach", /under 3 words/], ["Photo of the beach at dawn", /starts with/], ["An image of a pier in Myrtle Beach", /starts with/],
    ["myrtle-beach-pier-1200w.webp", /file name/], ["x ".repeat(130), /250 or fewer/]])
    check(`alt: fires on ${JSON.stringify(alt === undefined ? "(none)" : alt.slice(0, 30))}`, re.test(M.altProblem(alt)));
  check("file name: IMG_1234 and DSC0042 fire, a descriptive name is quiet", M.GENERIC_NAME.test("IMG_1234") && M.GENERIC_NAME.test("DSC0042-1200w") && !M.GENERIC_NAME.test("myrtle-beach-pier-from-above-1200w"));
}

/* ---- files: embed, read back, check; and the whole page check ---- */
let tools = true;
try { execFileSync("convert", ["-version"], { stdio: "pipe" }); } catch { tools = false; }
if (tools && !P.hasExiftool()) tools = false;
if (tools) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "c3im-"));
  const site = path.join(dir, "chapter3realty");
  const img = (rel, w, h) => { const f = path.join(site, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); execFileSync("convert", ["-size", `${w}x${h}`, "gradient:#9fc6ce-#f4efe8", "-strip", f]); return f; };
  const r = rec();
  const files = [img(r.variants[600], 600, 400), img(r.variants[1200], 1200, 800)];
  const crops = Object.values(r.crops).map((c) => img(c.path, c.width, c.height));
  for (const f of files) P.embedMetadata(r, f);
  for (const f of crops) P.embedMetadata(r, f, { adapted: true });
  const e = P.readEmbedded(files[1]);
  check("embed: the file holds Creator, Credit Line, Copyright, license URL and Licensor URL", P.checkEmbedded(r, files[1]).length === 0
    && [].concat(e["XMP-dc:Creator"])[0] === "Jane Doe" && e["XMP-xmpRights:WebStatement"] === r.license_url && e["XMP-plus:Licensor"][0].LicensorURL === r.source);
  check("embed: Alt Text (Accessibility), Digital Source Type and Location Shown", e["XMP-iptcCore:AltTextAccessibility"] === r.alt && /digitalsourcetype\/digitalCapture$/.test(e["XMP-iptcExt:DigitalSourceType"]) && e["XMP-iptcExt:LocationShown"][0].City === "Myrtle Beach");
  check("embed: the Creative Commons fields", e["XMP-cc:License"] === r.license_url && e["XMP-cc:AttributionName"] === "Jane Doe");
  check("embed: a crop says it is cropped and keeps BY-SA", /Cropped.*same license/.test(P.readEmbedded(crops[0])["XMP-photoshop:Instructions"]) && P.checkEmbedded(r, crops[0], { adapted: true }).length === 0);
  check("embed: running it twice leaves one Creator, not two", (P.embedMetadata(r, files[1]), [].concat(P.readEmbedded(files[1])["XMP-dc:Creator"]).length === 1));
  check("checkEmbedded: a stale file fires (the record's author changed)", P.checkEmbedded(rec({ author: "John Roe", credit: "Photo: John Roe, CC BY-SA 4.0, via Wikimedia Commons" }), files[1]).some((l) => /Creator is "Jane Doe"/.test(l)));
  const bare = img("images/t/bare.webp", 1200, 800);
  check("checkEmbedded: a stripped file fires on every field", P.checkEmbedded(null, bare).length === 8);
  const jpg = img("images/t/card.jpg", 1200, 630);
  P.embedMetadata(r, jpg);
  check("embed: a JPG gets XMP and the old IPTC block", P.checkEmbedded(r, jpg).length === 0 && /Jane Doe/.test(execFileSync("exiftool", ["-s3", "-IPTC:By-line", jpg]).toString()));

  /* makeCrops */
  const src = path.join(dir, "src.png"), small = path.join(dir, "small.png");
  execFileSync("convert", ["-size", "1800x1300", "gradient:#9fc6ce-#f4efe8", src]);
  execFileSync("convert", ["-size", "1600x1000", "xc:#c4783a", small]);
  const c = P.makeCrops(src, path.join(dir, "out", "x"), { rec: r });
  check("makeCrops: 1x1, 4x3 and 16x9 at 1200 px wide, with metadata", c["1x1"].width === 1200 && c["1x1"].height === 1200 && c["4x3"].height === 900 && c["16x9"].height === 675
    && P.checkEmbedded(r, c["16x9"].file, { adapted: true }).length === 0);
  check("makeCrops: refuses a source under 1200 px on its short side", throws(() => P.makeCrops(small, path.join(dir, "out", "y")), /short side/));

  /* the page check, on a page made by photos.js */
  const page = (main, ld = []) => `<!doctype html><html lang="en"><head>${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("")}</head><body><main id="main">${main}</main></body></html>`;
  const heroHtml = P.heroPhoto(r, { alt: "Sand and sea oats at sunrise on the beach in Myrtle Beach", caption: "The beach at sunrise." });
  const article = (image) => ({ "@context": "https://schema.org", "@type": "Article", headline: "t", image });
  const mapSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" role="img" aria-label="Myrtle Trace is just outside Conway, about 15 minutes inland from the beach, northwest of Myrtle Beach."></svg>';
  const icon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M1 1"/></svg>';
  const good = page(heroHtml + mapSvg + icon + P.imageSchema([r]), [article(P.pageImages(r)), { "@context": "https://schema.org", "@type": "WebPage", primaryImageOfPage: P.pageImages(r)[1] }]);
  const run = (html) => M.checkPage(html, site);
  const quiet = run(good);
  check("page: a photos.js page with schema, metadata, a labelled map and a hidden icon passes (quiet)", quiet.length === 0, JSON.stringify(quiet));
  const fires = (name, html, kind, re) => { const p = run(html); check(`page fires: ${name}`, p.some((x) => x.check === kind && (!re || re.test(x.detail))), JSON.stringify(p)); };
  fires("an <img> with no alt", good.replace(/ alt="[^"]*"/, ""), "alt", /no alt/);
  fires("an alt that starts 'Photo of'", good.replace(/ alt="[^"]*"/, ' alt="Photo of the beach at dawn"'), "alt", /starts with/);
  fires("no ImageObject for the photo", good.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@graph"[\s\S]*?<\/script>/, ""), "schema", /no ImageObject/);
  fires("an ImageObject with no license", good.replace(/,"license":"https:\/\/creativecommons.org\/licenses\/by-sa\/4.0\/","acquireLicensePage"/, ',"acquireLicensePage"'), "schema", /license/);
  fires("a photo file with no embedded metadata", good.split("beach-600w.webp").join("bare.webp"), "embedded", /no Creator/);
  fires("a photo file that is not there", good.split("beach-600w.webp").join("gone-600w.webp"), "file", /not found/);
  fires("a generic file name", good.split("beach-600w.webp").join("IMG_1234.webp"), "file-name");
  fires("an inline svg with no label and no aria-hidden", good.replace(icon, '<svg viewBox="0 0 24 24"><path d="M1 1"/></svg>'), "svg", /no role/);
  fires("a map svg with a label under 12 characters", good.replace(/aria-label="Myrtle Trace[^"]*"/, 'aria-label="Map"'), "svg", /under 12/);
  fires("Article.image is the share card with text", good.replace(/"image":\[[^\]]*\]/, `"image":"${SITE}/og/buyers-x.jpg"`), "article-image", /share card/);
  fires("Article.image has no 1x1", good.replace(/"image":\[\{[^}]*?"width":1200,"height":1200[^}]*\}\},/, '"image":['), "article-image", /no 1x1/);
  fires("primaryImageOfPage is the share card", good.replace(/"primaryImageOfPage":\{[^}]*\}\}/, `"primaryImageOfPage":{"@type":"ImageObject","url":"${SITE}/og-image.jpg","width":1200,"height":630}`), "article-image", /primaryImageOfPage/);
  fires("a schema size that does not match the crop file", good.replace('"width":1200,"height":675', '"width":1200,"height":680'), "article-image");
  fs.rmSync(dir, { recursive: true, force: true });

  /* the real batch: every file of every photo in use holds its record's metadata */
  const BATCH = path.join(__dirname, "..", "batches", "2026-10-a");
  const data = JSON.parse(fs.readFileSync(path.join(BATCH, "data", "photos.json"), "utf8"));
  const stale = [];
  for (const p of data.photos.filter((x) => !x.hold)) for (const f of P.recordFiles(p)) {
    const at = P.resolveImage(BATCH, f.path);
    if (!at) { if (f.adapted) stale.push(`${f.path}: missing`); continue; }
    const b = P.checkEmbedded(p, at, { adapted: f.adapted });
    if (b.length) stale.push(`${f.path}: ${b[0]}`);
  }
  check("batch 2026-10-a: every image file holds its record's metadata (node tools/photos.js embed)", !stale.length, stale.slice(0, 5).join("; "));
  const heroes = data.photos.filter((p) => p.crops);
  check("batch 2026-10-a: the four heroes have their 1x1, 4x3 and 16x9 crops", heroes.length === 4 && heroes.every((p) => P.pageImages(p).length === 3));
} else console.log("skip  file controls (ImageMagick or exiftool not installed here: apt-get install imagemagick libimage-exiftool-perl)");

/* ---- the findings file ---- */
{
  const md = fs.readFileSync(path.join(__dirname, "..", "rules", "image-metadata.md"), "utf8");
  check("rules/image-metadata.md has no em dash", !/—/.test(md));
  const rules = md.split("\n").filter((l) => /^\d+\. /.test(l));
  check("rules/image-metadata.md: every numbered rule links its source", rules.length >= 10 && rules.every((l) => /\]\(https:\/\//.test(l)), rules.filter((l) => !/\]\(https:\/\//.test(l)).join(" | "));
}

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
