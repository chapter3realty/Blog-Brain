# Gated communities, rewrite check v9 (round 14e, 2026-10-15)

Independent verifier. I did no research on this page and saw none of its drafts. Tasks: rows 540 to 551 and 560 to 567 (new in round 14e), row 535 (the writer's wording row), and lesson B45: read every sentence of the page that changed or is new since commit 88e1cf5 (the state v8 checked) against its row and the row's earlier verdict.

Page checked: `batches/2026-10-b/specs/gated-communities.js` at md5 `6c247ad2c66fb2fb7cd10c27274f1b9c` (commit 9f94f79, 2026-10-15 03:00 UTC), as built in `scratchpad/preview/b/gated-communities.html` (built 03:02 UTC). I did not edit the spec.

**The spec moved while I worked.** Commits dce60ec (03:24) and 987c882 (03:26) and the working tree (round 14f: area headings, "Near Pawleys Island" lead-ins, a rewritten pros and cons, shorter FAQ answers, new Willbrook and DeBordieu photos) changed many sentences. I did not read those. I ran my 19 patterns against the current source (md5 `8079a95a06daf5eaeeb098411c12965d`, HEAD 448044d): 15 still match (E1, E3, E4, E5, E7, E8, E9, E10, E11, E12, E13, E14, E16, E17, E18); 4 are gone (E2, E6, E15, E19). The 14f sentences need their own check (v10).

## Result

- **68 items checked. 49 match. 19 drift.** The full list is at the end of this file.
- Rows 540 to 551 and 560 to 567 (20 rows): all reproduce. 16 are `verified`; 4 are `verified with corrected wording` (540, 542, 545 and 563); none is `wrong`. Row 535 (the writer's wording row) is `wrong in part (v9)`: v8 drifts D1 to D15, D17 and D18 are applied; D6 and D16 only in part, and 19 drifts are on the page.
- Row 334 (Festiva, still "pending verification (round 14)") carries a page sentence, so I verified it here: `verified with corrected wording`.
- 19 struck entries added to `gated-communities-struck.json`, each tagged "(v9)". `node tools/struck-check.test.js`: all controls pass.
- `struck-check --batch ... --strict` (preview built 03:02 from md5 6c247ad2): **before my entries, gated-communities (341 patterns): no struck wording. After: gated-communities (360 patterns): 20 struck phrases found** (19 entries, one fires twice: the Litchfield by the Sea sentence and its con). The other four pages are not mine: affordable 6, best 17, the-farm 9, no-hoa none; exit 1.
- Must fix (a wrong claim, or one that goes past its source or its row's correction): E1, E2, E4, E5, E6, E9, E14, E15, E17, E18, E19. Tighten: E3, E7, E8, E10, E11, E12, E13, E16.
- Not a drift: the three Seaside distance words, the city rule's hours, SC law (all current; see below). Nothing on the page says "no flood zone"; the flood sections are gone with Covington Lake East and Myrtle Trace.

## The 19 drifts, in page order

| # | Page sentence | Problem | Supported wording |
|---|---|---|---|
| E1 | Short answer: "These 18 gated neighborhoods run from North Myrtle Beach down to Pawleys Island" (the title, the description and the share title say "to Pawleys Island" too) | The southern end is DeBordieu Colony, near Georgetown (rows 63, 70: Georgetown address, 20 minutes to Pawleys Island's beach access). The page's own FAQ says "DeBordieu Colony south of Pawleys Island". | "...run from North Myrtle Beach down to DeBordieu Colony, south of Pawleys Island". |
| E2 | Guide: "Under half a mile from Main Street: 2. Seaside Plantation" | Row 174: 0.45 mile is a straight line from the map dot, and its struck entry covers "Main Street's nearest block is 0.45 mile" unless "straight line". The label has no such limit and now contradicts the entry's "about two-thirds of a mile by road". | "Main Street by golf cart" (the 14f label), or "about two-thirds of a mile from Main Street by road, from the Sea Island Way end". |
| E3 | Tidewater: "a house may answer to two associations, each with its own rules" | Row 545 and the HOA's page say 664 homes with 6 sub-associations. Nothing says what they decide or that their rules differ (the same family as v8 D11: "each has its own fee and rules"). | "...so a house may answer to two associations." |
| E4 | Seaside: "From Seaside Plantation, Main Street ... is about two-thirds of a mile by road" | Row 542 measures from where Sea Island Way meets 8th Avenue North, the south-east corner of the neighborhood (no entrance or gate is shown there; OpenStreetMap has no gate node). I routed 5 houses across the neighborhood to Main Street at Hillside Drive: 0.49, 0.84, 1.04, 1.21 and 1.16 miles. The page says it of the neighborhood. | "From the Sea Island Way end of Seaside Plantation, Main Street is about two-thirds of a mile by road; from the far end it is about 1.2 miles." |
| E5 | Seaside: "The city lets a golf cart with a state permit use streets posted at 35 mph or less, from sunrise to sunset" | The city's rule is "secondary roadways only", with a posted limit of 35 or less. Ocean Boulevard is posted 25 (OpenStreetMap) and the city allows a cart to cross it, not to drive along it. "Streets posted at 35 or less" is wider than the rule. | "...use secondary roads posted at 35 mph or less, from sunrise to sunset." |
| E6 | Seaside: "The owners association owns three lakes, about 13 acres in all" | Row 205's note: the county shows three lake parcels of 4.08, 4.80 and 4.14 acres, parcel acres, with banks. I drew them over the NAIP frame: one is mostly woods with a small pond (upper left), one is the long lake that runs on past the neighborhood to the south, one is the V-shaped lake at the right. They are not three lakes of 13 acres. | "The owners association owns three lake parcels of about 13 acres in all." |
| E7 | Seaside: "Festival weeks bring crowds and traffic to Main Street" | Row 115: a local paper expected at least 10,000 people for the Fall Migration. Nothing says traffic. | "Festival weeks bring crowds to Main Street." |
| E8 | Grande Dunes: "a security company on contract, with guard houses and an officer on patrol" | Row 405's note: the sheet says "Rover:", a phone line; safe wording "a rover line". v8 D6 struck "a roving officer"; "an officer on patrol" says the same. The next sentence still names Calais, Palermo and Villa Venezia, and the sheet does not say which house serves them. | "...with a main guard house, a north guard house and an Ocean Club guard house; which one serves a section is not shown." |
| E9 | Waterway Palms: "Waterway Palms Plantation copies the look of Charleston's Battery district" | Row 155's verifier: the only source is a management company page dated 2014, in the future tense ("patterned after Charleston's remarkable and historic Battery district", "a proposed community boat launch"). Safe wording: "Its plan was patterned after Charleston's Battery district". The earlier page text said "The plan copies the look"; the rewrite dropped "The plan" and states the result. | "Waterway Palms Plantation's plan was patterned after Charleston's Battery district." |
| E10 | The Bluffs: "Its boat ramp sits on a waterfront lot of more than 6 acres, with day docks and boat storage" | Row 563: a 6.33-acre HOA lot holds the ramp. Day docks and boat storage are listing words (row 98); no source puts them on that lot. The row also says the boathouse was not checked against the lot. | "Its boat ramp sits on a waterfront lot of more than 6 acres. Boat owners also have day docks and boat storage." |
| E11 | The Bluffs: "One side of the neighborhood is on a main highway" | Row 253's wording was "S.C. 31 runs along one side"; the rewrite drops the road and says "on". I measured: S.C. 31 (a limited-access road) is 59 m from the nearest Bluffs parcel; River Oaks Drive, which borders the neighborhood, is 17 to 35 m. "On a highway" reads as frontage or access. | "S.C. 31 runs along one side of the neighborhood." |
| E12 | Golf and Yacht Club: "All of that comes with an HOA fee of about $95 a month" | "All of that" is the watch desk and the gatehouse phone. Neither the HOA's page nor a row says what the fee includes (row 149's listing says "security"; rows 17 and 149 warn against using a listing's include list). The old text said "for an HOA fee of about $95". | "The HOA fee is about $95 a month." |
| E13 | Golf and Yacht Club: "The owners' association owns the wide strips of grass and woods between the streets" | Rows 151 and 530: the association owns 62.54 acres in six tracts; five of them (about 59.5 acres) lie on the strips; row 151's verifier struck "in six tracts". The page now says the association owns the strips, with no figure and no limit; other open land may not be the association's. | "The owners' association owns about 62 acres of open land, most of it wide strips of grass and woods between the streets." |
| E14 | Wachesaw East: "The course and its grill belong to Festiva's vacation-ownership resort, Ellington at Wachesaw Plantation East, not to the owners" | Row 334 rested on a 2017 trade piece. I opened it and the 2017 press release: "Festiva Real Estate Holdings has acquired Wachesaw Plantation East golf course", "includes the on-site East Grill and Pub", "Ellington at Wachesaw Plantation East Resort & Golf Course". The release calls Festiva "a commercial real estate asset management group based in Asheville, N.C."; neither piece says vacation ownership or timeshare (that word is on Vacatia and TUG only: secondary). Both pieces are nine years old and name the grill "East Grill and Pub"; the club's site now calls it the Toasted Tee Pub & Grub at 911 Riverwood Drive, so the link is the address. The county shows the course land in the name of Wachesaw Golf LLC (Georgetown County parcels), mailing address 1 Vance Gap Rd, Asheville; I found no source that says that LLC is Festiva's. | "Festiva Real Estate Holdings bought the course and its grill in 2017, and the course is part of the Ellington at Wachesaw Plantation East resort [Club + Resort Business, 2017]." Do not say vacation ownership or timeshare; do not say "belong" in the present tense without a 2026 source. |
| E15 | Willbrook aerial caption: "its houses are in the middle and at the right ... The houses at the lower left are in Litchfield Plantation" | v8 D16 asked for this fix; it is half done. I classified all 194 parcels in the frame (Georgetown layers 2 and 7). The whole bottom third is Litchfield Plantation (34 of 36 parcels in the lower middle), and the lower right is Tucker's Woods townhouses (Litchfield Plantation) and other neighborhoods. Willbrook is the middle, the middle right and the upper right. | "...its houses are in the middle and at the upper right, beside golf fairways. The houses at the lower left are in Litchfield Plantation." (The 14f working tree already says this; the photo record's "what" and "alt" still say "open fields at the left".) |
| E16 | DeBordieu heading: "a planters' colony with its own beach and club" | v8 noted that the page's "their own beach" was safer as "their beach"; the heading brings back "own beach" (row 393: the owners pay to rebuild it; the beach below the high-tide line is public, v5). Row 81 (a seller's site, corrected): a private beach club. | "a planters' colony with a Dye course and a private beach club". |
| E17 | Litchfield by the Sea con: "each neighborhood inside the gates has its own sub-association, with its own fee and rules"; the entry: "so the HOA fee and the rules change from one to the next" | Row 92's verifier: fees differ by section and by unit, ranges overlap, "each section has its own single fee is not true"; its struck entry covers "each with its own HOA fee". No row says the rules differ. | "...each neighborhood inside the gates has its own sub-association, and the HOA fee differs from section to section and from unit to unit." |
| E18 | FAQ: "A gate keeps cars that are only passing through off the streets" | One source: row 13, Myrtle Trace's back gates (its verifier: say only what that gate does). Myrtle Trace is no longer on the page, so no remaining row supports the sentence as a rule for gates. | Cut it, or "A guard, a code or the owner lets each visitor in." |
| E19 | FAQ: "In Dye Estates, for example, a guest at the second gate can pick the owner's name on the keypad, and the owner opens the gate by phone" | Row 212's correction: this works only if the owner filed the Gate Access Code form; otherwise the keypad calls the guard house. The Barefoot entry keeps the condition; the FAQ drops it. A corrected sentence, reworded and put back (B45). | "...if the owner has filed the gate code form, a guest at the second gate can pick the owner's name on the keypad, and the owner opens the gate by phone." |

## v8 drifts: were they applied?

D1 (Joey's lunch), D2 (visitors check in), D3 (marsh), D4 (inside the gate), D5 ("We get the rules"), D7 (work trucks), D8 to D10 (Covington, Myrtle Trace cut), D11 (own fee), D12 (indoor pool), D13, D14 (visitors stop at security, check in with a guard), D15 (full-service marina), D17 (guardhouse), D18 (private clubs con, cut): **applied, and the new wording holds** (rows 20, 205, 522, 102, 179, 21, 22, 346, 347, 442 and 443 re-read). **D6 only in part** (E8). **D16 only in part** (E15). Seven of the 19 new drifts are rewrites of a v8 sentence or of a corrected row (E3, E8, E9, E17, E19 and E6, E13): the B45 pattern again.

## Rows 540 to 567

| Row | Verdict | What I opened and found |
|---|---|---|
| 540 | verified with corrected wording | nmb.us/600/Golf-Cart-Laws (no update date): "Allowed on secondary roadways only"; "May cross primary roads (Ocean Boulevard, 27th S, Highway 17 or Sea Mountain Highway)"; "posted speed limit of 35 miles per hour or less between the hours of sunrise and sunset"; "must display SC permit sticker"; a licensed driver. The June 24, 2025 release (AID=1293) says the same (children under 12 belted; $100 fine or up to 30 days). WMBF, 2026-05-20: a resident asked the council to extend the hours; no vote found, so sunrise to sunset stands today. The row holds. The page drops "secondary roads only" (E5). Posted limits of 8th Avenue North and Hillside Drive North are in no source; the page does not claim them. |
| 541 | verified | scstatehouse.gov Title 56 Chapter 2: Section 56-2-105 "Repealed ... by 2025 Act No. 64, SECTION 2, eff May 22, 2025". Section 56-2-90 (2025 Act No. 64, H.3292, eff May 22, 2025): permit decal and registration from the DMV, proof of liability insurance, five-dollar fee, replaced every five years or at a change of address; driver 16 or older with a license; (C) a city may set hours, methods and places by ordinance, only on roads of 35 mph or less; (D) with no ordinance: daylight, secondary highways of 35 or less, within 4 miles of the address or of a gated community's entrance; (E) passengers under 12 belted. North Myrtle Beach has an ordinance, so (C) governs and the 4 miles do not decide the trip. Current. The page cites neither. |
| 542 | verified with corrected wording | OSRM (router.project-osrm.org, no traffic) from node 2732793401 (33.8245656, -78.6642617) to node 113149843 (Hillside Drive North at Main Street, 33.8206563, -78.6733432): 1,077 m = 0.669 mile; 8th Avenue North 120 m, then Hillside Drive North 957 m. OpenStreetMap (a map of the area): Hillside Drive North is state road S-26-199 and meets Main Street about 0.15 mile up from Ocean Boulevard; the route crosses no US 17, SC 65 or Robert Edge Parkway (they lie north-west and south-east of it). The point is the south-east corner of the neighborhood (parcels run to 33.8306 north). Corrected: it is "from the Sea Island Way end", not "from Seaside Plantation" (E4). No entrance or gate is shown there. |
| 543 | verified | mbgyc.com, "Maint. & Security Info": "Maintenance Coverage Monday through Friday: 7:00 am to 3:30 pm Office Phone ... Community Watch Desk Coverage is 24 Hours. Seven days a week Gatehouse Phone". Context row. |
| 544 | verified | Horry layer 24, OwnerName LIKE '%GOLF & YACHT%': 22 parcels, none named storage (four of them are condo-unit LLC parcels with the club's name; PARCEL A, B, D-3 and E carry no use). A negative finding; the page does not say where the storage is. |
| 545 | verified with corrected wording | The page is a JavaScript app; its data comes from portal.connectresident.com/api/residentapi/properties/13174/cwsprofile. Text: "Tidewater Plantation is a master association, comprised of 664 single family homes, with 6 sub-associations, 4 pools, 1 fitness and amenity center, 4 tennis courts, and 1 Cabana located right on the Beach for owner access!" "May answer to two associations" is the row's own trade-off wording; the source does not say which houses are in a sub-association or what a sub-association decides. TagMaster (row 400) says about 1,100 homes at Tidewater, so "664 houses" is the master association's single-family count, not all of Tidewater. Page: "each with its own rules" is not in the source (E3). |
| 546 | verified | Same data: "As a part of the city of North Myrtle Beach, we access the much desired real estate assets of public water, sewer, trash collection and public safety (police, fire, and rescue)." The source says "public", the row and page say "city" water. The city's own site bills utilities and runs a 30-inch water line project, so "city water" is reasonable; I left it. |
| 547 | verified | Same data: "This gated community with its focal point being a world class golf course"; documents and forms are behind a login. A negative finding. |
| 548 | verified | Same data: welcome line "4 tennis courts", profile "Tennis &Pickleball Courts" 3. The page gives no count. |
| 549 | verified | Horry layer 24 (107 Bellwood parcels) against OpenStreetMap way 45300601 (Collins Creek, source NHD): 13 lots within 20 m of the line (PH I 22 to 28, PH II 73 to 75 and 92 to 95), 14 within 30 m; lots 26, 27 and 74 at 0 m. I drew the parcels and the creek over the 2023 NAIP frame: these are long narrow lots that run east from the street to the creek, and the creek runs inside a band of trees; the TPC course (parcel "KAMINSKI TR-TPC GCOURSE; W OF HWY 707", 215.45 acres, Founders Golf Mgmt LLC) lies east of the trees, about 100 m beyond the creek. The creek line is NHD's, so 0 m means "at the line". "About a dozen" holds. |
| 550 | verified | AcclaimWeb 4786/2971: Record Date 3/15/2024, instrument 2024000027482, 4 pages, "082 - RESTRICTIONS", grantor Bellwood Landing Owners Association Inc, memo GATE POLICY. Context row. |
| 551 | verified | Horry layer 24: "PRINCE CREEK; PARCEL C-2" 13.81 acres, owner Collins Creek Landing Owners Association; Creek Harbour and Vereen's Landing lots; the Kaminski TPC parcel. Context row; a box test, as the row says. |
| 560 | verified | County point query at the slipway (-78.88258, 33.7353): "WATERWAY PALMS PLANTATION HOA INC", 2.3 acres, "W/W PALMS PLANTATION; BOAT LANDING PAR A&B". OSM way 905183670 slipway. NAIP shows a ramp, a parking lot and a pier at the waterway. Along the Atlantic Intracoastal Waterway centerline (OSM ways 45434433, 45434484, 1218791777, 45434607, joined; I measured myself): Waterway Palms ramp 12.44 miles, The Bluffs ramp 14.14; the Waterway Palms ramp is 1.70 miles from The Bluffs ramp, and a boat from it passes The Bluffs on its way up the waterway. |
| 561 | verified | Same line: Grande Dunes Marina (node 4409794190) 16.64, Barefoot Marina (way 120486690) 21.49: 4.2 and 9.05 miles from the Waterway Palms ramp. Each point is 84 to 132 m off the centerline; "about 4" and "about 9" hold. Context for the page's "4" and "9". |
| 562 | verified | Little River Inlet (node 368394842): 21.8 miles from the Waterway Palms ramp and 20.1 from The Bluffs ramp, measured to the nearest point of the waterway at Little River. Not on the page; no running time to be given. |
| 563 | verified with corrected wording | Point query at the ramp (-78.85664, 33.74711): "THE BLUFFS ON THE WATERWAY HOA INC C/O ..." 6.33 acres; OSM way 905220805 "Private Boat Ramp". The Bluffs ramp to Grande Dunes Marina 2.50 miles, to Barefoot Marina 7.35. NAIP shows a ramp, parking, a pier and a building with an orange roof beside the ramp, and a large cleared lot on the same parcel. The row does not put day docks or boat storage on the parcel (E10); the owner field names a person after "C/O", which stays off the page. |
| 564 | verified | wachesaweast.com/events/ and /events/list/?eventDisplay=past (2026-10-15): "There are no upcoming events"; four events from April 11 to May 23, 2025, each a happy hour at "the Toasted Tee Pub & Grub" with "live music by 2JAMDUO" (or "Sweet Tea"), "$5 Small Plates" and drink specials. The Dining page: "Welcome to The Toasted Tee Pub & Grub! Located at Wachesaw East ... 911 Riverwood Drive". |
| 565 | verified | wachesaweast.com/pool/ and /amenities/ return 404; the site menu has no pool or amenity page. "The HOA has no public site" is not shown by me and is not on the page. |
| 566 | verified | seasons55.com/info.php?pnum=1603010f25bf5e: "Please note, the Seasons HOA does not offer any information regarding sales, for that kind of inquiry you should contact one of the many Murrells Inlet area realtors." The home page's sections say "Please login to view this area." |
| 567 | verified | thereservegolf.com/about: "Established in 1998, The Reserve Golf Club is located inside a gated community". TownSq: "This gated community offers a challenging, private 18-hole McConnell Golf Course, a Safe Harbor Marina ... and 26 ponds." The page does not use this row. |
| 334 | verified with corrected wording | See E14. The Festiva sentence needs the correction before it is published. |

## The Seaside route, the golf-cart rule and state law

- **Route.** OSRM 0.669 mile from the Sea Island Way and 8th Avenue North junction to Main Street at Hillside Drive North. I checked it on the OpenStreetMap network and the street geometry (I did not open a rendered map): two streets, no US 17 and no Ocean Boulevard crossing; the Main Street end is the ocean end, about 0.15 mile above Ocean Boulevard (SC 65), which is the "Main Street and Ocean Drive" the festivals use. "On two side streets" holds (8th Avenue North is residential; Hillside Drive North is a state secondary road, S-26-199). "No main highway to cross" holds. From the middle and far parts of Seaside the same route is about 1.0 and 1.2 miles (E4).
- **City rule.** Current on nmb.us and in the June 2025 release (row 540). "Posted limit 35 or less" and "secondary roads" are both conditions (E5).
- **State law.** 56-2-105 is repealed (2025 Act No. 64, effective May 22, 2025). 56-2-90 is current and does not set the city's hours; a city ordinance does, and the ordinance is in force (row 541).

## Image labels

| Image | Check | Verdict |
|---|---|---|
| Tidewater (`tidewater-plantation-marsh-from-above-2023`) | Frame bbox -78.632153, 33.83781 to -78.614847, 33.84859 (matches the source request). "Tidewater Plantation" label point is on parcel "TIDEWATER PLNTN PH IIIA; LOT 524". "Golf holes along the inlet" label is on "E/S GOLF COURSE; D, K THRU P" (KSM South Carolina LLC, 61.71 acres), as are the two other fairway points I tried. Of the parcels in the band above the fairways (x 300 to 1000, y 150 to 290 px) all 79 are "TIDEWATER PLNTN PH III". The left edge is Creekside and Charleston Landing, which the caption does not claim. | holds: "Houses line the street above the fairways" |
| Prestwick (`prestwick-course-from-above-2023`) | "Dye golf course" label is on "PRESTWICK GOLF COURSE; PARCEL 3" (Prestwick Limited Partnership, 11.59 acres). "Prestwick" label is on a street between houses (no parcel), as in v8. The long lake is on "P'WICK GC LAKEWOOD SCH; TR R1,R2 & PARCEL A" (190.33 acres, the same owner). | holds |
| Willbrook (`willbrook-plantation-from-above-2023`) | See E15. 81 of 194 parcels are Willbrook; the bottom third and the lower-right townhouses are Litchfield Plantation. The ditch label is in rice fields at the upper left. | caption half-fixed (E15) |

## "We" promises

| Page text | Can an agent do it? |
|---|---|
| Short answer: "we ask the club for the current dues" | yes |
| Seaside: "We ask the association for its current gate rules for any home you like" | yes (an ask, no promised result; v8 D5 applied) |
| Grande Dunes: "We confirm it for each home you look at" (Ocean Club membership comes with the home) | yes (the seller or the master association can say) |
| Cons: "We check for special assessments before you make an offer" | yes (ask the HOA for its statement and minutes); it no longer promises an outcome |
| FAQ: "We do not rate any neighborhood as safe or unsafe" | yes |
| CTAs: "One of our agents will email you this week's homes for sale there, with the HOA fee and what it covers" | yes (unchanged) |

## Times and distances (rules/distance-words.json)

No hit but "next door" in "a house can go up next door", which the rule's exception allows. Measures: Seaside 0.67 mile by road (E4); Waterway Palms ramp to Grande Dunes Marina 4.2 and to Barefoot Marina 9.05 miles by water along the centerline ("about 4", "about 9": hold; the ramp and marina points sit 84 to 132 m off the line, so add about 0.1 to 0.2 mile); The Bluffs ramp to Grande Dunes Marina 2.50 (about 2.7 with the offsets; "about 2.5" is at the edge, "about 2.5 to 3" is safe); the golf-cart route is a route, not a drive time; Enterprise Landing about 4 minutes (OSRM 4.4, v8); the MarshWalk 10 minutes, Surfside 7 minutes and "a quarter to three-quarters of a mile" to the ocean are unchanged. "Under half a mile from Main Street" in the guide is the one distance word with no measure that supports it (E2). Bridges and no-wake zones on the waterway were not checked; the page does not give a running time.

## Sibling check (SIBLING-OWNERS.md)

Read against the built Best, Affordable, No HOA and The Farm specs.
- **Tidewater, Best and Gated.** The owner table gives Gated the course and the inlet holes and Best the marsh side and the grille. Joey's, "the marsh" and the lunch are gone from Gated (v8 D1, D3 applied). Both pages still say Tidewater is not on the ocean: Best "on the marsh behind Cherry Grove Inlet, not on the ocean", Gated "on the Intracoastal Waterway, not the ocean, but ... its own beach cabana". The words differ and Gated leads to the cabana, so it is not a repeat, but only one page needs it. Price $625,000 and fee $230 agree.
- **Golf and Yacht Club, Affordable and Gated.** Affordable: "Its own course and yacht club are gone, but both are still near" and Osprey Marina 11 minutes; Gated: "no golf or yacht club anymore; Heron Point ... closed" and Enterprise Landing 4 minutes. The table gives Heron Point and Enterprise Landing to Gated and at most one line to Affordable; the "course and yacht club are gone" line is the same fact in other words. Price $225,000 agrees. Affordable has no watch-desk or gate line.
- **Prince Creek.** Best says "Prince Creek's sections border TPC Myrtle Beach"; Gated Bellwood says the creek and a band of woods lie between its lots and TPC, and Seasons (row 300) is 560 m away. Not a conflict about Bellwood; Best's sentence is about "Prince Creek's sections" in general.
- **Seasons, Best.** Best lists it only in a 55+ FAQ answer. No overlap.
- **Barefoot, Grande Dunes, The Farm, No HOA:** no overlap with the changed entries.

## Struck-check

`node tools/struck-check.js --batch batches/2026-10-b --preview <scratchpad>/preview/b --strict`, preview built 03:02 UTC from md5 6c247ad2: before my entries, `gated-communities (341 patterns): no struck wording`. After: `gated-communities (360 patterns): 20 struck phrases found` (19 entries; E17 fires in the entry and in the con). The first run also printed the other pages: affordable 6, best 17, the-farm 9, no-hoa none; that is not my page. `node tools/struck-check.test.js`: all controls pass. A rebuild of the 14f spec should fire E1, E3, E4, E5, E7, E8, E9, E10, E11, E12, E13, E14, E16, E17 and E18 again.

## All 68 items checked

| # | Entry | Page sentence | Row or source | Result |
|---|---|---|---|---|
| 1 | Top | Title, description and share title count 18 | 18 entries | match |
| 2 | Short answer | run from North Myrtle Beach down to Pawleys Island | rows 63, 70 | DRIFT E1 |
| 3 | Short answer | most of them on a golf course or on the water | row 171 (10 golf) and the entries: 14 of 18 | match |
| 4 | Short answer | about $200,000 to $2.2 million; most fees about $95 to $400 | rows 90, 198, 199; table | match |
| 5 | Short answer | a golf or beach club is usually a separate membership; we ask for the dues | rows 106, 223, 480, 482 | match |
| 6 | Top | Two sit on the ocean, ten have golf | row 171 (unchanged) | match |
| 7 | Guide | Under half a mile from Main Street: 2. Seaside Plantation | row 174 | DRIFT E2 |
| 8 | Guide | Groups after the two cuts; "A fee under $100 a month: 7" | table (Golf and Yacht $95 is the only one) | match |
| 9 | Guide | On a map: where the four areas are | four areas on the map | match |
| 10 | Tidewater | Its guard house is on Little River Neck Road | row 20 (listing directions; plain claim, no attribution in the body) | match |
| 11 | Tidewater | inside North Myrtle Beach, city water, sewer, trash, city police and fire | row 546 | match |
| 12 | Tidewater | on the Intracoastal Waterway, not the ocean; its own beach cabana, with parking, at Cherry Grove Beach | rows 169, 93, 545 | match |
| 13 | Tidewater | one master association of 664 houses with six smaller associations | row 545 | match |
| 14 | Tidewater | so a house may answer to two associations, each with its own rules | row 545 | DRIFT E3 |
| 15 | Tidewater | aerial: golf holes along the inlet; houses line the street above the fairways | parcels (see Image labels) | match |
| 16 | Seaside | From Seaside Plantation, Main Street is about two-thirds of a mile by road | rows 542, 174 | DRIFT E4 |
| 17 | Seaside | on two side streets, with no main highway to cross | OSM, OSRM | match |
| 18 | Seaside | The city lets a golf cart with a state permit use streets posted at 35 mph or less, from sunrise to sunset | rows 540, 541 | DRIFT E5 |
| 19 | Seaside | owns three lakes, about 13 acres in all, and some houses look onto them | rows 205, 153 | DRIFT E6 |
| 20 | Seaside | We ask the association for its current gate rules | rows 15, 522 | match |
| 21 | Seaside | Society of Stranders festivals; the ocean is a quarter to three-quarters of a mile | rows 115, 153 (unchanged) | match |
| 22 | Seaside | Festival weeks bring crowds and traffic to Main Street | row 115 | DRIFT E7 |
| 23 | Seaside | Heading: Main Street by golf cart | rows 540 to 542 | match |
| 24 | Barefoot | Leatherleaf: 62 houses with the Love Course on every side | earlier rows (the pond dropped) | match |
| 25 | Barefoot | In Dye Estates no one may swim, boat or fish in the ponds | Dye rules (the dock clause dropped) | match |
| 26 | Grande Dunes | golf simulators; a two-mile trail along the waterway, open to the public | earlier rows (details dropped) | match |
| 27 | Grande Dunes | a security company on contract, with guard houses and an officer on patrol | row 405 | DRIFT E8 |
| 28 | Waterway Palms | copies the look of Charleston's Battery district | row 155 | DRIFT E9 |
| 29 | Waterway Palms | Its boat ramp sits on its own lot on the Intracoastal Waterway | row 560, NAIP | match |
| 30 | Waterway Palms | Grande Dunes Marina about 4 miles up the waterway, Barefoot Marina about 9 | rows 561 | match |
| 31 | Waterway Palms | A day on the water starts at home, not at a public ramp across town | row 560 (the ramp is at the neighborhood's south edge, 54 m from lot 113) | match |
| 32 | The Bluffs | two clubhouses, one a boathouse on the Intracoastal Waterway | row 98 (4 listings; one says "boathouse") | match |
| 33 | The Bluffs | ramp on a waterfront lot of more than 6 acres, with day docks and boat storage | rows 563, 98 | DRIFT E10 |
| 34 | The Bluffs | Grande Dunes Marina is about 2.5 miles away by water | row 563 | match |
| 35 | The Bluffs | One side of the neighborhood is on a main highway | row 253 | DRIFT E11 |
| 36 | Golf and Yacht Club | Community Watch desk covered 24 hours a day, seven days a week | rows 259, 543, mbgyc.com | match |
| 37 | Golf and Yacht Club | The gatehouse at the entrance has its own phone line | rows 149, 259 | match |
| 38 | Golf and Yacht Club | All of that comes with an HOA fee of about $95 a month | rows 149, 259 | DRIFT E12 |
| 39 | Golf and Yacht Club | The owners' association owns the wide strips of grass and woods | rows 151, 530 | DRIFT E13 |
| 40 | Golf and Yacht Club | The association also keeps a storage area for RVs and trailers | row 150 (one listing; the location is not shown, row 544) | match |
| 41 | Golf and Yacht Club | Enterprise Landing about a 4-minute drive from the entrance | row 178 and v8 (OSRM 4.4) | match |
| 42 | Golf and Yacht Club | no golf or yacht club anymore; Heron Point closed years ago | mbgyc.com: "we no longer have an on-site golf course or yacht club"; row 151 | match |
| 43 | Golf and Yacht Club | Sandpiper Place shares the entrance but has its own owners association | rows 269, 175 | match |
| 44 | Prestwick | When the club ended its memberships, the owners association took over the pools and the tennis center | row 123 (safe wording) | match |
| 45 | Prestwick | Owners have two pools and two hard courts; the eleven clay courts take their own membership | rows 101, 123 (the hard courts from a 2016 article) | match |
| 46 | Prestwick | The course is fully public now | rows 101, 123 | match |
| 47 | Prestwick | aerial: Dye golf course; houses among the fairways; a long lake at the left | parcels (Image labels) | match |
| 48 | Seasons | the clubhouse has indoor and outdoor pools and a fitness center | rows 102, 179; FirstService release 2024-01-31 | match |
| 49 | Seasons | resident 55 or older; visitors use a call box at the main gate | rows 14, 102 | match |
| 50 | Bellwood | About a dozen lots back onto Collins Creek | row 549 | match |
| 51 | Bellwood | a wide band of woods; beyond the woods lies TPC Myrtle Beach | row 549, NAIP | match |
| 52 | Wachesaw Plantation | The main guard gate is off Riverwood Drive | row 21 (one listing; Riverwood Drive is the road from the hospital light) | match |
| 53 | Wachesaw East | houses line the fairways behind the gate | rows 22, 105 | match |
| 54 | Wachesaw East | the Toasted Tee Pub & Grub has held happy hours with live music and $5 small plates | row 564 | match |
| 55 | Wachesaw East | The course and its grill belong to Festiva's vacation-ownership resort | rows 334, 335 | DRIFT E14 |
| 56 | The Reserve | Heading: a marina with dry storage | rows 346, 347 | match |
| 57 | Willbrook | aerial caption: houses in the middle and at the right; lower left is Litchfield Plantation | parcels | DRIFT E15 |
| 58 | Willbrook | one car barcode is issued for both | row 5 (v8) | match |
| 59 | Heritage | HOA fee includes cable TV, home internet, dock master, 24-hour security; a separate phone line for the main gate | rows 371, 442 | match |
| 60 | DeBordieu | Heading: with its own beach and club | rows 393, 81 | DRIFT E16 |
| 61 | DeBordieu | parade; owners pay for their beach through a beach fund; no overnight boats | rows 388, 393 | match |
| 62 | Cons | At DeBordieu, the owners pay to rebuild their beach | row 393 | match |
| 63 | Cons | At Litchfield by the Sea, each neighborhood ... its own fee and rules | rows 92, 380 | DRIFT E17 |
| 64 | Cons | We check for special assessments before you make an offer | rows 1, 199 | match |
| 65 | FAQ | A gate keeps cars that are only passing through off the streets | row 13 | DRIFT E18 |
| 66 | FAQ | a guest at the second gate can pick the owner's name on the keypad | row 212 | DRIFT E19 |
| 67 | FAQ | Seasons is a 55+ community, and visitors use a call box | rows 14, 102 | match |
| 68 | FAQ | Ten of the 18 are golf communities | row 171 | match |

## Other findings (not counted as drift)

- Seaside: "gated" is no longer on the page, and nothing on it says where the gate is. Fine. The entrance (the Sea Island Way and 8th Avenue North junction) is the research's placement, not a source's; OpenStreetMap's only lift gates near Seaside are at Seashore Villas.
- Tidewater: the TagMaster case study (row 401, still pending) says "three separate entrances". "Its guard house" does not say one; the row 20 listings name one on Little River Neck Road.
- The Bluffs "boathouse": rests on four listings. "A second clubhouse on the waterway" is what two of them say.
- Waterway Palms: the plan comes from a 2014 page that calls the ramp "proposed". The ramp stands today (row 560, NAIP), so only the Battery sentence needs the plan wording.
- Seasons: the pool list is a 2024 release. Present tense is the v8 wording; keep it checked by 2027-01.
- Willbrook: the photo record's `what`, `alt` and `caption` in `data/photos.json` still carry the old "open fields at the left" wording for the 14e frame.

## Commands and sources

`git diff 88e1cf5 HEAD -- batches/2026-10-b/specs/gated-communities.js`; scstatehouse.gov (Title 56 Chapter 2); nmb.us (the golf cart page and release AID=1293); wmbfnews.com (via search); OSRM public router; OpenStreetMap API (ways and nodes named above, a bounding-box read around Seaside); Horry County GIS layer 24 (Seaside, Bellwood, Waterway Palms, The Bluffs, Tidewater, Prestwick, Golf and Yacht Club); Georgetown County GIS layers 2 and 7 (Willbrook frame, Wachesaw Golf LLC); USGS NAIP exportImage (Bluffs and Waterway Palms ramps, Bellwood and Seaside overlays); portal.connectresident.com cwsprofile; wachesaweast.com; mbgyc.com; seasons55.com; thereservegolf.com; thereserveatlitchfield.sites.townsq.io; clubandresortbusiness.com and prweb.com (Festiva, 2017); vacatia.com and tug2.com (secondary); AcclaimWeb 4786/2971; fsresidential.com. No Zillow page was opened.
