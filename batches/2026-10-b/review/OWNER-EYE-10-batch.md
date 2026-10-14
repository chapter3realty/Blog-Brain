# Owner's eye, round 10: batch 2026-10-b, all five pages

Reviewer: a fresh agent, the owner's stand-in. I did not research, write, edit or review any page in this batch before, and I did no earlier owner's-eye round. Read on 2026-10-14 from copies of the previews in `scratchpad/preview/b/` (builds 06:49 to 07:10), saved to `scratchpad/oe-b10/src/` so the pages did not change under me. Screenshots at 390 and 1280 px, after a slow scroll with the search and lead pop-ups closed, are in `scratchpad/oe-b10/`: one folder of phone screens and figures per page, the full pages at both widths, `<page>-img/` (every picture at its own size), `sheets/` (contact sheets), each page's text and its `repeat-check` report (`<page>.repeat.txt`). I opened every map, chart, aerial and photo full size.

The owner's bar: pages "so perfectly for the audience ... that I dont need to change anything", "not surface level AI slop", "valuable information at the level I as a human couldn't reach", "top SEO and GEO ... perfect for human readability". His named faults: repetition, filler, telling the reader to check, surface-level answers, price ahead of what the house and location give you.

## Grades

| Page | Grade | Ready (9+) | High | Medium | Low |
|---|---|---|---|---|---|
| /submarkets/carolina-forest/the-farm/ | **9** | Yes | 0 | 0 | 3 |
| /buyers/no-hoa-homes/ | **9** | Yes | 0 | 0 | 4 |
| /buyers/best-neighborhoods/ | **8** | No | 0 | 5 | 8 |
| /buyers/gated-communities/ | **8** | No | 0 | 6 | 8 |
| /buyers/affordable-places-to-live/ | **8** | No | 0 | 4 | 11 |

Two pages are ready, the same two as round 9, and both now have nothing above low. The other three moved up: gated and affordable from 7 to 8, best stays at 8 with its two empty entries filled. No high finding is left anywhere in the batch. Every medium left is a sentence-level edit or one new row, except two entries that still need research (best's Forestbrook Estates, affordable's Indigo Grove and Polo Farms).

## Gates

- `repeat-check --strict`: passes on all five. 0 repeated body sentences on any page. No entry under 90 words (best 95 to 161, gated 92 to 176, no HOA 94 to 171, affordable 94 to 150).
- `struck-check --batch batches/2026-10-b --preview <copies> --strict`: no struck wording on any page (363 patterns).

I read every `repeat-check` finding against the page. The real ones: gated "here in the past year" and "mile" in 12 of 20 entries (gated mediums 1 and 2); affordable "about [number] minutes by car" (affordable medium 2). The rest are the page's subject or its amenities said in different sentences: "boat" on no HOA, "course", "courts", "pool" on best and gated, the flood line in the entries where flood is the trade-off.

## The pattern this round

Round 9 found entries cut thin. Round 10 refilled them, and the depth is real: Wachesaw's archaeology, Deerfield's lawsuit over the old Deer Track course, Victory Point's racing street names, the Cherry Grove canal story, Willbrook's rice history. The repetition the owner named has not come back.

The new fault is the one the round 10 brief predicted. After many verifier passes, a layer of sentences now reads like the verifier's notes, not an agent's voice:
- straight-line distances: "Measured in a straight line, Cherry Grove's public boat ramp is less than a mile from the middle of the neighborhood. By road it is about 5 miles." (gated); "about 2 miles away in a straight line, and about 5 miles by road. The neighborhood has ponds, not a lake." (best);
- sales and records counts: "Six sales were recorded in the past year.", "Houses listed here in the past year were built from 2000 to 2006.", "Few homes sold here in the past year, so the $1 million middle price is a rough guide." (gated);
- measuring points: "From a home near the middle of the neighborhood, ... From the same spot, ..." (best); "Main Street's nearest block is 0.45 mile from the same spot, also in a straight line." (gated);
- errand drive times with compass directions, two or three per entry (affordable).

Each sentence is true and verified. Together they make the page read like a data sheet, and they push the number count up. The cure is CRAFT 5's "Say what it means, not what it is": "Homes rarely come up for sale here", "Houses here were built in the early 2000s", one drive time to the place that matters. A suggestion for the writers: after a verifier changes a sentence, read it aloud as an agent would say it to a buyer in the car. If no agent would say it, rewrite it or move the method to the sources line.

## Batch-wide findings

**Fixed: the stories.** Five wants, five shapes, five openings. The Farm: a pool the rules do not allow. Best: the second-home tax rate. Gated: guests at a guarded gate. No HOA: a boat in the front yard. Affordable: down-payment help. Only no HOA is about a boat, and only no HOA opens "[Name] wants ... She likes ...". Round 9's batch medium is closed.

