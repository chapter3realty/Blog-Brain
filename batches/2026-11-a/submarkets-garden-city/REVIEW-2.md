# Fix round 2: /submarkets/garden-city/

Batch 2026-11-a. Fixer, 2026-11-02. Every change is in `specs/garden-city.js`; the page was rebuilt with `node tools/mkpage.js specs/garden-city.js`.

## Blocking

| Finding | Change |
|---|---|
| Condo dues: the worked example did not answer its own question | The reviewer was right, and round 1 was wrong to decline it. The CRM's map API takes the site's own monthly HOA filter (`hoaMax`), though a pin carries no fee. New script `data/.../pull_hoa.py` queries the 72 condos in the Garden City area at every $10 step and records where each one first appears, so each fee is known to within $10. It saves only counts and medians (`hoa-findings.json`), no MLS numbers. Ledger row 48, VERIFIED-BY-FIXER: 35 ocean-side listings (part 1), about $790 a month at the middle, middle half about $610 to $910. All 72 condos carry a fee and the highest bracket is $1,370, so no fee looks quarterly or yearly. The worked example now has "Less condo dues, at the middle of 35 ocean-side listings (about $790 a month): $9,480", and the last line reads "Left for cleaning, management, utilities and the unit's other insurance: $26,100" (41,223 - 4,068.40 - 1,561 - 9,480 = 26,113.60; the shown figures give 26,090; both round to 26,100). A note under the table says the dues are what the listing agents report, gives the middle-half range, and says the building's own flood policy is paid out of them. "Condo dues" left the "Not in the table" list; "A special assessment, if the building charges one on top of the dues" took its place. The yearly cost table has a dues row too. The spec's `must()` checks row 48 and the new total. |
| Repetition (a): west of Business 17 out of the high-risk flood zone, four times | Cut from part 4. The flood section now opens on the east side only: "East of Business 17, much of Garden City is in FEMA's high-risk flood zone. In that zone a lender requires flood insurance:", and the table carries "West of Business 17: None". It is now in the short answer (the buyer's guide) and the table. |
| Repetition (b): the county line's distance in the FAQ | The FAQ answer is now "Both. The pier is in Horry County, and most of the beach road is in Georgetown County." The distance is in the Where section only. |

## Nits

| Finding | Change |
|---|---|
| Homes row at 390 shows "Just listed near Garden City, in Surfside Beach" with no homes | Still a shared file (`idx-lib/feeds.js`). Restated in NEEDS.md (round 2 note on item 10): the lead must fix it before the owner sees the page. |
| Part 1 "One sold for about $320,000" | Now "Condos here sold for about $320,000 at the middle in the past year." |
| Airbnb tiles do not multiply out | Added under the tiles: "Each figure is an average across all the listings, so the nights booked times the nightly rate does not come out to the income." |
| Three Census vacancy figures | Part 5's "about 1 in 6 homes along it had someone living in it" is cut; it now says only "This is the quietest stretch of the beach road" (row 9: 132 of 795 Georgetown-end homes occupied, against 552 of 2,584 on the Horry stretch). The winter section keeps "about 4 in 5 homes along Waccamaw Drive". The comparison table's column is now "Vacation homes, whole Census place", and the note under it says "Garden City's share counts the subdivisions west of Business 17 too, so it is lower than along the beach road." |
| "Not a town" five times, H1 included | Left as is. The H1 is the one the owner liked (NEEDS.md 3). The short answer states it; the Airbnb answer gives it as the reason no town ordinance applies; the comparison table and the FAQ ("Is Garden City part of Myrtle Beach?") each answer a different question with it. The reviewer called five acceptable. |
| Preamble, fixed items, declined items | No change. The reviewer accepted them. |

## Gates after the fix

- `node tools/mkpage.js specs/garden-city.js`: built (main 5,061 words).
- score.js (SCORE_TODAY=2026-11-02): 100/100.
- claims-scan: 0 findings on this page. facts-check: 0 on this page. house-claims: 0.
- critic.mjs on port 8780 at 320, 390, 768, 1024, 1440: 0 blocking. Warnings: read.wall on the FAQ at 390 and 320 (known), and at 320 the paragraph after the worked example (known from round 1, now "We get the unit's own dues ...").
- build.js check: OK. build.js audit: this page shows only the two date lines (the lead runs dates) and the A20 warning (no quote from a licensed person; we never write one).
- Shots looked at (390): the worked example table, the yearly cost table, the flood section and the comparison table. Each reads as intended. Scratch: `wf2/submarkets-garden-city/fix2/`.

## For the lead

- Re-run `pull_hoa.py` with `pull_listings.py` at build (row 48 is due 2026-12-02). Ocean-side condos were 35 today against 36 in row 18; the page's dues sentence uses the dues pull's own count.
- Row 48 rests on the CRM applying `hoaMax` to a monthly fee. The site's own filter labels it "a month", and no fee came back above $1,370, which fits monthly dues only. Re-check one listing's detail as a registered visitor if you want a second look.
