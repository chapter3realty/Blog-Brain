
## Fix round 2 (2026-11-03): what changed for each finding

| Finding | Change in specs/rent-prices.js |
|---|---|
| Blocking (FIG-4): "see whether today's rent covers them" | Now "to see whether today's rent pays them". |
| Blocking (FIG-4): "Section 8 rentals covers the rules for landlords" | Now "The rules for landlords who take vouchers are on our Section 8 rentals page." |
| Blocking (FIG-4): "the survey holds too few rented houses" (bedrooms chart note) | Now "The survey has too few rented houses with two or four bedrooms for a firm figure." |
| Blocking (FIG-4): "The survey holds too few rented 4-bedroom houses alone" (FAQ and FAQPage schema) | Now "The survey has too few rented 4-bedroom houses alone for a firm figure." The schema is built from the same string. |
| Blocking (FIG-4): "its data runs to September 2026" (sources line) | Now "Zillow's data is through September 2026." The month still comes from the file. |
| Blocking (FIG-2): "One average rent mixes long tenants with new ones" | Now "An average of all leases includes long tenants on old rents, so it is lower than what the next tenant will pay." |
| Blocking (FIG-2): "Near the college, the month counts more for empty weeks than for the price" | Now "Near the college, the month you list makes more difference to empty weeks than to the price." |
| Nit: short answer and hero mix a new-lease house figure with old-and-new apartment figures | PUMS output has no new-lease apartment median, and no verified row, so I did not add one. The short answer now ends: "Those apartment figures count leases old and new, so a new lease costs more than that." (row 7 gives the gap for all renters.) The hero tile now reads "About $1,150, a 2-bedroom apartment, old and new leases". |
| Nit: map caption method talk | Now "Row 10, the north end of Myrtle Beach (29572), is the coast north of the city center." plus the map credit. |
| Nit (FIG-2): "Where the home is can change the rent by about $420 a month" | Now "The asking rent in the highest ZIP code is about $420 a month more than in the lowest." |
| Nit (FIG-2): "the next search for a tenant falls in the high months" | Now "so you look for the next tenant in the high months too." |
| Nit: byline date earlier than the data | Left to the lead's `node build.js dates` run. Not typed. |
| Vacancy figure, HOA limits, fee | No change. Reasons stand as in REVIEW-1. |

No new facts. No disagreements with the reviewers this round.

A grep of the built page for covers, holds, runs to, sits, sets, carries, counts more and mixes finds no copy hits (one CSS comment only).

### Gates after fix round 2

- `node tools/mkpage.js specs/rent-prices.js`: wrote the page, main 3,254 words, hero sub 21 words.
- `score.js --only /invest/rent-prices/` (SCORE_TODAY=2026-11-03): 100/100 (SEO, AEO, Human and Trust are each 100).
- `claims-scan.js` on the page: 0 findings. The 10 site-wide findings are on other pages.
- `facts-check.js` on the site: no hit on this page. `house-claims.js`: 0.
- `critic.mjs` on port 8782 at 390 and 1440: 0 blocking, 0 warnings (2,097 words, 2 photos, 7 other visuals, 12 internal links). JSON and shots: `scratchpad/wf2/invest-rent-prices/fix-r2/`.
- `node build.js check`: OK. `node build.js audit`: 0 FAIL on this page. The same three warnings remain: no boxed offer mid-page, no attributed sentence from Tim Nash, 12 sentences over 22 words.
- Shots: I looked at the 390 top (to the first H2) and the 1440 top. At 390 the apartment tile is now five lines, taller than the other two tiles, but it is readable with no overlap.
