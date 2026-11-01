# Verification: /invest/str-tools/

Independent verifier, batch 2026-10-d, 2026-11-01. I did not research these facts. Ledger: `facts.md`. I changed only its status and note columns. Struck list: `invest-str-tools-struck.json` in this folder (16 entries). It sits here because of the shared-files rule; the lead copies it to `batches/2026-10-d/facts/`. Each entry fires on its own struck text, and no approved text fires any entry (control run today). `node tools/struck-check.test.js` prints "all controls pass".

The current live page already holds 2 struck phrases: the Kings Highway 90-day rule (row 26) and "self-managing from another state" (row 28).

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 17: 1, 2, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 24, 27, 28 |
| CORRECTED | 12: 3, 4, 5, 6, 12, 19, 21, 22, 23, 25, 26, 29 |
| STRUCK | 0 whole rows. One sentence of row 26 is struck: the Kings Highway overlay rule. |

Photos: 3 of 4 candidates pass. One is not checked because no frame was picked.

## What I opened and re-ran

- **AirROI**: all eight market pages, downloaded again. All eight are byte-identical to `raw/`. I checked every quoted figure against my own text extraction of the pages.
- **Scripts re-run on a copy of `raw/`**:
  - `parse_airroi.py` gives an identical `airroi-parsed.json`.
  - `noaa_months.py` gives an identical `noaa-months.json`.
  - `compute.py` gives an identical `findings.json`.
- **CRM map API**: I made about 120 queries myself (`data/2026-10-d/invest-str-tools/verify/requery.py`, output in `requery.json`). All 32 town counts match. All four worked groups match: n, median, p25, p75, the fee bands and the HOA-includes counts.
- **The fee unit**: I opened six of the 48 Myrtle Beach condos on mbcoastalhomes.realgeeks.com. That site repeats the MLS field "HOA Fees (Calculated Monthly)": 910, 1203, 1232, 1244, 1343 and 2022. Each one falls in the bucket that the CRM `hoaMax` filter puts it in. So the CRM fee is monthly. This lifts the hold the str-vs-ltr verifier put on the same fee.
- **Tax districts**:
  - I placed each worked-group pin on the county parcel layer (`dist.py`, output in `districts.json`).
  - I read 2026 bills on the Treasurer's site, issued 09/28/26:
    - district 880, 171.2, city MB 83.4;
    - district 550, 171.2, city NM 50.0;
    - district 660, 171.2, city SS 43.0;
    - district 600, 201.0, no city;
    - district 610, 207.3;
    - district 893, 181.2, city MB 83.4.
- **Horry County 2026 levy PDF**: downloaded again, byte-identical, certified 7/27/2026.
- **SCDOR ST-575 (Rev. 2/5/26)**: downloaded again, byte-identical.
- **Horry County Treasurer, Hospitality Fee page**: read today.
- **S.C. Code**: 12-43-220 and 12-36-920, read today.
- **Airbnb Help Center**: articles 1857 and 2328, read today.
- **City of Myrtle Beach**: the zoning news item and the 2024-12-10 council agenda, read today. The 2024-69 ordinance PDF returned a Cloudflare challenge page with curl and 403 with WebFetch.
- **City of North Myrtle Beach**: the short-term rentals page, read today.
- **NOAA**:
  - the 2024 water file, downloaded again, byte-identical;
  - the station metadata: 8661070 is Springmaid Pier, SC;
  - I recomputed the twelve water means myself; they match.
- **Our own files**: `data/str-market.json` "management", and the two stories in `stories/stories.json`.

## Every correction

1. **Row 3, the 6 percent rate.** The claim stands. The note says "a nightly rental is never a legal residence", and that is wrong. Under S.C. Code 12-43-220(c), a legal residence keeps the 4 percent rate "if the residence ... is not rented for more than seventy-two days in a calendar year."
   - Use: "A home that is not the owner's legal residence, which includes a rental the owner does not live in, is taxed on 6 percent of its value. A legal residence rented more than 72 days a year loses the 4 percent rate [S.C. Code 12-43-220(c), (e)]."