**Fixed: one home for each history.** Tidewater in full on gated, a pointer on best. The Ark and Floral Beach in full on best, a pointer on no HOA. The Cherry Grove canals in full on no HOA, one fee line under best's yearly-cost table. TPC on best, a pointer on gated. The bombing range in full on The Farm, one line and a link on gated.

**Fixed: the cheapest gated places.** Myrtle Beach Golf and Yacht Club is gated entry 9, in the under-$550,000 legend. The affordable page no longer calls Parkview gated.

**Medium. The bombing range has two date ranges.** The Farm: "The Farm is on land the Army Air Force used as a bombing and gunnery range from 1942 to 1948." Gated, entry 5: "the Army used part of it as a bombing and gunnery range from 1942 to 1947." The Farm's row is the Defense Department's site record ("used from 1942 until 1948"); the gated row is a county history and a newspaper. A reader who follows gated's link to The Farm reads two years. Want: one value on both pages, the Defense Department's, or "during and after World War II" on gated; register it in `facts/registry.json`, since it is now on two pages.

**Medium. Two entries repeat a sibling page nearly word for word.**
- Barefoot Resort. Best 3: "In season, a shuttle runs from the resort to the beach." Gated 3: "In season, a shuttle runs from the resort to the beach." Both entries then give the beach cabana, the North Tower pool and the Residents' Club.
- The Farm. Best 7: "D.R. Horton recorded The Farm's HOA rules in 2004 and added land in stages after that. In 2019 it gave up its right to appoint most of the HOA board. The farm theme runs through many of the street names: Scarecrow Way, Haystack Way, Pumpkin Patch Lane, Wheatfield Drive." The Farm page: "D.R. Horton recorded The Farm's HOA rules in 2004 and added land in stages until 2017. In 2019, it ended its right to appoint a majority of the HOA board. The farm theme runs through the street names, such as Scarecrow Way, Haystack Way, Pumpkin Patch Lane and Wheatfield Drive."

The owner, on an earlier batch: "Have we not talked about this on the website already?" ROUND-10's rule, one home for each history, applies here too. Want: gated's Barefoot entry keeps Leatherleaf and Dye Estates (its gated parts) and drops the shuttle, cabana and pool, which best covers. Best's Farm entry keeps the street names (its one device use) and drops the D.R. Horton and board history, which The Farm page tells; give it a fact The Farm page's readers do not need, such as the state land on its north side planned for the Lewis Ocean Bay Heritage Preserve, and the link.

**Medium. Two prices for Bellwood Landing.** Best 15 names "Bellwood Landing, Creekhaven, Longwood Bluffs and Wilderness Pointe" as Prince Creek West's neighborhoods and says "Homes usually sell for $315,000 to $620,000". Gated 12: Bellwood Landing "Homes usually sell for about $850,000". Best file, medium 2.

**Medium. The Golf and Yacht Club's gate is stated on gated and doubted on affordable.** Gated 9: "a gatehouse at the entrance on Bay Road". Affordable 5: "We check the HOA papers for what the fee covers, including any gate and security." Affordable file, medium 4.

**Low. Rush hour in two voices.** The Farm: "In our experience, rush hour adds 5 to 10 minutes." Affordable: "In the owner's experience, rush hour adds 5 to 10 minutes." Use "our" on both.

**Low. The overview maps on best, gated and affordable** still leave three to five dots with no name, and affordable numbers the mall 13.

**Non-negotiables.** No fair-housing language: no "safe" (gated says "We do not rate any neighborhood as safe or unsafe"), no claim about who lives anywhere. Two stories name the buyer's own family (gated's grandchildren; affordable's table "has children in school", low 9 there); both speak of the reader, not of a neighborhood. No interest rate or payment amount; the down-payment section gives program amounts and limits, and the story names no lender. Devin Day appears only in the byline; Paul nowhere. No invented quote; Tim Nash is only the reviewer. Unsupported-looking claims: one attributed superlative on gated ("Michie said the project was the most extensive archaeological research done on any South Carolina plantation.") and a 2013 builder listing stated as today (gated medium 3). "In our experience, many HOAs here do not allow renting a house out at all." (no HOA) rests on the agents' knowledge; round 9 checked it against the story bank.

## Sibling table

Counted from my copies at 390 x 844. Words: the page text from the breadcrumb to the sources line, with captions, map labels, tables and the FAQ. Pictures: photos, aerials, maps and charts. "Of the subject": pictures of the places the page is about. Must-answers: from `batches/2026-10-b/PLAN.md`. Entry words: `repeat-check` body words, without tables, captions or the facts line. Longest section leaves out the FAQ.

