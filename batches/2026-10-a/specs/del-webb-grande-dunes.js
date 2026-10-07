/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what it is like to live in
 * Del Webb at Grande Dunes, a 55+ neighborhood of houses and villas in Myrtle Beach.
 *
 * Version 5, rewritten from the top 2026-10-07 for the owner's PLAIN rules
 * (voice/RULES.md class PLAIN, batches/2026-10-a/REWRITE-PLAIN.md): the life and the
 * place first, a map and icons in the first screens, round numbers, the date once (in
 * the byline), plain words, every question answered, price later and softly.
 *
 * Facts:  batches/2026-10-a/facts/del-webb-grande-dunes-facts.md, verified rows only.
 *   Place:   rows 14 (inside Myrtle Beach), 17 (ocean side of the waterway), 84 to 89
 *            (drives: beach 4, Food Lion 4, Grand Strand Medical Center 6, airport 20,
 *            Broadway at the Beach 8 minutes).
 *   Homes:   rows 26 and 27 (villa roofs, gutters, paint; extra villa fee), 80 (villas
 *            sell for less). Lawn care: rows 31 and 33, worded as the coordinator decided
 *            ("You also pay the HOA for basic lawn care and its activities program").
 *            No verified row gives home sizes (row 24 is unverifiable).
 *   Life:    rows 32 (Ocean Club fee every owner pays), 43 to 46 (clubhouse hours,
 *            no lifeguards, day dock, two guest passes), 78 (what the Ocean Club lists).
 *            Rows 91 to 93 (verified 2026-10-07): the master association's site says each
 *            Grande Dunes homeowner gets a household membership to the Ocean Club and lists
 *            Del Webb as a neighborhood; the club's pool, hot tub, private beach access,
 *            classes, clubs, dining and events; some events are paid; golf is a separate
 *            membership. Never "free" (rows 32 and 33: owners pay through the HOA bill).
 *            Row 77's budget lines are not used.
 *            Rows 43 to 49, 53 to 56 are from the posted rules, revised January 2019; the
 *            page says the year once, where those rules first appear.
 *   Rules:   rows 1 to 3 (age), 50 and 51 (leases), 48, 49, 53, 54, 56.
 *   Money:   rows 79 and 80 without the unclear sale 4999/1319 (middle $630,000; villas
 *            $432,500), row 37 (one-time fee: the larger of a year's dues or 0.5 percent;
 *            "at least $3,000" on $630,000), v4 tax result ($2,249 on $630,000 as a main
 *            home, 2025 rates and the 2025 city credit; the 2026 credit is lower and not
 *            verified, so "about $2,000 or more a year at last year's rates"). No per-home dues amount is verified.
 *   Flood:   row 60 (homes outside the high-risk zone; some waterway land inside it),
 *            row 74 (middle ZIP code policy $540 with fees; "about $550"), row 90 (federal
 *            purchase rule, verified 2026-10-07).
 * Photos: data/photos.json (SkyWheel on the Boardwalk, Broadway at the Beach at night).
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 *         The example (Carol and Jim) is version 4's, with three numbers; Jim is 52 so the
 *         55+ line teaches something (review 3).
 * Review 3 fixes applied 2026-10-07 (REVIEW-3.md, BUYER-READ-v5-del-webb-grande-dunes.md).
 */
