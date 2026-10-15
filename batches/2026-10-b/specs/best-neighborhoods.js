/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what each one does best.
 *
 * Round 14c, 2026-10-15 (rewrite check v6, row 258; OWNER-EYE-14; SIBLING-OWNERS.md): picks in the short answer; on a
 * phone the map comes before the guide; Tidewater, Barefoot and Grande Dunes lead with facts the gated page does
 * not own (rows 259 to 262); The Farm without the preserve; Berkshire Forest, Deerfield and Forestbrook Estates
 * rebuilt on lot sizes (row 263); one compact table; a two-line yearly cost; five unclear aerials cut.
 * Batch 2026-10-b, page 1. Version 14, 2026-10-15 (round 14: review/ROUND-14.md; the owner's third read in
 * voice/VERDICTS.md, 2026-10-14; lessons B39 to B44; CRAFT 1, 3, 4 and 5). A rebuild, not a patch.
 *
 * The owner on this page: "you list every neighborhood twice in a cluttered and messy way there's two photos
 * nobody knows what they are trying to say its literally just a useless annoying cluttered pre amble". On all
 * pages: "split them up to what each place does best and be careful not to do it in an illegal way", sell
 * each place like an agent, gloss the obvious, no "The facts:" labels, an offer for every place.
 *
 * Reader. Someone moving here or moving up who typed "best neighborhoods in Myrtle Beach" or "best places to
 * live in the Myrtle Beach area". They know no neighborhood name. They know what they love: the beach, golf,
 * a boat, a town they can walk, a new house with a big pool, more room for the money. They would pay an
 * expert to know: what a normal day is like in each place; the one thing about it they could not have
 * guessed; how far the beach and work are; what is hard about it; what a home costs, in one line; and how to
 * see the homes. The top results for both searches (round 14 notes in the report) name towns, not
 * neighborhoods, give no price, fee or drive time, sort places by who lives there, and offer no way to act
 * on a place. This page beats them on all five.
 *
 * Shape (CRAFT 3, a list of places, "No preamble"): the short answer; one offer box; the selection guide,
 * which is the only list of names before the entries, grouped by feature, never by people, with the one map
 * inside it; then the 15 entries in the guide's order. Each entry: its best non-obvious thing, one picture
 * whose point shows in a second (or none), what a normal day is like and why people choose it, one honest
 * trade-off, then the place's own offer strip: the price and fee in one plain sentence and a button, "See
 * homes for sale in X", to the contact form with the place named. Then the yearly cost (three houses), the
 * FAQ (four), the sources, and the closing offer. Cut from version 13: the hero's want chips (a list of
 * names), the two overview maps and their key (a second and third list), the side-by-side table (a fourth),
 * the "At a glance" facts lines, the 55+ section (one FAQ now), the checks section, the example, the
 * Forestbrook Estates aerial (houses around ponds; its point did not show).
 *
 * Facts: every claim rests on a row. batches/2026-10-b/facts/neighborhoods-facts.md (verified rows, and rows
 * 244 to 256, pending verification (round 14), for the new daily-life facts: the North Myrtle Beach dog
 * rule, the Cherry Grove and Surfside piers, the Lewis Ocean Bay flytraps, the Valor Park market and Warbird
 * Park, Waterbridge's boat storage and calendar, Plantation Lakes' clubhouse, the Prince Creek, Wild Wing,
 * Barefoot and Deerfield drives, Barefoot's cabana and shuttle); gated-communities-facts.md rows 93, 114 and
 * 178 (Tidewater), 96 (Grande Dunes); the-farm-facts.md rows 60 and 93; data/best-neighborhoods.json for the
 * prices, fees and the yearly cost. The struck list is batches/2026-10-b/facts/best-neighborhoods-struck.json.
 *
 * Pictures: one map of the 15, numbered in the guide's order, inside the guide; 14 aerials, each under the
 * sentence it shows (data/photos.json names the points). Design: the liquid glass theme (tools/glass.js),
 * with glass guide cards, a glass offer strip per place and the theme's "Book a showing in X" pill.
 */
const fs = require("fs"), path = require("path");
const { h, story, BB } = require("./_kit.js");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const AM = require(path.join(BB, "tools", "area-map.js"));
const IC = require(path.join(BB, "tools", "icons.js"));
/* Round 14: the liquid glass theme and the per-place offer pill (tools/glass.js; CRAFT 4, "Look modern"). */
const G = require(path.join(BB, "tools", "glass.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const BATCH_DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!BATCH_DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(BATCH_DATA, "photos.json")].filter((f) => fs.existsSync(f));
const PHOTOS = [];
for (const f of PHOTO_FILES) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}
const kit = PK.create({ h, theme: "glass", photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });

const D = JSON.parse(fs.readFileSync(path.join(BATCH_DATA, "best-neighborhoods.json"), "utf8"));
const N = Object.fromEntries(D.neighborhoods.map((n) => [n.id, n]));
const ORDER = D.neighborhoods.map((n) => n.id);

const SELF = "/buyers/best-neighborhoods/";
const OFFER = "/contact/";
const FARM = "/submarkets/carolina-forest/the-farm/";
const GATED = "/buyers/gated-communities/";

/* Primary sources linked in the body, each next to its claim. */
const NMB_BEACH = "https://www.nmb.us/179/Beach-Ordinances";
const SSB_PIER = "https://www.surfsidebeach.org/212/Surfside-Beach-Fishing-Pier";
const SCDNR_LOB = "https://www.dnr.sc.gov/news/2025/Jun/jun10-lewisoceanbay.php";
const MARKET = "https://waccamawmarkets.org/";
const FEMA = "https://msc.fema.gov/portal/home";
const SC_TAX = "https://www.scstatehouse.gov/code/t12c037.php";
const CG_CANALS = "https://www.nmb.us/AgendaCenter/ViewFile/Item/1251?fileID=3883";
const FARM_HOA = "https://www.farmatcarolinaforest.com/";
const TW_GRILLE = "https://tidewatergolf.com/joeys-clubhouse-grille/brunch/";
const GD_SUN = "https://www.aol.com/miami-look-myrtle-beach-grande-100000795.html";

/* ---------------------------------------------------------------------------- */
/* Pictures                                                                       */

/* One aerial per entry where its point shows in a second, under the entry's first paragraph. The Surfside
   Beach view has crops, so it is the page's share image. */
const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css();
const AER = (name, caption, alt) => ph.aerial(name, caption, { alt, closeUp: true });
const PHOTO = {
  "cherry-grove": AER("cherry-grove-canals-from-above", "Cherry Grove from the air: the beach, the canals behind it and the salt marsh.",
    "Cherry Grove in North Myrtle Beach from the air: the beach and part of a fishing pier at the left, rows of houses on canals labelled Canals, and a wide salt marsh with winding creeks labelled Salt marsh"),
  "surfside-beach": ph.aerial("surfside-beach-from-above", "The ocean side of Surfside Beach from the air: streets of homes from US 17 Business, at the left, to the beach and the pier.",
    { alt: "Surfside Beach from the air: streets of houses under trees from a highway at the left to a wide beach and the ocean at the right, with a fishing pier and a public beach access marked" }),
  "pine-lakes": AER("pine-lakes-from-above", "Pine Lakes from the air: The Preserve and Pine Lakes Estates, outlined in orange, beside the Pine Lakes Country Club golf course.",
    "Pine Lakes in Myrtle Beach from the air: curving streets of houses around ponds, outlined in orange, beside a golf course with green fairways and sand traps, and the beach at the far right"),
  "tidewater": AER("tidewater-from-above", "Tidewater Plantation from above: homes under the trees, with the golf course around them.",
    "Tidewater Plantation in North Myrtle Beach from above: houses under trees around a pool, labelled, with golf fairways and greens on both sides"),
  "barefoot-resort": AER("barefoot-resort-from-above", "Barefoot Resort from above: the swing bridge over the Intracoastal Waterway, and Barefoot Landing across the water.",
    "Barefoot Resort from above: a steel swing bridge labelled Swing bridge over a wide waterway, a marina of boats below condo towers, and shops labelled Barefoot Landing on the far bank"),
  "prince-creek": AER("prince-creek-from-above", "Prince Creek from above: streets of houses beside the TPC Myrtle Beach golf course.",
    "Prince Creek from above: curving streets of houses and two ponds, with the TPC Myrtle Beach golf course, labelled, at the left"),
  "plantation-lakes": AER("plantation-lakes-from-above", "Plantation Lakes from above: the two pools and the dock on a point in the lake.",
    "Plantation Lakes from above: two pools on a point in a lake, labelled, a small dock, courts across the road and houses along the shore"),
  "market-common": AER("market-common-from-above", "The Market Common from the air: its homes, outlined in orange, with Grand Park beside them.",
    "The Market Common from the air: homes outlined in orange beside a lake, ball fields and a lake labelled Grand Park, a second outlined group labelled The Reserve at Market Common, and the airport runway at the bottom"),
  "berkshire-forest": AER("berkshire-forest-from-above", "Berkshire Forest from above: the first pool complex beside a lake.",
    "Berkshire Forest from above: a pool complex beside a lake, labelled, a tennis court, ponds and streets of houses"),
};

/* The one map: the 15, numbered in the guide's order, a name beside each dot that has room. The guide is its
   key, so the tool's own numbered key is left off (it would be a second list of names). */
const MAP = kit.placesMap("Neighborhoods", D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: `#${n.id}` })), {
  caption: "Map of the 15 neighborhoods. The numbers match the guide.",
});
const MAP_HTML = MAP.html.replace(/<ol class="c3-map-key"[\s\S]*?<\/ol>/, "");

