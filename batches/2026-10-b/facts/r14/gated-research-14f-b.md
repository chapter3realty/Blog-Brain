# Gated communities: what the homes are like, and Litchfield by the Sea fees, research 14f-b

Page: /buyers/gated-communities/. Batch 2026-10-b, round 14f. Researched 2026-10-15.

Question 1: for ten places, one sentence a buyer can picture about the homes: when most were built, typical size, the style or build, and what the best lots look onto.
Question 2: the range of the monthly HOA fee across Litchfield by the Sea's sections, with what the fee covers.

## Method

**Primary sources tried first.**

- Georgetown County's open GIS (gis1.georgetowncountysc.org, GCGIS_OpenData layer 7 PARCELATTRIBUTES, and the GCGIS_Export parcel layer) has owner, sale, land use code and legal description. It has no year built, heated area, bedrooms or stories.
- The assessor's property cards are on qPublic (www.qpublic.net/sc/georgetown/, linked from the county Assessor page, https://www.gtcountysc.gov/259/Assessor). qPublic answers every request with a Cloudflare "Just a moment..." challenge, so no card could be read.
- Horry County's parcel layer 24 (Seasons, Bellwood Landing) also has no year built or heated area. Its fields are listed in the notes for Seasons.

**What the county data can show.** Georgetown County publishes building footprints traced from its aerial photos for 2017 (GCGIS_Buildings layer 5) and 2024 (layer 1). Each footprint carries the parcel number (TMS).

1. For each Georgetown place, I took the house parcels with the same parcel filter the ledger used for prices: the where clauses of rows 191 to 196, and LegalDescription LIKE '%WILLBROOK%' for Willbrook. "House parcels" means a land use code ending 100 or 101; DeBordieu also counts code 500, as in row 196.
2. I counted how many of those parcels had a building footprint over 800 square feet in 2017, and how many in 2024.
3. A house with a footprint in 2024 but not in 2017 was built (or rebuilt) from 2017 on. This gives "most houses were built before 2017" from a primary source.
4. Footprint area is the roof outline. It includes garages and porches, so it is not heated area and is not used for size.
5. The 2022 layer (layer 3) returned no matches on TMS, so it is not used.

**Seasons build era.** This comes from the Horry County Register of Deeds index, as already verified in batch 2026-10-a (Seasons ledger rows 21 to 23). The builders deeded 416 lots to buyers from December 2006 to December 2016.

**Size, bedrooms, stories, style and views come from listings, marked "listings".** The source is RE/MAX Southern Shores' public MLS site (mbcoastalhomes.realgeeks.com).

- The site's search pages now return a captcha, so no new search was run. I re-opened, one by one, the detached listings already in the batch's evidence:
  - closed sales October 2025 to September 2026 in data/gated-mls-sold.json (7 places, 123 listings);
  - Bellwood Landing listings in data/gated-amenities-mls.json;
  - Seasons listings cited in batch 2026-10-a.
- Fields read on each listing page:
  - Year Built
  - Total Heated SqFt
  - Bedrooms
  - Levels
  - Style
  - Lot Description
  - Lot Location
  - HOA Fees (Calculated Monthly)
  - HOA Fee Includes
- I also read the Property Description text for view phrases ("views of", "overlooking", "pond views" and the like) and for the word "custom".
- Sold listings lean toward the houses that happened to sell, so the county counts are the check on age.
- Zillow, Redfin and Realtor.com were not opened. Beach Pro Team's search returned an empty page and was not used.

Middle half means the 25th to 75th percentile. Counts are of detached houses only.

## 1. Seasons at Prince Creek West (Murrells Inlet, Horry County)

- **Era (primary):** the builders deeded 416 of the 444 home lots to buyers between 2006-12-28 and 2016-12-29: Levitt and Sons, 77 lots in 2006 to 2009, then MBSC Seasons, 339 lots in 2009 to 2016 (batch 2026-10-a Seasons rows 21, 23; row 102 here for 444 lots). So the houses were built from 2006 to about 2017.
- **Listings (23 detached):**
  - Year Built 2006 to 2016, middle 2011.
  - Heated area 1,662 to 2,584 sq ft, middle 1,994 (middle half 1,767 to 2,338).
  - 21 of 23 have 3 bedrooms and 21 of 23 have one level.
  - Style is Ranch on 16 and Traditional on 6.
  - "custom" appears in 2 descriptions; these are builder plans (batch a rows 33, 34: in 2017 the builder sold named plans of 1,720 to 2,015 sq ft and larger ones from about 2,276; those rows are unverifiable and are not used here).
- **Views:** 4 listings have "Lake Front" or "Pond on Lot" in Lot Description; 4 descriptions name pond views; 2 describe a view of the Blackmoor golf course, across the pond on 2518063.
- **MLS read:** 2525332, 2603264, 2616545, 2503057, 2512401, 2513880, 2513969, 2515096, 2515776, 2516609, 2518063, 2518710, 2521764, 2522381, 2523208, 2524529, 2527041, 2600773, 2603325, 2603828, 2606988, 2615680, 2617721. 2461973 has no fields (removed) and is not counted.
- **Sentence for the page:** "Most homes here are one-story builder homes from 2006 to 2016, about 1,800 to 2,300 square feet with three bedrooms; the best lots back onto a pond."

