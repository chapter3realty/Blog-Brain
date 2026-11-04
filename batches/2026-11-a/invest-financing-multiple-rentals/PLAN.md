# Plan: /invest/financing-multiple-rentals/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-04. Ledger: `facts.md` (32 rows, all `awaiting`; use only rows a verifier marks `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/invest-financing-multiple-rentals/` (`equity-by-year.json`, `examples.json`, `repeat-buyers.json`, `owner-counts.json`, `listings.json`; build every chart, table and figure from them, never type them). Spec to rewrite: `specs/financing-multiple-rentals.js` (keep the URL).

## Hard limits for this page (read before writing)

- **Not a DOWN_PAYMENT_OK page.** No down payment percentage or amount. No LTV percentage, "$0 down" or "nothing down" (story `equity-for-next-rental` limits). The cash-out limit appears only in dollars. Keep "2 percent", "6 percent", "75" and "six months" out of any sentence that says "down payment" (build.js `TRIGGER_DOWN_NEAR` checks a 70-character window).
- **No headline offers financing** (build.js `LEND_HEADLINE`, owner 2026-09-07). Never start a title, H1, H2 or button with "Finance", "Financing" or "Refinance", and never "finance multiple / more / another / your". "How many rentals can you finance?" passes; check every heading against the regex.
- **No rate, no loan payment.** The reserve and worst case name "the loan payments" as the reader's own line. Calculator inputs for value and balance may start empty; there is no rate, payment or down payment field.
- **Chapter3 is not a lender.** "Our preferred lender" only; BrickWood not named in the body. Loan rules are stated as "the standard rule" in our voice, with Fannie Mae and Freddie Mac named in the sources line (CRAFT 5: no "according to"). The live page's "According to a loan officer at our preferred lender" goes.
- **One story, told once** (`reserve-story`). The paperwork point (`second-rental-paperwork`) is a mild one-paragraph mistake, without "We ask for the least the file needs" or "A seller can ask for more".
- **No AVM.** The equity figures are a typical house's index value, never a value for the reader's address. Offers say "send us both addresses; we run the rent and the numbers", not "we value your house".

## What the judge said, and how this plan answers each point

| Judge's problem | Answer in this plan |
|---|---|
| Same story told twice; 140-word short answer block | The story appears once, inside mistake 3 (section 5). The short answer is 70 to 90 words and states numbers. |
| Generic advice; one local fact (6 percent tax) | Four findings from local data (below): equity by purchase year from the Myrtle Beach-area value index; the reserve and the worst case in dollars on a real local house; our deed count of repeat buyers; our parcel count of owners with two or more 6 percent homes. Plus the 6 percent tax in dollars on the example house. |
| "According to a loan officer at our preferred lender" | Cut. Rules stated as the standard rule, sourced to the Selling Guide and Freddie Mac's table in the sources line. |
| No worked equity example; no table, chart or photo | Section 1: a chart of equity by purchase year, a worked example card (2019 house: about $123,200 before closing costs; 2022 house: little or none), and a calculator. Tables: rent counted, reserve tiers, standard loan against DSCR. Second chart: owners by number of homes. Photo: the partner's shot list, with a licensed stand-in. |
| "Write down what happens ..." is a to-do for the reader | The page works the worst case for the reader ($4,600 of costs, $13,380 of rent not collected) and says "we work out yours". No "write down", "check", "ask for the figure". |
| Title promises "what goes wrong", intent is financing several rentals | New H1, title and description carry "buying a second rental property", equity, reserves and the 10-home limit (top suggestion groups). "What goes wrong" becomes one section. |
| Ideas 1 to 5 | All five used: equity example (1), worst case with named lines (2), tier table against DSCR (3), repeat-buyer count (4), the owner's observation told once (5). |

## The reader and their job

An owner of one rental (or of a home they will rent out), often out of state, who wants the next one. Job: **decide whether they can buy a second rental now, and how to pay for it.** They know their first loan. They do not know what the lender counts on a second one, how much cash it wants left over, whether their first house has equity to use, or what the second house's tax will be here. They worry that a second house turns one good rental into two bad ones. Next they ask: "would mine work?" That is the offer: send us both addresses.

## The deciding fact (checked first)

