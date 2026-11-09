# Build: /sell/ (batch 2026-11-b, the seller hub)

Writer, 2026-11-09. Built from `PLAN.md` and only VERIFIED or CORRECTED rows of `facts.md`. CORRECTED rows are used in the verifier's wording (`VERIFY.md`). Row 31 (struck) prints nothing.

## Files (website working copy `scratchpad/wt-live`)

- `specs/sell.js`: new spec, the first for this hub. It follows `home-value.js`, `garden-city.js` and the approved design of `net-proceeds.js` and `fsbo.js`. Build it with `node tools/mkpage.js specs/sell.js`.
- `chapter3realty/sell/index.html`: the built page. It replaces the hand-made hub, and the URL is kept.
- `data/2026-11-b/sell/`: read only. No data file was changed.
- No new image. The one photo is the USGS houses-and-towers aerial already on the site. It is public domain, and its record is read from `data/2026-11-a/submarkets-myrtle-beach/photos.json`. Its 1x1, 4x3 and 16x9 crops serve as Article.image and the share image.

Every number is read from `data/2026-11-b/sell/findings.json`. The spec stops the build if any ledger value moves. Row 17 is CORRECTED: builders buying land are left out, so companies paid about 94 percent of the county's value. The data file still holds 0.934, so that figure is typed with the row number beside it, and the people's 101 percent is read from the file.

## Outline

- **Title** (56 characters): "Sell My House in Myrtle Beach: List It or Sell for Cash?"
- **Description** (160 characters): Myrtle Beach-area houses sold for 97.3% of their last asking price in 2026, about 4 months to an offer, then what cash buyers pay, the best month to list and the costs.
- **H1**: "Selling your house in Myrtle Beach: list it, or sell it for cash?"
- **Italic line**, about half the H1's size: "How long houses wait here, how close to asking they sell, and what a cash buyer pays." The hero sub is hidden, because the short answer says it (as on /sell/net-proceeds/).
- **Hero tiles**: 97.3% of the last asking price for houses; about 4 months to an accepted offer; March to May, when buyers sign the most.
- **Short answer**: Houses listed in Horry and Georgetown Counties sold for 97.3 percent of their last asking price from January to September 2026, about 4 months after listing. Companies that bought a house to resell paid about 70 cents for each dollar of the later price.
- **Slim offer bar**: "Get both numbers for your home: listed, and sold as is." The button reads "Have us price it both ways". The site's edge feed ("Your competition: homes for sale now") sits under the opening, and there is no homes() strip.
- **On this page**: short labels in three columns between thin rules.

1. **Should I list my house or sell it for cash?** The answer comes first. Under it, the comparison table (five rows; on a phone, each row becomes a short card). Then three H3s:
   - "What does a cash buyer pay here?": the 82 quick resales, about 70 cents on the dollar; the labelled Example ($350,000 fixed up, about $242,000 from a company); companies at 94 percent of the county's value and people at 101 percent, with the difference under about $400,000.
   - "How do we find you a cash buyer?": both numbers, and "Nobody here pushes you either way"; the 13-day story (row 21 wording, "His numbers, not a promise", linked to /sell/rental-property/); the wholesaling definition with its carve-out.
   - "Does an as-is sale still need the disclosure form?": row 27 in the verifier's wording, linked to /sell/fsbo/#paperwork.
   - **Offer**: "See the listed number and the cash number side by side" / "Get both numbers for my house".
2. **How long does it take to sell a house in Myrtle Beach?** 122 days for houses and 131 for condos, then the closing on the contract's date. Then the area table, "In every area, houses waited 111 to 136 days for an offer": 12 CCAR areas with their ZIP codes, houses and condos, each cell showing days and share of asking, sorted shortest first, with links to the six town guides that exist. Then the Myrtle Beach-area condo line (more than twice the house sales, 142 days, 94.8 percent, the lowest share). Then the photo (houses and condo towers on one beach; its caption states the condo-versus-house wait) and a link to /sell/sell-my-condo/.
3. **How close to the asking price do homes sell in Myrtle Beach?** Houses sold at 97.3 percent and condos at 96.0. That share is of the last price, after cuts. On November 9, 2026 (the date comes from the data file), more than half of resale houses for sale had cut their price. One link to /buyers/buying-in-myrtle-beach/ covers the buyer's-market question. **Offer**: "Price it against the homes buyers are touring now" / "Have us pull my competition".
4. **When is the best time to sell a house in Myrtle Beach?** The chart "Buyers signed the most contracts in March, April and May" has twelve bars, built from `pending_by_month`. The three busiest months are brass and the rest gray, with a value at the end of each bar. The wait barely changed by month (112 to 134 days for houses). Listings also peak in March, so list by late winter.
5. **What does it cost to sell, and what is my home worth?** A plain list under thin rules with three items: fees in state law, $1,320 (NP 4 wording); commission, $3,500 for each 1 percent (NP 15 wording); the hold-back for owners in another state, 5.21 percent, with the exemption and the affidavit in the same item. Links go to /sell/net-proceeds/ and /sell/capital-gains/. Then the H3 "What is my home worth?", linked to /sell/home-value/. **Offer**: "Know what you keep before you list" / "Have us work out what I keep".
6. **How do I sell my house in Myrtle Beach with an agent?** Seven numbered steps, each saying what our agent does (LOCAL-4), with no counts (no 14 days, 48 hours or 7 days). Then the out-of-state buyer share (about 3 in 10), linked to /sell/out-of-state-buyers/. Then the H3 "Can I sell my house and buy another at the same time?" (Form 504 and Form 375, rows 28 and 29).
7. **Which selling guide fits your sale?** One calm list, one column: eight /sell/ guides plus /invest/strategies/1031-exchange/.
8. **Talk to a listing agent about your home.** The lead form (address, name, phone, email, an optional note). The consent text is the live page's, word for word. The source is "Sell page", as on the live end form. A phone button follows.

