/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what the reader wants nearby.
 *
 * Batch 2026-10-b, page 1. Version 10, 2026-10-14 (round 10: review/ROUND-10.md, OWNER-EYE-9). Deerfield gains
 * the Deer Track golf resort, the 2006 sale, the court case and the new houses on the old courses;
 * Forestbrook Estates gains its county record (planned as Kingsland, 500 houses). A plain trade-off line
 * in Tidewater, Waterbridge, The Farm, Plantation Lakes, Berkshire Forest, Forestbrook Estates and The
 * Market Common. Tidewater's course history lives on the gated page now (link). The canal fee is one
 * line under the yearly-cost table; the example is now Megan's second-home tax rate. Rows 224 to 231,
 * pending verification (round 10).
 * Version 9, 2026-10-14 (round 9: review/OWNER-EYE-8-best-neighborhoods.md). The five
 * thin entries (Waterbridge, Plantation Lakes, Berkshire Forest, Forestbrook Estates, Prince Creek) now carry
 * who built them and when, from the county deed index, and what only they have. The flood line is kept in
 * Cherry Grove and Surfside only, with one sentence after the table; the park-distance line in Cherry Grove
 * and Market Common only. No "on this page" comparisons. The first screen leads with the beach, golf and
 * pools; the short answer and the first FAQ name places. The "all year" section and the general HOA-fee
 * paragraph are cut. The example is now the Cherry Grove canal fee, in the yearly cost. New rows 215 to 223,
 * pending verification (round 9).
 * Version 8, 2026-10-14 (round 8: review/ROUND-8.md, the owner: "extremly
 * repetitive writing", "surface level"). Each of the 15 entries now gives the place's own history and
 * features: who built it and when, the golf course designer, the water, a landmark (street-name themes
 * in three entries only: Barefoot, Wild Wing, The Farm). One "At a glance" line per entry holds the
 * homes, the price and the fee; nothing else repeats from entry to entry. The page says what we check,
 * never what the reader should check. New facts: neighborhoods-facts.md rows 201 to 214 (round 8,
 * verified or verified with corrected wording; the verifier's wording is in the copy). ItemList
 * JSON-LD for the 15 entries.
 * Version 7, 2026-10-14 (round 7: review/ROUND-7.md, the owner's first read:
 * "too jumpy and alot about price instead of the amenities ... a headline for that community and a few
 * paragraphs and photos and then the next"). The shape is now CRAFT 3's list of places (reports/Page
 * shapes, 1b): hero and short answer, a boxed first offer (website-patches/mkpage-offer-box.patch,
 * heroCta.title), the numbered map, a short "best for" index, then one numbered entry per place in the
 * map's order (H2 headline, a photo, the homes, the amenities, what is close by, the trade-off in one
 * line, the price and fee in one line), then one table of all 15, the yearly cost, living here all year,
 * a 55+ pointer, the checks and the example, the FAQ. The want cards, the area tables and the area maps
 * are gone. Amenity facts: neighborhoods-facts.md rows 183 to 199 (round 7, pending verification).
 * Earlier rounds: version 3 (round 3: ROUND-3.md and OWNER-EYE-best-neighborhoods.md), version 2.
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
 * Example (round 4): retell first. "Megan wants a cheaper house near the beach to drive to every
 * morning, the closest access to the Deerfield house has parking for golf carts only, so her agent
 * drives it with her and shows her the next access, with a pay lot about 8 minutes away (row 129 and
 * the Deerfield trade-off row)." Child sentence: "You can only park a golf cart at that beach." A
 * labelled example, not a story from stories.json; the agent acts on the problem, and it ends with
 * what Megan can now do, not with an offer.
 * Overview map (round 4): names with a leader line where they have no room (tools/area-map.js
 * spec.leaders), "MYRTLE BEACH" on the ocean with a line into the city, The Farm named first.
 */
const fs = require("fs"), path = require("path");
const { h, compareCards, glance, story, BB } = require("./_kit.js");
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
/* One aerial per entry, in the order of the list. The Surfside Beach view has crops, so it is the page's
   share image. Ten are this round's NAIP 2023 views, labelled from county data (data/photos.json names
   the points); Cherry Grove, Pine Lakes, The Market Common and Surfside Beach are NOAA 2026 views; The
   Farm's is the Farm page's file. */
const AER = (name, caption, alt) => ph.aerial(name, caption, { alt, closeUp: true });
const PHOTO = {
  "tidewater": AER("tidewater-from-above", "Tidewater Plantation from above: the association's pool, and the golf course around the homes.",
    "Tidewater Plantation in North Myrtle Beach from above: houses under trees around a pool, labelled, with golf fairways and greens on both sides"),
  "cherry-grove": AER("cherry-grove-canals-from-above", "Cherry Grove from the air: the beach, the canals and the salt marsh.",
    "Cherry Grove in North Myrtle Beach from the air: the beach and part of a fishing pier at the left, rows of houses on canals labelled Canals, and a wide salt marsh with winding creeks labelled Salt marsh"),
  "barefoot-resort": AER("barefoot-resort-from-above", "Barefoot Resort from above: the North Tower pool beside the Intracoastal Waterway, with townhomes and condos around it.",
    "Barefoot Resort from above: a large curved pool labelled North Tower pool between condo towers and townhomes, with boats at a marina on the Intracoastal Waterway below"),
  "wild-wing": AER("wild-wing-from-above", "Wild Wing Plantation from above: the association's pool complex beside a lake, and the golf course.",
    "Wild Wing Plantation from above: a pool complex beside a lake, labelled, courts and a playground, golf course land, labelled, and streets of houses"),
  "waterbridge": AER("waterbridge-from-above", "Waterbridge from above: the pools and clubhouse inside a circle of streets.",
    "Waterbridge from above: a pool complex and clubhouse, labelled, inside a circle drive, with streets of houses all around"),
  "grande-dunes": AER("grande-dunes-from-above", "Palermo and Villa Venezia in Grande Dunes from above, with the Intracoastal Waterway at the bottom right.",
    "Palermo and Villa Venezia in Grande Dunes from above, each labelled: large houses with pools around ponds and golf fairways, and the Intracoastal Waterway at the bottom right"),
  "the-farm": AER("the-farm-pool-from-above-2026", "The large pool and the activity center in The Farm at Carolina Forest, from above.", undefined),
  "plantation-lakes": AER("plantation-lakes-from-above", "Plantation Lakes from above: the pools and a dock on a point in the lake, with courts across the road.",
    "Plantation Lakes from above: two pools on a point in a lake, labelled, a small dock, courts across the road and houses along the shore"),
  "berkshire-forest": AER("berkshire-forest-from-above", "Berkshire Forest from above: the pools beside a lake, with a tennis court and streets of houses.",
    "Berkshire Forest from above: a pool complex beside a lake, labelled, a tennis court, ponds and streets of houses"),
  "pine-lakes": AER("pine-lakes-from-above", "Pine Lakes from the air: The Preserve and Pine Lakes Estates, outlined in orange, beside the Pine Lakes Country Club golf course.",
    "Pine Lakes in Myrtle Beach from the air: curving streets of houses around ponds, outlined in orange, beside a golf course with green fairways and sand traps, and the beach at the far right"),
  "forestbrook-estates": AER("forestbrook-estates-from-above", "Forestbrook Estates from above: streets of houses around ponds, and the pool.",
    "Forestbrook Estates from above: rows of houses around ponds, a pool labelled at the bottom, and cleared land at the left"),
  "market-common": AER("market-common-from-above", "The Market Common from the air: its homes, outlined in orange, The Reserve at the right, shops below and the airport at the bottom.",
    "The Market Common in Myrtle Beach from the air: townhomes and houses outlined in orange beside a lake, a second outlined group labelled The Reserve at Market Common at the right, shops below them, and the airport runway at the bottom"),
  "deerfield": AER("deerfield-from-above", "The Deerfield Plantation area from above: streets of houses between the open bands of the old North Course.",
    "The Deerfield Plantation area from above: streets of houses under trees, with two long open grass bands labelled Old North Course land and a pond labelled Old course pond"),
  "surfside-beach": ph.aerial("surfside-beach-from-above", "The ocean side of Surfside Beach from the air: streets of homes from US 17 Business, at the left, to the beach.",
    { alt: "Surfside Beach from the air: streets of houses under trees from a highway at the left to a wide beach and the ocean at the right, with a fishing pier and a public beach access marked" }),
  "prince-creek": AER("prince-creek-from-above", "Prince Creek from above: streets of houses beside the TPC Myrtle Beach golf course.",
    "Prince Creek from above: curving streets of houses and two ponds, with the TPC Myrtle Beach golf course, labelled, at the left"),
};

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
const A = (id) => `#${id}`;
const link = (id) => A(id);

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
    if (!re.test(svg)) continue;
    svg = svg.replace(re, "$1");
    m.boxes = m.boxes.filter((b) => !(b.kind === "label" && b.owner === "lm" + (num - 1)));
  }
  for (const sh of o.stripShields || []) {
    const num = sh.split(" ")[1].split("#")[0];
    const re = new RegExp(`<g transform="translate\\([^)]*\\)"><g class="k"><rect [^>]*/><text class="r"[^>]*>${num}</text></g></g>`);
    if (!re.test(svg)) continue;
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
    /* Drawn the tool's way: a group at the marker's centre, so on a wide screen, where the tool shrinks each
       marker and its label toward that centre (class k), the name stays beside its own marker. */
    const { lines, b } = best, x = (b.x0 + 2 - cx).toFixed(1), y = (b.y0 + 14 - cy).toFixed(1);
    m.boxes.push(Object.assign({ kind: "label", owner: "lm" + (p.num - 1) }, b));
    out.push(`<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)})"><g class="k"><text class="l" x="${x}" y="${y}">`
      + lines.map((l, i) => `<tspan x="${x}"${i ? ` dy="${LH}"` : ""}>${l}</tspan>`).join("") + `</text></g></g>`);
  }
  const i = svg.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so names cannot be added");
  res.html = svg.slice(0, i) + out.join("") + svg.slice(i);
  if (missed.length) console.warn(`best-neighborhoods: no room on the overview for the names of ${missed.join(", ")}; the key names them`);
  return res;
}

