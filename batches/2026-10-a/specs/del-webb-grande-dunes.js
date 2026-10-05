/* /buyers/55-plus-communities/del-webb-grande-dunes/ - whether a home in Del Webb at
 * Grande Dunes can be rented out, the recorded 55+ rule, what a buyer pays, the
 * tax, the flood zone and the wind pool side.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md
 * Facts:  Blog-Brain/batches/2026-10-a/facts/del-webb-grande-dunes-facts.md
 *         (verified rows only; wrong rows 19, 61, 64, 65 and unverifiable rows
 *         15, 22 to 25, 36, 42, 58, 67 are not used: no "sold out", no "gated",
 *         no beach distance, no airport time, no FEMA panel list)
 * Rules:  every rule quoted from the association's posted rules is named as
 *         "the association's posted rules, revised January 2019". The rules
 *         recorded 2025-01-09 have not been read.
 * Tax:    the "City of Myrtle Beach" option in the calculator on /buyers/property-taxes/
 *         (254.6 mills, 83.4 city mills, Tourism Development Fee credit 0.6745,
 *         tax year 2025) and data/relocating/tax-engine.js.
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const NMB = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";
const SPCW = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const DECL = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083079";
const RULES = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083089";
const FIN = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3384081";
const FEMA = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query?geometry=-78.842661,33.749305&amp;geometryType=esriGeometryPoint&amp;inSR=4326&amp;outFields=FLD_ZONE,ZONE_SUBTY,SFHA_TF,STATIC_BFE,V_DATUM&amp;returnGeometry=false&amp;f=json";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const SCHOOLLAW = "https://www.scstatehouse.gov/code/t12c037.php";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";

/* The association's 2025 annual budget, assessment lines (rows 33 and 34),
   from its September 2025 financial report. Whole-association totals. */
const BUDGET = [
  ["Assessments", 1835460],
  ["GD Ocean Club", 781440],
  ["GD Master Association", 615384],
  ["Landscaping", 493734],
  ["Villas", 177036],
  ["Lawn Villas", 153397],
  ["Termite Villas", 33720],
];
const usd = (n) => "$" + n.toLocaleString("en-US");

const budgetChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 14, rowH = 58, barMax = 290, max = Math.max(...BUDGET.map(b => b[1]));
  const rows = BUDGET.map(([name, v], i) => {
    const y = top + i * rowH, w = Math.max(4, Math.round(v / max * barMax));
    return `<text x="12" y="${y + 18}" ${F} font-size="16" fill="#1c2028">${name}</text>`
      + `<rect x="12" y="${y + 26}" width="${w}" height="20" fill="#1c2028"/>`
      + `<text x="${12 + w + 8}" y="${y + 42}" ${F} font-size="16" font-weight="700" fill="#91592b">${usd(v)}</text>`;
  }).join("");
  const label = "Del Webb at Grande Dunes association, 2025 budget assessment lines for the whole association: " + BUDGET.map(([n, v]) => `${n} ${usd(v)}`).join(", ") + ".";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + BUDGET.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

const FACTS = [
  ["Location", "Inside Myrtle Beach city limits, between Bypass 17 and the Intracoastal Waterway"],
  ["Homeowners association", "Del Webb at Grande Dunes Property Owners Association, managed by AAM"],
  ["Age rule", "At least one resident 55 or older in each occupied home"],
  ["Other residents", "19 or older"],
  ["Overnight stays under 19", "No more than 90 days in any 12 months"],
  ["Minimum lease", "12 months, one lease a year"],
  ["Working capital at a resale", "The larger of one year's regular assessment or 0.5 percent of the price"],
  ["Beach Club fee", "Mandatory, paid to the Grande Dunes Master Association"],
  ["Flood zone at the home lots", "Zone X, on FEMA's map effective December 2021"],
  ["Wind pool coastal area", "Outside it, west of Bypass 17"],
  ["Tax districts", "880 and 882, at 254.6 mills in 2025"],
  ["Grand Strand Medical Center", "About 2.3 miles by car from 6201 Marina Parkway"],
];

