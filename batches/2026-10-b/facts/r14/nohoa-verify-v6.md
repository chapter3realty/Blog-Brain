# No-HOA homes, rewrite check and drive re-run v6 (round 14, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it. Task: lesson B30 and B45. A writer who re-voices a page after a correction can put an error back, or go past the source. The page was rebuilt in round 14, so almost every sentence is new. I read the whole body of `batches/2026-10-b/specs/no-hoa-homes.js` at HEAD `7fe9c3d` (md5 `1f833bb4aad2f8a5803dafc0db5a8575`). Another agent edited the spec while I worked. I re-read it at the end (md5 `ba2aa7d2d917245f80d37f57e2038180`): "a 3.7-mile drive" is gone from Plantation Point; the guide lost its "canals to the inlet", "older houses" and "within 10 minutes" lines; the Pine Lakes, Little River and Surfside aerials are gone; and a share chip was added under each heading. Everything else I list below was still on the page at that md5. I compared it with the last version before round 14 (`96de809`, 2026-10-14 11:14) and with the ledger rows 115 to 135. I did not edit the spec.

Sources I opened myself (2026-10-15):

- NPS NPGallery, NRIS 96001217, the asset page and the full nomination form (PDF, 5 pages of form and continuation sheets 6 to 8).
- City of North Myrtle Beach pages: Ingram Dunes (nmb.us/783), Cherry Grove Park and Boat Ramp (nmb.us/490), Heritage Shores (nmb.us/491), Music on Main (nmb.us/385).
- S.C. DNR, Burrell, The Recreational Fishery in Little River (PDF).
- SCDOT historic bridge page S-616; Horry County Parks page (Socastee Recreation Park); City of Myrtle Beach Boardwalk pages (R986, pow040618, pow051520); S.C. Encyclopedia, North Myrtle Beach; S.C. Code Title 53 chapter 3.
- Horry County GIS: parcels (layer 24), address points (22), roads (18), for the house points and street positions; state beach access layer (DES, 611 public accesses).
- OSRM (router.project-osrm.org) for drives; routing.openstreetmap.de foot profile for walks.

## Result

- I checked **151 fact-bearing units** on the page: 135 sentences (the guide, the short answer, 16 areas, the price section, the new FAQ lines) and the 16 share chips the writer added while I worked.
- **106 match.** Five of those match only by my own check, because no ledger row backs them (G1 to G5 below).
- **45 drift**, in **34 distinct drifts** (D1 to D34). Must fix: D1 to D7, D9, D10, D11, D14 to D17, D19, D22 to D25, D27, D34. Tighten: the rest. D9 and D14 were in the guide lines the writer has since cut; D12's sentence and D33's label are still there.
- Five more drifts are in the round 14b sentences (row 135, pending) or in an old sentence I measured; they are listed apart (X1 to X5) and are not in the counts.
- **Rows 118, 121, 123, 128, 132** ("verified with corrected wording"): 121 and 128 match; 118 drifts (four sentences); 123 matches except the parking limit (D18); 132 drifts twice (D24, D25).
- **Drives:** I re-ran all 18 drive claims on the page with OSRM, from the ledger's ends (the ledger's ends are in the data file `drives` block and in rows 48 to 51, 79, 106). 17 match to the minute. One does not: Garden City to the Stanley Drive landing (page 5; the landing itself is 6). A 19th figure, "a 3.7-mile drive" to the beach from Plantation Point, was on the page at 01:15 and did not reproduce (2.7 to 3.4 miles); another agent has since removed it. The page states no walk time. I measured the beach walks for the five "on foot" areas (82 houses) and the Plantation Point walk.
- **Shares:** 13 of 16 areas are worded within the counts in the body. Three say "almost every" for 86 to 87 percent (Crescent Beach, Surfside Beach, Conway). The new chips repeat that for those three and add Downtown (85 percent), because the code uses 0.85 as its "almost every" line (D34). Price lines: all 16 match their medians.
- `node tools/struck-check.js --batch ... --strict` before my edit: **no-hoa-homes (53 patterns): no struck wording.** After my 45 new entries (98 patterns): **48 struck phrases found** on the page, as intended. The writer applies the wording below and the check goes quiet again. `node tools/struck-check.test.js`: all controls pass.

## Step 1: the five rows marked "verified with corrected wording"

