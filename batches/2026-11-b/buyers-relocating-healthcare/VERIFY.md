# VERIFY: /buyers/relocating/healthcare/

Independent verifier, 2026-11-09. I opened the 2026 South Carolina State Health Plan (PDF), the Grand Strand Health release of May 6, 2025, the WMBF groundbreaking story (Feb 9, 2026), the MyHorryNews ribbon-cutting story (Aug 28, 2026), the MUSC release of Sept. 4, 2025, and the drive data file. www.mcleodhealth.org returns 403 to curl and does not resolve for the fetch tool; www.tidelandshealth.org returns 403. Both hosts would have to be allowed in the session's network settings to read the hospitals' own pages.

Counts: 4 VERIFIED, 2 CORRECTED, 3 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | STRUCK | Not verifiable. McLeod's page cannot be read here. A web search on 2026-11-09 found the ribbon cutting and "scheduled to open in the fall", and no report that patients are in the new building. Use option B. |
| 2 | VERIFIED | McLeod's release cannot be opened; the search index of McLeod's own release ("McLeod Health Carolina Forest Hospital Now Admitting Patients") gives "successfully completed the licensure survey for the first four beds and began admitting patients on Tuesday, January 21". The fact is already on the page. |
| 3 | VERIFIED | Release cannot be opened. MyHorryNews, Aug 28, 2026: "the ribbon-cutting ceremony of the four-story, 48-bed facility which is scheduled to open in the fall", at "Thursday's open house". August 27, 2026 was a Thursday. Print the ribbon cutting and the 48 beds; nothing about opening. |
| 4 | VERIFIED | State Health Plan: "Adopted July 1, 2026". Footnotes 8, 9 and 10 match word for word ("CON SC-23-54 issued 9/26/2023 for the construction of a new 48 acute care bed hospital" and the 59 and 36 bed ones); footnote 6 on CMC Carolina Forest matches. The Horry inventory shows McLeod Health Carolina Forest 48, South Strand Medical Center 59 and Tidelands Health Carolina Bays 36 licensed or approved beds, each with no 2024 patient days. |
| 5 | VERIFIED | Release dated May 06, 2025: quote matches, and "$226 million for South Strand Hospital". |
| 6 | STRUCK | No Grand Strand Health statement of the groundbreaking found. WMBF, Feb 9, 2026: "Construction began Monday on the new South Strand Hospital during the facility's groundbreaking ceremony"; "Grand Strand Health expects to finalize the South Strand Hospital project sometime late next year." Other reports say 2028. The fact can appear only as what local news reported, with no completion year. |
| 7 | CORRECTED | Site work and "late 2028" struck (Tidelands' page unreadable; news only). MUSC release, Sept. 4, 2025, opened: "Plans remain underway to develop Tidelands Health Carolina Bays Hospital". It is 14 months old. Safe wording: "In September 2025, MUSC Health and Tidelands Health said plans for it remained underway [MUSC release, Sept. 4, 2025]." Not present tense. |
| 8 | CORRECTED | Every median and every nearest-hospital count in the row matches `drives-houses.json` (pulled 2026-11-03, OSRM, 60 random detached houses per place). The wording is wrong in one place: the set is five hospitals, and it leaves out McLeod Health Carolina Forest, which has admitted patients since January 2025 (row 2) and sits inside Carolina Forest. For Carolina Forest homes, "the nearest hospital" is likely McLeod Carolina Forest, not Conway or Grand Strand (the 2026-11-a verifier measured Carolina Forest at 9.4 minutes with it added). Safe wording: "the nearest of five main hospitals: Grand Strand Medical Center, Conway Medical Center, Tidelands Waccamaw, McLeod Seacoast and McLeod Loris [our measurement, free flow]". |
| 9 | STRUCK | No emergency room measurement. The table is a hospital table only. |

## FIX.md: planned sentences that go beyond their verified rows

1. The count "six" (title, H1, dek, FAQ). Row 2 says McLeod Health Carolina Forest has admitted patients in four beds since January 2025, and the page says so. "6 Today and 3 New Ones Approved" counts it as a new hospital only. The lead decides; the true wording is: "Six hospitals serve Horry and Georgetown counties. The state has approved three more. One of them, McLeod Health Carolina Forest, has admitted patients in four beds since January 2025." (rows 2, 4)
2. South Strand: "Grand Strand Health is building it", "is going up on the US-17 Bypass" (FAQ) and "with the 59-bed hospital going up beside it" rest on news only (row 6). Safe: "Grand Strand Health plans a 59-bed hospital off the US-17 Bypass at Sheffield Parkway [release, May 2025]. Local news reported the groundbreaking in February 2026." (rows 5, 6)
3. Tidelands: "Tidelands Health and MUSC Health say plans for it are underway." Present tense on a 2025 statement. Use row 7's safe wording.
4. Tidelands campus sentence (kept): the 2026 State Health Plan lists "Tidelands Health Rehabilitation Hospital at Carolina Bays", 36 beds (CON SC-23-34). It lists no long-term acute care hospital at Carolina Bays. The long-term acute care half rests on WPDE news (2023). Keep the rehabilitation hospital; cut the long-term acute care hospital or find its CON.
5. Drive table caption "Minutes by car to the nearest hospital", column "Nearest hospital for most homes", dek "the drive to the nearest hospital from six towns", and the FAQ sentence "the nearest hospital is 6 to 13 minutes away": each must say "the nearest of five main hospitals" (row 8).
6. Note under the table: "The new McLeod Carolina Forest building is not in the count." McLeod Health Carolina Forest is not in the count at all, the four-bed hospital included. Write: "McLeod Health Carolina Forest is not in the count."
7. The free-standing emergency departments sentence: no row (the FIX says so). WMBF reports three planned ("expected soon in Murrells Inlet, Conway and Little River"), which is news only.

Option A stays unusable until someone reads McLeod's own page.

Struck list: `batches/2026-11-b/facts/buyers-relocating-healthcare-struck.json`. On the live page it finds 9 phrases ("would open to patients" twice, "broke ground" twice, "late 2027", "due late 2028", "Site work has begun", "has begun site work").
