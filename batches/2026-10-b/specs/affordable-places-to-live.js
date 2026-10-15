/* /buyers/affordable-places-to-live/ - the most affordable places to buy a home near Myrtle Beach.
 *
 * Batch 2026-10-b, page 5.
 * Version 14, 2026-10-15: round 14, a rebuild (review/ROUND-14.md; the owner's third read in voice/VERDICTS.md:
 *   "talk more about benefits of each area other than price ... heres affordable homes here's all the amazing
 *   things about the location and property call us to book a showing ... the graph could be a bit sleeker ...
 *   the benefits could also be listed in the graph at the beginning").
 *   Who searches, and what they would pay to know: the ledger's "Round 14" section. A first-time or budget
 *   buyer who fears this price means giving up a good life. So each place now sells what living there gives
 *   you, with new research (rows 197 to 212): the Air Force base course and The Market Common by Parkview,
 *   the hospital and college drives from the Fairways and Amber Bluff, Lewis Ocean Bay's flytraps near
 *   Sawgrass East, the Lennar features and warranty, the Nicklaus course near Longs, the Golf and Yacht
 *   Club's lost course and its HOA, the 162-acre park and wake park near Villas at Sandridge, the MarshWalk
 *   and Huntington Beach by Wynbrooke.
 *   Shape (CRAFT 3, "No preamble"): the short answer, one offer band, then the selection guide (the glass
 *   price chart, each place's best feature beside its price; it is the only list of names before the
 *   entries), then the twelve entries. No hero tiles, no contents list (the chart links every entry), no
 *   map before the entries. Each entry: the best thing a buyer would not guess, daily life, one trade-off,
 *   the price and the yearly fee and tax in a sentence, and its own offer (glass.js offer pill). The facts
 *   strips are gone. After the entries: other places to look, one figure with the map and the drives and
 *   schools table, the tax and the down-payment help, short.
 *   Design: the liquid glass theme (tools/glass.js: G.page, G.bars, G.offer).
 * Versions 1 to 12, 2026-10-13 and 14: git history. Version 8 found the twelve by joining the county deed
 *   index to the parcels (rows 116 and 155); later rounds added the aerials, the drives and the flood checks.
 *
 * One price measure in every comparison: the middle recorded sale price over the past year (county deed
 * index, October 2025 to September 2026), condo units left out. Every price is rounded to the nearest $5,000;
 * every drive under 15 minutes to the nearest minute and longer ones to the nearest 5, the same on every surface.
 *
 * Facts: batches/2026-10-b/facts/affordable-facts.md.
 *   Sales by place:    rows 117 to 128, 155 to 163.     Homes and fees:  rows 129 to 140, 162, 163, 187.
 *   Drives:            rows 164, 178, 183 to 186; new drives rows 198 to 211.
 *   Living there:      rows 142 to 152, 179, 188, 189, 193; round 14 rows 197 to 211; the chart labels row 212.
 *   Fee and tax a year: row 169.  Tax: rows 153, 167, 107.  Down payment: rows 92 to 97.  Insurance: row 109.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Blog-Brain tools: the upload package's copy in tools/blog-brain-2026-10-b/, then $BLOG_BRAIN, then the repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "glass.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/glass.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const AM = require(path.join(BB, "tools", "area-map.js"));
const G = PK.glass;

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(DATA, "photos.json")].filter((f) => fs.existsSync(f));
const kit = PK.create({ h, theme: "glass", photos: PHOTO_FILES.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")).photos),
  mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { story, placesMap, photoSet } = kit;

const SELF = "/buyers/affordable-places-to-live/";
const CONTACT = "/contact/";
const OFFER = "Book a showing";

/* Primary sources linked in the body. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const PARCELS = "https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer/24";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const SCH = "https://schousing.sc.gov/homebuyers/programs-homebuyers";
const OSRM = "https://project-osrm.org/";
const WPINES = "https://www.cityofmyrtlebeach.com/i_want_to/find/whispering_pines_golf_course.php";
const BASE = "https://cityofmyrtlebeach.com/news_detail_T6_R729.php";
const RAMBI = "https://www.myhorrynews.com/visit/race-to-myrtle-beach-speedway-for-the-nascar-experience/article_494efd18-8ab0-11e8-825d-ef4e52fa72ee.html";
const SPEEDWAY = "https://www.wmbfnews.com/2024/07/10/old-myrtle-beach-speedway-being-transformed-into-townhome-community";
const REV3 = "https://www.myhorrynews.com/news/for-rent-townhome-community-breaks-ground-in-carolina-forest/article_bc89fa83-1610-4e28-ad33-58e653b0135c.html";
const POLO_FLOOD = "https://www.wmbfnews.com/2018/11/29/wmbf-investigates-did-poor-planning-lead-flooding-longs-community/";
const OVERLOOK = "https://www.lennar.com/new-homes/south-carolina/myrtle-beach/longs/the-overlook";
const LENNAR_WARRANTY = "https://www.lennar.com/warranty";
const CFRC = "https://horrycountysc.gov/departments/parksandrecreation/recreation-centers/";
const LOB = "https://www.dnr.sc.gov/news/2025/Jun/jun10-lewisoceanbay.php";
const HERON = "https://www.wmbfnews.com/story/26752147/another-golf-course-announces-its-closing/";
const MBGYC = "https://www.mbgyc.com/";
const NMBPARK = "https://www.sctrails.net/trails/trail/north-myrtle-beach-park-and-sports-complex";
const NMBEXP = "https://nmb.us/802/North-Myrtle-Beach-Park-Sports-Complex-E";
const MARSHWALK = "https://www.marshwalk.com/";
const HBSP = "https://southcarolinaparks.com/huntington-beach";
const DRH = "https://www.drhorton.com/south-carolina/myrtle-beach/conway/the-townes-at-amber-bluff";

/* ---------------------------------------------------------------------------- */
/* Values, rounded once, used everywhere.                                         */

