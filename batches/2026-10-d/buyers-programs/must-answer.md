# Must-answer list: /buyers/programs/

Built 2026-11-01 from Google's search suggestions (pulled the same day, raw in the website repo at `data/2026-10-d/buyers-programs/raw/google-suggestions-2026-11-01.txt`), the judge's notes on the live page (`audit/judged-2026-10-31.json`), the old page's own FAQ, and the reader's job (a "know if a rule applies" and "decide" page, CRAFT 3).

## What people type

Suggestions, grouped. Counts are how many suggestions point at each group.

| Group | Suggestions (verbatim) | Count |
|---|---|---|
| Income limits | sc housing down payment assistance income limits; sc housing income limits 2026; sc housing income limits 2025; sc state housing income limits; sc housing dpa income limits; sc housing homebuyer program income limits; sc housing authority income limits | 7 |
| What it is and how much | sc housing dpa amount; how much does down payment assistance cover; how much can you get with down payment assistance; what is down payment assistance; sc housing forgivable down payment assistance; sc housing forgivable loan; can housing grant be used for down payment; south carolina down payment grants | 8 |
| Requirements | sc housing down payment assistance requirements; sc housing homebuyer program requirements; sc first time home buyer requirements; sc first time home buyer qualifications; sc housing minimum credit score; sc housing credit score; sc housing guidelines; sc housing dpa guidelines; palmetto home advantage program requirements | 9 |
| Local programs | horry county down payment assistance; horry county first time home buyer program; first time home buyer programs horry county sc; myrtle beach first time home buyer program; myrtle beach housing assistance | 5 |
| The programs by name | sc housing homebuyer program bond; palmetto home advantage (program, dpa, mortgage, loan, reddit); palmetto heroes program 2027; sc housing first time homebuyer program; sc housing homebuyer program with dpa | 9 |
| How to apply | sc housing homebuyer program application; first time home buyer programs sc application; sc housing homebuyer education course; sc housing homebuyer program guide and manual | 4 |
| No money down | first time home buyer programs sc no down payment; south carolina fha down payment assistance | 2 |
| Rates | sc housing homebuyer program interest rates; sc housing rates | 2 |

"Myrtle Beach housing authority" (application, waiting list, section 8) is a different reader, a renter looking for rental help. One FAQ line at most.

## Why they typed it

The searcher is a renter in Horry County, or someone moving here, who can afford the monthly cost of a house but not the cash to close. They want to know:
- whether they qualify, from three numbers they already know (income, credit score, home price);
- how much help they get, and what the catch is (do they pay it back, what if they sell);
- whether the homes they want count (a condo near the beach, a manufactured home, a house in Conway);
- what to do first.

Worry: that it is a scam or a trap, that it costs more later, that they earn too much, that they are not "first-time".

## The list, ranked

Every item needs an answer from a verified row, or it goes on the owner question list.

1. **How much help, and what is it?** $10,000 from SC Housing's Homebuyer Program; a second loan, forgiven after 15 years in the home. Ledger rows 2, 3.
2. **The income limits for Horry County, by household size, and the price limit.** $114,960 (1 or 2 people), $134,120 (3 or more), homes up to $450,000. Rows 4, 5.
3. **Do I have to be a first-time buyer?** No, in Horry and Georgetown counties. You must not own a home when the loan closes. Row 1.
4. **The catch: do I pay it back?** Not if you live there 15 years. Sell, refinance or move out sooner and the full $10,000 is repaid. Rows 3, 11.
5. **What else do I need?** Credit score 640, a homebuyer course, an SC Housing approved lender, a home you will live in, no cosigner. Rows 6 to 10, 12.
6. **Which homes count?** Price cap; houses, townhomes, approved condos, modular; not manufactured homes on the Homebuyer Program; 5 acres at most. Rows 8, 28 to 31.
7. **The deciding local fact: can I find a home under the limit, and where?** Our count of homes for sale under $450,000, by town; the condo approval problem; the USDA area. Rows 28 to 31.
8. **Is there anything just for Horry County or Myrtle Beach?** No county program pays buyers directly. Habitat for Humanity of Horry County, and bank grants from the Federal Home Loan Bank of Atlanta. Rows 20, 24, 25.
9. **The other SC Housing programs, and which one fits me.** Palmetto Home Advantage (repeat buyers, higher incomes, no price cap), County First, Families with Disabilities, Palmetto Heroes (closed for 2026), Made It Home (no homes here), the tax credit certificate (ended). Rows 13 to 19.
10. **No money down?** USDA and VA loans need no down payment; where USDA applies in Horry County. Rows 31, 32.
11. **Do I earn too much?** Most renters here earn under the limit. Rows 26, 27.
12. **How do I apply, in order?** Steps from the rows: lender, course, contract, reservation, closing. Rows 7, 12, 21.
13. **What are the rates?** We do not state rates. SC Housing posts them daily to its lenders; the lender quotes yours. (No row; the answer is the rule.)
14. **Is it a grant?** No. SC Housing's own guide says the Palmetto Home Advantage help "is not a grant"; the Homebuyer Program help is a second mortgage. Rows 2, 13.

## Words readers use, to say once in plain context

"down payment assistance (DPA)", "forgivable", "second mortgage", "income limits", "first-time homebuyer", "bond program", "Palmetto Home Advantage", "Palmetto Heroes", "homebuyer education course", "approved lender", "grant".

## Added by the judge (every one must be solved)

- No interest rate, no "0%", no "no monthly payments", no payment amount anywhere, including tiles and schema.
- The income limit and price limit for Horry County, dated by the build, in one table.
- The meta description promises only what the page gives.
- Re-check Horry County's targeted status against the current list (done: row 1, the 2026 training guide and the June 2026 limits sheet).
- No "we run the numbers both ways" or any line that reads as financing work.
- FAQPage and BreadcrumbList schema, question headings, more than two FAQ answers.
- No agency wording copied ("assists low-to-moderate income families").
- Fix "An Chapter3 agent".
- The judge's drawing idea ("forgivable assistance falls to zero over the 15 years") is wrong for this program: the full $10,000 stays owed until the 15 years are up (row 3). The drawing must show that instead.
