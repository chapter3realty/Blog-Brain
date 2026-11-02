# Review round 2: fixes

Re-check: pass=false, score 0.86. One blocking item, four nits.

## Blocking

- **"Why would anyone buy here?" sent the reader away.** Fixed. New ledger row 34 (VERIFIED-BY-FIXER): Zillow's metro home value index for Myrtle Beach, the same series and figures as /invest/rental-returns/. The spec reads it from `research/invest-next/data/submarkets.json` and stops the build if the figures stop being 4.8, 6.1 and 1.7, so the two pages cannot drift apart. I re-downloaded Zillow's metro file on 2026-11-02 and recomputed the figures to July 2026: 4.77 percent a year over five years and 6.08 over ten, a match. The page now gives the number in three places:
  - Ratios section: "Prices in the metro rose about 4.8 percent a year over the last five years and 6.1 percent a year over ten, above our 3 percent target. Over the last three years they fell 1.7 percent in total. Our agents keep a list of investors who buy for a modest cash flow and that rise in price." The rental returns link now says it "breaks the rise down by area". It is not where the answer lives any more.
  - Short answer: "The rest is the rise in price: about 4.8 percent a year over five years, above our 3 percent target."
  - FAQ "Is Myrtle Beach a good place to buy a rental property?": the 4.8 percent, the 3 percent target, the 1.7 percent fall over three years, and the investor list.
  - Zillow home values added to the sources line. I shortened the two Clovered names so the line stays under mkpage's 90-word cap.
  - Note for the lead (also in row 34): Zillow's file now runs to September 2026. On the September figures, the five-year rate is 4.0 percent and the ten-year is 6.06. Both are still above 3 percent. When rental-returns is refreshed, refresh this page with it. The guard will stop the build until both are updated.

## Nits

- **Cash-on-cash had no target.** Taken. The card now says "With no loan, aim for the same 6 percent." This follows from the cap rate target: with no loan the two ratios are equal. No new target was invented.
- **Rows 30 to 33 need an independent re-mark.** The rows are unchanged. This is for the lead, and row 34 needs the same. Clovered's Oct 4, 2024 date and its homeowner-average-plus-15-to-25-percent basis are already in row 30's source cell.
- **critic warnings and the feed pill row at 390.** No change. These are shared tool and strip items (NEEDS 2, 5, 6).

## Gates after the rebuild

- score.js: 99/100. SEO 100, AEO 100, Human 99, Trust 100. P2 is at 74 percent (4.4 numbers per 100 words, up from 4.1). The new appreciation figures caused the rise, and they are the answer the reader asked for. A2, A7 and H2 failed after the first rebuild, so I trimmed the short answer and the FAQ answer until they passed.
- claims-scan, facts-check: no hits on this page. house-claims: 0.
- critic.mjs at 390 and 1440: 0 blocking. The 6 warnings are the same as in the re-check (read.line-height on the hero tile, and read.wall, which NEEDS 2 records).
- build.js check: OK. build.js audit, this page: only the two date lines that `build.js dates` sets (the lead runs it), and the same two soft notes.
- Shots: `wf2/invest-run-the-numbers/r2/ratios-390.png` and `ratios-1440.png` show the new line and the cash-on-cash footer. The header overlap in those shots comes from capturing a single element under the sticky header. It is not in the page.
