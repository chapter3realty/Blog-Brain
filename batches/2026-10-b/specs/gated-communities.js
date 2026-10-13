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
 *   Crime: SLED's crime data site and Horry County's calls-for-service map, links only (rows 77, 78).
 * Never: safe, secure, exclusive, luxury, upscale; a rating; who lives anywhere; a conclusion about
 * an HOA or builder; package deliveries (no row); Tuscany Village and Cascadia (cut: not in a
 * table or on a map).
 * Maps: batches/2026-10-b/data/gated-map.json. Picture: batches/2026-10-b/data/photos.json,
 * prestwick-gate-from-above-2026.
 * Story: the labelled example (Joan, Myrtle Trace's open front entrance, Seasons' gate), kept.
 */
const { h, data, placesMap, compareCards, wantPicker, prosCons, atAGlance, glance, story, photoSetB } = require("./_kit.js");

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
const CALLS = "https://www.horrycountysc.gov/gis/calls48/";

/* ---------------------------------------------------------------------------- */
/* Maps: the coast from North Myrtle Beach to Murrells Inlet, then the Pawleys Island
   neighborhoods on their own map (seven dots there sat on top of each other on one map). */
const AREA = { "north-myrtle-beach": "#table-north-myrtle-beach", "myrtle-beach": "#table-myrtle-beach",
  "murrells-inlet": "#table-murrells-inlet", "pawleys-island": "#table-pawleys-island" };
const table = (id, html) => `<div id="${id}">${html}</div>`;
const G = data("gated-map.json");
const SHORT = { "Waterway Palms, The Bluffs": "Waterway Palms", "Seasons, Bellwood": "Seasons" };
const MAP_N = placesMap("Gated neighborhoods, North Myrtle Beach to Murrells Inlet",
  G.places.filter((p) => p.area !== "pawleys-island").map((p) => ({ name: p.name, short: SHORT[p.short] || p.short, lat: p.lat, lon: p.lon, href: AREA[p.area] })), {
    caption: "Map of gated neighborhoods from North Myrtle Beach (top right) to Murrells Inlet (bottom left). The city of Myrtle Beach is on the coast between Grande Dunes (4) and Prestwick (8).",
    key: true,
  });
const MAP_S = placesMap("Gated neighborhoods near Pawleys Island", G.pawleys.map((p) => ({ name: p.name, short: p.short, lat: p.lat, lon: p.lon, href: AREA["pawleys-island"] })), {
  caption: "Map of the neighborhoods with a gate near Pawleys Island and Litchfield, south of Murrells Inlet.",
  key: true,
});

/* The price chart: the eight gated neighborhoods with a typical price, lowest to highest, from
   gated-map.json "prices". 330 units wide, so the names show at about 16 px on a phone. */
function priceChart() {
  const rows = G.prices.rows.slice().sort((a, b) => a.value - b.value);
  const W = 330, RH = 52, TOP = 6, MAXW = 235, max = Math.max(...rows.map((r) => r.value));
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
const K = { guard: "Guard day and night", house: "Gatehouse", call: "Call box", back: "Back gate only", ask: "Ask us the kind" };
const COLS = [
  { key: "gate", label: "Kind of gate" },
  { key: "fee", label: "HOA fee" },
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "beach", label: "To the beach", num: true },
];
const opts = (caption, first) => ({ caption, nameLabel: "Neighborhood", css: first });

/* Text at reading size inside the icon cards (atAGlance writes .9rem). */
const CARD_CSS = "<style>.c3-big li span[style*=\"font-size:.9rem\"]{font-size:var(--read,1.0625rem)!important}.c3-big li strong{font-weight:600!important;font-size:var(--read,1.0625rem)!important}</style>";
const big = (html) => `<div class="c3-big">${html}</div>`;

