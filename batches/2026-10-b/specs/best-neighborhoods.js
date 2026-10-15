/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what each one does best.
 *
 * Round 14d, 2026-10-15 (OWNER-EYE-14c, grade 7; the coordinator's round 14d decisions; the v7 fact check,
 * row 265; SIBLING-OWNERS.md as updated): each entry shared with a sibling page is shorter and gives a fact
 * only this page has, a normal day for someone who loves that thing, one trade-off in its own words, the
 * price sentence and the offer. Tidewater leads with the club grille's week (row 266), Barefoot with the
 * Norman course and the same-day replay (row 267), Prince Creek with the pros who played TPC (row 268), Wild
 * Wing with its Monday night league (row 269), Grande Dunes with its look and its own price shape, The Farm
 * with one comparison only this page can make. Berkshire Forest is replaced by Avalon (rows 270 to 274,
 * pending verification (round 14d)). The dek is cut; the map is a short strip with numbers only; every guide
 * line is one line; pools in no heading and no photo label; at most about half the entries give a drive or
 * walk time; the yearly cost section is now a short table of the yearly HOA fee by guide group (row 275).
 * Four aerials kept, the ones whose labels read at 12 px or more on a phone; the rest are on the photo
 * partner's shot list (batches/2026-10-b/photo-request-abdulla.html).
 * Round 14c, 2026-10-15: picks in the short answer; on a phone the map comes before the guide; one compact table.
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
 * a boat, a town they can walk, more house for the money. They would pay an expert to know: what a normal
 * day is like in each place; the one thing about it they could not have guessed; what is hard about it;
 * what a home costs, in one line; and how to see the homes.
 *
 * Shape (CRAFT 3, a list of places, "No preamble"): the short answer; one offer box; the selection guide,
 * which is the only list of names before the entries, grouped by feature, never by people, with the one map
 * inside it; then the 15 entries in the guide's order, each ending in its own offer strip (the price and fee
 * in one sentence and a "Book a showing in X" pill to the contact form with the place named). Then the side
 * by side table, the yearly HOA fee by guide group, the FAQ, the sources and the closing offer.
 *
 * Facts: every claim rests on a row. batches/2026-10-b/facts/neighborhoods-facts.md (verified rows; rows 266
 * to 275 pending verification (round 14d)); gated-communities-facts.md rows 20 and 43 (Tidewater's price and
 * fee, one value on both pages); the-farm-facts.md rows 5 and 48; data/best-neighborhoods.json for the
 * prices, fees and the fee table. The struck list is batches/2026-10-b/facts/best-neighborhoods-struck.json.
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
const TW_SPECIALS = "https://tidewatergolf.com/joeys-clubhouse-grille/specials/";
const BF_REPLAY = "https://www.barefootgolf.com/same-day-reduced-replay-rate/";
const TPC = "https://www.tpcmyrtlebeach.com/";
const WW_LEAGUE = "https://www.playwildwing.com/spark-golf-league/";
const GD_SUN = "https://www.aol.com/miami-look-myrtle-beach-grande-100000795.html";
const PL_POA = "https://www.plantationlakespoa.com/community.html";

/* ---------------------------------------------------------------------------- */
/* Pictures                                                                       */

/* An aerial only where its point shows in a second and its drawn labels read at 12 px or more on a phone
   (round 14d): Cherry Grove, Surfside Beach, Pine Lakes and The Market Common. The others (Tidewater, Barefoot,
   Prince Creek, Plantation Lakes) have labels too small at 390 px and wait for the photo partner's shots. */
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
  "market-common": AER("market-common-from-above", "The Market Common from the air: its homes, outlined in orange, with Grand Park beside them.",
    "The Market Common from the air: homes outlined in orange beside a lake, ball fields and a lake labelled Grand Park, a second outlined group labelled The Reserve at Market Common, and the airport runway at the bottom"),
};

