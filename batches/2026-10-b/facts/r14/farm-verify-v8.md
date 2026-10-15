# The Farm, rows 105 to 108 and rewrite check v8 (round 14c, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify the four preserve rows (105 to 108) against their primary sources; (2) lessons B30 and B45: diff the spec against commit `7da0736` and check every changed or new sentence that states a fact, against its row and, where it drifts, against the primary source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (last spec commit `72ce0b0`; the file's modified time, 02:14:18 UTC, is the same minute the preview and the built page were made), the built page in the `wb-farm` worktree and the preview `scratchpad/preview/b/the-farm.html`. The preview and the built page carry the spec's text; I compared every changed sentence, including the end box.

Sources I opened myself:

- SCDNR Public Lands property page "Lewis Ocean Bay HP and WMA": the ArcGIS Hub page item (modified 2026-09-01), read from its data (the hub renders with script).
- SCDNR Public Lands Viewer feature service: layer 5 (entrance) and layer 3 (properties), PropertyID 505.
- SCDNR news release June 10, 2025 (HTTP 200, full text), and SCDNR news release March 5, 2021 (HTTP 200).
- MyHorryNews, Feb 24, 2025 and Nov 9, 2025; Post and Courier, Feb 23, 2026; WMBF, Feb 26, 2024; WBTW on Yahoo, Feb 24, 2025.
- S.C. Code of Regulations Chapter 123 (SC Legislature PDF, created 2026-01-28, 102 pages), and the 2026 proposed amendment Document No. 5441 (S. 906) with its bill history.
- OSRM routes from both Farm connections to the preserve entrance, and again for every drive time the changed sentences use.
- County GIS roads layer 18 (International Drive, Wheatfield Drive); parcels layer 24 (461 Farm parcels by legal description); Horry County Schools zone layers 1 to 3 (2025-2026); USACE FUDS_Data layer 3 (every Conway Bombing and Gunnery Range project); the county parks page.
- The built school-map image.

## Result

- **Rows 105 to 108: 3 verified as stated (106, 107, 108), 1 verified with corrected wording (105).** Every number in them matched.
- Rewrite check: **29 fact-bearing units changed or newly stated since `7da0736`. 24 match, 5 drift** (4 distinct fact drifts in 5 units, because one drift is two tiles) **plus 1 promise that promises an outcome.** Five distinct drifts in all (D1 to D5).
- The four v7 corrections (D1 to D4 of v7) are applied exactly as the safe wording gave them. No v7 wording came back.
- `node tools/struck-check.js --batch batches/2026-10-b --preview scratchpad/preview/b --strict`, before my entries: **the-farm (44 patterns): no struck wording.** After my 5 entries (49 patterns), the Farm page fires 7 phrases from the 5 entries (the tile entry fires on both tiles, the pros-and-cons entry on both of its sentences). (The same run reports 23 struck phrases on `neighborhoods`; that is another page.)
- `node tools/struck-check.test.js`: "all controls pass".
- Distance words: no banned word on the page, and no walk time. The only distance-word hit in `rules/distance-words.json` is the allowed table head "Also close by". The drive times all match OSRM (table below). The tiles fail CRAFT 2 in another way (D2).

## Rows 105 to 108

### Row 105: hours and bloom season. Verified with corrected wording (one word)

The Hub item's text, read from the data:

- "Hours of Visitation: The area is open during daylight hours year-round." Match for "The preserve is open in daylight all year."
- "From March through June, pitcher-plants and wildflowers provide a wonderful show." The same paragraph says wildflowers "bloom in profusion in season", and the page's "From March through June, its pitcher plants and wildflowers bloom" is a fair reading. It is not "only": the same source says blazing star and meadow beauties are "prolific" in the fall. The page does not say "only". Keep it.
- **Drift D1.** The page says "Visitors park and walk its dirt roads." The source does not say "dirt". Its sentence is: "The wildlife biologist in charge of Coastal Preserve Management, urges visitors to park their vehicles and walk on the well-maintained roads to experience the preserve's flora, fauna and a wonderful sense of solitude." "Dirt" came into the row's own wording ("well-kept dirt roads") and the page took it. It appears only in secondary sources (a news feature and a trail site that calls Old Kingston Road a dirt road). It is also an urging, not a description of what visitors do. SCDNR's property data lists Biking "No" and Equestrian "Yes" for the property; neither is on the page, and neither should be added without a source.
- Safe wording: "SCDNR asks visitors to park their vehicles and walk the preserve's well-maintained roads [SCDNR Public Lands property page]." Do not write "dirt".