2. **Row 4, mills.** These figures are confirmed on 2026 bills:
   - 254.6 for district 880, which holds 41 of the 48 Myrtle Beach condos;
   - 221.2 for North Myrtle Beach, district 550, which holds 63 of the 65;
   - 214.2 for the town of Surfside Beach, district 660;
   - 207.3 for Garden City, district 610.

   The problem is Surfside Beach. Only 7 of the 32 condos with a Surfside Beach address are in the town. 24 are in district 600, which is unincorporated, at 201.0 mills. "The Horry side of Murrells Inlet" was not shown. Batch 2026-10-b recorded a district there at 234.5.
   - Use: "about 254.6 mills inside Myrtle Beach, 221.2 in North Myrtle Beach, 214.2 inside the town of Surfside Beach, about 201.0 for most condos with a Surfside Beach address (outside the town), and 207.3 in Garden City [Horry County Auditor, 2026 levy; Treasurer, 2026 bills]."

3. **Rows 12 and 6, kept per night and break-even nights (a formula error in `compute.py`).** AirROI's 24 percent of running costs is a share of gross, and gross includes the cleaning fee. The script multiplies it against the nightly rate instead.
   - The script's nights formula is gross × (1 − cleaning share) / rate. Kept per night must use the same basis: rate × (1 − cleaning − running) / (1 − cleaning).
   - Check: 87 nights × $182 ≈ $15,813, the row's own yearly figure.

   | Town | Kept per night | Nights to pay the bills | Was |
   |---|---|---|---|
   | Myrtle Beach | about $182 | about 110 | $192; 105 |
   | North Myrtle Beach | about $176 | about 104 | 98 |
   | Surfside Beach, at 214.2 | | about 42 | 40 |
   | Surfside Beach, at 201.0 | | about 42 | 40 |
   | Garden City | | about 66 | 63 |

   These row 12 figures recompute and stand: tax $4,995, bills $20,085, kept $15,813, a gap of −$4,272, and 87 and 69 nights booked.

   In row 6, the other figures stand. The one exception is Surfside Beach at 201.0 mills: tax about $2,316, bills about $7,450, about $6,900 more than the bills.

   The fix in `compute.py` is one line: `two_bed_kept_per_night = adr * (1 - (clean + run)/100) / (1 - clean/100)`.

4. **Rows 12 and 6, the part-year limit (it also limits the deciding fact).** AirROI's average counts every listing "active during the period, including those listed for only part of it". In Myrtle Beach, 42 percent of listings were open 270 days or fewer.
   - The average two-bedroom's 87 nights is 37 percent of only about 235 open nights.
   - A two-bedroom open all year at the same 37 percent would book about 135 nights. That clears the 110 needed by about $4,600.
   - So "the average two-bedroom falls short" is true only of the average listing counting part-year ones.

   The cleaning-fee doubt (Not verified 4) is settled: the size table's listing-weighted averages equal each page's gross, not its nightly-only figure. For example, Little River is 14,956 against a gross of 14,963 and a nightly-only figure of 12,593. So "about $4,300 short" holds, with the part-year words.
   - Use: "The worked condo's bills need about 110 booked nights a year. AirROI's average Myrtle Beach two-bedroom listing, counting listings open only part of the year, booked about 87 and fell about $4,300 short. A listing open all year at the same 37 percent of nights would book about 135."

5. **Row 5, 63 cents.** The arithmetic is right. AirROI's own lines give 16,367 / 25,807 = 63.4 percent. AirROI says its running costs are "the low end of typical shares".
   - Use: "At AirROI's low-end cost shares, an owner-run Myrtle Beach Airbnb keeps about 63 cents of each dollar guests pay, before insurance, the HOA fee, property tax and any loan."

6. **Row 21 (and row 6), geography.** Only Myrtle Beach is filtered to city limits.
   - North Myrtle Beach, Surfside Beach, Murrells Inlet, Pawleys Island, Little River and Conway are filtered by address city. 675 houses have a Conway address; most are outside the city.
   - "Garden City" is the CRM's area tag. Its 23 condos include Murrells Inlet addresses.
   - Say "homes for sale with a Conway (etc.) address" and "condos with a Surfside Beach address".

