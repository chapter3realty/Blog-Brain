# /invest/strategies/dst/: design pass

Reader: a Grand Strand landlord who is tired of managing a rental and has heard that a DST lets him sell, put off the tax and stop. He wants to know what it costs, whether he can buy one, what he gives up and how he gets out.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-18 at 1440 x 900, phone-00 to phone-27 at 390 x 844).

## What makes the page good (keep all of it)

- The headline and the short answer say the whole trade in two lines: no tenants, tax put off, about 6 percent to sales commissions, and you get your money back only when the trust sells.
- The three-choices table (pay the tax, another rental, a DST), then "Which one fits" in four plain sentences, one per choice.
- Every section heading is a question a landlord asks. A reader who scans the headings gets the page.
- The three limits a seller feels, numbered, each with what it means in money.
- The two charts from our own count of SEC filings and our own worked example: the minimums, and the commission next to the tax it buys off.
- The four ways out of a DST, the 45-day backup point, and the two cases that shrink the exchange.
- Real local evidence no other page has: 10 trusts, 11 parcels, about $200 million, our map of the three rental communities, and the aerial photo of one with its parcel outlined.
- The five steps with what our agent does at each, the seller's story with "his numbers, not a promise", the FAQ, the sources and the photo credit.
- Each offer is tied to the section above it.

## What makes it look cluttered or hard to read

1. **The headline is six lines of giant type** (`before/first-1440.png`). The italic line is set at the H1's size, 72 px, so it runs four lines and the headline is 430 px tall. On a phone (`first-390.png`) the four tiles are squeezed two by two, with centred text broken over two or three lines ("About 6% of your / money").
2. **The contents list is a 960 px white card** (`slice-02.png`, `phone-02.png`), wider than anything around it, a full box of short links between the offer and the first section.
3. **Card on card, all the way down.** The three-choices table sits in a card, and on a phone becomes four stacked cards (`phone-03`, `phone-04`). "Which one fits" is four more cards (`slice-03`, `phone-04`). "Who can buy" is two cards (`slice-06`), the four ways out are four cards (`slice-09`, `slice-10`, `phone-14` to `phone-15`), the county counts are three tiles (`slice-11`), each of the five steps is a card (`slice-13`, `slice-14`, `phone-19` to `phone-20`), the story is a box (`slice-14`) and the photo has a white frame (`slice-12`). With about 25 boxes, the two charts, the map and the offers do not stand out.
4. **Ragged right edges.** Text ends at 665 px, the offers and the story at 720, the fits list, the limits, the counts, the map and the photo at 760, the charts and the steps at 820, the contents, the table and the card grids at 960. The right edge jumps every few hundred pixels (`slice-02` to `slice-03`, `slice-06` to `slice-10`, `slice-13`).
5. **The photo stands alone, with 700 px of empty space beside it** (`slice-12`, `slice-13`). After the map, the reader scrolls past a paragraph, then a 760 px photo, then the paragraph that explains it, with the right half of a desktop empty all the way.

## One change for each

1. Set the italic line at about half the H1's size, on its own line, as on /invest/condos/ and /hoa/liens-and-foreclosure/. On a phone the four tiles become four flat rows (icon, label, value) under hairlines.
2. The contents list loses its card and becomes plain columns between two thin rules: three on a desktop, two on a phone.
3. One card style, kept for the two charts, the map and the offers. The three-choices table becomes a plain table under thin rules; on a phone its rows are plain rows split by a rule, not cards. "Which one fits" becomes one list split by rules. "Who can buy" and the four ways out become open items under a top rule, two side by side on a wide screen. The county counts become three flat figures between two rules. The steps become an open timeline with the brass numbers and a thin line between them. The story keeps its brass left rule and loses its box. The photo loses its frame.
4. One block width of 720 px for every block of the page's own: the table, the lists, the charts, the map, the steps, the story and the closing band, the same as the offers.
5. On screens 1,100 px and wider, the aerial photo sits to the right of the two paragraphs that describe the properties ("They include two large apartment communities..." and "A DST share would be a share of a property like these..."). Below 1,100 px the order is as before.

## Chart wording (the owner: some graphs "may be worded a little complicated")

- The minimums chart: its title and the "wealth test only" note in plainer words, same numbers.
- The example chart: its title says what the two bars compare; "on the same money" says which money; the note in two short sentences. Same numbers.

Not changed: every sentence of the body, the order of sections, the offers, the FAQ, the sources, the author and the reviewer. The live listings strip under the hero comes from the shared kit and is not this page's to change.

## Cut sentences

None.

## After (screenshots in `after/`)

- `first-1440`: the headline is two lines and a two-line italic line; the hero tiles, byline and sub line now fit the first screen. `first-390`: the four tiles are flat rows, and the sub line starts above the fold (row padding tightened so the critic's first-screen check passes).
- `slice-00` to `slice-01`: the contents list is three plain columns between rules; the table is plain, 720 px, the same right edge as the offers.
- `slice-05` to `slice-06`, `slice-09`: "Who can buy" and the four ways out are open items under a rule; the charts keep the one card.
- `slice-11` to `slice-12`: the counts are flat figures; the photo sits beside its two paragraphs, with no frame; the steps are an open timeline; the story has its brass rule and no box.
- The page is 800 px shorter on a desktop (16,998 to 16,195) and nothing was cut.