### Row 106: the main entrance and the drive. Verified

- SCDNR layer 5, PropertyID 505: "Lewis Ocean Bay HP/WMA Entrance 1", EntranceType "Primary", EntranceDescription "ParkingKiosk", PublicAccess "Open", Status "Active", point 33.805794, -78.8909023. OSRM snaps that point 9 m to Old Kingston Road, and the route's last 150 m is Old Kingston Road, entered from International Drive. "Its main entrance, with parking, is off International Drive" matches (the row's "at Old Kingston Road" is not on the page; it is also right).
- OSRM from the Wheatfield Drive connection (-78.86682715, 33.76825692; the end of county road WHEATFIELD DR at INTERNATIONAL DR, row 27): **5.96 minutes, 3.18 miles**, 4,963 m on International Drive then 150 m on Old Kingston Road. "About 6 minutes by car" matches.
- OSRM from the Farmers Rest Drive entrance (-78.875215, 33.754869): **10.16 minutes, 5.05 miles**, by Carolina Forest Boulevard, River Oaks Drive, International Drive and Old Kingston Road. The page does not use it.
- The page names its start: "from The Farm's Wheatfield Drive entrance." WHEATFIELD DR is a county road that runs from International Drive west into The Farm's north-east corner (the Farm's parcels span longitude -78.8779 to -78.8668), so "entrance" is fair for an ungated neighborhood.
- Watch items, not drifts:
  - The entrance is the older preserve's, across International Drive from the 353-acre tract. The release says the tract "will be formally dedicated" and "will be open"; the page cut "plans to open" and says only "the preserve is open". The data layer for the tract is named DEV and lists the tract as PublicAccess "Open" with Hiking and Hunting "Yes". Keep the page to "the preserve" and never say the 353 acres are open.
  - The 6-minute route runs on the same stretch of International Drive that closes on burn days (row 107). The page puts the two facts in neighboring paragraphs. That is enough.

### Row 107: the International Drive closure. Verified. It is a standing practice

Dates of the sources I opened, each a separate burn with a closure:

