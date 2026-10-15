# Affordable places to live, row 228 and rewrite check v8 (round 14g, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before. Task: check ledger row 228 against its sources, and read every sentence that round 14g (commit c2a16cd) changed or newly states (lessons B30, B45, B48, B51). I applied B48 hard to the home descriptions. I did not edit the spec.

Spec read: `batches/2026-10-b/specs/affordable-places-to-live.js` at c2a16cd (md5 19237eef...), diffed against 49d81c1, the v7 state (40 insertions, 34 deletions). The checkout has since moved to round 14h (aadd648, spec md5 fa15112f..., row 229). The shared preview in `.../preview/b` was rebuilt from 14h at 04:33 UTC. To check c2a16cd I built it with `tools/mkpage.js` in a private copy of the website work tree (no clone) and ran the struck check on that page.

The "new line under the H1" is the dek (`sub`): "Affordable neighborhoods near Myrtle Beach where a budget still buys a garage, a pool or a new house."

## Sources I opened myself

- Horry County GIS, re-queried today: layer 24 (Parcels), 22 (Addresses), 27 (Building Footprints), 31 (Municipalities). The parcel layer has no year built and no square feet. Counts, lots and tax districts come from it. Era and size come from listing fields.
- Listing pages (no Zillow page): mbcoastalhomes.realgeeks.com property pages (robots allow `/property/`) and tracimiles.com pages (these carry the structured fields: Parking Garage, Patio and Porch Features, PrimaryBedroom level). The realgeeks pages show only remarks for parking, so they undercount garages; I used tracimiles for garage, porch and main-bedroom counts.
  - Parkview (17th Ave S): 28 listings, 27 homes, 2023 to 2026.
  - Fairways at Wild Wing: 44 listings, 41 homes.
  - Sawgrass East: 45 listings, 41 homes.
  - Wynbrooke: 200 listings, all years on the site.
  - Polo Farms: 33 listings, 31 homes.
  - Golf and Yacht Club: 94 older-part listings, 91 homes, 2023 to 2026. These pages were cached by earlier agents; I opened 4 of them live and every field matched. Seven newer-section listings (Sebring Ln, Aqua Vista Ct, Blade Beak Ln) are left out.
- Lennar: Forestbrook Village, Victory Point, the warranty page. D.R. Horton: The Townes at Amber Bluff. SC Department of Insurance: Cost of Homeowner's Insurance. mbgyc.com (it answers only a browser user agent). ospreymarina.com.
- OSRM, the Census geocoder and Nominatim for the drives.

A sample from listings is what the listings say. It is not every home. I say so where a claim rests on one.

## Result

- Row 228: **wrong in part (v8)**. Round 14g changed or newly states **51 fact-bearing units**. **42 match. 9 drift**, in 7 entries (D27 to D33). None must be dropped; each is one phrase.
- v7 D21 to D26 are applied. **No new drift in those six sentences** (table below).
- The 14g writer fixed the B48 problem for most entries. The county counts, the lot size, the builder facts, the Fairways home facts, the Golf and Yacht Club year, bedrooms and baths, the Wynbrooke and Polo Farms home facts all hold on samples of 28 to 200 listings. The 9 drifts are the places where the writer used a 2 of 2 listing detail ("The ones on the market lately"), a size from a 12-listing sample, a phrase about street names, or a distance word.
- `node tools/struck-check.js --batch batches/2026-10-b --preview ... --strict`, affordable only:
  - Before my entries, on the shared preview as built from c2a16cd at 04:00: **affordable-places-to-live (138 patterns): no struck wording.** The list did not catch D27 to D33 because they are new wordings.
  - After my 9 entries (147 patterns), on c2a16cd rebuilt in my private copy: **9 struck phrases**, one for each drifting unit.
  - On the shared preview as it stands now (rebuilt from 14h at 04:33): **5 struck phrases** (D28, D30, D31, D32, D33). 14h already dropped the street names, the Indigo Creek line and the chart label.
