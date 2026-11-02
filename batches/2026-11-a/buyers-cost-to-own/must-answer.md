# Must-answer list: /buyers/cost-to-own/

Researcher, 2026-11-02. Built from Google search suggestions pulled 2026-11-02 (40 seed queries, raw file `<web2>/data/2026-11-a/buyers-cost-to-own/raw/google-suggestions.txt`, script `pull-suggestions.sh` beside it), the judge's notes on the live page (`audit/judged-2026-10-31.json`), the stories bank and the reader's job for a cost page (`reports/Page shapes by kind of page.md`, section 2).

Search Console was not available to this stage. The local seeds ("cost to own a home in myrtle beach", "cost of owning a condo in myrtle beach", "condo vs house cost myrtle beach", "cost of owning a second home in myrtle beach", "average hoa fee horry county") return no suggestions: few people type the whole question. They type its parts. So the page must answer each part by name and then add them up.

## The reader

A buyer, often moving here or buying a second place, who has a price in mind and wants to know what the house or condo will cost each year on top of the loan. They do not know the 4 and 6 percent tax rule, the wind and flood split, or why condo fees here run high. They are worried about a surprise bill after closing. Next they will ask: house or condo, which town, and can I afford it.

Why they type it: "true cost of owning a home" and "hidden costs" are typed by someone who has already seen a payment from a lender and suspects it is not the whole cost. The page's job is the rest of the cost, in dollars.

## The list, in order (rank = how many suggestions point to it)

| # | What the reader needs | Search words to use once | Suggestions that point to it |
|---|---|---|---|
| 1 | **The total.** What a typical house and a typical condo here cost a year besides the mortgage, in dollars, with the parts named. | "true cost of owning a home", "hidden costs", "per year", "monthly" | true cost (10), monthly cost (10), hidden costs (10), per year, average cost per year, total cost |
| 2 | **Property tax** on a typical home, as your home and as a second home, and why the gap is so large. Per town. | "property tax", "Horry County property tax", "second home" | property taxes myrtle beach (10), horry county property tax (10), calculator (10), second home (2), "rate by zip code" |
| 3 | **Homeowners insurance:** what owners here really pay, against the rest of South Carolina, and why wind can be a separate policy. | "homeowners insurance Myrtle Beach", "wind and hail" | homeowners insurance myrtle beach (10), average sc (4), how much in sc (10), wind and hail (4) |
| 4 | **HOA and condo fees:** what a house and a condo fee usually is, by area, and why condo fees are high. | "HOA fees", "condo fees", "why are HOA fees so high" | myrtle beach condo hoa fees (5), average hoa fees (5), "why are hoa fees so high in myrtle beach" (2) |
| 5 | **Flood insurance:** do I need it, and what it costs in and out of the high-risk zone. | "flood insurance cost" | flood insurance myrtle beach cost (4), "is flood insurance expensive" |
| 6 | **Upkeep:** how much to budget a year, and what the big replacements (roof, air conditioning, water heater) cost. | "home maintenance cost per year", "how much to budget" | home maintenance cost per year (8), how much to budget (10) |
| 7 | **Utilities:** the electric and water bill. | "average electric bill Myrtle Beach", "water bill" | average electric bill (2), utility bill (4), water bill (10) |
| 8 | **Condo or house:** which costs less to own here, in dollars. | "cheaper to own a condo or house" | is it cheaper to own a condo or house (10) |
| 9 | **Second home or rental:** what changes in the yearly cost when you do not live in it. | "cost of owning a second home" | true cost of owning a second home, hidden costs of owning a second home, cost of owning a beach house (2) |
| 10 | **The surprise bills:** the tax bill jump the year after you buy, the flood or wind policy the lender asks for, a special assessment. | "hidden costs", "unexpected costs" | unexpected costs of owning a home, hidden costs reddit |
| 11 | **Is Myrtle Beach expensive to own in?** One plain comparison with the rest of South Carolina. | "is it expensive to live in Myrtle Beach" | is it expensive (10), cost of living (10) |
| 12 | **What goes in the monthly payment** (PITI), and what does not. No payment amount and no rate. | "PITI" | piti calculator; live page FAQ |
| 13 | **Lower it:** the 4 percent application, the 65 and over exemption, the quote before you offer. | | owner's service (story `insurance-quote-before-offer`) |
| 14 | **Get my own number:** the calculator, with every default sourced. | "calculator" | cost to own a home calculator, true cost calculator, total cost calculator |

## The deciding fact

Can the page say, from verified public data, "a typical house here costs about $X a year besides the mortgage", with every part sourced? The live page could not: insurance was a placeholder and upkeep was a rule of thumb. This stage found a source for each part (ledger rows 1 to 22). It holds.

## What is out of scope

- Any mortgage payment, rate or down payment (owner rule; the calculator asks for the reader's own).
- Closing costs (owned by /buyers/closing-costs/).
- How the tax bill is computed line by line, and how to apply (owned by /buyers/property-taxes/; this page gives the dollars and links).
- The wind pool rules and policy shopping (owned by /buyers/coastal-insurance/).
- Car tax and other living costs (owned by the relocating pages).