/* The overview: the fifteen, north to south, each name linked to its own part of the page, and the key in
   two columns on a phone too, so it is right under the map. */
const OVERVIEW = labelDots(kit.placesMap("Neighborhoods", D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: link(n.id), first: n.id === "the-farm" })), {
  caption: "Map of the 15 neighborhoods on this page, numbered from North Myrtle Beach at the top right to Murrells Inlet at the bottom left.",
  key: true,
  leaders: { places: true, towns: ["Myrtle Beach"] },
}), {
  "Barefoot Resort": [["Barefoot"]], "Waterbridge": [["Waterbridge"]], "The Farm at Carolina Forest": [["The Farm"]],
  "Plantation Lakes": [["Plantation Lakes"], ["Plantation", "Lakes"]], "Berkshire Forest": [["Berkshire"]],
  "Forestbrook Estates": [["Forestbrook"]], "Prince Creek": [["Prince Creek"], ["Prince", "Creek"]],
  [N["grande-dunes"].name]: [["Grande Dunes"], ["Grande", "Dunes"]],
}, { strip: [6, 10], stripShields: ["SC 31#0"] });
/* The city of Myrtle Beach, a narrow strip along the coast here, is named on the ocean with a line into
   the city (leaders.towns, round 4). */
/* The picker's places sit side by side when they fit, so the ten boxes take less of a phone screen; each
   link keeps its full tap height. */
