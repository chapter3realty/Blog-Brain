# Gated communities, final check v11 (round 14i, 2026-10-15)

Independent verifier. I did no research on this page and saw none of its drafts. Tasks: rows 570, 571 and 572 (the 14g pass, the 14h polish and the v10 corrections F1 to F34), the sibling check, the times and distances, and the struck check (lessons B45 to B52).

Page checked: `batches/2026-10-b/specs/gated-communities.js` at commit 93af54a, md5 `a0e2891fb2ae690267c73b626c39a286`. I diffed it against e6f01f9 (the v10 base): 139 changed lines. I read the visible text of the preview build in `scratchpad/preview/b/gated-communities.html` (built 04:21, the 93af54a tree; 34,249 characters) and matched every body sentence of it to the spec text: all matched except headings, link-split sentences and photo credits. I did not edit the spec. The checkout moved on to eeed521 while I worked; the spec and the facts file did not change after 93af54a.

## Verdict

**Not ready to publish: 4 must-fix drifts, 13 tighten. 25 of the 34 v10 corrections hold; 9 do not (F2, F12, F13, F15, F26, F27, F28, F30, F32).**

- **81 page items checked. 63 match. 18 drift** (17 distinct drifts, G1 to G17; G3 spans two sentences). Must fix: G3, G5, G8, G12. Tighten: G1, G2, G4, G6, G7, G9, G10, G11, G13, G14, G15, G16, G17.
- Two of the four must-fix drifts are new in rounds 14g to 14i, not v10 leftovers: G5 is a v10 correction applied the wrong way ("most" where v10 wrote "many", and it is half), and G8 is a new 14h sentence whose number comes from a parcel that is not a lot.
- **G3 is the large one.** The Tidewater sentence "Golf Digest has ranked Tidewater Golf Club No. 39 among America's 100 Greatest Public Courses" is wrong. The club's own page says it, and row 200 passed it as `verified`. Golf Digest's own course page puts No. 39 (2023-24) and No. 38 (2025-26) on its **Best in State** list for South Carolina, and shows the course on the America's 100 Greatest Public list only from 2003 to 2012, highest 41st. The 14h polish removed the list years, which hides that the figure is two years old and from a different list. Row 200 is now `wrong (v11)`.
- Rows: 570 `verified with corrected wording (v11)`; 571 `wrong in part (v11)` (Tidewater ranking, The Bluffs 200 feet); 572 `wrong in part (v11)`. Row 200 `wrong (v11)`. One ledger row added: 615, "final check (v11)".
- Struck check: `node tools/struck-check.js --batch batches/2026-10-b --preview scratchpad/preview/b --strict`. **Gated-communities: 407 patterns, 0 struck phrases before my entries. After my 19 entries: 426 patterns, 21 struck phrases** (all 19 entries fire; G2 fires twice, the Seasons heading and sentence fire twice). No CRAFT 2 distance-word hit on gated. Exit 1 overall, because affordable-places-to-live has 5 struck phrases and no-hoa-homes has more (not my pages); best-neighborhoods and the-farm have none. `node tools/struck-check.test.js`: all controls pass.

## The 17 drifts (18 page items), in page order

Must fix = wrong, or past its source. Tighten = supportable with a stated limit.

