# VERIFY: /buyers/coastal-insurance/

Independent verifier, 2026-11-09. I opened the Treasury workbook (14.9 MB, read with openpyxl), the Treasury release, and the Census 2020 ZCTA-to-county file. insurify.com does not resolve from this session.

Counts: 2 VERIFIED, 1 CORRECTED, 2 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | VERIFIED | Sheet "Supporting Underlying Metrics", Year 2022, "Premiums Per Policy": all 16 ZIP values match the row (29527 1574.95 low; 29572 2934.67 high; 29585 Pawleys Island 3620.67, correctly left out). "Metric Definitions": "Written Premium / Policies in Force at End of Reporting Year", "The average cost of a policy." Census file: exactly these 16 ZCTAs have land in county 45051; 29576 is 55.5 percent Horry by land, 29581 is 73.6 percent. "About $1,600 to $2,900" rounds the ZIP averages correctly. It is a range of ZIP averages, not of single policies; "depending on the ZIP code" says that. |
| 2 | VERIFIED | Sheet "Disclaimer & Background": both quotes match ("residual market plans or excess & surplus (E&S) insurance markets"; "Flood insurance and reinsurance are also outside the scope"; "80 percent of HO-3 and HO-5 policies nationwide"). The word "often" for wind as a second policy rests on the page's 1 in 6 figure, which was not re-checked. |
| 3 | CORRECTED | The federal half holds (rows 1, 2). The comparison-site half is struck: no comparison site's method was opened, and a comparison site is a secondary source. Safe wording: "The federal figure is the average premium paid on real 2022 policies, and it leaves out wind pool and surplus-lines policies [Treasury FIO workbook, 2018 to 2022]." |
| 4 | STRUCK | No primary source for $1,500 to $3,500. Do not print it unless the owner confirms it as Chapter3's own client quotes, with a count and years. |
| 5 | STRUCK | SCDOI's pages give neither range. Cut "Premium benchmarks come from the South Carolina Department of Insurance". |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 3: "They put Myrtle Beach at about $4,500 to $5,300 a year." No verified row. Use the FIX's own fallback: cut the range.
2. Step 3: "The comparison sites quote one set of coverage at today's prices." No row: the method was not opened. Cut it.
3. Step 3: "National comparison sites price one standard $300,000 house" is the page's own old statement, never verified. If it stays, it stays without a number, and the lead accepts it unverified.
4. Step 3: "On the coast, quotes on the same house vary by thousands of dollars, so shopping pays." No row in this ledger.
5. Step 4, FAQ second sentence ("Comparison sites ... put Myrtle Beach at about $4,500 to $5,300"): no row. Cut the range.
6. Step 3: "it leaves out wind pool policies" holds; add "and surplus-lines policies" to match row 2.

The hero sentence and the Sources change are within rows 1, 2 and 5.

Struck list: `batches/2026-11-b/facts/buyers-coastal-insurance-struck.json`. On the live page it finds 8 struck phrases (the hero range, the FAQ, the SCDOI sentence, "Both numbers come from actual quotes", "among the highest in South Carolina").
