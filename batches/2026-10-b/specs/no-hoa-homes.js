/* /buyers/no-hoa-homes/ - the areas in and around Myrtle Beach where all or most homes have no HOA fee,
 * what each area gives a buyer who wants the freedom of no HOA, one line on its price, and an offer for each.
 *
 * Batch 2026-10-b, page 3.
 * Version 14, 2026-10-15: round 14, a rebuild (review/ROUND-14.md; voice/VERDICTS.md, 2026-10-14 third read:
 *   "get as many areas in and around the city circle them say all of the houses in this area have no HOA or
 *   most of them don't and then speak extensively on all of the benefits of that location ... one line about
 *   the average price ... for as many areas as possible"). The reader came for freedom: a boat, a camper or a
 *   work truck at home, a shed, land, an older street, no fee. So:
 *   - The short answer, one offer box, then one map with each of the 16 areas circled and named, and a short
 *     guide that groups them by what each does best (by feature only).
 *   - 16 numbered areas, each: how many of its homes have no HOA fee, the sell, one honest trade-off, one line
 *     on price, and its own offer to the contact form with the area named.
 *   - After the areas: the boat, camper and truck rules by town (what this reader came for), the price bands
 *     for the owner's leads (short), the FAQ.
 *   - Cut: the glance tiles, the four price-band sections before the areas, the old eight-area entries and
 *     their "With no HOA fee:" lines, the area table, the pros and cons list, the condo and fee sections
 *     (now FAQ lines).
 *   Facts: rows 115 to 131 (pending verification, round 14), built from data/no-hoa-areas.json; older verified
 *   rows as cited beside each sentence below.
 * Earlier versions (1 to 9, 2026-10-13 and 14): see git history.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Where the Blog-Brain tools are (tools/page-kit.js "Finding Blog-Brain"). */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const GL = PK.glass;
const { compareCards } = require(path.join(BB, "tools", "compare.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. */
const BATCH_DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "no-hoa-areas.json")));
if (!BATCH_DATA) throw new Error("batch 2026-10-b no-hoa-areas.json not found");
const read = (name) => JSON.parse(fs.readFileSync(path.join(BATCH_DATA, name), "utf8"));
const DATA = read("no-hoa.json");
const AREAS = read("no-hoa-areas.json");
const BANDS = read("no-hoa-bands.json").bands;
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(BATCH_DATA, "photos.json")].filter((f) => fs.existsSync(f));
const PHOTOS = [];
for (const f of PHOTO_FILES) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}
const MAP_DIR = path.join(__dirname, "..", "chapter3realty", "images", "maps");
const kit = PK.create({ h, theme: "glass", photos: PHOTOS, mapDir: MAP_DIR, mapSrc: "/images/maps" });
const { story } = kit;
const { regionMap } = require(path.join(BB, "tools", "area-map.js"));
const ph = kit.photoSet({ aerialWidth: "760px" });
/* One picture per area where we have a lawful one of the place itself (photos.json records; the photo
   partner's ground photos will replace them). Made at load time: mkpage reads pageImages first. */
const PHOTO = {
  /* Pine Lakes, Little River and Surfside lost their aerials (owner's eye 14: their point did not show);
     the photo partner's list asks for each (photo-request-abdulla.html). */
  "cherry-grove": ph.aerial("cherry-grove-canal-streets-from-above", "Houses on the Cherry Grove canals, from the air."),
  "conway": ph.aerial("conway-riverwalk-boardwalk", "The Riverwalk in downtown Conway, on the Waccamaw River.", { closeUp: true }),
  "loris": ph.aerial("loris-downtown", "Main Street in downtown Loris.", { closeUp: true }),
  "aynor": ph.aerial("aynor-country-lot", "Houses on lots of about an acre along a country road outside Aynor, from the air. The orange line is one lot.", { closeUp: true }),
};
ph.share("aynor-country-lot");

const SELF = "/buyers/no-hoa-homes/";

/* ---------------------------------------------------------------------------- */
/* The numbers, from data/no-hoa-areas.json, checked against the ledger rows       */

const A = Object.fromEntries(AREAS.areas.map((a) => [a.key, a]));
/* [key, homes with no fee, homes, median no-fee house price] as in rows 116 to 129. A data file that no
   longer gives them stops the build, so the page never shows a number the ledger does not hold. */
const WANT = [
  ["mb-downtown", 17, 20, 435000], ["mb-myrtle-heights", 4, 4, 1632500], ["mb-pine-lakes", 6, 6, 929950], ["mb-plantation-point", 7, 7, 1199000],
  ["windy-hill", 24, 40, 746450], ["crescent-beach", 34, 39, 754900],
  ["ocean-drive", 23, 41, 664450], ["cherry-grove", 52, 89, 847700], ["little-river", 8, 8, 419250], ["socastee", 11, 14, 249900],
  ["surfside", 36, 42, 939450], ["garden-city", 41, 55, 1442000], ["conway", 20, 23, 287000], ["loris", 15, 16, 319000],
  ["loris-country", 74, 82, 414100], ["aynor", 30, 45, 372000],
];
for (const [k, n, t, p] of WANT) {
  const a = A[k];
  if (!a || a.noFee !== n || a.total !== t || a.medianNoFeeHousePrice !== p) throw new Error(`${k}: the data file no longer gives the ledger's ${n} of ${t} at ${p}`);
}
const G = AREAS.guide;
if (JSON.stringify([G.builtBefore1990, G.built1990OrLater, G.notInNamedSubdivision]) !== JSON.stringify([[278, 360], [410, 2254], [446, 460]])) throw new Error("the guide counts are not the ledger's (row 130)");
/* Every comparison the copy makes, recomputed. */
const byPrice = AREAS.areas.slice().sort((x, y) => x.medianNoFeeHousePrice - y.medianNoFeeHousePrice);
if (byPrice[0].key !== "socastee" || byPrice.at(-1).key !== "mb-myrtle-heights" || byPrice.at(-2).key !== "garden-city") throw new Error("the lowest and highest prices on the list have changed");
if (!(A["mb-pine-lakes"].lotAcresMedian > 2 * A["mb-downtown"].lotAcresMedian)) throw new Error("the Pine Lakes lots are no longer twice a downtown lot");

