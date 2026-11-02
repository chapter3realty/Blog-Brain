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
