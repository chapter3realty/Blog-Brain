# Must-answer list: /invest/condo-buildings/ (Lane U, batch 2026-11-b)

Sources read 2026-11-09:
- Google suggestions for 50 seeds: website copy `data/2026-11-b/invest-condo-buildings/raw/google-suggestions-2026-11-09.txt` (`pull-suggestions.sh`).
- Search Console, last 28 days (scratch `gsc/Pages.csv`, `gsc/Queries.csv`): the page had 1 click from 258 showings at position 9.8. Queries are site-wide, not per page.
- The triage row (`reports/triage-2026-11-08.md`) and the cannibalization map (`reports/cannibalization-2026-11-08.json`).
- `stories/stories.json`: no story names an oceanfront building. The one condo story (three units in one oceanfront building, `/invest/condos/` row 29) belongs to `/invest/condos/`.

## The one question

**"Oceanfront condos for sale in Myrtle Beach: which building, and what does each one charge a month?"** The title words people search are "oceanfront condos for sale", "Myrtle Beach", "North Myrtle Beach", "HOA fees" and the building's own name.

## What people search, ranked

| # | Search (as typed) | Evidence | Likely reason behind it | Where the page answers |
|---|---|---|---|---|
| 1 | oceanfront condos for sale myrtle beach; myrtle beach oceanfront condos for sale; north myrtle beach oceanfront condos for sale; condos for sale in myrtle beach oceanfront | Top suggestion for every seed; GSC "condos for sale in myrtle beach oceanfront" at 5, "north myrtle beach condos for sale" at 3 | They want to see units and pick a building. Many have stayed in one of these resorts on vacation. | The directory, one entry per building, each with a homes strip of its units for sale |
| 2 | "[building] condos for sale" for Caravelle, Bay Watch / Baywatch, Dunes Village, Landmark, Sea Mist, Coral Beach, Kingston Plantation (Margate, South Hampton), Prince Resort, Ocean Creek, Sand Dunes, Caribbean, Camelot, Breakers, SeaWatch, Grande Cayman, Ocean Reef, Island Vista, Compass Cove, Myrtle Beach Resort | Each seed returned "... myrtle beach condos for sale", "... by owner", "... zillow" | They know the building's name already and want its units, price and fee | That building's entry and its strip; the building's name is its entry heading |
| 3 | myrtle beach condo hoa fees; myrtle beach condos with low hoa fees; north beach plantation hoa fees; margate tower hoa fees (no suggestion, but the page title promises it) | Suggestions; triage | The fee is the second number after price; they want it by building, and which buildings charge least | The fee table (every building, with the count behind it) and the fee line in each entry |
| 4 | cheap oceanfront condos myrtle beach; ... north myrtle beach; myrtle beach condos for sale under 100k / under 200k; beachfront condos for sale under 100k | Suggestions | A budget buyer, often for nightly rentals. They need to know which buildings sell under $100,000 and what the fee is next to that price. | A "lowest price" group in the selection guide; the county sale prices by building; the fee as a share of the price |
| 5 | oceanfront condos myrtle beach pet friendly | Suggestion | A dog owner who wants to stay in the unit | Pets-allowed share per building, from listings, as a line where it is clear |
| 6 | 2 bedroom condo north myrtle beach oceanfront for sale | Suggestion | A family; studios dominate the cheap towers | Bedroom mix per building (from the listings) where it changes the choice |
| 7 | best condo buildings in myrtle beach; best condo buildings in north myrtle beach; best condos to buy in myrtle beach | Suggestions | "Which one should I look at?" | The selection guide by feature (lowest fee, lowest price, biggest units, a resort with the most to do, a quiet tower). Never a verdict on a company. |
| 8 | myrtle beach condo hotels (for sale); condotel | Suggestions; GSC "condotel financing" 35 | What the word means, and whether they can get a loan | Two sentences and a link: `/invest/condotel-financing/` owns the loan question |
| 9 | holiday towers condos; landmark resort | GSC (11 and 1 showings) | A building name | Holiday Towers is not one of the 47 (11 showings; add it only if its searches grow). Landmark has an entry |
| 10 | which oceanfront buildings sell the most | `/submarkets/myrtle-beach/` H2; the cannibalization fix moves it here | Liquidity: "can I sell it later?" | Chart of recorded sales by building, past year, from county deeds |

## The deciding fact

**Can every building's monthly fee be filled from listings for sale now, counted in aggregate?** Run 2026-11-09 (`pull_building_fees.py`, facts.md row 1): **yes.** 26 of the 28 July buildings still in the MLS feed have a fee from 3 or more units for sale; the other two (Island Vista, Ocean Drive Beach & Golf) have no units for sale this week. With 19 added buildings, 45 of 47 have a fee. A building with fewer than 3 listings that give a fee gets no figure, and the page says so in words ("Too few units for sale this week to give a fee"). The title keeps "HOA Fees Compared": it is now true.

## What siblings already own (do not take their search)

| Search | Owner | This page does |
|---|---|---|
| are oceanfront condos in myrtle beach a good investment (100 showings, position 4.3) | `/invest/condos/` | No investment verdict, no price trend, no yearly cost-to-own worked example. One sentence and a link. |
| HOA fees Myrtle Beach (by kind of home); what HOA fees cover; why fees are so high | `/hoa/` | Fees of named oceanfront buildings only. The hub's oceanfront median ($920) is cited once, with a link. Keyword "oceanfront condo HOA fees Myrtle Beach" (cannibalization fix). |
| condotel financing; non-warrantable condo; FHA on a condo | `/invest/condotel-financing/` (merged with `/invest/non-warrantable-condos/` per the cannibalization fix) | Cut the financing H2 to two sentences plus "Which loans close on these buildings is on our condotel financing page." |
| which buildings have rental programs; program vs Airbnb | `/invest/rental-program-vs-airbnb/` | No rental-program table. One link. |
| what a Myrtle Beach Airbnb earns | `/invest/airbnb-income/` | No income figures. |
| reserves, special assessments, master insurance | `/hoa/reserves/`, `/hoa/special-assessments/`, `/hoa/master-insurance-ho6/` | One link where the fee section names them. |
| selling a condo | `/sell/sell-my-condo/` | One link in the FAQ. |
| living in Myrtle Beach / North Myrtle Beach | `/submarkets/myrtle-beach/`, `/submarkets/north-myrtle-beach/` | Building-level only. Ask those pages to link here ("All the oceanfront buildings, with their fees"). |
