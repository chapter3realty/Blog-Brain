/* /buyers/55-plus-communities/del-webb-grande-dunes/ - what comes with a home in
 * Del Webb at Grande Dunes, who can live there and rent there, and the dues,
 * closing fee, tax, flood zone and flood insurance.
 *
 * Rewritten 2026-10-06 for the owner's buyer-first lessons (voice/RULES.md,
 * class BUYER): what the buyer gets first, good news before drawbacks, plain
 * words (no "declaration", "assessment", company initials), sources in a few
 * links and the sources line, and results instead of tax arithmetic.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md, PLAN.md (owner answers)
 * Facts:  Blog-Brain/batches/2026-10-a/facts/del-webb-grande-dunes-facts.md
 *         (verified rows only; wrong rows 19, 61, 64, 65 and unverifiable rows
 *         15, 22 to 25, 36, 42, 58, 67 are not used: no "sold out", no "gated",
 *         no beach distance, no airport time, no lifestyle director)
 *         Flood insurance: rows 72 to 75, FEMA policy data for ZIP code 29572
 *         and Zone X, not the community alone.
 * Rules:  the association's posted rules are the version revised January 2019;
 *         a newer set recorded 2025-01-09 is not online. Every rule from the
 *         posted copy is named with that date (review 2, item 1). The 12-month
 *         lease and the age rules are from the recorded 2018 rules (rows 1 to 7, 50).
 * Lawn care: row 31 note and row 33; the page does not say it is in the dues.
 * Tax:    2025 bills, the newest year verified for every part (the 2026 city credit
 *         is not verified). The "City of Myrtle Beach" option in the calculator on /buyers/property-taxes/
 *         (tax year 2025, city credit 0.6745) and data/relocating/tax-engine.js.
 *         Results only, on the typical sale of about $630,000 (rows 79, 80):
 *         $2,249.02 as a main home, $2,070.52 with the homestead exemption,
 *         $9,623.88 as a second home (rows 68 to 71).
 * Prices: rows 79 and 80 without the one sale on an unclear parcel (4999/1319),
 *         coordinator's decision: 43 resales, about $630,000 typical, half
 *         between about $449,000 and $703,000. Life: rows 77 and 78.
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/del-webb-grande-dunes/";
const TEL = "tel:+18543332135";

/* The comparison table shared by the four 55+ pages. One data file feeds all
   four, so each cell has one source; the file names the ledger rows. Each page
   links the other three in the first column. */
const COMPARE = require("../data/55-plus-communities.json");
const compareTable = () => h.table(COMPARE.head, COMPARE.rows.map(r =>
  [r.url === SELF ? r.cells[0] : h.a(r.url, r.cells[0]), ...r.cells.slice(1)]));

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const DECL = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083079";
const RULES = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3083089";
const FIN = "https://www.delwebbatgrandedunes.com/ResourceCenter/Download/48372~3384081";
const OCEANCLUB = "https://www.grandedunesoceanclub.com/homeownership";
/* FEMA's Flood Map Service Center search for the Welcome Center's address: a page
   a person can read. The NFHL queries the verifier ran stay in the ledger (row 60). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=6201%20Marina%20Parkway%2C%20Myrtle%20Beach%2C%20SC%2029572";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";
/* Horry County deed index, the source of the sale prices. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

/* Yearly property tax on a $630,000 home at 2025 rates, from the website's
   calculator data (rows 68 to 71). */
const TAX = [
  ["Your main home", 2249],
  ["Your main home, owner 65 or older", 2071],
  ["A second home", 9624],
];
const usd = (n) => "$" + n.toLocaleString("en-US");

const taxChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 14, rowH = 62, barMax = 300, max = Math.max(...TAX.map(t => t[1]));
  const rows = TAX.map(([name, v], i) => {
    const y = top + i * rowH, w = Math.max(4, Math.round(v / max * barMax));
    return `<text x="12" y="${y + 18}" ${F} font-size="16" fill="#1c2028">${name}</text>`
      + `<rect x="12" y="${y + 27}" width="${w}" height="20" fill="#1c2028"/>`
      + `<text x="${12 + w + 8}" y="${y + 43}" ${F} font-size="16" font-weight="700" fill="#91592b">${usd(v)}</text>`;
  }).join("");
  const label = "Yearly property tax on a $630,000 home in Del Webb at Grande Dunes on 2025 bills: " + TAX.map(([n, v]) => `${n} ${usd(v)}`).join(", ") + ".";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + TAX.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

