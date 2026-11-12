# /submarkets/: build record, round 2 (the town guides hub)

Built 2026-11-12 from `PLAN.md` (round 2), using VERIFIED and CORRECTED rows of `facts.md` only, at the verifier's wording (`VERIFY.md`, round 2 and round 1). The owner asked for "the differences of the cities", with real value and no cannibalization.

## Files

- Spec: `specs/submarkets.js` (rewritten). Built with `node tools/mkpage.js specs/submarkets.js`. URL and canonical kept.
- Page: `chapter3realty/submarkets/index.html`.
- Data: `data/2026-11-b/submarkets/`.
  - `build_glance.py`: the Garden City note fixed per VERIFY D5 ("the Horry part only"; it no longer says the Census place reaches into Georgetown County). Re-run: "nine towns and four others; checks pass". `glance.json` rebuilt.
  - `towns.json`, `map-points.json`, `homes-places.json`: unchanged.
- Images: none new. The four photos of round 1 (NMB 1941 postcard, Surfside pier, MarshWalk, Pawleys marsh walkway), each now inside its town's portrait, with credits and ImageObject schema. Share image unchanged (Surfside pier, 16x9).

## Outline

1. **Hero.**
   - Title: "Grand Strand Towns: How the 9 Places Differ | Chapter3" (54 characters).
   - Description (155): "Grand Strand towns from Little River to Pawleys Island: which are real towns, how many people live in each, the water, the winter, and what homes sell for."
   - H1: "Grand Strand towns: nine places near Myrtle Beach, and how they differ." Italic line, about half the H1's size: "The water, the winter, and what a home costs in each."
   - Sub: "Among the Grand Strand towns, Pawleys Island counted 130 residents in 2020, and North Myrtle Beach had more homes than residents." (D4 CORRECTED)
   - Byline Devin Day, reviewed by Tim Nash. Crumb Home / Guides / Town guides.