The equity route, which the owner wants on this page, works only if the first house is worth well more than what is owed. On a cash-out refinance of a one-unit rental, the new loan can be at most three quarters of the appraised value (row 1, Freddie Mac's table; Fannie Mae's matrix could not be opened). Our index data turns that into the local answer: a typical house here bought in 2019 is worth about $130,400 more than its price; one bought in 2022 is worth about what was paid (row 16). So the page's verdict has a condition the reader can test: when they bought.

## Findings no other site has

1. **Equity by the year you bought** (row 16, `equity-by-year.json`): the gain on a typical Myrtle Beach-area house for each purchase year, 2012 to 2025. 2019: about $130,400. 2021: about $64,800. 2022 to 2024: nothing (slightly down). Nobody publishes this for the metro.
2. **The reserve and the worst case in dollars, on a real local house** (rows 18 to 22, `examples.json`): the /invest/run-the-numbers/ Carolina Forest house as the second rental. The lender counts about $1,670 of $2,230 rent; the reserve is about $10,100 plus six months of the new loan's principal and interest; both houses empty three months cost $4,600 in tax, insurance and dues plus the loan payments, and $13,380 of rent not collected.
3. **Repeat buyers, counted from 30,339 county deeds** (rows 24, 25, `repeat-buyers.json`): 257 buyers (126 people, 131 companies) bought two or more homes in 12 months, 650 homes, about 1 in 20 home sales; they paid a middle price of $195,000 against $310,000 for all sales; 3 in 10 were condos.
4. **Owners of several homes taxed as rentals or second homes, counted from 226,741 parcels** (row 26, `owner-counts.json`): 6,070 people and companies own two or more; 4,091 own exactly two; 3,563 are people.

## Title, H1, description

- Title (30 to 65 characters): **"Buying a Second Rental Property in Myrtle Beach | Chapter3"** (57). Alternative: "Second Rental Property in Myrtle Beach: Equity and Reserves" (59, without the brand).
- H1: "How do you buy a second rental in Myrtle Beach?" / em: "Where the money comes from, and the cash to keep."
- Hero sub (no we, our or us): "A rental bought here before 2022 has equity that can pay toward the next one. Lenders count most of the new rent and want cash left over."
- Description: "A typical Myrtle Beach-area house bought in 2019 has gained about $130,000; one bought in 2022, nothing. What lenders count, the reserve in dollars, and the 10-home limit." (Check length under 160.)
- Keep `url`, `crumb` ("Second rental"), `author: "devin"`. `eyebrow`: "Repeat investors". `keywords`: buying a second rental property Myrtle Beach, second investment property, use equity in rental property to buy another, cash out refinance investment property, reserves for investment property, how many rental properties can you finance, rental income to qualify for a mortgage.

## Page shape

Decision guide with a calculator (CRAFT 3; Page shapes 9 and 8). Verdict with its condition first ("Usually with equity from the first one, if you bought it before 2022"), then the reader's decision in its real order: can the first house pay, what the lender counts, the cash to keep, what goes wrong, the limit, the tax, who else does this. Each section opens with a one-sentence answer that names the subject (answer engines lift it).

## Sections, in order, and what each proves

0. **Short answer + key facts row + slim offer bar.**
   - Short answer (70 to 90 words), first words "Usually with equity from the first one": "Usually with equity from the first one, if you bought it before 2022. A typical house here bought in 2019 is worth about $130,000 more today; one bought in 2022 is worth about what was paid. A cash-out refinance or a line of credit on the first house can pay toward the second. The lender then counts about three quarters of the new rent and wants about six months of the new house's costs left in your accounts. We run both houses before you offer." (Rows 1, 3, 5, 11, 16, 32.)
   - Key facts chips (glass, icon plus words): "About $130,000 gained on a typical house bought in 2019" (16); "About $1,670 of a $2,230 rent counted by the lender" (18); "10 financed homes on the standard loan" (9); "6,070 owners here hold 2 or more homes taxed as rentals or second homes" (26).
   - Slim offer bar: "Send us both addresses. We run the next house with both loans on it." -> /contact/.

