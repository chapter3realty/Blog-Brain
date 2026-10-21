# Final check, round 14l (2026-10-21)

Independent verifier. I did not write these lines and did no research on them. Scope: `git diff 3b9e73b HEAD` for the best page spec and data file, `git diff ea7c8de HEAD` for the gated, no-HOA and affordable specs, and the new facts of `day-research-14l.md`. I read `prompts/verifier.md`, lessons B45, B48, B53 and `SIBLING-OWNERS.md`. I did not edit a spec. I did not open Zillow.

Sources I opened myself: SC DNR paddling trail Section 7; SC Trails (Waccamaw River Heritage Preserve trail); Horry County parks page and boat landings page; Coastal Carolina University Cultural Arts page; the S.C. Court of Appeals opinion 2012-UP-219; the SC Encyclopedia entry for Surfside Beach; the NGCOA past-winners page; Play Golf Myrtle Beach (2008-12-18). Drives: OSRM driving, no traffic, from the start points of day-research-14l.

## Verdict

- Best: 5 must-fix, 3 tighten. The gated, no-HOA and affordable edits apply the v12, v10 and v9 wording except the items below.
- Gated: nothing to fix in the page. The struck list had 2 failing controls from v12 (fixed here).
- No-HOA: nothing to fix. One optional caveat.
- Affordable: 2 must-fix, 1 tighten.

## Best neighborhoods

### Must fix

| # | Current | Why | Replacement |
|---|---|---|---|
| E1 | Deerfield: "In 2012 the state Court of Appeals ruled that the old golf land did not have to stay golf, and building on it went ahead." | Opinion 2012-UP-219 (read): homeowners sued to stop "converting certain portions of a golf course and clubhouse"; "The referee found no restrictions on the property"; the court affirmed under Rule 220(b) and adopted the referee's order on the easement and disclaimer arguments. The finding is the special referee's, the opinion is unpublished with a no-precedent notice, and it covers "certain portions" (WMBF 2015, row 230: the north side). The South Course, where houses stand, was a separate case (Supreme Court, 2015). "Ruled that the old golf land did not have to stay golf" is wider than the opinion, and "building on it went ahead" ties the 2012 case to the South Course houses. This is the B30 regression of row 230's struck wording. | "Some homeowners sued to keep part of the old golf land as golf. A special referee found no such restriction on that land, and the state Court of Appeals affirmed in 2012." |
| E2 | Deerfield: "A typical lot is about a third of an acre, and new houses now stand on the old South Course." and the price line "Homes in the Deerfield Plantation area usually sold for about $355,000 last year, and the HOA fee is under $90 a month." | The lot (0.34 acre, 741 lots, row 263), the price (41 resales, row 125) and the fee (row 127) all come from parcels whose description starts DEERFIELD. The Old South Course houses are described "OLD SOUTH COURSE PH 1A/1B" (row 230), so they are in none of the three. Under the group "New houses" and the heading "new houses on old golf land", the reader takes $355,000 and a third of an acre as the new houses. | "A typical lot in the older streets is about a third of an acre, and new houses now stand on the old South Course." and "Homes in the older streets of the Deerfield Plantation area usually sold for about $355,000 last year, and the HOA fee is under $90 a month." Give the table row the same words ("older streets") or keep Deerfield out of "New houses". |
| E3 | Tidewater: "part of a state saltwater paddling trail that runs 30 miles, from Socastee to Little River." | SC DNR Section 7 (read): title "Socastee to Little River, the Intracoastal Waterway"; "This portion of the trail follows a 30-mile canal created in 1936". The page gives no length for the trail. The 30 miles is the canal. | "The Intracoastal Waterway along Tidewater is part of the state's Southeast Coast Saltwater Paddling Trail, the Socastee to Little River section, which follows a 30-mile canal." |
| E4 | Tidewater: "At the Little River end, Vereen Memorial Gardens, a free county park, has about three miles of nature trails and boardwalks, about 17 minutes from Tidewater by car." | (a) Sibling: the no-HOA page's Little River card already gives Vereen and "about 3 miles of trails and boardwalks" (no-HOA v10 holds it). One fact, two pages. (b) Drive: OSRM from the Tidewater point is 15.0 min to the county address (2250 Hwy 179), 16.6 to the OSM park outline, 17.3 to the DNR point. The entrance is the right end; 15 is the safe figure. (c) "Free": SC Trails says fee none, the county page lists none. Say "no fee is listed" or drop "free". | Cut the Vereen sentence. If the lead keeps it: "...has about three miles of trails and boardwalks, about 15 minutes from Tidewater by car", and then cut it from the no-HOA Little River card. |
| E5 | Sources note: "Fees and house features come from homes for sale; counts, lots and flood zones from county parcels." | v10 N22 asked for "Fees come from homes listed for sale, except The Farm's." The Farm's $107 is the owners' association's fee (the-farm row 5), not a listing. Half applied. | "Fees come from homes listed for sale, except The Farm's, which is the owners' association's. House features come from homes for sale; counts, lots and flood zones from county parcels." |