const FACTS = [
  ["Where", "Inside Myrtle Beach city limits, between Bypass 17 and the Intracoastal Waterway"],
  ["Homes", "Houses and villas; 655 lots sold by the end of 2022"],
  ["Who can live there", "At least one resident 55 or older in each occupied home; everyone else 19 or older"],
  ["Beach club", "Every owner pays a beach club fee, on top of the Del Webb dues"],
  ["Shortest rental allowed", "12 months, once a year"],
  ["Pets", "Up to three cats or dogs, under the posted rules revised January 2019"],
  ["One-time fee at a resale", "The larger of one year's dues or 0.5 percent of the price"],
  ["Flood zone", "Zone X, low flood risk, at every lot"],
  ["Grand Strand Medical Center", "About 2.3 miles by car"],
];

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Del Webb at Grande Dunes: Life, Fees and 55+ Rules | Chapter3",
  description: "Del Webb at Grande Dunes in Myrtle Beach: the beach club and amenity center, who can live there, the 12-month lease rule, fees, taxes and flood insurance.",
  ogTitle: "Del Webb at Grande Dunes, Myrtle Beach: the beach club, the 55+ rule, fees and taxes",
  crumb: "Del Webb at Grande Dunes",
  eyebrow: "Myrtle Beach, 55+",
  h1: "What do you get in Del Webb at Grande Dunes in Myrtle Beach?",
  h1em: "Beach club, pools, waterway dock.",
  sub: "Del Webb at Grande Dunes has houses and villas in Myrtle Beach, between Bypass 17 and the Intracoastal Waterway.",
  heroCta: { label: "Speak to an expert", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Every owner in Del Webb at Grande Dunes pays for the Grande Dunes beach club. The community also has its own amenity center with pools and a day dock on the Intracoastal Waterway.",
    "Resale homes sold for a typical price of about $630,000 from October 2025 to September 2026. Grand Strand Medical Center is about 2.3 miles away by car.",
    "At least one resident must be 55 or older. You can rent the home out for 12 months or more, once a year.",
  ],
  sections: [
    { h2: "What comes with a home in Del Webb at Grande Dunes?", html:
      h.p("A home in Del Webb at Grande Dunes comes with the Grande Dunes beach club and the community's own amenity center.") +
      h.p("Every owner pays a beach club fee to the Grande Dunes Master Association, the association for all of Grande Dunes. That fee is on top of the Del Webb dues.") +
      h.p(`The ${h.ext(OCEANCLUB, "Grande Dunes Ocean Club")} is the beach club that fee pays for. It lists clubs such as Mexican Train, mahjong, knitting and women's clubs, plus holiday events, happy hours, wine tastings and dinners.`) +
      h.p("The Del Webb association also budgets for its own lifestyle program and for fitness and wellness.") +
      h.p(`Under the association's ${h.ext(RULES, "posted rules, revised January 2019")}, the amenity center is open 7 a.m. to 9 p.m. on weekdays. Weekend hours are 8 a.m. to 8 p.m., with staff on site.`) +
      h.p("The same rules say the pools have no lifeguards. The day dock on the Intracoastal Waterway is open to owners and their guests from dawn to dusk. There is no overnight docking and no boat ramp.") +
      h.p("Each household gets two resident cards for the amenities at no charge, plus two guest cards. A newer set of rules was recorded in January 2025, and our agents read it with you before you offer.") +
      h.table(["Fact", "Del Webb at Grande Dunes"], FACTS) },

    { h2: "What do homes in Del Webb at Grande Dunes sell for?", html:
      h.p("From October 2025 to September 2026, 43 resale homes in Del Webb at Grande Dunes sold for a typical price of about $630,000. Half sold for between about $449,000 and $703,000.") +
      h.p("The 14 villas that sold in the Villas at Heel Tract went for a typical $432,500. In the same months, the builder sold 7 new homes for about $697,000 to $916,000.") +
      h.p(`Read ${h.a("/hoa/documents/", "what to ask an HOA for before you buy a resale home")}.`) },

    { h2: "What do the dues cover in Del Webb at Grande Dunes?", html:
      h.p("Owners pay the association for basic lawn care. Ask whether it is in the monthly dues or billed as its own charge. You still water and care for your own plants.") +
      h.p("The beach club fee and the other Grande Dunes Master Association charges come on top of the Del Webb dues. One of our agents gets you the current monthly total for the home you like before you offer.") +
      h.p("In the first villa section, the association maintains the roofs, gutters, downspouts and exterior paint. Villa owners pay extra for that work. Ask whether the villa sections added later have the same terms.") +
      h.p(`Read ${h.a("/hoa/reserves/", "what an HOA's savings for repairs mean for an owner")}.`) },

    { h2: "What does a buyer pay at closing in Del Webb at Grande Dunes?", html:
      h.p("On a resale, the buyer pays the association a one-time fee, called working capital, at closing. It is the larger of one year's dues or 0.5 percent of the price.") +
      h.p("On a $630,000 home, that is at least $3,150, and more if a year's dues is higher. The board can change the amount.") +
      h.p("Before closing, get the association's letter stating what is owed on the home.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "who pays the HOA's closing letter and transfer fees")} in South Carolina.`) },

    { h2: "Who can live in Del Webb at Grande Dunes?", html:
      h.p("Every occupied home must have at least one resident who is 55 or older. Everyone else who lives there must be 19 or older.") +
      h.ul([
        "A guest under 19 can stay overnight up to 90 days in any 12 months.",
        "If the 55-plus resident moves out or dies, the other residents who are 19 or older can stay.",
        "Selling or leasing to someone under 55 who will live in the home needs the board's written approval.",
        "Tell the board right away when the people living in the home change. After 10 days, the association can fine you for each day.",
      ]) +
      h.p("The builder, Pulte, could sell new homes to buyers 50 or older who lived in them. On a resale, someone in the home must be 55 or older.") +
      h.p(`See ${h.a(HUB, "how the Grand Strand's age-restricted and age-targeted communities differ")}.`) },

    { h2: "Can you rent out a home in Del Webb at Grande Dunes?", html: (bg) =>
      h.p(`Yes, for 12 months or more, and once a year, under the community's ${h.ext(DECL, "recorded rules")}.`) +
      h.p("The posted rules, revised January 2019, add that the whole home must be leased, with a written lease. Give the management company notice within 10 days of signing.") +
      h.p("Under those rules, a tenant gets amenity cards only if the household meets the 55+ rule. You cannot use your own cards while the home is leased.") +
      h.p("Our agents read the HOA documents for any limit on renting before a buyer makes an offer.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "what happens if an HOA adds a rental limit after you buy")}.`) +
      h.cta("Want to buy a home in Del Webb at Grande Dunes?", "Tell us how you plan to use the home. One of our agents will read the community's rules with you before you offer.", "Have us read the Grande Dunes rules with you", "/contact/", bg) },

    { h2: "What other rules apply in Del Webb at Grande Dunes?", html:
      h.p("The association's posted rules, revised January 2019, allow up to three cats or dogs, with no limit on dog breeds. They also include these rules:") +
      h.ul([
        "Golf carts are allowed on the streets only, never on sidewalks, and only with a licensed driver.",
        "The speed limit inside the community is 25 mph.",
        "Mailboxes are at the amenity center, not at the homes.",
        "Back yard fences must be 4-foot black aluminum and approved first.",
        "Sheds, above-ground pools, window air conditioners and dog runs are not allowed.",
        "For-sale and for-rent signs are not allowed on homes, lots or cars.",
        "Storm shutters can go up 7 days before a forecast storm and must come down within 14 days if it misses.",
      ]) },

    { h2: "What will the property tax be on a Del Webb at Grande Dunes home?", html:
      h.p("On a $630,000 home you live in, the property tax is about $2,249 a year on 2025 bills.") +
      h.p("Inside Myrtle Beach, a home you live in gets a city tax credit. The city lowered that credit for 2026, so the next bill will be a little higher.") +
      h.p("Once you are 65 and have lived in South Carolina a full year, you can claim the homestead exemption. This tax break for the home you live in saves about $178 a year here.") +
      h.figure(taxChart(), "Yearly property tax on a $630,000 home, as a main home, with the homestead exemption at 65, and as a second home.") +
      h.p("The community's ponds are in a city improvement district, and the city may charge homes in it a special fee. Ask the seller whether the home has been charged one.") +
      h.p("<strong>Example:</strong> Carol, 66, and Jim, 58, are moving from Pittsburgh, and Carol's age meets the community's 55+ rule. They want a beach club, a pool and a golf cart, with up to $650,000 to spend.") +
      h.p("They compare a villa in the Villas at Heel Tract, where the typical sale was $432,500, with a house near the community's typical price. An agent at Chapter3 tells them to check the golf cart rules before they buy and reads the posted rules with them. Carts may use the streets with a licensed driver.") +
      h.p("Their surprise is the second-home tax: about $9,624 a year, against about $2,249 for the same house as their main home. They buy a $630,000 house and pay at least $3,150 in working capital at closing. Once Carol claims the 65+ tax break, their tax drops to about $2,071 a year.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) },

    { h2: "Is Del Webb at Grande Dunes in a flood zone?", html: (bg) =>
      h.p(`Every lot in Del Webb at Grande Dunes is in FEMA flood Zone X, an area of low flood risk. ${h.ext(FEMA, "FEMA's flood map")} took effect in December 2021.`) +
      h.p("Some common land along the waterway is in Zone AE, a higher-risk flood zone. No lot has a corner inside it.") +
      h.p("In ZIP code 29572, the middle single-family flood policy for a Zone X home cost $540 a year, fees included. Half of them cost between $440 and $756.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what Zone X means for flood insurance")}.`) +
      h.p(`The community is west of Bypass 17, outside the coastal area served by the ${h.ext(WINDLAW, "state's wind insurance plan")} for homes near the ocean.`) +
      h.cta("Want the insurance cost before you offer?", "Ask for a quote on the exact house or villa. One of our agents helps you get it before you write the offer.", "Have us get a quote on the house or villa", "/contact/", bg) },

    { h2: "How far is Del Webb at Grande Dunes from the hospital?", html:
      h.p("Grand Strand Medical Center, at 809 82nd Parkway, is about 2.3 miles by car from the Del Webb amenity center.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "where each Grand Strand hospital is and what it offers")}.`) },

    { h2: "How does Del Webb at Grande Dunes compare with three other 55+ communities?", html:
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits.") +
      compareTable() },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Is Del Webb at Grande Dunes a 55+ community?", a: "Yes. Every occupied home must have at least one resident 55 or older, and everyone else must be 19 or older. A guest under 19 can stay overnight up to 90 days in any 12 months." },
    { q: "Do Del Webb at Grande Dunes owners get a beach club?", a: "Yes, every owner pays a beach club fee to the Grande Dunes Master Association. That fee comes on top of the Del Webb dues." },
    { q: "What is the minimum lease at Del Webb at Grande Dunes?", a: "Twelve months, once a year. The posted rules, revised January 2019, also require a written lease for the whole home. The management company must get notice within 10 days." },
    { q: "Can you have pets in Del Webb at Grande Dunes?", a: "Yes. The posted rules, revised January 2019, allow up to three cats or dogs in a home, with no limit on dog breeds. Dog runs are not allowed." },
    { q: "Can you drive a golf cart in Del Webb at Grande Dunes?", a: "Yes, on the streets with a licensed driver, never on sidewalks, under the posted rules revised January 2019. The speed limit inside the community is 25 mph." },
  ],
  sources: [
    { name: "Recorded rules, 2018", href: DECL },
    { name: "Posted rules, revised January 2019", href: RULES },
    { name: "Financial report, September 2025", href: FIN },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "Horry County deed records", href: DEEDS },
  ],
  sourcesNote: "Not legal advice. The rules recorded in January 2025 were not online when read. FEMA policy data from June 2025 to May 2026 gives the flood costs, and the drive distance is an OpenStreetMap estimate.",
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the lease and age rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, Del Webb Grande Dunes beach club, Del Webb Grande Dunes HOA, Del Webb Grande Dunes rental rules, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
