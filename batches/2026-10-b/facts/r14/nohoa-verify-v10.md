# No-HOA homes, check v10 (round 14k, 2026-10-21)

Independent verifier. I did no research on this page. Scope (from the coordinator): ledger row 181, and every sentence changed in `git diff 50a22c0 HEAD -- batches/2026-10-b/specs/no-hoa-homes.js` (the diff has 40 changed hunks; the v9 note listed the unchecked ones in its "After 50a22c0" section). I read `prompts/verifier.md`, lessons B45, B48, B52, B53, and the v9 note. I did not edit the spec. I did not open Zillow. I did not clone anything.

Data used: `data/no-hoa-areas.json` (area counts, flood, shore) and `data/no-hoa-lots.json` (town field, year built), recomputed by me; OSRM and OpenStreetMap re-run for the drives.

## Verdict

Row 181: wrong in part. About 70 changed fact units checked: 8 drift (3 must fix, 5 tighten) plus 4 optional notes. Every other changed sentence matches its row or the v9 approved wording.

## Must fix

| # | Where | Current text | Why | Replacement text |
|---|---|---|---|---|
| N1 | Ocean Drive | "A lender will not require flood insurance on any of the houses for sale here with no fee." | Flood was measured on the 15 houses placed on the county map, out of 22 no-fee houses (row 134: Ocean Drive 0 of 15; areas file `floodHighRisk [0, 15]`, `noFeeHouses` 22). "Any of the houses" says all 22; 7 are unplaced. Also "will not require" is a lender rule stated as certain; the federal rule binds in high-risk zones only. Downtown is different: all 17 placed. | "Few of the houses for sale here with no fee need flood insurance for a mortgage." (the Crescent Beach form, 2 of 25 there; here 0 of 15 placed) |
| N2 | Guide, "Where are they?" | label "Within half a mile of the sand" (Downtown, Myrtle Heights, Windy Hill, Crescent Beach, Ocean Drive, Garden City) | The label dropped "Most houses". Within half a mile of the shore: Downtown 13 of 17, Windy Hill 17 of 18, Ocean Drive 12 of 15, Garden City 15 of 18 (areas file). The bare label says every house. v9 and the 14g label both had "Most houses". | "Most houses within half a mile of the sand" (or "Mostly within half a mile of the sand") |
| N3 | Rules card, Loris, short-term rental | "No, it's not a listed use in city zoning, and a use not listed is not permitted." | v7 (row 141 note) struck a flat "No": the table of uses (an image) is not read in full, and Bed and Breakfast Inns are conditional in R-1.4, R-1.5, R-1.7 and R-2. v7's supported wording is "Not a listed use in city zoning, and a use not listed is not permitted. We ask the city about the address." The leading "No," puts the struck conclusion back (B30). | "Not a listed use in city zoning, and a use not listed is not permitted. We ask the city about the address." |

## Tighten

| # | Where | Current text | Why | Replacement text |
|---|---|---|---|---|
| N4 | Downtown | "Even so, a lender will not require flood insurance on any of them." | 0 of 17 in a high-risk zone (row 116, areas file). It holds for the 17. "Will not require" is stronger than the rule (a lender can ask for more than the federal rule). | "None of them is in a high-risk flood zone, the zone where a lender requires flood insurance." |
| N5 | Rules card, North Myrtle Beach, rental | "Yes, in most of the city: zoning does not generally limit it." | v7 flagged "Yes in most of the city" as the writer's quantity; the city says "City zoning does not generally restrict STR locations, but some PDDs, Development Agreements, and HOA/POA documents may" (Rental Property Quick Reference). | "Yes: city zoning does not generally limit it, though some planned developments and HOA documents do. You need a business license, and it does not pass to you when the home sells." |
| N6 | Crescent Beach | "a trailer or camper goes behind the front of the house or under a carport, so it needs a carport or a side yard." | Row 60, Sec. 23-113(b): "behind the nearest portion of a building to a street" or in a carport or enclosed building. A back yard qualifies; "a carport or a side yard" leaves it out. | "...so it needs a carport or room beside or behind the house." |
| N7 | Aynor | "The town's zoning does not limit a camper or a work truck at home." and "On the third Saturday in September, almost 25,000 people come to the Aynor Harvest Hoe-Down" | (a) Only 3 of the 30 no-fee houses are in the town (areas/lots files); 27 are outside any town, under county rules, so the sentence is true of the town and not of most of these houses. Row 142: the zoning ordinance was searched, the town's general code was not. (b) State law (Title 53 ch. 3) designates the third Saturday in September as "Aynor Harvest Hoe-Down Festival Weekend"; the town page says "The festival draws almost 25,000 festival goers" and gives no day. The sentence puts all of them on the Saturday. | "Each September, almost 25,000 people come to the Aynor Harvest Hoe-Down, a festival the Pilot Club of Aynor started. In the town of Aynor, zoning does not limit a camper or a work truck at home; most of these houses are outside the town, under county rules." |
| N8 | Rules card, Aynor, rental | "the zoning appeals board decides on a use it does not list" | Row 142 note, Sec. 9.01: the Board of Zoning Appeals "may deem a use of the same general character appropriate". That is narrower than deciding any unlisted use. | "...and the zoning appeals board may approve a use of the same general character as a listed one." |

