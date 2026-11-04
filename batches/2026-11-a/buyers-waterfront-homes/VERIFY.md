# Verify: /buyers/waterfront-homes/ (batch 2026-11-a)

Independent verifier, 2026-11-04. I did not research these rows. I opened every source myself or re-ran its script into my own scratch folder. The inputs I reused are the researcher's county pull (layer 21 water, layer 24 parcels and sale outlines) and the 2026-10-d kept-sales file, which that batch verified.

The ledger is `facts.md`. Its status and note columns now match this file. Each CORRECTED row has its safe wording in the note; the writer uses that wording only. Struck wording is in `buyers-waterfront-homes-struck.json` (15 entries, 11 rows). Every entry fires on its struck text, and no approved wording fires. `node tools/struck-check.test.js` passes. The live page has none of the struck wording.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 17: rows 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 21, 24 |
| CORRECTED | 11: rows 1, 4, 14, 17, 20, 22, 23, 25, 26, 27, 28 |
| STRUCK | 0 |

## What I opened and re-ran

- **SCDES pages**, fetched live: FAQ, Minor Activities, General Permits, Dock Master Plans, Extensions and Transfers. Every quote in rows 1, 4, 6 to 10 was found.
- **SC Code Title 48 Ch. 39**, live: 48-39-10, -130, -140, -145, -150. Section histories show 2026 Act 116 rewrote 48-39-150(C) and 2026 Act 146 renamed the office in the statute. The text I read is the current text.
- **R.30-12**, the scstatehouse Chapter 30 PDF (made 2025-07-23; 30-12 history ends at the May 23, 2025 amendment).
- **State Register Vol. 50, Issue 8 (August 28, 2026), Doc. 5468**, from the SCDES regulations library. It proposes new creek widths and dock sizes under R.30-12.A(2). Not in force until the General Assembly approves it.
- **Coast Pilot 4, ch. 6 and ch. 12**, edition 01 NOV 2026, from NOAA. Every crossing, mile and clearance in rows 11 and 13 to 16 was found.
- **33 CFR 117.911 and 117.5** through the eCFR versioner for 2026-11-01.
- **Tides**: `pull_tides.py` into my folder. All nine values identical. NOAA station metadata read.
- **County and deeds**: `analyze.py` into my folder. Every county and deed number identical. Ten random waterway house lots checked on 2023 NAIP with the county outline: all ten are on the water.
- **Listings**: `pull_listings.py` again at 13:25 UTC. 498 waterfront houses (497 at 12:07). Dock, no-HOA and ocean counts identical.
- **Sibling rows**: NMB 13 and 14, Little River 12, 13, 14, 16, 17 and 29, Common Mistakes 28, Cost to Own 22, and `stories.json` ny-client-boat.

## Every correction

1. **Row 1. The permit covers salt water, not all water.** The critical area is tidal salt water, the marsh and land at or below mean high tide, and the beach (48-39-10(F), (G), (J)). Docks on lakes and fresh water are under other rules. 48-39-145(C) has the state defer to the Army Corps on dock size on the waterway in a county where over 80 percent of the waterway is outside the critical area. I could not find whether Horry is that county. Call the office "the state's coastal permit office (SCDES)".
2. **Row 4. The dock-size table needs four limits.**
   - It is the rule in force now. A change was proposed on August 28, 2026; it needs the legislature's approval. Stale by 2027-01.
   - Lots in subdivisions with dock master plans approved by May 24, 2002 are exempt from the under-10 and under-20 rules.
   - Sizes are "usually".
   - Do not apply the table to the waterway itself.
3. **Row 14. Two distance errors.**
   - The inlet channel is 1.8 nautical miles, so say "about 2 miles".
   - Winyah Bay is about 35 waterway miles below Socastee, not 30. The waterway enters the Waccamaw about 4 miles below Socastee.
   - "The way out" rests on the Coast Pilot only. I did not open the chart.
4. **Row 17. "4.8 feet a day" is wrong wording.** It is the average change from high tide to low tide, not a daily total. The values hold.
5. **Row 20. Three changes.**
   - The 56 sales are 55 houses.
   - "2 1/2 times" pools three stretches with different prices. Inside each stretch the ratio is 2.07 to 2.30, so say "about twice, in every stretch".
   - "Down the street" overstates 1 km.
6. **Row 22. "Many of those near the beach" was never counted.** Say "a group that includes oceanfront houses" (NMB row 14).
7. **Row 23. The area is not "the Georgetown County coast".** The Georgetown postal city reaches inland. Say "on the Grand Strand and around Georgetown".
8. **Row 25. The 25 canal houses with no HOA fee are not all Cherry Grove.** 19 are in North Myrtle Beach, 4 in Murrells Inlet and 2 in Garden City Beach.
9. **Row 26. Four changes.**
   - The $550 is for a house the owner lives in.
   - "Most waterfront houses are in the high-risk zone" is counted only for Cherry Grove (679 of 682).
   - The lender is "a federally regulated lender".
   - The figures are countywide policies from September 2025 to August 2026.
10. **Row 27. Dock Holidays slips: 10 sales, middle about $92,500, not $95,000.** Little River row 14 dropped a deed that covered two slips.
11. **Row 28. The story bank's source line says "beachfront", not "beachfront house".** Do not add "house".

## Not to publish

- No row is struck.
- Row 4's table is the rule in force now. It may not be printed as settled law past early 2027 without a re-check.
- Do not print the table for docks on the Intracoastal Waterway itself, because of 48-39-145(C).
- "Not verified" 1 to 9 stay off the page. On item 4 (48-39-145(C)), H.3699 of 2019 was sponsored by Bailey, Hewitt and Hardee, who are Horry members. That does not show Horry meets the 80 percent test, so it stays unverified. Row 1's correction covers what the page may say.

## Photo candidates (PLAN.md)

I checked every licence record. I read the Commons file page and the FSA policy page myself, and I looked at each 1200 px file.

| Photo | Licence check | What it shows | Fit |
|---|---|---|---|
| Cherry Grove channels from above (NAIP 2023) | Public domain. The FSA policy page says "Most information presented on the FSA Web site is considered public domain information ... use of appropriate byline/photo/image credits is requested." | The finger channels with docks, the boat ramp, Heritage Shores and the ocean, all labelled | Good |
| Socastee swing bridge from above (NAIP) | Public domain (same) | The blue truss swing span and the newer fixed bridge at lower left. This matches miles 371.0 and 371.1. | Good |
| Barefoot Landing on the waterway (NAIP) | Public domain (same) | The waterway, Barefoot Landing and US 17. The swing bridge is cut off at the top edge and has no label. | Name the bridge in a caption only if the writer re-crops or labels it |
| Murrells Inlet creek-front docks (NAIP) | Public domain (same) | Business 17, houses, and docks over the marsh edge to the creek | Good |
| Garden City Point canals (NAIP) | Public domain (same) | Canals with many private docks, Waccamaw Drive and the ocean | Good. Note: this is in Georgetown County. |
| Little River harbours from above (NAIP) | Public domain (same) | Coquina Harbour and Lightkeepers Village basins and the waterway | Good for slips. Mariner's Pointe is not in the frame. |
| Conway riverwalk boardwalk (Commons, Pubdog) | Public domain. The file page reads "I, the copyright holder of this work, release this work into the public domain." | A boardwalk beside old buildings. **No river water is visible.** | Weak for "the river column". The caption may not say it shows the river. |

## Data checks

My re-runs are in the scratch folder `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/wf2/buyers-waterfront-homes/verify/`. They are not in the repo.
