# Review round 1: /sell/best-time-to-sell/

Fixed 2026-11-08, in the spec only (`specs/sell-best-time-to-sell.js`). Three reviewers: critic (7), reader (7), owner's eye (8). New facts are rows F1 to F8 in facts.md, marked VERIFIED-BY-FIXER. Each one reads a file already in DATA, and the spec stops the build if a value moves.

## Blocking findings and what changed

### Critic

1. **Truth: tourist season and school "both come after the busiest months".** Fixed: "Tourist season peaks in July, after the busiest months for home sales. School lets out in early June, during one of them."
2. **Overlap: the tax card restated Section 121.** Fixed. The two tax items are now one item, "Tax dates", with only the timing point. "Owning and living in your main home for 2 of the last 5 years can mean no federal tax on up to $250,000 of your profit. If you are a few months short, selling early can cost that." The rental line is one sentence ("has its own one-year date"). Links go to /sell/capital-gains/, IRS Topic 701 and IRS Topic 409, and each link says where it goes.
3. **Readability: "it", "gain", the link words "Selling a few months early".** Fixed by item 2. "Gain" is now "profit", and the link words are "IRS Topic 701".
4. **Readability: the condo rental sentence left the reader hanging.** Fixed. The condo card now says what it means: "If you rent the condo by the night, a spring sale gives up the summer." The next line gives the cost of the other choice: "Condos that closed from September to November sold for about the same as the months around them, not the spring high" (row F3).
5. **Logic: the asking-price card did not show that the price matters more.** Fixed. The card now leads with the price cuts ("about 3 in 10 listings had cut their asking price"), then what a cut costs in time: "Each week a home waits for a cut moves its closing a week later, and can push a spring closing into summer." The sale-to-list line comes after that. The critic asked for "what an overpriced listing costs in days". We have no source that measures it, so the page states the arithmetic only.
6. **Visuals: one word alone on the last line of a chart title.** Fixed. "Home sales recorded each month, 2021 to 2025" (Horry County moved to the note). "How much more or less homes sold for in each month". Neither leaves a word alone at 320, 390 or 1440 px.

### Reader

1. **2025 broke the pattern, and the page never came back to it.** Fixed. The paragraph now says what happened to prices in 2025: "Prices still followed the season that year. February was again the lowest month for price, and houses that closed in June and July still sold above the months around them" (row F2).
2. **The 26 days may not fit today's market.** The reader was right. Spring 2026 took 45 to 52 days, not 26. The listing table now counts back at the pace of the last 12 months (row F1), and the text says both: "This spring, the middle home had a buyer after about 6 to 7 weeks on the market. In the years before, it was about 4 weeks." The hero tile and the short answer say 6 to 7 weeks. The advice moved with the data: a house lists in March (a mid-March listing closes in mid June), and a condo in late January or February. The H1 line still holds: a March listing closes from late May to late June.
3. **Which number is mine? Is now a good time?** Fixed. There is now one February comparison per kind of home: about 6 percent for all homes (short answer and price chart), about 5 percent for a house and about 9 percent for a condo (row F3). The $20,000 line now says what one house should expect: "one home should expect less. We could not measure how much less." The FAQ "Is now a good time" now answers the question: a home listed in mid November closes around mid February, the lowest month for price. Listing in March moves the closing to May or June, at the cost of four more months of owning the home.
4. **The condo rental point.** Fixed (critic item 4).

### Owner's eye

