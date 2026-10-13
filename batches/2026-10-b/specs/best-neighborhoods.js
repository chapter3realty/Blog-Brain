/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what the reader wants nearby.
 *
 * Batch 2026-10-b, page 1. Version 3, 2026-10-13 (round 3: review/ROUND-3.md and
 * review/OWNER-EYE-best-neighborhoods.md; round 2: ROUND-2.md and BUYER-READ-best-neighborhoods.md).
 * Round 3: the canal fee stated from the city's own resolution (row 182, pending); the lender's flood
 * rule said once, in plain words; a new example with its own shape (Deerfield's golf-cart parking); a
 * name beside every overview dot that has room, a number in the key for the rest; Grande Dunes and
 * Tidewater in the gated page's words and values; shorter (FAQ of five, no method sentences, no
 * paragraph that repeats a table).
 *
 * Reader. Someone who typed "best neighborhoods in Myrtle Beach", "best places to live in Myrtle Beach",
 * "best communities", "best areas to live", or the North Myrtle Beach or Surfside Beach versions. The cold
 * reader of version 1 (51, near Pittsburgh, a long-time vacationer who wants to live here) knew no
 * neighborhood name, no road and no trade word, and came for two things the page did not give: what a
 * home here costs each year besides the mortgage, and what living here all year is like. Job: choose two
 * or three neighborhoods to look at, knowing what each costs to own.
 * Shape (CRAFT 3; reports/Page shapes, sections 9 and 1): a decision guide. The first screen names the
 * picks for the three biggest wants, with a price. Then the "what do you want" picker (the reader's
 * favorite part), one map of all fifteen with the names and the places a newcomer knows, the yearly cost
 * of three contrasting picks, a short "all year" section, one section per area (each with its own small
 * map where every name fits, a table that becomes cards on a phone, and two or three lines per
 * neighborhood: what it has, then "the trade-off is"), the 55+ communities for readers 55 or older, what
 * to check before you choose (icon cards, one labelled example), the FAQ. One offer, three times.
 * "Best" is defined openly by what each place has (CRAFT 3; fair housing). Never who lives anywhere.
 *
 * Facts: batches/2026-10-b/data/best-neighborhoods.json names the ledger row of every table cell and of
 * the yearly cost table. The prose uses the same rows:
 *   neighborhoods-facts.md, verified rows only, in the verifier's wording; rows 176 to 181 (round 2,
 *     verified); row 182 (round 3, pending): the City of North Myrtle Beach's Cherry Grove canal
 *     assessment, from its 2025 resolution. A row that fails comes out of the copy.
 *   the-farm-facts.md for The Farm: rows 5, 6, 28, 47, 48, 71, 73, 74, 77, 78 and the verifier's
 *     completeness wording for the amenities. affordable-facts.md rows 65 and 72 (tax per $100,000).
 *   gated-communities-facts.md rows 9, 11, 20, 34, 43 and 46 (Tidewater's gatehouse, price and fee; the
 *     gated sections of Grande Dunes, in the gated page's words: "a gatehouse at its entrance").
 *   no-hoa-facts.md row 16 (what an HOA fee pays for, house against condo) and rows 5 and 18 corrected.
 *   batches/2026-10-a: the four 55+ cells, the pools and clubhouses their pages state, and the 80 percent
 *     rule (myrtle-trace-facts.md rows 1 and 9).
 *   stories.json: traffic-timing and off-season-open (the owner's experience, said as ours, once),
 *     ny-buyer-rules-fit (the rules card), housing-types-mix (the property version only).
 *   Left out on purpose: the McLeod Carolina Forest hospital (no opening confirmed), amenities from
 *     listing remarks, any gate not in the gated ledger, school ratings, builder names, crowds and
 *     anything about who lives anywhere (fair housing), homeowners insurance in dollars (no row; the
 *     coastal insurance guide is linked).
 *
 * Pictures: the overview map of the fifteen with a two-column key, a name beside every dot with room
 * for one (labelDots below), a small map per area where every neighborhood is named (tools/area-map.js
 * placesMap; town labels added here from the tool's own town points and frame, in free space only), and
 * four NOAA 2026 aerials, each under the sentence it shows, drawn for this page: Pine Lakes, The Market
 * Common (with The Reserve and the airport), Cherry Grove (beach, canals, salt marsh), the ocean side of
 * Surfside Beach. Every outline and label is placed from county, state or USGS GIS through each frame's
 * corner coordinates (data/photos.json names the points).
 *
 * Example: retell first. "Dana wants a house near the beach for less, and the beach access closest to
 * Deerfield has parking for golf carts only, but she rides her bike, so she chooses Deerfield over The
 * Farm." Child sentence: "You can only park a golf cart at that beach." A labelled example, not a
 * story from stories.json (none records a choice between two neighborhoods); its own shape: a choice,
 * not a check before an offer.
 */
const fs = require("fs"), path = require("path");
const { h, compareCards, wantPicker, atAGlance, glance, story, BB } = require("./_kit.js");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const AM = require(path.join(BB, "tools", "area-map.js"));
const { loadGeo2 } = AM;

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const BATCH_DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!BATCH_DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(BATCH_DATA, "photos.json")].filter((f) => fs.existsSync(f));
const dataFiles = (name) => [path.join(BATCH_DATA, name)].filter((f) => fs.existsSync(f));
const PHOTOS = [];
for (const f of PHOTO_FILES) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}
const kit = PK.create({ h, photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });

const D = JSON.parse(fs.readFileSync(dataFiles("best-neighborhoods.json")[0], "utf8"));
const N = Object.fromEntries(D.neighborhoods.map((n) => [n.id, n]));

/* The aerials, each under the sentence it shows. Made at load time: mkpage reads pageImages before it
   builds the sections. The Surfside Beach view has crops, so it is the page's share image. */
const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css();
const SURFSIDE = ph.aerial("surfside-beach-from-above", "The ocean side of Surfside Beach from the air: streets of homes from US 17 Business, at the left, to the beach.",
  { alt: "Surfside Beach from the air: streets of houses under trees from a highway at the left to a wide beach and the ocean at the right, with a fishing pier and a public beach access marked" });
const PINE = ph.aerial("pine-lakes-from-above", "Pine Lakes from the air: the homes in the table, outlined in orange, beside the Pine Lakes Country Club golf course.",
  { alt: "Pine Lakes in Myrtle Beach from the air: curving streets of houses around ponds, outlined in orange, beside a golf course with green fairways and sand traps, and the beach at the far right", closeUp: true });
const MARKET = ph.aerial("market-common-from-above", "The Market Common from the air: its homes, outlined in orange, The Reserve at the right, shops below and the airport at the bottom.",
  { alt: "The Market Common in Myrtle Beach from the air: blocks of townhomes and houses outlined in orange beside a lake, a second outlined group labelled The Reserve at Market Common at the right, shops below them, and the airport with its runway at the bottom", closeUp: true });
/* This page's labelled copy of the no-HOA page's Cherry Grove view (same NOAA frame and crop, with labels). */
const CHERRY = ph.aerial("cherry-grove-canals-from-above", "Cherry Grove from the air: the beach, the canals and the salt marsh.",
  { alt: "Cherry Grove in North Myrtle Beach from the air: the beach and part of a fishing pier at the left, rows of houses on canals labelled Canals, and a wide salt marsh with winding creeks labelled Salt marsh", closeUp: true });

const SELF = "/buyers/best-neighborhoods/";
const OFFER = "/contact/";
const FARM = "/submarkets/carolina-forest/the-farm/";
const P55 = "/buyers/55-plus-communities/";
const DWNMB = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const SEASONS = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";

/* Primary sources, each opened by the researcher and again by the verifier. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const FEMA = "https://msc.fema.gov/portal/home";
const FEMA_POLICIES = "https://www.fema.gov/openfema-data-page/nfip-redacted-policies-v3";
const SC_TAX = "https://www.scstatehouse.gov/code/t12c037.php";
const BEACH = "https://gis.des.sc.gov/beachaccess/";
const SCHOOLS = "https://hcsd1.maps.arcgis.com/apps/instant/lookup/index.html?appid=72f93a5329c54f54840673fe6430ab43";
const FARM_HOA = "https://www.farmatcarolinaforest.com/";
const CG_CANALS = "https://www.nmb.us/AgendaCenter/ViewFile/Item/1251?fileID=3883";

/* A neighborhood's heading, with the id the picker, the map key and the tables link to. The heading is
   the neighborhood's own name, the same words as its row in the table, its card in the picker and its
   line in the map key (score.js H14: a link label is the heading it points to). */
const H3 = 'style="font-family:var(--serif);font-size:1.25rem;color:var(--navy);margin:1.6rem 0 .6rem"';
const nh = (id) => `<h3 id="${id}" ${H3}>${N[id].name}</h3>`;
const A = (id) => `#${id}`;
const link = (id) => (id === "the-farm" ? FARM : A(id));

/* ---------------------------------------------------------------------------- */
/* Maps                                                                           */

/* A town name the reader needs ("Carolina Forest", "Myrtle Beach"), added to a map the tool drew. The point
   is the tool's own town point (tools/geo), projected with the map's own frame (the tool's projection is
   linear in longitude and latitude). The name goes in the first free spot near the point, clear of every
   label, marker and shield the tool placed (its boxes); with no free spot near enough it is left off and
   the build says so. Drawn in the tool's own town style (class T). */
const GEO = loadGeo2();
function addTown(res, name, reach = 60) {
  const t = GEO.towns.find((x) => x.name === name);
  if (!t) throw new Error(`no town point for ${name}`);
  const m = res.map, f = m.frame, W = m.width, H = m.height;
  const x0 = (t.lon - f.west) / (f.east - f.west) * W, y0 = (f.north - t.lat) / (f.north - f.south) * H;
  const lines = name.toUpperCase().split(" ");
  const w = Math.max(...lines.map((l) => l.length)) * 9.6 + 6, hgt = lines.length * 16.5 + 2;
  const free = (cx, cy) => {
    const b = { x0: cx - w / 2, x1: cx + w / 2, y0: cy - hgt / 2, y1: cy + hgt / 2 };
    if (b.x0 < 6 || b.y0 < 6 || b.x1 > W - 6 || b.y1 > H - 6) return false;
    return !m.boxes.some((o) => !(o.x1 + 3 < b.x0 || o.x0 - 3 > b.x1 || o.y1 + 3 < b.y0 || o.y0 - 3 > b.y1));
  };
  let spot = null;
  for (let r = 0; r <= reach && !spot; r += 2) for (let k = 0; k < 16 && !spot; k++) {
    const cx = x0 + r * Math.cos(k * Math.PI / 8), cy = y0 + r * Math.sin(k * Math.PI / 8);
    if (free(cx, cy)) spot = [cx, cy];
  }
  if (!spot) { console.warn(`best-neighborhoods: no room for the town name ${name} on the map ${m.name}`); return res; }
  m.boxes.push({ kind: "town", x0: spot[0] - w / 2, x1: spot[0] + w / 2, y0: spot[1] - hgt / 2, y1: spot[1] + hgt / 2 });
  const top = -(lines.length - 1) * 8.25 + 4.6;
  const label = `<g transform="translate(${spot[0].toFixed(1)} ${spot[1].toFixed(1)})"><g class="k"><text class="T" x="0" y="${top.toFixed(1)}" text-anchor="middle">`
    + lines.map((l, i) => `<tspan x="0"${i ? ' dy="16.5"' : ""}>${l}</tspan>`).join("") + `</text></g></g>`;
  const i = res.html.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so a town name cannot be added");
  res.html = res.html.slice(0, i) + label + res.html.slice(i);
  return res;
}

/* A name beside a dot the tool left with a number only (owner's eye, round 3: "a name beside every dot").
   The tool names the dots it has room for. This adds a name to the others: a ring search around the
   dot's own marker, in one or two lines, clear of every label, marker, shield and the map's furniture,
   and nearer its own marker than any other marker by `margin` px, so it reads as that dot's name. A dot
   with no such spot keeps its number, and the key under the map names it. strip removes a label the tool
   placed between two markers (Grande Dunes, round 3), so it can be placed again against its own dot;
   stripShields removes a road shield the reader does not need where it blocks a name. */
const TW2 = AM.internals.tw2, SZ_MANY = AM.internals.SZ.many;
function labelDots(res, forms, o = {}) {
  const m = res.map, strip = new Set(o.strip || []), margin = o.margin == null ? 2 : o.margin;
  let svg = res.html;
  for (const num of strip) {
    const re = new RegExp(`(<text class="nm"[^>]*>${num}</text>)<text class="l"[^>]*>[\\s\\S]*?</text>`);
    if (!re.test(svg)) throw new Error(`best-neighborhoods: no map label to strip for ${num}`);
    svg = svg.replace(re, "$1");
    m.boxes = m.boxes.filter((b) => !(b.kind === "label" && b.owner === "lm" + (num - 1)));
  }
  for (const sh of o.stripShields || []) {
    const num = sh.split(" ")[1].split("#")[0];
    const re = new RegExp(`<g transform="translate\\([^)]*\\)"><g class="k"><rect [^>]*/><text class="r"[^>]*>${num}</text></g></g>`);
    if (!re.test(svg)) throw new Error(`best-neighborhoods: no road shield ${sh} on the map`);
    svg = svg.replace(re, "");
    m.boxes = m.boxes.filter((b) => !(b.kind === "shield" && b.owner === sh));
  }
  const markers = m.boxes.filter((b) => b.kind === "marker");
  const cen = (b) => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
  const LH = 17.5, out = [], missed = [];
  for (const p of m.places) {
    if (p.labelled && !strip.has(p.num)) continue;
    const mk = markers.find((b) => b.owner === "lm" + (p.num - 1));
    const [cx, cy] = cen(mk), r = (mk.x1 - mk.x0) / 2;
    let best = null;
    for (const lines of forms[p.name] || [[p.name]]) {
      const w = Math.max(...lines.map((l) => TW2(l, SZ_MANY))) + 4, hh = lines.length * LH + 2;
      for (let gap = 2; gap <= 14 && !best; gap += 2) for (let k = 0; k < 24 && !best; k++) {
        const a = k * Math.PI / 12, ux = Math.cos(a), uy = Math.sin(a), px = cx + (r + gap) * ux, py = cy + (r + gap) * uy;
        const x0 = ux > 0.3 ? px : ux < -0.3 ? px - w : px - w / 2, y0 = uy > 0.3 ? py : uy < -0.3 ? py - hh : py - hh / 2;
        const b = { x0, x1: x0 + w, y0, y1: y0 + hh };
        if (b.x0 < 4 || b.x1 > m.width - 4 || b.y0 < 4 || b.y1 > m.height - 4) continue;
        if (m.boxes.some((q) => q !== mk && q.kind !== "water" && !(q.x1 + 1 < b.x0 || q.x0 - 1 > b.x1 || q.y1 + 1 < b.y0 || q.y0 - 1 > b.y1))) continue;
        const d = (q) => { const [qx, qy] = cen(q); return Math.hypot(Math.max(b.x0 - qx, 0, qx - b.x1), Math.max(b.y0 - qy, 0, qy - b.y1)); };
        if (markers.some((q) => q !== mk && d(q) <= d(mk) + margin)) continue;
        best = { lines, b };
      }
      if (best) break;
    }
    if (!best) { missed.push(p.num); continue; }
    const { lines, b } = best, x = (b.x0 + 2).toFixed(1), y = (b.y0 + 14).toFixed(1);
    m.boxes.push(Object.assign({ kind: "label", owner: "lm" + (p.num - 1) }, b));
    out.push(`<g class="k"><text class="l" x="${x}" y="${y}">` + lines.map((l, i) => `<tspan x="${x}"${i ? ` dy="${LH}"` : ""}>${l}</tspan>`).join("") + `</text></g>`);
  }
  const i = svg.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so names cannot be added");
  res.html = svg.slice(0, i) + out.join("") + svg.slice(i);
  if (missed.length) console.warn(`best-neighborhoods: no room on the overview for the names of ${missed.join(", ")}; the key names them`);
  return res;
}

/* The overview: the fifteen, north to south, each name linked to its own part of the page, and the key in
   two columns on a phone too, so it sits right under the map. */
const OVERVIEW = labelDots(kit.placesMap("Neighborhoods", D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: link(n.id) })), {
  caption: "Map of the 15 neighborhoods on this page, numbered from North Myrtle Beach at the top right to Murrells Inlet at the bottom left. The city of Myrtle Beach is on the coast around numbers 6, 10 and 12.",
  key: true,
}), {
  "Barefoot Resort": [["Barefoot"]], "Waterbridge": [["Waterbridge"]], "The Farm at Carolina Forest": [["The Farm"]],
  "Plantation Lakes": [["Plantation Lakes"], ["Plantation", "Lakes"]], "Berkshire Forest": [["Berkshire"]],
  "Forestbrook Estates": [["Forestbrook"]], "Prince Creek": [["Prince Creek"], ["Prince", "Creek"]],
  [N["grande-dunes"].name]: [["Grande Dunes"], ["Grande", "Dunes"]],
}, { strip: [6], stripShields: ["SC 31#0"] });
/* The picker's places sit side by side when they fit, so the ten boxes take less of a phone screen; each
   link keeps its full tap height. */