- **FAQ** (5 questions, each answered on the page in other words): how long; as is; attorney; sell and buy at once; living in another state.
- Sources line, photo credit, legal notice.
- **End band**: "Thinking of selling in the next few months?" / "Book a call with an agent".

All six offers use different words, and every label reads as a request.

## Changes from PLAN.md, and why

- **Breadcrumb.** The hub is `{ name: "Sell", url: "/sell/" }` with the crumb "Sell My House", as on the HOA hub (`specs/hoa.js`). PLAN's `{ name: "Home", url: "/" }` would print "Home / Home / ..." and put Home twice in the BreadcrumbList.
- **A photo was added.** PLAN said none, but `critic.mjs` blocks a blog with no real photo (the same thing happened on /sell/net-proceeds/). The photo shows houses and condo towers side by side, and its caption states the row 11 fact.
- **The divorce FAQ and the 1031 FAQ are left out.** No ledger row covers the divorce paragraph, and the brief says the FAQ repeats only questions answered on the page. The 1031 page is in the guides list instead.
- **Supply (row 5, 4.2 and 7.5 months) and the gap in dollars (row 7) are left out.** Both are optional, and leaving them out keeps the number count down (score P2). The buyer's-market link stays.
- **"Myrtle Beach area" means only CCAR's two ZIP codes on the page.** The short answer therefore says "Horry and Georgetown Counties" for the market-wide figures (the group check in facts.md).
- **The CCAR period appears once** in the body (the short answer) and once more in the chart note. Elsewhere the page says "this year" (score P3). The chart uses month names only.
- **The first keyword is "sell my house for cash or list it Myrtle Beach".** Every word of "sell my house Myrtle Beach" is on the scorer's generic list, so the page had no topic word.
- **The offer after section 7 (book a call) became the end band.** That keeps an offer after about every second section, not two in a row.
- **The mid offers go to the form on the page (`#lead-form`).** The end band goes to /contact/ (the popup).

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /sell/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100). No FAIL, no partial. |
| `node tools/claims-scan.js` | 0 findings sitewide |
| `node tools/facts-check.js` | No wrong sentence on /sell/. The 4 sitewide hits are unchanged from before the build: /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt. |
| `node tools/house-claims.js .../sell/index.html` | 0 sentences to scope or source |
| `node tools/struck-check.js sell-struck.json` (also `sell-net-proceeds-struck.json`) | No struck wording |
| `node tools/repeat-check.js --strict` | Passes |
| `node tools/structure-check.js --strict` | Passes (not a list of places) |
| `node tools/inbound.js --only /sell/` | 12 referring pages. No sibling was touched. |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking and 0 warnings at all three widths |
| `node build.js check` | No line on /sell/. The 12 FAILs are all on /invest/airbnb-income/ (str-market drift), which is another agent's page. |
| `node build.js audit` | On /sell/, only the two mkpage date lines (schema dateModified and visible "Updated June 12, 2026" against the sitemap; `build.js dates` was not run, as instructed). There is also one note: no attributed sentence from a named licensed person, because no quote may be written for Tim Nash. |
| Own reading pass | No sentence over 28 words, no em or en dash, no sentence opening with "So" or "Here is", Devin is not named in the copy, no rate and no payment. |

Earlier rounds fixed:
- score: no topic word (S1, S2, S11); 12 date mentions (P3); one FAQ answer under 15 words (A7);
- repeat-check: two identical sentences and one repeated phrase;
- struck-check: the hold-back sentence without its exemption (row 26);
- audit: "does the work" (figurative);
- critic: a 162-character description; two text walls on a phone (cash section and cost section, fixed with H3s, a plain list and the Example as an aside).

From reading the shots: the month chart's bars were short and looked alike at 1440 px, so the label column was narrowed and the bars now use the row. The guides list in two columns wrapped unevenly, so it is one column now. The slim offer bar started left of the text at 1024 px, so it is aligned. The phone table had a rule inside each row, which is now removed.

**Preview port.** Port 8871 was already serving another agent's site (`scratchpad/x1031-prev/site`, pid 9420), so I left it running. This page was previewed on port 8873, which was stopped with `fuser -k 8873/tcp` afterwards.

## Screenshots (final build)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/sell/shots/sell-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/sell/shots/sell-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/sell/shots/sell-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/sell/critic.json`
- Slices read at full size: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/sell/slices/`

## Open items

- Owner questions Q1 to Q3 (facts.md) are still open. Until he confirms them, the page names none of the listing services (investor analysis, flood-claim check, marketing site, social, flyers) and gives no off-market count.
- PLAN's "before the build" steps that still need a fresh agent: a cold seller reader, a re-check of the reworded sentences by a verifier, and the owner's eye. I did not grade this page myself.
- In the preview, the edge feed showed "See all homes" with no cards, because the preview has no live listings. The live edge fills it.
