# Review round 3: /sell/out-of-state-buyers/

Fixer, 2026-11-01. Three reviewers: critic 5 (fail), reader 7 (fail), owner's eye 7 (fail). All edits are in `specs/out-of-state-buyers.js`; the page was rebuilt with `node tools/mkpage.js`. The round 2 spec is kept at `wf2/sell-out-of-state-buyers/spec-r3-before.js`. New ledger rows 40 to 42 are VERIFIED-BY-FIXER (facts.md). Story-bank uses are in PROPOSED.md. Owner questions are NEEDS.md 17.

## What changed, by finding

### Critic, blocking

1. **FAQ "Not for the deed."** Cut from the FAQ and the FAQPage schema (it also repeated the body; owner finding 5). The body h3 now says: "Do not plan on it. South Carolina has no video notarization of its own, so sign in person." No claim that a video deed is refused (row 34).
2. **H1 orphan at 1024 and 320.** `text-wrap:balance` on the H1 in PAGE_CSS, and a no-break space in "another state." Checked in the browser: 1024 reads "Sell your Grand Strand / home from another state."; 320 reads "Sell your / Grand Strand / home from / another state."
3. **"I-" / "295" split.** Every visible "Form I-295" now uses a no-break hyphen (U+2011): the table rows, the signing picture, the money path, the "What Form I-295 is" heading and the FAQ. A browser check found no plain-hyphen "I-295" left in visible copy at any width (the sources link keeps the plain name).
4. **The two I-295 rows overlapped.** Row 1: "Your main home, with the gain inside the federal exclusion". Row 2: "Not your main home (or a gain above the exclusion), and you sign Form I-295". Row 3: "You do not sign Form I-295".
5. **Fall question, January answer.** Now: "No. More buyers from other states closed in October than in any other month. Even in January, the slowest month, about 1 in 4 buyers came from another state." (row 8). The spec now also stops the build if October is no longer the top month.
6. **The lede is not the answer.** The sub is now: "Your Horry County home can sell while you stay in your own state. You sign the deed before a notary there, and the closing here goes ahead without you." It shows on the first phone screen above the feed (top-320.png, top-390.png in `r3/el/`). The short answer no longer repeats it: steps in one line, then the hold-back with the main-home case spelled out ("unless it was your main home and the gain is inside the federal exclusion"), then the buyer share.
7. **Value: steps 3 to 6 and the payout.** Partly done with sourced material only:
   - Step 3 adds, from the story bank (`low-appraisal-reconsideration`): "Low appraisals are rare here. When one comes in low, one of our agents sends recent sales nearby with a request to reconsider the value."
   - Step 4 adds who picks the attorney (row 40, SC Code 37-10-102: with a home loan, the lender must ask the buyer and follow that choice) and, from `no-vendor-names`: "We work with plenty of attorneys here and can recommend some."
   - Step 6 now says what it means for the seller: the recording date starts the 90-day count for guest stays.
   - New section "Where does the price go at closing?": a money path on the table's $400,000 sale (price, deed fee $1,480, hold-back $5,210, the seller's own payoff and commission, what is left), with the wire-safety line.
   - Still open: how the signing package travels, when and how the money arrives, who handles keys and repairs, and how long a sale takes. No source answers these. NEEDS.md 13, 14 and 17.

### Critic, warnings and nits

- "The closing attorney's office sends it": now "The buyer, usually through the closing attorney's office, sends it to the South Carolina Department of Revenue."
- Rental second notice: added as its own line in the bookings timeline, "Within 14 days after the sale: the rental company gets the buyer's name, address and the date the deed was recorded." Row 42 (27-50-250(B)).
- Chart note: now "another state or country".
- "own from another state": gone everywhere (owner finding 7).
- Rows 31 to 42 VERIFIED-BY-FIXER: for the lead's independent verifier (below).
- Byline date: the lead's dates run. Feed box, footer line, IDX phone wrap: site chrome, NEEDS.md 15.
- Photo placement: kept in the last section; a photo of the deeds office is shot 2 in shot-list.md (NEEDS.md 18).
- FAQ schema answer "The table above gives all three cases": that FAQ is cut. Each FAQ answer now stands alone.

### Reader, blocking

1. **When and how the money arrives.** Not answered: owner question (NEEDS 13 (c), 17 (m)). The new money-path section shows what comes out of the price and what is left, and how to keep the transfer safe.
2. **How the deed reaches me and goes back; who can be the witness.** The package's trip is an owner question (NEEDS 14 (i)). The witness: a new picture shows the three people at the signing ("You", "The notary", "One more adult") and says "Bring someone who is not on the deed." That is an instruction, not a statement of law; whether a co-owner may witness is NEEDS 17 (l).
3. **Who picks the attorney and who pays.** Who picks: answered for a buyer with a home loan (row 40). Who pays and whether to hire your own: NEEDS 17 (k).
4. **Keys and repairs.** Not answered: owner questions 13 (a), (b) and 17 (n). The step still asks who holds the key, and the closing-plan box asks it too.
5. **How long a sale takes.** Not answered: owner question 13 (d).

### Reader, nits