| Row | Page wording now | Result |
|---|---|---|
| 118 Myrtle Heights | "Myrtle Heights is along Ocean Boulevard from about 32nd to 46th Avenue North. Its houses built from 1925 to 1949 put it on the National Register of Historic Places. Those houses were built in the Craftsman and Colonial Revival styles. Two of the houses for sale are from that era, and a new oceanfront house was listed beside them." | **Drifts four times (D1 to D4).** The nomination form says the district is Myrtle Heights-Oak Park; Myrtle Heights is 32nd to 40th and Oak Park 40th to 47th. The form says the houses were "constructed from ca. 1925 to ca. 1945" and the period of significance is "ca. 1925-ca. 1945"; 1949 is the NRIS database field, a period of significance, not build dates. The styles: "The most prevalent stylistic influence is Colonial Revival ... Elements of the Classical Revival, Tudor Revival, and Bungalow/Craftsman styles are also represented. Most of the properties ... represent vernacular forms with modest stylistic influences." "Beside them" is not true (see D4). |
| 121 Ingram Dunes | "Ingram Dunes Nature Preserve, on Hillside Drive at 9th Avenue South, is the city's last remaining maritime forest. It has native dunes 30 feet tall and an interpretive half-mile nature trail." | **Matches** nmb.us/783: "It is the last remaining maritime forest in North Myrtle Beach and has native dunes that are 30 feet tall"; "interpretive ½ mile nature trail"; "999-943 Hillside Drive". "At 9th Avenue South" is the researcher's cross street. The county road layer puts the preserve on Hillside Drive South between 9th and 10th Avenue South, so "at 9th" is close but "between 9th and 10th" is exact. Not struck. |
| 123 Cherry Grove ramp | "the city's boat ramp at 53rd Avenue North, 5 minutes away. It has a two-lane boat launch, a kayak launch, a fishing pier, a floating boat dock and a fish cleaning station. City residents can register to park there free." and "Heritage Shores Nature Preserve, an island in the Cherry Grove marsh, is reached on elevated boardwalks." | **Matches, except one qualifier (D18).** The list is the city's list, word for word. The drive is 5.28 minutes. Heritage Shores: the city says "on an island that extends into the Cherry Grove Marsh" and "accessible via a series of elevated boardwalks and observation docks" (it also lists a boat dock); the page's "same lot" claim is gone. Parking: the city says free parking "for a limited number of vehicles"; the page drops the limit. |
| 128 Conway | "Its streets were designed around its live oaks." | **Matches** the city's "Not only are streets designed around them". No tree care ordinance on the page. |
| 132 Garden City | "The county's Stanley Drive boat landing is 5 minutes from the middle of Garden City." and the heading "Garden City Beach: between the ocean and the marsh" | **Drifts twice (D24, D25).** The ledger's drive ends at the centre of the road "Stanley Drive" (Nominatim way 12430327), not at the landing. The landing (OSM node 4409738385, county address point 290 Stanley Dr) is 5.95 minutes from the same start. The heading puts back the claim the row cut ("a strip of land between the ocean and the salt marsh", OpenStreetMap, not opened by the verifier). |

## Step 2: the drifts

