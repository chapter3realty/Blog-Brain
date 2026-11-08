# Fixer rows check: /sell/repairs-before-selling/

Independent verifier, 2026-11-08. This file covers the four rows marked VERIFIED-BY-FIXER in facts.md (rows 27 to 30). I opened each source myself. Copies are in `<scratchpad>/wfn/sell-repairs-before-selling/fv/`.

| Row | Status | Page sentence (spec) |
|---|---|---|
| 27 | VERIFIED | FAQ "Who pays for the CL-100": "The state regulation for the report does not say who orders it or who pays for it. The buyer and seller agree on that in the sale contract. A buyer's lender can also ask for one before it lends." |
| 28 | CORRECTED | FAQ "How old can a roof be for insurance": see below |
| 29 | VERIFIED | Lender section: "Fannie Mae is a company that buys home loans from lenders. It does not buy one on a house with damage that affects its safety, soundness or structure until the damage is fixed." |
| 30 | VERIFIED | Systems section: "Air conditioners here run more than in a northern city such as Columbus, Ohio, by NOAA's climate records." |

## Row 27: VERIFIED

- I read S.C. Code Regs. 27-1085 K(1) to K(7) again at LII. They cover who may issue the report, the form, what the inspection covers, what the report discloses, and "not a warranty". They say nothing about who orders or pays for the report. A search of the whole regulation for pay, cost, expense, buyer, seller, purchaser, fee, charge, order and request finds only the Department's record reviews, a customer's request for some treatments, and the business licence fee.
- S.C. Code 27-50-110, from scstatehouse.gov (the old t27c050.php address now moves to statmast.php): "Nothing in this article is intended to prevent the parties to a contract of sale from entering into agreements of any kind or nature with respect to the physical condition of the property". That supports "agree on that in the sale contract".
- The opposite under another name: VA once barred a veteran from paying for the termite report in most states. VA Circular 26-22-11 (June 2022) lets the veteran pay it and asks the veteran to negotiate it with the seller (secondary summaries; the circular itself was not opened). No rule now puts the cost on one side, so the sentence holds.
- "A buyer's lender can also ask for one": HUD 4000.1 II.A.3 (Q), "the Mortgagee must obtain such inspection" (row 9). Supported.

## Row 28: CORRECTED

- I found no roof age limit in South Carolina's insurance laws. I searched the full text of Title 38, chapters 73 (rates) and 75 (property and casualty), at scstatehouse.gov for "roof". The only hits are the SC Safe Home grant items and the coastal rating factor "use of roof tie downs". Web searches found no South Carolina statute or Department rule on roof age.
- "No public South Carolina rule" goes too far. A search shows a South Carolina insurer's published roof rules: "Roof Eligibility SCHO" and "Roofs Eligibility SCDF" at ptshelp.hoaic.com. The fixer found the same pages. They returned 503 and a connection reset again today, so their limits are not verified. Still, a reader would take "no public rule" to mean that no insurer has one, and that is not shown. Limit the claim to the state's laws.
- "An insurer that asks for a four-point inspection gets the roof's age and its years of life left from the report" takes one Florida form to stand for every insurer's report. Row 12: "An insurer here can use its own form." Name the form.

Page sentence (FAQ, "How old can a roof be for insurance in South Carolina?"):

> We found no public South Carolina rule on how old a roof can be for insurance. An insurer that asks for a four-point inspection gets the roof's age and its years of life left from the report.

Replacement:

> We found no roof age limit in South Carolina's insurance laws. Insurers can still ask about the roof. The sample four-point form from Citizens, a Florida insurer, asks for the roof's age and its years of life left.

The third FAQ sentence ("For an FHA loan, the roof needs at least two years of life left") is row 7. It is not part of this check. Both struck sentences were added to `sell-repairs-before-selling-struck.json`. `node tools/struck-check.test.js` prints "all controls pass". The old wording fires both new entries, and the replacement fires none.

## Row 29: VERIFIED

- Fannie Mae Selling Guide B4-1.3-06 (published November 04 2026), opened today: "Loans secured by properties with a condition rating of C6 are not eligible for sale to Fannie Mae. Any deficiencies impacting the safety, soundness, or structural integrity of the property must be repaired with a resulting minimum condition rating of C5 prior to sale of the loan." The same topic adds that the lender must show the condition "has been corrected or repaired prior to loan delivery". "Until the damage is fixed" matches.
- "A company that buys home loans from lenders": FHFA, "Fannie Mae and Freddie Mac buy mortgages from lenders" (fhfa.gov/about-fannie-mae-freddie-mac; fanniemae.com returned 403).
- A small point for the writer, not a fact error. The paragraph before this one reads "A buyer may use a regular loan instead. Fannie Mae is ...". Not every regular loan is sold to Fannie Mae. "Some regular loans are sold to Fannie Mae" would be more exact. Optional.

## Row 30: VERIFIED

- NOAA NCEI 1991-2020 annual normals, pulled again today: North Myrtle Beach airport 2,003.3 cooling degree days; Columbus 1,067.8; New York Central Park 1,221.5. These match row 6.
- "Run more" is the wording row 6 allowed. The sentence gives no ratio and does not say "harder", "hotter days" or "more wear". "Here" uses the North Myrtle Beach airport, the area's only 1991-2020 normals station (row 6). "A northern city such as Columbus" holds for both northern stations.
- No entry in the page's struck list fires on rows 27, 29 or 30.

## Result

Three VERIFIED, one CORRECTED, none STRUCK. The page passes after one FAQ change (row 28).
