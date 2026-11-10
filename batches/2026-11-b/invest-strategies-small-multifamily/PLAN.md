# Plan: /invest/strategies/small-multifamily/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (rows 1 to 33, W1 to W6, R1, R2, S1 to S3: 27 NEW rows awaiting a verifier, 16 carried from verified ledgers, 2 kept from the live page), the triage row, the cannibalization report, the live page.

## Why it is being rebuilt

Triage: "933 words of generic advice with no Grand Strand numbers on two-to-four-unit buildings: no count for sale, no prices, no rents." Two unsourced claims (Tim's own rentals; "sold in all three pockets"). Search Console: 0 clicks from 31 showings in 28 days. Search demand is large and local ("duplex for sale myrtle beach", "oceanfront duplex north myrtle beach", "duplex for sale surfside beach", "fha duplex loan limit", "buying a duplex and living in one side"), and the page answers none of it with a number.

**There is no spec.** The live page is hand-built HTML. The writer makes `specs/small-multifamily.js` (author "devin", url `/invest/strategies/small-multifamily/`), built with `node tools/mkpage.js specs/small-multifamily.js`, reading `data/2026-11-b/invest-strategies-small-multifamily/findings.json` and `pums-2to4.json`. `specs/1031-exchange.js` is the nearest model (same batch, owner: "they are good", 2026-11-10): its `must()` checks, `G.homes()` strips and offer cards.

## What the live page has that is worth keeping

- The H1's searched words, "How to buy a duplex or fourplex in Myrtle Beach", and the plain definition: "two, three, or four homes in one purchase, one loan, one roof".
- The five steps (find a building of 2 to 4 units; add up the rent roll; weigh it against the whole building's costs; decide whether you will live in one; budget for more tenants). Rewritten with what Chapter3 does at each (LOCAL-4) and a fact behind each.
- "Rent roll" defined in plain words: the combined rent from every unit.
- The four-unit line: FHA's home loans stop at four units (row 20). The live "commercial at five" sentence becomes that sourced line.
- House hacking named and defined once ("you live in one unit and rent out the others"); readers search the word.
- The pros and cons, as one short list from facts: several rents from one purchase; one roof bill for every unit.
- Links: J-1 rentals, DSCR loans, VA loans, the long-term rental analyzer, the strategy hub.
- The FAQ questions people search (good investment; fourplex vs five units; live in one; down payment; run the numbers). Answers rewritten from rows, with no down-payment percentage.
- The offer "We will run the rent, the expenses and the association documents before you write an offer, at no cost" (S2) and the phone number 854.333.2135.

Cut: everything under "Struck from the live page" in facts.md; the "Why people do it / What can go wrong" boxes as boxes (one plain list instead); the two-card "2 to 4 units / 5 or more" graphic (one sentence carries it).

## The reader and their decision

A buyer who searched "duplex for sale myrtle beach" or "buying a duplex and living in one side". Often a first-time buyer or a mover; sometimes an investor from another state. They know a duplex has two rents. They do not know how few are for sale here, that most stand by the ocean and cost more there, what a unit rents for, that FHA and VA take up to four units if they live in one, or that an FHA loan bars nightly rentals. They fear buying a building whose rents do not carry it.

**Their decision:** buy a 2 to 4 unit building here, and which kind: a beach-block duplex near the ocean, or a cheaper one on an inland duplex street; live in one unit on FHA or VA, or buy as an investor. **The job, in one verb:** choose (a building, a place, a loan path). **Kind of page:** a decision guide with a how-to spine (CRAFT 3): the steps answer the H1 in the first screen; each section answers the searched question behind one step.

## The answer in two sentences

On November 10, 2026, 55 buildings of 2 to 4 units were for sale in Horry County at a middle asking price of about $680,000; 58 sold in the past year at about $520,000, and the ones within a quarter mile of the ocean sold for about $842,000. If you live in one unit, FHA or VA can finance up to four units with the same smallest down payment as a house, but an FHA loan bars rentals under 30 days.

(The page splits these into sentences of 28 words or fewer. The date and every number come from findings.json; none is typed.)

## Title, H1, italic line

- **Title** (59 characters): "Duplexes for Sale in Myrtle Beach: Prices, Rents, FHA Rules". It carries the top searched words. Alternative if the writer wants "fourplex": "Duplex and Fourplex in Myrtle Beach: Prices, Rents, FHA" (55).
- **H1** (kept): "How to buy a duplex or fourplex in Myrtle Beach".
- **Italic line** (the wow, row 8): "Three in four of Horry County's duplexes, triplexes and fourplexes stand within a mile of the ocean." (17 words.)
- **Description** (about 155 characters): the count for sale, the middle price, the rent of a 2-bedroom unit and the FHA rule, in plain words.

## The first screen

- H1, byline (Devin Day; reviewed by Tim Nash), italic line.
- **Short answer**: the two sentences above, as three or four short sentences.
- **Offer bar** (slim): "Tell us your budget and whether you will live in one unit. We send the buildings that fit." Button: "Send me buildings that fit" (#lead-form).
- The site's edge feed follows (idx-lib `MULTI`). New title proposed in BUILD.md.

## Sections, in order (each heading a question people search)

1. **How do you buy a duplex or fourplex in Myrtle Beach?** Five numbered steps, one or two lines each, each ending with what we do and a link down the page:
   1. Pick the kind of building and the place (rows 8, 11, 13). We send the buildings for sale in that place.
   2. Add up the rent roll (rows 15 to 17). An agent sets each unit's rent from current local leases and listings, at no cost (S1).
   3. Check the whole building: the seller's disclosure form (R1), the tax (row 32), any association documents (S2), insurance for every unit.
   4. Choose the loan path: live in one unit (FHA, VA, conventional; rows 20, 27, 28) or not (DSCR; row 29). We introduce our affiliated lender, BrickWood Mortgage, a separate company, for the numbers.
   5. Offer and close. For a triplex or fourplex on FHA, the rents must pass the self-sufficiency test first (row 23).
2. **How many duplexes are for sale in Myrtle Beach, and what do they cost?** Rows 1, 2, 4a, 9, 10. **Table V1** (one table, from findings.json): by mailing city, for sale now and middle ask, sold in 12 months and middle price (rows 3, 12; a cell under 5 is a count only). One line: about 4 in every 1,000 home sales in the county are a 2 to 4 unit building (row 9). Story `multifamily-listings` is confirmed by the count, not quoted.
3. **Where are the duplexes and fourplexes on the Grand Strand?** The wow section. It opens with row 8 (three in four within a mile of the ocean; about a third within a quarter mile). **Map V2**: our own static map (`tools/area-map.js`), every coded building as a small dot, the ten named groups labeled from their real points (row 13), the ocean, and a Google Maps link. **Chart V3** (`G.bars`, one message in the title): "Near the ocean, duplexes sell for more", the middle sale price by distance band with the count of sales on each bar (row 11). Then two short lists, one entry per group, each a headline, two or three sentences and a strip or offer:
   - **The beach blocks**: North Myrtle Beach's old beach towns, Cherry Grove Beach, Crescent Beach, Windy Hill and Ocean Drive (rows 13, W1; wow lines W2 and W4; Ingram Beach in the same list); **homes strip** "north-myrtle-beach-duplexes" (BUILD.md). Surfside Beach's Ocean Terrace and Ocean Pines (W5); Garden City (W6); **homes strip** "surfside-garden-city-duplexes".
   - **The inland duplex streets**: Tarpon Bay II (all duplexes), Windtree Estates (all fourplexes), A Place at the River in Little River, College Place II in Conway (rows 13, 14, 33). Their county values are lower, and more of them are taxed at the owner's 4 percent rate on all or part (row 33); the page states both counts and draws no conclusion about who lives there. Each entry ends with its fallback offer card naming the group; a place for one inland group is not proposed (the lead can check its count on the live map). The **homes strip** "myrtle-beach-duplexes" (BUILD.md, 11 buildings in the city) closes the list. Its 4-mile circle does not reach Windtree Estates or Tarpon Bay II, so its title names the city only. Before naming a road, a community or "near the university", the writer measures it (CRAFT 2); College Place II links /invest/student-rentals/ only if the measure holds.
   - The offer between the lists: "Want a building near the beach or a cheaper one inland? Tell us which, and we send the ones for sale." Button: "Send me buildings in my area".
4. **What does a duplex unit rent for in Myrtle Beach?** Rows 15, 16, 17. Three plain lines, not a chart: a 2-bedroom unit about $1,000 lease rent (about $1,135 with utilities); all units about $950; a house about $1,400 for comparison. One sentence links /invest/rent-prices/ for rents by ZIP and what landlords ask now (row 18). S1 as the what-we-do line.
5. **Is a duplex a good investment in Myrtle Beach?** The worked example (row 31), labeled as an example: about $24,000 a year of rent on a duplex at the middle price of about $512,000, about 4.7 percent before costs; about $256,000 a home, against about $350,000 for a resale house and $215,000 for a resale condo. Then the trade-off from rows 11 and 14: a beach-block building costs more and many rent by the week; an inland one costs less per home. A short list of the good and the hard (several rents from one purchase; one vacancy is not all the income; one roof or air system serves every unit; more tenants). One line each links /invest/run-the-numbers/ and the analyzer (S3). **Offer**: "Have us run the rents and costs on one building" (S2).
6. **Can you live in one unit and rent the others? FHA and VA in Horry County.** House hacking defined once. Rows 20, 22, 26 (no percentage), 27, 28 (no percentage). **Table V5**: FHA's 2026 loan limits in Horry County for 1, 2, 3 and 4 units (row 21), with row 4a under it (28 of 55 ask less than the two-unit limit). The tax line: the owner's unit at 4 percent, the rented units at 6 percent, linking /buyers/property-taxes/ (row 32), and our count (row 33): about 1 in 6 buildings here is already taxed at the owner's rate on all or part. One sentence each links /buyers/va-loans/, /buyers/first-time-home-buyer-myrtle-beach/ and, for the buyer who will not live there, /invest/strategies/dscr-loans/ (row 29). **Offer**: "Have us get the loan numbers on one building", with the line "We work with our affiliated lender, BrickWood Mortgage, a separate company, to get real numbers for one building." No rate, no payment, no down-payment percentage (BIZ-4).
7. **What is the FHA self-sufficiency test for a triplex or fourplex?** Rows 23, 24. **Worked box V6** (row 30), in rent only: four units at about $1,000 bring in about $4,000; FHA counts about $3,000; the payment, tax and insurance must fit inside the rent FHA counts. Three months of payments in savings (row 24). A duplex does not take the test.
8. **Can you Airbnb a duplex in Myrtle Beach?** Row 25: on an FHA loan, no rental of any unit under 30 days. Town rules: one sentence linking /invest/str-rules/. Summer workers who rent by the person: one sentence linking /invest/j1-rentals/ (story `j1-multifamily-audience` stays on that page).
9. **Frequently asked questions** (open text, each answer two or three sentences, none repeating a section): What is the FHA loan limit for a duplex in Horry County? (row 21). Can you use a VA loan on a duplex? (row 27). How much down payment does a duplex need if you live in it? ("the same smallest down payment as a one-unit home", rows 26, 28; the lender gives the numbers). Is a fourplex a commercial property? (row 20: FHA's home loans cover up to four units). Does the seller of a duplex have to give a disclosure form? (R1). Can a city cap the rent? (R2).
10. **End offer band**: "Send us an address, or tell us the kind of building you want. We run the rent, the expenses and any association documents before you write an offer, at no cost." Phone 854.333.2135.

"On this page" list (short labels): Steps, For sale, Where, Rents, Worth it, Live in one, FHA test, Airbnb, Questions.

## Visuals (each readable at a glance)

| # | What | One message | Built from |
|---|---|---|---|
| V1 | Table by town: for sale now, middle ask; sold in 12 months, middle price | North Myrtle Beach has the most, and the highest prices | findings.json for_sale.horry_by_town, sold.by_town |
| V2 | Static map: every 2 to 4 unit building as a dot, the named groups labeled | Most stand by the ocean | RAW points through findings (the writer adds a points export of rounded coordinates, no PIN, to the data folder, or draws group centers only) |
| V3 | Bar chart: middle sale price by distance from the ocean, with sale counts | Near the ocean, duplexes sell for more | findings.json sold.ocean_bands |
| V5 | Table: FHA 2026 loan limits by units | FHA's limit rises with each unit, to about $1.04 million for a fourplex here | facts row 21 (typed values tied by a `must()` check to the ledger) |
| V6 | Worked box: four rents, less 25 percent | The rent FHA counts, in dollars of rent | findings.json worked_example.fha_self_sufficiency_fourplex |

No other chart. The rents are three lines of text. The price-per-home comparison is one sentence.

## Homes strips

The edge feed under the opening (MULTI), and three strips in section 3, one per group of places. New places and the feed change are in BUILD.md for the lead (idx-lib and idx-places.json are outside this page's folder). Until they land, each strip's slot is empty and its fallback offer card shows. A page with slots needs `withStrips: true` on its feed, or the edge feed is left off the page (1031 BUILD note).

## Offers (no two alike; every button links /contact/ or #lead-form, and the site opens the short pop-up)

| Where | Headline | Button |
|---|---|---|
| Top bar | Tell us your budget and whether you will live in one unit. We send the buildings that fit. | Send me buildings that fit |
| Section 3, between the lists | Near the beach or cheaper inland? Tell us which, and we send the ones for sale. | Send me buildings in my area |
| Section 5 | Have us run the rents and costs on one building, at no cost. | Run the numbers on a building |
| Section 6 | Have us get the loan numbers on one building, from our affiliated lender, BrickWood Mortgage, a separate company. | Get the numbers for a building |
| Section 7 | Have us check a triplex or fourplex's rents against FHA's test before you offer. | Check a building's rents |
| End band | Send us an address, or tell us the kind of building you want. | Send us a building |

Strip fallbacks: "See duplexes for sale in North Myrtle Beach" and the like, each naming its place.

## Owner questions (only what nothing else answers)

- Do our agents set the rent for each unit of a 2 to 4 unit building the way S1 says for a house? Proposed answer: yes, the same service; the page says "each unit".
- The live page's "Chapter3 has sold in all three Grand Strand pockets": keep only if the owner confirms where. Proposed: cut (done in the plan).

## Checks before the writer drafts

- The verifier confirms rows 5 and 33 (method flags) or gives the fallback wording.
- The writer measures any place word added to rows 13 and 14 (a road, a community, the university).
- Claims scan for down payment, rate and payment words; the page is consumer (owner-occupied) credit, not on DOWN_PAYMENT_OK_PAGES.
- Referring pages: 6 today (`tools/inbound.js`). Add one each from /invest/rent-prices/ (rents in 2 to 4 unit buildings), /buyers/va-loans/ (the up to 4 units line), /submarkets/north-myrtle-beach/ (the beach-block duplexes) and /buyers/first-time-home-buyer-myrtle-beach/ (FHA on a duplex), on words already there where possible. Those pages belong to other batches: list them in BUILD.md for the lead.
