/* /buyers/no-hoa-homes/ - where to find a home with no HOA fee around Myrtle Beach, whether you can keep a
 * boat or a work truck there, how much room the lots have, what the homes cost, and how to check one.
 *
 * Batch 2026-10-b, page 3.
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
/* A lot size in words a person says aloud (owner's eye, round 3): a sixth, a fifth, a quarter, a third, a half,
   three quarters, an acre. */
const acreWords = (v) => {
  const steps = [[1 / 6, "a sixth of an acre"], [0.2, "a fifth of an acre"], [0.25, "a quarter acre"], [1 / 3, "a third of an acre"], [0.5, "half an acre"], [0.75, "three quarters of an acre"], [1, "an acre"]];
  let best = steps[0];
  for (const s of steps) if (Math.abs(s[0] - v) < Math.abs(best[0] - v)) best = s;
  return `about ${best[1]}`;
};

/* The day the homes for sale were counted, from the data file (never typed). */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNTED = (([y, m, d]) => `${MONTHS[m - 1]} ${d}, ${y}`)(DATA.asOf.split("-").map(Number));

/* ---------------------------------------------------------------------------- */
/* Pictures and tables                                                            */

/* The map: each area's name with its share of homes for sale listed with no HOA fee. */
const TOWN = Object.fromEntries(loadGeo2().towns.map((t) => [t.name, t]));
const MAP = placesMap("Share of homes for sale with no HOA fee",
  ["Loris", "Aynor", "Little River", "North Myrtle Beach", "Conway", "Carolina Forest", "Myrtle Beach", "Surfside Beach and Garden City", "Murrells Inlet"]
    .map((k) => AREAS.find((a) => a.key === k || a.name === k || a.town === k))
    .map((a) => ({ name: `${a.map} ${share(a)}%`, lat: TOWN[a.town].lat, lon: TOWN[a.town].lon })),
  { caption: "Map of the share of homes for sale in each area that are listed with no HOA fee." });

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
  { name: "Outside the towns", icon: "home", cells: { boat: "Anywhere on your lot", truck: "Two per acre for a home business" } },
  { name: "Inside Myrtle Beach", href: "/submarkets/myrtle-beach/", icon: "town", cells: { boat: "Over 16 feet: not in the front yard", truck: "One work vehicle; none over one ton" } },
  { name: "Inside North Myrtle Beach", href: "/submarkets/north-myrtle-beach/", icon: "town", cells: { boat: "Behind the house front, or a carport", truck: "None over 18,500 pounds" } },
  { name: "Inside Conway", href: "/submarkets/conway/", icon: "town", cells: { boat: "Side yard, back yard or carport", truck: "Over 10,000 pounds: not on the street" } },
  { name: "Inside Surfside Beach", href: "/submarkets/surfside-beach/", icon: "town", cells: { boat: "Two boats or trailers (not in a garage)", truck: "One van or pickup, up to 21 feet long" } },
  { name: "Inside Loris", icon: "town", cells: { boat: "Over 17 feet: not in front or side yard", truck: "One work vehicle, up to 2 tons" } },
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

/* Words used more than once. */
const loris = AREAS.find((a) => a.key === "Loris");
const LABEL = "Get the list";
/* The example: its own arc, on this page's deciding fact (a town limit on a boat; rows 59, 64 and 68), with
   the services Chapter3 records: the agent reads the rules and filters the search for the buyer (stories.json
   "hoa-rental-bans-filtered"). Myrtle Beach: a boat over 16 feet may not sit in the front yard (row 59). */
