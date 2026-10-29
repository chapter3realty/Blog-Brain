/* /invest/strategies/fix-and-flip/ - flipping a house on the Grand Strand: what quick resales made in
 * Horry County last year, how our agents find a house worth flipping (the deal finder), the math, and
 * the local costs and rules.
 *
 * Batch 2026-10-c, Lane U. Version 1, 2026-10-29. The page was hand-made; this spec replaces it.
 * Facts: Blog-Brain batches/2026-10-c/facts/fix-and-flip-facts.md (verified rows only). Charts are
 * built from data/2026-10-c/horry-flips.json (the county deed index, pulled 2026-10-29), never typed.
 * Kept from the live page: the calculator, the inherited-house story (without its figures: the owner
 * gave two versions, stories.json "inherited-house-flip"), who buys finished flips, the loans and the
 * cash sections. Corrected from the live page: roofs (the county's pages disagree on a reroof permit;
 * verifier row 14), the deed fee (the seller's by law, the buyer's on a foreclosure deed), wholesaling
 * (the statute's own terms). Verifier corrections of 2026-10-29 (rows 2, 7, 14, 28, 30) are in.
 * Built by tools/mkpage.js. */
const fs = require("fs"), path = require("path");
const { h, BB, compareCards } = require("./_kit.js");
const G = require(path.join(BB, "tools", "glass.js"));

