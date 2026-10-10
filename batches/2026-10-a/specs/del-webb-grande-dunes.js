/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what it is like to live in
 * Del Webb at Grande Dunes, a 55+ neighborhood of houses and villas in Myrtle Beach.
 *
 * Final build, 2026-10-10 (CRAFT.md, voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9).
 * Shape: what sets this place apart is the beach club and its clubs, so the page leads with
 * the Ocean Club and how a newcomer meets people (the worry of knowing no one), then the
 * place, the homes, the area, who can live and visit, and the costs last.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-grande-dunes-facts.md, verified rows only.
 *   Place:   rows 14 (inside Myrtle Beach), 17 (ocean side of the waterway), 84 to 89
 *            (drives: beach 4, Food Lion 4, Grand Strand Medical Center 6, airport 20,
 *            Boardwalk 15, Broadway at the Beach 8 minutes).
 *   Club:    rows 91 to 93 (master association's site: a household membership to the
 *            Ocean Club for each Grande Dunes homeowner, Del Webb listed as a neighborhood;
 *            pool, hot tub, private beach access, classes, clubs, dining, events; sign-up on
 *            the members' site; some events paid; golf a separate membership), 78 (clubs:
 *            mahjong, knitting, Mexican Train; happy hours, wine tastings, dinners), 32 and
 *            33 (every owner pays the club through the HOA bill). Never "free".
 *   Life:    rows 43 (clubhouse open every day, staffed), 45 (day dock, no ramp), 54
 *            (mailboxes at the clubhouse), 77 (the HOA budgets an activities program), 48
 *            and 53 (pets; golf carts on streets).
 *            PLAIN-9: rows 43 to 57 quote the HOA's posted rules; a newer set is recorded but
 *            not online. Kept, with no date: facts that rarely change and cost a reader
 *            nothing if they did (clubhouse open daily, the dock, mailboxes, cats and dogs
 *            allowed, golf carts on the streets). Cut: the pet limit, the fence design, the
 *            lease terms (a reader could act on them); the CTA offers to read the rules.
 *   Homes:   rows 26 and 27 (one villa section: HOA keeps up roofs, gutters, paint; extra
 *            fee), 80 (villas sell for less). No verified row gives home sizes.
 *   Rules:   rows 1 to 3 (age; others 19 or older; under-19 visits 90 nights in 12 months;
 *            others may stay on).
 *   Money:   rows 79 and 80 without the unclear sale 4999/1319 (middle $630,000; villas
 *            $432,500), row 37 (one-time fee: the larger of a year's dues or 0.5 percent;
 *            "at least $3,000" at $630,000; row 38 shows it is still collected), rows 33 and
 *            77 (lawn care and the activities program on the HOA bill), v4 tax result ($2,249
 *            on $630,000 as a main home at 2025 rates; the 2026 county, school and city levies
 *            are the same, the city credit is lower, so "more than $2,000 a year").
 *   Flood:   row 60 (homes outside the high-risk zone; some waterway land inside it), row 74
 *            (middle ZIP code policy $540 with fees; "about $550"), row 90 (federal rule).
 * Photos: data/photos.json. Hero: the beach in Myrtle Beach from a high floor. Gallery: a
 *         fishing pier from above, the SkyWheel, the Market Common fountain. Broadway at the
 *         Beach at night (not the author's upload) is not used.
 * Story:  an Example (Margaret): knowing no one. No Chapter3 in the story; first-hand lines
 *         are in the CTAs. Two numbers.
 */
const { h, maps, story, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

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
  { id: "airport", name: "Myrtle Beach International Airport", short: "Airport", kind: "airport" },
], {
  label: "Del Webb",
  regionCaption: "Map of where Del Webb at Grande Dunes is in Myrtle Beach, with drive times by car.",
  closeCaption: "Map of Del Webb at Grande Dunes up close, beside the Intracoastal Waterway.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Del Webb at Grande Dunes, Myrtle Beach | Chapter3",
  description: "What life is like in Del Webb at Grande Dunes, Myrtle Beach: the Ocean Club and its clubs, a map, the houses and villas, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb at Grande Dunes: a beach club, clubs to join and a dock on the waterway",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "A 55+ neighborhood with a beach club.",
  sub: "Del Webb at Grande Dunes is a 55+ neighborhood of houses and villas in Myrtle Beach, a 4-minute drive from the beach.",
  heroCta: { label: "Let us make it simple", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb at Grande Dunes is a 55+ neighborhood of houses and villas in Myrtle Beach. It is beside the Intracoastal Waterway, a channel for boats along the coast.",
    "Owners share a clubhouse, pools and a dock on the waterway. The Grande Dunes master association says each homeowner also gets a household membership to the Grande Dunes Ocean Club, a beach club.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("myrtle-beach-beach-from-above", {
        alt: "The wide sand beach, the dunes and the ocean in Myrtle Beach, seen from a high floor",
        caption: "The beach in Myrtle Beach, seen from a high floor. None of these photos show Del Webb at Grande Dunes; they show the places around it.",
      }) },

    { h2: "What does the Grande Dunes Ocean Club offer?", html:
      h.p(`The ${h.ext(OCEANCLUB, "Grande Dunes Ocean Club")} is a beach club with a large outdoor pool, a hot tub and private beach access.`) +
      ph.cards([
        { illustration: "beach", label: "Private beach access", text: "For Ocean Club members" },
        { illustration: "outdoor-pool", label: "A big pool", text: "A large outdoor pool and a hot tub" },
        { illustration: "card-table", label: "Clubs", text: "Mahjong, knitting and a dominoes game called Mexican Train" },
        { illustration: "clubhouse", label: "Classes and dinners", text: "Fitness classes, happy hours, wine tastings and holiday events" },
      ], { cols: 4 }) +
      h.p("Every Del Webb owner pays for the club through the HOA bill. Some events cost extra.") +
      h.p("Golf at Grande Dunes is a separate private membership, with its own price.") },

    { h2: "How do new owners meet people in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("You sign up for Ocean Club classes, club meetings and social events on the club's members' website.") +
      h.p("The neighborhood's own clubhouse is open every day, with staff on site, and the mailboxes are there, not at each house. The HOA also pays for an activities program of its own.") +
      story([
        "<strong>Example:</strong> For 20 years, Margaret played mahjong every Tuesday with the same three friends in Rochester. In South Carolina she would know no one.",
        "On her house-hunting trip, she asked each neighborhood for its club calendar before she looked at a single kitchen. She crossed one place off her list because its calendar had almost nothing on it.",
        "She made an offer only after she found a mahjong group she could join. On her first Tuesday in the new house, she sat down at a mahjong table with a name tag on her sweater.",
      ], "On your first visit, ask for the club calendar, and pick a group to join before you move.", bg) },

    { h2: "Where is Del Webb at Grande Dunes?", html:
      h.p("Del Webb at Grande Dunes is inside the city of Myrtle Beach, on the ocean side of the Intracoastal Waterway.") +
      M.pair +
      h.p("Grand Strand Medical Center is about 6 minutes away by car, and a Food Lion grocery store is about 4.") +
      h.p("Broadway at the Beach, a shopping area, is about 8 minutes away. The airport is about 20.") },

    { h2: "What are the homes like in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("The neighborhood has single-family houses and a section of villas, and the villas usually sell for less.") +
      h.p("In one villa section, the HOA takes care of the roofs, gutters and outside paint. Those villa owners pay an extra fee for that work.") +
      h.cta("Looking at a house or villa in Grande Dunes?", "Tell us the one you have in mind. One of our agents reads the neighborhood's rules with you and finds out what the HOA keeps up on that home.", "Speak to an expert", "/contact/", bg) },

    { h2: "What is the area around Del Webb at Grande Dunes like?", html:
      h.p("Myrtle Beach has a long sand beach, fishing piers and a Boardwalk with a big Ferris wheel, about 15 minutes away.") +
      ph.gallery([
        { name: "myrtle-beach-pier-from-above", alt: "A long fishing pier over the ocean in Myrtle Beach, with the beach and palm trees below", caption: "A fishing pier in Myrtle Beach" },
        { name: "myrtle-beach-skywheel-boardwalk", alt: "The SkyWheel, the big Ferris wheel on the Myrtle Beach Boardwalk, seen from the beach", caption: "The SkyWheel on the Boardwalk" },
        { name: "market-common-fountain", alt: "A fountain in a round pool in front of shops and palm trees at The Market Common in Myrtle Beach", caption: "The Market Common, a shopping area" },
      ], { label: "Photos of Myrtle Beach" }) },

    { h2: "Who can live in Del Webb at Grande Dunes, and who can visit?", html: (bg) =>
      h.p(`At least one resident of every lived-in home must be 55 or older, under the neighborhood's ${h.ext(DECL, "recorded rules")}.`) +
      h.p("Everyone else who lives there must be at least 19. Guests under 19, such as grandchildren, can stay up to 90 nights in any 12 months.") +
      h.p("If the resident who is 55 or older dies or moves out, the others in the home can stay.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Cats and dogs are allowed." },
        { icon: "golf-cart", label: "Golf carts", text: "On the streets with a licensed driver, never on the sidewalks." },
        { icon: "dock", label: "Boat dock", text: "A day dock on the waterway, with no boat ramp." },
      ], { bg }) },

    { h2: "What does it cost to live in Del Webb at Grande Dunes?", html:
      h.p("A house in Del Webb at Grande Dunes usually sells for about $630,000, and a villa for about $430,000.") +
      h.table(["Other costs on a house you live in", "About"], [
        ["One-time fee to the HOA when you buy", "At least $3,000"],
        ["Property tax", "More than $2,000 a year"],
      ]) +
      h.p("Your HOA bill includes the Ocean Club fee and a fee for the Grande Dunes master association. It also pays for basic lawn care and the activities program.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) },

    { h2: "Do you need flood insurance in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Usually not, because the homes in Del Webb at Grande Dunes are outside the high-risk flood zone. Only some shared land along the waterway is inside it.") +
      h.p(`The ${h.ext(LAW, "federal flood insurance law")} requires it for a home loan only when the home is in that zone. You can see the zone on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("Should you want a policy anyway, one for a house here usually costs about $550 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood and home insurance cost near the beach")}.`) +
      h.cta("Want the insurance cost before you offer?", "Tell us the exact house or villa. One of our agents helps you get a quote on it before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How does Del Webb at Grande Dunes compare with other 55+ neighborhoods?", html: () =>
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Do owners in Del Webb at Grande Dunes get a beach club?", a: "Yes. The Grande Dunes master association says each Grande Dunes homeowner gets a household membership to the Grande Dunes Ocean Club. Del Webb owners pay for it through their HOA bills." },
    { q: "Is there a golf course at Grande Dunes?", a: "Yes. Grande Dunes has a private 18-hole course at the Members Club, and golf there is a separate membership with its own price." },
    { q: "Can you drive a golf cart in Del Webb at Grande Dunes?", a: "Yes. Golf carts can use the neighborhood's streets with a licensed driver at the wheel, but not the sidewalks." },
    { q: "Is there a boat dock at Del Webb at Grande Dunes?", a: "Yes, a day dock on the Intracoastal Waterway for owners and their guests, open from dawn to dusk. Boats may not stay overnight, and there is no boat ramp." },
    { q: "How old must you be to live in Del Webb at Grande Dunes?", a: "At least one resident of each lived-in home must be 55 or older. Everyone else who lives there must be 19 or older." },
  ],
  sources: [
    { name: "Recorded neighborhood rules", href: DECL },
    { name: "HOA rules and policies", href: RULES },
    { name: "Grande Dunes Master Association", href: MASTER },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: "Not legal advice. Drive times come from OpenStreetMap, without traffic. FEMA policy data for ZIP code 29572 gives the flood cost.",
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the HOA's age and lease rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, living in Del Webb Grande Dunes, Del Webb Grande Dunes Ocean Club, Del Webb Grande Dunes HOA, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
