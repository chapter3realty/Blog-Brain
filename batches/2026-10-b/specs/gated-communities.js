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
 * second and third maps, the "What are you looking for?" table, the "The facts:" lines.
 *
 * Round 14c (owner's eye 14, OWNER-EYE-14-gated-communities.md; lessons B46, B47): a labelled aerial
 * back on the eight entries whose label sits on what the entry leads with; the rest go to the photo
 * partner's shot list (photo-request-abdulla.html). How each gate works, from rows 400 to 443, or
 * nothing. The club point once, in the short answer; each entry's trade-off is its own. Seaside,
 * Covington Lake East, Myrtle Trace and the Golf and Yacht Club rewritten for a gated buyer (rows 520
 * to 533). Cut: the dek's facts list, the safety section and its gate aerial, the story section, the
 * amenity roll calls. Pros and cons only this page's research found.
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
  { id: "myrtle-beach-golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", lat: 33.646385, lon: -79.050559, area: "south", price: "About $225,000 in the older part", fee: "About $95" },
  { id: "prestwick", name: "Prestwick", lat: 33.64245, lon: -78.95602, area: "south", price: "About $480,000", fee: "About $190" },
  { id: "prince-creek-55", name: "Seasons at Prince Creek West", label: "Seasons at Prince Creek West (55+)", href: SEASONS, lat: 33.585419, lon: -79.071772, area: "south", price: "About $500,000", fee: "About $340" },
  { id: "bellwood-landing", name: "Bellwood Landing", lat: 33.582185, lon: -79.073470, area: "south", price: "About $810,000", fee: "About $160" },
  { id: "wachesaw-plantation", name: "Wachesaw Plantation", lat: 33.560796, lon: -79.073101, area: "south", price: "About $700,000", fee: "About $150 on most homes" },
  { id: "wachesaw-east", name: "Wachesaw East", lat: 33.558050, lon: -79.058480, area: "south", price: "About $500,000", fee: "About $145" },
  { id: "the-reserve", name: "The Reserve", lat: 33.49467, lon: -79.1133, area: "pawleys", price: "About $1.3 million", fee: "About $320 on most homes" },
  { id: "willbrook-plantation", name: "Willbrook Plantation", lat: 33.48206, lon: -79.13519, area: "pawleys", price: "About $840,000", fee: "About $340" },
  { id: "litchfield-plantation", name: "Litchfield Plantation", lat: 33.47674, lon: -79.1313, area: "pawleys", price: "About $800,000 to $1.8 million", fee: "About $230 on most homes" },
  { id: "litchfield-by-the-sea", name: "Litchfield by the Sea", lat: 33.471219, lon: -79.126112, area: "pawleys", price: "About $200,000 for a one-bedroom condo to $2.2 million", fee: "Differs from home to home" },
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
main#main .c3-want.c3g-list{list-style:none;margin:0;padding:.3rem 1rem}
main#main .c3-want.c3g-list>li{padding:.35rem 0;line-height:1.45;background:none;box-shadow:none;border:0!important;border-bottom:1px solid rgba(28,32,40,.12)!important;border-radius:0!important}
main#main .c3-want.c3g-list>li:last-child{border-bottom:0!important}
.c3-want b{color:var(--navy);font-weight:600;margin-right:.45rem}
.c3-want a{color:var(--navy);text-decoration:underline;text-underline-offset:.18em}
.c3-want .sep{color:var(--muted);padding:0 .35rem}
.c3g-map{margin:0}
.c3g-map figcaption{color:var(--muted);font-size:.95rem;line-height:1.5;margin-top:.4rem}
.c3-place-cta{margin:1.2rem 0 .4rem;max-width:720px}
.c3-place-cta>p{margin-bottom:.2rem}
</style>`;


/* ---------------------------------------------------------------------------- */
/* The one map: five areas along the coast, each a soft circle around its places, named in a glass pill
   with the entry numbers it holds (area-map.js spec.areas, batch 2026-10-b round 14). The circle's middle
   is the middle of its places' dots; its radius reaches the farthest of them, plus 0.8 km. */
const AREAS = [
  ["nmb", "North Myrtle Beach"], ["mb", "Myrtle Beach"], ["conway", "Conway"],
  ["south", "Surfside to Murrells Inlet"], ["pawleys", "Pawleys Island to DeBordieu"],
];
const nums = (a) => {
  const ns = E.filter((e) => e.area === a).map((e) => e.n);
  return ns.length === 1 ? String(ns[0]) : ns.length === 2 ? `${ns[0]} and ${ns[1]}` : `${ns[0]} to ${ns[ns.length - 1]}`;
};
const km = (lat1, lon1, lat2, lon2) => Math.hypot((lat2 - lat1) * 111.2, (lon2 - lon1) * 111.2 * Math.cos(lat1 * Math.PI / 180));
const MAP = (() => {
  const areas = AREAS.map(([a, label]) => {
    const pts = E.filter((e) => e.area === a);
    const lat = pts.reduce((s, e) => s + e.lat, 0) / pts.length, lon = pts.reduce((s, e) => s + e.lon, 0) / pts.length;
    const radius = Math.round(Math.min(15000, 800 + 1000 * Math.max(...pts.map((e) => km(lat, lon, e.lat, e.lon)))));
    return { name: label, lat, lon, radius };
  });
  const MAPDIR = { dir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), src: "/images/maps", width: 420, glass: true };
  const m = regionMap({ name: "Where the 20 gated neighborhoods are", areas }, MAPDIR);
  if (m.areasUnlabelled && m.areasUnlabelled.length) console.warn(`gated-communities: no room on the map for ${m.areasUnlabelled.length} area names; the key names them`);
  const key = m.areasUnlabelled && m.areasUnlabelled.length ? m.areaKey : "";
  return `<figure class="c3g-map">${m.html}${key}<figcaption>${m.credit}</figcaption></figure>`;
})();

/* The selection guide: every place once, under what it does best (features, never people). */
const GUIDE_GROUPS = [
  ["The ocean, or an oceanfront club", ["litchfield-by-the-sea", "debordieu-colony", "grande-dunes"]],
  ["A marina with staff", ["the-reserve", "heritage-plantation"]],
  ["A boat ramp at home", ["waterway-palms-plantation", "the-bluffs-on-the-waterway"]],
  ["A famous golf course", ["tidewater-plantation", "barefoot-resort", "prestwick", "wachesaw-plantation", "wachesaw-east"]],
  ["History you live inside", ["litchfield-plantation", "willbrook-plantation"]],
  ["Under half a mile from Main Street", ["seaside-plantation"]],
  ["55+", ["myrtle-trace", "prince-creek-55"]],
  ["Lots of nearly half an acre", ["bellwood-landing"]],
  ["A fee under $100 a month", ["covington-lake-east", "myrtle-beach-golf-and-yacht-club"]],
];
{
  const seen = GUIDE_GROUPS.flatMap(([, ids]) => ids);
  if (seen.length !== E.length || new Set(seen).size !== E.length) throw new Error("gated-communities: the guide must list each place once");
}
/* The guide is also the page's contents (score H14): the rest of the page, by each section's short label. */
const MORE = [["#compare", "Prices"], ["#yearly-cost", "Yearly cost"], ["#pros-and-cons", "Pros and cons"], ["#gated-communities-faq", "Gated communities FAQ"]];
const GUIDE = `<div class="c3g-guide c3-guide-map"><ul class="c3-want c3g-list">`
  + GUIDE_GROUPS.map(([want, ids]) => `<li><b>${want}:</b> ${ids.map((id) => byId[id]).sort((a, b) => a.n - b.n)
    .map((e) => `<a href="#${e.id}">${e.n}. ${e.name}</a>`).join('<span class="sep" aria-hidden="true">&middot;</span> ')}</li>`).join("")
  + `<li><b>More on this page:</b> ${MORE.map(([href, label]) => `<a href="${href}">${label}</a>`).join('<span class="sep" aria-hidden="true">&middot;</span> ')}</li>`
  + `</ul>${MAP}</div>`;

/* ---------------------------------------------------------------------------- */
/* One entry: an H2, the paragraphs, an optional photo under the first paragraph, then the place's own
   offer: the price and fee in one sentence, and a button to book a showing there (glass.js offer(),
   which links to /contact/?place=<place>). The two sit together in one box, as an agent closes: what it
   costs, then "let me show you". */
const ph = photoSetB({ aerialWidth: "720px" });
ph.share("litchfield-by-the-sea-from-above-2023");
function entry(id, head, paras, price, photo) {
  const e = byId[id];
  const [first, ...rest] = paras;
  return { h2: `${e.n}. ${e.label || e.name}: ${head}`, toc: `${e.n}. ${e.name}`, id, html: () =>
    h.p(first) + (photo ? ph.aerial(photo[0], photo[1], { closeUp: true }) : "") + rest.map((t) => h.p(t)).join("")
    + `<div class="c3-place-cta" style="padding:.15rem 0 .15rem 1rem;border-left:3px solid var(--brass)">${h.p(price)}${G.offer(e.name)}</div>` };
}

const SECTIONS_PLACES = [
  entry("tidewater-plantation", "nine holes along Cherry Grove Inlet", [
    "Tidewater's golf course is ranked among the best you can play in America. Golf Digest put Tidewater Golf Club at No. 39 on its list of America's 100 Greatest Public Courses for 2023 to 2024. Nine of its holes play along the tidal inlet at Cherry Grove.",
    "The course opened in 1990, and Golf Digest and Golf Magazine both named it the best new public course in America that year. Joey's Clubhouse Grille looks out over the fairways for lunch after a round.",
    "Visitors check in at the gatehouse. Residents switched from key fobs to a tag on each car, read as the car comes up, and we confirm what the gates use today. The neighborhood also keeps a beach cabana with its own parking at Cherry Grove Beach.",
    "Tidewater sits on the marsh of the Intracoastal Waterway, not the ocean; the nearest public beach access is about an 8-minute drive.",
  ], "Homes at Tidewater usually sell for about $625,000. The HOA fee is about $230 a month.",
  ["tidewater-plantation-from-above-2023", "Tidewater Plantation from above, with its golf club labelled: houses along the fairways of its golf course, with ponds among them."]),

  entry("seaside-plantation", "lakes inside the gate, near Main Street", [
    "Seaside Plantation is a small gated neighborhood with lakes inside the gate. The owners association owns them, three parcels of about 13 acres in all, and some houses look onto them.",
    "In 2019 the association recorded its Gate Access Rules with the county. Entrance gate and security policies for contractors, service providers and real estate agents were recorded that year too. We get the current rules for any home you like.",
    "Main Street in North Myrtle Beach is less than half a mile away, close enough to reach by golf cart. Each spring and fall the Society of Stranders brings its shag dance festivals, the Spring Safari and the Fall Migration, to Main Street and Ocean Drive.",
    "The ocean is a quarter to three-quarters of a mile from the houses, not at the back door, and festival weeks bring crowds to Main Street.",
  ], "Homes here usually sell for about $720,000, with an HOA fee of about $210 a month.",
  ["seaside-plantation-from-above-2023", "Seaside Plantation from above: houses beside lakes."]),

  entry("barefoot-resort", "the course that hosts the Monday After the Masters", [
    "Dye Estates, a gated neighborhood inside Barefoot Resort, surrounds the Dye Course, home of the Monday After the Masters. Hootie & the Blowfish host the charity pro-am each spring, and it brings celebrities and PGA Tour players to the course.",
    `Its gate is staffed. A guard works the main gate ${h.ext(DYE_RULES, "24 hours a day")}, and owners drive through a resident lane with a barcode on the car. A guest gets in only when the owner has given the guard the guest's name and the date. At the second gate, an owner who has set up a gate code can let a guest in by phone. The guest calls from the keypad, and the owner presses 9.`,
    "Leatherleaf, the other gated neighborhood here, is 62 houses around a pond with the Love Course on every side. Davis Love III designed that course with Pinehurst No. 2 in mind, and Leatherleaf's Residents' Club has a lifestyle director who plans events.",
    "In summer a free shuttle runs to the beach at 46th Avenue. The owners' cabana there has key-fob parking, showers and a pet-washing station. In these two neighborhoods you call the driver 15 minutes ahead.",
    "Most of Barefoot Resort has no gate. In Dye Estates no one may swim, boat or fish in the ponds, and no docks may be built on them. Lots there are still for sale with no deadline to build, so a house can go up next door at any time.",
  ], "Leatherleaf homes sold for about $700,000 to $975,000 in the past year, with an HOA fee of about $390 a month. Two Dye Estates homes resold in the past year, at about $1.4 million and $2.5 million."),

  entry("grande-dunes", "an oceanfront club and a marina for big boats", [
    "Many Grande Dunes homes come with a household membership to the Ocean Club, a private club on the beach. It has towel and bar service at its pool and cabanas on the sand. We confirm it for each home you look at.",
    "Its private Members Club course was designed by Nick Price, a member of golf's Hall of Fame, with Craig Schreiner. The clubhouse has two Trackman simulators that play more than 260 courses, and the calendar includes themed dinners, wine tastings and a Fourth of July cookout.",
    "Grande Dunes Marina, on the Intracoastal Waterway, has 126 slips and takes boats up to 120 feet long, with fuel and a store. The two-mile Waterway Trail, open to the public, starts on Marina Parkway.",
    "Grande Dunes has its own contract security, with guard houses and a roving officer. Only some sections are gated, among them Calais, Palermo and Villa Venezia.",
  ], "Homes in those three sections usually sell for about $1.5 million, and the HOA fee is about $200 to $375 a month."),

  entry("waterway-palms-plantation", "a boat ramp inside the gate", [
    "Waterway Palms Plantation has its own boat ramp on the Intracoastal Waterway, inside the gate, plus a day dock and boat storage. You launch at home instead of towing the boat across town.",
    "The plan copies the look of Charleston's Battery district, and the clubhouse stands on a point in a pond, with water on three sides. Sidewalks run along the streets throughout.",
    "Builders are still finishing new houses, so some streets still have empty lots and work trucks.",
  ], "Homes usually sell for about $780,000, and the HOA fee is about $150 a month."),

  entry("the-bluffs-on-the-waterway", "a boathouse clubhouse on the waterway", [
    "The Bluffs on the Waterway has two clubhouses, and one of them is a boathouse on the Intracoastal Waterway. The neighborhood has day docks, a boat ramp and boat storage.",
    "Many of the houses are custom Mediterranean-style homes in stucco, and many look onto ponds with fountains. Black Creek runs through the woods along its west side, and the county's bike park is less than a mile away. Its first lots sold in 2001, before most of Carolina Forest's newer neighborhoods.",
    "S.C. 31 runs along one side of the neighborhood, and about 40 lots still have no house, so building will go on for a while.",
  ], "Homes here usually sell for about $850,000; the HOA fee is about $150 a month."),

  entry("covington-lake-east", "a gated street of brick houses at a lower price", [
    "Covington Lake East is a small gated street of brick houses in Carolina Forest, for an HOA fee of about $90 a month, the lowest of the 20.",
    "Its curving streets lie among ponds, yet FEMA's current map puts every lot in its area of minimal flood hazard. None is in a high-risk zone, the only kind where federal rules make a lender require flood insurance. It has no golf club or marina.",
  ], "Homes in Covington Lake East usually sell for about $570,000."),

  entry("myrtle-trace", "minimal flood hazard, run by its owners", [
    "FEMA's current map puts every Myrtle Trace lot in its area of minimal flood hazard. The nearest high-risk zone is about half a mile from the nearest home. By that map, no lender is required to make you carry flood insurance here.",
    `It is a 55+ neighborhood, and the owners run it themselves, with volunteers and no management company. The HOA's contact list has a library coordinator and notaries who charge residents nothing, and the HOA site keeps a word-of-mouth list of companies residents have used. Our ${h.a(MT, "guide to Myrtle Trace")} covers its age rule and its fees.`,
    "Gates stand only at the back entrance, to keep out cut-through traffic; the front entrance is open. A problem with the back gates goes to two residents named in the HOA's gate rules, not to a guard.",
  ], "Homes usually sell for about $300,000, and the HOA fee is $95 a month."),

  entry("myrtle-beach-golf-and-yacht-club", "green space the owners own", [
    "At Myrtle Beach Golf and Yacht Club the owners own their green space. In 2020 the association took title to six tracts, 62.54 acres in all, by one deed. About 59.5 acres of it is the wide strips of grass and woods, with ponds, between its streets.",
    "There is a gatehouse at the entrance and Community Watch desk coverage around the clock, for an HOA fee of about $95 a month. The association also has a storage area for RVs and trailers. Enterprise Landing, a public boat ramp on the Intracoastal Waterway, is about a 4-minute drive from the entrance.",
    "Despite the name, there is no golf course or yacht club anymore. Its course, Heron Point, closed in 2014. Sandpiper Place, where D.R. Horton is building new houses, has its own association and shares the entrance. Before you make an offer, we find out the association a home belongs to, since each has its own fee and rules.",
  ], "In the older part, homes usually sell for about $225,000.",
  ["myrtle-beach-golf-and-yacht-club-from-above-2023", "Myrtle Beach Golf and Yacht Club from above: houses on curving streets among trees, with long strips of grass and ponds between them."]),

  entry("prestwick", "a Pete and P.B. Dye course named Course of the Year", [
    "Prestwick's course, by Pete Dye and his son P.B. Dye, was named the 2025 Myrtle Beach Area Golf Course of the Year. It carries several of Dye's marks: wooden bulkheads along many water banks, deep-faced bunkers around greens that are often raised, and fast greens.",
    "Prestwick opened in 1989 as a private club, founded by the Jackson family, who also created Ocean Lakes. The Gatlin Brothers once lived here and held a charity golf tournament each year.",
    "In December 2015 the club said it would end golf memberships and become a daily-fee course, and its site lists no membership today. Golfers who do not live here come to play, so we find out how the gate is run today before you offer.",
  ], "Homes usually sell for about $480,000, and the HOA fee is about $190 a month.",
  ["prestwick-from-above-2023", "Prestwick from above: houses among the fairways of its golf course, with a lake at the left."]),

  entry("prince-creek-55", "a 55+ fee that covers internet and lawn care", [
    "At Seasons at Prince Creek West, the HOA fee includes internet, trash pickup and lawn care. One bill covers the Seasons dues and the dues of the larger associations, and the clubhouse has an indoor pool for the cooler months.",
    `Every occupied home must have a resident 55 or older, and visitors use a call box at the main gate. Our ${h.a(SEASONS, "guide to Seasons")} covers its rules and its clubs. The Murrells Inlet MarshWalk is about a 10-minute drive.`,
    "The HOA's rules allow a golf cart to be parked only in an enclosed garage. TPC Myrtle Beach is close by, but no Seasons lot backs onto it; the nearest is about a third of a mile away.",
  ], "Homes usually sell for about $500,000, and the HOA fee is about $340 a month."),

  entry("bellwood-landing", "lots of nearly half an acre, some by Collins Creek", [
    "Bellwood Landing has room. Most lots are close to half an acre, and some along Collins Creek are larger than an acre and a half.",
    "TPC Myrtle Beach, a Tom Fazio course, is about 330 feet from the nearest lot. It has hosted the PGA Tour's Monday qualifier for the Myrtle Beach Classic.",
    "Some lots still have no house, and new houses are still going up.",
  ], "Homes here usually sell for about $810,000, and the HOA fee is about $160 a month."),

  entry("wachesaw-plantation", "a members' club on a bluff above the river", [
    "Before the neighborhoods were planned, archaeologists dug at Wachesaw. Their University of South Carolina study of Wachesaw and the neighboring Richmond Hill plantation found more than half a million artifacts. Some finds are on display in the clubhouse.",
    `The ${h.ext(WACHESAW, "Wachesaw Plantation Club")} is owned by its members. Its Tom Fazio course has hosted Carolinas Golf Association championships. Each March the members host the Can-Am Junior Team Matches, an event they saved when its first home closed.`,
    "Kimbels, the club's restaurant, is on the bluff above the waterway and the 18th green, with a Tavern Room, open decks and an enclosed porch. Wachesaw's eight clay tennis courts and its book clubs and card groups fill the rest of the week. Visitors stop at security at the gate, and Wacca Wache Marina, outside the gates, has about 100 wet slips and indoor racks.",
    "The club is rebuilding its pool and its Magnolia's restaurant, so part of the club is a work site for now.",
  ], "Homes usually sell for about $700,000, and the HOA fee on most homes is about $150 a month."),

  entry("wachesaw-east", "where the LPGA played four years", [
    "Wachesaw East's course hosted four televised LPGA Tour events, from 1997 to 2000. Karrie Webb won the first two, and in 1998 she finished 19 under par.",
    "Clyde Johnston laid out the course on a former rice plantation, past freshwater lakes and wetlands, and it opened in December 1996. The club calls the 18th, played around a pond, its signature hole.",
    "Houses line the fairways, and visitors check in with a guard at the main gate. The entrance to Huntington Beach State Park is an 11-minute drive.",
  ], "Homes usually sell for about $500,000, and the HOA fee is about $145 a month."),

  entry("the-reserve", "Greg Norman's private course and a full-service marina", [
    `The Reserve's marina sits at the southern tip of Sandy Island, where Thoroughfare Creek meets the Waccamaw River. Staff launch and haul boats from ${h.ext(RESERVE_MARINA, "a dry storage building that holds about 200")}. The marina also has a fuel dock, and a boardwalk runs through a cypress forest to the river.`,
    "The Reserve Golf Club is a private Greg Norman course of up to 7,200 yards, set among 160 acres of wetlands. It has hosted the Carolinas Mid-Amateur twice, and a golf membership includes the club's dining and social events.",
    "Each fall the Pawleys Island Festival of Music & Art puts up its tent at the golf club, and the neighborhood has private beach access with parking.",
    "Dry storage takes boats up to 27 feet. A bigger boat needs a wet slip or a side tie.",
  ], "Homes usually sell for about $1.3 million, and the HOA fee on most homes is about $320 a month."),

  entry("willbrook-plantation", "a neighborhood on three rice plantations", [
    "Willbrook was built on the land of three rice plantations, Willbrook, Oatland and Turkey Hill, and its golf course crosses two of them. Five markers along the course tell that history hole by hole. Under the live oaks by the 5th hole are brick remains at the site of the plantation house, which burned in 1895 and was rebuilt that year.",
    "By the 8th hole is the Oatland cemetery of enslaved people, protected inside the community. After rice, the land was used for duck and quail hunting; a Pennsylvania businessman bought it in 1926.",
    "Willbrook is a gated neighborhood of about 250 houses inside Litchfield by the Sea, with its own clubhouse and social calendar. Its residents have Litchfield by the Sea's private beach and Beach Club, and one vehicle barcode is issued for both Willbrook and Litchfield by the Sea.",
  ], "Homes usually sell for about $840,000, and the HOA fee is about $340 a month.",
  ["willbrook-plantation-from-above-2023", "Willbrook Plantation from above: houses among trees and golf fairways, with open fields cut by straight ditches at the left."]),

  entry("litchfield-plantation", "the owners own the plantation house", [
    "At the end of the Avenue of Live Oaks stands Litchfield Plantation's house, and the owners own it. For about 50 years the developer controlled the association. In 2018 the owners took control after court challenges, and the house, its pool and about 7 acres passed to the association.",
    "The house and its avenue of oaks appear on a map of the land drawn in 1794. After taking it over, the owners repaired it and set up a club room, and it has hosted weddings to help pay for its upkeep. A terrace off the main room overlooks the old rice fields.",
    "The gatehouse stands on the avenue. The association also owns a beach house on Pawleys Island, about 4 miles away by road, and a private marina on the river is an optional extra.",
    "The old rice fields beside the community, about 330 acres, still belong to the original development company, not to the owners.",
  ], "In the last year, houses here sold for about $800,000 to $1.8 million. The HOA fee on most homes is about $230 a month.",
  ["litchfield-plantation-from-above-2023", "Litchfield Plantation from above, with the Avenue of Live Oaks labelled at the left. Houses stand under tall trees, with a neighboring golf course and its ponds at the right."]),

  entry("litchfield-by-the-sea", "a mile of beach and a guard around the clock", [
    "Litchfield by the Sea has about a mile of its own beach, with an oceanfront Beach Club, a deck and a pavilion. From home you can look at the beach on the association's live cameras, on a clubhouse deck and on the north and south beaches.",
    `A guard works the main gate ${h.ext(LBTS_GUIDE, "day and night")}. Owners' cars come in with a barcode, and each guest must be registered by the owner before the visit. The association has added a second patrol car and a director of security.`,
    "A normal week can include Tai Chi on Wednesday and yoga on Thursday at the Beach Club. In between there is crabbing off the docks on Osprey Lake and a walk on the paved paths through the marsh.",
    "It is many neighborhoods inside the community's gates, each with its own sub-association, so the HOA fee and the rules change from one to the next. We find out the fee for any home you like before you offer.",
  ], "Over the past year, one-bedroom condos in Summerhouse sold for about $200,000, and four homes in Breakers Reef went for about $1.5 million to $2.2 million.",
  ["litchfield-by-the-sea-from-above-2023", "Litchfield by the Sea from above: homes around a lake, large buildings by the beach and the Atlantic Ocean at the right."]),

  entry("heritage-plantation", "a dock master and a crow's nest over the river", [
    "Heritage Plantation's marina has a full-time dock master and a dock house built over the Waccamaw River, with a crow's nest and a swing on its roof. The marina also has a deck over the water, bordered by cypress trees, that serves as a daily sunset gathering place.",
    `The ${h.ext(HERITAGE, "HOA fee")} includes cable TV, home internet, the dock master and 24-hour security. The board hires a security company, and the main gate has a guardhouse. Owners have run the association since 2002.`,
    "Many mornings are reserved for league play on the four Har-Tru courts, a green clay, and four pickleball courts. The Heritage Club, a public par-71 course by Dan Maples, lies among the live oaks on land that was once the True Blue and Midway plantations.",
    "Trash pickup costs extra, and boat slips are rented by the day, the month or the year.",
  ], "Homes usually sell for about $710,000, and the HOA fee is about $325 a month."),

  entry("debordieu-colony", "a planters' colony where owners pay to rebuild their beach", [
    "Before the Civil War, rice planters built a colony of summer homes at DeBordieu. Later owners of the land included Isaac Emerson, the Bromo-Seltzer maker, and the Vanderbilt family. Locals say \"Debidue\".",
    "South Carolina spends public money to rebuild a beach only where the public has full access to it, and DeBordieu does not qualify. Its owners pay for their beach themselves, through assessments to a beach fund they voted to set up in 2017.",
    "The DeBordieu Club, open only to owners, has a Pete and P.B. Dye course that has hosted the Carolinas Mid-Amateur, and eight Har-Tru tennis courts. Its places to eat include the Beanery cafe and the Beach Club, with three dining spaces. On the Fourth of July a parade lines up at DeBordieu and Luvan boulevards.",
    "Every car comes through one gate. Guests are registered online, in an app or by phone, and a guest pass lasts up to a week. The colony covers 2,700 acres, and at least 600 of them are a nature preserve.",
    "Boats cannot stay at the community dock overnight; each one goes home on its trailer.",
  ], "Homes here usually sell for about $2 million, and the HOA fee is about $300 to $400 a month.",
  ["debordieu-from-above-2026", "DeBordieu Colony and the beach to its east, from above. Golf fairways and ponds are among the homes, and a salt marsh is between many of the homes and the beach."]),
];

