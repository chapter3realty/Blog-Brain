# Verification: /sell/home-value/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did not research these facts. I opened every source myself, reran every data script and checked the numbers with my own code. Ledger: `facts.md` (status and note columns updated). Struck list: `../facts/sell-home-value-struck.json`, with a copy in this folder so the checkpoint saves it (22 entries; each fires on its struck text, and no approved wording fires any entry or the distance-word list). My working files: `wf2/sell-home-value/verify/` in the scratch folder.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 2, 3, 4, 7, 10, 14, 22, 23 | 8 |
| CORRECTED | 1, 5, 6, 8, 9, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21 | 15 |
| STRUCK | none | 0 |

Every number in the ledger reproduced. Most corrections are to wording: a missing condition, a reason the source does not give, or a distance word.

## How the data rows were checked

- Reran `analyze.py` on the researcher's raw pull into my own folder. All 15 blocks of `findings.json` are identical, and so is the private worked-example file.
- Recounted rows 2 and 4 without the script: the same counts, medians and quartiles.
- Re-ran the layer 24 statistics live (rows 14 and 15): `cap_by_tenure.py` gives the same eight bands; the parcel count, 227,000, is confirmed by a second count-only query.
- Re-pulled the CRM listings live (row 17): 6,455 in Horry, and every band median within $1,000 of the ledger.
- Tested 23 sale points live against FEMA's National Flood Hazard Layer (row 18): 23 of 23 agree with the county flood layer.
- Re-downloaded the FHFA CSV, the Redfin page, the county guide and six SC Code chapters live. The code chapters and the guide are byte-identical to the saved copies.

## Corrections

| Row | What was wrong | Use instead | Source |
|---|---|---|---|
| 1 | "Houses, townhomes and other homes on their own lot." 73 of the 6,866 are condo-hotel units coded 108 (Yachtsman, Atalaya Towers). | 4,181 condos and 6,866 other homes, mostly houses [deeds Oct 2025 to Sep 2026]. The house median moves only from $350,000 to $353,000 without them. | parcels-values.json, deed legal descriptions |
| 5 | "Barely moved" is a judgment; the house median ranged over 10 percent. | Houses stayed between about $333,000 and $368,000, condos between about $197,000 and $225,000; a monthly median moves with the mix. | findings.json by_month |
| 6 | The 52 percent (mid-2021 to mid-2026) includes the latest year, so "after rising 52 percent in the five years before" is wrong. The one-year +0.8 percent (3.1 points) is under the file's own standard error (8.18), so "rose" overstates. | The index for Horry County rose about 51 percent from mid-2021 to mid-2025. In the year to mid-2026 it was about flat (up 0.8 percent, less than the index's margin). Single-family houses with Fannie Mae or Freddie Mac loans, not condos [FHFA HPI AT, CBSA 34820, 2026Q2]. | fhfa.gov hpi_at_metro.csv; CBSA 34820 = Horry County only (Census list1_2023) |
| 8 | "Because the estimate can see the list price" is not in the source. Redfin says "because there is more data available about those homes". "Online estimates miss here too" applies Redfin's figures to all estimates. | For Horry County homes not for sale, Redfin's own figures: half of its estimates were more than 6.6 percent from the later price; 4 in 10 within 5 percent; about 1 in 7 off by more than 20 percent. Listed homes: 1.65 percent [Redfin, data dated 2026-10-31]. | redfin.com/redfin-estimate (classic = 7.57% off-market, lavm = 1.92% for sale, matched at the global level) |
| 9 | "$35,000 on a $350,000 house" uses the all-homes 10 percent; for houses it is 8.8 percent. The ledger preface repeats it. | On a $350,000 house, the county value's middle miss for houses, 9 percent, is about $31,000. | findings.json methods_test.house |
| 11 | "Every four years" is wrong (2019 to 2024 is five). The guide page is in the future tense. | Horry County's latest revaluation took effect for tax year 2024; the one before was 2019. State law requires one every fifth year. | SC Code 12-43-217(A); horrycountysc.gov news, 10/7/2024: "This bill is the first at the property's new value since the 2024 reassessment." |
| 12 | "The limit does not apply that year." The new value is first taxed the next year (3140(E)). Some deeds are excluded (3150(B)). | A sale resets the value as of December 31 of the year of sale. That value is first taxed the next year, and the 15 percent limit does not hold it down. | SC Code 12-37-3140(A)(1)(b), (B), (E); 12-37-3150 |
| 13 | The improvements carve-out in the same subsection is missing. | No more than 15 percent in five years between sales. The value of an addition or improvement is added on top. | SC Code 12-37-3140(B) |
| 15 | The bands use the county's SaleDate, the date of the last recorded deed, which includes deeds that are not sales. 2025 sales from the deed pull sit at 1.00, but the 2025 SaleDate band is 0.947. "Or what the buyer will pay" is not in the data. | "The longer since a home's last deed on the county record ..." with the same five figures. "So the taxable value on a seller's bill is often far below the county's own market value." | Live layer 24 statistics; own check of 3,807 parcels |
| 16 | "Taxed on 4 percent": the law says assessed, and only after the owner applies (12-43-220(c)(2)(ii)). "A buyer prices in their own bill" has no source. | A home its owner lives in is assessed at 4 percent once the owner applies and qualifies; a second home or rental at 6 percent. Cut the buyer sentence. | SC Code 12-43-220(c), (e) |
| 17 | "First row", "about a block" and "doubles" are not what was measured. The band is under 161 m, straight line, to the Census ocean polygon. Houses are 2.5x, not 2x. | Condos within 0.1 mile of the ocean ask $322 a square foot; 0.1 to 0.5 mile $270; 0.5 to 2 miles $204; over 2 miles $168. Houses $501, $364, $278, $198. | Live re-pull, 2026-11-01 |
| 18 | 13.4 percent is about 1 in 7.5. "Usually because the high-risk lots are on the water" was not tested. | About 13 percent of resales (1 in 4 condos, 1 in 15 houses). In 14 subdivisions, houses inside the line sold for a middle price about 12 percent above the other sales in the same subdivision (52 sales). No reason given. | Rerun; FEMA NFHL spot test 23 of 23 |
| 19 | The law says "must disclose", not "in writing". "Cannot be used to get a mortgage" overstates "federally related transaction". | An agent may give a value if it is not called an appraisal, and must give the exact sentence. | SC Code 40-60-30(1), as rewritten by 2024 Act No. 196 |
| 20 | "Only a licensed appraiser may do one" leaves out the section's four exceptions, the agent's valuation among them. | Appraisal work and the title of appraiser need an appraiser's license. An agent may give a valuation only if it is not called an appraisal. | SC Code 40-60-30 |
| 21 | The CFPB page is a 2020 consumer summary. The rule says three business days, whichever is earlier, and the buyer may waive the timing. | Free copy as soon as it is done, or three business days before closing if sooner, unless the buyer agrees in advance to get it at closing. | 12 CFR 1002.14(a)(1), eCFR |

