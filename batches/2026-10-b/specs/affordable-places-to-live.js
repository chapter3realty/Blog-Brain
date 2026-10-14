/* /buyers/affordable-places-to-live/ - the most affordable places to buy a home near Myrtle Beach.
 *
 * Batch 2026-10-b, page 5.
 * Version 8, 2026-10-14: round 8 (review/ROUND-8.md; the owner's second read in voice/VERDICTS.md: "name
 *   some roads some communities some actual useful shit"). The page now answers "where" with twelve named
 *   neighborhoods, found by joining the county's deed index to the county's parcels and grouping every
 *   home sale of the past year by subdivision (pending row 116). Each entry says where it is by the roads,
 *   what you get (a facts table), and what makes it different (history, the gate, the water, the builder).
 *   The towns are a short table for comparison, on the same measure (verified rows 19 to 25). Myrtle Beach
 *   the city is only the point of comparison; Parkview, a subdivision inside the city, is an answer.
 *   Kept: the tax in dollars (now one example, pending row 153), the down-payment help and the Dana
 *   example. Cut: the town entries, their photos, the pros and cons, the compare table (it repeated the
 *   entries). ItemList JSON-LD for the numbered entries.
 * Version 8b, 2026-10-14: the verifier's round 8 check (rows 116 to 154). The ranking now counts new homes the
 *   county has not valued yet (the building-value filter had dropped them), splits one legal name that covers
 *   two places (PARKVIEW), leaves out manufactured homes, and keeps only places within about 20 minutes'
 *   drive of a public beach access (pending rows 155 to 168). Out: Coopers Bluff, the Cove at Glenns Bay.
 *   In: Forestbrook Village, Villas at Sandridge. Schools from the district's attendance zones (row 165).
 * Versions 1 to 7, 2026-10-13 and 14: towns ranked by Zillow's typical value (git history).
 *
 * One price measure in every comparison: the middle recorded sale price over the past year (county deed
 * index, October 2025 to September 2026), condo units left out, said "homes usually sold for about $X".
 * Every price is rounded to the nearest $5,000 and every drive to the nearest 5 minutes, the same on
 * every surface.
 *
 * Facts: batches/2026-10-b/facts/affordable-facts.md.
 *   Sales by place:   pending rows 116 to 128 (round 8).
 *   Homes, fees:      pending rows 129 to 140 (listings).
 *   Drives:           pending row 141 (OSRM, from the middle of each place's sales).
 *   What is different: pending rows 142 to 152.
 *   Tax example:      pending row 153; rates rows 64, 66, 71, 72, 75 (verified); row 107 (verified).
 *   Towns:            verified rows 19, 21 to 25; rounding in pending row 154.
 *   Down payment:     rows 92 to 97. No rate, no payment, no "0 percent".
 *   Insurance:        row 109.
 * Pictures: a bar chart of the twelve and a Myrtle Beach house; our map of the twelve and Coastal Grand
 *   Mall; six USDA NAIP 2023 aerials (public domain). The other six places were built after 2023 or show
 *   only woods in 2023; they are on the photo partner's list.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Blog-Brain tools: the upload package's copy in tools/blog-brain-2026-10-b/, then $BLOG_BRAIN, then the repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(DATA, "photos.json")].filter((f) => fs.existsSync(f));
const kit = PK.create({ h, photos: PHOTO_FILES.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")).photos),
  mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { glance, story, placesMap, photoSet } = kit;

const SELF = "/buyers/affordable-places-to-live/";
const CONTACT = "/contact/";
const OFFER = "Send me the list";

/* Primary sources. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const PARCELS = "https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer/24";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const SCH = "https://schousing.sc.gov/homebuyers/programs-homebuyers";
const DOI = "https://doi.sc.gov/614/Cost-of-Homeowners-Insurance";
const OSRM = "https://project-osrm.org/";
const SPEEDWAY = "https://www.wmbfnews.com/2024/07/10/old-myrtle-beach-speedway-being-transformed-into-townhome-community";
const WILDWING = "https://www.myrtlebeachgolftrips.com/news/time-to-come-home-why-you-need-to-play-wild-wing/";

/* ---------------------------------------------------------------------------- */
/* Values, rounded once, used everywhere.                                         */

