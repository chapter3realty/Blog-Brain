/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what it is like to live in
 * Del Webb at Grande Dunes, a 55+ neighborhood of houses and villas in Myrtle Beach.
 *
 * Version 10, 2026-10-11: the owner's-eye review of version 9
 * (batches/2026-10-a/OWNER-EYE-del-webb-grande-dunes.md) and the coordinator's decisions.
 * Shape: the neighborhood's own clubhouse, pools, courts and lifestyle director first (the
 * clubhouse from above beside them), then the Ocean Club as the extra, with Grande Dunes
 * explained once; where it is (one map, one link, no tourist photos); the houses and villas
 * (overview aerial beside the layout sentence, a close aerial of a street of homes); who can
 * live there and the rules (guest cards, leases, golf carts); the money with flood in two
 * sentences; the comparison; then the guest-rule example as the last section before the FAQ,
 * under the buyer's question. No dates in captions; the photo year is in the credit line.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-grande-dunes-facts.md, verified rows only.
 *   Place:   rows 14, 17, 69, 84 to 88; rush hour: stories.json "traffic-timing".
 *   Own amenities: row 42's note (the posted 2019 rules show a fitness center, indoor and
 *            outdoor pools, tennis, pickleball and bocce courts, a fire pit, an arts and crafts
 *            room, a day dock and a Lifestyle Director), rows 43 and 54 (clubhouse staffed every
 *            day; mailboxes there), 45 (day dock, no ramp). PLAIN-9: stated plainly.
 *   Grande Dunes: rows 18 and 91 (a master association; Del Webb is one of its neighborhoods),
 *            101 and 102 (the golf courses). Ocean Club: rows 91 to 93 and 78. Never "free".
 *   Homes:   row 98 (most about 1,500 to 2,900 sq ft; mostly 2 or 3 bedrooms; most 2026 listings
 *            one level), row 99 ("every home here is a resale now", the coordinator's wording),
 *            rows 26, 27 and 80.
 *   Rules:   rows 1 to 3 (age; others 19 or older; under-19 guests 90 nights in any 12 months),
 *            46 (two guest cards), 50 to 52 (12-month leases, once a year; tenant cards need the
 *            55+ rule), 53 (golf carts on streets, licensed driver), 48 (cats and dogs).
 *   Money:   row 80 (houses $665,000, villas $432,500), rows 95 and 96 ($401 and $445: "about
 *            $400" and "about $445", stated plainly by the coordinator's decision; the sources
 *            line names recent MLS listings; never that the fee includes the Ocean Club), rows
 *            32, 33 and 76 (what the HOA bill carries), 37 ("at least $3,000"). Tax: still "more
 *            than $2,000 a year": rows 68 to 71 give the levies and ratios but no 2026 city
 *            credit, so no verified round figure for a house or a villa (open).
 *   Flood:   rows 60, 74, 90.
 * Story:  an Example (Bill and Nancy): the agent knows the guest rule counts any 12 months in a
 *         row, lays the summer and Christmas on a calendar with them before the offer (reading the
 *         HOA documents with buyers, stories.json "hoa-rental-bans-filtered").
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

const ph = photoSet();
const CLUB = ph.aerial("del-webb-grande-dunes-clubhouse-from-above", "The clubhouse, its outdoor pool and the courts, from above.", { closeUp: true });
const OVER = ph.aerial("del-webb-grande-dunes-from-above", "Del Webb at Grande Dunes from above, beside the Intracoastal Waterway. The orange line is the edge of the neighborhood.");
const STREET = ph.aerial("del-webb-grande-dunes-homes-from-above", "A street of homes in Del Webb at Grande Dunes, from above.", { closeUp: true });
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
  /* The overview aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb at Grande Dunes, Myrtle Beach | Chapter3",
  description: "What life is like in Del Webb at Grande Dunes, Myrtle Beach: the clubhouse, pools and courts, a beach club, the houses and villas, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb at Grande Dunes: pools, pickleball, a beach club and a dock on the waterway",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "A 55+ neighborhood with a beach club.",
  sub: "Del Webb at Grande Dunes is a 55+ neighborhood of houses and villas beside the Intracoastal Waterway in Myrtle Beach.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 4 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 6 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 4 minutes" },
    { icon: "pool", label: "Beach club", text: "Included" },
  ]),
  heroCta: { label: "Talk to an agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb at Grande Dunes has houses and villas beside the Intracoastal Waterway, a channel for boats along the coast. At least one person living in each home must be 55 or older.",
    "Owners share a clubhouse with indoor and outdoor pools, a fitness center and courts for tennis, pickleball and bocce. Your homeowners association (HOA) dues include a beach club on the ocean, with a pool and private beach access.",
  ],
  sections: [
    { h2: "What is there to do in Del Webb at Grande Dunes?", html:
      ph.css() +
      h.p("The neighborhood's clubhouse has an indoor pool, an outdoor pool, a fitness center and an arts and crafts room. Staff are there every day, and your mailbox is there too.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor pool", text: "Swim in the cooler months" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "Swim outside in the warm months" },
        { illustration: "pickleball", label: "Tennis and pickleball", text: "Courts beside the clubhouse, with bocce too" },
        { illustration: "dock", label: "Day dock", text: "On the waterway, with no boat ramp" },
      ], { cols: 4 }) +
      h.p("Outside there is a fire pit, and a lifestyle director plans activities for the neighborhood.") +
      CLUB },

    { h2: "What is the Grande Dunes Ocean Club?", html:
      h.p("Grande Dunes is a large area of neighborhoods and golf courses in Myrtle Beach. Del Webb is one neighborhood inside it.") +
      h.p(`The ${h.ext(OCEANCLUB, "Grande Dunes Ocean Club")} is the beach club for all of Grande Dunes. Its clubs include mahjong, knitting and a dominoes game called Mexican Train.`) +
      atAGlance([
        { icon: "beach", label: "Private beach access", text: "For Ocean Club members" },
        { icon: "pool", label: "A big pool", text: "A large outdoor pool and a hot tub" },
        { icon: "calendar", label: "Classes and events", text: "Sign up on the club's members' website. Some events cost extra." },
      ], { min: "13rem" }) },

    { h2: "Where is the neighborhood?", html:
      h.p("Del Webb at Grande Dunes is inside the city of Myrtle Beach, on the ocean side of the Intracoastal Waterway. The beach is about 4 minutes away by car without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      M.where +
      h.p("Grand Strand Medical Center is about 6 minutes away, and a Food Lion grocery store is about 4.") +
      h.p("The Boardwalk, with its big Ferris wheel, is about 15 minutes away, and the airport is about 20.") },

    { h2: "What are the houses and villas like?", html: (bg) =>
      h.p("The homes are on curving streets around ponds. Every home here is a resale now, and the builder has finished.") +
      OVER +
      h.p("Most homes are on one level, with 2 or 3 bedrooms and about 1,500 to 2,900 square feet.") +
      STREET +
      h.p("The villas usually sell for less than the houses. In one villa section, the HOA takes care of the roofs, gutters and outside paint, and those owners pay an extra fee for it.") +
      h.cta("See a house or villa with an agent.", "Tell us the one you have in mind. One of our agents finds out what the HOA keeps up on that home.", "Talk to an agent", "/contact/", bg) },

    { h2: "Who can live here, and what are the rules?", html: (bg) =>
      h.p(`Everyone else who lives in the home must be 19 or older, under ${h.ext(DECL, "the neighborhood's rules")}. If the resident who is 55 or older dies or moves out, the others can stay.`) +
      atAGlance([
        { icon: "family", label: "Guests", text: "Each home gets two guest cards for the pools and the clubhouse." },
        { icon: "pets", label: "Pets", text: "Cats and dogs are allowed." },
        { icon: "key", label: "Renting it out", text: "Yes, with a lease of at least 12 months, once a year. A tenant gets amenity cards only if the home meets the 55+ rule." },
        { icon: "golf", label: "Golf carts", text: "On the streets with a licensed driver, never on the sidewalks." },
      ], { bg, min: "13rem" }) },

    { h2: "What does it cost to live here?", html: (bg) =>
      h.p("A house usually sells for about $665,000, and a villa for about $430,000. The HOA fee is about $400 a month for a house and about $445 for a villa.") +
      h.p("Your HOA bill includes basic lawn care and the fee for Grande Dunes' own association.") +
      h.table(["Other costs on a home you live in", "About"], [
        ["One-time fee to the HOA when you buy", "At least $3,000"],
        ["Property tax, city tax included", "More than $2,000 a year"],
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) +
      h.p(`You probably will not need flood insurance, because the homes are outside the high-risk flood zone. If you want it, a policy here usually costs about $550 a year. Read ${h.a("/buyers/coastal-insurance/", "what flood and wind insurance cost near the beach")}.`) +
      h.cta("Get an insurance quote on the home you pick.", "Tell us the exact house or villa. One of our agents helps you get a quote on it before you write the offer.", "Get a quote", "/contact/", bg) },

    { h2: "How does Del Webb at Grande Dunes compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb at Grande Dunes is the only one of these four with a beach club in the dues, and it is about 4 minutes from the beach.") +
      compareTable(SELF) },

    { h2: "How long can grandchildren stay in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Grandchildren and other guests under 19 can stay up to 90 nights in any 12 months in a row.") +
      story([
        "<strong>Example:</strong> Bill and Nancy are moving from Columbus, and their grandsons want to spend every summer with them near the beach. They like a villa in Del Webb at Grande Dunes and plan to make an offer.",
        "Their Chapter3 agent asks how long the boys will stay, and Nancy says all summer and the week of Christmas. The agent knows that the guest nights are counted over any 12 months in a row, not a calendar year.",
        "Before the offer, the agent lays the summer and the Christmas week on a calendar with them and counts the nights. A whole summer and the Christmas week come to more nights than guests under 19 may stay.",
        "Nancy moves the boys' arrival to the first week of July, and the agent counts again. Bill and Nancy make their offer with the boys' dates written on the calendar, inside the limit.",
      ], "If grandchildren will stay with you, count their nights on a calendar before you offer.", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "read the guest rules with you")} before you make an offer.`) },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "How much is the HOA fee in Del Webb at Grande Dunes?", a: "The HOA fee is about $400 a month for a house and about $445 a month for a villa." },
    { q: "Is there golf at Grande Dunes?", a: "Yes, two 18-hole courses. The Grande Dunes Resort Club sells tee times online. The Grande Dunes Members Club is a private club for members and their guests, with its own membership apart from the Ocean Club." },
    { q: "Is there pickleball in Del Webb at Grande Dunes?", a: "Yes. The neighborhood has its own courts for pickleball, tennis and bocce, beside the clubhouse, for owners to use." },
    { q: "Do you need flood insurance in Del Webb at Grande Dunes?", a: "Probably not. The homes are outside the high-risk flood zone, though a lender may still ask for a policy." },
    { q: "How old must you be to live in Del Webb at Grande Dunes?", a: "At least one person living in each home must be 55 or older. Everyone else who lives there must be 19 or older." },
  ],
  sources: [
    { name: "The neighborhood's recorded rules", href: DECL },
    { name: "HOA rules, posted copy revised January 2019", href: RULES },
    { name: "Grande Dunes Master Association", href: MASTER },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "This is not legal advice. The HOA fees and home sizes are from recent MLS listings. OpenStreetMap gave the drive times, without traffic. The flood cost is the typical FEMA policy price in ZIP code 29572.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the HOA's age, guest and pet rules with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call an agent", href: TEL },
  keywords: "Del Webb at Grande Dunes, living in Del Webb Grande Dunes, Del Webb Grande Dunes amenities, Del Webb Grande Dunes pickleball, Del Webb Grande Dunes HOA fee, Del Webb Grande Dunes Ocean Club, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
