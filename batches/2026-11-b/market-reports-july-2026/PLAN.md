# Plan: /market-reports/july-2026/ (batch 2026-11-b, the July 2026 report, June 2026 data)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (22 rows, 2 reused; 8 struck), the triage row, the cannibalization cluster, the hub's PLAN (same day) and the live page.

The live page is hand-made HTML (no spec). Build its first spec, `specs/market-reports-july-2026.js`, with `url: "/market-reports/july-2026/"`, `author: "devin"` (Tim Nash reviews; mkpage writes the byline), `hub: { name: "Market Reports", url: "/market-reports/" }`, glass theme, the same card and offer style as the hub's spec (`specs/market-reports.js`, being written now). It reads `data/2026-11-b/market-reports-july-2026/june.json`. Never type a number the data file holds. Leave `datePublished` out: mkpage keeps the page's July 19, 2026 (facts row 21). The spec throws if a ledger value moves.

## What the live page has that is worth keeping

- The headline table, June 2026 against June 2025, houses and condos. Every cell re-verified (rows 2, 4, 7, 8, 9, 10). It becomes the "at a glance" table, labels in plain words.
- The idea that houses and condos were two different markets. True, and now dated: it is the spine of the page.
- The area table. All seven June house figures match the source (row 16). It gets the condo column, January to June, the sales counts, and what each area is.
- One line per reader at the end (house buyer, condo buyer, seller). Rewritten in the past tense, with no forecast.
- The four sources at the bottom, now linked to the exact files.
- Six referring pages (`tools/inbound.js`, 2026-11-10). They keep working: the URL does not change.

Cut: every rate (row 23), the Margaritaville paragraph (row 24), the "first annual decline" and "Myrtle Beach city" wording (rows 25, 26), "closing ... in about four months" (row 27), the unsourced causes and forecasts (row 28), "right now", the buyer's-market, overbuilt and prices-dropping FAQ entries, "We publish this every month" (row 29), the dek's promise about itself (row 30). The "What it means" numbered list goes; its true parts move into the sections.

## The reader and their decision

The reader came by a link, not a search (must-answer: no dated query has any demand). Most are one of two people:
- a buyer or owner who wants to see how June 2026 compares with what came after, before they act;
- a reader of an older town or condo page that linked "the July 2026 market report", who needs to know at once that this is June 2026, and where the newest month is.

**Their decision:** use these June numbers as the past they compare against, and go to the hub for the current month. **The job, in one verb:** look back. **Kind of page:** market data, dated (CRAFT 3: the number, its change and period; a chart and its table).

## The answer, in two sentences

In June 2026, the middle house in Horry and Georgetown Counties sold for $359,945 and the middle condo for $244,270, both within 2 percent of June 2025. By June, fewer houses were for sale than a year earlier, and buyers signed 21.5 percent more condo contracts.

(Rows 4, 9, 11, 12. 27 and 18 words. Never "the Myrtle Beach area" for a CCAR total.)

## Title, H1, description