const money = (v) => "$" + (Math.round(v / 5000) * 5000).toLocaleString("en-US");
const mins = (m) => `${Math.max(5, Math.round(m / 5) * 5)}`;

/* The twelve places, lowest middle sale price first (pending rows 117 to 128). lat and lon: the middle
   of each place's sales (row 141). mb: free-flow minutes to Coastal Grand Mall; beach: to the nearest
   public beach access by car (row 141). */
const P = [
  { id: "parkview", name: "Parkview", map: "Parkview", lat: 33.686431, lon: -78.910360, price: 190000, mb: 6.1, beach: 4.0,
    homes: "Older townhomes in a gated community, built 2004 and 2005; every sale was a resale", size: "2 or 3 bedrooms, about 1,050 to 1,350 square feet",
    fee: "About $325 a month, with water, sewer, the grounds and the pool", schools: "Myrtle Beach Elementary, Middle and High" },
  { id: "fairways-at-wild-wing", name: "The Fairways at Wild Wing Plantation", map: "Fairways at Wild Wing", lat: 33.787649, lon: -78.986234, price: 215000, mb: 16.5, beach: 17.8,
    homes: "Townhomes, built 2007 to 2018", size: "3 bedrooms, about 1,500 square feet",
    fee: "About $390 a month, with the pool and internet, and usually water and sewer", schools: "Carolina Forest Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "sawgrass-east", name: "Sawgrass East", map: "Sawgrass East", lat: 33.756167, lon: -78.929975, price: 222500, mb: 16.7, beach: 17.9,
    homes: "Townhomes, built 2005 and 2006", size: "2 or 3 bedrooms, about 1,300 to 1,600 square feet",
    fee: "About $425 a month, with the pool, and usually water and sewer", schools: "Ten Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "birchwood", name: "Birchwood", map: "Birchwood", lat: 33.925885, lon: -78.754012, price: 223825, mb: 41.6, beach: 20.2,
    homes: "New houses, built 2025 and 2026", size: "3 or 4 bedrooms, about 1,400 to 1,950 square feet, on about a quarter acre",
    fee: "About $120 a month, with high-speed internet", schools: "Daisy Elementary, Loris Middle, Loris High" },
  { id: "golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", map: "Golf and Yacht Club", lat: 33.649402, lon: -79.05007, price: 225000, mb: 22.9, beach: 15.0,
    priceText: "About $225,000 in the older part; about $330,000 for the new houses in Sandpiper Place",
    homes: "One-story houses, most built in the 1980s; new houses in Sandpiper Place", size: "About 1,350 square feet in the older part, on lots of about 6,500 square feet",
    fee: "About $95 a month in the older part, with security, the pool and the courts", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "forestbrook-village", name: "Forestbrook Village", map: "Forestbrook Village", lat: 33.714649, lon: -78.966818, price: 232310, mb: 11.3, beach: 12.6,
    homes: "New two-story townhomes, built 2026", size: "3 bedrooms, about 1,450 to 2,000 square feet, a 1-car garage",
    fee: "About $170 a month, with internet", schools: "Forestbrook Elementary, Forestbrook Middle, Socastee High" },
  { id: "victory-point", name: "Victory Point", map: "Victory Point", lat: 33.7454, lon: -78.951801, price: 235630, mb: 12.7, beach: 13.9,
    homes: "New townhomes, built 2025 and 2026", size: "3 bedrooms, about 1,450 square feet",
    fee: "About $235 a month, with the pool", schools: "Pine Island Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "amber-bluff", name: "The Townes at Amber Bluff", map: "Amber Bluff", lat: 33.810207, lon: -79.021249, price: 237500, mb: 19.3, beach: 20.6,
    homes: "New townhomes, built 2025 and 2026", size: "3 bedrooms, about 1,400 square feet",
    fee: "About $100 a month", schools: "Waccamaw Elementary, Black Water Middle, Carolina Forest High" },
  { id: "villas-at-sandridge", name: "Villas at Sandridge", map: "Villas at Sandridge", lat: 33.852846, lon: -78.696635, price: 245000, mb: 29.3, beach: 7.5,
    homes: "New two-story townhomes, built 2023 to 2026", size: "3 bedrooms, about 1,550 to 2,200 square feet, a 1-car garage",
    fee: "About $300 a month", schools: "Waterway Elementary, North Myrtle Beach Middle and High" },
  { id: "indigo-grove", name: "Indigo Grove", map: "Indigo Grove", lat: 33.862931, lon: -78.749665, price: 245000, mb: 35.0, beach: 13.2,
    homes: "New houses, built 2025 and 2026", size: "",
    fee: "About $80 a month", schools: "Riverside Elementary, North Myrtle Beach Middle and High" },
  { id: "wynbrooke", name: "Wynbrooke", map: "Wynbrooke", lat: 33.584176, lon: -79.048446, price: 249500, mb: 19.8, beach: 8.9,
    homes: "Townhomes, built 2002 to 2005", size: "3 bedrooms, about 1,350 square feet",
    fee: "About $450 a month, usually with water, sewer, the pool and insurance on the buildings", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "polo-farms", name: "Polo Farms", map: "Polo Farms", lat: 33.917844, lon: -78.812061, price: 255000, mb: 36.0, beach: 22.0,
    homes: "One-story houses, built 2005 to 2017; every sale was a resale", size: "3 bedrooms, about 1,350 square feet, on about a fifth of an acre",
    fee: "About $20 a month", schools: "Daisy Elementary, Loris Middle, Loris High" },
];
const N = Object.fromEntries(P.map((p, i) => [p.id, Object.assign(p, { n: i + 1 })]));
const A = (id) => "#" + id;
/* A house in the city of Myrtle Beach (verified row 24: the non-condo middle, $421,250). */
const MB_HOUSE = 421250;

