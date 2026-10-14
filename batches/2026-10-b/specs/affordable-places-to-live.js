/* /buyers/affordable-places-to-live/ - the most affordable places to buy a home near Myrtle Beach.
 *
 * Batch 2026-10-b, page 5.
 * Version 3, 2026-10-13: round 3 (review/ROUND-3.md, review/OWNER-EYE-affordable-places-to-live.md). One
 *   Conway price only (the recorded-sale line is cut); method sentences moved to the sources line; Green
 *   Sea line cut; a new labelled example on the down-payment help (the agent connects the buyer with a
 *   lender that works with SC Housing, the service /buyers/programs/ records); the short-answer offer line
 *   shortened; the coastal insurance guide linked beside the older-homes line; a NAIP 2023 aerial of new
 *   streets near Longs; the Georgetown harbor photo cropped to leave out a dealer's name; the tax section
 *   moved before the down-payment section, so the example sits near the end.
 * Version 2, 2026-10-13: round 2 (review/ROUND-2.md and review/BUYER-READ-affordable-places-to-live.md).
 *   The reader (34, rents and works in Myrtle Beach, first home, tight budget) came for a place a short
 *   drive from Myrtle Beach, and for what a home costs each year. Added: the drive from each place to
 *   Myrtle Beach (Coastal Grand Mall, one fixed point for every row, verified rows 47 to 53), the yearly
 *   property tax on a typical home in dollars (pending rows 107 and 108), the HOA fee where it is typical
 *   (no-hoa ledger, verified rows 6, 10 to 12, 15), what about $250,000 buys and a line for spending less
 *   (verified rows 19, 20, 22, 24; no-hoa row 14 as corrected), insurance on an older home (pending row
 *   109), plain words for the down-payment programs and how to apply, "typical home value" said once,
 *   the areas named. One value per thing: every value is rounded to the nearest $5,000 and every drive to
 *   the nearest 5 minutes, the same on every surface; no "$X less" gaps (they disagreed with the rounded
 *   values). Cut: the Longs story line, the builder and sale counts, the exact income limits. The offer
 *   appears three times (short answer, down-payment section, bottom), and the page says what the form asks.
 * Version 1, 2026-10-13: first build.
 *
 * One price measure in every comparison: Zillow's typical home value (ZHVI all homes, middle tier,
 * August 2026), said as "a typical home in X is worth about $Y". Recorded-sale medians appear only in
 * the "what about $250,000 buys" section, as "a house there usually sells for", never in a comparison.
 *
 * Ranking rule (WRITER-BRIEF, refined 2026-10-13): at least 15 recorded sales in 12 months, or, in
 * Georgetown County, at least 1,000 homes by the Census housing-unit count (Georgetown: rows 78 and 106).
 * Green Sea is not ranked (row 100); one plain line names it. Nichols and Hemingway are out of scope
 * (row 105). Pawleys Island is left off the chart (rows 15, 91).
 *
 * Facts: batches/2026-10-b/facts/affordable-facts.md (verified rows, and pending rows 106 to 109), and
 * batches/2026-10-b/facts/no-hoa-facts.md (verified rows 6, 10, 11, 12, 15; row 14's corrected wording).
 *   Values:        rows 1 to 8, 11, 12, 16, 99.
 *   What it buys:  rows 19, 20, 22, 24 (condo-style shares; house and condo middles), 32 to 34 (year built).
 *   Drives:        rows 46 to 53. Free-flow minutes from each town point. Traffic: stories.json "traffic-timing".
 *   Tax:           rows 62 to 68, 73, 75, 76, 103; dollars on a typical home: pending rows 107, 108.
 *   Flood:         rows 77 to 84, 87.
 *   Insurance:     pending row 109 (SC Department of Insurance).
 *   Down payment:  rows 92 to 97. No rate, no payment, no "0 percent".
 * Pictures: our map of the five places, Myrtle Beach and Coastal Grand Mall (tools/page-kit.js placesMap),
 *   a bar chart of every ranked place, and Commons photos of Georgetown, Loris and Conway. Commons has no
 *   license-clean ground photo of Longs or Aynor (searched 2026-10-13).
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Blog-Brain tools: the upload package's copy in tools/blog-brain-2026-10-b/, then $BLOG_BRAIN, then the repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const { compareCards } = require(path.join(BB, "tools", "compare.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(DATA, "photos.json")].filter((f) => fs.existsSync(f));
const kit = PK.create({ h, photos: PHOTO_FILES.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")).photos),
  mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { glance, prosCons, story, placesMap, photoSet } = kit;

const SELF = "/buyers/affordable-places-to-live/";
const CONTACT = "/contact/";
const OFFER = "Send me the list";

/* Primary sources, each opened by the researcher and again by the verifier. */
const ZILLOW = "https://www.zillow.com/research/data/";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const GT_TAX = "https://www.gtcountysc.gov/385/Property-Tax-Calculator";
const FEMA = "https://msc.fema.gov/portal/home";
const SCH = "https://schousing.sc.gov/homebuyers/programs-homebuyers";
const DOI = "https://doi.sc.gov/614/Cost-of-Homeowners-Insurance";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const CENSUS = "https://data.census.gov/";

