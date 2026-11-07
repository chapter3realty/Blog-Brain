# Trim: /invest/condos/

Batch 2026-11-a. The owner's request: cut the page to one main question (STANDARD A14, CRAFT 1 "One main question per page"). The trim only edits `specs/condos.js` and rebuilds with `tools/mkpage.js`. It adds no fact.

## The main question

"Are Myrtle Beach condos a good investment?" These are the words of the title and the H1. The search that matters most is "are oceanfront condos in myrtle beach a good investment?" It was shown 100 times at position 4 with no click. The short answer gives the answer in the first screen. It says a condo pays only if it rents like the busier listings. It then gives the fee and tax on a typical oceanfront two-bedroom against what an average and a top-quarter rental keep. It ends with the price record against houses.

## The follow-ups the page keeps

1. What does a condo cost to own each year? (fee, tax, insurance)
2. What does a condo earn? (the rental chart, the owner's story, what a manager takes)
3. How have condo prices done against houses, and what do condos sell for?
4. What should you check in the building? (nightly rentals, the loan, the five parts of a building)

The condo-or-house table stays as the first section. It sums up the follow-ups for each kind of investor.

## What was cut, and where each side question now lives

| Cut | Why | Where it lives now |
|---|---|---|
| "Where are the condos?" heading and the unit counts by area | Side question; the reader does not need a unit count to decide | The three photos stay under the price section. The building-by-building view is linked from the building section ("their buildings differ" goes to `/invest/condo-buildings/`). The counts stay checked in the spec. |
| The tax-rate cards | The two sentences above them said the same thing | The two sentences stay. |
| "If you buy with us, we can get you an insurance quote" in the insurance part | Said twice; the offer in the earnings section and the end offer make the same promise | Those offers. |
| The national 25 percent landlord-policy figure | A second figure for the same point; our own files already give it | The Insurance Information Institute link stays in the sources box. The point links to `/invest/landlord-insurance/`. |
| The 25 percent exemption detail (the floor at market value, the lowest tax figure) | Side question | One sentence with a link to `/buyers/property-taxes/`, which explains the claim. The January 31 deadline stays. |
| "Who pays the lodging tax?" heading | Side question | One sentence in the tax part, with the existing link to `/invest/str-rules/`. |
| The list of nightly-rental zones (Broadway at the Beach, the US 17 Bypass, US 501, The Market Common) and the 24 grandfathered houses | Side question | One sentence on the oceanfront strip and the 3 in 4 share stays. The full map is on `/submarkets/myrtle-beach/` (existing link) and `/invest/str-rules/`. |
| "Who are your neighbors?" heading and its chart | Side question | Moved to an FAQ entry, with the same 1 in 5 and 6 in 10 figures. |
| Fannie Mae's tests on one owner holding too many units and on unpaid large repairs | Side detail of the loan question | `/invest/condotel-financing/` and `/invest/non-warrantable-condos/` (both linked). The Fannie Mae source link stays. |
| "Can you use an FHA or VA loan?" heading, and "That is what the seller's agent wrote" | The heading split one answer in two; the caveat is a method note | The FHA and VA figures stay as one paragraph in the loan section. The sources line says the homes for sale are CCMLS listings. |
| "Where are the bargains?" as its own section | One paragraph and an offer | Now a sub-heading in the building section, with its offer. |
| "Can you owe the seller's HOA dues?" heading and its three sentences | Side question | Two sentences with a link to `/hoa/liens-and-foreclosure/`, which owns it. |
| FAQ "Are most Myrtle Beach condos in big buildings?" | Side question; does not help decide | Dropped. The figure stays checked in the spec (row 6). |
| The source and period in the two chart notes | Method notes said twice | The sources line already names AirROI and county deeds, with the period. |
| "Rental programs here are usually in oceanfront buildings run for short-term rentals." | Said again in the loan section | The loan section. |

Also reworded: the first section now opens with a sentence a search engine can quote ("A condo suits an investor who wants a low price..."), in place of "It depends on what you want from it." Seven sentences over 28 words were split or shortened.

Kept as they were: the hero, the three charts left, the value table, the yearly cost card, the rental-income chart, the owner's story, the management cards, the Fannie Mae list, the five building checks, the homes feed, every offer and every source link.

## Numbers before and after

| | Before | After |
|---|---|---|
| Words of prose (score.js) | 2,075 | 1,788 |
| Content sections | 9 | 8 |
| Words in the main text (trim-check) | 2,999 | 2,587 |
| H2 headings in main | 11 | 10 |
| Offers | 6 | 6 |
| FAQ entries | 4 | 4 |
| Numbers in prose | 98 | 83 |
| score.js total | 99 | 99 |
| focus (A14) | 73% | pass |
| Short-answer words | 120 | 102 |

## Checks

- `trim-check.js`: no new number, no new name, no source dropped. Its one flag is the byline date ("Updated July", "19"). A copy with the byline date set back as the dates step sets it prints clean.
- `score.js` with SCORE_TODAY=2026-11-07: 99 before and after; focus passes at 1,788 words and 8 sections.
- `house-claims.js`: 0 sentences.
- `build.js audit`: no copy FAIL on this page. Its two date lines are the date problem below.

## Open issues

1. Building with mkpage resets the page's date to its first publish date. That gives trim-check its one flag and two date FAIL lines in `build.js audit`. Neither is copy. `node build.js dates` restores the date. This trim was not allowed to run it.
2. The page is at 1,788 words, 12 under the cap. A later addition needs a cut to match.
3. Numbers are still dense (4.5 per 100 words, P2 at 71%). Most are the figures that answer the question. Cutting more would cut the answer.
4. The title does not say "oceanfront", the word in the search shown 100 times at position 4. That is title work (step 1 of the owner's plan), not a trim. A title such as "Are Oceanfront Myrtle Beach Condos a Good Investment?" would match the search.
