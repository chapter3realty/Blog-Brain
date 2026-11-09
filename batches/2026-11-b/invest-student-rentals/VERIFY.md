# Verify: /invest/student-rentals/

Independent verifier, 2026-11-09. Opened myself: HUD's FY27_safmrs.xlsx, HUD's FY2027 SAFMR methodology (fmr2027/FY27-Public-SAFMR-Methodology.pdf) and HUD's calculation page for ZIP 29526 (https://www.huduser.gov/datasets/fmr/fmr2027/zip-calc?year=2027&zip=29526&cbsasub=METRO34820M34820). Recomputed rows 4 to 6 from the website's data/2026-10-d/sell-out-of-state-buyers/out-of-state-buyers.json, and read the county land use code of every sale from Horry County GIS layer 24.

Counts: 3 VERIFIED, 4 CORRECTED, 2 STRUCK.

## Corrections

- Row 2, CORRECTED. The 40th-percentile definition belongs to the metro-wide FMR, not to this ZIP figure. HUD's own calculation page for 29526: the small area rent ratio is 0.848, the preliminary FY2027 SAFMR was $1,550 (3BR) and $1,690 (4BR), and "The FY2027 SAFMR must not be below 90% of the FY2026 FMR" lifted them to the floor, $1,630 and $1,900 ("Use FY2026 floor for FY2027? Yes" for every size). The three and four bedroom figures come from the metro's bedroom ratios ("Calculate SAFMRs for other bedroom sizes using the bedroom ratios for the ZIP code's parent HUD metropolitan area"), not from measured three and four bedroom rents in the ZIP. Safe wording: "HUD's fair market rent for ZIP 29526 is $1,630 a month for three bedrooms and $1,900 for four, utilities included [HUD FY2027 SAFMR]. It is the most a housing voucher pays, not a measured rent: HUD's own estimate for this ZIP came in lower, and these figures sit at HUD's floor." Do not write "40 of 100 standard homes" for this figure.
- Row 4, CORRECTED (group). The arithmetic reproduces: 775 sales, median $310,000, quartiles $246,950 and $383,700. But "houses" is wrong. County land use codes on the 753 parcels: 101 (669 sales), 130 (34), 109 (29), 120 (16), 110 (7), 112 (5), 126 (5), 121 (4), 113 (3), 102 (3). Legal descriptions under 120 and 130 name mobile homes ("12X65 1975 BELLEMEAD", "28X64 92"); 109 is the townhouse class. Two safe choices:
  - "775 homes other than condos resold in ZIP 29526, including townhouses and manufactured homes, at a middle price of $310,000. Half sold between about $247,000 and $384,000."
  - Houses only (codes 100, 101, 102, 110, 126, as the website's own submarket scripts group them): 684 sales, middle price $320,000, half between about $265,000 and $395,000. The county publishes no code table on the layer, so the code reading is the project's, from sample legal descriptions.
- Row 4b, CORRECTED (group). 473 sales, median $312,000 reproduce. 80 of the 473 are code 109 (townhouses). "Builder" means the seller's name matched the builder pattern in analyze.py. Write "homes sold by builders, townhouses included, sold at a middle price of $312,000".
- Row 5, CORRECTED. The seven sales, the range and the median reproduce, and all seven are house codes (101 and 102). Strike the sentence "None was recorded in Quail Creek or on Barberry Drive." The deed file keeps only sales of $10,000 or more on one parcel, so a sale can be missing from it; and Barberry Drive is a street, which a lot's legal description need not name. Also, the deeds say "COLLEGE PLACE II" and the ordinance names "College Place". Whether phase II is inside the overlay was not checked against the overlay map. Safe wording: "In the subdivisions recorded as Quail Creek Village, College Park and College Place II, next to campus, seven houses sold in the year: from $280,000 to $435,000." Seven is a small count: give the range and the count, not "typical".

## Verified, with notes

- Row 1: the 29526 row reads exactly as quoted. The values are right; the meaning is row 2.
- Row 3: arithmetic right. It inherits row 2: say it is HUD's figure split, not a market rent per student.
- Row 6: seven Greenfields at College Park sales, $95,000 to $128,000, ZIP blank. The file's condo flag is false for all seven (no "HPR" in the legal), but the legals name units and phases. Keep it out, as the row says.
- Rows 7 and 8: confirmed not found.

## FIX.md: sentences that go beyond the verified rows

- "It is the rent 40 of 100 standard homes rented by recent movers fall at or below, so it is not an average." Wrong for this ZIP figure (row 2). Use the row 2 wording.
- "Split four ways, a four-bedroom in the overlay is $475." The HUD figure is for the whole ZIP, not the overlay. Write "Split four ways, the four-bedroom figure is $475 a person."
- "775 houses resold in ZIP 29526" and "New builder houses in the same ZIP": row 4 and 4b corrections.
- "In the overlay subdivisions next to campus, only seven houses sold: three in Quail Creek Village, one in College Park and three in College Place II": name the records as they are and do not claim the overlay as a whole (row 5).
- Optional FAQ: "Houses in the overlay subdivisions next to campus sold for $280,000 to $435,000 in the latest year of county records." Same limit: "Seven houses in Quail Creek Village, College Park and College Place II sold for $280,000 to $435,000 ...".
- Veteran tuition: "A child of certain wartime veterans can attend free of tuition; the rules are on the state veterans' affairs page." No ledger row, so I opened https://scdva.sc.gov/education: "A child of a wartime Veteran, upon application to and approval by the South Carolina Department of Veterans Affairs, may be admitted to any state-supported college, university, or post high school technical education institution free of tuition", with eligibility conditions (age 26 or younger, and others). "Certain" carries the conditions. Pass.
- "the year to September 2026" in the copy: the build may count it as a typed date. Use the period of the records only if build.js accepts it.

Struck list: batches/2026-11-b/facts/invest-student-rentals-struck.json.
