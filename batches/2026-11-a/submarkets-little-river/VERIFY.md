# Verify: /submarkets/little-river/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself, or re-ran its script from a fresh pull into my own scratch folder. The only inputs I reused are the 2026-10-d kept-sales file (verified in that batch) and the Conway findings for row 46 (verified by the Conway verifier).

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `submarkets-little-river-struck.json` (17 entries). Every entry fires on its struck text, and no approved wording fires. `node tools/struck-check.test.js` passes. The page as it stands in the working copy has no struck wording.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 29: rows 1, 2, 3, 4, 5, 6, 7, 12, 13, 16, 18, 20, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 35, 38, 39, 43, 44, 45, 46 |
| CORRECTED | 17: rows 8, 9, 10, 11, 14, 15, 17, 19, 21, 24, 33, 34, 36, 37, 40, 41, 42 |
| STRUCK | 0 |

## What I re-ran

- **County GIS.** I pulled the county layers into my own folder and ran `analyze.py` on them. Every number in `findings.json` is identical, except the run and listing times. I also re-ran it with the subdivision name merge widened (rows 11 and 33).
- **Deeds.** I pulled the AcclaimWeb DEED index for 2025-10-01 to 2026-09-30 myself: 30,339 rows, the same as the researcher. The slip sales reproduce. I also checked the home-sale medians from my own pull (row 25).
- **Listings.** I ran the CRM listing pull at 05:27 UTC. The counts and medians were identical.
- **FEMA.** I ran `pull_fema.py`. The counts and medians were identical. I tested 24 home points against FEMA's own flood map service (hazards.fema.gov): 23 agree with the county layer, and 1 timed out.
- **Drives.** I ran `pull_drives.py`. Every time and distance was identical.
- **Census.** I re-fetched P1, H1, H5, B25024, B25003 and B25064 for all seven places from data.census.gov. I compared the 2010 and 2020 CDP outlines.
- **HUD.** I downloaded `FY27_safmrs.xlsx` and read the FY2027 SAFMR methodology.
- **Pages re-read:**
  - Census glossary
  - 2026 levy sheet
  - SC Code 12-43-220
  - 42 U.S.C. 4012a and 4013
  - 33 CFR 117.911 (eCFR)
  - SCDOT historic bridge page and the 2025 schedule release
  - county parks page
  - NWS Hazel page and the SC Climatology Hazel report
  - county boat launch layer (live)
  - county short-term rental chart
  - county hearings release, SCDOT release and county RIDE 3 page
  - NCDOT project, highlights, history and archive pages
  - NCDOT/SCDOT public hearing summary and Alternative 4 map
  - Horry County Schools
- **Aerials.** I looked at the Esri World Imagery aerial with the county outlines drawn: 12 water houses, the sold water houses and the two swing-bridge landings.

## Every correction

1. **Row 8 (manufactured homes).**
   - North Pointe is about 125, not 117. The count adds North Pointe II (8).
   - "Every one is on a lot of its own" holds only for the homes the county taxes as real estate. In the same Census area there are 196 manufactured parcels. The Census survey counts 524 mobile homes there, with a 90 percent range of 248 to 800. So many sit on rented lots and are not in the count.
   - Use: "Of the homes the county taxes as real estate in the ZIP, about 1 in 20 is a manufactured home (757 of 15,613). Homes on rented lots are taxed apart and are not counted."
2. **Row 9 (Census survey).** The numbers are right. "Agrees" is wrong. On the same area, parcels give 2.1 percent and the survey 6.3 percent.
   - Use: "The Census survey, which also counts homes on rented lots, puts mobile homes at about 6 in 100 homes in the Little River CDP (between 3 and 10 in 100)."
3. **Row 10 (on the water).**
   - No condo parcel touches the water: 311 of the 353 are 5 to 15 m away.
   - The "Intracoastal Waterway" outline includes the canals.
   - Of the houses, 115 touch the outline, 36 are within 5 m and 11 are 5 to 15 m away.
   - Use: "About 150 to 160 of the 10,000 houses in the ZIP (about 1.5 percent) have a lot on the Intracoastal Waterway, a canal off it, or the Waccamaw River. Most homes by the water are condos: 353 of the 531 homes within about 50 feet of the water."
4. **Row 11 (three condo communities).** The name merge missed some spelling variants. The corrected counts:
   - Carolina Yacht Landing: 163 of 337
   - Mariner's Pointe: 76 of 146
   - Lightkeepers Village: 38 of 278

   The original counts gave 258 of 531 (49 percent), which is not "most". The corrected counts give 277 of 531 (52 percent).
   - Use "about half".
5. **Row 14 (Dock Holidays).** The $190,000 deed's index reads "A30 & A31", which is two slips. Drop it.
   - Use: 10 sales, $65,000 to $115,000, middle about $92,500.
6. **Row 15 (landings).**
   - Johnny Causey Landing is on the waterway bank, directly across from Campbell Landing (140 m apart). "On the Little River" is only the county's AccessTo field.
   - Use: "Johnny Causey Landing, across the waterway from Campbell Landing, has 2 ramps and 52 paved spaces and is just inside North Myrtle Beach."
   - Both landings are at a high-level bridge, not the swing span, which SCDOT's map centres about 1 km east. Do not write "near the swing bridge".
7. **Row 17 (swing bridge hours).** The 2025 deviation ended on October 31, 2025. It never closed the bridge.
   - Use the standing rule, 33 CFR 117.911(b): "The swing bridge opens for boats on signal, except on weekdays (not federal holidays) from 7 to 9 a.m. and 4 to 6 p.m., when it opens only on the hour and half hour."