/* ---------------------------------------------------------------------------- */
/* The selection guide (CRAFT 3, "No preamble"): each place once, under the thing it does best. Features    */
/* only, never who lives anywhere (fair housing).                                                            */

const GROUPS = [
  { icon: "beach", label: "Walk to the beach", items: [
    ["cherry-grove", "canals, a pier, dogs on the sand"],
    ["surfside-beach", "a free pier"]] },
  { icon: "golf", label: "Golf at the door", items: [
    ["pine-lakes", "the city's first course"],
    ["tidewater", "golf and brunch on the marsh"],
    ["barefoot-resort", "a swing bridge to the shops"],
    ["prince-creek", "a TPC course"],
    ["wild-wing", "a renovated course"],
    ["grande-dunes", "a course of the year"]] },
  { icon: "dock", label: "A boat or a paddle", items: [
    ["plantation-lakes", "a pontoon-boat lake"],
    ["waterbridge", "lakes to paddle"]] },
  { icon: "shopping", label: "A town center you can walk", items: [
    ["market-common", "shops and a market"]] },
  { icon: "home", label: "Newer homes", items: [
    ["forestbrook-estates", "a garden plot"]] },
  { icon: "dollar", label: "Lower prices", items: [
    ["the-farm", "cable TV in the fee"],
    ["berkshire-forest", "a school half a mile away"],
    ["deerfield", "bigger wooded lots"]] },
];
{
  const seen = GROUPS.flatMap((g) => g.items.map((i) => i[0]));
  if (seen.join() !== ORDER.join()) throw new Error("the guide's order must be the data order (the entries and the map numbers): " + seen.join());
}
const GUIDE_CSS = "<style>"
  + ".c3-guide{max-width:960px;margin:1rem 0 0}"
  + ".c3-guide-grid{display:grid;gap:.8rem;grid-template-columns:1fr;margin:0 0 1.2rem}"
  + "@media (min-width:640px){.c3-guide-grid{grid-template-columns:1fr 1fr}}"
  /* On a wide screen the map sits beside the cards, so the guide and its map are read together. */
  + "@media (min-width:980px){.c3-guide{max-width:1180px;display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:1.4rem;align-items:start}.c3-guide .c3-guide-grid{margin:0}.c3-guide figure{margin-top:0}}"
  /* Glass cards (tools/glass.js tokens: --g-edge, --g-hi, --g-sh), on the theme's field. */
  + ".c3-guide-card{background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none);border-radius:16px;padding:.75rem 1rem .55rem}"
  + ".c3-guide-card h3{display:flex;align-items:center;gap:.55rem;font-family:var(--sans);font-size:1.05rem;font-weight:600;color:var(--navy);margin:0 0 .35rem}"
  + ".c3-guide-card h3 .i{flex:none;display:inline-flex;width:2rem;height:2rem;border-radius:50%;align-items:center;justify-content:center;background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(232,201,154,.55));border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff,0 3px 10px -4px rgba(145,89,43,.45);color:var(--brass-ink)}"
  /* Each place is a row, not a list item: its number is drawn from data-n (CSS), so the number matches the
     map and the entry without adding a figure to the prose (score.js P2), and a group of links is not read
     as an "On this page" list that must name every section (score.js H14). */
  + ".c3-gi{position:relative;padding-left:1.7rem;color:var(--muted);font-size:1rem;line-height:1.35;margin:0 0 .3rem}"
  + ".c3-gi::before{content:attr(data-n);position:absolute;left:0;top:.2rem;color:var(--g-ink,var(--brass-ink));font-weight:600}"
  + ".c3-gi a{display:inline-block;padding:.2rem 0;color:var(--navy);font-weight:600;text-decoration:underline;text-underline-offset:.18em}"
  + ".c3-place-cta{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem 1.2rem;max-width:760px;margin:1.6rem 0 .4rem;padding:1rem 1.2rem;border-radius:20px;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none);"
  + "-webkit-backdrop-filter:var(--g-blur,none);backdrop-filter:var(--g-blur,none)}"
  + ".c3-place-cta>p:first-child{flex:1 1 18rem;margin:0;color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.55}"
  + "main#main .c3-place-cta .c3-offer{margin:0;flex:0 1 auto}"
  /* The side-by-side table: three short columns that stay a table at 390 px (OWNER-EYE-14 H5). */
  + ".c3-mini{max-width:760px;margin:1rem 0 1.2rem;padding:.4rem .8rem .6rem;border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none)}"
  + ".c3-mini table{width:100%;border-collapse:collapse;font-size:.95rem;line-height:1.35}"
  + ".c3-mini caption{text-align:left;font-weight:600;color:var(--navy);padding:.4rem 0 .5rem}"
  + ".c3-mini th,.c3-mini td{text-align:left;vertical-align:top;padding:.45rem .5rem .45rem 0;border-bottom:1px solid rgba(28,32,40,.1);color:var(--navy)}"
  + ".c3-mini thead th{font-weight:600;border-bottom:1px solid rgba(28,32,40,.25)}"
  + ".c3-mini tbody th{font-weight:600}.c3-mini a{color:var(--navy);text-decoration:underline;text-underline-offset:.18em}"
  /* On a phone the map comes first, as a picture of where the places are, and the guide's names follow
     once (OWNER-EYE-14 H1: the list must not read twice in a row). */
  + "@media (max-width:979px){.c3-guide{display:flex;flex-direction:column}.c3-guide>figure,.c3-guide>.c3-map-figure{order:-1;margin:0 0 1rem}}"
  /* No preamble (CRAFT 3): on a phone the sections sit closer, the offer band is shorter, and the guide's
     cards are tighter, so the first entry starts sooner. Nothing is hidden. */
  + "@media (max-width:699px){main>section{padding-top:2.6rem!important;padding-bottom:2.6rem!important}"
  + "main>section[style^='background:var(--navy)'] p[style*='font-size:1.7rem'],main>section[style^='background:var(--navy)'] h2{font-size:1.4rem!important}"
  + ".c3-guide-grid{gap:.7rem}.c3-guide-card{padding:0;background:none;border:0}.c3-guide-card h3{font-size:1rem;margin-bottom:.1rem}"
  + ".c3-guide-card h3 .i{width:1.6rem;height:1.6rem}.c3-gi{font-size:.97rem;margin-bottom:.1rem}.c3-gi a{padding:.15rem 0}}"
  + "</style>";
