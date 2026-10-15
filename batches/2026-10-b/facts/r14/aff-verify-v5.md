# Affordable places to live, rows 214 to 222 and rewrite check v5 (round 14c, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before. Task: check ledger rows 214 to 222 and read every sentence that round 14c (commit `565134f`) changed or newly states, against its row and the source (lessons B30, B45, B46, B47). I did not edit the spec.

Spec read: `batches/2026-10-b/specs/affordable-places-to-live.js` at `565134f`, plus `7ca3500` (the chart labels). The preview read is `.../scratchpad/preview/b/affordable-places-to-live.html`, built 01:54 UTC, which matches `7ca3500`. The lead was editing the spec in the working tree while I worked; see "Chart labels at the end" for what I saw.

## Sources I opened myself

- All 20 listing pages the rows cite (HTTP 200; tracimiles.com, mbcoastalhomes.realgeeks.com, century21boling.realgeeks.com). No Zillow page. MLS fields read: beds, baths, levels, year built, garage and parking, porch fields, interior features, HOA fee and "HOA includes", heated and total square feet, and the description.
- Lennar's Forestbrook Village page and its four plan pages (Blakely, Morgan, Jordan, Thatcher).
- D.R. Horton's Amber Bluff page.
- Wild Wing's course page (playwildwing.com; wildwing.com returned 403 to me today).
- Horry County parcel layer 24 (Amber Bluff 125 lot parcels; Birchwood 77 lot parcels).
- OSRM (router.project-osrm.org) for the drives below; Nominatim for the OSM points.

## Result

