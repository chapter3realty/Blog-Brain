# Verification: /market-reports/july-2026/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. I opened every source myself and re-ran both data scripts on my own downloads.

## What I opened

- **MI**, `Coastal-Carolinas_MMI_2026-06.pdf`: downloaded 2026-11-10, HTTP 200, sha256 c6c6d073...19 (matches the ledger). Read pages 1 to 3, 5 to 8, 10, 12 and 13 with `pdftotext -layout`. Footer on every page: "Current as of July 10, 2026."
- **LU**, `July_2026_All_Cities.pdf`: HTTP 200, sha256 205af131...dd (matches). Header "Local Market Update – June 2026" on every page; 13 areas.
- **BPS**: the eight CBSA files, all HTTP 200, line for CBSA 34820. OMB delineation `list1_2023.xlsx`: the only 34820 row is Horry County.
- **CCAR MLS FAQ**, https://www.ccarsc.org/pages/mls-faqs/ (HTTP 200): "...you can be sure you're seeing every home for sale in Horry and Georgetown Counties."
- **API**: both queries re-run 2026-11-10 at 11:30 UTC: 154 and 469. The same totals.
- **Deeds** (row 19): `<web>/data/2026-10-d/sell-home-value/findings.json` `by_month` and `meta`. I re-added the monthly counts. I did not re-pull the county index.
- **NAR** (row 20): nar.realtor answers HTTP 200, but its release pages redirect to a page built by script, so I could not read NAR's own text. Several news reports of NAR's releases agree on the figures in row 20's note.
- **WMBF** (row 24): https://www.wmbfnews.com/2026/06/10/margaritaville-project-could-be-myrtle-beachs-first-new-coastal-condo-decade-developers-say/ now resolves (HTTP 200). I read it.
- **Scripts**: `RAW=<my downloads> python3 -I parse_june.py <my dir>` then `build_june.py`. Both ran to exit 0 with every assert passing. Their `ccar-2026-06.json` and `june.json` are identical to the files in the data folder.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 16: 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 21 |
| CORRECTED | 5: 2, 15, 17, 19, 22 |
| STRUCK | 1: 20 |
| Researcher's struck rows, confirmed | 8: 23 to 30 |

Struck list: `batches/2026-11-b/facts/market-reports-july-2026-struck.json`, 15 entries. Each entry fires on its own struck wording, and no approved wording fires any entry. On the live page's current text it finds 31 sentences, from rows 18, 20 and 23 to 30. `node tools/struck-check.test.js`: all controls pass.

## Rows

