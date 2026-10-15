# The Farm, rewrite check v7 (round 14c, 2026-10-15)

Independent verifier. I did no research on this page. Task: lessons B30 and B45. The writer reshaped the page (commits `e636487`, `7da0736`) and applied the v6 corrections (`495827d`). A reworded sentence is a new sentence. I diffed the spec against `574470a` (the state after v6) and checked every changed or new sentence that states a fact against its ledger row and, where it drifts, against the primary source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (last spec commit `7da0736`, 01:51 UTC), the built page `chapter3realty/submarkets/carolina-forest/the-farm/index.html` in the `wb-farm` worktree, and the preview `scratchpad/preview/b/the-farm.html`. The built page and the preview carry the same text as the spec (I compared every changed sentence; the build ran before the last commit, which only added `toc: false` and the section-one wording, and the preview shows that wording).

Sources I opened myself:

- SCDNR release, June 10, 2025 (HTTP 200, full text).
- County GIS parcels layer 24: PIN 39600000001 and every SCDNR parcel in the area; layer 18 roads; roads and parcels next to the tract.
- The Farm HOA calendar, 12 months (list view, September 2025 to December 2026).
- Horry County parks page (HTTP 200); USACE FUDS layer 3 (status of Range III and the two cleared areas).
- OSRM from the Farmers Rest Drive entrance (-78.875215, 33.754869).
- The built map image `the-farm-where-from-above-1200w.webp`, drawn over its frame.
- Local news on the sale and the burns (MyHorryNews, Post and Courier, Coastal Conservation League; search snippets only, the sites refused a direct read with 403 or 429).

## Result

- 44 fact-bearing units changed or newly stated since v6. **40 match. 4 drift** (4 distinct drifts, all small).
- No old wording came back: `struck-check --strict` on the preview, before my entries: **the-farm (40 patterns): no struck wording.** After my 4 entries (44 patterns): 4 struck phrases on the Farm page, as intended. (The same run reports 49 struck phrases on `no-hoa-homes`; that is another page.)
- `node tools/struck-check.test.js`: "all controls pass".
- Drive and walk times: every minute on the page re-run or matched to a ledger row. No banned distance word (the one hit is the allowed table head "Also close by"). No walk times on the page.

## The four drifts

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 | "The state keeps it healthy with controlled burns." (first section) | Row 100 is the only source: the release says the expansion "strengthens SCDNR's prescribed fire management capabilities, which are essential for maintaining the health and biodiversity of the preserve." That says the burns are essential to health. It does not say they keep the preserve healthy, which is an outcome. "It" also follows "the new land", so it can read as the new tract only. Local news adds that DNR aims to burn at least 1,500 acres a year, so the burns are real; the outcome word is still the writer's. Round 14's page said "manages it"; the row 100 note passed "keeps healthy", and I do not. | "The state manages the preserve with controlled burns [SCDNR release: prescribed fire is essential to the preserve's health]." |
| D2 | "its parking area is South Carolina's first official East Coast Greenway trailhead" (normal day) | A superlative with one source. The county parks page says "its parking area serves as the first official East Coast Greenway trailhead in the State of South Carolina" (two places on the page, same words). I found no second source: the East Coast Greenway Alliance and the Visit Myrtle Beach page refused a direct read; 2015 local news says only that the greenway link "includes a new trailhead" at the park and calls it Carolina Forest's first connection, not the state's first trailhead. A search summary that seemed to confirm it was only repeating the county page. | "Its parking area is a trailhead on the East Coast Greenway [county parks page]." Cut "first official" and "South Carolina's". |
| D3 | "Cable TV from Spectrum is the largest share of the fee. It also covers landscaping and the ponds, trash pickup and the pools. It does not include internet." (costs) | The writer folded the list into the second sentence. The subject of the first sentence is "Cable TV", so "It also covers landscaping" reads as cable TV covering landscaping and trash. The fee is meant. The facts are right (row 10: cable 38.5 percent, then landscaping and ponds, trash, the management contract, electricity, a reserve, the pools, insurance; row 11: no internet line). | "Cable TV from Spectrum is the largest share of the fee. The fee also covers landscaping and the ponds, trash pickup and the pools. It does not include internet [HOA 2026 budget]." |
| D4 | "At closing, you pay the HOA a one-time fee of $250." (costs) | Row 15: the fee is a $250 transfer fee on a resale, and "it shall not apply to the following transfers: (i) involuntary conveyances; (ii) ... estate planning; or (iii) conveyances between family members when no consideration is paid." The row's own note says the earlier wording "left the carve-outs out". The older page text (v6) had the same sentence and was not flagged; the reshape rewrote it, so I flag it now. A buyer of a foreclosed home does not pay it. | "On an ordinary sale, the buyer pays the HOA a one-time $250 transfer fee at closing [Declaration, Section 9.11(b), Fourth Amendment 2009]." |