const FLIPS = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "2026-10-c", "horry-flips.json"), "utf8"));
const median = (a) => { const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const ALL = FLIPS.flips, HOUSES = ALL.filter((f) => !f.no_land_value), UNITS = ALL.filter((f) => f.no_land_value);
const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
const round1k = (v) => "$" + (Math.round(v / 1000) * 1000).toLocaleString("en-US");
if (ALL.length !== FLIPS.meta.summary.count) throw new Error("horry-flips.json: the count and the rows disagree");

const SELF = "/invest/strategies/fix-and-flip/";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeDocType";
const CFR = "https://www.govinfo.gov/content/pkg/CFR-2025-title44-vol1/xml/CFR-2025-title44-vol1-sec59-1.xml";
const HC_FLOOD = "https://horrycountysc.gov/departments/emergency-management/flooding/build-responsibly/";
const MB_FLOOD = "https://www.cityofmyrtlebeach.com/services/flood_protection/index.php";
const HC_PERMIT = "https://www.horrycountysc.gov/departments/code-enforcement/permits/building-permit/when-to-get-a-building-permit/";
const MB_PERMIT = "https://www.cityofmyrtlebeach.com/departments/construction_services_department.php";
const T40_59 = "https://www.scstatehouse.gov/code/t40c059.php";
const T40_57 = "https://www.scstatehouse.gov/code/t40c057.php";
const EPA_RRP = "https://www.epa.gov/lead/renovation-repair-and-painting-program";
const EPA_DISC = "https://www.epa.gov/lead/real-estate-disclosure";
const REG27 = "https://www.scstatehouse.gov/coderegs/Chapter%2027.pdf";
const T27_50 = "https://www.scstatehouse.gov/code/t27c050.php";
const T12_43 = "https://www.scstatehouse.gov/code/t12c043.php";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const DRF = "https://dor.sc.gov/tax/deed-recording-fee";
const IRS409 = "https://www.irs.gov/taxtopics/tc409";
const IRS1031 = "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips";
const SCDOR_RATE = "https://dor.sc.gov/news/information-about-h-4216";
const BRICKWOOD = "https://brickwoodmortgage.com/";

/* Chart 1: the middle gross gain, by who resold the home (verifier, limit 2: the all-homes middle mixes
   companies and people, so give both). The house and condo split is in the text; its house figure is
   the low case, because the lot test uses land value, which condos do not have (verifier, limit 3).
   The file's company flag counts 143 and 201; the verifier's own pattern counted 144 and 200, with the
   same middle gains, so the page says "about 140" and "about 200". */
const CO = ALL.filter((f) => f.resale_seller_company), PERSON = ALL.filter((f) => !f.resale_seller_company);
const about = (n) => `about ${Math.round(n / 10) * 10}`;
const GAIN_CHART = G.bars([
  { name: "Resold by a company", value: median(CO.map((f) => f.gain)), valueText: round1k(median(CO.map((f) => f.gain))), feature: `${about(CO.length)} resales` },
  { name: "Every quick resale", value: median(ALL.map((f) => f.gain)), valueText: round1k(median(ALL.map((f) => f.gain))), feature: `${ALL.length} resales`, reference: true },
  { name: "Resold by a person", value: median(PERSON.map((f) => f.gain)), valueText: round1k(median(PERSON.map((f) => f.gain))), feature: `${about(PERSON.length)} resales` },
], { caption: "Middle gain on a home resold within 12 months, Horry County", nameLabel: "Who resold it", featureLabel: "how many", valueLabel: "middle gain",
  note: "The gain between the two deed prices, before repairs, loans, taxes, insurance and both closings. Resales recorded in the 12 months to September 2026." });

/* Chart 2: home sales recorded each month. */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const byMonth = Object.entries(FLIPS.meta.by_record_month).sort(([a], [b]) => a.localeCompare(b));
const MONTH_CHART = G.bars(byMonth.map(([k, v]) => { const [y, m] = k.split("/").map(Number); return { name: `${MONTHS[m - 1].slice(0, 3)} ${y}`, value: v.home_sales, valueText: v.home_sales.toLocaleString("en-US") }; }),
  { caption: "Home sales recorded each month in Horry County", nameLabel: "Month", valueLabel: "home sales", format: (v) => v.toLocaleString("en-US"), compact: true,
    note: "Deeds recorded for homes with a building, not sold by a builder." });

/* Figure: how the deal finder narrows the market. The limits are the code's own (website idx-lib/deals.js:
   the 60 cheapest a square foot get nearby sales, 25 are listed, the AI reads the photos of 12). */
const FUNNEL_STEPS = [
  ["Every home for sale on the Grand Strand", 1],
  ["Houses with a reason to be cheap", 0.8],
  ["The 60 cheapest a square foot, with nearby sales", 0.62],
  ["The 25 furthest under their nearby sales", 0.46],
  ["The top 12: photos read for repairs", 0.32],
  ["An agent's call on the value and the offer", 0.2],
];
const FUNNEL = (() => {
  const W = 360, rowH = 50, H = FUNNEL_STEPS.length * rowH + 4;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/'/g, "&#39;");
  const rows = FUNNEL_STEPS.map(([label, f], i) => {
    const y = 2 + i * rowH, last = i === FUNNEL_STEPS.length - 1;
    return `<text x="0" y="${y + 16}" font-family="Inter, Arial, sans-serif" font-size="13.5" font-weight="600" fill="#1c2028">${i + 1}. ${esc(label)}</text>`
      + `<rect x="0" y="${y + 24}" width="${Math.round(W * f)}" height="14" rx="7" fill="${last ? "#c4783a" : "#2a3040"}" opacity="${last ? 1 : 0.9 - i * 0.12}"/>`;
  }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="How the deal finder narrows the market: every home for sale, then houses with a reason to be cheap, then the 60 cheapest a square foot compared with nearby sales, then the 25 furthest under them, then the top 12 with their photos read, then an agent's call" style="display:block;width:100%;max-width:560px;height:auto">${rows}</svg>`;
})();

/* The calculator from the live page, unchanged but for its dash. */
const IN = 'style="width:132px;background:rgba(244,239,232,.12);border:1px solid rgba(244,239,232,.34);border-radius:6px;color:#f4efe8;font-family:var(--sans);font-size:.95rem;padding:.42rem .55rem;text-align:right"';
const LAB = 'style="display:flex;justify-content:space-between;align-items:center;gap:1rem;color:rgba(244,239,232,.9);font-family:var(--sans);font-size:.93rem"';
const field = (id, label, v) => `<label ${LAB}>${label}<span style="white-space:nowrap;color:rgba(244,239,232,.55)">$ <input id="${id}" type="number" min="0" step="1000" value="${v}" oninput="c3Flip()" aria-label="${label} in dollars" ${IN}></span></label>`;
const CALC = `<div class="c3-flipcalc" style="background:var(--navy);border-radius:12px;padding:1.5rem 1.6rem;margin:1.6rem 0;max-width:600px">`
  + `<p style="font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-2);margin-bottom:.9rem">Run your own deal</p>`
  + `<div style="display:grid;gap:.75rem">${field("flipArv", "What it sells for fixed up", 300000)}${field("flipPaid", "What you pay", 200000)}${field("flipRehab", "Repairs", 45000)}${field("flipCosts", "Holding and selling costs", 30000)}</div>`
  + `<div style="display:flex;justify-content:space-between;gap:1rem;align-items:baseline;border-top:1px solid rgba(244,239,232,.22);margin-top:1.15rem;padding-top:1rem;font-family:var(--sans);color:rgba(244,239,232,.9)"><span>Your profit</span><strong id="flipProfit" style="color:var(--brass-2);font-family:var(--serif);font-size:1.7rem;line-height:1">$25,000</strong></div>`
  + `<div style="display:flex;justify-content:space-between;gap:1rem;align-items:baseline;margin-top:.5rem;font-family:var(--sans);color:rgba(244,239,232,.75);font-size:.9rem"><span>Price plus repairs, as a share of the fixed-up value</span><strong id="flipRatio" style="color:var(--ivory)">82%</strong></div>`
  + `<p id="flipVerdict" style="font-family:var(--sans);color:rgba(244,239,232,.72);line-height:1.6;margin:.7rem 0 0;font-size:.92rem">Above the 70 percent most flippers aim for, so this deal leaves little room for the repairs to run over.</p></div>`
  + `<script>function c3Flip(){var g=function(id){var e=document.getElementById(id);var v=e?parseFloat(e.value):NaN;return isFinite(v)&&v>0?v:0};`
  + `var money=function(n){return "$"+Math.round(n).toLocaleString("en-US")};var pr=document.getElementById("flipProfit"),ra=document.getElementById("flipRatio"),sy=document.getElementById("flipVerdict");if(!pr||!ra||!sy)return;`
  + `var arv=g("flipArv"),paid=g("flipPaid"),reh=g("flipRehab"),cost=g("flipCosts");var profit=arv-paid-reh-cost;pr.textContent=(profit<0?"-":"")+money(Math.abs(profit));`
  + `if(!arv){ra.textContent="--";sy.textContent="Enter what the house sells for fixed up.";return}var share=(paid+reh)/arv*100;ra.textContent=Math.round(share)+"%";`
  + `sy.textContent=profit<=0?"This deal loses money. Lower the price you pay or the repair budget.":share<=70?"Inside the 70 percent most flippers aim for, which leaves room for the repairs to run over.":share<=75?"A little over the 70 percent most flippers aim for.":"Above the 70 percent most flippers aim for, so this deal leaves little room for the repairs to run over."}`
  + `document.addEventListener("DOMContentLoaded",c3Flip);</script>`;

const COSTS = compareCards([
  { name: "Property tax while you hold it", cells: { what: "Taxed at 6 percent, not 4 percent", typical: "About $3,015 a year on $250,000" } },
  { name: "The deed fee when you sell", cells: { what: "$1.85 for each $500, paid by the seller", typical: `About $962 on a ${money(FLIPS.meta.summary.median_sell)} sale` } },
  { name: "The loan", cells: { what: "Interest every month you hold it", typical: "Grows with every month of work" } },
  { name: "Insurance and utilities", cells: { what: "Billed every month you own it", typical: "We get the quotes before you offer" } },
  { name: "Selling", cells: { what: "The commission and closing costs", typical: "$30,000 with holding, in the calculator" } },
], [{ key: "what", label: "What it is here" }, { key: "typical", label: "On a typical flip" }], { caption: "The costs of a flip besides the house and the repairs", nameLabel: "Cost" });

module.exports = G.page({
  theme: "glass",
  url: SELF,
  hub: { name: "Invest", url: "/invest/" },
  title: "Fix and Flip Myrtle Beach: Local Numbers and Rules | Chapter3",
  description: "What 344 Horry County flips made last year, how our agents find a house worth flipping, the 70 percent rule, and the local costs, permits and flood rules.",
  ogTitle: "Fix and flip in Myrtle Beach: what local flips made, how we find them, and what they cost",
  crumb: "Fix and Flip",
  eyebrow: "Strategy",
  h1: "How do you find a fix and flip in Myrtle Beach?",
  h1em: "What local flips made last year, how we find the next one, and what it costs here.",
  sub: "What Horry County flips made last year, how to find a house worth flipping, and the local costs and rules.",
  heroCta: { title: "Get this week's flip list", text: "Tell us your price range. An agent runs our deal finder and sends you the best houses for sale, with the nearby sales behind each one.", label: "Get the flip list", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    `Flipping still pays here, but less than on TV. In the year to September 2026, Horry County homes were resold within 12 months of their last sale at least ${ALL.length} times. When a company resold the home, the middle gain between the two prices was ${round1k(median(CO.map((f) => f.gain)))}, before repairs, loans, taxes and both closings. When a person resold it, the middle gain was ${round1k(median(PERSON.map((f) => f.gain)))}.`,
    `The profit is made when you buy. We look for houses with a reason to be cheap and compare each one with what houses its size sold for nearby. Then we read the photos for the repairs before you make an offer.`,
  ],
  sections: [
    { h2: "Do fix and flips make money in Myrtle Beach?", toc: "Local numbers", id: "local-numbers", html: () =>
      h.p(`Most resell for more than they cost. We read every deed Horry County recorded for two years. In the past year, a home was sold again within 12 months of its last sale at least ${ALL.length} times, about 3 of every 100 home sales not made by a builder. The middle one was bought for ${money(FLIPS.meta.summary.median_buy)}, resold for ${money(FLIPS.meta.summary.median_sell)} about six months later, and gained ${money(FLIPS.meta.summary.median_gain)}.`) +
      GAIN_CHART +
      h.p(`Companies did far better than people. Of the ${about(CO.length)} resales by a company, ${CO.filter((f) => f.gain < 0).length} sold for less than they cost. Of the ${about(PERSON.length)} by a person, ${PERSON.filter((f) => f.gain < 0).length} did. Houses gained more than condos: a middle gain of at least ${round1k(median(HOUSES.map((f) => f.gain)))} on a house, against about ${round1k(median(UNITS.map((f) => f.gain)))} on a condo.`) +
      h.p(`These are the two deed prices, so the gain is gross. Repairs, the loan, the tax, insurance, utilities, both closings and the commission all come out of it. That is why the price you pay matters most, and why finding the house is the work.`) },

    { h2: "How do we find a house worth flipping?", toc: "How we find them", id: "how-we-find-them", html: (bg) =>
      h.p("Our agents use a deal finder we built for this. It looks at every home for sale on the Grand Strand in one pass, then an agent checks what it finds. It works in four steps:") +
      h.ol([
        `<strong>A reason to be cheap.</strong> It pulls every house for sale that has one: a distressed sale, a ${h.a("/invest/foreclosures/", "foreclosure")}, a short sale, or an older house at the low end of the price range.`,
        "<strong>The nearby sales.</strong> For each one, it finds houses within 30 percent of its size that sold within a mile in the last 12 months, or two miles if there are too few. It ranks the houses by how far the asking price per square foot sits under the middle of those sales.",
        "<strong>The repairs.</strong> It reads the listing photos and description of the top houses and lists the repairs it can see, with a cost range for each.",
        "<strong>The agent's call.</strong> An agent reads the sales, decides what the house will sell for once it is fixed, and works out your highest offer. That number comes from an agent who knows the streets, never from a computer.",
      ]) +
      h.figure(FUNNEL, "How our deal finder narrows the market. The first steps are automatic; the last one is an agent's.") +
      h.p("A house far under its neighbors is not always a deal. Sometimes the size in the listing is wrong, the price is an auction's opening bid, or the house needs everything. The finder marks those, and the agent finds out which it is before you spend a dollar.") +
      h.cta("Want the list for your price range?", "Tell us what you can spend. An agent runs the deal finder and sends you the best houses for sale this week, with the sales behind each one.", "Get the flip list", "/contact/", bg) },

    { h2: "How do you work out what to offer?", toc: "The math", id: "the-math", html: () =>
      h.p("Every flip starts with the after-repair value, what the house will sell for once it is fixed up. Take that number and subtract everything you spend. What is left is your profit.") +
      h.p("Most flippers use the 70 percent rule to set their highest offer: 70 percent of the after-repair value, minus the repairs. On a house that will sell for $300,000 fixed up and needs $45,000 of work, that is $165,000. The 30 percent left over pays for the loan, the tax, both closings, the commission and your profit.") +
      CALC +
      h.p("A real one. An investor here inherited a house from his father and had it fully repaired over about two and a half months. An agent at Chapter3 advertised it for sale while the work was going on. It went under contract a week before the work finished, and it closed for cash the day construction ended. Within the same month he bought two more beach homes.") +
      h.p("The step that works on any flip: advertise before the work ends, because the holding costs stop the day it sells.") +
      h.p(`Who buys the finished flip here: mostly buyers moving from out of state, and retirees. We spend several thousand dollars a month advertising to buyers moving to the Grand Strand, so a finished flip goes in front of them the day it lists. Lighter repairs sometimes suit the rental buyers on our list before the house reaches the open market.`) +
      h.p(`Before you offer, run the address through our ${h.a("/invest/long-term-rental/", "rental analyzer")} too, so you know what it would rent for if it does not sell.`) },

    { h2: "What does a flip cost here besides the house and the repairs?", toc: "Local costs", id: "local-costs", html: () =>
      h.p("Five costs decide whether the gain survives, and each grows the longer you own the house.") +
      COSTS +
      h.p(`The tax is the one most investors miss. If the seller lived in the house, they paid the 4 percent rate and no school operating tax. On a $250,000 house in Horry County tax district 100, outside the cities, that is about $919 a year. Yours is about $3,015, more than three times as much.`) +
      h.p(`If you buy at the county's foreclosure sale, you also pay the deed fee on that deed, which a buyer usually does not. Our agents work out the bill for the actual address before you offer. Every town's rate is in our ${h.a("/buyers/property-taxes/", "property tax calculator")}.`) },

    { h2: "What permits and licenses does a flip need?", toc: "Permits and licenses", id: "permits", html: () =>
      h.p(`In Horry County outside the cities, ${h.ext(HC_PERMIT, "you need a building permit")} to build, alter, repair or tear down, and for any electrical, gas, mechanical or plumbing work. South Carolina ${h.ext(T40_59, "licenses the people who do the work")} by the size of the job. In short:`) +
      compareCards([
        { name: "Paint, wallpaper, tile, carpet, cabinets, countertops", cells: { permit: "No", who: "You, or a registered pro over $500" } },
        { name: "A new roof", cells: { permit: "Ask the county first", who: "A registered roofer over $500" } },
        { name: "Electrical, plumbing, heating and air", cells: { permit: "Yes", who: "A contractor licensed for the trade" } },
        { name: "Walls, structure, a full renovation", cells: { permit: "Yes", who: "A licensed builder over $5,000" } },
      ], [{ key: "permit", label: "County permit" }, { key: "who", label: "Who may do it" }], { caption: "Permits and licenses for flip work in Horry County", nameLabel: "The work", css: false }) +      h.p(`Horry County's own pages disagree on whether a new roof needs a permit, so your roofer should ask the county's code office before the job starts.`) +
      h.p(`The owner's exemption from the license does not cover a flip. It is only for a house you build or repair to live in, and a sale within two years of the work is presumed to mean it was done to sell.`) +
      h.p(`Working without the license is a misdemeanor for the contractor, with a fine of $500 to $10,000, at least 30 days in jail, or both. An unlicensed contractor also cannot put a lien on the house or sue to be paid.`) +
      h.p(`In the City of Myrtle Beach, ${h.ext(MB_PERMIT, "each trade needs its own permit")}, and outside changes need a building permit.`) +
      h.h3("Houses built before 1978") +
      h.p(`Many of the cheapest houses are old enough to have lead paint. In a house built before 1978, ${h.ext(EPA_RRP, "anyone paid to do work that disturbs paint")} must be certified in lead-safe work. The EPA says the rule applies to a flipper doing their own work too. Small patches are outside it: 6 square feet of paint or less in a room, or 20 square feet or less outside. Replacing windows is always covered.`) +
      h.p(`When you sell most homes built before 1978, you give the buyer the EPA's lead pamphlet and a lead disclosure, and the buyer gets 10 days to have the paint tested unless the buyer waives it.`) +
      h.h3("Houses in a flood zone") +
      h.p(`This is the rule that can end a flip. If the work costs 50 percent or more of the building's value before the work, not counting the land, ${h.ext(CFR, "the federal flood program")} calls it a substantial improvement. Work to fix code violations an inspector has cited, and some work on historic buildings, are left out of that count.`) +
      h.p(`In ${h.ext(HC_FLOOD, "Horry County")}, the whole house must then meet the rules for a new building. In an AE flood zone, that means a lowest floor at least 3 feet above the base flood level.`) +
      h.p(`The ${h.ext(MB_FLOOD, "City of Myrtle Beach")} allows less than 50 percent on a building in a flood zone that does not meet today's flood rules.`) +
      h.p(`For an older house low to the ground, that can mean raising it or keeping the job under the limit. We check the flood zone and the county's building value before you offer, so you know the repair budget the rule allows. Our ${h.a("/buyers/coastal-insurance/", "coastal insurance")} page covers flood insurance on the finished house.`) },

    { h2: "What do you owe when you sell?", toc: "Selling and tax", id: "selling", html: () =>
      h.h3("What the buyer gets from you") +
      h.p(`When you sell a house as an investor, you give the buyer ${h.ext(T27_50, "South Carolina's property condition disclosure")}, the same form any owner gives. There is no exemption for investors, and it goes to the buyer before both sides sign. If the buyer asks for a termite letter, it is the Official South Carolina Wood Infestation Report, which only a licensed pest control company may issue.`) +
      h.h3("The tax on the profit") +
      h.p(`A gain on a house held one year or less is a ${h.ext(IRS409, "short-term gain")}, taxed as ordinary income. If you flip as a business, a house held mainly for sale to customers is not a capital asset. Its gain is then not a capital gain at all, however long you held it. A flip also ${h.ext(IRS1031, "cannot go into a 1031 exchange")}.`) +
      h.p(`South Carolina's 44 percent deduction on capital gains is for property held more than a year, so a flip gets none of it. For 2026, ${h.ext(SCDOR_RATE, "South Carolina's top rate")} is 5.21 percent on income of $30,000 and up. Talk to a tax advisor before your first sale.`) +
      h.h3("When to sell") +
      h.p("Plan to list by March. The fewest homes sell here in January and February, and March through August hold more than half the year's sales. Prices moved little from month to month, so the season gives you more buyers, not a higher price.") +
      MONTH_CHART },

    { h2: "Is wholesaling allowed in South Carolina?", toc: "Wholesaling", id: "wholesaling", html: () =>
      h.p(`Not the way it used to work. ${h.ext(T40_57, "South Carolina's 2024 license law")} defines wholesaling as holding a contract to buy a home and then marketing the house to another buyer before you own it. Marketing someone else's property for pay is a broker's work and needs a license. A real estate brokerage and its agents may not wholesale or help a wholesaler. Assigning the contract itself is not wholesaling under the law.`) +
      h.p("The discounted houses that used to move through wholesalers now reach buyers through agents, estate sales and bank-owned listings. The agents at Chapter3 have sold on the Grand Strand for decades and often hear about these houses before they reach the portals.") },

    { h2: "How do you pay for a flip?", toc: "Loans and cash", id: "loans", html: () =>
      h.p(`Most flips use a hard money loan, a short-term loan that closes quickly and can pay for part of the repairs. Its rate is higher than a normal mortgage, so every extra month you own the house costs you money. Our preferred lender, ${h.ext(BRICKWOOD, "BrickWood Mortgage")}, offers fix-and-flip and bridge loans, so the purchase, the loan and the repair budget are planned together.`) +
      h.p("BrickWood Mortgage also finances new construction for investors. On its investor program it looks at the deal rather than your income, and in most cases it does not ask for income papers. The guideline it has described to us is that the finished house works as a rental or sells for at least 10 percent above what it cost to build. BrickWood writes those terms and changes them, so ask it what applies to your build.") +
      h.p("Cash is stronger. Bank-owned and off-market houses usually go to the buyer who can close soonest, and cash has no appraisal to fail. It also removes the largest holding cost, the loan interest.") +
      h.p("You can still win with a loan off-market, where there is no cash offer to lose to. Our agents talk to owners before a house is listed and learn what the seller needs. Then we build the offer around it: the closing date, a shorter inspection, more earnest money, or a price that pays the seller for waiting on your loan.") +
      h.p(`Keep a backup plan. If the house would rent well, you can refinance into a ${h.a("/invest/strategies/dscr-loans/", "DSCR loan")}, which is approved on the rent instead of your tax returns, and keep it. That is the ${h.a("/invest/strategies/brrrr/", "BRRRR strategy")}: buy, fix, rent, refinance, repeat.`) },
  ],
  faqTitle: "Fix and flip FAQ",
  faq: [
    { q: "Is fix and flip profitable in Myrtle Beach?", a: `Usually, but less than on TV. Of the Horry County homes resold within 12 months in the past year, the ones a company resold had a middle gain of ${round1k(median(CO.map((f) => f.gain)))} between the two deed prices, before repairs and costs. The ones a person resold gained ${round1k(median(PERSON.map((f) => f.gain)))}.` },
    { q: "Do you need a license to flip houses in South Carolina?", a: "You need no real estate license to buy and sell your own house. The work is different: a contractor needs a residential builder license for any job over $5,000, and the owner's exemption does not cover a house you will sell. You may do the finish work yourself." },
    { q: "What is the 70 percent rule?", a: "Most flippers pay no more than 70 percent of what the house will sell for fixed up, minus the repairs. On a $300,000 house that needs $45,000 of work, that is $165,000." },
    { q: "What taxes do you pay on a flip in South Carolina?", a: "While you hold it, the property tax at the 6 percent rate. When you sell, the deed fee of $1.85 for each $500 of the price. On the profit, federal and state income tax at ordinary rates, because a house held a year or less gets no long-term rate and no South Carolina capital gains deduction." },
    { q: "Can I do a 1031 exchange on a flip?", a: "No. A house held mainly to sell is left out of a 1031 exchange. If the exchange matters to you, hold the finished house as a rental and talk to a tax advisor about the timing first." },
    { q: "What if my flip does not sell?", a: "Plan a rental backup. If the resale market slows, refinance into a DSCR loan, which is approved on the rent, and keep the house as a rental. Our rental analyzer shows whether it would pay for itself." },
  ],
  sources: [
    { name: "Horry County deed index", href: DEEDS },
    { name: "44 CFR 59.1", href: CFR },
    { name: "Horry County building permits", href: HC_PERMIT },
    { name: "SC Code 40-59", href: T40_59 },
    { name: "SC Code 40-57", href: T40_57 },
    { name: "EPA lead rules", href: EPA_RRP },
    { name: "SC Code 27-50", href: T27_50 },
    { name: "SC Code 12-43", href: T12_43 },
    { name: "Horry County 2026 tax levy", href: LEVY },
    { name: "SCDOR deed recording fee", href: DRF },
    { name: "IRS Topic 409", href: IRS409 },
  ],
  sourcesNote: "Quick resales: every deed the county recorded over two years, read by Chapter3; builder sales and lots left out. Not legal or tax advice.",
  bottomCta: { h2: "Want this week's flip list?", p: "Tell us your price range. An agent runs our deal finder and sends you the best houses for sale, with the nearby sales and the repairs behind each one.", label: "Get the flip list", href: "/contact/" },
  keywords: "fix and flip Myrtle Beach, flipping houses Myrtle Beach, house flipping South Carolina, fix and flip Horry County, 70 percent rule, after repair value, flip houses license South Carolina, flip house taxes South Carolina, substantial improvement flood rule Horry County",
  about: "Fixing and reselling houses (fix and flip) in Myrtle Beach and Horry County, South Carolina",
});
