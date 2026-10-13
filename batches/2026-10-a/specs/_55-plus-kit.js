/* Shared visuals for the four 55+ community specs, batch 2026-10-a (final build,
 * 2026-10-10). Each spec requires this file for its maps, photos, drawings, icon
 * rows and the comparison table. No sentence of page copy lives here: every word a
 * reader sees is written in the spec, so no sentence repeats across the four pages.
 *
 * Since 2026-10-13 the general blocks (maps, story, glance, photoSet, prosCons) live in
 * Blog-Brain tools/page-kit.js, so every batch uses the same code (lesson L34). This file
 * gives them this batch's data and keeps what is only this batch's: the photo refusals and
 * the comparison table of the four communities. The exports and the built pages are the
 * same as before the move (rebuilt and compared byte for byte).
 *
 * Data, one source each (all in ../data/):
 *   places.json                map points and drive minutes. A drive is used only when
 *                              its ledger row is verified (each spec names the rows).
 *   photos.json                licensed area photos, with the record each credit needs.
 *   55-plus-communities.json   the comparison table.
 * Tools (Blog-Brain):
 *   tools/page-kit.js      maps, story, glance, photoSet, prosCons. It loads area-map.js,
 *                          icons.js, photos.js and story-check.js from its own folder.
 *   tools/area-map.js      communityMaps: a "where it is" region map and an "inside the
 *                          neighborhood" close-up, both drawn, plus mapLinksHtml buttons.
 *   tools/photos.js        heroPhoto, gallery, featureCards, creditsList, photoCss.
 *   tools/illustrations.js the drawings inside featureCards.
 *   tools/icons.js         atAGlance, for quick answers that have no drawing.
 * The spec runs from the website working copy (specs/). The batch copy in Blog-Brain
 * (batches/2026-10-a/specs/) is the record; it builds only from the website.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Where the Blog-Brain tools are: the copy an upload package puts in the website's
   tools/blog-brain/ (tools/package-batch.js), then $BLOG_BRAIN, then the Blog-Brain repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));

/* Where a map file goes when it is too big to sit inline (over 60 KB). */
const MAP_DIR = path.join(__dirname, "..", "chapter3realty", "images", "maps");
const MAP_SRC = "/images/maps";

/* Photos this rule set refuses for this batch (2026-10-10): the uploader is not the author,
   or the subject is a brand sign. photos.js already refuses a record with a "hold" note. */
const NOT_USED = ["alabama-theatre-barefoot-landing", "broadway-at-the-beach-night", "huntington-beach-state-park-sunset",
  "north-myrtle-beach-dunes-sunrise", "marsh-houses-murrells-inlet"];

const COMPARE = require("../data/55-plus-communities.json");
const kit = PK.create({ h, places: require("../data/places.json"), photos: require("../data/photos.json").photos,
  notUsed: NOT_USED, mapDir: MAP_DIR, mapSrc: MAP_SRC });
const { maps, story, glance, photoSet, prosCons, atAGlance, icon, CREDIT2 } = kit;

/* ---------------------------------------------------------------------------- */
/* The comparison table                                                           */

/* The four communities, each linked except this page. A real <table> (STANDARD A6), with
   the site's table styles. Under 600 px wide each row becomes a card: the community's name
   on top, then its other facts, each with its column name in front, so a 360 px phone sees
   the price column (review 3). */
const TH = 'style="padding:.55rem .8rem;border-bottom:2px solid var(--navy);color:var(--navy);text-align:left;font-family:var(--sans);font-size:.8rem;letter-spacing:.04em;text-transform:uppercase"';
const TD = 'style="padding:.55rem .8rem;border-bottom:1px solid var(--rule);color:var(--muted)"';
const CMP_CSS = "<style>.c3-cmp tr.c3-self td{background:#fff;font-weight:600;color:var(--navy)!important}"
  + "@media (max-width:599px){.c3-cmp tr.c3-self{background:#fff;border:2px solid var(--brass)}.c3-cmp tr.c3-self td{background:transparent}}"
  + "@media (max-width:599px){"
  + ".c3-cmp table,.c3-cmp tbody,.c3-cmp tr,.c3-cmp td{display:block;width:100%}"
  + ".c3-cmp thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}"
  + ".c3-cmp tr{background:var(--ivory-2);border-top:3px solid var(--brass);margin:0 0 .75rem;padding:.4rem 0}"
  + ".c3-cmp td{border:0!important;padding:.25rem .9rem!important}"
  + ".c3-cmp td:first-child{color:var(--navy)!important;font-weight:500;font-size:1rem}"
  + ".c3-cmp td[data-label]:not(:first-child)::before{content:attr(data-label) \": \";color:var(--navy)}"
  /* The name links on the cards: a 44 px tap area that does not move the line (was 22 px). */
  + ".c3-cmp td a{padding:11px 0}"
  + "}</style>";
const compareTable = (self) => {
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const rows = COMPARE.rows.map((r) => {
    const cells = [r.url === self ? `<strong style="color:var(--navy);font-weight:700">${r.cells[0]}</strong>` : h.a(r.url, r.cells[0]), ...r.cells.slice(1)];
    /* This page's own row stands out: bold, shaded, with a brass frame on a phone card. */
    return `<tr${r.url === self ? ' class="c3-self"' : ""}>${cells.map((c, i) => `<td data-label="${esc(COMPARE.head[i])}" ${TD}>${c}</td>`).join("")}</tr>`;
  }).join("");
  return `${CMP_CSS}<div class="c3-cmp" style="overflow-x:auto;margin:1.2rem 0;max-width:760px"><table style="width:100%;border-collapse:collapse;font-size:.92rem"><thead><tr>${COMPARE.head.map((c) => `<th ${TH}>${c}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
};

module.exports = { h, maps, story, glance, photoSet, compareTable, atAGlance, icon, CREDIT2, prosCons };
