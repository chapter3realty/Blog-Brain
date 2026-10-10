/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - what it is like to live
 * in Seasons at Prince Creek West, a 55+ neighborhood near Murrells Inlet.
 *
 * Final build, 2026-10-10, with the review 4 and buyer read v6 fixes (CRAFT.md,
 * voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9, STANDARD T2 as changed in 52d07ac).
 * Shape: this page's own subject is the age rule's two numbers a buyer plans around: the
 * six months a year the 55+ resident must live there, and the 60 days a year grandchildren
 * can stay. So: a normal week, then where it is, then the part-year question with its
 * story, the homes, and flood right after the homes (45 lots touch the zone, so this is
 * the one page where flood is a choice the buyer makes, review 4 All 3). Then the marsh
 * town with the real Blackmoor story, the money and the house rules.
 *
 * Facts:  batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md, verified rows only.
 *   Place:   rows 16 and 17 (outside any town, Murrells Inlet address), 68 (no city levy),
 *            76, 78, 79 and 85 (drives: beach 10, hospital 8, airport 25, Publix 5
 *            minutes), 81 (MarshWalk 10). Row 19 (444 lots): "room for about 440 homes".
 *   Life:    row 56 (clubhouse, indoor and outdoor pools, fitness center, tennis, bocce),
 *            row 37 (one bill includes the fees of the larger Prince Creek West
 *            associations), row 28 (Seasons is inside Prince Creek West).
 *   Homes:   rows 83 and 84. Row 83's limit is past tense ("do not say the homes are
 *            one-story today"), so the page keeps the past tense with no year (coordinator,
 *            fix round 3; PLAIN-9 forbids the year). This is the page's one "the builder
 *            described".
 *   Rules:   the recorded charter, last amended 2017 (row 2): rows 5 to 7 (age, six months a
 *            year, no one under 18 lives there, visits up to 60 days), 42 (leases), 45
 *            (pets), 46 (fences: as wide as the house). PLAIN-9: charter rules change only by
 *            a recorded amendment, and none is recorded after 2017; stated plainly, with no
 *            date. Golf carts are cut (review 4 Seasons 1: row 47's 2022 parking rules are
 *            unread).
 *   Money:   row 73 (middle sale $499,000; "about $500,000"), rows 39 and 40 (two months of
 *            dues; a transfer fee of a quarter of 1 percent with a cap, no $480), v4 tax
 *            result ($1,964 on $500,000 as a main home) plus the county stormwater fee
 *            ($89.40, Myrtle Trace row 73): "about $2,000".
 *   Flood:   row 59 (every lot center outside the high-risk zone; 45 lots touch it at a
 *            corner; the house's own zone decides), row 71 (middle ZIP code policy $574
 *            with fees; "about $600"), row 82 (federal rule).
 * Photos: data/photos.json. Hero: the walkway to the beach on Pawleys Island. Gallery:
 *         fishing boats in Murrells Inlet, the lake at Huntington Beach State Park at sunset,
 *         Brookgreen Gardens.
 * Maps:   amenity pin "Clubhouse"; the airport pin "Myrtle Beach airport". Hero: an icon row
 *         (mkpage heroMedia).
 * Stories: Example (Ken and Mary): keeping a home up north and the months-a-year rule, a
 *         worry no other page uses (the grandchildren story copied the STORY-CRAFT model,
 *         review 4 Seasons 4). It ends in Seasons. Chapter3 is not in it; the service
 *         (reading the rules, stories.json "hoa-rental-bans-filtered") is the CTA box after
 *         the meaning line. Real: stories.json "blackmoor-to-seasons", told as the bank has
 *         it ("clients", not "a couple"), with one line on what it means for the reader.
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
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "What life is like in Seasons at Prince Creek West near Murrells Inlet: two pools, visits from grandchildren, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Seasons at Prince Creek West, Murrells Inlet: two pools, family visits and the 55+ rule",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "What is it like to live in Seasons at Prince Creek West in Murrells Inlet?",
  h1em: "A 55+ neighborhood where grandchildren can visit.",
  sub: "Seasons at Prince Creek West is a 55+ neighborhood near Murrells Inlet, about 10 minutes by car from the beach.",
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
    "At least one person in each home must be 55 or older and live there six months of the year or more. Grandchildren under 18 can come to stay for up to 60 days a year.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("pawleys-island-beach-walkway", {
        alt: "A wooden walkway over green dunes leading to the ocean on Pawleys Island",
        caption: "A walkway over the dunes to the beach on Pawleys Island, south of Murrells Inlet. The photos on this page show the coast near Seasons, not the neighborhood.",
      }) },

    { h2: "What can you do at Seasons at Prince Creek West?", html:
      h.p("In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor pool", text: "Swim in the cooler months" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "Swim outside in the warm months" },
        { illustration: "bocce", label: "Courts", text: "For tennis and bocce" },
        { illustration: "clubhouse", label: "Clubhouse", text: "With a fitness center inside" },
      ], { cols: 4 }) },

    { h2: "Where is Seasons at Prince Creek West?", html:
      h.p("Seasons is in the Murrells Inlet area, about 10 minutes by car from the beach in Garden City.") +
      M.pair +
      h.p("A Publix grocery store is about 5 minutes away, and Tidelands Waccamaw Community Hospital is about 8.") +
      h.p("Myrtle Beach International Airport is the longest drive, about 25 minutes.") +
      h.p("Seasons has a Murrells Inlet address but is not inside any town, so there is no city tax.") },

    { h2: "Can you live in Seasons at Prince Creek West part of the year?", html: (bg) =>
      h.p(`Yes, if Seasons is your main home. Under the ${h.ext(CHARTER, "homeowners association (HOA) rules")}, the resident who is 55 or older must live there at least six months a year.`) +
      h.p("Grandchildren and other visitors under 18 can stay up to 60 days a year. No one under 18 can live there.") +
      story([
        "<strong>Example:</strong> For 40 years, Ken and Mary lived in Akron, ten minutes from their daughter. They wanted to spend most of the year on the coast and the summers near her.",
        "Mary did not know if a neighborhood with a 55+ rule would let them be gone for whole summers. Before they toured any houses, she read each neighborhood's age rule for how many months a year they had to live there.",
        "They made an offer in Seasons at Prince Creek West. The keys to the Seasons house and the Akron house now hang on one ring by the door.",
      ], "If you will keep a home up north, check how many months a year the age rule requires before you offer.", bg) +
      h.cta("Read the Seasons age rules with an agent.", "An agent at Chapter3 can read the age and visitor rules with you before you offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What are the homes like in Seasons at Prince Creek West?", html:
      h.p("The builder described its designs here as open, one-story floor plans. Some designs had an optional extra room.") +
      h.p("Seasons has room for about 440 homes, and more than half of its land is shared by the owners.") },

    { h2: "Do you need flood insurance in Seasons at Prince Creek West?", html: (bg) =>
      h.p(`Most homes do not. The middle of every lot is outside the high-risk flood zone on ${h.ext(FEMA, "the federal flood map")}. On 45 lots, one corner is inside it.`) +
      h.p(`On those lots, what counts is whether the house itself is in the zone. Only then does ${h.ext(LAW, "federal law")} make a lender require a policy.`) +
      h.p("In the Murrells Inlet ZIP code, a flood policy on a house outside the zone usually costs about $600 a year.") +
      h.cta("Get a flood quote on the lot you like.", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "We help get insurance quotes if you need them.", "/contact/", bg) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood zones near Myrtle Beach mean for insurance")}.`) },

    { h2: "What is Murrells Inlet like?", html:
      h.p("Murrells Inlet is on a salt marsh, with fishing boats and marinas. The MarshWalk, a boardwalk along the marsh, is about 10 minutes from Seasons.") +
      ph.gallery([
        { name: "murrells-inlet-boats", alt: "White fishing boats tied up at a marina on calm water in Murrells Inlet, South Carolina", caption: "Fishing boats in Murrells Inlet" },
        { name: "huntington-beach-state-park-lake-sunset", alt: "The setting sun and clouds reflected in still water, with a dark line of trees, at Huntington Beach State Park", caption: "Sunset at Huntington Beach State Park, south of Murrells Inlet" },
        { name: "brookgreen-gardens-oaks", alt: "Old oak trees hung with Spanish moss, with a bench and a wooden path, at Brookgreen Gardens", caption: "Old oak trees at Brookgreen Gardens" },
      ], { label: "Photos of the Murrells Inlet area" }) +
      h.p("An agent at Chapter3 helped clients who owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold that house and bought in Seasons, a few minutes away.") +
      h.p("A move into a neighborhood with a 55+ rule can be a few minutes from the house you have now.") },

    { h2: "What does it cost to live in Seasons at Prince Creek West?", html:
      h.p("Seasons homes usually sell for about $500,000.") +
      h.ul([
        "<strong>Your HOA bill</strong> includes your share of the fees for the larger Prince Creek West area, so you get one bill.",
        "<strong>When you buy,</strong> you pay the HOA two months of dues as a one-time fee. One of the larger Prince Creek West associations also charges a transfer fee of up to a quarter of 1 percent of the price.",
        "<strong>Property tax</strong> on a home at that price that you live in is about $2,000 a year, the county's drainage fee included.",
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home near Murrells Inlet")}.`) },

    { h2: "What are the house rules at Seasons at Prince Creek West?", html: (bg) =>
      h.p("Pets, fences and renting are allowed, each with a rule.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
        { icon: "gate", label: "Fences", text: "Yes, once the neighborhood's design board approves it. It must line up with the sides of the house." },
      ], { bg }) },

    { h2: "How does Seasons at Prince Creek West compare with other 55+ neighborhoods?", html: () =>
      h.p("Seasons at Prince Creek West and Myrtle Trace are outside any city, so owners in both pay no city tax.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Is Seasons at Prince Creek West part of Prince Creek?", a: "Yes. Seasons is one neighborhood inside the larger Prince Creek West area near Murrells Inlet. Its HOA bill includes the fees for that larger area." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital in Murrells Inlet, about 8 minutes away by car from the clubhouse." },
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a resident 55 or older also lives in the home. No one under 18 can live there." },
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
  bottomCta: { h2: "Know the Seasons rules before you make an offer.", p: "Call about the Seasons home you like. An agent at Chapter3 gets the current HOA fee and reads the age, lease and pet rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