const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
const to5k = (v) => money(Math.round(v / 5000) * 5000);
const priceOf = (k) => to5k(A[k].medianNoFeeHousePrice);
const millions = (v) => "$" + (Math.round(v / 100000) / 10).toFixed(1) + " million";
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNTED = (([y, m, d]) => `${MONTHS[m - 1]} ${d}, ${y}`)(DATA.asOf.split("-").map(Number));

/* ---------------------------------------------------------------------------- */
/* The areas, in the map's order                                                    */

const ORDER = AREAS.areas.map((a) => a.key);
const ENTRY = {
  "mb-downtown": { name: "Downtown Myrtle Beach", id: "downtown-myrtle-beach", place: "downtown Myrtle Beach" },
  "mb-myrtle-heights": { name: "Myrtle Heights", id: "myrtle-heights", place: "Myrtle Heights" },
  "mb-pine-lakes": { name: "Pine Lakes", id: "pine-lakes", place: "Pine Lakes" },
  "mb-plantation-point": { name: "Plantation Point", id: "plantation-point", place: "Plantation Point" },
  "windy-hill": { name: "Windy Hill", id: "windy-hill", place: "Windy Hill", href: "/submarkets/north-myrtle-beach/" },
  "crescent-beach": { name: "Crescent Beach", id: "crescent-beach", place: "Crescent Beach" },
  "ocean-drive": { name: "Ocean Drive", id: "ocean-drive", place: "Ocean Drive" },
  "cherry-grove": { name: "Cherry Grove", id: "cherry-grove", place: "Cherry Grove" },
  "little-river": { name: "Little River", id: "little-river", place: "Little River" },
  "socastee": { name: "Socastee", id: "socastee", place: "Socastee" },
  "surfside": { name: "Surfside Beach", id: "surfside-beach", place: "Surfside Beach" },
  "garden-city": { name: "Garden City Beach", id: "garden-city-beach", place: "Garden City Beach" },
  "conway": { name: "Conway", id: "conway", place: "Conway" },
  "loris": { name: "Loris", id: "loris", place: "Loris" },
  "loris-country": { name: "The country around Loris", id: "country-around-loris", place: "the country around Loris", short: "Around Loris", offerName: "Loris", label: "Get the homes for sale in the country around Loris" },
  "aynor": { name: "Aynor", id: "aynor", place: "Aynor" },
};
if (ORDER.length !== 16 || ORDER.some((k) => !ENTRY[k])) throw new Error("the entries do not match the data file's areas");
const num = (k) => ORDER.indexOf(k) + 1;
const go = (k, text) => `${h.a(`#${ENTRY[k].id}`, text || ENTRY[k].name)} (${num(k)})`;

/* The one map: every area circled or outlined and named (owner: "circle them"). The shapes are the data
   file's mapShapes (row 115). */
const MAP_AREAS = [];
for (const k of ORDER) for (const s of A[k].mapShapes) {
  const a = { name: s.name };
  if (s.polygon) a.polygon = s.polygon; else Object.assign(a, { lat: s.lat, lon: s.lon, radius: s.radius });
  MAP_AREAS.push(a);
}
/* The map: one figure in three panels, so every area is drawn and no number touches another on a phone
   (coordinator, round 14: "circle them"; "no number may touch another"). The first panel shows the inland
   areas and two boxes; A and B are close-ups of the coast. Each area keeps its entry number on every
   panel (area-map.js a.mark), and the guide below lists the names by number. */
const MAPNAME = { "mb-downtown": "Downtown", "little-river": "Little River", "garden-city": "Garden City" };
/* Each area's name on the map is its entry number and a short name ("8 Cherry Grove"); where the name has
   no room, the tool shows the number alone (a.mark). */
const areaOf = (k) => { const a = A[k], s = a.mapShapes[0], o = { name: `${num(k)} ${MAPNAME[k] || s.name}`, mark: String(num(k)) };
  if (s.polygon) o.polygon = s.polygon; else Object.assign(o, { lat: s.lat, lon: s.lon, radius: s.radius });
  /* The country around Loris holds the Loris circle; its number goes in its west part, off the town's. */
  if (k === "loris-country") o.markAt = { lat: 34.03, lon: -78.98 };
  return o; };
