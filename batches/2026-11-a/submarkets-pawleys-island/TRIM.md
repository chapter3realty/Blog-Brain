# Trim: /submarkets/pawleys-island/

Batch 2026-11-a. One main question per page (owner, 2026-11-07; STANDARD A14; CRAFT 1). Only `specs/pawleys-island.js` changed. No fact was added. The untrimmed spec is kept at `scratchpad/trim/submarkets-pawleys-island/spec-before.js` in this session.

## The main question

The title's words: **Pawleys Island real estate, island or mainland: what does a house cost in each part, and does it flood?**

## The follow-ups this page answers

1. How often does an island house come up for sale? (scarcity, and the "hold value" searches)
2. What does a house cost to own each year? (tax and flood insurance)
3. Can you rent it out, and what do rentals take in? (the rental yield and rental demand searches)
4. Can you rebuild or change a house? (the setback line and the town's historic list, which decide an oceanfront or old-house purchase)

Flooding and hurricanes stay as their own section, since the title names flood.

The Search Console questions land here as follows:
- Rental yield and rental demand: the renting section, with a new link to /invest/rental-returns/.
- Budget communities and single-family homes against condos: the west of US 17 entry, which now says these are the lowest prices of the four parts and gives the condo price.
- Value in downturns: the how-often section.

## What was cut, and where each side question lives now

| Cut | Kind | Where it lives now |
|---|---|---|
| "What is it like to live on Pawleys Island all year?" (winter, January normals, dogs off the leash in winter, restaurants, the who-is-home chart, the tax-bill chart) | Side question | Gone from the page. The main-home shares per part moved into the four place entries. The summer and winter split of rent moved into the renting section. The drive-time table moved to the end of the four parts. Schools moved into the county FAQ answer, and the town police into the Myrtle Beach FAQ answer. Dog rules are on /buyers/relocating/beaches/. |
| "Why do the old Pawleys Island houses look the way they do?" (planters' summer houses, cypress timbers, Roman numerals, brick foundations, the National Register) | Side question | Gone, except the town's historic list. Those rules decide a purchase, so they moved into the rebuild section in one paragraph, with the old-house photo. No Chapter3 page owns this history. See open issues. |
| The hammock history callout (1889, the riverboat captain) | Side question | Gone. The Hammock Shops stay as a place, and their history link stays in the sources box. |
| Fishing, crabbing, boat ramps, beach parking spaces and accesses, no fireworks, golf carts in the island paragraph | Side detail | Gone. Golf carts stay in their FAQ entry. Free parking, the 25 mph limit and "arrogantly shabby" stay in one sentence. |
| The Litchfield list (bike path, park, gardens, landmark) and the behind-the-island list | Fact said twice (the bikeway was in both lists) | One sentence each. Huntington Beach State Park, Atalaya and Brookgreen Gardens stay, because SIBLING-OWNERS gives this page their history and /submarkets/garden-city/ links here for it. |
| The town's building rules (height, size, paving, review board) | Side question | Gone. The end offer still names the checks a buyer gets. |
| The beach rebuild sand and its funding; the south-tip inlet settlement | Side question | Gone. The town page and the settlement page stay in the sources box. |
| The tax fee and appraised-value paragraph | Method note | Moved to the sources box ("Tax: county estimate with fees ($44 island, $96 west of US 17)"). $44 stays in the worked example table. |
| The rental stat tiles ($27 million, $70,000) | Fact said twice (also in the paragraph above them) | The paragraph keeps both numbers. |
| The mainland HOA rental sentence in the renting section | Fact said twice (the behind-the-island entry says it) | Kept once, in the behind-the-island entry. |
| The 1031 exchange sentence | Side question | Gone. /invest/strategies/1031-exchange/ owns it. |
| FAQ "Is Pawleys Island expensive?" | FAQ that repeats the short answer and the four parts | Gone. 5 FAQ entries remain. |
| Hazel's "the older houses came through it", the drainage plan, "as a main home the gap is much smaller" | Cut for length | The flood chart still shows the main-home cost. |
| "Most", "nearly every", "few", "nearly half", "more than half", "little" in place of some "N in 10" figures | Rewording to fewer numbers | Each matches the old figure (73.3%, 85.7%, 190 of 204, 17 of 218, 99 of 217, Q3 above 55%, Q1 under 2.5%). |

New one-sentence links, worded with what was already on the page:
- /buyers/coastal-insurance/ for wind and homeowners insurance
- /buyers/relocating/hurricanes/ for storms on the rest of the coast
- /invest/rental-returns/ to weigh rent against price

Kept, not cut:
- The hero and the homes feed slot.
- The area map, the setback map, all three charts that answer the main question or a follow-up, and the storm chart.
- Every offer: 9 before and 9 after, each still tied to its part or section.
- Every source link, and all five photos. The walkway photo moved to the renting section, and the north-end photo to the flood section.

## Numbers

| | Before | After |
|---|---|---|
| Prose words (score.js) | 3,126 | 1,791 |
| Main text words (trim-check) | 4,177 | 2,683 (36 percent fewer) |
| Content sections | 8 | 6 |
| FAQ entries | 6 | 5 |
| Offers | 9 | 9 |
| score.js total | 98 | 100 |
| A14 focus | 15% | pass |
| P2 numbers per 100 words | 4.2 (81%) | 4.1 (83%) |
| T2 first-hand sentences | 2 | 2 |

Checks run:
- `house-claims.js`: 0 sentences.
- `build.js audit`: no copy FAIL on this page. Its two date lines are open issue 1.
- `trim-check.js`: no new number and no source dropped. Its one flag, "Updated June", is the same date problem.

## Open issues

1. Building with mkpage resets the page's date to its first publish date, 2026-06-12. That gives trim-check one flag ("Updated June") and two date FAIL lines in `build.js audit`. Neither is copy. `node build.js dates` restores the date. That step is the lead's, and this trim was not allowed to run it.
2. The history of the old houses is searched (history, historic district, slavery history, hammock history, chapel) and now has no home on the site. It may earn its own short page. The verified rows (43, 44, 27, 60) are in facts.md.
3. The island's daily rules (dogs by season, parking spaces, boat ramps) and the town's building limits are gone from this page. If those searches show in Search Console, they could become one short "living on Pawleys Island" page.
