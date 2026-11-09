# REVIEW 1: /hoa/, the fix round

The review gave pass=false and a score of 8. It found 6 blocking items and 10 nits. This file lists what was declined and why, then what changed and the gate results.

Files changed in the website working copy: `specs/hoa.js`, `data/2026-11-b/hoa/photos.json` (the photo caption) and the built page `chapter3realty/hoa/index.html`. No other file was touched. No new fact was added, so no row is marked VERIFIED-BY-FIXER.

## Declined or handed on, with the reason

1. **Blocking: the sibling page and the registry row (PLAN 7).** The change belongs in `/hoa/hoa-vs-poa/` and `facts/registry.json`, and this round may touch only this page's files. It has to ship in the same release as /hoa/. What the lead needs to change:
   - `specs/hoa-vs-poa.js` line 296. Its FAQ "How much are HOA fees on the Grand Strand?" competes with this hub. Cut it, or answer it with one line and a link to /hoa/. If a figure stays, use this page's: about $650 for a condo and $290 for a townhouse, from `data/2026-11-b/hoa/findings.json`. Do not use $640 and $275.
   - Line 61 of the same spec has a `throw` that pins 640 and 275. It must move to the new source.
   - The body sentence "the typical fee on a condo for sale is about $640 a month" gets the same change.
   - Add the registry row `typical-hoa-fee-by-type`, owned by /hoa/, with source `data/2026-11-b/hoa/findings.json` and ledger row 1. Its values are a house about $95, a townhouse $290 and a condo about $650. A firing control is the hoa-vs-poa sentence with $640; a quiet control is this page's short answer.
2. **Nit: FAQ answers are folded behind + toggles.** Declined. The fold is the site's own script, which every page carries ("FAQ questions open on a tap"). The owner asked for it on 2026-11-08: "make the FAQ a drop down box to make the scroll bar less intimidating while keeping SEO benefit". That is newer than CRAFT 4's "Hide nothing", so the owner's word wins. The answers stay in the HTML. mkpage writes them as an h3 and a paragraph, and the script folds them in the browser.
3. **Nit: no homes strip of its own (`withStrips`).** Handed on. A `G.homes()` strip on this page would make the edge drop the condo feed under the opening, because `/hoa/` is not marked `withStrips` in `idx-lib/feeds.js` (BUILD.md). That file is outside this page's scope. If the lead sets `"/hoa/": { ...HOA_COVERS, withStrips: true }`, the spec can add one strip in the 55+ section (Del Webb at Grande Dunes) and one in "Lowest fees" (homes with a low or no fee). Both are one line each.
4. **Nit: the edge feed rendered empty in the local preview.** This is a preview limit. It shows the heading, the search and "See all homes" with no cards, the same as in round 0. Check it on the live edge after release.
5. **Nit, taken in part: the 55+ selling point "a home inland gets the Grande Dunes Ocean Club".** The sentence now says what the $20 means: the Ocean Club charge is collected from owners and passed on (rows 10 and 11, corrected wording). I did not write "inland", "gets the club" or "membership", for three reasons:
   - No row places Del Webb at Grande Dunes inland.
   - Row 11's verifier found no document that says the Beach Club (in the declaration) and the Ocean Club (in the budget) are the same club.
   - The struck list forbids saying the fee includes the club.
   A stronger line needs a new verified row. It should show that Del Webb at Grande Dunes owners may use the Grande Dunes Ocean Club, and where the club is.
6. **AEO A7 is now 80% (3 FAQ entries; the rule wants 4 to 8).** Accepted. The review asked that FAQ entries repeating a section be cut. The three left (regime fee, refusing to join, fees going up) are each said only in the FAQ. A fourth entry would need a fact no section holds, or would repeat one. The page score is still 99.

## What changed (round 1)

**Blocking 1: hero fact rows at 320 px.** The value now wraps under its label when the row is too narrow: flex-wrap on the row and `minmax(0,1fr)` on the grid. Before, the grid grew past the screen. Measured with the screen at 320 px, each row now runs from x=24 to x=296, so the gutter is 24 px. The house row stays on one line, and the condo and tower values wrap under their labels. From 360 px, all three fit on one line. The text "About $95 a month" is unchanged. Row 1's verifier asked for "about", and the condo figure is rounded.

**Blocking 2: the "What fees cover" table at 320 px.** Under 400 px the table uses a fixed layout. The item column is 27% of the width, the column headers are 13.8 px, and the card's side padding is 0.6 rem. Under 360 px the item column is 26% and the headers are 12.75 px. Measured at 320 px, the table runs from x=35 to x=285 inside a card from x=24 to x=296, and no cell's text overflows. It also fits at 340, 360, 390 and 768 px.
- **Nit, column labels.** One label at every width: "Oceanfront tower", "Condo off the ocean", "Townhouse" and "House". Soft hyphens break "Ocean-front" and "Town-house" on a narrow phone. "Other condo" is gone.

**Blocking 3: repetition. Each fact is now said once.**
- **No cap on dues** (row 27), and the recorded declaration requires each owner to pay (row 25): now only in the FAQ. Both lines were cut from "Lowest fees".
- **Regime fee:** now only in the FAQ. The body line was cut. The hoa-vs-poa link stays in the guide list.
- **Yearly figures:** now only under chart 1. The FAQ "Are HOA fees monthly or yearly?" was cut.
- **Typical fees:** now in the hero rows, the short answer and chart 1 only. The FAQ "How much are HOA fees in Myrtle Beach?" was cut.
- **"About ten times":** now only in chart 1's title.
  - The "Why are fees so high" section now opens with its answer: "Myrtle Beach's highest HOA fees are in the oceanfront towers. Most of a $940 tower fee goes to the building's insurance, its utilities and its upkeep."
  - The photo caption in `photos.json` is now "Houses and oceanfront towers on the same beach in Myrtle Beach."
