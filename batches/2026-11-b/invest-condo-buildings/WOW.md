# Wow lines: entries 1 to 15, south to north (2026-11-10)

The owner, 2026-11-10: "i don't feel like any of the buildings are emotionally special there's no wow factor to the description of any of the condos it think they should all have a wow factor of some sort."

Each building gets one or two true things a buyer would picture, the rows behind them, candidate sentences and a bold strip title. Every row named here is in `facts.md` (rows 43 to 59, plus older rows). **All of rows 43 to 59 are PENDING-VERIFY: nothing here goes on the page until a verifier marks the row.** Rows 51 and 56 are BLOCKED: their lines are given only for the case where a verifier confirms them, with a fallback.

Rules kept: no "best", "largest", "tallest", "stunning" or "luxury"; no view claim the source does not make; nothing about safety; a resort's perk for its guests is said as a perk for guests, never for owners. Heights are the FAA's figures, said with "about" where the FAA's accuracy is loose.

The strip title replaces "Condos for sale at <name> now" (the `strip()` helper in `specs/condo-buildings.js`).

## 1. Myrtle Beach Resort

Wow: the Renaissance Tower, about 236 feet tall (row 43), at the south end of the strip (rows 26, 41).

- "Myrtle Beach Resort's Renaissance Tower stands about 236 feet tall. It is the southernmost tower on this page, more than a mile south of Myrtle Beach State Park and its seaside forest."

Strip title: **Oceanfront condos at Myrtle Beach Resort, home of the Renaissance Tower**

Note for the lead (row 43): the page's county unit and sale counts for this resort use one regime of at least four.

**Verifier 2026-11-10:** Row 43 VERIFIED. The line holds as written ("about 236 feet"; the FAA point is on the Renaissance Tower parcel, accuracy 100 ft). "More than a mile south" holds (1.03 mi to the park parcel). The strip title holds, but "home of the Renaissance Tower" pictures nothing; the line is the wow.

## 2. Compass Cove

Wow: 23 water features, two named waterslides (rows 31, 44); the Pinnacle tower is 166 feet (row 45).

- "Compass Cove has 23 water features, among them three lazy rivers and two waterslides, the Schooner Screamer and the Compass Cruiser."
- "Its Pinnacle tower stands 166 feet, and the Crow's Nest Oceanfront Bar & Grill is on site."

Strip title: **Oceanfront condos at Compass Cove, with 23 water features**

**Verifier 2026-11-10:** Rows 44, 45 VERIFIED. Both lines and the title hold.

## 3. Bluewater Resort

Wow: indoor pickleball and racquetball (row 46). Halfway between Springmaid Pier and Family Kingdom (row 26).

- "Bluewater has indoor pickleball and racquetball courts, so you can play all year."

Strip title: **Oceanfront condos at Bluewater Resort, with indoor pickleball**

Row 46's source is a booking site on the resort's domain; if the verifier does not accept it, keep the page's current text and use: **Oceanfront condos at Bluewater, between Springmaid Pier and Family Kingdom** (row 26).

