# VERIFY: /buyers/relocating/weather/

Independent verifier, 2026-11-09. I re-downloaded the NOAA monthly normals file for USW00093718 ("N MYRTLE BCH AP, SC US"), the annual normals file for the same station, and the CO-OPS hourly water temperature for station 8661070 for 2024 and 2025, and re-averaged the water by month myself.

Counts: 14 VERIFIED, 0 CORRECTED, 0 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 to 12 | VERIFIED | Every MLY-TMAX, MLY-TMIN and MLY-PRCP normal matches the row. The downloaded file is byte for byte the repo copy. Water: 8,784 hours in 2024 and 8,760 in 2025; every monthly mean and hour count matches (January 1,488 h, 50.1; February 1,365 h, 51.9; ... December 1,488 h, 53.6). Rounding in the FIX table is correct (August 86.5 to 87 and 72.5 to 73, rounding half up; September rain 6.65 to 6.7). |
| 13 | VERIFIED | The 12 rain normals add to 48.47. The annual normals file gives ANN-TMAX 72.7, ANN-TMIN 55.2, ANN-PRCP 48.47, matching the page's annual line. (The mean of the 12 monthly lows is 55.3; the page uses NOAA's own annual 55.2, which is right.) |
| 14 | VERIFIED | Every band on the page holds for the 2024 to 2025 means. May (74.5) and October (72.0) are the first and last months at or above 70. |

## FIX.md: planned sentences that go beyond their verified rows

None. The caption, the 12-month table and the swim season sentence are inside rows 1 to 14.

No struck list: no row was corrected or struck.
