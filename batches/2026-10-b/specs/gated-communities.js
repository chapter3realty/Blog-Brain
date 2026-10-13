/* /buyers/gated-communities/ - which neighborhoods near Myrtle Beach have a gate, by area, with
 * the kind of gate, the HOA fee and what homes usually sell for, and what a gate means for an owner.
 *
 * Version 1, 2026-10-13 (batch 2026-10-b, page 2).
 *
 * Reader: typed "gated communities in Myrtle Beach", "best gated communities", or an area, "55+" or
 * "golf" with it. Job: find gated neighborhoods in my area and price range, and learn what the gate
 * means for me. Shape (CRAFT 3): a list page with a map. The main relation is place to place, then
 * option against option, so: one map of every neighborhood, a "what do you want" picker for the
 * "best" searches, then one comparison table per area (the area is what readers type), then what a
 * gate means, the pros and cons, the partly gated trap with one labelled example, and the FAQ.
 *
 * Facts: batches/2026-10-b/facts/gated-communities-facts.md, verified rows only, in the verifier's
 * per-community safe wording, said as the expert; "recent home listings" is in the sources line.
 *   Gated, fully named (16): Seaside Plantation (rows 15, 17), Bellwood Landing (16, 18), Prestwick
 *     (19), Tidewater Plantation (20), Wachesaw Plantation (21), Wachesaw East (22), The Reserve
 *     (23), Heritage Plantation (24), Litchfield Plantation (26), Willbrook Plantation (27),
 *     DeBordieu Colony (28), Covington Lake East (29), Waterway Palms Plantation (30), The Bluffs on
 *     the Waterway (31), Litchfield by the Sea (4 to 7), Seasons at Prince Creek West (14).
 *   In part (3): Barefoot Resort, the eight labelled neighborhoods (8, 9, 33); Grande Dunes by
 *     section (11, 34); Myrtle Trace, back entrance only (13).
 *   Left off: Pawleys Plantation (row 25, wrong) and Indigo Bay (row 32: never "gated").
 *   Seasons: facts/registry.json "seasons-gate" wins: "a gate at the main entrance, with a call box
 *     for visitors", never "gated" in the same sentence, never a guard. Its fee and price are the
 *     registry's and its own page's ($340, $500,000). Its beach minutes come from another start
 *     and end set (row 76: do not mix), so Seasons is in the text, not in the table.
 *   Kind of gate: "Guard house" (Tidewater, row 20), "Guard gate" (Wachesaw Plantation 21,
 *     Willbrook 27, DeBordieu 28), "Gate house" (Litchfield Plantation 26), "Main gate" (Bellwood
 *     18, Heritage 24, The Bluffs 31), "Main gate and side gate" (Prestwick 19), "Gate" where no
 *     source names the kind (Seaside, Covington Lake East, Waterway Palms, The Reserve, Wachesaw
 *     East: the card key line rests on one listing). No guard hours (seasons row 94).
 *   Fees: listing rows 17 to 34; Tidewater "about $230" (six of eight $231); The Bluffs "$154 on
 *     most homes" (five of six; row 31); Myrtle Trace $95 (registry); houses only where a row says.
 *   Prices: recorded sales, rows 40 to 51. 20 or more sales: "About $X" (Tidewater 24, Waterway
 *     Palms about 50, row 48's "about $780,000", Myrtle Trace 35). Fewer than 20: "about" for a
 *     verifier-allowed middle (Prestwick 19, Covington Lake East 13, Grande Dunes 11 in three
 *     sections, Seasons 19), else the verifier's range (Seaside 6, Bellwood 8, Leatherleaf 5, The
 *     Bluffs 4). No price: Dye Estates (row 44), The Reserve (56), every Georgetown County row
 *     (52 to 55) and the places with none (Not verified): Wachesaw, Willbrook, Litchfield
 *     Plantation, Heritage, DeBordieu, Litchfield by the Sea. The Pawleys table has no price
 *     column; the two Wachesaw rows say "Ask us", which the offer answers.
 *   Beach: rows 57 to 75 (Myrtle Trace row 76), minutes over 10 to the nearest 5.
 *   Golf: row 39 (listing field, most listings) and row 10 (Barefoot's four courses).
 *   55+: Myrtle Trace and Seasons only (batch 2026-10-a rows 13, 14, 51, 76).
 *   What a gate means: rows 1 to 3 (county private street rules, unincorporated Horry County only:
 *     said with that limit), 4 to 8 (Litchfield by the Sea and Dye Estates), 13 (Myrtle Trace
 *     gates keep through traffic off), registry seasons-gate (call box).
 *   Never: safe, secure, exclusive, luxury, upscale; who lives anywhere; a conclusion about an HOA
 *     or builder; package deliveries (no row).
 * Map: batches/2026-10-b/data/gated-map.json (15 markers; four pairs of neighbors share one).
 * Pictures: our map. No aerial: a NOAA 2026 crop of the Tidewater entrance (0.3 m a pixel) showed
 *   a median and painted lines, not a gate a reader can see, so it is not used (CRAFT 4: a
 *   picture is a claim). No Commons photo of a named gated neighborhood was found in the batch's
 *   records.
 * Story: a labelled example (Joan, Myrtle Trace's open front entrance, Seasons' gate), retell:
 *   "Joan wants a 55+ home behind a gate, but the front entrance of the Myrtle Trace house she likes
 *   has no gate, so her agent shows her homes in Seasons, which has a gate at its main entrance."
 */