const { h } = require("../tools/mkpage.js");
const { mapBlock, photo, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/del-webb-grande-dunes/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const DECL = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083079";
const RULES = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083089";
const FIN = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3384081";
const MASTER = "https://grandedunescommunities.sites.townsq.io/2";
const OCEANCLUB = "https://www.grandedunesoceanclub.com/homeownership";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=6201%20Marina%20Parkway%2C%20Myrtle%20Beach%2C%20SC%2029572";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Living in Del Webb at Grande Dunes, Myrtle Beach | Chapter3",
  description: "What life is like in Del Webb at Grande Dunes in Myrtle Beach: the pools and boat dock, where it is on a map, the houses and villas, the 55+ rule and the costs.",
  ogTitle: "Living in Del Webb at Grande Dunes, Myrtle Beach: the pools, the homes and the 55+ rule",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What is it like to live in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "A 55+ neighborhood with a beach club.",
  sub: "Del Webb at Grande Dunes is a 55+ neighborhood in Myrtle Beach, about 4 minutes from the beach by car.",
  heroCta: { label: "Speak to an expert", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Del Webb at Grande Dunes is a neighborhood of houses and villas in Myrtle Beach. It is beside the Intracoastal Waterway, a channel for boats along the coast.",
    "Owners share pools and a boat dock on the waterway. Each household also gets a membership to the Grande Dunes Ocean Club, a beach club with a big pool, classes and clubs.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "About 4 minutes away by car" },
        { icon: "grocery", label: "Groceries", text: "Food Lion, about 4 minutes away" },
        { icon: "hospital", label: "Hospital", text: "Grand Strand Medical Center, about 6 minutes away" },
        { icon: "pool", label: "Pools", text: "At the neighborhood clubhouse" },
        { icon: "dock", label: "Boat dock", text: "A day dock on the waterway" },
        { icon: "calendar", label: "Beach club", text: "A household membership to the Grande Dunes Ocean Club" },
      ], { title: "Del Webb at Grande Dunes at a glance", bg }) },

    { h2: "Where is Del Webb at Grande Dunes?", html:
      h.p("Del Webb at Grande Dunes is inside the city of Myrtle Beach, on the ocean side of the Intracoastal Waterway.") +
      mapBlock("del-webb-grande-dunes", [
        { id: "beach_dwgd", label: "Beach", kind: "beach" },
        { id: "groc_dwgd", label: "Food Lion", kind: "grocery" },
        { id: "hosp_gsmc", label: "Hospital", kind: "hospital" },
        { id: "airport", label: "Airport", kind: "airport" },
        { id: "broadway", label: "Broadway at the Beach", kind: "shopping" },
      ], "Map of Del Webb at Grande Dunes in Myrtle Beach, with drive times by car to the beach and other places nearby.") +
      h.p("Broadway at the Beach, with its shops and rides, is about 8 minutes away. The airport is about 20 minutes away by car.") },

    { h2: "What are the homes like in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Del Webb at Grande Dunes has single-family houses and a section of villas. Villas usually sell for less than the houses.") +
      h.p("In the first villa section built, the homeowners association (HOA) takes care of the roofs, gutters and outside paint. Villa owners pay an extra fee for that work.") +
      h.cta("Looking at a house or villa in Grande Dunes?", "Tell us the house or villa you have in mind. One of our agents will read the neighborhood's rules with you and tell you which villas the HOA's upkeep covers.", "Speak to an expert", "/contact/", bg) },

    { h2: "What is there to do in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("In a normal week you can swim, tie up your boat at the dock and join a club at the beach club.") +
      h.p(`The rules we could read are from 2019. The HOA has newer ones that are not online; we read them with you before you buy.`) +
      atAGlance([
        { icon: "clubhouse", label: "Clubhouse", text: "Open every day, with staff on site" },
        { icon: "dock", label: "Day dock", text: "Open from dawn to dusk" },
        { icon: "key", label: "Guest passes", text: "Two passes for guests per home" },
        { icon: "beach", label: "Beach access", text: "Private beach access at the Ocean Club" },
      ], { bg }) +
      h.p(`Under the ${h.ext(RULES, "posted rules")}, boats may not stay overnight at the dock, and there is no boat ramp. The pools have no lifeguards.`) +
      h.p(`Each Grande Dunes homeowner gets a household membership to the Grande Dunes Ocean Club, says the ${h.ext(MASTER, "master association's site")}. It lists Del Webb as one of the Grande Dunes neighborhoods.`) +
      h.p("The club has a large outdoor pool, a hot tub, private beach access, and classes, clubs, dinners and events. Some events cost extra.") +
      h.p(`${h.ext(OCEANCLUB, "The Ocean Club")} lists clubs for mahjong, knitting and a dominoes game called Mexican Train. Golf at Grande Dunes is a separate private membership with its own price.`) },

    { h2: "What is the area around Del Webb at Grande Dunes like?", html:
      h.p("Myrtle Beach has a long sand beach and a Boardwalk with a big Ferris wheel, about 15 minutes away by car. Broadway at the Beach has shops and rides. The photos show the area nearby, not the neighborhood.") +
      photo("myrtle-beach-skywheel-boardwalk.webp", "The SkyWheel, the big Ferris wheel on the Myrtle Beach Boardwalk, seen from the beach",
        "The SkyWheel on the Myrtle Beach Boardwalk.") +
      photo("broadway-at-the-beach-night.webp", "Lit-up rides at Broadway at the Beach, a shopping, dining and entertainment area in Myrtle Beach, at night",
        "Rides at Broadway at the Beach at night.") },

    { h2: "Who can live in Del Webb at Grande Dunes?", html:
      h.p(`At least one resident of every lived-in home in Del Webb at Grande Dunes must be 55 or older. The neighborhood's ${h.ext(DECL, "rules")} say so.`) +
      h.p("Everyone else who lives there must be at least 19. Younger visitors, such as grandchildren, can stay up to 90 nights in any 12 months.") +
      h.p("If the 55+ resident dies or moves out, the others in the home can stay.") },

    { h2: "How much does it cost to live in Del Webb at Grande Dunes?", html:
      h.p("A home in Del Webb at Grande Dunes usually sells for about $630,000. Villas usually sell for less, about $430,000.") +
      h.p("Every owner pays the Ocean Club fee and a fee to the association that covers all of Grande Dunes. You also pay the HOA for basic lawn care and its activities program.") +
      h.p("When you buy a home at that price, the HOA's rules call for a one-time fee of at least $3,000. One of our agents gets the current amount before you offer.") +
      h.p("Property tax on a home at that price that you live in is about $2,000 or more a year. That is at last year's rates.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) },

    { h2: "Do you need flood insurance in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Usually not, because the homes in Del Webb at Grande Dunes are outside the high-risk flood zone. Only some shared land along the waterway is inside it.") +
      h.p(`Under the ${h.ext(LAW, "federal flood insurance law")}, a lender must require flood insurance only for a home in that zone. You can see the zone on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("Should you want one, a flood policy on a house outside the high-risk zone here usually costs about $550 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood and home insurance cost near the beach")}.`) +
      h.cta("Want the insurance cost before you offer?", "Ask for a quote on the exact house or villa. One of our agents helps you get it before you write the offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "Can you have pets, a golf cart or a fence in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Yes to all three, with a few rules, under the HOA's posted rules.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes, up to three cats or dogs, of any breed." },
        { icon: "golf-cart", label: "Golf carts", text: "Yes, on the streets with a licensed driver, never on sidewalks." },
        { icon: "gate", label: "Fences", text: "Yes, a black aluminum fence 4 feet tall in the back yard, approved first." },
        { icon: "key", label: "Renting it out", text: "Yes, for a year or more, and only once a year." },
        { icon: "pin", label: "Mail", text: "Mailboxes are at the clubhouse, not at your house." },
        { icon: "home", label: "Sheds", text: "No sheds, above-ground pools or dog runs." },
      ], { bg }) },

    { h2: "What does a move to Del Webb at Grande Dunes look like?", html:
      h.p("<strong>Example:</strong> Carol is 66 and Jim is 52, and they are moving from Pittsburgh. Carol's age meets the 55+ rule, so Jim can live there too.") +
      h.p("They want a pool, a boat dock and a golf cart. Before they offer, an agent at Chapter3 reads the golf cart and pet rules with them.") +
      h.p("Their surprise is the one-time fee to the HOA when they buy: at least $3,000. They decide on a house. Jim drives the golf cart to the pool, and Carol joins a mahjong club at the beach club.") },

    { h2: "How does Del Webb at Grande Dunes compare with other 55+ neighborhoods?", html:
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits.") +
      compareTable(SELF) },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Is Del Webb at Grande Dunes a 55+ community?", a: "Yes. Every lived-in home must have at least one resident 55 or older. Everyone else living there must be 19 or older." },
    { q: "Do owners in Del Webb at Grande Dunes get a beach club?", a: "Yes. The Grande Dunes Master Association says each Grande Dunes homeowner gets a household membership to the Grande Dunes Ocean Club. Del Webb owners pay for it through their HOA bills." },
    { q: "Can you rent out a home in Del Webb at Grande Dunes?", a: "Yes, for 12 months or more, and only once a year. Under the posted rules, the whole home must be rented, with a written lease." },
    { q: "Can you drive a golf cart in Del Webb at Grande Dunes?", a: "Yes. Under the posted rules, golf carts may use the streets with a licensed driver, but not the sidewalks." },
    { q: "Is there a boat dock at Del Webb at Grande Dunes?", a: "Yes, a day dock on the Intracoastal Waterway for owners and their guests, open from dawn to dusk. Boats may not stay overnight, and there is no boat ramp." },
  ],
  sources: [
    { name: "Neighborhood rules, 2018", href: DECL },
    { name: "Posted rules, revised January 2019", href: RULES },
    { name: "Grande Dunes Master Association", href: MASTER },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: "Not legal advice. Drive times come from OpenStreetMap, without traffic. FEMA policy data for ZIP code 29572 gives the flood cost.",
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the lease and age rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, living in Del Webb Grande Dunes, Del Webb Grande Dunes pools, Del Webb Grande Dunes HOA, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