const KEY_CSS = "<style>.c3-map-key{columns:2 8rem!important;column-gap:1rem!important;margin-left:1.4rem!important}.c3-map-key li{font-size:1rem}"
  + ".c3-want{gap:.75rem!important;margin:1rem 0 1.4rem!important}.c3-want>li{padding:.8rem 1rem .45rem!important}.c3-want .w{margin-bottom:.2rem!important}"
  + ".c3-want ul{display:flex;flex-wrap:wrap;column-gap:1.25rem}.c3-want .note{margin:0 0 .35rem!important}"
  /* The table cards on a phone, a little tighter (the tap height of each name link is kept). */
  + "@media (max-width:39.999em){.c3-cc tbody tr{padding:.3rem 0 .45rem!important;margin:0 0 .6rem!important}.c3-cc td{padding:.1rem 1rem!important;line-height:1.4}.c3-cc tbody th{padding-bottom:0!important}}</style>";


/* ---------------------------------------------------------------------------- */
/* Tables                                                                         */

/* Columns: what homes usually sell for, the HOA fee, the drive to a beach access with no traffic. */
const COLS = [
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "fee", label: "HOA fee a month" },
  { key: "beach", label: "To the beach" },
];
let cssDone = false;
const css = () => { const first = !cssDone; cssDone = true; return first; };
const COST_COLS = [
  { key: "hoa", label: "HOA fee a year" },
  { key: "tax", label: "Property tax a year", num: true },
  { key: "flood", label: "Flood insurance a year" },
  { key: "total", label: "In all, a year", num: true },
];

/* ---------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------- */
/* The 15 entries (owner, 2026-10-14: "a headline for that community and a few paragraphs and photos and   */
/* then the next"). Life first: the homes, the amenities, what is close by and a normal day; then the     */
/* trade-off in one line and the price and fee in one line. Every fact is a ledger row (header comment).  */
/* One facts line per entry (round 8: "say each thing once"): the homes for sale, the price and the fee.
   Everything else is the place's own: its history, what only it has, and what an owner gives up there. */
