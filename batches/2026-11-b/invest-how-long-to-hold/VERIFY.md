# Verify: /invest/how-long-to-hold/

Independent verifier, 2026-11-09. I downloaded both Zillow files myself (https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv and the Zip file). SHA-256, size and Last-Modified match the ledger. I recomputed every printed figure with my own code, not the researcher's scripts, then re-ran be.py and redid the break-even formula by hand. I checked the four refreshed CSVs in data/ against Zillow: the metro CSV matches all 299 months (rounding only), and the ZIP CSV matches every cell of the 13 rows.

Counts: 10 VERIFIED, 0 CORRECTED, 0 STRUCK.

| # | Status | Check |
|---|---|---|
| 1 | VERIFIED | Myrtle Beach, SC (394898), 2026-09-30: 339,737.75. |
| 2 | VERIFIED | New: July 2026 339,405.77; Nov. 2001 143,947.18. Old copy: 342,010.48 and 145,051.88. |
| 3 | VERIFIED | 337,789 +0.6 (0.58); 347,009 -2.1 (-0.70); 279,093 +21.7 (4.01); 188,698 +80.0 (6.06); 158,551 +114.3 (5.21); 236,332 +43.8 (1.83). |
| 4 | VERIFIED | Peak March 2007 $240,280; low November 2011 $158,238; -34.1 percent; regained December 2020. |
| 5 | VERIFIED | May 2024 $350,036; September 2026 is 2.94 percent below. |
| 6 | VERIFIED | Best 12 months: June 2021 to June 2022, +27.4 percent. July to July: +26.7 percent. |
| 7 | VERIFIED | 3-year: 263 windows, 66 percent at or above +10.5. 15-year: 119 windows, all above the start, worst +14.2 percent (April 2006 to April 2021). |
| 8 | VERIFIED | All 13 ZIP rows match. Highest one-year is +2.5 (29575); ten-year range 5.3 to 7.2. Three-year: 11 of 13 below zero (29576 is -0.0), so "most fell" holds. |
| 9 | VERIFIED | Method note only. I did not run roll.py; the cells the page prints match my own count. |
| 10 | VERIFIED | be.py re-run: 1.83% financed 5.5 years, with paydown 2.8 to 4.0; cash 4.2. 6.06% financed 1.7 (1.3 to 1.6); cash 1.3. By hand, n = ln[(1 + b + F/P)/(1 - c - d)] / ln(1 + g) with P $339,738: 5.50, 4.17, 1.69, 1.29. Rise needed 10.48 and 7.86 percent. The paydown runs use implied loan rates internally; the page must not print them, and the spec does not. |

## FIX.md: sentences that go beyond the verified rows

- "The honest figure for a buyer who bought at the top: 1.8 percent a year." The 20-year window starts September 2006, six months before the March 2007 peak, at $236,332 against the peak's $240,280. "At the top" overstates it a little. Write "for a buyer who bought near the top". (The July page had the same gap, with July 2006.)
- "The fastest rise was June 2021 to June 2022, 27.4 percent in twelve months." Row 6. Pass. Keep the month names from the rolling file, as the plan says.
- Every other sentence in section 4 of the plan matches rows 1, 3, 4, 5, 7, 8 and 10.
- Freshness: Zillow's next release is due about mid-November. If the page ships after it, re-run the extraction and this check; every figure moves (row 2).
- Out of scope, as the ledger says: zip-bottom-tier.json and submarkets.json were not refreshed, so the all-cash table stays on the July basis. The page should not show a September date over that table.

No struck list: no row was corrected or struck.
