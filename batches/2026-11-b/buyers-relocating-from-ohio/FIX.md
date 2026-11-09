# FIX: /buyers/relocating/from-ohio/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 2: the Columbus $333,000 and Cincinnati $311,000 figures (and the kept $342,000 and $254,000) are a superseded snapshot (row 2 CORRECTED). Use one month from Zillow's current file for all four.


Source: `data/relocating/pages/from-ohio.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here.

## 1. "Day-pairs" in plain words (row 1)

FAQ answer (spec line 39). Old:
> Holding an Ohio driver's license at any point in the year, spending 213 or more day-pairs back in Ohio, or missing the October 15 non-residency statement each keep Ohio's claim alive.

New:
> Holding an Ohio driver's license at any point in the year, spending 213 or more nights in Ohio, or missing the October 15 non-residency statement each keep Ohio's claim alive. (row 1)

Residency section (spec line 78). Old:
> Your days back in Ohio are counted, and at 213 or more the presumption becomes hard to beat.

New:
> Ohio counts your nights in Ohio. A night counts when you are away overnight from your home outside Ohio and in Ohio for part of both days. At 213 or more in a year, the presumption that you have left no longer applies. (row 1)

## 2. Columbus and Cincinnati next to Cleveland (row 2; row 3 is the check)

Comparison table row (spec line 66). Old cell: "Cleveland area about $254,000".

New cell: "Cleveland area about $254,000; Columbus area about $333,000; Cincinnati area about $311,000". Keep "About $342,000" in the South Carolina cell and keep the label "Typical home value, July 2026". (row 2: same snapshot, same month)

Paragraph (spec line 76). Old:
> A typical home here costs about $342,000 against about $254,000 in the Cleveland area, so the purchase itself is a step up for many Ohio buyers even though the tax rate on it is far lower.

New:
> A typical home here costs about $342,000. That is against about $254,000 in the Cleveland area, about $311,000 around Cincinnati and about $333,000 around Columbus, in July 2026. So the purchase itself is a step up for many Ohio buyers, even though the tax rate on it is far lower. (row 2)

FAQ (spec line 31). Old: "a typical house costs more than the Cleveland area". New: "a typical house costs more than in Cleveland, Columbus or Cincinnati". (row 2; also true on row 3's current figures)

Option, only if the lead wants figures the verifier can re-open today: use row 3's September 2026 column for all four (Cleveland about $250,000, Cincinnati about $306,000, Columbus about $327,000, here about $340,000) and change the label to "September 2026" on this page. Then this page differs from the sister pages' July figures, so prefer the snapshot until col-places.json is refreshed for every page at once.

## 3. Subtitle (no fact)

Set the italic "to Myrtle Beach." at the approved size (half the H1).

## 4. Build

Rebuild with the assembler and run `node build.js dates`.