"Must fix" means the page says something the source does not, or has lost a qualifier the source has. "Tighten" means a small gap.

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 | "Myrtle Heights is along Ocean Boulevard from about 32nd to 46th Avenue North." (Myrtle Heights) | Must fix. The NPS record is the Myrtle Heights-Oak Park Historic District. The nomination: "The area from 32nd Avenue North to 40th Avenue North has historically been known as Myrtle Heights and the area from 40th Avenue North to 47th Avenue North has historically been known as Oak Park." The MLS neighborhood is 31st to 40th. | "The Myrtle Heights-Oak Park Historic District is along Ocean Boulevard from about 32nd to 46th Avenue North. Myrtle Heights is its southern part, from 32nd to 40th [NRHP nomination]." |
| D2 | "Its houses built from 1925 to 1949 put it on the National Register of Historic Places." | Must fix. "1925-1949" is the NRIS field "Periods Of Significance". The nomination says "Extant historic resources ... were constructed from ca. 1925 to ca. 1945" and gives "ca. 1925-ca. 1945". Verifier A's correction took the database field as build dates. | "The district's houses were built from about 1925 to 1945 [NRHP nomination, 1998]." |
| D3 | "Those houses were built in the Craftsman and Colonial Revival styles." | Must fix. One style is "most prevalent" (Colonial Revival); Bungalow/Craftsman is one of several that are "also represented"; most contributing properties are "vernacular forms with modest stylistic influences". The page makes two styles the rule. | "The most common style is Colonial Revival, with some Bungalow and Craftsman touches [NRHP nomination]." |
| D4 | "Two of the houses for sale are from that era, and a new oceanfront house was listed beside them." | Must fix. Distance word. The listings: 406 37th Ave N (1938) is about 160 m from 3604 N Ocean Blvd (2026, oceanfront); 3500 N Kings Hwy (1946) is about 300 m from it and is on Kings Highway, northwest of the residential blocks that the district enters, in the nomination's words, "in only a few places". Neither older house is shown to be in the district. 1946 is after the form's ca. 1945. The heading "beach houses on the National Register" reads as if the houses for sale are on the Register. | "Two of the houses for sale were built in 1938 and 1946. A new oceanfront house, built in 2026, was also listed." Heading: drop "on the National Register" or say "in a National Register district". |
| D5 | "Houses here were listed from about $750,000 to $5.8 million, the highest prices on this list." (Myrtle Heights) and "At about $250,000, these are the lowest prices on this list." (Socastee) | Must fix. Row 117 says the highest **median** of the 16 areas. The highest listing is in Garden City Beach ($5,897,000, above $5.8 million). Socastee has the lowest median, but its lowest listing ($214,000) is above Crescent Beach ($174,900), Conway ($188,000), Loris ($190,000), Aynor ($179,900) and the country around Loris ($169,900). | "Houses here were listed from about $750,000 to $5.8 million. The typical price, about $1.6 million, is the highest of the 16 areas." and "At about $250,000, this is the lowest typical price on this list." |
| D6 | "The oceanfront Boardwalk begins at the 2nd Avenue Pier." (Downtown) | Must fix: no row. The cited city page (R986) says: "from pier to pier"; "Later additions have extended the boardwalk to 16th Avenue North"; the promenade runs "to First Avenue". It never names the 2nd Avenue Pier. Wikipedia (secondary) says "from the Pier 14 ... to the 2nd Avenue Pier", so the claim is probably true, but no primary row holds it. | Cut it, or add a row from a city page that names the piers. |
| D7 | "On Collins Street and Chester Street, the houses for sale were built in the 1950s and 1960s." | Must fix. Listings on those two streets: 611 Collins (1958), 305 Chester (1955), 614 Collins (**2026**, $389,000). None is from the 1960s. Row 116: the older ones are on Collins, Chester, Dunbar and 13th Avenue South, built 1955 to 1970. | "On Collins Street, Chester Street, Dunbar Street and 13th Avenue South, four houses for sale were built from 1955 to 1960." |
| D8 | "Nearby, a row of new houses was listed, also with no HOA dues." | Tighten. Distance word. The eight new houses are on 12th Avenue South (The Villages at Withers Heights). They are 1.2 km (0.7 mile) from 611 Collins and 1.6 to 1.7 km (1 mile) from 305 Chester. | "On 12th Avenue South, 8 new houses in The Villages at Withers Heights were listed, also with no HOA fee." |
| D9 | "Downtown Myrtle Beach, Conway and Loris: older houses within a mile and a half of the center." (guide) | Must fix for downtown. 10 of the 17 downtown houses were built in 2024 or later; median year 2026; 6 before 1990. Conway (13 of 20) and Loris (10 of 15) are mostly before 1990. | "Downtown Myrtle Beach (older streets and some new houses), Conway and Loris: houses within a mile and a half of the center." |
| D10 | "Almost every house on a street outside a named subdivision has no homeowners association (HOA) fee." (short answer); "Every house for sale on the older Pine Lakes streets pays no HOA dues"; "Not one house for sale in Plantation Point pays HOA dues"; "most houses for sale come without an HOA fee" (Socastee) | Must fix for Pine Lakes and Plantation Point. Row 1: "Say 'shows no HOA fee', never 'has no HOA'." Row 85: "a listed blank fee is not proof of no association"; "a web search found listings that call Plantation Point a voluntary HOA"; safe wording "were listed with no fee in Pine Lakes and Plantation Point". The page states payment as fact. | "Every house for sale in Plantation Point was listed with no HOA fee." Same form for Pine Lakes, Socastee and the short answer ("shows no HOA fee"). |
| D11 | "Almost every home for sale in Crescent Beach is listed with no HOA dues" (34 of 39, 87 percent); "On the ocean side of Surfside Beach, almost every home for sale is free of HOA dues" (36 of 42, 86 percent); "Within a mile and a half of downtown Conway, almost every house for sale has no HOA fee" (20 of 23, 87 percent); the Crescent Beach heading "almost no HOA" | Must fix. "Almost every" means 90 percent or more. | "Nearly 9 in 10 homes for sale in Crescent Beach are listed with no HOA dues." "6 in 7 homes for sale ... Surfside Beach." "20 of 23 houses ... Conway." Heading: "nearly 9 in 10 with no HOA fee". |
| D12 | "Age is the best sign." | Tighten. Row 130: being outside a named subdivision is the stronger sign (446 of 460, 97 percent); age is 77 percent against 18 percent. The first paragraph already gives the stronger sign. | "Age is one sign: a house built before 1990 is far more likely to be listed with no HOA fee." |
| D13 | "These are the streets around Pine Lakes Country Club, Myrtle Beach's first golf course." and the heading "half-acre lots by the city's first golf course" | Tighten. Neighborhoods row 168: "'First golf course' is the club's own claim"; LINKS and the state record only give 1927 (promotion and tourism pages). A superlative with one source. | "... a golf course that opened in 1927." Heading: "half-acre lots by an old golf course". |
| D14 | "Cherry Grove has canals to the inlet." (guide) | Must fix. No source says the canals run to an inlet. The sources (My Horry News 2019, Dredging Today 2017) say the dredging gave "access to House Creek and the Intracoastal Waterway". Row 81 already struck "canals that run to the marsh". | "Cherry Grove has canals with boat access to House Creek and the Intracoastal Waterway." |
| D15 | "Canals were dug through the Cherry Grove marsh as early as the 1950s." | Must fix. Row 103 correction (a): "'Dug through the marsh' is not in either source." The struck pattern missed it because the page inserted "Cherry Grove". Source: "the canals were created as early as the 1950s and 60s". | "Cherry Grove's canals were created as early as the 1950s." |
| D16 | "The city dredges them, so owners on the canals can take a boat to House Creek and the Intracoastal Waterway at high and low tide." | Must fix. Row 103 correction (b): the purpose "to give homeowners access" is not a result for every owner (the 2019 article quotes owners who say it fell short at some docks); and it is two past jobs (2016-17, 2022-23), not "dredges" now. | "The city has dredged canals there twice since 2016, to give owners boat access to House Creek and the Intracoastal Waterway at high and low tide." |
| D17 | "Owners on the canals also pay the city about $1,700 a year for the dredging." | Must fix. Row 88: the fee is billed to "about 416 parcels in the Cherry Grove Improvement District, not to 'owners along them'" (struck entry exists for "owners along them"). Row 182: $1,718.75 for 2025-2026, set each year. | "Owners of about 415 properties in the canal district pay the city about $1,700 a year for that work, on the county tax bill." |
| D18 | "City residents can register to park there free." | Tighten. nmb.us/490: "free parking year-round for a limited number of vehicles but must register". | "North Myrtle Beach residents can register for free parking there, for a limited number of vehicles." |
| D19 | "Almost every Little River subdivision has an HOA." and the FAQ "so do almost all of Little River's named subdivisions" | Must fix. Row 124: the count is homes, not subdivisions: 13 of 192 homes for sale in the named subdivisions had no fee (179 had one). The page counts subdivisions. | "In Little River's named subdivisions, 179 of 192 homes for sale list an HOA fee." |
| D20 | "In the early 1920s, its boatmen began taking visitors fishing offshore, the first boats in South Carolina to do it for a fee." | Tighten. SCDNR: "When the men and boys at Little River began to take people fishing can not be dated exactly, but probably it began in the early 1920s. River parties were the first"; deep sea trips began in 1923 (Bob High). "This was the first organized offshore recreational fishing in South Carolina where a group of boats carried people fishing for a fee." "Probably" and "organized" are gone, and it is one source. | "In about the early 1920s, Little River's boatmen began taking visitors fishing for a fee, the first organized offshore trips of that kind in South Carolina." |
| D21 | "Since the inlet's jetties were built, boats can cross the bar at any time of day." | Tighten. SCDNR (a report citing sources to 1997): "Once the jetties were in place, in 1983, boats could cross the bar at any time of day." Past tense, dated. The page makes it a present fact. | "After the jetties were finished in 1983, boats could cross the inlet bar at any time of day." |
| D22 | "It is one of the two oldest swing bridges on South Carolina's highways." | Must fix. SCDOT: "the one of the two oldest of seven identified swing span highway bridges dating from 1929 to 1960 in the inventory". One survey's list became a state rule. | "It is one of the two oldest of the seven swing-span highway bridges in the state's historic bridge inventory [SCDOT]." |
| D23 | "Socastee Recreation Park has ball fields, a disc golf course, trails and a playground." | Must fix. Horry County Parks: "numerous multi-purpose fields, picnic areas, a disc-golf course, trails, and a playground". "Ball fields" is not in the source. | "Socastee Recreation Park has multi-purpose fields, picnic areas, a disc-golf course, trails and a playground." |
| D24 | "The county's Stanley Drive boat landing is 5 minutes from the middle of Garden City." | Must fix. See the drive table: to the landing it is 5.95 minutes from the USGS place point (the row's start), 6.83 from the middle of the no-fee houses. 4.6 is the time to the road's centre. Under the rule (under 15 minutes, to the minute) the page says 6. Row 79's verified run (6.0) agrees. | "The county's Stanley Drive boat landing is about 6 minutes from the middle of Garden City." |
| D25 | Heading "12. Garden City Beach: between the ocean and the marsh" | Must fix. Row 132 said cut it (OpenStreetMap, not opened). The heading restates it. The struck entry only caught the longer sentence. | Cut it. Head the entry with what the area gives a buyer. |
| D26 | "Flood insurance is the cost of the view: most houses here are in a high-risk flood zone, where a lender requires it." | Tighten. Row 134 and row 74: "your lender will almost always require" (the rule binds federally regulated lenders). "Requires" drops the limit. "The view" is not in any row. | "Most houses here are in a high-risk flood zone, where with a mortgage your lender will almost always require flood insurance." |
| D27 | "You give up the beach next door: it is about 35 minutes by car, and Coastal Grand Mall about 50." (Loris) | Must fix. "Next door" next to 35 minutes. The times are right (36.4 and 52.3). | "The beach is about 35 minutes by car, and Coastal Grand Mall about 50." |
| D28 | "Outside the towns, no public service picks up trash at the curb." (country around Loris) and "which the county does not do outside the towns" (Surfside, row 135) | Tighten. Row 43 (wrong, corrected): "It is the Solid Waste Authority, not 'the county', that says it does not collect"; "Georgetown County homes and addresses in other towns are not covered." "No public service" is wider than the source. | "Outside the towns, the Solid Waste Authority provides no curbside trash pickup." |
| D29 | "Its pavilion drew crowds to dance the shag, which South Carolina made its official state dance." (Ocean Drive) | Tighten. "Its" for "a". Row 88: the source says Ocean Drive Beach and Crescent Beach were developed by Florence investors and "A pavilion and amusement park drew crowds to play and dance the shag"; "It does not say each place had a pavilion." | "In the Ocean Drive and Crescent Beach area, a pavilion and amusement park drew crowds who danced the shag. South Carolina made the shag its official state dance in 1984." |
| D30 | "Every Thursday from June through September, the city holds free Music on Main concerts at the Horseshoe on Main Street." | Tighten. The row 81 note, from the Del Webb ledger row 97: "The 2026 season is over. Write 'each summer' and say the city sets the schedule." The city page says "2026 Schedule Coming Soon". | "Each summer, the city holds free Music on Main concerts on Thursdays at the Horseshoe on Main Street, on a schedule the city sets." |
| D31 | "In Ocean Drive Estates, houses from the mid-1980s were listed at about $300,000." | Tighten. Five houses, built 1984 and 1985, listed at $255,000, $285,000, $300,000, $334,900 and $369,000. $300,000 is the middle one. | "In Ocean Drive Estates, five houses from the mid-1980s were listed from $255,000 to $369,000." |
| D32 | "Each of those houses is half a mile or less from the ocean" (Crescent Beach) and "None of the houses for sale here would need flood insurance for a mortgage" (Ocean Drive) | Tighten. Rows 120 and 122 count only the houses placed on the county map: 25 of the 34 Crescent Beach homes; 15 of the 22 Ocean Drive houses. "Each" and "none" cover all of them. | "Each of the 25 houses we placed on the county map is half a mile or less from the ocean." "None of the 15 houses we placed on the county map would need flood insurance for a mortgage." |
| D33 | "The beach on foot. In Crescent Beach, Windy Hill, Ocean Drive, Myrtle Heights and Surfside Beach, most houses are within half a mile of the sand." (guide) | Tighten. Row 95: the half-mile figure is a straight line to the shore; "Do not use 'walk' for the straight-line figure anywhere." The label says walk. **The claim is true by my walks** (table below), but no row holds it. | Either "Near the beach. ... most houses are within half a mile of the ocean shore, in a straight line" or add a row from my walk run and write "most houses are within a 10-minute walk of a public beach access". |
| D34 | The chip under each area heading, "No HOA fee on almost every home for sale" (Downtown 17 of 20, 85%; Crescent Beach 34 of 39, 87%; Surfside Beach 36 of 42, 86%; Conway 20 of 23, 87%). From `shareWords`: `p >= 0.85` gives "almost every". | Must fix. "Almost every" means 90 percent or more. The chip is right for Loris (15 of 16, 94%), so a struck-text entry would fire on Loris too; fix the threshold in the code. The chips also say "No HOA fee on", not "listed with no HOA fee" (D10). | Set the line at `p >= 0.9`. Below it, use "most of the homes for sale" (Downtown, Crescent Beach, Surfside Beach, Conway). |

### Outside rows 115 to 134 (not in the counts)

Row 135 (round 14b) is pending verification, and another agent was editing these sentences while I read. I checked them anyway.

| # | Page sentence | Problem | Supported wording |
|---|---|---|---|
| X1 | "Fuller Park, with tennis courts and a playground, is among those streets." (Surfside) | Neighborhoods row 196 (wrong part): "Do not use '2 tennis courts' or 'tennis courts'"; the courts were closed for renovation in October 2026; "add courts only after the town reports them open". Row 135 repeats "tennis courts". Fuller Park is about 0.1 mile from the reference point, not "among" the streets. | "Fuller Park, with a playground, is about 0.1 mile from the middle of those streets." |
| X2 | "The town allows two boats or trailers at a home, and one work van or pickup up to 21 feet long overnight." | Tighten. Row 62: the code says "does not exceed twenty-one (21) feet in length and/or seven feet eleven inches (7'11") in height". The height limit is gone. | "... up to 21 feet long and 7 feet 11 inches high overnight." |
| X3 | "... for about $34 a month on the utility bill." (Pine Lakes) | Tighten. Row 45 quotes "$33.93 per month" for the service; "on the utility bill" is not in the quote. The row says to date the figure. | "... for $33.93 a month for a home [City of Myrtle Beach, October 2026]." |
| X4 | "The newer Preserve at Pine Lakes next door has an HOA." (unchanged since before round 14) | Distance word. The nearest Preserve at Pine Lakes house is 372 to 883 m (0.2 to 0.55 mile) from the five Pine Lakes houses I could place. | "The newer Preserve at Pine Lakes, from about 0.2 to 0.5 mile away, has an HOA." |
| X5 | "a 3.7-mile drive and too far to walk" (Plantation Point, the 01:15 version) | No row. OSRM from the row 117 start: 3.33 miles (9.81 minutes) to the east end of 38th Avenue North; 2.72 to 3.06 miles to the eight nearest public beach accesses. Walking: 3.1 miles, 67 minutes. The figure is gone from HEAD; "too far to walk" is supported. | "about 10 minutes away by car and too far to walk" (row 117). |


