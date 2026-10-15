# Gated communities, rewrite check v10 (round 14f, 2026-10-15)

Independent verifier. I did no research on this page and saw none of its drafts. Tasks: rows 569, 580 to 613 (the homes in each place) and 620 to 634 (club membership, Waterway Palms, Seasons, Bellwood); the writer's wording row 569 (every sentence changed or new since commit 9f94f79, the state v9 checked); v9's E1 to E19; the "we" promises, the times, the sibling pages and the struck check (lessons B45 to B50).

Page checked: `batches/2026-10-b/specs/gated-communities.js` at commit e6f01f9 (round 14f), md5 `0d0b387b717a0d124361ac21ec5fd084`. I rebuilt it from that commit (with the Blog-Brain tools of that commit and a copy of the website working copy) and read its visible text, 34,295 characters, as `scratchpad/v10/gated-e6f01f9.txt`. I did not edit the spec.

**The checkout moved while I worked.** The shared checkout went on to round 14g (a1df2ce, md5 `a6843433b9c4ab807576d17c67f2fb65`, 03:56) and then 14h. The preview in `scratchpad/preview/b/` (built 03:55) is the 14g tree, not e6f01f9. I checked e6f01f9 as asked. I grepped the 14g spec for each drift's wording: 17 of my struck entries still fire on that preview (listed under Struck check). The 14g round cut the homes line from several entries, so some of the drifts below are already gone there.

## Result

- **111 page items checked. 77 match. 34 drift** (17 must fix, 17 tighten). Full list at the end.
- **50 ledger rows checked** (rows 580 to 613, 620 to 634, and row 569): 23 `verified`, 20 `verified with corrected wording`, 6 `wrong` (585, 586, 594, 596, 598, 607). Row 569 is `wrong in part (v10)`. No row was `unverifiable`. One ledger row added: 614, "rewrite check (v10, round 14f)".
- **Rows 580 to 613, the homes.** The county counts reproduce exactly (rows 582, 584, 586 count, 588, 590, 592, 610). The listing figures reproduce on the sample each row used, but **the sample was wrong for five places**: the first 40 in the site's order are the newest sales, and they run big and new. I opened every listing in the neighborhood searches (1,205 pages) and the middle half of size moves for Tidewater, Waterway Palms, The Bluffs, Prestwick and Golf and Yacht Club (table below). That is lesson B48 again, one step back: the fix "use all of them" was not done.
- **Rows 620 to 634, club membership.** All seven memberships read as stated, each from the club's or association's own page. Three corrections of limit (Barefoot at closing, Tidewater "anyone in the area", Willbrook "any golfer").
- **Waterway Palms, Seasons, Bellwood.** Lot counts and sizes reproduce. The 15-acre lake is parcel acres. 3,700 to 4,300 square feet and "many have an elevator" are wrong (full set: 3,019 to 3,825; 25 of 188). Seasons: every lot built holds; "most 1,800 to 2,300" and "best lots back onto a pond" do not. Bellwood: all hold, including 17 lots of an acre or more and "bigger lots than Seasons across TPC Boulevard".
- **Litchfield by the Sea.** The fee range reproduces for the ten sections the batch read ($618 to $1,876), but the association's own site lists three single-family sections inside the gates (Charlestowne Grant 45 homes, Compass Point 20, River Club about 250). The page's "the few houses, on Oystercatcher Island" is wrong.
- **v9's E1 to E19:** 17 applied and hold; E5 only in part; E14 not applied (its replacement, "run by Festiva", drifts again). Details below.
- **Struck check** (`node tools/struck-check.js --batch batches/2026-10-b --preview <preview> --strict`, then `node tools/struck-check.test.js`: all controls pass):
  - On the `preview/b` build you named (03:55, the 14g tree): gated-communities, **1 struck phrase before my entries, 18 after** (17 of my entries and the CRAFT 2 hit "just outside"). Exit 1.
  - On my e6f01f9 rebuild: **2 phrases before** (both CRAFT 2 distance words: "next door" in Seasons and "just outside" in the FAQ), **37 after** (35 from the new entries, one of them firing twice, plus the 2 distance words).
  - 47 entries added, all tagged "(v10)". The other four pages are not mine: affordable and best none, no-hoa-homes none, the-farm none on that preview.

## The Waterway Palms ledger numbers, in one place

The 188 Waterway Palms listings (169 closed, 19 active; every one in the MLS neighborhood search): built 2008 to 2026, median 2022, 127 since 2020 (68 percent); heated 2,110 to 5,858, median 3,405, middle half 3,019 to 3,825; 48 of 188 (26 percent) in 3,700 to 4,300; two stories 126, three or more 25; 4 to 6 bedrooms 180; "elevator" on any part of the page: 25 (13 percent); On ICW 22, 19 of them name a private dock. The writer's row used the newest 40: middle half 3,748 to 4,342, elevator on 18.

## The 34 drifts, in page order

Must fix = wrong, past its source or row, or breaks a project rule. Tighten = supportable with a stated limit.