const { h, data, placesMap, compareCards, wantPicker, prosCons, atAGlance, glance, story } = require("./_kit.js");

const SELF = "/buyers/gated-communities/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const SEASONS = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const OFFER = "/contact/";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const CODE = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_CH18LADERE";
const LBTS_GUIDE = "https://litchfieldbythesea.com/wp-content/uploads/2026/06/LBTS-Guest-Orientation-Guide-2026-Long-Version.pdf";
const LBTS_FAQ = "https://litchfieldbythesea.com/resources/";
const BAREFOOT = "https://www.barefoothoa.com/single-family-neighborhoods/";
const BAREFOOT_MF = "https://www.barefoothoa.com/multi-family-neighborhoods/";
const TOLL = "https://www.tollbrothers.com/luxury-homes-for-sale/South-Carolina/Cascadia-at-Grande-Dunes";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const ROD = "https://www.horrycountysc.gov/departments/register-of-deeds/";
const BEACH = "https://gis.des.sc.gov/beachaccess/";

/* The map: one numbered marker per neighborhood, north to south, each linked to its area's table. */
/* Each name links to its area's table (a link to the table, not to the heading, so a reader lands on the
   rows, and the key is not read as an "On this page" list). */
const AREA = { "north-myrtle-beach": "#table-north-myrtle-beach", "myrtle-beach": "#table-myrtle-beach",
  "murrells-inlet": "#table-murrells-inlet", "pawleys-island": "#table-pawleys-island" };
const table = (id, html) => `<div id="${id}">${html}</div>`;
const MAP = placesMap("Gated neighborhoods", data("gated-map.json").places.map((p) =>
  ({ name: p.name, short: p.short, lat: p.lat, lon: p.lon, href: AREA[p.area] })), {
  caption: "Map of the gated neighborhoods on this page, numbered from North Myrtle Beach at the top right to DeBordieu Colony, south of Pawleys Island, at the bottom left.",
  key: true,
});

/* The four area tables. Columns: the kind of gate, the HOA fee, what homes usually sell for, and
   minutes by car to the nearest public beach access. */
const COLS = [
  { key: "gate", label: "Gate" },
  { key: "fee", label: "HOA fee" },
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "beach", label: "To the beach", num: true },
];
const COLS_NO_PRICE = COLS.filter((c) => c.key !== "price");
const opts = (caption, first) => ({ caption, nameLabel: "Neighborhood", css: first });

/* The price chart: one bar per neighborhood with a typical price, lowest to highest, drawn from
   gated-map.json "prices". Drawn 360 units wide so it shows at about its own size on a phone: the
   name above each bar at 15 px, the price at the end of the bar. One color; no legend (one series). */
