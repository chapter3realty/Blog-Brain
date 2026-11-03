# The rest of the 66 weak pages (owner, 2026-11-03: "keep on going to get all 66 fixed")

66 pages scored 25 or less out of 50 in `audit/judged-2026-10-31.json`. 20 are rebuilt (v1.24, v1.25, v1.26, v1.28). In progress on 2026-11-03: group 4 (5 pages) and the seven 2026-10-d pages (`workflows/finish-batch.js`). The other 34, in the order they will run:

| Group | Pages (judges' total out of 50) |
|---|---|
| 5 | /hoa/documents/ (22), /hoa/tax-deductible/ (22), /invest/property-management/ (22), /invest/rental-program-vs-airbnb/ (22), /sell/fsbo/ (22) |
| 6 | /sell/net-proceeds/ (22), /buyers/waterfront-homes/ (23), /hoa/benefits/ (23), /hoa/rental-restrictions/ (23), /invest/financing-multiple-rentals/ (23) |
| 7 | /invest/rental-depreciation/ (23), /invest/str-rules/ (23), /invest/str-tax-treatment/ (23), /hoa/who-pays-for-damage/ (24), /invest/strategies/small-multifamily/ (24) |
| 8 | /buyers/relocating/healthcare/ (25), /buyers/relocating/schools/ (25), /hoa/south-carolina-hoa-laws/ (25), /invest/landlord-insurance/ (25), /invest/non-warrantable-condos/ (25) |
| 9 | /invest/student-rentals/ (25), /sell/inherited-house/ (25) |
| By hand | /invest/long-term-rental/ (22): the rental analyzer's own page. The tool and its embed mode must not change; fix only the article around it (the 17 FAQ schema questions the page does not show, a real photo, small text). /market-reports/july-2026/ (23): a dated monthly report; fix its errors, do not rewrite its month. |
| Hubs | /, /buyers/, /sell/, /submarkets/, /guides/, /buyers/relocating/, /why-chapter-3/, /hoa/, /invest/strategies/, /market-reports/ (13 to 25). A hub is a guide to its pages, not an article: a short answer, the pages grouped by the reader's question, and fresh links to every rebuilt guide. One plan for all ten first, then build. |

Relocating pages are built from `data/relocating/pages/<page>.js` with `assemble-page.js`; upgrade them there.
