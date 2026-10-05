/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what a new home in
 * Del Webb North Myrtle Beach costs, and the rules, tax, flood zone and
 * distances that go with it.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md
 * Facts:  Blog-Brain/batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md
 *         (verified rows only; rows 22, 33 and 42 are marked wrong and are not used)
 * Tax:    the "North Myrtle Beach" option in the calculator on /buyers/property-taxes/
 *         (216.2 mills, tax year 2025) and data/relocating/tax-engine.js
 *         (4 percent ratio, 109.1 school operating mills, $50,000 homestead).
 * Story:  stories.json "rental-program-buildings", "new-community-rent-caps",
 *         "insurance-quote-before-offer". The example is labelled "Example".
 *
 * Every number below comes from a verified ledger row or the website's tax data.
 * Distances start at 1285 Possum Trot Road (the HOA's onsite office), per the
 * verifier, and are OSRM estimates on OpenStreetMap roads.
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const GD = "/buyers/55-plus-communities/del-webb-grande-dunes/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const SPCW = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const AGREEMENT = "https://www.nmb.us/AgendaCenter/ViewFile/Item/412?fileID=627";
const PULTE = "https://www.delwebb.com/homes/south-carolina/myrtle-beach/north-myrtle-beach/del-webb-north-myrtle-beach-210691";
const FEMA = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query?geometry=-78.700908,33.821769&amp;geometryType=esriGeometryPoint&amp;inSR=4326&amp;outFields=FLD_ZONE,ZONE_SUBTY,SFHA_TF&amp;returnGeometry=false&amp;f=json";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";

/* Pulte's plan cards, read 2026-10-05 (rows 24 and 25). */
const PLANS = [
  ["Stardom", "$585,990", "2,179", "2 to 4", "2.5 to 4.5", "2 or 3 cars"],
  ["Stellar", "$699,965", "2,240", "2 to 4", "2.5 to 5", "2 or 3 cars"],
  ["Renown", "$704,590", "2,712", "3 to 4", "3.5 to 5.5", "3 cars"],
];

/* Miles by car from 1285 Possum Trot Road (rows 41, 43, 44, 45, 53). */
const DRIVES = [
  ["14th Avenue South beach access", 1.0],
  ["North Strand ER", 1.4],
  ["McLeod Health Seacoast", 5.6],
  ["Grand Strand Medical Center", 8.9],
  ["Myrtle Beach International Airport", 19.3],
];

/* A horizontal bar chart drawn from DRIVES. Narrow and stacked, so a phone
   that scales it to about 340 pixels keeps the type near 12 pixels. */
const driveChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 14, rowH = 62, barMax = 300, max = Math.max(...DRIVES.map(d => d[1]));
  const rows = DRIVES.map(([name, mi], i) => {
    const y = top + i * rowH, w = Math.max(4, Math.round(mi / max * barMax));
    return `<text x="12" y="${y + 18}" ${F} font-size="16" fill="#1c2028">${name}</text>`
      + `<rect x="12" y="${y + 27}" width="${w}" height="20" fill="#1c2028"/>`
      + `<text x="${12 + w + 8}" y="${y + 43}" ${F} font-size="16" font-weight="700" fill="#91592b">${mi.toFixed(1)} mi</text>`;
  }).join("");
  const label = "Miles by car from 1285 Possum Trot Road in Del Webb North Myrtle Beach: " + DRIVES.map(([n, mi]) => `${n} ${mi.toFixed(1)}`).join(", ") + ".";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + DRIVES.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

module.exports = {
  url: "/buyers/55-plus-communities/del-webb-north-myrtle-beach/",
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Del Webb North Myrtle Beach: Prices and 55+ Rules | Chapter3",
  description: "Del Webb North Myrtle Beach: Pulte's October 2026 prices, the city's 55+ rule, the HOA documents to read, the 2025 tax on a $699,965 home, flood zone and drives.",
  ogTitle: "Del Webb North Myrtle Beach: Pulte's prices, the 55+ rule, taxes and flood zone",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What does a new home in Del Webb North Myrtle Beach cost?",
  h1em: "From $585,990, per Pulte.",
  sub: "Pulte lists three Del Webb plans in North Myrtle Beach, from $585,990 to $704,590, with 2 to 4 bedrooms.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Pulte's starting prices for its three plans in Del Webb North Myrtle Beach were $585,990 to $704,590 in October 2026.",
    "At 2025 tax rates, the property tax on a $699,965 primary residence here is about $2,999 a year.",
    "Pulte lists lawn care and a TV package in the homeowners association dues. Ask AAM, the association's management company, for the monthly amount before you sign.",
  ],
  sections: [
    { h2: "What is Del Webb North Myrtle Beach?", html:
      h.p("Del Webb North Myrtle Beach is a 55+ community that Pulte Home Company is building on the old Possum Trot golf course. Pulte sells the homes under its Del Webb brand.") +
      h.p("The city of North Myrtle Beach annexed the 171.24 acres in October 2020. The city zoned the land as a planned development called Chestnut Greens, the name county records also use.") +
      h.p("The city's development agreement allows 480 to 535 single-family lots. County records show 497 home lots platted in five phases.") +
      h.p("In October 2026, 408 of those lots had a building value on the county's tax record. Homes finished in recent months may not show yet.") +
      h.p("The Del Webb North Myrtle Beach Homeowners Association owns the amenity center land. Associated Asset Management, called AAM, manages the HOA from an onsite office at 1285 Possum Trot Road. Pulte lists 1315 Saw Palmetto Street as its address for the community.") },

    { h2: "What does the 55+ rule require in Del Webb North Myrtle Beach?", html:
      h.p("Each household must include at least one member who is 55 or older, under the city's 2020 development agreement with Pulte.") +
      h.p(`The ${h.ext(AGREEMENT, "development agreement")} calls the project an age-restricted, Del Webb branded single-family community. Its definition of an age-restricted home reads: "at least one member of the household must be at least 55 years of age."`) +
      h.p("A declaration is the recorded list of rules that apply to every lot in a community. The HOA's own rules are in Pulte's declaration, recorded in July 2021, and in 35 pages of rules recorded in January 2026.") +
      h.p("Ask Pulte or AAM for both before you sign, and read any section on age, guests or leasing.") +
      h.p(`Read ${h.a(HUB, "how an age-restricted community differs from an age-targeted one")}.`) },

    { h2: "What do Pulte's three plans in Del Webb North Myrtle Beach cost?", html: (bg) =>
      h.p("Pulte's starting prices in October 2026 were $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown.") +
      h.table(["Plan", "Starting price", "From sq ft", "Bedrooms", "Baths", "Garage"], PLANS) +
      h.p("Lot premiums, upgrades and options can add to those prices, per Pulte. Pulte calls the three plans its Echelon collection and says the homes range from 2,179 to 3,728 square feet.") +
      h.p("Pulte also lists two homes due in October 2026, each with 3 bedrooms and 3.5 baths:") +
      h.ul(["a 2,240-square-foot Stellar at $699,965, down from $767,965", "a 2,712-square-foot Renown at $704,590, down from $799,590"]) +
      h.p("Pulte lists storm fabric for the windows and natural gas service in these homes. Pulte says its 10-year warranty on structural elements is transferable to a later owner.") +
      h.cta("Buying a new Del Webb home in North Myrtle Beach?", "Tell us the plan and the lot you want. One of our agents can read Pulte's contract and the HOA documents with you before you sign.", "Get the documents checked before you sign", "/contact/", bg) },

    { h2: "What do the HOA dues pay for in Del Webb North Myrtle Beach?", html:
      h.p("Pulte lists lawn care and a 175-channel TV package as included in the HOA dues. Pulte also lists a fiber network for internet service, and does not say whether the dues pay for it.") +
      h.p("Get the current monthly dues from AAM before you sign Pulte's contract.") +
      h.p("In Chapter3's experience, HOAs here commonly charge a buyer a transfer fee and a few months of dues at closing. Ask Pulte and AAM for the HOA's current budget and the full list of charges due at closing.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "what an HOA can charge a buyer at closing in South Carolina")}.`) },

    { h2: "What amenities does Del Webb North Myrtle Beach have?", html:
      h.p("Pulte lists a 12,000-square-foot clubhouse, a pool, an indoor lap pool, a fitness center and an arts and crafts room. Pulte's list also includes a gathering room with sliding glass doors to an outdoor courtyard.") +
      h.p("In October 2026, Pulte's page said the amenities are open. Pulte also says the city's J. Bryan Floyd Community Center is next door, with an indoor gym for basketball and pickleball.") },

    { h2: "Which HOA documents should you read before buying in Del Webb North Myrtle Beach?", html:
      h.p("Read the declaration and the 2026 rules before you sign Pulte's contract.") +
      h.p("Look in both documents for any section on these topics:") +
      h.ul(["leasing the home", "guests under 55", "pets", "fences", "golf carts"]) +
      h.p("In Chapter3's experience, rental limits differ from one new community to the next, so our agents read each set of documents.") +
      h.p(`Read ${h.a("/hoa/documents/", "which HOA documents to ask for before you buy")}, and ${h.a("/hoa/rental-restrictions/", "whether an HOA can stop you renting your home")}.`) },

    { h2: "What will the property tax be on a Del Webb North Myrtle Beach home?", html:
      h.p("The 2025 property tax on a $699,965 primary residence in Del Webb North Myrtle Beach is about $2,999 a year.") +
      h.p("The county taxes a share of each home's value, called the assessed value. A legal residence is the county's term for a primary residence it has approved. A legal residence is assessed at 4 percent of its value, and other homes at 6 percent.") +
      h.p("Each mill is $1 of tax per $1,000 of assessed value. County records list every Chestnut Greens parcel in tax district 550, inside North Myrtle Beach city limits.") +
      h.p("In 2025, the county and school levy there was 171.2 mills, and the city levy was 45 mills. The total was 216.2 mills. The owner of a legal residence does not pay the 109.1 school operating mills.") +
      h.p("An owner 65 or older can also claim the homestead exemption after one full calendar year of residency in South Carolina. Under that exemption, the first $50,000 of the home's value is not taxed.") +
      h.p("<strong>Example:</strong> Linda and Ray are moving from Columbus, Ohio, with $700,000 to spend. Linda is 67 and Ray is 61. They buy the Stellar that Pulte lists at $699,965 and apply for the 4 percent rate.") +
      h.ul([
        "<strong>Assessed value:</strong> $699,965 × 4 percent = $27,998.60.",
        "<strong>Mills that apply:</strong> 216.2 − 109.1 school operating mills = 107.1.",
        "<strong>2025 tax:</strong> $27,998.60 × 107.1 ÷ 1,000 = $2,998.65 a year.",
        "<strong>With Linda's homestead exemption:</strong> ($699,965 − $50,000) × 4 percent × 107.1 ÷ 1,000 = $2,784.45 a year.",
      ]) +
      h.p("With the exemption, they pay $214.20 less each year at 2025 millage.") +
      h.p("Bills for 2026 use the newly certified rates. The county lists the North Myrtle Beach city levy at 50.0 mills for 2026, up from 45. On their home, that increase costs $27,998.60 × 5 ÷ 1,000 = $140 more a year.") +
      h.p("As a second home, the same house would be assessed at 6 percent, and the owner would pay all 216.2 mills. That is $699,965 × 6 percent × 216.2 ÷ 1,000 = $9,079.95 a year.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how the 4 percent and 6 percent rates are calculated")}.`) },

    { h2: "Is Del Webb North Myrtle Beach in a flood zone?", html: (bg) =>
      h.p(`Every Chestnut Greens parcel is in FEMA flood Zone X, the area of minimal flood hazard. ${h.ext(FEMA, "FEMA's map")} for the community took effect in December 2021.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "why Zone X does not mean no flood risk")}.`) +
      h.p(`The wind pool is the state association that provides wind and hail insurance in South Carolina's coastal area. ${h.ext(WINDLAW, "State law")} defines the Horry County part as the land east of US 17 or Bypass 17, whichever is farther west.`) +
      h.p("Every lot in Del Webb North Myrtle Beach is west of US 17, outside that coastal area. From 1285 Possum Trot Road, US 17 is about 0.75 miles east.") +
      h.p("An agent at Chapter3 can get you an insurance quote on a Del Webb home before you sign Pulte's contract.") +
      h.cta("Want the insurance cost before you sign?", "Tell us the plan and the lot. One of our agents gets you a homeowners and flood quote first.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How far is Del Webb North Myrtle Beach from the beach and the hospitals?", html:
      h.p("The 14th Avenue South beach access is about 1.0 mile by car from the HOA's office at 1285 Possum Trot Road. In a straight line, the distance is about 0.9 miles.") +
      h.figure(driveChart(), "Miles by car from 1285 Possum Trot Road, the HOA's onsite office. Estimates on OpenStreetMap roads with no traffic.") +
      h.ul([
        "North Strand ER, at 806 Hwy 17 S, is a freestanding emergency facility open 24 hours, about 1.4 miles away.",
        "McLeod Health Seacoast in Little River is about 5.6 miles away, and McLeod says it has 155 patient beds.",
        "Grand Strand Medical Center, a 403-bed hospital in Myrtle Beach, is about 8.9 miles away.",
        "Myrtle Beach International Airport is about 19.3 miles away, or 35 minutes with no traffic.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospitals serve the Grand Strand")} and what each one offers.`) },

    { h2: "How does Del Webb North Myrtle Beach compare with three other 55+ communities?", html:
      h.p("Del Webb North Myrtle Beach is inside North Myrtle Beach city limits, and Pulte still lists new homes there.") +
      h.ul([
        `${h.a(GD, "Del Webb at Grande Dunes")}, which Pulte announced in 2017, is inside Myrtle Beach city limits.`,
        `${h.a(MT, "Myrtle Trace")}, outside Conway, has a self-managed HOA and a declaration recorded in 1983.`,
        `${h.a(SPCW, "Seasons at Prince Creek West")}, near Murrells Inlet, allows no residents under 18 under its posted 2017 charter copy.`,
      ]) },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach a 55+ community?", a: "Yes, Pulte markets it as a 55+ community. The city's 2020 development agreement calls it an age-restricted Del Webb community. Under that agreement, at least one member of each household must be 55 or older." },
    { q: "How much are the HOA dues in Del Webb North Myrtle Beach?", a: "Pulte and the HOA do not post the amount. Pulte lists lawn care and a 175-channel TV package as included in the dues. Ask AAM, the HOA's management company, for the current monthly dues before you sign." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes, the community is inside North Myrtle Beach city limits. The city annexed the land in October 2020, so owners pay the city levy as well as the county and school levy." },
    { q: "How far is Del Webb North Myrtle Beach from the beach?", a: "About 1.0 mile by car from the HOA's office at 1285 Possum Trot Road to the 14th Avenue South beach access. The straight-line distance is about 0.9 miles. US 17 is between the community and the ocean." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte Home Company builds them under its Del Webb brand. In October 2026, Pulte listed three plans at $585,990 to $704,590: the Stardom, the Stellar and the Renown." },
  ],
  sources: [
    { name: "City development agreement, 2020", href: AGREEMENT },
    { name: "Pulte, Del Webb North Myrtle Beach", href: PULTE },
    { name: "FEMA flood map query", href: FEMA },
    { name: "Horry County 2026 tax levies", href: LEVY },
    { name: "SC Code 38-75-310", href: WINDLAW },
  ],
  sourcesNote: "Educational only, not legal or tax advice. Builder prices change.",
  bottomCta: { h2: "Know the dues and the HOA rules before you sign with Pulte.", p: "Call about the plan and the lot you want. One of our agents will read the HOA documents with you.", label: "Call a specialized agent", href: TEL },
  keywords: "Del Webb North Myrtle Beach, Del Webb North Myrtle Beach prices, Del Webb North Myrtle Beach HOA dues, Chestnut Greens North Myrtle Beach, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
