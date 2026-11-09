# Plan: /sell/net-proceeds/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-09. Inputs: `must-answer.md`, `facts.md` (40 rows: 34 verified or corrected by the 2026-11-a verifier or a 2026-11-b sibling verifier, 4 new and awaiting a verifier, 2 not found or struck), the triage row, the cannibalization report and the live page.

## Why it is being rebuilt

Triage: "It never gives the number the title promises." The live page lists "six main costs" with no total, no percent and no local fee, puts a lead form with a long consent paragraph above the answer, and gets two facts wrong (the owner's title policy as a seller cost; the hold-back "under form I-290" on the gain). Search Console: 311 showings and 3 clicks in 28 days; "cost to sell a house in south carolina" sits at position 33 to 40, because /buyers/closing-costs/ also claims the seller's deed stamps.

A full version 1 spec was written in batch 2026-11-a and never shipped (Group 4 was stopped, `batches/2026-11-a/STOP.md`). It is extracted at `scratchpad/np-a/specs/net-proceeds.js` (from `batches/2026-11-a/sell-net-proceeds/web.patch`). **Start the new spec from it**, with its data path moved to `data/2026-11-b/sell-net-proceeds/findings.json` and the changes listed under "What changes from the 2026-11-a version" below. It was never reviewed, so it gets the full review line.

## What the live page has that is worth keeping

- The calculator idea, and its place near the top. Rebuilt with no unsourced default.
- The lead form, with its consent text word for word (site component), moved to the end band.
- The phone number 854.333.2135, and the free net sheet offer (Q6: "the same day" is dropped until confirmed).
- True facts: deed stamps $1.85 per $500 and the seller's (row 2), $1.30 state and $0.55 county (row 2), commission negotiable (row 15), the payoff comes out of the same check (row 7).
- The FAQ questions people search: "How much does it cost to sell a house in South Carolina?", "What are deed stamps in South Carolina?", "Does the seller need an attorney in South Carolina?", "What is a seller net sheet?", "Is the commission always 6 percent?". The answers are rewritten from rows.
- The links to /sell/capital-gains/, /sell/home-value/, /sell/fsbo/, /buyers/closing-costs/ and /sell/.
- The title's searched words, "Cost to Sell a House in South Carolina". The owner's data (CRAFT 7) shows a title that drops its searched words loses its showings.

## The reader and their decision

A Horry County owner about to list, or holding an offer, often for a condo or a second home, often living in another state. They know their rough price and what they owe. They do not know the state contract, the deed stamps, the attorney's role or that the county bills taxes after the year.

**Their decision:** is a sale at this price worth it, and how much cash will they have on closing day for the next home? **The job, in one verb:** know the total, then get their own number. **Kind of page:** a cost breakdown with a calculator (CRAFT 3). The itemized table carries the page. The calculator gives the reader's own figure. The worked example gives search engines a number to quote.

## The answer, in two sentences

On the middle Horry County home, about $350,000, the costs the law sets come to $1,320 with a mortgage to release, under half of 1 percent of the price at any price. The rest is what you agree: the commission, $3,500 for each 1 percent, your attorney's fee, any HOA charges and any credit to the buyer, and your loan payoff comes out of the same check.

That is the triage's "X to Y percent, most of it commission", said with what has a source. No public source gives a typical Horry County commission (row 15), so the page never prints a typical commission or a "6 to 7 percent" total (struck list, 2026-11-b entry). The national sites' 6 to 19 percent totals (S4) add repairs, staging and moving; the page does not repeat them.

## Title, H1, description, keywords

- **Title (63 characters, inside the scorer's 30 to 65):** `Cost to Sell a House in South Carolina: Net Proceeds Calculator`. It keeps the live title's searched words and adds the words the page ranks for today ("net proceeds", "calculator").
- **H1:** "What it costs to sell a house in South Carolina, and what you keep". Same promise as the title.
- **Hero sub-header (no we, our or us):** "On the middle Horry County home, about $350,000, the law sets $1,320 of the cost. The commission you agree is the big line."
- **Description:** "Cost to sell a house in South Carolina: $1,320 set by law on a $350,000 Horry County home, $3,500 per 1% of commission, who pays what, and a calculator."
- **Keywords:** cost to sell a house in South Carolina; seller closing costs SC; seller net sheet; net proceeds calculator; SC deed stamps; South Carolina transfer tax calculator (the last two added by the cannibalization fix).

## Sections in order (question headings people search)

"On this page" list, short labels: Total, Net sheet, Calculator, Who pays, Attorney, Deed stamps, HOA, Taxes, Payoff, Keep more, Tax on the gain, FAQ.

1. **Hero.** H1, byline (author "devin"), the sub-header, three key-fact chips: "$1,320 set by law on $350,000" (row 4), "$3,500 for each 1% of commission" (row 4), "The buyer pays title insurance" (row 8).

2. **How much does it cost to sell a house in South Carolina?** (first screen). The two-sentence answer above (rows 1, 4, 5, 7). Then the slim offer bar: "Have us build a net sheet on your address." The site's edge puts its homes feed under this opening (feeds.js: "Price cuts between $300,000 and $600,000"). It fits a seller: those are the homes a $350,000 seller competes with.

3. **What will I walk away with on a $350,000 home?** One HTML table, labelled "Example: a $350,000 home with a $175,000 payoff, closing at the end of June". The $175,000 payoff and the 5 percent are example inputs, labelled; never "typical". Columns: Line / Amount / Who sets it.

   | Line | Amount | Who sets it |
   |---|---|---|
   | Sale price | $350,000 | You and the buyer |
   | Commission, 5 percent in this example | $17,500 | You and your agent |
   | Deed stamps | $1,295 | State law |
   | Deed recording and mortgage release | $25 | County fee |
   | Your attorney's fee, if you hire one, and any payoff handling fee | Set by the attorney | The attorney |
   | HOA sale charges, if any | Set by the association | The contract box |
   | Tax credit to the buyer, your home | about $640 | The calendar |
   | Mortgage payoff | $175,000 | Your lender |
   | **You keep, before the attorney and any HOA charges** | **about $155,500** | |

   Rows 2 to 4, 7, 10, 13, 24 to 27. The arithmetic: 350,000 − 17,500 − 1,295 − 25 − 638 − 175,000 = 155,542. The builder computes it in the spec from findings.json, never types it.

4. **Seller net proceeds calculator.** Directly under the table. It opens with the table's numbers, so the result shows before the reader types: "You keep about $155,500 before the attorney and any HOA charges."
   - Three inputs first: sale price, what you owe, commission in percent (starts at 5, labelled "an example; type yours").
   - Then, on the same screen, not hidden: closing month, "my home" or "a second home or rental", HOA sale charges, credit to the buyer, attorney's fee (empty).
   - Output: "You keep" in large type first, then the itemized lines.
   - One line under it for a seller who lives out of state: the buyer holds back 5.21 percent of the gain with the state's affidavit, or of the amount realized without it, unless the sale is exempt, with the link to /sell/capital-gains/ (cannibalization fix; row 35). No hold-back figure in the tool.
   - No field id or label with "rate", "APR" or "down" (claims.json inputDefaults). Check three hand-worked cases (PLAYBOOK A29b): the example; $266,000, no payoff, 6 percent, second home, end of September; $215,000 condo, end of March.

5. **Who pays what when you sell a house in South Carolina?** First sentence: "On the state REALTORS' standard contract, the buyer pays both title insurance policies; the seller pays the deed stamps, the payoff and their own agent and attorney." One three-column table (cards on a phone): The seller pays / The buyer pays / The contract box decides (the seller if no box is ticked). One sentence that buyer and seller can change any line in writing (row 9). Rows 7 to 10. Link /buyers/closing-costs/ once for the buyer's side ("Buying instead? The buyer's costs, line by line"). Prints no buyer figure.

6. **How much does a closing attorney cost a seller in South Carolina?** New section; it answers "how much are legal fees to sell a house" (Search Console) and "seller attorney fees sc".
   - An attorney supervises every closing (row 11).
   - With a loan, the buyer picks the closing attorney, and that attorney works for the buyer (row 12).
   - That attorney usually prepares the closing statement and pays off your loan. They may add a reasonable payoff handling fee to your side, and you can refuse to sign a statement you do not agree with (row 13, once verified).
   - Your own attorney is a line on the contract (row 7).
   - No dollar figure until Q1 is answered (row 14).

   **Mid offer:** "Want every line filled in for your home? Send the address and what you owe. We send back a net sheet." Button: "Have us build my net sheet".

7. **How much are SC deed stamps at your price?** One sentence of the rule. Then the tier table from findings.json "tiers". Rows: a quarter of homes sold under $266,000 / the middle home, $350,000 / a quarter sold over $500,000 / the middle condo, $215,000. Columns: Deed stamps / All costs set by law / Each 1% of commission. The reader finds their row without typing. Then one sentence: by the state's formula, the deed stamps on the 13,194 home sales recorded in the county in the year to September come to about $18 million (row 16). Rows 2, 3, 5, 6.

8. **What HOA fees does a seller pay at closing?** First sentence: the association's sale charges go to the side the contract ticks, and to you if no box is ticked (row 10).
   - No South Carolina law caps them (row 17); a fee to the association itself is allowed, a third-party transfer fee recorded after February 1, 2012 is not (row 19).
   - In a condo, your unpaid dues are paid first out of the price (row 20). We look for unpaid dues before closing (row 21).
   - More than 1 in 4 houses for sale list no HOA fee; all but one condo for sale lists one (row 22).
   - Special assessments: the contract's two options, in one sentence, and the link /hoa/special-assessments/ (row 23).
   - Link /hoa/estoppel-and-transfer-fees/ for what the letter shows and when to ask. No fee range (row 18).

   **Mid offer:** "Have us find out what your HOA charges when you sell."

9. **Who pays the property taxes when you sell in Horry County?** First sentence: the county bills a year's tax after the year (row 24), so you credit the buyer for the months you owned the home. Chart A, then one line on homes with an old last deed (row 28), then the link /buyers/property-taxes/. Rows 24 to 28.

10. **Why is my mortgage payoff more than my balance?** Interest to the payoff day, unpaid fees, a penalty on some loans; the seven-business-day statement on a personal home loan, not a rental (row 29). Can I sell before the loan is paid off? Yes: the payoff comes out of the sale (row 7). No rate, no payment.

    **Mid offer:** "Have us work out the tax credit from your own tax bill."

11. **How do sellers here keep more of the price?** Each point is a number, not a tip:
    - **Price it once.** More than half of the resale homes for sale in the county have already cut their asking price, about the same at every price (row 30). On $350,000 each 1 percent cut is $3,500, the same as 1 percent of commission (row 4). Link /sell/home-value/ for pricing. The homes feed at the top shows the price-cut homes a seller competes with.
    - **The commission is yours to agree.** It is negotiable, and since August 2024 offering to pay the buyer's agent is your choice (row 15).
    - **A credit to the buyer is your money.** The contract caps it at a dollar figure, and FHA and VA set their own limits (rows 33, 34).
    - **A home warranty is rare on a resale here.** 62 of 2,188 resale houses advertise one; most that do are new homes (row 31). The standard contract has no warranty clause (row 32).

    **Offer:** "Have us price your home against what is for sale now."

12. **Do you pay tax on the money from selling your house?** Three short points: the $250,000 / $500,000 exclusion (row 36); your selling costs lower the gain (row 37); the closing office reports most sales on a 1099-S (row 38). Link /sell/capital-gains/, which owns the detail and the hold-back.

13. **FAQ** (open text, six questions, none repeating a section's answer word for word):
    - What is a seller net sheet?
    - Who pays title insurance in South Carolina? (row 8)
    - How much are deed stamps in SC? (row 2)
    - Does the seller need an attorney in South Carolina? (rows 11, 12)
    - Is the commission always 6 percent? (row 15)
    - How is the money sent at closing? (row 40, wire safety; payment timing only if Q5 is answered)

14. **End band:** the lead form with its consent text, "Know your number before you list", then the sources line:
    - SCR Form 310 (03/2026);
    - SC Code 12-24, 8-21-310, 12-45-70, 12-43-220, 27-1-70, 27-30, 27-31-200 and -220, 12-8-580;
    - SC Bar Ethics Advisory Opinion 11-06;
    - CFPB and 12 CFR 1026.36;
    - IRS Pub 523, Topic 701, the 1099-S instructions;
    - HUD 4000.1; VA; NAR;
    - Horry County deeds, parcels and 2026 levy (our counts);
    - Chapter3 active listings counted in aggregate (no MLS sold data).

Order check: the total and the table first; the good news (the fixed costs are small) before the hard lines (attorney, HOA, taxes, payoff); then how to keep more; then the next step.

**One page, one value.** $350,000, $1,320, $1,295 and $3,500 appear only in the chips, the answer, the table and the tier table. The 5 percent is "an example" every time. The tax credit is "about $640" everywhere. The same values as /sell/fsbo/ and /sell/home-value/.

## Visuals (each readable at a glance)

| # | Visual | One message | Data | Where |
|---|---|---|---|---|
| 1 | Three key-fact chips | What is fixed, what is per point, who pays title | rows 4, 8 | Hero |
| 2 | Net sheet table with a "You keep" total row | What you keep on a $350,000 sale | findings.json tiers.middle_house, proration_middle_house | Section 3 |
| 3 | Calculator: "You keep" in large type first, then the lines | Your own number | the same constants as build_findings.py | Section 4 |
| 4 | Who-pays table, three columns, cards on a phone | Who pays each line | rows 7 to 10 | Section 5 |
| 5 | Tier table, four rows, three columns | Your price's fixed costs and cost per point | findings.json tiers | Section 7 |
| 6 | Chart A: bars by closing month, two colors (your home / second home or rental), `G.bars`. Title: "The later you close, the bigger the tax credit to the buyer". Labels on the bars, in dollars | The month and the kind of home set the credit | findings.json proration_middle_house (end of March, June, September) | Section 9 |
| 7 | One stat card: "1,260 of 2,188" with "resale homes for sale have cut their price" | Pricing right is worth as much as the commission | findings.json listings.house | Section 11 |

The 2026-11-a plan's chart of price cuts by price band is dropped. Today's bands are flat (62, 56, 56, 56 percent), so a chart would say "about the same", and the stat card says it faster. No map: the page is about money, not a place. No photo: a cost page needs no decoration (CRAFT 4). The 2026-11-a courthouse photo cannot be captioned as where deeds are recorded, so it would only decorate. The photo partner's shot list in `batches/2026-11-a/sell-net-proceeds/shot-list.md` stays open for the share image.

## Homes strips

This page names no place, so it carries no glass.js `homes()` strip. The site's edge feed under the opening ("Price cuts between $300,000 and $600,000", feeds.js) is the strip, and it fits the page: those are the homes a seller near the $350,000 middle competes with. Section 11 points to it. Lead's choice, outside this page's files: the feed title could say "Your competition: homes near $350,000 that cut their price", which its filter makes true.

## Offers (each with its own words)

| Where | Headline | Button |
|---|---|---|
| Under the answer (slim bar) | Have us build a net sheet on your address. | Have us build my net sheet |
| After the attorney section | Want every line filled in for your home? | Send us my address |
| After the HOA section | Have us find out what your HOA charges when you sell. | Ask us about my HOA |
| After the payoff section | Have us work out the tax credit from your own tax bill. | Have us check my tax bill |
| After "keep more" | Have us price your home against what is for sale now. | Get my home's price (/sell/home-value/) |
| End band | Know your number before you list. | The lead form |

That is one offer after about every second section (score rule H5). Buttons to /contact/ are requests. No lender offer: the page is about selling. If the end band names financing for the next home, it uses "our affiliated lender, BrickWood Mortgage, a separate company" and the AfBA link, and states no rate or payment.

## What changes from the 2026-11-a version

1. **The lead.** It now gives the share of the price the law sets ("under half of 1 percent at any price", row 5) and "most of what you pay is the commission you agree".
2. **The listing counts are refreshed** (rows 30, 31). The "the cheaper the house, the more have cut" claim is out, because the bands are now flat. The band chart becomes a stat card.
3. **The out-of-state section is now one line with the link** (cannibalization fix). Its worked $215,000 condo card is gone, and so is the hold-back in the calculator.
4. **New attorney section** with the SC Bar payoff-handling-fee opinion (row 13).
5. **The HOA section links the 2026-11-b estoppel page and prints no range** (rows 17, 18).
6. **The title keeps "Cost to Sell a House in South Carolina".** The 2026-11-a title started with "Seller Net Proceeds Calculator" and dropped it.
7. **Data comes from `data/2026-11-b/sell-net-proceeds/findings.json`,** never typed. The spec's constants must throw if findings.json moves (as fsbo.js does).

## Owner questions

Q1 to Q6 are in facts.md, each with a proposed answer, and none blocks the build. One more:

- **Q7.** May the page offer "send us the draft closing statement and we go through it line by line"? Proposed: no, until confirmed. The attorney section ends on the net sheet offer.

## For the lead (outside this page's files)

- **Cannibalization fixes owed by other pages:**
  - /buyers/closing-costs/: a new description, the deed-stamp H2 cut to one paragraph, and a link to this page.
  - /sell/fsbo/: drop the keyword "deed stamps SC" and link this page.
  - /sell/out-of-state-buyers/: keep one line on the hold-back.
- **The struck list:** `batches/2026-11-b/facts/sell-net-proceeds-struck.json` holds 2026-11-a's 14 entries plus 2 new ones. Run `struck-check.js` on the build.
- **A verifier must check rows 5, 13, 30 and 31 before the writer uses them.**