/* ---------------------------------------------------------------------------- */
/* Values, rounded once, used everywhere.                                         */

/* Zillow's typical value, August 2026 (rows 2 to 8, 11, 12, 16), to the nearest $5,000. */
const r5 = (v) => "$" + (Math.round(v / 5000) * 5000).toLocaleString("en-US");
const V = { Georgetown: 251667, Loris: 255122, Longs: 285812, Conway: 288359, Aynor: 292422, "Myrtle Beach": 323058 };
const val = (p) => r5(V[p]);
/* Free-flow minutes from each town point (rows 47 to 53), to the nearest 5. */
const r5m = (m) => `${Math.max(5, Math.round(m / 5) * 5)}`;
const BEACH = { Georgetown: 19.8, Loris: 36.4, Longs: 17.0, Conway: 24.3, Aynor: 44.4 };
const MALL = { Georgetown: 51.4, Loris: 52.3, Longs: 38.0, Conway: 23.1, Aynor: 42.4, "Myrtle Beach": 8.1 };
const beach = (p) => r5m(BEACH[p]), mall = (p) => r5m(MALL[p]);
/* Yearly property tax on a typical home you live in (pending row 108): value x the 2026 rate per
   $100,000 (rows 64 to 68, 73), plus the bill's flat fee; Georgetown from the county's estimator (row 76).
   To the nearest $100. */
const TAX = { Georgetown: 2300, Loris: 1800, Longs: 1100, Conway: 1900, Aynor: 1800, "Myrtle Beach": 1300 };
const tax = (p) => "$" + TAX[p].toLocaleString("en-US");

const PLACES = [
  { name: "Georgetown", lat: 33.376834, lon: -79.2944965, href: "#georgetown" },
  { name: "Loris", lat: 34.0562812, lon: -78.8903044, href: "#loris" },
  { name: "Longs", lat: 33.9385051, lon: -78.7330737, href: "#longs" },
  { name: "Conway", lat: 33.8360035, lon: -79.0478143, href: "#conway" },
  { name: "Aynor", lat: 33.9998881, lon: -79.1994874, href: "#aynor" },
  { name: "Myrtle Beach", lat: 33.6890603, lon: -78.8866943, href: "#myrtle-beach" },
  /* Coastal Grand Mall: the county address point for 2000 Coastal Grand Circle (row 46). */
  { name: "Coastal Grand Mall", lat: 33.702315, lon: -78.923261, href: "#compare" },
];
/* Every ranked place for the chart, lowest first. ZIP areas are named as areas (verifier note 1). */
const RANKED = [
  ["Georgetown", 251667], ["Loris", 255122], ["Longs", 285812], ["Conway", 288359], ["Aynor", 292422],
  ["Little River", 322487], ["Myrtle Beach", 323058], ["Socastee area", 323494], ["Carolina Forest area", 358049],
  ["Surfside Beach", 362259], ["North Myrtle Beach", 395960], ["Murrells Inlet and Garden City area", 400213],
];

/* The chart: a two-column table of bars (place, then its bar and value), so every name and value
   is text at reading size, a screen reader reads it as a table, and a phone shows it as it is.
   Bars start at $0, so their lengths compare honestly. Myrtle Beach is the dark bar. */
