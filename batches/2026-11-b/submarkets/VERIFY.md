# Verify: /submarkets/ (the town guides hub)

## Round 2, 2026-11-12: rows D1 to D14 and R1 to R12

Independent verifier. I did not research this page. Ledger: `facts.md` in this folder; my rulings are in each row's status cell, marked "VERIFIER 2026-11-12". Struck list: `batches/2026-11-b/facts/submarkets-struck.json`, now 23 entries (10 added). Each new entry fires on its struck text, and no "use" text fires any entry (checked with `tools/struck-check.js` compile and check); `node tools/struck-check.test.js`: all controls pass.

What I opened or ran myself:
- The three Census tables, fetched again from data.census.gov (H5, H1, P1, every SC place): byte-identical to `raw/census/`. The H5_006N label at api.census.gov.
- The 2020 Gazetteer, fetched again: byte-identical to `raw/web/gaz_place_45.txt`.
- `coast_length.py`, `beach_by_town.py` (60, 120, 200 m) and `build_glance.py`: outputs identical to the saved JSON.
- An independent measure on the full-resolution TIGER/Line 2026 COASTLINE and the full TIGER 2026 PLACE file for South Carolina (not the simplified Blog-Brain geometry), with pyproj geodesic lengths.
- TIGERweb Census 2020 outlines of all nine places, plus Atlantic Beach, Briarcliffe Acres and Litchfield Beach, against the Horry and Georgetown county outlines.
- cityofmyrtlebeach.com (About Myrtle Beach; Our Honorary Namesakes), conwaysc.gov, surfsidebeach.org /207, /339 and /363, scstatehouse.gov S.1325 and townofpawleysisland.com. They all resolved for me.
- visitmyrtlebeach.com and hmdb.org: both return a Cloudflare challenge (HTTP 403) to curl and do not resolve for WebFetch. Not opened.
- The source rows behind R1 to R12, in the waterfront, NMB, SB, GC, MI, PI and CW ledgers.

### Counts

| Status | Rows |
|---|---|
| VERIFIED | 17: D3, D6, D7, D8, D10, D12, D14; R1, R2, R3, R4, R7, R8, R9, R10, R11, R12 |
| CORRECTED | 9: D1, D2, D4, D5, D9, D11, D13; R5, R6 |
| STRUCK | 0 |

D2 and D11 are corrected to a source that I could open: the City of Myrtle Beach. The two sources the researcher named stay unopened. D4 is verified in its counts and corrected in its wow note.

### Corrections

**D1, shore length.** The figures hold. On the full coastline the shore runs 48.6 miles from the state line to the town's south end, and 63.3 miles to 33.194 N. The simplified line is not shorter here. The fault is "near Georgetown": the mouth of Winyah Bay is about 14 miles from the City of Georgetown. Use: From the North Carolina line to the south end of Pawleys Island, the ocean shore runs about 48 miles; to the mouth of Winyah Bay, about 63 [our measure, Census TIGER/Line 2026 coastline].

**D2, the tourism board's 60 miles.** The fact sheet would not open. The 60 miles from Little River to Pawleys Island, and the "14 communities", stay off the page. The City of Myrtle Beach says: "at the heart of the Grand Strand, a 60-mile stretch of natural beauty on South Carolina's northeastern coast." It names no ends. Use: The City of Myrtle Beach calls the Grand Strand a 60-mile stretch of the coast; by our measure the shore from the state line to Pawleys Island's south end is about 48 miles [City of Myrtle Beach, About Myrtle Beach; D1].

**D4, the wow note.** The counts are right. Two limits:
- "Only" trap: Surfside Beach also had more homes (4,317) than residents (4,155). So did Atlantic Beach (228 homes, 195 residents).
- The Census counts people where they usually live. It does not say "all year".

Use: On Census Day 2020, North Myrtle Beach, Surfside Beach and Pawleys Island had more homes than residents [2020 Census, P1 and H1].

**D5, Census places against the guides.** I compared the TIGERweb 2020 outlines with the county outlines, by area:
- Garden City CDP is 100 percent in Horry County. It stops at the county line and does not reach into Georgetown County.
- Murrells Inlet CDP is 100 percent in Georgetown County.
- Little River and Carolina Forest are all in Horry; the Town of Pawleys Island is all in Georgetown.

