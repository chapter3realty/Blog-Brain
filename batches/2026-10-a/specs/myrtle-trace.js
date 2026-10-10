/* /buyers/55-plus-communities/myrtle-trace/ - what it is like to live in Myrtle Trace,
 * a 55+ neighborhood just outside Conway.
 *
 * Final build, 2026-10-10 (CRAFT.md, voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9).
 * Shape: an inland neighborhood with a hospital three minutes away, so the page leads
 * with the calm and the convenience (what is close, then a normal month), then the homes
 * and the town, then money, which is good news here, then the rules.
 *
 * Facts:  batches/2026-10-a/facts/myrtle-trace-facts.md, verified rows only.
 *   Place:   rows 15 (outside Conway city limits), 72 (no city levy), 85 to 89 (drives:
 *            beach 15, Walmart 3, Conway Medical Center 3, airport 20 minutes).
 *            Row 90 (Riverwalk drive) is unverifiable and not used.
 *   Life:    rows 25 (15 ponds), 43 (pool hours, seasonal), 44 (retention ponds, no
 *            swimming or boats), 45 (fishing), 46 (walkways), 78 and 79 (about 70 calendar
 *            entries a month), 80 (bingo, line dance, game nights, coffee, dining out,
 *            bocce and shuffleboard leagues).
 *   Homes:   rows 26, 28 (the original designs, 2 or 3 bedrooms), 47 and 48 (golf course
 *            next door), 59 (owner keeps up the house and yard), 22 (built in eight
 *            sections, 1984 to 1994).
 *   Rules:   rows 1, 6 (age), 8 and 51 (leases), 54 (fences), 55 (pets), 56 (sheds,
 *            private pools), 16 (gates), 38 (run by volunteers). PLAIN-9: these are the
 *            covenants and the policies on the HOA's own site, which rarely change; stated
 *            plainly, with no date.
 *   Money:   row 81 (middle sale $300,000), rows 30 and 34 ($95 a month and what it pays
 *            for; "about $100"), row 35 ($1,450 + $100; "a little over $1,500"), row 72 and
 *            v4's tax result ($1,103 on $300,000 as a main home) plus row 73's stormwater
 *            fee ($89.40 a year): "about $1,200 a year". The county and school levies did
 *            not change for 2026 (Grande Dunes ledger row 69).
 *   Flood:   rows 60 and 61 (core: no home in a mapped high-risk area), row 75 (middle
 *            ZIP code policy $561 with fees; "about $550"), row 91 (federal purchase rule).
 * Photos: data/photos.json. Hero: the Waccamaw River near Conway. Gallery: the riverwalk,
 *         Main Street and a house in the historic district. None shows Myrtle Trace.
 * Maps:   tools/area-map.js communityMaps (region and close-up) and mapLinksHtml.
 * Story:  an Example (Ruth): the hospital and the budget. Chapter3 once, reading the HOA's
 *         rules (stories.json "hoa-rental-bans-filtered"; STANDARD T2). One number.
 *         Chapter3's experience line on renting: "hoa-rental-bans-filtered".
 */
