# Applied: /invest/how-long-to-hold/

Fixer, 2026-11-09. Source: specs/how-long-to-hold.js and four data files, built with `node tools/mkpage.js specs/how-long-to-hold.js`. Rows 1 to 10 VERIFIED.

## Data (rows 1, 7, 8, 10)

Copied from this folder's data/ into the website's research/invest-next/data/, replacing the July copies (backups kept outside the repo): hold-zhvi-metro-myrtle-beach.csv, hold-zhvi-zip-grand-strand.csv, hold-rolling-windows.csv, hold-breakeven-model.csv. zip-bottom-tier.json and submarkets.json were not touched. No other spec reads the four hold-* files.

## Spec

| Where | Before | After | Rows |
|---|---|---|---|
| Header comment | data through July 2026 | data through the latest month in the file | 1 |
| `win` | `${2026 - y}-07-31` | `ago(y)`: the month-end date y years before LAST, looked up in the series by year and month | 1, 3 |
| `roll` map | worst window only | adds `bs`, `bend` (best window start and end) | 6 |
| ZIP block comment and `zips` | July 2026 against July 2025, 2023, 2021, 2016; seven literal "-07-31" dates | the latest month against the same month 1, 3, 5 and 10 years before; `v(LAST[0])`, `v(ago(1))` ... `v(ago(10))` | 8 |
| Line chart aria-label | November 2001 to July 2026 | `${mon(metroRows[0][0])} to ${mon(LAST[0])}` (November 2001 to September 2026) | 1, 4 |
| beGroups keys | "1.94%", "6.08%" | `${win[5].a.toFixed(2)}%`, `${win[3].a.toFixed(2)}%` (1.83%, 6.06%, matching the new CSV) | 10 |
| T_WIN head and year column | Bought in July / Change to July 2026 / `2026 - w.y` | Bought in September / Change to September 2026 / year from LAST | 3 |
| T_ZIP head | Typical value, July 2026 | Typical value, September 2026 (from LAST) | 8 |
| Break-even paragraph | which Zillow put at ${fmt$(now)} in July 2026 | ... in ${mon(LAST[0])} | 1 |
| Price history paragraph | The fastest rise was July 2021 to July 2022, ${...} percent | The fastest rise was ${mon(rollAt(1).bs)} to ${mon(rollAt(1).bend)}, ${p1(rollAt(1).best)} percent | 6 |
| After the table | The 20-year row starts one year before the peak. It is the honest figure for a buyer who bought at the top ... The 10-year and 15-year rows start after the low | The 20-year row starts ${months(ago(20), peak[0])} months before the peak. It is the honest figure for a buyer who bought near the top ... The 10-year and 15-year rows start near the low | 3, 4 ("near the top" per VERIFY; the 15-year row now starts September 2011, two months before the November 2011 low, so "after the low" was wrong) |
| FAQ "How much has Myrtle Beach real estate appreciated?" | ... in July 2026. | ... in ${mon(LAST[0])}. | 1, 3 |

## Built page now says (checked)

- "which Zillow put at $339,738 in September 2026" (row 1)
- Chart "November 2001 to September 2026"; labels March 2007 $240,280, November 2011 $158,238, May 2024 $350,036, September 2026 $339,738 (rows 4, 5)
- "May 2024 was the high at $350,036, and September 2026 is 2.9 percent below it." (row 5)
- "The fastest rise was June 2021 to June 2022, 27.4 percent in twelve months." (row 6)
- Bought in September: 2025 $337,789 +0.6% +0.6%; 2023 $347,009 -2.1% -0.7%; 2021 $279,093 +21.7% +4.0%; 2016 $188,698 +80.0% +6.1%; 2011 $158,551; 2006 $236,332 (row 3)
- "The 20-year row starts 6 months before the peak. It is the honest figure for a buyer who bought near the top: 1.8 percent a year." (rows 3, 4)
- FAQ: "three-year holds cleared that bar 66 times out of 100" (row 7); "$339,738 in September 2026. That is +0.6 percent over one year and -2.1 percent over three years ... +21.7 percent, or 4.0 percent a year ... +80.0 percent, or 6.1 percent a year." (row 3)
- "No area rose more than 2.5 percent in the last year ... The ten-year rates run from 5.3 to 7.2 percent a year." (row 8)
- Break-even chart at the 20-year rate: financed 5.5, cash 4.2 years; at the 10-year rate 1.7 and 1.3 (row 10)

Not changed: the all-cash FAQ (still on zip-bottom-tier.json and submarkets.json, July basis, no date shown over it); the FAQ's "From the March 2007 peak ... December 2020" (row 4 confirms it); the italic subtitle size (layout).

Rebuild side effects from the current mkpage (not edits of mine): "Updated" and dateModified fall back to datePublished until `node build.js dates` runs ("re-date the page" in the triage is that step); the hero button moved under the short answer; sections carry ids; Article author is Devin Day as a Person; share image alt is the page's own. Zillow's mid-November release may be out before ship; if so, re-run the extraction (VERIFY). Score 88 -> 89.
