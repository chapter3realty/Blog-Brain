# Fixer rows re-verified: /sell/sell-or-buy-first/

Independent verifier, 2026-11-08. Rows 22 to 24 of facts.md were marked VERIFIED-BY-FIXER. I opened each source myself. Copies are in `wfn/sell-sell-or-buy-first/fv/` (scratchpad, not the repo).

| Row | Result |
|---|---|
| 22 | CORRECTED (two sentences) |
| 23 | CORRECTED (one sentence) |
| 24 | VERIFIED |

Three struck entries are added to `sell-sell-or-buy-first-struck.json`. The built page fires all three; the approved wording below fires none. `node tools/struck-check.test.js` passes.

## Row 22: property tax on the old home

Sources opened: SC Code 12-43-220, live at https://www.scstatehouse.gov/code/statmast.php?title=12&chapter=43 (the old t12c043.php URL redirects); Horry County Assessor, https://horrycountysc.gov/departments/assessor/guide-to-assessment; Colleton County Assessor, legal residence instructions (rev 2025), https://colletoncounty.org/sites/default/files/uploads/assessor/instructions_for_legal_residence_rev25.pdf.

What holds:
- (c)(2)(i), word for word: "A residence which has been qualified as a legal residence for any part of the year is entitled to the four percent assessment ratio provided in this item for the entire year".
- (c)(2)(ii)(B), word for word: "neither I, nor a member of my household, claim the special assessment ratio allowed by this section on another residence." The page's "You certify that no one in your household claims that rate on another home" is right.
- (c)(2)(vi), word for word: notify the assessor "within six months of the change".
- Tax year = calendar year: Horry gives the tax year 2024 filing window as "between Jan. 1, 2024 and Jan. 15, 2025".

Problem 1. "The old home is taxed at the lower rate through the year you move out." This is unconditional. A household gets the 4 percent rate on one home for a tax year. Colleton County's assessor instructions say so outright: "A taxpayer may receive the four percent assessment ratio on only one residence for a tax year. South Carolina Code of Laws (12-43-220(c))." The statute's own certification says the same thing, and its active-duty military clause is the one express exception: "may claim the four percent assessment ratio ... for two residential properties". So the old home keeps the rate for the move year only if the household does not also claim it on the new home for that year. The page's next rows tell the reader how to claim it on the new home, so the two conflict for a reader who claims the new home in the move year. Owner question 4 (the Horry assessor's practice in the year of a move) is still worth asking.

Problem 2. "You pay the higher rate on it if you still own it on January 1 of the next year." Neither the statute nor the Horry guide uses January 1 as a status date. The test is "for some period during the applicable tax year". Owning the home into the next year without living there means you can no longer claim the rate. But the home is not certain to be taxed at 6 percent for that year. If a buyer makes it their legal residence that year and applies, (c)(2)(i) qualifies it for the whole year. Taxes are also prorated at closing (Form 310 §22), so "you pay" overstates too.

| Page sentence (now) | Replace with |
|---|---|
| "The old home is taxed at the lower rate through the year you move out." | "The old home can keep the lower rate for the year you move out, if your household does not claim it on the new home too." |
| "You pay the higher rate on it if you still own it on January 1 of the next year." | "If you still own it the next year and do not live there, you can no longer claim the lower rate on it." |

Source line for the ledger: SC Code 12-43-220(c)(2)(i), (c)(2)(ii)(B); Colleton County Assessor, legal residence instructions (rev 2025).

Note for the writer (not one of the fixer rows): the "Why" row says "A home that was your legal residence for any part of a year is taxed at the 4 percent rate for that whole year." That is row 19's approved wording. With the new first sentence above it reads correctly. Do not add "both homes" back (row 19 struck it).

## Row 23: the six steps

Sources opened: SCR Form 310 (1/2020), the copy at `wfn/sell-sell-or-buy-first/raw/forms/wu-310.pdf` (the public file https://www.westernupstatemls.com/wp-content/uploads/2020/05/Form-310.pdf); rows 8, 9, 13, 17 and 21 as verified.

What holds: steps 1 to 5. Step 1's service line matches row 21 ("we build the timeline around that"). Step 2 matches row 9 (the signed sale contract). Step 3's "about 8 weeks" is row 8 (57.5 days). Steps 4 and 5 are the order of rows 13 and 17, with no new fact.

Problem. Step 6, "A closing date moves only if both sides of that contract agree in writing." The quote the row rests on, "Any extension to this date must be made in writing and agreed to by both Parties.", is on page 3 of Form 310 under DUE DILIGENCE. "This date" is the end of the Due Diligence Period, not the Closing Date. Form 310 has no clause about extending the Closing Date. What it does say:
- §4: Closing "occurs no later than 5 PM on or before ___ ("Closing Date")". It can close earlier, so "moves only if" is too strong.
- §1(F): "Time is of the essence with respect to all provisions of this Contract stipulating time, deadline, or performance periods."
- §28: "The most recent changes, amendments, ... agreed to by the Parties; is evidence of the Parties' intent and agreement and shall control any Contract language conflicts. Parties shall initial and date Contract changes."

| Page sentence (now) | Replace with |
|---|---|
| "A closing date moves only if both sides of that contract agree in writing." | "The closing date in each contract is a deadline. To move it, both sides sign a change to that contract." |

Source line for the ledger: SCR Form 310 (1/2020) §1(F), §4, §28. It still rides on owner question 2 (the current form), like rows 12 to 15 and 17. Row 17's note also cites the due-diligence sentence as an example of "changes ... agreed upon in writing". That row's page wording does not use it, so nothing on the page changes there.

Nit, not blocking: the next sentence, "A rent-back on your sale lets you stay a few days if the purchase closes late.", reads as if a rent-back is yours to take. Row 17 says it needs the buyer's written agreement. Suggested: "A rent-back on your sale, if your buyer agrees to it in writing, lets you stay a few days if the purchase closes late."

## Row 24: Fannie Mae buys loans from lenders

Sources opened: Fannie Mae Selling Guide A2-1-02, Nature of the Mortgage Transaction, https://selling-guide.fanniemae.com/sel/a2-1-02/nature-mortgage-transaction; A2-1-01, Contractual Obligations for Sellers/Servicers; B3-6-06 (09/02/2026).

VERIFIED. The ledger's quote column is a paraphrase, not a quote, and B3-6-06 itself does not say Fannie Mae buys loans. A2-1-02 does, word for word: "Sellers may sell loans to Fannie Mae ... As whole loans - the seller sells the loans to Fannie Mae and receives cash proceeds in the amount of the purchase price". A2-1-01: the seller's contract with Fannie Mae "incorporates by reference the Selling Guide". The page sentence "That is the rule for a loan the lender sells to Fannie Mae, which buys home loans from lenders." says no more than that. Put the A2-1-02 quote in the row's quote column.
