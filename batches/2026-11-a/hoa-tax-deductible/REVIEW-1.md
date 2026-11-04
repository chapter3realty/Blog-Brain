# Review round 1: /hoa/tax-deductible/ (fixes)

Three reviewers: critic (FAIL, 7), reader (FAIL, 7), owner (FAIL, 8). Every change is in `specs/hoa-tax-deductible.js` or this page's own `data/2026-11-a/hoa-tax-deductible/photos.json` (caption only). Nothing was edited in the built page, `_kit.js`, `glass.js` or shared CSS.

New facts used: ledger rows 36 to 39, marked VERIFIED-BY-FIXER in `facts.md`, each with its quote from the raw source copies. The lead should re-check them.

## Critic, blocking

1. **overlap.spill at 320 px, hero stat card 3.** Fixed two ways. The "27.5 years" tile is gone (owner nit). The spec's CSS also stacks the three tiles in one column below 380 px, with icon and text side by side. Critic re-run: 0 blocking at 320, 390, 768, 1024 and 1440.
2. **Calculator at 0 and 0 nights said "none are deductible".** Fixed. The calculator's output now comes from one function, `view()`, used for the page's first text, in build-time checks and in the page's script. At 0 rented and 0 personal nights it shows "$0 or $7,800" and says "If you held it out for rent all year, all of the dues are a rental expense. If you did not, none are." (row 16). Checked in the browser for 0/0, 0/30, 145/15, 200/21, 200/10, 365/0 and 10/30.
3. **Two sentences added details to story hoa-rental-bans-filtered.** Fixed. "Before you buy, our agents read the assessment notice and the board's minutes..." is now "The assessment notice and the board's minutes say what the work is." "We get the budget, the statements and the minutes before you buy." is cut. The one brokerage sentence left uses the story's own content: "When we search for a buyer who plans to rent, we filter out communities that ban renting. Then our agents read the rental rules in the HOA documents."

## Critic, nits

- **"86 / percent" wrap.** Now "86%" and "90%".
- **Tile 3 sits higher at 1024 and 1440.** The spec sets the tile content to align to the top at 700 px and up. Checked in the 1024 shot.
- **"middle-valued such condo".** Now "the 2026 tax bill on a middle-valued condo in the city taxed at that rate".
- **"The tax counts on the federal return if you itemize".** Now "On a home you live in, the property tax counts on the federal return if you itemize, meaning you list your deductions instead of taking the standard deduction. The dues never do."
- **Chart note "Our count of our listing search, in aggregate."** Now "Our count of the condo listings on our site."
- **Schedule E and depreciation unexplained.** The short answer now says "Schedule E, the IRS form for rental income". The Schedule E section no longer repeats the definition. The improvement box says "You deduct a share each year, starting when the work is finished and ready to use. The IRS calls this depreciation." The roof example says "In service means finished and ready to use." (row 39).
- **Second-home rule had no row.** Row 37 added (P530 nondeductible list, P530 "Qualified Home", P527).
- **No link to /invest/str-tax-treatment/.** Added in "When the condo counts as your home": "If it does not count as your home, the rental can show a loss. Whether that loss lowers the tax on your other income, such as wages, depends on the loss limits on our short-term rental tax page." (row 16).
- **read.wall after the roof example.** A small figure now follows it: $10,000 share, 27.5 years, about $364 in each full year. The re-run found no read.wall at any width. To clear two more walls the re-run found, the calculator sits in a `<figure>` and the 72-day paragraph has its own H3.
- **Empty listing strip in the preview.** Not this page's spec. Noted in NEEDS.md item 2.
- **Calculator at 140 to 149 nights rented said "more than 14, which is 10 percent".** Fixed. The 10 percent wording shows only when 10 percent of the nights rented is 15 or more, and it reads "more than 10 percent of the 200 nights rented".
- **read.line-length at 1024 on the dues-against-tax card labels.** False hit, as the critic said. Left as is.

## Reader, blocking

1. **Out-of-state owner left without an answer.** The South Carolina section now adds: "On the South Carolina return, the dues come off that rent the same way they do on the federal return. How your home state treats the same rent depends on that state's law, not South Carolina's." (rows 21, 24). The property tax section now says plainly: "An owner who lives in another state pays 6 percent, because the 4 percent rate is only for the owner's domicile." (row 38). Whether a nonresident must file a South Carolina return is not stated: the verifier's note on row 24 says to keep "is South Carolina income", not "you must file". The 2026 filing rule (12-6-4910, as changed by Act 110) depends on the new SC deduction amount, and no verified row applies it to a nonresident. Whether Ohio or another home state also taxes the rent differs by state; one state's rule would not answer most readers. Both would need new research rows before the page could say more.
2. **"Fair price" never defined.** Added before the calculator: "A fair price is about what a person not related to you would pay. A rent far below what similar condos nearby charge is not a fair price." (row 36). The personal-night list already says a night anyone pays less than a fair rent is personal.
3. **Two "home" tests confused, and the 6 percent rate for an out-of-state owner unclear.** The calculator now says "counts as your home under the IRS test below". The H3 says what the test changes: "Counting as your home matters when the rent is less than your rental costs." A new line says "This IRS test is not the county's 72-day limit for the property tax rate, which comes below." The 72-day paragraph has its own H3, "The county's 72-day limit". Out-of-state rate: see item 1.
4. **Calculator result "cannot be more than the rent" unclear.** The result now says "The figure above is the most you can deduct. It is cut if your rental costs are more than the rent." The carry-forward is stated once, in the H3 under it.

