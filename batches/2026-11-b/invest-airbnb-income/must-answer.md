# Must-answer list: /invest/airbnb-income/ (batch 2026-11-b)

Researcher, 2026-11-09. Inputs:
- Search Console, the owner's two exports (28 days; and Oct 27 to Nov 6 against Oct 16 to 26). The lines for this topic and the page rows are copied to `<web>/data/2026-11-b/invest-airbnb-income/raw/gsc-airbnb-queries.txt`.
- Google search suggestions for 36 queries, read 2026-11-09: `raw/google-suggestions-2026-11-09.txt` (`pull-suggestions.sh`). Also the 52 queries /invest/str-tools/ read on 2026-11-01 (`data/2026-10-d/invest-str-tools/raw/google-suggestions-2026-11-01.txt`).
- The triage row (`reports/triage-2026-11-08.md`, "Rebuild the content") and the cannibalization report (`reports/cannibalization-2026-11-08.json`, the cluster "how much do Airbnbs make in Myrtle Beach / Airbnb profit and income").
- The live page, read 2026-11-09. **There is no spec.** The page is hand-built HTML (a grep of `specs/` for the URL finds only pages that link to it).
- The siblings, read live 2026-11-09: /invest/str-tools/, /invest/str-vs-ltr/, /invest/rental-returns/, /invest/rental-program-vs-airbnb/.
- Stories: `boston-hotel-manager`, `str-cheapest-cleaner`.

"People also ask" is not reachable from this session (no browser on google.com). The suggestion lists stand in for it.

## What Search Console says

The page: 1 click from 108 showings in 28 days, average position 6.9. In the compare file it fell from 56 showings (Oct 16 to 26) to 29 (Oct 27 to Nov 6), position 6.7 to 7.6. It ranks on the first page and is not clicked. The likely cause is the title, "How Much Do Myrtle Beach Airbnbs Make? $25,800 to $42,000": a range of two vendors' numbers, which the page then says do not agree.

Site queries on this topic (28 days; none got a click):

| Query | Shown | Position | Notes |
|---|---|---|---|
| myrtle beach airbnb data | 11 | 21.7 | 8 of them in the latest 11 days. The reader wants the numbers. |
| how much can i make renting out my home in myrtle beach | 3 | 5.3 | The page's own question, in the reader's words. |
| what's included in a typical vacation rental in myrtle beach | 20 | 58.8 | Guest-side; not this page. |
| who can help me sell a condo with rental income in myrtle beach? | 6 | 7 | /sell/sell-my-condo/ owns it. |
| short-term rental rules queries (legal requirements, regulations 2025, myrtle beach short-term rental) | 22 | 7 to 30 | /invest/str-rules/ owns them. |
| "are there airbnbs available in north myrtle beach", "can i airbnb my house" | 1 each | 1 to 6 | Rules, not income. |

Sibling pages, 28 days: /invest/str-rules/ 610 showings, 1 click; /invest/str-tools/ 75, 0 (position 18.0); /invest/str-vs-ltr/ 27, 0; /invest/rental-program-vs-airbnb/ 13, 1; /invest/rental-returns/ 1.

## What Google suggests

- The question itself: "myrtle beach average airbnb gross income" (offered for both "myrtle beach airbnb income" and "myrtle beach average airbnb"). Google already words the answer as "average" and "gross".
- Per month and per year: "how much does an airbnb make a year", "per month", "average airbnb income per month", "average airbnb profit per month", "average airbnb revenue per month", "how much do airbnb hosts make on average per month".
- Profit: "is airbnb profitable for hosts", "is airbnb profitable in 2026", "is myrtle beach good for airbnb", "is myrtle beach a good airbnb investment", "how much does an airbnb host make".
- Occupancy: "myrtle beach airbnb occupancy rate", "what is a good occupancy rate for airbnb".
- What comes off: "what percentage does airbnb take", "how much do airbnb hosts make percentage", "average airbnb fees".
- The market: "myrtle beach airbnb market", "airbnb growth rate".
- Condos: "myrtle beach condo rental income", "myrtle beach vacation rental income", "myrtle beach vacation rental property management".
- Town names with "airbnb" (North Myrtle Beach, Surfside Beach, Murrells Inlet, Garden City) return guest searches (oceanfront, pool, pet friendly), not income. Town income queries return nothing. The reader who types "Myrtle Beach" means the Grand Strand; the page answers town by town under that search.

