# Fixer rows, independent check: /submarkets/garden-city/

Checked 2026-11-02 by a verifier who did not research them. Scope: the 10 rows marked VERIFIED-BY-FIXER (39 to 48). Counts: 9 VERIFIED, 1 CORRECTED, 0 STRUCK. One verified row (44) is worded more strongly on the page than its source; its fix is below. The ledger's status column is not edited here.

| Row | Verdict | Value or reason |
|---|---|---|
| 39 | VERIFIED | Re-ran `names.py` on a separate pull (verifier raw): same output. Live layer 24 counts: Royal Garden Resort 205 (with two misspellings), Waters Edge Resort 160, Surfmaster 147, Atalaya Towers 79 (57 land use 107 and 22 land use 108). One Ocean Place has 114 units, but in two phases of 58 and 56. Seamaster has 60. "The largest buildings include" holds. |
| 40 | VERIFIED | Grouped by first word: Woodlake 439, Mallard Landing 262, Harbour Village 159, the Jamestowne and Jamestown names about 56. Next is Seacroft at 38, so "the largest are" holds. Between the marsh and Business 17, the Mt Gilead names total 314. Street points read MOUNT GILEAD PLACE DR and MOUNT GILEAD RD. |
| 41 | VERIFIED | Flagged marsh houses by street: Rum Gully Rd 38, S Dogwood Dr 37, S Creekside Dr 28, N Dogwood Dr 24. |
| 42 | VERIFIED | OSRM, re-run: Kroger 3.7 min and 1.1 mi; Walmart 5.2 min and 1.7 mi. In OSM, the Starbucks inside the Kroger is at 2939, and the Walmart point is at 545 Garden City Connector. Kroger is 170 m from the county's Business 17 line, and 1.4 km from US 17. The store sites block curl. |
| 43 | CORRECTED | The pier's site, re-fetched: summer hours are café 7am to 11pm and deck bar 11am to 11pm; winter hours are café 6am to 10pm and deck bar 12pm to 10pm. The café's winter day is the same length (16 hours), only an hour earlier. Fishing (24/7 against 6am to 10pm) and the deck bar are shorter. The karaoke and the nightly bands are both under the heading "Summer Entertainment" ("Come alive with the sounds of summer"). |
| 44 | VERIFIED | Both pages re-fetched. The MarshWalk is "a half-mile wooden boardwalk"; 7 restaurants are listed; "the Music is always Free". The park has "3 miles of pristine beach", a lake that is "a sure-fire place to see alligators", and "some of the top bird-watching on the East Coast". The page says the state calls it "some of the best", a word the state does not use. |
| 45 | VERIFIED | data.census.gov: Surfside Beach town 1,794 of 4,317 (41.6%); Murrells Inlet CDP 780 of 5,746 (13.6%); Garden City CDP 3,993 of 10,110 (39.5%). |
| 46 | VERIFIED | HCPD page: "Established as the primary county law enforcement agency in 1959". GCSO patrol page: "responds to calls for service". TIGERweb school layer: Horry County School District at the pier, Georgetown County School District at Garden City Point. |
| 47 | VERIFIED | Live CRM `has=area_garden_city,private_dock`: 7 listings, 5 of them inside the Georgetown County polygon. The count is not on the page. |
| 48 | VERIFIED | Re-ran `pull_hoa.py` (139 calls): 72 condos, all with a fee. Ocean side, Horry: n 35, median bracket $790, q1 $610, q3 $910, range $500 to $1,200. Same as the fixer. |

## Page sentences to change

| Row | Page sentence now | Replace with |
|---|---|---|
| 43 | The pier stays open in winter, with shorter hours for fishing, the café and the deck bar. | The pier stays open in winter, with shorter hours for fishing and the deck bar. |
| 43 | Its café serves breakfast, its deck bar has karaoke on summer afternoons, and bands play every night at both ends of the pier, weather permitting. | Its café serves breakfast. In summer, its deck bar has karaoke in the afternoons, and bands play every night at both ends of the pier, weather permitting. |
| 44 | It has 3 miles of beach, a freshwater lake where you are almost sure to see alligators, and bird-watching the state calls some of the best on the East Coast. | It has 3 miles of beach, a freshwater lake where you are almost sure to see alligators, and what the state calls some of the top bird-watching on the East Coast. |

Note for the lead on row 43 and row 32. Row 32's verifier struck "in summer" for the bands, because the quoted sentence does not say it. The sentence sits under the site's "Summer Entertainment" heading, so "in summer" is right. The new entry keeps "weather permitting", so row 32's struck entry stays quiet on it.

Every business the page names is backed by a row: Kroger and Walmart (42), the four MarshWalk restaurants (44), the four buildings (39). Tidelands Waccamaw and the other places in the drive table are in earlier rows, outside this check.

Struck list: 3 entries added to `submarkets-garden-city-struck.json` (rows 43, 43, 44). All 3 fire on the built page now.
