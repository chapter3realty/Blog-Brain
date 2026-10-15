# The Farm, row 122 and rewrite check v12 (round 14g, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify row 122; (2) lessons B30, B45, B48 and B50: diff the spec against the last checked base and check every changed or new sentence that states a fact, against its row and, where it drifts, against the source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at commit `003cf53` (03:49:08 UTC), the diff `e64ae4f` (the v11 base, which a verifier checked) to `003cf53`, `data/photos.json` entry `the-farm-where-from-above`, the image file `images/the-farm/the-farm-where-from-above-1200w.webp`, and the built page `preview/b/the-farm.html` (03:47, 1,215,579 bytes). The preview carries every v12 sentence (I searched it for ten of them). Two parts of the diff, the photos.json entry and the two image files, were committed in the WIP commits `3c9802f` and `901b0f9`, not in `003cf53`; they are in the diff and I checked them.

## Result

- Row 122 (changed sentences): **verified with corrected wording**. Three sentences go past the source.
- Rewrite check: **25 fact-bearing units changed or newly stated since `e64ae4f`. 22 match, 3 drift** (D1 medium, D2 low, D3 low).
- v11 drifts D1 to D3: **all three applied**. D2's fix left one word of its drift in place (D3 below).
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, the-farm: **before my entries "the-farm (65 patterns): no struck wording."** After my 3 entries: 68 patterns, 3 hits, one for each of D1 to D3. Each entry goes quiet on its approved wording. (The same run reports 17 hits on best-neighborhoods and 1 on gated-communities; those are not this page.)
- `node tools/struck-check.test.js`: "all controls pass" (115 controls).
- Distance words (`rules/distance-words.json`, run inside struck-check): no hit on the page. "Minutes away" and "at its edge" are not on the list; I measured both (below).
- Promises: all are actions an agent can do. None is new in 14g.
- The heritage-preserve sentence: **matches** (it follows from the statute for private homes), with a wording note. It is not a drift.

## The heritage-preserve sentence

Page: "State law bars any private use of a heritage preserve, which rules out building homes there once the land is dedicated. The state has said it will dedicate it."

### Re-opened sources

- **S.C. Code 51-17-80** (scstatehouse.gov/code/t51c017.php, HTTP 200). Item 1: "The primary dedication as a Heritage Preserve shall be to preserve and protect the natural or cultural character of any area or feature so established. ... No Heritage Preserve shall be taken for any other public purpose unless the approval of both the board of the department and the Governor has been obtained. In no case shall any Heritage Preserve be taken for any private use." Item 2: "An acquisition by dedication shall be in perpetuity." The section's lead-in: dedication is complete once the deed and the Dedication Agreement are filed in the county's real estate records.
- **S.C. Code 51-17-85**, "Heritage Trust property; disposition, exception". (A): "the board may not dispose of any Heritage Trust property if otherwise permitted to do so unless there are restrictions sufficient to protect all of the natural and cultural characteristics of the property." (B): "For the purposes of county, state, or federal infrastructure projects, subsection (A) does not apply."
- **SCDNR release, June 10, 2025** (dnr.sc.gov/news/2025/Jun/jun10-lewisoceanbay.php, HTTP 200): "SCDNR recently acquired 353 acres from Conway Medical Center"; "This property will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve and incorporated into the S.C. Heritage Trust, where it will be open to the public for outdoor recreational activities."; Brian Argo: "The sale of this land, which was originally intended for a $160-million healthcare facility".
- **SCDNR Public Lands data** (the DEV feature service of row 106, layer 3, PropertyID 505): the Conway Medical Center tract, 353.25 acres, owner and manager SCDNR, `HeritagePreserve: "YesC"`, `PublicAccess: "Open"`. The code "YesC" is not documented and the layer is named DEV, so I do not use it. It hints that dedication may have been completed since June 2025. I did not search the Register of Deeds.

### Does "rules out building homes" follow?

Yes, for homes, and it is not a drift. The reasoning:

1. The two ways the statute lets a dedicated preserve be used for something other than preservation are both public. Item 1 allows "any other public purpose" only with the approval of the DNR board and the Governor. Section 51-17-85(B) lets the board dispose of Heritage Trust property for county, state or federal infrastructure without protective restrictions. Neither opens a private use. A neighbor's or a builder's houses are a private use, so the bar in item 1 ("in no case") reaches them.
2. The statute does not name homes. "Rules out building homes" is an inference of the writer's, one logical step from the text, and it is stated as what state law does, with the link to the statute.
3. "Once the land is dedicated" keeps the condition. "The state has said it will dedicate it" keeps the release's future tense ("will be formally dedicated").