const BARS_CSS = "<style>.c3-bars{margin:1.6rem 0 1.8rem;max-width:760px}"
  + ".c3-bars table{width:100%;border-collapse:collapse;font-size:var(--read,1.0625rem);line-height:1.3}"
  + ".c3-bars caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .7rem}"
  + ".c3-bars th{color:var(--navy);font-weight:400;text-align:left;vertical-align:middle;padding:.2rem .8rem .2rem 0;width:38%}"
  + ".c3-bars td{padding:.2rem 0;vertical-align:middle}"
  + ".c3-bars .t{display:flex;align-items:center;gap:.5rem;min-width:0}"
  + ".c3-bars .b{flex:none;height:1.05rem;width:calc(var(--w) * .68);background:var(--brass);border-radius:0 4px 4px 0}"
  + ".c3-bars tr.me .b{background:var(--navy)}.c3-bars tr.me th,.c3-bars tr.me .v{font-weight:600}"
  + ".c3-bars .v{color:var(--muted);white-space:nowrap;font-variant-numeric:tabular-nums}"
  + "@media (max-width:599px){.c3-bars th{width:47%}.c3-bars .b{width:calc(var(--w) * .42)}}"
  + ".c3-bars figcaption{color:var(--muted);font-size:.95rem;line-height:1.6;margin-top:.8rem}</style>";
function barChart(title, caption) {
  const max = 400213;
  const rows = RANKED.map(([n, v]) => `<tr${n === "Myrtle Beach" ? ' class="me"' : ""}><th scope="row">${n}</th>`
    + `<td><span class="t"><span class="b" style="--w:${(v / max * 100).toFixed(1)}%" aria-hidden="true"></span><span class="v">${r5(v)}</span></span></td></tr>`).join("");
  return BARS_CSS + `<figure class="c3-bars"><table><caption>${title}</caption><thead style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"><tr><th scope="col">Place</th><th scope="col">Typical home value</th></tr></thead><tbody>${rows}</tbody></table><figcaption>${caption}</figcaption></figure>`;
}

const MAP = placesMap("Affordable places near Myrtle Beach", PLACES, {
  caption: "Map of the five most affordable places and Myrtle Beach, numbered as in the list below, with Coastal Grand Mall.",
});

/* The comparison: five places and Myrtle Beach. One price measure (rows 2 to 8), the drive to
   Myrtle Beach (Coastal Grand Mall, rows 47 to 53), the drive to the nearest beach access, and the
   yearly tax on a typical home you live in (pending row 108). The trade-off in the label column. */
const TO_MB = "To Myrtle Beach";
const TABLE = compareCards([
  { name: "Georgetown", href: "#georgetown", bestFor: "Highest tax on this page", cells: { value: `About ${val("Georgetown")}`, mb: `About ${mall("Georgetown")} min`, beach: `About ${beach("Georgetown")} min`, tax: `About ${tax("Georgetown")}` } },
  { name: "Loris", href: "#loris", bestFor: "Older homes; few for sale", cells: { value: `About ${val("Loris")}`, mb: `About ${mall("Loris")} min`, beach: `About ${beach("Loris")} min`, tax: `About ${tax("Loris")}` } },
  { name: "Longs", href: "#longs", bestFor: "Most homes have an HOA fee", cells: { value: `About ${val("Longs")}`, mb: `About ${mall("Longs")} min`, beach: `About ${beach("Longs")} min`, tax: `About ${tax("Longs")}` } },
  { name: "Conway", href: "#conway", bestFor: "Higher tax inside the city", cells: { value: `About ${val("Conway")}`, mb: `About ${mall("Conway")} min`, beach: `About ${beach("Conway")} min`, tax: `About ${tax("Conway")}` } },
  { name: "Aynor", href: "#aynor", bestFor: "Longest drive to the beach", cells: { value: `About ${val("Aynor")}`, mb: `About ${mall("Aynor")} min`, beach: `About ${beach("Aynor")} min`, tax: `About ${tax("Aynor")}` } },
  { name: "Myrtle Beach", href: SELF, bestFor: "Most homes sold are condos", cells: { value: `About ${val("Myrtle Beach")}`, mb: `About ${mall("Myrtle Beach")} min`, beach: "At the beach", tax: `About ${tax("Myrtle Beach")}` } },
], [
  { key: "value", label: "Typical home value", num: true },
  { key: "mb", label: TO_MB },
  { key: "beach", label: "To the beach" },
  { key: "tax", label: "Yearly property tax" },
], { caption: "The five places beside Myrtle Beach. Drive times are to Coastal Grand Mall in Myrtle Beach and to the nearest beach. The tax is for a typical home you live in.", bestForLabel: "Main trade-off", self: SELF });

