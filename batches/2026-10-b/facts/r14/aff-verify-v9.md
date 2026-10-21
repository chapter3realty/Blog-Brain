# Affordable places to live, check v9 (round 14k, 2026-10-21)

Independent verifier. I did no research on this page. Scope (from the coordinator): ledger rows added or changed since c2a16cd (228 status update, 229, 230, 231) and every sentence changed in `git diff c2a16cd HEAD -- batches/2026-10-b/specs/affordable-places-to-live.js` (26 hunks). Lesson B48 applied hard to the home descriptions: a claim about "most" or "many" homes needs a full source (county parcels, builder plans) or a large listing sample read by an earlier verifier. I read `prompts/verifier.md`, lessons B45, B48, B52, B53 and the v8 note (`aff-verify-v8.md`). I did not edit the spec. I did not open Zillow. I did not clone anything.

## Verdict

Rows: 229 wrong in part (Danny Knight distance, Wild Wing clubhouse wording); 231 wrong in part (the Lennar "coming soon" sentence, the Sawgrass insurance clause, "Most ... three bedrooms"); 230 is v8's own row (no change); 228's status line was v8's. 26 hunks read, about 55 fact units: 5 drift (2 must fix, 3 tighten).

## Must fix

| # | Where | Current text | Why | Replacement text |
|---|---|---|---|---|
| A1 | Indigo Grove | "Lennar shows most of them as coming soon, so the plan you want may not be for sale yet." | No ledger row. Lennar's page for The Overlook (read 2026-10-21) lists nine plans (Dover, Harrisburg, Hartford, Columbia, Woodhaven, Whitetail, Beckman, Newlin, Ramsey) with no status on any plan. Its availability block says "New homesites coming soon" and "No homes available"; the "Coming soon" tab is empty. "Most of them as coming soon" is not what the page shows. Written 4e5d73e (round 14i), after the last verifier read. | "Lennar's page lists no homes for sale in The Overlook right now, so the plan you want may not be available yet." (dated by the read: 2026-10-21; it will go stale) Or cut the sentence. |
| A2 | Sawgrass East | "An owner then has no water or trash bill of their own, and insures mainly the inside of the home." | Row 231 says this "follows from" the fee covering insurance. It does not. The source is the MLS HOA-includes field, where "Insurance" appears in 36 of 45 listings (v8); the field does not say building insurance, master policy type or what the owner must cover. "Insures mainly the inside" is a claim about the owner's duty that no Sawgrass East document supports. The next sentence (the linked guide on how the two policies split) already says where to look. "No water or trash bill" holds for the homes that include them (84 percent water, 89 percent trash of 45 listings). | "In most of them an owner has no water or trash bill of their own." Keep the sentence with the guide link: "Our guide to how the HOA's policy and your own policy split the cover explains where one stops and the other starts." |

## Tighten

| # | Where | Current text | Why | Replacement text |
|---|---|---|---|---|
| A3 | Sawgrass East | "Most of the townhomes have three bedrooms, and many of the three-bedroom ones have a one-car garage and the main bedroom downstairs." | v8 supported "Many" for the three-bedroom share: 25 of 45 listings, 56 percent (B48: listings, not all 255 homes). Row 231 cites row 131 for "Most": 4 of 6 listings. The second half is v8's D31 wording and holds (17 and 17 of 25). | "Many of the townhomes have three bedrooms, and many of the three-bedroom ones have a one-car garage and the main bedroom downstairs." |
| A4 | The Fairways | "The club now has a renovated pro shop, upgraded practice facilities and a refreshed clubhouse." | Wild Wing's About page, re-opened: "Home to 27 holes"; "renovated pro shop"; "upgraded practice facilities"; "refreshed clubhouse amenities". The source refreshes the amenities, not the clubhouse. | "The club now has a renovated pro shop, upgraded practice facilities and refreshed clubhouse amenities." |
| A5 | Polo Farms | "Danny Knight Landing, a county boat ramp on the Waccamaw River, is about two miles west of Polo Farms by road." | OSRM from the Polo Farms middle to the landing: 4.46 min, 2.35 miles (row 229). "About two miles" is 15 percent short; v8 D32 struck the same rounding ("a little over two miles" for 2.47). The county page lists "Danny Knight Landing (Red Bluff Landing), 204 Hwy 31, Longs 29568, Waccamaw River". | "...is about a 4-minute drive west of Polo Farms." |

## What holds

