# The Farm, rows 110 to 112 and rewrite check v9 (round 14d, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify rows 110 to 112 against primary sources and pictures; (2) lessons B30, B45 and B48: diff the spec against commit `612511e` and check every changed or new sentence that states a fact, against its row and, where it drifts, against the primary source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (last spec commit `30dd4e5`; file time 02:42:15 UTC, the same minute as the built page and the preview), the built page in the `wb-farm` worktree and the preview `scratchpad/preview/b/the-farm.html`. Both carry the spec's text.

## Result

- **Rows 110, 111, 112: all three verified.**
- Rewrite check: **36 fact-bearing units changed or newly stated since `612511e`. 30 match, 6 drift** (D1 to D6, three medium and three low).
- The five v8 drifts (D1 to D5) are **fixed**, and the fixes carry **no new drift**. D1 is the "state asks visitors to park and walk" sentence, D2 the tiles with "drive", D3 the opener replaced, D4 Range III without "the part", D5 "set up showings for the ones you choose".
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict` for the-farm, **before my entries: "the-farm (49 patterns): no struck wording."** After my 6 entries: 55 patterns, 6 struck phrases found, one for each of D1 to D6. Each entry goes quiet on its approved wording. (The same run reports other pages; those are not this page.)
- `node tools/struck-check.test.js`: "all controls pass".
- Distance words (`rules/distance-words.json`): no hit on the page. Every drive time matches OSRM (table below).
- Promises: every one is an action an agent can do, with no promised outcome.

## Rows 110 to 112

### Row 110: the sidewalk on Wheatfield Drive, and the small pool. Verified

Both Overpass servers failed again (overpass-api.de reset the connection; overpass.kumi.systems and overpass.private.coffee timed out). The OpenStreetMap main API answered a map call for a small box, which returns the same data, so I read OSM that way.

- **OpenStreetMap** (box -78.8700,33.7640 to -78.8640,33.7700):
  - Way 1283755951: `footway=sidewalk`, `street:name=Wheatfield Drive`, concrete, 29 nodes, from Carolina Farms Blvd (-78.8728, 33.7662) to the International Drive junction (-78.8668, 33.7680), about 610 m.
  - Ways 1283755953 and 1283755955: `footway=sidewalk` on the other side, about 415 m, joined by a crossing (1283755954). Way 1283755952 is a marked crossing with tactile paving at the east end. Ways 1453239361 and 1316182084 are sidewalks along International Drive that the Wheatfield sidewalk meets.
  - The Wheatfield road ways carry `sidewalk:both=separate` or `sidewalk:right=separate`.
  - It is a volunteer map (the way was last edited 2025-11-24), so it is a second source, not the first.
- **USDA NAIP 2023** (USGS National Map `exportImage`, -78.8735,33.7650 to -78.8660,33.7692, county WHEATFIELD DR drawn over it): a light continuous strip beside the road on the Farm (north) side from the west end to International Drive, and a second strip on the south side along the east half. It matches the OSM ways, with the strip meeting International Drive at the junction.
- **County roads layer 18**: WHEATFIELD DR runs from International Drive (-78.8668, 33.7683) west to Carolina Farms Blvd (-78.8729, 33.7663), with Mountain Ash Lane and Hay Hill Lane leaving it on the Farm side. So the sidewalk follows the whole road. The page's "from the north-east corner of The Farm to International Drive" is true and narrower than the source. The page claims no crossing, no walk to a school and no user.
- The row's "Farm Run Way" is not a county road name here; the roads are Mountain Ash Lane and Hay Hill Lane. It is not on the page.
- **Small pool**: county Addresses layer 22: 389 CAROLINA FARMS BLVD at (-78.873458, 33.767339), PIN 39607040047, "FARM AT CAROLINA FOREST; OPEN SPACE #15", HOA-owned, 0.84 acre. NAIP 2023 at that point shows a kidney-shaped pool with a small building and a parking lot. It is about 290 m south of the northern edge of The Farm's parcels (33.7699) and about 870 m north of the large pool (33.7595). "The small pool is in the north part of The Farm" holds.

### Row 111: the East Coast Greenway. Verified (sentence stays)

The Alliance's own site, greenway.org, returned HTTP 403 to curl and to the fetch tool (every page I tried), and web.archive.org reset the connection. So I used two state agencies and the county's own quote.

- MaineDOT news release, 8/05/2016 (HTTP 200): "the East Coast Greenway, a 3,000-mile trail route that extends from the Canadian border in Calais to Key West, Florida". A MaineDOT paragraph in the same release: "a 3,000 mile trail route from Calais, Maine, to Key West, Florida".
- Florida DEP, Office of Greenways and Trails, floridadep.gov/parks/ogt (HTTP 200): "the longest state segment of the East Coast Greenway, an ambitious national trail project extending from Calais, Maine, to Key West, Florida"; and "These trails attract paddlers, hikers and cyclists from across the country".
- WMBF News, May 15, 2018 (the row's source, re-opened): "a 3,000 mile biking and walking route from Maine to Key West, Florida", about what Horry County officials said.
- Horry County parks page (re-read today): the Bike and Run Park's parking area "serves as the first official East Coast Greenway trailhead in the State of South Carolina."

My judgement: "a walking and biking route from Maine to Florida" is plainly true and widely documented. State agencies in both end states give the endpoints, and a county statement and a Florida agency give the walking and cycling use. It does not need the Alliance's page. The page's word **route** is the right one: a search summary of the Alliance's FAQ says most of the route is still on roads, so "trail" for the whole would be too much. Keep the sentence. Do not add "continuous", "off-road" or a mileage: older state documents give 2,500 miles, newer ones 3,000.

### Row 112: the large pool and its two palm islands. Verified

The page's cut of the picture (`the-farm-pool-from-above-2026-1200w.webp`) shows the pool only in part, with the "Large pool" label over it, so I could not read the islands from it. I rebuilt the picture from the NOAA tiles: `EC2601a_OB_N_C0785230w334545n.tif` and `EC2601a_OB_N_C0785315w334545n.tif` from `noaa-eri-pds` (4,707 by 4,707 px, WGS 84), cut lon -78.8772 to -78.8738, lat 33.7590 to 33.7614, and enlarged the pool.

It shows blue water curving in an S around **two round raised planters, each with a small palm tree**, a wide pale deck around the pool, a pavilion roof at the top, the pool building at the bottom and the pond at the left. "The large pool curves around two small islands of palms and has a wide deck" says only what the picture shows. The county footprint is one ring (row 102), so the islands are not holes in it.

Watch: the page does not show this picture (its three aerials are the 2023 neighborhood, map and school images), so a reader cannot check the sentence by eye. It is still true.

## The rewrite check: units changed or new since `612511e`

Spec diff read in full. 36 units.

### Drifts (6)

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 (medium) | "The activity center, about 400 feet from the large pool, is where the HOA board meets each month." | Row 68. I read the HOA calendar for every month of 2026 (list view, January to December). Board meetings listed at the activity center: Jan 19, Feb 16, Apr 20, May 18, Jun 15, Jul 29, Sep 16, Oct 21, Nov 16. **None in August**; in March the one meeting listed is the annual meeting on March 25 at the Carolina Forest Recreation Center; December is not posted. That is 9 of 11 months. Posted minutes: January, February, April, May, June. Row 68 said "monthly" from two months (September and October), and the writer has now made it a rule. No HOA page says "monthly". | "The activity center, about 400 feet from the large pool, is where the HOA board usually meets [HOA calendar, 2026: nine of the first eleven months]." |
| D2 (medium) | "Hunting is allowed in season: bows from mid-September, guns from October 21 to January 1, and small game to March 1." | Row 108. The regulation (123-40 section 1.1 D item 19) has three deer hunts, back to back: archery Sept. 15 to Oct. 10, **primitive weapons Oct. 11 to Oct. 20**, still gun Oct. 21 to Jan. 1. Section 3.2 says primitive weapons include bow, crossbow and **muzzle loading shotguns and rifles**. So guns are in the field from October 11. "Guns from October 21" leaves out ten days of muzzleloader hunting and says there are no guns before then. (Small game, Thanksgiving Day to Mar. 1, is right; bear season Oct. 17 to 30 is not on the page.) | "Hunting is allowed in season: bows from mid-September, muzzleloaders from October 11, other guns from October 21 to January 1, and small game to March 1 [S.C. Code Regs. 123-40, section 1.1 D, item 19, and section 3.2]." |
| D3 (medium) | "If you walk the preserve's roads in the fall, you share them with hunters in season." | Row 108. Nothing says hunters use the roads that walkers use. The sources say only: SCDNR layer 3, PropertyID 505, both the 353-acre tract and the whole property: Hiking "Yes", Hunting "Yes", WMA_SpecialActivity "None" (so no hunt closes the property to others); the regulation's one preserve item asks deer hunters to sign in at the kiosk. "In the fall" is also narrower than the seasons (deer to January 1, small game to March 1, spring turkey April 3 to May 3, Thursday to Saturday). Regulation 2.15 lets a WMA close to other users on special designated hunts; none is listed for this preserve. This is a source's list turned into a picture of what happens on the roads. | "The preserve allows both hiking and hunting [SCDNR Public Lands data for Lewis Ocean Bay HP and WMA]." (If the writer wants the consequence: "You may meet hunters there in season.") |
| D4 (low) | "Under the HOA rules, you can rent out your home, with no limit on how many homes are rented." | Rows 50 and 51. The previous card also said the lease must be in writing and a copy goes to the manager within 10 days; the rewrite kept only the open door. The documents let the board require a minimum lease term (the Declaration says up to six months; Exhibit C says no shorter than six months; the two differ), so an unqualified "you can rent out your home" reads as short-term rentals allowed. The no-cap statement is the board's, in the May 18, 2026 minutes ("rental percentage restrictions were not included"), not a rule. The Orchards and Planters Point have their own rules, not read (row 50). | "Owners can rent their homes with a written lease, and the HOA has no cap on how many homes are rented [HOA Rules and Regulations, Exhibit C, adopted 2011; HOA board minutes, May 18, 2026]." Do not state a minimum term (row 50). |
| D5 (low) | "The fitness room is in the HOA's clubhouse, open to owners from 5:30 a.m. to 9 p.m." | Row 62. The hours are right (5:30 a.m. to 9 p.m.; the 9 p.m. here is the fitness room's, and the pools' own 9 p.m. is in the short answer). The population is not: the 2024 amenity rules (OCR) say "The facility is for the use of residents and their guest only." It is residents, not owners (tenants use it; the pool card and the activity center are owner-based). | "The fitness room is in the HOA's clubhouse, open to residents from 5:30 a.m. to 9 p.m. [HOA amenity rules, recorded April 2024]." |
| D6 (low) | FAQ: "No. The Farm has no gate, and the streets in The Farm are public roads owned by Horry County." | Row 24. The source (the HOA's FAQ) says only that The Farm is not gated and what it would take to gate it. "Has no gate" is an absolute. The board's January 19 and February 16, 2026 minutes (row 39) discuss "the gate between Wheatfield and the school", so a gate exists on the edge. Not an entrance gate, but "no gate" does not say so. (The county-owned roads half is row 24's safe wording; the county layer leaves some owners blank, so attribute it if it is kept.) | "No. The Farm is not gated, and its roads are county-owned [HOA FAQ; HOA board minutes, May 18, 2026]." |

### Units that match (30 of 36)

- **h1em** "Two pools, cable in the fee, flytrap habitat along its north edge." Rows 60 (two pools), 10 (cable TV is the largest budget line, 38.5 percent, funded by the dues) and v7 (the tract "includes critical habitat for the ... Venus flytrap" and is on The Farm's north edge).
- **Tiles** "Beach 10 min drive" (10.09 min, 4.63 mi to MYRTLE BEACH 101; row 28) and "Publix 2 min drive" (1.51 min, 0.50 mi; row 29, "about 2 minutes"). This is the safe wording v8 D2 gave as the alternative; the start (the Farmers Rest Drive entrance) is in the sources line and the where-it-is section.
- **Top bar** "We will send the homes for sale in The Farm that fit." A search and a send.
- **Short answer**: "A day here can start in the fitness room and end in one of the two pools, open until 9 p.m. in season." Pools: April 15 to October 15, 9 a.m. to 9 p.m. (row 61, the 2024 rules: "HOURS OF POOL OPERATION FOR ALL SWIMMING POOLS: April 15 thru October 15 from 9 am until 9pm"). The fitness room 5:30 a.m. to 9 p.m. is a separate fact in the day section; both close at 9 p.m., so neither sentence misassigns the hour.
- **Short answer** "A rock climbing wall and the county's trails are within about 4 minutes by car." The county recreation centers page, re-read today, lists a rock climbing wall at the Carolina Forest Recreation Center (3.32 min); the parks page lists the Bike and Run Park's "7 miles of mountain biking and hiking trails" (3.56 min). Both are within "about 4 minutes" from the Farmers Rest Drive entrance (OSRM).
- **Preserve**: "The preserve is open in daylight all year." (SCDNR: "open during daylight hours year-round".) "Its main entrance, with parking, is off International Drive, about 6 minutes by car from The Farm's entrance by the schools." (OSRM from the Wheatfield Drive junction at International Drive: 5.96 min; both Ocean Bay schools stand at that junction, row 38.)
- **v8 D1 fix**: "The state asks visitors to park and walk the preserve's roads." SCDNR: its wildlife biologist "urges visitors to park their vehicles and walk on the well-maintained roads". "Dirt" is gone and an urging is not stated as what visitors do.
- "Back inside The Farm, the streets follow its farm theme, from Scarecrow Way to Pumpkin Patch Lane." Row 94 (county roads layer 18). The old sentence moved; nothing changed.
- **Basketball court**: "The HOA also keeps a basketball court, open from dawn to dusk, and a playground." Rows 60 and 62 ("Hours of operation are dawn to dusk"; the court is "for Farm residents, occupants and guest").
- **Large pool islands and wide deck**: row 112, verified above.
- **Small pool in the north part**: row 110, verified above.
- **"about 400 feet from the large pool"**: row 98 (372 ft between the nearest edges of the two building footprints, 497 ft center to center; verified in round 10e).
- **"Owners can also reserve it for a private party."** The 2024 rules: "The use of the Activity Center is by reservation only ... available to The Farm at Carolina Forest HOA owners"; four-hour reservation (row 64). No fee is on the page.
- "The HOA's events include a fall yard sale and a Community Appreciation Day." (Row 68; September 26 and October 17, 2026; the calendar also lists a community yard sale in April and May.)
- **Sidewalk**: row 110.
- **"Outside The Farm, the county's Carolina Forest Recreation Center has a rock climbing wall and a full gym, about 3 minutes away by car. The county library shares its campus."** County page: "full size gymnasium ... and a rock climbing wall" (3.32 min). Library on the same parcel (row 101).
- **"The county's Bike and Run Park has 7 miles ... about 4 minutes by car. Its parking area is a trailhead on the East Coast Greenway, a walking and biking route from Maine to Florida."** Rows 81 and 111; the county page's trailhead sentence.
- **Where**: "The map shows drive times by car from the entrance by the large pool." See watch item 1; it is the wording the controls have held since round 10.
- **Pro** "The HOA fee is the same $107 a month for every home." Row 5: the three budget lines (houses, Orchards, Planters Point) each divide to $107.00 a month per home (1,292, 207 and 72 homes). The second HOA fee for townhomes and condos is a separate con, so the two do not contradict. It is the Farm HOA's fee, "in 2026", and the budget does not print $107 (arithmetic). The row's own wording is "for every home".
- **Cons opener** "Most of The Farm's drawbacks are HOA matters. One comes from the preserve along its north edge." Four cons: the pool, the parking rule and the second HOA fee are HOA matters (three of four); hunting and burns come from the preserve. No ranking.
- **Hunting con**: "The preserve is a state wildlife management area." (Regulation item 19 "Lewis Ocean Bay Heritage Preserve WMA"; SCDNR layer: WildlifeManagementArea "Specific".) "Hunting is allowed in season: bows from mid-September" (archery Sept. 15 to Oct. 10) "and small game to March 1" (Thanksgiving Day to Mar. 1). "The state also manages the preserve with controlled burns, and on burn days International Drive can close between SC 90 and Ocean Bay Elementary" (row 107; five closures from 2021 to 2026, verified in v8).
- **Hunting con offer**: "We show you how far any house is from the preserve's hunting land." The county parcel layer and SCDNR's property layer (Hunting "Yes" for the 353-acre tract and for the whole property) give a distance. It states a distance and promises no outcome.
- **Card** "The HOA's pools: Open from April 15 to October 15, with no lifeguard. Each home can bring up to six guests, with the owner there." Rows 61 and 63.
- **Bombing range**: "Yes. From 1942 to 1948, the Army Air Force used the land as a bombing and gunnery range, along with other parts of Carolina Forest." The Corps' FUDS data for the Conway Bombing and Gunnery Range: "The site was used from 1942 until 1948 by the Army Air Force as an aerial bombing and gunnery range". The Farm's homes lie in two projects of that range (row 89).
- **v8 D4 fix**: "The Corps lists Range III, a section that borders The Farm, as under investigation. It touches some of The Farm's open land, but no home lot." The year is in the sources line ("The Corps status is for fiscal year 2024."), as the prompt asks. "The part" is gone.
- **FAQ fee**: "The HOA fee is $107 a month, or about $1,300 a year. The HOA can raise it by up to 20 percent a year." 107 x 12 = 1,284, "about $1,300".
- **Sources line**: "Home sizes, ages and the second HOA fees are from listings" (rows 8, 9). "Drives start at the Farmers Rest Drive entrance (the preserve's at Wheatfield Drive), without traffic" (OSRM, no traffic; the 6-minute preserve drive starts at Wheatfield). "The flood cost is FEMA's middle house policy in ZIP code 29579." "The Corps status is for fiscal year 2024."
- **v8 D5 fix (end box)**: "We will look for the homes for sale that fit and set up showings for the ones you choose." The v8 safe wording, exactly.
- **Subtitle** (unchanged since `612511e`, checked because you asked): "The Farm is a finished neighborhood of houses, townhomes and condos in Carolina Forest, with a Myrtle Beach mailing address." Rows 1, 25 (unincorporated Horry County, mailing city Myrtle Beach), and the build years (rows 18, 19).

Unchanged units in the same sections (the school table, the cost table, the story, the cards Fences, Parking, Pets) were checked in v7 and v8 and I did not reopen them.

## Drive times (all re-run on OSRM)

| Page | OSRM | Result |
|---|---|---|
| Preserve entrance "about 6 minutes", from the Wheatfield Drive junction | 5.96 min, 3.18 mi | match |
| Recreation Center "about 3 minutes" (from the Farmers Rest Drive entrance) | 3.32 min, 1.40 mi | match |
| Bike and Run Park "about 4 minutes" | 3.56 min, 1.69 mi | match |
| Short answer "within about 4 minutes" (wall and trails) | 3.32 and 3.56 min | match |
| Tile "Beach 10 min drive" | 10.09 min, 4.63 mi | match |
| Tile "Publix 2 min drive" | 1.51 min, 0.50 mi | rounds to 2 |
| "about 400 feet" (pool to activity center, straight line) | 372 ft edge to edge, 497 ft center to center (row 98) | match (it is a straight-line statement, and it says feet) |

`rules/distance-words.json`: run on every sentence of the built page, **0 hits**. There is no walk time on the page.

## Promises (step 5)

All are actions an agent can do, with no promised outcome:

- Top bar: "We will send the homes for sale in The Farm that fit." A search and a send.
- "On any house you tour, we check how old the roof and the air conditioner are." The disclosure, the permits and the listing side.
- "We check the current zones for any home you like." The district's attendance-zone lookup (row 36).
- "We read the board's latest minutes on the pool for you." The HOA posts signed minutes.
- "We check that the garage and driveway fit all your cars." A measurement and a visit.
- "We show you both fees side by side for any townhome or condo." The Farm HOA's $107 is on the budget; the second fee comes from the listing and the sub-association's management company (row 6: the amount is not published). It is "show", not "guarantee".
- "We show you how far any house is from the preserve's hunting land." The county parcel layer and SCDNR's property layer. A distance, not a promise about hunting. (The tract carries Hunting "Yes" in SCDNR's layer, so "hunting land" includes it.)
- "We check the Corps' map for every lot we show you." The Corps' FUDS map data.
- Story: "their Chapter3 agent reads the HOA rules with them." Labeled "Example".
- End box and the place offers: "set up showings for the ones you choose." v8 D5 fixed.

## Watch items (not drifts, not struck)

1. **"The entrance by the large pool"** (where-it-is section). The large pool is 520 m (0.32 mile) straight and 625 m (0.39 mile, 1.7 minutes) by road from the Farmers Rest Drive entrance, so "by" is loose. Row 27's wording is "the entrance nearest the large pool". This phrase has been a quiet control in `tools/struck-check.test.js` since round 10 and passed three earlier checks; I left it and added no entry. The writer may prefer "the entrance nearest the large pool".
2. **The tract and "hunting land".** The regulation does not say whether the 353-acre tract is inside the WMA. SCDNR's data lists it as part of Lewis Ocean Bay HP and WMA with Hunting "Yes", Hiking "Yes" and public access "Open" (the layer is named DEV). The page says "the preserve", not the tract. Keep to that.
3. **"Publix 2 min drive"** is 1.51 minutes rounded up. Fine under the rounding rule; the old "About" covered it. Not worth a word.
4. **Row 68's note says "monthly"** for board meetings; see D1. Replace "monthly" with the months actually listed if the row is reused.
5. **Row 62's hours** are the 2024 rules and the October 2026 newsletter, which agree; the December 2025 recorded rules were not read (row 28).
6. **Row 110**: "Farm Run Way" in the row's claim is not a road name; the page does not use it.

## Struck entries added

Six, in `the-farm-struck.json`: D1 (row 68), D2 and D3 (row 108), D4 (rows 50 and 51), D5 (row 62), D6 (row 24). `node tools/struck-check.test.js`: "all controls pass". `--strict` on the preview: before my entries the Farm page was quiet (49 patterns); after them, 55 patterns and 6 phrases fire, one per entry, and each goes quiet on its approved wording.

Housekeeping: `the-farm-struck.json` was an empty blob in the WIP commit `0a61677` (a work-in-progress commit taken while I rewrote the file); the working file holds all 48 entries, the 42 that were there and my 6.

## Status

- Row 110: **verified**. Row 111: **verified**. Row 112: **verified**.
- New ledger row 113, "rewrite check (v9)": **wrong in part (v9)**.
