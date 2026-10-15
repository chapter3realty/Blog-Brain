# The Farm, row 124 and final check v13 (round 14h, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify row 124; (2) lessons B45, B48 and B51: read each sentence changed in the final pass against its row and, where the row is thin, against the source or the county data. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (88c8eb8), the diff against `003cf53`, `data/photos.json` at HEAD for `the-farm-where-from-above`, the built page `preview/b/the-farm.html` (04:02 UTC; it carries every changed sentence, and I searched it for each), and the v12 notes (`farm-verify-v12.md`).

## Result

- Row 124: **verified with corrected wording.** Three sentences go past their rows.
- Diff against `003cf53`: **nothing else changed.** The spec diff is 15 insertions and 9 deletions. It holds the seven sentences in the brief, the version-15 comment in the header, and one more edit, the sources line (item 3). No other text, number, table or link changed.
- Units checked: 11 fact-bearing units (the seven in the brief, with the two-sentence ones counted by sentence). **8 match, 3 drift** (D1 and D2 low, D3 low, a voice rule).
- Drifts: D1 the lot size, D2 the stories, D3 "documents set no cap". Each has a struck entry.
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, the-farm: **before my entries "the-farm (68 patterns): no struck wording."** After my 3 entries: 71 patterns, 3 hits, one for each of D1 to D3. Each entry is quiet on its approved wording. No old struck wording came back.
- `node tools/struck-check.test.js`: "all controls pass".
- Every v12 correction held (D1 start, D2 pool season, D3 governing documents), and the heritage sentence is v12's own safe wording, word for word.
- Distance words (`rules/distance-words.json`, run inside struck-check): no hit on the page.

## 1. Short answer: "Living in The Farm means a swim after work in pool season and spring walks among wildflowers in a state nature preserve. The county's trails and a rock wall are minutes away by car." Match

- **Pool season.** Row 61: "HOURS OF POOL OPERATION FOR ALL SWIMMING POOLS: April 15 thru October 15 from 9 am until 9pm." The pools close at 9 p.m., so "after work" holds, and "in pool season" carries the dates the v12 D2 strike asked for.
- **Spring walks, wildflowers, a state nature preserve.** Row 105 (SCDNR Public Lands): "From March through June, pitcher-plants and wildflowers provide a wonderful show." Unchanged since v12.
- **A rock wall.** I re-opened the county page (horrycountysc.gov, Recreation Centers). The Carolina Forest Recreation Center, 2254 Carolina Forest Blvd: "full size gymnasium for open gym and sport leagues, a fitness room for exercise classes, a multipurpose room with a divider for multiple events, locker rooms, kitchen, and a rock climbing wall." The wall is inside the center. "A rock wall" for "a rock climbing wall" adds nothing. The page's day section says the same and names the center (row 80).
- **The county's trails.** Row 81: the Bike and Run Park, "7 miles of mountain biking and hiking trails". The county's.
- **Minutes away by car.** OSRM today from the Farmers Rest Drive entrance: recreation center and library campus 3.3 min; Bike and Run Park 3.6 min. v12 measured the other starts: the center 2.8 to 6.5 min and the park 4.9 to 8.4 min from the south, east, north ends and the middle. "Minutes away" holds from every start; it is not on the distance list.
- The cut of "gym" and "library" removes two claims; nothing is left over from them.

## 2. Law: "State law says a heritage preserve may not be taken for any private use. Once the land is dedicated, that rules out private homes on it. The state has said it will dedicate it." Match

- **Re-opened:** S.C. Code 51-17-80 (scstatehouse.gov/code/t51c017.php, HTTP 200). Item 1: "No Heritage Preserve shall be taken for any other public purpose unless the approval of both the board of the department and the Governor has been obtained. In no case shall any Heritage Preserve be taken for any private use." Item 2: "An acquisition by dedication shall be in perpetuity." Dedication is complete when the deed and the Dedication Agreement are filed in the county's real estate records.
- **First sentence** keeps the statute's verb ("taken for"), the v12 wording note. It no longer says "bars", which could be read as "no private person may use it". Match.
- **Second sentence** is the inference v12 accepted: the statute does not name homes; homes are a private use; "once the land is dedicated" keeps the condition. It does not say never, and it does not say no building at all (a road or a utility for a public purpose is not private). It is the strongest wording v12 gave, unchanged.
- **Third sentence.** SCDNR, June 10, 2025: "This property will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve". Match. Watch: I did not search the Register of Deeds for a filed Dedication Agreement; the Public Lands layer's "YesC" code is undocumented (v12). The sentence is true whether or not it has happened, because it reports what the state said.