const STORY = [
  "<strong>Example:</strong> Teresa wants a home with no HOA and room for her 20-foot boat. She likes a house on a small lot with a Myrtle Beach address.",
  "Her Chapter3 agent finds the house on the county map, inside the city of Myrtle Beach. In the city, a boat that long cannot sit in the front yard, and that lot has no other room for it.",
  "The agent shows her houses just outside the city, where she can keep the boat anywhere on her lot. Teresa makes an offer on one with a wide side yard.",
];

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Aynor lot aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Homes With No HOA in Myrtle Beach: Where, Cost, Pros and Cons",
  description: "Where to find homes with no HOA fee around Myrtle Beach, what they cost, lot sizes, flood zones, the pros and cons, and the town rules for a boat or work truck.",
  ogTitle: "Homes with no HOA around Myrtle Beach: where they are, what they cost and what to check",
  crumb: "Homes With No HOA",
  eyebrow: "Buying a home",
  h1: "Where can you buy a home with no HOA in Myrtle Beach?",
  h1em: "Where to look, what it costs and what to check.",
  sub: "Most homes for sale with no HOA fee are on ordinary streets outside planned neighborhoods. Loris and Aynor have the highest share and the biggest lots.",
  heroMedia: glance([
    { icon: "town", label: "Loris and Aynor", text: "Most have no HOA fee" },
    { icon: "beach", label: "North Myrtle Beach", text: "Most have no HOA fee" },
    { icon: "dollar", label: "Typical list price", text: `About ${to5k(ALL.detachedHouses.medianListPriceNoFee)}` },
  ]),
  heroCta: { label: LABEL, href: "/contact/", text: "Tell us your price range, and we will send you the homes for sale with no HOA fee." },
  author: "devin",
  shortAnswer: [
    `About a quarter of the homes for sale around Myrtle Beach are listed with no homeowners association (HOA) fee. An HOA runs a neighborhood and collects a monthly fee. Houses for sale with no HOA fee are listed at about ${to5k(ALL.detachedHouses.medianListPriceNoFee)}, and at about ${to5k(loris.houses.medianListPriceNoFee)} in Loris and Aynor.`,
    "Loris and Aynor have the most room, usually half an acre or more. Near the beach, many homes with no HOA fee are in a high-risk flood zone.",
    `With no HOA, you can keep a boat or a work truck at home, within ${h.a("#boats-and-work-trucks", "each town's rules")}.`,
  ],
  sections: [
    { h2: "Where are the homes with no HOA fee, and which have the most room?", toc: "Where, and lot sizes", html: (bg) =>
      CSS +
      h.p("Most homes for sale in Aynor, Loris, North Myrtle Beach, and Surfside Beach and Garden City are listed with no HOA fee. The houses with the most room are inland, in Aynor, Loris and Conway.") +
      `<div class="c3-areamap">${MAP.html}</div>` +
      areaTable() +
      h.p("A house for sale with no HOA fee in Aynor usually has about an acre, and in Loris about three quarters of an acre. In North Myrtle Beach and Surfside Beach the lots are small, about a sixth of an acre. About 1 in 3 houses with no HOA fee has half an acre or more, against about 1 in 15 houses with a fee.") +
      AYNOR_LOT +
      h.p("Most houses with no HOA fee in Aynor, Loris and Conway are outside the town limits, so the county's rules apply there. In North Myrtle Beach, almost all of them are in four parts of town: Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive.") +
      h.p(`Our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")} compares the towns.`) +
      h.cta("Get the homes with no HOA fee in your price range.", "Tell us your price range and the areas you like. One of our agents will send you the homes for sale with no HOA fee.", LABEL, "/contact/", bg) },

    { h2: "Why do homes with no HOA fee cost more?", toc: "Why they cost more", html: () =>
      h.p(`Houses for sale with no HOA fee are listed at about ${to5k(ALL.detachedHouses.medianListPriceNoFee)}, against about ${to5k(ALL.detachedHouses.medianListPriceWithFee)} with a fee. Many of them are near the ocean: about 1 in 3 is on the ocean side of Business 17, the coast road.`) +
      CHERRY +
      h.p(`With no HOA fee, you skip about $${(Math.round(HOUSE_FEE.medianMonthlyHoaFee * 12 / 100) * 100).toLocaleString("en-US")} a year, the typical fee on a house here. Near the water, flood insurance can cost more than that. Almost every home in Cherry Grove is in a high-risk flood zone on ${h.ext(FEMA, "FEMA's flood map")}. Flood insurance on a home you live in there usually costs about $1,300 a year.`) +
      h.p(`On the ocean side of Surfside Beach, about 1 in 4 homes is in a high-risk flood zone. With a mortgage, your lender will almost always require flood insurance. A cash buyer can choose. Check the flood zone of the home you like before you offer.`) },

    { h2: "What do you gain and give up with no HOA?", toc: "Pros and cons", html: (bg) =>
      h.p("With no HOA, you pay no HOA fee and follow no HOA rules. You also have no shared pool, and outside the towns you arrange your own trash pickup.") +
      prosCons([
        "No monthly HOA fee, and no surprise HOA bill for a big repair.",
        "No HOA to ask before you put up a fence, add a shed or keep a boat on the lot. Town rules on boats still apply.",
        "No HOA rule against renting the home out. In our experience, many HOAs here do not allow renting a house out at all.",
      ], [
        "No shared pool, clubhouse or common areas. On a house, an HOA fee often includes these.",
        "No HOA rules for the houses next door either.",
        { text: "Outside the town limits, you arrange your own trash pickup.", act: "The county's Map Your Move map shows whether a home is inside a town." },
        { text: "A home with no HOA can still have deed restrictions.", act: "The closing attorney's search finds them before you buy." },
      ], { bg }) +
      h.p(`If you want a pool, a clubhouse or a gate, you pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")} and to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} show where to look. In Carolina Forest, every home for sale has an HOA fee; our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} shows one of its neighborhoods.`) },

    { h2: "Can you keep a boat or a work truck at a home with no HOA?", toc: "Boats and work trucks", id: "boats-and-work-trucks", html: () =>
      h.p(`Yes, on your own lot. Outside the towns, the county has no rule on where you keep your own boat, trailer or camper on your lot. If you run a business from the house, the county allows ${h.ext(HORRY_927, "two service vehicles per acre")} on most lots. Inside a town, the town's limits in the table apply.`) +
      parkingTable() +
      h.p(`In Myrtle Beach, North Myrtle Beach, Conway and Loris, you can leave a boat in the driveway for a day to load and unload. On county roads outside the towns, the county ${h.ext(HORRY_CODE, "bans parking")} only where it posts a sign.`) +
      h.p(`A deed restriction can also limit how you use a lot. It is a rule written into the papers filed with the county for the lot or its street. In South Carolina, a lawyer, the ${h.ext(CLOSING, "closing attorney")}, supervises the title search and the closing. That search shows before you buy whether a restriction covers a boat or a truck.`) },

    { h2: "What do you take care of yourself with no HOA?", toc: "What you take care of", html: () =>
      h.p("With no HOA, you take care of trash pickup, your yard and any pond on your land. On a house here, most HOA fees include the shared areas, and more than half include trash pickup and a pool.") +
      h.ul([
        `Inside the Myrtle Beach city limits, the ${h.ext(MB_TRASH, "city picks up trash")}, recycling and yard waste once a week. It costs about $34 a month on the city utility bill.`,
        `North Myrtle Beach, Conway, Surfside Beach, Loris, Aynor, Briarcliffe Acres and Atlantic Beach also ${h.ext(SWA, "offer trash service")}.`,
        "Outside the towns, the county does not pick up at the curb. You arrange pickup yourself, or use one of the county's drop-off centers, which are only for homes outside the towns.",
      ]) +
      h.p(`A Myrtle Beach mailing address does not mean the home is inside the city. To see whether a home is inside a town, find it on the county's ${h.ext(MAP_YOUR_MOVE, "Map Your Move map")}, which shows the town for each lot.`) +
      h.p(`If the lot has a ${h.ext(PONDS, "stormwater pond")}, you keep it working. Check it twice a year and after big storms. Clear out debris and cut back the plants.`) +
      h.p("The county keeps up only the roads it owns, and the state keeps up state roads. A private road is kept up by whoever its papers name, such as a property owners association. Ask who that is before you buy.") },

    { h2: "Can you buy a condo with no HOA fee in Myrtle Beach?", toc: "Condos", html: () =>
      h.p(`Almost never. Of about ${(Math.round(CONDO.count / 100) * 100).toLocaleString("en-US")} condos for sale around Myrtle Beach, only one was listed with no HOA fee. ${h.ext(CONDO_LAW, "South Carolina law")} makes condo owners share the cost of the building.`) },

    { h2: "What is a typical HOA fee in Myrtle Beach?", toc: "Typical HOA fees", html: () =>
      h.p(`The typical HOA fee is $${HOUSE_FEE.medianMonthlyHoaFee} a month on a house and about $${Math.round(CONDO.median / 50) * 50} a month on a condo. A condo fee is higher because it includes the building's insurance, water and sewer, trash and a pool.`) +
      h.p(`When you compare two fees, compare what each one includes. Our guides to ${h.a("/hoa/", "what HOA fees cover")}, ${h.a("/hoa/reserves/", "HOA savings for big repairs")} and ${h.a("/hoa/special-assessments/", "special assessments")} show what to look at.`) },

    { h2: "How do you check a home for an HOA before you offer?", toc: "How to check", html: (bg) =>
      h.p("Check four things before you make an offer.") +
      h.ol([
        "<strong>The listing.</strong> A blank HOA fee means no fee is listed. It does not prove there is no HOA. A few homes for sale with no fee listed are in a neighborhood with a club you can choose to join and pay.",
        `<strong>The seller's disclosure.</strong> For most sales, South Carolina requires the seller to fill out a ${h.ext(DISCLOSURE_LAW, "disclosure form")}. It asks whether the home is in an HOA and whether it has deed restrictions. A builder selling a new home for the first time does not have to fill it out.`,
        `<strong>The papers filed with the county.</strong> The ${h.ext(DEEDS, "Horry County Register of Deeds")} keeps the deeds, the restrictions and the maps of the lots, and has an online index of them. The index shows that a paper is on file, but not the paper itself. You read it at the county office in Conway, or your closing attorney's search reads it for you.`,
        `<strong>The town.</strong> Find the home on the county's ${h.ext(MAP_YOUR_MOVE, "Map Your Move map")} to see whether it is inside a town. That tells you whose parking rule and trash service apply.`,
      ]) +
      story(STORY, "", bg) },
  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Can I park a boat at my house in Myrtle Beach?", a: "Yes, on your own lot. Inside the city of Myrtle Beach, a boat over 16 feet may not sit in the front yard, and boats and trailers may not park on residential streets. Outside the towns, the county has no rule on where you keep your own boat, trailer or camper on your lot." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address are listed with no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "Why are HOA fees so high in Myrtle Beach?", a: "Condo fees are high because they include the cost of the building: its insurance, water and sewer, trash and a pool. Fees on houses are much lower, about $95 a month, because most include only shared areas, trash and a pool." },
    { q: "Is a campground home with no HOA fee a no-HOA home?", a: "A campground home has no HOA fee, but you pay a yearly lease for the land under it." },
  ],
  sources: [
    { name: "town and county codes", href: `${MUNI}horry_county/codes/code_of_ordinances` },
    { name: "S.C. disclosure law", href: DISCLOSURE_LAW },
    { name: "Register of Deeds", href: DEEDS },
    { name: "county parcels", href: COUNTY_MAP },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: `Homes for sale in the local MLS, on ${COUNTED}; list prices. Areas are mailing addresses. Lot sizes are from county parcel maps. Homes on leased land are left out. Flood cost is FEMA's middle policy price. Not legal advice.`,
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get the homes with no HOA fee in your price range.", p: "Tell us your price range and the areas you like. One of our agents will send you the homes for sale with no HOA fee.", label: LABEL, href: "/contact/" },
  keywords: "Myrtle Beach homes no HOA, houses for sale no HOA Myrtle Beach, no HOA homes North Myrtle Beach, Myrtle Beach homes with land, park boat at house Myrtle Beach, condos no HOA Myrtle Beach, average HOA fees Myrtle Beach",
  about: "Homes for sale with no homeowners association fee around Myrtle Beach, South Carolina",
};
