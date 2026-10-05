/* /buyers/55-plus-communities/myrtle-trace/ - what it costs to live in Myrtle Trace,
 * near Conway: dues, closing fees, tax, and the 55+, rental and property rules.
 *
 * Brief:  Blog-Brain/batches/2026-10-a/WRITER-BRIEF.md
 * Facts:  Blog-Brain/batches/2026-10-a/facts/myrtle-trace-facts.md
 *         (verified rows only; wrong rows 19, 23, 24, 36, 42, 61, 62, 71 and
 *         unverifiable rows 21, 27 are not used: no zoning, no acreage, no
 *         phase 8 count, no "two months of dues at closing", no facility list,
 *         no FEMA panel, no truck-parking vote date)
 * Rules:  the age rule is quoted from the HOA's posted OCR copy of the declaration
 *         and attributed to it as "the HOA's posted copy of the declaration"
 *         (review M1). Each HOA policy is named with its date.
 * Tax:    district 100's 2025 levy, 201 mills, from the Treasurer's 2025 bill for
 *         the HOA's recreational parcel, PIN 40003010085 (row 72, review M4), and
 *         data/relocating/tax-engine.js (4 percent ratio, 109.1 school operating
 *         mills, $50,000 homestead). Stormwater fee: the county's utility-fee page,
 *         $7.45 a month or $89.40 a year for a single-family home (row 73, M5).
 * Story:  stories.json "hoa-rental-bans-filtered", "insurance-quote-before-offer".
 * Review: batches/2026-10-a/REVIEW.md, fixes M1 to M18 and the shared comparison
 *         table (data/55-plus-communities.json). The second halves of M2 and M3
 *         wait for a verified row on the HOA's closing form (row 36 is wrong).
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
const NEWS = "https://myrtletracesc.org/wp-content/uploads/News-Views/NV2026/2026-01-Jan-NV.pdf";
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
  ["Capital contribution", 1450],
  ["Dues, 12 months at $95", 1140],
  ["Certificate fee", 100],
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
  ["Location", "Unincorporated Horry County, outside Conway city limits"],
  ["HOA address", "101 Myrtle Trace Drive, Conway"],
  ["Homes", "518"],
  ["Age rule", "At least one member of each household 55 or older"],
  ["HOA dues", "$95 a month in 2026, $90 in 2025"],
  ["Paid to the HOA at a resale closing", "$1,450 capital contribution and $100 certificate fee"],
  ["Management", "Self-managed, per the HOA"],
  ["Minimum lease", "One year"],
  ["Roads", "Private, owned by the HOA"],
  ["Flood zone", "Zone X"],
  ["Wind pool coastal area", "Outside it, about 6.4 miles from Bypass 17"],
  ["Tax district", "100, for all but one parcel; 201 mills in 2025"],
  ["County stormwater fee", "$89.40 a year for a single-family home"],
  ["Conway Medical Center", "About 0.8 miles by car"],
  ["Myrtle Beach International Airport", "About 10.4 miles by car"],
  ["Nearest public beach access", "About 9.8 miles by car"],
];

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  title: "Myrtle Trace in Conway: 55+ Dues, Fees and Rules | Chapter3",
  description: "Myrtle Trace in Conway: $95 monthly HOA dues in 2026, the $1,450 capital contribution, the 55+ and one-year lease rules, the 2025 tax, flood zone and distances.",
  ogTitle: "Myrtle Trace, Conway: dues, closing fees, the 55+ rule and taxes",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What does it cost to live in Myrtle Trace in Conway?",
  h1em: "$95 a month in dues.",
  sub: "Myrtle Trace's HOA dues are $95 a month in 2026. A resale buyer pays the HOA $1,550 in one-time fees at closing.",
  heroCta: { label: "Let us make it simple", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace's homeowners association, the HOA, charges dues of $95 a month in 2026, up from $90 in 2025.",
    "A resale buyer pays the HOA a one-time $1,450 capital contribution and a $100 certificate fee at closing.",
    "At 2025 tax rates, the property tax on a $300,000 primary residence there is about $1,103 a year. Owners also maintain their own roofs, exteriors and lawns.",
  ],
  sections: [
    { h2: "What is Myrtle Trace in Conway?", html:
      h.p("Myrtle Trace is a 55+ community of 518 homes in unincorporated Horry County, outside Conway city limits. Its mailing city is Conway, and the HOA's address is 101 Myrtle Trace Drive.") +
      h.p("Myrtle Trace's declaration is the recorded document that lists its rules.") +
      h.p("International Paper Realty Corporation made the declaration, recorded in November 1983, and named Myrtle Trace, a partnership, as the developer. The eight phases were added by supplements recorded from 1984 to 1994.") +
      h.p("The HOA's home page says Myrtle Trace has single-family homes and a few townhouses. The original floor plans the HOA posts have two or three bedrooms. Four of those plans list 1,514 to 2,018 square feet of living area.") +
      h.p("The HOA says it is self-managed and relies mainly on unpaid volunteers. Myrtle Trace South and Myrtle Trace Grande are separate subdivisions, each with its own HOA.") +
      h.table(["Fact", "Myrtle Trace"], FACTS) },

    { h2: "What does the 55+ rule in Myrtle Trace require?", html:
      h.p("The HOA's posted copy of the declaration says at least one member of every household must be 55 or older.") +
      h.p(`The ${h.ext(COV, "posted copy")} states: "no family may occupy a Living Unit unless at least one member thereof has attained the age of Fifty Five (55) years."`) +
      h.p("The HOA's posted copy states no minimum age for the other people in the home.") +
      h.p("The HOA says its online copy is a typed convenience copy and not a legal document. The recorded original is in Deed Book 830, Page 904, at the Horry County Register of Deeds.") +
      h.p("The HOA board's June 2026 minutes say the declaration has changed once. That change raised the minimum age from 50 to 55, before the developer turned the declaration over to the board.") +
      h.p("A tenant household must include at least one person 55 or older who lives in the home full time. If no tenant meets that rule, the lease must end.") +
      h.p(`Read ${h.a(HUB, "how a recorded age rule changes who can buy the home later")}.`) },

    { h2: "What are the HOA dues in Myrtle Trace, and what do they pay for?", html: (bg) =>
      h.p("Myrtle Trace dues are $95 a month, starting in January 2026.") +
      h.p(`The ${h.ext(NEWS, "HOA's January 2026 newsletter")} lists the change from $90 to $95 a month. The board raised the dues by $5 a month to add to the reserves for pond and road maintenance.`) +
      h.p("The HOA says the dues pay to maintain and improve these properties:") +
      h.ul(["the pool", "the clubhouse", "the gate", "the roads", "the common areas", "the lakes, which the HOA calls retention ponds"]) +
      h.p("Dues are due on the first of each month, and the HOA sends no bill unless an owner is behind. If the month's dues are not paid by the end of the month, the HOA adds a $7 late fee.") +
      h.p("Each owner maintains the home and the lot, including the roof, the exterior and the grass.") +
      h.cta("Looking at a home in Myrtle Trace?", "Tell us the address. One of our agents will read the declaration and the HOA's policies with you before you offer.", "Have us read the Myrtle Trace HOA papers with you", "/contact/", bg) },

    { h2: "Can the Myrtle Trace dues go up?", html:
      h.p("Yes. The board can raise the yearly cap on dues by up to 10 percent a year without an owner vote. A larger increase needs a two-thirds vote of members at a meeting called for that purpose.") +
      h.p("A special assessment is a one-time charge on owners on top of the dues. The HOA's 2023 anniversary paper says it has never levied one.") +
      h.p("At the end of 2025, the HOA reported $311,862.48 in its operating account and $449,470.98 in reserves. Those year-end figures were preliminary and subject to audit.") },

    { h2: "What does a buyer pay the Myrtle Trace HOA at closing?", html:
      h.p("A capital contribution is a one-time payment a buyer makes to the HOA. On a resale, the buyer pays the HOA a $1,450 capital contribution and a $100 certificate fee at closing.") +
      h.p(`Both amounts took effect in January 2025, under the HOA's ${h.ext(CAPITAL, "capital contribution resolution")}.`) +
      h.p(`In the first 12 months, a resale buyer pays the HOA ${usd(TOTAL12)} at 2026 amounts.`) +
      h.figure(firstYearChart(), `Payments to the HOA in a resale buyer's first 12 months, at 2026 amounts: ${usd(TOTAL12)} in all. Property tax and insurance are separate.`) +
      h.p("Ask the HOA for its written statement of what is owed on the home before closing.") +
      h.p(`Read ${h.a("/hoa/documents/", "which HOA documents to request before you buy a resale home")}.`) },

    { h2: "What amenities does Myrtle Trace have?", html:
      h.p("The HOA's 2026 property guidelines list 42 acres of common land besides the roads. That land includes the clubhouse, the pool and fifteen lakes.") +
      h.p("The 2026 pool rules list pool hours of 8 a.m. to 9 p.m. daily. Pets are not allowed in the clubhouse or the pool area, except service dogs and guide dogs.") +
      h.p("The lakes are stormwater retention ponds, and swimming and recreational boats are not allowed on them. Residents and house guests can fish from common property, and every fish must be released.") +
      h.p("The HOA's guidelines list 13 walkways, each 15 feet wide, between private lots, open to all residents. The HOA's 2023 history paper says Myrtle Trace has no sidewalks.") +
      h.p("Some lots back onto a golf course, and the course is privately owned, not an HOA facility. Burning Ridge Golf Club lists its address as 500 Burning Ridge Road, Conway.") },

    { h2: "Can you rent out a home in Myrtle Trace?", html:
      h.p("Yes, for at least one year at a time, under the HOA's Policy on Renting Homes, revised in March 2020. Shorter leases are not allowed.") +
      h.p("An owner who rents must file the HOA's owner and tenant form before the tenant moves in. The fine for not filing is $500, charged again each month until the form is filed.") +
      h.p("In Chapter3's experience, many HOAs here ban renting a house at all. Myrtle Trace allows it, with the one-year minimum and the 55+ tenant rule.") +
      h.p(`Read ${h.a("/hoa/rental-restrictions/", "how HOA rental rules differ from city short-term rental rules")}.`) },

    { h2: "What other HOA rules apply in Myrtle Trace?", html:
      h.p("The HOA's home page and its 2026 guidelines list these rules:") +
      h.ul([
        "Trucks must be parked in the garage when not in use.",
        "Campers, trailers, boats, RVs and covered vehicles cannot be parked in a driveway.",
        "Owners can get a permit to park those vehicles in the clubhouse lot.",
        "Dog runs are allowed once the HOA approves the location and the structure.",
        "Free-standing sheds, gazebos and private swimming pools are not allowed.",
        "Additions, roof replacements and exterior or landscaping changes need the Architectural Review Committee's approval first.",
        "Interior changes need no approval.",
        "Signs naming a real estate firm or saying \"for sale\" are not allowed anywhere in Myrtle Trace.",
        "Fences between yards and along the front of a lot are not allowed.",
        "Perimeter fences are not allowed on lots that back onto the golf course or the lakes.",
      ]) +
      h.p("An easement is a right to use part of someone else's land. The HOA's posted copy of the declaration says the golf course has an easement over the lots next to it for golf play.") +
      h.p("The roads inside Myrtle Trace are private, and the HOA owns them. The front entrance on Burning Ridge Road has no gate, and the back entrance on Myrtle Ridge Road has gates.") +
      h.p("The HOA also records its guidelines and policies with the county. The latest set was recorded in January 2026. Ask the HOA for it before you offer.") },

    { h2: "What will the property tax be on a Myrtle Trace home?", html:
      h.p(`On a $300,000 primary residence in Myrtle Trace, the 2025 property tax is about $1,103 a year. Owners here also pay the county's stormwater fee on the same bill. The county's ${h.ext(STORMWATER, "utility-fee page")} lists $7.45 a month, or $89.40 a year, for a single-family home.`) +
      h.p("The county calls an approved primary residence a legal residence. The county taxes 4 percent of a legal residence's value and 6 percent of a second home's value. That share is the assessed value.") +
      h.p("For each $1,000 of assessed value, one mill is $1 of tax. School operating millage, 109.1 mills, does not apply to a legal residence.") +
      h.p("County records list all but one Myrtle Trace parcel in tax district 100. The county Treasurer's 2025 bill for the HOA's recreational parcel shows a district 100 levy of 201 mills. Myrtle Trace is outside Conway city limits, so its owners pay no Conway city levy.") +
      h.p("At 65, after living in South Carolina one full calendar year, an owner can apply for the homestead exemption. The exemption applies to the first $50,000 of the home's value.") +
      h.p("<strong>Example:</strong> Diane, 68, is moving from Charlotte with $300,000 to spend. She buys a resale home in Myrtle Trace for $300,000 and makes it her legal residence.") +
      h.ul([
        "<strong>One-time fees to the HOA at closing:</strong> $1,450 + $100 = $1,550.",
        "<strong>Dues for the first 12 months:</strong> $95 × 12 = $1,140.",
        "<strong>Assessed value:</strong> $300,000 × 4 percent = $12,000.",
        "<strong>Mills on a legal residence:</strong> 201 − 109.1 = 91.9.",
        "<strong>2025 property tax:</strong> $12,000 × 91.9 ÷ 1,000 = $1,102.80 a year.",
      ]) +
      h.p("After her first full calendar year here, Diane applies for the homestead exemption. The assessed value drops to ($300,000 − $50,000) × 4 percent = $10,000. The 2025 tax is $10,000 × 91.9 ÷ 1,000 = $919 a year.") +
      h.p("Diane's 2026 bill will use the county's newly certified 2026 rates.") +
      h.p(`See ${h.a("/buyers/property-taxes/", "how a legal residence and a rental are taxed in Horry County")}.`) },

    { h2: "Is Myrtle Trace in a flood zone?", html: (bg) =>
      h.p(`On FEMA's flood map, Myrtle Trace is in Zone X, the area of minimal flood hazard. The homes on Berry Tree Lane, the closest to a ${h.ext(FEMA, "mapped flood area")}, are also in Zone X.`) +
      h.p(`Read ${h.a("/buyers/coastal-insurance/", "what a flood policy costs on a Zone X home")}.`) +
      h.p(`The wind pool is South Carolina's wind and hail insurance association for the coast. Under ${h.ext(WINDLAW, "state law")}, the coastal area in Horry County is east of the more westerly of US 17 and Bypass 17.`) +
      h.p("Myrtle Trace is west of both roads, about 6.4 miles from the nearest point on Bypass 17. The community is outside that coastal area.") +
      h.cta("Want to know the insurance cost first?", "Ask us for a homeowners quote on the Myrtle Trace home you like, before you write the offer.", "Have us get you a homeowners quote", "/contact/", bg) },

    { h2: "How far is Myrtle Trace from the hospital, the airport and the beach?", html:
      h.p("Conway Medical Center is about 0.8 miles by car from the HOA's address at 101 Myrtle Trace Drive.") +
      h.ul([
        "Myrtle Beach International Airport is about 10.4 miles by car.",
        "The nearest public beach access by car is a City of Myrtle Beach access about 9.8 miles away.",
        "In a straight line, the airport is about 7.8 miles away and that beach access about 9.0 miles.",
      ]) +
      h.p(`Read ${h.a("/buyers/relocating/healthcare/", "which hospitals serve Conway and the rest of the Grand Strand")}.`) },

    { h2: "How does Myrtle Trace compare with three other 55+ communities?", html:
      h.p("Myrtle Trace's declaration, recorded in 1983, is more than 20 years older than those of the other three.") +
      compareTable() },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "How much are the HOA dues in Myrtle Trace?", a: "$95 a month in 2026, up from $90 in 2025. Dues are due on the first of each month. The HOA adds a $7 late fee when a month's dues are not paid by the end of that month." },
    { q: "Is Myrtle Trace a 55+ community?", a: "Yes, the HOA's posted copy of the declaration says at least one member of every household must be 55 or older. A rented home must have at least one tenant 55 or older who lives there full time." },
    { q: "Is Myrtle Trace inside Conway city limits?", a: "No, Myrtle Trace is in unincorporated Horry County, outside Conway city limits. Its mailing city is Conway, and its owners pay no Conway city levy." },
    { q: "Can you rent out a home in Myrtle Trace?", a: "Yes, for at least one year at a time. The owner must file the HOA's owner and tenant form before move-in. The fine for a missing form is $500 for each month it is late." },
    { q: "Does Myrtle Trace have a gate?", a: "The back entrance on Myrtle Ridge Road has gates, and the front entrance on Burning Ridge Road is not gated. The HOA's gates policy says the back gates were installed to keep non-resident traffic from using Myrtle Trace Drive as a shortcut." },
    { q: "Who maintains the yard in Myrtle Trace?", a: "Each owner does. Under the HOA's posted copy of the declaration, each owner maintains the lot and the home, including the roof, the exterior and the grass. The dues pay for the HOA's own common property." },
  ],
  sources: [
    { name: "Myrtle Trace HOA home page", href: HOA },
    { name: "Posted copy of the declaration", href: COV },
    { name: "HOA newsletter, January 2026", href: NEWS },
    { name: "Capital contribution resolution", href: CAPITAL },
    { name: "FEMA Flood Map Service Center", href: FEMA },
  ],
  sourcesNote: "Not legal or tax advice. The HOA's online copy of the declaration is not the recorded original. Distances by car are OpenStreetMap estimates.",
  bottomCta: { h2: "Know the Myrtle Trace costs and rules before you offer.", p: "Call about the home you like. One of our agents will read the declaration and the rental policy with you.", label: "Call about Myrtle Trace", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace HOA dues, Myrtle Trace 55 community, Myrtle Trace rental rules, Myrtle Trace capital contribution",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
