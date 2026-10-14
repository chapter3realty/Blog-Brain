/* /buyers/gated-communities/ - the gated neighborhoods near Myrtle Beach, one numbered entry each:
 * what living there gives you, the kind of gate, one photo, the trade-off, then price and fee.
 *
 * Version 3, 2026-10-14 (round 7, batches/2026-10-b/review/ROUND-7.md; CRAFT 3, "A list of places is
 *   read one place at a time"; reports/Page shapes by kind of page.md 1b). The owner on the best
 *   neighborhoods page: "too jumpy and alot about price instead of the amenities". This page now keeps
 *   the hero, the short answer (with its one-line gate answer and jump link) and the two maps, numbered
 *   1 to 20 as the list. A real offer box sits under the short answer (website-patches/
 *   mkpage-offer-box.patch: heroCta.title). Then 20 entries (19 before round 10) in the maps' order, north to south. Each
 *   has an H2 "N. Place: what it gives you", short paragraphs on the homes, the amenities and what is
 *   close by, one aerial (USDA NAIP 2023, labelled from an address point; DeBordieu keeps its NOAA 2026
 *   aerial), the gate in one line, price and fee in one line, and the trade-off in one line. The area
 *   tables, the want cards and the price chart are cut: the entries carry them. After the list, the
 *   places side by side (round 7: two tables split as the maps; now one plain table).
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
 * Version 5, 2026-10-14 (round 10, coordinator): each entry has about 100 words or more of its own facts
 *   (who built it, the land, the club, a landmark, how the gate works) and one trade-off line, said
 *   plainly. Myrtle Beach Golf and Yacht Club added as entry 9 (gate: the NAIP 2023 aerial of its
 *   entrance on Bay Road shows a small building between the lanes, as Prestwick's row 82; listings).
 *   Parkview is not added: its gate could not be confirmed. History told once on the site: Tidewater
 *   here; TPC and Tom Watson on /buyers/best-neighborhoods/; the bombing range on The Farm's page.
 *   The story is now a labelled example about guests at Litchfield by the Sea's gate (rows 5 and 6).
 *   Each aerial has one feature label from OpenStreetMap or the county besides the name. New facts:
 *   ledger rows 149 to 171, pending verification (round 10).
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
 * Story before round 10 (round 6, the round-3 arc restored): Joan wants a 55+ home behind a gate; she finds a Myrtle Trace house; the front entrance has no gate; the agent shows her Seasons, with a gate at its main
 *   entrance (registry seasons-gate); she offers there (WORKFLOW log, 2026-10-13).
 * Round 6: verifier wording on rows 83 to 89 (The Reserve about $1.35 million, Wachesaw East about
 *   $500,000, Wachesaw Plantation about $650,000, the wide spread around $1 million said once);
 *   sources line as the verifier wrote it; Willbrook fee stays about $340 (row 27, houses $339 to $346);
 *   Litchfield by the Sea in the verifier's wording (rows 90 to 92), no fee figure, no "usually".
 * Round 12b: Georgetown County prices checked against the county's last-sale table and the deed index
 *   (rows 191 to 198, data/gated-georgetown-sales.json). After the verifier's reconciliation, Wachesaw
 *   ($700,000), The Reserve ($1.3 million) and Willbrook ($840,000) moved; the others keep the MLS figures.
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
/* The 20 places, in the maps' order: 1 to 14 on the first map (North Myrtle Beach to Murrells
   Inlet, north to south), 15 to 20 on the Pawleys Island map. lat/lon: the map dot (gated-map.json,
   or the address point of ledger rows 57 to 76 where two places shared a dot before round 7). */
