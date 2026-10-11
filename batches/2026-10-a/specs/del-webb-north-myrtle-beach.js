/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what it is like to live
 * in Del Webb North Myrtle Beach, a newer 55+ neighborhood in North Myrtle Beach.
 *
 * Version 11, 2026-10-11: the v10 owner's-eye review (OWNER-EYE-v10-del-webb-north-myrtle-beach.md):
 * short question headings (the contents list matches them, two columns on a phone), price after
 * the town, row 75 in its own wording with no promise and no date, only the builder may offer
 * the short stays, the wind paragraph cut (no row says what it means for a buyer), lawn care
 * out of the short answer, the community center next door (row 35, 0.26 mile), Barefoot Landing
 * off the map (no row says what it is), a tighter street aerial, a plain photo credit.
 * Version 10, 2026-10-11: the owner's-eye review of version 9
 * (batches/2026-10-a/OWNER-EYE-del-webb-north-myrtle-beach.md) and the coordinator's decisions.
 * Shape: the homes first (one story, bedrooms, a close aerial of a street of finished homes on
 * the west side, no bare ground), the price and fee, what there is to do, where it is (one map,
 * one link), the town with its beach photos, flood in its own short section, the comparison,
 * then the rental example as the last section before the FAQ, under the buyer's question. The
 * 2023 overview (half graded land) is not used; the street aerial is the share image. "Who can
 * live here?" is cut: the 55 rule is in the short answer and the younger-spouse answer in the
 * FAQ. No dates in captions; the photo year is in the credit line.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md, verified rows only.
 *   Place:   rows 13, 39 and 40 (west of US 17: outside the wind pool's coastal area), 41, 49
 *            and 50, 53, 62 to 65; rush hour: stories.json "traffic-timing".
 *   Homes:   row 73 (built since 2022; most about 1,400 to 2,700 sq ft; 2 or 3 bedrooms; most
 *            2026 listings one level), row 25 (garages), rows 30 and 36 (the builder's list).
 *   To do:   rows 32 and 69 (indoor lap pool, an outdoor pool with a beach-style entry, fitness
 *            center), row 33 as reworded by the verifier ("Pulte lists sports courts including
 *            pickleball and bocce, walking trails, a full-time lifestyle director, and clubs and
 *            activity groups", as separate items).
 *   Money:   rows 58 and 59 (the "what buyers paid in the end" line is cut, row 59), row 70
 *            ($315: "about $315", stated plainly by the coordinator's decision; the sources line
 *            names recent MLS listings), rows 27, 28 and 72 (lawn care, internet and a TV
 *            package: the items Pulte and the listings name), tax at the 2026 levies (rows 50 to
 *            52): "a little under $3,000".
 *   Flood:   rows 37, 55, 68.
 *   Rental:  row 75 (the 2020 plan: renters stay at least 30 days; the builder's 2 to 10 day
 *            visits for people thinking of buying). It is the plan, not the recorded rule, and
 *            the page says so; the recorded rules (rows 5 and 7) are not online.
 * Story:  an Example (Frank and Joyce): the agent reads the city's 2020 plan, finds the 30-day
 *         minimum before they sign, and gets the recorded HOA rules to check it (stories.json
 *         "hoa-rental-bans-filtered": the agents read the HOA documents for a rental plan).
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
const STREET = ph.aerial("del-webb-north-myrtle-beach-homes-from-above", "A street of finished homes in Del Webb North Myrtle Beach, from above.");
const M = maps("del-webb-north-myrtle-beach", [
  { id: "beach_dwnmb", name: "the beach at 14th Avenue South", short: "Beach", kind: "beach" },
  { id: "hosp_mcleod", name: "McLeod Health Seacoast", short: "Hospital", kind: "hospital" },
  { id: "groc_dwnmb", name: "Kroger", short: "Kroger", kind: "grocery", map: "region" },
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
  /* The street aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb North Myrtle Beach (55+) | Chapter3",
  description: "What life is like in Del Webb North Myrtle Beach: new one-story homes, lawn care, the clubhouse and pools, renting, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb North Myrtle Beach: new homes, lawn care and a clubhouse near the beach",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb North Myrtle Beach?",
  h1em: "New 55+ homes a mile from the beach.",
  sub: "Del Webb North Myrtle Beach is a newer 55+ neighborhood of mostly one-story houses on short streets around ponds.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 4 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 6 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 10 minutes" },
    { icon: "lawn", label: "Lawn care", text: "Mowed for you" },
  ]),
  heroCta: { label: "Talk to an agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb North Myrtle Beach has about 400 homes built so far, and its builder is still selling new ones. At least one person in each household must be 55 or older.",
    "Owners share a clubhouse with an indoor lap pool, an outdoor pool and a fitness center, plus courts for pickleball and bocce and walking trails.",
  ],
  sections: [
    { h2: "What are the homes like?", html:
      ph.css() +
      h.p("Most homes in Del Webb North Myrtle Beach are one story, so there are no stairs. They have 2 or 3 bedrooms and a garage, and most are about 1,400 to 2,700 square feet.") +
      STREET +
      h.p("New homes come with:") +
      h.ul([
        "Fabric hurricane covers for the windows",
        "A warranty on the structure for 10 years, which a later owner keeps",
        "Sprinklers in every yard",
      ]) },

    { h2: "What is there to do?", html:
      h.p("Owners have two pools, a fitness center, courts for pickleball and bocce, and walking trails.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor lap pool", text: "Swim laps all year" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "With a beach-style walk-in entry" },
        { illustration: "pickleball", label: "Pickleball and bocce", text: "Sports courts for owners" },
        { illustration: "walking-path", label: "Walking trails", text: "Paths around the ponds" },
      ], { cols: 4 }) +
      h.p("There is a full-time lifestyle director on staff, and there are clubs and activity groups. The city's J. Bryan Floyd Community Center is just down the road, about a quarter mile away.") },

    { h2: "Where is it?", html:
      h.p("Del Webb North Myrtle Beach is inside the city of North Myrtle Beach, about a mile from the ocean. To reach the beach, you drive across US 17, the main highway.") +
      h.p("The beach is about 4 minutes away by car without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      M.where +
      h.p("Grand Strand Health's North Strand ER, an emergency room open day and night, is about a mile and a half away. McLeod Health Seacoast, the nearest hospital, is about 10 minutes away.") +
      h.p("The airport is about 35 minutes away by car.") },

    { h2: "What is the town like?", html:
      h.p("North Myrtle Beach has a wide sand beach lined with beach houses, and a fishing pier at Cherry Grove.") +
      ph.gallery([
        { name: "north-myrtle-beach-beach-umbrellas", alt: "Rows of beach chairs and blue, green and yellow umbrellas on the wide sand beach in North Myrtle Beach", caption: "Beach chairs and umbrellas in North Myrtle Beach" },
        { name: "cherry-grove-pier", alt: "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above", caption: "Cherry Grove Pier and the beach, from high above" },
      ], { label: "Photos of North Myrtle Beach" }) },

    { h2: "What does a home cost?", html:
      h.p("In the last year, new homes from the builder usually sold for about $635,000. Homes resold by their owners sold for about $535,000.") +
      h.p("The HOA fee is about $315 a month, and it includes lawn care, internet and a TV package.") +
      h.p(`If you live in a new home at that price, the property tax is a little under $3,000 a year, city tax included. See ${h.a("/buyers/property-taxes/", "how a home you live in is taxed in North Myrtle Beach")}.`) },

    { h2: "Is flood insurance needed?", html: (bg) =>
      h.p(`You probably will not need flood insurance here, because every lot is outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. If you want a policy, it usually costs about $600 a year.`) +
      h.cta("Get an insurance quote before you sign.", `Pick the home you like. One of our agents helps you get a homeowners and flood ${h.a("/buyers/coastal-insurance/", "insurance")} quote on it before you sign.`, "Get a quote", "/contact/", bg) },

    { h2: "How does it compare?", html: () =>
      h.p("Del Webb North Myrtle Beach is the newest of these four 55+ neighborhoods.") +
      compareTable(SELF) },

    { h2: "Can you rent it out?", html: (bg) =>
      h.p(`Under ${h.ext(AGREEMENT, "the city's plan for the neighborhood")}, renters must stay at least 30 days. Where the HOA's recorded rules differ, the recorded rules apply.`) +
      h.p("Only the builder may let people who are thinking of buying stay for 2 to 10 nights.") +
      story([
        "<strong>Example:</strong> Frank and Joyce plan to spend summers near their son in Michigan and rent their new house to vacation renters by the week while they are gone. They pick a design in Del Webb North Myrtle Beach and are ready to sign the builder's contract that week.",
        "Their Chapter3 agent reads the city's plan for the neighborhood and finds that renters there must stay at least 30 days. A week-by-week rental would not fit.",
        "Frank and Joyce change their plan to one renter for the whole summer. Before they sign, the agent gets the HOA's recorded rules and reads the rental rule with them.",
      ], "", bg) +
      h.cta("Tell us how you plan to use the home.", "An agent gets the HOA documents and reads them with you before you sign the builder's contract.", "Talk to an agent", "/contact/", bg) },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "How much is the HOA fee in Del Webb North Myrtle Beach?", a: "The HOA fee is about $315 a month. It includes lawn care, internet and a TV package." },
    { q: "Is there pickleball in Del Webb North Myrtle Beach?", a: "Yes. The neighborhood has sports courts for pickleball and bocce, and walking trails, for owners to use." },
    { q: "Is Del Webb North Myrtle Beach finished?", a: "Not yet. The builder is still building and selling new houses in the neighborhood today." },
    { q: "Can someone under 55 live in Del Webb North Myrtle Beach?", a: "Yes, a younger husband or wife can live in the home, as long as one person in the household is 55 or older." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes. It is inside North Myrtle Beach, so owners pay a city tax on top of the county and school tax." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte builds them and sells them under its Del Webb name. Most of its homes here are one story, with a garage." },
  ],
  sources: [
    { name: "Del Webb North Myrtle Beach website", href: PULTE },
    { name: "City agreement and plan for the neighborhood", href: AGREEMENT },
    { name: "Horry County tax levies", href: LEVY },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: "This is not legal or tax advice, and builder prices change. The HOA fee and home sizes are from recent MLS listings. Drive times come from OpenStreetMap and leave out traffic. The flood cost is the middle FEMA price for policies in ZIP code 29582.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Want help buying a home in Del Webb North Myrtle Beach?", p: "Call a specialized agent about the home you want. One of our agents gets the HOA documents and reads them with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call an agent", href: TEL },
  keywords: "Del Webb North Myrtle Beach, living in Del Webb North Myrtle Beach, Del Webb North Myrtle Beach HOA fee, Del Webb North Myrtle Beach pickleball, Del Webb North Myrtle Beach rentals, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
