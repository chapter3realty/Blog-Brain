# APPLIED: /buyers/relocating/from-new-york/

Fixer, 2026-11-09. Source `data/relocating/pages/from-new-york.js`, built with the assembler.

| Rows | Before | After |
|---|---|---|
| 1, 2 | "Overall prices here are about 17 percent below the New York metro area, and housing about 44 percent below." | "On the federal price index, overall prices here are about 17 percent below the New York metro area, and housing costs about 44 percent below." |
| 4 CORRECTED | (none) | After the "other services" sentence: "Our cost of living calculator [link] uses its own estimate. It prices housing partly from home values and is adjusted to match published cost of living indexes, so it shows a bigger gap for New York, about a third lower." (verifier's safe wording, not "weighs home prices more heavily") |
| 5 CORRECTED | "about $342,000 typical here against about $737,000 there, in July 2026" (body), FAQ "about $342,000 here against about $737,000 there", table "About $737,000 / About $342,000" | $339,000 and $725,000 on all three surfaces (Zillow's current file, column 2026-07-31: 339,406 and 724,590). The label stays "July 2026". |
| 3, 4 | FAQ last sentence: "A household earning $95,000 in the New York metro keeps the same standard of living here on about $79,000." | "On that federal index, a household earning $95,000 in the New York metro keeps the same standard of living here on about $79,000. Our calculator, which uses its own adjusted estimate, shows a larger saving." |
| none | "One pattern comes from someone who deals with New York buyers weekly. People arriving from the Northeast ... whether the move sticks." | Deleted. The section ends on the town by town paragraph. |
| 1, 4 | Registry | Added `rpp-ny-myrtle-beach` to `facts/registry.json` (the researcher's entry), with a firing and a quiet control in `tools/facts-check.test.js`. All controls pass. On the live site it fires on nothing: the only 25 to 39 percent hits are about other things (utilities, house price index). |

Left, and why:
- The sister pages (cost-of-living, the other from-* pages, `data/relocating/col-places.json`) still say $342,000 for Myrtle Beach. Refresh col-places.json for every page at once (row 5). Until then this page and from-ohio say $339,000 and the others say $342,000.
- Step 3 (the calculator's label on /buyers/relocating/cost-of-living/) belongs to that page's fixer. Suggested label, per VERIFY: "Our own estimate. It uses home prices for part of housing and is adjusted to match published cost of living indexes. It is not the federal price index."
- Step 5 (the MLS widget "Homes people from New York love"): not changed. It is the owner's own title pattern for every from-* page (`idx-lib/feeds.js`, "owner, 2026-10-26"), in a file every page shares. Owner's call.
- The rent sentence ($1,700 against $3,600) has no row in this ledger. It stays as it was.
- `node build.js dates` not run.
