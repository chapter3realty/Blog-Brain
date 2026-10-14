/* /buyers/no-hoa-homes/ - where to find a home with no HOA fee around Myrtle Beach, whether you can keep a
 * boat or a work truck there, how much room the lots have, what the homes cost, and how to check one.
 *
 * Batch 2026-10-b, page 3.
 * Version 9, 2026-10-14: round 9 (review/OWNER-EYE-8-no-hoa-homes.md). The three inland towns are now 1 to 3,
 *   under one line that says what they share; each keeps only its own facts and its own trade-off. The boat
 *   section is the table, one short paragraph and the story. The deed-check line is in the first offer only;
 *   trash pickup once; Myrtle Beach's boat rule not in its entry; boat landings in two entries. The short
 *   answer opens with the places. No date in the body.
 * Version 8, 2026-10-14: round 8 (review/ROUND-8.md; the owner's second read: "extremly repetitive writing",
 *   "surface level", and "our agent does this"). Added: four price bands (under $250,000 to $750,000 and up) with the
 *   streets and subdivisions where houses with no HOA fee were listed, from data/no-hoa-bands.json (rows 82 to 85).
 *   Each area entry now has its own history and features (rows 86 to 93) and says the no-HOA theme only in its
 *   facts line. Cut: "How do you check a home for an HOA" (we do it; one line in the offers). Every "check" the
 *   reader was told to do is now what we check. FAQ on land; ItemList JSON-LD for the eight areas.
 * Version 7, 2026-10-14: round 7 (review/ROUND-7.md; the owner's first read: "too jumpy and alot about price
 *   instead of the amenities ... focus on what the house and location gives you"). The first offer is a box
 *   (heroCta.title, website-patches/mkpage-offer-box.patch). The "where" section is now eight numbered areas,
 *   in the map's order, each with what a home there gives you (land, room for a boat, the kind and age of the
 *   houses, what is close by), one photo, the trade-off and the price in one line. The table of all areas
 *   follows the list, with the price comparison. Cut: the lot and town-limit paragraphs and the "why" section
 *   (now in the entries and the comparison). New rows 75 to 80 pending verification (round 7); row 81 copies
 *   verified values from other ledgers. Two new NAIP aerials (Myrtle Beach, Little River).
 * Version 4, 2026-10-13: round 4 (review/OWNER-EYE-2-no-hoa-homes.md). A new example: the boat meets the
 *   Myrtle Beach front-yard limit (row 59), the agent finds the house inside the city on the county map
 *   (row 68), and the buyer buys outside the towns, where the county has no limit (row 64). The "why"
 *   section is one price comparison and one reason (near the ocean, row 73). The Cherry Grove photo is the
 *   labelled copy made for best-neighborhoods; the Aynor lot is now the share image (its own crops).
 *   Table units in words; the pond, campground and guide-link wording from the review.
 * Version 2, 2026-10-13: round 2 (review/ROUND-2.md; review/BUYER-READ-no-hoa-homes.md). The cold reader
 *   (47, Virginia, a boat and a work truck) came for a place to park both, and the page never said whether
 *   the town, the county or the deed can say no, or which areas have lots with room. Changes:
 *   - A section near the top on boats, trailers and work trucks, town by town, from the town and county
 *     codes (ledger rows 58 to 64, pending); deed restrictions and the closing attorney (row 65, pending).
 *   - Lot size of the houses with no HOA fee, by area, from Horry County parcels (rows 69 to 71, pending;
 *     data/no-hoa-lots.json). Which areas have the most room.
 *   - The typical no-HOA price in the short answer. HOA spelled out once.
 *   - Why houses with no fee ask more, from the listings: older, and nearer the ocean (rows 72, 73,
 *     pending), and so why Surfside Beach and Garden City ask about $985,000.
 *   - The map labels carry the share by area, so the bar chart is gone; the table holds share, price and lot.
 *   - Pointers replaced by answers: the county map that shows town limits (row 68), what keeping up a pond
 *     means (row 66), who keeps up a private road (row 67). The county papers are not online (row 42), so
 *     the closing attorney's title search reads them.
 *   - Cut: the courts paragraph, "Half of them pay", the insurers sentence, "Each area is a mailing
 *     address" (kept once, in the sources line), most of the condo section, the Carolina Forest paragraph,
 *     the New York line, both drawings (the boat-in-the-driveway drawing showed what three towns forbid),
 *     FAQ answers that repeated the page. The offer three times (hero, after the parking section, bottom).
 *   - A labelled example about a boat and a work truck (voice/STORY-SIMPLE.md).
 * Version 1, 2026-10-13: first build.
 *
 * Facts: batches/2026-10-b/facts/no-hoa-facts.md. Verified rows 1, 3 to 11, 13 to 17, 19, 20, 29, 32, 40 to 45,
 * 47, 49, 51 in the verifier's wording; rows 58 to 73 are pending verification (round 2) and come out of the
 * copy if they fail. The date of the count comes from the data file (asOf), never typed.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Where the Blog-Brain tools are (tools/page-kit.js "Finding Blog-Brain"). */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const { compareCards } = require(path.join(BB, "tools", "compare.js"));