| # | Status | Note |
|---|---|---|
| 1 | VERIFIED | LU charts compare each area with a line labelled "Georgetown and Horry Counties". MI footer names only the MLS. The two counties come from the CCAR MLS FAQ (same as HUB 13). Use: "CCAR's figures are sales through the CCAR MLS, which covers Horry and Georgetown Counties." Do not write "only" or "every home": the Andrews area is ZIP 29510, which runs past the Georgetown County line. |
| 2 | CORRECTED | All cells match MI p. 1 to 3. But CCAR's 7.7 percent is for "All Properties". 1,127 + 498 = 1,625 against 1,056 + 452 = 1,508 gives +7.76 percent, which rounds to 7.8. CCAR's all-properties count is not houses plus condos, so it holds other property types too. Use: "Closed sales of all properties in CCAR's report were up 7.7 percent" [MI p. 1, June 2026]. Never print 1,625 as a total. |
| 3 | VERIFIED | MI p. 6 house column, July 2025 to June 2026: 1,074, 1,008, 1,046, 983, 843, 984, 656, 714, 915, 946, 1,064, 1,127. The highest is 1,127. The next is 1,074. Say "of the 12 months in the report", not "a record". |
| 4 | VERIFIED | MI p. 1 sentence, p. 2 and p. 3 cells, and the p. 8 definition, all as quoted. |
| 5 | VERIFIED | MI p. 2: $362,584 to $359,843, -0.8%. MI p. 3: $240,000 to $232,500, -3.1%. |
| 6 | VERIFIED | MI p. 8 bars. The layout puts two condo bars on one line, so I tested each value against the printed change line: 239,500 / 250,000 = -4.2%; 244,270 / 239,500 = +2.0%; 240,000 / 250,000 = -4.0%; 232,500 / 240,000 = -3.1%; 362,584 / 363,000 = -0.1%. All match. 232,500 / 250,000 - 1 = -7.0%. |
| 7 | VERIFIED | MI p. 7 definition as quoted. Bars checked against the change line: 123 / 112 = +9.8%; 132 / 102 = +29.4%. June 121 and 137; January to June 125 and 133. "The closing comes after" follows from the definition. |
| 8 | VERIFIED | MI p. 2, p. 3 and the p. 10 definition as quoted. The figure is an average of sale price to the last list price, before concessions. |
| 9 | VERIFIED | MI p. 12 bars and change line. 4,163 / 3,342 = +24.6%; 3,274 / 2,804 = +16.8%. The +27.1 and +81.8 percent for 2024 are CCAR's printed changes from June 2023; the 2023 counts are not printed. |
| 10 | VERIFIED | MI p. 13. 4.6 / 3.8 = +21.1%; 8.2 / 6.2 = +32.3%. |
| 11 | VERIFIED | MI p. 12 house column: +18.2, +13.2, +14.7, +10.1, +4.6, +4.6, +5.3, +3.7, +4.0, +1.8 (July 2025 to April 2026), then -1.6 (May) and -3.4 (June). Only May and June are negative. "For the second month in a row" is right. Row 25 stays struck. |
| 12 | VERIFIED | MI p. 3 and p. 5. Bars 429, 400, 486; 400 / 429 = -6.8%, as printed. "More than in June 2024" holds. Three Junes, not a record. |
| 13 | VERIFIED | MI p. 2: 982 to 1,060, +7.9%. |
| 14 | VERIFIED | MI p. 8 monthly table. Houses: lowest $350,000 (Feb 2026), highest $374,995 (Jul 2025). Condos: lowest $220,000 (Feb 2026), highest $248,000 (Nov 2025). All 24 values match `june.json`. |
| 15 | CORRECTED | The ZIP codes are right. LU: "ZIP Codes: 29572 and 29577" (Myrtle Beach), "29526 and 29527" (Conway), "29568 and 29569" (Loris / Longs), and "Area: 10B" (Carolina Forest). But "groups of ZIP codes" is wrong for Carolina Forest, which is an area code and not ZIP codes. Most areas are one ZIP code. The hub's verifier made the same correction to HUB 15, and this ledger put the old wording back (lesson B30). Use: "CCAR's areas follow ZIP codes or MLS areas, not city limits. Its 'Myrtle Beach' area is ZIP codes 29572 and 29577" [CCAR Local Market Update, June 2026]. |
| 16 | VERIFIED | Every cell matches the LU pages, both the January to June medians and sales and the June house medians. Myrtle Beach condos: $205,000 is January to June (June alone: $209,000, -13.3%). Label it January to June. LU's group is "Townhouse/Condo", so say "condos and townhouses" under the table. Small samples: June alone, Pawleys had 40 house sales and Surfside 54. |
| 17 | CORRECTED | The arithmetic is right: 1,133 + 901 = 2,034 of 5,422 = 37.5 percent, and the two medians are $311,000 and $301,120. "Every beach area" is wrong if Little River counts: its January to June house median, $349,900, was below the region's $359,843 (June alone: $357,500 against $359,945). "That is why" is also a cause the figures do not prove. Use: "More than a third of the region's house sales from January to June 2026 were in the Conway and Loris / Longs ZIP codes, where the middle house sold for about $301,000 to $311,000. The region's middle house price, $359,843, was below the middle price in Myrtle Beach, North Myrtle Beach, Surfside Beach, Garden City / Murrells Inlet and Pawleys Island / Litchfield" [LU and MI, January to June 2026]. Do not call Little River above the region. |
| 18 | VERIFIED | All eight files re-read. June 2026: 547 + 0 + 0 + 8 = 555. June 2025: 591 + 0 + 0 + 5 = 596. 555 / 596 = -6.9%. January to June 2026: 3,293 + 0 + 0 + 43 = 3,336. 2025: 3,518 + 2 + 12 + 47 = 3,579. 3,336 / 3,579 = -6.8%. May: 584 + 8 = 592 and 680 + 5 = 685, -13.6%. January to May: 2,753 + 35 = 2,788 and 2,931 + 2 + 12 + 42 = 2,987, -6.7%. CBSA 34820 is Horry County alone (list1_2023.xlsx). The month figure is the Census first count. January to June is the year-to-date file, with late reports. This is the same method /invest/what-is-being-built/ uses (WIBB rows 2 to 4). Do not add up the monthly bars. |
| 19 | CORRECTED | The numbers match `findings.json`: 2026-06 houses n 670, median 368,000; condos n 386, median 215,000. The other months' house counts run from 427 to 648, and 648 is October 2025. The 12 house counts add up to 6,866 and the condo counts to 4,181, which match `counts`. Two limits are missing. First, "house" there means every residential parcel with a building that is not a condo: houses, townhomes and manufactured homes on their own lot (`meta.condo_rule`). Second, "resale" means the seller did not match a builder. HV row 5 was "corrected", not "verified", and it covered the medians, not the ranking of counts. Use: "In Horry County deeds recorded in June 2026, 670 resales of houses, townhomes and manufactured homes on their own lot had a middle price of $368,000, and 386 condo resales $215,000. That was the most such resales of any recording month from October 2025 to September 2026" [Horry County Register of Deeds index, Chapter3's count]. FAQ only. Never compare it with CCAR's counts. |
| 20 | STRUCK | Wrong month, and a secondary source. CCAR's June report is "Current as of July 10, 2026", and its national paragraph quotes NAR's May 2026 release. News reports of NAR's releases agree: May 2026 median $429,300, up 1.3 percent from $423,700, later revised to $431,200. NAR's June 2026 median, released July 9, was $440,600. "$429,300 in June 2026, the highest for any June" is false. The live page's "the national median hit a June record" has no source in CCAR's text. NAR's own pages could not be read from this session. Cut the clause. A national figure is not needed on a local June report. |
| 21 | VERIFIED | MI footer as quoted. The live page's JSON-LD has "datePublished":"2026-07-19". `tools/mkpage.js` keeps the date already on disk (the `prevPub` lines, about line 104). No date is typed. |
| 22 | CORRECTED | Both counts confirmed on a re-run (154; 469; API `refreshedAt` 2026-11-10T11:30Z). The point 33.70882,-78.88539 is not downtown. It is the centre of the city's outline, the same point as the `town-myrtle-beach` place in `idx-places.json` ("the centre of the town's outline"). The filter is the feed's "Oceanfront unit" flag, so write "oceanfront", not "face the ocean". Use for the strip title: "Oceanfront condos for sale under $205,000 in and around Myrtle Beach". The circle is not CCAR's Myrtle Beach ZIP codes, so do not tie the strip's $205,000 to the ZIP-code median as if it were the same area. Never print the count. |

