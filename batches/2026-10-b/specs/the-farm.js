/* /submarkets/carolina-forest/the-farm/ - what it is like to live in The Farm at Carolina Forest,
 * a built-out neighborhood of about 1,600 homes in Carolina Forest, Myrtle Beach.
 *
 * Batch 2026-10-b, page 4. Version 1, 2026-10-13.
 * Version 2, 2026-10-13 (round 2, BUYER-READ-the-farm.md and ROUND-2.md): the yearly cost of a typical
 *   house in one line (pending rows 85 and 86); the price in the short answer; HOA spelled out once; the
 *   large pool's settling and the special assessment in the pools section; the Corps' status explained
 *   from DoD's definition of response complete (rows 87, 89; row 88 is wrong as applied, not used); townhome and condo explained (pending
 *   row 90); plain words for county value, zoned for, stormwater, county roads and the lot survey; the
 *   rent-out tax, the acreage, the food drive and history dates cut; a brighter, closer pool aerial.
 * Version 3, 2026-10-13 (round 3, OWNER-EYE-the-farm.md and ROUND-3.md): a new example (Rachel and Luis, the
 *   sunken pool and the chance of a one-time charge; the agent reads the HOA documents and minutes, stories.json
 *   "hoa-rental-bans-filtered"); the bombing range in plain words with the Corps' status in the sources line and
 *   the Defense Department's 3Rs advice (pending row 91); "Get the list" in all three places; dots under The
 *   Orchards and Planters Point on the overview; the Google Maps link; the hospital off the region map and into
 *   a short table; the events from rows 68 and 69; tax in one line; stormwater outside the $2,600 sum; three
 *   FAQ entries and the shopping cards cut for length.
 *
 * Reader: a buyer, often from out of state, who has seen a listing in The Farm or heard the name and
 * wants to picture living there and decide whether to look. They do not know Carolina Forest, the
 * roads or the HOA words. What they ask (PLAN.md page 4, search suggestions): the HOA fee and what it
 * buys, the pools, homes for sale and prices, the map, the rules (renting, fences, sheds, parking),
 * the schools the homes are zoned for, then flood, tax and the honest drawbacks.
 *
 * Shape: a community guide (reports/Page shapes, section 1), on the approved 55+ page model (short
 * answer and icon row, pictures of the place, things to do, costs, pros and cons, story near the end,
 * FAQ), ordered for this reader: the homes first (the overview aerial and a street of houses), then
 * the pools (a close aerial of the large pool and the activity center), where it is (our region and
 * close maps, a table of places), the zoned schools (names only, the district's lookup, no ratings),
 * the costs with the homes-for-sale offer, the pros and cons, the HOA rules with the example story,
 * and the old bombing range as the last short section before the FAQ (WRITER-BRIEF decision).
 *
 * Facts: batches/2026-10-b/facts/the-farm-facts.md, verified rows only, in the verifier's wording
 * limits, said in the page's own voice. Wrong rows 10, 21, 22, 24, 46, 79, 82 are used only in the
 * verifier's safe wording (10: the budget order; 24: not gated, county roads, no speed-bump clause;
 * 79: the preserve "will be" open; 82: the minutes only, no description). Not used: 21, 22, 46 (dated list), 64's fee amounts,
 * 67 (alligator notice), 70 (golf carts), 31 (new hospital: a date in the copy), 66's fishing.
 *   Homes:    rows 1 to 3 (about 1,600 homes, every lot has a home), 40 to 45 (listings: sizes, years,
 *             bedrooms; levels said only as "both one-story and two-story"), 43 (a typical lot about a
 *             fifth of an acre), 19 (D.R. Horton, 2004 to 2017, FAQ), 25 (outside the city).
 *   Pools:    rows 60 to 63 (amenities, season and hours, no lifeguard, fitness room hours, six pool
 *             guests), 64 (reserve the activity center, for a fee, no amount), 65 (large pool
 *             undecided), 66 (ponds: no swimming or boating, FAQ), 68 and 69 (events, food drive).
 *   Where:    rows 27 to 30, 32 to 35, 80 to 82 (drive times from the Farmers Rest Drive entrance, which
 *             the page calls the entrance next to the large pool; "nearest" dropped), traffic from
 *             stories.json "traffic-timing" (labelled as our experience), 79 (the preserve land).
 *   Schools:  rows 36 to 39 (zoned schools, minutes, the schools just outside the north-east side).
 *   Costs:    rows 47 to 49 (houses about $350,000; townhomes and condos about $230,000 to $240,000),
 *             5 to 9 ($107 for every home; second HOA in The Orchards and Planters Point with listing
 *             totals), 10 safe wording and 12 (what the fee pays for; cable from Spectrum, about $42 of
 *             it), 11 note (no internet), 13 and 14 (FAQ: increase cap, special assessment), 15 ($250
 *             at closing), 75 to 78 (tax per $100,000 of the county's value, stormwater fee, no city
 *             tax), 71 to 74 (flood: outside the high-risk zone; about $600 for a house policy).
 *   Rules:    rows 50 to 57 and 17 (renting, fences and other structures, private pools, parking and
 *             boats, pets, home business, fines), 59 (the board can change them; the offer to read the
 *             current ones).
 *   Range:    WRITER-BRIEF "The Farm, the old bombing range (coordinator decision, 2026-10-13)" and the
 *             ledger summary (FUDS data): no safety conclusion either way. The 2007 covenant parcel
 *             (row 23) is left out: the decision lists the facts to state, and that sentence would
 *             raise a question the page cannot answer.
 * Pictures: our region and close maps (tools/page-kit.js maps; outline tools/geo area "the-farm"); a
 *   labelled overview from USDA NAIP 2023 (full coverage) and two close aerials from NOAA's 2026
 *   tiles (south part only), each under its sentence (batches/2026-10-b/data/photos.json; labels from
 *   county footprints, address points and parcel groups; scratchpad farmw/scripts/build-photos.js).
 * Story:  an Example (Jen and Marcus): they want a pool in the back yard; no house in The Farm can
 *   have its own; their agent reads the rules with them before the offer and shows them a hot tub is
 *   allowed with approval (row 54; stories.json "ny-buyer-rules-fit" and "hoa-rental-bans-filtered":
 *   the agents read the HOA rules, pools named). Retell: Jen and Marcus wanted a pool in their yard,
 *   but no house in The Farm can have one, so the agent showed them a hot tub is allowed and they
 *   made their offer. Child sentence: You can't build your own pool in your yard here.
 */
