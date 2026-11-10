# Must-answer list: /invest/strategies/small-multifamily/ (batch 2026-11-b)

Researcher, 2026-11-10. Inputs:
- Google search suggestions for 32 queries, read 2026-11-10: `<web>/data/2026-11-b/invest-strategies-small-multifamily/raw/google-suggestions.txt` (made by `pull-suggestions.sh` in the same folder).
- Search Console: the triage row gives the page 0 clicks from 31 showings in 28 days. No query export for this page is in the repo (`reports/` holds none; the 1031 export has no duplex query). The suggestion lists stand in for it.
- "People also ask" is not reachable from this session (no browser on google.com).
- The triage row (`reports/triage-2026-11-08.md`, "Rebuild the content") and the cannibalization report (`reports/cannibalization-2026-11-08.json`). No cluster names this page; the clusters on rents, 4% vs 6%, financing a second rental, DSCR, 1031, where to buy and the calculators name the siblings below.
- The live page, read 2026-11-10. It has no spec; it is hand-built HTML (`chapter3realty/invest/strategies/small-multifamily/index.html`). The edge feed is `MULTI` in `idx-lib/feeds.js` ("Duplexes, triplexes and fourplexes", active, $250,000 and up).
- Stories: `multifamily-listings` (usable-with-limits: date it or recount; recounted, facts row 1), `j1-multifamily-audience` (investor pages only; the J-1 page owns it), `strategy-mix`, `cap-rate-not-finishes`.

## What Google suggests

- **Homes for sale, by place.** "duplex for sale myrtle beach (sc)", "multi family homes for sale myrtle beach", "multi family homes for sale north myrtle beach sc", "2 family homes for sale in myrtle beach sc", "triplex for sale myrtle beach", "duplex for sale north myrtle beach", **"oceanfront duplex north myrtle beach"**, "duplex for sale surfside beach (sc)", "duplex for sale conway sc", "duplex for sale horry county (sc)", "myrtle beach multifamily market".
- **Renting by the night.** "myrtle beach duplex vacation rentals", "can i airbnb my duplex".
- **Living in one side.** "buying a duplex and living in one side", "buying a duplex and renting half", "buying a duplex as a first home", "how to buy a duplex and rent out half", "house hacking a duplex", "is house hacking a duplex worth it".
- **FHA.** "fha duplex loan limit", "fha duplex rental income", "fha duplex requirements", "fha duplex down payment", "fha loan duplex owner occupied", "fha 4 unit loan limit", "fha 4 unit reserve requirements", "fha self sufficiency test", "fha self sufficiency test for 3 4 unit properties", "fha self sufficiency test calculator".
- **VA.** "va loan duplex", "va loan duplex requirements", "does va loan cover duplex", "va duplex loan limit".
- **Money down.** "duplex down payment", "owner occupied duplex down payment", "conventional duplex down payment", "duplex down payment fannie mae".
- **Is it worth it.** "is a duplex a good investment (property)", "duplex vs single family home investment", "condo vs duplex investment", "how much does a duplex cost (to buy)", "how much does a duplex cost to rent".
- **Other.** "how to buy a duplex with no money down", "buying a duplex with tenants", "duplex insurance cost", "small multifamily investing".

## The reader

Two readers type these words, and the page serves both in the same order.

1. **The buyer who would live in one unit** (most of the suggestion list: "living in one side", FHA, VA, "as a first home"). Often a first-time buyer or a mover to the coast. They know a duplex has two rents. They do not know what a duplex costs here, whether there are any for sale, what a unit rents for, that FHA and VA take 2 to 4 units, that FHA forbids nightly rentals on the building, or that a 3- or 4-unit building must pass a rent test. They fear buying a building whose rents do not cover it, and getting a loan rule wrong.
2. **The investor who wants several rents in one purchase** ("duplex for sale myrtle beach", "oceanfront duplex north myrtle beach", "vacation rentals", "is a duplex a good investment"). Often from another state. They want to see what is for sale, where, and what it earns.

Why they type it:
- "duplex for sale myrtle beach" / "multi family homes for sale": they want to see the buildings. The live strip under the opening answers it; the page adds how many there are, what they ask and where.
- "oceanfront duplex north myrtle beach": they want a beach building, likely to rent by the week. The page shows where the beach-block duplexes are and what they sell for, and sends the rental rules to /invest/str-rules/.
- "buying a duplex and living in one side": they want the cheapest way to own a rental. The page answers which loans allow it, the one-year occupancy rule, and the no-nightly-rentals rule on FHA.
- "fha duplex loan limit": they want the Horry County number. It is one table row.
- "fha self sufficiency test": a lender told them their fourplex must pass it. The page explains it with a worked example in rent, never in payments.
- "is a duplex a good investment": they want a local yes or no, with numbers. The page gives the rent against the price from our own counts.

