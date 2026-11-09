# Fixer rows checked: /invest/condo-buildings/ (batch 2026-11-b), rows 26 to 42

Independent verifier, 2026-11-09. I did not research these rows. Each source was opened again today. The page checked is the built page in the website working copy, `chapter3realty/invest/condo-buildings/index.html`.

Counts: 17 rows. 13 VERIFIED (27, 30 to 41), 4 CORRECTED (26, 28, 29, 42), 0 STRUCK. Six page sentences change.

## How the distances were measured

1. I re-ran `landmark_distances.py` on a copy of its three input files. Its output matches `landmark-distances.json` exactly. So the numbers are reproducible, but they are point to point: the mean of the listing pins to the OSM centroid of the landmark.
2. Point to point fails in two ways here:
   - A big landmark (a park, a golf course, a shopping center) has its centroid far inside it. The distance to its nearest edge is the honest one.
   - The listing pins are off for some buildings. Bay View's pins average about 0.17 mi north of 504 N Ocean Blvd. OSM puts 504 N Ocean Blvd (the Starbucks node, which the resort says is on site) at 33.68794,-78.88357. The county's BAYVIEW HPR parcels agree (33.68802,-78.88336).
3. So I measured twice more: from the county parcel shapes of each building's regime names (`regimes.json`), and edge to edge against the OSM outlines (Nominatim lookup with `polygon_geojson=1`). Scripts and outputs are in the scratchpad: `fv/edge.py` (pins to nearest edge), `fv/county_pts.py` and `fv/county.json` (county shapes), `fv/edge2.py` (parcel edge to landmark edge), `fv/oc.py` (Ocean Creek parcels to Barefoot Landing), `fv/osm/` (OSM data). The full scratchpad path is `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/fv/`.
4. A claim passes if the words hold on the pins, the county shapes and the nearest edge.

| Pair | Fixer (pins to centroid) | Pins to nearest edge | County parcels, edge to edge | Page words | Holds? |
|---|---|---|---|---|---|
| Myrtle Beach Resort to state park | 1.58 | 1.03 | 1.33 (centroids 1.91) | about a mile and a half south | No |
| Compass Cove to Springmaid Pier | 0.79 | 0.77 | 0.74 | under a mile north | Yes |
| Bluewater to Springmaid Pier | 1.13 | 1.12 | 1.11 | a little over a mile | Yes |
| Bluewater to Family Kingdom | 1.18 | 1.05 | 1.00 | a little over a mile | Yes (at the edge) |
| Landmark to Family Kingdom | 0.80 | 0.67 | 0.65 | under a mile north | Yes |
| Sea Mist to Family Kingdom | 0.56 | 0.43 | 0.47 | about half a mile south | Yes |
| Bay View to SkyWheel | 0.37 | 0.36 | 0.50 (centroids 0.53) | about a third of a mile north | No: the pins are off |
| Bay View to 2nd Avenue Pier | 0.50 | 0.48 | 0.29 (centroids 0.34) | about half a mile south | No: the pins are off |
| Camelot to SkyWheel | 0.54 | 0.52 | 0.49 | about half a mile north | Yes |
| Sands Ocean Club to Dunes Golf and Beach Club | 0.45 | 0.18 | 0.13 | about half a mile | No: 0.45 is the centroid of the course |
| Margate to Hilton | 0.46 | 0.44 | 0.40 | about half a mile south | Yes |
| SeaWatch to Tanger Outlets, Kings Road | 0.98 | 0.89 | 0.77 | about a mile | Yes |
| Ocean Creek to Barefoot Landing | 0.70 | 0.57 | 0.27 (Lodge); 0.04 (Ocean Creek Plantation parcels) | about three quarters of a mile | No |
| North Beach Towers to Barefoot Landing | 0.72 | 0.58 | 0.54 | about three quarters of a mile | No |
| Avista to Main Street's ocean end | 0.26 | 0.26 | 0.23 | about a quarter mile | Yes |
| Bay Watch to Main Street's ocean end | 2.60 | 2.59 | 2.55 | about two and a half miles south | Yes |
| Prince to Cherry Grove Pier | 0.13 | 0.03 | 0.00 (touch) | next to | Yes |
| Caribbean to Sea Captain's House | 0.06 | 0.04 | 0.02 | beside | Yes |
| South Hampton to Embassy Suites | 0.06 | 0.06 | 0.04 | beside | Yes |
| Royale Palms to Hilton | 0.05 | 0.01 | 0.01 | beside | Yes |
| The Palace to Landmark | 0.06 | | 0.015 | beside | Yes |
| Coral Beach to Sea Mist | 0.02 | | 0.04, Coral Beach north | just north of | Yes |
| Dunes Village to Beach Colony | 0.08 | | 0.05 | next to | Yes |