function priceChart() {
  const rows = data("gated-map.json").prices.rows.slice().sort((a, b) => a.value - b.value);
  const W = 360, RH = 52, TOP = 6, MAXW = 262, max = Math.max(...rows.map((r) => r.value));
  const money = (v) => v >= 1e6 ? `$${(v / 1e6).toFixed(1).replace(/\.0$/, "")} million` : `$${v.toLocaleString("en-US")}`;
  const H = TOP + rows.length * RH;
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const label = "Bar chart of what homes usually sell for in eight gated neighborhoods near Myrtle Beach, lowest to highest: "
    + rows.map((r) => `${r.name}, about ${money(r.value)}`).join("; ") + ".";
  const bars = rows.map((r, i) => {
    const y = TOP + i * RH, w = Math.max(6, Math.round(r.value / max * MAXW));
    return `<text x="0" y="${y + 16}" style="fill:var(--navy);font:500 15px var(--sans,sans-serif)">${esc(r.name)}</text>`
      + `<path d="M0 ${y + 24}h${w - 4}a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H0z" style="fill:var(--navy)"/>`
      + `<text x="${w + 8}" y="${y + 37}" style="fill:var(--muted);font:600 15px var(--sans,sans-serif)">${money(r.value)}</text>`;
  }).join("");
  return `<svg role="img" aria-label="${esc(label)}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;width:100%;max-width:480px;height:auto">${bars}</svg>`;
}

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  title: "Gated Communities in Myrtle Beach: HOA Fees, Prices | Chapter3",
  description: "Gated communities near Myrtle Beach on one map, by area: the kind of gate, HOA fees, what homes sell for, 55+ and golf, and the pros and cons of a gate.",
  ogTitle: "Gated communities near Myrtle Beach: where they are, what they cost and what the gate means",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities in Myrtle Beach?",
  h1em: "From North Myrtle Beach to Pawleys Island.",
  sub: "Gated neighborhoods near Myrtle Beach, by area, with the kind of gate, the HOA fee and what homes there usually sell for.",
  heroMedia: glance([
    { icon: "pin", label: "Where", text: "North Myrtle Beach to Pawleys Island" },
    { icon: "dollar", label: "HOA fee", text: "About $80 to $440 a month" },
    { icon: "golf", label: "Golf", text: "About half are golf communities" },
  ]),
  heroCta: { label: "Get the list", href: OFFER },
  author: "devin",
  shortAnswer: [
    "Gated neighborhoods near Myrtle Beach are spread along the coast, from North Myrtle Beach south past Pawleys Island. Homes in most of them usually sell for about $480,000 to $1.5 million. The HOA fee is about $80 to $440 a month.",
    "Most have a gate at the main entrance, and some have a guard house. The HOA keeps up the gate with the fees owners pay. Two of these neighborhoods are 55+, and about half are golf communities.",
  ],
  sections: [
    { h2: "Where are the gated neighborhoods near Myrtle Beach?", toc: "Map", html:
      h.p("Gated neighborhoods near Myrtle Beach are in four parts of the coast. From north to south, they are North Myrtle Beach, Myrtle Beach and Carolina Forest, Surfside Beach to Murrells Inlet, and Pawleys Island. Conway, inland, has one with a gate at its back entrance.") +
      MAP.html },

    { h2: "Which gated community fits what you want?", toc: "Which one fits you", html:
      h.p("The best gated community for you depends on what you want close by. Start with what matters most to you.") +
      wantPicker([
        { icon: "beach", want: "Close to the beach", note: "About 2 to 8 minutes by car to a public beach access.",
          places: [{ name: "Seaside Plantation", href: "#table-north-myrtle-beach" }, { name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Tidewater Plantation", href: "#table-north-myrtle-beach" }] },
        { icon: "dollar", want: "A low HOA fee", note: "About $80 to $150 a month.",
          places: [{ name: "Covington Lake East", href: "#table-myrtle-beach" }, { name: "Myrtle Trace", href: MT }, { name: "Wachesaw East", href: "#table-murrells-inlet" }] },
        { icon: "home", want: "A lower price", note: "Myrtle Trace has gates only at its back entrance.",
          places: [{ name: "Myrtle Trace", href: MT }, { name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Seasons at Prince Creek West", href: SEASONS }] },
        { icon: "gate", want: "A guard house at the gate",
          places: [{ name: "Litchfield by the Sea", href: "#table-pawleys-island" }, { name: "Tidewater Plantation", href: "#table-north-myrtle-beach" }, { name: "DeBordieu Colony", href: "#table-pawleys-island" }] },
        { icon: "golf", want: "A golf course",
          places: [{ name: "Prestwick", href: "#table-murrells-inlet" }, { name: "Heritage Plantation", href: "#table-pawleys-island" }, { name: "The Reserve", href: "#table-pawleys-island" }] },
        { icon: "clubhouse", want: "A 55+ neighborhood",
          places: [{ name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Myrtle Trace", href: MT }] },
      ]) +
      h.p(`About half of these neighborhoods are golf communities. Our ${h.a("/buyers/golf-communities/", "guide to golf communities near Myrtle Beach")} covers the courses. Myrtle Trace and Seasons at Prince Creek West are 55+ neighborhoods, and our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities")} compares them with two others.`) +
      h.p(`To skip an HOA fee altogether, see ${h.a("/buyers/no-hoa-homes/", "where to find homes with no HOA near Myrtle Beach")}. To compare neighborhoods with and without a gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach for what you want nearby")}.`) },

    { h2: "What do homes in gated neighborhoods near Myrtle Beach cost?", toc: "Prices", html:
      h.p("Homes in most gated neighborhoods near Myrtle Beach usually sell for about $480,000 to $850,000. The gated sections of Grande Dunes cost the most, at about $1.5 million.") +
      h.figure(priceChart(), "Chart of what homes usually sell for in eight gated neighborhoods near Myrtle Beach, lowest to highest.") +
      h.p(`These are prices homes sold for, recorded with the ${h.ext(ROD, "county's Register of Deeds")}, not asking prices. Myrtle Trace costs less, but its front entrance has no gate.`) },

    { h2: "Which neighborhoods in North Myrtle Beach are gated?", toc: "North Myrtle Beach", id: "north-myrtle-beach", html:
      h.p(`Tidewater Plantation, Seaside Plantation and parts of Barefoot Resort are the gated neighborhoods in North Myrtle Beach on this page. Of these three, Seaside Plantation is the closest to a ${h.ext(BEACH, "public beach access")}.`) +
      table("table-north-myrtle-beach", compareCards([
        { name: "Tidewater Plantation", cells: { gate: "Guard house", fee: "About $230 a month", price: "About $625,000", beach: "About 8 minutes" } },
        { name: "Seaside Plantation", cells: { gate: "Gate", fee: "$206 to $208 a month", price: "$650,000 to $885,000", beach: "About 2 minutes" } },
        { name: "Leatherleaf, in Barefoot Resort", cells: { gate: "Gate", fee: "$385 to $398 a month", price: "$700,000 to $975,000", beach: "About 10 minutes" } },
      ], COLS, opts("Gated neighborhoods in North Myrtle Beach", true))) +
      h.p(`Barefoot Resort is not gated as a whole. ${h.ext(BAREFOOT, "Its residents' association")} lists eight gated neighborhoods. Dye Estates, Leatherleaf and Oak Pointe have houses. Blackwater Townhomes, Dye Townhomes, Edgewater, River Crossing and Woodlands are ${h.ext(BAREFOOT_MF, "townhome and condo neighborhoods")}.`) +
      h.p("Staff at the front guardhouse of Dye Estates greet owners and their guests. Barefoot Resort also has four golf courses.") },

    { h2: "Which neighborhoods in Myrtle Beach, Carolina Forest and Conway have a gate?", toc: "Myrtle Beach and Carolina Forest", id: "myrtle-beach-carolina-forest", html:
      h.p(`In Myrtle Beach, only some sections of Grande Dunes are gated. Calais, Palermo, Tuscany Village and Villa Venezia have a gate. The ${h.ext(TOLL, "Cascadia section")} is inside a part of Grande Dunes with a gate staffed 24 hours a day.`) +
      h.p("Carolina Forest is a large area of neighborhoods just inland from Myrtle Beach. Covington Lake East, Waterway Palms Plantation and The Bluffs on the Waterway are gated there. Myrtle Trace, a 55+ neighborhood near Conway, has gates only at its back entrance.") +
      table("table-myrtle-beach", compareCards([
        { name: "Grande Dunes: Calais, Palermo and Villa Venezia", cells: { gate: "Gated sections", fee: "About $200 to $375 a month", price: "About $1.5 million", beach: "About 10 minutes" } },
        { name: "Waterway Palms Plantation", cells: { gate: "Gate", fee: "$137 to $157 a month", price: "About $780,000", beach: "About 10 minutes" } },
        { name: "The Bluffs on the Waterway", cells: { gate: "Main gate", fee: "$154 a month on most homes", price: "$730,000 to $975,000", beach: "About 10 minutes" } },
        { name: "Covington Lake East", cells: { gate: "Gate", fee: "$80 to $95 a month", price: "About $570,000", beach: "About 15 minutes" } },
        { name: "Myrtle Trace (55+)", href: MT, cells: { gate: "Back entrance only", fee: "$95 a month", price: "About $300,000", beach: "About 15 minutes" } },
      ], COLS, opts("Gated neighborhoods in Myrtle Beach, Carolina Forest and Conway", false))) +
      h.p(`For a closer look at one Carolina Forest neighborhood, see our ${h.a("/submarkets/carolina-forest/the-farm/", "guide to The Farm at Carolina Forest")}.`) },

    { h2: "Which neighborhoods from Surfside Beach to Murrells Inlet are gated?", toc: "Surfside Beach to Murrells Inlet", id: "surfside-murrells-inlet", html:
      h.p("Prestwick, off Highway 544 just outside the town of Surfside Beach, is the closest gated neighborhood to Surfside Beach. Its nearest public beach access is in Surfside Beach.") +
      h.p("In Murrells Inlet, Bellwood Landing, Wachesaw Plantation and Wachesaw East are gated. Seasons at Prince Creek West is a 55+ neighborhood across the road from Bellwood Landing. Seasons has a gate at its main entrance, with a call box for visitors. Homes in Seasons usually sell for about $500,000, and its HOA fee is about $340 a month.") +
      table("table-murrells-inlet", compareCards([
        { name: "Prestwick", cells: { gate: "Main gate and side gate", fee: "$185 to $197 a month", price: "About $480,000", beach: "About 7 minutes" } },
        { name: "Bellwood Landing", cells: { gate: "Main gate", fee: "$157 a month", price: "About $850,000", beach: "About 15 minutes" } },
        { name: "Wachesaw Plantation", cells: { gate: "Guard gate", fee: "$151 to $280 a month", price: "Ask us", beach: "About 15 minutes" } },
        { name: "Wachesaw East", cells: { gate: "Gate", fee: "$141 to $149 a month", price: "Ask us", beach: "About 10 minutes" } },
      ], COLS, opts("Gated neighborhoods from Surfside Beach to Murrells Inlet", false))) +
      h.p(`Where the table says “Ask us”, ${h.a(OFFER, "tell us your price range")} and we send you the homes for sale there now, with their prices.`) },

    { h2: "Which neighborhoods in Pawleys Island and Litchfield are gated?", toc: "Pawleys Island", id: "pawleys-island", html: (bg) =>
      h.p(`Litchfield by the Sea, at Litchfield near Pawleys Island, is a private, gated community. Its main gate on US 17 is ${h.ext(LBTS_GUIDE, "staffed 24 hours a day")}.`) +
      h.p("Litchfield Plantation, Willbrook Plantation, The Reserve and Heritage Plantation are gated neighborhoods near Pawleys Island. DeBordieu Colony, a little farther south toward Georgetown, has a guard gate too.") +
      table("table-pawleys-island", compareCards([
        { name: "Litchfield Plantation", cells: { gate: "Gate house", fee: "$230 to $275 a month", beach: "About 8 minutes" } },
        { name: "Willbrook Plantation", cells: { gate: "Guard gate", fee: "$339 to $346 a month", beach: "About 9 minutes" } },
        { name: "The Reserve", cells: { gate: "Gate", fee: "$318 to $437 a month", beach: "About 8 minutes" } },
        { name: "Heritage Plantation", cells: { gate: "Main gate", fee: "$317 to $332 a month", beach: "About 10 minutes" } },
        { name: "DeBordieu Colony", cells: { gate: "Guard gate", fee: "$302 to $379 a month", beach: "About 20 minutes" } },
      ], COLS_NO_PRICE, opts("Gated neighborhoods in Pawleys Island and Litchfield", false))) +
      h.cta("Get this week's list of homes for sale in gated neighborhoods.",
        "Tell us your price range and the area you like. One of our agents will send you this week's homes for sale in the gated neighborhoods that fit.",
        "Get the list", OFFER, bg) +
      h.p(`If your budget is tighter, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy a home near Myrtle Beach")}.`) },

    { h2: "What does a gate mean for you as an owner?", toc: "What a gate means", html: (bg) =>
      h.p("A gate means guests stop at the entrance, and the HOA, not the county, usually keeps up the gate and the streets. Owners pay for both through the HOA fee.") +
      atAGlance([
        { icon: "home", label: "The streets", text: "Outside city limits in Horry County, the streets behind a gate are usually private. The HOA keeps them up, not the county." },
        { icon: "dollar", label: "Your HOA fee", text: "The HOA uses the fee to run the gate and to keep up the private streets." },
        { icon: "key", label: "Guests", text: "Guests stop at the gate. At Litchfield by the Sea, the owner registers each guest before the visit." },
        { icon: "gate", label: "Workers", text: "At Litchfield by the Sea, a contractor's truck needs its own $25 barcode to come through the gate." },
      ], { bg, min: "18rem" }) +
      h.p(`Each gate works its own way. At Litchfield by the Sea, owners pay ${h.ext(LBTS_FAQ, "$25 for a barcode")} for each car. At Dye Estates in Barefoot Resort, staff at the front guardhouse greet owners and their guests. At Seasons at Prince Creek West, visitors use a call box at the main gate.`) +
      h.p(`A sign can tell you the streets are private. Outside city limits, ${h.ext(CODE, "Horry County requires")} a sign at the entrance of a neighborhood with private roads: “Private Road. Not maintained by Horry County.” Private streets there have blue street signs, and public streets have green ones.`) +
      h.p(`The county does not repave private streets, so the HOA pays for it from its savings or from the owners. Before you buy, ${h.a("/hoa/reserves/", "check how much the HOA has saved for repairs")} and ${h.a("/hoa/documents/", "read the HOA documents")}. When you tour a home, your agent arranges your way in at the gate.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", html: (bg) =>
      h.p("A gated community keeps through traffic off your street, and you pay for the gate and the streets through the HOA fee.") +
      prosCons([
        "Visitors stop at the gate, and drivers cannot use your streets as a shortcut.",
        "You can find a gated neighborhood near the beach or inland, from North Myrtle Beach to Pawleys Island.",
        "About half are golf communities, and two are 55+ neighborhoods.",
      ], [
        { text: "You pay for the gate and the private streets through your HOA fee.", act: `Ask what the fee covers before you make an offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} explains the usual list.` },
        { text: "The county does not repave private streets. The HOA pays from its savings or asks owners for more.", act: `Check the HOA's savings, and ask about any ${h.a("/hoa/special-assessments/", "special assessment")} planned.` },
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
  faqTitle: "Gated communities near Myrtle Beach: FAQ",
  faq: [
    { q: "What are the best gated communities in Myrtle Beach?", a: "The best one depends on what you want nearby. Seaside Plantation in North Myrtle Beach is about 2 minutes by car from a public beach access. Covington Lake East and Myrtle Trace have the lowest HOA fees on this page. Litchfield by the Sea has a main gate staffed 24 hours a day." },
    { q: "Are there gated communities in North Myrtle Beach?", a: "Yes. Tidewater Plantation and Seaside Plantation are gated. Eight neighborhoods inside Barefoot Resort are gated too, including Dye Estates and Leatherleaf." },
    { q: "Is there a gated community in Surfside Beach?", a: "Prestwick, off Highway 544 just outside the town, is gated. Its nearest public beach access is in Surfside Beach, about 7 minutes away by car." },
    { q: "Are there gated communities in Murrells Inlet?", a: "Yes. Bellwood Landing, Wachesaw Plantation and Wachesaw East are gated. The 55+ neighborhood Seasons at Prince Creek West has a gate at its main entrance, with a call box for visitors." },
    { q: "Is Grande Dunes a gated community?", a: "Only some sections are. Calais, Palermo, Tuscany Village and Villa Venezia have a gate. Cascadia is inside a part of Grande Dunes with a gate staffed 24 hours a day." },
    { q: "Is Barefoot Resort a gated community?", a: "Not as a whole. Eight of its neighborhoods are gated: Dye Estates, Leatherleaf, Oak Pointe, Blackwater Townhomes, Dye Townhomes, Edgewater, River Crossing and Woodlands." },
    { q: "Are there gated golf communities near Myrtle Beach?", a: "Yes. Prestwick, Tidewater Plantation, Heritage Plantation, The Reserve and DeBordieu Colony are golf course communities with a gate. Barefoot Resort, with four golf courses, has eight gated neighborhoods." },
    { q: "Who takes care of the roads in a gated community?", a: "Usually the HOA. Outside city limits in Horry County, the county does not maintain private streets. The HOA or a similar group must keep them up." },
  ],
  sources: [
    { name: "Horry County land development rules", href: CODE },
    { name: "Horry County deed records", href: DEEDS },
    { name: "Litchfield by the Sea guest guide", href: LBTS_GUIDE },
    { name: "Barefoot Resort Residential Association", href: BAREFOOT },
    { name: "Toll Brothers, Cascadia at Grande Dunes", href: TOLL },
  ],
  sourcesNote: "Not legal advice. Gates, HOA fees and golf come from the associations, a builder and recent home listings. Prices are the middle recorded sale over the last 12 months, or the range where few homes sold, without builder sales. Drive times are OpenStreetMap estimates with no traffic, to the nearest beach access with parking.",
  bottomCta: { h2: "Get this week's list of homes for sale in gated neighborhoods.", p: "Tell us your price range and the area you like. One of our agents will send you this week's homes for sale in the gated neighborhoods that fit.", label: "Get the list", href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
