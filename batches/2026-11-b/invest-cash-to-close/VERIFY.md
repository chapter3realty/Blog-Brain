# Verification: /invest/cash-to-close/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did none of this research. Prompt: `prompts/verifier.md`. Ledger: `facts.md` in this folder (status notes added at the front of each row's last cell; no claim changed). Struck list: `batches/2026-11-b/facts/invest-cash-to-close-struck.json` (10 entries). Each entry fires on its struck wording and stays quiet on its approved wording. `node tools/struck-check.test.js` prints "all controls pass". Run on the live page, the list finds 6 struck phrases (rows 11, 20, 27, 28, 30, 31), all from the September text the rewrite replaces.

## What I did

- Downloaded the HMDA 2025 Horry County purchase file again myself. Same sha256 (9733f355...d0bd), 10,096 rows. Re-ran `hmda_loan_costs.py`: output identical to `hmda-2025-loan-costs.json`. Then I recomputed every median, n and quartile in rows 2 to 6 and 23 with my own script. All match.
- Re-ran `pull_strip_counts.py` and `pull_band_fees.py` against the map API about 11:40 to 11:50 UTC. Every count and fee came out the same. I also tested how a blank fee is treated: `hoaMax=100000` returns all 498 houses, so a blank counts as zero, as the script assumes.
- Re-ran `build_example.py` on my own three pulls: `example.json` identical. I redid the arithmetic in rows 13, 24, 25 and 26 by hand.
- Opened live:
  - the CCAR September 2026 report
  - eCFR 12 CFR 1003.4, 1026.3, 1026.38, 1024.5, 1024.17, Supplement I to Part 1026 (comment 3(a)-4) and 44 CFR 61.11
  - the CFPB Closing Disclosure page and its sample form
  - SC Code 8-21-310, 12-24-20, 12-43-220, 27-30, 27-31-220 and 40-57-136
  - the Horry ROD price list, the 2026 levy, the county tax page and the county business license page with its 2024 rate schedule
  - both Clovered pages
  - Fannie Mae B3-4.1-01 and the Freddie Mac LTV table
  - the eLEND and NONI DSCR matrices
  - FloodSmart
  - the SC DOR license page and its accommodations page
  - the City of Myrtle Beach license FAQ
- Read the carried rows in DSCR, EST and OLD, and the story in `stories/stories.json`.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 1, 2, 3, 7, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 29, 32 (22; rows 22 and 23 owner only) |
| CORRECTED | 4, 5, 6, 8, 11, 20, 27, 28, 30, 31 (10) |
| STRUCK | none |

## The finding that runs through the page

Under Regulation Z, a loan to buy a rental that the owner will not stay in for more than 14 days a year is business credit. Comment 3(a)-4 says: "Credit extended to acquire ... rental property ... that is not owner-occupied is deemed to be for business purposes." The comment gives the beach house case: an owner who stays a month is owner-occupied. Three things follow:

- Business credit has no Closing Disclosure duty (1026.3(a)(1)).
- Business credit is outside RESPA, escrow rules included (1024.5(b)(2)).
- HMDA reports no loan costs for it. Of 1,505 rental purchase loans in 2025, 966 were business purpose and 215 were exempt (code 1111). Only 287, the conventional one-unit loans lenders treated as consumer credit, report costs. DSCR loans are business loans, so they are outside every cost figure on this page.

The numbers stand. The page must name its group, and must not apply the federal escrow cap to every rental loan.

## Corrections

**Rows 4, 5, 6. CORRECTED (wording).** Every value reproduces: $4,878 (n 4,157), $5,450 (n 1,298), $6,372 (n 287), a difference of $1,494; 1.59 and 0.84 percent; 2.26 percent (1.56 to 3.07), 1.32 and 1.69. But "a rental about $6,400" and "on a rental, about 2.3 percent" speak for every rental loan, and the group is under 1 in 5 of them.

