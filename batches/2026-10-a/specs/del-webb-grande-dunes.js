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
 *         a newer set recorded 2025-01-09 is not online.
 * Tax:    the "City of Myrtle Beach" option in the calculator on /buyers/property-taxes/
 *         (tax year 2025, city credit 0.6745) and data/relocating/tax-engine.js.
 *         Results only: $1,784.93 on $500,000 as a primary home, $1,606.44 with
 *         the homestead exemption, $7,638 as a second home (rows 68 to 71).
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
/* FEMA's Flood Map Service Center search for the Welcome Center's address: a page
   a person can read. The NFHL queries the verifier ran stay in the ledger (row 60). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=6201%20Marina%20Parkway%2C%20Myrtle%20Beach%2C%20SC%2029572";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";

/* Yearly property tax on a $500,000 home at 2025 rates, from the website's
   calculator data (rows 68 to 71). */
const TAX = [
  ["Your main home", 1785],
  ["Your main home, owner 65 or older", 1606],
  ["A second home", 7638],
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
  const label = "Yearly property tax on a $500,000 home in Del Webb at Grande Dunes at 2025 rates: " + TAX.map(([n, v]) => `${n} ${usd(v)}`).join(", ") + ".";
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + TAX.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

const FACTS = [
  ["Where", "Inside Myrtle Beach city limits, between Bypass 17 and the Intracoastal Waterway"],
  ["Homes", "Houses and villas; 524 planned in 2017"],
  ["Who can live there", "At least one resident 55 or older in each occupied home; everyone else 19 or older"],
  ["Beach club", "Every owner pays the Grande Dunes beach club fee"],
  ["Shortest lease", "12 months, once a year"],
  ["Pets", "Up to three cats or dogs"],
  ["One-time fee at a resale", "The larger of one year's dues or 0.5 percent of the price"],
  ["Flood zone", "Zone X at every homesite"],
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
    "Lawn care is in the dues. Grand Strand Medical Center is about 2.3 miles away by car.",
    "At least one resident must be 55 or older. You can rent the home out for 12 months or more, once a year.",
  ],
  sections: [
    { h2: "What comes with a home in Del Webb at Grande Dunes?", html:
      h.p("A home in Del Webb at Grande Dunes comes with the Grande Dunes beach club and the community's own amenity center.") +
      h.p("When Pulte announced the community in 2017, it said beach club access would be part of the dues. Every owner still pays a beach club fee to the Grande Dunes Master Association, the association for all of Grande Dunes.") +
      h.p("The amenity center is open 7 a.m. to 9 p.m. on weekdays and 8 a.m. to 8 p.m. on weekends. Staff are on site during those hours. The pools have no lifeguards.") +
      h.p("The day dock on the Intracoastal Waterway is open to owners and their guests from dawn to dusk. Overnight docking is not allowed, and there is no boat ramp.") +
      h.p("Each household gets two resident cards for the amenities at no charge, plus two guest cards. When Pulte announced the community in 2017, it planned tennis, bocce and pickleball courts.") +
      h.table(["Fact", "Del Webb at Grande Dunes"], FACTS) },

    { h2: "What do the dues cover in Del Webb at Grande Dunes?", html:
      h.p("Your dues include basic lawn care, billed monthly and due on the first of the month. You still water and care for your own plants.") +
      h.p("The beach club fee and the other Grande Dunes Master Association charges are separate from the Del Webb dues. Ask the management company, Associated Asset Management, for the current monthly total for the home you like.") +
      h.p("In the first villa section, the association maintains the roofs, gutters, downspouts and exterior paint. Villa owners pay extra for that work. Ask whether the villa sections added later have the same terms.") +
      h.p(`At the end of September 2025, the association had about $1.0 million in its ${h.ext(FIN, "reserve accounts")}.`) },

    { h2: "What does a buyer pay at closing in Del Webb at Grande Dunes?", html:
      h.p("On a resale, the buyer pays the association a one-time fee, called working capital, at closing. It is the larger of one year's dues or 0.5 percent of the price.") +
      h.p("On a $500,000 home, 0.5 percent is $2,500. The board can change the amount, so ask for the current figure.") +
      h.p("Before closing, ask the management company for its letter stating what is owed on the home.") +
      h.p(`Read ${h.a("/hoa/estoppel-and-transfer-fees/", "who pays the HOA's closing letter and transfer fees")} in South Carolina.`) },

    { h2: "Who can live in Del Webb at Grande Dunes?", html:
      h.p("Every occupied home must have at least one resident who is 55 or older. Everyone else who lives there must be 19 or older.") +
      h.p(`The community's ${h.ext(DECL, "recorded rules")} say each home, "if occupied, shall be occupied by at least one (1) individual 55 years of age or older."`) +
      h.ul([
        "A guest under 19 can stay overnight up to 90 days in any 12 months.",
        "If the 55-plus resident moves out or dies, the other residents who are 19 or older can stay.",
        "Selling or leasing to someone under 55 who will live in the home needs the board's written approval.",
        "Tell the board within 10 days when the people living in the home change, or the association can fine you each day.",
      ]) +
      h.p("Pulte could sell new homes to buyers 50 or older who lived in them. On a resale, someone in the home must be 55 or older.") +
      h.p(`See ${h.a(HUB, "how the Grand Strand's age-restricted and age-targeted communities differ")}.`) },

    { h2: "Can you rent out a home in Del Webb at Grande Dunes?", html: (bg) =>
      h.p("Yes, for 12 months or more, and once a year. The whole home must be leased, with a written lease.") +
      h.p("Give the management company notice within 10 days of signing. A tenant gets amenity cards only if the household meets the 55+ rule. You cannot use your own cards while the home is leased.") +
      h.p(`These terms are in the ${h.ext(RULES, "posted rules, revised January 2019")}. The association adopted a newer set in January 2025 that is not online, so ask for it before you offer.`) +
      h.p("Our agents read the HOA documents for any limit on renting before a buyer makes an offer.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "what happens if an HOA adds a rental limit after you buy")}.`) +
      h.cta("Want to buy a home in Del Webb at Grande Dunes?", "Tell us how you plan to use the home. One of our agents will read the community's rules with you before you offer.", "Have us read the Grande Dunes rules with you", "/contact/", bg) },

    { h2: "What other rules apply in Del Webb at Grande Dunes?", html:
      h.p("You can have up to three cats or dogs, with no limit on dog breeds.") +
      h.ul([
        "Golf carts can go on the streets with a licensed driver, never on sidewalks.",
        "The speed limit inside the community is 25 mph.",
        "Mailboxes are at the amenity center, not at the homes.",
        "Back yard fences must be 4-foot black aluminum and approved first.",
        "Sheds, above-ground pools, window air conditioners and dog runs are not allowed.",
        "For-sale and for-rent signs are not allowed on homes, lots or cars.",
        "Storm shutters can go up 7 days before a forecast storm and must come down within 14 days if it misses.",
      ]) },

    { h2: "What will the property tax be on a Del Webb at Grande Dunes home?", html:
      h.p("On a $500,000 home you live in, the 2025 property tax is about $1,785 a year.") +
      h.p("Inside Myrtle Beach, a home you live in gets a city tax credit. The city lowered that credit for 2026, so the 2026 bill will be a little higher.") +
      h.p("Once you are 65 and have lived in South Carolina a full year, the homestead exemption saves about $178 a year on this home.") +
      h.figure(taxChart(), "Yearly property tax on a $500,000 home at 2025 rates, as a main home, with the homestead exemption at 65, and as a second home.") +
      h.p("The city can add a charge to the tax bill for the community's ponds and other public work. Check a recent tax bill on the home you like for that charge.") +
      h.p("<strong>Example:</strong> Carol and Jim are moving from Pittsburgh with up to $500,000 to spend on a resale house. Carol is 66 and Jim is 58, so their household meets the age rule.") +
      h.p("They buy a $500,000 house and make it their main home. They pay $2,500 or more in working capital at closing, and about $1,785 in property tax a year.") +
      h.p("After a full year here, Carol applies for the homestead exemption, and their tax drops to about $1,606 a year. As a second home, the same house would owe about $7,638.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how Horry County taxes a main home and a second home")}.`) },

    { h2: "Is Del Webb at Grande Dunes in a flood zone?", html: (bg) =>
      h.p(`Every homesite in Del Webb at Grande Dunes is in FEMA flood Zone X, the area of minimal flood hazard. ${h.ext(FEMA, "FEMA's flood map")} took effect in December 2021.`) +
      h.p("Some common land along the waterway is in Zone AE, a higher-risk flood zone. No homesite has a corner inside it.") +
      h.p("In ZIP code 29572, single-family flood policies for Zone X homes cost a median of $540 a year, fees included. Half of them cost between $440 and $756.") +
      h.p("Those figures include every such policy that began from June 2025 to May 2026 in the whole ZIP code. A quote on the house you like gives that home's own price.") +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what Zone X means for flood insurance")}.`) +
      h.p(`The community is west of Bypass 17, outside the coastal area where the ${h.ext(WINDLAW, "state's wind and hail insurance pool")} sells coverage. From 6201 Marina Parkway, the bypass is about half a mile east.`) +
      h.cta("Want the insurance cost before you offer?", "Ask for a quote on the exact house or villa. One of our agents gets it to you before you write the offer.", "Have us get a quote on the house or villa", "/contact/", bg) },

    { h2: "How far is Del Webb at Grande Dunes from the hospital?", html:
      h.p("Grand Strand Medical Center, a 403-bed hospital at 809 82nd Parkway, is about 2.3 miles by car from 6201 Marina Parkway.") +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "where each Grand Strand hospital is and what it offers")}.`) },

    { h2: "How does Del Webb at Grande Dunes compare with three other 55+ communities?", html:
      h.p("Del Webb at Grande Dunes is the only one of these four inside Myrtle Beach city limits.") +
      compareTable() },
  ],
  faqTitle: "Del Webb at Grande Dunes FAQ",
  faq: [
    { q: "Is Del Webb at Grande Dunes a 55+ community?", a: "Yes. Every occupied home must have at least one resident 55 or older, and everyone else must be 19 or older. A guest under 19 can stay overnight up to 90 days in any 12 months." },
    { q: "Do Del Webb at Grande Dunes owners get a beach club?", a: "Yes, every owner pays a beach club fee to the Grande Dunes Master Association. That fee is separate from the Del Webb dues." },
    { q: "What is the minimum lease at Del Webb at Grande Dunes?", a: "Twelve months, once a year. The whole home must be leased, with a written lease, and the management company must get notice within 10 days of signing." },
    { q: "Can you have pets in Del Webb at Grande Dunes?", a: "Yes, up to three cats or dogs in a home, with no limit on dog breeds. Dog runs are not allowed, and back yard fences must be 4-foot black aluminum." },
    { q: "Who manages Del Webb at Grande Dunes?", a: "Associated Asset Management manages the Del Webb at Grande Dunes Property Owners Association. Ask that company for the current monthly dues for a house or a villa." },
  ],
  sources: [
    { name: "Recorded rules, 2018", href: DECL },
    { name: "Posted rules, revised January 2019", href: RULES },
    { name: "Financial report, September 2025", href: FIN },
    { name: "FEMA Flood Map Service Center", href: FEMA },
    { name: "SC Code 38-75-310", href: WINDLAW },
  ],
  sourcesNote: "Not legal advice. The rules adopted in January 2025 were not online when read. The flood insurance figures come from FEMA's policy data. The drive distance is an OpenStreetMap estimate.",
  bottomCta: { h2: "See a Del Webb at Grande Dunes home with an agent who knows the rules.", p: "Call about the house or villa you like. An agent at Chapter3 will read the lease and age rules with you.", label: "Call to learn more", href: TEL },
  keywords: "Del Webb at Grande Dunes, Del Webb Grande Dunes beach club, Del Webb Grande Dunes HOA, Del Webb Grande Dunes rental rules, Del Webb at Grande Dunes villas",
  about: "Del Webb at Grande Dunes, a 55+ community by Pulte in Myrtle Beach, South Carolina",
};
