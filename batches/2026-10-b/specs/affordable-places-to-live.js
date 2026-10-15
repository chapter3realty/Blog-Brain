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
 *   Club's lost course and its HOA, the North Myrtle Beach park and wake park near Villas at Sandridge, the MarshWalk
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
const WILDWING = "https://www.wildwing.com/";
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
    feature: "beach 4 min, city golf course", schools: "Myrtle Beach Elementary, Middle and High" },
  { id: "fairways-at-wild-wing", name: "The Fairways at Wild Wing", map: "Fairways at Wild Wing", lat: 33.787649, lon: -78.986234, price: 215000, mb: 16.5, beach: 17.8, year: 6100,
    feature: "own garage, golf community", schools: "Carolina Forest Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "sawgrass-east", name: "Sawgrass East", map: "Sawgrass East", lat: 33.756167, lon: -78.929975, price: 222500, mb: 16.7, beach: 17.9, year: 6000,
    feature: "own garage, pool and clubhouse", schools: "Ten Oaks Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "birchwood", name: "Birchwood", map: "Birchwood", lat: 33.925885, lon: -78.754012, price: 223825, mb: 41.6, beach: 20.2, year: 2400,
    feature: "new house on a quarter acre", schools: "Daisy Elementary, Loris Middle, Loris High" },
  { id: "golf-and-yacht-club", name: "Myrtle Beach Golf and Yacht Club", chart: "Golf and Yacht Club (older part)", map: "Golf and Yacht Club", lat: 33.649402, lon: -79.05007, price: 225000, mb: 22.9, beach: 15.0, year: 2100,
    feature: "one-story house behind a gate", schools: "St. James Elementary, Intermediate, Middle and High" },
  { id: "forestbrook-village", name: "Forestbrook Village", map: "Forestbrook Village", lat: 33.714649, lon: -78.966818, price: 232310, mb: 11.3, beach: 12.6, year: 3000,
    feature: "biggest new townhomes here", schools: "Forestbrook Elementary, Forestbrook Middle, Socastee High" },
  { id: "victory-point", name: "Victory Point", map: "Victory Point", lat: 33.7454, lon: -78.951801, price: 235630, mb: 12.7, beach: 13.9, year: 3800,
    feature: "on part of the old speedway", schools: "Pine Island Elementary, Ten Oaks Middle, Carolina Forest High" },
  { id: "amber-bluff", name: "The Townes at Amber Bluff", map: "Amber Bluff", lat: 33.810207, lon: -79.021249, price: 237500, mb: 19.3, beach: 20.6, year: 2200,
    feature: "smart-home townhome, new", schools: "Waccamaw Elementary, Black Water Middle, Carolina Forest High" },
  { id: "villas-at-sandridge", name: "Villas at Sandridge", map: "Villas at Sandridge", lat: 33.852846, lon: -78.696635, price: 245000, mb: 29.3, beach: 7.46, year: 4600,
    feature: "beach 7 min, wake park 5 min", schools: "Waterway Elementary, North Myrtle Beach Middle and High" },
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

/* The selection guide: the glass price chart, each place's best feature beside its price (row 212, 222). The
   gray Myrtle Beach bar comes first, so the point is clear before the list: these cost about half. Compact rows
   (glass.js bars o.compact), so the first place starts sooner on a phone (owner's eye 14, H1). */
const GUIDE = G.bars([{ name: "A Myrtle Beach home: these cost about half", value: MB_HOUSE, valueText: money(MB_HOUSE), reference: true }]
  .concat(P.map((p) => ({ name: `${p.n}. ${p.chart || p.name}`, value: p.price, valueText: money(p.price), feature: p.feature, href: A(p.id) }))), {
  caption: "What homes usually sold for, and the best thing about each place",
  note: "Tap a name to read about the place. Prices are the middle recorded sale in the past year, condos left out.",
  max: MB_HOUSE, featureLabel: "best feature", valueLabel: "Usually sold for", compact: true,
});

