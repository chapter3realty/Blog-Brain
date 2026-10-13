/* /buyers/no-hoa-homes/ - where to find a home with no HOA fee around Myrtle Beach, what it costs,
 * what you gain and give up, why a condo almost always has a fee, and how to check before you offer.
 *
 * Batch 2026-10-b, page 3. Version 1, 2026-10-13.
 *
 * Reader. Someone who typed "Myrtle Beach homes no HOA", "houses for sale no HOA", "condos no HOA" or
 * "why are HOA fees so high in Myrtle Beach". They know no town, no road and no trade word. They want,
 * in order: where the homes with no fee are and how many; what they cost; what they give up and gain;
 * whether a condo can have no fee; what a normal fee is if they buy with one; how to check before they
 * offer. Job: find, then decide. Shape (CRAFT 3): a place guide for the "where" (our map, then one bar
 * chart of the share by area, then a photo of the place with the most), then an explainer (pros and
 * cons, what you pay for yourself, condos, the typical fee) and numbered steps to check a home. One
 * offer, through the contact form: we send the homes with no HOA fee in your price range.
 *
 * Facts: batches/2026-10-b/facts/no-hoa-facts.md, verified rows only, in the verifier's wording limits.
 *   Share:    rows 1, 3 to 11 (owned land: 716 of 2,676, "about 1 in 4"; "shows no HOA fee", "homes for
 *             sale", areas are mailing addresses). Built from data/no-hoa.json ownedLandOnly.
 *   Where:    row 18 corrected (446 of 716 not in a named neighborhood; North Myrtle Beach 133 of 141 in
 *             Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive; nothing about "along the ocean"),
 *             rows 10 and 11 (Loris 94 of 96, Aynor 28 of 30 outside a named neighborhood), row 4.
 *   Leased:   rows 1 and 19 corrected; writer brief decision: left out of every count, one plain line,
 *             no community named.
 *   Prices:   row 17 (asking prices of detached houses on owned land, by area), rounded to $5,000.
 *   Fees:     row 15 (houses: $95; $74 to $135 for the middle half; 240 of 1,927 at $200 or more, about
 *             1 in 8; by area), row 14 corrected (condominiums only: about $650; $465 to $949), row 16
 *             (what fees include, in words), rows 53 and 54 (coastal insurance; never said to be why a
 *             fee is high).
 *   Condos:   row 13 (1 of 2,742 condominiums), rows 32 and 33 (owners share the costs; the owners must
 *             insure the property).
 *   Renting:  stories.json "hoa-rental-bans-filtered" (many HOAs here ban renting a house out at all).
 *   Rules:    stories.json "ny-buyer-rules-fit" (the rules-fit version only).
 *   Trash:    row 43 corrected (no curbside pickup from the Solid Waste Authority; the eight towns that
 *             offer service), row 44 (25 drop-off centers, only for homes outside the towns; "material",
 *             so the page does not say what they take), rows 45 and 46 (Myrtle Beach city: weekly, $33.93
 *             a month, on the city utility bill), row 47 (North Myrtle Beach weekly at the curb).
 *   Ponds:    row 51. Streets: rows 49 and 50 (the county keeps up only the roads it owns; its map does
 *             not show every owner).
 *   Checking: row 20 (a blank fee is not proof; a few no-fee homes mention a voluntary association or
 *             dues), row 29 corrected (most sales; the seller may make no claim; a new home's first sale
 *             is exempt), rows 37 and 38 (a recorded restriction can limit what is built; courts read
 *             them narrowly. Taylor v. Lindsey is never used to show a restriction stopped a build),
 *             rows 40 to 42 (deed records; images only in person in Conway).
 *   Not used: the Horry stormwater fee (row 48: the same for every owner, so it is not part of the
 *             choice), the HOA law rows 22 to 28 (the HOA guides cover them), Fannie Mae (rows 56, 57),
 *             the wind pool (row 55), Longs (row 12, outside the nine areas).
 * The date of the count comes from the data file (asOf), never typed.
 *
 * Pictures: our map of the areas (tools/area-map.js placesMap, Census town points); a bar chart of the
 * share by area, drawn here from the data file as plain HTML so its words are at reading size on a phone;
 * a NOAA 2026 aerial of Cherry Grove (public domain, the record in data/photos.json); two Chapter3
 * drawings in the tools/illustrations.js style (images/no-hoa/*.svg): a house with its own fenced yard,
 * a shed and a boat, and two trash carts at the curb.
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
/* Photo records: every photos.json found, merged, so this page finds its record beside another batch's. */
const PHOTOS = [];
for (const f of dataFiles("photos.json")) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}
/* Our own drawings, inline: the website's copy of the batch images, else the batch folder. */
const drawing = (name) => {
  const f = [path.join(__dirname, "..", "chapter3realty", "images", "buyers", "no-hoa", `${name}.svg`), path.join(BATCH, "images", "no-hoa", `${name}.svg`)].find((x) => fs.existsSync(x));
  if (!f) throw new Error(`drawing ${name}.svg not found`);
  return fs.readFileSync(f, "utf8");
};

