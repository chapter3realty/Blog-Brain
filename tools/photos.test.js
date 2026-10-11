#!/usr/bin/env node
/*
 * Controls for photos.js.
 *
 *   node tools/photos.test.js
 *
 * The guard (license record), alt text, srcset and sizes, lazy loading, the four blocks,
 * and the real batch file: every photo in batches/2026-10-a/data/photos.json passes the
 * guard and has its 600w and 1200w WebP files.
 *
 * Buyer reads v6 (batch 2026-10-a, readers in their sixties on a phone): three of four missed
 * photos in a sideways row, and the credits "read like file names". The gallery and credits
 * controls below hold the fixes.
 */
"use strict";
const fs = require("fs"), path = require("path"), os = require("os");
const P = require("./photos.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };

const base = {
  file: "images/t/beach.webp",
  variants: { 600: "images/t/beach-600w.webp", 1200: "images/t/beach-1200w.webp" },
  width: 1200, height: 800,
  title: "Beach at sunrise", alt: "Sand, sea oats and small waves at sunrise",
  source: "https://commons.wikimedia.org/wiki/File:Beach.jpg",
  author: "Jane Doe", license: "CC BY-SA 4.0", license_url: "https://creativecommons.org/licenses/by-sa/4.0/",
  credit: "Photo: Jane Doe, CC BY-SA 4.0, via Wikimedia Commons",
};
const rec = (o = {}) => Object.assign({}, base, o);
const drop = (k) => { const r = rec(); delete r[k]; return r; };

/* ---- the guard ---- */
check("a full CC BY-SA record passes", P.checkRecord(rec()) === "by-sa");
for (const k of ["license", "source", "author", "credit", "license_url"])
  check(`guard throws when ${k} is missing`, throws(() => P.heroPhoto(drop(k)), /license record|license URL/));
check("guard accepts commons_page as the source", P.checkRecord(Object.assign(drop("source"), { commons_page: base.source })) === "by-sa");
check("no record at all throws", throws(() => P.heroPhoto(undefined), /no image record/));
for (const [lic, url] of [["CC BY-NC 4.0", "https://creativecommons.org/licenses/by-nc/4.0/"], ["CC BY-ND 4.0", "https://creativecommons.org/licenses/by-nd/4.0/"],
  ["CC BY-NC-SA 2.0", "https://creativecommons.org/licenses/by-nc-sa/2.0/"], ["All rights reserved", "https://example.com/"], ["GFDL", "https://www.gnu.org/copyleft/fdl.html"]])
  check(`guard refuses ${lic}`, throws(() => P.checkRecord(rec({ license: lic, license_url: url })), /Allowed/));
check("guard refuses a URL for the wrong license", throws(() => P.checkRecord(rec({ license_url: "https://creativecommons.org/licenses/by/4.0/" })), /does not match/));
check("guard refuses a URL for the wrong version", throws(() => P.checkRecord(rec({ license_url: "https://creativecommons.org/licenses/by-sa/3.0/" })), /version|does not match/));
check("guard refuses a source that is not an https page", throws(() => P.checkRecord(rec({ source: "Google Images" })), /source/));
check("guard refuses a photo on hold, and says why", throws(() => P.heroPhoto(rec({ hold: "a brand sign is the subject" })), /on hold.*brand sign/));
check("CC0 passes", P.checkRecord(rec({ license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/" })) === "cc0");
check("public domain passes", P.checkRecord(rec({ license: "Public domain", license_url: "https://creativecommons.org/publicdomain/mark/1.0/" })) === "pd");
check("CC BY 2.0 passes", P.checkRecord(rec({ license: "CC BY 2.0", license_url: "https://creativecommons.org/licenses/by/2.0/" })) === "by");
check("CC BY 2.5 passes", P.checkRecord(rec({ license: "CC BY 2.5", license_url: "https://creativecommons.org/licenses/by/2.5/" })) === "by");
const own = rec({ file: "images/t/club.webp", title: "Clubhouse", license: "own", license_url: undefined, source: "Chapter3 Realty, from the clubhouse lot, 2026-10-12", author: "A. Agent", credit: "Photo: Chapter3 Realty" });
check("our own photo passes without a license URL", P.checkRecord(own) === "own");
check("our own photo still needs an author", throws(() => P.checkRecord(Object.assign({}, own, { author: "" })), /author/));

/* ---- alt text ---- */
check("alt is required (no alt on the record or the call)", throws(() => P.heroPhoto(drop("alt")), /no alt text/));
check("a one-word alt throws", throws(() => P.heroPhoto(rec(), { alt: "beach" }), /too short/));
check("an alt that starts 'Photo of' throws", throws(() => P.heroPhoto(rec(), { alt: "Photo of the beach at dawn" }), /Say what it shows/));
check("gallery alt is required too", throws(() => P.gallery([{ photo: drop("alt"), caption: "One" }, { photo: rec(), caption: "Two" }]), /no alt text/));
check("card photo alt is required too", throws(() => P.featureCards([{ photo: drop("alt"), label: "Beach" }]), /no alt text/));

/* ---- the hero ---- */
const hero = P.heroPhoto(rec(), { caption: 'The beach <at> "dawn"' });
const heroImg = (hero.match(/<img [^>]+>/) || [""])[0];
check("hero has srcset with 600w and 1200w WebP", /srcset="\/images\/t\/beach-600w\.webp 600w, \/images\/t\/beach-1200w\.webp 1200w"/.test(heroImg));
check("hero src is the 1200w file", /src="\/images\/t\/beach-1200w\.webp"/.test(heroImg));
check("hero has sizes, width and height", /sizes="[^"]+"/.test(heroImg) && /width="1200" height="800"/.test(heroImg));
check("hero is not lazy and is fetched first", !/loading=/.test(heroImg) && /fetchpriority="high"/.test(heroImg));
check("hero is 4:3 on a phone and 16:9 from 700 px", /\.c3ph-hero img\{aspect-ratio:4\/3\}/.test(hero) && /@media \(min-width:700px\)\{\.c3ph-hero img\{aspect-ratio:16\/9\}\}/.test(hero) && /object-fit:cover/.test(hero));
check("hero has rounded corners", /\.c3ph-hero \.c3ph-f\{border-radius:8px\}/.test(hero));
check("hero credit on the photo reads 'Photo: <author>', linked to the license, nothing else", /<span class="c3ph-cr"><a href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\/" target="_blank" rel="noopener noreferrer"[^>]*>Photo: Jane Doe<\/a><\/span>/.test(hero));
check("hero credit: the license name is for screen readers and hover only, not printed", /aria-label="Photo: Jane Doe\. License: CC BY-SA 4\.0"/.test(hero) && !/>[^<]*CC BY-SA[^<]*</.test(hero.match(/<span class="c3ph-cr">.*?<\/span>/)[0]));
check("credit on the photo drops the '(English Wikipedia)' tail", />Photo: Pollinator<\/a>/.test(P.heroPhoto(rec({ author: "Pollinator (English Wikipedia)" }))));
check("credit overlay is tiny text on a soft gradient", /\.c3ph-cr\{[^}]*font:400 \.625rem[^}]*gradient/.test(hero));
{
  /* WCAG 2.5.8: the credit link's tap area is 24 px or taller. Line box (font size x 1.3 at
     17 px to the rem) plus the link's vertical padding, clipped by the overlay's own bottom
     padding (overflow:hidden). Hero credit and the smaller card credit. Before: 14 px. */
  const css = P.photoCss();
  const pad = (css.match(/\.c3ph-cr a\{[^}]*padding:(\d+)px 0 (\d+)px/) || []).slice(1).map(Number);
  const tap = (fontRem, bottomPadRem) => fontRem * 17 * 1.3 + (pad[0] || 0) + Math.min(pad[1] || 0, bottomPadRem * 17);
  check("credit link tap area is 24 px or taller on a hero photo", pad.length === 2 && tap(0.625, 0.35) >= 24, `${tap(0.625, 0.35).toFixed(1)} px`);
  check("credit link tap area is 24 px or taller on a card photo", pad.length === 2 && tap(0.56, 0.25) >= 24, `${tap(0.56, 0.25).toFixed(1)} px`);
  check("credit tap area: the same sum fires on the old link, with no padding (14 px)", 0.625 * 17 * 1.3 < 24);
  check("credit overlay keeps its size: padding on the link only", /\.c3ph-cr\{[^}]*padding:1\.6rem \.6rem \.35rem 2\.6rem/.test(css) && /\.c3ph-card \.c3ph-cr\{font-size:\.56rem;padding:1\.2rem \.45rem \.25rem 1\.6rem\}/.test(css));
}
check("hero caption is escaped", /<figcaption>The beach &lt;at&gt; &quot;dawn&quot;<\/figcaption>/.test(hero));
check("base option changes the path", /src="https:\/\/cdn\.example\/images\/t\/beach-1200w\.webp"/.test(P.heroPhoto(rec(), { base: "https://cdn.example/" })));
check("css:false leaves the style block out", !/<style>/.test(P.heroPhoto(rec(), { css: false })) && /c3ph-hero/.test(P.photoCss()));
check("a non-WebP variant throws", throws(() => P.heroPhoto(rec({ variants: { 600: "a-600w.jpg", 1200: "a-1200w.jpg" } })), /WebP/));
check("missing variants throw", throws(() => P.heroPhoto(rec({ variants: { 1200: "a-1200w.webp" } })), /variants/));
check("missing width or height throws", throws(() => P.heroPhoto(rec({ height: 0 })), /width and height/));

/* ---- the gallery ---- */
const g2 = rec({ title: "Pier", source: "https://commons.wikimedia.org/wiki/File:Pier.jpg", file: "images/t/pier.webp", variants: { 600: "images/t/pier-600w.webp", 1200: "images/t/pier-1200w.webp" } });
const gal = P.gallery([{ photo: rec(), caption: "The beach" }, { photo: g2, alt: "A long wooden pier over the ocean", caption: "The pier" }, Object.assign(rec(), { caption: "Again" })]);
const galImgs = gal.match(/<img [^>]+>/g) || [];
check("gallery renders each photo with a caption", galImgs.length === 3 && (gal.match(/<figcaption>/g) || []).length === 3);
check("gallery images are lazy with srcset, sizes, width and height", galImgs.every((i) => /loading="lazy"/.test(i) && /srcset="[^"]*600w, [^"]*1200w"/.test(i) && /sizes="/.test(i) && /width="\d+" height="\d+"/.test(i)));
check("gallery on a phone: one photo under the other, full width, nothing to swipe", /\.c3ph-gal\{display:grid;grid-template-columns:minmax\(0,1fr\);gap:1\.5rem/.test(gal) && !/overflow-x|scroll-snap/.test(gal) && !/c3ph-row|Swipe/.test(gal));
check("gallery on a phone: each photo keeps its caption under it", /<figure><div class="c3ph-f"><img [^>]+>.*?<\/div><figcaption>The beach<\/figcaption><\/figure>/.test(gal));
check("gallery on a phone: images are sized for the full width", galImgs.every((i) => /sizes="\(max-width: 699px\) 100vw, 250px"/.test(i)));
check("gallery is a grid from 700 px", /@media \(min-width:700px\)\{\.c3ph-gal\{display:grid;grid-template-columns:repeat\(var\(--c3ph-n,3\)/.test(gal) && /--c3ph-n:3/.test(gal));
const row = P.gallery([{ photo: rec(), caption: "The beach" }, { photo: g2, alt: "A long wooden pier over the ocean", caption: "The pier" }, Object.assign(rec(), { caption: "Again" })], { layout: "row" });
check("row layout: a sideways row that snaps, on a phone only", /@media \(max-width:699px\)\{\.c3ph-gal\.c3ph-row\{display:flex;[^}]*overflow-x:auto;scroll-snap-type:x mandatory/.test(row) && /\.c3ph-row>figure\{flex:0 0 82%;scroll-snap-align:start\}/.test(row) && /class="c3ph-gal c3ph-row"/.test(row));
check("row layout: says 'Swipe for more photos' under the row", /<\/div><div class="c3ph-swipe" aria-hidden="true">.*Swipe for more photos/.test(row));
check("row layout: one dot per photo, the first filled", (row.match(/<i><\/i>/g) || []).length === 3 && /\.c3ph-dots i:first-child\{background:var\(--navy\)\}/.test(row));
check("row layout: where the browser can, the dot follows the photo in view (no script)", /@supports \(animation-timeline:view\(\)\)/.test(row) && /view-timeline:--c3ph-p2 inline/.test(row) && /animation-timeline:--c3ph-p2/.test(row) && !/<script/.test(row));
check("row layout: the hint is hidden from 700 px, where the photos sit in a grid", /@media \(min-width:700px\)\{\.c3ph-swipe\{display:none\}\}/.test(row));
check("row layout: sized for 82vw on a phone", /sizes="\(max-width: 699px\) 82vw, 250px"/.test(row));
check("gallery layout must be 'stack' or 'row'", throws(() => P.gallery([{ photo: rec(), caption: "a" }, { photo: rec(), caption: "b" }], { layout: "carousel" }), /stack.*row/) && /c3ph-gal"/.test(P.gallery([{ photo: rec(), caption: "a" }, { photo: rec(), caption: "b" }], { layout: "stack" })));
check("gallery photos share one aspect ratio", /--c3ph-r:4\/3/.test(gal) && /aspect-ratio:var\(--c3ph-r,4\/3\)/.test(gal));
check("gallery carries a credit on each photo", (gal.match(/class="c3ph-cr"/g) || []).length === 3);
check("gallery takes 2 or 3 photos only", throws(() => P.gallery([{ photo: rec(), caption: "x" }]), /2 or 3/) && throws(() => P.gallery([1, 2, 3, 4].map(() => ({ photo: rec(), caption: "x" }))), /2 or 3/));
check("gallery photo needs a caption", throws(() => P.gallery([{ photo: rec() }, { photo: rec(), caption: "x" }]), /caption/));
check("gallery ratio option", /--c3ph-r:3\/2/.test(P.gallery([{ photo: rec(), caption: "a" }, { photo: rec(), caption: "b" }], { ratio: "3/2" })));

/* ---- feature cards ---- */
const cards = P.featureCards([
  { illustration: "indoor-pool", label: "Indoor pool", text: "Open all year" },
  { illustration: "golf-cart", label: "Golf carts allowed", text: "On every street" },
  { photo: rec(), label: "Beach <nearby>", text: "About 15 minutes by car" },
], { cols: 4 });
check("cards: one card per item", (cards.match(/<li class="c3ph-card">/g) || []).length === 3);
check("cards: drawings are inline SVG, decorative (the label says the same)", (cards.match(/<svg [^>]*aria-hidden="true"/g) || []).length === 2);
check("cards: a photo card is a lazy srcset image", /<li class="c3ph-card"><div class="c3ph-f"><img [^>]*srcset="[^"]*600w[^"]*1200w"[^>]*loading="lazy"/.test(cards));
check("cards: the credit on a card photo is 'Photo: <author>', linked to the license", /<span class="c3ph-cr"><a href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\/"[^>]*>Photo: Jane Doe<\/a><\/span>/.test(cards));
check("cards: two a row on a phone, three from 700 px, four from 1000 px", /\.c3ph-cards\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/.test(cards) && /min-width:700px\)\{\.c3ph-cards\{grid-template-columns:repeat\(3/.test(cards) && /min-width:1000px\)\{\.c3ph-cards\.c3ph-4\{grid-template-columns:repeat\(4/.test(cards) && /class="c3ph-cards c3ph-4"/.test(cards));
check("cards: label and line are escaped text", /<strong>Beach &lt;nearby&gt;<\/strong><span class="c3ph-t">About 15 minutes by car<\/span>/.test(cards));
check("cards: a drawing with alt is announced", /role="img" aria-label="An indoor pool with tall windows"/.test(P.featureCards([{ illustration: "indoor-pool", alt: "An indoor pool with tall windows", label: "Pool" }])));
check("cards: each needs a label", throws(() => P.featureCards([{ illustration: "beach" }]), /label/));
check("cards: a photo or a drawing, not neither", throws(() => P.featureCards([{ label: "Pool" }]), /photo or an illustration/));
check("cards: a photo or a drawing, not both", throws(() => P.featureCards([{ label: "Pool", photo: rec(), illustration: "beach" }]), /not both/));
check("cards: an unknown drawing throws", throws(() => P.featureCards([{ label: "Pool", illustration: "unicorn" }]), /no illustration/));
check("cards: the guard runs on card photos", throws(() => P.featureCards([{ label: "Pool", photo: rec({ license: "CC BY-NC 4.0" }) }]), /Allowed/));

/* ---- credits ---- */
/* Each photo is named by what it shows (the caption it was shown with, else the record's
   caption, else its alt), never by its Commons file title, and with no date. */
const titled = (o) => rec(Object.assign({ file: `images/t/${o.title.replace(/\W+/g, "-")}.webp` }, o));
const cc0 = titled({ title: "Sunrise 2019-04-02", alt: "The sun coming up over calm water", license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/", author: "Sam Roe", source: "https://commons.wikimedia.org/wiki/File:Sun.jpg" });
const fileTitle = titled({ title: "Prices Swamp Run (December 2022)", alt: "A calm lake with shops along the far shore", source: "https://commons.wikimedia.org/wiki/File:Prices_Swamp_Run_(December_2022).jpg" });
const dated = titled({ title: "Beach Thanksgiving 2018", alt: "The beach and ocean seen from a high floor, in late November" });
const cr = P.creditsList([rec(), cc0, rec(), own, fileTitle, dated]);
const row0 = (cr.match(/<div role="listitem">[^]*?<\/div>/g) || []);
check("credits: each photo once, then the note", row0.length === 6, String(row0.length));
check("credits: what it shows, 'Photo: <author>', license linked to its deed, 'via Wikimedia Commons' linked to the file page", /<div role="listitem">Sand, sea oats and small waves at sunrise\. Photo: Jane Doe, <a href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\/" target="_blank" rel="noopener noreferrer">CC BY-SA 4\.0<\/a>, via <a href="https:\/\/commons\.wikimedia\.org\/wiki\/File:Beach\.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons<\/a>\.<\/div>/.test(cr), row0[0]);
check("credits: no Commons file title ('Prices Swamp Run', 'Beach.jpg', 'Sunrise 2019')", !/Prices Swamp|Beach\.jpg<|Sunrise 2019|Thanksgiving/.test(cr.replace(/href="[^"]*"/g, "")) && /A calm lake with shops along the far shore\. Photo:/.test(cr));
check("credits: no date in the text ('2018', 'late November')", !/\b(?:19|20)\d\d\b|November/.test(cr.replace(/href="[^"]*"/g, "")) && /The beach and ocean seen from a high floor\. Photo:/.test(cr));
check("credits: CC0 photo is credited too", /The sun coming up over calm water\. Photo: Sam Roe, <a [^>]*>CC0<\/a>/.test(cr));
check("credits: our own photo says Chapter3 Realty", /Photo: A\. Agent, Chapter3 Realty\./.test(cr));
check("credits: the note of changes, and that a BY-SA photo keeps its license", /Chapter3 Realty resized these photos and cropped some of them\. Each photo keeps the license listed with it\./.test(cr));
check("credits: no BY-SA sentence when there is no BY-SA photo", !/keeps the license/.test(P.creditsList([cc0])));
check("credits: links open safely in a new tab", !/<a (?![^>]*rel="noopener noreferrer")/.test(cr));
check("credits: not read as body copy (no p or li)", !/<p[ >]|<li[ >]/.test(cr));
check("credits: titled 'Photo credits' in small type, not capitals", /<div class="c3ph-h" id="photo-credits">Photo credits<\/div>/.test(cr) && /\.c3ph-credits \.c3ph-h\{font-family:var\(--sans\);font-size:\.8rem;/.test(cr) && !/\.c3ph-h\{[^}]*uppercase/.test(cr) && /\.c3ph-credits\{[^}]*font-size:\.8rem/.test(cr));
check("credits: the guard runs here too", throws(() => P.creditsList([rec({ license: "" })]), /license record/));
check("credits: an empty list throws", throws(() => P.creditsList([])));
{
  /* The words the reader saw under the photo come first. */
  const a = titled({ title: "Conway Downtown Historic District Jun 10", alt: "Main Street in downtown Conway, lined with old brick shop buildings" });
  const b = titled({ title: "Murrells inlet2473", alt: "Fishing boats tied up at a marina" });
  const h = titled({ title: "Thorofare Island (Horry County, SC)", alt: "Cypress trees along dark water" });
  P.gallery([{ photo: a, caption: "Main Street, downtown Conway" }, { photo: b, caption: "Fishing boats in Murrells Inlet" }]);
  P.heroPhoto(h, { caption: "Cypress trees on the Waccamaw River near Conway. Every photo on this page shows the Conway area, not the neighborhood itself." });
  const c2 = P.creditsList([h, a, b]);
  check("credits: a gallery photo is named by its caption", /Main Street, downtown Conway\. Photo:/.test(c2) && /Fishing boats in Murrells Inlet\. Photo:/.test(c2) && !/Jun 10|inlet2473/.test(c2.replace(/href="[^"]*"/g, "")));
  check("credits: a hero is named by its caption's first sentence", /Cypress trees on the Waccamaw River near Conway\. Photo:/.test(c2) && !/Every photo/.test(c2));
  check("credits: { photo, caption } names a photo in the caller's words", /The fishing fleet\. Photo:/.test(P.creditsList([{ photo: b, caption: "The fishing fleet" }])));
  check("credits: a caption that talks about 'photos' is skipped for the alt", /Cypress trees along dark water\. Photo:/.test(P.creditsList([{ photo: titled({ title: "X 1", alt: "Cypress trees along dark water" }), caption: "None of these photos show the neighborhood" }])));
  check("credits: a photo with only dated words throws, asking for a caption", throws(() => P.creditsList([titled({ title: "Y 2", alt: "Taken on Jun 10, 2019 at noon", what: "Thanksgiving 2018" })]), /caption or alt with no date/));
}

/* ---- names and files ---- */
const list = [rec(), g2];
check("findPhoto finds by name with or without .webp or -600w", P.findPhoto(list, "pier") === g2 && P.findPhoto(list, "pier.webp") === g2 && P.findPhoto(list, "pier-600w.webp") === g2);
check("findPhoto throws on a typo", throws(() => P.findPhoto(list, "beech")));
check("no em dash in any output", !/\u2014/.test(hero + gal + row + cards + cr + P.photoCss()));

let im = true;
try { require("child_process").execFileSync("convert", ["-version"]); } catch { im = false; }
if (im) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "c3ph-"));
  const src = path.join(dir, "src.png"), small = path.join(dir, "small.png");
  require("child_process").execFileSync("convert", ["-size", "1600x1000", "gradient:#9fc6ce-#f4efe8", src]);
  require("child_process").execFileSync("convert", ["-size", "900x600", "xc:#c4783a", small]);
  const v = P.makeVariants(src, path.join(dir, "out", "x"));
  const dims = (f) => require("child_process").execFileSync("identify", ["-format", "%m %w %h", f]).toString();
  check("makeVariants writes a 600w and a 1200w WebP", dims(v.files[600]) === "WEBP 600 375" && dims(v.files[1200]) === "WEBP 1200 750" && v.width === 1200 && v.height === 750);
  check("makeVariants refuses a photo under 1200 px wide", throws(() => P.makeVariants(small, path.join(dir, "out", "y")), /at least 1200/));
  fs.rmSync(dir, { recursive: true, force: true });
} else console.log("skip  makeVariants (ImageMagick not installed here)");

/* ---- the real batch: every photo passes and has its files ---- */
const BATCH = path.join(__dirname, "..", "batches", "2026-10-a");
const data = JSON.parse(fs.readFileSync(path.join(BATCH, "data", "photos.json"), "utf8"));
const live = data.photos.filter((p) => !p.hold);
const bad = live.map((p) => { try { P.checkRecord(p); P.imageSet(p); return ""; } catch (e) { return `${p.file}: ${e.message}`; } }).filter(Boolean);
check("batch 2026-10-a: every photo not on hold passes the guard", !bad.length, bad.join("; "));
check("batch 2026-10-a: every photo has default alt text of 3+ words", live.every((p) => (p.alt || "").split(/\s+/).length >= 3), live.filter((p) => !p.alt).map((p) => p.file).join(", "));
const inRepo = (p) => path.join(BATCH, p.replace(/^images\/55-plus\//, "images/"));
const missingFiles = live.flatMap((p) => [(p.variants || {})["600"] || `${p.file} 600w`, (p.variants || {})["1200"] || `${p.file} 1200w`]).filter((f) => !fs.existsSync(inRepo(f)));
check("batch 2026-10-a: every 600w and 1200w file is in the repo", !missingFiles.length, missingFiles.join(", "));
const tooBig = live.filter((p) => p.variants && fs.existsSync(inRepo(p.variants["1200"])) && fs.statSync(inRepo(p.variants["1200"])).size > 220 * 1024).map((p) => p.file);
check("batch 2026-10-a: every 1200w file is under 220 KB (fast on a phone)", !tooBig.length, tooBig.join(", "));
check("batch 2026-10-a: the Alabama Theatre sign is on hold and refused", throws(() => P.heroPhoto(P.findPhoto(data.photos, "alabama-theatre-barefoot-landing")), /on hold/));
{
  /* The credits for every batch photo: no file title and no date, the things readers flagged. */
  const all = P.creditsList(live).replace(/href="[^"]*"/g, "");
  const lines = all.match(/<div role="listitem">[^]*?<\/div>/g) || [];
  const flagged = ["Prices Swamp Run", "(13 May 2023)", "Jun 10", "Thanksgiving", "18 November 2006", "inlet2473", "panoramio"].filter((t) => all.includes(t));
  check("batch 2026-10-a: no credit carries a flagged file title or date", !flagged.length, flagged.join(", "));
  const titles = live.filter((p) => all.includes(`>${p.title}.`) || all.includes(`">${p.title}`)).map((p) => p.title);
  check("batch 2026-10-a: no credit is named by its Commons title", !titles.length, titles.join("; "));
  check("batch 2026-10-a: every credit line has no year or dated month", lines.every((l) => !P.hasDate(l.replace(/<[^>]+>/g, ""))), lines.filter((l) => P.hasDate(l.replace(/<[^>]+>/g, ""))).join(" | "));
  check("batch 2026-10-a: one line per photo, each 'via Wikimedia Commons'", lines.length === live.length + 1 && (all.match(/via <a [^>]*>Wikimedia Commons<\/a>/g) || []).length === live.length);
}

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
