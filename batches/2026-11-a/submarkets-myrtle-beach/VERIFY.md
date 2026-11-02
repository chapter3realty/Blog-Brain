# Verification: /submarkets/myrtle-beach/

Independent verifier, batch 2026-11-a, 2026-11-02. I did not research these facts. Ledger: `facts.md` (status and note columns updated in place; each note starts "Verifier 2026-11-02"). Struck list: `submarkets-myrtle-beach-struck.json` in this folder. Its 15 entries fire on the struck wording and stay quiet on the approved wording. `node tools/struck-check.test.js` prints "all controls pass". The current page in the working copy has none of the struck wording. The lead copies the list to `batches/2026-11-a/facts/` for batch mode.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 23: 1, 2, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 23, 26, 28, 31, 33, 34, 35, 37, 38, 40 |
| CORRECTED | 16: 3, 4, 5, 12, 18, 19, 21, 22, 24, 25, 27, 29, 30, 32, 36, 39 |
| STRUCK | 1: 11 (the overlay rule text; the ordinance number and date stay) |

Not-verified item 4 (The Market Common on the former air base) is now verified from a city page (row 23).

Photos: 8 candidates. The licence on every file page matches PLAN.md. 1 can be used as it is (Beachside). 3 can be used only if cropped (3701 N. Ocean Blvd., Ocean Forest Country Club, The Market Common 08). 3 fail (both formulanone aerials, the Marriott). The SkyWheel licence passes, but I could not view the picture (see Photos).

## What I opened and re-ran

- **City of Myrtle Beach**: the STR news item, the planning and zoning page, the business licence FAQ and the 2024-12-10 agenda. I re-fetched them today, and the two STR pages are byte-identical to `raw/`. The STR map image is also identical. Its PDF and the 2024-69 ordinance PDF return 403, and Municode returns a Cloudflare challenge. WebFetch cannot reach www.cityofmyrtlebeach.com from this session. For that, www.cityofmyrtlebeach.com would have to be allowed in the session's network settings.
- **`analyze.py`**: re-run on a copy of the researcher's raw files, with the deed file taken from the 2026-10-d patch. `findings.json` came out identical.
- **Independent checks of the raw inputs:**
  - County parcel counts by attribute query (city tax districts 88x and 89x): within 0.1 percent of the spatial counts.
  - Flood counts against FEMA's own NFHL layer 28: exact match.
  - Sales medians by tax district: same medians.
  - The CRM API totals, re-queried: all equal.
  - Zillow and QCEW files, re-downloaded: equal to `raw/` and to the chart files.
  - Census estimates CSV and the DHC and ACS tables: re-read and equal.
  - AirROI page: byte-identical to `raw/`.
  - 2026 levy PDF, SCDOR ST-575 (Rev. 2/5/26), Airbnb help article 2328, the nmb.us STR page and 44 CFR 64.3: all opened today.
- **The STR map fit**: I drew our four zone classes on the city's 2021 image and checked it at full size, and the shaded classes sit on the pink areas. I also projected landmark points onto the image from OpenStreetMap.
- **Census CDP outlines** (TIGERweb): used to test the ZIP place names.

## Every correction

1. **Row 3, grandfathered houses.** "A few dozen" overstates both city figures (24 on one page, fewer than 30 on the other). Say "fewer than 30".
2. **Row 4, the shaded areas.** Coastal Grand Mall is not shaded. It sits in the MALL OF SOUTH CAROLINA PUD, about 470 m from the nearest shaded zone. The oceanfront strip is shaded for most of its length, not all of it. Say "most of the oceanfront hotel and condo strip, the Broadway at the Beach area, stretches of the US 17 Bypass and US 501 corridors, and The Market Common's town-center district".
3. **Row 5, square miles.** Two CENTER POINTE PUD polygons overlap by 1.41 square miles and were counted twice. That is why the four classes added to 25.3 square miles in a 23.8-square-mile city. The right figures are: shaded 5.1, R zones 5.0, unshaded planned developments about 8 (not 9.5), other 5.6. The home counts do not change.
4. **Row 12, tax bills.** The counts are condos, not "condo owners". 11.8 and 11.7 percent need the same fraction. Say "about 2 in 3 condos have their tax bill mailed outside South Carolina; about 1 in 8 houses do".
5. **Row 18, buyer states.** NC, PA, NY and VA are the top states among buyers with an out-of-state tax bill only, so say that. 459 is a floor.
6. **Row 19, building table.** Landmark phase I and phase II are one resort with two condo regimes at one point. Make it one row: "Landmark Resort (two condo regimes)", 51 sales, middle price about $102,000. That makes it the second-busiest building.
7. **Row 21, flood superlative.** Give it a scope: "of the city's zoning districts with 50 or more houses, Arbor Glenn has the highest share in the high-risk zone" (40.0 percent; next is R7 at 12.6).
8. **Row 22, Grande Dunes.** It is not "the city's largest house area": The Market Common part has 2,491 houses and the older R zones have 3,158. It is the largest single zoning district for houses. Its outline spans both banks of the Intracoastal Waterway, so say "on both sides of the Intracoastal Waterway".
9. **Row 24, larger lots.** Lot size was not measured. Cut "on the city's larger lots".
10. **Row 25, ZIP names.** Only 8,772 of 21,216 homes in 29579 are in Carolina Forest CDP; 2,668 are in Forestbrook. Only 6,744 of 19,008 homes in 29588 are in Socastee CDP. Say "29579, which takes in Carolina Forest and Forestbrook" and "29588, which takes in Socastee".
11. **Row 27, Census vacancy.** "No one living in them" overstates it. Say "vacant on Census Day, meaning no one lived there as their usual home".
12. **Row 29, AirROI months.** The figures are each calendar month averaged over two years (September 2024 to August 2026), not the 12 months to September 2026. The values and the 47 percent figure (46.9) are right.
13. **Rows 30 and 32, one-bedroom income.** AirROI's annual median counts listings that were open only part of the year. Every "$17,000" sentence needs the words "counting listings open only part of the year". The arithmetic in row 32 is right: $6,475 in costs, $10,525 left, $2,443 in tax, $8,082 left for the year, about $674 a month. The cost share is AirROI's figure for the average listing.
14. **Row 36, new homes.** Replace "the new-home market is outside the city" with the numbers: 49 builder sales inside the city, about 2 percent of 2,147 countywide.
15. **Row 39, North Myrtle Beach.** The city's page says "no special zoning or permit process ... beyond standard licensing", "currently". It does not say "no zoning map". Rules are under council discussion: workshops in November 2024 and January 2025, and listening sessions in June and September 2025.