1. **"Can your first rental pay for the second?"** (toc: The equity). Proves finding 1 and the deciding fact.
   - First sentence: "Yes, if it is worth well more than you owe: a cash-out refinance or a line of credit on it can pay toward the next house, and the purchase then needs no new cash from savings." (Rows 3, 31.)
   - Chart (G.bars from `equity-by-year.json` by_purchase_year, 2012 to 2025): "What a typical house here has gained since you bought it", bars in dollars, the 2022 to 2024 bars at or below zero shown plainly. One-line takeaway above it. Every value in the chart also in the text or a table of values under it.
   - Worked example card (label "Example", rows 16, 17): bought 2019 for about $233,900; worth about $364,300; the largest new loan on a rental about $273,200; if you still owe $150,000, about $123,200 before closing costs. Then one sentence: bought in 2022, the same house frees little or nothing.
   - Calculator (inside the spec's own script): inputs "What the house is worth" and "What you still owe" (empty), output "Cash a cash-out refinance could free, before closing costs" = 0.75 x value - owed, floored at zero. Label the output as an estimate the appraisal decides. No percentage shown on screen. Check against the worked example by hand (PLAYBOOK A29b).
   - Timing (row 2): the loan you pay off must be 12 months old, and you must have owned the house six months.
   - The tax on the first house does not change; the second house's rent must carry the first house's larger loan too (owner's point from the live page, kept, no payment figure).
   - Mid offer (headline says what the reader gets): "Have us run both houses with both loans on them." One sentence, large button to /contact/.

2. **"How much of the rent does the lender count?"** (toc: The rent). Proves what the reader can borrow against.
   - First sentence: "On a long-term rental you buy, the standard rule counts three quarters of the rent; on a short-term rental, half, and only against that house's own costs." (Rows 5, 7.)
   - Rule table (three rows): long-term lease, short-term rental, the home you move out of (row 8). Columns: "What counts" / "What it can pay for".
   - Worked line (row 18): the Carolina Forest 3-bedroom; HUD's rent $2,230; the lender counts about $1,670.
   - The 12-month landlord rule (row 6), in one short paragraph: why the second rental is easier to qualify for than the first once a full year shows on your tax return.
   - Links: /invest/rent-prices/ (what rents are), /invest/str-rules/ (where a short-term rental is legal), /invest/long-term-rental/ (the rental analyzer).

3. **"How much cash do lenders want you to keep?"** (toc: Reserves). Proves finding 2, first half.
   - First sentence: "For a rental, the standard rule asks for six months of the new home's full monthly cost, plus a share of what you owe on your other rentals, left in your accounts after closing." (Rows 11, 12, 13.)
   - Tier table (built from rows 11 and 12): financed homes 1 to 4 / 5 to 6 / 7 to 10 against "Share of your other rentals' balances". A row for the new rental (6 months) and for a second home (2 months).
   - Worked figure (row 20): about $10,100 plus six months of the new loan's principal and interest, its two parts named.
   - The money stays yours (row 13). Cash from refinancing the house you are buying does not count (row 4). Cash from the first house can (row 3).
   - Link /invest/cash-to-close/ ("what else you pay at closing").
   - Mid offer: "Ask us to work out the reserve for your next house."

4. **"What goes wrong on a second rental?"** (toc: Mistakes). The owner's three mistakes, each said once, each with what we do. Proves finding 2, second half, and carries the one story.
   - First sentence: "Three things go wrong most: expecting the same paperwork, no plan for both houses sitting empty, and spending the cash you needed to keep."
   - Mistake 1 (row 29): a different document list on each loan, said mildly. We send each document the day it is asked for (from the live page). One short paragraph.
   - Mistake 2 (rows 21, 22, 30): the worst case as a number: two houses like the example, empty three months, $4,600 in tax, insurance and dues plus three payments on each loan, and $13,380 of rent not collected. The lender's minimum reserve covers the costs with about $5,500 left, not the loan payments; we work out yours before you buy. A small itemized table (tax, insurance, dues, the loan payments as "your figure", rent not collected) with a total row for the dollar lines.
   - Mistake 3 (row 28): spending the reserve, with the story told once, 4 to 6 short sentences, no added detail. Passes the simple story test (`voice/STORY-SIMPLE.md`, `tools/story-check.js`).

5. **"How many rentals can you finance?"** (toc: The limit). Proves the limit and the way past it.
   - First sentence: "Ten financed homes on the standard loan, counting your own home if it has a mortgage; past that, investors use DSCR or portfolio loans, which set their own limits." (Rows 9, 10.)
   - Comparison, `compareCards` (cards on a phone): Standard loan against DSCR loan. Rows: who borrows (a person, title in your name / a person or an LLC, row 14 and the DSCR page); how many loans (10 financed homes / set by the lender); what the lender counts (your income and three quarters of the rent / the rent against the full payment, DSCR page); reserves (six months plus 2, 4 or 6 percent / set by the lender); what does not count toward the ten (a loan you are not personally on). The DSCR column uses only facts verified on /invest/strategies/dscr-loans/ or "set by the lender" until the owner answers question 1.
   - What counts toward the ten (row 9 and 10) in two short sentences.
   - Links: /invest/strategies/dscr-loans/, /invest/llc/.

6. **"What will the second house's tax be?"** (toc: Tax). Short. The judge's one local fact, made a number.
   - First sentence: "A rental in Horry County is taxed at the 6 percent rate, about 3.3 times what an owner who lives there pays outside city limits." (Row 23.)
   - The example house: about $4,700 a year (row 19). A home you move out of and rent loses the 4 percent rate (row 23, pairs with row 8).
   - Link /buyers/property-taxes/ (owner of the 3.3 to 4.3 figure), /invest/run-the-numbers/.

7. **"How many people here own more than one rental?"** (toc: Others like you). Proves findings 3 and 4. Good news for the reader: they are not unusual.
   - First sentence: "About 6,000: 6,070 people and companies in Horry County own two or more homes taxed as rentals or second homes, and 4,091 of them own exactly two." (Row 26.)
   - Chart (G.bars from `owner-counts.json`): owners by number of 6 percent homes (2, 3 to 4, 5 to 9, 10 or more), people and companies together. Table of values under it.
   - Last 12 months (rows 24, 25): 257 buyers bought two or more homes, 650 homes, about 1 in 20 sales; middle price $195,000 against $310,000; 3 in 10 condos.
   - Today (row 27): at $195,000 or less there are 67 houses with 3 or more bedrooms for sale and 432 condos with 2 or more.
   - Homes row (G.homes): a feed of homes at or under $195,000 if one exists in `idx-lib/feeds.js`; otherwise note in NEEDS.md and leave it out (do not edit shared feeds).
   - Mid offer: "Send us your price range and the area. We send rentals that fit both loans."

8. **FAQ** (open text), each answer leads with the answer and names the subject:
   - "Can I rent out my second home instead of buying a rental?" (row 15)
   - "Can I rent out the house I live in and buy another?" (rows 8, 23)
   - "Can the next rental be bought in an LLC?" (row 14; link /invest/llc/)
   - "Can I use a line of credit on my first rental for the next one?" (row 3)
   - "Does the lender hold my reserves?" (row 13)
   - "Does a short-term rental's income help me qualify?" (row 7)
   No question here repeats a section's own heading.

9. **Sources line**: Fannie Mae Selling Guide sections (named), Freddie Mac maximum LTV table, Zillow Home Value Index (metro includes Brunswick County, NC), Horry County deed index and parcel records (our count, method in one clause), HUD Small Area Fair Market Rents, SC Code 12-43-220. Keep the note: "Educational only, not a loan offer. Chapter3 is a real estate brokerage. Loan rules change; a loan officer confirms them for your file."

10. **Bottom offer band**: "Buying your second rental in Myrtle Beach?" / "Send us both addresses. We run the rent on the next house and the numbers with both loans on them, and put you with a loan officer at our preferred lender." Button to /contact/ as a request ("Send us both addresses"); keep the phone link as a second button if the template allows.

Offers: four mid offers at most, each with different words, each tied to the section above it (CRAFT 3).

## Visuals

| # | Visual | Data | Section |
|---|---|---|---|
| 1 | Bar chart, glass style: gain on a typical house by purchase year, 2012 to 2025 | `equity-by-year.json` | 1 |
| 2 | Worked example card (glass), label "Example" | `equity-by-year.json` example | 1 |
| 3 | Calculator: value and owed in, cash before closing costs out | in-spec script, 0.75 cap | 1 |
| 4 | Rule table: what the lender counts | rows 5, 7, 8 | 2 |
| 5 | Tier table: reserves | rows 11, 12 | 3 |
| 6 | Itemized table with a total row: two houses empty three months | `examples.json` worst_case | 4 |
| 7 | Comparison cards: standard loan against DSCR | rows 9, 10, 14; DSCR page | 5 |
| 8 | Bar chart: owners by number of 6 percent homes | `owner-counts.json` | 7 |
| 9 | Key facts chips | rows 9, 16, 18, 26 | 0 |
| 10 | Photo (below) | | 7 |

One value per fact on every surface: the gain on a 2019 house is "about $130,000" in the short answer, the chips, the chart's takeaway and the FAQ; the card shows the two index values ($233,900 and $364,300). The rent counted is "about $1,670" everywhere.

Charts are flat and clean in the liquid glass style (`tools/glass.js` `bars`), contrast checked; every number in a chart is also in text or a table of values.

## Photo

The page needs one photo of the subject: two ordinary rental houses on one street. No free-licence photo of that exists in our records, and Wikimedia Commons searches were rate-limited on 2026-11-04.

- **First choice:** the photo partner's shot (shot list, item 1).
- **Stand-in, already licensed on the site:** "Conway Residential Historic District Jun 10" by Pubdog, Wikimedia Commons, public domain, https://commons.wikimedia.org/wiki/File:Conway_Residential_Historic_District_Jun_10.JPG , already resized with the house number blurred at `chapter3realty/images/buyers/no-hoa/conway-older-house-and-oak.webp` (licence record in `data/2026-11-a/submarkets-conway/photos.json`). It shows one older house under a live oak in Conway. Use it only in section 7, with a caption that says only what it shows: "An older house under a live oak in Conway." Add no claim about prices or renters there (no verified row). If it reads as decoration, leave the page with charts only until the partner's photo arrives (CRAFT 4: cut an image that only decorates).
- Not used: the Hurricane Florence floodwater street (public domain, on three pages already); a flood photo on a financing page would claim a flood risk the page does not discuss.

## Siblings: who owns what

- /invest/run-the-numbers/ owns the worked rental examples, HUD rent by ZIP and the tax multiples from deeds; this page reuses its Carolina Forest house and links it.
- /buyers/property-taxes/ owns the 3.3 to 4.3 times figure (registry `rental-vs-residence-tax`).
- /invest/strategies/dscr-loans/ owns DSCR rules and the preferred lender's figures; this page links it and states only "set by the lender" for DSCR limits.
- /invest/strategies/brrrr/ owns the cash-out percentage and seasoning for BRRRR; this page gives the cash-out limit in dollars only.
- /invest/cash-to-close/ owns closing costs; this page owns the multi-property reserve tiers and links cash-to-close for the rest.
- /invest/rent-prices/ owns rent levels and the ZHVI 2019 to 2026 figures (same values here).

## Kept from the live page

- The URL, the crumb, the author, the eyebrow.
- The three mistakes and the owner's story (now once).
- "No new cash from savings" wording for the equity idea.
- The offer wording "We run the rent on the next house and check the numbers with both loans on them before you offer" and "put you with a loan officer at our preferred lender" (row 32).
- Internal links: /buyers/property-taxes/, /invest/strategies/dscr-loans/, /invest/cash-to-close/. Added: /invest/run-the-numbers/, /invest/rent-prices/, /invest/str-rules/, /invest/llc/, /invest/strategies/brrrr/, /invest/long-term-rental/.
- Cut: the third-party DSCR blog link (not primary); "According to a loan officer"; "Write down what happens"; "Ask for the figure before you shop".
- data/headlines.json has no entry for this URL.

## Questions only the brokerage can answer (none blocks the draft)

1. Our preferred lender's DSCR program: a limit on how many DSCR loans one investor can hold, and the months of reserves on a second rental.
2. Does our preferred lender write a line of credit on a rental here, or only cash-out refinances?
3. How often do our investors fund the next rental from equity in the first?

## Shot list

`shot-list.md`.
