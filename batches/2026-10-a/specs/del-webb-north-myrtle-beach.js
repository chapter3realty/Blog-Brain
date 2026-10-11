/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what it is like to live
 * in Del Webb North Myrtle Beach, a newer 55+ neighborhood in North Myrtle Beach.
 *
 * Version 8, 2026-10-11, after the owner's notes on version 7 (no photo at the top; the story
 * near the end, with tension and Chapter3's skill; photos of the topic) and the grader's list
 * (batches/2026-10-a/GRADE-pages.md).
 * Shape: the newest of the four, with a builder still selling, a mile from the beach. The
 * homes, then the price (a buyer weighs new against resale), the clubhouse, then where it is
 * with the town and its beach photos beside the beach sentence (RULES P10), who can live
 * there, then the example: how an agent handles the HOA rules on a new home, which are not
 * posted online. The comparison table and the FAQ close it. The yard section is cut: lawn
 * care is in the short answer, the builder's list and the FAQ (grader: one fact once).
 *
 * Facts:  batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md, verified rows only.
 *   Place:   rows 13, 40, 41, 49 and 50, 53, 62 to 65. Rush hour: stories.json "traffic-timing".
 *   Builder: rows 23 and 25 (Pulte's three current plans, the smallest from 2,179 sq ft: "the
 *            designs it sells now start at about 2,200 square feet", grader: older homes here
 *            are smaller, so the size is the current designs only), 30, 36, 27 and 28, 32 and
 *            69, 57. The page says "the builder lists" once.
 *   Rules:   row 2 (city agreement: one household member 55 or older). Rows 5 and 7: the
 *            declaration and the 2026 rules are recorded but their text is not online; the
 *            page says so, and the example turns on it.
 *   Money:   rows 58 and 59; tax on $635,000 as a main home at the 2026 levies (rows 50 to 52):
 *            "a little under $3,000".
 *   Flood:   rows 37, 55 ("about $600"), 68.
 * Photos: data/photos.json, beside the beach sentence: beach umbrellas in North Myrtle Beach
 *         (the share image, its crops) and Cherry Grove Pier from above. The lake photo is cut
 *         (no sentence is about it). An aerial of the neighborhood, when photos.json has one,
 *         goes in the "where" section.
 * Maps:   four landmarks; the airport is in the text. Amenity pin "Clubhouse".
 * Story:  an Example (Frank and Joyce): a rental plan and HOA rules that are not online, found
 *         by an agent who gets and reads the HOA documents (stories.json
 *         "hoa-rental-bans-filtered": many communities ban renting; the agents read the HOA
 *         documents). Present tense, no numbers, no prices, no rule stated that no row holds.
 */
const { h, maps, story, glance, photoSet, compareTable } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const AGREEMENT = "https://www.nmb.us/AgendaCenter/ViewFile/Item/412?fileID=627";
const PULTE = "https://www.delwebb.com/homes/south-carolina/myrtle-beach/north-myrtle-beach/del-webb-north-myrtle-beach-210691";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=1285%20Possum%20Trot%20Road%2C%20North%20Myrtle%20Beach%2C%20SC%2029582";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

