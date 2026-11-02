# Verify: /buyers/retirees/ (batch 2026-11-a)

Independent verifier, 2026-11-01 to 2026-11-02. I did not research these rows. I opened every source myself or re-ran its script into my own scratch folder. I did not reuse the researcher's raw files.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `buyers-retirees-struck.json`. Every entry fires on its own struck text, and no approved wording fires. `node tools/struck-check.test.js` passes.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 36: rows 1 to 18, 21, 22, 24, 27, 28, 30, 31, 32, 36, 37, 38, 39, 41, 42, 47 to 50 |
| CORRECTED | 14: rows 19, 20, 23, 25, 26, 29, 33, 34, 35, 40, 43, 44, 45, 46 |
| STRUCK (whole row) | 0 |

Clauses were struck inside five rows: 20 ("once"), 29 ("about 810 homes"), 34 (the McLeod sentence), 45 ("Most of those are inland") and 46 ("the builder sells new homes there directly").

## What I re-ran

- **Statutes and the tax letter.** I fetched the H.4216 page, IL 26-20 and SC Code chapters 12-6, 12-37 and 12-43 live. Every quote was found. Act 110 shows as signed March 30, 2026.
- **Income tax examples.** I recomputed rows 11 to 13 by hand and re-ran `build_examples.py`. The output is identical to `examples.json`.
- **County parcels.** I re-pulled layer 24 with `pull_parcels.py` and re-ran `analyze_parcels.py`. The output is identical. I then looked for parcels the sets miss (rows 25 and 26).
- **Evacuation and flood zones.** I re-ran `pull_zones.py` and `analyze_zones.py` on my own parcel pull and the SCEMD file (Last-Modified 2024-04-28). The results are identical. I also tested 2-C and the misspelled Myrtle Trace parcels.
- **Hospitals and drives.** I re-ran `pull-cms.sh` (dataset modified 2026-07-22) and `pull_drives.py`. The minutes are identical.
- **Weather and Census.** I re-downloaded the NOAA normals: identical. I read ACS 2019, 2024 and 2025 at data.census.gov and checked the labels on the Census variable pages.
- **Listings.** I re-ran `pull_listings.py` on 2026-11-02 and placed every 55+ pin on its county parcel.
- **2026 levy.** The certified sheet matches row 21.

## Every correction

1. **Row 19 (homestead exemption).** For tax year 2026 only, an owner who was eligible for the exemption in 2025 gets $25,000 more, so $75,000 in all.
   - Source: proviso 117.220 of the FY 2026-27 Appropriations Act (H.5126, ratified).
   - It is not among the 14 vetoes. The governor's veto letter says "increasing the Homestead Exemption from $50,000 to $75,000". SCDOR's exemptions page says "For Tax Year 2026, the State temporarily authorized an additional Homestead Exemption".
   - A newcomer who first qualifies in 2026 or later gets $50,000.
   - The owner must also hold the home in fee simple or a life estate.
2. **Row 20 (how to apply).** Drop "once". No source says it. The property-taxes page's "File once" is about the 4 percent rate. 12-37-250(A)(4)(a) also sends the application to the city when the home is inside one.
3. **Row 23 (the $400,000 house).** The $1,286.60 figure assumes the $50,000 exemption. Label it that way. With the 2026 $75,000 it is $1,194.70. The other figures and the 3.75 ratio stand.
4. **Rows 25 and 26 (share taxed as a full-time home).**
   - The Grande Dunes set leaves out PARCEL 2-C: 58 homes, which the Grande Dunes ledger's row 107 verifier ties to C-1 and C-2.
   - With 2-C: 746 of 871, 86 percent. Owned before 2026: 674 of 788, 86 percent.
   - Myrtle Trace misses two parcels filed "MYRTLE TRACT PH II" and "MYRTLE TRAC PH VI". With them: 447 of 515, still 87 percent.
5. **Row 29 (Grande Dunes).**
   - Strike "about 810 homes". The Grande Dunes page prints no count, and its ledger (row 107) bars a published total.
   - Keep row 1's limit: the age rule is subject to the developer's reserved rights and to board hardship exceptions.
6. **Row 33 (federal 55+ rule).** The law sets a test for the exemption, not a duty. Add the age-verification step. Safe wording: "To count as 55+ housing under federal fair housing law, a community needs at least one person 55 or older in at least 80 percent of its occupied homes, must publish and follow its age policy, and must check ages."
7. **Row 34 (hospitals).**
   - Lighthouse Behavioral Health Hospital (psychiatric, Conway) also shows ER "Yes", so say "general hospitals".
   - Medicare's name is "Grand Strand Regional Medical Center".
   - Strike the McLeod sentence. McLeod's site could not be read: 403 to curl, and the fetch tool cannot reach it.
8. **Row 35 (drive to the hospital).** NMB to McLeod Seacoast is "about 10 minutes", the NMB page's verified value (NMB row 64), not 12. Give the North Strand ER at about 5 minutes (NMB row 104).
9. **Row 40 (flood insurance).** Not "a lender does not require". Say: federal law requires it only in the high-risk area, and a lender may still ask.
   - The 58 PARCEL 2-C lots are all outside the high-risk area.
10. **Row 43 (age).** Old year. The 2025 ACS 1-year figures:
    - Horry County: 30.1 percent are 65 or older (128,673 people).
    - South Carolina: 21.1 percent. U.S.: 19.0 percent.
    - Growth: 88,488 in 2019 to 128,673 in 2025.
    - Say "about 3 in 10".