## 2. Bellwood Landing (Prince Creek West, Murrells Inlet, Horry County)

- **Primary:** 102 lots; 91 had a building in the county's count (row 139); median lot 0.44 acre, some on the marsh by Collins Creek over 1.5 acres (row 189).
- **Listings (12 detached):**
  - Year Built 2006 to 2026, middle 2016.
  - Heated area 2,370 to 3,476 sq ft, middle 3,048 (middle half 2,626 to 3,160).
  - 11 of 12 have 4 bedrooms.
  - Two levels on 7 and one level on 3 (2 blank).
  - "custom" appears in 7 of 12 descriptions.
- **Views:**
  - 2617436 (built 2025): Lot Location "Marsh View, Inlet/Creek, Wetlands, River Access"; description "marsh views".
  - 2610312: "pond front".
  - 2620026: "a private wooded yard".
- **MLS read:** 2621155, 2620026, 2610312, 2617436, 2605383, 2604595, 2601366, 2600814, 2527874, 2508253, 2507580, 2505970.
- **Sentence:** "Most houses were built from about 2010 on, many of them custom, often two stories of about 2,600 to 3,200 square feet with four bedrooms; the best lots look over the marsh of Collins Creek."

## 3. Wachesaw Plantation (Murrells Inlet, Georgetown County)

- **Primary:** 238 house parcels; 231 had a building in the 2017 footprints, 237 in 2024. Only 6 houses are new since 2017.
- **Listings (16 detached):**
  - Year Built 1987 to 2010, middle 1995 (middle half 1991 to 1999).
  - Heated area 1,400 to 4,354 sq ft, middle 2,651 (middle half 2,134 to 3,315).
  - 11 of 16 have 3 bedrooms.
  - One level on 8 and two on 6 (2 blank).
  - "custom" appears in 8 descriptions.
- **Views:**
  - Fairways of the Fazio course: 2521958 "views over the 14th fairway"; 2608540 "views of the 8th fairway"; 2605738 "overlooking the 11th tee".
  - Lake Lachicotte: 2607064.
  - The Waccamaw River and the waterway: 2522401 "overlooks the Waccamaw River/Intercoastal Waterway"; 2528051 and 2519754 "views of the Intracoastal Waterway"; 2602260 "overlooking the Waccamaw River".
- **MLS read:** 2516469, 2521958, 2522401, 2522486, 2528051, 2601011, 2607064, 2602260, 2605946, 2519754, 2615300, 2608540, 2605738, 2613228, 2602322, 2613222.
- **Sentence:** "Most houses were built from the late 1980s to the early 2000s, one or two stories of about 2,100 to 3,300 square feet; the best lots look down a fairway or out over the Waccamaw River."

## 4. Wachesaw East (Murrells Inlet, Georgetown County)

- **Primary:** 268 house parcels; 262 had a building in 2017, 267 in 2024. Only 5 houses are new since 2017. Row 141 already has Year Built 2000 to 2006 on 13 listings.
- **Listings (17 detached):**
  - Year Built 2000 to 2006, middle 2003.
  - Heated area 1,282 to 3,112 sq ft, middle 2,222 (middle half 1,650 to 2,650).
  - 4 bedrooms on 9 and 3 on 6.
  - One level on 12 of 17.
  - Style Traditional on 11 and Ranch on 4.
  - "custom" appears in 3 descriptions, so most are builder homes.
- **Views:** 11 of 17 have "On Golf Course" or a golf view in the lot fields. Descriptions:
  - "view of the 11th fairway" (2516307)
  - "view of the 6th fairway" (2522934)
  - "view of the 14th hole" (2609354)
  - "overlooking the pond" (2614398)
  - "overlooks the sparkling lake" (2617662)
- **MLS read:** 2516307, 2515047, 2521134, 2516131, 2522934, 2514866, 2515172, 2602057, 2607363, 2607853, 2604582, 2609354, 2612369, 2614398, 2616547, 2617662, 2620196.
- **Sentence:** "Nearly all the houses went up from 2000 to 2006, mostly one-story builder homes of about 1,650 to 2,650 square feet; many back onto a fairway or a pond."

## 5. The Reserve (Pawleys Island, Georgetown County)

- **Primary:** 173 house parcels; 122 had a building in 2017 and 162 in 2024, so about 40 houses are new since 2017 (about a quarter). A few lots are still empty (row 194 lists lot sales).
- **Listings (13 detached):**
  - Year Built 2004 to 2024, middle 2006 (middle half 2005 to 2014).
  - Heated area 2,688 to 5,402 sq ft, middle 4,059 (middle half 3,503 to 5,006).
  - 4 bedrooms on 8 and 5 on 5.
  - Two levels on 9 and one on 3.
  - "custom" appears in 7 of 13 descriptions.
- **Views:** lakes and ponds in 7 of 13 descriptions ("lake views" 2604986; "pond views" 2602560, 2609831, 2612070). Two other views:
  - 2520262: "overlooking a scenic nature preserve; marsh views".
  - 2616797: Lot Location "On ICW, River Front"; description "overlooking the marina and waterway".
- **MLS read:** 2520262, 2522181, 2520192, 2527850, 2522684, 2526087, 2609831, 2612070, 2612852, 2604986, 2602560, 2615613, 2616797.
- **Sentence:** "Most houses were built from 2005 on, many of them custom, often two stories of about 3,500 to 5,000 square feet; the best lots look over a pond or lake, and a few look over the marsh or the river by the marina."

