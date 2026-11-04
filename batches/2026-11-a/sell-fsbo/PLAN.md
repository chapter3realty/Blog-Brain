# Plan: /sell/fsbo/ (batch 2026-11-a, Lane U)

Researcher, 2026-11-04. Inputs: `must-answer.md`, `facts.md` (27 rows, all awaiting the verifier), the judge's notes in `audit/judged-2026-10-31.json`, and the live page. Spec to write: `specs/fsbo.js` (none exists; the live page is hand-built HTML from the old generator). Data: `<web2>/data/2026-11-a/sell-fsbo/` (`findings.json`, `surname-findings.json`).

## The reader and their job

A Horry County homeowner who wants to keep the commission. Often they already have a buyer in mind (a relative, a neighbor, a tenant), or a friend told them to put a sign in the yard. They know nothing about South Carolina's attorney closing or the state form. They fear three things: breaking a rule, being sued after closing, and leaving money on the table.

**Job, in one verb: decide** (sell it myself, get help, or list), then **follow the steps**. Kind of page: decision guide (CRAFT 3, `reports/Page shapes by kind of page.md` section 9) with a cost table and numbered steps inside it. Lead with "Yes, you can, and here is when it pays."

## The deciding fact for the reader

Selling by owner saves the listing fee, about **$3,500 for each 1 percent** on the county's middle resale house of **$350,000** (rows 14, 15). It pays only if the price lands within that amount of what the open market would pay. Pricing is where the money is: the county's value on a house missed its sale price by a middle **9 percent, about $31,000** (row 16). And the law adds two fixed duties that no one can skip: a **South Carolina attorney supervises the closing**, and the seller hands over the **state's 28-question form before the contract** (rows 2, 4, 8).

The second thing no other page says: most national "for sale by owner" sales were to someone the seller already knew (row 17), and in Horry County's own deeds, sales between people with the same last name recorded at a middle **$200,000 against $310,000**, with **3 in 10 under $100,000** against 1 in 25 (row 24). The national "FSBO discount" is largely a family price. Selling to a stranger is a different job, and that job is pricing and exposure.

## What the live page has worth keeping

- **The offer:** FSBO coaching for a flat fee, credited back in full if the owner later lists with us; the free pricing analysis either way. Keep the offer and its credit-back once the owner confirms the fee (Q1).
- **The lead form** (`#lead-form`) with its consent text, and the phone link. Site component; keep as is.
- **Correct legal points** (now ledgered): legal to sell yourself (row 1), attorney closing (row 2), disclosure before the contract (row 4), lead paint for pre-1978 homes with the 10-day window (row 11).
- **Two practical checklist items:** confirm wiring by phone (row 27, reworded as what we do) and check a buyer's financing before signing (practice; keep as what the coaching does, no number).
- **Internal links:** /sell/home-value/ (pricing; it owns area prices), /sell/net-proceeds/ (the calculator). Add /buyers/undisclosed-flooding/, /sell/out-of-state-buyers/, /sell/capital-gains/, /hoa/documents/ (the HOA addendum), /buyers/closing-costs/ (deed stamps owner page).
- **FAQ questions** that match searches, with "realtor" replaced by "real estate agent" (compliance L5).
- **Headline:** `data/headlines.json` has no /sell/fsbo/ entry; nothing the owner liked to keep.

## What must go (judge's problems, each solved)

| Judge's problem | Fix in the new page |
|---|---|
| Every number is national | Local rows: 14, 15, 16, 22, 23, 24 (deeds, the CRM in aggregate, our pricing test); the form's coastal questions (row 9); the resort-area share (row 17) |
| The coaching fee is never stated | Owner question Q1. The coaching section and the cost table print the fee; the page does not ship without it (a blocker the lead raises once) |
| No SC disclosure form walk, attorney role or timeline | Sections 4, 5 and 8 below |
| No visual; "360,000 dollars" in text | Five visuals: decision table, cost table, form illustration, two charts, steps; plus one photo now and partner photos later |
| Ad spend and views disagree with /sell/; "four owners" | Cut from this page (Q5). If the owner wants reach in the coaching section, use the story bank's "several thousand dollars a month" wording |
| "47 percent ... tears" filler | Cut every Clever survey line |

## Page shape and sections, in order

