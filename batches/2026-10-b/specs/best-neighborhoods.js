/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what each one does best.
 *
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
 * sentence it shows (data/photos.json names the points). Design: plain until DESIGN-GLASS.md lands.
 */
const fs = require("fs"), path = require("path");
const { h, story, BB } = require("./_kit.js");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const AM = require(path.join(BB, "tools", "area-map.js"));
const IC = require(path.join(BB, "tools", "icons.js"));

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
const kit = PK.create({ h, photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });

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
  "tidewater": AER("tidewater-from-above", "Tidewater Plantation from above: the owners' pool, and the golf course around the homes.",
    "Tidewater Plantation in North Myrtle Beach from above: houses under trees around a pool, labelled, with golf fairways and greens on both sides"),
  "barefoot-resort": AER("barefoot-resort-from-above", "Barefoot Resort from above: the swing bridge over the Intracoastal Waterway, and Barefoot Landing across the water.",
    "Barefoot Resort from above: a steel swing bridge labelled Swing bridge over a wide waterway, a marina of boats below condo towers, and shops labelled Barefoot Landing on the far bank"),
  "prince-creek": AER("prince-creek-from-above", "Prince Creek from above: streets of houses beside the TPC Myrtle Beach golf course.",
    "Prince Creek from above: curving streets of houses and two ponds, with the TPC Myrtle Beach golf course, labelled, at the left"),
  "wild-wing": AER("wild-wing-from-above", "Wild Wing Plantation from above: the owners' pool complex beside a lake, and the golf course.",
    "Wild Wing Plantation from above: a pool complex beside a lake, labelled, courts and a playground, golf course land, labelled, and streets of houses"),
  "grande-dunes": AER("grande-dunes-from-above", "Palermo and Villa Venezia in Grande Dunes from above, with the Intracoastal Waterway at the bottom right.",
    "Palermo and Villa Venezia in Grande Dunes from above, each labelled: large houses with pools around ponds and golf fairways, and the Intracoastal Waterway at the bottom right"),
  "plantation-lakes": AER("plantation-lakes-from-above", "Plantation Lakes from above: the two pools and the dock on a point in the lake.",
    "Plantation Lakes from above: two pools on a point in a lake, labelled, a small dock, courts across the road and houses along the shore"),
  "market-common": AER("market-common-from-above", "The Market Common from the air: its homes, outlined in orange, with Grand Park beside them.",
    "The Market Common from the air: homes outlined in orange beside a lake, ball fields and a lake labelled Grand Park, a second outlined group labelled The Reserve at Market Common, and the airport runway at the bottom"),
  "waterbridge": AER("waterbridge-from-above", "Waterbridge from above: the pools and the clubhouse inside a circle of streets.",
    "Waterbridge from above: a pool complex and clubhouse, labelled, inside a circle drive, with streets of houses all around"),
  "the-farm": AER("the-farm-pool-from-above-2026", "The large pool and the activity center at The Farm, from above.", undefined),
  "berkshire-forest": AER("berkshire-forest-from-above", "Berkshire Forest from above: the first pool complex beside a lake.",
    "Berkshire Forest from above: a pool complex beside a lake, labelled, a tennis court, ponds and streets of houses"),
  "deerfield": AER("deerfield-from-above", "The Deerfield Plantation area from above: wooded streets between the open bands of the old North Course.",
    "The Deerfield Plantation area from above: streets of houses under trees, with two long open grass bands labelled Old North Course land and a pond labelled Old course pond"),
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
    ["cherry-grove", "dogs on the beach, a pier"],
    ["surfside-beach", "a free pier"]] },
  { icon: "golf", label: "Golf at the door", items: [
    ["pine-lakes", "the city's first course"],
    ["tidewater", "golf on the marsh"],
    ["barefoot-resort", "four courses"],
    ["prince-creek", "a TPC course"],
    ["wild-wing", "27 holes"]] },
  { icon: "dock", label: "A boat on the water", items: [
    ["grande-dunes", "a marina, a beach club"],
    ["plantation-lakes", "a pontoon-boat lake"]] },
  { icon: "shopping", label: "A town center you can walk", items: [
    ["market-common", "shops and a market"]] },
  { icon: "pool", label: "New homes and big pools", items: [
    ["waterbridge", "lakes to paddle"],
    ["forestbrook-estates", "garden plots"]] },
  { icon: "dollar", label: "Room for the money", items: [
    ["the-farm", "two pools"],
    ["berkshire-forest", "a water slide"],
    ["deerfield", "wooded streets"]] },
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
  + ".c3-guide-card{background:rgba(255,255,255,.6);border:1px solid var(--rule);border-radius:12px;padding:.75rem 1rem .55rem}"
  + ".c3-guide-card h3{display:flex;align-items:center;gap:.55rem;font-family:var(--sans);font-size:1.05rem;font-weight:600;color:var(--navy);margin:0 0 .35rem}"
  + ".c3-guide-card h3 .i{flex:none;display:inline-flex;width:2rem;height:2rem;border-radius:50%;background:var(--ivory-2);color:var(--brass-ink);align-items:center;justify-content:center}"
  /* Each place is a row, not a list item: its number is drawn from data-n (CSS), so the number matches the
     map and the entry without adding a figure to the prose (score.js P2), and a group of links is not read
     as an "On this page" list that must name every section (score.js H14). */
  + ".c3-gi{position:relative;padding-left:1.7rem;color:var(--muted);font-size:1rem;line-height:1.35;margin:0 0 .3rem}"
  + ".c3-gi::before{content:attr(data-n);position:absolute;left:0;top:.2rem;color:var(--brass-ink);font-weight:600}"
  + ".c3-gi a{display:inline-block;padding:.2rem 0;color:var(--navy);font-weight:600;text-decoration:underline;text-underline-offset:.18em}"
  + ".c3-place-cta{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem 1.2rem;max-width:760px;margin:1.4rem 0 .4rem;padding:1rem 1.2rem;background:rgba(255,255,255,.6);border:1px solid var(--rule);border-radius:12px}"
  + ".c3-place-cta p{flex:1 1 18rem;margin:0;color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.55}"
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

