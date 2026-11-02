# Review round 2: what changed (fix round 2, 2026-11-02)

Spec: `specs/myrtle-beach.js`. New data: `data/2026-11-a/submarkets-myrtle-beach/fix2_data.py` -> `house-resales.json`. New ledger rows 53 to 56, all VERIFIED-BY-FIXER. The lead re-checks them with rows 41 to 52.

## Blocking

**[reader] "$300,000 for a house: where?"** Fixed, with the data the reviewer pointed to. While splitting the deed resales by the county land use of the sold parcel, I found the cause of the gap. Row 16's "not condo" group (1,005 sales, $305,000) is not only houses, villas and townhouses. It has 459 houses ($539,500), 328 sales on condo parcels whose deed lacks "HPR" ($170,000), 130 on land use 109, mostly townhouses ($228,750), and 79 villas and townhouses ($120,000, 62 of them at the Yachtsman resort). So "$305,000 for houses" was never the price of a house in the city. Changes:
- Short answer: "Houses in the city resold for about $540,000 in the middle" (row 53), not $305,000.
- Prices section: "Houses resold for about $540,000." The tax table row is now "A $540,000 house: about $2,180 / about $8,250".
- New subsection in "Where should you live", after part 3: "Where are the houses near $300,000?" It says houses resold for about $540,000 and only about 1 in 6 sold for $350,000 or less. Of the 869 homes for sale in the city at $300,000 or less, only 8 are houses (row 54). A table follows: Bent Oak Estates about $245,000, almost none in the high-risk flood zone; Meridian about $350,000, about 2 in 5; Summit at Meridian about $420,000, about 2 in 5 (12 to 25 sales each). Then each place by what it has. Bent Oak Estates is off Pridgen Road: about 150 houses, about a mile from the beach and from the airport, about 7 in 10 of them main homes (row 55). Meridian and Summit at Meridian are west of the airport: one planned development of 513 houses, with the highest flood-zone share of the city's house districts (rows 21 and 56). Nightly rentals are not allowed in any of the three.
- The intro to "Where should you live" now points to it: "For a house near $300,000, look at the two smaller neighborhoods after part 3."
- This also answers the owner's "four places is thin" in part. They are a written-up place with a table, not a fifth numbered map part. A fifth map number would need a life row for each place that a verifier has checked.

## Nits

- **Critic warnings.** critic.mjs at 320, 390, 768 and 1440: 0 blocking. One run at 1440 timed out loading the Market Common photo; the file served in 2 ms and the re-run was clean. The new subsection first drew a read.wall at 320 (1,060 px). The table fixed it. Warnings left: at 390, the last FAQ answer plus the sources (the false hit); at 320, the hero sub, part 4, the prices section and the FAQ, the same four as round 1.
- **Row 49, the condo-hotel loan sentence.** Left for the lead, as the reviewer asks ("Lead: confirm or cut"). The Fannie Mae sentence before it is verified, so if the lead cuts the second sentence, the next sentence ("Our preferred lender can tell you which loans work in the building you like") still stands on its own.
- **Vocabulary ("rentals", "zones").** Partly taken. Part 4 no longer says "zone" ("is where the city allows nightly rentals"; "where nightly rentals are not allowed"). "Where should you live" now has 5 uses of "zone"; it had 8. The map legend keeps its four labels, because a reader needs them to read the map. The new subsection adds one "nightly rentals". **Life section (beach access, dining, drive times, hurricanes): not taken this round.** Each item is a new fact that needs a source and an independent verifier. Drive times need a routing source. I measured only straight-line miles, and I used them only for the two new neighborhoods.
- **Part 3 repeat.** Fixed. The photo caption is now "Houses on wide lawns facing the beach, on the older streets north of downtown Myrtle Beach." The next paragraph keeps "Nightly rentals are not allowed here".
- **Photo credits, "in the chart".** Fixed. The credit for the towers now reads "Oceanfront condo towers south of downtown Myrtle Beach". The photo record's caption says "in the table above". Each credit now uses only the photo's first sentence. The old code added ", August 2011", and photos.js skips any caption with a date, so the credits had fallen back to the record's full two-sentence captions. The year stays in the photo records.
- **Repeated numbers.** Pros: taken. "About 3 in 4 houses ... main homes" is now "The house neighborhoods are mostly owners' main homes." FAQ: not taken. "18 months / 4 months" and "$1,528 / $404" stay in the FAQ. An FAQ answer is read on its own in search results and in FAQPage schema, and it has to answer without the body. The body says "a year and a half" and the tiles carry the months.
- **Personification.** Fixed. "in a zone that allows nightly rentals" became "is where the city allows nightly rentals". The FAQ's "only in the zones that allow them" became "only in the zones where the city allows them". The map alt text's "Orange areas allow nightly rentals ... Green areas ... do not" became "Orange areas are where the city allows nightly rentals ... zoned for homes only, where it does not."

## Gates after the rebuild

- score.js: 100/100 (SEO 100, AEO 100, Human 99, Trust 100).
- claims-scan, facts-check: 0 hits on this page. house-claims: 0 sentences.
- build.js check: OK.
- build.js audit: the same three lines as round 1. Two are date lines, which the lead's `build.js dates` sets. The third is the A20 note.
- critic.mjs: 0 blocking at 320, 390, 768 and 1440.
- I looked at the 390 and 1440 shots of the new subsection, the table and part 4.
