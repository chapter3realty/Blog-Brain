# Fix: /invest/what-is-being-built/

Edit `specs/what-is-being-built.js` (and the data step), then `node tools/mkpage.js specs/what-is-being-built.js`, `node build.js dates`, `node build.js preflight`. Never hand-edit the page. Do not type a date: read dates come from `research/invest-next/data/pipeline-latest.json`.

Decision on the triage's either/or: refresh the numbers now, and drop "Updated monthly". Nothing schedules the refresh, the county permit map has been stale since September 2025, and no county layer record is dated after August 2026 (row 9). A promise of monthly updates would be broken again by January.

## 0. The data step (rows 2 to 9)

The spec now sums FRED's monthly first counts for the year totals and the change. Rows 2 to 7 show the Census's own year-to-date and annual files differ (2025: 6,511 against 6,898; January to September change: -3.7 percent against -12.3 percent). Print the Census totals.

In `tools/permits.js`, add a fourth feed: from `https://www2.census.gov/econ/bps/CBSA%20(beginning%20Jan%202024)/`, read the newest `cbsaYYMMy.txt`, the same month a year earlier, and `cbsa2024a.txt` and `cbsa2025a.txt`. Take the line with `,34820,`, and sum the Units columns of the four "Estimates with Imputation" groups (fields 7, 10, 13, 16, one-based). Store them as `permits_census: { read, latest_month, ytd_now, ytd_prev, annual: { "2024": ..., "2025": ... }, source }`. Keep the old values and read date if the fetch fails, as the other feeds do. The same directory's `cbsaYYMMc.txt` files give the monthly bars (the values match FRED month for month, row 7), so FRED can be dropped. If you keep it, keep it for the bars only. Then run `node tools/permits.js`. Expected on 2026-11-09: ytd_now 4,978 (Jan to Sep 2026), ytd_prev 5,171, 2025 6,511, 2024 7,331, months through 2026-09 (August 527, September 477), developments 44,732 / 29,704 / 15,028.

In the spec, take `y2024`, `y2025`, `ytdNow`, `ytdPrev` from `P.permits_census`, not from the monthly sums. `latestM` stays the newest month.

If the tool change is not made in this round, do not ship the refresh on the old basis. Change only sections 2, 6 and 7 below (metro sentence, hospitals, eyebrow and FAQ), and leave the permit numbers as they are until the data step is done.

## 1. Eyebrow, description, subtitle (no fact needed)

- `eyebrow`: "Updated monthly" becomes "Permits, hospitals, roads".
- `description`: drop the closing "Updated monthly." and change "three hospitals" to "the hospitals": "What is being built on the Grand Strand: the homes permitted this year, the approved units not yet built, the hospitals, the roads and I-73."
- `h1em`: "Houses, hospitals, roads, and the permit count." becomes "Houses, hospitals and roads." (shorter, one line at the approved size; the triage asks for it).

## 2. `sub` (rows 2, 11)

New: "Builders were allowed to start ${ytdNow} homes in the Myrtle Beach metro from January through ${month} ${year}. One new hospital is open, and two more hold state licenses. The interstate has no contract."

Renders on 2026-11-09 as: "Builders were allowed to start 4,978 homes in the Myrtle Beach metro from January through September 2026. One new hospital is open, and two more hold state licenses. The interstate has no contract."

## 3. `shortAnswer` (rows 2, 3, 5, 11)

- First paragraph renders as: "Houses, mostly. Builders were allowed to start 6,511 homes in the Myrtle Beach metro in 2025, and 4,978 from January to September 2026. That is 3.7 percent below the same months a year earlier." (template unchanged; the numbers come from step 0)
- Third paragraph, now: "The big projects are three hospitals holding state licenses that are not fully open, four road jobs under way, ..." New: "The big projects are McLeod's new hospital in Carolina Forest, now open, two more licensed hospitals, four road jobs under way, and the airport terminal that opened in December 2025. ..." (rest unchanged)
- Fourth paragraph, now: "This page is rebuilt every month from the federal permit count and the county's own data." New: "The numbers come from the federal permit count and the county's own data. The sections below have each number, its date and where it came from."

## 4. Summary table `T_SUM` (rows 2, 5, 8, 11, 13)

- "Houses": template unchanged; renders "4,978 homes permitted in the metro, January to September 2026; 6,511 in 2025".
- "Approved and not yet built": renders "44,732 units ...".
- "Hospitals", now: "Three with state licenses and not yet fully open: 48, 59 and 36 beds; five free-standing emergency departments". New: "McLeod Carolina Forest, 48 beds, now open; two more licensed and not yet open, 59 and 36 beds; five free-standing emergency departments".

