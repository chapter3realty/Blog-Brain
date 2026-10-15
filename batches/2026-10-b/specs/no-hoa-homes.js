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
/* The guide names each area and links to its entry; the map labels carry the numbers (owner: fewer numbers). */
const go = (k, text) => h.a(`#${ENTRY[k].id}`, text || ENTRY[k].name);

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
  /* Three panels, each sized to its own areas so the names fit, and short enough that the whole map is
     under a phone screen (owner's eye 14d, high 2). */
  const RATIO = { south: 0.8, north: 0.65, inland: 0.4 };
  const south = draw("Homes with no HOA, Myrtle Beach to Garden City", PANEL.south.map(areaOf), { maxRatio: RATIO.south });
  const north = draw("Homes with no HOA, North Myrtle Beach and Little River", PANEL.north.map(areaOf), { maxRatio: RATIO.north });
  const inland = draw("Homes with no HOA, Conway, Loris and Aynor", PANEL.inland.map(areaOf), { maxRatio: RATIO.inland });
  const panel = (m, label) => `<div class="c3-nh-panel"><p class="c3-nh-label">${label}</p>${m.html}</div>`;
  const css = "<style>.c3-nh-maps{display:grid;gap:.45rem}.c3-nh-panel img,.c3-nh-panel svg{display:block;width:100%;height:auto}"
    + ".c3-nh-label{font-family:var(--sans);font-size:.9rem;font-weight:600;color:var(--navy);margin:0 0 .2rem!important;line-height:1.3}"
    + "@media (min-width:900px){.c3-nh-maps{grid-template-columns:repeat(3,1fr);align-items:start}}"
    + ".c3-areamap figure{max-width:1136px!important}</style>";
  return css + `<div class="c3-areamap">` + PK.mapFigure(h, `<div class="c3-nh-maps">${panel(south, "Myrtle Beach to Garden City")}${panel(north, "North Myrtle Beach and Little River")}${panel(inland, "Conway, Loris and Aynor")}</div>`,
    "Map: numbers as in the list below.", south.credit, "no-hoa map") + `</div>`;
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
/* One line on price, in the chip under the heading (the owner: "one line about the average price"). One
   measure for all 16 (owner's eye 14d, medium 3): the typical list price of the houses for sale with no fee
   (data/no-hoa-areas.json), as the sources line says. */
const priceWords = (k) => `Houses for sale here are listed at about ${A[k].medianNoFeeHousePrice >= 1e6 ? millions(A[k].medianNoFeeHousePrice) : priceOf(k)}`;
const CHIP_CSS = "<style>.c3-nh-chips{display:flex;flex-wrap:wrap;gap:.45rem;margin:-.2rem 0 1rem}.c3-nh-chip{display:inline-block;padding:.3rem .8rem;border-radius:999px;font-family:var(--sans);font-size:.95rem;font-weight:600;color:var(--navy);background:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.9);box-shadow:0 6px 18px -10px rgba(28,32,40,.35)}</style>";
const chip = (k) => `<div class="c3-nh-chips"><span class="c3-nh-chip">Listed with no HOA fee: ${shareWords(k)}</span><span class="c3-nh-chip">${priceWords(k)}</span></div>`;
function entry(k, headline, paras) {
  const n = num(k);
  return { h2: `${n}. ${ENTRY[k].name}: ${headline}`, toc: `${n}. ${ENTRY[k].short || ENTRY[k].name}`, id: ENTRY[k].id,
    html: () => chip(k) + h.p(paras[0]) + (PHOTO[k] || "") + paras.slice(1).map((t) => h.p(t)).join("") + offer(k) };
}

