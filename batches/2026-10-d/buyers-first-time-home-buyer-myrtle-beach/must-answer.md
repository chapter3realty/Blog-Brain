# Must-answer list: /buyers/first-time-home-buyer-myrtle-beach/

Batch 2026-10-d, Lane U. Built 2026-11-01 from:
- Google's search suggestions, pulled the same day (31 queries; raw in the website repo at `data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/raw/google-suggestions-2026-11-01.txt`, script `pull-suggestions.sh`);
- the sibling programs page's suggestions (`data/2026-10-d/buyers-programs/raw/google-suggestions-2026-11-01.txt`), for the program queries this page hands to it;
- the judge's notes on the live page (`audit/judged-2026-10-31.json`);
- the live page's own FAQ, and the questions in `stories/stories.json` that first-time buyers raise (insurance before the offer, builder incentives, condo buildings a loan will not approve, low appraisals);
- the reader's job (CRAFT 1 and 3).

"People also ask" boxes are not in the suggestion feed. The questions below that come from them are marked (PAA, from the suggestions' question forms: "what are the requirements for 1st time home buyers", "what is the tax credit for first time home buyers", "do first time home buyers get a tax credit", "how much is flood insurance in myrtle beach").

## What people type

| Group | Suggestions (verbatim) | Count |
|---|---|---|
| Programs and help | first time home buyer myrtle beach; myrtle beach first time home buyer program; first time homebuyer programs in south carolina; first time home buyer sc programs; first time home buyer programs horry county sc; horry county first time home buyer program; first time home buyer south carolina programs; first time home buyer grants south carolina; first time home buyer sc grants; first time home buyer assistance south carolina; first time home buyer programs sc no down payment; first time home buyer programs sc application; first time homebuyer down payment assistance | 13 |
| Requirements | first time home buyer south carolina requirements; first time home buyer sc requirements; first-time home buyer sc qualifications; what are the requirements for 1st time home buyers; requirements to buy a house in south carolina; what credit score do you need to buy a house in sc; what is a credit score needed to buy a house | 7 |
| Benefits, incentives, tax credit | first time home buyer south carolina benefits; first time home buyer incentives south carolina; first time home buyer credit south carolina; first time home buyer tax credit sc; what is the tax credit for first time home buyers; do first time home buyers get a tax credit | 6 |
| What homes cost here | average home price myrtle beach; average home price myrtle beach south carolina; median home price myrtle beach; average house price in myrtle beach south carolina; average home cost in myrtle beach south carolina; average home price in north myrtle beach; best place to buy a house in myrtle beach | 7 |
| The steps | steps to buying a house in south carolina; buying a house in south carolina for the first time; buying a house in myrtle beach; buy a house in myrtle beach south carolina; buying a house in south carolina from out of state; best time to buy a house in myrtle beach | 6 |
| Condo or house | buying a condo in myrtle beach; owning a condo in myrtle beach; should i buy a condo in myrtle beach; is it worth buying a condo in myrtle beach; best place to buy a condo in myrtle beach | 5 |
| Closing costs | closing costs sc; closing costs in sc for buyer; average closing costs sc; closing costs in sc for buyer calculator; closing fee sc | 5 |
| Flood | myrtle beach flood zone map; myrtle beach flood zone; myrtle beach flood zone x; flood insurance myrtle beach cost; how much is flood insurance in myrtle beach | 5 |
| Property tax for an owner | homestead exemption horry county (sc); horry county homestead exemption application; horry county homestead exemption deadline; horry county homestead exemption form | 4 |
| Loans | first time home buyer loan south carolina; fha loan limit horry county sc; first time homebuyer loan | 3 |
| Rates | first time home buyer sc interest rate | 1 |

Queries with no suggestions (searched, empty): "how much do i need to buy a house in myrtle beach", "how much money do you need to buy a house in myrtle beach", "how much income to buy a house in myrtle beach", "can i afford to live in myrtle beach", "starter homes myrtle beach", "cheapest place to buy a house in myrtle beach", "usda loan myrtle beach", "first time home buyer closing costs sc". The judge named the first one as a heading the page should carry; it stays on the list in the reader's words.

## Why they typed it

A renter in Horry County, or someone moving here, buying a first home to live in. Often a working household: the county's renters have a middle income of about $51,700 (ledger row 25). They may have been told the beach is too expensive for a first home.

What they want first: can I afford it, and how much cash do I need. What they already know: almost nothing about loans, programs, flood zones or the 4 percent tax rate. What worries them: that they need 20 percent down; that cash buyers from other states will beat them; that a condo is the only thing they can afford, and that a condo is a trap; a surprise cost after closing (flood insurance, a tax bill, an HOA assessment). What they ask next: where to look, what the steps are, who to call first.

The reason behind the top searches:
- "first time home buyer programs" and "grants": they hope someone will pay part of the cash. The answer is yes, in several ways, and most of them are not programs at all (the seller, a builder, family, an IRA). The program details belong to `/buyers/programs/`.
- "requirements": they fear they will not qualify. Most think "first-time" is a hard rule. In Horry County it mostly is not.
- "average home price": they want to know whether a house, not a condo, is within reach. A county median answers the wrong question; the price ladder by kind of home answers theirs.
- "tax credit": they heard there is one. There is a tax break, but it is the 4 percent rate, and it takes a form.
- "flood zone": they were told everything here floods.

## The list, ranked

Every item needs an answer from a verified row, or a dated owner question. Rows are in `facts.md`.

1. **How much cash do I need to buy my first home here?** Not a down payment figure: the page may not state one (PLAYBOOK A17, every `/buyers/` page). The answer is the ways the cash comes down: no down payment on VA and USDA loans (rows 14, 15, 16), the seller or builder paying closing costs (rows 12, 14, 17), SC Housing's $10,000 (row 18), gifts from family (row 13), an IRA (row 19). Then what the buyer does not pay (the deed fee, row 29) and that the earnest money is credited at closing (row 28).
2. **What does a first home cost here, and what do I get for the money?** The price ladder by kind of home (rows 1 to 4) and what is for sale now at or under $300,000 (rows 5, 6). New houses versus resales (row 3).
3. **Where are the houses I can afford?** Where houses and townhouses under $300,000 sold, by ZIP area (row 7), and where they are listed now (row 8). Link to `/buyers/affordable-places-to-live/` for the neighborhoods.
4. **Condo or house for a first home?** Price (rows 1, 5, 6), the loan approval of the building (rows 21, 22, 23), flood zone share (row 9), who else is buying (row 24), and the HOA fee and assessments (link to `/hoa/special-assessments/`).
5. **Do I qualify? (requirements, credit score, "first-time")** First-time means different things to different programs (rows 10, 19). FHA's credit score floors (row 11). SC Housing's 640 (row 18). Loan limits far above prices here (rows 26, 27). Income compared with SC Housing's limit (rows 18, 25).
6. **What will it cost me each year besides the loan?** Property tax at 4 percent against 6 percent, worked for a typical starter house (rows 31, 32, 33). Insurance: a quote before the offer (row 34); flood insurance required in the high-risk zone, and few starter houses are in it (rows 9, 35); the wind pool line (row 36). One household's utility bills (row 37). Never a loan payment.
7. **Is there a first-time buyer tax credit?** SC Housing's tax credit certificate has ended (row 20). The tax break an owner gets here is the 4 percent rate (rows 31 to 33), which needs an application (row 32). The IRA rule (row 19). The homestead exemption is the 65-and-over break (row 41).
8. **What are the steps, and how long?** Numbered steps (rows 11, 18, 28, 30, 32, 34, 38, 39, 40). Who runs the closing (row 30). Move in within 60 days on FHA (row 11).
9. **Will out-of-state cash buyers beat me?** For starter houses, mostly not: about 1 in 7 buyers of a house or townhouse under $300,000 had an out-of-state tax bill, against about half for condos (row 24). The live page's "large share ... paying cash from out of state" has no source and goes.
10. **Flood: am I in a flood zone, and what does flood insurance cost?** The rule (row 35) and the share (row 9). The cost depends on the house; the page does not give an average (Not verified). Link to `/buyers/coastal-insurance/`.
11. **What can go wrong?** A condo building the loan will not approve (rows 21 to 23), a low appraisal (row 38), the 6 percent tax bill when the form is not filed (rows 31 to 33), a termite report (row 39).
12. **Who to call first.** Our agents; our preferred lender for the loan; an SC Housing approved lender when SC Housing fits (row 40, `/buyers/programs/`). One offer box, top and bottom.

Words readers use, to say once in plain context: "first-time home buyer", "programs", "grants", "down payment assistance", "requirements", "closing costs", "homestead exemption" (readers use it for the 4 percent rate; in South Carolina the homestead exemption is the separate one for owners 65 and over, so the page says so in one sentence and links `/buyers/property-taxes/`), "flood zone X", "FHA", "VA", "USDA", "starter home", "condo".

## Handed to sibling pages (one line and a link here)

- Every SC Housing program fact: `/buyers/programs/` (its ledger rows 1 to 19).
- The closing cost table and the calculator: `/buyers/closing-costs/`.
- The 4 and 6 percent tax math in every town: `/buyers/property-taxes/` (registry `rental-vs-residence-tax`). This page gives one worked example, for the starter house, from the same levy.
- Coastal and wind insurance: `/buyers/coastal-insurance/` (registry `wind-pool-line`).
- Neighborhoods by price: `/buyers/affordable-places-to-live/`.
- VA: `/buyers/va-loans/`.
- New construction: `/buyers/new-construction/` (rebuilt in this batch).