## 3. "Its main entrance is about 10 minutes by car." Match (and the sources line names the start)

- **Measure.** OSRM today, to the preserve's Entrance 1 (SCDNR layer, PropertyID 505, -78.8909023, 33.805794): from the **Farmers Rest Drive entrance** (-78.875215, 33.754869) **10.16 min, 5.05 mi**. From the Wheatfield Drive / International Drive junction 5.96 min. The row 106 figure (10.16) reproduces. "About 10" is right from the page's start.
- **The start.** The only spec change outside the seven sentences is the sources line, from "Drives start at the Farmers Rest Drive entrance, without traffic (the preserve's at Wheatfield Drive)." to "Drives start at the Farmers Rest Drive entrance, without traffic." The built page carries the new line. The Wheatfield exception is gone, so the one stated start covers the preserve drive. This is v12's second safe wording ("give one start only"). The sentence has no start of its own; the sources line is where the page says it, for every drive time (the same as the 12-minute hospital drive and the 3-minute library drive).
- **Same entrance as the map caption.** See item 6.
- Watch: a reader who lives at the Wheatfield end will find it nearer (6 minutes). The page claims a start, and that is what v12 asked for.

## 4. Rent: "Under the HOA rules, owners can rent their homes with a written lease, and the HOA's governing documents set no cap on how many homes are rented." Drift D3 (low, voice)

- **Fact.** Row 50: "All leases shall be in writing." Row 51, board minutes of May 18, 2026: "The Board explained when DR Horton drafted the governing documents, rental percentage restrictions were not included." "Governing documents" now matches the source's subject (v12 D3 is fixed). "How many homes" for "the number of rentals" matches the question asked. No minimum lease term is stated. Match on the fact. Watch (row 51): the December 2025 recorded rules and the Orchards and Planters Point rules were not read.
- **Wording.** "Documents set no cap" is the verb the owner struck: `voice/RULES.md` FIG-4, "I dont like the term sets ... the lease never sets anything condition doesnt set anything nothing sets anything", with the recorded replacement "state law sets no maximum deposit" to "state law has no maximum deposit". A document is the subject, as in the owner's example. The build bans only "sets"; "set" passes it, which is why the preview built. The v12 verifier gave "have no cap" as the safe wording (and the v11 D2 `use` text has it); the writer changed it back to "set".
- **Safe wording:** "Under the HOA rules, owners can rent their homes with a written lease, and the HOA's governing documents have no cap on how many homes are rented [board minutes, May 18, 2026]."

## 5. Homes

### "Most houses here give you three or four bedrooms and a back yard of your own, on a lot of about a fifth of an acre." Drift D1 (low) on the lot; the rest matches

- **Three or four bedrooms.** Row 41: 454 detached listings, bedrooms 3 x191, 4 x172, 5 x78, 6 x10, 7 x2, 2 x1. 3 or 4: 363 of 454, 80 percent. "Most" holds. The 454 are houses sold since 2020 or for sale (35 percent of the 1,292 house lots; the Brookberry section is filed under another MLS name and is not in the 454). It is a large sample, not the few listings of B48, and the row's own wording is "Most have 3 or 4 bedrooms". Match.
- **A back yard of your own.** No ledger row says it; rows 1, 41 and 43 are about counts and sizes. I measured it. I pulled the 1,292 house parcels (land use 101) and the county building footprints (layer 27) and roads (layer 18), took the largest footprint on each lot as the house, took "back" as the side away from the nearest road, and measured. Result: every house lot has more than 500 square feet of lot behind the house; **93 percent have 20 feet or more** between the back wall and the back lot line; 97 percent have 2,000 square feet or more behind the house; the median back area is about 3,600 square feet; the median lot is 73 percent not built on. The lot is the owner's parcel. "A back yard of your own" holds as a plain reading of parcel lines and footprints (not a survey; a pond, a fence or the HOA's rules on what may stand in it are not measured). The page's example in the FAQ, "a big back yard", is Rachel and Luis's house, not this claim. Match; the measurement is in row 125.
- **On a lot of about a fifth of an acre.** Row 43 is a **median**: 8,309 square feet, 0.19 acre; the middle 80 percent run 6,600 to 12,800 (0.15 to 0.29 acre). The sentence puts the median after "Most houses", so it says most houses sit on a lot of about a fifth. I re-ran the parcels (1,292 lots): median 8,345 square feet (0.19 acre); 74 percent are 0.15 to 0.25 acre, only 47 percent are 0.17 to 0.23, 33 percent are 0.18 to 0.22. The v11 sentence was "A typical house lot is about a fifth of an acre", a typical, not a "most". This is B45's "a source's one sentence turned into a general rule", small.
- **Safe wording:** "Most houses here give you three or four bedrooms and a back yard of your own. A typical lot is about a fifth of an acre [county parcel records]." (The back-yard half stands as the writer has it.)

