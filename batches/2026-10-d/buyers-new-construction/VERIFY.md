# Verification: /buyers/new-construction/ fact ledger

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did none of the research. I opened every source myself, re-ran every data script, and redid every sum. The ledger's status and note columns are updated in place (`facts.md`). The struck list is `batches/2026-10-d/facts/buyers-new-construction-struck.json`.

## Counts

| Status | Count | Rows |
|---|---|---|
| verified | 18 | 1, 2, 4, 5, 6, 8, 11, 12, 14, 16, 17, 18, 19, 20, 21, 26, 27, 29 |
| corrected | 14 | 3, 7, 9, 10, 13, 15, 22, 23, 24, 25, 28, 30, 31, 32 |
| struck | 0 | |

A corrected row may be used only in the verifier's wording in its note. Rows 16 and 21 are verified for the law and the source; their "we look up" and "we line them up" service claims stay pending owner questions O6 and O3.

## What I re-ran

- `build_listings.py`, `build_deeds.py`, `make_charts.py` on a copy of the raw files: byte-identical output to the researcher's files.
- `fetch_flood.py` (fresh read of county layer 19) then `build_flood.py`: same 52 of 1,006, 34 of 664, 248 of 3,014.
- Live checks: the map API (house 3,743; new house 1,265; new townhouse 131; quick move-in 570; still being built 695; the two flags never overlap). The year filter: three 2016-2023 pins open to listing pages that show year built 2017, 2021 and 2022. AcclaimWeb: the week 10/1 to 10/7/2025 returns 557 deeds, same as the pull. Parcel layer 24: six sampled parcels match `raw/parcels.json` field for field.
- Census SOC xlsx downloaded again: byte-identical to the raw copy.

## Every correction

1. **Row 3.** Numbers right. 0.23 acre is "just under a quarter acre", not "about a quarter acre".
2. **Row 7.** "New lots are not smaller" is too strong. In Myrtle Beach addresses the new lot is 0.17 acre against 0.18. Use the same-town figures (Conway 0.23 and 0.22, Longs 0.19 and 0.17, Myrtle Beach 0.17 and 0.18). Drop the countywide 0.23 against 0.19, because it mixes inland and beach.
3. **Row 9. A script bug.** The builder pattern in `build_deeds.py` matched people as well as companies: grantors with the surname Horton or Mungo, and a given name "Lennart", matched HORTON, MUNGO and LENNAR. Three such deeds were counted as builder sales. A rerun with company names only (`verify_build_deeds.py`, writing `findings-deeds-verified.json`, both new in the data folder) gives **5,108** builder sales of 17,881 (still 28.6%), not 5,111.
4. **Row 10.** D.R. Horton is **1,417**, not 1,420. The top five are 3,606 of 5,108, still 70.6%. NVR's own site says "NVR, Inc is the parent company of Ryan Homes, NVHomes, and Heartland Homes". Write "NVR (the parent company of Ryan Homes)", not "which sells as Ryan Homes", because a deed does not show which NVR brand built the house.
5. **Row 13.** 15-3-640 is right, but the carve-out is missing. 15-3-670: the limit is "not available as a defense to a person guilty of fraud, gross negligence, or recklessness". Use: "For most defect claims, South Carolina sets an outer limit of eight years after the house is substantially complete; the limit does not protect a builder guilty of fraud, gross negligence or recklessness."
6. **Row 15.** StrucSure is a warranty company describing its own product. It does not show what builders here use. The primary source is D.R. Horton's Form 10-K for the year ended 2025-09-30: "We typically provide our homebuyers with a ten-year limited warranty for major defects in structural elements such as framing components and foundation systems, a two-year limited warranty on major mechanical systems and a one-year limited warranty on other construction components." D.R. Horton recorded the most builder sales here (row 10). Other builders differ. Lennar's 10-K gives "a minimum period of one year". Pulte's 10-K gives "a one-year comprehensive limited warranty" and other coverage "for periods of up to (and in limited instances exceeding) 10 years". Use: "The builder with the most sales here gives 1 year on most of the house, 2 years on major mechanical systems and 10 years on major structure. Other builders differ. The written warranty sets the terms."
7. **Row 22.** "which is how a new house gets onto the tax roll" goes beyond 12-43-240. Use: "The county must send the assessor a copy of each building permit within 10 days, so the assessor knows a house is being built."
8. **Row 23.** 12-37-140 is the 2017 NC/SC boundary section. Better primary: 12-37-610(A), under which the owner as of "December thirty-first of the year preceding the tax year" owes the tax. I also found 12-37-220(B)(51). A builder's finished detached house that is still unsold is exempt "through the earlier of: (a) the property tax year in which the home is sold or otherwise occupied", if the builder files an affidavit. Use: "A South Carolina tax year looks back to December 31 of the year before. A house finished after that date, or still unsold in the builder's hands, is usually not in that year's bill." Do not state "fixed on what stood on the land" as law.
9. **Row 24.** After the row 9 fix: **3,093 of 3,825** (81%) for January to September 2026, and **0 of 1,283** for October to December 2025. Three months change: 2025-11 405/0, 2025-12 479/0, 2026-09 456/435. `chart-tax-lag.json` needs a rebuild from the verified findings. The headline is too strong, because 19% of 2026 builder sales already had a building value. Use: "For about 4 in 5 homes builders sold in 2026, the county record still shows the lot only, so the 2026 bill is on the lot."
10. **Row 25.** n is **1,282**, not 1,284. The median of 0.998 and the middle half of 0.985 to 1.016 do not change.
11. **Row 28.** The quotes are right, but the row leaves out the clause written for new houses. 12 CFR 1024.17(c)(7): "In cases of unassessed new construction, the servicer may base an estimate on the assessment of comparable residential property in the market area." Under (f)(3), a shortage of one month's payment or more may be left in place or spread "over at least a 12-month period", and a smaller one may be due "within 30 days". Use: "A lender may set the tax part of the escrow from the current bill, last year's bill, or the taxes on similar homes. The yearly escrow review finds any shortage, and a large one may be spread over at least 12 months."
12. **Row 30. An old year.** ACS 2025 1-year is out. data.census.gov ACSDT1Y2025.B25034, Horry County, is saved as `raw/acs-ACSDT1Y2025.B25034.json`. Total 237,850. Built 2020 or later: 36,932 (MOE 4,459), or 15.5%. Since 2010: 83,085, or 34.9%. Use: "About 15 in 100 homes in Horry County were built in 2020 or later, and about 1 in 3 since 2010." The base is all housing units, not houses alone.
13. **Row 31.** **4,421 of 5,108** (86.5%, which still rounds to 87). NC is 125.
14. **Row 32.** 1,102 at 4%, **900** at 6%, 13 other. This row is data only.