## Step 3: drives and walks re-run

OSRM public router, no traffic, ends as the ledger gives them (rows 48, 50, 51, 79, 106, 117, 119, 123, 125, 128, 129, 132; the `drives` block of `data/no-hoa-areas.json`). Rounding: under 15 minutes to the minute; over 15 to the nearest 5 (row 106). The seconds agree with the ledger's figures to the hundredth where the same ends were used.

| Page claim | Row | Measured | Verdict |
|---|---|---|---|
| Barefoot Landing "a 3-minute drive" (Windy Hill) | 119 | 3.08 min, 0.89 mi | matches |
| Cherry Grove boat ramp "5 minutes away" | 123 | 5.28 min, 1.65 mi | matches |
| Rosewood Landing "2 minutes" (Socastee) | 125 | 2.28 min, 0.54 mi | matches |
| Socastee Landing and Park "about 5 minutes" | 125 | 4.76 min, 2.29 mi | matches |
| Little River, Socastee, Garden City landings "within 10 minutes" (guide) | 133 | Little River 7.47 min (USGS point to 148 Morgan Ave) or 9.04 (data-file start); Socastee 2.28; Garden City 5.95 | matches |
| Stanley Drive landing "5 minutes from the middle of Garden City" | 132 | **5.95 min, 1.98 mi** to the landing (OSM node 4409738385, county address point 290 Stanley Dr) from the USGS point; 6.83 min from the middle of the no-fee houses. The row's 4.60 min, 1.66 mi is to the road's centre (33.5784, -79.0131). | **fails: the page should say 6** (D24) |
| MarshWalk "about 7 minutes south" (Garden City) | 106 | 7.27 min, 3.07 mi from the USGS point (8.15 from the middle of the no-fee houses) | matches |
| Billy Witherspoon Landing "a 6-minute drive" (Conway) | 128 | 5.76 min, 2.65 mi | matches |
| Conway Medical Center "12" | 128 | 11.74 min, 5.90 mi (from the middle of the houses; 10.24 from the USGS town point, row 50) | matches; the page does not say which start |
| Conway "The beach is a 25-minute drive" | 50 | 24.29 min, 14.52 mi | matches (to the nearest 5) |
| Loris "about 35 minutes" to the beach | 48 | 36.36 min, 24.2 mi | matches |
| Loris "Coastal Grand Mall about 50" | 48 | 52.25 min, 32.13 mi | matches |
| McLeod Loris "a 9-minute drive" (country around Loris) | 129 | 9.09 min, 4.60 mi | matches |
| Galivants Ferry Landing "about 6 minutes" (Aynor) | 106 | 6.48 min, 5.04 mi | matches (rounds to 6) |
| Aynor "about 45 minutes to the beach" | 51 | 44.41 min, 29.66 mi | matches |
| Aynor "about 30 to the nearest hospital" | 51 | 29.62 min, 20.03 mi | matches |
| Surfside "the nearest public beach access is about a minute by car" (row 135) | neighborhoods 140 | 1.42 min, 0.42 mi | matches (from one reference point) |
| Plantation Point "about 10 minutes" (earlier text) | 117 | 9.81 min, 3.33 mi to the east end of 38th Avenue North | matches |
| Plantation Point "a 3.7-mile drive" (01:15 text, now removed) | none | 3.33 mi; 2.72 to 3.06 mi to the nearest public accesses | did not reproduce (X5) |
| Plantation Point "too far to walk" (current text) | none | foot profile: 3.14 mi, 67.6 min to 38th Avenue North | supported |