/* The chart: a two-column table of bars (place, then its bar and value), so every name and value
   is text at reading size, a screen reader reads it as a table, and a phone shows it as it is.
   Bars start at $0, so their lengths compare honestly. The Myrtle Beach house is the dark bar. */
const BARS_CSS = "<style>.c3-bars{margin:1.6rem 0 1.8rem;max-width:760px}"
  + ".c3-bars table{width:100%;border-collapse:collapse;font-size:var(--read,1.0625rem);line-height:1.3}"
  + ".c3-bars caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .7rem}"
  + ".c3-bars th{color:var(--navy);font-weight:400;text-align:left;vertical-align:middle;padding:.2rem .8rem .2rem 0;width:42%}"
  + ".c3-bars th a{color:var(--navy)}"
  + ".c3-bars td{padding:.2rem 0;vertical-align:middle}"
  + ".c3-bars .t{display:flex;align-items:center;gap:.5rem;min-width:0}"
  + ".c3-bars .b{flex:none;height:1.05rem;width:calc(var(--w) * .66);background:var(--brass);border-radius:0 4px 4px 0}"
  + ".c3-bars tr.me .b{background:var(--navy)}.c3-bars tr.me th,.c3-bars tr.me .v{font-weight:600}"
  + ".c3-bars .v{color:var(--muted);white-space:nowrap;font-variant-numeric:tabular-nums}"
  + "@media (max-width:599px){.c3-bars th{width:50%}.c3-bars .b{width:calc(var(--w) * .40)}}"
  + ".c3-bars figcaption{color:var(--muted);font-size:.95rem;line-height:1.6;margin-top:.8rem}</style>";
function barChart(title, caption) {
  const rows = P.map((p) => [`<a href="${A(p.id)}">${p.n}. ${p.name}</a>`, p.price, false]).concat([["A home in the city of Myrtle Beach (condos left out)", MB_HOUSE, true]]);
  const body = rows.map(([n, v, me]) => `<tr${me ? ' class="me"' : ""}><th scope="row">${n}</th>`
    + `<td><span class="t"><span class="b" style="--w:${(v / MB_HOUSE * 100).toFixed(1)}%" aria-hidden="true"></span><span class="v">${money(v)}</span></span></td></tr>`).join("");
  return BARS_CSS + `<figure class="c3-bars"><table><caption>${title}</caption><thead style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"><tr><th scope="col">Place</th><th scope="col">Homes usually sold for</th></tr></thead><tbody>${body}</tbody></table><figcaption>${caption}</figcaption></figure>`;
}