The Main Street point is right: in OSM, Main Street (ways 1267234933 and 1267234934) meets North and South Ocean Boulevard at 33.81880,-78.67238. Ocean Creek Drive runs from the beach (Ocean Creek Beach, 33.7887,-78.7379) to US 17 at about 33.7966,-78.7447. Barefoot Landing's outline is on the other side of US 17 there. The resort's own page calls it "our Barefoot Landing Resort" (row 18).

## Rows

| Row | Status | Finding |
|---|---|---|
| 26 | CORRECTED | Three of ten claims fail. **Myrtle Beach Resort**: the state park is more than a mile north on every measure (1.03 to 1.91), and a mile and a half only on the fixer's centroid. **Bay View**: the order is reversed. The 2nd Avenue Pier is about a third of a mile south (0.29 to 0.34) and the SkyWheel about half a mile north (0.50 to 0.53), from 504 N Ocean Blvd and the county parcels. The resort's own sentence ("the SkyWheel to the north and the Pier at 2nd Avenue to the south") gives no distances. **Sands Ocean Club**: 0.45 mi is to the middle of the golf course. Its edge is 0.13 to 0.18 mi away. The other seven claims hold (table above). |
| 27 | VERIFIED | All six pairs touch or nearly touch on the county shapes (0.01 to 0.05 mi). The values in the row (0.02 to 0.08) come from pins, but every word on the page holds. The directions agree with the street numbers (1105 and 1207 S Ocean Blvd; 1501 and 1605 S Ocean Blvd). caribbeanresort.com, read today: "the oceanfront tiki bar and Sea Captain's House next door." The Embassy Suites point is OSM node 8746300535, 9800 Queensway Blvd. |
| 28 | CORRECTED | Avista (0.23 to 0.26) and Bay Watch (2.55 to 2.60) hold. **Ocean Creek**: the resort's grounds reach US 17, across from Barefoot Landing. The Ocean Creek Plantation parcels come within 0.04 mi of its outline, so "about three quarters of a mile away" is wrong for the resort. **North Beach Towers**: 0.54 to 0.58 mi to the nearest edge; 0.72 is to the centroid of a shopping center about 0.7 mi across. Say "a little over half a mile". |
| 29 | CORRECTED (page wording) | Every part of the row is right. cherrygrovepier.com, read today: "3502 N. Ocean Blvd., North Myrtle Beach"; "Built in the 1950s and rebuilt after Hurricane Hugo"; "Driftwood Restaurant Located at the end of Cherry Grove Pier". The MLS name "Prince Resort - Phase I - Cherry Grove" is in by-building.json. OSM way 164851919: "Cherry Grove Beach, North Myrtle Beach". Prince's county parcels touch the pier line. The page drops the rebuild, so it reads as if the pier standing now dates from the 1950s. |
| 30 | VERIFIED | by-building.json has "Kingston Plantation - Margate Tower", "Kingston Plantation - Brighton Towers" and "Kingston Plantation - South Hampton". kingstonresorts.com, read today: "a condominium tower with ocean views, a lodge next to the lake, or a villa next to a serene lake and woods"; "Vacation Rentals at Kingston Resorts Hilton Myrtle Beach Resort Embassy Suites Myrtle Beach Kingston Condos & Villas Royale Palms". OSM puts Margate Tower in "Kingston Plantation". |
| 31 | VERIFIED | compasscove.com, read today: "condos across the Mariner, Pinnacle and Schooner buildings"; "23 water features, including six indoor and outdoor pools, three lazy rivers, five kiddie pools, two waterslides and seven hot tubs". The page also says its "$25+ million renovation is complete", so nothing is closed. |
| 32 | VERIFIED | bayviewresort.com, read today: the quoted sentence, "Starbucks onsite" and "an outdoor pool and spa". The distances that go with it are wrong; see row 26. |
| 33 | VERIFIED | caribbeanresort.com, read today: "Pirate's Plunge, a 200-foot outdoor lazy river, an indoor lazy river"; "Sea Captain's House next door". |
| 34 | VERIFIED | longbayresort.com now redirects to grandecaymanresort.com. Read today: "The Grande Cayman Resort, formerly Long Bay Resort, water amenities feature indoor and outdoor pools, the Silly Submarine water park with a waterslide, hot tubs, kiddie pools, and the 250-foot lazy river, which is enclosed and ideal for tube rides all year long." This also supports the page's "once called Long Bay Resort". The row's URL can be updated to grandecaymanresort.com. |
| 35 | VERIFIED | oceanreefmyrtlebeach.com, read today: "from the waterslide water park to our indoor and outdoor pools"; "Shipwreck Water Park". It says its "$15+ Million Dollar Renovation is COMPLETE". |
| 36 | VERIFIED | thecaravelle.com, read today: "Since its inception in 1960"; "Block-Long Poolscape"; "Featuring nine buildings"; the building list including "Sea Mark Tower"; footer "6900 N Ocean Blvd". |
| 37 | VERIFIED | beachcolony.com, read today: "7 Water Features Oceanfront Lawn"; "Spend all day unwinding in our lazy river"; "Enjoy both indoor and outdoor pools and whirlpools"; footer "5308 N Ocean Blvd". |
| 38 | VERIFIED | sandsresorts.com/sand-dunes-resort/, read today: "Sands Water Park – a splash-filled experience with slides"; "A large oceanfront lazy river"; "Huge On-Site Water Park (seasonal)". |
| 39 | VERIFIED | seawatchresort.com, read today: "six oceanfront pools ... two 225′ lazy rivers. Two of our pools are covered and heated seasonally so that you can enjoy them year-round"; "the exclusive gated Sea Watch"; "only minutes from the Tanger Outlets". It also lists an "In-Season 24-Hour Gated Property Entrance". "A gated resort" stands on the resort's own words. The distance (0.77 to 0.98) holds as "about a mile". |
| 40 | VERIFIED | palaceresort.com, read today: "Two Oceanfront Pools Three Outdoor Whirlpools Indoor Whirlpool". |
| 41 | VERIFIED | southcarolinaparks.com/myrtle-beach, read today: "Myrtle Beach State Park sits nestled among oceanfront maritime forest"; "Pier Store Hours"; "one of the last beachfront green spaces on the Grand Strand". That last phrase is in a staff member's note on the park's own page, and "one of the last" is already a hedge. The page also says the park's trails are closed from November through January for maintenance. The page does not mention the trails, so nothing changes. |
| 42 | CORRECTED | I re-ran all 30 strip URLs in `raw/strip-places-check.json` (29 places plus Breakers) today. Every total is the same as the file. All but two strips list only the building's own addresses, with spelling variants. Two strips have one listing at another address each. **Landmark**: one listing at 826 S Ocean Blvd, a pin 0.48 mi from the building. **Sea Mist**: one listing at 1207 N Ocean Blvd, a pin 4.8 mi away (it looks like an N for S typo). The right claim: the counts match for all 29; in 27 strips every listing has the building's own address; Landmark and Sea Mist each show one listing from elsewhere. No page sentence uses this row. The notes in Blog-Brain `batches/2026-10-b/data/idx-places.json` for landmark-resort and sea-mist-resort say "every one at the building's own street addresses". Fix those two notes. |