### "Some houses have five bedrooms or more. Most have about 1,450 to 3,200 square feet, on one or two stories." Drift D2 (low) on the stories; the rest matches

- **Some, five bedrooms or more.** Row 41: 90 of 454 (20 percent). "Some" holds. Not "many" or "most".
- **Most, 1,450 to 3,200 square feet.** Row 40: 454 detached listings, middle 80 percent 1,453 to 3,220, median 1,946. "Most" is 80 percent and "about" rounds the ends. Match. The row's group is "houses listed since 2020", so the sentence is the sample's range stated for the houses; it is a large sample (B48 passes).
- **One or two stories.** Row 42: the only story data is the Real Geeks "Levels" field on the **2026** detached listings: of 47 that state it, **24 two stories, 17 one story, 6 one and a half**. That is 47 houses, 3.6 percent of 1,292, from this year only. The county parcel record has no story field (row 40 source). Two things changed since v12 (which passed "Houses for sale here have one or two stories"): "for sale" is gone, so the group went from the houses listed this year to the houses in The Farm, and "Most have ... on one or two stories" now says most houses have one or two stories, leaving the 6 one-and-a-half-story houses (13 percent) outside it. "Most" holds on the 47 (87 percent), but a 47-listing, one-year sample is the B48 case (a few listings made into a rule), and the page does not say it is a sample.
- **Safe wording:** "Some houses have five bedrooms or more. Most have about 1,450 to 3,200 square feet. Some are one story and some are two [listings, MLS; stories are stated by 47 listings from 2026]." Or cut the stories.

### "The Orchards has about 200 townhomes, and Planters Point has about 70 condos, most with two or three bedrooms." Match

- **Counts.** Row 1: county land use 109 = 207 lots in The Orchards; land use 107 = 72 condominium units in Planters Point. I re-ran both on layer 24 today: 1,292 / 207 / 72 (the three sum to 1,571). "About 200" and "about 70" round 207 and 72 down by 3 and 2 percent. Fine.
- **Most with two or three bedrooms.** Row 44: The Orchards, 188 listings: 3 x113, 2 x57, 4 x18, so 170 of 188 (90 percent) have two or three; 188 of 207 lots is 91 percent of the townhomes. Row 45: Planters Point, 49 listings: 3 x34, 2 x15, so all 49 have two or three (49 of 72 units is 68 percent). Together 219 of 237, 92 percent. "Most" holds for each place and for the two together; the Orchards sample is nearly the whole place, so this is not the B48 case.
- Watch: row 45 notes that 13 of the 49 Planters Point cards are filed by MLS as townhouses. The county record calls all 72 condominium units (land use 107, "U/APT/CONDO" in deed memos), so "condos" stands.

## 6. Map caption: "Where The Farm is. The drive to the emergency room starts at the entrance nearest the large pool. The orange line is its edge." Match

