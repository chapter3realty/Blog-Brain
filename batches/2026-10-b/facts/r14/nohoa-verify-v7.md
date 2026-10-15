# No-HOA homes, rules grid and rewrite check v7 (round 14c, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before this task. I read `prompts/verifier.md`, `CLAUDE.md`, lessons B45 to B48 and the v6 notes, then checked rows 137 to 148 of `batches/2026-10-b/facts/no-hoa-facts.md` and the page `/buyers/no-hoa-homes/` against primary sources I opened myself on 2026-10-15. I did not edit the spec. I did not open any Zillow page.

**The spec moved while I worked.** I read the body at `ad6859dd64cc9389ceace5115f8f1376` (the 14c version with the Georgetown County row, 8 places, 32 cells, built into the preview at 02:14 UTC). A writer then rewrote the rules table as plain sentences, dropped the Georgetown row, merged the short answer, changed the price chips to one measure and cut the price section (commit `875e599`, md5 `0098679e18af6680e21a7169cbf807a3`, 02:35 UTC). A third edit (the round 14d and 14e work-in-progress commits: md5 `9e64ede8491ef4283a1127732519201e`, then `924d509c4b39a80469878ca28e0b7f37` at my last read, 02:5x UTC) rewrites the area entries again and adds ledger rows 149 to 165; I did not verify those entry rewrites (they are pending rows). The 02:51:59 preview I ran the struck check on is a build of that edit; the Pine Lakes "opened in 1927" sentence (V22) is gone from it, the "sold 18 of its 27 holes" sentence (V1) is still there. Every verdict below says which wording it covers. I compared the spec with commit `7fe9c3d`: 131 strings in the 14c version are new or changed, and 14d changed about 20 more.

## Sources I opened myself (2026-10-15)

- Municode API and library pages (api.municode.com, job ids from `Jobs/latest`): City of Myrtle Beach, App. A Zoning Secs. 203, 302, 1006, 1407, 1502, 1702, 1703 and Code Secs. 11-25, 14-305 (job 474299, republication through Ord. 2025-30; the library shows no later job); North Myrtle Beach Secs. 11-3, 21-29, 21-45 to 21-49, 23-2, 23-31, 23-105, 23-107, 23-113 (job 496044, through Ord. 26-35); Surfside Beach Secs. 4-1, 4-5, 7-26, 17-203, 17-395, 17-396.10, 17-408.3, 17-409, 17-426, 17-427, 17-506 and Appendix A (job 483491); Horry County App. B Secs. 204, 402, 412, 907, 927 and Code Secs. 13-12, 19-6, 19-8 (job 494166, Supp. 88); Georgetown County Code (job 490662) searched for tourist home, short term rental, boat, commercial vehicle, recreational vehicle.
- City of Myrtle Beach pages: "Ever wonder if your home or neighborhood ... is zoned for short-term rentals?" (news_detail_T6_R1468.php), Planning and Zoning Department page, Applications, Documents and Forms page, Withers Swash Park photo page (pow040618.php), Train Depot page.
- City of North Myrtle Beach: Rental Property Quick Reference (PDF), Short-term Rentals page (nmb.us/833), Beach Accesses page, Yow Park page.
- City of Conway Unified Development Ordinance, "Current UDO (7.20.26).pdf" (full text, 18,735 lines, Secs. 2.2, 4.1, 5.1.5, 5.2.1, 5.2.3, 5.2.6, 5.2.10); Conway planning forms page.
- City of Loris Zoning Ordinance 2024 ("Part 0 Zoning Ordinance 2024.03a", 133 pages; Table 1 is an image, read as an image), Secs. 2-2, 3-7, 7-4, 7-7, 7-10, 7-11.
- Town of Aynor Zoning Ordinance, amended through April 2026 (PDF), Table 9-1, Secs. 4.06, 9.01, 9.02, Table 10-3 and definitions.
- Georgetown County Zoning Ordinance PDFs on gtcountysc.gov (DocumentCenter views 225 to 275, 291, 292, 1347: Arts. III, IV, V, VI and the district sections 600 to 631).
- Horry County Treasurer pages (Business License, Application Instructions, Hospitality Fee); Horry County beach access page and boat landings page; S.C. DNR boat landings list; S.C. Code Title 1 ch. 1 (Sec. 1-1-665); SC Encyclopedia (North Myrtle Beach, Horry County); sctrails.net (Waccamaw River Heritage Preserve); Huntington Beach State Park page; Solid Waste Authority residential page.
- Horry County GIS: parcels (layer 24, owner name search), address points (layer 22); S.C. DES beach access layer (644 records, 362 Horry public accesses); OSRM public router; routing.openstreetmap.de foot profile; Nominatim.
- Blocked (HTTP 403 or robot check): Myrtle Beach fence permit PDF (cityofmyrtlebeach.com and cms6.revize.com copies, curl and WebFetch), SC SHPO record S10817726017 (robot check). Not opened: Zillow, any listing site.

## Result