| # | Page sentence | Problem | Supported wording | |
|---|---|---|---|---|
| F1 | Short answer: "A golf or beach club is usually a separate membership with its own dues; we ask the club for the current dues" | The membership rows say beach clubs mostly come with the home: Litchfield by the Sea's Beach Club (row 629; its Beach Club page: "offers property owners exclusive access"), the Grande Dunes Ocean Club, the Barefoot cabana and Residents' Club, Tidewater's cabana. Only the DeBordieu Club's Beach Social level is separate. The page's own entries say so. | "A golf club is usually a separate membership, with its own dues on top of the HOA fee; a beach club often comes with the home, so we ask which." | Must fix |
| F2 | Map pills and heading: "Murrells Inlet side, 7 to 12", "Socastee to Murrells Inlet" | Entry 8, Prestwick, is near Surfside Beach, about 12 km from Murrells Inlet and 8 km from Myrtle Beach; Golf and Yacht Club is 10 km from Murrells Inlet and 15 km from Myrtle Beach. "Pawleys Island, 13 to 18" holds DeBordieu, 8 km south of the town. | Name the area for 7 to 12 so it covers Socastee, Surfside Beach and Murrells Inlet. | Tighten |
| F3 | Tidewater: "Golf membership is a separate purchase, open to anyone in the area" | Row 624: the Players Card and the annual membership are "restricted to local residents and property owners in Horry, Georgetown, and Brunswick counties". | "...sold to residents and property owners of Horry, Georgetown and Brunswick counties." | Tighten |
| F4 | Tidewater: "Most houses are custom homes from the 1990s and 2000s" | Built in the 1990s or 2000s: 67 of 89 listings (holds). "Custom" is in 45 of 89 descriptions (51 percent), an agent's word. | "Many houses are custom homes, and most were built in the 1990s and 2000s." | Tighten |
| F5 | Tidewater: "about half the lots are on the course" | County parcels (Horry layer 24, the two golf-course tracts, 61.71 and 96.76 acres, KSM South Carolina LLC): 398 of 572 Tidewater lots with a house touch the course, **70 percent**. Listings: On Golf Course on 39 of 89 (44 percent). Best neighborhoods says "about seven of every ten". Two pages now disagree. | "About seven in ten of the house lots touch the golf course [Horry County parcels]", or cut it: Best owns the share (SIBLING-OWNERS gives Gated the awards and the inlet holes). | Must fix |
| F6 | Seaside: "The city lets a golf cart with a state permit use its smaller streets, those posted at 35 mph or less" (E5 in part) | The city's page has two conditions: "secondary roadways only" and "posted speed limit of 35 miles per hour or less"; Ocean Boulevard, posted 25, may only be crossed. "Smaller streets, those posted at 35 or less" makes them one condition. | "...use secondary roads posted at 35 mph or less, from sunrise to sunset." | Tighten |
| F7 | Seaside: "Its houses date from the 2000s, traditional homes, some of them brick" | 21 of 26 listings are 2001 to 2009; 5 are 2011 to 2017. Traditional 17 of 26. Row 583 said "most in the 2000s". | "Most of its houses date from the 2000s, and most are traditional in style." | Tighten |
| F8 | Barefoot: "Its houses are large custom homes, most built after 2010, on lots of about an acre" | **Lot size is wrong.** The county's Acreage field is 0 on 94 of 97 Dye Estates lots, so row 586's "median 1.16" has no source. From the parcel outlines the 97 lots run 0.46 to 2.23 acres, median 0.70, middle half 0.62 to 0.78; 80 are between half an acre and an acre, 9 are an acre or more. The association's page (row 95): "half an acre to two acres". Also 15 listings of about 82 houses: "most built after 2010" (13 of 15) should read many. | "Many of its houses are large custom homes built after 2010, on lots of about two-thirds of an acre; a few are over an acre." | Must fix |
| F9 | Barefoot: "At Barefoot a golf membership belongs to certain houses, not to the owner, and the buyer can take it over at closing" | The FAQ: the seller "forfeits the membership upon closing"; resale buyers pay a $2,750 transfer fee and "have 60 days from the date of closing to enroll". The FAQ lists eligible properties (Centex/Pulte developments, North Towers, The Retreat, North Beach Plantation) and says some resort properties are excluded; it does not name Dye Estates or Leatherleaf. | "...the seller gives it up at closing, and the buyer can take it over by enrolling within 60 days, for a transfer fee." Say which neighborhoods only if a source does. | Tighten |
| F10 | Grande Dunes: "In the three gated sections, most houses are one-story Mediterranean-style homes, and many have a private pool" | Row 34 (verified): listings mark Calais, Palermo, **Tuscany Village** and Villa Venezia gated, Members Club and Seville mixed. Row 135's safe wording: "Its gated sections of houses are Calais, Palermo and Villa Venezia." The next sentence says "among them". The counts hold for the three: one story 26 of 37 (70 percent), Mediterranean 37 of 37, a pool in the exterior features 18 of 37. | "In Calais, Palermo and Villa Venezia, most houses are one-story Mediterranean-style homes, and many have a private pool." | Must fix |
| F11 | Waterway Palms: "At its center the association owns a 15-acre lake" | Row 631: the county's LAKE AREA parcel is 14.98 acres (14.76 by outline). I drew it over NAIP: one long branching lake along the middle of the neighborhood with bank strips on its edges. Parcel acres, not water acres (v9 E6 again). | "...owns a lake parcel of about 15 acres." | Tighten |
| F12 | Waterway Palms: "Most houses are new, built since 2020" | 127 of 188 listings (68 percent), all of them sold or listed since 2023. Row 594's note already said "Most houses sold here lately were built since 2020". | "Most houses sold here lately were built since 2020." | Tighten |
| F13 | Waterway Palms: "custom homes of about 3,700 to 4,300 square feet" | **Wrong** on the whole set: middle half 3,019 to 3,825, median 3,405; 26 percent are in the stated range. | "...large custom homes of about 3,000 to 3,800 square feet." | Must fix |
| F14 | Waterway Palms: "many have an elevator" | 25 of 188 listing pages (13 percent). The first 40 had 18. | "some have an elevator". | Must fix |
| F15 | Waterway Palms: "so building will go on nearby for some years" | A forecast. Row 632: 159 of 746 lots (21 percent) have no building value; a house under construction can show 0. | "about one in five has no building on the county roll." | Tighten |
| F16 | Golf and Yacht Club: "has room for the boat and the camper. The association keeps a storage area for RVs and trailers" | The listings that say it add conditions: "for an additional fee and may also have a waiting list", "(based on availability)", "subject to availability". 24 of 101 mention RV, trailer or camper storage and about 18 add boats. The HOA's own site says nothing about storage. | "...has storage for RVs, trailers and boats when space is open, for a fee [listings]." | Tighten |
| F17 | Golf and Yacht Club: "in Socastee south of Myrtle Beach" | A direction word the project struck before: row 175 struck both "southwest of Myrtle Beach" and "west-southwest of Myrtle Beach" for this place; the approved wording has none. By measure the club is 15 km west and 5 km south of Myrtle Beach city hall (bearing 253 degrees, 9.8 miles). | "Myrtle Beach Golf and Yacht Club is off Bay Road in Socastee." | Must fix |
| F18 | Prestwick: "traditional two-story homes, many of them brick" | Two stories on 28 of 71 listings (39 percent); one story 26, one and a half 11. Row 598's own note said "many two-story" is safer. Traditional 53, brick 48 (holds). | "...traditional homes, many of them two stories and many of them brick." | Must fix |
| F19 | Prestwick: "More than half the lots are on the course, and the best look over Lake Prestwick to the course" | On Golf Course on 32 of 71 listings (45 percent). County outlines: 215 of 416 detached-type lots (52 percent) touch the course and lake tract. Lake Prestwick is named in 3 of 71 descriptions. | "About half the lots are on the course, and a few look over Lake Prestwick." | Tighten |
| F20 | Seasons: "every lot has a house, so no building is going on next door" | The county roll shows a building value on all 444 lots (holds). "No building is going on" is more than a roll says, and "next door" with no measure trips the CRAFT 2 rule. | "...is finished: the county roll shows a house on every lot." | Must fix |
| F21 | Seasons: "one-story builder homes, most of them about 1,800 to 2,300 square feet" | One story 39 of 42 (93 percent, holds). Heated area: 16 of 42 (38 percent) are in 1,800 to 2,300; the middle half is 1,748 to 2,338, which is half, not most. | "Most are one-story builder homes, and about half are between 1,750 and 2,350 square feet." | Must fix |
| F22 | Seasons: "The best lots back onto a pond" | Lake Front or Pond on Lot on 4 of 42 listings (10 percent); a pond or lake in 6 descriptions. | "A few lots back onto a pond." | Must fix |
| F23 | Wachesaw East: "Most are one-story builder homes from the early 2000s" | One story 30 of 46 (65 percent) and built 2000 to 2006 on 43 of 46 (both hold). Row 603: "custom" in 3 of 17, "the writer may say houses". Nothing says who built them: custom in 10 of 46. | "Most are one-story houses from the early 2000s." | Tighten |
| F24 | Wachesaw East: "The course and its grill are run by Festiva, a real estate company, not by the homeowners" | v9 E14's supported wording: Festiva bought them in 2017 and "do not say 'belong' in the present tense without a 2026 source". "Run by" is worse: the 2017 release says Patton Hospitality Management would manage the course and the grill. The club's site (opened today) does not name Festiva or any manager; the county shows the course land in the name of Wachesaw Golf LLC. | "Festiva Real Estate Holdings, a real estate company, bought the course and its grill in 2017 [Club + Resort Business, 2017]; the homeowners do not own them." | Must fix |
| F25 | Willbrook: "Golf membership is separate and open to any golfer" | The club's page: "accepts membership applications from all golfers". | "Golf membership is separate, and the club accepts applications from any golfer." | Tighten |
| F26 | Litchfield by the Sea: "Most homes are condos and villas from the 1980s to the 2000s" | 33 of the 38 sales read are condos, villas or townhouses (1981 to 2008), but the batch read only ten sections. The association lists Charlestowne Grant (45 single-family homes), Compass Point (20) and River Club (about 250 single-family homes, inside the development); no count of all homes exists on any page. | "Many homes are condos and villas from the 1980s to the 2000s, and the Beach Club comes with the home." | Tighten |
| F27 | Litchfield by the Sea: "The few houses, on Oystercatcher Island, are raised three-bedroom homes that look across the lake" | **Wrong.** Charlestowne Grant: "45 single family homes" within the gated community (association site); MLS: 6 closed and 2 active detached raised beach houses, 2,730 to 4,710 square feet, 2523451 sold January 2026 for $2,200,000 and 2524540 December 2025 for $2,350,000. Compass Point: "20 single-family homes". Row 607's own note: not "its only houses". The Willbrook entry on the same page says it is a gated neighborhood of about 250 houses inside Litchfield by the Sea. Oystercatcher itself holds (5 of 5 raised, 3 bedrooms, 1,450 to 1,850 square feet; the association calls them villas). | "Houses on Oystercatcher Island are raised three-bedroom homes that look across the lake; the association also lists single-family homes in Charlestowne Grant and Compass Point." | Must fix |
| F28 | Litchfield by the Sea: "It runs from about $620 a month for a small condo to about $1,880 for an oceanfront one", and the table cell "About $620 to $1,880" | Reproduces for the ten sections read (618 to 1,876; Summerhouse 618 to 808, Bridgewater 1,054 to 1,876). Charlestowne Grant's 8 listings show 517 (twice), 525, 625, 630, 632 (twice) and 817, so the community's low end is not $620. Whether Summerhouse is inside the main gate is still not shown (row 611 note). | "In the ten sections whose sales we read, the fee runs from about $620 a month for a small condo to about $1,880 for an oceanfront one." | Tighten |
| F29 | Litchfield by the Sea price line: "houses in Breakers Reef for about $1.5 million to $2.2 million" | **Wrong word.** Breakers Reef is "an oceanfront villa community" (association); the 4 sales are typed Townhouse (2) and Condominium (2) in the MLS. The 5 detached sales are Oystercatcher. The old text said "four homes". | "...and villas in Breakers Reef for about $1.5 million to $2.2 million." | Must fix |
| F30 | Heritage: "Most houses are one-story brick homes from the 1990s, and the best look onto the golf course or over the old rice fields toward the river" | 83 detached listings (every one in the neighborhood search): built in the 1990s 46 (55 percent), one story 45 (54 percent), brick 59 (71 percent); **all three together 17 (20 percent)**. On Golf Course 25 (30 percent); rice or marsh in 14 descriptions (17 percent). | "Most houses were built in the 1990s or 2000s (72 of 83), and about seven in ten are brick; some look onto the golf course or over the old rice fields toward the river." | Must fix |
| F31 | DeBordieu caption: "large houses behind the dunes, each with a walkway to the beach" | I opened the picture. About seven front-row houses each have a walkway over the dunes; the houses behind them do not. The plane's position is on the DeBordieu shore (Debordieu Boulevard, Ocean Park Loop within a few metres), so the place is right. | "...large houses behind the dunes, with walkways over the dunes to the beach, and the salt marsh beyond." | Tighten |
| F32 | Pros: "A gate here is not only for the top of the market: homes behind one sell for about $200,000 to $2.2 million" | Reads as the range of sales. The page's own Barefoot line has a resale at $2.5 million, DeBordieu closed sales run to $4,000,000 (MLS) and Charlestowne Grant to $2,350,000. The table figures are typical sales. | "...typical sale prices behind one run from about $200,000 to $2.2 million." | Tighten |
| F33 | Cons: "A golf or beach club is usually a separate membership, with its own dues on top of the HOA fee" | Same as F1. | As F1. | Must fix |
| F34 | FAQ: "Prestwick, just outside it, is the gated neighborhood on this page nearest Surfside Beach" | A distance word with no measure (CRAFT 2). Measured against the Surfside Beach town boundary (OpenStreetMap): Prestwick's lots are 0.75 to 1.1 miles outside it, median 0.9. | "Prestwick, about a mile outside it, is the gated neighborhood on this page nearest Surfside Beach." | Must fix |