## Struck

- **Row 11, the conversion overlay rule text.** I could not open Section 1808 or the ordinance:
  - Municode: Cloudflare challenge.
  - The ordinance PDF: 403.
  - The city host: WebFetch could not reach it.

  The agenda page lists 2024-69 for second reading on December 10, 2024, and records no vote. The page may say only: "Myrtle Beach adopted a short-term rental conversion overlay, Ordinance 2024-69, on December 10, 2024" (registry `conversion-overlay-date`), with a link to /invest/str-rules/.

## Claims that should not be published

- Any sentence that places Coastal Grand Mall in a nightly-rental zone (row 4).
- Any sentence from row 11 beyond the ordinance number and date.
- "You can Airbnb a house in The Market Common". C6 is shaded, but the HOA covenants were not read (row 8 and owner question 3).

## Photos (PLAN.md candidates)

I read each licence from the Commons API and opened each file at 1920 px wide. The SkyWheel file could not be downloaded (429).

| Candidate | Licence on the file page | Result |
|---|---|---|
| Resorts Along Myrtle Beach (formulanone) | CC BY-SA 2.0, Flickr transfer | **Fail.** It shows a salt marsh, an inlet and a marina, which is not the City of Myrtle Beach. Also, `rules/images.md` says to add no more Flickr transfers. |
| Homes and Resorts Along Myrtle Beach (formulanone) | CC BY-SA 2.0, Flickr transfer | **Fail.** Its coordinates (33.54426, -79.0232) are about 28 km south of the city, and the picture shows houses on a barrier island with marsh behind. It is a Flickr transfer as well. |
| Myrtle Heights-Oak Park HD, Beachside (Pubdog) | Public domain (PD-user, own work) | Pass. It is already on /buyers/no-hoa-homes/. |
| Myrtle Heights-Oak Park HD, 3701 N. Ocean Blvd. (Pubdog) | Public domain (PD-self, own work) | **Pass only with a crop.** The house number "3701" can be read over the door, which contradicts PLAN.md. Crop the number out, or use the Beachside photo. The point is inside the city, in R15. |
| Ocean Forest Country Club (Pubdog) | Public domain (PD-self, own work) | **Pass only with a crop.** Its coordinates fall inside the PINE LAKES COUNTRY CLUB PUD, and the Commons categories are NRHP Horry County and the architect Raymond Hood. People, including children, are swimming in the foreground pool, so crop to the building. A caption may say "the Pine Lakes clubhouse, listed on the National Register as Ocean Forest Country Club" only after the builder confirms the NRHP name at NPS. I did not open the NPS record. |
| The Market Common, Myrtle Beach (13 May 2023) 08 (DiscoA340) | CC BY-SA 4.0, own work | Pass. It shows a town-center street with a fountain and no person as subject. Crop the right edge, where a licence plate shows. |
| Myrtle Beach Marriott Resort & Spa at Grande Dunes (Farragutful) | CC BY-SA 4.0, own work | **Fail.** The Marriott logo is large on the building (logo rule), and a hotel does not show the neighborhood. |
| SkyWheel Myrtle Beach in August 2022 (cropped) (DiscoA340) | CC BY-SA 4.0, own work | Licence passes. Not viewed: the builder must open it at full size before using it. |

No image files were added for this page. Every photo the builder uses needs a licence record that `tools/photos.js` accepts.