## 6. Willbrook Plantation (Litchfield, Georgetown County)

- **Primary:** 366 house parcels with WILLBROOK in the legal description; 343 had a building in 2017 and 365 in 2024, so about 22 houses are new since 2017.
  - Caution: the legal description filter was not checked street by street against the gate. Some parcels may be outside it.
- **Listings (7 detached; small sample):**
  - Year Built 1997 to 2006, middle 2002.
  - Heated area 2,819 to 5,189 sq ft, middle 4,368.
  - 4 or 5 bedrooms on 6 of 7.
  - Two levels on 5 of 7.
  - "brick" appears in all 7 descriptions and "custom" in 3.
- **Views:** golf on 5 of 7. Descriptions:
  - "views of the 7th hole and fairway" (2513738)
  - "overlooking the 8th green" (2528263)
  - "views of the 9th Tee Box and Fairway" (2509990)
  - one is "creek-front" (2512535)
- **MLS read:** 2512535, 2526667, 2517758, 2513738, 2528263, 2509990, 2612529.
- **Sentence:** "Most houses were built in the late 1990s and early 2000s, often large brick homes of two stories; the best lots look onto a fairway of the golf course."
- The size is from 7 sales, so the page should not give a square-foot figure for Willbrook.

## 7. Litchfield Plantation (Pawleys Island, Georgetown County)

- **Primary:** with row 193's street filter, 92 house parcels. 41 had a building in 2017 and 84 in 2024, so about half the houses standing today were built from 2017 on.
  - The row 193 verifier found that filter missed some parcels, so treat the count as about.
- **Listings (8 detached):**
  - Year Built 1971 to 2025, middle 2018.
  - Heated area 2,670 to 5,182 sq ft, middle 2,997.
  - 4 bedrooms on 5.
  - Two levels on 6 of 8.
  - "custom" appears in 3 descriptions.
- **Views:** the rice fields in 6 of 8 descriptions:
  - "overlooking the historic Carolina Gold Ricefields" (2528842; Lot Location "Marsh View, River View")
  - "overlooking the Ricefields and gorgeous sunsets" (2614449)
  - "overlooking the historic rice fields and marsh" (2608603)
- **MLS read:** 2522169, 2525398, 2514543, 2528842, 2607202, 2611244, 2608603, 2614449.
- **Sentence:** "About half the houses are new since 2017, mostly two stories of about 2,700 to 4,000 square feet; the best lots look west over the old rice fields and marsh."
- On "west": the rice fields are along the Waccamaw River, west of the homes. That comes from the map, not from a listing. The writer may drop "west".

## 8. Litchfield by the Sea (Pawleys Island, Georgetown County)

- **Homes:** it is mostly condos and villas. 33 condo and townhouse listings read in nine sections show Year Built from 1981 to 2008:
  - Breakers Reef 1981 and 1988
  - Sandpiper Run 1984
  - Summerhouse 1985 and 2008
  - Bridgewater 1995 and 1996
  - The Warwick 1995
  - The Cambridge 1996
  - The Crescent 1997
  - Lakeside Villas 1995 and 2000
  - Seaside Inn 2006
- **Houses (Oystercatcher Island, 5 listings):**
  - Year Built 1995 to 2004.
  - Heated area 1,450 to 1,850 sq ft.
  - All have 3 bedrooms and all have Style "Raised".
  - Views: "views across the lake toward the beautiful Atlantic Ocean" (2524594); "views across the lake to the marsh" (2607902); "overlooking Osprey Lake" (2606158).
- **MLS read (houses):** 2525110, 2524594, 2606158, 2607902, 2602108. Condo MLS numbers are in data/gated-mls-sold.json under litchfield_by_the_sea.
- **Sentence:** "Most homes here are condos and villas built from the 1980s to the 2000s; its few houses, in Oystercatcher Island, are raised three-bedroom homes of about 1,450 to 1,850 square feet, and many look across the lake to the ocean or the marsh."

## 9. Heritage Plantation (Pawleys Island, Georgetown County)

- **Primary:** 460 house parcels; 440 had a building in 2017 and 458 in 2024, so only about 18 houses are new since 2017.
- **Listings (24 detached):**
  - Year Built 1990 to 2022, middle 1997 (middle half 1993 to 2003).
  - Heated area 1,694 to 5,596 sq ft, middle 2,380 (middle half 2,036 to 2,730).
  - 3 bedrooms on 17 of 24.
  - One level on 18 of 24.
  - Style Traditional on 16 and Ranch on 5.
  - "brick" appears in 17 descriptions and "custom" in 7.
- **Views:**
  - Golf on 10 in the lot fields. Descriptions: "views of the 7th tee box" (2506981), "views of the 2nd fairway" (2612437), "overlooks the golf course" (2527706).
  - Rice fields and marsh: 2614725 "overlooking the historic rice fields and marshlands".
  - The waterway: 2525316 "views of the Intracoastal Waterway".
- **MLS read:** 2516738, 2506981, 2520171, 2501242, 2523036, 2520082, 2522225, 2525461, 2525180, 2523521, 2600198, 2602639, 2600872, 2610652, 2525316, 2605677, 2527706, 2612437, 2608878, 2614725, 2611455, 2616472, 2618339, 2618770.
- **Sentence:** "Most houses were built in the 1990s, mostly one-story brick homes of about 2,000 to 2,700 square feet with three bedrooms; the best lots look onto the golf course or out over the old rice fields and marsh toward the river."