## Optional

- Horry County rental card leads "Only in some zones" while Aynor leads "Only with approval" for the same mechanism (an official decides an unlisted use). Row 143: "The zoning administrator shall determine whether or not an unlisted use is part of an existing category." "Only with approval" fits both.
- Socastee: "Outdoor storage may not be in front of the house" is flat. Row 170 says "some districts bar storage in front of the house". "In some zoning districts, outdoor storage may not be in front of the house" would match.
- Pine Lakes: the chip "on the older streets" is right for the MLS neighborhood "Pine Lakes" (6 of 6, no fee). The neighborhoods ledger rows 4 and 5 also show a fee in Pine Lakes Estates, which the page does not mention.
- Cherry Grove "Many of the canal houses have their own docks": the only evidence is the 2023 NAIP aerial record in `photos.json` (alt: "rows of houses with boat docks on long dead-end canals"). I read the record; I did not view the image. It is a fact read from a picture: say only what it shows. "Many" fits an aerial of docks on canal after canal.

## Row 181, item by item

| Item | Result |
|---|---|
| (1) Downtown: 17 of 17 inside the City of Myrtle Beach; lot 0.206 acre = about 9,000 sq ft; none in a high-risk zone | town field 'MYRTLE BEACH' on 17 of 17 (recomputed from the lots file); 0.206 x 43,560 = 8,973; flood 0 of 17. Holds. Page "A typical lot is about 9,000 square feet" holds. Camper rule: row 59 (no recreational vehicle in a front yard in a residential district) holds. See N4. |
| (2) Conway: 20 of 20 inside the city; 0.34 acre = about 15,000 sq ft; Conway Medical Center 11.7 min | town field 'CONWAY' 20 of 20; 0.34 x 43,560 = 14,810; OSRM 11.7 (row 128). Holds. Conway card text matches row 61 and row 140. |
| (3) Crescent Beach "Most houses ... less than half a mile on foot" (25 of 34 placed, all 25 within); "Few of them need flood insurance" (2 of 25); Cherry Grove "almost every home" | 25 of 25 placed within 0.39 mile on foot; "most" is safe at 25 of 34. 2 of 25 flood. Row 74 for Cherry Grove (about 98 percent). "Most are older beach houses": 21 of 34 built before 1990. Holds. |
| (4) Pine Lakes: "older streets"; Preserve lists a fee; price and lot more than twice downtown | $929,950 against $435,000 = 2.14; 0.448 against 0.206 = 2.17 (5 of 6 matched). Preserve fee: neighborhoods rows 4 and 5. Holds (see the Pine Lakes Estates note above). |
| (5) Socastee lowest median of the 16 | $249,900; next is Conway $287,000. Holds. Boat and shed rules: see the optional note. |
| (6) Murrells Inlet north end: Brookgreen, Georgetown rule | See below. Holds. |
| (7) Country around Loris: home business, three service vehicles | Row 143 note, Sec. 927.F: on AG1, AG2, FA, LFA, CFA lots under 1.5 acres, three service vehicles per residence. Holds. |
| (8) Aynor: no camper or work truck rule in town zoning | Row 142 holds for the zoning ordinance; see N7. |
| (9) Rules cards: each opens with Yes, No, Only in some zones or Only with approval | Myrtle Beach (rows 137, 170: RMV, MU-H, C6, A, E, HC1, HC2 by right; IR by special exception; R5, R7, R8, R10, R15 not), Surfside (row 139: stays under 30 days in R-3 and C-3; 365 days or more wherever homes are), Conway (row 140: CC, CBD, WRD) hold. County: see the optional note. North Myrtle Beach: N5. Loris: N3. Aynor: N8. |

## Other changed sentences, checked