/* The one map (OWNER-EYE-14c H1 and M6): the 15 as numbered dots on a short, wide strip, numbers only, so no
   name can sit by the wrong dot; the guide beside it is its key. Drawn 320 wide so the numbers show at about
   14 px on a phone (12.5 in the drawing, scaled up). */
const RMAP = AM.regionMap({ name: "Neighborhoods", maxRatio: 0.6, placeNames: false,
  places: D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: `#${n.id}` })) },
  { dir: MAP_DIR, src: "/images/maps", glass: true, width: 320 });
const MAP_HTML = PK.mapFigure(h, RMAP.html, "Map of the 15. The numbers match the guide.", RMAP.credit, "Neighborhoods");

/* ---------------------------------------------------------------------------- */
/* The selection guide (CRAFT 3, "No preamble"): each place once, under the thing it does best, in words a   */
/* stranger can choose by. Features only, never who lives anywhere (fair housing). One line each on a phone.  */

const GROUPS = [
  { icon: "beach", label: "Walk to the beach", items: [
    ["cherry-grove", "a pier and the marsh"],
    ["surfside-beach", "a free pier"]] },
  { icon: "golf", label: "Golf at the door", items: [
    ["pine-lakes", "golf since 1927"],
    ["tidewater", "dinner at the club"],
    ["barefoot-resort", "a swing bridge"],
    ["prince-creek", "where pros played"],
    ["wild-wing", "a Monday night league"],
    ["grande-dunes", "a South Florida look"]] },
  { icon: "dock", label: "A boat or a paddle", items: [
    ["plantation-lakes", "pontoon boats"],
    ["waterbridge", "kayaks from a dock"]] },
  { icon: "shopping", label: "A town center you can walk", items: [
    ["market-common", "a Saturday market"]] },
  { icon: "dollar", label: "Lower prices", items: [
    ["forestbrook-estates", "a newer house"],
    ["avalon", "the lowest price here"],
    ["deerfield", "bigger wooded lots"],
    ["the-farm", "nearer the beach"]] },
];
{
  const seen = GROUPS.flatMap((g) => g.items.map((i) => i[0]));
  if (seen.join() !== ORDER.join()) throw new Error("the guide's order must be the data order (the entries and the map numbers): " + seen.join());
  /* One line on a 390 px phone (OWNER-EYE-14c H1): the short name and the label in 34 characters or fewer. */
  for (const g of GROUPS) for (const [id, what] of g.items) if ((N[id].short + ": " + what).length > 34) throw new Error(`guide line too long for one phone line: ${N[id].short}: ${what}`);
}
const GUIDE_CSS = "<style>"
  + ".c3-guide{max-width:960px;margin:1rem 0 0}"
  /* Cards flow in columns, so a short card does not leave a tall empty box beside a long one (OWNER-EYE-14c M4). */
  + ".c3-guide-grid{margin:0 0 1rem}"
  + "@media (min-width:640px){.c3-guide-grid{columns:2;column-gap:.8rem}.c3-guide-card{break-inside:avoid;margin:0 0 .8rem}}"
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
  + ".c3-guide-note{margin:.2rem 0 0;color:var(--muted)}"
  + ".c3-place-cta{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem 1.2rem;max-width:760px;margin:1.6rem 0 .4rem;padding:1rem 1.2rem;border-radius:20px;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none);"
  + "-webkit-backdrop-filter:var(--g-blur,none);backdrop-filter:var(--g-blur,none)}"
  + ".c3-place-cta>p:first-child{flex:1 1 18rem;margin:0;color:var(--navy);font-size:var(--read,1.0625rem);line-height:1.55}"
  + "main#main .c3-place-cta .c3-offer{margin:0;flex:0 1 auto}"
  /* The two small tables: short columns that stay a table at 390 px (OWNER-EYE-14 H5). */
  + ".c3-mini{max-width:760px;margin:1rem 0 1.2rem;padding:.4rem .8rem .6rem;border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge,rgba(255,255,255,.8));box-shadow:var(--g-hi,none),var(--g-sh,none)}"
  + ".c3-mini table{width:100%;border-collapse:collapse;font-size:.95rem;line-height:1.35}"
  + ".c3-mini caption{text-align:left;font-weight:600;color:var(--navy);padding:.4rem 0 .5rem}"
  + ".c3-mini th,.c3-mini td{text-align:left;vertical-align:top;padding:.45rem .5rem .45rem 0;border-bottom:1px solid rgba(28,32,40,.1);color:var(--navy)}"
  + ".c3-mini thead th{font-weight:600;border-bottom:1px solid rgba(28,32,40,.25)}"
  + ".c3-mini tbody th{font-weight:600}.c3-mini a{color:var(--navy);text-decoration:underline;text-underline-offset:.18em}"
  /* On a phone the map comes first, a short strip of numbered dots, and the guide's names follow once. */
  + "@media (max-width:979px){.c3-guide{display:flex;flex-direction:column}.c3-guide>figure,.c3-guide>.c3-map-figure{order:-1;margin:0 0 .8rem}}"
  /* No preamble (CRAFT 3): on a phone the sections sit closer, the offer band is shorter, and the guide's
     cards are tighter, so the first entry starts sooner. Nothing is hidden. */
  + "@media (max-width:699px){main>section{padding-top:2rem!important;padding-bottom:2rem!important}"
  + "main>section[style^='background:var(--navy)'] p[style*='font-size:1.7rem'],main>section[style^='background:var(--navy)'] h2{font-size:1.4rem!important}"
  + ".c3-guide-grid{display:block}.c3-guide-card{padding:0;background:none;border:0;box-shadow:none;margin:0 0 .4rem}.c3-guide-card h3{font-size:1rem;margin-bottom:0}"
  + ".c3-guide-card h3 .i{width:1.5rem;height:1.5rem}.c3-gi{font-size:.97rem;line-height:1.3;margin-bottom:0;white-space:nowrap}.c3-gi a{padding:.08rem 0}}"
  /* Round 14d: on a phone each aerial runs the full width of the screen, so its drawn labels show at 12 px or
     more (OWNER-EYE-14c M5; the labels are part of the image). */
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
  + `</div>${MAP_HTML}</div>`
  + `<p class="c3-guide-note">For clubs and gates, see our ${h.a(GATED, "gated communities guide")}.</p>`;