const kit = PK.create({ h, photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { glance, prosCons, placesMap } = kit;

const SELF = "/buyers/no-hoa-homes/";

/* ---------------------------------------------------------------------------- */
/* The numbers, from the data file, checked against the verified ledger rows      */

const OWNED = DATA.ownedLandOnly;
const AREAS = [
  /* key in the data file, the name a reader knows, the page about it */
  { key: "Aynor", name: "Aynor" },
  { key: "Loris", name: "Loris" },
  { key: "North Myrtle Beach", name: "North Myrtle Beach", href: "/submarkets/north-myrtle-beach/" },
  { key: "Surfside Beach and Garden City", name: "Surfside Beach and Garden City", href: "/submarkets/surfside-beach/" },
  { key: "Murrells Inlet", name: "Murrells Inlet", href: "/submarkets/murrells-inlet/" },
  { key: "Conway", name: "Conway", href: "/submarkets/conway/" },
  { key: "Myrtle Beach (not Carolina Forest)", name: "Myrtle Beach, outside Carolina Forest", href: "/submarkets/myrtle-beach/" },
  { key: "Little River", name: "Little River", href: "/submarkets/little-river/" },
  { key: "Carolina Forest", name: "Carolina Forest", href: "/submarkets/carolina-forest/" },
].map((a) => ({ ...a, homes: OWNED[a.key].homes, houses: OWNED[a.key].detachedHouses }));

/* The verified values (ledger rows 1, 3 to 11, 13 to 15 and 17). A data file that no longer gives them
   stops the build, so the page never shows a number no verifier checked. */
const VERIFIED = {
  share: { "Aynor": [30, 45], "Loris": [96, 160], "North Myrtle Beach": [141, 254], "Surfside Beach and Garden City": [59, 107], "Murrells Inlet": [60, 215],
    "Conway": [172, 738], "Myrtle Beach (not Carolina Forest)": [136, 698], "Little River": [22, 201], "Carolina Forest": [0, 258] },
  price: { "Aynor": [372000, 289490], "Loris": [368450, 279990], "North Myrtle Beach": [759900, 670000], "Surfside Beach and Garden City": [983450, 524900],
    "Murrells Inlet": [811950, 534950], "Conway": [379900, 329945], "Myrtle Beach (not Carolina Forest)": [625000, 475875], "Little River": [429950, 399900] },
  fee: { "Aynor": 60, "Loris": 78, "North Myrtle Beach": 183, "Surfside Beach and Garden City": 85, "Murrells Inlet": 105, "Conway": 85,
    "Myrtle Beach (not Carolina Forest)": 102, "Little River": 105, "Carolina Forest": 116 },
};
for (const a of AREAS) {
  const [no, all] = VERIFIED.share[a.key];
  if (a.homes.noHoaFee !== no || a.homes.listings !== all) throw new Error(`${a.key}: the share is not the verified ${no} of ${all}`);
  if (VERIFIED.price[a.key] && (a.houses.medianListPriceNoFee !== VERIFIED.price[a.key][0] || a.houses.medianListPriceWithFee !== VERIFIED.price[a.key][1])) throw new Error(`${a.key}: the asking prices are not the verified ones`);
  if (a.houses.medianMonthlyHoaFee !== VERIFIED.fee[a.key]) throw new Error(`${a.key}: the house fee is not the verified $${VERIFIED.fee[a.key]}`);
}
const ALL = OWNED.allNineAreas;
if (ALL.homes.noHoaFee !== 716 || ALL.homes.listings !== 2676) throw new Error("the headline share is not the verified 716 of 2,676");
if (ALL.detachedHouses.medianListPriceNoFee !== 514900 || ALL.detachedHouses.medianListPriceWithFee !== 414900) throw new Error("the overall asking prices are not the verified $514,900 and $414,900");
const HOUSE_FEE = DATA.allNineAreas.detachedHouses;
if (HOUSE_FEE.medianMonthlyHoaFee !== 95 || HOUSE_FEE.hoaFeeP25 !== 74 || HOUSE_FEE.hoaFeeP75 !== 135) throw new Error("the house fee is not the verified $95 ($74 to $135)");

/* Condominiums only (row 14 as corrected by the verifier; row 13), from the listing lines. */
const NINE = AREAS.map((a) => a.key);
const F = DATA.listingsFields, LIST = DATA.listings.map((x) => Object.fromEntries(F.map((k, i) => [k, x[i]])));
const condos = LIST.filter((x) => x.propertyType === "Condominium" && NINE.includes(x.area));
const condoFees = condos.map((x) => x.monthlyHoaFee).filter((v) => v).sort((a, b) => a - b);
const pct = (arr, p) => { const i = (arr.length - 1) * p, lo = Math.floor(i); return arr[lo] + (arr[Math.min(lo + 1, arr.length - 1)] - arr[lo]) * (i - lo); };
const CONDO = { count: condos.length, noFee: condos.length - condoFees.length, p25: pct(condoFees, 0.25), median: pct(condoFees, 0.5), p75: pct(condoFees, 0.75) };
if (CONDO.count !== 2742 || CONDO.noFee !== 1 || CONDO.median !== 647 || CONDO.p25 !== 465 || CONDO.p75 !== 949) throw new Error(`the condo figures are not the verified ones: ${JSON.stringify(CONDO)}`);

/* Rounding a reader can say out loud (CRAFT 5). */
const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
const to5k = (v) => money(Math.round(v / 5000) * 5000);
const to10 = (v) => money(Math.round(v / 10) * 10);
const share = (a) => Math.round(100 * a.homes.noHoaFee / a.homes.listings);

/* The day the homes for sale were counted, from the data file (never typed). */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const COUNTED = (([y, m, d]) => `${MONTHS[m - 1]} ${d}, ${y}`)(DATA.asOf.split("-").map(Number));

/* ---------------------------------------------------------------------------- */
/* Pictures                                                                       */

/* The map of the areas, north to south, from the Census town points in the map data. */
const TOWN = Object.fromEntries(loadGeo2().towns.map((t) => [t.name, t]));
const MAP = placesMap("Areas with homes for sale with no HOA fee",
  ["Loris", "Aynor", "Little River", "North Myrtle Beach", "Conway", "Carolina Forest", "Myrtle Beach", "Surfside Beach", "Garden City", "Murrells Inlet"]
    .map((n) => ({ name: n, lat: TOWN[n].lat, lon: TOWN[n].lon })),
  { caption: "Map of the areas on this page, from Little River to Murrells Inlet and inland to Loris and Aynor." });

/* The bar chart: the share of homes for sale in each area that show no HOA fee. One series, one color,
   the value at the tip of each bar, the count under the name, a track that shows the whole (dataviz
   skill: one series, no legend, value labels, recessive track). Plain HTML, so every word is reading
   size on a phone and every value is text. */
const BAR_CSS = "<style>"
  + ".c3-share{margin:1.4rem 0 1.8rem;max-width:760px}"
  + ".c3-share .t{color:var(--navy);font-weight:600;font-size:var(--read,1.0625rem);line-height:1.4;margin:0 0 .8rem}"
  + ".c3-share ol{list-style:none;margin:0;padding:0}"
  + ".c3-share li{display:grid;grid-template-columns:minmax(0,15rem) minmax(0,1fr) 3.4rem;align-items:center;column-gap:.9rem;padding:.45rem 0;border-bottom:1px solid var(--rule)}"
  + ".c3-share .nm{color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.3}"
  + ".c3-share .ct{display:block;color:var(--muted);font-size:1rem;line-height:1.3}"
  + ".c3-share .tr{display:block;height:16px;background:rgba(28,32,40,.08);border-radius:0 4px 4px 0}"
  + ".c3-share .fl{display:block;height:16px;background:var(--navy);border-radius:0 4px 4px 0;min-width:2px}"
  + ".c3-share .v{color:var(--navy);font-weight:600;font-size:var(--read,1.0625rem);text-align:right;font-variant-numeric:tabular-nums}"
  + ".c3-share figcaption{color:var(--muted);font-size:.95rem;line-height:1.6;margin-top:.7rem}"
  + "@media (max-width:37.5em){.c3-share li{grid-template-columns:minmax(0,1fr) 3.4rem;row-gap:.35rem}.c3-share li>.nm{grid-column:1/-1}}"
  + "</style>";
const shareChart = () => {
  const rows = AREAS.map((a) => {
    const s = share(a), n = a.homes.noHoaFee, all = a.homes.listings;
    return `<li><span class="nm">${a.name}<span class="ct">${n} of ${all.toLocaleString("en-US")} homes for sale</span></span>`
      + `<span class="tr" aria-hidden="true"><span class="fl" style="width:${s}%${n ? "" : ";background:transparent"}"></span></span><span class="v">${s}%</span></li>`;
  }).join("");
  return BAR_CSS + `<figure class="c3-share"><p class="t">Homes for sale with no HOA fee, by area</p><ol>${rows}</ol>`
    + "<figcaption>Chart of the share of homes for sale in each area that show no HOA fee. Each area is a mailing address, so it can reach past the town line.</figcaption></figure>";
};

/* The table of asking prices and fees by area (tools/compare.js: cards on a phone). */
const priceTable = () => compareCards(AREAS.filter((a) => VERIFIED.price[a.key]).map((a) => ({
  name: a.name, href: a.href,
  cells: { no: to5k(a.houses.medianListPriceNoFee), yes: to5k(a.houses.medianListPriceWithFee), fee: `$${a.houses.medianMonthlyHoaFee} a month` },
})), [
  { key: "no", label: "House with no HOA fee", num: true },
  { key: "yes", label: "House with an HOA fee", num: true },
  { key: "fee", label: "Typical HOA fee", num: true },
], { caption: "Typical asking price of a house for sale, and the typical HOA fee where there is one", nameLabel: "Area" });

/* The typical fee on a house and on a condo. */
const feeTable = () => compareCards([
  { name: "House", icon: "home", cells: { fee: `$${HOUSE_FEE.medianMonthlyHoaFee} a month`, half: `${to10(HOUSE_FEE.hoaFeeP25)} to ${to10(HOUSE_FEE.hoaFeeP75)}`, covers: "Shared areas; often trash and a pool" } },
  { name: "Condo", icon: "pool", cells: { fee: `About ${to10(Math.round(CONDO.median / 50) * 50)} a month`, half: `${to10(CONDO.p25)} to ${to10(CONDO.p75)}`, covers: "Insurance, water, trash and a pool" } },
], [
  { key: "fee", label: "Typical HOA fee" },
  { key: "half", label: "Half pay between" },
  { key: "covers", label: "What it usually includes" },
], { caption: "The typical monthly HOA fee on a home for sale", nameLabel: "Home" });

/* Our two drawings, each beside the sentence it shows. */
const DRAW_CSS = "<style>.c3-draw{margin:1.2rem 0 1.6rem;max-width:520px}.c3-draw svg{display:block;width:100%;height:auto;border-radius:6px}"
  + ".c3-draw figcaption{color:var(--muted);font-size:.95rem;line-height:1.6;margin-top:.6rem}</style>";
const fig = (name, caption) => `<figure class="c3-draw">${drawing(name)}<figcaption>${caption}</figcaption></figure>`;

const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css();
/* Made at load time: mkpage reads pageImages before it builds the sections. */
const CHERRY = ph.aerial("cherry-grove-from-above", "Cherry Grove in North Myrtle Beach from the air: houses near the beach and along the canals, and the salt marsh behind them.",
  { alt: "Cherry Grove in North Myrtle Beach from the air: the beach and part of a fishing pier at the left, rows of houses along canals, and a wide salt marsh with winding creeks" });

/* Primary sources, each opened by the researcher and again by the verifier. */
const CONDO_LAW = "https://www.scstatehouse.gov/code/t27c031.php";
const DISCLOSURE_LAW = "https://www.scstatehouse.gov/code/t27c050.php";
const DEEDS = "https://www.horrycountysc.gov/departments/register-of-deeds/";
const SWA = "https://www.solidwasteauthority.org/residential.html";
const CENTERS = "https://www.solidwasteauthority.org/recyclingcenters.html";
const MB_TRASH = "https://www.cityofmyrtlebeach.com/departments/public_works_department/solid_waste_and_recycling_division.php";
const PONDS = "https://horrycountysc.gov/news/articles/top-tips-for-stormwater-pond-maintenance/";
const COURT = "https://www.sccourts.org/media/opinions/HTMLFiles/SC/24771.htm";
const INSURANCE = "https://dc.statelibrary.sc.gov/bitstreams/3d3d09a8-4ccd-4575-8c33-c36b67703984/download";

const nmb = AREAS.find((a) => a.key === "North Myrtle Beach");
const cf = AREAS.find((a) => a.key === "Carolina Forest");

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Cherry Grove aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Homes With No HOA in Myrtle Beach: Where, Cost, Pros and Cons",
  description: "Where to find homes with no HOA fee around Myrtle Beach, what they cost, the pros and cons, why condos almost always have a fee, and the typical HOA fee.",
  ogTitle: "Homes with no HOA around Myrtle Beach: where they are, what they cost and what to check",
  crumb: "Homes With No HOA",
  eyebrow: "Buying a home",
  h1: "Where can you buy a home with no HOA in Myrtle Beach?",
  h1em: "Where to look, what it costs and what to check.",
  sub: "Most homes for sale with no HOA fee are outside a named neighborhood. North Myrtle Beach, Surfside Beach, Loris and Aynor have the highest share.",
  heroMedia: glance([
    { icon: "beach", label: "North Myrtle Beach", text: "More than half show no fee" },
    { icon: "town", label: "Loris and Aynor", text: "More than half show no fee" },
    { icon: "home", label: "Carolina Forest", text: "Every home shows a fee" },
  ]),
  heroCta: { label: "Get the list", href: "/contact/", text: "Tell us your price range, and we will send you the homes for sale with no HOA fee." },
  author: "devin",
  shortAnswer: [
    `About 1 in 4 homes for sale around Myrtle Beach shows no HOA fee, from Little River to Murrells Inlet and inland to Aynor. More than half of the homes for sale with a North Myrtle Beach, Surfside Beach, Garden City, Loris or Aynor address show no fee. Every home for sale in Carolina Forest shows one.`,
    `A condo almost always has a fee, because the owners must share the cost of the building. The typical HOA fee is $${HOUSE_FEE.medianMonthlyHoaFee} a month on a house and about ${to10(Math.round(CONDO.median / 50) * 50)} on a condo.`,
  ],
  sections: [
    { h2: "Where are the homes with no HOA fee around Myrtle Beach?", toc: "Where they are", html: (bg) =>
      CSS + DRAW_CSS +
      h.p("Homes with no HOA fee are for sale in every area around Myrtle Beach except Carolina Forest. The map shows the areas, from Little River in the north to Murrells Inlet in the south.") +
      MAP.html +
      h.p("The share of homes for sale with no HOA fee changes a lot from one area to the next, from none in Carolina Forest to about 2 in 3 in Aynor.") +
      shareChart() +
      h.p(`Most homes for sale with no HOA fee are on streets that are not part of a named neighborhood. In North Myrtle Beach, almost all of them are in four parts of town: Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive. Our ${h.a("/submarkets/north-myrtle-beach/", "guide to North Myrtle Beach")} shows what each part is like.`) +
      CHERRY +
      h.p("In Loris and Aynor, two towns inland north of Conway, almost every home for sale with no HOA fee is outside a named neighborhood.") +
      h.p(`Carolina Forest is the opposite. Every one of its ${cf.homes.listings} homes for sale shows an HOA fee, usually about $${cf.houses.medianMonthlyHoaFee} a month for a house. Our guide to ${h.a("/submarkets/carolina-forest/the-farm/", "The Farm at Carolina Forest")} shows what living in one of its neighborhoods is like.`) +
      h.p("Some campground communities near the beach have homes that show no HOA fee because the owner leases the land under the home and pays a yearly lease. We left those homes out of every count on this page.") +
      h.cta("Get the list of homes with no HOA fee.", "Tell us your price range and the areas you like. One of our agents will send you the homes for sale with no HOA fee.", "Get the list", "/contact/", bg) },

    { h2: "What do you gain and give up with no HOA in Myrtle Beach?", toc: "Pros and cons", html: (bg) =>
      h.p("With no HOA, you pay no HOA fee and follow no HOA rules. You also have no shared pool, and outside the towns you arrange your own trash pickup.") +
      fig("house-own-yard", "A house with no HOA: your own fenced yard, a shed and a boat in the driveway, with no HOA to ask first.") +
      prosCons([
        "No monthly HOA fee, and no surprise HOA bill for a big repair.",
        "No HOA to ask before you put up a fence, add a shed or park a boat in the driveway.",
        "No HOA rule against renting the home out. In our experience, many HOAs here do not allow renting a house out at all.",
      ], [
        "No shared pool, clubhouse or common areas. On a house, an HOA fee often includes these.",
        { text: "No HOA rules for the houses next door either.", act: "Look at the houses on the street before you offer." },
        { text: "Outside the town limits, you arrange your own trash pickup.", act: "Find out whether the home is inside a town that picks up trash." },
        { text: "A home with no HOA can still have deed restrictions filed with the county.", act: "Have your closing attorney read them before you are committed to buy." },
      ], { bg }) +
      h.p(`In our experience, the biggest mistake buyers moving here from New York make is buying before they check that an HOA's rules fit how they live: a boat, a golf cart, a pool or renting the home out. City and county ${h.a("/invest/str-rules/", "rules on short-term rentals")} still apply with no HOA.`) +
      h.p(`If you want a pool, a clubhouse or a gate, you will pay an HOA fee for them. Our guides to the ${h.a("/buyers/best-neighborhoods/", "best neighborhoods for what you want nearby")} and to ${h.a("/buyers/gated-communities/", "gated communities around Myrtle Beach")} show where to look. Our guide to whether ${h.a("/hoa/benefits/", "HOA fees are worth it")} lists what the fee buys.`) },

    { h2: "What does a home with no HOA fee cost around Myrtle Beach?", toc: "What they cost", html: () =>
      h.p(`A house for sale with no HOA fee usually asks about ${to5k(ALL.detachedHouses.medianListPriceNoFee)}. A house with a fee usually asks about ${to5k(ALL.detachedHouses.medianListPriceWithFee)}. The house with no fee asks more in every area.`) +
      priceTable() +
      h.p("These are asking prices. The houses with no fee differ in other ways too, such as where they are.") +
      h.p(`The lowest asking prices for a house with no HOA fee are inland, in Conway, Loris and Aynor. Our guide to the ${h.a("/buyers/affordable-places-to-live/", "most affordable places to buy near Myrtle Beach")} compares what a home costs in each town.`) },

    { h2: "What do you pay for yourself with no HOA?", toc: "What you pay for", html: () =>
      h.p("With no HOA, the main things you take on are trash pickup, your yard and any pond on your land. Most HOA fees on houses here include the shared areas, and more than half include trash pickup and a pool. Very few include a house's insurance or water.") +
      fig("trash-carts", "Trash and recycling carts set out at the curb.") +
      h.p("Who picks up your trash depends on whether the home is inside a town.") +
      h.ul([
        `Inside the Myrtle Beach city limits, the ${h.ext(MB_TRASH, "city picks up trash")}, recycling and yard waste once a week. It costs about $34 a month on the city utility bill.`,
        `North Myrtle Beach, Conway, Surfside Beach, Loris, Aynor, Briarcliffe Acres and Atlantic Beach also ${h.ext(SWA, "offer trash service")}.`,
        `Outside the town limits, no one from the county picks up at the curb. You arrange pickup yourself, or use one of the county's ${h.ext(CENTERS, "25 drop-off centers")}, which are only for homes outside the towns.`,
      ]) +
      h.p("A Myrtle Beach mailing address does not mean the home is inside the city. This is how trash works in Horry County. Some Murrells Inlet and Garden City homes are in Georgetown County instead.") +
      h.p(`Most of the county's ${h.ext(PONDS, "stormwater ponds")} belong to HOAs, businesses or the owners of the land, and the owner must keep them working. With no HOA, a pond on your land is yours to keep up. The county keeps up only the roads it owns.`) },

    { h2: "Can you buy a condo with no HOA fee in Myrtle Beach?", toc: "Condos", html: () =>
      h.p(`Almost never. Of about ${(Math.round(CONDO.count / 100) * 100).toLocaleString("en-US")} condos for sale around Myrtle Beach, only ${CONDO.noFee === 1 ? "one" : CONDO.noFee} showed no HOA fee.`) +
      h.p(`South Carolina law makes every condo owner pay a share of the ${h.ext(CONDO_LAW, "cost of running and repairing the building")}. The owners as a group must also insure the condo property. The fee is how each owner pays that share.`) +
      h.p(`A few townhouses for sale show no HOA fee. Our guide to ${h.a("/hoa/hoa-vs-poa/", "an HOA, a POA or a condo association")} explains what each one covers.`) },

    { h2: "What is a typical HOA fee in Myrtle Beach?", toc: "Typical HOA fees", html: () =>
      h.p(`The typical HOA fee around Myrtle Beach is $${HOUSE_FEE.medianMonthlyHoaFee} a month on a house and about ${to10(Math.round(CONDO.median / 50) * 50)} a month on a condo. About 1 in 8 houses for sale with an HOA fee shows $200 a month or more.`) +
      feeTable() +
      h.p("A condo fee is higher because it includes the cost of the building. Most condo fees here include the building's insurance, water and sewer, trash and a pool.") +
      h.p(`${h.ext(INSURANCE, "Property insurance near the coast")} has gone up, mainly because repairs cost more, insurers pay more for their own insurance, and property values are higher.`) +
      h.p(`When you compare two fees, compare what each one includes. Our guides to ${h.a("/hoa/", "what HOA fees cover")}, ${h.a("/hoa/reserves/", "HOA savings for big repairs")} and ${h.a("/hoa/special-assessments/", "special assessments")} show what to look at.`) },

    { h2: "How do you check a home for an HOA before you offer?", toc: "How to check", html: (bg) =>
      h.p("Check three papers before you make an offer: the listing, the seller's disclosure and the papers filed with the county.") +
      h.ol([
        "<strong>The listing.</strong> A blank HOA fee means no fee is listed. It does not prove there is no HOA. A few homes for sale with no fee listed are in a neighborhood with a voluntary association or community dues.",
        `<strong>The seller's disclosure.</strong> For most sales, South Carolina requires the seller to fill out a ${h.ext(DISCLOSURE_LAW, "disclosure form")}. It asks whether the home is in an HOA and whether it has deed restrictions. The seller can answer that he makes no claim either way. A builder selling a new home for the first time does not have to fill it out.`,
        `<strong>The papers filed with the county.</strong> Deed restrictions are filed at the ${h.ext(DEEDS, "Horry County Register of Deeds")}, with the deed and the map of the lots. The county does not show these papers online, so they are read in person in Conway. Have your closing attorney read them before you are committed to buy.`,
      ]) +
      h.p(`A deed restriction is a rule on the land, filed with the county. It can limit what you build, even when there is no HOA and no fee. ${h.ext(COURT, "South Carolina courts")} read these rules narrowly. When the words are unclear, the court favors the owner's free use of the land, unless that would defeat the plain purpose of the rule.`) +
      h.cta("Get the homes with no HOA fee in your price range.", "Tell us your price range and the areas you like. One of our agents will send you the list.", "Get the list", "/contact/", bg) },
  ],
  faqTitle: "Homes with no HOA FAQ",
  faq: [
    { q: "Are there homes with no HOA in Myrtle Beach?", a: "Yes. About 1 in 5 homes for sale with a Myrtle Beach address outside Carolina Forest shows no HOA fee. Across the wider area, from Little River to Murrells Inlet and inland to Aynor, it is about 1 in 4." },
    { q: "Are there homes with no HOA in North Myrtle Beach?", a: "Yes. More than half of the homes for sale with a North Myrtle Beach address show no HOA fee. Almost all of them are in Cherry Grove, Crescent Beach, Windy Hill and Ocean Drive." },
    { q: "Can you buy a condo in Myrtle Beach with no HOA fee?", a: "Almost never. Only one of about 2,700 condos for sale around Myrtle Beach showed no HOA fee. South Carolina law makes condo owners share the cost of running and repairing the building." },
    { q: "Why are HOA fees so high in Myrtle Beach?", a: "Condo fees are high because they include the cost of the building. Most include the building's insurance, water and sewer, trash and a pool. Fees on houses are much lower, because most include only the shared areas, trash and a pool." },
    { q: "What is the average HOA fee in Myrtle Beach?", a: "The typical HOA fee is $95 a month on a house and about $650 a month on a condo. About 1 in 8 houses for sale with an HOA fee shows $200 a month or more." },
    { q: "Does every neighborhood in Myrtle Beach have an HOA?", a: "No. About 1 in 4 homes for sale around Myrtle Beach shows no HOA fee, and most of those are on streets outside a named neighborhood. In Carolina Forest, every home for sale shows an HOA fee." },
    { q: "How do you find a home with no HOA in Myrtle Beach?", a: "Look at homes on streets outside a named neighborhood. They are most common in North Myrtle Beach, Surfside Beach, Garden City, Loris and Aynor. Before you offer, confirm there is no HOA in the seller's disclosure and in the papers filed with the county." },
    { q: "Can a home with no HOA still have rules?", a: "Yes. A home with no HOA can still have deed restrictions filed with the county, and they can limit what you build. Your closing attorney can read them before you are committed to buy." },
  ],
  sources: [
    { name: "S.C. condo law", href: CONDO_LAW },
    { name: "S.C. seller disclosure law", href: DISCLOSURE_LAW },
    { name: "Horry County Register of Deeds", href: DEEDS },
    { name: "Horry County Solid Waste Authority", href: SWA },
    { name: "City of Myrtle Beach trash service", href: MB_TRASH },
    { name: "S.C. Department of Insurance", href: INSURANCE },
  ],
  sourcesNote: `Counts and prices: homes for sale in the local MLS, on ${COUNTED}. Prices are asking prices. Areas are mailing addresses. Homes on leased land are left out. Not legal advice.`,
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get the homes with no HOA fee in your price range.", p: "Tell us your price range and the areas you like. One of our agents will send you the homes for sale with no HOA fee.", label: "Get the list", href: "/contact/" },
  keywords: "Myrtle Beach homes no HOA, houses for sale no HOA Myrtle Beach, condos no HOA Myrtle Beach, North Myrtle Beach no HOA, average HOA fees Myrtle Beach, why are HOA fees so high Myrtle Beach",
  about: "Homes for sale with no homeowners association fee around Myrtle Beach, South Carolina",
};
