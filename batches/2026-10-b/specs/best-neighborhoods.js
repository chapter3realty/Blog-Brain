/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what each one does best.
 *
 * Round 14e, 2026-10-15 (OWNER-EYE-14d, grade 7 three times; the v8 fact check, row 277; SIBLING-OWNERS.md).
 * A fresh writer, not a patch. Each entry sells the place and the house: the one thing a buyer could not
 * guess; what living there is like; the homes themselves, from county parcels that cover every house (rows
 * 279 to 281: house counts, lot sizes, lots on the golf course or the water); one honest trade-off; the
 * price in a sentence a person would say ("usually sold for about $X last year"); the offer. A listing
 * detail (year built, size) appears in only a few entries, each in its own words (lesson B48).
 * Removed: Joey's Clubhouse Grille (gated owns it) and the Russell Burgess preserve (no HOA owns it); every
 * "Of the 15 neighborhoods here" ranking; "Ask which section" (we find out instead). Tidewater leads with its
 * houses on the fairways, Forestbrook with its garden, Avalon with its ball fields, Deerfield with its
 * golf-cart beach parking, The Farm with the open land its HOA owns (row 281), none with price, a lot
 * comparison or a drive time. The fuller Grande Dunes and Prince Creek prices (row 278, v8 N2 and N5).
 * The top: the dek is shorter, the guide heading no longer repeats "what you love", the map credit moved
 * to the sources line, the gated link moved under the comparison table. The map's markers are placed by
 * area-map's tidyLeaders, so no leader line crosses another place and The Farm's number sits by The Farm.
 * The end: the comparison table (price, fee and beach in one table; the HOA fee table is cut), the FAQ,
 * the offer; the photo credits are in the sources line. Pictures: every photo labels its entry's lead
 * (Cherry Grove Pier, Surfside Beach Pier, the Pine Lakes clubhouse, Tidewater's fairways, TPC Myrtle
 * Beach, Plantation Lakes' docks, Valor Park).
 * Round 14d, 2026-10-15: Avalon replaced Berkshire Forest; the map a numbered strip. Round 14c: picks in the
 * short answer. Version 14 (round 14): a rebuild after the owner's third read.
 *
 * Reader. Someone moving here or moving up who typed "best neighborhoods in Myrtle Beach". They know no
 * neighborhood name. They know what they love: the beach, golf, a boat, a town they can walk, more house
 * for the money. They would pay an expert to know what a normal day is like in each place, the one thing
 * they could not have guessed, what the houses are, what is hard about it, what a home costs, and how to
 * see the homes.
 *
 * Shape (CRAFT 3, a list of places): the short answer; one offer box; the selection guide with the one map;
 * the 15 entries in the guide's order, each ending in its own offer strip; the comparison table; the FAQ
 * with the sources and credits; the closing offer.
 *
 * Facts: batches/2026-10-b/facts/neighborhoods-facts.md (verified rows; rows 278 to 281 pending verification
 * (round 14e)); gated-communities-facts.md rows 20 and 43 (Tidewater's price and fee); the-farm-facts.md rows
 * 5, 40, 48 and 66; data/best-neighborhoods.json for the table. Struck list: facts/best-neighborhoods-struck.json.
 */
const fs = require("fs"), path = require("path");
const { h, BB } = require("./_kit.js");
const PK = require(path.join(BB, "tools", "page-kit.js"));
const AM = require(path.join(BB, "tools", "area-map.js"));
const IC = require(path.join(BB, "tools", "icons.js"));
/* The liquid glass theme and the per-place offer pill (tools/glass.js; CRAFT 4, "Look modern"). */
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
const MAP_DIR = path.join(__dirname, "..", "chapter3realty", "images", "maps");
const kit = PK.create({ h, theme: "glass", photos: PHOTOS, mapDir: MAP_DIR, mapSrc: "/images/maps" });

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
const MARKET = "https://waccamawmarkets.org/";
const BF_REPLAY = "https://www.barefootgolf.com/same-day-reduced-replay-rate/";
const TPC = "https://www.tpcmyrtlebeach.com/";
const WW_LEAGUE = "https://www.playwildwing.com/spark-golf-league/";
const GD_SUN = "https://www.aol.com/miami-look-myrtle-beach-grande-100000795.html";
const PL_POA = "https://www.plantationlakespoa.com/community.html";
const PINE_LAKES = "https://www.pinelakes.com/about-pine-lakes-country-club/";
const PARCELS = "https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer";
const TIGER = "https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html";

/* ---------------------------------------------------------------------------- */
/* Pictures                                                                       */

/* One picture per entry where a picture shows the entry's lead, and only then (task 7; OWNER-EYE-14d M6).
   Each is labelled on the lead at 12 px or more on a phone. The aerials of Waterbridge, Wild Wing, Grande
   Dunes, Forestbrook, Deerfield and Barefoot do not show their entry's lead, so they wait for the photo
   partner (photo-request-abdulla.html). The Surfside Beach Pier view carries the share crops. */
const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css();
const PIC = (name, caption, alt) => ph.aerial(name, caption, { alt, closeUp: true });
const PHOTO = {
  "cherry-grove": PIC("cherry-grove-pier", "Cherry Grove Pier from above, running out past the surf, with beach houses behind the sand.",
    "Cherry Grove from above: a long wooden pier labelled Cherry Grove Pier runs from a blue building on the beach out past the waves, with rows of beach houses behind the sand"),
  "surfside-beach": ph.aerial("surfside-beach-pier", "The Surfside Beach Pier from the air, with streets of beach houses behind the sand.",
    { alt: "Surfside Beach from the air: a long pier labelled Surfside Beach Pier runs from the beach into a green ocean, with rows of houses on the streets behind the sand" }),
  "pine-lakes": PIC("pine-lakes-clubhouse", "The 1927 clubhouse at Pine Lakes Country Club, on the National Register of Historic Places.",
    "The large white Pine Lakes clubhouse with a row of tall columns, black shutters and dormer windows in a gray roof"),
  "tidewater": PIC("tidewater-golf-course", "Tidewater from above: houses under the trees, with golf fairways on both sides of them.",
    "Tidewater Plantation from above: houses under tall trees along curving streets, with green golf fairways and greens on both sides, one labelled Golf course"),
  "prince-creek": PIC("prince-creek-tpc", "Prince Creek from above: streets of houses beside the TPC Myrtle Beach golf course.",
    "Prince Creek from above: curving streets of houses and ponds beside green golf fairways and greens, labelled TPC Myrtle Beach"),
  "plantation-lakes": PIC("plantation-lakes-docks", "Plantation Lakes from above: houses along the lake, and the boat docks at the owners’ amenity area.",
    "Plantation Lakes from above: houses with back yards on a dark winding lake labelled Lake, and a small boat dock, marked Boat docks, beside two pools"),
  "market-common": PIC("market-common-valor-park", "The Market Common from the air: its homes, outlined, Valor Park, where the Saturday market is held, and Grand Park.",
    "The Market Common from the air: streets of homes outlined in orange beside a lake, a dot labelled Valor Park at the edge of the shops, and ball fields and a lake labelled Grand Park"),
};

/* The one map: the 15 as numbered dots, numbers only (the guide is its key). tidyLeaders (area-map, round
   14e; OWNER-EYE-14d M2): no leader line crosses another place, and no number sits more than 45 units from
   its spot, so The Farm's number is by The Farm. maxRatio 0.75 gives the Carolina Forest cluster room. The
   map data credit is in the sources line (OWNER-EYE-14d M1). */
const RMAP = AM.regionMap({ name: "Neighborhoods", maxRatio: 0.75, placeNames: false, tidyLeaders: true,
  places: D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: `#${n.id}` })) },
  { dir: MAP_DIR, src: "/images/maps", glass: true, width: 320 });