## The top questions, ranked, with the answer source

| # | Question (searched words) | Answer from |
|---|---|---|
| 1 | How do you buy a duplex or fourplex in Myrtle Beach? (the H1 the page keeps) | Steps, each with what Chapter3 does (LOCAL-4); rows 1 to 6, 15 to 25 |
| 2 | How many duplexes are for sale in Myrtle Beach, and what do they cost? | Our count of the MLS "2 to 4 units" type (rows 1 to 4) and county deed sales (rows 9 to 12) |
| 3 | Where are the duplexes and fourplexes on the Grand Strand? | Our count of county parcels (rows 5 to 8, 13, 14): three in four within a mile of the ocean; the beach blocks and the inland duplex streets |
| 4 | What does a unit in a duplex rent for here? | Census PUMS for 2 to 4 unit buildings (rows 15 to 18); ZIP asking rents carried from /invest/rent-prices/ (row 19) |
| 5 | Can I live in one unit and rent the others? FHA and VA rules | HUD Handbook 4000.1 (rows 20 to 26); VA (row 27); conventional (row 28, ledger only) |
| 6 | What is the FHA self-sufficiency test (3 and 4 units)? | HUD 4000.1 (row 23); worked example in rent (row 30) |
| 7 | What is the FHA loan limit for a duplex in Horry County? | HUD CY2026 limits (row 21) |
| 8 | Can I Airbnb my duplex? | FHA form 92561 bars rentals under 30 days on an FHA 2 to 4 unit loan (row 24); town rules belong to /invest/str-rules/ (link) |
| 9 | Is a duplex a good investment in Myrtle Beach? | Worked example: rent roll against the median sale price (row 30); price per unit against a condo (row 31) |
| 10 | Duplex property tax in SC (owner lives in one unit) | One sentence, the 4% on the owner's unit and 6% on the rest (rows 32, 33); /buyers/property-taxes/ owns 4% vs 6% |

## The deciding fact

**There are enough 2 to 4 unit buildings here to make a page, and they can be counted.** Checked first (rows 1, 5, 9): 55 buildings for sale in Horry County on the MLS "2 to 4 units" type on 2026-11-10; 1,268 parcels the county codes as two-, three- and four-family buildings; 58 of them sold in the year to September 30, 2026. Without these the page would stay generic advice.

The second fact the plan rests on: **FHA and VA take 2 to 4 units when the buyer lives in one** (rows 20, 27). Checked in HUD Handbook 4000.1 (Update 18, issued August 12, 2026) and the VA purchase page.

## What siblings already own (do not take their search)

| Search | Owner | This page does |
|---|---|---|
| Myrtle Beach rent prices, rental market | /invest/rent-prices/ | Uses one new figure only it has (rent in 2 to 4 unit buildings) and links for everything else |
| 4% vs 6% property tax | /buyers/property-taxes/ | One sentence on the split for an owner who lives in one unit, plus the link |
| Rental property calculator, DSCR calculator, cap rate | /invest/long-term-rental/, /invest/rental-returns/ | Links the analyzer once; no cap-rate table |
| How to analyze a rental deal, 1 percent rule | /invest/run-the-numbers/ | One worked example on a duplex; links for the full method |
| DSCR loan Myrtle Beach | /invest/strategies/dscr-loans/ | One sentence for the buyer who will not live there, plus the link |
| How to finance a second rental | /invest/financing-multiple-rentals/ | No section on it; link once |
| VA loans Myrtle Beach | /buyers/va-loans/ | One row on 2 to 4 units; link |
| First-time buyer, FHA in general | /buyers/first-time-home-buyer-myrtle-beach/ | Only the 2 to 4 unit rules of FHA; link for the rest |
| Short-term rental rules, can you Airbnb in Myrtle Beach | /invest/str-rules/ | One sentence plus the FHA 30-day rule, which is about the loan, not the town |
| J-1 housing | /invest/j1-rentals/ | One sentence plus the link |
| Student rentals near CCU | /invest/student-rentals/ | One sentence if Conway's duplex street near the university is named; link |
| 1031 exchange | /invest/strategies/1031-exchange/ | Link once; that page already carries the duplex strip |
| Myrtle Beach investment property; where to buy a rental | /invest/, /invest/where-to-buy/ | Nothing; links only |

This page owns: "duplex / triplex / fourplex / multi family for sale Myrtle Beach (and North Myrtle Beach, Surfside Beach, Horry County)", "how to buy a duplex in Myrtle Beach", "house hacking Myrtle Beach", "FHA duplex Horry County", "FHA self-sufficiency test", "oceanfront duplex North Myrtle Beach". No other page claims these. The /homes/near/ places it uses are `index: false`, so they do not compete with it.