const fs = require("fs"), path = require("path");
const { h } = require("../tools/mkpage.js");

/* Blog-Brain tools: the upload package's copy in tools/blog-brain-2026-10-b/, then $BLOG_BRAIN, then the repo. */
const BB = [path.join(__dirname, "..", "tools", "blog-brain-2026-10-b"), process.env.BLOG_BRAIN,
  path.join(__dirname, "..", "..", ".."), "/home/user/Blog-Brain"].filter(Boolean)
  .find((d) => fs.existsSync(path.join(d, "tools", "page-kit.js")));
if (!BB) throw new Error("Blog-Brain tools not found (tools/page-kit.js)");
const PK = require(path.join(BB, "tools", "page-kit.js"));

/* This batch's files: the website's data/2026-10-b/ (where the upload package puts them), else the
   batch folder in Blog-Brain. Photo records: batch 2026-10-a's (the website's data/photos.json), then this batch's. */
const DATA = [path.join(__dirname, "..", "data", "2026-10-b"), path.join(BB, "batches", "2026-10-b", "data"),
  "/home/user/Blog-Brain/batches/2026-10-b/data"].find((d) => fs.existsSync(path.join(d, "photos.json")));
if (!DATA) throw new Error("batch 2026-10-b photos.json not found");
const PHOTO_FILES = [path.join(__dirname, "..", "data", "photos.json"), path.join(DATA, "photos.json")].filter((f) => fs.existsSync(f));

