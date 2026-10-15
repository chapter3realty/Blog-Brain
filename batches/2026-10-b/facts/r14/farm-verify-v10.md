# The Farm, rows 114 to 117 and rewrite check v10 (round 14e, 2026-10-15)

Independent verifier. I did no research on this page and did not write it. Two jobs: (1) verify rows 114 to 117 against primary sources; (2) lessons B30, B45, B48 and B50: diff the spec against the v9 base (`30dd4e5`, the spec v9 checked; `0a828cf` is a WIP commit between) and check every changed or new sentence that states a fact, against its row and, where it drifts, against the source. I did not edit the spec.

Read: `batches/2026-10-b/specs/the-farm.js` at HEAD (last spec commit `ba6db86`, file time 03:16:33 UTC), the built page in the `wb-farm` worktree (03:16, 136,927 bytes) and the preview `scratchpad/preview/b/the-farm.html` (03:16). The page text I read is the built page's `<main>`.

## Result

- Rows 114, 115, 116 and 117: all four **verified with corrected wording**. The facts under each hold; one or more page sentences say more than the source.
- Rewrite check: **36 fact-bearing units changed or newly stated since `30dd4e5`. 29 match, 7 drift** (D1 to D7: one medium-high, three medium, one low-medium, two low).
- v9 drifts D1 to D6: **all six applied.** D2's fix introduced a new drift (D5 below: small game dropped). No other new drift in the fixes.
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, the-farm: **before my entries "the-farm (55 patterns): no struck wording."** After my 7 entries: 62 patterns, 9 sentence hits, one or more for each of D1 to D7. Each entry goes quiet on its approved wording. (The same run reports 17 hits on best-neighborhoods; those are not this page.)
- `node tools/struck-check.test.js`: "all controls pass" (one control failed on my first D3 entry, because the struck text held the word that the `unless` looks for; fixed).
- Distance words (`rules/distance-words.json`): no hit on the page, apart from the table heading "Also close by", which the controls allow. Every drive time matches OSRM (table below).
- Promises: every one is an action an agent can do, with no promised outcome.

## Row 114: the Heritage Trust Act. Verified with corrected wording

I opened https://www.scstatehouse.gov/code/t51c017.php (HTTP 200, the current code, 72 KB) and read sections 51-17-10 to 51-17-150.

What the statute says:

- **51-17-80, item 1:** "The primary dedication as a Heritage Preserve shall be to preserve and protect the natural or cultural character of any area or feature so established. The board of the department and its agents shall in all cases maintain the essential character of any area or feature dedicated ... No Heritage Preserve shall be taken for any other public purpose unless the approval of both the board of the department and the Governor has been obtained. In no case shall any Heritage Preserve be taken for any private use."
- **51-17-80, item 2:** "An acquisition by dedication shall be in perpetuity." (Under 51-17-10 item 9, "acquisition" is the fee-simple route. County parcel 39600000001 shows SCDNR as owner, row 79, so the tract is an acquisition. Land taken by "acceptance", a lesser interest such as an easement, is not covered by item 2.)
- **51-17-10 item 7 and 51-17-80 first paragraph:** a Heritage Preserve is an area "dedicated" under the chapter. Dedication is complete "once the necessary deed, easement or the like has been filed along with the 'Dedication Agreement' in the real estate records for the county". The SCDNR release (June 10, 2025, re-opened, HTTP 200) says the tract "will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve and incorporated into the S.C. Heritage Trust". So until then the tract is not a Heritage Preserve in the statute's sense. The page's tense ("will become part of", "Once the new land joins") is right. I found no source saying it is dedicated already, and I did not search the county's deed index.
- **51-17-85 (Heritage Trust property):** "(A) ... the board may not dispose of any Heritage Trust property if otherwise permitted to do so unless there are restrictions sufficient to protect all of the natural and cultural characteristics of the property. (B) For the purposes of county, state, or federal infrastructure projects, subsection (A) does not apply." Subsection (B) was added by 2009 Act No. 12. The SCDNR release says the tract will be incorporated into the Heritage Trust, so this section applies to it once that happens.
- The chapter states **no process to de-dedicate** a preserve. I searched the web for an Attorney General opinion or case on removing a dedication under 51-17-80 and found none.