const ph = photoSet().share("north-myrtle-beach-beach-umbrellas");
const AERIAL = ph.aerial("del-webb-north-myrtle-beach", "Del Webb North Myrtle Beach from the air.");
const M = maps("del-webb-north-myrtle-beach", [
  { id: "beach_dwnmb", name: "the beach at 14th Avenue South", short: "Beach", kind: "beach" },
  { id: "hosp_mcleod", name: "McLeod Health Seacoast", short: "Hospital", kind: "hospital" },
  { id: "groc_dwnmb", name: "Kroger", short: "Kroger", kind: "grocery", map: "region" },
  { id: "barefoot", name: "Barefoot Landing", short: "Barefoot Landing", kind: "shopping" },
], {
  label: "Del Webb",
  amenity: "Clubhouse",
  regionCaption: "Map of where Del Webb North Myrtle Beach is, with drive times by car.",
  closeCaption: "Map of the streets and the clubhouse inside Del Webb North Myrtle Beach.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  /* The share photo (or the aerial) in 1x1, 4x3 and 16x9 for Article.image (rules/image-metadata.md). */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb North Myrtle Beach (55+) | Chapter3",
  description: "What life is like in Del Webb North Myrtle Beach: new homes a mile from the beach, lawn care, the clubhouse and pools, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb North Myrtle Beach: new homes, lawn care and a clubhouse near the beach",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb North Myrtle Beach?",
  h1em: "New 55+ homes a mile from the beach.",
  sub: "Del Webb North Myrtle Beach is a newer 55+ neighborhood of houses, about 4 minutes by car from the beach without traffic.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 4 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 6 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 10 minutes" },
    { icon: "lawn", label: "Lawn care", text: "Mowed for you" },
  ]),
  heroCta: { label: "Speak to an expert", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb North Myrtle Beach has about 400 homes built so far, and its builder is still selling new ones. At least one person in each household must be 55 or older.",
    "Lawn care is part of the homeowners association (HOA) fee, so you do not mow your own grass. Owners share a clubhouse with indoor and outdoor pools.",
  ],
  sections: [
    { h2: "What are the new homes like in Del Webb North Myrtle Beach?", html:
      ph.css() +
      h.p("The builder, Pulte, sells new houses here under its Del Webb name. Each design it sells now has 2 to 4 bedrooms and a garage.") +
      h.p("The builder lists these for its houses here:") +
      h.ul([
        "Current designs from about 2,200 square feet",
        "Fabric hurricane covers for the windows",
        "A warranty on the structure for 10 years, which a later owner keeps",
        "Lawn care, sprinklers in every yard and a TV package, all in the HOA fee",
        "A clubhouse with indoor and outdoor pools and a fitness center",
      ]) },

    { h2: "What does a home here cost?", html:
      h.p("In the last year, new homes from the builder usually sold for about $635,000. Homes resold by their owners sold for about $535,000.") +
      h.p("The new-home figure is what buyers paid in the end, with the lot and the extras each one picked.") +
      h.p(`If you live in a new home at that price, the property tax is a little under $3,000 a year. That includes the city tax. See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach")}.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home and wind insurance cost near the coast")}.`) },

    { h2: "What is in the clubhouse?", html:
      h.p("The clubhouse has an indoor lap pool, a fitness center, a crafts room and a room for gatherings. There is an outdoor pool too.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor lap pool", text: "Swim laps when it is cold out" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "For sunny afternoons" },
        { illustration: "clubhouse", label: "The clubhouse", text: "A fitness center, a crafts room and a gathering room" },
        { illustration: "card-table", label: "Clubs", text: "Activity groups, and a full-time lifestyle director" },
      ], { cols: 4 }) },

    { h2: "Where is the neighborhood, and what is the town like?", html: (bg) =>
      h.p("It is inside the city of North Myrtle Beach, about a mile from the ocean. US 17 runs between it and the beach.") +
      h.p("The beach is about 4 minutes away by car without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      AERIAL +
      M.pair +
      h.p("Grand Strand Health's North Strand ER, an emergency room open day and night, is about a mile and a half away. McLeod Health Seacoast, the nearest hospital, is about 10 minutes away.") +
      h.p("Myrtle Beach International Airport is the long drive, about 35 minutes.") +
      h.p(`Every lot here is outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}, so ${h.ext(LAW, "federal law")} does not make a lender require flood insurance. A flood policy in North Myrtle Beach usually costs about $600 a year.`) +
      h.cta("Get the HOA fee and an insurance quote before you sign.", "Pick the home you like. One of our agents gets the current HOA fee and helps with a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p("North Myrtle Beach has a wide sand beach lined with beach houses, and a fishing pier at Cherry Grove.") +
      ph.gallery([
        { name: "north-myrtle-beach-beach-umbrellas", alt: "Rows of beach chairs and blue, green and yellow umbrellas on the wide sand beach in North Myrtle Beach", caption: "Beach chairs and umbrellas in North Myrtle Beach" },
        { name: "cherry-grove-pier", alt: "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above", caption: "Cherry Grove Pier and the beach, from high above" },
      ], { label: "Photos of North Myrtle Beach" }) },

    { h2: "Who can live here?", html:
      h.p(`Each household must include at least one person who is 55 or older, under the city's ${h.ext(AGREEMENT, "agreement with the builder")}.`) +
      h.p("A younger husband or wife can live there too.") +
      h.p("The HOA's full rules are recorded with the county, but they are not posted online.") },

    { h2: "How does a Chapter3 agent check the HOA rules on a new home?", html: (bg) =>
      h.p("A Chapter3 agent gets the HOA documents and reads them with you before you sign the builder's contract.") +
      story([
        "<strong>Example:</strong> Frank and Joyce plan to spend summers near their son in Michigan and rent their new house out while they are gone. They pick a design in Del Webb North Myrtle Beach and are ready to sign the builder's contract that week.",
        "The HOA's own rules are not posted online, and many HOAs here do not allow renting at all. If this HOA is one of them, they would find out only after they sign.",
        "Before they sign, their Chapter3 agent gets a copy of the HOA's recorded rules and reads the rental rule with them. Frank and Joyce now decide on the builder's contract with the rental rule in front of them.",
      ], "On a new home, read the HOA's rules for your own plans before you sign the builder's contract.", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "get the HOA documents and read them with you")}.`) },

    { h2: "How does Del Webb North Myrtle Beach compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb North Myrtle Beach is the newest of these four neighborhoods.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach finished?", a: "Not yet. About 400 homes are built, and the builder is still selling new houses there." },
    { q: "Does the HOA fee in Del Webb North Myrtle Beach include lawn care?", a: "Yes. Lawn care and a TV package are part of the HOA fee, and every yard has sprinklers." },
    { q: "Do you need flood insurance in Del Webb North Myrtle Beach?", a: "No law requires it, because every lot is outside the high-risk flood zone. A lender may still ask for it." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes. It is inside North Myrtle Beach, so owners pay a city tax on top of the county and school tax." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte builds them and sells them under its Del Webb name. The designs it sells now have 2 to 4 bedrooms and a garage." },
  ],
  sources: [
    { name: "Del Webb North Myrtle Beach website", href: PULTE },
    { name: "City agreement with the builder", href: AGREEMENT },
    { name: "Horry County tax levies", href: LEVY },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "This is not legal or tax advice, and builder prices change. Drive times come from OpenStreetMap and leave out traffic. The flood cost is the middle FEMA price for policies in ZIP code 29582.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get the current HOA fee before you choose a design.", p: "Call about the home you want. One of our agents gets the HOA fee and reads the HOA documents with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach clubhouse, Del Webb North Myrtle Beach HOA, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
