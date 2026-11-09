# APPLIED: /buyers/relocating/weather/

Fixer, 2026-11-09. Source `data/relocating/pages/weather.js`, built with the assembler.

| Rows | Before | After |
|---|---|---|
| none | Title and schema headline: "Myrtle Beach Weather: It Snows About an Inch a Year" | "Myrtle Beach Weather by Month: Highs, Lows, Ocean Temperature" (61 characters; the FIX's "... and Ocean Temperature" is 64, over the 62 limit) |
| none | Description: "...season by season temperatures..." | "...month by month temperatures..." (150 characters) |
| none | H1 first line: "Myrtle Beach weather, season by season:" | "Myrtle Beach weather, month by month:" The italic "it snows about an inch a year." stays, and so does the snow section. |
| none | H2: "The four seasons, from the official station" | "Myrtle Beach weather month by month" |
| 1 to 12 | Four-row season table (January, April, July, October high / low, and a notes column) | Twelve-row table: Month, Normal high (F), Normal low (F), Rain (in.), Ocean (F), January 56 / 37 / 3.0 / 50 to December 59 / 40 / 3.1 / 54, exactly as in FIX. Caption under it: "Air: NOAA 1991 to 2020 normals, North Myrtle Beach airport, station USW00093718. Ocean: NOAA Springmaid Pier gauge, station 8661070, hourly readings averaged by us across 2024 and 2025." Font .85rem so it fits a 390 screen with no sideways scroll. |
| 13 | Annual line (72.7, 55.2, 48.47) | Unchanged; the months add to 48.47. |
| 14 | Water temperature table and the swim season note | Kept as they are, as the swim season summary. |

Notes:
- The old table's notes ("About 34 nights a year at or below freezing", "About 21 days a year reach 90") left the body. Both are still in the FAQ. A paragraph carrying them pushed the short answer to 168 words and the score down, so it was not kept.
- Step 4 (the MLS widget): the page's feed is now "Homes with a Carolina room" (`idx-lib/feeds.js`, set in the owner's 2026-11-08 commit), not the waterfront condos label the triage saw. It falls back to the walk-to-the-beach feed. Not changed: the owner set it. The feeds file is shared by every page.
- Every row verified. `node build.js dates` not run.