The two page sentences:

1. "Under state law, a heritage preserve can never be put to private use." The statute's text is "In no case shall any Heritage Preserve be taken for any private use." That is as strong as a statute reads, and "never" is a fair paraphrase of "in no case". It is still a flat "never" about a law the General Assembly can amend (it did amend this chapter's disposal rule in 2009 to add an infrastructure exception), and the chapter has an approved path to **another public use** (board and Governor) and a disposal rule with an infrastructure carve-out. "Put to" also differs from "taken for". The statement is true of private use. It should say that and not "never".
2. "Once the new land joins the preserve, no one may build houses there." The statute does not say this. It bars private use; houses are one kind of private use, so the conclusion is likely right in practice, but "no one" is wider than the text: a public purpose approved by the board and the Governor is allowed. A reader may take this as a guarantee that nothing will ever be built beside The Farm. **This is a legal claim a buyer may rely on; keep it to the statute's own words.**

**Safe wording (the fact):** State law bars any private use of a heritage preserve; another public use needs the approval of both the Department of Natural Resources board and the governor [S.C. Code 51-17-80]. It applies once the land is dedicated, which the state says it will be [SCDNR news release, June 10, 2025].

If the writer wants one plain sentence for the buyer: "Under state law, a heritage preserve may not be used for any private purpose." Do not use "never" or "no one may build". Do not name the infrastructure exception unless the page wants to; do not turn the absence of a de-dedication process into a promise. The row is not legal advice; the owner may want a lawyer to read the sentence.

Row 99's other half holds: the state "recently acquired 353 acres from Conway Medical Center" and the CEO writes "The sale of this land, which was originally intended for a $160-million healthcare facility". See "Short answer" below.

## Row 115: the beach, 10 to 12 minutes. Verified with corrected wording

OSRM re-run today (router.project-osrm.org, driving, no traffic):

| From | To | Result |
|---|---|---|
| Farmers Rest Drive entrance (-78.87521, 33.75487) | MYRTLE BEACH 101 (-78.846516, 33.719685) | 4.63 mi, 10.09 min |
| 2884 Scarecrow Way (-78.877978, 33.767565) | MYRTLE BEACH 116 (-78.829052, 33.733063) | 5.06 mi, 11.95 min |
| 2884 Scarecrow Way | MYRTLE BEACH 101 | 4.95 mi, 11.97 min |

Rows 28 (10.1) and neighborhoods 264 (11.95 to 12.26) match. The range 10 to 12 is the true spread of two verified starts. Two sentences go past it:

- **D2.** "On a summer weekend, the beach is 10 to 12 minutes away by car." The times are router times without traffic. A summer weekend is when the road to the beach is slowest; the page itself says "rush hour adds 5 to 10 minutes". The sentence attaches a no-traffic time to the day it is least true.
- **D3.** The tile "Beach 10 to 12 min drive", the day sentence and the share title give the range with no start. The sources line now says "Drives, without traffic, start at the Farmers Rest Drive entrance", which gives 10; the v9 text "the beach 12 from the middle" was cut from it. The 12 has no named start. The aerial and region map keep "about 10 min" from the entrance, so the page carries both "10" and "10 to 12".

**Safe wording:** The beach is about 10 minutes by car from the Farmers Rest Drive entrance and about 12 from the middle of The Farm [OSRM, no traffic]. If the page keeps one number, give 10 with its start. Do not tie the times to a summer weekend.

## Row 116: the second-fee totals. Verified with corrected wording

I re-opened four of the thirteen Real Geeks listing pages (the rest were verified in rows 8 and 9):

- 2620497, The Orchards at The Farm, ACTIVE: "HOA Fees (Calculated Monthly) 254".
- 2613045, The Orchards at The Farm, closed Aug 14, 2026: 225.
- 2613710, Carolina Forest - The Farm (505 Hay Hill Ln, Unit 723 C), closed Aug 27, 2026: 497.
- 2600208, Carolina Forest - The Farm (517 Hay Hill Ln, Unit A), closed Feb 6, 2026: 453.

Arithmetic: $254 is "about $255"; $497 is "about $500". Both round correctly.