const { loadGeo2 } = require(path.join(BB, "tools", "area-map.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const BATCH_DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!BATCH_DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(BATCH_DATA, "photos.json")].filter((f) => fs.existsSync(f));
const dataFiles = (name) => [path.join(BATCH_DATA, name)].filter((f) => fs.existsSync(f));
const DATA = JSON.parse(fs.readFileSync(dataFiles("no-hoa.json")[0], "utf8"));
const LOTS = JSON.parse(fs.readFileSync(dataFiles("no-hoa-lots.json")[0], "utf8"));
const BANDS = JSON.parse(fs.readFileSync(dataFiles("no-hoa-bands.json")[0], "utf8")).bands;
/* Photo records: both photos.json files, merged, so this page finds its record beside another batch's. */
const PHOTOS = [];
for (const f of PHOTO_FILES) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}

const kit = PK.create({ h, photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { glance, prosCons, placesMap, story } = kit;

const SELF = "/buyers/no-hoa-homes/";

/* ---------------------------------------------------------------------------- */
/* The numbers, from the data files, checked against the ledger rows              */

const OWNED = DATA.ownedLandOnly;
const AREAS = [
  /* key in the data files, the name a reader knows, the name on the map, the Census town point, the page about it */
  { key: "Aynor", name: "Aynor", map: "Aynor", town: "Aynor" },
  { key: "Loris", name: "Loris", map: "Loris", town: "Loris" },
  { key: "North Myrtle Beach", name: "North Myrtle Beach", map: "North Myrtle Beach", town: "North Myrtle Beach", href: "/submarkets/north-myrtle-beach/" },
  { key: "Surfside Beach and Garden City", name: "Surfside Beach and Garden City", map: "Surfside and Garden City", town: "Surfside Beach", href: "/submarkets/surfside-beach/" },
  { key: "Murrells Inlet", name: "Murrells Inlet", map: "Murrells Inlet", town: "Murrells Inlet", href: "/submarkets/murrells-inlet/" },
  { key: "Conway", name: "Conway", map: "Conway", town: "Conway", href: "/submarkets/conway/" },
  { key: "Myrtle Beach (not Carolina Forest)", name: "Myrtle Beach, outside Carolina Forest", map: "Myrtle Beach", town: "Myrtle Beach", href: "/submarkets/myrtle-beach/" },
  { key: "Little River", name: "Little River", map: "Little River", town: "Little River", href: "/submarkets/little-river/" },
  { key: "Carolina Forest", name: "Carolina Forest", map: "Carolina Forest", town: "Carolina Forest", href: "/submarkets/carolina-forest/" },
].map((a) => ({ ...a, homes: OWNED[a.key].homes, houses: OWNED[a.key].detachedHouses, lots: LOTS.byArea[a.key] }));

/* The verified values (ledger rows 1, 3 to 11, 15 and 17). A data file that no longer gives them stops the
   build, so the page never shows a number no verifier checked. */
const VERIFIED = {
  share: { "Aynor": [30, 45], "Loris": [96, 160], "North Myrtle Beach": [141, 254], "Surfside Beach and Garden City": [59, 107], "Murrells Inlet": [60, 215],
    "Conway": [167, 733], "Myrtle Beach (not Carolina Forest)": [136, 698], "Little River": [22, 201], "Carolina Forest": [0, 258] },
  price: { "Aynor": [372000, 289490], "Loris": [368450, 279990], "North Myrtle Beach": [759900, 670000], "Surfside Beach and Garden City": [983450, 524900],
    "Murrells Inlet": [811950, 534950], "Conway": [383600, 329945], "Myrtle Beach (not Carolina Forest)": [625000, 475875], "Little River": [429950, 399900] },
};
for (const a of AREAS) {
  const [no, all] = VERIFIED.share[a.key];
  if (a.homes.noHoaFee !== no || a.homes.listings !== all) throw new Error(`${a.key}: the share is not the verified ${no} of ${all}`);
  if (VERIFIED.price[a.key] && (a.houses.medianListPriceNoFee !== VERIFIED.price[a.key][0] || a.houses.medianListPriceWithFee !== VERIFIED.price[a.key][1])) throw new Error(`${a.key}: the asking prices are not the verified ones`);
}
const ALL = OWNED.allNineAreas;
if (ALL.homes.noHoaFee !== 711 || ALL.homes.listings !== 2671) throw new Error("the headline share is not 711 of 2,671 (Lakeside Crossing left out, round 8)");
if (ALL.detachedHouses.medianListPriceNoFee !== 520850 || ALL.detachedHouses.medianListPriceWithFee !== 414900) throw new Error("the overall asking prices are not $520,850 and $414,900 (Lakeside Crossing left out, round 8)");
const HOUSE_FEE = DATA.allNineAreas.detachedHouses;
if (HOUSE_FEE.medianMonthlyHoaFee !== 95) throw new Error("the house fee is not the verified $95");

/* Condominiums only (row 14 as corrected by the verifier; row 13), from the listing lines. */
const NINE = AREAS.map((a) => a.key);
const F = DATA.listingsFields, LIST = DATA.listings.map((x) => Object.fromEntries(F.map((k, i) => [k, x[i]])));
const condos = LIST.filter((x) => x.propertyType === "Condominium" && NINE.includes(x.area));
const condoFees = condos.map((x) => x.monthlyHoaFee).filter((v) => v).sort((a, b) => a - b);
const pct = (arr, p) => { const i = (arr.length - 1) * p, lo = Math.floor(i); return arr[lo] + (arr[Math.min(lo + 1, arr.length - 1)] - arr[lo]) * (i - lo); };
const CONDO = { count: condos.length, noFee: condos.length - condoFees.length, median: pct(condoFees, 0.5) };
if (CONDO.count !== 2742 || CONDO.noFee !== 1 || CONDO.median !== 647) throw new Error(`the condo figures are not the verified ones: ${JSON.stringify(CONDO)}`);

/* The round 2 values (ledger rows 69 to 73, pending verification), from data/no-hoa-lots.json. The same
   check: if the file changes, the build stops until the rows and the copy are read again. */
const PENDING = {
  /* Row 69: typical lot of a house with no HOA fee, by area (acres; county parcel area). */
  lotAcres: { "Aynor": 1.06, "Loris": 0.71, "Conway": 0.53, "Myrtle Beach (not Carolina Forest)": 0.3, "Murrells Inlet": 0.24, "Little River": 0.23,
    "Surfside Beach and Garden City": 0.18, "North Myrtle Beach": 0.16, "Carolina Forest": null },
  /* Rows 70, 72 and 73: the nine areas together. [group, field, value] */
  all: {
    lotNoFee: ["noFee", "lotAcresMedian", 0.31], lotWithFee: ["withFee", "lotAcresMedian", 0.21],
    halfAcreNoFee: ["noFee", "lotHalfAcreOrMore", 172], matchedNoFee: ["noFee", "parcelMatched", 504],
    halfAcreWithFee: ["withFee", "lotHalfAcreOrMore", 115], matchedWithFee: ["withFee", "parcelMatched", 1732],
    oldNoFee: ["noFee", "builtBefore2000", 335], knownNoFee: ["noFee", "yearKnown", 688],
    oldWithFee: ["withFee", "builtBefore2000", 190], knownWithFee: ["withFee", "yearKnown", 1926],
  },
};
for (const a of AREAS) {
  const want = PENDING.lotAcres[a.key], got = a.lots.noFee.lotAcresMedian;
  if (want !== undefined && want !== got) throw new Error(`${a.key}: the lot size ${got} is not the ledger's ${want}`);
}
const L_ALL = LOTS.allNineAreas;
for (const [k, v] of Object.entries(PENDING.all)) if (JSON.stringify(L_ALL[v[0]][v[1]]) !== JSON.stringify(v[2])) throw new Error(`lots: ${k} is ${JSON.stringify(L_ALL[v[0]][v[1]])}, not the ledger's ${JSON.stringify(v[2])}`);
/* Row 71: inside or outside the town limits, houses with no HOA fee matched to a parcel. */
const outsideTown = (key) => { const t = Object.fromEntries(LOTS.byArea[key].noFee.insideTown); return [t["outside any town"] || 0, Object.values(t).reduce((x, y) => x + y, 0)]; };
for (const [k, want] of [["Aynor", [20, 23]], ["Loris", [54, 71]], ["Conway", [79, 121]]]) if (JSON.stringify(outsideTown(k)) !== JSON.stringify(want)) throw new Error(`${k}: outside the town ${outsideTown(k)} is not the ledger's ${want}`);
/* Row 73: Surfside Beach and Garden City, oceanfront, ocean view or second row. */
const SURF_OCEAN = [LOTS.byArea["Surfside Beach and Garden City"].noFee.oceanfrontViewOrSecondRow, LOTS.byArea["Surfside Beach and Garden City"].noFee.listings,
  LOTS.byArea["Surfside Beach and Garden City"].withFee.oceanfrontViewOrSecondRow, LOTS.byArea["Surfside Beach and Garden City"].withFee.listings];
if (JSON.stringify(SURF_OCEAN) !== JSON.stringify([22, 56, 1, 47])) throw new Error(`Surfside ocean counts ${SURF_OCEAN} are not the ledger's`);
/* Rows 75 to 77 (round 7, pending verification): the homes in each area, from data/no-hoa-lots.json. The same
   check: the build stops if the file no longer gives the ledger's counts. [field, area, value] */
const ROUND7 = [
  ["listings", "Aynor", 30], ["builtSince2024", "Aynor", 17], ["notInSubdivision", "Aynor", 28],
  ["listings", "Loris", 96], ["builtSince2024", "Loris", 60], ["notInSubdivision", "Loris", 94],
  ["listings", "North Myrtle Beach", 135], ["builtBefore1990", "North Myrtle Beach", 84], ["withinHalfMileOfBeach", "North Myrtle Beach", 101],
  ["listings", "Surfside Beach and Garden City", 56], ["withinHalfMileOfBeach", "Surfside Beach and Garden City", 47],
  ["listings", "Murrells Inlet", 56], ["withinOneMileOfBeach", "Murrells Inlet", 28], ["heatedSqftMedian", "Murrells Inlet", 2433],
  ["listings", "Conway", 162], ["builtSince2024", "Conway", 58], ["notInSubdivision", "Conway", 114],
  ["listings", "Myrtle Beach (not Carolina Forest)", 131], ["builtBefore1990", "Myrtle Beach (not Carolina Forest)", 61], ["withinHalfMileOfBeach", "Myrtle Beach (not Carolina Forest)", 59],
  ["listings", "Little River", 22], ["builtSince2024", "Little River", 7],
];
for (const [k, area, want] of ROUND7) if (LOTS.byArea[area].noFee[k] !== want) throw new Error(`${area}: ${k} is ${LOTS.byArea[area].noFee[k]}, not the ledger's ${want}`);
for (const [area, want] of [["Little River", [17, 17]], ["Murrells Inlet", [24, 24]]]) if (JSON.stringify(outsideTown(area)) !== JSON.stringify(want)) throw new Error(`${area}: outside any town ${outsideTown(area)} is not the ledger's ${want}`);
const HEATED_MI = LOTS.byArea["Murrells Inlet"].noFee.heatedSqftMedian;
/* Rows 82 to 85 (round 8, pending verification): the four price bands. [houses, median sqft, median year,
   median lot acres, within half a mile of the beach, built 2024 or later] */
const BAND_WANT = { "under 250k": [57, 1232, 1984, 0.26, 1, 8], "250k-500k": [279, 1623, 2008, 0.39, 32, 112],
  "500k-750k": [131, 2067, 1996, 0.25, 47, 34], "750k+": [221, 3090, 2003, 0.28, 141, 47] };
const BAND = Object.fromEntries(BANDS.map((b) => [b.band, b]));
for (const [k, w] of Object.entries(BAND_WANT)) {
  const b = BAND[k], got = [b.houses, b.medianSqft, b.medianYearBuilt, b.medianLotAcres, b.withinHalfMileOfBeach, b.builtSince2024];
  if (JSON.stringify(got) !== JSON.stringify(w)) throw new Error(`price band ${k}: ${got} is not the ledger's ${w}`);
}
if (BANDS.reduce((t, b) => t + b.houses, 0) !== 688) throw new Error("the price bands do not add up to the 688 houses");
const sqftWords = (v) => `about ${(Math.round(v / 50) * 50).toLocaleString("en-US")} square feet`;
if (Object.values(LOTS.byArea).some((v) => v.noFee.heatedSqftMedian > HEATED_MI)) throw new Error("Murrells Inlet is no longer the largest by heated area");

/* Rounding a reader can say out loud (CRAFT 5). */
const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
const to5k = (v) => money(Math.round(v / 5000) * 5000);
const share = (a) => Math.round(100 * a.homes.noHoaFee / a.homes.listings);
/* A lot size in words a person says aloud (owner's eye, round 3): a sixth, a fifth, a quarter, a third, a half,
   three quarters, an acre. */
const acreWords = (v) => {
  /* A fraction only when it is that close to the real value (struck-check, round 10: 0.71 is not "three quarters",
     0.30 is not "a third"); a whole acre or a half within the same decimal; else one decimal. */
  const steps = [[1 / 6, "a sixth of an acre", 0.02], [0.2, "a fifth of an acre", 0.02], [0.25, "a quarter acre", 0.02], [1 / 3, "a third of an acre", 0.02],
    [0.5, "half an acre", 0.035], [0.75, "three quarters of an acre", 0.02], [1, "an acre", 0.1]];
  const hit = steps.find(([x, , tol]) => Math.abs(x - v) <= tol);
  if (hit) return `about ${hit[1]}`;
  const d = Math.round(v * 10) / 10;
  return `about ${d} acre${d === 1 ? "" : d > 1 ? "s" : ""}`;
};

/* The day the homes for sale were counted, from the data file (never typed). */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNTED = (([y, m, d]) => `${MONTHS[m - 1]} ${d}, ${y}`)(DATA.asOf.split("-").map(Number));

/* ---------------------------------------------------------------------------- */
/* Pictures and tables                                                            */

/* The map: each area's name with its share of homes for sale listed with no HOA fee. */
const TOWN = Object.fromEntries(loadGeo2().towns.map((t) => [t.name, t]));
/* The eight areas with homes for sale with no HOA fee, numbered in the order of the list below (round 7).
   Carolina Forest has none for sale, so it is not on the map or the list; the table and one line say so. */
const ORDER = ["Aynor", "Loris", "Conway", "North Myrtle Beach", "Surfside Beach and Garden City", "Murrells Inlet", "Myrtle Beach (not Carolina Forest)", "Little River"];
const PLACES = ORDER.map((k) => AREAS.find((a) => a.key === k));
if (PLACES.some((a) => !a || !(a.homes.noHoaFee > 0)) || AREAS.filter((a) => a.homes.noHoaFee > 0).length !== ORDER.length) throw new Error("the numbered list does not match the areas with homes listed with no HOA fee");
const ID = { "Aynor": "aynor", "Loris": "loris", "North Myrtle Beach": "north-myrtle-beach", "Surfside Beach and Garden City": "surfside-and-garden-city",
  "Murrells Inlet": "murrells-inlet", "Conway": "conway", "Myrtle Beach (not Carolina Forest)": "myrtle-beach", "Little River": "little-river" };
const MAP = placesMap("Homes for sale with no HOA fee, by area",
  PLACES.map((a) => ({ name: `${a.map} ${share(a)}%`, lat: TOWN[a.town].lat, lon: TOWN[a.town].lon, href: `#${ID[a.key]}` })),
  { caption: "Map of the eight areas, numbered as in the list below, with the share of homes for sale in each that are listed with no HOA fee." });
const num = (key) => PLACES.findIndex((a) => a.key === key) + 1;
const area = (key) => AREAS.find((a) => a.key === key);
const lotOf = (key) => acreWords(area(key).lots.noFee.lotAcresMedian);
const priceOf = (key) => to5k(area(key).houses.medianListPriceNoFee);

/* The table by area: share, typical list price and typical lot of a house for sale with no HOA fee. */
const areaTable = () => compareCards(AREAS.map((a) => ({
  name: a.name, href: a.href,
  cells: {
    share: `${share(a)}%`,
    price: VERIFIED.price[a.key] ? to5k(a.houses.medianListPriceNoFee) : "None for sale",
    lot: a.lots.noFee.parcelMatched >= 10 ? acreWords(a.lots.noFee.lotAcresMedian).replace(/^about /, "") : (a.lots.noFee.listings ? "Too few to say" : "None for sale"),
  },
})), [
  { key: "share", label: "Homes with no HOA fee", num: true },
  { key: "price", label: "Typical list price", num: true },
  { key: "lot", label: "Typical lot" },
], { caption: "Houses for sale with no HOA fee, by area", nameLabel: "Area" });

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

const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css() + "<style>.c3-areamap figure{max-width:600px!important}</style>";
/* Made at load time: mkpage reads pageImages before it builds the sections. The Aynor lot is the page's own
   picture of "room" and its share image (its record has crops). The Cherry Grove photo is the labelled copy
   made for best-neighborhoods (Beach, Canals, Salt marsh), with this page's caption: the flood fact (row 74). */
const AYNOR_LOT = ph.aerial("aynor-country-lot", "Houses on lots of about an acre along a country road outside Aynor, from the air. The orange line is one lot.",
  { closeUp: true });
ph.share("aynor-country-lot");
const CHERRY = ph.aerial("cherry-grove-canals-from-above", "Cherry Grove from the air. Almost every home here is in a high-risk flood zone.");
/* One photo per area (round 7). Reused records keep their own credit; the captions are this page's. Ground
   photos from the photo partner will replace these later (templates/photo-request-email.md). */
const LORIS_PHOTO = ph.aerial("loris-downtown", "Main Street in downtown Loris.", { closeUp: true });
const SURF_PHOTO = ph.aerial("surfside-beach-from-above", "The ocean side of Surfside Beach from the air, from US 17 Business to the beach.");
const INLET_PHOTO = ph.aerial("murrells-inlet-boats", "Fishing boats at a marina in Murrells Inlet.", { closeUp: true });
const CONWAY_PHOTO = ph.aerial("conway-riverwalk-boardwalk", "The Riverwalk in downtown Conway, on the Waccamaw River.", { closeUp: true });
const MB_PHOTO = ph.aerial("myrtle-beach-older-streets-from-above", "Houses on older streets between US 17 Business and the beach in Myrtle Beach, from the air.");
const LR_PHOTO = ph.aerial("little-river-waterway-from-above", "Little River from the air: streets of houses beside the salt marsh and the Intracoastal Waterway.");

/* Sources. */
const CONDO_LAW = "https://www.scstatehouse.gov/code/t27c031.php";
const DISCLOSURE_LAW = "https://www.scstatehouse.gov/code/t27c050.php";
const DEEDS = "https://www.horrycountysc.gov/departments/register-of-deeds/";
const SWA = "https://www.solidwasteauthority.org/residential.html";
const MB_TRASH = "https://www.cityofmyrtlebeach.com/departments/public_works_department/solid_waste_and_recycling_division.php";
const PONDS = "https://horrycountysc.gov/news/articles/top-tips-for-stormwater-pond-maintenance/";
const COUNTY_MAP = "https://www.horrycountysc.gov/land-info/";
const MAP_YOUR_MOVE = "https://www.horrycountysc.gov/apps/mapyourmove";
const HORRY_927 = "https://library.municode.com/sc/horry_county/codes/code_of_ordinances?nodeId=COOR_APXBZO_ARTIXCOUS_S927HOOC";
const CLOSING = "https://www.sccourts.org/media/opinions/HTMLFiles/SC/25508.htm";
const FEMA = "https://msc.fema.gov/portal/home";
const MUNI = "https://library.municode.com/sc/";
const HORRY_CODE = `${MUNI}horry_county/codes/code_of_ordinances?nodeId=COOR_CH13OFMIPR_ARTIINGE_S13-12PRPA`;
const LANDINGS = "https://www.horrycountysc.gov/departments/parksandrecreation/boat-landings/";
const HOEDOWN_LAW = "https://www.scstatehouse.gov/code/t53c003.php";
const LORIS_CITY = "https://cityoflorissc.com/about-us";
const SHAG_LAW = "https://www.scstatehouse.gov/code/t01c001.php";
const SCE = "https://www.scencyclopedia.org/sce/entries/";
const MARSHWALK = "https://www.marshwalk.com/";
const BLUE_CRAB = "https://www.bluecrabfestival.org/";
const LORIS_CLOCK = "https://www.scpictureproject.org/horry-county/loris-town-clock.html";
const CITY_HALL = "https://schpr.sc.gov/index.php/Detail/objects/S10817726018";
const SURF_PIER = "https://www.wmbfnews.com/2024/03/14/surfside-beach-pier-officially-open";
const MB_STATE_PARK = "https://southcarolinaparks.com/myrtle-beach";
const CANALS = "https://www.myhorrynews.com/news/local/north_myrtle_beach/residents-still-paying-for-cherry-grove-dredge/article_1eb5bb32-3b9a-11e9-93e7-9f8ad503b643.html";
const SURF_TOWN_PIER = "https://www.surfsidebeach.org/212/Surfside-Beach-Fishing-Pier";
const HC_PARKS = "https://www.horrycountysc.gov/departments/parksandrecreation/parks/";

/* Words used more than once. */
const loris = AREAS.find((a) => a.key === "Loris");
const LABEL = "Get the list";
/* The example: its own arc, on this page's deciding fact (a town limit on a boat; rows 59, 64 and 68), with
   the services Chapter3 records: the agent reads the rules and filters the search for the buyer (stories.json
   "hoa-rental-bans-filtered"). Myrtle Beach: a boat over 16 feet may not sit in the front yard (row 59). */
const STORY = [
  "<strong>Example:</strong> Teresa wants a home with no HOA and room for her 20-foot boat. She likes a house on a small lot with a Myrtle Beach address.",
  "Her Chapter3 agent finds the house on the county map, inside the city of Myrtle Beach. In the city, a boat that long may not be kept in the front yard, and that lot has no other room for it.",
  "The agent shows her houses just outside the city, where the county has no rule on where she parks the boat. Teresa makes an offer on one with a wide side yard.",
];

/* One numbered area (round 7; CRAFT 3, "A list of places is read one place at a time"): the headline with
   the number, the place and what it gives you; a few short paragraphs; one photo; the trade-off and the
   price, one line each. */
const ENTRY_CSS = "<style>.c3-entry-facts{max-width:720px;margin:.4rem 0 .6rem;padding:.8rem 1rem;border-left:3px solid var(--brass)}"
  + ".c3-entry-facts p{margin:0 0 .35rem!important;color:var(--navy)!important}.c3-entry-facts p:last-child{margin-bottom:0!important}</style>";
const go = (key) => h.a(`#${ID[key]}`, `${num(key)}. ${area(key).name.replace(", outside Carolina Forest", "")}`);
function entry(key, headline, paras, photo, tradeOff) {
  const a = area(key), n = num(key);
  if (!n) throw new Error(`${key} is not on the list`);
  return { h2: `${n}. ${headline}`, toc: `${n}. ${a.map}`, id: ID[key], html: () =>
    paras.map((t) => h.p(t)).join("") + photo +
    `<div class="c3-entry-facts"><p><strong>With no HOA fee:</strong> typical lot ${lotOf(key)}; typical list price about ${priceOf(key)}.<br><strong>The trade-off:</strong> ${tradeOff}</p></div>` };
}
/* ItemList JSON-LD for the eight numbered areas (round 8; ROUND-8 item 6). */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "Areas near Myrtle Beach with homes for sale with no HOA fee", numberOfItems: PLACES.length,
  itemListElement: PLACES.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name.replace(", outside Carolina Forest", ""), url: `https://chapter3realty.com${SELF}#${ID[a.key]}` })) })}</script>`;

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Aynor lot aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Homes With No HOA in Myrtle Beach: Where, Cost, Pros and Cons",
  description: "Where to find homes with no HOA fee around Myrtle Beach, what they cost, lot sizes, flood zones, the pros and cons, and the town rules for a boat or work truck.",
  ogTitle: "Homes with no HOA around Myrtle Beach: where they are, what they cost and what you get",
  crumb: "Homes With No HOA",
  eyebrow: "Buying a home",
  h1: "Where can you buy a home with no HOA in Myrtle Beach?",
  h1em: "Where to look, what it costs and what you get.",
  sub: "Most homes for sale with no HOA fee are on ordinary streets outside planned neighborhoods. Loris and Aynor have the highest share and the biggest lots.",
  heroMedia: glance([
    { icon: "home", label: "Inland", text: "Half an acre to an acre" },
    { icon: "beach", label: "Near the beach", text: "Older houses near the sand" },
    { icon: "dock", label: "A boat at home", text: "Within each town's rules" },
  ]),
  /* The first offer is a box (owner, 2026-10-14: "make the first CTA more of a CTA"; mkpage-offer-box.patch). */
  heroCta: { title: "Get the homes with no HOA fee in your price range.", label: LABEL, href: "/contact/",
    text: "Tell us your price range. One of our agents sends the homes for sale, and we check the deed, the lot map and the HOA papers for any home you like." },
  author: "devin",
  shortAnswer: [
    "Most homes with no HOA fee are in Aynor, Loris and Conway, or on older beach streets in North Myrtle Beach, Surfside Beach and Murrells Inlet. About a quarter of the homes for sale near Myrtle Beach have no homeowners association (HOA) fee.",
    "Inland, most are houses on big lots, many of them new. Near the beach, most are older houses.",
    `With no HOA, you can keep a boat or a work truck at home, within ${h.a("#boats-and-work-trucks", "each town's rules")}. Houses with no HOA fee are listed at about ${to5k(ALL.detachedHouses.medianListPriceNoFee)}.`,
  ],
  sections: [
    { h2: "Where are the homes with no HOA fee?", toc: "Where they are", html: () =>
      CSS + ENTRY_CSS +
      h.p("Houses listed with no HOA fee are spread over eight areas, from big lots inland to old beach streets.") +
      `<div class="c3-areamap">${MAP.html}</div>` +
      h.p(`To live near the beach, see ${go("North Myrtle Beach")}, ${go("Surfside Beach and Garden City")}, ${go("Murrells Inlet")} and ${go("Myrtle Beach (not Carolina Forest)")}. For a boat near the waterway, see ${go("Little River")}.`) +
      h.p("Every home for sale in Carolina Forest has an HOA fee.") +
      h.p(`Inland, in ${go("Aynor")}, ${go("Loris")} and ${go("Conway")}, many houses for sale with no HOA fee are new, and most are outside the town limits and not in a subdivision. From there, the beach is a drive of 25 to 45 minutes.`) },

    { h2: "What can you buy with no HOA fee for under $250,000?", toc: "Under $250,000", id: "under-250000", html: () =>
      h.p(`About ${Math.round(BAND["under 250k"].houses / 10) * 10} houses, most of them older and smaller, and almost all inland. About half were in and around Conway, some of them on streets in central Conway, such as Temple Street and Cherry Street.`) +
      h.p(`In Socastee, they were in Rosewood Estates and Bridge Creek, built in the late 1970s and 1980s. Near Loris, a row of new houses on Blue Moon Drive was listed in this band.`) +
      h.p(`Expect a house from about ${BAND["under 250k"].medianYearBuilt}, with ${sqftWords(BAND["under 250k"].medianSqft)} on ${acreWords(BAND["under 250k"].medianLotAcres).replace(/^about /, "")}. Almost none were near the beach.`) },

    { h2: "What can you buy with no HOA fee for $250,000 to $500,000?", toc: "$250,000 to $500,000", id: "250000-to-500000", html: () =>
      h.p(`This is the biggest band, with about ${Math.round(BAND["250k-500k"].houses / 10) * 10} houses. It is where the land and the new houses are. About 4 in 10 in this band were built in 2024 or later.`) +
      h.p("Around Loris, new houses were listed on Highway 66. In Aynor, many are in and near the town itself.") +
      h.p("Near the beach, the same money buys an older house. In North Myrtle Beach, houses from the mid-1980s in Ocean Drive Estates, on 3rd Avenue South, were in this band.") +
      h.p(`Half were built in ${BAND["250k-500k"].medianYearBuilt} or later. The middle house has a little over a third of an acre and ${sqftWords(BAND["250k-500k"].medianSqft)}.`) },

    { h2: "What can you buy with no HOA fee for $500,000 to $750,000?", toc: "$500,000 to $750,000", id: "500000-to-750000", html: () =>
      h.p(`About ${Math.round(BAND["500k-750k"].houses / 10) * 10} houses. Here a beach house and a bigger inland house cost about the same. About 1 in 3 was half a mile or less from the beach; in the next band up, 2 in 3 were.`) +
      h.p("In North Myrtle Beach, this band buys a house in Cherry Grove, Windy Hill or Ocean Drive; in Cherry Grove most were built before 1990. In Murrells Inlet, most were in the Georgetown County part. In Conway, it buys a larger house from the 1970s in Coastal Heights, south of town.") +
      h.p(`The middle house here dates from about ${BAND["500k-750k"].medianYearBuilt}, with ${sqftWords(BAND["500k-750k"].medianSqft)} on ${acreWords(BAND["500k-750k"].medianLotAcres).replace(/^about /, "about ")}.`) },

    { h2: "What can you buy with no HOA fee for $750,000 and up?", toc: "$750,000 and up", id: "750000-and-up", html: (bg) =>
      h.p(`About ${Math.round(BAND["750k+"].houses / 10) * 10} houses, most of them near the ocean.`) +
      h.p("Some are on Ocean Boulevard in Myrtle Beach and North Myrtle Beach and on South Waccamaw Drive in Garden City. Others were listed with no fee in Pine Lakes and Plantation Point in Myrtle Beach and in Tilghman Estates in North Myrtle Beach.") +
      h.p(`Most are big: the middle house is ${sqftWords(BAND["750k+"].medianSqft)}.`) +
      h.cta("Get the homes with no HOA fee in your price band.", "Tell us your band and the areas you like. One of our agents sends the homes for sale in it.", LABEL, "/contact/", bg) },

    entry("Aynor", "Aynor: new houses on about an acre", [
      `Aynor is a small town northwest of Conway. Each September it holds the Aynor Harvest Hoe-Down, a festival the Pilot Club of Aynor started in 1979. ${h.ext(HOEDOWN_LAW, "State law")} names the third Saturday in September for it.`,
      `Here you get land: most lots are about an acre, with room beside the house for a boat or a camper. The county's ${h.ext(LANDINGS, "Galivants Ferry Landing")}, a ramp on the river, is about 6 minutes from the center of town.`,
      "Almost no home inside the town of Aynor is in a high-risk flood zone on FEMA's flood map.",
    ], AYNOR_LOT, "the nearest hospital, Conway Medical Center, is about 30 minutes away by car."),

    entry("Loris", "Loris: new houses on about 0.7 acre, near a small downtown", [
      `In the late 1800s Loris was a farm center for the country around it. It grew up around a railroad depot, on a line a lumber company laid to carry timber, and became a town in 1902. Its ${h.ext(LORIS_CLOCK, "town clock")} is on Main Street at Meeting Street.`,
      `On the third Saturday in October, the ${h.ext(LORIS_CITY, "Loris Bog-Off")} fills downtown with vendors, a car show and two stages of live music. Its namesake dish is chicken bog: chicken, rice and sausage cooked together.`,
      "Loris has its own hospital, McLeod Loris, in town. Its lots fall between Aynor's acre and Conway's half acre.",
    ], LORIS_PHOTO, "Coastal Grand Mall in Myrtle Beach is a drive of about 50 minutes."),

    entry("Conway", "Conway: half an acre near the Waccamaw River and an old downtown", [
      `Conway began in the 1730s as Kingston Village, on a bluff of the Waccamaw River, and it is the county seat. It was ${h.ext(SCE + "conway/", "later Conwayborough")}, then Conway. Its Riverwalk runs along the river downtown.`,
      "Lots are about half an acre, a little smaller than in Aynor or Loris, and you are closest to the beach of the three. About a third of the houses for sale were built in 2024 or later.",
      `${h.ext(CITY_HALL, "City Hall")} was the county courthouse, finished in 1825. It is a two-story brick building with columns in the old downtown.`,
    ], CONWAY_PHOTO, "inside the city, a big business truck may not park on a city street."),

    entry("North Myrtle Beach", "North Myrtle Beach: older beach houses in four old beach towns", [
      `North Myrtle Beach began in 1968, when Cherry Grove, Ocean Drive, Crescent Beach and Windy Hill joined as one city. In the Ocean Drive and Crescent Beach area, a pavilion drew crowds who danced the ${h.ext(SCE + "shag/", "shag")}. South Carolina made it the ${h.ext(SHAG_LAW, "official state dance")} in 1984. The city holds free Music on Main concerts on Main Street on Thursdays each summer.`,
      "The houses for sale are mostly in those old beach towns, and most are within half a mile of the beach. About 6 in 10 were built before 1990.",
      `Cherry Grove's canals were ${h.ext(CANALS, "created as early as the 1950s")}. By the 1970s, some were filling up. Left alone, they would have turned back into marsh and mudflats. The city has dredged canals there twice since 2016, so owners' boats can reach House Creek and the Intracoastal Waterway at high and low tide. Owners of about 415 properties in the canal district pay the city about $1,700 a year for that work.`,
    ], CHERRY, `near the water, flood insurance can cost more than an HOA fee. In Cherry Grove it usually costs about $1,300 a year on a home you live in. We check ${h.ext(FEMA, "the government's flood map")} for any home you like.`),

    entry("Surfside Beach and Garden City", "Surfside Beach and Garden City: houses within half a mile of the beach", [
      `Surfside Beach owns its ${h.ext(SURF_TOWN_PIER, "fishing pier")}: a concrete pier 814 feet long that ${h.ext(SURF_PIER, "opened in 2024")}, after a hurricane destroyed the old one. Walking out on it is free, and it has two restaurants and an ice cream shop.`,
      `Most houses for sale here are within half a mile of the beach, and about 4 in 10 face the ocean, see it or are one row back. How a rice plantation called The Ark became Surfside Beach is in our guide to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods near Myrtle Beach")}.`,
      "From Garden City, the MarshWalk restaurants are about 7 minutes south by car.",
    ], SURF_PHOTO, "on the ocean side of Surfside Beach, about 1 in 4 homes is in a high-risk flood zone. With a mortgage, your lender will almost always require flood insurance. A cash buyer can choose."),

    entry("Murrells Inlet", "Murrells Inlet: bigger houses near the seafood restaurants and Brookgreen Gardens", [
      `Old maps call it Murray's Inlet or Morrall's Inlet, the second after John Morrall, who bought a tract there in 1731. People first came to the inlet for oyster roasts and shore dinners, and ${h.ext(SCE + "murrells-inlet/", "seafood restaurants")} followed. The ${h.ext(MARSHWALK, "MarshWalk")} is a half-mile boardwalk along the water, lined with restaurants.`,
      `The sculptor Anna Hyatt Huntington and her husband, Archer, created ${h.ext(SCE + "brookgreen-gardens/", "Brookgreen Gardens")} in 1931 on four old rice plantations. In the twentieth century a fleet of charter and party boats grew up at the inlet, and its captains took visiting anglers offshore.`,
      `The typical house for sale here is about ${(Math.round(HEATED_MI / 100) * 100).toLocaleString("en-US")} square feet, the largest of the eight areas.`,
    ], INLET_PHOTO, "Murrells Inlet is not a town, and part of it is in Georgetown County, with its own tax bill and rules."),

    entry("Myrtle Beach (not Carolina Forest)", "Myrtle Beach: older houses near the ocean", [
      `Myrtle Beach began at the end of a logging railroad from Conway. In 1901 the railroad company ${h.ext(SCE + "myrtle-beach/", "began selling oceanfront lots")} for $25 each. In the 1920s the Woodside family bought a large tract and built the Pine Lakes golf course; their Ocean Forest Hotel opened in 1930.`,
      "Outside Carolina Forest, almost half of the houses for sale date from before 1990.",
      `On the south side of the city, ${h.ext(MB_STATE_PARK, "Myrtle Beach State Park")} opened in 1936, the first of South Carolina's state parks to open. It has a mile of undeveloped beach, a fishing pier and a nature trail.`,
    ], MB_PHOTO, "about half are inside the city, where the city's limits on boats and work trucks apply."),

    entry("Little River", "Little River: a boat on the Intracoastal Waterway", [
      `Little River is on the Intracoastal Waterway at the north end of the Grand Strand. Its waterfront on Mineola Avenue holds the ${h.ext(BLUE_CRAB, "Blue Crab Festival")} each May, the weekend after Mother's Day.`,
      `Little River is not a town, so the ${h.a("#boats-and-work-trucks", "county's rules")} apply to a boat on your lot. The county's ${h.ext(LANDINGS, "T. Craig Campbell boat landing")} on the waterway is about 7 minutes from the center.`,
      `${h.ext(HC_PARKS, "Vereen Memorial Historical Gardens")}, a county park on the waterway, has nature trails and boardwalks through its gardens and along the water. A small piece of the original Kings Highway, a colonial route between Boston and Charleston, is still at its front.`,
    ], LR_PHOTO, "none of the houses for sale here is within a mile of the beach."),

    { h2: "How do the eight areas compare?", toc: "The areas side by side", html: () =>
      h.p(`The typical asking price is about ${to5k(ALL.detachedHouses.medianListPriceNoFee)} with no HOA fee, against about ${to5k(ALL.detachedHouses.medianListPriceWithFee)} with a fee. Many of the houses listed with no fee are on the ocean side of US 17 Business, the coast road, which helps explain why they cost more.`) +
      areaTable() +
      h.p(`With no HOA fee, you skip about $${(Math.round(HOUSE_FEE.medianMonthlyHoaFee * 12 / 100) * 100).toLocaleString("en-US")} a year, the typical fee on a house here. Our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")} compares the towns.`) },

    { h2: "What do you gain and give up with no HOA?", toc: "Pros and cons", html: (bg) =>
      h.p("No HOA means no HOA fee and no HOA rules. It also means no shared pool.") +
      prosCons([
        "No monthly HOA fee, and no surprise HOA bill for a big repair.",
        "No HOA to ask before you put up a fence, add a shed or keep a boat on the lot. Town rules on boats still apply.",
        "No HOA rule against renting the home out. In our experience, many HOAs here do not allow renting a house out at all.",
      ], [
        "No shared pool, clubhouse or common areas. On a house, an HOA fee often includes these.",
        "No HOA rules for the houses next door either.",
        "A home with no HOA can still have deed restrictions.",
      ], { bg }) +
      h.p(`If you want a pool, a clubhouse or a gate, you pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")} and to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} show where to look. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} shows one Carolina Forest neighborhood.`) },

    { h2: "Can you keep a boat or a work truck at a home with no HOA?", toc: "Boats and work trucks", id: "boats-and-work-trucks", html: (bg) =>
      h.p(`Yes, on your own lot. Outside the towns, the county has no rule on where you keep your own boat, trailer or camper on your lot. If you run a business from the house, the county allows ${h.ext(HORRY_927, "two service vehicles per acre")} on most lots. Inside a town, the town's limits in the table apply.`) +
      parkingTable() +
      h.p(`In the towns, you can leave a boat in the driveway for a day to load and unload. On county roads, the county ${h.ext(HORRY_CODE, "bans parking")} only where it posts a sign. The ${h.ext(CLOSING, "closing attorney")}'s title search finds any deed restriction on a boat or a truck before you buy.`) +
      story(STORY, "", bg) },

    { h2: "What do you take care of yourself with no HOA?", toc: "What you take care of", html: () =>
      h.p("With no HOA, you take care of trash pickup, your yard and any pond on your land. On a house here, most HOA fees include the shared areas, and more than half include trash pickup and a pool.") +
      h.ul([
        `Inside the Myrtle Beach city limits, the ${h.ext(MB_TRASH, "city picks up trash")}, recycling and yard waste once a week. It costs about $34 a month on the city utility bill.`,
        `North Myrtle Beach, Conway, Surfside Beach, Loris, Aynor, Briarcliffe Acres and Atlantic Beach also ${h.ext(SWA, "offer trash service")}.`,
        "Outside the towns, the county does not pick up at the curb. You arrange pickup yourself, or use one of the county's drop-off centers, which are only for homes outside the towns.",
      ]) +
      h.p(`A Myrtle Beach mailing address does not mean the home is inside the city. We look up every home you like on the county's ${h.ext(MAP_YOUR_MOVE, "Map Your Move map")}, which shows the town for each lot.`) +
      h.p(`If the lot has a ${h.ext(PONDS, "stormwater pond")}, it is yours to keep working. The county asks owners to inspect a pond twice a year and after big storms, clear out debris and cut back the plants.`) +
      h.p("The county keeps up only the roads it owns, and the state keeps up state roads. A private road is kept up by whoever its papers name, such as a property owners association. We find out who that is before you make an offer.") },

    { h2: "Can you buy a condo with no HOA fee in Myrtle Beach?", toc: "Condos", html: () =>
      h.p(`Almost never. Of about ${(Math.round(CONDO.count / 100) * 100).toLocaleString("en-US")} condos for sale around Myrtle Beach, only one was listed with no HOA fee. ${h.ext(CONDO_LAW, "South Carolina law")} makes condo owners share the cost of the building.`) },

    { h2: "What is a typical HOA fee in Myrtle Beach?", toc: "Typical HOA fees", html: () =>
      h.p(`The typical HOA fee is $${HOUSE_FEE.medianMonthlyHoaFee} a month on a house and about $${Math.round(CONDO.median / 50) * 50} a month on a condo. A condo fee is higher because it includes the building's insurance, water and sewer, trash and a pool.`) +
      h.p(`Our guides to ${h.a("/hoa/", "what HOA fees cover")}, ${h.a("/hoa/reserves/", "HOA savings for big repairs")} and ${h.a("/hoa/special-assessments/", "special assessments")} explain each part.`) },

  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Can I park a boat at my house in Myrtle Beach?", a: "Yes, on your own lot. Inside the city of Myrtle Beach, a boat over 16 feet may not be kept in the front yard. Boats and trailers may not park on residential streets. Outside the towns, you can keep your own boat, trailer or camper anywhere on your lot." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address are listed with no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "Why are HOA fees so high in Myrtle Beach?", a: "Condo fees are high because they include the cost of the building: its insurance, water and sewer, trash and a pool. Fees on houses are much lower, because most include only shared areas, trash and a pool." },
    { q: "Where can you buy a house with land and no HOA near Myrtle Beach?", a: "Inland. A house for sale with no HOA fee in Aynor usually sits on about an acre. In Loris it is about 0.7 acre, and in Conway about half an acre. About 1 in 3 houses with no HOA fee has half an acre or more." },
    { q: "Can you buy a house with no HOA under $250,000 near Myrtle Beach?", a: "Yes. About 60 were listed, most of them older, smaller houses inland, in and around Conway, in Socastee and near Loris. Almost none are near the beach." },
    { q: "Does a listing with no HOA fee mean the home has no HOA?", a: "Not always. A blank fee means no fee was listed. A few homes listed with no fee are in a neighborhood with a club you can choose to join and pay." },
    { q: "Is a campground home with no HOA fee a no-HOA home?", a: "No. A campground home has no HOA fee, but it sits on leased land, and you pay a yearly lease for the land under it." },
  ],
  sources: [
    { name: "town and county codes", href: `${MUNI}horry_county/codes/code_of_ordinances` },
    { name: "S.C. disclosure law", href: DISCLOSURE_LAW },
    { name: "Register of Deeds", href: DEEDS },
    { name: "county parcels", href: COUNTY_MAP },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: `Homes for sale in the local MLS, on ${COUNTED}; list prices. Areas are mailing addresses. Lot sizes are from county parcel maps. Homes on leased land are left out. Flood cost is FEMA's middle policy price. Not legal advice.`,
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Get the homes with no HOA fee in your price range.", p: "Tell us your price range and the areas you like. One of our agents will send you the homes for sale with no HOA fee.", label: LABEL, href: "/contact/" },
  keywords: "Myrtle Beach homes no HOA, houses for sale no HOA Myrtle Beach, no HOA homes under 250k Myrtle Beach, no HOA homes Conway SC, no HOA homes Loris SC, no HOA homes North Myrtle Beach, Myrtle Beach homes with land, park boat at house Myrtle Beach, condos no HOA Myrtle Beach, average HOA fees Myrtle Beach",
  about: "Homes for sale with no homeowners association fee around Myrtle Beach, South Carolina",
};
