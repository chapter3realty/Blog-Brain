/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what it is like to live in
 * Del Webb at Grande Dunes, a 55+ neighborhood of houses and villas in Myrtle Beach.
 *
 * Version 8, 2026-10-11, after the owner's notes on version 7 (no photo at the top; the story
 * near the end, with tension and Chapter3's skill; photos of the topic) and the grader's list
 * (batches/2026-10-a/GRADE-pages.md).
 * Shape: the beach club and its clubs first (what this place has that the other three do
 * not), how a newcomer meets people, where it is with the Myrtle Beach photos beside the
 * Myrtle Beach sentence (RULES P10), the houses and villas, who can live and visit, the
 * money with the flood answer, then the example: how an agent handles the guest rule. The
 * comparison table and the FAQ close it. Headings use the full name in the H1, the first H2
 * and the comparison only (grader). The Ocean Club membership is said in the short answer
 * and once in the FAQ; the cost section lists it as part of the bill (grader: it was said
 * three times).
 * Names: "the Ocean Club" is the beach club; "the clubhouse" is the neighborhood's own
 * building; "the association for all of Grande Dunes" is the master association.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-grande-dunes-facts.md, verified rows only.
 *   Place:   rows 14, 17, 69, 84 to 88 (drives: beach 4, Food Lion 4, Grand Strand Medical
 *            Center 6, airport 20, Boardwalk 15). Rush hour: stories.json "traffic-timing".
 *   Club:    rows 91 to 93 (household membership; pool, hot tub, private beach access,
 *            classes, clubs, dining; members' site; some events paid; golf at the private
 *            Members Club is a separate membership), 78, 32, 33 and 76. Never "free" (row 91).
 *            The grader notes a public Resort Course; no verified row covers it, so the page
 *            names only the Members Club and does not say Grande Dunes has one course.
 *   Life:    rows 43, 44, 45, 54, 48.
 *   Homes:   rows 26 and 27 (one villa section: roofs, gutters, paint; extra fee), 80.
 *   Rules:   rows 1 to 3 (age; others 19 or older; under-19 stays 90 nights in 12 months).
 *   Money:   row 80 without the unclear sale 4999/1319: houses middle $665,000; villas
 *            $432,500. The comparison table now shows the same two figures (grader). Row 37
 *            (one-time fee "at least $3,000"), row 38. Tax "more than $2,000 a year".
 *   Flood:   rows 60, 74 ("about $550"), 90.
 * Version 9 (2026-10-11): aerials (USDA NAIP 2023): the overview at the top of "where" (the share
 *         image now, its crops) and the clubhouse close-up beside the clubhouse sentence.
 *         Must-answer rows: 95 and 96 (listings entered in 2026 mostly show $401 houses, $445
 *         villas: "about $400" and "$445"; seller-entered; never that it includes the Ocean
 *         Club), 97 ("some listings say"), 98 (built 2018 to 2026, most about 1,500 to 2,900 sq
 *         ft, 2 to 4 bedrooms), 99 (Pulte no longer sells new homes here), 101 and 102 (the
 *         Resort Club sells tee times online; the Members Club is private, members and their
 *         guests). The short answer drops the household-membership sentence to make room for the
 *         fee (the FAQ still says each owner pays for the club through the HOA bill). No gates.
 * Photos: data/photos.json, beside the Myrtle Beach sentence: the beach from a high floor, a
 *         fishing pier, the SkyWheel. The beach photo is the share image (its crops). An
 *         aerial of the neighborhood, when photos.json has one, goes in the "where" section.
 * Maps:   amenity pin "Clubhouse"; the airport pin is "Myrtle Beach airport".
 * Story:  an Example (Bill and Nancy): the guest rule (row 2), found by an agent reading the
 *         rules with the buyer (stories.json "hoa-rental-bans-filtered": the agents read the
 *         HOA documents). Present tense; three numbers, all from row 2; no prices.
 */