const PANEL = {
  south: ["mb-downtown", "mb-myrtle-heights", "mb-pine-lakes", "mb-plantation-point", "socastee", "surfside", "garden-city"],
  north: ["windy-hill", "crescent-beach", "ocean-drive", "cherry-grove", "little-river"],
  inland: ["conway", "loris", "loris-country", "aynor"],
};
if (Object.values(PANEL).flat().sort().join() !== ORDER.slice().sort().join()) throw new Error("every area is on exactly one map panel");
const MAP = (() => {
  const draw = (name, areas, more = {}) => {
    const m = regionMap(Object.assign({ name, areas }, more), { dir: MAP_DIR, src: "/images/maps", glass: true });
    const mk = m.boxes.filter((b) => b.kind === "marker" || b.kind === "label");
    for (let i = 0; i < mk.length; i++) for (let j = i + 1; j < mk.length; j++) { const a = mk[i], b = mk[j];
      if (!(a.x1 + 1 < b.x0 || b.x1 + 1 < a.x0 || a.y1 + 1 < b.y0 || b.y1 + 1 < a.y0)) throw new Error(`${name}: two area names or numbers touch: ${a.owner} ${b.owner}`); }
    return m;
  };
  const south = draw("Homes with no HOA, coast close-up A", PANEL.south.map(areaOf), { maxRatio: 0.95 });
  const north = draw("Homes with no HOA, coast close-up B", PANEL.north.map(areaOf));
  const box = (name, mark, f) => ({ name, mark, polygon: [[f.west, f.south], [f.east, f.south], [f.east, f.north], [f.west, f.north]] });
  /* The whole area carries four inland areas and two boxes: a wide, short frame (area-map.js maxRatio). */
  const inland = draw("Homes with no HOA around Myrtle Beach", PANEL.inland.map(areaOf).concat([box("Close-up A", "A", south.frame), box("Close-up B", "B", north.frame)]), { maxRatio: 0.8 });
  const panel = (m, label) => `<div class="c3-nh-panel"><p class="c3-nh-label">${label}</p>${m.html}</div>`;
  const css = "<style>.c3-nh-maps{display:grid;gap:.9rem}.c3-nh-panel img,.c3-nh-panel svg{display:block;width:100%;height:auto}"
    + ".c3-nh-label{font-family:var(--sans);font-size:.95rem;font-weight:600;color:var(--navy);margin:0 0 .35rem!important}"
    + "@media (min-width:900px){.c3-nh-maps{grid-template-columns:repeat(3,1fr);align-items:start}}"
    + ".c3-areamap figure{max-width:1136px!important}</style>";
  return css + `<div class="c3-areamap">` + PK.mapFigure(h, `<div class="c3-nh-maps">${panel(inland, "The whole area")}${panel(south, "A. Myrtle Beach to Garden City")}${panel(north, "B. North Myrtle Beach")}</div>`,
    "Map of the areas where most homes have no HOA fee, numbered as in the list below. A and B are close-ups of the coast.", inland.credit, "no-hoa map") + `</div>`;
})();

/* The offer at the end of each area (CRAFT 3, "Every place gets its own offer"): the glass theme's pill,
   linked to the contact form with the area named. */
const offer = (k) => GL.offer(ENTRY[k].offerName || ENTRY[k].place, { label: ENTRY[k].label || `Get the homes for sale in ${ENTRY[k].place}`,
  href: `/contact/?place=${encodeURIComponent(ENTRY[k].place)}` });

/* One numbered area: the share first, the sell, the trade-off, one line on price, the offer. */
/* The share of homes for sale with no HOA fee, in a chip under each heading (owner's eye 14, medium 2), so
   the first sentence can sell. Words from the measured share (rows 116 to 130). The country around Loris
   says "most": its map outline holds more fee houses than its MLS areas (row 129). */
const shareWords = (k) => { const a = A[k], p = a.noFee / a.total;
  /* "Almost all" needs 90% or more (v6, D11 and D34). The country around Loris says "most": its map
     outline holds more fee houses than its MLS areas (row 129). */
  if (k === "loris-country") return "most homes for sale";
  return p === 1 ? "every home for sale" : p >= 0.9 ? "almost all homes for sale" : p >= 0.85 ? "nearly 9 in 10 homes for sale"
    : p >= 0.6 ? "most homes for sale" : "more than half the homes for sale"; };
/* One line on price, in the chip under the heading (the owner: "one line about the average price"). Cherry
   Grove and Surfside give the recorded sales price of houses, as the best neighborhoods page does
   (neighborhoods-facts.md rows 94 and 136); every other area gives the typical asking price of its houses
   listed with no fee (data/no-hoa-areas.json). */
const SOLD = { "cherry-grove": 695000, "surfside": 705000 };
const priceWords = (k) => SOLD[k] ? `Houses usually sell for about ${money(SOLD[k])}`
  : `Houses list for about ${A[k].medianNoFeeHousePrice >= 1e6 ? millions(A[k].medianNoFeeHousePrice) : priceOf(k)}`;
const CHIP_CSS = "<style>.c3-nh-chips{display:flex;flex-wrap:wrap;gap:.45rem;margin:-.2rem 0 1rem}.c3-nh-chip{display:inline-block;padding:.3rem .8rem;border-radius:999px;font-family:var(--sans);font-size:.95rem;font-weight:600;color:var(--navy);background:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.9);box-shadow:0 6px 18px -10px rgba(28,32,40,.35)}</style>";
const chip = (k) => `<div class="c3-nh-chips"><span class="c3-nh-chip">Listed with no HOA fee: ${shareWords(k)}</span><span class="c3-nh-chip">${priceWords(k)}</span></div>`;
function entry(k, headline, paras) {
  const n = num(k);
  return { h2: `${n}. ${ENTRY[k].name}: ${headline}`, toc: `${n}. ${ENTRY[k].short || ENTRY[k].name}`, id: ENTRY[k].id,
    html: () => chip(k) + h.p(paras[0]) + (PHOTO[k] || "") + paras.slice(1).map((t) => h.p(t)).join("") + offer(k) };
}