Title tag (search words): **"Sell Your House by Owner in South Carolina (FSBO) | Chapter3"** (60 characters). H1 (warmer): **"Selling your house by owner in South Carolina"**, with "Myrtle Beach" in the first sentence of the answer. Hero sub-header: no we, our or us.

1. **Can you sell your own house in South Carolina?** (short answer, first screen). Yes: no licence is needed to sell your own home, a South Carolina attorney supervises the closing, and you give the buyer the state's disclosure form before you both sign. Second sentence: on the middle Horry County house, each 1 percent of fees is about $3,500, and the price is where most of the money is won or lost. Key facts row (glass icons, 4 chips): "Attorney closes it"; "28-question state form"; "Deed fee $1,295 on $350,000"; "1 in 20 sales nationally, 9 in 100 in resort areas". Slim offer bar: "Have us price your house from county sales, free."
   Proves: rows 1, 2, 4, 8, 14, 15, 17.

2. **Should you sell it yourself? A decision table.** "If this is you" against "Then". Five rows:
   - You already have a buyer (a relative, a neighbor, your tenant) → sell it yourself; hire the closing attorney first; a sale to your spouse, child or parent needs no state form, and any buyer can agree in writing to skip it (row 5).
   - You are selling to a stranger and want the best price → price from recorded sales, and get the home in front of buyers' agents (sections 6, 7).
   - Your house is near the water or in a flood zone → the form's seven coastal questions are where sellers get caught (section 5).
   - You live out of state → the buyer holds back tax unless the sale is exempt; link /sell/out-of-state-buyers/ (row 25).
   - You want to save the fee but not do it alone → coaching (section 9).
   Proves: rows 5, 9, 25, 17. Engines quote table rows; each row names the subject.

3. **What does selling by owner save on a Myrtle Beach-area house?** The worked example on $350,000 (row 14). One table, four columns (cards on a phone): Sell it yourself / Yourself plus an MLS entry (only if Q4 confirms) / Coaching (fee from Q1) / Full listing. Rows: deed fee $1,295 (all four, row 15); closing attorney "same on every path" (no number, Q3); listing-side fee (example rate, labeled example, editable); buyer's agent "negotiable; you may offer it or not" (row 20); coaching fee; what you keep before your loan payoff. Below it, two plain sentences: each 1 percent is $3,500; a 9 percent pricing miss on this house is about $31,000 (row 16). A small editable version (two inputs: price, fee percent) sits in the table; link /sell/net-proceeds/ for the full net. Never a loan payment or a rate.
   Mid-roll offer after it: **"Have us run your net four ways"** (to /contact/ with the page named).
   Proves: rows 14, 15, 16, 20.

4. **Do you need a lawyer to sell a house in South Carolina?** Yes, for the closing. What the attorney does (title search, the deed, the closing, recording: row 2). Who picks: with a buyer's home loan, the buyer chooses and the lender must follow it; the contract names the attorney and who pays (row 3). An attorney for one side does not advise the other, so a seller may want their own (row 3). Wire fraud line as what we do (row 27).
   Proves: rows 2, 3, 27.

5. **What the South Carolina disclosure form asks, question by question.** Our own illustration of the form: nine parts as a stack of labeled bars (water and sewer; roof and structure; systems; pests; zoning, title and water; environmental; leases; meter charges; HOA), with questions 22 to 28 highlighted as "the coast". One line per part on what sellers here get asked about most often is **not** in the ledger; keep each line to what the question asks (row 8, 9 quotes). Then, short paragraphs: "No Representation" is not a way out (row 10); you must correct it if something changes (row 10); not giving it does not cancel the sale, but knowingly leaving out a problem can cost you damages, costs and fees (rows 6, 7); what you need not disclose, and that you may not lie when asked (row 13); "as is" still needs the form (row 13 note). A boxed note for homes built before 1978 (row 11). One line with link: FEMA has paid 8,815 flood claims in Horry County (row 12), which is why the seven coastal questions matter.
   Photo here (see visuals): raised beach houses at Surfside Beach, captioned with the coastal-questions fact.
   Mid-roll offer: **"Send us your filled-in form before a buyer sees it"**.
   Proves: rows 4 to 13.