const ph = photoSetB({ aerialWidth: "720px" });
const GATE_PHOTO = ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. Just inside is a small gatehouse between the two lanes, with a gate arm across each lane.");

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
    { icon: "pin", label: "Where", text: "North Myrtle Beach to Pawleys Island" },
    { icon: "home", label: "Homes sell for", text: "About $480,000 to $1.5 million" },
    { icon: "dollar", label: "HOA fee", text: "About $90 to $440 a month" },
  ]),
  heroCta: { label: OFFER_LABEL, href: OFFER },
  author: "devin",
  shortAnswer: [
    "Gated neighborhoods near Myrtle Beach run along the coast from North Myrtle Beach to Pawleys Island. Homes in most of them usually sell for about $480,000 to $1.5 million.",
    "Each has a homeowners association (HOA), the group of owners that runs the neighborhood. The HOA fee here is about $90 to $440 a month. A gate controls who drives in, but it does not guard each home. Two of these neighborhoods are on the ocean, and the rest are a short drive from the beach.",
  ],
  sections: [
    { h2: "Does a gate make a neighborhood safer?", toc: "What a gate does", html: (bg) =>
      h.p("A gate controls who drives into the neighborhood. It does not put a guard at each home, and we do not rate any neighborhood as safe or unsafe.") +
      h.p(`Visitors stop at the gate and are let in by a guard or by the owner. At Litchfield by the Sea, the owner ${h.ext(LBTS_GUIDE, "registers each guest")} before the visit. Your own doors, locks and alarm are still yours to choose.`) +
      h.p("Who is at the gate depends on the neighborhood. These are the five kinds of gate you will find here.") +
      CARD_CSS + big(atAGlance([
        { icon: "gate", label: K.guard, text: "A guard is on duty at the main gate around the clock. Litchfield by the Sea." },
        { icon: "home", label: K.house, text: "A small building at the gate where a guard can check visitors. The hours differ. Tidewater Plantation, Prestwick, Wachesaw Plantation, Willbrook Plantation, Litchfield Plantation, DeBordieu Colony and Dye Estates." },
        { icon: "key", label: K.call, text: "A phone at the gate. A visitor calls the owner, who opens the gate. Seasons at Prince Creek West." },
        { icon: "trail", label: K.back, text: "The front entrance is open, and only the back entrance has gates. Myrtle Trace." },
        { icon: "pin", label: K.ask, text: "These neighborhoods have a gate, and the kind is not posted. Ask us before you tour." },
      ], { bg, min: "18rem" })) +
      GATE_PHOTO +
      h.p(`To see reported crime near any address, use the state's ${h.ext(SLED, "crime data site")} and pick the police department or sheriff that covers it. Horry County also posts a ${h.ext(CALLS, "public map of calls for service")} from the last 48 hours.`) },

    { h2: "Where are the gated neighborhoods near Myrtle Beach?", toc: "Maps", html:
      h.p("Gated neighborhoods near Myrtle Beach are in four parts of the coast. From north to south, they are North Myrtle Beach, Myrtle Beach and Carolina Forest, Surfside Beach to Murrells Inlet, and Pawleys Island.") +
      MAP_N.html + MAP_S.html +
      h.p(`Litchfield by the Sea and DeBordieu Colony are on the ocean, each with a private beach club for owners. The others are a short drive from a ${h.ext(BEACH, "public beach access")}, a spot where anyone can park and walk onto the beach.`) },

    { h2: "Which gated community fits what you want?", toc: "Which one fits you", html:
      h.p("The best gated community for you depends on what you want close by. Start with what matters most to you.") +
      wantPicker([
        { icon: "beach", want: "On the ocean",
          places: [{ name: "Litchfield by the Sea", href: "#table-pawleys-island" }, { name: "DeBordieu Colony", href: "#table-pawleys-island" }] },
        { icon: "beach", want: "A short drive to the beach", note: "About 2 to 8 minutes by car.",
          places: [{ name: "Seaside Plantation", href: "#table-north-myrtle-beach" }, { name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Tidewater Plantation", href: "#table-north-myrtle-beach" }] },
        { icon: "dollar", want: "A low HOA fee", note: "About $90 to $150 a month.",
          places: [{ name: "Covington Lake East", href: "#table-myrtle-beach" }, { name: "Wachesaw East", href: "#table-murrells-inlet" }, { name: "Waterway Palms Plantation", href: "#table-myrtle-beach" }] },
        { icon: "home", want: "A lower price", note: "About $480,000 to $570,000.",
          places: [{ name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Covington Lake East", href: "#table-myrtle-beach" }] },
        { icon: "gate", want: "A gatehouse at the entrance",
          places: [{ name: "Tidewater Plantation", href: "#table-north-myrtle-beach" }, { name: "Prestwick", href: "#table-murrells-inlet" }, { name: "DeBordieu Colony", href: "#table-pawleys-island" }] },
        { icon: "golf", want: "A golf course",
          places: [{ name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Heritage Plantation", href: "#table-pawleys-island" }, { name: "The Reserve", href: "#table-pawleys-island" }] },
        { icon: "clubhouse", want: "A 55+ neighborhood",
          places: [{ name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Myrtle Trace (back gate only)", href: MT }] },
      ]) +
      h.p(`In a 55+ neighborhood, at least one person in each home must be 55 or older. Our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities")} gives each one's rules for others in the home and for visits. Ten of these gated neighborhoods are golf communities, and our ${h.a("/buyers/golf-communities/", "guide to golf communities near Myrtle Beach")} covers the courses.`) +
      h.p(`To skip an HOA fee altogether, see ${h.a("/buyers/no-hoa-homes/", "where to find homes with no HOA near Myrtle Beach")}. To compare neighborhoods with and without a gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach for what you want nearby")}.`) },

    { h2: "What do homes in gated neighborhoods near Myrtle Beach cost?", toc: "Prices", html:
      h.p("Homes in most gated neighborhoods near Myrtle Beach usually sell for about $480,000 to $1.5 million. These are prices homes sold for, not asking prices.") +
      h.figure(priceChart(), "Chart of what homes usually sell for in the eight gated neighborhoods with enough recent sales to give one typical price.") +
      h.p("In Leatherleaf and The Bluffs on the Waterway, the few homes that sold went for about $700,000 to $975,000. Myrtle Trace, with gates only at its back entrance, usually sells for about $300,000.") +
      h.p(`Prices for Wachesaw and the Pawleys Island neighborhoods are not shown, because Georgetown County's sale records could not be checked. ${h.a(OFFER, "Ask us")}, and we send you recent sales there.`) },

    { h2: "Which neighborhoods in North Myrtle Beach are gated?", toc: "North Myrtle Beach", id: "north-myrtle-beach", html:
      h.p("Tidewater Plantation, Seaside Plantation and parts of Barefoot Resort are gated neighborhoods in North Myrtle Beach. “Plantation” is part of many neighborhood names here.") +
      table("table-north-myrtle-beach", compareCards([
        { name: "Tidewater Plantation", cells: { gate: K.house, fee: "About $230 a month", price: "About $625,000", beach: "About 8 minutes" } },
        { name: "Seaside Plantation", cells: { gate: K.ask, fee: "About $210 a month", price: "About $740,000", beach: "About 2 minutes" } },
        { name: "Leatherleaf (Barefoot Resort)", cells: { gate: K.ask, fee: "About $390 a month", price: "About $700,000 to $975,000", beach: "About 10 minutes" } },
      ], COLS, opts("Gated neighborhoods in North Myrtle Beach", true))) +
      h.p(`Barefoot Resort is a large neighborhood with four golf courses, and ${h.ext(BAREFOOT, "only some of its sections are gated")}, such as Leatherleaf and Dye Estates.`) },

    { h2: "Which neighborhoods in Myrtle Beach, Carolina Forest and Conway have a gate?", toc: "Myrtle Beach and Carolina Forest", id: "myrtle-beach-carolina-forest", html:
      h.p("Grande Dunes is a large neighborhood in Myrtle Beach. Only some of its sections are gated, including Calais, Palermo and Villa Venezia.") +
      h.p("Carolina Forest is a large area of neighborhoods just inland from Myrtle Beach. Covington Lake East, Waterway Palms Plantation and The Bluffs on the Waterway are gated there. Myrtle Trace, a 55+ neighborhood near the town of Conway, has gates only at its back entrance.") +
      table("table-myrtle-beach", compareCards([
        { name: "Myrtle Trace (55+, back gate only)", href: MT, cells: { gate: K.back, fee: "$95 a month", price: "About $300,000", beach: "About 15 minutes" } },
        { name: "Grande Dunes: Calais, Palermo and Villa Venezia", cells: { gate: K.ask, fee: "About $200 to $375 a month", price: "About $1.5 million", beach: "About 10 minutes" } },
        { name: "Waterway Palms Plantation", cells: { gate: K.ask, fee: "About $150 a month", price: "About $780,000", beach: "About 10 minutes" } },
        { name: "The Bluffs on the Waterway", cells: { gate: K.ask, fee: "About $150 a month", price: "About $730,000 to $975,000", beach: "About 10 minutes" } },
        { name: "Covington Lake East", cells: { gate: K.ask, fee: "About $90 a month", price: "About $570,000", beach: "About 15 minutes" } },
      ], COLS, opts("Gated neighborhoods in Myrtle Beach, Carolina Forest and Conway", false))) +
      h.p(`For a closer look at one Carolina Forest neighborhood, see our ${h.a("/submarkets/carolina-forest/the-farm/", "guide to The Farm at Carolina Forest")}.`) },

    { h2: "Which neighborhoods from Surfside Beach to Murrells Inlet are gated?", toc: "Surfside Beach to Murrells Inlet", id: "surfside-murrells-inlet", html:
      h.p("Prestwick, just outside the town of Surfside Beach, is the closest gated neighborhood to that town. In Murrells Inlet, Bellwood Landing, Wachesaw Plantation and Wachesaw East are gated.") +
      h.p("Seasons at Prince Creek West is a 55+ neighborhood across the road from Bellwood Landing. Seasons has a gate at its main entrance, with a call box for visitors.") +
      table("table-murrells-inlet", compareCards([
        { name: "Prestwick", cells: { gate: K.house, fee: "About $190 a month", price: "About $480,000", beach: "About 7 minutes" } },
        { name: "Bellwood Landing", cells: { gate: K.ask, fee: "About $160 a month", price: "About $850,000", beach: "About 15 minutes" } },
        { name: "Wachesaw Plantation", cells: { gate: K.house, fee: "About $150 to $280 a month", price: "Ask us", beach: "About 15 minutes" } },
        { name: "Wachesaw East", cells: { gate: K.ask, fee: "About $145 a month", price: "Ask us", beach: "About 10 minutes" } },
        { name: "Seasons at Prince Creek West (55+)", href: SEASONS, cells: { gate: K.call, fee: "About $340 a month", price: "About $500,000", beach: "About 10 minutes" } },
      ], COLS, opts("Gated neighborhoods from Surfside Beach to Murrells Inlet", false))) },

    { h2: "Which neighborhoods in Pawleys Island and Litchfield are gated?", toc: "Pawleys Island", id: "pawleys-island", html: (bg) =>
      h.p(`Litchfield by the Sea is a private, gated community on the ocean at Litchfield, near Pawleys Island. Its main gate on US 17 has a ${h.ext(LBTS_GUIDE, "guard day and night")}.`) +
      h.p("Litchfield Plantation, Willbrook Plantation, The Reserve and Heritage Plantation are gated neighborhoods nearby. DeBordieu Colony, a little farther south toward Georgetown, is on the ocean too.") +
      table("table-pawleys-island", compareCards([
        { name: "Litchfield by the Sea", cells: { gate: K.guard, fee: "Ask us", price: "Ask us", beach: "On the ocean" } },
        { name: "Litchfield Plantation", cells: { gate: K.house, fee: "About $230 to $280 a month", price: "Ask us", beach: "About 8 minutes" } },
        { name: "Willbrook Plantation", cells: { gate: K.house, fee: "About $340 a month", price: "Ask us", beach: "About 9 minutes" } },
        { name: "The Reserve", cells: { gate: K.ask, fee: "About $320 to $440 a month", price: "Ask us", beach: "About 8 minutes" } },
        { name: "Heritage Plantation", cells: { gate: K.ask, fee: "About $325 a month", price: "Ask us", beach: "About 10 minutes" } },
        { name: "DeBordieu Colony", cells: { gate: K.house, fee: "About $300 to $380 a month", price: "Ask us", beach: "On the ocean" } },
      ], COLS, opts("Gated neighborhoods in Pawleys Island and Litchfield", false))) +
      h.cta("Get this week's list of homes for sale in gated neighborhoods.",
        "Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.",
        OFFER_LABEL, OFFER, bg) +
      h.p(`If your budget is tighter, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy a home near Myrtle Beach")}.`) },

    { h2: "What do you get for the HOA fee in a gated community?", toc: "What the fee covers", html: (bg) =>
      h.p("The HOA uses the fee to run the gate and keep up the streets. In many neighborhoods, the fee also covers shared places like a pool.") +
      CARD_CSS + big(atAGlance([
        { icon: "clubhouse", label: "Seasons at Prince Creek West", text: "About $340 a month. It includes internet, weekly trash pickup and lawn care." },
        { icon: "pool", label: "Myrtle Trace", text: "$95 a month. The HOA uses it to keep up the pool, clubhouse, gates, roads, ponds and shared land." },
        { icon: "beach", label: "Litchfield by the Sea", text: "The association keeps up the gates, the roads, the Beach Club, the River Club pool, a fishing dock, paths and tennis and pickleball courts." },
      ], { bg, min: "18rem" })) +
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100 a year.") +
      h.p(`Outside city limits in Horry County, the streets behind a gate are usually ${h.ext(CODE, "private")}, so the county does not repave them. Repaving comes from the HOA's savings or from the owners, so ${h.a("/hoa/reserves/", "check how much the HOA has saved for repairs")} before you buy.`) +
      h.p(`Workers come through the gate too. At Litchfield by the Sea, owners pay ${h.ext(LBTS_FAQ, "$25 for a barcode")} for each car. A contractor's truck needs its own $25 barcode.`) +
      h.p(`Hurricanes and flooding matter here too. Flood risk can change from one street to the next, even inside one gate. Get an insurance quote for the home before you offer. Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} explains the costs.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      h.p("A gated community keeps through traffic off your street, and you pay for the gate and the streets through the HOA fee.") +
      prosCons([
        "Visitors stop at the gate, and drivers cannot use your streets as a shortcut.",
        "You can choose a gated neighborhood on the ocean, near the beach or inland.",
        "Ten of these neighborhoods are golf communities, and two are 55+ neighborhoods.",
      ], [
        { text: "You pay for the gate and the private streets through your HOA fee.", act: `Ask what the fee covers before you make an offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} explains the usual list.` },
        { text: "The county does not repave private streets.", act: `Check the HOA's savings, so a one-time extra charge to every owner, called a ${h.a("/hoa/special-assessments/", "special assessment")}, is less likely.` },
        { text: "Every guest and worker comes through the gate.", act: "Give the gate your guest's name before the visit, where the gate asks for it." },
      ], { bg }) },

    { h2: "How do you know a home is behind the gate?", toc: "Check the gate", html: (bg) =>
      h.p("Drive in by the entrance you will use every day, because some neighborhoods are gated only in part. In Barefoot Resort and Grande Dunes only some sections are gated, and Myrtle Trace has gates only at its back entrance.") +
      story([
        "<strong>Example:</strong> Joan is moving from Ohio, and she wants a 55+ home behind a gate. She likes a house in Myrtle Trace, near Conway.",
        "Before she makes an offer, her Chapter3 agent drives her in by the front entrance. That entrance has no gate, and the gates are only at the back.",
        "The agent shows her homes for sale in Seasons at Prince Creek West, which has a gate at its main entrance. Joan finds a house there and makes her offer.",
      ], "", bg,
      `An agent at Chapter3 can ${h.a(OFFER, "check the gate for the home you like")} before you make an offer.`) },
  ],
  faqTitle: "Gated communities FAQ",
  faq: [
    { q: "What are the best gated communities in Myrtle Beach?", a: "The best one depends on what you want. Litchfield by the Sea and DeBordieu Colony are on the ocean. Covington Lake East has an HOA fee of about $90 a month. Prestwick homes usually sell for about $480,000." },
    { q: "Are there gated communities in North Myrtle Beach?", a: "Yes. Tidewater Plantation and Seaside Plantation are gated, and so are some sections of Barefoot Resort, such as Leatherleaf and Dye Estates." },
    { q: "Is there a gated community in Surfside Beach?", a: "Prestwick, just outside the town, is gated. Its nearest public beach access is in Surfside Beach, about 7 minutes away by car." },
    { q: "Are there gated communities in Murrells Inlet?", a: "Yes. Bellwood Landing, Wachesaw Plantation and Wachesaw East are gated. The 55+ neighborhood Seasons at Prince Creek West has a gate with a call box." },
    { q: "Are there 55+ gated communities near Myrtle Beach?", a: "Yes. Seasons at Prince Creek West in Murrells Inlet has a gate at its main entrance. Myrtle Trace near Conway has gates only at its back entrance." },
    { q: "Are there gated golf communities near Myrtle Beach?", a: "Yes. Prestwick, Tidewater Plantation, Heritage Plantation, The Reserve and DeBordieu Colony are golf communities with a gate." },
    { q: "Is Grande Dunes a gated community?", a: "Only in part. Some sections of Grande Dunes are gated, including Calais, Palermo and Villa Venezia." },
    { q: "Is Barefoot Resort a gated community?", a: "Only in part. Some of its sections are gated, such as Leatherleaf and Dye Estates, and the rest are not marked as gated." },
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