**D4.** "In all, owners pay up to about $255 a month in The Orchards and up to about $500 in Planters Point." "Up to" reads as a ceiling for every owner. It is the top of what sellers entered on 8 and 5 listings. The sub-association fees are not published (row 6), and the "from listings" line is at the foot of the page, not in the sentence. The page also drops the low end ($225 and $453). Two of the five Planters Point listings are typed "Townhouse" in the MLS; the page's "condos in Planters Point" rests on the horizontal property regime (rows 1, 90), and the con "Townhomes and condos" covers both.

**Safe wording:** Listings in 2026 show total HOA fees of about $225 to $255 a month in The Orchards and about $450 to $500 in Planters Point [listings, Coastal Carolinas MLS]. The v9 page had this range and it passed. The writer's problem was the two-figure limit; one range per place is two figures too.

## Row 117 and the rewrite check

Spec diff against `30dd4e5` read in full (the `0a828cf` to `ba6db86` diff is the tail of it: the tile "North edge", the beach sentence, the pros, the cons and the rules cards). 36 units.

### Drifts (7)

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 (medium-high) | "Under state law, a heritage preserve can never be put to private use. Once the new land joins the preserve, no one may build houses there." | Row 114. The statute bars private use ("In no case shall any Heritage Preserve be taken for any private use", 51-17-80) but also allows another public use with board and Governor approval, a disposal rule with an infrastructure exception (51-17-85(B), added 2009), and the General Assembly can amend it. "Never" and "no one may build houses" are wider than the text. | "State law bars any private use of a heritage preserve; another public use needs the approval of both the Department of Natural Resources board and the governor [S.C. Code 51-17-80]. It applies once the land is dedicated, which the state says it will be [SCDNR news release, June 10, 2025]." |
| D2 (medium) | "On a summer weekend, the beach is 10 to 12 minutes away by car." | Row 115. OSRM times without traffic; a summer weekend is peak beach traffic; the page says rush hour adds 5 to 10 minutes. | "The beach is about 10 minutes by car from the Farmers Rest Drive entrance, without traffic [OSRM]." |
| D3 (low-medium) | Tile "Beach 10 to 12 min drive", the share title "the beach 10 to 12 minutes away", and the sources line "Drives, without traffic, start at the Farmers Rest Drive entrance" | Row 115. 10.09 min is from the entrance; 11.95 min is from the middle of The Farm (2884 Scarecrow Way). The sources line names only the entrance, so the 12 has no start. | "10 minutes by car from the Farmers Rest Drive entrance and about 12 from the middle of The Farm [OSRM, no traffic]", or one number, 10, with its start. |
| D4 (medium) | "In all, owners pay up to about $255 a month in The Orchards and up to about $500 in Planters Point." | Row 116. Reads as a ceiling; it is the top of 8 and 5 listings; low end dropped. | "Listings in 2026 show total HOA fees of about $225 to $255 a month in The Orchards and about $450 to $500 in Planters Point [listings, Coastal Carolinas MLS]." |
| D5 (medium) | "Bow season opens in mid-September, and gun seasons run from mid-October through New Year's Day." | Rows 108, 117(b). The regulation (123-40, section 1.1 D, item 19) lists small game from Thanksgiving Day to March 1 as well, and a bear season October 17 to 30. "Gun seasons ... through New Year's Day" ends hunting two months early, for the reader asking when hunters are there. The v9 safe wording had "small game to March 1"; the rewrite dropped it. The muzzleloader fix is applied: mid-October covers October 11. | "Deer season runs from mid-September to January 1, and small game to March 1 [S.C. Code Regs. 123-40, section 1.1 D, item 19]." |
| D6 (low) | Pro: "Woods on the north edge bought for the state's flytrap preserve." | Rows 79, 99. "The" says there is one. Cartwheel Bay Heritage Preserve, also managed by SCDNR in Horry County, protects Venus flytraps too. Lewis Ocean Bay has the state's largest population (SCDNR), and is not the only flytrap preserve. (The same drift as B45's "the" for "a".) | "Woods on the north edge bought for a state nature preserve with Venus flytraps [SCDNR news release, June 10, 2025]." |
| D7 (low) | Pro: "A house with a yard for about $350,000, with two pools in the fee." | Row 48. $352,000 is the middle of 61 sales in a year (half between $307,500 and $388,000; range $129,574 to $580,000). As a pro it reads as the price a buyer pays. B48: say a typical price as a typical past sale. "A yard" holds (median lot 8,309 sq ft, row 43) and "in the fee" holds (pool upkeep is $98,460 of the 2026 budget, row 10; owner entry by card, row 63). | "Houses with yards typically sold for about $350,000 in the past year, with two pools in the fee [county deed records, October 2025 to September 2026]." |

