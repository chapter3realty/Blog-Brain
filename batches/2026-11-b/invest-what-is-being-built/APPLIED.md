# Applied: /invest/what-is-being-built/

Fixer, 2026-11-09. Edited `tools/permits.js` (data step), refreshed `research/invest-next/data/pipeline-latest.json`, edited `specs/what-is-being-built.js`, rebuilt with `node tools/mkpage.js specs/what-is-being-built.js`. `build.js dates` was not run (this round forbids it), so the sources line has no "Read" date until the next `node build.js dates`.

## 0. Data step (rows 2 to 8, 10)

- `tools/permits.js`: a fourth feed, `census()`. From the Census CBSA directory it reads the newest `cbsaYYMMy.txt`, the same month a year earlier, the two latest `cbsaYYYYa.txt` and every monthly `cbsaYYMMc.txt` since January 2024 (line `34820`, fields 7, 10, 13, 16 summed). It also reads the newest full year's South Region place file for "Horry County Unincorporated Area" (VERIFY row 10 note). A failed fetch keeps the old values, as the other feeds do. FRED is kept in the file but no longer used by the page.
- Run 2026-11-09 (with `NODE_USE_ENV_PROXY=1` in this container): ytd_now 4,978 (Jan to Sep 2026), ytd_prev 5,171, 2024 7,331, 2025 6,511, monthly through 2026-09 (Aug 527, Sep 477; every earlier month equals FRED), unincorporated 2025 4,690. Developments 44,732 / 29,704 / 15,028 in 1,486 records. FRED timed out; its old values stay.
- Spec: `y2024`, `y2025`, `ytdNow`, `ytdPrev`, `latestM` and the bars now come from `P.permits_census`.

## Changes on the page

