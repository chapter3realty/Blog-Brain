# Plan: /hoa/fees-by-neighborhood/

Kind of page: a data hub with a lookup (CRAFT 3: "Get their own number", then a short list of places). The table is the product. Model in the site: `/invest/condo-buildings/` (one row per building with its fee and a wow line, approved 2026-11-09) and the answer-first shape of `/sell/home-value/`. Spec skeleton: `specs/home-value.js` and `specs/garden-city.js`; data read from files, never typed. Facts: `facts.md` (rows 1 to 29 our counts, 30 on reused and read). Demand and siblings: `must-answer.md`. Data: website `data/2026-11-d/hoa-fees-by-neighborhood/` (`table.json`, `findings.json`; source pulls `hoa-by-neighborhood.json`, `hoa-includes.json`; scripts `pull_hoa_neighborhoods.py`, `pull_includes.py`, `analyze.py`).

## The reader and the decision

A buyer with one neighborhood or one home in mind, often from out of town, who typed "<neighborhood> HOA fees" or "HOA fees by neighborhood Myrtle Beach". They know the price. They do not know the monthly fee, what it pays for, or whether a second fee or a land lease hides behind it. Some are comparing two or three neighborhoods (Carolina Forest is the common case: many HOAs under one name).

Decision: **which neighborhoods fit my monthly budget, and what do I get for the fee?** Then: is this one home's fee the whole cost?

What they would pay to know: the real fee range on the homes for sale there now; what the listings say it pays for (lawn, internet, trash); the pool and clubhouse; a second fee or a lot rent; that we get the HOA's budget and rules before they offer.

## The answer in two sentences

"In the middle Grand Strand neighborhood of houses, the HOA fee is about $95 a month, and about 6 in 10 neighborhoods charge $100 or less. The fee rises with what it pays for: about $115 where there is a pool and a clubhouse, about $300 where it also covers the lawn, and about $250 for townhomes." (facts rows 2, 4, 5, 6, 8)

## Title, H1, hero

- **Title (59):** `HOA Fees by Neighborhood: 382 Myrtle Beach Area Communities` (the count comes from findings.json at build time; recount the characters if it changes). The searched words "HOA fees by neighborhood" first; "Myrtle Beach area" after, so the title does not lead with /hoa/'s head term "Myrtle Beach HOA fees".
- **H1:** "HOA fees in 382 Grand Strand neighborhoods, and what each one buys" (statement, not a question; the owner allows it).
- **Description (about 150):** "The monthly HOA fee in 382 neighborhoods from Little River to Pawleys Island, from the homes for sale there now: the range, what it includes, second fees."
- **Hero sub (the wow):** "In Waterbridge, $150 a month keeps up a pool complex, pocket parks and more than 80 acres of lakes and natural areas." (rows 11, 44; 26 houses for sale, the second-largest neighborhood in the table). True, sourced, and a reader can picture it. FIG check at build: "keeps up" is a person-free verb; if the reviewer objects, "pays for the upkeep of".
- The byline date is the count date ("measured from the homes for sale on the day in the byline"). Never type a date.

## Sections in order

The top on a phone: H1, byline, the two-sentence answer, a slim offer bar, then the search box of the table. The site's edge puts the live homes strip under the opening; keep it there and put the table right after it.

