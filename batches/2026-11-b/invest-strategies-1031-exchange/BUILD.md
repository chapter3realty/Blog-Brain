# Build: /invest/strategies/1031-exchange/ (batch 2026-11-b)

Writer, 2026-11-09. Built from PLAN.md, VERIFIED rows, and CORRECTED rows in the verifier's wording (VERIFY.md). No session was created, no build.js stitch, dates or llmsfull was run, and nothing was committed or deployed.

## Files (website working copy `<scratchpad>/wt-live`)

- Spec: `specs/1031-exchange.js` (new; the live page was hand-made). Built with `node tools/mkpage.js specs/1031-exchange.js`.
- Page: `chapter3realty/invest/strategies/1031-exchange/index.html`. The URL is unchanged, and datePublished stays 2026-06-13.
- Data: `data/2026-11-b/invest-strategies-1031-exchange/findings.json`, read as it is. `photos.json` is new: the record of the USGS 2011 aerial reused from /invest/where-to-buy/, unchanged except `slug` and a `reuse_note`.
- Image: `chapter3realty/images/2026-11-b/invest-strategies-1031-exchange/share.jpg`, our own share card from `tools/ogcard.js`, run on a copy of the page.

Every number in the copy comes from findings.json, and a `must()` check ties each one to its ledger row. The spec stops if a value moves. The date tool's arithmetic runs once in the build against row 44's three examples and row 24's October 17 cutoff, then runs in the browser. No date is typed into the page.

## Outline

- **Title** (58 characters): "1031 Exchange in South Carolina: Rules, 45/180 Days, I-295".
- **H1**: "1031 exchange in South Carolina: the 45 and 180 days, and the state's hold-back". The plan's word "clock" was dropped (FIG-6).
- **Italic line**, about half the H1's size: "Sell from another state, and one box on Form I-295 sends the state's 5.21% hold-back to your intermediary." It says "to your intermediary", not "stops it", per the correction to row 43.
- **Description** (155 characters).
- **Hero**: three tiles.
  - 45 and 180 days
  - 5.21%
  - Form I-295
- **Short answer**: the federal rules apply in South Carolina, and the 45 and 180 days. Then the hold-back, "unless the sale is exempt" (row 1). The exchange box plus an intermediary sends the hold-back to the intermediary, and the state is paid nothing if the exchange is finished (row 43).
- **Offer bar**: "Plan the exchange with us before you list." The site's edge feed follows it ("Rented now: income property from $400,000", falling back to 2 to 4 unit buildings).

Sections, each heading a searched question:
1. **Does a 1031 exchange work in South Carolina?** Rows 19, 22, 26 (corrected), 30 (corrected) and 31. Three short facts under thin rules: what qualifies, who holds the money, who cannot hold it. Link up to /invest/strategies/.
2. **How does a 1031 exchange stop South Carolina's withholding at closing?** Covers:
   - The rule, rows 1, 2, 3 (corporation half only), 4, 14, 5 and 6.
   - The three exchange boxes, rows 7 and 8.
   - The intermediary route in five numbered steps, rows 10, 12 and 16, with "the buyer remains liable".
   - The second way, row 9 (no I-290X), and the refund, row 13, linking /sell/capital-gains/.
   - What we do before the buyer signs.
3. **What does South Carolina hold back on a $400,000 condo sale?** Row 43 as a labelled example. The chart (G.bars, one card) shows four bars: no form about $19,600, gain form about $9,700, $30,000 cash kept about $1,560 sent later, full exchange $0 if finished. Then the state tax on the full sale (about $5,400), the $376,000 to put off all of the tax, and a link to /invest/rental-depreciation/. **Offer**: "Have us plan the closing".
4. **What are the 1031 exchange 45-day and 180-day rules?** Rows 23, 24 and 36 (corrected; Helene in the past tense). The date tool is one card: the 180 days drawn to scale, one date input, and day 0, 45 and 180 as dates. It shows the April 15 warning when day 180 falls after it. The five steps with what we do: rows 27, 30, 47 and 48.
5. **How do you name replacement properties by day 45?** Rows 27, 28 and 29, including "over the limit counts as naming nothing". **Offer**: "Start my shortlist".
6. **What can a 1031 exchange buy on the Grand Strand?** It includes:
   - Row 40 (54 percent of condo buyers have an out-of-state tax bill) and row 46.
   - Table, row 42: four kinds of home, for sale now, middle asking price, asking $376,000 or more. The day the count ran is read from the data. The table folds on a phone.
   - The photo (condo towers and beach houses on one block).
   - 2 to 4 unit buildings are scarce, and the resale medians (row 41, corrected wording "houses and other homes that are not condos").
   - Links to /invest/condos/, /invest/strategies/small-multifamily/, /invest/rental-returns/ and /invest/long-term-rental/.
   - H3 "How one investor trades up": row 45, told as Tim's client. Links to /invest/how-long-to-hold/ and /invest/cost-segregation/.
   - **Offer**: "Send me homes at my price".
