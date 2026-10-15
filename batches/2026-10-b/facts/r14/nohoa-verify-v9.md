# No-HOA homes, rows 175 to 178 and rewrite check v9 (round 14f, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before this task. I read `prompts/verifier.md`, `CLAUDE.md`, lessons B45 to B52 and the v8 notes (`nohoa-verify-v8.md`), then checked rows 175 to 178 of `batches/2026-10-b/facts/no-hoa-facts.md` and the page `/buyers/no-hoa-homes/` against sources I opened myself on 2026-10-15. I did not edit the spec. I did not open any Zillow page. I did not clone anything.

**Which text I read.** `batches/2026-10-b/specs/no-hoa-homes.js` at commit `50a22c0` ("round 14f rewrite"), md5 `3dcfab7c0e17c216edcfd442d7008323`. The shared checkout moved while I worked: HEAD is now `eeed521` and the working tree holds a later version (round 14i, md5 `f2fde883...`; the preview was rebuilt at 04:34 UTC). Every verdict below covers the 50a22c0 wording. Section "After 50a22c0" says what the later version changed and which of my drifts are still on it. The later version has new sentences that nobody has checked (a v10 task).

The diff you named, `e373b57` to `50a22c0`, is small (10 lines: the map ratio and CSS, the Myrtle Heights coquina sentence, the Crescent Beach heading and surf sentence, the Waties Island sentence, the Surfside sidewalk sentence, the Garden City trade-off line and the Murrells Inlet FAQ). I read those. Because every lead you named (Barefoot Landing docks, Socastee, Downtown, Garden City, Loris, Aynor, Little River, the cards, Vereen) is already in `e373b57` and is new compared with the 14e page v8 checked (`52c2d3d`), I also compared the 50a22c0 text with 14e sentence by sentence (a script listed 121 sentences that are new or changed) and read each fact-bearing one.

## Result

