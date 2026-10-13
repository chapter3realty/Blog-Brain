/* /buyers/gated-communities/ - which neighborhoods near Myrtle Beach have a gate, by area, what the
 * gate does and does not do, what the HOA fee pays for, and what homes usually sell for.
 *
 * Version 2, 2026-10-13 (round 2, batches/2026-10-b/review/ROUND-2.md and BUYER-READ-gated-communities.md).
 *   Blocker fixed: "Does a gate make a neighborhood safer?" is the first section: what a gate does,
 *   who is at the gate (five kinds, one term each, everywhere on the page), what it does not do,
 *   no rating, and the official public sources for reported crime (rows 77, 78, pending).
 *   What the HOA fee pays for, with the yearly cost for two neighborhoods; on the ocean or not
 *   (rows 79 to 81, pending); one price range everywhere ($480,000 to $1.5 million, the chart's
 *   ends); Myrtle Trace only with its back-gate caveat in the same line; Seasons in the table;
 *   two maps (the Pawleys Island neighborhoods on their own map, so no two dots hide each other);
 *   a labelled NOAA aerial of a gatehouse (row 82, pending); the plain word for every term the
 *   reader had to guess; fees rounded; the HOA's care of the gate and streets said once.
 * Version 2b, 2026-10-13: the verifier's notes on rows 77 to 82 (crime line by agency, year and type; no
 *   calls map; the Prestwick building and the Gatehouse card make no staffing claim; Beach Club wording;
 *   'main entrance gates'; guests registered by the owner or rental manager; the two ocean places named).
 * Version 1, 2026-10-13.
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
 * Story: the labelled example (Joan, Myrtle Trace's open front entrance, Seasons' gate), kept.
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

/* Sources, opened by the researcher and re-opened by the verifier (rows 77 to 82: pending). */
const CODE = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_CH18LADERE";
const LBTS_GUIDE = "https://litchfieldbythesea.com/wp-content/uploads/2026/06/LBTS-Guest-Orientation-Guide-2026-Long-Version.pdf";
const LBTS_FAQ = "https://litchfieldbythesea.com/resources/";
const BAREFOOT = "https://www.barefoothoa.com/single-family-neighborhoods/";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const BEACH = "https://gis.des.sc.gov/beachaccess/";
const SLED = "https://www.sled.sc.gov/sc-crime-data";

/* ---------------------------------------------------------------------------- */
/* Maps: the coast from North Myrtle Beach to Murrells Inlet, then the Pawleys Island
   neighborhoods on their own map (seven dots there sat on top of each other on one map). */
const AREA = { "north-myrtle-beach": "#table-north-myrtle-beach", "myrtle-beach": "#table-myrtle-beach",
  "murrells-inlet": "#table-murrells-inlet", "pawleys-island": "#table-pawleys-island" };
const table = (id, html) => `<div id="${id}">${html}</div>`;
const G = data("gated-map.json");
const SHORT = { "Waterway Palms, The Bluffs": "Waterway Palms", "Seasons, Bellwood": "Seasons" };
/* The first map is drawn 420 units wide (page-kit's placesMap draws 360): at 360 two dots had no
   room for their names (round 3). It is the same regionMap, scaled to the column. */
const MAP_N = (() => {
  const m = regionMap({ name: "Neighborhoods with a gate, North Myrtle Beach to Murrells Inlet",
    places: G.places.filter((p) => p.area !== "pawleys-island").map((p) => ({ name: p.name, short: SHORT[p.short] || p.short, lat: p.lat, lon: p.lon, href: AREA[p.area] })) },
    { dir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), src: "/images/maps", width: 420 });
  if (m.unlabelled.length) throw new Error(`map: no name beside ${m.unlabelled.join(", ")}`);
  /* "Myrtle Beach" has no free spot near its own town point on this map (the nearest free spot is by
     Prestwick, which would mislead), so the caption says where the city is (round 4). */
  return { html: kit.mapFigure(m.html, "Map of neighborhoods with a gate from North Myrtle Beach (top right) to Murrells Inlet (bottom left). The city of Myrtle Beach is on the coast between Grande Dunes (4) and Prestwick (8).", m.credit) + m.key };
})();
const MAP_S = placesMap("Gated neighborhoods near Pawleys Island", G.pawleys.map((p) => ({ name: p.name, short: p.short, lat: p.lat, lon: p.lon, href: AREA["pawleys-island"] })), {
  caption: "Map of neighborhoods with a gate near Pawleys Island and Litchfield, south of Murrells Inlet.",
});
addTown(MAP_S, "Pawleys Island");