Must fix: F1, F5, F8, F10, F13, F14, F17, F18, F20, F21, F22, F24, F27, F29, F30, F33, F34 (17). Tighten: F2, F3, F4, F6, F7, F9, F11, F12, F15, F16, F19, F23, F25, F26, F28, F31, F32 (17).

## v9's E1 to E19: were they applied?

| # | Now | |
|---|---|---|
| E1 | "run from North Myrtle Beach down to DeBordieu Colony, south of Pawleys Island" (short answer, description) | applied |
| E2 | The guide label is "Main Street by golf cart" | applied |
| E3 | "so a house may answer to two associations" | applied |
| E4 | "From the south end of Seaside Plantation ... about two-thirds of a mile by road". Row 542's point is the south-east corner; the neighborhood runs north to 33.8306. | applied |
| E5 | "its smaller streets, those posted at 35 mph or less" | in part (F6) |
| E6 | The three-lakes sentence is gone | applied |
| E7 | "Festival weeks bring crowds to Main Street" | applied |
| E8 | "a main guard house, a north guard house and a guard house at the Ocean Club"; the officer on patrol is gone | applied |
| E9 | "was planned to echo Charleston's Battery district" (a plan, the right tense) | applied |
| E10 | "Its boat ramp sits on a waterfront lot of more than 6 acres." The day docks and boat storage are gone. | applied |
| E11 | "One side of the neighborhood runs beside S.C. 31" | applied |
| E12 | "Its Community Watch desk is covered 24 hours a day, and the HOA fee is about $95 a month" | applied |
| E13 | "owns about 62 acres of open land, most of it the wide strips of grass and woods between the streets" | applied |
| E14 | "run by Festiva, a real estate company" | **not applied; the replacement drifts (F24)** |
| E15 | Caption: "in the middle and at the upper right ... lower left are in Litchfield Plantation". I re-classified the 194 parcels in the frame (Georgetown layers 2 and 7): Willbrook houses are in the upper middle (6), upper right (16), middle (20) and middle right (15); the lower left (6) and bottom (24 of 33) are Litchfield Plantation. The one label is on 49 Red Squirrel Ln, a Willbrook street. | applied, holds |
| E16 | "a planters' colony with a Dye course and a private beach club" | applied |
| E17 | "the HOA fee differs from section to section and from unit to unit" | applied (rows 92, 613) |
| E18 | "A guard, a code or the owner lets each visitor in" | applied |
| E19 | The Dye keypad sentence is gone from the FAQ; the Barefoot entry keeps the condition ("an owner who has set up a gate code") | applied |