Safe wording: "Of 2025 Horry County conventional purchase loans on one-unit homes that report closing costs, the middle was about $6,400 on a rental (287 loans), $5,500 on a second home and $4,900 on a home the buyer lives in. Most rental loans, 1,181 of 1,505, were business loans or exempt and report no costs [HMDA 2025]."

For row 6: "On rental loans that report costs, the middle loan costs came to about 2.3 percent of the home's value." The chart title names the group. The worked example's loan-cost line says "at the middle share for rental loans that report costs". It is a floor for a DSCR loan, not an estimate of one: the page may say a business-purpose loan is not in the figure, but must not say it costs more (no source).

Row 5: origination (1003.4(a)(18)) is CD section A, so it includes points. The row's note already says not to mention points.

**Row 8. CORRECTED.** The CFPB quotes match. But the claim says cash to close adds the down payment "with the prepaids and the escrow deposit", which puts them outside total closing costs. The CFPB sample form shows "I. TOTAL OTHER COSTS ... (E + F + G + H)" and "J. TOTAL CLOSING COSTS ... (D + I)". So J already holds F (Prepaids) and G (Initial Escrow Payment). The calculating table then adds "Down Payment/Funds from Borrower" and takes off "Deposit", "Seller Credits" and "Adjustments and Other Credits".

Safe wording: "Total closing costs already hold the prepaids and the escrow deposit, and leave out the down payment. Cash to close adds the down payment and takes off your deposit and credits [CFPB Closing Disclosure, page 3]."

**Row 11. CORRECTED (scope).** The 1024.17(c)(1)(i) and (c)(5) quotes match. But RESPA exempts "an extension of credit primarily for a business ... purpose, as defined by 12 CFR 1026.3(a)(1)" (1024.5(b)(2)), and Reg Z deems a non-owner-occupied rental purchase business credit. The eLEND DSCR matrix also lets an investor waive escrow.

Safe wording: "On a loan under federal escrow rules, the cushion is at most two months of tax and insurance. A loan to buy a rental you will not stay in is business credit, which those rules leave out, so your lender's terms set the deposit [12 CFR 1024.17(c), 1024.5(b)(2); Reg Z comment 3(a)-4]." The example's cushion lines read "up to".

**Row 20. CORRECTED (scope).** The 2, 4 and 6 percent figures match. B3-4.1-01 has two limits the claim drops:

- The extra applies "when a borrower has multiple financed properties and the subject loan is secured by a second home or investment property".
- The balances exclude "the subject property" and "the borrower's principal residence".

Safe wording: "On a rental or second-home loan, Fannie Mae adds 2 percent of what you still owe on your other financed properties (one to four in all), 4 percent (five or six) or 6 percent (seven to ten), not counting the home you live in [B3-4.1-01]."

**Row 27. CORRECTED.** 12-24-20(A) makes the fee "the liability of the grantor ... but the grantee is secondarily liable". 12-24-20(B) names "a master-in-equity deed", not every foreclosure deed. A bank selling a home it took back, or a deed in lieu, is not that case. The live page's FAQ and body both say "a foreclosure deed".

Safe wording: "The seller owes the deed recording fee, and the buyer must pay it if the seller does not. The buyer owes it on a master-in-equity deed from a court foreclosure sale, a deed from a government, or a deed from a tax-exempt retirement plan [SC Code 12-24-20]."

**Row 28. CORRECTED (scope).** FloodSmart: "There is no wait if you buy flood insurance while making, increasing, extending or renewing a mortgage", and coverage otherwise starts "30 days after your date of purchase", with four exceptions. 44 CFR 61.11(b) sets the condition: coverage starts at loan closing "provided ... the flood insurance policy is applied for and the presentment of payment of premium is made at or prior to the loan closing". These are NFIP rules. A private flood policy sets its own start.

Safe wording: "An NFIP flood policy bought with a new loan can start at closing, if it is applied for and paid at or before closing. Without a loan, an NFIP policy usually starts 30 days after purchase [FloodSmart; 44 CFR 61.11(b)]."

