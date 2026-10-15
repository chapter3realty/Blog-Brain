# The Farm, rows 119 and 120 and rewrite check v11 (round 14f, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify rows 119 and 120; (2) lessons B30, B45, B48 and B50: diff the spec against the last checked base and check every changed or new sentence that states a fact, against its row and, where it drifts, against the source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (`4087303`; the spec's last commit is `049c278`, 03:32:54 UTC) and the built page in the `wb-farm` worktree (03:32, 136,330 bytes). The preview `preview/b/the-farm.html` is the same time. The built `<main>` text matches the spec sentence for sentence.

**Which base.** The diff you named, `76da816` to HEAD, is one sentence ("The drive to work at" became "A commute to"). `76da816` is a WIP commit that no verifier read. The last base a verifier checked is `ba6db86` (v10). I diffed against `ba6db86`, which includes everything in the `76da816` diff and every round 14f change. Row 120 (a) to (h) lists the same changes.

## Result

- Row 119 (River Oaks Pizzeria): **verified**.
- Row 120 (changed sentences): **verified with corrected wording**. Three of its sentences go past the source.
- Rewrite check: **25 fact-bearing units changed or newly stated since `ba6db86`. 22 match, 3 drift** (D1 medium, D2 low-medium, D3 low).
- v10 drifts D1 to D7: **all seven applied**, and none of those fixes introduced a new drift. D4's wording is the v10 safe wording with the attribution moved to the sources line, which is the project rule (CRAFT 5); it matches. The fix for v10 watch 3 (the rental lead-in) did introduce one: D2 below.
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, the-farm: **before my entries "the-farm (62 patterns): no struck wording."** After my 3 entries: 65 patterns, 3 hits, one for each of D1 to D3. Each entry goes quiet on its approved wording. (The same run reports 17 hits on best-neighborhoods and 2 on gated-communities; those are not this page.)
- `node tools/struck-check.test.js`: "all controls pass".
- Distance words (`rules/distance-words.json`, run inside struck-check): no hit on the page. "Also close by" is the table heading the controls allow. There is no walk time on the page.
- Promises: all are actions an agent can do. None is new in 14f except two relabelled offers.

## Row 119: River Oaks Pizzeria. Verified

What I opened:

- https://riveroakspizzeria.com/ (HTTP 200): the location chooser reads "Carolina Forest 154 Sapwood Road, Unit 107 Myrtle Beach, SC 29579 ... Next to Publix". The second location is Surfside (1399 South Commons Drive, "Next to Lowe's Foods off 544").
- https://cf.riveroakspizzeria.com/ (the Carolina Forest site, HTTP 200): "Location 154 Sapwood Road, Unit 107 Myrtle Beach, SC 29579 Hours Sun-Thurs: 12pm - 10pm Fri-Sat: 12pm - 11pm", phone (843) 796-1350, a banner "Fall Specials Available Now", and schema `"streetAddress":"154 Sapwood Road, Unit 107"`. It is open, not closed or "coming soon".
- Horry County GIS address points (`OpenData/AddressPoints/MapServer/0`, STREETNAME like SAPWOOD, 17 points): **154 SAPWOOD RD**, PIN 39615030020, at (-78.869235, 33.751527). **136 SAPWOOD RD** (the Publix, row 29) is on the same PIN at (-78.870501, 33.751759). The PIN is "TRACT 15A; SHOPPING CENTER TRACT A" (row 29). So both addresses are on one shopping-center parcel. The two address points are 393 feet apart.
- County building footprints (layer 27): the Publix address point is inside object 151747 (50,095 sq ft); the 154 point is inside object 151518 (15,488 sq ft). They are two buildings, **22 m (72 ft) apart**, side by side with overlapping north-south extent. They do not touch.
- OSM node 12798802299 (re-read through the API): amenity=restaurant, 154 Sapwood Road, placed at (33.7515987, -78.8692525), 8 m from the county point.
- OSRM: from the Farmers Rest Drive entrance (-78.87521, 33.75487) to the OSM node 900.2 m, 112.2 s (0.56 mi, 1.9 min), the row's figure; to the county point 946 m, 123.4 s (2.06 min). Publix is 812.1 m, 90.7 s (1.51 min).

