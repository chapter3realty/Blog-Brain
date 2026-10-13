/* /buyers/affordable-places-to-live/ - the most affordable places to buy a home near Myrtle Beach.
 *
 * Batch 2026-10-b, page 5. Version 1, 2026-10-13.
 *
 * Reader: a first-time buyer, or someone moving here on a budget. The job: find where a home costs
 * least, how much less than Myrtle Beach, and what each place costs in time, tax and flood risk;
 * then what help exists for the down payment. Shape: a comparison (reports/Page shapes, section 4)
 * led by a map and a chart of every ranked place, then one short section per affordable place,
 * the pros and cons of buying farther out, the down-payment help, and the property tax with a
 * labelled example near the end.
 *
 * One price measure in every comparison: Zillow's typical home value (ZHVI all homes, middle
 * tier, August 2026), said as "a typical home in X is worth about $Y". No recorded-sale median
 * appears on the page; the recorded-sale counts are used only as "N homes sold in the past year".
 *
 * Ranking rule (WRITER-BRIEF, refined 2026-10-13): a place is ranked when it had at least 15
 * recorded sales in the 12 months, or, in Georgetown County, at least 1,000 homes by the Census
 * housing-unit count (Georgetown: ledger rows 78 and 106). Green Sea is not ranked (row 100: 1
 * sale); one plain line names it (rows 99 to 104 verified). Nichols and Hemingway are out of scope
 * (row 105); the scope line says which counties the page covers. Pawleys Island is left off the
 * chart: its Census town is 536 homes and Zillow's area for the name is undefined (rows 15, 91).
 *
 * Facts: batches/2026-10-b/facts/affordable-facts.md, verified rows only.
 *   Values:        rows 1 to 8, 11, 12, 16 (ZIP areas 29588, 29579, 29576), 99.
 *   Sales counts:  rows 19 to 22 (Loris 36, Aynor 18, builders near Longs 47, in Conway 130).
 *   Year built:    rows 32 (Georgetown 1977), 33 (Loris 1978), 34 (Conway 2001).
 *   Drives:        rows 46 to 53, 102. Free-flow minutes from each town point; the mall is a
 *                  shopping stop, never "work". Traffic: stories.json "traffic-timing".
 *   Tax:           rows 62 to 68, 73, 75, 76 (Georgetown: the county's own estimator; never set
 *                  beside the Horry bills), 103.
 *   Flood:         rows 77 to 84, 87, 104 ("buildings", not homes, for the Horry shares).
 *   Down payment:  rows 92 to 97. No rate, no payment, no "0 percent".
 *   Story:         stories.json "nc-client-build-longs" (no builder, no lender named).
 * Pictures: our map of the five places and Myrtle Beach (tools/page-kit.js placesMap), a bar chart
 *   of every ranked place built here from the same values, and Commons photos of the towns named,
 *   each beside its sentence (data/photos.json).
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Blog-Brain tools: the upload package's copy in tools/blog-brain/, then $BLOG_BRAIN, then the repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const { compareCards } = require(path.join(BB, "tools", "compare.js"));

/* This batch's photo records: the website copy (data/2026-10-b/), else the batch folder. */
const DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!DATA) throw new Error("batch 2026-10-b photos.json not found");
const kit = PK.create({ h, photos: require(path.join(DATA, "photos.json")).photos,
  mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { glance, prosCons, atAGlance, story, placesMap, photoSet } = kit;

const SELF = "/buyers/affordable-places-to-live/";
const CONTACT = "/contact/";
const OFFER = "Send me the list";

/* Primary sources, each opened by the researcher and again by the verifier. */
const ZILLOW = "https://www.zillow.com/research/data/";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const GT_TAX = "https://www.gtcountysc.gov/385/Property-Tax-Calculator";
const FEMA = "https://msc.fema.gov/portal/home";
const SCH = "https://schousing.sc.gov/homebuyers/programs-homebuyers";
const PHA = "https://schousing.sc.gov/homebuyers/programs-homebuyers/palmetto-home-advantage";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const CENSUS = "https://data.census.gov/";

/* ---------------------------------------------------------------------------- */
/* The places: Zillow's typical value, August 2026 (rows 2 to 8, 11, 12, 16).     */

const PLACES = [
  { name: "Georgetown", value: 251667, lat: 33.376834, lon: -79.2944965, id: "georgetown" },
  { name: "Loris", value: 255122, lat: 34.0562812, lon: -78.8903044, id: "loris" },
  { name: "Longs", value: 285812, lat: 33.9385051, lon: -78.7330737, id: "longs" },
  { name: "Conway", value: 288359, lat: 33.8360035, lon: -79.0478143, id: "conway" },
  { name: "Aynor", value: 292422, lat: 33.9998881, lon: -79.1994874, id: "aynor" },
  { name: "Myrtle Beach", value: 323058, lat: 33.6890603, lon: -78.8866943, href: "/submarkets/myrtle-beach/" },
];
/* Every ranked place for the chart, lowest first. ZIP areas are named as areas (verifier note 1). */
const RANKED = [
  ["Georgetown", 251667], ["Loris", 255122], ["Longs", 285812], ["Conway", 288359], ["Aynor", 292422],
  ["Little River", 322487], ["Myrtle Beach", 323058], ["Socastee area", 323494], ["Carolina Forest area", 358049],
  ["Surfside Beach", 362259], ["North Myrtle Beach", 395960], ["Murrells Inlet and Garden City area", 400213],
];
const k = (v) => "$" + (Math.round(v / 1000) * 1000).toLocaleString("en-US");

/* The chart: a two-column table of bars (place, then its bar and value), so every name and value
   is text at reading size, a screen reader reads it as a table, and a phone shows it as it is (two
   columns fit). Bars start at $0, so their lengths compare honestly. Myrtle Beach, the point of
   comparison, is the dark bar. */
const BARS_CSS = "<style>.c3-bars{margin:1.6rem 0 1.8rem;max-width:760px}"
  + ".c3-bars table{width:100%;border-collapse:collapse;font-size:var(--read,1.0625rem);line-height:1.3}"
  + ".c3-bars caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .7rem}"
  + ".c3-bars th{color:var(--navy);font-weight:400;text-align:left;vertical-align:middle;padding:.3rem .8rem .3rem 0;width:38%}"
  + ".c3-bars td{padding:.3rem 0;vertical-align:middle}"
  + ".c3-bars .t{display:flex;align-items:center;gap:.5rem;min-width:0}"
  + ".c3-bars .b{flex:none;height:1.05rem;width:calc(var(--w) * .68);background:var(--brass);border-radius:0 4px 4px 0}"
  + ".c3-bars tr.me .b{background:var(--navy)}.c3-bars tr.me th,.c3-bars tr.me .v{font-weight:600}"
  + ".c3-bars .v{color:var(--muted);white-space:nowrap;font-variant-numeric:tabular-nums}"
  + "@media (max-width:599px){.c3-bars th{width:40%}.c3-bars .b{width:calc(var(--w) * .56)}}"
  + ".c3-bars figcaption{color:var(--muted);font-size:.95rem;line-height:1.6;margin-top:.8rem}</style>";
function barChart(title, caption) {
  const max = 400213;
  const rows = RANKED.map(([n, v]) => `<tr${n === "Myrtle Beach" ? ' class="me"' : ""}><th scope="row">${n}</th>`
    + `<td><span class="t"><span class="b" style="--w:${(v / max * 100).toFixed(1)}%" aria-hidden="true"></span><span class="v">${k(v)}</span></span></td></tr>`).join("");
  return BARS_CSS + `<figure class="c3-bars"><table><caption>${title}</caption><thead style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"><tr><th scope="col">Place</th><th scope="col">Typical home value</th></tr></thead><tbody>${rows}</tbody></table><figcaption>${caption}</figcaption></figure>`;
}

const MAP = placesMap("Affordable places near Myrtle Beach", PLACES.map((p) => ({ name: p.name, lat: p.lat, lon: p.lon, href: p.href || "#" + p.id })), {
  caption: "Map of the five most affordable places, numbered from the lowest typical value, with Myrtle Beach for comparison.",
});

/* The comparison: five places and Myrtle Beach, one price measure (rows 2 to 8), drive to the
   nearest beach access (rows 47 to 53), tax on a home you live in (rows 64 to 68, 73; Georgetown
   not compared, row 76), and the one trade-off that matters most in each. */
const TABLE = compareCards([
  { name: "Georgetown", href: "#georgetown", cells: { value: "About $252,000", beach: "About 20 min", tax: "Georgetown County rate", give: "About 50 min to Coastal Grand Mall" } },
  { name: "Loris", href: "#loris", cells: { value: "About $255,000", beach: "About 36 min", tax: "About $690", give: "Older homes; higher town tax" } },
  { name: "Longs", href: "#longs", cells: { value: "About $286,000", beach: "About 17 min", tax: "About $380, plus a fee", give: "About 40 min to Coastal Grand Mall" } },
  { name: "Conway", href: "#conway", cells: { value: "About $288,000", beach: "About 24 min", tax: "About $650", give: "Higher city tax" } },
  { name: "Aynor", href: "#aynor", cells: { value: "About $292,000", beach: "About 44 min", tax: "About $600", give: "Longest drive to the beach" } },
  { name: "Myrtle Beach", href: SELF, cells: { value: "About $323,000", beach: "About 1 min", tax: "About $400", give: "Costs more than these five" } },
], [
  { key: "value", label: "Typical home value", num: true },
  { key: "beach", label: "To the beach" },
  { key: "tax", label: "Tax per $100,000" },
  { key: "give", label: "What you give up" },
], { caption: "The five places beside Myrtle Beach. Tax is the yearly property tax on a home you live in, for every $100,000 of value.", self: SELF });

/* The two state programs side by side (rows 92 to 96). No rate, no payment, no "0 percent". */
const PROGRAMS = compareCards([
  { name: "Homebuyer Program", cells: { help: "$10,000", gone: "After 15 years in the home", income: "$114,960 (1 or 2 people), $134,120 (3+)", price: "$450,000" } },
  { name: "Palmetto Home Advantage", cells: { help: "Up to 4 percent of the loan", gone: "Over 10 years", income: "About $136,000 to $140,000", price: "None" } },
], [
  { key: "help", label: "Help" },
  { key: "gone", label: "Forgiven" },
  { key: "income", label: "Income limit" },
  { key: "price", label: "Home price limit" },
], { caption: "SC Housing's two down-payment programs in Horry and Georgetown counties", nameLabel: "Program", css: false });

/* Photos of the towns named, each beside its sentence. */
const ph = photoSet({ aerialWidth: "720px" });
const PHOTO_CSS = ph.css();
const GEORGETOWN_PHOTO = ph.aerial("georgetown-harbor", "Boats at the harbor in Georgetown.", { closeUp: true });
const LORIS_PHOTO = ph.aerial("loris-downtown", "Main Street in downtown Loris.", { closeUp: true });
const CONWAY_PHOTO = ph.aerial("conway-riverwalk-boardwalk", "The riverwalk in Conway, on the Waccamaw River.", { closeUp: true, alt: "A wooden boardwalk with a black railing, shaded by trees, beside old wooden buildings in Conway" });
ph.share("georgetown-harbor");

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Most Affordable Places to Live Near Myrtle Beach | Chapter3",
  description: "The most affordable places to buy a home near Myrtle Beach: Georgetown, Loris, Longs, Conway and Aynor, with the drive, property tax and down-payment help.",
  ogTitle: "The most affordable places to buy a home near Myrtle Beach, and what you give up",
  crumb: "Affordable places",
  eyebrow: "Buying on a budget",
  h1: "Where are the most affordable places to buy a home near Myrtle Beach?",
  h1em: "What a typical home is worth, and what you give up.",
  sub: "Georgetown and Loris are the most affordable places near Myrtle Beach. A typical home there is worth about $70,000 less, and the beach is farther.",
  heroMedia: glance([
    { icon: "dollar", label: "Georgetown, Loris", text: "About $250,000" },
    { icon: "town", label: "Myrtle Beach", text: "About $323,000" },
    { icon: "beach", label: "To the beach", text: "15 to 45 min" },
    { icon: "key", label: "Down payment help", text: "$10,000" },
  ]),
  heroCta: { label: OFFER, href: CONTACT, text: "Tell us your price range. We will send the homes for sale in each place, and the down-payment programs that fit you." },
  author: "devin",
  shortAnswer: [
    "The most affordable places to buy a home near Myrtle Beach are Georgetown, Loris, Longs, Conway and Aynor. A typical home in Georgetown or Loris is worth about $250,000. In Myrtle Beach, a typical home is worth about $323,000.",
    "The trade-off is time. From Loris or Aynor, the beach is 35 to 45 minutes away by car. Inside the town limits of Loris and Conway, the property tax is higher. A home just outside town can cost less each year.",
  ],
  sections: [
    { h2: "Where do homes cost the least near Myrtle Beach?", toc: "Where homes cost the least", id: "compare", html: () =>
      PHOTO_CSS +
      h.p("Homes cost the least in Georgetown and Loris, where a typical home is worth about $250,000. Longs, Conway and Aynor come next. This page covers the towns and areas in Horry County and on the Georgetown County coast.") +
      barChart("What a typical home is worth, lowest first", `Chart of typical home values from ${h.ext(ZILLOW, "Zillow's home value data")}. Myrtle Beach is the dark bar. The Socastee, Carolina Forest, and Murrells Inlet and Garden City areas are ZIP code areas.`) +
      h.p("Little River and the Socastee area cost about the same as Myrtle Beach. The beach towns to the north and south cost more.") +
      h.p("Values are lower in small inland places such as Green Sea, a place of about 40 homes, but few homes sell there.") +
      MAP.html +
      h.p("The table puts the five places beside Myrtle Beach. Drive times are from the center of each town to the nearest public beach access, by car with no traffic. In our experience, rush hour adds 5 to 10 minutes.") +
      TABLE +
      h.p(`To choose a neighborhood by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. To skip a monthly fee, see where to find ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}.`) },

    { h2: "What is it like to buy in Georgetown?", toc: "Georgetown", id: "georgetown", html: () =>
      h.p("A typical home in Georgetown is worth about $252,000, about $71,000 less than in Myrtle Beach. Georgetown is a city in Georgetown County, at the south end of the area on this page.") +
      h.p("The nearest beach is on Pawleys Island, about 20 minutes away by car. Tidelands Georgetown Memorial Hospital is a short drive from downtown. Coastal Grand Mall, the big shopping mall in Myrtle Beach, is about 50 minutes away.") +
      GEORGETOWN_PHOTO +
      h.p("Many homes in Georgetown are older: half were built before about 1977. About one in five homes in the city is in a high-risk flood zone, where a lender requires flood insurance.") +
      h.p(`For a home you live in inside the city, ${h.ext(GT_TAX, "Georgetown County's tax estimator")} shows about $900 a year for every $100,000 of value, plus small yearly fees.`) },

    { h2: "What is it like to buy in Loris?", toc: "Loris", id: "loris", html: () =>
      h.p("A typical home in Loris is worth about $255,000, about $68,000 less than in Myrtle Beach. Loris is a small town in the north of Horry County, near the North Carolina line.") +
      LORIS_PHOTO +
      h.p("McLeod Loris Hospital is a short drive from the center of town. The nearest beach, in North Myrtle Beach, is about 36 minutes away by car. Coastal Grand Mall is about 52 minutes away.") +
      h.p("Many homes in Loris are older: half were built before about 1978. About 36 homes inside the town sold in the past year. There are fewer to choose from than in a bigger town.") +
      h.p("Almost no buildings in Loris are in a high-risk flood zone. Inside the town limits, the property tax is higher than in Myrtle Beach or Conway. A home just outside town pays the lower county rate.") },

    { h2: "What is it like to buy in Longs?", toc: "Longs", id: "longs", html: () =>
      h.p("A typical home in the Longs area is worth about $286,000, about $37,000 less than in Myrtle Beach. Longs is an area inland from North Myrtle Beach, outside any town.") +
      h.p("The nearest beach, in North Myrtle Beach, is about 17 minutes away by car. McLeod Seacoast, a hospital in Little River, is about 11 minutes away. Coastal Grand Mall is about 38 minutes away.") +
      h.p("Builders sold about 47 new homes near the center of Longs in the past year, so you can find new homes here. In Chapter3's files, clients from North Carolina bought land in Longs and built a new house there with a builder.") +
      h.p("Longs is not a town, so homes there pay no town tax, only the county rate and a small yearly fee. Almost no buildings near the center of Longs are in a high-risk flood zone.") },

    { h2: "What is it like to buy in Conway?", toc: "Conway", id: "conway", html: () =>
      h.p("A typical home in Conway is worth about $288,000, about $35,000 less than in Myrtle Beach. Conway is a city on the Waccamaw River, inland from Myrtle Beach.") +
      h.p("The nearest beach, in Myrtle Beach, is about 24 minutes away by car. Coastal Grand Mall is about the same distance, and Conway Medical Center is about 10 minutes from downtown.") +
      CONWAY_PHOTO +
      h.p("Homes in Conway are newer than in Loris or Georgetown: half were built after about 2000. Builders sold about 130 new homes in the city in the past year. A few homes in Conway are in a high-risk flood zone, about one building in 25.") +
      h.p(`Inside the city limits, the property tax is higher than in Myrtle Beach. Some homes with a Conway address are outside the city and pay the lower county rate. Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself.`) },

    { h2: "What is it like to buy in Aynor?", toc: "Aynor", id: "aynor", html: (bg) =>
      h.p("A typical home in Aynor is worth about $292,000, about $31,000 less than in Myrtle Beach. Aynor is a small town in the west of Horry County.") +
      h.p("The nearest beach, in Myrtle Beach, is about 44 minutes away by car, the longest drive in the table above. Conway Medical Center is about 30 minutes away, and Coastal Grand Mall a little closer than the beach.") +
      h.p("Only 18 homes inside the town sold in the past year. With so few sales, the typical value can change quickly, and there are few homes to choose from.") +
      h.p("None of the buildings in Aynor is in a high-risk flood zone. Inside the town, the property tax is higher than in Myrtle Beach.") +
      h.cta("Get the homes for sale in each place.", "Tell us your price range. One of our agents will send you the homes for sale now in Georgetown, Loris, Longs, Conway and Aynor.", OFFER, CONTACT, bg) },

    { h2: "What do you give up when you buy farther from the beach?", toc: "Pros and cons", id: "pros-and-cons", html: (bg) =>
      h.p("Homes inland cost less, and in most inland places few buildings are in a flood zone. The drives to the beach and the mall are longer.") +
      prosCons([
        "A typical home in Georgetown or Loris is worth about $70,000 less than in Myrtle Beach.",
        "Almost no buildings in Loris, Longs and Aynor are in a high-risk flood zone.",
        "A hospital is a short drive from the center of Loris and from downtown Georgetown.",
        "Homes outside town limits pay no town tax.",
      ], [
        { text: "From Loris or Aynor, the beach is 35 to 45 minutes away by car.", act: "Drive from the home to the beach at the hour you would go, before you make an offer." },
        { text: "Coastal Grand Mall is about 50 minutes from Loris and from Georgetown.", act: "Ask your agent which grocery stores are closest to the home." },
        { text: "Many homes in Loris and Georgetown were built before 1980.", act: "Ask how old the roof and the air conditioner are before you make an offer." },
        { text: "Inside the town limits of Loris and Conway, the property tax is higher.", act: "Ask your agent whether the home is inside the town limits." },
      ], { bg }) +
      h.p(`To find a neighborhood with a gate at the entrance, see our guide to ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")}. For a neighborhood in Carolina Forest, closer to the beach, read about ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")}.`) },

    { h2: "What help can you get with a down payment?", toc: "Down payment help", id: "down-payment", html: (bg) =>
      h.p(`The Homebuyer Program from ${h.ext(SCH, "SC Housing")}, South Carolina's housing agency, gives buyers in Horry and Georgetown counties $10,000 toward the down payment and closing costs. You do not pay it back if you live in the home for 15 years.`) +
      h.p("In these two counties, you do not have to be a first-time buyer. You must not own a home when you close. You need a credit score of 640 or more and a homebuyer class before the loan is approved.") +
      PROGRAMS +
      h.p("A typical home in every place on this page is worth less than the Homebuyer Program's price limit. The money is limited, and an SC Housing approved lender reserves it for you when you apply for the loan.") +
      h.p(`Horry and Georgetown counties are also on SC Housing's County First list, which also offers forgivable help, with the same limits. Our page on ${h.a("/buyers/programs/", "down-payment help programs")} explains how the programs work with your loan.`) +
      h.cta("See what your budget buys in each place.", "Tell us your price range and the places you like. One of our agents will send you the homes for sale in each place, and the down-payment programs that fit.", OFFER, CONTACT, bg) },

    { h2: "How much property tax will you pay in each place?", toc: "Property tax", id: "property-tax", html: (bg) =>
      h.p(`Property tax is lowest outside town and city limits. There, a home you live in pays about $370 a year for every $100,000 of value, plus an $89 county fee, at ${h.ext(LEVY, "the county's tax rates")}.`) +
      h.p("Inside a town, you pay the town's tax too. For the same value, a home you live in pays about $400 a year in Myrtle Beach. It pays about $600 in Aynor, $650 in Conway and $690 in Loris.") +
      h.p(`These figures are for your main home, once the county gives it the lower rate for a home you live in. You apply for that rate; it is not automatic. A second home or a rental pays more. Our ${h.a("/buyers/property-taxes/", "property tax guide")} shows how to apply.`) +
      h.p("The tax is on the county's value of the home, which can differ from the price you pay.") +
      story([
        "<strong>Example:</strong> Kim is buying her first home near Conway. She likes two houses at about the same price, and one of them is inside the city limits.",
        "Before she makes an offer, her Chapter3 agent looks up the tax on both houses. The house inside the city pays the city tax too, so its yearly bill is higher.",
        "Kim makes her offer on the house outside the city.",
      ], "", bg, `An agent at Chapter3 can ${h.a(CONTACT, "check the tax on a home")} before you make an offer.`) },
  ],
  faqTitle: "Affordable places near Myrtle Beach: FAQ",
  faq: [
    { q: "Is Myrtle Beach a cheap place to buy a home?", a: "A typical home in Myrtle Beach is worth about $323,000. That is less than in North Myrtle Beach or Surfside Beach, and more than in Georgetown, Loris, Longs, Conway or Aynor. Property tax on a home you live in is lower in Myrtle Beach than in Conway or Loris." },
    { q: "Is Conway cheaper than Myrtle Beach?", a: "Yes. A typical home in Conway is worth about $288,000, about $35,000 less than in Myrtle Beach. Inside the city limits, Conway's property tax is higher than Myrtle Beach's. The beach is about 24 minutes from downtown Conway by car." },
    { q: "How far is Loris from Myrtle Beach?", a: "Coastal Grand Mall in Myrtle Beach is about 52 minutes from the center of Loris by car, with no traffic. The nearest beach, in North Myrtle Beach, is a little closer." },
    { q: "What does a home in Loris cost?", a: "A typical home in Loris is worth about $255,000, about $68,000 less than in Myrtle Beach. Few homes come up for sale there: about 36 inside the town sold in the past year." },
    { q: "How far is Aynor from Myrtle Beach?", a: "Coastal Grand Mall in Myrtle Beach is about 42 minutes from the center of Aynor by car, with no traffic. The nearest beach is a little farther. A typical home in Aynor is worth about $292,000." },
    { q: "Do you have to be a first-time buyer to get down-payment help?", a: "No, not in Horry or Georgetown County. For SC Housing's Homebuyer Program, you must not own a home when you close. Palmetto Home Advantage is open to repeat buyers too." },
    { q: "Is property tax lower outside city limits?", a: "Yes. Outside town and city limits, a home you live in pays only the county's tax and a small county fee. Inside Conway, Loris or Aynor, it pays the town's tax too, so the yearly bill is higher." },
    { q: "Which places near Myrtle Beach have the fewest homes in flood zones?", a: "The inland places. None of the buildings in Aynor is in a high-risk flood zone. Almost none are in Loris or near the center of Longs. In Surfside Beach, about one in four buildings is." },
  ],
  sources: [
    { name: "Zillow home value data", href: ZILLOW },
    { name: "Horry County deed records", href: DEEDS },
    { name: "Horry County 2026 tax rates", href: LEVY },
    { name: "U.S. Census Bureau", href: CENSUS },
    { name: "FEMA flood map", href: FEMA },
    { name: "SC Housing", href: SCH },
  ],
  sourcesNote: "Not legal, tax or loan advice. Typical values are Zillow's estimates for all homes. Drive times are OpenStreetMap estimates with no traffic. Tax is for a main home, before any homestead exemption. Flood shares in Horry County count buildings with an address.",
  afterSources: () => ph.credits(),
  bottomCta: { h2: "See what your budget buys in each place.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale in each place, and the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, affordable towns near Myrtle Beach, cheap homes Myrtle Beach, Conway vs Myrtle Beach, Loris SC homes, Aynor SC homes, Longs SC homes, Georgetown SC homes",
  about: "The most affordable towns and areas to buy a home near Myrtle Beach, South Carolina: Georgetown, Loris, Longs, Conway and Aynor",
};