The Garden City note in `build_glance.py` ("which reaches into Georgetown County") is wrong and flows into `glance.json`. The writer fixes the note. Use: The Census's Garden City is the Horry part only, and its Murrells Inlet is the Georgetown part only; each guide covers both sides of the line [Census TIGERweb 2020].

**D9, beach miles by town.** On full-resolution lines, three of the four towns hold: Myrtle Beach 10.0 to 10.2, Pawleys Island 3.6, Surfside Beach 2.2 to 2.4. Two figures overstate:
- North Myrtle Beach: 8.2 to 8.3 miles, in two pieces on either side of Atlantic Beach (7.1 and 1.3). "About 8 1/2" overstates.
- Outside every place: 16.9 to 18.0 miles, not 18 to 19. The stretches are Waites Island (3.6), Briarcliffe Acres to Myrtle Beach (3.4), Myrtle Beach to Surfside with Myrtle Beach State Park (3.5), and Garden City's county line to Litchfield with Huntington Beach State Park (6.7).

I found no beach-mile figure on the city sites I opened. Use: Ocean beach inside each town's limits: Myrtle Beach about 10 miles, North Myrtle Beach a little over 8, Pawleys Island about 3 1/2, Surfside Beach about 2. More than a third of the shore between the state line and Pawleys Island's south end lies outside every town and Census place: unincorporated land and two state parks [our measure, Census TIGER/Line 2026].

**D11, the name.** The marker would not open. The City of Myrtle Beach, Our Honorary Namesakes, says: "The Grand Strand was coined in 1949 by Claude Dunnagan as the title for a newspaper column about area happenings. The name stuck for the whole region." Search results disagree on the newspaper (News or Sun) and on the column's title ("From the Grandstand"). Name neither. Use: The name Grand Strand dates from 1949, the title of a newspaper column by Claude Dunnagan [City of Myrtle Beach, Our Honorary Namesakes].

**D13, homes per 100 people.** The arithmetic is right: 138, 412, 38 and 44. But the figure counts homes per resident on one day. It does not measure summer against winter, and the people are usual residents, not people who live there "all year". Use: On Census Day 2020, North Myrtle Beach had about 138 homes for every 100 residents, Pawleys Island about 412; Conway about 38 and Carolina Forest about 44 [2020 Census, P1 and H1].

**R5, salt marsh counts.** The Murrells Inlet half drops its geography and its limits. Waterfront row 6 says "Across the county line". MI row 9's safe wording is the only one to use: About 220 houses outside Garden City sit within 30 m of the inlet's salt marsh, almost all on the creek side of US 17 Business [our count, Georgetown County parcels and NWI wetlands]. The Garden City half (about 260) matches GC 13.

**R6, sunrise.** The claim as it stands in the ledger is the wording waterfront's verifier struck: "Windy Hill to Garden City, every morning", "faces the southeast". Use only: From central Myrtle Beach south to Garden City, the sun rises over open sea on every morning of the year; from Windy Hill to Cherry Grove it comes up over the North Myrtle Beach shore on about 100 to 125 mornings around June [waterfront 23]. Or leave it off; waterfront owns it.

### Notes on verified rows

- **D3:** I recomputed every share. The H5 vacant total equals the H1 vacant count for all nine, so the two tables agree. The Census group "seasonal, recreational, or occasional use" also takes in timeshares and vacation rentals. Never call them "second homes", and say nothing about owners.
- **D7:** The Myrtle Beach page resolved: "Incorporated March 12, 1938", and "became a city in 1957, when the permanent population first topped 5,000". It does not give January 4, so give the year only. For Surfside's 1964, cite /339, which says it directly.
- **D10:** Along the coast, north to south, Atlantic Beach and Briarcliffe Acres are the only other incorporated towns between the state line and Pawleys Island. Litchfield Beach CDP has 4.0 miles of shore, but it is not a town.
- **D12:** Waites Island is the 3.6 miles of shore north of Cherry Grove. It is unincorporated and may carry a Little River address. Say "the Census place has no ocean beach", never "Little River has no beach".
- **D14:** "Near the ocean, on other water" is a label, not a measure. Give no distance with it.

### For the lead

- Facts.md "Not found" item 1 is now out of date: Myrtle Beach's year (D7) and the name's origin (D11) are opened through the city. The tourism board's fact sheet (D2) is still unopened.
- `build_glance.py` Garden City note: fix it per D5 before `glance.json` feeds the table.
- The spec `specs/submarkets.js` (2026-11-10) does not yet carry round-2 copy, so I had no page text to check against the struck list.