Page sentence: "Publix is a 2-minute drive, and River Oaks Pizzeria is next to it." Publix rounds 1.51 to 2; the pizzeria is 1.9 to 2.1 min from the same start. "Next to" is the restaurant's own phrase for its location and the county data agree: one parcel, 72 feet between the two buildings. The page claims no hours, menu, price or review. Pass.

Watch (not a drift, not struck): CRAFT 2 defines "next to" as "the two touch or face each other". These buildings are 72 ft apart, in one center. The restaurant says "Next to Publix" in its own words, so I pass it. If the owner reads "next to" strictly, the exact wording is "in the same shopping center as Publix". The row's note that "Fullbelly BBQ, Flaming Fin" and others are near is not on the page.

## Row 120: the changed sentences

I checked every changed sentence (table at the end) against its row and, for the ones the page restates in new words, against the source again: the S.C. Code section 51-17-80 text, the SCDNR release of June 10, 2025, the McLeod Health page, Chapter 123 of the S.C. Code of Regulations, and the county GIS.

### Re-opened sources

- **S.C. Code 51-17-80** (scstatehouse.gov/code/t51c017.php, HTTP 200): item 1 "In no case shall any Heritage Preserve be taken for any private use"; item 2 "An acquisition by dedication shall be in perpetuity". The text is as in v10.
- **SCDNR news release** (dnr.sc.gov/news/2025/Jun/jun10-lewisoceanbay.php, HTTP 200): "SCDNR recently acquired 353 acres from Conway Medical Center. The tract is located across International Drive from the existing preserve"; "This property will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve and incorporated into the S.C. Heritage Trust"; "The newly protected tract includes critical habitat for the federally at-risk and globally imperiled Venus flytrap". County parcel 39600000001 is 353.25 acres, owner SCDNR (row 79).
- **McLeod Health** (mcleodhealth.org carolina-forest-emergency-services-2, HTTP 200): "the Emergency Department at McLeod Health Carolina Forest offers care 24 hours a day, 7 days a week."
- **S.C. Code of Regulations Chapter 123** (scstatehouse.gov/coderegs/Chapter%20123.pdf, HTTP 200), section 1.1 D item 19, Lewis Ocean Bay Heritage Preserve WMA: archery deer Sept. 15 to Oct. 10; primitive weapons deer Oct. 11 to Oct. 20; still gun deer Oct. 21 to Jan. 1; small game (no fox squirrels) Thanksgiving Day to Mar. 1; bear Oct. 17 to 30. The three deer hunts are contiguous, so "mid-September to January 1" holds, and "small game to March 1" holds.

### "In our experience, rush hour adds 5 to 10 minutes to any drive here." Drift D1

Is there a source behind a first-hand claim? **Yes.** I searched the ledger, `voice/`, `stories/stories.json`, `stories/STORIES.md` and `templates/owner-questions.md`.

