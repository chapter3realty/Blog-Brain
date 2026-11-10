# Review 1: /invest/financing-multiple-rentals/

Reviewer: pass=false, score 8. Five blocking items and no nits. Fixer, 2026-11-10.

## Findings declined

None. One part was changed rather than done as written:

- **Carolina Forest photo.** The reviewer asked us to ask the photo partner for a street-level shot. The shot list is in BUILD.md (item 3), to go out from the owner's Gmail with the next group email. It was not sent from here: his address is with the owner, and helpers do not send mail. Until the new photo arrives, the NOAA aerial stays, because `critic.mjs` blocks a blog with no photo. It no longer sits alone in a section about how rent is counted. It now sits under the new "Why Carolina Forest works for a long-term rental" lines, and its caption says only what the frame shows.

## What changed (spec: website `specs/financing-multiple-rentals.js`; the version before this round is at scratchpad `rb1/invest-financing-multiple-rentals/spec-before-fix1.js`)

1. **HELOC section.**
   - It now opens with a yes and a next step: "Yes, from some lenders, but most applications for one here were turned down in 2025. Have a second way to reach your equity before you count on it."
   - The HELOC definition comes next, with row 42 ("A line of credit may also require that you live in the home.").
   - The counts are now a two-bar chart on a 0 to 100 scale (row 35, corrected wording): "On an investment home: About 6 in 10" and "On a home the owner lives in: About 4 in 10". Its title is "Lenders here turned down a larger share of lines of credit on investment homes". The 35 of 56 and the definition of an investment home are in the chart's note.
   - The "not reported" scope note is now in the sources line: "not all lines of credit are reported". The bare "17 lines of credit" sentence is cut.
   - The section ends with an offer: "Want to know what your equity could free up?", with the button "Send us both homes" to /contact/ (the hero button already says "Send us your two houses"). To keep the page calm, this offer replaces the equity section's offer, which sat right above it.
   - No "rare", no "few lenders", no "not on rentals". The struck-check is clean.
2. **Turned down section.** The paragraph that repeated the chart is cut. The chart title now says what to do: "The home itself was the reason lenders named most, so check it before you offer". The paragraph after the chart says how our agents check the home.
3. **Reserve card at 320 px.** At 420 px and narrower, the total line wraps. The label takes the full width, and the figure sits right-aligned under it. Both cards use this. Measured in the browser at 320, 390 and 1440 px: every figure ends 1 px inside the card's padding. Shots: `shots-fix1/card-res-320.png`, `card-cash-320.png`.
4. **Plain words.**
   - Short answer: "A cash-out refinance is a new, larger loan that pays off the old one and gives you the difference in cash." (new row 51, from FNMA B2-1.3-03).
   - Equity section: "The rules on this page are for a standard loan, the kind Fannie Mae or Freddie Mac buys from lenders."
   - Reserves section: "Fannie Mae is one of the two companies that buy standard loans from lenders, and this is its rule." (row 50, from the verifier's wording; never "most loans").
   - Rent section: "HUD is the federal housing department. Its figure is an estimate of rent plus utilities for a standard home in each ZIP." (row 47).
   - Worst case: "About $13,400 of rent, at $2,230 a month each, is not collected." It no longer says "at HUD's figure".
5. **Carolina Forest.**
   - New H3 "Why Carolina Forest works for a long-term rental", with two verified points:
     - "The example's $2,230 is about $500 more than HUD's 3-bedroom figure in central Myrtle Beach's ZIP, 29577 ($1,720)." (row 47)
     - "Under 1 percent of Carolina Forest's homes sit in FEMA's high-risk flood zone, against 16 percent in Myrtle Beach. In that zone, a loan from a federally regulated lender needs flood insurance." (rows 48, 49)
   - After the photo, a link to /invest/where-to-buy/ ("compares 11 areas"), so this page does not compete with the area comparison.
   - The strip's head is now "Carolina Forest houses that could be your second rental". BUILD.md gives the lead the head to use once `cf-rentals` exists: "Carolina Forest 3-bedroom houses you can rent out long term".
6. **New ledger rows** (facts.md 47 to 51, each VERIFIED-BY-FIXER with its source). 47 to 50 come from VERIFIED or CORRECTED rows of 2026-11-a ledgers (invest-where-to-buy 19 and 25, buyers-buying-in-myrtle-beach 48, invest-condos 25). 51 is from FNMA B2-1.3-03, re-opened today (HTTP 200). The spec reads 47 and 48 from `data/2026-11-a/invest-where-to-buy/` (hud-safmr-fy2027.json, findings.json) and checks them with `must()`.
7. **Sources line.** Added "FEMA flood zones" (Horry County GIS layer 19) and "flood law" (42 U.S.C. 4012a). Some names are shorter and the note is cut so the block stays under 90 words.

## Gates after the rebuild (`node tools/mkpage.js specs/financing-multiple-rentals.js`)

- `score.js --only` (SCORE_TODAY=2026-11-09): 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- `claims-scan.js`: 0 findings. `facts-check.js`: 0 on this page. `house-claims.js`: 0. `struck-check.js` with this page's struck list: no struck wording.
- Own check of every sentence in `<main>`: none over 28 words, no So, And or "Here is" openers, no em dashes.
- `node build.js check`: "Safe to deploy". `node build.js audit` on this page:
  - The two date lines are left for `build.js dates`, which this round must not run.
  - Two advisories: no Tim Nash quote (we write none), and 10 sentences over 22 words (none over 28).
- `critic.mjs` on preview port 8875, final build: 0 blocking and 0 warning at 1024 and 1440 px. The 390 px run was cut off by a 900-second timeout (page.error, "browser has been closed"), so it ran again alone: 0 blocking, 0 warning. The first run blocked on the HELOC chart's value "About 6 in 10 (35 of 56)", which ran 9 to 20 px past the card. The 35 of 56 moved into the chart's note.
- Shots looked at full size, in scratchpad `rb1/invest-financing-multiple-rentals/shots-fix1/`: the full page at 390, 1024 and 1440 px, plus cuts of the HELOC, rent and turned-down sections and both cards at 320, 390 and 1440 px.
