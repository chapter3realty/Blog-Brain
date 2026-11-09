# Fact ledger: /buyers/relocating/weather/

Researcher pass, 2026-11-09. Triage row (Light fix): add a 12-month table of normal high, low and rain from the same NOAA 1991 to 2020 station (USW00093718), next to the water temperatures already on the page. Title change and widget change need no facts.

Columns 8 and 9 are for the verifier.

## Rows 1 to 12: air normals and water temperature by month

Air: NOAA NCEI U.S. Climate Normals 1991-2020, monthly, station USW00093718, "N MYRTLE BCH AP, SC US". File opened 2026-11-09: https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093718.csv (fields MLY-TMAX-NORMAL, MLY-TMIN-NORMAL, MLY-PRCP-NORMAL). The same file is in the website repo, byte for byte: `data/2026-11-a/buyers-retirees/raw/noaa-monthly-USW00093718.csv`.

Water: NOAA CO-OPS station 8661070, Springmaid Pier, hourly water temperature, 2024 and 2025, averaged by month by us (the page's stated method). Files opened 2026-11-09: https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_temperature&station=8661070&begin_date=20240101&end_date=20241231&interval=h&units=english&time_zone=lst&format=csv&application=chapter3research and the same for 2025 (20250101 to 20251231). 8,784 rows in 2024 and 8,760 in 2025.

| # | Claim, as the page will state it | Value and unit | Source | URL opened | Verbatim cells (air: MLY-TMAX / MLY-TMIN / MLY-PRCP; water: hours, mean) | As of | Stale by | Verifier status | Verifier note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | January: normal high 56, low 37, rain 3.0 inches; water about 50 | 55.7 / 36.7 / 3.01 in; water 50.1 F | as above | as above | "01" row: "55.7", "36.7", "3.01"; water 1,488 hours, mean 50.1 (2024: 52.3; 2025: 47.9) | normals 1991-2020; water 2024-2025; read 2026-11-09 | normals: 2031 (next normals); water: 2027-03 | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 2 | February: 58 / 40 / 3.2; water about 52 | 58.2 / 39.6 / 3.18; 51.9 | as above | as above | "02": "58.2", "39.6", "3.18"; 1,365 hours, 51.9 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 3 | March: 65 / 45 / 3.6; water about 59 | 64.7 / 45.4 / 3.59; 59.0 | as above | as above | "03": "64.7", "45.4", "3.59"; 1,488 hours, 59.0 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 4 | April: 72 / 53 / 2.8; water about 67 | 71.8 / 53.3 / 2.77; 67.0 | as above | as above | "04": "71.8", "53.3", "2.77"; 1,440 hours, 67.0 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 5 | May: 79 / 62 / 3.0; water about 75 | 78.7 / 62.1 / 2.96; 74.5 | as above | as above | "05": "78.7", "62.1", "2.96"; 1,487 hours, 74.5 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 6 | June: 85 / 70 / 4.1; water about 80 | 84.8 / 70.3 / 4.07; 80.3 | as above | as above | "06": "84.8", "70.3", "4.07"; 1,440 hours, 80.3 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 7 | July: 88 / 74 / 5.4; water about 84 | 87.6 / 73.7 / 5.40; 83.8 | as above | as above | "07": "87.6", "73.7", "5.40"; 1,488 hours, 83.8 | same | same | VERIFIED | July 87.6 / 73.7 already on the page (FAQ). Verifier 2026-11-09: source re-opened; value holds. |
| 8 | August: 87 / 73 / 6.3; water about 83 | 86.5 / 72.5 / 6.25; 83.1 | as above | as above | "08": "86.5", "72.5", "6.25"; 1,488 hours, 83.1 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 9 | September: 83 / 68 / 6.7; water about 79 | 83.2 / 67.7 / 6.65; 79.0 | as above | as above | "09": "83.2", "67.7", "6.65"; 1,440 hours, 79.0 | same | same | VERIFIED | Wettest month on the normals. Verifier 2026-11-09: source re-opened; value holds. |
| 10 | October: 76 / 56 / 4.2; water about 72 | 75.6 / 56.3 / 4.20; 72.0 | as above | as above | "10": "75.6", "56.3", "4.20"; 1,488 hours, 72.0 | same | same | VERIFIED | Oct 75.6 / 56.3 already on the page. Verifier 2026-11-09: source re-opened; value holds. |
| 11 | November: 66 / 46 / 3.3; water about 64 | 66.4 / 45.6 / 3.29; 64.4 | as above | as above | "11": "66.4", "45.6", "3.29"; 1,440 hours, 64.4 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 12 | December: 59 / 40 / 3.1; water about 54 | 59.3 / 40.0 / 3.10; 53.6 | as above | as above | "12": "59.3", "40.0", "3.10"; 1,488 hours, 53.6 | same | same | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |

## Rows 13 and 14: checks against the page

| # | Claim | Value | Source | URL | Quote or arithmetic | As of | Stale by | Verifier status | Verifier note |
|---|---|---|---|---|---|---|---|---|---|
| 13 | The 12 monthly rain normals add to the page's annual 48.47 inches. | 3.01+3.18+3.59+2.77+2.96+4.07+5.40+6.25+6.65+4.20+3.29+3.10 = 48.47 | rows 1 to 12 | as above | Sum = 48.47, matches "48.47 inches of rain" on the page. | 2026-11-09 | | VERIFIED | Verifier 2026-11-09: source re-opened; value holds. |
| 14 | The monthly water means match the page's grouped wording ("around 50" Jan-Feb, "upper 50s to upper 60s" Mar-Apr, "mid 70s" May, "upper 70s to mid 80s" Jun-Sep, "low 70s" Oct, "mid 60s" Nov). | 50.1, 51.9; 59.0, 67.0; 74.5; 80.3, 83.8, 83.1, 79.0; 72.0; 64.4 | rows 1 to 11 | as above | All fall inside the page's stated bands. December (53.6) is not on the page now; the table adds it. | 2026-11-09 | | VERIFIED | A sibling file `data/2026-10-d/invest-str-tools/raw/noaa-months.json` holds 2022-2025 means (2 to 3 years). Do not mix it in: the page states 2024 and 2025. Verifier 2026-11-09: source re-opened; value holds. |

## Not verified

- Nothing for this fix.

## Questions only the brokerage can answer

- None.
