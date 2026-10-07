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
 *         (verified rows only; rows 22, 33 and 42 are wrong and not used).
 *         Flood insurance: rows 54 to 56, FEMA policy data for ZIP code 29582
 *         and Zone X, not the community alone. Lifestyle: row 57.
 * Prices: rows 58 and 59 (deed records, October 2025 to September 2026). Row 59's
 *         verifier: closed prices only, nothing on lot premiums or contract dates.
 * Tax:    2026 levies, the newest year verified for every part of the bill
 *         (row 50: 171.2 county and school mills, 50.0 city mills; row 52: the
 *         109.1 school operating mills a home you live in does not pay) and
 *         data/relocating/tax-engine.js (4 and 6 percent, $50,000 homestead).
 *         Results only: $3,138.60 on $699,965 as a main home, $2,914.40 with the
 *         homestead exemption, $9,289.94 as a second home (review 2, item 7).
 * Story:  stories.json "rental-program-buildings", "new-community-rent-caps",
 *         "insurance-quote-before-offer". The example is labelled "Example".
 * Distances start at the clubhouse, 1285 Possum Trot Road (the HOA's onsite office), and are
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
/* Horry County deed index, the source of the sale prices. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

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
  description: "Del Webb North Myrtle Beach: new homes from $585,990 in October 2026, what the HOA dues include, the clubhouse, the 55+ rule, taxes, flood insurance and the beach.",
  ogTitle: "Del Webb North Myrtle Beach: new home prices, dues, the clubhouse and taxes",
  crumb: "Del Webb North Myrtle Beach",
  eyebrow: "North Myrtle Beach, 55+",
  h1: "What does a new home in Del Webb North Myrtle Beach cost?",
  h1em: "From $585,990 in October 2026.",
  sub: "About 408 Del Webb homes are built in North Myrtle Beach. New ones are still for sale, and the beach is about a mile away.",
  heroCta: { label: "Talk to an agent about Del Webb", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "New homes in Del Webb North Myrtle Beach started at $585,990 in October 2026. The highest starting price was $704,590.",
    "The typical resale home sold for $534,900 from October 2025 to September 2026. The clubhouse is open, and the beach is about a mile away by car.",
    "Your homeowners association (HOA) dues include lawn care and a 175-channel TV package. On a $699,965 home you live in, the property tax is about $3,139 a year on 2026 bills.",
  ],
  sections: [
    { h2: "What do new homes in Del Webb North Myrtle Beach cost?", html: (bg) =>
      h.p("In October 2026, the three Del Webb home designs here started at $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown. The builder, Pulte, sells them under its Del Webb name.") +
      h.table(["Home design", "Starting price", "From sq ft", "Bedrooms", "Baths", "Garage"], DESIGNS) +
      h.p("Some lots, upgrades and options can cost more than the starting price. The builder says the homes range from 2,179 to 3,728 square feet.") +
      h.p("About 408 of the community's roughly 500 lots had a house on them in October 2026. Homes finished in the last few months may not be counted yet.") +
      h.p("From October 2025 to September 2026, 19 resale homes here sold for $430,000 to $875,000. The typical resale price was $534,900.") +
      h.p("In the same months, the builder closed on 121 new homes for $398,890 to $958,140. Those are the prices buyers paid at closing, not today's starting prices.") +
      h.p("Two homes were due to be finished in October 2026, each with 3 bedrooms and 3.5 baths:") +
      h.ul(["a 2,240-square-foot Stellar at $699,965, down from $767,965", "a 2,712-square-foot Renown at $704,590, down from $799,590"]) +
      h.p("Each home comes with hurricane fabric panels for the windows and natural gas service. The builder says its 10-year warranty on the structure can pass to the next owner if you sell.") +
      h.p(`See the current homes on the ${h.ext(PULTE, "Del Webb North Myrtle Beach website")}.`) +
      h.cta("Buying a new Del Webb home in North Myrtle Beach?", "Tell us the home design and the lot you want. One of our agents can read the HOA documents with you before you sign the builder's contract.", "Have us read the HOA documents with you", "/contact/", bg) },

    { h2: "What is there to do in Del Webb North Myrtle Beach?", html:
      h.p("The 12,000-square-foot clubhouse is open, with a pool, an indoor lap pool, a fitness center and an arts and crafts room.") +
      h.p("A full-time lifestyle director works in the community, and residents have clubs and activity groups to join.") +
      h.p("The clubhouse also has a gathering room with sliding glass doors to an outdoor courtyard. The builder says the city's J. Bryan Floyd Community Center is beside the community, with an indoor gym for basketball and pickleball.") },

    { h2: "What do the HOA dues include in Del Webb North Myrtle Beach?", html:
      h.p("Your dues include lawn care and a 175-channel TV package. The community also has a fiber network for internet, but the builder does not say whether the dues pay for it.") +
      h.p("One of our agents gets you the current monthly dues, the HOA's budget and the charges due at closing before you sign.") +
      h.p("In Chapter3's experience, HOAs here commonly charge a buyer a few months of dues in advance at closing, plus a transfer fee. A transfer fee is a one-time fee paid to the HOA when a home is sold.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "what an HOA can charge a buyer at closing in South Carolina")}.`) },

    { h2: "Who can live in Del Webb North Myrtle Beach?", html:
      h.p(`Each household must include at least one person who is 55 or older. That rule comes from the city's ${h.ext(AGREEMENT, "2020 agreement with the builder")}.`) +
      h.p("The HOA's rules on guests, younger residents, renting, pets, fences and golf carts are recorded with the county but not online. Get them before you sign.") +
      h.p(`Read ${h.a(HUB, "how an age-restricted community differs from an age-targeted one")}.`) },

    { h2: "Can you rent out a home in Del Webb North Myrtle Beach?", html:
      h.p("Any limit on renting is in the HOA's recorded rules, which are not online. Read them before you sign if you may rent the home later.") +
      h.p("In Chapter3's experience, rental limits differ from one new community to the next, so our agents read each set of documents.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "whether an HOA can stop you renting your home")}.`) },

    { h2: "What will the property tax be on a Del Webb North Myrtle Beach home?", html:
      h.p("On a $699,965 home you live in, the property tax is about $3,139 a year on 2026 bills. The community is inside North Myrtle Beach city limits, so that includes the city tax.") +
      h.p("At 65, after a full year living in South Carolina, you can apply for the homestead exemption, a tax break for the home you live in. On this home it saves about $224 a year.") +
      h.p("As a second home, the same house would owe about $9,290 a year.") +
      h.p("<strong>Example:</strong> Linda, 67, and Ray, 61, are moving from Columbus, Ohio, to live near the beach, with $700,000 to spend. They want a pool, room for visiting grandchildren and no more lawn to mow.") +
      h.p("They tour the Stardom and the Stellar and choose the Stellar at its $699,965 starting price. The dues include lawn care, and the clubhouse has a pool and an indoor lap pool. Before they sign the builder's contract, an agent at Chapter3 reads the HOA's rules on guests and pets with them.") +
      h.p("Their surprise is flood insurance: in their ZIP code, the middle Zone X policy on a single-family home cost $602 a year. They budget about $3,139 a year in property tax, and about $2,914 once Linda claims the 65+ tax break.") +
      h.p("A New York household we worked with sold a $1 million house that had more than $20,000 a year in property tax. They bought a $700,000 house here and pay about $3,200 a year. That is one household's result, not a promise.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County works out the tax on a home you live in")}.`) },

    { h2: "Is Del Webb North Myrtle Beach in a flood zone?", html: (bg) =>
      h.p(`Every lot in Del Webb North Myrtle Beach is in FEMA flood Zone X, an area of low flood risk. ${h.ext(FEMA, "FEMA's flood map")} for the community took effect in December 2021.`) +
      h.p("In ZIP code 29582, the middle single-family flood policy for a Zone X home cost $602 a year, fees included. Half of those policies cost between $460 and $798.") +
      h.p("A quote on the home you pick can come in higher or lower.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "why Zone X does not mean no flood risk")}.`) +
      h.p(`Every home is west of US 17, outside the coastal area served by the ${h.ext(WINDLAW, "state's wind insurance plan")} for homes near the coast.`) +
      h.cta("Want the insurance cost before you sign?", "Tell us the home design and the lot. One of our agents helps you get a homeowners and flood quote before you sign.", "We help get insurance quotes if you need them.", "/contact/", bg) },

    { h2: "How far is Del Webb North Myrtle Beach from the beach, the hospitals and the airport?", html:
      h.p("The 14th Avenue South beach access is about 1.0 mile by car from the clubhouse.") +
      h.figure(driveChart(), "Miles by car from the Del Webb North Myrtle Beach clubhouse, with no traffic.") +
      h.ul([
        "North Strand ER, at 806 Hwy 17 S, is a freestanding emergency room open 24 hours, about 1.4 miles away.",
        "McLeod Health Seacoast in Little River is the nearest hospital, about 5.6 miles away.",
        "Grand Strand Medical Center in Myrtle Beach is about 8.9 miles away.",
        "Myrtle Beach International Airport is about 19.3 miles away.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospitals serve the Grand Strand")} and what each one offers.`) },

    { h2: "How does Del Webb North Myrtle Beach compare with three other 55+ communities?", html:
      h.p("Del Webb North Myrtle Beach is the newest of these four, and its builder still sells new homes there.") +
      compareTable() },
  ],
  faqTitle: "Del Webb North Myrtle Beach FAQ",
  faq: [
    { q: "Is Del Webb North Myrtle Beach a 55+ community?", a: "Yes, each household must include at least one person who is 55 or older, under the city's 2020 agreement with the builder." },
    { q: "Does Del Webb North Myrtle Beach have a lifestyle director?", a: "Yes, a full-time lifestyle director works in the community, and there are clubs and activity groups. The clubhouse has a pool, an indoor lap pool and a fitness center." },
    { q: "Is Del Webb North Myrtle Beach inside the city limits?", a: "Yes, the community is inside North Myrtle Beach city limits. The city annexed the land in October 2020, so owners pay the city tax as well as the county and school tax." },
    { q: "How far is Del Webb North Myrtle Beach from the beach?", a: "About 1.0 mile by car from the clubhouse to the 14th Avenue South beach access. US 17 is between the community and the ocean." },
    { q: "Who builds the homes in Del Webb North Myrtle Beach?", a: "Pulte Home Company builds them under its Del Webb name. In October 2026 its three home designs started at $585,990 to $704,590: the Stardom, the Stellar and the Renown." },
  ],
  sources: [
    { name: "Del Webb North Myrtle Beach website", href: PULTE },
    { name: "City agreement with the builder, 2020", href: AGREEMENT },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "Horry County 2026 tax levies", href: LEVY },
    { name: "Horry County deed records", href: DEEDS },
  ],
  sourcesNote: "Educational only, not legal or tax advice. Builder prices change. Flood costs are FEMA policy data for June 2025 to May 2026, and drive distances are OpenStreetMap estimates.",
  bottomCta: { h2: "Know the dues and the HOA rules before you sign with the builder.", p: "Call about the home design and the lot you want. One of our agents will read the HOA documents with you.", label: "Call about Del Webb North Myrtle Beach", href: TEL },
  keywords: "Del Webb North Myrtle Beach, Del Webb North Myrtle Beach prices, Del Webb North Myrtle Beach HOA dues, Del Webb North Myrtle Beach clubhouse, 55 plus community North Myrtle Beach",
  about: "Del Webb North Myrtle Beach, a 55+ community by Pulte in North Myrtle Beach, South Carolina",
};