const money = (v) => "$" + (Math.round(v / 5000) * 5000).toLocaleString("en-US");
/* Drives under 15 minutes to the nearest minute, longer ones to the nearest 5 (CRAFT 2). */
const mins = (m) => `${m < 15 ? Math.max(1, Math.round(m)) : Math.round(m / 5) * 5}`;

/* The twelve places, lowest middle sale price first (rows 117 to 128, 155 to 163). lat and lon: the middle
   of each place's sales (row 164). mb: minutes to Coastal Grand Mall; beach: to the nearest public beach
   access by car (rows 164, 185). year: the HOA fee and tax a year (row 169). feature: the chart's label
   (row 212). */
const P = [
  { id: "parkview", name: "Parkview", map: "Parkview", lat: 33.686431, lon: -78.910360, price: 190000, mb: 6.1, beach: 4.0, year: 4700,
    feature: "golf course across the street, beach 4 min", schools: "Myrtle Beach Elementary, Middle and High" },
  { id: "fairways-at-wild-wing", name: "The Fairways at Wild Wing", map: "Fairways at Wild Wing", lat: 33.787649, lon: -78.986234, price: 215000, mb: 16.5, beach: 17.8, year: 6100,
    feature: "golf community, hospital 6 min", schools: "Carolina Forest Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "sawgrass-east", name: "Sawgrass East", map: "Sawgrass East", lat: 33.756167, lon: -78.929975, price: 222500, mb: 16.7, beach: 17.9, year: 6000,
    feature: "pool and clubhouse, county gym 6 min", schools: "Ten Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "birchwood", name: "Birchwood", map: "Birchwood", lat: 33.925885, lon: -78.754012, price: 223825, mb: 41.6, beach: 20.2, year: 2400,
    feature: "new house on a quarter acre", schools: "Daisy Elementary, Loris Middle, Loris High" },
  { id: "golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", chart: "Golf and Yacht Club (older part)", map: "Golf and Yacht Club", lat: 33.649402, lon: -79.05007, price: 225000, mb: 22.9, beach: 15.0, year: 2100,
    feature: "gated, boat ramp 7 min", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "forestbrook-village", name: "Forestbrook Village", map: "Forestbrook Village", lat: 33.714649, lon: -78.966818, price: 232310, mb: 11.3, beach: 12.6, year: 3000,
    feature: "new townhome, schools 5 min", schools: "Forestbrook Elementary, Forestbrook Middle, Socastee High" },
  { id: "victory-point", name: "Victory Point", map: "Victory Point", lat: 33.7454, lon: -78.951801, price: 235630, mb: 12.7, beach: 13.9, year: 3800,
    feature: "on the old speedway, by Tanger Outlets", schools: "Pine Island Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "amber-bluff", name: "The Townes at Amber Bluff", map: "Amber Bluff", lat: 33.810207, lon: -79.021249, price: 237500, mb: 19.3, beach: 20.6, year: 2200,
    feature: "smart home, university 6 min", schools: "Waccamaw Elementary, Black Water Middle, Carolina Forest High" },
  { id: "villas-at-sandridge", name: "Villas at Sandridge", map: "Villas at Sandridge", lat: 33.852846, lon: -78.696635, price: 245000, mb: 29.3, beach: 7.46, year: 4600,
    feature: "beach 7 min, 162-acre park 5 min", schools: "Waterway Elementary, North Myrtle Beach Middle and High" },
  { id: "indigo-grove", name: "Indigo Grove", map: "Indigo Grove", lat: 33.862931, lon: -78.749665, price: 245000, mb: 35.0, beach: 13.2, year: 2000,
    feature: "new house, no high-risk flood lots", schools: "Riverside Elementary, North Myrtle Beach Middle and High" },
  { id: "wynbrooke", name: "Wynbrooke", map: "Wynbrooke", lat: 33.584176, lon: -79.048446, price: 249500, mb: 19.8, beach: 8.9, year: 6500,
    feature: "MarshWalk 5 min, beach 9 min", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "polo-farms", name: "Polo Farms", map: "Polo Farms", lat: 33.917844, lon: -78.812061, price: 255000, mb: 36.0, beach: 22.0, year: 1300,
    feature: "one-story house, $20 HOA fee", schools: "Daisy Elementary, Loris Middle, Loris High" },
];
const N = Object.fromEntries(P.map((p, i) => [p.id, Object.assign(p, { n: i + 1 })]));
const A = (id) => "#" + id;
/* A house in the city of Myrtle Beach (verified row 24: the non-condo middle, $421,250). */
const MB_HOUSE = 421250;
const yr = (id) => "$" + N[id].year.toLocaleString("en-US");
const pr = (id) => money(N[id].price);