## 5. "How many houses are being built?" (rows 1, 4, 7)

First paragraph, now: "The federal government counts the homes that local governments permit each month. The count covers the Myrtle Beach metro, which is Horry County plus Brunswick County in North Carolina. Each month's figure arrives about four weeks after the month ends."

New: "The federal government counts the homes that local governments permit each month. The count covers the Myrtle Beach metro, which is Horry County. Each month's figure arrives about four weeks after the month ends. The bars show each month's first count. The year totals below are the Census's own, which add late reports and corrections, so the bars do not add up to them exactly."

Link the first sentence to the Census CBSA directory (row 2's URL) instead of FRED, or keep FRED only if the bars still come from it. "which is Horry County" links to the OMB delineation file (row 1).

`T_PERMITS` renders: 2024 7,331; 2025 6,511; January to September 2026 4,978; Same months of 2025 5,171; September 2026 477. The paragraph under it renders "January to September 2026 is 3.7 percent below the same months of 2025." (template unchanged).

## 6. "What is approved and not yet built" (rows 8, 9, 10)

- The layer paragraph renders with the new read date and 44,732 / 29,704 / 15,028 (template unchanged).
- The "811 of its 1,486 records ... 10,621" sentence is still right (row 9). Add after it: "No record is dated later than August 2026."
- The pace sentence (line 166), now: "At the 2025 pace of ${y2025} permits a year, the ${remaining} approved units are about ${n} years of building." New: "The whole county permitted ${y2025} homes in 2025, cities included. At that pace the ${remaining} approved units, all in the unincorporated county, are about ${n} years of building, and longer at the unincorporated county's own pace." Renders "6,511", "44,732", "about 7 years" (row 10).

## 7. "Which hospitals are being built?" (rows 11, 13, 14)

- First paragraph, now: "Three. The state's license list, updated August 31, 2026, carries all three ..." New: "Two, and one more just opened. The state's license list, updated August 31, 2026, carries all three with their bed counts and their approval dates from 2021. Each was appealed by competing systems and each survived."
- `T_HOSP`, McLeod row, last cell, now: "Ribbon cut August 27, 2026; the hospital says it opens this fall; about $90 million by its latest figure". New: "Open, the hospital says; ribbon cut August 27, 2026; $90 million by its own figure". Link "Open, the hospital says" to https://www.mcleodhealth.org/locations/carolina-forest-overview/carolina-forest-new-hospital/ (add a const, e.g. `MCLEOD_OPEN`).
- `T_HOSP`, South Strand row, last cell, now: "Ground broken February 9, 2026; completion reported for late 2027; about $220 million". New: "Ground broken February 9, 2026; no opening date from the system; $226 million in its 2025 plan". Link "$226 million in its 2025 plan" to the Grand Strand Health release (row 13).
- Paragraph under the table, now: "McLeod cut the ribbon on August 27, 2026 on a four-story, 48-bed hospital in Carolina Forest, the first new hospital in Horry County since 2011. Grand Strand Health broke ground ..." New first sentence: "McLeod's four-story, 48-bed hospital in Carolina Forest is now open, the hospital says. It is the first new hospital in Horry County since 2011, and its ribbon was cut on August 27, 2026." Keep the rest of the paragraph.

Do not print an opening day for McLeod (row 12) or a completion year for South Strand (row 14).

## 8. FAQ (rows 2, 5, 11, 14)

- "How many homes are being built in Myrtle Beach?": template unchanged; renders 6,511 and 4,978 and 44,732.
- "What new hospitals are being built in Myrtle Beach?", new answer: "McLeod Health Carolina Forest, 48 beds, is now open. Two more hold state licenses. South Strand Hospital, 59 beds, broke ground in February 2026, and the system has given no opening date. Tidelands Health Carolina Bays, 36 beds at SC 31 and SC 707, is projected for 2028. Five free-standing emergency departments are open or under way."
- "How often is this page updated?": rename the question "How current is this page?" and answer: "The permit count runs to ${mName(latestM)}. The county's development layer was read on ${longDate(D.read)}, and none of its records is dated later than August 2026. The county's permit map has not updated since ${longDate(feed.max_issue_date)}."

## 9. Sources line

Replace "Census permits, FRED" with "Census permits (CBSA files)" and the OMB delineation file; add "McLeod Health, now open" and "Grand Strand Health, 2025 plan". The `sources` read date comes from the data, not typed.

## Nothing else changes

Roads, I-73, the airport, the proposals table and the offers stay as they are. They are outside this triage row.