- Rows 214 to 222: **verified 1** (216), **verified with corrected wording 7** (214, 215, 217, 218, 219, 220, 221), **wrong in part 1** (222). Nothing is unverifiable. No claim must be dropped.
- Round 14c changed or newly states **54 fact-bearing units**. **31 match. 23 drift**, in 19 distinct drifts.
- Must fix (the page says something the source does not): D1, D2, D3, D4.
- Tighten (the sentence says more than the source, or a count is off): D5 to D15.
- All 12 prices and all 10 fees in the offer boxes match their rows. Wording needs a fix in 7 of the 12 sentences (D7c, D12a, D12b).
- Drive and walk times: every one re-run with OSRM matches the ledger. No banned distance word from `rules/distance-words.json` is on the page. One distance (Brooks Stadium, "a mile") does not hold as a way to get there (D6).
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, before my entries, on the preview built from `7ca3500`: **affordable-places-to-live (100 patterns): no struck wording.** No old wording came back. (The run's 8 hits were on no-hoa and the-farm.) After my 27 entries (127 patterns) it reports 23 phrases on the affordable page, as intended.

## The drifts

Page sentences are from `565134f`.

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D1 | "Wild Wing was once a golf resort with several courses; one is still open, and some Fairways townhomes are near it." (Fairways) | Row 143 (safe wording): three courses closed in 2004 and one of them reopened as a nine-hole course; Avocet is open. Wild Wing's own site today: the Avocet course and "the Hummingbird, a nine-hole, par-34 layout"; 27 holes in all. Row 143 warned that a count without the reopening misleads. "One is still open" is wrong. | "Wild Wing was once a golf resort with several courses; two of them, an 18-hole course and a nine-hole course, are still open, and some Fairways townhomes are near them." (Avocet and its designers belong to best neighborhoods, so keep the count only, or cut the sentence.) |
| D2 | "The HOA fee includes water and sewer at Parkview, and usually at the Fairways, Sawgrass East and Wynbrooke." (table note) | Row 130 said "usually" from 3 of 5 older Fairways listings. The five Fairways listings row 216 cites show water and sewer in the HOA fee for 1 of 5 (1018 Fairway Ln only; 1025, 1127, 1051 and 1028 list neither). Pooled with row 130's five, about 4 of 9. Parkview is 5 of 5 (rows 129, 215). Sawgrass East is 2 of 2 here and 4 of 6 in row 131. Wynbrooke is 3 of 4 here and 2 of 3 in row 136. | "The HOA fee includes water and sewer at Parkview, and usually at Sawgrass East and Wynbrooke. At the Fairways, only some homes list them in the fee." |
| D3 | "Near Myrtle Beach, homes cost the least in the twelve neighborhoods below." (short answer) and, in the description, "where homes sell for the least" | A superlative. Round 14c cut the "Where else can you look for less?" section that told the reader the limit. Row 156: Collins Walk ($223,900), Kingston Oaks ($243,000), Warner Crossing ($244,000), Andalusia and Spring Grove are cheaper than some of the twelve, but 25 to 43 minutes from a beach; Hemingway, Nichols and Green Sea (row 17) are cheaper than Georgetown. The list rule (row 155) is at least 10 sales and a beach access within about 20 minutes. FAQ 1 still states that rule; the lead does not. | "Of the neighborhoods within about 20 minutes' drive of a public beach access where at least 10 homes sold last year, the twelve below have the lowest prices." Description: "the twelve lowest-priced neighborhoods within about 20 minutes of the beach". |
| D4 | "Birchwood is small: 77 new Lennar houses on lots of about a quarter acre, with about 12 acres of open space." (Birchwood) | Row 190 counted 77 **lots**. County layer 24 today: 77 lot parcels; 64 carry house land use 101; 13 carry vacant land use 100, with no building value, and 3 lots are still owned by Lennar Carolinas LLC. Row 158 supports 74 Lennar sales in the year. A lot count became a house count. Median lot 0.23 acre (holds). | "Birchwood is small: 77 lots, with new Lennar houses on lots of about a quarter acre, and about 12 acres of open space." |
| D5 | "you can lock the front door, change the thermostat and answer the video doorbell from your phone." (Amber Bluff) | Row 146 builder text: "control the thermostat, front door light and lock, and video doorbell from your smartphone". "Answer" is the writer's verb. D.R. Horton's community page names "America's Smart Home technology" and lists no features. | "Every townhome at Amber Bluff came with a smart-home package: you can control the front door lock, the thermostat and the video doorbell from your phone [D.R. Horton listing text]." |
| D6 | Heading "smart-home townhomes a mile from the football stadium" and "On game days, Brooks Stadium, where the Chanticleers play football, is about a mile south." | Measured. Straight line from the 125 Amber Bluff lot parcels to the stadium (OSM way 610210985): 1.15 to 1.28 miles (median 1.22) to its middle, about 1.10 miles to its nearest edge; bearing 170 degrees (south, slightly east). By road: 2.04 to 2.09 miles, 6.2 to 6.5 minutes by car (OSRM). D.R. Horton's page says "6 minutes to Brooks Stadium". "A mile from" in a heading reads as the way there, and the way is twice that. CRAFT 2: for a place the reader drives to, give the drive. | Heading: "smart-home townhomes about 6 minutes from the football stadium". Sentence: "On game days, Brooks Stadium, where the Chanticleers play football, is about a 6-minute drive, 1.2 miles south in a straight line." |
| D7a | "They have two stories and a screened porch, many with a loft, and some have a one-car garage." (Wynbrooke) | Row 220's four listings are all two-story with a screened porch and three have a loft in the text, so "the ones we found" is right; "They have" is a rule for all. Garage: only 153 Wimbledon says one-car; 124 Wimbledon says "Garage, Private" with no size; 681 says "Garage: No"; 815 lists two spaces and no garage. Row 220 counted "2 of 4" one-car. It is 1 of 4. All four are 2020 to 2023 sold listings. | "The ones we found for sale had two stories and a screened porch, most with a loft, and some with a garage." |
| D7b | "...though it usually pays for the insurance on the buildings and all outside maintenance." (Wynbrooke) | Insurance: 4 of 4 here, 2 of 3 in row 136; "usually" holds. "All outside maintenance" is one listing's remark (row 151, 119 Wimbledon). The MLS field in the four listings here says "MaintenanceGrounds" only. | "...though it usually pays for the insurance on the buildings and for the grounds care." |
| D7c | "Townhomes in Wynbrooke usually went for about $250,000, with that fee of about $450 a month." (offer box) | "That fee" has nothing before it inside the box. The figures hold (row 124, $249,500; row 136, $450). | "...with an HOA fee of about $450 a month." |
| D8 | "Most are three-bedroom, two-story townhomes with a one-car garage." (Sawgrass East) | Two listings (1057, 1004 Stanton Pl) are both 3 bed, two-story, one-car garage. Row 131 has 3 beds in 4 of 6 and 2 beds in 2 of 6; garage and levels for those two are not in the ledger. "Most" is a count the sample does not give. | "The ones we found for sale were three-bedroom, two-story townhomes with a one-car garage." |
| D9a | "The townhomes have two stories, two or three bedrooms and two and a half baths." (Parkview) | Two listings (1061, 1047 Pinwheel Loop; 1044 Portico in row 129 has 2 beds). A rule for all townhomes from 2 to 3 listings. | "The townhomes we found for sale have two stories, two or three bedrooms and two and a half baths." |
| D9b | "...and the three-bedroom plan puts the main bedroom downstairs." (Parkview) | One three-bedroom listing (1061, an end unit) says "primary suite, located on the first floor". One listing does not make a plan. | "...and the three-bedroom one we saw had the main bedroom downstairs." |
| D10 | "Most houses there are from the late 1980s, with two or three bedrooms and two baths." (Golf and Yacht Club) | Row 218's five: built 1989, 1989, 1989, 1986 and 1996. Row 132's 17 listings: five built 1985 and the others 1986 to 2005. Mid-1980s houses are in the sample. Row 132 wrote "most built in the 1980s". Beds and baths hold (2 or 3 beds; 2 baths in 4 of 5, 3 in one). | "Most houses there were built in the 1980s, with two or three bedrooms and two baths." |
| D11 | "Forestbrook Village has the biggest townhomes on this list." and heading "the biggest new townhomes"; chart label "the biggest townhomes" | Lennar's four plans: Blakely 1,437, Morgan 1,905, Jordan 1,998, Thatcher 2,400 sq ft, each 3 bed and "two-story" on its own page (so "each a three-bedroom townhome over two stories" holds). Largest elsewhere: Fairways 2,052 heated (1018 Fairway Ln; its total is 2,410), Villas at Sandridge 2,175 (one resale; builder plans 1,513 to 1,874), Wynbrooke 1,650, Sawgrass East 1,604, Victory Point 1,456, Amber Bluff 1,418, Parkview 1,351. So the top plan is the largest, by 225 or more. The plans as a group are not: Blakely is smaller than the Fairways, Villas, Sawgrass and Wynbrooke figures, and Morgan and Jordan equal the Fairways' 1,942 to 2,052. | "Forestbrook Village has the largest townhome plan on this list: Lennar's Thatcher has 2,400 square feet, and its plans run from about 1,450 to 2,400." Label: "plans up to 2,400 sq ft". |
| D12a | "Expect to pay about $215,000 for a Fairways townhome" and "A Sawgrass East townhome usually costs about $225,000" (offer boxes) | The rows give what homes **sold** for in the past year (medians $215,000 and $222,500). Neither states what a buyer will pay. The other ten sentences use "went for" or "sold for". | "Fairways townhomes usually sold for about $215,000 last year, and the HOA fee is about $390 a month." "Sawgrass East townhomes usually sold for about $225,000 last year, and the HOA fee is about $425 a month." |
| D12b | "New houses in Birchwood went for about $225,000 last year", "Lennar's townhomes here went for about $230,000", "These townhomes went for about $240,000 last year", "New houses here went for about $245,000 last year" (offer boxes) | These are middle prices (rows 158, 162, 122, 160) written without "usually", so each reads as every sale. Forestbrook also has no period. Watch: Lennar's own page lists the Forestbrook plans today from $262,500 (Blakely $282,500, Thatcher $322,900), above the $232,310 middle of the past year's recorded sales. | Add "usually" and "last year" to each, for example "Lennar's townhomes here usually sold for about $230,000 last year, with an HOA fee of about $170 a month." |
| D13 | "For work, Conway Medical Center is a six-minute drive, and Horry-Georgetown Technical College and Coastal Carolina University are each about a seven-minute trip." (Fairways) | Row 200 gives drive times to a hospital and two colleges (6.0, 7.2, 7.9). No row says they are where Fairways owners work. The drives hold. | "Conway Medical Center is a six-minute drive, and Horry-Georgetown Technical College and Coastal Carolina University are each about a seven-minute trip." |
| D14 | "Most are three-bedroom houses with two baths, and the ones we saw for sale had an attached two-car garage." (Polo Farms) | Beds: 3, 3, 3, 4 in row 139 and 3, 3 in row 219, so "most are three-bedroom" holds (5 of 6). Baths are known for two listings only (2, 2). The garage clause is already hedged. | "Most are three-bedroom houses. The two we saw for sale had two baths and an attached two-car garage." |
| D15 | Chart label "new, low flood risk" (Indigo Grove) | Row 193 tested lots against FEMA's high-risk layer: 169 of 169 are in zone X, outside the high-risk zone. Zone X is "minimal hazard, not none" (this ledger's own note, summary item 8) and the test did not separate shaded from unshaded X. "Low risk" is FEMA's finding for the whole of zone X only if every lot is unshaded. The body says "outside the high-risk flood zone", which holds. | "new, no high-risk flood lots" (the wording v3 approved; 28 characters, so shorten to fit the chart). |

