# /submarkets/surfside-beach/: design pass

Reader: someone thinking of buying in Surfside Beach, to live there all year, to rent by the night, or both. They want to know what the town is like, whether a house is on the rental side of the line, what homes cost, the yearly cost, and whether it floods.

Screenshots: `before/` and `after/` (first-1440, first-390, slice-00 to slice-21 at 1440 x 900 before and slice-00 to slice-18 after, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer says what the town is: its own town, 2 miles of beach, every home within 0.8 mile of the beach road, nightly rentals only near the ocean.
- Life first: the concrete pier with its two restaurants and the $14 fishing day, a year of town events (the Thursday market, the Sunday concerts, three golf cart parades), golf cart rules, the beach rules and the drive times.
- Our own rental map with the streets, and the phone view in two halves, south and north of the pier. The aerial with the line drawn on it.
- The price chart, the building rules by zone, the yearly cost table, the flood chart and the 48 percent rule, the Airbnb month chart and the worked condo example.
- The Ocean Lakes answer, the town history note, the pros and cons, the FAQ, the sources, the photo credits and every offer.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type** (`before/first-1440.png`). The italic line is set at the H1's size, two lines of it, as loud as the headline. On a phone (`before/first-390.png`) the four tiles are squeezed into 80 px columns and "Beach / About 2 miles long" breaks into four centred lines.
2. **Big framed photos in a 640 px column, with the right half of the screen empty** (`before/slice-02`, `slice-03`, `slice-04`, `slice-08`, `slice-09`). The pier aerial, the beach photo and the rental-line aerial each sit in a white card frame 720 px wide and about 560 px tall. The map sits in a card with its own frame inside it, and its key is inside the same card (a box inside a box, `slice-07`).
3. **Boxes for things that are not charts or offers.** The four seasons of events are four cards (`slice-03`; on a phone four stacked cards, `phone-03`, `phone-04`). The town history is a box (`slice-06`). The drive times, the yearly cost and the worked example are tables in glass cards (`slice-05`, `slice-11`, `slice-16`). The building rules are a card 960 px wide (`slice-10`). The pros and cons are two cards (`slice-17`).
4. **Five boxed offer cards** (`slice-09`, `slice-10`, `slice-13`, `slice-15`, `slice-16`). Each is a white card with a small grey title and an orange button, so the page reads as a stack of boxes and the offers look like ads.
5. **Ragged right edge.** Text ends at 820 px, photos and offers at 874, tables at 914, the charts at 974 and the building rules at 1114 (`slice-08`, `slice-10`, `slice-11`).
6. **The homes button in the beach part** is a "Get the homes for sale in Surfside Beach" pill (`slice-04`), where the live homes strip is the stronger offer (owner, 2026-11-08).

## One change per problem

1. The italic line drops to about half the H1's size, on its own line, so the headline reads as one line and one quieter line. On a phone the four tiles become four short rows under thin rules: icon, label, number. The four tiles stay (the triage said three, but each tile's words are kept).
2. On screens 1,100 px and wider, the pier aerial, the beach photo and the rental-line aerial each sit beside the text they explain, 400 px wide, with their captions under them and no card frame. Below 1,100 px the order is as before, and the photos lose their frame there too. The map keeps its own rounded frame and loses the outer card; its key is a plain list under it.
3. One card style, kept for the three charts and the closing offer. The events become a two-column list split by thin rules. The history note keeps its brass left rule and loses its box. The tables and the building rules become plain tables under thin rules (on a phone, plain rows split by a rule). The pros and cons become two plain columns, each under a brass rule.
4. The five section offers lose their box. Each is a thin rule, the title in the page's serif, its line, and the button as the light pill with the orange arrow used on Garden City. Every word and link is kept.
5. One block width of 720 px for the charts, tables, building rules, events list, history note, map and pros and cons, the same as the text and offers.
6. The beach part gets the homes strip, `G.homes("town-surfside-beach", "Surfside Beach", fallback, "Homes for sale in Surfside Beach now")`. The old pill stays as its fallback, shown only while the strip is empty.

Not changed: the order of sections, every sentence, every fact, the map itself, the FAQ, the sources, the credits, the byline and the top offer band (the sibling pages keep theirs too).

## Word changes

- Price chart title: "What a home in Surfside Beach sold for in the past year, at the middle" -> "Near the ocean, houses sold for about twice the inland ones in the past year". Same fact as the section's first sentence; "Middle price" stays as the value label and in the note.
- Airbnb month chart title: "What one month of bookings looks like for a Surfside Beach area rental" -> "In a month, the middle Surfside Beach area rental takes in about $3,800". The $3,800 is the chart's own middle bar (row 38).
- Keywords: "Surfside Beach SC homes for sale" is already in the keywords and stays (the overlap fix: this guide is the indexed answer for the town).

## Cut sentences

None.

## For the lead

- The site's edge drops the top "Live from the MLS" feed on a page that has its own strip unless the page's feed is marked `withStrips`. The sibling town pages are marked. This page needs the same one-line change in `idx-lib/feeds.js` line 298: `"/submarkets/surfside-beach/": { ...townTop("Surfside Beach"), withStrips: true },`. I did not edit idx-lib. Until that line changes, the preview shows no top feed on this page (`after/slice-00`).
- mkpage writes "Updated June 12, 2026" and dateModified 2026-06-12; the live page says November 4. `node build.js dates` sets it. I did not run it.