| Page | Words | Pictures | Of the subject | Must-answers | Phone screens | Entry words (range, median) | Longest section |
|---|---|---|---|---|---|---|---|
| Best neighborhoods | 4,436 | 16 (1 map, 15 aerials) | 15, one per place | 7 of 8 wants ("new homes" still has no legend line); trade-off in 15 of 15 entries, two weak | 44.8 | 95 to 161, 111 | Side-by-side table: 322 words, 5.0 screens |
| Gated communities | 5,451 | 23 (2 maps, 21 aerials) | 21, one per place plus the Prestwick gate | 6 of 6; trade-off in 16 of 20 | 56.0 | 92 to 176, 122 | Price table: 324 words, 3.5 screens |
| Homes with no HOA | 3,763 | 9 (1 map, 5 aerials, 3 ground photos) | 8, one per area | 8 of 8 | 34.7 | 94 to 171, 101 | Boats and trucks: 380 words, 3.0 screens |
| The Farm | 2,272 | 5 (3 aerials, 2 labelled aerial maps) | 5 | 11 of 11 | 22.1 | one place | The homes: 388 words, 2.7 screens |
| Affordable places | 4,124 | 14 (1 chart, 1 map, 12 aerials) | 12, one per place (3 show the land before the homes) | 7 of 7 | 39.6 | 94 to 150, 117 | Opening with chart and map: 506 words, 3.3 screens |

Is one page plainly the weakest? No. Round 9's two weakest, gated and affordable, are now level with best: every list page has a labelled picture of every place, and every entry is 92 words or more. Gated has the most medium findings and is the longest page by eleven phone screens, so its data-sheet sentences cost the reader the most. No HOA and The Farm remain the strongest.

## One fact, one value, across the five pages

| Fact | Pages | Same? |
|---|---|---|
| The Farm: about $350,000, $107 a month, about 10 minutes to the beach, about $2,600 a year | The Farm, best (entry 7 and both tables) | Yes |
| Tidewater: about $625,000, about $230 a month, about 8 minutes | Best, gated | Yes |
| Grande Dunes' three gated sections: about $1.5 million, about $200 to $375 a month | Best, gated | Yes |
| Cherry Grove canal fee: about $1,700 a year on about 415 properties | Best, no HOA | Yes |
| Cherry Grove flood insurance: about $1,300 a year | Best, no HOA | Yes |
| Surfside's ocean side in a high-risk flood zone: about a quarter | Best, no HOA | Yes |
| Wild Wing golf: Avocet open, a nine-hole course | Best, affordable | Yes |
| Golf and Yacht Club: about $225,000 in the older part, about $95 a month | Gated, affordable | Yes; the gate is not (medium) |
| The bombing range: 1942 to 1948 | The Farm, gated (1947) | No (medium) |
| Bellwood Landing's price | Best (within $315,000 to $620,000), gated ($850,000) | No (medium) |
| The Market Common townhome fee | Best entry ($300 to $680), best table ($300 to $700) | No, on one page (best medium 5) |
| Rush hour adds 5 to 10 minutes | The Farm, affordable | Same figure, two voices (low) |

## Round 9 findings: fixed?

