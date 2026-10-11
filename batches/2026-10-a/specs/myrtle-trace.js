/* /buyers/55-plus-communities/myrtle-trace/ - what it is like to live in Myrtle Trace,
 * a 55+ neighborhood just outside Conway.
 *
 * Version 8, 2026-10-11, after the owner's notes on version 7 (no photo at the top; the story
 * near the end, with tension and Chapter3's skill; photos of the topic) and the grader's list
 * (batches/2026-10-a/GRADE-pages.md).
 * Shape: an inland neighborhood with a hospital three minutes away, so the page leads with
 * what is close, then a normal month, the homes and the town (its photos beside the Conway
 * sentence, RULES P10), the money with the flood answer, the rules, then the example: how
 * an agent handles a buyer with a dog and the fence rules. The comparison table and the FAQ
 * close it. Headings use the name in the H1, the first H2 and the comparison (grader).
 *
 * Facts:  batches/2026-10-a/facts/myrtle-trace-facts.md, verified rows only.
 *   Place:   rows 15, 72, 85 to 89 (drives: beach 15, Walmart 3, Conway Medical Center 3,
 *            airport 20 minutes). Rush hour: stories.json "traffic-timing".
 *   Life:    rows 25, 43, 44, 45, 46, 78 and 79, 80.
 *   Homes:   rows 26, 28, 47 and 48 (golf course next door, privately owned; the course's
 *            easement for play), 59, 22.
 *   Rules:   rows 1, 8 and 51, 54 (no fences between yards or across the front; approved dog
 *            runs), 47 (b) (no perimeter fence on lots backing onto the golf course or lakes;
 *            the page says "ponds", as it does everywhere), 55, 56, 16, 38.
 *   Money:   row 81, rows 30 and 34, row 35, row 72 and v4's tax result plus row 73.
 *   Flood:   rows 60 and 61, 75, 91.
 *   Review 4 MT 5: "about 500 homes" (row 23), the flood core (row 61) and the bingo and
 *            game-night days (rows 77 and 80) rest on the supported part of rows marked
 *            wrong; re-file them as new rows before publish.
 * Version 9 (2026-10-11): the aerial overview (USDA NAIP 2023) at the top of "What is close" (the
 *         share image now, its crops). Must-answer: row 30's exact "$95 a month" (SEO audit:
 *         not "about $100") in the short answer, the cost cards and a new FAQ; row 92 (listings:
 *         about 1,000 to 2,900 sq ft, mostly 3 bedrooms with some 2, built mostly 1984 to 1998,
 *         all homes for sale on one level). The gate facts stay: row 16 is the HOA's own 2025
 *         gates policy, a primary source (the "no gates" rule is for pages with no source).
 * Photos: data/photos.json, beside the Conway sentence: cypress trees on the Waccamaw River
 *         near Conway (the share image, its crops), the riverwalk and Main Street. The house
 *         in the historic district is cut (no sentence is about it). An aerial of Myrtle
 *         Trace, when photos.json has one, goes in "What is close".
 * Maps:   communityMaps, amenity pin "Clubhouse".
 * Story:  an Example (Pat and her dog): the fence rules (rows 54 and 47 (b)), found by an
 *         agent reading the HOA's rules with the buyer (stories.json "hoa-rental-bans-
 *         filtered", "ny-buyer-rules-fit"). Present tense, no numbers, no prices.
 *         Chapter3's experience line on renting: "hoa-rental-bans-filtered".
 */
