# Verify: /submarkets/myrtle-beach/market-common/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did none of the research. Ledger: `facts.md` (status and note columns now filled). Struck list: `submarkets-market-common-struck.json` (14 entries; each fires on its struck wording and none fires on the approved wording; `node tools/struck-check.test.js` prints "all controls pass").

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 23: 1, 4, 5, 6, 8, 9, 11, 13, 15, 16, 18, 19, 23, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36 |
| CORRECTED | 13: 2, 3, 7, 10, 12, 14, 17, 20, 21, 22, 24, 25, 31 |
| STRUCK | 0 |

## What I re-ran

- `analyze.py` and `analyze_listings.py` from the researcher's RAW: `findings.json` and `listings-findings.json` byte-identical.
- Six random parcel records against the live county layer 24: every field matches. Homes in Clemson Tract PUD outside the fetch box (it reaches 78.9778 W, the box stops at 78.975): 11, all already in the file.
- City zoning live: C6 1 feature, CENTER POINTE PUD 2, CLEMSON TRACT PUD 1, as in the file.
- Listings pulled again live (416 calls, none truncated): the same 66 homes, medians and HOA brackets.
- `noise_georef.py` on the re-downloaded layout plan (byte-identical PDF): `noise-findings.json` identical. Overlay looked at full size.
- `pull_routes.py`: every walk and drive identical. 15 OSM refs opened.
- `compare_flood.py`: identical.
- FEMA: 7 home points against FEMA's own NFHL; all agree. Panel 45051C0712K effective 2021-12-16.
- Taxes: one 2026 Treasurer bill per tax district (880, 891, 894, 895). All carry 171.2 county and school mills and the Myrtle Beach 83.4; none has a special levy. The 880 bill works out to net 101.0 mills.

## Every correction

| Row | Was | Use instead | Why |
|---|---|---|---|
| 2 | The Air Force "brought in A-10 'Warthog' attack planes in the early 1970s" | "The Air Force reopened it in 1956 for F-100 fighter jets and later flew A-10 'Warthog' attack planes there." No decade for the A-10. | The encyclopedia says the base was "renovated to receive" A-10s early in the 1970s, not that they came then. The Air Force lineage gives 1977 (seen only in search results; af.mil refused the request). |
| 3 | "The federal government bought the land in 1941." | "The federal government acquired land there in 1941 for what became the base." | The city says "acquired the property", meaning the Bellamy family's land, "as part of a larger land acquisition". |
| 7 | "About 570 are on the town center's own streets." | "About 570 are in the town center district, about 500 of them on its own streets." | The 568 homes include Sweetgrass Square (66). The streets group is 502 (row 8). |
| 10 | "About 4 in 5 homes here are their owners' main homes"; "about 1 owner in 8 gets the tax bill outside South Carolina" | "About 4 in 5 homes here (81 percent) are taxed as their owner's main home"; "about 1 home in 8 has its tax bill mailed outside South Carolina". | The counts are homes, not owners. The tax roll shows how a home is taxed, not who lives in it (the same fix as Myrtle Beach row 12). |
| 12 | "The newest homes are townhomes on the town center's streets ... about $200,000 more than a resale townhome." | "The only builder sales in the past year were 9 townhomes on the town center's streets, at about $580,000 at the middle, about $180,000 more than a resale townhome on the same streets." | Row 7 counts 13 new Belle Harbor houses. The $200,000 gap compared against resales in the whole area ($375,000); on the same streets resales are $399,900. |
| 14 | "Most houses in the neighborhoods list an HOA fee of $150 a month or less (35 of 43 houses for sale; 23 of them $100 or less)." | "29 of the 32 houses for sale in the neighborhoods list an HOA fee of $150 a month or less, 23 of them $100 or less. The town center's 11 houses for sale list over $100 to $250." | The 43 houses include the town center's 11. The townhome half of the row is right. |
| 17 | The closest home is "on the town center's north edge". | "on the town center's east edge" | The nearest home (441 m from the line) sits at the east limit of C6, toward the runway's south end. PLAN.md section 7 and shot list item 3 say "north edge" too. |
| 20 | "The loudest areas ... stretch out from the two ends of the runway"; the helipad is "near US 17", "used by oceanfront helicopter tours" | "The 65-decibel area runs along the runway and stretches out past both ends, where planes take off and land. Small rings of louder levels sit around a helicopter pad near US 17 Business at the runway's south end, used for oceanfront helicopter flights." | The 75 and 80 dB lines lie along the runway; the 65 dB area is the one that reaches past the ends. Note 4 says "Oceanfront Helicopter operations"; the road on the sheet is "U.S. Hwy 17 Business (Kings Hwy)". |
| 21 | "The town center's lake" | "Grand Park, with its lake and a 1.1-mile path around it, and Valor Park sit beside the shops" | The city calls it the Grand Park Lake. Grand Park's outline touches the C6 district, so "beside the shops" holds. |
| 22 | "Saturdays, 10 a.m. to 3 p.m., from April into December" | "on Saturdays from April into December", with no hours, or "10 a.m. to 2 p.m. in the November and December holiday market" | The market's site now shows only the holiday schedule: Valor Park "Saturdays 10 am - 2 pm November 7 - December 19". The April, 10-to-3 text is gone. |
| 24 | "Only the homes on the town center's own streets are a short walk from the shops." | "The homes on the town center's own streets are the ones a short walk from the shops: about 8 minutes on foot to Valor Park from the middle of them." | The times run from each neighborhood's middle. Edge homes of nearby groups were not tested, so "only" is not proved. |
| 25 | "Food Lion, 3800 South Kings Highway" | "3890 South Kings Highway", or "the Food Lion on South Kings Highway" | Food Lion's own store list (stores.foodlion.com/sc/myrtle-beach) gives 3890 South Kings Hwy. The OSM node has no address. |
| 31 | "plus an HOA fee most houses list at $100 to $150 a month ... about $3,300 to $3,900 a year" | "plus an HOA fee most houses list at $150 a month or less (up to about $1,800 a year): up to about $3,900 a year besides the mortgage and insurance" | 23 of 43 houses list $100 or less, so $100 is not a floor. The arithmetic is right. |

