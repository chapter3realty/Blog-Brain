/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what it is like to live
 * in Del Webb North Myrtle Beach, a newer 55+ neighborhood in North Myrtle Beach.
 *
 * Final build, 2026-10-10, with the review 4 and buyer read v6 fixes (CRAFT.md,
 * voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9, STANDARD T2 as changed in 52d07ac).
 * Shape: the newest of the four, with a builder still selling, a mile from the beach. A
 * buyer here weighs a new house against a resale, so the price comes right after the
 * homes. Then who keeps up the yard (the story), the clubhouse, and the place and the
 * town in one section, where the one drawback, the drive to the airport, is said. Flood
 * is one line there and one FAQ: every lot is outside the high-risk zone.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md, verified rows only.
 *   Place:   rows 13 (inside city limits), 40 (west of US 17), 41 (beach access about a
 *            mile), 49 and 50 (city levy), 53 (North Strand ER, about 1.4 miles, open 24
 *            hours), 62 to 65 (drives: beach 4, Kroger 6, McLeod Health Seacoast 10,
 *            Myrtle Beach International Airport 35).
 *   Builder: rows 25 (2 to 4 bedrooms, garages, smallest from 2,179 sq ft), 30 (storm
 *            fabric), 36 (10-year structural warranty that transfers), 27 and 28 (lawn care,
 *            sprinklers and a TV package in the HOA fee), 32 and 69 (clubhouse rooms, indoor
 *            and outdoor pools, no count), 57 (lifestyle director, clubs and activity
 *            groups). All of these are the builder's own list. The page says so once, in
 *            the list in the homes section ("the builder lists"), and states them plainly
 *            after that (coordinator, fix round: "the builder says/lists" once a page).
 *            Row 33 is wrong as worded and is not used; row 35 (the city's center "next
 *            door") is the builder's word and is not used.
 *   Not used: no verified dues amount, closing fee, pet, golf cart, fence, guest or rental
 *            rule: the HOA's recorded rules are not online (rows 5, 7). The bottom CTA
 *            offers the current HOA fee.
 *   Money:   rows 58 (resale middle sale $534,900), 59 (new homes closed, middle $634,500;
 *            closed prices, with the lot and options each buyer chose). Tax on $635,000 as
 *            a main home at the 2026 levies (rows 50 to 52): 635,000 x 4% x (52.1 + 10.0 +
 *            50.0 mills) = $2,847, "a little under $3,000" (review 4 NMB 2; the verifier
 *            should add this line to the ledger).
 *   Rule:    row 2 (city agreement: one household member 55 or older). Review 4 NMB 1: only
 *            a younger husband or wife is said; the HOA's own age rule is unread.
 *   Flood:   row 37 (every lot outside the high-risk zone), row 55 (middle ZIP code policy
 *            $602 with fees; "about $600"), row 68 (the law requires it only inside the
 *            zone; a lender may still ask).
 * Photos: data/photos.json. Hero: beach umbrellas in North Myrtle Beach. Gallery: Cherry
 *         Grove Pier from above, a lake with shops.
 * Maps:   four landmarks; the airport (35 minutes) is in the text, not on the map. Kroger is
 *         on the region map only. The amenity pin is "Clubhouse", as the text says it.
 *         Hero: an icon row (mkpage heroMedia).
 * Story:  an Example (Gary and Lynn): the yard work, ending in Del Webb North Myrtle Beach.
 *         Chapter3 is not in it; the service (reading the HOA documents, stories.json
 *         "hoa-rental-bans-filtered") is the CTA box right after the meaning line.
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

const ph = photoSet();
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
  /* The hero photo in 1x1, 4x3 and 16x9 for Article.image (rules/image-metadata.md). */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb North Myrtle Beach (55+) | Chapter3",
  description: "What life is like in Del Webb North Myrtle Beach: new homes a mile from the beach, lawn care, the clubhouse and pools, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb North Myrtle Beach: new homes, lawn care and a clubhouse near the beach",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb North Myrtle Beach?",
  h1em: "New 55+ homes a mile from the beach.",
  sub: "Del Webb North Myrtle Beach is a newer 55+ neighborhood of houses, about 4 minutes by car from the beach.",
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
    { id: "c3-photo", html: ph.css() + ph.hero("north-myrtle-beach-beach-umbrellas", {
        alt: "Rows of beach chairs and blue, green and yellow umbrellas on the wide sand beach in North Myrtle Beach",
        caption: "Beach chairs and umbrellas in North Myrtle Beach. These photos show the town around Del Webb, not the Del Webb homes.",
      }) },

    { h2: "What are the new homes like in Del Webb North Myrtle Beach?", html:
      h.p("The builder, Pulte, sells new houses here under its Del Webb name. Each design has 2 to 4 bedrooms and a garage.") +
      h.p("The builder lists these for its houses here:") +
      h.ul([
        "About 2,200 square feet in the smallest design",
        "Fabric hurricane covers for the windows",
        "A warranty on the structure for 10 years, which a later owner keeps",
        "Lawn care, sprinklers in every yard and a TV package, all in the HOA fee",
        "A clubhouse with indoor and outdoor pools and a fitness center",
      ]) },

    { h2: "What does a home in Del Webb North Myrtle Beach cost?", html:
      h.p("In the last year, new homes from the builder usually sold for about $635,000. Homes resold by their owners sold for about $535,000.") +
      h.p("The new-home figure is what buyers paid in the end, with the lot and the extras each one picked.") +
      h.p(`If you live in a new home at that price, the property tax is a little under $3,000 a year. That includes the city tax. See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach")}.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home and wind insurance cost near the coast")}.`) },

    { h2: "Who takes care of the yard in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("The HOA does. Lawn care is part of the HOA fee, and the sprinklers are already in the ground.") +
      story([
        "<strong>Example:</strong> For 31 years, Gary mowed the same big yard in Dayton every Saturday morning. He and Lynn wanted to retire near the ocean, and he did not want to spend his Saturdays on a lawn again.",
        "Lynn did not want a condo, because she wanted a garage for his tools and a patio for her flower pots. They agreed on one rule for the search: a house, with someone else paid to cut the grass.",
        "They bought a new house in Del Webb North Myrtle Beach. On their first Saturday there, Gary took his coffee to the beach at seven.",
      ], "If yard work is why you want to move, put lawn care on your list before you look at floor plans.", bg) +
      h.cta("Pick a new Del Webb home with an agent.", "Tell us which design you like. An agent at Chapter3 can read the HOA documents with you before you sign the builder's contract.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What is in the Del Webb North Myrtle Beach clubhouse?", html:
      h.p("The clubhouse has an indoor lap pool, a fitness center, a crafts room and a room for gatherings. There is an outdoor pool too.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor lap pool", text: "Swim laps when it is cold out" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "For sunny afternoons" },
        { illustration: "clubhouse", label: "The clubhouse", text: "A fitness center, a crafts room and a gathering room" },
        { illustration: "card-table", label: "Clubs", text: "Activity groups, and a full-time lifestyle director" },
      ], { cols: 4 }) },

    { h2: "Where is Del Webb North Myrtle Beach, and what is the town like?", html: (bg) =>
      h.p("It is inside the city of North Myrtle Beach, about a mile from the ocean. US 17 runs between it and the beach.") +
      M.pair +
      h.p("Grand Strand Health's North Strand ER, an emergency room open day and night, is about a mile and a half away. McLeod Health Seacoast, the nearest hospital, is about 10 minutes away.") +
      h.p("Myrtle Beach International Airport is the long drive, about 35 minutes.") +
      h.p(`Every lot here is outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.cta("Get the HOA fee and an insurance quote before you sign.", "Pick the home you like. One of our agents gets the current HOA fee and helps with a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p("North Myrtle Beach has a wide sand beach lined with beach houses, and a fishing pier at Cherry Grove.") +
      ph.gallery([
        { name: "cherry-grove-pier", alt: "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above", caption: "Cherry Grove Pier and the beach, from high above" },
        { name: "north-myrtle-beach-lake-shops", alt: "A calm lake reflecting the clouds, with restaurants and shops along the far shore in North Myrtle Beach", caption: "A lake in North Myrtle Beach, with shops on the far shore" },
      ], { label: "Photos of North Myrtle Beach" }) },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p(`Each household must include at least one person who is 55 or older, under the city's ${h.ext(AGREEMENT, "agreement with the builder")}.`) +
      h.p("A younger husband or wife can live there too.") },

    { h2: "How does Del Webb North Myrtle Beach compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb North Myrtle Beach is the newest of these four neighborhoods.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach finished?", a: "Not yet. About 400 homes are built, and the builder is still selling new houses there." },
    { q: "Does the HOA fee in Del Webb North Myrtle Beach include lawn care?", a: "Yes. Lawn care and a TV package are part of the HOA fee, and every yard has sprinklers." },
    { q: "Do you need flood insurance in Del Webb North Myrtle Beach?", a: "No law requires it, because every lot is outside the high-risk flood zone. A lender may still ask for it. A flood policy in North Myrtle Beach usually costs about $600 a year." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes. It is inside North Myrtle Beach, so owners pay a city tax on top of the county and school tax." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte builds them and sells them under its Del Webb name. Its new houses have 2 to 4 bedrooms and a garage." },
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
  bottomCta: { h2: "Get the current HOA fee before you choose a design.", p: "Call about the home you want. One of our agents gets the HOA fee and reads the HOA documents with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach clubhouse, Del Webb North Myrtle Beach HOA, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