### v9 drifts: all applied

| v9 | What the page does now | Result |
|---|---|---|
| D1 board meets "each month" | The board-meeting sentence is cut from the day. | Fixed, nothing new in its place. |
| D2 "guns from October 21" | "gun seasons run from mid-October through New Year's Day" | Muzzleloaders (Oct 11) covered; small game dropped. New drift D5. |
| D3 "you share them with hunters" | "The preserve allows both hiking and hunting." | The v9 safe wording exactly. |
| D4 "you can rent out your home" | "owners can rent their homes with a written lease, and the HOA has no cap on how many homes are rented" | The v9 safe wording, without the bracket. The "Under the HOA rules" lead-in also covers the no-cap clause, which is the board's May 18 statement (row 51), not a rule; see watch 3. |
| D5 "open to owners" | "residents can start with a workout in the clubhouse fitness room, which opens at 5:30 a.m." | Fixed. |
| D6 "The Farm has no gate" | "The Farm is not gated, and its roads are county-owned." | The v9 safe wording exactly. |

### Units that match (29 of 36)

- **Subtitle** (unchanged since v9): rows 1, 25, 18, 19.
- **h1em** "Two pools for summer evenings, and the beach for weekends." Row 60 (two pools; the pools run to 9 p.m., row 61); the beach is 10 to 12 minutes (D3 for the exact claim); the rest is selling.
- **Tile "Preserve North edge"**: row 79 (the tract touches three HOA open-space parcels on the north edge, 0 m).
- **Tile "Publix 2 min drive"**: row 29, 1.51 min.
- **Short answer 1**, "Conway Medical Center planned a $160 million healthcare facility on the woods along The Farm's north edge. The state bought those woods for a nature preserve instead." SCDNR release re-read: the CEO, Brian Argo: "The sale of this land, which was originally intended for a $160-million healthcare facility ... Additionally, it allows us to reallocate our resources"; "SCDNR recently acquired 353 acres from Conway Medical Center"; the release calls the tract's cover "pine savannas, blackwater swamp forests, and a stretch of Socastee Swamp". "Planned" for "intended", "bought" for "acquired ... sale", "woods" for the forest and savanna, and "instead" for the reallocation are all fair. The land is the same 353 acres (row 99). The county owner is SCDNR (row 79).
- **Short answer 2**, "A library, a rock climbing wall and the county's trails are 3 to 4 minutes away by car." Library and rock wall on one parcel, 3.32 min (rows 80, 101); trails 3.56 min (row 81).
- **First section, first paragraph**, "The state says the 353 acres along The Farm's north edge will become part of the Lewis Ocean Bay Heritage Preserve. The preserve is home to South Carolina's largest wild population of Venus flytraps, and the new land holds habitat for them too." SCDNR: "will be formally dedicated as part of the Lewis Ocean Bay Heritage Preserve"; "the largest and only long-term viable population in South Carolina is centered within Lewis Ocean Bay"; "The newly protected tract includes critical habitat for the ... Venus flytrap".
- **Day, preserve walk**: "From March through June, a Saturday here can start with a walk in the preserve, among pitcher plants and wildflowers in bloom." Row 105 ("From March through June, pitcher-plants and wildflowers provide a wonderful show"; open in daylight year-round; hiking "Yes"). See watch 2 on hunting.
- **Day, preserve open and entrance**: "open in daylight all year, and the state asks visitors to park and walk its roads. Its main entrance is about 6 minutes by car from The Farm's entrance by the schools." Rows 105, 106 (5.96 min from the Wheatfield Drive junction).
- **Day, workout**: row 62 (5:30 a.m. to 9 p.m.; residents).
- **Day, pools**: "In season, the pools stay open until 9 p.m., so there is time for a swim after work. The large pool curves around two small islands of palms, and its wide deck is beside a pond." Row 61 (April 15 to October 15, 9 a.m. to 9 p.m.), row 112 (two palm islands, wide deck). The page's own aerial shows the pond beside the pool at its left. Watch 4.
- **Day, party and events**: "Owners can reserve the activity center near the large pool for a private party. The HOA's events include a fall yard sale and a Community Appreciation Day." Rows 64, 98 (about 400 feet), 68.
- **Day, library and recreation center**: "share one campus, about 3 minutes by car from the entrance nearest the large pool. The center has a rock climbing wall and a full gym." Rows 27 (the Farmers Rest Drive entrance is "the entrance nearest the large pool"), 80, 101 (3.32 min; same parcel 39700000010).
- **Day, Bike and Run Park and the Greenway**: row 81 (3.56 min, 7 miles), row 111 (verified in v9).
- **Where it is**: "from the entrance nearest the large pool" fixes v9 watch item 1; row 27.
- **Schools**: "Both Ocean Bay schools are at The Farm's north-east edge." Row 98.
- **Cost, internet**: "We confirm with the HOA whether internet is in the fee." Row 11 (sellers list internet on 34 of 45 listings; the budget has no internet line). An agent can ask the management company.
- **Cost, county fee and transfer fee** (moved): unchanged text.
- **Pro 2**: "A gym, a rock wall, a library and trails 3 to 4 minutes away." Rows 80, 81, 101. See watch 1 on "by car".
- **Pro 4**: "The same three public schools for every home, and no high-risk flood zone." Row 36 (all 1,571 home parcels inside the three 2025 to 2026 zones); row 71 (all inside FEMA zone X, one polygon over the whole Farm).
- **Con 1**: "The large pool has sunk more than it should, and the HOA board has not decided whether to repair or replace it. The board can vote a one-time charge to owners, called a special assessment." Row 65 ("excessive settlement"; "No final decisions have been made"), row 14 (Declaration 9.2: a majority of the Board; the Declarant consent term ended in 2019).
- **Con 2**: "Townhomes and condos pay a second HOA fee." Row 6, rows 8, 9.
- **Con 3, the rest of the hunting con**: "The preserve allows both hiking and hunting" (v9 safe wording); "On burn days, the road to its entrance can close because of the smoke" (row 107: International Drive from SC 90 south; the entrance, off International Drive at Old Kingston Road, is on that stretch; notices say "due to smoke").
- **Rent sentence**: rows 50, 51 (with watch 3).
- **Rules cards**: "A fence or shed ... a land surveyor's drawing of the lot"; "Cars go in the garage or driveway, not on the street or lawn. A boat, trailer or camper needs the HOA's written approval to stay outside" (row 55: "No street parking or parking on lawns is permitted"; boats, trailers and campers unless the HOA approves in writing); "Open April 15 to October 15, with no lifeguard. Up to six guests per home, with the owner there" (rows 61, 63).
- **Bombing range paragraph**: the cut of "The Defense Department or a later owner may keep monitoring that land" removes a hedge and adds nothing; the cleanup sentence is unchanged (row 89).
- **FAQ, gate**: "Entry to the HOA's pools is by key card." Row 63 ("Owners ID (Amenity Card) is required and must be used to gain pool entry"; 2024 rules; the December 2025 rules are unread).
- **FAQ, built**: "built in stages, on land D.R. Horton added over the years" (row 19: 2004 to 2017); "Most houses were built from 2004 to 2009, and most of the rest about a decade later" (row 41: of 454 detached listings 321 were built 2004 to 2009, and 127 of the other 133 from 2014 to 2018; the sources line says ages are from listings; watch 5); "D.R. Horton no longer names a majority of the HOA board" (row 21: ended its right to appoint a majority in July and August 2019).