---

## Round 1, 2026-11-10

Independent verifier, 2026-11-10. I did not research this page. Ledger: `facts.md` in this folder. Struck list: `batches/2026-11-b/facts/submarkets-struck.json` (13 entries; every entry fires on its struck text, no "use" text fires; `node tools/struck-check.test.js`: all controls pass).

What I opened myself, on 2026-11-10: every URL in the ledger, the nine live guide pages in the website working copy, each guide's ledger row, and the data. Re-run: `python3 -I data/2026-11-b/submarkets/build_towns.py` ("all nine match their guides", exit 0) and `map_points.py` (same output). Live checks: county GIS layer 24 (deeded slips), layer 31 (airport point; city limits), OpenStreetMap ways for the MarshWalk, `tools/inbound.js`, `idx-lib/feeds.js`, the Search Console exports.

### Counts

| Status | Rows |
|---|---|
| VERIFIED | 31: H1 to H5, H7 to H12, H14 to H17, H20, H22 to H29, H32 to H36, H38, H39 |
| CORRECTED | 7: H6, H13, H18, H19, H21, H37, and the "Where" words |
| STRUCK | 2: H30, H31 |

H11 is VERIFIED in the wording its ledger already corrected ("house or townhouse").

### Corrections

**H6, Garden City price.** The figure is right (89 sales, median $319,900). But the deeds are Horry County's only, so the Georgetown end of the ocean side is not in it. The guide says so under its own table. "A condo on the ocean side" alone says more. Use: a condo on the ocean side by the pier, on the Horry part, sold for about $320,000 at the middle [Horry deeds, Oct 2025 to Sep 2026; GC 11].

**H13, North Myrtle Beach wow.** fatharolds.com says "DJs Nightly at 7:00pm", "the Best DJs spinning the tunes 7 nights a week", "It is the Home of the Shag" and "Learn the State Dance on Tuesday Nights". It does not say the DJs play beach music. Beach music is named only for the bands in big event weeks. Use: The shag, the state dance, is still danced on Main Street. At Fat Harold's Beach Club, the home of the shag, DJs play every night from 7 [SC Code 1-1-665; fatharolds.com]. The NMB guide prints "a DJ plays beach music from 7" (NMB 57). That is a sibling fix for the lead.

**H18, Murrells Inlet wow.** marshwalk.com says "a half-mile wooden boardwalk", but the measure does not support it. OpenStreetMap maps the MarshWalk as two wooden footways, ways 427575453 (400 m) and 447472839 (82 m): about 480 m, or 0.3 mile. Every restaurant the guide names sits on them: Wicked Tuna at the south end, Drunken Jack's at the north. The area polygon, way 930398329, spans 398 m. Use: The MarshWalk is a wooden boardwalk along the salt marsh, lined with restaurants, and its live music is free to hear [marshwalk.com]. Give no length, or "about a third of a mile" [OpenStreetMap]. "Half-mile" is also on /submarkets/murrells-inlet/, /buyers/no-hoa-homes/, /buyers/second-home/, /buyers/relocating/why-myrtle-beach/ and /buyers/relocating/which-town/. Those are lead items.

**H19, Pawleys Island wow.** The nomination reads: "Cypress lumber, the building material most frequently used, was hewn on the mainland where each timber was chiselled with Roman numerals for easy assemblage on the island." The hewing is said of the cypress, the material used most often, not of every old house. Use: The old island houses were built mostly of cypress, hewn on the mainland, each timber chiseled with Roman numerals so the house could be put together on the island [NRHP nomination 72001211, 1972]. A note for the writer: the same paragraph says "plantation carpenters" assembled the houses, and the causeway was "built by slave labor". This line is a wow about a rice planters' retreat. Keep it about the houses and add no romance about who built them.

**H21, Conway wow.** The Parks Guide says "an ADA compliant playground replicating the F.G. Burroughs Steamboat" and "The Riverwalk is an approximately 1.5 miles". It does not say "old" or "river" about the steamboat. Use: Riverfront Park on the Waccamaw has a playground built like a steamboat, the F.G. Burroughs, beside a riverwalk of about 1.5 miles [City of Conway Parks Guide, Feb 2026]. The Conway guide's "old river steamboat" is a sibling item for the lead.

