/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - what it is like to live
 * in Seasons at Prince Creek West, a 55+ neighborhood near Murrells Inlet.
 *
 * Final build, 2026-10-10 (CRAFT.md, voice/STORY-CRAFT.md, PLAIN-1 to PLAIN-9).
 * Shape: two pools and courts, then the question this page's buyer asks early: can the
 * grandchildren stay? Then the place and the marsh-side town, the homes with a real story
 * from Chapter3's files, the costs, flood (45 lots touch the zone, said plainly with the
 * fix), and the house rules.
 *
 * Facts:  batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md, verified rows only.
 *   Place:   rows 16 and 17 (outside any town, Murrells Inlet address), 68 (no city levy),
 *            76, 78 to 81 and 85 (drives: beach 10, hospital 8, airport 25, Boardwalk 25,
 *            MarshWalk 10, Publix on Highway 707 5 minutes). Row 26 (about 192 acres,
 *            106 of them shared).
 *   Life:    row 56 (clubhouse, indoor and outdoor pools, fitness center, tennis, bocce),
 *            row 37 (one bill covers the larger Prince Creek West associations), row 28
 *            (Seasons is inside Prince Creek West).
 *   Homes:   rows 83 (the builder described open, one-story floor plans; past tense) and 84
 *            (some designs had an optional extra room; past tense). Row 19 (444 lots) is
 *            "room for about 440 homes".
 *   Rules:   the recorded charter, last amended 2017 (row 2): rows 5 to 7 (age, six months a
 *            year, no one under 18 lives there, visits up to 60 days), 42 (leases), 45
 *            (pets), 46 (fences), 47 (golf carts). PLAIN-9: these are charter rules, which
 *            change only by a recorded amendment, and none is recorded after 2017; stated
 *            plainly, with no date. The newer recorded rule sets (row 12) are not online.
 *   Money:   row 73 (middle sale $499,000; "about $500,000"), rows 39 and 40 (two months of
 *            dues; a transfer fee of a quarter of 1 percent with a cap, no $480), v4 tax
 *            result ($1,964 on $500,000 as a main home) plus the county stormwater fee
 *            ($89.40, Myrtle Trace row 73): "about $2,000".
 *   Flood:   row 59 (every lot center outside the high-risk zone; 45 lots touch it at a
 *            corner), row 71 (middle ZIP code policy $574 with fees; "about $600"), row 82.
 * Photos: data/photos.json. Hero: the walkway to the beach on Pawleys Island. Gallery:
 *         fishing boats in Murrells Inlet, the lake at Huntington Beach State Park at sunset,
 *         Brookgreen Gardens. The marsh sunset and the marsh houses (not the authors'
 *         uploads) are not used.
 * Stories: real, stories.json "blackmoor-to-seasons" (no names, Blackmoor by its property
 *         facts, no added reasons). Example (Donna and Steve): family visits. Chapter3 once,
 *         reading the rules on visitors (STANDARD T2). One number.
 */