7. **Row 25, lodging tax.** These are confirmed:
   - MB 10 percent and unincorporated 9 percent (ST-575);
   - the county hospitality fee: 3 percent outside city limits, 1.5 percent inside (county Treasurer page);
   - the city's 0.5 percent and 1 percent (Airbnb 2328);
   - 13 percent in total; 1,764 × 0.13 = $229.

   Two fixes:
   - $252 is the year's average two-bedroom rate, not a July rate. Drop "July".
   - Every tax is charged on "the listing price including any cleaning fees and guest fees".
   - Use: "On a week at about $252 a night ($1,764), the guest pays about $229 in lodging tax on top, plus tax on the cleaning fee."

8. **Row 26, Myrtle Beach rules.** The zoning notice's text is verified: under 90 days, R zones except RMV, and "fewer than 30 houses". The notice is undated and still published.
   - **Struck**: "Between Kings Highway and the ocean, a building of more than two units built or used for nightly stays cannot be rented for 90 days or more." I could not open the ordinance (Cloudflare page and 403), and the agenda records no vote. Say only: "Myrtle Beach adopted a short-term rental conversion overlay, Ordinance 2024-69, on December 10, 2024 [registry `conversion-overlay-date`]", then link /invest/str-rules/.
   - PLAN sections 4 and 7 use the struck rule. They must drop it.

9. **Row 19.** "A typical July week is booked by mid-May" overstates the source. Use AirROI's sentence: "A typical July booking is made in mid-May."

10. **Row 22, Airbnb fee.** Airbnb says "The split-fee structure is being phased out", and on the split fee "Most hosts pay a 3% service fee, but some pay more."
    - Use: "Most hosts pay 15.5 percent, taken from the payout. The older split fee, being phased out, charges most hosts 3 percent and the guest a service fee."

11. **Row 23, managers.** The file gives the full-service base as "gross profit"; the claim leaves it out. The basic plan has no base in the file.
    - Use: "about 40 to 60 percent of gross profit for full service, and about 12.6 to 17.5 percent for a basic plan, as we have seen them."
    - Calculator use stays held until owner question 1 is answered.

12. **Row 29.** The story's figures are DSCR figures.
    - Use: "DSCR lenders count only about 75 percent of a short-term rental estimate, according to a loan officer at our preferred lender."

## Notes on verified rows

- **Row 9.** The fee unit is now confirmed monthly (see "What I opened"). Of the 48 listings, 22 have a fee at or below $1,200 and 25 at or below $1,250. "About $1,225 a month" stands. No listing has a blank fee.
- **Row 13.** Electric is in the fee on 31 of the 48 listings only. The "about $3,000 short" variant applies to those listings, not to the worked condo.
- **Row 16.** AirROI's month table is a two-year average, months September 2024 to August 2026. Label the chart "average per listing active that month, last two years".
- **Row 28.** PLAN.md section 5 writes "running it from another state with the cheapest cleaner". The story does not say "from another state", and the live page has it. It is in the struck list.
- **Rows 2 and 14.** "Myrtle Beach" is AirROI's market, not the city. The worked condo is inside the city. Write "the Myrtle Beach area" or "AirROI's Myrtle Beach market" where the two meet.

## Claims that should not be published as stated

- **The deciding fact (ledger header).** Its numbers move: about 110 nights, not 105. It holds only for the average listing counting part-year ones (correction 4). "The result holds under both readings" is no longer the limit that matters; part-year is. The lead can stay: the fee is the largest bill, and $14,700 is 73 percent of the $20,085. "The average Airbnb cannot pay it" needs the part-year words.
- **The Kings Highway overlay rule** (row 26). Struck.
- **Any Surfside Beach figure at 214.2 mills** without "inside the town".
- **The full-service manager cost in the calculator** until owner question 1 is answered.

## Photo candidates (PLAN.md, Visuals 5)

