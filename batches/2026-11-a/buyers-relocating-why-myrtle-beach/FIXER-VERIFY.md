# Fixer-verify: /buyers/relocating/why-myrtle-beach/ (2026-11-04)

Independent check of the five ledger rows marked VERIFIED-BY-FIXER (facts.md section J, rows 45 to 49). Each source was opened again today. The fixer's script was re-run on a fresh download. Raw copies: `<scratchpad>/wf2/buyers-relocating-why-myrtle-beach/fixverify/`.

Result: 3 VERIFIED, 2 CORRECTED, 0 STRUCK. The struck-check also found one older struck sentence back on the page (row 9).

| Row | Result | What was checked |
|---|---|---|
| 45 | VERIFIED | Re-downloaded the Zillow county CSV and re-ran `zhvi_ohio.py`. The output is identical: Franklin $292,001, Cuyahoga $218,659, Allegheny $236,739, Horry $319,809, month 2026-09-30. The sentence names "Ohio" and "the Pittsburgh area", so I checked those too in the same Zillow series: Ohio state $245,982, Pittsburgh metro $228,201. 11 of 88 Ohio counties are higher than Horry (Delaware County $515,396), and so is Butler County, PA ($331,467). The sentence is about a typical home, so it stands. IRS 2022-2023 inflow, fresh from irs.gov: Franklin 58 households, Cuyahoga 37. |
| 46 | VERIFIED | www.ncei.noaa.gov refused the connection. I read the same 1991-2020 normals files for USW00093718 from NOAA Open Data (noaa-normals-pds.s3.amazonaws.com). January 55.7 / 36.7; nights at or below 32: 33.7; days with a high at or below 32: 0.3; days at 90 or above: 20.9. These match the fixer's JSON copy. 0.3 a year is about once in 3.3 years. |
| 47 | VERIFIED | NWS page read today: "Annual Mean Snowfall (in.) 1.0", last updated February 3, 2026. I recounted the 36 events, with December events counted to the next winter. 32 of 86 winters (1941-2026) had snow and 54 had none, which is 63 percent. "About two winters in three" holds as rounding. |
| 48 | CORRECTED | NHC quotes confirmed. But "most activity occurring between mid-August and mid-October" is for the whole Atlantic basin, and it counts activity, not storms on this coast (same-geography rule). The hurricanes page frames it the same way. |
| 49 | CORRECTED | 56-3-627(D) read today. (D)(2) goes on: "The exclusion allowed by this item also extends to items owned by the spouse or dependent of a person serving on active duty in the Armed Forces of the United States." The page leaves out spouses and dependents. |

## Sentences to change

Row 48 (spec line 381):
- Page: "Hurricane season is June through November, and most storms come between mid-August and mid-October."
- Use: "Hurricane season is June through November, and across the Atlantic most activity comes between mid-August and mid-October."

Row 49 (spec line 373):
- Page: "Owners on active duty in the military do not pay it."
- Use: "Owners on active duty in the military, and their spouses and dependents, do not pay it."

Row 9 (not a fixer row; the struck list fired on it, lesson B30; spec line 377):
- Page: "Most who leave do not go far."
- Use the approved wording from the struck list: "The top destinations for households that leave Horry County are nearby: Georgetown County, SC, Brunswick County, NC, and Charleston County, SC."

## Struck list

Entries for rows 48 and 49 were added to `buyers-relocating-why-myrtle-beach-struck.json`. `node tools/struck-check.test.js` prints "all controls pass". On the current page, `node tools/struck-check.js` fires on rows 48, 49 and 9, and it will stay quiet once the three sentences above are changed.