## Notes for the lead (not corrections)

- **Row 29:** /submarkets/carolina-forest/ prints Redfin ($418,000) and SC Realtors ($464,710, ZIP 29579) medians. Our deed resale figure is $439,750. Name the group and year so the two pages do not seem to disagree. Print Surfside's own verified $745,000 for houses.
- **Row 28:** the Surfside page says 14 minutes for the same drive. Say "about 13 to 14 minutes".
- **Row 30:** the researcher's open question is settled. All four tax districts here pay the plain city rate, so drop the "until then say about" caveat. Keep "about" only for rounding.
- **Not verified 1 (Belle Harbor and Sanctuary as base land)** is still open. I found no base boundary map either. Keep "the neighborhoods around it".

## Photos (PLAN.md), checked on the Commons file pages through the Commons API

| File | Licence on the file page | Verdict |
|---|---|---|
| Panorama_of_The_Market_Common,_Myrtle_Beach_(May_2023)_01.jpg | CC BY-SA 4.0, DiscoA340, own work, 2023-05-13, 9120 x 2800 | Accepted. Matches the plan's description. |
| WarbirdPark.jpg | CC BY-SA 3.0, Erechtheus, own work, 2006-08-01, 2560 x 1706 | Accepted. It shows an A-10 from behind and an A-7 to the right. Credit the licence as 3.0. |
| The_Market_Common,_Myrtle_Beach_(10_June_2023)_08.jpg | CC BY-SA 4.0, DiscoA340, own work, 2023-06-10 | Licence fine. Caution: the "GRAND 14" theater front with its sign is the subject. rules/images.md line 26 bars a photo whose subject is a brand sign or storefront name, and a few people near the door may be recognizable at full size. Use the lake photo instead. |
| The_Market_Common,_Myrtle_Beach_(13_May_2023)_35.jpg | CC BY-SA 4.0, DiscoA340, own work, 2023-05-13 | Accepted. It is already on the site with a record in `data/photos.json` (images/55-plus/del-webb-grande-dunes/market-common-lake.webp). Reuse it. |
| Myrtle_Beach_AFB_-_Overview_Map.jpg | "Public domain", artist and credit "United States Air Force", 1960; no source given | Not accepted. The public-domain tag rests on a bare credit line with no source. Use the 1984 USGS map; its PDF URL answers 200, and USGS maps are public domain. |

No image files are in `chapter3realty/images/2026-11-n/submarkets-market-common/` yet.

## Should not be published

Nothing as such. As written, rows 2 (A-10 decade), 12 ("newest homes"), 14 ("in the neighborhoods") and 31 ("$100 to $150") would print things the sources do not support. They are safe only in their corrected wording.
