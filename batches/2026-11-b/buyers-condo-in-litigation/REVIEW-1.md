# Review 1: /buyers/condo-in-litigation/ (fix round)

Reviewer verdict: pass=false, score 8. Four blocking items and ten nits. The fixer worked only in `specs/condo-in-litigation.js` and rebuilt with mkpage. The spec as it was before this round is saved at `scratchpad/rb1/buyers-condo-in-litigation/spec-before-r1.js`. No new fact was added, so no row is marked VERIFIED-BY-FIXER.

## Declined or left for the lead, and why

- **The table cells still need a verifier's ruling (BUILD item 5).** A fixer cannot replace an independent verifier. The cells now say less than before: "Yes, if the lender finds it minor" claims nothing past rows 3 and 4. The lead should send the four table rows and the short answer's reason sentence to a verifier for a short ruling.
- **"Updated July 10, 2026" in the byline.** Only `node build.js dates` sets it. The lead must run it before shipping. `build.js audit` still shows the two date lines, and nothing else new on this page.
- **No proof in "When is a condo in litigation a good deal?"** The strongest proof is the owner's July deal (row 36). It is not in `stories/stories.json`, so it stays off the page until he answers BUILD item 3. No ledger row could stand in for it. The section now carries a second card (the 73 count) and a buyer's action, but the story is still the missing piece.
- **The USGS aerial in the "good deal" section.** It is the page's only lawful photo. The critic blocks a blog with no photo, and moving it next to Renaissance Tower would suggest it shows that building. It stays until the photo partner sends Grand Strand oceanfront towers with no named building (BUILD item 8).
- **The strip shows its pill.** The fix is the lead's: the myrtle-beach-condos place and `withStrips: true` (BUILD items 1 and 2). This round does not edit idx-lib/ or idx-places.json.

## What changed

1. **The hook's reason (blocking).** The short answer now gives the reason in plain words: "FHA loans usually cannot be used there, and a conventional loan works only after the lender finds the suit minor. That leaves fewer buyers to compete for each unit." This comes from rows 3, 4 and 10. Section 4 says it once, from the buyer's side: "With most FHA buyers out while the suit runs, there is less competition for each unit."
2. **Repetition (blocking).**
   - The repairs-done rule is now stated in full only in the minor list.
   - The table cell is "Yes, if the lender finds it minor".
   - Section 4's "A chance" item now tells the buyer what to do: "Before you offer, have a lender review the suit. If it finds the suit minor, a conventional loan can work there."
   - "Our building review on every condo purchase covers any lawsuit" is now only in section 3. The section 1 offer card dropped it.
   - "safety, structure, livability or use" now appears twice, down from four: section 1's first paragraph and the FHA FAQ. The minor-list intro says "touches none of the four things named above". The FHA paragraph says "the same four things as Fannie Mae's rule".
   - The FAQ "How long does condo litigation last?" is reworded: "From 7 to 14 years. In three Grand Strand condo cases we read in the court record, that was the time from the association's suit to the last ruling."
3. **The table at 320 px (blocking).** The cell is shorter (item 2). Below 420 px, each answer is one line of text with its label first ("Conventional loan: Yes, if the lender finds it minor"), not a narrow grid column. At 320 and 390, no word sits alone and nothing touches the card edge. At 1440 the table is unchanged and its longest cell takes three short lines.
4. **The timeline axis at 320 px (blocking).** Below 480 px the 2010 tick is hidden, leaving 2000 and 2020, which match the bar track. At 1440 all three ticks show.
5. **Table title (nit).** It is now "Which loans work, by kind of lawsuit".
6. **The MLS count (nit).** The count is now a card ("73 condos in buildings built in 2018 or later were for sale in the local MLS on November 10, 2026, out of 2,860 in all.", with the date from findings.json). It is followed by what it means for the offer: "A new builder suit is less likely there, but we still check the record for one before you offer." The card also breaks up the text block that the critic flagged at 320 px after the first edit.
7. **Strip title (nit).** It is now "Your Myrtle Beach condo, its building checked for lawsuits first" (glass.js allows 70 letters at most). It is true by row 37 and section 3.

## Gates after the rebuild

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-10 node tools/score.js --only /buyers/condo-in-litigation/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,698 words. T2 dipped to 50% when the FAQ lost "we read in the court record"; it was put back in other words. |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on this page |
| `house-claims.js` | 0 |
| `struck-check.js` (this page's list, and CB's, CF's, NW's) | no struck wording |
| `repeat-check.js --strict`, `structure-check.js --strict` | pass |
| Sentence scan of `<main>` | no sentence over 28 words. The only hits were labels and lists joined into one line, as before. No "So", "And", "But" or "Here is" opener, and no dashes. |
| `node build.js check` | OK |
| `node build.js audit` | only the two date lines (lead) and the attributed-quote note, as before |
| `inbound.js` | 6 referring pages |
| `critic.mjs http://localhost:8873 ... --widths 320,390,1440` | 0 blocking, 0 warnings (one wall warning at 320 after the first edit, fixed by the 73 card) |

Preview on port 8873 with `tools/preview.mjs`, stopped afterwards. Shots, looked at full size:
- Critic shots: `scratchpad/rb1/buyers-condo-in-litigation/shots-r1/`.
- Element shots: `scratchpad/rb1/buyers-condo-in-litigation/r1el/`. These are table, timeline, short answer and good-deal section at 320, 390 and 1440. The site header shows inside some element crops because it is fixed. That comes from the capture method; it is not on the page.
