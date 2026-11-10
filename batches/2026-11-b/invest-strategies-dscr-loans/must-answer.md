# Must-answer list: /invest/strategies/dscr-loans/ (batch 2026-11-b)

Researcher, 2026-11-10. Inputs:
- Search Console, the owner's two exports in the session scratchpad: `gsc/Queries.csv` and `gsc/Pages.csv` (last 28 days), `gsc2/` (Oct 27 to Nov 6 against Oct 16 to 26).
- Google search suggestions for 45 queries, read 2026-11-10: website `data/2026-11-b/invest-strategies-dscr-loans/raw/google-suggestions-2026-11-10.txt` (`pull-suggestions.sh`).
- The triage row (`reports/triage-2026-11-08.md`, "Rebuild the content") and the cannibalization report (`reports/cannibalization-2026-11-08.json`, the calculator cluster and the financing cluster).
- The live page in the working copy (`chapter3realty/invest/strategies/dscr-loans/index.html`). There is no spec; the page is hand-built HTML.
- Stories: `dscr-lender-figures`, `dscr-priced-like-conventional`, `strategy-mix`, `active-not-passive-agent`, `dscr-zillow-links`, `llc-practice`, `builder-incentives-rare-investors`, `canadian-buyers-loans`, `hoa-rental-bans-filtered`, `insurance-quote-before-offer`, `property-tax-rental`.

"People also ask" is not reachable from this session (no browser on google.com). The suggestion lists stand in for it.

## What Search Console says

The page: 0 clicks from 48 showings in 28 days, average position 44.1. In the 11-day comparison it fell from 21 showings to 19 and from position 24.7 to 54.8.

| Query | Shown, 28 days | Position | Shown, Oct 27 to Nov 6 / Oct 16 to 26 |
|---|---|---|---|
| dscr loan south carolina | 12 | 69 | 7 / 1 |
| condotel dscr loans | 3 | 20.3 | 2 / 0 |
| dscr loans south carolina | 2 | 51 | 1 / 0 |
| south carolina dscr loan | 2 | 75.5 | 1 / 0 |

The site is also shown for nearby loan words it should not chase here: "condotel loans" (17, position 38.7, owned by /invest/condotel-financing/), "myrtle beach investment property" (15, owned by /invest/), "south carolina apartment loan" (13). Google ranks the page for the state, not the city. The page never says "South Carolina" in a heading.

## What Google suggests

- The state: "dscr loan south carolina requirements", "dscr loan rates south carolina", "dscr loans myrtle beach", "dscr loan charleston sc", "dscr loan greenville sc", "dscr loan columbia sc", "dscr lenders south carolina".
- The meaning: "dscr loan meaning", "what is dscr loan", "dscr loans explained", "is a dscr loan considered conventional", "is a dscr loan a hard money loan", "is a dscr loan non qm", "is a dscr loan a good idea".
- The math: "how to calculate dscr ratio", "how to calculate dscr for rental property", "how to calculate dscr ratio with example", "how do you calculate dscr on a loan", "dscr examples", "dscr loan calculator" (owned by /invest/long-term-rental/).
- The number: "what is a good dscr for rental property", "dscr 1.25 minimum", "dscr of 1.0 meaning", "dscr below 1.0", "dscr less than 1 means", "no ratio dscr loan meaning".
- The money down: "dscr loan down payment requirements", "dscr loan down payment percentage", "dscr loan no down payment", "dscr loan 10 down payment".
- Credit: "dscr loan credit score requirements", "dscr loan minimum credit score", "dscr loan 620 credit score", "dscr loan 600 credit score".
- Short-term rentals: "dscr loan for airbnb property", "can you get a dscr loan on a short term rental", "loans for short term rentals".
- Condos: "dscr loan for condotel", "dscr loan non warrantable condo", "what lenders do non warrantable condos".
- LLC: "dscr loan requirements for llc", "dscr loan in llc name", "dscr loan for new llc".
- Who qualifies: "can you get a dscr loan as a first time home buyer", "dscr loan first time investor", "can you get a dscr loan on a primary residence", "dscr loan for canadians", "dscr loan canada requirements".
- Terms: "does dscr loan have prepayment penalty", "dscr loan no prepayment penalty", "dscr loan reserve requirements", "do dscr loans require an appraisal", "do dscr loans require tax returns", "dscr loan cash out refinance".
- Versus: "dscr vs conventional loan for investment property", "dscr loan vs conventional rates", "dscr loan pros and cons".

"dscr loan rates" is suggested under almost every query. The page answers it in words only: no rate, ever. The owner's own figure is qualitative (row 27).

## The reader

An investor, often from another state, who wants a Grand Strand rental and does not want to show tax returns, or already owns several rentals. Some are self-employed. Some are Canadians (row 31). They have heard "DSCR loan" from a podcast or a lender. They know it "qualifies on the rent". They do not know which rent the lender counts (the appraiser's, not the listing's), that the HOA fee and a 6 percent property tax sit inside the ratio, that a nightly rental is counted at 75 or 80 percent, or that some lenders take no nightly income on a purchase at all. They fear finding the perfect beach condo and learning after the appraisal that it will not qualify.

