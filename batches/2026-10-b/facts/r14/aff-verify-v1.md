# Affordable places to live: round 14 verification v1 (2026-10-15)

Rows 197, 198, 199, 200, 201 and 203 of `affordable-facts.md`. The verifier did not research them. Every URL was opened or fetched again; every OSRM route was re-run on 2026-10-15. The ledger and the struck list were not edited.

## Row 197: verified with corrected wording

Opened https://www.cityofmyrtlebeach.com/i_want_to/find/whispering_pines_golf_course.php (HTTP 200). Found: "Local residents of Horry, Georgetown and Brunswick Counties can play at Whispering Pines for just $45 per round (plus tax), including the use of a cart!" The page is the city's own page for the course, so it is a primary source. The quote in the ledger is exact but cuts "(plus tax), including the use of a cart".

The page sentence is "Locals play a round there for $45." Two limits are lost: the group (residents of three counties, not "locals" in general) and "plus tax". The price is a discount offer on a page with no date, so it can change.

Safe wording: "Residents of Horry, Georgetown and Brunswick counties can play a round there for $45, plus tax, with a cart [City of Myrtle Beach, Whispering Pines page]." The shorter "Locals play a round there for $45" is not supported without the tax.

Also confirmed on the same page: "Tee markers feature the squadron emblems" (the page's earlier sentence; row 179 covers it).

## Row 198: verified

Opened:
- https://cityofmyrtlebeach.com/news_detail_T6_R729.php (200): "Base is now home to The Market Common and surrounding neighborhoods, with thousands of new homes, a dozen parks, walking trails and sporting facilities, along with Myrtle Beach International Airport, Whispering Pines Golf Course, the International Technology and Aerospace Park and other commercial, educational and residential developments." Supports "the rest of the old base is now The Market Common", with the airport and Whispering Pines on the same land.
- https://www.marketcommonmb.com/ (200 with a browser user agent; 403 with plain curl): "Explore a wide selection of shops, restaurants, movies, and entertainment"; "Market Common Cinema features high-back rocker seats ... 14 fully expanded wall-to-wall screens". The site is the district's own. "14-screen movie theater" holds.
- https://www.sctrails.net/trails/trail/grand-park (200): "Paved Length: 3.00 miles Type: Network Surface: Paved, Boardwalk, Natural" and "1011 Crabtree Lane | Myrtle Beach, SC 29577 (adjacent to The Market Common)".
- https://cityofmyrtlebeach.com/i_want_to/find/grand_park_athletic_complex.php (200): "Grand Park is adjacent to The Market Common, Crabtree Memorial Gymnasium and a roller hockey rink." Supports "next door".

Drive, re-run: Parkview point (-78.91036, 33.686431) to (-78.9402132, 33.6706705): 9.98 min, 3.90 mi. Rounds to 10 (under 15 minutes, nearest minute). "A ten-minute trip by car" holds. End point: Nominatim reverse puts it on Deville Street, The Battery, Market Common District, the shopping street where a reader arrives, not inside a park.

Page sentence "shops, restaurants and a 14-screen movie theater, and Grand Park's trails are next door": no overclaim. The page does not say the trails are 3 miles; the 3.00 mi figure is not published. The sentence does not claim a count of restaurants.

## Row 199: verified

Airport drive, re-run: (-78.91036, 33.686431) to (-78.9227887, 33.6814671): 5.94 min, 2.17 mi. Rounds to 6. The end point reverse-geocodes to Jetport Road in the Market Common District, at the terminal (gate B1 is 70 m away). "A six-minute drive" holds.

Beach drive: the SC DES BeachAccess layer (https://gis.des.sc.gov/gisserver/rest/services/BeachAccess/MapServer/0, 644 points) was pulled again. MYRTLE BEACH 13 (OBJECTID 131) is a public beach access with a pay lot, at (-78.90086, 33.67252). I routed from Parkview to the 25 nearest access points of any state in one OSRM table call. The five shortest: MB 13 4.01 min, MB 12 4.07, MB 14 4.21, MB 15 4.22, MB 11 4.22. So 4.0 min is the shortest and every neighbour is also near 4 minutes. All of the layer's Myrtle Beach points lie along one diagonal coast line (MB 1 to MB 88 in order), so the point is on the coast. (I first suspected it was inland; the coast runs southwest here, and it is not.) Rounds to 4. "A four-minute trip" holds.

"Shortest on this list": the twelve values in row 185 are Parkview 4.0, Villas at Sandridge 7.46, Wynbrooke 8.9, Forestbrook Village 12.6, Indigo Grove 13.2, Victory Point 13.9, Golf and Yacht Club 15.0, Fairways 17.8, Sawgrass East 17.9, Birchwood 20.2, Amber Bluff 20.6 and Polo Farms 22.0. Two sources are not needed: it is our own measure over our own list. Row 199's claim that Villas, 7.46, is next holds (Wynbrooke is 8.9). The list is the page's twelve; it is not a claim about all of Myrtle Beach.

Sibling check: the gated page gives the Golf and Yacht Club beach drive as 15 minutes; row 185 here also has 15.0. They agree. The neighborhoods page gives Wild Wing as 20.9 min from its own start point and this page gives the Fairways as 17.8 from a point inside Wild Wing (different start). That is not a disagreement, but the writer must not call both "Wild Wing". The Huntington Beach State Park and Lewis Ocean Bay figures are not in my rows.

Limit for the writer: the access is a pay lot ("Pay Lot" in the layer). "Beach drive" is correct; do not add "free parking".

## Row 200: verified with corrected wording

Re-run from (-78.986234, 33.787649):
- Conway Medical Center (OSM way 51357838, 33.7849817, -79.0006405): 5.99 min, 2.01 mi. Nominatim names it "Conway Medical Center, 300, Singleton Ridge Road". To the address point on Singleton Ridge Road (33.7864995, -79.0026200): 5.08 min, 1.91 mi.
- Horry-Georgetown Technical College (way 51184726): 7.19 min, 2.56 mi. To the address point 2050 Highway 501 East (33.7944013, -79.0035867): 6.59 min, 2.17 mi.
- Coastal Carolina University (way 43967615, 33.7953227, -79.0126825): 7.92 min, 2.88 mi. To the address point 100 Chanticleer Drive West (33.7956181, -79.0074136): 6.24 min, 2.39 mi.

The ledger's end points are the centers of the building or campus polygons. The reader arrives at a building entrance, a lot or a campus entrance, not at the middle of the campus. The hospital and the college hold: the hospital is 5.99 min at its center and 5.08 at its road frontage ("about six" is within a minute of both), and the college is 7.19 and 6.59, which both round to 7. The university does not hold: the center of the campus is 7.9 minutes away, but the Chanticleer Drive West address is 6.2 minutes, which rounds to 6. "An eight-minute one" is the long end. Which entrance a visitor uses is not fixed.

Sibling check: the Amber Bluff entry on the same page says the university and the college are "each a six-minute trip from Amber Bluff". That entry was verified in an earlier round with its own start point, so the page has "six" and "eight" for the same campus from two nearby places. The Fairways-to-university figure is the outlier.

Safe wording: "Conway Medical Center is about 6 minutes by car from the Fairways, Horry-Georgetown Technical College about 7, and Coastal Carolina University 6 to 8, depending on where on campus you stop [OSRM, no traffic]." If the writer wants one word for the university: "about seven minutes" is the middle of 6.2 and 7.9 and is within a minute of both.

## Row 201: wrong (secondary source for the rating); the design claim is verified from the course's own site

Opened:
- https://playgolfmyrtlebeach.com/courses/avocet-course-at-wild-wing-plantation (200 with a browser user agent). "This course features complex bunkering, a double green and a double fairway." The site belongs to the area's golf tourism association, not to the course.
- https://myrtlebeachworldamateur.com/wild-wing-plantation-avocet (200): "Golf Digest has awarded this course 4 STARS in their prestigious 'Places to Play' course rankings" and "by the team of Jeff Brauer and Larry Nelson". This is the marketing site of a golf tournament. It is a secondary source.
- Golf Digest's own pages: https://www.golfdigest.com/places-to-play/ and the Avocet page both return HTTP 403 to every request from this container. A web search found only the two pages above plus a third-party listing; no Golf Digest page. The star rating is therefore unverifiable from the primary source, and no source says the year or whether it is current.
- The course's own site, https://www.wildwing.com/ (200): "The Avocet Course at Wild Wing is one of the Myrtle Beach area's most creative layouts. Designed by Jeff Brauer and three-time major champion Larry Nelson, the course is relentlessly interesting, testing players with drivable par 4s, double greens and dual fairways." This is the primary source for the design.

Status of the parts of the page sentence "The one that stayed whole is the Avocet, by Larry Nelson and Jeff Brauer. It has a double green and a double fairway, and Golf Digest gave it four stars in its Places to Play ratings.":
- Designers: verified (Wild Wing, Brauer and Nelson).
- Double green and double fairway: verified, from the course's own site ("double greens and dual fairways").
- Golf Digest four stars: wrong, secondary source. The primary source, Golf Digest, cannot be opened here, and the one detailed secondary account (a GolfNow listing) dates the stars to 1996, "consistently rated ... as a 4-Star Award Winner beginning in 1996". An undated star rating can be years out of date. Do not publish.
- "The one that stayed whole" is not in my rows (row 143 and the page's own history).

Safe wording: "It has double greens and dual fairways [Wild Wing course page]." Add "Larry Nelson and Jeff Brauer designed it [Wild Wing course page]" if the designers are wanted. Drop the Golf Digest sentence. Wild Wing's page also says the course was renovated in 2026 (new greens and bunkers); the writer can use that, with the source.

## Row 203: verified

Re-queried the Horry County GIS: address layer 22 returns "2250 CAROLINA FOREST BLVD" and "2254 CAROLINA FOREST BLVD", both PIN 39700000010; parcel layer 24 returns owner HORRY COUNTY, same PIN. The county library page lists "Carolina Forest Library" at 2250 Carolina Forest Blvd. One county parcel under both addresses supports "shares its campus". (The Farm ledger row 101 is verified with the same figures; this verifier re-ran the queries rather than copying it.)

The six minutes belongs to the recreation center (row 186, 6.47 min: Sawgrass East point to the center's address point, 2254). Re-run: 6.42 min, 2.72 mi to (-78.890061, 33.760247). Rounds to 6. The library, at 2250, is 100 m from 2254 on the same parcel, so it is the same drive. The page sentence says only that the library "shares its campus"; it gives no separate drive for the library. Holds.

Sibling check: The Farm page says the two share a campus "about 3 minutes away" from the Farmers Rest entrance. Different start points, so no conflict. The Lewis Ocean Bay figures are row 202, not in my rows.

## Summary

Counts by status: verified 3 (rows 198, 199, 203); verified with corrected wording 2 (rows 197, 200); wrong 1 (row 201); unverifiable 0 as a row (the Golf Digest rating inside row 201 is unverifiable, and is struck).

Every changed row:
- Row 197: say the group and the tax. "Residents of Horry, Georgetown and Brunswick counties can play a round there for $45, plus tax, with a cart [City of Myrtle Beach]." Struck: "Locals play a round there for $45."
- Row 200: the university drive is 6 to 8 minutes depending on the end point; "an eight-minute one" is struck. Hospital 6 and college 7 stand.
- Row 201: drop "and Golf Digest gave it four stars in its Places to Play ratings". Keep the double green and fairway, with the course's own page as the source (it says "double greens and dual fairways").

Claims that should not be published at all: the Golf Digest four-star rating of the Avocet (secondary source only, undated; the primary source cannot be read from here). Re-check it if someone can open golfdigest.com/places-to-play.

No row states an interest rate or a payment amount. Row 197's $45 is a green fee, not a payment on a loan. No row describes people. Words checked against the website build's refusals: none of "sets", "runs" or "carries" appear in the safe wordings above.
