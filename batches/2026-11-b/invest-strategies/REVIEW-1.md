# Review 1: /invest/strategies/ (batch 2026-11-b)

Reviewer: pass=false, score 8. Five blocking items, ten nits. Fixer, 2026-11-10. All changes are in the spec (`specs/strategies.js`); the page was rebuilt with mkpage. No date typed.

## Declined or left for the lead

- **320 px byline break ("Broker-in-" / "Charge").** The byline comes from the kit, not this page's spec. Out of this page's folders. The short answer's "$2,070 a month" break is fixed.
- **"Updated June 13, 2026".** Expected until the lead runs `node build.js dates` (BUILD.md item 7). Not hand-edited.
- **Garden City Beach photo with no Garden City Beach in the text.** The photo is the fallback of the strip "Best Airbnb opportunities in Garden City Beach". The strip goes live with the lead's idx-places change (BUILD.md item 1). No ledger row puts Garden City Beach in the short-term rental text, so I did not add one to fit the photo.
- **read.wall warnings (7, mild).** I cut the DST net-worth sentence and shortened the DSCR entry. Small multifamily stays near 1,000 px at 390 because its wall ends at the duplex strip, which is empty until the lead's change. Fix and flip and DST stay as short paragraphs under their own numbered headings. Cutting more would drop a local number.
- **The pairs section.** The reviewer called it fine as navigation. Left as is.
- **Row 9 (46 to 49 percent at the 1.25 ratio).** No longer printed. The must-check stays in the spec so a data change still stops the build.

## What I changed (round 1)

Blocking:
1. **Money section.** H2 "How much money do you need to start investing in real estate here?" is now "What does each way in cost here?" (contents label "What each costs"; anchor `#how-much` kept). Its answer sentence: "A DST share starts lowest, and a duplex to fourplex costs the most. The cash you need to start depends on the loan. Our DSCR loan guide has our affiliated lender's down payment figures for a rental." The paragraph after the chart is cut. Its DST line repeated entry 8. The quick-resale bar ("A house resold within a year (first price)") is cut from the chart, which now shows four bars. The bar's period note is cut too. The data file keeps the row; the spec filters it out and checks there are four bars.
2. **DSCR entry.** The ratio formula, the 46 to 49 percent band and "our 1.25 target ratio" are gone. The plain result comes first: "A house rented by the year fits it well. Take a middle-priced 3-bedroom house in Longs or Carolina Forest, outside city limits. Its tax, insurance and HOA dues take about a third of HUD's rent figure for its ZIP, which leaves room for the loan." The hard part is the oceanfront condo by the night (row 10), with "before any loan payment" added. The guide link now reads "works out the ratio on six typical homes here, from a Longs house to an oceanfront condo". The down payment pointer is said once, in the money section. New ledger row 42 (VERIFIED-BY-FIXER, DSCR rows 16 and 17: 30.7 and 34.4 percent).
3. **$2,070 said twice.** It stays in the short answer only. Entry 1 now says what a yearly lease means: "Its rent comes in every month, in winter as in summer." repeat-check strict passes.
4. **Filler first sentence.** "All six strategies with their own guide here happen on the Grand Strand." is cut. The section opens "DSCR purchases and 1031 trades are the most common we see here, and BRRRR is the rarest, because the right property is rare."
5. **Zoning jargon.** The short-term rental hard part now reads: "In the City of Myrtle Beach, a rental under 90 days is short-term, and most of the city's traditional neighborhoods are not zoned for it. Check the zoning before you buy." It links the city's page. "R" and "RMV" are left to the rules guide. New ledger row 43 (VERIFIED-BY-FIXER: the city's page re-opened live today, "Most traditional residential neighborhoods in the City of Myrtle Beach are NOT zoned for short-term rentals").

Nits taken:
- **DST:** cut "One way to qualify is over $1 million of net worth, not counting your home." The accredited-investors link explains it.
- **320 px:** "$2,070&nbsp;a&nbsp;month" keeps the number with its unit.
- **Small multifamily:** it leads with the picture: "Here, many of them stand near the ocean. Nearly 3 in 4 of the county's buildings of 2 to 4 homes on one parcel are within a mile of it, in a straight line." The scope is still row 20's (one parcel, straight line). I used "many", not "most", because row 20 leaves out duplex halves on their own lots. "Some buildings sold twice." is now part of the sales sentence: "58 sales of buildings with 2 to 4 homes in the past year, a few buildings twice".
- **1031:** "used up its depreciation" is now "stops giving him depreciation, the yearly tax deduction for a building's wear" (the story's own trigger). The story has its own paragraph. The "3 in 10 buyers from another state or country" line now sits with the link to the guide's state rules for a seller from another state.
- **Tax line:** "The 4 percent rate is only for the home you live in, once the county approves it. The rate is lost if that home is rented out more than 72 days in a calendar year." This puts back the 72-day loss from row 12's corrected wording. I kept "the home you live in", not "legal residence": score.js P6 lists "legal residence" as an industry term, and the county approval and 72-day clauses carry the verifier's limit.

## Gates (after the rebuild)

- `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/`: 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,809 words.
- `node tools/repeat-check.js <page> --strict`: passes; 0 identical or near sentences.
- `node tools/house-claims.js`: 0. `node tools/struck-check.js` (invest-strategies-struck.json): no struck wording.
- `node tools/claims-scan.js <wt>`: 0 findings. `node tools/facts-check.js <wt>`: the same 4 wrong sentences on 3 other pages as before, none on this page.
- `node build.js check`: OK. `node build.js audit`, this page: only the two mkpage date lines (dates, BUILD.md item 7) and the A20 warning, as before.
- No sentence over 28 words in the copy, no em dash, none opens with "So" or "Here is". Every button goes to /contact/ (8), plus the phone link.
- `node tools/critic.mjs http://localhost:8874 /invest/strategies/ --widths 320,390,1440`: 0 blocking at every width. 1440: 0 warnings. 390: 3 read.wall (small multifamily 1,007 px, fix and flip 978, DST 1,205; was 1,263). 320: 4 read.wall (1,203, 943, 1,174, 1,428).
- Shots, looked at: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies/shots-r1/invest-strategies-390.png`, `...-320.png`, `...-1440.png`. Short answer in the first screen at 320, 390 and 1440. The four-bar chart reads at a glance at 390. The DSCR entry and the STR hard part read in one pass.