## Sentences on the built page that must change

| Row | Page sentence now | Replacement |
|---|---|---|
| 26 | "Myrtle Beach Resort is the southernmost group of towers on this page, about a mile and a half south of Myrtle Beach State Park." | "Myrtle Beach Resort is the southernmost group of towers on this page, more than a mile south of Myrtle Beach State Park." |
| 26 | "The SkyWheel is about a third of a mile to the north, and the 2nd Avenue Pier is about half a mile south." | "The 2nd Avenue Pier is about a third of a mile south, and the SkyWheel is about half a mile north." |
| 26 | "It is a large resort of at least 491 units on Shore Drive, about half a mile from the Dunes Golf and Beach Club." | "It is a large resort of at least 491 units on Shore Drive, under a quarter mile from the Dunes Golf and Beach Club's course." |
| 28 | "Barefoot Landing is about three quarters of a mile away." (Ocean Creek) | "Its grounds run up to US 17, across the highway from Barefoot Landing." |
| 28 | "It stands about three quarters of a mile from Barefoot Landing, and its typical fee is about $1,295 a month." (North Beach Towers) | "It stands a little over half a mile from Barefoot Landing, and its typical fee is about $1,295 a month." |
| 29 | "Prince Resort stands next to the Cherry Grove Pier, a fishing pier from the 1950s with a restaurant at its end." | "Prince Resort stands next to the Cherry Grove Pier, a fishing pier first built in the 1950s and rebuilt after Hurricane Hugo, with a restaurant at its end." |

Each of the six has an entry in `batches/2026-11-b/facts/invest-condo-buildings-struck.json` (rows 26, 28, 29). On the built page each entry fires on its sentence, and no approved wording fires any entry. Two older entries (row 5: Ocean Creek 163, Myrtle Beach Resort 244) do not fire on their own struck text, because the number comes before the name. I did not change them.

## Outside rows 26 to 42 (for the coordinator)

These are measured from the same data. No fixer row covers them.

- "Camelot by the Sea stands about half a mile north of the SkyWheel, just past Pier 14 at the Boardwalk's north end." Camelot (2000 N Ocean Blvd) is 0.39 to 0.42 mi past Pier 14, about six blocks. "Just past" overstates it. Safe: "about half a mile north of the SkyWheel, beyond Pier 14 at the Boardwalk's north end".
- "It stands about half a mile south of Family Kingdom's rides, and under a mile from the 2nd Avenue Pier at the Boardwalk's south end." (Sea Mist) The pier distance is 0.88 to 0.96 mi, so it holds, but no row carries it. Add it to row 26.
- "SeaWatch Resort is a gated resort at the north end of Myrtle Beach" has no source for "at the north end of Myrtle Beach" in row 39.
