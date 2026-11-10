# Plan: /market-reports/ (batch 2026-11-b, rebuild the market reports hub)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (21 rows: 9 reused from verified sibling rows, 8 new and awaiting a verifier, 2 part new, 2 struck), the triage rows, the cannibalization report and the live page.

The live hub is hand-made HTML (`chapter3realty/market-reports/index.html`, no spec). Build its first spec, `specs/market-reports.js`, with `url: "/market-reports/"`, `author: "devin"` (Tim Nash reviews; mkpage writes the byline), `hub: { name: "Home", url: "/" }`, from `specs/sell.js` as the model (glass theme, `G.page`, one card style, 720 px blocks, an offer after about every second section). It reads `data/2026-11-b/market-reports/market.json`. Never type a number or a month the data file holds: the month name ("September 2026") comes from `meta.data_month`. The spec throws if a ledger value moves. The July report's date comes from its own page's `datePublished` at build time.

## What the live page has that is worth keeping

- The idea in its second paragraph: "the single-family and condo segments often move in different directions". It is true, and it is now the spine of the page (rows 7, 9, 10).
- The cards that link the July 2026 report and the election guide. They become a clean, dated list.
- The FAQ questions themselves: "What is the median home price in Myrtle Beach?" and "How current is this data?" They are what people ask. They get answers with numbers now.
- The URL, and "market reports" in the title (the page owns "Myrtle Beach market report").
- Six referring pages already (`tools/inbound.js`, 2026-11-10).

Cut: "illustrative", "a frame rather than a quote", "on the order of three months", "most listings see at least one price adjustment", "Ask for a current report", "rates" in the dek, the empty grid cell (triage), the "Live now" chips, and the "Grand Strand seller snapshot" and "Rental investment numbers" cards (they point to hubs, not reports; the related pages go in one plain list).

## The reader and their decision

Someone watching the Myrtle Beach market before they act: a buyer from out of state afraid of paying the top, often for a condo after the Florida condo news; or an owner wondering whether to sell now or wait. They typed "housing market update", "home prices", "condo prices", "crash". They know no local terms and have read different numbers on different sites.

**Their decision:** act now or wait, and on a house or a condo. **The job, in one verb:** see the direction. **Kind of page:** market data (CRAFT 3: the latest number, its change and period; a chart and its table), with the list of reports at the end.

## The answer, in two sentences

In September 2026, the middle house sold in Horry and Georgetown Counties went for $370,000, and the middle condo for $230,125. House prices have held for three years, and condos cost about 6 percent less than in 2024, yet buyers signed more condo contracts this year than in either of the last two.

