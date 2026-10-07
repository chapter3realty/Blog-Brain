/* Shared visuals for the four 55+ community specs, batch 2026-10-a (plain rewrite,
 * 2026-10-07). Each spec requires this file for its map, its icon rows, its photos
 * and the comparison table. No sentence of page copy lives here: every word a
 * reader sees is written in the spec, so no sentence repeats across the four pages.
 *
 * Data, one source each (all in ../data/):
 *   places.json                map points and drive minutes. A drive is used only when
 *                              its ledger row is verified (each spec names the rows).
 *   photos.json                licensed area photos, with the credit line each needs.
 *   55-plus-communities.json   the comparison table.
 * Tools: Blog-Brain tools/area-map.js and tools/icons.js. The spec runs from the
 * website working copy (specs/) or from Blog-Brain (batches/2026-10-a/specs/).
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

const BB = [path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"]
  .find((d) => fs.existsSync(path.join(d, "tools", "area-map.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/area-map.js)");
const { areaMap, liveMapHtml, CREDIT } = require(path.join(BB, "tools", "area-map.js"));
const { atAGlance, icon } = require(path.join(BB, "tools", "icons.js"));

const PLACES = require("../data/places.json");
const PHOTOS = require("../data/photos.json").photos;
const COMPARE = require("../data/55-plus-communities.json");

/* The drawn map, then the live Google map under it (tap to load).
   picks: [{ id, label, kind }]; id is a landmark id in places.json. Minutes come from
   the community's drives in places.json. */
function mapBlock(slug, picks, caption) {
  const c = PLACES.communities.find((x) => x.slug === slug);
  if (!c) throw new Error(`no places.json entry for ${slug}`);
  const L = Object.fromEntries(PLACES.landmarks.map((l) => [l.id, l]));
  const mins = Object.fromEntries(c.drives.map((d) => [d.to_id, d.minutes]));
  const landmarks = picks.map((p) => {
    if (!L[p.id] || mins[p.id] === undefined) throw new Error(`${slug}: no landmark or drive for ${p.id}`);
    return { name: p.label, kind: p.kind, lat: L[p.id].lat, lon: L[p.id].lon, minutes: mins[p.id] };
  });
  const m = areaMap({ home: { name: c.name, lat: c.lat, lon: c.lon, town: c.town }, landmarks });
  if (!caption.includes(CREDIT)) caption = `${caption} ${CREDIT}`;
  /* tools/area-map.js now draws the button label with the site's .btn-brass class. An inline
     brass ground with navy text fails the website audit ("invisible text"), so refuse it. */
  const live = liveMapHtml({ name: c.name, lat: c.lat, lon: c.lon, svg: m.svg, caption });
  if (/background:var\(--brass\);color:var\(--navy\)/.test(live)) throw new Error("live map button uses an inline brass ground; the website audit fails it");
  return live;
}

/* Image sizes of the WebP files in images/55-plus/ (1200 px wide). */
const SIZES = {
  "north-myrtle-beach-beach-umbrellas.webp": 800, "north-myrtle-beach-dunes-sunrise.webp": 800,
  "cherry-grove-pier.webp": 900, "alabama-theatre-barefoot-landing.webp": 900,
  "myrtle-beach-beach-from-above.webp": 900, "myrtle-beach-sunrise.webp": 900,
  "myrtle-beach-skywheel-boardwalk.webp": 900, "broadway-at-the-beach-night.webp": 730,
  "market-common-lake.webp": 800, "conway-riverwalk.webp": 1200, "conway-main-street.webp": 900,
  "conway-city-hall.webp": 800, "conway-historic-home.webp": 800,
  "huntington-beach-state-park-sunset.webp": 800, "marsh-houses-murrells-inlet.webp": 800,
  "surfside-beach-shoreline.webp": 900, "murrells-inlet-boats.webp": 759, "murrells-inlet-marina-sky.webp": 516,
};

/* A licensed area photo in h.figure. The caption is the spec's words, then the credit
   line from photos.json, with the license linked to its deed and "Wikimedia Commons"
   linked to the photo's page. For CC0 and public domain photos, the credit is the first
   sentence of the credit field (the second is a note to the writer). */
function photo(file, alt, words) {
  const p = PHOTOS.find((x) => x.file.endsWith("/" + file));
  if (!p) throw new Error(`no photos.json entry for ${file}`);
  const hgt = SIZES[file];
  if (!hgt) throw new Error(`no size for ${file}`);
  const credit = p.credit.replace(/\. Credit not required; give it anyway\.$/, "");
  const lic = credit.match(/, ([^,]*?(?:CC[^,]*|public domain[^,]*)), via Wikimedia Commons$/i);
  if (!lic) throw new Error(`credit line not understood: ${credit}`);
  const EXT = 'style="color:var(--navy);text-decoration:underline" target="_blank" rel="noopener noreferrer"';
  const linked = credit.slice(0, lic.index) + `, <a href="${p.license_url}" ${EXT}>${lic[1]}</a>, via <a href="${p.commons_page}" ${EXT}>Wikimedia Commons</a>`;
  const img = `<img src="/${p.file}" alt="${alt}" width="1200" height="${hgt}" loading="lazy" decoding="async" style="display:block;width:100%;height:auto">`;
  return h.figure(img, `${words} ${linked}`);
}

/* The comparison table: the four communities, each linked except this page.
   A real <table> (STANDARD A6), with the site's table styles. Under 600 px wide each row
   becomes a card: the community's name on top, then its other facts, each with its column
   name in front. Without this, a 360 px phone cut off the price column (review 3). */
const TH = 'style="padding:.55rem .8rem;border-bottom:2px solid var(--navy);color:var(--navy);text-align:left;font-family:var(--sans);font-size:.8rem;letter-spacing:.04em;text-transform:uppercase"';
const TD = 'style="padding:.55rem .8rem;border-bottom:1px solid var(--rule);color:var(--muted)"';
const CMP_CSS = "<style>@media (max-width:599px){"
  + ".c3-cmp table,.c3-cmp tbody,.c3-cmp tr,.c3-cmp td{display:block;width:100%}"
  + ".c3-cmp thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}"
  + ".c3-cmp tr{background:var(--ivory-2);border-top:3px solid var(--brass);margin:0 0 .75rem;padding:.4rem 0}"
  + ".c3-cmp td{border:0!important;padding:.25rem .9rem!important}"
  + ".c3-cmp td:first-child{color:var(--navy)!important;font-weight:500;font-size:1rem}"
  + ".c3-cmp td[data-label]:not(:first-child)::before{content:attr(data-label) \": \";color:var(--navy)}"
  + "}</style>";
const compareTable = (self) => {
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const rows = COMPARE.rows.map((r) => {
    const cells = [r.url === self ? r.cells[0] : h.a(r.url, r.cells[0]), ...r.cells.slice(1)];
    return `<tr>${cells.map((c, i) => `<td data-label="${esc(COMPARE.head[i])}" ${TD}>${c}</td>`).join("")}</tr>`;
  }).join("");
  return `${CMP_CSS}<div class="c3-cmp" style="overflow-x:auto;margin:1.2rem 0;max-width:760px"><table style="width:100%;border-collapse:collapse;font-size:.92rem"><thead><tr>${COMPARE.head.map((c) => `<th ${TH}>${c}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
};

module.exports = { mapBlock, photo, compareTable, atAGlance, icon, CREDIT };