0. **Short answer** (two sentences above) + one line linking up: "What a typical fee is and what fees cover in general: our HOA fees guide (/hoa/)." Slim offer bar: **"Serious about one home? We get its HOA budget and rules before you offer."** (button to #lead-form).
   *Edge feed (the site's homes strip) sits here.*
1. **Find a neighborhood's HOA fee** (statement heading; the tool opens with its answer). The searchable table, one row per neighborhood, sorted by town then name:
   - search box ("Type a neighborhood"), town chips (Carolina Forest, Myrtle Beach, North Myrtle Beach, Little River, Longs, Conway, Socastee, Surfside Beach, Murrells Inlet, Garden City, Pawleys Island; 14 towns in table.json; show chips only for towns with 10 or more neighborhoods), and a sort by fee;
   - columns: **Neighborhood** (linked to its own page where one exists, from `sibling-pages.json`) | **Town** | **Homes for sale** | **Monthly fee** (the middle half as "$120 to $150", or "about $150" when they agree; "No fee listed"; "Leased land: no HOA fee") | **The fee includes** (lawn, internet, cable, trash, water, insurance, only when half or more of the listings with a fee say so) | **Has** (pool, clubhouse, tennis, the same rule);
   - on a phone each row is a card: name and town on the first line, the fee big, the includes as small icon chips with words;
   - under the table, one line: "Counted from the {homes} homes for sale in these neighborhoods on the day in the byline. A neighborhood needs 3 or more for sale to be listed. Not listed? We look it up." with a button.
   - Sub-neighborhoods of one master community keep their MLS names ("Grande Dunes - Islecrest", "Prince Creek - Longwood Bluffs"); the table groups them under the master name with a small heading, so the reader sees Grande Dunes, Prince Creek, Market Common and Carolina Forest as families.
   *Mid offer:* "Want this fee checked for one home? We get the budget, the rules and any second fee."
2. **What a fee buys at each level.** One glance chart, then three short examples. Chart (glass bars, one message): **"Neighborhoods of houses: the middle HOA fee"**, bars by band with the count of neighborhoods of houses in each: under $50: 37; $50 to $100: 125; $100 to $150: 56; $150 to $200: 24; $200 to $300: 19; over $300: 19 (findings `house_communities_by_middle_fee`, $300 to $500 and over $500 joined; row 3). Below it, one sentence on a pool and clubhouse (about $115 against about $68 with neither, row 6) and one on lawn care (about $300 where the fee covers it, row 5). Then three named examples, each two or three sentences in an agent's voice, each with its wow line from a source row:
   - **The most for a low fee:** The Farm at Carolina Forest, $107 on all 14 houses for sale, for two pools, a clubhouse with a fitness room, an activity center and a playground (rows 12, 38); Waterbridge, $150 for the pool complex and the lakes (rows 11, 44). The lowest pool-and-clubhouse fees (Southgate about $46, Arrowhead about $52; row 7) go in one sentence only after the verifier opens a card for each.
   - **Lawn, internet and a big clubhouse** (55+ communities: Seasons at Prince Creek West, row 35; Del Webb North Myrtle Beach, row 36). Each links its own page; no 55+ search claimed here.
   - **The top of the range:** Grande Dunes' neighborhoods, about $232 to $503 for houses, and North Beach Plantation's cottages at about $898, where the listings say the fee includes lawn care and internet (rows 17, 19). Del Webb at Grande Dunes adds the Beach Club fee on top (row 34).
   Homes strip here: **"Pool-and-clubhouse neighborhoods: homes for sale"** only if the lead can make a CRM place for it (BUILD.md); otherwise none.
3. **Carolina Forest is many HOAs, not one.** Answers "carolina forest hoa fees" (30 a month). Carolina Forest is 34 neighborhoods here; its 28 neighborhoods of houses run from $46 to $159 a month, and 27 of them show a community pool (row 10). Then a small sorted bar chart: the middle fee of each Carolina Forest neighborhood of houses (findings `carolina_forest`), with pool, clubhouse or tennis in words beside each bar. 28 bars is long on a phone: show the 12 with the most homes for sale, and point to the table for the rest. Link /submarkets/carolina-forest/ and The Farm. Homes strip: existing place `town-carolina-forest`, title **"Carolina Forest homes for sale, every HOA in one row"** (bold, true).
4. **Two fees, or no HOA fee at all.** Three short cases a buyer meets here, each from a verified row:
   - a neighborhood inside a bigger one: The Farm's Orchards and Planters Point (row 38); Del Webb at Grande Dunes and the Beach Club fee (row 34). Link /hoa/hoa-vs-poa/ for the explainer;
   - leased land: Ocean Lakes' 2,579 lease sites on a mile of oceanfront (row 43) and Lakeside Crossing (row 39): no HOA fee, a lease instead. Link /buyers/55-plus-communities/;
   - no fee: neighborhoods in the table where no listing gives a fee, such as Plantation Point (row 42). Link /buyers/no-hoa-homes/.
   *Mid offer:* "Name the home, and we find every fee it pays: the HOA, a master association, a club or a lease."
5. **Townhome fees pay for more.** One short paragraph: about $250 a month in the middle townhome neighborhood against about $95 for houses (row 8), and why: the listings say the fee includes the lawn, often the outside insurance and the water (row 32). Link /invest/condo-buildings/ in one line for condos ("this page lists neighborhoods of houses and townhomes").
6. **FAQ** (open text, one or two sentences each, no repeat of a section): Why does a listing's fee differ from the HOA's? (row 50.) How often is this table counted? (On the byline date; we recount.) Can the HOA raise the fee? (One line, link /hoa/dues-increases/.) Is the HOA fee part of the monthly cost? (Yes; link /buyers/cost-to-own/ for the yearly total. No payment, no rate.) What about condos? (Link /invest/condo-buildings/ and /hoa/.)
7. **End offer band:** "Get the budget and the rules before you offer." We read the HOA's budget, reserves and rules for any home you are serious about. Button to /contact/ (the site opens the short pop-up).

"On this page" list: yes, short labels: Find a fee; What a fee buys; Carolina Forest; Two fees or none; Townhomes; FAQ.

## Visuals (each readable at a glance)

1. **The searchable table** (section 1). The page's one tool. It opens showing every row; typing filters it. Plain column names. Cards on a phone. Built from `table.json` by the spec; a short inline script filters and sorts (as `specs/cost-to-own.js` carries its calculator script).
2. **Fee bands chart** (section 2): six glass bars, title states the point ("Most neighborhoods of houses charge $50 to $100 a month").
3. **Carolina Forest chart** (section 3): one bar per neighborhood, sorted, with its pool or clubhouse in words beside it.
No map: the table's town column and chips place each row, and a map of 300 dots would fight the table (CRAFT: one map or none). No photos: no image would show a fee.

## Homes strips

- **Edge feed** under the opening (the site does it). Title the lead sets: **"Homes for sale in neighborhoods with a pool and a clubhouse"** if the feed can filter `has=community_pool,clubhouse`; otherwise the default.
- **glass.js homes() in section 3:** existing place `town-carolina-forest`.
- **Optional in section 2:** existing places `waterbridge` and `the-farm` (both in `batches/2026-10-b/data/idx-places.json`) beside their examples: **"Waterbridge homes for sale: the pool complex and 80 acres of lakes"** and **"The Farm homes for sale: two pools, one fee"**. At most two strips in that section, so it stays calm.

## Offers

- Top slim bar, the mid offer after section 1, the mid offer in section 4, the end band. Four offers, four different wordings, all to /contact/ or #lead-form. The page's main offer: **we get the HOA's budget and rules for any home you are serious about.**
- Under the table: "Not listed? We look it up" for neighborhoods with fewer than 3 homes for sale (Cresswind, Hope Pointe, Woodlake Village, Country Lakes, Ocean Keyes and others that people search).

## Links in (for BUILD.md; the lead places them, six or more)

- /hoa/: "Our pages on gated communities and golf communities compare the fees community by community." Add a sentence or change to also name "every neighborhood's fee".
- /hoa/benefits/, /hoa/dues-increases/, /hoa/hoa-vs-poa/ (the two-associations section), /buyers/cost-to-own/ (the HOA line), /buyers/no-hoa-homes/ (opening), /submarkets/carolina-forest/ ("Community fees and figures change; we confirm current numbers with each community before you offer"), /buyers/relocating/which-town/, /buyers/new-construction/.
- The pilot /submarkets/myrtle-beach/plantation-point/ and each coming community page link up to this table, and this table links down to them.

## Checks before the build

- One fact, one value: where a row has its own page (The Farm $107, Del Webb at Grande Dunes about $400, Seasons about $340, Del Webb NMB $315, Myrtle Trace $95, Plantation Point no fee), compare the table's range with that page. If they differ, the table shows our count and the prose does not restate the other page's figure; list the difference in BUILD.md.
- Never "gated" from the flags (row 52). Never who lives anywhere. Never 55+ for Cresswind.
- NC communities (Brunswick County) are counted in the data but left off the page (Grand Strand, South Carolina).
- Before release, recount (the scripts resume and re-run in about 15 minutes) so the byline date and the table agree.

## Display names

MLS names are typed by agents ("Prince Creek - Longwood Bluffs - Detached", "WYNBROOKE TWNHM - Townhomes", "Tuscany - Carolina Forest Area - 31JJ21", "Market Common, The"). The build adds `display-names.json` in the data folder (MLS name to a plain name, e.g. "Longwood Bluffs (Prince Creek)", "Wynbrooke townhomes", "Tuscany", "The Market Common town center") for the names the reader sees. The search box matches both the plain and the MLS name. No name is merged with another unless facts.md row 51's rule is met.

## What only this page has (the findings)

1. A measured monthly fee, in whole dollars, for 382 neighborhoods with homes for sale, counted on one day (row 1). Nobody else publishes this: HOA's HUB estimates a few associations, Zillow filters by "low HOA".
2. The middle neighborhood of houses charges about $95 a month; 6 in 10 charge $100 or less (rows 2 to 4).
3. What raises a fee: a pool and a clubhouse about $115 against $68 with neither; lawn care in the fee about $300 against $90; townhome neighborhoods about $250 (rows 5, 6, 8).
4. Carolina Forest is 34 neighborhoods, $46 to $159 for houses, nearly all with a pool (row 10).
5. The method checks out to the dollar against every community page on the site (rows 11 to 14).
6. Leased land: Ocean Lakes' 145 homes for sale list no HOA because they sit on 2,579 lease sites; Lakeside Crossing, the most searched name (90 a month), is leased land too (rows 16, 39, 43).
7. 51 neighborhoods with homes for sale list no fee at all, including searched names Hagley Estates and Conway Plantation (row 15).
