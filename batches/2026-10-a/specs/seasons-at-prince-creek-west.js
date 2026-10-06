/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - whether Seasons at
 * Prince Creek West is a 55+ community, what life there offers, and the fees,
 * tax, flood zones, flood insurance and distances that go with it.
 *
 * Rewritten 2026-10-06 for the owner's buyer-first lessons (voice/RULES.md,
 * class BUYER): the answer and the good news first, plain words (no "charter",
 * "founder", "assessment", "legal residence"), sources in a few links and the
 * sources line, and results instead of tax arithmetic. The gate is left out
 * (owner, 2026-10-06: "i dont know if the gate operates").
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md, PLAN.md (owner answers)
 * Facts:  Blog-Brain/batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md
 *         (verified rows only; wrong rows 22, 27, 31, 35, 36, 48 and unverifiable
 *         rows 9, 24, 32 to 34, 51, 55 are not used: no manager named, no
 *         "one-story", no lawn care by the association, no "$480" as today's
 *         cap, no "33 parking spaces", no gatehouse). Golf cart state law is left
 *         out (the old permit statute was repealed in 2025; NMB ledger row 48).
 *         Flood insurance: rows 70 to 72, FEMA policy data for ZIP code 29576
 *         and Zone X, not Seasons alone.
 * Rules:  the age, lease and pet terms come from the association's posted 2017
 *         copy of its charter; rules recorded since 2017 are not online.
 * Tax:    district 610's 2025 levy, 207.3 mills (row 68), and data/relocating/tax-engine.js.
 *         Results only: $1,767.60 on $450,000 as a primary home, $1,571.20 with
 *         the homestead exemption, $5,597.10 as a second home. Stormwater fee:
 *         the county's utility-fee page (Myrtle Trace ledger row 73).
 * Story:  stories.json "blackmoor-to-seasons" (owner confirmed 2026-10-06; no
 *         names, Blackmoor by its property facts only, no added reasons),
 *         "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const TEL = "tel:+18543332135";

/* The comparison table shared by the four 55+ pages. One data file feeds all
   four, so each cell has one source; the file names the ledger rows. Each page
   links the other three in the first column. */
const COMPARE = require("../data/55-plus-communities.json");
const compareTable = () => h.table(COMPARE.head, COMPARE.rows.map(r =>
  [r.url === SELF ? r.cells[0] : h.a(r.url, r.cells[0]), ...r.cells.slice(1)]));

/* Primary sources, opened by the researcher and re-opened by the verifier. The
   charter is the association's posted replica, the same file the verifier read. */
const CHARTER = "https://www.seasons55.com/editor_upload/File/Community%20Management/Policies%20%26%20Rules/communitycharter2.pdf";
/* Pages a person can read: FEMA's Flood Map Service Center search for the amenity
   parcel's address, and Medicare's Care Compare page for Tidelands Waccamaw
   (CMS 420098). The NFHL and CMS queries the verifier ran stay in the ledger
   (rows 58 to 60 and 65). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=130%20Grand%20Cypress%20Way%2C%20Murrells%20Inlet%2C%20SC%2029576";
const CMS = "https://www.medicare.gov/care-compare/details/hospital/420098/";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";
/* The county's own stormwater fee page (Myrtle Trace ledger row 73). */
const STORMWATER = "https://www.horrycountysc.gov/departments/stormwater/major-initiatives/utility-fee/";

/* Miles by road from 130 Grand Cypress Way, on the amenity parcel (rows 64 to 67). */
const DRIVES = [
  ["Tidelands Waccamaw Community Hospital", 4.0],
  ["Atlantic Avenue beach access, Garden City", 6.0],
  ["Myrtle Beach International Airport", 15.7],
  ["Grand Strand Medical Center", 21.0],
];

const driveChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 14, rowH = 62, barMax = 300, max = Math.max(...DRIVES.map(d => d[1]));
  const rows = DRIVES.map(([name, mi], i) => {
    const y = top + i * rowH, w = Math.max(4, Math.round(mi / max * barMax));
    return `<text x="12" y="${y + 18}" ${F} font-size="16" fill="#1c2028">${name}</text>`
      + `<rect x="12" y="${y + 27}" width="${w}" height="20" fill="#1c2028"/>`
      + `<text x="${12 + w + 8}" y="${y + 43}" ${F} font-size="16" font-weight="700" fill="#91592b">${mi.toFixed(1)} mi</text>`;
  }).join("");
  const label = "Miles by road from 130 Grand Cypress Way in Seasons at Prince Creek West: " + DRIVES.map(([n, mi]) => `${n} ${mi.toFixed(1)}`).join(", ") + ".";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + DRIVES.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