- `stories/stories.json` id `traffic-timing`: teller Devin Day (owner); source `research/relocating/owner-answers.md:51-54`; status usable-with-limits. Verbatim: "**Traffic.** Summer traffic 'is not very bad.' Most delay is waiting for geese to cross. Rush hour adds 5 to 10 minutes. Leaving for work 5 to 8 am has few stops. Workaround: take the interstate (SC-31 / SC-22) because US-17 has many stop lights. Use." I read the source file itself (a copy in the site repo's `research/relocating/owner-answers.md`): "Recorded 2026-08-16 from Devin Day, in chat. ... Numbers here are anecdotes from one household and must be labelled as such on the page, never presented as area averages."
- The story's limits: "Label it as the owner's experience ... Not a direct quote ... Do not put it in quotation marks." `checked`: "Not checked."
- Affordable ledger row 166 (coordinator decision 2026-10-14): "In our experience" is accepted. "Our" is Chapter3, whose owner the entry quotes. The page's byline is "By Devin Day", the teller, so the first person fits. The other pages use the same phrase (affordable, Seasons, Del Webb).

So "In our experience" is not invented and I do not mark it wrong. What goes past the source is the scope. The owner's remark is an area-wide note on commuting by the roads SC-31, SC-22 and US-17, from one household. The page says "**any drive here**", which is every drive in or from The Farm, in the sentence that follows a 12-minute hospital commute. Every other page that uses the sentence bounds it to the times on the page ("to the drive times on this page", "on the map"). This is a one-household anecdote turned into a rule (B45, B48).

**Safe wording:** "In our experience, rush hour adds 5 to 10 minutes to the drive times on this page." (the other pages' wording) or cut it. Keep "in our experience"; do not drop the label.

### "A commute to Grand Strand Medical Center, a large hospital, takes about 12 minutes." Match

Row 32 (verified): 403-bed acute care hospital, 809 82nd Pkwy. OSRM today from the Farmers Rest Drive entrance: 9,047.8 m, 691.2 s (5.62 mi, 11.52 min), identical to 2026-10-13. 11.52 rounds to 12 (CRAFT 2: under 15 minutes to the nearest minute). From the middle of The Farm (2884 Scarecrow Way) it is 13.4 min, so the 12 depends on the start; the sources line names the entrance ("Drives start at the Farmers Rest Drive entrance"), so the sentence is covered. "Commute" is a fair word for a trip to a large employer. Watch: the sentence names no start, as the tile does not.

### "McLeod Health's emergency room in Carolina Forest is open 24 hours, about a 5-minute drive away." Match

Row 30 (verified): the McLeod page says 24 hours a day, 7 days a week (re-read). OSRM from the entrance to the county address point 107 McLeod Health Blvd: 2,856.5 m, 312.3 s (1.77 mi, 5.21 min). The sentence follows "The map shows drive times by car from the entrance nearest the large pool". It does not say "nearest" (not proven, row 30 note), which is right. The aerial's alt text carries "the emergency room 5 minutes".

### "Both Ocean Bay schools are on International Drive, at The Farm's north-east edge. A sidewalk runs along Wheatfield Drive from inside The Farm to International Drive." Match

- Row 38: the district's zone layers give "905 International Drive" (middle) and "950 International Drive" (elementary). Row 98: the school parcels touch (0.0 m) and lie 12 m from The Farm's land; "north-east edge" holds.
- Row 110 (verified in v9): OSM sidewalk way 1283755951 and the 2023 aerial agree; the sidewalk runs the whole of Wheatfield Drive from Carolina Farms Blvd to International Drive. I re-queried the county parcels along the road: lots in phases 1, 7, 9 and 10A, Planters Point units and HOA open space (#5, #13, #15) all touch Wheatfield Drive, so the road runs through The Farm and "from inside The Farm" is true. It is a volunteer-mapped source (last edited 2025-11-24) read with a photo, as row 110 says. The page claims no crossing, no walk to school and no user; the two sentences sit side by side, so a reader may infer a walk to school. Watch only.

### The 353-acre sentences, the law sentences, the map caption. Match

- "The 353 acres along The Farm's north edge are set to join the Lewis Ocean Bay Heritage Preserve." SCDNR: "will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve". Parcel 353.25 acres touches three HOA open-space parcels on the north edge (row 79). "Set to join" keeps the future tense.
- "Under state law, a heritage preserve may not be used for any private purpose. That protection starts once the new land is dedicated to the preserve, which the state has said it will do." This is the v10 D1 safe wording nearly word for word. The statute text is as in v10. It does not say "never" or "no one may build". It does not name the other-public-use path or the infrastructure carve-out, which v10 allowed.
- Map caption "the green area is the 353 acres set to join the preserve": the shaded parcel is 353.25 acres (row 79); the photo credit says "shaded the state's 353-acre tract from the same parcels".
- The first section's flytrap sentence and the short answer's purchase sentence are unchanged since v10.

### The pros, the fees, the hunting line. Match

- Pro 1 "Woods on the north edge bought for a state nature preserve with Venus flytraps": the v10 D6 safe wording exactly.
- Pro 2 "Houses with yards usually sold for about $350,000 in the past year, with two pools in the fee": the v10 D7 wording ("usually sold", past year). Row 48: 61 sales, middle $352,000. "Two pools in the fee": the 2026 budget has a pools line, $98,460 (row 10 note); two pools (row 60).
- Fees: "Owners in The Orchards pay about $225 to $255 a month in all, and in Planters Point about $450 to $500." The v10 safe range for the two figures ($225 and $254; $453 and $497), with the attribution moved to the sources note ("second HOA fees are from listings"). Row 116 verified. Watch: the range is from 8 and 5 listings, stated as what owners pay; the sources line carries "from listings".
- Hunting con: "Deer season runs from mid-September to January 1, and small game to March 1": the v10 D5 wording; the regulation re-read above. The burn-day sentence is unchanged.

### "Flytrap woods on its north edge, and two pools in the fee." Drift D3

Rows 79 and 99. The source says the tract "**includes critical habitat for** the ... Venus flytrap". The first section says "holds habitat for them too", which is right. The subtitle compresses that to "Flytrap woods", which reads as woods where flytraps grow. SCDNR does not say flytraps are on the tract; it says the habitat is. This is the "habitat for" to "flytrap" compression of lesson B45. Low.

**Safe wording:** "Woods with flytrap habitat on its north edge, and two pools in the fee." (or "Flytrap habitat on its north edge, and two pools in the fee.")

### "Under the HOA rules, ... and the board has set no cap on rentals." Drift D2

Row 51: the May 18, 2026 minutes say "The Board explained when DR Horton drafted the governing documents, rental percentage restrictions were not included." So the source is a board explanation that **the governing documents have no cap**. "The board has set no cap" says the board chose not to cap, and a later board could. It also changes the subject from the documents to the board. In v10 I flagged that the lead-in "Under the HOA rules" covered a board statement and gave row 51's own words ("The HOA's documents set no limit on how many homes are rented"). The writer changed the subject instead. The page's "written lease" half is row 50 and holds. Not covered by the source: the sub-associations' rules and the December 2025 recorded rules (unread, row 51).

**Safe wording:** "Under the HOA rules, owners can rent their homes with a written lease. The HOA's governing documents have no cap on how many homes are rented [board minutes, May 18, 2026]." Do not use "sets" or "set by" (build.js SETS_REGEX); "has set" passes the regex, but the sentence above avoids the verb.

### The sources line: drives are "without traffic"

The sources line says: "Drives start at the Farmers Rest Drive entrance, without traffic (the preserve's at Wheatfield Drive)." Does OSRM give free-flow times? **Yes.**

- The OSRM car profile (`profiles/car.lua`, read from the project repository) gives each road a fixed speed by class (for example motorway 90, primary 65, residential 25 km/h) multiplied by `speed_reduction = 0.8`, plus fixed turn and signal penalties. The profile documentation says speed is "your best estimate of the actual speed that will be used". Nothing in the profile reads live or typical traffic. Live traffic needs a separate speed-update file at build time, which the public demo server does not publish.
- Every route I re-ran returned the same seconds as on 2026-10-13 (605.3, 691.2, 312.3, 247.5, 365.2, 90.7), run at a different time of day. A traffic-aware router would not.
- So the times are free-flow, with a fixed delay for signals and turns. "Without traffic" is accurate; the fixed signal and turn delays make them slightly longer than a pure speed-limit time.
- The site says the same elsewhere: best neighborhoods "Drive times assume no traffic"; no-HOA "Drive times without traffic"; the affordable and gated pages "no traffic"; Del Webb "without traffic"; Myrtle Trace "with no traffic". The Farm's wording agrees. One affordable-page caption puts it as "Drives have no traffic; in our experience, rush hour adds 5 to 10 minutes", which reads as if the road has no traffic. That is not this page.
- Starts: the beach "about 12 from the middle of The Farm" and the preserve entrance (Wheatfield Drive) are the two sentences that name another start, and each says so.

## Drive times (all re-run on OSRM today)

| Page | OSRM | Rounded under CRAFT 2 | Result |
|---|---|---|---|
| Tile and og title, beach 10 min (entrance) | 10.09 min (7,445.9 m) | 10 | match |
| Day, beach "about 12 from the middle of The Farm" (2884 Scarecrow Way) | 11.95 min (MYRTLE BEACH 116); 11.97 (MB 101) | 12 | match |
| Commute to Grand Strand Medical Center "about 12 minutes" | 11.52 min from the entrance; 13.4 from the middle | 12 | match, from the entrance |
| McLeod emergency room "about a 5-minute drive" | 5.21 min | 5 | match |
| Publix "2-minute drive" and map label "Publix 2 minutes" | 1.51 min | 2 | match |
| River Oaks Pizzeria "next to" Publix (row 119) | 1.9 min (OSM node), 2.06 min (county point) | 2 | match |
| Library and recreation center "about 3 minutes" | 3.3 min (row 80) | 3 | match |
| Trails "about 4 minutes" | 3.6 min (row 81) | 4 | match |
| "3 to 4 minutes away by car" (short answer) | 3.3 and 3.6 min | 3 to 4 | match |
| Ocean Bay Middle "About 4 minutes"; Elementary "About 6 minutes" | 4.12 and 6.09 min | 4; 6 | match |
| Carolina Forest High "About 15 minutes" | 15.7 min (row 38) | 15 (over 15: nearest 5) | match |
| Preserve main entrance "about 6 minutes" from the Wheatfield junction | 5.96 min (row 106) | 6 | match |

Tanger 13, the Boardwalk 15 and the airport 20 are unchanged since v10 (rows 33 to 35).

`rules/distance-words.json`: seven patterns (a short drive, close by, a few blocks, just across, a few minutes, walking distance and its kin, next door). None fires on the page. "Next to" in the River Oaks sentence is not in the list, so the tool does not test it; I measured it above (CRAFT 2's own definition).

## Promises

All are actions an agent can do, with no promised outcome:

- "We will send the homes for sale in The Farm that fit." A search and a send.
- "On any house you tour, we check how old the roof and the air conditioner are." Disclosure, permits and the listing.
- "We confirm with the HOA whether internet is in the fee." An email or call to the management company.
- "We read the board's latest minutes on the pool for you." The HOA posts signed minutes.
- "We show you both fees side by side for any townhome or condo." The Farm HOA's $107 is on the budget; the second fee is on the listing or from the sub-association's manager.
- "We show you how far any house is from the preserve's hunting land." County parcels and SCDNR's property layer (row 106 lists the tract as hunting "Yes").
- "We check the current zones for any home you like." The district's zone lookup. "We check the Corps' map for every lot we show you." The Corps' FUDS data.
- The end box: "We will look for the homes for sale that fit and set up showings for the ones you choose."
- Round 14f relabelled the offers: "Send me the homes for sale" (top bar), "Book a showing in The Farm" (pills and end box). The button goes to the contact form with The Farm named.

## Every changed or new unit (25), against `ba6db86`

| # | Unit | Rows | Result |
|---|---|---|---|
| 1 | Subtitle "Flytrap woods on its north edge, and two pools in the fee." | 79, 99, 10, 60 | **D3** |
| 2 | Tile "Beach 10 min drive" | 28 | match |
| 3 | Share title "the beach about 10 minutes away" | 28 | match |
| 4 | Short answer "A gym, a library and trails are 3 to 4 minutes away by car." | 80, 81, 101 | match |
| 5 | "The 353 acres ... are set to join the ... Preserve." | 79, 99 | match |
| 6 | The two law sentences | 114 | match (v10 D1 wording) |
| 7 | "Residents can start a weekday with a workout in the clubhouse fitness room, which opens at 5:30 a.m." | 62 | match |
| 8 | "A commute to Grand Strand Medical Center, a large hospital, takes about 12 minutes." | 32 | match |
| 9 | "In our experience, rush hour adds 5 to 10 minutes to any drive here." | stories.json traffic-timing; affordable 166 | **D1** |
| 10 | "The pools stay open until 9 p.m. in season, so there is time for a swim after work." | 61 | match |
| 11 | Palm islands, wide deck beside a pond (moved, unchanged) | 112 | match |
| 12 | "Owners can also reserve the activity center near it for a private party." | 64, 98 | match |
| 13 | "Publix is a 2-minute drive" | 29 | match |
| 14 | "River Oaks Pizzeria is next to it." | 119 | match |
| 15 | "The beach is about 10 minutes by car from the entrance nearest the large pool, and about 12 from the middle of The Farm." | 115, 27 | match (v10 D3 wording) |
| 16 | McLeod emergency room, 24 hours, 5 minutes | 30 | match |
| 17 | Map caption, 353 acres | 79 | match |
| 18 | "Both Ocean Bay schools are on International Drive, at The Farm's north-east edge." | 38, 98 | match |
| 19 | "A sidewalk runs along Wheatfield Drive from inside The Farm to International Drive." | 110 | match |
| 20 | The two second-fee ranges | 6, 8, 9, 116 | match |
| 21 | Pro 1, woods for a state nature preserve with Venus flytraps | 79, 99 | match (v10 D6 wording) |
| 22 | Pro 2, houses with yards usually sold for about $350,000, two pools in the fee | 48, 10, 60 | match (v10 D7 wording) |
| 23 | Con 3, deer season and small game | 108 | match (v10 D5 wording) |
| 24 | "Under the HOA rules, ... the board has set no cap on rentals." | 50, 51 | **D2** |
| 25 | Sources note: listings, entrance start, without traffic | 11, 41, 8, 9, 27 | match |

Changed with no fact to check: the events line is cut; the Defense Department line is unchanged; the table loses its hospital row; the "Libraries" and "HOA documents" links leave the sources list (the library and the HOA rules still link inline); the gym pro is cut; the offer labels change.

## Drifts (3)

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 (medium) | "In our experience, rush hour adds 5 to 10 minutes to any drive here." | Source exists (owner's chat answer 2026-08-16, stories.json traffic-timing, unchecked), so "in our experience" is allowed. But the source is one household's area-wide commute note; "any drive here" makes it a rule for every drive. Other pages bound it to "the drive times on this page". | "In our experience, rush hour adds 5 to 10 minutes to the drive times on this page." Or cut it. |
| D2 (low-medium) | "Under the HOA rules, owners can rent their homes with a written lease, and the board has set no cap on rentals." | Row 51. The minutes say the governing documents drafted by D.R. Horton have no rental percentage restriction. "The board has set no cap" says the board chose; it can change. Subject changed from the documents to the board. | "Owners can rent their homes with a written lease. The HOA's governing documents have no cap on how many homes are rented [board minutes, May 18, 2026]." |
| D3 (low) | "Flytrap woods on its north edge, and two pools in the fee." | Rows 79, 99. SCDNR: the tract "includes critical habitat for the ... Venus flytrap". Habitat, not flytraps seen on it. | "Woods with flytrap habitat on its north edge, and two pools in the fee." |

## v10 drifts: all applied

| v10 | What the page does now | Result |
|---|---|---|
| D1 heritage law | "may not be used for any private purpose. That protection starts once the new land is dedicated ..." | The v10 safe wording. |
| D2 summer weekend | The sentence is gone; the beach sentence has no day. | Fixed. |
| D3 beach start | Tile 10 min; day "from the entrance ... and about 12 from the middle of The Farm". | Fixed. |
| D4 fee ceiling | "about $225 to $255 ... about $450 to $500" | Fixed. |
| D5 gun seasons | "Deer season runs from mid-September to January 1, and small game to March 1" | Fixed. |
| D6 "the state's flytrap preserve" | "a state nature preserve with Venus flytraps" | Fixed. |
| D7 $350,000 pro | "usually sold for about $350,000 in the past year" | Fixed. |
| Watch 1 ("3 to 4 minutes" with no mode) | Short answer says "by car"; the gym pro is cut. | Fixed. |
| Watch 3 (rental lead-in) | Changed to "the board has set no cap" | **New drift D2.** |

## Watch items (not drifts, not struck)

1. **"Next to Publix"** is two buildings 72 ft apart on one parcel (row 119). The restaurant's own words; CRAFT 2 asks that the two touch or face each other. "In the same shopping center as Publix" would be exact.
2. **The sidewalk sentence sits next to the school sentence.** A reader may take it as a walk to school. The page claims none (row 110: not claimed).
3. **The fee range** is from 8 and 5 listings and is written as what owners pay; the sources line says "from listings".
4. **The GSMC commute and the beach tile name no start.** The sources line names the Farmers Rest Drive entrance. From the middle of The Farm the hospital is 13.4 min.
5. **Whether the tract has been dedicated since June 2025** is not on the page and I did not search the Register of Deeds. The tense ("set to join", "will do") matches the only source.
6. **The pool deck "beside a pond"** (v10 watch 4) is unchanged.

## Struck entries added

Three, in `the-farm-struck.json` (65 patterns in all, up from 62): D1 (rows 121, 120d), D2 (rows 121, 120h, 51), D3 (rows 121, 120a, 99). `node tools/struck-check.test.js`: "all controls pass". `--strict` on the preview: before my entries the Farm page was quiet (62 patterns); after them, 3 hits, one for each entry, and each goes quiet on its approved wording.

## Status

- Row 119: **verified**. Row 120: **verified with corrected wording**.
- New ledger row 121, "rewrite check (v11)": **wrong in part (v11)**.
