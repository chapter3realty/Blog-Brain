# Plan: /submarkets/ (the town guides hub), round 2

Lane U, second rewrite, 2026-11-12. Facts: `facts.md` (new rows D1 to D14 and reused rows R1 to R12 on top; round 1's H1 to H39 kept below). Demand: `must-answer.md` (round 2 on top). Data: `data/2026-11-b/submarkets/glance.json`, made by `build_glance.py`; `towns.json` (round 1) stays the source of prices, wow lines and rental words.

## 1. The live page and spec: what is worth keeping

Read 2026-11-12 (`specs/submarkets.js`, built by mkpage; round 1 and fix round 1, BUILD.md, REVIEW-1.md).

Keep:
- The URL, crumb "Town guides", byline (Devin Day, reviewed by Tim Nash), the edge feed under the opening.
- The map of the nine places (map-points.json; the scorer's place-map rule is a blocker, and an out-of-state reader needs it).
- Every verified price, wow line and rental cell in `towns.json`, the struck-word guard in the spec (`STRUCK`), and the 28-word guard.
- The nine `G.homes()` strips with their fallback (map search, then "ask us to send them").
- The notes on the 13-town figures (H36) and on HOAs and deeds (H25, H27).
- The four photos and their credits; the rentals link list; the four offer wordings.
- FAQ question 3 (why the 13-town comparison's prices differ).

What a reader misses today (the owner's "pretty thin"): the page tells a newcomer what a home costs and whether it can be rented, but not how the places differ to live in. Every cell is one line, so nine places read like one list of prices. Nothing on the page answers the Grand Strand questions people search that no sibling answers: how long the Grand Strand is, which places are real towns, how many people live in each, which ones go quiet in winter.

## 2. The reader and the decision

A buyer from out of state, sometimes an investor, who knows the name Myrtle Beach and not the places along the coast. Their decision: which two or three places to read about and look at homes in. What they need first: where each place is, what kind of place it is (a busy city, a beach town that empties in winter, a county community of year-round homes, a river city), and what water it sits on. Then the price and the rental rule, then the guide and the homes.

## 3. The answer in two sentences

The Grand Strand runs about 48 miles from the North Carolina line to Pawleys Island's south end, and five of our nine places are cities or towns. In winter they differ most: about 7 in 10 homes on Pawleys Island are vacation homes, against under 1 in 10 in Conway.

(Rows D1, D6, D3. Each sentence under 28 words. The writer may reword; the figures stay.)

Hero sub (the wow, from D4; under 28 words): "On Census Day 2020, North Myrtle Beach had more homes than people who live there all year, and 130 people lived on Pawleys Island."

## 4. Title, H1, keywords

- Title: "Grand Strand Towns: How the 9 Places Near Myrtle Beach Differ | Chapter3".
- H1: "Grand Strand towns: nine places near Myrtle Beach, and how they differ." Italic line: "The water, the winter, and what a home costs in each."
- Description: "Nine Grand Strand towns from Little River to Pawleys Island: which are real towns, how many people live in each, the water, and what a home sold for."
- Keywords the hub claims: Grand Strand towns, Myrtle Beach area towns, towns on the Grand Strand, how long is the Grand Strand, Grand Strand population, Grand Strand map with towns. Lead item: drop "Grand Strand towns" and "Grand Strand towns map" from which-town's keywords (the cannibalization fix gives them to the hub). Round 1 removed "Grand Strand towns" from the hub because which-town declared it; `node build.js audit` will flag it until which-town drops it.

## 5. Sections, in order

1. **Hero:** H1, italic line, sub, byline. **Short answer** (section 3). **Slim offer bar** (kept): "Tell us how you will use the home. We send the homes that fit." / "Send me homes" (/contact/). The edge feed sits under the opening, as now.

2. **H2 "What towns are on the Grand Strand?"** One line: "Our nine guides, north to south, then two places inland. Each name opens its guide." Then the map (kept). Then **the one-glance table** (section 6, visual 1). Under it, two notes under thin rules:
   - "Each Census figure is for the Census place of that name, which can differ a little from the guide's own area." (D5)
   - "Two more towns sit on the beach without a guide here: Atlantic Beach, between Crescent Beach and Windy Hill, and Briarcliffe Acres." (D10; never describe who lives there.)
   Then one sentence and the link: "Inside a city or town, it adds its own tax, trash pickup and rules. Our 13-town comparison shows what changes at the city line." (Link /buyers/relocating/which-town/#city-or-county.) This is all the hub says on city against county: which-town owns that table (idea 2 of the brief is declined, below).

3. **H2 "How long is the Grand Strand?"** Two or three sentences: about 48 miles of shore from the North Carolina line to the south end of Pawleys Island (D1); about 63 to the mouth of Winyah Bay; Myrtle Beach and North Myrtle Beach hold about 10 and 8 1/2 of those miles inside their limits (D9). If D2 is verified: "The tourism board's 60 miles reaches past Pawleys Island." If D11 is verified, it goes in the FAQ, not here. No visual: the map above already shows the coast.

4. **H2 "Which Grand Strand towns are quiet in winter?"** One sentence of answer, then **the chart** (visual 2), then two sentences: what the measure is (homes kept for vacations or part-time use, nobody living in them on April 1, 2020; D3) and what it means for a buyer (a street of vacation homes is quiet from fall to spring and full in summer; a street of year-round homes is the same all year). Links: the Garden City guide's "Is Garden City, SC busy in winter?" and the Myrtle Beach guide's "What is the off season like?" No people described, only homes.

5. **H2 "What is each Grand Strand town like?"** Nine short portraits, north to south, then inland, each an H3 "Little River: ..." with a bold, true title (section 7). Each portrait, in this order:
   - the wow line first (towns.json `wow`, verified wording);
   - two or three sentences of what makes it different, built from the hub's own rows (D3, D4, D6, D7, D9, D12, R2 to R12);
   - one line: "A home usually sells for ..." and "Renting by the night: ..." (towns.json, unchanged);
   - its homes strip (kept), then the guide link "Read our Little River guide".
   The four photos move into the portraits of their towns (North Myrtle Beach, Surfside Beach, Murrells Inlet, Pawleys Island). The separate "What do these towns look like?" section goes.
   Word budget: about 70 to 100 words a portrait.

6. **Mid offer** (kept): "Found a home in one of these towns?" / "Have us check one address" (/contact/).

7. **H2 "Buying a home to rent out on the Grand Strand?"** (kept as it is.)

8. **FAQ** (three, mkpage's floor):
   - "How many people live in the Grand Strand towns?" Answer from D4 in two sentences: the largest (Myrtle Beach, 35,682 in 2020) to the smallest (Pawleys Island, 130).
   - "Which Grand Strand towns are not real towns?" Answer: Little River, Garden City, Murrells Inlet and Carolina Forest are Census places the county governs (D6); each guide says what that means there.
   - "Why does the 13-town comparison show different prices?" (kept).
   - If D11 is verified, "Why is it called the Grand Strand?" replaces the first.

9. **Sources** (add: Census 2020 P.L. and DHC, the Gazetteer, TIGER/Line; "Our measures: shore miles and vacation-home shares, from Census files"). **End band** (kept).

Long is fine here: a reader compares nine places on detail (CRAFT, "Rules are thoughts"). About 1,600 to 2,000 words in main.

## 6. The visuals

**Visual 1. The one-glance table** (replaces round 1's four-column table; built from `glance.json` and `towns.json`, never typed).

| Town | What kind of place | People, 2020 | The water | Vacation homes |
|---|---|---|---|---|
| Little River | Run by the county | 11,711 | The waterway and Little River Inlet; no ocean beach of its own | about 2 in 10 |
| North Myrtle Beach | City, formed 1968 from four beach towns | 18,790 | About 8 1/2 miles of beach; the Cherry Grove channels | about 5 in 10 |
| Myrtle Beach | City | 35,682 | About 10 miles of beach | about 2 in 10 |
| Surfside Beach | Town, since 1964 | 4,155 | About 2 miles of beach | about 4 in 10 |
| Garden City | Run by two counties | 10,235 | The beach in front, the salt marsh behind | about 4 in 10 |
| Murrells Inlet | Run by two counties | 9,740 | The salt marsh and its creeks; no ocean beach of its own | about 1 in 10 |
| Pawleys Island | Town, since 1985: the island only | 130 | About 3 1/2 miles of beach, a creek behind | about 7 in 10 |
| Carolina Forest (inland) | Run by the county | 23,342 | Lakes and ponds; the waterway at its edge | under 1 in 10 |
| Conway (inland) | City, since 1898 | 24,849 | The Waccamaw River; the tide moves about a foot | under 1 in 10 |

- Each cell sourced: kind D6/D7, people D4, water D9/D12/R2 to R11 (the writer keeps only the words a row supports; "lakes and ponds" for Carolina Forest needs a row, else "the Intracoastal Waterway at its edge", H22), vacation homes D3. Myrtle Beach's year waits for D7.
- No price column here: the price sits in each portrait, so this table does not look like which-town's price comparison.
- On a phone, each row becomes one block under a thin rule (round 1's CSS pattern). Sort stays north to south, then inland.

**Visual 2. The chart: "Out of every 10 homes, how many are vacation homes?"** Nine horizontal bars from `glance.json` (`seasonal_pct`), sorted high to low: Pawleys Island 7, North Myrtle Beach 5, Surfside Beach 4, Garden City 4, Little River 2, Myrtle Beach 2, Murrells Inlet 1, Carolina Forest under 1, Conway under 1. The figure "about 7 in 10" at the end of each bar. One color; the two inland places in a lighter tint with an "Inland" tag. Note under it: "Homes no one lived in on Census Day, April 1, 2020, kept for vacations or part-time use. U.S. Census Bureau." Load the `dataviz` skill before building it. One message, read at a glance: the beach towns go quiet in winter; inland, nearly everyone lives there all year.

**The map** (kept, unchanged).

No price chart (round 1's reason holds: nine prices for different kinds of home; which-town charts prices).

## 7. Homes strips and titles

Keep the nine strips (same places, homes-places.json), now under each portrait. New titles, bold and true of the place (owner, 2026-11-10), for the writer to finish:
- Little River: "Little River, where the boats are: homes for sale now"
- North Myrtle Beach: "Live where the shag began: homes in North Myrtle Beach"
- Myrtle Beach: "Ten miles of beach and the airport in town: Myrtle Beach homes"
- Surfside Beach: "Steps from a free pier: homes for sale in Surfside Beach"
- Garden City: "Beach in front, marsh behind: Garden City homes for sale"
- Murrells Inlet: "Live by the MarshWalk: Murrells Inlet homes for sale"
- Pawleys Island: "Live near Pawleys Island: homes in Pawleys Island and Litchfield" (the search takes in Litchfield)
- Carolina Forest: "Year-round neighborhoods: Carolina Forest homes for sale"
- Conway: "Live by the river: homes for sale in Conway"
Each title must stay true of every home the strip can show: a title names the place and its best thing, never a feature of each home ("on the water", "oceanfront"). "Where the shag began" needs NMB's verified wording (H13: "the home of the shag" is Fat Harold's own phrase; the state Senate's line is in which-town); if not supported, use "Live on the beach in North Myrtle Beach".

The owner said on 2026-11-12: "i dont really like the MLS information on the horizontal IDX." That text comes from `tools/glass.js` homes() and the site's edge, not from this spec. The IDX rules require the listing firm and the MLS notice with listing data, so it cannot simply go. A lead item: make it one short, small line under the strip instead of a block (glass.js is shared; change it once for every page, after the owner sees one).

## 8. The offers

Unchanged from round 1 (four wordings): the slim bar "Send me homes" (/contact/), each strip's fallback "ask us to send them" (/contact/?place=), the mid offer "Have us check one address" (/contact/), the end band "Send me the homes that fit" (/contact/). Every button only links; the site opens the short pop-up.

## 9. Ideas from the brief, weighed

1. **Portraits of the nine towns: taken,** shorter than which-town's and built on the hub's own measures. which-town already has 13 portraits for living, so the risk is repeating it. Rule for the writer: no sentence or named place from which-town's entry for that town, and no detail from the guide's opening; use the facts in this ledger first. Run `node tools/sibling-check.js <wt-live> <rev>` and also compare each portrait sentence by hand with which-town's entry (sibling-check only finds names). Specifically avoid: Little River's Vereen Gardens, ShrimpFest, Waties Island and "about 2 in 3 slips" (which-town uses H12's figure; the hub's wow for Little River should then be R4's inlet or the tide, or H12 kept only in the table's wow line, not repeated in the portrait); NMB's Music on Main and Fat Harold's sentences; Surfside's fire dancers and trolleys; Garden City's crabbing and carts; Murrells Inlet's lights and boat parade; Pawleys' Gray Man and turtles; Carolina Forest's flytraps; Conway's oaks and Riverfest.
2. **"Inside a city or in the county: what changes": declined as a section.** which-town has the H2 "What changes when a house is inside city limits?" with that exact table (trash, sales tax, rentals, golf carts) and a tax chart. A second copy would compete for the same search. The hub gives the kind of place in the table, one sentence, and the link.
3. **A one-glance comparison the siblings do not have: taken** (visual 1 and visual 2). "How busy in July against January" has no public monthly source by town (facts.md, Not found 2); the Census vacation-home share is the honest stand-in, named for what it is.

## 10. For the lead

1. Hosts to allow, or rows stay off: www.visitmyrtlebeach.com (D2), cityofmyrtlebeach.com (D7, Myrtle Beach's year), www.hmdb.org (D11).
2. which-town: drop "Grand Strand towns" and "Grand Strand towns map" from its keywords (must-answer.md, last section).
3. The MLS line under the strips (section 7): a glass.js change, shown to the owner first.
4. Round 1's lead items in BUILD.md still stand (the edge feed for all nine, the places' `pages`, the Carolina Forest guide's H22 sentence, the struck sibling wording, str-rules H33 to H35, `node build.js dates`).
5. A verifier for D1, D3 (MB, Surfside, Pawleys), D4 to D10, D12 to D14 before the writer uses them.

---

# Round 1 plan (2026-11-10), kept for the record


Lane U, rebuild. Facts: `facts.md` (rows H1 to H31 for the page; H32 to H39 are for the lead). Demand: `must-answer.md`. Data: `data/2026-11-b/submarkets/towns.json`, made by `build_towns.py`.

## 1. The live page, and what is worth keeping

Read 2026-11-10 (`chapter3realty/submarkets/index.html`, hand-made, no spec; 416 words in main).

Keep:
- The URL and canonical, and the nine guides it links (14 referring pages already point here).
- One entry per town, each linked to its guide. The live one-line cards are the right size; their words are not.
- Carolina Forest shown honestly as a place that is not a nightly-rental market.
- The links out to the market reports and the guides list.

Cut:
- The H1 "Myrtle Beach neighborhoods." and the title "Grand Strand Neighborhoods" (they compete with /buyers/best-neighborhoods/).
- The lede's promise of property tax, flood risk, schools and "who buys in each" (none delivered; the last is a fair-housing risk).
- The AirROI revenue table (owned by /invest/airbnb-income/; vendor figures).
- The six "Start from what you are trying to do" cards (they answer which-town's question, and carry unverified claims: facts.md H37).
- The FAQ ("How many submarkets does Chapter3 cover?" is nobody's search) and the word "submarket".
- The crumb "Invest / Neighborhoods": the hub serves buyers too. Make it "Home / Town guides".

## 2. The reader and their decision

A buyer, often from out of state, sometimes an investor, who knows the name Myrtle Beach and not the places around it. The decision: which one or two town guides to read, and whether a home there can earn nightly rent. They leave the hub for a guide, for which-town if they are still choosing where to live, or for a request.

## 3. The answer in two sentences

Chapter3 has a guide to each of nine places on the Grand Strand, from Little River at the North Carolina line to Pawleys Island at the south end. A house costs about $265,000 in Conway and about $1 million near the ocean in Surfside Beach, and Myrtle Beach and Surfside Beach allow nightly rentals only in set zones.

(Rows H11, H4, H24, H26. The writer may reword; the figures and groups stay.)

## 4. Search title and H1

- Title: "Grand Strand Town Guides: Home Prices, Rental Rules | Chapter3" (51 characters before the brand). It keeps the searched words "Grand Strand" and "town", and promises only what the table gives. It drops "Taxes" from the cannibalization file's proposed title, because the page has no tax column.
- H1: "Grand Strand town guides: nine places, and the best thing about each."
- Description: the two-sentence answer, shortened.
- Byline: Devin Day (spec author "devin"), reviewed by Tim Nash.

## 5. The sections, in order

1. **Hero:** H1, byline, the two-sentence answer.
2. **Slim offer bar:** "Tell us how you will use the home. We send the homes that fit." Button "Send me homes" to /contact/.
3. **The edge feed "Top homes, town by town"** stays where the site puts it, under the opening. Nothing added to the page for it.
4. **One sentence, then the link:** "Still choosing where to live? Compare 13 towns side by side on which town fits you." (/buyers/relocating/which-town/). This is the only place the hub talks about choosing.
5. **H2 "Myrtle Beach area towns at a glance"** (the searched words "myrtle beach area towns"). The one table (section 6). Under it, two short notes:
   - "Each price is the middle sale in the past year from county deed records, for the kind of home that town's guide leads with. Our 13-town comparison draws its own town lines, so its figures differ a little." (H36)
   - "An HOA can bar nightly rentals even where the town allows them. Our short-term rental rules page has every town's rule in full." (H25, H27; link /invest/str-rules/)
6. **Mid offer:** "Have us check one address. We confirm its town, its zoning and the HOA's rental rules before you make an offer." Button to #lead-form. (The same service /invest/str-rules/ offers.)
7. **H2 "Buying a home to rent out?"** Three sentences, each a link: what a nightly rental earns in each town (/invest/airbnb-income/), where we would buy a rental (/invest/where-to-buy/), and the best neighborhoods once you pick a town (/buyers/best-neighborhoods/). No figures.
8. **End offer band:** "Tell us your budget and how you will use it. We send the homes that fit, in the towns that fit." Button to /contact/.
9. **Sources box:** county deed records (Horry and Georgetown), each town and county rule page in facts.md, and "each figure is the one its town guide prints".

About 450 to 600 words in main. A hub that routes readers is better short. No FAQ: no question here is the hub's own to answer.

## 6. The visual: one table, read at a glance

Built from `towns.json`, never typed. Beach towns north to south, then a small "Inland" label and the two inland places.

| Column | What it holds | Example (Garden City) |
|---|---|---|
| Town | The name, linked to the guide, and where it is in a few words | **Garden City**, on the beach south of Surfside, run by two counties |
| Why people love it | The wow line (H12 to H21) | At the far end of the Garden City Pier, people learn line dances out over the ocean. |
| A home usually sells for | The guide's figure, with its kind of home named | About $320,000 for a condo on the ocean side |
| Rent it by the night? | The verified words (H24 to H30) | No rental permit on the Horry side; no county business license on the Georgetown end |

Rows (from `towns.json`): Little River (H1, H12, H27), North Myrtle Beach (H2, H13, H25), Myrtle Beach (H3, H14, H24), Surfside Beach (H4, H16, H26), Garden City (H6, H17, H27, H28), Murrells Inlet (H7, H18, H27, H28), Pawleys Island (H9 then H8 as a second line, H19, H29); inland: Carolina Forest (H10, decision 1, H27), Conway (H11, H21, H30).

- On a phone each row becomes one glass card in the same order: the town name as its link, the wow line first in larger type, then price and rental words as two plain lines, then a small text link "Send me [Town] homes" to /contact/ (the place named, so the pop-up sends it with the lead). On a wide screen, a table with the same request link under each town name.
- Pawleys Island's price cell has two lines (island, mainland), because its wow and its rental rule are about the island. Every other cell has one figure.
- No bar chart of prices: the nine figures are for different kinds of home, so bars would compare unlike things, and which-town already charts prices.
- No map. The table's order and the "where" words place each town. `map-points.json` is ready if a cold reader gets lost.
- Each wow line under 28 words, no em dashes, no "stunning" or "nestled". Lead each card with the wow, not the price (owner, 2026-11-10).

## 7. Homes strips

None added. The edge feed under the opening stays, and every guide carries its own strips. Each card's request link is the per-town offer. BUILD.md lists one feed change for the lead.

## 8. The offers

1. Slim bar under the answer: "Send me homes" (/contact/).
2. One request link per town card: "Send me [Town] homes" (/contact/).
3. Mid offer after the table: "Have us check one address" (#lead-form).
4. End band: "Tell us your budget and how you will use it" (/contact/).

Four distinct wordings. Every button only links; the site opens the short pop-up.

## 9. Decisions for the lead

1. **Carolina Forest's wow line.** Its guide has no verified line a reader would picture (facts.md "Not verified" 1). Proposed: add WT 25 to the Carolina Forest guide's "what it is" section in one sentence ("The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres."), then the hub uses it (H22). Fallback, if the guide is not touched: "No city tax: most homes are outside any city or town." (H23), which is true but is not a wow.
2. **Three /invest/str-rules/ sentences go past what the town guides' verifiers allowed** (H33 to H35: NMB "citywide", Pawleys "no business license at all", Conway "never adopted"). The hub uses the verified words. str-rules needs a fact fix in a later round, or the site disagrees with itself one click apart.
3. **Two prices per town across the site** (H36). The hub names the group in each cell and says once why which-town differs. A later round could give which-town and the guides one shared group per town.
4. **The hub is hand-made HTML today.** The rebuild should be a new spec (`specs/submarkets.js`, mkpage) so it is never hand-edited again.
