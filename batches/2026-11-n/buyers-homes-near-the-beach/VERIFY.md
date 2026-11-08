# Verify: /buyers/homes-near-the-beach/ (batch 2026-11-n)

Independent verifier, 2026-11-08. I did not research these rows. I opened every source myself and re-ran every data script into my own scratch folder (`wfn/buyers-homes-near-the-beach/verify/`).

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `buyers-homes-near-the-beach-struck.json` in this folder, 16 entries. Every entry fires on its own struck text, and no approved wording fires (tested with `tools/struck-check.js`). The page is not built yet, so there was no page to check.

**For the lead:** batch mode reads `batches/2026-11-n/facts/*-struck.json`. My brief let me write only in this folder, so please copy the file there.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 12: rows 1, 2, 4, 9, 13, 14, 16, 18, 19, 20, 23, 24 |
| CORRECTED | 15: rows 3, 5, 6, 7, 8, 10, 10b, 10c, 11, 12, 15, 17, 21, 22, 25 |
| STRUCK | 0 |

A CORRECTED row may be used only in its corrected wording.

## The main fault: campground homes counted as houses

The site's map search (`type=house`) returns 79 homes on leased sites in two campgrounds:

- Ocean Lakes Family Campground, 6001 S Kings Hwy. Its own site lists "Annual Lease Sales" and a "Leaseholder Portal".
- Apache, 9700 Kings Rd.

The county codes those lots as campground land (118, 119, 122), so they fail the ledger's own house rule (row 1). 62 of them are within half a mile of the ocean, and all 62 report no HOA fee. They raised the near-beach house counts, lowered the near-beach prices, and caused most of the "short on the map, long on foot" houses in row 10b.

The deeds, the county stock, the flood counts and the access counts are not affected: campground lots are not in the house land-use codes.

I added `verify_campground.py` to the data folder. It drops these 79 pins and runs `analyze.py` and `analyze_walks.py` unchanged. It writes `findings-no-campground.json` and `walk-findings-no-campground.json`. Its deeds, stock and access sections match `findings.json` exactly. **The page's charts and numbers for listings and walks must read the two `-no-campground` files.** Row 15 is the one exception: it describes what the search returns, so it keeps the original numbers.

## What I re-ran

- **Shoreline.** I rebuilt `coast.geojson` from the TIGER 2024 shapefile. It is byte-identical.
- **analyze.py, analyze_walks.py, analyze_access.py.** Each output is identical to the researcher's.
- **Independent distance check.** I recounted with great-circle distance to a shoreline densified to 20 m. I got 7,192 house sales, and every band median is within one $5,000 step. The 10,417 parcels within half a mile came out as 5,097 + 5,316.
- **County.** The live count query returns 130,922. I queried the county about all 10,417 parcels within half a mile: none has HPR in its legal description, and 1 has a condo label.
- **CRM.** Today's live total for houses is 3,672; the pull had 3,677.
- **Router.** I asked the live router again for 4 random walks. All 4 are identical.
- **Router profile.** The router's About page says routing.openstreetmap.de runs the FOSSGIS profiles, which "differ from the profiles" of OSRM. The FOSSGIS foot profile has `default_speed = 4.5` (km/h). It marks private ways "restricted": a walk may start or end on one but not pass through one.
- **Kings Highway.** I re-measured it from `raw/kings-hwy.json`. The closest point is 0.18 mile from the ocean; the farthest is 1.27 miles, at about 33.78 N, the north end by Briarcliffe Acres.
- **Live pages.** I fetched the Myrtle Beach accessibility page, the North Myrtle Beach beach accesses page, Surfside /200, the Pawleys Island beach access page, the Horry County beach accesses page, the SCDOT US 17 Business project page and the Ocean Lakes home page. Every quote is on its page word for word.
- **Carried rows.** I checked each against its sibling ledger: Surfside 21, 48 and 53; Pawleys 49; condos 28; cost-to-own 23; relocating-which-town 17.
- **Site code.** I read `idx-lib/query.js` line 36 and `idx-lib/filters.js` line 51.

## Every correction

1. **Row 3.** Cut "mostly the oceanfront row and the row behind it". Nobody measured that. Keep "within about a tenth of a mile (about 500 feet)": about $1.33 million, then about $705,000.
2. **Row 5.** In the Surfside stretch, houses half a mile to 2 miles back sold for about $395,000. Houses 2 to 5 miles inland sold for about $420,000. That is a little less, not "about the same".
3. **Row 6.** With the campground homes out:

   | Distance from the ocean | Houses | Middle price | Per sq ft | Middle size |
   |---|---|---|---|---|
   | Under 1/4 mile | 202 | $960,000 | $445 | 2,350 sq ft |
   | 1/4 to 1/2 mile | 154 | $680,000 | $330 | 1,800 sq ft |
   | 1/2 to 1 mile | 163 | $650,000 | $300 | |
   | 1 to 2 miles | 309 | $650,000 | $280 | |
   | 2 to 5 miles | 865 | $450,000 | $220 | 2,100 sq ft |

   356 houses are within half a mile, not 420. Strike "and they are smaller": houses within a quarter mile are larger than houses 2 to 5 miles inland.
