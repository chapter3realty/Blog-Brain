# Review round 1: /buyers/homes-near-the-beach/, what the fixer changed

Fixer, 2026-11-08. Every change is in `specs/buyers-homes-near-the-beach.js`. New facts are rows 26 to 31 in facts.md: row 26 is our own count (VERIFIED-BY-FIXER, `data/2026-11-n/buyers-homes-near-the-beach/fix1-walk-budget.json`), and rows 27 to 31 carry verified rows from the 2026-11-a town ledgers.

## Critic (blocking)

1. **Worked example on the wrong base.** Removed. The 1.1 ratio was the walk to an access over the straight line to the ocean, and the paragraph used it on the line to the access. The owner also asked to cut it. The walk section now keeps only "a quarter mile takes about 5 minutes on foot, and half a mile about 10." The ACC_ constants and their check are gone.
2. **North arrow.** Fixed. R sends north (0, 1) to (sin th, -cos th), so the arrow turns clockwise by th (46.1 degrees), not -(90 - th). It is now a shaft with a head, and the N sits beyond the tip, up and to the right. A `must()` keeps the angle between 20 and 70 degrees. Checked by eye at 390 and 1440 px: it points away from the ocean and toward the Cherry Grove end. The wrong spec comment is replaced.
3. **Under-$400,000 link with campground homes.** Replaced with the North Myrtle Beach walk search under $400,000. It returned 19 houses on 2026-11-08, none at 6001 S Kings Hwy or 9700 Kings Rd (row 26). NEEDS item 11 adds this case.

## Critic (nits taken)

- Short answer: it now leads with the walk (186 for sale a 5-minute walk from a public path) and where the cheaper walkable houses are (Crescent Beach). The list of three of the four stretches is gone.
- Hero fact 3 is now "About 1 every 250 to 400 feet / a public path to the sand in the beach towns". The 10,400-houses tile is gone (owner nit too).
- Line breaks: "5-minute", "10-minute", "2 to 5" and the stat ranges sit in no-wrap spans.
- The term list is gone. "East of 17" is said once, in the Myrtle Beach entry, with row 15's measure. "Second row" is in the FAQ only.
- Pros: "You walk to the beach" now says the contrast: a 5-minute walk near the beach against a 20- to 30-minute drive from Carolina Forest or Conway.
- FAQ: each answer has its own fact. Cut: "How much", "east of 17", "Carolina Forest or Conway" and "free parking in Garden City" (all in the body). New: rentals (MB rows 1 and 8, NMB row 23) and condos (NMB row 11). "Is Myrtle Beach in a flood zone" now gives the city's own count (MB row 20).
- Pawleys spacing now reads as the state map's own count: "The state's map shows one about every 2,400 feet on the island."
- Phone map: the caption now says where the dots are close together and far apart.
- The Cherry Grove photo is now the labelled aerial of the channel houses (the record from /submarkets/north-myrtle-beach/). It is shown whole, not cropped, with its credit at the lower left, clear of the labels. The wrong "crops" credit text went with the old photo.
- The "near the beach" search link (q=house near the beach) is removed from the short answer.

Not taken: the reused photos. The shot list for the photo partner (shot-list.md) is still the fix, as the critic said. S8 (orphan) is the lead's job (NEEDS items 1 and 5).

## Reader

- **Site label against page meaning.** The `q=house near the beach` link is gone. The page links only walk searches, and the glossary that defined "near the beach" as 0.73 mile is gone.
- **Sold price against asking price.** A note under the walk numbers says these are today's asking prices and that the sale prices are what houses sold for in the last year, from the deed records. Pawleys says why it gives asking prices.
- **What $500,000 buys.** New budget table (row 26): under $400,000, 20 houses a 10-minute walk or less from a beach path; $400,000 to $600,000, 51 houses, across all three Horry County stretches. Each row gives the middle size and the usual bedroom count.
- **"Middle house."** The short answer now says what "the middle" means ("half sold for more and half for less"). "From the middle house" drive times are gone.
- **The pro that read as a contradiction.** Fixed, as above.
- **Path counts that did not agree.** The spacing is said once, in one unit (feet), from the state's map. "The state's older map" and "13 a mile" are gone. The towns' own counts (over 240, 143) are said once.
- Nits taken: the worked example and the per-square-foot and square-foot paragraphs are gone. The "1 in 4 ... there" sentence is gone. "Federally backed or regulated mortgage" and the zone letters are gone. Rentals and condos are answered in the FAQ. Litchfield is placed ("the beach between the island and Huntington Beach State Park"). "The walk out to the point" is gone.
- Not taken: a price in the hero. The owner's past correction ("leading with prices would scare people away") outweighs it. The price is the second paragraph of the short answer.

## Owner