1. **"Send us your address" button.** Fixed: "Have us price my home for my month".
2. **Too many exact numbers.** Fixed. 97.9 and 97.1 became "about 97 to 98 percent" (row F7). 32,300 and 45,600 became "about 40 percent more ... jobs in July than in January" (row F5). The 1,110 contracts are gone. The Ian paragraph now has no counts; the chart under it carries them. "Ian came ashore ... The county recorded no home sales that day. It recorded sales again the next Monday, and the week after the storm had more sales than the week before." "June had about half again as many sales" is cut, since the chart shows it. The market-now item says "about a week faster" in place of 53 against 61 (row F8). score.js P2 is now 4.4 numbers per 100 words.
3. **The body explained how we got the data.** Fixed. "We read the county's index..." and "We checked each sale against the county's parcel records..." moved to "How we counted". The body states the findings.
4. **The February low had five different numbers, and the FAQ about houses used the all-homes figure.** Fixed. There is one figure per kind of home (reader item 3). The FAQ on the worst month now has no number: "February. For houses and for condos alike, it was the lowest month of the year for price, and one of the two slowest for sales." February is the lowest of the 12 months for both (row F3).
5. **The FAQ copied body sentences.** Fixed. Each answer is now one or two short lines with a new angle: when a December contract closes, a cash buyer has no lender to wait for, the listing-now arithmetic, and the condo seller listing before the rental season.
6. **The second chart's wording.** Fixed. The title is "How much more or less homes sold for in each month", and the caption is "We took out the yearly rise in prices, so only the month shows." The "13 months, six before and six after" line moved to "How we counted" and now says "the six months before it and the six after".
7. **The out-of-state sentence.** Fixed: "About 3 in 10 buyers in every month are from another state." This matches the wording on /sell/out-of-state-buyers/. The 28 and 33 percent are cut.
8. **The storm offer contradicted the section, and the insurance sentence was missing.** The offer is fixed: "Have us build a few spare days into a fall closing. A storm week can push a closing back a few days." The button reads "Have us plan my closing dates". Before the offer, the page says "A storm can move a closing by a few days, not by a season."
   **Not done: the insurance sentence.** "Insurance companies stop writing new policies until a named storm passes" has no primary source. The researcher tried and failed (ledger, Not verified). I searched again: the SC Department of Insurance 2025 hurricane release and archived bulletins say nothing about it, and the only sources are news stories quoting the director, plus the Insurance Reserve Fund memo, which covers public bodies, not homes. The rule is that facts come only from verified rows, so the page makes no insurance claim. OWNER-QUESTIONS Q2 now asks the owner to confirm it from his own closings.
9. **Tax and rental items restated the capital gains page.** Fixed (critic item 2).

## Nits taken

- "The last of the five years" now says 2025.
- "12 to 16 percent of each year's sales" is now "Together they hold about 13 percent of a year's sales" (row F4).
- The plan now says to get ready before listing day: "Start getting the home ready a few weeks before that." The repairs link moved there from the winter section, so the reader no longer asks "why winter?".
- At 1100 px and wider, the listing table sits beside the paragraphs that explain it, as in the pilots. The beach photo was already beside its list.
- Price chart rounding now rounds half away from zero, as the ledger does. March shows 1.5% lower and December 1.0% lower.
- Ian's fourth week (October 10 to 14, 228) and its daily values are in ledger row F6, and the spec checks them.
- The listing table no longer relies on Zillow's month label for days to close. It uses one figure, the 12-month average of 37 days.
- The jobs line now has its year ("This year").
- The two cards no longer stretch to the same height, so the house card has no empty space under its text.
- The map link now says why it is there: "the ones yours would compete with".
- The chart caption has its gap back above it (the margin was overridden).
- "closed" against "recorded": OWNER-QUESTIONS Q3 now describes what the page does. Counts and charts say "recorded". Price lines say "closed", in the verified wording of row 3, and "How we counted" says the recording comes after the closing.
- The cash-offer line moved up beside the five-weeks paragraph, which removes the 320 px wall after the table. The "36 to 42 days" sentence left the body, and the table paragraph is shorter, which removes the wall before the table. The FAQ on contract to closing now carries the 36 to 42 days, so the number is said once.

## Nits not taken, and why

- **The same Commons beach photo is used on two other pages.** No new photo can be made in this round. Shot-list items 2 and 3 ask the photo partner for home photos.
- **The 320 px price chart has thin bars for April, October and November.** These months are close to zero, and the thin bar is the truth. Each row also prints its value in words.
- **Hub and sibling links and the sitemap** belong to the lead (NEEDS items 2, 3, 6). S8 now passes, since another page links here.
- **The homes strip** belongs to the lead (NEEDS item 8).
- **score.js T2 (first-hand sentences) dropped to 50%.** The only "we counted" sentence left is in "How we counted", because the owner asked that the body not explain how we got the data (2026-10-06). The owner's rule wins over the score.

## Gates after the fix

- mkpage built the page with no guard firing.
- `build.js audit`: no error on this page except "missing from sitemap.xml", which is the lead's (NEEDS 6).
- score.js: 98/100 (SEO 100, AEO 100, Human 99, Trust 79).
- claims-scan: 0. house-claims: 0. facts-check: nothing on this page. struck-check: no struck wording.
- site-audit: only the sitemap entry.
- critic.mjs at 320, 390, 1024 and 1440 px: 0 blocking. Three warnings:
  - read.wall at 320 px on the short answer. The round-1 critic judged this acceptable, since it is the answer block.
  - read.line-length at 1024 and 1440 px on two small "How we counted" notes (91 characters a line against 90). This is the small print under the sources, so I left it.
- Shots looked at: 1440 px (the table now sits beside its paragraphs, the cards no longer stretch) and 320 and 390 px (no word alone on a line in either chart title, and the table is readable).
