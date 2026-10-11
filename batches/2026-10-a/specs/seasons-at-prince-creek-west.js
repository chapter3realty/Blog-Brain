/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - what it is like to live
 * in Seasons at Prince Creek West, a 55+ neighborhood near Murrells Inlet.
 *
 * Version 10, 2026-10-11: the owner's-eye review of version 9
 * (batches/2026-10-a/OWNER-EYE-seasons-at-prince-creek-west.md) and the coordinator's decisions.
 * Shape: what you can do (the clubhouse from above beside the clubhouse sentence), where it is
 * with Murrells Inlet (one map, one boat photo beside the marina sentence), the homes (the
 * overview aerial beside the layout sentence and a close aerial of a street of homes), the
 * part-year rule, the money (fee stated plainly; city tax here), the house rules (golf carts
 * added), the comparison with the real Blackmoor story, then the flood example as the last
 * section before the FAQ, under the buyer's question. Flood facts open that section, so the
 * page says them once. No dates in captions; the photo year is in the credit line.
 *
 * Facts:  batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md, verified rows only.
 *   Place:   rows 16, 17, 68, 76, 78, 79, 81, 85; rush hour: stories.json "traffic-timing".
 *   Life:    rows 56 (clubhouse, indoor and outdoor pools, fitness, tennis, bocce), 37, 28.
 *            The pool and courts beside the clubhouse: the aerial record (photos.json).
 *   Homes:   row 89 (built 2006 to 2016; most about 1,700 to 2,500 sq ft; mostly 3 bedrooms;
 *            7 of 8 2026 listings on one level, so "most homes are on one level"); row 19
 *            (444 lots: "about 440 homes"). No home was built after 2016 (row 89), so "every
 *            home here is a resale now". Row 83's "one-story floor plans" is the builder's
 *            past description and is not used.
 *   Rules:   rows 5 to 7, 42, 45, 46, 47 (golf carts in the garage).
 *   Money:   row 73, row 86 ($342: "about $340", stated plainly by the coordinator's decision of
 *            2026-10-11; the sources line names recent MLS listings), row 88 (internet, weekly
 *            trash pickup and lawn care are the items listings name), row 39, row 40 (0.25
 *            percent: "no more than $1,250 on a $500,000 home" is that ceiling; the $480 cap is
 *            adjusted and not given), v4 tax result plus the stormwater fee: "about $2,000".
 *   Flood:   row 59 (45 lots touch the zone; the house's own zone decides), row 71 ("about
 *            $600"), rows 62 and 63 (outside the wind pool's coastal area).
 * Stories: Real: stories.json "blackmoor-to-seasons", as recorded, in the comparison. Example
 *         (Carol and Jim): the agent checks that lot on the federal flood map and gets a flood
 *         quote before the offer (stories.json "insurance-quote-before-offer"). No numbers.
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
const CLUB = ph.aerial("seasons-at-prince-creek-west-clubhouse-from-above", "The clubhouse, its outdoor pool and the tennis courts, from above.", { closeUp: true });
const BOATS = ph.aerial("murrells-inlet-boats", "Fishing boats at a marina in Murrells Inlet.", { closeUp: true, alt: "White fishing boats tied up at a marina on calm water in Murrells Inlet, South Carolina" });
const OVER = ph.aerial("seasons-at-prince-creek-west-from-above", "Seasons at Prince Creek West from above. The orange line is the edge of the neighborhood.");
const STREET = ph.aerial("seasons-at-prince-creek-west-homes-from-above", "Homes around a pond in Seasons at Prince Creek West, from above.", { closeUp: true });
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
  /* The overview aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "What life is like in Seasons at Prince Creek West near Murrells Inlet: two pools, visits from grandchildren, the homes, the 55+ rule and the costs.",
  ogTitle: "Living in Seasons at Prince Creek West, Murrells Inlet: two pools, family visits and the 55+ rule",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "What is it like to live in Seasons at Prince Creek West in Murrells Inlet?",
  h1em: "A 55+ neighborhood where grandchildren can visit.",
  sub: "Seasons at Prince Creek West is a 55+ neighborhood near Murrells Inlet, with homes on curving streets around ponds.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 10 minutes" },
    { icon: "grocery", label: "Publix", text: "About 5 minutes" },
    { icon: "hospital", label: "Hospital", text: "About 8 minutes" },
    { icon: "pool", label: "Pools", text: "Indoor and outdoor" },
  ]),
  heroCta: { label: "Talk to an agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Seasons at Prince Creek West is near Murrells Inlet, south of Myrtle Beach. Owners share a clubhouse with an indoor pool, an outdoor pool and a fitness center, plus tennis and bocce.",
    "At least one person in each home must be 55 or older and live there six months of the year or more. Grandchildren under 18 can come to stay for up to 60 days a year.",
  ],
  sections: [
    { h2: "What can you do at Seasons at Prince Creek West?", html:
      ph.css() +
      h.p("In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center.") +
      ph.cards([
        { illustration: "indoor-pool", label: "Indoor pool", text: "Swim in the cooler months" },
        { illustration: "outdoor-pool", label: "Outdoor pool", text: "Swim outside in the warm months" },
        { illustration: "pickleball", label: "Tennis courts", text: "Play tennis outside" },
        { illustration: "bocce", label: "Bocce", text: "A court for bocce games" },
      ], { cols: 4 }) +
      h.p("The clubhouse has the fitness center. The outdoor pool and the tennis courts are right beside it.") +
      CLUB },

    { h2: "Where is Seasons, and what is Murrells Inlet like?", html:
      h.p("Seasons is in the Murrells Inlet area, about 10 minutes by car from the beach in Garden City without traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      M.where +
      h.p("A Publix grocery store is about 5 minutes away, and Tidelands Waccamaw Community Hospital is about 8.") +
      h.p("The airport is about 25 minutes away by car.") +
      h.p("Murrells Inlet is on a salt marsh, with fishing boats and marinas. The MarshWalk, a boardwalk along the marsh, is about 10 minutes from Seasons.") +
      BOATS },

    { h2: "What are the homes like in Seasons?", html:
      h.p("Most homes in Seasons are on one level, with 3 bedrooms and about 1,700 to 2,500 square feet. They were built from 2006 to 2016, so every home here is a resale now.") +
      h.p("Seasons has about 440 homes on curving streets around ponds. More than half of the land is shared by the owners, with ponds and woods.") +
      OVER +
      STREET },

    { h2: "Can you live in Seasons part of the year?", html: (bg) =>
      h.p(`Yes, if Seasons is your main home. Under the ${h.ext(CHARTER, "homeowners association (HOA) rules")}, the resident who is 55 or older must live there at least six months a year.`) +
      h.p("No one under 18 can live there, though grandchildren can come to stay.") +
      h.cta("Read the Seasons age rules with an agent.", "An agent at Chapter3 can read the age and visitor rules with you before you offer.", "Talk to an agent", "/contact/", bg) },

    { h2: "What does it cost to live in Seasons?", html:
      h.p("Seasons homes usually sell for about $500,000. The HOA fee is about $340 a month, and it includes internet, weekly trash pickup and lawn care.") +
      h.ul([
        "<strong>One bill.</strong> Your HOA bill covers Seasons and the larger Prince Creek West area.",
        "<strong>When you buy,</strong> you pay the HOA two months of dues as a one-time fee. There is also a transfer fee of no more than $1,250 on a home at that price.",
        "<strong>Property tax.</strong> If you live in the home, the tax on a home at that price is about $2,000 a year. Seasons is outside any town, so there is no city tax.",
      ]) +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home near Murrells Inlet")}.`) },

    { h2: "What are the house rules in Seasons?", html: (bg) =>
      h.p("Pets, fences, renting and golf carts are allowed, each with a rule.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
        { icon: "gate", label: "Fences", text: "Yes, once the neighborhood's design board approves it. It must line up with the sides of the house." },
        { icon: "golf", label: "Golf carts", text: "Park them in your garage, not on the street." },
      ], { bg, min: "13rem" }) },

    { h2: "How does Seasons compare with other 55+ neighborhoods?", html: () =>
      h.p("Seasons is about 10 minutes from the beach, and its clubhouse has both an indoor and an outdoor pool. Like Myrtle Trace, it is outside any city, so owners pay no city tax.") +
      compareTable(SELF) +
      `<div style="border-left:3px solid var(--brass);padding:.2rem 0 .2rem 1.2rem;margin:1.6rem 0 1.2rem;max-width:720px">` +
      h.p("An agent at Chapter3 helped clients who owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold that house and bought in Seasons, a few minutes away.") +
      `</div>` },

    { h2: "Will a Seasons lot need flood insurance?", html: (bg) =>
      h.p(`Most will not. The middle of every lot is outside the high-risk flood zone on ${h.ext(FEMA, "the federal flood map")}, but on 45 lots one corner touches it.`) +
      h.p("On those lots, if the house itself is in the zone, your lender will require flood insurance. Outside the zone, a flood policy here usually costs about $600 a year.") +
      h.p(`Seasons is also outside the coastal area served by the state's backup insurer for wind. That insurer sells hurricane coverage where it is hard to buy. Read ${h.a("/buyers/coastal-insurance/", "what flood and wind insurance cost near Myrtle Beach")}.`) +
      story([
        "<strong>Example:</strong> Carol and Jim are moving from Buffalo. A Chapter3 agent is helping them find a house in Seasons that backs onto the woods. They find one they like and plan to make an offer that night.",
        "Before they do, the agent pulls up that lot on the federal flood map and sees one corner inside the high-risk flood zone. If the house itself is in that zone, their lender will require flood insurance. That is a yearly cost they have not planned for.",
        "The agent gets them a flood insurance quote on that exact house the same afternoon. Carol and Jim write their offer knowing what flood insurance on that house will cost each year.",
      ], "If the lot you like is one of the 45 that touch the flood zone, get a flood quote on the house before you offer.", bg) +
      h.cta("Get a flood quote on the lot you like.", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "Get a flood quote", "/contact/", bg) },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "How much is the HOA fee in Seasons at Prince Creek West?", a: "The HOA fee is about $340 a month. It includes internet, weekly trash pickup and lawn care." },
    { q: "Is Seasons at Prince Creek West part of Prince Creek?", a: "Yes. Seasons is one neighborhood inside the larger Prince Creek West area near Murrells Inlet. Its HOA bill includes the fees for that larger area." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital in Murrells Inlet, about 8 minutes away by car from the clubhouse." },
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a resident 55 or older also lives in the home. No one under 18 can live there." },
    { q: "How far is Seasons at Prince Creek West from the beach?", a: "About 10 minutes by car to the nearest public beach access, in Garden City. The Myrtle Beach Boardwalk is about 25 minutes away." },
  ],
  sources: [
    { name: "HOA rules", href: CHARTER },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "For education, not legal advice. The HOA fee and the home sizes are from recent MLS listings. Drive times are no-traffic estimates from OpenStreetMap. The flood cost is the middle FEMA policy price in ZIP code 29576.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Know the Seasons rules before you make an offer.", p: "Call about the Seasons home you like. An agent at Chapter3 reads the age, lease and pet rules with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call an agent", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons at Prince Creek West HOA fee, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
