/* /buyers/gated-communities/ - the gated neighborhoods near Myrtle Beach, sold one at a time.
 *
 * Version 6, round 14 (2026-10-14 and 15). A rebuild, not a patch. The owner's third read
 * (voice/VERDICTS.md, 2026-10-14): "im scrolling for a very long time before i get to anything
 * valuable"; the list three times, the map three times, illustrations nobody reads, a table nobody
 * understands; "surface level ... sell the location ... find whats unique talk about why people would
 * want to live there then mention price then move to the next location"; "theres not even any CTA's
 * for any property"; "don't do the facts: thats not how a human talks". Lessons B39 to B44; CRAFT 1, 3,
 * 4 and 5; batches/2026-10-b/review/ROUND-14.md.
 *
 * Reader (CRAFT 1, audience rule). Someone who typed "gated communities Myrtle Beach" or "gated
 * communities near Myrtle Beach SC". They have money and want a way of living, privacy and service.
 * What they would pay an expert to know, in order:
 *   1. Which gated places exist here, and which one fits the life they want (ocean, boat, golf, 55+).
 *   2. The club: whose course, what it has hosted, whether membership is part of the house or extra.
 *   3. The water: a beach club, a marina with staff, a ramp at home.
 *   4. How the gate really works: a guard or a keypad, how guests and deliveries get in.
 *   5. What the fee takes off their hands (cable, security, a dock master) and what it does not.
 *   6. What a normal week is like: dining, events, groups.
 *   7. History and landmarks only a local knows.
 *   8. Then price and fee, and a way to see the homes.
 *   And the question we cannot rate: is it safer? (CRAFT 1, "Answer the question you cannot answer".)
 *
 * Top results read 2026-10-14 (CRAFT 1):
 *   homeguidemyrtlebeach.com/gated-communities-in-myrtle-beach/: 18 names as links, then a table of 15
 *     with unsourced "insights" and price guesses; no gate details or fees; the lists do not match.
 *   mbcoastalhomes.realgeeks.com/gated-communities/: 12 names linked to listing searches, live listings
 *     (some not gated); no description of any community.
 *   countryclubmag.com, "Top 20 Most Expensive Gated Communities": a ranked list with a paragraph each;
 *     some gate details; no prices or fees despite the title; vague praise.
 *   Each does one thing well (the listings; a paragraph per place). None says how a gate works, what a
 *   club costs beside the house, or what only one place has. We beat them on that, and on a way to act
 *   on each place.
 *
 * Shape (CRAFT 3, "No preamble"): the short answer, one offer box, the selection guide (the only list of
 * places before the entries, grouped by what each does best, with the one map inside it), then the 20
 * entries, north to south as the map. Each entry: its best non-obvious thing first, then a normal day,
 * one honest trade-off, price and fee in one sentence, and its own offer, a button to the contact form
 * with the place named (/contact/?about=<place>). After the entries: one plain price table, what a gate
 * does, the yearly cost, pros and cons, the labelled example, the FAQ. Cut: the glance tiles, the
 * second and third maps, the "What are you looking for?" table, the "The facts:" lines, 18 of the 20
 * aerials (only the two that show the ocean stay, and the gate aerial in the safety section).
 *
 * Facts: batches/2026-10-b/facts/gated-communities-facts.md. Rows 1 to 199 as verified in rounds 1 to
 * 13, in their verifiers' wording limits (struck list: gated-communities-struck.json). New rows 200 to
 * 399, round 14, from five researchers (batches/2026-10-b/facts/r14/), pending verification by agents
 * that did not research them. Never: safe, secure, exclusive, luxury; a rating; who lives anywhere; a
 * conclusion about an HOA, a club or a builder; a rate or a payment.
 *
 * Design: the liquid glass theme (batches/2026-10-b/DESIGN-GLASS.md) when it lands. TODO(design): swap
 * GUIDE_CSS and OFFER for the theme's classes and its per-place offer button.
 */
const { h, kit, photoSetB, prosCons, story, BB } = require("./_kit.js");
const path = require("path");
const { regionMap } = require(path.join(BB, "tools", "area-map.js"));
const G = require(path.join(BB, "tools", "glass.js"));

const SELF = "/buyers/gated-communities/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const SEASONS = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const FARM = "/submarkets/carolina-forest/the-farm/";
const OFFER = "/contact/";
const OFFER_LABEL = "Get this week's list";

/* Sources, linked in the body or the sources line. */
const CODE = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_CH18LADERE";
const LBTS_GUIDE = "https://litchfieldbythesea.com/wp-content/uploads/2026/06/LBTS-Guest-Orientation-Guide-2026-Long-Version.pdf";
const DYE_RULES = "https://www.barefoothoa.com/wp-content/uploads/2022/05/DES_Rules_Regs_V3_Final.pdf";
const HERITAGE = "https://www.heritageplantation.com/";
const DEBORDIEU_PACKET = "https://www.debordieucolony.org/wp-content/uploads/2026/06/Welcome-Packet-2026-Website.pdf";
const WACHESAW = "https://www.wachesaw.com/";
const RESERVE_MARINA = "https://sccm.scseagrant.org/safe-harbor-reserve-harbor-recertifies-as-a-s-c-clean-marina/";
const SLED = "https://www.sled.sc.gov/sc-crime-data";

