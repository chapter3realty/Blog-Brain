# Affordable places to live, row 224 and rewrite check v6 (round 14d, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before. Task: check ledger row 224, and read every sentence that round 14d changed or newly states against its row and its source (lessons B30, B45, B46, B47, B48). I did not edit the spec.

Spec read: `batches/2026-10-b/specs/affordable-places-to-live.js` at HEAD, diffed against `7ca3500` (295 diff lines; the working tree was clean for this file and equal to HEAD the whole time). The preview read is `.../scratchpad/preview/b/affordable-places-to-live.html`, built 02:16:29 UTC, after the last spec edit at 02:16:22.

## Sources I opened myself

- Wild Wing's own page, https://www.playwildwing.com/about-wild-wing/ (HTTP 200 after the redirect from `playwildwing.com`): "Home to 27 holes, Wild Wing has long been one of the Myrtle Beach area's most distinctive golf properties"; "Avocet is complemented by the Hummingbird nine, a par 34"; "The Newly Restored Avocet Course Is Now Open"; the Avocet reopened on September 19 after a 2026 restoration.
- Lennar's Victory Point page: one plan, the Blakely, "3 bd, 3 ba, 1,437 ft²"; "Temporarily sold out"; "swimming pool, playground and picnic area, all complemented by a pristine pond".
- Lennar's Birchwood page: six plans (Gerson, Lookout, Brower, Woodhaven, Mayer, Whitetail), 3 to 4 bedrooms, 1,087 to 1,952 square feet. The community page lists no ceiling heights.
- The two Sawgrass East listings (1057 and 1004 Stanton Pl, tracimiles.com): both 3 bed, two levels, one-car garage, "Clubhouse" and community pool; 1057 has the primary bedroom and bath on the first floor and no loft; 1004 has the primary suite on the first floor and a loft. No Zillow page.
- OSRM (router.project-osrm.org) and Nominatim for the drives below.
- Not reachable today: Overpass (connection reset) and a Nominatim polygon for the Wild Wing course, so I could not measure the Fairways townhomes to the course. The ledger's own evidence (row 143: MLS "Near Golf Course" in 2 of 5 listings) is what the page rests on.

## Result

