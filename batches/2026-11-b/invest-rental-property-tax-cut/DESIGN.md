# /invest/rental-property-tax-cut/: design pass

Reader: someone who owns a rental in Myrtle Beach, or wants to buy one. They read that Governor-elect Alan Wilson wants to end the higher tax on rentals. They want to know what it would do to their tax bill, whether it can really happen, and what to do while they wait.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-16 at 1440 x 900, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer gives the bill in three numbers ($5,347 today, $3,564 or $2,037 at 4%) and the hard truth: no bill exists, and Republicans are 4 House votes short of two-thirds.
- Wilson's own words in a quote, with the source.
- The bill chart, the two-place table and the calculator. The calculator opens with its answer for the $350,000 example.
- The votes chart, the two routes to a change, the pending bill S. 815.
- The cost to the county and its schools: the shares chart, the Lincoln study in its own words, where the $5,347 goes.
- The short run and long run, the past examples, and the line that none of this is a forecast.
- Both sides' words, the same tests for each. What we do now, in three checks.
- The FAQ, the sources, the photo credit and every offer.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type in title case** (`first-1440.png`): "Governor-Elect Alan Wilson Wants to Cut the Tax on Rentals. What It Would Mean for Myrtle Beach Investors". The first screen is all headline. On a phone (`first-390.png`) the H1 runs six lines, and the three facts are squeezed into 110 px tiles with the words centred on four lines each.
2. **The contents list is a white card** (`slice-02`, `phone-02`). It adds a box between the offer and the first section.
3. **Boxes all the way down.** The quote is a card (`slice-02`, `slice-03`). The photo sits in a card frame (`slice-03`). The three tables are cards (`slice-05`, `slice-11`, `slice-13`). Inside the calculator card, each result is its own box, and the 6% row has a brass outline (`slice-05`). The two routes are two cards (`slice-07`). The short run and long run are three cards, the first with a brass outline (`slice-10`, `slice-11`). With this many boxes, the charts, the calculator and the offers do not stand out.
4. **The charts take effort to read** (`slice-04`, `slice-07`, `slice-08`, `slice-09`). Each title says what the chart is, not what it shows. The votes chart sits in the left 440 px of a 760 px card, so the House and Senate stack and half the card is empty. The shares chart says "of tax base" and puts the colour key in a long caption under the bars.
5. **The right edge zigzags.** Text ends at 665 px, the offers at 720, the bill chart at about 490, the tables, the quote, the photo, the calculator and the votes and shares cards at 760, and the "where it goes" chart at 820 (`slice-04`, `slice-05`, `slice-07`, `slice-09`).

## One change per problem

1. The new H1 from the overlap fix, in sentence case: "What would Wilson's rental tax cut mean for Myrtle Beach?". At a normal size it reads as two lines on a desktop. On a phone the three facts become three flat rows: icon, number, words, split by thin rules.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. One card style, kept for the four charts, the calculator and the offers. The quote keeps a brass left rule and loses its box. The photo loses its frame. The three tables become plain tables under thin rules, and on a phone their rows are plain rows split by a rule. The calculator's results become plain rows split by rules inside the one card; the 6% row stays bold, with no outline. The two routes become two plain columns, each under a thin rule. The short run and long run become a plain list under rules: "First" across the top with a brass top rule, then the short run and the long run side by side.
4. Each chart title says the finding, with the same numbers. The votes chart draws the House and the Senate side by side on a wide screen, so the card is full and both read at once. The shares chart says "of taxable value", and its key sits beside the bars on a wide screen.
5. One block width of 720 px for the charts, tables, calculator, quote, photo, routes and lists, the same as the offers and the text.

The homes strip: the site's edge already puts the live homes feed under the opening. This page has no "Send me homes in X" button to replace; its offers ask for a rental's address so we can work out its tax.

## Word changes

- H1: "Governor-Elect Alan Wilson Wants to Cut the Tax on Rentals. What It Would Mean for Myrtle Beach Investors" -> "What would Wilson's rental tax cut mean for Myrtle Beach?" (overlap fix).
- Added, in "How much property tax does a Myrtle Beach rental pay now": "How the 4% and 6% rates work today is on our Horry County property tax page." linking /buyers/property-taxes/ (overlap fix).
- Keywords: dropped "Act 388 rental property", "South Carolina 6 percent property tax", "rental property tax Myrtle Beach", "4 percent vs 6 percent assessment ratio" (overlap fix).
- Bill chart title: "Yearly property tax on a $350,000 rental inside Myrtle Beach city limits" -> "At 4%, the $5,347 tax on a $350,000 Myrtle Beach rental falls to $3,564 or $2,037".
- Votes chart title: "Seats in each house, and the two-thirds a new rate needs" -> "Republicans hold two-thirds of the Senate, but not of the House".
- Shares chart title: "Horry County: each kind of property's share of value, and of the tax base" -> "Horry County rentals are 36.4% of the value but 47.2% of the taxable value".
- Shares chart bar labels: "% of tax base" -> "% of taxable value".
- Shares chart note: "Gray: ... Brass: ... 2018, from the Lincoln Institute of Land Policy study." -> "Gray bar: ... Brass bar: ... The figures are for 2018, from the Lincoln Institute of Land Policy study."
- Votes chart screen-reader label: one label "Two bars. The House: ... The Senate: ..." -> one label on each chamber's drawing, "The House: ..." and "The Senate: ...", same words otherwise.
- Shares chart screen-reader label: "percent of the tax base" -> "percent of the taxable value" (three times), to match the bars.
- "Where it goes" chart title: "Where the $5,347 on the $350,000 city rental goes" -> "The largest part of the $5,347 on the $350,000 city rental is the school operating tax".

## Checks

trim-check clean. Score 99 before and after (charts counted 2 -> 3). claims-scan 0. build check OK; build audit has no FAIL on this page (two warnings it had before). critic 0 blocking, 0 warning at 320, 390, 1024 and 1440.

## Cut sentences

None.