**H37, context.** The finding stands: all of that copy goes. But the note's evidence is wrong. In WT 1, Conway has the lowest detached-house price of all 13 places: $271,000, against $280,000 for Loris and $348,000 for Aynor. Loris and Aynor are lower only in CW 7's group (resold homes that are not condos, by Census place): Loris $233,700, Aynor $256,300 (17 sales), Conway $264,000. Cite CW 7, not WT 1. Today's live hub also says the "lowest entry prices on the Strand" (Conway and Little River) and "the HOAs require long leases" (Carolina Forest). struck-check finds both on the live page.

**Where words (the town cells).** The ledger's own words are fine, but `towns.json` does not use them in four cells:
- Surfside Beach, "just south of Myrtle Beach". County layer 31 puts the city's south limit near the ocean at about 33.648 N. The town's north limit is at about 33.627 N. Between them is roughly 1.5 miles of unincorporated beach. Use the guide's "south of Myrtle Beach". "Just" is struck.
- Carolina Forest, "between US 501 and the waterway". No ledger row supports these words. The ledger gives "between US 501 and International Drive", from the guide, which no verified row supports either. The county parks page supports this: "along the Intracoastal Waterway ... in Carolina Forest". Affordable row 72 supports "outside any city or town" (houses in tax districts 100, 800 and 600, all unincorporated, 201 mills). Use: inland, in unincorporated Horry County. Use a road only after a row is added.
- Myrtle Beach, "The city in the middle". The Where section has no Myrtle Beach entry. By latitude in map-points.json it is 5th of 9, so "in the middle of the Grand Strand" is true as geography. Add a ledger line, or use "the largest city", but only with a row behind it.
- North Myrtle Beach, "north of Myrtle Beach". This is true (layer 31). The ledger's "its own city at the north end" is also fine.

### Struck

**H30, Conway's nightly-rental rule.** Struck. I confirm CW 42 as it stands: Municode answered 403 again today. The hub's cell may say only that we check the city's zoning for each address.

**H31, "in Carolina Forest the HOA decides".** Struck. No ledger row says every Carolina Forest home is in an HOA, or how the HOAs rule. The guide's "and the HOAs mostly say no" has no row either. Use H27's general point: an HOA can still say no. `towns.json` carries "and the HOA decides" in the Carolina Forest rule cell; change it.

### Rows verified, with what I saw