module.exports = {
  url: "/buyers/55-plus-communities/del-webb-grande-dunes/",
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Del Webb at Grande Dunes: Renting, Fees, 55+ Rules | Chapter3",
  description: "Del Webb at Grande Dunes in Myrtle Beach: the 12-month lease rule, the recorded 55+ rule, the resale working capital charge, taxes, flood zone and villa upkeep.",
  ogTitle: "Del Webb at Grande Dunes, Myrtle Beach: renting, the 55+ rule, closing fees and taxes",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "Can you rent out a home in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "Yes, with a 12-month minimum.",
  sub: "Del Webb at Grande Dunes allows home leases of 12 months or more, one lease a year, under rules recorded in 2018.",
  heroCta: { label: "Speak to an expert", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Yes, for a lease of at least 12 months, and one lease a year. Pulte recorded that rule for Del Webb at Grande Dunes in 2018, and the association can adopt other lease terms.",
    "The association's posted rules, revised January 2019, also require a written lease for the whole home. The owner must give the management company notice within 10 days of signing.",
    "A tenant household must still meet the age rule: one resident 55 or older, and the rest 19 or older.",
  ],
  sections: [
    { h2: "What is Del Webb at Grande Dunes?", html:
      h.p("Del Webb at Grande Dunes is a 55+ community of single-family houses and villas inside Myrtle Beach city limits. The community is part of Grande Dunes, a master-planned development of homes and businesses.") +
      h.p("A community's declaration is its main recorded set of rules.") +
      h.p("Pulte Home Company recorded the community's declaration in February 2018 and amended it or added land through October 2020. When Pulte announced the community in May 2017, it planned 524 single-family homes. The supplemental declaration for the villas was recorded in February 2019.") +
      h.p("The Grande Dunes Master Association is the association for the whole Grande Dunes development. The homes are also subject to its declaration, recorded in 2000.") +
      h.p("Del Webb at Grande Dunes Property Owners Association, Inc. is the homeowners association, and Associated Asset Management, called AAM, manages it. The association's Welcome Center is at 6201 Marina Parkway, on land the association owns.") +
      h.p("The community is between Bypass 17 and the Intracoastal Waterway.") +
      h.table(["Fact", "Del Webb at Grande Dunes"], FACTS) },

    { h2: "What does the 55+ rule at Del Webb at Grande Dunes require?", html:
      h.p("Every occupied home in Del Webb at Grande Dunes must have at least one resident who is 55 or older.") +
      h.p(`The ${h.ext(DECL, "declaration")} says each lot, "if occupied, shall be occupied by at least one (1) individual 55 years of age or older."`) +
      h.p("The declaration adds these terms:") +
      h.ul([
        "Other residents must be 19 or older.",
        "No one under 19 can stay overnight for more than 90 days in any 12 months.",
        "To occupy a home means staying overnight there at least 90 days in any 12 months.",
        "Once a home qualifies, other qualified residents can keep living there after the 55-plus resident's occupancy ends.",
        "An owner needs the board's written approval to lease or sell to a person under 55 who will live there.",
        "Every lease or sale contract must say, in prominent type, that the homes are meant for people 55 or older.",
      ]) +
      h.p("The declaration also counts as age-qualified an owner 50 or older who bought the lot new from the developer and lives there. A buyer on a resale cannot qualify that way.") +
      h.p("Owners must tell the board right away when the people living in the home change. The association can fine an owner for each day after 10 days without that notice.") +
      h.p(`See ${h.a(HUB, "how the Grand Strand's age-restricted and age-targeted communities differ")}.`) },

    { h2: "Can you rent out a home in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("An owner can lease a home for a term of at least 12 months, one time per year, under the recorded declaration. The declaration also allows other lease terms if the association's rules state them.") +
      h.p("The association recorded a 28-page set of rules in January 2025. Its posted copy is still the version revised in January 2019. Ask AAM for the 2025 rules before you sign a lease or a contract.") +
      h.p(`The association's ${h.ext(RULES, "posted rules, revised January 2019")}, add these lease terms:`) +
      h.ul([
        "The whole home must be leased, never part of it.",
        "Every lease must be in writing.",
        "The management company must get notice of the lease within 10 days of signing.",
        "A tenant gets amenity cards only if the household meets the 55+ rule.",
        "The owner cannot keep amenity cards while the home is leased.",
      ]) +
      h.p("Our agents read the HOA documents for any limit on renting before a buyer makes an offer.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "what happens if an HOA adds a rental limit after you buy")}.`) +
      h.cta("Planning to lease your Grande Dunes home?", "Tell us how you plan to use the home. One of our agents will read the declaration and the current rules with you before you offer.", "Get the rules checked before you offer", "/contact/", bg) },

    { h2: "What does a buyer pay at closing in Del Webb at Grande Dunes?", html:
      h.p("A buyer pays the association a one-time working capital assessment at closing. On a resale, the amended declaration says it is the larger of one year's regular assessment or 0.5 percent of the price. The developer or the board can change that amount.") +
      h.p("The association budgeted $96,000 in working capital from resales for 2025.") +
      h.p("Owners also pay the Grande Dunes Master Association, including a mandatory Beach Club fee. The declaration says the master charges are separate from, and in addition to, the association's own assessments.") +
      h.p("An estoppel letter is the association's written statement of what is owed on a home. Before you offer, ask AAM for the current monthly assessment, including the Master Association and Beach Club charges. Ask for the estoppel letter before closing.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "who pays the estoppel letter and the transfer fees")} in South Carolina.`) },

    { h2: "What do the dues pay for at Del Webb at Grande Dunes?", html:
      h.p("The association's posted rules, revised January 2019, say base assessments are billed monthly and are due on the first of the month.") +
      h.p("The same rules say general lawn care is included with the base assessment. The 2025 budget also lists landscaping as a separate assessment line. Ask AAM which charges the current monthly amount includes.") +
      h.p(`The association's ${h.ext(FIN, "2025 budget")} lists seven assessment lines for the whole association.`) +
      h.figure(budgetChart(), "Annual totals in the association's 2025 budget, from its September 2025 financial report. They are totals for the whole association, not the amount one home pays.") +
      h.p("At the end of September 2025, the association reported $1,000,965.96 in its reserve accounts.") +
      h.p("The declaration says the community is in the Marina Tract South Improvement District, which includes its ponds. The city can charge property in that district special assessments for the ponds and other public improvements. Check a recent tax bill on the home for that charge.") },

    { h2: "What does the association maintain on the villas at Grande Dunes?", html:
      h.p("For the villas, the recorded supplement says the association shall maintain the roofs, gutters, downspouts and exterior paint. The association's work does not include HVAC equipment, doors, hose bibs, outside light fixtures, windows or screens.") +
      h.p("The board chooses the standard for that work and how often it is done. Villa owners pay a specific purpose assessment for the work, including reserves for roof replacement.") },

    { h2: "What amenities does Del Webb at Grande Dunes have?", html:
      h.p("When Pulte announced the community in 2017, it planned a 15,000-square-foot amenity center on the Intracoastal Waterway. The plan listed indoor and outdoor pools, fitness rooms, and tennis, bocce and pickleball courts.") +
      h.p("Under the association's posted rules, revised January 2019, the amenity center is open 7 a.m. to 9 p.m. on weekdays. Weekend hours are 8 a.m. to 8 p.m., and the board can change the hours. Management company staff are on site during those hours.") +
      h.p("The same rules say the pools have no lifeguards. The day dock is for owners and their guests, from dawn to dusk, with no overnight docking. The community has no boat ramp to the dock.") +
      h.p("Each household gets two resident amenity cards at no charge, plus two guest cards.") },

    { h2: "What other rules apply at Del Webb at Grande Dunes?", html:
      h.p("The association's posted rules, revised January 2019, allow up to three cats or dogs per home, with no restriction on dog breeds.") +
      h.ul([
        "Yard fences must be 4-foot black aluminum, start at the rear corners of the house, and be approved first.",
        "Golf carts are allowed on the streets only, never on sidewalks, and the driver needs a valid license.",
        "The speed limit inside the community is 25 mph.",
        "Every resident's mailbox is at the amenity center.",
        "For-sale and for-rent signs are not allowed on a lot, a house or a vehicle.",
        "Sheds, above-ground pools, window air conditioners and dog runs are not allowed.",
        "Storm protection can go up no more than 7 days before a forecast storm.",
        "If the storm does not hit, the storm protection must come down within 14 days.",
      ]) +
      h.p("Ask AAM whether the rules recorded in January 2025 change any of these.") },

    { h2: "What will the property tax be on a Del Webb at Grande Dunes home?", html:
      h.p("On a $500,000 primary residence in Del Webb at Grande Dunes, the 2025 property tax is about $1,785 a year.") +
      h.p("Assessed value is the share of a home's value that the county taxes. A mill means $1 of tax on each $1,000 of assessed value.") +
      h.p("Lots in Del Webb at Grande Dunes are in county tax districts 880 and 882, inside Myrtle Beach city limits. 2025 bills under both codes show 171.2 county and school mills and 83.4 city mills, 254.6 in all. The 2026 levy sheet lists the same 171.2 and 83.4 mills.") +
      h.p(`A legal residence is a primary residence the county has approved for the 4 percent ratio. Every other home is assessed at 6 percent. Under ${h.ext(SCHOOLLAW, "state law")}, a legal residence is exempt from the 109.1 school operating mills.`) +
      h.p("Inside Myrtle Beach, the owner of a legal residence also gets the city's Tourism Development Fee credit. At its 2025 level, the credit was 67.45 percent of the city's part of the tax.") +
      h.p("An owner who is 65 or older, after one full calendar year of South Carolina residency, qualifies for the homestead exemption. The first $50,000 of the home's value is then exempt.") +
      h.p("<strong>Example:</strong> Carol and Jim are moving from Pittsburgh with up to $500,000 to spend on a resale house. Carol is 66 and Jim is 58, so their household meets the age rule. They offer $500,000 on a house and plan to make it their legal residence.") +
      h.ul([
        "<strong>Working capital at closing:</strong> 0.5 percent × $500,000 = $2,500, or one year's regular assessment if that is larger.",
        "<strong>Assessed value:</strong> $500,000 × 4 percent = $20,000.",
        "<strong>Tax before the city credit:</strong> $20,000 × (254.6 − 109.1) ÷ 1,000 = $2,910.",
        "<strong>City credit:</strong> $20,000 × 83.4 ÷ 1,000 × 67.45 percent = $1,125.07.",
        "<strong>2025 tax as a legal residence:</strong> $2,910 − $1,125.07 = $1,784.93 a year.",
      ]) +
      h.p("After a full calendar year here, Carol can claim the homestead exemption. On $450,000 of taxable value, the 2025 tax would be $1,606.44 a year.") +
      h.p("Their 2026 bill will use the newly certified rates and the city's 2026 credit.") +
      h.p("If the house were their second home, they would owe all 254.6 mills on a 6 percent assessment, with no city credit. That is $500,000 × 6 percent × 254.6 ÷ 1,000 = $7,638 a year.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a legal residence and a second home")}.`) },

    { h2: "Is Del Webb at Grande Dunes in a flood zone?", html: (bg) =>
      h.p(`On FEMA's map, the center of every home lot here is in Zone X, the area of minimal flood hazard. ${h.ext(FEMA, "FEMA's map")} took effect in December 2021.`) +
      h.p("Zone AE is one of FEMA's special flood hazard areas. Some common land along the waterway is in Zone AE, and no home lot touches it.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what Zone X means for flood insurance")}.`) +
      h.p(`The wind pool is the state association that writes wind and hail insurance for the coast. ${h.ext(WINDLAW, "State law")} defines its coastal area in Horry County by two roads, US 17 and Bypass 17. The coastal area is the land east of whichever road is farther west.`) +
      h.p("In Myrtle Beach, Bypass 17 is the more westerly road, and Del Webb at Grande Dunes is west of it. Measured due east from 6201 Marina Parkway, the bypass is about half a mile away. The community is outside the coastal area.") +
      h.p("An agent at Chapter3 can get an insurance quote on a Grande Dunes house or villa before you make an offer.") +
      h.cta("Want the insurance cost before you offer?", "Ask for a quote on the exact house or villa. One of our agents gets it to you before you write the offer.", "Get an insurance quote before you offer", "/contact/", bg) },

    { h2: "How far is Del Webb at Grande Dunes from the hospital?", html:
      h.p("Grand Strand Medical Center, a 403-bed hospital at 809 82nd Parkway, is about 2.3 miles by car from 6201 Marina Parkway. The straight-line distance is about 1.4 miles. The drive estimate uses OpenStreetMap roads with no traffic.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "where each Grand Strand hospital is and what it offers")}.`) },

    { h2: "How does Del Webb at Grande Dunes compare with three other 55+ communities?", html:
      h.p("Del Webb at Grande Dunes is inside Myrtle Beach city limits, under a declaration Pulte recorded in 2018.") +
      h.ul([
        `${h.a(NMB, "Del Webb North Myrtle Beach")}, Pulte's newer Del Webb community, still has new homes for sale from Pulte.`,
        `${h.a(MT, "Myrtle Trace")}, outside Conway, has the oldest declaration of the four, recorded in 1983.`,
        `${h.a(SPCW, "Seasons at Prince Creek West")}, near Murrells Inlet, also requires leases of at least one year under its 2017 charter copy.`,
      ]) },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Is Del Webb at Grande Dunes a 55+ community?", a: "Yes, its recorded declaration requires every occupied home to have at least one resident 55 or older. Other residents must be 19 or older. No one under 19 can stay overnight more than 90 days in any 12 months." },
    { q: "What is the minimum lease at Del Webb at Grande Dunes?", a: "Twelve months, with one lease a year, under the recorded declaration, unless the association's rules allow other terms. The association's posted rules, revised January 2019, also require a written lease for the whole home." },
    { q: "What does a buyer pay at closing in Del Webb at Grande Dunes?", a: "A working capital assessment. On a resale, the amended declaration says it is the larger of one year's regular assessment or 0.5 percent of the price. The board can change that amount. On a $500,000 price, 0.5 percent is $2,500." },
    { q: "Do Del Webb at Grande Dunes owners pay a Beach Club fee?", a: "Yes, the declaration says every owner pays the Grande Dunes Master Association a mandatory Beach Club fee. Those master charges are separate from, and in addition to, the Del Webb association's own assessments." },
    { q: "Is Del Webb at Grande Dunes in a flood zone?", a: "On FEMA's map effective December 2021, the center of every home lot is in Zone X, the area of minimal flood hazard. Some common land along the waterway is in Zone AE." },
    { q: "Who manages Del Webb at Grande Dunes?", a: "Associated Asset Management, called AAM, manages the Del Webb at Grande Dunes Property Owners Association. Ask AAM for the current monthly assessment for a house or a villa." },
  ],
  sources: [
    { name: "Declaration, 2018", href: DECL },
    { name: "Posted rules, revised January 2019", href: RULES },
    { name: "Financial report, September 2025", href: FIN },
    { name: "FEMA flood map query", href: FEMA },
    { name: "Horry County 2026 tax levies", href: LEVY },
  ],
  sourcesNote: "Not legal advice. The rules recorded in January 2025 were not online when read.",
  bottomCta: { h2: "Read the Del Webb at Grande Dunes rules before you offer.", p: "Call about the house or villa you like. An agent at Chapter3 will read the lease and age rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, Del Webb Grande Dunes rental rules, Del Webb Grande Dunes HOA, Del Webb Grande Dunes age rule, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