## Reader, nits

- **"From 2026, South Carolina does not use the federal itemized deductions" with no meaning.** Added: "That does not touch the dues on a rental, which come off the rent, not off a list of itemized deductions."
- **Work-from-home FAQ was not an answer.** Now: "The IRS's examples are insurance, utilities and general repairs. Its home office guide does not say whether association dues count, so this page does not say they do." The verifier struck the Form 8829 inference (row 20), so a firmer answer has no source.
- **Report language.** Tax districts 880 and 550 are cut. "Middle-valued such condo" and "in aggregate" are fixed.
- **Too many numbers in the 4 and 6 percent block.** The rate cards and the sentence that repeated the chart's 6 percent ratios are cut. One paragraph gives the 11-times finding, and the chart carries the rest.
- **Words not known.** "Schedule E", "itemize", "depreciation", "in service" and "hold it out for rent" (now "listed and open to bookings" beside it) are explained where they first appear. "Middle" stays: the verifier struck "typical" for these dues (row 32, struck list).
- **What does $7,800 save me.** Added under the answer table: "A deduction is not money back. It lowers the rental income that is taxed, and what it saves depends on the rest of your return." No dollar saving, per the ledger header.
- **Loss against other income.** Answered by the new str-tax-treatment sentence (critic nit above).
- **Schedule E line numbers, links to the 14-day and transfer-fee pages.** Kept. The line numbers are for the preparer, and the links are related pages, not the answer.

## Owner, blocking

1. **The same fact more than once.**
   - (a) The second IRS list sentence under the dues-include chart is cut. The paragraph now says only "On a rental, the insurance, utilities and internet are rental costs too, inside the dues or not."
   - (b) Empty nights now appear once, in the calculator intro. They are cut from the example chart note and the personal-night list.
   - (c) The cap is stated once in full, in "When the condo counts as your home". The calculator says only that its figure "is cut if your rental costs are more than the rent".
   - (d) The 6 percent definition is in the property tax section only. The rate cards are cut, and the photo caption now gives only the 1-in-11 figure.
   - (e) "That lowers the taxable gain when you sell." is cut from the paragraph. The card keeps it.
2. **Improper English.** Both sentences rewritten, as in the critic nits.
3. **Unexplained words.** "Schedule E" (short answer), "itemize", "depreciation" and "in service" are explained in the same sentence or the next. "Working substantially full time" is now "working close to full time".
4. **Property tax section too long, and it overlaps /buyers/property-taxes/.** The two rate cards, "Pays no school operating tax" and the tax district numbers are cut. Kept: the answer (an association is not a government), one paragraph naming the two rates and the out-of-state owner's rate, the 11-times finding with its chart, the itemize line, and the 72-day limit under its own H3. The rate details go to the property tax page in one link.
5. **No sentence on a loss, and no link to /invest/str-tax-treatment/.** Added (critic nit above).

## Owner, nits

- **Third hero tile.** Replaced. The tiles are now "$0" (home you live in), "$7,800 a year" (deductible on a condo rented all year at the middle dues) and "About 11 times" (a year of dues against the property tax on a Myrtle Beach condo its owner lives in). The hero sub no longer repeats $7,800: "On a Horry County condo with the middle HOA fees of $650 a month, the nights you rent it decide how much is deductible."
- **The 30-word sentence.** Split: "The IRS counts a condo as your home if your personal nights are more than 14. If you rent it more than 140 nights at a fair price, the line is 10 percent of those nights instead."
- **"Many communities ban renting a house out at all."** Cut. The story's filter step stays (see critic blocking 3).
- **IDX strip title.** NEEDS.md item 1.
- **The photo shows nothing about dues or taxes.** Kept. It is the only real photo, its caption is shorter, and the shot list asks the photo partner for a replacement.
- **Hero tiles fill two thirds at 1280 px.** Site-wide layout. NEEDS.md item 3.

## Gates after the fixes

- `node tools/mkpage.js specs/hoa-tax-deductible.js`: built. Its calculator checks pass, including the new 0/0, 145/15 and 200/21 cases.
- `score.js --only /hoa/tax-deductible/` (SCORE_TODAY=2026-11-04): 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- `claims-scan.js`: 0 findings. `facts-check.js`: nothing on this page. `house-claims.js`: 0 sentences.
- Struck list (12 patterns): no hit on the built page.
- `critic.mjs` at 320, 390, 768, 1024 and 1440 px: 0 blocking. 1 warning: the read.line-length false hit on the chart card labels at 1024.
- `build.js check`: OK. `build.js audit`: the only errors on this page are the two date mismatches that `node build.js dates` fixes (the lead runs it), plus the site-wide A20 warning (no quote from a named licensed person; we write no quote for Tim Nash).
- Preview note: port 8781 was serving an older working copy (`scratchpad/web2`) from an earlier run. The critic ran against the pkg2 preview already up on port 8880. Nothing was stopped.