Walk times. The page states none. The guide label "The beach on foot" rests on a straight-line count, so I walked it: for each house placed on the county map in the five areas, the foot route (routing.openstreetmap.de) to the nearest of its three closest public accesses in the state beach layer (611 accesses):

| Area | Houses placed | Median walk | Within 10 min | Within 15 min | Longest |
|---|---|---|---|---|---|
| Crescent Beach | 25 | 3.6 min | 25 | 25 | 8.3 min, 0.39 mi |
| Windy Hill | 18 | 4.3 min | 16 | 18 | 11.5 min, 0.53 mi |
| Ocean Drive | 15 | 7.7 min | 9 | 14 | 29.3 min, 1.37 mi (1019 Belle Dr) |
| Myrtle Heights | 4 | 2.4 min | 4 | 4 | 4.8 min |
| Surfside Beach | 20 | 6.0 min | 15 | 19 | 24.6 min, 1.15 mi |

"Most houses are within a 10-minute walk of a public beach access" holds in every one of the five (the lowest share is Ocean Drive, 9 of 15). The label is true. It still needs a row, or the wording of row 95.

## Step 4: share wording and price lines

| # | Area | Page wording | Count | Share | Rule | Verdict |
|---|---|---|---|---|---|---|
| 1 | Downtown Myrtle Beach | "Most" | 17 of 20 | 85% | more than 50% | ok |
| 2 | Myrtle Heights | "Every" | 4 of 4 | 100% | all | ok |
| 3 | Pine Lakes | "Every" | 6 of 6 | 100% | all | ok (but see D10, "pays no dues") |
| 4 | Plantation Point | "Not one ... pays" | 7 of 7 | 100% | all | ok as a count (see D10) |
| 5 | Windy Hill | "Six in 10"; "every one" in Windy Hill Beach | 24 of 40; 10 of 10 | 60% | exact | ok |
| 6 | Crescent Beach | "Almost every" | 34 of 39 | 87% | 90% or more | **fails (D11)** |
| 7 | Ocean Drive | "More than half" | 23 of 41 | 56% | more than 50% | ok |
| 8 | Cherry Grove | "Over half"; "every one outside a named subdivision" | 52 of 89; 43 of 43 | 58% | more than 50% | ok |
| 9 | Little River | "Every" | 8 of 8 | 100% | all | ok |
| 10 | Socastee | "Most" | 11 of 14 | 79% | more than 50% | ok |
| 11 | Surfside Beach | "Almost every" | 36 of 42 | 86% | 90% or more | **fails (D11)** |
| 12 | Garden City Beach | "3 in 4" | 41 of 55 | 75% | exact | ok |
| 13 | Conway | "Almost every" | 20 of 23 | 87% | 90% or more | **fails (D11)** |
| 14 | Loris | "Almost every" | 15 of 16 | 94% | 90% or more | ok |
| 15 | Country around Loris | "Most" | 74 of 82 | 90% | more than 50% | ok (true, and low) |
| 16 | Aynor | "About 2 in 3"; "every one in and around the town" | 30 of 45; 15 of 15 (MLS region 17a) | 67% | exact | ok |