- **Rules grid (the legal table): 32 cells, 15 verified as written, 14 verified with a tightening, 3 to fix before publishing.** The three to fix: Horry County boat ("anywhere"), Surfside Beach rental (14d: "not the single-family ones") and Loris rental (14d: a flat "No"). In the 14c table the cells to fix are Horry boat and Loris rental ("so not allowed"); Surfside rental was right in 14c and wrong in 14d. Every other cell is true as a plain summary; the tightenings are things a buyer would want (campers, oceanfront fences, the garage counts as an outbuilding, a rental license does not transfer).
- **Fact sentences (14c, 14d changes included): 94 units, 78 match, 16 drift** (V1 to V5, V7, V11 to V16, V18 to V21). Eight must be fixed: V1 (Pine Lakes "sold 18 of its 27 holes ... and kept nine" contradicts the source), V2, V3 ("Most are listed from $250,000 to $500,000" is 41 percent), V4, V5, V7, and V11 and V12 in the rules prose. Eight are tightenings (V13 to V16, V18 to V21). Counted apart: three rules-grid fixes (V8 to V10, the cells above), two chip drifts (V6 price wording, must fix; V17 Windy Hill at exactly 60 percent, tighten) and one sibling drift (V22).
- **Chips:** share words 15 of 16 match the stated thresholds (Windy Hill at 24 of 40 = 60.0 percent is the boundary); price numbers 16 of 16 match the area medians; the price wording "Houses for sale here" is wrong for all 16 because the median is of houses with no fee (V6).
- **Rows 145 to 148:** 145 and 146 verified; 147 and 148 verified with corrected wording (row 147 G1 has the wrong base: 273 of 446, not of 457; row 148 Plantation Point "voluntary" is secondary). Row 134's Loris 0.49 acre stays wrong; 0.37 is right.
- **Drives and walks:** every drive claim on the page re-run (15 figures); all match the rounding rule. Garden City to the landing, which v6 found to be 5.95 minutes and not 5, is now stated as 2 miles by road, and that holds. Walk counts re-run for 82 houses: 70 of 82 within 10 minutes (row 146 says 69; Ocean Drive is 10 of 15 by my access list, 9 of 15 by v6's, one house at about 10 minutes).
- **Struck check** (`node tools/struck-check.js --batch ... --preview .../preview/b --strict`), no-HOA, before my edit: **no-hoa-homes (99 patterns): no struck wording.** After my new entries: see Step 6.

## Step 1: the rules grid, cell by cell

Verdicts: **verified** = true as a plain summary; **tighten** = true, but a buyer's decision turns on something the cell leaves out (the supported wording is given); **fix** = the cell says more than the source, or the wrong thing. "14c" is the table at md5 `ad6859dd`; "14d" is the sentence cards at commit `875e599`. The boat and truck cells rest on rows 58 to 64, which I re-opened in the codes rather than trusting. Quotes are the code text, with the section number. Not legal advice; the page says the zoning office decides each lot.

| Place and cell | Page wording (14c / 14d) | Source and section | Quote | Verdict |
|---|---|---|---|---|
| Horry County, outside towns: Boat or camper | Anywhere on your lot / Yes, anywhere on your own lot. | Horry County Code, App. B (Zoning) Sec. 402 (intro) and Sec. 907.D; Sec. 13-12; ledger row 64 (searches of the whole code) | Sec. 402: "Such buildings, structures and uses must meet setbacks for the district. Accessory uses shall not be located forward of the principal structure." Sec. 907.D.1 (CFA, AG3, RCS, TRS): "Storage is only allowed when accessory to a permitted use within the district. ... Storage shall not be located forward of the principal use." Sec. 13-12(b): "in any place in the unincorporated area of the county at which official signage posted by the county clearly prohibits the parking, stopping, or standing of motor vehicles in that place." | **fix.** Overstated. Row 64's approved wording is that the county sets no rule on where an owner parks his own boat; "anywhere" turns an absence into a permission (traps B11, B15). Sec. 402 and 907.D also reach accessory uses and outdoor storage forward of the house in some districts, and no source says a boat on a trailer is outside them. Supported: "The county's zoning names no limit on where you park a boat on your lot. Ask us; we check the code for the address." |
| Horry County, outside towns: Work truck | Two per acre for a home business / Yes. A business run from home may keep two work vehicles per acre. | Horry County Code, App. B Sec. 927.D.4, 927.E.4 and 927.F.4 | 927.D.4 and E.4: "No more than two (2) service vehicles per acre will be permitted." 927.F.4 (AG1, AG2, FA, LFA, CFA tracts under 1.5 acres): "No more than three (3) service vehicles per residence will be permitted." 927.C: "The following are prohibited home occupation uses: ... Trucking Companies". | **verified, tighten.** Matches 927.D and E. Tighten: on farm-zoned lots under 1.5 acres (common around Loris and Aynor) the limit is three per home, not two per acre. The leading "Yes." covers a personal truck only because row 64 found no limit; row 64 forbids "no county limit on a work truck". Supported: "A business run from home may keep two service vehicles per acre; three per home on small farm-zoned lots." |
| Horry County, outside towns: Short-term rental | Not named in county zoning / The county code does not name it. We check the lot's zoning before you buy. | Horry County Code, App. B Sec. 204.G and 204.H, use chart 204.2 (Lodging and Transient Accommodations); Treasurer, Business License, Application Instructions | 204.H: "The zoning administrator shall determine whether or not an unlisted use is part of an existing category, or is substantially similar to an already defined use." 204.2 lists Boarding House, Bed & Breakfast, Hotel/Motel, Campground; no short-term or vacation rental. Treasurer: "Zoning approval is required prior to the issuance of the business license." Code Sec. 19-8: a 0.5 percent local accommodations fee on lodging "furnished to transients by any ... residence". | **verified, tighten.** True of the use chart. Tighten: the zoning code does not name it, but the county code does tax it (Sec. 19-6, 19-8; the Treasurer also bills a hospitality fee, 3 percent outside the cities), and the zoning administrator decides where an unlisted use fits. "The county code does not name it" (14d) is wrong for Chapter 19; say "county zoning". |
| Horry County, outside towns: Shed or fence | Small shed 5 ft from line; fence 8 ft / Yes. A small shed can sit 5 feet from the line, and a fence can be 8 feet tall. | Horry County Code, App. B Sec. 402.A.1 and Sec. 412.A and B | 402.A.1: "One (1) accessory structure at a single family residence, two hundred (200) square feet or less in size, may be located no closer than five (5) feet from an adjacent side and/or rear property line and further provided that no accessory structure may be located within any easement." 412.A: "In all other zoning districts, fences or walls shall not exceed eight (8) feet in height." 412.B.1: "Apply for a building permit when fence is greater than seven (7) feet." 412.B.4: privacy fences in front and corner side yards "Meet ten-foot setbacks". | **verified, tighten.** Matches. Tighten: a fence over 7 feet needs a building permit, and a privacy fence in a front or corner yard must be 10 feet back. Only one shed gets the 5-foot setback. |
| Myrtle Beach: Boat or camper | Over 16 ft, not in the front yard / Yes, but a boat over 16 feet stays out of the front yard. | City of Myrtle Beach Code, App. A (Zoning) Sec. 1006.F and Sec. 203 (Recreational Vehicle); Code Sec. 14-305(b), (c). Municode job 474299 | 1006.F: "No recreational vehicle shall be parked or stored in any front yard, except for 24 hours for loading and unloading, on any lot in any residential district." 203: "Recreational Vehicle: ... The basic entities are: travel trailer, camping trailer, truck camper, motor home, and boats (over 16 feet in length)." 14-305(b): parking of "any boat, recreational vehicle, semitrailer, tractor, trailer, or oversized vehicle ... upon public streets in any residential zone ... is prohibited"; (c) lets the owner keep his own on his own property. | **verified, tighten.** Matches for boats. Tighten: a camper, motor home or camping trailer of any size is also barred from the front yard, and the row heading says "or camper". A boat of 16 feet or less is outside the rule. Supported: "A boat over 16 feet, or a camper of any size, stays out of the front yard." |
| Myrtle Beach: Work truck | One, and none over one ton / Yes, one, of one ton or less. | Myrtle Beach Code, App. A Sec. 1502.B.1 | "Private garage, open storage space or parking area for motor vehicles, provided that such is designed and/or used for the storage of motor driven vehicles, owned and used by the occupants of the dwelling to which it is accessory. An accessory garage, open space or parking area shall not be used for: a. More than one commercial vehicle licensed as such by the State of South Carolina per dwelling unit b. Any vehicle more than one ton in capacity." | **verified.** Matches (the limit is one licensed commercial vehicle and no vehicle over one ton, at a single-family home). Row 58 warns that 14-305 alone does not let any truck stay on a lot; this rests on 1502.B.1. |
| Myrtle Beach: Short-term rental | Not in single-family zones / Not on single-family streets. We check the address for you. | App. A Sec. 203 (Visitor Accommodation), Sec. 1407.B.5 and 1407.C (Table of Uses); Code Sec. 11-25(f); City of Myrtle Beach, "Ever wonder if your home or neighborhood ... is zoned for short-term rentals?" (news_detail_T6_R1468.php) and Planning and Zoning page | 203: "a living unit ... rented, leased or sub-leased for any time period less than ninety (90) continuous days". Table row "Visitor accommodations not otherwise listed": P in RMV, MU-H, C6, A, E, HC1, HC2; S in IR; blank in R5, R7, R8, R10, R15, RMM, RMH, RMH-MH. 1407.B.5: "A blank cell in the Table of Uses indicates that a use is not allowed." City page: "Any zoning district that begins with R (for residential) does not allow short-term rentals, with the exception of the RMV zone"; "fewer than 30 houses in traditional residential zones are grandfathered"; "if you are renting a property, you need a business license". | **verified, tighten.** True and plain, but narrower than the rule. The ban is every R district except RMV (multi-family zones RMM, RMH and RMH-MH too), not only single-family ones. Supported: "Not in the R zones except RMV; allowed only in the resort and commercial zones the city lists. We check the address." The city page is the official source; the code table agrees cell by cell. |
| Myrtle Beach: Shed or fence | Shed 5 ft from line; fence 4 to 8 ft / Yes, with a permit. Fences are 4 feet in front and up to 8 in back. | App. A Sec. 1703.A (accessory structures, R districts), Sec. 1702.A.2.f (fences), Sec. 302 (permits); City forms page (Fence Permit Application and Requirements) | 1703.A: accessory structures in required side and rear yards "shall be no closer than 5' to the property line", "shall not exceed one story or 15 feet in height, whichever is greater", 10 feet from other structures, no larger than "600 square feet or 35% of the area of the affected required side or rear yards". 1702.A.2.f: "i. Required front yards-4 feet ... ii. Required side yards-6 feet iii. Required rear yards-8 feet iv. All yards for oceanfront lots - 4 feet." 302: "No building, structure, or sign shall be erected, moved, added to ... without a permit." Forms page lists "Fence Permit Application and Requirements". | **verified, tighten.** Matches. Tighten: on an oceanfront lot every yard is 4 feet (up to 5 on the sides and front if half see-through), so "up to 8 in back" is wrong for the oceanfront homes the page sells in Myrtle Heights. The city's fence PDF stayed blocked (HTTP 403 by curl and WebFetch); the forms page proves the fence permit exists, and the heights come from the code the PDF cites (Sec. 1702.A.2.f). |
| North Myrtle Beach: Boat or camper | Behind the house front, or a carport / Yes, behind the front of the house or under a carport. | North Myrtle Beach Code Sec. 23-113(1). Municode job 496044 | "(1)(a) ... major recreational equipment is defined as including boats and boat trailers, utility trailers, pickup campers or coaches ..., motorized dwellings, storage trailers ... (b) No major recreational equipment shall be parked or stored on any lot in a residential district except in a carport or enclosed building or behind the nearest portion of a building to a street; however, such equipment may be parked anywhere on premises not to exceed twenty-four (24) hours during loading and unloading." | **verified.** Matches ("behind the nearest portion of a building to a street" is the house front; an enclosed building also works). |
| North Myrtle Beach: Work truck | None over 18,500 pounds / Yes, up to 18,500 pounds. | North Myrtle Beach Code Sec. 21-29 | "No person shall park a bus or commercial vehicle rated in excess of eighteen thousand five hundred (18,500) pounds, gross vehicle weight, or any component part thereof, except for the purpose of loading and unloading, upon any street or right-of-way within the corporate limits of the City of North Myrtle Beach and upon any private property in a residential zone." | **verified.** Matches (gross vehicle weight rating, commercial vehicles and buses). |
| North Myrtle Beach: Short-term rental | Not limited by zoning in general / Yes in most of the city, with a business license. Some neighborhood rules forbid it, so we check. | City of North Myrtle Beach, Rental Property Quick Reference (DocumentCenter/View/6133) and Short-term Rentals page (nmb.us/833); Code Sec. 23-2, Sec. 21-45 to 21-49 | Quick Reference: "Both short-term and long-term rentals require a City business license." "City zoning does not generally restrict STR locations, but some PDDs, Development Agreements, and HOA/POA documents may." nmb.us/833: "There is currently no special zoning or permit process required beyond standard licensing." 23-2: "Short term rental: Any residential unit offered for lease for a period of ninety (90) days or less." | **verified, tighten.** Matches the city's words. Tighten: "Yes in most of the city" is the writer's quantity (the city says "does not generally restrict"), and "forbid" is stronger than "may" [restrict]. The Quick Reference also says licenses do not transfer when a property sells, which a buyer who wants to keep renting needs to know. The fire code (Sec. 11-3) uses a different, 30-day meaning of short-term; the page's 90 days is the zoning definition. |
| North Myrtle Beach: Shed or fence | One shed to 150 sq ft in most home zones / Yes, one shed up to 150 square feet, behind the house. | North Myrtle Beach Code Sec. 23-107(3), Sec. 23-31(1) (Coastal Protection Overlay) | 23-107(3): accessory structures "are permitted in all zoning districts except the R-1, R-1A, R-2, R-2A and R-3 Districts, subject to the setback and building separation requirements of the district"; in those five districts "only one (1) accessory structure shall be permitted per lot provided said structure: (a) Does not exceed one (1) story ... (b) ... one hundred fifty (150) square feet ... (c) Is at least five (5) feet from any side or rear property line. (d) ... five-foot separation from the principal building ... (e) ... behind the rear building line". Fences and walls: "prohibited in the required side yards of the Coastal Protection Overlay Zone" (all private property east of Ocean Boulevard). | **verified, tighten.** Matches for the five zones; 14c's "in most home zones" was more exact than 14d's flat "Yes, one shed up to 150 square feet" (other zones follow district setbacks with no 150-foot cap). Omission: the column says "or fence", and the city has no general fence height, but east of Ocean Boulevard fences in the side yards are prohibited (a 3-foot rail fence, a pool fence and a glass-panel fence are excepted). Many of the page's Cherry Grove and Crescent Beach buyers look at oceanfront lots. |
| Surfside Beach: Boat or camper | Two boats or trailers, outside a garage / Yes, up to two boats or trailers. | Surfside Beach Code Sec. 17-427(b) to (d). Municode job 483491 | (b) "Currently licensed vehicles and trailers of any kind or type over twenty-one (21) feet in length shall be limited to a total of one (1) vehicle or trailer per dwelling unit, except when parked in an enclosed garage." (c) "Unlicensed boats, except small boats for which a license is not required, are not permitted in any residential zone, except in an enclosed garage or when substantially covered by an opaque canvas or similar type cover. Boats or trailers of any size shall be limited to two (2) per dwelling unit, except when stored in an enclosed garage." (d) campers and boats may not be used for living or sleeping. | **verified, tighten.** Matches 17-427(c). 14c's "outside a garage" read as a rule that they must be outside; 14d fixed that. Tighten: an unlicensed boat must be in a garage or covered, and a licensed camper or trailer over 21 feet counts as one per home. |
| Surfside Beach: Work truck | One up to 21 ft long and 7 ft 11 in high / Yes, one van or pickup up to 21 feet long and 7 feet 11 inches high. | Surfside Beach Code Sec. 17-426 | "Overnight parking of one (1) commercial vehicle in a residentially zoned district is permitted provided that the vehicle is a van or pickup that does not exceed twenty-one (21) feet in length and/or seven feet eleven inches (7'11") in height. All other commercial vehicles are prohibited from overnight parking in residentially zoned districts." | **verified.** Matches (row 62 and X2 fix applied; the code's "and/or" is read as both limits). |
| Surfside Beach: Short-term rental | Only in the R-3 and C-3 zones / Only in a few zones, not the single-family ones. We check the address. | Surfside Beach Code Sec. 17-396.10 and Sec. 17-395 (use table); Sec. 4-1 and Appendix A (NAICS 721199) | 17-396.10: "Transient rentals, also known as a short term rentals are permitted in the R3 and C3 zoning districts and are defined as ... rented, lease, or subleased for periods less than a calendar month or thirty (30) days. Long term rentals are permitted in all zoning districts allowing residential uses." 17-395, use table: "Transient Short Term Rentals" is P in R3 and C3 only; the same table gives "Single Family, detached" as P in R1, R2 and R3. 4-1: every person engaged in any business "with the object of gain" must obtain a business license. | **fix.** 14c matches (R-3 and C-3). 14d is wrong: "not the single-family ones" tells a buyer a single-family house cannot be a short-term rental, but the R-3 zone allows detached single-family houses and short-term rentals both. Supported: "Only in the R-3 and C-3 zones; not in R-1 or R-2." Also the town's 17-506 says transient rental uses had to conform by June 1994. |
| Surfside Beach: Shed or fence | Shed in the back yard; fence 4 to 6 ft / Yes, in the back yard, with a permit. Fences are 4 feet in front and 6 in back. | Surfside Beach Code Sec. 17-408.3(a), Sec. 17-409 and Sec. 17-203 | 17-408.3(a): shed "Shall be located in the rear yard only; Shall be a minimum of five (5) feet to any property line ... Limit the number of accessory structures per lot to two (2)." 17-409(1)a: "A permit must be obtained for the construction of any fence." (2)a: "in no case shall a fence be placed in any side or rear yard exceed six (6) feet in height." (2)b: "In any front yard, no fence shall be permitted above four (4) feet in height." 17-203: no structure may be erected "without a permit issued by the code enforcement official". | **verified.** Matches. Fences also may not be solid in the front yard (17-409(2)c). |
| Conway: Boat or camper | Side yard, back yard or carport / Yes, in the side or back yard, or under a carport. | City of Conway Unified Development Ordinance (last amended July 20, 2026) Sec. 5.2.6.A | "2. Major recreational vehicles and equipment shall not be parked or stored on any lot, any right of way owned by the City of Conway, or any street within a residential district except as provided below: 1. Within a carport or enclosed building; 2. Within a lawful Rear yard; 3. Within a lawful Side yard; 4. Within a driveway or other lawful parking area on a residential premises for the purpose of loading or unloading, not to exceed twenty-four (24) hours." A.1 lists boats and boat trailers, personal watercraft, travel trailers, pick-up campers, motor homes, fifth-wheel trailers. | **verified.** Matches. |
| Conway: Work truck | Big work trucks not on city streets / Yes, but a big work truck may not park on a city street. | Conway UDO Sec. 5.2.10 | "A. ... commercial vehicles are defined as: 1. Those being used for commercial purposes; and, 2. Those classified as Class Three or above, or those having a weight class of 10,001 pounds or greater; and, 3. Those vehicles with a length greater than 20 feet. B. No commercial vehicles shall be parked upon any street or upon any City right of way in the City of Conway except during periods of loading and unloading." | **verified.** Matches (a vehicle must meet all three tests to count; the UDO sets no limit for a truck on the lot). |
| Conway: Short-term rental | Only in the CC, CBD and WRD zones / Only in the downtown and business areas, not on home streets. | Conway UDO Sec. 5.1.5, Sec. 2.2 (Commercial Short-Term Rental), Sec. 4.1.E | 5.1.5: "Commercial Short-Term Rentals shall be permitted in the CC, CBD, and WRD Zoning Districts"; "3. The length of the stay shall not exceed ninety (90) days"; B.3: "Properties engaging in commercial short-term rentals in the City limits must obtain a City of Conway business license." 4.1.E: "A use that is not specifically listed as Permitted (P), permitted subject to Supplemental Use Standards (S), ... shall be deemed prohibited." 2.2: a Dwelling Unit "does not include Commercial Short-Term Rentals". | **verified.** Matches. The zones are Core Commercial, Central Business District and Waccamaw Riverfront District; "downtown and business areas" is a fair plain summary. |
| Conway: Shed or fence | Shed 5 ft from line; fence 4 to 8 ft / Yes, with a permit, in the back yard. Fences are 4 feet in front and up to 8 in back. | Conway UDO Sec. 5.2.1.A and Sec. 5.2.3; city planning page (Residential Accessory Structure-Fence-Pool App) | 5.2.1.A.1: "Shall be located in the rear yard only. Detached garages and garden structures may also be located in the side yard." A.2: "a minimum of five (5) feet from all property lines". A.3: not over 15 feet "unless it is located entirely in the buildable area". A.4: "limited to three (3)". 5.2.3.A: "Front Yard - 4 feet ... Corner Front Yard - 6 feet ... Side Yard - 6 feet; Rear Yards - 8 feet". | **verified.** Matches (up to three accessory structures; the permit is the city's Residential Accessory Structure application). |
| Loris: Boat or camper | Over 17 ft, away from the lot's edges / Yes. A boat over 17 feet stays back from the edges of the lot. | City of Loris Zoning Ordinance (2024 copy) Sec. 7-10 | "No recreational vehicle or boat in excess of 17 feet shall be parked or stored in any required front or side yard setback area or within 5 feet of the rear lot line in a residential district; however, such use may be parked anywhere on a residential premise for a period not to exceed twenty-four (24) hours during loading or unloading, and recreational vehicles may be used for temporary lodging, up to seven (7) days." | **verified, tighten.** Matches in substance. Row 63 struck a similar cell ("Back yard, not near the lot lines"); "away from the lot's edges" is again looser than the rule, which is the required front and side setback and the last 5 feet at the back. The code's "in excess of 17 feet" may apply to the boat only or to both. Supported: "A boat over 17 feet stays out of the front and side setbacks and 5 feet from the back line." |
| Loris: Work truck | One, up to 2 tons / Yes, one, up to 2 tons. | Loris Zoning Ordinance Sec. 7-11(2) and (3) | "(2) Parking of vehicles, implements and/or equipment used for commercial, industrial, farm or construction purposes in the R-1.4, R-1.5, R-1.7 and R-2 Districts shall be limited to one vehicle per residence, with a capacity no greater than 2 tons. (3) Vehicles with capacity greater than 2 tons ... are prohibited from parking in the above referenced Zoning Districts, including the street/highway right-of-way in such districts, when not actively involved in commerce." | **verified.** Matches (R-1.4, R-1.5, R-1.7 and R-2 are all the residential districts in Table 1). |
| Loris: Short-term rental | Not listed in zoning, so not allowed / No. The town's zoning does not allow it. | Loris Zoning Ordinance Sec. 2-2 and Table 1 (printed page 11, an image), Sec. 3-7 | 2-2: "Where no symbol is shown on the table, the use to which it refers is not permitted in the indicated district. Where a given use or SIC code reference is not listed by the table, said use shall not be permitted." Also 2-2: "Where uncertainty exists relative to a given use not specifically listed by the table, the SIC Manual should be consulted." Table 1, Division I: Hotels and motels (701) P in C-1 and C-2; Bed and Breakfast Inns (7011) C in R-1.4, R-1.5, R-1.7, R-2, MU and P in C-2; Rooming and boarding houses P in R-2, MU, C-2. No short-term or vacation rental line. | **fix.** 14c states the reason (not listed); 14d turns it into a flat "No". The ordinance does not list a short-term rental use and says an unlisted use is not permitted, but it also sends uncertain uses to the SIC manual and no city page says what the zoning administrator does with a rental house. A bed and breakfast inn is a conditional use in the home zones. Supported: "Not a listed use in city zoning, and a use not listed is not permitted. Ask us; we ask the city about the address." (The city's general code was not found online.) |
| Loris: Shed or fence | Two sheds at most, 5 ft from line / Yes, up to two, in the side or back yard. | Loris Zoning Ordinance Sec. 7-7.1 and 7-7.2 | 7-7.1(1): "The number of accessory buildings shall not exceed two on any residentially zoned lot or parcel." (3): "Non-farm accessory buildings shall not exceed 50 percent of the Gross Floor Area (GFA) of the principal building or use." 7-7.2(2): "Accessory buildings, including garages, carports, domestic kennels, storage sheds ... Are permitted in required rear and side yards only" and "no such uses shall be closer than five (5) feet to any property line". | **verified, tighten.** Matches. Tighten: the two buildings include a garage or carport, so a buyer with a detached garage gets one shed, not two. No fence height was found in the ordinance (Sec. 7-4(3) only says fences may not block visibility). |
| Aynor: Boat or camper | No rule in town zoning / The town's zoning does not limit it. We check this for the lot you choose. | Town of Aynor Zoning Ordinance (amended through April 2026): Table 9-1, Sec. 4.06; Table 10-3 and the outdoor storage definition searched | Text searched for boat, recreational vehicle, travel trailer, trailer, truck, commercial vehicle, junk, inoperable, parking of. Only hits: OUTDOOR STORAGE definition ("Includes the storage of boats, RVs, and commercial vehicles"), the Highway 501 overlay's rules for non-residential outdoor storage, and sales and storage uses in business and industrial districts. No rule for a home lot. | **verified.** Matches. Limited to the zoning ordinance; the town's general code was not searched, and the page says "zoning" in both versions. Most Aynor-address houses for sale are outside the town (row 71). |
| Aynor: Work truck | No rule in town zoning / No limit in the town's zoning. | Aynor Zoning Ordinance, same search; Sec. 9.02.A (home occupations) | Home occupation (R-1, R-2, R-3) conditions: "Only one (1) person, not a resident of the dwelling is employed; and Not more than twenty-five percent (25%) of the total floor area of the dwelling is used"; no vehicle limit. | **verified.** Matches (zoning only). |
| Aynor: Short-term rental | Not named in town zoning / The town's zoning does not name it, so we ask the town for the lot you choose. | Aynor Zoning Ordinance Table 9-1 and Sec. 9.01 | Table 9-1, Residential: Single Family P in R-1, R-2, R-3; Multifamily; Home Occupations CU; Commercial: "Bed and breakfast (B&B's) SE SE SE"; "Hotels and Motels" P in B-1, B-2, LI. 9.01: "Uses other than those specifically called out in Table 9-1 which are of the same general character, as those listed may be deemed appropriate by the Board of Zoning Appeals." | **verified.** Matches and states no more than the source (the best-worded rental cell on the page). |
| Aynor: Shed or fence | Shed in the back yard, 5 ft from line / Yes, in the back yard, 5 feet from the line. | Aynor Zoning Ordinance Sec. 4.06 | "Accessory buildings are permitted provided they are located in rear yards and not closer than five feet (5') to any property line. Accessory buildings shall also comply with the setback requirements set forth for the district within which they are located." | **verified.** Matches. No fence height rule found (14c gave none). |
| Georgetown County, outside towns (14c; not in 14d): Boat or camper | Untagged trailers only in a building / (row removed in 14d) | Georgetown County Zoning Ordinance Sec. 407 (Art. IV); Sec. 392 (Travel Trailer) | 407: "Automotive vehicles or travel trailers of any kind or type without current license plates shall not be parked or stored on any residentially zoned property other than in a completely enclosed building." 392: "Travel Trailer. A vehicular or portable structure designed as a temporary dwelling for travel, recreation or vacation uses." No rule found on a boat or boat trailer (zoning documents Arts. III, IV and the district sections read; county code searched for boat, recreational vehicle, commercial vehicle). | **verified, tighten.** The source says travel trailers and automotive vehicles, not trailers of every kind. A boat trailer is not named. The reader with a boat learns nothing from the cell. Supported: "Cars and camper trailers without current plates only in a completely enclosed building; the zoning names no other limit on a boat. Ask us." |
| Georgetown County, outside towns (14c; not in 14d): Work truck | Untagged vehicles only in a building / (row removed in 14d) | Georgetown County Zoning Ordinance Sec. 407 and Sec. 414 (home occupation) | 407 as above. 414: "In any residential district, a customary, incidental home occupation as defined in Article III, Section 334, is permitted." No limit on a work truck found. | **verified, tighten.** True, but it answers a different question. The cell says nothing about a tagged work truck (no limit found). Same supported wording as the boat cell. |
| Georgetown County, outside towns (14c; not in 14d): Short-term rental | Listed for the RC and GRR zones / (row removed in 14d) | Georgetown County Zoning Ordinance Sec. 390, Sec. 608.203 (GRR), Sec. 609.102 (RC); the other district sections 600 to 631 searched for "tourist" | 390: "Tourist Home. A building designed as a single family detached dwelling unit ... intended to be occupied by transient visitors for short-term stays, not exceeding in 30 days." 609.1: "The following uses shall be permitted in any Resort Commercial District: ... 609.102 Tourist homes". 608.2: conditional uses in GRR include "608.203 Tourist home subject to the following conditions: 608.2031 One detached dwelling is allowed per lot. 608.2032 Each dwelling shall provide one parking space per bedroom." | **verified, tighten.** Matches: the word appears in only these two districts. "Listed" hides the difference: permitted in RC, conditional in GRR. The county code (Sec. 16-71 to 16-78) taxes residential lodging for transients at 3 percent. I found no county short-term rental ordinance. |
| Georgetown County, outside towns (14c; not in 14d): Shed or fence | Shed 5 ft from back line; fence 6 ft / (row removed in 14d) | Georgetown County Zoning Ordinance Sec. 411 and Sec. 341 | 411: "An accessory structure, which requires a building permit, may be located in the rear setbacks no closer than five (5) feet from the property line provided that: 1. No accessory structure in this portion of the setback shall exceed twelve (12) feet in height ... 2. No accessory structure shall contain habitable area". 341: "Fences shall not exceed an overall height of six (6')"; closed fences are not allowed in the front setback without Planning Commission approval. | **verified.** Matches (12-foot height and no living space in the 5-foot strip). |

