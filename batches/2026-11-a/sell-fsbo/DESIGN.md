# /sell/fsbo/: design pass

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-23 at 1440 x 900, phone-00 to phone-35 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer says yes, names the two legal steps, and gives the $350,000 home and the $3,500 per 1 percent at once.
- The calculator: two boxes, two results, no rate suggested.
- The three-ways table, the drawing of the state form with the coastal questions picked out, and the three charts with one-line notes.
- The chooser "Is selling by owner a good idea for you?" and the eight steps with "Required by law" tags.
- Plain legal facts: the attorney, the contract, the wire fraud warning, what you do not have to disclose, the sales that need no form, the lead rule, the tax.
- The coaching offer, its fee credit, the form with its consent text, the FAQ, the sources, the legal notice.

## What makes it look ugly, cluttered or hard to read

1. **The headline is five lines of giant type** (`before/first-1440.png`, `first-390.png`). The italic sub line is set at the H1's size, so the first screen is all headline. On a phone the three tiles are squeezed into 110 px columns, and "$3,500 kept per 1 percent of fees on a $350,000 home" breaks into five centred lines.
2. **Twenty-four cards in six grids, one after another** (`slice-02` to `slice-03`, `slice-05`, `slice-09`, `slice-15` to `slice-18`). The three duties, the attorney choices, the four form rules, the four situations, the eight steps (each its own card), the four tax facts and the six coaching items all use the same rounded glass card. The page reads as one long stack of tiles, and the two places where cards help (choosing an attorney, choosing your situation) do not stand out.
3. **Boxes inside boxes, and too many box styles** (`slice-06` to `slice-08`, `slice-10`, `slice-12`, `slice-14`). The form drawing is four boxes deep: a figure card, a white sheet, a grey row, a white coast box. There are four dark boxes (the calculator, two number boxes, the lead form), a white box with a brass border for the lead rule, cream offer boxes, and brass or red borders on eleven cards and steps. With that many highlights, none of them stands out.
4. **One narrow column with a zigzag right edge, and the desktop's right side empty** (`slice-03`, `slice-04`, `slice-08`, `slice-11`, `slice-13`). Text is 665 px wide, the calculator 600, offers 720, cards 760, charts 820 and the table 960. The calculator sits under its paragraph with 680 px of empty space beside it, and the aerial photo takes a full 500 px screen of its own.

## One change per problem

1. Set the italic sub line at about half the H1's size, on its own line, so the headline is two lines and the sub line two. On a phone, the three tiles become three short rows (icon, number, words on one or two lines).
2. Keep cards only for the two choosers (the attorney cards and the situation cards). The three duties, the four form rules, the four tax facts and the coaching list become plain lists under thin rules, two or three columns on a desktop. The eight steps keep their numbers and the line between them, without a card around each step.
3. One card style and no box inside a box. The form drawing becomes one card with plain rows; part V keeps the one brass outline. The two dark number boxes become large numbers under a thin rule. The lead rule becomes a note with a left rule, at the page's text size. The brass and red outlines on cards and steps go; the red step number and the "Required by law" tag stay.
4. One block width of 720 px for charts, lists, cards, the form drawing and the coaching form, the same as the contents box and the offers; the three-ways table stays wider because it has six columns. On screens 1,100 px and wider, the calculator sits beside the two paragraphs that explain it, and the aerial photo sits beside the FEMA paragraph, in the empty right side. Below 1,100 px the order is as before.

No sentence is cut. Nothing is added. The feed of listings between the hero and the short answer is set in the shared `idx-lib/feeds.js`; it is noted as an open issue, not changed here.
