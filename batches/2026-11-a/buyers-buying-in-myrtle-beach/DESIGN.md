# /buyers/buying-in-myrtle-beach/: design pass

Reader: someone thinking of buying here, often from another state, who typed "is Myrtle Beach a buyer's market". They want a yes or no, the numbers behind it, what a home costs, and the steps.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-16 at 1440 x 900, phone-00 to phone-23 at 390 x 844).

## What makes the page good (keep all of it)

- The headline answers the question in its own words: a buyer's market for condos, not yet for houses.
- The short answer gives the two numbers (7.5 months, about 4) and the city's year of condo supply.
- The months-of-supply bar chart, colored by who has the edge, with condos and houses by price.
- The map and the town table: ten towns, houses and condos side by side, the same three colors.
- The yearly cost chart with the paragraphs that explain it.
- The eight steps in order, each saying what happens and what we do.
- The two out-of-state numbers, the six "what can go wrong" items each with a fix, the FAQ, the sources, the credits.
- One offer per section, each tied to what the section showed.

## What looks ugly, cluttered or hard to read

1. **The headline is three lines of giant type** (`before/first-1440.png`). The italic line is set at the H1's size, so the first screen is mostly headline. On a phone (`first-390.png`) the three tiles are squeezed into 110 px columns and "about 4 months" breaks over two lines.
2. **The contents list is a card** (`slice-01.png`, `slice-02.png`, `phone-02.png`). A white box with seven links sits between the short answer's offer and the first section, one more box before the reader reaches anything.
3. **Card on card down the page** (`slice-05`, `slice-06`, `slice-09`, `slice-10`, `slice-12`, `slice-13`; on a phone `phone-11` to `phone-17`). Each of the eight steps is a white card, two of them with a brass outline. The six "what can go wrong" items are six cards in a grid, and the short ones (Insurance, Condos run like hotels) leave empty space at the bottom of their card. The town table sits in a card, and both photos sit in a card frame. With that many boxes, the charts and offers do not stand out.
4. **A second card style for two numbers** (`slice-11.png`, `phone-14.png`). The out-of-state numbers are two dark navy tiles, the only dark boxes in the body. On a phone each tile is 140 px wide and its sentence breaks into five lines.
5. **Big photos break the text, and the right side of a desktop is empty** (`slice-03.png`, `slice-07.png`). The beach photo cuts the market paragraphs in two. The Carolina Forest photo is 555 px tall between the new-homes paragraph and the yearly cost, a full screen of picture, while 400 px to the right of every paragraph stays empty.

## One change per problem

1. The italic line at about half the H1's size, on its own line. On a phone the three tiles become three flat rows under thin rules: icon, label, number.
2. The contents list loses its card: three columns on a desktop and two on a phone, between two thin rules. The FAQ link takes the last row to itself.
3. One card style, kept for the charts, the map and the offers. The steps lose their cards; they keep the rail and the numbered dots, and steps 5 and 8 keep their brass dot without the outline. The six risks become an open two-column list, each item under a thin rule. The town table becomes a plain table under thin rules. The photos lose their frame.
4. The two out-of-state numbers become flat: the number in brass, the sentence under it, between thin rules, in two columns on a desktop and two rows (number beside sentence) on a phone.
5. On screens 1,100 px and wider, each photo sits to the right of the paragraphs it goes with: the beach beside the market paragraphs, Carolina Forest beside the price paragraphs. Below 1,100 px the order is as before.

## Chart wording

Three captions say the same thing in plainer words (see chartWording in the report): the supply chart's note, the map's caption and the yearly cost chart's title and note.

No sentence is cut. Nothing is added.