/* ---------------------------------------------------------------------------- */
/* The 20 places, north to south. lat/lon: the dot used on the earlier maps (data/gated-map.json, or the
   address point of ledger rows 57 to 76); here they only place the six area marks on the one map. */
const E = [
  { id: "tidewater-plantation", name: "Tidewater Plantation", lat: 33.85093, lon: -78.62229, area: "nmb", price: "About $625,000", fee: "About $230" },
  { id: "seaside-plantation", name: "Seaside Plantation", lat: 33.82688, lon: -78.66809, area: "nmb", price: "About $720,000", fee: "About $210" },
  { id: "barefoot-resort", name: "Barefoot Resort", full: "Dye Estates and Leatherleaf in Barefoot Resort", lat: 33.80788, lon: -78.7403, area: "nmb", price: "About $700,000 to $975,000 in Leatherleaf", fee: "About $390 in Leatherleaf" },
  { id: "grande-dunes", name: "Grande Dunes", full: "the gated sections of Grande Dunes", lat: 33.75879, lon: -78.82911, area: "mb", price: "About $1.5 million", fee: "About $200 to $375" },
  { id: "waterway-palms-plantation", name: "Waterway Palms Plantation", lat: 33.742110, lon: -78.876082, area: "mb", price: "About $780,000", fee: "About $150" },
  { id: "the-bluffs-on-the-waterway", name: "The Bluffs on the Waterway", lat: 33.746358, lon: -78.867299, area: "mb", price: "About $850,000", fee: "About $150" },
  { id: "covington-lake-east", name: "Covington Lake East", lat: 33.75485, lon: -78.94557, area: "mb", price: "About $570,000", fee: "About $90" },
  { id: "myrtle-trace", name: "Myrtle Trace", label: "Myrtle Trace (55+)", href: MT, lat: 33.77765, lon: -78.99495, area: "conway", price: "About $300,000", fee: "$95" },
  { id: "myrtle-beach-golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", lat: 33.646385, lon: -79.050559, area: "socastee", price: "About $225,000 in the older part", fee: "About $95" },
  { id: "prestwick", name: "Prestwick", lat: 33.64245, lon: -78.95602, area: "socastee", price: "About $480,000", fee: "About $190" },
  { id: "prince-creek-55", name: "Seasons at Prince Creek West", label: "Seasons at Prince Creek West (55+)", href: SEASONS, lat: 33.585419, lon: -79.071772, area: "mi", price: "About $500,000", fee: "About $340" },
  { id: "bellwood-landing", name: "Bellwood Landing", lat: 33.582185, lon: -79.073470, area: "mi", price: "About $810,000", fee: "About $160" },
  { id: "wachesaw-plantation", name: "Wachesaw Plantation", lat: 33.560796, lon: -79.073101, area: "mi", price: "About $700,000", fee: "About $150 on most homes" },
  { id: "wachesaw-east", name: "Wachesaw East", lat: 33.558050, lon: -79.058480, area: "mi", price: "About $500,000", fee: "About $145" },
  { id: "the-reserve", name: "The Reserve", lat: 33.49467, lon: -79.1133, area: "pawleys", price: "About $1.3 million", fee: "About $320 on most homes" },
  { id: "willbrook-plantation", name: "Willbrook Plantation", lat: 33.48206, lon: -79.13519, area: "pawleys", price: "About $840,000", fee: "About $340" },
  { id: "litchfield-plantation", name: "Litchfield Plantation", lat: 33.47674, lon: -79.1313, area: "pawleys", price: "About $800,000 to $1.8 million", fee: "About $230 on most homes" },
  { id: "litchfield-by-the-sea", name: "Litchfield by the Sea", lat: 33.471219, lon: -79.126112, area: "pawleys", price: "About $200,000 for a one-bedroom condo to $2.2 million", fee: "Differs by section" },
  { id: "heritage-plantation", name: "Heritage Plantation", lat: 33.44215, lon: -79.16353, area: "pawleys", price: "About $710,000", fee: "About $325" },
  { id: "debordieu-colony", name: "DeBordieu Colony", lat: 33.3744, lon: -79.17446, area: "pawleys", price: "About $2 million", fee: "About $300 to $400" },
];
E.forEach((e, i) => { e.n = i + 1; });
const byId = Object.fromEntries(E.map((e) => [e.id, e]));

/* ---------------------------------------------------------------------------- */
/* The look. TODO(design): replace with the liquid glass theme's classes (DESIGN-GLASS.md). */
const GUIDE_CSS = `<style>
.c3g-guide{display:grid;gap:1rem;max-width:960px;margin:.4rem 0 0}
@media(min-width:900px){.c3g-guide{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);align-items:start}}
.c3-want{list-style:none;margin:0;padding:.3rem .9rem;border:1px solid var(--line,#e3dccf);border-radius:14px;background:rgba(255,255,255,.55)}
.c3-want>li{padding:.55rem 0;border-bottom:1px solid var(--line,#e3dccf);line-height:1.45}
.c3-want>li:last-child{border-bottom:0}
.c3-want b{display:block;color:var(--navy);font-weight:600}
.c3-want a{color:var(--navy);text-decoration:underline;text-underline-offset:.18em;margin-right:.7rem;white-space:nowrap}
.c3g-map{margin:0}
.c3g-map figcaption{color:var(--muted);font-size:.95rem;line-height:1.5;margin-top:.4rem}
.c3-place-cta{margin:1.2rem 0 .4rem;max-width:720px}
.c3-place-cta>p{margin-bottom:.2rem}
</style>`;


