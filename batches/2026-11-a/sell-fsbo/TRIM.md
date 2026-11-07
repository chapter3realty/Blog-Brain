# Trim: /sell/fsbo/

Trim of 2026-11-07, for STANDARD A14 (one main question). I edited only `specs/fsbo.js` and rebuilt it with `tools/mkpage.js`. I added no new number, name or claim.

## The main question

How do you sell your house by owner in South Carolina? (Title: "Sell Your House by Owner in South Carolina (FSBO)".)

The first section answers it: yes, with no license, and three duties (an attorney at closing, the state form before the contract, lead papers for most homes built before 1978). The steps section gives the order.

## The follow-ups (four)

1. What does it cost, and what do I save? This matches the search "cost to sell a house in south carolina" (20 shown). The section has the calculator, the deed fee, the three paths, and whether by-owner homes sell for less.
2. Do I need a lawyer? Covers who picks the attorney and who writes the contract.
3. What paperwork do I need? Covers the state form part by part, the coastal questions, the flood claims count, the form rules, the sales that need no form, and the lead papers.
4. How will buyers find the house, and do I have to pay their agent?

## What was cut, and where each side question lives now

| Cut or moved | Why | Where it lives now |
|---|---|---|
| Section "Is selling by owner a good idea for you?" (four decision cards) | Each card repeated another section | Gone. Its links pointed to sections still on the page. |
| Section "Do houses sold by owner sell for less?" | A side of the savings question | Now an h3 under "What you save", with both charts and two short sentences |
| "NAR surveys people who bought a home to live in and also sold one" | Said twice (the chart note says it) | The NAR chart note |
| 5 percent sold by owner, the lowest on record; 9 percent in resort areas | Not about the question asked | Cut. NAR's release stays linked. |
| "We read the county's deed index for a year and compared..." | Method note | The sources box has the dates. The chart note says which sales were counted, and that a shared last name is not proof of family. One short first-hand sentence stays in the body. |
| The pricing test (9 percent, 16 percent, 4,919 resales), "Selling to a stranger", the 17 percent "hardest task" line | Pricing is owned by /sell/home-value/, which runs the same test | Step 1 links /sell/home-value/ |
| The four tax cards (exclusion, 2 of 5 years, the 5.21 percent hold-back, Form I-295, the refund) | Owned by /sell/capital-gains/ and /sell/out-of-state-buyers/ (both carry I-295) | One sentence after the steps links both pages. The FAQ gives the $250,000 / $500,000 exclusion. |
| "How you get paid safely" h3 | A closing-day point | Step 8, with the CFPB link |
| The Attorney General opinion paragraph, "The state Supreme Court has the final word" | Two paragraphs said one point | One sentence that keeps the condition "if no legal advice is given" |
| "Preparing a deed for someone else is the practice of law" | Said twice | Cut the first half; the deed sentence stays |
| "It asks 28 numbered questions, each answered Yes, No or No Representation, plus lines..." | Said twice (the figure caption says it) | The figure caption |
| The as-is card | The FAQ answers it | FAQ |
| "What you do not have to tell a buyer" h3 | A side question | FAQ ("someone died in the house"), with the illness and registry rules |
| MLS paragraph and the 7 percent "MLS and little else" line | A side question people search ("list house on mls without realtor") | FAQ "Can I put my house on the MLS without an agent?" |
| "Not giving the form does not cancel the contract or stop the closing" | A side point | Cut. Facts.md still has it. |
| Sales that need no form: executor or trustee, first sale of a new home, public auction | Not this reader's case | Cut. "15 kinds" and "Among them" stay. |
| HOA addendum: "lists the dues and the association's contact" | Detail owned by /hoa/documents/ | The link to /hoa/documents/ stays |
| The old five FAQ entries (deed stamps, son or daughter, died in the house, as is, buyer's own agent) | Each repeated a section | Replaced by four that repeat none: MLS, died in the house, as is, tax |
| Step 2 and step 3 wording, the "three ways" lead-in, "Agents' fees are negotiable" | Repeated the sections above | Shortened |

Kept as they were: the hero and glance row, the calculator, the three-paths table, all four charts, the form drawing, the photo, the market card, the lead box, the regulator's line on broad marketing, the buyer's-agent rules, the steps, the coaching section, the lead form and consent text, every offer, and every source link.

Offers: after "What you save", "The paperwork", "Finding buyers" and "The steps", then the coaching form and the closing band. Each is tied to its section and none share words.

## Numbers

| | Before | After |
|---|---|---|
| Score (SCORE_TODAY=2026-11-07) | 98 (AEO 94) | 100 (AEO 100, Trust 100) |
| Words of prose (score.js) | 2,626 | 1,794 |
| Content sections | 9 | 7 |
| FAQ entries | 5, all repeating a section | 4, none repeating a section |
| Focus (A14) | 37% | pass |
| Internal pages linked from the body | 5 | 6 (adds /sell/out-of-state-buyers/) |
| Main text words (trim-check) | 3,524 | 2,687 (-24%) |
| Offers (trim-check) | 9 | 8 (the decision card's coaching link went with the cards) |

## Checks

- `tools/trim-check.js`: no new number, no source dropped. It flags one new name, "Updated July". That is the byline date, not copy (see below).
- `tools/house-claims.js`: 0 sentences to scope.
- `node build.js audit`: two FAIL lines on this page, both about the date. The sources-block line I caused (91 words) is fixed: the block is now 90.
- `tools/claims-scan.js`: nothing on this page.

## Open

- **The date.** mkpage writes the page's datePublished (2026-07-25) into dateModified and the "Updated" line. Only `node build.js dates` sets the modified date, and this trim may not run it. The lead runs it before the page ships. That clears the trim-check name and both audit FAIL lines. Pawleys Island has the same two lines.
- The page is at 1,794 words against a cap of 1,800. Any sentence added later has to replace one.
- The paperwork section is still the longest (about 460 words). Most of it is the form drawing, which is the page's own work and answers a follow-up.