const MAP = placesMap("Affordable neighborhoods near Myrtle Beach",
  P.map((p) => ({ name: p.map, lat: p.lat, lon: p.lon, href: A(p.id) }))
    /* Coastal Grand Mall: the county address point for 2000 Coastal Grand Circle (row 46). */
    .concat([{ name: "Coastal Grand Mall", lat: 33.702315, lon: -78.923261 }]), {
    caption: "Map of the twelve neighborhoods, numbered as in the list below, with Coastal Grand Mall in Myrtle Beach.",
  });

/* Each place's facts, as a small table: the numbers stay out of the prose. */
const FACTS_CSS = "<style>.c3-facts{margin:1.2rem 0 1.6rem;max-width:720px}"
  + ".c3-facts table{width:100%;border-collapse:collapse;font-size:1rem;line-height:1.45}"
  + ".c3-facts caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}"
  + ".c3-facts th{color:var(--navy);font-weight:600;text-align:left;vertical-align:top;padding:.45rem .9rem .45rem 0;width:34%;border-top:1px solid var(--line,#e3ddd0)}"
  + ".c3-facts td{color:var(--muted);vertical-align:top;padding:.45rem 0;border-top:1px solid var(--line,#e3ddd0)}"
  + ".c3-facts tr:first-child th,.c3-facts tr:first-child td{border-top:0}"
  + ".c3-facts tr.price td{color:var(--navy);font-weight:600}"
  + "@media (max-width:599px){.c3-facts th{width:42%}}</style>";
function facts(id) {
  const p = N[id];
  const rows = [
    ["Homes usually sold for", p.priceText || `About ${money(p.price)}`, "price"],
    ["What you get", p.homes],
    ["Size", p.size],
    ["HOA fee", p.fee],
    ["Drive to Coastal Grand Mall", `About ${mins(p.mb)} minutes`],
    ["Drive to the beach", `About ${mins(p.beach)} minutes`],
    ["Schools (district zones)", p.schools],
  ].filter((r) => r[1]);
  return `<div class="c3-facts"><table><caption>${p.name} in short</caption><tbody>`
    + rows.map(([k, v, c]) => `<tr${c ? ` class="${c}"` : ""}><th scope="row">${k}</th><td>${v}</td></tr>`).join("")
    + "</tbody></table></div>";
}

/* The towns on the same measure (verified rows 19, 21 to 25): homes that resold, condo units left out. */
const TOWNS_CSS = "<style>.c3-towns{margin:1.2rem 0 1.6rem;max-width:560px}.c3-towns table{width:100%;border-collapse:collapse;font-size:1rem;line-height:1.45}"
  + ".c3-towns caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .6rem}"
  + ".c3-towns th,.c3-towns td{text-align:left;padding:.45rem .9rem .45rem 0;border-top:1px solid var(--line,#e3ddd0);vertical-align:top}"
  + ".c3-towns thead th{border-top:0;color:var(--navy)}.c3-towns td{color:var(--muted)}.c3-towns tbody th{color:var(--navy);font-weight:400}</style>";
const TOWNS = TOWNS_CSS + `<figure class="c3-towns"><table><caption>Homes that resold in each town, builder sales and condos left out</caption>`
  + `<thead><tr><th scope="col">Town</th><th scope="col">Usually sold for</th></tr></thead><tbody>`
  + [["Loris", 237500], ["Conway", 264250], ["Socastee", 290000], ["Longs, within 2 miles of the center", 289500], ["Little River", 335000], ["Myrtle Beach", MB_HOUSE]]
    .map(([t, v]) => `<tr><th scope="row">${t}</th><td>About ${money(v)}</td></tr>`).join("")
  + "</tbody></table></figure>";