const MAP_HTML = h.figure(RMAP.html, "Map of the 15. The numbers match the list.");

/* ---------------------------------------------------------------------------- */
/* The selection guide (CRAFT 3, "No preamble"): each place once, under the thing it does best, in words a   */
/* stranger can choose by. Features only, never who lives anywhere (fair housing). One line each on a phone.  */

const GROUPS = [
  { icon: "beach", label: "Walk to the beach", items: [
    ["cherry-grove", "a record shark"],
    ["surfside-beach", "a free pier"]] },
  { icon: "golf", label: "Golf at the door", items: [
    ["pine-lakes", "golf since 1927"],
    ["tidewater", "houses on the fairways"],
    ["barefoot-resort", "a swing bridge"],
    ["prince-creek", "where pros played"],
    ["wild-wing", "a Monday night league"],
    ["grande-dunes", "a South Florida look"]] },
  { icon: "dock", label: "A boat or a paddle", items: [
    ["plantation-lakes", "pontoon boats"],
    ["waterbridge", "kayaks from a dock"]] },
  { icon: "shopping", label: "A town center you can walk", items: [
    ["market-common", "a Saturday market"]] },
  { icon: "dollar", label: "More house for the money", items: [
    ["forestbrook-estates", "garden plots"],
    ["avalon", "ball fields inside"],
    ["deerfield", "golf carts to the beach"],
    ["the-farm", "open land out back"]] },
];
{
  const seen = GROUPS.flatMap((g) => g.items.map((i) => i[0]));
  if (seen.join() !== ORDER.join()) throw new Error("the guide's order must be the data order (the entries and the map numbers): " + seen.join());
  /* One line on a 390 px phone (OWNER-EYE-14c H1): the short name and the label in 34 characters or fewer. */
  for (const g of GROUPS) for (const [id, what] of g.items) if ((N[id].short + ": " + what).length > 34) throw new Error(`guide line too long for one phone line: ${N[id].short}: ${what}`);
}
const GUIDE_CSS = "<style>"
  + ".c3-guide{max-width:960px;margin:1rem 0 0}"
  + ".c3-guide-grid{margin:0 0 1rem}"
  + "@media (min-width:640px){.c3-guide-grid{columns:2;column-gap:.8rem}.c3-guide-card{break-inside:avoid;margin:0 0 .8rem}}"
  + "@media (min-width:980px){.c3-guide{max-width:1180px;display:grid;grid-template-columns:minmax(0,2.2fr) minmax(0,1fr);gap:1.4rem;align-items:start}.c3-guide .c3-guide-grid{margin:0}.c3-guide figure{margin-top:0}}"
  + ".c3-guide-card{background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none);border-radius:16px;padding:.75rem 1rem .55rem}"
  + ".c3-guide-card h3{display:flex;align-items:center;gap:.55rem;font-family:var(--sans);font-size:1.05rem;font-weight:600;color:var(--navy);margin:0 0 .35rem}"
  + ".c3-guide-card h3 .i{flex:none;display:inline-flex;width:2rem;height:2rem;border-radius:50%;align-items:center;justify-content:center;background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(232,201,154,.55));border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff,0 3px 10px -4px rgba(145,89,43,.45);color:var(--brass-ink)}"
  /* Each place is a row, not a list item: its number is drawn from data-n (CSS), so the number matches the
     map and the entry without adding a figure to the prose (score.js P2). */
  + ".c3-gi{position:relative;padding-left:1.7rem;color:var(--muted);font-size:1rem;line-height:1.35;margin:0 0 .3rem}"
  + ".c3-gi::before{content:attr(data-n);position:absolute;left:0;top:.2rem;color:var(--g-ink,var(--brass-ink));font-weight:600}"
  + ".c3-gi a{display:inline-block;padding:.2rem 0;color:var(--navy);font-weight:600;text-decoration:underline;text-underline-offset:.18em}"
  + ".c3-place-cta{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem 1.2rem;max-width:760px;margin:1.6rem 0 .4rem;padding:1rem 1.2rem;border-radius:20px;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none);"
  + "-webkit-backdrop-filter:var(--g-blur,none);backdrop-filter:var(--g-blur,none)}"
  + ".c3-place-cta>p:first-child{flex:1 1 18rem;margin:0;color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.55}"
  + "main#main .c3-place-cta .c3-offer{margin:0;flex:0 1 auto}"
  /* The comparison table: short columns that stay a table at 390 px (OWNER-EYE-14 H5). */
  + ".c3-mini{max-width:760px;margin:1rem 0 1.2rem;padding:.4rem .8rem .6rem;border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none)}"
  + ".c3-mini table{width:100%;border-collapse:collapse;font-size:.92rem;line-height:1.35}"
  + ".c3-mini caption{text-align:left;font-weight:600;color:var(--navy);padding:.4rem 0 .5rem}"
  + ".c3-mini th,.c3-mini td{text-align:left;vertical-align:top;padding:.45rem .45rem .45rem 0;border-bottom:1px solid rgba(28,32,40,.1);color:var(--navy)}"
  + ".c3-mini thead th{font-weight:600;border-bottom:1px solid rgba(28,32,40,.25)}"
  + ".c3-mini tbody th{font-weight:600}.c3-mini a{color:var(--navy);text-decoration:underline;text-underline-offset:.18em}"
  /* On a phone the map comes first, and the guide's names follow once. */
  + "@media (max-width:979px){.c3-guide{display:flex;flex-direction:column}.c3-guide>figure,.c3-guide>.c3-map-figure{order:-1;margin:0 0 .8rem}}"
  /* No preamble (CRAFT 3): on a phone the sections sit closer, the offer band is shorter, and the guide's
     cards are tighter, so the first entry starts sooner. Nothing is hidden. */
  + "@media (max-width:699px){main>section{padding-top:2rem!important;padding-bottom:2rem!important}"
  + "main>section[style^='background:var(--navy)'] p[style*='font-size:1.7rem'],main>section[style^='background:var(--navy)'] h2{font-size:1.4rem!important}"
  + ".c3-guide-grid{display:block}.c3-guide-card{padding:0;background:none;border:0;box-shadow:none;margin:0 0 .4rem}.c3-guide-card h3{font-size:1rem;margin-bottom:0}"
  + ".c3-guide-card h3 .i{width:1.5rem;height:1.5rem}.c3-gi{font-size:.97rem;line-height:1.3;margin-bottom:0;white-space:nowrap}.c3-gi a{padding:.08rem 0}"
  + ".c3-mini{padding:.3rem .5rem .5rem}.c3-mini table{font-size:.85rem}}"
  /* On a phone each picture runs the full width of the screen, so its drawn labels show at 12 px or more. */
  + "@media (max-width:699px){main#main .c3-aerial .c3ph-hero{margin-left:-24px!important;margin-right:-24px!important;width:calc(100% + 48px)!important;max-width:none!important;padding:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;background:none!important}"
  + "main#main .c3-aerial .c3ph-f,main#main .c3-aerial img{border-radius:0!important}main#main .c3-aerial figcaption{padding:0 24px}"
  /* The map strip runs the full width too, so its numbers and scale show at 12 px or more (it is drawn 320 wide). */
  + "main#main .c3-guide>figure{margin-left:-24px!important;margin-right:-24px!important;width:calc(100% + 48px)!important;max-width:none!important;padding:0!important;border:0!important;border-radius:0!important;box-shadow:none!important}"
  + "main#main .c3-guide>figure svg,main#main .c3-guide>figure img{border-radius:0!important;border-left:0!important;border-right:0!important;max-width:none!important}main#main .c3-guide>figure figcaption{padding:0 24px}}"
  + "</style>";