4. **Row 7.** Myrtle Beach: 101 houses, about $725,000, about $365 a square foot. Surfside Beach, Garden City and Murrells Inlet: 71 houses, about $990,000, about $460. North Myrtle Beach and the Georgetown coast do not change.
5. **Row 8.** Strike "rare but real": 72 of 450 sales is about 1 in 6. Houses for sale under $400,000 within half a mile: 16 in North Myrtle Beach, 6 in Myrtle Beach, 2 from Surfside to Murrells Inlet, and 1 on the Georgetown coast.
6. **Row 10.** 721 houses, not 800. On foot: 186 under a quarter mile, about $950,000; 109 a quarter to half a mile, about $680,000; 104 half a mile to a mile, about $650,000. Do not say the router "does not use private roads". Say the walk counts only public accesses on the state's map.
7. **Row 10b.** The researcher's cluster is Ocean Lakes, which is out of the count. Use: 27 of the 356 houses within half a mile are more than a mile on foot from a public access, 18 of them on the Litchfield and Pawleys Island coast. The middle walk is about 1.1 times the straight line, not 1.15. Do not name Ocean Lakes.
8. **Row 10c.** 14 of 20, not 14 of 21. Myrtle Beach has 5, not 6. Say "mostly", not "almost only".
9. **Row 11.** Cut "Huntington Beach State Park's 3 miles". No row gives that mileage. Use "3 public access points on the state's map".
10. **Row 12.** Do not say "every access along Garden City Beach". The south end of Garden City is in Georgetown County, which runs 41 accesses there on the state map. Use: Horry County maintains the accesses on the Horry County part of Garden City Beach.
11. **Row 15.** The search has no visible "Within 1 mi of the beach" filter, so cut that name. The map's area filters are "Walk to the beach", "Near the beach" and "East of 17". The router's pace is 4.5 km/h, not 5. Give the minutes as arithmetic at a stated pace, with no router: at about 3 miles an hour, a quarter mile takes about 5 minutes and half a mile about 10.
12. **Row 17.** The share drops below 1 in 10 between about 0.6 and 0.75 mile, and is about 1 in 100 from about 0.85 mile. It goes back up to 10.0 at 0.65 and to 1.1 at 0.95.
13. **Row 21.** Without the campground homes: 155 of 202 within a quarter mile have no HOA fee, and 97 of 154 a quarter to half a mile back. 91 of 865 from 2 to 5 miles does not change.
14. **Row 22.** Keep only "Most trips here need a car or a golf cart". Strike the writer's second sentence: it is not the owner's, and it reads as a figure of speech.
15. **Row 25.** Use: Horry County's oceanfront beach accesses in Garden City have free parking all year. Do not extend it to the Georgetown end.
16. **Deciding-fact paragraph.** Use 356 houses for sale within half a mile, not 420. "Never far" is not a measure: use row 13.

## Notes for the writer, from verified rows

- **Row 2.** The deeds are Horry County only. Say what houses in each band sold for. Never say a house loses value by moving back.
- **Row 14.** The page must not open a sentence with "So" (the site's audit fails it).
- **Row 24.** "The beach" there is the nearest of ten named beach spots, not the nearest street-end access. Label the start "from the middle house of each place".

## Photos (PLAN.md)

| Photo | File page or source | Licence | Looked at full size |
|---|---|---|---|
| 1. Garden City, USGS oblique | doi.org/10.5066/F7N877XX resolves to the USGS data release "Baseline Coastal Oblique Aerial Photographs ... Ponte Vedra, Florida, to South Carolina/North Carolina Border, August 24, 2011" | Public domain (U.S. government work) | The oceanfront row, a second row of raised houses behind it, a third row on the marsh, then the marsh, the creeks and the docks. The caption fits. The file name ends `-2011-1200w.webp`; PLAN.md has it right. |
| 2. Myrtle Beach oceanfront, USGS | same release | Public domain | Older houses on lawns, dune walkovers, Ocean Boulevard behind them, houses under oaks beyond. The caption fits. |
| 3. Cherry Grove from a height | commons.wikimedia.org/wiki/File:Cherry_Grove_Pier.jpg, read today: Melikamp, own work, taken 2012-04-29 | CC BY-SA 3.0, credit required | The foreground is a motel, an oceanfront condo tower and a parking lot. Older beach houses are on the left, and the pier is in the distance. The caption must not call the foreground houses. Describe it as Cherry Grove's oceanfront, the pier, and the houses behind Ocean Boulevard. |
| 4. Surfside Beach houses from the sand | commons.wikimedia.org/wiki/File:Surfside_Beach_Shoreline.jpg, read today: BullDawg2021, own work, taken 2023-07-16 | CC BY-SA 4.0, credit required | Two- and three-story beach houses behind low dunes. The caption fits. |

`node tools/photos.js check` passes on all four records (the photos.json files of 2026-11-a garden-city, myrtle-beach, north-myrtle-beach and surfside-beach).
