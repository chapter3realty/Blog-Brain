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
 *            Row 85 (verified 2026-10-07) replaces row 77: Publix on Highway 707, about
 *            5 minutes. The page does not call it the closest store.
 *   Life:    row 56 (clubhouse, indoor and outdoor pools, fitness center, tennis, bocce),
 *            row 37 (one bill covers the larger Prince Creek West associations). The 43-acre
 *            park (row 30) is cut: no row says owners may use it (review 3).
 *   Homes:   rows 83 (the builder's 2013 release: open, one-story floor plans; past
 *            tense, not a fact about every home today) and 84 (the builder's 2016 site:
 *            10 floor plans, some with an optional bonus room). Row 19 (444 lots) is
 *            "room for about 440 homes".
 *   Rules:   the association's posted 2017 copy of its rules: rows 5 to 7 (age), 42 and 43
 *            (leases), 45 (pets), 46 (fences), 47 (golf carts). Rules recorded since are
 *            not online (row 12).
 *   Money:   row 73 (middle sale $499,000; "about $500,000"), rows 39 and 40 (two months
 *            of dues; road and park transfer fee), v4 tax result ($1,964 on $500,000 as a
 *            main home, 2025 levy, row 68) plus the county stormwater fee ($89.40, Myrtle
 *            Trace row 73, unincorporated Horry County): "about $2,000 at last year's rates".
 *            Row 40's fee is "a quarter of 1 percent of the price, up to a cap" (no $480). No dues amount is verified.
 *   Flood:   row 59 (every lot center outside the high-risk zone; 45 lots touch it at a
 *            corner), row 71 (middle ZIP code policy $574 with fees; "about $600"),
 *            row 82 (federal purchase rule, verified 2026-10-07).
 * Photos: data/photos.json (Murrells Inlet boats, Huntington Beach State Park).
 * Story:  stories.json "blackmoor-to-seasons" (no names, Blackmoor by its property facts,
 *         no added reasons), "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 *         The example (Joan and Walt) is version 4's, with three numbers.
 * Rules:  the year of the posted copy (2017) is said once, where the rules first appear.
 * Review 3 fixes applied 2026-10-07 (REVIEW-3.md, BUYER-READ-v5-seasons-at-prince-creek-west.md).
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
    "Seasons at Prince Creek West has room for about 440 homes, near Murrells Inlet and south of Myrtle Beach. Every home where someone lives must have a resident 55 or older.",
    "Owners share a clubhouse, an indoor pool, an outdoor pool, a fitness center, tennis and bocce. The beach in Garden City is about 10 minutes away by car.",
  ],
  sections: [
    { html: (bg) => atAGlance([
        { icon: "beach", label: "Beach", text: "A drive of about 10 minutes" },
        { icon: "grocery", label: "Groceries", text: "Publix on Highway 707, about 5 minutes away" },
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
      h.p("Seasons has a Murrells Inlet address but is not inside any city, so there is no city tax.") },

    { h2: "What are the homes like in Seasons at Prince Creek West?", html: (bg) =>
      h.p("When the builder was selling homes here, it described open, one-story floor plans.") +
      h.p("In 2016, the builder's website listed 10 floor plans, some with an optional extra room. The homes for sale today vary in size and layout.") +
      h.cta("Want a home in Seasons at Prince Creek West?", "Tell us what you need in a home. One of our agents will read the homeowners association (HOA) rules with you before you offer.", "Talk to a specialized agent", "/contact/", bg) },

    { h2: "What is there to do in Seasons at Prince Creek West?", html: (bg) =>
      h.p("In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center.") +
      atAGlance([
        { icon: "indoor-pool", label: "Indoor pool", text: "Swim when it is too cold outside" },
        { icon: "fitness", label: "Fitness center", text: "Work out close to home" },
        { icon: "tennis", label: "Tennis", text: "Play without leaving the neighborhood" },
        { icon: "bocce", label: "Bocce", text: "A lawn game to play with your neighbors" },
      ], { bg }) },

    { h2: "What is the area around Seasons at Prince Creek West like?", html:
      h.p("Murrells Inlet is a waterfront community on a salt marsh, with fishing boats, marinas and a boardwalk along the water. Huntington Beach State Park is just south of it. The photos show the area nearby, not Seasons.") +
      photo("murrells-inlet-boats.webp", "Fishing boats tied up at a marina on the water in Murrells Inlet, South Carolina",
        "Fishing boats at a marina in Murrells Inlet.") +
      photo("huntington-beach-state-park-sunset.webp", "Sunset over the salt marsh at Huntington Beach State Park, south of Murrells Inlet",
        "Sunset over the marsh at Huntington Beach State Park.") },

    { h2: "Who can live in Seasons at Prince Creek West?", html:
      h.p("Every home in Seasons where someone lives must have a resident 55 or older. That resident must live there at least six months of each year.") +
      h.p("No one under 18 can live there, but younger visitors, such as grandchildren, can stay up to 60 days a year.") +
      h.p(`The ${h.ext(CHARTER, "copy of the rules")} we could read is from 2017. The HOA has newer rules that are not online, and we read them with you before you buy.`) },

    { h2: "How much does it cost to live in Seasons at Prince Creek West?", html:
      h.p("Seasons homes usually sell for about $500,000.") +
      h.p("Your HOA bill includes your share for the larger Prince Creek West area, so you get one bill.") +
      h.p("When you buy, you pay the HOA two months of dues as a one-time fee. A second one-time fee goes to another Prince Creek West association. It is a quarter of 1 percent of the price, up to a cap.") +
      h.p("On a home at that price that you live in, property tax is about $2,000 a year. That figure uses last year's rates and includes the county stormwater fee.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home near Murrells Inlet")}.`) },

    { h2: "Do you need flood insurance in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Usually not, because the center of every lot in Seasons is outside the high-risk flood zone.") +
      h.p(`Under the ${h.ext(LAW, "federal flood insurance law")}, a lender has to require flood insurance only when the home itself is in that zone. That zone is on ${h.ext(FEMA, "the government's flood map")}.`) +
      h.p("Outside the high-risk zone, a flood policy on a house in the Murrells Inlet area usually costs about $600 a year.") +
      h.p("45 lots have a corner in the high-risk zone. If you like a home on one of them, get a flood quote before you offer.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what flood zones near Myrtle Beach mean for insurance")}.`) +
      h.cta("Want the flood cost before you offer?", "Tell us the home you are looking at. One of our agents can help you get an insurance quote on it before you offer.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "Can you have pets, a golf cart or a fence in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Yes to pets, golf carts, fences and renting, each with a rule, under the posted rules.") +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes, up to two. Keep them on a leash outside unless they are in a fenced yard." },
        { icon: "golf-cart", label: "Golf carts", text: "Yes. Park them in your garage, never on the street." },
        { icon: "gate", label: "Fences", text: "Yes, if the neighborhood's design committee approves it. A fence must be as wide as the house." },
        { icon: "key", label: "Renting it out", text: "Yes, with a written lease of at least a year." },
      ], { bg }) +
      h.p("Many HOAs near Myrtle Beach do not allow renting a house at all. Our agents read each HOA's documents for that rule.") },

    { h2: "What do moves to Seasons at Prince Creek West look like?", html:
      h.p("An agent at Chapter3 helped a couple who owned a house in Blackmoor. It is a golf neighborhood in Murrells Inlet with no age rule. They sold it and bought in Seasons, a few minutes away.") +
      h.p("A buyer may move a few miles to a neighborhood built for how they live now.") +
      h.p("<strong>Example:</strong> Joan is 70 and Walt is 64. They are moving from Richmond, Virginia, with up to $500,000 to spend.") +
      h.p("They want an indoor pool for winter swimming, tennis, and room for the grandchildren to visit. Their first pick is on one of the lots with a corner in the high-risk flood zone.") +
      h.p("Before they offer, an agent at Chapter3 gets them an insurance quote on that home. With the cost known, they decide to buy it.") },

    { h2: "How does Seasons at Prince Creek West compare with other 55+ neighborhoods?", html:
      h.p("Seasons at Prince Creek West and Myrtle Trace are both outside any city, and both Del Webb neighborhoods are inside a city.") +
      compareTable(SELF) },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a resident 55 or older also lives in the home. No one under 18 can live there." },
    { q: "What amenities does Seasons at Prince Creek West have?", a: "Owners share a clubhouse with a fitness center, an indoor pool, an outdoor pool, and places to play tennis and bocce." },
    { q: "Can you rent out a home in Seasons at Prince Creek West?", a: "Yes, with a written lease of at least one year. Each lease must say that the homes are for people 55 or older." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital in Murrells Inlet, about 8 minutes away by car from the clubhouse." },
    { q: "How many homes are in Seasons at Prince Creek West?", a: "Seasons at Prince Creek West has room for about 440 homes, near Murrells Inlet in Horry County." },
  ],
  sources: [
    { name: "Posted 2017 copy of the rules", href: CHARTER },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
    { name: "Federal flood insurance law", href: LAW },
  ],
  sourcesNote: "For education, not legal advice. Drive times are no-traffic estimates from OpenStreetMap. The flood cost is the middle FEMA policy price in ZIP code 29576.",
  bottomCta: { h2: "Want help reading the Seasons rules before you offer?", p: "Call about the Seasons home you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call about Seasons", href: TEL },
  keywords: "Seasons at Prince Creek West, living in Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