/* Aerials (USDA NAIP 2023, public domain), each beside its entry. */
const ph = photoSet({ aerialWidth: "720px" });
const PHOTO_CSS = ph.css();
const FAIRWAYS_PHOTO = ph.aerial("fairways-at-wild-wing-from-above", "The Fairways townhomes at Wild Wing Plantation, from above.", { closeUp: true });
const SAWGRASS_PHOTO = ph.aerial("sawgrass-east-from-above", "Sawgrass East, off Carolina Forest Boulevard, from above.", { closeUp: true });
const GOLF_YACHT_PHOTO = ph.aerial("myrtle-beach-golf-and-yacht-from-above", "Myrtle Beach Golf and Yacht Club, off Bay Road, from above.", { closeUp: true });
const WYNBROOKE_PHOTO = ph.aerial("wynbrooke-from-above", "Wynbrooke, off SC 707, from above.", { closeUp: true });
const SPEEDWAY_PHOTO = ph.aerial("old-speedway-and-victory-point-from-above", "The old Myrtle Beach Speedway beside US 501, before Victory Point was built on part of its land.");
ph.share("old-speedway-and-victory-point-from-above");

/* One numbered entry. */
const entry = (id, short, html) => ({ h2: `${N[id].n}. ${N[id].name}: ${short}`, toc: N[id].map, id, html });

