# Group 1: patch v1.25

Pages: /buyers/retirees/, /buyers/va-loans/, /hoa/liens-and-foreclosure/, /invest/run-the-numbers/, /submarkets/conway/. Patch: `website-patches/v1.25-retirees-va-liens-calculator-conway.patch`, after v1.24.

## The line

The workflow ran on all five: research, verify, build, one review by three lenses, one fix, one short re-check, and one last fix. The first review scored the pages 5 to 8. Conway passed its re-check. The other four each had one or two items open after the re-check, and the last fix closed them. The lead then read each one on the built page.

## The lead's own checks

1. **Facts the fixers added.** The fixers marked 36 rows VERIFIED-BY-FIXER, and nobody else had checked them. One independent verifier checked them all (`<slug>/FIXER-VERIFY.md`): 24 verified, 8 corrected, 2 struck. The lead applied every correction:
   - **VA:** entitlement and the COE; the funding fee by down payment band; what the VA appraisal checks.
   - **Liens:** "usually 30 days, the summons gives the time", in 5 places; who gets notice of the hearings; "plan for the sale to pay the association".
   - **Run the numbers:** an insurance agency's 2024 estimate was struck. The page prints no premium now: the calculator asks for the reader's quote, and the cap rates are before insurance (4.0, 5.2 and 1.4 percent). The price rise is dated to the data month (July 2026), from the data file.
   - **Conway:** city services are no longer tied to the city tax.
2. **Conway's Crabtree Swamp part.** 1,838 of its 2,387 homes are 2 to 4 miles or more from downtown. "Close to downtown" is gone; it now reads "north and northwest of downtown", with "most of them 2 to 4 miles out".
3. **Gates:**
   - `build.js audit` failed on three sentences: a "What you have left is" cleft, a "So" opener and a 29-word sentence. All three are fixed, and the audit gives zero blocking defects.
   - `check`: OK. `npm test`: every suite passes.
   - Scores: 99 or 100 on each page.
   - `struck-check`: clean on all five.
   - `claims-scan`: nothing new; the 10 old findings are all on the seven unshipped 2026-10-d pages.
   - `facts-check`: nothing new; its 9 old hits were already live.
4. **llms.txt.** The five entries are rewritten from each page's own title and description. The old Conway entry said "the lowest entry prices in Horry County", which the new data does not support.

## Open, for later

- /buyers/retirees/ says McLeod's Carolina Forest hospital "says it opens this fall" (row 63). Re-check that once fall ends.
- /invest/run-the-numbers/ and /invest/rental-returns/ both use the metro value index through July 2026. Refresh both pages together, so the two keep one value.
- Photos: `photo-request-group-1.md` is drafted and not sent, because Gmail is not connected.
