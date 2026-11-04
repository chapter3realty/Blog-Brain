# Verification: /hoa/tax-deductible/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did none of the research. Ledger: `facts.md` (status column updated in place). Struck list: `hoa-tax-deductible-struck.json` (12 entries; every struck sentence fires its entry, and no approved wording fires).

## Counts

35 rows: **25 VERIFIED, 9 CORRECTED, 1 STRUCK.**

| Status | Rows |
|---|---|
| VERIFIED | 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 24, 26, 27, 28, 29, 30, 31, 33, 34, 35 |
| CORRECTED | 1, 7, 11, 16, 21, 22, 23, 25, 32 |
| STRUCK | 20 |

## What I opened and re-ran

- IRS Pub. 527, 530, 523 and 587 (all "(2025)"), the 2025 Instructions for Form 8829 and for Schedule E, and the 2025 Schedule E PDF, fetched from irs.gov today. Every quote in the ledger is on the live page, word for word.
- S.C. Code Title 12 Chapters 6, 37 and 43 and Title 27 Chapter 31, from scstatehouse.gov today. Also 2026 Act No. 110 (H.4216) and the status of H.5167 and H.5178. Copies of the new sources are in the website's `data/2026-11-a/hoa-tax-deductible/raw/sources/`: `act110-2026-h4216.txt` and `t12c037.txt`.
- `build_findings.py` re-run on a copy with the RAW parcel file. All four output files are byte-identical.
- `pull_includes.py` re-run on a copy. The counts moved by a few listings, and every rounded figure holds.
- The county median dues, the oceanfront median, the eight ZIP medians and the rental flags, queried live from the CRM map API.
- The three 2026 Treasurer bills, pulled again live with `bill.py`. Each total matches. Each PIN is the median unit of its group in the parcel file.
- Parcel counts (4 percent share, by area, mailing state) counted again from the RAW file.

## Corrections

1. **Row 1 (geography).** The IRS part is exact. The dues-include figures are for Horry County condos for sale, not the Grand Strand. Use: "The IRS lists them with homeowners insurance, utilities and internet service, and most Horry County condos for sale say their dues include those."
2. **Row 7 (worked example).** "A little less in the first year" is wrong under the mid-month convention: if the work is placed in service in December, the first year is half a month, about $15. The last year is also partial. Depreciation starts when the roof is in service, not when the assessment is paid. Use: "about $364 a year in each full year, less in the first and last years, over 27.5 years from when the new roof is in service."
3. **Row 11 (carve-out dropped).** A family member's day is not personal use if that person rents the unit at a fair price as their main home. The family list also includes half siblings and every generation up and down the line. The safe wording is in the row's note.
4. **Row 16.** P527 does not say "every day of the year counts toward the rental side". What it says is that a unit held for rent is deductible while vacant, and not while it is listed for sale without being held out for rent. Use: "If you never use it yourself, nothing is split: all of the dues are a rental expense, including months it sits empty while you hold it out for rent."
5. **Row 21 (a 2026 law the researcher missed).** 2026 Act No. 110 was approved 3/30/2026 and applies to tax years after 2025. It adds S.C. Code 12-6-50(21): South Carolina no longer adopts the federal standard or itemized deductions, and has its own SC Income Adjusted Deduction instead. The rules on dues, rental days and depreciation are still adopted. The IRC conformity date is still December 31, 2024, because the 2026 bills are still in committee. Use: "South Carolina starts from the federal figures, so the same rules on dues, rental days and depreciation apply on the state return. From 2026, South Carolina does not use the federal itemized deductions." Proposed registry rows 4 and 5 are in `PROPOSED.md`.
6. **Row 22.** The counts reproduce exactly: 8,797 of 40,963; 1,052 of 11,880 in the city; 1,938 of 11,674 in district 550. The headline "on the Grand Strand the rental answer is the common one" is not supported. The count is for the county, and the 6 percent group includes second homes that are never rented and owners who never applied. Drop the headline and keep the body's invest-condos wording. The PLAN photo caption ("the rest are taxed as rentals or second homes") has the wording invest-condos already struck, so use the full group.
7. **Row 23.** The 57.7 percent counts units, not owners. Use: "About 6 in 10 Horry County condo units have their tax bill mailed to an address outside South Carolina."
8. **Row 25.** The 72-day safe harbor also needs the owner's certificate and "otherwise eligible". The source does not say "should expect the county to see it". Use: "A legal residence keeps the 4 percent rate only while the owner still qualifies and rents it no more than 72 days in a calendar year. The assessor may ask for the owner's Schedule E." It agrees with /buyers/property-taxes/ (72).
9. **Row 32.** The ratios are right: 11.2, 3.8 and 2.5. Four fixes:
   - "Typical" joins two different groups. Name both in the chart note.
   - "The dues you cannot deduct are many times the tax you can" is true only for the legal-residence case. On a rental, both the dues and the tax are rental expenses.
   - Do not say "taxed as a rental" for the 6 percent rate.
   - "If you itemize" applies to the federal return only from 2026 (row 21).

   The safe wording is in the row's note.

