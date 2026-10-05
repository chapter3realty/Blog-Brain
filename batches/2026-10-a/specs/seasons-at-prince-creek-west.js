/* /buyers/55-plus-communities/seasons-at-prince-creek-west/ - whether Seasons at
 * Prince Creek West is a 55+ community, what its charter requires, and the fees,
 * tax, flood zones and distances that go with it.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md
 * Facts:  Blog-Brain/batches/2026-10-a/facts/seasons-at-prince-creek-west-facts.md
 *         (verified rows only; wrong rows 22, 27, 31, 35, 36, 48 and unverifiable
 *         rows 9, 24, 32 to 34, 51, 55 are not used: no manager named, no
 *         "one-story", no lawn care by the association, no "$480" as today's cap,
 *         no "33 parking spaces", no gatehouse)
 * Rules:  charter terms come from the association's posted 2017 copy. The short
 *         answer and the 55+ section name that copy; elsewhere the page says
 *         "the charter" (review S18). Rules recorded since 2017 have not been read.
 * Tax:    district 610's 2025 levy, 207.3 mills, from the Treasurer's 2025 bill for
 *         the association's Common Area 1 parcel, PIN 46802030007 (row 68, review
 *         S1 and S5), and data/relocating/tax-engine.js. Stormwater fee: the
 *         county's utility-fee page, a county-wide fee (Myrtle Trace ledger row 73).
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 * Review: batches/2026-10-a/REVIEW.md, fixes S1 to S22 and the shared comparison
 *         table (data/55-plus-communities.json). S8's parking regulations rest on
 *         row 69 (the index entry only). S2's spouse and board-exception lines
 *         wait for a verified row.
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
   charter is the association's posted replica, the same file the verifier read
   at this path on seasons55.com. */
const CHARTER = "https://www.seasons55.com/editor_upload/File/Community%20Management/Policies%20%26%20Rules/communitycharter2.pdf";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
/* Pages a person can read: FEMA's Flood Map Service Center search for the amenity
   parcel's address, and Medicare's Care Compare page for Tidelands Waccamaw
   (CMS 420098). The NFHL and CMS queries the verifier ran stay in the ledger
   (rows 58 to 60 and 65). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=130%20Grand%20Cypress%20Way%2C%20Murrells%20Inlet%2C%20SC%2029576";
const CMS = "https://www.medicare.gov/care-compare/details/hospital/420098/";
const GOLFLAW = "https://www.scstatehouse.gov/code/t56c002.php";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";
/* The county's own stormwater fee page (Myrtle Trace ledger row 73). */
const STORMWATER = "https://www.horrycountysc.gov/departments/stormwater/major-initiatives/utility-fee/";

/* Builder deeds naming a Seasons lot, by year recorded (rows 21 and 23):
   [year, Levitt and Sons of Horry County LLC, MBSC Seasons LLC]. */
const DEEDS_BY_YEAR = [
  ["2006", 1, 0], ["2007", 74, 0], ["2008", 2, 0], ["2009", 1, 6], ["2010", 0, 59], ["2011", 0, 75],
  ["2012", 0, 50], ["2013", 0, 50], ["2014", 0, 44], ["2015", 0, 37], ["2016", 0, 19],
];

const deedChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 56, rowH = 34, x0 = 66, barMax = 300;
  const max = Math.max(...DEEDS_BY_YEAR.map(([, a, b]) => a + b));
  const legend = `<rect x="12" y="14" width="16" height="16" fill="#91592b"/><text x="34" y="27" ${F} font-size="16" fill="#1c2028">Levitt and Sons</text>`
    + `<rect x="200" y="14" width="16" height="16" fill="#1c2028"/><text x="222" y="27" ${F} font-size="16" fill="#1c2028">MBSC Seasons LLC</text>`;
  const rows = DEEDS_BY_YEAR.map(([yr, a, b], i) => {
    const y = top + i * rowH, wa = Math.round(a / max * barMax), wb = Math.round(b / max * barMax);
    const wTot = Math.max(3, wa + wb);
    return `<text x="12" y="${y + 17}" ${F} font-size="16" fill="#1c2028">${yr}</text>`
      + (wa ? `<rect x="${x0}" y="${y + 3}" width="${Math.max(3, wa)}" height="20" fill="#91592b"/>` : "")
      + (wb ? `<rect x="${x0 + wa}" y="${y + 3}" width="${wb}" height="20" fill="#1c2028"/>` : "")
      + `<text x="${x0 + wTot + 8}" y="${y + 18}" ${F} font-size="16" font-weight="700" fill="#91592b">${a + b}</text>`;
  }).join("");
  const label = "Builder deeds naming a Seasons at Prince Creek West lot, by year recorded: "
    + DEEDS_BY_YEAR.map(([yr, a, b]) => `${yr} ${a + b}`).join(", ")
    + ". Levitt and Sons of Horry County deeded lots from 2006 to 2009, and MBSC Seasons LLC from 2009 to 2016.";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + DEEDS_BY_YEAR.length * rowH + 6}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${legend}${rows}</svg>`;
};

const FACTS = [
  ["Location", "Unincorporated Horry County, with a Murrells Inlet mailing address"],
  ["Home lots", "444 on county records"],
  ["Charter", "Recorded December 2006, amended six times through January 2017"],
  ["Age rule", "One permanent occupant 55 or older in each occupied home"],
  ["Residents under 18", "Not allowed; visits of up to 60 days in any 12 months"],
  ["Minimum lease", "One year, in writing"],
  ["Pets", "Two per home"],
  ["Working capital at closing", "Two months of dues"],
  ["Road and park transfer fee", "0.25 percent of the price, up to an adjusted cap"],
  ["Flood zone", "Every lot center in Zone X; 45 lots touch Zone AE"],
  ["Wind pool coastal area", "Outside it, more than 2 miles west of Bypass 17"],
  ["Tax district", "610, at 207.3 mills in 2025"],
  ["Nearest hospital", "Tidelands Waccamaw Community Hospital, about 4.0 miles by road"],
  ["Nearest public beach access", "Atlantic Avenue boardwalk access in Garden City, about 6.0 miles by road"],
  ["Myrtle Beach International Airport", "About 15.7 miles by road"],
];

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Seasons at Prince Creek West, Murrells Inlet 55+ | Chapter3",
  description: "Seasons at Prince Creek West near Murrells Inlet: the charter's 55+ rule, the under-18 limit, one-year leases, closing fees, 444 lots, flood zones and the tax.",
  ogTitle: "Seasons at Prince Creek West, Murrells Inlet: the 55+ rule, leases, fees and flood zones",
  crumb: "Seasons at Prince Creek West",
  eyebrow: "Murrells Inlet, 55+",
  h1: "Is Seasons at Prince Creek West in Murrells Inlet a 55+ community?",
  h1em: "Yes, under its recorded rules.",
  sub: "Seasons at Prince Creek West's recorded rules require an occupant 55 or older in each occupied home, with no residents under 18.",
  heroCta: { label: "Talk to an agent about Seasons", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Yes, Seasons at Prince Creek West is a 55+ community under its charter, the main set of recorded rules. The charter requires a permanent occupant 55 or older in every occupied home.",
    "A permanent occupant lives in the home at least six months of every calendar year and treats it as their legal home.",
    "No one under 18 can live in a home, and a visitor under 18 can stay up to 60 days in any 12 months. These terms come from the association's posted 2017 copy of the charter.",
  ],
  sections: [
    { h2: "What is Seasons at Prince Creek West?", html:
      h.p("Seasons at Prince Creek West is a 55+ community of 444 home lots near Murrells Inlet, in unincorporated Horry County.") +
      h.p("Seasons' charter, its main set of rules, was recorded in December 2006 and amended six times through January 2017. The developer named in it, which the charter calls the founder, is Levitt and Sons of Horry County LLC.") +
      h.p(`Levitt deeded 77 lots to buyers from December 2006 to July 2009. The ${h.ext(DEEDS, "county deed index")} names 339 more lots that MBSC Seasons LLC deeded to buyers from October 2009 to December 2016.`) +
      h.figure(deedChart(), "Builder deeds that name a Seasons lot, by the year the deed was recorded, from the Horry County deed index.") +
      h.p("The county parcels that name Seasons total about 192 acres: 85.7 acres of home lots and 106.2 acres of common areas. The association's amenity parcel has the addresses 124, 130 and 136 Grand Cypress Way.") +
      h.p("Seasons is inside the larger Prince Creek West development. The homes are also subject to the Prince Creek master declaration and the Prince Creek West Road and Park Districts declaration.") +
      h.table(["Fact", "Seasons at Prince Creek West"], FACTS) },

    { h2: "What does the 55+ rule at Seasons at Prince Creek West require?", html:
      h.p("Every occupied home must always have at least one permanent occupant who is 55 or older.") +
      h.p(`The ${h.ext(CHARTER, "association's posted 2017 copy of the charter")} requires a permanent occupant who is "55 years of age or older."`) +
      h.p("The association calls that copy a modified, unofficial replica of the recorded charter with its amendments.") +
      h.p("The charter also states these terms:") +
      h.ul([
        "A permanent occupant must treat the home as a legal residence and live there at least six months of every calendar year.",
        "No one under 18 can live in a home.",
        "A visitor under 18 can stay up to 60 days in any 12 months.",
      ]) +
      h.p("The association has recorded newer rules since 2017, the latest in December 2025, and a garbage-can resolution in May 2026. Ask the association for those rules before you offer.") +
      h.p(`See ${h.a(HUB, "how 55+ communities on the Grand Strand differ from age-targeted ones")}.`) },

    { h2: "What amenities does Seasons at Prince Creek West have?", html: (bg) =>
      h.p("In January 2024, the association's management company listed a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce.") +
      h.p("Dock Street Communities' 2013 press release listed these amenities:") +
      h.ul([
        "a sports park with tennis courts, bocce and shuffleboard",
        "a fitness center with an indoor pool",
        "an outdoor pool",
        "a clubhouse with a ballroom, a card room, an art studio and a billiards room",
        "a full-time Activities Director",
        "lighted walking and biking paths",
      ]) +
      h.cta("Want a home in Seasons at Prince Creek West?", "Tell us what you need in a home. One of our agents will read the charter and the newer rules with you before you offer.", "Have us read the charter with you", "/contact/", bg) },

    { h2: "Can you rent out a home in Seasons at Prince Creek West?", html:
      h.p("Yes, under a written lease of at least one year, per the charter.") +
      h.p("Each lease must state, in prominent type, that the homes are for people 55 or older. A tenant household that breaks the age rule is in default under the lease.") +
      h.p("The charter does not allow timesharing a home unless the board and the founder approve it.") +
      h.p("Our agents read the HOA documents for any rule against a buyer's plan to rent.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "when an HOA can stop an owner from renting")}.`) },

    { h2: "What does a buyer pay at closing in Seasons at Prince Creek West?", html:
      h.p("At closing, a buyer pays the association a working capital contribution equal to two months of dues. The charter calls the dues the general assessment. The board can raise or lower the contribution.") +
      h.p("The Prince Creek West Road and Park Districts Association charges a transfer fee of 0.25 percent of the price on each resale. The seller and the buyer are both responsible for paying it. The 2017 charter copy says the fee may not exceed $480, adjusted under the road and park declaration.") +
      h.p("The charter also allows the Seasons board to add its own transfer fee.") +
      h.p("A resale certificate is the association's written statement of the dues, fees and any balance owed on a home. Ask for it, and for the road and park association's current fee cap, before you sign.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "whether South Carolina allows HOA transfer fees")}.`) },

    { h2: "What do the Seasons at Prince Creek West dues include?", html:
      h.p("Under the charter, the Seasons assessment includes the assessments of three other associations, so an owner gets one bill for all four.") +
      h.ul(["the Prince Creek master association", "the Prince Creek West Road and Park Districts Association", "the Highway 17 Connector Road Maintenance Association"]) +
      h.p("The charter allows the board to add, change or cancel bundled services such as cable, internet and home monitoring. The association's current budget shows what the dues pay for. Ask for the 2026 budget and the current monthly assessment before you offer.") },

    { h2: "Is Seasons at Prince Creek West gated?", html:
      h.p("Dock Street Communities called Seasons a gated community in a 2013 press release.") +
      h.p("The charter allows the association to maintain and operate entry gates that control vehicle access. Ask the association how the gate works today.") },

    { h2: "What other rules apply at Seasons at Prince Creek West?", html:
      h.p("The charter allows no more than two household pets per home.") +
      h.ul([
        "Pets must be on a leash outside, unless they are in a fenced area.",
        "Fences need approval from the Architectural Control Board, and every fence must be uniform throughout the community.",
        "Golf carts must be parked in an enclosed garage, not on a street.",
      ]) +
      h.p("The county deed index lists parking regulations the association recorded in 2022. The index does not show what they say. Ask the association for them if you keep a golf cart.") +
      h.p(`On a public road, a golf cart needs a ${h.ext(GOLFLAW, "DMV permit decal and registration")} under state law. Unless a local ordinance says otherwise, a cart can be driven only in daylight, on secondary roads posted 35 mph or less. The cart must also stay within four miles of the address on its registration, or of a gated community's entrance.`) },

    { h2: "What will the property tax be on a Seasons at Prince Creek West home?", html:
      h.p("On a $450,000 primary residence in Seasons, the 2025 property tax is about $1,768 a year.") +
      h.p("Horry County's term for an approved primary residence is a legal residence. Assessed value is 4 percent of value for a legal residence and 6 percent for a second home. A mill equals $1 of tax for every $1,000 of assessed value.") +
      h.p("County records list all 464 Seasons parcels in tax district 610, in unincorporated Horry County. The county Treasurer's 2025 bill for the association's Common Area 1 parcel shows a district 610 levy of 207.3 mills and no city levy.") +
      h.p(`Each owner in unincorporated Horry County also pays a county stormwater fee with the property tax. For a single-family home, the county's ${h.ext(STORMWATER, "utility-fee page")} lists $89.40 a year.`) +
      h.p("A legal residence is not charged the 109.1 school operating mills. The homestead exemption applies to an owner 65 or older after one full calendar year of South Carolina residency. Under it, the county taxes the home's value minus $50,000.") +
      h.p("<strong>Example:</strong> Joan and Walt are moving from Richmond, Virginia, with up to $450,000 to spend. Joan is 70, Walt is 64, and they plan to live in Seasons all year. They buy a resale home for $450,000 and apply for the 4 percent rate.") +
      h.ul([
        "<strong>Assessed value:</strong> $450,000 × 4 percent = $18,000.",
        "<strong>2025 tax:</strong> $18,000 × (207.3 − 109.1) ÷ 1,000 = $1,767.60 a year.",
        "<strong>Road and park transfer fee:</strong> 0.25 percent × $450,000 = $1,125, or the cap if that is lower. The charter names a $480 cap, adjusted under the road and park declaration.",
        "<strong>Working capital:</strong> two months of dues.",
      ]) +
      h.p("After a full calendar year here, Joan applies for the homestead exemption. The assessed value drops to ($450,000 − $50,000) × 4 percent = $16,000. The 2025 tax is $16,000 × (207.3 − 109.1) ÷ 1,000 = $1,571.20 a year.") +
      h.p("Tax bills for 2026 in Seasons use the newly certified 2026 millage.") +
      h.p(`Try your own price in the ${h.a("/buyers/property-taxes/", "Horry County property tax calculator")}.`) },

    { h2: "Is Seasons at Prince Creek West in a flood zone?", html: (bg) =>
      h.p(`All 444 Seasons home lots have their centers in FEMA flood Zone X, the area of minimal flood hazard. The ${h.ext(FEMA, "FEMA map panels")} for Seasons took effect in December 2021.`) +
      h.p("FEMA counts Zone AE as a special flood hazard area. At least one corner of 45 lots is inside Zone AE. Those lots are 16 to 20, 22, 23, 25 to 28, 101 to 121, 201, 307 to 315, 318, 319 and 386.") +
      h.p("A Letter of Map Amendment is FEMA's written decision on whether a property is in its mapped high-risk flood area. FEMA's records list one from 2011 for Phase 2 lots 306 to 314. If the home is on one of those lots, ask the seller for a copy.") +
      h.p("Get a flood insurance quote before you offer on any of the 45 lots.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what Myrtle Beach flood zones mean for insurance")}.`) +
      h.p(`The wind pool is a state association that insures homes in the coastal area against wind and hail. In Horry County, ${h.ext(WINDLAW, "its coastal area")} is east of US 17 or Bypass 17, whichever is farther west.`) +
      h.p("At Seasons, Bypass 17 is the more westerly road, and every lot is more than 2 miles west of it. Seasons is outside the coastal area.") +
      h.cta("Want the flood and wind costs before you offer?", "Tell us the lot number. One of our agents can get you an insurance quote on that home first.", "Have us get you an insurance quote", "/contact/", bg) },

    { h2: "How far is Seasons at Prince Creek West from the beach, the hospital and the airport?", html:
      h.p("The nearest public beach access by road is Horry County's Atlantic Avenue boardwalk access in Garden City, about 6.0 miles from 130 Grand Cypress Way.") +
      h.ul([
        `Tidelands Waccamaw Community Hospital, at 4070 Hwy 17 in Murrells Inlet, is the ${h.ext(CMS, "nearest hospital")}, about 4.0 miles by road.`,
        "Grand Strand Medical Center, at 809 82nd Parkway in Myrtle Beach, is about 21 miles by road.",
        "Myrtle Beach International Airport, at 1100 Jetport Road, is about 15.7 miles by road.",
      ]) +
      h.p("Each distance is by road from 130 Grand Cypress Way, on the amenity parcel.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospital serves each part of the Grand Strand")}.`) },

    { h2: "How does Seasons at Prince Creek West compare with three other 55+ communities?", html:
      h.p("Seasons at Prince Creek West and Myrtle Trace are in unincorporated Horry County, and both Del Webb communities are inside city limits.") +
      compareTable() },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Is Seasons at Prince Creek West gated?", a: "In a 2013 press release, Dock Street Communities described Seasons as a gated community. The charter allows the association to operate entry gates. Ask the association how the gate works today." },
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a permanent occupant 55 or older also lives in the home. The charter allows no resident under 18." },
    { q: "Can you rent out a home in Seasons at Prince Creek West?", a: "Yes, with a written lease of at least one year, under the charter. Each lease must state that the homes are for people 55 or older." },
    { q: "How many homes are in Seasons at Prince Creek West?", a: "County records show 444 home lots, numbered 1 to 446 with two numbers unused. County records also show 20 other parcels, such as common areas and pump stations." },
    { q: "Is Seasons at Prince Creek West in a flood zone?", a: "Every home lot has its center in FEMA flood Zone X, the area of minimal flood hazard. At least one corner of 45 lots is inside Zone AE, a special flood hazard area." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital, at 4070 Hwy 17 in Murrells Inlet. The drive is about 4.0 miles from the amenity parcel at 130 Grand Cypress Way." },
  ],
  sources: [
    { name: "Charter, posted 2017 copy", href: CHARTER },
    { name: "Horry County deed index", href: DEEDS },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "Tidelands Waccamaw on Medicare Care Compare", href: CMS },
    { name: "SC Code 56-2-90", href: GOLFLAW },
  ],
  sourcesNote: "For education, not legal advice. Rules recorded after 2017 were not online when read. Distances by road are OpenStreetMap estimates.",
  bottomCta: { h2: "Read the Seasons charter and rules before you offer.", p: "Call about the lot you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call about Seasons", href: TEL },
  keywords: "Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West HOA, Seasons at Prince Creek West rental rules, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
