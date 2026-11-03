# Verification: /submarkets/surfside-beach/ (batch 2026-11-a)

Independent verifier, 2026-11-03. I did not research these facts. Ledger: `facts.md` (status and note columns updated in place; the researcher's notes are kept after "Researcher note:"). Struck list: `submarkets-surfside-beach-struck.json` (12 entries; each fires on its struck wording and no approved wording fires; `node tools/struck-check.test.js` prints "all controls pass"; the current live page has none of the struck wording).

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 4, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 20, 22, 23, 24, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44 | 32 |
| CORRECTED | 1 (source only), 2, 3, 5, 13, 15, 19, 21, 25, 27, 41, 43 | 12 |
| STRUCK | none as a whole row (half of row 41 is struck) | 0 |

A CORRECTED row may be used only in the wording after "Use:" in its note.

## How I checked

- Re-ran `analyze.py`, `analyze_fema.py` and `analyze_beach.py` on the researcher's raw files into my own folder: `findings.json`, `nfip-findings.json` and `beach-distance.json` came out identical.
- Checked the county pull live: layer 24 with TaxDistrict '660' (the town), LandUseCode 1xx and a building returns 4,045, the same count as the town-limits method. Four sample parcels show AssessedProp / TaxableProp at exactly 0.04 or 0.06.
- Re-pulled from OpenFEMA: the two block-group medians (301 policies, $1,256; 64 policies, $702.50) and the CRS classes on 2026 policies (town 7, county 5).
- Re-pulled Census 2010, 2020 and ACS 2020-2024 from data.census.gov: every value matches. TIGERweb land area 1.91 sq mi matches the county-polygon figure.
- Re-ran all 12 OSRM drives (identical) and reverse-geocoded each end point.
- Recounted the CRM listings from the raw pull with my own code (77 in town, 154 outside, group medians identical).
- Re-queried the Ocean Lakes county records live (956, 949, 319, $248,462.50; parent parcel 241.67 acres).
- Opened every town page and PDF in the ledger today and read the quoted text: /200, /201, /202, /203, /207, /212, /261, /31, /320, /363, /181, /245, DocumentCenter 148, 152, 173, 188, 392, 3026, 4933, and the 8/26/2025 council minutes. Also the 2026 levy PDF, S.C. Code Titles 12 (ch. 37, 43) and 56 (ch. 2), SCDOR ST-575, the Horry County Treasurer hospitality page, the Ocean Lakes lease page, the SC Hurricane Plan 2026 Annex C and Horry County's Know Your Zone page, and `data/str-market.json` against the saved AirROI page.
- Blocked: Municode (library.municode.com does not resolve here; api.municode.com returns a Cloudflare 403). For row 1, I rely on the codified text read on Municode by the 2026-10-15 verifier (job 483491) and today's Zoneomics copy, which match.

## Corrections

| Row | What was wrong | Use instead | Source |
|---|---|---|---|
| 1 | Source only. Zoneomics is a secondary copy of the code. | Claim stands. Cite Town Code Sec. 17-396.10 and the use table 17-395 (Municode job 483491, read 2026-10-15). No ordinance adopted since codification amends 17-396.10. | `2026-10-b/facts/r14/nohoa-verify-v7.md`; town /245 |
| 2 | "Lots as small as 3,600 square feet." R3's smallest lot is 3,000 (attached house). | R3 allows buildings up to 55 feet, and a detached house on a lot of 3,600 square feet (3,000 for an attached house). | District Regulations sheet (2/8/22); Code 17-328 |
| 3 | "One band from the north town line to the south town line"; "commercial strip on US 17." The C4 district at the pier reaches the beach and breaks the band; PD, PL and MP lots sit among R1 and R2; the strip is on US 17 Business. | R3 and C3 run along the ocean the length of the town, broken at the pier by the C4 district; R1 and R2 cover most of the streets between them and the commercial strip on US 17 Business. | Town zoning map (DocumentCenter 3026, 05/23/2022) |
| 5 | "Someone's main home"; "out-of-state owner home." A 6 percent home can be a tenant's main home; OwnerState is where the tax bill goes. | In R3 about 1 home in 8 is taxed as its owner's main home (12.9 percent). Of tax bills mailed outside South Carolina, North Carolina has the most (428), then Virginia (129), Pennsylvania (124) and New York (123). | County GIS layer 24 |
| 13 | Left out the appraisal option and the floor condition. | If repairs or improvements to a building whose lowest floor is below the 100-year flood level cost 48 percent or more of its value, the whole building must be raised to that level plus 3 feet. The town uses the assessor's building value, land excluded, unless the owner submits a licensed appraisal. | Town DocumentCenter 392 and 173 |
| 15 | "The block group nearest the ocean." Two block groups reach the ocean (512012 and 512021). | In the census block group from the south town line to the pier, where two in three town homes are R3 or C3, a single-family flood policy costs a middle $1,256 a year; in an inland block group where 9 in 10 are R1 or R2, $702. | OpenFEMA NfipPolicies v3; Census 2020 block groups |
| 19 | "The council debate was over running carts 24 hours a day"; "under the 2025 state law." The minutes record public speakers on a 24-hour rule, not the council's debate, and do not name the state law. | The town council passed golf cart Ordinance 25-0990 on August 26, 2025, by 5 votes to 2; speakers at the meeting argued for and against a 24-hour rule. A cart driven at night must have working headlights and taillights. No hours. | Council minutes 8/26/2025; S.C. Code 56-2-90(C)(2) |
| 21 | "Lent by the town police." | Beach wheelchairs are available through the town police department. | Town /200 |
| 25 | Personal names (Tillman, Holiday, Flora, Floramay) and "the land was the Ark Plantation." Same fix as 2026-10-b row F13 (lesson B30). | Surfside Beach is its own town in Horry County, incorporated in 1964. Much of its land was once the Ark Plantation; the beach was later Roach's Beach, then Floral Beach, and took the name Surfside Beach in 1952. | Town /207, /363 |
| 27 | "Ocean Lakes gate." The route ends in the middle of the campground. | Ocean Lakes Family Campground 7 minutes. The other 11 drives stand. | OSRM; Nominatim |
| 41 | "Everything east of Highway 17 is Zone A and everything west is Zone B." The town's /261 page rests on the 2012 study. The 2026 state plan puts part of the town east of US 17 Business in Zone B and names no town land west of it. | Near the ocean the town is in hurricane evacuation Zone A; part of it east of US 17 Business, from 16th Avenue North to Vista Drive, is in Zone B. The zone goes by address. | SC Hurricane Plan Annex C (May 2026); Horry County Know Your Zone |
| 43 | "The typical inland house ... about $2,050 a year." The middle R1 owner at 4 percent pays about $1,420: median taxable value $337,402 against market $507,224 (15 percent cap). | A buyer of an inland R1 house the county values at about $488,000 pays about $2,050 a year in town and county tax as a main home, before credits; with the middle inland flood policy, if you insure for flood, about $2,750. Owners who bought years ago often pay less because of the cap. | County GIS layer 24; rows 9, 10, 15 |

## Limits the writer must keep (verified rows)

- Row 11 and 44: the tax figures hold when the county's taxable value equals the price paid, which happens at a sale. Say "before credits and the 15 percent cap".
- Row 18: the DMV decal is replaced every five years or when the owner moves. With no town ordinance, a cart may cross a faster road at an intersection.
- Row 24: the town limits watercraft launching to 4th Avenue South; it does not say "small" boats.
- Row 32: 36 of 42 houses have no HOA fee; the other 6 are unknown, not proven to have one.
- Row 36: cite the Horry County Treasurer page for the county's 1.5 percent inside towns, not the town's 2009 FAQ.
- Row 37 and 38: AirROI's area is not the town limits. The July and January figures are two-year monthly averages.
- Row 39 and 42: the median age and the median year built are ACS 2020-2024 estimates, not Census Day counts.

## Photo candidates (PLAN.md)

| Candidate | Licence check | Result |
|---|---|---|
| NOAA Emergency Response Imagery, 2026_Pre_Event/EC2601a_OB_N_RGB | Opened the S3 index. Nine tiles cover the town (EC2601a_OB_N_C0785700w333645n to C0790000w333600n; names are degrees, minutes, seconds). The flight EO files put every photo centre over Surfside in the day-012 flight: January 12, 2026. NOAA work, U.S. Government, public domain. | OK. Crop from these tiles; label the pier and any street from county layer 18 coordinates. |
| "Surfside Beach Shoreline", BullDawg2021, Commons | File page metadata (Commons API): CC BY-SA 4.0, "Own work", taken 2023-07-16, 4032 x 3024, no restrictions. Matches the record in `data/photos.json`. | Licence OK. I could not view the image (Commons 429; the site copy is an LFS pointer). The writer must look at it full size before captioning it "houses behind the dunes". |
| USGS coastal oblique photos, 2011, doi 10.5066/F7N877XX | Checked by the invest-where-to-buy verifier (2026-11-a): USGS work, public domain. | OK. Caption with 2011; it shows the old wooden pier. |

## Not to publish

- Golf cart hours under Ord. 25-0990 (Not verified 3).
- Any statement that monthly rentals of 30 to 364 days are allowed or barred in R1 or R2 (Not verified 1).
- The town's /261 evacuation wording (row 41) and the town's /214 golf cart FAQ, both out of date.
