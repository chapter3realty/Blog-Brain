/* /buyers/best-neighborhoods/ - the best neighborhoods in Myrtle Beach, by what the reader wants nearby.
 *
 * Batch 2026-10-b, page 1. Version 1, 2026-10-13.
 *
 * Reader. Someone who typed "best neighborhoods in Myrtle Beach", "best places to live in Myrtle Beach",
 * "best communities", "best areas to live", or the North Myrtle Beach or Surfside Beach versions. They
 * know no town, no road and no neighborhood name. They want a short list of neighborhoods to look at for
 * the one thing they care about (the beach, golf, a pool, a lower price, no HOA, new homes, a hospital,
 * 55+, a gate), honest facts to compare, and where each one is. Job: choose two or three to look at.
 * Shape (CRAFT 3; reports/Page shapes, sections 9 and 1): a decision guide. The short answer names the
 * picks for the three biggest wants and says in one line how the page chose them. Then the decision
 * table, drawn as a "what do you want" picker (tools/compare.js wantPicker); one map of all fifteen; one
 * section per area (the area is what readers type), each with a table that becomes cards on a phone and
 * two or three lines per neighborhood: what it has, then its honest trade-off; the four 55+ communities by
 * reference; what to check before you choose (icon cards), one labelled example, the offer, the FAQ.
 * "Best" is defined openly by what each place has (CRAFT 3; fair housing). Never who lives anywhere.
 *
 * Facts: batches/2026-10-b/data/best-neighborhoods.json names the ledger row of every table cell. The
 * prose uses the same rows:
 *   neighborhoods-facts.md, verified rows only, in the verifier's "OK to use on the page as" wording and
 *     its corrected beach rows (51, 63, 108, 163). Never a low-end price, a reference address, an owner
 *     name, "gated" from listing text, or one price where the sample is small or the types are mixed.
 *     Grande Dunes, Barefoot Resort, Pine Lakes and Prince Creek are said as "these sections" or named
 *     by the sections the county names. Cherry Grove and Surfside Beach have no fee figure: "Ask us".
 *   the-farm-facts.md for The Farm (rows 35 to 45 of the neighborhoods ledger are wrong): rows 5, 6, 28,
 *     47, 48, 71 and the verifier's completeness wording for the amenities.
 *   gated-communities-facts.md rows 9, 11, 20, 34 and 43, in the gated page's own words, so the two pages
 *     give one value: Tidewater's guard house, price and fee; the gated sections of Grande Dunes and
 *     Barefoot Resort.
 *   no-hoa-facts.md row 18 corrected, in the no-HOA page's words (North Myrtle Beach homes with no fee).
 *   batches/2026-10-a, by reference: the four 55+ cells (data/55-plus-communities.json) and the pools and
 *     clubhouses their pages state.
 *   stories.json: insurance-quote-before-offer (the example's fix), ny-buyer-rules-fit (the rules card),
 *     housing-types-mix (the property version only).
 *   Left out on purpose: the McLeod Carolina Forest hospital (no opening confirmed; the registry and the
 *     ledgers disagree), amenities from listing remarks, any gate not in the gated ledger, school ratings,
 *     builder names, grocery addresses.
 *
 * Pictures: our own map of the fifteen (tools/area-map.js placesMap, from the reference points), and two
 * USDA NAIP aerials with labels placed from county and state data (images/best-neighborhoods/), each under
 * the sentence it shows: the ocean side of Surfside Beach (walk to the beach) and Pine Lakes beside its
 * golf course.
 *
 * Example: retell first. "Lisa wants to walk to the beach, the house she likes in Cherry Grove is in a
 * flood zone, so her agent gets her an insurance quote before she makes an offer."
 */
const fs = require("fs"), path = require("path");
const { h, data, compareCards, wantPicker, atAGlance, glance, story, BB } = require("./_kit.js");
const PK = require(path.join(BB, "tools", "page-kit.js"));

/* Photo records: every photos.json found (the website's data/, then the batch's), merged, so this page
   finds its records beside another batch's (same rule as the no-HOA page). */