- `node tools/struck-check.test.js`: **all controls pass** (140 entries). Two earlier `use` texts changed (rows "affordable 189" and "affordable 189, 194"): their approved wording "typically about 1,350 square feet" is overturned by D28 and would have fired the new entry.
- Sibling check: passes, with two notes. Times: every changed time re-run and holds; no banned distance word. One distance (D32) and one comparison (D29) go past the measure.

## Row 228 item by item

### 1. Parkview

| Claim | Check | Result |
|---|---|---|
| "a four-minute drive from the beach" | Row 164 and 199 (4.0 min, v1). Inputs unchanged. | holds |
| "about 200 townhomes" (unchanged) | 196 parcels coded 109 with a building, near Pinwheel Loop. | holds |
| "Built in the mid-2000s" | 28 listings: built 2004 (8) and 2005 (20). | holds |
| "two or three bedrooms" | 2 bedrooms in 19, 3 in 9. | holds |
| "about 1,050 to 1,350 square feet" | Heated area 1,012 to 1,417, middle 1,281. Plans repeat at 1,060, 1,268, 1,319 and 1,354. 25 of 28 are inside 1,050 to 1,360. | holds ("about") |
| "The ones on the market lately have had vaulted ceilings, a covered front porch and a screened back porch" | 2 of 2 listings in row 215. Over the 28 listings: vaulted ceilings 14, front porch 18, screened porch 16, all three 6 (21 percent). In the last 12 months (12 listings): vaulted 8, front porch 9, screened porch 5, all three 3. The 3 listings active now: vaulted 3, front porch 2, screened porch 0. | **DRIFT (D30)** |

The county parcel layer cannot show size or era; both rest on the 28 listings. The "lately" form is used here and at Sawgrass East, which is the limit of two. Both fail the wider sample.

### 2. Fairways

