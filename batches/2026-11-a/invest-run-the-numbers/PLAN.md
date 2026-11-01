# Plan: /invest/run-the-numbers/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-01. Ledger: `facts.md` (29 rows, all `awaiting`; use only rows a verifier marks `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/invest-run-the-numbers/` (`findings.json` holds every derived number; build charts and tables from it, never type them). Spec to update: `specs/run-the-numbers.js`.

## What the judge said, and how this plan answers each point

| Judge's problem | Answer in this plan |
|---|---|
| A lead form with an article around it; never shows the sheet | Section 2 shows the sheet we send, filled in for a real local case (the middle 3-bedroom house for sale in Carolina Forest), every line with its source. The form moves to section 8. |
| No worked example, no number | Three worked examples (rows 17 to 19) and four of our own counts (rows 6 to 9, 12 to 14). |
| H1 and title match no search | Title and H1 carry "rental property calculator" and "good deal" (top suggestions). |
| The same promise repeated five times; "why a local agent" is reassurance | The offer (free, same day) is said once, in the form section and the end box. The "Why get the numbers from a local agent" section is cut; the stories in section 7 do that job with facts. |
| No photo, no visual, no tool | A calculator in the first phone screen after the short answer, the sheet as our own illustration, two charts, one table. No decorative photo. |
| Ideas: tax at 4 and 6 percent for a real case; "what the tool cannot see" with three real cases | Section 3 (the tax reset, with our deed count). Section 7 with three stories from stories.json. The judge's special assessment case has no real story; it is an owner question, not invented. |

## The reader and their job

An investor, often out of state, with one Grand Strand listing open. Job: **decide if this rental is a good deal before offering.** They know the national rules (1 percent, cap rate, 50 percent). They do not know the local traps: the 6 percent tax and the school tax, the tax reset after a sale, condo dues. They worry the listing's numbers are the seller's. Next they ask: "what would this one make?" That is the offer: send the address.

## The deciding fact (checked first)

A rental in South Carolina is taxed at 6 percent and pays the school operating tax (rows 1 and 2), and a sale resets the taxed value the next year (row 4). Our deed count turns that into the number no other page has: buying a home the seller lived in, an investor's next tax bill in unincorporated Horry County is about 3.6 to 3.9 times the seller's (row 9). The listing's tax line is the seller's bill.

## Findings no other site has

1. **The 1 percent rule, counted on every house for sale.** 14 of 2,975 houses with 3 or more bedrooms pass it against HUD's rent for their ZIP; 8 of the 14 are in Longs. 429 bring in 8 percent of the price a year (row 12).
2. **Condos pass on price, then the dues take it back.** 214 of 1,785 two-bedroom-plus condos pass on price; 31 to 46 after the HOA dues (row 13). The middle condo's dues are $600 to $700 a month (row 14).
3. **The seller's tax is not yours, from 8,310 deeds.** The median 2026 resale sold for 1.17 times the value the seller was taxed on; half were on the 4 percent rate; an investor buying one of those pays about 3.6 to 3.9 times the seller's bill (rows 6 to 9).
4. **The same sheet on three real local cases** from live listings in aggregate (rows 15 to 19): a house in Carolina Forest keeps about 4 percent of its price before insurance and a loan, one in Longs about 5 percent, a Myrtle Beach condo about 1.4 percent. The 50 percent rule fits the houses and fails the condo (row 21).

## Title, H1, description

- Title (30 to 65 characters): **"Myrtle Beach Rental Property Calculator: Is It a Good Deal?"** (59). Alternative: "Is This Myrtle Beach Rental a Good Deal? Run the Numbers" (56).
- H1: "Is this Myrtle Beach rental a good deal?" / em: "Run the numbers here, or send us the address."
- Description: the counts in one sentence, for example "Only 14 of 2,975 houses for sale here pass the 1 percent rule. Our calculator uses the 2026 Horry County tax for rentals, HOA dues and real rents."
- Keep the URL. Keep `crumb`, `author: "devin"`.