## Struck

- **Row 20 (dues on Form 8829, line 22).** Neither Pub. 587 nor the Form 8829 instructions name association dues. The answer rests on two inferences that no source states. The FAQ gives row 19 only: an employee gets no home office deduction, and a self-employed owner who qualifies splits the whole-home costs by the business share.

## Notes the writer must keep (verified rows)

- **Row 3:** for a rented house in an HOA, call the dues a cost of renting under the general rule (P527 ch. 1). Never say the IRS names HOA dues for houses.
- **Row 8:** the basis rule names condominium association assessments only. Do not extend it to an HOA house.
- **Row 17:** "an expense not listed on lines 5 to 18 goes on line 19, Other." Do not say the IRS names dues on line 19.
- **Row 19:** keep "subject to the deduction limit" if an amount is given.
- **One value for the condo count (rows 26 and 28):** 2,656 (11-02) and 2,683 (11-04) are both in the ledger. Print one count ("about 2,700") or none.
- **Row 27:**
  - Two ZIP medians are on a $25 edge today. 29582 is $725 now, against $700 in the 11-02 pull. 29575 is $500, against $525. Print the 11-02 pull with "about", or rebuild every row from one fresh pull.
  - Label 29579 as "Carolina Forest (ZIP 29579)".
- **Row 30:** add S.C. Code 12-37-220(B)(47) to the sources line. It is the law behind the bill's "Residential Exemption" (school operating millage).
- **Row 33:** label the $7,800 case "held for rent all year, no personal nights".
- **Row 34:** a cross-check only. Never print 2.9.
- **Header rule:** never print a dollar tax saving. The page gives deductible dollars only.

## Photo candidate (PLAN.md)

"Atlantica III & II, Myrtle Beach, SC.jpg", https://commons.wikimedia.org/wiki/File:Atlantica_III_%26_II,_Myrtle_Beach,_SC.jpg . I read the file page's source:
- Author: Carl Dunn (Flickr 22991988@N04). Source: https://www.flickr.com/photos/22991988@N04/3587435159/
- Licence: `{{cc-by-2.0}}`, with `{{flickrreview|File Upload Bot (Magnus Manske)|January 28, 2010}}`. The licence passed review.
- Date: 2009-06-01 19:24. Location 33.702678, -78.868896 (Myrtle Beach oceanfront). Category: Myrtle Beach, South Carolina.
- I looked at it at 1280 x 1912. It is a blue, gray and yellow condo tower at dusk, with palms and parked trucks in front. Two people walk away from the camera, backs only. No sign or plate is readable at page size. It matches the PLAN description.
- The parcel file has 138 "ATLANTICA" HPR units in districts 899 (132) and 898 (6). 134 of them are at 6 percent.

**Licence OK.** Credit: "Photo: Carl Dunn, CC BY 2.0", with the licence link. The caption must use the corrected wording from row 22, not the PLAN draft. The other two candidates were rejected by the researcher and are not used, so I did not check them.

## Not to publish

- The Form 8829 dues line (row 20).
- "The rental answer is the common one" (row 22).
- Any South Carolina "if you itemize" (row 21).
- Any PIN, unit, building or owner name from the three bills (the raw bill text in scratch carries owner names and mailing addresses).