/* Sources. */
const NPS_MH = "https://npgallery.nps.gov/AssetDetail/NRIS/96001217";
const MB_SWASH = "https://www.cityofmyrtlebeach.com/i_want_to/find/photos_of_the_week/pow040618.php";
const MB_DEPOT = "https://www.cityofmyrtlebeach.com/i_want_to/find/myrtle_beach_train_depot.php";
const PL_SHPO = "https://schpr.sc.gov/index.php/Detail/objects/S10817726017";
const NMB_ACCESS = "https://parks.nmb.us/339/Beach-Accesses-Amenities";
const NMB_YOW = "https://nmb.us/496/Yow-Park";
const SALT_LANDINGS = "https://www.saltwaterfishing.sc.gov/boatlandings.html";
const HC_BEACH = "https://horrycountysc.gov/departments/parksandrecreation/beach-accesses/";
const HB_PARK = "https://southcarolinaparks.com/huntington-beach";
const WACCAMAW_PRESERVE = "https://sctrails.net/trails/trail/waccamaw-river-heritage-preserve-canoe";
const MB_BOARDWALK = "https://cityofmyrtlebeach.com/news_detail_T6_R986.php";
const PINE_LAKES = "https://pinelakes.com/about-pine-lakes-country-club/";
const NMB_RAMP = "https://nmb.us/490/Cherry-Grove-Park-and-Boat-Ramp";
const INGRAM = "https://nmb.us/783/Ingram-Dunes-Nature-Preserve";
const CANALS = "https://www.myhorrynews.com/news/local/north_myrtle_beach/residents-still-paying-for-cherry-grove-dredge/article_1eb5bb32-3b9a-11e9-93e7-9f8ad503b643.html";
const SHAG_LAW = "https://www.scstatehouse.gov/code/t01c001.php";
const LR_FISHING = "https://www.saltwaterfishing.sc.gov/pdf/littleriverpart1.pdf";
const BLUE_CRAB = "https://www.bluecrabfestival.org/";
const LANDINGS = "https://www.horrycountysc.gov/departments/parksandrecreation/boat-landings/";
const HC_PARKS = "https://www.horrycountysc.gov/departments/parksandrecreation/parks/";
const SWING = "https://projectportal.scdot.gov/sc-historic-bridges/s-616-bridge-over-intercoastal-waterway-horry-county";
const SURF_PIER = "https://www.surfsidebeach.org/212/Surfside-Beach-Fishing-Pier";
const SCE = "https://www.scencyclopedia.org/sce/entries/";
const CONWAY_OAKS = "http://www.conwaysc.gov/news_detail_T6_R144.php";
const CITY_HALL = "https://schpr.sc.gov/index.php/Detail/objects/S10817726018";
const LORIS_CITY = "https://cityoflorissc.com/about-us";
const HOEDOWN_LAW = "https://www.scstatehouse.gov/code/t53c003.php";
const HORRY_927 = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_APXBZO_ARTIXCOUS_S927HOOC";
const HORRY_CODE = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_CH13OFMIPR_ARTIINGE_S13-12PRPA";
const CLOSING = "https://www.sccourts.org/media/opinions/HTMLFiles/SC/25508.htm";
const SWA = "https://www.solidwasteauthority.org/residential.html";
const CONDO_LAW = "https://www.scstatehouse.gov/code/t27c031.php";
const MUNI = "https://library.municode.com/sc/";

/* The parking rules, place by place (ledger rows 58 to 64, as verified). */
const parkingTable = () => compareCards([
  { name: "Outside the towns", icon: "home", cells: { boat: "No county rule on where", truck: "Two per acre for a home business" } },
  { name: "Inside Myrtle Beach", href: "/submarkets/myrtle-beach/", icon: "town", cells: { boat: "Over 16 feet: not in the front yard", truck: "One work vehicle; none over one ton" } },
  { name: "Inside North Myrtle Beach", href: "/submarkets/north-myrtle-beach/", icon: "town", cells: { boat: "Behind the house front, or a carport", truck: "None over 18,500 pounds" } },
  { name: "Inside Conway", href: "/submarkets/conway/", icon: "town", cells: { boat: "Side yard, back yard or carport", truck: "Big business trucks: not on city streets" } },
  { name: "Inside Surfside Beach", href: "/submarkets/surfside-beach/", icon: "town", cells: { boat: "Two boats or trailers (not in a garage)", truck: "Up to 21 feet long, about 8 feet high" } },
  { name: "Inside Loris", icon: "town", cells: { boat: "Over 17 feet: not near the lot's edges", truck: "One work vehicle, up to 2 tons" } },
], [
  { key: "boat", label: "A boat, camper or trailer" },
  { key: "truck", label: "A work truck at home" },
], { caption: "Where you can keep a boat or a work truck at a house", nameLabel: "Where the home is" });