## Page shape

Calculator page (CRAFT 3; Page shapes 8), with a decision guide's verdict on top (Page shapes 9). Order: one-sentence verdict, the tool, the worked example as the sheet, then the three things that decide most deals (rent against price, the tax, the dues), then definitions, costs, what the tool cannot see, the offer.

Short answer (first two sentences, under the H1): "Usually only if the rent still covers the tax and the dues. Here a rental pays the 6 percent rate and the school tax, and after you buy, the tax is reset to about what you paid." Then one line of the 14-of-2,975 count. Then the calculator.

## Sections, in order, and what each proves

0. **Short answer + key facts row** (glass chips with words): "14 of 2,975 houses pass the 1% rule" (row 12); "6% tax rate on a rental, plus the school tax" (rows 1, 2); "Middle condo's dues: $600 to $700 a month" (row 14). One slim offer bar under it ("Send us the address. We send the numbers back the same day.") linking to the form.

1. **"Rental property calculator for Myrtle Beach"** (toc: Calculator). On the first phone screen after the short answer.
   - Inputs, each with a visible label: price; ZIP (select, fills HUD rent by bedrooms from row 11, editable); bedrooms; monthly rent; town for tax (select from row 3: unincorporated 201.0, Myrtle Beach 254.6, North Myrtle Beach 221.2, Surfside 214.2, Conway 272.5, Loris 282.2, Aynor 237.0, Murrells Inlet and Garden City 207.3); HOA dues a month; insurance a year (empty, label "your quote; we get one for the address"); management % (10, row 20); repairs and empty months % (10, row 20); your monthly loan payment (empty, label "from your lender; we do not quote loans").
   - Outputs, live: rent left after costs a year; that as a percent of the price (cap rate, once insurance is entered); the price at which the 1 percent rule works (rent x 100); coverage once a payment is typed, with the owner's 1.25 target (row 22).
   - Default inputs = worked example 1 (row 17), so the text and the tool agree.
   - No rate, no payment, no down payment field with a default (STANDARD C3). Check against three hand-worked cases (rows 17, 18, 19) per PLAYBOOK A29b.
   - The spec builds this inside its own script (do not edit _kit.js or shared CSS).

2. **"What does the numbers sheet look like?"** (toc: The sheet). Proves the page gives the work, not a promise.
   - The sheet for the Carolina Forest house (row 17) as a clean card in the glass style: each line, its amount, and its source in small type (HUD rent for 29579; 2026 county levy, 201.0 mills at 6 percent; middle HOA fee of 3-bedroom houses for sale; our 10 percent allowances). Bottom line: "Left before insurance and any loan: about $15,500 a year, 4.0 percent of the price." Then "The 1 percent rule would need a price of $223,000."
   - Then "The same sheet on three homes": a compare table (cards on a phone, `compareCards`): Carolina Forest house, Longs house, Myrtle Beach condo (rows 17 to 19). Rows: asking price, rent a year, tax, dues, management and repairs, left before insurance and loan, as a percent of price.
   - One sentence: these are the middle homes for sale, not a value of any home.

3. **"Does the 1 percent rule work in Myrtle Beach?"** (toc: The 1% rule). Proves finding 1 and 2.
   - First sentence: "Almost never for a house. Of 2,975 houses with 3 or more bedrooms for sale in Horry County, 14 ask 100 times a month's rent or less."
   - Chart (horizontal bars, from `chart-houses-1pct-by-zip.json`): houses for sale by ZIP area, with the count that brings in 8 percent of the price a year marked inside each bar. Longs leads (189 of 336). Caption says the test and the rent source.
   - Condos: 214 pass on price; 31 to 46 after dues (row 13). One short paragraph, no second chart.
   - What it means: a house here is bought for rent plus appreciation; link /invest/rental-returns/ for returns by area (that page owns them).