**Row 30. CORRECTED (carve-out).** 40-57-136(D)(1)(a) matches, but each 48 hours is "excluding Saturday, Sunday, and bank holidays". The rule covers trust funds "received by a broker-in-charge". In many Grand Strand sales the closing attorney holds the deposit instead. "Credited at closing" is the contract and the form (the CD's "Deposit" line), not this section. The section says the money is disbursed "in accordance with the contract".

Safe wording: "When the brokerage holds the earnest money, the broker-in-charge deposits a check within 48 hours of written acceptance and cash within 48 hours of receipt, not counting weekends and bank holidays [SC Code 40-57-136(D)]."

**Row 31. CORRECTED.**

- **DOR.** Both licenses are $50, and "These licenses do not expire". The accommodations page says the retail license is needed only "If you are directly booking short-term rentals". An owner who rents only through a manager or platform needs none. No accommodations license is needed if every stay is over 90 days, so the house example, a long-term rental, needs neither license.
- **County.** The 2024 schedule is still the one the county's business license page links today (Effective January 1, 2024). The class 6 row reads "$55.00 $110.00 $1.37 $2.74". But the schedule doubles every fee "for nonresidents and itinerants having no fixed principal place of business within the County". The county's page says the license covers businesses "within the unincorporated areas". So the condo inside Myrtle Beach gets the city license, not the county's. The rental-to-class-6 link and the two exemptions (a licensed local manager; one property with no local accommodations tax) rest on OLD 10.3 and 10.4, from the county code. I could not re-open the code: Municode returned 403.
- **City.** "a business license for ALL rental properties which include short-term, long-term, residential and commercial" matches.

Safe wording: cut the county dollar figures and link /invest/accommodations-tax/, which owns licenses. If the figures stay, the same sentence must say the license applies only outside city limits, doubles for an owner with no place of business in the county, and is not needed when a licensed local company manages the rental.

## Verified rows: limits the writer keeps

- **Row 1.** p. 2, YTD 2026, single-family: $362,000. p. 3, condo: $232,000.
- **Row 2.** 153 of the 10,096 are second liens. Say "purchase loans", never "purchases" or "buyers".
- **Row 3.** The reason holds: no Reg Z disclosure, so no total loan costs (1003.4(a)(17)(i)). Add the 215 exempt rows to the method note.
- **Row 7.** The loan-cost figure is borrower-paid sections A, B and C (1026.38(f)(1) to (5)).
- **Row 9.** The form letters match the sample. A business-purpose rental loan may close on a settlement statement instead. Say "if your lender gives you a Closing Disclosure", or "the same lines on your settlement statement".
- **Row 10.** Say "filing fees set by state law" ($25 mortgage, $15 deed). The county collects them; the state does not.
- **Row 12.** Keep DSCR row 12's limit: 201.0 is for most homes outside the towns.
- **Row 13.** 4 percent is for a legal residence, which keeps it if rented 72 days a year or less (12-43-220(c)). Not the page's case; do not say "any rental is 6 percent".
- **Row 14.** The source gives $81 a month and $976 a year for the top band. The ledger's $972 is $81 x 12, which the DSCR and run-the-numbers data use. I kept it so the sibling pages agree. Print "about $81 a month", or "about $970" as the siblings do. The band is coverage of $100,000 and over.
- **Rows 17, 18.** Say "show a fee" and "listings say"; print "about 100", not 97 (the count changes daily).
- **Row 19.** These are DU rules ("Fannie Mae's rule"). DU may ask more, and a manually underwritten loan follows the Eligibility Matrix (not read).
- **Rows 24 to 26.** The arithmetic holds. The totals are "before" the items the page lists, never "what you will bring". If the example is ever changed to $976, the totals still round to about $7,000, 3.0 percent, and $5,600.
- **Row 29.** The statement duty falls on the council of co-owners. No fee rule appears in Chapter 30 or 31.
- **Row 32.** No amounts, no quotation marks, and never the teller's name.

## Should not be published at all

- Rows 22 and 23 (down-payment shares), as the ledger says.
- The county license dollar figures, unless the limits in row 31 go with them.

Nothing else.
