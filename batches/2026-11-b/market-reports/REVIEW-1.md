# /market-reports/: fix round 1 (2026-11-10)

The reviewer's verdict was pass=false, score 8. This file lists what was changed, what was declined and why, and the gates after the rebuild.

## Blocking

1. **320 px: the month table was 348 px wide and the page scrolled sideways. Fixed.** The table now has prices only: Month, Houses, Condos, under the caption "Median sale price every month, October 2025 to September 2026". The section asks how prices changed month by month, so the two supply columns were off its question. Months of supply is now said once, in "How many homes are for sale". At 320 the table is 272 px wide (its container is 272), and the page is 320 px wide, with no sideways scroll. This is a different fix from the two the reviewer suggested (shorter headers or stacked cards). Both would have kept data the section does not need, so dropping the columns is the simpler fix.
2. **A fact said more than once. Fixed.**
   - The "September 2026 at a glance" table is gone. Its prices repeated the short answer, and its homes for sale and months of supply repeated the 2026 row of the three-September table. Its days and share of asking price now sit in a new table in "How long do homes take to sell". It shows January to September and "September alone" side by side, so 96.0% (the year) and 95.9% (September) are labelled next to each other and no longer read as two numbers for one thing. The section text gives no numbers: "Houses took about 4 months ... and condos a little longer."
   - "Condos sold for 95.9 percent of their last asking price in September" is gone from "Are prices dropping".
   - "How many homes are for sale" now opens with what changed: "Fewer houses were for sale at the end of September than a year before, and the same number of condos. Condos for sale would last almost twice as long as houses." The table holds the numbers. "Months of supply rose in 2024 and 2025" is cut, because the table's caption says it.
   - The FAQ answer on homes for sale no longer repeats the table's cells: "About 7,100 houses and condos ... the condos would last almost twice as long as the houses."
   - Counts in the visible text now: 95.9 once, 96.0 once, 3,855 once, 4.2 once, 7.5 once, 118 and 137 once each. $370,000 and $230,125 appear in the short answer, in the month table, in the FAQ, and on the line chart's end labels (four places, down from five).
   - Declined in part: $370,000 still appears in the FAQ and on the chart's end label. The FAQ answers the page's main search in its own words for answer engines, and the end label replaces a legend. The month table's September row is the chart's data.

## Nits

| Nit | What was done |
|---|---|
| Homes strip shows only the fallback pill | **Not mine to fix.** The place `mr-oceanfront-condos-cut` must be added to `idx-places.json`, which this page may not edit. It is still BUILD item 1 for the lead, oceanfront only, so it stays different from July's CONDO_CUT feed. The strip now has a reason and a wow line above it (see below). |
| Byline "Updated June 12, 2026" | **Lead step.** `node build.js dates` sets it; this round may not run it. `build.js audit` still lists the two date lines for this page. |
| Cannibalization: the H2 "Are Myrtle Beach home prices dropping?" | The renames on /submarkets/myrtle-beach/, /sell/home-value/ and /market-reports/july-2026/ are other pages, still BUILD item 3. **Done here:** the reports table links July as "July 2026 report" (its month column still says "June 2026 numbers"), so the link no longer hands July the hub's head words. This page's row reads "This page". |
| 1440 bar chart: bars from zero hide the fall; bold labels are unequal | **Fixed.** The chart is now a labelled dot chart: two short lines of three dots (2024, 2025, 2026), every dot labelled, each line named at its end, on the same $200,000 to $400,000 scale as the 12-month chart. The condo line visibly steps down. All labels have the same weight; only the two line names are bold. It is drawn once for phones and once for wide screens, and it fills the 720 px block at 1440. |
| 320: glance labels wrap one word a line | **Fixed by the change above.** The new table's labels are "Days to an accepted offer", "Share of asking price paid", "January to September" and "September alone". At 320 each one is two lines at most. |
| 320: line chart text 9 to 10 px | **Fixed.** The phone chart is drawn at 260 units wide with 13.5-unit text, about 12.4 px at 320 and 16 px at 390. |
| Buyer gap: why condo prices fell | **Fixed without a new claim.** After the chart: "Our condo guide compares how condo prices have done next to houses, over more years" (/invest/condos/). /invest/condos/ is also in "Related numbers on other pages". |
| Edge feed title | **Not mine to edit** (idx-lib/). BUILD item 2 now asks the lead to rename it to "Just listed on the Grand Strand this week". |

## Also changed (the owner's 2026-11-10 note: a wow factor wherever the page sells)

The strip in "Are prices dropping" sells oceanfront condos. The removed 95.9% line was replaced with two sentences, each from a verified row, each with a link to the page that owns it:
- The price-cut sentence: "Many condo sellers have already come down. In Horry County, more than half of the condos for sale on November 3 had cut their asking price, our buying guide found." This is row 18a, used as VERIFY allows, as the reason for the price-cut strip, with the link.
- The wow line, under the photo of the towers: "Inside the city of Myrtle Beach, nearly every condo for sale in an oceanfront building sits where the city allows nightly rentals." This is new row 21 (VERIFIED-BY-FIXER), from /submarkets/myrtle-beach/'s verified row 9. The spec reads the data file and throws if the share drops.

The section's paragraphs were put in a new order so the phone shows no wall of text, and "A median depends ..." now sits next to the chart it explains. Row 22 (VERIFIED-BY-FIXER) records the arithmetic behind the new wording (fewer houses, same condos, almost twice, about 7,100, a little longer). The spec checks each one.

## Gates after the rebuild (`node tools/mkpage.js specs/market-reports.js`)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-10 node tools/score.js --only /market-reports/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), up from 99. |
| `node tools/critic.mjs http://localhost:8872 /market-reports/ --widths 320,390,1024,1440` | 0 blocking and 0 warning at all four widths. One middle draft had a 906 px text wall at 320 in section 2; the paragraphs were reordered to fix it. |
| `node tools/claims-scan.js` | 0 findings. |
| `node tools/facts-check.js` | 0 on this page (the same 4 sentences on 3 other pages as before). |
| `node tools/house-claims.js` | 0. |
| `node tools/struck-check.js market-reports-struck.json` | No struck wording. |
| `node tools/repeat-check.js --strict` | Passes. |
| `node build.js check` | OK. |
| `node build.js audit` | On this page: the two date lines (they wait for `build.js dates`) and the A20 "~" note (we write no quote). |
| Sentences | Longest 27 words. No em dash. No sentence opens with So or "Here is". |
| `node tools/inbound.js --only /market-reports/` | 5 referring pages (BUILD said 6). This page lost none of its own links, so a change on another page caused the drop. BUILD item 5 (links from /sell/ and /sell/sell-my-condo/) covers it. |

Shots (looked at full size): `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/market-reports/fix1-shots/market-reports-320.png`, `-390.png`, `-1024.png`, `-1440.png`. Crops are in `.../rb1/market-reports/fix1-cuts/`, and the critic JSON is `.../rb1/market-reports/fix1-critic.json`. The spec and page before this round are saved as `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/market-reports.spec.before-fix1.js` and `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/market-reports.index.before-fix1.html`.

Files changed: website `specs/market-reports.js` and `chapter3realty/market-reports/index.html`; Blog-Brain `batches/2026-11-b/market-reports/facts.md` (rows 21 and 22), `BUILD.md` (lead items 2 and 4, plus a fix-round note) and this file. Not run: `build.js stitch`, `dates` and `llmsfull`. Nothing was committed or deployed.
