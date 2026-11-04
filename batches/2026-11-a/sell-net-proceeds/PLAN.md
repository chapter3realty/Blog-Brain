# Plan: /sell/net-proceeds/ (batch 2026-11-a, Lane U)

Researcher, 2026-11-04. Inputs: `must-answer.md`, `facts.md` (36 rows, all awaiting the verifier), the judge's notes in `audit/judged-2026-10-31.json`, and the live page. Spec to write: `specs/net-proceeds.js` (none exists; the live page is hand-built HTML). Data: `<web2>/data/2026-11-a/sell-net-proceeds/findings.json` (built by `build_findings.py`; README lists every input).

## The reader and their job

A Horry County owner who is about to sell, or has an offer in hand, and wants the number that lands in the bank. They know their price roughly and what they owe roughly. They do not know that South Carolina charges deed stamps, that an attorney supervises every closing, that taxes here are paid after the year, or that the buyer pays the title insurance. Many own a condo or a second home and live in another state. They fear a surprise at the closing table.

**Job, in one verb: know the total** (what I keep), then **get my own number**. Kind of page: cost breakdown with a calculator (CRAFT 3; `reports/Page shapes by kind of page.md` sections 2 and 8). The table carries the page; the calculator gives the reader's own figure; a worked example in text gives answer engines a number.

## The deciding fact

Who pays what is set by the contract, and South Carolina's standard home contract (the state REALTORS' Form 310) answers it (rows 1 to 3). The seller pays deed preparation, deed stamps and recording, the payoff and its release, their share of the year's taxes, the agreed broker fee and their own attorney. **The buyer pays both title insurance policies**, which the live page and the top national results get wrong. **The HOA's charges on a sale (transfer fee, estoppel letter, document fees, capital contribution) go to whichever side is ticked, and if no box is ticked, the seller pays them.** That one line is worth hundreds of dollars on most sales here, because about 7 in 10 houses for sale list an HOA fee and every condo has one (row 26).

## Findings no other page has

1. **The HOA box defaults to the seller** (row 3), and the owner's title policy is the buyer's (row 2), read from the state contract itself. National sites print the opposite on title.
2. **Our count of price cuts, by price, in Horry County (row 34).** About 6 in 10 resale houses for sale have already cut their asking price, and about 7 in 10 under $300,000. On the middle home a 1 percent cut costs $3,500, the same as 1 percent of commission. This replaces the live page's untested "price it right" tip.
3. **Our count of home warranties (row 35).** 965 of the 1,028 houses advertising a home warranty are new construction; about 1 in 33 resale houses offers one. A home warranty is a builder's offer here, not a usual seller cost. National guides list it as one.
4. **The Horry County tax credit, worked on the middle home at 2026 levies (rows 16 to 20).** Closing at the end of June, a seller credits the buyer about $640 if it was their home and about $2,090 if it was a second home or rental. A long-held home's credit is smaller because its taxable value sits far below market.
5. **The out-of-state hold-back, worked on the middle condo (rows 27 to 29).** About $11,000 held back on a $215,000 condo with no gain affidavit; about $2,600 with the affidavit and a $50,000 gain. About 6 in 10 Horry condo owners get their tax bill outside South Carolina.
6. **A hook (row 12, optional, one sentence):** Horry County home sellers paid about $18 million in deed stamps in a year.

## What the live page has worth keeping

- **The calculator** (price, payoff, commission, costs, credits, HOA toggle, out-of-state toggle). Keep it, rebuilt: new inputs below, defaults that match the worked example, no box pre-filled with an unsourced dollar figure.
- **Verified facts it states:** deed stamps $1.85 per $500, the seller's (row 8); $1.30 state and $0.55 county (row 8); an attorney at every closing (row 9, safe wording); commission negotiable (row 15); the payoff comes out of the same check (row 1).
- **The net sheet offer** and the phone link (854.333.2135). Keep the offer; Q6 decides whether "the same day" stays.
- **The lead form and its consent text** (site component). Move it below the answer (judge).
- **Internal links:** /sell/capital-gains/ (owns the tax detail and withholding examples), /sell/home-value/ (pricing), /sell/fsbo/, /buyers/closing-costs/ (owns deed stamps and the buyer side), /invest/strategies/, /sell/. Add /sell/out-of-state-buyers/, /hoa/estoppel-and-transfer-fees/ (owns the estoppel detail), /hoa/special-assessments/, /hoa/documents/, /buyers/property-taxes/ (the tax calculator), /sell/rental-property/.
- **Headline:** `data/headlines.json` has no /sell/net-proceeds/ entry. Nothing the owner liked to keep.