## The sentences you asked about

| Page sentence | Row | Result |
|---|---|---|
| "Conway Medical Center had meant the 353 acres along The Farm's north edge for a $160 million healthcare facility." | 99 | Match. Release: CMC's CEO, "The sale of this land, which was originally intended for a $160-million healthcare facility". "This land" is the 353 acres acquired. "Healthcare facility" is the release's word (v6 D6b applied). Local news says $161 million and calls it a hospital; the page follows the release. "In 2025, the state bought them": county parcel 39600000001 shows SaleDate 2025-02-07, deed 4908/2589; news says the sale was in February. "Instead" and "plans to open them for outdoor recreation" match "will be open to the public for outdoor recreational activities" (future). |
| "the new land holds habitat for them too" | 99 | Match. Release: "The newly protected tract includes critical habitat for the federally at-risk and globally imperiled Venus flytrap." The page says habitat for flytraps, not that the big population lives on the tract. Keep it that way. "Largest wild population ... in the preserve": "the largest and only long-term viable population in South Carolina is centered within Lewis Ocean Bay." Passed in v6. |
| "The HOA's events include a fall yard sale and a Community Appreciation Day." | 68 | Match. I re-read the calendar. September 26, 2026: "Fall Yard Sale 7:00-1:00"; October 17, 2026: "Community Appreciation Day 12:00-2:00". The wider calendar shows a community yard sale in April and May 2026 as well, plus food trucks, an annual meeting and Humane Society collections, so "include" is safe. The row's v6 limit, "two months is not a yearly pattern", is met: the sentence does not say "every year". Community Appreciation Day appears once (October 17). |
| The budget sentence | 10 | Cable TV as the largest share: match (783,167 of 2,031,964, 38.5 percent; the dues are 2,017,164, so 38.8 percent of dues). The list "landscaping and the ponds, trash pickup and the pools" is in budget order and partial ("also covers"), which is fine. The pronoun is D3. |
| "its parking area is South Carolina's first official East Coast Greenway trailhead" | 81 | D2. |
| The basketball court, playground and clubhouse | 60, 62 | Match. 2024 amenity rules: "Basketball Court Rules and Regulations", "Hours of operation are dawn to dusk"; "the Clubhouse, including the fitness area"; "does not grant exclusive use of the pool, fitness room or playground area"; budget line 5120 Playground Maintenance. Fitness room 5:30 a.m. to 9 p.m. in the rules and the October 2026 newsletter. Watch item: row 60 says no source shows whether the clubhouse and the activity center are one building. The page names both in different sentences and never counts them, which is correct. Do not add "two buildings" or a count. All amenity hours rest on the April 2024 rules (the December 2025 version is unread, rows 61 to 63). |
| The airport, about 20 minutes | 33 | Match. OSRM from the entrance: 20.2 minutes, 9.09 miles. Rounds to "about 20 minutes". |
| The green-shaded tract on the map, from county parcel 39600000001 | 79 | Match. The parcel is the tract the state bought: owner SOUTH CAROLINA DEPARTMENT OF NATURAL RESOURCES, 353.25 acres, "CAROLINA FOREST; REM TRACT 20", deed 4908/2589, sale date 2025-02-07 (about four months before the June 10, 2025 release). The three other SCDNR parcels in the box (989, 307 and 754 acres) were bought in 2022, 2007 and 2013, so none is the CMC tract. The parcel has one ring of 34 points, spans -78.8876 to -78.8696 and 33.7721 to 33.7847, and International Drive runs along its east side, as the release says ("across International Drive from the existing preserve"). It touches The Farm HOA's open-space parcels at the north edge. I laid the image on its frame (bbox -78.9556, 33.6998, -78.8124, 33.7892): the tract falls at x 570 to 721 and y 45 to 172 of 1200 by 900, and the green shape on the image sits there, resting on the top of the orange outline. The label "Bought by the state for a nature preserve" is to its left. The label says bought, not preserve land, as v6 D6a required. |

## Promises on the page ("we check", "we read", "we show")

All are actions an agent can do, with no promised outcome:

- "we check how old the roof and the air conditioner are": ask the listing side and read disclosures and permits.
- "We check the current zones for any home you like": the district's attendance zone lookup (row 36).
- "We read the board's latest minutes on the pool before you make an offer" and "We read the HOA's rules and latest minutes for any home you like": the HOA posts signed minutes (January, February, April, May and June 2026 are on its documents page) and the 2024 rules.
- "We check that the garage and driveway fit all your cars": a measurement and a visit. It is a check, not a promise that they fit.
- "We show you both fees side by side for any townhome or condo": rows 6 to 9 (the second-HOA totals come from listings).
- "We check the Corps' map for any lot you like": the Corps' FUDS map data (row 89).
- The top bar and the end box: "we will send you the homes for sale" and "We will line up the homes for sale that fit and show them to you." These promise a search and a showing. If no home fits, there is nothing to show. It is not a fact claim; the owner may want "the homes that fit, if any".

## Units that match (40)

Head: description; ogTitle; h1em ("Along its north edge, the state bought 353 acres for a nature preserve, with habitat for Venus flytraps"); hero "Pools: Two"; short answer "start in the fitness room at 5:30 a.m. and end in one of the two pools, open until 9 p.m. in season" (rows 61, 62; the pools are open 9 a.m. to 9 p.m., April 15 to October 15).

First section: the $160 million facility; "In 2025 ... bought ... plans to open"; flytraps and habitat; 1942 to 1948 ("The site was used from 1942 until 1948 by the Army Air Force as an aerial bombing and gunnery range", and all 1,571 home parcels lie inside the two cleared areas of that site, row 89); "from Scarecrow Way to Pumpkin Patch Lane" (row 94, county roads layer).

Normal day: fitness room in the clubhouse; basketball court; playground; "The large pool covers about 7,400 square feet" (row 102, v6 D2 applied); events; library and recreation center "about 3 minutes by car from the Farmers Rest Drive entrance" (3.3 min, row 101) and "a full gym and a rock climbing wall" (row 80); Bike and Run Park "about 4 minutes by car from the same entrance" (3.6 min) and "7 miles of mountain bike and hiking trails" (row 81); "Publix is about 2 minutes away by car, and the beach about 10" (1.5 and 10.1 min; the origin is two sentences up).

Homes: "three or four bedrooms", about 200 townhomes, about 70 condos, "Most of those have two or three bedrooms" (rows 41, 44, 45); "one or two stories ... 1,450 to 3,200 square feet"; "A typical house lot is about a fifth of an acre" (row 43, median 8,309 sq ft, v6 D1 applied); "Over the past year, a typical house sold for about $350,000, a townhome in The Orchards about $230,000 and a condo in Planters Point about $240,000" (row 48: medians $352,000, $228,500 and $237,500, recorded October 2025 to September 2026; "typical" stands for the middle price and "usually" is gone, v6 D4 applied; 13 and 9 sales, so keep the three numbers apart).

Where: "from the Farmers Rest Drive entrance, by the large pool" (row 27); airport (row 33); "the same three Horry County public schools" (row 36).

Costs: "For a typical house you live in, the HOA fee and the county property tax come to about $2,600 a year" (row 86 coordinator decision; 1,284 + 1,286.60 = 2,570.60); the stormwater fee of about $90 (row 78, $89.40); "Cable TV from Spectrum" (row 12) "is the largest share of the fee" (row 10).

Pros and cons: "The $107 HOA fee covers the pools, cable TV and trash pickup" (row 10, v6 D7 applied); the pool con (unchanged text, moved) and "We read the board's latest minutes on the pool"; the second HOA fee con.

Rules: "the rules allow you to rent out your home and keep up to three dogs and cats".

Bombing range: "Yes, along with other parts of Carolina Forest"; the Corps finished the cleanup under every home and the Defense Department or a later owner may keep monitoring (rows 87, 89); "In 2024, the Corps was still investigating Range III, a section that borders The Farm. Range III touches some of The Farm's open land, but no home lot" (re-queried USACE layer 3: Range III PROJECTSTATUS "investigation", FISCALYEAR 2024; six HOA open-space parcels touch it, no home lot; v6 D10 applied); "leave it alone, move away and call 911" with "We check the Corps' map".

FAQ: up to 20 percent a year (row 13, base assessment); the board-control sentence (rows 21, 94, "gave up its right to appoint a majority of the board"); "How is the property tax set when you buy" (row 85 safe wording: market value, "in an ordinary sale ... close to the price you paid", first on the next year's tax bill; v6 D11 applied); the flood answer (rows 71, 73, 74, unchanged wording moved).

## Struck entries added

Four in `the-farm-struck.json`: D1 (row 100), D2 (row 81), D3 (row 10; the pattern is `^It also covers landscaping and the ponds`, because a match must sit inside one sentence), D4 (row 15). `node tools/struck-check.test.js`: "all controls pass". `--strict` on the built preview: the Farm page fires 4 phrases, one per entry, and the entry for each goes quiet when the writer uses the approved wording.

## Status

Row 104 of the ledger: **wrong in part (v7)**.
