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
 * Rules:  every charter term is named as the association's posted 2017 copy. The
 *         rules recorded in 2019, 2022, 2025 and 2026 have not been read.
 * Tax:    the calculator on /buyers/property-taxes/ lists 207.3 mills for
 *         Murrells Inlet and Garden City and 201.0 for other unincorporated areas
 *         (tax year 2025). No verified row ties district 610 to either option,
 *         so the example shows both.
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const NMB = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const GD = "/buyers/55-plus-communities/del-webb-grande-dunes/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. The
   charter is the association's posted replica, the same file the verifier read
   at this path on seasons55.com. */
const CHARTER = "https://www.seasons55.com/editor_upload/File/Community%20Management/Policies%20%26%20Rules/communitycharter2.pdf";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const FEMA = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query?geometry=-79.071059,33.585991&amp;geometryType=esriGeometryPoint&amp;inSR=4326&amp;outFields=FLD_ZONE,ZONE_SUBTY&amp;returnGeometry=false&amp;f=json";
const CMS = "https://data.cms.gov/provider-data/api/1/datastore/query/xubh-q36u/0?conditions%5B0%5D%5Bproperty%5D=facility_id&amp;conditions%5B0%5D%5Bvalue%5D=420098&amp;conditions%5B0%5D%5Boperator%5D=%3D";
const GOLFLAW = "https://www.scstatehouse.gov/code/t56c002.php";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";

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
  ["Residents under 18", "Not allowed; visits of up to 60 days a year"],
  ["Minimum lease", "One year, in writing"],
  ["Pets", "Two per home"],
  ["Working capital at closing", "Two months of the regular annual assessment"],
  ["Road and park transfer fee", "0.25 percent of the price, up to an adjusted cap"],
  ["Flood zone", "Every lot center in Zone X; 45 lots touch Zone AE"],
  ["Wind pool coastal area", "Outside it, more than 2 miles west of Bypass 17"],
  ["Tax district", "610"],
  ["Nearest hospital", "Tidelands Waccamaw Community Hospital, about 4.0 miles by road"],
  ["Nearest public beach accesses", "Garden City, about 6 miles by road"],
  ["Myrtle Beach International Airport", "About 15.7 miles by road"],
];