## What must go (the judge's problems, each solved)

| Judge's problem | Fix in the new page |
|---|---|
| No typical total in one sentence | First two sentences give it on the middle $350,000 home (row 14) |
| Lead form with a long consent paragraph above the answer | Slim offer bar under the short answer; the form moves to the end band |
| Deed stamp fact said four times; "Get my exact net sheet" four times | Deed stamps once in the table, once in the tier table's column, once in the FAQ answer with the number; each offer uses its own words |
| No local attorney, title or HOA figures; the $1,500 default uncheckable | Title moves to the buyer (row 2). Attorney fee: owner question Q1, shown as "set by the attorney" until answered; calculator box starts empty. HOA: the box rule, no state cap, and our check (rows 3, 22 to 26); a figure only if Q3 gives one |
| Owner's title policy listed as a seller cost | Corrected from Form 310 (row 2) |
| No table, no worked example, Article schema and meta fail (S2, S6), no sources line | Three HTML tables, a worked example labelled "Example", Article + BreadcrumbList + FAQPage, a meta description with the subject and numbers, a sources line |
| "Three ways sellers net more" is generic | Replaced by our price-cut and warranty counts and the buyer-credit limits (rows 33 to 35) |
| Ideas: tier table; tax proration example; who-pays table from the state contract and 12-24; price-cut data by band | All four are in. The CRM "seller concessions on recent sales" idea is MLS sold data, which public pages may not show; left out |

## Title, H1, description

- **Title (58 characters):** `Seller Net Proceeds Calculator: SC Costs to Sell | Chapter3`. Carries "seller net proceeds calculator" (8 suggestion lists) and "cost to sell ... SC".
- **H1:** "What you keep when you sell a house in Myrtle Beach, line by line."
- **Hero sub-header (no we, our, us):** "On the middle Horry County home, the costs set by law come to $1,320. The commission and the payoff are the big lines."
- **Meta description:** "Seller net proceeds in South Carolina: deed stamps $1.85 per $500, who pays title and HOA fees, the Horry County tax credit, and a calculator."

## Sections in order, and what each proves