### Tighten

| # | Current | Replacement |
|---|---|---|
| E6 | Guide: "Grande Dunes: a South Florida look" under "New houses" | The tagline describes the first houses (Mizner style, tile roofs); the entry says the new ones are "plainer, with fiber-cement siding". It does not fit the group. Use "Grande Dunes: mostly new listings" (row 200: most houses for sale are new, built since 2024; 33 characters, inside the 34 limit). |
| E7 | Surfside: "Surfside Beach began as part of a rice plantation called The Ark, and its name came from a town in Florida." | "its" can read as The Ark's name. SC Encyclopedia (read): "The new owners renamed the property Surfside Beach after a Florida town." Use "Surfside Beach began as part of a rice plantation called The Ark. The name Surfside Beach came from a Florida town." |
| E8 | Grande Dunes: "named it its course of the year in 2009" | Holds (see the award below). Add the scope: "its National Course of the Year in 2009". |

### Award, B53

NGCOA past-winners page, "Jemsek National Course of the Year": "2009 Resort Club at Grande Dunes, Myrtle Beach, SC" (2008 Reynolds Plantation, 2010 Industry Hills). Verified at the awarding body, national scope. Play Golf Myrtle Beach (2008-12-18) reports it was announced in December 2008 for the "2009" award, so "in 2009" is the NGCOA's own year label. The sentence may stay. The membership sentence is already cut (row 289).

### What holds

- Guide groups: "Golf course neighborhoods" fits Pine Lakes (1927), Tidewater (7 in 10 house lots border the course, row 280), Barefoot ("a waterway course": seven holes along the waterway), Prince Creek, Wild Wing. "New houses" fits Forestbrook Estates "2018 or newer" (500 houses built, first common-area deed 2018, oldest listing 2018, rows 220, 229) and Deerfield "new on old golf land" (266 of 267 Old South Course houses built, row 230), once E2 is fixed. "More house for the money" with The Farm "280 acres of open land" (283.9 acres, row 281) is a loose fit; leave it.
- Surfside, Cherry Grove, Pine Lakes, Prince Creek, Wild Wing, Plantation Lakes, Waterbridge, Market Common, Forestbrook and The Farm edits apply v10 wording. "13 of their 250 house lots", "outside the Seasons section", "new homes ... $320,000", "12 minutes ... from the middle of Prince Creek" all match.
- Deerfield "about 14 acres" (13.62, row 197), "beach about seven minutes" (row 230).
- Dek "Fifteen neighborhoods": 15 entries.
- The shortAnswer "For a new house, Grande Dunes" is an opinion; Waterbridge and Forestbrook are also new. Optional; leave it.
- `fee_by_group` in the data file still says "Golf at the door". The page does not use it. Optional: rename.

## Gated communities

All five changes match v12: H1 (Golf Digest and Golf Magazine split), H2 (Socastee heading and pill), H3 (villas in Oystercatcher Island), H4 (cut), H5 ("Some gates"). No new drift. Two struck-list controls failed at HEAD; I fixed the entries (see Struck lists).