/* The price chart: the eight gated neighborhoods with a typical price, lowest to highest, from
   gated-map.json "prices". 330 units wide, so the names show at about 16 px on a phone. */
function priceChart() {
  const rows = G.prices.rows.slice().sort((a, b) => a.value - b.value);
  const W = 330, RH = 47, TOP = 6, MAXW = 235, max = Math.max(...rows.map((r) => r.value));
  const money = (v) => v >= 1e6 ? `$${(v / 1e6).toFixed(1).replace(/\.0$/, "")} million` : `$${v.toLocaleString("en-US")}`;
  const H = TOP + rows.length * RH;
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const label = `Bar chart of what homes usually sell for in ${rows.length} gated neighborhoods near Myrtle Beach, lowest to highest: `
    + rows.map((r) => `${r.name}, about ${money(r.value)}`).join("; ") + ".";
  const bars = rows.map((r, i) => {
    const y = TOP + i * RH, w = Math.max(6, Math.round(r.value / max * MAXW));
    return `<text x="0" y="${y + 16}" style="fill:var(--navy);font:500 15px var(--sans,sans-serif)">${esc(r.name)}</text>`
      + `<path d="M0 ${y + 24}h${w - 4}a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H0z" style="fill:var(--navy)"/>`
      + `<text x="${w + 8}" y="${y + 37}" style="fill:var(--muted);font:600 15px var(--sans,sans-serif)">${money(r.value)}</text>`;
  }).join("");
  return `<svg role="img" aria-label="${esc(label)}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;width:100%;max-width:480px;height:auto">${bars}</svg>`;
}

/* The area tables. One term per kind of gate, the same as the cards. */
const K = { guard: "Guard day and night", house: "Gatehouse", call: "Call box", back: "Back gate only", ask: "Gate at the entrance" };
const COLS = [
  { key: "gate", label: "Kind of gate" },
  { key: "fee", label: "HOA fee" },
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "beach", label: "To the beach", num: true },
];
const COLS3 = COLS.filter((c) => c.key !== "price");
const opts = (caption, first) => ({ caption, nameLabel: "Neighborhood", css: first });

/* Text at reading size inside the icon cards (atAGlance writes .9rem), and the icon beside the words
   instead of above them, so each card is one line shorter (round 3: the page was too long). */
const CARD_CSS = "<style>.c3-big ul[role=list] li{display:grid;grid-template-columns:2.6rem 1fr;column-gap:.85rem;align-items:start}.c3-big ul[role=list] li>span:first-child{grid-row:1/span 2;margin-bottom:0!important}.c3-big ul[role=list] li>strong,.c3-big ul[role=list] li>span:not(:first-child){grid-column:2}.c3-big li span[style*=\"font-size:.9rem\"]{font-size:var(--read,1.0625rem)!important}.c3-big li strong{font-weight:600!important;font-size:var(--read,1.0625rem)!important}</style>";
const big = (html) => `<div class="c3-big">${html}</div>`;