## Rows 580 to 613 and 620 to 634

Status and the evidence are in each row's note. Short form:

| Rows | Status | Note |
|---|---|---|
| 580 | verified with corrected wording | The first-40 sample is the newest sales (table below). |
| 581 | verified with corrected wording | Era holds on all 89; size is 2,043 to 2,918; the course share is 70 percent by county parcels (F5). |
| 582, 584, 588, 590, 592 | verified | County lot counts reproduce exactly (606/572, 122/121, 62/62, 29/29, 59/52). |
| 583, 591 | verified | Reproduced on all listings. |
| 585, 586 | wrong | Dye Estates lot size (F8). |
| 587 | verified with corrected wording | "Fazio" is not the course Leatherleaf is on (row 95: the Love course); "built in the 2000s" is 17 of 18. |
| 589 | verified with corrected wording | Mostly one story is 5 of 9; the size is the full range of 9; "views of the pool and back yard" is not shown. |
| 593 | verified with corrected wording | Not "the three gated sections" (F10). |
| 594 | wrong | Size and elevator (F13, F14). |
| 595 | verified with corrected wording | Size is 2,620 to 3,800 on all 81. |
| 596 | wrong | Size is 1,100 to 1,411, not 1,250 to 1,500. The page has no homes sentence for this entry. |
| 597 | verified | |
| 598 | wrong | Two-story, four bedrooms, size, "more than half" (F18, F19). |
| 599 | verified | Layer 24 fields, Structures2023 fields, "Token Required". |
| 600 | verified with corrected wording | One-story 39 of 42; the size and pond claims (F21, F22). |
| 601, 604, 606 | verified | Thin for Bellwood (12 of about 91). |
| 602, 603 | verified with corrected wording | Era holds; sizes are off on the whole set; "builder" is not shown (F23). |
| 605 | verified with corrected wording | 18 listings of 366 houses: "many". |
| 607 | wrong | Houses only on Oystercatcher; Breakers Reef (F27, F29). |
| 608, 609 | verified with corrected wording | Heritage conjunction (F30); DeBordieu sizes and era are many, not most. |
| 610 | verified | All seven county rows reproduce. |
| 611, 612 | verified with corrected wording | Ten sections only (F28). |
| 613 | verified | |
| 620 | verified with corrected wording | At closing is early; eligibility is limited (F9). |
| 621, 622, 625, 626, 627, 629, 630 | verified | Opened each page. |
| 623 | verified with corrected wording | "Through their HOA dues" is row 490, still pending. Dye Estates is not on the Residents' Club list. |
| 624, 628 | verified with corrected wording | F3, F25. |
| 631 | verified with corrected wording | Parcel acres (F11). |
| 632 | verified with corrected wording | Roll, not houses (F15). |
| 633, 634 | verified | Reproduced; TPC Boulevard drawn over NAIP lies between Seasons and Bellwood. |

