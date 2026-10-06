/* /buyers/55-plus-communities/del-webb-north-myrtle-beach/ - what a new home in
 * Del Webb North Myrtle Beach costs, what comes with it, and the dues, tax,
 * flood zone and distances that go with it.
 *
 * Rewritten 2026-10-06 for the owner's buyer-first lessons (voice/RULES.md,
 * class BUYER): the buyer's answer first, good news before drawbacks, plain
 * words (no "plans", "platted", "assessed value", "development agreement",
 * company initials), facts stated as the expert with sources in a few links
 * and the sources line, and results instead of tax arithmetic.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md, PLAN.md (owner answers)
 * Facts:  Blog-Brain/batches/2026-10-a/facts/del-webb-north-myrtle-beach-facts.md
 *         (verified rows only; rows 22, 33 and 42 are wrong and not used;
 *         rows 54 to 57, added 2026-10-06, wait for their verifier)
 * Tax:    the "North Myrtle Beach" option in the calculator on /buyers/property-taxes/
 *         (tax year 2025) and data/relocating/tax-engine.js. Results only:
 *         $2,998.65 a year on $699,965 as a primary home, $2,784.45 with the
 *         homestead exemption, $9,079.95 as a second home, +$140 for the 2026
 *         city levy (rows 49 to 52).
 * Story:  stories.json "rental-program-buildings", "new-community-rent-caps",
 *         "insurance-quote-before-offer". The example is labelled "Example".
 * Distances start at 1285 Possum Trot Road (the HOA's onsite office) and are
 * OSRM estimates on OpenStreetMap roads (rows 41, 43 to 45, 53).
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const TEL = "tel:+18543332135";

/* The comparison table shared by the four 55+ pages. One data file feeds all
   four, so each cell has one source; the file names the ledger rows. Each page
   links the other three in the first column. */
