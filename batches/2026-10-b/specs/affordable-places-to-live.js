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
 * Version 10, 2026-10-14: round 10 (review/OWNER-EYE-9-affordable-places-to-live.md, ROUND-10.md). Each entry
 *   is a facts strip, then what living there is like (nearby stores, parks, landings, golf, the land's
 *   history) and the trade-off in the prose; the per-entry table is gone, and schools and the mall drive
 *   are one table after the list. Rankings cut to two. Parkview and the Golf and Yacht Club are not called
 *   gated until the gated writer confirms it. Twelve labelled NAIP aerials. Pending rows 178 to 181.
 * Version 9c, 2026-10-14: Victory Point's neighbor plan from MyHorryNews 2026 (row 176); Villas at Sandridge
 *   still selling by the deeds (row 177); Birchwood southwest of Longs; Polo Farms fee "lowest on this list".
 * Version 9b, 2026-10-14: the verifier's notes on rows 155 to 171 (none wrong): cause wording without a row
 *   cut; Victory Point's neighbor plan from the Sun News (row 172); Villas at Sandridge sold out and sized
 *   (row 173); the Sawgrass East to Victory Point drive (row 174); wording fixes (row 175).
 * Version 9, 2026-10-14: the owner's-eye review (review/OWNER-EYE-8-affordable-places-to-live.md). Access
 *   roads only (no street lists, except Victory Point's racing names); the builder sentence twice; each
 *   entry says why the price is low; the facts table gains "HOA fee and tax a year" (pending row 169) and a
 *   trade-off row, with flood where FEMA shows it (row 170); the method moves to the sources line; the first
 *   offer is the navy band (mkpage-offer-box.patch). repeat-check --strict passes.
 * Version 8b, 2026-10-14: the verifier's round 8 check (rows 116 to 154). The ranking now counts new homes the
 *   county has not valued yet (the building-value filter had dropped them), splits one legal name that covers
 *   two places (PARKVIEW), leaves out manufactured homes, and keeps only places within about 20 minutes'
 *   drive of a public beach access (pending rows 155 to 168). Out: Coopers Bluff, the Cove at Glenns Bay.
 *   In: Forestbrook Village, Villas at Sandridge. Schools from the district's attendance zones (row 165).
 * Versions 1 to 7, 2026-10-13 and 14: towns ranked by Zillow's typical value (git history).
 *
 * One price measure in every comparison: the middle recorded sale price over the past year (county deed
 * index, October 2025 to September 2026), condo units left out, said "homes usually sold for about $X".
 * Every price is rounded to the nearest $5,000 and every drive under 15 minutes to the nearest minute and longer ones to the nearest 5, the same on
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
/* MyHorryNews, 2026-02-15, Sazie Eagan (pending row 176). */
const REV3 = "https://www.myhorrynews.com/news/for-rent-townhome-community-breaks-ground-in-carolina-forest/article_bc89fa83-1610-4e28-ad33-58e653b0135c.html";
/* City of Myrtle Beach, Whispering Pines page; MyHorryNews 2018 on the speedway; Enterprise Landing (pending rows 178, 179). */
const POLO_FLOOD = "https://www.wmbfnews.com/2018/11/29/wmbf-investigates-did-poor-planning-lead-flooding-longs-community/";
const OVERLOOK = "https://www.lennar.com/new-homes/south-carolina/myrtle-beach/longs/the-overlook";
const CFRC = "https://horrycountysc.gov/departments/parksandrecreation/recreation-centers/";
const WPINES = "https://www.cityofmyrtlebeach.com/i_want_to/find/whispering_pines_golf_course.php";
const RAMBI = "https://www.myhorrynews.com/visit/race-to-myrtle-beach-speedway-for-the-nascar-experience/article_494efd18-8ab0-11e8-825d-ef4e52fa72ee.html";
const ENTERPRISE = "https://www.howsyourriver.com/access_sites/enterprise";
const WILDWING = "https://www.myrtlebeachgolftrips.com/news/time-to-come-home-why-you-need-to-play-wild-wing/";

/* ---------------------------------------------------------------------------- */
/* Values, rounded once, used everywhere.                                         */

const money = (v) => "$" + (Math.round(v / 5000) * 5000).toLocaleString("en-US");
/* Drives under 15 minutes to the nearest minute, longer ones to the nearest 5 (CRAFT 2). */
const mins = (m) => `${m < 15 ? Math.max(1, Math.round(m)) : Math.round(m / 5) * 5}`;

/* The twelve places, lowest middle sale price first (pending rows 117 to 128). lat and lon: the middle
   of each place's sales (row 141). mb: free-flow minutes to Coastal Grand Mall; beach: to the nearest
   public beach access by car (row 141). */
const P = [
  { id: "parkview", year: 4700, name: "Parkview", map: "Parkview", lat: 33.686431, lon: -78.910360, price: 190000, mb: 6.1, beach: 4.0,
    homes: "Townhomes from 2004 and 2005, 2 or 3 bedrooms", fee: "About $325 a month", schools: "Myrtle Beach Elementary, Middle and High" },
  { id: "fairways-at-wild-wing", year: 6100, name: "The Fairways at Wild Wing Plantation", map: "Fairways at Wild Wing", lat: 33.787649, lon: -78.986234, price: 215000, mb: 16.5, beach: 17.8,
    homes: "Townhomes from 2007 to 2018, 3 bedrooms", fee: "About $390 a month", schools: "Carolina Forest Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "sawgrass-east", year: 6000, name: "Sawgrass East", map: "Sawgrass East", lat: 33.756167, lon: -78.929975, price: 222500, mb: 16.7, beach: 17.9,
    homes: "Townhomes from 2005 and 2006, 2 or 3 bedrooms", fee: "About $425 a month", schools: "Ten Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "birchwood", year: 2400, name: "Birchwood", map: "Birchwood", lat: 33.925885, lon: -78.754012, price: 223825, mb: 41.6, beach: 20.2,
    homes: "New houses, 3 or 4 bedrooms", fee: "About $120 a month", schools: "Daisy Elementary, Loris Middle, Loris High" },
  { id: "golf-and-yacht-club", year: 2100, name: "Myrtle Beach Golf and Yacht Club", map: "Golf and Yacht Club", lat: 33.649402, lon: -79.05007, price: 225000, mb: 22.9, beach: 15.0,
    priceText: "About $225,000 (older part); new houses about $330,000",
    homes: "One-story houses, most from the 1980s", fee: "About $95 a month", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "forestbrook-village", year: 3000, name: "Forestbrook Village", map: "Forestbrook Village", lat: 33.714649, lon: -78.966818, price: 232310, mb: 11.3, beach: 12.6,
    homes: "New two-story townhomes, 3 bedrooms", fee: "About $170 a month", schools: "Forestbrook Elementary, Forestbrook Middle, Socastee High" },
  { id: "victory-point", year: 3800, name: "Victory Point", map: "Victory Point", lat: 33.7454, lon: -78.951801, price: 235630, mb: 12.7, beach: 13.9,
    homes: "New townhomes, 3 bedrooms", fee: "About $235 a month", schools: "Pine Island Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "amber-bluff", year: 2200, name: "The Townes at Amber Bluff", map: "Amber Bluff", lat: 33.810207, lon: -79.021249, price: 237500, mb: 19.3, beach: 20.6,
    homes: "New townhomes, 3 bedrooms", fee: "About $100 a month", schools: "Waccamaw Elementary, Black Water Middle, Carolina Forest High" },
  { id: "villas-at-sandridge", year: 4600, name: "Villas at Sandridge", map: "Villas at Sandridge", lat: 33.852846, lon: -78.696635, price: 245000, mb: 29.3, beach: 7.46,
    homes: "New two-story townhomes, 3 bedrooms", fee: "About $300 a month", schools: "Waterway Elementary, North Myrtle Beach Middle and High" },
  { id: "indigo-grove", year: 2000, name: "Indigo Grove", map: "Indigo Grove", lat: 33.862931, lon: -78.749665, price: 245000, mb: 35.0, beach: 13.2,
    homes: "New houses, 3 to 5 bedrooms", fee: "About $80 a month", schools: "Riverside Elementary, North Myrtle Beach Middle and High" },
  { id: "wynbrooke", year: 6500, name: "Wynbrooke", map: "Wynbrooke", lat: 33.584176, lon: -79.048446, price: 249500, mb: 19.8, beach: 8.9,
    homes: "Townhomes from 2002 to 2005, 3 bedrooms", fee: "About $450 a month", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "polo-farms", year: 1300, name: "Polo Farms", map: "Polo Farms", lat: 33.917844, lon: -78.812061, price: 255000, mb: 36.0, beach: 22.0,
    homes: "One-story houses from 2005 to 2017, resales", fee: "About $20 a month", schools: "Daisy Elementary, Loris Middle, Loris High" },
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
  const rows = P.map((p) => [`<a href="${A(p.id)}">${p.n}. ${p.name}${p.id === "golf-and-yacht-club" ? " (older part)" : ""}</a>`, p.price, false]).concat([["A home in the city of Myrtle Beach (condos left out)", MB_HOUSE, true]]);
  const body = rows.map(([n, v, me]) => `<tr${me ? ' class="me"' : ""}><th scope="row">${n}</th>`
    + `<td><span class="t"><span class="b" style="--w:${(v / MB_HOUSE * 100).toFixed(1)}%" aria-hidden="true"></span><span class="v">${money(v)}</span></span></td></tr>`).join("");
  return BARS_CSS + `<figure class="c3-bars"><table><caption>${title}</caption><thead style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"><tr><th scope="col">Place</th><th scope="col">Homes usually sold for</th></tr></thead><tbody>${body}</tbody></table><figcaption>${caption}</figcaption></figure>`;
}

const MAP = placesMap("Affordable neighborhoods near Myrtle Beach",
  P.map((p) => ({ name: p.map, lat: p.lat, lon: p.lon, href: A(p.id) })), {
    caption: "Map of the twelve neighborhoods, numbered as in the list below.",
  });

/* Each place's facts in one strip (ROUND-10: one facts line per entry). A table, so the numbers stay
   out of the prose; on a phone the five cells wrap into two columns. */
const STRIP_CSS = "<style>.c3-strip{margin:1rem 0 1.4rem;max-width:760px}"
  + ".c3-strip table{width:100%;border-collapse:collapse;font-size:.98rem;line-height:1.35}"
  + ".c3-strip caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}"
  + ".c3-strip tr{display:grid;grid-template-columns:repeat(5,1fr);gap:0 .9rem}"
  + ".c3-strip th{color:var(--muted);font-weight:500;font-size:1rem;text-align:left;padding:.15rem 0;text-transform:none}"
  + ".c3-strip td{color:var(--navy);font-weight:600;padding:.15rem 0 .5rem;vertical-align:top}"
  + ".c3-strip thead tr{border-top:2px solid var(--brass)}"
  + "@media (max-width:640px){.c3-strip table{display:grid;grid-template-columns:1fr 1fr}.c3-strip thead,.c3-strip tbody{display:contents}.c3-strip tr{display:contents}"
  + ".c3-strip th:nth-child(1){grid-row:1;grid-column:1}.c3-strip td:nth-child(1){grid-row:2;grid-column:1}"
  + ".c3-strip th:nth-child(2){grid-row:1;grid-column:2}.c3-strip td:nth-child(2){grid-row:2;grid-column:2}"
  + ".c3-strip th:nth-child(3){grid-row:3;grid-column:1}.c3-strip td:nth-child(3){grid-row:4;grid-column:1}"
  + ".c3-strip th:nth-child(4){grid-row:3;grid-column:2}.c3-strip td:nth-child(4){grid-row:4;grid-column:2}"
  + ".c3-strip th:nth-child(5){grid-row:5;grid-column:1}.c3-strip td:nth-child(5){grid-row:6;grid-column:1}}</style>";
function strip(id) {
  const p = N[id];
  const cells = [
    ["Usually sold for", p.priceText || `About ${money(p.price)}`],
    ["What you get", p.homes],
    ["HOA fee", p.fee],
    ["Fee and tax a year, besides the mortgage and insurance", `About $${p.year.toLocaleString("en-US")}`],
    ["To the beach", `About ${mins(p.beach)} minutes`],
  ];
  return `<div class="c3-strip"><table><caption>${p.name}: the facts</caption><thead><tr>${cells.map(([k]) => `<th scope="col">${k}</th>`).join("")}</tr></thead>`
    + `<tbody><tr>${cells.map(([, v]) => `<td>${v}</td>`).join("")}</tr></tbody></table></div>`;
}

/* One table after the list: the drive to Coastal Grand Mall and the schools for each place
   (rows 164 and 165). */
const COMPARE_CSS = "<style>.c3-cmp{margin:1.2rem 0 1.6rem;max-width:900px;overflow-x:auto}.c3-cmp table{width:100%;border-collapse:collapse;font-size:.98rem;line-height:1.4}"
  + ".c3-cmp caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .6rem}"
  + ".c3-cmp th,.c3-cmp td{text-align:left;padding:.45rem .8rem .45rem 0;border-top:1px solid var(--line,#e3ddd0);vertical-align:top}"
  + ".c3-cmp thead th{border-top:0;color:var(--navy)}.c3-cmp td{color:var(--muted)}.c3-cmp tbody th{color:var(--navy);font-weight:500}"
  + ".c3-cmp th a{color:var(--navy)}@media (max-width:599px){.c3-cmp table{font-size:.92rem}}</style>";
const COMPARE = COMPARE_CSS + `<figure class="c3-cmp"><table><caption>The drive to Coastal Grand Mall, and the schools for each place</caption>`
  + `<thead><tr><th scope="col">Place</th><th scope="col">To Coastal Grand Mall</th><th scope="col">Schools (district zones)</th></tr></thead><tbody>`
  + P.map((p) => `<tr><th scope="row"><a href="${A(p.id)}">${p.n}. ${p.map}</a></th><td>About ${mins(p.mb)} min</td><td>${p.schools}</td></tr>`).join("")
  + "</tbody></table></figure>";

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

/* Labelled aerials (USDA NAIP 2023, public domain; Chapter3's labels), one per place. */
const ph = photoSet({ aerialWidth: "720px" });
const PHOTO_CSS = ph.css();
const PH = {
  "parkview": ph.aerial("parkview-and-whispering-pines-from-above", "Parkview, beside 17th Avenue South, with Whispering Pines Golf Course, from above.", { closeUp: true }),
  "fairways-at-wild-wing": ph.aerial("fairways-at-wild-wing-and-us-501-from-above", "The Fairways at Wild Wing, with the Aldi and Walmart near US 501, from above.", { closeUp: true }),
  "sawgrass-east": ph.aerial("sawgrass-east-and-carolina-forest-boulevard-from-above", "Sawgrass East, off Carolina Forest Boulevard, from above.", { closeUp: true }),
  "birchwood": ph.aerial("birchwood-and-sc-905-from-above", "Birchwood's land off SC 905, before the houses were built, with the Food Lion in Longs.", { closeUp: true }),
  "golf-and-yacht-club": ph.aerial("golf-and-yacht-club-and-enterprise-landing-from-above", "Myrtle Beach Golf and Yacht Club, Bay Road and Enterprise Landing, from above.", { closeUp: true }),
  "forestbrook-village": ph.aerial("forestbrook-village-and-forestbrook-road-from-above", "Forestbrook Village's land off Forestbrook Road, before the townhomes, with Forestbrook Grocery.", { closeUp: true }),
  "victory-point": ph.aerial("old-speedway-and-victory-point-labelled-from-above", "The old Myrtle Beach Speedway beside US 501, before Victory Point was built on part of its land."),
  "amber-bluff": ph.aerial("townes-at-amber-bluff-and-coastal-carolina-from-above", "The Townes at Amber Bluff's land, with Brooks Stadium and Coastal Carolina University to the south.", { closeUp: true }),
  "villas-at-sandridge": ph.aerial("villas-at-sandridge-and-sc-90-from-above", "Villas at Sandridge, east of SC 31, with the North Myrtle Beach Sports Complex to the southwest.", { closeUp: true }),
  "indigo-grove": ph.aerial("indigo-grove-and-sc-90-from-above", "Indigo Grove's land, before the houses were built, with Griffin's IGA on SC 90.", { closeUp: true }),
  "wynbrooke": ph.aerial("wynbrooke-and-sc-707-shops-from-above", "Wynbrooke, off SC 707, with Lowes Foods and Publix to the northwest.", { closeUp: true }),
  "polo-farms": ph.aerial("polo-farms-and-todd-swamp-from-above", "Polo Farms off SC 905, with Todd Swamp to the southwest.", { closeUp: true }),
};
ph.share("old-speedway-and-victory-point-labelled-from-above");

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
  sub: `Affordable neighborhoods near Myrtle Beach where you can buy a home for about ${money(N.parkview.price)} to ${money(N["polo-farms"].price)}.`,
  heroMedia: glance([
    { icon: "dollar", label: "Lowest: Parkview", text: `About ${money(N.parkview.price)}` },
    { icon: "town", label: "A Myrtle Beach home", text: `About ${money(MB_HOUSE)}` },
    { icon: "beach", label: "To the beach", text: "5 to 20 min" },
    { icon: "key", label: "Down payment help", text: "$10,000" },
  ]),
  heroCta: { title: "See what your budget buys in these neighborhoods.", label: OFFER, href: CONTACT, text: "Tell us your price range. An agent will send you the homes for sale there, and the down-payment programs that fit. We check the HOA papers, the flood map and the tax record for any home you like." },
  author: "devin",
  shortAnswer: [
    `Within about 20 minutes of a beach, the cheapest homes near Myrtle Beach are townhomes in Parkview, the Fairways at Wild Wing and Sawgrass East. Leaving out condos, they usually sold for about ${money(N.parkview.price)} to ${money(N["sawgrass-east"].price)} last year.`,
    `Houses start at about the same ${money(N.birchwood.price)}: new ones in Birchwood near Longs, and older ones in the Golf and Yacht Club off Bay Road. A Myrtle Beach home that is not a condo usually sold for about ${money(MB_HOUSE)}.`,
  ],
  sections: [
    { h2: "Where do homes sell for the least near Myrtle Beach?", toc: "Where homes cost the least", id: "compare", html: () =>
      PHOTO_CSS + STRIP_CSS +
      h.p("These are the twelve neighborhoods within about 20 minutes of a beach where homes sold for the least in the past year. Half are new homes from Lennar, D.R. Horton and Dream Finders Homes.") +
      h.p(`The next five cost about ${money(257500)} to ${money(266237)}. They are Oak Forest and Forestbrook near Socastee, Meadows Edge off SC 544, the Reserve at Long Bay near Longs and McCormick Townhomes.`) +
      h.p("Farther inland, new houses in Collins Walk and Kingston Oaks near Conway, and in Warner Crossing near Loris, sold for less than some of the twelve. From those, the beach is 30 minutes or more away.") +
      barChart("What homes usually sold for in the past year, lowest first", "Chart of the middle sale price in each neighborhood, from the county's deed records. The dark bar is a home in the city of Myrtle Beach, condos left out, for comparison.") +
      MAP.html +
      h.p("Drive times are from the middle of each neighborhood with no traffic. In our experience, rush hour adds 5 to 10 minutes.") },

    entry("parkview", "older townhomes inside Myrtle Beach", () =>
      strip("parkview") +
      h.p("Parkview is a group of townhomes off 17th Avenue South, near Harrelson Boulevard. It is the only one of the twelve inside the city of Myrtle Beach. The townhomes are around ponds, with a pool for the owners.") +
      PH["parkview"] +
      h.p(`Whispering Pines, the ${h.ext(WPINES, "city's own golf course")}, is across 17th Avenue South from Parkview. It was originally part of the Myrtle Beach Air Force Base, and its tee markers feature the squadron emblems. Myrtle Beach International Airport is across Harrelson Boulevard from the course.`) +
      h.p("The trade-off is choice: few of these townhomes come up for sale in a year, so we watch for each new listing.")),

    entry("fairways-at-wild-wing", "townhomes at a golf course off US 501", () =>
      strip("fairways-at-wild-wing") +
      h.p("The Fairways is a group of townhomes off Wild Wing Boulevard, inside Wild Wing Plantation, on US 501 between Conway and Myrtle Beach.") +
      PH["fairways-at-wild-wing"] +
      h.p(`Wild Wing was once a golf resort with several courses. Three of them closed in 2004, and one later reopened with nine holes. The Avocet course, designed by Jeff Brauer and Larry Nelson, is ${h.ext(WILDWING, "still open")}, and some of these townhomes are near it.`) +
      h.p("An Aldi is about three minutes away. The HOA fee includes the pool and internet, and usually water and sewer. Living inside Conway's city limits means a higher yearly tax than outside a town.")),

    entry("sawgrass-east", "townhomes off Carolina Forest Boulevard", () =>
      strip("sawgrass-east") +
      h.p("Sawgrass East is a townhome community off Carolina Forest Boulevard, about 2.5 miles by road north of US 501. The townhomes are around small ponds, with a pool and a clubhouse for the owners.") +
      PH["sawgrass-east"] +
      h.p(`The county's ${h.ext(CFRC, "Carolina Forest Recreation Center")}, with a gym, a fitness room and a climbing wall, is about six minutes away.`) +
      h.p("The HOA fee is higher than at most places here, though it usually includes water and sewer. For a buyer who would pay those bills anyway, the gap is smaller than it looks.")),

    entry("birchwood", "new houses off SC 905 near Longs", () =>
      strip("birchwood") +
      h.p("Birchwood is a new neighborhood of houses off SC 905, southwest of Longs. The turn is beside the tall water tower. Lennar built every house here, most on about a quarter acre, and high-speed internet is included.") +
      PH["birchwood"] +
      h.p("To the west and north are fields, woods and older homes on large lots; newer neighborhoods are to the east.") +
      h.p(`The trade-off is the drive to Myrtle Beach: Coastal Grand Mall is about ${mins(N.birchwood.mb)} minutes away, by SC 9 and the Carolina Bays Parkway.`)),

    entry("golf-and-yacht-club", "older houses off Bay Road", () =>
      strip("golf-and-yacht-club") +
      h.p(`Myrtle Beach Golf and Yacht Club is a community of houses off Bay Road, which leaves SC 707 near Socastee. A gatehouse stands at the entrance on Bay Road; our ${h.a("/buyers/gated-communities/", "guide to gated communities")} covers its gate. Owners share a pool, tennis and shuffleboard courts, a playground and a clubhouse, and the HOA has a storage area for RVs and trailers. We check the HOA papers for what the fee covers.`) +
      PH["golf-and-yacht-club"] +
      h.p(`Enterprise Landing, a ${h.ext(ENTERPRISE, "public boat ramp")} off Bay Road onto the waterway, is about a seven-minute drive. Most houses in the older part are about 1,350 square feet, on lots of about 6,500 square feet. D.R. Horton is building new houses in a section called Sandpiper Place, which sell for more.`) +
      h.p(`Age matters here. Insurers may require an older home to have an updated roof, wiring, plumbing and heating, so we have the home inspector look at each before you buy. See our ${h.a("/buyers/coastal-insurance/", "guide to home insurance near the coast")}.`)),

    entry("forestbrook-village", "new townhomes off Forestbrook Road", () =>
      strip("forestbrook-village") +
      h.p("Forestbrook Village is a new Lennar townhome community off Forestbrook Road, south of US 501. Each townhome has a one-car garage, and internet is included. It is next to the Forestbrook neighborhood, and its townhomes sold for less than the houses there.") +
      PH["forestbrook-village"] +
      h.p("Forestbrook Middle and Forestbrook Elementary are four to five minutes away.") +
      h.p("The trade-off is flood. A few of the lots sold last year are in a high-risk flood zone, where a lender usually requires flood insurance. We check the flood map for the lot of any home you like.")),

    entry("victory-point", "new townhomes on the old speedway land", () =>
      strip("victory-point") +
      h.p("Victory Point is a new Lennar townhome community off US 501, by Tanger Outlets. It is on part of the land of the old Myrtle Beach Speedway.") +
      PH["victory-point"] +
      h.p(`The track ${h.ext(RAMBI, "opened in 1958")} as RAMBI Raceway. Cars ran their ${h.ext(SPEEDWAY, "last laps there in 2020")}. Several streets have racing names: Speedway Street, Talladega Drive and Pit Crew Drive.`) +
      h.p("A Publix is about five minutes away. Some townhomes back onto a pond, and owners share a pool.") +
      h.p(`Expect more building next door. Another owner bought the other part of the speedway land, about 20 acres, in 2022 and plans ${h.ext(REV3, "194 townhomes for rent")} there, with leasing expected in 2027.`)),

    entry("amber-bluff", "new townhomes near Coastal Carolina University", (bg) =>
      strip("amber-bluff") +
      h.p("The Townes at Amber Bluff is a new townhome community off Savannah Bluff Road, on the Conway side of US 501. Coastal Carolina University's campus and Brooks Stadium are south, across US 501.") +
      PH["amber-bluff"] +
      h.p("D.R. Horton built every townhome here. Each one listed has the same floor plan, and the sales were close together in price. The HOA fee includes the grounds and trash, not water.") +
      h.p("Downtown Conway and its riverwalk on the Waccamaw River are an eight-minute drive. Each owner will also pay a yearly insurance assessment that is not yet set. We find out what it will be for any home you like.") +
      h.cta("Want the homes for sale in one of these neighborhoods?", "Tell us which ones you like and your price range. One of our agents will send you what is for sale there, with the HOA fee and the yearly tax for each home.", OFFER, CONTACT, bg)),

    entry("villas-at-sandridge", "new townhomes off SC 90 near Little River", () =>
      strip("villas-at-sandridge") +
      h.p("Villas at Sandridge is a community of new townhomes off SC 90 near Little River. They are from Dream Finders Homes, and each has a one-car garage. In the Wylie floor plan, the main bedroom is on the first floor.") +
      PH["villas-at-sandridge"] +
      h.p("The North Myrtle Beach Park and Sports Complex, about five minutes away, has ball fields and walking trails around a lake.") +
      h.p("You give up time: Myrtle Beach is about a half-hour drive. The monthly fee is also higher than at the other new communities here.")),

    entry("indigo-grove", "new houses off SC 90", () =>
      strip("indigo-grove") +
      h.p("Indigo Grove is a new neighborhood of houses off SC 90, south of Longs. Lennar sells it as The Overlook and sold about 145 houses here in about ten months.") +
      PH["indigo-grove"] +
      h.p(`Lennar offers ${h.ext(OVERLOOK, "nine floor plans")} here. The smallest, the Beckman, is one story, with three bedrooms in about 1,260 square feet. The largest, the Columbia, has five bedrooms in about 2,360. Most lots are about 0.2 acre.`) +
      h.p("The HOA owns about 22 acres of open space in the neighborhood, and the fee covers the common areas and trash pickup. None of the lots sold here last year is in a high-risk flood zone.") +
      h.p("For work, North Myrtle Beach is about 12 minutes away by car, and downtown Conway about 35.")),

    entry("wynbrooke", "townhomes on ponds off SC 707", () =>
      strip("wynbrooke") +
      h.p("Wynbrooke is a townhome community off SC 707, near Murrells Inlet. Its townhomes are around ponds, and some back onto the water. Owners share a pool.") +
      PH["wynbrooke"] +
      h.p("A Lowes Foods and a Publix are each about two minutes away. The nearest beach is in Garden City.") +
      h.p("The trade-off is the fee. Its HOA fee is the highest of the twelve. It usually includes water, sewer and the insurance on the buildings, but with the tax, a year here costs more than at Polo Farms, which sells for more.")),

    entry("polo-farms", "older houses with a small HOA fee", () =>
      strip("polo-farms") +
      h.p("Polo Farms is a neighborhood of houses off SC 905, between SC 9 and SC 22, west of Longs. Simpson Creek runs along its southwest side. It was built in three phases, and Creekside Custom Homes began the last one in 2016.") +
      PH["polo-farms"] +
      h.p(`The fee is small because the association has no pool or clubhouse. It owns two ponds, some woods and the strips along SC 905. Lots are about a fifth of an acre, many backyards are fenced, and several have their own pool. Our guide to ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")} covers places with no fee at all.`) +
      h.p(`Flood is the main concern here. A few houses flooded after Hurricane Matthew in 2016. After Hurricane Florence in 2018, when the Waccamaw River rose to historic heights, ${h.ext(POLO_FLOOD, "only a handful stayed dry")}. Half of last year's sales were on lots in a high-risk flood zone, and a lender usually requires flood insurance there. Before you make an offer, we look up the lot on FEMA's flood map.`)),

    { h2: "How do the twelve compare on schools and the drive?", toc: "Schools and the drive", id: "schools", html: () =>
      h.p("How far each place is from Myrtle Beach, by the drive to Coastal Grand Mall, and the zoned schools for each:") +
      COMPARE },

    { h2: "How do the towns compare?", toc: "The towns", id: "towns", html: () =>
      h.p("Across the whole town, Loris costs about the same as these neighborhoods, and Conway a little more. Socastee, Longs, Little River and Myrtle Beach cost more. These are homes that resold in the past year, with builder sales and condos left out.") +
      TOWNS +
      h.p(`Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself. To choose by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} covers one neighborhood in depth.`) },

    { h2: "How much property tax will you pay?", toc: "Property tax", id: "property-tax", html: () =>
      h.p(`Most places on this list are outside any town, so homes there pay only ${h.ext(LEVY, "the county's tax rates")}. Parkview is inside the city of Myrtle Beach. The Fairways at Wild Wing is inside the city of Conway, which adds its own city tax.`) +
      h.p("Take a $240,000 home that is your main home. Outside a town, or in Myrtle Beach, its tax is about $970 a year. It is a little more in Polo Farms and Wynbrooke. Inside Conway, it is about $1,570.") +
      h.p("When you buy, the county values the home at about what it is worth that year. The new value shows up on the next year's tax bill.") +
      h.p(`These figures are for your main home, once the county gives it the lower rate for a home you live in. The county gives that rate only after an application, and we walk you through it after closing. Our ${h.a("/buyers/property-taxes/", "property tax guide")} explains the rate.`) },

    { h2: "What help can you get with a down payment?", toc: "Down payment help", id: "down-payment", html: (bg) =>
      h.p(`SC Housing, the state's housing agency, gives buyers in Horry and Georgetown counties $10,000 toward the down payment and closing costs. You do not pay it back if you keep living in the home for the full term. The program is called the ${h.ext(SCH, "Homebuyer Program")}.`) +
      h.p("In these two counties, you do not have to be a first-time buyer, but you must not own a home when you close. For one or two people, household income must be under about $115,000, and a larger household may earn a little more. The home price can be up to $450,000.") +
      h.p(`To apply, you go through a lender that works with SC Housing, and the lender checks that you qualify. SC Housing also runs Palmetto Home Advantage and County First. Our page on ${h.a("/buyers/programs/", "down-payment help programs")} covers all three and their terms.`) +
      story([
        "<strong>Example:</strong> Dana rents an apartment in Myrtle Beach and wants a house of her own in Conway. She thinks she must save for years before she can buy.",
        "Her Chapter3 agent shows her SC Housing's Homebuyer Program, which helps buyers here pay the down payment. The agent puts her in touch with a lender that works with the program.",
        "Dana takes the homebuyer class and starts looking at houses, instead of saving for years first.",
      ], "", bg) +
      h.cta("See what your budget buys in these neighborhoods.", "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, and the programs that fit.", OFFER, CONTACT, bg) },
  ],
  faqTitle: "Affordable places near Myrtle Beach: FAQ",
  faq: [
    { q: "What is the cheapest neighborhood to buy a home near Myrtle Beach?", a: `Of the neighborhoods within about 20 minutes of the beach where at least 10 homes sold in the past year, Parkview had the lowest prices. Its older townhomes usually sold for about ${money(N.parkview.price)}. Parkview is a group of townhomes off 17th Avenue South, inside the city of Myrtle Beach.` },
    { q: "Where can you buy a new house near Myrtle Beach for less?", a: `In Birchwood, off SC 905 near Longs, new Lennar houses usually sold for about ${money(N.birchwood.price)} in the past year. In Indigo Grove, off SC 90, they usually sold for about ${money(N["indigo-grove"].price)}.` },
    { q: "Is it cheaper to buy in Conway than in Myrtle Beach?", a: `Yes. Leaving out builder sales and condos, a home that resold in Conway in the past year usually went for about ${money(264250)}. In the city of Myrtle Beach, a home usually went for about ${money(MB_HOUSE)}. Inside the city limits, Conway's property tax is higher.` },
    { q: "Which affordable neighborhood is closest to the beach?", a: `Parkview, a townhome community off 17th Avenue South in Myrtle Beach, is about ${mins(N.parkview.beach)} minutes by car from a public beach access. Its older townhomes usually sold for about ${money(N.parkview.price)} in the past year.` },
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
  sourcesNote: "Not legal, tax or loan advice. Prices: the middle recorded sale, October 2025 to September 2026, without condos, manufactured homes, multi-lot deeds or sales far below value. Each place has 10 or more sales and a beach within about 20 minutes. Home details from listings; schools from zones. Yearly tax for a home you live in, before the break at 65.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "See what your budget buys in these neighborhoods.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, and the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, cheapest neighborhoods Myrtle Beach, affordable townhomes Myrtle Beach, cheap homes near Myrtle Beach, new homes under 250000 Myrtle Beach, Parkview Myrtle Beach, Wild Wing Plantation townhomes, Victory Point Myrtle Beach, Forestbrook Village, Villas at Sandridge, Birchwood Longs SC, Indigo Grove Longs",
  about: "The most affordable neighborhoods to buy a home near Myrtle Beach, South Carolina, by recorded sale price: Parkview, the Fairways at Wild Wing Plantation, Sawgrass East, Birchwood, Myrtle Beach Golf and Yacht Club, Forestbrook Village, Victory Point, the Townes at Amber Bluff, Villas at Sandridge, Indigo Grove, Wynbrooke and Polo Farms",
};
