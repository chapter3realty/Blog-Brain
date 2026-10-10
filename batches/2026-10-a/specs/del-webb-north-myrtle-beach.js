/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what it is like to live
 * in Del Webb North Myrtle Beach, a newer 55+ neighborhood in North Myrtle Beach.
 *
 * Final build, 2026-10-10 (CRAFT.md, voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9).
 * Shape: the newest of the four, with a builder still selling, a mile from the beach. The
 * page leads with the new homes and who keeps up the yard, then the clubhouse, then the
 * place and the town. The one drawback, the drive to the airport, is said where the map is.
 * Money and flood come late.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md, verified rows only.
 *   Place:   rows 13 (inside city limits), 41 (beach access about a mile), 49 and 50 (city
 *            levy), 53 (North Strand ER, about 1.4 miles, open 24 hours), 62 to 67 (drives:
 *            beach 4, Kroger 6, McLeod Health Seacoast 10, airport 35, Barefoot Landing 9).
 *   Homes:   rows 21 (about 408 built of 497 lots), 25 (2 to 4 bedrooms, garages, smallest
 *            from 2,179 sq ft), 30 (storm fabric), 36 (10-year structural warranty that
 *            transfers). Pulte's facts are attributed to the builder.
 *   Life:    rows 27 and 28 (lawn care, sprinklers and a TV package in the HOA fee, the
 *            builder's words), 32 (clubhouse rooms), 69 (indoor and outdoor pools, no count),
 *            35 (the city's community center next door, with indoor basketball and
 *            pickleball, the builder's words), 57 (lifestyle director, clubs). Row 33 is wrong
 *            as worded and is not used. No verified dues amount, closing fee, pet, golf cart,
 *            fence, guest or rental rule: the HOA's recorded rules are not online (rows 5, 7).
 *            Those questions are not asked; the bottom CTA offers the current HOA fee.
 *   Money:   rows 58 (resale middle sale $534,900), 59 (new homes closed, middle $634,500;
 *            closed prices, not starting prices), v4 tax result ($3,139 on $699,965 as a
 *            main home, 2026 levies, rows 50 and 52; "a little over $3,000").
 *   Rule:    row 2 (city agreement: one household member 55 or older).
 *   Flood:   row 37 (every lot outside the high-risk zone), row 55 (middle ZIP code policy
 *            $602 with fees; "about $600"), row 68 (federal purchase rule).
 * Photos: data/photos.json. Hero: beach umbrellas in North Myrtle Beach. Gallery: Cherry
 *         Grove Pier from above, a lake with shops. The dunes sunrise (not the author's
 *         upload), the theater sign (a brand sign) and the gray waterway shot are not used.
 * Map:    four landmarks; the airport (35 minutes) is in the text, not on the map, where it
 *         zoomed the map out until the labels crowded (review 3). Kroger is put on the region map.
 * Story:  an Example (Gary and Lynn): the yard work. Chapter3 once, reading the HOA
 *         documents (stories.json "hoa-rental-bans-filtered"; STANDARD T2). Two numbers.
 */
const { h, maps, story, photoSet, compareTable } = require("./_55-plus-kit.js");

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
  regionCaption: "Map of where Del Webb North Myrtle Beach is, with drive times by car.",
  closeCaption: "Map of the streets and the amenity center inside Del Webb North Myrtle Beach.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Del Webb North Myrtle Beach (55+) | Chapter3",
  description: "What life is like in Del Webb North Myrtle Beach: new homes a mile from the beach, lawn care, the clubhouse and pools, a map, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb North Myrtle Beach: new homes, lawn care and a clubhouse near the beach",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb North Myrtle Beach?",
  h1em: "New 55+ homes a mile from the beach.",
  sub: "Del Webb North Myrtle Beach is a newer 55+ neighborhood of houses, about 4 minutes by car from the beach.",
  heroCta: { label: "Speak to an expert", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb North Myrtle Beach has about 400 homes built so far, and its builder is still selling new ones. At least one person in each household must be 55 or older.",
    "The beach is about 4 minutes away by car. The builder says the homeowners association (HOA) fee includes lawn care, so you do not mow your own grass.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("north-myrtle-beach-beach-umbrellas", {
        alt: "Rows of beach chairs and blue, green and yellow umbrellas on the wide sand beach in North Myrtle Beach",
        caption: "Beach chairs and umbrellas in North Myrtle Beach. These photos show the town around Del Webb, not the Del Webb homes.",
      }) },

    { h2: "What are the new homes like in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("The builder, Pulte, sells new houses here under its Del Webb name, with 2 to 4 bedrooms.") +
      h.p("Each design has a two- or three-car garage, and the smallest is about 2,200 square feet.") +
      h.p("Pulte lists fabric hurricane covers for the windows of every new house. Pulte says its warranty covers the structure for 10 years and can pass to a later owner.") +
      h.cta("Want a new Del Webb home in North Myrtle Beach?", "Tell us the design and the lot you like. One of our agents reads the HOA documents with you before you sign the builder's contract.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "Who takes care of the yard in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("The HOA fee pays for it: the builder says lawn care is included, and every yard has sprinklers.") +
      h.p("The builder also lists a TV package in the fee.") +
      story([
        "<strong>Example:</strong> For 31 years, Gary mowed the same big yard in Dayton every Saturday morning. He and Lynn wanted to retire near the ocean, and he did not want to spend Saturdays on a lawn again.",
        "Lynn did not want a condo, because she wanted a garage for his tools and a yard for her flower pots. They agreed on one rule for the search: a house, with someone else paid to cut the grass.",
        "Before they signed the builder's contract, an agent at Chapter3 read the HOA documents with them. On their first Saturday in the new house, Gary took his coffee to the beach at seven.",
      ], "If yard work is why you want to move, put lawn care on your list before you look at floor plans.", bg) },

    { h2: "What is in the Del Webb North Myrtle Beach clubhouse?", html:
      h.p("The builder lists an indoor lap pool and a fitness center in the clubhouse. It says the city's community center next door has an indoor gym.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor and outdoor pools", text: "Swim laps inside when it is cold out" },
        { illustration: "clubhouse", label: "The clubhouse", text: "A fitness center, a crafts room and a gathering room" },
        { illustration: "card-table", label: "Clubs", text: "Activity groups and a full-time lifestyle director" },
        { illustration: "pickleball", label: "Pickleball next door", text: "Indoor courts at the city's community center" },
      ], { cols: 4 }) },

    { h2: "Where is Del Webb North Myrtle Beach?", html:
      h.p("Del Webb North Myrtle Beach is inside the city of North Myrtle Beach, about a mile from the ocean.") +
      M.pair +
      h.p("Grand Strand Health's North Strand ER, an emergency room open 24 hours, is about a mile and a half away. McLeod Health Seacoast, the nearest hospital, is about 10 minutes away.") +
      h.p("Kroger is about 6 minutes away, and the Barefoot Landing shops about 9. The airport is the long drive, about 35 minutes.") },

    { h2: "What is North Myrtle Beach like?", html:
      h.p("North Myrtle Beach has a wide sand beach lined with beach houses, and a fishing pier at Cherry Grove.") +
      ph.gallery([
        { name: "cherry-grove-pier", alt: "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above", caption: "Cherry Grove Pier and the beach, from high above" },
        { name: "north-myrtle-beach-lake-shops", alt: "A calm lake reflecting the clouds, with restaurants and shops along the far shore in North Myrtle Beach", caption: "A lake in North Myrtle Beach, with shops on the far shore" },
      ], { label: "Photos of North Myrtle Beach" }) },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p(`Each household must include at least one person who is 55 or older, under the city's ${h.ext(AGREEMENT, "agreement with the builder")}.`) +
      h.p("Other people in the household can be younger, such as a husband or wife.") },

    { h2: "What does a home in Del Webb North Myrtle Beach cost?", html:
      h.p("Homes that owners resold here in the last year usually sold for about $535,000.") +
      h.table(["Home", "Usually sold for"], [
        ["Resold by an owner", "About $535,000"],
        ["New from the builder", "About $635,000"],
      ]) +
      h.p("The new-home prices are what buyers paid at closing, not the builder's starting prices.") +
      h.p("Property tax on a new home of about $700,000 that you live in is a little over $3,000 a year. That includes the city tax, because the neighborhood is inside North Myrtle Beach.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach and the rest of Horry County")}.`) },

    { h2: "Do you need flood insurance in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("Usually not, because every lot in Del Webb North Myrtle Beach is outside the high-risk flood zone.") +
      h.p(`A lender must require flood insurance only for a home inside that zone, under the ${h.ext(LAW, "federal flood insurance law")}. The zone is on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("If you choose to buy a policy anyway, one for a house outside the high-risk zone usually costs about $600 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home insurance costs near the coast")}.`) +
      h.cta("Want the insurance cost before you sign?", "Pick the home you like, and one of our agents helps you get a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How does Del Webb North Myrtle Beach compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb North Myrtle Beach is the newest of these four neighborhoods.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach finished?", a: "Not yet. About 400 homes are built on about 500 lots, and the builder is still selling new houses there." },
    { q: "Does the HOA fee in Del Webb North Myrtle Beach include lawn care?", a: "Yes, the builder says. Lawn care and a TV package are in the HOA fee, and every yard has sprinklers." },
    { q: "What hospital is closest to Del Webb North Myrtle Beach?", a: "McLeod Health Seacoast in Little River is about 10 minutes away by car. Grand Strand Health's North Strand ER, open 24 hours, is about a mile and a half away." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes. It is inside North Myrtle Beach, so owners pay a city tax on top of the county and school tax." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte builds them and sells them under its Del Webb name. Its new houses have 2 to 4 bedrooms and a two- or three-car garage." },
  ],
  sources: [
    { name: "Del Webb North Myrtle Beach website", href: PULTE },
    { name: "City agreement with the builder", href: AGREEMENT },
    { name: "Horry County tax levies", href: LEVY },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: "Educational only, not legal or tax advice. Builder prices change. OpenStreetMap gives the drive times, with no traffic. FEMA policy data for this ZIP code gives the flood cost.",
  bottomCta: { h2: "Ready to look at homes in Del Webb North Myrtle Beach?", p: "Call about the house and the lot you want. One of our agents gets the current HOA fee and reads the HOA documents with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach clubhouse, Del Webb North Myrtle Beach HOA, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
