# /sell/best-time-to-sell/: design

Batch 2026-11-n, Lane N (a new page). Spec: `specs/sell-best-time-to-sell.js` in the website working copy. Screenshots: `wfn/sell-best-time-to-sell/shots/` in the scratchpad (390, 768 and 1440 px, full page).

## What the page is

A decision guide with market data inside it. The reader owns a home in Horry County, plans to sell, and wants to pick the month. The page answers one question, the words in the title: what is the best month to sell a house in Myrtle Beach? Then the four questions a seller asks next: when to list so the sale closes in that month, whether a condo is different, whether winter or hurricane season hurts, and what matters more than the month.

The answer, from five years of the county's own deeds: late spring and early summer, by a few percent. List a house in March or April and a condo in February or March. The year and the asking price change the result more than the month.

What only this page has:
- Our month-by-month count of 65,664 Horry County resales (2021 to 2025), and each month's middle price against the 13 months around it.
- Condos against houses, with the verifier's corrected condo test: condos sell highest in April and May, houses in June.
- A work-back table: for a closing in any month, the month to list, from Zillow's local days to a contract and days to close.
- Hurricane Ian's week, day by day: 97 sales recorded the day before, none on the Friday it came ashore, and a busier week after.

## Which approved treatment, and why

The four approved pilots of batch 2026-11-a (selling by owner, Pawleys Island, HOA liens, condos). What was taken from each:

- **The headline (fsbo, condos).** Two lines of H1 and the italic sub line at about half its size: "The best time to sell a house in Myrtle Beach / List in March to close in May or June." On a phone the three hero facts are three short rows, not squeezed tiles. The hero sub-header is hidden, as on fsbo, because the short answer says the same thing.
- **The answer first (liens).** Every H2 is a question people search, and its first sentence answers it ("Not as a season." under hurricane season).
- **One card style, used once (fsbo).** Cards appear only where the reader chooses: condo or house. Everything else is a plain list under thin rules (winter, tourists and school, what matters more), as on the fsbo and liens pages.
- **One block width (all four).** Charts, the table, the lists, the cards and the offers are 720 px. Text keeps its own line length.
- **Beside the text on a wide screen (Pawleys Island).** The June beach photo sits beside the tourist and school list at 1,100 px and up. I tried the closings chart beside its paragraphs too, as the plan asked: at 400 px the shared bar chart drew no bars and one value spilled out (the critic's one blocking finding), so the chart went back to the full 720 px column.
- **Offers (owner, 2026-11-03).** The slim bar under the short answer, a box after the "when to list", hurricane and "what matters more" sections, each tied to what the section answered, and the full band at the end. No two use the same words.

## What I took away after looking at the screenshots

- The month strip that drew a house plan and a condo plan on a January-to-June line was replaced by a two-column work-back table. The table answers the reader's real question for any month, not only two, and it is plainer. The condo and house listing months are said once, in the two cards.
- The table first had a middle column ("the buyer signs around"). It always said "early" plus the month before, and on a phone it pushed the last column off the screen. It was cut.
- On Hurricane Ian's chart, the zero day was a label squeezed between bars on a phone. It is now a dashed line with "Ian" above it, and the caption says what the line means. The "97" label went, since the paragraph above gives it.
- The list text was set smaller than the paragraphs (17 px against 19.5 px). It now matches them.
- A sentence about checking parcel records sat inside the price answer. It moved to the condo section, where it explains how a condo is told from a house.

## Limits the page states

- The month a sale is counted in is the month the county recorded the deed. The owner has not yet said how soon our closing attorneys record (OWNER-QUESTIONS Q3), so charts say "recorded".
- The price by month includes which homes sell each month, so the page says one house should not expect $20,000 more in June.
- The pattern was flatter in 2025, and the page says so.
- Zillow's figures are for the Myrtle Beach area, houses and condos together.