- **The power bill:** now only in the short answer (and the table's Electricity row). The hero line was replaced with the 6 in 10 homeowners fact (row 8), which is no longer said in section 1. The first bullet was cut.
- **The four bullets after the coverage table:** cut, because the table says them. What stays after the table is the insurance paragraph (row 21), whose $2,000 and $800 are not in the table.
- **Also cut:**
  - Section 4's opening repeated chart 2's title. It is now "A house's fee goes to what the neighborhood shares."
  - "Myrtle Trace ... spends most of its money on its grounds, buildings, pool and lakes" repeated the budget list. It is cut.
  - "Del Webb at Grande Dunes spends the most on lawns" also repeated the list. It is cut, and the Ocean Club sentence now follows the lists.

**Blocking 4: the verifier's scope and method notes are out of the copy.**
- "Outside the Loris area" is gone from the body. The sources line now says: "Census figures are for owners living in their home in Horry County outside the Loris area." The live /buyers/cost-to-own/ page does the same in its sources line.
- The Census check is now a single sentence in the sources line, with its full scope: "There, owners of a one-family house who pay an HOA fee report a middle of about $90 a month." It is no longer in section 1.
- The 6 in 10 line (hero) reads "About 6 in 10 homeowners in Horry County pay an HOA or condo fee. In the rest of South Carolina, about 1 in 3 do."
- The insurance line reads "Owners of a one-family house here pay a middle of about $2,000 a year for it." It says "here", not "Horry County", so that struck row hoa 21 (Horry with $2,000 and no Loris) does not apply. The group is named in the sources line.
- The house medians by area were cut, because they count a no-fee house as $0 and read against the $95. These were the $125 in Carolina Forest, about $100 elsewhere and $75 in Conway.
- **Flag for the fresh verifier (CRAFT 8, step 4):** read the hero line and the insurance line against rows 8 and 21. Their scope now lives in the sources line, not in the sentence. The reviewer asked for this, and cost-to-own does the same, but no verifier has read it yet.

**Blocking 5: "Where are HOA fees lowest", the wall of text.**
- The section is now the intro, the area table and two short paragraphs:
  - houses: about 3 in 10 list no fee, and more than half list none in North Myrtle Beach and Surfside Beach;
  - age: 4 in 100 houses built before 1980 list a fee, against about 8 in 10 built in 2010 or later.
- The opt-out and dues lines moved to the FAQ.
- The one link to /hoa/dues-increases/ is now in the complaints section, after the SC HOA laws link: "How far an association may raise its fee is on our page on how much an HOA can raise dues."
- **Nit, ZIP codes in prose:** the sentence now says "North Myrtle Beach and Surfside Beach". The ZIPs stay in the table only.
- The area table's value header is now "Fee a month". Before, a wide header squeezed the area names into five lines at 320 px.

**Blocking 6: the sibling page and the registry.** Handed on; see Declined, item 1.

**Nits taken**
- **Chart 1 labels:** "half pay $70 to $135" now reads "the middle half pay $70 to $135". I did not use "most pay", because the range holds half the homes, not most.
- **$650 against $7,700:** the yearly condo figure is now 12 times the printed $650, so it is about $7,800. A `must()` checks that it stays within $100 of row 1's own $7,740.
- **The 55+ section:** the Ocean Club sentence now follows the two budgets. Moving it there also cleared a 984 px read.wall warning at 320 px.

## Gates (final build, round 1)

- `node tools/mkpage.js specs/hoa.js`: wrote the page. The hero sub is 25 words and main is 2,780 words. The sources line is under its 90-word limit.
- `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/`: **99/100** (SEO 100, AEO 98, Human 98, Trust 100). The two partials:
  - A7: 3 FAQ entries (Declined, item 6).
  - P2: 4.7 numbers per 100 words, as in round 0.
- `claims-scan.js`: 0 findings sitewide.
- `facts-check.js`: 0 on /hoa/. The 4 wrong sentences are on /buyers/relocating/ pages and llms-full.txt, as before.
- `house-claims.js`: 0.
- `struck-check.js --strict`: no struck wording.
- `repeat-check.js --strict`: passes.
- `structure-check.js --strict`: passes.
- `image-meta.js --only /hoa/`: passes.
- `npm test`: all controls pass.
- `critic.mjs http://localhost:8872 /hoa/ --widths 320,390,1024,1440`: **0 blocking, 0 warning** at all four widths. Round 0 had overlap.spill at 320 and read.wall at 320 and 390.
- `node build.js check`: OK.
- `node build.js audit` on /hoa/: only the two mkpage date lines, which `node build.js dates` sets, and the A20 note (no quote is written for Tim Nash).
  - One audit FAIL found in this round was fixed: "fee leaves" (personification, A22) now reads "The owner of a house buys its insurance apart from the fee."
- Text checks on main: no em dash, no sentence over 28 words, no opening "So", "And" or "But", no "Here is". "Devin" appears only in the byline.

I looked at the shots full size, in slices, at 320, 390 and 1440 px: the hero rows, the coverage table, the 55+ budgets, "Lowest fees", the FAQ and the sources line.
- Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/r1/shots/` (hoa-320.png, hoa-390.png, hoa-1024.png, hoa-1440.png).
- Crops of the two fixes: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/r1/glance-320.png` and `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/r1/cov-320.png`.
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/r1/critic.json`.
- Round 0 spec and page, kept for comparison: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/hoa.js.round0` and `index.round0.html`.

Preview on 8872 stopped.

Still needed before release (CRAFT 8): a fresh verifier on the reworded lines (the hero line, the insurance line, the Ocean Club sentence, the sources line), a new cold reader and the owner's-eye review.