| Page text | Check | Result |
|---|---|---|
| Parkview: "Many have vaulted ceilings and a front porch, and some have a screened porch." | v8 read 28 listings: vaulted 14, front porch 18, screened 16 (50, 64, 57 percent) | holds |
| Sawgrass East: "the HOA fee usually pays the insurance on the buildings, the lawn care, and the water, sewer and trash" | MLS HOA-includes field in 45 listings: Insurance 36, Grounds 38, Water 38, Sewer 38, Trash 40 (v8). The page says "usually". | holds |
| Sawgrass East: "about 255 of them, built in the mid-2000s, around three small lakes that the HOA owns, with a pool and a clubhouse for owners" | row 226: 255 parcels coded 109; three LAKE common-area parcels owned by the HOA; clubhouse and pool in listings | holds |
| Sawgrass East: "a Publix is in the Forest Square center" | OSM way 756800024: Publix, 2170 Oakheart Road, "Forest Square" (Nominatim, re-run) | holds |
| Sawgrass East: "the county's Carolina Forest library and recreation center are on the boulevard that leads in" | The Farm ledger row 101: 2250 and 2254 Carolina Forest Blvd, one county parcel. Row 183: Sawgrass East reaches US 501 by Carolina Forest Boulevard. | holds |
| Sawgrass East: "The beach is the trade-off: it is about ten miles away by road." | row 141: OSRM 9.6 miles to the nearest beach access (MYRTLE BEACH 40) | holds |
| Birchwood: "FEMA maps every lot in Birchwood as an area of minimal flood hazard." | I pulled the 81 BIRCHWOOD parcels from Horry County layer 24 and queried FEMA NFHL layer 28 with the envelope of all of them (-78.75606, 33.92316 to -78.75046, 33.92828): one flood-area feature, zone X, "AREA OF MINIMAL FLOOD HAZARD", SFHA_TF F. | holds |
| Birchwood: "A new house here sells for about what a 1980s house does in the Golf and Yacht Club" | Birchwood 74 sales, all Lennar, middle $223,825 (row 158); Golf and Yacht Club older part 35 resales, middle $225,000 (row 161); older-part houses mostly 1986 to 1996 (row 218, v8: 73 percent 1980s). Closer to Myrtle Beach: 22.9 min to the mall against 41.6 (row 141). | holds |
| Birchwood: "North Myrtle Beach and its beaches are about 20 minutes by car" | rows 193 (19.7 min to City Hall) and 185 (beach 20.2) | holds |
| Golf and Yacht Club: pool "From mid-April to mid-October ... opens at 8 a.m. for lap swimming, then an exercise hour, then open swim until 8 p.m. or sundown" | mbgyc.com, re-opened: "8:00-9:00 am Lap Swimming (7 days a week)", "9:00-10:00 am Exercise", "10:00 am-8:00 pm or Sundown Open Swim"; "Pool Opens April 15", "closed October 15". | holds |
| Golf and Yacht Club: "about 1,200 square feet"; "Osprey Marina, with wet slips and dry boat storage ... about four miles away by road" | v8 D28 (91 resales, middle 1,225) and the v8 marina note (wet slips, dry storage); OSRM 3.9 miles (row 226) | hold |
| Forestbrook Village: "Arrowhead Country Club has 27 holes of golf along the Intracoastal Waterway. Water comes into play on 24 of them." | arrowheadcc.com, re-opened: "27-Hole Golf Complex", "along the scenic Intracoastal Waterway", water in play on 24 of the 27 holes. "Near": 0.89 mile straight, 2.59 by road (row 229). | holds |
| Indigo Grove: "Most of Indigo Grove's new houses back onto about 22 acres of open land that the HOA owns" | row 226 item 5: 22.47 acres; 121 of 169 lot parcels touch it (72 percent) | holds |
| Indigo Grove: "The beach is about 13 minutes away by car"; "off SC 90"; school zoning | rows 185/186 (13.2), 165 | hold |
| Property tax list: "Polo Farms: about $980. Wynbrooke: about $1,030." | row 153 verifier note: Treasurer 2026 bills, Polo Farms (district 260) 203.4 gross mills, Wynbrooke (610) 207.3. I redid the arithmetic: 9,600 x (203.4 - 109.1) mills = $905.28 + $74.30 fee = $979.58; 9,600 x (207.3 - 109.1) = $942.72 + $89.40 = $1,032.12. | holds |
| Wynbrooke: "At the MarshWalk, five minutes from Wynbrooke, the restaurants on the marsh have live music every night, and there is never a cover charge." | row 211 (live music nightly, no cover charge; 5.4 min). marshwalk.com home page: "the Music is always Free!" | holds; the live-music page is the better source for "every night" |
| Polo Farms: "Many backyards ... fenced, and several have their own pool ... a house of your own for about the price of a townhome in Wynbrooke" | v8: NAIP fence lines on many yards, at least 8 pools; listings fence 14 of 33, private pool 3 of 33. Price: Polo Farms $255,000 against Wynbrooke $249,500 (rows 127, 124, townhomes by land use 109). | holds |
| Fairways: "The Fairways is inside Conway's city limits, where the yearly tax is higher than outside a town." | row 153 ($1,570 against $970) | holds |
| Amber Bluff caption: "the downtown closest to Amber Bluff" | Amber Bluff (33.810, -79.021) is about 3.6 km from Conway's centre; Riverwalk 8.3 min (row 209); no other downtown is closer. | holds |
| Dek: "homes sell for about half the typical price of a Myrtle Beach house" | Place medians $190,000 to $255,000 against $421,250 (the middle sale of Myrtle Beach homes that are not condos): 45 to 61 percent. | holds for most; Polo Farms is 61 percent |
| Chart captions: "About half the price of a Myrtle Beach home"; labels | v8 D33 wording; labels match | hold |
| FAQ cuts (Parkview location, Conway tax, first-time buyer sentence) | deletions only | hold |

## Struck list

Added entries for A1, A2, A3, A4, A5.
