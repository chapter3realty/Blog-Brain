# Must-answer list: /market-reports/ (batch 2026-11-b, the market reports hub)

Researcher, 2026-11-10. Inputs:
- Google search suggestions for 20 market searches: `<web>/data/2026-11-b/market-reports/raw/google-suggestions.txt` (`pull-suggestions.sh`, run 2026-11-10).
- Search Console, the owner's export in `scratchpad/gsc/` (Queries.csv, Pages.csv; 28 days to 2026-11-06).
- The triage rows for /market-reports/, /market-reports/july-2026/ and /market-reports/2026-election/ (`reports/triage-2026-11-08.md`).
- The cannibalization report (`reports/cannibalization-2026-11-08.json`), clusters "Myrtle Beach housing market / are home prices dropping / is it a buyer's market", "2026 election", "Act 388", "first-time buyer".
- The live page (`chapter3realty/market-reports/index.html`, hand-made, no spec) and the H1, H2s and titles of nine siblings, read 2026-11-10 in the working copy.

"People also ask" is not reachable from this session (no browser on google.com). The suggestion lists stand in for it. The top three search results were not read for the same reason.

`<web>` = the website working copy, `scratchpad/wt-live`.

## What Search Console says

| Query or page | Shown (28 days) | Position | Note |
|---|---|---|---|
| /market-reports/ (page) | 9 | 7.7 | 0 clicks. Google shows it, and it has no number to give. |
| /market-reports/july-2026/ (page) | 3 | 4.0 | 0 clicks. |
| myrtle beach housing | 4 | 14.8 | Evergreen. Owned by /buyers/buying-in-myrtle-beach/. |
| housing in myrtle beach | 2 | 13.5 | Same. |
| myrtle beach real estate market | 1 | 3.0 | Close to this page's term. Take it only with the dated word "report". |
| myrtle beach rental market | 43 | 23.5 | Not this page: /invest/rent-prices/ and /invest/airbnb-income/. |

Search Console has almost no market traffic yet. The suggestions below carry more of the demand.

## What Google suggests

- "myrtle beach housing market" gives: "predictions", "forecast", "update", "crash", "predictions 2025", "real estate market outlook 2025", "housing prices".
- "myrtle beach real estate market" gives: "predictions", "outlook 2025", "update", "real estate trends", "price trends", "north myrtle beach real estate market", "surfside beach sc real estate market", "market commons myrtle beach real estate".
- "myrtle beach median home price" gives: "myrtle beach average home price", "north myrtle beach median home price", "myrtle beach sc average home price".
- "myrtle beach home prices" gives: "dropping", "condo prices", "real estate prices", "home cost", "price trends".
- "myrtle beach condo market" gives: "myrtle beach condo market crash".
- "is myrtle beach housing market crashing" gives: "myrtle beach housing market crash".
- "horry county housing market" gives: "horry county growth rate".
- No suggestions at all for "market report", "days on market", "months of supply", "housing inventory", "2026" or "ccar market report". People do not type the report's terms. They type "update", "prices", "trends", "crash" and "forecast".

## Why they typed it

- **"update", "report", "trends".** A buyer or seller who wants this month's numbers before deciding, and wants to know they are current. They want the month the numbers are from, said once and plainly.
- **"crash", "dropping".** A buyer afraid of paying the top, or an owner afraid of losing value. Many came from Florida's condo news. They want a yes or no with the number behind it, houses and condos apart.
- **"median" and "average home price".** A newcomer pricing a move. They want one number for a house and one for a condo, and to know why websites give different numbers.
- **"forecast", "predictions".** They want to know what comes next. No one can say, and the page must not guess. The honest answer is the direction of the last two years and what the supply numbers point to, labelled as the past.

## The must-answers, ranked