Other shares: "Almost every ... outside a named subdivision" 97% (446 of 460, row 130) ok; "Almost every home here is in a high-risk flood zone" (Cherry Grove) rests on row 74 (2,013 of 2,057 address points, 98%), not on the 42 of 50 houses (84%), ok; "most" at the head "16 areas where most homes have no fee" ok (lowest is 56%).

Price lines. The rule is the median list price of detached houses with no fee in the set, rounded to $5,000 (to $0.1 million above $1 million). Every line matches the area file.

| Area | Median | Page | Verdict |
|---|---|---|---|
| Downtown | $435,000 | about $435,000 | ok |
| Myrtle Heights | $1,632,500 | range $750,000 to $5.8 million (4 listings) | range ok; "highest prices" D5 |
| Pine Lakes | $929,950 | about $930,000 | ok |
| Plantation Point | $1,199,000 | about $1.2 million | ok |
| Windy Hill | $746,450 | about $745,000 | ok |
| Crescent Beach | $754,900 | about $755,000 | ok |
| Ocean Drive | $664,450 | about $665,000 | ok |
| Cherry Grove | $847,700 | about $850,000 | ok |
| Little River | $419,250 | "less than about $420,000"; new at $450,000 | ok (four at $450,000: 4340 and 4344 Mineola, 4358 and 4362 Ellis) |
| Socastee | $249,900 | about $250,000 | ok; "lowest prices" D5 |
| Surfside Beach | $939,450 | about $940,000 | ok |
| Garden City | $1,442,000 | about $1.4 million; "more than anywhere but Myrtle Heights" | ok (by median) |
| Conway | $287,000 | about $285,000 | ok |
| Loris | $319,000 | about $320,000 | ok |
| Country around Loris | $414,100 | near $415,000 | ok |
| Aynor | $372,000 | about $370,000 | ok |

