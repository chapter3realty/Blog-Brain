# VERIFY: /buyers/relocating/from-ohio/

Independent verifier, 2026-11-09. I opened Ohio Revised Code 5747.24 at codes.ohio.gov, re-downloaded Zillow's metro ZHVI file, and read `data/relocating/col-places.json`.

Counts: 2 VERIFIED, 1 CORRECTED, 0 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | VERIFIED | "Effective: September 13, 2018" (House Bill 292, 132nd General Assembly). (A)(1) and (B)(1)(a) match word for word. (B)(2): the statement is due "on or before the fifteenth day of the tenth month following the close of the taxable year", that is October 15. (C): fewer than 213 contact periods plus an abode in Ohio is presumed domiciled, rebuttable. One condition the page should know: (B)(4), "Division (B) of this section does not apply to an individual whose domicile with respect to this state changes during the taxable year". In the year you move, the 212 test does not apply. |
| 2 | CORRECTED | The four values match col-places.json (Columbus 332,765; Cincinnati 311,116; Cleveland 254,473; Myrtle Beach 342,010; zAsOf 2026-07-31). Zillow's file no longer says them. Column 2026-07-31 today: Columbus 325,700, Cincinnati 305,204, Cleveland 248,099, Myrtle Beach 339,406. The new Columbus and Cincinnati figures would be published from a superseded snapshot. Safe: use one month from Zillow's current file for all four, on the day of the fix: July 2026, Columbus about $326,000, Cincinnati about $305,000, Cleveland about $248,000, Myrtle Beach about $339,000; or September 2026, about $327,000, $306,000, $250,000 and $340,000. Then refresh col-places.json for every sister page. |
| 3 | VERIFIED | Every value in the row matches today's file. The last column is 2026-09-30. The order holds in both months: Myrtle Beach above all three Ohio metros. |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 2, the table cell "Columbus area about $333,000; Cincinnati area about $311,000" and the paragraph "about $311,000 around Cincinnati and about $333,000 around Columbus, in July 2026": row 2, CORRECTED. Use the current file's values.
2. The kept "About $342,000" and "Cleveland area about $254,000" have the same problem (row 2). They move with the refresh.
3. Step 2, FAQ "a typical house costs more than in Cleveland, Columbus or Cincinnati": holds on both the snapshot and today's file.
4. Step 1 holds (row 1). "213 or more nights in Ohio" is a fair plain reading of a contact period. If the FAQ sentence on keeping Ohio's claim alive is touched again, add that the 212 test does not apply in the year you move ((B)(4)).

Struck list: `batches/2026-11-b/facts/buyers-relocating-from-ohio-struck.json` (the two new figures). The live page has no hit yet; the list guards the edit.