/* One map after the entries, the twelve numbered as on the page, with no key: the table under it names them. */
const placeOf = (p) => ({ name: p.map, lat: p.lat, lon: p.lon, href: A(p.id) });
const MAP = placesMap("Affordable neighborhoods near Myrtle Beach", P.map(placeOf), {
  caption: "Map of the twelve neighborhoods, numbered as on this page.",
});
MAP.html = MAP.html.replace(/<ol[\s\S]*?<\/ol>/g, "");

/* After the entries, one figure: the map, then the table a comparer uses: the HOA fee and tax a year (row 169),
   the drive to a beach (rows 164, 185) and the zoned schools (row 165). The water and sewer note is said here
   once (rows 129 to 131, 136), not in each entry. */
const FEE = { "parkview": 325, "fairways-at-wild-wing": 390, "sawgrass-east": 425, "birchwood": 120, "golf-and-yacht-club": 95,
  "forestbrook-village": 170, "victory-point": 235, "amber-bluff": 100, "villas-at-sandridge": 300, "indigo-grove": 80, "wynbrooke": 450, "polo-farms": 20 };
const COMPARE_CSS = "<style>.c3-cmp{margin:1.2rem 0 1.6rem;max-width:900px}.c3-cmp .t{overflow-x:auto}.c3-cmp table{width:100%;border-collapse:collapse;font-size:.98rem;line-height:1.4}"
  + ".c3-cmp caption{caption-side:top;text-align:left;color:var(--navy);font-weight:600;padding:0 0 .6rem}"
  + ".c3-cmp th,.c3-cmp td{text-align:left;padding:.45rem .8rem .45rem 0;border-top:1px solid var(--line,#e3ddd0);vertical-align:top}"
  + ".c3-cmp thead th{border-top:0;color:var(--navy)}.c3-cmp td{color:var(--muted)}.c3-cmp tbody th{color:var(--navy);font-weight:500}"
  + ".c3-cmp th a{color:var(--navy)}@media (max-width:599px){.c3-cmp table{font-size:.92rem}}</style>";
const COMPARE = COMPARE_CSS + `<figure class="c3-cmp">` + MAP.html
  + `<div class="t"><table><caption>The HOA fee and tax a year, the drive to a beach, and the zoned schools</caption>`
  + `<thead><tr><th scope="col">Place</th><th scope="col">HOA fee and tax a year</th><th scope="col">To a beach</th><th scope="col">Schools (district zones)</th></tr></thead><tbody>`
  + P.map((p) => `<tr><th scope="row"><a href="${A(p.id)}">${p.n}. ${p.map}</a></th><td>About ${yr(p.id)}</td><td>About ${mins(p.beach)} min</td><td>${p.schools}</td></tr>`).join("")
  + "</tbody></table></div><figcaption>The fee and tax are for a year, besides the mortgage and insurance, for a home you live in. The HOA fee includes water and sewer at Parkview, and usually at the Fairways, Sawgrass East and Wynbrooke. Drives have no traffic; in our experience, rush hour adds 5 to 10 minutes.</figcaption></figure>";

/* Labelled aerials (USDA NAIP 2023, public domain; Chapter3's labels), one per place. */
const ph = photoSet({ aerialWidth: "720px" });
const PHOTO_CSS = ph.css();
const PH = {
  "parkview": ph.aerial("parkview-and-whispering-pines-from-above", "Parkview, beside 17th Avenue South, with Whispering Pines Golf Course, from above.", { closeUp: true }),
  "fairways-at-wild-wing": ph.aerial("fairways-at-wild-wing-and-us-501-from-above", "The Fairways at Wild Wing, with the Aldi and Walmart near US 501, from above.", { closeUp: true }),
  "sawgrass-east": ph.aerial("sawgrass-east-and-carolina-forest-boulevard-from-above", "Sawgrass East, off Carolina Forest Boulevard, from above.", { closeUp: true }),
  "golf-and-yacht-club": ph.aerial("golf-and-yacht-club-and-enterprise-landing-from-above", "Myrtle Beach Golf and Yacht Club, off Bay Road, from above.", { closeUp: true }),
  "victory-point": ph.aerial("old-speedway-and-victory-point-labelled-from-above", "The old Myrtle Beach Speedway beside US 501, before Victory Point was built on part of its land."),
  "wynbrooke": ph.aerial("wynbrooke-and-sc-707-shops-from-above", "Wynbrooke, off SC 707, with Lowes Foods and Publix to the northwest.", { closeUp: true }),
  "polo-farms": ph.aerial("polo-farms-and-simpson-creek-from-above", "Polo Farms off SC 905, with Simpson Creek along its southwest side.", { closeUp: true }),
};
ph.share("old-speedway-and-victory-point-labelled-from-above");