/* Sources. */
/* Round 14d sources (rows 149 to 165, pending verification). */
const MB_NRMPS = "https://npgallery.nps.gov/NRHP/GetAsset/NRHP/64500568_text";
const MB_BOARDWALK2 = "https://www.myrtlebeachboardwalk.com/";
const MB_SUMMER = "https://www.cityofmyrtlebeach.com/news_detail_T6_R2620.php";
const MB_LIBRARY = "https://www.cityofmyrtlebeach.com/i_want_to/find/chapin_memorial_library.php";
const MB_BEACHLAW = "https://cityofmyrtlebeach.com/i_want_to/learn_about/beach_conditions.php";
const MB_BOARDS = "https://cityofmyrtlebeach.com/government/boards_and_committees/";
const PL_CLUB = "https://www.pinelakes.com/";
const MB_PARK_OF = "https://www.myrtlebeachprst.com/_T4_R41.php";
const PP_ANNANDALE = "https://schpr.sc.gov/index.php/Detail/objects/S108042003700007";
const MB_DECAL = "https://cityofmyrtlebeach.com/i_want_to/apply_for/resident_parking_decal.php";
const NMB_SURF = "https://www.nmb.us/219/Surfing-Rules-Regulations";
const NMB_41ST = "https://www.nmb.us/474/41st-Avenue-South-Pocket-Park";
const BF_DOCKS = "https://www.bflanding.com/plan-your-visit/day-docking/";
const NMB_18TH = "https://www.nmb.us/782/18th-Edge-Pocket-Park";
const NMB_CENTRAL = "https://www.nmb.us/475/Central-Park";
const NMB_PARKREG = "https://www.nmb.us/545/Parking-Registration-Information";
const FAT_HAROLDS = "https://www.fatharolds.com";
const HOSKINS = "https://www.hoskinsrestaurant.com";
const NMB_MUSEUM = "https://www.northmyrtlebeachmuseum.com/";
const NMB_MCLEAN = "https://www.nmb.us/493/McLean-Park";
const NMB_BURGESS = "https://www.nmb.us/495/Russell-Burgess-Coastal-Preserve";
const NMB_TURBINE = "https://www.nmb.us/489/Cherry-Grove-Oceanfront-Park";
const JUELS = "https://www.hurricanejuels.com/";
const SHRIMPFEST = "https://littlerivershrimpfest.org/";
const REGATTA = "https://www.christmasregatta.com/";
const DNR_REEFS = "https://www.dnr.sc.gov/marine/pub/seascience/reefloc.html";
const SOCASTEE_NR = "https://npgallery.nps.gov/GetAsset/474cf1ff-3f32-413f-be71-37eea026b32a";
const SSB_BEACHES = "https://www.surfsidebeach.org/200/Beaches";
const SSB_PARADE = "https://www.surfsidebeach.org/367/4th-of-July-Golf-Cart-Parade";
const SSB_MARKET = "https://www.surfsidebeach.org/325/Surfside-Beach-Farmers-Market";
const GC_PIER = "https://www.gardencitypier.com/";
const GC_SURVEY = "https://scdah.sc.gov/sites/scdah/files/Documents/Historic%20Preservation%20(SHPO)/Research/HC26001.pdf";
const BLUE_TRAIL = "https://www.conwaysc.gov/Waccamaw-River-Blue-Trail-Waterproof-Booklet-2020-Digital.pdf";
const CONWAY_RHD = "https://schpr.sc.gov/index.php/Detail/objects/S10817726031";
const HC_MUSEUM = "https://www.horrycountymuseum.org/";
const RIVERFEST = "https://www.conwayriverfest.com/";
const LORIS_HISTORY = "https://www.lorischamber.com/history-of-loris";
const LORIS_LIBRARY = "https://www.horrycountysc.gov/news/articles/rooted-in-community-loris-library-celebrates-50-years-on-main-street/";
const HC_CULTURAL = "https://www.horrycountysc.gov/media/4ujjy1oh/cultural-resources-element-2015.pdf";
const AYNOR_TOWN = "https://www.townofaynor.gov/community";
const AYNOR_APPEAL = "https://www.townofaynor.gov/appeal";
const GALIVANTS_NR = "https://npgallery.nps.gov/GetAsset/aa6c6bf6-8036-4d76-84bb-d1eb0e3431fd";
const MB_STATE_PARK = "https://southcarolinaparks.com/myrtle-beach";
const USGS_LPD = "https://waterdata.usgs.gov/monitoring-location/02135000/";
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
/* The town and county codes behind "What you can do at home, by town" (rows 137 to 144). */
const MB_STR = MUNI + "myrtle_beach/codes/code_of_ordinances?nodeId=COOR_APXAZO_ART14ZODI_S1407TAUS";
const SSB_STR = MUNI + "surfside_beach/codes/code_of_ordinances?nodeId=VOII_CH17ZO_ARTIIIDIUSRE_DIV11USRE_S17-396.10TRRELOTERE";
const NMB_RENTAL = "https://www.nmb.us/DocumentCenter/View/6133/Rental-Property-Quick-Reference";

/* What you can do at home, by town (owner's eye 14, decision 1; 14d, high 3): one glass card per place
   with four plain answers, each by its own icon (a boat, a work truck, renting it out, a shed or fence).
   No zone codes: the codes are in ledger rows 137 to 144. The boat and truck answers are rows 58 to 64. */
