# /submarkets/north-myrtle-beach/: design pass

Reader: a buyer choosing where in North Myrtle Beach to look. They want to know which of the eight parts suits them, what a home costs there, whether it floods, what owning costs each year, and whether they can rent it out.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-29 at 1440 x 900, phone-00 to phone-41 at 390 x 844).

## What makes the page good (keep all of it)

- The headline says the page's idea in one line: nine miles of beach, eight different markets. The italic line names three of them.
- The short answer sends each kind of buyer to a part by name, then gives the price range from Crescent Beach to Tilghman Beach and the rental rule.
- Our own map of the eight parts, numbered, with a key whose names link to the entries.
- Eight entries, each with a number dot in the map's colour, a plain "who it suits" opening, real neighborhood prices, and its own offer.
- Labelled aerial photos of each part, and the 1941 pavilion postcard beside the shag paragraph.
- The side-by-side table after the entries, the flood chart by part, the for-sale chart, the flood policy table, the yearly bill, the five rental rules with the worked tax example, the pros and cons with what we do about each con, the FAQ, sources and photo credits.

## What makes it look ugly, cluttered or hard to read

1. **The first screen is all headline** (`before/first-1440.png`). The H1 is three lines and the italic sub line is four more lines at the same giant size; the four tiles sit on the bottom edge and the byline and the opening line fall below the screen. On a phone (`first-390.png`) the four tiles are squeezed into 80 px columns, so "About 9 miles" and "4 courses" break over two and three centred lines.
2. **The contents list is a 420 px card with one short link per line** (`slice-02.png`; `phone-02.png`, `phone-03.png`). Eight links in a white box take most of a screen before the first section.
3. **Boxes everywhere, and boxes in boxes** (`slice-04.png`, `slice-14.png`, `slice-20.png`, `slice-22.png`, `slice-24.png`; on a phone `phone-15.png` to `phone-17.png`, `phone-25.png`, `phone-26.png`, `phone-29.png`). All nine photos sit in a white card frame. Each table sits in a card, and on a phone the tables turn into stacks of cards: 8 for the parts, 3 for the flood policy, 6 for the yearly bill. The five rental rules are five cards and the tax example a sixth. The pros and cons are two tall cards, the Pros card half empty. The two maps are a framed picture inside a card. With that many boxes, the charts and the offers do not stand out.
4. **Ragged block widths** (`slice-14.png`, `slice-16.png`, `slice-20.png`). Text is 665 px wide, photos 680, the drive map 560, the steps and offers 720, the flood chart 820, the three tables 960. The right edge jumps every few hundred pixels.
5. **The eight entries run about nine screens down a narrow column, with the right side of a desktop empty** (`slice-04.png` to `slice-12.png`). Each entry is a paragraph, then a 680 px photo, then more paragraphs. The photo pushes the rest of the entry, and its offer, a full screen down. A reader comparing parts has to scroll past eight large photos.

## One change per problem

1. Set the italic sub line at about half the H1's size, on its own line, as on the approved pages. On a phone the four tiles become four short rows: icon, label, number, between thin rules.
2. The contents list loses its card and becomes columns between two thin rules: three on a desktop, two on a phone.
3. One card style, kept for what a reader looks at: the two maps, the two charts and the offers. The photos lose their frames. The tables become plain tables under thin rules; on a phone their rows are plain rows split by a rule. The five rules become one list split by rules, with the number dots kept. The tax example keeps a brass left rule but loses its box. The pros and cons become two plain columns under a brass rule. Each map keeps one card, with no second frame inside it.
4. One block width of 720 px for photos, maps, charts, tables, lists and offers.
5. On screens 1,180 px and wider, each entry's aerial photo sits to the right of the entry's text, starting beside its first paragraph. The pavilion postcard stays in the text column under the shag paragraph it shows. Below 1,180 px the order is as before.

## Chart wording

- The for-sale chart shows a number for sale and a price on each bar, but nothing on screen says the price is the middle asking price. Its title will say so.
- The flood chart's big number is the share of all homes in the zone, beside the house and condo shares. Its title will say "share".

No sentence is cut. Nothing is added except those two titles.
