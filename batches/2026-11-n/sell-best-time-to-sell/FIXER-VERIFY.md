# Fixer rows, second check: /sell/best-time-to-sell/

Independent verifier, 2026-11-08. Rows F1 to F8 in `facts.md` section E (status VERIFIED-BY-FIXER). I did not research these rows.

How I checked:

- Zillow rows (F1, F7, F8): I read the Myrtle Beach, SC row (RegionID 394898) in the raw metro CSVs in `DATA/raw/` and recomputed every value. I did not use `zillow-months.json`.
- Deed rows (F2, F3, F4, F6): I copied `DATA/verify_condo_fix.py` to `wfn/sell-best-time-to-sell/fv/` and reran it on the raw deeds and parcels in `wfn/sell-best-time-to-sell/raw/`. Its output matches `DATA/findings-condo-fix.json` key for key.
- BLS row (F5): I downloaded the BLS file again on 2026-11-08 (`sm.data.42.SouthCarolina`). I also checked the area and supersector names in `sm.area` and `sm.supersector`.
- Page text: I read every claim against the built page, `chapter3realty/sell/best-time-to-sell/index.html`.

| Row | Result | Evidence |
|---|---|---|
| F1 | VERIFIED | Days to pending, Oct 2025 to Sep 2026: 55, 55, 74, 78, 65, 45, 46, 52, 51, 57, 59, 53. Days to close, Sep 2025 to Aug 2026: 37, 37, 36, 38, 42, 37, 36, 37, 37, 37, 37, 36. They average 37.25. Spring 2026 was 45, 46 and 52 days, or 6.4 to 7.4 weeks. March to May averages for 2018, 2019 and 2022 to 2025 were 26.3, 28.0 and 28.5 days, about 4 weeks. I recomputed the work-back table with dates. For a closing on the 15th, the listing dates are: Jan, Sep 26; Feb, Oct 23; Mar, Dec 3; Apr, Jan 23; May, Feb 21; Jun, Mar 18; Jul, Apr 18; Aug, May 13; Sep, Jun 11; Oct, Jul 17; Nov, Aug 15; Dec, Sep 14. Every cell on the page matches. The longest is 115 days, which fits "up to 4 months". For a June 5 closing, the contract is Apr 29 and the listing is Mar 14. A Nov 15 listing closes Feb 15. |
| F2 | VERIFIED | In 2025, March to June held 35.3 percent of sales, the lowest of the five years. The gap between the busiest and slowest month was 2.9 points, the smallest of the five years. The busiest month was October 2025, with 1,026 sales. February 2025 was -6.56 for all homes, the lowest of 12. Houses: June 2025 +1.49, July 2025 +3.96. |
| F3 | VERIFIED (row); one page sentence that cites it CORRECTED | Houses: June +3.15 is the highest month and February -2.15 is the lowest. The gap is 5.3 points. Condos: May +4.30 and April +3.69 are the highest months and February -4.92 is the lowest. The gaps are 9.2 and 8.6 points. Condos in fall: September +0.22, October +1.20, November +0.62. The row is right. The FAQ answer that REVIEW-1 item 4 tied to F3 also makes a sales claim that is false for condos. See below. |
| F4 | VERIFIED | Typical-year shares are January 6.63 and February 6.75. Together they make 13.38 percent, or "about 13 percent". |
| F5 | VERIFIED | `SMU45348207000000001`: 2026 M01 32.3, M07 45.6. July is the highest month of 2026 so far. 45.6 / 32.3 = 1.41. Area 34820 is "Myrtle Beach-Conway-North Myrtle Beach, SC" (SC only). Supersector 70 is "Leisure and Hospitality". |
| F6 | VERIFIED | `storm_days.ian_2022`: Oct 10 to 14 were 29, 39, 46, 58 and 56, which add to 228. The chart label reads "Oct 10 to Oct 14, 228". |
| F7 | VERIFIED | Median sale-to-list, averaged by month (same years as row 7): lowest December 0.9712, highest June 0.9785. All 12 months fall between 97.1 and 97.9 percent. |
| F8 | VERIFIED | Median days to pending: Sep 2026 53, Sep 2025 61. That is 8 days, about a week. |

## Sentence to change

The FAQ answer below is in the spec, and in the FAQ schema that the spec builds from it.

- Page: "February. For houses and for condos alike, it was the lowest month of the year for price, and one of the two slowest for sales."
- Problem: the price half is right (F3). The sales half is wrong for condos. Typical-year condo shares are January 6.73, November 7.01 and February 7.14, so February is the third slowest month for condos. For houses it is right: February 6.48 and January 6.58 are the two slowest.
- Replace with: "February. For houses and for condos alike, it was the lowest month of the year for price, and one of the slowest for sales."

## Not a fixer row (for the lead)

- Row 4, and the page sentence "July and September closings did nearly as well. All three months were above the months around them in all five years." September 2024 for houses is +0.44. That is under the page's own 0.5 percent rule for "above" (row 4 researcher note; the row 4 verifier called July 2021 +0.18 "level" on the same rule). July 2024 is +0.58, so it passes. A safe replacement: "July and September closings did nearly as well. All three months were above the months around them in at least four of five years."