## Rows 214 to 222, one by one

**Row 214 (v4, done).** Both v4 corrections are on the page. Spec line 268: "Lennar's plans here list granite counters, stainless steel appliances, 9-foot ceilings on the first floor and energy-efficient windows. [Lennar's limited warranty] covers the workmanship for a year, the electrical, plumbing and mechanical systems for two, and the structure for ten." The link text is "Lennar's limited warranty". The Whispering Pines, HGTC and CCU ("each about a seven-minute trip"), Long Bay Club, Amber Bluff downtown Conway, Villas park and Parkview sentences are unchanged and still match v4. The sentences the round 14c cuts removed (Lewis Ocean Bay, Avocet, Enterprise Landing, Heron Point, the watch desk, Sandpiper Place, Broadway at the Beach, schools 4 to 5, the Victory Point resale comparison) no longer need a check. Status: **verified with corrected wording (v4); both corrections on the page (v5)**.

**Row 215, Parkview homes.** 1061 Pinwheel Loop: 3 bed, 2 full and 1 half bath, two levels, built 2005, "soaring vaulted ceilings", "covered front porch and a screened-in back porch", "primary suite, located on the first floor", Garage: No, one and a half spaces, HOA $325 with water and sewer. 1047 Pinwheel Loop: 2 bed, 2 full and 1 half bath, two levels, built 2005, vaulted ceilings in both bedrooms, covered front porch, screened back porch, two parking spaces, HOA $325 with water, sewer and internet. Every listing fact in the row holds. The page's second sentence is hedged ("the ones we have seen"). The first sentence and the "plan" clause are not (D9a, D9b). Status: **verified with corrected wording**.