const GUIDE = GUIDE_CSS + `<div class="c3-guide c3-guide-map"><div class="c3-guide-grid">`
  + GROUPS.map((g) => `<div class="c3-guide-card"><h3><span class="i">${IC.icon(g.icon, { size: 20 })}</span>${g.label}</h3>`
    + g.items.map(([id, what]) => `<div class="c3-gi" data-n="${ORDER.indexOf(id) + 1}"><a href="#${id}">${N[id].short}</a>: ${what}</div>`).join("")
    + `</div>`).join("")
  + `</div>${MAP_HTML}</div>`;

/* ---------------------------------------------------------------------------- */
/* The 15 entries (CRAFT 5, "Sell the place like the best agent in town"; the task's order: the one thing a  */
/* buyer could not guess, the day, the homes, one trade-off, the price sentence, the offer).                   */

/* The place's own offer: one glass strip that holds the price in one plain sentence and the pill,
   "Book a showing in X", to the contact form with the place named. */
const placeOffer = (id, line) => `<div class="c3-place-cta"><p>${line}</p>${G.offer(N[id].short, { href: `${OFFER}?place=${encodeURIComponent(N[id].name)}` })}</div>`;
const ENTRY = (id, headline, paras, price) => {
  const num = ORDER.indexOf(id) + 1;
  return { h2: `${num}. ${N[id].name}: ${headline}`, toc: N[id].name, id,
    html: h.p(paras[0]) + (PHOTO[id] || "") + paras.slice(1).map((t) => h.p(t)).join("") + placeOffer(id, price) };
};

