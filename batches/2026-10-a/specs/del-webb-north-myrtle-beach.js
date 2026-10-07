/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what it is like to live
 * in Del Webb North Myrtle Beach, a newer 55+ neighborhood in North Myrtle Beach.
 *
 * Version 5, rewritten from the top 2026-10-07 for the owner's PLAIN rules
 * (voice/RULES.md class PLAIN, batches/2026-10-a/REWRITE-PLAIN.md): the life and the
 * place first, a map and icons in the first screens, round numbers, the date once (in
 * the byline), plain words, no builder model names, price later and softly.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md, verified rows only.
 *   Place:   rows 13 (inside city limits), 41 (beach access about a mile), 49 (city levy),
 *            62 to 67 (drives: beach 4, Kroger 6, McLeod Health Seacoast 10, airport 35,
 *            Barefoot Landing 9 minutes).
 *   Homes:   rows 21 (about 408 built), 25 (2 to 4 bedrooms, 2- or 3-car garages, smallest
 *            from 2,179 sq ft), 30 (storm fabric: "fabric hurricane covers").
 *            Pulte's facts are given as the builder's ("the builder says").
 *   Life:    rows 32 (clubhouse rooms; one "resort-style" pool not said to be outdoors),
 *            35 (city community center next door with an indoor gym, Pulte's words), 57 (lifestyle director, clubs). Row 33 (pickleball, trails) is wrong
 *            as worded and is not used.
 *   Fee:     rows 27 and 28 (lawn care, irrigation and a TV package in the HOA fee, the
 *            builder's words). No verified
 *            dues amount, closing fee, pet, golf cart, fence, guest or rental rule: the
 *            HOA's recorded rules are not online (rows 5, 7). Those questions are not asked.
 *   Money:   rows 58 (resale middle sale $534,900), 24 (builder's lowest starting price
 *            $585,990 on October 5), v4 tax result ($3,139 on $699,965 as a main home,
 *            2026 levies, rows 50 and 52; "a little over $3,000 at this year's rates").
 *   Rule:    row 2 (city agreement: one household member 55 or older).
 *   Flood:   row 37 (every lot outside the high-risk zone), row 55 (middle ZIP code policy
 *            $602 with fees; "about $600"), row 68 (federal purchase rule, verified 2026-10-07).
 * Photos: data/photos.json (North Myrtle Beach beach, Cherry Grove Pier).
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer". The
 *         example (Linda and Ray) is version 4's, with three numbers. The New York tax story
 *         was cut in review 3 (it is not about this neighborhood).
 * Map:    four landmarks. The airport (35 minutes) is in the text, not on the map: it
 *         zoomed the map out until the labels crowded (review 3).
 * Review 3 fixes applied 2026-10-07 (REVIEW-3.md, BUYER-READ-v5-del-webb-north-myrtle-beach.md).
 */
const { h } = require("../tools/mkpage.js");
const { mapBlock, photo, compareTable, atAGlance } = require("./_55-plus-kit.js");

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

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Del Webb North Myrtle Beach (55+) | Chapter3",
  description: "What life is like in Del Webb North Myrtle Beach: the clubhouse and pools, where it is on a map, the new homes, the 55+ rule and what the HOA fee includes.",
  ogTitle: "Living in Del Webb North Myrtle Beach: the clubhouse, the homes and the 55+ rule",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb North Myrtle Beach?",
  h1em: "New 55+ homes near the beach.",
  sub: "Del Webb North Myrtle Beach is a newer 55+ neighborhood of houses, about 4 minutes from the beach by car.",
  heroCta: { label: "Talk to an agent about Del Webb", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb North Myrtle Beach has about 400 homes built so far, and the builder is still selling new ones. At least one person in each household must be 55 or older.",
    "Owners share a clubhouse with two pools, one of them an indoor lap pool, and a fitness room. The builder says the homeowners association (HOA) fee includes lawn care, so you do not mow your own grass.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "About 4 minutes by car" },
        { icon: "grocery", label: "Groceries", text: "Kroger, about 6 minutes away" },
        { icon: "hospital", label: "Hospital", text: "McLeod Health Seacoast, about 10 minutes away" },
        { icon: "pool", label: "Pools", text: "Two pools, one an indoor lap pool" },
        { icon: "lawn", label: "Lawn care", text: "Included in the HOA fee" },
        { icon: "calendar", label: "Clubs", text: "A full-time lifestyle director and activity groups" },
      ], { title: "Del Webb North Myrtle Beach at a glance", bg }) },

    { h2: "Where is Del Webb North Myrtle Beach?", html:
      h.p("Del Webb North Myrtle Beach is inside the city of North Myrtle Beach, about a mile from the ocean.") +
      mapBlock("del-webb-north-myrtle-beach", [
        { id: "beach_dwnmb", label: "Beach", kind: "beach" },
        { id: "groc_dwnmb", label: "Kroger", kind: "grocery" },
        { id: "hosp_mcleod", label: "Hospital", kind: "hospital" },
        { id: "barefoot", label: "Barefoot Landing", kind: "shopping" },
      ], "Map of Del Webb North Myrtle Beach, with drive times by car to the beach and other places nearby.") +
      h.p("Barefoot Landing, with shops and a show theater, is about 9 minutes away. Myrtle Beach International Airport is about 35 minutes away.") +
      h.p("Because the neighborhood is inside the city, you pay a city tax along with the county tax.") },

    { h2: "What are the homes like in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("The builder, Pulte, sells new houses here under its Del Webb name, with 2 to 4 bedrooms.") +
      h.p("Each new house has a two- or three-car garage. The smallest design is about 2,200 square feet.") +
      h.p("The builder lists fabric hurricane covers for the windows of each new house.") +
      h.cta("Want a new Del Webb home in North Myrtle Beach?", "Tell us the house and the lot you like. One of our agents will read the HOA documents with you before you sign the builder's contract.", "Want to buy a new construction home?", "/contact/", bg) },

    { h2: "What is there to do in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("Del Webb North Myrtle Beach has a full-time lifestyle director and clubs and activity groups you can join.") +
      atAGlance([
        { icon: "indoor-pool", label: "Indoor lap pool", text: "Swim laps inside the clubhouse" },
        { icon: "fitness", label: "Fitness room", text: "Work out without leaving the neighborhood" },
        { icon: "cards", label: "Arts and crafts", text: "A room set up for crafts" },
        { icon: "clubhouse", label: "Gathering room", text: "A big room in the clubhouse for getting together" },
      ], { bg }) +
      h.p("In a normal week you can swim laps indoors, work out and meet neighbors at a club.") +
      h.p("The builder says the city's community center next door has an indoor gym for basketball and pickleball.") },

    { h2: "What is the area around Del Webb North Myrtle Beach like?", html:
      h.p("North Myrtle Beach has a wide sand beach, beach houses and a fishing pier. The photos show the area nearby, not the Del Webb homes.") +
      photo("north-myrtle-beach-beach-umbrellas.webp", "Rows of beach chairs and umbrellas on the wide sand beach in North Myrtle Beach",
        "Beach chairs and umbrellas in North Myrtle Beach.") +
      photo("cherry-grove-pier.webp", "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above",
        "The beach and Cherry Grove Pier in North Myrtle Beach, from high above.") },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p("Each household in Del Webb North Myrtle Beach must include at least one person who is 55 or older.") +
      h.p(`The city's ${h.ext(AGREEMENT, "agreement with the builder")} lets a younger husband or wife live in the home with that person.`) },

    { h2: "How much does it cost to live in Del Webb North Myrtle Beach?", html:
      h.p("Homes that owners resold here in the last year usually sold for about $535,000.") +
      h.p("The builder's new homes started at about $586,000 in early October.") +
      h.p("The builder says the HOA fee includes lawn care and a TV package, and each yard comes with sprinklers.") +
      h.p("On a new home of about $700,000 that you live in, property tax is a little over $3,000 a year. That is at this year's rates, with city tax included.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach and the rest of Horry County")}.`) },

    { h2: "Do you need flood insurance in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("Usually not, because every lot in Del Webb North Myrtle Beach is outside the high-risk flood zone.") +
      h.p(`A lender has to require flood insurance only for a home inside that zone, under the ${h.ext(LAW, "federal flood insurance law")}. The zone is on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("If you choose to buy one, a policy on a house outside the high-risk zone usually costs about $600 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what home insurance costs near the coast")}.`) +
      h.cta("Want the insurance cost before you sign?", "Pick the home you like, and one of our agents helps you get a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "What does a move to Del Webb North Myrtle Beach look like?", html:
      h.p("<strong>Example:</strong> Linda is 67 and Ray is 61. They are moving from Columbus, Ohio, to live near the beach.") +
      h.p("They want a pool, room for the grandchildren to visit and no more lawn to mow. Before they sign with the builder, an agent at Chapter3 reads the HOA's rules on guests and pets with them.") +
      h.p("Their surprise is the drive to the airport, about 35 minutes. They decide to buy a new Del Webb house with an extra bedroom for the grandchildren.") },

    { h2: "How does Del Webb North Myrtle Beach compare with other 55+ neighborhoods?", html:
      h.p("Del Webb North Myrtle Beach is the newest of these four, and its builder still sells new homes there.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach a 55+ community?", a: "Yes. Each household must include at least one person who is 55 or older, under the city's agreement with the builder." },
    { q: "Does the HOA fee in Del Webb North Myrtle Beach include lawn care?", a: "Yes. The builder says the HOA fee includes lawn care and a TV package, and that each yard is landscaped with sprinklers." },
    { q: "How far is Del Webb North Myrtle Beach from the beach?", a: "About 4 minutes by car, or about a mile, to the nearest public beach parking lot." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes. The neighborhood is inside North Myrtle Beach, so owners pay a city tax as well as the county and school tax." },
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
  bottomCta: { h2: "Ready to look at homes in Del Webb North Myrtle Beach?", p: "Call about the house and the lot you want. One of our agents gets the current HOA fee and reads the HOA documents with you.", label: "Call about Del Webb North Myrtle Beach", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach clubhouse, Del Webb North Myrtle Beach HOA, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