| Date | Source | What it says |
|---|---|---|
| March 8 to 12, 2021 | SCDNR release, March 5, 2021 | "will necessitate the periodic closure of International Drive to all traffic"; "closure of International Drive, from SC Highway 90 to Ocean Bay Elementary School, for all traffic" |
| late February 2024 | WMBF, February 26, 2024 (the county's reopening notice is dated 2/28/24) | parts of International Drive closed and briefly reopened because of the SCDNR burn |
| February 25, 2025 | MyHorryNews and WBTW, February 24, 2025, citing the county | "closed from Highway 90 to Ocean Bay Elementary School for all traffic"; "could last throughout the week" |
| November 12 to 14, 2025 | MyHorryNews, November 9, 2025 | "will require a temporary road closure on International Drive ... due to smoke"; "from Highway 90 to the area of Ocean Bay Elementary School" |
| February 24 to 26, 2026 | Post and Courier, February 23, 2026, citing the county | closed "from Highway 90 to just west of Red Wolf Trail"; "reopened if or as smoke conditions allow" |

Five closures in five and a half years, run by SCDNR and the S.C. Forestry Commission, so "can close" is correct and it is not one past event. The row's own sources (2021, February 2025, undated November) were right; the November notice is November 2025.

- "On burn days, International Drive can close between SC 90 and Ocean Bay Elementary because of the smoke." The extent matches three of the five notices exactly. The February 2026 county notice names the west end differently ("just west of Red Wolf Trail"). I could not place Red Wolf Trail in the county roads layer by name. A looser phrase is safer: "a section of International Drive, starting at SC 90." This is a note, not a drift: the page says "can".
- "The state manages the preserve with controlled burns" matches the v7 D1 safe wording.
- Do not write that closures last "several days" as a rule. Notices say 3 to 5 days, "periodic", reopening "as smoke conditions allow".

### Row 108: hunting. Verified

S.C. Code of Regulations 123-40, section 1.1, subsection **D. Game Zone 4**, item **19, Lewis Ocean Bay Heritage Preserve WMA** (PDF lines 1534 to 1546; D begins at line 1297 and ends before "GENERAL REGULATIONS"):

- (a) "All deer hunters must sign in and sign out daily and record harvest at the kiosk."
- (b) Archery Deer Hunts: Sept. 15 to Oct. 10. (c) Primitive Weapons Deer Hunts: Oct. 11 to Oct. 20. (d) Still Gun Hunts for Deer: Oct. 21 to Jan. 1.
- (e) Small Game (no fox squirrels): Thanksgiving Day to Mar. 1, Game Zone 4 bag limits. (f) Bear Season: October 17 to October 30. Also spring turkey, Apr. 3 to May 3, Thursday to Saturday only (item 16 of the turkey table).

"Deer season runs from mid-September to January 1" holds: the three deer hunts are back to back, Sept. 15 to Jan. 1, with no gap. It collapses three weapon seasons into one range, which is safe because they are contiguous. "The preserve is a state wildlife management area, and hunting is allowed there in season": the property layer says WildlifeManagementArea "Specific", Hunting "Yes", and the regulation names the "Heritage Preserve WMA". No Sunday hunting is allowed on WMA lands unless specified (2.5) and this item does not specify; it is not on the page.

Corrections to the row (not to the page):

- The row says 123-40 was "last amended by SCSR 48-5 Doc. No. 5250, eff May 24, 2024". That history line belongs to 123-46 (deer depredation permits, PDF line 2138). The history line for **123-40** ends "SCSR 48-5 Doc. No. 5251, eff May 24, 2024; **SCSR 49-5 Doc. No. 5332, eff May 23, 2025**". The PDF was created January 28, 2026, so it holds the text in force before the 2026 season rules.
- The 2026 annual amendment, Document No. 5441 (S. 906, introduced February 10, 2026, "Wildlife Management Area Regulations; Turkey Hunting Rules and Seasons"), repeats item 19 with the same deer dates, so a 2026 change to this preserve is not proposed. The resolution was recommitted to committee on 02/25/26 and I could not find its final action. The seasons for the current deer season (it began September 15, 2026) are therefore the ones above. Recheck at the next May to June amendment (stale-by 2027-06 holds).
- Whether the 353-acre tract is inside the WMA is not in the regulation. The page says "the preserve" and does not claim the tract. The con's offer, "We show you on the map how far any house is from the preserve", is something an agent can do (the county parcel map and the SCDNR layer), with no promised outcome. It lets the reader judge.

## Drive times and distances the changed sentences use (all re-run on OSRM from the Farmers Rest Drive entrance unless stated)

| Page | OSRM | Result |
|---|---|---|
| Preserve entrance, "about 6 minutes", from the Wheatfield Drive entrance | 5.96 min, 3.18 mi | match |
| Recreation Center "about 3 minutes" | 3.32 min, 1.40 mi | match |
| Bike and Run Park "about 4 minutes" | 3.56 min, 1.69 mi | match |
| Tile "Beach 10 min" | 10.09 min, 4.63 mi to MYRTLE BEACH 101 | number matches; wording is D2 |
| Tile "Publix 2 min" | 1.51 min, 0.50 mi | number rounds to 2; wording is D2 |
| School table: Ocean Bay Elementary "About 6 minutes", Middle "About 4", Carolina Forest High "About 15" | 6.09, 4.12, 15.69 min | match (unchanged) |

## Drifts

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 | "Visitors park and walk its dirt roads." (first section) | Row 105. The only primary source says "well-maintained roads" and has SCDNR "urge" visitors to park and walk. "Dirt" appears in secondary sources only. The page also states an urging as what visitors do. | "SCDNR asks visitors to park their vehicles and walk the preserve's well-maintained roads [SCDNR property page]." |
| D2 | Hero tiles "Beach 10 min" and "Publix 2 min" | CRAFT 2: a drive time gives the mode and its start. The tiles lost "About" and "by car", so "10 min" can be read as a walk or a bike ride, and the page's other starts (Wheatfield Drive, Mill Street, the middle of the neighborhood) are not named. The Publix figure is 1.5 minutes rounded up to 2, which "About" covered. Rows 28 and 29. | "About 10 min by car" and "About 2 min by car" [OSRM from the Farmers Rest Drive entrance: 10.1 and 1.5 min]. If the tile is too narrow, "10 min drive" and "2 min drive", with the start in the where-it-is section as now. |
| D3 | "The fee and the flood map are The Farm's strongest points. The pool repair and the parking rule are its main drawbacks." (pros and cons opener) | A ranking with no source ("strongest", "main"), and the page's own numbers contradict it: for townhome and condo buyers the second HOA fee adds about $118 to $148 a month in The Orchards and about $343 to $393 in Planters Point (totals $225 to $255 and $450 to $500 less the $107), more than the pool or the parking rule costs. The opener also omits two of the four cons (the second HOA fee, hunting). "The pool repair" assumes the board will repair; the board has not decided whether to repair or replace (row 65). | Cut the opener, or write a plain list: "The $107 fee, the flood map and no city tax are among its strengths. Among its drawbacks are the pool, the parking rule, a second HOA fee for townhomes and condos, and hunting at the preserve." |
| D4 | "Range III, a section that borders The Farm, is the part the Corps still lists as under investigation." (bombing range) | "The part" reads as the only section still under investigation. The Corps' FUDS data (fiscal year 2024, re-queried today) lists four projects of the former range as "investigation": Range II, Range III, Range IV and the MG/Rifle Range. The MG/Rifle Range lies about 120 m from The Farm's edge but does not touch it (Range III is the only one that touches The Farm; I intersected the five polygons with 461 Farm parcels). "Still" carries a present-day status that the data gives only for fiscal year 2024 (row 89 and v6 D10: tie the status to the data's year). | "Range III, a section that borders The Farm, is listed by the Corps as under investigation [Corps FUDS data, fiscal year 2024]. It touches some of The Farm's open land, but no home lot." |
| D5 | End box: "We will look for the homes for sale that fit and show you any you like." | A promised outcome. An agent can look for homes and ask to show them. "Show you any you like" says every home the reader likes can be shown, and a pending sale, a tenant-occupied home or a seller's limit can stop a showing. ("Look for" is fine; v7's note on the earlier "line up ... and show them to you" was an owner watch item and this is the same sentence reworked.) | "We will look for the homes for sale that fit and set up showings for the ones you choose." |

## Units that match (24 of 29)

Head and tiles: h1em "State-bought Venus flytrap habitat along its north edge." (release: the tract "includes critical habitat for the ... Venus flytrap"; the parcel is on The Farm's north edge, v7); tile "HOA fee $107/mo" (row 5; the monthly fee is $107).

First section:

- "Conway Medical Center planned a $160 million healthcare facility on the 353 acres along The Farm's north edge." Release: "the sale of this land, which was originally intended for a $160-million healthcare facility", on "353 acres"; "healthcare facility" is the release's word (v6 D6b).
- "In 2025, the state bought the land instead, for the Lewis Ocean Bay Heritage Preserve." Release June 10, 2025; county parcel 39600000001 sale date 2025-02-07 (v7). "For the preserve": the release says the tract "will be formally dedicated as part of" it.
- "the new land holds habitat for them too" and the March to June bloom sentence (row 105 above).
- "The preserve is open in daylight all year." and the entrance and 6-minute sentence (rows 105 and 106).
- "The state manages the preserve with controlled burns." (v7 D1 applied) and "On burn days, International Drive can close ... because of the smoke." (row 107).

A normal day:

- "The county's Carolina Forest Recreation Center has a rock climbing wall and a full gym, about 3 minutes by car from the Farmers Rest Drive entrance" (rows 80, 101; 3.32 min). The county page says "full size gymnasium" and "a rock climbing wall". "The county library shares its campus": parcel 39700000010 holds both addresses, 34.03 acres (row 101).
- "The county's Bike and Run Park has 7 miles of mountain bike and hiking trails, about 4 minutes by car from the same entrance." The county parks page, re-read today: "It includes 7 miles of mountain biking and hiking trails on 70 acres" (3.56 min).
- "Its parking area is a trailhead on the East Coast Greenway." The v7 D2 safe wording, exactly. The county page says "first official East Coast Greenway trailhead in the State"; the page now keeps only the part the one source supports.
- "Back in The Farm, owners have two pools, open from mid-April to mid-October, plus a basketball court and a playground." Rows 60 to 62: April 15 to October 15; basketball court and playground in the 2024 amenity rules. The HOA events sentence is unchanged (row 68, v7).

Homes and schools:

- "On any house you tour, we check how old the roof and the air conditioner are." A promise an agent can keep (see Promises).
- "Both Ocean Bay schools are at The Farm's north-east edge, by Wheatfield Drive." Row 38: the school points (-78.8659, 33.7664) and (-78.8658, 33.7682) are at the end of WHEATFIELD DR (-78.8668, 33.7683). Unchanged text; it now stands without the sentence that said every home has the same three schools. The short answer and the table carry that fact (row 36).
- **School-map caption**: "The Farm, outlined in orange, sits inside the blue area zoned for the three schools." I re-ran the three 2025-2026 zone layers and intersected them: the area is 850.54 square micro-degrees (row 96 says 850.5), and **all 461 Farm parcels (by legal description) fall entirely inside it, 100 percent**. The image shows one blue area, the orange outline inside it and the label "Zoned for all three schools"; the floating high school note is gone, as the writer said. The caption matches `data/photos.json`.

Costs:

- "On an ordinary sale, the buyer pays the HOA a one-time $250 transfer fee at closing." The v7 D4 safe wording; row 15 ("the purchaser of the Unit shall pay ... $250"; carve-outs for involuntary, estate and no-payment family transfers, so "ordinary sale" is right).
- "The fee also covers landscaping and the ponds, trash pickup and the pools. It does not include internet." The v7 D3 safe wording (row 10 and row 11).

Pros and cons and HOA cards:

- The hunting con: "The preserve is a state wildlife management area, and hunting is allowed there in season. Deer season runs from mid-September to January 1." (row 108).
- "We read the board's latest minutes on the pool for you." The v6/v7 wording without "before you make an offer".
- Card "Private pools": "No lot may have its own swimming pool. Hot tubs need the HOA committee's approval." Row 54: "No swimming pools ... upon any Unit; provided however, that jacuzzis or personal spas may be maintained upon a Unit with the prior written approval of the Architectural Review Committee." The card drops "written" and "Architectural Review", which is safe at card length.
- Card "The HOA's pools": "Open April 15 to October 15, with no lifeguard. Each home can bring up to six guests, with the owner there." Row 61; the six-guest rule is row 63.
- The cards Renting, Fences and sheds, Parking and boats and Pets are unchanged text. The intro "The HOA rules that change daily life most are in the cards below" is the writer's judgment. It is a soft superlative with no source; I did not count it as a drift because "in the cards below" tells the reader it is the writer's selection, but a plainer "The main HOA rules are in the cards below" would not rank them.

## Promises ("we check", "we read", "we show", "we will look for")

All of these are actions an agent can do, with no promised outcome, except the one in D5:

- "On any house you tour, we check how old the roof and the air conditioner are": ask the listing side, read the disclosure and the permits.
- "We check the current zones for any home you like": the district's attendance zone lookup (row 36).
- "We read the board's latest minutes on the pool for you" and "We read the HOA's rules and latest minutes with you, too": the HOA posts signed minutes and the rules.
- "We check that the garage and driveway fit all your cars": a measurement and a visit.
- "We show you both fees side by side for any townhome or condo": rows 6 to 9 (the second-HOA totals come from listings).
- "We show you on the map how far any house is from the preserve": the county parcel layer and SCDNR's property layer give it. It states a distance; it does not promise anything about hunting.
- "We check the Corps' map for every lot we show you": the Corps' FUDS map data. "Every lot we show you" is a bigger scope than the earlier "any lot you like", and still an action.
- The top bar, "Tell us your price range, and we will send you the homes for sale in The Farm": a search and a send. The owner may want "the homes for sale that fit". Unchanged from v7.
- The end box: D5.

## Struck entries added

Five, in `the-farm-struck.json`: D1 (row 105), D2 (rows 28 and 29), D3 (pros and cons opener), D4 (row 89) and D5 (end box). `node tools/struck-check.test.js`: "all controls pass". `--strict` on the preview: before the entries the Farm page was quiet (44 patterns); after them, 7 phrases fire (5 entries), and each goes quiet on its approved wording.

## Status

- Row 105: **verified with corrected wording (v8)**. Row 106: **verified**. Row 107: **verified**. Row 108: **verified**.
- New ledger row 109, "rewrite check (v8)": **wrong in part (v8)**.
