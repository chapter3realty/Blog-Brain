# /invest/run-the-numbers/: design pass

Reader: an investor, often from out of town, with one Myrtle Beach rental in mind. They want to know if it is a good deal, what the tax will really be, what condo dues do to the rent, and whether we will run the numbers for them.

Screenshots: `before/` and `after/` (first-1440, first-390, slice-00 to slice-19 at 1440 x 900, phone-00 to phone-05 at 390 x 844). `pairs/compare-*.png` set the two side by side.

## What makes the page good (keep all of it)

- The short answer says the hard truth first: usually not, for cash flow. 4 to 5 percent on a house, 1.4 on a condo, against a 6 percent target.
- The working analyzer, framed on the page, right under the short answer, then the live homes strip.
- The numbers sheet for one real Carolina Forest house, line by line, with where each number comes from.
- The same sheet on three homes, as bars of where the rent goes.
- Our own count: 14 of 2,975 houses pass the 1 percent rule, by area. The aerial of Carolina Forest.
- The tax section: what the listing shows against what you will pay, and the two bars of the next bill.
- The condo dues chart, the cost table, the three things a calculator cannot see (two real stories), the form, the FAQ, the sources, every offer.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type** (`before/first-1440.png`). "deal?" sits alone on the second line, and the italic line is set at the H1's size over two more lines. The three facts are tiles, and the dek is at the bottom of the first screen. On a phone (`before/first-390.png`) the tiles are 110 px columns and "of a 2-bedroom condo's rent goes to dues" breaks into five centred lines.
2. **Five offer boxes in the body** (`before/slice-07`, `slice-09`, `slice-11`, `slice-13`, `slice-15`): the dark 1 percent offer, then a tax box, a condo dues box, an insurance box, then the form. With that many, the two that matter (the 1 percent count and the form) do not stand out.
3. **Cards for things that are not charts or offers.** The cap rate section is five cards in a 3 + 2 grid with an empty slot (`before/slice-11`, `slice-12`). The three things a calculator cannot see are three cards with icon circles (`before/slice-14`). The cost table sits in a glass card (`before/slice-13`). The photo has a white card frame (`before/slice-06`, `slice-07`), and the two figures' notes sit in a second box inside the figure (`before/slice-05`, `slice-09`).
4. **Ragged right edges, and an empty right half.** Text ends at 665 px, the form at 680, the sheet, rent chart, tax chart and 1 percent offer at 760, the bar charts at 820, the cards at 960 and the analyzer frame at 1,000 (`before/slice-01` to `slice-14`). The photo sits alone under the 1 percent chart, 300 px tall, with the right half of the screen empty.
5. **Charts that need reading.** "Where each home's rent goes in a year" has a key item, Insurance, with no bar on any home (it is left to the reader's quote), and the key wraps to two lines. The 1 percent, tax and dues charts have titles that name the measure, not the finding (`before/slice-05`, `slice-06`, `slice-09`, `slice-10`).
6. **The page competes with /invest/long-term-rental/** for "rental property calculator" and "DSCR calculator", and repeats the 4 and 6 percent tax rules that /buyers/property-taxes/ owns. The cap rate section repeats what /invest/rental-returns/ covers by area.

## One change per problem

1. The H1 is balanced over two lines, so no word sits alone. The italic line drops to about half the H1's size, on one line. The three facts are one plain line between two thin rules, no tiles. On a phone they are three flat rows: icon, number, words.
2. Two offer cards stay: the dark 1 percent offer after the count, and the form at the end (with the closing band). The tax, condo dues and insurance offers keep every word and their buttons, but lose the box: a brass rule on top, the title, the line and the button.
3. One card style, kept for the analyzer, the sheet and the four charts. The three things a calculator cannot see become three plain columns under a thin rule (one column on a phone). The cost table is a plain table under thin rules. The photo loses its frame. The figures' notes lose their inner box. The sheet's two notes lose their grey pills and keep a brass left rule.
4. One block width of 720 px for the analyzer frame, the sheet, every chart, the table, the columns, the offers and the form. On screens 1,180 px and wider, the photo sits beside the 1 percent chart and stays in view while the reader goes down the bars. Below that it stays under the chart, as before.
5. Plainer chart words, same facts (see below). The Insurance key item and its zero-width bar are not drawn.
6. The overlap fix, as given: the new title, the three keywords dropped, one sentence linking the long-term rental analyzer, the cap rate section cut to its targets and a link to /invest/rental-returns/, and the 4 and 6 percent rules cut to one sentence and a link to /buyers/property-taxes/.

Also: the header phone number is hidden from 1,000 to 1,100 px, copied from the approved pages, because it pushed the page 5 px wider than a 1,024 px window (critic `overlap.page-scroll`, before and after).

Not changed: the order of sections, the analyzer, the homes strip (from the site's edge), the sheet, every chart's numbers, the photo, the stories, the FAQ, the sources, the byline (Devin Day writes, Tim Nash reviews) and every offer.

## Word changes

- Title: "Myrtle Beach Rental Property Calculator: Is It a Good Deal?" -> "How to Analyze a Myrtle Beach Rental: 1% Rule, Tax, Dues"
- Keywords: dropped "rental property calculator Myrtle Beach", "cap rate Myrtle Beach", "DSCR calculator".
- Added after the analyzer: "Run any address through our free long-term rental analyzer." (link /invest/long-term-rental/)
- Rent chart title: "Where each home's rent goes in a year" -> "What is left of a year's rent: 58 and 61 percent on the houses, 20 percent on the condo" (computed)
- Rent chart key: "Insurance" dropped (zero on every home; no bar is drawn).
- 1 percent chart title: "Houses for sale whose yearly rent is at least 8 percent of the price" -> "Longs comes closest: houses for sale whose yearly rent is at least 8 percent of the price"
- 1 percent chart note: "The 1 percent rule asks for 12 percent a year, so the bar uses a lower test, 8 percent, to show where the rent comes closest." -> "The 1 percent rule asks for 12 percent a year. The bar uses a lower test, 8 percent, to show where the rent comes closest."
- Tax chart title: "Your next tax bill against the seller's, outside city limits" -> "Your next tax bill outside city limits: about 3.9 times the seller's on an owner's home, 1.1 times on a rental" (computed)
- Dues chart title: "The middle 2-bedroom condo's HOA dues, as a share of HUD's rent" -> "HOA dues take 23 to 48 percent of HUD's rent on the middle 2-bedroom condo" (computed)
- Tax section: added "More on the 4 and 6 percent rates: Horry County property tax rates." (link /buyers/property-taxes/)
- Cap rate section: added "Cap rates by area are on our rental returns page." (link /invest/rental-returns/)

## Cut sentences (the overlap fix only)

From the tax section, the 4 and 6 percent rules kept to one sentence:
- "The home you live in is taxed on 4 percent."
- "That 6 percent is the share of the value that is taxed, not the yearly rate."
- "A rental also pays the school operating tax, which a home you live in does not." (still in the FAQ)
- "Rent out the home you live in for more than 72 days in a calendar year, and it loses the 4 percent rate."
- "Active-duty military under orders keep it."

From "What cap rate, cash-on-cash return and coverage should you aim for here?", cut to its targets and the link:
- "None of the three homes in the sheet reaches the cap rate target."
- "Why do investors buy here?"
- "Prices in the metro rose about 4.8 percent a year in the five years to July 2026, above our 3 percent target."
- "Over ten years they rose 6.1 percent a year."
- "In the three years to then they fell 1.7 percent in total."
- "Our agents keep a list of investors who buy for a modest cash flow plus that rise in price." (the FAQ says it too)
- "The rental returns page breaks the rise down by area."
- Card "Cap rate": "The rent left after every cost in a year, divided by the price." "No loan is in it, so it compares homes, not deals." "Our target: 6 percent or more."
- Card "Cash-on-cash return": "The cash left after the loan payments in a year, divided by the cash you put in." "If you pay cash, it is the same as the cap rate." "A loan raises it or lowers it, and the calculator shows which once you type the payment." "With no loan, aim for the same 6 percent."
- Card "Coverage (DSCR)": "The debt service coverage ratio: the rent divided by the monthly cost of the loan, taxes, insurance and dues." "A DSCR loan is judged on this ratio." "A loan officer at our preferred lender starts writing DSCR loans at 0.75, so a home under 1.25 can still get one." "Our target: 1.25, a rent a quarter more than those monthly costs."
- Card "The 1 percent rule": "A month's rent should be at least 1 percent of the price." "It is a quick screen." "The cap rate tells you more."
- Card "The 50 percent rule": "Investors' shorthand: the costs before the loan take about half the rent." "The chart of the three homes above shows it fits the houses and fails the condo."

## Notes

- The site's fonts are `font-display:optional`, so in the preview the headline font is Fraunces on some loads and the fallback on others. Some before and after shots differ in font for that reason only.
- The byline date reads "Updated September 6, 2026" in this build, not "November 4". That is mkpage's date line; `node build.js dates` sets it. It is the only trim-check finding and the only audit FAIL on this page.