**Batch.** Stories share one shape and opening: fixed. Same history on two pages: fixed for all five named histories; two new overlaps (Barefoot, The Farm's history on best) are a medium above. Cheapest gated places on the wrong page: fixed. "Listings say" in the copy: fixed on affordable, open on best (one) and gated (three, in gated medium 3). The Bluffs price: fixed.

**The Farm (round 9 grade 9).** M1 fixed (the school map). Lows 1 to 5 fixed.

**No HOA (9).** M1 fixed (Loris). Lows 1 to 9 fixed.

**Best neighborhoods (8).** H1 partly: Deerfield fixed well; Forestbrook Estates longer but still surface level (medium 1). M1 mostly fixed: every entry has a trade-off; Tidewater's and Plantation Lakes' say little (mediums 3 and 4). M2 fixed. Lows 2, 3, 4, 5 and 7 fixed; 1 and 6 open.

**Gated (7).** H1 fixed (median 78 to 122 words); Covington Lake East still the weakest (medium 5). M1 to M6 fixed. Lows 1, 3 and 4 fixed; 2 partly; 5, 6 and 7 open.

**Affordable (7).** H1 mostly fixed (facts block, prose median 117, schools table after the list); the prose still repeats the block (medium 1). M1 mostly fixed. M2 fixed. M3 fixed. Lows 2 and 3 fixed; 4 and 8 partly; 1, 5, 6 and 7 open.

## Every high and medium finding

No high finding on any page.

**The Farm (9).** None.

**No HOA (9).** None.

**Best neighborhoods (8)**
- M1. Forestbrook Estates: "Rosewood Landing, a county boat ramp on the Intracoastal Waterway, is about 2 miles away in a straight line, and about 5 miles by road. The neighborhood has ponds, not a lake." and "listings say golf carts are allowed here". Say why a buyer picks it and what an owner does there; cut the ramp paragraph and "ponds, not a lake"; or replace the entry.
- M2. "Bellwood Landing, Creekhaven, Longwood Bluffs and Wilderness Pointe are among the neighborhoods of Prince Creek West." with "Homes usually sell for $315,000 to $620,000", while gated gives Bellwood about $850,000. Name only the sections the range covers, or give Bellwood its own price.
- M3. Beach parking is the trade-off in Grande Dunes, Plantation Lakes and Deerfield; Plantation Lakes' ("the next one, with a pay lot, is about the same distance away") costs the reader nothing. Keep Deerfield's; give the other two a real trade-off.
- M4. Tidewater: "and other units in the same buildings list higher and lower." Cherry Grove: "From a home near the middle of the neighborhood ... From the same spot ...". Say what it means.
- M5. The Market Common townhome fee: "$300 to $680" in the entry, "$300 to $700" in the table. One value.

**Gated (8)**
- M1. Straight-line distances in five entries ("Measured in a straight line, Cherry Grove's public boat ramp is less than a mile ... By road it is about 5 miles."; "0.45 mile from the same spot, also in a straight line"). One drive time where it matters; cut the rest.
- M2. Sales and records notes ("Six sales were recorded in the past year.", "Houses listed here in the past year were built from 2000 to 2006.", "rough guide" twice, "recorded ... with the county in [year]" twice). Say what it means; method to the sources line.
- M3. Attribution and old listings ("listings mark ... as gated", "listings describe security at the gate day and night", "In 2013 the builder also listed ...", "A local paper expected ...", "Michie said the project was the most extensive ...", "By one local history ..."). State what the row supports, or cut.
- M4. Litchfield by the Sea says the fee differs twice and gives "A new vehicle barcode costs $25." with no context. One fee line; explain the barcode.
- M5. Covington Lake East: "In a straight line, shops and restaurants lie within a mile. Coastal Carolina University takes about 12 minutes to reach by car." Who built it, what the clubhouse is used for, and its lowest-on-the-page fee as the reason to pick it.
- M6. No trade-off in Seaside, Wachesaw Plantation, Wachesaw East and Heritage Plantation. One line each.

**Affordable (8)**
- M1. The prose repeats the facts block in Parkview, Sawgrass East, Forestbrook Village, Villas at Sandridge and Polo Farms. Prose keeps only what the block does not say.
- M2. Two or three errand drive times per entry, with compass directions (Wild Wing, Sawgrass East, Sandridge, Wynbrooke, Forestbrook Village). One errand each.
- M3. Indigo Grove ("Before the houses, this land was fields and woods.") and Polo Farms ("Horry County Fire Rescue's Red Bluff station is under two miles away by road.") describe the map around them. What living there is like, from new rows.
- M4. "We check the HOA papers for what the fee covers, including any gate and security." while gated says "a gatehouse at the entrance on Bay Road". State the gatehouse and link.

**Batch**
- M. The bombing range: "from 1942 to 1948" (The Farm), "from 1942 to 1947" (gated). One value; register it.
- M. Barefoot's shuttle sentence word for word on best and gated, and The Farm's history paragraph nearly word for word on best. One home for each.
- M. Bellwood Landing's two prices (best M2).
- M. The Golf and Yacht Club's gate (affordable M4).

## Is the batch ready for the owner?

Not yet as a set, but close, and the two ready pages can go now. The Farm and no HOA have nothing above low and would not come back from the owner. Best, gated and affordable each have four to six mediums and no high. Almost all of them are the same kind of fix: sentences a verifier made true that now read like notes, a fact said twice, two pages that disagree on a year, a price or a gate. A writer can clear them in one pass without new research, except for three entries (Forestbrook Estates, Indigo Grove, Polo Farms) that need a row or two each, and Covington Lake East on gated. After that pass, a fresh reviewer should read best, gated and affordable once more; on today's evidence they would reach 9.

## Guarding against stretching his words

Every finding quotes the page and ties to his words, ROUND-10 or CRAFT. I asked for no new sections and no longer pages; most mediums cut words. The depth findings (best M1, gated M5, affordable M3) ask for facts in four entries the round 10 brief named or that are plainly the weakest on their page. I graded two pages ready rather than invent work for them. The owner's test, "is it simpler and more useful for this reader?", passes for each fix: one drive time instead of three, a sentence an agent would say instead of a verifier's note, one value for one fact on every page.