const KEY_CSS = "<style>.c3-map-key{columns:2 8rem!important;column-gap:1rem!important;margin-left:1.4rem!important}.c3-map-key li{font-size:1rem}"
  + ".c3-want{gap:.75rem!important;margin:1rem 0 1.4rem!important}.c3-want>li{padding:.8rem 1rem .45rem!important}.c3-want .w{margin-bottom:.2rem!important}"
  + ".c3-want ul{display:flex;flex-wrap:wrap;column-gap:1.25rem}.c3-want .note{margin:0 0 .35rem!important}</style>";

/* One small map per area, where every name fits. */
const areaMap = (name, ids, caption, towns = []) => {
  const res = kit.placesMap(name, ids.map((id) => ({ name: N[id].name, short: N[id].short, lat: N[id].lat, lon: N[id].lon, href: link(id) })), { caption });
  for (const t of towns) addTown(res, t);
  return res.html;
};

/* ---------------------------------------------------------------------------- */
/* Tables                                                                         */

/* Columns: what homes usually sell for, the HOA fee, the drive to a beach access with no traffic. */
const COLS = [
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "fee", label: "HOA fee a month" },
  { key: "beach", label: "To the beach by car, no traffic" },
];
let cssDone = false;
const css = () => { const first = !cssDone; cssDone = true; return first; };
const table = (ids, caption) => compareCards(ids.map((id) => ({ name: N[id].name, href: link(id), cells: N[id].cells })), COLS,
  { caption, nameLabel: "Neighborhood", css: css() });
