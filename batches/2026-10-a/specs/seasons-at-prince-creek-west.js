/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - what it is like to live
 * in Seasons at Prince Creek West, a 55+ neighborhood near Murrells Inlet.
 *
 * Version 8, 2026-10-11, after the owner's notes on version 7 ("the photo at the beginning
 * feels awkward", "the story should be one of the last things in the page", "showing
 * Chapter3's skill and have some tension", "the photos should be of the topic") and the
 * grader's list (batches/2026-10-a/GRADE-pages.md).
 * Shape: what you can do, then where it is with Murrells Inlet in the same section (the
 * area photos sit beside the Murrells Inlet sentence, RULES P10), the homes with the real
 * Blackmoor story (moved up, grader), the part-year rule, flood (45 lots touch the zone, so
 * flood is a choice the buyer makes here), the money, the house rules, then the example: how
 * an agent handles a lot near the flood zone. The comparison table and the FAQ close it.
 * No photo at the top. Headings use the short name "Seasons" after the first H2 (grader).
 *
 * Facts:  batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md, verified rows only.
 *   Place:   rows 16 and 17 (outside any town, Murrells Inlet address), 68 (no city levy),
 *            76, 78, 79 and 85 (drives: beach 10, hospital 8, airport 25, Publix 5
 *            minutes), 81 (MarshWalk 10). Row 19 (444 lots): "room for about 440 homes".
 *            Rush hour: stories.json "traffic-timing" (rush hour adds 5 to 10 minutes; told as
 *            our experience).
 *   Life:    row 56 (clubhouse, indoor and outdoor pools, fitness center, tennis, bocce),
 *            row 37 (one bill includes the fees of the larger Prince Creek West
 *            associations), row 28 (Seasons is inside Prince Creek West).
 *   Homes:   rows 83 and 84 (past tense, no year; the page's one "the builder described").
 *   Rules:   the charter, last amended 2017 (row 2): rows 5 to 7, 42, 45, 46. PLAIN-9: stated
 *            plainly, with no date. Golf carts are cut (row 47's 2022 rules are unread).
 *   Money:   row 73 ("about $500,000"), rows 39 and 40 (two months of dues; transfer fee of a
 *            quarter of 1 percent with a cap, no $480), v4 tax result plus the county
 *            stormwater fee: "about $2,000".
 *   Flood:   row 59 (every lot center outside the high-risk zone; 45 lots touch it at a
 *            corner; the house's own zone decides), row 71 ("about $600"), row 82 (federal rule).
 * Version 9 (2026-10-11): aerials (USDA NAIP 2023, photos.json, commit 73f9819): the overview at the
 *         top of "where" (its crops are the share image) and the clubhouse close-up beside the
 *         amenity cards. Must-answer rows: 86 (HOA fee, "listings show about $340 a month in
 *         2026"; never the whole bill), 88 ("some listings say" internet, trash, lawn care), 89
 *         (homes: built 2006 to 2016, most about 1,700 to 2,500 sq ft, mostly 3 bedrooms; one
 *         level on most 2026 listings). No gates (no primary source).
 * Photos: data/photos.json. Murrells Inlet section: fishing boats and a marina in Murrells
 *         Inlet, beside the Murrells Inlet sentence. The Pawleys Island hero, the Huntington
 *         Beach State Park and Brookgreen Gardens photos are cut (no sentence on the page is
 *         about those places). The aerial overview is the share image (its crops).
 * Maps:   amenity pin "Clubhouse"; the airport pin "Myrtle Beach airport". Hero: an icon row.
 * Stories: Real: stories.json "blackmoor-to-seasons", told as the bank has it ("clients", not
 *         "a couple"), in the homes section. Example (Carol and Jim): how an agent handles a
 *         lot with a corner in the flood zone (row 59), using the recorded service of an
 *         insurance quote before the offer (stories.json "insurance-quote-before-offer").
 *         Present tense, no numbers, no prices.
 */
const { h, maps, story, glance, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. The
   charter is the association's posted copy, the same file the verifier read. */
const CHARTER = "https://www.seasons55.com/editor_upload/File/Community%20Management/Policies%20%26%20Rules/communitycharter2.pdf";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=130%20Grand%20Cypress%20Way%2C%20Murrells%20Inlet%2C%20SC%2029576";
const CMS = "https://www.medicare.gov/care-compare/details/hospital/420098/";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

const ph = photoSet();
const CLUB = ph.aerial("seasons-at-prince-creek-west-clubhouse-from-above", "The Seasons clubhouse from above in 2023, with its outdoor pool and tennis courts.", { closeUp: true });
const AERIAL = ph.aerial("seasons-at-prince-creek-west-from-above", "Seasons at Prince Creek West from above in 2023, with its edge drawn in orange.");
const M = maps("seasons-at-prince-creek-west", [
  { id: "beach_spcw", name: "the beach in Garden City", short: "Beach", kind: "beach" },
  { id: "hosp_tidelands", name: "Tidelands Waccamaw Community Hospital", short: "Hospital", kind: "hospital" },
  { id: "groc_spcw", name: "Publix", short: "Publix", kind: "grocery" },
  { id: "marshwalk", name: "the Murrells Inlet MarshWalk", short: "MarshWalk", kind: "dock" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Myrtle Beach airport", kind: "airport" },
], {
  label: "Seasons",
  amenity: "Clubhouse",
  regionCaption: "Map of where Seasons at Prince Creek West is, near Murrells Inlet, with drive times by car.",
  closeCaption: "Map of the streets, ponds and clubhouse inside Seasons at Prince Creek West.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  /* The aerial's 1x1, 4x3 and 16x9 crops for Article.image when it has them; otherwise none,
     and the page shares its card (STANDARD S5). */
  pageImages: () => ph.pageImages(),
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "What life is like in Seasons at Prince Creek West near Murrells Inlet: two pools, visits from grandchildren, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Seasons at Prince Creek West, Murrells Inlet: two pools, family visits and the 55+ rule",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "What is it like to live in Seasons at Prince Creek West in Murrells Inlet?",
  h1em: "A 55+ neighborhood where grandchildren can visit.",
  sub: "Seasons at Prince Creek West is a 55+ neighborhood near Murrells Inlet, about 10 minutes by car from the beach without traffic.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 10 minutes" },
    { icon: "grocery", label: "Publix", text: "About 5 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 8 minutes" },
    { icon: "pool", label: "Pools", text: "Indoor and outdoor" },
  ]),
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Seasons at Prince Creek West is near Murrells Inlet, south of Myrtle Beach. Owners share a clubhouse with an indoor pool, an outdoor pool and a fitness center, plus tennis and bocce.",
    "At least one person in each home must be 55 or older and live there six months of the year or more. Grandchildren under 18 can come to stay for up to 60 days a year. Listings show an HOA fee of about $340 a month.",
  ],
  sections: [
    { h2: "What can you do at Seasons at Prince Creek West?", html:
      ph.css() +
      h.p("In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor pool", text: "Swim in the cooler months" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "Swim outside in the warm months" },
        { illustration: "bocce", label: "Courts", text: "For tennis and bocce" },
        { illustration: "clubhouse", label: "Clubhouse", text: "With a fitness center inside" },
      ], { cols: 4 }) +
      CLUB },

    { h2: "Where is Seasons, and what is Murrells Inlet like?", html:
      h.p("Seasons is in the Murrells Inlet area, about 10 minutes by car from the beach in Garden City without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      AERIAL +
      M.pair +
      h.p("A Publix grocery store is about 5 minutes away, and Tidelands Waccamaw Community Hospital is about 8.") +
      h.p("Myrtle Beach International Airport is the longest drive, about 25 minutes.") +
      h.p("Seasons has a Murrells Inlet address but is not inside any town, so there is no city tax.") +
      h.p("Murrells Inlet is on a salt marsh, with fishing boats and marinas. The MarshWalk, a boardwalk along the marsh, is about 10 minutes from Seasons.") +
      ph.gallery([
        { name: "murrells-inlet-boats", alt: "White fishing boats tied up at a marina on calm water in Murrells Inlet, South Carolina", caption: "Fishing boats in Murrells Inlet" },
        { name: "murrells-inlet-marina-sky", alt: "Boats tied up at a marina in Murrells Inlet under a pink evening sky", caption: "A marina in Murrells Inlet in the evening" },
      ], { label: "Photos of Murrells Inlet" }) },

    { h2: "What are the homes like in Seasons?", html:
      h.p("The builder described its designs here as open, one-story floor plans. Some designs had an optional extra room.") +
      h.p("Listings show houses built from 2006 to 2016, most of about 1,700 to 2,500 square feet, mostly with 3 bedrooms. Most recent listings are on one level.") +
      h.p("Seasons has room for about 440 homes, and more than half of its land is shared by the owners.") +
      `<div style="border-left:3px solid var(--brass);padding:.2rem 0 .2rem 1.2rem;margin:1.6rem 0 1.2rem;max-width:720px">` +
      h.p("An agent at Chapter3 helped clients who owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold that house and bought in Seasons, a few minutes away.") +
      `</div>` +
      h.p("A move into a neighborhood with a 55+ rule can be a few minutes from the house you have now.") },

    { h2: "Can you live in Seasons part of the year?", html: (bg) =>
      h.p(`Yes, if Seasons is your main home. Under the ${h.ext(CHARTER, "homeowners association (HOA) rules")}, the resident who is 55 or older must live there at least six months a year.`) +
      h.p("Grandchildren and other visitors under 18 can stay up to 60 days a year. No one under 18 can live there.") +
      h.cta("Read the Seasons age rules with an agent.", "An agent at Chapter3 can read the age and visitor rules with you before you offer.", "Speak to an expert", "/contact/", bg) },

    { h2: "Do you need flood insurance in Seasons?", html:
      h.p(`Most homes do not. The middle of every lot is outside the high-risk flood zone on ${h.ext(FEMA, "the federal flood map")}. On 45 lots, one corner is inside it.`) +
      h.p(`On those lots, what counts is whether the house itself is in the zone. Only then does ${h.ext(LAW, "federal law")} make a lender require a policy.`) +
      h.p("In the Murrells Inlet ZIP code, a flood policy on a house outside the zone usually costs about $600 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood zones near Myrtle Beach mean for insurance")}.`) },

    { h2: "What does it cost to live in Seasons?", html:
      h.p("Seasons homes usually sell for about $500,000. Listings show an HOA fee of about $340 a month in 2026.") +
      h.p("Some listings say the fee includes internet, weekly trash pickup and lawn care.") +
      h.ul([
        "<strong>Your HOA bill</strong> includes your share of the fees for the larger Prince Creek West area, so you get one bill.",
        "<strong>When you buy,</strong> you pay the HOA two months of dues as a one-time fee. One of the larger Prince Creek West associations also charges a transfer fee of up to a quarter of 1 percent of the price.",
        "<strong>Property tax</strong> on a home at that price that you live in is about $2,000 a year, the county's drainage fee included.",
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home near Murrells Inlet")}.`) },

    { h2: "What are the house rules in Seasons?", html: (bg) =>
      h.p("Pets, fences and renting are allowed, each with a rule.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
        { icon: "gate", label: "Fences", text: "Yes, once the neighborhood's design board approves it. It must line up with the sides of the house." },
      ], { bg, min: "13rem" }) },

    { h2: "How does a Chapter3 agent check a Seasons lot near the flood zone?", html: (bg) =>
      h.p("A Chapter3 agent gets you a flood insurance quote on the house before you make an offer.") +
      story([
        "<strong>Example:</strong> Carol and Jim are moving from Buffalo. A Chapter3 agent is helping them find a house in Seasons that backs onto the woods. They find one they like and plan to make an offer that night.",
        "The agent knows that some Seasons lots have one corner inside the high-risk flood zone, and this lot is one of them. If the house itself is in that zone, their lender has to require flood insurance. That is a yearly cost they have not planned for.",
        "Before they offer, the agent gets them a flood insurance quote on that exact house. Carol and Jim now write their offer with the yearly flood cost in front of them.",
      ], "If the lot you like is one of the 45 that touch the flood zone, get a flood quote on the house before you offer.", bg) +
      h.cta("Get a flood quote on the lot you like.", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How does Seasons compare with other 55+ neighborhoods?", html: () =>
      h.p("Seasons at Prince Creek West and Myrtle Trace are outside any city, so owners in both pay no city tax.") +
      compareTable(SELF) },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Is Seasons at Prince Creek West part of Prince Creek?", a: "Yes. Seasons is one neighborhood inside the larger Prince Creek West area near Murrells Inlet. Its HOA bill includes the fees for that larger area." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital in Murrells Inlet, about 8 minutes away by car from the clubhouse." },
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a resident 55 or older also lives in the home. No one under 18 can live there." },
    { q: "How much is the HOA fee in Seasons at Prince Creek West?", a: "Recent listings show about $340 a month. Some listings say the fee includes internet, weekly trash pickup and lawn care." },
    { q: "How big is Seasons at Prince Creek West?", a: "Seasons has room for about 440 homes on about 190 acres. More than half of that land is shared by the owners." },
    { q: "How far is Seasons at Prince Creek West from the beach?", a: "About 10 minutes by car to the nearest public beach access, in Garden City. The Myrtle Beach Boardwalk is about 25 minutes away." },
  ],
  sources: [
    { name: "HOA rules", href: CHARTER },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "For education, not legal advice. Drive times are no-traffic estimates from OpenStreetMap. The flood cost is the middle FEMA policy price in ZIP code 29576.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Know the Seasons rules before you make an offer.", p: "Call about the Seasons home you like. An agent at Chapter3 gets the current HOA fee and reads the age, lease and pet rules with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call to learn more", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
