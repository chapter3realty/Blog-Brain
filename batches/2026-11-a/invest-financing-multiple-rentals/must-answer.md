# Must-answer list: /invest/financing-multiple-rentals/

Batch 2026-11-a, Lane U. Built 2026-11-04 from Google search suggestions (36 queries, saved in the website copy at `data/2026-11-a/invest-financing-multiple-rentals/raw/google-suggestions.txt`), the judge's notes in `audit/judged-2026-10-31.json`, the owner's round 4 instruction for this page (website `research/invest-next/owner-answers-batch4.md`, line 308), and the stories the owner gave for it (`stories/stories.json`: `reserve-story`, `second-rental-paperwork`, `equity-for-next-rental`). "People also ask" could not be read (Google blocks the results page to scripts); the suggestion lists carry the same questions in short form.

## Who searched this, and why

An owner of one rental, or of a home they plan to rent out, wants the next one. Often they live out of state. They know their first loan. They do not know what changes on the second: what the lender counts, how much cash it wants left in the bank, whether the equity in the first house can pay for the second, and what the tax does here. They worry that the second house will turn one good rental into two bad ones. Next they ask: "would my numbers work?" That is the offer.

What this reader would pay an expert to tell them:
- How much cash the first house can give them for the second, in dollars, for a house bought when they bought theirs.
- What the lender will count of the new rent, and what cash it wants them to keep.
- How many loans they can stack before the rules change.
- What the second house costs them if both houses sit empty.
- How other people here do it (are they the only one?).

The owner's own brief for the page (round 4, 2026-09-07): "Talk about common mistakes people make buying a second rental have our story in there talk about 0 dollar down opportunities when you own multiple rentals". The "0 dollar down" idea stays qualitative: no "$0 down", no "nothing down", no LTV percentage (story limits, `equity-for-next-rental`; build.js Reg Z checks).

## What the suggestions show (ranked by how many suggestions point to each group)

| Group | Suggestions | What the reader typed |
|---|---|---|
| A. How to buy the second one | 20+ | "buying a second investment property", "how to buy another rental property", "should i buy a second rental property", "buy second property rent out first", "how do people buy so many rental properties", "how to buy multiple rental properties" |
| B. Equity from the first rental | 18 | "using equity in rental property to buy another", "cash out refinance rental property / investment property fannie mae", "heloc on rental property / investment property", "how to use one rental property to buy another" |
| C. Reserves | 12 | "reserves for investment property fannie mae", "reserves required for investment property freddie mac", "fannie mae reserve requirements for multiple financed properties", "how much reserves for investment property", "dscr loan reserve requirements" |
| D. Rental income and qualifying | 12 | "can i use future / projected / potential rental income to qualify", "what percentage of rental income can be used for mortgage", "can you use short term rental income to qualify for a mortgage" |
| E. How many loans | 10 | "how many rental properties can you finance", "fannie mae maximum number of financed properties", "how many mortgages can you have for rental property" |
| F. Other loan kinds | 15 | "dscr loan requirements", "portfolio loan vs conventional", "portfolio loans for rental properties", "blanket mortgage" |
| G. Second home or investment | 10 | "second home vs investment property", "... fannie mae", "can i rent my second home", "buying a second home as a rental property" |
| H. No money down | 9 | "buy rental property with no money down", "can you buy investment property with no money down" |
| I. Tax on a rental here | 8 | "south carolina rental property tax rate", "horry county rental property tax", "south carolina investment property tax calculator" |
| J. Is it worth it / how many | 12 | "is it worth buying a second investment property", "how many rental properties do i need to retire" |
| K. Local | 10 | "investment property myrtle beach", "rental property myrtle beach sc", "buying investment property in myrtle beach", "is myrtle beach a good place to invest in real estate" |

"Down payment" suggestions ("2nd investment property down payment") are real demand, but this page may not state a down payment percentage (not a DOWN_PAYMENT_OK page). It answers in words and links /invest/strategies/dscr-loans/, which states the preferred lender's figures with attribution.

## The must-answer list, in order

1. **Can I buy a second rental, and where does the money come from? The answer in two sentences.** From equity in the first house (a cash-out refinance or a line of credit) or from savings; the lender then wants the new rent to carry the new house and cash left over. (Groups A, B, H.)
2. **How much cash can my first rental give me?** In dollars, on a real local case: a typical Myrtle Beach-area house bought in 2019 against one bought in 2022, from Zillow's value index; the largest new loan on a rental, in dollars; the 12-month and 6-month timing rules. A calculator: value now and what you owe, returns the cash before closing costs. (Group B; judge idea 1.)
3. **What does the lender count of the rent?** Three quarters of a long-term lease; half of a short-term rental's market rent, and only against its own cost; the 12-month landlord rule. Worked on HUD's rent for a 3-bedroom in Carolina Forest. (Group D.)
4. **How much cash must I keep (reserves)?** The rule in one line, the 2 / 4 / 6 percent tiers by number of financed homes, and one worked figure for a second rental here. That the lender does not take it. (Group C; judge idea 3.)
5. **The worst case as a number.** Two houses empty for three months: tax at 6 percent, insurance and dues as named lines, in dollars; the loan payments as the reader's own line. Then the owner's story, told once. (Judge ideas 2 and 5; story `reserve-story`.)
6. **How many rentals can I finance?** Ten on the standard path, what counts, what does not (a loan in an LLC you are not personally on), and the other loans past it (DSCR, portfolio). A comparison table: standard loan against a DSCR loan. (Groups E, F; judge idea 3.)
7. **What the second house's tax will be here.** The 6 percent rate, about 3.3 times an owner-occupant's bill outside city limits, and the reset after a sale; the dollar figure on the example house. (Group I; the judge's one local fact, made a number.)
8. **Are other people here doing this?** Our counts from county records: how many people and companies bought two or more homes in the last 12 months, and how many own two or more homes taxed as rentals or second homes. What they bought (price, condo or house). (Group J, K; judge idea 4.)
9. **The three mistakes on a second rental,** each said once, with what we do about it: a different document list, no plan for the worst case, spending the reserve. (Owner's brief; stories.)
10. **Second home or investment property?** A second home may not be rental property; its rent cannot help you qualify. (Group G; asked by beach buyers who plan to rent part of the year.)
11. **Can I rent out my current home and buy another?** The departing-residence rule (rent counts only against its own cost; six months of extra reserves for a new landlord) and the end of the 4 percent tax rate. (Suggestion "buy second property rent out first".)
12. **Can the next one be in an LLC?** Not on the standard loan (a person must be the borrower); yes on a DSCR loan. Link /invest/llc/ and /invest/strategies/dscr-loans/. (Group F.)
13. **What we do next.** We run the next house with both loans on it before you offer, and put you with a loan officer at our preferred lender. (The page's offer, said once.)

## Words readers use, to use once in plain context

"second investment property", "cash-out refinance", "HELOC" (home equity line of credit), "reserves", "financed properties", "DSCR loan", "portfolio loan", "rental income", "second home vs investment property".

## Owner questions (only what nothing else answers)

See PLAN.md, "Questions only the brokerage can answer". None blocks the draft.
