/* /buyers/55-plus-communities/myrtle-trace/ - what it is like to live in Myrtle Trace,
 * a 55+ neighborhood just outside Conway.
 *
 * Version 5, rewritten from the top 2026-10-07 for the owner's PLAIN rules
 * (voice/RULES.md class PLAIN, batches/2026-10-a/REWRITE-PLAIN.md): the life and the
 * place first, a map and icons in the first screens, round numbers, the date once (in
 * the byline), plain words, every question answered, price later and softly.
 *
 * Facts:  batches/2026-10-a/facts/myrtle-trace-facts.md, verified rows only.
 *   Life:    rows 25 (15 ponds), 43 (pool hours), 45 (fishing), 46 (walkways),
 *            78 and 79 (about 70 calendar events and club meetings a month), 80 (groups, leagues).
 *   Place:   rows 15 (outside Conway city limits), 72 (no city levy), 85 to 89 (drives).
 *            Row 90 (Conway Riverwalk drive) is unverifiable and not used.
 *   Homes:   rows 26, 28 (original plans, 2 or 3 bedrooms), 47 and 48 (golf course), 59.
 *   Rules:   rows 1, 6, 8, 51, 54, 55, 56 (the HOA's posted copy of its rules).
 *   Money:   row 81 (middle sale $300,000), rows 30 and 34 ($95 a month and what it pays
 *            for; "about $100"), row 35 ($1,450 + $100 at a resale; "a little over
 *            $1,500"), row 72 and v4's tax result ($1,103 on $300,000 as a main home,
 *            2025 levy) plus row 73's stormwater fee ($89.40 a year): "about $1,200 a
 *            year at last year's rates, with the stormwater fee included".
 *   Flood:   rows 60 and 61 (core: no home in a mapped high-risk area), row 75 (middle
 *            ZIP code policy $561 with fees; "about $550"), row 91 (federal purchase
 *            rule, verified 2026-10-07).
 * Photos: data/photos.json (Conway Main Street, Conway riverwalk). Neither shows Myrtle Trace.
 * Map:    four landmarks; the Boardwalk was dropped because its label crowded the beach
 *         and airport labels on a phone (review 3). It stays in the text.
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 *         The example (Diane) is version 4's, with three numbers.
 * Review 3 fixes applied 2026-10-07 (REVIEW-3.md, BUYER-READ-v5-myrtle-trace.md).
 */