const ENTRIES = [
  ENTRY("cherry-grove", "a fishing pier with a world-record shark", [
    "In 1964 a 1,780-pound tiger shark was landed from Cherry Grove Pier, a world record at the time. The pier is about a 14-minute walk from the middle of Cherry Grove.",
    `Mornings here can start on the sand. A public beach access is about a tenth of a mile from the middle of the neighborhood. North Myrtle Beach ${h.ext(NMB_BEACH, "allows leashed dogs on the beach")} all year, except at midday in summer.`,
    "The beach itself was made in 1950, when an inlet was filled to join Futch Beach to the Nixon family's Cherry Grove land. Later, Cherry Grove joined Ocean Drive, Crescent Beach and Windy Hill to form the city of North Myrtle Beach.",
    "Cherry Grove is mostly houses, about 1,700 of them, with only a few dozen condos. The ones on the market lately were mostly built before 1990.",
    "The trade-off is flood insurance. Almost every home here is in a high-risk flood zone, so a mortgage lender will require a policy.",
  ], "Houses in Cherry Grove usually sold for about $695,000 last year, and more than half of the homes for sale here have no homeowners association (HOA) fee."),

  ENTRY("surfside-beach", "a free concrete pier with two restaurants", [
    `The ocean side of Surfside Beach has its own town pier, and ${h.ext(SSB_PIER, "walking onto it is free")}. The concrete pier runs 814 feet into the ocean, with two restaurants, an ice cream shop and a bait and tackle shop.`,
    "The pier and the sand are about a nine-minute walk from the center of the neighborhood. A summer evening can end out on the pier, which stays open until one in the morning from April through October.",
    "The land was a rice plantation called The Ark. George J. Holliday later renamed it Floral Beach for his wife, Flora. New owners gave it the name Surfside Beach, after a town in Florida.",
    "Between the highway and the beach, the town has about 2,800 houses and about 960 condos.",
    "About one home in four on the ocean side is in a high-risk flood zone, where a lender requires flood insurance.",
  ], "Houses on the ocean side of Surfside Beach usually sold for about $705,000 last year, and condos for about $405,000. Most homes for sale here have no HOA fee."),

  ENTRY("pine-lakes", "where Sports Illustrated was planned", [
    `${h.ext(PINE_LAKES, "Sports Illustrated was planned at Pine Lakes")}. In 1954 a group of Time-Life executives came to play the course and plan a new weekly sports magazine.`,
    "Pine Lakes Country Club opened in 1927 as Myrtle Beach's first golf course. Robert White, a native of St. Andrews, Scotland, and the first president of the PGA of America, designed it. Golfers still call it The Granddaddy.",
    "The Preserve at Pine Lakes and Pine Lakes Estates are two sections of 250 houses beside the club. Owners in The Preserve share their own pool, and a city bike route along Grissom Parkway is about a fifth of a mile away. Barc Park North, a city park with a pond and trails, is a little over half a mile away.",
    "The houses are much newer than the club: most on the market lately went up after 2015. Few of them are on the course itself, since only 13 lots border it.",
  ], "Houses here usually sold for about $600,000 last year, and a house in The Preserve pays an HOA fee of about $95 a month."),

  ENTRY("tidewater", "houses along the fairways", [
    "At Tidewater Plantation, about seven of every ten houses have lots that border the golf course. Most stand under tall trees, with a fairway beside them or behind them.",
    "Tidewater is between the Intracoastal Waterway and Cherry Grove Inlet, on the marsh. For a walk over that marsh, Heritage Shores Nature Preserve has three walkways and two piers, under a mile from the middle of Tidewater. It sits on an island in the marsh, reached by a boardwalk.",
    "Tidewater has about 580 houses and a few condo buildings. Most of the houses for sale lately date from around 2000, and some streets carry sailing names, such as Spinnaker Drive and Topsail Lane.",
    "The trade-off of a public course: golfers who do not live here play past the back yards.",
  ], "Houses in Tidewater usually sold for about $625,000 last year, and the HOA fee for a house is about $230 a month."),

  ENTRY("barefoot-resort", "a swing bridge to the shops", [
    "Barefoot Resort's road to the shops crosses a swing bridge from 1934, moved here from Edenton, North Carolina. Barefoot Landing's shops and restaurants are on the far side of the Intracoastal Waterway, about six minutes from the condos by car.",
    `For a golfer, the Greg Norman course has seven holes along the waterway and wide fairways. Barefoot ${h.ext(BF_REPLAY, "sells a second round the same day")} at a lower rate, booked when the first round ends.`,
    "Most homes in these sections are condos: about 390 of them, with about 80 houses. Owners in two of the resort's associations share the North Tower pool beside the waterway, which holds about 356,000 gallons.",
    "Some condos on the market lately date from 2002. Others were finished in the last few years and have more room.",
    "The trade-off is the condo fee: about $680 a month.",
  ], "Homes in these Barefoot sections, mostly condos, usually sold for about $430,000 last year."),

  ENTRY("prince-creek", "a course where the pros played", [
    `Prince Creek's sections border TPC Myrtle Beach, a Tom Fazio course. Tom Watson won the Senior PGA Tour Championship there in 2000, and ${h.ext(TPC, "Lee Trevino and Gary Player")} have played it too.`,
    "From the center of Prince Creek, a Publix is about two minutes by car. The Murrells Inlet MarshWalk is a seven-minute drive, and the entrance to Huntington Beach State Park is 12 minutes by car.",
    "Prince Creek mixes houses and townhomes, in sections of their own. Most of its houses sit beside woods or ponds: only nine of about 120 lots border the course. Builders have also sold new townhomes here for about $320,000.",
    "The HOA fee is about $100 to $390 a month, depending on the section. Our agents check which section a home is in, and its fee, before you make an offer.",
  ], "Homes in Prince Creek usually sold for about $490,000 last year."),

  ENTRY("wild-wing", "a Monday night golf league", [
    `On summer Monday nights, Wild Wing runs a ${h.ext(WW_LEAGUE, "community golf league")}. Teams play nine holes on its Hummingbird course, with a playoff at the end of the season.`,
    "Wishbones Bar and Grill, at the club, has a full bar and two indoor TrackMan golf simulators. The main course, the Avocet, was designed by Jeff Brauer and Larry Nelson.",
    "Many streets are named for water birds, such as Wood Stork Drive and Black Skimmer Drive. Coastal Carolina University is an 11-minute drive.",
    "Wild Wing has about 680 houses, and about one in three has a lot that borders the golf course. The lots are big: a typical one is more than a third of an acre.",
    "Wild Wing is inside the city of Conway, and a beach day starts with a drive of about 20 minutes.",
  ], "Houses in Wild Wing usually sold for about $600,000 last year, and the HOA fee is about $135 a month."),

  ENTRY("grande-dunes", "a South Florida look on the waterway", [
    `Grande Dunes was built to look like South Florida. Its ${h.ext(GD_SUN, "first houses followed the style")} of the Florida builder Addison Mizner, with tile roofs, stucco, columns and arches. Many of its most expensive houses still do.`,
    "The first completed house sold in 2000 for $1.15 million.",
    "For a golfer, the Resort Club course is a Roger Rulewich design beside the Intracoastal Waterway. The National Golf Course Owners Association named it its course of the year in 2009.",
    "Builders such as Lennar and Dream Finders are still selling new houses here. Across Grande Dunes, most houses for sale were built or are being built since 2024.",
    "Most houses for sale here are new or not yet finished. If you want an older house with a grown yard, we watch the resales for you.",
  ], "Homes in Grande Dunes usually resold for about $1.5 million last year, and the HOA fee for a house is about $200 to $400 a month."),

  ENTRY("plantation-lakes", "pontoon boats on a lake with 15 miles of shoreline", [
    `Owners at Plantation Lakes ${h.ext(PL_POA, "take pontoon boats out")} on a lake with about 15 miles of shoreline. About two of every three houses have lots that border the water.`,
    "An owner can take the boat to the amenity area, which has day and overnight docks and a boat ramp. On a cool evening, the clubhouse has a great room with a fireplace, a reading and card room and a gym.",
    "Plantation Lakes has about 715 houses on big lots: a typical one is about half an acre. Its developer was American Mining Company, and the owners' association has held the common land since 2007. The houses on the market lately are big too, with about 3,400 square feet.",
    "The lake is for small boats. The recorded rules allow boats of 19 feet or shorter, with small motors.",
  ], "Houses in Plantation Lakes usually sold for about $740,000 last year, and the HOA fee is about $125 a month."),

  ENTRY("waterbridge", "kayaks from a floating dock, and potluck Thursdays", [
    "Waterbridge owners can launch a kayak on the neighborhood's lakes from a floating dock. The lakes take only boats with no motor or an electric one.",
    "Walking paths cross the water on bridges. The HOA's calendar holds card nights, bunco, mahjong, a book club and potluck Thursdays, and the fitness center at the clubhouse is open around the clock.",
    "Owners also have a fenced storage area for boats and jet skis, and courts for tennis, pickleball and basketball about a quarter mile from the clubhouse. The homeowners association looks after the lakes and about 100 acres of open space it bought from the developer.",
    "Waterbridge has about 990 houses, and many on the market are only a few years old.",
    "About 90 new houses were sold here in the past year, mostly by builders, and some of the newest streets are still filling in.",
  ], "Resale houses in Waterbridge usually sold for about $630,000 last year, and new ones from builders for about $550,000. The HOA fee is about $150 a month."),

  ENTRY("market-common", "a Saturday market you can walk to", [
    `From the middle of The Market Common, ${h.ext(MARKET, "the farmers market")} at Valor Park is about a five-minute walk. It is held on Saturdays from April to mid-December.`,
    "The neighborhood stands on the old Myrtle Beach Air Force Base, which closed in 1993. Three Air Force jets, among them an A-10 Warthog, stand in Warbird Park, on loan to the city.",
    "Grand Park, with seven ball fields, picnic shelters and a playground, is a two-minute walk from the middle of the neighborhood. The houses and townhomes are beside a district of shops and offices.",
    "The homes are close together, on small lots: about 375 houses and about 240 townhomes. The beach is a five-minute drive, and Myrtle Beach State Park's land is about a mile away.",
    "The trade-off is a townhome's HOA fee: about $300 to $680 a month.",
  ], "Houses in The Market Common usually sold for about $540,000 last year, and townhomes for about $398,000."),

  ENTRY("forestbrook-estates", "a community garden by the pool", [
    "Forestbrook Estates has a community garden with plots for owners, on the same grounds as the community pool.",
    "The neighborhood was once known as Kingsland. Lennar began building it in 2018, and every house the county approved is now built: 500 houses, with about 105 townhomes beside them.",
    "The houses are built around ponds, and every home here is outside the high-risk flood zone. Listings say golf carts are allowed, and our agents check the HOA rules before you offer. A Food Lion is about six minutes away by car.",
    "Rosewood Landing, a county boat ramp on the Intracoastal Waterway, is about two miles away.",
    "The ponds are for looking at. There is no lake here you can take a boat on.",
  ], "Houses in Forestbrook Estates usually sold for about $395,000 last year, and the HOA fee is under $90 a month."),

  ENTRY("avalon", "ball fields in the middle of the neighborhood", [
    "In the middle of Avalon, the owners' association holds about nine acres of amenity land with a baseball field, soccer fields and a beach volleyball court. A ball game needs no drive.",
    "The same grounds have a playground, and the association holds a second, smaller amenity area too. Avalon is in Carolina Forest, about a 20-minute drive from the beach. A Food Lion and a Publix are each about ten minutes away by car.",
    "Avalon has about 730 houses, and almost every one is outside the high-risk flood zone. Those for sale lately were built between 2000 and 2006 and have about 1,700 square feet.",
    "The trade-off is age. Those houses are more than twenty years old, so our agents check the age of the roof and the air conditioner for you.",
  ], "Houses in Avalon usually sold for about $290,000 last year, and the HOA fee is about $84 a month."),

  ENTRY("deerfield", "golf-cart parking at the beach", [
    "At the beach access closest to the Deerfield Plantation area, all three parking spaces are for golf carts. By car, the beach is about seven minutes away.",
    "Deerfield grew up around the old Deer Track golf resort near Surfside Beach. After the golf land was sold in 2006, homeowners went to court to keep it as golf. A special referee found no such restriction on the land, and the state Court of Appeals affirmed in 2012. The old South Course is now a neighborhood of new houses.",
    "Its older streets are wooded, and the owners' association owns about 13 acres of lake and canals among the homes. The Surfside Beach pier is a ten-minute drive.",
    "Deerfield has about 830 houses, and the lots are generous: a typical one is about a third of an acre.",
    "On the old North Course, building has only begun, so homes near it are beside a building site.",
  ], "Homes in the Deerfield Plantation area usually sold for about $355,000 last year, and the HOA fee is under $90 a month."),

  ENTRY("the-farm", "open land behind most houses", [
    "About two of every three houses at The Farm border land the HOA owns: ponds, woods and open space, about 280 acres of it. Many back yards open onto trees or water.",
    "The Farm has about 1,300 houses on curving streets, plus townhomes and condos. Roads lead in from Carolina Forest Boulevard on one side and International Drive on the other. Houses listed here in recent years usually have about 1,900 square feet.",
    "A beach morning starts with a drive of about 12 minutes from the middle of the neighborhood. Myrtle Beach International Airport is about 20 minutes from The Farm's main entrance.",
    "The ponds are for looking at: the HOA does not allow swimming or boating in them.",
    `Our ${h.a(FARM, "guide to The Farm at Carolina Forest")} has its pools, its schools and its HOA rules.`,
  ], "Houses at The Farm usually sold for about $350,000 last year, and the HOA fee for a house is $107 a month."),
];

