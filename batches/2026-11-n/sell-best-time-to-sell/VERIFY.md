# Verify: /sell/best-time-to-sell/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. Every source was opened again today, and every data script was run again. The full note and the approved wording for each row are in `facts.md`, column 10. Struck wording is in `sell-best-time-to-sell-struck.json` in this folder. Its controls pass: each struck sentence fires its entry, and no approved wording fires any entry. It sits here, not in `batches/2026-11-n/facts/`, because this job may write only to this folder. The lead moves it there for `struck-check.js --batch`.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 8: rows 3, 7, 9, 10, 12, 13, 14, 16 |
| CORRECTED | 13: rows 1, 2, 4, 5, 8, 11, 15, 17, 18, 19, 20, 21, 22 |
| STRUCK | 1: row 6 |

The writer uses a CORRECTED row only in the "Use:" wording in its note.

## What was re-run

- **Deeds.** `analyze.py` was run again on the same raw files. The new `findings.json` is byte for byte the same as the one in DATA. I pulled two half-months again from AcclaimWeb (2022-09 16-30 and 2024-08 1-15, the storm weeks), and they match the raw files row for row. No search in `pull.log` hit the 5,000-row cap (Total equals rows in all 188 files).
- **Parcels.** I read 300 random parcels again from GIS layer 24. 299 are unchanged, and one has sold since.
- **Zillow.** I downloaded all nine metro files again. They are byte for byte the same as `raw/`. `zillow_months.py` gives the same averages, latest values and year-before values.
- **Other sources.** NHC climatology page, both NHC storm reports, both school calendars (plus the 2027-28 calendar), IRS Tax Topics 701 and 409, the BLS CES file and `data/str-market.json`. All were opened again.

## The main correction: condos counted as houses (rows 2, 4, 5, 11)

`analyze.py` (line 45) calls a home a condo only when the county's legal description says "HPR". In the parcel file, 11,272 parcels with county land use code 107 (condominium) have no "HPR" in their description. Many are oceanfront towers: Ocean Dunes Tower, Renaissance Tower, Grand Atlantic, Covenant Towers. The script counted them as houses. `/sell/home-value/` counts a condo as HPR **or** land use 107.

I ran the same script with that one change: `DATA/verify_condo_fix.py`, which writes `DATA/findings-condo-fix.json`. The change does not touch the all-home rows (1, 3, 14, 18, 19). It moves the house and condo rows:

| | Researcher (HPR only) | Corrected (HPR or 107) |
|---|---|---|
| Houses, 2021-2025 | 48,338 | 37,399 |
| Condos, 2021-2025 | 17,326 | 28,265 |
| House middle price, Jan-Oct 2026 | $325,000 | $353,000 |
| Condo middle price, Jan-Oct 2026 | $220,000 | $213,350 |
| House February vs months around it | -2.86, below 5 of 5 years | -2.15, below 3 of 5 |
| House July | +1.64, 5 of 5 | +2.15, 5 of 5 |
| House June | +2.85, 5 of 5 | +3.15, 5 of 5 |
| Condo April / May | +4.77 / +5.11, 4 of 5 | +3.69 / +4.30, 4 of 5 |
| Condo February | -5.34, below 4 of 5 | -4.92, below 5 of 5 |

The corrected house and condo prices now sit close to `/sell/home-value/`: $350,000 for houses and $215,000 for condos, in the 12 months to September 2026. Before the page prints any house or condo figure or chart, the lead changes the condo test on line 45 of `analyze.py` to match `verify_condo_fix.py` and runs `analyze.py` and `build_charts.py` again. The corrected values in facts.md come from `findings-condo-fix.json`.

## Every correction