**Row 216, Fairways homes.** All five opened. 1025 Fairway Ln: 3 bed, two levels, 2-car garage, 1,488 heated. 1127: 4 bed, two levels, 1-car, first-floor primary suite, 1,942. 1051 Tee Shot: 3 bed, two levels, 1-car, bedrooms upstairs, 1,508. 1028 Tee Shot: 4 bed, two-story, 1-car, first-floor primary suite, 1,942. 1018 Fairway: 3 bed, two-story, 2-car, first-floor primary suite, 2,052 heated. So: garage 5 of 5, two cars in 2, two-story 5 of 5, 3 or 4 beds, main bedroom downstairs in **3** (the row says "at least two"). The page, "Every Fairways townhome we found for sale had its own garage, and some had room for two cars. Most are two-story ... some put the main bedroom downstairs", is the approved "every one we found" form and holds. "Most are two-story" understates 5 of 5 and is safe. Status: **verified**.

**Row 217, Sawgrass East homes and lead.** 1057 Stanton Pl: 3 bed, two levels, one-car garage, "covered back porch", primary suite on the first floor, 1,600. 1004 Stanton Pl: 3 bed, two levels, one-car garage, first-floor primary suite, loft, "screened-in back porch", 1,600 heated. The row writes "a screened front porch" for 1004; the description says front porch and screened-in **back** porch, so the page's "screened or covered back porch" holds and the row text is wrong. Lead: the county Carolina Forest Recreation Center, 6.47 minutes (OSRM, 2.73 miles), gym, fitness room and climbing wall (county page, row 190), library on its campus (row 203). Fee $425 is the second highest after Wynbrooke $450 (Fairways $390). The "Most are" sentence is D8. Status: **verified with corrected wording**.

