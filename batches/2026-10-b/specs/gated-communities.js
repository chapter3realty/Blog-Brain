/* /buyers/gated-communities/ - the gated neighborhoods near Myrtle Beach, one numbered entry each:
 * what living there gives you, the kind of gate, one photo, the trade-off, then price and fee.
 *
 * Version 3, 2026-10-14 (round 7, batches/2026-10-b/review/ROUND-7.md; CRAFT 3, "A list of places is
 *   read one place at a time"; reports/Page shapes by kind of page.md 1b). The owner on the best
 *   neighborhoods page: "too jumpy and alot about price instead of the amenities". This page now keeps
 *   the hero, the short answer (with its one-line gate answer and jump link) and the two maps, numbered
 *   1 to 19 as the list. A real offer box sits under the short answer (website-patches/
 *   mkpage-offer-box.patch: heroCta.title). Then 19 entries in the maps' order, north to south. Each
 *   has an H2 "N. Place: what it gives you", short paragraphs on the homes, the amenities and what is
 *   close by, one aerial (USDA NAIP 2023, labelled from an address point; DeBordieu keeps its NOAA 2026
 *   aerial), the gate in one line, price and fee in one line, and the trade-off in one line. The area
 *   tables, the want cards and the price chart are cut: the entries carry them. After the list, the
 *   places side by side (two tables, 1 to 13 and 14 to 19, as the maps: compare.js takes 15 rows).
 *   Then the safety section, the fee section (short), pros and cons, Joan's story, the FAQ.
 *   Amenity facts: ledger rows 93 to 111, pending verification (round 7): the associations' and clubs'
 *   own sites (Barefoot, Litchfield by the Sea, Heritage Plantation, DeBordieu Club, Myrtle Trace and
 *   Seasons rows from batch 2026-10-a), MLS listing fields and descriptions read on the same MLS site
 *   (two or more listings agreeing; evidence in batches/2026-10-b/data/gated-amenities-mls.json),
 *   OpenStreetMap for golf courses, parks, marinas and stores, and OSRM for drive minutes.
 * Versions 1 to 2b and rounds 3 to 6 (2026-10-13): the safety answer, kinds of gate, the verifier's
 *   wording on rows 77 to 92, the Joan story (Myrtle Trace's open front entrance, then Seasons).
 *
 * Reader: typed "gated communities in Myrtle Beach", "best gated communities", or an area, "55+" or
 * "golf" with it. Job: find a gated neighborhood in my area and price range, and learn what the
 * gate does for me and what the fee gets me. Shape (CRAFT 3): a list page with maps.
 *
 * Facts: batches/2026-10-b/facts/gated-communities-facts.md. Verified rows, in the verifier's
 * per-community safe wording, said as the expert; rows 77 to 82 are pending verification (round 2).
 *   Kinds of gate (one term each):
 *     "Guard day and night": Litchfield by the Sea (row 6, the association's guide).
 *     "Gatehouse": Tidewater (row 20, guard house), Wachesaw Plantation (21, guard gate), Willbrook
 *       (27, guard gate), DeBordieu (28, guard gate), Litchfield Plantation (26, gate house), Dye
 *       Estates (8, staffed front guardhouse), Prestwick (row 82, pending: the NOAA aerial).
 *     "Call box": Seasons at Prince Creek West (registry seasons-gate; never "gated" or a guard).
 *     "Back gate only": Myrtle Trace (row 13).
 *     "Ask us the kind": every other gated neighborhood (no row names the kind).
 *   Fees: listing rows 17 to 34, rounded (ROUND-2 item 5); Myrtle Trace $95 and Seasons about $340
 *     (registry). What the fee pays for: Seasons (registry seasons-hoa-fee), Myrtle Trace (batch
 *     2026-10-a rows 30 and 34), Litchfield by the Sea (row 80, pending).
 *   Yearly cost (ROUND-2 item 2): Myrtle Trace $95 x 12 = $1,140 plus county tax about $1,200 (its
 *     page, batch 2026-10-a) = about $2,300; Seasons about $340 x 12 = about $4,100 plus about
 *     $2,000 tax (its page) = about $6,100. Both for a home you live in, besides the mortgage.
 *   Prices: recorded sales, rows 40 to 51, the chart's eight with a typical price (Seaside row 40
 *     "middle sale $738,500", Bellwood row 41 "about $850,000"); Leatherleaf and The Bluffs as a
 *     range; Myrtle Trace with its caveat; none for Dye Estates (row 44), The Reserve (56) and the
 *     Georgetown County rows (52 to 55), with the reason in one line (coordinator, round 2).
 *   Beach: rows 57 to 76; "on the ocean" for Litchfield by the Sea and DeBordieu (rows 79, 81).
 *   Golf: rows 39 and 10. 55+: Myrtle Trace and Seasons (batch 2026-10-a), with their age rule.
 *   Streets: rows 1 to 3, said with their limit (outside city limits in Horry County).
 *   Crime: SLED's crime data site, link only (row 77). Row 78 (Horry County's calls-for-service map) is
 *     not used: it shows calls, not crimes, part of its data is months old, and no agency list (verifier).
 * Never: safe, secure, exclusive, luxury, upscale; a rating; who lives anywhere; a conclusion about
 * an HOA or builder; package deliveries (no row); Tuscany Village and Cascadia (cut: not in a
 * table or on a map).
 * Maps: batches/2026-10-b/data/gated-map.json. Picture: batches/2026-10-b/data/photos.json,
 * prestwick-gate-from-above-2026.
 * Story (round 6, the round-3 arc restored): Joan wants a 55+ home behind a gate; she finds a Myrtle Trace house; the front entrance has no gate; the agent shows her Seasons, with a gate at its main
 *   entrance (registry seasons-gate); she offers there (WORKFLOW log, 2026-10-13).
 * Round 6: verifier wording on rows 83 to 89 (The Reserve about $1.35 million, Wachesaw East about
 *   $500,000, Wachesaw Plantation about $650,000, the wide spread around $1 million said once);
 *   sources line as the verifier wrote it; Willbrook fee stays about $340 (row 27, houses $339 to $346);
 *   Litchfield by the Sea in the verifier's wording (rows 90 to 92), no fee figure, no "usually".
 */