/* ItemList JSON-LD for the 15 numbered entries. */
const ITEMLIST = () => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList",
  name: "The best neighborhoods in Myrtle Beach", numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: N[e.id].name, url: `https://chapter3realty.com${SELF}#${e.id}` })) })}</script>`;

/* Photo credits go in the sources line (task 6; OWNER-EYE-14d L6): one sentence there, with the license
   links; the ImageObject JSON-LD for each photo stays at the end of the section (photos.js imageSchema). */
const PHOTO_CREDIT = `Photos: NOAA and USDA aerials, ${h.ext("https://www.govinfo.gov/content/pkg/USCODE-2023-title17/html/USCODE-2023-title17-chap1-sec105.htm", "public domain")}, labelled by Chapter3; the clubhouse by Pubdog, ${h.ext("https://creativecommons.org/publicdomain/mark/1.0/", "public domain")}, via ${h.ext("https://commons.wikimedia.org/wiki/File:Ocean_Forest_Country_Club_Jun_10.JPG", "Wikimedia Commons")}.`;

module.exports = G.page({
  theme: "glass",
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Surfside Beach Pier view's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Best Neighborhoods in Myrtle Beach by What You Love | Chapter3",
  description: "The best neighborhoods in Myrtle Beach, North Myrtle Beach and Surfside Beach, by what each does best: the beach, golf, boating, a walkable town and value.",
  ogTitle: "The best neighborhoods in Myrtle Beach, by what each one does best",
  crumb: "Best Neighborhoods",
  eyebrow: "Choosing a neighborhood",
  h1: "What are the best neighborhoods in Myrtle Beach?",
  h1em: "Pick by what you love.",
  sub: "Fifteen neighborhoods near the beach, with the homes and a normal day in each.",
  toc: false,
  author: "devin",
  heroCta: { title: "Tell us what you want close to home. We will send three neighborhoods that fit.", text: "One of our agents sends the list, with the homes for sale in each. There is no charge.", label: "Get three neighborhoods", href: OFFER },
  shortAnswer: [
    "For a walk to the beach, the best neighborhood near Myrtle Beach is Cherry Grove, with a fishing pier and dogs allowed on the sand. For golf at the door, Pine Lakes. For a boat, Plantation Lakes. For more house for the money, Avalon in Carolina Forest.",
  ],
  sections: [
    { h2: "What does each neighborhood do best?", toc: "What each does best", id: "choose", html:
      CSS + GUIDE },
    ...ENTRIES,
    /* One compact table after the entries (task 6): price, the HOA fee and the beach, for the reader who
       wants to compare; the HOA fee table of round 14d is merged into it. Then the other guides. */
    { h2: "How do the 15 neighborhoods compare?", toc: "Side by side", id: "side-by-side", html:
      `<div class="c3-mini"><table><caption>The 15 neighborhoods side by side</caption><thead><tr><th scope="col">Neighborhood</th><th scope="col">Homes usually sell for</th><th scope="col">HOA fee a month</th><th scope="col">To the beach</th></tr></thead><tbody>`
      + D.neighborhoods.map((n, i) => `<tr><th scope="row"><a href="#${n.id}">${i + 1}. ${n.short}</a></th><td>${n.cells.price}</td><td>${n.cells.fee}</td><td>${n.cells.beach}</td></tr>`).join("")
      + `</tbody></table></div>`
      + h.p("Times are by car with no traffic, except Cherry Grove and Surfside Beach, which are on foot. Each time is from the middle of the neighborhood to the nearest public beach access.")
      + h.p(`For clubs and gates, see our ${h.a(GATED, "guide to gated communities near Myrtle Beach")}. If price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places near Myrtle Beach")}. For no HOA fee at all, see ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}. Our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities near Myrtle Beach")} compares four with a 55+ age rule.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "Which Myrtle Beach neighborhoods are closest to the beach?", a: "Cherry Grove is closest, with a public beach access about a tenth of a mile from the middle of the neighborhood. On the ocean side of Surfside Beach, the sand is about a nine-minute walk. The Market Common is about five minutes from the beach by car." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "The city of Myrtle Beach is better for being close to the beach, and Carolina Forest for big neighborhood pools and lakes. The four Carolina Forest neighborhoods here are 12 to 20 minutes from the beach by car." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach, and more than half in Cherry Grove, are listed with no HOA fee. Most other neighborhoods on this page have an HOA fee of under $250 a month for a house." },
    { q: "Are there 55+ communities near Myrtle Beach?", a: "Yes. Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are 55+ communities, and our 55+ guide compares them." },
  ],
  sources: [
    { name: "North Myrtle Beach", href: NMB_BEACH },
    { name: "Surfside Beach pier", href: SSB_PIER },
    { name: "Pine Lakes", href: PINE_LAKES },
    { name: "Barefoot golf", href: BF_REPLAY },
    { name: "TPC Myrtle Beach", href: TPC },
    { name: "Wild Wing", href: WW_LEAGUE },
    { name: "The Sun News", href: GD_SUN },
    { name: "Plantation Lakes", href: PL_POA },
    { name: "Horry County parcels", href: PARCELS },
    { name: "Census map data", href: TIGER },
  ],
  sourcesNote: `Prices are middle resale prices over 12 months, and fees come from listings, except The Farm's. Houses and lots come from county parcels. Drive times assume no traffic. ${PHOTO_CREDIT}`,
  afterSources: () => { const cr = ph.credits(); return cr.slice(cr.indexOf("<script")) + ITEMLIST(); },
  bottomCta: { h2: "Tell us what you want close to home. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
});
