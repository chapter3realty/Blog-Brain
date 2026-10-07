/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - what it is like to live
 * in Seasons at Prince Creek West, a 55+ neighborhood near Murrells Inlet.
 *
 * Version 5, rewritten from the top 2026-10-07 for the owner's PLAIN rules
 * (voice/RULES.md class PLAIN, batches/2026-10-a/REWRITE-PLAIN.md): the life and the
 * place first, a map and icons in the first screens, round numbers, the date once (in
 * the byline), plain words, every question answered, price later and softly.
 *
 * Facts:  batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md, verified rows only.
 *   Place:   rows 16 and 17 (outside any town, Murrells Inlet address), 68 (no city levy),
 *            76 and 78 to 81 (drives: beach 10, hospital 8, airport 25, MarshWalk 10).
 *            Row 77 is wrong on the Publix street name only; the store is at Highway 707
 *            and its 5 minutes stand (verifier), so the map uses it, labelled "Publix".
 *   Life:    row 56 (clubhouse, indoor and outdoor pools, fitness center, tennis, bocce),
 *            rows 29, 30 and 37 (one bill; the road and park association owns a 43-acre park).
 *   Homes:   no verified row describes the houses (row 31 "one-story" is wrong; rows 32
 *            to 34 are unverifiable), so the page asks no question about them. Row 19
 *            (444 lots) is used for the size.
 *   Rules:   the association's posted 2017 copy of its rules: rows 5 to 7 (age), 42 and 43
 *            (leases), 45 (pets), 46 (fences), 47 (golf carts). Rules recorded since are
 *            not online (row 12).
 *   Money:   row 73 (middle sale $499,000; "about $500,000"), rows 39 and 40 (two months
 *            of dues; road and park transfer fee), v4 tax result ($1,964 on $500,000 as a
 *            main home, 2025 bills, row 68; "about $2,000"). No dues amount is verified.
 *   Flood:   row 59 (every lot center outside the high-risk zone; 45 lots touch it at a
 *            corner), row 71 (middle ZIP code policy $574 with fees; "about $600"),
 *            row 82 (federal purchase rule, PENDING verification: the one unverified
 *            sentence on the page).
 * Photos: data/photos.json (Murrells Inlet boats, Huntington Beach State Park).
 * Story:  stories.json "blackmoor-to-seasons" (no names, Blackmoor by its property facts,
 *         no added reasons), "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 *         The example (Joan and Walt) is version 4's, with three numbers.
 */
