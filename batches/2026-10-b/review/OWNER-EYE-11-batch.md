# Owner's eye, round 11: batch 2026-10-b, all five pages

Reviewer: a fresh agent, the owner's stand-in. I did not research, write, edit or review any page in this batch before, and I did no earlier owner's-eye round. Read on 2026-10-14 from copies of the previews in `scratchpad/preview/b/` (builds 07:32 to 08:49; gated after the round 11c commit), saved to `scratchpad/oe-b11/src/` so the pages did not change under me. Screenshots at 390 and 1280 px, after a slow scroll with the search and lead pop-ups closed, are in `scratchpad/oe-b11/`: a folder of phone screens and figures per page at each width, the full pages, `<page>-img/` (every picture at its own size), `sheets/` (contact sheets of figures and phone screens), each page's text and its `repeat-check` report. I opened every map, chart, aerial and photo full size.

The owner's bar: pages "so perfectly for the audience ... that I dont need to change anything", "not surface level AI slop", "valuable information at the level I as a human couldn't reach", "top SEO and GEO ... perfect for human readability". His named faults: repetition, filler, telling the reader to check, surface-level answers, price ahead of what the house and location give you.

## Grades

| Page | Round 10 | Round 11 | Ready (9+) | High | Medium | Low |
|---|---|---|---|---|---|---|
| /submarkets/carolina-forest/the-farm/ | 9 | **9** | Yes | 0 | 0 | 3 |
| /buyers/no-hoa-homes/ | 9 | **9** | Yes | 0 | 0 | 3 |
| /buyers/best-neighborhoods/ | 8 | **8** | No | 0 | 5 | 8 |
| /buyers/gated-communities/ | 8 | **8** | No | 0 | 6 | 13 |
| /buyers/affordable-places-to-live/ | 8 | **8** | No | 0 | 3 | 12 |

The Farm and no HOA stay at 9, and every round 10 low on both is fixed. Best, gated and affordable stay at 8, but they are not the same 8: every round 10 medium on the three pages is fixed or mostly fixed (15 of 15). What holds them is a smaller, newer set: what the round 11 fact corrections left behind, and two places where the pages now overlap. Affordable is closest to 9.

## Gates

- `repeat-check --strict`: passes on all five. 0 repeated body sentences on any page. No entry under 90 words (best 90 to 150, gated 95 to 174, no HOA 94 to 164, affordable 91 to 164).
- `struck-check --batch batches/2026-10-b --preview <copies> --strict`: no struck wording on any page (426 patterns).

I read every `repeat-check` finding against the page. None is a real repeat this round: the shapes are place names, one errand drive per entry, each page's one promise, and the flood fact where flood is the trade-off; the devices are the amenities the owner asked for. The real repeats are ones the tool cannot see: the same ranking sentence in two adjacent entries (best medium 2), and the same paragraph on two pages (Golf and Yacht Club, below).

## The pattern this round

Round 10 named the fault: sentences a verifier made true that read like the verifier's notes. Round 11 cured most of the ones round 10 quoted. Straight-line distances became drive times, sales counts and "rough guide" left the entries, and "listings say" is gone from every page.

The voice did not leave, it changed words. Four forms are new:

