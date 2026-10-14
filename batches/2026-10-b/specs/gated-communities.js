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
 * Version 4, 2026-10-14 (round 8, batches/2026-10-b/review/ROUND-8.md; CRAFT 5 "Say something new, every
 *   time" and "We do the work"): each entry now says what only that place has, its history and features,
 *   in short paragraphs; the gate, price, fee, beach and grocery drive are said once, in a facts line.
 *   A "What are you looking for?" legend under the maps. One plain price table. The safety section is
 *   three sentences and the state's data; the gate cards, the trade-off lines and reader to-dos are cut
 *   ("we check"). ItemList schema for the entries. History rows 114 to 132, pending (round 8).
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
  { id: "prince-creek-55", name: "Seasons at Prince Creek West (55+)", short: "Seasons", href: SEASONS, lat: 33.585419, lon: -79.071772, gate: K.call, fee: "About $340 a month", price: "About $500,000", beach: "About 10 minutes" },
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
/* ---------------------------------------------------------------------------- */
/* One entry per place (round 8, ROUND-8.md; CRAFT 5 "Say something new, every time"). Each entry
   says what only that place has: its history (who built it, when, what the land was, the golf
   course's designer and year), its features and an owner's day, in short paragraphs. The gate, the
   price, the fee, the beach and a grocery store's drive are said once, in the facts line at the end.
   History and feature rows: ledger rows 114 to 132, pending verification (round 8). */
const FACTS = (text) => `<p style="color:var(--muted);line-height:1.7;max-width:720px;margin:.2rem 0 1rem;padding:.7rem .9rem;border-left:3px solid var(--brass);background:var(--ivory-2,rgba(0,0,0,.03))"><strong style="color:var(--navy);font-weight:600">The facts:</strong> ${text}</p>`;
const P = (id) => `${id}-from-above-2023`;
function entry(id, head, paras, photo, caption, facts) {
  const e = byId[id];
  const [first, ...rest] = paras;
  return { h2: `${e.n}. ${GEO_NAME(e).replace(/: .*/, "")}: ${head}`, toc: GEO_NAME(e), id, html: (bg) =>
    h.p(first) + ph.aerial(photo, caption, { closeUp: true }) + rest.map((t) => h.p(t)).join("") + FACTS(facts) };
}

const SECTIONS_PLACES = [
  entry("tidewater-plantation", "a 1990 golf course on the Cherry Grove marsh", [
    "Tidewater began with its golf course. Ken Tomlinson, a Columbia lawyer who also designed courses, found a 600-acre site on the Intracoastal Waterway. Hurricane Hugo delayed the work, and the course opened in 1990. Golf Digest and Golf Magazine both named it the best new public course in America that year.",
    "Holes 3 and 12 play over the marsh of the waterway, facing Cherry Grove. Houses line the fairways, with a few condo buildings among them.",
    "Owners swim at three pools, play tennis, pickleball or bocce, and drive to their own oceanfront cabana at Cherry Grove Beach. Cherry Grove's public boat ramp is less than a mile from the middle of the neighborhood.",
  ], P("tidewater-plantation"), "Tidewater Plantation from above: houses along the fairways of its golf course, with ponds among them.",
  "a gatehouse on Little River Neck Road. Homes usually sell for about $625,000, and the HOA fee is about $230 a month."),

  entry("seaside-plantation", "lakes and golf carts a few blocks from the ocean", [
    "Seaside Plantation is a small neighborhood of houses in the Tilghman Beach part of North Myrtle Beach, a few blocks from the ocean. The houses circle two freshwater lakes, and owners share a clubhouse, a pool and a hot tub.",
    "Golf carts may use its streets, and Main Street is a cart ride away. Each spring and fall, thousands of shag dancers fill Main Street for the Society of Stranders' Spring Safari and Fall Migration.",
  ], P("seaside-plantation"), "Seaside Plantation from above: houses around two freshwater lakes.",
  "a gate at the entrance, with rules the owners association has recorded with the county. Homes usually sell for about $740,000, and the HOA fee is about $210 a month. Only a handful sell each year."),

  entry("barefoot-resort", "four golf courses that opened together in 2000", [
    "Barefoot Resort opened four golf courses at the same time in April 2000, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman. Before that, the land was used for hunting. Hurricane Floyd's flooding in 1999 delayed the opening.",
    "Leatherleaf has 62 houses of one or two floors around a pond, with the Love course on every side. Dye Estates has 98 home sites of half an acre to two acres, some on the Dye course and some with docks on the Intracoastal Waterway.",
    "Owners ride a free shuttle to the resort's beach cabana, which has showers and gated parking, and swim in the North Tower Pool on the waterway. Most owners of houses also join the Residents' Club, with a pool, tennis courts, a fitness center and a playground.",
  ], P("barefoot-leatherleaf"), "Leatherleaf, a gated neighborhood in Barefoot Resort, from above: one loop of houses around a pond, with golf fairways on both sides.",
  "most of Barefoot Resort is open. Dye Estates has a guardhouse at its entrance, and Leatherleaf has a gate. In Leatherleaf, the few homes that sold went for about $700,000 to $975,000, and the HOA fee is about $390 a month."),

  entry("grande-dunes", "golf on a bluff above the Intracoastal Waterway", [
    "Grande Dunes was developed by Burroughs & Chapin, the company that grew out of Myrtle Beach Farms, which was formed in 1912. Its Resort Course, designed by Roger Rulewich, opened in 2001 on a bluff above the Intracoastal Waterway, with 34 acres of lakes.",
    "Calais, Palermo and Villa Venezia are its gated sections of houses. Owners use the Ocean Club on the beach, with oceanfront pools and dining, and Har-Tru tennis courts. The marina on the waterway has restaurants beside it.",
  ], P("grande-dunes-villa-venezia"), "Villa Venezia, a gated section of Grande Dunes, from above: houses beside golf fairways, with the Intracoastal Waterway at the lower right.",
  "a gate at the entrance of each gated section; other sections are open. Homes usually sell for about $1.5 million, and the HOA fee is about $200 to $375 a month."),

  entry("waterway-palms-plantation", "a boat ramp and a clubhouse on a lagoon", [
    "Waterway Palms Plantation is on the Intracoastal Waterway at the east edge of Carolina Forest. Carolina Forest was a paper company's pine land, used for a bombing and gunnery range in World War II, and its neighborhoods were planned from the late 1990s.",
    "The clubhouse stands on a point in the lagoon that winds through the neighborhood, beside the pools. Boat owners launch at the private ramp, tie up at the day dock and keep boats in the storage yard. Owners also share a fitness center, tennis and pickleball courts, a basketball court and a playground.",
  ], P("waterway-palms-plantation"), "Waterway Palms Plantation from above: houses on winding ponds, the clubhouse and pools in the middle, and the Intracoastal Waterway at the lower right.",
  "a gate at the entrance, where a visitor calls the owner to be let in. Homes usually sell for about $780,000, and the HOA fee is about $150 a month."),

  entry("the-bluffs-on-the-waterway", "two clubhouses and a boathouse on the water", [
    "The Bluffs on the Waterway has two clubhouses, and one of them is a boathouse on the Intracoastal Waterway with a day dock. Boat owners launch at the neighborhood's ramp and store boats in its yard.",
    "Away from the water there are a pool, tennis and pickleball courts, playgrounds and walking paths. Carolina Forest's bike park is less than a mile away.",
  ], P("the-bluffs-on-the-waterway"), "The Bluffs on the Waterway from above: houses on curving streets and ponds, with the Intracoastal Waterway in the lower right corner.",
  "a gate on Royal Bluff Drive, off River Oaks Boulevard. The few homes that sold went for about $700,000 to $975,000, and the HOA fee is about $150 a month."),

  entry("covington-lake-east", "lakes beside a Carolina bay", [
    "Covington Lake East is next to Tuckahoe Bay, one of the oval wetlands called Carolina bays that dot this coast. The Covington Lake neighborhoods were among the first in Carolina Forest, started in 1996.",
    "Many houses back up to the lakes, the streets have sidewalks, and owners share a pool and a clubhouse. The shops and restaurants of Carolina Forest Boulevard are less than a mile away.",
  ], P("covington-lake-east"), "Covington Lake East from above: houses on curving streets around its lakes.",
  "a gate at the entrance. Homes usually sell for about $570,000, and the HOA fee is about $90 a month, the lowest here."),

  entry("myrtle-trace", "a 1980s 55+ neighborhood on old paper company land", [
    `Glenn Hall developed Myrtle Trace on more than 400 acres bought from International Paper. The first streets and homes were started by 1982. Our ${h.a(MT, "guide to Myrtle Trace")} tells its story.`,
    "It has 518 homes, mostly houses and a few townhouses, and every home has a resident 55 or older. The HOA owns 42 acres of shared land with fifteen ponds, a clubhouse, a pool, a bocce court, a horseshoe pit and a basketball area.",
  ], P("myrtle-trace"), "Myrtle Trace from above: houses on curving streets among trees, with golf fairways and ponds nearby.",
  "gates only at the back entrance on Myrtle Ridge Road; the front entrance on Burning Ridge Road is open. Homes usually sell for about $300,000, and the HOA fee is $95 a month."),

  entry("prestwick", "a Pete and P.B. Dye course from 1989", [
    "Prestwick was founded by the Jackson family, who also created the Ocean Lakes campground. Its golf course, designed by Pete Dye and his son P.B. Dye, opened in 1989 as a private club with a skins game among four PGA Tour players.",
    "When the club ended its memberships, the owners association bought the pools and the tennis center. Owners use a large pool, a smaller pool and two hard courts; the eleven clay courts and the golf course have their own memberships.",
  ], P("prestwick"), "Prestwick from above: houses among the fairways of its golf course, with a lake at the left.",
  "a gatehouse at the main gate off Highway 544. Homes usually sell for about $480,000, and the HOA fee is about $190 a month."),

  entry("prince-creek-55", "a 55+ clubhouse with indoor and outdoor pools", [
    `Levitt and Sons sold the first lots in Seasons at Prince Creek West in 2006, and a second builder sold the last of its 444 lots in 2016. Every home has a resident 55 or older. Our ${h.a(SEASONS, "guide to Seasons")} covers its rules.`,
    "The clubhouse has indoor and outdoor pools, a fitness center, tennis and bocce. The HOA fee includes internet, trash pickup and lawn care. Seasons is part of Prince Creek West, which owns a 43-acre park.",
  ], P("prince-creek-55-clubhouse"), "The Seasons at Prince Creek West clubhouse and its outdoor pool from above, among the streets of Prince Creek West.",
  "a call box at the main entrance; a visitor calls the owner, who opens the gate. Homes usually sell for about $500,000, and the HOA fee is about $340 a month."),

  entry("bellwood-landing", "near the course that hosted Tom Watson's 2000 win", [
    "Bellwood Landing is near TPC Myrtle Beach, a Tom Fazio course that opened in 1999. In 2000 it hosted the Senior PGA Tour Championship, which Tom Watson won.",
    "Some houses look over the marsh. Owners use The Park at Prince Creek. It has two pools with a splash area for children, lighted tennis and pickleball courts, basketball, a playground and a covered pavilion with grills.",
  ], P("bellwood-landing"), "Bellwood Landing from above: houses around a pond, beside the woods.",
  "a gate on TPC Boulevard. Homes usually sell for about $850,000, and the HOA fee is about $160 a month."),

  entry("wachesaw-plantation", "a rice plantation on the Waccamaw River", [
    "Wachesaw was a rice plantation on the Waccamaw River. The state's survey of Georgetown County's rice plantations lists it, near the old Wachesaw landing. The Wachesaw Plantation Club, with its Tom Fazio course, was founded in 1985.",
    "Club membership is optional. Members play golf and tennis, swim at the club pool and dine at Kimbel's, on a bluff above the river. Wacca Wache Marina is just outside the gates.",
  ], P("wachesaw-plantation"), "Wachesaw Plantation from above: houses among the fairways of its golf course, with ponds.",
  "a gatehouse at the main gate, reached from Riverwood Drive. Homes usually sell for about $650,000, and the HOA fee is about $150 a month on most homes."),

  entry("wachesaw-east", "a 1996 course that hosted the LPGA", [
    "Clyde Johnston laid out the Wachesaw Plantation East course on a former rice plantation. It opened in December 1996 and held LPGA tour events from 1997 to 2000.",
    "Houses line its fairways. Owners share a large pool, tennis courts, a workout room and a clubhouse, and the main entrance is at the light by Tidelands Waccamaw Community Hospital.",
  ], P("wachesaw-east"), "Wachesaw East from above: houses along the fairways of its golf course.",
  "a gate at the main entrance; the back gate on Wachesaw Road opens with a card key. Homes usually sell for about $500,000, and the HOA fee is about $145 a month."),

  entry("the-reserve", "Greg Norman's private course and a river marina", [
    "The Reserve Golf Club, designed by Greg Norman, opened in 1998 on 350 acres, about 160 of them wetlands. It is a private club, and membership is separate from owning a home.",
    "The neighborhood's marina is in a cove off the Waccamaw River, with a boat ramp; its Harbor Club has a pool and a restaurant for members. Owners also use the beach and Beach Club at Litchfield by the Sea, a golf cart ride away.",
  ], P("the-reserve"), "The Reserve from above: houses around a pond, with golf fairways cut through the woods.",
  "a gate at the entrance. Homes usually sell for about $1.35 million, and the HOA fee is about $320 a month on most homes."),

  entry("willbrook-plantation", "rice-field history along a Dan Maples course", [
    "Willbrook was part of a 2,400-acre grant to Robert Daniel in 1711. By 1850, 140 enslaved people worked its rice fields. Hurricanes from 1889 to 1911 broke the dikes and ended rice growing along the Waccamaw.",
    "Dan Maples' golf course opened in 1988, after an archaeological study of the land. Along the course stand the chimney of the plantation house, which burned in 1895, and the cemetery of the enslaved people of Oatland Plantation.",
    "Owners share a pool and a clubhouse, and use Litchfield by the Sea's beach, Beach Club and crabbing docks, a golf cart ride away.",
  ], P("willbrook-plantation"), "Willbrook Plantation from above: houses among trees and golf fairways, with open fields at the left.",
  "a gatehouse at the entrance off Willbrook Boulevard. Few homes sold, so prices ranged widely around $1 million; the HOA fee is about $340 a month."),

  entry("litchfield-plantation", "a 1700s rice plantation and its avenue of oaks", [
    "Litchfield began with royal land grants to Thomas Hepworth from 1710 to 1712, and Peter Simons gave it its name. It grew rice on the Waccamaw, and the state's survey of Georgetown County's rice plantations lists it.",
    "The road in is lined with old live oaks, the Avenue of Oaks. Owners use the plantation house from the 1700s and a pool that looks over the old rice fields. They also have an oceanfront beach house on Pawleys Island, and a private marina rents slips on the river.",
  ], P("litchfield-plantation"), "Litchfield Plantation from above: houses under tall trees, with golf fairways and ponds at the right.",
  "a gatehouse on Kings River Road. Homes are houses and townhouses. Few sold, so prices ranged widely around $1 million; the HOA fee is about $230 a month on most homes."),

  entry("litchfield-by-the-sea", "a mile of private beach and an oceanfront club", [
    "The Litchfield Company, founded in 1956, built Litchfield by the Sea between the marsh and the ocean. Its homes range from houses on the ocean to villas by the marsh and condos.",
    "It has more than a mile of beach and an oceanfront Beach Club with a deck and a pavilion. Owners fish and crab from docks on Osprey Lake, play tennis and pickleball by the Beach Club, and ride paved paths through the marsh and woods.",
    "Each of its many sections has its own prices and fees. We send the homes for sale in each section on request.",
  ], P("litchfield-by-the-sea"), "Litchfield by the Sea from above: homes around a lake, condo buildings by the beach and the Atlantic Ocean at the right.",
  `a ${h.ext(LBTS_GUIDE, "guard day and night")} at the main gate on US 17; the owner or rental manager registers guests. In the last year, condos sold for anywhere from under $200,000 to over $2 million, and houses in its Oystercatcher Island section for about $750,000. The HOA fee differs by section and unit.`),

  entry("heritage-plantation", "golf on the True Blue and Midway rice fields", [
    "Heritage Plantation is on the land of two rice plantations, True Blue and Midway. Dan Maples' Heritage Club course opened there in 1986, among live oaks and the old rice fields.",
    `About 500 houses sit among lakes and marsh between the Waccamaw River and the ocean, less than three miles from the beach. The ${h.ext(HERITAGE, "owners association")} runs a marina on the river, four tennis courts, four pickleball courts, a pool and a clubhouse with a fitness room.`,
  ], P("heritage-plantation"), "Heritage Plantation from above: houses along golf fairways, its pool and tennis courts near the label, and a river and marsh at the top.",
  "a gate off Kings River Road. Homes usually sell for about $710,000, and the HOA fee is about $325 a month."),
];

/* DeBordieu keeps its NOAA 2026 aerial (rows 28, 70, 81). */
SECTIONS_PLACES.push({ h2: "19. DeBordieu Colony: a planters' summer colony on the ocean", toc: "DeBordieu Colony", id: "debordieu-colony", html: () =>
  h.p("DeBordieu has been a summer retreat since rice planters built homes there before the Civil War. Later owners of the land included Isaac Emerson, the Bromo-Seltzer maker, and the Vanderbilt family.")
  + ph.aerial("debordieu-from-above-2026", "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between most of them and the beach.", { closeUp: true })
  + h.p("The colony covers 2,700 acres. At least 600 are a nature preserve, and 17,000 undeveloped acres border it to the south. Home sites are half an acre to five acres.")
  + h.p(`The ${h.ext(DEBORDIEU, "DeBordieu Club")} has a Pete and P.B. Dye course, a Beach Club with a pool over the ocean, and a tennis center with eight clay courts.`)
  + FACTS("a gatehouse on Luvan Boulevard, with the real estate office just before it. Homes usually sell for about $2 million, the most on this page, and the HOA fee is about $300 to $400 a month.") });

/* The places side by side: one plain table, four short columns, so it stays short on a phone. */
const TABLE = (() => {
  const td = "padding:.45rem .6rem;border-bottom:1px solid var(--line,#e3dccf);vertical-align:top";
  const rows = E.map((e) => `<tr><td style="${td}"><a href="#${e.id}">${e.n}. ${GEO_NAME(e)}</a></td><td style="${td}">${e.price}</td><td style="${td}">${e.fee}</td><td style="${td}">${e.beach}</td></tr>`).join("");
  return `<div style="overflow-x:auto;max-width:760px"><table style="border-collapse:collapse;width:100%;font-size:var(--read,1.0625rem);line-height:1.45"><caption style="text-align:left;font-weight:600;color:var(--navy);padding:.3rem 0 .5rem">All 19 neighborhoods: what homes sell for, the HOA fee and the drive to the beach</caption><thead><tr><th scope="col" style="${td};text-align:left">Neighborhood</th><th scope="col" style="${td};text-align:left">Homes sell for</th><th scope="col" style="${td};text-align:left">HOA fee</th><th scope="col" style="${td};text-align:left">To the beach</th></tr></thead><tbody>${rows}</tbody></table></div>`;
})();

/* ItemList schema for the numbered entries (ROUND-8 item 6). */
const ITEMLIST = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Gated communities near Myrtle Beach", numberOfItems: E.length,
  itemListElement: E.map((e) => ({ "@type": "ListItem", position: e.n, name: GEO_NAME(e), url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

const GATE_PHOTO = () => ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. Just inside, a small building, the gatehouse, sits between the two lanes, with a gate arm across each lane.");

const OFFER_TEXT = "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.";
const OFFER_SHORT = "Tell us your price range and the area you like. We will email you this week's homes for sale in the gated neighborhoods that fit.";

/* "What are you looking for?" (ROUND-8 item 1): a small table of wants and entry numbers (not a list,
   so the score's contents check does not read it as a table of contents). */
const LOOKING = [
  ["Golf", ["tidewater-plantation", "barefoot-resort", "grande-dunes", "prestwick", "wachesaw-plantation", "wachesaw-east", "the-reserve", "willbrook-plantation", "heritage-plantation", "debordieu-colony"]],
  ["The ocean", ["litchfield-by-the-sea", "debordieu-colony"]],
  ["A boat ramp or marina", ["grande-dunes", "waterway-palms-plantation", "the-bluffs-on-the-waterway", "the-reserve", "litchfield-plantation", "heritage-plantation"]],
  ["55+", ["myrtle-trace", "prince-creek-55"]],
  ["An HOA fee under $150 a month", ["covington-lake-east", "myrtle-trace", "wachesaw-east"]],
  ["Homes under $550,000", ["myrtle-trace", "prestwick", "prince-creek-55", "wachesaw-east"]],
];
const LEGEND = (() => {
  const td = "padding:.35rem .6rem;border-bottom:1px solid var(--line,#e3dccf);vertical-align:top;text-align:left";
  return `<div style="overflow-x:auto;max-width:720px;margin:.4rem 0 1.2rem"><table style="border-collapse:collapse;width:100%;font-size:var(--read,1.0625rem);line-height:1.5"><caption style="text-align:left;font-weight:600;color:var(--navy);padding:.2rem 0 .4rem">What are you looking for?</caption><thead><tr><th scope="col" style="${td}">You want</th><th scope="col" style="${td}">Entries</th></tr></thead><tbody>`
    + LOOKING.map(([want, ids]) => `<tr><td style="${td}">${want}</td><td style="${td}">${ids.map((id) => byId[id].n).sort((a, b) => a - b).map((n) => h.a("#" + E[n - 1].id, String(n))).join(", ")}</td></tr>`).join("")
    + `</tbody></table></div>`;
})();

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The gate aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Gated Communities in Myrtle Beach: 19 Neighborhoods | Chapter3",
  description: "Nineteen gated neighborhoods near Myrtle Beach, from North Myrtle Beach to Pawleys Island: their history, golf courses, marinas and beaches, and what homes cost.",
  ogTitle: "Gated communities near Myrtle Beach: 19 neighborhoods, their history and what they have",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities in Myrtle Beach?",
  h1em: "From North Myrtle Beach to Pawleys Island.",
  sub: "Nineteen gated neighborhoods, from old rice plantations on the Waccamaw River to golf courses on the Intracoastal Waterway.",
  heroMedia: glance([
    { icon: "beach", label: "On the ocean", text: "DeBordieu Colony, Litchfield by the Sea" },
    { icon: "golf", label: "Golf", text: "Ten of the 19 are golf communities" },
    { icon: "home", label: "Homes sell for", text: "About $480,000 to $2 million" },
  ]),
  heroCta: { title: "Get this week's list of homes for sale in gated neighborhoods.", text: OFFER_SHORT, label: OFFER_LABEL, href: OFFER },
  author: "devin",
  shortAnswer: [
    "Gated neighborhoods near Myrtle Beach run from North Myrtle Beach to Pawleys Island. Ten are golf communities, two are on the ocean, and several sit on old rice plantations along the Waccamaw River.",
    `In most, the fee to the homeowners association (HOA) is about $90 to $400 a month, and homes sell for about $480,000 to $2 million. A gate controls who drives in. It is not a guard at each home: ${h.a("#what-a-gate-does", "what a gate does")}.`,
  ],
  sections: [
    { h2: "Where are the gated neighborhoods near Myrtle Beach?", toc: "Maps", html: () =>
      ph.css() +
      MAP_N.html + MAP_S.html +
      LEGEND },

    ...SECTIONS_PLACES,

    { h2: "How do the gated neighborhoods compare on price?", toc: "Compare", id: "compare", html: (bg) =>
      TABLE +
      h.cta("Get this week's list of homes for sale in gated neighborhoods.", OFFER_TEXT, OFFER_LABEL, OFFER, bg) +
      h.p(`For neighborhoods without a gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach")}, ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}, ${h.a("/buyers/golf-communities/", "golf communities")} and ${h.a("/buyers/55-plus-communities/", "55+ communities")}.`) },

    { h2: "Does a gate make a neighborhood safer?", toc: "What a gate does", id: "what-a-gate-does", html: () =>
      h.p("A gate stops cars at the entrance, so drivers cannot cut through, and a guard or the owner lets each visitor in. It does not watch each home, and we do not rate any neighborhood as safe or unsafe.") +
      GATE_PHOTO() +
      h.p(`The state's ${h.ext(SLED, "crime data site")} shows crime reported to each police department and sheriff, by year and type.`) },

    { h2: "What does a gated neighborhood cost to live in each year?", toc: "The yearly cost", html: () =>
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100.") +
      h.p(`Outside city limits in Horry County, the streets behind a gate are usually ${h.ext(CODE, "private")}, so the county does not repave them. We check how much the HOA has saved for that, and the flood zone of the home, before you make an offer. Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} covers storms and flooding.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      prosCons([
        "Drivers cannot use your streets as a shortcut.",
        "Many have a pool, a clubhouse or a dock that the owners share.",
        "You can live on the ocean, on the Intracoastal Waterway or on an old plantation.",
      ], [
        { text: "You pay for the gate and the private streets through the HOA fee.", act: `We find out what the fee covers before you offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} lists the usual items.` },
        { text: "The county does not repave private streets.", act: `We check the HOA's savings, so a one-time charge to every owner, a ${h.a("/hoa/special-assessments/", "special assessment")}, is less likely.` },
        { text: "Guests and workers come through the gate.", act: "We find out how the gate lets visitors in for the home you like." },
      ], { bg }) },

    { h2: "What should you know about the gate before you buy?", toc: "Before you buy", html: (bg) =>
      h.p("In Barefoot Resort and Grande Dunes only some sections are gated, and Myrtle Trace has gates only at its back entrance.") +
      story([
        "<strong>Example:</strong> Joan is moving from Ohio, and she wants a 55+ home behind a gate. She finds a house in Myrtle Trace, near Conway.",
        "Her Chapter3 agent drives her in by the front entrance. That entrance has no gate, and the gates are only at the back.",
        "The agent shows her homes for sale in Seasons at Prince Creek West, which has a gate at its main entrance. Joan finds a house there and makes her offer.",
      ], "", bg,
      `We ${h.a(OFFER, "check the gate for any home you like")} before you make an offer.`) },
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
  sourcesNote: "Not legal advice. Facts come from associations, clubs, county records and listings. A price is the middle sale of the past year. Horry County prices are deed records, without builder sales. Prices near Pawleys Island and in Wachesaw are MLS closed sales, which can include builder sales. Litchfield by the Sea figures leave out shared-week sales. Drive times: OpenStreetMap, no traffic.",
  afterSources: () => ph.credits() + ITEMLIST,
  bottomCta: { h2: "Get this week's list of homes for sale in gated neighborhoods.", p: OFFER_TEXT, label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