**Verifier 2026-11-10:** Row 46 VERIFIED (the resort's domain, run by its on-site rental operator). Use the pickleball line and title.

## 4. The Palace

Wow: a 241-foot tower with floors numbered up to 23 (row 47); two beach accesses and a putting green by the ocean (row 48).

- "The Palace stands 241 feet tall, with floors numbered up to 23. It has two beach accesses and a putting green beside the ocean."
- Optional, for an investor: "Its guests get two free passes a day to the H2Oasis water park next door, in season." (Row 48: guests, not owners.)

Strip title: **Condos in the Palace, a 241-foot tower on the ocean**

**Verifier 2026-11-10:** Rows 47, 48 VERIFIED. One fix: the putting green is "next to the oceanfront pools", not beside the ocean. Write: "It has two beach accesses and a putting green next to its oceanfront pools." "241 feet" holds (the FAA's figure, within 3 ft); a 2021 newspaper list gives 227, so "about 240 feet" is also fine. Title holds.

## 5. Landmark Resort

Wow: 17 water features; a heated 300-foot indoor lazy river open all year, and a second 300-foot lazy river outside (row 49); H2Oasis (row 17).

- "Landmark has 17 water features. Its 300-foot indoor lazy river is heated and open all year, and a second 300-foot lazy river runs outside in season."

Strip title: **Oceanfront condos at Landmark Resort, home of the H2Oasis water park**

**Verifier 2026-11-10:** Row 49 VERIFIED. Line and title hold; keep row 17's limit (H2Oasis is for rental-program guests) wherever the page says more about the water park.

## 6. Sea Mist Resort

Wow, only if the verifier finds a current source that the water park is open (row 50): nearly 16 acres, six pools and the Wahoo Waterpark.

- "Sea Mist sits on nearly 16 acres, with five outdoor pools, an indoor pool and the Wahoo Waterpark, which has a lazy river and a slide three stories high."

Fallback (row 7, already verified): the price. "Sea Mist is where an oceanfront unit costs the least on this page."

Strip title: **The lowest-priced oceanfront condos on this page: Sea Mist Resort** (row 7)

**Verifier 2026-11-10:** Row 50 STRUCK. Do not use the Wahoo line. Use the fallback line and this title.

## 7. Coral Beach Resort

Row 51 is BLOCKED (bowling alley, third-party listings only). If a verifier confirms it at coral-beach.com:

- "Coral Beach has its own bowling alley, eight lanes, indoors."
- Strip title: **Oceanfront condos at Coral Beach Resort, with its own bowling alley**

Fallback (rows 7, 27): **Oceanfront condos at Coral Beach, next door to Sea Mist, from under $100,000** only if the strip's own units support "from under $100,000" on the day it is built; otherwise **Oceanfront condos at Coral Beach Resort, next door to Sea Mist**.

**Verifier 2026-11-10:** Row 51 still BLOCKED (coral-beach.com reset the connection again). Use the fallback.

## 8. Bay View Resort

Wow: the Boardwalk at its door (rows 52, 32).

- "Bay View sits right in front of the 1.2-mile Boardwalk, with the SkyWheel to the north. Starbucks is on the ground floor of the tower."
- Optional: "The FAA lists the tower at 236 feet." (Row 52: loose, within 50 feet. Prefer the Boardwalk line.)

Strip title: **Condos at Bay View, right on the Myrtle Beach Boardwalk**

**Verifier 2026-11-10:** Row 52 CORRECTED. The Boardwalk line and the title hold. The optional FAA line is STRUCK: the FAA point is on a neighboring hotel parcel. Print no height for Bay View.

## 9. Camelot by the Sea

Wow: the walk (row 53, from row 26).

- "From Camelot, the Boardwalk's north end at Pier 14 is about a ten-minute walk, and the SkyWheel is a few blocks past it."

Strip title: **Oceanfront condos at Camelot by the Sea, a walk from the Boardwalk**

**Verifier 2026-11-10:** Row 53 VERIFIED. Line and title hold.

## 10. Caribbean Resort

Wow: two lazy rivers (row 33); next door, Sea Captain's House, which began as a beach cottage built in 1930 (rows 54, 27).

- "The Caribbean has a 200-foot lazy river outside and a second lazy river indoors."
- "Next door is Sea Captain's House, which began as an oceanfront beach cottage built in 1930."

Strip title: **Oceanfront condos at the Caribbean, next door to Sea Captain's House**

**Verifier 2026-11-10:** Row 54 VERIFIED. Both lines and the title hold.

## 11. Beach Colony

Wow: an oceanfront lawn with hammocks between the pools and the sand; a tower about 200 feet tall (rows 55, 37).

- "Between Beach Colony's pool deck and the sand is an oceanfront lawn with hammocks. The tower stands about 200 feet tall."

Strip title: **Oceanfront condos at Beach Colony, with a lawn and hammocks by the sand**

**Verifier 2026-11-10:** Row 55 CORRECTED. Cut "The tower stands about 200 feet tall." (the FAA's 205 ft and a 2021 newspaper estimate of about 246 ft disagree). Keep: "Between Beach Colony's pool deck and the sand is an oceanfront lawn with hammocks." Title holds.

## 12. Dunes Village Resort

Row 56 is BLOCKED (the site refused the read). If a verifier confirms it at dunesvillage.com:

- "Each of Dunes Village's two towers has its own indoor water park."
- Strip title: **Oceanfront condos at Dunes Village, with an indoor water park in each tower**

Fallback (row 4, already verified): **Big oceanfront condos at Dunes Village: most have two bedrooms or more**

**Verifier 2026-11-10:** Row 56 still BLOCKED (403 to the verifier too). Use the fallback.

## 13. Monterey Bay Suites

Wow: a pool on the roof with a view of the skyline; an indoor pool that opens into the outdoor one (row 57).

- "Monterey Bay Suites has a pool on its roof, with a view of the Myrtle Beach skyline. Downstairs, the indoor pool opens into the outdoor pool, so you can swim out into the sun."

Strip title: **Oceanfront condos at Monterey Bay Suites, with a rooftop pool**

**Verifier 2026-11-10:** Row 57 VERIFIED. Line and title hold.

## 14. Grande Cayman Resort

Wow: 720 feet of beach (the whole resort) and a waterslide three stories tall (row 58); the lazy river under a roof (row 34).

- "The resort has 720 feet of beach on the north end of Myrtle Beach, and a waterslide three stories tall. Its 250-foot lazy river is under a roof, so you can float it all year."

Strip title: **Oceanfront condos at Grande Cayman, with 720 feet of beach**

Note for the lead (row 58): by street number Grande Cayman (7200) is north of The Caravelle (6900) and Ocean Reef (7100); the page orders it by a listing point that matches Monterey Bay's.

**Verifier 2026-11-10:** Row 58 VERIFIED. One fix: the slide is seasonal ("Closed for the Winter season as of November 1st"). Write "a waterslide three stories tall, open in season". Title holds. The source URL now redirects to https://www.grandecaymanresort.com/amenities/.

## 15. The Caravelle

Wow: a pool deck a full block long, from the beach to Ocean Boulevard; an indoor pool on the 7th floor behind floor-to-ceiling windows (rows 59, 36).

- "The Caravelle's pool deck runs a full block, from the beach to Ocean Boulevard. Its indoor pool is on the 7th floor, behind floor-to-ceiling windows."

Strip title: **Oceanfront condos at The Caravelle, a Myrtle Beach resort since 1960** (row 36: "Since its inception in 1960"; it does not say the resort has always stood on this spot)

**Verifier 2026-11-10:** Row 59 VERIFIED. One fix: the 7th-floor pool is "at the main Caravelle Resort building", one of nine. Write: "In the main Caravelle building, the indoor pool is on the 7th floor, behind floor-to-ceiling windows." Title holds.

---

# Wow lines: entries 16 to 30, south to north (2026-11-10)

Second researcher. Rows 60 to 79 in `facts.md`, all **PENDING-VERIFY**, plus older verified rows. Saved sources: website working copy `data/2026-11-b/invest-condo-buildings/raw/wow-pages/`, `raw/faa-dof-heights.json` (`dof_heights.py`), `raw/county-unit-floors.json` (`unit_floors.py`), `raw/wow-osm-nominatim.json`. Same rules as above. One exception is offered for the lead to decide: Margate Tower is the tallest building in the FAA's obstacle file for the strip (row 60), a checkable record, so its first title says so; a fallback title without "tallest" is given. Floors are the county's unit numbers (top floor number, as on the elevator).

## 16. Ocean Reef Resort

Wow: a renovation of more than $15 million, just finished; the Shipwreck Water Park and an indoor lazy river (row 77; rows 35).

- "Ocean Reef just finished a renovation of more than $15 million, the resort says."
- "Children get the Shipwreck Water Park, where giant tiki men stand guard over a sunken ship and a slide. For a cold or rainy day there is an indoor lazy river."

Strip title: **Oceanfront condos at Ocean Reef, home of the Shipwreck Water Park**

Note: the renovation is the resort's rooms and grounds; never say an owner's unit was redone.

**Verifier 2026-11-10:** Row 77 VERIFIED. Two fixes. (1) The resort gives no date: cut "just". Write "Ocean Reef completed a renovation of more than $15 million." (struck list). (2) The tiki men "stand sentry over this adventure-filled water park"; the ship is "the sinking ship". Write: "Children get the Shipwreck Water Park, with giant tiki men, a sinking ship and a waterslide." Title holds.

## 17. Sand Dunes Resort

Wow: a 130,000-gallon water park on the grounds, an oceanfront lazy river, eight buildings (row 78; row 38).

- "Sand Dunes has a 130,000-gallon water park on its grounds, an oceanfront lazy river and a blacklight indoor mini golf course."
- "Its condos and suites fill eight buildings, so you can choose a tower on the sand or a cheaper one across the street."

Strip title: **Sand Dunes condos with a 130,000-gallon water park on the grounds**

Note: the second sentence rests on the resort's building list (row 78 source page: towers "Across the street ... with a distant ocean view").

**Verifier 2026-11-10:** Row 78 VERIFIED. The first line and the title hold (the water park is "onsite"). The second line goes beyond the row: nothing says the buildings across the street are cheaper to buy. Write: "The resort's suites, condos and villas fill eight buildings, some on the sand and some across the street." (struck list) Cut it if the verifier wants the quote in the row first.

## 18. Sands Ocean Club

Wow: near the Dunes Golf and Beach Club, a private club since 1948 where the PGA Tour plays the Myrtle Beach Classic (row 79; row 26).

- "Sands Ocean Club sits on Shore Drive near the Dunes Golf and Beach Club, a private club since 1948. Its course is where the PGA Tour plays the Myrtle Beach Classic."

Strip title: **Sands Ocean Club condos, near the PGA Tour's Myrtle Beach course**

Note: never say an owner can play the course. Row 79 asks the verifier to settle one distance (row 26 against the live line).

**Verifier 2026-11-10:** Row 79 CORRECTED. The club says it hosted the 2026 Classic; nothing read names the 2027 course. Write: "Sands Ocean Club sits on Shore Drive, under a quarter mile from the Dunes Golf and Beach Club, a private club since 1948. Its course hosted the PGA Tour's 2026 Myrtle Beach Classic." Title: **Sands Ocean Club condos, near the course that hosted the PGA Tour in 2026**. The distance is settled: under a quarter mile (0.20 mi to the club's parcel), the struck list's approved wording.

## Kingston Plantation (lead paragraph, no strip)

Wow: more than half a mile of beach, 157 acres built around trees and lakes, a campground in the 1960s, a golf course across the street (row 62; row 30).

- "Kingston Plantation has more than half a mile of beach, and its 157 acres are built around trees and lakes. Families have stayed here since the 1960s, when it was a campground called Lake Arrowhead. The Arcadian Shores golf course is across the street."

**Verifier 2026-11-10:** Row 62 VERIFIED. One fix: the half mile and the 157 acres are Kingston Resorts' figures, and the trees are its words; lakes appear only beside its lodge and villas. Write: "Kingston Resorts says its grounds have more than half a mile of beach and 157 acres built around trees, with lakes beside its lodges and villas. Families have stayed here since the 1960s, when it was a campground called Lake Arrowhead. The Arcadian Shores golf course is across the street."

## 20. Margate Tower

Wow: 335 feet, the tallest building in the FAA's file from Garden City to Little River; units to the 29th floor (rows 60, 61).

- "Margate Tower rises 335 feet, the tallest building in the FAA's records for the Grand Strand. Its units climb to the 29th floor."

Strip title: **Condos in Margate Tower, the tallest tower on the Grand Strand**
Fallback: **Condos in Margate Tower, 29 floors over Kingston Plantation's beach**

**Verifier 2026-11-10:** Rows 60 CORRECTED, 61 VERIFIED. "335 feet" is too exact (FAA accuracy 50 ft; a 2021 newspaper list gives 329), and "the Grand Strand" has only the FAA file behind it. Two sources agree on Myrtle Beach. Write: "Margate Tower rises about 330 feet, the tallest building in Myrtle Beach. Its units climb to the 29th floor." Title: **Condos in Margate Tower, the tallest building in Myrtle Beach** (struck list). The fallback title holds.

## 21. Brighton Tower

Wow: units to the 21st floor, on Kingston's half mile of beach (rows 63, 62).

- "Brighton's units climb to the 21st floor. The tower stands in Kingston Plantation, on more than half a mile of beach, with the Arcadian Shores golf course across the street."

Strip title: **Brighton Tower condos, 21 floors over Kingston Plantation's beach**

**Verifier 2026-11-10:** Row 63 VERIFIED. Line and title hold.

## 22. South Hampton

Wow: the smallest Kingston tower, beside the Embassy Suites, on grounds of trees and lakes (rows 64, 62; rows 5, 27).

- "South Hampton is the smallest of the three towers, with 144 units beside the Embassy Suites. Its grounds are Kingston's 157 acres of beach, trees and lakes."

Strip title: **South Hampton condos on Kingston Plantation's half mile of beach**

Note: the county numbers South Hampton's units by letter, so there is no floor count to give.

**Verifier 2026-11-10:** Row 64 CORRECTED. "The smallest of the three towers" is wrong: North Hampton, a Kingston tower beside Royale Palms, has 125 units. And the 157 acres are not all beach. Write: "South Hampton has 144 units, fewer than Margate or Brighton, and stands beside the Embassy Suites, on Kingston's half mile of beach." (struck list) Title holds.

## 23. Royale Palms

Wow: 255 feet, units to the 24th floor, beside the Hilton and its sand-bottom pool (rows 65, 66; row 27).

- "Royale Palms rises 255 feet beside the Hilton, with units up to the 24th floor."
- "Kingston Resorts lists the Hilton's sand-bottom pool and Currents Seaside Entertainment for its Royale Palms guests."

Strip title: **Royale Palms condos, 24 floors up beside the Hilton**

Note: if the verifier cannot tie the 255-foot obstacle to Royale Palms rather than the Hilton (row 65), drop the height and keep the floors.

**Verifier 2026-11-10:** Rows 65, 66 VERIFIED. The height is tied by a second source (a 2021 newspaper list: Royale Palms, 256 ft, 24 floors). Write "about 255 feet". The second line holds only as a list for guests who rent through Kingston Resorts: "For guests who rent here, Kingston Resorts lists the Hilton's sand-bottom pool and Currents Seaside Entertainment." Never say owners get them (row 20). Title holds.

## 24. SeaWatch Resort

Wow: 19 water features, a tiki bar and grill on the oceanfront, a fire pit (row 67; row 39).

- "SeaWatch has 19 water features: six oceanfront pools, two 225-foot lazy rivers and ten hot tubs. In season there is a tiki bar and grill on the oceanfront, and a fire pit for the evening."

Strip title: **SeaWatch condos, with 19 water features behind a gate**

**Verifier 2026-11-10:** Row 67 VERIFIED. Line and title hold. "For the evening" is ours, not the resort's; harmless, or write "and a fire pit".

## 25. Ocean Creek Resort

Wow: sunsets past the dunes over a tidal creek (row 18, verified, already on the page); 57 acres with trails and courts (row 68).

- "From Ocean Creek's towers, you watch the sun go down past the dunes and a creek that rises and falls with the tide."
- "Its 57 acres have walking and biking trails, tennis and pickleball courts, and a stretch of beach the resort calls secluded."

Strip title: **Ocean Creek condos on 57 acres, with sunsets over a tidal creek**

**Verifier 2026-11-10:** Row 68 CORRECTED. Both lines and the title hold. The 180 ft height is STRUCK (the FAA point is on another regime, The Tower): never add it.

## 26. North Beach Towers

Wow: a 7.5-acre island between the ocean and White Point Swash, around 2.5 acres of pools with a lazy river, a swim-up bar and cabanas; 19 floors and 18 penthouses (rows 69, 70).

- "North Beach Towers stand on a 7.5-acre island between the ocean and White Point Swash, the resort says. Around them are 2.5 acres of pools, with a lazy river, a swim-up bar and private cabanas."
- "Units climb to the 19th floor, and 18 penthouses sit above them."

Strip title: **North Beach Towers condos, with a swim-up bar and 2.5 acres of pools**

Note: row 69 ties the MLS building to North Beach Resort & Villas by inference. If the verifier cannot confirm it, keep only the second sentence and use the title **North Beach Towers condos, 19 floors and 18 penthouses on the sand**.

**Verifier 2026-11-10:** Rows 69, 70 VERIFIED. The tie holds (the resort's own map shows its Indigo and Jasmine towers; listings at 100 North Beach Blvd name the same towers). One fix: one penthouse listing is "UNIT 16BPH", so the penthouses do not all sit above the 19th floor. Write: "Units are numbered up to the 19th floor, and 18 more are penthouse units." (struck list) The main title holds.

## 27. Beach Cove Resort

Wow: every unit faces the ocean; a 350-foot lazy river (row 71; row 19).

- "Every suite and condo at Beach Cove faces the ocean, the resort says. A 350-foot lazy river runs past three heated outdoor pools."

Strip title: **Beach Cove condos, where every unit faces the ocean**

**Verifier 2026-11-10:** Row 71 VERIFIED. Line and title hold; keep "the resort says" in the line.

## 28. Bay Watch Resort

Wow: three towers at Crescent Beach, North, Center and South, with lazy rivers and a beach bar (row 72).

- "Bay Watch is three towers on the sand at Crescent Beach: North, Center and South. The grounds have lazy rivers, indoor and outdoor pools, and Fishtails, a bar by the pool."

Strip title: **Bay Watch condos, three oceanfront towers at Crescent Beach**

**Verifier 2026-11-10:** Row 72 CORRECTED (top floor 19, not 18; the line does not use it). Line and title hold.

## 29. Avista Resort

Wow: a short walk to Main Street, where the shag was born (rows 73, 28); pools and a lazy river indoors and out (row 74).

- "Avista stands about a quarter mile from the ocean end of Main Street. The state Senate calls North Myrtle Beach the birthplace of the shag, first danced in the beach music clubs on Main Street and Ocean Drive in the 1940s."
- "Its pools, lazy river and hot tubs are outdoors and indoors, so a rainy day still has a swim."

Strip title: **Avista condos, a short walk from Main Street, home of the shag**

Note: /no-hoa-homes/ already tells the Main Street story; keep this to one sentence and link /north-myrtle-beach/ (or that page) on "Main Street" rather than retell it.

**Verifier 2026-11-10:** Rows 73, 74 VERIFIED. One fix: the resolution says visitors came to dance at the clubs in the 1940s, not that the shag was first danced there then. Write: "The state Senate calls North Myrtle Beach the birthplace of the shag; in the 1940s, visitors came to dance at the beach music clubs on Main Street and Ocean Drive." (struck list) The second line and the title hold.

## 30. Prince Resort

Wow: next to the Cherry Grove Pier and its record 1,780-pound tiger shark (row 75; row 29); a lazy river on the roof, and inlet-view condos (row 76).

- "Prince Resort stands next to the Cherry Grove Pier. The pier's record catch is a 1,780-pound tiger shark, the largest ever caught from land in the U.S., the pier says."
- "On the roof there are pools and a lazy river, and some condos look out over the inlet instead of the ocean."

Strip title: **Prince Resort condos beside the Cherry Grove Pier, with a lazy river on the roof**

**Verifier 2026-11-10:** Rows 75 CORRECTED, 76 VERIFIED. "The largest ever caught from land in the U.S." rests on the pier alone. The state's list (SCDNR) gives the record. Write: "Prince Resort stands next to the Cherry Grove Pier. A 1,780-pound tiger shark caught at Cherry Grove in 1964 is still the South Carolina record." (struck list) The roof line and the title hold.

---

# On the page (writer, 2026-11-10)

Built into `specs/condo-buildings.js` (version 3). Every entry now opens with its wow line, in the verifier's wording, before the counts and fees; every homes strip has its own title through `homes()`'s head. Repeated sentences cut (the power bill, "a bigger unit pays a bigger fee" said once per entry at most, distances said once). Struck and blocked rows (50, 51, 52 height, 55 height, 56, 60 "Grand Strand", 64 "smallest", 68 height, 70, 73, 75, 77, 78, 79) are not on the page; `struck-check.js` is quiet.

Changes from the lines above: Bay View drops "1.2-mile"; Landmark, Caribbean, Grande Cayman and SeaWatch drop the river lengths (fewer numbers; the wow stays); Compass Cove drops the Pinnacle's 166 feet; North Beach Towers drops the floor and penthouse line; Grande Cayman drops "quieter" (the resort's word, nothing to check). Titles cut to 70 letters: Beach Colony ("Beach Colony condos, with a lawn and hammocks by the sand"), Sands Ocean Club ("Sands Ocean Club condos, near the course that hosted the PGA Tour"), Prince ("Prince Resort condos by the Cherry Grove Pier, lazy river on the roof"), Avista ("a quarter mile from Main Street", a measure instead of "a short walk"), Myrtle Beach Resort ("a mile south of the state park's forest", in place of "home of the Renaissance Tower", which pictured nothing).

## Open: no verified wow fact

- **Sea Mist Resort** (row 50 struck): leads with the lowest sale price on the page (rows 6, 7). Open until a current source shows the Wahoo Waterpark is running.
- **Coral Beach Resort** (row 51 blocked): leads with its place beside Sea Mist and the second-lowest prices (rows 7, 27). Open until someone reads coral-beach.com or calls the desk about the bowling alley.
- **Dunes Village Resort** (row 56 blocked): leads with "room for a big family" (row 4: most units two bedrooms or more). Open until someone reads dunesvillage.com about the indoor water park in each tower.
- **South Hampton** (thin): leads with its place beside the Embassy Suites on Kingston's half mile of beach (rows 27, 62, 64). No fact of its own.
