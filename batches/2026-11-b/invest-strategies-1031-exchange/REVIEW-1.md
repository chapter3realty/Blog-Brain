# Fix round 1: /invest/strategies/1031-exchange/ (batch 2026-11-b)

Fixer, 2026-11-09. Reviewer's result: pass=false, score 8, two blocking items and ten nits. No session was created, nothing was committed or deployed, and build.js stitch, dates and llmsfull were not run. Only this page's spec, its page, this folder and `data/2026-11-b/invest-strategies-1031-exchange/` were touched. `idx-lib/` was not changed in the working copy.

## Declined or left as they are

- **The byline date ("Updated June 13, 2026").** Not typed by hand. `node build.js dates` sets it, and it is the same two audit lines as before.
- **Checking the edge feed on staging.** This cannot be done here. The local preview still shows the feed's fallback ("Duplexes, triplexes and fourplexes"), because the sample homes carry no rental-income feature. Check on staging that "Rented now: income property from $400,000" fills. If it falls back to the duplex feed on live, the top row and the new duplex strip show the same kind of home. In that case, drop the duplex strip or give the feed another fallback.
- **Moving the story near the end.** It stays where it is. It now says what depreciation means and when it runs out (27.5 years, row 49), which was the actual problem. It sits right after the condo strip, and the investor buys mostly condos. The story bank has no tension to add, and adding a detail would break the story rule.
- **The critic's last read.wall warning at 320 px** ("Buildings with 2 to 4 units are scarce...", 1,053 px). The critic does not count homes strips as content (`NOT_CONTENT` in `tools/critic.mjs`), so it measures that stretch without the two strips. A reader sees the duplex strip right under that sentence, and then the condo strip. Without the listing search, the offer card shows there instead. My own Playwright run at 320, 390 and 1440, with sample photos, shows both strips filled with 10 cards each.

## What changed

**Blocking 1: homes strips.**
- Section "What can a 1031 exchange buy on the Grand Strand?" now has two `glass.js homes()` strips:
  - "Duplexes, triplexes and fourplexes for sale around Myrtle Beach" (place `duplexes-around-myrtle-beach`), right under the sentence that says 2 to 4 unit buildings are scarce.
  - "Condos for sale around Myrtle Beach" (place `condos-around-myrtle-beach`), right under "split one sale into two or three condos".
- The section's button card ("Send me homes at my price") is now the condo strip's fallback, shown only while the strip is empty.
- The places and `withStrips: true` are outside this page's folder, so they are written for the lead:
  - `strips.patch` in this folder adds the two places to `idx-lib/places.js` and sets `"/invest/strategies/1031-exchange/": { ...RENTS_NOW, withStrips: true }` in `idx-lib/feeds.js`. `git apply --check` passes on the working copy.
  - `idx-places-add.json` has the same two entries for `batches/2026-10-b/data/idx-places.json`, which is the source `places.js` is built from.
  - Each place is a 25-mile `near` search around Myrtle Beach, by type, with `index: false`. 25 miles is the largest radius `placeParams` allows.
  - A live map search on 2026-11-09 found 58 buildings with 2 to 4 units and 2,830 condos in that circle, from Pawleys Island to Longs and Conway.
  - A place cannot set a price floor, so "Rental condos from $376,000" could not be made true. The titles name only the kind of home and the area.
- **The lead must apply the patch before this page ships.** Until it is applied, the page's slots stay empty and the offer card shows. The edge also leaves its top feed off this page, because a page with its own slots needs `withStrips`.
- The preview on port 8871 runs from `<scratchpad>/x1031-prev/site`, a copy of the working copy's `functions/` and `idx-lib/` with the patch applied, with everything else linked. In that preview the edge feed and both strips fill.

**Blocking 2: the H2 about the hold-back.** "How does a 1031 exchange stop South Carolina's withholding at closing?" is now "How does a 1031 exchange keep South Carolina's hold-back from going to the state?" These are the hero's own terms. The page no longer promises that the hold-back stops at closing.

**Nits taken:**
- Row 40: "another state or country", as the source says.
- Form I-290 is explained where it first appears (step 2): "Form I-290 is the form that pays the hold-back to the state." New row 50, VERIFIED-BY-FIXER, from `DATA/raw/I290.txt` ("NONRESIDENT REAL ESTATE WITHHOLDING ... Return and payment are due...").
- The short answer now explains the term: "a qualified intermediary, a neutral company that holds the sale money".
- "Form I-295 is the seller's affidavit" is now "the seller's sworn statement to the buyer" (row 16).
- "one of the IRS safe harbors" is now "one of the setups the IRS rules accept, so the money does not count as yours" (row 30).
- "The test is a safe harbor" in the vacation condo section is now "The test is not the only way in."
- The story: "The IRS lets an owner deduct the cost of a rental building over 27.5 years, called depreciation. When a condo has used up that deduction, he sells it and trades up through a 1031 exchange." New row 49, VERIFIED-BY-FIXER: IRS Publication 527 (2025), Table 2-1, read live on irs.gov on 2026-11-09. It is the same fact as 2026-11-a run-the-numbers row 29, and it is the trigger named in the story's own "checked" line.
- The example's H2 is now "What does South Carolina hold back when you exchange a $400,000 condo?" It names the exchange, so it no longer mirrors /sell/out-of-state-buyers/ or /sell/capital-gains/.
- The phone table: the card label now reads "Asking $376,000 or more". The sentence "In the example, the next property costs $376,000 or more. The table counts what is for sale at that price." now comes before the table.
- The condo price is said once: "Condos sold for about $215,000 at the middle in the past year, the same as the middle asking price now." A `must()` check stops the build if rows 41 and 42 stop agreeing.
- The hold-back section has a new H3, "Why an exchange changes the hold-back", before the exemption paragraph. It breaks up the run that the 320 px wall warning flagged in #withholding. That warning is gone.

## Gates (after the rebuild with `node tools/mkpage.js specs/1031-exchange.js`)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/1031-exchange/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 2,605 words |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page. The same 4 sitewide lines as before (from-massachusetts, from-virginia, llms-full.txt). |
| `node tools/house-claims.js <page>` | 0 |
| `node tools/struck-check.js` (page, and `--batch batches/2026-11-b --preview <site>/chapter3realty --strict`) | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/inbound.js <site> --only ...` | 13 referring pages |
| `node tools/critic.mjs http://localhost:8871 ... --widths 320,390,1024,1440` | 0 blocking at all widths. One warning at 320 px, a measuring artifact explained above. 0 warnings at 390, 1024 and 1440. |
| `node build.js check` | OK |
| `node build.js audit` | The same two date lines (set by `build.js dates`), and the "~" note asking for a Tim quote, which we never write |

Shots: `<scratchpad>/rb1/invest-strategies-1031-exchange/r1/`:
- critic full pages: `shots/*-320|390|1024|1440.png`
- section crops with sample photos: `buy-320|390|1440.png`, `hold-320|390|1440.png` and `top-320|390|1440.png`

The spec before this round is `<scratchpad>/x1031-spec-before-r1.js`.

`<scratchpad>` = `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad`.