### The sentences around the table

| Page sentence | Source | Verdict |
|---|---|---|
| "Short-term means under 90 days in Myrtle Beach, 90 or fewer in North Myrtle Beach and under 30 in Surfside Beach." (14c; cut in 14d) | MB App. A Sec. 203: "less than ninety (90) continuous days"; NMB Sec. 23-2: "ninety (90) days or less"; Surfside Sec. 17-396.10: "less than a calendar month or thirty (30) days" | Verified. It skips Conway ("not more than ninety (90) days", UDO 5.1.5) and Georgetown ("not exceeding in 30 days", Sec. 390), and North Myrtle Beach's fire code defines the term as under 30 days (Sec. 11-3). |
| "In Myrtle Beach, North Myrtle Beach and Surfside Beach, renting out a home needs a business license." (14d; 14c said "short or long term") | MB Sec. 11-25(f): "All persons or legal entities engaging in rental of a single property or more shall register the business and make application under this chapter." City page: "if you are renting a property, you need a business license." NMB Quick Reference: "Both short-term and long-term rentals require a City business license." Surfside Sec. 4-1 (any activity "with the object of gain") and Appendix A, NAICS 721199 Short Term Rentals | Verified for all three. Surfside's is the general clause plus the rate line, not a rental-specific sentence. The link on the page goes only to North Myrtle Beach's quick reference. Add for a buyer: NMB licenses do not transfer on sale, and the zoning office approves the address first in Horry County. |
| "In the towns, you can leave a boat in the driveway for a day to load and unload." | MB 1006.F, NMB 23-113(1)(b), Conway 5.2.6.A.2(4), Loris 7-10: each allows 24 hours for loading and unloading. Surfside and Aynor have no front-yard rule to be excused from | Verified ("a day" is the codes' 24 hours). |
| "On county roads, the county bans parking only where it posts a sign." | Horry Sec. 13-12(b), (c): the ban is where "official signage posted by the county clearly prohibits" parking, and it does not apply on a state highway or a privately owned street (row 64) | Verified. Most rural roads are state roads, where state law decides. |
| 14d: "With no HOA, the only limits on your lot are the town's, or the county's outside the towns." | The same section says a home with no HOA can still have deed restrictions (14c: "the limits on your lot are in the town's code, or the county's") | **Fix (V11).** "Only" contradicts the page. Supported: "The limits on parking, rentals and buildings on your lot are the town's, or the county's outside the towns, along with any deed restriction." |
| "the closing attorney's title search finds any deed restriction before you buy" | Row 65: closing and title search are "under the supervision of attorneys" (Doe v. McMaster, citing Buyers Service) | **Fix (V12).** The row does not say the search finds any restriction. Supported: "The closing attorney's title search covers the recorded restrictions." |
| "Most of the homes with no HOA fee around Conway, Loris and Aynor are outside the town limits, under the county's answers." (14d) | Row 71 (corrected): Aynor 20 of 23, Loris 54 of 71, Conway 79 of 121 outside any town; my recount from data/no-hoa-lots.json agrees (153 of 215, 71 percent) | Verified. |

### Myrtle Beach: the fence permit and the official source

The fence permit PDF stayed blocked (HTTP 403 from the city's own host and the revize mirror, by curl and by WebFetch). The official sources I used instead: (1) the city's Applications, Documents and Forms page, which lists "Fence Permit Application and Requirements" (the permit exists); (2) Municode, which the city publishes as its code, Sec. 1702.A.2.f for the heights and Sec. 302 for the permit; (3) the city's Planning and Zoning page and its news item R1468 for the rental rule: "Most traditional residential neighborhoods in the City of Myrtle Beach are NOT zoned for short-term rentals. 'Short-term' means any rental of less than 90 days. And if you are renting a property, you need a business license." and "City-wide, fewer than 30 houses in traditional residential zones are grandfathered for short-term rentals" (the Planning and Zoning page says "only 24"; I use neither number). A search tool's summary of the PDF says it cites Sec. 1702.A.2.f and the same 4, 6, 8 and oceanfront 4 foot heights; I did not open the PDF and do not rely on that summary.

### Rental zoning, one line each, as the city or town states it

- **Myrtle Beach:** allowed by right in RMV, MU-H, C6, A, E, HC1, HC2; by special exception in IR; blank (not allowed) in R5, R7, R8, R10, R15, RMM, RMH, RMH-MH. The city page agrees: no R district except RMV. The page's "single-family zones" is accurate and incomplete (tightening in the grid).
- **North Myrtle Beach:** no zoning restriction in general; some planned developments, development agreements and HOA documents may restrict it; business license; the city also has short-term rental parking (Sec. 21-45 to 21-49), trash and fire rules.
- **Surfside Beach:** R3 and C3 only (detached houses are also allowed in R3); the town's 17-506 required transient rentals to conform by June 1994.
- **Conway:** CC, CBD and WRD only, up to 90 days, city business license; an unlisted use is prohibited (4.1.E).
- **Loris:** no rental use in Table 1; an unlisted use is not permitted (2-2); a bed and breakfast inn is conditional in the home zones.
- **Aynor:** no rental use in Table 9-1; the Board of Zoning Appeals may deem a use of the same general character appropriate (9.01); a bed and breakfast is a special exception in R-1, R-2, R-3.
- **Horry County (outside towns):** no rental use in the use charts; the zoning administrator decides (204.H); the Treasurer requires zoning approval before a business license and bills a hospitality fee (3 percent outside the cities) and Code 19-8 a 0.5 percent local accommodations fee.
- **Georgetown County (outside towns):** "tourist home" (30 days or less) permitted in RC (609.102), conditional in GRR (608.203); the word is in no other district section; the county taxes it at 3 percent (Sec. 16-78).

### The rows, 137 to 144

| Row | Place | What the row says that I checked | Verdict |
|---|---|---|---|
| 137 | Myrtle Beach | Zones for visitor accommodation; blank cell = not allowed; 5 ft; fence 4, 6, 8; Sec. 11-25(f) | verified with corrected wording. All quotes found in the code. The fence PDF and rental packet were not read by R1; I found the city's own pages (above). Add oceanfront 4 ft, campers, and that R districts other than RMV are all closed to rentals. |
| 138 | North Myrtle Beach | Business license; "does not generally restrict STR locations"; 150 sq ft shed in R-1, R-1A, R-2, R-2A, R-3 | verified with corrected wording. The quotes and Secs. 23-2, 23-107(3) match. The row says no side or rear fence height was found: true, but Sec. 23-107(3) bans fences in required side yards east of Ocean Boulevard (Coastal Protection Overlay). |
| 139 | Surfside Beach | R3 and C3 only; shed rear yard, 5 ft, two; fence permit, 6 and 4 ft | verified with corrected wording. All quotes found. The row is right; the 14d card is not (V9). Add: sheds need a zoning permit (17-203); the R-3 zone also allows detached houses. |
| 140 | Conway | CC, CBD, WRD; accessory structures; fences 4, 6, 8 | verified. No quotes were on file; I found and read UDO 5.1.5 (permitted "in the CC, CBD, and WRD Zoning Districts"; "shall not exceed ninety (90) days"; business license), 5.2.1.A (rear yard only, 5 ft, 15 ft, three), 5.2.3.A (4, 6, 8; corner front 6), 5.2.6, 5.2.10. The row's 15-foot limit has the exception "unless it is located entirely in the buildable area". |
| 141 | Loris | Rental not listed, so not permitted; two accessory buildings; 50 percent; 5 ft | verified with corrected wording. No quotes were on file; I found Sec. 2-2 ("Where a given use or SIC code reference is not listed by the table, said use shall not be permitted") and Sec. 7-7. Corrections: Sec. 2-2 also says uncertain uses go to the SIC manual (so the flat "No" is too strong, V10); the two buildings include a garage; no fence rule found (Sec. 7-4(3) concerns visibility only). |
| 142 | Aynor | Sec. 4.06 and Table 10-3; no rental use; no boat or truck rule | verified. Sec. 4.06 quote exact. Table 9-1 (not Table 10-3) is the use table; Table 10-3 is the Highway 501 landscaping classes where "tourist home" appears. I searched the ordinance for boat, recreational vehicle, trailer, truck, commercial vehicle, junk and found no home-lot rule. The town's general code is not searched, as the row says. |
| 143 | Unincorporated Horry County | Use tables have no rental use; zoning administrator decides; 200 sq ft shed at 5 ft; fences 8 ft; 0.5 percent fee | verified with corrected wording. Quotes exact (Secs. 204.H, 402.A.1, 412.A; Code 19-8). Add: a fence over 7 ft needs a permit (412.B.1); the county business license needs zoning approval first (Treasurer); the Treasurer also bills a 3 percent hospitality fee outside the cities. The boat cell "anywhere" is not supported (V8). |
| 144 | Georgetown County | Tourist home RC and GRR; untagged vehicles; 5 ft; fence 6 ft | verified with corrected wording. Sec. 407 reads "Automotive vehicles or travel trailers", not trailers of every kind. Sec. 341 "Fences shall not exceed an overall height of six (6')"; Sec. 411 matches. "Listed" = permitted in RC, conditional in GRR. |

## Step 2: rows 145 to 148

### Row 145, the drives, and row 146, the walks

Drives (OSRM, no traffic, from the ledger's ends, run again today):

| Page claim | Row | Measured | Verdict |
|---|---|---|---|
| Socastee to the Surfside Beach pier, "about 15 minutes" | 145 | 14.65 min, 7.46 mi | matches |
| Plantation Point nearest accesses, "about 3 miles by road" | 145 | 2.72 to 3.06 mi (ten nearest accesses); foot route 3.1 mi (v6) | matches |
| Stanley Drive landing, "about 2 miles by road from the center of Garden City" | 145 | 1.98 mi, 5.95 min | matches |
| MarshWalk, "about 3 miles south by road" | 145 | 3.07 mi, 7.27 min | matches |
| McLeod Loris, "about 2 minutes by car from the center" | 145 | 0.58 mi, 1.60 min | matches (rounds to 2) |
| Windy Hill to Barefoot Landing, "3-minute drive" | 119 | 3.08 min | matches |
| Socastee: Rosewood Landing 2, Socastee Landing and Park "about 5" | 125 | 2.28; 4.76 | matches |
| Conway: Billy Witherspoon "6-minute"; beach "25-minute" | 128 | 5.76; 24.29 | matches |
| Country around Loris: McLeod Loris "9-minute" | 129 | 9.09 | matches |
| Loris: beach "about 35" | 48 | 36.36 | matches (nearest 5) |
| Aynor: beach "about 45", Conway Medical Center "about 30" | 51 | 44.41; 29.62 | matches |
| Aynor: Galivants Ferry Landing "about 6" | 106 | 6.48 (v6) | matches |

Walks (row 146): for each house placed on the county map, the foot route (routing.openstreetmap.de) to the nearest of its three closest public accesses, from the live DES layer (Horry, public access or beach park, 362 records), 82 houses:

| Area | Placed | Within 10 min (mine) | Row 146 | Median | Longest |
|---|---|---|---|---|---|
| Crescent Beach | 25 | 25 | 25 | 3.7 min | 8.2 min, 0.38 mi |
| Windy Hill | 18 | 16 | 16 | 4.4 | 10.6 min, 0.49 mi |
| Ocean Drive | 15 | 10 | 9 | 8.1 | 29.2 min, 1.36 mi (1019 Belle Dr) |
| Myrtle Heights | 4 | 4 | 4 | 2.9 | 4.8 min, 0.22 mi |
| Surfside Beach | 20 | 15 | 15 | 6.1 | 14.3 min, 0.67 mi |

**Verified.** 70 of 82 by my run against 69 in the row. Ocean Drive differs by one house (609 Elm St at 10.4 minutes sits on the line; the v6 access list had one fewer close access). The page's "9 of the 15" is the conservative figure. "Most" holds in all five areas (lowest share 60 percent, Ocean Drive; Surfside's longest walk is 14 minutes by my list, 25 by v6's). The page states no walk time, only "within a 10-minute walk" and "less than half a mile on foot" (Crescent Beach: 25 of 25, longest 0.38 mile) and "less than 5 minutes on foot" (Myrtle Heights: longest 4.8).

### Row 147, G1 to G5

| Check | Result |
|---|---|
| G1: "Most of those are in the areas below" (14c) | Holds, with the wrong base in the row. The row says 273 of the 457 detached no-fee houses outside a named subdivision. From data/no-hoa.json: 446 no-fee homes are listed "Not within a Subdivision" in the nine areas (row 130's 446 of 460); 273 of those 446 (61 percent) are in the union of the 16 areas' MLS lists; detached only, 263 of 429 (61 percent). 457 is the count of all detached houses (fee or no fee) outside a named subdivision in all ten cities. Correct the row: 273 of 446. The 14d short answer drops this sentence for "Most are on older beach streets ..." (V15). |
| G2: Plantation Point "too far to walk" | Holds: foot route 3.1 miles (v6); nearest accesses 2.72 to 3.06 miles by road (my table). |
| G3: "Windy Hill is the south end of North Myrtle Beach" | Gone from the page, as the row says. The page now gives the 1968 consolidation (SC Encyclopedia). |
| G4: Crescent Beach "from about 9th to 27th Avenue South" | Holds on the row's evidence: 825 Hillside Drive South (near 9th) to 703 27th Avenue South; Ingram Dunes at 9th to 10th Avenue South (nmb.us/783, v6). |
| G5: Ocean Drive "around Main Street" | Holds: the area polygon holds the Horseshoe on Main Street (v6). |

### Row 148, chips and the other lines

Share chip rule from the task and `shareWords` in the spec: "every" 100 percent; "almost all" 90 percent or more; "nearly 9 in 10" 85 to 89 percent; "most" over 60 percent (the code uses 60 and up); "more than half" over 50 percent.

| # | Area | Count | Share | Chip | Rule | Verdict |
|---|---|---|---|---|---|---|
| 1 | Downtown Myrtle Beach | 17 of 20 | 85.0% | nearly 9 in 10 | 85 to 89% | ok |
| 2 | Myrtle Heights | 4 of 4 | 100.0% | every | 100% | ok |
| 3 | Pine Lakes | 6 of 6 | 100.0% | every | 100% | ok |
| 4 | Plantation Point | 7 of 7 | 100.0% | every | 100% | ok |
| 5 | Windy Hill | 24 of 40 | 60.0% | most | > 60% | **boundary (V17)**: exactly 60.0%, not over 60 |
| 6 | Crescent Beach | 34 of 39 | 87.2% | nearly 9 in 10 | 85 to 89% | ok |
| 7 | Ocean Drive | 23 of 41 | 56.1% | more than half | > 50% | ok |
| 8 | Cherry Grove | 52 of 89 | 58.4% | more than half | > 50% | ok |
| 9 | Little River | 8 of 8 | 100.0% | every | 100% | ok |
| 10 | Socastee | 11 of 14 | 78.6% | most | > 60% | ok |
| 11 | Surfside Beach | 36 of 42 | 85.7% | nearly 9 in 10 | 85 to 89% | ok |
| 12 | Garden City Beach | 41 of 55 | 74.5% | most | > 60% | ok |
| 13 | Conway | 20 of 23 | 87.0% | nearly 9 in 10 | 85 to 89% | ok |
| 14 | Loris | 15 of 16 | 93.8% | almost all | >= 90% | ok |
| 15 | Country around Loris | 74 of 82 | 90.2% | most | > 60% | ok (90.2% would be "almost all"; the code says "most" on purpose, row 129: its map outline holds more fee houses; an understatement) |
| 16 | Aynor | 30 of 45 | 66.7% | most | > 60% | ok |

Price chips (14d: "Houses for sale here are listed at about $X"; 14c gave Cherry Grove and Surfside a sold-price chip, "usually sell for about $695,000" and "$705,000", from neighborhoods rows 94 and 136; both rows verified, and 14d dropped them for one measure, which also answers the sibling overlap with best neighborhoods).

| Area | Median list price of no-fee houses | Chip | Verdict |
|---|---|---|---|
| Downtown Myrtle Beach | $435,000 | about $435,000 | number matches; wording V6 |
| Myrtle Heights | $1,632,500 | about $1.6 million | number matches; wording V6 |
| Pine Lakes | $929,950 | about $930,000 | number matches; wording V6 |
| Plantation Point | $1,199,000 | about $1.2 million | number matches; wording V6 |
| Windy Hill | $746,450 | about $745,000 | number matches; wording V6 |
| Crescent Beach | $754,900 | about $755,000 | number matches; wording V6 |
| Ocean Drive | $664,450 | about $665,000 | number matches; wording V6 |
| Cherry Grove | $847,700 | about $850,000 | number matches; wording V6 |
| Little River | $419,250 | about $420,000 | number matches; wording V6 |
| Socastee | $249,900 | about $250,000 | number matches; wording V6 |
| Surfside Beach | $939,450 | about $940,000 | number matches; wording V6 |
| Garden City Beach | $1,442,000 | about $1.4 million | number matches; wording V6 |
| Conway | $287,000 | about $285,000 | number matches; wording V6 |
| Loris | $319,000 | about $320,000 | number matches; wording V6 |
| Country around Loris | $414,100 | about $415,000 | number matches; wording V6 |
| Aynor | $372,000 | about $370,000 | number matches; wording V6 |

Other row 148 lines: Windy Hill 0.1805 acre = 7,863 sq ft, "about 7,900" holds; Crescent Beach 0.175 acre = 7,623, "about 7,600" holds; country around Conway 79 of 488 no fee (16 percent) holds, so it is not an area; Longs 19 of 371 no fee holds; Little River 179 of 192 with a fee (93 percent) holds "almost all"; Loris lot median 0.3735 acre holds "about 0.4", and row 134's 0.49 is wrong. Plantation Point "has a voluntary HOA": see V5.

### Rows 145 to 148, status

145 verified. 146 verified. 147 verified with corrected wording (G1 base). 148 verified with corrected wording (V5; the price chip wording V6; Windy Hill V17).

## Step 3: the diff against 7fe9c3d, sentence by sentence

Method: I extracted every string literal from both files, listed the new or changed ones (131 in the 14c version), then read each fact sentence against its row and source, and the 14d changes (rules cards, short answer, guide, chips, prices) again. Rows 118, 121, 123, 128 and 132 (verified with corrected wording) and the v6 notes D1 to D34 and X1 to X5 were re-read against the new text, as lesson B30 asks.

### Old corrections: did the rewrite keep them?

| Old note | In the new text |
|---|---|
| Row 118 and v6 D1 to D4 (Myrtle Heights) | Kept: district, 1925 to 1945, Colonial Revival, two houses before 1950. One carry-over: the heading says "older beach houses in a historic district" (V20). |
| Row 121 (Ingram Dunes) | Kept, and "at 9th Avenue South" is gone. |
| Row 123, D18 (Cherry Grove ramp) | Kept, with the registration qualifier. |
| Row 128 (Conway oaks) | Kept: "streets were designed around its live oaks". |
| Row 132, D24, D25 (Garden City) | D24 replaced by miles (ok). D25's heading is now "marsh creeks and free beach parking", and a new unsourced Main Creek sentence came in (V4). |
| Row 64 (county boat and truck) | Not kept: the 14d card says "Yes, anywhere on your own lot" (V8). The struck list's row 64 entry only fires on "no limit ... work truck". |
| Row 63 (Loris cell "Back yard, not near the lot lines") | Near-return: "away from the lot's edges" / "stays back from the edges of the lot" is again looser than Sec. 7-10 (grid, Loris boat). |
| Row 62 and X2 (Surfside van) | Kept (21 ft and 7 ft 11 in). |
| Rows 43, 44 and D28 (trash) | Kept: "the Solid Waste Authority provides no curbside trash pickup". |
| Row 87 note (Bog-Off, "cooked together" not in the source) | Not kept (V16). |
| Row 85 note ("a listed blank fee is not proof of no association") | Partly: FAQ and short answer say "listed"; Plantation Point states a "voluntary HOA" as fact (V5). |

### Drifts

"Must fix" = the page says something the source does not, or contradicts it. "Tighten" = a small gap or a missing qualifier.

| # | Where | Page sentence now | Problem | Supported wording |
|---|---|---|---|---|
| V1 (must fix) | 3 Pine Lakes | "In 1946, the club sold 18 of its 27 holes for homes and kept nine." | Contradicts the source it links: the NRHP record (via Wikipedia's summary of it) says "a 27-hole golf course was built" and "The present 18-hole course dates to 1946"; neighborhoods row 209 says 1946 was the rename and "redesign of the present 18 holes". Pine Lakes plays 18 holes today, so "kept nine" is wrong; no source says holes were sold for homes. The linked SHPO page is behind a robot check (HTTP 403) | (cut it). If a club fact is wanted at all it is best neighborhoods' fact (V22): "The club's present 18-hole course dates to 1946." |
| V2 (must fix) | 3 Pine Lakes | "That is why the lots are big" | A cause the sources do not give (and the premise is wrong, V1) | (cut it) |
| V3 (must fix) | Prices (14d) | "Most are listed from $250,000 to $500,000: about 280 houses for sale" | 279 of 688 no-fee houses is 41 percent, the largest band but not most. 14c said "the largest group" | "The largest group, about 280 houses, is listed from $250,000 to $500,000, most of them around Conway, Loris and Aynor." |
| V4 (must fix) | 12 Garden City | "The county's Garden City boat ramp is on Main Creek, in the Murrells Inlet marsh. The Stanley Drive landing is about 2 miles by road ..." | Two names read as two ramps. SCDNR's list: "Garden City Boat Ramp. County landing. End of State Road 816, on Main Creek." The county's own list names only "Stanley Drive Landing, 292 Stanley Dr, Garden City" (water body "Atlantic Ocean"). "In the Murrells Inlet marsh" is in neither. No ledger row mentions Main Creek | "The county's Stanley Drive landing is about 2 miles by road from the center of Garden City." Drop the Main Creek sentence unless a row shows the two names are one ramp. |
| V5 (must fix) | 4 Plantation Point | "Plantation Point has a voluntary HOA" | Secondary source. Row 85: "a web search found listings that call Plantation Point a voluntary HOA"; one other listing says "no HOA". Primary: the county parcel record shows an association (OwnerName "PLANTATION POINT HOA", PIN 42015020011, "17 BYPASS; COMMON AREA"), so an HOA exists; "voluntary" is unconfirmed | "Plantation Point has an HOA that owns common land [Horry County parcel record]; we check whether membership is optional." |
| V6 (must fix) | Chips (14d) | "Houses for sale here are listed at about $X" | The number is the median list price of the houses with no fee (row 148, rows 116 to 129), not of all houses for sale here. In Cherry Grove 37 of 89 homes have a fee. Wrong population for the words "houses for sale here" | "Houses with no HOA fee here are listed at about $X." |
| V7 (must fix) | 15 Around Loris, Guide, Aynor | "lots of typically about 0.9 acre" (heading "new houses on almost an acre"; guide "an acre ... around Loris") | The 0.89 median is of the 27 houses matched to a county lot, of 74 with no fee. The 19 new houses among them have a middle of about 0.73 acre; 11 of the 27 are under 0.6 acre. New houses are 65 of 74, so the claim describes a different group from the headline's "new houses" | "Of the 27 houses we could match to county lots, the middle lot is about 0.9 acre; the 19 new ones have a middle of about 0.7." Guide: "half an acre or more" for around Loris; heading "new houses on large lots". |
| V8 (must fix) | What you can do (table) | Horry County boat cell: "Anywhere on your lot" (14c) / "Yes, anywhere on your own lot." (14d) | See the rules grid: row 64's approved wording was "sets no rule"; Sec. 402 and 907.D reach accessory uses and outdoor storage forward of the house | "The county's zoning names no limit on where you park a boat on your lot. We check the lot's zoning." |
| V9 (must fix) | What you can do (table) | Surfside rental cell (14d): "not the single-family ones" | See the rules grid: R-3 allows detached houses and short-term rentals | "Only in the R-3 and C-3 zones; not in R-1 or R-2. We check the address." |
| V10 (must fix) | What you can do (table) | Loris rental cell (14d): "No. The town's zoning does not allow it." | See the rules grid: an unlisted use is not permitted, but the ordinance sends uncertain uses to the SIC manual and no city source says it bans rental houses | "Not a listed use in city zoning, and a use not listed is not permitted. We ask the city about the address." |
| V11 (must fix) | Table prose (14d) | "the only limits on your lot are the town's, or the county's outside the towns" | "Only": deed restrictions (the page says so two sections later), flood and building codes, state law and the SC DOT on state roads also limit a lot. 14c said "the limits on your lot are in the town's code, or the county's" | "The limits on parking, rentals and buildings on your lot are the town's, or the county's outside the towns, along with any deed restriction." |
| V12 (must fix) | Table prose | "the closing attorney's title search finds any deed restriction" | Row 65 supports that the title search is done under an attorney's supervision, not that it finds "any" restriction (an unrecorded one is not in a title search). Owner rule B27 (we do the work) also fits "we read the recorded restrictions" | "The closing attorney's title search covers the recorded deed restrictions." |
| V13 (tighten) | Guide | Label "A 10-minute walk to a beach access: Crescent Beach, Windy Hill, Ocean Drive, Myrtle Heights and Surfside Beach" | Row 146: 25 of 25, 16 of 18, 9 of 15, 4 of 4, 15 of 20. Ocean Drive is 60 percent. The label drops "most" that every entry body keeps. Supported: "Most houses within a 10-minute walk of a beach access" | "Most houses within a 10-minute walk of a beach access:" |
| V14 (tighten) | 1 Downtown | "A wooden boardwalk follows Withers Swash ... from Third Avenue South to Broadway and Collins Street" | The city page: the Withers Swash Park trail extension "stretches from Third Avenue South to Broadway and Collins Streets" and "features a wooden boardwalk that parallels one of Myrtle Beach's oldest waterways" (a 2018 photo-of-the-week). The boardwalk is part of a trail, not all of it. "Follows" is the personification STANDARD P10 lists for roads and routes. Supported: "A trail extension with a wooden boardwalk runs beside Withers Swash ..." | "A trail extension with a wooden boardwalk runs beside Withers Swash from Third Avenue South to Broadway and Collins Streets." |
| V15 (tighten) | Short answer (14d) | "Most are on older beach streets, in river towns and on country land, in the areas below" | Of the 389 no-fee houses with a known year in the 16 areas, 163 (42%) were built before 1990. Downtown has 6 of 17, Aynor 6 of 30, around Loris 5 of 74. The antecedent of "Most" is also unclear (56 percent of all 688 no-fee houses are in the 16 areas) | "Most are in the areas below, on beach streets, in river towns and on country land." (drop "older") |
| V16 (tighten) | 14 Loris | "chicken, rice and sausage cooked together" | Row 87: "'cooked together' is not in the source; safe to keep 'chicken, rice and sausage' only" | "Its namesake dish is chicken bog: chicken, rice and sausage." |
| V17 (tighten) | Chips | Windy Hill chip "most homes for sale" at 24 of 40 = 60.0% | The coordinator's rule is "most" over 60 percent; the code and row 148 use 60 percent and up. At exactly 60 percent the plain words are "6 in 10" (the v6 body line) or more than half. Fix the rule or the chip | Chip "6 in 10 homes for sale", or change the rule to "60 percent or more" in row 148 and the thresholds |
| V18 (tighten) | Prices | "two-thirds of them within half a mile of the beach" ($750,000 and up) | Row 85: 141 of 221 = 63.8 percent, "about 2 in 3". The page drops "about" | "about two-thirds of them within half a mile of the beach (141 of 221)" |
| V19 (tighten) | FAQ | "A few homes listed with no fee are in a neighborhood with a club you can choose to join and pay." | Rests on the same listing remarks as V5 (row 85); no primary source | (cut the club clause, or name a primary source) |
| V20 (tighten) | 2 Myrtle Heights | Heading "older beach houses in a historic district" | v6 D4: neither older house for sale is shown to be inside the district (406 37th Ave N is about 160 m and 3500 N Kings Highway about 300 m from the new oceanfront house; the nomination says the district enters Kings Highway "in only a few places"). The body text is careful; the heading is not | A heading that does not place the houses for sale in the district, for example "a historic district beside the beach" (the two older houses for sale are not shown to be in it) |
| V21 (tighten) | 15 Around Loris | "the country west and south of Loris is still farm and forest land" | No row; SC Encyclopedia supports only the history ("a refuge of yeomen farmers") | (cut it, or add a row: the country around Loris is MLS regions 01a, 05a, 06a; no land-use source yet) |
| V22 (tighten) | 3 Pine Lakes (sibling) | "which opened in 1927" and the 1946 club story | SIBLING-OWNERS: Pine Lakes club history (1927, Sports Illustrated) belongs to best neighborhoods; this page may give older streets, what you can keep at home and city trash pickup. Best's Pine Lakes entry opens with the same 1927 sentence | Give older streets, what you can keep at home and city trash pickup; leave the 1927 sentence to best neighborhoods |

### Units that match (78)


**Head**

- Sub line: where you can keep a boat or a work truck at home (14c); "Room for a boat, a truck and a shed, from Little River to Aynor" (14d) [No row; a pointer to the rules section, true as far as each town's rule allows (rows 58 to 64, 137 to 144)]

**Short answer**

- "Almost every house for sale outside a named subdivision is listed with no ... HOA fee" [Row 130: 446 of 460 (97%); recomputed from data/no-hoa.json]
- "Most of those are in the areas below" (14c) [273 of 446 (61%) of those listings are in the 16 areas (my recount); row 147 G1 gives the wrong base, see Step 2]
- "about three in four houses built before 1990 ... fewer than one in five built since" [Row 130: 278 of 360 (77%), 410 of 2,254 (18%)]

**Guide**

- A boat at home: Cherry Grove, Little River, Socastee, Garden City (14c adds "by a county landing") [Rows 123, 125, 132, 106; landings on the county's list]
- An old town center: Downtown Myrtle Beach, Conway, Loris [v6 D9 fix applied (no "older houses")]
- Half-acre lots: Pine Lakes and Plantation Point [Row 117: medians 0.448 and 0.458 acre]

**1 Downtown**

- Most houses within half a mile of the ocean shore [Row 116: 13 of 17 placed]
- Train Depot on Broadway: built 1937, National Register, restored and reopened [City page: "Built in 1937, the Depot was restored and re-opened in 2004"; "listed on the National Register of Historic Places"; 851 Broadway Street. No ledger row (gap G6)]
- Collins, Chester and Dunbar: older houses built 1955 to 1960 [Listings: 611 Collins 1958, 305 Chester 1955, 1008 Dunbar 1960]
- Eight new houses on 12th Avenue South, no fee in their listings [Eight addresses on 12th Ave S, all built 2026]
- Lots typically about 0.2 acre [Row 116: 0.206]

**2 Myrtle Heights**

- Historic district along Ocean Boulevard; Myrtle Heights its southern part, up to 40th Avenue North [v6 D1 wording applied]
- Houses built about 1925 to 1945; Colonial Revival most common, some Bungalow and Craftsman [v6 D2, D3 wording applied]
- Two houses for sale built before 1950 and a new oceanfront house; a beach access under 5 minutes on foot [Row 117 (1938, 1946, 2026); my walks: 4 of 4, longest 4.8 minutes]
- Typical price the highest of any area on the list [Median $1,632,500 is the highest of 16 (v6 D5 fix applied)]

**3 Pine Lakes**

- Lots typically almost half an acre, more than twice a downtown lot; houses built from the 1960s on [Row 117: 0.448 against 0.206; built 1961 to 2016]
- "These streets are around Pine Lakes Country Club, which opened in 1927" [Neighborhoods row 209 (club's own page, NRHP nomination). Sibling issue, see Step 4]
- The newer Preserve at Pine Lakes has an HOA [Neighborhoods rows 4, 5 (fee listed); row 117]

**4 Plantation Point**

- Outside the city limits; Annandale, Arundel and Brookgreen; lots about half an acre; houses from the late 1980s on [Row 117 (town field null; built 1987 to 2021; 0.458)]
- Nearest public beach accesses about 3 miles by road, too far to walk [My OSRM table: 2.72 to 3.06 miles; foot route 3.1 miles (v6)]

**5 Windy Hill**

- Developed by Conway investors after World War II; joined North Myrtle Beach in 1968; most built before 1990 [SC Encyclopedia, North Myrtle Beach; data: 11 of 20]
- Most within a 10-minute walk of a public beach access; accesses at the ends of the streets [Row 146: 16 of 18 (my re-run 16 of 18); city access list names street ends]
- Barefoot Landing a 3-minute drive; Yow Park a 1.5-acre city park among the Windy Hill streets [OSRM 3.08 min; nmb.us/496: "1.5 acre neighborhood park", 508 Windy Hill Road]
- Typical lot about 7,900 square feet [0.1805 acre = 7,863]

**6 Crescent Beach**

- Ingram Dunes: last remaining maritime forest, 30-foot dunes, half-mile trail, on Hillside Drive [Row 121; nmb.us/783 (v6: match)]
- The middle of North Myrtle Beach, about 9th to 27th Avenue South; each placed house under half a mile on foot from an access [G4; row 146: 25 of 25, longest 0.38 mile (my re-run)]
- Most built before 1990; Hillside, Holly, Perrin, Strand [Data: 21 of 34 (62%); v6]
- Typical lot about 7,600 square feet [0.175 acre = 7,623]

**7 Ocean Drive**

- A pavilion and amusement park drew crowds who danced the shag (Ocean Drive and Crescent Beach area) [v6 D29 wording; SC Encyclopedia]
- State made the shag its official dance in 1984; free Music on Main concerts on Thursdays each summer [S.C. Code 1-1-665 (1984 Act No. 329); v6 D30 wording]
- Ocean Drive Estates: five houses from the mid-1980s listed for less than $370,000 [Row 83: $255,000 to $369,000, built 1984 and 1985]
- Of 15 placed houses, 9 within a 10-minute walk [Row 146 (my re-run: 10 of 15; one house at 10.4 minutes, see Step 2)]

**8 Cherry Grove**

- Canals created as early as the 1950s; city dredged twice since 2016 for boat access to House Creek and the Waterway [v6 D15, D16 wording]
- City boat ramp at 53rd Avenue North: two-lane launch, kayak launch, fishing pier, floating dock, fish cleaning station [Row 123; nmb.us/490]
- Residents can register for free parking, limited vehicles; Heritage Shores reached on elevated boardwalks [v6 D18 wording; row 123]
- Every home for sale outside a named subdivision listed with no fee (43 of 43) [Data file]
- Almost every home in a high-risk flood zone; about 415 properties pay about $1,700 a year on the county tax bill [Row 74 (98%); rows 181, 182 (414 + 2 parcels, $1,718.75)]

**9 Little River**

- First permanent settlement; first organized offshore fishing trips for a fee in South Carolina, about the early 1920s [SCDNR (Burrell), The Recreational Fishery in Little River; v6 D20 wording. One source for the superlative]
- Blue Crab Festival each May; after the 1983 jetties boats could cross the bar at any time of day [v6 D21 wording]
- T. Craig Campbell landing; almost all homes in named subdivisions list a fee (179 of 192) [Row 124; county landings list]
- None of these houses within a mile of the ocean [v6: match]

**10 Socastee**

- Rosewood Landing 2 minutes, Socastee Landing and Park about 5; Surfside pier about 15 minutes [OSRM 2.28, 4.76, 14.65]
- Most built 1979 to 1986 in Rosewood Estates and Cimerron Plantation [Row 125: 9 of 11]
- Swing Bridge mid-1930s; one of the two oldest of seven swing-span bridges in the state's inventory; park with multi-purpose fields, picnic areas, disc golf, trails, playground [Row 126; v6 D22, D23 wording]

**11 Surfside**

- Two boats or trailers and a work van or pickup within the size limit [Row 62 (X2 fix applied)]
- Most within a 10-minute walk; Fuller Park, with a playground, about 0.1 mile from the middle of the ocean side [Row 146: 15 of 20 (mine 15 of 20); neighborhoods row 196 (X1 fix applied)]
- The town picks up trash at the curb [Surfside Code Sec. 7-26: collected "at curbside or at the edge of the vehicular travel-way"]
- About 1 in 4 ocean-side homes in a high-risk flood zone; lender will almost always require insurance [Neighborhoods row 143; v6 D26 wording]

**12 Garden City**

- Stanley Drive landing about 2 miles by road from the center [OSRM 1.98 miles (v6 D24 fix applied)]
- Free parking all year at every oceanfront access in Garden City; most houses within half a mile of the beach [County beach-access page: "Free, year-round parking is offered at all oceanfront beach accesses in Garden City" (no ledger row, gap G7); row 132: 15 of 18]
- MarshWalk about 3 miles south by road; Huntington Beach State Park farther south, known for birding and surf fishing [OSRM 3.07; park page: "top bird-watching", "finest surf fishing" (the park's own words)]
- Most houses in a high-risk flood zone; lender will almost always require insurance [Row 132: 15 of 18; v6 D26 wording]

**13 Conway**

- County seat, on a bluff of the Waccamaw; streets designed around its live oaks; the Riverwalk runs along the river [Row 128; row 91 ("runs along the river")]
- City Hall was the county courthouse, finished in 1825; Billy Witherspoon Landing a 6-minute drive [Row 99; OSRM 5.76]
- Typical house within a mile and a half of downtown built about 1970; beach a 25-minute drive [Row 128 (median 1969.5); OSRM 24.29]

**14 Loris**

- Grew up around a railroad depot, became a town in 1902; tobacco markets thriving in Conway and Loris soon after [Row 98; SC Encyclopedia: "By 1903 ... tobacco markets were thriving in Conway and Loris"]
- Older houses typically from the 1960s on about 0.4 acre; hospital about 2 minutes from the center; beach about 35 minutes [Row 129 (median 1964, 0.37); OSRM 1.60 min; 36.36 min]

**15 Around Loris**

- Most new, built in 2024 or later; no town limits, room for a boat, a camper and a shop [Row 129: 65 of 74; no town (row 71)]
- Waccamaw River Heritage Preserve protects 28 miles of the river, riverside camping on its land; McLeod Loris 9 minutes [sctrails.net page: "The preserve protects 28 miles of the Waccamaw River", "Riverside camping is allowed on preserve land" (no row, gap G8; the page gives no distance to the houses); OSRM 9.09]
- Outside the towns the Solid Waste Authority provides no curbside trash pickup; hire a hauler or use a county drop-off center [Rows 43, 44 (v6 D28 wording)]

**16 Aynor**

- Aynor Harvest Hoe-Down each September, started by the Pilot Club; state law names the third Saturday [Row 86]
- Lots typically about an acre; Galivants Ferry Landing about 6 minutes [Row 129 (1.057 acre, 23 of 30 placed); OSRM 6.48]
- More than half of the houses new; in and around the town every home had no fee; 45 minutes to the beach, 30 to Conway Medical Center [17 of 30; 15 of 15 (MLS region 17a); OSRM 44.41, 29.62]

**Table prose**

- Short-term means under 90 days in Myrtle Beach, 90 or fewer in North Myrtle Beach, under 30 in Surfside Beach (14c) [App. A Sec. 203; NMB Sec. 23-2; Surfside Sec. 17-396.10]
- In Myrtle Beach, North Myrtle Beach and Surfside Beach, renting out a home needs a business license [MB Sec. 11-25(f); NMB Quick Reference; Surfside Sec. 4-1 and Appendix A]
- In the towns you can leave a boat in the driveway for a day to load and unload; on county roads the county bans parking only where it posts a sign [MB 1006.F, NMB 23-113, Conway 5.2.6, Loris 7-10 (24 hours); Horry Sec. 13-12 (row 64). Surfside and Aynor have no such rule at all]

**Prices**

- "It depends on the area more than on the fee" (14c) [No row; medians run $250,000 to $1.6 million by area, and no-fee medians exceed fee medians by 13 to 87 percent within an area (data/no-hoa.json). Gap G9]
- About 60 houses under $250,000, most built before 1990, about half in and around Conway [Row 82: 57; 40 of 57 (70%); Conway 28 (49%)]
- About 280 from $250,000 to $500,000, the largest group, most of them around Conway, Loris and Aynor [Row 83: 279; Conway 94 + Loris 64 + Aynor 22 = 180 (65%)]
- About 130 from $500,000 to $750,000, a third within half a mile of the beach [Row 84: 131; 47 (36%)]

**What you give up**

- No HOA means no shared pool, clubhouse or gate; a home with no HOA can still have deed restrictions [Definition of the case; row 85 (Tilghman Beach covenants)]

**FAQ**

- Park a boat at my house in Myrtle Beach: yes, on your own lot, within the town's rule [MB Sec. 14-305(c), 1006.F]
- Carolina Forest, Grande Dunes, Market Common, Burgess: almost every home has a fee; Longs and the country around Conway: most have a fee too [Row 130; row 148: Longs 352 of 371 (95%); country around Conway 409 of 488 (84%), my recount 79 of 488 no fee]
- More than half of North Myrtle Beach homes listed with no fee; almost all of those in Cherry Grove, Crescent Beach, Windy Hill, Ocean Drive [141 of 254 (55.5%); 133 of 141 (94%)]
- Inside the towns the town picks up trash; outside, hire a hauler or use a drop-off center [Rows 43, 44]

**Story**

- Teresa: 20-foot boat; the city's front-yard rule applies; houses outside the city under the county's rules [Rows 59, 64 (the 14c wording no longer says the county has no rule)]

**Table prose**

- "Most of the homes with no HOA fee around Conway, Loris and Aynor are outside the town limits, under the county's answers" (14d) [Row 71: Aynor 20 of 23, Loris 54 of 71, Conway 79 of 121 outside any town (153 of 215, 71%)]

## Step 4: sibling check (batches/2026-10-b/review/SIBLING-OWNERS.md)

I searched the four sibling previews (best neighborhoods, affordable, gated, The Farm) for every place and fact this page names.

| Fact or place | Owner (SIBLING-OWNERS) | This page | Verdict |
|---|---|---|---|
| Pine Lakes club history (1927, Sports Illustrated, first golf course, Robert White) | Best | "which opened in 1927" (and the 1946 club story, wrong, V1) | **Drift (V22).** Best's Pine Lakes entry opens with "Pine Lakes Country Club opened in 1927 as Ocean Forest Country Club". This page may give older streets, what you can keep at home, city trash pickup (it gives none of the last two now). |
| Cherry Grove: canals, ramp, dredging fee, flood zone | No HOA | Canals, ramp, dredging fee, flood | Matches the table. Best's Cherry Grove entry has the pier, the shark and the dog rule and none of the canal facts. |
| Cherry Grove and Surfside price ("usually sell for about $695,000" and "$705,000") | not assigned | 14c chips repeated Best's two price sentences word for word; 14d chips use the no-fee list price instead | Cleared by 14d. Both pages now give different numbers on purpose: this page's median list price of no-fee houses ($850,000 and $940,000), Best's median sale of all houses. |
| Surfside: pier and history | Best | none (parking rules, beach access, town trash pickup) | Matches. |
| Share: "most homes for sale are listed with no HOA fee" (Cherry Grove, Surfside) | this page's subject | Best's entries repeat the share | Best's sentence is Best's concern; it agrees with this page's counts (52 of 89 and 36 of 42). |
| Conway "riverwalk on the Waccamaw" | none | "the Riverwalk runs along the river downtown" | Affordable also mentions the riverwalk (one clause, for the Fairways). Low overlap; different angle. |
| MarshWalk and Huntington Beach State Park | none | distance and one clause on the park | Affordable gives the MarshWalk's length and music and the park's alligators and beach miles, from Wynbrooke. Different facts. |
| Shag, Main Street, Ocean Drive | none | pavilion, state dance 1984, Music on Main | Gated gives the Society of Stranders festivals on Main Street. Different facts. |
| The Farm, Carolina Forest, Grande Dunes, Market Common, Burgess | The Farm / Gated / Best | one FAQ line: almost every home has a fee | One line, no overlap in facts. |

## Step 5: times and distance words

All drives were re-run (Step 2 table); all 12 rows match the rounding rule (under 15 minutes to the minute, over 15 to the nearest 5). I read the page against `rules/distance-words.json`: none of "a short drive", "close by", "a few blocks", "just across", "a few minutes", "walking distance" is on the page. Words not on that list that I looked at: "among the Windy Hill streets" (Yow Park, 508 Windy Hill Road; the city says 5 blocks from Highway 17 and 4 from the ocean: supported), "beside the house" (Aynor, a lot-layout claim, not a distance), "nearby" (not used). Walks are given only as "within a 10-minute walk" and "less than half a mile on foot"; both re-run (Step 2).

## Step 6: struck-check

`node tools/struck-check.js --batch batches/2026-10-b --preview <scratchpad>/preview/b --strict` on the 02:33:59 build (the 14d cards, short answer and chips) and again on the 02:51:59 build. Before my edit: **no-hoa-homes (99 patterns): no struck wording.** No old struck wording came back; the drifts above are new wording, which a struck list cannot catch (lesson B45), so each gets an entry now.

I added **28 entries** to `no-hoa-homes-struck.json` (92 before, 120 now): V1 to V16, V18 to V22, and the grid items R1 to R4, R7, R8, R10 (Horry truck and rental wording, Myrtle Beach camper and rental wording, Loris sheds, Georgetown vehicles, North Myrtle Beach rental). V17 has no entry: the Windy Hill chip is built by `shareWords` and its text is right for every other area at 90 or more. `node tools/struck-check.test.js`: **all controls pass** (every entry fires on its own struck wording; no approved wording fires). One run showed a failure in `gated-communities-struck.json` (gated 22 and 176) while another verifier was editing that list; it passed on the next run and is not mine.

After my edit, on the 02:51:59 build: **no-hoa-homes (127 patterns): 43 struck phrases found**, as intended: V6 on all 16 chips, V7 on 3 sentences, and one each for V1, V2, V3, V4, V5, V8, V9, V10, V11, V12, V13, V14, V15, V16, V18, V19, V20, V21 and R1, R2, R3, R4, R7, R10. The V22 and Georgetown (R8) entries do not fire: those sentences are no longer on the page. The run's total was 63 struck phrases on the pages in all (the other pages are other verifiers' work). No distance word from `rules/distance-words.json` is on the page. The writer applies the wording in the Supported column and the check goes quiet again.


## Ledger gaps (the sentence is true by my check, but no row holds it)

- G6: Myrtle Beach Train Depot (built 1937, National Register, restored and reopened 2004, 851 Broadway Street): the city's depot page.
- G7: free year-round parking at every oceanfront access in Garden City: the county's beach access page.
- G8: Waccamaw River Heritage Preserve, 28 miles protected, riverside camping: sctrails.net; the page gives no distance from the houses around Loris.
- G9: "It depends on the area more than on the fee" (14c): data/no-hoa.json medians; no longer on the page.
- G10: the Pine Lakes 1946 sentence has no row and a blocked source (V1).
- G11: Garden City Main Creek (V4).
- Rows to add for the rules prose: Secs. 1702.A.2.f oceanfront, 23-31 fences, 17-203, 4-1, Loris 2-2 Table 1 (an image), Horry 927.F and 907.D, and the Treasurer's zoning-approval line.

## Notes for the writer

- Do not state an absence as a permission ("anywhere", "No limit"): say "names no limit" and the code searched (B11, B15).
- Say what a small sample shows (B48): the 27 matched lots around Loris and the 23 around Aynor are the older and the placed houses; new houses lack county lots.
- STANDARD P10 candidates (the site build decides): "A wooden boardwalk follows Withers Swash" (V14) and "the Riverwalk runs along the river" (row 91 approved it).
- The 14d section text says "the cards" and the FAQ and one entry still say "the table below" / "the table under What can you do at home"; the markup is a table.
- If the Georgetown County row comes back, use the grid's supported wording for its boat, truck and rental cells; if it stays out, the page should say "outside the towns" means Horry County only (it does: the row is "Outside the towns, Horry County"), and the 15 Georgetown listings in MLS region 27a (row 144) have no row on the page.

## Status

Rows 137 to 144: see Step 1. Rows 145 to 148: Step 2. New ledger row 166, "rewrite check (v7, round 14c)" (numbered after the writer's reserved 149 to 165): **wrong in part (v7)**. Eight must-fix sentences on the page (V1 to V5, V7, V11, V12), one must-fix chip wording (V6), three must-fix table cells (V8 to V10), eight tightenings and one sibling drift. The struck list has an entry for each.
