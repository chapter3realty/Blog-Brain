# Fixer-row verification: /submarkets/myrtle-beach/market-common/

Verifier: independent (prompts/verifier.md), 2026-11-08. I did not research these rows. I opened each source myself and re-ran the scripts against the raw pulls. No page or spec was edited. I added seven entries to `submarkets-market-common-struck.json` (rows 38 to 41). Each fires on the built page today, and none fires on its "use" wording.

Rows marked VERIFIED-BY-FIXER: 37, 38, 39, 40, 41, 42, 43. Rows 6 and 21 only mention the term in their notes and were verified earlier.

| Row | Result |
|---|---|
| 37 | VERIFIED |
| 38 | CORRECTED |
| 39 | CORRECTED |
| 40 | CORRECTED |
| 41 | CORRECTED |
| 42 | VERIFIED |
| 43 | VERIFIED |

## Row 37: the directory. VERIFIED

I fetched marketcommonmb.com/directory/ on 2026-11-08. Food & Drink has 18 entries. "Ocean Blue Prime Steakhouse – COMING SOON" is the only one marked not open, so "about 17" is right. P.F. Chang's, Tupelo Honey Southern Kitchen & Bar, Gordon Biersch Brewery Restaurant, CO Sushi, Travinia Italian Kitchen and Wine Bar, Gios Pizzeria Napoletana and Dirty Don's Oyster Bar & Grill are all listed. So are Barnes & Noble, Anthropologie, Pottery Barn, Chico's and J.Jill. The other places are listed too: GTC Cinema, 810 Entertainment (its URL is "810-billiards-bowling"), EdVenture Children's Museum, The Yard Gym and Yoga in Common. The page sentences match.

## Row 38: the calendar. CORRECTED (one sentence)

I fetched marketcommonmb.com/events/ for November 8 to 11, and the April 2026 family-events page. These all check out:
- Mystery Movie Monday at GTC, 7 to 9 p.m.
- Live Music with Dash at Gordon Biersch, every second Tuesday.
- Live Jazz at Gio's on November 11.
- Pedego bike tours on Wednesdays and Saturdays at 10 a.m.
- Art in the Park at Valor Park on April 18 and 19, with November dates in the listings.

One sentence is wrong. Dirty Don's trivia is "Tuesday Trivia Night", on Tuesdays only. Only 810's "Team Trivia" runs on both Tuesdays and Thursdays. The page lists it under "Tuesdays and Thursdays", so it reads as restaurant trivia on Thursdays too.

- Page: "**Tuesdays and Thursdays** Free trivia nights at a restaurant and at the bowling hall."
- Use: "**Tuesdays and Thursdays** Free trivia nights at the bowling hall, and on Tuesdays at a restaurant too."
- Spec: `specs/market-common.js` line 458.

## Row 39: Cresswind. CORRECTED (one sentence)

I opened both Wayback captures (`id_` raw). The blog post from November 2012 says: "The deal closed earlier this month", "The Cresswind name represents the active adult lifestyle brand of Kolter Homes", "a 139-acre age targeted community with close to 400 homesites", "The 10,000 square foot clubhouse (known as "The Club") will include a fitness center and resort style pool", and "The Grand Opening is anticipated for Spring 2013". The community page from 2013 says "Cresswind Myrtle Beach opens spring of 2013". "Started it in late 2012" and "active adult community, aimed at older buyers" are supported.

The problem is the time period. "10,000 square foot" and "will include a fitness center" were Kolter's plans in 2012, before anything was built. The page says them in the present tense, as facts about the building today. Listing and community sites today give the clubhouse as about 12,000 square feet. Those are secondary sources and are not good enough to print a new number. The fix is to drop the size and say the fitness center came from Kolter's plans. The 2023 aerial (row 40) shows the clubhouse, the pool, the tennis and pickleball courts and the lake path.

- Page: "Its 10,000-square-foot clubhouse has a fitness center, with a pool, tennis and pickleball courts and a lake path."
- Use: "Kolter's plans gave its clubhouse a fitness center, and the clubhouse has a pool, tennis and pickleball courts and a lake path beside it."
- Spec: line 357.

## Row 40: amenities from the aerial. CORRECTED (two sentences)

I re-ran `hood_details.py` on the raw parcels, and its output matches `hood-details.json` exactly. I looked at all seven tiles at full size. Each tile is centered on the amenity parcel's label point.
- Cresswind: a clubhouse, a pool, a tennis court, pickleball courts and a lake with a path. Confirmed.
- Emmens RESIDENTS CLUB: a pool and a pool house at the lake's edge. Confirmed.
- Emmens AMENITY AREA: a park with a small pavilion and paths. Confirmed.
- Belle Harbor: a pool, a small clubhouse and a sports court. Confirmed.
- MBAFB AMENITY AREA: a pool and a pool house. All 32 houses within 150 m are in BALMORAL legal groups, so it is Balmoral's. Confirmed.
- Park Place: a pool and a pool house. Confirmed.

Two things are wrong.

1. **The Reserve's pool is not beside the lake.** On the reserve_ca3 tile, a street and a row of houses stand between the pool and the lake. The nearest shore is about 75 m away.
   - Page: "About 110 houses on lots of about 0.15 acre, with a pool and pool house beside a lake."
   - Use: "About 110 houses on lots of about 0.15 acre, with a pool and pool house."
   - Spec: line 362.