/* ---------------------------------------------------------------------------- */
/* The places side by side: one plain table after the entries, three columns. */
const TABLE = (() => {
  const td = "padding:.45rem .6rem;border-bottom:1px solid var(--line,#e3dccf);vertical-align:top;text-align:left";
  const rows = E.map((e) => `<tr><td style="${td}"><a href="#${e.id}" style="color:var(--navy);text-decoration:underline;text-underline-offset:.18em">${e.n}. ${e.name}</a></td><td style="${td}" data-l="Homes sell for">${e.price}</td><td style="${td}" data-l="HOA fee a month">${e.fee}</td></tr>`).join("");
  /* On a phone each row becomes a short card: the name, then the two figures with their labels, so
     nothing is cut off at 390 px (owner's eye 14, M10). */
  const css = `<style>@media(max-width:640px){.c3g-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.c3g-table tr{display:block;padding:.5rem 0;border-bottom:1px solid var(--line,#e3dccf)}.c3g-table td{display:block;border:0!important;padding:.1rem .2rem!important}.c3g-table td[data-l]::before{content:attr(data-l) ": ";color:var(--muted)}}</style>`;
  return `${css}<div style="max-width:760px"><table class="c3g-table" style="border-collapse:collapse;width:100%;font-size:var(--read,1.0625rem);line-height:1.45"><thead><tr><th scope="col" style="${td}">Neighborhood</th><th scope="col" style="${td}">Homes sell for</th><th scope="col" style="${td}">HOA fee a month</th></tr></thead><tbody>${rows}</tbody></table></div>`;
})();

