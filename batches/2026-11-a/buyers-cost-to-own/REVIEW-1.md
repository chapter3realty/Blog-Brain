# Review round 1: /buyers/cost-to-own/, what the fixer changed

Fixer, 2026-11-02. Every change is in `specs/cost-to-own.js` or the page's own data and image folders. Nothing was changed in the built page by hand. New facts are rows 37 to 39 in `facts.md`, marked VERIFIED-BY-FIXER, for the lead to re-check.

## Critic

### Blocking

1. **"true cost ... hidden costs a lender's payment does not show" is false.** Cut. The H2 now opens: "Upkeep and insurance are the biggest parts. Your monthly loan payment usually includes the property tax and insurance, which the lender collects with it. The HOA fee and upkeep are paid on top." (row 36). No "true", no "hidden" in the copy.
2. **Hero lede "from a public record or a federal survey" is false for the HOA fee.** Cut. The lede is now "Tax, insurance, the HOA fee and upkeep: what a home in Horry County costs each year, for a house, a condo and a second home, town by town." The sources line still says where each part comes from.
3. **"Only if" flood rule has no source.** Both places are rewritten. Body: "The Federal Emergency Management Agency (FEMA) maps the high-risk flood zone. Federal law requires flood insurance if the home is in that zone and the loan is from a bank or other lender the federal government regulates. Outside that zone it is your choice, but since 2015, 3 in 10 paid flood claims in Horry County were on buildings outside it." (rows 22, 37; 37 is CM 20 carried word for word). The FAQ duplicate is gone (see owner 3).
4. **768 px table zigzag.** Fixed. compare.js writes an unscoped style block per table, and the five-column house table stacked every table below 50em. Both tables now take `css: false`, and the page carries one 40em block (`CC_STYLE`, taken from compare.js itself, with a `must()` on the 40em width). Checked in shots at 640, 700 and 768: both are real tables with even alignment. The third table (here against the rest of SC) is cut (owner 2). NEEDS.md 1 asks for a scoped fix in compare.js.
5. **"Not each year" reads oddly.** Now: "No, not in Myrtle Beach or North Myrtle Beach. There a typical condo costs more to own each year than a typical house, because of the condo fee. In Carolina Forest, where condo fees are lower, the condo costs less."
6. **Condo fee paragraph says the building's insurance twice.** The second sentence is cut. The paragraph now ends "Your own unit's insurance is separate: condo owners pay about $800 a year for it."
7. **Table notes do not say what $300 is, or which Conway figure the ZIP affects.** Now: "On the north end of Myrtle Beach, a typical house lists an HOA fee of $300 a month. Conway's HOA fee is for its main ZIP code, which is mostly outside the city." The ZIP numbers were left out of the prose to cut the number count (owner 4); the HOA fee and the scope are named.

### Nits taken