const ph = photoSetB({ aerialWidth: "720px" });
const GATE_PHOTO = ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. Just inside, a small building, the gatehouse, sits between the two lanes, with a gate arm across each lane.");
const DEB_PHOTO = ph.aerial("debordieu-from-above-2026",
  "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between most of them and the beach.", { closeUp: true });

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The gate aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Gated Communities in Myrtle Beach: HOA Fees, Prices | Chapter3",
  description: "Gated communities near Myrtle Beach on two maps, by area: who is at the gate, what the HOA fee pays for, what homes sell for, 55+ and golf, pros and cons.",
  ogTitle: "Gated communities near Myrtle Beach: where they are, what they cost and what the gate does",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities in Myrtle Beach?",
  h1em: "From North Myrtle Beach to Pawleys Island.",
  sub: "Gated neighborhoods near Myrtle Beach, by area, with who is at the gate, the HOA fee and what homes there usually sell for.",
  heroMedia: glance([
    { icon: "beach", label: "Closest to the beach", text: "Seaside Plantation, about 2 minutes" },
    { icon: "home", label: "Homes sell for", text: "About $480,000 to $1.5 million" },
    { icon: "dollar", label: "HOA fee", text: "About $90 to $440 a month" },
  ]),
  heroCta: { label: OFFER_LABEL, href: OFFER },
  author: "devin",
  shortAnswer: [
    "Gated neighborhoods near Myrtle Beach run along the coast from North Myrtle Beach to Pawleys Island. Homes in most of them usually sell for about $480,000 to $1.5 million.",
    "Each has a homeowners association (HOA), the group of owners that runs the neighborhood. The HOA fee here is about $90 to $440 a month. A gate controls who drives in. It is not a guard at each home. Litchfield by the Sea and DeBordieu Colony are on the ocean, and most others are a short drive from the beach.",
    `Read ${h.a("#what-a-gate-does", "what a gate does and does not do")} before you choose one.`,
  ],
  sections: [
    { h2: "Where are the gated neighborhoods near Myrtle Beach?", toc: "Maps", html:
      MAP_N.html + MAP_S.html +
      h.p(`Litchfield by the Sea and DeBordieu Colony are on the ocean, and each has a Beach Club. Most others are a short drive from a ${h.ext(BEACH, "public beach access")}, a public path to the beach. Some have parking and some do not.`) },

    { h2: "Which gated community fits what you want?", toc: "Which one fits you", html:
      h.p("The best gated community for you depends on what you want close by. Start with what matters most to you.") +
      wantPicker([
        { icon: "beach", want: "On the ocean",
          places: [{ name: "DeBordieu Colony", href: "#table-pawleys-island" }, { name: "Litchfield by the Sea", href: "#table-pawleys-island" }] },
        { icon: "dollar", want: "A low HOA fee", note: "About $90 to $150 a month.",
          places: [{ name: "Covington Lake East", href: "#table-myrtle-beach" }, { name: "Wachesaw East", href: "#table-murrells-inlet" }, { name: "Waterway Palms Plantation", href: "#table-myrtle-beach" }] },
        { icon: "home", want: "A lower price", note: "About $480,000 to $570,000.",
          places: [{ name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Covington Lake East", href: "#table-myrtle-beach" }] },
        { icon: "clubhouse", want: "A 55+ neighborhood",
          places: [{ name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Myrtle Trace (back gate only)", href: MT }] },
      ]) +
      h.p(`A 55+ community is for homes where at least one person is 55 or older. Federal rules require that in at least 80 percent of its occupied homes, and Myrtle Trace and Seasons at Prince Creek West require it in every home. Our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities")} gives each one's rules for who else may live there.`) +
      h.p(`Our ${h.a("/buyers/golf-communities/", "guide to golf communities near Myrtle Beach")} covers the courses.`) +
      h.p(`To compare these with neighborhoods that have no gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach for what you want nearby")}. We also cover ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")} and ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy near Myrtle Beach")}.`) },

    { h2: "Does a gate make a neighborhood safer?", toc: "What a gate does", id: "what-a-gate-does", html: (bg) =>
      h.p("A gate controls who drives into the neighborhood. It does not put a guard at each home, and we do not rate any neighborhood as safe or unsafe.") +
      h.p(`Visitors stop at the gate and are let in at the gate or by the owner. At Litchfield by the Sea, the owner or rental manager must ${h.ext(LBTS_GUIDE, "register guests")} before the visit. Your own doors, locks and alarm are still yours to choose.`) +
      CARD_CSS + big(atAGlance([
        { icon: "gate", label: K.guard, text: "A guard is on duty at the main gate around the clock. Litchfield by the Sea." },
        { icon: "home", label: K.house, text: "A building at the gate. Ask us about hours. Tidewater Plantation, Prestwick, Wachesaw Plantation, Willbrook Plantation, Litchfield Plantation, DeBordieu Colony and Dye Estates." },
        { icon: "key", label: K.call, text: "A phone at the gate. A visitor calls the owner, who opens the gate. Seasons at Prince Creek West." },
        { icon: "trail", label: K.back, text: "The front entrance is open, and only the back entrance has gates. Myrtle Trace." },
      ], { bg, min: "18rem" })) +
      GATE_PHOTO +
      h.p(`To see crime reported to a police department or sheriff, use the state's ${h.ext(SLED, "crime data site")}. You pick the agency, the year and the type of crime.`) },

    { h2: "What do homes in gated neighborhoods near Myrtle Beach cost?", toc: "Prices", html:
      h.p("Homes in most gated neighborhoods near Myrtle Beach usually sell for about $480,000 to $1.5 million. These are prices homes sold for, not asking prices.") +
      h.figure(priceChart(), "Chart of what homes usually sell for in the eight gated neighborhoods with enough recent sales to give one typical price.") +
      h.p("In Leatherleaf and The Bluffs on the Waterway, the few homes that sold went for about $700,000 to $975,000. Myrtle Trace, with gates only at its back entrance, usually sells for about $300,000.") +
      "" },

    { h2: "Which neighborhoods in North Myrtle Beach are gated?", toc: "North Myrtle Beach", id: "north-myrtle-beach", html:
      h.p("Tidewater Plantation, Seaside Plantation and parts of Barefoot Resort are gated neighborhoods in North Myrtle Beach. A name with “Plantation” is a neighborhood name, not a farm.") +
      table("table-north-myrtle-beach", compareCards([
        { name: "Tidewater Plantation", cells: { gate: K.house, fee: "About $230 a month", beach: "About 8 minutes" } },
        { name: "Seaside Plantation", cells: { gate: K.ask, fee: "About $210 a month", beach: "About 2 minutes" } },
        { name: "Leatherleaf (Barefoot Resort)", cells: { gate: K.ask, fee: "About $390 a month", beach: "About 10 minutes" } },
      ], COLS3, opts("Neighborhoods with a gate in North Myrtle Beach", true))) +
      h.p(`Barefoot Resort is a large neighborhood with four golf courses, and ${h.ext(BAREFOOT, "only some of its sections are gated")}, such as Leatherleaf and Dye Estates.`) },

    { h2: "Which neighborhoods in Myrtle Beach, Carolina Forest and Conway have a gate?", toc: "Myrtle Beach and Carolina Forest", id: "myrtle-beach-carolina-forest", html:
      h.p("Grande Dunes is a large neighborhood in Myrtle Beach. Only some of its sections are gated, including Calais, Palermo and Villa Venezia.") +
      h.p("Carolina Forest is a large area of neighborhoods just inland from Myrtle Beach.") +
      table("table-myrtle-beach", compareCards([
        { name: "Myrtle Trace (55+, back gate only)", href: MT, cells: { gate: K.back, fee: "$95 a month", beach: "About 15 minutes" } },
        { name: "Grande Dunes: Calais, Palermo and Villa Venezia", cells: { gate: K.ask, fee: "About $200 to $375 a month", beach: "About 10 minutes" } },
        { name: "Waterway Palms Plantation", cells: { gate: K.ask, fee: "About $150 a month", beach: "About 10 minutes" } },
        { name: "The Bluffs on the Waterway", cells: { gate: K.ask, fee: "About $150 a month", beach: "About 10 minutes" } },
        { name: "Covington Lake East", cells: { gate: K.ask, fee: "About $90 a month", beach: "About 15 minutes" } },
      ], COLS3, opts("Neighborhoods with a gate in Myrtle Beach, Carolina Forest and Conway", false))) +
      h.p(`For a closer look at one Carolina Forest neighborhood, see our ${h.a("/submarkets/carolina-forest/the-farm/", "guide to The Farm at Carolina Forest")}.`) },

    { h2: "Which neighborhoods from Surfside Beach to Murrells Inlet are gated?", toc: "Surfside Beach to Murrells Inlet", id: "surfside-murrells-inlet", html:
      h.p("Prestwick, just outside the town of Surfside Beach, is the closest gated neighborhood to that town. In Murrells Inlet, Bellwood Landing, Wachesaw Plantation and Wachesaw East are gated.") +
      table("table-murrells-inlet", compareCards([
        { name: "Prestwick", cells: { gate: K.house, fee: "About $190 a month", beach: "About 7 minutes" } },
        { name: "Bellwood Landing", cells: { gate: K.ask, fee: "About $160 a month", beach: "About 15 minutes" } },
        { name: "Wachesaw Plantation", cells: { gate: K.house, fee: "About $150 a month on most homes", beach: "About 15 minutes" } },
        { name: "Wachesaw East", cells: { gate: K.ask, fee: "About $145 a month", beach: "About 10 minutes" } },
        { name: "Seasons at Prince Creek West (55+)", href: SEASONS, cells: { gate: K.call, fee: "About $340 a month", beach: "About 10 minutes" } },
      ], COLS3, opts("Neighborhoods with a gate, Surfside Beach to Murrells Inlet", false))) },

    { h2: "Which neighborhoods in Pawleys Island and Litchfield are gated?", toc: "Pawleys Island", id: "pawleys-island", html: (bg) =>
      h.p(`Litchfield by the Sea is a private, gated community on the ocean at Litchfield, near Pawleys Island. Its main gate on US 17 has a ${h.ext(LBTS_GUIDE, "guard day and night")}.`) +
      h.p("DeBordieu Colony, a little farther south toward Georgetown, is on the ocean too.") +
      DEB_PHOTO +
      h.p(`We send recent sales for these neighborhoods, and for Wachesaw Plantation and Wachesaw East, ${h.a(OFFER, "on request")}.`) +
      table("table-pawleys-island", compareCards([
        { name: "Litchfield by the Sea", cells: { gate: K.guard, fee: "Not posted by the association", beach: "On the ocean" } },
        { name: "Litchfield Plantation", cells: { gate: K.house, fee: "About $230 a month on most homes", beach: "About 8 minutes" } },
        { name: "Willbrook Plantation", cells: { gate: K.house, fee: "About $340 a month", beach: "About 9 minutes" } },
        { name: "The Reserve", cells: { gate: K.ask, fee: "About $320 a month on most homes", beach: "About 8 minutes" } },
        { name: "Heritage Plantation", cells: { gate: K.ask, fee: "About $325 a month", beach: "About 10 minutes" } },
        { name: "DeBordieu Colony", cells: { gate: K.house, fee: "About $300 to $400 a month", beach: "On the ocean" } },
      ], COLS3, opts("Neighborhoods with a gate in Pawleys Island and Litchfield", false))) +
      h.cta("Get this week's list of homes for sale in gated neighborhoods.",
        "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.",
        OFFER_LABEL, OFFER, bg) },

    { h2: "What do you get for the HOA fee in a gated community?", toc: "What the fee covers", html: (bg) =>
      h.p("The HOA uses the fee to run the gate and keep up the streets. In many neighborhoods, the fee also covers shared places like a pool.") +
      CARD_CSS + big(atAGlance([
        { icon: "clubhouse", label: "Seasons at Prince Creek West", text: "About $340 a month. It includes internet, weekly trash pickup and lawn care." },
        { icon: "pool", label: "Myrtle Trace", text: "$95 a month. The HOA uses it to keep up the pool, clubhouse, gates, roads, ponds and shared land." },
        { icon: "beach", label: "Litchfield by the Sea", text: "The association keeps up the main entrance gates, the roads and the Beach Club. It also keeps up the River Club pool, a fishing dock, paths and courts." },
      ], { bg, min: "18rem" })) +
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100 a year.") +
      h.p(`Outside city limits in Horry County, the streets behind a gate are usually ${h.ext(CODE, "private")}, so the county does not repave them. ${h.a("/hoa/reserves/", "Check how much the HOA has saved for repairs")} before you buy.`) +
      h.p(`Hurricanes and flooding matter here too. Flood risk can change from one street to the next, even inside one gate. Get an insurance quote for the home before you offer. Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} explains the costs.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      prosCons([
        "Visitors stop at the gate, and drivers cannot use your streets as a shortcut.",
        "You can choose a gated neighborhood on the ocean, near the beach or inland.",
        "Ten of these neighborhoods are golf communities, and two are 55+ neighborhoods.",
      ], [
        { text: "You pay for the gate and the private streets through your HOA fee.", act: `Ask what it covers before you offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} lists the usual items.` },
        { text: "The county does not repave private streets.", act: `Check the HOA's savings, so a one-time extra charge to every owner, called a ${h.a("/hoa/special-assessments/", "special assessment")}, is less likely.` },
        { text: "Every guest and worker comes through the gate.", act: "Give the gate your guest's name before the visit, where the gate asks for it." },
      ], { bg }) },

    { h2: "How do you know a home is behind the gate?", toc: "Check the gate", html: (bg) =>
      h.p("Drive in by the entrance you will use every day, because some neighborhoods are gated only in part. In Barefoot Resort and Grande Dunes only some sections are gated, and Myrtle Trace has gates only at its back entrance.") +
      story([
        "<strong>Example:</strong> Joan is moving from Ohio, and she wants a 55+ home behind a gate. She likes a house in Myrtle Trace, near Conway.",
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
  sourcesNote: "Not legal advice. Gates, fees and golf come from each association and recent home listings. A price is the typical recorded sale over the last 12 months, without builder sales. Drive times are OpenStreetMap estimates with no traffic.",
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get this week's list of homes for sale in gated neighborhoods.", p: "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.", label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
