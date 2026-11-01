# Must-answer list: /buyers/undisclosed-flooding/

Batch 2026-10-d, Lane U. Built 2026-11-01 from Google search suggestions for 50 queries (`<website>/data/2026-10-d/buyers-undisclosed-flooding/raw/google-suggestions.txt`, made by `pull-suggestions.sh`), the judge's notes (`audit/judged-2026-10-31.json`), the story bank, and the questions every reader of a "how to check" page has (`reports/Page shapes by kind of page.md`). "People also ask" cannot be fetched from here; the suggestion phrasings stand in for it ("how to find out if a house has flooded before", "do you have to disclose if a house has flooded" are both PAA-style suggestions, subtype 512).

## The reader

A buyer who has found a house, or is about to, in Horry County. They typed "has this house flooded before", "how to find out if a house has flooded", "flood history by address" or "does seller have to disclose flooding". Some have already bought and now suspect the seller knew. They know the flood map exists. They do not know that the map is a forecast, that the seller's form only covers the seller's own years, or that the claim records are locked to the owner.

Why they typed it (CRAFT 1): to avoid buying a house that floods; to find out whether the price, the insurance and the resale will carry a flood they cannot see; and, for the second group, to find out whether they have any recourse.

## The deciding fact

Can a buyer in South Carolina learn a house's flood history before closing, and from whom? Checked first. Yes, but only in pieces, and the seller holds the keys:
- The state's disclosure form asks about flooding, flood claims, flood repairs not claimed and federal flood aid, but each of those questions says "during your ownership" (facts row 3). A flood before the seller bought is not asked, and about 3 in 4 resale houses for sale belong to owners who bought after Florence (row 34).
- The seller may answer "No Representation" only when they lack the knowledge, and the form says that does not waive liability (row 4). Many sales need no form at all (row 5).
- FEMA will not give a buyer the house's flood claims; only the owner can ask (row 8). The insurance claims report (CLUE) is the same: the owner orders it (row 9).
- Horry County's own Florence flood map (the Supplemental Flood Zone) shows where the water went in 2018, and the county's floodplain staff answer "has my property ever flooded" (rows 14, 15).
The page can be written as planned: what the form covers and misses, what only the seller can pull, what we pull ourselves, and the local proof that the map misses floods.

## The list, ranked by demand

| # | What the reader needs | Demand behind it | Ledger rows |
|---|---|---|---|
| 1 | How to find out if a house has flooded before: every source, who can get each, what each misses | "has this house flooded before", "how to find out if a house/property has flooded (before / in the past / ever / previously)" (about 30 suggestions), "flood history by address", "property flood history check", "check house flood history" | 3, 8, 9, 14, 15, 16, 17, 23, 34 |
| 2 | Does a seller have to disclose flooding in South Carolina, and what exactly is asked | "do sellers have to disclose flooding", "do you have to disclose flooding when selling a house", "south carolina seller's disclosure form" and 9 variants of the SC form, "sc residential property condition disclosure statement/act", judge problem 3 | 1, 2, 3, 4, 5, 6 |
| 3 | Can a house flood if it is not in a flood zone; how often that happens here | "flood insurance outside flood zone", "myrtle beach flood zone x", "horry county flood zone x", "flooding can occur outside", judge problem 5 and idea 1 | 18, 19, 20, 22, 23, 32 |
| 4 | Where it flooded here: Matthew, Florence, Conway, Socastee, Longs, Garden City | "conway sc flooding 2018", "socastee flooding", "socastee swamp flooding", "longs sc flooding", "polo farms longs sc flooding", "garden city flooding", "myrtle beach flooding map", judge problem 5 | 11, 13, 14, 20, 21, 32, 33 |
| 5 | Can I get the CLUE report or FEMA claims for a house I want to buy | "clue report flood", "how to get a clue report on a house/property (online)", "fema flood claim history by address", "fema flood insurance claim history", judge problem 2 | 8, 9 |
| 6 | Signs a house has flooded (what to look for at a showing) | "signs a house has flooded", "how to tell if a house has flood damage", "signs of previous water damage", "signs of flood damage house", judge idea 4 | 17, 24 (signs not verified; see facts, Not verified 2) |
| 7 | What a past flood costs the next owner: insurance, the 50 percent rule, repeat-loss surcharges | "flood insurance prior claims", "severe repetitive loss property (definition)", "buying a house that requires flood insurance", "should i buy a house that flooded" | 7, 10, 24, 25, 26, 27 |
| 8 | Should I buy a house that flooded; what makes it acceptable (raised, repaired with permits, insured) | "should i buy a house that flooded", "buying a house that has flooded in the past", "flood damaged house for sale" | 10, 24, 25, 27, 31 |
| 9 | The empty lots: what a flood buyout is and where they happened here | judge idea 3 and photo need 2; "horry county flood buyout" (no suggestions; owner's story clue) | 11, 12 |
| 10 | What if the seller hid it: the law, the time limit, who to call | "seller did not disclose water damage", "what happens if a seller does not disclose", "south carolina real estate commission complaint(s) / file a complaint", judge idea 5 | 6, 28, 29, 30, 35 |
| 11 | What the lender must tell me about the flood zone | "does my house need flood insurance", "what flood zones require flood insurance" | 7 |

Words readers use, to appear once each in plain context: "flood history", "flooded before", "flood zone X", "seller's disclosure", "CLUE report", "FEMA flood claim history", "signs of flood damage", "water damage", "flood buyout".

## Questions only the brokerage can answer (none blocks the page)

- The live page's story (the house a competing brokerage could not sell, the empty lots, the marks on the brick, the flood history never disclosed to the owner) is not in `stories/stories.json`. Ask the owner whether it happened as written; until he answers, the page cannot carry it. Proposed answer: cut it from this version and use the labelled example built from rows 3 and 14 instead. Logged in PROPOSED.md.
- What Chapter3's agents actually do on every offer for flood history (the page says "we check"): which of rows 8 to 17 we run ourselves, and whether we ask every seller for the CLUE report and the FEMA loss history as a condition of the offer. Proposed: state only the checks a licensee can do (rows 14 to 17 and 32, and asking the seller for rows 8 and 9).
