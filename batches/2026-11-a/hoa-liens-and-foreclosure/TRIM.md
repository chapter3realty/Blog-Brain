# Trim: /hoa/liens-and-foreclosure/

Owner's request: cut the page to one main question (STANDARD A14, CRAFT section 1). Only the spec changed: `specs/liens-and-foreclosure.js` in the website working copy, built with `tools/mkpage.js`. No new number, name or claim. The untrimmed page is kept at the scratchpad path `trim/before/hoa-liens-and-foreclosure.html`.

## The main question

Can an HOA foreclose in South Carolina? These are the title's words. The H1 says it as "Can an HOA take your house in South Carolina over unpaid dues?"

## The follow-ups the page keeps

1. What happens if I stop paying, and how fast? (the eight steps, with the Winrose months)
2. How does a small bill turn into thousands? (the Winrose judgment and sale)
3. Does the HOA lien come before my mortgage? (the condo ladder, the 1994 case, the two cards)
4. What can I do if I am behind now? (the five actions)

Kept because only this page has them and they answer the main question: the count from the county's sale list (4 of 19), the debt against county value, the Horry County share of state complaints, and the three bills before the legislature.

## What was cut, and where each side question lives now

| Cut | Why | Where it lives now |
|---|---|---|
| The whole "Buying a condo or HOA home" section and its offer | A side question for a different reader | One sentence and a link in the mortgage section, to `/hoa/estoppel-and-transfer-fees/` (its section "Old dues follow the unit to you"). The bottom offer still speaks to buyers. "Our agents check for unpaid fees before closing" moved with it. |
| The two Fannie Mae loan cards (15 in 100 units behind; a suit does not block the loan) | Side question | One link to `/hoa/documents/`, which has the 15 percent rule. Fannie Mae stays in the sources box. |
| The condo reserves link sentence | Side question | Cut. `/hoa/reserves/` is still linked from the HOA guide. |
| The title search and estoppel sentences | Went with the buyer section | `/hoa/estoppel-and-transfer-fees/` |
| "While a condo case goes on, the owner owes rent" card | Side question | Cut. Row 17 in facts.md keeps it. SC Code 27-31 stays in the sources box. |
| FAQ: "Can an HOA put a lien on your house for fines?" | Side question | One sentence and a link in section 1, to `/hoa/violations-and-fines/`, which has "Whether a fine can become a lien depends on your own paperwork". |
| "The winning bidder pays 5 percent of the bid by noon the next day" | A bidder's question | `/invest/foreclosures/`, already linked from the mortgage card |
| H. 5204: "Also 90 days' notice, mediation and a cap on attorney's fees" | Detail of a bill that is not law | Cut. Row 37 in facts.md keeps it. The bill's link stays on its card. |
| The 30-day sentence in the steps intro, and "usually 30 days" in action 1's heading | Said twice | Step 4 and the short answer |
| Step 6: "It adds the interest, the fees and the court costs to the dues" | Said twice | Step 1 and the Winrose section |
| Step 2: "The lien is the association's claim against the home itself" | Said twice | The short answer defines a lien |
| Step 5: "The owners did not answer" | Said twice | The same step says it |
| Action 1: "A lawyer can write it with you; the $50 line below is a start" | Said twice | Action 4 (the SC Bar line) |
| Action 5: "Unpaid dues usually come out of the seller's money at closing" | Said twice | The ladder and the offer below it |
| FAQ: the Winrose set-aside sentence | Repeats the Winrose section | The Winrose section |
| "The steps that stop a bill like this are in what to do if you are behind" | A link to the section that follows | Cut |
| "the same way a bank forecloses, or forces a sale, when a mortgage is not paid"; "so they differ from one community to the next"; "the county's small claims court" | Extra words | Cut |
| "and matched each association case to the county's parcel records" | A method note | Moved to the sources box note |

Reworded, same facts: action 1's heading ("Answer the lawsuit in time."), action 2 (one sentence on cancelling the lawsuit notice), and step 5 (the Horry County newspaper notice in one sentence).

## Numbers

| | Before | After |
|---|---|---|
| Words of prose (score.js) | 2,240 | 1,795 |
| Content sections | 8 | 7 |
| FAQ entries | 5 | 4 |
| Offers (trim-check count) | 6 | 5 |
| Score | 99 | 100 |
| A14 focus | 61% | pass |
| T2 first-hand sentences | 3 | 2 |

Offers sit after section 1, section 3 and section 6, plus the hero and the bottom band.

Checks run:
- `score.js` with SCORE_TODAY=2026-11-07: 100/100; focus passes at 1,795 words and 7 sections.
- `house-claims.js`: 0 sentences.
- `trim-check.js`: no new number and no source dropped. Its one flag is "Updated July". That is the date problem below, not copy.
- `build.js audit`: no copy FAIL on this page. Its two date lines are the same date problem.

## Open issues

1. Building with mkpage resets the page's date to its first publish date. That gives trim-check one flag ("Updated July") and two date FAIL lines in `build.js audit`. Neither is copy. `node build.js dates` restores the date. That step is the lead's, and this trim was not allowed to run it.
2. The page is at 1,795 words of prose, 5 under the cap. A later addition needs a cut to match.
3. The search "south carolina statute of limitations hoa unpaid dues" (3 showings, position 34 to 52) is not answered. must-answer.md lists it as not verified. It needs a researched row and the verifier before it can go in, probably as one FAQ entry.
4. The condo rent rule (row 17) is now on no page of the site. If owners in a condo case search for it, it could go back as one FAQ entry.