7. **Can you 1031 exchange a vacation condo you also use?** Rows 34 (corrected, family days count) and 35. It is a safe harbor, not the only way.
8. **What happens if you keep some of the cash?** Rows 25, 11 and 43: about $1,560 sent by the intermediary, and about $880 state tax. Federal rates are linked.
9. **How do you finance the replacement inside 180 days?** "our affiliated lender, BrickWood Mortgage, a separate company", and the link to the DSCR page. No rate, payment or down payment.
10. **How does a reverse 1031 exchange work in South Carolina?** Row 37 (corrected) in four steps, then row 38 by link to /invest/strategies/dst/. **Offer**: "Ask about a reverse exchange".

After the sections:
- **FAQ**, seven entries:
  - same state (row 26)
  - a home you will live in (rows 34 and 35)
  - family (row 32, corrected, no "relative")
  - state tax later (rows 19 and 20)
  - a company seller (rows 3 and 18, corrected; no LLC sentence)
  - DST (row 38)
  - Form 8824 (row 33)
- **Sources line**, 16 links. "Sales: our count of county deeds. Homes for sale: our count of the listing feed on November 9, 2026, in total only. The example is constructed." Then photo credits, image schema and the legal notice.
- **End band**: "Trading a rental for one here?", with the phone number in the text and the button "Talk through your exchange".

Not used:
- FAQ "I am Canadian" (no ledger row for the federal withholding).
- The live page's Tim quote, "30 years", the "work closely together" line, the brokerages swipe, and "reverse exchanges cost more". These are the eight strikes.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/1031-exchange/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100). Only partial: P2, 3.5 numbers per 100 words (99%). |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page. The 4 sitewide WRONG lines are on /buyers/relocating/from-virginia/ and llms-full.txt, which were there before. |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source |
| `node tools/struck-check.js --batch batches/2026-11-b --preview ... --strict` | no struck wording (the "no page" lines are other pages' lists) |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/inbound.js` | 13 referring pages |
| `node tools/critic.mjs http://localhost:8871 /invest/strategies/1031-exchange/ --widths 390,1024,1440` | 0 blocking, 0 warnings at all three widths |
| `node build.js check` | OK |
| `node build.js audit` | Two mkpage date lines only (dateModified and "Updated June 13, 2026" against sitemap lastmod). `node build.js dates` sets both. One "~" note asks for a quote from Tim or Devin; we never write one. |

Fixed on the way:
- critic: the bar labels spilled out of the chart, the page had no photo, and two long walls of text on a phone.
- score: no labelled chart, "rules decide" and "rule lets", no first-hand sentence, the sitewide share image, and two sentences over 40 words.
- audit: a long aside in brackets, and fewer than 4 local-edge sentences.
- repeat-check: one identical sentence.
- The look, from the shots: the table on a phone, the clumsy affidavit sentence, and a sentence about the chart.

## Shots

`<scratchpad>/rb1/invest-strategies-1031-exchange/shots/`:
- `invest-strategies-1031-exchange-390.png`
- `invest-strategies-1031-exchange-1024.png`
- `invest-strategies-1031-exchange-1440.png`

Critic JSON: `<scratchpad>/rb1/invest-strategies-1031-exchange/critic.json`. Tiles cut from the shots for viewing at full size are in `tiles/`.

`<scratchpad>` = `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad`.

## For the lead

1. **Homes strips.** PLAN.md asks for two strips in section 6 (2 to 4 unit buildings; condos for an exchange buyer). They need new places in `idx-lib/places.js` (from `data/2026-10-b/idx-places.json`), which is outside this page's folder. This URL's feed in `idx-lib/feeds.js` also needs `withStrips: true`. A page with its own strip slots and no `withStrips` loses its edge feed. Until then, the edge feed under the opening is the page's homes strip, and section 6 ends with the "Send me homes at my price" offer.
2. **Sibling keywords** (cannibalization report, not this page's edit): /invest/strategies/dst/ drops "sell rental property Myrtle Beach 1031". /invest/how-long-to-hold/ drops "1031 exchange holding period".
3. **Breadcrumb.** mkpage takes one hub level, so the crumb is Home / Strategies / 1031 Exchange. The live page had Invest / Strategies.
4. **Still to run**: a cold reader, a fact verifier on the reworded sentences, and the owner's eye. The writer did not grade the page.
