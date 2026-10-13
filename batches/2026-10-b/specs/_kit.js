/* The batch 2026-10-b kit: the shared page blocks, given this batch's data. Every spec in this
 * batch can require it. No sentence of page copy lives here: every word a reader sees is in a spec.
 *
 * Written 2026-10-13 by the writer of /buyers/gated-communities/. Other writers: add what your page
 * needs below the exports; do not change what an export already returns, because a page built on
 * it would change too.
 *
 * Blocks (Blog-Brain tools):
 *   tools/page-kit.js   placesMap (one map of 2 to 15 places with a numbered key), maps (one
 *                       community), photoSet, story, glance, prosCons, atAGlance, icon.
 *   tools/compare.js    compareCards (a table that becomes cards on a phone), wantPicker.
 * Data (../data/ in the website working copy, from batches/2026-10-b/data/):
 *   photos.json         licensed photo records; optional until a page shows a photo.
 *
 * The spec runs from the website working copy (specs/). The copy in Blog-Brain
 * (batches/2026-10-b/specs/) is the record; it builds only from the website.
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
const { compareCards, wantPicker } = require(path.join(BB, "tools", "compare.js"));

/* Where a map file goes when it is too big to sit inline (over 60 KB). */
const MAP_DIR = path.join(__dirname, "..", "chapter3realty", "images", "maps");
const MAP_SRC = "/images/maps";

const PHOTOS = path.join(__dirname, "..", "data", "photos.json");
const kit = PK.create({ h, photos: fs.existsSync(PHOTOS) ? JSON.parse(fs.readFileSync(PHOTOS, "utf8")).photos : undefined,
  mapDir: MAP_DIR, mapSrc: MAP_SRC });

/* A batch data file, read fresh, from the website's data/ folder. */
const data = (name) => JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", name), "utf8"));

module.exports = { h, kit, data, compareCards, wantPicker, BB,
  placesMap: kit.placesMap, photoSet: kit.photoSet, story: kit.story, glance: kit.glance,
  prosCons: kit.prosCons, atAGlance: kit.atAGlance, icon: kit.icon };