/* The map points for maps(): the Farmers Rest Drive entrance (ledger row 27; data/the-farm.json
   reference_point) and the places the page names, each with its verified drive (rows 28 to 33). */
const PLACES = {
  communities: [{ slug: "the-farm", name: "The Farm at Carolina Forest", lat: 33.754869, lon: -78.875215, town: "Carolina Forest",
    drives: [
      { to_id: "beach_mb101", minutes: 10 },   // row 28: 10.1 min to Myrtle Beach access 101
      { to_id: "groc_publix", minutes: 2 },    // row 29: 1.5 min
      { to_id: "er_mcleod", minutes: 5 },      // row 30: 5.2 min
      { to_id: "hosp_gsmc", minutes: 12 },     // row 32: 11.5 min
      { to_id: "airport", minutes: 20 },       // row 33: 20.2 min
    ] }],
  landmarks: [
    { id: "beach_mb101", lat: 33.719685, lon: -78.846516 },
    { id: "groc_publix", lat: 33.751759, lon: -78.870501 },
    { id: "er_mcleod", lat: 33.757293, lon: -78.852256 },
    { id: "hosp_gsmc", lat: 33.758542, lon: -78.820016 },
    { id: "airport", lat: 33.6825, lon: -78.924023 },
  ],
};
const kit = PK.create({ h, places: PLACES, photos: PHOTO_FILES.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")).photos),
  mapDir: path.join(__dirname, "..", "chapter3realty", "images", "maps"), mapSrc: "/images/maps" });
const { maps, glance, prosCons, atAGlance, story, photoSet } = kit;

const HUB = "/submarkets/carolina-forest/";
const SELF = "/submarkets/carolina-forest/the-farm/";

/* Primary sources, each opened by the researcher and again by the verifier. */
const HOA_DOCS = "https://www.farmatcarolinaforest.com/documents.html";
const BUDGET = "https://www.farmatcarolinaforest.com/uploads/documents_page/The%20Farm%20@%20Carolina%20Forest%20HOA%20-%20%20Approved%20Budget%20Summary%20Report.pdf";
const RULES = "https://www.farmatcarolinaforest.com/uploads/documents_page/NEW%20Rules%20%26%20Regulations.pdf";
const ZONES = "https://hcsd1.maps.arcgis.com/apps/instant/lookup/index.html?appid=72f93a5329c54f54840673fe6430ab43";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=201%20Carolina%20Farms%20Blvd%2C%20Myrtle%20Beach%2C%20SC%2029579";
const LEVY = "https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";
const FUDS = "https://geospatial.sec.usace.army.mil/server/rest/services/Military/FUDS_Data/MapServer";
const DEP = "https://www.denix.osd.mil/arc/dep-arc-fy-2024/";
const SPECIAL = "/hoa/special-assessments/";
const UXO = "https://www.denix.osd.mil/uxo/";