## 10. DeBordieu Colony (Georgetown, Georgetown County)

- **Primary:** 351 house parcels (codes 100, 101 and 500); 302 had a building in 2017 and 336 in 2024, so about 34 houses are new since 2017.
- **Listings (38 detached):**
  - Year Built 1974 to 2025, middle 2004 (middle half 2000 to 2012).
  - Heated area 2,298 to 7,678 sq ft, middle 4,219 (middle half 3,519 to 4,534).
  - 4 bedrooms on 16 and 5 on 11.
  - Style "Raised" on 25 of 38.
  - Three or more levels on 19 and two on 17.
  - "elevator" appears in 23 descriptions and "custom" in 9.
- **Views:**
  - Ocean: 5 have "Oceanfront" or "Oceanview Lot" in Lot Location. Descriptions: "views of the Atlantic" (2613466, built 2020, 7,678 sq ft); "views of both the ocean and marsh" (2518252).
  - Marsh and North Inlet: "overlooking the tranquil creeks and marshes of North Inlet" (2605522).
  - Golf and ponds: "overlooking DeBordieu Club's Hole #6" (2603314); "overlooking the tranquil 5-acre Pinckney Pond" (2604879). Golf is in the lot fields of 15 listings and lake or pond in 18.
- **MLS read:** 2518252, 2510797, 2526548, 2520215, 2525996, 2520977, 2520999, 2525241, 2520833, 2526049, 2524319, 2526458, 2527303, 2523138, 2528339, 2605249, 2605100, 2609159, 2605246, 2603314, 2607781, 2608817, 2512908, 2610217, 2528418, 2612990, 2524358, 2612045, 2609657, 2604879, 2610323, 2609464, 2605522, 2613466, 2616441, 2620095, 2602667, 2615975.
- **Sentence:** "Most houses were built from the late 1990s to the 2010s, many of them raised beach houses of three levels with an elevator, about 3,500 to 4,500 square feet; the best lots are on the ocean, and others look over the marsh of North Inlet, a pond or the golf course."

## 11. Litchfield by the Sea HOA fees (Task 2)

**Fee range.** Across 38 sales in ten sections from October 2025 to September 2026 (data/gated-mls-sold.json, each listing re-opened 2026-10-15), the monthly HOA fee on the listing runs from $618 to $1,876.

| Section | Listings | Monthly fee on listings | Type |
|---|---|---|---|
| Summerhouse at LBTS | 7 | $618 to $808 | condo, about 525 sq ft |
| Lakeside Villas | 3 | $680 to $808 | condo |
| Seaside Inn | 1 | $736 | condo |
| The Cambridge | 3 | $855 to $1,284 | condo |
| Oystercatcher Island | 5 | $1,050 to $1,357 | house |
| Sandpiper Run | 1 | $1,130 | condo |
| Sandpiper Run, The Crescent | 2 | $1,254 to $1,323 | condo |
| The Warwick | 2 | $1,276 | condo |
| Breakers Reef | 4 | $1,386 to $1,394 | condo and townhouse |
| Bridgewater | 10 | $1,054 to $1,876 | condo |

**Lowest.** $618: Summerhouse unit 423, 14290 Ocean Hwy, a 1-bedroom, 555 sq ft condo (MLS 2601204). Fee Includes: "Association Management, Common Areas, Electricity, Insurance, Internet, Legal/Accounting, Maintenance Grounds, Pest Control, Pool(s), Recreation Facilities, Sewer, Security, Trash, Water". It is the only fee read that includes electricity.

- Summerhouse and Seaside Inn have Ocean Highway (US 17) addresses. Their listings say Litchfield by the Sea, but whether they are inside the main gate was not checked.
- Without them, the lowest is $680 at Lakeside Villas (113 Lakeside Dr, MLS 2521982). Fee Includes: "Association Management, Common Areas, Internet, Legal/Accounting, Maintenance Grounds, Pest Control, Pool(s), Recreation Facilities, Security, Trash". No water, sewer or insurance.

**Highest.** $1,876: Bridgewater unit 505, 601 Retreat Beach Circle, a top-floor oceanfront 2-bedroom condo, 918 sq ft (MLS 2613620). Fee Includes: "Association Management, Common Areas, Insurance, Internet, Legal/Accounting, Maintenance Grounds, Pest Control, Pool(s), Recreation Facilities, Sewer, Security, Trash, Water".

**Within one building.** In Bridgewater the fee runs from $1,054 (a 547 sq ft 1-bedroom, MLS 2513611) to $1,876, so the fee changes with the unit, not only the section.

**Houses (Oystercatcher Island).** $1,050 to $1,357 a month; 362 Retreat Beach Circle (MLS 2525110, $1,357) lists Insurance, Internet, Pool(s), Recreation Facilities, Sewer, Security, Trash and Water among what the fee includes.

**What all the fee lists share.** Every Fee Includes list read has Common Areas, Maintenance Grounds, Pool(s) and Security. Most have Internet and Trash; water, sewer and building insurance vary by section.

**Not read.** The fees themselves are what sellers typed into the MLS; the associations publish none (row 92). House sections whose listings do not say "Litchfield by the Sea" may be missing (see the about note in data/gated-mls-sold.json).