6. **Do houses sold by owner sell for less?** Chart A (NAR): three bars, $360,000 (seller knew the buyer), $372,200 (did not), $425,000 (sold with an agent), caption: different homes in different places, so the gap is not all lost price; 3 in 5 by-owner sellers knew the buyer (rows 17, 18). Chart B (our count): share of home sales recorded under $100,000, 30 percent between people who share a last name against 4 percent for other sales between people; middle prices $200,000 and $310,000 in the caption (rows 23, 24). The point in one sentence: the national gap is mostly sales to people the seller knows; a sale to a stranger is a pricing and exposure job. Then what by-owner sellers say was hard (row 19), one sentence.
   Proves: rows 17, 18, 19, 23, 24. Unique finding 1.

7. **How do buyers find a house for sale by owner?** Most buyers' agents search the MLS; about 3,700 houses are listed in the county now and more than half have cut their price (row 22). The state's regulator, writing about agents' private listings, says wide marketing reaches the most buyers and limited marketing can mean less competition and a lower price (row 21). The MLS-entry option, only if Q4 confirms. **Do you have to pay the buyer's agent?** as its own H3 with the plain answer: no rule requires it; since August 17, 2024 offers are not made on the MLS; you may offer it or a credit; fees are negotiable (row 20).
   Mid-roll offer: **"Ask us what a buyer's agent will expect on your house"**.
   Proves: rows 20, 21, 22.

8. **The steps from first showing to closing in South Carolina.** Numbered steps with the legal points only (no day counts that are not ledgered): 1 Price from recorded sales (link /sell/home-value/). 2 Fill in the state form and, in an HOA, the addendum; pre-1978, the lead form (rows 8, 11). 3 Market and show. 4 Check the buyer's loan approval or proof of cash before you sign (our practice). 5 Hand over the form, then sign the contract; it names the attorney, the deposit holder and the deadlines (rows 3, 4). 6 Lead test window, 10 days unless changed in writing (row 11). 7 The attorney searches title and prepares the deed (row 2). 8 Correct the form if anything changed (row 10). 9 Closing; confirm wiring by phone (row 27); deed fee paid from your proceeds (row 15); tax held back if you live out of state, unless exempt (row 25). 10 The deed is recorded with the county (row 2).
   Proves: rows 2 to 4, 10, 11, 15, 25, 27.

9. **What Chapter3's coaching does, and what it costs.** The fee (Q1), what it covers (the live page's list, now each tied to a step above), the credit if you list later (Q1), and how we are paid, said plainly (decision-aid rule: disclose the interest). A real story only if the owner gives one (Q6).
   Proves: owner answers only.