const { h, maps, story, glance, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/del-webb-grande-dunes/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const DECL = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083079";
const RULES = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083089";
const MASTER = "https://grandedunescommunities.sites.townsq.io/2";
const OCEANCLUB = "https://www.grandedunesoceanclub.com/homeownership";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=6201%20Marina%20Parkway%2C%20Myrtle%20Beach%2C%20SC%2029572";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

const ph = photoSet().share("myrtle-beach-beach-from-above");
const CLUB = ph.aerial("del-webb-grande-dunes-clubhouse-from-above", "The Del Webb at Grande Dunes clubhouse from above in 2023, with its outdoor pool and courts.", { closeUp: true });
const AERIAL = ph.aerial("del-webb-grande-dunes-from-above", "Del Webb at Grande Dunes from above in 2023, with its edge drawn in orange beside the Intracoastal Waterway.");
const M = maps("del-webb-grande-dunes", [
  { id: "beach_dwgd", name: "the beach at Highland Way", short: "Beach", kind: "beach" },
  { id: "hosp_gsmc", name: "Grand Strand Medical Center", short: "Hospital", kind: "hospital" },
  { id: "groc_dwgd", name: "Food Lion", short: "Food Lion", kind: "grocery" },
  { id: "broadway", name: "Broadway at the Beach", short: "Broadway at the Beach", kind: "shopping" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Myrtle Beach airport", kind: "airport" },
], {
  label: "Del Webb",
  amenity: "Clubhouse",
  regionCaption: "Map of where Del Webb at Grande Dunes is in Myrtle Beach, with drive times by car.",
  closeCaption: "Map of Del Webb at Grande Dunes up close, with its clubhouse, beside the Intracoastal Waterway.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  /* The share photo (or the aerial) in 1x1, 4x3 and 16x9 for Article.image (rules/image-metadata.md). */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb at Grande Dunes, Myrtle Beach | Chapter3",
  description: "What life is like in Del Webb at Grande Dunes, Myrtle Beach: the Ocean Club and its clubs, the houses and villas, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb at Grande Dunes: a beach club, clubs to join and a dock on the waterway",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "A 55+ neighborhood with a beach club.",
  sub: "Del Webb at Grande Dunes is a 55+ neighborhood of houses and villas, about 4 minutes by car from the beach without traffic.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 4 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 6 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 4 minutes" },
    { icon: "pool", label: "Beach club", text: "Paid in your dues" },
  ]),
  heroCta: { label: "Let us make it simple", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb at Grande Dunes has houses and villas beside the Intracoastal Waterway, a channel for boats along the coast. At least one person living in each home must be 55 or older.",
    "Owners share a clubhouse, pools and a dock on the waterway. Each owner also pays, through the homeowners association (HOA) bill, for the Grande Dunes Ocean Club, a beach club. Listings show an HOA fee of about $400 a month for houses and $445 for villas.",
  ],
  sections: [
    { h2: "What does the Ocean Club offer owners in Del Webb at Grande Dunes?", html:
      ph.css() +
      h.p(`The ${h.ext(OCEANCLUB, "Grande Dunes Ocean Club")} is a beach club with a large outdoor pool, a hot tub and private beach access. It serves all of Grande Dunes and is not the neighborhood's clubhouse.`) +
      ph.cards([
        { illustration: "beach", label: "Private beach access", text: "For Ocean Club members" },
        { illustration: "outdoor-pool", label: "A big pool", text: "A large outdoor pool and a hot tub" },
        { illustration: "card-table", label: "Clubs", text: "Mahjong, knitting and a dominoes game called Mexican Train" },
        { illustration: "clubhouse", label: "Classes and dinners", text: "Fitness classes, happy hours, wine tastings and holiday events" },
      ], { cols: 4 }) +
      h.p("Some Ocean Club events cost extra.") },

    { h2: "How do new owners meet people here?", html:
      h.p("You sign up for Ocean Club classes, club meetings and social events on the club's members' website.") +
      h.p("The neighborhood's own clubhouse is open every day, with staff there. Your mailbox is at the clubhouse too, so you stop in there for your mail.") +
      CLUB },

    { h2: "Where is the neighborhood, and what is near it?", html:
      h.p("Del Webb at Grande Dunes is inside the city of Myrtle Beach, on the ocean side of the Intracoastal Waterway.") +
      h.p("The beach is about 4 minutes away by car without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      AERIAL +
      M.pair +
      h.p("Grand Strand Medical Center is about 6 minutes away, and a Food Lion grocery store is about 4.") +
      h.p("Myrtle Beach International Airport is about 20 minutes away.") +
      h.p("Myrtle Beach has a long sand beach, fishing piers and a Boardwalk with a big Ferris wheel, about 15 minutes away.") +
      ph.gallery([
        { name: "myrtle-beach-beach-from-above", alt: "The wide sand beach, the dunes and the ocean in Myrtle Beach, seen from a high floor", caption: "The beach in Myrtle Beach, from a high floor" },
        { name: "myrtle-beach-pier-from-above", alt: "A long fishing pier over the ocean in Myrtle Beach, with the beach and palm trees below", caption: "A fishing pier in Myrtle Beach" },
        { name: "myrtle-beach-skywheel-boardwalk", alt: "The SkyWheel, the big Ferris wheel on the Myrtle Beach Boardwalk, seen from the beach", caption: "The SkyWheel on the Boardwalk" },
      ], { label: "Photos of Myrtle Beach" }) },

    { h2: "What are the houses and villas like?", html: (bg) =>
      h.p("The neighborhood has single-family houses and a section of villas, and the villas usually sell for less. Pulte, the builder, no longer sells new homes here.") +
      h.p("Listings show homes of about 1,500 to 2,900 square feet, most with 2 or 3 bedrooms. Most recent listings are on one level.") +
      h.p("In one villa section, the HOA takes care of the roofs, gutters and outside paint. Those villa owners pay an extra fee for that work.") +
      h.cta("See a house or villa in Grande Dunes with an agent.", "Tell us the one you have in mind. One of our agents reads the neighborhood's rules with you and finds out what the HOA keeps up on that home.", "Speak to an expert", "/contact/", bg) },

    { h2: "Who can live here, and who can visit?", html: (bg) =>
      h.p(`At least one person in every home that someone lives in must be 55 or older, under ${h.ext(DECL, "the neighborhood's rules")}.`) +
      h.p("Everyone else who lives there must be 19 or older. Grandchildren and other guests under 19 can stay up to 90 nights in any 12 months.") +
      h.p("If the resident who is 55 or older dies or moves out, the others in the home can stay.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Cats and dogs are allowed." },
        { icon: "dock", label: "Boat dock", text: "A day dock on the waterway, with no boat ramp." },
      ], { bg }) },

    { h2: "What does it cost to live here?", html: (bg) =>
      h.p("A house in Del Webb at Grande Dunes usually sells for about $665,000, and a villa for about $430,000.") +
      h.p("Listings entered in 2026 mostly show an HOA fee of about $400 a month for houses and $445 for villas. Some listings say the fee includes the common areas, grounds care, the pools and the other shared amenities.") +
      h.p("Under the neighborhood's rules, the HOA bill includes charges for the Ocean Club, the association for all of Grande Dunes and basic lawn care.") +
      h.table(["Other costs on a house you live in", "About"], [
        ["One-time fee to the HOA when you buy", "At least $3,000"],
        ["Property tax", "More than $2,000 a year"],
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) +
      h.p(`The homes are outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. Because of that, ${h.ext(LAW, "federal law")} does not make a lender require flood insurance. Only some shared land by the waterway is inside the zone. A flood policy on a house here usually costs about $550 a year.`) +
      h.cta("Get an insurance quote on the house or villa you pick.", "Tell us the exact house or villa. One of our agents helps you get a quote on it before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood and wind insurance cost near the beach")}.`) },

    { h2: "How does a Chapter3 agent check the guest rule before you buy?", html: (bg) =>
      h.p("A Chapter3 agent reads the neighborhood's guest and age rules with you before you make an offer.") +
      story([
        "<strong>Example:</strong> Bill and Nancy are moving from Columbus, and their grandsons plan to spend every summer with them near the beach. They like a villa in Del Webb at Grande Dunes and want to make an offer.",
        "Before they do, their Chapter3 agent reads the neighborhood's rules with them and finds that a guest under 19 can stay 90 nights in any 12 months. A whole summer and a week at Christmas would add up to more nights than that.",
        "Nancy plans a shorter summer stay on a calendar, and the Christmas week still fits under the limit. Bill and Nancy now make their offer knowing how many nights the boys can stay.",
      ], "If grandchildren will stay with you, count their nights against the guest rule before you offer.", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "read the guest and age rules with you")} before you make an offer.`) },

    { h2: "How does Del Webb at Grande Dunes compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits. Owners there pay a city tax too.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Do owners in Del Webb at Grande Dunes get a beach club?", a: "Yes, and they pay for it. Each Del Webb owner pays for the Grande Dunes Ocean Club, a beach club, through the HOA bill." },
    { q: "Is there golf at Grande Dunes?", a: "Yes, two 18-hole courses. The Grande Dunes Resort Club sells tee times online. The Grande Dunes Members Club is a private club for members and their guests, with its own membership apart from the Ocean Club." },
    { q: "How much is the HOA fee in Del Webb at Grande Dunes?", a: "Recent listings mostly show about $400 a month for houses and $445 for villas. These are the figures sellers entered, not a bill from the HOA." },
    { q: "Is there a boat dock at Del Webb at Grande Dunes?", a: "Yes, a day dock on the Intracoastal Waterway for owners and their guests, open from dawn to dusk. Boats may not stay overnight, and there is no boat ramp." },
    { q: "Do you need flood insurance in Del Webb at Grande Dunes?", a: "Not by law, because the homes are outside the high-risk flood zone. Your lender may still ask for a policy." },
    { q: "How old must you be to live in Del Webb at Grande Dunes?", a: "At least one person in each home that someone lives in must be 55 or older. Everyone else who lives there must be 19 or older." },
  ],
  sources: [
    { name: "The neighborhood's recorded rules", href: DECL },
    { name: "HOA rules and policies", href: RULES },
    { name: "Association for all of Grande Dunes", href: MASTER },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "This is not legal advice. OpenStreetMap gave the drive times, without traffic. The flood cost is the typical FEMA policy price in ZIP code 29572.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the HOA's age and pet rules with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, living in Del Webb Grande Dunes, Del Webb Grande Dunes Ocean Club, Del Webb Grande Dunes HOA, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