const { h, kit, data, placesMap, compareCards, wantPicker, prosCons, atAGlance, glance, story, photoSetB, BB } = require("./_kit.js");
const path = require("path");
const { regionMap, loadGeo2 } = require(path.join(BB, "tools", "area-map.js"));

/* A town name the reader needs ("Myrtle Beach", "Pawleys Island"), added to a map the tool drew: the same
   helper as batches/2026-10-b/specs/best-neighborhoods.js (addTown), so both pages draw it alike. The point
   is the tool's own town point, projected with the map's frame; the name goes in the first free spot near
   it, clear of every label and marker the tool placed; with no room it is left off and the build says so. */
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
  if (!spot) { console.warn(`gated-communities: no room for the town name ${name}`); return res; }
  m.boxes.push({ kind: "town", x0: spot[0] - w / 2, x1: spot[0] + w / 2, y0: spot[1] - hgt / 2, y1: spot[1] + hgt / 2 });
  const top = -(lines.length - 1) * 8.25 + 4.6;
  const label = `<g transform="translate(${spot[0].toFixed(1)} ${spot[1].toFixed(1)})"><g class="k"><text class="T" x="0" y="${top.toFixed(1)}" text-anchor="middle">`
    + lines.map((l, i) => `<tspan x="0"${i ? ' dy="16.5"' : ""}>${l}</tspan>`).join("") + `</text></g></g>`;
  const i = res.html.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so a town name cannot be added");
  res.html = res.html.slice(0, i) + label + res.html.slice(i);
  return res;
}


const SELF = "/buyers/gated-communities/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const SEASONS = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const OFFER = "/contact/";
const OFFER_LABEL = "Get this week's list";

/* Sources, opened by the researcher and re-opened by the verifier. */
const CODE = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_CH18LADERE";
const LBTS_GUIDE = "https://litchfieldbythesea.com/wp-content/uploads/2026/06/LBTS-Guest-Orientation-Guide-2026-Long-Version.pdf";
const LBTS_AMEN = "https://litchfieldbythesea.com/amenities/";
const BAREFOOT = "https://www.barefoothoa.com/single-family-neighborhoods/";
const HERITAGE = "https://www.heritageplantation.com/";
const DEBORDIEU = "https://www.debordieuclub.com/";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const BEACH = "https://gis.des.sc.gov/beachaccess/";
const SLED = "https://www.sled.sc.gov/sc-crime-data";

/* ---------------------------------------------------------------------------- */
/* The 19 places, in the maps' order: 1 to 13 on the first map (North Myrtle Beach to Murrells
   Inlet, north to south), 14 to 19 on the Pawleys Island map. lat/lon: the map dot (gated-map.json,
   or the address point of ledger rows 57 to 76 where two places shared a dot before round 7). */