1. **What is the median home price in Myrtle Beach right now?** Houses and condos apart, with the month. (Live FAQ has no number; triage.) Answer: rows 1, 2.
2. **Are Myrtle Beach home prices dropping? Is the market crashing?** Houses flat for three years, condos down about 6 percent in two years, and more condo contracts signed this year than in either of the last two. Answer: rows 7, 8, 10, 11.
3. **How long do homes take to sell, and how close to asking?** Days to an accepted offer and share of list price, houses and condos. Answer: rows 3, 4. One sentence each; /sell/ owns the depth.
4. **How many homes are for sale (months of supply)?** Houses 4.2, condos 7.5, and how that moved since 2024. Answer: rows 5, 6, 9. "Buyer's market" gets one sentence and a link to /buyers/buying-in-myrtle-beach/.
5. **Which reports are there, and what does each cover?** The July 2026 report (June data) and the 2026 election guide, newest first. Answer: rows 17, 18.
6. **Why do websites give different median prices?** MLS sales in two counties against every recorded deed in one. Answer: rows 13, 14, 15.
7. **When are the next numbers out?** CCAR's report for each month carries a date about ten days into the next month; October's numbers were not posted on November 10. Answer: row 16.
8. **What happens next (forecast)?** Not answered with a guess. One line in the FAQ: we do not forecast prices; the page shows the last three years and the supply, labelled as the past. Rows 19 and 20 strike the live page's frame language and any forecast.

## The deciding fact (checked first)

Does CCAR publish a current month with the median price, days to an offer and months of supply, for houses and condos? **Yes.** September 2026, "Current as of October 10, 2026", on CCAR's market statistics page as "October 2026 Market Report" (rows 1 to 11). Re-checked 2026-11-10: the file is the same (sha256 1c71eff8...), and the November file (October data) is not posted (404). The page is written on September 2026, said once at the top and in the table caption.

## What siblings already own (do not take it)

| Search | Owner | What this page does |
|---|---|---|
| "Myrtle Beach market report", "market update", the dated monthly numbers | **/market-reports/** (cannibalization report) | Owns it. |
| "Is Myrtle Beach a buyer's market?", "Myrtle Beach housing market" (evergreen) | /buyers/buying-in-myrtle-beach/ (its own months of supply by price and town, from listings and deeds) | One sentence with CCAR's 4.2 and 7.5, then the link. No buyer's-market heading. No "housing market" in the title. |
| "What is my home worth", prices by area, the deed-based monthly resale medians, the FHFA index | /sell/home-value/ | No price by area. One link: "what homes sold for in your area". The FAQ on different medians names the deed figure once (row 14) and links. |
| How long to sell, how close to asking, the best month to list, prices and days by CCAR area | /sell/ | One line each, the link. No area table. |
| The condo seller's market detail | /sell/sell-my-condo/ | One line, the link. |
| "Are prices dropping" | Was an H2 on /sell/home-value/ and /submarkets/myrtle-beach/. The cannibalization fix renames both. | **Take it here, dated:** "Are Myrtle Beach home prices dropping?" The answer is a month's number, which is what a report hub is for. The lead should confirm the two renames ship with this page (BUILD). |
| Holding period, appreciation since 2001 | /invest/how-long-to-hold/ | Not here. This page goes back to 2024 only. |
| Building permits, new home counts | /invest/horry-county-growth-roads-permits/ | One link in the reports list, no number. |
| The election's effect on prices | /market-reports/2026-election/ | Listed as a report with one line. |
| Rental market | /invest/rent-prices/, /invest/airbnb-income/ | Not here. |
| Town markets ("north myrtle beach real estate market") | The town guides under /submarkets/ | Not here. No town numbers. |

## What a reader would pay an expert to tell them

- Is now a bad time to buy a condo, after the Florida news? (Rows 7, 10, 11: prices down, buyers back.)
- Will my house lose value if I wait a year to sell? (Row 7: houses flat three years running. The past, not a promise.)
- How much room is there to negotiate? (Row 4: houses 97.3 percent and condos 95.9 percent of the last list price.)
- Which number do I trust? (Rows 13 to 15.)