2. **"Six of them have one" misses Withers Preserve.** The county parcel "SANCTUARY @ WITHERS PRESERVE; C/A 1" (land use 123, the same code as Park Place's amenity parcel) is at -78.96302, 33.66502. Its label point fell outside the script's search, because the legal description says neither AMENITY AREA nor RESIDENTS CLUB. On the NAIP 2023 aerial (USGS image service, 300 m tile centered on the parcel), it has an outdoor pool, a pool house and a parking lot. My tile is at `scratchpad/wfn/mcverify/out/tiles/sanct_ca1.jpg`. Highlands' C/A (code 123) is woods. I checked tiles over West Lake and Sweetgrass Square and found no shared pool, only private backyard pools.
   - Page (FAQ): "On the 2023 aerial photo, six of them have one. Cresswind has a clubhouse with a pool and courts. Emmens Preserve, Belle Harbor, Balmoral, Park Place and The Reserve each have a pool with a pool house or small clubhouse."
   - Use: "On the 2023 aerial photo, seven of them have one. Cresswind has a clubhouse with a pool and courts. Emmens Preserve, Belle Harbor, Balmoral, Park Place and The Reserve each have a pool with a pool house or small clubhouse. Withers Preserve has a pool with a pool house in its Sanctuary section."
   - Spec: line 564.
   - Optional, for consistency, on the Withers Preserve card (line 360), after the lot size: "Its Sanctuary section has a pool with a pool house."
   - Also update the ledger note on row 40, which says "No amenity parcel was found in ... Withers Preserve".

## Row 41: lot sizes. CORRECTED (three sentences; the medians are right)

I re-ran the script. The house medians match: Emmens 0.151, Park Place 0.151, West Lake 0.153, The Reserve 0.151, Cresswind 0.158, Belle Harbor 0.166, Withers 0.185, Balmoral 0.212 and town center streets 0.075. Also, 0.15 × 43,560 = 6,534, so "about 6,500 square feet" is right.

The problem: these are medians for houses only. Three cards give the number for every home, townhomes included. I ran the same script for townhomes. The middle townhome lot is about 0.033 acre on the town center streets (237 townhomes), 0.072 in Emmens Preserve (122) and 0.067 in Belle Harbor (106).

- Page: "About 500 homes, about half townhomes and half houses, on small lots, about 0.08 acre."
  Use: "About 500 homes, about half townhomes and half houses, on small lots: about 0.08 acre for a house and 0.03 for a townhome." (spec line 353)
- Page: "The largest, with about 730 homes: about 610 houses and 120 townhomes, on lots of about 0.15 acre."
  Use: "The largest, with about 730 homes: about 610 houses and 120 townhomes. A house lot is about 0.15 acre." (spec line 355)
- Page: "About 480 homes at the west end, by the US 17 Bypass, most of them houses, on lots of about 0.17 acre."
  Use: "About 480 homes at the west end, by the US 17 Bypass, most of them houses, on house lots of about 0.17 acre." (spec line 356)

The town center's townhome median needs its own ledger figure: 0.033 acre, 237 townhomes, the same script with `kind == "townhouse"`.

## Row 42: listings for sale. VERIFIED

I re-ran `analyze_listings.py` on `listings-29577.json` (pulled 2026-11-08T08:04Z). The groups match `listings-findings.json` exactly. Houses: 43, with beds 3: 22, 4: 14, 5: 5 and 2: 2, so 36 of 43 have 3 or 4. The median is 2,188 sq ft. Townhomes: 20, with beds 2: 7 and 3: 13. The median is 1,713 sq ft. "Each has 2 or 3 bedrooms" is true for all 20. The figures are in aggregate only.

## Row 43: cleanup of the old base. VERIFIED

I read both AFCEC pages from Wayback (the live site returns 403).
- The article dated Dec. 17, 2019 says: "Since the 1990s, AFCEC environmental engineers closed 229 IRP sites at Myrtle Beach. Today, only 15 sites remain open and include landfills, groundwater sites and sites with only land use control remedies." It also says: "All sites are being cleaned up to residential standards ... There are no non-residential use restrictions on the soil or groundwater at Myrtle Beach."
- The program page says: "The groundwater is being cleaned up to residential (unrestricted) use."

The page's wording, "every site is being cleaned up to the standard for homes, and that no limit on the soil or groundwater rules out homes there", is a fair plain reading. It is dated "In 2019". It names no site.

## Sentences to change (7)

1. "Tuesdays and Thursdays Free trivia nights at a restaurant and at the bowling hall." → "Tuesdays and Thursdays Free trivia nights at the bowling hall, and on Tuesdays at a restaurant too."
2. "Its 10,000-square-foot clubhouse has a fitness center, with a pool, tennis and pickleball courts and a lake path." → "Kolter's plans gave its clubhouse a fitness center, and the clubhouse has a pool, tennis and pickleball courts and a lake path beside it."
3. "…with a pool and pool house beside a lake." (The Reserve) → "…with a pool and pool house."
4. "On the 2023 aerial photo, six of them have one. … Park Place and The Reserve each have a pool with a pool house or small clubhouse." → "On the 2023 aerial photo, seven of them have one. … Park Place and The Reserve each have a pool with a pool house or small clubhouse. Withers Preserve has a pool with a pool house in its Sanctuary section."
5. "…about half townhomes and half houses, on small lots, about 0.08 acre." → "…on small lots: about 0.08 acre for a house and 0.03 for a townhome."
6. "…about 610 houses and 120 townhomes, on lots of about 0.15 acre." → "…about 610 houses and 120 townhomes. A house lot is about 0.15 acre."
7. "…most of them houses, on lots of about 0.17 acre." → "…most of them houses, on house lots of about 0.17 acre."