const COMPARE = require("../data/55-plus-communities.json");
const compareTable = () => h.table(COMPARE.head, COMPARE.rows.map(r =>
  [r.url === SELF ? r.cells[0] : h.a(r.url, r.cells[0]), ...r.cells.slice(1)]));

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const AGREEMENT = "https://www.nmb.us/AgendaCenter/ViewFile/Item/412?fileID=627";
const PULTE = "https://www.delwebb.com/homes/south-carolina/myrtle-beach/north-myrtle-beach/del-webb-north-myrtle-beach-210691";
/* FEMA's Flood Map Service Center search for the HOA's address: a page a person
   can read. The NFHL query the verifier ran stays in the ledger (rows 37 and 38). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=1285%20Possum%20Trot%20Road%2C%20North%20Myrtle%20Beach%2C%20SC%2029582";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";

/* Pulte's three home designs, read 2026-10-05 (rows 24 and 25). */
const DESIGNS = [
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
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Del Webb North Myrtle Beach: Prices, Dues and Life | Chapter3",
  description: "Del Webb North Myrtle Beach: new homes from $585,990 in October 2026, what the HOA dues include, the clubhouse, the 55+ rule, taxes, flood zone and the beach.",
  ogTitle: "Del Webb North Myrtle Beach: new home prices, dues, the clubhouse and taxes",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What does a new home in Del Webb North Myrtle Beach cost?",
  h1em: "From $585,990 in October 2026.",
  sub: "About 408 homes are already built, new ones are still for sale, and the beach is about a mile away.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "New homes in Del Webb North Myrtle Beach started at $585,990 in October 2026, and the three home designs went up to $704,590.",
    "The clubhouse is open, about 408 homes are built, and the 14th Avenue South beach access is about a mile away by car.",
    "Your HOA dues include lawn care and a 175-channel TV package. On a $699,965 home you live in, the property tax is about $3,000 a year.",
  ],
  sections: [
    { h2: "What do new homes in Del Webb North Myrtle Beach cost?", html: (bg) =>
      h.p("In October 2026, Pulte's three home designs started at $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown.") +
      h.table(["Home design", "Starting price", "From sq ft", "Bedrooms", "Baths", "Garage"], DESIGNS) +
      h.p("Some homesites, upgrades and options cost extra. The homes range from 2,179 to 3,728 square feet.") +
      h.p("Two homes were due to be finished in October 2026, each with 3 bedrooms and 3.5 baths:") +
      h.ul(["a 2,240-square-foot Stellar at $699,965, down from $767,965", "a 2,712-square-foot Renown at $704,590, down from $799,590"]) +
      h.p("Each home comes with storm fabric for the windows and natural gas service. The 10-year warranty on the structure passes to the next owner if you sell.") +
      h.p(`See the current homes on ${h.ext(PULTE, "Pulte's Del Webb North Myrtle Beach page")}.`) +
      h.cta("Buying a new Del Webb home in North Myrtle Beach?", "Tell us the home design and the homesite you want. One of our agents can read the HOA documents with you before you sign Pulte's contract.", "Have us read the HOA documents with you", "/contact/", bg) },

    { h2: "What is there to do in Del Webb North Myrtle Beach?", html:
      h.p("The 12,000-square-foot clubhouse is open, with a pool, an indoor lap pool, a fitness center and an arts and crafts room.") +
      h.p("The clubhouse also has a gathering room with sliding glass doors to an outdoor courtyard. The city's J. Bryan Floyd Community Center is next door, with an indoor gym for basketball and pickleball.") +
      h.p("About 408 of the community's roughly 500 homesites had a house on them in October 2026. Homes finished in the last few months may not be counted yet.") },

    { h2: "What do the HOA dues include in Del Webb North Myrtle Beach?", html:
      h.p("Your dues include lawn care and a 175-channel TV package. The community also has a fiber network for internet, but Pulte does not say whether the dues pay for it.") +
      h.p("Ask the management company, Associated Asset Management, for the monthly amount before you sign. Ask for the HOA's budget and every charge due at closing at the same time.") +
      h.p("In Chapter3's experience, HOAs here commonly charge a buyer a transfer fee and a few months of dues in advance at closing.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "what an HOA can charge a buyer at closing in South Carolina")}.`) },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p("Each household must include at least one person who is 55 or older.") +
      h.p(`That rule is in the city's ${h.ext(AGREEMENT, "2020 agreement with Pulte")}, which states that "at least one member of the household must be at least 55 years of age."`) +
      h.p("The HOA's own rules cover guests, younger residents, leasing, pets, fences and golf carts. They are not online, so ask the management company for them before you sign.") +
      h.p(`Read ${h.a(HUB, "how an age-restricted community differs from an age-targeted one")}.`) },

    { h2: "Can you rent out a home in Del Webb North Myrtle Beach?", html:
      h.p("Any limit on renting is in the HOA's rules, which are not public. Get them before you sign if you may rent the home later.") +
      h.p("In Chapter3's experience, rental limits differ from one new community to the next, so our agents read each set of documents.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "whether an HOA can stop you renting your home")}.`) },

    { h2: "What will the property tax be on a Del Webb North Myrtle Beach home?", html:
      h.p("On a $699,965 home you live in, the 2025 property tax is about $3,000 a year.") +
      h.p("At 65, after a full year living in South Carolina, you can apply for the homestead exemption. On this home it saves about $214 a year.") +
      h.p("The city raised its tax rate for 2026, which adds about $140 a year on this home. As a second home, the same house would owe about $9,080 a year.") +
      h.p("<strong>Example:</strong> Linda and Ray are moving from Columbus, Ohio, with $700,000 to spend. Linda is 67 and Ray is 61. They buy the Stellar at $699,965 and make it their main home.") +
      h.p("Their first tax bill at 2025 rates is about $2,999. After a full year here, Linda applies for the homestead exemption, and their bill drops to about $2,784.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home you live in")}.`) },

    { h2: "Is Del Webb North Myrtle Beach in a flood zone?", html: (bg) =>
      h.p(`Every homesite in Del Webb North Myrtle Beach is in FEMA flood Zone X, the area of minimal flood hazard. ${h.ext(FEMA, "FEMA's flood map")} for the community took effect in December 2021.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "why Zone X does not mean no flood risk")}.`) +
      h.p(`Every home is west of US 17, outside the coastal area where the ${h.ext(WINDLAW, "state's wind and hail insurance pool")} sells coverage. From the HOA's office, US 17 is about 0.75 miles east.`) +
      h.cta("Want the insurance cost before you sign?", "Tell us the home design and the homesite. One of our agents gets you a homeowners and flood quote first.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How far is Del Webb North Myrtle Beach from the beach, the hospitals and the airport?", html:
      h.p("The 14th Avenue South beach access is about 1.0 mile by car from the HOA's office at 1285 Possum Trot Road.") +
      h.figure(driveChart(), "Miles by car from 1285 Possum Trot Road, the HOA's onsite office, with no traffic.") +
      h.ul([
        "North Strand ER, at 806 Hwy 17 S, is an emergency room open 24 hours, about 1.4 miles away.",
        "McLeod Health Seacoast in Little River, with 155 patient beds, is about 5.6 miles away.",
        "Grand Strand Medical Center, a 403-bed hospital in Myrtle Beach, is about 8.9 miles away.",
        "Myrtle Beach International Airport is about 19.3 miles away, or 35 minutes with no traffic.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospitals serve the Grand Strand")} and what each one offers.`) },

    { h2: "How does Del Webb North Myrtle Beach compare with three other 55+ communities?", html:
      h.p("Del Webb North Myrtle Beach is the one of these four where Pulte still sells new homes.") +
      compareTable() },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach a 55+ community?", a: "Yes, Pulte sells it as a 55+ community. The city's 2020 agreement with Pulte requires at least one member of each household to be 55 or older." },
    { q: "How much are the HOA dues in Del Webb North Myrtle Beach?", a: "Ask the management company, Associated Asset Management, for the current monthly dues before you sign. The dues include lawn care and a 175-channel TV package." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes, the community is inside North Myrtle Beach city limits. The city annexed the land in October 2020, so owners pay the city tax as well as the county and school tax." },
    { q: "How far is Del Webb North Myrtle Beach from the beach?", a: "About 1.0 mile by car from the HOA's office at 1285 Possum Trot Road to the 14th Avenue South beach access. US 17 is between the community and the ocean." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte Home Company builds them under its Del Webb name. In October 2026 it sold three home designs from $585,990 to $704,590: the Stardom, the Stellar and the Renown." },
  ],
  sources: [
    { name: "Pulte, Del Webb North Myrtle Beach", href: PULTE },
    { name: "City agreement with Pulte, 2020", href: AGREEMENT },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "Horry County 2026 tax levies", href: LEVY },
    { name: "SC Code 38-75-310", href: WINDLAW },
  ],
  sourcesNote: "Educational only, not legal or tax advice. Builder prices change. Drive distances are OpenStreetMap estimates.",
  bottomCta: { h2: "Know the dues and the HOA rules before you sign with Pulte.", p: "Call about the home design and the homesite you want. One of our agents will read the HOA documents with you.", label: "Call a specialized agent", href: TEL },
  keywords: "Del Webb North Myrtle Beach, Del Webb North Myrtle Beach prices, Del Webb North Myrtle Beach HOA dues, Del Webb North Myrtle Beach clubhouse, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
