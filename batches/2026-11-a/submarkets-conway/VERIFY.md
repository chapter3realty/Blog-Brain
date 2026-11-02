# Verify: /submarkets/conway/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself, or re-ran its script into my own scratch folder from a fresh pull. I did not reuse the researcher's raw files, except the deed file, which is the same input the affordable ledger verified.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `submarkets-conway-struck.json`. Every entry fires on its own struck text, and no approved wording fires. `node tools/struck-check.test.js` passes.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 28: rows 1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 26, 27, 29, 30, 35, 36, 37, 38, 45 |
| CORRECTED | 15: rows 5, 7, 11, 15, 22, 25, 28, 31, 32, 33, 34, 39, 40, 43, 44 |
| STRUCK | 2: rows 41, 42 |

## What I re-ran

- **County GIS.** I ran `fetch_county.py` into my own folder, then `analyze.py` on it with the deed, NFIP and FEMA mitigation inputs. Every number in `findings.json` is identical, except the run and listing times. My closure pull returned 2,094 Florence features against the researcher's 944, but the closures that touch the city are the same.
- **Listings.** I ran `pull_listings.py` at 00:35 UTC. The counts were identical: 673 houses, 368 new, 172 inside the city.
- **FEMA policies.** I ran `pull_fema.py`. The counts and medians were identical. The 1,000 for ZIP 29526 zone X is the API's own count, not a page limit.
- **Drives.** I ran `pull_drives.py`. The results were identical, and the Nominatim points match.
- **Live APIs.** I re-queried:
  - NfipClaims v3 (City of Conway)
  - HmaSubapplications v2
  - DisasterDeclarationsSummaries
  - the NWS gauge
  - the USGS daily series
  - the Census CSV, decennial and ACS tables
- **Treasurer.** I pulled 2026 bills from the Treasurer: 16 bills in district 110 and 4 in district 100.
- **HUD.** I downloaded HUD's FY2027 FMR files.
- **Pages.** I re-read these pages:
  - the city history page
  - the NRHP nomination
  - the NPS Washington Monument page
  - SC Code 12-43-220
  - 42 U.S.C. 4012a and 4013
  - 44 CFR 80.19
  - NCES
  - the CCU accountability report
  - the Horry County Schools pages
- **Directions.** I checked direction words against the USGS NHD line for Crab Tree Swamp and the county highway layer (17).

## Every correction

1. **Row 5 (city resale price).** The group is not "houses". The 334 sales break down by county land-use code:
   - 298 code 101
   - 27 code 109 (townhouse row lots)
   - 6 code 107 (condo-type units without HPR)
   - 2 code 102
   - 1 code 120

   For houses only (101 and 102), there were 300 sales with a median of $273,450.
   - Use: "A home that resold inside the city of Conway in the past year (a house or townhouse, not a condo unit) usually went for about $265,000; half sold between about $220,000 and $340,000."
2. **Row 7 (by town).** Same fault. Say "a home that resold", not "a house". The numbers stand.
3. **Row 11 (tax example).** 1,732 - 1,064 = 668.
   - Use "about $670 more", not "about $650 more".
   - The 6 percent case inside the city is now confirmed on real bills. PIN 33703020054 (13,740 assessed) shows county $2,352.29 + city $1,391.86 = $3,744.15, with no fee or credit.
4. **Row 15 (did not flood).** "Did not flood in Florence" is stronger than the map.
   - Use: "By the county's map, Florence's water did not reach large parts of Conway." The counts stand.
5. **Row 22 (buyouts).** The counts are right: 86 buildings for DR-4286 (Hurricane Matthew) and 14 for DR-1299 (Hurricane Floyd). All three projects of each are closed.
   - Strike "flood-damaged". The record counts building locations, not damage.
   - Strike "That is why some streets near the river have empty lots". No source places the lots.
   - Use: "Land bought this way must stay open space" [44 CFR 80.19(a)].
   - Filter by state: a Conway, Arkansas row (DR-4318) has the same name.
6. **Row 25 (30-day wait).** FEMA's page refused me as well. The rule is in 42 U.S.C. 4013(c), which has an exception for a policy bought when a loan is made.
   - Use: "A new federal flood policy takes effect 30 days after the application and payment are complete, unless it is bought when a home loan is made."
7. **Row 28 (history).** Cut "one of South Carolina's oldest towns". The source does not say it.
   - Use: "Conway was laid out in 1732, as Kingston."
8. **Row 31 (downtown).** The plat list leaves out Buckwood #2 (26 homes), which ties Highland Park. Nothing dates the plats.
   - Use: "Snowhill, Mayfair, Buckwood, Highland Park and Collinswood are the largest plats here." Drop "old".