/* ---------------------------------------------------------------------------- */
/* The one map: six areas along the coast, each named with the entry numbers it holds. The area's mark
   is the middle of its places' dots. The tool numbers its marks 1 to 6; those numbers would read as
   entries, so they are removed and the name carries the entry numbers. */
const AREAS = [
  ["nmb", "North Myrtle Beach"], ["mb", "Myrtle Beach and Carolina Forest"], ["conway", "Conway"],
  ["socastee", "Near Surfside Beach"], ["mi", "Murrells Inlet"], ["pawleys", "Pawleys Island to DeBordieu"],
];
const nums = (a) => {
  const ns = E.filter((e) => e.area === a).map((e) => e.n);
  return ns.length === 1 ? String(ns[0]) : ns.length === 2 ? `${ns[0]} and ${ns[1]}` : `${ns[0]} to ${ns[ns.length - 1]}`;
};
const MAP = (() => {
  const places = AREAS.map(([a, label]) => {
    const pts = E.filter((e) => e.area === a);
    const lat = pts.reduce((s, e) => s + e.lat, 0) / pts.length, lon = pts.reduce((s, e) => s + e.lon, 0) / pts.length;
    return { name: `${label}, ${nums(a)}`, lat, lon };
  });
  const MAPDIR = { dir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), src: "/images/maps", width: 420 };
  const m = regionMap({ name: "Where the 20 gated neighborhoods are", places }, MAPDIR);
  const spoken = AREAS.map(([a, label]) => `${label}, numbers ${nums(a)}`).join("; ");
  const svg = m.html
    .replace(/(<text class="nm"[^>]*>)\d+(<\/text>)/g, "$1$2")
    .replace(/aria-label="[^"]*"/, `aria-label="Map of the coast from North Myrtle Beach to DeBordieu, with the 20 gated neighborhoods in six areas: ${spoken}."`);
  if (/<text class="nm"[^>]*>\d/.test(svg)) throw new Error("gated-communities: a map number was left on an area mark");
  return `<figure class="c3g-map">${svg}<figcaption>Where they are, by area and number. ${m.credit}</figcaption></figure>`;
})();

/* The selection guide: every place once, under what it does best (features, never people). */
const GUIDE_GROUPS = [
  ["On the ocean, or with an oceanfront club", ["litchfield-by-the-sea", "debordieu-colony", "grande-dunes"]],
  ["A marina on the river with staff", ["the-reserve", "heritage-plantation"]],
  ["Your own boat ramp on the Intracoastal Waterway", ["waterway-palms-plantation", "the-bluffs-on-the-waterway"]],
  ["A golf course with a name", ["tidewater-plantation", "barefoot-resort", "prestwick", "wachesaw-plantation", "wachesaw-east"]],
  ["History you can live inside", ["litchfield-plantation", "willbrook-plantation"]],
  ["A golf cart ride to Main Street", ["seaside-plantation"]],
  ["55+, with a gate", ["myrtle-trace", "prince-creek-55"]],
  ["A gate for under $100 a month", ["covington-lake-east", "myrtle-beach-golf-and-yacht-club"]],
  ["Big lots by a creek", ["bellwood-landing"]],
];
{
  const seen = GUIDE_GROUPS.flatMap(([, ids]) => ids);
  if (seen.length !== E.length || new Set(seen).size !== E.length) throw new Error("gated-communities: the guide must list each place once");
}
const GUIDE = `<div class="c3g-guide c3-guide-map"><ul class="c3-want">`
  + GUIDE_GROUPS.map(([want, ids]) => `<li><b>${want}</b>${ids.map((id) => byId[id]).sort((a, b) => a.n - b.n)
    .map((e) => `<a href="#${e.id}">${e.n}. ${e.name}</a>`).join(" ")}</li>`).join("")
  + `</ul>${MAP}</div>`;

/* ---------------------------------------------------------------------------- */
/* One entry: an H2, the paragraphs, an optional photo under the first paragraph, then the place's own
   offer: the price and fee in one sentence, and a button to book a showing there (glass.js offer(),
   which links to /contact/?place=<place>). The two sit together in one box, as an agent closes: what it
   costs, then "let me show you". */
const ph = photoSetB({ aerialWidth: "720px" });
ph.share("prestwick-gate-from-above-2026");
function entry(id, head, paras, price, photo) {
  const e = byId[id];
  const [first, ...rest] = paras;
  return { h2: `${e.n}. ${e.label || e.name}: ${head}`, id, html: () =>
    h.p(first) + (photo ? ph.aerial(photo[0], photo[1], { closeUp: true }) : "") + rest.map((t) => h.p(t)).join("")
    + `<div class="c3-place-cta">${h.p(price)}${G.offer(e.name)}</div>` };
}