/* Photos of the towns named, each beside its sentence. */
const ph = photoSet({ aerialWidth: "720px" });
const PHOTO_CSS = ph.css();
const GEORGETOWN_PHOTO = ph.aerial("georgetown-harbor", "Boats at the harbor in Georgetown.", { closeUp: true });
const LORIS_PHOTO = ph.aerial("loris-downtown", "Main Street in downtown Loris.", { closeUp: true });
const LONGS_PHOTO = ph.aerial("longs-new-streets-from-above", "New streets of houses near the center of Longs, from above.", { closeUp: true });
const CONWAY_PHOTO = ph.aerial("conway-riverwalk-boardwalk", "The riverwalk in Conway, on the Waccamaw River.", { closeUp: true, alt: "A wooden boardwalk with a black railing, shaded by trees, beside old wooden buildings in Conway" });
const AYNOR_PHOTO = ph.aerial("aynor-downtown-from-above", "Downtown Aynor from above, with houses on wide lots around it.", { closeUp: true });
const MB_PHOTO = ph.aerial("myrtle-beach-beach-and-pier", "The beach and a fishing pier in Myrtle Beach.", { closeUp: true });
ph.share("georgetown-harbor");

/* One place's price and tax line, and its trade-off line (round 7: each in one line). */
const line = (p, more = "") => `<p style="color:var(--muted);line-height:1.7;max-width:720px;margin:0 0 .5rem"><strong style="color:var(--navy);font-weight:600">Price and tax:</strong> a typical home in ${p} is worth about ${val(p)}, with about ${tax(p)} a year in property tax.${more}</p>`;
const tradeoff = (t) => `<p style="color:var(--muted);line-height:1.7;max-width:720px;margin:0 0 1rem"><strong style="color:var(--navy);font-weight:600">The trade-off:</strong> ${t}</p>`;
const drives = (p, beachWhere) => `From the center of ${p}, Myrtle Beach (Coastal Grand Mall) is about ${mall(p)} minutes away by car. The nearest beach, ${beachWhere}, is about ${beach(p)} minutes away.`;

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Most Affordable Places to Live Near Myrtle Beach | Chapter3",
  description: "The most affordable places to buy a home near Myrtle Beach: Georgetown, Loris, Longs, Conway and Aynor, with the drive, the yearly tax and down-payment help.",
  ogTitle: "The most affordable places to buy a home near Myrtle Beach, and what you give up",
  crumb: "Affordable places",
  eyebrow: "Buying on a budget",
  h1: "Where are the most affordable places to buy a home near Myrtle Beach?",
  h1em: "What a typical home is worth, and what you give up.",
  sub: `Georgetown and Loris are the most affordable places near Myrtle Beach. A typical home there is worth about ${val("Georgetown")} to ${val("Loris")}.`,
  heroMedia: glance([
    { icon: "dollar", label: "Lowest: Georgetown", text: `About ${val("Georgetown")}` },
    { icon: "town", label: "Myrtle Beach", text: `About ${val("Myrtle Beach")}` },
    { icon: "beach", label: "To the beach", text: "15 to 45 min" },
    { icon: "key", label: "Down payment help", text: "$10,000" },
  ]),
  heroCta: { title: "See what your budget buys in each place.", label: OFFER, href: CONTACT, text: "Tell us your price range. One of our agents will send you the homes for sale in each place, and the down-payment programs that fit. The form asks for your name, email and phone." },
  author: "devin",
  shortAnswer: [
    `The most affordable places to buy a home near Myrtle Beach are Georgetown, Loris, Longs, Conway and Aynor. A typical home in Georgetown is worth about ${val("Georgetown")}, and in Loris about ${val("Loris")}. In Myrtle Beach, a typical home is worth about ${val("Myrtle Beach")}.`,
    `The trade-off is time. From Loris, Georgetown or Aynor, Myrtle Beach is 40 to 50 minutes away by car. From Conway it is about ${mall("Conway")} minutes, and Conway's homes are newer.`,
  ],
  sections: [
    { h2: "Where do homes cost the least near Myrtle Beach?", toc: "Where homes cost the least", id: "compare", html: () =>
      PHOTO_CSS +
      h.p(`Homes cost the least in Georgetown and Loris. Longs, Conway and Aynor come next, at about ${val("Longs")} to ${val("Aynor")}.`) +
      h.p("These figures are what a typical home in each place is worth. A home can sell for more or less.") +
      barChart("What a typical home is worth, lowest first", `Chart of typical home values, from ${h.ext(ZILLOW, "Zillow's home value data")}. Myrtle Beach is the dark bar.`) +
      h.p("Little River, Socastee and Carolina Forest are areas outside any town. Socastee is just west of Myrtle Beach, and Carolina Forest just north of it. Little River is north of North Myrtle Beach, near the North Carolina line. Little River and the Socastee area cost about the same as Myrtle Beach.") +
      MAP.html +
      h.p("The five places and Myrtle Beach follow, in the map's order. Drive times are from the center of each town with no traffic. In our experience, rush hour adds 5 to 10 minutes.") },

    { h2: "1. Georgetown: a harbor town with the lowest prices", toc: "1. Georgetown", id: "georgetown", html: () =>
      h.p("Georgetown is a city almost 300 years old, on the water in Georgetown County. It is the southernmost place on this page. Its downtown is on the waterfront, with shops, restaurants and many buildings from the 1700s and 1800s.") +
      GEORGETOWN_PHOTO +
      h.p("A Walmart Supercenter, a Food Lion and a Piggly Wiggly are in town, and the county library is on Cleland Street. East Bay Park has sports fields, and Morgan Park is on the water. Tidelands Georgetown Memorial Hospital is a short drive from downtown.") +
      h.p(`Many homes in Georgetown are older. About one in five homes in the city is in a high-risk flood zone, where a lender requires flood insurance. ${drives("Georgetown", "on Pawleys Island")}`) +
      line("Georgetown") +
      tradeoff("the highest property tax on this page, and about 50 minutes to Myrtle Beach.") },

    { h2: "2. Loris: a small town with its own hospital", toc: "2. Loris", id: "loris", html: () =>
      h.p("Loris is a small town in the north of Horry County, near the North Carolina line. Its downtown is on Main Street, with shops and the library.") +
      LORIS_PHOTO +
      h.p("McLeod Loris Hospital is a short drive from the center of town. A Food Lion, an IGA and Hill's Food Store sell groceries, and Loris Nature Park is at the east edge of town.") +
      h.p(`Homes in Loris are houses, not condos, and many were built before 1980. About six in ten homes for sale have no HOA fee, the monthly fee to a homeowners association. Almost no buildings are in a high-risk flood zone. ${drives("Loris", "in North Myrtle Beach")}`) +
      line("Loris") +
      tradeoff("about 50 minutes to Myrtle Beach, higher tax inside the town, and few homes for sale.") },

    { h2: "3. Longs: new homes close to North Myrtle Beach", toc: "3. Longs", id: "longs", html: () =>
      h.p(`Longs is an area inland from North Myrtle Beach, outside any town. Builders are selling new homes here, on new streets of houses. From the center of Longs, the beach in North Myrtle Beach is about ${beach("Longs")} minutes away, the shortest drive of the five.`) +
      LONGS_PHOTO +
      h.p("A Food Lion is about a quarter mile from the center of Longs. McLeod Seacoast, a hospital in Little River, is a short drive away. Almost no buildings near the center of Longs are in a high-risk flood zone.") +
      h.p(`Longs is not a town, so homes there pay no town tax. Almost every home for sale has an HOA fee, typically about $80 a month. Myrtle Beach (Coastal Grand Mall) is about ${mall("Longs")} minutes away by car.`) +
      line("Longs") +
      tradeoff("almost every home has an HOA fee, and Myrtle Beach is about 40 minutes away.") },

    { h2: "4. Conway: a river town 25 minutes from Myrtle Beach", toc: "4. Conway", id: "conway", html: () =>
      h.p("Conway is a city on the Waccamaw River, inland from Myrtle Beach. Much of its downtown was built in the early 1900s, near the Waccamaw River. A riverwalk runs along the river beside downtown.") +
      CONWAY_PHOTO +
      h.p("A Food Lion, an IGA, the county library and the city recreation complex are in town. Conway Medical Center is a short drive from downtown.") +
      h.p(`Homes in Conway are newer than in Loris or Georgetown: half were built after about 2000. Builders are selling new homes here. Most homes for sale have an HOA fee, typically about $85 a month. ${drives("Conway", "in Myrtle Beach")}`) +
      h.p(`Some homes with a Conway address are outside the city and pay the lower county tax. Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself.`) +
      line("Conway", " With the typical HOA fee, the tax and the fee together come to about $2,900 a year, besides the mortgage.") +
      tradeoff("higher tax inside the city limits.") },

    { h2: "5. Aynor: a small town with houses on wide lots", toc: "5. Aynor", id: "aynor", html: () =>
      h.p("Aynor is a small town in the west of Horry County. Within about a mile of its center are the town hall, a park, an athletic complex, the library and a grocery store, KJ's Market. Around the center are houses on wide lots.") +
      AYNOR_PHOTO +
      h.p(`About two in three homes for sale in Aynor have no HOA fee. None of the buildings in Aynor is in a high-risk flood zone. Conway Medical Center is about half an hour away. ${drives("Aynor", "in Myrtle Beach")}`) +
      h.p("Few homes in Aynor sell each year, so there are few to choose from, and the typical value is less certain.") +
      line("Aynor") +
      tradeoff("the longest drive to the beach of the five, and few homes for sale.") },

    { h2: "6. Myrtle Beach: the point of comparison", toc: "6. Myrtle Beach", id: "myrtle-beach", html: () =>
      h.p(`Myrtle Beach is the city on the beach, in the middle of the area on this page. From downtown, a public beach access is about a minute away, and Coastal Grand Mall about ${mall("Myrtle Beach")} minutes.`) +
      MB_PHOTO +
      h.p("Most homes that sell in Myrtle Beach are condos. A house there usually sells for about $420,000. To spend less, look at condos: a condo usually sells for about $165,000. Almost every condo has an HOA fee, typically about $650 a month.") +
      line("Myrtle Beach") +
      tradeoff("a typical home costs more than in the five places above.") },

    { h2: "How do the places compare?", toc: "Compare", id: "table", html: () =>
      h.p("The five places and Myrtle Beach, side by side.") +
      TABLE +
      h.p(`To choose a neighborhood by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. Our other guides cover ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}, ${h.a("/buyers/gated-communities/", "gated communities")} and ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")}.`) },

    { h2: "What do you give up when you buy farther from Myrtle Beach?", toc: "Pros and cons", id: "pros-and-cons", html: (bg) =>
      h.p("Homes inland cost less, and in most inland places few buildings are in a flood zone. The drives to Myrtle Beach and the beach are longer.") +
      prosCons([
        "A typical home in Georgetown or Loris is worth the least of the places on this page.",
        "Almost no buildings in Loris, Longs and Aynor are in a high-risk flood zone.",
        "Homes outside town limits pay no town tax.",
      ], [
        { text: "From Loris, Georgetown or Aynor, Myrtle Beach is 40 to 50 minutes away by car.", act: "Drive from the home to your work at the hour you would go, before you make an offer." },
        { text: "Many homes in Loris and Georgetown were built before 1980.", act: `Insurers may require an older home to have an updated roof, wiring, plumbing and heating. A home inspection shows their age before you buy. See our ${h.a("/buyers/coastal-insurance/", "guide to home insurance near the coast")}.` },
        { text: "Inside the town limits of Loris, Conway and Aynor, the property tax is higher.", act: "An agent checks the county tax record for the address before you make an offer." },
      ], { bg }) },

    { h2: "How much property tax will you pay in each place?", toc: "Property tax", id: "property-tax", html: () =>
      h.p("Property tax on a typical home you live in is lowest in Longs and highest in Georgetown.") +
      h.p(`Homes outside town and city limits pay the lowest rate, at ${h.ext(LEVY, "the county's tax rates")}. Inside a town, you pay the town's tax too, so a home just outside town can pay less each year.`) +
      h.p("When you buy, the county values the home at about what it is worth that year. The new value shows up on the next year's tax bill.") +
      h.p(`These figures are for your main home, once the county gives it the lower rate for a home you live in. You apply for that rate; it is not automatic. Our ${h.a("/buyers/property-taxes/", "property tax guide")} shows how to apply.`) },
    { h2: "What help can you get with a down payment?", toc: "Down payment help", id: "down-payment", html: (bg) =>
      h.p(`SC Housing, the state's housing agency, gives buyers in Horry and Georgetown counties $10,000 toward the down payment and closing costs. The help is forgivable: you do not pay it back if you live in the home for 15 years. The program is called the ${h.ext(SCH, "Homebuyer Program")}.`) +
      h.p("In these two counties, you do not have to be a first-time buyer. You must not own a home when you close. Your household income must be under about $115,000 for one or two people, or about $134,000 for three or more.") +
      h.p("You also need a credit score of 640 or more, and a homebuyer class before the loan is approved. The home price can be up to $450,000.") +
      h.p("Palmetto Home Advantage, a second SC Housing program, is open to first-time and repeat buyers at any price. It gives up to 4 percent of the loan. On a $250,000 loan, that is up to $10,000. It is forgivable over 10 years.") +
      h.p("County First is a third program for Horry, Georgetown and some other counties. It also gives forgivable help, with the same limits as the Homebuyer Program.") +
      h.p(`To apply, you go through a lender that works with SC Housing. The lender checks that you qualify and holds the money for you. Our page on ${h.a("/buyers/programs/", "down-payment help programs")} explains the steps.`) +
      story([
        "<strong>Example:</strong> Dana rents an apartment in Myrtle Beach and wants a house of her own in Conway. She thinks she must save for years before she can buy.",
        "Her Chapter3 agent shows her SC Housing's Homebuyer Program, which helps buyers here pay the down payment. The agent puts her in touch with a lender that works with the program.",
        "Dana takes the homebuyer class and starts looking at houses now, not years from now.",
      ], "", bg) +
      h.cta("See what your budget buys in each place.", "Tell us your price range and the places you like. One of our agents will send you the homes for sale in each place, and the programs that fit.", OFFER, CONTACT, bg) },

  ],
  faqTitle: "Affordable places near Myrtle Beach: FAQ",
  faq: [
    { q: "Is Myrtle Beach a cheap place to buy a home?", a: `A typical home in Myrtle Beach is worth about ${val("Myrtle Beach")}. That is less than in North Myrtle Beach or Surfside Beach, and more than in Georgetown, Loris, Longs, Conway or Aynor. Most homes that sell in Myrtle Beach are condos.` },
    { q: "Is Conway cheaper than Myrtle Beach?", a: `Yes. A typical home in Conway is worth about ${val("Conway")}, less than in Myrtle Beach. Coastal Grand Mall in Myrtle Beach is about ${mall("Conway")} minutes from Conway by car. Inside the city limits, Conway's property tax is higher.` },
    { q: "How far is Loris from Myrtle Beach?", a: `About ${mall("Loris")} minutes by car from the center of Loris to Coastal Grand Mall in Myrtle Beach, with no traffic. The nearest beach, in North Myrtle Beach, is about ${beach("Loris")} minutes away.` },
    { q: "How far is Aynor from Myrtle Beach?", a: `About ${mall("Aynor")} minutes by car from the center of Aynor to Coastal Grand Mall in Myrtle Beach, with no traffic. The nearest beach is about ${beach("Aynor")} minutes away.` },
    { q: "Do you have to be a first-time buyer to get down-payment help?", a: "No, not in Horry or Georgetown County. For SC Housing's Homebuyer Program, you must not own a home when you close. Palmetto Home Advantage is open to repeat buyers too." },
  ],
  sources: [
    { name: "Zillow home values", href: ZILLOW },
    { name: "county deeds", href: DEEDS },
    { name: "county tax rates", href: LEVY },
    { name: "Census", href: CENSUS },
    { name: "FEMA", href: FEMA },
    { name: "SC Housing", href: SCH },
    { name: "SC Department of Insurance", href: DOI },
    { name: "Georgetown County tax estimator", href: GT_TAX },
  ],
  sourcesNote: "Not legal, tax or loan advice. Typical values are Zillow's estimates for all homes. Drive times are OpenStreetMap estimates with no traffic. Georgetown's tax is the county's own estimate. Tax figures leave out the break for owners 65 and older.",
  afterSources: () => ph.credits(),
  bottomCta: { h2: "See what your budget buys in each place.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale in each place, and the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, affordable towns near Myrtle Beach, cheap homes Myrtle Beach, Conway vs Myrtle Beach, Loris SC homes, Aynor SC homes, Longs SC homes, Georgetown SC homes",
  about: "The most affordable towns and areas to buy a home near Myrtle Beach, South Carolina: Georgetown, Loris, Longs, Conway and Aynor",
};