const { h, maps, story, glance, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

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

const ph = photoSet().share("waccamaw-river-cypress-near-conway");
const AERIAL = ph.aerial("myrtle-trace-from-above", "Myrtle Trace from above in 2023, with its edge drawn in orange and the golf course next door.");
const M = maps("myrtle-trace", [
  { id: "hosp_cmc", name: "Conway Medical Center", short: "Hospital", kind: "hospital" },
  { id: "groc_mt", name: "Walmart Supercenter", short: "Walmart", kind: "grocery" },
  { id: "beach_mt", name: "the beach by the Myrtle Beach Boardwalk", short: "Beach", kind: "beach" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Myrtle Beach airport", kind: "airport" },
], {
  amenity: "Clubhouse",
  regionCaption: "Map of where Myrtle Trace is, inland from Myrtle Beach, with drive times by car.",
  closeCaption: "Map of the streets, ponds and clubhouse inside Myrtle Trace.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  /* The share photo (or the aerial) in 1x1, 4x3 and 16x9 for Article.image (rules/image-metadata.md). */
  pageImages: () => ph.pageImages(),
  title: "Living in Myrtle Trace, a 55+ Community in Conway | Chapter3",
  description: "What life is like in Myrtle Trace near Conway: a hospital minutes away, the pool, ponds and clubs, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Myrtle Trace, Conway: close to the hospital, with a pool, ponds and clubs",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What is it like to live in Myrtle Trace in Conway?",
  h1em: "A 55+ neighborhood close to the hospital.",
  sub: "Myrtle Trace is a 55+ neighborhood of single-family houses just outside Conway, with a pool, ponds and a busy club calendar.",
  heroMedia: glance([
    { icon: "hospital", label: "Hospital", text: "About 3 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 3 minutes" },
    { icon: "beach", label: "Beach", text: "About 15 minutes" },
    { icon: "airport", label: "Airport", text: "About 20 minutes" },
  ]),
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace is a neighborhood of about 500 homes just outside Conway. At least one person in each home must be 55 or older. The homeowners association (HOA) fee is $95 a month.",
    "Conway Medical Center and a Walmart Supercenter are each about 3 minutes away by car without traffic. Owners share a clubhouse, a pool and ponds for fishing. The neighborhood calendar lists about 70 events and club meetings a month.",
  ],
  sections: [
    { h2: "What is close to Myrtle Trace?", html:
      ph.css() +
      h.p("The beach by the Myrtle Beach Boardwalk is about 15 minutes away by car without traffic, and Myrtle Beach International Airport is about 20. In our experience, rush hour adds 5 to 10 minutes.") +
      AERIAL +
      M.pair +
      h.p("Myrtle Trace has a Conway address, but it is outside the city limits, so you pay no Conway city tax.") },

    { h2: "What does a month here look like?", html:
      h.p(`The neighborhood's ${h.ext(CAL, "activities calendar")} lists about 70 events and club meetings each month.`) +
      ph.cards([
        { illustration: "card-table", label: "Bingo and game nights", text: "Bingo two Friday nights a month, and a game night on Sundays" },
        { illustration: "outdoor-pool", label: "The pool", text: "Open every day from 8 a.m. to 9 p.m., in season" },
        { illustration: "bocce", label: "Two leagues", text: "Bocce and shuffleboard, each with its own schedule" },
        { illustration: "fishing-pond", label: "Fishing", text: "Ponds where you fish and let the fish go" },
        { illustration: "walking-path", label: "Walkways", text: "Wide paths between the houses, open to every owner" },
        { illustration: "clubhouse", label: "Clubs and events", text: "Line dancing, a coffee group and a craft fair" },
      ], { cols: 3 }) +
      h.p("Your house guests can fish too. The ponds collect rainwater, and swimming and boating are not allowed in them.") +
      h.p("The pool closes for the season at the start of October.") },

    { h2: "What are the homes like?", html: (bg) =>
      h.p("Most homes in Myrtle Trace are single-family houses with their own yards, and a few are townhouses.") +
      h.p("Myrtle Trace was laid out in eight sections from 1984 to 1994. Listings show houses of about 1,000 to 2,900 square feet, mostly with 3 bedrooms and some with 2.") +
      h.p("Most were built from 1984 to 1998, and every home for sale now is on one level.") +
      h.p("Each owner takes care of the house and the yard, including the roof and the grass.") +
      h.p("Some homes back onto Burning Ridge Golf Club, a privately owned course next door. Owners of those homes accept golf balls and noise from the course.") +
      h.cta("See a Myrtle Trace home with an agent.", "Tell us which home you like, and one of our agents will set up a showing.", "Speak to an expert", "/contact/", bg) },

    { h2: "What is Conway like?", html:
      h.p("Conway is the town next to Myrtle Trace, with a riverwalk on the Waccamaw River and old brick shops on Main Street.") +
      ph.gallery([
        { name: "waccamaw-river-cypress-near-conway", alt: "Cypress trees in fall colors along the dark water of the Waccamaw River near Conway", caption: "Cypress trees on the Waccamaw River near Conway" },
        { name: "conway-riverwalk-boardwalk", alt: "A wooden boardwalk with a black railing, shaded by trees, beside old wooden buildings in Conway", caption: "The riverwalk in downtown Conway" },
        { name: "conway-main-street", alt: "Main Street in downtown Conway, South Carolina, lined with old brick shop buildings", caption: "Main Street, downtown Conway" },
      ], { label: "Photos of Conway" }) },

    { h2: "What does it cost to live here?", html: (bg) =>
      h.p("Homes in Myrtle Trace usually sell for about $300,000. On a home at that price that you live in, plan for these costs:") +
      atAGlance([
        { icon: "dollar", label: "HOA fee", text: "$95 a month" },
        { icon: "tax", label: "Property tax", text: "About $1,200 a year, with a small county drainage fee" },
        { icon: "key", label: "When you buy", text: "A one-time fee to the HOA of a little over $1,500" },
      ], { bg, min: "13rem" }) +
      h.p("The HOA fee pays to keep up the pool, the clubhouse and the gates. It also covers the roads the HOA owns, the ponds and the shared land.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home you live in")}.`) +
      h.p(`No home in Myrtle Trace is in a high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. ${h.ext(LAW, "Federal law")} requires flood insurance for a home loan only in those zones, though a lender may still ask for it. A policy here usually costs about $550 a year.`) +
      h.cta("Get an insurance quote before you offer.", "Pick the Myrtle Trace home you like. An agent at Chapter3 gets you a homeowners insurance quote before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home and flood insurance cost near Myrtle Beach")}.`) },

    { h2: "Who can live here, and what are the house rules?", html: (bg) =>
      h.p(`At least one person in every home in Myrtle Trace must be 55 or older, under the ${h.ext(COV, "HOA's rules")}.`) +
      h.p("A younger husband or wife can live with you, and grandchildren can visit.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes. Keep them on a leash outside your yard, and out of the clubhouse and pool area." },
        { icon: "key", label: "Renting it out", text: "Yes, for a year or longer. One tenant must be 55 or older and live there." },
        { icon: "gate", label: "Fences", text: "None between yards or across the front, and none on lots that back onto the golf course or a pond. An approved dog run is allowed." },
        { icon: "home", label: "Sheds and pools", text: "No free-standing sheds, gazebos or private swimming pools." },
      ], { bg }) +
      h.p("In Chapter3's experience, many HOAs here do not allow renting a house at all.") },

    { h2: "How does a Chapter3 agent check the fence rules for a buyer with a dog?", html: (bg) =>
      h.p("A Chapter3 agent reads the HOA's rules with you before you make an offer, so you know what you can build in the yard.") +
      story([
        "<strong>Example:</strong> Pat is moving from Erie with her dog, Max, and she plans to fence the back yard for him. She likes a house in Myrtle Trace that backs onto the golf course next door.",
        "Her Chapter3 agent reads the HOA's rules with her and finds that no fence is allowed on a lot that backs onto the golf course or a pond. The rules also allow no fence between yards or across the front of any lot.",
        "They do allow a dog run, once the HOA approves where it goes and how it is built. Pat now tours each house with a tape measure, looking for a spot by the back door for Max's dog run.",
      ], "If you have a dog, read the fence and dog run rules before you choose a house.", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "read the HOA's rules with you")} before you make an offer.`) },

    { h2: "How does Myrtle Trace compare with other 55+ neighborhoods near Myrtle Beach?", html: () =>
      h.p("Myrtle Trace is the farthest of these four from the beach, and its homes usually sell for the least.") +
      compareTable(SELF) },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "Is Myrtle Trace a gated community?", a: "Only in part. The back entrance has gates, and the front entrance is always open. The HOA says the back gates stop drivers from using the neighborhood as a shortcut." },
    { q: "How much is the HOA fee in Myrtle Trace?", a: "The HOA fee is $95 a month. It pays to keep up the pool, the clubhouse, the roads the HOA owns, the ponds and the shared land." },
    { q: "Who runs the Myrtle Trace HOA?", a: "The owners run it themselves with volunteers, and the HOA says it has no management company." },
    { q: "Is the golf course part of Myrtle Trace?", a: "No. Burning Ridge Golf Club, next door, is privately owned and is not part of the HOA. Some Myrtle Trace homes back onto it." },
    { q: "Can you fish in the Myrtle Trace ponds?", a: "Yes. Residents and their house guests can fish from the shared land around the 15 ponds. Every fish goes back in the water." },
    { q: "Do you need flood insurance in Myrtle Trace?", a: "Not by law, because no Myrtle Trace home is in a high-risk flood zone. A lender may still ask for a policy." },
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
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Talk to us about a home in Myrtle Trace.", p: "Call about the home you like. One of our agents will go over the HOA's rules and rental policy with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call a specialized agent", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace 55 community, living in Myrtle Trace, Myrtle Trace HOA, Myrtle Trace activities",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
