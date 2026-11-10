# Fixer rows, independent check: /invest/strategies/small-multifamily/

Verifier who did none of this research, 2026-11-10. Every source re-opened and every route re-run. Page read: the built page in the website working copy.

| Row | Status | Reason |
|---|---|---|
| W7 | VERIFIED | Foot router re-run (routing.openstreetmap.de, same points): 1,199.1 m (0.75 mi), 961.1 s (16.0 min), by Wedgewood Street, 63rd Avenue North and Ocean Boulevard to the sand. Straight line from the group's middle point (group-points.json 33.741, -78.834) to the nearest edge of the Census ocean polygon: 0.654 to 0.656 mi (about 0.7). Page: "From the middle of it, the beach is about a 15-minute walk." 16.0 minutes is "about 15"; the page says "from the middle of it", which is the measure's limit. |
| W8 | CORRECTED | Drive re-run (OSRM): 5.7 min, 2.09 mi, ending 39 m from the county address point 809 82ND PKY (re-queried, Myrtle Beach). Straight line 1.48 mi. The distance holds. "The region's only heart surgery program" does not: it is the hospital's own marketing line ("the only cardiac surgery program ... in the region", Grand Strand Health home page, re-read 2026-11-10), "the region" is not defined, and no second source agrees (verifier.md: a superlative needs two sources). The carried row, MB 47, is itself only VERIFIED-BY-FIXER, so the carry does not cover it. The hospital is a fair source for having a cardiac surgery program. |
| W9 | VERIFIED | ShrimpFest page re-read: "Historic Little River Waterfront 4468 Mineola Avenue Little River, SC 29566"; "2 stages of live music ... more than 200 different vendors"; "20th Annual ... October 10th and 11th, 2026". County Addresses layer 22 re-queried: 4460 MINEOLA AVE (33.87196, -78.61104) and 4472 MINEOLA AVE (33.87165, -78.61089). Straight line from the group's middle point (33.874, -78.627): 0.94 mi. OSRM: 4.2 min, 1.44 mi. Page: "The old Little River waterfront is about a mile from A Place at the River, about 4 minutes by car. Each October, more than 200 vendors and two stages of live music set up there for Little River ShrimpFest." |
| W10 | VERIFIED | OSRM re-run: 12.2 min, 5.96 mi, last waypoint 7th Avenue South. The end point (33.678503, -78.893255) is the nearest edge of the ocean polygon (7,980 m, 4.96 mi straight). A table run to 31 points along the Myrtle Beach coast gives 11.3 min (3rd Avenue South) as the quickest, so "about 12 minutes" to the nearest beach holds. No traffic. |

## Page sentence and replacement (not VERIFIED)

- **W8.** Page: "Grand Strand Medical Center, with the region's only heart surgery program, is about 6 minutes by car."
  Replacement: "Grand Strand Medical Center, a hospital with a heart surgery program, is about 6 minutes by car." [OSRM, no traffic, from the group's middle point; the hospital's own page for the program]
  Struck-list entry added: `batches/2026-11-b/facts/invest-strategies-small-multifamily-struck.json`, row "smf W8". It fires on the page sentence and not on the replacement.

Not in this page's scope, flagged: /submarkets/myrtle-beach/ prints the same "region's only heart surgery program" from MB 47, which is also only VERIFIED-BY-FIXER.
