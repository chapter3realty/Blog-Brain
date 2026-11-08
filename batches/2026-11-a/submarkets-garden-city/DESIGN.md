# /submarkets/garden-city/: design pass

Reader: someone thinking of buying in Garden City, for a beach condo, a house with a dock, a home to live in all year, or a nightly rental. They want to know which part fits them, what it costs, whether they can rent it, and whether it floods.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-24 at 1440 x 900, phone-00 to phone-34 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer sends each kind of buyer to a part: a condo on the sand, a house with a dock, a house lived in all year.
- The map: our own aerial with the five numbered parts, the county line and the key. It is the page's main picture (slice-02, slice-03).
- Each part opens with what it is like to live there, names its buildings or streets, has its own labelled aerial, one price and one offer.
- The price bar chart by part, the Airbnb month chart, the worked example of one condo's year, the flood policy and high-tide charts.
- The beach rules, the drive times, the winter list and the golf cart example, the storms, the yearly cost table, the three-place comparison.
- The FAQ, the sources, the photo credits and every offer.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type** (`first-1440.png`). The italic line is set at the H1's size, so it is as loud as the headline. On a phone (`first-390.png`) the four tiles are squeezed into 85 px columns, and "Beach road / About 5 miles" breaks into four centred lines.
2. **The five parts run about six desktop screens in a 640 px column, with the right half of the screen empty** (`slice-04` to `slice-09`). Each part is a heading, a paragraph, then a photo 480 px tall in a white card frame, then the price. The reader scrolls past one big photo after another.
3. **Boxes for things that are not charts or offers.** The four beach rules are four cards (`slice-14`, `slice-15`; on a phone four stacked cards, `phone-18`). The four Airbnb numbers are four tiles (`slice-11`). The golf cart example is a box (`slice-16`). Each of the five tables sits in a glass card (`slice-12`, `slice-15`, `slice-16`, `slice-19`, `slice-20`); on a phone the card's padding squeezes them, so "Your own flood policy on the unit, if you buy one" wraps to five lines (`phone-24`). The map sits in a card with its own frame inside it, a box inside a box (`slice-02`, `slice-03`). With this many boxes, the charts and offers do not stand out.
4. **Ragged right edges.** Text ends at 665 px, the photos, the Airbnb numbers and the example at 640, the beach rules at 680, the offers at 720, the tables at 760 and the bar charts at 820 (`slice-10`, `slice-12`, `slice-13`, `slice-17`). The right edge jumps every few hundred pixels.
5. **The high-tide chart's title is hard to read** (`slice-18`): "Days a year the high tide reached flood level at the nearest working tide gauge" puts three ideas in one line.

## One change per problem

1. The italic line drops to about half the H1's size, on its own line, so the headline reads as two lines and one quieter line. On a phone the four tiles become four short rows under thin rules: icon, label, number.
2. On screens 1,100 px and wider, each part's photo sits beside its text, 400 px wide, without a card frame. Below 1,100 px the order is as before, and the photo loses its frame there too.
3. One card style, kept for the charts and the offers. The tables become plain tables under thin rules. The beach rules become a two-column list split by rules. The Airbnb numbers become four flat figures between two rules. The golf cart example keeps its brass left rule and loses its box. The map keeps its own rounded frame and loses the outer card.
4. One block width of 720 px for the charts, tables, photos (below 1,100 px), the Airbnb numbers, the rules list and the example, the same as the offers. The map stays at 640 px, so the whole map fits on one screen.
5. The tide chart's title and note are said in plainer words, with the same facts. The month chart's note, "AirROI's average per active listing over two years", is said in plainer words too.

Not changed: the order of sections, every sentence, every offer, the map itself, the FAQ, the sources and the credits. The live listings strip under the hero comes from the shared kit.

## Cut sentences

None.
