# Verify: /submarkets/north-myrtle-beach/ (batch 2026-11-a)

Independent verifier, 2026-11-03. I did not research these rows. I opened every source myself or re-ran its script into my own scratch folder. The inputs I reused are the researcher's county pull (parcels, outlines, flood zones, water, roads) and the 2026-10-d kept-sales file, which that batch verified.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `submarkets-north-myrtle-beach-struck.json` (13 entries, 12 rows). Every entry fires on its struck text, and no approved wording fires. `node tools/struck-check.test.js` passes. The live page (not yet rewritten) has one struck phrase twice: "rentals allowed citywide" (row 23).

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 29: rows 1, 2, 3, 4, 6, 7, 9, 12, 13, 14, 15, 17, 19, 20, 21, 22, 24, 26, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 42 |
| CORRECTED | 14: rows 5, 8, 10, 11, 16, 18, 23, 25, 27, 35, 39, 40, 41, 43 |
| STRUCK | 0 |

Row 40 was marked NOT VERIFIED by the researcher. I opened the city pages, and it is now CORRECTED with safe wording.

## What I re-ran

- **analyze.py.** I ran it on the researcher's county pull, deed file and listing pull. Every number in `findings.json` came out identical.
- **The parts.** The overlay of the parts showed Crescent Beach homes south-west of Atlantic Beach. That is an error in `areas.py` (correction 1). I fixed one line and re-ran. The corrected outputs are in the website copy at `data/2026-11-a/submarkets-north-myrtle-beach/verified/`, with a README. **The writer uses the `verified/` files for the table, charts and map.**
- **Listings.** I pulled the CRM listings again at 23:04 UTC. 941 homes had a point and 929 were inside the city. The counts held, and the middle house ask moved from $692,500 to $699,000.
- **FEMA.** I ran `pull_fema.py`. The counts and medians were identical. All A-zone policies were AE, all V-zone policies were VE, and all were occupancy type 11.
- **Drives.** I re-ran every OSRM route, and each was identical. I also measured the walk from Main Street to McLean Park: 395 m on foot, about 5 minutes.
- **Census.** I re-fetched P1 (2020 and 2010), H1 and H5 from data.census.gov. The api.census.gov address now asks for a key.
- **Tax bills.** I read three 2026 bills on the Treasurer's search, using the sibling's `bill.py`:
  - a district 550 second home
  - a district 550 lot
  - a district 551 legal residence

  The bills show `NM / 50.` and `Fees: $0.00`, and the arithmetic matches 221.2 mills and the 109.1-mill school exemption.
- **Pages re-read live:**
  - SC Senate resolution S.1325
  - SC Encyclopedia
  - SC Code 1-1-665 and 12-43-220
  - 42 U.S.C. 4012a and 4013 (Cornell)
  - the city's short-term rental page, its rental-rules PDF, Beach Laws, Golf Cart Laws, Parks and the park facility pages, the hospitality fee FAQ, Sanitation, and Water and Sewer
  - the city's June 2025 golf cart release
  - SCDOR accommodations page and ST-575 (Rev. 2/5/26)
  - the county hospitality fee page and its accommodations form
  - the 2026 levy sheet
  - Horry County Schools
  - WMBF on the golf cart hours (2026-05-20) and the nuisance-party ordinance (2026-01-06)

## Every correction

