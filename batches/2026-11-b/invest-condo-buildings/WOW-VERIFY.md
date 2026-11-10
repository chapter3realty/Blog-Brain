# Wow rows 43 to 79: verifier's check (2026-11-10)

Verifier: an independent helper that did none of the research for rows 43 to 79. Every source was opened again on 2026-11-10, not read from the researchers' saves. Measurements were re-run with my own scripts.

My saves and scripts: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/verify-wow/` (`pages/` holds the pages as read today, `scripts/pointq.py`, `scripts/floors.py`, `scripts/near_parcels.py`, `county-at-dof-points.txt`). Scratch only; nothing there goes on the page.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 43, 44, 45, 46, 47, 48, 49, 53, 54, 57, 58, 59, 61, 62, 63, 65, 66, 67, 69, 70, 71, 73, 74, 76, 77, 78 | 26 |
| CORRECTED | 52, 55, 60, 64, 68, 72, 75, 79 | 8 |
| STRUCK | 50 | 1 |
| BLOCKED (still) | 51, 56 | 2 |

## How the measures were re-run

**FAA heights.** I downloaded https://aeronav.faa.gov/Obst_Data/DAILY_DOF_DAT.ZIP again. Its currency date is now 11/08/26 (the researchers had 11/02/26). All 11 lines the rows quote are in the new file, unchanged. The accuracy codes matter more than the rows said: Margate (45-002357) and Royale Palms (45-002668) are code **5 D**, which is within 500 ft across and within 50 ft up. Bay View (45-054088) is 4 D.

**Which building each FAA point sits on.** I queried Horry County parcel layer 24 at each FAA point with a 1 m buffer (the researchers used 10 m to 30 m). Four points fall where the rows said. Three do not:

| FAA line | Height | Parcel at the point (1 m) | Row said | Result |
|---|---|---|---|---|
| 45-000740 | 236 ft, 3C | THE RENAISSANCE TOWER (Oceanfront Spa at 10 m) | Renaissance Tower | holds (both are Myrtle Beach Resort) |
| 45-020957 | 166 ft, 1A | PINNACLE OCEANFRT TOWER | Pinnacle | holds |
| 45-020960 | 152 ft, 1A | BLUEWATER VILLAS | Bluewater | holds (not used) |
| 45-000725 | 241 ft, 1A | THE PALACE | The Palace | holds |
| 45-000741 | 205 ft, 3C | BEACH COLONY RESORT I and II | Beach Colony | holds, but see row 55 |
| 45-002357 | 335 ft, 5D | MARGATE TOWER HPR PH I | Margate | holds |
| **45-054088** | 236 ft, 4D | **HOTEL SEC; LTS 1 THRU 3 BLK 3** (a hotel parcel); Bay View's units only within 77 m | Bay View | **fails** |
| **45-002668** | 255 ft, 5D | **NORTH HAMPTON; COMMON AREA**; Royale Palms only within 40 m | Royale Palms | ties to Royale Palms only through a second source (row 65) |
| **45-020539** | 180 ft, 1A | **THE TOWER** (131 units), not LODGE AT OCEAN CREEK, the page's Ocean Creek regime | Ocean Creek | **fails** |

**A second source for the heights.** The Post and Courier's table "Tallest buildings in Myrtle Beach" (Brandon Lockett, June 29, 2021), https://www.postandcourier.com/tallest-buildings-in-myrtle-beach/table_2a835b54-d85f-11eb-8c90-5f0e102e8b9f.html, ranks: 1 Margate Tower, 29 floors, 329 feet, 2004; 2 Ocean 22, 257 feet; 3 Royale Palms Condominiums, 24 floors, 256 feet, 2007; 5 The Palace Hotel, 23 floors, 227 feet; 11 The Myrtle Beach Resort, 22 floors, "≈246 feet"; 12 Beach Colony Resort Tower I, 22 floors, "≈246 feet"; 13 Brighton Tower, 21 floors, "≈235 feet". Its top 20 runs down to about 224 feet and does not list Bay View. Wikipedia's South Carolina list also gives Margate 329 feet, 29 floors, "Tallest building in Myrtle Beach", and the Hilton Ocean Grand Enclaves (2019) 260 feet.

**Floors.** I re-ran the unit-number count on layer 24 (`floors.py`). Margate 29, Royale Palms 24, SeaWatch north tower 20, North Beach Towers 19 (318 numbered units, 18 "PH" units), Beach Cove 16, Avista both phases 17, Ocean Reef north tower 17: all match. Brighton 21 matches, but floors 20 and 21 are units numbered P2001 to P2110 inside the same regime "BRIGHTON KINGSTON PLANT", not a second regime. Bay Watch does not match: its phase I units are numbered "1-0201" to "1-1910", so its top floor is 19, not 18. North Hampton, a Kingston tower beside Royale Palms, has 125 parcels with units to floor 18.

**Distances.** Myrtle Beach Resort's listing point to the edge of the county's state park parcel ("M B STATE PARK", 288 acres): 1.03 miles, straight line. Sands Ocean Club's listing point to the edge of the 216.5-acre parcel that holds the Dunes Golf and Beach Club's point: 0.20 mile (0.45 mile to the club's point). Camelot to Pier 14 0.42 mile and to the SkyWheel 0.54 mile, recomputed from the points.

## Row by row

| # | Status | What I found |
|---|---|---|
| 43 | VERIFIED | DOF line matches. The point is inside the Renaissance Tower parcel; the Oceanfront Spa building is within 10 m, and the accuracy is 100 ft. Say "about 236 feet". The Post and Courier estimates "The Myrtle Beach Resort" at about 246 feet, 22 floors, which agrees within the error. "Southernmost tower on this page" holds: its point is the farthest south of the 36 building points. "More than a mile south of the state park" holds (1.03 miles to the park parcel; already the approved wording in the struck list). |
| 44 | VERIFIED | All quotes on the live amenities and home pages. |
| 45 | VERIFIED | DOF line matches; point inside the Pinnacle footprint; accuracy 1A. |
| 46 | VERIFIED | Quote on the live page; the page's title is "Bluewater Resort", canonical www.bluewaterresort.com, footer "Hosteeva". I accept it as the resort's on-site rental operator speaking for the resort's own facilities. The 152 ft line is verified but not for the page. |
| 47 | VERIFIED | DOF line matches; point inside the Palace footprint; laundry quote on the live page. The Post and Courier gives 227 feet and 23 floors: its 23 floors agrees with "floors numbered up to 23". Keep the FAA figure as "241 feet" or "about 240 feet"; never "23 stories" (the 13th may be skipped). |
| 48 | VERIFIED | All three quotes live. Passes are for "a Palace Resort guest". |
| 49 | VERIFIED | All quotes live: 17 water features, 9,800 sq ft water park, heated 300-foot indoor lazy river open year-round, 300-foot seasonal outdoor lazy river. |
| 50 | STRUCK | The only source is the operator's June 2023 release on Hotel Online. seamist.com is still a blank "/lander" redirect. A search found no current source that the Wahoo Waterpark is open, and booking listings carry notices of pool closures. Use the fallback (row 7). |
| 51 | BLOCKED | coral-beach.com reset the connection again (2026-11-10, both host names); the Internet Archive was unreachable from this session. Use the fallback. |
| 52 | CORRECTED | Boardwalk, Starbucks and indoor lazy river quotes are live and hold. The height fails: the FAA point is on a hotel parcel ("HOTEL SEC"), Bay View's own units are only within 77 m, the accuracy is 250 ft across and 50 ft up, and the Post and Courier's top 20 (to about 224 feet) does not list Bay View. Never print a height for Bay View. |
| 53 | VERIFIED | 0.42 and 0.54 mile recomputed. "About a ten-minute walk" is fair for 0.42 mile straight line. Pier 14 as the Boardwalk's north end: Wikipedia ("from the Pier 14 at 14th Avenue North to the 2nd Avenue Pier") and Visit Myrtle Beach (quoted by a search; its page refused the request, 403) agree. The city's page was not found (404). |
| 54 | VERIFIED | "over 40 years" live; the 200-foot outdoor and indoor lazy rivers live (row 33). Sea Captain's: "built in 1930 by Henry Taylor"; "oceanfront beach cottage"; "1954 ... Howard's Manor". |
| 55 | CORRECTED | The lawn and hammocks quotes are live and hold. The height is cut: the FAA gives 205 ft (within 20 ft), and the Post and Courier estimates Beach Colony Tower I at about 246 feet, 22 floors. Two sources 40 feet apart: print no height. |
| 56 | BLOCKED | dunesvillage.com returned 403 to me too (both URLs). Use the fallback. |
| 57 | VERIFIED | All quotes live. "One of the only hotels with a rooftop pool" stays out. |
| 58 | VERIFIED | longbayresort.com now redirects to https://www.grandecaymanresort.com/amenities/; the text is the same. The slide line now reads "3 Story Water Slide - Closed for the Winter season as of November 1st": say the slide is seasonal. 720 feet is the whole resort, as the row says. |
| 59 | VERIFIED | Both quotes live. The 7th-floor indoor pool is "at the main Caravelle Resort building", not in each of the nine buildings. |
| 60 | CORRECTED | DOF line matches, the point is inside Margate's footprint, and it is the highest building line of the 67 in the strip box (next: 300 ft, 45-000344, on the Maisons Sur Mer parcels). But the accuracy is 50 ft up, so "335 feet" is too exact; the Post and Courier gives 329. Two sources agree it is the tallest building in Myrtle Beach (Post and Courier, 2021, rank 1; FAA file, 2026). Only the FAA file covers the whole strip, so "the tallest on the Grand Strand" has one source. Safe wording: "Margate Tower rises about 330 feet, the tallest building in Myrtle Beach [FAA obstacle file, 335 ft within 50 ft, 2026; Post and Courier list, 329 ft, 2021]". The ±500 ft position takes in Brighton's footprint edge, but Brighton has 21 floors and the Post and Courier puts it near 235 feet, so the 335 ft line is Margate. |
| 61 | VERIFIED | 249 numbered units, floors 1 to 29, no 13th; 3 other parcels (two "L" units, one commercial) and one common area. |
| 62 | VERIFIED | All quotes live: "more than a half-mile of beach" (home), "within the 157-acre Kingston Resorts" (Royale Palms page), the 1960s and Lake Arrowhead Campground, "built around beautiful trees" (About), Arcadian Shores "across the street" (home). The 157 acres and the half mile are Kingston Resorts' figures for its own grounds; lakes appear only as "a lodge next to the lake, or a villa next to a serene lake". |
| 63 | VERIFIED | Top floor 21. Method note: floors 20 and 21 are the P2001 to P2110 units of the same regime, not a regime cut short. |
| 64 | CORRECTED | 144 units (row 5) and the Embassy Suites (row 27) hold. "The smallest Kingston tower" is wrong: North Hampton, a Kingston tower beside Royale Palms, has 125 parcels with units to floor 18. Safe wording: "South Hampton has 144 units, fewer than Margate or Brighton [county parcels]". |
| 65 | VERIFIED | The FAA point falls on North Hampton's common-area parcel, with Royale Palms 40 m away, and the accuracy is 500 ft. The Post and Courier lists Royale Palms at 256 feet and 24 floors (2007), and North Hampton has units only to floor 18, so the 255 ft line is Royale Palms. Two sources agree: "about 255 feet". 24th floor holds (180 numbered units, no 13th). |
| 66 | VERIFIED | Quotes live. The amenity list is on the page that rents Royale Palms condos; say it as Kingston Resorts' list for its guests there. The row 20 struck entry stays quiet on that wording only because the sentence names the Hilton; keep it tied to rental guests. |
| 67 | VERIFIED | Quotes live (19 water features, six oceanfront pools, two 225′ lazy rivers, Ten Hot Tubs, seasonal tiki bar and grill, fire pit, Loggerhead Beach Playground). North tower to floor 20 holds; only 2 units are on 20. |
| 68 | CORRECTED | The resort quotes hold (secluded beachfront, trails, tennis and pickleball, 13 water features, 57 acres). The height fails: the FAA point is on the regime "THE TOWER" (131 units), not "LODGE AT OCEAN CREEK", the page's Ocean Creek regime. Print no height for Ocean Creek. |
| 69 | VERIFIED | The 7.5-acre island and 2.5-acre water escape quotes are live; footer 719 North Beach Blvd. Suite 3. The tie: the resort's own property map (https://www.northbeachrentals.com/wp-content/uploads/sites/11/2026/01/north-beach-property-map-012026.pdf) shows "TOWERS", "INDIGO TOWER", "JASMINE TOWER" and "Towers Homeowner Parking" on North Beach Boulevard, and MLS listing pages at 100 North Beach Blvd describe the Indigo and Jasmine towers of North Beach Resort and Villas. The map does not print "100". The tie holds. Keep the resort's 7.5 acres, not the 60 or 62 acres in sales copy. |
| 70 | VERIFIED | 318 numbered units, floors 2 to 19 (no 13th), 18 "PH" parcels. The PH parcels carry no floor, and one listing is "UNIT 16BPH", so never say the penthouses are above the 19th floor. |
| 71 | VERIFIED | Quotes live; top floor 16 (3 units). "The resort says" stays. |
| 72 | CORRECTED | Towers, Crescent Beach, pools, lazy rivers, Fishtails Beach Bar and the 6,500 sq ft hold (Vacasa's page at baywatchresort.com). The top floor is 19, not 18: phase I units run 1-0201 to 1-1910. |
| 73 | VERIFIED | Text matches. The bill page shows S. 1271 "Introduced and adopted" on 04/17/24, so "the state Senate" may be said. The resolution says visitors came "to dance the night away at beach music clubs on Main Street and Ocean Drive" in the 1940s; it does not say the shag was first danced there then. |
| 74 | VERIFIED | Quote live on both pages; "Just blocks from Main Street" live; 17th floor holds. |
| 75 | CORRECTED | The pier's own words are live, but "the largest tiger shark ever caught from land in the U.S." and "world record" rest on the pier alone (lesson B53). The publisher's own list, SCDNR State Saltwater Game Fish Records (https://dnr.sc.gov/fish/saltrecs/records.html), reads "Shark, Tiger 1,780-0 Cherry Grove/1964 W. Maxwell". Safe wording: "A 1,780-pound tiger shark caught at Cherry Grove in 1964 is still the South Carolina record [SCDNR state records]; the pier says it was caught from the pier." |
| 76 | VERIFIED | Quotes live: rooftop lazy river, rooftop pools, marshlands and wood ducks, inlet-view condos, "just steps from the Cherry Grove Pier". |
| 77 | VERIFIED | "Our $15+ Million Dollar Renovation is COMPLETE", Shipwreck Water Park, tiki men, Lagoon Lunge, indoor lazy river: live. No date is given, so not "just finished". Top floor 17 holds. |
| 78 | VERIFIED | "130,000 gallons", "eight distinct buildings", "A large oceanfront lazy river" (Sands Resorts page), Neptune Blacklight Indoor Mini Golf: live. Admission is "included when you book through Sands Resorts": guests, not owners. Nothing says the buildings across the street are cheaper to buy. |
| 79 | CORRECTED | "A Beach Oasis Since 1948" and "PROUD HOST OF THE PGA TOUR 2026 ONEflight MYRTLE BEACH CLASSIC" live; the club also says it "served as the host venue for the 2026" Classic. The tournament page says it returns May 13-16, 2027, and does not name the 2027 course in its text. Say the course hosted the 2026 Classic, not that the Tour "plays" there. The club's page speaks of "members and their guests"; "private" is fair but say nothing about who may play. One distance: under a quarter mile from the club's grounds (0.20 mile, listing point to the club's parcel edge), the wording the struck list already approves. |

## Struck wording added

Fifteen entries, for rows 50, 52, 55, 60 (two), 62, 64, 68, 70, 72, 73, 75, 77, 78 and 79, in `batches/2026-11-b/facts/invest-condo-buildings-struck.json` (now 40 entries). Each new entry fires on its own struck wording, and no approved wording on the list fires, including eight approved wow sentences tried as quiet controls (checked with `tools/struck-check.js`'s `compile` and `check`; `node tools/struck-check.test.js` prints "all controls pass").

Found on the way, not mine to change: two older row 5 entries do not fire on their own struck wording, because the pattern puts the name before the number and the sentence puts it after ("The county records 163 condo units at Ocean Creek Resort"; the same for Myrtle Beach Resort and 244). A pattern with both orders would fix them.

## Not to publish at all

- Any height for Bay View (row 52), Ocean Creek (row 68) or Beach Colony (row 55).
- The Wahoo Waterpark at Sea Mist (row 50).
- "The tallest tower on the Grand Strand" (row 60): say Myrtle Beach.
- "The largest tiger shark ever caught from land in the U.S." in our voice (row 75).
- Rows 51 and 56 until someone reads coral-beach.com and dunesvillage.com.