- **Rows 175 to 178:** 175 verified with corrected wording; 176 verified with corrected wording; 177 verified, two counts unverifiable (not on the page); 178 wrong in part (one claim, Waties Island access, and two measures, Little River's half mile and Vereen's trails). Counts: verified 1 (177), verified with corrected wording 2 (175, 176), wrong in part 1 (178).
- **The count that matched:** the Murrells Inlet measure. I fetched each listing page's map point myself (the site's own realgeeks pages, not Zillow) for the 137 detached houses in MLS regions 27b, 40a, 28b and 28c, and the 73 in 26a and 27a. **13 houses in regions 27b and 40a lie within 1 mile of the Stanley Drive landing (292 Stanley Dr, 33.5784, -79.0131), and 12 of the 13 list no HOA fee: 12 of 13 matches.** The median list price of the 12 is $822,000 (matches; page "about $820,000"). Flood: 7 of 12 in zone AE (4 by the Horry County layer 19, 3 by FEMA layer 28): matches. Floating dock: 3 of 12, and the remarks of all three say "private ... floating dock": matches. Built 1968 to 1992: 7 of 12: matches. Lot "0.242, 7 matched": **does not match** (6 county parcels are matched in `no-hoa-lots.json`, median 0.2595; the page's "about a quarter acre" still holds on every measure, see Step 1).
- **Page units:** 121 new or changed sentences read against sources, about 95 fact units. **13 drift: 5 must fix, 8 tighten** (table at the end). 13 struck entries added.
- **v8 must-fix items (N3, N6, N12, N20, N21, N24, N26, N28, N29, N34, N35, N40, N42):** 9 fixed or gone with no new drift (N3, N12, N20, N24, N26, N28, N34, N35, N42). Four were fixed with a new drift beside them: **N6** (the coquina walls were moved onto the porches, P3), **N21** (v8's own supported wording said "Friday and Saturday afternoons"; Friday's music is 5 to 8 p.m., P2), **N29** (the "no public access" claim was swapped for "open to the public by kayak", which Coastal Carolina University's own page contradicts, P4), **N40** ("Garden City grew up in the 1950s" for "did not develop until the 1950s", P13).
- **The Murrells Inlet entry:** the measure, the times (4 and 6 minutes), the dock line, the oysters line, the charter fleet line, the Brookgreen history and "not a town, part is in Georgetown County" hold. Brookgreen "about 20 minutes" is to the middle of a 9,100-acre property; the visitor roads are 16 minutes (P11). The heading "creek lots" fits 5 of 12 houses (P12).
- **Share chips:** 16 of 16 match the area file at 90 / 85 / 60 / 50.
- **Photos:** neither "200" nor "3701" is readable. **The Little River aerial has no label on Mineola Avenue: its two labels are "Salt marsh" and "Intracoastal Waterway", and Mineola Avenue is outside the frame.**
- **Struck check** (`node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`), no-HOA: before my edit, on the 04:15 build of 50a22c0, **no-hoa-homes (179 patterns): no struck wording.** After my 14 entries: 193 patterns; all 14 fire on the 50a22c0 text; on the 04:34 build 11 of them still fire. `node tools/struck-check.test.js`: all controls pass.
- **Nothing should be dropped from the ledger.** One claim should be cut from the page: "open to the public by kayak" (P4).

## Sources I opened myself (2026-10-15)

- Listing pages, `mbcoastalhomes.realgeeks.com/property/<MLS#>/` for 210 houses (schema geo, Lot Location, Year Built, Acres, remarks). Search page `?city=Galivants+Ferry&type=res` ("61 Homes for Sale").
- Horry County GIS: parcels (layer 24), addresses (layer 22), flood zones (layer 19). FEMA NFHL layer 28. Horry County boat landings page and parks page; beach accesses page.
- OSRM public router (every drive is mine, run today), routing.openstreetmap.de foot, Nominatim.
- South Carolina Encyclopedia: Murrells Inlet, Brookgreen Gardens, North Myrtle Beach, Chicken bog. marshwalk.com. The Pier at Garden City. Huntington Beach State Park. SC Code Title 1 ch. 1 and Title 53 ch. 3.
- City of North Myrtle Beach: surfing rules, 41st Avenue South pocket park, Central Park, 18th and Edge pocket park, McLean Park, Parking Registration, Cherry Grove Park and Boat Ramp. Barefoot Landing day docking and events (WebFetch). Fat Harold's, Hoskins, North Myrtle Beach Area Historical Museum.
- City of Myrtle Beach: Hot Summer Nights news (R2620), Withers Swash trail photo page, parking meters and decal page. Hurricane Juel's, Blue Crab Festival, ShrimpFest (own sites). SC DNR "The Recreational Fishery in Little River" (PDF, read in text) and artificial reefs list.
- Conway: Tree City release (R144), Waccamaw River Blue Trail booklet, Riverfest (WebFetch). Loris: City About page. Aynor town community page. Visit Myrtle Beach Waties Island guide (WebFetch), Coastal Carolina University research page (a request link for access to the reserve), two web searches on Waties Island.
- **Not opened or blocked:** Zillow (not touched). brookgreen.org (403), Wikipedia API (429), Overpass (reset), Georgetown County GIS (unreachable), conwayriverfest.com directly (script check; WebFetch read it), the CCU reserve page `coastal.edu/.../annetilghmanboycecoastalreservewatiesisland` (404 to my fetch; the directory page that links the request form opened).

## The four rows

| Row | Verdict | What decides it |
|---|---|---|
| 175 | **verified with corrected wording** | 12 of 13, $822,000, 7 of 12 flood, 7 of 12 built 1968 to 1992, 12 of 12 "East of Bus 17": all reproduced from the listing pages and the county and FEMA layers. The ledger's lot figures are off: 6 matched parcels (not 7), median 0.26 acre (not 0.242). Two sets the row does not mention: 3 more Murrells Inlet houses lie within 1 mile west of Business 17 (regions 28b, 28c; 1 of 3 no fee), and 8 houses in region 27a (Garden City's area, all east of Business 17, all no fee) are within 1 mile. "Almost every house" holds on all three sets (21 of 24 with them). Heading "creek lots" fits 5 of 12 (P12). |
| 176 | **verified with corrected wording** | OSRM from the middle of the 12 houses (33.5735, -79.0183): landing 4.25 min, MarshWalk 6.28 min. Brookgreen 18.67 min is to the garden's centre point; the visitor roads (William Alston Loop) are 16.2 min and the Brookgreen Drive turn is 12.4 (P11). Floating dock 3 of 12, all three remarks say "private ... floating dock". The oyster, charter fleet, Brookgreen history and MarshWalk wording match the sources (Step 1). |
| 177 | **verified; two counts unverifiable** | From the data file: 27b 13 of 64, 40a 23 of 67, Murrells Inlet 60 of 215, Conway 21e 13 of 17, Myrtle Beach 16e 19 of 31, Forestbrook 1 of 16, 27a 41 of 55 all reproduce. Galivants Ferry "61 Homes for Sale" and the "Large lots with No HOA, No Deed Restrictions!" remark are on the site; I did not page through the 61 for 41, 19 and 22. Briarcliffe "2 of 10" and Arcadian "3 of 12" I could not reproduce (the file's neighborhood fields give other counts); nothing on the page uses them. |
| 178 | **wrong in part** | Right: Plantation Point cut; Pine Lakes trash $33.93 a month, weekly (city page: one garbage cart, one recycling cart, bulk and yard waste); Crescent Beach 0.175 acre = 7,623 sq ft; Socastee lowest of the 16 (median $249,900; next is Conway $287,000); Loris two accessory buildings, garage or carport included (row 141); the flood lines (Windy Hill 9 of 18, Socastee 4 of 11, Garden City 15 of 18, Murrells Inlet 7 of 12); Little River streets (Mineola, Ellis, McCorsley, Bayshore, Bessent, Riverbrook, from lots.json). Wrong: Waties Island "open to the public by kayak" (P4). Vereen: the page does not use row 102's wording (P6). The Little River "within half a mile of the docks on Mineola Avenue" is not in row 178 but rests on row 124, whose point is not on Mineola Avenue (P5). |

## Step 1: the Murrells Inlet entry, claim by claim

- **"12 of 13 listings within 1 mile of the Stanley Drive landing."** Reproduced. The county's list gives "Stanley Drive Landing | 292 Stanley Dr, Garden City 29576 | Atlantic Ocean" (the county puts it in Garden City; the page says the landing is at the north end of Murrells Inlet, which the map points support). The 13: 2620104, 2620203, 2619248, 2605257, 2621585, 2616244, 2606223, 2620142 (Horry) and 2614966, 2621659, 2610388, 2621457, 2619706 (Georgetown), 0.21 to 0.92 mile straight line. The one with a fee is 17 Carson Creek Dr (Belle Vue, $221 a month). I could not read the map point of 2617440 (no geo on its page); it is in region 27b or 40a and not in the 13.
- **Map points against the county address layer.** The 8 Horry houses sit on parcels whose legal descriptions are Stanley, Mt Gilead, Mt Gilead Lake and Stanley Cove, so the listing points fall in the right subdivisions. For the 5 Georgetown houses I have no county layer (Georgetown's GIS is unreachable from here); their points agree with their street names and Lot Location "East of Bus 17".
- **Median $822,000, 12 prices:** 415,000; 449,800; 565,000; 599,000; 649,000; 649,000; 995,000; 999,000; 1,450,000; 1,999,900; 2,495,000; 3,100,000. Median (649,000 + 995,000) / 2 = 822,000. "About $820,000" holds.
- **Flood 7 of 12.** Horry layer 19 at the listing points: AE for 2619248, 2605257, 2621585, 2606223; 0.2 percent for 2616244 and 2620142; none for 2620104 and 2620203. FEMA layer 28: AE for 2614966, 2621659, 2621457; X (0.2 percent) for 2619706. "More than half" (58 percent) holds. A listing point is not the building; a lender decides from the building's elevation certificate. The page says "in a high-risk flood zone", which is what AE means.
- **Years 1968 to 1992, 7 of 12 (B52).** The read is all 12 listings (12 of 12 with a year): 2019, 1999, 2024, 1984, 1976, 1972, 1984, 1988, 1968, 1992, 2026, 2026. Seven lie in 1968 to 1992 (58 percent). "Most" holds, narrowly. Five are newer.
- **Lots "about a quarter acre" (B52).** County parcel areas (layer 24, Shape.STArea / 43,560) for the 8 Horry houses: 0.173, 0.214, 0.242, 0.271 (0.284 by lots.json's PIN), 0.277, 0.283, 0.302, 0.626. The ledger says 7 matched with median 0.242; `no-hoa-lots.json` matches 6 (the two First Avenue South houses have no PIN), median 0.26. The agents' own Acres field for all 12: 0.13 to 0.63, median 0.28, with 8 of 12 between 0.18 and 0.30 and three at 0.62 or 0.63. "About a quarter acre" holds on all three reads. Count read: 8 county parcels plus 12 listing fields, never a first page.
- **"Several houses on the market lately have their own floating dock."** 2605257 "The private fixed and floating dock", 2606223 "your private floating dock and pier head", 2619248 "your private floating dock". Three of 12; one more (2621585) has a dock and lift that is not floating. "Several" is three, the low edge; "lately" is the 2026-10-13 snapshot. Holds.
- **Drive times** (OSRM, no traffic): from the middle of the 12 houses the landing is 4.25 min (1.16 mi). From each house: 1.3 to 4.9 min, median 3.8. "About 4" holds. MarshWalk (OSM way 427575453): 6.28 min from the middle; from each house 3.1 to 7.4, median 5.9. "About 6" holds. Brookgreen: see P11.
- **"People first came to the inlet for oyster roasts and fried shore dinners, and seafood restaurants followed."** SC Encyclopedia, Murrells Inlet: "throughout the twentieth century they did just that. At first they came to down-home, hole-in-the-table oyster roasts and fried shore dinners put on by Murrells Inlet's 'founding families'" and "local seafood restaurants benefited". It is row 90's safe wording. One reading to watch: the same entry says that by the close of the nineteenth century people from inland towns had begun a summer colony on the creekfront, so "first" means first for the seafood, in the twentieth century. Not struck: row 90's own entry uses this sentence as its approved wording.
- **"In the twentieth century, a fleet of charter and party boats grew up at the inlet, and its captains took visiting anglers offshore."** Matches "A growing fleet of charter and party boats arose, with inlet captains taking visiting anglers offshore", inside the twentieth-century account. Row 107's safe wording, word for word.
- **MarshWalk "a half-mile wooden boardwalk along the salt marsh with a row of restaurants."** marshwalk.com: "a half-mile wooden boardwalk along a natural saltwater estuary"; its menu lists Bovine's, The Claw House, Creek Ratz, Dead Dog Saloon, Drunken Jack's, Wahoo's, The Wicked Tuna. "Salt marsh" for "saltwater estuary" is fair (it is called the MarshWalk). Holds.
- **Brookgreen "created in 1931 by the sculptor Anna Hyatt Huntington and her husband on four former rice plantations."** SC Encyclopedia: "It was created in 1931 by the sculptor Anna Hyatt Huntington and her husband, Archer M. Huntington"; "Comprised of four former rice plantations". Holds.
- **"Murrells Inlet is not a town, and part of it is in Georgetown County."** Row 77: no town polygon at any Murrells Inlet no-fee house in the Horry layer; 5 of the 13 houses here are Georgetown County listings. Holds.
- **Chip and FAQ.** 12 of 13 is 92.3 percent, "almost all homes for sale". FAQ "only a little more than 1 in 4 ... with a Murrells Inlet address": 60 of 215 is 27.9 percent. Holds. "Almost every house for sale has none" at the north end: 12 of 13, 21 of 24 with the two other regions within a mile. The three with a fee are Lake Pointe Dr (2) and Carson Creek Dr (1).
- **Heading "creek lots by the county boat ramp."** Lot Location names "Inlet/Creek" or "Inlet/Creek View" for 5 of the 12 (2619248, 2605257, 2621585, 2606223, 2621457); the others are inland or on a lake. The first sentence says the houses are "between US 17 Business and the creeks", which is true. The heading says the lots are creek lots (P12).

## Step 2: the diff and the new leads

Read against the sources above and the earlier rows. M = matches, T = tighten, X = must fix.

| Area | New or changed units | Result |
|---|---|---|
| Head, guide | the short answer's "areas below"; the four guide lines | all match. The guide's "Most houses within half a mile of the sand" holds for all six areas (13 of 17, 4 of 4, 17 of 18, 25 of 25, 12 of 15, 15 of 18). "A boat ramp within 10 minutes" holds (5.3, 9.0, 2.3, 4.25 min). |
| Downtown | boardwalk quarter hour; "most within half a mile" (13 of 17); Plyler Park (1000 North Ocean Blvd, free, Wednesdays, 2026 schedule); "Closer to home" | M. "Closer to home" is a relative distance word with no measure (not on `distance-words.json`; not struck: v8 left it as a note). The older houses "1950s and 1960s" (row 116: 1955 to 1970): M. |
| Myrtle Heights | avenue ends, setback, awnings and walls, wax myrtles, Sea Captain's, the Board | **X P3** (porches "some with coquina or brick walls"). The rest follow v8's supported wording and match. "Less than 5 minutes on foot from every house": 4 of 4, longest 4.8 min (row 146). |
| Pine Lakes | beach 0.6 mile, Ocean Forest park at Haskell Circle, bike lanes, decal, trash $34, Preserve | M. The decal page: "Free, with proof of vehicle taxes paid"; "park for free in any of the city's paid public parking spaces ... on-street ... and the public street-end parking spaces"; Pelicans page. |
| Windy Hill | Barefoot Landing docks, October music, the theatres, the 41st Avenue park | **T P8** (docks: "while you shop, dine and enjoy"). **T/X P2** (Friday 5 to 8 p.m.). Park: "a walking path that includes two pergolas"; "a circular mounded turf area offers a visual reference to the location of the former water tower": M. |
| Crescent Beach | surf zone, 18th and Edge, Central Park, parking, 7,600 sq ft | M. NMB Code Sec. 5-5: unlawful to ride a surfboard "between the hours of 9 am and 4 pm during the period from May fifteenth to September fifteenth, except in the following designated areas": Hog Inlet to 5th Avenue North, 6th to 27th Avenue South, Atlantic Beach's southern limit to 46th Avenue South. Central Park: "4 lighted tennis courts", "4 Outdoor Pickle Ball Courts", "¼ mile paved walking path", "20 acre": N24 fixed. Residents' passes are "complimentary", the paid season is March 1 to October 31 (2026). |
| Ocean Drive | free shag lessons, pavilion, Hoskins, museum, McLean, Christmas parade | M. Fat Harold's: "Learn the State Dance on Tuesday Nights with FREE S[hag lessons]" (the text breaks there), "Home of the Shag". SC Encyclopedia: "A pavilion and amusement park drew crowds to play and dance the shag." State dance: Code 1-1-665, 1984 Act 329. McLean: "10 acre park with a two acre lake". The city's page calls the Christmas parade "annual nighttime" on Main Street. |
| Cherry Grove | the ramp's features, Heritage Shores, Waties Island | **X P4** (Waties). Ramp: "Two lane boat launch, Kayak launch, ... Fishing pier, Fish cleaning station, Floating boat dock"; residents "must register" for free parking, for "a limited number of vehicles". |
| Little River | docks half mile, 1920s boatmen, Juel's, festivals, jetties, reef, Vereen, streets, "none within a mile" | **X P5**, **T P9**, **T P10**, **T P6**. Match: Juel's "Family owned and operated, since 1945"; Blue Crab Festival May (16 and 17, 2026) and ShrimpFest October (10 and 11, 2026), both at "Historic Little River Waterfront, 4468 Mineola Avenue"; Little River Reef "2.7 nm from south jetty"; T. Craig Campbell Landing on the county list ("148 Morgan Ave. Little River, Intracoastal Waterway"); the streets (4387 McCorsley, 1488 Bessent, 4356 Bayshore, 4340 and 4344 Mineola, 4362 and 4358 Ellis, 201 Riverbrook; the four on Mineola and Ellis are new, 2026); "none within a mile of the ocean": 2.26 to 2.42 miles to the shore line in `grand-strand.json`. |
| Socastee | lowest prices; Rosewood 2 min; "most built 1979 to 1986"; outside any town | M. Years (11 of 11 read): 1984, 1982, 1986, 1985, 2026, 1979, 1996, 1980, 1984, 1982, 1982: nine in 1979 to 1986, all in Rosewood Estates (7) or Cimerron Plantation (2). Lot median 0.22. Town: none for all 11. Prices: lowest median of the 16 ($249,900; Conway next, $287,000). Flood 4 of 11. |
| Surfside | boats, golf carts, oaks, sidewalks, market, concerts, festival, fireworks, flood | **T P7** (two boats, no 21-foot carve-out). The rest follows v8's supported wording and matches. |
| Garden City | pier free to walk, bands at both ends, free parking, 1950s, trade-off | **T P13**. Pier: "Always FREE to walk on the pier" (row 160), "live bands performing every night (weather permitting) at both ends of the pier", "No fishing license required"; county: "Free, year-round parking is offered at all oceanfront beach accesses in Garden City". 15 of 18 within half a mile and in a flood zone. Huntington Beach State Park "the finest surf fishing" and "top bird-watching": M. |
| Murrells Inlet | the whole entry | M with **T P11**, **T P12**; see Step 1. |
| Conway | oaks on a bluff, Riverwalk and Water Trail, warehouses, 1897 fire, Riverfest, third of an acre | M. City release: "Not only are streets designed around them". Row 91 (SC Encyclopedia): founded "on a bluff of the Waccamaw River". Booklet: "federally-designated National Water Trail"; the Riverwalk is on its map. Riverfest: "the Saturday before the Fourth of July weekend", live music, "annual fireworks show". 20 homes: lot median 0.34, 13 of 20 before 1990. |
| Loris | "older houses date from the 1960s"; two buildings; Bog-Off; dish; beach 35 min | **X P1**, **T P14**. Bog-Off: "third Saturday in October", "arts and crafts vendors ... performances from talent around the region, an antique car show" (a 2025 listing says live entertainment on two stages; the city page does not say "live music"). |
| Around Loris | new houses, 0.7 acre, preserve, hospital | M. 65 of 74 built 2024 or later (the file's 74 includes 1 in town: 2525927). |
| Aynor | acre lots, more than half new, Galivants Ferry, Hoe-Down, 45 and 30 minutes | M. Lots median 1.057 (23 of 30 matched); 17 of 30 built since 2024 (57 percent). SC Code 53-3-125: "The third Saturday in September of each year is designated 'Aynor Harvest Hoe-Down Festival Weekend'"; town page: "The festival draws almost 25,000 festival goers." "Nearest hospital": from Aynor's centre Conway Medical Center is 30.5 min, McLeod Loris 36.5. |
| Rules cards | the nine cells that changed since 14e | M. The N49 to N52 supported wording is in all four. County boat card: "outdoor storage may not be in front of the house" matches Sec. 907.D.1 where it applies and Sec. 402; the card drops "accessory uses". Surfside Sec. 17-427(b): "limited to a total of one (1) vehicle or trailer per dwelling unit" over 21 feet: in the card, not in the entry lead (P7). |
| Other | prices, FAQ, sources note | M. "Areas are MLS areas or a distance from a town center or a boat landing" now fits the Murrells Inlet measure. |

### v8 must-fix and tighten items

| v8 | On the 50a22c0 page |
|---|---|
| N3, N12, N20, N24, N26, N28, N34, N35, N42 | Fixed or gone, no new drift. N20: the surf-zone sentence now says "one of the city's three surf zones ... boards are banned from 9 to 4 on the rest of the beach", which is what Sec. 5-5 says. |
| N6 | Fixed in part: "porches, some with coquina or brick walls" attaches the walls to the porches (P3). |
| N21 | The page took v8's wording "Friday and Saturday afternoons"; the calendar says Friday 5 to 8 p.m. (P2). |
| N29 | "No public access" is gone; "open to the public by kayak" replaced it (P4). |
| N40 | "1950s cottages" is gone; "Garden City grew up in the 1950s" is looser than "did not develop until the 1950s" (P13). |
| N1, N2, N4, N5, N7 to N11, N13 to N19, N22, N23, N25, N27, N30 to N33, N36 to N39, N41, N43 to N52 | Applied or gone. Plantation Point is cut, so N15 to N19 are gone. N2 (Plyler Park) says "Wednesdays in summer" and rests on the 2026 schedule; it is an annual series ("returns"), so I left it. |

## Step 3: share chips against the area file

Thresholds 90 / 85 / 60 / 50 (row 148). Code: every home at 100; "almost all" at 90 or more; "nearly 9 in 10" at 85 to 89; "most" at 60 to 84; "6 in 10" at exactly 60; "more than half" below 60; the country around Loris "most".

| Area | Share | Chip | Fits |
|---|---|---|---|
| Downtown | 17 of 20, 85.0 | nearly 9 in 10 | yes |
| Myrtle Heights | 4 of 4 | every home | yes |
| Pine Lakes | 6 of 6 | every home | yes |
| Windy Hill | 24 of 40, 60.0 | 6 in 10 | yes |
| Crescent Beach | 34 of 39, 87.2 | nearly 9 in 10 | yes |
| Ocean Drive | 23 of 41, 56.1 | more than half | yes |
| Cherry Grove | 52 of 89, 58.4 | more than half | yes |
| Little River | 8 of 8 | every home | yes |
| Socastee | 11 of 14, 78.6 | most | yes |
| Surfside | 36 of 42, 85.7 | nearly 9 in 10 | yes |
| Garden City | 41 of 55, 74.5 | most | yes |
| Murrells Inlet | 12 of 13, 92.3 | almost all | yes |
| Conway | 20 of 23, 87.0 | nearly 9 in 10 | yes |
| Loris | 15 of 16, 93.8 | almost all | yes |
| Around Loris | 74 of 82, 90.2 | most (set by hand, row 129; 90.2 would say "almost all") | yes, and safe |
| Aynor | 30 of 45, 66.7 | most | yes |

16 of 16. The price lines come from the file's medians (the code stops the build if they change).

## Step 4: times and distance words

OSRM (cars, no traffic) and routing.openstreetmap.de (foot), run today. The rounding rule (CRAFT 2): under 15 minutes to the minute, over 15 to the nearest 5.

| Page claim | Measured | Verdict |
|---|---|---|
| Murrells Inlet: Stanley Drive landing about 4 minutes | 4.25 min (middle), 1.3 to 4.9 (houses) | holds |
| MarshWalk about 6 minutes | 6.28 (middle), 3.1 to 7.4 (houses) | holds |
| Brookgreen about 20 minutes | 18.7 to the garden's centre point; 16.2 to William Alston Loop; 14.2 to the Brookgreen Drive turn (33.5122, -79.0831); 12.4 to the Brookgreen Drive / US 17 node | **tighten (P11)**: about 15 to the visitor roads |
| Windy Hill: Barefoot Landing 3 minutes | 3.1 min (file drives) | holds |
| Socastee: Rosewood Landing 2 minutes | 2.3 (file) | holds |
| Little River: houses "within half a mile of the docks on Mineola Avenue" | straight line from 4499 Mineola (33.8706, -78.6094): 0.20, 0.32, 0.33, 0.33, 0.37, 0.37, 0.39 and **0.72 mile (4356 Bayshore Dr)**; on foot 0.21 to 0.53 and 1.27 miles (Bayshore) | **must fix (P5)** |
| Little River: "none ... within a mile of the ocean" | 2.26 to 2.42 miles | holds |
| Downtown boardwalk, Pine Lakes beach, Crescent Central Park, Ocean Drive McLean, Myrtle Heights Sea Captain's, Conway museum, Socastee beach, Conway landing, Around Loris hospital | re-run by v8 (0.73 mi / 15.6 min; 0.58 mi; 0.69 mi; 0.25 mi; 9.1 min from 3600 N Ocean Blvd; 0.63 mi / 13.5; 14.65 min; 5.8; 9.1) and the sentences are unchanged | hold |
| Aynor: Conway Medical Center about 30, nearest hospital | 30.5 min from Aynor's centre; McLeod Loris 36.5 | holds |

No word on `rules/distance-words.json` is on the page. "Closer to home" (Downtown) is of the same kind and has no measure; not on the list; not struck.

## Step 5: sibling check (SIBLING-OWNERS.md)

I searched the four sibling previews for every place and fact on this page.

- **Murrells Inlet, MarshWalk, Brookgreen, Huntington Beach:** best neighborhoods gives Prince Creek's drive to the MarshWalk (7 minutes) and to Huntington Beach State Park (12); affordable gives Wynbrooke's MarshWalk (5 minutes, live music every night, no cover) and the state park (three miles of beach, alligators); gated gives the MarshWalk at Seasons (10 minutes). This page gives the MarshWalk's length and restaurants and no sibling does; Brookgreen is on none. Different facts. Matches.
- **Cherry Grove:** best has the pier, the world-record shark and the 1950 beach history; this page has the canals, the ramp, the dredging fee and the flood zone, as SIBLING-OWNERS assigns. The Russell Burgess preserve line is gone, so the v8 overlap is cleared. Matches.
- **Pine Lakes:** best has the 1927 club history and Sports Illustrated; this page has the lots, the decal and the trash. The photo caption with the 1927 clubhouse is gone. Matches.
- **Surfside:** best has the free pier; this page has the town's boat, golf cart and event rules. Matches.
- **Barefoot Landing:** best gives the resort's distance to the shops; this page gives the free day docks. Matches.
- **Conway, Loris, Aynor, Socastee, Little River, Garden City, Windy Hill, Crescent Beach, Ocean Drive, Myrtle Heights, Downtown:** siblings name the towns only in lists or one line (the Conway riverwalk and Main Street once, on affordable). Matches.

No overlap this round.

## Step 6: photos

- **"200" on the Pleasant Inn (`downtown-myrtle-beach-pleasant-inn-1200w.webp`, 197,890 bytes).** I looked at the file and at 2.5 times crops of both porch posts, the door and the post to its right. There is a faint smudge on the post right of the door where a number was; it reads as nothing. **No readable number.** The 600w file is the same image smaller.
- **"3701" on the Myrtle Heights house (`myrtle-heights-older-house-on-ocean-boulevard-1200w.webp`, 112,888 bytes).** I looked at the file and at 3 times crops of the door, the transom and the lamps. The panel under the fan window is blank. **No readable number.**
- **Little River aerial (`little-river-waterway-from-above-1200w.webp`).** The image has two labels, "Salt marsh" and "Intracoastal Waterway". **It has no label on Mineola Avenue, and Mineola Avenue is outside the frame.** The frame is 720 m by 540 m centred on 33.8705, -78.6150; its east edge is at about -78.6111. The docks and festival ground at 4468 to 4499 Mineola Avenue are at -78.6094 to -78.610, about 0.2 mile east; the houses on Mineola Avenue (4340, 4344) are at 33.8748, north of the frame. What the frame shows is the Waterfront Drive area and the streets south of McCorsley and Ellis Avenues. The caption and alt text claim no street, so nothing on the page is wrong. The provenance record calls the centre point "Mineola Avenue on the waterfront" in row 124; it is the middle of the houses, not the docks (this is behind P5). The "Salt marsh" label (about 385 to 720 px across, 590 to 660 px down) sits on the strip of trees and a white house at the marsh's edge; the brown marsh begins just below it. The "Intracoastal Waterway" label sits over marsh and the edge of the dark water at the right. Move "Salt marsh" about 50 px down to be on the marsh. Not struck (an image label).

## Step 7: struck check

`node tools/struck-check.js --batch batches/2026-10-b --preview <scratchpad>/preview/b --strict`, no-HOA only:

- Before my entries, on the 04:15 build of 50a22c0: **no-hoa-homes (179 patterns): no struck wording.** Nothing from the older lists came back.
- After my 14 entries: 193 patterns. All 14 fire on the 50a22c0 text (checked on the spec's strings). On the 04:34 build (later version) 11 fire: P1, P3, P4, P5, P6, P7, P8, P9, P10, P12, P14.
- `node tools/struck-check.test.js`: **all controls pass.** One control failed on my first try: v8's N21 `use` wording contained the sentence P2 strikes. I corrected that `use` text (it said "Friday and Saturday afternoons").

## After 50a22c0

The working tree and the 04:34 preview carry a later version. It dropped the Windy Hill music sentence (P2), the Brookgreen "about 20 minutes" (P11, now "both within a 20-minute drive", 16 to 19 minutes, holds) and the Garden City sentence (P13), and it rewrote parts of the Murrells Inlet, Socastee, Garden City, Conway and Loris entries and many rules cards. Eleven of my 14 entries still fire on it. It has sentences that are not in any row and that I did not check: Downtown "a lender will not require flood insurance on any of them" and "a typical lot is about 9,000 square feet"; Pine Lakes "listed at more than twice the downtown price, for more than twice the land"; Conway "lots are about 15,000 square feet"; the Murrells Inlet Georgetown County rule ("a vehicle or travel trailer without current plates has to be kept in a closed building"); Garden City "streets that grew up in the 1950s" (the same drift as P13); Socastee "Most are 1980s houses"; and the new rental card wording for all seven places. That is a v10 task.

## The drifts

"Must fix" = the page says what the source does not, or the opposite. "Tighten" = a small gap or a missing limit. The safe wording is a plain claim; attribution is in brackets, not for the body (CRAFT 5).

| # | Class | Row | Area | Page wording (50a22c0) | Why | Safe wording |
|---|---|---|---|---|---|---|
| P1 | must | 129 | Loris | Most of the older houses date from the 1960s, on lots of about 0.4 acre. | The 10 houses built before 1990 (all 15 no-fee listings read): 1940 (1), 1950 to 1955 (4), 1961 to 1964 (3), 1975 and 1977 (2). Three of 10 are from the 1960s. The row's "median year 1964" is the middle of old and new houses together (5 are new). The 14e line "mostly from the 1960s" carried the same error and v8 passed it (a B52 miss). Lots: median 0.37, 14 matched: holds. | The older houses here were built from the 1940s to the 1970s, on lots of about 0.4 acre. |
| P2 | must | 153 | Windy Hill | In October, its stage has live music on Friday and Saturday afternoons. | Barefoot Landing calendar (2026): "Live Music on the Pepsi Stage, Fri., 5 pm to 8 pm, Sat., 2 pm to 5 pm" (Oct 16, 17, 23; Oct 24 is BooFest). Friday is evening. v8's own supported wording had this error. | In October, its stage has live music on Friday evenings and Saturday afternoons. |
| P3 | must | 150 | Myrtle Heights | You will see porches, some with coquina or brick walls, and wood awnings painted solid or striped to look like canvas. | NRHP: "Fifteen properties in the district retain their historic fences or walls, with most of them constructed of coquina rock or brick." The walls are on the lot lines, not on porches. A fix of N6 that moved the clause. | You will see porches and wood awnings painted solid or striped to look like canvas, and a few houses keep old walls of coquina rock or brick. |
| P4 | must | 156, 178 | Cherry Grove | Across Hog Inlet, Waties Island has almost three miles of undeveloped beach, open to the public by kayak. | Visit Myrtle Beach (Sept. 2023): "still open to the public"; kayak or horseback. Coastal Carolina University's own research page: "This link allows you to submit a request for access to the Anne Tilghman Boyce Coastal Reserve located on Waties Island and Little River Neck". The state plans to own it (WMBF, July 23, 2026) and has not set a public framework. The sources disagree and the owner's is the stricter. | Across Hog Inlet, Waties Island has almost three miles of undeveloped beach. (Say nothing on who may land.) |
| P5 | must | 124 | Little River | The houses on Little River's old waterfront streets are within half a mile of the docks on Mineola Avenue, on the Intracoastal Waterway. | Row 124's 0.45 mile is from 33.872, -78.615, labelled "Mineola Avenue on the waterfront"; that point is at McCorsley and Ellis Avenues. The docks and festival ground are at 4468 to 4499 Mineola Ave (33.8706, -78.6094). 4356 Bayshore Dr (a street the page names) is 0.72 mile away in a straight line and 1.27 miles on foot; seven of the eight houses are within 0.4. | The houses on Little River's old waterfront streets are less than a mile from the docks on Mineola Avenue, on the Intracoastal Waterway. |
| P6 | tighten | 102 | Little River | Vereen Memorial Historical Gardens, a county park on the waterway, has about 3 miles of trails and boardwalks through forest and marsh. | The county: "more than 115 acres of forest and marshland. This facility includes approximately 3 miles of nature trails and boardwalks that meander through its botanical gardens and along its waterfront." Row 102 already asked for "through gardens and along the water". | Vereen Memorial Historical Gardens, a county park on the waterway, has about 3 miles of trails and boardwalks through gardens and along the water, on more than 115 acres of forest and marsh. |
| P7 | tighten | 62 | Surfside | In Surfside Beach, the town allows two boats or trailers at a home. (Heading: "two boats at home") | Sec. 17-427(b): "vehicles and trailers of any kind or type over twenty-one (21) feet in length shall be limited to a total of one (1) vehicle or trailer per dwelling unit"; the card says it, the entry lead and heading do not. A buyer with a 25-foot boat gets one. | In Surfside Beach, the town allows up to two boats or trailers at a home, and only one over 21 feet. |
| P8 | tighten | 153 | Windy Hill | ...where you can tie up a boat at the docks free for the day. | Barefoot Landing: "we invite you to use our finger docks on the Intracoastal Waterway for the day for free while you shop, dine and enjoy all that Barefoot Landing has to offer." The condition is dropped in the lead and the heading. | ...where you can use the finger docks for the day for free while you shop or dine. |
| P9 | tighten | 124 | Little River | Local boatmen began taking visitors fishing for a fee there in the early 1920s, the first organized offshore trips of that kind in South Carolina. | SC DNR: "When the men and boys at Little River began to take people fishing can not be dated exactly, but probably it began in the early 1920s." River parties came first; deep sea parties from 1923. The hedge is dropped (B45). | Local boatmen began taking visitors fishing for a fee there, probably in the early 1920s, the first organized offshore recreational fishing in South Carolina. |
| P10 | tighten | 124 | Little River | Since the inlet's jetties were finished in 1983, boats can cross the bar at any time of day. | The 2001 history: "Once the jetties were in place, in 1983, boats could cross the bar at any time of day." Past tense of a 25-year-old source, written as today's. | After the inlet's jetties were finished in 1983, boats could cross the bar at any time of day. |
| P11 | tighten | 176 | Murrells Inlet | Brookgreen Gardens, ... is about 20 minutes away. | OSRM from the middle of the 12 houses: 18.7 min to the garden's centre point (the row's destination, inside a 9,100-acre property), 16.2 to the visitor roads at William Alston Loop, 12.4 to the Brookgreen Drive turn. Rounded, a visitor drives about 15. | ...is about 15 minutes away. |
| P12 | tighten | 175, 176 | Murrells Inlet | (Heading) creek lots by the county boat ramp | 5 of the 12 listings name creek or inlet frontage or a view; the others are inland or on a lake. | (Change the heading: for example "by the creeks and the county boat ramp".) |
| P13 | tighten | 160 | Garden City | Garden City grew up in the 1950s. | Survey (SCDAH): "Garden City Beach, like Surfside Beach, did not develop until the 1950s." "Did not develop until" says when it began, not when it grew. | Garden City did not develop until the 1950s, according to a state survey. |
| P14 | tighten | 162 | Loris | The town's dish is chicken bog: chicken, rice and sausage. | SC Encyclopedia: chicken bog is "the native stew of the Pee Dee", the main attraction at the Galivants Ferry stump meeting too; "Loris residents decided in 1979 to make chicken bog the theme for an annual festival". It is not the town's alone. | The festival's dish is chicken bog: chicken, rice and sausage. |

Notes with no struck entry: Downtown "Closer to home" (no measure); the MI "People first came" sentence (row 90's own approved wording); the "Salt marsh" label on the Little River aerial.

## Gaps and notes for the writer

- **Ledger row 175:** say 6 matched parcels, median 0.26 acre (not 7 and 0.242), or match the PIN of 3109 and 3111 First Avenue South (county layer 24 gives 0.302 and 0.283 for them, from the listing points). The county's landing is listed with a Garden City address.
- **Ledger row 124:** the point 33.872, -78.615 is not on Mineola Avenue; the docks are 0.3 mile east of it.
- **Do not hedge, and do not drop a source's hedge (B45).** P9 is a dropped "probably". P2 and P4 are cases where a supported wording from my own v8 note was wrong or the source was not the owner's. I checked both here.
- **A set of three:** the dock, creek and flood facts for Murrells Inlet come from 13 listings. If a house sells the numbers move; the page's wording ("several", "more than half", "almost every") holds for one or two changes.
- **Georgetown County houses** have no county layer here; lot size comes from the agents' own field (the source for 4 of the 12 houses' lots).

## Status

Rows 175 to 178: status and note columns of `no-hoa-facts.md` updated (175 and 176 verified with corrected wording, 177 verified with two counts unverifiable, 178 wrong in part). New ledger row 180, "rewrite check (v9, round 14f)": **wrong in part (v9)**. Five must-fix sentences on the 50a22c0 page (P1 to P5), eight tightenings, a struck entry for each (186 entries, 14 mine; `struck-check.test.js` passes).