1. **Row 8, and the rows that use the parts (10, 11, 16, 18, 35, 43).** `areas.py` took "CRESCENT SANDS AT WH", a Windy Hill condo, as a Crescent Beach plat. The nearest-plat rule then put 1,447 homes south-west of Atlantic Beach in Crescent Beach, among them North Beach Towers (337), Beach Cove (146 + 81 + 71) and Shore Crest (126 + 114). Atlantic Beach sits between Crescent Beach and Windy Hill (row 2), so none of these can be in Crescent Beach. The header's check ("1,510 of 1,511 Crescent Beach plat parcels fall in Crescent Beach") tested the plats against themselves and could not catch it.
   - Homes: Crescent Beach **3,969** (2,498 condos, 1,365 houses), not 5,416. Windy Hill **3,920** (2,674 condos, 958 houses), not 2,473.
   - Row 10: Crescent Beach house resale $410,000 (65 sales); Windy Hill $460,000 (29). The wording holds.
   - Row 11: Crescent Beach condo $338,400 (129); Windy Hill $358,500 (158). "About $310,000 to $360,000 in every beach section" holds.
   - Row 16: Windy Hill about **$345** a square foot asking (39 houses); Crescent Beach about **$315** (41).
   - Row 18: Windy Hill **54 in 100 homes** in the high-risk zone (71 in 100 condos, 17 in 100 houses). Crescent Beach **about 1 in 10 homes** (15 in 100 condos, 1 in 100 houses). The sentence "Tilghman Beach, Crescent Beach and Windy Hill about 1 in 3 homes, and only 6 to 15 in 100 houses" is wrong. "Oceanfront condos" is not measured; say "condos".
   - Row 35: houses at the 4 percent rate are 32.2 in Crescent Beach and 32.0 in Windy Hill. Condos run from 8.3 (Cherry Grove) to 31.3 (Little River Neck).
   - City totals do not change.
2. **Row 5 (Hazel).** The source says larger parcels "became available for hotel sites and other commercial enterprises". It does not say lots were built up.
   - Use: "Many owners sold, and larger parcels became available for hotels and other businesses."
3. **Row 23 (rentals).** The city page does not say rentals are allowed across the city. It says every rental needs a yearly license and "there is currently no special zoning or permit process required beyond standard licensing". An HOA or deed can still bar rentals.
   - Use: "Every short-term rental in the city needs a city business license, renewed each year, and must collect lodging taxes. The city has no special zoning or rental permit beyond the license. An HOA or the deed can still bar rentals."
   - PLAN.md says "allowed everywhere" and "anywhere" (sections 1, 2 and 9, and the key facts row). Those go.
4. **Row 25 (new rules).** "Has adopted none" is too firm. A nuisance-party ordinance, which the mayor tied to short-term rentals, passed first reading in January 2026. I found no final vote.
   - Use: "The city has held workshops and public sessions on possible new short-term rental rules. Its rental page lists no new rental ordinance adopted, and the license rule is the one in force."
5. **Row 27.** The bag ban covers "local businesses", not only stores.
6. **Row 39 (tax example).** $565,000 is the middle sale price, not a value "on the county's books". The arithmetic is right.
   - Use: "On a house the county values at $565,000 (about the middle resale price) ..."
7. **Row 40 (city services), now opened.** The city's Sanitation page describes weekly curbside collection of trash, recycling and yard waste for "city sanitation customers", with a sanitation fee. Its Water and Sewer page describes a city division run as an enterprise fund.
   - Use: "The city's sanitation division collects household trash, recycling and yard waste at the curb once a week for its customers, for a fee. The city also runs a water and sewer division."
   - Do not say every home is served.
8. **Row 41 (pier).** The pier is not at the north end of the beach. The beach-side homes run about 1.9 miles further north-east to Hog Inlet.
   - Use: "Cherry Grove Pier stands in Cherry Grove, the city's northernmost beach section."
9. **Row 43 (neighborhoods).**
   - **Tilghman Estates.** The whole plat has 19 house resales, from $420,000 to $6,225,000. The middle is $1,050,000, and the middle half runs from $680,000 to $1,925,000. The $1.19 million is the middle of the 18 sales inside our line, and one sale moves the middle by about $140,000.
     - Use: "Tilghman Estates (about 450 houses; 19 resold, the middle about $1.05 million, the middle half about $680,000 to $1.9 million)."
   - **Seabrook Plantation.** The whole plat has 9 sales at $752,000. Say "about $750,000".
   - **Grande Dunes N.** It sits at about 33.790, -78.795, inside the city across the waterway. OpenStreetMap names it "Grande Dunes North Village". It is not Grande Dunes in Myrtle Beach.