| # | Where | Before | After | Rows |
|---|---|---|---|---|
| 1 | Eyebrow | "Updated monthly" | "Permits, hospitals, roads" | struck list |
| 2 | Description | "... three hospitals, the roads and I-73. Updated monthly." | "... the hospitals, the roads and I-73." (140 characters) | struck list |
| 3 | h1em | "Houses, hospitals, roads, and the permit count." | "Houses, hospitals and roads." | none needed |
| 4 | Sub | "... 3,873 homes ... through July 2026. Three hospitals are being built or opening. The interstate has no contract." | "Builders were allowed to start 4,978 homes in the Myrtle Beach metro from January through September 2026. One hospital opened. Two more are licensed. The interstate is not being built." | 2, 11 (shortened to the 30-word mkpage limit; "being built" kept for the audit's keyword check) |
| 5 | Short answer 1 | 6,898 / 3,873 / 13.0 percent below | 6,511 / 4,978 / 3.7 percent below | 2, 3, 5 |
| 6 | Short answer 2 | 44,735 | 44,732 | 8 |
| 7 | Short answer 3 | "The big projects are three hospitals holding state licenses that are not fully open, four road jobs ..." | "The big projects are two licensed hospitals, four road jobs under way, and the airport terminal that opened in December 2025. McLeod's new hospital in Carolina Forest is now open. ..." | 11 (split to meet the 28-word audit limit) |
| 8 | Short answer 4 | "This page is rebuilt every month from ..." | "The numbers come from the federal permit count and the county's own data. The sections below have each number, its date and where it came from." | struck list |
| 9 | Summary table, Houses | 3,873 ... January to July 2026; 6,898 in 2025 | 4,978 ... January to September 2026; 6,511 in 2025 | 2, 5 |
| 10 | Summary table, Approved | "44,735 units in the unincorporated county's planning layer" | "44,732 units approved through the county's planning office" | 8 (verifier's scope wording) |
| 11 | Summary table, Hospitals | "Three with state licenses and not yet fully open: 48, 59 and 36 beds; ..." | "McLeod Carolina Forest, 48 beds, now open; two more licensed and not yet open, 59 and 36 beds; five free-standing emergency departments" | 11, 13 |
| 12 | Houses, 1st paragraph | FRED link; "... which is Horry County plus Brunswick County in North Carolina ..." | Census CBSA link; "... which is Horry County" (link to the OMB 2023 delineation file) "... The bars show each month's first count. The year totals below are the Census's own, which add late reports and corrections, so the bars do not add up to them exactly." | 1, 4, 7 |
| 13 | Permit table | 2024 7,152; 2025 6,898; Jan to Jul 2026 3,873; same months 2025 4,453; July 2026 562 | 2024 7,331; 2025 6,511; Jan to Sep 2026 4,978; same months 2025 5,171; September 2026 477; "3.7 percent below" | 2, 3, 5, 6, 7 |
| 14 | Layer paragraph | "On September 8, 2026 that was 44,735 units in the unincorporated county: ..." | "On November 9, 2026 that was 44,732 units approved through the county's planning office: ..." (date from the data file) | 8 |
| 15 | Layer, after the 811 sentence | (none) | "The most recent updates on the layer are from August 2026." | 9 CORRECTED (not "no record is dated later") |
| 16 | Pace sentence | "At the 2025 pace of 6,898 permits a year, the 44,735 approved units are about 6 years of building." | "The whole county permitted 6,511 homes in 2025, cities included. At that pace the 44,732 approved units are about 7 years of building. At the unincorporated county's own 2025 pace of 4,690 homes, they are about 9 and a half years." (link to the Census place file) | 5, 8, 10 and its note |
| 17 | Hospitals, 1st paragraph | "Three. The state's license list ..." | "Two. The third, McLeod's in Carolina Forest, is open to patients, McLeod announced on October 30, 2026. The state's license list ..." (rest kept) | 11, 12 CORRECTED |
| 18 | T_HOSP McLeod | "Ribbon cut August 27, 2026; the hospital says it opens this fall; about $90 million by its latest figure" | "Open to patients, McLeod announced October 30, 2026; ribbon cut August 27, 2026; $90 million by its own figure" (link to the Oct. 30 release) | 11, 12 |
| 19 | T_HOSP South Strand | "Ground broken February 9, 2026; completion reported for late 2027; about $220 million" | "Ground broken February 9, 2026 (linked to WMBF); no opening date from the system; $226 million in its 2025 plan (linked to the Grand Strand Health release)" | 13, 14 CORRECTED |
| 20 | Paragraph under the table | "McLeod cut the ribbon on August 27, 2026 on a four-story, 48-bed hospital in Carolina Forest, the first new hospital in Horry County since 2011." | "McLeod's four-story, 48-bed hospital in Carolina Forest is now open, the first new hospital in Horry County since 2011." (link to the location page; the ribbon date stays in the table) Rest kept. | 11 |
| 21 | FAQ homes | 6,898 / 3,873 / "The unincorporated county has 44,735 ..." | 6,511 / 4,978 / "The county's planning office has 44,732 ..." | 2, 5, 8 |
| 22 | FAQ hospitals | "Three hold state licenses. McLeod ... opens this fall. South Strand ... for late 2027. ..." | "McLeod Health Carolina Forest, 48 beds, is now open. Two more hold state licenses. South Strand Hospital, 59 beds, broke ground in February 2026, and the system has given no opening date. Tidelands ... 2028. Five free-standing emergency departments are open or under way." | 11, 13, 14 |
| 23 | FAQ "How often is this page updated?" | "Monthly. ..." | "How current is this page?" "The permit count runs to September 2026. The county's development layer was read on November 9, 2026, and its most recent updates are from August 2026. The county's permit map has not been updated since September 22, 2025." (all from the data file; the map sentence reads "is current" if the feed goes live) | 9 CORRECTED; permit feed re-read today |
| 24 | Sources | "Census permits, FRED" | "Census permits (CBSA files)", "OMB metro delineation, 2023", "Census place file, 2025"; added "McLeod Health, now open", "Grand Strand Health, 2025 plan" | 1, 2, 10, 12, 13 |

Left because no row covers it (old copy, not known wrong, kept): "two more hold state licenses" and the 36-bed count, Tidelands' 2028 target, the five free-standing emergency departments, and the license-list sentence ("updated August 31, 2026 ... each survived"). VERIFY items 3 and 4 ask for rows on these before they are restated; they need a researcher and verifier pass. "We read it by machine every month" in the permits section is outside this triage and stays. mkpage now adds an "On this page" list, which the old build did not have.

Gates: claims-scan 0; facts-check no sentence on this page (it owns the mcleod-carolina-forest fact); struck list 0 hits; score 87 before, 88 after; build.js check OK; audit no FAIL on this page (one WARN: 18 dates in body copy).
