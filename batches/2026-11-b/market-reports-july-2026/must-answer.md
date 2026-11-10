# Must-answer list: /market-reports/july-2026/ (batch 2026-11-b, the July 2026 report, June data)

Researcher, 2026-11-10. Inputs:
- Google search suggestions for 17 dated and market searches: `<web>/data/2026-11-b/market-reports-july-2026/raw/google-suggestions.txt` (`pull-suggestions.sh`, run 2026-11-10). The hub's 20 searches, same day: `<web>/data/2026-11-b/market-reports/raw/google-suggestions.txt`.
- Search Console, the owner's export in `scratchpad/gsc/` (28 days to 2026-11-06).
- The triage row (`reports/triage-2026-11-08.md`, "Rebuild the content") and the cannibalization cluster "Myrtle Beach housing market / are home prices dropping / is it a buyer's market" (`reports/cannibalization-2026-11-08.json`).
- The hub's plan, written the same day (`batches/2026-11-b/market-reports/PLAN.md`), which says what the hub takes.
- The live page (`<web>/chapter3realty/market-reports/july-2026/index.html`, hand-made, no spec), and the H1, title and H2s of six siblings, read 2026-11-10.

"People also ask" and the top three results are not reachable from this session (no browser on google.com). `<web>` = the website working copy, `scratchpad/wt-live`.

## What Search Console says

| Query or page | Shown (28 days) | Position | Clicks |
|---|---|---|---|
| /market-reports/july-2026/ (page) | 3 | 4.0 | 0 |
| /market-reports/ (page) | 9 | 7.7 | 0 |
| myrtle beach real estate market | 1 | 3.0 | 0 |

The page has almost no search demand of its own. No query in the export names June, July or a month.

## What Google suggests

- No suggestions at all for: "myrtle beach housing market june", "... july", "myrtle beach real estate market june 2026", "myrtle beach market update july", "myrtle beach condo market 2026", "myrtle beach condo prices 2026", "myrtle beach home sales 2026", "myrtle beach housing inventory 2026", "is myrtle beach overbuilt", "grand strand housing market". People do not search a past month.
- "myrtle beach condo market crash" gives "myrtle beach housing market crash".
- "myrtle beach home sales" gives "condo sales", "real estate sales", "north myrtle beach condo sales".
- "myrtle beach building permits" and "horry county building permits" give permit-office searches (search, application, phone): a different reader, owned by the city and county.
- The live searches ("housing market", "update", "prices", "dropping", "crash", "median home price") belong to the hub and to /buyers/buying-in-myrtle-beach/ (below).

## Who reads this page, and why

Search will send few readers. The page is read by people who arrive from links: the hub's list of reports, and six older pages that link "the July 2026 market report" (`tools/inbound.js`). They are:
- **A buyer or owner comparing then and now.** They want the June 2026 numbers stated plainly, with the month, and a link to the newest numbers.
- **A reader who followed an old link** from a town guide or the condo seller page. They need to know at once that this is June 2026, and where the current month is.
- **Answer engines and the hub's own FAQ**, which lift single dated sentences ("In June 2026, the middle house sold for $359,945").

## The must-answers, ranked (all in the past tense, all tied to June 2026)

1. **What did homes sell for in June 2026?** The middle house and the middle condo, with the change from June 2025 and the January to June figure. Rows 2, 4, 5.
2. **Were prices falling in June 2026?** Three Junes side by side: houses near $360,000 to $365,000 all three years; condos lower each half-year, January to June. Rows 6, 14.
3. **Was the rise in homes for sale over by June 2026?** The deciding fact: houses for sale were below a year earlier in May and June 2026, after two Junes of growth near 25 percent. Rows 9, 10, 11.
4. **Were buyers coming back?** June 2026 had the most house closings of the 12 months, and the most condo contracts of the three Junes. Rows 3, 12, 13.
5. **How long did homes take to sell, and how close to asking?** Days to an accepted offer and share of the asking price. Rows 7, 8. One line each.
6. **What did homes sell for by area in the first half of 2026?** House and condo middle prices by CCAR area, with what the area is (ZIP codes). Rows 15, 16, 17.
7. **How many new homes were permitted?** One sentence with the June figure, then the link to the page that owns permits. Row 18.
8. **Where are the newest numbers?** The top line and the hub link. Row 21.

## The deciding fact (checked first)

Is the June 2026 report still readable at its source, so every figure on the page can be re-verified? **Yes.** CCAR's June files are still on its server (the hub found its other old file names return 404): the Monthly Indicators (`Coastal-Carolinas_MMI_2026-06.pdf`, sha256 c6c6d073..., the same file the hub's row 16 cites) and the Local Market Update (`July_2026_All_Cities.pdf`, "Local Market Update – June 2026"). Both say "Current as of July 10, 2026". Every June figure the live page keeps was re-read from them on 2026-11-10 (rows 2 to 17).

## What siblings already own (do not take it)

| Search | Owner | What this page does |
|---|---|---|
| "Myrtle Beach market report", "market update", the latest month, "median home price", "are home prices dropping", "crash", "price trends" | **/market-reports/** (the hub, September 2026 data; its PLAN takes "dropping" and "crash", dated) | Gives up every one. No present-tense heading. Each heading names June 2026. Top line links the hub. |
| "Is Myrtle Beach a buyer's market?", "Myrtle Beach housing market" (evergreen) | /buyers/buying-in-myrtle-beach/ | No buyer's-market heading or FAQ (the live FAQ "Is Myrtle Beach a buyer's market right now?" is cut). One link in the top line. |
| "What is my home worth", prices by area from deeds | /sell/home-value/ | The area table is CCAR's June figures, dated, with the ZIP codes. No deed area prices. |
| How long to sell, close to asking, the best month to list, CCAR areas now | /sell/ | One line each for June 2026. |
| Building permits, new home counts by month, "is it overbuilt" | /invest/what-is-being-built/ (monthly permits to September 2026) and /invest/horry-county-growth-roads-permits/ | One sentence with June's count, then the link. The live FAQ "Is Myrtle Beach overbuilt?" is cut. |
| Condo seller's market detail | /sell/sell-my-condo/ (now on September data) | Not here. |
| Mortgage rates | Nobody. The site never states a rate. | Cut every rate (rows 23). |

## What a reader would pay an expert to tell them

- In June 2026, had the flood of new listings stopped? (Rows 9 to 11.)
- Were condo buyers coming back after the Florida condo news, or just waiting? (Row 12.)
- Why is every town's middle house price higher than the region's? (Row 17: the busiest house markets were inland and cheaper.)
- Which beach area had the lowest condo prices? (Row 16.)