/* ItemList schema for the numbered entries. */
const ITEMLIST = `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Gated communities near Myrtle Beach", numberOfItems: E.length,
  itemListElement: E.map((e) => ({ "@type": "ListItem", position: e.n, name: e.name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

const OFFER_TEXT = "Tell us the neighborhoods you like and your price range. One of our agents will email you this week's homes for sale there, with the HOA fee and what it covers.";
const OFFER_SHORT = "Tell us the places and your price range. One of our agents will email you this week's homes.";

module.exports = G.page({
  theme: "glass",
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Gated Communities in Myrtle Beach: 20 Neighborhoods | Chapter3",
  description: "Twenty gated neighborhoods from North Myrtle Beach to Pawleys Island: their clubs, marinas, beach clubs and history, how each gate works, and what homes cost.",
  ogTitle: "Gated communities near Myrtle Beach: what each of the 20 does best",
  crumb: "Gated Communities",
  eyebrow: "Gated communities",
  h1: "Where are the gated communities near Myrtle Beach?",
  h1em: "From the Cherry Grove marsh to the ocean at DeBordieu.",
  sub: "Two of these gated communities sit on the ocean, and ten have golf.",
  heroCta: { title: "Get this week's homes for sale in these gated neighborhoods", text: OFFER_SHORT, label: OFFER_LABEL, href: OFFER },
  topOfferLine: "This week's gated homes for sale",
  author: "devin",
  toc: false,
  shortAnswer: [
    `Homes in these 20 gated neighborhoods sell for about $200,000 to $2.2 million, and most HOA fees are about $90 to $400 a month. A golf or beach club is usually a separate membership with its own dues, and we ask the club for the current figures.`,
  ],
  sections: [
    { id: "choose", html: () =>
      GUIDE_CSS + ph.css() +
      `<p style="font-family:var(--sans);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin-bottom:.5rem;font-weight:600">Choose by what you want</p>` +
      GUIDE },

    ...SECTIONS_PLACES,

    { h2: "What do homes sell for, and what is the HOA fee?", toc: "Prices", id: "compare", html: (bg) =>
      TABLE +
      h.cta("Want the homes for sale in more than one of these?", OFFER_TEXT, OFFER_LABEL, OFFER, bg) +
      h.p(`For neighborhoods without a gate, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods in Myrtle Beach")}, ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}, ${h.a("/buyers/golf-communities/", "golf communities")} and ${h.a("/buyers/55-plus-communities/", "55+ communities")}.`) },

    { h2: "What does a gated neighborhood cost to live in each year?", toc: "Yearly cost", id: "yearly-cost", html: () =>
      h.p("In Myrtle Trace, the HOA fee and county tax for a home you live in come to about $2,300 a year, besides the mortgage. In Seasons at Prince Creek West, they come to about $6,100.") +
      h.p(`Our ${h.a("/buyers/coastal-insurance/", "guide to home insurance on the coast")} covers storms and flooding.`) },

    { h2: "What are the pros and cons of a gated community?", toc: "Pros and cons", id: "pros-and-cons", html: (bg) =>
      prosCons([
        "At Grande Dunes, many homes come with a household membership to the Ocean Club on the beach.",
        "At Litchfield by the Sea and in Dye Estates, a guard works the main gate day and night.",
        "At Heritage Plantation, the HOA fee includes cable TV, home internet and a full-time dock master.",
        "At Litchfield Plantation, the owners own the plantation house at the end of the Avenue of Live Oaks.",
      ], [
        { text: "The private clubs we checked list their kinds of membership but not their prices.", act: "We ask the club for the current figures before you offer." },
        { text: "At DeBordieu, the owners pay to rebuild their own beach, through assessments to a beach fund." },
        { text: "In Dye Estates, lots are still for sale with no deadline to build, so a house can go up next door." },
        { text: `In Horry County outside city limits, the HOA, not the county, maintains ${h.ext(CODE, "private streets")}.`, act: `We check the HOA's savings, so you know before you offer whether a one-time charge to every owner, a ${h.a("/hoa/special-assessments/", "special assessment")}, is likely.` },
      ], { bg }) },

  ],
  faqTitle: "Gated communities FAQ",
  faq: [
    { q: "Does a gate make a neighborhood safer?", a: "A gate keeps through traffic off the streets. A guard, a code or the owner lets each visitor in. We do not rate any neighborhood as safe or unsafe." },
    { q: "How do guests get through the gate?", a: "Each neighborhood has its own way: a guard with a guest list, a call box at the gate, or a code from the owner. We find out the gate's rules for guests and deliveries for any home before you offer." },
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
  ],
  sourcesNote: "Also the associations' and clubs' own documents, county records and local news. Each price is the past year's middle sale, checked against the MLS and the county deed index, and Horry County prices leave out builder sales. A price from few sales is a rough guide, and drive times assume no traffic. Not legal advice.",
  afterSources: () => ph.credits() + ITEMLIST,
  bottomCta: { h2: "Get this week's homes for sale in the gated neighborhoods you like.", p: OFFER_TEXT, label: OFFER_LABEL, href: OFFER },
  keywords: "gated communities Myrtle Beach, gated communities North Myrtle Beach, gated communities Murrells Inlet, gated communities Pawleys Island, 55+ gated communities Myrtle Beach, gated golf communities Myrtle Beach, homes for sale in gated communities Myrtle Beach",
  about: "Gated residential neighborhoods along the Grand Strand, from North Myrtle Beach to Pawleys Island, South Carolina",
});