const SECTIONS_PLACES = [
  entry("tidewater-plantation", "nine holes along Cherry Grove Inlet", [
    "Tidewater's golf course is one of the best public courses in America. Golf Digest ranked Tidewater Golf Club No. 39 on its list of America's 100 Greatest Public Courses for 2023 to 2024. Nine of its holes play along the tidal inlet at Cherry Grove.",
    "The course opened in 1990, and Golf Digest and Golf Magazine both named it the best new public course in America that year. After a round, Joey's Clubhouse Grille looks out over the fairways and opens at 11 every morning.",
    "At home there are tennis and pickleball courts and a fitness center, and the neighborhood keeps a beach cabana with its own parking at Cherry Grove Beach. Visitors check in at the gatehouse on Little River Neck Road.",
    "The course is public, so you share it with visitors, and a golf membership costs extra; any Horry County resident can buy one.",
  ], "Homes at Tidewater usually sell for about $625,000. The HOA fee is about $230 a month."),

  entry("seaside-plantation", "a golf cart ride to Main Street", [
    "Seaside Plantation is the gated neighborhood closest to Main Street in North Myrtle Beach, the home of the shag. Main Street is a golf cart ride away.",
    "Each spring and fall the Society of Stranders brings its shag dance festivals, the Spring Safari and the Fall Migration, to Main Street and Ocean Drive. The Fall Migration runs for 11 days each September.",
    "Back home, the lakes behind many of the houses, about 13 acres of water, belong to the neighborhood. The clubhouse has a hot tub and parking for golf carts, and a Walmart Supercenter, a Lowe's and Gator Hole Plaza are a 3- to 5-minute drive.",
    "The ocean is a quarter to three-quarters of a mile from the houses, not at the back door, and festival weeks bring crowds to Main Street.",
  ], "Homes here usually sell for about $720,000, with an HOA fee of about $210 a month."),

  entry("barefoot-resort", "the course that hosts the Monday After the Masters", [
    "Dye Estates, a gated neighborhood inside Barefoot Resort, surrounds the Dye Course, home of the Monday After the Masters. Hootie & the Blowfish host the charity pro-am each spring, and it brings celebrities and PGA Tour players; in 2025 its tickets sold out.",
    `Its gate is staffed. A guard works the main gate ${h.ext(DYE_RULES, "24 hours a day")}, owners drive through a resident lane with a barcode on the car, and a guest gets in only when the owner has given the guard the guest's name and the date. At the second gate, a guest can call the owner from the keypad, and the owner presses 9 on the phone to open it.`,
    "Leatherleaf, the other gated neighborhood here, is 62 houses around a pond with the Love Course on every side. Davis Love III designed that course with Pinehurst No. 2 in mind. Leatherleaf has the Residents' Club too, with a pool, a weight room, a library and a lifestyle director who plans events.",
    "In summer a free shuttle runs to the resort's oceanfront cabana, which has key-fob parking, showers and a pet-washing station. In these two neighborhoods you call the driver 15 minutes ahead.",
    "Most of Barefoot Resort has no gate. In Dye Estates the ponds are only for looking at: no swimming, boating, fishing or docks. Lots there are still for sale with no deadline to build, so a house can go up next door at any time.",
  ], "Leatherleaf homes sold for about $700,000 to $975,000 in the past year, with an HOA fee of about $390 a month. Dye Estates homes have resold for about $1.4 million to $2.5 million."),

  entry("grande-dunes", "an oceanfront club that comes with the house", [
    "In Grande Dunes, a household membership to the Ocean Club comes with the home at no extra charge. The club is on the beach, with towel and bar service at its pool and cabanas on the sand.",
    "Its private Members Club course was designed by Nick Price, a member of golf's Hall of Fame, with Craig Schreiner. The clubhouse has two Trackman simulators that play more than 260 courses, and the calendar runs from wine dinners to a Fourth of July cookout. That club is a separate membership.",
    "Grande Dunes Marina, on the Intracoastal Waterway, has 126 slips and takes boats of 120 feet or more, with fuel and a store. The public two-mile Waterway Trail starts nearby.",
    "Only some sections of Grande Dunes are gated, among them Calais, Palermo and Villa Venezia. Palermo and Villa Venezia sit beside the golf course.",
  ], "Homes in those three sections usually sell for about $1.5 million, and the HOA fee runs about $200 to $375 a month."),

  entry("waterway-palms-plantation", "a boat ramp inside the gate", [
    "Waterway Palms Plantation has its own boat ramp on the Intracoastal Waterway, inside the gate, along with a day dock and boat storage. You launch at home instead of towing the boat across town.",
    "The plan copies the look of Charleston's Battery district. The clubhouse stands on a point in a pond, beside the pools, and the neighborhood has tennis and pickleball courts, a fitness center and sidewalks throughout.",
    `The land was part of Carolina Forest, which the Army Air Force used as a bombing and gunnery range from 1942 to 1948. Read that story in our ${h.a(FARM, "guide to The Farm at Carolina Forest")}.`,
    "Builders are still finishing new houses, so parts of the neighborhood are still under construction.",
  ], "Homes usually sell for about $780,000, and the HOA fee is about $150 a month."),

  entry("the-bluffs-on-the-waterway", "a boathouse clubhouse on the waterway", [
    "The Bluffs on the Waterway has two clubhouses, and one of them is a boathouse on the Intracoastal Waterway. The neighborhood has day docks, a boat ramp and boat storage.",
    "Many of the houses are custom Mediterranean-style homes in stucco, and many look onto ponds with fountains. Black Creek runs through the woods along its west side, and the county's bike park is less than a mile away.",
    "There are tennis and pickleball courts and a playground, and the lakes belong to the neighborhood's association.",
    "About 40 of its lots still have no house, so building will go on for a while.",
  ], "Homes here usually sell for about $850,000; the HOA fee is about $150 a month."),

  entry("covington-lake-east", "a gate, a pool and a clubhouse for about $90 a month", [
    "Covington Lake East has the lowest HOA fee of the 20: about $90 a month for a gate, a pool and a clubhouse. The association also keeps the private road.",
    "It is a small neighborhood of brick houses in Carolina Forest, on curving streets among ponds. Most lots are about a quarter of an acre, the streets have sidewalks, and many of the houses have natural gas.",
    "Lennar built about 50 of the houses from 2015 to 2017, and many builders built the rest one lot at a time, so the houses differ from street to street.",
    "It has no golf club or boat ramp of its own.",
  ], "Homes in Covington Lake East usually sell for about $570,000."),

  entry("myrtle-trace", "high ground, run by its owners", [
    "Myrtle Trace sits on high ground. Locals knew the land as a ridge, and it stands about 40 feet above sea level, against about 14 feet at the oceanfront downtown.",
    `It is a 55+ neighborhood: every occupied home must have a resident 55 or older. The owners run the HOA themselves, with volunteers and no management company, and residents write the monthly newsletter. Our ${h.a(MT, "guide to Myrtle Trace")} covers its rules.`,
    "The pool logged more than 4,000 visits in the 2026 season, with morning exercise and evening volleyball, and the summer ends with a potluck by the water. Fifteen ponds lie among the streets, and residents may fish from the common land if every fish goes back.",
    "The gates are only at the back entrance, to keep out cut-through traffic; the front entrance is open. Trucks may not park in driveways, and the board has decided not to seek a change before the covenants renew in 2033.",
  ], "Homes usually sell for about $300,000, and the HOA fee is $95 a month."),

  entry("myrtle-beach-golf-and-yacht-club", "a gatehouse for about $95 a month", [
    "Myrtle Beach Golf and Yacht Club pairs a gatehouse on Bay Road with one of the lowest fees on this page, about $95 a month. Wide strips of grass and woods, with ponds, lie between its streets, and the association owns about 62 acres of that open land.",
    "Its sections have their own names, such as Camelot, Ashley Cove, the Fairways and the Gardens at Heron Point. There is a clubhouse with tennis and shuffleboard courts and a playground, and the association has a storage area for RVs and trailers.",
    "Enterprise Landing, a public boat ramp on the Intracoastal Waterway, is about a 4-minute drive from the entrance.",
    "Most of its houses are older, and Sandpiper Place, where D.R. Horton is building new houses, shares the entrance on Bay Road. We confirm whether a home is behind the gate before you make an offer.",
  ], "In the older part, homes usually sell for about $225,000."),

  entry("prestwick", "a Pete and P.B. Dye course named Course of the Year", [
    "Prestwick's course, by Pete Dye and his son P.B. Dye, was named the 2025 Myrtle Beach Area Golf Course of the Year. It carries Dye's marks: wooden bulkheads along the water, deep bunkers around raised greens and fast greens.",
    "Prestwick opened in 1989 as a private club, founded by the Jackson family, who also created Ocean Lakes. The Gatlin Brothers once lived here and held a charity golf tournament each year.",
    "When the club ended its memberships, the owners association took over the large pool, a smaller pool and the tennis center, with eleven clay courts and two hard courts. The clay courts need a tennis membership of their own. Visitors come in through the gatehouse at the main gate off Highway 544.",
    "The course has been fully public since 2016, so golfers who do not live here play it too.",
  ], "Homes usually sell for about $480,000, and the HOA fee is about $190 a month."),

  entry("prince-creek-55", "a 55+ clubhouse with an indoor pool", [
    "Seasons at Prince Creek West has a clubhouse with indoor and outdoor pools and a fitness center, plus tennis and bocce. In 2013 Where to Retire magazine named it one of the 50 best master-planned communities in the country.",
    `Every occupied home must have a resident 55 or older. One bill covers the Seasons dues and the dues of the larger associations, and the HOA fee includes internet, trash pickup and lawn care. Its rules are in our ${h.a(SEASONS, "guide to Seasons")}.`,
    "Visitors use a call box at the gate on the main entrance. The Park at Prince Creek West, 43 acres with courts, a playground and a pavilion, belongs to the wider Prince Creek West associations, and the Murrells Inlet MarshWalk is about a 10-minute drive.",
    "The covenants allow a golf cart to be parked only in an enclosed garage, and no Seasons lot backs onto TPC Myrtle Beach across the road.",
  ], "Homes usually sell for about $500,000, and the HOA fee is about $340 a month."),

  entry("bellwood-landing", "half-acre lots, and 14 that reach Collins Creek", [
    "Bellwood Landing has room. Most lots are close to half an acre, 14 of its 102 lots reach Collins Creek, and some along the creek are larger than an acre and a half.",
    "Across the road is TPC Myrtle Beach, a Tom Fazio course that Golf Digest gave five stars in 2008. In May 2026 it hosted the PGA Tour's Monday qualifier for the Myrtle Beach Classic.",
    "About 30 lots back onto a pond. The Park at Prince Creek West, with tennis and pickleball courts, basketball, a playground and a covered pavilion with grills, is about 4 minutes north by car.",
    "No lot touches the golf course; the nearest is about 100 meters from it. Some lots still have no house, and the newest houses date from 2025 and 2026.",
  ], "Homes here usually sell for about $810,000. The gate is on TPC Boulevard, and the HOA fee is about $160 a month."),

  entry("wachesaw-plantation", "a members' club on a bluff above the river", [
    "Before anyone built here, archaeologists dug at Wachesaw and found more than half a million artifacts. The University of South Carolina published the study in 1987, and some finds are on display in the clubhouse.",
    `The ${h.ext(WACHESAW, "Wachesaw Plantation Club")} is owned by its members. Its Tom Fazio course has hosted Carolinas Golf Association championships, and each March the members host the Can-Am Junior Team Matches, an event they saved when its first home closed.`,
    "Dinner is at Kimbels, on the bluff above the waterway and the 18th green, with a Tavern Room, open decks and an enclosed porch. Wachesaw's eight clay tennis courts, five of them lit, and its book clubs and card groups fill the rest of the week. Wacca Wache Marina, outside the gates, has about 100 wet slips and indoor racks.",
    "Club membership is a separate cost on top of the HOA fee, and the club is rebuilding its pool and its Magnolia's restaurant.",
  ], "Homes usually sell for about $700,000. The HOA fee on most homes is about $150 a month, and the gatehouse is at the main gate, reached from Riverwood Drive."),

  entry("wachesaw-east", "where the LPGA played four years", [
    "Wachesaw East's course hosted four televised LPGA Tour events, from 1997 to 2000. Karrie Webb won the first two, and in 1998 she finished 19 under par.",
    "Clyde Johnston laid out the course on a former rice plantation, past freshwater lakes and wetlands, and it opened in December 1996. The Toasted Tee opens at 7 every morning for breakfast.",
    "Houses line the fairways, and the neighborhood has its own large pool, tennis courts, workout room and clubhouse. You turn in at the light by Tidelands Waccamaw Community Hospital and cross Old Kings Highway to reach the gate guard. The entrance to Huntington Beach State Park is an 11-minute drive.",
    "The course takes public tee times, so you share it with visitors.",
  ], "Homes usually sell for about $500,000, and the HOA fee is about $145 a month."),

  entry("the-reserve", "Greg Norman's private course and a hurricane-hole marina", [
    `The Reserve's marina sits at the southern tip of Sandy Island, where Thoroughfare Creek meets the Waccamaw River, and the U.S. Coast Guard calls it a ${h.ext(RESERVE_MARINA, "hurricane hole")}. Staff launch and haul boats from a dry storage building that holds about 200, and a boardwalk runs through a cypress forest to the river.`,
    "The Reserve Golf Club is a private Greg Norman course of 7,200 yards, cut through the woods and around the marsh. Golf Digest ranked it No. 7 among the best new private courses in 1999, and it has hosted the Carolinas Mid-Amateur twice. A golf membership covers the family's dining and social events.",
    "Each fall the Pawleys Island Festival of Music & Art puts up its tent at the golf club, and the neighborhood has private beach access with parking.",
    "The golf club, the marina and the HOA are three separate businesses, each with its own fees.",
  ], "Homes usually sell for about $1.3 million, and the HOA fee on most homes is about $320 a month."),

  entry("willbrook-plantation", "a course across three rice plantations", [
    "Willbrook's golf course crosses the land of three rice plantations, Willbrook, Oatland and Turkey Hill, and six markers along it tell that history hole by hole. Under the live oaks by the 5th hole are brick remains at the site of the plantation house, which burned in 1895 and was rebuilt that year.",
    "By the 8th hole is the Oatland cemetery of enslaved people, with 38 graves, protected inside the community. After rice, a Pennsylvania businessman bought the land in 1926 for duck and quail hunting.",
    "Willbrook is a gated neighborhood of about 250 houses inside Litchfield by the Sea, with its own clubhouse and social calendar. One car barcode opens both gates on the way to Litchfield by the Sea's beach and Beach Club.",
    "The course and its restaurant belong to a golf company and are open to the public, so the neighborhood does not set the tee times or the prices.",
  ], "Homes usually sell for about $840,000, and the HOA fee is about $340 a month."),

  entry("litchfield-plantation", "the owners own the plantation house", [
    "At Litchfield Plantation, the owners own the plantation house. For about 50 years the developer controlled the association. In 2018 the owners took control after court challenges, and the house, its pool and about 7 acres passed to the association.",
    "The house and its avenue of oaks appear on a plat drawn in 1794. After taking it over, the owners repaired it and set up a club room, and a terrace off the main room looks over the old rice fields at sunset. The house hosts a few weddings a year to help pay for its upkeep.",
    "The road in is lined with old live oaks, the Avenue of Live Oaks, and the gatehouse stands on it. The association also owns a beach house on the ocean at Pawleys Island, about 4 miles away by road, and a private marina on the river is an optional extra.",
    "The old rice fields beside the community, about 330 acres, still belong to the original development company, not to the owners.",
  ], "In the last year, houses here sold for about $800,000 to $1.8 million. The HOA fee on most homes is about $230 a month."),

  entry("litchfield-by-the-sea", "a mile of beach and a guard at the gate day and night", [
    "Litchfield by the Sea has about a mile of its own beach, with an oceanfront Beach Club, a deck and a pavilion. From home you can check the surf on the association's live cameras on the Beach Club deck and the north and south beaches.",
    `A guard works the main gate on US 17 ${h.ext(LBTS_GUIDE, "day and night")}. Owners' cars come in with a barcode, and each guest must be registered by the owner before the visit. In 2026 the association added a second patrol car and hired a director of security.`,
    "A normal week can include Tai Chi on Wednesday and yoga on Thursday at the Beach Club, crabbing off the docks on Osprey Lake and a walk on the paved paths through the marsh. The pool is at the River Club, across US 17.",
    "It is many neighborhoods inside one gate, each with its own association, so the HOA fee and the rules change from one section to the next. We find out the fee for any home you like before you offer.",
  ], "Over the past year, one-bedroom condos in Summerhouse sold for about $200,000, and four homes in Breakers Reef went for about $1.5 million to $2.2 million.",
  ["litchfield-by-the-sea-from-above-2023", "Litchfield by the Sea from above: homes around a lake, large buildings by the beach and the Atlantic Ocean at the right."]),

  entry("heritage-plantation", "a dock master and a crow's nest over the river", [
    "Heritage Plantation's marina has a full-time dock master and a dock house built over the Waccamaw River, with a crow's nest and a swing on its roof. Next to it, a deck over the water, bordered by cypress trees, is where owners gather at sunset.",
    `The ${h.ext(HERITAGE, "HOA fee")} includes cable TV, home internet, 24-hour security, the pool, the courts and the dock master. Owners have run the association since 2002 and say they have never needed a special assessment.`,
    "In the morning, leagues play on the four Har-Tru tennis courts and four pickleball courts. The calendar adds concerts, lectures, car shows and sunset gatherings at the marina. The Heritage Club, a public par-71 course by Dan Maples, runs among the live oaks on the land of two old rice plantations, True Blue and Midway.",
    "Golf membership is not part of the HOA fee, trash pickup costs extra, and slips are rented by the day, the month or the year.",
  ], "Homes usually sell for about $710,000, and the HOA fee is about $325 a month."),

  entry("debordieu-colony", "a planters' colony where owners keep their own beach", [
    "Before the Civil War, rice planters built a colony of summer homes at DeBordieu. Later owners of the land included Isaac Emerson, the Bromo-Seltzer maker, and the Vanderbilt family. Locals say \"Debidue\", a pronunciation that comes from the Gullah dialect.",
    "The owners take care of their own beach. A gated community cannot get public money to rebuild a beach, so in 2017 they voted to create a beach fund, paid by assessments.",
    "The DeBordieu Club, open only to owners, has a Pete and P.B. Dye course that has hosted the Carolinas Mid-Amateur, eight Har-Tru tennis courts, and places to eat from the Beanery cafe to oceanfront dining steps from the sand. Each Fourth of July brings a parade down DeBordieu Boulevard.",
    `Every car comes through one gate. Guests are registered online, in an app or by phone, and a guest pass lasts up to a week (${h.ext(DEBORDIEU_PACKET, "owners' welcome packet")}). The colony covers 2,700 acres, and at least 600 of them are a nature preserve.`,
    "Joining the club costs extra, beyond the association fee, and boats cannot stay at the community dock overnight.",
  ], "Homes here usually sell for about $2 million, and the HOA fee is about $300 to $400 a month.",
  ["debordieu-from-above-2026", "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between many of the homes and the beach."]),
];

