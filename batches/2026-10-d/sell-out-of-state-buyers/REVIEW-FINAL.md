# Final fix: /sell/out-of-state-buyers/

Final fixer, 2026-11-03. All edits are in `specs/out-of-state-buyers.js`; the page was rebuilt with `node tools/mkpage.js`. The spec before this round is kept at the scratch copy `oosfix/spec-final-before.js`. New ledger rows 43 to 48 are in facts.md, marked VERIFIED-BY-FIXER, with copies of each source in `<website>/data/2026-10-d/sell-out-of-state-buyers/sources/`.

## The lead's open items

1. **What our agent does once the home is listed.** New section "What does our agent do once your home is listed?" (H2, after the steps). It lists the seller's agent's duties under SC Code 40-57-350(C)(1) (row 43): carry out the listing agreement; seek a sale at your price and terms or terms you accept; bring every written offer and counteroffer promptly, even under contract; tell you every material problem the agent knows about; tell you to get expert advice; account for money or property received for you; keep private what could hurt your sale. One line ties it to the steps, which keep the story-bank lines (pricing to nearby sales, low appraisal, HOA dues check). No new practice claim.
2. **How the deed gets to the seller and back.** New h3 "How the deed gets to you and back" (row 44, SC Bar Ethics Advisory Opinion 05-16): the closing attorney's office sends the deed and closing papers; you sign before a notary where you live and send them back; this is a closing by mail; no law requires you to attend; for the attorney's own client, the attorney reviews every paper and answers questions by phone, fax or email; send the papers back with a tracked carrier; the office records the deed. Step 5 now says the same in one line and links here.
3. **Who picks and pays the closing attorney.** New h3 "Who picks and pays the closing attorney" (rows 40, 45, 46): the sales contract can name the attorney and who pays the fees, and you and the buyer agree on both (EAO 06-11, 00-17); with a home loan, the lender follows the buyer's choice (row 40); that attorney works for the buyer, and an attorney for one side should not advise the other except to get a lawyer (Rule 4.3, as quoted in EAO 00-17); for advice of your own, hire your own South Carolina attorney; "We work with plenty of attorneys here and can recommend some" (story bank, moved here from step 4). No local custom on who usually pays is stated: no source gives one.
4. **Who holds the key.** New h3 "Who holds the key": you decide; someone must let in the inspector, the appraiser and the agents who show the home; name that person in your listing agreement with us; the law requires our agent to carry out that agreement (row 43). Step 3 links here. The page does not say our agent holds keys or checks the home: that is still an owner question (NEEDS 13 (a)).
5. **Thinnest page: depth from verified rows only.** Added the agent-duties section, the three h3s above, and the row 6 line "About 1 in 4 homes in Horry County has its tax bill mailed outside South Carolina" (the spec stops the build if that share moves). Prose is about 2,050 words by score.js (was about 1,660); 7 H2s plus the FAQ.
6. **The online-notary answer needs a source.** The answer now links SC Code 26-1-5 ("physical presence", row 47, re-read live 2026-11-03; Title 26 still has chapters 1, 2, 3 and 6 only) and keeps "The state has no video notarization of its own, so sign in person." "SC Code 26-1-5" is in the sources line.

## Blocking items still standing from REVIEW-3

- Steps 5 and 6 and the payout: steps 4 and 5 now say what the attorney's office does (rows 44, 45); the agent's duties are on the page (row 43). When and how the money arrives (days, wire or check) and how long a sale takes still have no source and stay owner questions (NEEDS 13 (c), (d), 17 (m)). The page states nothing about them.
- Rows 31 to 48 VERIFIED-BY-FIXER: still need the lead's independent verifier.

## Other changes for the audit

- Buttons to /contact/ are requests: "Send me a price and plan" (hero and bottom) and "Send me a closing plan".
- No sentence over 28 words: the exclusion sentence is now 27 ("You must have owned and lived there 2 of the last 5 years, with no exclusion used on another home in the 2 years before the sale."; struck row 20 stays quiet).
- No pseudo-cleft: "What Form I-295 is" is now "Form I-295: your sworn statement"; "What is left is yours" is "The rest is yours"; the table caption is "The hold-back when the seller lives in another state".
- The step cross-links carry short labels (data-toc) so score.js H14 reads them as matching their headings. The step 6 link to bookings is now plain text.
- Sources line shortened to fit 90 words with the five new sources (40-57-350, 26-1-5, SC Bar 05-16, 06-11, 00-17).

## Gates (2026-11-03)

- score.js (SCORE_TODAY=2026-11-03): 100/100. SEO 100, AEO 100, Human 100, Trust 100.
- claims-scan.js: 0 findings. facts-check.js: nothing on this page. house-claims.js: 0. struck-check.js: no struck wording. repeat-check.js --strict: passes.
- critic.mjs at 320, 390, 1024, 1440: 0 blocking, 1 warning (read.wall at 320 on the three-paragraph short answer, the template's short-answer block; not blocking). Shots at 390 looked at for the new sections.
- build.js audit: on this page only the two date lines (schema dateModified and visible "Updated" against the sitemap; the lead's `build.js dates` run) and the A20 note (no named quote; never write one for Tim).
