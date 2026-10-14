# Owner's eye, round 12: batch 2026-10-b, all five pages

Reviewer: a fresh agent, the owner's stand-in. I did not research, write, edit or review any page in this batch before, and I did no earlier owner's-eye round. Read on 2026-10-14 from copies of the previews in `scratchpad/preview/b/` (builds 09:11 to 10:44; gated after commit 7c64f98), saved to `scratchpad/oe-b12/src/` so the pages did not change under me. Everything is in `scratchpad/oe-b12/`: phone and desktop screens at 390 and 1280 px after a slow scroll with the search and lead pop-ups closed, the full pages, every figure, every picture at its own size (`<page>-img/`), contact sheets (`sheets/`), each page's text, each `repeat-check` report and the `struck-check` report. I opened every map, chart, aerial and photo full size.

The owner's bar: pages "so perfectly for the audience ... that I dont need to change anything", "not surface level AI slop", "valuable information at the level I as a human couldn't reach", "top SEO and GEO ... perfect for human readability". His named faults: repetition, filler, telling the reader to check, surface-level answers, price ahead of what the house and location give you.

## Grades

| Page | Round 11 | Round 12 | Ready (9+) | High | Medium | Low |
|---|---|---|---|---|---|---|
| /submarkets/carolina-forest/the-farm/ | 9 | **9** | Yes | 0 | 0 | 1 |
| /buyers/no-hoa-homes/ | 9 | **9** | Yes | 0 | 0 | 1 |
| /buyers/affordable-places-to-live/ | 8 | **9** | Yes | 0 | 0 | 4 |
| /buyers/best-neighborhoods/ | 8 | **9** | Yes, once one figure is copied | 0 | 1 (batch) | 5 |
| /buyers/gated-communities/ | 8 | **8** | No, one entry away | 0 | 1 | 10 |

Every round 11 medium on best, gated and affordable is fixed: 14 of 14. The read-aloud voice pass worked. The deed clerk is gone from the sentences round 11 quoted, the three thin entries are now real entries, and the two pages that told the Golf and Yacht Club twice now split it.

Best is a 9 with one medium because that medium is mechanical: a price the gated page's verifier revised after best was built. Round 10 set the precedent (The Farm at 9 with one mechanical map fix and no new review). Gated stays at 8 because its one medium is the round 11 fault itself, in one entry: a verifier's sentence pasted in, and a figure reworded around its struck pattern.

## Gates

- `repeat-check --strict`: passes on all five. 0 repeated body sentences on any page. No entry under 90 words (best 90 to 150, gated 93 to 145, affordable 91 to 155, no HOA 94 to 181).
- `struck-check --batch batches/2026-10-b --preview <copies> --strict`: no struck wording on any page (470 patterns).

I read every `repeat-check` finding against its page. One shape is real: two affordable trade-offs in the same frame (affordable low 1). The rest are place names, one errand drive per entry, each page's one promise, the flood fact where flood is the trade-off, and the amenities the owner asked to lead with. The real repeats the tool cannot see are below: one figure on two pages, and two promises said twice on gated.

Before suggesting any wording, I tested it against the page's struck list. Every suggestion in this round passes. One round 11 suggestion did not: best low 2 asked for "A court found no rule on the land ...", which is struck (best row 230). The writer was right to keep "A special referee". Writers should check a reviewer's wording against the struck list too.

## The pattern this round

Round 11 found the verifier's voice in four forms: pasted `use` text, "deeded" and "recorded", measurements from a stated point, and facts weakened rather than fixed. Round 12 cured three of the four everywhere. The first survives in two gated entries:

- Litchfield by the Sea: "The HOA fee and the prices differ from section to section and from unit to unit." (row 92's `use` text) and "condos sold for anywhere from under $200,000 to over $2 million" (row 90's range, reworded around its struck pattern).
- Willbrook: "In the last year, homes here sold for about $630,000 to $1.5 million, and the middle sale was about $840,000." (rows 89 and 190's `use` text, word for word).

Both arrived with round 12b and 12c, the verifier's late price reconciliation. That is where this fault comes from: a late correction pasted under time pressure. The fix is the round 11 advice: after any correction, read the entry once as a buyer and ask whether it still gives a number they can plan with.

## Batch-wide findings

**Medium. Bellwood Landing has two prices on two pages.** Best, entry 15 and its table: "about $850,000". Gated, entry 12 and its table: "about $810,000" (round 12b verifier, gated row 198). The gated entry links to best for the rest of Prince Creek, so the reader meets both. Want: best takes the gated figure, in two cells. No new review.

**Low. The Cherry Grove and Surfside aerials** are the same pictures on best and no HOA. Different views once the photo partner's shots arrive.

**Fixed since round 11: every batch item.**
- The Golf and Yacht Club: gated keeps the amenities, the ramp, Sandpiper Place and the private streets; affordable keeps size, age and the insurance trade-off, and links.
- Enterprise Landing: on gated only, one figure.
- Who used the bombing range: "the Army Air Force" on The Farm and gated.
- Map leftovers: affordable now has two maps with every dot named, and both orange stubs are gone. Gated's first map still has four unnamed dots (gated low 2).

**Non-negotiables.** No fair-housing language: no "safe" (gated says "We do not rate any neighborhood as safe or unsafe"), no claim about who lives anywhere. Gated's story names the buyers' own grandchildren, not the neighborhood. Myrtle Trace and Seasons state the 55+ rule, which is the communities' legal age rule. The affordable page's income limits by household size are SC Housing's program rule. No interest rate or payment amount; the down-payment section gives program amounts and limits, and no story names a lender. Devin Day appears only in the byline on all five; Paul nowhere. No invented quote; Tim Nash is only the reviewer. Nothing breaks a non-negotiable.

## Sibling table

Counted from my copies at 390 x 844. Words: the page text from the breadcrumb to the sources line, with captions, map labels, tables and the FAQ, without photo credits. Pictures: photos, aerials, maps and charts. "Of the subject": pictures of the places the page is about. Must-answers: from `batches/2026-10-b/PLAN.md`. Entry words: `repeat-check` body words. Longest section leaves out the FAQ.

| Page | Words | Pictures | Of the subject | Must-answers | Phone screens | Entry words (range, median) | Longest section |
|---|---|---|---|---|---|---|---|
| Best neighborhoods | 4,398 | 17 (2 maps, 15 aerials) | 15, one per place | 8 of 8 wants; trade-off in 15 of 15 | 45.1 | 90 to 150, 107 | Side-by-side table: 336 words, 5.2 screens |
| Gated communities | 5,264 | 23 (2 maps, 21 aerials) | 21, one per place plus the Prestwick gate | 6 of 6; trade-off in 19 of 20 (not Litchfield by the Sea; Willbrook and DeBordieu only a price) | 54.7 | 93 to 145, 118 | Price table: 324 words, 3.4 screens |
| Homes with no HOA | 3,788 | 9 (1 map, 5 aerials, 3 ground photos) | 8, one per area | 8 of 8 | 34.9 | 94 to 181, 101 | Boats and trucks: 380 words, 3.0 screens |
| The Farm | 2,232 | 5 (3 aerials, 2 labelled aerial maps) | 5 | 11 of 11 | 21.9 | one place | The homes: 388 words, 2.7 screens |
| Affordable places | 3,881 | 15 (1 chart, 2 maps, 12 aerials) | 12, one per place (5 show the land before the homes) | 7 of 7; trade-off in 12 of 12 | 38.8 | 91 to 155, 98 | Opening with the chart and both maps: 574 words, 3.8 screens |

Is one page plainly the weakest? No. Best and gated each grew a few words where thin entries were rewritten; affordable gained a second map and lost a few words of notes. Gated is still the longest by ten screens, but it has twenty places and each entry earns its length. Its one weak entry is the only thing that sets it below the others. Affordable, which the owner called "extremely useless" two versions ago, now reads as well as no HOA.

## One fact, one value, across the five pages

| Fact | Pages | Same? |
|---|---|---|
| The Farm: about $350,000, $107 a month, about 10 minutes, about $2,600 a year | The Farm, best | Yes (best's table cell now "About 10 minutes") |
| The Farm's north side: state land for the Lewis Ocean Bay Heritage Preserve | The Farm, best | Yes |
| Tidewater: about $625,000, about $230 a month, about 8 minutes | Best, gated | Yes |
| Grande Dunes' gated sections: about $1.5 million, $200 to $375, about 12 minutes | Best, gated | Yes; best's FAQ now says 5 to 12 |
| Barefoot drives: about 6 from the condos, 8 to 10 from the gated houses | Best, gated | Yes |
| Bellwood Landing price | Best ($850,000), gated ($810,000) | **No** (batch medium) |
| Bellwood Landing drive: about 14 minutes | Best, gated | Yes |
| Cherry Grove canal fee and flood insurance: about $1,700 and $1,300 a year | Best, no HOA | Yes |
| Surfside ocean side in a high-risk flood zone: about a quarter | Best, no HOA | Yes |
| Wild Wing golf: Avocet open, a nine-hole course | Best, affordable | Yes |
| Golf and Yacht Club: about $225,000 older part, $95 a month, about 15 minutes, a gatehouse | Gated, affordable | Yes |
| Enterprise Landing drive | Gated only | Yes |
| The bombing range: 1942 to 1948, the Army Air Force | The Farm, gated | Yes |
| Rush hour adds 5 to 10 minutes, "In our experience" | The Farm, affordable | Yes |

## Round 11 findings: fixed?

**Batch.** Golf and Yacht Club on two pages: fixed. Enterprise Landing's two drives: fixed. The Army's name: fixed. Shared aerials: open (low, photo partner). Map leftovers: fixed on affordable; gated's four unnamed dots open.

**The Farm (9).** Lows 1, 2 and 3 fixed.

**No HOA (9).** Lows 1 and 2 fixed; 3 waits for the photo partner.

**Best neighborhoods (8 to 9).** M1 (Plantation Lakes) fixed. M2 (the ranking sentence) fixed; Plantation Lakes keeps one price comparison as its honest trade-off. M3 (Pine Lakes and Prince Creek trade-offs) fixed. M4 (FAQ minutes) fixed. M5 (measuring notes) fixed. Lows 1, 3, 4, 5 and 7 fixed; 2 closed as struck wording; 6 and 8 open.

**Gated (8).** M1 (outpost) fixed. M2 (Willbrook's two prices) fixed as to the figure; the sentence is pasted `use` text (low 1). M3 (the records voice, nine sentences) fixed. M4 (Golf and Yacht Club) fixed. M5 (Enterprise Landing) fixed. M6 (Bellwood and Seaside) fixed. Lows 5 to 13 fixed; 1 partly (dots open, orange line gone); 2, 3 and 4 unchanged by design or waiting for photos.

**Affordable (8 to 9).** M1 (Indigo Grove) fixed. M2 (Golf and Yacht Club) fixed. M3 (Enterprise Landing) fixed. Lows 1 to 5, 8, 9, 11 and 12 fixed; 6 and 7 mostly; 10 waits for photos.

## Every high and medium finding

No high finding on any page.

- **Best (batch medium).** "Bellwood Landing, behind its own gate, sells for more, about $850,000." and the table's "Bellwood $850,000". Gated says about $810,000. Fix: use the gated figure in both cells.
- **Gated medium 1.** Litchfield by the Sea: "The HOA fee and the prices differ from section to section and from unit to unit." and "condos sold for anywhere from under $200,000 to over $2 million". Fix: cut the fee sentence and say "The HOA fee differs from building to building, so we find out the fee for any home you like before you offer."; give the middle condo sale from row 90 ("Condos here usually sell for about $645,000") if the verifier allows it, in the facts line and the table, or else the range once, plainly.

## Is the batch ready for the owner?

Four of the five are ready: The Farm, no HOA and affordable now, and best after one figure is copied from the gated page. Gated is one entry away. Litchfield by the Sea needs its price and fee said the way an agent would say them, and Willbrook's price sentence and the four unnamed map dots should go in the same short pass. None of this needs new research. After that pass, a confirmation read of gated's entry 18 and its table row is enough; no full review of any page is needed. The batch's root cause, uniform research, was cured in round 10, and the voice fault round 11 named is now down to two sentences that arrived with the last price check. Each page now gives what the owner asked for: what the house and the place give you first, the price in one line, a trade-off that is true for that place, and our agents doing the checking.

## Guarding against stretching his words

Every finding quotes the page and ties to his words, CRAFT or the batch's one fact, one value rule. I asked for no new sections and no new research. I tested every suggested sentence against the page's struck list, and I declined to ask for two changes that would have broken one: Plantation Lakes' beach-parking trade-off (round 10 cut beach parking as a repeated trade-off) and dropping the FAQ's "where at least 10 homes sold" (it keeps "lowest" true). I kept The Farm and no HOA at 9 without inventing work, and graded best and affordable 9 because what is left on them is low or mechanical. The owner's test, "is it simpler and more useful for this reader?", passes for each fix: one price for one place, and a number a buyer can plan with where the page now gives none.