/* The selection guide: the glass price chart, each place's best feature beside its price (row 212). */
const GUIDE = G.bars(P.map((p) => ({ name: `${p.n}. ${p.chart || p.name}`, value: p.price, valueText: money(p.price), feature: p.feature, href: A(p.id) }))
  .concat([{ name: "A home in the city of Myrtle Beach", value: MB_HOUSE, valueText: money(MB_HOUSE), reference: true }]), {
  caption: "What homes usually sold for in the past year, lowest first, with the best thing about each place",
  note: "Tap a name to read about the place. Prices are the middle recorded sale, condos left out; the gray bar is a Myrtle Beach home that is not a condo. Each place also lists its HOA fee and its fee and tax a year, besides the mortgage and insurance.",
  max: MB_HOUSE, featureLabel: "best feature", valueLabel: "Usually sold for",
});

/* On a phone the guide's thirteen rows are most of the way to the first place: tighter rows there, same
   text size (CRAFT 3, "the first place starts within one phone screen of the short answer"). */
const PHONE_CSS = "<style>@media (max-width:699px){main#main .c3-gchart [role=rowgroup]{gap:.7rem}main#main .c3-gchart [role=row]{gap:.15rem}main#main .c3-gchart .cap{margin-bottom:.8rem}}</style>";

/* One map, after the entries: the six places outside the Myrtle Beach and Carolina Forest cluster with a
   dashed box around the cluster, then a closer map of the six inside it (round 12, as best-neighborhoods
   d57b511). The shared tool numbers each map from 1, so the markers are renumbered to the list's numbers. */
const CLUSTER = ["parkview", "fairways-at-wild-wing", "sawgrass-east", "forestbrook-village", "victory-point", "amber-bluff"];
const placeOf = (p) => ({ name: p.map, lat: p.lat, lon: p.lon, href: A(p.id) });
const TW2 = AM.internals.tw2, SZ_MANY = AM.internals.SZ.many;
/* labelDots: a name beside a dot the tool left with a number only, clear of every mark (from best-neighborhoods.js). */
function labelDots(res, forms) {
  const m = res.map, margin = 2;
  let svg = res.html;
  const markers = m.boxes.filter((b) => b.kind === "marker");
  const cen = (b) => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
  const LH = 17.5, out = [], missed = [];
  for (const p of m.places) {
    if (p.labelled) continue;
    const mk = markers.find((b) => b.owner === "lm" + (p.num - 1));
    const [cx, cy] = cen(mk), r = (mk.x1 - mk.x0) / 2;
    let best = null;
    for (const lines of forms[p.name] || [[p.name]]) {
      const w = Math.max(...lines.map((l) => TW2(l, SZ_MANY))) + 4, hh = lines.length * LH + 2;
      for (let gap = 2; gap <= 14 && !best; gap += 2) for (let k = 0; k < 24 && !best; k++) {
        const a = k * Math.PI / 12, ux = Math.cos(a), uy = Math.sin(a), px = cx + (r + gap) * ux, py = cy + (r + gap) * uy;
        const x0 = ux > 0.3 ? px : ux < -0.3 ? px - w : px - w / 2, y0 = uy > 0.3 ? py : uy < -0.3 ? py - hh : py - hh / 2;
        const b = { x0, x1: x0 + w, y0, y1: y0 + hh };
        if (b.x0 < 4 || b.x1 > m.width - 4 || b.y0 < 4 || b.y1 > m.height - 4) continue;
        if (m.boxes.some((q) => q !== mk && q.kind !== "water" && !(q.x1 + 1 < b.x0 || q.x0 - 1 > b.x1 || q.y1 + 1 < b.y0 || q.y0 - 1 > b.y1))) continue;
        const d = (q) => { const [qx, qy] = cen(q); return Math.hypot(Math.max(b.x0 - qx, 0, qx - b.x1), Math.max(b.y0 - qy, 0, qy - b.y1)); };
        if (markers.some((q) => q !== mk && d(q) <= d(mk) + margin)) continue;
        best = { lines, b };
      }
      if (best) break;
    }
    if (!best) { missed.push(p.num); continue; }
    const { lines, b } = best, x = (b.x0 + 2 - cx).toFixed(1), y = (b.y0 + 14 - cy).toFixed(1);
    m.boxes.push(Object.assign({ kind: "label", owner: "lm" + (p.num - 1) }, b));
    out.push(`<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)})"><g class="k"><text class="l" x="${x}" y="${y}">`
      + lines.map((l, i) => `<tspan x="${x}"${i ? ` dy="${LH}"` : ""}>${l}</tspan>`).join("") + `</text></g></g>`);
  }
  const i = svg.indexOf("</svg>");
  if (i < 0) throw new Error("the map is not inline, so names cannot be added");
  res.html = svg.slice(0, i) + out.join("") + svg.slice(i);
  if (missed.length) console.warn(`affordable-places-to-live: no room on the overview for the names of ${missed.join(", ")}; the key names them`);
  return res;
}
const renumber = (res, ids) => {
  const nums = ids.map((id) => N[id].n);
  res.html = res.html.replace(/<ol[\s\S]*?<\/ol>/, "");
  res.html = res.html.replace(/(<text class="nm"[^>]*>)(\d+)(<\/text>)/g, (m0, x, k, y) => x + nums[+k - 1] + y);
  return res;
};
const OUTER_IDS = P.map((p) => p.id).filter((id) => !CLUSTER.includes(id));
const INSET = renumber(placesMap("Myrtle Beach and Conway: affordable neighborhoods", CLUSTER.map((id) => placeOf(N[id])), {
  caption: "Closer map of the six neighborhoods between Myrtle Beach and Conway, numbered as on this page.",
}), CLUSTER);
const OUTER = labelDots(placesMap("Affordable neighborhoods near Myrtle Beach", OUTER_IDS.map((id) => placeOf(N[id])), {
  caption: "Map of the six neighborhoods farther out, numbered as on this page. The box marks the six on the closer map.",
}), { "Villas at Sandridge": [["Villas at Sandridge"], ["Villas at", "Sandridge"]] });
{
  const f = OUTER.map.frame, W = OUTER.map.width, H = OUTER.map.height, cl = CLUSTER.map((id) => N[id]), pad = 0.006;
  const g = { west: Math.min(...cl.map((n) => n.lon)) - pad, east: Math.max(...cl.map((n) => n.lon)) + pad, north: Math.max(...cl.map((n) => n.lat)) + pad, south: Math.min(...cl.map((n) => n.lat)) - pad };
  const x = (lon) => ((lon - f.west) / (f.east - f.west) * W).toFixed(1), y = (lat) => ((f.north - lat) / (f.north - f.south) * H).toFixed(1);
  const rect = `<rect x="${x(g.west)}" y="${y(g.north)}" width="${(x(g.east) - x(g.west)).toFixed(1)}" height="${(y(g.south) - y(g.north)).toFixed(1)}" fill="none" stroke="#1f2a44" stroke-width="1.2" stroke-dasharray="4 3" opacity=".75"/>`;
  const k = OUTER.html.indexOf("<g><g transform");
  OUTER.html = k > 0 ? OUTER.html.slice(0, k) + rect + OUTER.html.slice(k) : OUTER.html.replace("</svg>", rect + "</svg>");
  renumber(OUTER, OUTER_IDS);
}
/* The key names each place with its number; no links, so it is not read as a contents list (score H14):
   the guide at the top is the page's list of links to the entries. */