1. **The struck list's `use` text, pasted.** The struck files give a safe sentence for each struck one. Writers paste it. Two pasted sentences now say nothing: "The bluff where Kimbel's restaurant stands was once the site of an outpost." and "The park was deeded to the road and park association in 2007." (gated). A `use` field is the verifier's floor, not the page's sentence. CRAFT 5: "A verifier gives the fact; the writer gives the sentence."
2. **"Deeded" and "recorded".** Gated: "deeded the first lot ... deeded its last lot", "deeded to the owners association in 2017", "first lot deeds were recorded in 1983", "The HOA's recorded rules make the streets private".
3. **Measurements from a stated point.** "about 0.1 mile from the Berkshire Village section", "about 0.1 mile from the nearest homes", "10 minutes from Farmers Rest Drive" (best); "about three-quarters of a mile north of the middle of the neighborhood", "16 minutes to its parking", "west-southwest of Myrtle Beach" (gated).
4. **Facts weakened, not fixed.** "with miles of shoreline" (best; the verifier's own safe wording said "about 15 miles"), "and later took the name Pine Lakes" (best; was "in 1946"), "an outpost" (gated). And two trade-offs were lost with the sentences they sat in: Pine Lakes and Prince Creek (best).

A suggestion for the writers: after any correction, read the entry once as a buyer would and ask whether it still has its point and its trade-off. If a fact can only be said weakly, cut it rather than keep a sentence that says nothing.

## Batch-wide findings

**Fixed: every round 10 batch medium.**
- The bombing range: both pages now say 1942 to 1948.
- Barefoot: the shuttle, cabana and pool are on the gated page only; best points there and gives the swing bridge instead.
- The Farm's history: told on The Farm page only; best points there.
- Bellwood Landing's price: best now gives "about $850,000" for it, in the entry and the table.
- The Golf and Yacht Club's gate: affordable now says "A gatehouse stands at the entrance off Bay Road" and links to gated.
- Rush hour: "In our experience" on both pages.

**Medium. The Golf and Yacht Club is now told nearly word for word on two pages.** Fixing the gate brought the two entries together.
- Gated 9: "In its older part, houses typically have about 1,350 square feet, on lots of about 5,650 square feet." Affordable 5: "In the older part, houses typically have about 1,350 square feet, on lots of about 5,650."
- Gated: "The community has a clubhouse, a pool, tennis and shuffleboard courts and a playground, and the association has a storage area for RVs and trailers." Affordable: "Owners share a pool, tennis and shuffleboard courts, a playground and a clubhouse, and the HOA has a storage area for RVs and trailers."
- Both give Enterprise Landing and Sandpiper Place.

The owner, on an earlier batch: "Have we not talked about this on the website already?" Want: one home for the amenities and the ramp (gated). Affordable keeps price, age, RV storage, Sandpiper Place and its insurance trade-off, and links.

**Medium. Enterprise Landing has two drive times.** Gated: "about a 4-minute drive from the entrance". Affordable: "about a seven-minute drive". CRAFT 2: "Every page gives the same drive the same figure." One figure, or the ramp on one page only.

**Low. Who used the bombing range.** The Farm: "the Army Air Force". Gated: "the Army". Same years; use one name.

**Low. The Cherry Grove and Surfside aerials** are the same pictures on best and no HOA, and both pages say that North Myrtle Beach formed in 1968 from four beach towns. One line of shared fact, not a retold history. Different views once the photo partner's shots arrive.

**Low. Map leftovers.** Gated's first map still has four unnamed dots (6, 7, 12, 14); affordable's dot 6 has no name. Gated's second map and affordable's map each show a short orange line at the top left that belongs to nothing. Best's two maps are now the model: every dot named beside it.

**Non-negotiables.** No fair-housing language: no "safe" (gated says "We do not rate any neighborhood as safe or unsafe"), no claim about who lives anywhere. One story names the buyer's own family (gated's grandchildren); it speaks of the buyer, not a neighborhood. The affordable page's income limits by household size are SC Housing's program rule, not a claim about a place. No interest rate or payment amount; the down-payment section gives program amounts and limits, and the story names no lender. Devin Day appears only in the byline on all five; Paul nowhere. No invented quote; Tim Nash is only the reviewer. Unsupported-looking or stretched: "Lennar lists nine floor plans" (affordable, a builder's catalog stated as attribution); "which helps explain why they cost more" (no HOA, a guess at cause, low); the struck-list sentences above. Nothing else looked stretched. I did not re-check facts against sources.

## Sibling table

Counted from my copies at 390 x 844. Words: the page text from the breadcrumb to the sources line, with captions, map labels, tables and the FAQ, without photo credits. Pictures: photos, aerials, maps and charts. "Of the subject": pictures of the places the page is about. Must-answers: from `batches/2026-10-b/PLAN.md`. Entry words: `repeat-check` body words. Longest section leaves out the FAQ.

| Page | Words | Pictures | Of the subject | Must-answers | Phone screens | Entry words (range, median) | Longest section |
|---|---|---|---|---|---|---|---|
| Best neighborhoods | 4,304 | 17 (2 maps, 15 aerials) | 15, one per place | 8 of 8 wants (the "new homes" legend line is now there); trade-off in 13 of 15 entries (Pine Lakes and Prince Creek lost theirs) | 45.0 | 90 to 150, 102 | Side-by-side table: 335 words, 5.1 screens |
| Gated communities | 5,209 | 23 (2 maps, 21 aerials) | 21, one per place plus the Prestwick gate | 6 of 6; trade-off in 20 of 20, two of them only a price (Willbrook, DeBordieu) | 55.1 | 95 to 174, 120 | Price table: 322 words, 3.4 screens |
| Homes with no HOA | 3,697 | 9 (1 map, 5 aerials, 3 ground photos) | 8, one per area | 8 of 8 | 34.7 | 94 to 164, 101 | Boats and trucks: 380 words, 3.0 screens |
| The Farm | 2,143 | 5 (3 aerials, 2 labelled aerial maps) | 5 | 11 of 11 | 21.8 | one place | The homes: 388 words, 2.7 screens |
| Affordable places | 3,883 | 14 (1 chart, 1 map, 12 aerials) | 12, one per place (3 show the land before the homes) | 7 of 7; trade-off in 11 of 12 (not Indigo Grove) | 39.0 | 91 to 164, 104 | Opening with chart and map: 496 words, 3.2 screens |

Is one page plainly the weakest? No. Best, gated and affordable each lost 1 to 2 phone screens since round 10 and are level with one another. Gated is still the longest by ten screens and has the most mediums, but its mediums are short edits. Affordable has the fewest mediums of the three and its best entry (Polo Farms) is as good as anything on no HOA. Every entry median fell, by 2 to 13 words; the words cut were retellings, errand drives and notes, which round 10 asked for, except the two lost trade-offs on best.

## One fact, one value, across the five pages

| Fact | Pages | Same? |
|---|---|---|
| The Farm: about $350,000, $107 a month, about 10 minutes, about $2,600 a year | The Farm, best | Yes (best's table cell adds "from Farmers Rest Drive", best medium 5) |
| Tidewater: about $625,000, about $230 a month, about 8 minutes | Best, gated | Yes |
| Grande Dunes' gated sections: about $1.5 million, $200 to $375, about 12 minutes | Best, gated | Yes; best's FAQ still says city neighborhoods are "5 to 10 minutes" (best medium 4) |
| Barefoot drives: about 6 from the condos, 8 to 10 from the gated houses | Best, gated | Yes |
| Bellwood Landing: about $850,000, about 14 minutes | Best, gated | Yes |
| Cherry Grove canal fee and flood insurance: about $1,700 and $1,300 a year | Best, no HOA | Yes |
| Wild Wing golf: Avocet open, a nine-hole course | Best, affordable | Yes |
| Golf and Yacht Club: about $225,000 older part, $95 a month, about 15 minutes, a gatehouse | Gated, affordable | Yes |
| Enterprise Landing drive | Gated (4 minutes), affordable (7) | No (batch medium) |
| The bombing range: 1942 to 1948 | The Farm, gated | Yes; who used it differs (low) |
| Willbrook's price | Gated entry ($630,000 to $1.5 million), gated table (about $1 million) | No, on one page (gated medium 2) |
| Rush hour adds 5 to 10 minutes | The Farm, affordable | Yes, one voice |

## Round 10 findings: fixed?

**Batch.** Bombing-range years: fixed. Barefoot and The Farm told on two pages: fixed. Bellwood's two prices: fixed. The Golf and Yacht Club's gate: fixed. Rush hour voice: fixed. Overview maps with unnamed dots: fixed on best; open on gated (four) and affordable (one).

**The Farm (9).** Lows 1, 2 and 3 fixed.

**No HOA (9).** Lows 1, 2, 3 and 4 fixed.

**Best neighborhoods (8).** M1 (Forestbrook Estates) fixed. M2 (Bellwood's price) fixed. M3 (beach parking three times) fixed; its cure on Plantation Lakes became a new repeat (medium 2). M4 (Tidewater, Cherry Grove notes) fixed. M5 (Market Common fee) fixed. Lows 1, 2, 3, 5, 6, 7 and 8 fixed; 4 partly.

**Gated (8).** M1 (straight-line distances) fixed. M2 (records notes) mostly fixed; the shape moved to "deeded" (medium 3). M3 (attribution) mostly fixed; one cure lost its point (medium 1). M4 (Litchfield by the Sea) mostly fixed (low 7). M5 (Covington Lake East) fixed. M6 (trade-offs) fixed. Lows 1, 2, 3 and 8 fixed; 7 partly; 4, 5 and 6 open.

**Affordable (8).** M1 (prose repeats the block) fixed. M2 (errand drives) fixed. M3 (Indigo Grove and Polo Farms) Polo Farms fixed; Indigo Grove partly (medium 1). M4 (the gate) fixed. Lows 1, 3, 5, 8, 9, 10 and 11 fixed; 2 and 4 partly; 6 and 7 open.

## Every high and medium finding

No high finding on any page.

**The Farm (9).** None.

**No HOA (9).** None.

**Best neighborhoods (8)**
- M1. Plantation Lakes: "with miles of shoreline" and "Its developer was American Mining Company". Restore "about 15 miles of shoreline"; say why a mining company built it if a row supports it, else cut.
- M2. "Of the four Carolina Forest neighborhoods here, The Farm has the lowest house prices ..." and "Of the four Carolina Forest neighborhoods here, Plantation Lakes has the highest house prices." Cut The Farm's; give Plantation Lakes a real trade-off (the 20-minute beach drive, or no parking at the nearest access).
- M3. Pine Lakes lost "Few homes in the two sections come up for sale."; Prince Creek ends "Bellwood Landing, behind its own gate, sells for more, about $850,000. A Publix is about 2 minutes away by car. Builders sold new townhomes here in the past year." Restore a trade-off to each; rewrite Prince Creek's last paragraph.
- M4. FAQ: "The ones in the city of Myrtle Beach are about 5 to 10 minutes away." The table gives Grande Dunes 12. "5 to 12".
- M5. "About 90 new houses were sold here in the past year, mostly by builders", "about 0.1 mile from the Berkshire Village section", "about 0.1 mile from the nearest homes", "10 minutes from Farmers Rest Drive". Say what each means.

**Gated (8)**
- M1. "The bluff where Kimbel's restaurant stands was once the site of an outpost." Say whose, if the row allows, or cut.
- M2. Willbrook: "homes here sold for about $630,000 to $1.5 million" and the table's "About $1 million". One value.
- M3. "deeded" four times, "first lot deeds were recorded in 1983", "in six tracts", "three-quarters of a mile north of the middle of the neighborhood", "16 minutes to its parking", "west-southwest", "About one lot in ten had no house yet". Plain sentences given in the page file.
- M4. The Golf and Yacht Club told nearly word for word on affordable. One home for the amenities and the ramp.
- M5. Enterprise Landing: 4 minutes here, 7 on affordable. One figure.
- M6. Bellwood Landing says nothing about its own houses; Seaside's shag-festival line is true of all of North Myrtle Beach. One paragraph on Bellwood's houses; tie the festival to Main Street, 3 to 5 minutes away.

**Affordable (8)**
- M1. Indigo Grove: "Lennar sells it as The Overlook and sold about 145 houses here in about ten months." and "Lennar lists nine floor plans for The Overlook. The smallest, the Beckman, ..." No trade-off, no daily life. Rewrite from rows held, with a trade-off line.
- M2. The Golf and Yacht Club told nearly word for word on gated (batch medium).
- M3. Enterprise Landing 7 minutes here, 4 on gated (batch medium).

**Batch**
- M. The Golf and Yacht Club entry on two pages.
- M. Enterprise Landing's two drive times.

## Is the batch ready for the owner?

The Farm and no HOA are ready now and would not come back. Best, gated and affordable are not, but they are one short pass away, and nothing left needs new research. Fourteen mediums remain across the three pages, and two of them are one decision shared by gated and affordable. All of them are sentence edits: restore three facts and two trade-offs that corrections removed, rewrite one entry on each list page from rows already held (Plantation Lakes, Bellwood Landing, Indigo Grove), replace the verifier's sentences with an agent's, and make two figures agree. The round 10 brief's root cause, uniform research, is cured; what is left is a finishing fault. After that pass, a fresh reviewer should read best, gated and affordable once more. On today's evidence, affordable would reach 9 first, then best, then gated.

## Guarding against stretching his words

Every finding quotes the page and ties to his words, CRAFT or the round 10 rule of one home for each history. I asked for no new sections and no longer pages. Three findings restore facts the ledger already verified (the shoreline figure, two trade-offs); three ask for one entry each to be rewritten from rows already held. I kept The Farm and no HOA at 9 rather than invent work for them, and graded their remaining items low. The owner's test, "is it simpler and more useful for this reader?", passes for each fix: a trade-off where one was lost, one figure for one drive, a sentence an agent would say instead of a deed clerk's note, and one page for each place's full story.