1. **Title leads with the price.** The title is now "Houses Near the Beach in Myrtle Beach: 186 a 5-Minute Walk" (58 characters). The H1's sub line is "186 for sale a 5-minute walk from a public path to the sand." The walk section now comes first, then the towns. Cost comes after them.
2. **Too many numbers.** Cut the per-square-foot and square-foot paragraphs, the paragraph that repeated the chart, the stretch table, the VE paragraph, the worked example, the flood-policy figures for outside the zone and for a second home, the access counts in the town entries, the deed counts behind "1 in 6", and the 721, 356, 27 and 18 counts (now "about 1 in 13" and "two in 3"). The scorer's P2 went from 6.7 to 5.2 numbers per 100 words. The rest are each place's one price line, the chart and the budget table.
3. **Reader math.** The worked example and "the state's older map" sentence are gone. "A quarter mile takes about 5 minutes on foot, and half a mile about 10" stays.
4. **Insurance terms.** The zone letters, "federally backed or regulated" and the VE paragraph are gone. The page now says: "If the house is in the high-risk flood zone and you buy with a mortgage, the lender requires flood insurance." Policy cost is one figure plus the link to /buyers/coastal-insurance/.
5. **Facts said three to six times.** The flood share by stretch is now only in the flood list (gone from the table and the FAQ). The price by distance is in the short answer and the chart; the paragraph under the chart now gives the first tenth of a mile and the level stretch instead. The pros say "1.7 times" once. "East of 17" is defined once. The access counts are each said once. `repeat-check.js`: 0 identical and 0 near-identical sentences (it found 4 near ones before these edits).
6. **Towns at surface level.** Each entry now sells the place with its own streets and places, then one line of price. North Myrtle Beach: a plain list of the four old towns, with the Cherry Grove channels and boat ramp, Heritage Shores, Main Street and Ingram Dunes, the shag pavilion, the Crescent Beach pocket park, and Windy Hill's history and parks. Myrtle Beach: Kings Highway in plain words, what "east of 17" means, the busy downtown beach and the 1.3-mile Boardwalk, and the stretch from Briarcliffe Acres to Surfside Beach. Surfside, Garden City and Murrells Inlet: a list with the town pier, the Sunday concerts and golf cart parades, Waccamaw Drive and Dogwood Drive, free county parking and the MarshWalk. The drive-time selling point is gone. Pawleys and Litchfield: a list with the island, its 25 mph and crabbing life, "arrogantly shabby", the family deeds, and where Litchfield is. Litchfield is now described. All of it comes from verified rows (27 to 31).
7. **"Where" answered with town names only.** The short answer and the under-$400,000 section now name Crescent Beach, Edge Drive, Hillside Drive South and the numbered avenues (11th, 23rd, 28th Avenue South), and Collins Street and North Oak Street in Myrtle Beach. They also say what kind of house these are (about 1,360 square feet, most with 3 bedrooms).
8. **Pros heading against its body.** Fixed (see the critic nits).
9. **Technical term list.** Removed. "East of 17" is said once in plain words, in the Myrtle Beach entry.
10. **"Kings Highway is the road to know."** Now: "In Myrtle Beach, the main road near the ocean is Kings Highway, also called US 17 Business."
11. **Cherry Grove photo.** Replaced with the aerial of the Cherry Grove channel houses, labelled Boat ramp, Heritage Shores, Channel houses and Atlantic Ocean. The photo now shows what its section is about.

Owner nits taken: the hero has two tiles (the 186 tile and the path spacing); the towns now start right after the walk section; the flood policy cost is one figure plus the link; the counter-intuitive Surfside half-mile-to-2-miles sentence is gone; the FAQ no longer repeats the body. The "Busy summers" con I first wrote had no row, so it was replaced by row 29 (close to half of North Myrtle Beach homes are seasonal or vacation homes).

## Gates after the fix

- mkpage: built. `build.js audit`: no blocking item for this page except sitemap and orphan (the lead's job). One warning: 12 sentences over 22 words, none over 28.
- `score.js` (SCORE_TODAY=2026-11-08): 95/100. FAIL S8 (orphan). P2 is 5.2 numbers per 100 words (partial). T2 is 50% (partial). A6 (table) passes on the budget table.
- `claims-scan`: 0. `house-claims`: 0. `struck-check`: no struck wording. `repeat-check`: 0 identical, 0 near-identical. The remaining shared shapes are the subject itself ("within half a mile of the ocean").
- `image-meta`: fails only on the Myrtle Beach photo owned by /submarkets/myrtle-beach/ (NEEDS item 7). The channels aerial passes.
- `critic.mjs` at 320, 390, 1024 and 1440: 0 blocking. One warning at each phone width: the false read.wall hit on the last FAQ answer, as in round 1. The run is the sources, legal and credits block after it.
- Looked at the new shots at 390 and 1440 (`wfn/buyers-homes-near-the-beach/shots2`, `crops2`). Checked: the arrow, the whole aerial with its labels, the stat rows with no broken lines, the budget table and the town lists.
