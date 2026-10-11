/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what it is like to live in
 * Del Webb at Grande Dunes, a 55+ neighborhood of houses and villas in Myrtle Beach.
 *
 * Final build, 2026-10-10, with the review 4 and buyer read v6 fixes (CRAFT.md,
 * voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9, STANDARD T2 as changed in 52d07ac).
 * Shape: what this place has that the other three do not is the beach club and its clubs,
 * so the page leads with the Ocean Club and how a newcomer meets people (the worry of
 * knowing no one), then the place, the homes, the area, and who can live and visit. The
 * money section opens with the two fees only Grande Dunes has (review 4 All 3), and holds
 * the flood answer in three sentences: the homes are outside the zone, only some shared
 * land by the waterway is inside it.
 * Names: "the Ocean Club" is the beach club; "the clubhouse" is the neighborhood's own
 * building, on the map pin too; "the association for all of Grande Dunes" is the master
 * association (review 4 GD 4, buyer read v6).
 *
 * Facts:  batches/2026-10-a/facts/del-webb-grande-dunes-facts.md, verified rows only.
 *   Place:   rows 14 (inside Myrtle Beach), 17 (ocean side of the waterway; the map shows
 *            it), 69 (a city levy), 84 to 88 (drives: beach 4, Food Lion 4, Grand Strand
 *            Medical Center 6, Myrtle Beach International Airport 20, Boardwalk 15).
 *   Club:    rows 91 to 93 (the association for all of Grande Dunes: a household membership
 *            to the Ocean Club for each Grande Dunes homeowner, Del Webb listed; pool, hot
 *            tub, private beach access, classes, clubs, dining, events; sign-up on the
 *            members' site; some events paid; golf a separate private membership), 78 (the
 *            club's own list: mahjong, knitting, Mexican Train; happy hours, wine tastings,
 *            dinners; it serves all of Grande Dunes, not the Del Webb clubhouse), 32, 33 and
 *            76 (every owner pays the club through the HOA bill). Never "free" (row 91).
 *   Life:    rows 43 (clubhouse open every day, staffed), 44 (pools), 45 (day dock, no
 *            ramp), 54 (mailboxes at the clubhouse), 48 (cats and dogs).
 *            PLAIN-9 (review 4 agrees): kept with no date, facts that rarely change and cost
 *            a reader nothing if they did. Cut: golf carts (GD 3), the pet limit, the fence
 *            design, the lease terms (a reader could act on them).
 *   Homes:   rows 26 and 27 (one villa section: HOA keeps up roofs, gutters, paint; extra
 *            fee), 80 (villas sell for less). No verified row gives home sizes (GD 5, open).
 *   Rules:   rows 1 to 3 (age; others 19 or older; under-19 stays 90 nights in 12 months;
 *            others may stay on).
 *   Money:   row 80 without the unclear sale 4999/1319: houses, 29 sales, middle $665,000;
 *            villas $432,500 (review 4 GD 1). The comparison table keeps $630,000 for all
 *            homes (row 79 without that sale). Row 37 (one-time fee: the larger of a year's
 *            dues or 0.5 percent; "at least $3,000" on a house at $665,000; row 38 shows it
 *            is still collected). Tax: v4 result ($2,249 on $630,000 as a main home at 2025
 *            rates; 2026 county, school and city levies are the same, row 69, and the city
 *            credit is lower), so "more than $2,000 a year" (GD 10, open).
 *   Flood:   row 60 (homes outside the high-risk zone; some shared waterway land inside it),
 *            row 74 (middle ZIP code policy $540 with fees; "about $550"), row 90 (federal
 *            rule; a lender may still ask).
 * Photos: data/photos.json. Hero: the beach in Myrtle Beach from a high floor. Gallery: a
 *         fishing pier from above and the SkyWheel. The Market Common photo is dropped
 *         (GD 9: no drive time for it).
 * Maps:   amenity pin "Clubhouse"; the airport pin is "Myrtle Beach airport" (area-map.js).
 *         Hero: an icon row (mkpage heroMedia).
 * Story:  an Example (Margaret): knowing no one, with the "but" (GD 7), ending in Del Webb
 *         at Grande Dunes. No Chapter3 in it and no offer line: the worry is answered by
 *         the club calendar, which the reader asks for.
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
  /* The hero photo in 1x1, 4x3 and 16x9 for Article.image (rules/image-metadata.md). */
  pageImages: () => ph.pageImages(),
  title: "Living in Del Webb at Grande Dunes, Myrtle Beach | Chapter3",
  description: "What life is like in Del Webb at Grande Dunes, Myrtle Beach: the Ocean Club and its clubs, the houses and villas, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb at Grande Dunes: a beach club, clubs to join and a dock on the waterway",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "A 55+ neighborhood with a beach club.",
  sub: "Del Webb at Grande Dunes is a 55+ neighborhood of houses and villas, a 4-minute drive from the beach.",
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
    "Owners share a clubhouse, pools and a dock on the waterway. Each owner also pays, through the homeowners association (HOA) bill, for the Grande Dunes Ocean Club, a beach club. The association for all of Grande Dunes says each homeowner gets a household membership.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("myrtle-beach-beach-from-above", {
        alt: "The wide sand beach, the dunes and the ocean in Myrtle Beach, seen from a high floor",
        caption: "The beach in Myrtle Beach, seen from a high floor. None of these photos show Del Webb at Grande Dunes; they show the places around it.",
      }) },

    { h2: "What does the Grande Dunes Ocean Club offer?", html:
      h.p(`The ${h.ext(OCEANCLUB, "Grande Dunes Ocean Club")} is a beach club with a large outdoor pool, a hot tub and private beach access. It serves all of Grande Dunes and is not the neighborhood's clubhouse.`) +
      ph.cards([
        { illustration: "beach", label: "Private beach access", text: "For Ocean Club members" },
        { illustration: "outdoor-pool", label: "A big pool", text: "A large outdoor pool and a hot tub" },
        { illustration: "card-table", label: "Clubs", text: "Mahjong, knitting and a dominoes game called Mexican Train" },
        { illustration: "clubhouse", label: "Classes and dinners", text: "Fitness classes, happy hours, wine tastings and holiday events" },
      ], { cols: 4 }) +
      h.p("Every Del Webb owner pays for the Ocean Club through the HOA bill. Some events cost extra.") +
      h.p("Golf at Grande Dunes is a separate private membership, with its own price.") },

    { h2: "How do new owners meet people in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("You sign up for Ocean Club classes, club meetings and social events on the club's members' website.") +
      h.p("The neighborhood's own clubhouse is open every day, with staff there. Your mailbox is at the clubhouse too, so you stop in there for your mail.") +
      story([
        "<strong>Example:</strong> For 20 years, Margaret played mahjong every Tuesday with the same three friends in Rochester. In South Carolina she would know no one.",
        "The sales offices she visited showed her kitchens and pools, and none showed her a club. On her next trip, she asked each neighborhood for its club calendar before she looked at a single kitchen.",
        "She made an offer in Del Webb at Grande Dunes after she found a mahjong group she could join. On her first Tuesday in the new house, she sat down at a mahjong table with a name tag on her sweater.",
      ], "On your first visit, ask for the club calendar, and pick a group to join before you move.", bg) },

    { h2: "Where is Del Webb at Grande Dunes?", html:
      h.p("Del Webb at Grande Dunes is inside the city of Myrtle Beach, on the ocean side of the Intracoastal Waterway.") +
      M.pair +
      h.p("Grand Strand Medical Center is about 6 minutes away by car, and a Food Lion grocery store is about 4.") +
      h.p("Myrtle Beach International Airport is about 20 minutes away.") },

    { h2: "What are the homes like in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("The neighborhood has single-family houses and a section of villas, and the villas usually sell for less.") +
      h.p("In one villa section, the HOA takes care of the roofs, gutters and outside paint. Those villa owners pay an extra fee for that work.") +
      h.cta("See a house or villa in Grande Dunes with an agent.", "Tell us the one you have in mind. One of our agents reads the neighborhood's rules with you and finds out what the HOA keeps up on that home.", "Speak to an expert", "/contact/", bg) },

    { h2: "What is the area around Del Webb at Grande Dunes like?", html:
      h.p("Myrtle Beach has a long sand beach, fishing piers and a Boardwalk with a big Ferris wheel, about 15 minutes away.") +
      ph.gallery([
        { name: "myrtle-beach-pier-from-above", alt: "A long fishing pier over the ocean in Myrtle Beach, with the beach and palm trees below", caption: "A fishing pier in Myrtle Beach" },
        { name: "myrtle-beach-skywheel-boardwalk", alt: "The SkyWheel, the big Ferris wheel on the Myrtle Beach Boardwalk, seen from the beach", caption: "The SkyWheel on the Boardwalk" },
      ], { label: "Photos of Myrtle Beach" }) },

    { h2: "Who can live in Del Webb at Grande Dunes, and who can visit?", html: (bg) =>
      h.p(`At least one person in every home that someone lives in must be 55 or older, under ${h.ext(DECL, "the neighborhood's rules")}.`) +
      h.p("Everyone else who lives there must be 19 or older. Grandchildren and other guests under 19 can stay up to 90 nights in any 12 months.") +
      h.p("If the resident who is 55 or older dies or moves out, the others in the home can stay.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Cats and dogs are allowed." },
        { icon: "dock", label: "Boat dock", text: "A day dock on the waterway, with no boat ramp." },
      ], { bg }) },

    { h2: "What does it cost to live in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Your HOA bill includes the Ocean Club fee and a fee to the association for all of Grande Dunes. It also includes basic lawn care.") +
      h.p("A house in Del Webb at Grande Dunes usually sells for about $665,000, and a villa for about $430,000.") +
      h.table(["Other costs on a house you live in", "About"], [
        ["One-time fee to the HOA when you buy", "At least $3,000"],
        ["Property tax", "More than $2,000 a year"],
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) +
      h.p(`The homes are outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. Because of that, ${h.ext(LAW, "federal law")} does not make a lender require flood insurance. Only some shared land by the waterway is inside the zone. A flood policy on a house here usually costs about $550 a year.`) +
      h.cta("Get an insurance quote on the house or villa you pick.", "Tell us the exact house or villa. One of our agents helps you get a quote on it before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood and wind insurance cost near the beach")}.`) },

    { h2: "How does Del Webb at Grande Dunes compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits. Owners there pay a city tax too.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Do owners in Del Webb at Grande Dunes get a beach club?", a: "Yes, and they pay for it. Each Del Webb owner pays for the Grande Dunes Ocean Club through the HOA bill. The association for all of Grande Dunes says each homeowner gets a household membership." },
    { q: "Is there a golf course at Grande Dunes?", a: "Yes. Grande Dunes has a private 18-hole golf course. Golf there is a separate membership with its own price." },
    { q: "Is there a boat dock at Del Webb at Grande Dunes?", a: "Yes, a day dock on the Intracoastal Waterway for owners and their guests, open from dawn to dusk. Boats may not stay overnight, and there is no boat ramp." },
    { q: "Do you need flood insurance in Del Webb at Grande Dunes?", a: "Not by law. The homes are outside the high-risk flood zone, and only some shared land by the waterway is inside it. Your lender may still ask for a policy." },
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