## Notes on verified rows the writer must keep

- Row 2: call the 6,866 "houses and other homes" (row 1).
- Row 3: keep the limit that the condo cells use the 68 percent of condo resales that could be placed. Garden City and Murrells Inlet are Horry deeds only.
- Row 7: say "the county's value", not "the 2024 reassessment value". For a home that changed hands in 2024 or 2025, the county value is that sale's value. Houses: 59.6 percent sold above it, so "6 in 10" is right.
- Row 10: all seven homes are land use 101 houses in the Carolina Forest CDP. Print no subdivision, street or month.
- Row 14: only 26 parcels differ by exactly $50,000, so the taxable value is not net of the homestead exemption.
- Row 22: a written request to meet the assessor counts as the objection.
- Stale dates: row 6 goes stale at FHFA's 2026Q3 release (late November 2026). Rows 8 and 17 go stale 2026-12.

## Photo candidates (PLAN.md)

| Candidate | Licence on the file page | What it shows at full size | Verdict |
|---|---|---|---|
| 1. File:Myrtle_Beach,_South_Carolina,_Thanksgiving_2018.jpg | CC BY-SA 4.0 ({{self}}), own work by 28bytes, 2018-11-22. Matches data/photos.json. | Wide beach, dunes, a dune walkway and the ocean from a high floor; a few people far off. | Licence OK. Credit "28bytes, CC BY-SA 4.0". The planned caption "What a first-row condo sells" is not supported. Neither the file page nor the image names the building. Every county parcel within 120 m of the file's camera point (33.67775, -78.895019) is on Yaupon Circle and carries a commercial land use code (300 to 326), not 107 (condo). Condo units can lack a parcel shape, so this does not prove the building is not a condo, but nothing shows that it is. Caption: "The beach in Myrtle Beach from a high floor of an oceanfront building." Only the 600w, 1200w and crop files are in the working copy; the base .webp named in the record is not. |
| 2. File:Intracoastal_Waterway_in_North_Myrtle_Beach.jpg | CC BY-SA 4.0, own work by DiscoA340, 2022-12-31, 6000 x 4000, no coordinates. Matches data/photos.json. | About two thirds of the frame is gray sky. The bottom third shows the waterway between houses with docks, seen from a bridge, with a bridge structure in the foreground. | Licence OK. Credit "DiscoA340, CC BY-SA 4.0". The file page description says "in Horry County"; only the title says North Myrtle Beach. Caption "homes and docks on the Intracoastal Waterway in Horry County" is safe. Crop to the bottom third. The image file is not in the working copy at all; fetch it from Commons and run tools/photos.js. |
| 3. USGS 2011 oblique, Crescent Beach (doi 10.5066/F7N877XX) | Public domain (USGS), per the record in data/2026-10-b/photos.json, with the metadata use constraint quoted. | Beach and surf in front, a row of oceanfront buildings (one tall tower), then streets of houses among trees. Matches its record. | Licence OK. Fits the per-foot section without the word "first row" in the caption; say "oceanfront buildings and the streets behind them, 2011". |

## Should not be published at all

- "Usually because the high-risk lots are the ones on the water" (row 18): not tested.
- "A buyer prices in their own bill" (row 16): no source.
- Any caption calling photo 1 the view from a condo.
- Applying Redfin's error figures to "online estimates" in general (row 8).