/* ---------------------------------------------------------------------------- */
/* The 15 entries (CRAFT 5, "Sell the place like the best agent in town"). A place a sibling page also names  */
/* gets this page's own angle (SIBLING-OWNERS.md): one fact only this page has, a normal day for someone who   */
/* loves that thing, one trade-off in its own words, the price sentence and the offer.                         */

/* The place's own offer (CRAFT 3, "Every place gets its own offer"): one glass strip that holds the price
   and fee in one plain sentence and the theme's pill, "Book a showing in X", to the contact form with the
   place named. */
const placeOffer = (id, line) => `<div class="c3-place-cta"><p>${line}</p>${G.offer(N[id].short, { href: `${OFFER}?place=${encodeURIComponent(N[id].name)}` })}</div>`;
const ENTRY = (id, headline, paras, price) => {
  const num = ORDER.indexOf(id) + 1;
  return { h2: `${num}. ${N[id].name}: ${headline}`, toc: N[id].name, id,
    html: h.p(paras[0]) + (PHOTO[id] || "") + paras.slice(1).map((t) => h.p(t)).join("") + placeOffer(id, price) };
};

const ENTRIES = [
  ENTRY("cherry-grove", "a fishing pier with a world record", [
    "In 1964 a 1,780-pound tiger shark was landed from Cherry Grove Pier, a world record at the time. The pier was built in the 1950s.",
    `Mornings here can start on the sand. A public beach access is about 0.1 mile from the middle of Cherry Grove. North Myrtle Beach ${h.ext(NMB_BEACH, "allows leashed dogs on the beach")} all year, except in the middle of the day in summer.`,
    "For an evening walk on foot, Russell Burgess Coastal Preserve, with a walkway and a pier, is under half a mile away.",
    "The trade-off is the house itself. Most for sale here were built from the 1960s to the 1980s, and they are smaller than in the newer neighborhoods.",
  ], "Houses in Cherry Grove usually sell for about $695,000, and most homes for sale are listed with no homeowners association (HOA) fee."),

  ENTRY("surfside-beach", "a free concrete pier with two restaurants", [
    `The ocean side of Surfside Beach has its own town pier, and ${h.ext(SSB_PIER, "walking onto it is free")}. The long concrete pier has two restaurants, an ice cream shop and a bait and tackle shop. From April through October it is open until 1 a.m.`,
    "Walking to the pier takes about 9 minutes, about 0.4 mile, and the sand is the same distance. Streets of houses run from US 17 Business to the beach.",
    "Surfside Beach began as part of a rice plantation called The Ark. Later, George J. Holliday renamed it Floral Beach for his wife, Flora. The Hollidays built a pavilion, a general store and a few rental cottages for summer visitors.",
    "Living by the pier costs more. Of the 15 neighborhoods here, only Grande Dunes and Plantation Lakes have homes that resell for more.",
  ], "Houses on the ocean side of Surfside Beach usually sell for about $705,000 and condos for about $405,000. Most homes for sale here are listed with no HOA fee."),

  ENTRY("pine-lakes", "where Sports Illustrated was planned", [
    "Sports Illustrated was planned at Pine Lakes. In 1954 a group of Time-Life executives came to play the course and plan a new weekly sports magazine. The clubhouse is now on the National Register of Historic Places.",
    "Pine Lakes Country Club opened in 1927 as Ocean Forest Country Club, Myrtle Beach's first golf course. Robert White, a native of St. Andrews, Scotland, and the first president of the PGA of America, designed it.",
    "The Preserve at Pine Lakes and Pine Lakes Estates are two sections of houses beside the course. The houses are much newer than the club: most on the market went up after 2015.",
    "Few houses come up for sale in the two sections, so a buyer may need to wait for the right one.",
  ], "Of about 17 resales in The Preserve and Pine Lakes Estates in the past year, the middle sold for $600,000. A house in The Preserve pays an HOA fee of about $95 a month."),

  ENTRY("tidewater", "supper at the club grille, any night of the week", [
    `At Tidewater Plantation, the club grille has a plan for every night. ${h.ext(TW_SPECIALS, "Joey's Clubhouse Grille")}, a public restaurant at Tidewater Golf Club, runs a dinner special each day. Mondays are Calabash shrimp, Fridays are flounder all day, and Saturdays are ribs.`,
    "Happy hour is every afternoon, and brunch is on Saturdays and Sundays. The grille is a 3-minute drive from a typical Tidewater home.",
    "Many of Tidewater's houses are along the fairways.",
    "Tidewater is on the marsh behind Cherry Grove Inlet, not on the ocean, so a beach day starts in the car.",
  ], "Houses in Tidewater usually sell for about $625,000, and the HOA fee is about $230 a month."),

  ENTRY("barefoot-resort", "a swing bridge to the shops", [
    "Barefoot Resort's road to the shops crosses a swing bridge from the 1930s, moved here from Edenton, North Carolina. Barefoot Landing's shops and restaurants are on the far side of the Intracoastal Waterway, about 6 minutes by car from the condo neighborhoods.",
    `For a golfer, the Greg Norman course has seven holes along the waterway and wide fairways. If one round is not enough, Barefoot ${h.ext(BF_REPLAY, "sells a second round the same day")} at a lower rate, on the same course or another one.`,
    "Most homes for sale here are condos. Each association has its own amenities and rules, so our agents check which one a home belongs to before you offer.",
  ], "Homes for sale in these Barefoot sections, mostly condos, usually sell for about $430,000, and a condo pays about $680 a month in HOA fees."),

  ENTRY("prince-creek", "a course where the pros played", [
    `Prince Creek's sections border TPC Myrtle Beach. Tom Watson won the Senior PGA Tour Championship there in 2000, and ${h.ext(TPC, "Lee Trevino and Gary Player")} have played it too.`,
    "The course is open to the public. Its practice area has a putting green, a chipping green and a grass driving range.",
    "Prince Creek is a set of separate sections, each with its own rules and HOA fee, from about $100 to $390 a month. Ask which section a home is in before you fall for it.",
  ], "Five houses resold in Prince Creek's sections in the past year, at a middle price of about $558,000. New townhouses from builders sold for less."),

  ENTRY("wild-wing", "a Monday night golf league", [
    `On summer Monday nights, Wild Wing runs a ${h.ext(WW_LEAGUE, "community golf league")}. Teams play nine holes on its Hummingbird course, with a playoff at the end of the season. Afterward, Wishbones Bar and Grill, open to the public, has a full bar and two indoor TrackMan golf simulators.`,
    "The club's main course, the Avocet, was designed by Jeff Brauer and Larry Nelson. Many streets are named for water birds, such as Wood Stork Drive and Black Skimmer Drive.",
    "Wild Wing is inside the city of Conway, so the ocean is about 20 minutes away by car.",
  ], "Houses in Wild Wing usually sell for about $600,000, and the HOA fee is about $135 a month."),

  ENTRY("grande-dunes", "a South Florida look on the waterway", [
    `Grande Dunes was built to look like South Florida. Its ${h.ext(GD_SUN, "first houses followed the style")} of the Florida builder Addison Mizner, with tile roofs, stucco, columns and arches, and many of its most expensive houses still do. The first completed house sold in October 2000 for $1.15 million.`,
    "For a golfer, the Resort Club course is a Roger Rulewich design beside the Intracoastal Waterway. The National Golf Course Owners Association named it its course of the year in 2009.",
    "If you want a lived-in house with a settled yard, the choice is small: most houses for sale here are new or not yet finished.",
  ], "New houses from builders such as Lennar and Dream Finders sold for about $680,000 in the past year. The seven homes that resold went for $1.2 million to $2.9 million. A house pays an HOA fee of about $200 to $400 a month."),

  ENTRY("plantation-lakes", "pontoon boats on a lake with 15 miles of shoreline", [
    `Owners at Plantation Lakes ${h.ext(PL_POA, "take pontoon boats out")} on a lake with about 15 miles of shoreline. On a lakefront lot, the water is behind the house. An owner can take the boat to the amenity area, which has day and overnight docks and a boat ramp.`,
    "On a cool evening, the clubhouse has a great room with a fireplace and a reading and card room.",
    "The lake is for small boats: the recorded rules allow boats of 19 feet or shorter, with small motors.",
  ], "Houses in Plantation Lakes usually sell for about $740,000, the most of the Carolina Forest neighborhoods here, and the HOA fee is about $125 a month."),

  ENTRY("waterbridge", "kayaks from a floating dock, and potluck Thursdays", [
    "Waterbridge owners can launch a kayak on the neighborhood's lakes from a floating dock. The neighborhood is built around lakes and natural areas, and the launch takes any boat with no motor.",
    "Walking paths cross the water on bridges, and the HOA's calendar holds card nights, bunco, mahjong, a book club and potluck Thursdays. The fitness center at the clubhouse is open around the clock.",
    "Owners also have a storage area for boats and jet skis, but it is full now, so one of our agents asks about a space before you offer.",
  ], "Resale houses in Waterbridge usually sell for about $630,000, and new ones from the builders sold for about $550,000 in the past year. The HOA fee is about $150 a month."),

  ENTRY("market-common", "a Saturday market you can walk to", [
    `From the middle of The Market Common, you can walk to a farmers market, the shops and a large city park. ${h.ext(MARKET, "The farmers market")} is held at Valor Park on Saturdays from April to mid-December, about a 5-minute walk away.`,
    "The houses and townhomes are beside a district of shops and offices, so many errands can be done on foot.",
    "Three Air Force jets stand in Warbird Park, on loan to the city, among them an A-10 Warthog.",
    "The trade-off is the fee on a townhome: about $300 to $680 a month.",
  ], "Houses in The Market Common usually sell for about $540,000 and townhomes for about $398,000. The one house listed for sale in October had an HOA fee of $101 a month."),

  ENTRY("forestbrook-estates", "a newer house and a community garden", [
    "Of the neighborhoods here where most houses for sale were built in the 2020s, Forestbrook Estates costs the least. Lennar began building it in 2018, and most of those listed now are from the last few years.",
    "Owners swim at the community pool, and on the same grounds there is a community garden with plots for owners.",
    "The lots are small, about a sixth of an acre.",
  ], "Houses in Forestbrook Estates usually sell for about $395,000, and the HOA fee is under $90 a month."),

  ENTRY("avalon", "the lowest house price on this page", [
    "Of the 15 neighborhoods here, Avalon, in Carolina Forest, has the lowest house prices.",
    "An evening softball game needs no drive. The owners' association holds a 9-acre amenity area in the middle of the neighborhood. It has a baseball and softball field, a beach volleyball court, a basketball court and a covered picnic pavilion.",
    "The houses are older and smaller than in the newer neighborhoods here. The ones listed now were built from 2000 to 2006 and have about 1,600 square feet, on lots of about a sixth of an acre.",
  ], "Houses in Avalon resold for a middle price of about $292,000 in the past year, and the HOA fee is about $85 a month."),

  ENTRY("deerfield", "bigger wooded lots near Surfside Beach", [
    "In the Deerfield Plantation area, a typical lot is about a third of an acre, about twice a typical lot in Avalon or Forestbrook Estates. Its older streets are wooded, and the owners' association owns lake and canal land among the homes.",
    "The area grew up around the old Deer Track golf courses near Surfside Beach, and the old South Course is now a neighborhood of new houses. The nearest public beach access has a few parking spaces, all for golf carts.",
    "On the old North Course, building has only begun, so homes near it are beside a building site.",
  ], "Homes in the Deerfield Plantation area usually sell for about $355,000, and the HOA fee is under $90 a month."),

  ENTRY("the-farm", "the Carolina Forest pick nearest the beach", [
    "Of the four Carolina Forest neighborhoods on this page, The Farm is the nearest the beach: about 12 minutes by car from the middle of the neighborhood. Avalon, the one that costs less, is about 18. For a Carolina Forest house with beach days in the plan, The Farm is the pick here.",
    `Our ${h.a(FARM, "guide to The Farm at Carolina Forest")} covers the rest: its trails, its amenities and its rules.`,
  ], "Houses at The Farm usually sell for about $350,000, and the HOA fee for a house is $107 a month."),
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
  h1em: "Pick by what you love.",
  sub: "Fifteen neighborhoods near Myrtle Beach, each under the thing it does best.",
  toc: false,
  author: "devin",
  heroCta: { title: "Tell us what you want close to home. We will send three neighborhoods that fit.", text: "One of our agents sends the list, with the homes for sale in each. There is no charge.", label: "Get three neighborhoods", href: OFFER },
  shortAnswer: [
    "For a walk to the beach, the best neighborhood in Myrtle Beach is Cherry Grove, with a fishing pier and dogs allowed on the sand. For golf at the door, Pine Lakes. For a boat, Plantation Lakes. For a lower price, Avalon in Carolina Forest.",
  ],
  sections: [
    { h2: "Which neighborhood fits what you love?", toc: "Choose by what you love", id: "choose", html:
      CSS + GUIDE },
    ...ENTRIES,
    /* One compact table after the entries (ROUND-14; OWNER-EYE-14 H5): the price and the time to the beach,
       the two numbers a reader compares, as a table that stays a table on a phone. */
    { h2: "How do the 15 neighborhoods compare on price and the beach?", toc: "Side by side", id: "side-by-side", html:
      `<div class="c3-mini"><table><caption>The 15 neighborhoods: price and time to the beach</caption><thead><tr><th scope="col">Neighborhood</th><th scope="col">Homes usually sell for</th><th scope="col">To the beach</th></tr></thead><tbody>`
      + D.neighborhoods.map((n, i) => `<tr><th scope="row"><a href="#${n.id}">${i + 1}. ${n.short}</a></th><td>${n.cells.price}</td><td>${n.cells.beach}</td></tr>`).join("")
      + `</tbody></table></div>` +
      h.p("Cherry Grove and Surfside Beach are walks; the rest are by car with no traffic. Each is from the middle of the neighborhood to the nearest public beach access.") },
    /* OWNER-EYE-14c M7 and the coordinator's round 14d decision: not the sibling pages' yearly cost shape and
       not The Farm's figure, but the yearly HOA fee by guide group (data fee_by_group, row 275). */
    { h2: "What does the HOA fee come to in a year?", toc: "HOA fee by kind of place", id: "hoa-fee", html:
      `<div class="c3-mini"><table><caption>The yearly HOA fee, by what the neighborhood does best</caption><thead><tr><th scope="col">Neighborhoods for</th><th scope="col">HOA fee a year</th></tr></thead><tbody>`
      + D.fee_by_group.rows.map((r) => `<tr><th scope="row">${r.group}</th><td>${r.fee}</td></tr>`).join("")
      + `</tbody></table></div>` +
      h.p(`If price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places near Myrtle Beach")}. For no HOA fee at all, see ${h.a("/buyers/no-hoa-homes/", "homes with no HOA near Myrtle Beach")}. Our ${h.a("/buyers/55-plus-communities/", "guide to 55+ communities near Myrtle Beach")} compares four with a 55+ age rule.`) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "Which Myrtle Beach neighborhoods are closest to the beach?", a: "Of these 15, Cherry Grove is closest, with a public beach access about 0.1 mile from the middle of the neighborhood. On the ocean side of Surfside Beach, the sand is about a 9-minute walk. The Market Common is about 5 minutes from the beach by car." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "The city of Myrtle Beach is better for being close to the beach, and Carolina Forest for newer neighborhoods, several of them built around lakes. The four Carolina Forest neighborhoods here are 12 to 20 minutes from the beach by car." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Most homes for sale on the ocean side of Surfside Beach and in Cherry Grove are listed with no HOA fee. Most other neighborhoods on this page have an HOA fee of under $250 a month for a house." },
    { q: "Are there 55+ communities near Myrtle Beach?", a: "Yes. Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are 55+ communities, and our 55+ guide compares them." },
  ],
  sources: [
    { name: "North Myrtle Beach beach rules", href: NMB_BEACH },
    { name: "Surfside Beach Fishing Pier", href: SSB_PIER },
    { name: "Tidewater Golf Club", href: TW_SPECIALS },
    { name: "Barefoot Resort golf", href: BF_REPLAY },
    { name: "TPC Myrtle Beach", href: TPC },
    { name: "Wild Wing golf league", href: WW_LEAGUE },
    { name: "The Sun News on Grande Dunes", href: GD_SUN },
  ],
  sourcesNote: "Prices are the middle sale price over 12 months, or the range where few sold, in the sections named. HOA fees come from recent listings, except The Farm's. Distances and times, by car or on foot, are from the middle of each neighborhood, with no traffic, unless a sentence names another start.",
  afterSources: () => ph.credits() + ITEMLIST(),
  bottomCta: { h2: "Tell us what you want close to home. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
});
