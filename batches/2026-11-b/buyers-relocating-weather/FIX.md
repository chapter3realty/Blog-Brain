# FIX: /buyers/relocating/weather/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- None. Every planned sentence is inside rows 1 to 14.


Source: `data/relocating/pages/weather.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here.

## 1. Title and headline (spec lines 42 and 44, no fact)

`'Myrtle Beach Weather by Month: Highs, Lows and Ocean Temperature'`. Keep the snow fact as its own section ("It snows about an inch a year, and twice lately it mattered"), as it is now.

Description (line 43) can stay: it now matches the page.

## 2. Replace the four-season table with a 12-month table (rows 1 to 12)

Section "The four seasons, from the official station". Change the H2 to "Myrtle Beach weather month by month". Keep the intro paragraph ("These are 1991 to 2020 normals from the North Myrtle Beach airport station ...").

Replace the four-row table with this one. Round to whole degrees and one decimal of rain, as below. Water is the Springmaid Pier mean for 2024 and 2025.

| Month | Normal high (F) | Normal low (F) | Rain (inches) | Ocean (F) |
|---|---|---|---|---|
| January | 56 | 37 | 3.0 | 50 |
| February | 58 | 40 | 3.2 | 52 |
| March | 65 | 45 | 3.6 | 59 |
| April | 72 | 53 | 2.8 | 67 |
| May | 79 | 62 | 3.0 | 75 |
| June | 85 | 70 | 4.1 | 80 |
| July | 88 | 74 | 5.4 | 84 |
| August | 87 | 73 | 6.3 | 83 |
| September | 83 | 68 | 6.7 | 79 |
| October | 76 | 56 | 4.2 | 72 |
| November | 66 | 46 | 3.3 | 64 |
| December | 59 | 40 | 3.1 | 54 |

Caption under the table: "Air: NOAA 1991 to 2020 normals, North Myrtle Beach airport, station USW00093718. Ocean: NOAA Springmaid Pier gauge, station 8661070, hourly readings averaged by us across 2024 and 2025." (rows 1 to 12)

Keep the annual line after it ("72.7 high, 55.2 low, 48.47 inches of rain ..."). Row 13: the months add to 48.47.

The four season notes in the old table ("Ocean already in the upper 60s by late April" and the others) can move into one short paragraph under the table, or go. They add no fact the table lacks.

## 3. The water temperature table

The 12-month table now carries the ocean column. The separate "Water temperature" table (January and February "around 50" ... November "mid 60s") can go, or stay as the swim season summary. If it stays, keep its words as they are (row 14: every band matches). Keep the sentence on the swim season: "The bracket marks May into October, when the water is at or above 70 degrees ...". Row 14: May 75 and October 72 are the first and last months at or above 70.

## 4. The MLS widget (no fact)

Change the widget "Waterfront condos in Myrtle Beach and North Myrtle Beach" to a general search ("Homes for sale on the Grand Strand"). The label is not in `weather.js`; it is set where the page's IDX block is configured. The fixer finds it there.

## 5. Build

Rebuild with the assembler and run `node build.js dates`.