What the wording does not say, and must not grow to say: that nothing can ever be built (a road, a utility or another approved public project could cross it), or that the law cannot change (the General Assembly amends it; 51-17-85(B) is a 2009 amendment). "Building homes" is right. "No building" or "never" would not be.

One wording note, not a strike. "Bars any private use" drops the statute's verb. The statute says a preserve may not be **taken for** any private use, meaning put to a private purpose. Read loosely, "bars any private use" could mean no private person may use it, which the page contradicts elsewhere (the preserve is open in daylight; visitors walk its roads). A reader will not take it that way beside "rules out building homes", so I pass it.

**Strongest plain wording the statute supports:** "State law says a heritage preserve may not be taken for any private use. Once the land is dedicated, that rules out private homes on it. The state has said it will dedicate it [S.C. Code 51-17-80; SCDNR, June 10, 2025]." The page's wording is the same claim in fewer words.

## The north-edge woods

Page, pro 1: "Woods along the north edge that belong to the state, not a builder."

- **Owner.** County parcels layer 24, PIN 39600000001, re-queried today: OwnerName "SOUTH CAROLINA DEPARTMENT OF NATURAL RESOURCES", LegalDescr "CAROLINA FOREST; REM TRACT 20", Acreage 353.25 (my shape area: 351.9 acres). The SCDNR layer (row 106) names SCDNR as owner and manager. A state agency owns it, so "belong to the state" holds. "Not a builder" is true of the owner; the land was Conway Medical Center's (the release).
- **Woods.** The release: "pine savannas, blackwater swamp forests, and a stretch of Socastee Swamp". I looked at the USDA NAIP 2023 image (USGS National Map, 4 m a pixel) with the tract outlined: continuous dark-green canopy and wet savanna, no houses or streets; there is one small cleared pad near the tract's north side and International Drive along its east side. "Woods" is a fair plain word. The page's aerial shows the same shaded area.
- **North edge.** I re-pulled the 1,634 parcels of the row 1 filter (two pages, 1,000 and 634) and closed the gaps between them. The tract touches three Farm HOA open-space parcels (PINs 39600000005, 39700000155, 39600000004; distance 0.0 m). About 1,480 m of The Farm's 10,260 m outline lies within 30 m of the tract, and that stretch sits about 970 m north of the middle of the outline. The tract's middle is 1.46 km north of The Farm's middle, and its east-west span overlaps The Farm's. It is the longest neighbor on that side (next: the school site at 1,083 m on the north-east, a Summerlyn open space at 358 m). "North edge" holds.
- The land is state-owned now whether or not it is dedicated. The sentence says only who owns it. Match.

## Other changed sentences

### "Living in The Farm means a swim after work and spring walks among wildflowers in a state nature preserve." Drift D2 (low)

- **Walks:** row 105 (SCDNR Public Lands page): "From March through June, pitcher-plants and wildflowers provide a wonderful show." "Spring" covers it. "A state nature preserve" is the v10 D6 wording. Match.
- **Swim after work:** row 61: "HOURS OF POOL OPERATION FOR ALL SWIMMING POOLS: April 15 thru October 15 from 9 am until 9pm." The October 2026 newsletter: the pools "close for the season on October 15th". The short answer says "Living in The Farm **means** a swim after work", with no season, for a pool that is closed about six months of the year. The day section says "in season"; the short answer is the first thing a reader (and a search result) sees. Same kind of drift as v10 D2 (the missing condition). **Safe wording:** "Living in The Farm means a swim after work in pool season and spring walks among wildflowers in a state nature preserve." Watch (below): the sentence gives no distance for the preserve.

### "The county's gym, library and trails are minutes away by car." Match

Rows 80, 81, 101. OSRM today from the Farmers Rest Drive entrance: the recreation center and library campus (2254 Carolina Forest Blvd) 3.3 min, the Bike and Run Park (150 Frontage Rd) 3.6 min. From other starts in The Farm: 4.9 and 8.2 min from the middle (2884 Scarecrow Way), 2.8 and 4.9 from the south end, 6.5 and 7.4 from the east end, 4.9 and 8.4 from the north end. "Minutes away" is true from every start I tried. It is vaguer than "3 to 4 minutes" and is not on the distance list. It is not a promise of "a few". "County's gym": the Carolina Forest Recreation Center has a "full size gymnasium" (row 80); the trails are the county's (row 81).

