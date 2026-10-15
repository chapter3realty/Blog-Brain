# Affordable places to live: independent verification, round 14 (v3)

Rows 209 to 213 of `affordable-facts.md`. Verifier did not research or write them. Date of check: 2026-10-15. OSRM is the public router, no traffic. I opened every URL myself (curl with a browser user agent, text extracted) and re-ran every drive. The ledger and the page's struck list are untouched; the strikes are in `aff-struck-v3.json`.

## Row 209: verified with corrected wording

**Opened:** D.R. Horton, The Townes at Amber Bluff; D.R. Horton, Smart Home page (drhorton.com/smart-home, the primary source for what the package holds); OSRM; Nominatim and the OSM API for the end points.

**Smart home, counters, appliances.** The community page says: "each home comes with incredible standard features, including America's Smart Home® technology, granite countertops, and stainless steel appliances". It names only "America's Smart Home® technology", not the lock, thermostat or doorbell. D.R. Horton's smart-home page does: "Honeywell T6 Pro Z-Wave Thermostat", "HomeConnect 620 ... Lock and unlock your front door", "Alarm.com Video Doorbell"; its fine print says "A D.R. Horton Smart Home is equipped with ... a Z-Wave programmable thermostat manufactured by Honeywell; a Z-Wave door lock manufactured by Kwikset; ... an Alarm.com video doorbell." So "front door lock, thermostat and video doorbell" holds, on the builder's two pages together (row 146 had it from a listing). It is the builder's statement about its homes; the page says "came with", which is fine for new sales, but these are builder claims, not something we inspected. Granite and stainless: verified.

