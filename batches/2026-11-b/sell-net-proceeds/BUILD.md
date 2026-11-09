# Build: /sell/net-proceeds/ (batch 2026-11-b)

Writer, 2026-11-09. Built from `PLAN.md` and only VERIFIED or CORRECTED rows of `facts.md`, CORRECTED rows in the verifier's wording (`VERIFY.md`). Rows 14 and 18 (struck) print nothing: no attorney fee, no HOA fee range.

## Files (website working copy `scratchpad/wt-live`)

- `specs/net-proceeds.js`: new spec, in the style of `home-value.js`, `garden-city.js` and the approved `fsbo.js`. Built with `node tools/mkpage.js specs/net-proceeds.js`.
- `chapter3realty/sell/net-proceeds/index.html`: the built page (replaces the hand-made page; URL kept).
- `chapter3realty/images/2026-11-b/sell-net-proceeds/`: `share.jpg` (our card, `tools/ogcard.js` run on a copy of the page) and the Horry County courthouse photo in three sizes (from batch 2026-11-a's unshipped patch; metadata written with `photos.js embed`).
- `data/2026-11-b/sell-net-proceeds/photos.json`: the photo's file paths moved from `2026-11-a` to `2026-11-b`. Nothing else in the data folder changed.

Data read, never typed: `data/2026-11-b/sell-net-proceeds/findings.json` (tiers, tax split, listing counts, tax bills out of state) and `data/2026-11-a/buyers-cost-to-own/hoa-horry.json` (row 22). The spec throws if any ledger value moves. The calculator's function runs in node against the three hand-worked cases (PLAYBOOK A29b): the example ($155,542), $266,000 / no payoff / 6 percent / second home / end of September ($246,641.45), and $215,000 / no payoff / 5 percent / own home / end of March ($203,244.62). The same function runs in the browser; a Playwright run confirmed it updates with no script error.

## Outline

- **Title** (60): "Cost to Sell a House in South Carolina: Net Sheet Calculator". PLAN's title has 63 characters and mkpage allows 62, so "Net Proceeds" became "Net Sheet" (a search the page owns). "Net proceeds calculator" stays in the description, the calculator's H2 and the keywords.
- **Description** (155): $1,320 in state fees on a $350,000 home, $3,500 per 1 percent, who pays what, a calculator.
- **H1**: "What it costs to sell a house in South Carolina, and what you keep". Italic line at about half the H1's size: "Every cost on a Myrtle Beach-area sale, line by line, with a calculator for your own home." The hero sub is hidden (the short answer says it), as on /sell/fsbo/.
- **Hero tiles**: $1,320 in state fees on a $350,000 sale with a mortgage; $3,500 for each 1 percent of commission; the buyer pays both title policies.
- **Short answer**: $1,320 in state-law fees on the middle $350,000 home with a mortgage to release, under half of 1 percent; the commission is the biggest selling cost, $3,500 per 1 percent; the payoff comes out of the same check; with 5 percent (an example) and $175,000 owed, you keep about $155,500 before the attorney's fee and any HOA charges.
- **Slim offer** under the answer: "Have us build a net sheet on your address." Then the site's edge feed ("Your competition: homes for sale now", price cuts $300,000 to $600,000).
1. What will I walk away with on a $350,000 home? The worked net sheet, a plain table under thin rules with a "You keep" total.
2. Seller net proceeds calculator. Opens on the example ("You keep about $155,500"), three main boxes, then month, kind of home, HOA, credit, attorney; the lines under it. Under it: the October note and the out-of-state hold-back in two sentences, linked to /sell/capital-gains/.
3. Who pays what when you sell a house in South Carolina? Three plain lists (you, the buyer, the side the contract ticks). Link to /buyers/closing-costs/.
4. What does a closing attorney cost a seller in South Carolina? The supervising attorney, then three plain items: deed preparation, payoff handling fee (EAO 11-06 wording), your own attorney. No dollar figure. **Offer**: "Want every line filled in for your home?"
5. How much are SC deed stamps at your price? The rule, the photo (caption: the $1.30 / $0.55 split), county fees, the four-price table (folds on a phone), the 0.38 percent line (row 5 wording).
6. What HOA fees does a seller pay at closing? The box rule, three plain items (no cap; unpaid dues; special assessments), row 22, link to /hoa/estoppel-and-transfer-fees/. **Offer**: "Have us find out what your HOA charges when you sell."
7. Why is my mortgage payoff more than my balance? Row 29 in the verifier's wording; H3s "Can I sell my house before the mortgage is paid off?" and "Closing day: guard the wire".
8. Who pays the property taxes when you sell in Horry County? Chart (SVG, glass card): "The later you close, the bigger the tax credit to the buyer". H3s on 4 and 6 percent and on a bill that turns out different; row 28. **Offer**: "Have us work out the tax credit from your own tax bill."
9. Do you pay tax on the money from selling your house? Exclusion, selling expenses, 1099-S; link to /sell/capital-gains/.
10. How do sellers here keep more of the price? Price it once ($3,500 per 1 percent), our price-cut count with the stat (1,260 of 2,188; 1,372 of 2,652), commission, credits (FHA 6 percent, VA 4 percent), home warranties (62 of 2,188). **Offer**: "Have us price your home against what is for sale now" to /sell/home-value/.
11. Get a net sheet for your own home: the lead form, consent text word for word, source "net-proceeds", the phone button.
- **FAQ** (6, each answered above in other words): net sheet; title insurance; deed stamps; attorney; 6 percent; selling before the loan is paid off.
- **Sources line**, the photo credit, the legal notice, the end band "Know your number before you list".

Changes from PLAN.md, and why:
- Payoff comes before property taxes, and tax on the gain before "keep more", so the tax offer follows the tax section and the last offer comes right before the form.
- The wire-safety FAQ became an H3 in the payoff section plus an FAQ swap ("Can I sell before the mortgage is paid off?"), because the FAQ repeats only questions the page answers.
- A photo was added. PLAN said none, but `critic.mjs` blocks a blog with no real photo. It is the 2026-11-a licensed courthouse photo, and its caption says only what it shows plus row 2's split. The photo partner's shot list can replace it.
- The chart is an SVG drawn twice (phone and wide), not `G.bars`, so the score's H4 sees a labelled chart; it uses the same glass card as the calculator and the offers.
- Rows 16 ($18 million in deed stamps) and the $7k story figure are left out (optional; P8). The 2024 date of the NAR change is left out (the audit asks for the rule, not the date).
- The keyword "SC deed stamps" became "South Carolina deed stamps", because the audit flags the identical keyword on /buyers/closing-costs/. PLAN's cannibalization fix for that page is still owed by the lead.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /sell/net-proceeds/` | 99/100 (SEO 100, AEO 100, Human 99, Trust 100). No FAIL. One partial: P6, "estoppel" used once, explained in the same line (a searched word). |
| `node tools/claims-scan.js` | 0 findings sitewide |
| `node tools/facts-check.js` | No wrong sentence on this page. The 4 sitewide hits are on /buyers/relocating/from-virginia/ and llms-full.txt (not this page). |
| `node tools/house-claims.js` | 0 sentences to scope or source |
| `node tools/struck-check.js` (24 + 7 patterns) | No struck wording |
| `node tools/repeat-check.js --strict` | Passes |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking, 0 warnings at all three widths |
| `node build.js check` | OK |
| `node build.js audit` | Only the two mkpage date lines on this page (dateModified and "Updated" against the sitemap; `build.js dates` was not run, as told). One note: no attributed sentence from a named licensed person (no quote may be written for Tim Nash). |
| `node tools/image-meta.js --only /sell/net-proceeds/` | S13: Article.image has no 4x3 and 16x9 crops 1,200 px wide. The photo is only 1200 x 800, so a 4x3 crop at 1,200 px would be upscaled. Not one of this task's gates; a larger copy (the Commons original is 2100 x 1400) or the partner's photo fixes it. |

Earlier rounds fixed: S5 (own share image), T2 (two first-hand sentences: "We checked every resale house...", "We read the county's recorded deeds..."), H4 (labelled chart), A10 (Myrtle Beach and Conway named), P10 ("law limits"), a sentence numbering a list, a parenthetical aside, the identical keyword, three repeated sentences, and three critic blocks (a cut-off chart label, a chart legend past the card on a phone, no photo).

## Screenshots

`scratchpad/rb1/sell-net-proceeds/shots/` (full pages): `sell-net-proceeds-390.png`, `sell-net-proceeds-1024.png`, `sell-net-proceeds-1440.png`. Full-size slices I read: `scratchpad/rb1/sell-net-proceeds/view/` (`p0` to `p5` phone, `m0` to `m10` at 1024, `w0` to `w13` at 1440). Critic JSON: `scratchpad/rb1/sell-net-proceeds/critic.json`.

What I fixed after looking as a stranger: the net-sheet row names were long and wrapped on a phone (shortened); the calculator's boxes dropped under their labels on a phone (now one row each); the four-price table's labels wrapped unevenly on a phone (short labels: Deed stamps, State fees, Per 1%); the chart's text was small on a phone (larger, legend on two lines); the chart note repeated the "three times" H3 (cut); the third who-pays heading ran three lines (short heading, "You pay if no box is ticked" under it); list text was smaller than body text (now the reading size); the credits said the photo was cropped (it was only resized; line removed).

## For the lead (outside this page's files)

- /buyers/closing-costs/ still declares "sc deed stamps" and claims the seller's deed stamps (PLAN's cannibalization fix).
- The site footer on this seller page says "The Myrtle Beach investor-focused brokerage" (site frame, CRAFT 4).
- The site's edge renders the FAQ as closed accordions in the preview; the page source has them open.
- Run `node build.js dates` before shipping.
- Owner questions Q1 to Q7 in `facts.md` and `PLAN.md` are still open. None blocked the build.