const { h, maps, story, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/myrtle-trace/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const HOA = "https://myrtletracesc.org/";
const COV = "https://myrtletracesc.org/wp-content/uploads/Guidelines/MyrtleTraceCovenant.pdf";
const CAL = "https://myrtletracesc.org/2026-calendars/";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=101%20Myrtle%20Trace%20Drive%2C%20Conway%2C%20SC%2029526";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

const ph = photoSet();
const M = maps("myrtle-trace", [
  { id: "hosp_cmc", name: "Conway Medical Center", short: "Hospital", kind: "hospital" },
  { id: "groc_mt", name: "Walmart Supercenter", short: "Walmart", kind: "grocery" },
  { id: "beach_mt", name: "the beach by the Myrtle Beach Boardwalk", short: "Beach", kind: "beach" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Airport", kind: "airport" },
], {
  regionCaption: "Map of where Myrtle Trace is, inland from Myrtle Beach, with drive times by car.",
  closeCaption: "Map of the streets, ponds and clubhouse inside Myrtle Trace.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Myrtle Trace, a 55+ Community in Conway | Chapter3",
  description: "What life is like in Myrtle Trace near Conway: a hospital minutes away, the pool, ponds and clubs, a map, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Myrtle Trace, Conway: close to the hospital, with a pool, ponds and clubs",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What is it like to live in Myrtle Trace in Conway?",
  h1em: "A 55+ neighborhood close to the hospital.",
  sub: "Myrtle Trace is a 55+ neighborhood just outside Conway, about 3 minutes from a hospital and 15 from the beach by car.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace is a neighborhood of about 500 homes just outside Conway. At least one person in each home must be 55 or older.",
    "Conway Medical Center and a Walmart Supercenter are each about 3 minutes away by car. Owners share a clubhouse, a pool and ponds for fishing. The neighborhood calendar lists about 70 events and club meetings a month.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("waccamaw-river-cypress-near-conway", {
        alt: "Cypress trees in fall colors along the dark water of the Waccamaw River near Conway",
        caption: "Cypress trees on the Waccamaw River near Conway. Every photo on this page shows the Conway area, not the neighborhood itself.",
      }) },

    { h2: "What is close to Myrtle Trace?", html:
      h.p("A hospital and a large grocery store are each about 3 minutes from Myrtle Trace by car.") +
      M.pair +
      h.p("The beach by the Myrtle Beach Boardwalk is about 15 minutes away, and the airport is about 20.") +
      h.p("Myrtle Trace has a Conway address, but it is outside the city limits, so you pay no Conway city tax.") },

    { h2: "What does a month in Myrtle Trace look like?", html:
      h.p(`The neighborhood's ${h.ext(CAL, "activities calendar")} lists about 70 events and club meetings each month.`) +
      ph.cards([
        { illustration: "card-table", label: "Bingo and game nights", text: "Bingo two Friday nights a month, and a game night on Sundays" },
        { illustration: "outdoor-pool", label: "The pool", text: "Open every day from 8 a.m. to 9 p.m., in season" },
        { illustration: "bocce", label: "Two leagues", text: "Bocce and shuffleboard, with teams you can join" },
        { illustration: "fishing-pond", label: "Fishing", text: "Ponds where you fish and let the fish go" },
        { illustration: "walking-path", label: "Walkways", text: "Wide paths between the houses, open to every owner" },
        { illustration: "clubhouse", label: "The clubhouse", text: "Line dancing, a coffee group and a craft fair" },
      ], { cols: 3 }) +
      h.p("Your house guests can fish too. The ponds collect rainwater, and swimming and boats are not allowed in them.") +
      h.p("The pool closes for the season at the start of October.") },

    { h2: "What are the homes like in Myrtle Trace?", html: (bg) =>
      h.p("Most homes in Myrtle Trace are single-family houses with their own yards, and a few are townhouses.") +
      h.p("The builder's original designs had 2 or 3 bedrooms. Each owner takes care of the house and the yard, including the roof and the grass.") +
      h.p("Some homes back onto Burning Ridge Golf Club, a private course next door. Owners of those homes accept golf balls and noise from the course.") +
      h.cta("Looking at a home in Myrtle Trace?", "Tell us which home you like. One of our agents reads the homeowners association (HOA) rules with you before you make an offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What is Conway like?", html:
      h.p("Conway is the town next to Myrtle Trace, with a riverwalk on the Waccamaw River and old brick shops on Main Street.") +
      ph.gallery([
        { name: "conway-riverwalk-boardwalk", alt: "A wooden boardwalk with a black railing, shaded by trees, beside old wooden buildings in Conway", caption: "The riverwalk in downtown Conway" },
        { name: "conway-main-street", alt: "Main Street in downtown Conway, South Carolina, lined with old brick shop buildings", caption: "Main Street, downtown Conway" },
        { name: "conway-historic-home", alt: "A white house under large oak trees in Conway's historic district", caption: "A house in Conway's historic district" },
      ], { label: "Photos of Conway" }) },

    { h2: "What does it cost to live in Myrtle Trace?", html: (bg) =>
      h.p("Homes in Myrtle Trace usually sell for about $300,000. On a home at that price that you live in, plan for these costs:") +
      atAGlance([
        { icon: "dollar", label: "HOA fee", text: "About $100 a month" },
        { icon: "tax", label: "Property tax", text: "About $1,200 a year, with the county's stormwater fee" },
        { icon: "key", label: "When you buy", text: "A one-time fee to the HOA of a little over $1,500" },
      ], { bg, min: "13rem" }) +
      h.p("The HOA fee pays to keep up the pool, the clubhouse, the gates, the private roads, the ponds and the shared land.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home you live in")}.`) },

    { h2: "What does a move to Myrtle Trace look like?", html: (bg) =>
      story([
        "<strong>Example:</strong> For 30 years, Ruth worked as a nurse in Erie and lived a few blocks from her hospital. She wanted to retire near the ocean, with a hospital that close again.",
        "The houses she toured near the beach cost more than she had saved, and most were a long drive from a hospital. On her next trip, she drew a circle around a hospital on a paper map and looked only at houses inside it.",
        "An agent at Chapter3 read the HOA's rules with her before she made an offer. She bought a house inside the circle. On Sunday mornings she drives to the beach with a folding chair and is home before lunch.",
      ], "Decide how close you need to be to a hospital, then look at every house inside that distance, inland ones too.", bg) },

    { h2: "Do you need flood insurance in Myrtle Trace?", html: (bg) =>
      h.p("Usually not, because no home in Myrtle Trace is in a high-risk flood zone.") +
      h.p(`Under the ${h.ext(LAW, "federal flood law")}, a lender has to require flood insurance only for a home inside one of those zones. ${h.ext(FEMA, "The government's flood map")} shows where they are.`) +
      h.p("If you want a flood policy anyway, one for a house here usually costs about $550 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home and flood insurance cost near Myrtle Beach")}.`) +
      h.cta("Want to know the insurance cost first?", "Pick the Myrtle Trace home you like. An agent at Chapter3 gets you a homeowners insurance quote before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "Who can live in Myrtle Trace, and what are the house rules?", html: (bg) =>
      h.p(`At least one person in every home in Myrtle Trace must be 55 or older, under the ${h.ext(COV, "HOA's rules")}.`) +
      h.p("The rules give no minimum age for anyone else in the home. A younger husband or wife can live with you, and grandchildren can visit.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes. Keep them on a leash outside your yard, and out of the clubhouse and pool area." },
        { icon: "key", label: "Renting it out", text: "Yes, for a year or longer. One tenant must be 55 or older and live there." },
        { icon: "gate", label: "Fences", text: "No fences between yards or across the front. An approved dog run is allowed." },
        { icon: "home", label: "Sheds and pools", text: "No sheds, gazebos or private swimming pools." },
      ], { bg }) +
      h.p("In Chapter3's experience, many HOAs here do not allow renting a house at all. Myrtle Trace allows leases of a year or longer.") },

    { h2: "How does Myrtle Trace compare with other 55+ neighborhoods near Myrtle Beach?", html: () =>
      h.p("Myrtle Trace is the farthest of these four from the beach, and its homes usually sell for the least.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "Is Myrtle Trace a gated community?", a: "Only in part. The back entrance has gates, and the front entrance is always open. The HOA says the back gates stop drivers from using the neighborhood as a shortcut." },
    { q: "Who runs the Myrtle Trace HOA?", a: "The owners run it themselves with volunteers, and the HOA says it has no management company. The dues are about $100 a month." },
    { q: "When was Myrtle Trace built?", a: "Myrtle Trace was added in eight sections between 1984 and 1994. Each owner keeps up the roof, the outside of the house and the yard." },
    { q: "Can you fish in the Myrtle Trace ponds?", a: "Yes. Residents and their house guests can fish from the shared land around the 15 ponds. Every fish goes back in the water." },
    { q: "Is Myrtle Trace inside Conway city limits?", a: "No. Myrtle Trace has a Conway mailing address but is outside the city, so owners there pay no Conway city tax." },
  ],
  sources: [
    { name: "Myrtle Trace HOA", href: HOA },
    { name: "HOA rules", href: COV },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "Not legal or tax advice. Drive times are OpenStreetMap estimates with no traffic. The flood cost is FEMA's middle policy price for this ZIP code.",
  bottomCta: { h2: "Thinking about a home in Myrtle Trace?", p: "Call about the home you like. One of our agents will go over the HOA's rules and rental policy with you.", label: "Call a specialized agent", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace 55 community, living in Myrtle Trace, Myrtle Trace HOA, Myrtle Trace activities",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