| # | Page sentence | Problem | Supported wording | |
|---|---|---|---|---|
| G1 | Short answer: "Typical sale prices in them are about $200,000 to $2.2 million" (F32, in part) | The typical prices in the table run from about $200,000 (Summerhouse condos) to about $2 million (DeBordieu). $2.2 million is the top of four Breakers Reef sales (rows 90, 83: the middle sale there is about $1.7 million), not a typical price. | "Typical sale prices in them run from about $200,000 to about $2 million." | Tighten |
| G2 | Heading and map pill "Socastee to Murrells Inlet", entries 7 to 12 (F2, in part) | Entry 8, Prestwick, is near Surfside Beach: 12 km from Murrells Inlet and 8 km from Myrtle Beach. v10 asked for a name that covers Socastee, Surfside Beach and Murrells Inlet; the writer dropped Surfside Beach, so entry 8 sits outside its heading. | "Socastee, Surfside Beach and Murrells Inlet, 7 to 12" (the pill is limited to 32 letters; if the full name does not fit, the map key can carry it) | Tighten |
| G3 | Tidewater: "has a golf course ranked among the best you can play in America. Golf Digest has ranked Tidewater Golf Club No. 39 among America's 100 Greatest Public Courses." | **Wrong.** Golf Digest's Tidewater page (read through the search tool twice; golfdigest.com answers 403 to curl and to WebFetch) shows "#38 Best In State", "Ranked 38th, 2025-'26" and "Ranked 39th, 2023-'24" for the state list, and for America's 100 Greatest Public "Ranked from 2003-'12", highest 41st (2007-'10). The club's accolades page (opened) says "Ranked No. 39 in America's 100 Greatest Public Courses (2023-2024)", a secondary source that mislabels the state list. The club's own 2022 release says only that Golf Digest named it among 14 best public courses in South Carolina and that it "has also been ranked among the nation's top 100 public layouts" (a past ranking). No. 39 is not the figure now: it is No. 38, and it is a state rank. Row 200 said `verified`; it is `wrong`. Primary source for the correction: Golf Digest, Tidewater Golf Club course page, `golfdigest.com/courses/sc/tidewater-golf-club-tidewater`. | "Golf Digest ranks Tidewater Golf Club No. 38 among the best public courses you can play in South Carolina [Golf Digest, Best in State, 2025-26]." For the first sentence: "a golf course that Golf Digest ranks among South Carolina's best public courses; in 1990 Golf Digest and Golf Magazine named it the best new public course in America." Do not use "America's 100 Greatest" for Tidewater. | Must fix |
| G4 | Waterway Palms: "Most houses sold here lately are new" (F12, in part) | 127 of 188 built since 2020 (68 percent). A 2020 house is six years old; "new" is the writer's word. | "Most houses sold here lately were built since 2020." | Tighten |
| G5 | Waterway Palms: "custom homes, most about 3,000 to 3,800 square feet" (F13) | I pulled all 188 listings again (169 sold, 19 active): heated area 2,110 to 5,858, median 3,405; **92 of 188 (49 percent) are in 3,000 to 3,800**; 123 (65 percent) are in 2,800 to 4,000. v10 wrote "many" for this range; the writer wrote "most". | "Many are large custom homes of about 3,000 to 3,800 square feet." Or, for "most": "most are between about 2,800 and 4,000 square feet." | Must fix |
| G6 | Waterway Palms: "lots on the Intracoastal Waterway have a private dock" | 19 of the 22 waterway listings name a private dock; 3 do not. v10 wrote "often". "Have" says every lot. | "Lots on the Intracoastal Waterway often have a private dock." | Tighten |
| G7 | Waterway Palms: "about one in five has no house on the county roll yet, so expect new houses going up" (F15, in part) | The count holds (159 of 746, reproduced from county layer 24). "So expect new houses going up" is the forecast row 632 and v10 F15 struck: a lot with no building value can be a lot where no one is building. | "The lots are small, and about one in five has no house on the county roll yet." Or "a house may go up on a nearby lot." | Tighten |
| G8 | The Bluffs: "The Carolina Bays Parkway (S.C. 31) runs along one side, so lots on that edge sit about 200 feet from a highway" | **Wrong number.** The 59 m (194 feet) of v9 is the distance to the nearest Bluffs parcel, not to a lot. Horry layer 24 and layer 18, and OpenStreetMap's S.C. 31 carriageways (I drew both): the nearest lot (Phase III-B, lot 334) is 85 m by the county road line and 87 m (286 feet) from the nearest S.C. 31 carriageway; the next lots are 98 to 111 m. | "The Carolina Bays Parkway (S.C. 31) runs along one side; the nearest lots are about 280 feet from it [county parcels; OpenStreetMap]." Or cut the distance. | Must fix |
| G9 | Seasons: "was built around its clubhouse"; heading "a clubhouse built for a social calendar" | No source says the neighborhood was built around the clubhouse. The builder's 2013 release lists a sports park, a fitness center with an indoor pool, an outdoor pool and "a grand clubhouse, staffed with a full-time Activities Director"; the clubhouse is one of several amenities, near the TPC Boulevard entrance. | "Seasons at Prince Creek West, in Murrells Inlet, has a clubhouse with a full-time activities director [builder, 2013]." Heading: name what the source supports, for example "a clubhouse with an activities director". | Tighten |
| G10 | Seasons: "The clubhouse was built with a ballroom, a card room, an art studio and a billiards room" | Row 54 (PRWeb, 2013-08-31): "A grand clubhouse ... offers a ballroom, card room, art studio, and billiards room." A builder's marketing list, nine years old, in the present tense of 2013. "Was built with" says what was constructed. The 2024 management-company release (row 56) lists none of these rooms, and a search of current listings finds the ballroom in one listing only, as part of a separate amenity building. Row 159's verifier said to keep the 2013 list with its date. | "The builder listed a ballroom, a card room, an art studio and a billiards room in the clubhouse [2013 release]." | Tighten |
| G11 | Seasons: "Today the clubhouse has indoor and outdoor pools, a fitness center, tennis and bocce" | Row 56 (FirstService, 2024-01-31): the community "offers its residents a beautiful clubhouse, indoor and outdoor pools, a fitness center, tennis, and bocce ball": a list of amenities, not a list of what is in the clubhouse. The 2013 release puts the pools and fitness center in the amenity complex and the tennis and bocce in the sports park. Row 150's verifier made the same correction for the Golf and Yacht Club ("the community has ..., not the clubhouse"). | "Today the community has a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce [management company, 2024]." | Tighten |
| G12 | Litchfield by the Sea: "The houses are in Charlestowne Grant, Compass Point and River Club" (F27, in part) | The sentence says where all the houses are. The association's own community pages list Oystercatcher Island (freestanding two-story villas, which v10 verified as 5 of 5 raised three-bedroom houses), Charlestowne Grant (45 single-family homes), Compass Point (20) and River Club (about 250 single-family homes). The Willbrook entry on the same page says it is a gated neighborhood of about 250 houses inside Litchfield by the Sea, so the page contradicts itself. v10's wording named Oystercatcher Island first. | "The association also lists single-family homes in Oystercatcher Island, Charlestowne Grant (45), Compass Point (20) and River Club (about 250) [association's community pages]." | Must fix |
| G13 | Litchfield by the Sea: "Charlestowne Grant's are raised beach houses" | All 8 Charlestowne Grant listings are raised beach houses (built 1993 to 2003, 2,730 to 4,710 square feet), out of 45 homes. The association's page does not say "raised". A rule from 8 of 45 (lesson B48). | "Many of Charlestowne Grant's houses are raised beach houses." | Tighten |
| G14 | Litchfield by the Sea: "Condo and villa fees are about $620 a month, up to about $1,880 for an oceanfront condo, and Charlestowne Grant's houses pay about $520 to $630"; table cell "About $520 to $1,880" (F28) | The range is what ten sections' sales show (618 to 1,876), not all condos and villas: Greenhaven, Avian Forest, Tall Pines, Magnolia Run, Emerald Green, Marsh Hawk and others are unread (v10 F28). Charlestowne Grant's 8 listings read 517, 517, 525, 625, 630, 632, 632 and 817 (I reproduced them): $520 to $630 leaves out the 817. | "In the sections whose sales we read, condo and villa fees run from about $620 a month to about $1,880 for an oceanfront condo; most of Charlestowne Grant's houses pay about $520 to $630." | Tighten |
| G15 | Litchfield by the Sea: "One-bedroom condos in Summerhouse usually sell for about $200,000, and villas in Breakers Reef for about $1.5 million to $2.2 million" (F29, in part) | The word is right (villas). The number is four sales ($1,490,000, $1,570,000, $1,795,000, $2,178,000), written as what villas "usually sell for". Rows 90 and 199 already struck this ("four sales stated as what homes sell for"); v10 F29 approved the "usually" line without noticing. I amended the v10 entry's approved wording in the struck list. | "Four villas in Breakers Reef sold last year for about $1.5 million to $2.2 million." | Tighten |
| G16 | Heritage: "Some lots look over the old rice fields toward the river" (F30) | I read all 83 listings: 2 mention rice fields (one: "overlooks the 9th fairway and historic rice fields"; one: "the ricefields roll toward the Intracoastal Waterway") and a third is the clubhouse. v10's 14 counted "rice or marsh". Golf Digest says the course runs beside long-abandoned rice fields, which supports the setting, not a count of lots. | "A few lots look over the old rice fields toward the river." | Tighten |
| G17 | Pros: "Several gates have staff: a guard day and night at some, a gatehouse or a watch desk at others" | A guard day and night is sourced (Litchfield by the Sea main gate, row 6; Dye Estates main gate, row 211). A gatehouse and a watch desk are not staffing: row 82 is a roofed building seen from above, row 259 says "coverage is 24 hours", not "staffed", and row 442 says only that a gate has a phone line. | "Several gates have a guard on duty day and night; others have a gatehouse or a watch desk." | Tighten |

The Bluffs sentence also fails the distance rule in spirit: rules/distance-words.json has no pattern for it, but CRAFT 2 says a distance is a measurement, and the measurement is 280 feet.

## The v10 corrections F1 to F34: applied?

| F | Result |
|---|---|
| F1 | applied (short answer: golf clubs usually separate, some beach clubs come with the home); the cons bullet was replaced |
| F2 | **in part** (G2): the heading no longer names Surfside Beach, so Prestwick sits outside it |
| F3 | applied |
| F4 | applied (the custom sentence is gone) |
| F5 | applied: about seven in ten, about 580 houses; I reproduced 399 of 580 (69 percent) from the county layers, and Best says the same |
| F6 | applied |
| F7 | applied (the Seaside houses sentence is gone) |
| F8 | applied |
| F9 | applied, with the limit in the table below |
| F10 | applied |
| F11 | applied |
| F12 | **in part** (G4): "new" |
| F13 | **not applied correctly** (G5): "most" for 49 percent |
| F14 | applied |
| F15 | **in part** (G7): the forecast came back as "expect" |
| F16 | applied (listings only) |
| F17 | applied |
| F18 | applied (the Prestwick two-story sentence is gone) |
| F19 | applied |
| F20 | applied |
| F21 | applied |
| F22 | applied (the pond sentence is gone) |
| F23 | applied |
| F24 | applied |
| F25 | applied |
| F26 | applied; its fee half is G14 |
| F27 | **in part** (G12, G13) |
| F28 | **not applied** (G14): the fee range is still unscoped |
| F29 | applied (villas); the "usually" is G15 |
| F30 | **in part** (G16): the one-story brick sentence is gone, the rice-field sentence rests on 2 listings |
| F31 | applied |
| F32 | **in part** (G1): "typical", but the top is still $2.2 million |
| F33 | applied (the cons bullet is gone) |
| F34 | applied |

25 applied, 9 not or in part. No v10 wording came back; no old struck entry fires (407 patterns, 0 hits before my entries).

## Notes on the items that matched with a limit

- **Barefoot membership (F9).** "A golf membership stays with certain houses: the seller gives it up at closing, and the buyer can take it over by enrolling within 60 days" matches the FAQ (opened today). Limit for the writer: the FAQ lists the eligible properties as the Centex/Pulte developments, North Towers and Yacht Club Villas, The Retreat and North Beach Plantation, and says some resort properties are excluded; it does not name Dye Estates or Leatherleaf. The sentence stands in the Dye Estates and Leatherleaf entry, so a reader will take it to cover them. It is true as written, and a sentence that names which houses is only possible with a source that does.
- **Grande Dunes fee, $200 to $400.** Row 34's $199 to $375 came from two listings per section. I read every listing in the Calais, Palermo and Villa Venezia searches (39: Calais 9, Palermo 16, Villa Venezia 14): $199 to $411, 36 of 39 at $400 or less. "About $200 to $400" holds, and it now agrees with Best (which counts all of Grande Dunes). The ledger row 34 is stale on this; row 615 records the 39.
- **Golf and Yacht Club storage.** "The association keeps storage for RVs, trailers and boats, for a fee when space is open" rests on listings only: of 140 listings in the search, 20 mention storage, 2 name a fee ("additional fee", "low fee") and 4 give a limit ("based on availability", "subject to availability", "first come first-served", "may also have a waiting list"). The HOA's own site (mbgyc.com, opened) says nothing about storage. v10's wording, so it matches v10; it is a secondary source.
- **Wachesaw East ownership.** "A business of their own, not the homeowners': Festiva Real Estate Holdings bought them in 2017" holds as written: row 334 (Club + Resort Business, 2017) says Festiva bought the course and the grill; the county shows the course land in the name of Wachesaw Golf LLC (v9). Nothing says Festiva owns it in 2026, and the page does not say so.
- **Seaside route.** The city's golf cart page (read through the search tool) says carts may use secondary roads posted at 35 mph or less, from sunrise to sunset. The posted limits of 8th Avenue North and Hillside Drive North are still in no source (v9), so "the way runs on two side streets" and the cart rule are two true sentences, not proof that the route qualifies.
- **"Ten have golf."** The Litchfield by the Sea site says River Club's homes surround a semi-private 18-hole golf course. The page counts ten golf communities (row 171) and does not name that course. Not a drift, but "ten" may be eleven.

## Sibling check (SIBLING-OWNERS.md)

Read against the Best, Affordable, No HOA and The Farm specs at HEAD (eeed521).
- **Tidewater, Best and Gated.** Course share: both say about seven in ten (county: 69 percent). Houses: both say about 580. Price $625,000 and fee $230 agree. v10's two conflicts are gone. SIBLING-OWNERS gives Gated the awards and the inlet holes, and Best a normal day; the 70 percent and the 580 now sit on both pages, in the same words nearly. Consistent, but it is the same fact twice (lesson B46); Best may keep it and Gated may drop it.
- **Tidewater's ranking.** Neither Best nor any other page gives the Golf Digest figure, so G3 is Gated's alone.
- **Grande Dunes, Best and Gated.** Price $1.5 million agrees. Fee: Gated "$200 to $400" for the three gated sections (my 39 listings: $199 to $411); Best "$200 to $400" for all of Grande Dunes (29 detached listings, $199 to $400). Same figure, two scopes, both sourced. Best does not mention the Ocean Club, so there is no conflict on membership.
- **Golf and Yacht Club, Affordable and Gated.** Affordable: about 470 houses behind a gate, most one story, pool and hot tub, tennis, community center; price $225,000 agrees. Gated: storage, Enterprise Landing, Heron Point, Sandpiper Place. No overlap.
- **Barefoot, Best and Gated.** Best's Barefoot entry is about condos, the swing bridge and the replay rate; no overlap.
- Prestwick, Seaside, Seasons, Bellwood, Wachesaw, The Reserve, Willbrook, Litchfield, Heritage, DeBordieu and Waterway Palms are on no sibling page except Seasons in a Best 55+ FAQ answer (no overlap).

## Times and distances (rules/distance-words.json)

- **No rule hit.** The struck check's CRAFT 2 patterns fire on no sentence of the page: "just outside" and "next door" are gone; "a house can go up next door" in the Barefoot entry is allowed by the rule's exception.
- **One measure fails: G8.** The Bluffs "about 200 feet": nearest lot 85 to 87 m (286 feet).
- Measures that hold: Seaside to Main Street about two-thirds of a mile by road (0.669 mile, v9); the ocean a quarter to three-quarters of a mile from the houses (v9); Enterprise Landing about 4 minutes (OSRM 4.4, v8); Bellwood to the Park at Prince Creek West about 4 minutes (row 189: OSRM 4.1 minutes, 1.0 mile); the MarshWalk about 10 minutes (row 81: 9.7); the shuttle 15 minutes ahead (row 14); Prestwick "about a mile outside" Surfside Beach (v10: 0.75 to 1.1 miles from the town boundary; I did not repeat it); Grande Dunes Marina "about 2.5 miles away by water" (v9: 2.5 on the centerline, about 2.7 with offsets: at the edge; "about 2.5 to 3" is safe); Litchfield Plantation's beach house about 4 miles by road (unchanged). The golf-cart route is a route, not a drive time.

## "We" promises

| Page text | Can an agent do it? |
|---|---|
| Short answer: "we ask the club for the current dues" | yes |
| Tidewater: "We check both for any home you like" (the master and the smaller association) | yes (ask for each association's statement) |
| Golf and Yacht Club: "We look up the association for any home you like" (Sandpiper Place shares the entrance with its own association) | yes |
| Grande Dunes: "We confirm it for each home you look at" (Ocean Club membership) | yes |
| Cons: "Our agents check for special assessments before you make an offer" | yes |
| FAQ: "When you tour homes with us, we set up the visit with the gate before we go" | yes |
| FAQ: "We do not rate any neighborhood as safe or unsafe" | yes |
| CTAs: "One of our agents will email you this week's homes for sale there, with the HOA fee and what it covers" | yes |

No promise goes past what an agent can do.

## Gate column cells, each against its row

| Cell | Row or source | Result |
|---|---|---|
| Tidewater: Guard house | row 20: listing directions name the guard house on Little River Neck Road (listings) | match |
| Barefoot: Guard and keypad (Dye Estates) | rows 211, 212: guard 24 hours at the primary gate; keypad and barcode reader at the second | match |
| Grande Dunes: Guard houses | row 405: the master association lists three guard houses; it does not say which serves Calais, Palermo or Villa Venezia | match, at the community level |
| Golf and Yacht Club: Gatehouse | rows 149, 259; mbgyc.com "Gatehouse Phone", opened | match |
| Prestwick: Gatehouse | row 82 (a roofed building with a gate arm at each lane; seen from above) | match |
| Seasons: Call box | rows 92, 93: listing directions send visitors to the call box at the main gate | match (listings) |
| Wachesaw Plantation: Guard | row 21: listing directions say "main guard gate"; wachesaw.com says the club is in a gated community | match (listings; it does not say the gate is staffed) |
| Willbrook: Car barcode | row 356: one barcode for the owner's gated community and Litchfield by the Sea access | match |
| Litchfield Plantation: Gatehouse | rows 26, 165: "Enter at the Gate house" | match |
| Litchfield by the Sea: Guard, around the clock | row 6: main gate staffed 24/7/365 | match |
| Heritage: 24-hour security | row 443; the association's pages 2 and 6, opened: "Gated community with 24-hour security service" | match |
| DeBordieu: Guest passes | owners' packet: guests registered, a pass lasts up to a week | match |
| Seaside, Waterway Palms, The Bluffs, Bellwood, Wachesaw East, The Reserve: blank | no row says; blank is right | match |

## All 81 page items checked

| # | Entry | Page sentence | Row or source | Result |
|---|---|---|---|---|
| 1 | Short answer | Golf clubs here are usually a separate membership with their own dues, and we ask the club for the current dues; some beach clubs come with the home (F1) | rows 620 to 630; row 629 (Litchfield Beach Club), Ocean Club, cabanas | match |
| 2 | Short answer | Typical sale prices in them are about $200,000 to $2.2 million (F32) | table; rows 83, 90, 91 | DRIFT G1 |
| 3 | Short answer | most HOA fees are about $95 to $400 a month | table: 17 of 18 within $95 to $400 (Litchfield by the Sea is the exception) | match |
| 4 | Guide, map, headings | Socastee to Murrells Inlet, 7 to 12 (heading, map pill) (F2) | entries 7 to 12; Prestwick is 12 km from Murrells Inlet | DRIFT G2 |
| 5 | Guide, map, headings | North Myrtle Beach 1 to 3; Myrtle Beach 4 to 6; Pawleys Island 13 to 18; the numbers on the map pills | entries | match |
| 6 | Tidewater | has a golf course ranked among the best you can play in America | Golf Digest course page; row 200 | DRIFT G3 |
| 7 | Tidewater | Golf Digest has ranked Tidewater Golf Club No. 39 among America's 100 Greatest Public Courses | Golf Digest course page; row 200 | DRIFT G3 |
| 8 | Tidewater | Golf Digest and Golf Magazine both named it the best new public course in America in 1990 | row 200 area; club page | match |
| 9 | Tidewater | About seven in ten of the house lots touch the course (F5) | county parcels: 399 of 580 lots with a building (69 percent); Best says seven of ten | match |
| 10 | Tidewater | Golf membership is sold to residents and property owners of Horry, Georgetown and Brunswick counties (F3) | row 624; tidewatergolf.com/membership, opened | match |
| 11 | Tidewater | about 580 houses and one master association, with six smaller associations under it, so a house may answer to two | county: 580 lots with a building; row 545; Best says about 580 | match |
| 12 | Tidewater | We check both for any home you like | a promise an agent can keep | match |
| 13 | Seaside | The city lets a golf cart with a state permit use secondary roads posted at 35 mph or less, from sunrise to sunset (F6) | nmb.us Golf Cart Laws (search result and v9) | match |
| 14 | Barefoot | Many of its houses are large custom homes, on lots of about two-thirds of an acre (F8) | county outlines: 97 lots, median 0.70 acre, middle half 0.62 to 0.78 | match |
| 15 | Barefoot | At Barefoot a golf membership stays with certain houses: the seller gives it up at closing, and the buyer can take it over by enrolling within 60 days (F9) | row 620; barefootgolf.com FAQ, opened | match |
| 16 | Barefoot | Two Dye Estates homes resold this past year, for about $1.4 million and about $2.5 million | row 44 corrected statement: $1,400,000 and $2,525,000 | match |
| 17 | Grande Dunes | In Calais, Palermo and Villa Venezia, most houses are one-story Mediterranean-style homes, and many have a private pool (F10) | rows 34, 593; all 37 detached listings in the three searches: 28 one story, 37 Mediterranean | match |
| 18 | Grande Dunes | This page covers three of its gated sections: Calais, Palermo and Villa Venezia | row 34 | match |
| 19 | Grande Dunes | the HOA fee is about $200 to $400 a month (text and table) | all 39 listings in the three searches: $199 to $411; row 34 read only 2 per section; Best agrees | match |
| 20 | Table, Gate column | Grande Dunes: Guard houses | row 405 (master association lists three guard houses; no map of which serves which section) | match |
| 21 | Waterway Palms | the association owns a lake parcel of about 15 acres (F11) | row 631: 14.98 acres | match |
| 22 | Waterway Palms | Most houses sold here lately are new (F12) | 127 of 188 built since 2020 | DRIFT G4 |
| 23 | Waterway Palms | custom homes, most about 3,000 to 3,800 square feet (F13) | all 188 listings: 92 (49 percent) in 3,000 to 3,800 | DRIFT G5 |
| 24 | Waterway Palms | Many rise two or three stories | 151 of 188 (80 percent) | match |
| 25 | Waterway Palms | some have an elevator (F14) | 25 of 188 (13 percent) | match |
| 26 | Waterway Palms | lots on the Intracoastal Waterway have a private dock | 19 of 22 waterway listings name a dock | DRIFT G6 |
| 27 | Waterway Palms | its own boat ramp on the waterway | row 560, unchanged | match |
| 28 | Waterway Palms | about one in five has no house on the county roll yet (F15) | county layer 24: 159 of 746 lots with no building value (21 percent), reproduced | match |
| 29 | Waterway Palms | so expect new houses going up | row 632: a forecast | DRIFT G7 |
| 30 | The Bluffs | Many of its houses are custom Mediterranean-style homes in stucco | row 595, whole set of 81 | match |
| 31 | The Bluffs | so lots on that edge sit about 200 feet from a highway | county parcels and roads; OpenStreetMap S.C. 31 carriageways | DRIFT G8 |
| 32 | Golf and Yacht Club | off Bay Road in Socastee (F17) | row 149; row 175 struck the direction words | match |
| 33 | Golf and Yacht Club | the association keeps storage for RVs, trailers and boats, for a fee when space is open (F16) | 140 listings read: 20 mention storage, 5 add a fee or availability; the HOA site says nothing about storage | match |
| 34 | Golf and Yacht Club | We look up the association for any home you like | a promise an agent can keep | match |
| 35 | Table, Gate column | Golf and Yacht Club: Gatehouse | rows 149, 259; mbgyc.com Gatehouse Phone, opened | match |
| 36 | Prestwick | about half the lots are on the course (F19) | v10: 215 of 416 lots touch it (52 percent) | match |
| 37 | Prestwick | caption: ... and an RV lot at the lower right | I opened the 1200 px picture: rows of parked RVs at the lower right | match |
| 38 | Table, Gate column | Prestwick: Gatehouse | row 82 (aerial: a roofed building with a gate arm at each lane) | match |
| 39 | Seasons | was built around its clubhouse (and the heading: a clubhouse built for a social calendar) | rows 159, 54; the 2013 release says only that the clubhouse offers rooms and has an activities director | DRIFT G9 |
| 40 | Seasons | The clubhouse was built with a ballroom, a card room, an art studio and a billiards room | row 54: the builder's 2013 release says the clubhouse offers them | DRIFT G10 |
| 41 | Seasons | Today the clubhouse has indoor and outdoor pools, a fitness center, tennis and bocce | row 56: the 2024 release lists them beside the clubhouse, not in it | DRIFT G11 |
| 42 | Seasons | Most are one-story builder homes, about half of them 1,750 to 2,350 square feet, on lots of about a fifth of an acre (F21) | all 42 listings: 39 one story, 22 (52 percent) in 1,750 to 2,350; county: median lot 0.184 acre | match |
| 43 | Seasons | The county roll shows a house on every lot (F20) | county layer 24: 444 of 444 lots with a building value | match |
| 44 | Table, Gate column | Seasons: Call box | rows 92, 93 (listing directions) | match |
| 45 | Bellwood | The lots are big, many of them nearly half an acre, and seventeen are an acre or more | county outlines: median 0.44; 40 of 102 in 0.40 to 0.50, 52 in 0.38 to 0.52; 17 of an acre or more | match |
| 46 | Bellwood | Many houses are custom, often two stories | all 21 listings: custom in 13; two levels or more in 8 of those with a Levels field | match |
| 47 | Bellwood | owners drive about 4 minutes to the Park at Prince Creek West; the park is shared with the other Prince Creek West neighborhoods | rows 189 (OSRM 4.1 min), 103, 160 | match |
| 48 | Wachesaw Plantation | The members own the Wachesaw Plantation Club | rows 320, 625 | match |
| 49 | Wachesaw Plantation | From the best lots you look down a Fazio fairway or out over the Waccamaw River | row 602 (listings) | match |
| 50 | Table, Gate column | Wachesaw Plantation: Guard | row 21 (listing directions: main guard gate); wachesaw.com says gated community | match |
| 51 | Wachesaw East | Clyde Johnston laid out the course on a former rice plantation | row 127 (SC Golf interview with the general manager) | match |
| 52 | Wachesaw East | Houses line the fairways behind the gate, most of them one story and from the early 2000s (F23) | row 603: 30 of 46 one story; 43 of 46 built 2000 to 2006 | match |
| 53 | Wachesaw East | has hosted happy hours with live music | row 564: four in April and May 2025 | match |
| 54 | Wachesaw East | The course and its grill are a business of their own, not the homeowners': Festiva Real Estate Holdings bought them in 2017 (F24) | row 334; Club + Resort Business 2017; county: Wachesaw Golf LLC | match |
| 55 | Willbrook | Golf membership is separate, and the club accepts applications from any golfer (F25) | row 628 | match |
| 56 | Table, Gate column | Willbrook: Car barcode | row 356 | match |
| 57 | Table, Gate column | Litchfield Plantation: Gatehouse | rows 26, 165 | match |
| 58 | Litchfield by the Sea | Many homes are condos and villas from the 1980s to the 2000s, and the Beach Club comes with the home (F26) | rows 607, 629 | match |
| 59 | Litchfield by the Sea | The houses are in Charlestowne Grant, Compass Point and River Club (F27) | association community pages (Oystercatcher, Charlestowne Grant, Compass Point, River Club); row 607 | DRIFT G12 |
| 60 | Litchfield by the Sea | Charlestowne Grant's are raised beach houses | all 8 listings are raised beach houses; 45 homes in the community | DRIFT G13 |
| 61 | Litchfield by the Sea | Condo and villa fees are about $620 a month, up to about $1,880 ..., and Charlestowne Grant's houses pay about $520 to $630; table cell About $520 to $1,880 (F28) | row 611; Charlestowne Grant listings: 517, 517, 525, 625, 630, 632, 632, 817 | DRIFT G14 |
| 62 | Litchfield by the Sea | villas in Breakers Reef for about $1.5 million to $2.2 million (F29) | row 90: four sales, $1,490,000 to $2,178,000 | DRIFT G15 |
| 63 | Table, Gate column | Litchfield by the Sea: Guard, around the clock | row 6 | match |
| 64 | Heritage | Gate column and sentence: 24-hour security (the fee includes 24-hour security) | rows 442, 443; heritageplantation.sites.townsq.io pages 2 and 6: Gated community with 24-hour security service | match |
| 65 | Heritage | Some lots look over the old rice fields toward the river (F30) | 83 listings: 2 mention rice fields; Golf Digest: the course runs beside rice fields | DRIFT G16 |
| 66 | DeBordieu | Only DeBordieu owners can join the DeBordieu Club | rows 630, 482 | match |
| 67 | DeBordieu | Many houses are raised beach houses with an elevator, and some stand right on the ocean | row 609 | match |
| 68 | DeBordieu | caption: large houses behind the dunes, with walkways over the dunes to the beach, and the salt marsh beyond (F31) | v10 read the picture | match |
| 69 | Table, Gate column | DeBordieu: Guest passes | owners' packet; row 405 area | match |
| 70 | Table, Gate column | the Gate column header and key; blank where no row says (Seaside, Waterway Palms, The Bluffs, Bellwood, Wachesaw East, The Reserve) | the rule of 14h | match |
| 71 | Pros | Some HOA fees cover more than the gate, such as security, cable or internet | rows 102, 442 | match |
| 72 | Pros | Several gates have staff: a guard day and night at some, a gatehouse or a watch desk at others | rows 6, 211, 82, 259 | DRIFT G17 |
| 73 | Pros | Most of these neighborhoods are built around something you use | 13 of 18 (v10) | match |
| 74 | Cons | Every guest, contractor and delivery has to get through the gate | rows 5, 18, 280 | match |
| 75 | Cons | Only two of the 18 are on the ocean, so from most of them a beach day starts in the car | row 171; the page's own beach and distance lines | match |
| 76 | Cons | Owners pay for big projects through their association ... the HOA maintains the private streets, and DeBordieu's owners pay assessments to rebuild their beach; Our agents check for special assessments | rows 1, 393; promise | match |
| 77 | FAQ | We do not rate any neighborhood as safe or unsafe; the price table shows which gates have a guard, a gatehouse, a keypad or a call box | the table's Gate column | match |
| 78 | FAQ | How do guests get through the gate: by a guard, a call box or a code; when you tour homes with us, we set up the visit with the gate before we go | rows 5, 14, 212; a promise an agent can keep | match |
| 79 | FAQ | Prestwick, about a mile outside it, is the gated neighborhood on this page nearest Surfside Beach (F34) | v10 measure: 0.75 to 1.1 miles from the town boundary | match |
| 80 | FAQ | Most of the places on this page are golf communities | 10 of 18 | match |
| 81 | Top | Two of these gated communities sit on the ocean, and ten have golf | row 171 | match |

Count: 81 items, 63 match, 18 drift items in 17 drifts. Items 6 and 7 are one drift (G3).

## Rows

- **570** `verified with corrected wording (v11)`: the Gate column holds cell by cell; Bellwood holds; Seasons' homes line holds; the Seasons clubhouse lines (G9 to G11) and the staff bullet (G17) are tighten; the Dye Estates, Grande Dunes, Waterway Palms and DeBordieu homes lines are checked under 572.
- **571** `wrong in part (v11)`: Heritage "24-hour security" holds; the Bluffs "200 feet" is wrong (G8); Tidewater's ranking without the list years is wrong (G3, row 200); membership wording, Seasons "was built with" (G10), Bellwood "many of them nearly half an acre", Wachesaw East happy hours and Grande Dunes "three of its gated sections" hold.
- **572** `wrong in part (v11)`: 25 of the 34 v10 corrections hold; G1, G2, G4, G5, G7, G12 to G16 are the rest.
- **200** `wrong (v11)`: Golf Digest's No. 39 is a state rank (2023-24).
- **615** added: this check.

## Commands and sources

- Spec: `git diff e6f01f9 HEAD -- batches/2026-10-b/specs/gated-communities.js`; the preview text matched to the spec by sentence.
- Listings: mbcoastalhomes.realgeeks.com neighborhood searches (sold and active) and `/property/<MLS#>/` pages, robots.txt allows them, one request at a time: Waterway Palms 188; Seasons at Prince Creek West 42; Charlestowne Grant 8; Heritage Plantation 84 (detail pages read for "rice field"); Myrtle Beach Golf and Yacht Club 140 (detail pages read for storage); Prince Creek - Bellwood Landing 21; Grande Dunes - Calais, Palermo and Villa Venezia 39. No Zillow page was opened.
- Horry County parcel service layers 24 (parcels, outlines in UTM 17N) and 18 (roads): Bellwood Landing, The Dye Estates, Seasons, Waterway Palms, Tidewater (with the KSM South Carolina golf tracts), The Bluffs; OpenStreetMap API (S.C. 31 carriageways in the Bluffs frame).
- Pages opened: barefootgolf.com membership FAQ, tidewatergolf.com accolades and membership, heritageplantation.sites.townsq.io pages 2, 6 and 7, mbgyc.com, wachesaw.com, PRWeb (2013 Seasons release), the Litchfield by the Sea `community` posts (wp-json), tidewatergolf.com's 2022 Golf Digest release. Golf Digest's own Tidewater course page and the 2025-26 list answer 403 to curl and WebFetch; I read the Golf Digest page through the web search tool twice (two separate queries) and both gave the same Best in State and 100 Greatest Public lines. The 2025-26 national list's own entries were not read. Treat G3 as: the club's figure is not Golf Digest's national rank; if the owner wants the national rank, someone with Golf Digest access should open the 2025-26 list.
- The prestwick picture: opened the 1200 px webp.
- Struck: 19 entries added to gated-communities-struck.json, tagged (v11); one v10 entry's approved wording (gated 607, houses in Breakers Reef) amended, because it recommended the "usually" line that rows 90 and 199 had struck. `node tools/struck-check.test.js`: all controls pass.