## Ledger rows 600 to 613

| # | Claim, as the page will state it | Value and unit | Source: primary only | URL opened | Verbatim quote from the source | As of | Stale by | Verifier status | Verifier note |
|---|---|---|---|---|---|---|---|---|---|
| 600 | (added 2026-10-15, round 14f) Listings: Seasons at Prince Creek West's homes are one-story builder homes from 2006 to 2016, most of them about 1,800 to 2,300 square feet with three bedrooms; the best lots back onto a pond. | builder lot deeds 2006-12-28 to 2016-12-29 (416 of 444 lots); listings: Year Built 2006 to 2016 (middle 2011), heated 1,662 to 2,584 sq ft (middle 1,994; middle half 1,767 to 2,338), 3 bedrooms on 21 of 23, one level on 21 of 23, pond or lake on the lot fields of 4 | Era: Horry County Register of Deeds index, as verified in batch 2026-10-a Seasons rows 21 and 23. Size, style, views: listings, marked as listings (RE/MAX Southern Shores MLS site), 23 detached listings | https://acclaimweb.horrycounty.org/AcclaimWeb/ (Name search LEVITT AND SONS OF HORRY; MBSC SEASONS) ; https://mbcoastalhomes.realgeeks.com/property/2518063/ ; https://mbcoastalhomes.realgeeks.com/property/2617721/ (and the 21 others in the notes) | Deeds (batch a): "Record Date: 12/28/2006" "LOT 130 TS SOCASTEE THE SEASONS AT PRINCE CREEK"; "Record Date: 12/29/2016" "LOT 255 TS SOCASTEE SUB SEASON AT PRINCE CREEK". 2518063: "Year Built 2011", "Total Heated SqFt 1979", "Bedrooms 3", "Levels One", "Style Ranch", "Lake Front, Outside City Limits, Pond on Lot"; description "view of Blackmoor golf course across the pond". 2617721: "Year Built 2014", "Total Heated SqFt 2470", "Lake/Pond View"; "overlooks the shimmering pond" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Listings are homes that sold or were listed from 2025 to 2026. Describe homes only, never who lives there. The builder's 2013 "one-story floor plans" line (batch a row 83) agrees. One listing (2616545) has two levels. |
| 601 | (added 2026-10-15, round 14f) Listings: Bellwood Landing's houses were mostly built from about 2010 on, many of them custom, often two stories of about 2,600 to 3,200 square feet with four bedrooms; the best lots look over the marsh of Collins Creek. | Year Built 2006 to 2026 (middle 2016); heated 2,370 to 3,476 sq ft (middle 3,048; middle half 2,626 to 3,160); 4 bedrooms on 11 of 12; two levels on 7, one on 3; "custom" in 7 of 12 descriptions | Listings, marked as listings (RE/MAX Southern Shores MLS site), 12 detached listings from data/gated-amenities-mls.json; lot sizes and marsh lots from row 189 (Horry County parcels) | https://mbcoastalhomes.realgeeks.com/property/2617436/ ; https://mbcoastalhomes.realgeeks.com/property/2610312/ ; https://mbcoastalhomes.realgeeks.com/property/2620026/ (and the 9 others in the notes) | 2617436: "Year Built 2025", "Total Heated SqFt 2974", "Bedrooms 4", "Marsh View, Inlet/Creek, Wetlands, River Access"; "marsh views". 2610312: "Year Built 2015", "Total Heated SqFt 3001", "Bedrooms 4"; "pond front". 2620026: "overlooks a private wooded yard" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Row 189 already says built from 2006 on and several custom. New: size, bedrooms, stories. Houses are still being built (row 139). |
| 602 | (added 2026-10-15, round 14f) Wachesaw Plantation's houses were mostly built from the late 1980s to the early 2000s; listings show one or two stories of about 2,100 to 3,300 square feet. The best lots look down a fairway of the Fazio course or out over the Waccamaw River. | County: 238 house parcels, 231 with a building in 2017, 6 new since. Listings: Year Built 1987 to 2010 (middle 1995; middle half 1991 to 1999); heated 1,400 to 4,354 (middle 2,651; middle half 2,134 to 3,315); 3 bedrooms on 11 of 16; one level on 8, two on 6 | Georgetown County GIS building footprints 2017 and 2024 (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 16 closed sales from data/gated-mls-sold.json | https://mbcoastalhomes.realgeeks.com/property/2522401/ ; https://mbcoastalhomes.realgeeks.com/property/2608540/ ; https://mbcoastalhomes.realgeeks.com/property/2602260/ ; https://mbcoastalhomes.realgeeks.com/property/2528051/ | 2522401: "Year Built 1992", "Total Heated SqFt 3830", "Levels Two"; "overlooks the Waccamaw River/Intercoastal Waterway". 2608540: "Year Built 1987", "Total Heated SqFt 3370"; "views of the 8th fairway of the Tom Fazio private golf course". 2602260: "overlooking the Waccamaw River". 2528051: "views of the Intracoastal Waterway" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Era from the county count (primary) and listings agree. Size and views are listings only. The county parcels are picked by street (row 191). |
| 603 | (added 2026-10-15, round 14f) Wachesaw East's houses went up from 2000 to 2006; listings show mostly one-story builder homes of about 1,650 to 2,650 square feet, and many back onto a fairway or a pond. | County: 268 house parcels, 262 with a building in 2017, 5 new since. Listings: Year Built 2000 to 2006 (middle 2003); heated 1,282 to 3,112 (middle 2,222; middle half 1,650 to 2,650); one level on 12 of 17; golf in the lot fields of 11 of 17; "custom" in 3 | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 17 closed sales | https://mbcoastalhomes.realgeeks.com/property/2612369/ ; https://mbcoastalhomes.realgeeks.com/property/2614398/ ; https://mbcoastalhomes.realgeeks.com/property/2516307/ | 2612369: "Year Built 2001", "Total Heated SqFt 1700", "Levels One", "Style Ranch", "On Golf Course"; "Overlooking a beautifully maintained golf course". 2614398: "Year Built 2004", "Total Heated SqFt 3112", "Bedrooms 5"; "overlooking the pond". 2516307: "view of the 11th fairway" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Extends row 141 (Year Built 2000 to 2006 on 13 listings). "Builder homes" rests on "custom" in only 3 of 17 descriptions; the writer may say "houses" instead. |
| 604 | (added 2026-10-15, round 14f) Most of The Reserve's houses were built from 2005 on, and about one in four since 2017; listings show many custom homes, often two stories of about 3,500 to 5,000 square feet. The best lots look over a pond or lake; a few look over the marsh or the river by the marina. | County: 173 house parcels, 122 with a building in 2017, 162 in 2024. Listings: Year Built 2004 to 2024 (middle 2006; middle half 2005 to 2014); heated 2,688 to 5,402 (middle 4,059; middle half 3,503 to 5,006); two levels on 9 of 13; "custom" in 7 of 13; lake or pond in 7 of 13 descriptions | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 13 closed sales | https://mbcoastalhomes.realgeeks.com/property/2604986/ ; https://mbcoastalhomes.realgeeks.com/property/2616797/ ; https://mbcoastalhomes.realgeeks.com/property/2520262/ | 2604986: "Year Built 2015", "Total Heated SqFt 5402", "Levels Two"; "lake views". 2616797: "Year Built 2011", "Total Heated SqFt 5075", "On ICW, River Front, Channel, Inlet/Creek"; "overlooking the marina and waterway". 2520262: "overlooking a scenic nature preserve"; "marsh views" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Row 163 already says listings were built from 2005 on. New: one in four since 2017 (county), size and views. |
| 605 | (added 2026-10-15, round 14f) Most of Willbrook Plantation's houses were built in the late 1990s and early 2000s; listings show large brick homes, mostly two stories, and the best lots look onto a fairway of the golf course. | County: 366 house parcels, 343 with a building in 2017, 365 in 2024. Listings: Year Built 1997 to 2006 (middle 2002); heated 2,819 to 5,189 (middle 4,368); two levels on 5 of 7; "brick" in 7 of 7; golf in 5 of 7 | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 7 closed sales | https://mbcoastalhomes.realgeeks.com/property/2513738/ ; https://mbcoastalhomes.realgeeks.com/property/2528263/ ; https://mbcoastalhomes.realgeeks.com/property/2509990/ | 2513738: "Year Built 1997", "Total Heated SqFt 4368", "Bedrooms 4", "Levels Two", "On Golf Course, In Golf Course Community, Golf Course View"; "custom-built, all brick home"; "views of the 7th hole and fairway of the Dan Maples designed". 2528263: "overlooking the 8th green of the Willbrook Plantation Golf Course" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Only 7 sales: give no square-foot figure. The county filter (legal description WILLBROOK) was not checked against the gate. |
| 606 | (added 2026-10-15, round 14f) About half of Litchfield Plantation's houses were built since 2017; listings show mostly two stories of about 2,700 to 4,000 square feet, and the best lots look over the old rice fields and marsh. | County: 92 house parcels, 41 with a building in 2017, 84 in 2024. Listings: Year Built 1971 to 2025 (middle 2018); heated 2,670 to 5,182 (middle 2,997); two levels on 6 of 8; rice fields in 6 of 8 descriptions | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 8 closed sales | https://mbcoastalhomes.realgeeks.com/property/2528842/ ; https://mbcoastalhomes.realgeeks.com/property/2614449/ ; https://mbcoastalhomes.realgeeks.com/property/2608603/ | 2528842: "Year Built 2022", "Total Heated SqFt 3060", "Marsh View, River View"; "overlooking the historic Carolina Gold Ricefields". 2614449: "Year Built 2018", "Total Heated SqFt 2933", "Levels Two"; "overlooking the Ricefields and gorgeous sunsets". 2608603: "overlooking the historic rice fields and marsh" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | The parcel set is row 193's street filter, which the verifier found incomplete. Say "about half". Only parcels coded as houses (100 or 101) are counted. |
| 607 | (added 2026-10-15, round 14f) Listings: most homes in Litchfield by the Sea are condos and villas built from the 1980s to the 2000s; its few houses, in Oystercatcher Island, are raised three-bedroom homes of about 1,450 to 1,850 square feet, and many look across the lake to the ocean or the marsh. | Condos and townhouses: Year Built 1981 to 2008 on 33 listings in nine sections. Houses: Year Built 1995 to 2004; heated 1,450 to 1,850; 3 bedrooms and Style Raised on 5 of 5 | Listings, marked as listings (RE/MAX Southern Shores MLS site), 38 closed sales in data/gated-mls-sold.json | https://mbcoastalhomes.realgeeks.com/property/2524594/ ; https://mbcoastalhomes.realgeeks.com/property/2607902/ ; https://mbcoastalhomes.realgeeks.com/property/2610212/ | 2524594: "Year Built 1995", "Total Heated SqFt 1450", "Bedrooms 3", "Style Raised"; "stunning views across the lake toward the beautiful Atlantic Ocean". 2607902: "views across the lake to the marsh". 2610212 (Breakers Reef): "Year Built 1988", "true oceanfront living" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Houses are only the Oystercatcher sales (rows 91, 197). Other house sections may exist; say "its houses in Oystercatcher Island", not "its only houses". |
| 608 | (added 2026-10-15, round 14f) Most of Heritage Plantation's houses were built in the 1990s; listings show mostly one-story brick homes of about 2,000 to 2,700 square feet with three bedrooms. The best lots look onto the golf course or out over the old rice fields and marsh toward the river. | County: 460 house parcels, 440 with a building in 2017, 458 in 2024. Listings: Year Built 1990 to 2022 (middle 1997; middle half 1993 to 2003); heated 1,694 to 5,596 (middle 2,380; middle half 2,036 to 2,730); 3 bedrooms on 17 of 24; one level on 18 of 24; "brick" in 17 of 24 | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 24 closed sales | https://mbcoastalhomes.realgeeks.com/property/2602639/ ; https://mbcoastalhomes.realgeeks.com/property/2614725/ ; https://mbcoastalhomes.realgeeks.com/property/2525316/ | 2602639: "Year Built 2001", "Total Heated SqFt 2564", "On Golf Course"; "views of the golf course". 2614725: "Year Built 1997", "Total Heated SqFt 1882", "Levels One"; "overlooking the historic rice fields and marshlands". 2525316: "views of the Intracoastal Waterway" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | The course opened in 1986 (row 132); the earliest house read is 1990. |
| 609 | (added 2026-10-15, round 14f) Most of DeBordieu Colony's houses were built from the late 1990s to the 2010s; listings show many raised beach houses of three levels with an elevator, about 3,500 to 4,500 square feet. The best lots are on the ocean; others look over the marsh of North Inlet, a pond or the golf course. | County: 351 house parcels, 302 with a building in 2017, 336 in 2024. Listings: Year Built 1974 to 2025 (middle 2004; middle half 2000 to 2012); heated 2,298 to 7,678 (middle 4,219; middle half 3,519 to 4,534); Style Raised on 25 of 38; three or more levels on 19; "elevator" in 23 descriptions; Oceanfront or Oceanview Lot on 5 | Georgetown County GIS building footprints (row 610); listings, marked as listings (RE/MAX Southern Shores MLS site), 38 closed sales | https://mbcoastalhomes.realgeeks.com/property/2518252/ ; https://mbcoastalhomes.realgeeks.com/property/2613466/ ; https://mbcoastalhomes.realgeeks.com/property/2605522/ ; https://mbcoastalhomes.realgeeks.com/property/2603314/ | 2518252: "Year Built 2001", "Total Heated SqFt 3974", "Levels Three Or More", "Style Raised", "Oceanview Lot"; "raised beach home offers panoramic views of both the ocean and marsh"; "An elevator connects the first and second floors". 2613466: "Year Built 2020", "Total Heated SqFt 7678", "Oceanfront"; "views of the Atlantic". 2605522: "overlooking the tranquil creeks and marshes of North Inlet". 2603314: "overlooking DeBordieu Club's Hole #6" | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | Code 500 (houses on the water) counted as houses, as in row 196. |
| 610 | (added 2026-10-15, round 14f) Method row for 602 to 606, 608, 609: Georgetown County's aerial building footprints show which houses already stood in 2017. Most houses in Wachesaw Plantation, Wachesaw East, Heritage, Willbrook and DeBordieu stood by 2017; about one in four in The Reserve and about half in Litchfield Plantation are newer. | Houses / with a building 2017 / 2024 / new since 2017: Wachesaw Plantation 238/231/237/6; Wachesaw East 268/262/267/5; Litchfield Plantation 92/41/84/43; The Reserve 173/122/162/40; Heritage 460/440/458/18; DeBordieu 351/302/336/34; Willbrook 366/343/365/22 | Georgetown County GIS: PARCELATTRIBUTES (GCGIS_OpenData layer 7) for house parcels; 2017 Building Footprints (GCGIS_Buildings layer 5) and 2024 Building Footprints (layer 1), matched on TMS; a footprint counts if over 800 sq ft | https://gis1.georgetowncountysc.org/portal/rest/services/GCGIS_OpenData/FeatureServer/7/query ; https://gis1.georgetowncountysc.org/portal/rest/services/GCGIS_Buildings/FeatureServer/5/query ; https://gis1.georgetowncountysc.org/portal/rest/services/GCGIS_Buildings/FeatureServer/1/query ; where clauses: rows 191 to 196; Willbrook LegalDescription LIKE '%WILLBROOK%' | Service layer names: "2017 Building Footprints", "2024 Building Footprints"; fields "TMS", "SDE.BLDG_Footprints_2017.area". Sample: "TMS":"41-0182F-027-00-00","SDE.BLDG_Footprints_2017.area":3840.24 | 2026-10-15 | 2027-10-15 | pending verification (round 14f) | "New since 2017" means a footprint in 2024 and none in 2017, so a teardown rebuilt after 2017 counts as new. Footprint area is the roof outline with garage and porches; it is not heated area and is not used for size. The 2022 layer matched nothing on TMS and is not used. The county's year-built data is on qPublic, which blocks scripted reads with a Cloudflare check. |
| 611 | (added 2026-10-15, round 14f) Listings: in Litchfield by the Sea the HOA fee depends on the section and the unit. Listings sold in the past year show about $620 to $1,880 a month: about $620 to $810 for small condos near the highway and in Lakeside Villas, about $1,050 to $1,360 for the Oystercatcher Island houses, and up to about $1,880 for an oceanfront Bridgewater condo. | $618 to $1,876 a month across 38 sales in ten sections; Oystercatcher houses $1,050 to $1,357 | Listings, marked as listings (RE/MAX Southern Shores MLS site), field "HOA Fees (Calculated Monthly)", 38 closed sales in data/gated-mls-sold.json, re-opened 2026-10-15 | https://mbcoastalhomes.realgeeks.com/property/2601204/ ; https://mbcoastalhomes.realgeeks.com/property/2613620/ ; https://mbcoastalhomes.realgeeks.com/property/2524594/ ; https://mbcoastalhomes.realgeeks.com/property/2525110/ | 2601204 (Summerhouse, 14290 Ocean Hwy Unit 423): "HOA Fees (Calculated Monthly) 618"; "Charming 1Bedroom Condo in Litchfield By the Sea". 2613620 (Bridgewater, 601 Retreat Beach Circle Unit 505): "HOA Fees (Calculated Monthly) 1876"; "top floor oceanfront villa located within the gated community of Litchfield by the Sea". 2524594: "1050". 2525110: "1357" | 2026-10-15 | 2027-04-15 | pending verification (round 14f) | Replaces row 92's "Different in each section" with a range, if the writer wants one. Summerhouse and Seaside Inn are on Ocean Highway; whether they are inside the main gate is not checked. Without them the low end is $680 (Lakeside Villas, MLS 2521982). The associations publish no fee; these are what sellers typed. |
| 612 | (added 2026-10-15, round 14f) Listings: in Litchfield by the Sea, every section's fee covers the common areas, grounds, pool and security, and most also cover internet and trash. Whether it also covers water, sewer and building insurance depends on the section. | Common Areas, Maintenance Grounds, Pool(s), Security on all lists read; Insurance on Summerhouse, Bridgewater, Sandpiper Run, The Crescent, Oystercatcher; not on Lakeside Villas, Seaside Inn, The Cambridge, The Warwick, Breakers Reef | Listings, marked as listings (RE/MAX Southern Shores MLS site), field "HOA Fee Includes" | https://mbcoastalhomes.realgeeks.com/property/2613620/ ; https://mbcoastalhomes.realgeeks.com/property/2521982/ ; https://mbcoastalhomes.realgeeks.com/property/2601204/ | 2613620: "HOA Fee Includes Association Management, Common Areas, Insurance, Internet, Legal/Accounting, Maintenance Grounds, Pest Control, Pool(s), Recreation Facilities, Sewer, Security, Trash, Water". 2521982: "Association Management, Common Areas, Internet, Legal/Accounting, Maintenance Grounds, Pest Control, Pool(s), Recreation Facilities, Security, Trash". 2601204 adds "Electricity" | 2026-10-15 | 2027-04-15 | pending verification (round 14f) | Sandpiper Run (2609857) lists no Internet or Association Management. Fields are typed by the listing agent and may be incomplete. The beach club, gates and roads paid by the master association (row 80) are a separate matter. |
| 613 | (added 2026-10-15, round 14f) Listings: in Litchfield by the Sea the fee can differ inside one building. Bridgewater condos sold in the past year show $1,054 to $1,876 a month. | $1,054 (547 sq ft, 1 bedroom) to $1,876 (918 sq ft, top floor) | Listings, marked as listings (RE/MAX Southern Shores MLS site), 10 Bridgewater sales | https://mbcoastalhomes.realgeeks.com/property/2513611/ ; https://mbcoastalhomes.realgeeks.com/property/2613620/ | 2513611: "HOA Fees (Calculated Monthly) 1054"; "one bedroom, 1.5 bath, oceanfront condo located in Bridgewater". 2613620: "HOA Fees (Calculated Monthly) 1876" | 2026-10-15 | 2027-04-15 | pending verification (round 14f) | Support for telling buyers to ask the fee for the exact unit. The 1,786 and 1,708 figures on 800 to 1,200 sq ft units suggest the fee follows unit size, but that was not checked. |

Rows 614 to 619 are not used.

## Not found

- **Heated area and year built from a primary source** for any of the ten places. Georgetown County's cards are on qPublic behind a Cloudflare check, and the open GIS layers do not carry them. Horry County's parcel layer has neither. Ask the verifier to try qPublic in a browser for a few parcels if the page needs a primary size figure.
- **Seasons and Bellwood Landing build counts by year.** Horry County has no footprint layer checked here. Seasons' era comes from the builder deed dates (primary).
- **Any published fee schedule from a Litchfield by the Sea sub-association.** None is public (row 92).