8. **Row 19 (Hazel).** Cut "the strongest storm in the area's records". Neither source says it. The SC Climatology report says Hazel came ashore "near Little River", so the page can say that.
9. **Row 21 (flood zone and water).** The numbers are right. Use "the 531 homes within about 50 feet of the water", not "homes that touch the waterway".
10. **Row 24 (30-day wait).** 42 U.S.C. 4013(c)(2) also exempts a first purchase made within a year after a FEMA map change.
    - Use: "It can start sooner when it is bought with a home loan, or within a year after a FEMA map change puts the building in the high-risk zone."
11. **Row 33 (subdivisions).**
    - The lot sizes came from the county Acreage field. That field is filled for 2 of 434 Lafayette Park houses and 1 of 313 Hidden Brooke houses. By parcel outline, Lafayette Park's middle lot is 0.27 acre (about a quarter acre) and Hidden Brooke's is 0.17 acre. Strike "two-thirds of an acre" and "1.5 acres".
    - Hidden Brooke has 313 houses (12 resales, $389,500).
    - Carolina Yacht Landing has 337 condos (30 resales, $252,000).
    - "Highest middle prices" must say "with at least 5 resales". Shadowbay Village ($575,000, 3 sales) and Big Landing ($660,000, 1 sale) were skipped.
12. **Row 34 (acre lots).** The Acreage field is filled for only 1,768 of 9,995 houses. By outline, the middle lot is 0.20 acre, and 371 houses sit on 1 acre or more.
    - Use: "Fewer than 1 in 20 Little River houses sits on an acre or more (about 370 of 10,000). The typical house lot is about a fifth of an acre."
13. **Row 36 (HUD rents).** The figures are right. "Estimate of a typical rent" is wrong; the figure is HUD's Small Area Fair Market Rent.
    - Use: "HUD's 2027 Small Area Fair Market Rent for the Little River ZIP, which includes utilities, is ..."
14. **Row 37 (40th percentile).** HUD sets the two-bedroom figure from 40th-percentile rents, then sets the other sizes by metro bedroom ratios, with floors and caps. "About 4 in 10 such rentals cost less" is not supported for a three-bedroom.
    - Use: "HUD builds its figure from about the 40th percentile of rent plus utilities for standard two-bedroom rentals, then sets the other sizes with metro-wide ratios. It is a program figure, not a survey of three-bedroom rents in the ZIP."
15. **Row 40 (short-term rental filings).** The chart also requires a county personal property return, Form PT-100, due April 30. The chart says "short-term", not "by the night".
    - Use: "...a Horry County business license, a county hospitality and accommodations account, a state sales and accommodations tax account, and a yearly county personal property return for its furnishings (due April 30)."
16. **Row 41 (route).** NCDOT's Alternative 4 map runs northeast from SC 9, across Little River Road toward Hickmans Crossroads.
    - Use "passing north and northwest of Little River's old village", not "west side".
17. **Row 42 (schedule).** "Not scheduled" is wrong for South Carolina. The NCDOT/SCDOT public hearing summary (January 20, 2026) says the project is "currently funded in the SCDOT 2024-2033 STIP (Project P029554), with right-of-way acquisition planned to begin in 2026 and construction in 2028". North Carolina's part is not funded for right of way or construction.
    - Use: "It is not built. South Carolina's part is in SCDOT's 2024-2033 program, with land buying planned to start in 2026 and construction in 2028; North Carolina has not funded land buying or building for its part."

## Notes on verified rows the writer must keep

- **Row 5.** My scripted Treasurer search returned "No records", so I could not re-open a bill. The levy arithmetic is checked on the 2026 levy sheet. The $89.40 fee rests on affordable row 70, whose bills were verified on 2026-10-13.
- **Row 13.** The Lightkeepers sale is one parcel (SLIP O-8) by the index. The deed image would not load for me. Call it one sale.
  - The 13th Mariner's Pointe deed ($12,000) is a delinquent tax sale and is rightly left out.
- **Row 29.** One of the five water sales ($925,000) sits behind marsh, 14 m from the outline. Say "5 sold, from about $850,000 to $2.6 million", with the middle one.
- **Row 35.** Coastal Grand is 36 minutes, the airport 41 and Wilmington 73. Prefer those to 35, 40 and 75.
- **Row 38.** Call $2,100 "HUD's three-bedroom figure", not "the rent".
- **Row 44.** The county's own RIDE 3 page lists $125,000,000 for the extension. Do not say the county share "does not cover" the $186 million: SCDOT's program funds the South Carolina part (row 42).
- **Row 46.** The group is homes that are not HPR units, as the Conway verifier found.

## Not in the ledger, for the writer and lead

- **NCDOT's Level 1 toll study (April 28, 2026)** says the North Carolina part of the extension is proposed to be tolled. A new row is needed before the page says it.
- **Johnny Causey and Campbell landings** are 140 m apart across the waterway. A map label should show them as a pair.

## Photo candidates (PLAN.md)

PLAN.md names no Commons files, only searches to run. Commons answered me. Searches for the Little River waterfront, the swing bridge, Vereen Memorial Gardens, Coquina Harbour, and the Intracoastal Waterway at Little River found no usable picture.

Category:Little River, South Carolina holds six files:

- three photos of a county police precinct building
- a golf club (a business as the subject)
- a locator map
- a US 17 road photo

None fits the planned uses. The licence check therefore has nothing to pass.

The fallback V3 is the USGS NAIP aerial (`wf2/.../naip-waterfront.jpg`). I looked at it full size:

- It shows the Mariner's Pointe slip basin (the slip centre, -78.618, 33.868, is inside the frame).
- It shows the docks east of it along the waterway.
- NAIP is USDA imagery served by USGS, a US government work in the public domain.
- The builder must read the image year from the service before captioning and write the `tools/photos.js` record.

The partner's shot list stays the route to real photos.
