/* /buyers/no-hoa-homes/ - where to find a home with no HOA fee around Myrtle Beach, whether you can keep a
 * boat or a work truck there, how much room the lots have, what the homes cost, and how to check one.
 *
 * Batch 2026-10-b, page 3.
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
const BB = [path.join(__dirname, "..", "tools", "blog-brain"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const { compareCards } = require(path.join(BB, "tools", "compare.js"));
const { loadGeo2 } = require(path.join(BB, "tools", "area-map.js"));

/* A batch file: the website's data/ (where an upload package puts it), else the batch folder. */
const BATCH = path.join(BB, "batches", "2026-10-b");
const dataFiles = (name) => [path.join(__dirname, "..", "data", name), path.join(BATCH, "data", name)].filter((f) => fs.existsSync(f));
const DATA = JSON.parse(fs.readFileSync(dataFiles("no-hoa.json")[0], "utf8"));
const LOTS = JSON.parse(fs.readFileSync(dataFiles("no-hoa-lots.json")[0], "utf8"));
/* Photo records: every photos.json found, merged, so this page finds its record beside another batch's. */
const PHOTOS = [];
for (const f of dataFiles("photos.json")) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
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
    "Conway": [172, 738], "Myrtle Beach (not Carolina Forest)": [136, 698], "Little River": [22, 201], "Carolina Forest": [0, 258] },
  price: { "Aynor": [372000, 289490], "Loris": [368450, 279990], "North Myrtle Beach": [759900, 670000], "Surfside Beach and Garden City": [983450, 524900],
    "Murrells Inlet": [811950, 534950], "Conway": [379900, 329945], "Myrtle Beach (not Carolina Forest)": [625000, 475875], "Little River": [429950, 399900] },
};
for (const a of AREAS) {
  const [no, all] = VERIFIED.share[a.key];
  if (a.homes.noHoaFee !== no || a.homes.listings !== all) throw new Error(`${a.key}: the share is not the verified ${no} of ${all}`);
  if (VERIFIED.price[a.key] && (a.houses.medianListPriceNoFee !== VERIFIED.price[a.key][0] || a.houses.medianListPriceWithFee !== VERIFIED.price[a.key][1])) throw new Error(`${a.key}: the asking prices are not the verified ones`);
}
const ALL = OWNED.allNineAreas;
if (ALL.homes.noHoaFee !== 716 || ALL.homes.listings !== 2676) throw new Error("the headline share is not the verified 716 of 2,676");
if (ALL.detachedHouses.medianListPriceNoFee !== 514900 || ALL.detachedHouses.medianListPriceWithFee !== 414900) throw new Error("the overall asking prices are not the verified $514,900 and $414,900");
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
  lotAcres: { "Aynor": 1.06, "Loris": 0.71, "Conway": 0.51, "Myrtle Beach (not Carolina Forest)": 0.3, "Murrells Inlet": 0.24, "Little River": 0.23,
    "Surfside Beach and Garden City": 0.18, "North Myrtle Beach": 0.16, "Carolina Forest": null },
  /* Rows 70, 72 and 73: the nine areas together. [group, field, value] */
  all: {
    lotNoFee: ["noFee", "lotAcresMedian", 0.3], lotWithFee: ["withFee", "lotAcresMedian", 0.21],
    halfAcreNoFee: ["noFee", "lotHalfAcreOrMore", 172], matchedNoFee: ["noFee", "parcelMatched", 509],
    halfAcreWithFee: ["withFee", "lotHalfAcreOrMore", 115], matchedWithFee: ["withFee", "parcelMatched", 1732],
    oldNoFee: ["noFee", "builtBefore2000", 335], knownNoFee: ["noFee", "yearKnown", 693],
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
for (const [k, want] of [["Aynor", [20, 23]], ["Loris", [54, 71]], ["Conway", [84, 126]]]) if (JSON.stringify(outsideTown(k)) !== JSON.stringify(want)) throw new Error(`${k}: outside the town ${outsideTown(k)} is not the ledger's ${want}`);
/* Row 73: Surfside Beach and Garden City, oceanfront, ocean view or second row. */
const SURF_OCEAN = [LOTS.byArea["Surfside Beach and Garden City"].noFee.oceanfrontViewOrSecondRow, LOTS.byArea["Surfside Beach and Garden City"].noFee.listings,
  LOTS.byArea["Surfside Beach and Garden City"].withFee.oceanfrontViewOrSecondRow, LOTS.byArea["Surfside Beach and Garden City"].withFee.listings];
if (JSON.stringify(SURF_OCEAN) !== JSON.stringify([22, 56, 1, 47])) throw new Error(`Surfside ocean counts ${SURF_OCEAN} are not the ledger's`);

/* Rounding a reader can say out loud (CRAFT 5). */
const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
const to5k = (v) => money(Math.round(v / 5000) * 5000);
const share = (a) => Math.round(100 * a.homes.noHoaFee / a.homes.listings);
/* A lot size in words: a tenth of an acre, a fifth, a quarter, a third, a half, an acre. */
const acreWords = (v) => {
  const steps = [[0.1, "a tenth of an acre"], [0.15, "a seventh of an acre"], [0.2, "a fifth of an acre"], [0.25, "a quarter acre"], [0.33, "a third of an acre"], [0.5, "half an acre"], [0.75, "three quarters of an acre"], [1, "an acre"]];
  let best = steps[0];
  for (const s of steps) if (Math.abs(s[0] - v) < Math.abs(best[0] - v)) best = s;
  return `about ${best[1]}`;
};

/* The day the homes for sale were counted, from the data file (never typed). */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNTED = (([y, m, d]) => `${MONTHS[m - 1]} ${d}, ${y}`)(DATA.asOf.split("-").map(Number));

/* ---------------------------------------------------------------------------- */
/* Pictures and tables                                                            */

/* The map: each area's name with its share of homes for sale that show no HOA fee, so the map itself shows
   where the homes are (cold reader: "the map does not show me which places have the most"). */
const TOWN = Object.fromEntries(loadGeo2().towns.map((t) => [t.name, t]));
const MAP = placesMap("Share of homes for sale with no HOA fee",
  ["Loris", "Aynor", "Little River", "North Myrtle Beach", "Conway", "Carolina Forest", "Myrtle Beach", "Surfside Beach and Garden City", "Murrells Inlet"]
    .map((k) => AREAS.find((a) => a.key === k || a.name === k || a.town === k))
    .map((a) => ({ name: `${a.map} ${share(a)}%`, lat: TOWN[a.town].lat, lon: TOWN[a.town].lon })),
  { caption: "Map of the share of homes for sale in each area that show no HOA fee." });

/* The table by area: share, asking price and lot size of a house with no HOA fee (tools/compare.js: cards
   on a phone). */
const areaTable = () => compareCards(AREAS.map((a) => ({
  name: a.name, href: a.href,
  cells: {
    share: `${share(a)}%`,
    price: VERIFIED.price[a.key] ? to5k(a.houses.medianListPriceNoFee) : "None for sale",
    lot: a.lots.noFee.parcelMatched >= 10 ? acreWords(a.lots.noFee.lotAcresMedian).replace(/^about /, "") : (a.lots.noFee.listings ? "Too few to say" : "None for sale"),
  },
})), [
  { key: "share", label: "Homes with no HOA fee", num: true },
  { key: "price", label: "Typical asking price", num: true },
  { key: "lot", label: "Typical lot" },
], { caption: "Houses for sale with no HOA fee, by area", nameLabel: "Area" });

/* The parking rules, place by place (ledger rows 58 to 64). Short cells; the sentences under the table say
   the rest. */
const parkingTable = () => compareCards([
  { name: "Outside the towns", icon: "home", cells: { boat: "Anywhere on your lot", truck: "No county limit on your lot" } },
  { name: "Myrtle Beach", href: "/submarkets/myrtle-beach/", icon: "town", cells: { boat: "Not in the front yard", truck: "One, up to one ton" } },
  { name: "North Myrtle Beach", href: "/submarkets/north-myrtle-beach/", icon: "town", cells: { boat: "Beside or behind the house", truck: "None over 18,500 pounds" } },
  { name: "Conway", href: "/submarkets/conway/", icon: "town", cells: { boat: "Side yard, back yard or carport", truck: "Big ones off the street" } },
  { name: "Surfside Beach", href: "/submarkets/surfside-beach/", icon: "town", cells: { boat: "Two boats or trailers at most", truck: "One van or pickup, to 21 feet" } },
  { name: "Loris", icon: "town", cells: { boat: "Not by the front or side line", truck: "One, up to 2 tons" } },
], [
  { key: "boat", label: "A boat, camper or trailer" },
  { key: "truck", label: "A work truck at home" },
], { caption: "Where you can keep a boat or a work truck at a house", nameLabel: "Where the home is" });

const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css() + "<style>.c3-areamap figure{max-width:600px!important}</style>";
/* Made at load time: mkpage reads pageImages before it builds the sections. */
const CHERRY = ph.aerial("cherry-grove-from-above", "Cherry Grove in North Myrtle Beach, from the air: beach houses, houses along canals and the salt marsh.",
  { alt: "Cherry Grove in North Myrtle Beach from the air: the beach and part of a fishing pier at the left, rows of houses along canals, and a wide salt marsh with winding creeks" });

/* Sources. */
const CONDO_LAW = "https://www.scstatehouse.gov/code/t27c031.php";
const DISCLOSURE_LAW = "https://www.scstatehouse.gov/code/t27c050.php";
const DEEDS = "https://www.horrycountysc.gov/departments/register-of-deeds/";
const SWA = "https://www.solidwasteauthority.org/residential.html";
const MB_TRASH = "https://www.cityofmyrtlebeach.com/departments/public_works_department/solid_waste_and_recycling_division.php";
const PONDS = "https://horrycountysc.gov/news/articles/top-tips-for-stormwater-pond-maintenance/";
const COUNTY_MAP = "https://www.horrycountysc.gov/land-info/";
const CLOSING = "https://www.sccourts.org/media/opinions/HTMLFiles/SC/25508.htm";
const MUNI = "https://library.municode.com/sc/";
const MB_CODE = `${MUNI}myrtle_beach/codes/code_of_ordinances?nodeId=COOR_APXAZO_ART10PALORE_S1006SPLOUNAR`;
const NMB_CODE = `${MUNI}north_myrtle_beach/codes/code_of_ordinances?nodeId=COOR_CH23ZO_ARTVIIGESURE_S23-113OUSTPADI`;
const SURF_CODE = `${MUNI}surfside_beach/codes/code_of_ordinances?nodeId=VOII_CH17ZO_ARTIVSUDIRE_DIV2OREPA_S17-427NOVETRBO`;
const HORRY_CODE = `${MUNI}horry_county/codes/code_of_ordinances?nodeId=COOR_CH13OFMIPR_ARTIINGE_S13-12PRPA`;
const CONWAY_UDO = "https://www.conwaysc.gov/Current%20UDO%20(7.20.26).pdf";
const LORIS_CODE = "https://www.cityoflorissc.com/documents/58/Loris_Unified_Zoning_and_Land_Use-_Current_3-7-18_-.pdf";

/* Words used more than once. */
const loris = AREAS.find((a) => a.key === "Loris");
const surf = AREAS.find((a) => a.key === "Surfside Beach and Garden City");

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Cherry Grove aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Homes With No HOA in Myrtle Beach: Where, Cost, Pros and Cons",
  description: "Where to find homes with no HOA fee around Myrtle Beach, the town rules for a boat or work truck, lot sizes, what the homes cost, and the pros and cons.",
  ogTitle: "Homes with no HOA around Myrtle Beach: where they are, room for a boat or truck, and what they cost",
  crumb: "Homes With No HOA",
  eyebrow: "Buying a home",
  h1: "Where can you buy a home with no HOA in Myrtle Beach?",
  h1em: "Where to look, what it costs and where the boat can go.",
  sub: "Most homes for sale with no HOA fee are on ordinary streets, not in a planned neighborhood. Loris and Aynor have the most, and the biggest lots.",
  heroMedia: glance([
    { icon: "town", label: "Loris and Aynor", text: "Most show no fee" },
    { icon: "beach", label: "North Myrtle Beach", text: "Most show no fee" },
    { icon: "dollar", label: "Typical price", text: `About ${to5k(ALL.detachedHouses.medianListPriceNoFee).replace(/,000$/, ",000")}` },
  ]),
  heroCta: { label: "Get the list", href: "/contact/", text: "Tell us your price range, and we will send you the homes for sale with no HOA fee." },
  author: "devin",
  shortAnswer: [
    `About a quarter of the homes for sale around Myrtle Beach show no fee to a homeowners association (HOA), the group that runs a neighborhood and collects a monthly fee. A house with no HOA fee usually asks about ${to5k(ALL.detachedHouses.medianListPriceNoFee)}, and about ${to5k(loris.houses.medianListPriceNoFee)} in Loris and Aynor.`,
    "Loris and Aynor have the most room: a house with no HOA fee there usually has a lot of half an acre or more.",
    "With no HOA, you can keep a boat or a work truck at home. Each town still has its own rule on where a boat goes, and outside the towns the county sets no limit on your lot.",
  ],
  sections: [
    { h2: "Can you park a boat, a trailer or a work truck at a home with no HOA?", toc: "Boats and work trucks", html: (bg) =>
      CSS +
      h.p("Yes, on your own lot. Outside the towns, the county has no rule on where you keep your own boat, trailer or work truck on your lot. Inside a town, the town's rule decides where a boat goes and how big a work truck can be.") +
      parkingTable() +
      h.p(`Myrtle Beach counts a boat over 16 feet as a recreational vehicle, which ${h.ext(MB_CODE, "cannot sit in the front yard")}. ${h.ext(NMB_CODE, "North Myrtle Beach")} wants it in a carport or behind the front of the house. ${h.ext(CONWAY_UDO, "Conway")} wants it in a side yard, a back yard or a carport. In Myrtle Beach, North Myrtle Beach, Conway and ${h.ext(LORIS_CODE, "Loris")}, you can leave it in the driveway for a day to load and unload.`) +
      h.p(`Work trucks have limits in the towns too. Myrtle Beach allows one at a house, up to one ton. ${h.ext(SURF_CODE, "Surfside Beach")} allows one van or pickup up to 21 feet overnight. Outside the towns, the county ${h.ext(HORRY_CODE, "bans parking on a road")} only where it posts a sign.`) +
      h.p(`A deed restriction can also limit how you use a lot. It is a rule written into the papers filed with the county for the lot or its street. In South Carolina, a lawyer, the ${h.ext(CLOSING, "closing attorney")}, runs every home closing and the search of those papers. That search tells you before you buy whether a restriction covers a boat or a truck.`) +
      story([
        "<strong>Example:</strong> Dale runs a small plumbing business and owns a fishing boat. He wants a house in Conway with room for the boat and his work van.",
        "He likes a house with no HOA fee and a long driveway. His Chapter3 agent reads Conway's parking rule with him.",
        "The van can stay in the driveway, but the boat must go in the side yard or the back yard. Dale picks a house with a wide side yard and makes his offer.",
      ], "", bg) +
      h.cta("Get the homes with room for a boat.", "Tell us your price range, the areas you like, and what you need to park. One of our agents will send you the homes for sale with no HOA fee.", "Get the list", "/contact/", bg) },

    { h2: "Where are the homes with no HOA fee, and which have the most room?", toc: "Where, and lot sizes", html: () =>
      h.p("Most homes for sale in Aynor, Loris, North Myrtle Beach, and Surfside Beach and Garden City show no HOA fee. The houses with the most room are inland, in Aynor, Loris and Conway.") +
      `<div class="c3-areamap">${MAP.html}</div>` +
      areaTable() +
      h.p("A house with no HOA fee in Aynor usually has about an acre, and in Loris about three quarters of an acre. In North Myrtle Beach and Surfside Beach the lots are smaller, about a fifth of an acre. About 1 in 3 houses with no HOA fee has half an acre or more, against about 1 in 15 houses with a fee.") +
      h.p("Most of the homes with no HOA fee in Aynor, Loris and Conway are outside the town limits. There, the county sets no limit on a boat or a work truck on your lot.") +
      h.p("In North Myrtle Beach, almost all the homes for sale with no HOA fee are in four parts of town: Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive.") +
      CHERRY +
      h.p("Some homes in campground communities near the beach show no HOA fee because the owner leases the land under the home and pays a yearly lease. We left them out of every count on this page.") },

    { h2: "Why do homes with no HOA fee cost more in some areas?", toc: "Why some cost more", html: () =>
      h.p(`Houses with no HOA fee ask more in every area, about ${to5k(ALL.detachedHouses.medianListPriceNoFee)} against ${to5k(ALL.detachedHouses.medianListPriceWithFee)} for a house with a fee. Many of them are older houses near the ocean. About half of the houses with no HOA fee were built before 2000, against about 1 in 10 houses with a fee.`) +
      h.p(`In Surfside Beach and Garden City, about 4 in 10 houses with no HOA fee are on the ocean, have an ocean view or are one row back from it. Almost none of the houses with a fee there are. A house with no HOA fee there asks about ${to5k(surf.houses.medianListPriceNoFee)}, against about ${to5k(surf.houses.medianListPriceWithFee)} with a fee.`) +
      h.p(`With no HOA fee, you also skip about $${(Math.round(HOUSE_FEE.medianMonthlyHoaFee * 12 / 100) * 100).toLocaleString("en-US")} a year, the typical fee on a house here. For the places where a home costs least, see our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")}.`) },

    { h2: "What do you gain and give up with no HOA?", toc: "Pros and cons", html: (bg) =>
      h.p("With no HOA, you pay no HOA fee and follow no HOA rules. You also have no shared pool, and outside the towns you arrange your own trash pickup.") +
      prosCons([
        "No monthly HOA fee, and no surprise HOA bill for a big repair.",
        "No HOA to ask before you put up a fence, add a shed or keep a boat on the lot. Town rules on boats still apply.",
        "No HOA rule against renting the home out. In our experience, many HOAs here do not allow renting a house out at all.",
      ], [
        "No shared pool, clubhouse or common areas. On a house, an HOA fee often includes these.",
        "No HOA rules for the houses next door either. The same town rules on boats and trucks apply to them.",
        { text: "Outside the town limits, you arrange your own trash pickup.", act: "The county map in the next section shows whether a home is inside a town." },
        { text: "A home with no HOA can still have deed restrictions.", act: "The closing attorney's search finds them before you buy." },
      ], { bg }) +
      h.p(`If you want a pool, a clubhouse or a gate, you pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")}, to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} and to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")}, where every home has an HOA, show where to look. Our guide to whether ${h.a("/hoa/benefits/", "HOA fees are worth it")} lists what the fee buys.`) },

    { h2: "What do you take care of yourself with no HOA?", toc: "What you take care of", html: () =>
      h.p("With no HOA, you take care of trash pickup, your yard and any pond on your land. On a house here, most HOA fees include the shared areas, and more than half include trash pickup and a pool.") +
      h.ul([
        `Inside the Myrtle Beach city limits, the ${h.ext(MB_TRASH, "city picks up trash")}, recycling and yard waste once a week. It costs about $34 a month on the city utility bill.`,
        `North Myrtle Beach, Conway, Surfside Beach, Loris, Aynor, Briarcliffe Acres and Atlantic Beach also ${h.ext(SWA, "offer trash service")}.`,
        "Outside the towns, the county does not pick up at the curb. You arrange pickup yourself, or use one of the county's drop-off centers, which are only for homes outside the towns.",
      ]) +
      h.p(`A Myrtle Beach mailing address does not mean the home is inside the city. To see whether a home is inside a town, find it on the ${h.ext(COUNTY_MAP, "county's online map")}, which shows the town limits.`) +
      h.p(`If the lot has a ${h.ext(PONDS, "stormwater pond")}, you keep it working: check it twice a year and after big storms, clear out debris and keep the plants in check.`) +
      h.p("The county keeps up the roads it owns. A private road is kept up by the group named in the papers filed for it, such as an HOA or a property owners group, never by the county.") },

    { h2: "Can you buy a condo with no HOA fee in Myrtle Beach?", toc: "Condos", html: () =>
      h.p(`Almost never. Of about ${(Math.round(CONDO.count / 100) * 100).toLocaleString("en-US")} condos for sale around Myrtle Beach, only one showed no HOA fee. ${h.ext(CONDO_LAW, "South Carolina law")} makes condo owners share the cost of the building.`) },

    { h2: "What is a typical HOA fee in Myrtle Beach?", toc: "Typical HOA fees", html: () =>
      h.p(`The typical HOA fee is $${HOUSE_FEE.medianMonthlyHoaFee} a month on a house and about $${Math.round(CONDO.median / 50) * 50} a month on a condo. A condo fee is higher because it includes the building's insurance, water and sewer, trash and a pool.`) +
      h.p(`When you compare two fees, compare what each one includes. Our guides to ${h.a("/hoa/", "what HOA fees cover")}, ${h.a("/hoa/reserves/", "HOA savings for big repairs")} and ${h.a("/hoa/special-assessments/", "special assessments")} show what to look at.`) },

    { h2: "How do you check a home for an HOA before you offer?", toc: "How to check", html: () =>
      h.p("Check four things before you make an offer.") +
      h.ol([
        "<strong>The listing.</strong> A blank HOA fee means no fee is listed. It does not prove there is no HOA. A few homes for sale with no fee listed are in a neighborhood with a voluntary association or community dues.",
        `<strong>The seller's disclosure.</strong> For most sales, South Carolina requires the seller to fill out a ${h.ext(DISCLOSURE_LAW, "disclosure form")}. It asks whether the home is in an HOA and whether it has deed restrictions. A builder selling a new home for the first time does not have to fill it out.`,
        `<strong>The papers filed with the county.</strong> The ${h.ext(DEEDS, "Horry County Register of Deeds")} keeps the deeds, the restrictions and the maps of the lots. The papers themselves are not online; they are read at the county office in Conway. The closing attorney's search reads them for you.`,
        "<strong>The town.</strong> Find the home on the county's online map to see whether it is inside a town. That tells you whose parking rule and trash service apply.",
      ]) },
  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Can I park a boat at my house in Myrtle Beach?", a: "Yes, on your own lot, but not in the front yard inside the city of Myrtle Beach for a boat over 16 feet. Boats and trailers may not be parked on city streets in a residential area. Outside the towns, the county sets no limit on your lot." },
    { q: "Can I park a work truck at my house in Myrtle Beach?", a: "Yes. Inside the city of Myrtle Beach, a house may have one work vehicle, up to one ton. Outside the towns, the county sets no limit on a work truck on your own lot." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address show no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "Why are HOA fees so high in Myrtle Beach?", a: "Condo fees are high because they include the cost of the building: its insurance, water and sewer, trash and a pool. Fees on houses are much lower, about $95 a month, because most include only shared areas, trash and a pool." },
    { q: "Does every neighborhood in Myrtle Beach have an HOA?", a: "No. Most homes for sale with no HOA fee are on ordinary streets, not in a planned neighborhood. Every home for sale in Carolina Forest shows an HOA fee." },
  ],
  sources: [
    { name: "town and county codes", href: `${MUNI}horry_county/codes/code_of_ordinances` },
    { name: "S.C. disclosure law", href: DISCLOSURE_LAW },
    { name: "Register of Deeds", href: DEEDS },
    { name: "county parcels", href: COUNTY_MAP },
    { name: "Solid Waste Authority", href: SWA },
  ],
  sourcesNote: `Homes for sale in the local MLS, on ${COUNTED}; asking prices. Areas are mailing addresses. Lot sizes are from county parcel maps. Homes on leased land are left out. Not legal advice.`,
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get the homes with no HOA fee in your price range.", p: "Tell us your price range, the areas you like and what you need to park. One of our agents will send you the homes for sale with no HOA fee.", label: "Get the list", href: "/contact/" },
  keywords: "Myrtle Beach homes no HOA, houses for sale no HOA Myrtle Beach, park boat at house Myrtle Beach, work truck parking Myrtle Beach, condos no HOA Myrtle Beach, North Myrtle Beach no HOA, average HOA fees Myrtle Beach",
  about: "Homes for sale with no homeowners association fee around Myrtle Beach, South Carolina",
};