const MAP_KEY = placesMap("Affordable neighborhoods key", P.map((p) => Object.assign(placeOf(p), { href: undefined })), { caption: "Map key", key: true }).map.key;

/* After the entries, one figure: the map, then the drives and the zoned schools for each place (rows 164, 165).
   One figure, so the page shows the list of places once before the entries and once after (CRAFT 3). */
const COMPARE_CSS = "<style>.c3-cmp{margin:1.2rem 0 1.6rem;max-width:900px}.c3-cmp .t{overflow-x:auto}.c3-cmp table{width:100%;border-collapse:collapse;font-size:.98rem;line-height:1.4}"
  + ".c3-cmp caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .6rem}"
  + ".c3-cmp th,.c3-cmp td{text-align:left;padding:.45rem .8rem .45rem 0;border-top:1px solid var(--line,#e3ddd0);vertical-align:top}"
  + ".c3-cmp thead th{border-top:0;color:var(--navy)}.c3-cmp td{color:var(--muted)}.c3-cmp tbody th{color:var(--navy);font-weight:500}"
  + ".c3-cmp th a{color:var(--navy)}@media (max-width:599px){.c3-cmp table{font-size:.92rem}}</style>";
const COMPARE = COMPARE_CSS + `<figure class="c3-cmp">` + OUTER.html + INSET.html + MAP_KEY
  + `<div class="t"><table><caption>The drive to the beach and to Coastal Grand Mall, and the zoned schools</caption>`
  + `<thead><tr><th scope="col">Place</th><th scope="col">To a beach</th><th scope="col">To Coastal Grand Mall</th><th scope="col">Schools (district zones)</th></tr></thead><tbody>`
  + P.map((p) => `<tr><th scope="row"><a href="${A(p.id)}">${p.n}. ${p.map}</a></th><td>About ${mins(p.beach)} min</td><td>About ${mins(p.mb)} min</td><td>${p.schools}</td></tr>`).join("")
  + "</tbody></table></div></figure>";

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
  "polo-farms": ph.aerial("polo-farms-and-simpson-creek-from-above", "Polo Farms off SC 905, with Simpson Creek along its southwest side.", { closeUp: true }),
};
ph.share("old-speedway-and-victory-point-labelled-from-above");

/* One numbered entry, ending with its own offer (CRAFT 3, "Every place gets its own offer"). */
const entry = (id, short, html, offerName) => ({ h2: `${N[id].n}. ${N[id].name}: ${short}`, toc: N[id].map, id,
  html: (bg) => html(bg) + G.offer(offerName || N[id].name) });

/* Each place's money in one row of three glass chips, before its offer: what homes usually sold for, the HOA
   fee, and the fee and tax a year (rows 117 to 128 and 155 to 163, 129 to 140, 169). A row of chips, not a
   sentence, so the entry's words go to what living there gives you, and a reader can compare the twelve at a
   glance (CRAFT 5; ROUND-14 allows "a tiny glass chip row" where it helps). Each chip is a word and a value. */
const FEE = { "parkview": 325, "fairways-at-wild-wing": 390, "sawgrass-east": 425, "birchwood": 120, "golf-and-yacht-club": 95,
  "forestbrook-village": 170, "victory-point": 235, "amber-bluff": 100, "villas-at-sandridge": 300, "indigo-grove": 80, "wynbrooke": 450, "polo-farms": 20 };