/* ---------------------------------------------------------------------------- */
/* The places side by side: one plain table after the entries, three columns. */
const TABLE = (() => {
  const td = "padding:.45rem .6rem;border-bottom:1px solid var(--line,#e3dccf);vertical-align:top;text-align:left";
  const rows = E.map((e) => `<tr><td style="${td}"><a href="#${e.id}">${e.n}. ${e.name}</a></td><td style="${td}">${e.price}</td><td style="${td}">${e.fee}</td></tr>`).join("");
  return `<div style="overflow-x:auto;max-width:760px"><table style="border-collapse:collapse;width:100%;font-size:var(--read,1.0625rem);line-height:1.45"><caption style="text-align:left;font-weight:600;color:var(--navy);padding:.3rem 0 .5rem">What homes usually sell for, and the HOA fee a month</caption><thead><tr><th scope="col" style="${td}">Neighborhood</th><th scope="col" style="${td}">Homes sell for</th><th scope="col" style="${td}">HOA fee a month</th></tr></thead><tbody>${rows}</tbody></table></div>`;
})();

/* ItemList schema for the numbered entries. */
const ITEMLIST = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Gated communities near Myrtle Beach", numberOfItems: E.length,
  itemListElement: E.map((e) => ({ "@type": "ListItem", position: e.n, name: e.name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

const GATE_PHOTO = () => ph.aerial("prestwick-gate-from-above-2026",
  "An entrance to Prestwick from above. A small building, the gatehouse, is between the two lanes, with a gate arm across each lane.");

const OFFER_TEXT = "Tell us the neighborhoods you like and your price range. We will email you this week's homes for sale there, with the HOA fee and what it covers.";
const OFFER_SHORT = "Tell us the places you like and your price range. We email you this week's homes for sale there.";

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Gated Communities in Myrtle Beach: 20 Neighborhoods | Chapter3",
  description: "Twenty gated neighborhoods from North Myrtle Beach to Pawleys Island: their clubs, marinas, beach clubs and history, how each gate works, and what homes cost.",
  ogTitle: "Gated communities near Myrtle Beach: what each of the 20 does best",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities near Myrtle Beach?",
  h1em: "Twenty of them, from Cherry Grove to DeBordieu.",
  sub: "What each one does best, from a beach club to a marina with a dock master, then what homes there cost.",
  heroCta: { title: "Tell us which ones you like. We will send you the homes for sale there.", text: OFFER_SHORT, label: OFFER_LABEL, href: OFFER },
  author: "devin",
  toc: false,
  shortAnswer: [
    `Twenty gated neighborhoods line the coast from North Myrtle Beach to the ocean south of Pawleys Island. Two are on the ocean, and ten are golf communities. Homes in them usually sell for about $225,000 to $2 million, and the HOA fee in most is about $90 to $400 a month. A gate controls who drives in; ${h.a("#what-a-gate-does", "see what a gate does and does not do")}.`,
  ],
  sections: [
    { h2: "Which gated community fits the way you want to live?", id: "choose", html: () =>
      GUIDE_CSS + G.offerCss() + ph.css() +
      h.p("Pick what matters most to you. Each neighborhood is listed once, under what it does best.") +
      GUIDE },

    ...SECTIONS_PLACES,

    { h2: "How do the 20 compare on price?", id: "compare", html: (bg) =>
      TABLE +
      h.cta("Want the homes for sale in more than one of these?", OFFER_TEXT, OFFER_LABEL, OFFER, bg) +
      h.p(`For neighborhoods without a gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach")}, ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}, ${h.a("/buyers/golf-communities/", "golf communities")} and ${h.a("/buyers/55-plus-communities/", "55+ communities")}.`) },

    { h2: "Does a gate make a neighborhood safer?", id: "what-a-gate-does", html: () =>
      h.p("A gate keeps through traffic off the streets behind it, and a guard or the owner lets each visitor in. We do not rate any neighborhood as safe or unsafe.") +
      GATE_PHOTO() +
      h.p(`The state's ${h.ext(SLED, "crime data site")} shows crime reported to each police department and sheriff, by year and type.`) },

    { h2: "What does a gated neighborhood cost to live in each year?", html: () =>
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100.") +
      h.p(`Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} covers storms and flooding.`) },

    { h2: "What are the pros and cons of a gated community?", html: (bg) =>
      prosCons([
        "Many have a clubhouse and a pool inside the gate.",
        "You can live on the ocean, by a river marina, beside a famous course or on an old plantation.",
        "Some have a guard at the gate day and night, as at Litchfield by the Sea and Dye Estates.",
      ], [
        { text: "You pay for the gate and the private streets through the HOA fee, and a golf or beach club is often a separate cost.", act: `We find out what the fee covers before you offer. Our guide to ${h.a("/hoa/benefits/", "what HOA fees pay for")} lists the usual items.` },
        { text: `In Horry County outside city limits, the HOA, not the county, maintains ${h.ext(CODE, "private streets")}.`, act: `We check the HOA's savings, so you know before you offer whether a one-time charge to every owner, a ${h.a("/hoa/special-assessments/", "special assessment")}, is likely.` },
        { text: "Guests and workers come through the gate, so a visit can need a call box or a guest list." },
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
    { q: "Are there gated golf communities near Myrtle Beach?", a: "Yes. Ten of the 20 gated neighborhoods on this page are golf communities, from Tidewater in North Myrtle Beach to DeBordieu Colony south of Pawleys Island." },
    { q: "Is Barefoot Resort a gated community?", a: "Only in part. Most of Barefoot Resort in North Myrtle Beach is open; Leatherleaf and Dye Estates are among its gated neighborhoods." },
    { q: "Is Grande Dunes a gated community?", a: "Only in part. Some sections of Grande Dunes are gated, including Calais, Palermo and Villa Venezia." },
  ],
  sources: [
    { name: "Dye Estates rules", href: DYE_RULES },
    { name: "Litchfield by the Sea guest guide", href: LBTS_GUIDE },
    { name: "DeBordieu owners' packet", href: DEBORDIEU_PACKET },
    { name: "Heritage Plantation association", href: HERITAGE },
    { name: "SC Clean Marina, Reserve Harbor", href: RESERVE_MARINA },
    { name: "Horry County land development rules", href: CODE },
    { name: "SLED crime data", href: SLED },
  ],
  sourcesNote: "Not legal advice. Facts: associations, clubs, marinas, county records, news, the state. Prices: the past year's middle sale, checked against the MLS and deed index; Horry prices leave out builder sales. Few sales: a rough guide. Drives: no traffic.",
  afterSources: () => ph.credits() + ITEMLIST,
  bottomCta: { h2: "Get this week's homes for sale in the gated neighborhoods you like.", p: OFFER_TEXT, label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
};