**Drives, re-run from (33.810207, -79.021249):**
- Coastal Carolina University (OSM way 43967615, the campus polygon's center, 33.7953227, -79.0126825): 6.23 min, 1.71 mi. The campus is about 1.5 km wide (box 33.7887 to 33.8018, -79.0196 to -79.0033). The center snaps to a campus road 16 m away. The address point for 100 Chanticleer Drive West (33.7956, -79.0074) gives 5.05 min; the near (northwest) edge is 3.5 min; the south side on US 501 is 6.1 to 6.7. "Six minutes" is right for the middle of the campus. The builder's page says "4 minutes to Coastal Carolina University"; that is to the near edge, not a conflict.
- Horry-Georgetown Technical College (way 51184726, 33.7947234, -79.0037642, snaps 6 m): 6.00 min, 2.14 mi. Rounds to 6. A test point at its US 501 frontage gives 6.1.
- Conway Medical Center (way 51357838, 33.7849817, -79.0006405, 300 Singleton Ridge Road, snaps 5 m): 6.73 min, 2.78 mi. Rounds to 7.
- All three match the row. The rounding (under 15 minutes, nearest minute) gives 6, 6 and 7, as the page says. "A six-minute trip" and "a seven-minute one" hold. Not "a few minutes": the page does not say that.

**Downtown Conway and its riverwalk, "an eight-minute drive" (page sentence, row 209's Riverwalk figure): the end point is the problem.** The row's 8.32 min / 3.03 mi goes to OSM way 606550198, "Riverwalk Park" (box 33.8277 to 33.8304, -79.0453 to -79.0435), which is the south end of the riverwalk by the SC 905 bridge. The riverwalk and downtown are reached at the foot of Main Street. Same start:
- Main Street at 4th Avenue (33.8360, -79.0478): 6.57 min, 2.70 mi.
- Main Street Landing, foot of Main (33.8352, -79.0468): 6.22 min.
- South end (the row's point): 8.32 min.
D.R. Horton's page says "7 minutes to Conway Riverwalk" and "8 minutes to Downtown Conway". A web search of the city's riverwalk reports says it runs along the Waccamaw River in downtown Conway, beneath the Main Street Bridge and behind Main Street businesses, and now to the Highway 905 bridge. So "eight minutes" to the riverwalk and downtown is the far end, not where most readers arrive, and downtown is closer than that. SAFE WORDING: Downtown Conway is about a 7-minute drive, and the riverwalk on the Waccamaw River 6 to 8 minutes depending on where you join it [OSRM to Main Street at 4th Avenue, 6.6 min, and to the riverwalk's south end, 8.3; D.R. Horton lists 7 to the riverwalk and 8 to downtown]. Struck in the JSON.

**Sibling check.** The neighborhoods ledger row 253 gives Wild Wing Plantation to Coastal Carolina University 11 min and to the same Riverwalk Park point 16.6 min (from the Wild Wing reference point, -78.978745, 33.794918). The Fairways here (row 200) gives CCU 8 min from a point 0.5 mi away. Different starts; each page names its place. But the 8-minute figure for the Fairways and the 11-minute figure for Wild Wing are 3 minutes apart at 0.5 mi of offset: the neighborhoods writer may want to name the start. Not an error on this page.

## Row 210: verified with corrected wording

**Opened:** SC Trails (SCPRT) park page; City of North Myrtle Beach expansion page; WMBF, Aug. 8, 2025; WMBF, Feb. 13, 2026 (expansion complete); Shark Wake Park's site; Shark (Greg Norman Company) news, June 6, 2016; Discover South Carolina (SCPRT) "Get your thrill on at North Myrtle Beach Park and Sports Complex" for a second source.

**What holds.**
- SC Trails: "an eco-friendly 162-acre park"; "20-acre Carolina Bay"; "walking trails"; "25-acre lake"; "an ADA accessible playground"; "two dog parks"; address "150 Citizens Circle | Little River, SC 29566".
- City: "Construction on the Park & Sports Complex expansion began in May 2024 and was completed in November 2025." "Included in the Expansion: 5 Soccer Fields 6 Baseball Fields Freshwater Ponds Walking Trails 2 Playgrounds Picnic Shelters". WMBF: "the 90-acre expansion".
- Shark Wake Park's site lists "Located in North Myrtle Beach Sports Complex 150 Citizens Circle". Shark news: "South Carolina's first full-size cable watersports park ... at the North Myrtle Beach Sports Complex". Discover SC: "Operating out of the park's 20-acre lake is Shark Wake Park". So "Shark Wake Park is on the lake" holds (second source); a cable wakeboard park holds.
- Drives from the row's starts: Villas at Sandridge (33.852846, -78.696635) to the park (OSM way 447318370, 33.8405685, -78.7093563; snaps to Citizens Circle, the park's own loop road with the 150 address, 56 m): 5.28 min, 1.67 mi, rounds to 5. Indigo Grove (33.862931, -78.749665): 11.20 min, 4.55 mi, rounds to 11. Both match the row. The arrival point is the park's access road, not a spot inside the park.

**What does not hold as written.**
1. **"covers 162 acres" is out of date (time).** SC Trails' 162 acres is the park as listed before the expansion (its fields list: eight soccer/lacrosse, six baseball/softball). The city built a 90-acre expansion, finished November 2025. Discover SC (older) says "the 140-acre park". No source gives the park's size today. Three sources disagree on the base size (140, 162), and none says whether 162 includes the new 90. The page uses "162-acre" in the chart label, the short answer and the entry heading. SAFE WORDING: The original park covers 162 acres [SC Trails]; the city finished a 90-acre expansion in November 2025 [City of North Myrtle Beach]. For labels, drop the number: "a big park five minutes away".
2. **"25-acre lake".** SC Trails says 25 acres; Discover SC says 20-acre lake (and 12-acre Carolina bay against SC Trails' 20). Two state-agency pages disagree. SAFE WORDING: the park has a lake with walking trails around it [SC Trails]. Drop the acreage.
3. **"11 ball fields".** The city lists 5 soccer fields and 6 baseball fields. "Ball fields" for soccer is loose and 11 is a sum across two sports. SAFE WORDING: The expansion added 5 soccer fields, 6 baseball fields, ponds, trails and 2 playgrounds [City of North Myrtle Beach].
4. "two dog parks" has one current source (SC Trails; Discover SC, older, says "a dog park"). Kept; low risk, it is the state parks agency's own page.
5. "Two more playgrounds": the expansion adds 2 playgrounds. Holds.

## Row 211: verified

**Opened:** marshwalk.com home and /about/ (the owner's site); SC State Parks, Huntington Beach; OSM API for ways 1506910428 and 130659501; Nominatim.

- MarshWalk: "a half-mile wooden boardwalk along a natural saltwater estuary"; "waterfront dining, live music nightly"; "there's never a cover charge on the MarshWalk!"; "4025 Hwy 17 Business Murrells Inlet, SC 29576". "Live music every night" says no more than "live music nightly" (the owner's own claim, a promoter's; no season is stated). "Lined with restaurants": "waterfront dining" and a restaurant list (Bovine's, The Claw House, Creek Ratz, Dead Dog Saloon, Drunken Jack's, Wahoo's, The Wicked Tuna). Holds.
- Huntington Beach State Park: "3 miles of pristine beach for swimming, running, fishing or just relaxing"; "The park's freshwater lake is a sure-fire place to see alligators". The page's "a lake where you can see alligators" is softer than "sure-fire", good.
- Drives from Wynbrooke (33.584176, -79.048446):
  - MarshWalk, 4025 US 17 Business (Census geocode, -79.032164, 33.558371, snaps 7.5 m): 5.22 min, 2.68 mi, rounds to 5. The point is the address, where a reader arrives.
  - Huntington Beach entrance station: OSM way 1506910428 is tagged `barrier=toll_booth, building=guardhouse` (four nodes near -79.07114, 33.51259). The row uses its middle, -79.07109655, 33.51261885: 10.29 min, 6.03 mi, rounds to 10. It is the entrance, not a point inside the park. Same end point as the gated ledger rows 174 and 178.
  - Brookgreen Gardens, OSM way 130659501 (tagged `amenity=parking`, beside the Rainey Sculpture Pavilion; OSM does not call it "visitor lot"): 16.52 min, 7.87 mi. To the Brookgreen way center (33.5211, -79.0922): 17.43 min. Under the rule (15 minutes or more rounds to the nearest 5) both give 15. It is within a minute of the 17.5 cutoff; "about 15" is correct by the rule but the low side of fair.
- Sibling check: the gated ledger gives the park entrance 11 min from Wachesaw East (row 178) and 15 min/18.5 (row 174, to the park's center) from a different start; the neighborhoods ledger row 252 gives Prince Creek 7 min to the MarshWalk and 12 to the entrance. Different starts, each stating its place; none disagrees for the same start.

## Row 212: verified with corrected wording

Chart labels are the `feature` fields in the spec. Prices and the Myrtle Beach reference are `money(price)`: the chart, the chips and the FAQ all call the same `pr()`/`money()`, so one value feeds all three (Parkview $190,000; Fairways $215,000; Sawgrass East $225,000 from 222,500, a tie rounded up; Birchwood $225,000 from 223,825; Golf and Yacht Club $225,000 from 225,000; Forestbrook $230,000 from 232,310; Victory Point $235,000 from 235,630; Amber Bluff $240,000 from 237,500, a tie rounded up; Villas and Indigo Grove $245,000; Wynbrooke $250,000 from 249,500; Polo Farms $255,000; Myrtle Beach home $421,250 from row 24). They match rows 117 to 128 and 155 to 163 as rounded in row 154. Label by label:

- **Parkview "golf course across the street, beach 4 min": strike "across the street".** Beach 4.0 min holds (row 164; I re-ran the 2.3-mile-class routes in earlier rounds' rows; unchanged). Rows 179 and 199 do not support "across the street": row 179 says the airport is across Harrelson Boulevard from the course, not Parkview from the course. Row 178 measured 259 m from the middle of Parkview's sales to the course edge; I measured 306 m to the nearest OSM node of the course polygon (way 47957655). No row shows the two facing across a road. The entry sentence "Across the road is Whispering Pines" has the same problem. SAFE WORDING: Whispering Pines, the city's golf course, is under a quarter mile from the middle of Parkview [OSM, straight line, 0.16 to 0.19 mi]. Struck in the JSON.
- **Fairways "golf community, hospital 6 min":** 5.99 min to Conway Medical Center; row 143 (golf community, verified). Holds.
- **Sawgrass East "pool and clubhouse, county gym 6 min":** row 150 (pool and clubhouse, with the rentable-clubhouse claim already struck); the Carolina Forest Recreation Center has "a full gym" (The Farm ledger row 80), 6.47 min (row 186) rounds to 6. Holds. (The ledger row says "pool, clubhouse, county gym"; the spec says "pool and clubhouse": same facts.)
- **Birchwood "new house on a quarter acre":** row 133 (lots 0.23 to 0.28 acre, built 2025 and 2026). Holds.
- **Golf and Yacht Club "gated, boat ramp 7 min": the figure disagrees with the gated page.** Gated holds (row 144 verified: "Gated" in all 12 older-section listings; 24-hour security). Enterprise Landing from the middle of the older homes (33.649402, -79.05007): 7.49 min, 2.49 mi, rounds to 7. But the gated page says "about a 4-minute drive from the entrance" (gated rows 178 and 186: 4.4 min from the Bay Road entrance; 6.21 min from the community dot), and the affordable entry says "a seven-minute drive from the Golf and Yacht Club" with no start. The same drive carries two figures on two pages. A reader driving from the gate gets 4. SAFE WORDING: Enterprise Landing, a public boat ramp off Bay Road onto the Intracoastal Waterway, is about a 4-minute drive from the entrance [OSRM from the Bay Road entrance, gated ledger row 178]. Chart label: "gated, boat ramp 4 min from the gate". Struck in the JSON.
- **Forestbrook Village "new townhome, schools 5 min":** the entry says four to five (Forestbrook Middle 4.3 min, Elementary 4.9 min, row 184). 4.3 rounds to 4. SAFE WORDING: "schools 4 to 5 min". Struck in the JSON.
- **Victory Point "on the old speedway, by Tanger Outlets":** row 142's corrected wording is "on part of the former Myrtle Beach Speedway land". "On the old speedway" drops "part of". Tanger is 4.6 min (row 183), "by Tanger Outlets" holds as the page uses it (WMBF: "beside the busy Tanger Outlet intersection"). Minor and not struck: the body text says "built on part of the old Myrtle Beach Speedway"; the writer may add "part of" to the chart label and the entry heading.
- **Amber Bluff "smart home, university 6 min":** rows 146 and 209. Holds (6.23 min to CCU's middle; see row 209).
- **Villas at Sandridge "beach 7 min, 162-acre park 5 min":** beach 7.46 min (row 185, rounds to 7); park 5.28 min. The 162-acre figure fails (row 210). SAFE WORDING: "beach 7 min, big park 5 min". Struck in the JSON.
- **Indigo Grove "new house, no high-risk flood lots":** row 193: 169 of 169 lots in zone X, none in the high-risk zone. "New house" holds (Lennar sold 144 of 169 lots in the window). Holds.
- **Wynbrooke "MarshWalk 5 min, beach 9 min":** MarshWalk 5.22; beach 8.9 min to Garden City access (row 164) rounds to 9. The ledger row lists only the MarshWalk half; the spec adds the beach, backed by rows 164 and 185. Holds.
- **Polo Farms "one-story house, $20 HOA fee":** row 139 (one level; $12 to $22, middle $20). Holds.

## Row 213: wrong (one sentence is false; the rest hold)

1. **Chips.** "Usually sold for About $X": the same `pr()` as the chart. "HOA fee About $N a month": spec FEE values 325, 390, 425, 120, 95, 170, 235, 100, 300, 80, 450, 20. Row 169 uses 325, 390, 425, 120, 95, 170, 235, 100, 297 (Villas), 80, 450 (5,400/12), 20; Villas shows $300 as the "about" of 297. "Fee and tax a year About $N": 4,700; 6,100; 6,000; 2,400; 2,100; 3,000; 3,800; 2,200; 4,600; 2,000; 6,500; 1,300. All match row 169, which I recomputed above in earlier rounds' note (for example Parkview 325 x 12 = 3,900 + 767.60 = 4,668 to 4,700; Wynbrooke 5,400 + 1,069 = 6,469 to 6,500). The chart note says "besides the mortgage and insurance", as the row 169 and row 181 notes require. Golf and Yacht Club "Older part usually sold for" with $225,000 and a $95 fee matches rows 120, 161. Holds.
2. **Indigo Grove flood sentence.** Row 193: 169 of 169 lots in FEMA zone X. "Every lot is outside the high-risk flood zone" holds; "so a lender usually will not require flood insurance" is hedged with "usually" and holds for the federal requirement, which attaches to the high-risk zone. A lender can still ask for it on its own terms, which "usually" covers. Holds.
3. **Sawgrass East "Resales here went for less than the new townhomes at Victory Point, a ten-minute trip." WRONG.** Row 174 measured 10.9 min (654.1 s, 3.7 mi) from the middle of Sawgrass East's sales to the middle of Victory Point's; I re-ran it (-78.929975, 33.756167 to -78.951801, 33.7454) and got the same. Under the rule (under 15 minutes to the nearest minute) that is 11. Row 184 already put "eleven minutes" into the page; the rewrite restored "ten" (lesson B30). Prices hold: $222,500 against $235,630. SAFE WORDING: Resales here went for less than the new townhomes at Victory Point, an 11-minute trip [OSRM, middle to middle]. Struck in the JSON.
4. **Golf and Yacht Club "D.R. Horton's newer houses at Sandpiper Place, inside the community, went for about $330,000."** Row 161: 91 sales, all D.R. Horton, middle $329,000, inside the community by the MLS name. "Went for about" reads as the usual price; "usually went for" says it better. Holds.
5. **Short answer.** "Parkview is a four-minute drive from the beach" (4.0 min): holds. "Birchwood's new houses are on a quarter acre": holds. "Villas at Sandridge is five minutes from a 162-acre park": the five minutes holds (5.28); the 162 acres fails (row 210). SAFE WORDING: Villas at Sandridge is five minutes from a big park with a lake and a wake park.
6. **Forestbrook Village "next to the older Forestbrook neighborhood".** Row 162 gives only "centers 0.6 km apart", which does not show adjacency. In OSM, the older neighborhood's Brookgate Drive reaches within 132 m of the Village's middle point and Doctors Road within 192 m, so the two touch or face each other. "Off Forestbrook Road, south of US 501" is row 162. Holds.

## Wording the website's build may refuse

None of my safe wordings uses "sets", or a road, fee or park that "runs" or "carries". "A cable pulls riders" (the page's own) is a machine, not personification.

## Fair housing and money

Everything above is about features. No interest rate or payment amount. The yearly "fee and tax" figure is a calculation, labeled besides the mortgage and insurance.

## Summary

Counts: verified 1 (row 211); verified with corrected wording 3 (rows 209, 210, 212); wrong 1 (row 213); unverifiable 0.

**Wrong or corrected:**
- Row 213, Sawgrass East: "a ten-minute trip" to Victory Point is 10.9 minutes. Write "an 11-minute trip".
- Row 209: "Downtown Conway and its riverwalk ... an eight-minute drive" measures the riverwalk's far south end. Write "about a 7-minute drive" to downtown and 6 to 8 to the riverwalk.
- Row 210: "covers 162 acres" and "162-acre" (chart, short answer, entry heading) are the pre-expansion park; a 90-acre expansion was finished in November 2025 and no source gives today's total. "25-acre lake" (state sources say 25 and 20) and "11 ball fields" (5 soccer and 6 baseball) change as in the notes.
- Row 212: Parkview "across the street" (no row supports it; use "under a quarter mile"); Golf and Yacht Club "boat ramp 7 min" against the gated page's 4 minutes from the entrance; Forestbrook "schools 5 min" (use 4 to 5); Villas "162-acre park 5 min".

**Claims that should not be published as written:** the Parkview "across the street / across the road from the golf course" claim until a parcel overlay shows the two facing a road; the 162-acre park size, the 25-acre lake size and the 11 ball fields.

**Disagreements between pages:** Enterprise Landing (affordable 7 min from the middle of the older homes, gated 4 min from the entrance); Wild Wing's Riverwalk and CCU drives (neighborhoods, 16.6 and 10.7 min from its reference point) against the Fairways (8 and 7.9) are from different starts and are not errors, but each should name its start.