/* The price bands, for the reader who starts from a budget (rows 82 to 85, verified). */
const BAND = Object.fromEntries(BANDS.map((b) => [b.band, b]));
const bandTable = () => compareCards([
  { name: "Under $250,000", cells: { n: `About ${Math.round(BAND["under 250k"].houses / 10) * 10}`, where: "Older houses in Conway and Socastee" } },
  { name: "$250,000 to $500,000", cells: { n: `About ${Math.round(BAND["250k-500k"].houses / 10) * 10}`, where: "New houses around Loris, Aynor, Conway" } },
  { name: "$500,000 to $750,000", cells: { n: `About ${Math.round(BAND["500k-750k"].houses / 10) * 10}`, where: "Older beach houses, North Myrtle Beach" } },
  { name: "$750,000 and up", cells: { n: `About ${Math.round(BAND["750k+"].houses / 10) * 10}`, where: "Near the ocean; Pine Lakes" } },
], [
  { key: "n", label: "Houses for sale", num: true },
  { key: "where", label: "What and where" },
], { caption: "Houses for sale with no HOA fee, by price", nameLabel: "Price" });

/* The example (rows 59, 64 and 68; the services Chapter3 records: stories.json "hoa-rental-bans-filtered"). */
const STORY = [
  "<strong>Example:</strong> Teresa wants a home with no HOA and room for her 20-foot boat. She likes a house on a small lot with a Myrtle Beach address.",
  "Her Chapter3 agent finds the house on the county map, inside the city of Myrtle Beach. In the city, a boat that long may not be kept in the front yard, and that lot has no other room for it.",
  "The agent shows her houses outside the city limits, where the county has no rule on where she parks the boat. Teresa makes an offer on one with a wide side yard.",
];