| Candidate | Licence on the file page | Picture, seen full size | Verdict |
|---|---|---|---|
| `File:Hotels_along_the_Grand_Strand_Beachfront.jpg` | CC BY-SA 4.0, "I, the copyright holder", DiscoA340, own work, 14 August 2022, 3,264 × 2,448. Description: "Hotels along the Grand Strand Beachfront in Myrtle Beach, South Carolina". Category: Myrtle Beach. | Seen at 1280 px. High-rise oceanfront towers from the beach, with dune grass and a lifeguard stand. No readable sign or logo. | **Passes, with a caption change.** The plan's "Condo towers" is not what the source says (it says hotels). Caption: "Oceanfront towers along the beach in Myrtle Beach." Credit: DiscoA340, CC BY-SA 4.0, with a link to the licence. |
| `images/buyers/no-hoa/garden-city-beach-and-marsh-from-the-ocean-2011-1200w.webp` (USGS) | Public domain. USGS metadata (11CCH03): "Public domain data from the U.S. Government are freely redistributable ... Please recognize the U.S. Geological Survey as the originator". Record in `data/2026-10-b/photos.json`. | Seen at 1200 px. Rows of beach houses between the ocean beach and a wide marsh with tidal creeks and docks. | **Passes.** Keep the year: "Beach houses between the ocean and the marsh at Garden City Beach, 2011." Credit: U.S. Geological Survey. |
| `images/buyers/no-hoa/surfside-beach-houses-from-the-sand-1200w.webp` | CC BY-SA 4.0, BullDawg2021, own work, 16 July 2023 (Commons file page read today) | Seen at 1200 px. Two- and three-story beach houses behind low dunes, seen from a wide beach. Small beach tents; people are far off and are not the subject. | **Passes.** Caption: "Beach houses along the sand at Surfside Beach." Credit: BullDawg2021, CC BY-SA 4.0. |
| USGS 2011 oblique aerial of the Myrtle Beach towers (DOI 10.5066/F7N877XX) | The data release is public domain (as above). | No frame has been picked, so I saw none. | **Not checked.** Check that the frame shows the towers and is on Myrtle Beach (lesson B29) before use. |

## Sources opened

- **AirROI**: https://www.airroi.com/airbnb-data/united-states/south-carolina/ followed by myrtle-beach, north-myrtle-beach, surfside-beach, garden-city-beach, murrells-inlet, pawleys-island, little-river or conway.
- **CRM**: https://chapter3realty.com/homes/api/map (about 120 queries) and https://chapter3realty.com/homes/api/filters.
- **MLS field echo**: https://mbcoastalhomes.realgeeks.com/property/ followed by 2609585, 2622282, 2622454, 2624269, 2503803 or 2606015.
- **Horry County**:
  - https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf
  - https://www.horrycountysc.gov/departments/treasurer/hospitality-fee/
  - https://www.horrycountysc.gov/media/monjnvh0/sales-tax-chart-short-term-rentals.pdf
  - https://horrycountytreasurer.qpaybill.com/Taxes/TaxesDefaultType4.aspx (2026 bills; owner names not recorded)
  - https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer/24
- **S.C. Code**: https://www.scstatehouse.gov/code/t12c043.php and https://www.scstatehouse.gov/code/t12c036.php
- **SCDOR**: https://dor.sc.gov/sites/dor/files/forms/ST575.pdf
- **Airbnb**: https://www.airbnb.com/help/article/1857 and https://www.airbnb.com/help/article/2328
- **City of Myrtle Beach**: https://www.cityofmyrtlebeach.com/news_detail_T6_R1468.php and https://www.cityofmyrtlebeach.com/agenda_details_T15_R388.php. The ordinance PDF on cms6.revize.com was blocked.
- **North Myrtle Beach**: https://www.nmb.us/833/Short-term-Rentals
- **NOAA**: https://api.tidesandcurrents.noaa.gov/api/prod/datagetter (station 8661070, 2024 water) and https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/8661070.json
- **Commons**: https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg and https://commons.wikimedia.org/wiki/File:Surfside_Beach_Shoreline.jpg
- **USGS**: https://coastal.er.usgs.gov/data-release/doi-F7N877XX/ and https://coastal.er.usgs.gov/data-release/doi-F7N877XX/data/11CCH03-Metadata.xml
