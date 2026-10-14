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
 *   Towns:            verified rows 19, 21 to 25.
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
  { id: "parkview", name: "Parkview", map: "Parkview", lat: 33.686431, lon: -78.910360, price: 190000, mb: 6.1, beach: 6.5,
    homes: "Townhomes in a gated community, built 2004 and 2005", size: "2 bedrooms, about 1,050 to 1,350 square feet",
    fee: "About $325 a month, with water, sewer, internet and the pool", schools: "Myrtle Beach Elementary, Middle and High" },
  { id: "fairways-at-wild-wing", name: "The Fairways at Wild Wing Plantation", map: "Fairways at Wild Wing", lat: 33.787649, lon: -78.986234, price: 215000, mb: 16.5, beach: 17.8,
    homes: "Townhomes, built 2007 to 2018", size: "3 bedrooms, about 1,500 square feet",
    fee: "About $390 a month, with water, sewer, internet and the pool", schools: "Carolina Forest Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "sawgrass-east", name: "Sawgrass East", map: "Sawgrass East", lat: 33.756167, lon: -78.929975, price: 222500, mb: 16.7, beach: 17.9,
    homes: "Townhomes, built 2005 and 2006", size: "3 bedrooms, about 1,300 to 1,600 square feet",
    fee: "About $425 a month, with water, sewer and the pool", schools: "Carolina Forest or Ten Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", map: "Golf and Yacht Club", lat: 33.649395, lon: -79.050021, price: 225000, mb: 22.9, beach: 15.0,
    homes: "One-story houses, most built in the 1980s", size: "About 1,350 square feet, on lots of about 6,500 square feet",
    fee: "About $95 a month, with the gate, the pool and the courts", schools: "Saint James Elementary, Middle and High" },
  { id: "birchwood", name: "Birchwood", map: "Birchwood", lat: 33.925838, lon: -78.7533, price: 226250, mb: 41.5, beach: 20.1,
    homes: "New houses, built 2025 and 2026", size: "Most with 4 bedrooms, about 1,500 square feet, on about a quarter acre",
    fee: "About $120 a month, with high-speed internet", schools: "Longs Elementary, Loris Middle, Loris High" },
  { id: "amber-bluff", name: "The Townes at Amber Bluff", map: "Amber Bluff", lat: 33.810207, lon: -79.021249, price: 237500, mb: 19.3, beach: 20.6,
    homes: "New townhomes, built 2025 and 2026", size: "3 bedrooms, about 1,400 square feet",
    fee: "About $100 a month", schools: "Waccamaw Elementary, Black Water Middle, Carolina Forest High" },
  { id: "indigo-grove", name: "Indigo Grove", map: "Indigo Grove", lat: 33.862892, lon: -78.749486, price: 245000, mb: 35.1, beach: 13.3,
    homes: "New houses, built 2025 and 2026", size: "",
    fee: "About $80 a month", schools: "Riverside Elementary, North Myrtle Beach Middle and High" },
  { id: "wynbrooke", name: "Wynbrooke", map: "Wynbrooke", lat: 33.584176, lon: -79.048446, price: 249500, mb: 19.8, beach: 8.9,
    homes: "Townhomes, built 2002 to 2005", size: "3 bedrooms, about 1,350 square feet",
    fee: "About $450 a month, with water, sewer, the pool and insurance on the buildings", schools: "Saint James Elementary, Middle and High" },
  { id: "victory-point", name: "Victory Point", map: "Victory Point", lat: 33.745517, lon: -78.950316, price: 250000, mb: 12.5, beach: 13.8,
    homes: "New townhomes, built 2025 and 2026", size: "3 bedrooms, about 1,450 square feet",
    fee: "About $235 a month, with the pool", schools: "River Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "coopers-bluff", name: "Coopers Bluff", map: "Coopers Bluff", lat: 33.686529, lon: -79.024493, price: 250000, mb: 15.3, beach: 15.1,
    homes: "Townhomes, and new houses built since 2022", size: "Houses: most with 4 bedrooms, about 2,150 square feet, a 2-car garage",
    fee: "About $90 a month, with the pool", schools: "Forestbrook Elementary and Middle, Socastee High" },
  { id: "polo-farms", name: "Polo Farms", map: "Polo Farms", lat: 33.917844, lon: -78.812061, price: 255000, mb: 36.0, beach: 22.0,
    homes: "One-story houses, built 2005 to 2017, all resales", size: "3 bedrooms, about 1,350 square feet, on about a fifth of an acre",
    fee: "About $20 a month", schools: "Daisy Elementary, Loris Middle, Loris High" },
  { id: "glenns-bay", name: "The Cove at Glenns Bay", map: "Glenns Bay", lat: 33.618423, lon: -79.00471, price: 273500, mb: 13.7, beach: 5.4,
    homes: "New townhomes, built 2025 and 2026", size: "3 bedrooms, about 1,400 square feet, a 1-car garage",
    fee: "About $140 a month", schools: "Seaside Elementary, Saint James Middle and High" },
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
  const rows = P.map((p) => [`<a href="${A(p.id)}">${p.n}. ${p.name}</a>`, p.price, false]).concat([["A house in the city of Myrtle Beach", MB_HOUSE, true]]);
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
    ["Homes usually sold for", `About ${money(p.price)}`, "price"],
    ["What you get", p.homes],
    ["Size", p.size],
    ["HOA fee", p.fee],
    ["Drive to Coastal Grand Mall", `About ${mins(p.mb)} minutes`],
    ["Drive to the beach", `About ${mins(p.beach)} minutes`],
    ["Schools", p.schools],
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
const TOWNS = TOWNS_CSS + `<figure class="c3-towns"><table><caption>Homes that resold in each town, condos left out</caption>`
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
const SPEEDWAY_PHOTO = ph.aerial("old-speedway-and-victory-point-from-above", "The old Myrtle Beach Speedway beside US 501. Victory Point is being built on the land around the track.");
const COOPERS_PHOTO = ph.aerial("coopers-bluff-from-above", "Coopers Bluff: finished streets on the left, and land being graded for the newest section on the right.", { closeUp: true });
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
  sub: "We went through every home sale the county recorded in the past year, one neighborhood at a time.",
  heroMedia: glance([
    { icon: "dollar", label: "Lowest: Parkview", text: `About ${money(N.parkview.price)}` },
    { icon: "town", label: "A Myrtle Beach house", text: `About ${money(MB_HOUSE)}` },
    { icon: "beach", label: "To the beach", text: "5 to 20 min" },
    { icon: "key", label: "Down payment help", text: "$10,000" },
  ]),
  heroCta: { title: "See what your budget buys in these neighborhoods.", label: OFFER, href: CONTACT, text: "Tell us your price range. One of our agents will send you the homes for sale in these neighborhoods, and the down-payment programs that fit. We check the HOA papers, the flood map and the tax record for any home you like. The form asks for your name, email and phone." },
  author: "devin",
  shortAnswer: [
    `The homes that sell for the least near Myrtle Beach are townhomes in Parkview, Wild Wing Plantation and Carolina Forest. They usually sold for about ${money(N.parkview.price)} to ${money(N["sawgrass-east"].price)} in the past year.`,
    `For a house, look off Bay Road in Socastee and in the new neighborhoods near Longs. A house in the city of Myrtle Beach usually sold for about ${money(MB_HOUSE)}.`,
  ],
  sections: [
    { h2: "Where do homes sell for the least near Myrtle Beach?", toc: "Where homes cost the least", id: "compare", html: () =>
      PHOTO_CSS + FACTS_CSS +
      h.p("We joined the county's deed records to its map of lots, so every sale has a neighborhood. We left out condos and sales far below a home's value, and kept neighborhoods where at least 10 homes sold.") +
      h.p("These are the twelve with the lowest prices. Most are townhomes, or new houses a builder sold. Each one is a short drive from Myrtle Beach or the beach.") +
      barChart("What homes usually sold for in the past year, lowest first", "Chart of the middle sale price in each neighborhood, from the county's deed records. The dark bar is a house in the city of Myrtle Beach, for comparison.") +
      MAP.html +
      h.p("Drive times are from the middle of each neighborhood with no traffic. In our experience, rush hour adds 5 to 10 minutes.") },

    entry("parkview", "gated townhomes inside Myrtle Beach", () =>
      h.p("Parkview is a gated community of townhomes off 17th Avenue South, near Harrelson Boulevard. It is the one place on this list inside the city of Myrtle Beach, a few minutes from Coastal Grand Mall and the beach.") +
      h.p("The townhomes are around ponds, with a pool for the owners. The HOA fee includes water, sewer, internet and the grounds.") +
      h.p("Few of these townhomes sell in a year, so we watch for each new listing here.") +
      facts("parkview")),

    entry("fairways-at-wild-wing", "townhomes at a golf course off US 501", () =>
      h.p("The Fairways is a group of townhomes on Fairway Lane and Tee Shot Drive, inside Wild Wing Plantation. The entrance is on US 501, between Conway and Myrtle Beach.") +
      FAIRWAYS_PHOTO +
      h.p(`Wild Wing was once a golf resort with several courses. Three of them closed in 2004. The Avocet course, designed by Jeff Brauer and Larry Nelson, is ${h.ext(WILDWING, "still open")}, and some of these townhomes are near it.`) +
      h.p("The Fairways is inside the city of Conway, so the property tax is higher than in a place outside a town. The HOA fee includes water, sewer and internet.") +
      facts("fairways-at-wild-wing")),

    entry("sawgrass-east", "townhomes off Carolina Forest Boulevard", () =>
      h.p("Sawgrass East is a townhome community on Stanton Place, Shoebridge Drive and Seabert Road, off Carolina Forest Boulevard. Carolina Forest Boulevard runs north from US 501 through Carolina Forest, an area of newer neighborhoods.") +
      SAWGRASS_PHOTO +
      h.p("The townhomes are around small ponds, with a pool and a clubhouse owners can rent for a party. As at the Fairways, the HOA fee includes water and sewer.") +
      facts("sawgrass-east")),

    entry("golf-and-yacht-club", "a gated community off Bay Road", () =>
      h.p("Myrtle Beach Golf and Yacht Club is a gated community off Bay Road, which leaves SC 707 near Socastee. A public boat ramp on the Intracoastal Waterway is close by.") +
      GOLF_YACHT_PHOTO +
      h.p("Staff keep the gate day and night. Inside are a pool, a hot tub, tennis and shuffleboard courts, a playground and a clubhouse. Owners can rent a space there for an RV or a trailer.") +
      h.p(`Most houses are one story, on small lots, and were built in the 1980s. A newer section, Sandpiper Place, has houses built in the past two years. Our guide to ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")} covers more.`) +
      h.p(`Insurers may require an older home to have an updated roof, wiring, plumbing and heating. We have the home inspector look at each before you buy. See our ${h.a("/buyers/coastal-insurance/", "guide to home insurance near the coast")}.`) +
      facts("golf-and-yacht-club")),

    entry("birchwood", "new houses off SC 905 near Longs", () =>
      h.p("Birchwood is a new neighborhood of houses on Mistletoe Way and Birchwood Drive, off SC 905 north of SC 9, near Longs. The turn is beside the tall water tower.") +
      h.p("Lennar built and sold nearly every house recorded here in the past year. Most have four bedrooms on about a quarter acre. The HOA fee includes high-speed internet.") +
      h.p("To reach Myrtle Beach, you take SC 9 to the Carolina Bays Parkway. The beach in North Myrtle Beach is closer.") +
      facts("birchwood")),

    entry("amber-bluff", "new townhomes near Coastal Carolina University", () =>
      h.p("The Townes at Amber Bluff is a new townhome community off Savannah Bluff Road, on the Conway side of US 501. Its streets are Gemstone Boulevard, Golden Resin Road, Harvest Gold Drive and Honeystone Street.") +
      h.p("It is about a mile north of Brooks Stadium, Coastal Carolina University's football stadium. D.R. Horton built and sold every townhome recorded here in the past year, all on one floor plan with three bedrooms.") +
      h.p("Each townhome came with a smart-home package for the front door lock, the thermostat and a video doorbell. The HOA fee includes the grounds and trash, not water.") +
      facts("amber-bluff")),

    entry("indigo-grove", "new houses off SC 90", () =>
      h.p("Indigo Grove is a new neighborhood of houses on Indigo Grove Drive, Swaying Palm Court and Cambria Drive, off SC 90, south of Longs. Lennar sells it as The Overlook.") +
      h.p("Every house recorded here in the past year was a Lennar sale, and all of them closed within about five months, the fastest pace on this list.") +
      h.p("Indigo Grove is zoned for North Myrtle Beach's schools, and the drive to the beach in North Myrtle Beach is the shortest of the places near Longs.") +
      facts("indigo-grove")),

    entry("wynbrooke", "townhomes on ponds off SC 707", () =>
      h.p("Wynbrooke is a townhome community off SC 707, near Murrells Inlet. Its streets are Wimbledon Way, Wilshire Lane, Williston Loop and Wembley Way.") +
      WYNBROOKE_PHOTO +
      h.p("The townhomes were built in the early 2000s around ponds, and some back onto the water. There is a pool for the owners. The nearest beach is in Garden City.") +
      h.p("Its HOA fee is the highest on this list. The fee also includes water, sewer and the insurance on the buildings.") +
      facts("wynbrooke")),

    entry("victory-point", "new townhomes at the old speedway", () =>
      h.p(`Victory Point is a new townhome community off US 501, by Tanger Outlets. It is being built around the old Myrtle Beach Speedway, where cars ran their ${h.ext(SPEEDWAY, "last laps in 2020")}.`) +
      SPEEDWAY_PHOTO +
      h.p("The street names come from racing: Speedway Street, Victory Way and Talladega Drive. Lennar built most of the townhomes sold here in the past year. Some back onto a pond, and the HOA fee includes a pool.") +
      facts("victory-point")),

    entry("coopers-bluff", "townhomes and houses near the Socastee swing bridge", () =>
      h.p("Coopers Bluff is west of Socastee, between SC 544 and the Waccamaw River, about a mile west of the Socastee swing bridge. Its streets include Brackish Drive, Saltgrass Way and Sea Sparrow Street.") +
      COOPERS_PHOTO +
      h.p(`It has townhomes and houses. The townhomes usually sold for about ${money(241000)}, and the houses for about ${money(342500)}.`) +
      h.p("Beverly Homes is building the newest houses. Owners have a pool and a private kayak launch onto the waterway.") +
      facts("coopers-bluff")),

    entry("polo-farms", "older houses with a small HOA fee", () =>
      h.p("Polo Farms is a neighborhood of houses on Heath Drive, Iree's Way, Alexis Drive and Seth Lane, off SC 905 between SC 9 and SC 22, west of Longs.") +
      h.p("Unlike the new neighborhoods on this list, every sale here in the past year was a resale. The houses are one story, on lots of about a fifth of an acre.") +
      h.p("Its HOA fee is the lowest on this list. Our guide to " + h.a("/buyers/no-hoa-homes/", "homes with no HOA") + " covers places with no fee at all.") +
      facts("polo-farms")),

    entry("glenns-bay", "new townhomes closest to the beach", () =>
      h.p("The Cove at Glenns Bay is a new townhome community on Bayou Loop, off Glenns Bay Road near the US 17 Bypass. The county lists it as Glenns Bay Townhomes.") +
      h.p("It is the closest place on this list to the ocean, about 2 miles from the beach in Surfside Beach. D.R. Horton built nearly every townhome sold here in the past year, each with a one-car garage.") +
      h.p("Homes here cost the most of the twelve, and the beach is the closest.") +
      facts("glenns-bay")),

    { h2: "How do the towns compare?", toc: "The towns", id: "towns", html: () =>
      h.p("Across a whole town, a home usually costs more than in the twelve places above. These are homes that resold in the past year, on the same measure.") +
      TOWNS +
      h.p(`Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself. To choose by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}, or ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")}.`) },

    { h2: "How much property tax will you pay?", toc: "Property tax", id: "property-tax", html: () =>
      h.p(`Most places on this list are outside any town, so homes there pay only ${h.ext(LEVY, "the county's tax rates")}. Parkview is inside the city of Myrtle Beach, and the Fairways at Wild Wing is inside the city of Conway, which adds Conway's city tax.`) +
      h.p("Take a $240,000 home that is your main home. Outside a town, or in Myrtle Beach, its tax is about $970 a year. Inside Conway, it is about $1,570.") +
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
    { q: "What is the cheapest neighborhood to buy a home near Myrtle Beach?", a: `Of the neighborhoods where at least 10 homes sold in the past year, Parkview had the lowest prices. Its townhomes usually sold for about ${money(N.parkview.price)}. Parkview is a gated community off 17th Avenue South, inside the city of Myrtle Beach.` },
    { q: "Where can you buy a new house near Myrtle Beach for less?", a: `In Birchwood, off SC 905 near Longs, new Lennar houses usually sold for about ${money(N.birchwood.price)} in the past year. In Indigo Grove, off SC 90, they usually sold for about ${money(N["indigo-grove"].price)}.` },
    { q: "Is it cheaper to buy in Conway than in Myrtle Beach?", a: `Yes. Leaving out condos, a home that resold in Conway in the past year usually went for about ${money(264250)}. A house in the city of Myrtle Beach usually went for about ${money(MB_HOUSE)}. Inside the city limits, Conway's property tax is higher.` },
    { q: "Which affordable neighborhood is closest to the beach?", a: `The Cove at Glenns Bay, a new townhome community off Glenns Bay Road, is about 2 miles from the beach in Surfside Beach. Its townhomes usually sold for about ${money(N["glenns-bay"].price)} in the past year.` },
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
  sourcesNote: "Not legal, tax or loan advice. Prices are the middle recorded sale in each neighborhood from October 2025 through September 2026, with condo units and sales far below a home's value left out. Home details and HOA fees are from listings in each neighborhood. Drive times have no traffic. Tax figures leave out the break for owners 65 and older.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "See what your budget buys in these neighborhoods.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, and the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, cheapest neighborhoods Myrtle Beach, affordable townhomes Myrtle Beach, cheap homes near Myrtle Beach, new homes under 250000 Myrtle Beach, Parkview Myrtle Beach, Wild Wing Plantation townhomes, Victory Point Myrtle Beach, Birchwood Longs SC, Indigo Grove Longs",
  about: "The most affordable neighborhoods to buy a home near Myrtle Beach, South Carolina, by recorded sale price: Parkview, the Fairways at Wild Wing Plantation, Sawgrass East, Myrtle Beach Golf and Yacht Club, Birchwood, the Townes at Amber Bluff, Indigo Grove, Wynbrooke, Victory Point, Coopers Bluff, Polo Farms and the Cove at Glenns Bay",
};