### "Its main entrance is about 6 minutes away by car." Drift D1 (medium)

Row 106: the preserve's main entrance (Lewis Ocean Bay HP/WMA Entrance 1, parking and kiosk, Old Kingston Road off International Drive) is "about 6 minutes by car from The Farm's **Wheatfield Drive** connection (about 10 from the Farmers Rest Drive entrance)". v11's sentence kept the start: "about 6 minutes by car from The Farm's entrance by the schools". Round 14g cut the start from the sentence, and the page now says its drives "start at the Farmers Rest Drive entrance" (the map caption and the sources line). The only trace of the exception is a parenthesis at the foot of the sources note: "(the preserve's at Wheatfield Drive)".

OSRM today, to the entrance point (-78.8909023, 33.805794):

| Start | Minutes | Miles |
|---|---|---|
| Wheatfield Drive / International Drive junction | 5.96 | 3.18 |
| East-most home parcel | 7.52 | 3.56 |
| North-most home parcel | 8.73 | 4.04 |
| Middle (2884 Scarecrow Way) | 8.84 | 3.99 |
| Farmers Rest Drive entrance (the page's stated start) | 10.16 | 5.05 |
| West-most home parcel | 10.77 | 4.67 |
| Mill Street entrance | 10.82 | 4.59 |
| South-most home parcel | 11.53 | 5.70 |

So "about 6 minutes away" is true from one corner of The Farm, 4 minutes short from the entrance the page names, and short for nearly every home. This is lesson B45 (the qualifier moved away from the sentence) and CRAFT 2 ("measure from a stated point ... and say which"). **Safe wording:** "Its main entrance is about 6 minutes by car from the Wheatfield Drive end of The Farm, and about 10 from the Farmers Rest Drive entrance." Or give one start: "about 10 minutes by car from the Farmers Rest Drive entrance." If the sources line keeps the parenthesis, it should read "the drive to the preserve starts at Wheatfield Drive".

### "Residents can start a weekday with a workout in the HOA's fitness room, which opens at 5:30 a.m." Match

Rows 60 and 62: "The fitness room is open from 5:30 am to 9:00 pm"; the HOA's amenities include "a clubhouse with a fitness room". "HOA's" is right.

### "A commute to Grand Strand Medical Center ... about 12 minutes. In our experience, rush hour adds 5 to 10 minutes to the drive times on this page." Match

The first sentence is unchanged (row 32; OSRM 11.52 min from the entrance, 13.4 from the middle, as in v11). The second is **v11's own safe wording**, word for word, and the same as the other pages' scope. I read `stories/stories.json`, id `traffic-timing`: teller Devin Day (owner), source `research/relocating/owner-answers.md:51-54`, status usable-with-limits, "Rush hour adds 5 to 10 minutes", limits "Label it as the owner's experience ... Do not put it in quotation marks". The page labels it ("In our experience"), uses no quotation marks, and bounds it to "the drive times on this page" instead of "any drive here". The `checked` field still reads "Not checked", as in v11. Match.

### "River Oaks Pizzeria is next to Publix, so dinner and groceries can be one stop." Match

Row 119 (verified in v11). I re-opened cf.riveroakspizzeria.com (HTTP 200): "154 Sapwood Road, Unit 107 ... Hours Sun-Thurs: 12pm - 10pm Fri-Sat: 12pm - 11pm". It is open and serves in the evening. Both addresses are on one parcel (PIN 39615030020), two buildings 72 ft apart (v11). "One stop" is true of one shopping center and one lot. The v11 watch stands: "next to" is the restaurant's own phrase ("Next to Publix"); CRAFT 2 reads it as touching or facing; "in the same shopping center as Publix" is exact.

### "The library and the Carolina Forest Recreation Center share one campus, about 3 minutes away by car." Match

Rows 80 and 101 (one county parcel, 34.03 acres; 3.3 min from the entrance). The start is the page's default (the Farmers Rest Drive entrance, in the map caption and the sources line), which is the start the 3.3 minutes use.

### The map caption and labels. Match, with one watch

Caption: "Where The Farm is, with drive times from the entrance nearest the large pool. The orange line is its edge." (photos.json and the spec agree.)

I looked at the 1,200 px image and overlaid the layers on it. The photo's frame is the NAIP request in photos.json (EPSG:3857 bbox -8789299.67, 3988567.16, -8773353.76, 4000526.59); I pulled the 1,634 parcels and PIN 39600000001 again and drew them on it.

- The shaded green area matches the county outline of PIN 39600000001 (magenta on my overlay), and The Farm's orange outline matches the 1,634 parcels. The tract lies on the north side, against The Farm's north edge.
- Dots: Publix (-78.870501, 33.751759) falls at pixel (713, 377), and the dot is there. The emergency room (-78.852256, 33.757293) falls at (866, 321), and the dot is there. The beach access MYRTLE BEACH 101 (-78.846516, 33.719685) falls at (914, 700), and the dot is on the sand edge.
- "Emergency room, about 5 min": OSRM 5.21 min (312.3 s, 2,856.5 m) from the Farmers Rest Drive entrance. Match.
- "Set to join the preserve": the label sits left of the tract with a green bar. It says what the release says ("will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve"), and it is in the future tense. The earlier "Bought by the state for a nature preserve" label is gone.
- "Publix" and "Beach": names only, no minutes. The tiles carry 2 and 10 minutes (v11 matched both).
- Alt text: "labels for Publix, the emergency room 5 minutes away and the beach". It says what the picture shows. Match.
- Watch: the caption says "drive times" (plural) and the map now shows one drive time. Nothing is false; a reader may look for the others. "Where The Farm is. The emergency room's drive time is from the entrance nearest the large pool." would be exact. Not struck.

### "A sidewalk runs along Wheatfield Drive from inside The Farm to International Drive, where both Ocean Bay schools are." Match

Row 110 (verified v9; OSM way 1283755951 and the 2023 aerial) gives the sidewalk from Carolina Farms Blvd to the International Drive junction. v11 re-queried the parcels and found Farm lots on Wheatfield Drive, so "from inside The Farm" holds. Row 38: the schools are 905 and 950 International Drive. The junction is about 100 m (straight line) from the 950 International Drive point (Ocean Bay Elementary) and about 225 m from the 905 point (Ocean Bay Middle), so "where both schools are" is a fair way to say it. Watch: the sentence now joins the sidewalk and the schools in one clause, so a reader may infer a walk to school; the page claims none (row 110: no crossing, no user, no walk). Not struck.

### The schools table header "Drive by car" (was "Drive from the entrance")

Row 38: the 4, 6 and 15 minutes are from the Farmers Rest Drive entrance, the page's stated start. The header no longer says so; the map caption and the sources line do. Same rule as the other tables. Match. Watch: homes by Wheatfield Drive are closer to the two Ocean Bay schools (row 38).

### Pro 2 and tile 1: "two of them at its edge", "Schools: Two at its edge". Match

The page gives three zoned schools (row 36: all 1,571 home parcels) and says two are "at its edge". Measured against the school parcels and the county building footprints (layer 27), with The Farm's outline as the union of its 1,634 parcels:

| School | Parcel | Parcel to The Farm | Main building to The Farm |
|---|---|---|---|
| Ocean Bay Middle (905 International Dr) | 39600000008, 48 acres, Horry County Board of Education | **0.0 m**: it touches HOA open spaces #13, S of Wheatfield Dr and Orchards O/S #34 | 144,367 sq ft at 15 m; 130,754 sq ft at 62 m |
| Ocean Bay Elementary (950 International Dr) | 39600000009, 20.8 acres | **12.2 m** (40 ft) to HOA open space #5; no parcel lies between | 106,075 sq ft at 61 m |

Wheatfield Drive (OSM way) runs in the gap: 6.9 m from the elementary parcel and 11.9 m from The Farm's open space #5. The elementary school's land faces The Farm's land across Wheatfield Drive, which meets CRAFT 2's "face each other". Both schools are on The Farm's north-east side, as v11 had it. "At its edge" holds for both parcels and both main buildings (all within about 60 m). Neither "at its edge" nor "minutes away" is on `rules/distance-words.json`.

### Pro 3: "Groceries and dinner out without a long drive." Match

Publix 1.51 min from the entrance (row 29); River Oaks beside it (row 119). From other starts in The Farm, Publix is 2.9 min (south end), 4.6 (west), 5.9 (east), 6.2 (middle) and 6.4 (north). "Without a long drive" is a negated distance word with no rule; 2 to 6 minutes is not a long drive by any reading. "Dinner out" rests on one verified restaurant, which is enough for the phrase as written.

### "Over the past year, a typical townhome in The Orchards sold for about $230,000, and a condo in Planters Point about $240,000." Match

The house price moved to the short answer; this sentence is the v11 sentence minus its first clause. Row 48: Orchards townhomes middle $228,500 and Planters Point condominiums $237,500.

### "Houses with yards usually sold for about $350,000 in the past year." Match

The v10 D7 wording. Row 48: 61 detached sales, middle $352,000.

### "Conway Medical Center planned a $160 million healthcare facility on the 353 acres along The Farm's north edge. The state bought the land instead, for the Lewis Ocean Bay Heritage Preserve." Match

Release (Argo): "The sale of this land, which was originally intended for a $160-million healthcare facility". "Planned" for "intended" and "the 353 acres" for "this land" add nothing. "Bought": the release says "acquired" and Argo says "sale"; v10 accepted "bought". "For the Lewis Ocean Bay Heritage Preserve" matches "dedicated as part of". The flytrap sentence is unchanged and now sits in its own paragraph after the sentence that names the preserve (its "The preserve" has its antecedent).

### The HOA rules sentence. Drift D3 (low)

Page: "Under the HOA rules, owners can rent their homes with a written lease, and the HOA's rules set no cap on how many are rented."

v11 D2 struck "the board has set no cap on rentals" because row 51's source is the board saying "when DR Horton drafted the **governing documents**, rental percentage restrictions were not included" (May 18, 2026 minutes). The fix gave a different subject again. The page now says "the HOA's rules set no cap". Row 51's note: no cap appears in the Declaration pages read or in Exhibit C, but the December 2025 recorded rules (Book 5028) and the Orchards and Planters Point rules were not read, and the Declaration (4.3) lets the board change rules. So "the HOA's rules" is a wider group than the source's "governing documents". It is small. **Safe wording:** "Under the HOA rules, owners can rent their homes with a written lease. The HOA's governing documents have no cap on how many homes are rented [board minutes, May 18, 2026]." (v11's wording; it avoids the verb "sets".)

### Cut sentences. No fact left to check

The emergency-room sentence, the beach line in the day section, the "entrance by the schools" start, the "north-east edge" clause, the D.R. Horton board line in the FAQ, the "Preserve: North edge" tile and the "no high-risk flood zone" half of the old schools pro. The FAQ keeps "Most houses were built from 2004 to 2009, and most of the rest about a decade later" (row 41, unchanged). The flood fact still stands in the FAQ.

## Every changed or new unit (25), against `e64ae4f`

| # | Unit | Rows | Result |
|---|---|---|---|
| 1 | Subtitle "Flytrap habitat on its north edge, and two pools in the fee." | 79, 99, 10, 60 | match (v11 D3 wording) |
| 2 | Tile "Schools: Two at its edge" | 36, 98 | match |
| 3 | Short answer: "Living in The Farm means a swim after work" | 61 | **D2** |
| 4 | Short answer: "spring walks among wildflowers in a state nature preserve" | 105 | match (watch: no distance) |
| 5 | Short answer: "The county's gym, library and trails are minutes away by car." | 80, 81, 101 | match |
| 6 | Short answer: "Houses with yards usually sold for about $350,000 in the past year." | 48 | match (v10 D7 wording) |
| 7 | "Conway Medical Center planned a $160 million healthcare facility on the 353 acres ..." | 79, 99 | match |
| 8 | "The state bought the land instead, for the Lewis Ocean Bay Heritage Preserve." | 79, 99 | match |
| 9 | The flytrap paragraph (moved, split) | 99 | match |
| 10 | "State law bars any private use ... rules out building homes there once the land is dedicated." | 114 | match (wording note) |
| 11 | "The state has said it will dedicate it." | 79, 114 | match |
| 12 | "Its main entrance is about 6 minutes away by car." | 106 | **D1** |
| 13 | "the HOA's fitness room, which opens at 5:30 a.m." | 60, 62 | match |
| 14 | Rush hour "to the drive times on this page" | stories.json traffic-timing | match (v11 D1 applied) |
| 15 | "River Oaks Pizzeria is next to Publix, so dinner and groceries can be one stop." | 119 | match |
| 16 | "The library and the recreation center share one campus, about 3 minutes away by car." | 80, 101 | match |
| 17 | Map caption: drive times from the entrance nearest the large pool | 27 | match (watch: plural) |
| 18 | Map labels: "Set to join the preserve", "Publix", "Beach", "Emergency room, about 5 min"; alt text | 79, 29, 28, 30 | match |
| 19 | "A sidewalk runs along Wheatfield Drive from inside The Farm to International Drive, where both Ocean Bay schools are." | 38, 110 | match (watch) |
| 20 | Schools table header "Drive by car" | 38 | match |
| 21 | Pro: "Woods along the north edge that belong to the state, not a builder." | 79 | match |
| 22 | Pro: "The same three public schools for every home, two of them at its edge." | 36, 98 | match |
| 23 | Pro: "Groceries and dinner out without a long drive." | 29, 119 | match |
| 24 | "the HOA's rules set no cap on how many are rented" | 50, 51 | **D3** |
| 25 | "a typical townhome in The Orchards ... about $230,000, and a condo in Planters Point about $240,000" | 48 | match |

22 match, 3 drift.

## Drifts (3)

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 (medium) | "Its main entrance is about 6 minutes away by car." | Row 106. The 6 minutes is from the Wheatfield Drive junction. The page's stated start is the Farmers Rest Drive entrance, which gives 10.2 min; the middle gives 8.8. The start was in the v11 sentence and now sits only in a parenthesis in the sources note. | "Its main entrance is about 6 minutes by car from the Wheatfield Drive end of The Farm, and about 10 from the Farmers Rest Drive entrance." (or one start only) |
| D2 (low) | "Living in The Farm means a swim after work and spring walks among wildflowers in a state nature preserve." | Row 61. Pools are open April 15 to October 15. The short answer drops the season. | "Living in The Farm means a swim after work in pool season and spring walks among wildflowers in a state nature preserve." |
| D3 (low) | "Under the HOA rules, owners can rent their homes with a written lease, and the HOA's rules set no cap on how many are rented." | Row 51. The board's statement is about the governing documents drafted by D.R. Horton. "The HOA's rules" includes the December 2025 and sub-association rules, which were not read. | "Owners can rent their homes with a written lease. The HOA's governing documents have no cap on how many homes are rented [board minutes, May 18, 2026]." |

## v11 drifts: all applied

| v11 | What the page does now | Result |
|---|---|---|
| D1 rush hour "any drive here" | "to the drive times on this page" | Applied, word for word. |
| D2 "the board has set no cap" | "the HOA's rules set no cap on how many are rented" | The board clause is gone; the subject is still not the source's. **D3 above.** |
| D3 "Flytrap woods" | "Flytrap habitat on its north edge" | Applied. The v11 option "Flytrap habitat on its north edge, and two pools in the fee." |

v11 watch items: the sidewalk next to the school sentence (still a watch); "next to Publix" (still a watch); the GSMC commute and the beach tile name no start (the start is now in the caption and sources line); whether the tract has been dedicated since June 2025 (still unsearched, see the SCDNR layer note above).

## Watch items (not drifts, not struck)

1. **The short answer gives the preserve walks no distance.** The walks are in the existing preserve (SCDNR's trail description, row 105); its main entrance is 6 to 11 minutes by car depending on the start (D1 table). The tract on The Farm's north edge is not described as open (row 79, row 106). A reader who sees "Living in The Farm means ... walks in a state nature preserve" beside "woods along the north edge" may picture a walk from the back yard. If D1 is fixed, the day section carries the distance; a short answer without it is a style call.
2. **Map caption "drive times" (plural)** with one drive time on the map.
3. **Sidewalk plus "where both Ocean Bay schools are"** in one clause may read as a walk to school.
4. **"Next to Publix"** is two buildings 72 ft apart on one parcel (v11 watch).
5. **The tract's dedication status.** The page's tense matches the only dated source (June 2025). SCDNR's DEV layer shows `HeritagePreserve: "YesC"`; I cannot read the code.
6. **"Bars any private use"** drops the statute's "taken for" (see the heritage-preserve section). The safest verb is "may not be taken for any private use".

## Promises

All are actions an agent can do, with no promised outcome. No promise is new in 14g; the offers are as in v11: "We will send the homes for sale in The Farm that fit", the roof and air conditioner check, the internet question to the HOA, the pool minutes, the two second-fee figures side by side, the distance from any house to the preserve's hunting land, the school zones check, the Corps' map check, and the end box.

## Struck entries added

Three, in `the-farm-struck.json` (68 patterns in all, up from 65): D1 (rows 123, 122d, 106), D2 (rows 123, 122b, 61), D3 (rows 123, 122i, 51). `node tools/struck-check.test.js`: "all controls pass". `--strict` on the preview: before my entries the Farm page was quiet (65 patterns); after them, 3 hits, one for each entry, and each goes quiet on its approved wording.

## Status

- Row 122: **verified with corrected wording**.
- New ledger row 123, "rewrite check (v12)": **wrong in part (v12)**.