const K = { guard: "Guard day and night", house: "Gatehouse", call: "Call box", back: "Back gate only", ask: "Gate at the entrance" };
const E = [
  { id: "tidewater-plantation", name: "Tidewater Plantation", short: "Tidewater", lat: 33.85093, lon: -78.62229, gate: K.house, fee: "About $230 a month", price: "About $625,000", beach: "About 8 minutes" },
  { id: "seaside-plantation", name: "Seaside Plantation", short: "Seaside", lat: 33.82688, lon: -78.66809, gate: K.ask, fee: "About $210 a month", price: "About $740,000", beach: "About 2 minutes" },
  { id: "barefoot-resort", name: "Barefoot Resort: Leatherleaf and Dye Estates", short: "Barefoot", lat: 33.80788, lon: -78.7403, gate: "Gatehouse at Dye Estates", fee: "About $390 a month (Leatherleaf)", price: "About $700,000 to $975,000", beach: "About 10 minutes" },
  { id: "grande-dunes", name: "Grande Dunes: Calais, Palermo and Villa Venezia", short: "Grande Dunes", lat: 33.75879, lon: -78.82911, gate: K.ask, fee: "About $200 to $375 a month", price: "About $1.5 million", beach: "About 10 minutes" },
  { id: "waterway-palms-plantation", name: "Waterway Palms Plantation", short: "Waterway Palms", lat: 33.742110, lon: -78.876082, gate: K.ask, fee: "About $150 a month", price: "About $780,000", beach: "About 10 minutes" },
  { id: "the-bluffs-on-the-waterway", name: "The Bluffs on the Waterway", short: "The Bluffs", lat: 33.746358, lon: -78.867299, gate: K.ask, fee: "About $150 a month", price: "About $700,000 to $975,000", beach: "About 10 minutes" },
  { id: "covington-lake-east", name: "Covington Lake East", short: "Covington Lake", lat: 33.75485, lon: -78.94557, gate: K.ask, fee: "About $90 a month", price: "About $570,000", beach: "About 15 minutes" },
  { id: "myrtle-trace", name: "Myrtle Trace (55+)", short: "Myrtle Trace", href: MT, lat: 33.77765, lon: -78.99495, gate: K.back, fee: "$95 a month", price: "About $300,000", beach: "About 15 minutes" },
  { id: "prestwick", name: "Prestwick", short: "Prestwick", lat: 33.64245, lon: -78.95602, gate: K.house, fee: "About $190 a month", price: "About $480,000", beach: "About 7 minutes" },
  { id: "seasons-at-prince-creek-west", name: "Seasons at Prince Creek West (55+)", short: "Seasons", href: SEASONS, lat: 33.585419, lon: -79.071772, gate: K.call, fee: "About $340 a month", price: "About $500,000", beach: "About 10 minutes" },
  { id: "bellwood-landing", name: "Bellwood Landing", short: "Bellwood", lat: 33.582185, lon: -79.073470, gate: K.ask, fee: "About $160 a month", price: "About $850,000", beach: "About 15 minutes" },
  { id: "wachesaw-plantation", name: "Wachesaw Plantation", short: "Wachesaw", lat: 33.560796, lon: -79.073101, gate: K.house, fee: "About $150 a month on most homes", price: "About $650,000", beach: "About 15 minutes" },
  { id: "wachesaw-east", name: "Wachesaw East", short: "Wachesaw East", lat: 33.558050, lon: -79.058480, gate: K.ask, fee: "About $145 a month", price: "About $500,000", beach: "About 10 minutes" },
  { id: "the-reserve", name: "The Reserve", short: "The Reserve", lat: 33.49467, lon: -79.1133, gate: K.ask, fee: "About $320 a month on most homes", price: "About $1.35 million", beach: "About 8 minutes" },
  { id: "willbrook-plantation", name: "Willbrook Plantation", short: "Willbrook", lat: 33.48206, lon: -79.13519, gate: K.house, fee: "About $340 a month", price: "About $1 million", beach: "About 9 minutes" },
  { id: "litchfield-plantation", name: "Litchfield Plantation", short: "Litchfield Plantation", lat: 33.47674, lon: -79.1313, gate: K.house, fee: "About $230 a month on most homes", price: "About $1 million", beach: "About 8 minutes" },
  { id: "litchfield-by-the-sea", name: "Litchfield by the Sea", short: "Litchfield by the Sea, River Club gate", lat: 33.471219, lon: -79.126112, gate: K.guard, fee: "Differs by section and unit", price: "Condos under $200,000 to over $2 million", beach: "On the ocean" },
  { id: "heritage-plantation", name: "Heritage Plantation", short: "Heritage", lat: 33.44215, lon: -79.16353, gate: K.ask, fee: "About $325 a month", price: "About $710,000", beach: "About 10 minutes" },
  { id: "debordieu-colony", name: "DeBordieu Colony", short: "DeBordieu", lat: 33.3744, lon: -79.17446, gate: K.house, fee: "About $300 to $400 a month", price: "About $2 million", beach: "On the ocean" },
];
E.forEach((e, i) => { e.n = i + 1; });
const byId = Object.fromEntries(E.map((e) => [e.id, e]));
const num = (id) => h.a("#" + id, String(byId[id].n));
const N_SPLIT = 13;

/* ---------------------------------------------------------------------------- */
/* Maps, numbered as the list. The second map's markers, key and alt text are renumbered 14 to 19
   (regionMap numbers from 1). */
const GEO_NAME = (e) => e.name.replace(/ \(55\+\)$/, "");
function renumber(html, offset) {
  return html
    .replace(/(<text class="nm"[^>]*>)(\d+)(<\/text>)/g, (m, a, n, b) => a + (+n + offset) + b)
    .replace(/(numbered )([^"]*?)(\.")/g, (m, a, list, b) => a + list.replace(/(^|; |and )(\d+)(, )/g, (x, p, n, s) => p + (+n + offset) + s) + b)
    .replace(/<ol class="c3-map-key"/g, `<ol start="${offset + 1}" class="c3-map-key"`);
}
const MAP_N = (() => {
  const m = regionMap({ name: "Neighborhoods 1 to 13, North Myrtle Beach to Murrells Inlet",
    places: E.slice(0, N_SPLIT).map((e) => ({ name: GEO_NAME(e), short: e.short, lat: e.lat, lon: e.lon, href: "#" + e.id })) },
    { dir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), src: "/images/maps", width: 420 });
  /* "Myrtle Beach" has no free spot near its own town point on this map, so the caption says where it is. */
  return { html: kit.mapFigure(m.html, "Map of the neighborhoods 1 to 13 on this page, from North Myrtle Beach (top right) to Murrells Inlet (bottom left). The city of Myrtle Beach is on the coast between Grande Dunes (4) and Prestwick (9).", m.credit) + m.key };
})();
const MAP_S = (() => {
  const m = placesMap("Neighborhoods 14 to 19, near Pawleys Island", E.slice(N_SPLIT).map((e) => ({ name: GEO_NAME(e), short: e.short, lat: e.lat, lon: e.lon, href: "#" + e.id })), {
    caption: "Map of the neighborhoods 14 to 19 on this page, near Pawleys Island and Litchfield, south of Murrells Inlet. Dot 17 is Litchfield by the Sea's River Club gate; its main gate is on US 17.",
    key: true,
  });
  addTown(m, "Pawleys Island");
  return { html: renumber(m.html, N_SPLIT) };
})();

/* ---------------------------------------------------------------------------- */
/* One entry. Paragraphs first (the place), the photo under the first paragraph, then three
   labelled lines: the gate, price and fee, the trade-off. */
const ph = photoSetB({ aerialWidth: "720px" });
/* The gate aerial (with crops) is the share image; it is shown in the safety section. */
ph.share("prestwick-gate-from-above-2026");
const LINE = (label, text) => `<p style="color:var(--muted);line-height:1.7;max-width:720px;margin:0 0 .5rem"><strong style="color:var(--navy);font-weight:600">${label}</strong> ${text}</p>`;
function entry(id, head, o) {
  const e = byId[id];
  const [first, ...rest] = o.paras;
  return { h2: `${e.n}. ${GEO_NAME(e).replace(/: .*/, "")}: ${head}`, toc: GEO_NAME(e), id, html: (bg) =>
    h.p(first) + ph.aerial(o.photo, o.caption, { closeUp: true }) + rest.map((t) => h.p(t)).join("")
    + LINE("The gate:", o.gate) + LINE("Price and fee:", o.price) + LINE("The trade-off:", o.tradeoff)
    + (o.after ? o.after(bg) : "") };
}
const P = (id) => `${id}-from-above-2023`;