### Why the first 40 were wrong (B48, one more time)

| Place | Row's sample | The whole set | What moved |
|---|---|---|---|
| Tidewater | 40 of 89 | 89 | middle half 2,298 to 3,221 becomes 2,043 to 2,918; since 2020: 11 of 40 becomes 15 of 89 |
| Waterway Palms | 40 of 188 | 188 | 3,748 to 4,342 becomes 3,019 to 3,825; elevator 18 of 40 becomes 25 of 188 |
| The Bluffs | 40 of 81 | 81 | 3,208 to 4,198 becomes 2,620 to 3,800 |
| Prestwick | 40 of 71 | 71 | 2,509 to 3,681 becomes 2,017 to 3,236; two-story 21 of 40 becomes 28 of 71 |
| Golf and Yacht Club | 40 of 101 | 101 | 1,269 to 1,505 becomes 1,100 to 1,411; built in the 1980s 18 of 40 becomes 68 of 101 |
| Others | all closed sales in the 12 months | all sold and active | Heritage 24 of 83, DeBordieu 38 of 109, Wachesaw Plantation 16 of 52, Wachesaw East 17 of 46, The Reserve 13 of 43, Willbrook 7 of 18, Litchfield Plantation 8 of 24, Seasons 23 of 42 |

A source that covers every home beat the listings twice: the county outlines settled Dye Estates (0.70 acre, not an acre) and Tidewater (70 percent on the course, not half). A rule that would have caught all of this: a size or a share goes on the page only from the whole set, and a county figure beats a listing figure.

## "We" promises

| Page text | Can an agent do it? |
|---|---|
| Short answer: "we ask the club for the current dues" | yes |
| Grande Dunes: "We confirm it for each home you look at" (Ocean Club membership) | yes (the seller or the master association can say) |
| Cons: "We check for special assessments before you make an offer" | yes (ask the HOA for its statement and minutes) |
| FAQ: "We do not rate any neighborhood as safe or unsafe" | yes |
| CTAs: "One of our agents will email you this week's homes for sale there, with the HOA fee and what it covers"; "will send you the homes for sale in each, side by side" | yes |

The Seaside "We ask the association for its current gate rules" is gone from this version. No promise went past what an agent can do.

## Times and distances (rules/distance-words.json)