const { h } = require("../tools/mkpage.js");
const { mapBlock, photo, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. The
   charter is the association's posted replica, the same file the verifier read. */
const CHARTER = "https://www.seasons55.com/editor_upload/File/Community%20Management/Policies%20%26%20Rules/communitycharter2.pdf";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=130%20Grand%20Cypress%20Way%2C%20Murrells%20Inlet%2C%20SC%2029576";
const CMS = "https://www.medicare.gov/care-compare/details/hospital/420098/";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "What life is like in Seasons at Prince Creek West near Murrells Inlet: the clubhouse and pools, where it is on a map, the 55+ rule, pets, renting and the costs.",
  ogTitle: "Living in Seasons at Prince Creek West, Murrells Inlet: pools, tennis and the 55+ rule",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "What is it like to live in Seasons at Prince Creek West in Murrells Inlet?",
  h1em: "A 55+ neighborhood with two pools.",
  sub: "Seasons at Prince Creek West is a 55+ neighborhood near Murrells Inlet, about 10 minutes from the beach by car.",
  heroCta: { label: "Talk to an agent about Seasons", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Seasons at Prince Creek West is a neighborhood of about 440 home lots near Murrells Inlet, south of Myrtle Beach. Every home where someone lives must have a resident 55 or older.",
    "Owners share a clubhouse, an indoor pool, an outdoor pool, a fitness center, tennis and bocce. The beach in Garden City is about 10 minutes away by car.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "A drive of about 10 minutes" },
        { icon: "grocery", label: "Groceries", text: "Publix, about 5 minutes away" },
        { icon: "hospital", label: "Hospital", text: "Tidelands Waccamaw, about 8 minutes away" },
        { icon: "pool", label: "Pools", text: "One indoor and one outdoor" },
        { icon: "clubhouse", label: "Clubhouse", text: "With a fitness center" },
        { icon: "tennis", label: "Tennis and bocce", text: "Play both in the neighborhood" },
      ], { title: "Seasons at Prince Creek West at a glance", bg }) },

    { h2: "Where is Seasons at Prince Creek West?", html:
      h.p("Seasons at Prince Creek West is just outside Murrells Inlet, about 10 minutes inland from the beach by car.") +
      mapBlock("seasons-at-prince-creek-west", [
        { id: "beach_spcw", label: "Beach", kind: "beach" },
        { id: "groc_spcw", label: "Publix", kind: "grocery" },
        { id: "hosp_tidelands", label: "Hospital", kind: "hospital" },
        { id: "airport", label: "Airport", kind: "airport" },
        { id: "marshwalk", label: "MarshWalk", kind: "dock" },
      ], "Map of Seasons at Prince Creek West near Murrells Inlet, with how long each drive takes.") +
      h.p("The Murrells Inlet MarshWalk, a boardwalk along the marsh, is about 10 minutes away. The drive to the Myrtle Beach airport takes about 25 minutes.") +
      h.p("Seasons has a Murrells Inlet address but is not inside any town, so there is no city tax.") },

    { h2: "What is there to do in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Seasons at Prince Creek West has a clubhouse, two pools, a fitness center, tennis and bocce for its owners.") +
      atAGlance([
        { icon: "indoor-pool", label: "Indoor pool", text: "Swim when it is too cold outside" },
        { icon: "fitness", label: "Fitness center", text: "Work out close to home" },
        { icon: "tennis", label: "Tennis", text: "Play without leaving the neighborhood" },
        { icon: "bocce", label: "Bocce", text: "A lawn game to play with your neighbors" },
      ], { bg }) +
      h.p("In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center.") +
      h.p("Seasons is part of Prince Creek West, a larger group of neighborhoods. Part of your homeowners association (HOA) bill goes to the group that owns its 43-acre park.") +
      h.cta("Want a home in Seasons at Prince Creek West?", "Tell us what you need in a home. One of our agents will read the association's rules with you before you offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What is the area around Seasons at Prince Creek West like?", html:
      h.p("Murrells Inlet is a town on a salt marsh, with fishing boats, marinas and a boardwalk along the water. Huntington Beach State Park is just south of it.") +
      photo("murrells-inlet-boats.webp", "Fishing boats tied up at a marina on the water in Murrells Inlet, South Carolina",
        "Fishing boats at a marina in Murrells Inlet. The photo is of the town near Seasons, not of the neighborhood.") +
      photo("huntington-beach-state-park-sunset.webp", "Sunset over the salt marsh at Huntington Beach State Park, south of Murrells Inlet",
        "Sunset over the marsh at Huntington Beach State Park, south of Murrells Inlet. Seasons is not in this picture.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospital serves each part of the Grand Strand")}.`) },

    { h2: "Who can live in Seasons at Prince Creek West?", html:
      h.p(`At least one permanent resident of every lived-in home in Seasons must be 55 or older. The ${h.ext(CHARTER, "2017 posted copy of the rules")} says so.`) +
      h.p("A permanent resident lives in the home at least six months of each year. No one under 18 can live there.") +
      h.p("Grandchildren and other visitors under 18 can stay up to 60 days a year.") +
      h.p(`See ${h.a(HUB, "how 55+ communities on the Grand Strand differ from age-targeted ones")}.`) },

    { h2: "How much does it cost to live in Seasons at Prince Creek West?", html:
      h.p("Seasons homes usually sell for about $500,000.") +
      h.p("Your HOA bill also pays your share to the larger Prince Creek associations. You get one bill instead of several.") +
      h.p("When you buy, you pay the HOA two months of dues as a one-time fee. The road and park association also charges a one-time transfer fee on each sale.") +
      h.p("On a $500,000 home you live in, property tax is about $2,000 a year.") +
      h.p(`Try your own price in the ${h.a("/buyers/property-taxes/", "Horry County property tax calculator")}.`) },

    { h2: "Do you need flood insurance in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Usually not, because the middle of every lot in Seasons is outside the high-risk flood zone.") +
      h.p(`The ${h.ext(LAW, "federal flood insurance law")} makes a lender require flood insurance only when the home itself is in that zone.`) +
      h.p("A corner of 45 lots touches the high-risk zone. If you like a home on one of them, get a flood quote before you offer.") +
      h.p("A flood policy on a house in the Murrells Inlet area usually costs about $600 a year.") +
      h.p(`Look up the home on ${h.ext(FEMA, "FEMA's flood map")}, and read ${h.a("/buyers/coastal-insurance/", "what Myrtle Beach flood zones mean for insurance")}.`) +
      h.cta("Want the flood cost before you offer?", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "Can you have pets, a golf cart or a fence in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Yes to pets, golf carts, fences and renting, each with a rule, under the 2017 posted copy of the rules.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes, up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "golf-cart", label: "Golf carts", text: "Yes. Park them in your garage, never on the street." },
        { icon: "gate", label: "Fences", text: "Yes, if the architectural board approves it and it matches the neighborhood's style." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
      ], { bg }) +
      h.p("Many HOAs on the Grand Strand do not allow renting a house at all. Our agents read each HOA's documents for that rule.") +
      h.p("The association has recorded newer rules since 2017 that are not online. One of our agents reads them with you before you buy.") },

    { h2: "What do moves to Seasons at Prince Creek West look like?", html:
      h.p("Clients of ours owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold it and bought in Seasons, a few minutes away.") +
      h.p("<strong>Example:</strong> Joan is 70 and Walt is 64. They are moving from Richmond, Virginia, with up to $500,000 to spend.") +
      h.p("They want an indoor pool for winter swimming, tennis, and room for the grandchildren to visit. Their first pick is on one of the lots that touch the high-risk flood zone.") +
      h.p("Before they offer, an agent at Chapter3 gets them an insurance quote on that home. They buy it knowing what the insurance will cost.") },

    { h2: "How does Seasons at Prince Creek West compare with other 55+ neighborhoods?", html:
      h.p("Seasons at Prince Creek West and Myrtle Trace are both outside any town, and both Del Webb neighborhoods are inside a city.") +
      compareTable(SELF) },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a permanent resident 55 or older also lives in the home. No one under 18 can live there." },
    { q: "What amenities does Seasons at Prince Creek West have?", a: "A clubhouse, an indoor pool, an outdoor pool, a fitness center, tennis and bocce. Part of each HOA bill also goes to the group that owns a 43-acre park in Prince Creek West." },
    { q: "Can you rent out a home in Seasons at Prince Creek West?", a: "Yes, with a written lease of at least one year. Each lease must say that the homes are for people 55 or older." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital in Murrells Inlet, about 8 minutes away by car from the clubhouse." },
    { q: "How many homes are in Seasons at Prince Creek West?", a: "There are 444 home lots in Seasons at Prince Creek West, near Murrells Inlet in Horry County." },
  ],
  sources: [
    { name: "Posted 2017 copy of the rules", href: CHARTER },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "For education, not legal advice. Drive times are no-traffic estimates from OpenStreetMap. The flood cost is the middle FEMA policy price in ZIP code 29576.",
  bottomCta: { h2: "Read the Seasons rules before you offer.", p: "Call about the Seasons home you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call about Seasons", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
