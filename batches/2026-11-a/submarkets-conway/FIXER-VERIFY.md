# Fixer rows, independent check: /submarkets/conway/

Verifier, 2026-11-02. Scope: rows 46 to 52. Opened again: the Parks Guide PDF, the CMC, HGTC, city sanitation, police and fire pages, and the Solid Waste Authority page. Addresses were re-geocoded with the Census geocoder. The parcel counts, the listing figures and the grid totals were recomputed from the fixer's raw files.

Result: 7 verified, 0 corrected, 0 struck. One page sentence says more than its row (row 49). Struck wording added to `submarkets-conway-struck.json` (conway 49).

| Row | Verdict | Evidence or note | Page sentence to change |
|---|---|---|---|
| 46 | VERIFIED | Parks Guide: "approximately 1.5 miles", "Benches, Walking Trail, Kayak Launch"; Riverfront Park: steamboat playground, "Public Boat Landing with floating docks", "rocking chairs under a gazebo". | |
| 47 | VERIFIED | Every quote was found in the guide. Geocodes and parts reproduce: Kingston downtown 0.07 mi; Billy Gardner west 1.40; Smith Jones west 1.73; Collins west 1.06; Sherwood crabtree 1.32; all inside the city. The guide's "indoor walking track, swimming pool" does not itself say the pool is indoor. WMBF's construction reports (2010 to 2011) describe a "five-lane indoor swimming pool". | |
| 48 | VERIFIED | CMC footer "300 Singleton Ridge Road Conway, SC 29526". HGTC "2050 Highway 501 East". Both are inside the city in part us501 (4.29 and 3.70 mi). | |
| 49 | VERIFIED | City: "pick-up (one time per week) including a garbage roll cart, a recycle cart and yard waste service". SWA: "Only residents living in the unincorporated areas of Horry County can utilize the 25 Recycling Convenience Centers." The row does not show that the $670 in city tax pays for these services. The city may bill trash separately; this was not checked. | "For that, the City of Conway picks up garbage, recycling and yard waste at the curb once a week, and the city has its own police and fire departments." to "The City of Conway picks up garbage, recycling and yard waste at the curb once a week for homes in the city, and the city has its own police and fire departments." |
| 50 | VERIFIED | Recomputed from parcels.json with analyze.py norm() and area(). Exact plat name: Sherwood 126, all crabtree; Country Club Forest 57 crabtree; Pecan Grove 103 west. Midland: name contains MIDLAND gives 82 (crabtree 32, west 40, downtown 10); Lakeland gives 57 (downtown 35, west 19, crabtree 3). The fixer's counts differ by one or two because a substring match also caught "LOT ON LAKELAND DR" and "NW BY SHERWOOD DR". The directions hold. | |
| 51 | VERIFIED | From raw listings-conway.json, houses at $240,000 to $290,000 inside the city: n 35; beds 3: 27, 4: 7, 5: 1; median 1,389 sq ft; "Built 2026" 6 and "Built 2025" 2. The quartiles by the inclusive method are 1,276 and 1,576, not 1,266 and 1,600; the page does not print them. | |
| 52 | VERIFIED | Grid file: 8,935 homes in 887 cells. The same 8,935 is in the city by my recompute. See the note below. | |

Note for the lead (outside these rows): `area()` labels every home north of latitude 33.852 as "crabtree". In the grid, 973 of the 2,385 "crabtree" homes sit west of longitude -79.075, about 2 to 4 miles west-northwest of the town point. The page says "Around Crabtree Swamp: close to downtown" and "Just north and northwest of downtown, around Crabtree Swamp, are about 2,390 homes." Check that heading and the count against where Crabtree Swamp runs before shipping. The map colours use the same labels.

## Lead's check, 2026-11-02

The Crabtree Swamp part, measured from `map-homes-grid.json` (the same 8,935 city homes, by about 180 m cell, distance from the USGS town point): 547 homes 1 to 2 miles out, 1,245 at 2 to 3, 491 at 3 to 4 and 102 at 4 or more. That is 1,838 of 2,387 at 2 to 4 miles or more, west to about 79.12 W. "Close to downtown" is cut. The H3 now reads "north and northwest of downtown, with a park on Sherwood Drive". The body reads "North and northwest of downtown, around Crabtree Swamp, are about 2,390 homes, most of them 2 to 4 miles out." The map's alt text says the same. Row 49's sentence is changed as the verifier gave it.