const FACTS = [
  ["Where", "Unincorporated Horry County, with a Murrells Inlet mailing address"],
  ["Homesites", "444"],
  ["Amenities", "Clubhouse, indoor and outdoor pools, fitness center, tennis and bocce (2024)"],
  ["Who can live there", "One permanent resident 55 or older in each occupied home; no one under 18"],
  ["Visitors under 18", "Up to 60 days in any 12 months"],
  ["Shortest lease", "One year, in writing"],
  ["Pets", "Two per home"],
  ["One-time fee at closing", "Two months of dues"],
  ["Flood zone", "Zone X at every homesite's center; 45 lots touch Zone AE"],
  ["Tidelands Waccamaw Community Hospital", "About 4.0 miles by road"],
];

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "Seasons at Prince Creek West near Murrells Inlet: the 55+ rule, the clubhouse and pools, one-year leases, closing fees, taxes, flood zones and flood insurance.",
  ogTitle: "Seasons at Prince Creek West, Murrells Inlet: the 55+ rule, life there, fees and flood zones",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "Is Seasons at Prince Creek West in Murrells Inlet a 55+ community?",
  h1em: "Yes, under its HOA rules.",
  sub: "Seasons at Prince Creek West requires a resident 55 or older in each occupied home and allows no residents under 18.",
  heroCta: { label: "Talk to an agent about Seasons", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Yes, every occupied home in Seasons at Prince Creek West must have a permanent resident 55 or older. No one under 18 can live there.",
    "The community has a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce. Tidelands Waccamaw Community Hospital is about 4 miles away.",
    "Leases must be in writing and last at least one year. On a $450,000 home you live in, the property tax is about $1,768 a year.",
  ],
  sections: [
    { h2: "What is life like in Seasons at Prince Creek West?", html: (bg) =>
      h.p("Owners in Seasons at Prince Creek West share a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce. The community has 444 homesites near Murrells Inlet.") +
      h.p("The association's website has a section for its lifestyle office and ambassadors, open to owners who sign in.") +
      h.p("In 2013, the builder listed a full-time activities director for the community. Its 2013 list also named a ballroom, a card room, an art studio, a billiards room and shuffleboard.") +
      h.p("Seasons is part of the larger Prince Creek West neighborhood. Your dues include the share for the road and park association there, which owns a 43-acre park.") +
      h.p("Clients of ours owned a single-family home in Blackmoor, the Gary Player golf community in Murrells Inlet, which has no age rule. They sold it and bought in Seasons, a few minutes up the road.") +
      h.table(["Fact", "Seasons at Prince Creek West"], FACTS) +
      h.cta("Want a home in Seasons at Prince Creek West?", "Tell us what you need in a home. One of our agents will read the association's rules with you before you offer.", "Have us read the Seasons rules with you", "/contact/", bg) },

    { h2: "Who can live in Seasons at Prince Creek West?", html:
      h.p("Every occupied home must have at least one permanent resident who is 55 or older. A permanent resident lives in the home at least six months of every year and treats it as their main home.") +
      h.p(`The ${h.ext(CHARTER, "association's posted 2017 copy of its rules")} requires a permanent resident who is "55 years of age or older."`) +
      h.ul([
        "No one under 18 can live in a home.",
        "A visitor under 18 can stay up to 60 days in any 12 months.",
      ]) +
      h.p("The association has recorded newer rules since 2017, the latest in December 2025. They are not online, so ask the association for them before you offer.") +
      h.p(`See ${h.a(HUB, "how 55+ communities on the Grand Strand differ from age-targeted ones")}.`) },

    { h2: "What do the Seasons at Prince Creek West dues include?", html:
      h.p("You pay the dues of Seasons and three other associations in one bill. They are the Prince Creek master association, the road and park association and the Highway 17 connector road association.") +
      h.p("The board can add, change or cancel shared services such as cable, internet and home monitoring. Ask for the 2026 budget and the current monthly dues before you offer.") },

    { h2: "What does a buyer pay at closing in Seasons at Prince Creek West?", html:
      h.p("At closing, a buyer pays the association two months of dues as a one-time fee, which the board can change.") +
      h.p("The road and park association also charges a transfer fee of 0.25 percent of the price on each resale. The seller and the buyer are both responsible for it. The 2017 rules copy says the fee may not exceed $480, adjusted over time.") +
      h.p("The Seasons board can also add its own transfer fee. Ask the association for its written statement of the dues, fees and any balance owed before you sign.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "whether South Carolina allows HOA transfer fees")}.`) },

    { h2: "Can you rent out a home in Seasons at Prince Creek West?", html:
      h.p("Yes, with a written lease of at least one year. Each lease must state, in prominent type, that the homes are for people 55 or older.") +
      h.p("A tenant household that breaks the age rule is in default under the lease. Timesharing a home is not allowed unless the board and the developer approve it.") +
      h.p("Our agents read the HOA documents for any rule against a buyer's plan to rent.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "when an HOA can stop an owner from renting")}.`) },

    { h2: "What other rules apply in Seasons at Prince Creek West?", html:
      h.p("You can have up to two household pets, on a leash outside unless they are in a fenced area.") +
      h.ul([
        "Fences need the architectural board's approval and must match the community's style.",
        "Golf carts must be parked in an enclosed garage, not on the street.",
      ]) +
      h.p("The association recorded parking regulations in 2022. Their text is not online, so ask for them if you own a golf cart.") },

    { h2: "What will the property tax be on a Seasons at Prince Creek West home?", html:
      h.p("On a $450,000 home you live in, the 2025 property tax in Seasons is about $1,768 a year.") +
      h.p("Seasons is outside any city, so there is no city tax. At 65, after a full year living in South Carolina, the homestead exemption saves about $196 a year on this home.") +
      h.p(`Each owner in unincorporated Horry County also pays a county stormwater fee with the property tax. For a single-family home, the county's ${h.ext(STORMWATER, "utility-fee page")} lists $89.40 a year.`) +
      h.p("<strong>Example:</strong> Joan and Walt are moving from Richmond, Virginia, with up to $450,000 to spend. Joan is 70, Walt is 64, and they plan to live in Seasons all year.") +
      h.p("They buy a resale home for $450,000. At closing they pay two months of dues. The road and park transfer fee on their price is $1,125, or the cap if that is lower.") +
      h.p("Their property tax is about $1,768 a year, and about $1,571 once Joan claims the homestead exemption. As a second home, the same house would owe about $5,597.") +
      h.p(`Try your own price in the ${h.a("/buyers/property-taxes/", "Horry County property tax calculator")}.`) },

    { h2: "Is Seasons at Prince Creek West in a flood zone?", html: (bg) =>
      h.p(`The center of every Seasons homesite is in FEMA flood Zone X, the area of minimal flood hazard. ${h.ext(FEMA, "FEMA's map")} for Seasons took effect in December 2021.`) +
      h.p("At least one corner of 45 lots is inside Zone AE, a higher-risk flood zone. Those lots are 16 to 20, 22, 23, 25 to 28, 101 to 121, 201, 307 to 315, 318, 319 and 386.") +
      h.p("In 2011, FEMA issued a letter that took Phase 2 lots 306 to 314 out of the mapped flood area. If the home is on one of those lots, ask the seller for a copy.") +
      h.p(`In ZIP code 29576, flood policies on single-family Zone X homes cost a median of $574 a year, fees included. Half cost between $497 and $732. Those policies began from June 2025 to May 2026, across the whole ZIP code.`) +
      h.p("Get a flood insurance quote before you offer on any of the 45 lots.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what Myrtle Beach flood zones mean for insurance")}.`) +
      h.p(`Every lot is more than 2 miles west of Bypass 17. Seasons is outside the coastal area where the ${h.ext(WINDLAW, "state's wind and hail insurance pool")} sells coverage.`) +
      h.cta("Want the flood and wind costs before you offer?", "Tell us the lot number. One of our agents can get you an insurance quote on that home first.", "Have us get you an insurance quote", "/contact/", bg) },

    { h2: "How far is Seasons at Prince Creek West from the beach, the hospital and the airport?", html:
      h.p("The nearest public beach access is Horry County's Atlantic Avenue boardwalk access in Garden City, about 6.0 miles by road from 130 Grand Cypress Way.") +
      h.figure(driveChart(), "Miles by road from the clubhouse at 130 Grand Cypress Way, with no traffic.") +
      h.ul([
        `${h.ext(CMS, "Tidelands Waccamaw Community Hospital")}, at 4070 Hwy 17 in Murrells Inlet, is about 4.0 miles away.`,
        "Grand Strand Medical Center, at 809 82nd Parkway in Myrtle Beach, is about 21 miles away.",
        "Myrtle Beach International Airport, at 1100 Jetport Road, is about 15.7 miles away.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospital serves each part of the Grand Strand")}.`) },

    { h2: "How does Seasons at Prince Creek West compare with three other 55+ communities?", html:
      h.p("Seasons at Prince Creek West and Myrtle Trace are in unincorporated Horry County, and both Del Webb communities are inside city limits.") +
      compareTable() },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a permanent resident 55 or older also lives in the home. No one under 18 can live there, and a visitor under 18 can stay up to 60 days in any 12 months." },
    { q: "What amenities does Seasons at Prince Creek West have?", a: "In 2024 the management company listed a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce. The association also has a lifestyle office and ambassadors." },
    { q: "Can you rent out a home in Seasons at Prince Creek West?", a: "Yes, with a written lease of at least one year. Each lease must state that the homes are for people 55 or older." },
    { q: "How many homes are in Seasons at Prince Creek West?", a: "There are 444 homesites, numbered 1 to 446 with two numbers unused. The community also has common areas and pump stations." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital, at 4070 Hwy 17 in Murrells Inlet. The drive is about 4.0 miles from the clubhouse at 130 Grand Cypress Way." },
  ],
  sources: [
    { name: "Posted 2017 copy of the rules", href: CHARTER },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "Horry County stormwater fee", href: STORMWATER },
    { name: "SC Code 38-75-310", href: WINDLAW },
  ],
  sourcesNote: "For education, not legal advice. Rules recorded after 2017 were not online when read. FEMA policy data gives the flood insurance figures. Distances by road are OpenStreetMap estimates.",
  bottomCta: { h2: "Read the Seasons rules before you offer.", p: "Call about the lot you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call about Seasons", href: TEL },
  keywords: "Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West HOA, Seasons at Prince Creek West amenities, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