(Rows 1, 7, 10, 13. Never "the Myrtle Beach area" for a CCAR total: CCAR's "Myrtle Beach" area is two ZIP codes (row 15). Second sentence 31 words: split it on the page: "House prices have held for three years. Condos cost about 6 percent less than in 2024, and buyers signed more condo contracts this year than in either of the last two.")

## Title, H1, description

- Title (built from the data month): **Myrtle Beach Market Report: September 2026 Prices | Chapter3** (60 characters).
- H1: **Myrtle Beach real estate market report: September 2026.**
- Italic line under it (the approved pattern): "Houses held their price. Condos cost less, and more buyers are signing for them."
- Description (155 or fewer): "Myrtle Beach market report, September 2026: the middle house $370,000, the middle condo $230,125, days to an offer, months of supply, and three years of trend."
- Keywords: Myrtle Beach market report; Myrtle Beach real estate market update; Myrtle Beach home prices; Myrtle Beach median home price; Myrtle Beach condo prices; Myrtle Beach housing market crash; are Myrtle Beach home prices dropping; Myrtle Beach real estate price trends. Never: "is Myrtle Beach a buyer's market", "Myrtle Beach housing market" alone, "what is my home worth", any town's "real estate market".

## Sections, in order (question headings people search)

On a phone, the top is the H1, the byline, the italic line and the short answer. The site's edge puts the feed "New this week on the Grand Strand" under the opening; leave it. A slim offer bar follows the short answer. An "On this page" list (short labels) follows the bar.

1. **Short answer** (the two sentences above) + slim bar: "Get this month's sales for your street or building." Button "Send me the numbers", to /contact/ (the site opens the short pop-up).

2. **What is the median home price in Myrtle Beach?**
   - First sentence: the two September medians, then the January to September medians ($362,000 and $232,000) (row 1).
   - **Visual 1: "September 2026 at a glance"**, a two-column table, houses and condos, five rows with plain names: "Middle sale price", "Days to an accepted offer", "Share of the asking price paid", "Months of supply", "Homes for sale" (rows 1, 3, 4, 5, 6). Caption: "CCAR MLS sales, Horry and Georgetown Counties, September 2026." On a phone it stays two columns; each label wraps.
   - One sentence on what "middle" means: half sold for more, half for less.
   - One sentence and a link: "What homes sold for in your area is on our home value page" (/sell/home-value/).

3. **Are Myrtle Beach home prices dropping?** (takes "dropping", "crash", "price trends", dated)
   - First sentence is the answer: "Not for houses. Condo prices have slipped two years in a row."
   - **Visual 2: "Houses held their price. Condos slipped."** Two groups of three bars (January to September 2024, 2025, 2026), houses and condos, the value on each bar, from `three_years.median_price.*.jan_to_sep` (row 7). One message, in the title. Built as one SVG at two widths (phone and wide), as /sell/home-value/ does for its FHFA chart, or with `G.bars` if it can group.
   - **The wow line** (row 10): "Lower prices brought condo buyers back. From January to September 2026, buyers signed 4,105 condo contracts, more than in the same months of 2025 or 2024."
   - One line that a monthly median moves with the mix of homes sold.
   - **Homes strip** (glass.js `homes()`): "Oceanfront condos, price already cut" (new place, BUILD). The page just told a condo buyer prices are lower and sellers give ground (row 4, 95.9 percent of asking); these are those condos. Live check 2026-11-10: 328 oceanfront condos with a price cut within 25 miles of Myrtle Beach (map API, `type=condo&has=oceanfront_unit,price_reduced`). Fallback: "Send me oceanfront condos with a price cut" to /contact/.
   - Mid offer: headline "Is this a good time to buy a condo in your building?" Line: "We pull the building's sales, its fees and its insurance before you offer." Button "Have us check a building", to /contact/.

4. **How long do homes take to sell in Myrtle Beach?**
   - First sentence: "About four months: houses took 122 days from listing to an accepted offer from January to September 2026, and condos 131." (row 3) The closing comes after that.
   - One sentence: houses sold for 97.3 percent of their last asking price and condos for 96.0 percent (row 4).
   - One link sentence: "Selling time by area and the best month to list are on our selling page" (/sell/). No area table.

5. **How many homes are for sale in Myrtle Beach?**
   - First sentence: "3,855 houses and 3,235 condos were for sale at the end of September 2026: about 4 months of supply for houses and 7.5 for condos." (rows 5, 6)
   - **Visual 3: a three-row table, "The rise in homes for sale has stopped"**: September 2024, 2025, 2026, with homes for sale and months of supply, houses and condos (row 9). Short and plain; no chart.
   - One sentence on what months of supply means (row 5's definition, in plain words).
   - One sentence and a link: "Whether that makes it a buyer's market, by price and by town, is on our buying guide" (/buyers/buying-in-myrtle-beach/).
   - Mid offer: headline "See new listings the day they come on." Line: "Tell us the town, the type and the price, and we send the new ones." Button "Send me new listings", to /contact/.

6. **How did prices move month by month?** (the market-data shape: the line and its table)
   - **Visual 4: "Prices barely moved this year"**, a two-line chart, October 2025 to September 2026, houses and condos, each line labelled at its end, no legend, the low and high months marked (row 8). Under it, the open table of all 12 months: middle price and months of supply for each (rows 8, 12). Plain column names.

7. **Which Myrtle Beach market reports can I read?** A clean list, newest first, each with its data month and one line on what it covers:
   - This page: September 2026 numbers. "We update this page when CCAR posts the next month." (row 16)
   - /market-reports/2026-election/: what the election changes for a home: the Dec. 11 flood deadline, a proposed rental tax cut, a proposed buyer credit, the dates that matter, prices (row 18).
   - /market-reports/july-2026/: June 2026 numbers: sales, prices, supply, prices by area, building permits (row 17).
   - Then "Related numbers on other pages", one line each: home values by area (/sell/home-value/), buyer's market by price and town (/buyers/buying-in-myrtle-beach/), selling time by area (/sell/), selling a condo (/sell/sell-my-condo/), new home permits (/invest/horry-county-growth-roads-permits/), rents (/invest/rent-prices/).

8. **Market report FAQ** (open text, each answer a new fact or a link, never a repeat of a section):
   - Why do websites give different median prices? (rows 13 to 15: MLS sales in two counties against deeds in one; ZIP-code areas; the deed medians $350,000 and $215,000 once, then the home value link.)
   - Where do these numbers come from? (CCAR, the local REALTOR association, from its MLS; link CCAR's market statistics page.)
   - When are the next numbers out? (row 16, no promised date.)
   - Will Myrtle Beach home prices go up or down next year? "We do not forecast prices." Then the three-year direction and the election guide's price question (link).
   - Is Myrtle Beach a buyer's market? One sentence with 4.2 and 7.5, then the link. Its own page owns the answer.

9. **End band**: "Get this month's numbers for your street or building." Button "Send me the numbers" (the same words as the top bar are allowed only there; the mid offers each differ). Then the site's lead form (#lead-form) and the phone button, as the other hubs.

Sources line: CCAR Monthly Indicators, September 2026 ("Current as of October 10, 2026"), with the link; CCAR's MLS FAQ for the two-county scope; Horry County deed records, October 2025 to September 2026, our count (FAQ only). Not legal, tax or lending advice. No rate, no payment.

Length: about 1,100 to 1,400 words. A market hub is read for its numbers; keep each section short.

## Visuals (each readable at a glance)

| # | What | Message in the title | Data |
|---|---|---|---|
| 1 | Two-column table | "September 2026 at a glance" | market.json now |
| 2 | Grouped bars, 3 years x 2 types | "Houses held their price. Condos slipped." | three_years.median_price |
| 3 | Three-row table | "The rise in homes for sale has stopped" | three_years.for_sale, months_supply |
| 4 | Two-line chart + its 12-row table | "Prices barely moved this year" | monthly.median_price, months_supply |

No illustration, no map (the page names no place), no photo (a market page has no subject to photograph; P10). Four visuals in a page this long, one per section, none in the first screen.

## Homes strips and offers

- The edge feed (idx-lib/feeds.js "/market-reports/": WEEK, "New this week on the Grand Strand") stays under the opening. BUILD may propose a bolder title to the lead; it is true as it is.
- One glass.js strip, in section 3: "Oceanfront condos, price already cut" (new place in BUILD). It ties to the section's news and is true by its filter.
- Offers: the slim top bar, three mid offers (after sections 3 and 5, and the strip's fallback), the end band. Every button links /contact/ or #lead-form. No two say the same words, except the top bar and the end band.

## For BUILD.md (the lead edits these; this page does not)

- **New place** in `batches/2026-10-b/data/idx-places.json`: `mr-oceanfront-condos-cut`, name "oceanfront condos with a price cut", pages ["/market-reports/"], q `{"near": "33.69000,-78.89200", "miles": 25, "type": "condo", "has": "oceanfront_unit,price_reduced"}`, index false. 328 homes on 2026-11-10.
- **Sibling renames** from the cannibalization fix, so this page holds "are prices dropping" alone: /sell/home-value/ H2 to "What has my area's price done this year?" and drop its keyword "are Myrtle Beach home prices dropping"; /submarkets/myrtle-beach/ H2 to "What do homes sell for in the city of Myrtle Beach?". Both are still live as of 2026-11-10.
- **July report**: the triage fixes (title "Myrtle Beach Housing Market Report: June 2026 Data", "right now" to "in June 2026", drop "rates" from its dek, a top line linking this hub as the newest numbers).
- **Referring pages**: six today. Add links on words already there in /sell/ (its market sentence) and /sell/sell-my-condo/ (its market section) to reach eight.
- **Monthly refresh**: when CCAR posts October 2026, `build_market.py` fails its hash check on purpose. Re-parse, re-verify rows 1 to 12, rebuild. The seller hub and the condo page read the same month and should move together.
- **Separate monthly report pages**: not now. The hub carries the latest month, so a "September 2026" page would compete with it for the same search. The July page stays as a dated archive.