/* ItemList JSON-LD for the 16 areas. */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "Areas around Myrtle Beach where all or most homes for sale have no HOA fee", numberOfItems: ORDER.length,
  itemListElement: ORDER.map((k, i) => ({ "@type": "ListItem", position: i + 1, name: ENTRY[k].name, url: `https://chapter3realty.com${SELF}#${ENTRY[k].id}` })) })}</script>`;

const LABEL = "Get the list";

/* ---------------------------------------------------------------------------- */

module.exports = GL.page({
  theme: "glass",
  /* No "On this page" list: the guide under the map does that job (coordinator, round 14). */
  toc: false,
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Aynor lot aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Homes With No HOA Near Myrtle Beach: 16 Areas, Boats, Prices",
  description: "The 16 areas around Myrtle Beach where all or most homes have no HOA fee, what each is like, the town rules for a boat or work truck, and what homes cost.",
  ogTitle: "Homes with no HOA around Myrtle Beach: 16 areas where most homes have no fee",
  crumb: "Homes With No HOA",
  eyebrow: "Buying a home",
  h1: "Where can you buy a home with no HOA near Myrtle Beach?",
  h1em: "16 areas where most homes have no fee.",
  sub: "Older beach streets, river towns and country land from Little River to Aynor, where you can keep a boat or a work truck at home.",
  heroCta: { title: "Get the homes with no HOA fee in the areas you like.", label: LABEL, href: "/contact/",
    text: "Tell us the areas and your price range. We send the homes for sale, and we check the deed and the boat and truck rules before you make an offer." },
  author: "devin",
  shortAnswer: [
    "Almost every house on a street outside a named subdivision has no homeowners association (HOA) fee. Around Myrtle Beach, most of them are in the areas below.",
    "Age is the best sign. About 3 in 4 houses for sale built before 1990 have no HOA fee. Of those built since, fewer than 1 in 5 do.",
  ],

  sections: [
    { h2: "Where are the homes with no HOA fee?", toc: "The map and the guide", id: "where", html: () =>
      ph.css() + CHIP_CSS + MAP +
      h.p(`<strong>A boat at home:</strong> ${go("cherry-grove")} on the canals; ${go("little-river")}, ${go("socastee")} and ${go("garden-city")} by a county landing.`) +
      h.p(`<strong>The beach on foot:</strong> ${go("crescent-beach")}, ${go("windy-hill")}, ${go("ocean-drive")}, ${go("mb-myrtle-heights")} and ${go("surfside")}.`) +
      h.p(`<strong>An old town center:</strong> ${go("mb-downtown", "Downtown Myrtle Beach")}, ${go("conway")} and ${go("loris")}.`) +
      h.p(`<strong>Half-acre lots in Myrtle Beach:</strong> ${go("mb-pine-lakes")} and ${go("mb-plantation-point")}.`) +
      h.p(`<strong>An acre and a new house:</strong> ${go("aynor")} and ${go("loris-country", "the country around Loris")}.`) },

    entry("mb-downtown", "older streets by Withers Swash", [
      `A wooden boardwalk follows Withers Swash, one of the city's ${h.ext(MB_SWASH, "oldest waterways")}, from Third Avenue South to Broadway and Collins Street. Most of the houses here are within half a mile of the ocean shore.`,
      `On Broadway, the ${h.ext(MB_DEPOT, "Myrtle Beach Train Depot")} was built in 1937 and is on the National Register of Historic Places. It was restored and reopened in 2004.`,
      "On Collins Street, Chester Street, Dunbar Street and 13th Avenue South, older houses for sale were built from 1955 to 1960. On 12th Avenue South, eight new houses in The Villages at Withers Heights were listed with no HOA fee too.",
      "The trade-off is room: a lot here is typically about 0.2 acre.",
    ]),

    entry("mb-myrtle-heights", "older beach houses in a historic district", [
      `The ${h.ext(NPS_MH, "Myrtle Heights-Oak Park Historic District")} is along Ocean Boulevard from about 32nd to 46th Avenue North. Myrtle Heights is its southern part, to 40th Avenue North.`,
      "The district's houses were built from about 1925 to 1945. Colonial Revival is the most common style, with some Bungalow and Craftsman touches.",
      "Two of the houses for sale were built in 1938 and 1946, and a new oceanfront house was listed too. Every one is within a 5-minute walk of a public beach access.",
      "The trade-off is price: the typical price here is the highest of the 16 areas.",
    ]),

    entry("mb-pine-lakes", "half-acre lots on old golf land", [
      `The older Pine Lakes streets were built on golf land. In 1946, the club ${h.ext(PL_SHPO, "sold 18 of its 27 holes")} for homes and kept nine.`,
      "That is why the lots are big: typically almost half an acre, more than twice a downtown lot. The houses for sale were built from the 1960s to 2016.",
      `These streets are around ${h.ext(PINE_LAKES, "Pine Lakes Country Club")}, which opened in 1927.`,
      "The newer Preserve at Pine Lakes, from about 0.2 to 0.5 mile away, has an HOA, so we check which section a house is in before you make an offer.",
    ]),

    entry("mb-plantation-point", "half an acre outside the city limits", [
      "Plantation Point's lots are typically about half an acre, outside the city limits, on streets such as Annandale, Arundel and Brookgreen Drive. The houses date from the late 1980s on.",
      "Its owners' association is voluntary, and every house for sale was listed with no HOA fee.",
      "Outside the city, the county code does not say where on your own lot a boat or camper must go. Half an acre leaves room for both beside the house.",
      "The trade-off is the beach: it is about 10 minutes away by car and too far to walk.",
    ]),

    entry("windy-hill", "beach streets near Barefoot Landing", [
      `Windy Hill Beach was ${h.ext(SCE + "north-myrtle-beach/", "developed by Conway investors")} after World War II, and joined North Myrtle Beach in 1968. Most of the houses for sale here were built before 1990.`,
      `Most are within a 10-minute walk of a public beach access. The city keeps ${h.ext(NMB_ACCESS, "beach accesses")} at the street ends, among them 33rd, 39th, 45th, 46th and 47th Avenue South.`,
      `Barefoot Landing, the shops and restaurants on the Intracoastal Waterway, is a 3-minute drive. ${h.ext(NMB_YOW, "Yow Park")}, a 1.5-acre city park, is among the Windy Hill streets.`,
      "The trade-off is room: a lot here is typically about a fifth of an acre.",
    ]),

    entry("crescent-beach", "a maritime forest and 30-foot dunes", [
      `${h.ext(INGRAM, "Ingram Dunes Nature Preserve")}, on Hillside Drive between 9th and 10th Avenue South, is the city's last remaining maritime forest. It has native dunes 30 feet tall and an interpretive half-mile nature trail.`,
      "Crescent Beach is the middle of North Myrtle Beach, from about 9th to 27th Avenue South. Each of the 25 houses we placed on the county map is within a 10-minute walk of a public beach access.",
      "Most of the houses for sale were built before 1990, on streets such as Hillside Drive, Holly Drive, Perrin Drive and Strand Avenue.",
      "The trade-off is room: a lot here is typically about a sixth of an acre.",
    ]),

    entry("ocean-drive", "Main Street and the shag", [
      "Ocean Drive is the part of North Myrtle Beach around Main Street. In the Ocean Drive and Crescent Beach area, a pavilion and amusement park drew crowds who danced the shag.",
      `South Carolina made the shag its ${h.ext(SHAG_LAW, "official state dance")} in 1984. Each summer, the city holds free Music on Main concerts on Thursdays at the Horseshoe on Main Street.`,
      "In Ocean Drive Estates, five houses from the mid-1980s were listed from $255,000 to $369,000. Most houses here are within a 10-minute walk of a public beach access.",
      "The trade-off is room: a lot here is typically about a fifth of an acre.",
    ]),

    entry("cherry-grove", "a boat on the canals", [
      `Cherry Grove's canals were created as early as the 1950s. The city ${h.ext(CANALS, "has dredged them twice since 2016")}, to give owners boat access to House Creek and the Intracoastal Waterway at high and low tide.`,
      `Without a canal lot, use the city's ${h.ext(NMB_RAMP, "boat ramp at 53rd Avenue North")}, 5 minutes away. It has a two-lane boat launch, a kayak launch, a fishing pier, a floating boat dock and a fish cleaning station.`,
      "North Myrtle Beach residents can register for free parking there, for a limited number of vehicles. Heritage Shores Nature Preserve, an island in the Cherry Grove marsh, is reached on elevated boardwalks.",
      "Every home for sale outside a named subdivision here was listed with no HOA fee.",
      "The trade-offs: almost every home here is in a high-risk flood zone, and owners of about 415 properties in the canal district pay the city about $1,700 a year for the dredging, on the county tax bill.",
    ]),

    entry("little-river", "the old fishing village on the waterway", [
      `Little River was the first permanent settlement in Horry County. In about the early 1920s, its boatmen began ${h.ext(LR_FISHING, "taking visitors fishing for a fee")}, the first organized offshore trips of that kind in South Carolina.`,
      `The waterfront on Mineola Avenue holds the ${h.ext(BLUE_CRAB, "Blue Crab Festival")} each May, the weekend after Mother's Day. After the inlet's jetties were finished in 1983, boats could cross the bar at any time of day.`,
      `The county's ${h.ext(LANDINGS, "T. Craig Campbell boat landing")} is on the waterway in Little River. In Little River's named subdivisions, 179 of 192 homes for sale list an HOA fee, so these older waterfront streets stand out.`,
      "The trade-off: none of these houses is within a mile of the ocean.",
    ]),

    entry("socastee", "1980s houses by the waterway", [
      `${h.ext(LANDINGS, "Rosewood Landing")}, a county boat ramp on the Intracoastal Waterway, is 2 minutes by car from the streets around Rosewood Drive. Socastee Landing and Park, a second county ramp, is about 5 minutes.`,
      "Most houses for sale here were built from 1979 to 1986, in Rosewood Estates and Cimerron Plantation.",
      `The ${h.ext(SWING, "Socastee Swing Bridge")} over the waterway was built in 1934 and 1935. It is one of the two oldest of the seven swing-span highway bridges in the state's historic bridge inventory.`,
      `${h.ext(HC_PARKS, "Socastee Recreation Park")} has multi-purpose fields, picnic areas, a disc golf course, trails and a playground. The trade-off is the beach, a drive away.`,
    ]),

    entry("surfside", "room for two boats on the ocean side", [
      "The town allows two boats or trailers at a home, and one work van or pickup up to 21 feet long and 7 feet 11 inches high overnight.",
      "Most houses here are within a 10-minute walk of a public beach access. Fuller Park, with a playground, is about 0.1 mile from the middle of the ocean-side streets.",
      "The town picks up trash at the curb.",
      "The trade-off: about 1 in 4 homes on the ocean side is in a high-risk flood zone, where with a mortgage your lender will almost always require flood insurance.",
    ]),

    entry("garden-city", "marsh creeks and free beach parking", [
      `The county's ${h.ext(SALT_LANDINGS, "Garden City boat ramp")} is on Main Creek, in the Murrells Inlet marsh. The Stanley Drive landing is about 6 minutes from the middle of Garden City.`,
      `Every oceanfront beach access in Garden City has ${h.ext(HC_BEACH, "free parking all year")}. Most houses for sale here are within half a mile of the beach.`,
      `The MarshWalk restaurants in Murrells Inlet are about 7 minutes south. ${h.ext(HB_PARK, "Huntington Beach State Park")}, farther south, is known for its birding and surf fishing.`,
      "The trade-off: most houses here are in a high-risk flood zone, where with a mortgage your lender will almost always require flood insurance.",
    ]),

    entry("conway", "live oaks and the Waccamaw River", [
      `Conway is the county seat, on a bluff of the Waccamaw River. Its ${h.ext(CONWAY_OAKS, "streets were designed around its live oaks")}, and the Riverwalk runs along the river downtown.`,
      `${h.ext(CITY_HALL, "City Hall")} was the county courthouse, finished in 1825. ${h.ext(LANDINGS, "Billy Witherspoon Landing")}, a county ramp on the Waccamaw, is a 6-minute drive from these streets, and Conway Medical Center 12.`,
      "Within a mile and a half of downtown, 20 of 23 houses for sale were listed with no HOA fee. The typical one was built about 1970, on a little over a third of an acre.",
      "The trade-off is the beach, a 25-minute drive.",
    ]),

    entry("loris", "a small town with its own hospital", [
      `Loris grew up around a railroad depot and became a town in 1902. By 1903, ${h.ext(SCE + "horry-county/", "tobacco markets were thriving")} in Conway and Loris.`,
      `On the third Saturday in October, the ${h.ext(LORIS_CITY, "Loris Bog-Off")} fills downtown with vendors, a car show and live music. Its namesake dish is chicken bog: chicken, rice and sausage cooked together.`,
      "Most of the houses for sale within a mile of downtown are older, typically from the 1960s, on about 0.4 acre. McLeod Loris hospital is on the edge of downtown.",
      "The trade-off is the drive: the beach is about 35 minutes by car, and Coastal Grand Mall about 50.",
    ]),

    entry("loris-country", "new houses on almost an acre", [
      `Horry was long a county of ${h.ext(SCE + "horry-county/", "small family farms")}, and the country west and south of Loris is still farm and forest land. The houses for sale here sit on lots of typically about 0.9 acre.`,
      "Most of them are new, built in 2024 or later. With that much land and no town limits, there is room for a boat, a camper and a shop.",
      `The ${h.ext(WACCAMAW_PRESERVE, "Waccamaw River Heritage Preserve")} protects 28 miles of the Waccamaw River, with riverside camping on its land. McLeod Loris hospital is a 9-minute drive from the middle of these houses.`,
      "The trade-off: outside the towns, the Solid Waste Authority provides no curbside trash pickup. You hire a hauler or use a county drop-off center.",
    ]),

    entry("aynor", "an acre and a September festival", [
      `Each September, Aynor holds the Aynor Harvest Hoe-Down, a festival started by the Pilot Club of Aynor. ${h.ext(HOEDOWN_LAW, "State law")} names the third Saturday in September for it.`,
      `Lots are typically about an acre, with room beside the house for a boat or a camper. ${h.ext(LANDINGS, "Galivants Ferry Landing")}, a county ramp on the Pee Dee River, is about 6 minutes from the center of town.`,
      "More than half of the houses for sale here are new. With an Aynor address, about 2 in 3 homes for sale were listed with no HOA fee, and every one in and around the town itself.",
      "The drive is the trade-off: about 45 minutes to the beach, and about 30 to the nearest hospital, Conway Medical Center.",
    ]),

    { h2: "Can you keep a boat or a work truck at a home with no HOA?", toc: "Boats and work trucks", id: "boats-and-work-trucks", html: (bg) =>
      h.p(`Yes, on your own lot. Outside the towns, the county has no rule on where you keep your own boat, trailer or camper on your lot. If you run a business from the house, the county allows ${h.ext(HORRY_927, "two service vehicles per acre")} on most lots. Inside a town, the town's limits in the table apply.`) +
      parkingTable() +
      h.p(`In the towns, you can leave a boat in the driveway for a day to load and unload. On county roads, the county ${h.ext(HORRY_CODE, "bans parking")} only where it posts a sign. The ${h.ext(CLOSING, "closing attorney")}'s title search finds any deed restriction on a boat or a truck before you buy.`) +
      story(STORY, "", bg) },

    { h2: "What does a house with no HOA fee cost?", toc: "Prices", id: "prices", html: (bg) =>
      h.p(`It depends on the area more than on the fee. Near the ocean, most are listed at $750,000 or more. Inland, most are listed at $250,000 to $500,000. Our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")} compares the towns.`) +
      bandTable() +
      h.cta("Get the homes with no HOA fee in your price range.", "Tell us your range and the areas you like. One of our agents sends the homes for sale in it.", LABEL, "/contact/", bg) },

    { h2: "What do you give up with no HOA?", toc: "What you give up", html: () =>
      h.p("No HOA means no shared pool, clubhouse or gate, and no HOA rules for the houses next door either. A home with no HOA can still have deed restrictions, and we read them before you make an offer.") +
      h.p(`If you want a pool, a clubhouse or a gate, you pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")} and to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} show where to look. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} shows one Carolina Forest neighborhood, and our guide to ${h.a("/hoa/", "what HOA fees cover")} explains each part of a fee.`) },
  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Can I park a boat at my house in Myrtle Beach?", a: "Yes, on your own lot. Inside the city of Myrtle Beach, a boat over 16 feet may not be kept in the front yard. Boats and trailers may not park on residential streets. Outside the towns, you can keep your own boat, trailer or camper anywhere on your lot." },
    { q: "Which areas near Myrtle Beach almost always have an HOA?", a: "Carolina Forest, the Grande Dunes, the Market Common and Burgess. Almost every home for sale there has an HOA fee, and so do almost all of Little River's named subdivisions." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address are listed with no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "What is a typical HOA fee in Myrtle Beach?", a: `About $${DATA.allNineAreas.detachedHouses.medianMonthlyHoaFee} a month on a house. A condo fee is much higher because it includes the building's insurance, water and sewer, trash and a pool.` },
    { q: "Can you buy a condo with no HOA fee in Myrtle Beach?", a: `Almost never. Of about 2,700 condos for sale around Myrtle Beach, only one was listed with no HOA fee. South Carolina law makes condo owners share the cost of the building.` },
    { q: "Does a listing with no HOA fee mean the home has no HOA?", a: "Not always. A blank fee means no fee was listed. A few homes listed with no fee are in a neighborhood with a club you can choose to join and pay." },
    { q: "Who picks up trash at a home with no HOA?", a: "Inside the towns, the town does. Outside the towns, the county does not pick up at the curb; you hire a hauler or use one of the county's drop-off centers." },
    { q: "Is a campground home with no HOA fee a no-HOA home?", a: "No. A campground home has no HOA fee, but it sits on leased land, and you pay a yearly lease for the land under it." },
  ],
  sources: [
    { name: "town and county codes", href: `${MUNI}horry_county/codes/code_of_ordinances` },
    { name: "county boat landings", href: LANDINGS },
    { name: "S.C. condominium law", href: CONDO_LAW },
    { name: "trash service", href: SWA },
    { name: "S.C. Encyclopedia", href: SCE + "north-myrtle-beach/" },
  ],
  sourcesNote: `Homes for sale in the local MLS, on ${COUNTED}; list prices; homes on leased land left out. Areas are MLS areas or a distance from a town center; flood zones and lots from county maps. Drive times without traffic. Not legal advice.`,
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Get the homes with no HOA fee in the areas you like.", p: "Tell us the areas and your price range. One of our agents will send you the homes for sale with no HOA fee.", label: LABEL, href: "/contact/" },
  keywords: "Myrtle Beach homes no HOA, no HOA neighborhoods Myrtle Beach, houses for sale no HOA Myrtle Beach, no HOA homes North Myrtle Beach, no HOA homes Conway SC, no HOA homes Loris SC, Myrtle Beach homes with land, park boat at house Myrtle Beach, no HOA homes Surfside Beach, no HOA homes Socastee",
  about: "Homes for sale with no homeowners association fee around Myrtle Beach, South Carolina",
});
