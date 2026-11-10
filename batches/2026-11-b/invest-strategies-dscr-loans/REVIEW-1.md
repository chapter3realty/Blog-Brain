# Review 1: /invest/strategies/dscr-loans/ (batch 2026-11-b)

Reviewer, 2026-11-10: pass=false, score 8. Three blocking items and twelve nits. Fixer, 2026-11-10: every blocking item fixed in `specs/dscr-loans.js`, and every nit that was plainly right. This file lists what I declined and why, then what I changed.

## Declined or left for the lead

- **320 px read.wall warnings** (the short answer; "DSCR is short for..."). Not changed. Both are plain prose that reads fine, as the reviewer said. The rebuilt page has three more 320 px read.wall warnings of the same kind, for the same reason. The Longs section (1,001 px) lost its photo, and its strip is empty in the preview. The Carolina Forest section (1,032 px) and the condotel section (938 px, with the new definition) are also plain prose. Once the lead adds `withStrips`, the Longs and Carolina Forest strips break up those runs. Not blocking at any width.
- **Strips and edge feed not visible in the preview.** Not this page's to fix: `withStrips` and the two new places are in BUILD.md for the lead (items 1 and 2). Nothing on the page looks broken until then.
- **Cannibalization and answer placement.** No change needed. The reviewer found no conflict. I added one link out, to /invest/non-warrantable-condos/. It answers the building question, so this page does not take it on.

## What I changed (fix round 1)

Blocking:
1. **Worked-example table, 320 px overlap.** The last row's value is now "Lender's quote" (it was "Your lender's quote"). On a phone the amount cell can wrap (`white-space:normal; max-width:9.5rem`). Measured at 320: the label runs from x=47 to x=135 and the value from x=149 to x=273, with no overlap. The table still reads at 390 and 1440.
2. **Wow factor in all three place sections.** Each section now opens with one true, sourced place detail. The numbers follow it. Each detail is carried from a verified row and re-read at its source today (facts.md rows 44 to 46, marked VERIFIED-BY-FIXER):
   - Longs: "Longs: the Waccamaw River, and the most rent left for the loan". The Waccamaw is the only river that starts in a Carolina bay. From the landing on SC 9 you can paddle a state preserve along 28 miles of it, past bald cypress and water tupelo. Otters and black bears live there, and you may camp on the riverbank (WT S6, S7, T8). I dropped the raw-subdivision aerial: it showed bare lots beside farm fields and gave a reader nothing to want. Its licence record is gone from photos.json, from the credits and from the image schema.
   - Carolina Forest: "Carolina Forest: trails in the woods, and almost no houses in the flood zone". "The Hulk" has 7 miles of mountain bike and running trails through 72 wooded acres, between Carolina Forest and the Intracoastal Waterway (WT S16). The heading now says "houses", as the row 43 verifier asked. That also clears the H3 nit.
   - Garden City Beach: "Garden City Beach: the pier, and a beach condo that still passes". It has a 668-foot pier, with bands every night at both ends, weather permitting. In summer the fishing runs around the clock, and a pier pass covers the license (GC row 32, in the verifier's wording). The condo-and-marsh photo stays under it. "In the town" became "in Garden City Beach", because Garden City is not a town (GC row 1).
3. **Rent-split chart pointer.** The ▲ now sits on its own line, centred on the 100 percent tick, with "All the rent" centred under it. Measured: the tick and the ▲ are both at x=244 at 320 px, x=304 at 390 px and x=763 at 1440 px.

Nits taken:
4. **Hero tile.** "6% of value" is replaced by the page's own finding: "46 to 49%, of the rent left for the loan on an inland house". It is read from findings.json (rows 16 and 17), not typed.
5. **Repetition.** Cut the "Houses inland pass with room to spare" list item; the short answer, the chart and the two place sections still give those numbers. Cut "We filter out the places that ban renting..." from the Airbnb section; step 2 says it.
6. **Words a first-time reader will not know.** In the table, "at 201.0 mills" is now "A rental is taxed on 6 percent of its value, at the 2026 county rate for most homes outside city limits". The data check on the mills stays in the spec. "The zones whose names begin with R bar it, except RMV" is now "most of the city's residential zones bar it". "A TIN" is now "a U.S. taxpayer ID number from the IRS, called a TIN" in the body, and "a U.S. taxpayer ID number (TIN)" in the FAQ. "Non-warrantable" gets its plain meaning as the section's first sentence, carried from NW row 1 (facts.md row 47).
7. **Oceanfront sentence.** It is now two sentences: "Take a typical oceanfront two-bedroom in Myrtle Beach, booked the nights the average listing books. That average counts listings open only part of the year." Row 20's limits are kept.
8. **Condotel section link.** Added "Our non-warrantable condo guide goes tower by tower", linking to /invest/non-warrantable-condos/ inside `<main>`.
9. **Carolina Forest strip title.** Now "Best DSCR rental buys in Carolina Forest", bold in the owner's 11-10 style. It matches the lead's proposed DSCR feed head ("Best DSCR rental buys near Myrtle Beach"). The fallback pill is unchanged. BUILD.md is updated.
10. **Ratio scale at 320 px.** The phone drawing now runs from 0.7 to 1.3 on a 280-wide view box at 15 px type, so its words render at about 12 px at 320 (about 7 before) and 16 px at 390. The 1.15 and 1.25 labels still do not touch. The wide drawing is unchanged.

## Gates after the rebuild (`node tools/mkpage.js specs/dscr-loans.js`)

- `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/dscr-loans/`: **99/100** (SEO 100, AEO 100, Human 97, Trust 100). It was 98. Partial: P2 at 4.7 numbers per 100 words (a numbers page), and P6 for one "legal residence" (row 11's wording, kept).
- `struck-check`: no struck wording. `claims-scan`: 0 findings. `house-claims`: 0. `facts-check`: none on this page. The 4 wrong sentences site-wide are on the Massachusetts and Virginia pages and in llms-full.txt, as before.
- `critic.mjs http://localhost:8876 --widths 320,390,1024,1440`: **0 blocking** at every width. 0 warnings at 390, 1024 and 1440; five read.wall warnings at 320 (see above).
- `node build.js check`: OK. `node build.js audit` on this page: only the two mkpage date lines (they clear with `node build.js dates` at release) and the A20 warning.
- `inbound.js`: 16 referring pages.
- Every sentence in `<main>` is 28 words or fewer. There is no em dash, and no sentence opens with "So" or "Here is".
- New shots, looked at in crops (the table at 320, the scale at 320, the chart at 320 and 1440, the hero at 390 and 1440, all three place sections at 1440): `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/dscr-fix/shots/invest-strategies-dscr-loans-{320,390,1024,1440}.png`.

Files touched: website `specs/dscr-loans.js`, `chapter3realty/invest/strategies/dscr-loans/index.html` (generated) and `data/2026-11-b/invest-strategies-dscr-loans/photos.json`. In Blog-Brain: `facts.md` (rows 44 to 47), `BUILD.md` (hero tile, CF strip title, photo record, item 6 closed) and this file.