const COSTS_CSS = "<style>main#main .c3-costs{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.4rem 0 .4rem;max-width:760px}"
  + "main#main .c3-costs>[role=listitem]{display:flex;align-items:center;gap:.6rem;padding:.5rem .9rem .5rem .55rem;border-radius:16px;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(255,255,255,.55));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,0 1px 2px rgba(28,32,40,.06))}"
  + "main#main .c3-costs .i{flex:none;display:flex;width:2rem;height:2rem;border-radius:50%;align-items:center;justify-content:center;color:var(--g-ink,#8a5226);background:rgba(196,120,58,.12)}"
  + "main#main .c3-costs .k{display:block;color:var(--muted);font-size:1rem;line-height:1.25}"
  + "main#main .c3-costs .v{display:block;color:var(--navy);font-weight:600;font-size:var(--read,1.0625rem);line-height:1.3;font-variant-numeric:tabular-nums}"
  + "@media (max-width:599px){main#main .c3-costs>[role=listitem]{flex:1 1 100%}}"
  + "@media (prefers-reduced-transparency:reduce){main#main .c3-costs>[role=listitem]{background:#fbf8f3}}</style>";
const costs = (id) => `<div class="c3-costs" role="list" aria-label="${N[id].name}: what a home costs">` + [
  ["dollar", id === "golf-and-yacht-club" ? "Older part usually sold for" : "Usually sold for", `About ${pr(id)}`],
  ["home", "HOA fee", `About $${FEE[id]} a month`],
  ["tax", "Fee and tax a year", `About ${yr(id)}`],
].map(([ic, k, v]) => `<div role="listitem"><span class="i">${PK.icon(ic, { size: 20 })}</span><span><span class="k">${k}</span><span class="v">${v}</span></span></div>`).join("") + "</div>";

