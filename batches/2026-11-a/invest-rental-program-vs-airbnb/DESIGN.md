# /invest/rental-program-vs-airbnb/: design pass

Reader: someone who owns or is about to buy an oceanfront condo and asks whether to put it in the building's rental program or run it on Airbnb. They want to know what each keeps, what a real year looks like, and what the program ties them to.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-21 at 1440 x 900, phone-00 to phone-31 at 390 x 844).

## What makes the page good (keep all of it)

- The headline asks the reader's question, and the short answer gives the three numbers that decide it: 38.6 percent, 15.5 percent, $614 against $845 of each $1,000.
- The real owner statement, line by line, down to the $66.84 check. No other page has it.
- The "what the owner keeps of each $1,000" bar chart and the year-both-ways table, with the same bookings on both sides.
- The calculator that turns the difference into pay per hour.
- The building chart from our own count, the Grande Shores photo, the exit steps, the furnishing rules down to the dishes, the lender table set against the desk's own rules.
- Every section heading is a question people ask. One offer per section, each tied to what the section showed. The FAQ, the sources and the photo credit.

## What looks ugly, cluttered or hard to read

1. **The headline is three lines of giant type** (`before/first-1440.png`). The italic line "What you keep, both ways." is set at the H1's full size. On a phone (`first-390.png`) the three tiles are squeezed into 110 px columns and "8 in 10 oceanfront condos for sale in a program" breaks into five centred lines.
2. **The contents list is a 1,130 px white card** (`slice-01`, `slice-02`), much wider than the text under it, and the first thing after the short answer that looks like a box.
3. **Boxes everywhere** (`slice-02`, `slice-07`, `slice-09`, `slice-10`, `slice-13`; on a phone `phone-03`, `phone-07`, `phone-13`, `phone-14`, `phone-18` to `phone-21`). The three fees are three tiles. The four exit steps are four cards. The six furnishing rules are six cards. The four tax and license notes are four cards. The three comparison tables sit in glass cards, and on a phone they become eleven stacked cards. The photo sits in a frame. With that many boxes, the statement, the charts, the calculator and the offers do not stand out.
4. **Ragged block widths** (`slice-03` to `slice-07`). The statement is 560 px wide, the bar charts 820, the comparison tables 960, the year table 640, the photo 640, the steps 640, the rules 760, the lender table 720. The calculator runs the full 1,130 px, so each label sits 900 px from its input box (`slice-06`, `slice-07`).
5. **The statement and the photo each stand alone with an empty right half beside them** (`slice-02`, `slice-03`, `slice-07`). The statement is the page's best evidence, but a reader scrolls past the paragraphs that explain it, then down a 560 px card, with 700 px of empty space beside it.

## One change per problem

1. The italic line at about half the H1's size, on its own line, so the headline reads as one question and a short answer. On a phone the three tiles become three short rows: icon, number, label, split by thin rules.
2. The contents list loses its card: three columns on a desktop and two on a phone, between two thin rules, 720 px wide.
3. One card style, kept for what a reader looks at or uses: the statement, the two bar charts, the calculator (its dark panel stays) and the offers. The three comparison tables become plain tables under thin rules; on a phone their rows are plain rows split by a rule. The three fees become one row of three figures split by thin rules. The exit steps become one numbered list split by rules, numbers kept. The furnishing rules and the tax notes become two-column lists, each item under a thin rule. The photo loses its frame.
4. One block width of 720 px for the tables, the charts, the steps, the lists, the photo and the calculator, the same as the offers.
5. On screens 1,100 px and wider, the statement sits beside the paragraphs that explain it (the three fees, the health club and repairs, the slow January), and the photo sits beside the two paragraphs about the building names. Each section's first paragraph stays directly under its heading, so the answer an answer engine lifts is unchanged. Below 1,100 px the order is as before.

## Chart wording (the one wording change allowed)

- Building chart title: "Oceanfront condos for sale that say they are in a rental program, by building" becomes "How many condos for sale in each oceanfront building say they are in a rental program", so "75 of 83" reads at once.
- Building chart note: "All 17 buildings with 15 or more condos for sale, by the building name their listings give. One more listing name, "Mb Resort Rt" (21 of 34), names no building, so it is left out." becomes "All 17 buildings with 15 or more condos for sale, named as their listings name them. One more listing name, "Mb Resort Rt" (21 of 34), is not the name of a building, so it is left out." The last sentence stays.
- Keep chart note: "Airbnb's figure is the fee most hosts pay; Vrbo's is its pay-per-booking fee." becomes "Airbnb's figure uses the fee most hosts pay. Vrbo's uses its pay-per-booking fee."

No sentence is cut. Nothing is added.

## Result

- After screenshots in `after/`. First screen: the headline is two lines and a short italic line; on a phone the tiles are three flat rows (`after/first-1440.png`, `after/first-390.png`).
- Page height at 1,440 px went from 18,991 to 18,228 px. Phone height from 26,974 to 26,580 px.
- Score 100 before and after. trim-check: same words except the three chart lines above; the only new "name" is the byline date mkpage resets. build.js check passes; audit fails on this page only on the two mkpage date lines. critic: nothing cut off, overlapping or scrolling sideways at 320, 390, 1,024 and 1,440 px; the three 320 px "wall of text" warnings were on the page before and come from the copy, not the design.