const GUIDE = GUIDE_CSS + `<div class="c3-guide c3-guide-map"><div class="c3-guide-grid">`
  + GROUPS.map((g) => `<div class="c3-guide-card"><h3><span class="i">${IC.icon(g.icon, { size: 20 })}</span>${g.label}</h3>`
    + g.items.map(([id, what]) => `<div class="c3-gi" data-n="${ORDER.indexOf(id) + 1}"><a href="#${id}">${N[id].name}</a>: ${what}</div>`).join("")
    + `</div>`).join("")
  + `</div>${MAP_HTML}</div>`;

/* ---------------------------------------------------------------------------- */
/* The 15 entries (CRAFT 5, "Sell the place like the best agent in town"): the best thing a buyer could not  */
/* have guessed, then a normal day and why people choose it, then one honest trade-off, then the place's own */
/* offer strip with the price and fee in one plain sentence. Every claim is a ledger row (header comment).   */

/* The place's own offer (CRAFT 3, "Every place gets its own offer"): one glass strip that holds the price
   and fee in one plain sentence and the theme's pill, "Book a showing in X", to the contact form with the
   place named. The price is the reader's next fact before they act, so it sits with the offer. */
const placeOffer = (id, line) => `<div class="c3-place-cta"><p>${line}</p>${G.offer(N[id].short, { href: `${OFFER}?place=${encodeURIComponent(N[id].name)}` })}</div>`;
const ENTRY = (id, headline, paras, price) => {
  const num = ORDER.indexOf(id) + 1;
  return { h2: `${num}. ${N[id].name}: ${headline}`, toc: N[id].name, id,
    html: h.p(paras[0]) + (PHOTO[id] || "") + paras.slice(1).map((t) => h.p(t)).join("") + placeOffer(id, price) };
};