const { icon: ICON } = require(path.join(BB, "tools", "icons.js"));
const svg = (d) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${d}</svg>`;
const RULE_ICON = {
  boat: ICON("dock", { size: 22 }),
  truck: svg('<path d="M2 6h11v10H2zM13 9h4.5L21 12.5V16h-8"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
  rent: ICON("key", { size: 22 }),
  shed: svg('<path d="M3 11l9-6 9 6M5 10v10h14V10M10 20v-5h4v5"/>'),
};
const RULE_WORDS = { boat: "A boat or camper", truck: "A work truck", rent: "Renting it out", shed: "A shed or fence" };
const RULES = [
  { name: "Outside the towns", note: "Horry County", rules: {
    boat: "Yes, anywhere on your own lot.",
    truck: "Yes. A business run from home may keep two work vehicles per acre.",
    rent: "The county code does not name it. We check the lot's zoning before you buy.",
    shed: "Yes. A small shed can sit 5 feet from the line, and a fence can be 8 feet tall." } },
  { name: "Myrtle Beach", href: "/submarkets/myrtle-beach/", rules: {
    boat: "Yes, but a boat over 16 feet stays out of the front yard.",
    truck: "Yes, one, of one ton or less.",
    rent: "Not on single-family streets. We check the address for you.",
    shed: "Yes, with a permit. Fences are 4 feet in front and up to 8 in back." } },
  { name: "North Myrtle Beach", href: "/submarkets/north-myrtle-beach/", rules: {
    boat: "Yes, behind the front of the house or under a carport.",
    truck: "Yes, up to 18,500 pounds.",
    rent: "Yes in most of the city, with a business license. Some neighborhood rules forbid it, so we check.",
    shed: "Yes, one shed up to 150 square feet, behind the house." } },
  { name: "Surfside Beach", href: "/submarkets/surfside-beach/", rules: {
    boat: "Yes, up to two boats or trailers.",
    truck: "Yes, one van or pickup up to 21 feet long and 7 feet 11 inches high.",
    rent: "Only in a few zones, not the single-family ones. We check the address.",
    shed: "Yes, in the back yard, with a permit. Fences are 4 feet in front and 6 in back." } },
  { name: "Conway", href: "/submarkets/conway/", rules: {
    boat: "Yes, in the side or back yard, or under a carport.",
    truck: "Yes, but a big work truck may not park on a city street.",
    rent: "Only in the downtown and business areas, not on home streets.",
    shed: "Yes, with a permit, in the back yard. Fences are 4 feet in front and up to 8 in back." } },
  { name: "Loris", rules: {
    boat: "Yes. A boat over 17 feet stays back from the edges of the lot.",
    truck: "Yes, one, up to 2 tons.",
    rent: "No. The town's zoning does not allow it.",
    shed: "Yes, up to two, in the side or back yard." } },
  { name: "Aynor", rules: {
    boat: "The town's zoning does not limit it. We check this for the lot you choose.",
    truck: "No limit in the town's zoning.",
    rent: "The town's zoning does not name it, so we ask the town for the lot you choose.",
    shed: "Yes, in the back yard, 5 feet from the line." } },
];
/* A real table (STANDARD A6), drawn as one glass card per place on a phone: four plain lines, each by its icon. */
const RULES_CSS = "<style>.c3-nh-rules{width:100%;max-width:1100px;border-collapse:separate;border-spacing:0 .7rem;margin:1rem 0 1.2rem}"
  + ".c3-nh-rules caption{text-align:left;font-family:var(--sans);font-weight:600;color:var(--navy);font-size:1rem;margin-bottom:.2rem}"
  + ".c3-nh-rules th,.c3-nh-rules td{vertical-align:top;text-align:left;font-size:1rem;line-height:1.45;padding:.75rem .8rem;background:rgba(255,255,255,.62);border-top:1px solid rgba(255,255,255,.95);border-bottom:1px solid rgba(255,255,255,.95)}"
  + ".c3-nh-rules thead th{background:none;border:0;font-family:var(--sans);font-weight:600;color:var(--navy);font-size:.95rem;padding:.2rem .8rem}"
  + ".c3-nh-rules thead th .ic{margin-right:.45rem;vertical-align:middle}"
  + ".c3-nh-rules tbody th{font-family:var(--serif);font-size:1.15rem;color:var(--navy);border-left:1px solid rgba(255,255,255,.95);border-radius:18px 0 0 18px;white-space:nowrap}"
  + ".c3-nh-rules tbody td:last-child{border-right:1px solid rgba(255,255,255,.95);border-radius:0 18px 18px 0}"
  + ".c3-nh-rules tbody th small{display:block;font-family:var(--sans);font-size:.85rem;font-weight:500;color:var(--muted)}"
  + ".c3-nh-rules td .ic{display:none}"
  + ".c3-nh-rules .ic{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:11px;color:var(--brass);background:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.95);box-shadow:0 6px 14px -10px rgba(28,32,40,.4)}"
  + ".c3-nh-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
  + "@media (max-width:899px){.c3-nh-rules,.c3-nh-rules tbody,.c3-nh-rules tr,.c3-nh-rules th,.c3-nh-rules td{display:block;width:auto}.c3-nh-rules thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.c3-nh-rules caption{display:block;width:auto;margin-bottom:.7rem}"
  + ".c3-nh-rules tbody tr{margin:0 0 .9rem;border-radius:22px;padding:.9rem 1rem .5rem;background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,255,255,.56));border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.8),0 18px 40px -28px rgba(28,32,40,.45)}"
  + ".c3-nh-rules tbody th,.c3-nh-rules tbody td{background:none;border:0!important;border-radius:0!important;padding:0;white-space:normal}.c3-nh-rules tbody th{margin:0 0 .55rem}"
  + ".c3-nh-rules tbody td{display:grid;grid-template-columns:32px 1fr;gap:.6rem;align-items:start;margin:0 0 .55rem}.c3-nh-rules td .ic{display:inline-flex}}</style>";
const KEYS = ["boat", "truck", "rent", "shed"];
const homeRules = () => RULES_CSS + `<table class="c3-nh-rules"><caption>What you can do at home, by town</caption><thead><tr><th scope="col"><span class="c3-nh-sr">Where the home is</span></th>`
  + KEYS.map((k) => `<th scope="col"><span class="ic" aria-hidden="true">${RULE_ICON[k]}</span>${RULE_WORDS[k]}</th>`).join("") + "</tr></thead><tbody>"
  + RULES.map((t) => `<tr><th scope="row">${t.href ? h.a(t.href, t.name) : t.name}${t.note ? `<small>${t.note}</small>` : ""}</th>`
    + KEYS.map((k) => `<td><span class="ic" aria-hidden="true" title="${RULE_WORDS[k]}">${RULE_ICON[k]}</span><span>${t.rules[k]}</span></td>`).join("") + "</tr>").join("")
  + "</tbody></table>";

/* The price bands, for the reader who starts from a budget (rows 82 to 85, verified), as plain lines
   (owner's eye 14, low 5). */
const BAND = Object.fromEntries(BANDS.map((b) => [b.band, b]));
const about10 = (b) => Math.round(BAND[b].houses / 10) * 10;
const bandList = () => h.ul([
  `About ${about10("under 250k")} houses for sale under $250,000, most of them built before 1990 and about half in and around Conway.`,
  `About ${about10("500k-750k")} from $500,000 to $750,000, a third of them within half a mile of the beach.`,
  `About ${about10("750k+")} at $750,000 and up, two-thirds of them within half a mile of the beach.`,
]);

/* The example (rows 59, 64 and 68; the services Chapter3 records: stories.json "hoa-rental-bans-filtered"). */
const STORY = [
  "<strong>Example:</strong> Teresa wants a home with no HOA and room for her 20-foot boat. She likes a house on a small lot with a Myrtle Beach address.",
  "Her Chapter3 agent finds the house on the county map, inside the city of Myrtle Beach. The city's front-yard rule applies to her boat, and that lot has no other room for it.",
  "The agent shows her houses outside the city limits, under the county's rules. Teresa makes an offer on one with a wide side yard.",
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
  sub: "Room for a boat, a truck and a shed, from Little River to Aynor.",
  topOfferLine: "Homes with no HOA fee, by area.",
  heroCta: { title: "Get the homes with no HOA fee in the areas you like.", label: LABEL, href: "/contact/",
    text: "Tell us the areas and your price range. We send the homes for sale, and we check the deed and the boat and truck rules before you make an offer." },
  author: "devin",
  shortAnswer: [
    "Almost every house for sale outside a named subdivision is listed with no homeowners association (HOA) fee, and so are about three in four built before 1990. Most are on older beach streets, in river towns and on country land, in the areas below.",
  ],

  sections: [
    { h2: "Where are they?", toc: "The map and the guide", id: "where", html: () =>
      ph.css() + CHIP_CSS + MAP +
      `<style>.c3-nh-guide{margin-top:-.3rem}.c3-nh-guide p{margin:0 0 .4rem!important;line-height:1.4}</style><div class="c3-nh-guide">` +
      h.p(`<strong>A boat at home:</strong> ${go("cherry-grove")}, ${go("little-river")}, ${go("socastee")} and ${go("garden-city", "Garden City")}.`) +
      h.p(`<strong>A 10-minute walk to a beach access:</strong> ${go("crescent-beach")}, ${go("windy-hill")}, ${go("ocean-drive")}, ${go("mb-myrtle-heights")} and ${go("surfside")}.`) +
      h.p(`<strong>An old town center:</strong> ${go("mb-downtown", "Downtown Myrtle Beach")}, ${go("conway")} and ${go("loris")}.`) +
      h.p(`<strong>Room to spread out:</strong> half an acre in ${go("mb-pine-lakes")} and ${go("mb-plantation-point")}; an acre in ${go("aynor")} and ${go("loris-country", "around Loris")}.`) +
      `</div>` },

    entry("mb-downtown", "older streets by Withers Swash", [
      `Downtown is the old town by the sea. A wooden boardwalk follows Withers Swash, one of the city's ${h.ext(MB_SWASH, "oldest waterways")}. The ${h.ext(MB_NRMPS, "Withers Cemetery")} off Collins Street is the only known trace of the early settlement that gave the swash its name.`,
      `From Collins Street, the oceanfront ${h.ext(MB_BOARDWALK2, "boardwalk")} is about a quarter hour away on foot. From the day after Labor Day through April, you can ride a bike or walk a dog on it at any hour.`,
      `On summer Wednesdays, Plyler Park on the oceanfront has free live music and ${h.ext(MB_SUMMER, "fireworks")}. Peaches Corner has served on Ocean Boulevard since 1937, and ${h.ext(MB_LIBRARY, "Chapin Memorial Library")} is the only city-owned library in South Carolina.`,
      `Closer to home, Spivey Park is on Collins Street, and so is the New Town Bark Park. On Broadway, the ${h.ext(MB_DEPOT, "Myrtle Beach Train Depot")} was built in 1937 and is on the National Register of Historic Places.`,
      "The older houses on Collins, Chester and Dunbar Streets date from the late 1950s, and a few new ones stand among them.",
      "Lots are small here, typically about 0.2 acre.",
    ]),

    entry("mb-myrtle-heights", "older beach houses in a historic district", [
      `Myrtle Heights is the southern part of the ${h.ext(NPS_MH, "Myrtle Heights-Oak Park Historic District")}, up to 40th Avenue North. Its lots and public spaces still follow the plan of the mid-1930s.`,
      "That plan set oceanfront houses at least 75 feet back from the beach, which gives these lots their deep front yards. Each avenue was laid out to reach the sand, and those street ends are now public beach paths.",
      "The houses, built from about 1925 to 1945, are mostly two-story frame homes, many with a garage apartment. Look for porches, coquina rock walls and wood awnings painted to look like striped canvas.",
      "Many yards still have native wax myrtles, the plant the city is named for, along with red cedars, palmettos and windswept oaks.",
      `From 34th to 47th Avenue North, the city allows ${h.ext(MB_BEACHLAW, "kayaks and surfboards")} in summer, which it bans on most of its beach. Sea Captain's House, in a 1930 beach cottage, is about a 9-minute walk.`,
      `The trade-off is the review: on an oceanfront house, any change to the outside, even the paint color, needs the city's ${h.ext(MB_BOARDS, "Community Appearance Board")}.`,
    ]),

    entry("mb-pine-lakes", "half-acre lots on old golf land", [
      `The older Pine Lakes streets were built on golf land. In 1946, the club ${h.ext(PL_SHPO, "sold 18 of its 27 holes")} for homes and kept nine.`,
      "That is why the lots are big: typically almost half an acre, more than twice a downtown lot. There is room for a workshop or a boat beside the house.",
      `The course itself is ${h.ext(PL_CLUB, "less than half a mile from the ocean")}, on rolling land. The club's Robert White Pub is open to the public for breakfast and lunch.`,
      `The beach is about 0.6 mile on foot, at the Seaside Place street end, one of the city's fully accessible beach paths. Two small city parks are on the way: ${h.ext(MB_PARK_OF, "Ocean Forest Memorial Park")}, with a walking path, and McLeod Park, with a picnic shelter.`,
      "North Ocean Boulevard has bike lanes, and each December Santa rides through the Pine Lakes neighborhood with the city's firefighters.",
      "The newer Preserve at Pine Lakes has an HOA. We check which section a house is in before you make an offer.",
    ]),

    entry("mb-plantation-point", "half an acre outside the city limits", [
      `Plantation Point gives you a half-acre lot in the middle of the Grand Strand. Its streets share their names with old Georgetown County ${h.ext(PP_ANNANDALE, "rice plantations")}, such as Annandale and Brookgreen.`,
      "The houses date from the late 1980s on, on lots typically about half an acre, outside the Myrtle Beach city limits. Plantation Point has a voluntary HOA.",
      "Room is the reason to choose it. A half-acre lot leaves space for a garden, a pool or a long driveway.",
      `By car, Broadway at the Beach is about 8 minutes away, Coastal Grand Mall and Grand Strand Medical Center about 12, and the ocean about 10.`,
      `For a day on the water, Rosewood and Socastee county landings are each about 20 minutes. The county's ${h.ext(HC_PARKS, "Bike and Run Park")}, with 7 miles of trails, is about 15, and ${h.ext(MB_STATE_PARK, "Myrtle Beach State Park")}, with an ocean fishing pier, about 23.`,
      `One cost of living outside the city: its free beach parking decal is for city residents only, and a ${h.ext(MB_DECAL, "non-resident placard")} costs $100 a year.`,
    ]),

    entry("windy-hill", "surf zone and Barefoot Landing", [
      `Windy Hill's beach is one of North Myrtle Beach's ${h.ext(NMB_SURF, "surf zones")}. From mid-May to mid-September, when boards are banned from 9 to 4 on most of the city's beach, you can still surf and skimboard here.`,
      `Windy Hill was developed by ${h.ext(SCE + "north-myrtle-beach/", "Conway investors")} after World War II, and the city keeps beach accesses at the ends of its avenues. It joined North Myrtle Beach in 1968.`,
      `On 41st Avenue South, a ${h.ext(NMB_41ST, "pocket park")} with garden plantings, two pergolas and a walking path stands where the old water tower was. A round, grassy mound marks the spot.`,
      `Barefoot Landing, on the Intracoastal Waterway, is a 3-minute drive. You can ${h.ext(BF_DOCKS, "tie up a boat")} at its docks free for the day, and on fall weekends its stage has free live music.`,
      "The Alabama Theatre and House of Blues are on the same grounds, so a show is close to home. Barefoot Landing welcomes leashed pets all year, and many of its shops let them inside.",
      "The typical lot is small, about 7,900 square feet.",
    ]),

    entry("crescent-beach", "a maritime forest and 30-foot dunes", [
      `${h.ext(INGRAM, "Ingram Dunes Nature Preserve")}, on Hillside Drive, is the city's last remaining maritime forest. It has native dunes 30 feet tall and an interpretive half-mile nature trail.`,
      "Crescent Beach is the middle of North Myrtle Beach, from about 9th to 27th Avenue South. Most of its houses were built before 1990, on streets such as Hillside Drive, Holly Drive, Perrin Drive and Strand Avenue.",
      "From every house here, a public beach access is less than half a mile on foot. From 6th to 27th Avenue South, the beach is a summer surf zone too, open to boards all day.",
      `In the middle of Crescent Beach, the ${h.ext(NMB_18TH, "18th and Edge pocket park")} is a quiet green space with benches and a fountain. ${h.ext(NMB_CENTRAL, "Central Park")}, 20 acres with lighted tennis and pickleball courts and a paved walking path, is about 0.7 mile away.`,
            `Parking costs in season: city beach lots charge from March through October. ${h.ext(NMB_PARKREG, "Residents register their plates")} each year for free passes.`,
    ]),

    entry("ocean-drive", "Main Street and the shag", [
      "Ocean Drive is where the shag grew up. In the Ocean Drive and Crescent Beach area, a pavilion and amusement park drew crowds who danced it.",
      `South Carolina made the shag its ${h.ext(SHAG_LAW, "official state dance")} in 1984. ${h.ext(FAT_HAROLDS, "Fat Harold's Beach Club")} on Main Street still calls itself the Home of the Shag and teaches the dance free on Tuesday nights.`,
      `A Saturday here can start with breakfast at ${h.ext(HOSKINS, "Hoskins Restaurant")}, open on Main Street since 1948 and run by the same family for three generations.`,
      `The ${h.ext(NMB_MUSEUM, "North Myrtle Beach Area Historical Museum")} is free and tells the story of beach music and the shag. ${h.ext(NMB_MCLEAN, "McLean Park")}, a quarter mile from Hoskins on foot, has a lake ringed by a half-mile walking path.`,
      "Each summer, the city holds free Music on Main concerts on Thursdays at the Horseshoe. Each March, the St. Patrick's Day parade fills Main Street, and each December a nighttime Christmas parade comes up it.",
      "Crowds come with it: on concert nights Main Street closes to cars in the afternoon, and the St. Patrick's festival draws about 40,000 people.",
    ]),

    entry("cherry-grove", "a boat on the canals", [
      `Cherry Grove's canals were created as early as the 1950s. The city ${h.ext(CANALS, "has dredged canals there twice since 2016")}, to give owners boat access to House Creek and the Intracoastal Waterway at high and low tide.`,
      `The city's ${h.ext(NMB_RAMP, "boat ramp at 53rd Avenue North")} reaches both the marsh and the open ocean through Hog Inlet. It has a two-lane launch, a kayak launch, a fishing pier, a floating dock and a fish cleaning station.`,
      `On Duffy Street, the ${h.ext(NMB_BURGESS, "Russell Burgess Coastal Preserve")} has a boardwalk out over the Cherry Grove marsh, two blocks from the beach. You can fish and crab there from the ground.`,
      "Heritage Shores Nature Preserve, an island in the marsh, is reached on elevated boardwalks. Across Hog Inlet, Waties Island has almost three miles of undeveloped beach, with no public access.",
      `South Carolina's first ${h.ext(NMB_TURBINE, "wind turbine on the power grid")} stands at Cherry Grove Oceanfront Park. Each July 4, the city's free fireworks go up at the Cherry Grove Pier.`,
      "The homes here with an HOA fee are all in named subdivisions.",
      "The trade-offs are flood risk and a dredging fee. Almost every home here is in a high-risk flood zone. Owners of about 415 properties in the canal district pay the city about $1,700 a year for the dredging, on the county tax bill.",
    ]),

    entry("little-river", "the old fishing village on the waterway", [
      `Little River was the first permanent settlement in Horry County. In about the early 1920s, its boatmen began ${h.ext(LR_FISHING, "taking visitors fishing for a fee")}, the first organized offshore trips of that kind in South Carolina.`,
      "A large live oak stands over the riverfront at the end of Mineola Avenue, where people once waited for the fishing boats to come in.",
      `${h.ext(JUELS, "Hurricane Juel's")} has served dinner on the waterway since 1945. The waterfront holds the ${h.ext(BLUE_CRAB, "Blue Crab Festival")} each May and ${h.ext(SHRIMPFEST, "ShrimpFest")} each October, with seafood from the waterfront restaurants.`,
      `On the Saturday after Thanksgiving, a ${h.ext(REGATTA, "lighted boat parade")} leaves Little River Inlet and heads down the waterway. After the inlet's jetties were finished in 1983, boats could cross the bar at any time of day.`,
      `South Carolina's casino boats sail from Mineola Avenue, and the state keeps an ${h.ext(DNR_REEFS, "artificial fishing reef")} off the inlet. The county's ${h.ext(LANDINGS, "T. Craig Campbell boat landing")} is on the waterway in town.`,
      "Almost all homes for sale in Little River's named subdivisions list an HOA fee, so these older waterfront streets stand out.",
      "The ocean is 14 minutes away by car, at Cherry Grove.",
    ]),

    entry("socastee", "1980s houses by the waterway", [
      `Socastee is where the Intracoastal Waterway was finished in South Carolina. The bridge here completed it, so the waterway's ${h.ext(SOCASTEE_NR, "opening celebration")} was held in Socastee in April 1936.`,
      `The ${h.ext(SWING, "Socastee Swing Bridge")} over the waterway was built in the mid-1930s. It is one of the two oldest of the seven swing-span highway bridges in the state's historic bridge inventory.`,
      `In the Socastee Historic District on SC 544, a 1905 country store still has its post office counter and wire cage. It was left as it was when it closed in 1932.`,
      `${h.ext(LANDINGS, "Rosewood Landing")}, a county boat ramp on the waterway, is 2 minutes by car from the streets around Rosewood Drive. Socastee Landing and Park has a second ramp and a new accessible playground.`,
      `Most houses for sale here were built from 1979 to 1986, in Rosewood Estates and Cimerron Plantation. ${h.ext(HC_PARKS, "Socastee Recreation Park")} has fields, picnic areas, disc golf, trails and a playground.`,
      "Market Common and Coastal Grand Mall are each about 10 minutes away. The beach takes a drive: Surfside Beach is about 15 minutes by car.",
    ]),

    entry("surfside", "live oaks, sidewalks and 36 beach accesses", [
      `Surfside Beach has ${h.ext(SSB_BEACHES, "36 public beach accesses")}. Its streets between US 17 Business and the beach have mature trees, low traffic and more than nine miles of sidewalk.`,
      `The town has ${h.ext(SCE + "surfside-beach/", "live oaks well over a century old")}. Most houses were built from 1970 to 2000, and the busiest decade was the 1980s.`,
      `Permitted golf carts may drive town streets in daylight, and the speed limit is 25. Each July 4, a ${h.ext(SSB_PARADE, "golf cart parade")} rolls down Ocean Boulevard.`,
      `The town holds a ${h.ext(SSB_MARKET, "farmers market")} on Tuesdays from spring into December in Memorial Park, and free Sunday evening concerts there from late May through August.`,
      "Each April brings a kite festival, and each October a fall festival with more than 125 craft vendors.",
      "The town allows two boats or trailers at a home, and on July 4 and New Year's Eve you may set off fireworks on the beach.",
      "The trade-off is flood risk. About 1 in 4 homes on the ocean side is in a high-risk flood zone. There, with a mortgage, your lender will almost always require flood insurance.",
    ]),

    entry("garden-city", "marsh creeks and free beach parking", [
      `The county's ${h.ext(SALT_LANDINGS, "boat ramp on Main Creek")}, at Stanley Drive, puts your boat in the Murrells Inlet marsh.`,
      `${h.ext(GC_PIER, "The Pier at Garden City")} is always free to walk, and on summer nights live bands play at both ends of it. A pier pass covers fishing, so you need no state license. Its Hugo burger is named for the 1989 hurricane that destroyed the pier.`,
      `Every oceanfront beach access in Garden City has ${h.ext(HC_BEACH, "free parking all year")}. Each July 4, decorated boats start at the point of Garden City Beach and parade through Murrells Inlet.`,
      `Across the marsh, Murrells Inlet is known as the ${h.ext(SCE + "murrells-inlet/", "Seafood Capital of South Carolina")}, and its MarshWalk restaurants are about 3 miles by road.`,
      `Garden City grew up in the 1950s, and a ${h.ext(GC_SURVEY, "state survey")} recorded its 1950s cottages, many with porches added over the years. ${h.ext(HB_PARK, "Huntington Beach State Park")} is known for birding and surf fishing.`,
      "Most houses here are in a high-risk flood zone, so a lender will almost always require flood insurance with a mortgage.",
    ]),

    entry("conway", "live oaks and the Waccamaw River", [
      `Conway is the county seat, on a bluff of the Waccamaw River. Its ${h.ext(CONWAY_OAKS, "streets were designed around its live oaks")}, and the Riverwalk follows the river downtown.`,
      `The Waccamaw is a federal ${h.ext(BLUE_TRAIL, "National Water Trail")}, and the Riverwalk is a stop on it. At the foot of Main Street, the old riverboat warehouses still stand, among them the steamer terminal from about 1880. Main Street's brick storefronts mostly went up after a fire in 1897.`,
      `The oldest streets form a ${h.ext(CONWAY_RHD, "National Register district")}. Its houses range from Greek Revival and Carpenter Gothic through Queen Anne to 1920s bungalows, one of them with a porch around three sides.`,
      `${h.ext(CITY_HALL, "City Hall")} was the county courthouse, finished in 1825. The ${h.ext(HC_MUSEUM, "Horry County Museum")} is free, in the restored 1905 Burroughs School, about a quarter hour on foot from downtown.`,
      `${h.ext(RIVERFEST, "Riverfest")} brings music and fireworks to the river on the Saturday before the Fourth of July weekend, and the Celebration of Lights opens each December. ${h.ext(LANDINGS, "Billy Witherspoon Landing")} is a 6-minute drive.`,
      "The trade-off is the beach, a 25-minute drive.",
    ]),

    entry("loris", "a small town with its own hospital", [
      `Loris grew up around a railroad depot and became a town in 1902. It was called the ${h.ext(LORIS_HISTORY, "Gate City")}, the first town on the railroad south of the North Carolina line.`,
      `The town ${h.ext(SCE + "chicken-bog/", "chose chicken bog")} as its festival theme in 1979. On the third Saturday in October, the ${h.ext(LORIS_CITY, "Loris Bog-Off")} fills downtown with vendors, a car show and live music.`,
      "Chicken bog is chicken, rice and sausage cooked together. No other place in the country is named Loris.",
      `The Main Street ${h.ext(LORIS_LIBRARY, "library")} has been in its building for 50 years. It lends cake pans, state park passes and Wi-Fi hotspots.`,
      "Downtown has a city clock with a carillon, and its first brick building was the Bank of Loris, opened in 1907.",
      "Older houses here are mostly from the 1960s, on lots of about 0.4 acre. McLeod Loris, a hospital with an emergency room, is in town.",
      "You drive more from here: the beach is about 35 minutes by car.",
    ]),

    entry("loris-country", "new houses on almost an acre", [
      `Horry was long a county of ${h.ext(SCE + "horry-county/", "small family farms")}, and the country west and south of Loris is still farm and forest land. ${h.ext(HC_CULTURAL, "Tobacco barns")} still stand on the older farms.`,
      "The houses for sale here are on lots of typically about 0.9 acre, and most of them are new, built in 2024 or later.",
      "With that much land and no town limits, there is room for a boat, a camper and a shop, under the county's rules.",
      `The ${h.ext(WACCAMAW_PRESERVE, "Waccamaw River Heritage Preserve")} protects 28 miles of the Waccamaw River, with riverside camping on its land. McLeod Loris hospital is about 9 minutes away by car.`,
      "Farms here once shipped strawberries, sweet potatoes, lettuce and poultry to northern markets. North Carolina is close, too: Tabor City is about 10 miles away by road.",
      `${h.ext(LANDINGS, "Chris Anderson Landing")} on SC 9 puts a boat on the Waccamaw, about half an hour away.`,
      "Outside the towns, the Solid Waste Authority provides no curbside trash pickup. You hire a hauler or use a county drop-off center.",
    ]),

    entry("aynor", "an acre and a September festival", [
      `Each September, Aynor holds the Aynor Harvest Hoe-Down, a festival started by the Pilot Club of Aynor. ${h.ext(HOEDOWN_LAW, "State law")} names the third Saturday in September for it, and ${h.ext(AYNOR_TOWN, "it draws")} almost 25,000 people.`,
      `Lots are typically about an acre, with room beside the house for a boat or a camper. Galivants Ferry Landing, a county ramp on the ${h.ext(USGS_LPD, "Little Pee Dee River")}, is about 6 minutes from the center of town.`,
      `The Little Pee Dee is ${h.ext(AYNOR_APPEAL, "popular with canoes, kayaks and small powerboats")}.`,
      `At ${h.ext(GALIVANTS_NR, "Galivants Ferry")}, the old farm houses have full-width front porches on brick piers. Some were built from wood cut on the farm itself, and log tobacco barns still stand. The big red barn on US 501 there has long told beach travelers that the ocean is near.`,
      "More than half of the houses for sale here are new.",
      "The drive is the trade-off: about 45 minutes to the beach, and about 30 to the nearest hospital, Conway Medical Center.",
    ]),

    { h2: "What can you do at home with no HOA?", toc: "What you can do at home", id: "boats-and-work-trucks", html: (bg) =>
      h.p(`With no HOA, the only limits on your lot are the town's, or the county's outside the towns. The cards give each one's answer for a boat, a work truck, renting the home out and a shed or fence. Most of the homes with no HOA fee around Conway, Loris and Aynor are outside the town limits, under the county's answers.`) +
      homeRules() +
      h.p(`In ${h.ext(MB_STR, "Myrtle Beach")}, ${h.ext(NMB_RENTAL, "North Myrtle Beach")} and ${h.ext(SSB_STR, "Surfside Beach")}, renting out a home needs a business license. In the towns, you can leave a boat in the driveway for a day to load and unload. On county roads, the county ${h.ext(HORRY_CODE, "bans parking")} only where it posts a sign.`) +
      h.p(`We check the rules for the address, and the ${h.ext(CLOSING, "closing attorney")}'s title search finds any deed restriction, before you buy.`) +
      story(STORY, "", bg) },

    { h2: "What does a house with no HOA fee cost?", toc: "Prices", id: "prices", html: (bg) =>
      h.p(`Most are listed from $250,000 to $500,000: about ${about10("250k-500k")} houses for sale, most of them around Conway, Loris and Aynor. The rest:`) +
      bandList() +
      h.p(`Our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")} compares the towns.`) +
      h.cta("Get the homes with no HOA fee in your price range.", "Tell us your range and the areas you like. One of our agents sends the homes for sale in it.", LABEL, "/contact/", bg) },

    { h2: "What do you give up with no HOA?", toc: "What you give up", html: () =>
      h.p("No HOA means no shared pool, clubhouse or gate, and no HOA rules for your neighbors' houses either. A home with no HOA can still have deed restrictions, and we read them before you make an offer.") +
      h.p(`If you want a pool, a clubhouse or a gate, you pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")} and to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} show where to look. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} shows one Carolina Forest neighborhood, and our guide to ${h.a("/hoa/", "what HOA fees cover")} explains each part of a fee.`) },
  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Can I park a boat at my house in Myrtle Beach?", a: "Yes, on your own lot, within the rule of the town it is in; the table under What can you do at home gives each one." },
    { q: "Which areas near Myrtle Beach almost always have an HOA?", a: "Carolina Forest, the Grande Dunes, the Market Common and Burgess: almost every home for sale there has an HOA fee. Almost all homes for sale in Little River's named subdivisions have an HOA fee too. Longs and the country around Conway look rural, but most homes for sale there have an HOA fee too." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address are listed with no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "What is a typical HOA fee in Myrtle Beach?", a: `About $${DATA.allNineAreas.detachedHouses.medianMonthlyHoaFee} a month on a house. A condo fee is much higher because it includes the building's insurance, water and sewer, trash and a pool.` },
    { q: "Can you buy a condo with no HOA fee in Myrtle Beach?", a: `Almost never. Of about 2,700 condos for sale around Myrtle Beach, only one was listed with no HOA fee. South Carolina law makes condo owners share the cost of the building.` },
    { q: "Does a listing with no HOA fee mean the home has no HOA?", a: "Not always. A blank fee means no fee was listed. A few homes listed with no fee are in a neighborhood with a club you can choose to join and pay. We check the deed and the county records for an HOA before you make an offer." },
    { q: "Who picks up trash at a home with no HOA?", a: "Inside the towns, the town does. Outside them, you hire a hauler or use one of the county's drop-off centers, because the Solid Waste Authority does not pick up at the curb there." },
    { q: "Is a campground home with no HOA fee a no-HOA home?", a: "No. A campground home has no HOA fee, but it sits on leased land, and you pay a yearly lease for the land under it." },
  ],
  sources: [
    { name: "town and county codes", href: `${MUNI}horry_county/codes/code_of_ordinances` },
    { name: "county boat landings", href: LANDINGS },
    { name: "county home business rule", href: HORRY_927 },
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