- **Home facts, 44 listings (41 homes), tracimiles fields.** Bedrooms: 3 in 34, 4 in 10 (so "three or four" holds, 100 percent). Levels: Two in 39, One and One Half in 2, blank in 3 ("usually two stories" holds). Garage: Yes in 42, No in 1, blank in 1 ("Most have their own garage" holds, 95 percent). Two-car garage in 22 (half; "some with room for two cars" holds). Main bedroom on the first floor in 20 (45 percent; "some put the main bedroom downstairs" holds). Row 216 had 5 of 5; the wider sample agrees.
- **"some are near the course"**: "Near Golf Course" in the lot description of 21 of 44 listings. Holds (row 143 had 2 of 5).
- **HOA fee "usually includes the lawn care, the pool and the internet"** (HOA-includes field, 44 listings): Maintenance Grounds 36 (82 percent), Pool 32 (73), Internet 29 (66). "Usually" holds, and the writer added it (the v7 limit). Water and sewer are in only 8 of 44; the page does not say them.
- **"Conway Medical Center is a six-minute drive, and an Aldi is three minutes away"**: OSRM from the row 200 middle (-78.986234, 33.787649): Conway Medical Center 5.99 min, 2.01 mi; Aldi (101 Wild Wing Blvd) 3.19 min, 0.72 mi. Holds. "On the way home" is the writer's gloss.
- **"The yearly tax is higher here than outside a town, because the Fairways is inside Conway's city limits"** (unchanged, checked because you named it). All 184 parcels with LegalDescr `FAIRWAYS @WILDWING` are tax district 110. Three address points (1030 Fairway Ln, 1115 Fairway Ln, 1035 Tee Shot Dr) fall inside the county Municipalities polygon CONWAY, and their parcels are district 110. Row 66: district 110 pays a net 163.4 mills against 91.9 outside a town. The page's own figures: about $1,570 inside Conway against about $970 outside a town, for a $240,000 home. Holds. Note for the writer: the MLS lot-location field says "Outside City Limits" on these listings. It is wrong. Use the county.
- **"a golf community with 27 holes"** (v6): unchanged source (Wild Wing's own page). Holds.

### 3. Sawgrass East

- **"about 255 townhomes"**: 255 parcels coded 109. Holds. **"built in the mid-2000s"**: built 2005 (20) and 2006 (25) in all 45 listings. Holds. **"three small lakes that the HOA owns"**: v7 (three HOA lake parcels). Unchanged.
- **"Many Sawgrass East townhomes have three bedrooms"**: 3 bedrooms in 25 of 45 (56 percent), 2 in 20. Holds.
- **"The HOA fee usually covers the insurance on the buildings, the lawn care, and the water, sewer and trash"**: HOA-includes field, 45 listings: Insurance 36 (80 percent), Maintenance Grounds 38 (84), Water 38 (84), Sewer 38 (84), Trash 40 (89). "Usually" holds. Row 228 says 8 of 10; the wider sample is stronger.
- **"Owners share a pool and a clubhouse"**: Pool in the HOA-includes field of 37 of 45; Clubhouse in the amenities of 26 of 45, and two listings say "clubhouse & pool" in the HOA line. This is the "pool and clubhouse" wording v7 offered in D22. Holds.
- **Heading "three-bedroom townhomes with a garage"**: of the 25 three-bedroom listings, garage Yes in 17, No in 6, blank in 2; in the last 12 months, 10 of 11. Holds for the three-bedroom plan. The chart label "garages, three lakes": over all 45, garage Yes in 25, No in 13, blank in 7. Only 8 of the 20 two-bedroom listings have one. The label is true of the three-bedroom homes and softer for the whole place (limit, not a drift).
- **"The ones on the market lately have had a one-car garage, the main bedroom downstairs and a back porch"**: 2 of 2 listings in row 217 (1057 and 1004 Stanton Pl). Over the 11 three-bedroom listings of the last 12 months: garage Yes in 10 (one-car stated in 8), main bedroom on the first floor in 8, a rear porch in 5, all three in 5. Over the 25 three-bedroom listings: garage 17, main bedroom first floor 17, rear porch 12. Every one has some porch (25 of 25). The garage and the main bedroom hold as "many"; "a back porch" does not hold as a thing the ones on the market have had. **DRIFT (D31)**
- **"off Carolina Forest Boulevard, a little over two miles from US 501"**: OSRM from the row 164 middle (-78.929975, 33.756167): Stanton Pl 114 m, Uniola Dr 143 m, Sardis Dr 38 m (plus a 290 m U-turn on Sardis Dr), Carolina Forest Blvd 3,681 m to US 501. That is 3,976 m (2.47 mi) without the U-turn and 4,266 m (2.65 mi) with it. In a straight line to where the boulevard meets US 501 it is 3,445 m (2.14 mi). Row 183 set "about 2.5 miles by road" and row 194 set "a little over two miles up the boulevard from US 501", which is the 2.29 mi along the boulevard only. The 14g sentence dropped "up the boulevard", so it now measures the whole trip, which is about 2.5 miles. **DRIFT (D32)**
- **"the county's Carolina Forest Recreation Center and library share a campus, a six-minute drive from home"**: the center is at 2254 Carolina Forest Blvd and the library at 2250 (Nominatim). OSRM 6.46 min and 6.15 min. Holds. It is the one mention of the recreation center on this page (sibling check, below).

### 4. Golf and Yacht Club

County parcels (layer 24, `MB GOLF%`): 466 coded 110, all with a building (473 with the spelling variants). Building footprints (layer 27): every one of the 466 has a main footprint. 449 of the 466 are 1,000 sq ft or more, and only 3 are under 900. The median footprint is 1,641 sq ft with the garage and porch. A two-story house of 1,350 heated sq ft would show a footprint near 700. So the county data agrees with one story for essentially all of them. Parcel area: median 5,651 sq ft (0.13 acre), middle half 5,381 to 6,364.

Listings (91 older-part homes, 2023 to 2026): levels One in 82, blank in 9, none two-story.

| Claim | Check | Result |
|---|---|---|
| "about 470 houses behind a gate, most of them one story" | 466 parcels; footprints and 82 of 82 stated levels agree; "Gated" in the amenities of 76 of 94 listings; the HOA site names a gatehouse and a 24-hour watch desk (gated row 149 holds the gate) | holds |
| "Their streets are named for golf courses and birds" | County address points on the 466 houses give 29 street names: golf courses 2 (Augusta Cres 8 houses, Pebble Beach Cres 8), birds 10 (Blue Heron, Cardinal, Carolina Wren, Eagle, Mallard View, Night Heron, Snowy Egret Cres and Trl, White Heron, Wood Duck), plants 13 (Cherry Laurel, Cinnamon Fern, Daylily, E and W Sweetbriar, Royal Fern, Royal Pine, Spice Bush, Sweet Gum Cres and Trl, Wintergreen, Wisteria, Meadow), other 4 (Greenslake Pt, Laguna Pt, Scotsmans Cres, and Heron Pt, which shares its name with the community's closed golf course). By house: golf 16 (3 percent), birds 92 (20), plants 297 (64), other 61 (13). | **DRIFT (D27)**: the sentence, the heading and the chart label |
| "Most houses there were built in the 1980s" | 66 of 91 (73 percent). 1990s 18, 2000s 6, 2010s 1. | holds |
| "two or three bedrooms and two baths" | 2 bedrooms in 64, 3 in 27 (100 percent). Two full baths in 74 (81 percent), one in 14, three in 3. | holds |
| "They typically have about 1,350 square feet" | Heated area: median **1,225**, mean 1,258, middle half 1,089 to 1,421. The 1980s houses alone: median 1,225. Row 189's 1,338 was the middle of about a dozen listings. | **DRIFT (D28)** |
| "on about an eighth of an acre" | County parcel median 0.13 acre | holds |
| "many have a porch or a patio" | Porch or patio in 68 of 91 (75 percent); with decks, 71 | holds |
| "Owners share a pool and hot tub, tennis courts and a community center" | mbgyc.com: "we relax and enjoy our pool, tennis courts, pavilion, HOA community center"; "Pool & Hot Tub" schedule | holds |
| "Osprey Marina on the Intracoastal Waterway is within about 15 minutes by car" | OSRM from the row 164 middle (-79.05007, 33.649402) to 8400 Osprey Rd (Census geocoder): 11.12 min, 3.91 mi. The marina's site: "at mile marker 373 on the Intracoastal Waterway". | holds |
| "Indigo Creek Golf Club, for a round of golf, is about as close" | OSRM to 9480 Indigo Club Dr: 14.23 min, 6.55 mi. Within about 15 minutes holds. "About as close" as 11.1 min and 3.9 mi does not: 3 minutes and 2.6 miles more, 68 percent farther. | **DRIFT (D29)** |
| "Insurers may require an older home to have an updated roof, wiring, plumbing and heating" (unchanged) | doi.sc.gov, re-opened today: "Insurers may require older homes to have updated heating, plumbing, wiring, and roofing." | holds |

### 5. Forestbrook Village, Victory Point, Amber Bluff, Indigo Grove

- **"Lennar has four townhome plans, from about 1,450 up to 2,400 square feet"**: Lennar's page lists Blakely 1,437, Morgan 1,905, Jordan 1,998, Thatcher 2,400, all 3 bedrooms. Holds.
- **"Lennar is still building here, so some of these townhomes are brand new"**: Lennar's page, opened today: "11 homes available"; in its data 9 homes are under construction and 2 are move-in ready. Row 162 (30 sales, all Lennar, a listing built 2027) points the same way. Holds. The Lennar page is the better source for the row.
- **"Lennar lists Victory Point as sold out for now, so we watch for resales"**: Lennar's page: "Temporarily sold out", "No homes available". Holds. "We watch for resales" is the agency's practice, not a fact; the owner confirms it (v2 said the same).
- **Amber Bluff "two stories and a one-car garage, in about 1,420 square feet"**: D.R. Horton's page: "Pearson ... 3 Bed | 2.5 Bath | 1 Garage | 2 Story | 1,418 Sq. Ft.", "1 floor plan in this community". Holds.
- **"CCU and Horry-Georgetown Technical College are about as close"** (as the stadium): OSRM from the row 209 middle: stadium 6.34 min, CCU 6.23, HGTC 6.00. Holds.
- **Indigo Grove "Lennar's limited warranty covers the workmanship for a year, the electrical, plumbing and mechanical systems for two, and the structure for ten"**: lennar.com/warranty: "1 Year Workmanship", "2 Years Mechanical & Systems ... electrical, plumbing and mechanical systems", "10 Years Structural ... load-bearing elements and structural integrity". Holds. Limit: it is the warranty on a new Lennar home bought from Lennar (row 205), shorter in Colorado and Utah only.
- **"Trash pickup is included in the HOA fee"**: row 187 and row 135: Trash in the HOA field of 5 of 5 listings. Holds.

### 6. Wynbrooke

200 listings (tracimiles, all years). Built 2000 (1), 2001 (13), 2002 (33), 2003 (46), 2004 (47), 2005 (58), blank (2). Screened porch in 130 (65 percent), loft in 89 (45), both in 58 (29).

- **"Many have a screened porch and a loft"**: holds. Each is common, and about three in ten have both. Row 220's 4 listings (4 of 4 and 3 of 4) are consistent.
- **"built in the early 2000s"**: holds loosely. The range is 2000 to 2005 and the middle is 2004: 93 of 198 were built in 2000 to 2003 and 105 in 2004 and 2005. Parkview and Sawgrass East are "mid-2000s" on the same years. Exact wording: "built between 2000 and 2005". Not counted as a drift.

### 7. Polo Farms

33 listings (31 homes). Levels One in 30, One and One Half in 1, blank in 2; Ranch in 26. Bedrooms 3 in 29, 4 in 4. Baths 2 in all 33. Built 2005 to 2017 (2005 and 2006: 11; 2007: 1; 2012 to 2014: 15; 2017: 6). HOA fee $12 (9), $15 (1), $20 (13), $22 (6), $25 (3), $37 (1). County: lot median 0.197 acre; phases PH I, PH 2, PH 3.

- **"Many backyards in Polo Farms are fenced, and several have their own pool"**: row 188 (NAIP 2023: fence lines on many yards, at least eight pools) and the listings (Fence in Exterior Features of 14 of 33; a private pool in 3 of 33). Holds as what the aerial and listings show.
- **"Most of the houses are one story, with three bedrooms, on lots of about a fifth of an acre"**: 30 of 33, 29 of 33, parcel median 0.197 acre. Holds.
- **"built in three phases, from the mid-2000s on"**: holds (2005 to 2017; three county phases).
- **"The neighborhood has no shared pool or clubhouse; its common land is two ponds, some woods and the strips along the highway"**: row 188 approved wording (D25 applied). Holds.
- **"the HOA fee is about $20 a month"**: middle $20 of 33. Holds.
- Heading "one-story houses with fenced yards" and chart label "a house for a $20 fee": the heading drops the "many" of the body, and the label drops "about". Soft, not a drift.

### 8. Top of the page and the chart

- **Dek** (the new line under the H1): "where a budget still buys a garage, a pool or a new house". Garages at the Fairways (42 of 44), pools at Parkview and Sawgrass East, new houses at Birchwood and Indigo Grove. Holds.
- **H1 sub-line "Twelve neighborhoods, and the best thing about each"**, **"See any of them in person."**: not facts.
- **Caption "About half Myrtle Beach prices"**: the twelve are $190,000 to $255,000, which is 45 to 61 percent of $421,250 (row 24). That number is the middle sale of Myrtle Beach homes that are not condos. All Myrtle Beach resales have a middle of $227,750, because 58 percent are condo units, and the twelve are about the same as that. "Myrtle Beach prices" does not say which group. The first bar ("A Myrtle Beach home"), the short answer ("not a condo") and the sources line ("without condos") carry the limit, but the caption is read first. v6 and v7 passed "About half the price of a Myrtle Beach home". **DRIFT (D33)**
- **Chart labels** (the five that changed): Sawgrass East "garages, three lakes" (above, soft). Golf and Yacht Club "one-story, golf streets" (D27). Amber Bluff "smart homes near CCU" (CCU 6.2 min; holds). Indigo Grove "new, ponds and woods" (v7). Polo Farms "a house for a $20 fee" (above).
- **The price method** left the chart note and sits in the sources line ("Prices: the middle recorded sale, October 2025 to September 2026, without condos or manufactured homes"). Holds.

## v7 drifts D21 to D26, still applied

| v7 | Page now (c2a16cd) | Check |
|---|---|---|
| D21 | Parkview: "the HOA fee includes water, sewer, grounds care and the pool" | The v7 wording. Holds. Limit: in the HOA field of 23 of 28 (water, sewer), 21 (grounds), 25 (pool). "Usually" would match the wider sample. Internet is in 1 of 28 and is not claimed. |
| D22 | Sawgrass East: "Owners share a pool and a clubhouse." | The v7 "pool and clubhouse" fallback. "For a party" and "rent" are gone. Holds. |
| D23 | Sawgrass East: no "because it covers more" | The fee comparison is cut; the covered items are listed with "usually". Holds. |
| D24 | Golf and Yacht Club: "Their streets are named for golf courses and birds" | **Came back wider** (D27). v7's wording was "Some of its street names are golf courses ... and others are birds". The 14g writer dropped "some" and "others", so the sentence now covers every street. |
| D25 | Polo Farms: "The neighborhood has no shared pool or clubhouse; its common land is..." | The reason for the fee is gone. Holds. |
| D26 | Indigo Grove: "Most of the houses are Lennar's, which sells them as The Overlook." | The v7 wording. Holds. |

Five of six hold; D24 is the one the rewrite put back, in a wider form (lesson B30).

## The drifts

Page sentences are from c2a16cd.

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D27 | Golf and Yacht Club. Heading: "one-story houses on streets named for golf courses". Body: "Their streets are named for golf courses and birds, such as Augusta Crescent and Snowy Egret Trail." Chart label: "one-story, golf streets". | Of the 29 streets, 2 are golf courses (16 of 466 houses, 3 percent). Birds are 10 streets (20 percent of houses). Plants are 13 streets (64 percent of houses). The sentence says the streets are named for golf courses and birds, and the heading and label say golf. This is v7 D24, widened (B30). | Body: "Some of its streets are named for golf courses, such as Augusta Crescent, and some for birds, such as Snowy Egret Trail." Heading: drop the streets, for example "one-story houses with a pool and tennis courts". Label: "one-story, pool and tennis". |
| D28 | Golf and Yacht Club: "They typically have about 1,350 square feet, on about an eighth of an acre, and many have a porch or a patio." | The 1,350 came from a dozen listings (row 189, middle 1,338). The 91 resales since 2023 have a middle of 1,225 (middle half 1,089 to 1,421). The county footprints (median 1,641 with garage and porch) fit 1,225 better than 1,350. 1,350 is 10 percent high. The eighth of an acre and the porch or patio hold. | "They typically have about 1,200 square feet, on about an eighth of an acre [91 resales, 2023 to 2026: middle 1,225], and many have a porch or a patio." The gated page, if it uses 1,350, should match. |
| D29 | Golf and Yacht Club: "Indigo Creek Golf Club, for a round of golf, is about as close." | "As close" as Osprey Marina (11.1 min, 3.9 mi) when Indigo Creek is 14.2 min and 6.6 mi. Both are within about 15 minutes; they are not the same distance. | "Indigo Creek Golf Club, for a round of golf, is also within about 15 minutes by car." |
| D30 | Parkview: "The ones on the market lately have had vaulted ceilings, a covered front porch and a screened back porch." | 2 of 2 listings turned into "the ones on the market". Over 28 listings: vaulted ceilings 14, front porch 18, screened porch 16, all three 6. Now on the market: 3 of 3 vaulted, 2 of 3 front porch, 0 of 3 screened. | "Many have vaulted ceilings and a front porch, and some have a screened porch [28 listings, 2023 to 2026: 14, 18 and 16]." |
| D31 | Sawgrass East: "The ones on the market lately have had a one-car garage, the main bedroom downstairs and a back porch." | Same pattern. For the 11 three-bedroom listings of the last year: garage 10, main bedroom first floor 8, rear porch 5, all three 5. The two-bedroom homes (20 of 45) have no first-floor main bedroom, and 8 of 20 a garage. | "Many of the three-bedroom ones have a one-car garage and the main bedroom downstairs [25 three-bedroom listings: 17 and 17]." |
| D32 | Sawgrass East: "The neighborhood is off Carolina Forest Boulevard, a little over two miles from US 501." | By road it is 2.47 to 2.65 miles from the middle. "A little over two miles" is the straight line (2.14 mi) or the boulevard alone (2.29 mi, row 194's "up the boulevard"). The sentence now has no basis word, and row 183 asked for one. | "The neighborhood is off Carolina Forest Boulevard, about two and a half miles by road from US 501." |
| D33 | Chart caption: "About half Myrtle Beach prices". | The $421,250 is the middle sale of Myrtle Beach homes that are not condos. "Prices" without that limit reads as all Myrtle Beach sales, whose middle is $227,750. | "About half the price of a Myrtle Beach home" (the v6 and v7 wording). |

Notes that are not drifts:

- **Osprey Marina "For a day on the water"**: the marina's site offers wet slips, dry storage and fuel. It has no rentals and no public ramp. The line holds for a boat owner who keeps a boat there. Wording that matches the source: "Osprey Marina, with wet slips and dry boat storage on the Intracoastal Waterway, is within about 15 minutes by car." The writer may keep the purpose phrase if the reader is a boat owner; the owner decides.
- **Fairways "usually" and Sawgrass East "usually"** now match the wider samples (82, 73 and 66 percent; 80 to 89 percent).
- **"Intracoastal Waterway"** for Osprey Marina is the marina's own wording.
- **Forestbrook "Broadway at the Beach is 12 minutes away"** is unchanged and was set in v2 at the complex's road entrances (11.1 to 12.3 min).
- **Gated "behind a gate"**: the MLS lists "Gated" for 76 of 94 older-part listings and the HOA names a gatehouse. The NAIP view shows no gate arm (row 189). The page claims a gate, not staff.

## B48: home descriptions

- **Sources.** Counts and lots come from county parcels and footprints (Parkview 196, Sawgrass East 255, Golf and Yacht Club 466, Polo Farms 0.197 acre, Fairways 184 parcels in Conway's tax district). Builder facts come from Lennar and D.R. Horton pages. Era, size, bedrooms, garage and porch come from listings; the county has no field for them. I checked each of those on a sample of 28 to 200 listings.
- **"Many" and "most".** The supported ones: Sawgrass East "Many ... three bedrooms" (56 percent); Fairways "Most have their own garage" (95), "usually two stories" (95), "some" two-car (50) and main bedroom down (45); Golf and Yacht Club "Most ... 1980s" (73), "two or three bedrooms" (100), "two baths" (81), "many have a porch or a patio" (75), "most ... one story" (100 by footprint and by listing); Wynbrooke "Many have a screened porch and a loft" (65, 45, 29 both); Polo Farms "Most ... one story" (91) and "three bedrooms" (88), "Many backyards ... fenced" (aerial, row 188). None of these rests on 2 to 5 listings any more.
- **Details seen on 2 of 2 listings.** Two sentences use the "on the market lately" form: Parkview and Sawgrass East. That is the limit of two. Both fail the wider sample (D30, D31). The form says what the listings in the market have had, so it has to be true of them. The lesson for the writer: before a detail goes in as "the ones on the market lately", count it over every listing of the last year. A county or builder source is better, and there is none for porches and garages.
- **Parcel facts.** Counts, lots and the one-story claim match the parcel and footprint data. The one number that did not match is the size at Golf and Yacht Club (D28).
- **B51 (template sentences).** The home sentence in each entry has its own shape and sits in a different place: Parkview's second paragraph, the Fairways' second, Sawgrass East's first, Golf and Yacht Club's second, Polo Farms' first. Read three in a row, no shared frame. The two "lately" sentences are the same frame, and are being cut.

## Drive and distance times

| Page | Re-run | Result |
|---|---|---|
| Parkview to the beach, "four-minute drive" | row 164 and 199: 4.0 min | holds |
| Fairways to Conway Medical Center, "six-minute drive" | 5.99 min, 2.01 mi | holds |
| Fairways to the Aldi, "three minutes" | 3.19 min, 0.72 mi | holds |
| Sawgrass East to the recreation center and library, "six-minute drive" | 6.46 min, 2.73 mi; 6.15 min, 2.68 mi | holds |
| Sawgrass East from US 501, "a little over two miles" | 2.47 to 2.65 mi by road, 2.14 mi straight | **D32** |
| Golf and Yacht Club to Osprey Marina, "within about 15 minutes" | 11.12 min, 3.91 mi | holds |
| Golf and Yacht Club to Indigo Creek, "within about 15 minutes" | 14.23 min, 6.55 mi | holds; "about as close" is D29 |
| Amber Bluff to Brooks Stadium, CCU, HGTC | 6.34, 6.23, 6.00 min | holds ("about as close" holds) |
| Forestbrook to Broadway at the Beach (unchanged) | v2 | holds |

Distance words (`rules/distance-words.json`): the seven patterns were run over the page text; none fires.

## Sibling check (review/SIBLING-OWNERS.md)

- **The Farm owns the Carolina Forest Recreation Center and library.** Affordable mentions them once, in one sentence, after the Sawgrass East home. That is the allowed "at most once, briefly". Note: the Farm says "share one campus" and affordable says "share a campus". It is the same fact in near-the-same words. The coordinator may cut "share a campus" and keep the drive.
- **Golf and Yacht Club**: gated owns Enterprise Landing, Heron Point, the watch desk and Sandpiper Place. Affordable (c2a16cd) has none of them, no RV storage, and one clause on the gate. Passes. Osprey Marina and Indigo Creek are on no other page. The pool, hot tub, tennis courts and community center are not in the gated entry.
- **Wild Wing / Fairways**: best owns the Avocet, its designers, the Hummingbird nine and the Monday league. Affordable has only "27 holes" and "near the course". Best says "inside the city of Conway"; affordable says it for a reason of its own (the tax). Passes.
- **Lennar**: best says "Builders such as Lennar and Dream Finders are still selling new houses here" about its own places. Affordable's "Lennar is still building here" is Forestbrook Village. Passes.
- **MarshWalk**: best (Prince Creek, seven minutes), gated (Seasons, about 10) and no-hoa (Murrells Inlet town, about 6) each give a drive from their own place; Wynbrooke's five minutes is its own. Passes.
- **Street names**: no other page gives the Golf and Yacht Club's streets. The Farm owns its own.

## The struck entries

9 entries added to `affordable-places-to-live-struck.json` (row "affordable 228"), for D27 (3), D28, D29, D30, D31, D32 and D33. Two older `use` texts (rows "affordable 189" and "affordable 189, 194") now say "typically ... about 1,200 square feet", because the approved 1,350 is overturned (D28). `node tools/struck-check.test.js` prints "all controls pass": each struck wording fires its entry and each approved wording fires none. `--strict` on the c2a16cd page now reports 9 struck phrases; they go quiet when the writer applies the wordings in the table.

## Status

Row 228: wrong in part (v8). New row 230 (rewrite check, v8, round 14g): wrong in part (v8).