const placeOffer = (id, line) => `<div class="c3-place-cta"><p>${line}</p><a class="btn btn-brass" href="${OFFER}?place=${encodeURIComponent(N[id].name)}">Book a showing in ${N[id].short}</a></div>`;
const ENTRY = (id, headline, paras, price) => {
  const num = ORDER.indexOf(id) + 1;
  return { h2: `${num}. ${N[id].name}: ${headline}`, toc: N[id].name, id,
    html: h.p(paras[0]) + (PHOTO[id] || "") + paras.slice(1).map((t) => h.p(t)).join("") + placeOffer(id, price) };
};

const ENTRIES = [
  ENTRY("cherry-grove", "the pier, the marsh and the beach at the end of the street", [
    `In Cherry Grove, a dog can come to the beach with you. North Myrtle Beach ${h.ext(NMB_BEACH, "allows leashed dogs on the sand")} all year, except from 10 a.m. to 4 p.m. between May 15 and Labor Day.`,
    "Cherry Grove's streets end at the ocean, and from the middle of the neighborhood a public beach access is about 0.1 mile away. Behind the beach, channels were dug into the salt marsh, and those canals now run behind rows of houses. Russell Burgess Coastal Preserve, with a walkway and a pier over the marsh, is under half a mile on foot.",
    "Cherry Grove Pier was built in the 1950s and is about a 14-minute walk from the middle of the neighborhood. In 1964 a 1,780-pound tiger shark was landed from it, a world record at the time.",
    `Almost every home here is in a high-risk flood zone, land that ${h.ext(FEMA, "FEMA's flood map")} marks as likely to flood. A lender will usually require flood insurance. About 400 canal homes also pay the city about $1,700 a year to dredge the canals.`,
  ], "Houses in Cherry Grove usually sell for about $695,000, and most homes for sale have no homeowners association (HOA) fee."),

  ENTRY("surfside-beach", "a free concrete pier with two restaurants", [
    `The ocean side of Surfside Beach has its own town pier, and ${h.ext(SSB_PIER, "walking onto it is free")}. The concrete pier reaches 814 feet into the ocean, with two restaurants, an ice cream shop and a bait and tackle shop. From April through October it is open until 1 a.m.`,
    "From the middle of the neighborhood, the pier is about a 9-minute walk, about 0.4 mile, and the sand is the same distance. Streets of houses run from US 17 Business to the beach.",
    "Surfside Beach began as part of a rice plantation called The Ark. Later, George J. Holliday renamed it Floral Beach for his wife, Flora. The Hollidays built a pavilion, a general store and a few rental cottages for summer visitors.",
    "About a quarter of the homes here are in a high-risk flood zone. We check the flood zone of any home you like before you offer.",
  ], "Houses on the ocean side of Surfside Beach usually sell for about $705,000 and condos for about $405,000. Most homes for sale have no HOA fee."),

  ENTRY("pine-lakes", "new houses beside Myrtle Beach's first golf course", [
    "Sports Illustrated was planned at Pine Lakes. In 1954 a group of Time-Life executives came to play the course and plan a new weekly sports magazine. The clubhouse is now on the National Register of Historic Places.",
    "Pine Lakes Country Club opened in 1927 as Ocean Forest Country Club, Myrtle Beach's first golf course. Robert White, a native of St. Andrews, Scotland, and the first president of the PGA of America, designed it.",
    "The Preserve at Pine Lakes and Pine Lakes Estates are two sections of houses beside the course. Most houses for sale there were built since 2015. A Myrtle Beach bike trail along Grissom Parkway is about 0.2 mile away.",
    "The homes are inside the city of Myrtle Beach, so owners pay city property tax on top of the county's. Homes on the older streets near the club have no HOA fee.",
  ], "Houses in these two sections usually sell for $540,000 to $670,000, and the HOA fee is about $95 a month."),

  ENTRY("tidewater", "golf holes over the salt marsh, behind a guard house", [
    "At Tidewater Plantation, two of the golf holes play over the salt marsh, facing Cherry Grove across the water. Tidewater Golf Club, a public course, opened in 1990. That year Golf Digest and Golf Magazine both named it the best new public course in America.",
    "Tidewater is between the Intracoastal Waterway and Cherry Grove Inlet, behind a guard house that visitors reach from Little River Neck Road. Most of its homes are houses along the fairways, with a few condo buildings.",
    "Owners share three pools with hot tubs, courts for tennis, pickleball and bocce, a fitness center and a clubhouse. They also have an oceanfront beach cabana with its own parking at Cherry Grove Beach. For a boat, Cherry Grove's public boat ramp is about 5 miles away by road.",
    `Tidewater is on the marsh, not the ocean, so owners drive to the beach. Our ${h.a(GATED, "guide to gated communities near Myrtle Beach")} tells the course's history.`,
  ], "Houses in Tidewater usually sell for about $625,000, and the HOA fee is about $230 a month."),

  ENTRY("barefoot-resort", "four golf courses that opened on one day", [
    "Barefoot Resort's four golf courses, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman, all opened on the same spring day in 2000. Neighborhoods grew up around them, and many streets carry seashell names, from Junonia Drive to Moonshell Drive.",
    "Owners in the residential association have their own beach cabana on the ocean, with parking, a kitchen and showers. From spring to early September, a free shuttle runs from the neighborhoods to a public beach access on Ocean Boulevard.",
    "Barefoot Landing's shops and restaurants are about 6 minutes by car, across a swing bridge on the waterway. That bridge dates from the 1930s and was moved here from Edenton, North Carolina, the year the courses opened.",
    `Most homes for sale here are condos, and a condo pays about $680 a month in HOA fees. Each association has its own amenities and rules, so we check which one a home belongs to before you offer. Our ${h.a(GATED, "guide to gated communities")} covers the resort's gated sections.`,
  ], "Homes for sale in these Barefoot sections, mostly condos, usually sell for about $430,000."),

  ENTRY("prince-creek", "a Tom Fazio course near the Murrells Inlet MarshWalk", [
    "Prince Creek's sections border TPC Myrtle Beach, a Tom Fazio course that opened in 1999. Tom Watson won the Senior PGA Tour Championship there the next year.",
    "On a Saturday, the Murrells Inlet MarshWalk is a 7-minute drive, and the entrance to Huntington Beach State Park is 12 minutes by car. A Publix is about 2 minutes from the middle of the neighborhood.",
    "Bellwood Landing, Creekhaven, Longwood Bluffs and Wilderness Pointe are among the neighborhoods of Prince Creek West. Their road and park association owns The Park at Prince Creek West, a park of mostly woods. Its amenity area has two pools and courts for tennis and pickleball.",
    "The HOA fee changes from section to section, so we compare the fee on each home you like. Bellwood Landing, behind its own gate, sells for more, about $810,000.",
  ], "Houses in Prince Creek usually sell for $315,000 to $620,000, and the HOA fee is about $100 to $390 a month, by section."),

  ENTRY("wild-wing", "27 holes of golf and a pool on the lake near Conway", [
    "Wild Wing's Avocet course, designed by Jeff Brauer and Larry Nelson, opened in 1993. A recent renovation, led by Brauer himself, gave it new greens and refreshed bunkers. The club also has the nine-hole Hummingbird course.",
    "Many streets are named for water birds, such as Wood Stork Drive and Black Skimmer Drive. The owners' amenity area, beside a lake, has a pool complex, courts for tennis or pickleball, a basketball court and a playground.",
    "From Wild Wing, Coastal Carolina University is about 11 minutes by car, Conway Medical Center about 8, and the Conway Riverwalk about 15.",
    "The ocean is about 20 minutes away by car.",
  ], "Houses in Wild Wing usually sell for about $600,000, and the HOA fee is about $135 a month."),

  ENTRY("grande-dunes", "a marina on the waterway and a beach club on the ocean", [
    "Grande Dunes has a club on the ocean and a marina on the Intracoastal Waterway. The Ocean Club gives residents private oceanfront access and dining. The marina has 126 wet slips and is open to the public, with restaurants beside it.",
    "The Resort Club course is a Roger Rulewich design on a bluff over the waterway. The National Golf Course Owners Association named it course of the year in 2009. Nick Price and Craig Schreiner designed the Members Club course. The clubs offer memberships, and we find out which homes include one.",
    `The two-mile Waterway Trail is open to the public from sunrise to sunset. Calais, Palermo and Villa Venezia are three of its sections with ${h.a(GATED, "a gate at the entrance")}.`,
    "Across Grande Dunes, most houses for sale are new or not yet finished.",
  ], "Homes in the three gated sections usually sell for about $1.5 million, and the HOA fee is about $200 to $375 a month."),

  ENTRY("plantation-lakes", "pontoon boats on a lake with 15 miles of shoreline", [
    "Owners at Plantation Lakes take pontoon boats out on a lake with about 15 miles of shoreline. Many homes back onto the water, and the amenity area, with a dock, is on a point in the lake.",
    "That amenity area has two pools joined by waterfalls. The clubhouse has a gym, a great room with a fireplace, a reading and card room and a kitchen. Tennis and basketball courts are across the road, and the community has horseshoe pits.",
    "Plantation Lakes has 748 homes and lots, off Carolina Bays Parkway. Its houses for sale are the largest on this page, and they cost more than in the other Carolina Forest neighborhoods here.",
    "The beach access nearest by car has no parking, and the next one, with a pay lot, is about the same distance away.",
  ], "Houses in Plantation Lakes usually sell for about $740,000, and the HOA fee is about $125 a month."),

  ENTRY("market-common", "a town center you can walk, on the old Air Force base", [
    `From the middle of The Market Common, you can walk to a farmers market, the shops and a large city park. ${h.ext(MARKET, "The farmers market")} is held at Valor Park on Saturdays from April to mid-December, about a 5-minute walk away.`,
    "Grand Park, with picnic shelters, ball fields and a playground, is a two-minute walk from the middle of the neighborhood. The houses and townhomes are beside a district of shops and offices, and the beach is a 5-minute drive.",
    "The Market Common is built on the old Myrtle Beach Air Force Base. The base began as an Army Air Corps field in World War II and closed for good in 1993.",
    "Three Air Force jets stand in Warbird Park, on loan to the city: an F-100 Super Sabre, an A-7D Corsair and an A-10 Warthog. The park is about a 3-minute drive away.",
    "A townhome here pays about $300 to $680 a month in HOA fees.",
  ], "Houses in The Market Common usually sell for about $540,000 and townhomes for about $398,000."),

  ENTRY("waterbridge", "lakes to paddle and a full clubhouse calendar", [
    "Waterbridge owners paddle kayaks on their own lakes. The neighborhood is built around more than 80 acres of lakes and natural areas. A boat launch with a floating dock takes kayaks and other boats with no motor.",
    "Walking paths cross the water on bridges, and the HOA's calendar holds card nights, bunco, mahjong, a book club, potluck Thursdays and food trucks. The pool complex and the clubhouse are inside a circle of streets, and the fitness center is open around the clock.",
    "Owners also have a storage area for boats and jet skis. It is full now, so we ask about a space before you offer. Courts for tennis, pickleball, basketball and volleyball are a quarter mile from the clubhouse, on Fiddlehead Way.",
    "Builders are still selling new houses here, and some of the newest streets are still filling in.",
  ], "Houses in Waterbridge usually sell for about $630,000, and the HOA fee is about $150 a month."),

  ENTRY("forestbrook-estates", "newer houses, a pool and garden plots", [
    "Forestbrook Estates owners can keep a plot in a community garden on the same grounds as the pool. The houses were built in the last few years, and Lennar built nearly every home here, around ponds, with townhomes beside the houses.",
    `Every home here is zoned for Forestbrook Elementary, Forestbrook Middle and Socastee High, and our page on ${h.a("/buyers/relocating/schools/", "schools near Myrtle Beach")} covers them. The elementary and middle schools and a Food Lion are each 5 to 6 minutes away by car.`,
    "Rosewood Landing, a county boat ramp on the Intracoastal Waterway, is about 5 miles away by road.",
    "The neighborhood has ponds, not a lake. Its houses cost a little more than The Farm's, but they are newer.",
  ], "Houses in Forestbrook Estates usually sell for about $395,000, and the HOA fee is under $90 a month."),

  ENTRY("the-farm", "two pools and wild flytraps next door", [
    `Along The Farm's north side, the state has bought land for the Lewis Ocean Bay Heritage Preserve, and it plans to open that land to the public. That land holds ${h.ext(SCDNR_LOB, "habitat for the wild Venus flytrap")}, and the state's largest population of the plant is centered in the preserve.`,
    `The Farm's HOA fee includes cable TV and trash pickup. It also pays for ${h.ext(FARM_HOA, "two pools")}, a fitness room, an activity center, a basketball court and a playground.`,
    `From the Farmers Rest Drive entrance, a Publix is 2 minutes by car and the beach about 10. D.R. Horton developed The Farm, and our ${h.a(FARM, "guide to The Farm at Carolina Forest")} tells its history and its rules.`,
    "Townhomes and condos at The Farm cost less, but they pay a second HOA fee on top of The Farm's.",
  ], "Houses at The Farm usually sell for about $350,000, and the HOA fee for a house is $107 a month."),

  ENTRY("berkshire-forest", "a water slide and two pool areas", [
    "Berkshire Forest's first pool complex has a water slide. It is beside a lake, with a tennis court, a basketball court and a play area next to it. The expansion added a second amenity area with a pool and courts for tennis or pickleball.",
    "Centex Homes developed the first sections, such as Crestwood, Sutton Place and Cambridge. Pulte Homes later added land from two neighboring developments. Berkshire Forest and its Berkshire Village section have more than 1,100 homes together.",
    "River Oaks Elementary School, on Augusta Plantation Drive, is a 2-minute drive from the Berkshire Village section.",
    "Most houses for sale here were built in the 2000s and 2010s, so they are older than the new houses in Waterbridge.",
  ], "Houses in Berkshire Forest usually sell for about $390,000, and the HOA fee is about $115 a month."),

  ENTRY("deerfield", "wooded streets around an old golf resort near Surfside Beach", [
    "The Deerfield Plantation area is built around the old Deer Track golf courses near Surfside Beach. Its older streets are wooded, and the owners' association owns lake and canal land among the homes.",
    "In 2006 two buyers bought the golf course, and homeowners sued to keep it a golf course. The court sent the case to a special referee, who found no rule on that land that kept it a golf course. The state Court of Appeals upheld that finding.",
    "The old South Course is now a neighborhood of new houses. The Surfside Beach Fishing Pier is about 4 miles away by road.",
    "On the old North Course, building has only begun, so homes near it are beside a building site. The closest beach access has three parking spaces, for golf carts only. By car, owners use the next access, which has a pay lot.",
  ], "Houses in the Deerfield Plantation area usually sell for about $355,000, and the HOA fee is under $90 a month."),
];