### The aerial

`the-farm-from-above` was re-exported in commit `ba6db86` and only the "Entrance" label moved (above and left of its dot, so it clears the credit). I looked at the 1,200 px image: the six labels and their dots are where the record puts them, and the orange outline is unchanged.

## Drive times (all re-run on OSRM)

| Page | OSRM | Result |
|---|---|---|
| Tile and day: beach "10 to 12 min" | 10.09 min from the entrance; 11.95 min from 2884 Scarecrow Way | match as a range; D2, D3 on the wording |
| Library and recreation center "about 3 minutes" (row 101) | 3.32 min | match |
| Trails "about 4 minutes" | 3.56 min | match |
| "3 to 4 minutes" (short answer, pro) | 3.32 and 3.56 min | match |
| Preserve entrance "about 6 minutes" from the Wheatfield Drive junction | 5.96 min (row 106) | match |
| Tile "Publix 2 min drive" | 1.51 min | rounds to 2 |

`rules/distance-words.json`: run on every sentence of the built page: 0 hits (the one string that matched, "Also close by", is the table heading the controls allow). There is no walk time.

## Promises (step 5)

All are actions an agent can do, with no promised outcome:

- "We confirm with the HOA whether internet is in the fee." An email or call to the management company (Waccamaw Management).
- "We will send the homes for sale in The Farm that fit." A search and a send.
- "We read the board's latest minutes on the pool for you." The HOA posts signed minutes.
- "We show you both fees side by side for any townhome or condo." The Farm HOA's $107 is on the budget; the second fee is on the listing or from the sub-association's manager (row 6). "Show", not "guarantee".
- "We show you how far any house is from the preserve's hunting land." County parcels and SCDNR's property layer.
- "We check the Corps' map for every lot we show you." The Corps' FUDS data. "We check the current zones for any home you like." The district's zone lookup. "On any house you tour, we check how old the roof and the air conditioner are." Disclosure, permits and the listing.
- The end box: "We will look for the homes for sale that fit and set up showings for the ones you choose."