## Why people type it

1. **A buyer pricing a rental** before an offer: "what would this condo or house take in?" They want a number for the kind of home they are looking at (a two-bedroom oceanfront condo, a four-bedroom house), not a market average across studios and mansions.
2. **An owner deciding whether to rent their place nightly** ("how much can I make renting out my home"): same number, plus what comes off.
3. **Someone who read a vendor's figure** (AirDNA, AirROI) and wants to know if it is real: is the average the typical result, and what is left after the costs?

What they would pay an expert to tell them: what a home of their size takes in where they are buying; what the middle listing does, not only the average; how much of it is summer; what is left after Airbnb, the cleaner, the HOA fee and the tax; whether a manager eats the rest.

## The must-answers, ranked

1. **How much does an Airbnb make in Myrtle Beach, a year and a month?** The average per listing for the Myrtle Beach area and each town, and the middle range a month. (Rows 2, 9.)
2. **How much does a two-, three- or four-bedroom make?** By size, town by town. This is the answer a buyer can use. (Rows 5 to 8.)
3. **Which town's Airbnbs make the most, and why?** Murrells Inlet's average is nearly twice Myrtle Beach's, but for the same two-bedroom the towns are close. The difference is the homes, not the town. (Rows 4, 7.)
4. **How much is summer, and how slow is winter?** By month. (Rows 11, 12.)
5. **How much do you keep?** One worked example from gross to what is left, the same arithmetic and the same two condos as /invest/str-tools/. (Rows 14 to 20.)
6. **What does a manager take?** One scale, with what it is charged on. (Rows 21 to 23.)
7. **What occupancy should you expect?** One line with the town's figure; the nights-to-break-even question belongs to /invest/str-tools/. (Row 2.)
8. **Is Myrtle Beach a good Airbnb investment / is it profitable?** Answered with rows 19 and 20 (one condo falls short, one pays its bills) and row 28 (more hosts), then the link to the return pages. No verdict on the market.

## The deciding fact

**Can one source give the gross by area and by size, and a gross-to-net that matches /invest/str-tools/?** Yes. `data/str-market.json` (AirROI's October 1, 2026 update, 12 months to September 2026) holds every town's average, listings, occupancy, nightly rate, the monthly tiers and the peak and low months. The size rows and months are in the same AirROI update as saved by /invest/str-tools/, and `analyze.py` checks every shared figure against str-market.json before using them (rows 1, 2, 5). The worked example reruns str-tools' own arithmetic on its two condos and stops if it drifts from what that page prints (rows 19, 20). The old page's contradiction ("net a third to half" against its own $1,600) goes because every net figure now comes from one method.

## What the siblings own (do not take their search)

| Search | Owner | This page |
|---|---|---|
| How much do Airbnbs make in Myrtle Beach (gross, by area, size, month) | **this page** (cannibalization map) | The whole answer. |
| How many nights pay the bills; Airbnb calculator; Myrtle Beach Airbnb occupancy rate | /invest/str-tools/ | One worked example that matches it, then a link: "Run your own condo through our Airbnb calculator." No calculator here. |
| Airbnb or a long-term lease; what the same two-bedroom earns each month both ways | /invest/str-vs-ltr/ | One sentence and a link. No lease figures here. |
| Cap rate; what return a nightly rental makes | /invest/rental-returns/ | One sentence and a link. No cap rate, no price-to-income ratio. |
| Rental program or run it yourself | /invest/rental-program-vs-airbnb/ | The 38.6 percent desk share once, in the manager line, with a link. |
| What a manager costs | /invest/property-management/ | The published 10 to 25 percent once, with a link. |
| Where an Airbnb is allowed; licences | /invest/str-rules/ | One FAQ line and a link. |
| What tax the guest pays | /invest/accommodations-tax/ | One FAQ line and a link. |
| How income is taxed | /invest/str-tax-treatment/ | Link only. |

Sibling sentences that now compete or disagree are listed in PLAN.md, "For the lead".
