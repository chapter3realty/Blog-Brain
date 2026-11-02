# Review round 2: fixes

Re-check: pass=false, score 86. Spec only; the page was rebuilt from it. The spec before these fixes is in scratchpad `wf2/hoa-liens-and-foreclosure/spec-before-fix2.js`.

## Blocking

- **[reader] Get your house back (FAQ).** No verified row says "only through a court", so the answer opens with the reviewer's fallback. It now reads: "Not by paying the association afterward. In a Murrells Inlet case, the owner offered the full fees as soon as he learned of the sale, and the association's lawyers turned it down because someone had already bid. The Supreme Court set the Winrose sale aside because the price was far too low, but that took five years." Rows 11, 14 and 12 (sale August 2014, set aside December 2019); row 10 backs "afterward" (the bidding closes at the auction). Row 11's limit is kept: the page does not say the Murrells Inlet owner lost or kept the house. The "may not" hedge is gone.
- **[owner] Bank-forecloses-a-condo card.** The sentence is rewritten in the reviewer's plain shape: "When a bank forecloses on a condo, the new owner does not pay the dues the last owner left unpaid after the mortgage was recorded. Every owner in the building pays that share instead." It stays inside 27-31-210(b) (row 33): dues the last owner left unpaid all fall before the new owner took title, so the "but prior to the acquisition of title" limit holds.

## Nits taken

- Short answer: "paying the bill may not end it" is now "paying the bill does not by itself end the lawsuit" (row 12). The spec header comment that names the row 22 replacement is updated to match.
- Fannie Mae card: "In its full check of a building" is now "When it reviews a whole building", and "that many owners" is now "that many units" (row 31's wording). The Full Review scope is kept. I did not add "buyers may not get a regular loan": no verified row says what a lender does when Fannie Mae will not buy the loan, and the card's label "Can block the loan" already says the effect.
- Step 8 and the "mortgage stays" card no longer say the same fact. Step 8 now reads: "The highest bidder gets a deed to the home. What happens to a mortgage on it is below," with a link to the mortgage section. The card keeps the rule.
- "Before the auction": cut from three places. The Winrose section's last line now links "what to do if you are behind". The act lead-in is now "Start with the lawsuit papers." (the H2 already says "before the sale"). The in-section CTA title is now "Selling to pay the association". The bottom CTA now says "plan the sale". It stays in the short answer, the hero CTA, the caption paragraph ("Plan to settle or sell before that day", which follows the fact that bidding closes at the auction) and act 5.

## For the lead

- Row 39 (photo place) and rows 40 to 43: the re-checker checked them independently. The lead should mark them verified in facts.md, citing the round 2 re-check. I did not change the ledger status myself.

## Gates after the rebuild

- `node tools/mkpage.js specs/liens-and-foreclosure.js`: built (main 3,658 words).
- score.js (SCORE_TODAY=2026-11-02): 99/100 (SEO 100, AEO 100, Human 99, Trust 100).
- claims-scan: no hits on this page. facts-check: no hits on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- build.js check: OK. build.js audit: on this page only the two date FAILs (dateModified and visible Updated versus sitemap lastmod), which the lead's dates run sets, and the A20 warning (no attributed sentence from Tim or Devin; no story fits). No new hits.
- critic.mjs on port 8782 at 390, 768 and 1440: 0 blocking, 0 warnings. JSON: scratchpad `wf2/hoa-liens-and-foreclosure/critic-r2.json`; shots: `wf2/hoa-liens-and-foreclosure/critic-shots-r2/`. I looked at the changed parts in the 390 shot (short answer, step 8, the two cards, the FAQ answer): each reads as written, with no overlap.