**Their decision:** can this kind of home, here, carry a DSCR loan, and which kind should I shop for? Then: what do I bring to the table.

Why they type it:
- "dscr loan south carolina": they want to know whether the state changes anything and who lends here. Answer: nothing in state law is special to DSCR loans; the local numbers are what change the answer (6 percent tax, the dues, the nightly-rental rules).
- "how to calculate dscr for rental property": they have a listing open and want to test it. Give the formula, then a worked local example, then send them to the analyzer.
- "what is a good dscr" and "dscr below 1": they ran a number and want to know if it passes.
- "dscr loan for airbnb property" and "dscr loan for condotel": the beach-condo buyer, the most common reader here, and the one most likely to be surprised.
- "dscr loan down payment" and "credit score": what to bring.

## Ranked must-answers

1. **What is a DSCR loan, and does it work in South Carolina?** A loan that qualifies on the property's rent, not your income. Yes; the state has no rule of its own for it (rows 1 to 4).
2. **How do you calculate DSCR on a rental here?** Rent the lender counts divided by principal and interest, tax, insurance and HOA dues. Formula plus one worked Grand Strand example, with the loan's part as "your lender's quote" (rows 1, 2, 11 to 19).
3. **What DSCR do lenders want?** 1.00 to qualify at most programs, 1.15 to 1.25 for some cases; our target 1.25; our affiliated lender's floor 0.75 (rows 5 to 7, 26).
4. **Which Grand Strand homes pass, and which fail before the loan?** The local finding: how much of the rent the tax, insurance and dues use, house against condo against oceanfront nightly rental (rows 16 to 21). Nobody else prints this.
5. **Can you use Airbnb income for a DSCR loan here?** Yes at some lenders, counted at 75 to 80 percent; some take it on a refinance only; the HOA and city rules must allow it (rows 8 to 10, 22 to 25).
6. **Can you get a DSCR loan on a condotel or non-warrantable condo?** Many programs say no; a few do. One line and the link to /invest/condotel-financing/ (rows 28 to 30).
7. **How much down and what credit score?** BrickWood's range, attributed, on this page only (row 26), and the published floors (row 7).
8. **Can it close in an LLC? First-time investor? Canadian?** Short answers with links (rows 31 to 34).
9. **Prepayment penalty, reserves, appraisal, rates against a conventional loan.** FAQ, in words (rows 27, 35 to 37).

## Deciding fact

**Lenders define DSCR as the counted rent divided by PITIA, and PITIA includes the property tax, the insurance and the association dues** (rows 1 and 2). Checked first: three published DSCR program sheets (2025 and 2026) and Fannie Mae's definition of PITIA. Without it the local section has nothing to stand on. With it, the Grand Strand's 6 percent tax on rentals and its condo dues are inside the ratio, and the page can show which homes pass before the loan is even counted.

## What siblings already own (do not take)

| Search | Owner | This page |
|---|---|---|
| "DSCR calculator", "rental property calculator Myrtle Beach" | /invest/long-term-rental/ (the analyzer) | Keep "How to calculate DSCR" as a formula and a worked example. One line and a link to the analyzer. No calculator of its own. Drop "DSCR calculator" from any keyword. |
| "how to analyze a rental deal", "1 percent rule" | /invest/run-the-numbers/ | Do not repeat its cap-rate or 1 percent tests. Its three worked homes are reused as inputs only, and the ratio view is new. |
| "cap rate by area", "rental returns" | /invest/rental-returns/ | No cap rates. |
| "how to finance a second rental", the 10-property limit, reserves for other properties | /invest/financing-multiple-rentals/ | One FAQ line on many properties and a link. |
| "condotel financing", "non-warrantable condo loans", "warrantable vs non-warrantable" | /invest/condotel-financing/ (non-warrantable-condos is being merged into it) | One short section: many DSCR programs exclude these buildings; link. Keep the query "condotel dscr loans" in the FAQ only. |
| "how much do Airbnbs make in Myrtle Beach" | /invest/airbnb-income/ | Reuse two worked condos as inputs; do not print the town income tables. Link. |
| "nightly vs yearly rental" | /invest/str-vs-ltr/ | Link once. |
| "rental in an LLC" | /invest/llc/ (keeps "DSCR loan LLC" as a short section that links here) | One FAQ answer and a link. |
| "Myrtle Beach rent prices" | /invest/rent-prices/ | Use its HUD figures as inputs; link. |
| "can you Airbnb in Myrtle Beach" | /invest/str-rules/ | One line and a link. |
| "where to buy a rental" | /invest/where-to-buy/ | No area ranking. The two named places appear only as the worked cases and homes strips. |

This page owns "DSCR loan Myrtle Beach", "DSCR loan South Carolina", "how to calculate DSCR for a rental" (the formula), "what is a good DSCR", "DSCR loan for Airbnb / short-term rental" (the loan side).

## What the live page has that is worth keeping

See PLAN.md. The triage says the local section is empty. In the working copy the section has four short notes (condo tower, nightly haircut, BRRRR refinance, the analyzer) and a "We bring the deal" box. Those notes carry no local numbers, which is the real problem.
