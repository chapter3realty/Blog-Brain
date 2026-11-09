# VERIFY: /buyers/relocating/from-new-york/

Independent verifier, 2026-11-09. I re-downloaded BEA's MARPP.zip (MARPP_MSA_2008_2024.csv) and Zillow's metro ZHVI file, and read `data/relocating/col-places.json`, `README-coli.md` and `calibration.json` in the website copy.

Counts: 3 VERIFIED, 2 CORRECTED, 0 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | VERIFIED | LineCode 1, 2024: Myrtle Beach-Conway-North Myrtle Beach 93.642; New York-Newark-Jersey City 112.563. 93.642 / 112.563 = 0.8319: 16.8 percent lower. |
| 2 | VERIFIED | LineCodes 2 to 5 match. Housing 44.1, utilities 30.7, goods 12.6, other services 7.1 percent lower. BEA housing is rents, not home prices. |
| 3 | VERIFIED | 95,000 x 0.8319 = 79,031. A price-level comparison only. |
| 4 | CORRECTED | Values match: coli 86.302 and 127.916; 32.5 percent lower; $75,000 to $50,601. The reason given is incomplete. README-coli.md: housing is "half the price ratio and half the BEA housing parity", and "A destination constant of 0.92 is applied to Myrtle Beach", fitted to published C2ER-derived figures (calibration.json). Without the constant Myrtle Beach would be about 93.8, and the gap about 27 percent. So the bigger gap is not only "home prices counted more heavily". Safe wording: "Our calculator uses its own estimate. It prices housing partly from home values and is adjusted to match published cost of living indexes, so it shows a bigger gap for New York, about a third lower [our model, README-coli.md]." Never call it federal or C2ER data. |
| 5 | CORRECTED | The snapshot matches col-places.json (342,010; 737,078), but Zillow's file no longer says it. Column 2026-07-31 today: Myrtle Beach 339,406, New York 724,590. Latest column 2026-09-30: 339,738 and 730,949. The page's "about $342,000" and "about $737,000, in July 2026" are superseded values. Refresh col-places.json and every sister page at once. |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 1, the added sentence "Our cost of living calculator weighs home prices more heavily, so it shows a bigger gap for New York, about a third lower." Use row 4's safe wording.
2. Step 2, "Our calculator, which weighs home prices more heavily, shows a larger saving." Same fix: "Our calculator, which uses its own adjusted estimate, shows a larger saving."
3. Step 1, "Keep the rent and home value sentences as they are": the home values are row 5, CORRECTED. They stay only until the site-wide refresh; they should not be called verified.
4. Step 3, the sister page label "Home prices count for more than in the federal price index": incomplete for the same reason as row 4. Suggested: "Our own estimate. It uses home prices for part of housing and is adjusted to match published cost of living indexes. It is not the federal price index."
5. Step 6, the registry entry: its fact and source hold (rows 1 and 4). The fixer still needs the firing and quiet controls.

Struck list: `batches/2026-11-b/facts/buyers-relocating-from-new-york-struck.json`. On the live page it finds the three $737,000 cells and sentences.