2. **Short answer.** The shore is about 48 miles from the North Carolina line to Pawleys Island's south end (D1). Five of the nine are cities or towns; the county runs four (D6). In the 2020 Census about 7 in 10 homes on Pawleys Island were kept for vacations, fewer than 1 in 10 in Conway (D3).
3. **Slim offer bar** (kept): "Send me homes" (/contact/). The edge feed sits under the opening, as before.
4. **H2 "What towns are on the Grand Strand?"** One sentence naming the nine, north to south. The map (kept; numbers match the table). **The one-glance table**, from `glance.json`: Place (jumps to its portrait) | Kind of place (D6, R9 to R11) | Residents, 2020 (D4) | The water (R1 to R5, R10, H22, D12). Groups "On the coast, north to south" and "Inland". On a phone each place is one block under a thin rule: name and residents on one line, then kind, then water. Two notes under thin rules: the Census places against the guides' areas (D5 CORRECTED), and Atlantic Beach and Briarcliffe Acres (D10). One sentence linking which-town's `#city-or-county` (the city-line table stays which-town's).
   - No vacation column and no beach miles in the table: the chart and the next section say each once.
5. **H2 "How long is the Grand Strand?"** 48 miles; 63 to the mouth of Winyah Bay (D1 CORRECTED, no "near Georgetown"). The City of Myrtle Beach's "60-mile stretch" (D2 CORRECTED). Beach inside each town: Myrtle Beach about 10, North Myrtle Beach a little over 8, Pawleys about 3 1/2, Surfside about 2; more than a third outside every town and Census place: unincorporated land and two state parks (D9 CORRECTED). The name: 1949, a newspaper column by Claude Dunnagan (D11 CORRECTED; no paper and no column title named).
6. **H2 "Which Grand Strand towns are quiet in winter?"** The answer, then **the chart** "Out of every 10 homes, how many are kept for vacations?" (G.bars, compact, one color, bars on a 0 to 100 scale, the two inland places as gray reference bars; note defines the Census group and says it takes in timeshares and vacation rentals). Two sentences on what it means for a street. Links to the Garden City guide's `#winter` and the Myrtle Beach guide's `#living` (its "What is the off season like?" has no anchor of its own). **Mid offer:** "A busy street all year, or a quiet one in winter?" / "Have us pick the towns that fit" (/contact/).
7. **H2 "What is each Grand Strand town like?"** Nine portraits (H3 with a bold title), north to south, then inland. Each: the wow first, one or two facts no sibling prints, then the price and the rental words in sentences, a photo for four towns (beside the text from 1,100 px), its homes strip, and "Read our [town] guide".
   - Little River, "on the waterway, by the inlet": R4 (the inlet channel), R1 (Norfolk or Florida), R2 (about 4 feet). H12's slips are left to which-town, as the plan asked; they stay in the strip title only.
   - North Myrtle Beach, "four beach towns in one city": R7 (1968), D13 (138 homes per 100 residents, the most of the three cities). No Fat Harold's sentence (which-town has it); the 1941 postcard carries the dancing.
   - Myrtle Beach, "the Boardwalk, and the airport in town": H14, H15; D7 (town 1938, city 1957 when its permanent population first topped 5,000).
   - Surfside Beach, "a free pier, and a town of under 2 square miles": H16; R8 (Roach's Beach, Floral Beach, 1952, Ark Plantation, 1964); D8; D4 (more homes than residents).
   - Garden City, "the beach in front, the marsh behind": H17; R5 (about 260 houses on the marsh).
   - Murrells Inlet, "restaurants and music on the salt marsh": H18 CORRECTED (no length); R4, R2; R5 CORRECTED (MI 9 wording: "about 100 feet" for 30 m); R10 (the two nearest beaches, about 9 minutes).
   - Pawleys Island, "old cypress houses by the sea": H19 CORRECTED; D13 (about 4 homes per resident); H8, H9, H29.
   - Carolina Forest, "trails on the waterway": H22; D4 and D6 (more residents than North Myrtle Beach, no city or town government).
   - Conway, "a city on a tidal river": R2 (about a foot of tide at Conway); D7 (1898, the first of the five); the one city of the nine away from the ocean (D6, D9). No oaks, no Riverfest, no Riverwalk (which-town has them).
   - Strip titles (each names the place and its best thing, never a feature of each home): "Little River, where the boats are", "Dance the shag on Main Street", "The Boardwalk and the airport in town", "A free pier 814 feet out", "Beach in front, marsh behind", "Dinner on the MarshWalk", "Live near Pawleys Island" (the search takes in Litchfield), "Trails on the waterway", "The river city". Fallback: the map search, then "ask us to send them" (/contact/?place=).
   - Three notes under the portraits (kept from round 1): why the 13-town comparison's prices differ (H36), the county's list names no rental permit (H27), an HOA or the deed can bar rentals (H25), with links to which-town and str-rules.
   - **Mid offer** (kept): "Found a home in one of these towns?" / "Have us check one address" (/contact/).
8. **H2 "Buying a home to rent out on the Grand Strand?"** Kept as it was.
9. **FAQ** (four, each answered on the page): why it is called the Grand Strand; how many people live in the towns; which places are not towns; why the 13-town comparison shows different prices.
10. **Sources** (Census P1 and H5, Gazetteer, TIGER/Line, the City of Myrtle Beach pages, S.1325, Surfside, Conway and Pawleys town pages, Coast Pilot, NOAA tides, and round 1's price, wow and rule sources). Note: "Miles: our TIGER/Line measure. Prices: each guide's middle sale, deeds recorded October 2025 to September 2026; Pawleys Island itself, three years." Then photo credits.
11. **End band** (kept): "Send me the homes that fit" (/contact/).

Four offer wordings, plus a request link under each strip. Every button only links; the site opens the short pop-up. About 1,820 words of prose (score.js).

## Decisions taken

1. **No vacation column in the table.** The plan had one; the chart says the same figure. One fact, one place.
2. **Years go in the portraits, not the table.** The table's kind column stays short ("A city", "Run by two counties").
3. **Carolina Forest keeps H22 (the Bike and Run Park).** which-town's Carolina Forest entry names the same park. It is the one verified wow for the place and the plan keeps it; the hub's sentence is its own wording. If the lead wants zero overlap, the fallback is the D4 sentence alone, which is not a wow.
4. **The MarshWalk and Huntington Beach State Park** are also named on which-town (the MarshWalk with struck "half-mile" wording there; the park for its birds). The hub uses the MarshWalk as its wow (plan) and the park only as the nearest beach.
5. **D13 is used twice** (North Myrtle Beach and Pawleys), at the verifier's wording ("residents", never "all year").
6. **The sentence "A street of vacation homes is full in summer and quiet from fall to spring"** is what D3 means for a buyer, not a measured fact. house-claims passes it. A cold reader may want it softened.

## Gate results (final run)

- `SCORE_TODAY=2026-11-09 node tools/score.js --site <wt-live>/chapter3realty --only /submarkets/`: **98/100** (SEO 100, AEO 100, Human 99, Trust 79). No FAIL, no blocker. Partials: P2 numbers (4.1 per 100 words, 84%) and T2 first-hand experience (1 sentence; no story in `stories/stories.json` belongs on a hub, none invented).
- `node tools/claims-scan.js <wt-live>`: 0 findings sitewide.
- `node tools/facts-check.js <wt-live>`: 4 wrong sentences on 3 pages, none on /submarkets/ (the same tax rows on from-massachusetts, from-virginia and llms-full.txt as before).
- `node tools/house-claims.js .../submarkets/index.html`: 0. (Two unscoped "most homes" sentences fixed on the way.)
- `node tools/struck-check.js batches/2026-11-b/facts/submarkets-struck.json .../submarkets/index.html`: no struck wording (23 entries).
- `node tools/critic.mjs http://localhost:8871 /submarkets/ --widths 390,1024,1440`: 0 blocking, 0 warnings at all three widths.
- `node build.js check`: OK.
- `node build.js audit`: the only FAIL lines on /submarkets/ are the two mkpage date lines (dateModified and the visible "Updated" against the sitemap). `node build.js dates` fixes them. Fixed on the way: sources block 92 words, "runs about" (twice), no keyword in the sub. One `~` note: no quote from a named licensed person; a quote for Tim Nash is never written.
- Every sentence in main is 28 words or fewer, except one photo credit generated by `photos.js` from its record. No em dash, no sentence opening with "So", no "Here is".
- Manual sibling check against which-town (sibling-check.js only matches single words across all specs, 1,033 hits of noise): shared names are Cherry Grove (a district), the MarshWalk, Huntington Beach State Park and the Bike and Run Park (decisions 3 and 4).

## Shots (looked at in full, as a stranger)

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/submarkets/shots/`:
- `submarkets-390.png`, `submarkets-1024.png`, `submarkets-1440.png`, `critic.json`.
- Contact sheets used to read them: `.../rb1/submarkets/view/` (m390-0 to 2, m390-table, d1440-0 to 5, d1024-mid).

Fixed after looking: the residents figure on a phone stood alone with no label (now "11,711 residents"); the portrait headings were small on a wide screen; the sources note read "Pawleys island".

## For the lead

1. which-town: drop "Grand Strand towns" and "Grand Strand towns map" from its keywords (PLAN 10.2). The hub's title says "Grand Strand Towns"; its keywords do not, so the audit is quiet today.
2. The MLS line under the homes strips (owner, 2026-11-12): VERDICTS says strip cards now name only the listing firm and the page carries the CCMLS source and notice. This page relies on the site edge for that; nothing in the spec prints MLS text.
3. No new IDX place or feed: the nine strips use round 1's `town-*` places (homes-places.json). Round 1's feed item stands: the edge feed TOP_EACH leaves out Garden City and Carolina Forest (H38).
4. which-town still prints "half-mile" for the MarshWalk and "a DJ plays beach music" (H18, H13 struck); the Conway guide's "old river steamboat" (H21). Sibling fixes.
5. `node build.js dates` for the two date lines.
6. A cold reader and an owner's-eye review have not run on round 2 (this build did not grade itself).

---

# Round 1 build record (2026-11-10), kept for the record


Built 2026-11-10 from `PLAN.md`, using VERIFIED and CORRECTED rows of `facts.md` only, in the verifier's wording (`VERIFY.md`).

## Files

- Spec: `specs/submarkets.js` (new). The live page was hand-made. It is now built with `node tools/mkpage.js specs/submarkets.js`. The URL and canonical are kept.
- Page: `chapter3realty/submarkets/index.html`.
- Data: `data/2026-11-b/submarkets/`.
  - `build_towns.py` now carries the verifier's wording: H13, H18, H19 and H21 wow lines; "the county's list names no rental permit" (H27); H31 struck; the four "where" cells; the Garden City group (H6); the Surfside inland range (H5); Pawleys' Georgetown sale-date window.
  - The Myrtle Beach wow says "is about 1.3 miles long", as the guide prints it. The audit refuses "runs about".
  - Re-run: "all nine match their guides".
  - `towns.json` was rebuilt from it. `map-points.json` is unchanged.
- Images: none new. The page shows four photos already licensed on their guides, with credits and ImageObject schema:
  - Little River waterfront and Surfside pier: NAIP and NOAA, public domain.
  - MarshWalk: NAIP, public domain.
  - Pawleys north end: CC BY-SA 4.0.
- The Surfside pier's 16x9 crop is the share image.

## Outline

1. **Hero.**
   - H1: "Grand Strand town guides: nine places near Myrtle Beach."
   - Italic line at about half the H1's size: "What a home costs in each, and what people love there."
   - Sub: "In these towns you can own a boat slip in Little River, dance the shag in North Myrtle Beach, or walk Surfside Beach's pier for free."
   - Byline: Devin Day, reviewed by Tim Nash.
   - Crumb: Home / Guides / Town guides.
2. **Short answer.** Nine guides from Little River to Pawleys Island. A house or townhouse in Conway resold for about $265,000; a house near the ocean in Surfside Beach sold for about $1 million. Myrtle Beach and Surfside Beach allow nightly rentals only in some zones.
3. **Slim offer bar.** "Tell us how you will use the home. We send the homes that fit." The button "Send me homes" goes to /contact/. The site's edge feed "Top homes, town by town" sits under the opening, as before.
4. **H2 "What towns are near Myrtle Beach?"**
   - One line of introduction.
   - The map: the nine places, numbered in table order, with Census TIGER/Line places and Horry GIS. It was added because the scorer's place-map rule is a blocker, and a reader from out of state does not know where the towns are.
   - The table, built from `towns.json`: Town (with its "where" words and a "Send me [Town] homes" link to /contact/?place=) | Why people love it (the wow) | Middle sale price, past year (the group named in each cell; two lines for Surfside and Pawleys) | Renting by the night.
   - Groups: "On the beach, north to south", then "Inland".
   - Below 900 px, each town is one block under a thin rule: name, where, wow, price, rule, request link.
   - Two notes under thin rules: why the 13-town comparison's figures differ (H36), and that an HOA or the deed can bar rentals, with a link to /invest/str-rules/.
   - One sentence linking which-town and best-neighborhoods.
   - Mid offer: "Found a home in one of these towns?", button "Have us check one address" (/contact/).
5. **H2 "What do these towns look like?"** Four photos, two by two, one column under 560 px: Little River's slip basin, the Surfside Beach pier, the MarshWalk, and the north end of Pawleys Island.
6. **H2 "Buying a home to rent out on the Grand Strand?"**
   - Three links under thin rules: /invest/airbnb-income/, /invest/where-to-buy/, /invest/str-rules/.
   - Two sentences on what we check for one home.
7. **FAQ.** Four questions, each answered on the page: what towns are near Myrtle Beach; can you rent by the night in every town; which towns are inland; where the prices come from.
8. **Sources.** One line, then photo credits.
9. **End band.** "Tell us your budget and how you will use the home." The button "Send me the homes that fit" goes to /contact/.

There are four different offer wordings, and every button only links. No chart: the nine prices are for different kinds of home, so the plan's reason still holds. Fix round 1 (REVIEW-1.md) reversed this. Each town now has its own homes() strip under its row, with a map-search and request fallback (owner, 2026-11-08: "each town should have an IDX feed").

## Decisions taken

1. **Carolina Forest's wow line is H22.** The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres. The row is VERIFIED. The owner wants a wow for every place. The fallback, H23 "no city tax", is not a wow.
2. **Conway's rule cell** says only "We check the city's zoning for each address." H30 is struck.
3. **The NMB rule cell** keeps "An HOA or the deed can still bar rentals" (H25).
4. **Myrtle Beach's "where" words** are "The city in the middle of the Grand Strand". The verifier found this true by latitude (5th of 9 in `map-points.json`). See lead item 7.

## Gate results (final run)

- `SCORE_TODAY=2026-11-09 node tools/score.js --site <wt-live>/chapter3realty --only /submarkets/`: **98/100** (SEO 100, AEO 100, Human 100, Trust 79). No FAIL and no blocker.
  - The only partial is T2, first-hand experience (1 sentence). No story in `stories/stories.json` belongs on a hub, and none was invented.
- `node tools/claims-scan.js <wt-live>`: 0 findings sitewide.
- `node tools/facts-check.js <wt-live>`: 4 wrong sentences on 3 pages, none on /submarkets/. They are tax rows on /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt, which were there before this page.
- `node tools/house-claims.js .../submarkets/index.html`: 0 sentences.
- `node tools/struck-check.js batches/2026-11-b/facts/submarkets-struck.json .../submarkets/index.html`: no struck wording.
- `node tools/critic.mjs http://localhost:8876 /submarkets/ --widths 390,1024,1440`: 0 blocking and 0 warnings at all three widths. Earlier runs found two problems, both fixed:
  - At 1440 px, "a blog with no real photo". Fixed with the photo section, drawn at 352 px so the critic reads it as a photo.
  - "Few visuals".
- `node build.js check`: OK.
- `node build.js audit`: the only FAIL lines on /submarkets/ are the two mkpage date lines ("schema dateModified 2026-06-12 != sitemap lastmod", "visible Updated June 12, 2026"). `node build.js dates` fixes them. Fixed along the way:
  - sources block 92 words;
  - "runs about";
  - no "towns" in the sub;
  - "one thing" in the description;
  - the keyword "Grand Strand towns", which which-town already declares.
- One `~` note remains: no quote from a named licensed person. A quote for Tim Nash is never written.

## Shots (looked at in full, as a stranger)

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/submarkets/shots/`:
- `submarkets-390.png`
- `submarkets-1024.png`
- `submarkets-1440.png`

The critic's JSON is `critic.json` in the folder above.

Fixed from the shots:
- The request link's arrow stood apart from its words. It now stays on the word "homes".
- A double rule under the table.
- The map was a full screen at 1024 px. It is now 620 px wide at most.
- The aerial photos were cramped two-up on a phone. They are now one column under 560 px.

## For the lead (not edited here)

1. **Feed (idx-lib/feeds.js, `TOP_EACH`, line 163; "/submarkets/" at line 305).**
   - It covers seven towns and leaves out Garden City and Carolina Forest, two of the nine guides (H38).
   - Give /submarkets/ its own feed of all nine, so other pages that use TOP_EACH do not change. `towns()` already maps Garden City to `area_garden_city`. Carolina Forest is `["subdivision", "Carolina Forest"]`, as in `RENT_TOWNS`.
   - Use a bold, true title, for example "Pick your town: top homes for sale in all nine". Run it against the live search, as every feed is (at least 10 homes).
2a. **Town strips (fix round 1).** The hub now carries nine `G.homes()` strips. They use places that already exist: `town-little-river`, `town-north-myrtle-beach`, `town-myrtle-beach`, `town-surfside-beach`, `town-garden-city`, `town-murrells-inlet`, `town-pawleys-litchfield`, `town-carolina-forest` and `town-conway`.
   - Add "/submarkets/" to each one's `pages` in Blog-Brain `batches/2026-10-b/data/idx-places.json` and in `idx-lib/places.js`. No new place is needed.
   - If the owner wants Pawleys Island alone, add a `town-pawleys-island` near search and change one line of the spec.
2b. **Photo partner shot list** (owner's Gmail, `templates/photo-request-email.md`):
   - the Surfside Beach pier from the sand;
   - the MarshWalk at dusk;
   - the Little River slips from the dock;
   - the end of the Garden City Pier.
   These replace the two remaining aerials, and the Little River aerial taken out in fix round 1.
2. **The Carolina Forest guide** (hand-made, no spec). Add H22 in one sentence: "The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres." The hub already uses it.
3. **Sibling wording the verifier struck, still live:**
   - /submarkets/north-myrtle-beach/: "a DJ plays beach music from 7" (H13).
   - "Half-mile" MarshWalk (H18) on five pages: /submarkets/murrells-inlet/, /buyers/no-hoa-homes/, /buyers/second-home/, /buyers/relocating/why-myrtle-beach/ and /buyers/relocating/which-town/.
   - /submarkets/conway/: "old river steamboat" (H21).
4. **/invest/str-rules/** goes past the guides' verified words:
   - NMB "citywide" (H33);
   - Pawleys "no business license at all" (H34);
   - Conway "never adopted" (H35).
5. **Re-check at build:**
   - The NMB rule page says "currently" (H25).
   - The Surfside ledger URL is 404. Cite Town Code 17-396.10; the page links the working Zoneomics copy (H26).
6. **Two prices per town across the site (H36).** The hub names the group in each cell and says once why which-town differs.
7. **Ledger line to add:** a Where entry for Myrtle Beach, "in the middle of the Grand Strand", from `map-points.json` latitude order.
8. **Dates:** run `node build.js dates` so the byline and schema dates match the sitemap.