const COST_COLS = [
  { key: "hoa", label: "HOA fee a year" },
  { key: "tax", label: "Property tax a year", num: true },
  { key: "flood", label: "Flood insurance a year" },
  { key: "total", label: "In all, a year", num: true },
];

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Surfside Beach aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Best Neighborhoods in Myrtle Beach: Prices and Map | Chapter3",
  description: "The best neighborhoods in Myrtle Beach, North Myrtle Beach and Surfside Beach by what you want nearby, with home prices, HOA fees, yearly costs and a map.",
  ogTitle: "The best neighborhoods in Myrtle Beach, by what you want nearby",
  crumb: "Best Neighborhoods",
  eyebrow: "Choosing a neighborhood",
  h1: "What are the best neighborhoods in Myrtle Beach?",
  h1em: "Sorted by what you want close to home.",
  sub: "Fifteen neighborhoods from North Myrtle Beach to Murrells Inlet, with home prices, the homeowners association (HOA) fee and the drive to the beach.",
  heroMedia: glance([
    { icon: "beach", label: "Walk to the beach", text: "Cherry Grove, about $695,000" },
    { icon: "dollar", label: "A lower price", text: "The Farm, about $350,000" },
    { icon: "golf", label: "Golf", text: "Pine Lakes, Tidewater, Barefoot" },
  ]),
  heroCta: { label: "Get three neighborhoods", href: OFFER },
  author: "devin",
  shortAnswer: [
    "The best neighborhood in Myrtle Beach depends on what you want close by. To walk to the beach, look at Cherry Grove in North Myrtle Beach, where houses usually sell for about $695,000. For a lower price and a short drive to the beach, look at The Farm in Carolina Forest, where houses sell for about $350,000. For golf, look at Pine Lakes, Tidewater Plantation or Barefoot Resort.",
    "We chose these 15 by what each one has: home prices, the HOA fee, the drive to the beach, golf and pools. The HOA is the group that runs a neighborhood and collects a monthly fee from each owner.",
  ],
  sections: [
    { h2: "Which Myrtle Beach neighborhood fits what you want?", toc: "Find one by what you want", html:
      CSS + KEY_CSS +
      h.p("The neighborhood that fits you depends on what you want most near home. Find it below, then read about each neighborhood it names.") +
      wantPicker([
        { icon: "beach", want: "Walk to the beach", note: "The middle of each is under half a mile from a public path to the beach.",
          places: [{ name: "Cherry Grove", href: A("cherry-grove") }, { name: "Surfside Beach, ocean side", href: A("surfside-beach") }] },
        { icon: "beach", want: "A short drive to the beach, for less", note: "About 7 to 10 minutes by car. Houses usually sell for about $350,000.",
          places: [{ name: "Deerfield Plantation area", href: A("deerfield") }, { name: "The Farm at Carolina Forest", href: FARM }] },
        { icon: "golf", want: "Golf near home",
          places: [{ name: "Pine Lakes", href: A("pine-lakes") }, { name: "Tidewater Plantation", href: A("tidewater") }, { name: "Barefoot Resort", href: A("barefoot-resort") }] },
        { icon: "pool", want: "Pools and a clubhouse", note: "Seasons and Del Webb are 55+ communities.",
          places: [{ name: "The Farm at Carolina Forest", href: FARM }, { name: "Seasons at Prince Creek West (55+)", href: SEASONS }, { name: "Del Webb North Myrtle Beach (55+)", href: DWNMB }] },
        { icon: "dollar", want: "A lower price", note: "Townhomes and condos in The Farm sell for about $230,000 to $240,000.",
          places: [{ name: "The Farm at Carolina Forest", href: FARM }, { name: "Prince Creek", href: A("prince-creek") }, { name: "Deerfield Plantation area", href: A("deerfield") }] },
        { icon: "home", want: "No HOA fee, or a low one", note: "Most homes for sale on the ocean side of Surfside Beach are listed with no HOA fee.",
          places: [{ name: "Surfside Beach, ocean side", href: A("surfside-beach") }, { name: "Cherry Grove", href: A("cherry-grove") }, { name: "Forestbrook Estates", href: A("forestbrook-estates") }] },
        { icon: "key", want: "A new home", note: "Builders sold new homes in each in the last 12 months.",
          places: [{ name: "Waterbridge", href: A("waterbridge") }, { name: "Wild Wing Plantation", href: A("wild-wing") }, { name: "Prince Creek", href: A("prince-creek") }] },
        { icon: "hospital", want: "Close to a hospital", note: "About 6 to 8 minutes by car to a hospital.",
          places: [{ name: "Prince Creek", href: A("prince-creek") }, { name: "Pine Lakes", href: A("pine-lakes") }, { name: "Wild Wing Plantation", href: A("wild-wing") }] },
        { icon: "clubhouse", want: "A 55+ community", note: "See the 55+ section below for the age rule.",
          places: [{ name: "Del Webb North Myrtle Beach", href: DWNMB }, { name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Myrtle Trace", href: MT }] },
        { icon: "gate", want: "A gate at the entrance", note: "Our guide to gated communities lists more.",
          places: [{ name: "Tidewater Plantation", href: A("tidewater") }, { name: N["grande-dunes"].name, href: A("grande-dunes") }] },
      ]) +
      h.p(`For a home with no HOA at all, see ${h.a("/buyers/no-hoa-homes/", "where to find homes with no HOA near Myrtle Beach")}. For a gate at the entrance, see our guide to ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")}. If the price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy a home near Myrtle Beach")}.`) },

    { h2: "Where are the best neighborhoods in Myrtle Beach?", toc: "Map", html:
      h.p("The 15 neighborhoods on this page run along the coast from North Myrtle Beach to Murrells Inlet, and inland to Carolina Forest and Conway. Most people say Myrtle Beach for this whole stretch of coast, but the city of Myrtle Beach is only one part of it.") +
      OVERVIEW.html +
      h.p("Myrtle Beach, North Myrtle Beach, Surfside Beach and Conway are cities and towns. Carolina Forest, Forestbrook and Murrells Inlet are areas outside any town. The other names are neighborhoods: Barefoot Resort is not a hotel, The Farm is not a farm, and Plantation is only part of a name.") +
      h.p(`A public beach access is a public path to the beach. Some have parking and some do not. A high-risk flood zone is land that ${h.ext(FEMA, "FEMA's flood map")} marks as likely to flood. With a mortgage, your lender will almost always require flood insurance on a home in one. A cash buyer can choose.`) +
      h.p(`To choose a town before a neighborhood, read ${h.a("/buyers/relocating/which-town/", "which town near Myrtle Beach fits you")}.`) },

    { h2: "What does a home here cost each year, besides the mortgage?", toc: "Yearly cost", id: "yearly-cost", html:
      h.p("Besides the mortgage, a house in these three neighborhoods costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance.") +
      compareCards(D.yearly_cost.rows.map((r) => ({ name: r.name, cells: r.cells })), COST_COLS,
        { caption: "What a house you live in costs each year, besides the mortgage", nameLabel: "House", css: css() }) +
      h.p("The HOA fee covers what the neighborhood shares. For a house, it usually includes the common areas, and often trash pickup and a pool. A condo fee usually also includes the building's insurance, water and sewer.") +
      h.p(`The tax is for a home you live in, and in North Myrtle Beach the figure includes the city's share. A home you rent out pays a higher rate.`) +
      h.p(`When a home sells, the county ${h.ext(SC_TAX, "values it again")} at what the home is worth, and the new value is first taxed the next year. In an ordinary sale, that is usually close to the price paid.`) +
      h.p(`About 400 properties in Cherry Grove also pay the city about $1,700 a year, on the tax bill, for ${h.ext(CG_CANALS, "dredging the canals")}. The city's bond for that work is scheduled to be paid off in April 2028. Only those properties pay it, so the totals above do not count it.`) +
      h.p(`In The Farm and most of Tidewater Plantation, flood insurance is not required, and in The Farm it costs about $600 a year if you choose it. Homeowners insurance comes on top of all this. Our guide to ${h.a("/buyers/coastal-insurance/", "insurance near the coast")} shows what it costs.`) },

    { h2: "What is it like to live here all year?", toc: "Living here all year", id: "all-year", html:
      h.p("Life here goes on all year. In our experience, nothing closes in the off-season except tourist attractions and water parks. Rush hour adds 5 to 10 minutes to a drive. The highways we use, a few miles inland, avoid the stop lights on the main road along the coast.") +
      h.p("The drive times on this page are with no traffic, so allow more time in summer.") +
      h.p("Myrtle Beach International Airport is about 10 minutes from The Market Common and about 20 minutes from The Farm's entrance. From Cherry Grove and Tidewater Plantation, the drive is about 45 minutes.") +
      h.p(`Hurricanes can reach this coast. Our ${h.a("/buyers/relocating/hurricanes/", "guide to hurricanes near Myrtle Beach")} shows how to get ready.`) },

    { h2: "What are the best neighborhoods in the city of Myrtle Beach?", toc: "Myrtle Beach", id: "myrtle-beach", html:
      h.p("Pine Lakes, Grande Dunes and The Market Common are the neighborhoods on this page inside the city of Myrtle Beach. Each is about 5 to 10 minutes by car from a public beach access.") +
      areaMap("Myrtle Beach neighborhoods", ["pine-lakes", "grande-dunes", "market-common"], "Map of Pine Lakes, Grande Dunes and The Market Common in the city of Myrtle Beach, with the airport.") +
      table(["pine-lakes", "grande-dunes", "market-common"], "Three neighborhoods in the city of Myrtle Beach. Homes usually sell for: the middle price of homes sold in the last 12 months.") +
      nh("pine-lakes") +
      h.p("The Pine Lakes Country Club golf course is part of Pine Lakes. The prices in the table are for two parts of Pine Lakes, outlined in the picture below. Grand Strand Medical Center is about 8 minutes away by car, and none of these homes is in a high-risk flood zone.") +
      PINE +
      h.p("The trade-off is the price. Only about 17 homes sold here in the last 12 months, so prices vary. Homes for sale on the older streets near the club are listed with no HOA fee.") +
      nh("grande-dunes") +
      h.p(`Homes in Grande Dunes cost the most of any neighborhood on this page. The prices in the table are for three of its sections, not all of Grande Dunes. Builders sold new homes in these sections for about $530,000 to $1.1 million, less than homes sold by their owners.`) +
      h.p(`The trade-off is beach parking: the beach accesses closest to Grande Dunes have little or no parking. Only some of its sections ${h.a("/buyers/gated-communities/", "have a gate")}.`) +
      nh("market-common") +
      h.p("The Market Common is the closest of the three to the beach, about 5 minutes by car, and it is next to the airport. A grocery store is about 4 minutes away. Most homes for sale here are townhomes.") +
      MARKET +
      h.p(`The trade-off is the HOA fee on a townhome, the higher fee in the table. A few homes here are in a high-risk flood zone, so check the one you like. Our ${h.a("/submarkets/myrtle-beach/", "guide to Myrtle Beach")} covers the rest of the city.`) },

    { h2: "What are the best neighborhoods in Carolina Forest and near Conway?", toc: "Carolina Forest", id: "carolina-forest", html: (bg) =>
      h.p("Carolina Forest, Forestbrook and Wild Wing Plantation are inland, about 10 to 20 minutes from the beach by car. Almost none of their homes is in a high-risk flood zone.") +
      areaMap("Carolina Forest neighborhoods", ["the-farm", "berkshire-forest", "plantation-lakes", "waterbridge", "forestbrook-estates", "wild-wing"], "Map of the six inland neighborhoods in Carolina Forest, Forestbrook and near Conway.", ["Carolina Forest", "Forestbrook"]) +
      table(["the-farm", "berkshire-forest", "plantation-lakes", "waterbridge", "forestbrook-estates", "wild-wing"], "Six inland neighborhoods in Carolina Forest, Forestbrook and near Conway") +
      nh("the-farm") +
      h.p(`The Farm has ${h.ext(FARM_HOA, "two pools")}, a clubhouse with a fitness room, an activity center, a basketball court and a playground. Its HOA fee also includes cable TV and trash pickup. Every home in The Farm is outside the high-risk flood zones.`) +
      FARM_POOL +
      h.p(`The Farm also has townhomes and condos, which sell for about $230,000 to $240,000. They pay a second HOA fee on top of The Farm's. Our ${h.a(FARM, "guide to The Farm at Carolina Forest")} covers the homes, the HOA and the rules.`) +
      nh("berkshire-forest") +
      h.p("Berkshire Forest is about 15 minutes from the beach by car, with a Publix grocery store about 7 minutes away. None of its homes is in a high-risk flood zone. The trade-off is the drive to the beach, which takes longer in summer traffic.") +
      nh("plantation-lakes") +
      h.p("Plantation Lakes costs the most of the Carolina Forest neighborhoods on this page. None of its homes is in a high-risk flood zone. The trade-off is the beach: the nearest beach access has no parking.") +
      nh("waterbridge") +
      h.p("Builders sold new homes in Waterbridge in the last 12 months, for about $555,000. That is less than homes sold by their owners there.") +
      h.p("The trade-off is the beach, 15 to 20 minutes away. The nearest beach access has no parking, and one with a small lot is about the same drive. A few homes in Waterbridge are in a high-risk flood zone.") +
      nh("forestbrook-estates") +
      h.p("Forestbrook Estates has one of the lowest HOA fees on this page, under $90 a month for a house. A Food Lion grocery store is about 6 minutes away. The trade-off is the beach, about 15 minutes away by car.") +
      nh("wild-wing") +
      h.p("Conway Medical Center is about 8 minutes from Wild Wing Plantation, and an ALDI grocery store is about 6 minutes away. Builders sold new homes here for about $430,000, less than homes sold by their owners.") +
      h.p(`The trade-off is the beach. At about 20 minutes by car, Wild Wing Plantation is the farthest from the beach of the neighborhoods on this page. Our guides to ${h.a("/submarkets/carolina-forest/", "Carolina Forest")} and ${h.a("/submarkets/conway/", "Conway")} cover the wider areas.`) +
      h.cta("Not sure which of these fits you? We will send three neighborhoods.",
        "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each. The form asks for your name, email and phone, and there is no charge for the list.",
        "Get three neighborhoods", OFFER, bg) },

    { h2: "What are the best neighborhoods in North Myrtle Beach?", toc: "North Myrtle Beach", id: "north-myrtle-beach", html:
      h.p("Cherry Grove, Tidewater Plantation and Barefoot Resort are the North Myrtle Beach neighborhoods on this page. Cherry Grove is a short walk from the beach, and the other two have golf.") +
      areaMap("North Myrtle Beach neighborhoods", ["cherry-grove", "tidewater", "barefoot-resort"], "Map of Cherry Grove, Tidewater Plantation and Barefoot Resort in North Myrtle Beach.", ["North Myrtle Beach"]) +
      table(["cherry-grove", "tidewater", "barefoot-resort"], "Three neighborhoods in North Myrtle Beach") +
      nh("cherry-grove") +
      h.p(`Cherry Grove is the closest to the beach of any neighborhood on this page. From the middle of Cherry Grove, a ${h.ext(BEACH, "public beach access")} is about 0.1 mile away. That access has no parking, and the closest one with paid street parking is 0.3 mile away.`) +
      CHERRY +
      h.p("More than half of the homes for sale in Cherry Grove are listed with no HOA fee. The trade-off is flood risk. Almost every home in Cherry Grove is in a high-risk flood zone, so flood insurance is part of the yearly cost.") +
      nh("tidewater") +
      h.p("Tidewater Plantation has a guard house at its gate, where visitors check in, and a golf course, Tidewater Golf Club. McLeod Health Seacoast hospital is about 10 minutes away by car.") +
      h.p("The trade-off is the HOA fee, one of the higher ones on this page for a house. A few homes in Tidewater Plantation are in a high-risk flood zone.") +
      nh("barefoot-resort") +
      h.p("Barefoot Resort has four golf courses, and it is about 6 minutes from the beach by car. The Barefoot Resort homes in the table are mostly condos. Its houses are in other sections, each with its own name.") +
      h.p(`The trade-off is the HOA fee on a condo, several times the fee on most houses on this page. Eight neighborhoods inside Barefoot Resort have a gate. Our ${h.a("/submarkets/north-myrtle-beach/", "guide to North Myrtle Beach")} shows what each part of town is like.`) },

    { h2: "What are the best neighborhoods in Surfside Beach and Murrells Inlet?", toc: "Surfside Beach and Murrells Inlet", id: "surfside-beach-murrells-inlet", html:
      h.p("In Surfside Beach, the streets on the ocean side of town are a short walk from the beach. The Deerfield Plantation area and Prince Creek cost less and are a short drive away.") +
      areaMap("Surfside Beach and Murrells Inlet neighborhoods", ["surfside-beach", "deerfield", "prince-creek"], "Map of the ocean side of Surfside Beach, the Deerfield Plantation area and Prince Creek in Murrells Inlet.") +
      table(["surfside-beach", "deerfield", "prince-creek"], "Three neighborhoods in Surfside Beach and Murrells Inlet") +
      nh("surfside-beach") +
      h.p("The ocean side of Surfside Beach is the part of town between US 17 Business and the beach. From the middle of it, a public beach access with a pay lot is about 0.4 mile away. A Piggly Wiggly grocery store is about 3 minutes away by car.") +
      SURFSIDE +
      h.p("Most homes for sale here are listed with no HOA fee. The trade-off is flood risk near the water. About 1 in 4 homes here is in a high-risk flood zone, so check the exact home before you make an offer.") +
      nh("deerfield") +
      h.p("The Deerfield Plantation area, near Surfside Beach, has the lowest prices on this page for a home under 10 minutes from the beach. Its HOA fees are low too, and none of its homes is in a high-risk flood zone.") +
      h.p("The trade-off is beach parking. The closest beach access has parking for golf carts only, and the next one, with a pay lot, is about 8 minutes away by car.") +
      nh("prince-creek") +
      h.p("Prince Creek, in Murrells Inlet, is about 6 minutes by car from Tidelands Waccamaw Community Hospital and 2 minutes from a Publix. A free beach parking lot is about 10 minutes away. Builders sold new townhomes here for $300,000 to $356,000.") +
      h.p(`The trade-off is the small number of sales by owners, only 10 in the sections in the table, so prices vary. Our guides to ${h.a("/submarkets/surfside-beach/", "Surfside Beach")} and ${h.a("/submarkets/murrells-inlet/", "Murrells Inlet")} cover both towns.`) },

    { h2: "If you are 55 or older, which 55+ communities should you look at?", toc: "55+ communities", id: "55-plus", html:
      h.p("Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are the four 55+ communities we cover. Each has a pool and a clubhouse.") +
      h.p("A 55+ community is for homes where at least one person is 55 or older. Federal rules require that in at least 80 percent of its occupied homes, and Myrtle Trace requires it in every home. If no one in your home is 55 yet, skip this part.") +
      compareCards(D.fifty_five_plus.rows.map((r) => ({ name: r.name, href: r.href, cells: r.cells })), COLS,
        { caption: "Four 55+ communities near Myrtle Beach", nameLabel: "Community", css: css() }) +
      h.p(`Our ${h.a(P55, "guide to 55+ communities near Myrtle Beach")} compares the four side by side, with what the HOA fee includes.`) },

    { h2: "What should you check before you choose a neighborhood?", toc: "Before you choose", html: (bg) =>
      h.p("Four things can differ from one home to the next in the same neighborhood: the flood zone, the HOA fee, the rules and beach parking.") +
      atAGlance([
        { icon: "flood", label: "The flood zone", text: "On a mortgage from a federally regulated or federally backed lender, a home in a high-risk flood zone needs flood insurance. Cherry Grove and parts of Surfside Beach are in one." },
        { icon: "dollar", label: "The HOA fee", text: "A condo or townhome often has a higher fee than a house nearby, because its fee also includes the building's insurance." },
        { icon: "key", label: "The rules", text: "Read the HOA rules on boats, golf carts, renting and pools before you buy." },
        { icon: "beach", label: "Beach parking", text: "Some of the closest beach accesses have no parking. Drive from the home to the beach before you buy." },
        { icon: "town", label: "Two blocks around", text: "Different kinds of homes are often built within a few blocks of each other here. Walk two blocks around the home." },
      ], { bg, min: "15rem" }) +
      h.p(`Public schools are assigned by address. Check the exact address with the ${h.ext(SCHOOLS, "Horry County Schools zone lookup")}, and see our page on ${h.a("/buyers/relocating/schools/", "schools near Myrtle Beach")}. Horry County is the county that holds Myrtle Beach and every neighborhood on this page.`) +
      story([
        "<strong>Example:</strong> Lisa wants to walk to the beach every morning. She likes a house in Cherry Grove, a short walk from a beach access.",
        "Her Chapter3 agent checks the flood map before she makes an offer. The house is in a high-risk flood zone, so her lender will require flood insurance.",
        "The agent gets her an insurance quote that week. Lisa knows the full yearly cost of the house before she makes her offer.",
      ], "", bg,
      `An agent at Chapter3 can get you an insurance quote for the home you like before you make an offer.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "What are the best neighborhoods in Myrtle Beach?", a: "The best neighborhood in Myrtle Beach depends on what you want nearby. Cherry Grove and the ocean side of Surfside Beach are a short walk from the beach. The Farm and the Deerfield Plantation area cost less and are about 10 minutes from the beach by car. Pine Lakes, Tidewater Plantation and Barefoot Resort have golf." },
    { q: "What are the best areas to live in near Myrtle Beach?", a: "North Myrtle Beach, the city of Myrtle Beach, Surfside Beach and Murrells Inlet are along the coast, closest to the beach. Carolina Forest and Conway are inland. The inland neighborhoods on this page are 10 to 20 minutes from the beach by car. Almost none of their homes is in a high-risk flood zone." },
    { q: "How much does it cost each year to own a home in Myrtle Beach?", a: "Besides the mortgage, a house in the three neighborhoods we priced costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance. A house in The Farm costs about $2,600 a year. A house in Cherry Grove costs about $4,400, mostly property tax and flood insurance." },
    { q: "What are the best neighborhoods in North Myrtle Beach?", a: "Cherry Grove is the closest to the beach, a short walk from a public beach access. Almost every home there is in a high-risk flood zone. Tidewater Plantation has a guard house at its gate and a golf course. Barefoot Resort has four golf courses." },
    { q: "What are the best neighborhoods in Surfside Beach?", a: "The streets on the ocean side of Surfside Beach are a short walk from the beach, and houses there usually sell for about $705,000. The Deerfield Plantation area, near the town, costs less. Its homes usually sell for about $355,000, and the beach is about 8 minutes away by car." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "Carolina Forest is farther from the beach, and it has almost no homes in a high-risk flood zone. Its neighborhoods on this page are about 10 to 20 minutes from the beach by car. The neighborhoods in the city of Myrtle Beach on this page are about 5 to 10 minutes away." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach are listed with no HOA fee, and so are more than half in Cherry Grove. Homes for sale on the older streets near Pine Lakes Country Club are listed with no HOA fee too." },
    { q: "Which neighborhoods near Myrtle Beach are closest to a hospital?", a: "Prince Creek in Murrells Inlet is about 6 minutes by car from Tidelands Waccamaw Community Hospital. Pine Lakes is about 8 minutes from Grand Strand Medical Center, and Wild Wing Plantation is about 8 minutes from Conway Medical Center." },
  ],
  sources: [
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood maps", href: FEMA },
    { name: "FEMA flood policies", href: FEMA_POLICIES },
    { name: "S.C. property tax law", href: SC_TAX },
    { name: "S.C. beach access list", href: BEACH },
    { name: "The Farm HOA", href: FARM_HOA },
  ],
  sourcesNote: "Prices are the middle sale price over the last 12 months, or the range where few homes sold. HOA fees come from recent home listings, except The Farm's; the no-fee counts are MLS areas 11a Cherry Grove and 29a and 29b Surfside Beach east of US 17. Taxes come from 2026 county tax bills.",
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Tell us what you want nearby. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
};