const ENTRIES = [
  ENTRY("cherry-grove", "a fishing pier, the salt marsh and dogs on the beach", [
    `In Cherry Grove, a dog can come to the beach with you. North Myrtle Beach ${h.ext(NMB_BEACH, "allows leashed dogs on the sand")} all year, except from 10 a.m. to 4 p.m. between May 15 and Labor Day.`,
    "A public beach access is about 0.1 mile away, the closest walk to the sand of the 15 neighborhoods here. Behind the beach, channels were dug into the salt marsh, and those canals now run behind rows of houses. On foot, Russell Burgess Coastal Preserve, with a walkway and a pier, is under half a mile away.",
    "Cherry Grove Pier, built in the 1950s, is about a 12-minute walk. In 1964 a 1,780-pound tiger shark was landed from it, a world record at the time.",
    `Living this close to the marsh has a cost: almost every house here is in ${h.ext(FEMA, "FEMA's high-risk flood zone")}, so a mortgage usually comes with flood insurance.`,
  ], "Houses in Cherry Grove usually sell for about $695,000, and most homes for sale are listed with no homeowners association (HOA) fee."),

  ENTRY("surfside-beach", "a free concrete pier with two restaurants", [
    `The ocean side of Surfside Beach has its own town pier, and ${h.ext(SSB_PIER, "walking onto it is free")}. The concrete pier reaches 814 feet into the ocean, with two restaurants, an ice cream shop and a bait and tackle shop. From April through October it is open until 1 a.m.`,
    "Walking to the pier takes about 9 minutes, about 0.4 mile, and the sand is the same distance. Streets of houses run from US 17 Business to the beach.",
    "Surfside Beach began as part of a rice plantation called The Ark. Later, George J. Holliday renamed it Floral Beach for his wife, Flora. The Hollidays built a pavilion, a general store and a few rental cottages for summer visitors.",
    "About a quarter of the homes here are in a high-risk flood zone, where a lender usually requires flood insurance.",
  ], "Houses on the ocean side of Surfside Beach usually sell for about $705,000 and condos for about $405,000. Most homes for sale here are listed with no HOA fee."),

  ENTRY("pine-lakes", "newer houses beside Myrtle Beach's first golf course", [
    "Sports Illustrated was planned at Pine Lakes. In 1954 a group of Time-Life executives came to play the course and plan a new weekly sports magazine. The clubhouse is now on the National Register of Historic Places.",
    "Pine Lakes Country Club opened in 1927 as Ocean Forest Country Club, Myrtle Beach's first golf course. Robert White, a native of St. Andrews, Scotland, and the first president of the PGA of America, designed it.",
    "The Preserve at Pine Lakes and Pine Lakes Estates are two sections of houses beside the course. A Myrtle Beach bike trail along Grissom Parkway is about 0.2 mile away.",
    "The homes are inside the city of Myrtle Beach, so owners pay city property tax on top of the county's.",
  ], "The middle home sale in these two sections in the past year was about $600,000, and half sold for $540,000 to $670,000. Owners in the two sections pay an HOA fee of about $95 a month."),

  ENTRY("tidewater", "golf, brunch and a boat yard on the marsh side", [
    `At Tidewater Plantation, brunch is down the street. ${h.ext(TW_GRILLE, "Joey's Clubhouse Grille")}, a public restaurant at Tidewater Golf Club, serves brunch on Saturdays and Sundays. The tables look out over the course.`,
    "The golf course winds between the homes. Some of the streets have sailing names, such as Spinnaker Drive and Topsail Lane.",
    "Owners have a storage yard for boats, campers and RVs at no extra charge. The South Island section, across a wooden bridge, has its own dock and a clubhouse with a pool.",
    "Tidewater is between the Intracoastal Waterway and Cherry Grove Inlet, on the marsh, not the ocean, so owners drive to the beach.",
  ], "Houses in Tidewater usually sell for about $625,000, and the HOA fee is about $230 a month."),

  ENTRY("barefoot-resort", "a swing bridge to the shops, and four golf courses", [
    "Barefoot Resort's road to the shops crosses a swing bridge from the 1930s, moved here from Edenton, North Carolina, the year the resort's golf courses opened. Barefoot Landing's shops and restaurants are on the far side of the Intracoastal Waterway, about 6 minutes by car from the condo neighborhoods.",
    "The resort has four golf courses, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman, and its neighborhoods grew up around them. Many streets carry seashell names, from Junonia Drive to Moonshell Drive.",
    "Beside the waterway, the North Tower pool holds about 356,000 gallons. Owners in two of the resort's associations can use it.",
    "Most homes for sale here are condos. Each association has its own amenities and rules, so our agents check which one a home belongs to before you offer.",
  ], "Homes for sale in these Barefoot sections, mostly condos, usually sell for about $430,000, and a condo pays about $680 a month in HOA fees."),

  ENTRY("prince-creek", "a Tom Fazio course near the Murrells Inlet MarshWalk", [
    "Prince Creek's sections border TPC Myrtle Beach, a Tom Fazio course that opened in 1999. Tom Watson won the Senior PGA Tour Championship there the next year.",
    "The Murrells Inlet MarshWalk is about 7 minutes away by car. Bellwood Landing, Creekhaven, Longwood Bluffs and Wilderness Pointe are among the neighborhoods of Prince Creek West.",
    "Their road and park association owns The Park at Prince Creek West, a park of mostly woods. Its amenity area has two pools and courts for tennis and pickleball.",
    "The HOA fee changes from section to section. Bellwood Landing, behind its own gate, sells for more, about $810,000.",
  ], "Houses in Prince Creek sold for about $560,000 in the past year, and townhouses for less. The HOA fee is about $100 to $390 a month, by section."),

  ENTRY("wild-wing", "27 holes of golf near Conway", [
    "Wild Wing's Avocet course, designed by Jeff Brauer and Larry Nelson, opened in 1993. A recent renovation, led by Brauer himself, gave it new greens and refreshed bunkers. The club also has the nine-hole Hummingbird course.",
    "Many streets are named for water birds, such as Wood Stork Drive and Black Skimmer Drive. The owners' amenity area, beside a lake, has a pool complex, courts for tennis or pickleball, a basketball court and a playground.",
    "By car, Coastal Carolina University is about 10 minutes away.",
    "The ocean is about 20 minutes away by car.",
  ], "Houses in Wild Wing usually sell for about $600,000, and the HOA fee is about $135 a month."),

  ENTRY("grande-dunes", "South Florida looks on the Intracoastal Waterway", [
    `Grande Dunes was built to look like South Florida. Its ${h.ext(GD_SUN, "first houses followed the style")} of the Florida builder Addison Mizner, with tile roofs, stucco, columns and arches, and many of its most expensive houses still do.`,
    "Its first house sold in October 2000 for $1.15 million. It was the first home in Myrtle Beach away from the oceanfront to sell for more than a million dollars.",
    "The Resort Club course is a Roger Rulewich design beside the Intracoastal Waterway. The National Golf Course Owners Association has named it its course of the year.",
    "Across Grande Dunes, most houses for sale are new or not yet finished. Calais, Palermo and Villa Venezia are among its gated sections.",
  ], "Homes in Calais, Palermo and Villa Venezia, three of its gated sections, usually sell for about $1.5 million. The HOA fee there is about $200 to $375 a month."),

  ENTRY("plantation-lakes", "pontoon boats on a lake with 15 miles of shoreline", [
    "Owners at Plantation Lakes take pontoon boats out on a lake with about 15 miles of shoreline. Many homes back onto the water, and the amenity area, with a dock, is on a point in the lake.",
    "On a cool evening, the clubhouse has a great room with a fireplace and a reading and card room. Two pools, joined by waterfalls, are beside it, and the community has horseshoe pits.",
    "Plantation Lakes has 748 homes and lots. Its houses for sale are the largest on this page, and they cost more than in the other Carolina Forest neighborhoods here.",
    "Plantation Lakes is inland, so a beach day starts with a drive.",
  ], "Houses in Plantation Lakes usually sell for about $740,000, and the HOA fee is about $125 a month."),

  ENTRY("waterbridge", "lakes to paddle and a full clubhouse calendar", [
    "Waterbridge owners can launch a kayak on the neighborhood's lakes from a floating dock. The neighborhood is built around more than 80 acres of lakes and natural areas, and the launch takes any boat with no motor.",
    "Walking paths cross the water on bridges, and the HOA's calendar holds card nights, bunco, mahjong, a book club and potluck Thursdays. The fitness center at the clubhouse is open around the clock.",
    "Owners also have a storage area for boats and jet skis. It is full now, so one of our agents asks about a space before you offer. Courts for tennis, pickleball, basketball and volleyball are a quarter mile from the clubhouse, on Fiddlehead Way.",
    "Builders are still selling new houses here, and some of the newest streets are still filling in.",
  ], "Resale houses in Waterbridge usually sell for about $630,000, and new ones from the builders sold for about $550,000 in the past year. The HOA fee is about $150 a month."),

  ENTRY("market-common", "a town center you can walk, on the old Air Force base", [
    `From the middle of The Market Common, you can walk to a farmers market, the shops and a large city park. ${h.ext(MARKET, "The farmers market")} is held at Valor Park on Saturdays from April to mid-December, about a 5-minute walk away.`,
    "Grand Park, with picnic shelters, ball fields and a playground, is a two-minute walk from the middle of the neighborhood. The houses and townhomes are beside a district of shops and offices, and the beach is a 5-minute drive.",
    "The Market Common is built on the old Myrtle Beach Air Force Base. The base began as an Army Air Corps field in World War II and closed in 1993.",
    "Three Air Force jets stand in Warbird Park nearby, on loan to the city, among them an A-10 Warthog.",
  ], "Houses in The Market Common usually sell for about $540,000 and townhomes for about $398,000. A townhome pays about $300 to $680 a month in HOA fees."),

  ENTRY("forestbrook-estates", "newer houses and a garden plot of your own", [
    "Forestbrook Estates has a community garden with plots for owners, on the same grounds as the pool. Lennar began building here in 2018 and built nearly every home, around ponds, with townhomes beside the houses.",
    `Every home here is zoned for Forestbrook Elementary, Forestbrook Middle and Socastee High, and our page on ${h.a("/buyers/relocating/schools/", "schools near Myrtle Beach")} covers them. The elementary and middle schools are each a 5- to 6-minute drive.`,
    "For a boat, Rosewood Landing, a county ramp on the Intracoastal Waterway, is about 5 miles away by road.",
    "The lots are small, about a sixth of an acre, and the neighborhood has ponds, not a lake.",
  ], "Houses in Forestbrook Estates usually sell for about $395,000, and the HOA fee is under $90 a month."),

  ENTRY("the-farm", "cable TV in the fee, and two pools", [
    "At The Farm, the HOA fee includes cable TV and trash pickup.",
    `The large pool has a wide deck beside a pond, about 400 feet from the activity center, and there is a second, smaller pool. The HOA's amenities also include ${h.ext(FARM_HOA, "a fitness room")}, a basketball court and a playground.`,
    `A Publix is 2 minutes by car from the Farmers Rest Drive entrance. D.R. Horton developed The Farm, and our ${h.a(FARM, "guide to The Farm at Carolina Forest")} tells its history and its rules.`,
    "Townhomes and condos at The Farm cost less, but they pay a second HOA fee on top of The Farm's.",
  ], "Houses at The Farm usually sell for about $350,000, and the HOA fee for a house is $107 a month."),

  ENTRY("berkshire-forest", "a school half a mile away and a water slide", [
    "In Berkshire Forest's Berkshire Village section, River Oaks Elementary School is about half a mile by road, on Augusta Plantation Drive.",
    "Back home, the first pool complex has a water slide. It is beside a lake, with a tennis court, a basketball court and a play area next to it. A second amenity area added a pool and courts for tennis or pickleball.",
    "Centex Homes developed the first sections, such as Crestwood, Sutton Place and Cambridge, and Pulte Homes later added land from two neighboring developments. Berkshire Forest and its Berkshire Village section have more than 1,100 homes together, on lots of about a fifth of an acre.",
    "Most houses for sale here were built in the 2000s and 2010s.",
  ], "Homes in Berkshire Forest usually sell for about $370,000 to $390,000, and the HOA fee is about $115 a month."),

  ENTRY("deerfield", "bigger wooded lots near Surfside Beach", [
    "In the Deerfield Plantation area, a typical lot is about a third of an acre. That is close to twice a typical lot at The Farm or Berkshire Forest. Its older streets are wooded, and the owners' association owns lake and canal land among the homes.",
    "The area grew up around the old Deer Track golf courses near Surfside Beach, and the old South Course is now a neighborhood of new houses. The Surfside Beach Fishing Pier is about a 10-minute drive.",
    "On the old North Course, building has only begun, so homes near it are beside a building site.",
  ], "Homes in the Deerfield Plantation area usually sell for about $355,000, and the HOA fee is under $90 a month."),
];