4. **"Why is the tax on the listing not the tax you will pay?"** (toc: The tax). Proves finding 3; answers "horry county rental property tax".
   - First sentence: "Because the listing shows the seller's bill. After you buy, the county resets the value to about what you paid, and a rental pays the 6 percent rate and the school tax."
   - Chart: two pairs of bars, the seller's bill = 1 and yours: from a home the seller lived in, about 3.6 to 3.9 times (row 9); from another landlord, about the same (row 8). Caption: unincorporated Horry County, 2026 resales, our count from county deeds.
   - Text: the deed count (row 6, 1.17 times; row 7, half on 4 percent). The timing (row 4: the first October bill is the seller's, the next is yours). The 25 percent exemption and the January 31 notice (row 5): "We remind you to file it" (not "we file it", until the owner answers).
   - Story (row 25): the seller's $1,200 a month against about $600 for the next investor. Tell as recorded.
   - Link /buyers/property-taxes/ for the calculator by town and the 4 percent rules (it owns them).

5. **"What does a condo's HOA fee do to the numbers?"** (toc: Condo dues). Answers "is a myrtle beach condo a good investment".
   - First sentence: "It takes a large share of the rent. The middle condo for sale here charges $600 to $700 a month."
   - Table from `findings.json` gross_yield_by_zip (condos): area, middle asking price, HUD 2-bedroom rent, middle dues, dues as a share of the rent (23 to 48 percent). Plain column names.
   - The condo sheet result once (row 19: about 1.4 percent of the price left), without repeating the section 2 table. Link /invest/condos/, /invest/condo-buildings/ (fees by building), /invest/airbnb-income/ (nightly numbers).

6. **"What is a good cap rate, cash-on-cash return and coverage here?"** (toc: The ratios). Answers the group D suggestions.
   - Each in one plain line with its formula: cap rate (rent left after costs / price; no loan in it), cash-on-cash (cash left after the loan / cash you put in; arithmetic only, no numbers that imply a payment), coverage (row 22, target 1.25; a loan officer at our preferred lender starts at 0.75).
   - The 50 percent rule tested (row 21): about 40 percent on the houses before insurance, 80 percent on the condo.
   - For "what is a good cap rate here", link rental-returns, which owns the owner's targets and the area figures. Do not restate them.

7. **"Every cost on a Grand Strand rental"** (toc: Every cost). Answers "rental property expenses list".
   - Itemized table, one row each: property tax (6 percent, school tax, reset: link section 4); insurance (landlord policy about 25 percent more than a homeowner policy, 15 to 20 percent in our files, row 23; "we get a quote for the address before you offer", row 24); HOA dues; management; repairs and empty months; flood (link /invest/landlord-insurance/); short-term rental taxes and licenses (link /invest/accommodations-tax/); depreciation, the tax side (row 29, link /invest/rental-depreciation/).
   - Story line (row 10): taxes stop more deals than insurance, in our experience.

8. **"What can a calculator not see?"** (toc: What we check). Three real cases, three different shapes:
   - Little River townhouses (row 26): prices rose $230,000 to $292,000, rent stayed a little over $2,000, cash flow went away.
   - Rental bans (row 27): many communities ban renting at all; we filter them and read the HOA papers.
   - The insurance quote for the address (row 24), as the check we do.
   (The seller's cash flow story is in section 4; do not repeat it.)

9. **"Send us the address"** (toc: Send an address; `id: "run-form"`). Keep the live FORM, the TCPA string and `c3SendForm` exactly. Above it, two sentences: what comes back (the sheet in section 2, for that address, with rent from nearby leases, the building's rules and an insurance quote) and when (the same day). Keep "What should you send?" as a 4-item list. Cut "How long does it take?" and "What happens after you send it?" into one sentence each inside this section. Line from row 28 ("send me properties with analytics to prove it") may head the box.

FAQ (open text, 6 items): "Is there a free rental property calculator for Myrtle Beach?" (yes, this one; what it uses); "Is Myrtle Beach a good place to buy a rental property?" (the counts, both sides: rent rarely covers price by the 1 percent rule; Longs and Carolina Forest come closest); "Is a Myrtle Beach condo a good investment?" (dues, row 13/14, nightly rental link); "What is the property tax rate on a rental in Horry County?" (rows 1 to 3); "Can you run numbers on a property listed with another brokerage?" (kept from live); "What if the property is not for sale yet?" (kept).

Bottom CTA: "Send one address." / "We send back the sheet for that address the same day: rent, tax at the rate you will pay, dues, insurance quote, and what is left." Label "Send the address", href "#run-form".

Sources line: HUD FY2027 Small Area FMRs; Horry County 2026 tax levy; SC Code 12-43-220, 12-37-220, 12-37-3135, 12-37-3140; Horry County deeds and parcel records; our listings feed, counted in aggregate (CCMLS line); IRS Publication 527; Insurance Information Institute. Keep the live note: estimates for a buying decision, not an appraisal or a loan quote.

## Visuals

| Visual | Built from | Notes |
|---|---|---|
| Key facts row (3 glass chips with words) | rows 12, 1-2, 14 | `tools/glass.js` |
| The calculator | rows 3, 11, 20, 22 | Own script in the spec; defaults = row 17 |
| The sheet (our illustration, HTML card) | `findings.json` sheet_house | Each line with its source; reads on a 375 px phone |
| Compare: three homes | sheet_house, sheet_house_longs, sheet_condo | `compareCards` from `_kit.js` |
| Chart: houses for sale by area, how many bring 8% / 1% | `chart-houses-1pct-by-zip.json` | Horizontal bars, flat glass style; dataviz skill |
| Chart: your tax against the seller's | `findings.json` tax_reset.unincorporated_investor_bill_multiple | Two pairs of bars; labels carry the multiples |
| Table: condo dues against rent by area | `findings.json` gross_yield_by_zip (condos) | Plain columns |
| Table: every cost | rows 1-5, 20, 23, 24, 29 | One row per cost |

Optional map: a ZIP map shaded by the share of houses that bring 8 percent of price in rent, if `tools/area-map.js` can draw ZIP areas (rental-returns has ZIP shapes in `data/map-shapes.json`). Only if it reads at phone width; otherwise skip.

**Photos.** None needed (judge: "None of a real place is required ... An illustration of the sheet is better than a decorative beach photo"). No stand-in. If the photo partner sends section 2/3 shots, one may sit under section 3 with a caption that states a fact from row 12 or 15 (for example "Houses like these in Longs are where the rent comes closest to the price"), only if the photo shows that kind of house in Longs.

## Photo partner shot list

See `shot-list.md`. Three shots, all optional for this page.

## Siblings and who owns what

- /buyers/property-taxes/ owns the tax calculator by town, the 4 percent application, the registry multiple (3.3x, 4.3x). This page owns the deed-based reset count (rows 6 to 9).
- /invest/rental-returns/ owns net returns by area, appreciation and the owner's four dealbreakers. This page links it and states only coverage 1.25 (needed for the calculator).
- /invest/rent-prices/ owns county rents (FY2027 county FMR); this page uses ZIP-level Small Area FMRs (row 11) and should not restate the county figures.
- /invest/landlord-insurance/ owns insurance dollars and the flood surcharge.
- /invest/long-term-rental/ is the analyzer; link it once in section 1 ("for a full report on one address, the analyzer").
- /invest/condo-buildings/ owns fees by building.

## Writer cautions

- No insurance dollar figure (Not verified). The sheet stops at "left before insurance and any loan".
- "$600" in the story is cash flow, not a payment. No loan payment, rate or down payment anywhere.
- Medians of many listings only, never one listing; no value for any home (no AVM).
- Say the 1 percent rule's test in plain words once: "a month's rent is 1 percent of the price".
- Row 2: do not call 109.1 mills "the largest line" for Loris.
- Rows 6 to 9 are estimates from deed prices: "about".
- Each fact once. The tax multiple appears in section 4 and the chip only.