## No-HOA homes

Applied exactly: N1 Ocean Drive, N2 label, N3 Loris, N6 Crescent Beach, N7 Aynor, N8 Aynor rental. N4 is applied in the lead's own words: "All of them are outside the high-risk flood zones, where the federal rule makes a lender require flood insurance" (17 of 17 downtown, row 116); it holds. Optional: N5 left out the caveat. v10 wording: "Yes: city zoning does not generally limit it, though some planned developments and HOA documents do." The source (Rental Property Quick Reference) has the caveat; "generally" carries part of it.

## Affordable places to live

### Must fix

| # | Current | Why | Replacement |
|---|---|---|---|
| A1 | Fairways: "Coastal Carolina University is about three miles away by road, and its Cultural Arts series puts on plays and concerts on campus." | Distance holds: OSRM 2.88 mi, 7.9 min to the campus point. The CCU page does not call it a "series": "a full lineup of cultural arts events" from the Edwards College, with named series inside it; most concerts and plays say "tickets required". "Puts on" and the singular series are the researcher's words. | "Coastal Carolina University is about three miles away by road, and its Edwards College lists plays, concerts and exhibits on campus each season." |
| A2 | Golf and Yacht Club: "Socastee Recreation Park, a large county park with a disc golf course, trails, ball fields and a playground, is about four miles away. Osprey Marina ... is about the same distance by road." | (a) Sibling: the no-HOA Socastee card already says "Socastee Recreation Park has fields, picnic areas, disc golf, trails and a playground". (b) The park sentence has no "by road". OSRM is 4.21 mi by road (12.0 min) but about 1.6 mi in a straight line, so "about four miles away" reads as wrong. The county text: "91.5 acre property ... multi-purpose fields, picnic areas, a disc-golf course, trails, and a playground". | Cut the park. Keep the v9 sentence: "Osprey Marina, with wet slips and dry boat storage on the Intracoastal Waterway, is about four miles away by road." (3.9 mi, row 226). |

### Tighten

| # | Current | Replacement |
|---|---|---|
| A3 | Birchwood: "From there you can paddle a state route downriver through a forest of bald cypress, about 20 miles to Red Bluff Landing." | "State route" reads as a road. SC Trails: a 25-mile one-way trail, managed by SC DNR; "Highway 9 Public Landing (Mile 5.5)", "Red Bluff Landing (Mile 25)", "dominated by bald cypress". 25 - 5.5 = 19.5, so "about 20" holds. The link from Chris Anderson Landing to "Highway 9 Public Landing" is the 1999 resolution ("Chris Anderson Memorial Landing at Highway 9") and the county address; the trail page does not name Chris Anderson. Use "From there you can paddle the state's Waccamaw River trail downriver through bald cypress woods, about 20 miles to Red Bluff Landing." Red Bluff Landing is the county's Danny Knight Landing on the Polo Farms entry of the same page; say so once or leave it. |

### What holds

Chris Anderson Landing "about 7 minutes" (OSRM 7.3 min, 4.0 mi, from the Birchwood point to an OSM address point; the county lists "1112E Hwy 9, Longs, Waccamaw River"). The A1 to A5 wording of v9 is applied (Indigo Grove sentence cut, Sawgrass insurance clause, "Many", Danny Knight "a 4-minute drive"). Dek "Twelve affordable places": 12 entries. Huntington Beach line (alligators removed, "10 minutes") unchanged in fact.

## Not used from the research

"Free" ramp at Chris Anderson (the 1999 resolution does not prove it today). Vereen's hours (dawn to dusk, SC Trails only). Simpson Creek Park, Forestbrook Park, the storage yard at Tidewater, Hibben Memorial: not on a page; leave them.

## Struck lists

Best: 7 entries (E1 to E7). Affordable: 3 entries (A1 to A3). Gated: the v12 H2 entry now fires on its own struck wording (its text named Socastee, which its `unless` suppressed); the v11 611 entry's `use` no longer repeats the H4 wording. `node tools/struck-check.test.js` passes.