10. **Questions sellers ask** (open text, FAQ schema): Can I sell my house without a real estate agent in South Carolina? Who pays deed stamps? Can I sell my house to my son or daughter without the form? Do I have to tell a buyer someone died in the house? Can I sell as is? Do I pay tax on the sale? (row 26, link /sell/capital-gains/). Can I still use an agent to buy a for-sale-by-owner home? (buyer reader: yes; their agreement sets their agent's pay, row 20).
11. **End offer band** and a homes row. Feed suggestion: houses for sale in the county between $300,000 and $400,000 with a price cut, titled for a seller ("Houses near the middle price that have already cut their asking price"). Check the live count is at least 10 before choosing.

Phone screens: the top (hero, short answer, chips, slim offer) must fit in about 1.3 screens; the decision table starts on screen 2.

## Unique findings (at least two; here, four)

1. **Our count from Horry County deeds:** sales between people with the same last name, 73 in 12 months, middle $200,000 against $310,000, 3 in 10 under $100,000 against 1 in 25 (rows 23, 24). No one has published this.
2. **The worked net on the county's own middle house:** $350,000 from our deed count, $1,295 deed fee, $3,500 per 1 percent, against a $31,000 middle pricing miss from our own pricing test (rows 14 to 16).
3. **The state form, read for a coastal seller:** 28 numbered questions in nine parts; seven (22 to 28) on erosion, flood and beach renourishment; the "No Representation" trap (rows 8 to 10). Competitors print "fill out the disclosure".
4. **The regulator's own words on exposure** (August 2026 guidance), applied to selling alone (row 21). New, primary and local to the state.

## Visuals

| Visual | Section | Built from | Notes |
|---|---|---|---|
| Key facts chips (glass icons) | 1 | rows 2, 8, 15, 17 | 4 chips, words with each icon |
| Decision table ("If this is you" / "Then") | 2 | rows 5, 9, 17, 25 | `h.table`; cards on a phone |
| Cost table, four paths, editable price and fee | 3 | `findings.json` "worked" | Labeled example rates; Q1 and Q4 cells pending; never a rate or payment |
| Our illustration of the state form | 5 | `findings.json` "form" (parts, coastal questions) | Nine labeled bars, 22 to 28 highlighted; drawn by us; alt text lists the parts |
| Chart A: NAR middle prices, three bars | 6 | `findings.json` "nar_2025".median_price | `glass.bars`; caption with the "different homes" caveat and the 3 in 5 knew-buyer share |
| Chart B: share under $100,000, two bars | 6 | `surname-findings.json` (findings.json "surnames".under_100k) | Caption with the middle prices and "share a last name" wording |
| Numbered steps | 8 | rows above | Plain numbered list, legal points marked |
| Photo: raised beach houses at Surfside Beach | 5 | existing licensed file `images/2026-11-a/invest-where-to-buy/surfside-beach-pier-and-houses-2011.webp`, public domain (USGS/NOAA 2011 oblique, https://doi.org/10.5066/F7N877XX), record in `data/2026-11-a/invest-where-to-buy/photos.json` | Caption: "Raised beach houses at Surfside Beach. A seller of a house like these answers seven of the form's questions about erosion, flood and beach renourishment." Look at it full size first; copy the record into this page's photos.json |

Free-licence candidates to check at full size before use (Commons API returned HTTP 429 during research, so none was opened):
- `File:YscloskeyForSaleByOwner.jpg`, CC BY 2.5, https://commons.wikimedia.org/wiki/File:YscloskeyForSaleByOwner.jpg (a FSBO sign; Louisiana; use only if the sign is the subject and no phone number is readable).
- `File:For Sale By Owner sign - 76 Acres.jpg`, CC BY 4.0, https://commons.wikimedia.org/wiki/File:For_Sale_By_Owner_sign_-_76_Acres.jpg (likely land, not a house; reject if so).
- `File:Old Jefferson, Jefferson Parish, Louisiana -House for Sale.jpg`, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Old_Jefferson,_Jefferson_Parish,_Louisiana_-House_for_Sale.jpg (check it is a by-owner sign).
- Horry County Government and Justice Center, Conway (Register of Deeds is at 1301 Second Avenue, https://www.horrycountysc.gov/departments/register-of-deeds/): already licensed as `images/2026-11-a/hoa-liens-and-foreclosure/horry-government-justice-center.webp`, CC BY-SA 3.0, Pollinator at English Wikipedia. Already on three pages; use for step 10 only if no partner photo arrives.
- Never `File:ForSaleByOwnerToMenOfColor.jpg` (a historical discriminatory sign; fair housing).

## Photo partner's shot list

Also in `shot-list.md`.

1. A "For Sale By Owner" yard sign in front of a house on an ordinary Grand Strand street. The sign is the subject. No phone number, house number or person readable. Landscape and a square crop.
2. The front of a typical resale house in Carolina Forest or Socastee, in good light (the kind of house in the $350,000 worked example). No house number, no people, no car plates.
3. A raised beach house in Surfside Beach or Garden City, showing the pilings or flood vents from the street (for the coastal questions).
4. The Horry County Government and Justice Center entrance on Second Avenue, Conway, where deeds are recorded. Replaces the 2006 Commons photo.
5. Optional: the outside of a law office building in Conway or Myrtle Beach with no firm name readable (the attorney closing step).

## Owner questions (send once, with proposed answers; facts.md lists all seven)

Q1 coaching fee and credit (blocker). Q4 CCMLS entry-only listings (decides one column of the cost table). Q5 one ad-spend value. Q6 a real FSBO story. Q2, Q3 and Q7 have proposed answers that let the page ship without them.

## Wrong-shape check

- A how-to only (steps first) would bury the decision and the money; the reader came to decide first.
- A pros-and-cons list would repeat every competitor; the decision table ties each point to a reader's case.
- The cost table is the one comparison readers use; no second comparison table.
- One fact once: the $350,000 and $1,295 appear in the chips and the table only; the 9 percent miss once, in section 3.