const SECTIONS_PLACES = [
  entry("tidewater-plantation", "golf, pools and a beach cabana in North Myrtle Beach", {
    paras: [
      "Tidewater Plantation is a golf community on the Intracoastal Waterway in North Myrtle Beach. Most of its homes are houses along the fairways of Tidewater Golf Club, and it also has condo buildings.",
      "Owners share three pools with hot tubs, tennis and pickleball courts, bocce, a fitness center and a clubhouse. They also have an oceanfront beach cabana with its own parking at Cherry Grove Beach.",
      "Cherry Grove's public boat ramp and park are less than a mile from the middle of the neighborhood.",
    ],
    photo: P("tidewater-plantation"), caption: "Tidewater Plantation from above: houses along the fairways of its golf course, with ponds among them.",
    gate: "a gatehouse on Little River Neck Road, where visitors check in.",
    price: "homes usually sell for about $625,000. The HOA fee is about $230 a month.",
    tradeoff: "the beach is a drive, about 8 minutes, not a walk.",
  }),
  entry("seaside-plantation", "lakes and the beach two minutes away", {
    paras: [
      "Seaside Plantation is a small neighborhood of houses in North Myrtle Beach, about 2 minutes by car from a public beach access. Many homes are on its two freshwater lakes.",
      "Owners share a clubhouse, a pool and a hot tub, and they may drive golf carts on its streets. Main Street in North Myrtle Beach, with its shops and restaurants, is a golf cart ride away.",
    ],
    photo: P("seaside-plantation"), caption: "Seaside Plantation from above: houses around two freshwater lakes.",
    gate: "a gate at the entrance. The owners association has recorded its gate rules with the county.",
    price: "homes usually sell for about $740,000. The HOA fee is about $210 a month.",
    tradeoff: "few homes come up for sale. Only a handful sold in the last year.",
  }),
  entry("barefoot-resort", "four golf courses and two gated neighborhoods", {
    paras: [
      "Barefoot Resort in North Myrtle Beach has four golf courses: the Dye, Fazio, Love and Norman courses. Most of the resort is not behind a gate. Leatherleaf and Dye Estates are two of its neighborhoods of houses that are.",
      "Leatherleaf has 62 houses with one or two floors and three or four bedrooms, around a pond in the middle. The Love course surrounds it. Dye Estates has 98 home sites of half an acre to two acres. Some overlook the Dye course, and some have docks on the Intracoastal Waterway.",
      `Owners can ride a free shuttle to a private beach cabana with showers and gated parking, and swim in the North Tower Pool on the waterway. Most owners of houses also join the Residents' Club, with a pool, tennis courts, a fitness center and a playground. The ${h.ext(BAREFOOT, "residential association's site")} describes each neighborhood.`,
    ],
    photo: P("barefoot-leatherleaf"), caption: "Leatherleaf, a gated neighborhood in Barefoot Resort, from above: one loop of houses around a pond, with golf fairways on both sides.",
    gate: "Dye Estates has a guardhouse at its front entrance, and Leatherleaf has a gate at its entrance.",
    price: "in Leatherleaf, the few homes that sold went for about $700,000 to $975,000. The HOA fee there is about $390 a month.",
    tradeoff: "most of Barefoot Resort is open, so check that the home you like is in a gated neighborhood.",
  }),
  entry("grande-dunes", "golf, a marina and an oceanfront club in Myrtle Beach", {
    paras: [
      "Grande Dunes is a large community in Myrtle Beach along the Intracoastal Waterway. Only some of its sections are gated, including Calais, Palermo and Villa Venezia, which are neighborhoods of houses.",
      "Owners can use the Ocean Club, a private club on the beach with oceanfront pools and dining. Grande Dunes also has golf, Har-Tru tennis courts and a marina on the waterway, with restaurants beside it.",
    ],
    photo: P("grande-dunes-villa-venezia"), caption: "Villa Venezia, a gated section of Grande Dunes, from above: houses beside golf fairways, with the Intracoastal Waterway at the lower right.",
    gate: "a gate at the entrance of each gated section.",
    price: "homes usually sell for about $1.5 million. The HOA fee is about $200 to $375 a month.",
    tradeoff: "only some sections are gated, and homes there cost more than anywhere on this page except DeBordieu Colony.",
  }),
  entry("waterway-palms-plantation", "a boat ramp on the Intracoastal Waterway", {
    paras: [
      "Waterway Palms Plantation is a neighborhood of houses in Carolina Forest, on the Intracoastal Waterway. It has ponds between its streets.",
      "Boat owners have a private boat ramp on the waterway, a day dock and boat storage. Everyone shares a two-story clubhouse, pools, a fitness center, tennis and pickleball courts, a basketball court and a playground.",
    ],
    photo: P("waterway-palms-plantation"), caption: "Waterway Palms Plantation from above: houses on winding ponds, the clubhouse and pools in the middle, and the Intracoastal Waterway at the lower right.",
    gate: "a gate at the entrance. A visitor calls the owner from the main gate to be let in.",
    price: "homes usually sell for about $780,000. The HOA fee is about $150 a month.",
    tradeoff: "the beach is about 10 minutes away by car.",
  }),
  entry("the-bluffs-on-the-waterway", "boats, two clubhouses and playgrounds by the waterway", {
    paras: [
      "The Bluffs on the Waterway is a neighborhood of houses in Carolina Forest, near Waterway Palms, on the Intracoastal Waterway.",
      "It has two clubhouses, one of them on the waterway, a pool, tennis and pickleball courts and a playground. Boat owners have a boat ramp, day docks and boat storage.",
    ],
    photo: P("the-bluffs-on-the-waterway"), caption: "The Bluffs on the Waterway from above: houses on curving streets and ponds, with the Intracoastal Waterway in the lower right corner.",
    gate: "a gate at the entrance, on Royal Bluff Drive off River Oaks Boulevard.",
    price: "the few homes that sold went for about $700,000 to $975,000. The HOA fee is about $150 a month.",
    tradeoff: "the beach is about 10 minutes away by car.",
  }),
  entry("covington-lake-east", "a pool, lakes and a low HOA fee in Carolina Forest", {
    paras: [
      "Covington Lake East is a neighborhood of houses in Carolina Forest. Many homes back up to its lakes, and its streets have sidewalks.",
      "Owners share a pool and a clubhouse. The shops and restaurants of Carolina Forest Boulevard are close by.",
    ],
    photo: P("covington-lake-east"), caption: "Covington Lake East from above: houses on curving streets around its lakes.",
    gate: "a gate at the entrance.",
    price: "homes usually sell for about $570,000. The HOA fee is about $90 a month, the lowest on this page.",
    tradeoff: "the beach is about 15 minutes away by car.",
  }),
  entry("myrtle-trace", "a 55+ neighborhood with a clubhouse near Conway", {
    paras: [
      `Myrtle Trace is a 55+ neighborhood near Conway with 518 homes, mostly houses and a few townhouses. Every home must have a resident 55 or older. Our ${h.a(MT, "guide to Myrtle Trace")} has its rules.`,
      "Its HOA owns a clubhouse, a swimming pool, a bocce court, a horseshoe pit and a basketball area, and 42 acres of shared land with fifteen ponds.",
    ],
    photo: P("myrtle-trace"), caption: "Myrtle Trace from above: houses on curving streets among trees, with golf fairways and ponds nearby.",
    gate: "gates only at the back entrance, on Myrtle Ridge Road. The front entrance on Burning Ridge Road has no gate.",
    price: "homes usually sell for about $300,000. The HOA fee is $95 a month.",
    tradeoff: "the front entrance is open, and the beach is about 15 minutes away by car.",
  }),
  entry("prestwick", "golf, clay tennis courts and a pool near Surfside Beach", {
    paras: [
      "Prestwick is a golf community of houses off Highway 544, just outside the town of Surfside Beach. Its 18-hole golf course is between the homes.",
      "The owners association owns a large pool, a smaller pool and a tennis center with clay courts and two hard courts. Owners use the pool and the hard courts. A public beach access in Surfside Beach is about 7 minutes away by car.",
    ],
    photo: P("prestwick"), caption: "Prestwick from above: houses among the fairways of its golf course, with a lake at the left.",
    gate: "a gatehouse at the main gate off Highway 544.",
    price: "homes usually sell for about $480,000. The HOA fee is about $190 a month.",
    tradeoff: "golf and the clay tennis courts cost extra, through a separate membership.",
  }),
  entry("seasons-at-prince-creek-west", "a 55+ clubhouse with indoor and outdoor pools", {
    paras: [
      `Seasons at Prince Creek West is a 55+ neighborhood of 444 home lots in Murrells Inlet. Every home must have a resident 55 or older. Our ${h.a(SEASONS, "guide to Seasons at Prince Creek West")} has its rules.`,
      "Its clubhouse has indoor and outdoor pools, a fitness center, tennis and bocce. The HOA fee includes internet, weekly trash pickup and lawn care. Seasons is part of Prince Creek West, which has a 43-acre park.",
    ],
    photo: P("prince-creek-55-clubhouse"), caption: "The Seasons at Prince Creek West clubhouse and its outdoor pool from above, among the streets of Prince Creek West.",
    gate: "a call box at the main entrance. A visitor calls the owner from the box, and the owner opens the gate.",
    price: "homes usually sell for about $500,000. The HOA fee is about $340 a month.",
    tradeoff: "the HOA fee is one of the higher ones here, though it includes lawn care.",
  }),
  entry("bellwood-landing", "houses beside a park with two pools", {
    paras: [
      "Bellwood Landing is a neighborhood of houses in Prince Creek West, Murrells Inlet. Some homes look out over the marsh.",
      "Owners use The Park at Prince Creek. It has two pools and a splash area for children, lighted tennis and pickleball courts, basketball, a playground and a covered pavilion with grills. The TPC Myrtle Beach golf course is close by.",
    ],
    photo: P("bellwood-landing"), caption: "Bellwood Landing from above: houses around a pond, beside the woods.",
    gate: "a gate at the entrance, on TPC Boulevard.",
    price: "homes usually sell for about $850,000. The HOA fee is about $160 a month.",
    tradeoff: "the beach is about 15 minutes away by car.",
  }),
  entry("wachesaw-plantation", "a private golf club near the Waccamaw River", {
    paras: [
      "Wachesaw Plantation is a golf community of houses in Murrells Inlet. Many homes are along the private Wachesaw Plantation Club's golf course, designed by Tom Fazio.",
      "Club membership is separate and optional. Members get golf, tennis, a pool and dining by the river. Just outside the gates, Wacca Wache Marina is on the Waccamaw River and the Intracoastal Waterway.",
    ],
    photo: P("wachesaw-plantation"), caption: "Wachesaw Plantation from above: houses among the fairways of its golf course, with ponds.",
    gate: "a gatehouse at the main gate, reached from Riverwood Drive.",
    price: "homes usually sell for about $650,000. The HOA fee is about $150 a month on most homes.",
    tradeoff: "golf, the pool and tennis come with the club membership, at an extra cost.",
  }),
  entry("wachesaw-east", "golf and a pool next to the hospital", {
    paras: [
      "Wachesaw East is a neighborhood of houses in Murrells Inlet, built around the Wachesaw Plantation East golf course.",
      "Owners share a large pool, tennis courts, a workout room and a clubhouse. Its main entrance is at the light by Tidelands Waccamaw Community Hospital.",
    ],
    photo: P("wachesaw-east"), caption: "Wachesaw East from above: houses along the fairways of its golf course.",
    gate: "a gate at the main entrance. The back gate on Wachesaw Road opens with a card key only.",
    price: "homes usually sell for about $500,000. The HOA fee is about $145 a month.",
    tradeoff: "the beach is about 10 minutes away by car.",
    after: (bg) => h.cta("Get this week's list of homes for sale in gated neighborhoods.", OFFER_TEXT, OFFER_LABEL, OFFER, bg),
  }),
  entry("the-reserve", "a private golf club and a marina on the Waccamaw River", {
    paras: [
      "The Reserve is a neighborhood of houses in Litchfield, near Pawleys Island. It is built around The Reserve Golf Club, a private course designed by Greg Norman.",
      `It has a marina on the Waccamaw River with a boat ramp. Owners can also use the beach and Beach Club at Litchfield by the Sea, a golf cart ride away, and its sidewalks suit walking and biking.`,
    ],
    photo: P("the-reserve"), caption: "The Reserve from above: houses around a pond, with golf fairways cut through the woods.",
    gate: "a gate at the entrance.",
    price: "homes usually sell for about $1.35 million. The HOA fee is about $320 a month on most homes.",
    tradeoff: "golf and the marina's club with its pool and restaurant are separate memberships.",
  }),
  entry("willbrook-plantation", "golf, a pool and the beach club at Litchfield", {
    paras: [
      "Willbrook Plantation is a golf community of houses in Litchfield, near Pawleys Island, built around a golf course designed by Dan Maples. Open fields and marsh are along its west side.",
      "Owners share a pool and a clubhouse. They can also use Litchfield by the Sea's beach, Beach Club, tennis courts and crabbing docks, a golf cart ride away.",
    ],
    photo: P("willbrook-plantation"), caption: "Willbrook Plantation from above: houses among trees and golf fairways, with open fields at the left.",
    gate: "a gatehouse at the entrance off Willbrook Boulevard.",
    price: "homes sold for about $1 million in the middle of the range. The HOA fee is about $340 a month.",
    tradeoff: "few homes sold in Willbrook Plantation, so prices there ranged widely around $1 million.",
  }),
  entry("litchfield-plantation", "an old rice plantation with an avenue of oaks", {
    paras: [
      "Litchfield Plantation is on an old rice plantation near Pawleys Island. The road in is lined with centuries-old live oaks, the Avenue of Oaks. Its homes are houses and townhouses.",
      "Owners can use the plantation house, built in the 1700s, and a pool that looks out over the old rice fields. They also have an oceanfront beach house with parking on Pawleys Island. A private marina in the plantation rents boat slips on the Waccamaw River, for an extra fee.",
    ],
    photo: P("litchfield-plantation"), caption: "Litchfield Plantation from above: houses under tall trees, with golf fairways and ponds at the right.",
    gate: "a gatehouse at the main entrance on Kings River Road.",
    price: "homes sold for about $1 million in the middle of the range. The HOA fee is about $230 a month on most homes.",
    tradeoff: "few homes sold in Litchfield Plantation, so prices there ranged widely around $1 million.",
  }),
  entry("litchfield-by-the-sea", "a guard at the gate, lakes and its own beach", {
    paras: [
      `Litchfield by the Sea is a private community on the ocean at Litchfield, near Pawleys Island, with more than a mile of beach. It has houses on the ocean, villas by the marsh and condos.`,
      `Its oceanfront Beach Club has a deck and a pavilion. Owners also have pools, tennis and pickleball courts near the Beach Club, fishing and crabbing docks on Osprey Lake, and paved paths through the marsh and woods. The ${h.ext(LBTS_AMEN, "community's site")} lists them.`,
      "Litchfield by the Sea has many sections, and prices and HOA fees differ a lot from one to the next. We send the homes for sale in each section on request.",
    ],
    photo: P("litchfield-by-the-sea"), caption: "Litchfield by the Sea from above: homes around a lake, condo buildings by the beach and the Atlantic Ocean at the right.",
    gate: `a ${h.ext(LBTS_GUIDE, "guard day and night")} at the main gate on US 17. The owner or rental manager must register guests before the visit.`,
    price: "in the last year, condos there sold for anywhere from under $200,000 to over $2 million. Houses in its Oystercatcher Island section sold for about $750,000. The HOA fee differs by section and unit.",
    tradeoff: "prices and fees differ a lot from one section to the next, so compare sections before you choose.",
  }),
  entry("heritage-plantation", "a marina on the river and golf inside the gate", {
    paras: [
      "Heritage Plantation is a neighborhood of about 500 houses between the Waccamaw River and the beaches of Pawleys Island, less than three miles from the ocean. Live oaks, lakes and marsh surround the homes.",
      `It has a marina on the river and a golf course inside the community. Owners share four tennis courts, four pickleball courts, a pool and a clubhouse with a fitness room. The ${h.ext(HERITAGE, "owners association's site")} lists them.`,
    ],
    photo: P("heritage-plantation"), caption: "Heritage Plantation from above: houses along golf fairways, its pool and tennis courts near the label, and a river and marsh at the top.",
    gate: "a gate at the main entrance off Kings River Road.",
    price: "homes usually sell for about $710,000. The HOA fee is about $325 a month.",
    tradeoff: "the beach is about 10 minutes away by car.",
  }),
];