- Title: **Myrtle Beach Housing Market Report: June 2026 Data | Chapter3** (the cannibalization fix, word for word; 60 characters). The month comes from `meta.data_month_name`.
- H1: **Myrtle Beach housing market report: June 2026 data.**
- Italic line under it (the hub's pattern): "Prices held. Fewer houses came up for sale, and condo buyers came back."
- The archive line, first thing under the byline, its own small box: "This report covers June 2026. The newest numbers are in our [market reports](/market-reports/). Whether it is a buyer's market today is on our [buying guide](/buyers/buying-in-myrtle-beach/)." (Triage and cannibalization fix.)
- Description (155 or fewer): "June 2026 data for Myrtle Beach and the Grand Strand: the middle house $359,945, the middle condo $244,270, homes for sale, condo contracts and prices by area."
- Keywords: Myrtle Beach housing market June 2026; Myrtle Beach market report July 2026; Grand Strand home sales June 2026; Myrtle Beach condo sales June 2026. **Drop** "Myrtle Beach housing market 2026", "Myrtle Beach home prices", any "right now", "buyer's market", "are prices dropping", "overbuilt", "mortgage rates".

## Sections, in order (headings name June 2026)

On a phone the top is the H1, the byline, the italic line, the archive line and the short answer. The site's edge puts its feed under the opening (`idx-lib/feeds.js` "/market-reports/july-2026/": CONDO_CUT, "Condos with a price cut"); leave it. No slim offer bar: this is an archive, and the archive line is the first link a reader needs.

1. **Short answer** (the two sentences above).

2. **What did homes sell for in June 2026?**
   - First sentence: the two June medians and their change (row 4). Second: January to June, $359,843 and $232,500 (row 5).
   - **Visual 1: "June 2026 at a glance"**, a three-column table (what, houses, condos), seven rows in plain words: "Homes sold" (row 2), "Middle sale price" (4), "Contracts signed" (12, 13), "Days to an accepted offer" (7), "Share of asking price paid" (8), "Homes for sale at month end" (9), "Months of supply" (10). Each cell: June 2026, then the change from June 2025 in small grey. Caption: "CCAR MLS sales, Horry and Georgetown Counties, June 2026." It replaces the live table; same figures.
   - One sentence on "middle": half sold for more, half for less.
   - One sentence: the national middle price that June was $429,300, the highest for any June (row 20). It tells a newcomer the Grand Strand cost less than the country.

3. **Were Myrtle Beach home prices falling in June 2026?** (Answers the fear, dated; does not take the hub's present-tense "dropping".)
   - First sentence: "Not for houses. The middle house sold for about $360,000 to $365,000 in each of the last three Junes." Then: condos sold for a little less each first half: $250,000 in 2024, $240,000 in 2025, $232,500 in 2026 (row 6).
   - **Visual 2: "Houses held their price. Condos slipped."** Two groups of three bars (January to June 2024, 2025, 2026), houses and condos, the value on each bar (row 6). Built from `three_years["Median Sales Price"].ytd`. One SVG at two widths, as the hub's bars. Different months from the hub's chart (January to June, not to September), so the two pages show two dated views, not one chart twice.
   - One line: month by month, the house price stayed between $350,000 and $374,995 from July 2025 to June 2026 (row 14). No second chart.

4. **Did the rise in homes for sale stop in June 2026?** (The deciding fact.)
   - First sentence: "Yes, for houses. 4,023 were for sale at the end of June 2026, 3.4 percent fewer than a year earlier, the second month in a row below the year before." (Rows 9, 11.)
   - **Visual 3: "The climb in houses for sale stopped in 2026"**, a three-row table, June 2024, 2025, 2026: houses for sale and its growth (+27.1%, +24.6%, -3.4%), condos for sale and its growth (+81.8%, +16.8%, +0.6%), months of supply for each (rows 9, 10). Short and plain; a table, not a chart.
   - One sentence on months of supply, in plain words (row 10's definition).
   - One sentence: builders were allowed to start 555 homes in Horry County that June, 6.9 percent fewer than a year earlier; link "new home permits month by month" to /invest/what-is-being-built/ (row 18).
   - Mid offer (houses): headline "Want this June's numbers for your street?" Line: "We pull the sales near your house, then and now." Button "Send me my street's sales", to /contact/.

5. **Were buyers coming back in June 2026?** (The wow section for a condo reader.)
   - First sentence: "Yes. Buyers signed 486 condo contracts in June 2026, 21.5 percent more than a year earlier and more than in June 2024." (Row 12.)
   - Then: June had the most house closings of any month from July 2025 to June 2026: 1,127 (row 3). Houses took 121 days to an accepted offer and sold for 97.3 percent of asking; condos 137 days and 96.2 percent (rows 7, 8). One sentence each.
   - **Homes strip** (glass.js `homes()`): slug `mrj-oceanfront-condos-under-205k`, name "Myrtle Beach", head **"Oceanfront condos in Myrtle Beach under $205,000"**. Why here: the next section shows $205,000 was the middle condo price in the Myrtle Beach ZIP codes that half-year; the reader just read that condo buyers came back. The wow is that oceanfront condos still sell at that price: 154 of them on 2026-11-10 (row 22; the number stays out of the copy). New place for BUILD. Fallback (the strip empty): "Send me oceanfront condos under $205,000", to /contact/.
   - Mid offer (condos): headline "Is a condo in your building priced right?" Line: "We pull the building's sales, its fee and its insurance before you offer." Button "Have us check a building", to /contact/.

6. **What did homes sell for by area in the first half of 2026?**
   - First sentence: "Pawleys Island and North Myrtle Beach had the highest middle house prices from January to June 2026, and Conway and Loris / Longs the lowest." (Row 16.)
   - **Visual 4: "January to June 2026, by area"**, a table, ten rows: area (with its ZIP codes in small grey), middle house price, houses sold, middle condo price, condos sold. Sorted by middle house price, highest first. Caption: "CCAR Local Market Update, June 2026. Areas are ZIP codes, not city limits. Condos include townhouses." (Rows 15, 16.) No June-only column: the table says why in one short line, "One month is too few sales in most areas" (LU's own warning, row 16 note). On a phone: five columns is too wide; show area, house price and condo price, with the counts as a second small line in each cell.
   - The surprise, one sentence (row 17): "More than a third of the region's house sales were in Conway and Loris / Longs, near $300,000. That pulls the region's middle price below every beach area's."
   - One sentence: "In the Myrtle Beach ZIP codes, the middle condo sold for $205,000, 12.8 percent less than a year earlier." (Row 16.)
   - One link sentence: "What homes sold for in your area since then is on our home value page" (/sell/home-value/).

7. **What did June 2026 mean for buyers and sellers?** Three short lines, each a fact from the page, past tense, no forecast:
   - House buyers: about four months of supply, and sellers took 97.3 percent of asking.
   - Condo buyers: 7.6 months of supply and 96.2 percent of asking; more buyers signing.
   - Sellers: about four months from listing to an accepted offer, then the closing.
   - Then: "For this month's numbers, see our [market reports](/market-reports/)."

8. **Data sources for this report.** The four files as links: CCAR Monthly Indicators, June 2026 ("Current as of July 10, 2026"); CCAR Local Market Update, June 2026; Census Building Permits Survey, Myrtle Beach metro, June 2026; NAR via CCAR (one line). Not legal, tax or lending advice. No rate, no payment.

9. **End band**: headline "Get the newest numbers for your street or building." Button "Send me the numbers", to /contact/ (the site opens the short pop-up). Then the site's lead form (#lead-form) and the phone button, as the other pages.

No FAQ. The live FAQ's three questions are present-tense searches owned by siblings (row 29). The sections answer the dated versions. No story: none in `stories/stories.json` fits a June data report, and a labelled example would add nothing here.

Length: about 900 to 1,100 words. An archive is read for its numbers.

## Visuals (each readable at a glance)

| # | What | Message in the title | Data |
|---|---|---|---|
| 1 | Three-column table | "June 2026 at a glance" | june.json overview |
| 2 | Grouped bars, 3 years x 2 types | "Houses held their price. Condos slipped." | three_years["Median Sales Price"].ytd |
| 3 | Three-row table | "The climb in houses for sale stopped in 2026" | three_years Inventory, Months Supply (jun) |
| 4 | Ten-row table, by area | "January to June 2026, by area" | areas |

No map: the area table names ZIP-code areas whose borders a map would have to guess. No photo (a data page has no one subject). One chart only; the rest are short tables. None on the first screen.

## Homes strips and offers

- The edge feed stays under the opening ("Condos with a price cut"). It is true. BUILD may offer the lead a bolder, truer title for it on this page: "Beach condos where the seller already cut the price".
- One glass.js strip, in section 5: "Oceanfront condos in Myrtle Beach under $205,000" (new place, below). Not the hub's strip ("Oceanfront condos, price already cut"): a different filter and a different reader's moment.
- Offers: two mid offers (after sections 4 and 5), the strip's fallback, the end band. Every button links /contact/ or #lead-form. No two say the same words.

## For BUILD.md (the lead edits these; this page does not)

- **New place** in `batches/2026-10-b/data/idx-places.json`: `{"slug": "mrj-oceanfront-condos-under-205k", "name": "Myrtle Beach", "pages": ["/market-reports/july-2026/"], "q": {"near": "33.70882,-78.88539", "miles": 3, "type": "condo", "has": "oceanfront_unit", "max": "205000"}, "index": false}`. 154 condos on 2026-11-10 (API, row 22). The same centre and radius as the existing `myrtle-beach-condos` place.
- **Edge feed title** for "/market-reports/july-2026/" in `idx-lib/feeds.js` (optional): "Beach condos where the seller already cut the price". The feed's filter (condos in four beach towns with `price_reduced`) makes it true.
- **Hub card**: the hub's list says "June 2026 numbers: sales, prices, supply, prices by area, building permits" (hub row 17). With this plan it should read "sales, prices, homes for sale, condo contracts and prices by area". The Margaritaville "oceanfront tower" goes from the hub's row 17 too.
- **Referring pages**: six. Their anchor text says "July 2026 market report"; it stays true. /submarkets/carolina-forest/ and /submarkets/myrtle-beach/ link it for "the region": the lead may point those to /market-reports/ instead, since the hub has the newer numbers. That would drop this page to four; add it to the hub's list and /guides/ only (already there).
- **Sitemap**: `changefreq` "monthly" on this URL (seen in patch 0024) should be "yearly" for an archive, if the build sets it.
- **The rate scanner**: `facts/registry.json` "mortgage-rate-statements" exists to catch this page's old rate line. Confirm it passes after the rebuild.