## Watch items (not drifts, not struck)

1. **"3 to 4 minutes away" with no mode** in the pro. The short answer says "by car"; the pro does not. The distance-words rule passes it because it has a number and a unit. Add "by car" if the writer has room.
2. **A Saturday walk and hunting.** The day section opens with a walk "from March through June". The regulation's item 19 gives small game to March 1 and no turkey season; the general WMA rules for spring turkey were not read for this preserve (v9 mentioned April 3 to May 3, Thursday to Saturday). The page tells the reader about hunting in the con and does not say walking is unsafe, so I did not strike it. If D5 is fixed as above, the two sections agree.
3. **"Under the HOA rules ... the HOA has no cap"** covers a statement that is the board's (May 18, 2026 minutes), not a rule. The Orchards and Planters Point have their own rules, unread (row 50). A tighter lead-in would be "The HOA's documents set no limit on how many homes are rented" (row 51's own wording).
4. **"its wide deck is beside a pond."** The row 112 picture note says the pool is beside the pond; v9 saw "the pond to the left" and a wide deck around the pool. The deck touching the pond is not stated by either. Low; "beside a pond" about the pool is what the sources say.
5. **House ages come from listings** (454 detached listings, 2020 to 2026, of about 1,292 houses; seller-entered). The sources line says so. The county parcel layer carries no year-built field, so I could not use it as a check. Phase dates in the declaration amendments (2004, 2007, 2008, 2014 to 2017) agree with the two build waves.
6. **Row 8 and row 9 are listings.** Real Geeks and the Beach Pro Team cards repeat one MLS field, so agreement is transcription only (row 7 says the same).

## Struck entries added

Seven, in `the-farm-struck.json` (55 patterns in all, up from 48): D1 (row 114), D2 and D3 (row 115), D4 (row 116), D5 (rows 117b, 108), D6 (rows 117g, 99), D7 (rows 117g, 48). The D3 entry fires on the range "10 to 12 min" near "beach" unless the sentence names the entrance or the middle, so it stays quiet on the safe wording. `node tools/struck-check.test.js`: "all controls pass". `--strict` on the preview: before my entries the Farm page was quiet (55 patterns); after them, 62 patterns and 9 hits (D1 fires twice, D2 once, D3 twice, D4 to D7 once each), and each entry goes quiet on its approved wording.

## Status

- Row 114: **verified with corrected wording**. Row 115: **verified with corrected wording**. Row 116: **verified with corrected wording**. Row 117: **verified with corrected wording**.
- New ledger row 118, "rewrite check (v10)": **wrong in part (v10)**.
