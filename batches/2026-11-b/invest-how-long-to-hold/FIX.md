# Fix: /invest/how-long-to-hold/

Spec: specs/how-long-to-hold.js. Then `node build.js`, `node build.js dates`. Do not type a date into the page; the month names below come from the data file.

## 1. Replace four data files (rows 1, 7, 8, 10)

Copy from this folder's `data/` into the website's research/invest-next/data/:
hold-zhvi-metro-myrtle-beach.csv, hold-zhvi-zip-grand-strand.csv, hold-rolling-windows.csv, hold-breakeven-model.csv.
Do not touch zip-bottom-tier.json or submarkets.json (shared with the returns page).

## 2. Spec: stop hard-coding July 2026 (rows 1, 3, 8)

- Line 53: `const d = \`${2026 - y}-07-31\`` becomes the same month as LAST: `const d = \`${+LAST[0].slice(0, 4) - y}${LAST[0].slice(4)}\``.
- Line 76 (ZIP table): replace the seven "-07-31" dates with dates built the same way from LAST (now 2026-09-30, 2025-09-30, 2023-09-30, 2021-09-30, 2016-09-30).
- Line 72 comment: "July 2026 against July 2025, 2023, 2021, 2016" becomes "the latest month against the same month 1, 3, 5 and 10 years before".
- Lines 128, 171, 177, 214, 252 and the file header comment (line 3): every literal "July 2026" becomes `${mon(LAST[0])}` (September 2026), and "Bought in July" becomes `Bought in ${mon(LAST[0]).split(" ")[0]}` (September). `mon` is defined at line 118.

## 3. Spec: two sentences that are not driven by the data (rows 6, 10)

- Line 223: "The fastest rise was July 2021 to July 2022, ${...} percent in twelve months." is a fixed window and is not the fastest. Use the 1-year best window from the rolling file: "The fastest rise was June 2021 to June 2022, 27.4 percent in twelve months." built from the 1-year row: add `bs: r[rwi("best_window_start")], bend: r[rwi("best_window_end")]` to the `roll` map at line 65 (only the worst window is mapped now), then use `mon(rollAt(1).bs)`, `mon(rollAt(1).bend)` and `p1(rollAt(1).best)`. Note the window runs end of June to end of June.
- Line 164, beGroups: the keys "1.94%" and "6.08%" must match the new CSV labels "1.83%" and "6.06%". Better: build the keys from `win[5].a` and `win[3].a` with two decimals, so the next refresh does not break the build.

## 4. What the built page should now say (check after the build)

- "the typical home in the metro, which Zillow put at $339,738 in September 2026" (row 1).
- Chart: "November 2001 to September 2026"; labels March 2007 $240,280, November 2011 $158,238, May 2024 $350,036, September 2026 $339,738 (rows 4, 5).
- "May 2024 was the high at $350,036, and September 2026 is 2.9 percent below it." (row 5)
- Table "Bought in September": 2025 $337,789 +0.6% +0.6%; 2023 $347,009 -2.1% -0.7%; 2021 $279,093 +21.7% +4.0%; 2016 $188,698 +80.0% +6.1%; 2011 $158,551 +114.3% +5.2%; 2006 $236,332 +43.8% +1.8% (row 3).
- "The honest figure for a buyer who bought at the top: 1.8 percent a year." (row 3)
- FAQ: "Since 2001, three-year holds cleared that bar 66 times out of 100 in the Myrtle Beach metro, and every 15-year hold ended above its start." (row 7)
- FAQ: "$339,738 in September 2026. That is +0.6 percent over one year and -2.1 percent over three years. Over five years it is +21.7 percent, or 4.0 percent a year. Over ten years it is +80.0 percent, or 6.1 percent a year." (row 3)
- ZIP paragraph: "No area rose more than 2.5 percent in the last year, and most fell over the last three. The ten-year rates run from 5.3 to 7.2 percent a year." (row 8)
- Break-even chart, financed and cash at the 20-year rate: 5.5 and 4.2 years (row 10). If the verifier keeps the original rounding instead, use its numbers.

## 5. Not in this pass

The italic subtitle size is a layout fix.