- Feed box above the answer: site chrome (NEEDS 15). The answer now sits in the lede above it.
- Breadcrumb: now "Selling From Out of State".
- "Unless the sale is exempt": the short answer now names the main-home case. The withholding section says "A main home whose gain is inside the federal exclusion is exempt."
- "What is my gain?": "Your gain is what you get from the sale less what the home cost you." (row 41, IRS Topic 409). The FAQ adds the loss case: with the form, nothing is held back.
- "of its own" and "may not": the hedge is gone (critic 1).
- Too many numbers: the main-home paragraph is shorter; the deed fee is now a line in the money path, not prose.
- "Middle price": now "typical price" in the text and the chart title.
- Form I-295 named less often in prose: once in the short answer as "the state's form", then in the table, its own h3, the signing picture, the money path and one FAQ.
- Dates: the lead's dates run.

### Owner's eye, blocking

1. **What our agent does at each step.** Steps 1, 3 and 4 now say what we do (above). Steps 5 and 6 and the payout cannot until the owner answers NEEDS 13, 14 and 17. I did not invent a practice.
2. **Reasons to pick Chapter3.** Added only what the story bank supports: our agents challenge a low appraisal; we work with plenty of attorneys and can recommend some; our agents check for unpaid HOA dues before closing. score.js T2 now passes (2 first-hand sentences); Trust is 100.
3. **Shortest page, 6 H2s, no drawn visual.** Now 7 H2s with the FAQ (two new sections: "Where does the price go at closing?" and "What happens to your guest bookings when you sell?"), about 1,660 words of prose by score.js (main 3,090 words by mkpage), and four drawn visuals: icons on all six steps, the signing picture, the money path and the bookings timeline. I did not pad it to match the siblings' word counts; the owner questions are what would add real length.
4. **Too plain on a phone.** The five-block text run in section 1 is now: steps with icons, the signing picture, two short h3 answers, the closing-plan box. "Keep your money safe" and "What it costs to record" moved into the money-path section, where the deed fee is a line in the picture. The rental rules are a timeline, not two paragraphs.
5. **FAQ repeats the body.** Cut: "Can I sell while living out of state?", "Do I need to be at the closing?", "Can I use an online notary?" and "How much does SC withhold?". The four FAQs now each say something the body does not: the loss case, whether the notary must be from South Carolina (rows 13, 14), unpaid HOA dues (story bank), and the fall question with October (row 8). The witness rule is now said once in the steps (a pointer) and once in the picture. repeat-check --strict passes.
6. **Hedges and law-talk.** "To be safe" and "may not be accepted" are gone. The e-signature step says "You sign them by e-signature on your phone or computer. In South Carolina that counts the same as ink." "in Internal Revenue Code Section 121" is cut.
7. **"own from" and the statistician's answer.** "own from" is gone: "About 3 in 10 buyers here are from another state", chart "Buyers from another state, Horry County", caption "where more than half of buyers are from another state". The pay-more section opens "Buyers from other states paid what their neighbors paid." I did not use a flat "No.": row 7 is corrected, and its verifier struck "do not pay more" because the means differ (1.08 against 1.05). The short answer keeps the row's safe wording ("we found no sign that they pay more").
8. **Teaching the seller tasks an agent does.** The rental rules are now a timeline written as what happens ("The buyer gets...", "The rental company gets..."), not "you must". I did not write "we put your booked dates in writing" because the owner's eye itself made it wait on the owner's confirmation; it is NEEDS 17 (j).
9. **Rows nobody independent has checked.** Not something a fixer can clear: rows 31 to 42 need the lead's independent verifier. Rows 40 to 42 are new this round, with the saved sources named in each row.

### Owner's eye, nits

- Feed on a seller page: NEEDS 15.
- Byline date: the lead's dates run.
- Photo: kept; the deeds-office shot is shot 2 in shot-list.md (NEEDS 18).
- Other seller costs: the money path lists the loan payoff, the commission and other closing costs as one line, with the calculator for the figures. No figure is stated for them.
- Searches not answered (payout, time to sell, empty-house checks and insurance, furnished, HOA papers): owner questions. The HOA lien is now answered in the FAQ.

## Findings I think are wrong or left

- None rejected outright. One trade-off: the owner's eye asked for "No. They paid what their neighbors paid." I kept "Buyers from other states paid what their neighbors paid." without the flat "No.", because row 7's verifier struck "do not pay more".
- Left for the owner: what our agent does at steps 5 and 6, keys, repairs, the signing package, the payout and the time to sell (NEEDS 13, 14, 17).
- Left for the lead: rows 31 to 42 to an independent verifier; NEEDS 15 (feed), 16 (critic.mjs photo route), the dates run.

## Gates after the rebuild (2026-11-01)

- `score.js` (SCORE_TODAY=2026-11-01): 100/100. SEO 100, AEO 100, Human 100, Trust 100 (T2 passes with 2 first-hand sentences from the story bank).
- `claims-scan.js`: 0 findings. `facts-check.js`: no hit on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording (round 3 caught "same room" in the first draft of the signing caption and the hold-back sentence without "unless the sale is exempt"; both fixed). `repeat-check.js --strict`: passes, 0 identical, 0 near.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning (`wf2/sell-out-of-state-buyers/critic-r3.json`). Full-page shots at 390 to 1440 in `wf2/sell-out-of-state-buyers/shots3/`; element shots at all five widths in `wf2/sell-out-of-state-buyers/r3/el/`. I looked at the H1 at 320 and 1024, the steps at 390, the signing picture at 390 and 1440, the money path at 320 and 1440, the timeline at 390 and 1024, the table at 768 and the FAQ at 320: no orphan, no "I-" split, no sideways scroll (scrollWidth equals the window at every width).
- `build.js check`: OK. `build.js audit`: only the two date lines for this page (the lead's dates run) and the A20 note (no named quote; never write one for Tim).