- **H1 to H5, H7 to H11 (prices).** `build_towns.py` re-run: each median and count matches the findings file and the live guide's sentence. LR 511 / $357,000; NMB 560 / $565,000; MB 459 / $539,500; SB R3 houses 39 / $1,000,000 (R3 and C3 together: 40 / $1,002,500, also "about $1 million", so "the nightly-rental zones" holds); SB R1 $541,750, R2 $486,500; MI Horry houses 396 / $449,950 (43 of them builder sales; say "sold", not "resold"); PI west of US 17 220 / $580,000; PI island 28 sales over three years / $2,450,000 (10 in the past year, same median); CF 405 / $440,000; Conway 334 / $264,250. Windows: Horry deeds recorded 2025-10-01 to 2026-09-30; Georgetown SaleDate in the same window (PI 10 uses 2023-10-01 to 2026-09-30). `towns.json` writes "deeds recorded 2025-10-01 to 2026-09-30" for every town. For Pawleys it is Georgetown's parcel sale date, and the island figure covers three years. The footnote must say so.
- **H12.** Live layer 24, land use 306: 322 parcels. The two non-slips are COQUINA HARBOR NORTH; PHASE II (2.05 acres, $1,100) and BRYANT DR & WHARF AV. That leaves 320 slips in the county and 221 in Little River: Mariner's Pointe 116 (one spelled "MAIRNER'S"), Coquina 80, Lightkeepers 25. Outside are Dock Holidays 93 and Harbourgate 6. 221 / 320 = 69 percent: "about two of every three" holds. This settles the lead re-check R1-1 asked for.
- **H14.** City news item: "a total of 1.3 miles in length", three sections. "Beside the ocean" fits "oceanfront promenade".
- **H15.** flymyrtlebeach.com: "With more than 50 nonstop destinations". The terminal point (33.6797, -78.9283) falls in MYRTLE BEACH on layer 31.
- **H16.** Town page /212: "stretches 814 feet into the Atlantic Ocean", "concrete fishing pier", "Pier Admission Fee: Free".
- **H17.** pieratgardencity.com/story: "The rain shelter at its end ... evolved into a gathering place featuring a bandstand, dance floor bar where ... families could learn the latest line dances". Today: "live music that draws dancers".
- **H20.** Town Beach Access page: "the largest free public beach access lot in Georgetown County ... 8 other public beach access points". Still free today. Recheck at build.
- **H22.** County parks page: "located along the Intracoastal Waterway near River Oaks Drive in Carolina Forest. It includes 7 miles of mountain biking and hiking trails on 70 acres". It is still not on the CF guide (PLAN decision 1).
- **H23.** Affordable row 72 holds. District 600 (the third district in CF findings) is the county fire-levy district at 201 mills, not a city (MI and GC ledgers). So "no city tax" holds for every house counted.
- **H24.** News item R1468: "Most traditional residential neighborhoods ... are NOT zoned for short-term rentals"; "Any zoning district that begins with R ... does not allow short-term rentals, with the exception of the RMV zone". Short-term means under 90 days, so "nightly" is inside it.
- **H25.** City page: "All short-term rentals located within the City ... are required to obtain a business license"; "renew licenses annually"; "There is currently no special zoning or permit process required beyond standard licensing". The page also lists council workshops on STR rules through September 2025. "Currently" matters: recheck at build. The cell must keep "An HOA or the deed can still bar rentals".
- **H26.** Sec. 17-396.10 reads: "Transient rentals, also known as a short term rentals are permitted in the R3 and C3 zoning districts". Its use table lists "Transient Short Term Rentals P P § 17-396.10". The ledger's Zoneomics URL (`surfside_beach-SC`) returns 404 today. The working copy is https://www.zoneomics.com/code/surfside-beach-SC/chapter_3, and Zoneomics is a secondary copy. The primary (Municode) answers 403; SB 1's verifier read it there on 2026-10-15. The town's own District Regulations sheet names "R-3 High Density/Weekly Rental". Cite the Town Code, Sec. 17-396.10 and 17-395, and fix the URL.
- **H27.** County chart PDF: "Obtain Business License", "Obtain SC Sales Tax Number from DOR", "A County Hospitality/ Accommodations Account will be setup for you", "Complete a Form PT-100 and submit to County by April 30th". It names no rental permit. `towns.json` writes "No rental permit on the Horry side" for Garden City and Murrells Inlet. That is the absence wording GC 20's verifier struck. Use "the county's list names no rental permit" (struck list entry H27).
- **H28.** Georgetown FAQ: "No, Georgetown County does not issue or require business licenses." It goes on: incorporated places, the Town of Pawleys Island among them, "may have their own requirement". So the line covers the unincorporated mainland and the Georgetown ends of Garden City and Murrells Inlet, not the island.
- **H29.** The town's Accommodations and Hospitality Tax monthly reporting form (2019, still linked on Permits and Forms): "Line 1 x 3%". The town code is on Municode, and Municode answered 403. "Allowed" rests on the form and on PI 35's verifier. Say nothing about a license.
- **H32.** Neither export has a row for /submarkets/. Showings: CF 452, PI 318, MB 118, GC 93, CW 77, SB 72, MI 69, LR 56, NMB 36.
- **H33 to H35.** The live /invest/str-rules/ prints all three: "allows them citywide with a license", "the only coastal town here with no business license at all", "Conway has never adopted a short-term rental ordinance". These are lead fixes on that page.
- **H36.** WT 1 values match: Conway $271,000, Little River $380,000, Myrtle Beach $535,000, Murrells Inlet $610,000, Pawleys and Litchfield $650,000, Garden City $406,000, Surfside $705,000.
- **H38.** feeds.js line 163: TOP_EACH lists seven towns, with no Garden City and no Carolina Forest. Line 305 maps "/submarkets/" to TOP_EACH.
- **H39.** `node tools/inbound.js <site> --only /submarkets/`: 14 referring pages.

### Not to publish

- The Carolina Forest guide's lines: "biggest master-planned community", "26,000+ residents", "30,000-acre", "no wind-pool". They are in the struck list.
- Any length for the MarshWalk taken from marshwalk.com.
- Any Conway rental rule. "In Carolina Forest the HOA decides."