- Row 224: **verified with corrected wording (v6)**. Its six parts hold except the headings and one table of wording named below.
- Round 14d changed or newly states **72 fact-bearing units** (headings, sentences, chart labels, the caption, the price boxes, the sources line). **67 match. 5 drift**, in 5 distinct drifts (D16 to D20).
- None must be dropped. All five are one-phrase fixes: three headings that say "by" where the measure is a five-minute drive or "some", one "have" for "list", and one "To qualify:" that turns three limits into the full list.
- v5 corrections D1 to D15 are applied. **No new drift in the 14 sentences v5 corrected** (D1 to D14; D15 resolved). Details in the next section.
- B48 (small samples): home details are read as what we have seen in every place checked; all 12 prices say "usually sold for" or "usually went for" "last year". See the B48 section.
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, before my entries, on the preview built from HEAD: **affordable-places-to-live (127 patterns): no struck wording.** No old wording came back. (The run's 23 hits are all on best-neighborhoods, not this page.) After my 5 entries (132 patterns) it reports 5 phrases on the affordable page, as intended.
- Struck entries too broad: three. Narrowed; see "The struck entries that forced 'went for'".
- Sibling check (`review/SIBLING-OWNERS.md`): passes. Times: every time on the page that changed was re-run and holds; no banned distance word.

## The v5 corrections, one by one (B45)

| v5 | Page sentence now | Check |
|---|---|---|
| D1 | "Wild Wing still has 27 holes of golf, and some Fairways townhomes are near the course." | Holds. Wild Wing's page: "Home to 27 holes"; Avocet (18) plus the Hummingbird nine. "Some ... near" rests on row 143 (2 of 5 listings say "Near Golf Course"). Names stay on best neighborhoods. |
| D2 | "...usually at Sawgrass East and Wynbrooke. At the Fairways, only some homes list them in the fee." | Word for word the v5 wording. Holds. |
| D3 | Short answer: "Within about 20 minutes of a beach, these twelve neighborhoods near Myrtle Beach had the lowest prices last year." Description: "the twelve lowest-priced neighborhoods within about 20 minutes of the beach" | The description is the v5 wording. The short answer drops "where at least 10 homes sold" and "public beach access". It holds because the 10-sale rule is on the page in FAQ 1 ("where at least 10 homes sold") and in the sources line ("The list: 10 or more sales and a beach access within about 20 minutes"). Row 155's rule is "at least 10 kept sales" and a drive to a public beach access that "rounds to 20 minutes or less (under 22.5)". Polo Farms is 22.0 and the table shows "About 20 min"; that is the page's rounding rule. Nothing on the list is cheaper and inside the rule (row 156). Not struck. A writer with room could add "where at least 10 homes sold". |
| D4 | "Birchwood is small: 77 lots, with new Lennar houses on lots of about a quarter acre and about 12 acres of open space." | The v5 wording. Holds (rows 190, 193). |
| D5 | "you can control the front door lock, the thermostat and the video doorbell from your phone." | Holds (row 146). |
| D6 | Heading "about 6 minutes from the football stadium"; "Brooks Stadium ... is about a six-minute drive." | Re-run: Amber Bluff middle to OSM way 610210985, 6.34 min, 2.06 road miles. Holds. |
| D7a | "The ones we found for sale had two stories and a screened porch, most with a loft, and some with a garage." | The v5 wording (rows 220, 151). Holds. |
| D7b | "...usually pays for the insurance on the buildings and for the grounds care." | The v5 wording. Holds. |
| D7c | "...with an HOA fee of about $450 a month." | Holds (row 136). |
| D8 | "The two Sawgrass East townhomes we found for sale were three-bedroom, two-story homes, each with a one-car garage. Both had the main bedroom downstairs, and one had a loft above." | Re-opened both listings: 3 bed, two levels, one-car garage, first-floor primary bedroom in both, loft in 1004 only. Holds. |
| D9a, D9b | "The townhomes we've seen for sale here have two stories ... the three-bedroom one we saw had the main bedroom downstairs." | The v5 wording. Holds (row 215: 1061 is the 3-bedroom, first-floor primary). |
| D10 | "mostly one-story houses built in the 1980s, with two or three bedrooms and two baths" | Row 218: five of five one level; built 1989 (three), 1986, 1996. Row 132: 1980s for 6 of 11 older listings. "Mostly" covers the 1996 house. Beds 2 or 3; baths 2 in 4 of 5 and 3 in one: "two baths" is the usual, and "mostly" governs the clause. Holds. |
| D11 | "the largest townhome plan on this list ... run from about 1,450 up to 2,400 square feet, each a three-bedroom plan over two stories"; label "plans up to 2,400 sq ft" | The v5 wording. Holds (row 193 note, Lennar plan pages: 1,437 / 1,905 / 1,998 / 2,400). |
| D12a, D12b | All 12 price sentences | Every one says "usually sold for" or "usually went for" "last year" (see the table below). Holds. |
| D13 | "Conway Medical Center is a six-minute drive." | "For work" is gone; the college drives are cut from the Fairways. Holds (row 200). |
| D14 | "Most are three-bedroom houses. The two we saw for sale had two baths and an attached two-car garage." | The v5 wording. Holds. |
| D15 | Label "22 acres of open space" in place of "new, low flood risk" | Holds: the Overlook HOA owns 22.45 acres (row 193). |

### The 12 price sentences (B48, D12)

| Place | Sentence | Row | Verdict |
|---|---|---|---|
| Parkview | "Townhomes here usually sold for about $190,000 last year, with an HOA fee of about $325 a month." | 117; 215 | holds |
| Fairways | "Fairways townhomes usually sold for about $215,000 last year, and the HOA fee is about $390 a month." | 118; 130 | holds |
| Sawgrass East | "Sawgrass East townhomes usually went for about $225,000 last year, and the HOA fee is about $425 a month." | 156 ($222,500, tie rounded up); 131 | holds (the writer used "went for" because a struck entry blocked "sold for"; see below) |
| Birchwood | "New houses in Birchwood usually sold for about $225,000 last year; the HOA fee is about $120 a month." | 158; 133 | holds |
| Golf and Yacht Club | "Houses in the older part usually sold for about $225,000 last year, and the HOA fee is about $95 a month." | 161; 132 | holds |
| Forestbrook Village | "Lennar's townhomes here usually sold for about $230,000 last year, with an HOA fee of about $170 a month." | 162 ($232,310) | holds |
| Victory Point | "Townhomes in Victory Point usually sold for about $235,000 last year, and the HOA fee is about $235 a month." | 159; 137 | holds |
| Amber Bluff | "These townhomes usually went for about $240,000 last year, with an HOA fee of about $100 a month." | 122, 156 ($237,500); 134 | holds |
| Villas at Sandridge | "These townhomes usually sold for about $245,000 last year, and the dues are about $300 a month." | 163; 163 ($297) | holds, with one limit: the 15 sales fall in two groups (about $240,000 to $245,000 and $270,000 to $287,000, row 163). The middle is in the lower group. "Usually" is the middle's word; the ledger does not give the count in each group. Not struck. |
| Indigo Grove | "New houses here usually went for about $245,000 last year, with an HOA fee of about $80 a month." | 160; 135 | holds |
| Wynbrooke | "Townhomes in Wynbrooke usually went for about $250,000 last year, with an HOA fee of about $450 a month." | 124 ($249,500); 136 | holds |
| Polo Farms | "Houses in Polo Farms usually sold for about $255,000 last year." | 127 | holds |

## The drifts

Page sentences are from HEAD (`c61afb6`).

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D16 | Heading "11. Wynbrooke: townhomes by the Murrells Inlet MarshWalk" | "By" reads as next to it. Row 178: the MarshWalk (OSM way 427575453) is 3.31 km, about 2.1 miles, in a straight line from the middle of Wynbrooke's sales, and 5.4 minutes by car (row 183). The body and the chart label already say "five minutes". The 14c heading was "five minutes from the Murrells Inlet MarshWalk". | "Wynbrooke: townhomes five minutes from the Murrells Inlet MarshWalk" |
| D17 | Heading "9. Villas at Sandridge: townhomes by a cable wake park" | The wake park is inside the North Myrtle Beach Park and Sports Complex, which is 1.1 miles in a straight line and 1.67 road miles (5.3 min) from Villas, across the SC 31 and SC 90 interchange (rows 178, 183). The body says "a five-minute drive". The old heading gave the five minutes. | "Villas at Sandridge: townhomes five minutes from a cable wake park" |
| D18 | Heading "2. The Fairways at Wild Wing: townhomes with their own garage, by the golf" | Row 143: "near it" rests on the MLS field "Near Golf Course" in 2 of 5 listings. The body says "some Fairways townhomes are near the course". The heading says all of them are by the golf. The earlier heading, "in a golf community", was verified. (The chart label "own garage, golf" says only that the place has golf and holds.) | "The Fairways at Wild Wing: townhomes with their own garage, in a golf community" |
| D19 | "High-speed internet is included in the monthly dues, and Lennar's plans here have 9-foot ceilings on the first floor." (Birchwood) | Row 204: Lennar's plan pages for two of the six plans (Woodhaven, Gerson) list 9-foot smooth ceilings on the first floor. v4 corrected this to "plans here list". "Have" states it as a fact of all six, and Lennar's community page lists no ceiling height. | "Lennar's plans here list 9-foot ceilings on the first floor" (v4's wording) |
| D20 | "You do not have to be a first-time buyer. To qualify:" then three bullets (must not own a home; income under about $115,000 or $134,000; price up to $450,000) | Rows 92 to 94 give these three limits. "To qualify" says they are the whole list. The next paragraph says the lender step "includes the credit score it needs", so the page contradicts itself. | "You do not have to be a first-time buyer. The program has these limits:" |

Notes that are not drifts:

- **Short answer** (D3 above): holds with the 10-sale limit in FAQ 1 and the sources line.
- **Chart caption "About half the price of a Myrtle Beach home"** (row 224 item 4, row 222 item 2): the twelve middle prices are 45 to 61 percent of $421,250, the middle of the twelve is 55 percent. Holds as a round figure. Two limits carry over from v5: Polo Farms is 61 percent, and the Myrtle Beach figure is the 738 non-condo resales (row 24), while the twelve include new-home builder sales. The direction is safe: Myrtle Beach builder sales have a middle of $621,492 (row 24), so adding them would raise the Myrtle Beach figure.
- **Dek** "ranked by the county's deed records": holds. The ranking is the middle recorded sale (row 155), from the county's deed index matched to its parcels.
- **Birchwood** "A quarter acre gives a new house a real backyard at this price." The lot figure holds (median 0.23 acre, rows 190, 195). "Real backyard" is the writer's description, not a fact.

## Row 224 item by item

1. **Wild Wing, 27 holes**: verified on Wild Wing's own page (above). "Still" is right: Wild Wing once had more courses (row 143). "Some Fairways townhomes are near the course": row 143, 2 of 5 listings. Best neighborhoods says the Avocet and "the nine-hole Hummingbird" in its own words and does not count to 27, so the two pages agree and do not repeat each other.
2. **Short answer scope**: holds with the limit above.
3. **"Four of the twelve are neighborhoods of houses; the rest are townhomes"**: Birchwood (new Lennar houses, rows 133, 158), the Golf and Yacht Club (older part: one-story houses, rows 132, 218), Indigo Grove (Lennar houses, rows 135, 187), Polo Farms (one-story houses, rows 139, 219). The eight others are townhomes: Parkview (149), Fairways (130), Sawgrass East (131), Forestbrook Village (162), Victory Point (137), Amber Bluff (134), Villas at Sandridge (163), Wynbrooke (136). Holds.
4. **The line under the H1**: holds.
5. **Chart labels**: "own garage, golf" holds (garage 5 of 5 Fairways listings, row 216; golf is the community's). "garage, pool, clubhouse" holds for Sawgrass East (opened both listings; pool and clubhouse in the MLS fields, row 150 safe wording). "one-story older houses" holds (row 218: five of five one level). "plans up to 2,400 sq ft" holds. "22 acres of open space" holds. "4 min to the beach, golf" (Parkview) and "smart homes, game days" unchanged and hold. All within 26 characters. Phone: `phoneList: true` (no facts).
6. **The new openings**:
   - Sawgrass East: holds (D8; no recreation center on the page, The Farm owns it).
   - Golf and Yacht Club: holds (D10; "The community is gated" is the one line on the gate; pool, hot tub, tennis courts, community center are the HOA's, row 207, v5 row 218; no RV storage, Enterprise Landing, Heron Point, watch desk or Sandpiper Place).
   - Forestbrook Village: holds (D11); "For a night out, Broadway at the Beach is 12 minutes away": re-run 12.14, 12.30 and 11.07 minutes to three entrances of the complex.
   - Indigo Grove's 22 acres: holds. "Indigo Grove is a new Lennar neighborhood south of Longs" (row 147); "its association owns about 22 acres of open space" (22.45, row 193); "Lennar sells it as The Overlook"; "Lennar lists nine floor plans with three to five bedrooms, some of them one story" (rows 187, 193); the flood sentence is unchanged.
   - Villas at Sandridge: the lead and the park paragraph hold; the heading is D17.
   - Victory Point: "The townhomes are new, three-bedroom and about 1,450 square feet, and some back onto the pond. Lennar built them off US 501, by Tanger Outlets, with a pool, a playground and a picnic area." Holds. Lennar's page lists one plan, the Blakely, 3 bd, 1,437 ft²; the six listings (row 137) are 1,437 to 1,456 square feet and all 3 bedrooms; "Pond on Lot" on 2 of 6; amenities are Lennar's own list. Lennar made 80 of the 84 recorded sales (row 159), so "Lennar built them" holds for nearly all and is the plain claim the page has made since 14.
7. **"About half the price of a Myrtle Beach home"**: holds with the limit above.

## B48: small samples

Every home detail from a few listings is worded as what we saw. Checked: Parkview ("The townhomes we've seen for sale here ... the three-bedroom one we saw"), Fairways ("Every Fairways townhome we found"), Sawgrass East ("The two ... we found for sale"), Golf and Yacht Club ("each house we saw for sale"), Wynbrooke ("The ones we found for sale"), Polo Farms ("The two we saw for sale"), Amber Bluff ("The ones we have seen for sale all share one three-bedroom floor plan"). Where a builder's list is the source (Forestbrook, Victory Point), the page says "plans" or names the builder. Prices are typical past sales in every box. The one place a few sources read as a rule is D19 (two plans, "have"). B48 was amended at 02:28 UTC, after I read the page: the sample voice ("we saw", "we found") now counts as the reporter's voice when it repeats in every entry, and the writer prompt asks for a full source (county parcels, builder plans) with one listing detail at most. That is a style rule for the next rewrite. Every sample sentence on the page is factually correct as worded, so none is a drift here. Two judgments I made that you may want to know: "Some have a screened or covered back porch" (Sawgrass East) understates 2 of 2, which is safe; "two baths" (Golf and Yacht Club) is 4 of 5 under "mostly", which I passed.

## Drive and distance times

Re-run on OSRM from the ledger's start points, no traffic, then rounded by the batch rule:

| Page | OSRM | Result |
|---|---|---|
| Amber Bluff to Brooks Stadium, "about a six-minute drive" | 6.34 min, 2.06 mi | holds |
| Forestbrook Village to Broadway at the Beach, "12 minutes" | 12.14, 12.30, 11.07 min to the three entrances | holds |
| Parkview to The Market Common, "a ten-minute trip" | 10.03 min | holds |
| Parkview to the airport terminal, "a six-minute drive" | 6.16 min | holds |
| Birchwood to Coastal Grand Mall, "about 40 minutes ... by the Carolina Bays Parkway" | 41.6 min; the route runs Highway 9 East then the Carolina Bays Parkway | holds ("about 40" is the 5-minute rounding) |
| Wynbrooke to the MarshWalk, "five minutes" | 5.41 min (ledger) | holds; heading D16 |
| Villas at Sandridge to the sports complex, "a five-minute drive" | 5.3 min, 1.67 mi (ledger) | holds; heading D17 |

Distance words (`rules/distance-words.json`): none is on the page. The tool's batch run found none for affordable. "By" in three headings is the same problem, and D16 to D18 strike it.

## Sibling check (review/SIBLING-OWNERS.md)

- Wild Wing / Fairways: the Avocet and its designers are on best neighborhoods only; the page has the count (27 holes) and no names. Passes.
- Golf and Yacht Club: gated owns Enterprise Landing, Heron Point, the watch desk, Sandpiper Place and (in its own words) the RV and trailer storage and the HOA's green space; this page has none of them, one line on the gate, and the older homes and what the price buys. The two pages agree on the figures: "about $225,000 in the older part" and "$95 a month". Passes.
- Sawgrass East / The Farm: no preserve, no flytraps, no recreation center, no library. Passes.
- The Market Common: best owns the base history; this page names the shops, restaurants and theater and the ten-minute trip only. Passes.
- Sports complex and Shark Wake Park: this page only (no other spec mentions them). Passes.
- Wynbrooke's MarshWalk: best (Prince Creek, "about 7 minutes"), gated (Seasons, "10-minute drive") and no-hoa ("3 miles south") each give their own distance from their own place; none repeats this page's description of the boardwalk. Passes.
- Forestbrook Village is not Forestbrook Estates (best); no shared fact.

## The struck entries that forced "went for"

The writer is right: three entries blocked "usually sold for" and the writer had to write "went for" in three boxes (Sawgrass East, Amber Bluff, Wynbrooke). Tested by running each of the 12 price sentences with "usually sold for" and "usually went for" against the list before and after.

| Entry | Pattern before | Why it was struck | Problem | Pattern now |
|---|---|---|---|---|
| affordable 120, 161 | `\busually sold for about \$225,000` | The Golf and Yacht Club's $225,000 is the older part only; the whole community's middle is about $315,000 (row 161) | Fired on any $225,000: Sawgrass East ($222,500) and Birchwood ($223,825) are $225,000 too | Fires on a bare "Homes/Houses ... usually sold for about $225,000", and on a sentence that names the Yacht Club. The `unless` (older, Birchwood, Lennar, new) is kept. |
| affordable 125, 126 | `\busually sold for about \$250,000` | Victory Point's and Coopers Bluff's old $250,000 were wrong (Victory Point is $235,000, row 125; Coopers Bluff has two price groups, row 126) | Fired on any $250,000: Wynbrooke's middle is $249,500 | Fires on a bare "Homes/Houses/Townhomes ... usually sold for about $250,000", and on a sentence that names Victory Point or Coopers Bluff |
| affordable 126 | `\btownhomes usually sold for about \$240,000` | Coopers Bluff's townhome resales ($241,000) with its houses | Fired on Amber Bluff ($237,500, rounds to $240,000) | Fires on "The townhomes usually sold for about $240,000" (the struck sentence) and on a sentence that names Coopers Bluff; `unless resold` kept |

After the change: "usually sold for" and "usually went for" are both quiet on all 12 price sentences, and the three struck sentences, and a Yacht Club, a Victory Point and a Coopers Bluff variant, still fire. Controls added in `tools/struck-check.test.js` (3 firing, 3 quiet, using the page's own sentences). The writer may now use "usually sold for" in all three boxes; "went for" stays allowed.

## Struck entries added

5 entries in `affordable-places-to-live-struck.json` (row "affordable 224"), one for each of D16 to D20. Plus the 3 narrowed above. `node tools/struck-check.test.js` prints "all controls pass": each struck wording fires its entry and each approved wording fires none. `--strict` on the preview now reports **5 struck phrases on the affordable page** (132 patterns); they go quiet when the writer applies the wordings in the table.

## Status

Row 224: verified with corrected wording (v6). New row 225 (rewrite check, v6): wrong in part (D16 to D20).