## Notes on verified rows the writer must keep

- Row 4: write "addresses in". "Myrtle Beach" addresses include inland Carolina Forest.
- Row 12: the Act does not apply to claims for personal injury or death (40-59-860(A)).
- Row 18: the rule binds REALTORS and MLS participants. It is not a state law.
- Row 26: all four figures recompute from the 2026 levy (201.0 mills; school operating 109.1, which a legal residence does not pay, per 12-37-220(B)(47)). The county carries a bare lot at 6% (live sample: $65,000 land, $3,900 assessed). The $290 lot figure therefore holds only after the owner applies for 4% (row 27).

## Not to publish

- The live page still has three unsourced lines, all in the struck list: "Construction defect complaints have been rising" (twice), "roughly sixty defect lawsuits ... against a single national builder", and "South Carolina has no statutory new-home warranty". `node tools/struck-check.js batches/2026-10-d/facts/buyers-new-construction-struck.json <page>` finds all four sentences on the current page. The rewrite must clear them.
- Row 31 (owner mailing state) and row 32 stay off the page, as the researcher proposed.

## A privacy issue in the data folder (for the lead)

`raw/deeds-slim.json` is supposed to blank every person's name. It still holds about 14 private grantor names, because they matched the builder pattern: people surnamed Horton and Mungo, and one given name "Lennart". The file goes to GitHub with the checkpoint. The researcher, or the lead, should re-run `slim_deeds.py` with the company-only pattern from `verify_build_deeds.py`. As verifier I may add files but not edit this one.

## Photos (PLAN.md candidates)

I read both Commons file pages myself. The Commons API was rate-limited, so I read the HTML file pages.

1. **"New construction framing and sheathing underway.jpg"**, by Kgacs. Own work, dated 10 February 2020. **CC BY-SA 4.0** (licence verified). 1,952 x 1,464. The description says it is a house on Gayland Rd in Needham, Massachusetts. **Not viewed at full size:** the Wikimedia upload server returned an error page to every download, and I did not work around it. The writer must view it at full size before using it. Caption it as framing in general, and never as a local place.
2. **"Wood-framed house.jpg"**, by Jaksmata. Own work, a house under construction in Katy, Texas (EXIF 2001-11-29). **GFDL 1.2+ and CC BY-SA 3.0** (licence verified). 1,083 x 546. **Viewed at full size.** It shows a two-story wood frame with roof trusses and no sheathing. No wiring or plumbing is visible, so it shows the early framing stage, not the pre-drywall inspection. Two workers stand small on the frame; they are not the subject. A cut-off, unreadable sign sits at the bottom edge, right of center. Crop about 30 px off the bottom if this photo is used. Accurate caption: "A wood-framed house before sheathing."

Neither photo shows the pre-drywall stage with wiring and plumbing. The shot list for the photo partner (item 1 in PLAN.md) is still the right fix.