const BATCH = path.join(BB, "batches", "2026-10-b");
const dataFiles = (name) => [path.join(__dirname, "..", "data", name), path.join(BATCH, "data", name)].filter((f) => fs.existsSync(f));
const PHOTOS = [];
for (const f of dataFiles("photos.json")) for (const r of JSON.parse(fs.readFileSync(f, "utf8")).photos) {
  const k = JSON.stringify(r.variants || r.file);
  if (!PHOTOS.some((x) => JSON.stringify(x.variants || x.file) === k)) PHOTOS.push(r);
}
const kit = PK.create({ h, photos: PHOTOS, mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });

const D = JSON.parse(fs.readFileSync(dataFiles("best-neighborhoods.json")[0], "utf8"));

/* The two aerials, each under the sentence it shows. Made at load time: mkpage reads pageImages before it
   builds the sections. The Surfside Beach view has crops, so it is the page's share image. */
const ph = kit.photoSet({ aerialWidth: "760px" });
const CSS = ph.css();
const SURFSIDE = ph.aerial("surfside-beach-from-above", "The ocean side of Surfside Beach from the air: streets of homes from US 17 Business, at the left, to the beach.",
  { alt: "Surfside Beach from the air: streets of houses under trees from a highway at the left to a wide beach and the ocean at the right, with a fishing pier and a public beach access marked" });
const PINE = ph.aerial("pine-lakes-from-above", "Pine Lakes from the air: the homes in the table, outlined in orange, beside the Pine Lakes Country Club golf course.",
  { alt: "Pine Lakes in Myrtle Beach from the air: curving streets of houses around ponds, outlined in orange, beside a golf course with green fairways and sand traps, and the beach at the far right", closeUp: true });
const N = Object.fromEntries(D.neighborhoods.map((n) => [n.id, n]));

const SELF = "/buyers/best-neighborhoods/";
const OFFER = "/contact/";
const FARM = "/submarkets/carolina-forest/the-farm/";
const P55 = "/buyers/55-plus-communities/";
const DWNMB = "/buyers/55-plus-communities/del-webb-north-myrtle-beach/";
const SEASONS = "/buyers/55-plus-communities/seasons-at-prince-creek-west/";
const MT = "/buyers/55-plus-communities/myrtle-trace/";

/* Primary sources, each opened by the researcher and again by the verifier. */
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const FEMA = "https://msc.fema.gov/portal/home";
const BEACH = "https://gis.des.sc.gov/beachaccess/";
const SCHOOLS = "https://hcsd1.maps.arcgis.com/apps/instant/lookup/index.html?appid=72f93a5329c54f54840673fe6430ab43";
const FARM_HOA = "https://www.farmatcarolinaforest.com/";

/* A neighborhood's heading, with the id the picker, the map key and the tables link to. */
const H3 = 'style="font-family:var(--serif);font-size:1.25rem;color:var(--navy);margin:1.6rem 0 .6rem"';
/* The heading is the neighborhood's own name, the same words as its row in the table, its card in the
   picker and its line in the map key (score.js H14: a link label is the heading it points to). */
const nh = (id) => `<h3 id="${id}" ${H3}>${N[id].name}</h3>`;
const A = (id) => `#${id}`;

/* The map: the fifteen, north to south, each name linked to its own part of the page. */
const MAP = kit.placesMap("Neighborhoods", D.neighborhoods.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: n.id === "the-farm" ? FARM : A(n.id) })), {
  caption: "Map of the 15 neighborhoods on this page, numbered from North Myrtle Beach at the top right to Murrells Inlet at the bottom left. Numbers 6, 10 and 12 are in the city of Myrtle Beach.",
  key: true,
});

/* One table per area. Columns: what homes usually sell for, the HOA fee, the trip to a beach access. */
const COLS = [
  { key: "price", label: "Homes usually sell for", num: true },
  { key: "fee", label: "HOA fee a month" },
  { key: "beach", label: "To a beach access" },
];
let cssDone = false;
const table = (ids, caption) => {
  const html = compareCards(ids.map((id) => ({ name: N[id].name, href: id === "the-farm" ? FARM : A(id), cells: N[id].cells })), COLS,
    { caption, nameLabel: "Neighborhood", css: !cssDone });
  cssDone = true;
  return html;
};

/* ---------------------------------------------------------------------------- */