**Row 218, Golf and Yacht Club older homes.** 6634 Cinnamon Fern Ln: 3 bed, 2 bath, one level, 1989, patio. 6657: 2 bed, 2 bath, one level, 1989, front porch and patio. 6644 E Sweetbriar: 3 bed, 3 bath, one level, 1989, rear porch, deck, front porch. 6446 Sweet Gum: 2 bed, 2 bath, one level, 1986, screened porch and patio. 6621 W Sweetbriar: 3 bed, 2 bath, one level, 1996, rear and front porch, patio. All five: gated, HOA $95, one story, a porch or a patio. The RV and boat storage appears in two listings (6657, 6621). The pool, hot tub (HOA site, v4 item 11), tennis courts and community center hold. "Each one we saw for sale had a porch or a patio" holds (5 of 5). "On about an eighth of an acre": county lots are a median 5,650 sq ft = 0.13 acre (row 193 note), which holds. The "late 1980s" is D10. Status: **verified with corrected wording**.

**Row 219, Polo Farms homes.** 127 Heath Dr: 3 bed, 2 bath, one level, built 2006, attached 2-car garage, HOA $22. 820 Trey Ct: 3 bed, 2 bath, one level, built 2012, attached 2-car garage, HOA $20. Both hold. The page's "the ones we saw for sale had an attached two-car garage" is the approved form. D14 is the "Most are ... two baths" half. The $20 HOA label holds. Status: **verified with corrected wording**.

**Row 220, Wynbrooke homes.** 153 Wimbledon: two levels, one-car garage, screened porch, loft, HOA $335 with insurance, no water or sewer. 124 Wimbledon: 2 bed, two levels, "Garage, Private", rear and front screened porch, loft, HOA $330 with insurance, water, sewer, internet and cable. 681 Wilshire: 2 bed, two levels, Garage: No, screened porch, a loft room in the text, HOA $330 with insurance, water, sewer, internet. 815 Wilshire: 3 bed, two levels, two spaces, no garage, screened porch, HOA $330 with insurance, water and sewer. Two levels 4 of 4, screened porch 4 of 4, loft 3 of 4 (2 in the MLS field), one-car garage 1 of 4 (the row says 2). D7a, D7b. Status: **verified with corrected wording**.

**Row 221, Forestbrook Village lead.** Verified for the largest plan, not for "the biggest townhomes" as a group. D11 has the comparison: no other place's townhome in the ledger is larger than 2,400 square feet. Lennar does not label its square footage as heated; 1018 Fairway's total (not heated) is 2,410, which a careful reader could put beside 2,400. Status: **verified with corrected wording**.

**Row 222, wording and layout.**