- **Two hits.** "just outside it" (FAQ, F34) and "next door" in the Seasons entry (F20). "a house can go up next door" in the Barefoot entry is allowed by the rule's exception.
- Measures I made: Seaside to Main Street 0.669 mile by road from the south-east corner (v9, holds; E4's "south end" is right); Prestwick's lots 0.75 to 1.1 miles from the Surfside Beach boundary (median 0.9); Golf and Yacht Club 15 km west and 5 km south of Myrtle Beach city hall; Waterway Palms and Bluffs distances to the marinas are no longer on the page. "Grande Dunes Marina about 2.5 miles by water" from The Bluffs ramp is at the edge (2.50 on the centerline, about 2.7 with the offsets, v9); "about 2.5 to 3" is safe. Enterprise Landing 4 minutes (OSRM 4.4, v8) and the shuttle's 15 minutes are unchanged.
- The golf-cart route is a route, not a drive time. The posted limits of 8th Avenue North and Hillside Drive North are still in no source (v9); the label "Main Street by golf cart" rests on them being secondary roads.

## Sibling check (SIBLING-OWNERS.md)

Read against the Best, Affordable, No HOA and The Farm specs at HEAD.
- **Tidewater, Best and Gated: two conflicts.** (1) Course share: Best "about seven of every ten houses have lots that border the golf course"; Gated "about half" (F5). The county says 70 percent, so Gated is the one that is wrong. (2) House count: Best "about 580 houses and a few condo buildings" (county: 572 lots with a house); Gated "one master association of 664 houses" (the association's profile). Both are sourced; a reader sees two numbers. Price $625,000 and fee $230 agree. Era agrees ("around 2000" and "1990s and 2000s").
- **Grande Dunes, Best and Gated.** Price $1.5 million agrees. Fee: Gated "$200 to $375" (the three gated sections, row 34), Best "$200 to $400" (all of Grande Dunes). Different scope; say so on one of them. Both pages must agree on the Ocean Club; Best does not mention it.
- **Golf and Yacht Club, Affordable and Gated.** Affordable: "about 470 houses behind a gate, most of them one story" (agrees with 90 of 101 one-story); Gated has no count and no homes sentence. Price $225,000 agrees. The two do not repeat each other.
- **Barefoot, Best and Gated.** Best's Barefoot entry is about condos, the swing bridge and the replay rate; no overlap.
- Prestwick, Seaside, Seasons, Bellwood, Wachesaw, The Reserve, Willbrook, Litchfield, Heritage, DeBordieu and Waterway Palms are not on a sibling page except Seasons in a Best 55+ FAQ answer (no overlap).

## All 111 page items checked

| # | Entry | Page sentence | Row or source | Result |
|---|---|---|---|---|
| 1 | Top | Title, description and share title: 18 neighborhoods, "to DeBordieu, south of Pawleys Island" | entries; rows 63, 70 | match |
| 2 | Short answer | run from North Myrtle Beach down to DeBordieu Colony, south of Pawleys Island | E1 | match |
| 3 | Short answer | most of them on a golf course or on the water | row 171; entries | match |
| 4 | Short answer | about $200,000 to $2.2 million; most fees about $95 to $400 | table | match |
| 5 | Short answer | a golf or beach club is usually a separate membership | rows 620 to 630 | DRIFT F1 |
| 6 | Guide | Main Street by golf cart; the other labels | E2; row 634 | match |
| 7 | Guide | Lots of nearly half an acre (Bellwood, median 0.44) | row 634 | match |
| 8 | Guide | A fee under $100 a month | table | match |
| 9 | Guide | On a map: which ones are in each of the four areas | map | match |
| 10 | Map | pills "1 to 3", "4 to 6", "7 to 12", "13 to 18" match the entry numbers | entries | match |
| 11 | Map and headings | "Murrells Inlet side", "Socastee to Murrells Inlet", "Pawleys Island" | places | DRIFT F2 |
| 12 | Headings | "North Myrtle Beach, 1 to 3", "Myrtle Beach and Carolina Forest, 4 to 6", "Pawleys Island to DeBordieu, 13 to 18" | places | match |
| 13 | Tidewater | first sentence: "in North Myrtle Beach" | row 546 | match |
| 14 | Tidewater | golf membership is a separate purchase, open to anyone in the area | row 624 | DRIFT F3 |
| 15 | Tidewater | most houses are custom homes from the 1990s and 2000s | row 581 | DRIFT F4 |
| 16 | Tidewater | about half the lots are on the course | row 581; county | DRIFT F5 |
| 17 | Tidewater | inside North Myrtle Beach's city limits, with city services | row 546 | match |
| 18 | Tidewater | 664 houses with six smaller associations, so a house may answer to two | row 545; E3 | match |
| 19 | Tidewater | aerial caption | v9 | match |
| 20 | Seaside | from the south end ... about two-thirds of a mile by road | rows 542, 174; E4 | match |
| 21 | Seaside | on two side streets, with no main highway to cross | v9 | match |
| 22 | Seaside | the golf-cart rule | rows 540, 541; E5 | DRIFT F6 |
| 23 | Seaside | its houses date from the 2000s, traditional, some brick | row 583 | DRIFT F7 |
| 24 | Seaside | Society of Stranders; the ocean is a quarter to three-quarters of a mile | v9 | match |
| 25 | Seaside | some houses look onto the neighborhood's lakes | row 583 | match |
| 26 | Seaside | festival weeks bring crowds to Main Street | E7 | match |
| 27 | Barefoot | Dye Estates, inside Barefoot Resort in North Myrtle Beach | rows 8, 95 | match |
| 28 | Barefoot | large custom homes, most built after 2010, on lots of about an acre | rows 585, 586 | DRIFT F8 |
| 29 | Barefoot | the staffed gate; the second gate and the code | v9; row 212 | match |
| 30 | Barefoot | Leatherleaf: Residents' Club lifestyle director; houses from the 2000s, large, many brick | rows 587, 623; BRRA page | match |
| 31 | Barefoot | membership belongs to certain houses; take it over at closing | row 620 | DRIFT F9 |
| 32 | Barefoot | shuttle, cabana, ponds, lots for sale | v9 | match |
| 33 | Grande Dunes | many homes come with an Ocean Club membership | v9 | match |
| 34 | Grande Dunes | the Members Club is a separate membership | row 223; club site | match |
| 35 | Grande Dunes | in the three gated sections | rows 34, 135, 593 | DRIFT F10 |
| 36 | Grande Dunes | most houses one-story Mediterranean, many with a private pool | rows 589, 591, 593 | match |
| 37 | Grande Dunes | main guard house, north guard house, Ocean Club guard house | E8; row 405 | match |
| 38 | Waterway Palms | was planned to echo Charleston's Battery district | row 155; E9 | match |
| 39 | Waterway Palms | owns a 15-acre lake | row 631 | DRIFT F11 |
| 40 | Waterway Palms | the clubhouse stands on a point in it, with water on three sides | NAIP; v8 | match |
| 41 | Waterway Palms | most houses are new, built since 2020 | row 594 | DRIFT F12 |
| 42 | Waterway Palms | custom homes of about 3,700 to 4,300 square feet | row 594 | DRIFT F13 |
| 43 | Waterway Palms | many rise two or three stories | row 594 (151 of 188) | match |
| 44 | Waterway Palms | many have an elevator | row 594 | DRIFT F14 |
| 45 | Waterway Palms | the best lots sit on the waterway with a private dock | row 594 (19 of 22) | match |
| 46 | Waterway Palms | its own boat ramp, no trip across town | row 560 | match |
| 47 | Waterway Palms | about one in five has no house; building will go on for some years | row 632 | DRIFT F15 |
| 48 | The Bluffs | two clubhouses, one a boathouse on the waterway | row 98 | match |
| 49 | The Bluffs | the boat ramp on a lot of more than 6 acres | row 563; E10 | match |
| 50 | The Bluffs | Grande Dunes Marina about 2.5 miles by water | row 563 | match |
| 51 | The Bluffs | most houses after 2010; many custom Mediterranean in stucco | row 595 (whole set) | match |
| 52 | The Bluffs | one side runs beside S.C. 31 | E11 | match |
| 53 | Golf and Yacht Club | room for the boat and the camper; storage for RVs and trailers | row 150; listings | DRIFT F16 |
| 54 | Golf and Yacht Club | in Socastee south of Myrtle Beach | row 175 | DRIFT F17 |
| 55 | Golf and Yacht Club | Enterprise Landing about a 4-minute drive | row 178 | match |
| 56 | Golf and Yacht Club | about 62 acres of open land, most of it the strips | E13 | match |
| 57 | Golf and Yacht Club | Community Watch desk 24 hours; fee about $95 | E12; mbgyc.com | match |
| 58 | Golf and Yacht Club | no golf or yacht club anymore; Sandpiper Place | v9 | match |
| 59 | Prestwick | near Surfside Beach; the Dye course; Course of the Year | v9 | match |
| 60 | Prestwick | traditional two-story homes, many of them brick | row 598 | DRIFT F18 |
| 61 | Prestwick | more than half the lots on the course; the best look over Lake Prestwick | row 598 | DRIFT F19 |
| 62 | Prestwick | pools, tennis, the public course | v9 | match |
| 63 | Seasons | every lot has a house, so no building is going on next door | row 633 | DRIFT F20 |
| 64 | Seasons | about 107 acres of common land, a large share for about 450 homes | row 633 | match |
| 65 | Seasons | one-story builder homes, most about 1,800 to 2,300 square feet | row 600 | DRIFT F21 |
| 66 | Seasons | the best lots back onto a pond | row 600 | DRIFT F22 |
| 67 | Seasons | clubhouse pools and fitness center; MarshWalk 10 minutes | v9 | match |
| 68 | Seasons | 55 or older; visitors use a call box | rows 14, 102 | match |
| 69 | Seasons | lots about a fifth of an acre; lawn care keeps the yards | rows 633, 102 | match |
| 70 | Bellwood | bigger lots than the gated neighbor across TPC Boulevard; median close to half an acre; 17 of an acre or more | row 634 | match |
| 71 | Bellwood | many custom homes from about 2010 on, often two stories | row 601 | match |
| 72 | Bellwood | about a dozen lots back onto Collins Creek; woods; TPC Myrtle Beach | row 549 | match |
| 73 | Wachesaw Plantation | club owned by its members; membership separate | rows 320, 625 | match |
| 74 | Wachesaw Plantation | most houses late 1980s to early 2000s; best lots look down a fairway or over the river | row 602 (47 of 52) | match |
| 75 | Wachesaw Plantation | the main gate has a guard; Wacca Wache Marina | row 21 | match |
| 76 | Wachesaw East | most are one-story builder homes from the early 2000s | row 603 | DRIFT F23 |
| 77 | Wachesaw East | houses line the fairways; grill happy hours | v9 | match |
| 78 | Wachesaw East | run by Festiva, a real estate company | rows 334, 335; E14 | DRIFT F24 |
| 79 | The Reserve | near Pawleys Island; dry storage; golf membership includes dining | rows 106, 627 | match |
| 80 | The Reserve | many large custom homes, most from 2005 on; the best lots look over a pond or lake | row 604 (79, 70, 42 percent) | match |
| 81 | Willbrook | near Pawleys Island; three rice plantations | v9 | match |
| 82 | Willbrook | most large brick homes from the late 1990s and early 2000s | row 605 (15 of 18) | match |
| 83 | Willbrook | golf membership is separate and open to any golfer | rows 628, 352 | DRIFT F25 |
| 84 | Willbrook | aerial caption and label | E15; parcels | match |
| 85 | Litchfield Plantation | about half the houses are new since 2017, mostly two stories | row 606 | match |
| 86 | Litchfield by the Sea | the Beach Club comes with the home | rows 629, 356 | match |
| 87 | Litchfield by the Sea | most homes are condos and villas from the 1980s to the 2000s | row 607 | DRIFT F26 |
| 88 | Litchfield by the Sea | the few houses, on Oystercatcher Island | row 607 | DRIFT F27 |
| 89 | Litchfield by the Sea | many neighborhoods inside the gates, each with a sub-association; the fee differs by section and unit | rows 92, 613; E17 | match |
| 90 | Litchfield by the Sea | about $620 to $1,880 (text and table) | row 611 | DRIFT F28 |
| 91 | Litchfield by the Sea | houses in Breakers Reef for about $1.5 million to $2.2 million | rows 607, 91 | DRIFT F29 |
| 92 | Heritage | dock master; fee includes cable, internet, dock master, 24-hour security | v9 | match |
| 93 | Heritage | most houses one-story brick from the 1990s; the best look onto the golf course or rice fields | row 608 | DRIFT F30 |
| 94 | DeBordieu | heading "a Dye course and a private beach club" | E16; row 81 | match |
| 95 | DeBordieu | the club is open only to owners and separate from the home | rows 630, 482 | match |
| 96 | DeBordieu | many raised beach houses with an elevator; the best lots on the ocean | row 609 (42, 55 percent) | match |
| 97 | DeBordieu | caption: each with a walkway to the beach | the 2011 USGS frame | DRIFT F31 |
| 98 | Pros | built around something you use (13 of 18) | entries | match |
| 99 | Pros | homes behind one sell for about $200,000 to $2.2 million | table | DRIFT F32 |
| 100 | Pros | some HOA fees cover more than the gate | rows 102, 442 | match |
| 101 | Cons | a golf or beach club is usually a separate membership | rows 620 to 630 | DRIFT F33 |
| 102 | Cons | guests, contractors and deliveries must get through the gate | rows 5, 18, 280 | match |
| 103 | Cons | in Horry County outside city limits the HOA maintains private streets | row 1 | match |
| 104 | Cons | we check for special assessments | rows 1, 199 | match |
| 105 | FAQ | does a gate make a neighborhood safer | E18 | match |
| 106 | FAQ | how guests get through the gate | rows 5, 14, 212 | match |
| 107 | FAQ | Prestwick, just outside Surfside Beach | measure; rule | DRIFT F34 |
| 108 | FAQ | 55+ community and call box | rows 14, 102 | match |
| 109 | FAQ | most of the gated neighborhoods are golf communities (10 of 18) | row 171 | match |
| 110 | FAQ | Barefoot Resort is mostly open, a few gated neighborhoods | rows 95, 8 | match |
| 111 | FAQ | Grande Dunes: only some sections have gates | row 34 | match |

Count: 111 items, 77 match, 34 drift. Items 5 and 101 are one wording used twice; item 90 holds the table cell and the sentence.

## Other findings (not counted as drift)

- **The Willbrook entry and the Litchfield entry on one page:** Willbrook is "a gated neighborhood of about 250 houses inside Litchfield by the Sea" (the association says "approximately 250 single-family homes"), and the Litchfield entry says the few houses are on Oystercatcher Island. Fixing F27 removes the contradiction.
- **Golf and Yacht Club has no homes sentence on this page.** The task asked for one per entry; row 596 (now wrong) is why it is a good thing to leave out until the size is fixed.
- **The DeBordieu entry says the club is open only to owners twice** ("open only to owners" and "Memberships are sold only to DeBordieu property owners"). One fact, two sentences; style, not a drift.
- **Row 490 (Barefoot Residents' Club paid through HOA dues) is still `pending verification (round 14c)`.** Row 623 leans on it.
- **Summerhouse's gate:** the association lists Summerhouse (98 one-bedroom units) as one of its communities; whether it is inside the main gate is not shown, and the entry's price line leads with Summerhouse.
- **Waterway Palms and the clubhouse:** the clubhouse parcel (12.88 acres) holds water on three sides of the island (NAIP); I did not check the 14e wording "a point" beyond that.
- **Seasons "across the road":** Seasons stretches 3 km north of TPC Boulevard; only its south end faces Bellwood. The sentence reads fine for the lots by the road; it is not a claim about all 444.

## Commands and sources

Listing pages: mbcoastalhomes.realgeeks.com `/property/<MLS#>/` for 1,205 listings (the neighborhood searches `status=sold` and `status=active`, `type=res` or `type=all`, all pages; robots.txt allows it); Horry County parcel service MapServer layer 24 (parcel outlines, UTM 17N, areas computed by me; Tidewater, Seaside, Leatherleaf, Calais, Palermo, Villa Venezia, Dye Estates, Waterway Palms, Seasons, Bellwood, Prestwick); Georgetown County GCGIS_OpenData layer 2 (parcels), table 7 (PARCELATTRIBUTES) and GCGIS_Buildings layers 5 and 1; USGS NAIP exportImage (Waterway Palms, Seasons and Bellwood overlays); OpenStreetMap API (TPC Boulevard, the DeBordieu shore) and the Surfside Beach town boundary (Nominatim); barefootgolf.com, tidewatergolf.com, wachesaw.com, willbrookgolf.com, thereservegolf.com, litchfieldbythesea.com (Resources, Beach Club, Community pages and its wp-json `community` posts), debordieuclub.com, barefoothoa.com, wachesaweast.com, grandedunesmembersclub.com, grandedunes.com, mbgyc.com, and a web search for the Wachesaw East ownership. No Zillow page was opened.