/* ItemList JSON-LD for the 15 numbered entries. */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The best neighborhoods in Myrtle Beach", numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: N[e.id].name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

const { compareCards } = require(path.join(BB, "tools", "compare.js"));
const COLS = [
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "fee", label: "HOA fee a month" },
  { key: "beach", label: "To the beach" },
];
const COST_COLS = [
  { key: "hoa", label: "HOA fee a year" },
  { key: "tax", label: "Property tax a year", num: true },
  { key: "flood", label: "Flood insurance a year" },
  { key: "total", label: "In all, a year", num: true },
];

module.exports = {
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
  h1em: "Fifteen places, by what each one does best.",
  sub: "Fifteen neighborhoods from North Myrtle Beach to Murrells Inlet: a normal day in each, one honest trade-off, and the price.",
  toc: false,
  author: "devin",
  heroCta: { title: "Tell us what you want close to home. We will send three neighborhoods that fit.", text: "One of our agents sends the list, with the homes for sale in each. There is no charge.", label: "Get three neighborhoods", href: OFFER },
  shortAnswer: [
    "The best neighborhoods in Myrtle Beach are the ones built for what you want to do every day. That might be the beach, golf, a boat, shops you can walk to, a big pool or more house for the money. We sorted 15 neighborhoods from North Myrtle Beach to Murrells Inlet by what each does best.",
  ],
  sections: [
    { h2: "Which Myrtle Beach neighborhood fits what you love?", toc: "Choose by what you love", id: "choose", html:
      CSS + GUIDE },
    ...ENTRIES,
    /* One table after the entries (ROUND-14: "a comparison table goes after the entries, only if a reader would
       use it, with plain column names"). The drive or walk to the beach lives here, once for every place, so
       the entries keep a time only where it sells the place. */
    { h2: "How do the 15 neighborhoods compare on price and the beach?", toc: "Side by side", id: "side-by-side", html:
      compareCards(D.neighborhoods.map((n) => ({ name: n.name, href: `#${n.id}`, cells: n.cells })), COLS,
        { caption: "The 15 neighborhoods side by side", nameLabel: "Neighborhood", css: true }) +
      h.p("Drive times are by car with no traffic, from the middle of each neighborhood to the nearest public beach access.") },
    { h2: "What does a home here cost each year, besides the mortgage?", toc: "Yearly cost", id: "yearly-cost", html:
      h.p("Besides the mortgage, a house in Cherry Grove, The Farm or Tidewater Plantation costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance.") +
      compareCards(D.yearly_cost.rows.map((r) => ({ name: r.name, cells: r.cells })), COST_COLS,
        { caption: "A house you live in: the yearly cost", nameLabel: "House", css: false }) +
      h.p(`The tax is for a home you live in, and in North Myrtle Beach it includes the city's share. When a home sells, the county ${h.ext(SC_TAX, "values it again")}, usually close to the price paid, and taxes the new value the next year. Cherry Grove canal homes also pay the city about $1,700 a year to ${h.ext(CG_CANALS, "dredge the canals")}, on top of these totals.`) +
      h.p(`Homeowners insurance comes on top of all this, and our guide to ${h.a("/buyers/coastal-insurance/", "insurance near the coast")} shows what it costs. If price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places near Myrtle Beach")}.`) +
      h.p(`For a home with no HOA fee at all, see ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}. For a community with a 55+ age rule, our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities near Myrtle Beach")} compares four of them.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "What are the best neighborhoods in Myrtle Beach?", a: "For walking to the beach, Cherry Grove and the ocean side of Surfside Beach. For golf, Pine Lakes and Tidewater Plantation. For a boat, Grande Dunes and Plantation Lakes. For a town center you can walk, The Market Common. For the most house for the money, The Farm." },
    { q: "How much does it cost each year to own a home in Myrtle Beach?", a: "Besides the mortgage, a house in Cherry Grove, The Farm or Tidewater Plantation costs about $2,600 to $5,600 a year in HOA fees, property tax and flood insurance. A house in Cherry Grove costs about $4,400, mostly tax and flood insurance." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach and in Cherry Grove are listed with no HOA fee. Homes on the older streets near Pine Lakes Country Club are listed with no HOA fee too." },
    { q: "Are there 55+ communities near Myrtle Beach?", a: "Yes. Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are 55+ communities. Each has a pool and a clubhouse." },
  ],
  sources: [
    { name: "North Myrtle Beach beach rules", href: NMB_BEACH },
    { name: "Surfside Beach Fishing Pier", href: SSB_PIER },
    { name: "SCDNR, Lewis Ocean Bay", href: SCDNR_LOB },
    { name: "FEMA flood maps", href: FEMA },
    { name: "S.C. property tax law", href: SC_TAX },
    { name: "North Myrtle Beach canal assessment", href: CG_CANALS },
  ],
  sourcesNote: "Prices are the middle sale price over 12 months, or the range where few sold, in the sections named. HOA fees come from recent listings, except The Farm's. Drive and walk times are from the middle of each neighborhood, with no traffic.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Tell us what you want close to home. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
};
