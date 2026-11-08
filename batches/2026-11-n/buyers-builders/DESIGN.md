# /buyers/new-construction/builders/: design

Batch 2026-11-n, Lane N (a new page), 2026-11-08. Spec: website `specs/buyers-new-construction-builders.js`. Data: website `data/2026-11-n/buyers-builders/` (`findings-verified.json`, plus `map-points.json` and `photos.json` added by the writer).

## What the page is

The reader typed "new home builders Myrtle Beach" (or "best", "top", "biggest"). They want to know which names matter here, pick two or three to visit by town and price, and know who stands behind a name on a sign or a deed. The page answers with a count nobody publishes: every builder that sold 50 or more new homes in Horry County in 12 months, from county deeds. It says once at the top and once in the FAQ that the ranking is by homes sold and rates no builder.

Kind of page: a ranked comparison. The main relation is options (builders) measured by amount (homes sold) and place (towns). So the core is one chart, one map and three tables, then a short checklist. About 1,650 words of prose.

Order: the short answer; who builds the most (the chart, with the middle price beside each name); where each builds (a dot map, the town table, each builder's busiest communities, the three communities with two or more builders); what each costs (sold range and asking price now, the $300,000 budget, why some builders are hard to find in the listings); who owns which name; warranty and lender from each annual report; what we check before you sign; FAQ; sources.

The general guide, /buyers/new-construction/, owns everything else about buying new (the ten busiest communities and what they have, the tax bill, lot premiums, your own agent, incentives and the builder's lender, inspections, warranty law). This page links each in one sentence.

## Which approved treatment, and why

All four pilots of batch 2026-11-a (sell-fsbo, submarkets-pawleys-island, hoa-liens-and-foreclosure, invest-condos):

- **Two-line headline, the italic sub line at about half the H1 size** (fsbo, condos). The hero tiles become short rows on a phone (condos).
- **The answer first:** two short paragraphs, then the slim offer bar.
- **One card style, used once, for the bar chart.** No cards anywhere else: the reader compares numbers, which a table does better than a card. The three tables are plain rows under thin rules; on a phone each row becomes a block with its labels (condos, pool homes).
- **Plain lists under thin rules, two columns on a wide screen** for the busiest communities and the owners of each name (fsbo's duties, Pawleys' lists).
- **The checklist is numbered on a thin rule, no box** (fsbo's steps, without the line).
- **One block width of 720 px** for the chart, tables, lists, checklist and offers. The map is 560 px so it fits one screen (Pawleys' maps).
- **On a wide screen, a picture beside the paragraphs that explain it** (fsbo's calculator, Pawleys' photos): the aerial of Auberon Woods beside the paragraphs after the chart, and the $300,000 budget numbers beside the paragraphs on the budget. Below 1,100 px the order is as written.
- **The contents list loses its card** and sits in three columns between two rules (condos).
- **Pictures sit on the page, no frame** (all four).
- **Offers** (owner, 2026-11-03): the slim bar under the short answer; "Compare two builders in one afternoon" after the "where" section; "Know who you are buying from" after the owners section; the full band at the end. Each says something different, each button to /contact/ is a request.

## Pictures

- **The bar chart** of homes sold by builder, the five largest in the brand color, from `findings-verified.json`.
- **The dot map** (new; not in PLAN.md). The site's scorer and the critic both asked for a picture, and "where does each builder build" is a place question. Each dot is a builder sale at its parcel's centre, rounded to about 100 m, the five largest builders in five colors and the rest in gray, in the same frame and county line as the general guide's map. The general guide's map shows homes for sale, new against old; this one shows who built where. Palette checked with the dataviz validator: all checks pass; three hues are under 3:1 against the map, so the key names each builder and the town table carries the numbers.
- **One photo** (new; PLAN.md had none, and the critic blocks a blog with no photo): the USDA NAIP 2023 aerial, public domain, of the middle of Auberon Woods, the community with the most builder sales. In April 2023 it is cleared ground and dirt roads; 176 D.R. Horton sales in the last 12 months sit inside the frame. The record is in `data/2026-11-n/buyers-builders/photos.json` (licence, request, parcel check). No builder's photo, rendering, sign or logo is on the page.

## Choices a reviewer may question

- The chart names "Five community companies" and "Great Southern Homes, now Stanley Martin". The verifier struck the tie of the five companies to a builder (row 15); the word that would name it is not on the page.
- The price table shows a dash for the five companies and Howell Homes: their listings cannot be matched to their deeds (VERIFY.md 7). Under 15 listings, the count only.
- The company-buyer count (row 10) is left out: it does not answer this reader's question.
- The checklist says "We check the builder's license with the state before you sign" (owner question Q2, proposed default yes).
- Who pays a buyer's agent on a new build stays with the general guide and owner question O1.

## Gates (2026-11-08)

score 97 (S8 inbound links is the lead's); claims-scan 0 on this page; facts-check 0 on this page; house-claims 0; critic 0 blocking at 390, 768 and 1440; `build.js audit`: only "missing from sitemap.xml" and "orphan" (shared files, NEEDS.md); `build.js check`: the footer drift that 157 pages share.