/* One numbered entry. It ends with the place's own offer box (CRAFT 3, "Every place gets its own offer"): the
   price and the HOA fee in one plain sentence, then the pill, "Book a showing in X". The sentence sits in the
   offer box (div.c3-place-cta), as on the gated and best-neighborhoods pages: it is the reader's next fact
   before they act, and repeat-check reads it as the offer. The yearly fee and tax are in the table. */
const PLACE_CSS = "<style>main#main .c3-place-cta{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem 1.2rem;max-width:760px;margin:1.6rem 0 .4rem;padding:1rem 1.2rem;border-radius:20px;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none)}"
  + "main#main .c3-place-cta>p:first-child{flex:1 1 18rem;margin:0;color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.55}"
  + "main#main .c3-place-cta .c3-offer{margin:0;flex:0 1 auto}"
  + "@media (prefers-reduced-transparency:reduce){main#main .c3-place-cta{background:#fbf8f3}}</style>";
/* The price sentence for each place, written by hand so twelve offers do not read as one template. */
const PRICE = {
  "parkview": `Townhomes here usually went for about ${pr("parkview")} last year, with an HOA fee of about $325 a month.`,
  "fairways-at-wild-wing": `Expect to pay about ${pr("fairways-at-wild-wing")} for a Fairways townhome, plus an HOA fee of about $390 a month.`,
  "sawgrass-east": `A Sawgrass East townhome usually costs about ${pr("sawgrass-east")}, and the HOA fee is about $425 a month.`,
  "birchwood": `New houses in Birchwood went for about ${pr("birchwood")} last year; the HOA fee is about $120 a month.`,
  "golf-and-yacht-club": `Houses in the older part usually went for about ${pr("golf-and-yacht-club")} last year.`,
  "forestbrook-village": `Lennar's townhomes here went for about ${pr("forestbrook-village")}, with an HOA fee of about $170 a month.`,
  "victory-point": `Townhomes in Victory Point usually sold for about ${pr("victory-point")}, and the HOA fee is about $235 a month.`,
  "amber-bluff": `These townhomes went for about ${pr("amber-bluff")} last year, with an HOA fee of about $100 a month.`,
  "villas-at-sandridge": `These townhomes usually went for about ${pr("villas-at-sandridge")}, and the dues are about $300 a month.`,
  "indigo-grove": `New houses here went for about ${pr("indigo-grove")} last year, with an HOA fee of about $80 a month.`,
  "wynbrooke": `Townhomes in Wynbrooke usually went for about ${pr("wynbrooke")}, with that fee of about $450 a month.`,
  "polo-farms": `Houses in Polo Farms usually went for about ${pr("polo-farms")} last year.`,
};
const placeCta = (id) => `<div class="c3-place-cta"><p>${PRICE[id]}</p>${G.offer(N[id].name)}</div>`;
const entry = (id, short, html) => ({ h2: `${N[id].n}. ${N[id].name}: ${short}`, toc: N[id].map, id,
  html: (bg) => html(bg) + placeCta(id) });

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
  sub: "Affordable places where a budget still buys a new house, a gate, a garage or a four-minute beach drive.",
  toc: false,
  heroCta: { title: "Book a showing in these neighborhoods.", label: OFFER, href: CONTACT,
    text: "Tell us the places you like and your price range. An agent will send you the homes for sale and set up the showings." },
  author: "devin",
  shortAnswer: [
    `Near Myrtle Beach, homes cost the least in the twelve neighborhoods below. Homes in them usually sold for about ${pr("parkview")} to ${pr("polo-farms")} last year, against about ${money(MB_HOUSE)} for a Myrtle Beach home that is not a condo.`,
    "That money still buys a good life. Parkview is a four-minute drive from the beach. Villas at Sandridge is five minutes from a park with a cable wake park, and Birchwood's new houses are on a quarter acre.",
  ],
  sections: [
    { h2: "What does each neighborhood do best?", toc: "The twelve at a glance", id: "compare", html: () =>
      PHOTO_CSS + PLACE_CSS + GUIDE },

    entry("parkview", "a four-minute beach drive, by the city's golf course", () =>
      h.p("Parkview has the shortest beach drive on this list, a four-minute trip. Its gated townhomes are off 17th Avenue South, inside the city of Myrtle Beach.") +
      PH["parkview"] +
      h.p("The townhomes have two stories, two or three bedrooms and two and a half baths. The ones we have seen for sale had vaulted ceilings, a covered front porch and a screened back porch, and the three-bedroom plan puts the main bedroom downstairs.") +
      h.p(`Whispering Pines, the ${h.ext(WPINES, "city's own 18-hole golf course")}, is less than a quarter mile from Parkview. It was originally part of the Myrtle Beach Air Force Base, and its tee markers feature the squadron emblems. Residents of Horry, Georgetown and Brunswick counties play a round there for $45 plus tax, with a cart.`) +
      h.p(`The rest of the ${h.ext(BASE, "old base is now The Market Common")}, a ten-minute trip. It has shops, restaurants and a 14-screen movie theater, and the city's Grand Park, with its trails, borders it. The airport terminal is a six-minute drive.`) +
      h.p("The trade-off is choice: few of these townhomes come up for sale in a year, so we watch for each new listing.")),

    entry("fairways-at-wild-wing", "townhomes with their own garage, in a golf community", () =>
      h.p("Every Fairways townhome we found for sale had its own garage, and some had room for two cars. Most are two-story, with three or four bedrooms, and some put the main bedroom downstairs.") +
      PH["fairways-at-wild-wing"] +
      h.p("The townhomes are off Wild Wing Boulevard, inside Wild Wing Plantation on US 501. Wild Wing was once a golf resort with several courses; one is still open, and some Fairways townhomes are near it.") +
      h.p("The HOA fee includes internet, and an Aldi is a three-minute trip up Wild Wing Boulevard. For work, Conway Medical Center is a six-minute drive, and Horry-Georgetown Technical College and Coastal Carolina University are each about a seven-minute trip.") +
      h.p("The trade-off is tax. The Fairways is inside Conway's city limits, so its yearly tax is higher than outside a town.")),

    entry("sawgrass-east", "townhomes with a garage, near the county's climbing wall", () =>
      h.p(`Six minutes from Sawgrass East, the county's ${h.ext(CFRC, "Carolina Forest Recreation Center")} has a gym, a fitness room and a climbing wall, and the county library shares its campus.`) +
      PH["sawgrass-east"] +
      h.p("The townhomes are off Carolina Forest Boulevard, a little over two miles up the boulevard from US 501, around small ponds with a pool and a clubhouse.") +
      h.p("Most are three-bedroom, two-story townhomes with a one-car garage. Some put the main bedroom downstairs with a loft above, and some have a screened or covered back porch.") +
      h.p("The trade-off is the HOA fee, one of the highest on this list.")),

    entry("birchwood", "a new house on a quarter acre", () =>
      h.p("Birchwood is small: 77 new Lennar houses on lots of about a quarter acre, with about 12 acres of open space. The turn off SC 905, southwest of Longs, is beside the tall water tower.") +
      h.p(`Lennar's plans here list granite counters, stainless steel appliances, 9-foot ceilings on the first floor and energy-efficient windows. ${h.ext(LENNAR_WARRANTY, "Lennar's limited warranty")} covers the workmanship for a year, the electrical, plumbing and mechanical systems for two, and the structure for ten.`) +
      h.p("High-speed internet is included in the monthly dues. Long Bay Club, a golf course in Longs, is a seven-minute trip.") +
      h.p(`The trade-off is the distance to Myrtle Beach: Coastal Grand Mall is about ${mins(N.birchwood.mb)} minutes away, by SC 9 and the Carolina Bays Parkway.`)),

    entry("golf-and-yacht-club", "one-story houses behind a gate", () =>
      h.p("In the older part of Myrtle Beach Golf and Yacht Club, a one-story house comes with a gate and an HOA fee of about $95 a month. The HOA has a pool and hot tub, tennis courts and a community center.") +
      PH["golf-and-yacht-club"] +
      h.p("Most houses there are from the late 1980s, with two or three bedrooms and two baths. In the older part, houses typically have about 1,350 square feet, on about an eighth of an acre.") +
      h.p("Each one we saw for sale had a porch or a patio, and the HOA has a storage area for RVs and trailers.") +
      h.p("Age matters here. Insurers may require an older home to have an updated roof, wiring, plumbing and heating, so we have the home inspector look at each before you buy.")),

    entry("forestbrook-village", "the biggest new townhomes on this list", () =>
      h.p("Forestbrook Village has the biggest townhomes on this list. Lennar's plans here run from about 1,450 to 2,400 square feet, each a three-bedroom townhome over two stories.") +
      h.p("The townhomes are off Forestbrook Road, south of US 501, next to the older Forestbrook neighborhood. Owners have a pool and a playground, and internet and grounds care are included.") +
      h.p("Forestbrook Elementary and Forestbrook Middle are each four to five minutes away by car.") +
      h.p("The trade-off is flood. Some lots here are in a high-risk flood zone, where a lender usually requires flood insurance. We check the flood map for the lot of any home you like.")),

    entry("victory-point", "new townhomes on part of the old speedway", () =>
      h.p(`Victory Point is built on part of the old Myrtle Beach Speedway. The track ${h.ext(RAMBI, "opened in 1958")} as RAMBI Raceway, and cars ran their ${h.ext(SPEEDWAY, "last laps there in 2020")}. Several streets have racing names: Speedway Street, Talladega Drive and Pit Crew Drive.`) +
      PH["victory-point"] +
      h.p("Lennar built the townhomes off US 501, by Tanger Outlets. The community has a pool, a playground, a picnic area and a pond, and some townhomes back onto the water.") +
      h.p("A Publix is a five-minute trip, and Lennar lists Victory Point as sold out for now.") +
      h.p(`Expect more building. Another owner plans ${h.ext(REV3, "194 townhomes for rent")} on about 20 acres of the old speedway land beside it.`)),

    entry("amber-bluff", "smart-home townhomes a mile from the football stadium", () =>
      h.p("Every townhome at Amber Bluff came with a smart-home package: you can lock the front door, change the thermostat and answer the video doorbell from your phone.") +
      h.p(`${h.ext(DRH, "D.R. Horton built every townhome here")}, off Savannah Bluff Road, with granite counters and stainless steel appliances. The ones we have seen for sale all share one three-bedroom floor plan, so prices are close together.`) +
      h.p("On game days, Brooks Stadium, where the Chanticleers play football, is about a mile south. Coastal Carolina University and Horry-Georgetown Technical College are each a six-minute trip, and downtown Conway, with its riverwalk on the Waccamaw River, about a seven-minute drive.") +
      h.p("Each owner will also pay a yearly insurance assessment that is not yet set. We find out what it will be for any home you like.")),

    entry("villas-at-sandridge", "a seven-minute beach trip and a five-minute trip to a wake park", () =>
      h.p(`The ${h.ext(NMBPARK, "North Myrtle Beach Park and Sports Complex")}, a five-minute drive, has a lake, walking trails, two dog parks and an accessible playground. Shark Wake Park, inside the complex, pulls wakeboard riders across the water on a cable.`) +
      h.p(`The city's ${h.ext(NMBEXP, "new section of the park")} has added soccer and baseball fields, ponds, trails and two more playgrounds. The nearest beach is a seven-minute trip by car.`) +
      h.p("Villas at Sandridge is a small community of 79 townhomes off SC 90 near Little River, with about 8 acres of shared open space. Dream Finders Homes built them with two stories and a one-car garage, and some plans have the main bedroom on the first floor.") +
      h.p("You give up time: Myrtle Beach is about a half-hour drive. The monthly dues are also higher than at the other new communities here.")),

    entry("indigo-grove", "new houses, with no lot in the high-risk flood zone", () =>
      h.p("Every lot in Indigo Grove is outside the high-risk flood zone, so a lender usually will not require flood insurance on a home here.") +
      h.p(`Lennar, which sells it as The Overlook, built most of it in the past year. ${h.ext(OVERLOOK, "Lennar lists nine floor plans")}, with three to five bedrooms and some one-story plans, on lots of about a fifth of an acre.`) +
      h.p("Griffin's IGA, a grocery store on SC 90, is three minutes away. The neighborhood's association owns about 22 acres of open space, and trash pickup is included.") +
      h.p(`The nearest beach is about ${mins(N["indigo-grove"].beach)} minutes away by car. The trade-off is Myrtle Beach itself: Coastal Grand Mall is about ${mins(N["indigo-grove"].mb)} minutes away.`)),

    entry("wynbrooke", "five minutes from the Murrells Inlet MarshWalk", () =>
      h.p(`The ${h.ext(MARSHWALK, "Murrells Inlet MarshWalk")} is five minutes from Wynbrooke. It is a half-mile boardwalk along the marsh, lined with restaurants, with live music every night and no cover charge.`) +
      PH["wynbrooke"] +
      h.p(`${h.ext(HBSP, "Huntington Beach State Park")}, with 3 miles of beach and a lake where you can see alligators, is 10 minutes away, and Brookgreen Gardens about 15. The nearest public beach, in Garden City, is about ${mins(N.wynbrooke.beach)} minutes by car.`) +
      h.p("The townhomes are off SC 707, around ponds, and some back onto the water. They have two stories and a screened porch, many with a loft, and some have a one-car garage. A Lowes Foods and a Publix are each about two minutes away.") +
      h.p("The trade-off is the fee. Wynbrooke's HOA fee is the highest of the twelve, though it usually pays for the insurance on the buildings and all outside maintenance. With the tax, a year here costs more than at Polo Farms, which sells for more.")),

    entry("polo-farms", "one-story houses with a $20 fee", () =>
      h.p("Polo Farms has the smallest HOA fee on this list, about $20 a month, for one-story houses on lots of about a fifth of an acre. Many backyards are fenced, and several have their own pool.") +
      PH["polo-farms"] +
      h.p("Most are three-bedroom houses with two baths, and the ones we saw for sale had an attached two-car garage. They are off SC 905, between SC 9 and SC 22, west of Longs, and were built in three phases.") +
      h.p("Simpson Creek runs along the neighborhood's southwest side. There is no pool or clubhouse; the common land is two ponds, some woods and the strips along SC 905. Long Bay Club's golf course is a 13-minute trip.") +
      h.p(`Flood is a concern here. After Hurricane Florence in 2018, the Waccamaw River rose to historic heights; ${h.ext(POLO_FLOOD, "floodwater filled the streets")} and gutted homes across the neighborhood. More than four in ten of its lots are in a high-risk flood zone. Before you make an offer, we look up the lot on FEMA's flood map.`)),

    { h2: "How do the twelve compare on yearly cost, the beach and schools?", toc: "Cost, beach and schools", id: "schools", html: () =>
      h.p(`The map shows where each place is, and the table gives the HOA fee and tax a year, the drive to a beach and the zoned schools. To choose by what you want nearby, read our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}. For no HOA fee at all, see our guide to ${h.a("/buyers/no-hoa-homes/", "homes with no HOA")}.`) +
      COMPARE },

    { h2: "How much property tax will you pay?", toc: "Property tax", id: "property-tax", html: () =>
      h.p(`Take a $240,000 home that is your main home. Outside a town, or in Myrtle Beach, ${h.ext(LEVY, "its yearly tax")} is about $970. It is a little more in Polo Farms and Wynbrooke. Inside ${h.a("/submarkets/conway/", "Conway")}, it is about $1,570.`) +
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