## Notes on verified rows

- **Row 15.** Listing counts move daily. Refresh them on the build day. "About $690,000 to $700,000" covers both of today's pulls.
- **Row 24.** The rules PDF the city serves today was re-saved by the city on 2026-05-08, according to its metadata, so the ordinance text is current. Municode itself would not load.
- **Row 29.** The city's June 2025 release confirms sunrise to sunset on roads posted 35 mph or less. In May 2026 the council said it would look at longer hours; I found no change adopted. Recheck on the build day.
- **Row 31.** Write "about a 5-minute walk" (395 m), not "a short walk".
- **Row 33.** I could not open bflanding.com today. "Shops and restaurants" rests on the 2026-10-b verifier's reading of its day-docking page ("while you shop, dine"). The OSM point is 224 m from the waterway outline and 206 m from US 17.
- **Row 34.** By CRAFT 2 rounding, write Grand Strand Medical Center "about 20", not 21.
- **Row 36.** ST-575 leaves out locally collected taxes. The city's hospitality fee FAQ lists only its 1.5 percent fee on rooms, and the county form confirms 1.5 percent inside North Myrtle Beach. 12 percent holds.

## Nothing to keep off the page

No claim has to be withheld. The rows above that say "Do not" limit the wording only.

## Photo candidates (PLAN.md)

I opened each file page on Commons. Commons limited image downloads partway through, so the last two files have their licences checked but have not been looked at yet.

| File | Licence on its page | Looked at | Note |
|---|---|---|---|
| Cherry Grove Pier.jpg | CC BY-SA 3.0, Melikamp, own work, 29 April 2012 | Yes, 1280 px | Looking north-east up Ocean Boulevard from a height: the beach, the pier, low houses beside mid-rise condos, the marsh behind. Taken before Hurricane Ian; caption it "2012". Store signs are small and at the edge. Credit: "Melikamp, CC BY-SA 3.0". |
| Cherrygrovepier.jpg | Public domain, released by Festiva76 (English Wikipedia), 2008 | Yes, 1280 px | The pier from the ocean with a condo tower behind. Caption it as 2008. |
| Cherry Grove Fishing Pier before Ian (52440320649).jpg | CC BY-SA 2.0, joiseyshowaa (Flickr), 7 July 2022, Flickr review passed | No | A mood picture. Credit is required. |
| North Myrtle Beach - Street Scene.jpg | Public domain (US, published 1931 to 1977 without notice), Tichnor Brothers postcard, 1941 | Yes, 1280 px | The card's printed title is "Street Scene, Ocean Drive, S. C." Caption: "Ocean Drive, about 1941 (postcard)". Signs ("Ladies Bath House", "Drugs") are incidental, not the subject. |
| Ocean Drive Beach - Roberts Pavilion.jpg | Public domain (same rule), Tichnor Brothers postcard, 1941 | No | Licence checked; open it at full size before use. |
| TS Debby flooding on Sixth Ave. S.jpg | CC0, Johnson524, 6 August 2024 | No | Licence checked. Sixth Avenue South is on the Ocean Drive and Crescent Beach line; place the street by part before captioning. |
| North Myrtle Beach seen from South Carolina Highway 31 - 01.jpg | CC BY-SA 4.0, DiscoA340, 13 May 2023 | No | Last resort, as PLAN says. |
| North Myrtle Beach OD Pavilion.jpg | Public domain, Crtrue, 2007 | No | Not recommended: a business is the subject. |
| North Myrtle Beach Banner.jpg | CC BY-SA 3.0, Melikamp | No | A crop of the pier photo. Too thin. |
| USDA NAIP 2023 aerial | Public domain (US government) | The researcher's check image | Fine. Label points must sit on the places (lesson B29). |