## Ledger gaps (match by my check, no row holds them)

- G1: "Around Myrtle Beach, most are in the 16 areas below." Of the 688 detached no-fee houses in the nine areas, 388 (56%) are in the 16 areas; of the 457 listed outside a named subdivision, 273 (60%). Row 18 struck the earlier "most are in the MLS areas along the ocean". This one holds, but it needs a row.
- G2: "Beach is on the far side of Kings Highway, too far to walk" (Plantation Point): the foot route is 3.1 miles. Kings Highway is about 4 km east of the houses (road layer).
- G3: "Windy Hill is the south end of North Myrtle Beach." The S.C. Encyclopedia lists the four towns but does not say this.
- G4: "Crescent Beach ... from about 9th to 27th Avenue South." The MLS region name has no avenues. The 25 placed houses run from 825 Hillside Drive South (about 9th) to 703 27th Avenue South.
- G5: "Ocean Drive is the part of North Myrtle Beach around Main Street." No row. The area's polygon holds the Horseshoe on Main Street.

Other notes for the writer:

- Row 134 gives Loris a lot of 0.49 acre ("about half"). The area file and row 129 give 0.37, and the page says "about 0.4 acre". The page is right; row 134 is wrong.
- "Windy Hill ... one of four beach towns that joined in 1968": the S.C. Encyclopedia sentence has "Cherry Grove, Ocean Drive Beach, Crescent Beach, and Windy Hill consolidated"; "towns" is the writer's word. Left as a match.
- "A second wooden boardwalk follows Withers Swash" and "The Riverwalk follows the river downtown": row 91 says "runs along the river" avoids the build's personification check. If `build.js` refuses "follows", change both.
- The Garden City entry sits in Horry County; part of Murrells Inlet (the MLS region's other mailing city) is in Georgetown County (row 77). The page says "the county's rules apply" for Garden City only, which holds for the 17 placed houses (all outside any town, in Horry County).

## Units that match (106)

- **Head:** Meta/h1em/map alt: '16 areas where most homes have no fee' (every area above 50%).
- **Short answer:** Around Myrtle Beach, most are in the 16 areas below (388 of 688 no-fee houses, 56%; 273 of 457 outside a subdivision, 60%) [ledger gap]; About 3 in 4 built before 1990 (278/360 = 77%); fewer than 1 in 5 since (410/2,254 = 18%).
- **Guide:** Little River, Socastee, Garden City each have a county landing within 10 minutes; Half-acre lots: Pine Lakes, Plantation Point; An acre and a new house: Aynor, country around Loris; Under $300,000: Socastee and Conway.
- **1 Downtown:** Most within a mile list no fee (17/20); most within half a mile of ocean (13/17); Second wooden boardwalk follows Withers Swash to Broadway and Collins Street; Lot about 0.2 acre; Typically listed at about $435,000.
- **2 Myrtle Heights:** Every house listed with no fee; every one within half a mile (4/4); Two houses for sale are from that era (1938, 1946); Inside the city, so the city's boat and truck limits apply; Listed from about $750,000 to $5.8 million.
- **3 Pine Lakes:** Lots almost half an acre; more than twice a downtown lot; Expect about $930,000.
- **4 Plantation Point:** Outside the city limits, west of Kings Highway; Lots about half an acre; Annandale, Arundel, Brookgreen; late 1980s on; Flood map puts none of these houses at high risk (0/7); Beach is on the far side of Kings Highway, too far to walk (current text) [ledger gap]; Houses listed at about $1.2 million.
- **5 Windy Hill:** Six in 10 (24/40); every one in Windy Hill Beach (10/10); Almost all within half a mile (17/18); Windy Hill is the south end of North Myrtle Beach [ledger gap]; One of four beach towns that joined in 1968; Barefoot Landing is a 3-minute drive; Most built before 1990 (11 of 20); About half in a high-risk flood zone (9/18); Typical asking price about $745,000.
- **6 Crescent Beach:** The middle of North Myrtle Beach, about 9th to 27th Avenue South [ledger gap]; Streets: Hillside, Holly, Perrin, Strand; Ingram Dunes: last remaining maritime forest; Native dunes 30 feet tall; interpretive half-mile trail; Few houses would need flood insurance (2/25); Lots about a sixth of an acre; About $755,000.
- **7 Ocean Drive:** More than half show no fee (23/41 = 56%); Ocean Drive is the part of North Myrtle Beach around Main Street [ledger gap]; Camper or trailer beside or behind the house, or under a carport; Middle asking price about $665,000.
- **8 Cherry Grove:** Over half (52/89); every one outside a named subdivision (43/43); Boat ramp at 53rd Avenue North, 5 minutes; Two-lane launch, kayak launch, fishing pier, floating dock, fish cleaning station; Heritage Shores: an island in the marsh, reached on elevated boardwalks; Almost every home here in a high-risk flood zone; About $850,000.
- **9 Little River:** Every house on the old waterfront streets listed with no fee (8/8); First permanent settlement in Horry County; Blue Crab Festival each May, weekend after Mother's Day; Not a town; county has no rule on where you keep your boat; T. Craig Campbell landing on the waterway; None within a mile of the ocean; Half listed under about $420,000; new ones on Mineola at $450,000.
- **10 Socastee:** Most built 1979 to 1986, Rosewood Estates and Cimerron Plantation (9/11); Rosewood Landing 2 minutes by car; Socastee Landing and Park about 5 minutes; Swing Bridge built in 1934 and 1935; Not a town; county rules apply; About a third would need flood insurance (4/11).
- **11 Surfside:** Most within half a mile of the beach (17/20).
- **12 Garden City:** 3 in 4 (41/55); not a town; Most within half a mile (15/18); MarshWalk about 7 minutes south; Costs more than anywhere on this list but Myrtle Heights (median $1.4 million).
- **13 Conway:** Typical built about 1970, a little over a third of an acre; County seat, on a bluff of the Waccamaw; Its streets were designed around its live oaks; Billy Witherspoon Landing a 6-minute drive; Conway Medical Center 12; The beach is a 25-minute drive; About $285,000.
- **14 Loris:** Almost every house within a mile of downtown (15/16 = 94%); Older houses, typically 1960s, about 0.4 acre; Grew up around a railroad depot; town in 1902; late 1800s farm center; McLeod Loris is in town; Beach about 35 minutes; Coastal Grand about 50; About $320,000.
- **15 Around Loris:** Most list no dues (74/82 = 90%); most new, 2024 or later (65/74); Typical lot about 0.9 acre; no town limits; McLeod Loris a 9-minute drive; About $415,000.
- **16 Aynor:** About 2 in 3 (30/45); every one in and around the town (15/15); Hoe-Down, Pilot Club, third Saturday in September by state law; Lots typically about an acre (1.06); Galivants Ferry Landing about 6 minutes from the center; More than half of the houses for sale are new (17/30); About 45 minutes to the beach; about 30 to Conway Medical Center; About $370,000.
- **Prices:** Near the ocean, most listed at $750,000 or more (141/221); Inland, most listed at $250,000 to $500,000 (180/288).
- **FAQ:** Carolina Forest, Grande Dunes, Market Common, Burgess: almost every home has a fee; Typical HOA fee on a house about $95; condo fee higher; About 2,700 condos, only one with no fee; Inside the towns, the town picks up trash.
- **Share chips:** Myrtle Heights, Pine Lakes, Plantation Point and Little River "every home for sale" (4 of 4, 6 of 6, 7 of 7, 8 of 8); Windy Hill, Socastee, Garden City, Aynor and the country around Loris "most of the homes for sale" (60%, 79%, 75%, 67%, 90%); Ocean Drive and Cherry Grove "more than half" (56%, 58%); Loris "almost every" (94%).

## Struck entries added

45 entries in `no-hoa-homes-struck.json` (47 before, 92 now). They cover D1 to D33 and X1 to X5 (some drifts take two entries; X5's figure and the "canals to the inlet" guide line are already off the page, and their entries guard against a return). D34 has no entry, because its text is also right for Loris. A drift with no ledger row of its own (D6, X1, X3) cites the nearest row. `node tools/struck-check.test.js` prints "all controls pass": each struck sentence fires its entry, and each approved wording fires none.

`node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`:

- Before my edit: **no-hoa-homes (53 patterns): no struck wording.** No earlier struck wording came back.
- After: **no-hoa-homes (98 patterns): 48 struck phrases found** on the preview built at 01:22. That preview is older than the spec: it still has the guide lines and the "3.7-mile" sentence the writer has since cut.
- The run ends with 78 struck phrases on the pages in all (the other pages are other verifiers' work).
- No banned word from `rules/distance-words.json` is on the page ("Also close by" is not used here). The distance words I found are not on that list: "next door" (D27, X4), "beside them" (D4), "Nearby" (D8), "on foot" (D33).

Struck-check cannot catch a reword that dodges its pattern (D15 did). Writers who apply D1 to D34 should expect the verifier of the next round to read their new sentences again (lesson B45).

## Status

Row 136 of the ledger: **wrong in part (v6)**. Two claims should be cut unless a primary row is added: D6 (the Boardwalk begins at the 2nd Avenue Pier) and D25 (the Garden City heading). Five true-by-my-check claims need a row each (G1 to G5). The drift list D1 to D34 and X1 to X5 is the writer's fix list; the struck list holds the old wording out.