11. **Row 44 (moved from another state).** Old year. 2025 ACS: 6,511 people aged 65 or older moved here from another state, margin about +/- 1,670.
    - Lines 078 to 080 are confirmed as the 65+ ages of "Moved from different state".
    - Do not compare 2025 with 2024 (4,173): the margins overlap.
12. **Row 45 (one-level houses for sale).**
    - Under $400,000 is 1,383 by one query. The bands share their edges, so the researcher's sum of 1,388 double counts.
    - Strike "Most of those are inland": postal towns do not show it.
    - On 2026-11-02 the counts were 2,086 in all, Conway 475 (386 under $400,000) and North Myrtle Beach 76 (15).
13. **Row 46 (for sale in the four communities).**
    - Myrtle Trace is 7, not 13. The MLS name also returns 2 in Myrtle Trace South, 3 in Myrtle Trace Grand and 1 in Bryants Landing.
    - Grande Dunes: 23 of the 26 are in the ledger's tracts, 2 are in Marina Tract P12 (left out by the Grande Dunes ledger) and 1 has a bad map point. Say "about 25".
    - Strike "the builder sells new homes there directly". Use "the builder also sells new homes there".

## Limits on verified rows (the writer must keep these)

- **Row 13.** The couple still has to file. Say only that they owe no tax.
- **Row 22.** The open question is closed. A 2026 district 100 notice shows 201 mills (Myrtle Trace ledger row 72 note).
- **Row 27.** "Houses" means county land use 101. Write "single-family houses in the county record".
- **Row 36.** Ribbon cut August 27, 2026. No source read today says the hospital has opened. Never write "will open" or "slated to open" (registry patterns).
- **Row 38.** Write "roughly between US 701 and SC 544".
- **Row 41.** These are ZIP code medians, not the communities.
- **Row 42.** Safer: "about 40 freezing nights in Conway and 38 in Myrtle Beach".

## For the lead (not for the writer to settle)

1. **MLS sold data.**
   - Rows 29 to 32 carry fees and building years that the sibling pages took from MLS listing cards, including closed sales (GD 95, NMB 70 and 73, SPC 86 and 89, MT 92 and 94).
   - The batch rule keeps MLS sold data off public copy. These values are already live on the four sibling pages, so I kept them for one fact, one value, and flagged them.
   - Today's active listings agree on the years: Grande Dunes 2018 to 2025, NMB 2024 to 2025, Seasons 2011 to 2016.
2. **/buyers/property-taxes/** gives the homestead exemption as $50,000 with no 2026 note. See PROPOSED.md item 5.
3. **PROPOSED.md item 3** says the age-65 deduction is in 12-6-1140. It is in 12-6-1170. My note is added there.
4. **McLeod Health.** Its pages, and Commons through the fetch tool, are not reachable from this session (curl reaches Commons). McLeod Seacoast's ER needs a browser or the owner.

## Photo candidates (PLAN.md)

I opened each Commons file page with curl.

| File | Licence on the file page | Notes |
|---|---|---|
| Boardwalk_-_panoramio_(5).jpg | CC BY 3.0 Unported, author Thomson M, taken 12 June 2015, Panoramio review by bot 19 May 2017 | 3,456 x 2,304. Camera point 33.509539, -79.063499. That point reverse-geocodes to Jetty Drive, North Litchfield Beach, Georgetown County (ZIP 29576), not Murrells Inlet's MarshWalk. Caption it by the camera point only. |
| Houses_by_the_marsh_-_panoramio.jpg | CC BY 3.0 Unported, Thomson M, 12 June 2015, Panoramio-reviewed | 3,456 x 2,304. Viewed at 1,280 px: a salt marsh creek with houses far off on the tree line. The houses are not the subject. Same area (33.511514, -79.065538, North Litchfield Beach). It supports no fact on the page. |
| Huntington_beach_state_park_salt_marsh.jpg | Public domain (PD-user: uploader Pendragon1998 released it, photo taken October 25, 2006) | 850 x 565 only. Use only beside a sentence about the park. |

All three licences are ones `rules/images.md` allows. Credit "Thomson M, CC BY 3.0" on the first two.

## Sources opened

- SC Code chapters 12-6, 12-37 and 12-43: scstatehouse.gov/code/t12c006.php, t12c037.php, t12c043.php
- H.4216 (Act 110): scstatehouse.gov/sess126_2025-2026/bills/4216.htm
- SCDOR IL 26-20: dor.sc.gov/sites/dor/files/policies/IL26-20.pdf
- SCDOR exemptions page: dor.sc.gov/property/property-tax-exemptions
- H.5126 Part IB, ratified: scstatehouse.gov/sess126_2025-2026/appropriations2026/tap1b.htm
- Governor's veto message: scstatehouse.gov/sess126_2025-2026/appropriations2026/gmbvto26.pdf
- Horry County 2026 levy: horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf
- Horry County parcel layer 24 and HazardsMap layer 8
- SCEMD Annex C, May 2026, and evac_zones.json
- CMS dataset xubh-q36u
- OSRM public router and the Census geocoder
- NOAA 1991-2020 normals
- data.census.gov ACS tables S0101 and B07001 (2019, 2024, 2025); api.census.gov variable pages
- LII: 26 U.S.C. 86 and 42 U.S.C. 3607
- Chapter3 map API
- Commons file pages
