/* /buyers/55-plus-communities/myrtle-trace/ - what it costs to live in Myrtle Trace,
 * near Conway, what there is to do, and the 55+, rental and property rules.
 *
 * Rewritten 2026-10-06 for the owner's buyer-first lessons (voice/RULES.md,
 * class BUYER): life and cost first, good news before drawbacks, plain words
 * (no "declaration", "easement", "assessed value", "legal residence"), sources
 * in a few links and the sources line, and results instead of tax arithmetic.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md, PLAN.md (owner answers)
 * Facts:  Blog-Brain/batches/2026-10-a/facts/myrtle-trace-facts.md
 *         (verified rows only; wrong rows 19, 23, 24, 36, 42, 61, 62, 71, 77 and
 *         unverifiable rows 21, 27 are not used: no zoning, no acreage, no
 *         "two months of dues at closing", no facility list, no FEMA panel, no
 *         truck-parking vote date, no "every activity has a set time")
 *         Events: rows 78 to 80 ("about" 67 and 71 calendar entries, because the
 *         counts include a few club meetings). Flood insurance: rows 74 to 76,
 *         FEMA policy data for ZIP code 29526 and Zone X, not Myrtle Trace alone.
 * Rules:  the age rule is quoted from the HOA's online copy, which the HOA says
 *         is not a legal document (rows 1, 2).
 * Tax:    district 100's 2025 levy, 201 mills (row 72), and data/relocating/tax-engine.js.
 *         Results only: $1,102.80 on $300,000 as a primary home, $919 with the
 *         homestead exemption, $3,618 as a second home. Stormwater fee: row 73.
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 */
const { h } = require("../tools/mkpage.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/myrtle-trace/";
const TEL = "tel:+18543332135";

/* The comparison table shared by the four 55+ pages. One data file feeds all
   four, so each cell has one source; the file names the ledger rows. Each page
   links the other three in the first column. */
const COMPARE = require("../data/55-plus-communities.json");
const compareTable = () => h.table(COMPARE.head, COMPARE.rows.map(r =>
  [r.url === SELF ? r.cells[0] : h.a(r.url, r.cells[0]), ...r.cells.slice(1)]));

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const HOA = "https://myrtletracesc.org/";
const COV = "https://myrtletracesc.org/wp-content/uploads/Guidelines/MyrtleTraceCovenant.pdf";
const CAL = "https://myrtletracesc.org/2026-calendars/";
const CAPITAL = "https://myrtletracesc.org/wp-content/uploads/MTHOA-Policies-2025/CapitalContribution2024.pdf";
/* FEMA's Flood Map Service Center search for the HOA's address: a page a person
   can read. The NFHL queries the verifier ran stay in the ledger (row 60). */
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=101%20Myrtle%20Trace%20Drive%2C%20Conway%2C%20SC%2029526";
const WINDLAW = "https://www.scstatehouse.gov/code/t38c075.php";
/* The county's own stormwater fee page (row 73). The codified ordinance still
   shows the 2018 rate, so the page cites this page, not the code. */
const STORMWATER = "https://www.horrycountysc.gov/departments/stormwater/major-initiatives/utility-fee/";

/* What a resale buyer pays the HOA in the first 12 months, 2026 amounts (rows 30, 35). */
const FIRST12 = [
  ["One-time fee at closing", 1450],
  ["Dues, 12 months at $95", 1140],
  ["Certificate fee at closing", 100],
];
const usd = (n) => "$" + n.toLocaleString("en-US");
const TOTAL12 = FIRST12.reduce((a, r) => a + r[1], 0);

const firstYearChart = () => {
  const F = 'font-family="DM Sans, system-ui, sans-serif"';
  const top = 14, rowH = 62, barMax = 300, max = Math.max(...FIRST12.map(r => r[1]));
  const rows = FIRST12.map(([name, v], i) => {
    const y = top + i * rowH, w = Math.max(4, Math.round(v / max * barMax));
    return `<text x="12" y="${y + 18}" ${F} font-size="16" fill="#1c2028">${name}</text>`
      + `<rect x="12" y="${y + 27}" width="${w}" height="22" fill="#1c2028"/>`
      + `<text x="${12 + w + 8}" y="${y + 44}" ${F} font-size="16" font-weight="700" fill="#91592b">${usd(v)}</text>`;
  }).join("");
  const label = "What a resale buyer pays the Myrtle Trace HOA in the first 12 months at 2026 amounts: " + FIRST12.map(([n, v]) => `${n} ${usd(v)}`).join(", ") + `, ${usd(TOTAL12)} in all.`;
  return `<svg role="img" aria-label="${label}" viewBox="0 0 440 ${top + FIRST12.length * rowH}" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">${rows}</svg>`;
};

const FACTS = [
  ["Homes", "518 single-family homes and a few townhouses"],
  ["HOA dues", "$95 a month in 2026"],
  ["Paid to the HOA at a resale closing", "$1,550"],
  ["Activities", "About 70 calendar entries a month in fall 2026"],
  ["Who can live there", "At least one member of each household 55 or older"],
  ["Shortest lease", "One year"],
  ["Where", "Outside Conway city limits, so no city tax"],
  ["Flood zone", "Zone X"],
  ["Conway Medical Center", "About 0.8 miles by car"],
];

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Myrtle Trace in Conway: 55+ Dues, Fees and Life | Chapter3",
  description: "Myrtle Trace in Conway: $95 monthly HOA dues in 2026, about 70 activities a month, the $1,550 paid at closing, the 55+ and lease rules, taxes and flood insurance.",
  ogTitle: "Myrtle Trace, Conway: dues, activities, closing fees and the 55+ rule",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What does it cost to live in Myrtle Trace in Conway?",
  h1em: "$95 a month in dues.",
  sub: "Myrtle Trace has 518 homes, a clubhouse and pool, and HOA dues of $95 a month in 2026.",
  heroCta: { label: "Let us make it simple", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace's HOA dues are $95 a month in 2026. They pay for the pool, the clubhouse, the roads and the ponds.",
    "A resale buyer pays the HOA $1,550 in one-time fees at closing. The HOA's activities calendar listed about 70 entries a month in fall 2026.",
    "On a $300,000 home you live in, the property tax is about $1,103 a year, plus an $89.40 county stormwater fee. You maintain your own roof, exterior and lawn.",
  ],
  sections: [
    { h2: "What is there to do in Myrtle Trace?", html:
      h.p(`The Myrtle Trace ${h.ext(CAL, "activities calendar")} listed about 67 entries in September 2026 and about 71 in October.`) +
      h.p("The September calendar had a Labor Day picnic, music at the pool and a talk on avoiding falls at home. The October calendar lists a Myrtle Trace craft fair on Saturday, October 17.") +
      h.p("The HOA's activities committee has standing groups for bingo, game nights, line dancing, a coffee klatch and dining out. Bocce and shuffleboard each have a league with two divisions.") +
      h.p("The pool is open 8 a.m. to 9 p.m. every day. You and your house guests can fish from the HOA's land around 15 ponds, and every fish must be released.") +
      h.p("Thirteen walkways between homes lead to the common land. The streets have no sidewalks. Some lots back onto Burning Ridge Golf Club, a private course that is not part of the HOA.") +
      h.table(["Fact", "Myrtle Trace"], FACTS) },

    { h2: "What do the Myrtle Trace HOA dues pay for?", html: (bg) =>
      h.p("Your $95 a month pays for the pool, the clubhouse, the gate, the roads, the common land and the ponds.") +
      h.p("Dues went up from $90 in January 2026. The board added the $5 to its savings for pond and road work.") +
      h.p("Dues are due on the first of each month, and the HOA sends no bill unless you are behind. A $7 late fee is added for each month that is not paid.") +
      h.p("The HOA manages itself and has no management company. You maintain your own home and lot, including the roof, the outside of the house and the grass.") +
      h.p("The board can raise the yearly limit on dues by up to 10 percent a year without an owner vote. The HOA's 2023 history paper says it has never charged owners a one-time special fee.") +
      h.cta("Looking at a home in Myrtle Trace?", "Tell us the address. One of our agents will read the HOA's rules and policies with you before you offer.", "Have us read the Myrtle Trace HOA papers with you", "/contact/", bg) },

    { h2: "What does a buyer pay the Myrtle Trace HOA at closing?", html:
      h.p(`A resale buyer pays the HOA $1,550 at closing. That is a $1,450 one-time fee, which the HOA calls a ${h.ext(CAPITAL, "capital contribution")}, and a $100 certificate fee.`) +
      h.p(`With 12 months of dues, a buyer pays the HOA ${usd(TOTAL12)} in the first year at 2026 amounts.`) +
      h.figure(firstYearChart(), `Payments to the HOA in a resale buyer's first 12 months, at 2026 amounts: ${usd(TOTAL12)} in all. Property tax and insurance are separate.`) +
      h.p("Ask the HOA for its written statement of what is owed on the home before closing.") +
      h.p(`Read ${h.a("/hoa/documents/", "which HOA documents to request before you buy a resale home")}.`) },

    { h2: "Who can live in Myrtle Trace?", html:
      h.p("At least one member of every household in Myrtle Trace must be 55 or older. The HOA's rules have no minimum age for anyone else in the home.") +
      h.p(`The rule is in the ${h.ext(COV, "HOA's online copy of its rules")}. It reads: "no family may occupy a Living Unit unless at least one member thereof has attained the age of Fifty Five (55) years."`) +
      h.p("The HOA says that online copy is not a legal document. Get the original from the county Register of Deeds if you need the exact wording.") +
      h.p(`Read ${h.a(HUB, "how a recorded age rule changes who can buy the home later")}.`) },

    { h2: "Can you rent out a home in Myrtle Trace?", html:
      h.p("Yes, for one year at a time or longer. At least one tenant must be 55 or older and live in the home full time.") +
      h.p("File the HOA's owner and tenant form before the tenant moves in. The fine for a missing form is $500, charged again each month.") +
      h.p("In Chapter3's experience, many HOAs here ban renting a house at all. Myrtle Trace allows it, with these two rules.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "how HOA rental rules differ from city short-term rental rules")}.`) },

    { h2: "What other HOA rules apply in Myrtle Trace?", html:
      h.p("Pets must be on a leash off your own lot. They are not allowed in the clubhouse or the pool area, except service dogs.") +
      h.ul([
        "Trucks must be kept in the garage when not in use.",
        "Campers, boats, trailers and RVs cannot be parked in a driveway. You can get a permit to park them at the clubhouse lot.",
        "Fences between yards and along the front of a lot are not allowed. An approved dog run is allowed.",
        "Sheds, gazebos and private swimming pools are not allowed.",
        "Additions, new roofs and outside changes need the HOA's approval first. Inside changes do not.",
        "For-sale signs and real estate company signs are not allowed anywhere in Myrtle Trace.",
        "Lots next to the golf course must allow golf balls, play and noise from the course.",
      ]) +
      h.p("The front entrance on Burning Ridge Road has no gate, and the back entrance on Myrtle Ridge Road has gates. The HOA owns the private roads inside.") +
      h.p("The HOA recorded its latest guidelines in January 2026. Ask the HOA for the current set before you offer.") },

    { h2: "What will the property tax be on a Myrtle Trace home?", html:
      h.p("On a $300,000 home you live in, the 2025 property tax in Myrtle Trace is about $1,103 a year.") +
      h.p(`Owners here also pay the county's stormwater fee on the same bill. The county's ${h.ext(STORMWATER, "utility-fee page")} lists $7.45 a month, or $89.40 a year, for a single-family home.`) +
      h.p("Myrtle Trace is outside Conway city limits, so you pay no Conway city tax. At 65, after a full year living in South Carolina, the homestead exemption saves about $184 a year on this home.") +
      h.p("<strong>Example:</strong> Diane, 68, is moving from Charlotte with $300,000 to spend. She buys a resale home in Myrtle Trace for $300,000 and makes it her main home.") +
      h.p("Diane pays the HOA $1,550 at closing and $1,140 in dues for her first year. Her property tax is about $1,103 a year.") +
      h.p("After a full year here, she applies for the homestead exemption, and her tax drops to about $919. As a second home, the same house would owe about $3,618 a year.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how a main home and a rental are taxed in Horry County")}.`) },

    { h2: "Is Myrtle Trace in a flood zone?", html: (bg) =>
      h.p("Myrtle Trace is in FEMA flood Zone X, the area of minimal flood hazard. The homes on Berry Tree Lane, the closest to a mapped flood area, are also in Zone X.") +
      h.p("In ZIP code 29526, single-family flood policies for Zone X homes cost a median of $561 a year, fees included. Half cost between $432 and $725.") +
      h.p(`Those numbers include policies that began from June 2025 to May 2026 in the whole ZIP code, not Myrtle Trace alone. Check the home you like on ${h.ext(FEMA, "FEMA's flood map")}.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what a flood policy costs on a Zone X home")}.`) +
      h.p(`Myrtle Trace is west of both US 17 and Bypass 17. It is outside the coastal area where the ${h.ext(WINDLAW, "state's wind and hail insurance pool")} sells coverage.`) +
      h.cta("Want to know the insurance cost first?", "Ask us for a homeowners quote on the Myrtle Trace home you like, before you write the offer.", "Have us get you a homeowners quote", "/contact/", bg) },

    { h2: "How far is Myrtle Trace from the hospital, the airport and the beach?", html:
      h.p("Conway Medical Center is about 0.8 miles by car from the HOA's address at 101 Myrtle Trace Drive.") +
      h.ul([
        "Myrtle Beach International Airport is about 10.4 miles by car.",
        "The nearest public beach access by car is a City of Myrtle Beach access about 9.8 miles away.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospitals serve Conway and the rest of the Grand Strand")}.`) },

    { h2: "How does Myrtle Trace compare with three other 55+ communities?", html:
      h.p("Myrtle Trace dates from 1983, more than 20 years before the other three.") +
      compareTable() },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "How much are the HOA dues in Myrtle Trace?", a: "$95 a month in 2026, up from $90 in 2025. Dues are due on the first of each month. The HOA adds a $7 late fee for any month not paid." },
    { q: "Is Myrtle Trace a 55+ community?", a: "Yes, at least one member of every household must be 55 or older. A rented home must have at least one tenant 55 or older who lives there full time." },
    { q: "What activities does Myrtle Trace have?", a: "The HOA's activities calendar listed about 71 entries for October 2026, including a craft fair. Standing groups meet for bingo and game nights, and bocce and shuffleboard each have a league." },
    { q: "Is Myrtle Trace inside Conway city limits?", a: "No, Myrtle Trace is in unincorporated Horry County, outside Conway city limits. Its mailing city is Conway, and its owners pay no Conway city tax." },
    { q: "Does Myrtle Trace have a gate?", a: "The back entrance on Myrtle Ridge Road has gates, and the front entrance on Burning Ridge Road has none. The HOA says the back gates are there to stop cut-through traffic on Myrtle Trace Drive." },
    { q: "Who maintains the yard in Myrtle Trace?", a: "Each owner does. You maintain your lot and your home, including the roof, the outside of the house and the grass. The dues pay for the HOA's own land." },
  ],
  sources: [
    { name: "Myrtle Trace HOA home page", href: HOA },
    { name: "HOA activities calendars, 2026", href: CAL },
    { name: "HOA's online copy of its rules", href: COV },
    { name: "Capital contribution resolution", href: CAPITAL },
    { name: "FEMA Flood Map Service Center", href: FEMA },
  ],
  sourcesNote: "Not legal or tax advice. The HOA's online copy of its rules is not the recorded original. Flood insurance figures: FEMA policy data. Distances by car are OpenStreetMap estimates.",
  bottomCta: { h2: "Know the Myrtle Trace costs and rules before you offer.", p: "Call about the home you like. One of our agents will read the HOA's rules and rental policy with you.", label: "Call about Myrtle Trace", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace HOA dues, Myrtle Trace 55 community, Myrtle Trace activities, Myrtle Trace rental rules",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
