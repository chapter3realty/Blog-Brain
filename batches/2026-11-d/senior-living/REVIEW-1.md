# Review 1: /buyers/senior-living/ (fix round)

Reviewer: pass=false, score 8. Four blocking items, ten nits. All four blocking items are fixed in `specs/senior-living.js`. New facts are ledger rows 36 to 38 in `facts.md`.

## Findings declined or left to the lead

- **Photo nearer the top (nit).** Not moved. The aerial cannot show wheelchair access, so higher on the page it would only decorate. It stays beside the beach wheelchair lines, which now have their own subhead. The shot request for the photo partner is BUILD.md lead item 7. The owner's Gmail is not this fixer's to use.
- **Homes strips show their fallbacks (nit).** The two places are lead item 3. This page may not edit idx-places.json or idx-lib/.
- **Sibling overlap with the 55+ hub (nit).** Lead item 4 (cut the hub's CCRC section to a link here). It should ship in the same release. This page did not edit the hub.
- **Name check by an independent verifier (blocking item 2).** This run has no helper agent. I checked the 23 names myself against a fresh pull of the live DPH layer the same day: the same 28 records, names, towns and beds unchanged, every license current to 2027. Row 36 is marked VERIFIED-BY-FIXER. If the lead wants a second agent, it is one comparison of row 36 with the DPH layer.
- **"How to apply" for HUD apartments (blocking item 4).** hud.gov's program pages returned no text to this session. The page says what the apartments are, from HUD's own layer description (row 38). It links HUD's Resource Locator and says to ask the building's office about openings and who may rent. It gives no application steps that are not sourced.
- **Nursing home tile at 1440 (nit).** The tile row now spans 1,060 px. "Nursing home, shared room" wraps onto two lines, not four. That is left as is.

## What changed (round 1)

Blocking:
1. **Choices table at 1440.** Fixed column widths: 18, 34, 18 and 30 percent. The cost cells now wrap. "$31 an hour for a caregiver" is now "$31 an hour", and the continuing care cost is "An entrance fee; each campus has its own". The last column is about 215 px. Its header takes 2 lines and no cell takes more than 3. The phone cards are unchanged.
2. **Which homes, by town.** The count table is gone. Each town has a heading with its homes and beds, one line on the place, its nearest main hospital, and the licensed homes A to Z with Total Licensed Beds. The names come from the DPH layer in the data folder (row 36). They are read from `senior-living.json`, and the spec checks that each town's names add up to row 10. There is no rating and no order but A to Z. One note gives the drive-time method and links the state's map for licenses and addresses.
3. **Repetition.**
   - "$31" now appears 4 times: hero tile, short answer, the costs list and the table. The chart note no longer repeats it, and the buying-section line is cut.
   - "We get each home's current prices" is now once, in the costs section. The continuing care line is cut, the table cell is reworded, the FAQ answer says prices differ by home, and the memory care "we ask each home" line is cut.
   - The costs section opens with the chart.
   - The first offer box no longer restates $70,200.
4. **HUD apartments.** There is a new H3, "Apartments with HUD rent help". It says HUD pays subsidies to owners to keep rents affordable for people with low incomes, including older adults. It says these are rental apartments, and none is on the state's list of licensed care homes. Then come the counts by town in the verifier's corrected terms (row 27, with the disability clause, which passes struck-check), HUD's Resource Locator link, and "Ask the building's office about openings and who may rent there."

Nits taken:
- **Short answer:** names the comparison. Owning costs about $1,380 a year in county tax at 65 on a $400,000 house outside the city limits, against $70,200 a year for assisted living.
- **Story:** opens with "An agent at Chapter3 worked with a client household from New York." It keeps "one household's result, not a promise".
- **Filler line:** now "We show what you keep." The net proceeds page works out the cash left after the loan and closing costs. The capital gains page shows when the gain on a home you lived in is taxed.
- **Numbers:** the nursing home sentence is split in two. "Most have 80 to 122" is cut, since the bed counts are now listed by name.
- **Wow factor for each town:**
  - Each town names its nearest main hospital and minutes, from our measurement (row 37, carried).
  - Myrtle Beach and Pawleys Island name their continuing care campus.
  - Conway gives its drive to the beach.
- **Text wall in #buying:** the $31 line is cut, and a new H3, "The beach, by wheelchair", sits before the wheelchair lines. The critic shows no wall at 320.
- **Hero at 1440:** the tile row is widened to 1,060 px, so the four tiles fill the row.

## Gates after the fix

- **score.js:** 94/100. S5 (share image) and S8 (inbound links) are lead items. P2 is at 93% (3.7 numbers per 100 words). T2 is at 50%: one story.
- **Other checks:**
  - claims-scan: 0.
  - facts-check: 0 on this page.
  - house-claims: 0.
  - struck-check: no struck wording.
  - repeat-check --strict: passes.
  - structure-check --strict: passes.
- **build.js check:** OK.
- **build.js audit:** only "missing from sitemap.xml" and "orphan" are FAIL. Both are lead items.
- **critic.mjs** at 320, 390 and 1440 on preview port 8894: 0 blocking and 0 warnings. The preview is stopped.
- **Hard rules:**
  - No prose sentence over 28 words. No em dash, no sentence opening with "So", no "Here is".
  - No rate or payment, and Devin is not named in the copy.
  - Every request button goes to /contact/.
- **Shots:** `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/senior-living/fix1-shots/` (320, 390, 1440). The critic JSON is `.../nd/senior-living/fix1-critic.json`.