1. **Row 1.** "Most homes change hands in March through June" is wrong. Those four months held 35 to 42 percent each year, which is under half. Over the five years they held 38.3 percent (25,170 of 65,664), more than any other four months in a row. In 2025, July to October (3,931) beat March to June (3,825).
2. **Row 2.** The house and condo split, as above. Parcel numbers are on over 96 percent of deeds each month from 2021 on, not 98 (lowest: March 2024, 96.8 percent). The reason given for leaving builders out has no source. The corrected wording uses the measured fact instead: builders' closings are spread more evenly over the year.
3. **Row 4.** Corrected house values (table above). February is below in 3 of 5 years, not 5. Even on the old split, July 2021 was +0.18 percent. That is level by the page's own 0.5 percent rule, so "above in four years" was wrong too.
4. **Row 5.** Corrected condo values: about 4 percent above in April and May, not 5. February is below in all five years.
5. **Row 6.** STRUCK. The measure is against the calendar year, not the months around it. It shows a February dip for builders (below the year in 4 of 5 years), not "no price season".
6. **Row 8.** "Longest for January closings" is cut. The file does not say whether a month's value is for the month the contract was signed or the month of the sale. The 36 to 42 day range stands.
7. **Row 11.** House and condo medians corrected (above). The all-home figures stand. `/sell/home-value/` owns prices, so link it rather than print a second house or condo price.
8. **Row 15.** One of the eight markets in `str-market.json` is Conway, which is inland, so "every beach market" is wrong. The note's "July, the month after the condo price peak" is also wrong: condos peak in April and May, and houses in June.
9. **Row 17.** The NHC page says "most activity", not "most storms", and it is about the whole Atlantic basin.
10. **Row 18.** August closings sold above the months around them in only 3 of 5 years. Say "on average".
11. **Row 19.** Debby was a 40-knot *subtropical* storm at its South Carolina landfall, "around Bulls Bay", not "Tropical Storm Debby ... at Bulls Bay". The counts, weekdays and weekly sums are right. The re-pulled index has no deed of any kind recorded on September 30, 2022 or August 8, 2024.
12. **Row 20.** The dates are right, but June 4, 2026 is past. This school year ends June 8, 2027, and the 2027-28 calendar (now posted) starts August 18, 2027. Both calendars list possible make-up days, so the last day can move.
13. **Row 21.** The row left out two conditions that Tax Topic 701 states. On a joint return, both spouses must meet the use test. The exclusion generally does not apply if it was used on another home in the 2 years before.
14. **Row 22.** "Only if" overstates Tax Topic 409. The same paragraph names exceptions: property received as a gift, and property received from a person who died.

## Could not be verified at the primary source

- **Zillow's definitions (rows 7, 8, 10, 12, 13).** `zillow.com/research/data/` returns 403 to curl and WebFetch with a browser user agent. The Wayback Machine cannot be reached from here. The numbers come from Zillow's own files and are verified. The meanings of "days to pending" and "days to close" match Detroit Open Data's copy of the files, which cites Zillow, but that is a secondary source. The page should state the measures as the corrected wording does and quote no Zillow definition.
- **Zillow's metro outline.** Zillow's "Myrtle Beach, SC" region may still include Brunswick County, NC. Keep "the Myrtle Beach area".

## Photos (PLAN.md)

| File | File page | Verdict |
|---|---|---|
| `Atlantic_Ocean_shoreline_in_Myrtle_Beach,_South_Carolina.jpg` | CC BY-SA 3.0, also GFDL 1.2+ ("You may select the license of your choice"). Author: Loadmaster (David R. Tribble). Taken 30 June 2014, 11:28. Description: "South Myrtle Beach, South Carolina." | **Usable.** Credit: "Photo: Loadmaster (David R. Tribble), CC BY-SA 3.0, via Wikimedia Commons". Viewed at full size: a girl in a swimsuit sits large in the lower right corner, close enough to be the subject there. The new crop must leave her and the nearest people out. Say "late June 2014" or "a June day", not "late June" as if it were this year. With row 4 corrected, the caption "the month after houses here sell highest" (June) holds. |
| `Hurricane_Ian_Makes_Landfall_Near_Georgetown,_South_Carolina_(CIRA_2022-09-30).png` | Commons tags it public domain as NOAA material. But the author line is "GOES imagery: CSU/CIRA & NOAA", and CIRA is part of Colorado State University, not a federal agency. CIRA's own page (satlib.cira.colostate.edu) returns 403, so its terms could not be read. | **Do not use.** The licence is not proven. The PLAN already leans to skipping it. |
| `Hotels_along_the_Grand_Strand_Beachfront_2.jpg` | CC BY-SA 4.0, DiscoA340, taken 14 August 2022. | Licence confirmed. Not used, as the PLAN says. |

## Claims that should not be published at all

- Row 6, builders show "no price season".
- Any house or condo figure from the current `findings.json` or `chart-months.json`, until the condo test is fixed and the files are made again.
- The CIRA Hurricane Ian image.
