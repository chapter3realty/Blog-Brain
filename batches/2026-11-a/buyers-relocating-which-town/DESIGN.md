# Which town fits you: design notes

Page: /buyers/relocating/which-town/. Screenshots: `before/` (first-1440.png, first-390.png, s00 to s35 at 1440, full-390.png), phone sheets in `ph-before/`.

## What makes the page good (keep all of it)

- It is complete. Thirteen places, each with its own story: what the place is like, one or two hard facts, the price, an offer. The owner valued it for being big.
- The short answer names a place for each need in five sentences.
- The map and the filter list sit side by side, and every name jumps to its entry.
- The headings carry the answer: "1. Loris: the most land for the money". A reader can scan the headings alone.
- The comparison chart, the drive and flood table, the Longs and North Myrtle Beach cost cards, the tax chart and the city line table are clean and easy to read.
- The photos are real places. The labelled aerials (Little River marinas, Cherry Grove channels, Market Common, Murrells Inlet docks) show something a street photo cannot.

## What makes it look ugly or cluttered

1. **One narrow column down a 31,700 px desktop page, with the right half empty.** (s03 to s20 at 1440.) Each entry is a tall stack: a paragraph, a 720 by 540 photo, more paragraphs, a price box. The page reads as a long scroll of near-identical blocks.
2. **The satellite photos dominate.** (s03, s04, s06, s11.) At 720 px wide, eleven aerials of roofs and trees are the biggest thing in every entry, and Loris, Aynor, Longs and Carolina Forest look alike at a glance. Each photo also sits in its own white card with a shadow, a box around a picture.
3. **Boxes everywhere.** (s07 Conway, s14 Surfside Beach, phone sheet ph-before/sheet01.) An entry can stack four boxes in a row: a fact card, a second fact card, a price card with a bordered offer pill inside it, then an offer card. The yearly-cost section and the rental rules repeat the fact cards (2, 2 and 6 more). Three different card styles compete.
4. **The filter list is a tall stack of 13 shadowed cards,** and on a phone the nine filter chips take nine rows, one chip each. (s01, s02, ph-before/sheet00.)

## One change per problem

1. **On a desktop (1080 px and wider), the photo sits beside the entry's text,** on the right, about 440 px wide. The text column stays about 640 px (about 68 characters a line). On a phone and a tablet, the order is unchanged: first paragraph, photo, the rest.
2. **The photo loses its card frame:** a photo with rounded corners and its caption under it. Smaller and beside the text, the aerials stop dominating. No photo is swapped: each aerial shows what its entry's text describes (the lots, the new subdivision, the marinas, the channels, the cul-de-sacs, the Market Common, the bridge, the pier, the docks), which a street photo would not.
3. **Fact lines and the price line lose their boxes.** A fact is an icon and a line of text. The price closes each entry under a thin rule, with the offer button under it. The only cards left are the offer cards (one style) and the data blocks (charts, tables, the two cost cards).
4. **The filter list becomes plain numbered rows** with a hairline between them. On a phone the chips are a little smaller so two fit on a row.

Not changed: the words, the order of sections, every entry, the map, the charts, the tables, the FAQ, the sources, every offer. No new widget, tile or badge. Nothing added to the first screen.

## Cut sentences

None.

## Result

- Desktop page height 31,671 px to 23,008 px; phone 40,218 px to 39,040 px. Words 4,582 to 4,582.
- The first paragraph of each entry stays directly under its heading (the scorer's section lead, and what a search snippet takes); the photo and the rest of the entry sit in a grid on the section's wrap from 1080 px.
- Gates: trim-check flags only the byline date mkpage resets; score 100 before and after; build check OK; audit FAILs only the two date lines; critic 0 blocking at 320, 390, 1024 and 1440 (the 3 read.wall warnings were there before, at the FAQ's end and the city section).