1. Dek, "a new house, a gate, a garage or a four-minute beach drive": each is true of at least one place (Birchwood and others are new; Parkview and the Golf and Yacht Club are gated; the Fairways, Sawgrass East and Polo Farms have garages; Parkview's beach drive is 4.01 minutes to MYRTLE BEACH 13). Holds.
2. The "about half" bar. Myrtle Beach $421,250 (row 24, the city's 738 non-condo resales; the page rounds to $420,000). The twelve middle prices as a share of it: 45.1, 51.0, 52.8, 53.1, 53.4, 55.1, 55.9, 56.4, 58.2, 58.2, 59.2 and 60.5 percent. The range is 45 to 61 (the row says 45 to 61). The middle of the twelve is 55 percent. "About half" is a fair round figure; "a little over half" is closer, and only Parkview is under half. Holds, with that limit. Not struck.
3. The price sentences. See the table below.
4. Table note: D2. Table values: all 12 "fee and tax a year" figures match row 169; all 12 "to a beach" minutes match row 185's rule on the unrounded figures (4, 20, 20, 20, 15, 13, 14, 20, 7, 13, 9, 20). The caption "besides the mortgage and insurance, for a home you live in" matches row 169.
5. Amber Bluff lead: D5, D6. "Every townhome ... came with" is the builder's own "each of our homes" (row 146) and holds.
6. Indigo Grove "nearest beach about 13 minutes": 13.2 (row 185). Holds.
7. Victory Point "A Publix is a five-minute trip": 5.04 minutes (OSRM to the Oakheart Road Publix). Holds.
8. The cuts: nothing left over. The page no longer says the Golf and Yacht Club's landing, Heron Point, watch desk, pool hours or Sandpiper Place; no preserve, no Avocet name.

Status: **wrong in part (v5)** (D2, D5, D6, D7c, D12, D15).

### The 12 price sentences

| Place | Sentence in the offer box | Row | Verdict |
|---|---|---|---|
| Parkview | "Townhomes here usually went for about $190,000 last year, with an HOA fee of about $325 a month." | 117 ($190,000, 10 sales); fee 129, 215 ($325) | matches |
| Fairways | "Expect to pay about $215,000 ... plus an HOA fee of about $390 a month." | 118 ($215,000, 20); fee 130 (380 to 399) | figures match; wording D12a |
| Sawgrass East | "...usually costs about $225,000, and the HOA fee is about $425 a month." | 156 ($222,500, tie rounded up as on the page); fee 131 (423 to 432) | figures match; wording D12a |
| Birchwood | "New houses in Birchwood went for about $225,000 last year; the HOA fee is about $120 a month." | 158 ($223,825, 74 sales); fee 133 ($120) | figures match; D12b |
| Golf and Yacht Club | "Houses in the older part usually went for about $225,000 last year." | 161 ($225,000, 35) | matches (the $95 fee is in the lead) |
| Forestbrook Village | "Lennar's townhomes here went for about $230,000, with an HOA fee of about $170 a month." | 162 ($232,310, 30); fee 162 ($170) | figures match; D12b |
| Victory Point | "...usually sold for about $235,000, and the HOA fee is about $235 a month." | 159 ($235,630, 84); fee 137 ($235) | matches |
| Amber Bluff | "These townhomes went for about $240,000 last year, with an HOA fee of about $100 a month." | 122, 156 ($237,500 rounds up, 64); fee 134 ($100) | figures match; D12b |
| Villas at Sandridge | "...usually went for about $245,000, and the dues are about $300 a month." | 163 ($245,000, 15); fee 163 ($297) | matches |
| Indigo Grove | "New houses here went for about $245,000 last year, with an HOA fee of about $80 a month." | 160 ($245,000, 147); fee 135 ($80) | figures match; D12b |
| Wynbrooke | "...usually went for about $250,000, with that fee of about $450 a month." | 124 ($249,500, 14); fee 136 ($450) | figures match; D7c |
| Polo Farms | "Houses in Polo Farms usually went for about $255,000 last year." | 127 ($255,000, 16) | matches (the $20 fee is in the lead) |

## Drive and walk times

Re-run on OSRM from the ledger's start points (no traffic), then rounded by the batch rule (under 15 minutes to the minute):

| Page | OSRM | Result |
|---|---|---|
| Sawgrass East to the recreation center, "Six minutes" | 6.47 min, 2.73 mi | holds |
| Victory Point to a Publix, "five-minute trip" | 5.04 min | holds |
| Fairways to the Aldi, "three-minute trip" | 3.19 min | holds |
| Amber Bluff to CCU and to HGTC, "each a six-minute trip" | 6.23 and 6.00 min | holds |
| Amber Bluff to Brooks Stadium | 6.34 min, 2.06 road mi (1.2 mi straight) | D6 |
| Forestbrook Village to the middle and elementary schools, "four to five minutes" | 4.31 and 4.89 min | holds |
| Parkview to MYRTLE BEACH 13, "four-minute" | 4.01 min | holds |
| Victory Point to Tanger Outlets (label "by Tanger Outlets") | 4.61 min, 1.18 road mi | holds as a place name; not a distance claim the page makes |
| Indigo Grove to Griffin's IGA | 3.12 min | holds |

Distance words (`rules/distance-words.json`, CRAFT 2): none of "short drive", "close by", "few blocks", "just across", "a few minutes", "walking distance" or "next door" is on the page. "Borders it" (Grand Park and The Market Common) rests on the city's page, "Grand Park is adjacent to The Market Common" (v1). "Beside the tall water tower" and "beside US 501" are old and unchanged. The one distance that fails as a way there is the stadium (D6).

## Sibling check (review/SIBLING-OWNERS.md)

- The Golf and Yacht Club entry has none of Enterprise Landing, Heron Point, the watch desk or Sandpiper Place, and one line on the gate. Passes.
- The Farm: no preserve, no flytraps, no Lewis Ocean Bay. Sawgrass East leads with the recreation center, not the preserve. Passes.
- Wild Wing: no Avocet name or designers. Passes (but see D1: the count of open courses is wrong, and best neighborhoods says "the nine-hole Hummingbird" in its own words, so give the count and no names).
- Sports complex and Shark Wake Park: this page only. Passes.
- Not in the owner table, but the same fact on two pages (for the lead to decide):
  - "a storage area for RVs and trailers" and "an HOA fee of about $95 a month": `gated-communities.js` line 250 says "The association also has a storage area for RVs and trailers" with the same $95.
  - The county recreation center and library: `the-farm.js` line 255 says "the county library and the Carolina Forest Recreation Center share one campus ... a full gym and a rock climbing wall". Sawgrass East says the gym, fitness room and wall, and the shared campus.
  - The Market Common as the old Air Force base and Grand Park beside it: `best-neighborhoods.js` lines 112 and 289.

## Chart labels

At `565134f`/`7ca3500` (the preview): gray bar "A Myrtle Beach home" with "these cost about half"; then 4 min to the beach, golf; own garage, golf community; pool, gym 6 min away; new house, quarter acre; gated, one-story homes; the biggest townhomes; new, by Tanger Outlets; smart homes, game days; 7 min to the beach; new, low flood risk; 5 min to the MarshWalk; one-story, $20 HOA fee. All hold except "the biggest townhomes" (D11) and "new, low flood risk" (D15). "own garage" is true of 5 of 5 Fairways listings found. "gated, one-story homes" is true of the older part, the part the price covers.

### Final label check (working tree at 02:07 UTC, preview rebuilt 02:08)

The lead changed the labels while I worked. Now: "4 min to the beach, golf"; "own garage, golf community"; "garage, pool, clubhouse"; "new house, quarter acre"; "one-story older houses"; "the biggest townhomes"; "new, by Tanger Outlets"; "smart homes, game days"; "7 min to the beach"; "new, 22 acres open space"; "5 min to the MarshWalk"; "one-story, $20 HOA fee". The gray bar is "A Myrtle Beach home, to compare" ($420,000) and the caption is "These usually sold for about half what a Myrtle Beach home did".

- 11 of 12 hold. "new, low flood risk" is gone, so D15 is resolved in the working tree.
- "new, 22 acres open space" holds: the Overlook HOA owns 22.45 acres (row 193 note).
- "garage, pool, clubhouse" holds for the two Sawgrass East listings (one-car garage, clubhouse and pool in the MLS fields) and for the pool in 5 of 6 older listings. Do not let the entry say every townhome has the garage (see below).
- "the biggest townhomes" still stands: D11. Use "plans up to 2,400 sq ft".
- Length: the longest is 26 characters ("own garage, golf community"). All are within the 26 the commit message sets.
- The caption's "about half" holds with the limit under row 222, item 2 (45 to 61 percent, middle 55).

### Working-tree edits seen after 565134f (not part of the commit I was asked to check, not fully read)

- D1 is fixed: "Wild Wing still has 27 holes of golf" (Avocet 18 and Hummingbird 9, playwildwing.com; neighborhoods ledger row 193).
- New universal sentence: "At Sawgrass East, a townhome comes with its own one-car garage." Two listings show it. I added a struck entry ("affordable 217"); use "The two Sawgrass East townhomes we found for sale each had a one-car garage."
- Still in the working tree and still firing the struck list: D3 (short answer), D4, D5, D6, D7a to D7c, D9a, D9b, D10 ("mostly one-story houses from the late 1980s"), D11, D12a, D12b, D14. The preview now fires 23 phrases on the affordable page.

## Struck entries added

27 entries in `affordable-places-to-live-struck.json` (93 to 120), rows "affordable 215, 217, 218, 219, 220, 221, 222" and "affordable 223" (the rewrite-check row), and "affordable 200" for D13. `node tools/struck-check.test.js` prints "all controls pass": each struck sentence fires its entry and each supported wording fires none. `--strict` on the preview (rebuilt at 02:08 from the working tree) now reports **23 struck phrases on the affordable page** (127 patterns); the hits go quiet when the writer applies the wordings above.

## Status

Row 214: verified with corrected wording (v4), both corrections on the page. Rows 215, 217, 218, 219, 220, 221: verified with corrected wording. Row 216: verified. Row 222: wrong in part (v5). New row 223 (rewrite check, v5): wrong in part (D1, D3, D4, D13 and the others in the table).