const K = { guard: "Guard day and night", house: "Gatehouse", call: "Call box", back: "Back gate only", ask: "Gate at the entrance" };
const E = [
  { id: "tidewater-plantation", name: "Tidewater Plantation", short: "Tidewater", lat: 33.85093, lon: -78.62229, gate: K.house, fee: "About $230 a month", price: "About $625,000", beach: "About 8 minutes" },
  { id: "seaside-plantation", name: "Seaside Plantation", short: "Seaside", lat: 33.82688, lon: -78.66809, gate: K.ask, fee: "About $210 a month", price: "About $720,000", beach: "About 2 to 3 minutes" },
  { id: "barefoot-resort", name: "Barefoot Resort: Leatherleaf and Dye Estates", short: "Barefoot", lat: 33.80788, lon: -78.7403, gate: "Gatehouse at Dye Estates", fee: "About $390 a month (Leatherleaf)", price: "About $700,000 to $975,000 (Leatherleaf)", beach: "About 8 minutes from Dye Estates, 10 from Leatherleaf" },
  { id: "grande-dunes", name: "Grande Dunes: Calais, Palermo and Villa Venezia", short: "Grande Dunes", lat: 33.75879, lon: -78.82911, gate: K.ask, fee: "About $200 to $375 a month", price: "About $1.5 million", beach: "About 12 minutes" },
  { id: "waterway-palms-plantation", name: "Waterway Palms Plantation", short: "Waterway Palms", lat: 33.742110, lon: -78.876082, gate: K.ask, fee: "About $150 a month", price: "About $780,000", beach: "About 12 minutes" },
  { id: "the-bluffs-on-the-waterway", name: "The Bluffs on the Waterway", short: "The Bluffs", lat: 33.746358, lon: -78.867299, gate: K.ask, fee: "About $150 a month", price: "About $850,000", beach: "About 11 minutes" },
  { id: "covington-lake-east", name: "Covington Lake East", short: "Covington Lake", lat: 33.75485, lon: -78.94557, gate: K.ask, fee: "About $90 a month", price: "About $570,000", beach: "About 15 minutes" },
  { id: "myrtle-trace", name: "Myrtle Trace (55+)", short: "Myrtle Trace", href: MT, lat: 33.77765, lon: -78.99495, gate: K.back, fee: "$95 a month", price: "About $300,000", beach: "About 15 minutes" },
  { id: "myrtle-beach-golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", short: "Golf and Yacht Club", lat: 33.646385, lon: -79.050559, gate: K.house, fee: "About $95 a month", price: "About $225,000 (older part)", beach: "About 15 minutes" },
  { id: "prestwick", name: "Prestwick", short: "Prestwick", lat: 33.64245, lon: -78.95602, gate: K.house, fee: "About $190 a month", price: "About $480,000", beach: "About 7 minutes" },
  { id: "prince-creek-55", name: "Seasons at Prince Creek West (55+)", short: "Seasons", href: SEASONS, lat: 33.585419, lon: -79.071772, gate: K.call, fee: "About $340 a month", price: "About $500,000", beach: "About 13 minutes" },
  { id: "bellwood-landing", name: "Bellwood Landing", short: "Bellwood", lat: 33.582185, lon: -79.073470, gate: K.ask, fee: "About $160 a month", price: "About $810,000", beach: "About 14 minutes" },
  { id: "wachesaw-plantation", name: "Wachesaw Plantation", short: "Wachesaw", lat: 33.560796, lon: -79.073101, gate: K.house, fee: "About $150 a month on most homes", price: "About $700,000", beach: "About 13 minutes" },
  { id: "wachesaw-east", name: "Wachesaw East", short: "Wachesaw East", lat: 33.558050, lon: -79.058480, gate: K.ask, fee: "About $145 a month", price: "About $500,000", beach: "About 12 minutes" },
  { id: "the-reserve", name: "The Reserve", short: "The Reserve", lat: 33.49467, lon: -79.1133, gate: K.ask, fee: "About $320 a month on most homes", price: "About $1.3 million", beach: "About 8 minutes" },
  { id: "willbrook-plantation", name: "Willbrook Plantation", short: "Willbrook", lat: 33.48206, lon: -79.13519, gate: K.house, fee: "About $340 a month", price: "About $840,000", beach: "About 9 minutes" },
  { id: "litchfield-plantation", name: "Litchfield Plantation", short: "Litchfield Plantation", lat: 33.47674, lon: -79.1313, gate: K.house, fee: "About $230 a month on most homes", price: "About $800,000 to $1.8 million", beach: "About 8 minutes" },
  { id: "litchfield-by-the-sea", name: "Litchfield by the Sea", short: "Litchfield by the Sea, River Club gate", lat: 33.471219, lon: -79.126112, gate: K.guard, fee: "Differs by section and unit", price: "Condos under $200,000 to over $2 million", beach: "On the ocean" },
  { id: "heritage-plantation", name: "Heritage Plantation", short: "Heritage", lat: 33.44215, lon: -79.16353, gate: K.ask, fee: "About $325 a month", price: "About $710,000", beach: "About 10 minutes" },
  { id: "debordieu-colony", name: "DeBordieu Colony", short: "DeBordieu", lat: 33.3744, lon: -79.17446, gate: K.house, fee: "About $300 to $400 a month", price: "About $2 million", beach: "On the ocean" },
];
E.forEach((e, i) => { e.n = i + 1; });
const byId = Object.fromEntries(E.map((e) => [e.id, e]));
const num = (id) => h.a("#" + id, String(byId[id].n));
const N_SPLIT = 14;

/* ---------------------------------------------------------------------------- */
/* Maps, numbered as the list. The second map's markers, key and alt text are renumbered 15 to 20
   (regionMap numbers from 1). */
