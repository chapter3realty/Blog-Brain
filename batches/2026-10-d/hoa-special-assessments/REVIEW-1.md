# Review round 1: /hoa/special-assessments/ (batch 2026-10-d)

What changed for each finding. Spec: `specs/special-assessments.js` (website working copy). Rebuilt with mkpage.

## Gates after the fixes

- score.js: 100/100 (was 99; "master deed" left the prose).
- claims-scan: 0. facts-check: 0 hits on this page. house-claims: 0. Struck-wording check: 0.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. Own Playwright run with the sample photos routed: page width equals the window at all four widths, and the strip shows its sample condo cards.
- build.js check: OK. build.js audit, this page: two date mismatches (the lead's `build.js dates` fixes them), and two warnings: no boxed offer in the middle (cut on purpose, owner finding 3) and no named quote (we write none).

## Critic

| Finding | Change |
|---|---|
| 320: AI search box and button cut off, page scrolls | Shared strip. Logged as NEEDS 6. Workaround CSS in the spec. 320 px now has no sideways scroll. |
| 1024: header 1029 px wide | Shared header. Logged as NEEDS 7. Workaround in the spec hides the header phone from 1000 to 1060 px. 1024 px now fits. |
| "Board minutes from the last 12 to 24 months" | Now "Board minutes." |
| Shipyard sentence lost "the board said" | "The board said every unit's windows and sliding doors had to be replaced, at $12 million to $13 million." |
| Tax H2 promised an insurance answer | H2 is "Is a special assessment tax deductible?", ToC "Tax", id `tax`. The master insurance link stays as one sentence. No other page links to the old `#tax-and-insurance`. |
| 37-word foreclosure sentence | Three sentences, in row 24's approved meaning: "Sometimes a unit is sold at the foreclosure of its mortgage. The buyer at that sale does not owe the assessments that came due after the mortgage was recorded and before the buyer took title. All the owners pay those instead." |
| Nit: "roof" alone in the age chart labels | The labels are gone (owner finding 9: HUD lives said once). |
| Nit: who-pays rows inferred | "Voted before closing, billed after": who pays is now "The purchase contract decides" (row 18's note says exactly that). "Talked about, not yet voted": "Whoever owns the unit when it is billed" (rows 1 and 18: owners at the time owe the share). For the verifier to confirm. |
| Nit: "pledge its income" | Sentence cut. |
| Nit: H1 and subtitle orphans | New H1 and subtitle end with a non-breaking space before the last word. |
| Nit: hero chips wrap at 320 and 390 | Three chips with short words: "No cap / in SC law", "Your share / set in the deed", "Your limit / the HOA's statement". The loan chip is cut (the top had too much, owner finding 4). |
| Nit: worked example left column at 320 | "60 units at 0.65%". |
| Nit: lien chart left-aligned at 1440 | Centered in its card. |
| Nit: ToC one column at 1440 | Shared. NEEDS 9. |
| Nit: credits repeat | The general line is removed in the spec. NEEDS 8. |
| Nit: read.wall at 320 | The case card now counts as a box; the short answer is shorter. critic shows no wall. |
| Nit: tax section is not local | Kept short (two sentences and a link). |
| Note: photos.json names a missing base file | The base file now exists (a copy of the 1200 px file). `photos.js check`: all photo records pass. |

## Reader

| Finding | Change |
|---|---|
| Can I get the minutes before I offer, and can I back out? | The record-rights sentences are cut (owner finding 2). The section says "We get the records through the seller", and the line under the H1 says you learn what the minutes and the list of assessments say before you make an offer. Whether a buyer can walk away after signing depends on the contract's due diligence terms. No verified row covers the South Carolina contract, so the page says nothing about it. **Gap for the lead:** a ledger row on the standard South Carolina contract's due diligence period, if a public primary source exists (the SC Realtors forms are members only). |
| "We write the split into the offer": what split? Installments? | New paragraph: "The offer can say the seller pays an assessment that is already voted, or gives you a credit for it at closing. When it is billed in installments, the offer can say who pays the ones that come after closing." This says what a contract can say, not a fact from a source. For the verifier. |
| Insurance half not answered | The heading no longer asks it. Row 29 struck the loss assessment clause (no primary South Carolina source), and the master insurance page has no ledger in this repo, so the page cannot answer it. See "Where I did not follow a finding". |
| Statement wording unclear; what if it shows zero? | Who-pays section: "A buyer who asks must be given the association's written statement of what the seller owes. The buyer owes no more of the seller's bill than that statement shows. If it shows nothing owed, the buyer owes none of it." This follows from row 18 ("limited to the amount as set forth in the statement"). The short answer and FAQ say "written statement of what the seller owes". |
| The offer button: cost, signing, time | Not changed in fact: no verified row says what the check costs or whether a buyer signs first. **Question for the lead/owner:** the offer's terms (no charge? no agreement needed to ask?). The final band now says who does the work: "One of our agents reads its minutes, its list of special assessments and its reserve study, if it has one, and tells you what is coming." |
| Did anyone pay $88,398? | Now "About $88,000", "for each unit in two of its buildings", then "The owners voted it down. The repair cost moved into the yearly budget instead." and "The court's opinion does not say what each owner paid in the end." FAQ matches. |
| Nit: strip before the short answer | The edge places the homes strip after the hero on purpose (owner, 2026-10-26, `idx-lib/edge.js` placeFeedTop). Not changed. |
| Nit: all hero boxes bad news | The third chip is now the buyer's limit, and the line under the byline is what we find out for you. |
| Nit: words not known | "master deed" out of the prose; Fannie Mae is explained the first time it appears ("which buys home loans from lenders"). Receiver, levied (kept only inside the form's quoted question), bylaws in plain context. |
| Nit: report-sounding sentences | Cut: receiver, pledge, payout order, two-thirds, "the court recorded". The court sentence is now "A court will not overrule a board that acts within its powers and in good faith. It can step in when a board breaks its own founding documents or bylaws." |
| Nit: too many numbers | Complaints: the "140 of the 452" sentence and "an even larger share" are cut; the chart carries the counts. Case: one rounded number. |
| Nit: lien chart: rising or not? | "That is about the same as in 2024. The count fell from about 540 in 2010 to about 350 in 2021, and has climbed back since." (544 in 2010 is the verifier's merged count, row 26, dedupe-filers.out.) |
| Nit: two update dates | Set by `build.js dates`, which the lead runs. |
| Nit: footer for investors | Shared. NEEDS 9. |
| Nit: credits repeat | Fixed (above). |

## Owner's eye

| Finding | Change |
|---|---|
| Statute detail | Cut: "must repair ... promptly unless ... 80 percent", the phased-condo percentages, two-thirds, the conversion report card (the "No ..." list keeps its three items), the exempt sales, "pledge its income", the receiver. Fannie Mae's carve-out is now one plain line: "Damage to only one or a few units does not count." |
| Teaching how to get the records | Replaced by "We get the records through the seller." |
| "Send us the building's name" three times | Gone. Top bar: "Know about an assessment before you sign." Mid-page box: cut. Final band: "Want to know what a building's papers say?" / "Tell us the condo you like. One of our agents reads ...". Both buttons: "Have us check a building". |
| Repetition | "before you make an offer": 1 (the line under the byline), plus "before you sign" once in the bar. "must insure the building": 1 (flow step 1). The line under the byline no longer repeats the chips: it is now what you get. (mkpage requires that line, 8 to 30 words, so it cannot be dropped.) The paragraph that repeated flow step 3 is now one sentence in the flow caption: the board can bill that part as a special assessment or add it to the yearly budget. The repeated "We get the association's statement" sentence is cut; the card keeps it. |
| Insurance heading | Taken out of the heading (the second option in the finding). |
| Too many exact numbers | "About $88,000"; building letters and the two other figures are gone. |
| Shipyard told twice, no ending | Told once, under "How much", with the H3 "What did one Pawleys Island condo's board ask each owner to pay?". It ends: "For a buyer, this means a no vote can still lead to a bigger yearly budget. We read the budget as well as the minutes." The "What happened when owners voted no" H3 and the court-procedure sentence are cut. |
| HUD chart and HUD lives three times | Chart is six parts (flat roof, shingle roof, elevator machinery, aluminum windows, balconies, railings) with no building bars. Its note gives the two building ages in plain words. The age chart lost its HUD labels and the intro sentence lost its numbers, so the lives are stated once (the paragraph after the chart). |
| Flat H1 | H1: "A special assessment on a Myrtle Beach condo can pass to its buyer" (rows 18 and 24, the page proves it in the who-pays and not-paying sections). mkpage requires the italic line, so it is now a short hook that repeats the key word: "What one costs, who pays it, and how we find it in the minutes." |
| Nit: "HOA laws has the rules" | "Our page on South Carolina's HOA laws covers both." |
| Nit: payout order | Cut. "The seller pays what was billed before closing. It comes out of the sale price." |
| Nit: foreclosure sentence | Three short sentences (see critic). |
| Nit: tax card says it twice | The tax cards are gone; two plain sentences instead. |
| Nit: ✓ card colon | The card is cut. |
| Nit: empty homes strip | With the README's photo routing the strip shows sample condo cards. |
| Nit: complaint numbers | "were an even larger share" cut, and the count sentence lost its numbers. The chart and the "more than doubled" line stay. |
| Nit: photo caption | Photo moved to the loans section, after the Fannie Mae list. Caption ends "Balconies and waterproofing are on Fannie Mae's list." (row 12's list; no claim about flat roofs or "near the ocean", which the source does not say). |

## Where I did not follow a finding, and why

- **Answer "does insurance pay it" from the master insurance page (owner).** The verifier struck the loss assessment clause in row 29: no primary South Carolina source, insurer pages only. /hoa/master-insurance-ho6/ is an older page with no ledger in this repo, so its sentence is not a verified row. I took the finding's second option: the heading no longer asks it, and the page links to the master insurance page in one sentence.
- **Drop the italic subtitle (owner).** mkpage requires `h1em` and `sub`. The italic line is now a short hook, and the line under the byline says something no other line in the hero says.
- **Strip before the short answer (reader).** The edge puts it there on the owner's 2026-10-26 instruction.
- **Mid-page offer box.** build.js audit warns that the page has no boxed offer in the middle. The owner's finding said to cut it, so it stays cut.
