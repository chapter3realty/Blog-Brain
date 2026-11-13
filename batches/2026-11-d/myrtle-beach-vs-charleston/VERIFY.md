# Verification: /buyers/relocating/myrtle-beach-vs-charleston/

Independent verifier, 2026-11-13. I did not research this page. I opened every source myself, re-pulled every file into `scratchpad/verify-mbchs/raw/`, and re-ran `analyze.py` on a copy of `raw/`. `findings.json` reproduces exactly.

Struck list: `batches/2026-11-d/facts/buyers-relocating-myrtle-beach-vs-charleston-struck.json`, 18 entries. Each entry's struck wording fires it, and each approved wording fires none. `node tools/struck-check.test.js` passes.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 26: 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 15, 16, 17, 18, 19, 20, 21, 22, 28, 34, 36, 37, 38, 39 (with limits), 40 (keep off the page) |
| CORRECTED | 14: 8, 12, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 35, 41 |
| STRUCK | 1: 14 (plus parts of rows 29 and 41) |

## Every row

| # | Status | Finding |
|---|---|---|
| 1 | VERIFIED | Zillow metro file re-downloaded: "Myrtle Beach, SC", 2026-09-30, 339737.75. |
| 2 | VERIFIED | "Charleston, SC", 2026-09-30, 437474.19. |
| 3 | VERIFIED | 437,474 - 339,738 = 97,736; 22.3%. September 2016: 241,221 - 188,698 = 52,523. Site conflict stands: Zillow's July 2026 Myrtle Beach value now reads $339,406, so the $342,000 on pros-and-cons is an old vintage. The lead picks one figure for the site. |
| 4 | VERIFIED | B25077 re-pulled: 323600, MOE 8549. Universe: owner-occupied homes; owner estimates, not sale prices. |
| 5 | VERIFIED | 429100 / 9108; Charleston County 625400 / 22077. Census gap 105,500, so row 3 has a second source. |
| 6 | VERIFIED | 438,466 to 437,474 (-992); 337,789 to 339,738 (+1,949). |
| 7 | VERIFIED | B25035: 2003, 1999, 1996. Universe: all housing units, vacant and seasonal ones included. |
| 8 | CORRECTED | 12-43-220(c)(1) gives 4% to "the legal residence and not more than five acres contiguous thereto" occupied by the owner, and (c)(2)(ii): "This item does not apply unless the owner of the property or the owner's agent applies". The row leaves out the application. Safe: "A home the owner lives in as a legal residence, with up to five acres, is taxed on 4% of fair market value once the owner applies; the rule is the same in every county [S.C. Code 12-43-220(c)]." |
| 9 | VERIFIED | 1181 / 46. Owner-occupied homes. Not all of them are on the 4% ratio, because the owner must apply. |
| 10 | VERIFIED | 1932 / 71. |
| 11 | VERIFIED | 2306 / 94. |
| 12 | CORRECTED | Statute text matches. The summary is loose: 38-75-310(5)(d) names Edisto Island, Edingsville Beach, Kiawah, Botany Bay, Folly, Seabrook and Morris islands, plus "all areas north of the City of Charleston which are east of the west bank of the intracoastal waterway", and parts of James, Johns and Wadmalaw islands. Edisto Island is not a barrier island. Safe: "In Charleston County the coastal area takes in named islands, among them Kiawah, Seabrook, Folly, Morris and Edisto, the land north of the city east of the waterway's west bank, and parts of James, Johns and Wadmalaw islands [S.C. Code 38-75-310(5)(d)]." The Horry half is exact. |
| 13 | VERIFIED | At the primary: BEA MARPP_MSA_2008_2024.csv (apps.bea.gov/regional/zip/MARPP.zip), 2024: all items 93.642 and 100.962; housing 83.129 and 119.770. 93.642 / 100.962 = 0.927, about 7% lower. BEA's housing parity is built from rents. |
| 14 | STRUCK | `README-coli.md`: "A destination constant of 0.92 is applied to Myrtle Beach" (95.0 became 86.3). Charleston gets no constant. On a page that compares the two, part of the 86.3 vs 102.5 gap is our own constant. Do not print it. Link the calculator; print row 13. |
| 15 | VERIFIED | DP03_0004E (civilian employed, 16 and over): 448948; 185121. |
| 16 | VERIFIED | 93054 (±4,451); 71086 (±2,333). |
| 17 | VERIFIED | DP03_0092E, median earnings for workers: 51897; 40561. All workers with earnings, part-time included. |
| 18 | VERIFIED | Every share matches. "Professional and management" is Census's "professional, scientific, and management, and administrative and waste management services". |
| 19 | VERIFIED | 323,600 / 71,086 = 4.55; 429,100 / 93,054 = 4.61. |
| 20 | VERIFIED | S0801_C01_046E: 25.3 (±1.2); 29.7 (±1.0). Workers who did not work from home. |
| 21 | VERIFIED | 8.2 + 4.9 = 13.1; 10.8 + 10.8 = 21.6. |
| 22 | VERIFIED | 11.8; 15.6. |
| 23 | CORRECTED | Numbers match (asOfDate 2026-08-03). FEMA's own description: the ratio is "insured residential structures to total residential structures", counted from the National Structure Inventory, and "Private flood insurance take-up rates are not available to FEMA". A building is not a home: one condo building holds many homes. Safe: "FEMA estimates about 1 in 7 residential buildings in Horry County are covered by a federal (NFIP) flood policy [OpenFEMA, August 2026; private policies not counted]." |
| 24 | CORRECTED | As row 23: "about 1 in 3 residential buildings in Charleston County" (31.7%). |
| 25 | CORRECTED | 44,952 / 148,009 = 30.4% of residential buildings, not homes. Horry's gap is confirmed: 0 SFHA structures but 5,861 SFHA policies. Never print a Horry SFHA share from this file. |
| 26 | CORRECTED | Same counts in SCDES's own service, which feeds the S.C. Beach Guide (gis.des.sc.gov/beachaccess/; data at gis.des.sc.gov/gisserver/rest/services/BeachAccess/MapServer/0): Horry 362 "PUBLIC BEACH ACCESS" plus 15 untyped; Charleston 132 plus 4 "BEACH PARK". The ArcGIS copy is secondary. The records' LAST_UPDATE dates run from 2013 to 2022, so drop "2023". Safe: "Horry County has more than 360 public beach access points and Charleston County has 136 [SCDES S.C. Beach Guide map]." The reader link: https://gis.des.sc.gov/beachaccess/ |
| 27 | CORRECTED | The counts match. BEACH_AREA is a beach area, not a town: Garden City is unincorporated (16 of its 17 are run by Horry County), and 7 of Myrtle Beach's 143 are county-run. Say "by beach area". Kiawah's 1 is Beachwalker County Park. |
| 28 | VERIFIED | OSRM re-run: 98.1 mi, 137 min. From the geocoded City Hall point (33.6955, -78.8817), 98.4 mi and 138 min. "About 98 miles, about 2 hours 15 minutes" matches getting-around. |
| 29 | CORRECTED | The "Station 22" point (32.7609, -79.8434) is on Station 19 Street (reverse geocode). Station 22 Street measures 9.7 mi, 19 min, so "about 10 miles, 20 minutes" holds. Folly pier 11.8 mi, 22 min (the point is about 200 m from the pier). Isle of Palms County Park 13.4 mi, 25 min. The Myrtle Beach "half a mile" from City Hall to the sand is not measured: STRUCK until someone measures it. |
| 30 | CORRECTED | The values match, but station siting drives the gap. Charleston's airport is inland. The downtown harbor station, CHARLESTON CITY (USW00013782), has 24.5 days at 90 or more. Coast against coast, summer heat is the same. Safe: "About 21 days a year reach 90 degrees at the North Myrtle Beach airport and about 25 at downtown Charleston's harbor station; Charleston's inland airport gets about 64 [NOAA 1991-2020 normals]." |
| 31 | CORRECTED | The values match. Downtown Charleston station: July high 87.5 (the same as North Myrtle Beach's 87.6), January high 58.0, January low 43.6. Name the station in every figure. |
| 32 | CORRECTED | The values match. Downtown Charleston has 6.1 nights at or below freezing. The honest trade is a colder winter in Myrtle Beach, not a "cooler summer". Safe: "about 34 freezing nights a year at the North Myrtle Beach airport, about 22 at Charleston's inland airport and about 6 downtown". |
| 33 | CORRECTED | The conflict is resolved: the weather page prints 48.47 inches; "47 inches" was a substring match. Rain is not a difference: 44.26 downtown Charleston, 48.47 North Myrtle Beach, 52.51 Charleston airport. Safe: "Rain is about the same, 44 to 53 inches a year depending on the station." |
| 34 | VERIFIED | cbsa2025a.txt re-downloaded: 6418 and 5799. These are Census estimates. The file's "rep" columns show only 3,021 of Charleston's 5,799 were reported (2,778 imputed); Myrtle Beach reported 6,300. Myrtle Beach is ahead either way. |
| 35 | CORRECTED | 1,397,411 / 6,418 = $217,733 and 2,153,346 / 5,799 = $371,331 are right on the estimated totals. Reported permits alone average $468,969 in Charleston (1,416,751 / 3,021) and $214,233 in Myrtle Beach. Safe: "Construction value on a 2025 single-family permit averaged about $218,000 in the Myrtle Beach metro and at least $370,000 in the Charleston metro [Census BPS 2025; construction cost only, no land]." Never call it a price. |
| 36 | VERIFIED | 6,418 / 427,551 = 15.0 per 1,000; 5,799 / 889,263 = 6.5. Based on Census estimates. |
| 37 | VERIFIED | 427551; 889263 (2.08 times); Charleston County 436200. |
| 38 | VERIFIED | 1441 (±118); 1855 (±39). |
| 39 | VERIFIED with limits | stories.json traffic-timing, "usable-with-limits": "Not a direct quote ... Do not put it in quotation marks." The row puts "is not very bad" in quotation marks. Its teller is named in the bank; never name him in copy. It is about the Grand Strand only. It is already on getting-around, pros-and-cons and which-town. |
| 40 | VERIFIED | Re-pulled: Charleston 7 and 7, Springmaid 9 and 6 (minor counts, 2024 and 2025). 2023 was 19 and 13. Keep it off the page as a difference, as the researcher says. |
| 41 | CORRECTED | The source was a sibling page (secondary). The primary is va.gov's Myrtle Beach VA Clinic page: "Our outpatient clinic offers primary care and specialty health services, including mental health services, radiology, and more", 1800 Airpark Drive. VA Charleston's main location is 109 Bee Street. "Nearest" depends on where you start. From Myrtle Beach City Hall, Ralph H. Johnson is 97.9 mi and 136 min, and Fayetteville VAMC is 126.9 mi and 161 min. From North Myrtle Beach (106.6 vs 111.4 mi) and Little River (106.0 vs 118.9 mi), Fayetteville is nearer. Safe: "The Myrtle Beach VA Clinic is an outpatient clinic in the VA Charleston system. That system's medical center, the Ralph H. Johnson VA Medical Center, is in Charleston [va.gov]." "Some specialist care means a drive to Charleston" has no source here, and the VA clinic does offer some specialty care: STRUCK. |

## Not to publish

- Row 14, our cost index's 86.3 against 102.5, as a comparison.
- Row 40 as a flood difference.
- Any Horry flood-zone share from the FEMA file (row 25).
- The Myrtle Beach "half a mile to the sand" (row 29) until measured.
- "Charleston is hotter" or "Myrtle Beach has a cooler summer" from airport normals (rows 30 to 32).
- "Some specialist care means a drive to Charleston" (row 41).

## For the lead

- `facts/registry.json` typical-home-value: Zillow has revised July 2026 to $339,406. The $342,000 on pros-and-cons and the from-state pages is an old download.
- The chart writer should know that `findings.json` permits figures are Census estimates that include imputed permits (row 34).


## Fixer rows, independent check

- Row 42: VERIFIED. City news 2026-09-09 (live and raw agree): "Dogs and bicycles are permitted on the beach and Myrtle Beach Boardwalk at any time. Dogs must be leashed ... return May 1, 2027." Spec 293 and 312 say no more.
- Row 43: VERIFIED. City news R986 (raw): "a total of 1.3 miles in length". Spec 312 "about 1.3 miles".
- Row 44: VERIFIED. NPS live: Confederacy fired on Fort Sumter April 12, 1861 opening the Civil War; ferries leave from Fort Sumter Visitor Center in downtown Charleston (and Patriots Point). Spec 294 and 361 say "ferries leave downtown".
- Row 45: VERIFIED. NPS: palmetto log fort defeated Royal Navy in 1776; Fort Moultrie address 1214 Middle St, Sullivan's Island. Spec 315 says "On Sullivan's Island", not "on the beach".
- Row 46: VERIFIED. FAA xlsx (raw; FAA site not re-opened): CHS 3,142,402 hub M; MYR 1,743,132 hub S; ratio 1.803. Spec 356 rounding 3.1 and 1.7 million; 1.8 times in line 246.
- Row 47: VERIFIED. MUSC About page (live and raw): "the state's only comprehensive academic health system"; Hollings: "the only one in SC". NCI's cancer center list shows one SC center, Hollings. Advisory: MUSC says "comprehensive"; spec 247 and 358 say "full", and 247's card title says "A major teaching hospital" ("major" is not in the source). Safe: use "comprehensive" and drop "major".