const FACTS = (t) => h.p(`<strong>At a glance:</strong> ${t}`);
const ENTRY = (num, id, headline, paras, facts, after) => ({
  h2: `${num}. ${headline}`, toc: N[id].name, id,
  html: (bg) => h.p(paras[0]) + PHOTO[id] + paras.slice(1).map((t) => h.p(t)).join("") + FACTS(facts) + (after ? after(bg) : ""),
});
/* The offer once in the middle of the list, in the same words as the first and the last. */
const MID_CTA = (bg) => h.cta("Not sure which of these fits you? We will send three neighborhoods.",
  "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each. There is no charge.",
  "Get three neighborhoods", OFFER, bg);
const ENTRIES = [
  ENTRY(1, "tidewater", "Tidewater Plantation: golf between the waterway and the inlet in North Myrtle Beach", [
    `Tidewater Plantation is between the Intracoastal Waterway and Cherry Grove Inlet, behind a gatehouse on Little River Neck Road. Tidewater Golf Club, a public course, winds between the homes, and our ${h.a("/buyers/gated-communities/", "guide to gated communities near Myrtle Beach")} tells how it was built.`,
    "Most of its homes are houses, many along the fairways, with a few condo buildings. Owners share a clubhouse, a fitness center, courts for tennis, pickleball and bocce, and an oceanfront beach cabana with parking at Cherry Grove.",
    "A condo or villa here pays about $780 to $800 a month in HOA fees.",
  ], "houses for sale were mostly built around 2000 and have about 2,700 square feet. Houses usually sell for about $625,000, and the HOA fee is about $230 a month."),

  ENTRY(2, "cherry-grove", "Cherry Grove: beach streets, canals and a 1950s pier in North Myrtle Beach", [
    `Cherry Grove Beach was made in 1950, when an inlet was filled to join Futch Beach to the Nixon family's Cherry Grove land. In 1968 it joined Ocean Drive, Crescent Beach and Windy Hill to form the city of North Myrtle Beach. Later, channels were dug into the marsh behind the beach, and those canals now run behind rows of houses.`,
    "Cherry Grove Pier was built in the 1950s, and in 1964 a 1,780-pound tiger shark was landed from it, a world record at the time. From a home near the middle of the neighborhood, a public beach access is about 0.1 mile away, the closest of the fifteen.",
    `Russell Burgess Coastal Preserve, with a walkway and a pier, is a few blocks away. Almost every home here is in a high-risk flood zone, land that ${h.ext(FEMA, "FEMA's flood map")} marks as likely to flood. With a mortgage, flood insurance comes with the house.`,
  ], "houses for sale were mostly built from the 1960s to the 1980s and have about 1,900 square feet. Houses usually sell for about $695,000, and most homes for sale have no HOA fee."),

  ENTRY(3, "barefoot-resort", "Barefoot Resort: four golf courses that opened on one day in North Myrtle Beach", [
    "Barefoot Resort's four golf courses, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman, all opened on the same spring day in 2000. The residential association's rules were recorded that day too, and neighborhoods grew up around the courses on about 2,300 acres.",
    "Many streets carry seashell names, from Junonia Drive to Moonshell Drive. Owners in the residential association have a beach cabana on the ocean with owner parking, a kitchen, showers and an elevator. In spring and summer, a shuttle runs to a public beach access. The North Tower pool, for owners in the Barefoot associations, is beside the Intracoastal Waterway.",
    "Residents of ten named communities share the Residents' Club, with a pool, a weight room, and tennis and pickleball courts. We check which association a home belongs to before you offer, because each association has its own pools and clubs. Barefoot Landing's shops and restaurants are across the swing bridge.",
  ], "homes for sale are mostly condos, a mix of older ones and new ones, and the new ones are larger. They usually sell for about $430,000, and the HOA fee is about $680 a month for a condo."),

  ENTRY(4, "wild-wing", "Wild Wing Plantation: a 27-hole golf club and streets named for water birds near Conway", [
    "Wild Wing's Avocet course, designed by Jeff Brauer and Larry Nelson, opened in 1993 and has new greens after a recent renovation. The club also has the nine-hole Hummingbird course.",
    "Many streets are named for water birds: Wood Stork Drive, Whooping Crane Drive, Black Skimmer Drive, Limpkin Drive. The association's amenity area, beside a lake, has a pool complex, courts for tennis or pickleball, a basketball court and a playground.",
    "Conway Medical Center and an ALDI grocery store are a short drive away. Owners drive about 20 minutes to reach the beach.",
  ], "houses for sale were mostly built since 2014 and have about 2,900 square feet. Houses usually sell for about $600,000, and the HOA fee is about $135 a month."),

  ENTRY(5, "waterbridge", "Waterbridge: 80 acres of lakes, a boat launch and a big pool in Carolina Forest", [
    "Waterbridge was started by South Carolina Coastal Development, which sold open space and common areas to the homeowners association in 2010. The association looks after the lakes. Builders have added sections since. Over 80 acres of lakes and natural areas wind through it, with small pocket parks along the way.",
    "Owners can launch a kayak or other non-motorized boat on the lakes from a boat launch with a floating dock, and walking paths cross the water on bridges.",
    "The pool complex and the clubhouse are inside a circle of streets. The clubhouse has a fitness center open around the clock. Courts for tennis, pickleball, basketball and volleyball are a quarter mile away, on Fiddlehead Way. A Food Lion and McLeod Health Carolina Forest's emergency department are close by.",
    "Builders are still selling new houses in its newest sections, so some streets still have building work.",
  ], "houses for sale were mostly built in the last few years and have about 3,100 square feet. Houses usually sell for about $630,000, and the HOA fee is about $150 a month."),

  ENTRY(6, "grande-dunes", "Grande Dunes: gated sections between a beach club and a marina in Myrtle Beach", [
    `Grande Dunes has an oceanfront club and a marina on the Intracoastal Waterway. Calais, Palermo and Villa Venezia are three of its sections with ${h.a("/buyers/gated-communities/", "a gate at the entrance")}.`,
    "Its Resort Club course is a Roger Rulewich design on a bluff over the waterway. The National Golf Course Owners Association named it course of the year in 2009. Nick Price and Craig Schreiner designed the Members Club course. On the ocean side, the Ocean Club is a beach club for residents, with dining. The clubs offer memberships, and we find out which homes include one.",
    "On the waterway side, the public can use the marina, and the two-mile Waterway Trail is open from sunrise to sunset. Across Grande Dunes, most houses for sale are just built or still being built. The beach accesses closest to it have little or no parking.",
  ], "homes in the three gated sections usually sell for about $1.5 million, and the HOA fee is about $200 to $375 a month."),

  ENTRY(7, "the-farm", "The Farm at Carolina Forest: two pools and streets named for the farm", [
    "D.R. Horton recorded The Farm's HOA rules in 2004 and added land in stages after that. In 2019 it gave up its right to appoint most of the HOA board. The farm theme runs through many of the street names: Scarecrow Way, Haystack Way, Pumpkin Patch Lane, Wheatfield Drive.",
    `It has ${h.ext(FARM_HOA, "two pools")}, a fitness room, an activity center, a basketball court and a playground, and the HOA fee includes cable TV and trash pickup. Our ${h.a(FARM, "guide to The Farm at Carolina Forest")} covers the homes, the HOA and the rules.`,
    "Townhomes and condos at The Farm cost less, but they pay a second HOA fee on top of The Farm's.",
  ], "houses for sale were mostly built in the 2000s and 2010s and have about 2,200 square feet. Houses usually sell for about $350,000, and the HOA fee for a house is $107 a month."),

  ENTRY(8, "plantation-lakes", "Plantation Lakes: a large lake and two pools on a point in Carolina Forest", [
    "Plantation Lakes is built around a large lake, with about 15 miles of shoreline, off Carolina Bays Parkway. Its developer was American Mining Company, and the owners' association holds about 185 acres of common areas, deeded to it in 2007 and 2008.",
    "Many homes back onto the lake, and the amenity area has a dock. That amenity area is on a point in the lake, with two pools and a clubhouse with a gym. Tennis and basketball courts are across the road.",
    "Its nearest beach access has no parking, so owners drive on to one that does.",
  ], "houses for sale were mostly built in the 2000s and have about 3,400 square feet. Houses usually sell for about $740,000, and the HOA fee is about $125 a month.", MID_CTA),

  ENTRY(9, "berkshire-forest", "Berkshire Forest: a water slide and two pool areas in Carolina Forest", [
    "Centex Homes developed the first sections of Berkshire Forest, such as Crestwood, Sutton Place and Cambridge. Pulte Homes later added land from two neighboring developments, and the county now counts about 870 homes in Berkshire Forest.",
    "The first pool complex, with a water slide, is beside a lake, with tennis and basketball courts and a play area next to it. The expansion added a second amenity area with a pool and courts for tennis or pickleball.",
    "River Oaks Elementary School is at the edge of the neighborhood, on Augusta Plantation Drive. The beach is a 15-minute drive.",
  ], "houses for sale were mostly built in the 2000s and 2010s and have about 2,400 square feet. Houses usually sell for about $390,000, and the HOA fee is about $115 a month."),

  ENTRY(10, "pine-lakes", "Pine Lakes: homes beside the Granddaddy, Myrtle Beach's first golf course", [
    "Pine Lakes Country Club opened in 1927 as Ocean Forest Country Club, Myrtle Beach's first golf course, and took the name Pine Lakes in 1946. Robert White, a native of St. Andrews, Scotland, and the first president of the PGA of America, designed it. Its clubhouse is on the National Register of Historic Places, and Time-Life executives planned Sports Illustrated there in 1954.",
    "The Preserve at Pine Lakes and Pine Lakes Estates are two sections of houses beside the course.",
    "Homes for sale on the older streets near the club have no HOA fee. Few homes in the two sections come up for sale.",
  ], "houses for sale were mostly built since 2015 and have about 2,400 square feet. Homes usually sell for $540,000 to $670,000, and the HOA fee is about $95 a month for a house."),

  ENTRY(11, "forestbrook-estates", "Forestbrook Estates: houses around ponds, with a community garden", [
    "Forestbrook Estates was planned under the name Kingsland. The county rezoned the land in 2017, and Lennar began building soon after. All of the 500 houses the county approved are built, and townhomes stand beside them.",
    "The houses are built around ponds. On the same grounds as the pool is a community garden with garden plots, and owners drive golf carts on its streets.",
    "Rosewood Landing, a county boat ramp on the Intracoastal Waterway, is about 2 miles away. The neighborhood has ponds but no lake you can take a boat on.",
  ], "most of the few houses for sale here were built in the last few years and have about 2,300 square feet. Houses usually sell for about $395,000, and the HOA fee is under $90 a month."),

  ENTRY(12, "market-common", "The Market Common: a town center on the old Myrtle Beach Air Force Base", [
    "The Market Common is built on the old Myrtle Beach Air Force Base. The base began as an Army Air Corps field in World War II and closed in 1993. The base's land now holds The Market Common, a dozen parks, the airport and a golf course.",
    "Its houses and townhomes are beside a district of shops and offices. Grand Park, with picnic shelters, ball fields and a playground, is a few blocks from the nearest homes.",
    "A townhome here pays a high HOA fee, about $300 to $700 a month.",
  ], "townhomes for sale have about 1,700 square feet. Houses usually sell for about $540,000 and townhomes for about $398,000."),

  ENTRY(13, "deerfield", "Deerfield Plantation area: wooded streets around an old golf resort near Surfside Beach", [
    "The Deerfield Plantation area grew up around the Deer Track golf resort near Surfside Beach. Its older streets are wooded, and the association owns the lakes and canals that run between the homes.",
    "In 2006 two investors bought the golf course land. Homeowners sued to keep it a golf course. The courts found the land carried no such restriction, and the state Court of Appeals agreed in 2012.",
    "The old South Course is now a neighborhood of new houses. On the old North Course, building has only begun, so homes near it are beside a building site.",
    "The closest beach access has parking for golf carts only, so an owner with a golf cart can park right at the beach. By car, owners use the next access, which has a pay lot.",
  ], "most of the few houses for sale here were built in the 1970s and 1980s and have about 2,000 square feet. Homes usually sell for about $355,000, and the HOA fee is under $90 a month for a house."),

  ENTRY(14, "surfside-beach", "Surfside Beach, ocean side: beach streets on an old rice plantation", [
    "Surfside Beach began as part of a rice plantation called The Ark. In the 1920s George J. Holliday renamed it Floral Beach for his wife, Flora. The Hollidays built a pavilion, a general store and a few rental cottages for summer visitors. A fishing pier was built later.",
    "In 1952 new owners named it Surfside Beach after a town in Florida, and it became a town in 1964. On the ocean side of US 17 Business, streets of houses run to the beach.",
    "About a quarter of the homes here are in a high-risk flood zone, and we check the flood zone of any home you like before you offer.",
  ], "houses for sale were built anywhere from the 1960s to the 2020s, and the middle one has about 1,900 square feet. Houses usually sell for about $705,000 and condos for about $405,000, and most homes for sale have no HOA fee."),

  ENTRY(15, "prince-creek", "Prince Creek: homes beside a Tom Fazio course in Murrells Inlet", [
    "Prince Creek's sections border TPC Myrtle Beach, a Tom Fazio course that opened in 1999. Tom Watson won the Senior PGA Tour Championship there the next year.",
    "Bellwood Landing, Creekhaven, Longwood Bluffs and Wilderness Pointe are among the neighborhoods of Prince Creek West. Their road and park association owns The Park at Prince Creek West, 43 acres of mostly woods. Its amenity area has two pools and courts for tennis and pickleball, and listings add basketball, a playground and a covered pavilion.",
    "A Publix is just across the main road, and Tidelands Waccamaw Community Hospital is a short drive away. Builders sold new townhomes here in the past year, but few homes are sold by their owners.",
  ], "the few houses for sale here were built from about 2007 to 2015 and have about 2,400 square feet. Homes usually sell for $315,000 to $620,000, and the HOA fee is about $100 to $390 a month, by section."),
];

