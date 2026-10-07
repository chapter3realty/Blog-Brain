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
 *            from 2,179 sq ft), 30 (storm fabric, natural gas), 36 (warranty transfers).
 *            Pulte's facts are given as the builder's ("the builder says").
 *   Life:    rows 32 (clubhouse rooms), 35 (city community center next door, Pulte's
 *            words), 57 (lifestyle director, clubs). Row 33 (pickleball, trails) is wrong
 *            as worded and is not used.
 *   Fee:     rows 27 and 28 (lawn care, irrigation and a TV package in the HOA fee, the
 *            builder's words), 29 (fiber network, not said to be in the fee). No verified
 *            dues amount, closing fee, pet, golf cart, fence, guest or rental rule: the
 *            HOA's recorded rules are not online (rows 5, 7). Those questions are not asked.
 *   Money:   rows 58 (resale middle sale $534,900), 24 (builder's lowest starting price
 *            $585,990 on October 5), v4 tax result ($3,139 on $699,965 as a main home,
 *            2026 levies, rows 50 and 52; "a little over $3,000").
 *   Rule:    row 2 (city agreement: one household member 55 or older).
 *   Flood:   row 37 (every lot outside the high-risk zone), row 55 (middle ZIP code policy
 *            $602 with fees; "about $600"), row 68 (federal purchase rule, PENDING
 *            verification: the one unverified sentence on the page).
 * Photos: data/photos.json (North Myrtle Beach beach, Alabama Theatre at Barefoot Landing).
 * Story:  stories.json "ny-client-tax-drop" (rounded, one household, not a promise),
 *         "hoa-rental-bans-filtered", "insurance-quote-before-offer". The example (Linda
 *         and Ray) is version 4's, with three numbers.
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
  description: "What life is like in Del Webb North Myrtle Beach: the clubhouse and pools, where it is on a map, the new homes, the 55+ rule, what the HOA fee includes and costs.",
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
    "Owners share a clubhouse with an outdoor pool, an indoor lap pool and a fitness room. The builder says the homeowners association (HOA) fee includes lawn care, so you do not mow your own grass.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "About 4 minutes by car" },
        { icon: "grocery", label: "Groceries", text: "Kroger, about 6 minutes away" },
        { icon: "hospital", label: "Hospital", text: "McLeod Health Seacoast, about 10 minutes away" },
        { icon: "pool", label: "Pools", text: "An outdoor pool and an indoor lap pool" },
        { icon: "lawn", label: "Lawn care", text: "Included in the HOA fee" },
        { icon: "calendar", label: "Clubs", text: "A full-time lifestyle director and activity groups" },
      ], { title: "Del Webb North Myrtle Beach at a glance", bg }) },

    { h2: "Where is Del Webb North Myrtle Beach?", html:
      h.p("Del Webb North Myrtle Beach is inside the city of North Myrtle Beach, about a mile from the ocean.") +
      mapBlock("del-webb-north-myrtle-beach", [
        { id: "beach_dwnmb", label: "Beach", kind: "beach" },
        { id: "groc_dwnmb", label: "Kroger", kind: "grocery" },
        { id: "hosp_mcleod", label: "Hospital", kind: "hospital" },
        { id: "airport", label: "Airport", kind: "airport" },
        { id: "barefoot", label: "Barefoot Landing", kind: "shopping" },
      ], "Map of Del Webb North Myrtle Beach, with drive times by car to the beach and other places nearby.") +
      h.p("Barefoot Landing, with shops and a show theater, is about 9 minutes away. Myrtle Beach International Airport is about 35 minutes away.") +
      h.p("Because the neighborhood is inside the city, you pay a city tax along with the county tax.") },

    { h2: "What are the homes like in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("The builder, Pulte, sells new houses here under its Del Webb name, with 2 to 4 bedrooms.") +
      h.p("Each new house has a two- or three-car garage. The smallest design is about 2,200 square feet.") +
      h.p("The builder lists storm fabric to cover the windows in a hurricane, and natural gas service. It says its warranty on the structure can pass to the next owner if you sell.") +
      h.p(`See the homes for sale now on the ${h.ext(PULTE, "Del Webb North Myrtle Beach website")}.`) +
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
      h.p("The builder says the city's community center is next door to the neighborhood.") },

    { h2: "What is the area around Del Webb North Myrtle Beach like?", html:
      h.p("North Myrtle Beach has a wide sand beach where people set up chairs and umbrellas. Barefoot Landing has shops and a show theater.") +
      photo("north-myrtle-beach-beach-umbrellas.webp", "Rows of beach chairs and umbrellas on the wide sand beach in North Myrtle Beach",
        "The beach in North Myrtle Beach, near Del Webb. It is a photo of the beach, not of the Del Webb neighborhood.") +
      photo("alabama-theatre-barefoot-landing.webp", "The lit road sign for the Alabama Theatre at Barefoot Landing in North Myrtle Beach at dusk",
        "The Alabama Theatre, a show theater at Barefoot Landing. This shows the nearby area; Del Webb is a short drive from here.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "about the hospitals near North Myrtle Beach and what each one offers")}.`) },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p(`Each household in Del Webb North Myrtle Beach must include at least one person who is 55 or older. This is in the city's ${h.ext(AGREEMENT, "agreement with the builder")}.`) +
      h.p("Other people in the household, such as a younger husband or wife, can live there with that person.") +
      h.p(`See ${h.a(HUB, "how an age-restricted neighborhood differs from an age-targeted one")}.`) },

    { h2: "How much does it cost to live in Del Webb North Myrtle Beach?", html:
      h.p("Homes that owners resold here in the last year usually sold for about $535,000.") +
      h.p("The builder's new homes started at about $586,000 in early October.") +
      h.p("The builder says the HOA fee includes lawn care and a TV package, and each yard comes with sprinklers. The builder also lists a fiber network for internet.") +
      h.p("On a $700,000 home you live in, property tax is a little over $3,000 a year, city tax included.") +
      h.p("A New York household we worked with sold a $1 million house that had more than $20,000 a year in property tax.") +
      h.p("They bought a $700,000 house on the Grand Strand and pay about $3,200 a year. That is one household's result, not a promise.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach and the rest of Horry County")}.`) },

    { h2: "Do you need flood insurance in Del Webb North Myrtle Beach?", html: (bg) =>
      h.p("Usually not, because every lot in Del Webb North Myrtle Beach is outside the high-risk flood zone.") +
      h.p(`A lender has to require flood insurance only for a home inside that zone, under the ${h.ext(LAW, "federal flood insurance law")}.`) +
      h.p("A flood policy on a house in North Myrtle Beach usually costs about $600 a year, if you choose to buy one.") +
      h.p(`Look up a home on ${h.ext(FEMA, "FEMA's flood map")}, and read ${h.a("/buyers/coastal-insurance/", "what home insurance costs near the coast")}.`) +
      h.cta("Want the insurance cost before you sign?", "Tell us the house and the lot. One of our agents helps you get a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "What does a move to Del Webb North Myrtle Beach look like?", html:
      h.p("<strong>Example:</strong> Linda is 67 and Ray is 61. They are moving from Columbus, Ohio, to live near the beach.") +
      h.p("They want a pool, room for the grandchildren to visit and no more lawn to mow. They choose a new Del Webb house with an extra bedroom.") +
      h.p("Before they sign with the builder, an agent at Chapter3 reads the HOA's rules on guests and pets with them.") +
      h.p("Their surprise is the drive to the airport, about 35 minutes. Now they swim laps indoors in winter, and the HOA mows their grass.") },

    { h2: "How does Del Webb North Myrtle Beach compare with other 55+ neighborhoods?", html:
      h.p("Del Webb North Myrtle Beach is the newest of these four, and its builder still sells new homes there.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach a 55+ community?", a: "Yes. Each household must include at least one person who is 55 or older, under the city's agreement with the builder." },
    { q: "Does the HOA fee in Del Webb North Myrtle Beach include lawn care?", a: "Yes. The builder says the HOA fee includes lawn care and a TV package, and that each yard is landscaped with sprinklers." },
    { q: "How far is Del Webb North Myrtle Beach from the beach?", a: "About 4 minutes by car, or about a mile, to the 14th Avenue South beach parking lot. It is the closest beach parking on the city's list." },
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
  bottomCta: { h2: "Ready to look at homes in Del Webb North Myrtle Beach?", p: "Call about the house and the lot you want. One of our agents will read the HOA documents with you.", label: "Call about Del Webb North Myrtle Beach", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach clubhouse, Del Webb North Myrtle Beach HOA, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