/* ItemList JSON-LD for the twelve numbered entries. */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The most affordable neighborhoods near Myrtle Beach", numberOfItems: P.length,
  itemListElement: P.map((p) => ({ "@type": "ListItem", position: p.n, name: p.name, url: `https://chapter3realty.com${SELF}#${p.id}` })) })}</script>`;

module.exports = G.page({
  theme: "glass",
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  pageImages: () => ph.pageImages(),
  title: "Most Affordable Places to Buy Near Myrtle Beach | Chapter3",
  description: "Twelve neighborhoods near Myrtle Beach where homes sell for the least, and what living in each one gives you: the beach, golf, parks, new homes and the drive.",
  ogTitle: "The most affordable neighborhoods near Myrtle Beach, and the best thing about each",
  crumb: "Affordable places",
  eyebrow: "Buying on a budget",
  h1: "Where are the most affordable places to buy a home near Myrtle Beach?",
  h1em: "Twelve neighborhoods, and the best thing about each.",
  sub: `Affordable neighborhoods where homes usually sold for about ${pr("parkview")} to ${pr("polo-farms")}, all within about 20 minutes of a beach.`,
  toc: false,
  heroCta: { title: "Book a showing in these neighborhoods.", label: OFFER, href: CONTACT,
    text: "Tell us the places you like and your price range. An agent will send you the homes for sale and set up the showings." },
  author: "devin",
  shortAnswer: [
    `Near Myrtle Beach, homes cost the least in the twelve neighborhoods below. Homes in them usually sold for about ${pr("parkview")} to ${pr("polo-farms")} last year, against about ${money(MB_HOUSE)} for a Myrtle Beach home that is not a condo.`,
    "That money still buys a good life. Parkview is a four-minute drive from the beach, Villas at Sandridge is five minutes from a 162-acre park, and Birchwood's new houses are on a quarter acre.",
  ],
  sections: [
    { h2: "What does each neighborhood do best?", toc: "The twelve at a glance", id: "compare", html: () =>
      PHOTO_CSS + PHONE_CSS + COSTS_CSS + GUIDE },

    entry("parkview", "a four-minute beach drive, across from the city's golf course", () =>
      h.p("Parkview has the shortest beach drive on this list, a four-minute trip. Its gated townhomes are off 17th Avenue South, inside the city of Myrtle Beach, around ponds and a pool for owners.") +
      PH["parkview"] +
      h.p(`Across the road is Whispering Pines, the ${h.ext(WPINES, "city's own 18-hole golf course")}. It was originally part of the Myrtle Beach Air Force Base, and its tee markers feature the squadron emblems. Locals play a round there for $45.`) +
      h.p(`The rest of the ${h.ext(BASE, "old base is now The Market Common")}, a ten-minute trip by car. It has shops, restaurants and a 14-screen movie theater, and Grand Park's trails are next door. The airport terminal is a six-minute drive.`) +
      h.p("The HOA fee covers water, sewer, the grounds and the pool. The trade-off is choice: few of these townhomes come up for sale in a year, so we watch for each new listing.") +
      costs("parkview")),

    entry("fairways-at-wild-wing", "a golf community by the hospital and two colleges", () =>
      h.p("Conway Medical Center is a six-minute drive from the Fairways. Horry-Georgetown Technical College is a seven-minute trip, and Coastal Carolina University an eight-minute one.") +
      PH["fairways-at-wild-wing"] +
      h.p("The townhomes are off Wild Wing Boulevard, inside Wild Wing Plantation on US 501. Wild Wing was once a golf resort with several courses. Three of them closed in 2004, and one later reopened with nine holes.") +
      h.p("The one that stayed whole is the Avocet, by Larry Nelson and Jeff Brauer. It has a double green and a double fairway, and Golf Digest gave it four stars in its Places to Play ratings. Some Fairways townhomes are near it.") +
      h.p("The HOA fee includes internet, and usually water and sewer. An Aldi is a three-minute trip up Wild Wing Boulevard.") +
      h.p("The trade-off is tax. The Fairways is inside Conway's city limits, so its yearly tax is higher than outside a town.") +
      costs("fairways-at-wild-wing")),

    entry("sawgrass-east", "a pool and clubhouse in Carolina Forest", () =>
      h.p(`${h.ext(LOB, "Lewis Ocean Bay Heritage Preserve")} is about 15 minutes up International Drive from Sawgrass East. It holds the largest group of Carolina bays in the state, oval wetlands found along this coast, and South Carolina's largest wild population of Venus flytraps.`) +
      PH["sawgrass-east"] +
      h.p("The townhomes are off Carolina Forest Boulevard, a little over two miles up the boulevard from US 501. They are around small ponds, with a pool and a clubhouse, and most have about 1,300 to 1,600 square feet.") +
      h.p(`The county's ${h.ext(CFRC, "Carolina Forest Recreation Center")}, with a gym, a fitness room and a climbing wall, is a six-minute drive. The county library shares its campus.`) +
      h.p("The HOA fee is higher than at most places here, though it usually includes water and sewer. For a buyer who would pay those bills anyway, the gap is smaller than it looks.") +
      h.p("Resales here went for less than the new townhomes at Victory Point, a ten-minute trip.") +
      costs("sawgrass-east")),

    entry("birchwood", "a new house on a quarter acre", () =>
      h.p("Birchwood's houses are brand new, on lots of about a quarter acre. Lennar's houses here come with granite counters, stainless steel appliances, 9-foot ceilings downstairs and energy-efficient windows.") +
      PH["birchwood"] +
      h.p(`${h.ext(LENNAR_WARRANTY, "Lennar's warranty")} covers the workmanship for a year, the wiring, plumbing and heating for two, and the structure for ten. High-speed internet is included in the monthly dues.`) +
      h.p("Birchwood is off SC 905, southwest of Longs, and the turn is beside the tall water tower. It has only 77 lots, with about 12 acres of open space. Long Bay Club, a golf course designed by Jack Nicklaus, is a seven-minute trip.") +
      h.p(`The trade-off is the distance to Myrtle Beach: Coastal Grand Mall is about ${mins(N.birchwood.mb)} minutes away, by SC 9 and the Carolina Bays Parkway. North Myrtle Beach is about 20.`) +
      costs("birchwood")),

    entry("golf-and-yacht-club", "a gated community near a waterway boat ramp", () =>
      h.p("Enterprise Landing, a public boat ramp off Bay Road onto the Intracoastal Waterway, is about a seven-minute drive from the Golf and Yacht Club.") +
      PH["golf-and-yacht-club"] +
      h.p(`The community once had its own golf course, ${h.ext(HERON, "Heron Point, which closed in 2014")}. Inside the gate today, owners have a pool and hot tub, tennis courts, a pavilion and a community center.`) +
      h.p(`The ${h.ext(MBGYC, "HOA")} keeps a watch desk at the gatehouse around the clock. In season, the pool opens each morning for lap swimming, then exercise, then open swim until dark. Our ${h.a("/buyers/gated-communities/", "guide to gated communities")} covers the gate.`) +
      h.p("In the older part, houses typically have about 1,350 square feet, on about an eighth of an acre. D.R. Horton's newer houses at Sandpiper Place, inside the community, went for about $330,000.") +
      h.p(`Age matters here. Insurers may require an older home to have an updated roof, wiring, plumbing and heating, so we have the home inspector look at each before you buy. See our ${h.a("/buyers/coastal-insurance/", "guide to home insurance near the coast")}.`) +
      costs("golf-and-yacht-club")),

    entry("forestbrook-village", "new townhomes near two schools", () =>
      h.p("Forestbrook Elementary and Forestbrook Middle are each four to five minutes from Forestbrook Village by car.") +
      PH["forestbrook-village"] +
      h.p("Lennar is building the townhomes off Forestbrook Road, south of US 501, next to the older Forestbrook neighborhood. They have about 1,450 to 2,400 square feet, and owners have a pool and a playground. Internet and grounds care are included.") +
      h.p(`For a night out, Broadway at the Beach is 13 minutes away, and Coastal Grand Mall ${mins(N["forestbrook-village"].mb)}.`) +
      h.p("The trade-off is flood. Some lots here are in a high-risk flood zone, where a lender usually requires flood insurance. We check the flood map for the lot of any home you like.") +
      costs("forestbrook-village")),

    entry("victory-point", "new townhomes on the old speedway", () =>
      h.p(`Victory Point is built on part of the old Myrtle Beach Speedway. The track ${h.ext(RAMBI, "opened in 1958")} as RAMBI Raceway, and cars ran their ${h.ext(SPEEDWAY, "last laps there in 2020")}. Several streets have racing names: Speedway Street, Talladega Drive and Pit Crew Drive.`) +
      PH["victory-point"] +
      h.p("Lennar built the townhomes off US 501, by Tanger Outlets. Owners share a pool, a playground, a picnic area and a pond, and some townhomes back onto the water.") +
      h.p("From here, a Publix is five minutes away, Coastal Carolina University 12 and Broadway at the Beach 15. Lennar lists Victory Point as sold out for now, so we watch for resales.") +
      h.p(`Expect more building next door. Another owner plans ${h.ext(REV3, "194 townhomes for rent")} on about 20 acres of the old speedway land beside it.`) +
      costs("victory-point")),

    entry("amber-bluff", "smart-home townhomes by Coastal Carolina University", () =>
      h.p("Coastal Carolina University and Horry-Georgetown Technical College are each a six-minute trip from Amber Bluff, and Conway Medical Center a seven-minute one. Brooks Stadium, where the Chanticleers play football, is about a mile south.") +
      PH["amber-bluff"] +
      h.p(`${h.ext(DRH, "D.R. Horton built every townhome here")}, off Savannah Bluff Road. Each came with a smart-home package for the front door lock, the thermostat and a video doorbell, plus granite counters and stainless steel appliances.`) +
      h.p("The ones we have seen for sale all share one floor plan with three bedrooms, so prices are close together. Downtown Conway and its riverwalk on the Waccamaw River are an eight-minute drive.") +
      h.p("Each owner will also pay a yearly insurance assessment that is not yet set. We find out what it will be for any home you like.") +
      costs("amber-bluff")),

    entry("villas-at-sandridge", "a seven-minute beach trip and a 162-acre park", () =>
      h.p(`The ${h.ext(NMBPARK, "North Myrtle Beach Park and Sports Complex")}, a five-minute drive, covers 162 acres, with a 25-acre lake, walking trails and two dog parks. Shark Wake Park is on the lake, where a cable pulls riders across the water on wakeboards.`) +
      PH["villas-at-sandridge"] +
      h.p(`A ${h.ext(NMBEXP, "new section of the park")} has added 11 ball fields, ponds, trails and two more playgrounds. The nearest beach is a seven-minute trip by car.`) +
      h.p("Villas at Sandridge is a small community of 79 townhomes off SC 90 near Little River, with about 8 acres of shared open space. Dream Finders Homes built them with two stories and a one-car garage, and some plans have the main bedroom on the first floor.") +
      h.p("You give up time: Myrtle Beach is about a half-hour drive. The monthly dues are also higher than at the other new communities here.") +
      costs("villas-at-sandridge")),

    entry("indigo-grove", "new houses, with no lot in the high-risk flood zone", () =>
      h.p("Every lot in Indigo Grove is outside the high-risk flood zone, so a lender usually will not require flood insurance on a home here.") +
      PH["indigo-grove"] +
      h.p(`Lennar, which sells it as The Overlook, built most of it in the past year. ${h.ext(OVERLOOK, "Lennar lists nine floor plans")}, with three to five bedrooms and some one-story plans, on lots of about a fifth of an acre.`) +
      h.p("Griffin's IGA, a grocery store on SC 90, is three minutes away. The neighborhood's association owns about 22 acres of open space, and trash pickup is included. The North Myrtle Beach Park and Sports Complex is 11 minutes away.") +
      h.p(`North Myrtle Beach is about 12 minutes away by car. The trade-off is Myrtle Beach itself: Coastal Grand Mall is about ${mins(N["indigo-grove"].mb)} minutes away.`) +
      costs("indigo-grove")),

    entry("wynbrooke", "five minutes from the Murrells Inlet MarshWalk", () =>
      h.p(`The ${h.ext(MARSHWALK, "Murrells Inlet MarshWalk")} is five minutes from Wynbrooke. It is a half-mile boardwalk along the marsh, lined with restaurants, with live music every night and no cover charge.`) +
      PH["wynbrooke"] +
      h.p(`${h.ext(HBSP, "Huntington Beach State Park")}, with 3 miles of beach and a lake where you can see alligators, is 10 minutes away, and Brookgreen Gardens about 15. The nearest public beach, in Garden City, is about ${mins(N.wynbrooke.beach)} minutes by car.`) +
      h.p("The townhomes are off SC 707, around ponds, and some back onto the water. A Lowes Foods and a Publix are each about two minutes away.") +
      h.p("The trade-off is the fee. Wynbrooke's HOA fee is the highest of the twelve. It usually includes water, sewer and the insurance on the buildings, but with the tax, a year here costs more than at Polo Farms, which sells for more.") +
      costs("wynbrooke")),

    entry("polo-farms", "one-story houses with a $20 fee", () =>
      h.p("Polo Farms has the smallest HOA fee on this list, about $20 a month, for one-story houses on lots of about a fifth of an acre. Many backyards are fenced, and several have their own pool.") +
      PH["polo-farms"] +
      h.p("The houses are off SC 905, between SC 9 and SC 22, west of Longs, and were built in three phases. Simpson Creek runs along the neighborhood's southwest side. There is no pool or clubhouse; the common land is two ponds, some woods and the strips along SC 905.") +
      h.p(`Long Bay Club's Nicklaus course is about 13 minutes by car. Our guide to ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")} covers places with no fee at all.`) +
      h.p(`Flood is a concern here. After Hurricane Florence in 2018, the Waccamaw River rose to historic heights; ${h.ext(POLO_FLOOD, "floodwater filled the streets")} and gutted homes across the neighborhood. More than four in ten of its lots are in a high-risk flood zone. Before you make an offer, we look up the lot on FEMA's flood map.`) +
      costs("polo-farms")),

    { h2: "Where else can you look for less?", toc: "Other places to look", id: "more", html: () =>
      h.p(`The next five cost about ${money(257500)} to ${money(266237)}. They are Oak Forest and Forestbrook near Socastee, Meadows Edge off SC 544, the Reserve at Long Bay near Longs and McCormick Townhomes.`) +
      h.p("Farther inland, new houses in Collins Walk and Kingston Oaks near Conway, and in Warner Crossing near Loris, sold for less than some of the twelve. From those, the beach is 30 minutes or more away.") +
      h.p(`Our ${h.a("/submarkets/conway/", "guide to Conway")} covers the town itself. To choose by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} covers one neighborhood in depth.`) },

    { h2: "How far is each place from the beach, and which schools serve it?", toc: "Drives and schools", id: "schools", html: () =>
      h.p("The map shows where each place is, and the table gives the drive with no traffic and the zoned schools. In our experience, rush hour adds 5 to 10 minutes.") +
      COMPARE },

    { h2: "How much property tax will you pay?", toc: "Property tax", id: "property-tax", html: () =>
      h.p(`Take a $240,000 home that is your main home. Outside a town, or in Myrtle Beach, ${h.ext(LEVY, "its yearly tax")} is about $970. It is a little more in Polo Farms and Wynbrooke. Inside Conway, it is about $1,570.`) +
      h.p(`When you buy, the county values the home at about what it is worth that year, and the new value shows up on the next year's bill. These figures use the county's lower rate for a home you live in, which our ${h.a("/buyers/property-taxes/", "property tax guide")} explains.`) },

    { h2: "What help can you get with a down payment?", toc: "Down payment help", id: "down-payment", html: (bg) =>
      h.p(`SC Housing, the state's housing agency, gives buyers in Horry and Georgetown counties $10,000 toward the down payment and closing costs. It is forgivable: you do not pay it back if you stay in the home long enough. The program is called the ${h.ext(SCH, "Homebuyer Program")}.`) +
      h.p("You do not have to be a first-time buyer, but you must not own a home when you close. Household income must be under about $115,000 for one or two people, and under about $134,000 for three or more. The home price can be up to $450,000.") +
      h.p(`You apply through a lender that works with SC Housing. Our page on ${h.a("/buyers/programs/", "down-payment help programs")} explains the Homebuyer Program step by step, including the credit score it needs.`) +
      story([
        "<strong>Example:</strong> Dana rents an apartment in Myrtle Beach and wants a house of her own in Conway. She thinks she must save for years before she can buy.",
        "Her Chapter3 agent shows her SC Housing's Homebuyer Program, which helps buyers here pay the down payment. The agent puts her in touch with a lender that works with the program.",
        "Dana takes the homebuyer class and starts looking at houses, instead of saving for years first.",
      ], "", bg) },
  ],
  faqTitle: "Affordable places near Myrtle Beach: FAQ",
  faq: [
    { q: "What is the cheapest neighborhood to buy a home near Myrtle Beach?", a: `Of the neighborhoods within about 20 minutes of the beach where at least 10 homes sold in the past year, Parkview had the lowest prices. Its older townhomes usually sold for about ${pr("parkview")}. Parkview is a group of townhomes off 17th Avenue South, inside the city of Myrtle Beach.` },
    { q: "Where can you buy a new house near Myrtle Beach for less?", a: `In Birchwood, off SC 905 near Longs, new Lennar houses usually sold for about ${pr("birchwood")} in the past year. In Indigo Grove, off SC 90, they usually sold for about ${pr("indigo-grove")}.` },
    { q: "Is it cheaper to buy in Conway than in Myrtle Beach?", a: `Yes. A home that resold in Conway in the past year usually went for about ${money(264250)}. In the city of Myrtle Beach, a home usually went for about ${money(MB_HOUSE)}. Inside the city limits, Conway's property tax is higher.` },
    { q: "Which affordable neighborhood is closest to the beach?", a: `Parkview, a townhome community off 17th Avenue South in Myrtle Beach, is about ${mins(N.parkview.beach)} minutes by car from a public beach access. Its older townhomes usually sold for about ${pr("parkview")} in the past year.` },
    { q: "Do you have to be a first-time buyer to get down-payment help?", a: `No, not in Horry or Georgetown County. For SC Housing's Homebuyer Program, you must not own a home when you close. Palmetto Home Advantage, another SC Housing down-payment program, is open to repeat buyers too. Our page on down-payment help programs covers both.` },
  ],
  sources: [
    { name: "county deeds", href: DEEDS },
    { name: "county parcels", href: PARCELS },
    { name: "county tax rates", href: LEVY },
    { name: "OpenStreetMap drive times", href: OSRM },
    { name: "SC Housing", href: SCH },
    { name: "SC Department of Natural Resources", href: LOB },
    { name: "City of Myrtle Beach", href: WPINES },
    { name: "Lennar", href: OVERLOOK },
  ],
  sourcesNote: "Not legal, tax or loan advice. Prices: the middle recorded sale, October 2025 to September 2026, without condos, manufactured homes or multi-lot deeds. Drives from the middle of each place, no traffic. Homes from listings and builders; schools from zones. Yearly tax for a home you live in, before the break at 65.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Book a showing in the neighborhood you liked.", p: "Tell us your price range and the places you like. One of our agents will send you the homes for sale there, set up the showings, and find the down-payment programs that fit.", label: OFFER, href: CONTACT },
  keywords: "most affordable places to live near Myrtle Beach, cheapest neighborhoods Myrtle Beach, affordable townhomes Myrtle Beach, cheap homes near Myrtle Beach, new homes under 250000 Myrtle Beach, Parkview Myrtle Beach, Wild Wing Plantation townhomes, Victory Point Myrtle Beach, Forestbrook Village, Villas at Sandridge, Birchwood Longs SC, Indigo Grove Longs",
  about: "The most affordable neighborhoods to buy a home near Myrtle Beach, South Carolina, by recorded sale price: Parkview, the Fairways at Wild Wing Plantation, Sawgrass East, Birchwood, Myrtle Beach Golf and Yacht Club, Forestbrook Village, Victory Point, the Townes at Amber Bluff, Villas at Sandridge, Indigo Grove, Wynbrooke and Polo Farms",
});
