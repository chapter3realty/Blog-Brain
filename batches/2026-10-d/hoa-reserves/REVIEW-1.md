# Review round 1: /hoa/reserves/

Fixer, 2026-11-01. Three reviewers (critic 7, reader 7, owner's eye 8). Every change is in `specs/reserves.js`; the page was rebuilt with `node tools/mkpage.js specs/reserves.js`. New facts are ledger rows 33 to 36 in `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check.

## Gates after the fix

- score: 99 (SEO 100, AEO 97, Human 100, Trust 100). Open: A10 names only two places; P2 3.6 numbers per 100 words (was higher).
- claims-scan 0; house-claims 0; facts-check 0 on this page; struck-check (this page's list and the special-assessments list): no struck wording; repeat-check: 0 identical, 0 near.
- critic.mjs at 390, 768, 1440: 0 blocking. At 320 and 1024: the same three shared-chrome blocks as before (NEEDS 10). One warning at every width: the glance tile line height (shared, NEEDS 11).
- build.js check: OK. build.js audit: only the two date mismatches that `node build.js dates` fixes (the lead runs it), plus two warnings (3 dates in body counts the sources line; no attributed quote, which we may not write).
- Calculator tested in Playwright: prefilled 10.4 percent and 26 percent; cash 0 gives 0 percent; "$90,000" typed with a dollar sign and comma reads 15.6 percent and reformats to "90,000"; an empty "should hold" asks for that number.
- Shots: `wf2/hoa-reserves/r1/` (element shots at 390 and 1440) and `wf2/hoa-reserves/r1-shots/` (critic, all five widths). Looked at each.

## Critic

| Finding | What changed |
|---|---|
| BLOCK 320: "Find houses" cut off; BLOCK 320: body 364 px; BLOCK 1024: header phone at 1029 px | Not fixable in the spec without making this page's shared header and feed differ from every other page. Written up for the lead with the fix the critic gave: NEEDS 10. |
| Hero chip "56% of condos 30+ years old" | Now "56% of condos" / "for sale: 30+ years old". |
| "South Carolina law does not make it save." | H1 line is now "Its reserve fund tells you. South Carolina law does not require one." |
| Meter note bare possessive | "Association Reserves, a national reserve-study firm, set these bands from its clients' studies. The two marks are the example building below, with less and with more saved." |
| "$9,500 if 40 owners shared it / $1,900 if 200 did" | Cut. The gap box says "Split evenly: about $4,750 for each of the 80 owners." |
| Meter label "Saved more: 75%" | "Same building, 75%". |
| Study paragraph repeats the five pills | Both cut (owner's eye: teaching the method). One plain sentence in the first section says what a study is. |
| Florida paragraphs repeat the table (962 px wall at 320) | Cut to one sentence: Florida owners can no longer vote to fund less than the structural study says, with the funding sources row 19 requires. |
| "Four East Coast states ..." can read as "only four" | "Florida, New Jersey, Maryland and Virginia make condo boards study their reserves." |
| Roof bars: cheapest and dearest both orange | "Saved for ahead" is green; its note reads "less than the price: savings earn interest". |
| Calculator: no thousands separators; cash 0 gives a prompt | Inputs are text with `inputmode="numeric"`, prefilled "60,000", "1,515,600"; commas and "$" are accepted and reformatted on change; cash 0 gives 0 percent. |
| SEO: H1 lacks "reserve"; H2 "What do we read before you buy a condo?" | The H1 now holds "reserve fund" (the italic line is inside the H1). The H2 is "What should a buyer check in a condo's reserves?" |
| Credits: generic line plus the photo's own line | The spec cuts the generic line from `ph.credits()` and throws if photos.js changes it (NEEDS 9). |
| NOTE: feed title not tied to the page | Left as is; it is shared feed config. NEEDS 12. |
| Tool false hits (photo count, feed photos) | No change needed. |

## Reader

| Finding | What changed |
|---|---|
| What if the building has no reserve study? | New H2 "What if a building has no reserve study, or an old one?": no law requires one, so a building can have none; a missing study is a reason to look harder, not proof of a problem; we judge it from the budget, the balance sheet, the minutes and the age of the big parts; it must pass the lender's 10 percent test because it has no study to use in its place (row 13). Also a new FAQ. How common a missing study is: no source counts it, so the page does not guess. The calculator's second half is headed "If the building has a reserve study". |
| When do I see the papers, and can I walk away? | New H3 "When you see the papers, and when you can still back out" as a three-step strip: before you sign (the seller's disclosure asks about special assessments, row 34), after you sign (the due diligence period: end the contract for any reason with written notice and the fee the contract names, row 33), when it ends (read the reserves before then). New FAQ "Can I back out of a condo purchase over weak reserves?" The FAQ answer no longer says "before you make an offer". |
| Who pays an assessment voted while under contract? | "If they are weak, you can ask for a lower price or a credit at closing, or walk away. Who pays an assessment the board votes before you close is up to the contract, so it goes in the offer." Link to /hoa/special-assessments/, which owns the detail. New FAQ with the statement limit (row 35). |
| Gap box 40 and 200 owners | Cut (see critic). |
| Intro names NC, NY, PA; table has VA | The IRS sentence is cut (and its source); the intro names the four states in the table. |
| Does the read cost anything, client or not, how long? | Cannot answer from the ledger or the story bank. Owner question in PROPOSED.md. |
| Nit: tiles use "funded" and "lender test" before they are explained | Tiles are now "Big repairs / what reserves pay for", "10% of dues / to reserves, for a loan", "56% of condos / for sale: 30+ years old". |
| Nit: "this" in the H1 | "Can a Myrtle Beach condo association pay for its own roof?" |
| Nit: "South Carolina's HOA laws has" | "The rest of the state's rules are on our page on South Carolina HOA laws." |
| Nit: cable income sentence, preparer credentials card | Both cut. The lender cards are now "How a building passes" and "When it fails". |
| Nit: Florida detail | Cut to one sentence. |
| Nit: too many numbers in the lender example and the fee sentence | Lender example: "puts 10.4 percent of its dues into reserves, so it passes while 26 percent funded" (the $60,000 and $576,000 are gone). The fee sentence keeps one range and one figure; owner's eye named that finding as a strength, so it stays. |
| Nit: the date three times | Once, in the lender section. The short answer and the FAQ no longer give it. |
| Nit: "$231,800" roof stopped the reader | The bar's note says "less than the price: savings earn interest"; the lead-in says "A special assessment pays the full price, and a bank loan adds its interest." |
| Nit: wind and storm deductibles | One line links to /hoa/master-insurance-ho6/, which covers who pays the master policy's deductible. No new deductible facts: no verified row. |

## Owner's eye

| Finding | What changed |
|---|---|
| Repetition: the South Carolina rule about seven times | Now in the H1 line, the South Carolina section (one paragraph; the "No" cards are cut), the state table row and FAQ 1. The short answer, the "South Carolina does not." sentence and the second FAQ are gone. The FAQ "Does South Carolina require a reserve study?" now adds a point the body does not make: a board can still get a study, because a lender accepts one in place of the 10 percent test. |
| Repetition: the 70/30 bands | Now in the sub line and the gauge, with one sentence that adds what the gauge does not ("repairs are often put off"; a fund need not reach 100 percent). The band cards, the "70% funded" tile and the "good percent funded" FAQ are cut. |
| Repetition: the definition; "a plan that only keeps the fund above zero" three times | The "What is an HOA reserve fund?" FAQ is cut. The zero-balance plan is said once, in "What we read". |
| Technical content | Cut: "Lenders call it replacement reserves.", "Reserve experts call it the fully funded balance.", the 30-year standard sentence, the cable income sentence, the preparer card, the baseline funding card, the Florida item list, the milestone sentence, the Virginia paragraph. |
| Teaching the agent's job | Cut: the three-step percent-funded method and the five-step study strip. One sentence explains the idea ("A roof halfway through its life should have about half its cost saved."); the result stays (the gauge and the example). |
| Too many exact numbers | The 14-dollar table is now a drawing of the example building with its six parts numbered and a bar of each part's life used ("15 of 20 years used"), red for the three due within five years. No dollar column. Below it: "about $1.5 million" should be saved, 26 percent funded. The gap box has one gap figure and the per-unit split. The age chart shows only the shares (56, 58, 65 percent); the "1,593 of 2,867" counts are cut. The roof chart keeps its three bars, since it is the one picture of why saving ahead costs less. |
| The date too often | Once (lender section). The photo caption no longer says "in 2011"; the year stays in the credits. |
| Grand Strand angle; pictures of the subject | New: "Salt water is the other reason. Under Florida's law, local officials may require a condo tower's engineer inspection at 25 years instead of 30 when the building is near salt water. Every oceanfront tower here is." (row 20, applied as row 36). The page does not say salt air wears concrete faster: no row says it. Pictures: our own drawing of the building and its parts is now in the example section. Wikimedia Commons answered every request with "too many requests" (search and file server both), so the verified spalling photo in VERIFY.md could not be downloaded. The shot list for the photo partner is ready in `shot-list.md` (elevator machine room box from the beach, an old tower beside a new one, paint or paving work); it goes out with the /hoa/special-assessments/ list from the owner's Gmail. This fixer did not send it. Storm deductibles: a link only (see reader). |
| Nit: top heavy | The tiles no longer repeat the short answer or the sub line: three plain tiles, not four. |
| Nit: gauge fills 60 percent of its card | Centered, up to 500 px wide. |
| Nit: three offers with one label | Hero "Have us read the financials"; mid-page "Send us the building's name"; closing "Ask about a building". |
| Nit: "Flat roofs ... like these" with orange roofs in frame | "Roofs and stacked balconies like these ..." |
| Nit: overflow at 320 and 1024 | Shared (NEEDS 10). |
| Nit: exiftool | Still missing here (NEEDS 7). |
| Nit: stale shots | New shots in `wf2/hoa-reserves/r1/` and `r1-shots/`. |
| Strengths to keep | Kept: the labelled example and the $380,000 card, the calculator, "A building can pass and still be weak", the fee finding, "we get the papers through the seller", the "Can I buy a condo with low reserves?" answer. |

## Findings I did not take, and why

- **Critic: keep a three-item list of the Florida and Virginia detail.** The owner's eye asked for the table and one sentence; the owner's rule wins. One sentence kept (Florida's no-voting-it-away), the rest cut.
- **Reader: how common is a missing study here.** No source counts it. The page says a building can have none and what we do then; it gives no share.