| Sentence | Source | Result |
|---|---|---|
| Windy Hill: "Come by boat, and you can use the finger docks free for the day while you shop or eat." | bflanding.com/plan-your-visit/day-docking/, re-opened: "use our finger docks on the Intracoastal Waterway for the day for free while you shop, dine and enjoy all that Barefoot Landing has to offer." | holds (v9 P8 wording) |
| Windy Hill: "Inside North Myrtle Beach, a work truck up to 18,500 pounds may park at home." | row 60, Sec. 21-29: no commercial vehicle over 18,500 pounds in a residential zone. 18 of 20 Windy Hill houses are inside the city. | holds |
| Murrells Inlet: Brookgreen "about 15 minutes away by car" | I re-ran OSRM: 18.7 min to the garden's centre point, as row 176; v9 P11 measured 16.2 to the visitor roads (William Alston Loop) and 14.2 to the Brookgreen Drive turn. "About 15" is the v9 safe wording and the rounding rule (nearest 5 above 15). | holds |
| Murrells Inlet: Stanley Drive landing "a 4-minute drive"; MarshWalk "about 6 minutes" | OSRM 255 s (4.25 min) and 377 s (6.28 min) from the middle of the 12 houses | holds |
| Murrells Inlet: "The free pier walk and free beach parking at Garden City Beach are a 6-minute drive across the marsh." | OSRM from (33.5735, -79.0183) to the Garden City Pier (OSM way 164853658): 6.47 min, 2.34 mi. Pier free to walk and free beach parking: row 160. | holds |
| Murrells Inlet: "some of the houses for sale are on the creeks ... the rest are a few streets back" | v9: 5 of 12 name creek or inlet frontage or view; all 12 are east of US 17 Business within 1 mile of the landing | holds |
| Murrells Inlet: "The south part is in Georgetown County. There, a vehicle or travel trailer without current plates has to be kept in a closed building." | Georgetown Sec. 407 (row 144, v7): "Automotive vehicles or travel trailers of any kind or type without current license plates ... other than in a completely enclosed building" on residentially zoned property. 4 of the 12 houses are in Georgetown County. | holds |
| Garden City: "did not develop until the 1950s"; Stanley Drive landing "a 5-minute drive" | v9 P13 safe wording (SCDAH survey). OSRM from the Garden City point to the landing: 5.49 min. | holds |
| Garden City: "most of the houses for sale here are within half a mile of the shore" | 15 of 18 placed | holds |
| Little River: "less than a mile from the docks on Mineola Avenue"; "probably in the early 1920s"; jetties "were finished in 1983, boats could cross the bar"; Vereen "through its gardens and along the water" | v9 P5, P9, P10, P6 safe wordings | hold |
| Surfside: "up to two boats or trailers at a home, and only one over 21 feet"; "about 1 in 4 homes there needs flood insurance" | v9 P7; row 74 (1,001 of 3,670 address points) | hold |
| Socastee: "Most are 1980s houses" | years built: 8 of 11 in 1980 to 1986 (the ninth is 1979); streets named from the MLS field. | holds |
| Conway: "In town, lots are about 15,000 square feet"; "a camper or a trailer can go in the side or back yard or under a carport. A shed goes in back, with a permit." | rows 61, 140; 0.34 acre | holds |
| Conway: "the Celebration of Lights opens each December" | row 161 (City of Conway). Search results for 2020 to 2022 show early-December openings (December 2 and 3). | holds; the date is a yearly pattern, not a 2026 date |
| Conway: "Billy Witherspoon Landing ... a 6-minute drive. Conway Medical Center is a 12-minute drive." | row 128: 5.8 and 11.7 min | holds |
| Loris: "older houses were built from the 1940s to the 1970s, on lots of about 0.4 acre"; "A work truck up to 2 tons may park at home." | 10 of 15 built before 1990, years 1940 to 1977; median lot 0.3735. Row 63 (Sec. 7-11, R-1 and R-2; one vehicle). The row cites the city's posted "Current 3-7-18" copy, an older file than the 2024 ordinance row 141 used. | holds; the 2018 copy may be superseded |
| Loris: "The festival's dish is chicken bog" | v9 P14 safe wording | holds |
| Country around Loris: "Many of the new houses are on lots of about 0.7 acre"; shed 5 feet, fence 8 feet | row 172; row 143 (Sec. 402, 412) | holds |
| Myrtle Heights: "A few houses keep old walls of coquina rock or brick." | v9 P3 safe wording (NRHP: 15 properties retain walls "constructed of coquina rock or brick") | holds |
| Downtown: "Most of these houses are within half a mile of the beach." | 13 of 17 within half a mile of the shore (straight line) | holds |
| Price line "the lowest on this page" (Socastee) | computed from the 16 medians | holds |

## Struck list

Added entries for N1, N2, N3, N5, N6, N7, N8.