/* DeBordieu keeps its NOAA 2026 aerial (rows 28, 70, 81). */
SECTIONS_PLACES.push({ h2: "19. DeBordieu Colony: the ocean, golf and a Beach Club", toc: "DeBordieu Colony", id: "debordieu-colony", html: () =>
  h.p("DeBordieu Colony is on the ocean, about three miles north of Georgetown and six miles south of Pawleys Island. It covers 2,700 acres of oaks, pines, beach and tidal marsh, and at least 600 acres are a nature preserve. Home sites are half an acre to five acres.")
  + ph.aerial("debordieu-from-above-2026", "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between most of them and the beach.", { closeUp: true })
  + h.p(`The ${h.ext(DEBORDIEU, "DeBordieu Club")} has a golf course designed by Pete and P.B. Dye, a Beach Club with a pool that looks out over the ocean, and a tennis center with eight clay courts, four pickleball courts and a hard court.`)
  + LINE("The gate:", "a gatehouse on Luvan Boulevard. Its real estate office is just before the gate.")
  + LINE("Price and fee:", "homes usually sell for about $2 million. The HOA fee is about $300 to $400 a month.")
  + LINE("The trade-off:", "homes here cost the most on this page.") });

/* The places side by side, after the list: two tables, as the two maps (compare.js takes 15 rows). */
const COLS = [
  { key: "gate", label: "Kind of gate" },
  { key: "fee", label: "HOA fee" },
  { key: "price", label: "Homes sell for", num: true },
  { key: "beach", label: "To the beach", num: true },
];
const rowOf = (e) => ({ name: `${e.n}. ${GEO_NAME(e)}`, href: "#" + e.id, cells: { gate: e.gate, fee: e.fee, price: e.price, beach: e.beach } });
const TABLES = compareCards(E.slice(0, N_SPLIT).map(rowOf), COLS, { caption: "Gated neighborhoods 1 to 13, North Myrtle Beach to Murrells Inlet", nameLabel: "Neighborhood", css: true })
  + compareCards(E.slice(N_SPLIT).map(rowOf), COLS, { caption: "Gated neighborhoods 14 to 19, near Pawleys Island", nameLabel: "Neighborhood", css: false });