const { h } = require("../tools/mkpage.js");
const { mapBlock, photo, compareTable, atAGlance } = require("./_55-plus-kit.js");

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

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Myrtle Trace, a 55+ Community in Conway | Chapter3",
  description: "What life is like in Myrtle Trace, a 55+ neighborhood near Conway: the pool, ponds and clubs, where it is on a map, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Myrtle Trace, Conway: the pool, the ponds, the clubs and the 55+ rule",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What is it like to live in Myrtle Trace in Conway?",
  h1em: "A 55+ neighborhood near Conway.",
  sub: "Myrtle Trace is a 55+ neighborhood just outside Conway, about 15 minutes from the beach by car.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace has about 500 homes, and at least one person in each home must be 55 or older. Most are single-family houses with their own yards.",
    "Owners share a clubhouse, a pool and ponds where you can fish and let the fish go. The neighborhood calendar lists about 70 events and club meetings a month, from bingo to line dancing.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "About 15 minutes by car" },
        { icon: "grocery", label: "Groceries", text: "Walmart, about 3 minutes away" },
        { icon: "hospital", label: "Hospital", text: "Conway Medical Center, about 3 minutes away" },
        { icon: "pool", label: "Pool", text: "Open every day until early fall" },
        { icon: "clubhouse", label: "Clubhouse", text: "Bingo, game nights and line dancing" },
        { icon: "pond", label: "Fishing", text: "Ponds where you fish and let the fish go" },
      ], { title: "Myrtle Trace at a glance", bg }) },

    { h2: "Where is Myrtle Trace?", html:
      h.p("Myrtle Trace is just outside the city of Conway, about 15 minutes inland from the beach by car.") +
      mapBlock("myrtle-trace", [
        { id: "beach_mt", label: "Beach", kind: "beach" },
        { id: "groc_mt", label: "Walmart", kind: "grocery" },
        { id: "hosp_cmc", label: "Hospital", kind: "hospital" },
        { id: "airport", label: "Airport", kind: "airport" },
      ], "Map of Myrtle Trace and the drive by car to the beach, groceries, the hospital and the airport.") +
      h.p("The Myrtle Beach Boardwalk is about 15 minutes away by car, and the airport is about 20.") +
      h.p("The neighborhood has a Conway address but is outside the city limits, so you pay no Conway city tax.") },

    { h2: "What are the homes like in Myrtle Trace?", html: (bg) =>
      h.p("Most homes in Myrtle Trace are single-family houses, and a few are townhouses.") +
      h.p("The original house designs had 2 or 3 bedrooms. You take care of your own house and yard, including the roof and the grass.") +
      h.p("Some homes back onto Burning Ridge Golf Club, a privately owned golf course that is not part of the neighborhood. Owners of those homes must accept golf balls and noise from the course.") +
      h.cta("Looking at a home in Myrtle Trace?", "Tell us which home you like. One of our agents will read the homeowners association (HOA) rules with you before you make an offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What is there to do in Myrtle Trace?", html: (bg) =>
      h.p(`The Myrtle Trace ${h.ext(CAL, "activities calendar")} lists about 70 events and club meetings each month.`) +
      atAGlance([
        { icon: "cards", label: "Games", text: "Bingo and game nights" },
        { icon: "bocce", label: "Leagues", text: "A bocce league and a shuffleboard league" },
        { icon: "calendar", label: "Events", text: "A picnic, music at the pool and a craft fair" },
        { icon: "family", label: "Meals out", text: "A coffee group and a dining-out group" },
        { icon: "trail", label: "Walking", text: "Wide walkways between homes" },
        { icon: "pond", label: "Ponds", text: "Your house guests can fish too" },
      ], { bg }) +
      h.p("In a normal week you can go to a line dancing class or a game night, and fish in the ponds. Every fish goes back in the water.") +
      h.p("The pool is open every day from 8 in the morning to 9 at night. It closes for the year in early fall. Swimming and boating are not allowed in the ponds.") },

    { h2: "What is the area around Myrtle Trace like?", html:
      h.p("Conway is a small city on the Waccamaw River, with a downtown of old brick shop buildings and a riverwalk. The photos show downtown Conway, not Myrtle Trace.") +
      photo("conway-main-street.webp", "Main Street in downtown Conway, South Carolina, lined with old brick shop buildings",
        "Main Street in downtown Conway.") +
      photo("conway-riverwalk.webp", "The riverwalk boardwalk and boat docks on the Waccamaw River in downtown Conway",
        "The riverwalk and boat docks on the Waccamaw River in Conway.") },

    { h2: "Who can live in Myrtle Trace?", html:
      h.p(`At least one person in every home in Myrtle Trace must be 55 or older. The ${h.ext(COV, "HOA's posted copy of its rules")} states it.`) +
      h.p("The rules give no minimum age for anyone else in the home. A younger husband or wife can live with you, and grandchildren can come to visit.") },

    { h2: "How much does it cost to live in Myrtle Trace?", html:
      h.p("Homes in Myrtle Trace usually sell for about $300,000.") +
      h.p("The HOA fee is about $100 a month. It pays for the upkeep of the pool, the clubhouse, the back gates, the private roads, the shared land and the ponds.") +
      h.p("When you buy a home here, you pay the HOA a one-time fee of a little over $1,500.") +
      h.p("On a home at that price that you live in, the county tax bill is about $1,200 a year. That is at last year's rates, with the stormwater fee included.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home you live in")}.`) },

    { h2: "Do you need flood insurance in Myrtle Trace?", html: (bg) =>
      h.p("Usually not, because no home in Myrtle Trace is in a high-risk flood zone.") +
      h.p(`The ${h.ext(LAW, "federal flood law")} requires flood insurance for a home loan only when the home is in a high-risk flood zone. ${h.ext(FEMA, "The government's flood map")} shows where those zones are.`) +
      h.p("A flood policy on a house outside the high-risk zone here usually costs about $550 a year, if you want one.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home and flood insurance cost near Myrtle Beach")}.`) +
      h.cta("Want to know the insurance cost first?", "Ask us for a homeowners quote on the Myrtle Trace home you like, before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "Can you have pets, rent the home out or put up a fence in Myrtle Trace?", html: (bg) =>
      h.p("Pets and renting are allowed, with a few rules, but fences between yards are not.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes. Keep them on a leash outside your yard. They cannot go in the clubhouse or pool area." },
        { icon: "key", label: "Renting it out", text: "Yes, for a year or longer. One tenant must be 55 or older and live there." },
        { icon: "gate", label: "Fences", text: "No fences between yards or across the front. An approved dog run is allowed." },
        { icon: "home", label: "Sheds and pools", text: "No. Sheds and private swimming pools are not allowed." },
      ], { bg }) +
      h.p("In Chapter3's experience, many HOAs here do not allow renting a house at all. Myrtle Trace allows it, with leases of a year or longer.") },

    { h2: "What does a move to Myrtle Trace look like?", html:
      h.p("<strong>Example:</strong> Diane is 68 and moving from Charlotte. She wants a pool, bingo and line dancing close to home, and a hospital nearby.") +
      h.p("Before she offers, an agent at Chapter3 reads the HOA's rules with her. Her surprise is the upkeep: the HOA fee does not pay for her roof, the outside of her house or her grass.") +
      h.p("She also learns she will pay the HOA a little over $1,500 when she buys. She decides to buy a home for about $300,000, a few minutes from the hospital.") },

    { h2: "How does Myrtle Trace compare with other 55+ neighborhoods near Myrtle Beach?", html:
      h.p("Myrtle Trace is the farthest of these four from the beach, and its homes usually sell for the least.") +
      compareTable(SELF) },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "Is Myrtle Trace a 55+ community?", a: "Yes. At least one person in every home must be 55 or older. The other people in the home can be any age." },
    { q: "How much is the HOA fee in Myrtle Trace?", a: "About $100 a month. It pays for the pool, the clubhouse, the private roads, the ponds and the shared land. Each owner pays for their own roof and yard." },
    { q: "Is Myrtle Trace inside Conway city limits?", a: "No. Myrtle Trace has a Conway mailing address but is outside the city, so owners there pay no Conway city tax." },
    { q: "Can you fish in the Myrtle Trace ponds?", a: "Yes. Residents and their house guests can fish from the shared land around the ponds. Every fish must go back in the water." },
    { q: "Does Myrtle Trace have a gate?", a: "The back entrance has gates and the front entrance does not. The HOA says the back gates keep out drivers who cut through the neighborhood." },
  ],
  sources: [
    { name: "Myrtle Trace HOA", href: HOA },
    { name: "HOA's posted copy of its rules", href: COV },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "Not legal or tax advice. Drive times are OpenStreetMap estimates with no traffic. The flood cost is FEMA's middle policy price for this ZIP code.",
  bottomCta: { h2: "Thinking about a home in Myrtle Trace?", p: "Call about the home you like. One of our agents will go over the HOA's rules and rental policy with you.", label: "Call a specialized agent", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace 55 community, living in Myrtle Trace, Myrtle Trace HOA, Myrtle Trace activities",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
