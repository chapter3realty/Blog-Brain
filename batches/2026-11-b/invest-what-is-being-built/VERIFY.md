# Verify: /invest/what-is-being-built/

Independent verifier, 2026-11-09. I re-opened every Census file myself: the OMB list1_2023.xlsx, all 18 monthly CBSA files, the YTD and annual files, the county annual file and the documentation PDF. I re-queried the county layer at the tools/permits.js endpoint. I opened the two McLeod pages, the Grand Strand Health release and the WMBF report.

Counts: 11 VERIFIED, 3 CORRECTED, 0 STRUCK.

| # | Status | Finding |
|---|---|---|
| 1 | VERIFIED | CBSA 34820 is Horry County only. Brunswick County is in Wilmington (48900). 2023 is the newest delineation. |
| 2 | VERIFIED | 4,913 + 65 = 4,978 (cbsa2609y, posted 2026-10-27). |
| 3 | VERIFIED | 5,093 + 16 + 62 = 5,171. -3.73%. |
| 4 | VERIFIED | Both definitions are in cbsaasc.pdf. |
| 5 | VERIFIED | 6,511 in the CBSA and county files. The 2025 place file also sums to 6,511 across Horry places plus the unincorporated area. |
| 6 | VERIFIED | 7,331. |
| 7 | VERIFIED | The monthly c files give 2026 sums of 4,877, and 5,558 for Jan to Sep 2025. Aug 527, Sep 477. |
| 8 | VERIFIED | 44,732 / 29,704 / 15,028 / 1,486. Top ten match. Scope: see the FIX notes. |
| 9 | CORRECTED | One record, SAYEBROOK APARTMENTS (Surfside, COMPLETE, 0 units left), is dated "FEBRUARY 7, 2027". That is a future date and a typing error, so "no record carries a date later than August 2026" is false as written. Use: The most recent updates on the layer are from August 2026 (276 records). The 811 records and 10,621 units at February 1, 2019 check. |
| 10 | VERIFIED | 44,732 / 6,511 = 6.87, about 7 years. I found a better denominator: the Census 2025 place file (https://www2.census.gov/econ/bps/Place/South%20Region/so2025a.txt), "Horry County Unincorporated Area", 4,690 units. 44,732 / 4,690 = 9.54, about 9 and a half years. |
| 11 | VERIFIED | Location page: "McLeod Carolina Forest Hospital is now open ... four-story, 48-bed hospital is the first new hospital in Horry County since McLeod Seacoast opened in 2011." Release of 2026-09-01: "$90 million", and a ribbon cutting "on August 27". |
| 12 | CORRECTED | Found at the primary source: McLeod release https://www.mcleodhealth.org/news-entry/mcleod-health-carolina-forest-hospital-now-open/ , dated October 30, 2026: "McLeod Health Carolina Forest Hospital is now open to patients". It gives no separate first day. Use: McLeod announced on October 30, 2026 that the hospital is open to patients. |
| 13 | VERIFIED | $226 million, US 17 Bypass and Sheffield Parkway, 59 beds, four ORs. Published May 06, 2025. |
| 14 | CORRECTED | "No opening date from the system": verified. The groundbreaking rests on a news report only. WMBF, published 2026-02-09: "Construction began Monday on the new South Strand Hospital". No Grand Strand Health release was found. WMBF also says the system "expects to finalize the South Strand Hospital project sometime late next year". Keep the day only with WMBF as the cited source. Otherwise write "construction began in February 2026". |

Access note: mcleodhealth.org answers a plain request (200) but refuses a browser user-agent string (403). The researcher's "would not load" was likely this.

Struck list: `batches/2026-11-b/facts/invest-what-is-being-built-struck.json`. On today's page it fires seven times: "Updated monthly", "rebuilt every month", Brunswick County, "about 6 years", "about $220 million", and "late 2027" twice.

## FIX.md: planned sentences that go past their verified rows

1. Opening decision paragraph, section 6 ("Add after it: No record is dated later than August 2026.") and section 8 FAQ ("none of its records is dated later than August 2026"). All three are past row 9 as corrected. Use "The most recent updates on the layer are from August 2026."
2. Section 6, the pace sentence: "...the ${remaining} approved units, all in the unincorporated county, are about ${n} years". The layer does not call itself unincorporated. It is the county planning office's layer. City-approved projects such as Grande Dunes, Withers Preserve and Barefoot are absent, but 98 records are filed under MYRTLE BEACH, NORTH MYRTLE BEACH and CONWAY community names, for example Market Commons Villas. Write "approved through the county's planning office". Then "and longer at the unincorporated county's own pace" can carry the number: about 9 and a half years at 4,690 a year (row 10 note, Census place file). That needs the place file in the sources line and in permits.js if it is to update.
3. Section 7, first paragraph: "Two, and one more just opened." "Just" will go stale. Use row 12: "McLeod's opened in Carolina Forest; McLeod announced it open on October 30, 2026." The rest of that paragraph ("The state's license list, updated August 31, 2026, carries all three with their bed counts and their approval dates from 2021. Each was appealed by competing systems and each survived.") has no row in this ledger. It was not re-checked. Re-check it at the state license list before shipping, or leave it out.
4. Sections 2, 3, 4 and 8: "two more hold state licenses", "two more licensed and not yet open, 59 and 36 beds", "Tidelands Health Carolina Bays, 36 beds at SC 31 and SC 707, is projected for 2028", "Five free-standing emergency departments are open or under way". None has a row. The ledger says Tidelands and the emergency departments were not re-checked. Only South Strand's 59 beds is verified (row 13). These lines need rows before they ship.
5. Section 7, the T_HOSP South Strand cell: "Ground broken February 9, 2026". This is a news fact (row 14). Keep the WMBF link in the sources line, or write "construction began in February 2026".
6. Section 8, "How current is this page?": "The county's permit map has not updated since ${feed.max_issue_date}". The ledger says the Active Permits feed was not re-read this round. Run `node tools/permits.js` before the build so the date is today's reading.
7. Section 5, "Each month's figure arrives about four weeks after the month ends": supported by the directory dates (August file 2026-09-24, September file 2026-10-27). Fine.
