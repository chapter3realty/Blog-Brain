#!/usr/bin/env node
/*
 * Controls for photos.js.
 *
 *   node tools/photos.test.js
 *
 * The guard (license record), alt text, srcset and sizes, lazy loading, the four blocks,
 * and the real batch file: every photo in batches/2026-10-a/data/photos.json passes the
 * guard and has its 600w and 1200w WebP files.
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
check("hero carries the credit on the photo, license linked", /<span class="c3ph-cr">Photo: Jane Doe, <a href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\/"[^>]*>CC BY-SA 4\.0<\/a><\/span>/.test(hero));
check("credit overlay is tiny text on a soft gradient", /\.c3ph-cr\{[^}]*font:400 \.625rem[^}]*gradient/.test(hero));
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
check("gallery scrolls and snaps on a phone", /\.c3ph-gal\{display:flex;[^}]*overflow-x:auto;scroll-snap-type:x mandatory/.test(gal) && /scroll-snap-align:start/.test(gal));
check("gallery is a grid from 700 px", /@media \(min-width:700px\)\{\.c3ph-gal\{display:grid;grid-template-columns:repeat\(var\(--c3ph-n,3\)/.test(gal) && /--c3ph-n:3/.test(gal));
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
check("cards: two a row on a phone, three from 700 px, four from 1000 px", /\.c3ph-cards\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/.test(cards) && /min-width:700px\)\{\.c3ph-cards\{grid-template-columns:repeat\(3/.test(cards) && /min-width:1000px\)\{\.c3ph-cards\.c3ph-4\{grid-template-columns:repeat\(4/.test(cards) && /class="c3ph-cards c3ph-4"/.test(cards));
check("cards: label and line are escaped text", /<strong>Beach &lt;nearby&gt;<\/strong><span class="c3ph-t">About 15 minutes by car<\/span>/.test(cards));
check("cards: a drawing with alt is announced", /role="img" aria-label="An indoor pool with tall windows"/.test(P.featureCards([{ illustration: "indoor-pool", alt: "An indoor pool with tall windows", label: "Pool" }])));
check("cards: each needs a label", throws(() => P.featureCards([{ illustration: "beach" }]), /label/));
check("cards: a photo or a drawing, not neither", throws(() => P.featureCards([{ label: "Pool" }]), /photo or an illustration/));
check("cards: a photo or a drawing, not both", throws(() => P.featureCards([{ label: "Pool", photo: rec(), illustration: "beach" }]), /not both/));
check("cards: an unknown drawing throws", throws(() => P.featureCards([{ label: "Pool", illustration: "unicorn" }]), /no illustration/));
check("cards: the guard runs on card photos", throws(() => P.featureCards([{ label: "Pool", photo: rec({ license: "CC BY-NC 4.0" }) }]), /Allowed/));

/* ---- credits ---- */
const cc0 = rec({ title: "Sunrise", file: "images/t/sun.webp", license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/", author: "Sam Roe", source: "https://commons.wikimedia.org/wiki/File:Sun.jpg" });
const cr = P.creditsList([rec(), cc0, rec(), own]);
check("credits: each photo once", (cr.match(/role="listitem"/g) || []).length === 4);
check("credits: title linked to the source, author, license linked to its deed", /<a href="https:\/\/commons\.wikimedia\.org\/wiki\/File:Beach\.jpg"[^>]*>Beach at sunrise<\/a>, by Jane Doe, <a href="https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\/"[^>]*>CC BY-SA 4\.0<\/a>, via Wikimedia Commons\./.test(cr));
check("credits: CC0 photo is credited too", /Sunrise<\/a>, by Sam Roe, <a [^>]*>CC0<\/a>/.test(cr));
check("credits: our own photo says Chapter3 Realty", /Photo: A\. Agent, Chapter3 Realty\./.test(cr));
check("credits: says we resized and cropped, and the BY-SA terms", /resized these photos, and some are shown cropped\. A cropped CC BY-SA photo is shared under the same license\./.test(cr));
check("credits: no BY-SA sentence when there is no BY-SA photo", !/same license/.test(P.creditsList([cc0])));
check("credits: links open safely in a new tab", (cr.match(/<a /g) || []).every(() => true) && !/<a (?![^>]*rel="noopener noreferrer")/.test(cr));
check("credits: not read as body copy (no p or li)", !/<p[ >]|<li[ >]/.test(cr));
check("credits: the guard runs here too", throws(() => P.creditsList([rec({ license: "" })]), /license record/));
check("credits: an empty list throws", throws(() => P.creditsList([])));

/* ---- names and files ---- */
const list = [rec(), g2];
check("findPhoto finds by name with or without .webp or -600w", P.findPhoto(list, "pier") === g2 && P.findPhoto(list, "pier.webp") === g2 && P.findPhoto(list, "pier-600w.webp") === g2);
check("findPhoto throws on a typo", throws(() => P.findPhoto(list, "beech")));
check("no em dash in any output", !/\u2014/.test(hero + gal + cards + cr + P.photoCss()));

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

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
