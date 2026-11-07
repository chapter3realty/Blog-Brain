# /invest/condos/: design pass

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-20 at 1440 x 900, phone-00 to phone-30 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer says "only if it rents like the busier listings", with the $18,000 fee and tax against the $16,000 and $28,000 a rental keeps.
- The condo-or-house table: one row per kind of investor, a pick and a reason.
- The 25-year price chart with its three marked turns and the table of values under it.
- The bar charts (price by area, what a rental keeps against the fee and tax, owner-occupied share), each with a one-line source note.
- The yearly bill for one typical oceanfront two-bedroom: two lines and a total.
- The three USGS photos of condo buildings in each area, the friend's story with its "not a promise" label, the Fannie Mae signs in two columns, the five things to read in a building.
- One offer per section, each tied to what the section proved; the FAQ, the sources and the photo credits.

## What makes it look ugly, cluttered or hard to read

1. **The headline is five lines of giant type** (`before/first-1440.png`). The italic sub line is set at the H1's size, so the whole first screen is headline. On a phone (`first-390.png`) the three tiles are squeezed into 110 px columns and "Typical two-bedroom nightly rental, before costs / About $20,000 a year" breaks into seven centred lines.
2. **The contents list is a 500 px card with one link per line** (`slice-02.png`). After the short answer and the offer card, the reader scrolls a full screen of a white box with ten short links before the first section starts.
3. **Boxes everywhere** (`slice-03`, `slice-04`, `slice-08`, `slice-09`, `slice-16`; on a phone `phone-03` to `phone-04`, `phone-13`, `phone-17`). Every table sits in a glass card, the story is a card, each of the five building checks is its own card, and the three photos each sit in a frame. On a phone the three comparison tables turn into twelve stacked cards (six for the condo-or-house rows, three for the tax rate, three for the managers). With that many boxes, the charts and the offers that should stand out do not.
4. **Ragged block widths in one narrow column, with the right side of a desktop empty** (`slice-03` to `slice-05`, `slice-08`). Text is 665 px wide, the decision table 960, the price chart 640, the value table 760, the bar charts 820, the bill 640, the story 680, the offers and steps 720. The left edge holds, but the right edge zigzags down the page, and the yearly bill stands alone under one paragraph with 800 px of empty space beside it.

## One change per problem

1. Set the italic sub line at about half the H1's size, on its own line, so the headline reads as two lines and a two-line sub line. On a phone the three tiles become three short rows: icon, label, number.
2. The contents list loses its card and becomes three columns on a desktop and two on a phone, between two thin rules.
3. One card style, kept for what a reader looks at: the charts, the yearly bill and the offers. The tables become plain tables under thin rules, with no card; on a phone their rows are plain rows split by a rule, not cards. The five building checks become one list split by rules, icons kept. The story keeps its brass left rule but loses its box. The photos lose their frames.
4. One block width of 720 px for tables, charts, the story and the steps, the same as the offers. On screens 1,100 px and wider, the yearly bill sits beside the paragraphs that explain it (the total, the HOA fee, the insurance in the fee), in the empty right side. Below 1,100 px the order is as before. The photo row keeps the full width, because the photos gain from it.

No sentence is cut. Nothing is added.