9. **Row 32 (Crabtree area).** "North of downtown, across Crabtree Swamp" fails the map:
   - Elmhurst, Midtown Village, Rivertown Row and Woodcreek lie northwest, near US 501.
   - Two thirds of Sherwood's homes are on the town side of the swamp.
   - Use: "North and northwest of downtown, around Crabtree Swamp."
10. **Row 33 (west and south).** "Most of them in Pecan Grove and Sedgefield" is wrong: that is 42 of 176. The largest group is Kingston Village, with 34 homes, all in the high-risk zone.
    - Use: "the largest groups are in Kingston Village (34), Pecan Grove (29) and Sedgefield (13)."
    - The US 378 and US 701 South road words check out.
11. **Row 34 (north).** "Far north on SC 905" fails the map:
    - Country Manor is northwest, 0.6 miles from US 501.
    - Maple Hill is about 2 miles from both US 701 North and SC 905.
    - Use: "At the city's north edge, 4 to 5 miles from downtown."
    - Cut "the city's golf community". It claims there is only one, which I did not check.
12. **Rows 39 and 40 (HUD rents).** The year is old. FY2027 took effect on 2026-10-01.
    - Conway ZIPs 29526 and 29527: $1,320 (2BR), $1,630 (3BR), $1,900 (4BR).
    - 29579: $2,230 for a 3BR, about $600 more.
    - Metro: $1,504 (2BR), $1,823 (3BR), $1,981 (4BR).
13. **Row 43 (August turnover).** The story is advice. It does not say what our agents do, and it does not say that every rental turns over in August.
    - Use: "Near the college, August is the best month to find a new tenant, because new students arrive; start marketing a month before the lease ends."
14. **Row 44 (schools).** No source puts the whole city in the Conway attendance area.
    - Use: "Horry County Schools assigns schools by address; one of its attendance areas is named Conway."

## Struck

- **Row 41 (nightly rentals).** This is a secondary source: AirROI, a vendor estimate. It was retrieved 2026-08-15, and its 90-day refresh is due 2026-11-13. Cut the numbers and link /invest/airbnb-income/.
- **Row 42 (no city rule).** I could not confirm this at the city. Its code is on Municode, which refused this session. A 2019 report says council considered short-term rental and homestay rules. Cut the claim and link /invest/str-rules/ without stating the city's rules. This is filed in NEEDS.md, because the str-rules page makes the same claim.

## Notes for the writer

- **Banned word.** build.js bans "sits". Write "are in a flood map", not "sit in".
- **Row 1 and row 2.** Give growth as "about 22 percent (Census estimates)". Do not divide by the 24,849 Census count, because that gives 23 percent.
- **Row 14.** By either map, Midtown Village (34) and Kingston Village (34) come second after Sherwood, ahead of Midland (33). The five named plats are the most inside the Florence map only.
- **Row 26.** Keep the 27 (GIS) apart from the CRM's own flood tag, which returns 9.
- **Row 37.** Write "in fall 2024". The fall 2025 figure of 11,881 is preliminary and appears only in the news.
- **Row 23.** The quote in the ledger is old statute text. The rule is unchanged.
- **Row 37's table row.** Its quote cell holds pipe characters, which break the Markdown table. I did not edit that cell.

## Photos (PLAN.md candidates)

I read the Commons licence fields through the API on 2026-11-02. The image downloads were rate-limited (429), so I looked at the site's existing copy of the Florence photo.

| File | Licence on the file page | Author | Result |
|---|---|---|---|
| Conway_city_hall_0782.JPG | CC BY-SA 3.0 | Pollinator at en.wikipedia | OK, credit and licence link required |
| Conway_Downtown_Historic_District_Jun_10.JPG | Public domain | Pubdog | OK |
| Home_in_the_historic_district,_Conway,_South_Carolina_(18_November_2006).jpg | CC BY-SA 3.0 | Pollinator | OK, credit required |
| Conway_Marina.jpg | CC0 | Carson True | OK. The description says it was taken "from the Conway bridge". |
| Kimbel_Library.jpg | CC BY-SA 4.0 | LittleT889 | OK, credit required |
| Hurricane_Florence_-_South_Carolina_National_Guard_Responds_(44200296354).jpg | Public domain (U.S. National Guard photo, Senior Master Sgt. Edward Snyder, 169th Fighter Wing) | SC National Guard | OK. See the caption note below. |

**Caption note for the Florence photo.** The description says: "Flood waters continue to rise in Conway, S.C. ... Sept. 25, 2018". It is about sandbagging along Highway 501, and it names no street. The picture shows single-story houses, a basketball hoop and "Speed Hump" and "No Thru Trucks" signs standing in water. It does not show whether the street is inside the city limits.
- Caption it "a street in the Conway area", never "in the city of Conway" and never a named plat.