module.exports = {
  url: SELF,
  hub: { name: "Buyers", url: "/buyers/" },
  /* The Surfside Beach aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Best Neighborhoods in Myrtle Beach: Prices and Map | Chapter3",
  description: "The best neighborhoods in Myrtle Beach, North Myrtle Beach and Surfside Beach by what you want nearby, with home prices, HOA fees, beach minutes and a map.",
  ogTitle: "The best neighborhoods in Myrtle Beach, by what you want nearby",
  crumb: "Best Neighborhoods",
  eyebrow: "Choosing a neighborhood",
  h1: "What are the best neighborhoods in Myrtle Beach?",
  h1em: "Sorted by what you want close to home.",
  sub: "Fifteen neighborhoods from North Myrtle Beach to Murrells Inlet, with what homes sell for, the HOA fee and the trip to the beach for each.",
  heroMedia: glance([
    { icon: "beach", label: "Walk to the beach", text: "Cherry Grove, Surfside Beach" },
    { icon: "dollar", label: "A lower price", text: "The Farm, Deerfield" },
    { icon: "golf", label: "Golf", text: "Pine Lakes, Barefoot Resort" },
  ]),
  heroCta: { label: "Get three neighborhoods", href: OFFER },
  author: "devin",
  shortAnswer: [
    "The best neighborhood in Myrtle Beach depends on what you want close by. To walk to the beach, look at Cherry Grove in North Myrtle Beach or the ocean side of Surfside Beach. For a lower price and a short drive to the beach, look at The Farm in Carolina Forest or the Deerfield Plantation area near Surfside Beach. For golf, look at Pine Lakes, Tidewater Plantation or Barefoot Resort.",
    "We chose these 15 neighborhoods by what each one has. We compared what homes sold for in the last 12 months, the HOA fee, the drive to the beach, and golf and pools. Each one below has its trade-off too.",
  ],
  sections: [
    { h2: "Which Myrtle Beach neighborhood fits what you want?", toc: "Find one by what you want", html:
      CSS +
      h.p("The neighborhood that fits you depends on what you want most near home. Find it below, then read about each neighborhood it names.") +
      wantPicker([
        { icon: "beach", want: "Walk to the beach", note: "The middle of each is under half a mile from a public beach access.",
          places: [{ name: "Cherry Grove", href: A("cherry-grove") }, { name: "Surfside Beach, ocean side", href: A("surfside-beach") }] },
        { icon: "beach", want: "A short drive to the beach, for less", note: "About 7 to 10 minutes by car. Houses usually sell for about $350,000.",
          places: [{ name: "Deerfield Plantation area", href: A("deerfield") }, { name: "The Farm at Carolina Forest", href: FARM }] },
        { icon: "golf", want: "Golf near home",
          places: [{ name: "Pine Lakes", href: A("pine-lakes") }, { name: "Tidewater Plantation", href: A("tidewater") }, { name: "Barefoot Resort", href: A("barefoot-resort") }] },
        { icon: "pool", want: "Pools and a clubhouse", note: "Seasons and Del Webb are 55+ communities.",
          places: [{ name: "The Farm at Carolina Forest", href: FARM }, { name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Del Webb North Myrtle Beach", href: DWNMB }] },
        { icon: "dollar", want: "A lower price", note: "Houses usually sell for about $350,000 to $395,000.",
          places: [{ name: "The Farm at Carolina Forest", href: FARM }, { name: "Berkshire Forest", href: A("berkshire-forest") }, { name: "Forestbrook Estates", href: A("forestbrook-estates") }] },
        { icon: "home", want: "No HOA fee, or a low one", note: "Older Pine Lakes streets show no fee; Deerfield and Forestbrook show under $90 a month.",
          places: [{ name: "Pine Lakes", href: A("pine-lakes") }, { name: "Deerfield Plantation area", href: A("deerfield") }, { name: "Forestbrook Estates", href: A("forestbrook-estates") }] },
        { icon: "key", want: "A new home", note: "Builders sold new homes in each in the last 12 months.",
          places: [{ name: "Waterbridge", href: A("waterbridge") }, { name: "Wild Wing Plantation", href: A("wild-wing") }, { name: "Prince Creek", href: A("prince-creek") }] },
        { icon: "hospital", want: "Close to a hospital", note: "About 6 to 8 minutes by car to a hospital.",
          places: [{ name: "Prince Creek", href: A("prince-creek") }, { name: "Pine Lakes", href: A("pine-lakes") }, { name: "Wild Wing Plantation", href: A("wild-wing") }] },
        { icon: "clubhouse", want: "A 55+ community", note: "Del Webb at Grande Dunes is the fourth, in our 55+ guide.",
          places: [{ name: "Del Webb North Myrtle Beach", href: DWNMB }, { name: "Seasons at Prince Creek West", href: SEASONS }, { name: "Myrtle Trace", href: MT }] },
        { icon: "gate", want: "A gate at the entrance", note: "Our guide to gated communities lists more.",
          places: [{ name: "Tidewater Plantation", href: A("tidewater") }, { name: "Grande Dunes, some sections", href: A("grande-dunes") }] },
      ]) +
      h.p(`For a home with no HOA at all, see ${h.a("/buyers/no-hoa-homes/", "where to find homes with no HOA near Myrtle Beach")}. For a gate at the entrance, see our guide to ${h.a("/buyers/gated-communities/", "gated communities near Myrtle Beach")}. If the price matters most, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy a home near Myrtle Beach")}.`) },

    { h2: "Where are the best neighborhoods in Myrtle Beach?", toc: "Map", html:
      h.p("The 15 neighborhoods on this page run along the coast from North Myrtle Beach to Murrells Inlet, and inland to Carolina Forest and Conway. Most people say Myrtle Beach for this whole stretch of coast, but the city of Myrtle Beach is only one part of it.") +
      MAP.html +
      h.p(`Carolina Forest is a large area of neighborhoods just inland from Myrtle Beach. To choose a town before a neighborhood, read ${h.a("/buyers/relocating/which-town/", "which town near Myrtle Beach fits you")}.`) },

    { h2: "What are the best neighborhoods in the city of Myrtle Beach?", toc: "Myrtle Beach", id: "myrtle-beach", html:
      h.p("Pine Lakes, Grande Dunes and The Market Common are the neighborhoods on this page inside the city of Myrtle Beach. Each is about 5 to 10 minutes by car from a public beach access.") +
      table(["pine-lakes", "grande-dunes", "market-common"], "Three neighborhoods in the city of Myrtle Beach") +
      nh("pine-lakes") +
      h.p("The Pine Lakes Country Club golf course is part of Pine Lakes. The homes in the table are in The Preserve at Pine Lakes and Pine Lakes Estates. Grand Strand Medical Center is about 8 minutes away by car, and none of the homes is in a high-risk flood zone.") +
      PINE +
      h.p("The trade-off is the price. Only about 17 homes sold here in the last 12 months, so prices vary. The older streets near the club are a separate set of homes, and the homes for sale there show no HOA fee.") +
      nh("grande-dunes") +
      h.p(`Homes in Grande Dunes cost the most of any neighborhood on this page. Builders sold new homes in these sections for about $530,000 to $1.1 million, less than the resales. Only some of its sections ${h.a("/buyers/gated-communities/", "have a gate")}.`) +
      h.p("The prices in the table are for the sections the county names Grande Dunes: the Villages, Villa Venezia and Bal Harbor. The beach accesses closest to Grande Dunes have little or no parking.") +
      nh("market-common") +
      h.p("The Market Common is the closest of the three to the beach, about 5 minutes by car. A grocery store is about 4 minutes away. Most homes for sale here are townhomes, and their HOA fees are the higher ones in the table.") +
      h.p(`A few addresses in The Market Common are in a high-risk flood zone, so check the exact home on ${h.ext(FEMA, "FEMA's flood map")}. Our ${h.a("/submarkets/myrtle-beach/", "guide to Myrtle Beach")} covers the rest of the city.`) },

    { h2: "What are the best neighborhoods in Carolina Forest and near Conway?", toc: "Carolina Forest", id: "carolina-forest", html: (bg) =>
      h.p("Carolina Forest, Forestbrook and Wild Wing Plantation are inland, about 10 to 20 minutes from the beach by car. Almost none of their homes is in a high-risk flood zone.") +
      table(["the-farm", "berkshire-forest", "plantation-lakes", "waterbridge", "forestbrook-estates", "wild-wing"], "Six inland neighborhoods in Carolina Forest, Forestbrook and near Conway") +
      nh("the-farm") +
      h.p(`The Farm has ${h.ext(FARM_HOA, "two pools")}, a clubhouse with a fitness room, an activity center, a basketball court and a playground. Every home in The Farm is outside the high-risk flood zones.`) +
      h.p(`Townhomes in The Orchards and condos in Planters Point usually sell for about $230,000 to $240,000. They pay a second association fee on top of The Farm's. Our ${h.a(FARM, "guide to The Farm at Carolina Forest")} covers the homes, the HOA and the rules.`) +
      nh("berkshire-forest") +
      h.p("Berkshire Forest is about 15 minutes from the beach by car, with a Publix about 7 minutes away. None of its homes is in a high-risk flood zone. The trade-off is the drive to the beach, which is longer in summer traffic.") +
      nh("plantation-lakes") +
      h.p("Plantation Lakes costs the most of the Carolina Forest neighborhoods on this page, with most homes selling for about $640,000 to $910,000. None of its homes is in a high-risk flood zone. The trade-off is the beach: the nearest access has no parking.") +
      nh("waterbridge") +
      h.p("Builders sold new homes in Waterbridge in the last 12 months, for about $555,000. That is less than the resales in the table.") +
      h.p("The trade-off is the beach, 15 to 20 minutes away. The nearest access has no parking, and one with a small lot is about the same drive. A few homes in Waterbridge are in a high-risk flood zone.") +
      nh("forestbrook-estates") +
      h.p("Forestbrook Estates has one of the lowest HOA fees on this page, under $90 a month for a house. A Food Lion is about 6 minutes away by car. The beach is about 15 minutes away.") +
      nh("wild-wing") +
      h.p("Conway Medical Center is about 8 minutes from Wild Wing Plantation, and an ALDI is about 6 minutes away. Builders sold new homes here for about $430,000, less than the resales in the table.") +
      h.p(`The trade-off is the beach. At about 20 minutes by car, Wild Wing Plantation is the farthest from the beach of the neighborhoods on this page. Our guides to ${h.a("/submarkets/carolina-forest/", "Carolina Forest")} and ${h.a("/submarkets/conway/", "Conway")} cover the wider areas.`) +
      h.cta("Not sure which of these fits you? We will send three neighborhoods.",
        "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.",
        "Get three neighborhoods", OFFER, bg) },

    { h2: "What are the best neighborhoods in North Myrtle Beach?", toc: "North Myrtle Beach", id: "north-myrtle-beach", html:
      h.p("Cherry Grove, Tidewater Plantation and Barefoot Resort are the North Myrtle Beach neighborhoods on this page. Cherry Grove is a short walk from the beach, and the other two have golf.") +
      table(["cherry-grove", "tidewater", "barefoot-resort"], "Three neighborhoods in North Myrtle Beach") +
      nh("cherry-grove") +
      h.p(`Cherry Grove is the closest to the beach of any neighborhood on this page. From the middle of Cherry Grove, a ${h.ext(BEACH, "public beach access")} is about 0.1 mile away. That access has no parking, and the closest one with paid street parking is 0.3 mile away.`) +
      h.p("More than half of the homes for sale in North Myrtle Beach show no HOA fee. Almost all of them are in four parts of town, and Cherry Grove is one of them.") +
      h.p("The trade-off is flood risk. Almost every home in Cherry Grove is in a high-risk flood zone, so your lender will require flood insurance. Get a flood insurance quote before you make an offer.") +
      nh("tidewater") +
      h.p("Tidewater Plantation has a guard house at its entrance and a golf course, Tidewater Golf Club. McLeod Health Seacoast hospital is about 10 minutes away by car.") +
      h.p("The trade-off is the HOA fee, one of the higher ones on this page for a house. A few homes in Tidewater Plantation are in a high-risk flood zone.") +
      nh("barefoot-resort") +
      h.p("Barefoot Resort has four golf courses, and it is about 6 minutes from the beach by car. The Barefoot Resort homes in the table are mostly condos. Its houses are in other sections, each with its own name.") +
      h.p(`The trade-off is the HOA fee on a condo, several times the fee on most houses on this page. Eight neighborhoods inside Barefoot Resort have a gate. Our ${h.a("/submarkets/north-myrtle-beach/", "guide to North Myrtle Beach")} shows what each part of town is like.`) },

    { h2: "What are the best neighborhoods in Surfside Beach and Murrells Inlet?", toc: "Surfside Beach and Murrells Inlet", id: "surfside-beach-murrells-inlet", html:
      h.p("In Surfside Beach, the streets on the ocean side of town are a short walk from the beach. The Deerfield Plantation area and Prince Creek cost less and are a short drive away.") +
      table(["surfside-beach", "deerfield", "prince-creek"], "Three neighborhoods in Surfside Beach and Murrells Inlet") +
      nh("surfside-beach") +
      h.p("The ocean side of Surfside Beach is the part of town between US 17 Business and the beach. From the middle of it, a public beach access with a pay lot is about 0.4 mile away. A Piggly Wiggly is about 3 minutes away by car.") +
      SURFSIDE +
      h.p("The trade-off is flood risk near the water. About 1 in 4 homes here is in a high-risk flood zone, so check the exact home before you make an offer.") +
      nh("deerfield") +
      h.p("The Deerfield Plantation area, near Surfside Beach, has the lowest prices on this page for a home under 10 minutes from the beach. Its HOA fees are low too, and none of its homes is in a high-risk flood zone.") +
      h.p("The closest beach access has parking for golf carts only. The next one, with a pay lot, is about 8 minutes away by car.") +
      nh("prince-creek") +
      h.p("Prince Creek, in Murrells Inlet, is about 6 minutes by car from Tidelands Waccamaw Community Hospital and 2 minutes from a Publix. A free beach parking lot is about 10 minutes away. Builders sold new townhomes here for $300,000 to $356,000.") +
      h.p(`The trade-off is the small number of resales, 10 in the sections in the table, so prices range widely. Seasons at Prince Creek West, a 55+ community, is listed below. Our guides to ${h.a("/submarkets/surfside-beach/", "Surfside Beach")} and ${h.a("/submarkets/murrells-inlet/", "Murrells Inlet")} cover both towns.`) },

    { h2: "Which 55+ communities near Myrtle Beach should you look at?", toc: "55+ communities", id: "55-plus", html:
      h.p(`Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Seasons at Prince Creek West and Myrtle Trace are the four 55+ communities we cover. Each has a pool and a clubhouse.`) +
      compareCards(D.fifty_five_plus.rows.map((r) => ({ name: r.name, href: r.href, cells: r.cells })), COLS,
        { caption: "Four 55+ communities near Myrtle Beach", nameLabel: "Community", css: false }) +
      h.p(`Our ${h.a(P55, "guide to 55+ communities near Myrtle Beach")} compares the four side by side, with the age rule and what the HOA fee includes.`) },

    { h2: "What should you check before you choose a neighborhood?", toc: "Before you choose", html: (bg) =>
      h.p("Check the flood zone, the HOA fee, the rules and the trip to the beach for the exact home you like. Two homes in one neighborhood can differ on each.") +
      atAGlance([
        { icon: "flood", label: "The flood zone", text: "In a high-risk flood zone, your lender will require flood insurance. Cherry Grove and parts of Surfside Beach are in one." },
        { icon: "dollar", label: "The HOA fee", text: "A condo or townhome often has a higher fee than a house in the same neighborhood. Ask what the fee includes." },
        { icon: "key", label: "The rules", text: "Read the HOA rules on boats, golf carts, renting and pools before you buy." },
        { icon: "beach", label: "Beach parking", text: "Some of the closest beach accesses have no parking. Drive from the home to the beach before you buy." },
        { icon: "town", label: "Two blocks around", text: "Different kinds of homes are often built within a few blocks of each other here. Walk two blocks around the home." },
      ], { bg, min: "15rem" }) +
      h.p(`Public schools are assigned by address. Check the exact address with the ${h.ext(SCHOOLS, "Horry County Schools zone lookup")}, and see our page on ${h.a("/buyers/relocating/schools/", "schools near Myrtle Beach")}.`) +
      story([
        "<strong>Example:</strong> Lisa is moving from New York, and she wants to walk to the beach every morning. She likes a house in Cherry Grove, a short walk from a beach access.",
        "Her Chapter3 agent checks the flood map before she makes an offer. The house is in a high-risk flood zone, so her lender will require flood insurance.",
        "The agent gets her an insurance quote that week. Lisa knows the full cost of the house before she makes her offer.",
      ], "", bg) +
      h.cta("Tell us what you want nearby. We will send three neighborhoods.",
        "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.",
        "Get three neighborhoods", OFFER, bg) },
  ],
  faqTitle: "Best neighborhoods in Myrtle Beach: FAQ",
  faq: [
    { q: "What are the best neighborhoods in Myrtle Beach?", a: "The best neighborhood in Myrtle Beach depends on what you want nearby. Cherry Grove and the ocean side of Surfside Beach are a short walk from the beach. The Farm and the Deerfield Plantation area cost less and are about 10 minutes from the beach by car. Pine Lakes, Tidewater Plantation and Barefoot Resort have golf." },
    { q: "What are the best areas to live in near Myrtle Beach?", a: "North Myrtle Beach, the city of Myrtle Beach, Surfside Beach and Murrells Inlet are along the coast, closest to the beach. Carolina Forest and Conway are inland. The inland neighborhoods on this page are 10 to 20 minutes from the beach by car. Almost none of their homes is in a high-risk flood zone." },
    { q: "What are the best neighborhoods in North Myrtle Beach?", a: "Cherry Grove is the closest to the beach, a short walk from a public beach access. Almost every home there is in a high-risk flood zone. Tidewater Plantation has a guard house at its entrance and a golf course. Barefoot Resort has four golf courses." },
    { q: "What are the best neighborhoods in Surfside Beach?", a: "The streets on the ocean side of Surfside Beach are a short walk from the beach, and houses there usually sell for about $705,000. The Deerfield Plantation area, near the town, costs less. Its homes usually sell for about $355,000, and the beach is about 8 minutes away by car." },
    { q: "Is Carolina Forest or Myrtle Beach better to live in?", a: "Neither is better for every buyer. The Carolina Forest neighborhoods on this page are about 10 to 20 minutes from the beach by car, and the city neighborhoods about 5 to 10. Almost none of the Carolina Forest homes is in a high-risk flood zone." },
    { q: "Which neighborhoods near Myrtle Beach have no HOA?", a: "Homes for sale on the older streets near Pine Lakes Country Club show no HOA fee. In North Myrtle Beach, more than half of the homes for sale show no HOA fee. Almost all of them are in four parts of town, including Cherry Grove." },
    { q: "Which neighborhoods near Myrtle Beach are closest to a hospital?", a: "Prince Creek in Murrells Inlet is about 6 minutes by car from Tidelands Waccamaw Community Hospital. Pine Lakes is about 8 minutes from Grand Strand Medical Center, and Wild Wing Plantation is about 8 minutes from Conway Medical Center." },
    { q: "Where can I buy a new home near Myrtle Beach?", a: "Builders sold new homes in Waterbridge and Wild Wing Plantation in the last 12 months, and new townhomes in Prince Creek. New homes sold for about $555,000 in Waterbridge and about $430,000 in Wild Wing Plantation." },
  ],
  sources: [
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood maps", href: FEMA },
    { name: "S.C. beach access list", href: BEACH },
    { name: "Horry County Schools zone lookup", href: SCHOOLS },
    { name: "The Farm HOA", href: FARM_HOA },
  ],
  sourcesNote: "Prices are the middle resale over the last 12 months, or the range where few homes sold. HOA fees come from recent home listings, except The Farm's, from its HOA budget. Drive times are estimates with no traffic, from the middle of each neighborhood.",
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Tell us what you want nearby. We will send three neighborhoods.", p: "Tell us your price range and what you want close to home. One of our agents will send you three neighborhoods that fit, and the homes for sale in each.", label: "Get three neighborhoods", href: OFFER },
  keywords: "best neighborhoods in Myrtle Beach, best places to live in Myrtle Beach, best areas to live in Myrtle Beach, best communities in Myrtle Beach, best neighborhoods in North Myrtle Beach, best neighborhoods in Surfside Beach, Myrtle Beach neighborhoods map, Carolina Forest vs Myrtle Beach",
  about: "Residential neighborhoods in and around Myrtle Beach, South Carolina, from North Myrtle Beach to Murrells Inlet and inland to Carolina Forest and Conway",
};
