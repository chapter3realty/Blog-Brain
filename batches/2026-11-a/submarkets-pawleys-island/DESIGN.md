# /submarkets/pawleys-island/: design pass

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-27 at 1440 x 900, phone-00 to phone-38 at 390 x 844).

## What makes the page good (keep all of it)

- The H1 the owner liked, and a short answer that says what the island is, what a house costs and the flood risk.
- The order: the island first, then the three mainland parts from the beach inland, each part ending with its price and its own offer.
- The labelled aerial map: the four parts are named on the map, so no key or list is needed.
- Real ground photos of the island (the marsh walkway, the beach walkway, the north end).
- Plain bar charts with one-line notes, a worked yearly cost, the drive-time table.
- The history of the old houses and the town's daily and building rules, said plainly.
- The setback map at the south end: it shows something no street photo can.
- The FAQ, the sources and the photo credits.

## What makes it look ugly, cluttered or hard to read

1. **The first screen has no picture of the place, and its right side is empty** (`before/first-1440.png`). A town guide opens on a headline, four tiles and a sentence, with the right 40 percent of the screen blank. "Strand." sits alone on the H1's third line. The first real photo of the island is about 3,300 px down; the best one, the walkway over the dunes, is buried at 9,400 px under two charts (`before/slice-10.png`).
2. **Boxes everywhere, and boxes inside boxes** (`before/slice-03.png` to `slice-07.png`, `slice-18.png`, `slice-21.png`, `slice-22.png`). Every map and photo is a picture with its own rounded frame inside a padded glass card. Five 2 x 2 grids add 20 small cards for short facts. The two stat pairs are tiles, and the hammock note is a filled box. With the charts, tables and offer boxes, almost nothing on the page sits on the page itself.
3. **One narrow column with ragged right edges, and the desktop's width unused** (`slice-03.png`, `slice-09.png`, `slice-11.png`, `slice-16.png`). Text is 665 px wide, photos 640, the card grids 680, offers and contents 720, tables 760, charts 820, so the right edge zigzags block by block. Each photo takes the full column, so on a desktop the reader scrolls past 450 px of empty space on the right of every screen, and the page is 24,900 px tall.
4. **The four parts are hard to find** (`slice-04.png` to `slice-08.png`). Each part's heading is a small 1.3 rem line in the same weight as the bold labels in the card grids, so the 2,500 px section reads as one long run. A reader looking for "west of US 17" cannot spot where it starts.

## One change per problem

1. Move the beach walkway photo (its own caption and credit, unchanged) into the hero. On a desktop it sits on the right, beside the tiles, the byline and the sub line, under the full-width headline. On a phone it comes after the sub line, so the phone's first screen still shows the headline, the tiles and the answer. Balance the H1 so it breaks into even lines.
2. One card style only, for the charts, the tables and the offers. Maps and photos lose their outer card: the picture keeps its rounded corners and the caption sits under it on the page. The 2 x 2 card grids become plain two-column lists, each item under a thin rule. The stat pairs become plain large numbers under the same thin rule. The hammock note keeps its left rule, without a fill.
3. One block width: every chart, table, map, list and offer is 720 px, the same as the contents box and the top offer, and text stays at 665 px for line length. On screens 1,100 px and wider, the three photos inside the text (the causeway close-up, the marsh walkway, the north end) sit 380 px wide beside the paragraphs they illustrate, in the empty right side. The two maps stay in the column at full size, because they need it. Below 1,100 px nothing floats.
4. Each of the four parts opens with a larger heading, a thin rule and more space above it, so each start is easy to see while scrolling.

No sentence is cut. Nothing is added except the move of one photo.

## What was done, after looking at the after screenshots

- Change 1 as planned. The H1 now breaks as "Pawleys Island real estate: / the upscale south / end of the Strand." On 700 to 1,099 px screens the hero photo is held to 440 px so the hero does not become one big picture.
- Change 2 as planned. The state-law list in "Can you rebuild" is one column, because its four items run from one line to four, and two columns left a hole.
- Change 3, adjusted. At 720 px the four-parts map was taller than a desktop screen, so both maps are narrower (560 and 520 px) and fit on one screen. The causeway close-up sits beside the island part's text (a two-column grid on a wide screen; on a phone it falls after the second paragraph, so no long run of text appears). Two photos stacked beside the island part ran past its end and left a gap, so the marsh walkway moved to the top of "What is it like to live on Pawleys Island all year?", which lost its photo to the hero. The north-end photo sits beside "The beach in front".
- Change 4 as planned.

Result: the desktop page is 22,957 px tall (was 24,870); the phone page is the same length. No sentence was cut or added. Words 4,177 to 4,177.