1. **Hero.** H1, byline, the sub-header, a key-facts row of three chips: "$1,295 deed stamps on $350,000" (row 8), "$3,500 per 1% of commission" (row 14), "Buyer pays title insurance" (row 2).
2. **How much does it cost to sell a house in Myrtle Beach?** (question heading, first screen). Two sentences: the $1,320 fixed by law on the middle $350,000 home; each 1 percent of commission $3,500; with a 5 percent commission (example) about $18,800 plus the attorney's fee; the payoff comes out of the same check. Slim offer bar: "Have us build your net sheet on your address."
3. **Your net sheet, line by line (worked example).** HTML table, labelled "Example: a $350,000 home with a $175,000 payoff". Columns: Line / Amount / Who sets it. Rows: sale price; commission at 5 percent (example; negotiable) $17,500; deed stamps $1,295 (state law); deed recording $15 and mortgage release $10 (county fee); seller's attorney and deed preparation (set by the attorney, Q1); HOA charges if any (the contract box); tax credit to the buyer, closing end of June, $640 (the calendar); mortgage payoff $175,000 (your lender); **you keep** (total row). Proves the total and who pays. Facts 1, 8, 11, 14, 19, 21. The $175,000 payoff is an example input, not a fact; label it.
4. **The calculator.** Right under the table, defaults equal to the example so the two agree. Inputs: price, payoff, commission % (starts 5, labelled "example; change it"), seller's attorney (empty, labelled), HOA charges (empty), credit to the buyer, closing month, "This was my home / second home or rental", this year's tax bill (optional; if empty, the page's model), "I live outside South Carolina" with "I will sign the gain affidavit" and a gain box. Output: itemized lines, the total costs, the tax credit, the hold-back estimate when out of state, and "you keep". One sentence under the result says what it means. No field id or label with "rate", "APR" or "down" (claims.json inputDefaults). Check against three hand-worked cases (PLAYBOOK A29b): (a) the example; (b) $266,000, payoff $0, 6 percent, second home, end of September; (c) $215,000 condo, out of state, no affidavit.
5. **Who pays what when you sell a house in South Carolina?** HTML table from Form 310 (cards on a phone): "The seller pays" / "The buyer pays" / "The contract box decides (seller if blank)". One sentence that it is the state REALTORS' standard contract and the parties can change any line (row 7). Answers "who pays title insurance in south carolina" and "who pays deed stamps in sc" in table rows answer engines can lift. Facts 1 to 7, 8.
6. **What does it cost to sell at different prices?** Tier table from findings.json: a quarter sold under $266,000 / the middle $350,000 / a quarter over $500,000 / the middle condo $215,000. Columns: deed stamps, fixed costs, each 1 percent of commission, total with 5 percent (example). Proves the reader can find their own row without typing. Facts 13, 14.
7. **Mid offer:** "Want the real numbers on your home? Send the address and what you owe. We build the net sheet." Button: "Have us build my net sheet".
8. **Why is my mortgage payoff more than my balance?** Interest to the payoff day, unpaid fees, a penalty on some loans; the statement within 7 business days; the payoff is paid at closing from the sale, a seller's cost on the contract. No rate, no payment. Facts 1, 21.
9. **Who pays the property taxes when you sell in Horry County?** The rule (taxes paid after the year; split as of closing). Chart A from findings.json "proration_middle_house": grouped bars, end of March / June / September, "your home" vs "second home or rental" ($317/$1,041; $638/$2,093; $962/$3,157). Caption names the house and levy. One line: a home owned a long time usually has a lower bill, so a smaller credit (row 20). Link /buyers/property-taxes/. Facts 6, 16 to 20.
10. **Mid offer:** "Have us work out the tax credit from your own bill."
11. **What HOA fees does a seller pay at closing?** The box (default seller); no state cap; a fee to the association itself is legal (27-1-70); a condo's unpaid dues come out of the sale price first and the buyer gets a statement; we look for unpaid dues before closing (story `hoa-lien-flip`); about 3 in 10 houses for sale list no HOA fee, every condo has one. Special assessments: the form's two options, link /hoa/special-assessments/. Link /hoa/estoppel-and-transfer-fees/. Facts 3, 6, 22 to 26.
12. **I live outside South Carolina. Will the state hold back part of my money?** Rule in two sentences; worked card on the middle $215,000 condo (about $11,000 without the affidavit, about $2,600 with it on a $50,000 gain); the main-home exclusion means no hold-back; credit on the SC return. One line: about 6 in 10 condo owners here get their tax bill outside the state. Links /sell/capital-gains/ (owns the detail), /sell/out-of-state-buyers/. Facts 27 to 29.
13. **Mid offer:** "Ask us what the hold-back would be on your sale." (We work out the arithmetic; the attorney files.)
14. **How do sellers here net more?** Chart B from findings.json "listings": bars, share of resale houses for sale with a price cut, by price band (69 / 61 / 57 / 55 percent), with the condo figure in the caption. Then: a 1 percent cut on $350,000 is $3,500, the same as 1 percent of commission, so the price is where the money is (link /sell/home-value/ for pricing). Then: home warranties are a builder's offer here (965 of 1,028), so most resale sellers are not asked for one; the form makes it optional. Then: a credit to the buyer is money from your side; FHA allows up to 6 percent, VA concessions up to 4 percent of value beyond closing costs. Facts 5, 33 to 35.
15. **Do you pay tax on the money from selling your house?** Three short points: the $250,000 / $500,000 exclusion; selling costs lower the gain; the closing office reports most sales on a 1099-S unless the main-home certification applies. Link /sell/capital-gains/. Facts 30 to 32.
16. **FAQ (open text, 6 to 7 questions):** What is a seller net sheet? Who pays title insurance in South Carolina? How much are deed stamps in SC? Does the seller need an attorney in South Carolina, and who picks one? (facts 9, 10) Can I sell my house before my mortgage is paid off? (fact 1: the payoff is paid at closing) Is the commission always 6 percent? (fact 15) When do I get my money? (only if Q5 is answered; else cut) and the wire-fraud line (fact 36).
17. **End offer band** with the lead form and consent text, then the sources line: Form 310; SC Code 12-24, 8-21-310, 12-45-70, 12-43-220, 27-1-70, 27-31-200 and -220, 12-8-580; CFPB; IRS Pub 523, 1099-S instructions, Topic 701; HUD 4000.1; VA; Horry County deeds and parcels (our counts); Chapter3 CRM active listings counted in aggregate.

Order check (CRAFT 3): the answer and the table first, good news (the fixed costs are small) before the hard items (payoff, taxes, HOA, hold-back), then how to net more, then the next step. "On this page" list with short labels: Total, Net sheet, Calculator, Who pays, By price, Payoff, Taxes, HOA, Out of state, Net more, Tax on the gain, FAQ.

One fact, one value: $350,000, $1,295, $1,320, $3,500 appear in the chips, the short answer and the tables only. The 5 percent is called an example every time. Never "typical commission".

## Visuals

| # | Visual | Data | Where |
|---|---|---|---|
| 1 | Key-facts chips (glass) | rows 2, 8, 14 | Hero |
| 2 | Itemized net sheet table with a "you keep" total row | findings.json tiers[middle_house], proration, the example payoff | Section 3 |
| 3 | The calculator, result as an itemized list | the same constants as build_findings.py (rows 8, 11, 17, 18, 27) | Section 4 |
| 4 | Who-pays table, three columns, cards on a phone | rows 1 to 6 | Section 5 |
| 5 | Tier table | findings.json tiers | Section 6 |
| 6 | Chart A: tax credit by closing month, home vs second home (grouped bars, `G.bars`) | findings.json proration_middle_house | Section 9 |
| 7 | Worked hold-back card on the middle condo | findings.json withholding_middle_condo | Section 12 |
| 8 | Chart B: share of resale houses for sale with a price cut, by price band (`G.bars`) | findings.json listings.house.bands | Section 14 |

No pie chart. No map: the page is about money, not place.

**Photo (optional, one).** A cost page needs no decorative photo (CRAFT 4). One photo can carry a fact: the building where every Horry County deed is recorded and the deed stamps are paid.
- Candidate: Wikimedia Commons, "New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg", https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg, by Pollinator at English Wikipedia, CC BY-SA 3.0, 2,100 x 1,400. **Not yet viewed**: Commons answered 429 (rate limit) to the image download. The builder must look at it full size and confirm it shows the complex at 1301 Second Avenue, where the county page puts the Register of Deeds (OSB 30 limit: the county page gives the address, not the building name). Caption only what the picture shows. Credit: "Photo: Pollinator, CC BY-SA 3.0, via Wikimedia Commons."
- If it cannot be confirmed, no photo until the photo partner's shot 1 arrives.

## The photo partner's shot list

See `shot-list.md` (same content). No person as the subject; nothing readable (phone numbers, house numbers, firm names, plates).

1. **Horry County Government and Justice Center, 1301 Second Avenue, Conway.** The entrance used for the Register of Deeds, daylight, landscape plus a square crop. Why: every deed in the county is recorded here and the deed stamps are paid when it records. Section 5 or the share image.
2. **A typical resale house in Carolina Forest or Socastee,** front, from the sidewalk, no sign with a firm's name. Why: the worked example is the middle $350,000 home; this shows the kind of home it describes. Section 3, beside the table, and the share image.
3. **An oceanfront condo building in Myrtle Beach or North Myrtle Beach,** from the beach access or street, no building name readable. Why: the condo worked example (hold-back) and the HOA section. Section 12.

## Owner questions (from facts.md)

Q1 seller's attorney fee; Q2 commission example rate; Q3 HOA charges on our recent sales and who usually takes the box; Q4 which contract form our agents use; Q5 when sellers get paid; Q6 whether "free, the same day" stays. Proposed answers are in facts.md. The page can be built now with the proposed handling; none blocks the build.

## Notes for the builder

- Spec: `specs/net-proceeds.js` with the glass theme (`tools/glass.js` `G.page`, `G.bars`, `G.offer`), data read from `data/2026-11-a/sell-net-proceeds/findings.json`. Look at `specs/fix-and-flip.js` and `specs/home-value.js` for the table and chart patterns.
- Siblings: /sell/fsbo/ (same batch) uses the same $350,000, $1,295 and "$3,500 per 1 percent"; keep those values identical. /buyers/closing-costs/ owns deed stamps and the buyer side; link it, do not repeat its buyer numbers. /sell/capital-gains/ owns the withholding detail; this page gives one worked condo and links.
- Never say "the seller usually pays the HOA fees" or "the buyer pays them": say what the form's box does.
- No sentence over 28 words; no "So" opener; no "Here is"; the hero sub-header has no we, our or us; buttons to /contact/ are requests.