- **Same entrance as Farmers Rest Drive.** Row 27: the reference point is the Farmers Rest Drive entrance from Carolina Forest Boulevard, "the entrance nearest the large pool and the activity center". I checked it. The large pool is at 201 Carolina Farms Blvd (county address point, -78.87570, 33.75952). Straight line to the Farmers Rest Drive entrance 520 m; to the Mill Street entrance (-78.883857, 33.75808) about 770 m; to the Wheatfield Drive entrance (-78.866827, 33.768257) about 1.2 km. By road (OSRM): 1.73 min / 0.39 mi from Farmers Rest, 2.29 min from Mill Street, 3.39 min from Wheatfield. The entrance nearest the large pool is the Farmers Rest Drive entrance. The sources line names that entrance for all drives, the caption names it by the pool; they are the same place.
- **Drive to the emergency room.** Row 30: OSRM 5.21 min, 1.78 mi, from that entrance to McLeod's emergency room (107 McLeod Health Blvd). The map label says "Emergency room, about 5 min" (verified in v12, overlay on the image). The caption now says only what the picture shows: one drive time, from one start. v12's watch (the plural "drive times") is fixed.
- The spec and `data/photos.json` at HEAD carry the same caption. (The working copy of `photos.json` has uncommitted edits by another writer; I read HEAD.) The `regionCaption` in the spec still says "drive times by car from its entrance near the large pool" but is not rendered on the built page; I searched the preview.
- "The orange line is its edge" is unchanged.

## 7. Schools: "Both Ocean Bay schools are on International Drive at The Farm's edge. A sidewalk runs along Wheatfield Drive to International Drive." Match

- **On International Drive.** Row 38: Ocean Bay Middle 905 International Dr; Ocean Bay Elementary 950 International Dr (county address points; school-zone layer HCSAddress). Both are on International Drive.
- **At The Farm's edge.** Row 98 and v12: the middle school parcel touches The Farm's outline (0.0 m); the elementary parcel is 12.2 m (40 ft) from it, across Wheatfield Drive; both main buildings are within about 60 m. The nearest house lots are 15 m and 69 m away. "At its edge" is the v12 pro and tile wording and it passes. It is not on the distance list.
- **Sidewalk.** Row 110: OSM way 1283755951 is a sidewalk along Wheatfield Drive from Carolina Farms Blvd to the International Drive junction (about 610 m), confirmed on the 2023 aerial. The sentence drops "from inside The Farm" and keeps only "along Wheatfield Drive to International Drive". That is narrower than the source, and true. It claims no crossing, no walk to a school and no user (row 110 notes none is claimed).
- Watch, as in v12: the two sentences sit side by side, so a reader may infer a walk to school. The page claims none. Not struck.

## Every changed unit (11)

| # | Unit | Rows | Result |
|---|---|---|---|
| 1 | "a swim after work in pool season" | 61 | match (v12 D2 applied) |
| 2 | "The county's trails and a rock wall are minutes away by car." | 80, 81 | match |
| 3 | "State law says a heritage preserve may not be taken for any private use. Once the land is dedicated, that rules out private homes on it." | 114, 79 | match (v12 safe wording) |
| 4 | "Its main entrance is about 10 minutes by car." and the sources line | 106, 27 | match (v12 D1 applied) |
| 5 | "the HOA's governing documents set no cap on how many homes are rented" | 50, 51 | **D3** (fact matches; the verb is the owner's FIG-4) |
| 6 | "Most houses here give you three or four bedrooms and a back yard of your own" | 41, 1 and the lot data | match |
| 7 | "on a lot of about a fifth of an acre" (after "Most houses") | 43 | **D1** |
| 8 | "Some houses have five bedrooms or more. Most have about 1,450 to 3,200 square feet" | 40, 41 | match |
| 9 | "on one or two stories" | 42 | **D2** |
| 10 | "The Orchards has about 200 townhomes, and Planters Point has about 70 condos, most with two or three bedrooms." | 1, 44, 45 | match |
| 11 | Map caption; schools and sidewalk (two sentences each) | 27, 30; 38, 98, 110 | match |

## Struck list

Three entries added to `facts/the-farm-struck.json`, row `the-farm 125 (v13 D1)` to `(v13 D3)`: the lot sentence, the stories phrase and "governing documents set no cap". `node tools/struck-check.test.js`: all controls pass. Strict run on `preview/b`: the-farm 68 patterns, no struck wording before my entries; 71 patterns, 3 hits after, one per drift. The same run still reports hits on gated-communities (18); those are not this page.

## What the writer does

Apply D1 to D3 with the safe wordings above, or cut the claim. The three fixes are one sentence each:

- D1: "Most houses here give you three or four bedrooms and a back yard of your own. A typical lot is about a fifth of an acre."
- D2: "Most have about 1,450 to 3,200 square feet. Some are one story and some are two." (Or cut the stories.)
- D3: "... and the HOA's governing documents have no cap on how many homes are rented."

Nothing else needs a fact change. No claim should be left out of the page altogether.