/* Text at reading size inside the icon cards, and the icon beside the words (round 3). */
const CARD_CSS = "<style>.c3-big ul[role=list] li{display:grid;grid-template-columns:2.6rem 1fr;column-gap:.85rem;align-items:start}.c3-big ul[role=list] li>span:first-child{grid-row:1/span 2;margin-bottom:0!important}.c3-big ul[role=list] li>strong,.c3-big ul[role=list] li>span:not(:first-child){grid-column:2}.c3-big li span[style*=\"font-size:.9rem\"]{font-size:var(--read,1.0625rem)!important}.c3-big li strong{font-weight:600!important;font-size:var(--read,1.0625rem)!important}</style>";
const big = (html) => `<div class="c3-big">${html}</div>`;

const GATE_PHOTO = () => ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. Just inside, a small building, the gatehouse, sits between the two lanes, with a gate arm across each lane.");

const OFFER_TEXT = "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.";
const OFFER_SHORT = "Tell us your price range and the area you like. We will email you this week's homes for sale in the gated neighborhoods that fit.";

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  title: "Gated Communities in Myrtle Beach: 19 Neighborhoods | Chapter3",
  description: "Nineteen gated neighborhoods near Myrtle Beach, one at a time: golf, pools, the beach and the water, who is at the gate, and what homes and HOA fees cost.",
  ogTitle: "Gated communities near Myrtle Beach: 19 neighborhoods and what living there gives you",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities in Myrtle Beach?",
  h1em: "From North Myrtle Beach to Pawleys Island.",
  sub: "Nineteen gated neighborhoods near Myrtle Beach, one at a time: what living there gives you, who is at the gate, and what homes cost.",
  heroMedia: glance([
    { icon: "beach", label: "On the ocean", text: "DeBordieu Colony, Litchfield by the Sea" },
    { icon: "golf", label: "Golf", text: "Ten of the 19 are golf communities" },
    { icon: "home", label: "Homes sell for", text: "About $480,000 to $2 million" },
  ]),
  heroCta: { title: "Get this week's list of homes for sale in gated neighborhoods.", text: OFFER_SHORT, label: OFFER_LABEL, href: OFFER },
  author: "devin",
  shortAnswer: [
    "Gated neighborhoods near Myrtle Beach run from North Myrtle Beach to Pawleys Island. Ten are golf communities, two are on the ocean, and two have boat ramps on the Intracoastal Waterway.",
    `In most, the fee to the homeowners association (HOA) is about $90 to $400 a month, and homes sell for about $480,000 to $2 million. A gate controls who drives in. It is not a guard at each home: ${h.a("#what-a-gate-does", "what a gate does and does not do")}.`,
  ],
  sections: [
    { h2: "Where are the gated neighborhoods near Myrtle Beach?", toc: "Maps", html: () =>
      ph.css() +
      h.p("The numbers on the two maps match the list below, from north to south.") +
      MAP_N.html + MAP_S.html +
      h.p(`For the ocean, see ${num("litchfield-by-the-sea")} and ${num("debordieu-colony")}. For a boat ramp on the Intracoastal Waterway, see ${num("waterway-palms-plantation")} and ${num("the-bluffs-on-the-waterway")}. For a 55+ neighborhood, see ${num("myrtle-trace")} and ${num("seasons-at-prince-creek-west")}. For the lowest HOA fee, see ${num("covington-lake-east")} and ${num("myrtle-trace")}.`) },

    ...SECTIONS_PLACES,

    { h2: "How do the gated neighborhoods compare?", toc: "Compare", id: "compare", html: () =>
      h.p("All 19 side by side. Prices are what homes sold for in the last 12 months, not asking prices. Drive times to the beach are with no traffic.") +
      TABLES +
      h.p(`To compare these with neighborhoods that have no gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach for what you want nearby")}. We also cover ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}, ${h.a("/buyers/golf-communities/", "golf communities")} and ${h.a("/buyers/55-plus-communities/", "55+ communities")}.`) },

    { h2: "Does a gate make a neighborhood safer?", toc: "What a gate does", id: "what-a-gate-does", html: (bg) =>
      h.p("A gate controls who drives into the neighborhood. It does not put a guard at each home, and we do not rate any neighborhood as safe or unsafe.") +
      h.p("Visitors stop at the gate and are let in at the gate or by the owner. Your own doors, locks and alarm are still yours to choose.") +
      CARD_CSS + big(atAGlance([
        { icon: "gate", label: K.guard, text: "A guard is on duty at the main gate around the clock. Litchfield by the Sea." },
        { icon: "home", label: K.house, text: "A building at the gate. Ask us about hours. Tidewater Plantation, Prestwick, Wachesaw Plantation, Willbrook Plantation, Litchfield Plantation, DeBordieu Colony and Dye Estates." },
        { icon: "key", label: K.call, text: "A phone at the gate. A visitor calls the owner, who opens the gate. Seasons at Prince Creek West." },
        { icon: "trail", label: K.back, text: "The front entrance is open, and only the back entrance has gates. Myrtle Trace." },
      ], { bg, min: "18rem" })) +
      GATE_PHOTO() +
      h.p(`To see crime reported to a police department or sheriff, use the state's ${h.ext(SLED, "crime data site")}. You pick the agency, the year and the type of crime.`) },

    { h2: "What does the HOA fee cost in a year?", toc: "The yearly cost", html: () =>
      h.p("The HOA uses the fee to run the gate and keep up the streets and the shared places, like a pool.") +
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100 a year.") +
      h.p(`Outside city limits in Horry County, the streets behind a gate are usually ${h.ext(CODE, "private")}, so the county does not repave them. ${h.a("/hoa/reserves/", "Check how much the HOA has saved for repairs")} before you buy.`) +
      h.p(`Hurricanes and flooding matter here too. Flood risk can change from one street to the next, even inside one gate. Get an insurance quote for the home before you offer. Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} explains the costs.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      prosCons([
        "Visitors stop at the gate, and drivers cannot use your streets as a shortcut.",
        "You can choose a gated neighborhood on the ocean, on the waterway or inland.",
        "Ten of these neighborhoods are golf communities, and two are 55+ neighborhoods.",
      ], [
        { text: "You pay for the gate and the private streets through your HOA fee.", act: `Ask what it covers before you offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} lists the usual items.` },
        { text: "The county does not repave private streets.", act: `Check the HOA's savings, so a one-time extra charge to every owner, called a ${h.a("/hoa/special-assessments/", "special assessment")}, is less likely.` },
        { text: "Every guest and worker comes through the gate.", act: "Give the gate your guest's name before the visit, where the gate asks for it." },
      ], { bg }) },

    { h2: "What should you check at the gate before you buy?", toc: "Check the gate", html: (bg) =>
      h.p("Two things matter at the gate: whether the home is behind it, and how your guests will get in. In Barefoot Resort and Grande Dunes only some sections are gated, and Myrtle Trace has gates only at its back entrance.") +
      story([
        "<strong>Example:</strong> Joan is moving from Ohio, and she wants a 55+ home behind a gate. She finds a house in Myrtle Trace, near Conway.",
        "Her Chapter3 agent drives her in by the front entrance. That entrance has no gate, and the gates are only at the back.",
        "The agent shows her homes for sale in Seasons at Prince Creek West, which has a gate at its main entrance. Joan finds a house there and makes her offer.",
      ], "", bg,
      `An agent at Chapter3 can ${h.a(OFFER, "check the gate for the home you like")} before you make an offer.`) },
  ],
  faqTitle: "Gated communities FAQ",
  faq: [
    { q: "Is there a gated community in Surfside Beach?", a: "Prestwick, just outside the town, is gated. Its nearest public beach access is in Surfside Beach, about 7 minutes away by car." },
    { q: "Are there 55+ gated communities near Myrtle Beach?", a: "Yes. Seasons at Prince Creek West in Murrells Inlet has a gate at its main entrance. Myrtle Trace near Conway has gates only at its back entrance." },
    { q: "Are there gated golf communities near Myrtle Beach?", a: "Yes. Ten gated neighborhoods near Myrtle Beach are golf communities. They are Barefoot Resort, Grande Dunes, Prestwick, Tidewater Plantation, Wachesaw Plantation, Wachesaw East, The Reserve, Heritage Plantation, Willbrook Plantation and DeBordieu Colony." },
    { q: "Is Grande Dunes a gated community?", a: "Only in part. Some sections of Grande Dunes are gated, including Calais, Palermo and Villa Venezia." },
  ],
  sources: [
    { name: "SLED crime data", href: SLED },
    { name: "Horry County land development rules", href: CODE },
    { name: "Horry County deed records", href: DEEDS },
    { name: "Litchfield by the Sea guest guide", href: LBTS_GUIDE },
    { name: "Barefoot Resort Residential Association", href: BAREFOOT },
  ],
  sourcesNote: "Not legal advice. Gates, fees and amenities come from associations and home listings. A price is the middle sale of the past year. Horry County prices are deed records, without builder sales. Prices near Pawleys Island and in Wachesaw are MLS closed sales, which can include builder sales. Litchfield by the Sea figures leave out shared-week sales. Drive times: OpenStreetMap, no traffic.",
  afterSources: () => ph.credits(),
  /* The gate aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  bottomCta: { h2: "Get this week's list of homes for sale in gated neighborhoods.", p: OFFER_TEXT, label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