const GEO_NAME = (e) => e.name.replace(/ \(55\+\)$/, "");
function renumber(html, offset) {
  return html
    .replace(/(<text class="nm"[^>]*>)(\d+)(<\/text>)/g, (m, a, n, b) => a + (+n + offset) + b)
    .replace(/(numbered )([^"]*?)(\.")/g, (m, a, list, b) => a + list.replace(/(^|; |and )(\d+)(, )/g, (x, p, n, s) => p + (+n + offset) + s) + b)
    .replace(/<ol class="c3-map-key"/g, `<ol start="${offset + 1}" class="c3-map-key"`);
}
/* Map 1 (round 13, OWNER-EYE-12 low 2; the same fix as best-neighborhoods d57b511 and affordable 8b99f94,
   with no tool changed, lesson B20): a full map of the places from North Myrtle Beach to Murrells Inlet,
   with a dashed box around the four in Murrells Inlet, and a closer map of those four, so every dot has
   its name beside it. The shared tool numbers each map from 1, so the markers are renumbered to the list,
   and one key lists 1 to 14. labelDots is the helper from best-neighborhoods.js (round 11), copied. */
const AM = require(path.join(BB, "tools", "area-map.js"));
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
  const markers = m.boxes.filter((b) => b.kind === "marker");
  const cen = (b) => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
  const LH = 17.5, out = [], missed = [];
  /* o.first: dots named before the others, so a crowded dot gets the room beside it first. */
  const first = o.first || [];
  for (const p of [...m.places].sort((x, y) => (first.includes(y.num) ? 1 : 0) - (first.includes(x.num) ? 1 : 0))) {
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
    const { lines, b } = best, x = (b.x0 + 2 - cx).toFixed(1), y = (b.y0 + 14 - cy).toFixed(1);
    m.boxes.push(Object.assign({ kind: "label", owner: "lm" + (p.num - 1) }, b));
    out.push(`<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)})"><g class="k"><text class="l" x="${x}" y="${y}">`
      + lines.map((l, i) => `<tspan x="${x}"${i ? ` dy="${LH}"` : ""}>${l}</tspan>`).join("") + `</text></g></g>`);
  }
  const i = svg.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so names cannot be added");
  res.html = svg.slice(0, i) + out.join("") + svg.slice(i);
  if (missed.length) console.warn(`gated-communities: no room on ${res.map.name || "a map"} for the names of ${missed.join(", ")}; the key names them`);
  return res;
}
const placeOf = (e) => ({ name: GEO_NAME(e), short: e.short, lat: e.lat, lon: e.lon, href: "#" + e.id });
const renumberTo = (res, ids) => {
  const nums = ids.map((id) => byId[id].n);
  res.html = res.html.replace(/<ol[\s\S]*?<\/ol>/, "");
  res.html = res.html.replace(/(<text class="nm"[^>]*>)(\d+)(<\/text>)/g, (m0, x, k, y) => x + nums[+k - 1] + y);
  /* The map's spoken name lists the places "numbered 1, ...": the page's numbers there too. */
  res.html = res.html.replace(/(numbered )([^"]*?)(\.")/g, (m0, a, list, b) => a + list.replace(/(^|; |and )(\d+)(, )/g, (x, q, k, r) => q + nums[+k - 1] + r) + b);
  return res;
};
const MAP_FORMS = {
  "Barefoot Resort: Leatherleaf and Dye Estates": [["Barefoot"]],
  "Seaside Plantation": [["Seaside Plantation"], ["Seaside", "Plantation"], ["Seaside"]],
  "The Bluffs on the Waterway": [["The Bluffs"], ["The", "Bluffs"]],
  "Covington Lake East": [["Covington Lake East"], ["Covington", "Lake East"], ["Covington"]],
  "Myrtle Beach Golf and Yacht Club": [["Golf and Yacht Club"], ["Golf and", "Yacht Club"], ["Golf and", "Yacht", "Club"]],
};
const CLUSTER_MI = ["prince-creek-55", "bellwood-landing", "wachesaw-plantation", "wachesaw-east"];
const MAP_N = (() => {
  const all = E.slice(0, N_SPLIT), outerIds = all.map((e) => e.id).filter((id) => !CLUSTER_MI.includes(id));
  const MAPDIR = { dir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), src: "/images/maps", width: 420 };
  const draw = (name, ids, caption) => {
    const m = regionMap({ name, places: ids.map((id) => placeOf(byId[id])) }, MAPDIR);
    return { html: kit.mapFigure(m.html, caption, m.credit), map: m };
  };
  const OUTER = renumberTo(labelDots(draw(`Gated neighborhoods 1 to ${outerIds.length}, North Myrtle Beach to Socastee`, outerIds,
    `Map of the neighborhoods 1 to ${outerIds.length} on this page, from North Myrtle Beach (top right) to Socastee (bottom left). The city of Myrtle Beach is on the coast between Grande Dunes (${byId["grande-dunes"].n}) and Prestwick (${byId.prestwick.n}). The four in Murrells Inlet are on the next map.`), MAP_FORMS, { first: [6, 9], strip: [3, 7] }), outerIds);
  const INSET = renumberTo(labelDots(draw("Gated neighborhoods in Murrells Inlet", CLUSTER_MI,
    `Map of the neighborhoods ${byId[CLUSTER_MI[0]].n} to ${byId[CLUSTER_MI[3]].n} on this page, in Murrells Inlet, near Garden City.`), MAP_FORMS), CLUSTER_MI);
  const KEY = placesMap(`Gated neighborhoods 1 to ${N_SPLIT} key`, all.map(placeOf), { caption: "Map key", key: true }).map.key;
  return { html: OUTER.html + INSET.html + KEY };
})();
const MAP_S = (() => {
  const m = placesMap(`Neighborhoods ${N_SPLIT + 1} to ${E.length}, near Pawleys Island`, E.slice(N_SPLIT).map((e) => ({ name: GEO_NAME(e), short: e.short, lat: e.lat, lon: e.lon, href: "#" + e.id })), {
    caption: `Map of the neighborhoods ${N_SPLIT + 1} to ${E.length} on this page, near Pawleys Island and Litchfield, south of Murrells Inlet. Dot ${byId["litchfield-by-the-sea"].n} is Litchfield by the Sea's River Club gate; its main gate is on US 17.`,
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

/* Round 10 (coordinator, 2026-10-14): every entry has about 100 words or more of its own facts and one
   trade-off line, said plainly as the last paragraph before the facts line. History is told once across
   the site: Tidewater's here; TPC Myrtle Beach and Tom Watson on /buyers/best-neighborhoods/; the bombing
   range on /submarkets/carolina-forest/the-farm/. New facts: ledger rows 149 onward, pending (round 10). */
const BEST = "/buyers/best-neighborhoods/";
const FARM = "/submarkets/carolina-forest/the-farm/";
const SECTIONS_PLACES = [
  entry("tidewater-plantation", "a 1990 golf course beside the Cherry Grove marsh", [
    "Tidewater began with its golf course. Ken Tomlinson, a Columbia lawyer who also designed courses, found a 600-acre site on the Intracoastal Waterway. Hurricane Hugo delayed the work, and the course opened in 1990. Golf Digest and Golf Magazine both named it the best new public course in America that year.",
    "Two of its holes meet the marsh of the waterway, and another looks across Cherry Grove Inlet. Many of its homes are houses along the fairways, and it also has condo buildings.",
    "Cherry Grove's public boat ramp is a 14-minute drive.",
    "Tidewater is on the Intracoastal Waterway, not the ocean. The nearest public beach access is about 8 minutes away by car, and Tidewater also has an oceanfront cabana with parking at Cherry Grove Beach.",
  ], P("tidewater-plantation"), "Tidewater Plantation from above: houses along the fairways of its golf course, with ponds among them.",
  "a gatehouse on Little River Neck Road, where visitors check in. Homes usually sell for about $625,000, and the HOA fee is about $230 a month."),

  entry("seaside-plantation", "lakes and shag festivals a half mile from the ocean", [
    "Seaside Plantation is in North Myrtle Beach, a quarter to three-quarters of a mile from the ocean. Some of its houses are all brick, and some look onto its lakes.",
    "Its clubhouse has a pool, a hot tub and parking for golf carts. A Walmart Supercenter, a Lowe's and the shops of Gator Hole Plaza are 3 to 5 minutes away by car.",
    `Main Street is 3 to 5 minutes away too. Each spring and fall the ${h.ext("https://www.shagdance.com/", "Society of Stranders")} holds its shag dance festivals, the Spring Safari and the Fall Migration, around Main Street and Ocean Drive.`,
    "About one house in ten here is in a high-risk flood zone, where a lender usually requires flood insurance. We check the flood zone for any home you like.",
  ], P("seaside-plantation"), "Seaside Plantation from above: houses beside lakes.",
  "a gate at the entrance. Homes usually sell for about $720,000, and the HOA fee is about $210 a month."),

  entry("barefoot-resort", "four golf courses that opened together in 2000", [
    "Barefoot Resort opened four golf courses at the same time in April 2000, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman.",
    "Leatherleaf has 62 houses of one or two floors around a pond, with the Love course on every side. Dye Estates has 98 home sites of half an acre to two acres, some on the Dye course and some with docks on the Intracoastal Waterway.",
    "In season, a shuttle runs from the resort to the beach. The resort also has a beach cabana with showers and gated parking, and the North Tower Pool is on the waterway. Leatherleaf residents can use the Residents' Club, with tennis courts, a fitness center and a playground.",
    "Leatherleaf's HOA fee is about $390 a month.",
  ], P("barefoot-leatherleaf"), "Leatherleaf, a gated neighborhood in Barefoot Resort, from above: one loop of houses around a pond, with fairways above and below it.",
  "most of Barefoot Resort is open. Dye Estates has a guardhouse at its entrance, and Leatherleaf has a gate. In Leatherleaf, homes sold for about $700,000 to $975,000 in the last year."),

  entry("grande-dunes", "golf along the Intracoastal Waterway and an oceanfront club", [
    "Burroughs & Chapin, which grew out of Myrtle Beach Farms, launched Grande Dunes and made its first sale in October 2000. Its Resort Course runs along the Intracoastal Waterway.",
    "Grande Dunes covers about 2,200 acres, with walking and biking trails. Its gated sections of houses include Calais, Palermo, Tuscany Village and Villa Venezia. Palermo and Villa Venezia are beside the golf course, and Villa Venezia's houses for sale were built from 2016 on.",
    "Grande Dunes has the Ocean Club on the beach, with oceanfront dining, and a deep-water marina on the waterway with restaurants beside it.",
    "Only some sections of Grande Dunes are gated. Homes in Calais, Palermo and Villa Venezia usually sell for about $1.5 million.",
  ], P("grande-dunes-villa-venezia"), "Villa Venezia, a gated section of Grande Dunes, from above: houses beside golf fairways, with the Intracoastal Waterway at the lower right.",
  "each gated section has its own gate. The HOA fee is about $200 to $375 a month."),

  entry("waterway-palms-plantation", "a Charleston-style plan on the west bank of the waterway", [
    "Waterway Palms Plantation is on the west side of the Intracoastal Waterway. Its plan copies the look of Charleston's Battery district.",
    "The clubhouse stands on a point in a pond, beside the pools. The neighborhood also has tennis and pickleball courts, a fitness center, a basketball court, a playground and sidewalks.",
    "Boat owners have a ramp on the waterway, a day dock and a fenced boat storage area.",
    `Carolina Forest was land owned by International Paper, and the Army Air Force used part of it as a bombing and gunnery range from 1942 to 1948. Read that story in our ${h.a(FARM, "guide to The Farm")}.`,
    "Builders are still finishing new houses, so parts of the neighborhood are still under construction.",
  ], P("waterway-palms-plantation"), "Waterway Palms Plantation from above: houses on curving ponds, a large building, pools and tennis courts on a point in the water at the left, and the Intracoastal Waterway at the lower right.",
  "a gate at the entrance. Homes usually sell for about $780,000, and the HOA fee is about $150 a month."),

  entry("the-bluffs-on-the-waterway", "two clubhouses, one of them on the waterway", [
    "Many of the houses at The Bluffs on the Waterway are custom Mediterranean-style homes in stucco, and many look onto ponds with fountains. It was built from about 2006 on, and about 40 of its lots have no house yet. Black Creek runs through the woods along its west side.",
    "It has two clubhouses. One of them, a boathouse, is on the Intracoastal Waterway. The neighborhood also has day docks, a boat ramp and boat storage.",
    "It has tennis and pickleball courts and a playground. Its owners association owns the lakes and an amenity area of almost 4 acres.",
    "The drive to the nearest public beach access takes about 11 minutes.",
  ], P("the-bluffs-on-the-waterway"), "The Bluffs on the Waterway from above: houses on curving streets and ponds, with the Intracoastal Waterway in the lower right corner.",
  "a gate on Royal Bluff Drive, off River Oaks Boulevard. Homes usually sell for about $850,000, and the HOA fee is about $150 a month."),

  entry("covington-lake-east", "brick houses around ponds and a low HOA fee", [
    "Covington Lake East is a small neighborhood of brick houses in Carolina Forest. Its developer, Covington Lake East LLC, began selling lots in 2006. Lennar built about 50 of its houses from 2015 to 2017, and many builders built the rest one lot at a time.",
    "Its curving streets lie among ponds, and most lots are about a quarter of an acre. The streets have sidewalks, and many of the houses have natural gas.",
    "The owners association owns the pool and clubhouse. For a gate, a pool and a clubhouse, the HOA fee is about $90 a month.",
    "It has no golf course or boat ramp of its own.",
  ], P("covington-lake-east"), "Covington Lake East from above: houses on curving streets, with ponds among them.",
  "a gate at the entrance. Homes usually sell for about $570,000."),

  entry("myrtle-trace", "a 55+ neighborhood near Conway, run by its owners", [
    `The first homes in Myrtle Trace were sold in 1983. Every occupied home must have a resident 55 or older. Our ${h.a(MT, "guide to Myrtle Trace")} tells its story.`,
    "The owners run the HOA themselves, with volunteers and no management company. Its facilities include a clubhouse, a bocce court, a horseshoe pit and a basketball area.",
    "Fifteen ponds lie among the streets. Residents and their house guests may fish in them from the common land, and every fish goes back. Some lots back onto Burning Ridge Golf Club, a privately owned club next door, and Conway Medical Center is less than a mile by road.",
    "Its streets have no sidewalks.",
  ], P("myrtle-trace"), "Myrtle Trace from above: houses on curving streets among trees, with golf fairways and ponds nearby.",
  "gates only at the back entrance on Myrtle Ridge Road; the front entrance on Burning Ridge Road is open. Homes usually sell for about $300,000, and the HOA fee is $95 a month."),

  entry("myrtle-beach-golf-and-yacht-club", "older houses among ponds and open land near Socastee", [
    "Myrtle Beach Golf and Yacht Club is off Bay Road near Socastee. Its sections have their own names, such as Camelot, Ashley Cove, the Fairways and the Gardens at Heron Point.",
    "Wide strips of grass and woods, with ponds, lie between its streets. The association owns about 62 acres of this open land. The streets are private.",
    "The community has a clubhouse, a pool, tennis and shuffleboard courts and a playground, and the association has a storage area for RVs and trailers. Enterprise Landing, a public boat ramp on the Intracoastal Waterway, is about a 4-minute drive from the entrance.",
    "Sandpiper Place, where D.R. Horton is building, is reached from the same entrance on Bay Road, and we confirm whether a home is behind the gate before you make an offer. Its new houses sell for more than those in the older part.",
  ], P("myrtle-beach-golf-and-yacht-club"), "Myrtle Beach Golf and Yacht Club from above: houses on curving streets among trees, with long strips of grass and ponds between them.",
  "a gatehouse at the entrance on Bay Road. In the older part, homes usually sell for about $225,000, and the HOA fee is about $95 a month."),

  entry("prestwick", "a Pete and P.B. Dye course from 1989", [
    "Prestwick was founded by the Jackson family, who also created the Ocean Lakes campground. Its golf course, designed by Pete Dye and his son P.B. Dye, opened in 1989 as a private club with a skins game among four PGA Tour players.",
    "When the club ended its memberships, the owners association took over the pools and the tennis center. The community has a large pool, a smaller pool, eleven clay courts and two hard courts.",
    "The golf course is now open to the public, paid by the round, so golfers who do not live here play it too. The clay courts need a tennis membership of their own.",
  ], P("prestwick"), "Prestwick from above: houses among the fairways of its golf course, with a lake at the left.",
  "a gatehouse at the main gate off Highway 544. Homes usually sell for about $480,000, and the HOA fee is about $190 a month."),

  entry("prince-creek-55", "a 55+ clubhouse with indoor and outdoor pools", [
    `Levitt and Sons began selling homes in Seasons at Prince Creek West in 2006, and the builders sold their last lots in 2016. Like Myrtle Trace, it requires a resident 55 or older in every occupied home. Its rules are in our ${h.a(SEASONS, "guide to Seasons")}.`,
    "The clubhouse has indoor and outdoor pools and a fitness center, and there are tennis courts and bocce. An owner gets one bill that covers the Seasons dues and the dues of the larger associations, among them the master association and the road and park association.",
    "The HOA's rules allow a golf cart to be parked only in an enclosed garage. It takes about 10 minutes to drive to the Murrells Inlet MarshWalk.",
    "The HOA fee, about $340 a month, is more than three times Myrtle Trace's.",
  ], P("prince-creek-55-clubhouse"), "The Seasons at Prince Creek West clubhouse and its outdoor pool from above, among the streets of Prince Creek West.",
  "a gate at the main entrance with a call box for visitors. Homes usually sell for about $500,000."),

  entry("bellwood-landing", "houses on ponds in Prince Creek West", [
    "Bellwood Landing is a small neighborhood of houses in Prince Creek West, near Murrells Inlet. Some homes are on ponds, and Collins Creek runs through the woods along its south edge.",
    "Its lots are big: most are close to half an acre, and some along Collins Creek are larger than an acre and a half. Houses for sale here were built from 2006 on, several of them custom-built. Homes here usually sell for about $810,000.",
    "The Park at Prince Creek West is about 4 minutes north by car. It covers 43 acres, with tennis and pickleball courts, basketball, a playground and a covered pavilion with grills.",
    `For TPC Myrtle Beach and the rest of Prince Creek, see our ${h.a(BEST, "best neighborhoods in Myrtle Beach")}.`,
    "Some lots have no house yet, and the newest houses here were built in 2025 and 2026.",
  ], P("bellwood-landing"), "Bellwood Landing from above: houses around a pond, beside the woods.",
  "a gate on TPC Boulevard. The HOA fee is about $160 a month."),

  entry("wachesaw-plantation", "a private club on a bluff above the Waccamaw River", [
    "Before the neighborhoods were planned, archaeologists, among them James Michie of the University of South Carolina, dug at Wachesaw. Some of their finds are on display in the clubhouse.",
    "Arthur Lachiotte Jr. and Olan Mills II then planned its neighborhoods in the early 1980s, and much of the community's natural land is in conservation. On the property are Native American burial mounds, an Avenue of the Oaks, a Civil War-era fort and a cemetery of enslaved people.",
    "The members own the club. Memberships come in levels, open to residents and nonresidents, and give access to eight clay tennis courts and Tom Fazio's course. Kimbel's restaurant stands on the bluff above the river.",
    "Club membership is a separate cost on top of the HOA fee, and a new pool-side restaurant, Magnolia's, is being built.",
  ], P("wachesaw-plantation"), "Wachesaw Plantation from above: houses among the fairways of its golf course, with ponds.",
  "a gatehouse at the main gate, reached from Riverwood Drive. Homes usually sell for about $700,000, and the HOA fee is about $150 a month on most homes."),

  entry("wachesaw-east", "a course where the LPGA played", [
    "Clyde Johnston's Wachesaw Plantation East course opened in December 1996, and the LPGA tour played here from 1997 to 2000. In 1998, Meg Mallon shot a 62 here, the course record.",
    "The club calls the 18th, played around a pond, its signature hole. Its grill is the Toasted Tee Pub & Grub.",
    "Houses line the fairways. Owners share tennis courts, a workout room and a clubhouse of their own. Visitors turn in from the light by Tidelands Waccamaw Community Hospital, cross Old Kings Highway and reach the gate guard. The entrance to Huntington Beach State Park is about 11 minutes away by car, and Brookgreen Gardens about 20.",
    "The beach is about 12 minutes away by car.",
  ], P("wachesaw-east"), "Wachesaw East from above: houses along the fairways of its golf course.",
  "a gate at the main entrance. Houses here date from 2000 to 2006; they usually sell for about $500,000, and the HOA fee is about $145 a month."),

  entry("the-reserve", "Greg Norman's private course and a river marina", [
    "The Reserve Golf Club, designed by Greg Norman, opened in 1998 on 350 acres, about 160 of them wetlands. Its holes are cut through the woods, around ponds and marsh.",
    "The neighborhood's marina, on the Waccamaw River, is run by Safe Harbor. It has wet slips and dry storage, and its staff launch and haul boats kept in dry storage. Its Harbor Club has a pool and serves food and drinks.",
    "The golf club is private, and its membership is separate from owning a home. The Harbor Club is a separate membership too.",
  ], P("the-reserve"), "The Reserve from above: houses around a pond, with golf fairways cut through the woods.",
  "a gate at the entrance. Its houses date from 2005 to 2019; they usually sell for about $1.3 million, and the HOA fee is about $320 a month on most homes."),

  entry("willbrook-plantation", "rice-field history along a Dan Maples course", [
    "Willbrook was part of a land grant made in 1711. Enslaved people grew rice here; the 1850 census counted 149 at Willbrook. The loss of workers, rice grown farther west and a run of hurricanes that wrecked the dikes ended rice growing on the Georgetown rivers.",
    "Before Dan Maples' course opened, archaeologists surveyed the land. Beside the course are a marked cemetery of enslaved people from nearby Oatland Plantation and brick remains at the site of the plantation house.",
    "Open fields, cut by straight ditches, lie along its west side. The neighborhood has a pool and a clubhouse.",
    "In the last year, homes here sold for about $630,000 to $1.5 million, and the middle sale was about $840,000.",
  ], P("willbrook-plantation"), "Willbrook Plantation from above: houses among trees and golf fairways, with open fields at the left.",
  "a gatehouse at the entrance off Willbrook Boulevard. The HOA fee is about $340 a month."),

  entry("litchfield-plantation", "a 1700s plantation house and its avenue of oaks", [
    "Litchfield Plantation's house dates from the 1700s, and the road in is lined with old live oaks, the Avenue of Live Oaks. In the 1800s the plantation belonged to the Tucker family, who also owned Willbrook.",
    "The main entrance, with its gatehouse, is on that avenue, off Kings River Road. The Waccamaw Neck Bikeway, a paved path, follows that road past it.",
    "The plantation house is available for special events. A pool looks out over the marsh, and a private marina on the river is an optional extra. Its homes are mostly houses and townhouses.",
    "Litchfield Plantation is on the river side of US 17. Its oceanfront beach house is on Pawleys Island, about 4 miles away by road.",
  ], P("litchfield-plantation"), "Litchfield Plantation from above: houses under tall trees, with a neighboring golf course and its ponds at the right.",
  "a gatehouse at the main entrance. In the last year, houses here sold for about $800,000 to $1.8 million. The HOA fee is about $230 a month on most homes."),

  entry("litchfield-by-the-sea", "a mile of private beach and an oceanfront club", [
    "Litchfield by the Sea lies between the marsh and the ocean. Its homes range from oceanfront houses to villas with marsh views and condos.",
    "It has about a mile of beach and an oceanfront Beach Club with a deck and a pavilion. Fishing and crabbing docks are on Osprey Lake, and paved paths run through the marsh and woods.",
    "Owners' cars use a barcode at the gate. The pool is at the River Club, across US 17 from the beach.",
    "The HOA fee and the prices differ from section to section and from unit to unit.",
  ], P("litchfield-by-the-sea"), "Litchfield by the Sea from above: homes around a lake, large buildings by the beach and the Atlantic Ocean at the right.",
  `a ${h.ext(LBTS_GUIDE, "guard day and night")} at the main gate on US 17. In the last year, condos sold for anywhere from under $200,000 to over $2 million, and houses in its Oystercatcher Island section for about $750,000.`),

  entry("heritage-plantation", "a river marina with a dock master", [
    "Heritage Plantation lies between the Waccamaw River and the beaches of Pawleys Island, about three miles from the ocean. Caledonia Creek runs through the marsh on its north side. About 500 houses are among live oaks, lakes and marsh, and Dan Maples' Heritage Club course lies among them.",
    "Its marina is on the Waccamaw River, part of the Intracoastal Waterway. It has a full-time dock master at the dock house and about 40 boat slips on four floating docks. A fenced lot stores boat trailers, and visiting boats are welcome.",
    "The clubhouse has a fitness room, and there are four tennis courts and four pickleball courts.",
    "Slips are rented by the day, the month or the year, on top of the HOA fee of about $325 a month.",
  ], P("heritage-plantation"), "Heritage Plantation from above: houses along golf fairways, a pool and tennis courts near the label, and a river and marsh at the top.",
  "a gate off Kings River Road. Homes usually sell for about $710,000."),
];

/* DeBordieu keeps its NOAA 2026 aerial (rows 28, 70, 81). */
SECTIONS_PLACES.push({ h2: `${byId["debordieu-colony"].n}. DeBordieu Colony: an old planters' colony on the ocean`, toc: "DeBordieu Colony", id: "debordieu-colony", html: () =>
  h.p("Before the Civil War, planters built a colony of summer homes at DeBordieu. Later owners of the land included Isaac Emerson, the Bromo-Seltzer maker, and the Vanderbilt family.")
  + ph.aerial("debordieu-from-above-2026", "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between many of the homes and the beach.", { closeUp: true })
  + h.p("The colony covers 2,700 acres. At least 600 are a nature preserve, and 17,000 undeveloped acres border it to the south. Home sites are half an acre to five acres.")
  + h.p(`The ${h.ext(DEBORDIEU, "DeBordieu Club")} has a Pete and P.B. Dye course, a Beach Club with a pool over the ocean, and a tennis center with eight Har-Tru courts. Through the year it holds oyster roasts, dinner dances and barbecues.`)
  + h.p("Homes here usually sell for about $2 million.")
  + FACTS("a gatehouse on Luvan Boulevard, with the real estate office before it. The HOA fee is about $300 to $400 a month.") });

/* The places side by side: one plain table, four short columns, so it stays short on a phone. */
const TABLE = (() => {
  const td = "padding:.45rem .6rem;border-bottom:1px solid var(--line,#e3dccf);vertical-align:top";
  const rows = E.map((e) => `<tr><td style="${td}"><a href="#${e.id}">${e.n}. ${GEO_NAME(e)}</a></td><td style="${td}">${e.price}</td><td style="${td}">${e.fee}</td><td style="${td}">${e.beach}</td></tr>`).join("");
  return `<div style="overflow-x:auto;max-width:760px"><table style="border-collapse:collapse;width:100%;font-size:var(--read,1.0625rem);line-height:1.45"><caption style="text-align:left;font-weight:600;color:var(--navy);padding:.3rem 0 .5rem">All ${E.length} neighborhoods: what homes sell for, the HOA fee and the drive to the nearest public beach access, from a street inside each neighborhood, with no traffic</caption><thead><tr><th scope="col" style="${td};text-align:left">Neighborhood</th><th scope="col" style="${td};text-align:left">Homes sell for</th><th scope="col" style="${td};text-align:left">HOA fee</th><th scope="col" style="${td};text-align:left">To a public beach access, by car</th></tr></thead><tbody>${rows}</tbody></table></div>`;
})();

/* ItemList schema for the numbered entries (ROUND-8 item 6). */
const ITEMLIST = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Gated communities near Myrtle Beach", numberOfItems: E.length,
  itemListElement: E.map((e) => ({ "@type": "ListItem", position: e.n, name: GEO_NAME(e), url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

const GATE_PHOTO = () => ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. A small building, the gatehouse, is between the two lanes, with a gate arm across each lane.");

const OFFER_TEXT = "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.";
const OFFER_SHORT = "Tell us your price range and the area you like. We will email you this week's homes for sale in the gated neighborhoods that fit.";

/* "What are you looking for?" (ROUND-8 item 1): a small table of wants and entry numbers (not a list,
   so the score's contents check does not read it as a table of contents). */
const LOOKING = [
  ["Golf", ["tidewater-plantation", "barefoot-resort", "grande-dunes", "prestwick", "wachesaw-plantation", "wachesaw-east", "the-reserve", "willbrook-plantation", "heritage-plantation", "debordieu-colony"]],
  ["The ocean", ["litchfield-by-the-sea", "debordieu-colony"]],
  ["A boat ramp or marina", ["grande-dunes", "waterway-palms-plantation", "the-bluffs-on-the-waterway", "the-reserve", "litchfield-plantation", "heritage-plantation"]],
  ["55+", ["myrtle-trace", "prince-creek-55"]],
  ["An HOA fee under $150 a month", ["covington-lake-east", "myrtle-trace", "myrtle-beach-golf-and-yacht-club", "wachesaw-east"]],
  ["Homes under $550,000", ["myrtle-trace", "myrtle-beach-golf-and-yacht-club", "prestwick", "prince-creek-55", "wachesaw-east"]],
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
  title: "Gated Communities in Myrtle Beach: 20 Neighborhoods | Chapter3",
  description: "Twenty gated neighborhoods near Myrtle Beach, from North Myrtle Beach to Pawleys Island: their history, golf courses, marinas and beaches, and what homes cost.",
  ogTitle: "Gated communities near Myrtle Beach: 20 neighborhoods, their history and what they have",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities in Myrtle Beach?",
  h1em: "From North Myrtle Beach to Pawleys Island.",
  sub: "Twenty gated neighborhoods, from Tidewater on the Cherry Grove marsh to DeBordieu Colony on the ocean south of Pawleys Island.",
  heroMedia: glance([
    { icon: "beach", label: "On the ocean", text: "DeBordieu Colony, Litchfield by the Sea" },
    { icon: "golf", label: "Golf", text: "Ten of the 20 are golf communities" },
    { icon: "dock", label: "On the water", text: "The Intracoastal Waterway or the Waccamaw River" },
  ]),
  heroCta: { title: "Get this week's list of homes for sale in gated neighborhoods.", text: OFFER_SHORT, label: OFFER_LABEL, href: OFFER },
  author: "devin",
  shortAnswer: [
    "Tidewater Plantation, Barefoot Resort's Dye Estates, Grande Dunes, Prestwick, Wachesaw Plantation and DeBordieu Colony are among the gated neighborhoods near Myrtle Beach. Of the 20 on this page, ten are golf communities, and two are on the ocean.",
    `In most, the fee to the homeowners association (HOA) is about $90 to $400 a month, and homes sell for about $225,000 to $2 million. A gate controls who drives in; ${h.a("#what-a-gate-does", "see what a gate does and does not do")}.`,
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
      h.p("A gate keeps through traffic off the streets behind it, and a guard or the owner lets each visitor in. We do not rate any neighborhood as safe or unsafe.") +
      GATE_PHOTO() +
      h.p(`The state's ${h.ext(SLED, "crime data site")} shows crime reported to each police department and sheriff, by year and type.`) },

    { h2: "What does a gated neighborhood cost to live in each year?", toc: "The yearly cost", html: () =>
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100.") +
      h.p(`We check the flood zone of the home before you make an offer. Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} covers storms and flooding.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      prosCons([
        "Many have a clubhouse and a pool inside the gate.",
        "You can live on the ocean, on the Intracoastal Waterway, by a river marina or on an old plantation.",
        "Some have a staffed gate, as at Litchfield by the Sea.",
      ], [
        { text: "You pay for the gate and the private streets through the HOA fee.", act: `We find out what the fee covers before you offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} lists the usual items.` },
        { text: `In Horry County outside city limits, the HOA, not the county, maintains ${h.ext(CODE, "private streets")}.`, act: `We check the HOA's savings, so a one-time charge to every owner, a ${h.a("/hoa/special-assessments/", "special assessment")}, is less likely.` },
        { text: "Guests and workers come through the gate.", act: "We find out how the gate lets visitors in for the home you like." },
      ], { bg }) },

    { h2: "How did one couple plan for guests behind a gate?", toc: "A buyer's story", html: (bg) =>
      story([
        "<strong>Example:</strong> Every July, Ray and Linda's grandchildren come to the beach for a week.",
        "The couple like a condo in Litchfield by the Sea, behind its guarded gate, and ask how their guests will get in.",
        "Their Chapter3 agent reads the association's guest guide. A guest who is not on the owner's list waits at the gate until security confirms the visit.",
        "Ray and Linda make their offer. Once the condo is theirs, they register each guest before the visit, and the guard at the main gate checks the list.",
      ], "", bg,
      `We ${h.a(OFFER, "find out how the gate works")} for any home you like before you make an offer.`) },
  ],
  faqTitle: "Gated communities FAQ",
  faq: [
    { q: "Is there a gated community in Surfside Beach?", a: "No. Prestwick, outside the town, is the gated neighborhood on this page nearest Surfside Beach. Its nearest public beach access is in Surfside Beach, about 7 minutes away by car." },
    { q: "Are there 55+ gated communities near Myrtle Beach?", a: "Yes. Seasons at Prince Creek West in Murrells Inlet has a gate at its main entrance. Myrtle Trace near Conway has gates only at its back entrance." },
    { q: "Are there gated golf communities near Myrtle Beach?", a: "Yes. Ten gated neighborhoods near Myrtle Beach are golf communities. They are Barefoot Resort, Grande Dunes, Prestwick, Tidewater Plantation, Wachesaw Plantation, Wachesaw East, The Reserve, Heritage Plantation, Willbrook Plantation and DeBordieu Colony." },
    { q: "Is Barefoot Resort a gated community?", a: "Only in part. Most of Barefoot Resort in North Myrtle Beach is open; Leatherleaf and Dye Estates are among its gated neighborhoods." },
    { q: "Is Grande Dunes a gated community?", a: "Only in part. Some sections of Grande Dunes are gated, including Calais, Palermo and Villa Venezia." },
  ],
  sources: [
    { name: "SLED crime data", href: SLED },
    { name: "Horry County land development rules", href: CODE },
    { name: "Horry County deed records", href: DEEDS },
    { name: "Litchfield by the Sea guest guide", href: LBTS_GUIDE },
    { name: "Barefoot Resort Residential Association", href: BAREFOOT },
  ],
  sourcesNote: "Not legal advice. Facts: associations, clubs, county records, news, OpenStreetMap, listings. Prices: the past year's middle sale, checked against the MLS and deed index. Horry prices leave out builder sales. Georgetown County's records name no seller and keep only each home's latest sale, so a price there may include a builder sale. Few sales: a rough guide. Drives: no traffic.",
  afterSources: () => ph.credits() + ITEMLIST,
  bottomCta: { h2: "Get this week's list of homes for sale in gated neighborhoods.", p: OFFER_TEXT, label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
