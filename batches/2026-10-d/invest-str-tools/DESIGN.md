# /invest/str-tools/: design pass

Reader: someone thinking of buying a condo or house on the Grand Strand to rent by the night. They want to know if it pays its bills, and they want to try a listing in the calculator.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-21 at 1440 x 900, phone-00 to phone-29 at 390 x 844).

## What makes the page good (keep all of it)

- The headline asks the reader's own question, and the short answer gives the range and who lands where: Garden City Beach keeps about $5,000, the Myrtle Beach towers fall about $4,000 short.
- The calculator is the page. It is a dark panel, wide enough for two columns, with the typical condos as buttons, "Who runs it", every cost line and a big "You keep a year". It stands out because it is the only dark block.
- The worked example under the calculator reads the numbers in plain sentences.
- The fee chart: nights needed against nights booked, one group of bars a place. It is the page's strongest point.
- The map of the eight towns, the town chart, the season chart with the ocean's temperature, the growth chart and the houses chart, each with a one-line source note.
- The two USGS aerial photos, each tied to its point in the caption.
- One offer per section, each tied to what the section shows; the FAQ answers are short pointers; the sources and photo credits.

## What makes it look ugly, cluttered or hard to read

1. **The headline is three lines of giant type** (`before/first-1440.png`). The italic line "Count the costs before you offer." is set at the H1's size, so it reads as a second headline. On a phone (`first-390.png`) the three hero facts are three boxes.
2. **The contents list is a 460 px card with nine links, one per line** (`slice-02.png`). After the short answer and the listings strip, the reader scrolls past half a screen of white box before the calculator.
3. **Boxes everywhere** (`slice-04`, `slice-06`, `slice-07`, `slice-11`, `slice-12`, `slice-15`; on a phone `phone-08`, `phone-09`, `phone-16`, `phone-17`). The worked example is a tinted box, the four "where" entries are four cards, the five costs are five cards, the other STR pages are three cards, and both photos sit in a card frame. Nine stacked cards on a phone for what are two plain lists. With that many boxes, the calculator, the charts and the offers do not stand out.
4. **Ragged right edges** (`slice-05`, `slice-08`, `slice-12`, `slice-13`). Text ends at 665 px, the offers and the worked example at 720, the fee chart, map, lists, season chart and photos at 760, the three bar charts at 820. The right edge jumps every few hundred pixels.
5. **The photos stand alone at full column width, with 500 px of empty space beside the text above them** (`slice-05` to `slice-07`, `slice-14`). The towers photo comes after the "where" list, a long way below the paragraph and chart about oceanfront towers it shows. The Garden City photo sits under the houses chart, whose first row it shows.

## One change per problem

1. Set the italic line at about half the H1's size, on its own line, as on the approved pages. On a phone the three hero facts become flat rows under thin rules, with no box.
2. The contents list loses its card and becomes three columns on a desktop and two on a phone, between two thin rules.
3. One card style, kept for the calculator, the charts, the map and the offers. The worked example keeps its brass left rule but loses its box. The "where" list and the cost list become plain lists split by thin rules; each cost keeps its amount on the right. The other STR pages become three plain columns under a thin rule, icons kept. The photos lose their frames.
4. One block width of 720 px for the charts, the map, the lists, the photos and the link columns, the same as the offers and the worked example. The calculator keeps its 860 px: it is the page's one tool and needs two columns.
5. On screens 1,180 px and wider, each photo sits beside the text it explains, in the empty right side: the towers photo beside the opening paragraph and the fee chart (oceanfront towers, the hard case), and the Garden City photo beside the houses chart. Below 1,180 px the order is as before.

## Chart wording (owner: "some of the graphs may be worded a little complicated")

Only titles, labels or notes a stranger would stop on. Same facts and numbers. The list is in the result.

No sentence is cut. Nothing is added.