const ph = photoSet({ aerialWidth: "720px" });
const OVER = ph.aerial("the-farm-from-above", "The Farm at Carolina Forest from above. The orange line is the edge of the neighborhood.");
const STREET = ph.aerial("the-farm-homes-from-above-2026", "Houses on one street in The Farm, close together, many with fenced back yards.", { closeUp: true });
const POOL = ph.aerial("the-farm-pool-from-above-2026", "The large pool and the activity center, from above.", { closeUp: true });
const M = maps("the-farm", [
  { id: "beach_mb101", name: "the beach in Myrtle Beach", short: "Beach", kind: "beach" },
  { id: "er_mcleod", name: "McLeod Health's emergency room", short: "Emergency room", kind: "hospital" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Airport", kind: "airport" },
  { id: "groc_publix", name: "Publix", short: "Publix", kind: "grocery" },
], {
  label: "The Farm",
  amenity: "Pool and activity center",
  regionCaption: "Map of where The Farm at Carolina Forest is, with drive times by car from its entrance near the large pool.",
  closeCaption: "Map of the streets, ponds, pool and activity center inside The Farm, with the Publix just outside it.",
});

module.exports = {
  url: SELF,
  hub: { name: "Carolina Forest", url: HUB },
  /* No datePublished: mkpage gives a new page the day it is first built for the live site, and keeps it. */
  /* The overview aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "The Farm at Carolina Forest: HOA Fee, Pools, Rules | Chapter3",
  description: "The Farm at Carolina Forest in Myrtle Beach: the $107 HOA fee and what it includes, two pools, home prices, zoned schools, the HOA rules, and pros and cons.",
  ogTitle: "Living in The Farm at Carolina Forest: two pools, about 1,600 homes and the beach 10 minutes away",
  crumb: "The Farm",
  eyebrow: "Carolina Forest, Myrtle Beach",
  h1: "What is it like to live in The Farm at Carolina Forest?",
  h1em: "About 1,600 homes and two pools, near the beach.",
  sub: "The Farm is a neighborhood of houses, townhomes and condos in Carolina Forest, with two pools, an activity center and a playground.",
  heroMedia: glance([
    { icon: "beach", label: "Beach", text: "About 10 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 2 minutes" },
    { icon: "hospital", label: "Emergency room", text: "About 5 minutes" },
    { icon: "dollar", label: "HOA fee", text: "$107 a month" },
  ]),
  heroCta: { label: "Get the list", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "The Farm at Carolina Forest has about 1,600 homes, and every lot has a home on it. Most are houses with three or four bedrooms.",
    "Owners share two pools, an activity center, a clubhouse with a fitness room, a basketball court and a playground. The homeowners association (HOA) is the group that runs the neighborhood and collects the monthly fee. Its fee is $107 a month, with cable TV and trash pickup included.",
    "Houses that sold here in the last year usually went for about $350,000. Every home is assigned to Ocean Bay Elementary, Ocean Bay Middle and Carolina Forest High.",
  ],
  sections: [
    { h2: "What are the homes like in The Farm at Carolina Forest?", toc: "The homes", html:
      ph.css() +
      h.p("Most homes in The Farm at Carolina Forest are houses with their own yards. Most of the houses have about 1,450 to 3,200 square feet.") +
      h.p("The houses are on curving streets around ponds and shared open space. The townhomes are in a section called The Orchards, and the condos are in a section called Planters Point.") +
      OVER +
      h.p("D.R. Horton developed The Farm in sections. Both one-story and two-story houses are for sale here, and a typical house lot is about a fifth of an acre.") +
      STREET +
      h.p("Most houses here are about 20 years old. Before you make an offer, ask how old the roof and the air conditioner are.") +
      h.p("In The Orchards, each townhome comes with its own small lot. In Planters Point, each owner owns a condo unit and shares the buildings and land with the other owners.") +
      h.p("The Orchards has about 200 townhomes, and Planters Point has about 70 condos. Most of them have two or three bedrooms.") +
      h.p(`The Farm has no gate. Its streets are public roads owned by Horry County, not by the HOA. If you want a gate, see ${h.a("/buyers/gated-communities/", "which neighborhoods near Myrtle Beach are gated")}.`) },

    { h2: "What is there to do in The Farm at Carolina Forest?", toc: "Pools and things to do", html: (bg) =>
      h.p("In The Farm at Carolina Forest, the large pool and the activity center are a short walk apart. The large pool has a wide deck beside a pond.") +
      POOL +
      atAGlance([
        { icon: "pool", label: "Two pools", text: "Open April 15 to October 15, from 9 a.m. to 9 p.m. There is no lifeguard." },
        { icon: "family", label: "Pool guests", text: "Each home can bring up to six guests, with the owner there." },
        { icon: "fitness", label: "Fitness room", text: "In the clubhouse, open from 5:30 a.m. to 9 p.m." },
        { icon: "clubhouse", label: "Activity center", text: "Owners can reserve it for a private party of up to four hours, for a fee." },
      ], { bg, min: "18rem" }) +
      h.p("The large pool has sunk into the ground more than it should, which engineers call settling. The HOA board has not decided whether to repair it or replace it. The board plans more tests of the ground under the pool after it closes for the season.") +
      h.p(`The board has not said what the work will cost. By a majority vote, it can add a one-time charge to owners, called a ${h.a(SPECIAL, "special assessment")}.`) +
      h.p("The HOA budgets about $6,500 a year for social events. In the fall, its calendar lists a yard sale and a Community Appreciation Day. Every year, The Farm also joins other Carolina Forest neighborhoods in a food drive.") +
      h.p("The state owns the land along The Farm's north side. It plans to open that land for outdoor recreation as part of the Lewis Ocean Bay Heritage Preserve.") },

    { h2: "Where is The Farm at Carolina Forest?", toc: "Where it is", html: (bg) =>
      h.p(`The Farm is in ${h.a(HUB, "Carolina Forest")}, about 10 minutes from the beach by car. It has a Myrtle Beach mailing address but is outside the city limits.`) +
      h.p("In our experience, rush hour adds 5 to 10 minutes to these drive times.") +
      M.where +
      h.p("A Publix grocery store is just outside The Farm, about 2 minutes from the entrance by the large pool.") +
      M.close +
      h.table(["Also close by", "Drive"], [
        ["Carolina Forest Recreation Center, a county gym with a fitness room and a climbing wall", "About 3 minutes"],
        ["Bike and Run Park, a county park with 7 miles of trails", "About 4 minutes"],
        ["Grand Strand Medical Center, a large hospital", "About 12 minutes"],
        ["Myrtle Beach Boardwalk, along the ocean", "About 15 minutes"],
      ]) },

    { h2: "Which schools is The Farm at Carolina Forest zoned for?", toc: "Schools", html:
      h.p("Every home in The Farm at Carolina Forest is zoned for, or assigned to, these three public schools in Horry County Schools. The two Ocean Bay schools are just outside The Farm's north-east side.") +
      h.table(["School", "Grades", "Drive from the entrance"], [
        ["Ocean Bay Elementary", "K to 5", "About 6 minutes"],
        ["Ocean Bay Middle", "6 to 8", "About 4 minutes"],
        ["Carolina Forest High", "9 to 12", "About 15 minutes"],
      ]) +
      h.p(`The district can change its zones. To check the schools for one address, type it into the ${h.ext(ZONES, "Horry County Schools zone lookup")}. See ${h.a("/buyers/relocating/schools/", "how school zones work in Horry County")}.`) },

    { h2: "What does it cost to live in The Farm at Carolina Forest?", toc: "Costs", html: (bg) =>
      h.p("Houses in The Farm at Carolina Forest that sold in the last year usually went for about $350,000. Townhomes and condos usually went for about $230,000 to $240,000.") +
      h.p("For a house of about $350,000 that you live in, plan on about $2,600 a year besides the mortgage and home insurance. That covers the HOA fee and the county property tax.") +
      atAGlance([
        { icon: "dollar", label: "HOA fee", text: "$107 a month, about $1,300 a year" },
        { icon: "tax", label: "Property tax", text: "About $1,300 a year on a $350,000 house you live in" },
      ], { bg, min: "18rem" }) +
      h.p("The tax is based on about what you pay for the house, and the new amount starts the year after you buy. The county also adds a stormwater fee of about $90 a year to the tax bill, for draining rain water.") +
      h.p("The Farm is outside the city limits, so there is no city tax. When you buy, you also pay the HOA a one-time fee of $250 at closing.") +
      h.p(`The HOA spends the largest share of the ${h.ext(BUDGET, "fee")} on cable TV from Spectrum. The HOA spends the rest on landscaping and the ponds, trash pickup, the management company, electricity, savings for repairs, the pools and insurance. The fee does not include internet.`) +
      h.p("Townhomes in The Orchards and condos in Planters Point also have their own HOA. In all, owners in The Orchards pay about $225 to $255 a month. Owners in Planters Point pay about $450 to $500 a month.") +
      h.p(`Every home in The Farm is outside the high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. That means federal law does not make your lender require flood insurance. If you want a policy for a house anyway, one in this ZIP code usually costs about $600 a year.`) +
      h.cta("Get the list of homes for sale in The Farm.", "Tell us your price range, and one of our agents will send you the homes for sale in The Farm now.", "Get the list", "/contact/", bg) +
      h.p(`If you would rather not pay an HOA fee, see ${h.a("/buyers/no-hoa-homes/", "where to find homes with no HOA near Myrtle Beach")}. For lower prices, see ${h.a("/buyers/affordable-places-to-live/", "the most affordable places to buy near Myrtle Beach")}.`) },

    { h2: "What are the pros and cons of living in The Farm at Carolina Forest?", toc: "Pros and cons", html: (bg) =>
      h.p("The Farm at Carolina Forest has groceries, schools and the beach close by. Its cons are costs and HOA rules to plan for.") +
      prosCons([
        "A Publix is about 2 minutes away by car, and the beach about 10.",
        "The $107 HOA fee includes cable TV, trash pickup and two pools.",
        "Every home is outside the high-risk flood zone.",
        "There is no city tax, because The Farm is outside the city limits.",
      ], [
        { text: "The large pool has sunk, and the HOA board has not decided whether to repair or replace it.", act: "Plan for the chance of a one-time charge to owners, called a special assessment." },
        { text: "Cars may not be parked on the street or the lawn.", act: "Make sure the garage and driveway fit all your cars." },
        { text: "The HOA fee includes cable TV but not internet.", act: "Plan for an internet bill on top of the fee." },
        { text: "Townhomes and condos pay a second HOA fee.", act: "In The Orchards, plan on about $225 to $255 a month in all. In Planters Point, plan on about $450 to $500." },
      ], { bg }) +
      h.p(`To compare The Farm with other places, see ${h.a("/buyers/best-neighborhoods/", "the best neighborhoods near Myrtle Beach for what you want nearby")}. For neighborhoods built for buyers 55 and older, see ${h.a("/buyers/55-plus-communities/", "our guides to 55+ communities")}.`) },

    { h2: "What are the HOA rules in The Farm at Carolina Forest?", toc: "HOA rules", html: (bg) =>
      h.p(`In The Farm at Carolina Forest, you can rent out your home and keep up to three dogs and cats. A fence needs the HOA's approval first, and no home can have its own swimming pool. These are the main points of the ${h.ext(RULES, "HOA rules")}, which the HOA board can change.`) +
      atAGlance([
        { icon: "key", label: "Renting", text: "Allowed, with no limit on how many homes are rented. The lease must be in writing, and the manager gets a copy within 10 days." },
        { icon: "gate", label: "Fences and sheds", text: "A fence, shed or other outdoor structure needs the HOA's approval first. Send a land surveyor's drawing of your lot with the request." },
        { icon: "pool", label: "Pools", text: "No private pool on a lot. A hot tub is allowed once the HOA approves it." },
        { icon: "dock", label: "Parking and boats", text: "Cars go in the garage or driveway. Boats, trailers and campers need the HOA's written OK to stay outside." },
        { icon: "pets", label: "Pets", text: "Up to three dogs and cats in all. Dogs stay on a leash outside." },
        { icon: "home", label: "Home business", text: "Allowed if nothing shows from outside, it brings no extra traffic and county rules allow that business at a home." },
      ], { bg, min: "13rem" }) +
      story([
        "<strong>Example:</strong> Rachel and Luis want to spend their summer afternoons at a big pool, and they love the large pool in The Farm. They find a house a short walk from it.",
        "Their Chapter3 agent reads the HOA's documents with them, including the latest board minutes, before they make an offer. The minutes show the large pool has sunk, and the board has not decided how to fix it.",
        "Owners may have to pay a one-time charge for the work. Rachel and Luis put money aside for that charge before they move in.",
      ], "", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "read the HOA's documents and latest minutes with you")} before you make an offer.`) },

    { h2: "Was The Farm at Carolina Forest part of an old bombing range?", toc: "Old bombing range", html:
      h.p("Yes. The Farm is on land the Army Air Force used as a bombing and gunnery range from 1942 to 1948. Other parts of Carolina Forest are on that land too.") +
      h.p("On the Army Corps of Engineers' latest map, the cleanup work on the land under every home in The Farm is finished. The Defense Department or a later owner may keep monitoring that land.") +
      h.p("On the same map, the Corps is still investigating another section next to The Farm, called Range III. On the Corps' map, Range III touches the edges of some of The Farm's open land, but not any home lot.") +
      h.p(`If you ever find something that looks like old ammunition, the ${h.ext(UXO, "Defense Department's advice")} is to leave it alone. Do not touch it, move away and call 911.`) +
      h.p(`An agent at Chapter3 can show you the ${h.ext(FUDS, "Corps' map")} for the lot you like.`) },
  ],
  faqTitle: "The Farm at Carolina Forest FAQ",
  faq: [
    { q: "How much is the HOA fee in The Farm at Carolina Forest?", a: "The HOA fee is $107 a month for every home, or about $1,300 a year. The HOA spends it on cable TV, trash pickup, landscaping, the ponds and the pools. Townhomes in The Orchards and condos in Planters Point pay a second HOA fee too." },
    { q: "Can the HOA fee in The Farm go up?", a: "Yes. The HOA can raise the fee by up to 20 percent a year. The board can also add a one-time charge, called a special assessment, by a majority vote." },
    { q: "Is The Farm at Carolina Forest a gated community?", a: "No. The streets in The Farm are public roads owned by Horry County. To add a gate, about three out of four owners would have to agree to ask a court first." },
    { q: "What happens if you break an HOA rule in The Farm?", a: "You get a courtesy notice first. The HOA then charges a $25 fine, then a $50 fine, and then $50 a week until the problem is fixed." },
  ],
  sources: [
    { name: "HOA documents", href: HOA_DOCS },
    { name: "HOA budget", href: BUDGET },
    { name: "County deed records", href: DEEDS },
    { name: "School zone lookup", href: ZONES },
    { name: "FEMA flood map", href: FEMA },
    { name: "County tax levies", href: LEVY },
    { name: "Corps map data", href: FUDS },
    { name: "DoD cleanup report", href: DEP },
    { name: "DoD safety advice", href: UXO },
  ],
  sourcesNote: "Not legal or tax advice. Home sizes, ages and the Orchards and Planters Point HOA totals are from recent listings. Drive times leave out traffic. The flood cost is FEMA's middle house policy price in ZIP code 29579. The Corps lists the land under the homes as Response Complete and Site Closeout (fiscal year 2024).",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Get the list of homes for sale in The Farm.", p: "Tell us your price range, and one of our agents will send you the homes for sale in The Farm now.", label: "Get the list", href: "/contact/" },
  keywords: "The Farm at Carolina Forest, The Farm Carolina Forest HOA, The Farm at Carolina Forest HOA fee, The Farm at Carolina Forest homes for sale, The Farm at Carolina Forest pool, The Farm at Carolina Forest rules",
  about: "The Farm at Carolina Forest, a neighborhood in unincorporated Horry County with a Myrtle Beach address, South Carolina",
};
