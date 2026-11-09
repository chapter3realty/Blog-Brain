# FIX: /buyers/relocating/from-new-york/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 1 and step 2: "weighs home prices more heavily" is incomplete (row 4 CORRECTED: the index also applies a 0.92 constant to Myrtle Beach). Use the safe wording in VERIFY.md.
- Step 1, "Keep the rent and home value sentences": $342,000 and $737,000 are superseded Zillow values (row 5 CORRECTED). Site-wide refresh.
- Step 3, the sister page label: incomplete for the same reason as row 4.


Source: `data/relocating/pages/from-new-york.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here.

Decision (Claude decides): keep both numbers and name the index each time. The 17 percent is BEA's federal price index, the right figure for "how much cheaper is it to live". The calculator's 33 percent is our own buyer-weighted index, which counts home prices more; it stays on the calculator, labeled as ours. One figure per index, the same on both pages.

## 1. "What your New York sale buys here" (spec line 129; rows 1, 2, 5)

Old first sentence:
> Overall prices here are about 17 percent below the New York metro area, and housing about 44 percent below.

New:
> On the federal price index, overall prices here are about 17 percent below the New York metro area, and housing costs about 44 percent below. (rows 1, 2)

Add one sentence after the "everyday goods ... other services" sentence:
> Our cost of living calculator weighs home prices more heavily, so it shows a bigger gap for New York, about a third lower. Both point the same way. (row 4)

Keep the rent and home value sentences as they are (row 5; the Zillow revision is a separate refresh).

## 2. FAQ "How much cheaper is Myrtle Beach than New York?" (spec line 43; rows 1, 3, 4)

Old last sentence:
> A household earning $95,000 in the New York metro keeps the same standard of living here on about $79,000.

New:
> On that federal index, a household earning $95,000 in the New York metro keeps the same standard of living here on about $79,000. Our calculator, which weighs home prices more heavily, shows a larger saving. (rows 3, 4)

The first sentence already says "on the federal price index". Keep it.

## 3. The sister page (/buyers/relocating/cost-of-living/, for its own fixer)

Where the calculator shows "Cost of living ▼ 33% lower", the result note should say it is our buyer-weighted estimate, not the federal price index (row 4; README-coli.md: "It is not C2ER data and must never be described as such"). Suggested label under the result: "Our buyer-weighted estimate. Home prices count for more than in the federal price index." That page's own triage row already changes its example away from New York.

## 4. The "someone who deals with New York buyers weekly" paragraph (no fact)

Delete it. Every sentence in it is an implied quote or a claim about people (pace, directness, neighbors) with no story in stories/stories.json behind it. The section ends on the "town by town page" paragraph.

## 5. The MLS widget (no fact)

Rename "Homes people from New York love" to a plain label, for example "Homes for sale on the Grand Strand". No row says what New York buyers prefer. The label is set where the page's IDX block is configured; it is not a string in `from-new-york.js`.

## 6. Registry

Add the entry in `facts.md` ("Proposed registry entry") to `facts/registry.json`, with a firing and a quiet control in its test file, and read every hit on the live site before trusting it.

## 7. Build

Rebuild with the assembler and run `node build.js dates`.