const { h, maps, story, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

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
  { id: "airport", name: "Myrtle Beach International Airport", short: "Airport", kind: "airport" },
], {
  label: "Seasons",
  regionCaption: "Map of where Seasons at Prince Creek West is, near Murrells Inlet, with drive times by car.",
  closeCaption: "Map of the streets and ponds inside Seasons at Prince Creek West.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "What life is like in Seasons at Prince Creek West near Murrells Inlet: two pools, visits from grandchildren, a map, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Seasons at Prince Creek West, Murrells Inlet: two pools, family visits and the 55+ rule",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "What is it like to live in Seasons at Prince Creek West in Murrells Inlet?",
  h1em: "A 55+ neighborhood with two pools.",
  sub: "Seasons at Prince Creek West is a 55+ neighborhood near Murrells Inlet, about 10 minutes by car from the beach.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Seasons at Prince Creek West has room for about 440 homes, near Murrells Inlet and south of Myrtle Beach. Every home where someone lives must have a resident 55 or older.",
    "Owners share a clubhouse with an indoor pool, an outdoor pool and a fitness center, plus tennis and bocce. Grandchildren under 18 can come to stay for up to 60 days a year.",
  ],
  sections: [
    { id: "c3-photo", html: ph.css() + ph.hero("pawleys-island-beach-walkway", {
        alt: "A wooden walkway over green dunes leading to the ocean on Pawleys Island",
        caption: "A walkway over the dunes to the beach on Pawleys Island, south of Murrells Inlet. The photos on this page show the coast near Seasons, not the neighborhood.",
      }) },

    { h2: "What can you do at Seasons at Prince Creek West?", html:
      h.p("Owners share a clubhouse with a fitness center, an indoor pool and an outdoor pool, plus courts for tennis and bocce.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor pool", text: "Swim in the cooler months" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "Swim outside in the warm months" },
        { illustration: "bocce", label: "Bocce", text: "A lawn game to play with neighbors" },
        { illustration: "clubhouse", label: "Clubhouse", text: "With a fitness center inside" },
      ], { cols: 4 }) },

    { h2: "Can grandchildren stay with you at Seasons at Prince Creek West?", html: (bg) =>
      h.p("Yes, as visitors: anyone under 18 can stay up to 60 days a year, and no one under 18 can live there.") +
      h.p(`Under the ${h.ext(CHARTER, "HOA's rules")}, the resident who is 55 or older must live there at least six months of the year. Other adults in the home can be younger.`) +
      story([
        "<strong>Example:</strong> Every July, Donna and Steve had their grandchildren for a week at their house in Richmond. They wanted to retire near the beach without losing that week.",
        "Donna wanted to know if the children could stay over at all in a neighborhood for people 55 and older. Before they made an offer, an agent at Chapter3 read the rules on visitors with them.",
        "They chose a house with a spare bedroom over one with a bigger kitchen. By the next July, there were bunk beds in the spare room and three beach towels on hooks by the back door.",
      ], "If family will stay with you, read the visitor rules and count the beds before you make an offer.", bg) },

    { h2: "Where is Seasons at Prince Creek West?", html:
      h.p("Seasons is just outside Murrells Inlet, about 10 minutes by car from the beach in Garden City.") +
      M.pair +
      h.p("Publix on Highway 707 is about 5 minutes away, and Tidelands Waccamaw Community Hospital is about 8.") +
      h.p("The MarshWalk, a boardwalk along the marsh in Murrells Inlet, is about 10 minutes away. The drive to the airport takes about 25.") +
      h.p("Seasons has a Murrells Inlet address but is not inside any town, so there is no city tax.") },

    { h2: "What is Murrells Inlet like?", html:
      h.p("Murrells Inlet is on a salt marsh, with fishing boats and marinas. Huntington Beach State Park and Brookgreen Gardens are just south of it.") +
      ph.gallery([
        { name: "murrells-inlet-boats", alt: "White fishing boats tied up at a marina on calm water in Murrells Inlet, South Carolina", caption: "Fishing boats in Murrells Inlet" },
        { name: "huntington-beach-state-park-lake-sunset", alt: "The setting sun and clouds reflected in still water, with a dark line of trees, at Huntington Beach State Park", caption: "Sunset at Huntington Beach State Park" },
        { name: "brookgreen-gardens-oaks", alt: "Old oak trees hung with Spanish moss, with a bench and a wooden path, at Brookgreen Gardens", caption: "Live oaks at Brookgreen Gardens" },
      ], { label: "Photos of the Murrells Inlet area" }) },

    { h2: "What are the homes like in Seasons at Prince Creek West?", html: (bg) =>
      h.p("When the builder sold new homes here, it described open, one-story floor plans. Some of its designs had an optional extra room.") +
      h.p("An agent at Chapter3 helped a couple who owned a house in Blackmoor. It is a golf neighborhood in Murrells Inlet with no age rule. They sold that house and bought in Seasons, a few minutes away.") +
      h.cta("Want a home in Seasons at Prince Creek West?", "Tell us how many bedrooms you need. One of our agents reads the HOA rules with you before you offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What does it cost to live in Seasons at Prince Creek West?", html:
      h.p("Seasons homes usually sell for about $500,000.") +
      h.ul([
        "<strong>Your HOA bill</strong> also covers your share of the larger Prince Creek West associations, so you get one bill.",
        "<strong>When you buy,</strong> you pay the HOA two months of dues as a one-time fee. Another Prince Creek West association charges a transfer fee of up to a quarter of 1 percent of the price.",
        "<strong>Property tax</strong> on a home at that price that you live in is about $2,000 a year, with the county's stormwater fee.",
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home near Murrells Inlet")}.`) },

    { h2: "Do you need flood insurance in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Usually not, because the center of every lot in Seasons is outside the high-risk flood zone.") +
      h.p("Some lots, 45 in all, have a corner inside the high-risk zone. If you like a home on one of them, get a flood quote before you offer.") +
      h.p(`A lender has to require flood insurance only when the house itself is in that zone, under the ${h.ext(LAW, "federal flood insurance law")}. That zone is on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("Outside the high-risk zone, a flood policy on a house in the Murrells Inlet area usually costs about $600 a year.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood zones near Myrtle Beach mean for insurance")}.`) +
      h.cta("Want the flood cost before you offer?", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "What are the house rules at Seasons at Prince Creek West?", html: (bg) =>
      h.p("Pets, golf carts, fences and renting are all allowed, each with a rule.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "golf-cart", label: "Golf carts", text: "Yes. Park them in your garage, never on the street." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
        { icon: "gate", label: "Fences", text: "Yes, once the design committee approves it. It must be as wide as the house." },
      ], { bg }) },

    { h2: "How does Seasons at Prince Creek West compare with other 55+ neighborhoods?", html: () =>
      h.p("Seasons at Prince Creek West and Myrtle Trace are both outside any city, and both Del Webb neighborhoods are inside one.") +
      compareTable(SELF) +
      ph.credits() },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Is Seasons at Prince Creek West part of Prince Creek?", a: "Yes. Seasons is one neighborhood inside the larger Prince Creek West area near Murrells Inlet. Its HOA bill includes the fees for the larger Prince Creek West associations." },
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
  bottomCta: { h2: "Want help reading the Seasons rules before you offer?", p: "Call about the Seasons home you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