/* ItemList JSON-LD for the twelve numbered entries (ROUND-8 item 6). */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The most affordable neighborhoods near Myrtle Beach", numberOfItems: P.length,
  itemListElement: P.map((p) => ({ "@type": "ListItem", position: p.n, name: p.name, url: `https://chapter3realty.com${SELF}#${p.id}` })) })}</script>`;

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Most Affordable Places to Buy Near Myrtle Beach | Chapter3",
  description: "Twelve neighborhoods near Myrtle Beach where homes sell for the least, from Parkview to Victory Point: the roads, the homes, the HOA fee and the drive.",
  ogTitle: "The most affordable neighborhoods near Myrtle Beach, by name and road",
  crumb: "Affordable places",
  eyebrow: "Buying on a budget",
  h1: "Where are the most affordable places to buy a home near Myrtle Beach?",
  h1em: "Twelve neighborhoods, the roads to them, and what a home costs.",
  sub: `Twelve affordable neighborhoods near Myrtle Beach where you can buy a home for about ${money(N.parkview.price)} to ${money(N["polo-farms"].price)}.`,
  heroMedia: glance([
    { icon: "dollar", label: "Lowest: Parkview", text: `About ${money(N.parkview.price)}` },
    { icon: "town", label: "A Myrtle Beach home", text: `About ${money(MB_HOUSE)}` },
    { icon: "beach", label: "To the beach", text: "5 to 20 min" },
    { icon: "key", label: "Down payment help", text: "$10,000" },
  ]),
  heroCta: { title: "See what your budget buys in these neighborhoods.", label: OFFER, href: CONTACT, text: "Tell us your price range. An agent will send you the homes for sale there, and the down-payment programs that fit. We check the HOA papers, the flood map and the tax record for any home you like. The form asks your name, email and phone." },
  author: "devin",
  shortAnswer: [
    `The homes that sell for the least near Myrtle Beach are townhomes in Parkview, Wild Wing Plantation and Carolina Forest. They usually sold for about ${money(N.parkview.price)} to ${money(N["sawgrass-east"].price)} last year.`,
    `For a house, look at Birchwood near Longs or the Golf and Yacht Club off Bay Road. A Myrtle Beach home that is not a condo usually sold for about ${money(MB_HOUSE)}.`,
  ],
  sections: [
    { h2: "Where do homes sell for the least near Myrtle Beach?", toc: "Where homes cost the least", id: "compare", html: () =>
      PHOTO_CSS + FACTS_CSS +
      h.p("We joined the county's deed records to its map of lots, so every sale has a neighborhood. We counted new and resold houses and townhomes. We left out condos, manufactured homes, deeds that cover several lots and sales far below a home's value.") +
      h.p("Then we kept the neighborhoods within about 20 minutes' drive of a public beach access, with at least 10 sales. These are the twelve with the lowest prices.") +
      h.p(`The next five cost about ${money(257500)} to ${money(266237)}. They are Oak Forest and Forestbrook near Socastee, Meadows Edge off SC 544, the Reserve at Long Bay near Longs and McCormick Townhomes.`) +
      h.p("Farther inland, new houses in Collins Walk and Kingston Oaks near Conway, and in Warner Crossing near Loris, sold for less than some of the twelve. From those, the beach is 30 minutes or more away.") +
      barChart("What homes usually sold for in the past year, lowest first", "Chart of the middle sale price in each neighborhood, from the county's deed records. The dark bar is a home in the city of Myrtle Beach, condos left out, for comparison.") +
      MAP.html +
      h.p("Drive times are from the middle of each neighborhood with no traffic. In our experience, rush hour adds 5 to 10 minutes.") },

    entry("parkview", "older gated townhomes inside Myrtle Beach", () =>
      h.p("Parkview is a gated community of townhomes off 17th Avenue South, near Harrelson Boulevard. It is the one place on this list inside the city of Myrtle Beach. Coastal Grand Mall and the beach are a few minutes away.") +
      h.p("The townhomes are around ponds, with a pool for the owners. Every sale here in the past year was a resale of a townhome built in the middle 2000s.") +
      h.p(`A different, new neighborhood near Surfside Beach is also recorded by the county as Parkview. Lennar sold its new townhomes for about ${money(274883)}, above the twelve here.`) +
      facts("parkview")),

    entry("fairways-at-wild-wing", "townhomes at a golf course off US 501", () =>
      h.p("The Fairways is a group of townhomes on Fairway Lane and Tee Shot Drive, inside Wild Wing Plantation. The entrance is on US 501, between Conway and Myrtle Beach.") +
      FAIRWAYS_PHOTO +
      h.p(`Wild Wing was once a golf resort with several courses. Three of them closed in 2004, and one later reopened with nine holes. The Avocet course, designed by Jeff Brauer and Larry Nelson, is ${h.ext(WILDWING, "still open")}, and some of these townhomes are near it.`) +
      h.p("The Fairways is inside the city of Conway, so the property tax is higher than in a place outside a town. The HOA fee includes the pool and internet, and usually water and sewer.") +
      facts("fairways-at-wild-wing")),

    entry("sawgrass-east", "townhomes off Carolina Forest Boulevard", () =>
      h.p("Sawgrass East is a townhome community on Stanton Place, Shoebridge Drive and Seabert Road, off Carolina Forest Boulevard. From there, Carolina Forest Boulevard leads to US 501.") +
      SAWGRASS_PHOTO +
      h.p("The townhomes were built in the middle 2000s around small ponds, with a pool and a clubhouse. As at the Fairways, the HOA fee usually includes water and sewer.") +
      facts("sawgrass-east")),

    entry("birchwood", "new houses off SC 905 near Longs", () =>
      h.p("Birchwood is a new neighborhood of houses on Birchwood Drive and Mistletoe Way, off SC 905 north of SC 9, near Longs. The turn is beside the tall water tower.") +
      h.p("Lennar built and sold every house recorded here in the past year. Most have three or four bedrooms on about a quarter acre. The HOA fee includes high-speed internet.") +
      h.p("To reach Myrtle Beach, you take SC 9 to the Carolina Bays Parkway. The beach in North Myrtle Beach is closer.") +
      facts("birchwood")),

    entry("golf-and-yacht-club", "a gated community off Bay Road", () =>
      h.p("Myrtle Beach Golf and Yacht Club is a gated community off Bay Road, which leaves SC 707 near Socastee. A public boat ramp on the Intracoastal Waterway is close by.") +
      GOLF_YACHT_PHOTO +
      h.p("Listings describe 24-hour security at the gate. Inside are a pool, tennis and shuffleboard courts, a playground and a clubhouse. The HOA has a storage area for RVs and trailers.") +
      h.p(`In the older part, most houses are one story, on small lots, and were built in the 1980s. D.R. Horton is building new houses in a section called Sandpiper Place, which sell for more. Our guide to ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")} covers more.`) +
      h.p(`Insurers may require an older home to have an updated roof, wiring, plumbing and heating. We have the home inspector look at each before you buy. See our ${h.a("/buyers/coastal-insurance/", "guide to home insurance near the coast")}.`) +
      facts("golf-and-yacht-club")),

    entry("forestbrook-village", "new townhomes off Forestbrook Road", () =>
      h.p("Forestbrook Village is a new townhome community on Heron Creek Way, Deer Ridge Way and Forestbrook Falls Drive, off Forestbrook Road south of US 501. Lennar is building it.") +
      h.p("It is next to the Forestbrook neighborhood. After Parkview, it has the shortest drive to Coastal Grand Mall on this list.") +
      h.p("The townhomes are two stories, with a one-car garage. The HOA fee includes internet.") +
      facts("forestbrook-village")),

    entry("victory-point", "new townhomes on the old speedway land", () =>
      h.p(`Victory Point is a new Lennar townhome community off US 501, by Tanger Outlets. It is on part of the land of the old Myrtle Beach Speedway, where cars ran their ${h.ext(SPEEDWAY, "last laps in 2020")}.`) +
      SPEEDWAY_PHOTO +
      h.p("Several streets have racing names: Speedway Street, Talladega Drive and Pit Crew Drive. Lennar made nearly every sale recorded here in the past year, more than in any place on this list but Indigo Grove.") +
      h.p("Some townhomes back onto a pond, and the HOA fee includes a pool.") +
      facts("victory-point")),

    entry("amber-bluff", "new townhomes near Coastal Carolina University", (bg) =>
      h.p("The Townes at Amber Bluff is a new townhome community off Savannah Bluff Road, on the Conway side of US 501. Its streets are Gemstone Boulevard, Golden Resin Road, Harvest Gold Drive and Honeystone Street.") +
      h.p("It is about a mile north of Brooks Stadium, Coastal Carolina University's football stadium. D.R. Horton built and sold every townhome recorded here in the past year, all on one floor plan with three bedrooms.") +
      h.p("Each townhome came with the builder's smart-home package for the front door lock, the thermostat and a video doorbell. The HOA fee includes the grounds and trash, not water.") +
      facts("amber-bluff") +
      h.cta("Want the homes for sale in one of these neighborhoods?", "Tell us which ones you like and your price range. One of our agents will send you what is for sale there, with the HOA fee and the yearly tax for each home.", OFFER, CONTACT, bg)),

    entry("villas-at-sandridge", "new townhomes off SC 90 near the waterway", () =>
      h.p("Villas at Sandridge is a new townhome community on Sandridgebury Drive and Waterend Drive, off SC 90 near Little River. The county records it as Village at Sandridge.") +
      h.p("Dream Finders Homes builds the townhomes. Each is two stories, with a one-car garage.") +
      h.p("The Intracoastal Waterway, a marina and a boat launch are close by. The drive to the beach in North Myrtle Beach is one of the shortest on this list.") +
      facts("villas-at-sandridge")),

    entry("indigo-grove", "new houses off SC 90", () =>
      h.p("Indigo Grove is a new neighborhood off SC 90, south of Longs. Its streets include Sweet Vernal Street, Indigo Grove Drive and Cambria Drive. Lennar sells it as The Overlook.") +
      h.p("Lennar sold nearly every house recorded here in the past year, about 145 in eleven months. That is more sales than in any other place on this list.") +
      h.p("Of the three places near Longs, Indigo Grove has the shortest drive to the beach.") +
      facts("indigo-grove")),

    entry("wynbrooke", "townhomes on ponds off SC 707", () =>
      h.p("Wynbrooke is a townhome community off SC 707, near Murrells Inlet. Its streets include Wimbledon Way, Wilshire Lane and Williston Loop.") +
      WYNBROOKE_PHOTO +
      h.p("The townhomes were built in the early 2000s around ponds, and some back onto the water. There is a pool for the owners. The nearest beach is in Garden City.") +
      h.p("Its HOA fee is the highest on this list. The fee usually also includes water, sewer and the insurance on the buildings.") +
      facts("wynbrooke")),

    entry("polo-farms", "older houses with a small HOA fee", () =>
      h.p("Polo Farms is a neighborhood of houses off SC 905, between SC 9 and SC 22, west of Longs. Its streets include Heath Drive, Iree's Way and Seth Lane.") +
      h.p("Unlike the new neighborhoods on this list, every sale here in the past year was a resale. The houses are one story, on lots of about a fifth of an acre.") +
      h.p("Its HOA fee is the lowest on this list. Our guide to " + h.a("/buyers/no-hoa-homes/", "homes with no HOA") + " covers places with no fee at all.") +
      facts("polo-farms")),

    { h2: "How do the towns compare?", toc: "The towns", id: "towns", html: () =>
      h.p("Across the whole town, Loris and Conway cost about the same as these neighborhoods. Socastee, Longs, Little River and Myrtle Beach cost more. These are homes that resold in the past year, with builder sales and condos left out.") +
      TOWNS +
      h.p(`Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself. To choose by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} covers one neighborhood in depth.`) },

    { h2: "How much property tax will you pay?", toc: "Property tax", id: "property-tax", html: () =>
      h.p(`Most places on this list are outside any town, so homes there pay only ${h.ext(LEVY, "the county's tax rates")}. Parkview is inside the city of Myrtle Beach. The Fairways at Wild Wing is inside the city of Conway, which adds its own city tax.`) +
      h.p("Take a $240,000 home that is your main home. Outside a town, or in Myrtle Beach, its tax is about $970 a year. It is a little more in Polo Farms and Wynbrooke. Inside Conway, it is about $1,570.") +
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
        "Dana takes the homebuyer class and starts looking at houses, instead of saving for years first.",
      ], "", bg) +
      h.cta("See what your budget buys in these neighborhoods.", "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, and the programs that fit.", OFFER, CONTACT, bg) },
  ],
  faqTitle: "Affordable places near Myrtle Beach: FAQ",
  faq: [
    { q: "What is the cheapest neighborhood to buy a home near Myrtle Beach?", a: `Of the neighborhoods within about 20 minutes of the beach where at least 10 homes sold in the past year, Parkview had the lowest prices. Its older townhomes usually sold for about ${money(N.parkview.price)}. Parkview is a gated community off 17th Avenue South, inside the city of Myrtle Beach.` },
    { q: "Where can you buy a new house near Myrtle Beach for less?", a: `In Birchwood, off SC 905 near Longs, new Lennar houses usually sold for about ${money(N.birchwood.price)} in the past year. In Indigo Grove, off SC 90, they usually sold for about ${money(N["indigo-grove"].price)}.` },
    { q: "Is it cheaper to buy in Conway than in Myrtle Beach?", a: `Yes. Leaving out builder sales and condos, a home that resold in Conway in the past year usually went for about ${money(264250)}. In the city of Myrtle Beach, a home usually went for about ${money(MB_HOUSE)}. Inside the city limits, Conway's property tax is higher.` },
    { q: "Which affordable neighborhood is closest to the beach?", a: `Parkview, a gated townhome community off 17th Avenue South in Myrtle Beach, is about 5 minutes by car from a public beach access. Its older townhomes usually sold for about ${money(N.parkview.price)} in the past year.` },
    { q: "Do you have to be a first-time buyer to get down-payment help?", a: "No, not in Horry or Georgetown County. For SC Housing's Homebuyer Program, you must not own a home when you close. Palmetto Home Advantage is open to repeat buyers too." },
  ],
  sources: [
    { name: "county deeds", href: DEEDS },
    { name: "county parcels", href: PARCELS },
    { name: "county tax rates", href: LEVY },
    { name: "OpenStreetMap drive times", href: OSRM },
    { name: "SC Housing", href: SCH },
    { name: "SC Department of Insurance", href: DOI },
    { name: "WMBF News on the speedway", href: SPEEDWAY },
  ],
  sourcesNote: "Not legal, tax or loan advice. Prices are the middle recorded sale from October 2025 through September 2026, new and resale, with condos and manufactured homes left out. Home details are from listings; schools from the district's zones. Drive times have no traffic. Tax figures are before the break for owners 65 and older.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "See what your budget buys in these neighborhoods.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, and the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, cheapest neighborhoods Myrtle Beach, affordable townhomes Myrtle Beach, cheap homes near Myrtle Beach, new homes under 250000 Myrtle Beach, Parkview Myrtle Beach, Wild Wing Plantation townhomes, Victory Point Myrtle Beach, Forestbrook Village, Villas at Sandridge, Birchwood Longs SC, Indigo Grove Longs",
  about: "The most affordable neighborhoods to buy a home near Myrtle Beach, South Carolina, by recorded sale price: Parkview, the Fairways at Wild Wing Plantation, Sawgrass East, Birchwood, Myrtle Beach Golf and Yacht Club, Forestbrook Village, Victory Point, the Townes at Amber Bluff, Villas at Sandridge, Indigo Grove, Wynbrooke and Polo Farms",
};