- Calculator "Where" select: the option is now "Outside city limits"; the towns are in the hint line above it.
- Tax chart legend: "4 percent" and "6 percent" use a non-breaking space.
- "Want the real number for one home?" box after the calculator is cut; the end band keeps it. A different, shorter box sits after the condo section ("Looking at a condo? Send us the address. We read the building's budget before you offer."), because build.js audit asks for one boxed offer mid-page. The sentence it replaces is gone from the prose, so the fact is said once.
- ogTitle, Article headline and twitter:title now read "The real monthly cost to own a home in Myrtle Beach, line by line", the same as the H1.
- The lede no longer states a figure, so it cannot be quoted without a place (owner 1); the short answer names Horry County.
- "mostly because of insurance and HOA fees" and "Lower electric bills make up part of it" are cut. The FAQ says only the measured gap: "Owners of a paid-off house here pay about $50 a month more for tax, insurance, utilities and any HOA fee together."
- "Many buyers budget 1 percent" is now "Budgeting 1 percent of the value a year is a little high: on the $350,000 house it gives $3,500." ("rule of thumb" is a PLAYBOOK A22 register failure in build.js audit, so it is not used.)
- Condo flood policy prints $375 (`usd`, not rounded to $380).
- Condo upkeep: "A condo owner spends about $690 a year on upkeep; the building's upkeep is paid from the condo fee." (no "inside the unit").
- "Why are condo fees so high" now leads with the local number: "They are highest near the ocean in Myrtle Beach. On the city's north end, a typical condo for sale lists about $875 a month. In Carolina Forest, inland, condos list about half that." Two `must()` checks keep "highest" and "about half" true to row 26.
- The 61 percent table row is gone with the table. The prose says "About 6 in 10 homeowners across most of Horry County", and the sources line keeps "outside the Loris area" (row 27's scope).
- Entities: FEMA is named in full once. American Community Survey and American Housing Survey are named in full in the sources line.
- Photo credits generic line: shared helper, NEEDS.md 2.

### Nits not taken

- **Name the South Carolina Wind and Hail Underwriting Association in full.** Not done. `rules/plain-words.json` flags that name as an industry term (score P6) and gives the plain words "the state's backup insurer for wind", which the page now uses.
- **"Updated July 25, 2026" is older than the data.** The lead's `build.js dates` run sets it. build.js audit shows the same two date failures for this reason only.

## Reader

### Blocking

1. **Does the $2,000 cover wind, and what does a wind policy cost?** The insurance section now says: "That is all their home insurance together, with a wind or flood policy included where they have one." (rows 17, 18), and the table row's note says "what owners of a house here pay for all their policies". No public source gives the price of a separate wind policy for an address type, so the page does not print one; the quote offer that follows ("If you buy with us, we get you an insurance quote for the address before you make an offer") is how we get that number.
2. **Chips read as monthly.** The chips are now monthly ($110, $170, $100, $270), with one line above them: "A typical house, each month, besides the loan:". They add up to the $650 in the short answer.
3. **"4 percent rate" reads as 4 percent of the price.** The table row now says "your home is taxed on 4 percent of its value, a second home on 6 percent".
4. **Which places are east of the wind line.** The paragraph now says "On the ocean side of U.S. 17, the highway along the coast ... In Myrtle Beach the line is the U.S. 17 Bypass." Three cards follow: On the ocean side (most of the City of Myrtle Beach, Surfside Beach and Garden City), Inland (Carolina Forest, Socastee and Conway), On both sides (North Myrtle Beach, Little River and Murrells Inlet; it depends on the street). Source: row 38, the statute's line measured on Census TIGER/Line roads and place outlines.

### Nits

- Town totals now show a month too: the last column is "A year (a month)", for example "$7,640 ($640)", in both the house and condo tables.
- "the middle" is gone from the page (0 uses); it says "a typical house".
- "besides the loan" is said 4 times (chips line, short answer, the itemized table caption and the calculator total), down from 10 uses of "besides the mortgage".
- The $571 against $555 method check is out of the body. The sources line was over the 90-word limit with it, so it is left to the ledger (row 2).
- "outside the Loris area" is out of the body (sources line only).
- The condo price comparison is now in words only ("less than half as much", "a little more than half").
- First-year tax: the page now has an FAQ "Will my property tax be the same as the seller's?" with row 14. How the year of sale is split at closing is not in a verified row, so the page does not say it.
- City stormwater and trash fees: no verified figure, so the page still only says they come with the water bill (one table note).
- Special assessment size: no verified local figure. Not added.
- The 65 exemption keeps the 2026 $75,000 clause: `tools/struck-check.js` requires the verifier's full wording (row 15), and the owner reviewer said to keep the one date that rule needs.
- Homes strip and AI search box: from the website's edge, not this spec (NEEDS.md 3).

## Owner

### Blocking

1. **Same total three times in the first two screens.** The lede has no figure now. The first H2 opens with new information (biggest parts, what the loan payment includes), not the total. The total is said once at the top, in the short answer, and the chips give the parts.
2. **"Is Myrtle Beach expensive" section repeats facts.** The section and its four-row table are cut. The one new fact (about $50 a month more on a paid-off house) is an FAQ answer. The affordable-places link moved under the town table.
3. **Repetition inside paragraphs.** Condo fee double cut (critic 6). "The loan is not in it: the condo's is smaller" cut from the chart note; one sentence now says "The condo is cheaper to buy, so its loan is smaller." The FAQs that repeated H2s (condo fees, flood) are replaced with new questions (seller's tax bill; Myrtle Beach against the rest of SC). The insurance quote offer is said once (the insurance section); the end band now says only "We work out the tax at your rate and read the HOA or condo budget before you offer." The hero offer bar no longer promises insurance pricing. The duplicate "Want the real number" box is cut.
4. **Too many exact numbers and method notes.** Cut from the body: the $571 / $555 check, "Insurance and upkeep are one county or regional figure", "Each row is from the same Census survey", "Each part below is from a public record or a federal survey", "That is what owners of a house in the South Atlantic states ... spend" (now in the sources line), the Garden City ZIP sentence (now one short table note), the condo price figures, the 3,060 / 830 counts, ZIP numbers in prose, and "(61 percent)". Score P2 now reads 4.2 numbers per 100 words (81 percent of the rule).
5. **Statistician's words.** "the middle" 0 uses; "besides the mortgage" 0 (4 x "besides the loan"); "escrow", "principal and interest", "federally regulated lender", "school operating tax" and "South Atlantic states" are gone from the body. The PITI FAQ spells out the letters in plain words. The calculator line is "Loan payment".
6. **Awkward answers and roads.** Condo answer is now a plain "No, not in Myrtle Beach or North Myrtle Beach ...". The wind line is "the highway along the coast", with the three place cards (reader 4).
7. **Filler; flood left to the reader.** The "true cost ... hidden costs" sentence is cut. Flood is now a field in the calculator ("Flood policy, a year", starting at none, with the typical FEMA policy as the hint: about $550 outside the high-risk zone and $1,070 inside it for a house, $375 for a condo unit). The text says "you can add it in the calculator below". Checked in a browser: a condo with $375 adds $31 a month, total $10,545 a year.
8. **One photo, and its caption dates it.** Added a second photo under the house total: houses on streets in Carolina Forest, outside city limits, from a NOAA aerial (public domain; record in photos.json, `photos.js check` passes; looked at full size; a different part of the tile from the two sibling pages). Caption: "Houses on streets in Carolina Forest, outside city limits, seen from above. The worked example above is a house like these." The condo caption no longer has a year ("seen from a plane"); the year stays in the credits only. Wikimedia Commons refused every request (rate limit) during this round, so a ground-level street photo was not possible; the photo partner shot list (shot-list.md, shots 1 and 3) still stands for a street-level house and an AC unit.

### Nits

- Crowded top: the lede is shorter and has no figures; the contents box went from nine links to eight.
- Dates in copy: "2026 tax rates" twice is now "current tax rates". The 65+ line keeps 2026 and 2025 (the rule needs them). Score P3 counts 2.
- Kept from praise: the four chips with icons, the replacement-cost icon cards, the two-bar charts and the "condo costs more" finding, which is now in the short answer's second paragraph.
- "Confirm before you buy." under the feed title: shared feed (NEEDS.md 3).
- Upkeep source sentence moved to the sources line.

## Disagreements

None with the findings. Two partial takes, explained above: the wind association is not named in full (plain-words rule), and the wind policy price is not printed (no verified source).

## Gates after the fix

- `node tools/mkpage.js specs/cost-to-own.js`: builds.
- `score.js --only /buyers/cost-to-own/`: 98/100 (SEO 100, AEO 100, Human 99, Trust 79). Open: P2 4.2 numbers per 100 words (81%); T2 one first-hand sentence.
- `claims-scan.js`: 0 findings on this page. `facts-check.js`: 0 on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording.
- `critic.mjs` at 320, 390, 640, 768, 1024, 1440: 0 blocking. One warning at 320 (read.wall: the last FAQ answer, the sources line and the photo credits with no heading between them).
- `node build.js check`: OK.
- `node build.js audit` for this page: two FAILs, both the Updated date against the sitemap (the lead's `build.js dates` run); one warning (no attributed sentence from Tim or Devin; no story in the bank fits).
- Shots: scratchpad `wf2/buyers-cost-to-own/r1-shots/` (full pages) and `wf2/buyers-cost-to-own/look-r1/` (hero at 320 and 390, house table at 390, 700 and 768, condo table at 768, wind cards, street photo and calculator at 390, tax chart at 320).

---

# Review round 2: what the fixer changed

Fixer, 2026-11-03. Three reviewers (critic 8, reader 7.5, owner 8) read the page after build round 2. Every change is in `specs/cost-to-own.js`, plus one new data file (`data/2026-11-a/buyers-cost-to-own/pums-insp-spread.json`, from `insp_p90.py`) and one new ledger row (40, VERIFIED-BY-FIXER). Nothing was edited in the built page.

## Critic

### Blocking

1. **No total in the hero.** The dek is now "A typical $350,000 house in Horry County costs about $650 a month to own besides the loan, $7,850 a year. Each part is below, town by town." (27 words; mkpage allows 30). The tile line is "Each month, part by part:", so the hero states the total once.
2. **"Insurance" overran its tile at 320 px.** Below 360 px the four hero tiles are a 2 x 2 grid (page CSS, `main#main .c3-glance`). Checked in a 320 shot (`look-r2/hero-320.png`).

### Warnings and nits taken

- Flood tiles at 320: below 420 px they stack, number beside the words (`look-r2/flood-320.png`).
- "On this page": two columns from 760 px, the same CSS as dst.js (`look-r2/toc-1024.png`).
- Wind cards: three in one row from 700 px (`look-r2/wind-1024.png`).
- Upkeep parts now add up: "about $3,270 ... about $1,470 of routine repairs and about $1,800 put toward the big replacements". The second part is the rounded total less the rounded first part, computed in the spec.
- USGS photo year: the credit line now reads "Photo: U.S. Geological Survey, 2011, ...". The year is taken from the record's `taken` field in `afterSources`, never typed, with a `must()` if the credit text moves.
- "A second home's insurance can differ; the total changes only its tax." is now "The second-home column changes only the tax. Insurance on a second home can cost more."
- "for a picture" is cut: "One household's bills: on one of our team's own houses ...". The story's label is kept.
- Sources line: "Fees: homes for sale, Horry ZIPs, one day." The longer wording put the block at 92 words and build.js audit fails a block over 90.
- Rate field: a negative rate now counts as no rate ("Add your rate"); before, it was set to 0. Checked in the browser: -5 gives "Add your rate".
- "Price this home": gone. All three buttons read "Talk to a specialized agent" (owner 1).
- Condo budget-reading claim: gone (owner 1).
- Rows 37 to 39: the critic re-ran 38 and 39 and asks the lead to mark all three verified. The open note on row 38 (check against the SC Department of Insurance territory map) stays with the lead.

### Not taken

- **Name the South Carolina Wind and Hail Underwriting Association in full.** Same as round 1: `rules/plain-words.json` gives "the state's backup insurer for wind" as the plain words, and score P6 flags the name.
- **PITI FAQ is generic.** Kept. It answers the most searched form of the question, it is sourced (CFPB), and it now explains "besides the loan" together with the new first paragraph.
- **read.wall at 320 and the empty homes strip.** Tool false hits (NEEDS.md 5 and 6).

## Reader

### Blocking

1. **Insurance near the ocean has no number.** No public source gives a separate wind policy price for an address or for a side of U.S. 17. The Census sample has two PUMAs in Horry, and neither follows the line. What the page now gives, from the same Census file as row 17 (new row 40): "The $2,000 includes those wind policies. About 1 in 10 house owners here pay $4,000 or more a year for all their home insurance, and about 1 in 40 pay $6,000 or more. The Census figures do not split by side of the highway." The insurance quote offer now sits right after this paragraph and the wind cards, and says "so wind and flood are in your budget before you commit". It is not repeated at the end of the section. I also tried SC Wind's own figures: its 2025 statehouse presentation gives 15,825 policies and $58.5 million of premium (about $3,700 a policy). That covers every policy type, condo buildings included, across the whole coast, so it is not a house figure. Not used.
2. **Is the tax in the loan payment or not?** The first paragraph under the first H2 now says: "'Besides the loan' means everything except paying back the loan and its interest. Your lender usually collects the tax and insurance with each loan payment, but they are counted here, not in the loan. The HOA fee and upkeep are usually paid separately." (row 36)
3. **"4 percent" read as a tax rate.** Table row: "the rate is charged on 4 percent of the value (6 percent for a second home)". Second-home section: "On a home you live in, the tax rate is charged on 4 percent of its value, not the whole value: on a $350,000 house, on $14,000." (row 9; the $14,000 is computed in the spec)
4. **The condo fee figures disagree.** The "Example" box ($650 a month, $850 a month) is cut (owner 5). The calculator's condo fee hint now reads "About $650 county-wide; $425 in Carolina Forest", so a Carolina Forest buyer sees the lower figure next to the field.
5. **The 65 sentence.** Taken as the owner asked (owner 6): "At 65 you can have part of your home's value exempted from property tax. Our retiree guide covers who qualifies and how much." struck-check passes, because the $50,000 is no longer stated.

### Nits

- 4 percent application deadline, special assessment size, first-year tax jump: no verified rows. Not added.
- The "Where" hint above "Outside city limits": kept. It names the places the option covers.
- Strip and AI box above the short answer: shared edge (NEEDS.md 3, 7).

## Owner

### Blocking

1. **CTA wording.** Label everywhere: "Talk to a specialized agent" (his label, CTA-1). Condo box: "Looking at a condo to rent out? Some communities ban renting at all. Our agents read the HOA documents for rules that would block your plan before you offer." (story `hoa-rental-bans-filtered`, a service on file; the box sits in the condo section). End band: "Want the costs worked out for one home?" / "An agent works out the tax at your rate and the HOA or condo fee for the address before you offer." No "send the address", no "budget", no "real".
2. **Personification.** Calculator: "Add your rate and down payment from your lender to see the loan payment." FAQ: "After a sale, the county values the home again, and the new value is first taxed the year after the sale." Note: "The second-home column changes only the tax. Insurance on a second home can cost more." Score P10 passes.
3. **Same facts more than once.**
   (a) The house-and-condo chart no longer prints totals. It is one bar a place, the difference: City of Myrtle Beach, the condo costs $3,280 more a year; North Myrtle Beach, $3,570 more; Carolina Forest, the house costs $1,000 more. Those three figures are not printed anywhere else. The caption says the totals are in the town tables.
   (b) The tax chart drops the outside-city-limits row (it is in the bill table at the top) and says so in its note. The rental FAQ now says only "Yes. A rental is taxed like a second home, on 6 percent of its value. The second-home section above shows the tax by town."
   (c) The condo H2 answer now leads with what the short answer does not say: "In Carolina Forest, yes. Its condo fees are the lowest in the table below, and a typical condo there costs about $1,000 a year less to own than a typical house. In Myrtle Beach and North Myrtle Beach, no: their condo fees are the highest." Two `must()` checks hold "lowest", "the highest" and the $1,000.
4. **Flood answer.** Now opens: "You must have it if the home is in the high-risk flood zone and your loan is from a bank or other lender the federal government regulates. Anywhere else it is your choice, but since 2015, 3 in 10 paid flood claims in Horry County were on buildings outside that zone." FEMA is named after that.
5. **The Example box.** Cut. One sentence above the condo table: "In each place below, the condo fee is about three quarters of what a condo owner pays a year to own the unit." A `must()` holds every place between 0.69 and 0.82 (rows 5, 26).
6. **65 sentence.** Moved to the retiree guide link (reader 5).
7. **"for a picture".** Cut (critic).

### Nits taken

- "real": gone from the body (the insurance box and the end band). The H1 keeps his approved headline.
- Water heater card: "The smallest of the four." is cut; the card shows only its name and price. Row 30 has no verified 1-in-N figure for it.
- "The tax uses" is now "The calculator uses".
- "sat in the zone" is now "were in the zone".
- Carolina Forest caption: "The typical house in the table above is one like these."

### Not taken

- Wind deductible and a yearly pest contract: no verified rows. The insurance quote offer covers the deductible for one address.
- Feed note under the strip, "AI-POWERED SEARCH" label, empty strip in the preview: shared edge or tool (NEEDS.md 3, 4, 5, 7).
- "Updated July 25, 2026": the lead's `build.js dates` run.

## Gates after the fix

- `node tools/mkpage.js specs/cost-to-own.js`: builds (hero sub 27 words).
- `score.js --only /buyers/cost-to-own/` (SCORE_TODAY=2026-11-03): 98/100 (SEO 100, AEO 100, Human 99, Trust 79). Open: P2 4.5 numbers per 100 words (was 4.2; the reader's asks added the insurance spread and the 4 percent example); T2 one first-hand sentence ("Our agents read the HOA documents ...").
- `claims-scan.js`: 0 on this page. `facts-check.js`: 0 on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording.
- `critic.mjs` at 320, 390, 640, 768, 1024, 1440: 0 blocking. One warning, the known read.wall false hit at 320 (NEEDS.md 6).
- `node build.js check`: OK. `node build.js audit` for this page: the two date FAILs (lead's `build.js dates` run) and the A20 warning (no attributed sentence from Tim or Devin; no story fits).
- Shots: scratchpad `wf2/buyers-cost-to-own/r2-shots/` (full pages) and `wf2/buyers-cost-to-own/look-r2/` (hero 320, top 390, flood tiles 320 and 390, the difference chart 390 and 1024, wind cards 1024, contents 1024, calculator 390, tax chart 390, upkeep cards 390). Calculator checked: condo, flood $375 gives $879 a month and $10,545 a year; a rate of -5 gives "Add your rate".
- New ledger row 40 (VERIFIED-BY-FIXER) for the lead to re-check.