/* ItemList JSON-LD for the 15 numbered entries (round 8; the same block as specs/no-hoa-homes.js). */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The best neighborhoods in Myrtle Beach", numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: N[e.id].name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

/* A short "best for" index above the list (ROUND-7: "plain links to the entries"). Each link's words are
   the entry's own short label, so score.js H14 holds. */
const NAMES = (ids) => ids.map((id) => h.a(A(id), N[id].name)).join(", ");
const BEST_FOR = `<p style="color:var(--muted);line-height:1.8;max-width:720px;margin:0 0 1rem"><strong style="color:var(--navy)">Walk to the beach:</strong> ${NAMES(["cherry-grove", "surfside-beach"])}. <br/>`
  + `<strong style="color:var(--navy)">Golf:</strong> ${NAMES(["tidewater", "barefoot-resort", "wild-wing", "pine-lakes"])}. <br/>`
  + `<strong style="color:var(--navy)">Pools:</strong> ${NAMES(["waterbridge", "the-farm", "plantation-lakes", "berkshire-forest"])}. <br/>`
  + `<strong style="color:var(--navy)">A lower price:</strong> ${NAMES(["the-farm", "deerfield", "forestbrook-estates"])}.</p>`;

const STORY = (bg) => story([
  "<strong>Example:</strong> A house at Pine Lakes will be Megan's second home until she moves here from up north.",
  "The county taxes a second home at a higher rate than the home you live in. Her Chapter3 agent works out her yearly cost at the second-home rate before she offers.",
  "Once Megan lives in the house, she applies for the lower rate.",
], "", bg,
`An agent at Chapter3 can send you three neighborhoods that fit what you want, and the homes for sale in each.`);

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Surfside Beach aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Best Neighborhoods in Myrtle Beach, With a Map | Chapter3",
  description: "The best neighborhoods in Myrtle Beach, North Myrtle Beach and Surfside Beach by what you want nearby, with home prices, HOA fees, yearly costs and a map.",
  ogTitle: "The best neighborhoods in Myrtle Beach, by what you want nearby",
  crumb: "Best Neighborhoods",
  eyebrow: "Choosing a neighborhood",
  h1: "What are the best neighborhoods in Myrtle Beach?",
  h1em: "Fifteen places, and what living in each one gives you.",
  sub: "Fifteen neighborhoods from North Myrtle Beach to Murrells Inlet: beach streets, golf course neighborhoods and lake neighborhoods with big pools, and the history of each.",
  heroMedia: glance([
    { icon: "beach", label: "Walk to the beach", text: "Cherry Grove, Surfside Beach" },
    { icon: "golf", label: "Golf", text: "Pine Lakes, Tidewater, Barefoot" },
    { icon: "pool", label: "Big pools", text: "The Farm, Waterbridge, Berkshire Forest" },
  ]),
  heroCta: { title: "Tell us what you want nearby. We will send three neighborhoods that fit, with the homes for sale in each.", text: "One of our agents sends the list. There is no charge.", label: "Get three neighborhoods", href: OFFER },
  author: "devin",
  shortAnswer: [
    "For walking to the beach, the best neighborhoods in Myrtle Beach are Cherry Grove in North Myrtle Beach and the ocean side of Surfside Beach. For golf, Pine Lakes, Tidewater Plantation and Barefoot Resort are built around their courses. For big pools at a lower price, The Farm in Carolina Forest has two, and its houses sell for about $350,000.",
    "The HOA is the group that runs a neighborhood and collects a monthly fee from each owner.",
  ],
  sections: [
    { h2: "Where are the best neighborhoods in Myrtle Beach?", toc: "Map", html:
      CSS + KEY_CSS +
      h.p("These 15 neighborhoods run along the coast from North Myrtle Beach to Murrells Inlet, and inland to Carolina Forest and Conway.") +
      OVERVIEW.html +
      h.p(`Myrtle Beach, North Myrtle Beach, Surfside Beach and Conway are towns. Carolina Forest, Forestbrook and Murrells Inlet are areas outside any town. The rest are neighborhoods. To choose a town first, read ${h.a("/buyers/relocating/which-town/", "which town near Myrtle Beach fits you")}.`) +
      BEST_FOR },
    ...ENTRIES,
    { h2: "How do the 15 neighborhoods compare side by side?", toc: "Side by side", id: "side-by-side", html:
      h.p("The table gives the price, the HOA fee and the drive to the beach for all 15, in the order of the list. The drive times are with no traffic.") +
      compareCards(D.neighborhoods.map((n) => ({ name: n.name, href: link(n.id), cells: n.cells })), COLS,
        { caption: "The 15 neighborhoods side by side", nameLabel: "Neighborhood", css: css() }) +
      h.p("Of the fifteen, only Cherry Grove and the ocean side of Surfside Beach have many homes in a high-risk flood zone.") +
      h.p(`For a home with no HOA at all, see ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}. For a gate at the entrance, see ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")}. If the price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places near Myrtle Beach")}.`) },

    { h2: "What does a home here cost each year, besides the mortgage?", toc: "Yearly cost", id: "yearly-cost", html: (bg) =>
      h.p("Besides the mortgage, a house in these three neighborhoods costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance.") +
      compareCards(D.yearly_cost.rows.map((r) => ({ name: r.name, cells: r.cells })), COST_COLS,
        { caption: "A house you live in: the yearly cost", nameLabel: "House", css: css() }) +
      h.p(`The tax is for a home you live in, and in North Myrtle Beach it includes the city's share. When a home sells, the county ${h.ext(SC_TAX, "values it again")}, usually close to the price paid, and taxes the new value the next year.`) +
      h.p(`Cherry Grove canal homes also pay the city about $1,700 a year to ${h.ext(CG_CANALS, "dredge the canals")}, and the totals above do not count it.`) +
      STORY(bg) +
      h.p(`Homeowners insurance comes on top of all this. Our guide to ${h.a("/buyers/coastal-insurance/", "insurance near the coast")} shows what it costs, and our ${h.a("/buyers/relocating/hurricanes/", "guide to hurricanes near Myrtle Beach")} shows how to get ready for a storm.`) },

    { h2: "Are there 55+ communities near Myrtle Beach?", toc: "55+ communities", id: "55-plus", html:
      h.p(`Yes. Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are 55+ communities, each with a pool and a clubhouse. Our ${h.a(P55, "guide to 55+ communities near Myrtle Beach")} compares them, with the age rule for each.`) },

    { h2: "What do we check before you choose a neighborhood?", toc: "Before you choose", html:
      h.p("Two things can differ from one home to the next in the same neighborhood: the HOA rules and the homes around it. We read each home's HOA rules on boats, golf carts, renting and pools before you offer. Different kinds of homes are often built a few blocks apart here, so we walk the blocks around the home with you.") +
      h.p(`Public schools are assigned by address, and we look up each home's schools in the ${h.ext(SCHOOLS, "Horry County Schools zone lookup")}. Our page on ${h.a("/buyers/relocating/schools/", "schools near Myrtle Beach")} covers the schools themselves.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "What are the best neighborhoods in Myrtle Beach?", a: "For walking to the beach, Cherry Grove and the ocean side of Surfside Beach are a few blocks from the sand. For golf, Pine Lakes, Tidewater Plantation and Barefoot Resort are built around their courses. For a lower price near the beach, The Farm and the Deerfield Plantation area are a short drive away." },
    { q: "How much does it cost each year to own a home in Myrtle Beach?", a: "Besides the mortgage, a house in the three neighborhoods we priced costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance. A house in Cherry Grove costs about $4,400, mostly tax and flood insurance." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "The city of Myrtle Beach is better for being close to the beach, and Carolina Forest for big neighborhood pools. Carolina Forest has almost no homes in a high-risk flood zone, and its neighborhoods here are 10 to 20 minutes from the beach by car. The ones in the city of Myrtle Beach are about 5 to 10 minutes away." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach and in Cherry Grove are listed with no HOA fee. Homes on the older streets near Pine Lakes Country Club are listed with no HOA fee too." },
    { q: "Which neighborhoods near Myrtle Beach are closest to a hospital?", a: "Prince Creek in Murrells Inlet is about 6 minutes by car from a hospital. Pine Lakes and Wild Wing Plantation are about 8 minutes from one." },
  ],
  sources: [
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood maps", href: FEMA },
    { name: "FEMA flood policies", href: FEMA_POLICIES },
    { name: "S.C. property tax law", href: SC_TAX },
    { name: "S.C. beach access list", href: BEACH },
    { name: "The Farm HOA", href: FARM_HOA },
    { name: "North Myrtle Beach canal assessment", href: CG_CANALS },
  ],
  sourcesNote: "Prices are the middle sale price over 12 months, or the range where few sold, in the sections named or outlined. HOA fees come from recent listings, except The Farm's. The no-fee counts are MLS areas 11a and 29a and 29b. Taxes come from 2026 county tax bills.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Tell us what you want nearby. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
};