/* ItemList JSON-LD for the 15 numbered entries. */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The best neighborhoods in Myrtle Beach", numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: N[e.id].name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;


module.exports = G.page({
  theme: "glass",
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Surfside Beach aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Best Neighborhoods in Myrtle Beach by What You Love | Chapter3",
  description: "The best neighborhoods in Myrtle Beach, North Myrtle Beach and Surfside Beach, by what each does best: the beach, golf, boating, a walkable town and value.",
  ogTitle: "The best neighborhoods in Myrtle Beach, by what each one does best",
  crumb: "Best Neighborhoods",
  eyebrow: "Choosing a neighborhood",
  h1: "What are the best neighborhoods in Myrtle Beach?",
  h1em: "An agent's picks, with the price of each.",
  sub: "Fifteen neighborhoods from North Myrtle Beach to Murrells Inlet, sorted by what each does best.",
  toc: false,
  author: "devin",
  heroCta: { title: "Tell us what you want close to home. We will send three neighborhoods that fit.", text: "One of our agents sends the list, with the homes for sale in each. There is no charge.", label: "Get three neighborhoods", href: OFFER },
  shortAnswer: [
    "For a walk to the beach, the best neighborhoods in Myrtle Beach are Cherry Grove and the ocean side of Surfside Beach. For golf at the door, Pine Lakes and Barefoot Resort. For a boat, Plantation Lakes. For shops you can walk to, The Market Common. For a lower price, The Farm.",
  ],
  sections: [
    { h2: "Which Myrtle Beach neighborhood fits what you love?", toc: "Choose by what you love", id: "choose", html:
      CSS + GUIDE },
    ...ENTRIES,
    /* One compact table after the entries (ROUND-14; OWNER-EYE-14 H5): the price and the time to the beach,
       the two numbers a reader compares, as a table that stays a table on a phone. */
    { h2: "How do the 15 neighborhoods compare on price and the beach?", toc: "Side by side", id: "side-by-side", html:
      `<div class="c3-mini"><table><caption>The 15 neighborhoods: price and time to the beach</caption><thead><tr><th scope="col">Neighborhood</th><th scope="col">Homes usually sell for</th><th scope="col">To the beach</th></tr></thead><tbody>`
      + D.neighborhoods.map((n, i) => `<tr><th scope="row"><a href="#${n.id}">${i + 1}. ${n.short}</a></th><td>${n.cells.price}</td><td>${n.cells.beach}</td></tr>`).join("")
      + `</tbody></table></div>` +
      h.p("Times are by car with no traffic, from the middle of each neighborhood to the nearest public beach access.") },
    { h2: "What does a home here cost each year, besides the mortgage?", toc: "Yearly cost", id: "yearly-cost", html:
      h.p(`Besides the mortgage, a house costs about $2,600 a year at The Farm and about $5,600 at Tidewater Plantation. That counts the HOA fee, property tax and flood insurance where it is required. Homeowners insurance comes on top, and our guide to ${h.a("/buyers/coastal-insurance/", "insurance near the coast")} shows what it costs.`) +
      h.p(`If price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places near Myrtle Beach")}. For no HOA fee at all, see ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}. For a gate at the entrance, see our ${h.a(GATED, "guide to gated communities near Myrtle Beach")}. Our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities near Myrtle Beach")} compares four with a 55+ age rule.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "Which Myrtle Beach neighborhoods are closest to the beach?", a: "Of these 15, Cherry Grove is closest, with a public beach access about 0.1 mile from the middle of the neighborhood. On the ocean side of Surfside Beach, the sand is about a 9-minute walk. The Market Common is about 5 minutes from the beach by car." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "The city of Myrtle Beach is better for being close to the beach, and Carolina Forest for big neighborhood pools and lakes. Carolina Forest has almost no homes in a high-risk flood zone, and its neighborhoods here are 10 to 20 minutes from the beach by car." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach and in Cherry Grove are listed with no HOA fee. Most other neighborhoods on this page have an HOA fee of under $250 a month for a house." },
    { q: "Are there 55+ communities near Myrtle Beach?", a: "Yes. Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are 55+ communities. Each has a pool and a clubhouse." },
  ],
  sources: [
    { name: "North Myrtle Beach beach rules", href: NMB_BEACH },
    { name: "Surfside Beach Fishing Pier", href: SSB_PIER },
    { name: "SCDNR, Lewis Ocean Bay", href: SCDNR_LOB },
    { name: "FEMA flood maps", href: FEMA },
    { name: "S.C. property tax law", href: SC_TAX },
    { name: "Tidewater Golf Club", href: TW_GRILLE },
    { name: "The Sun News on Grande Dunes", href: GD_SUN },
  ],
  sourcesNote: "Prices are the middle sale price over 12 months, or the range where few sold, in the sections named. HOA fees come from recent listings, except The Farm's. Drive and walk times are from the middle of each neighborhood, with no traffic, unless a sentence names another start.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Tell us what you want close to home. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
});
