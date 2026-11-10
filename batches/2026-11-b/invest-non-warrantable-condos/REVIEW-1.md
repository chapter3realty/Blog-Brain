# Review 1: /invest/non-warrantable-condos/ (fix round, 2026-11-10)

The reviewer's verdict: pass=false, score 8. Three blocking items and nine nits. This file records what changed and why one nit was handled in a different way.

## Declined or changed from the reviewer's suggestion

- **The lawsuit rewrite.** The suggested sentence ("A suit over safety or structure that names the HOA or the developer stops the loan") changes the rule. Fannie Mae's test (row 8) stops the loan on any pending suit that names the HOA, unless it is minor. The safety or structure condition applies only to the developer. The page now says: "A pending suit that names the HOA stops the loan. A suit that names the developer over safety or structure stops it too." The comparison table's Fannie Mae cell now says "A suit naming the HOA, unless it is minor", so it no longer conflicts with the minor-suits line.
- **The timeshare H3.** Kept as written. VERIFY row 19 allows the wording, and the second sentence is about timeshare buildings in general. **For the lead: Tim Nash should read "Timeshare weeks and big owners" before it ships.**
- **Margate Tower's "tallest building in Myrtle Beach".** Kept, said once. The reviewer called it fine.
- **The byline date (July 25, 2026).** Not changed here. `node build.js dates` sets it, and this round may not run it. The lead should run it before the owner reads the page.
- **The page feed (CASH_OCEAN) and the three new places.** These are in idx-lib/ and idx-places.json, which this round may not edit. BUILD.md "For the lead" items 1 and 2 still hold.

## What changed (fix round 1)

New facts: rows 33 to 35 in facts.md, marked VERIFIED-BY-FIXER. The data is in website `data/2026-11-b/invest-non-warrantable-condos/`: `wow_lines.py` writes `wow.json` from `raw/wow/` (county parcel layer 24 and the Pine Lakes and Wikipedia pages, pulled 2026-11-10), CB's listing points and CB's FAA obstacle file extract. The distance method is CB row 79's. It gives Sands Ocean Club 0.202 mile, which matches the verified 0.20. The spec checks all of these values with `must()`.

Blocking items:
1. **Maisons Sur-Mer's wow.** Heading: "Maisons Sur-Mer: 24 floors up, near a course the PGA Tour played". First paragraph: "Maisons Sur-Mer rises about 300 feet on Shore Drive, with homes up to the 24th floor. It is under half a mile from the course of the Dunes Golf and Beach Club, which hosted the PGA Tour's 2026 Myrtle Beach Classic."
   - Sources: FAA DOF line 45-000344, 300 ft, accuracy 2 C. The county layer at that point returns only Maisons Sur Mer parcels. The county legal descriptions put units up to FL 24. The parcel edge is 0.373 mi away. The 2026 Classic wording is CB row 79's.
   - The owner-home share is now the second paragraph. "Second tallest" is not used: the next FAA lines are 287 ft, unverified, and inside the 20 ft error.
2. **Ocean Forest Plaza's wow.** Heading: "Ocean Forest Plaza: an indoor pool, near Myrtle Beach's first golf course". First paragraph: "Ocean Forest Plaza rises on the oceanfront with condos up to the 23rd floor. It is under half a mile from Pine Lakes, which opened in 1927 as Myrtle Beach's first golf course and is known as "The Granddaddy.""
   - Sources: pinelakes.com, quoted in row 35. The Pine Lakes parcel edge is 0.304 mi away and the clubhouse 0.407 mi. Unit numbers in the county records go up to 23xx.
   - The listing facts now lead with the pool and carry their day: "For January, there is the indoor pool. All 14 condos for sale on November 9 listed one and allowed pets, and 12 said the HOA fee pays the power bill." The day comes from building-fees.json `pulled` and is not typed.
   - The building's name is not tied to the old Ocean Forest Hotel (BUILD.md item 3).
3. **Sentences over 28 words.** All four are split:
   - (a) The business-space rule is now two sentences.
   - (b) The critical-repairs rule is now "Problems that could cause a failure within a year count. Unfunded repairs over $10,000 a unit due within 12 months count too, unless an owner makes them or a special assessment pays for them." The carve-out stays in the same sentence as $10,000, as struck row 9 requires.
   - (c) "...plan on about 25 percent down in a non-warrantable building. In a warrantable one, plan on about 20 percent. Figures from BrickWood Mortgage."
   - (d) The Freddie Mac line is now two sentences.
   - A text pass over `<main>` finds no sentence over 28 words. The sources note was also split.

Nits taken:
- **Wall at 320 px.** The BrickWood paragraph now has the H3 "Who makes these loans". A new 903 px wall at 320 px ran from the Ocean Forest Plaza entry to the table. To fix it, two paragraphs were tightened and the table's lead-in paragraph was folded into the caption.
- **Building counts.** The table caption is now "The 43 oceanfront buildings with a county count: ... on November 10, 2026". The VA line is now "At least 6 of the 47 buildings in our full oceanfront directory".
- **The Rental program column.** It now uses one form throughout ("10 of 11"). Caravelle's "44 of 45" cell matched struck row 17's pattern. This page's struck list (`batches/2026-11-b/facts/invest-non-warrantable-condos-struck.json`) now has `"unless": "^\\s*44 of 45\\s*$"`, which passes a cell that is only that count. The sentence form "In 44 of 45 buildings" is still caught.
- **Offer repetition.**
  - The section 6 button is now "Help me weigh a building".
  - The section 2 offer says "Tell us which building."
  - The end band says "Call ..., or tell us which one."
  - "Send us the building" now appears once in offer copy (the top bar) and once as the end band's button.
- **Sources.** Added "FAA obstacle file", which also covers Margate's height, and "Pine Lakes". The sources line is at most 90 words.
- **A struck pattern from the directory page.** CB's pattern "half a mile from the Dunes Golf" fired on the first Maisons draft. The sentence now says "from the course of the Dunes Golf and Beach Club", the measure CB approves.

## Gates (after the fixes)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/non-warrantable-condos/` | 100/100 (SEO, AEO, Human, Trust 100), 2,423 words |
| claims-scan, facts-check | 0 on this page |
| house-claims | 0 sentences |
| struck-check (this page's list, CB's, CF's, sell-my-condo's; and batch mode with the distance words) | no struck wording |
| repeat-check --strict, structure-check --strict | pass |
| `node build.js check` | OK |
| `node build.js audit` | only the mkpage date lines (dateModified and "Updated" against the sitemap; the lead runs `node build.js dates`), plus the two notes from build 1. The "sentence opens with So" line from a first draft is fixed. |
| `node tools/critic.mjs http://localhost:8875 /invest/non-warrantable-condos/ --widths 320,390,1024,1440` | 0 blocking, 0 warnings at every width |
| inbound.js | 19 referring pages |

Shots, looked at: the buildings section and the table at 390 and 1440 px, and the loans section at 390 px. The three entries now open on a place, and the table reads in one form.
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nwfix/shots/invest-non-warrantable-condos-{320,390,1024,1440}.png`
- critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nwfix/critic.json`

## For the lead

1. Offer the two new wow lines to /invest/condo-buildings/ as a second use, where Maisons Sur-Mer and Ocean Forest Plaza are table-only today.
2. Ask a verifier to re-check rows 33 to 35. They were found by the fixer.
3. BUILD.md items 1, 2, 4, 6 and 7 are unchanged. Item 3 is now done.