## Researcher's struck rows

| # | Status | Note |
|---|---|---|
| 23 | STRUCK (confirmed) | No rate, ever. The live dek's "permits and rates" goes too. |
| 24 | STRUCK (confirmed; WMBF now read) | WMBF, June 10, 2026: "Developers are calling it the area's first new coastal condominium offering in more than a decade". "Developers broke ground Saturday on the 271-unit Margaritaville Vacation Residences Myrtle Beach ... at 235 Fins Up Circle in Arcadian Shores". "According to BoardroomPR, prices start in the high $300,000s and the community is 25% sold so far." "Coastal" is not "oceanfront". "First in a decade" is the developers' claim, and "25% sold" is their PR firm's. Nothing here is a fact for a June data report. Keep it cut. |
| 25 | STRUCK (confirmed) | Row 11. May 2026 was already below the year before. |
| 26 | STRUCK (confirmed) | Row 15. Two ZIP codes, not the city. |
| 27 | STRUCK (confirmed) | Row 7. The days stop at the accepted offer. |
| 28 | STRUCK (confirmed) | None has a source in MI or LU. The live page's "Permit data is where the next year's supply shows up first, and it points down" and "New supply is slowing exactly as resale inventory stopped growing" are forecasts of the same kind. I added them to the struck list under row 18. |
| 29 | STRUCK (confirmed) | Dated report. |
| 30 | STRUCK (confirmed) | About the page. |

## Not to publish at all

- Row 20: the national price clause.
- Row 24: every Margaritaville line.
- Row 22's count, which changes daily.
- Any total of houses plus condos (row 2), and any sum of the monthly permit bars (row 18).
