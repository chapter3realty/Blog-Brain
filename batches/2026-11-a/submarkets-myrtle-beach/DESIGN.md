# /submarkets/myrtle-beach/: design pass

Reader: someone deciding where in the City of Myrtle Beach to buy. Either they will live here and want a house in a part of the city that fits them, or they want an oceanfront condo to rent by the night. They want to know which parts are which, where nightly rentals are allowed, what homes cost, and what owning costs each year.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-23 at 1440 x 900, phone-00 to phone-34 at 390 x 844).

## What makes the page good (keep all of it)

- The headline asks the reader's question, and the short answer splits the two readers in its first two sentences: a house to live in, an oceanfront condo to rent.
- Our own map of where the city allows nightly rentals, with the four numbered parts and a key whose names link to the entries.
- The four parts, each with a number dot that matches the map, what it has, then its share of main homes and its price, and a strip of homes for sale.
- The "houses near $300,000" table, the "which homes can rent by the night" table, the nine oceanfront buildings, the tax table.
- The worked example as a receipt with a total row, the season chart, the Zillow price chart.
- The three USGS photos: houses beside towers on one beach, the towers south of downtown.
- One offer per section, each tied to what the section proved; the pros and cons with what we do about each con; the FAQ, sources and photo credits.

## What makes it look ugly, cluttered or hard to read

1. **The first screen is all headline** (`before/first-1440.png`). The H1 is two lines and the italic sub line two more at the same giant size, so the tiles, byline and opening line are pushed to the bottom. On a phone (`first-390.png`) the four tiles are tall cards with centred text, and "Mostly main homes" breaks over three lines.
2. **The contents list is a 720 px card with one short link per line** (`slice-00.png`, `slice-01.png`; on a phone `phone-01.png`, `phone-02.png`). Eleven links in a white box take most of a screen before the first section.
3. **Boxes everywhere, and a box in a box** (`slice-02.png`, `slice-08.png`, `slice-09.png`, `slice-10.png`, `slice-12.png`, `slice-17.png`, `slice-19.png`; on a phone `phone-03.png`, `phone-09.png` to `phone-13.png`, `phone-15.png` to `phone-17.png`, `phone-25.png`, `phone-27.png`). The four things inside the city are four cards. Every table is a card, and on a phone the four tables turn into 18 stacked cards. The two "months to sell" figures are two cards. The pros and cons are two tall cards, the Pros card half empty. Each photo sits in a white frame, and the map is a framed picture inside a card. With that many boxes, the map, the charts, the receipt and the offers do not stand out.
4. **Ragged block widths** (`slice-08.png` to `slice-12.png`, `slice-16.png`). Text is 665 px wide, the map, photos, charts, life list and tiles 680, the receipt 620, the offers 720, the four tables 960. The right edge jumps every few hundred pixels.
5. **The two photos break the text, and the right side of a desktop is empty** (`slice-10.png`, `slice-12.png`, `slice-13.png`). Each photo is a full-width block between two paragraphs, with 700 px of empty space beside the whole column. The beach photo pushes the paragraph it explains ("the homes for sale today split the same way") half a screen down.

## One change per problem

1. Set the italic sub line at about half the H1's size, on its own line, as on the approved pages. On a phone the four tiles become short rows (icon, label, number) between thin rules, two to a row.
2. The contents list loses its card and becomes columns between two thin rules: three on a desktop, two on a phone.
3. One card style, kept for what a reader looks at: the map, the two charts, the receipt and the offers. The life list becomes one list split by rules. The tables become plain tables under thin rules; on a phone their rows are plain rows split by a rule. The two "months to sell" figures become two plain columns under a rule, the numbers kept large. The pros and cons become two plain columns, each under a brass rule. The photos lose their frames. The map keeps one card, with no frame inside it.
4. One block width of 720 px for the map, photos, charts, tables, lists, figures, the receipt and the offers.
5. On screens 1,180 px and wider, each of the two USGS photos sits to the right of the paragraphs it explains: the beach photo beside "the homes for sale today split the same way" and the grandfathered houses; the towers beside the studio prices and the out-of-state buyers. Below 1,180 px the order is as before.

## Chart wording

- The receipt's title, "A typical one-bedroom's income on a typical oceanfront one-bedroom's price", says "typical one-bedroom" twice and is hard to parse. It becomes "A year for an oceanfront one-bedroom rented by the night, at typical income and price".
- The season chart's note packs two facts into one sentence. It becomes two short sentences.
- The building table's column "Most homes for sale now" reads as "most of the homes for sale". It becomes "What its homes for sale are now".

No sentence is cut. Nothing is added except those wording changes.