module.exports = {
  url: "/buyers/55-plus-communities/seasons-at-prince-creek-west/",
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
    "Yes. The charter is the main set of recorded rules for Seasons at Prince Creek West. It requires a permanent occupant 55 or older in every occupied home.",
    "A permanent occupant lives in the home at least six months of every calendar year and treats it as their legal home.",
    "No one under 18 can live in a home, and a visitor under 18 can stay up to 60 days a year. These terms come from the association's posted 2017 copy of the charter.",
  ],
  sections: [
    { h2: "What is Seasons at Prince Creek West?", html:
      h.p("Seasons at Prince Creek West is a 55+ community of 444 home lots near Murrells Inlet, in unincorporated Horry County.") +
      h.p("Seasons' charter, its main set of rules, was recorded in December 2006 and amended six times through January 2017. The founder named in it is Levitt and Sons of Horry County LLC.") +
      h.p(`Levitt deeded 77 lots to buyers from December 2006 to July 2009. The ${h.ext(DEEDS, "county deed index")} names 339 more lots that MBSC Seasons LLC deeded to buyers from October 2009 to December 2016.`) +
      h.figure(deedChart(), "Builder deeds that name a Seasons lot, by the year the deed was recorded, from the Horry County deed index. Levitt and Sons in brass, MBSC Seasons LLC in navy.") +
      h.p("The county parcels that name Seasons total about 192 acres: 85.7 acres of home lots and 106.2 acres of common areas. The association's amenity parcel has the addresses 124, 130 and 136 Grand Cypress Way.") +
      h.p("Seasons is inside the larger Prince Creek West development. The homes are also subject to the Prince Creek master declaration and the Prince Creek West Road and Park Districts declaration.") +
      h.table(["Fact", "Seasons at Prince Creek West"], FACTS) },

    { h2: "What does the 55+ rule at Seasons at Prince Creek West require?", html:
      h.p("Every occupied home must always have at least one permanent occupant who is 55 or older.") +
      h.p(`The ${h.ext(CHARTER, "association's posted 2017 copy of the charter")} requires a permanent occupant who is "55 years of age or older."`) +
      h.p("The association calls that copy a modified, unofficial replica of the recorded charter with its amendments.") +
      h.p("The charter adds these terms:") +
      h.ul([
        "A permanent occupant must treat the home as a legal residence and live there at least six months of every calendar year.",
        "No one under 18 can live in a home, except as the charter allows.",
        "A visitor under 18 can stay up to 60 days a calendar year, or 60 in any 12 months, whichever is less.",
        "If the only qualifying occupant dies, a surviving spouse can keep living there.",
        "The board can grant exceptions.",
      ]) +
      h.p("The association recorded newer rules in 2019, 2022 and 2025, and a garbage-can resolution in May 2026. Ask the association for those rules before you offer.") +
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
      h.p("Yes, under a written lease of at least one year, per the association's posted 2017 copy of the charter.") +
      h.p("Each lease must include a statement, in type that stands out, that the homes are for people 55 or older. A tenant household that breaks the age rule is in default under the lease.") +
      h.p("The charter does not allow timesharing a home unless the board and the founder approve it.") +
      h.p("Our agents read the HOA documents for any rule against a buyer's plan to rent.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "when an HOA can stop an owner from renting")}.`) },

    { h2: "What does a buyer pay at closing in Seasons at Prince Creek West?", html:
      h.p("At closing, a buyer pays the association two months of its regular annual assessment as a working capital contribution. The charter calls that regular assessment the general assessment. The board can raise or lower the contribution.") +
      h.p("The Prince Creek West Road and Park Districts Association charges a transfer fee of 0.25 percent of the price on each resale. The seller and the buyer are both responsible for paying it. The fee has a cap, adjusted under the road and park declaration.") +
      h.p("The charter also reserves the right for the Seasons board to add its own transfer fee.") +
      h.p("A resale certificate is the association's written statement of the dues, fees and any balance owed on a home. Ask for it, and for the road and park association's current fee cap, before you sign.") +
      h.p("Under the 2017 charter copy, the Seasons assessment includes the assessments of three other associations:") +
      h.ul(["the Prince Creek master association", "the Prince Creek West Road and Park Districts Association", "the Highway 17 Connector Road Maintenance Association"]) +
      h.p("An owner gets one bill for all four.") +
      h.p("The charter allows the board to add, change or cancel bundled services such as cable, internet and home monitoring. The association's current budget shows what the dues pay for. Ask for the 2026 budget and the current monthly assessment before you offer.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "whether South Carolina allows HOA transfer fees")}.`) },

    { h2: "Is Seasons at Prince Creek West gated?", html:
      h.p("Dock Street Communities called Seasons a gated community in a 2013 press release.") +
      h.p("The charter allows the association to maintain and operate entry gates that control vehicle access. Ask the association how the gate works today.") },

    { h2: "What other rules apply at Seasons at Prince Creek West?", html:
      h.p("The posted 2017 charter copy allows no more than two household pets per home.") +
      h.ul([
        "Pets must be on a leash outside, unless they are in a fenced area.",
        "Fences need approval from the Architectural Control Board, and every fence must be uniform throughout the community.",
        "Golf carts must be parked in an enclosed garage, not on a street.",
      ]) +
      h.p("The association recorded parking rules in 2022, so ask for them if you keep a golf cart.") +
      h.p(`On a public road, a golf cart needs a ${h.ext(GOLFLAW, "DMV permit decal and registration")} under state law. Unless a local ordinance says otherwise, a cart can be driven only in daylight, on secondary roads posted 35 mph or less. The cart must also stay within four miles of the address on its registration, or of a gated community's entrance.`) },

    { h2: "What will the property tax be on a Seasons at Prince Creek West home?", html:
      h.p("On a $450,000 primary residence in Seasons, the 2025 property tax is about $1,654 to $1,768 a year.") +
      h.p("Horry County's term for an approved primary residence is a legal residence. Assessed value is 4 percent of value for a legal residence and 6 percent for a second home. A mill equals $1 of tax for every $1,000 of assessed value.") +
      h.p("County records list all 464 Seasons parcels in tax district 610, in unincorporated Horry County. For 2025, Horry County's rate was 207.3 mills for Murrells Inlet and Garden City and 201.0 for other unincorporated areas. The county's tax bill for the home shows which of the two applies to district 610.") +
      h.p("A legal residence is not charged the 109.1 school operating mills. The homestead exemption applies to an owner 65 or older after one full calendar year of South Carolina residency. Under it, the county taxes the home's value minus $50,000.") +
      h.p("<strong>Example:</strong> Joan and Walt are moving from Richmond, Virginia, with up to $450,000 to spend. Joan is 70, Walt is 64, and they plan to live in Seasons all year. They buy a resale home for $450,000 and apply for the 4 percent rate.") +
      h.ul([
        "<strong>Assessed value:</strong> $450,000 × 4 percent = $18,000.",
        "<strong>At 207.3 mills:</strong> $18,000 × (207.3 − 109.1) ÷ 1,000 = $1,767.60 a year.",
        "<strong>At 201.0 mills:</strong> $18,000 × (201.0 − 109.1) ÷ 1,000 = $1,654.20 a year.",
        "<strong>Road and park transfer fee:</strong> 0.25 percent × $450,000 = $1,125, or the cap if that is lower.",
        "<strong>Working capital:</strong> two months of the annual general assessment.",
      ]) +
      h.p("After a full calendar year here, Joan applies for the homestead exemption. On $400,000 of taxable value, the 2025 tax is $1,470.40 to $1,571.20 a year.") +
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
      h.p("An agent at Chapter3 can get you an insurance quote on a Seasons home before you make the offer.") +
      h.cta("Want the flood and wind costs before you offer?", "Tell us the lot number. One of our agents can get you an insurance quote on that home first.", "Have us get you an insurance quote", "/contact/", bg) },

    { h2: "How far is Seasons at Prince Creek West from the beach and the hospital?", html:
      h.p("The nearest public beach accesses by road are Horry County's in Garden City, about 6 miles from 130 Grand Cypress Way.") +
      h.ul([
        "The county's Atlantic Avenue boardwalk access in Garden City is about 6.0 miles by road.",
        `Tidelands Waccamaw Community Hospital, at 4070 Hwy 17 in Murrells Inlet, is the ${h.ext(CMS, "nearest hospital")}, about 4.0 miles by road.`,
        "Grand Strand Regional Medical Center, at 809 82nd Parkway in Myrtle Beach, is about 21 miles by road.",
        "Myrtle Beach International Airport, at 1100 Jetport Road, is about 15.7 miles by road.",
      ]) +
      h.p("Each distance is measured from 130 Grand Cypress Way, on the amenity parcel, along OpenStreetMap roads with no traffic.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "how far each Grand Strand hospital is from the area you choose")}.`) },

    { h2: "How does Seasons at Prince Creek West compare with three other 55+ communities?", html:
      h.p("Seasons at Prince Creek West and Myrtle Trace are in unincorporated Horry County, and both Del Webb communities are inside city limits.") +
      h.ul([
        `${h.a(MT, "Myrtle Trace")}, outside Conway, has private roads owned by its self-managed HOA.`,
        `${h.a(GD, "Del Webb at Grande Dunes")}, in Myrtle Beach, has a recorded declaration that allows one lease a year.`,
        `Pulte still lists new homes for sale in ${h.a(NMB, "Del Webb North Myrtle Beach")}.`,
      ]) },
  ],
  faqTitle: "Seasons at Prince Creek West FAQ",
  faq: [
    { q: "Is Seasons at Prince Creek West gated?", a: "In a 2013 press release, Dock Street Communities described Seasons as a gated community. The charter allows the association to operate entry gates. Ask the association how the gate works today." },
    { q: "Can someone under 55 live in Seasons at Prince Creek West?", a: "Yes, if a permanent occupant 55 or older also lives in the home. The posted 2017 charter copy allows no resident under 18, and the board can grant exceptions." },
    { q: "Can you rent out a home in Seasons at Prince Creek West?", a: "Yes, with a written lease of at least one year, under the association's posted 2017 copy of the charter. Each lease must state that the homes are for people 55 or older." },
    { q: "How many homes are in Seasons at Prince Creek West?", a: "County records show 444 home lots, numbered 1 to 446 with two numbers unused. County records also show 20 other parcels, such as common areas and pump stations." },
    { q: "Is Seasons at Prince Creek West in a flood zone?", a: "Every home lot has its center in FEMA flood Zone X, the area of minimal flood hazard. At least one corner of 45 lots is inside Zone AE, a special flood hazard area." },
    { q: "What hospital is closest to Seasons at Prince Creek West?", a: "Tidelands Waccamaw Community Hospital, at 4070 Hwy 17 in Murrells Inlet. The drive is about 4.0 miles from the amenity parcel at 130 Grand Cypress Way." },
  ],
  sources: [
    { name: "Charter, posted 2017 copy", href: CHARTER },
    { name: "Horry County deed index", href: DEEDS },
    { name: "FEMA flood map query", href: FEMA },
    { name: "CMS hospital data", href: CMS },
    { name: "SC Code 56-2-90", href: GOLFLAW },
  ],
  sourcesNote: "For education, not legal advice. Rules recorded after 2017 were not online when read.",
  bottomCta: { h2: "Read the Seasons charter and rules before you offer.", p: "Call about the lot you like. An agent at Chapter3 will read the age, lease and pet rules with you.", label: "Call about Seasons", href: TEL },
  keywords: "Seasons at Prince Creek West, Seasons at Prince Creek West 55, Seasons at Prince Creek West HOA, Seasons at Prince Creek West rental rules, Seasons Murrells Inlet 55 plus",
  about: "Seasons at Prince Creek West, a 55+ community in unincorporated Horry County near Murrells Inlet, South Carolina",
};
