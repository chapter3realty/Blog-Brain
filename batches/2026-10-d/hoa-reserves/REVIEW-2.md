# Review round 2: /hoa/reserves/

Fixer, 2026-11-01. Three reviewers (critic 7, reader 7.5, owner's eye 8). Every change is in `specs/reserves.js`. The page was rebuilt with `node tools/mkpage.js specs/reserves.js`. The round 1 spec is saved at `wf2/hoa-reserves/reserves.r1.js`. No new fact rows. Row 33 is narrowed and row 36 is no longer used (`facts.md`).

## Gates after the fix

- score: 99 (SEO 100, AEO 94, Human 100, Trust 100). P2 is now 2.9 numbers per 100 words (was 3.6). One item is still open: A10 names only South Carolina places.
- claims-scan 0. house-claims 0. facts-check 0 on this page. struck-check: no struck wording against this page's list, the special-assessments list or the flooding list. photos.js check passes. No SWEEP sentences.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning.
- build.js check: OK. build.js audit: the two date mismatches that `node build.js dates` fixes (the lead runs it), and two warnings: 3 dates in the body, and no attributed quote, which we may not write. The mid-page CTA warning that came up during this round is gone: the "Send us the building's name" box now sits after the checklist.
- I tested the calculator in Playwright. With the prefill, it reads 10.4 percent and "Passes 10 percent. Short of Freddie Mac's 15 percent by about $28 per unit a month in dues." With $70,000 it reads 12.2 percent and $18. With $90,000 it reads 15.6 percent, "Passes both". Cash 0 reads 0 percent, "Weak.". An empty "should hold" asks for that number.
- Shots: `wf2/hoa-reserves/r2/` (element shots at 320, 390, 1024 and 1440) and `wf2/hoa-reserves/r2-shots/` (critic, five widths). I looked at the hero, glance, feed, contents box, lender section, calculator, state table, roof chart and the papers strip.

## Critic

| Finding | What changed |
|---|---|
| BLOCK 320: "Find houses" cut off, body 364 px | Page-scoped CSS, the same as on /buyers/undisclosed-flooding/: under 380 px the search box wraps and the button sits under it. The shared fix is still NEEDS 10 and 13. |
| BLOCK 1024: header phone ends at 1029 px | Page-scoped CSS, the same as on the flooding page: the header phone is hidden from 1000 to 1100 px. Checked in the 1024 shot. |
| BLOCK truth: "engineer inspection" broke row 20's limit | The whole Florida salt-water sentence is cut (the owner's eye and the reader asked for that too). Row 36 is marked NOT USED. Fla. Stat. 553.899 is off the Sources line. |
| BLOCK truth: row 33 fee clause, no independent check | The fee clause is cut. "For any reason", "a length you and the seller set" and "that right ends" are cut too. The FAQ "Can I back out" is cut. Card 2 now says only what the flooding page says from Rosen Hagood: "The standard South Carolina sales contract has a due diligence period. In it, you can end the contract with a written notice to the seller." The link is on "can end the contract", and "Rosen Hagood: SC due diligence contract" is on the Sources line. Card 3 is now "Inside that period: Read the reserve study, the budget, the balance sheet and the minutes." Row 33 stays VERIFIED-BY-FIXER: I could not open Rosen Hagood (its server blocks this session), and this stage has no independent verifier. **Lead: have row 33 checked.** |
| Glance tiles: label smaller than the figure line, 1.25 line height, third tile five lines at 320 | Two tiles now (see the owner's eye). Page CSS sets the figure larger than its line, with a 1.4 line height. At 320 each tile wraps to four short lines. 0 warnings. |
| Short answer "Only if ... the only measure" | "Only if it has saved enough. To tell, compare the cash in its reserve fund with what its reserve study says the fund should hold by now. That share is called percent funded. The higher it is, the lower the chance the owners get a special assessment." The "Only if" opening keeps A3 passing. |
| "Most lenders check" | Cut from the short answer. The lender section says "For most conventional condo loans". |
| "Owners there faced special assessments" | "It says owners in those buildings can face special assessments or higher dues." |
| "has replaced both at least once, or is past due" | "A 30-year-old tower has passed one planning life of each." |
| Contents box is one column at 1440 | Two columns from 700 px (page CSS). Shot checked. |
| SEO: H2s without a place; HUD and CAI not in full | The H2 is now "How much should a Myrtle Beach condo association have in reserves?". HUD is written out in full at its first use (the parts drawing's caption). The source is now named "Community Associations Institute reserve study standards". |
| Tool gap: lazy feed cards in full-page shots | Not a page change. |

## Reader

| Finding | What changed |
|---|---|
| 10 or 15 percent: which applies to me? | New H3 "10 percent or 15 percent?" in the lender section: "Freddie Mac raises its line to 15 percent for loan applications received on or after January 4, 2027. It says it made the change with its regulator and in alignment with Fannie Mae. Fannie Mae's own guide still says 10 percent. From that date, a building that puts 12 percent into reserves fails Freddie Mac's test and passes Fannie Mae's guide as it reads now. Which one applies depends on which company buys your loan. Your loan officer can tell you before you apply." This follows row 16's limit: no claim that Fannie requires 15. The calculator now says "Short of Freddie Mac's 15 percent", not "To reach 15 percent". |
| Florida sentence confused me | Cut. |
| The offer: what it costs, whether I sign first, how you get the papers, how long it takes | Partly done. How we get the papers is answered: "A buyer is not yet an owner, so we get the papers through the seller." The papers strip shows when, and a new FAQ gives the HOA members' five-day notice rule (row 7). **Not answered:** the cost, whether a buyer agreement comes first, and how long it takes. No ledger row or story covers them, and a writer may not make them up. The owner question is in PROPOSED.md (round 1). Once he answers, one sentence goes under each of the three offers. |

## Owner's eye

| Finding | What changed |
|---|---|
| The FAQ restates the body | It now has four answers, each of which adds a point the body does not make. (1) "Does South Carolina require a reserve study?": a board can still choose to get one, and a lender can take a current study in place of its budget test. The "10 percent" is gone from this answer. (2) "Who pays a special assessment voted before closing?": the contract decides, and the written statement caps the buyer's share. Both sentences were cut from the body, so the fact lives only here. (3) New: "Can I see an HOA's reserve records before I buy?", with the HOA member rule (row 7, corrected wording). The body gives only the condo rule. (4) New: "Does a newer condo building need strong reserves?": a 2015 building has not reached HUD's life for its elevator machinery or flat roof, so less should be saved by now. The spec throws once a 2015 building reaches 15 years (row 28). This also ties in the feed title (nit). Cut: no study, Fannie Mae's requirement, backing out, and buying with low reserves. The scorer needs 4 to 8 FAQ entries, so four is the floor. |
| Hung up on the 10 percent line | The figure is now only in the lender section ("How a building passes", the H3, the example) and the calculator. Cut from: the hero tile, the short answer, the no-study section, checklist item 2 (now "The share of the dues it puts into reserves."), the offer card (now "whether its budget passes a lender's test") and every FAQ. The meta description keeps "10 and 15 percent" for search. |
| A Florida law argues a South Carolina point | Cut (see the critic). |
| The top assumes the reader knows; the bands are said four times | The sub now explains the idea in plain words: "A Myrtle Beach condo's roof and elevators wear out on a schedule. If its reserves cover the worn part, it can pay. If not, the owners do." The short answer says how a buyer tells (see the critic). The numbered bands now appear only on the gauge. The paragraph after it says "In the weak band, repairs are often put off. In the strong band...", with no numbers. The calculator says "Weak.", "Fair." or "Strong." The audit asked that the sub carry a keyword and a concrete anchor, so it now has "reserves" and "Myrtle Beach". |
| Hero tile "Big repairs" says nothing | Cut, along with the 10 percent tile. There are two tiles now: "56% of condos / for sale are in buildings 30+ years old" and "20 years / the federal planning life of elevator machinery" (row 28). |
| Too many exact numbers | The roof bars now read $230,000, $250,000 and $320,000, "rounded to the nearest $10,000". I first tried "about $320,000", but the label spilled out of its chart at every width. The fee sentence now reads "In buildings 30 years or older, the middle listed fee is about $700 a month, close to the $640 for all condos for sale." The figure is computed from the two bands, and the spec throws if either band moves more than $25 from it. The "$28" sentence before the calculator is cut, since the calculator shows it. P2 went from 3.6 to 2.9 numbers per 100 words. |
| State table too technical; the Florida voting sentence | The table has two columns, "Reserve study required" and "How often". The structural inspection column, the $25,000 floor and the occupancy rule are cut. The cells are short: South Carolina "No / Never required", Maryland "Yes / At least every 5 years". The Florida voting sentence is cut. |
| Five "our page on X" sentences; the 40-word sentence | All five are folded into sentences that say something. The deductible link is now on "master policy" in the order strip. The HOA laws link is on "South Carolina law" in the first answer. Non-warrantable and selling are in the "When it fails" card ("though some other loans still work", "When you sell a condo there"). Condo buildings is on "condo buildings" in the fee sentence. The special-assessments page is already linked from the three accounts. The relocation guides moved onto the state names in the other-states lead. The 40-word sentence is two sentences now. I tried "master deed", the verifier's word, but the scorer's plain-words rule rejects it, so the page keeps "the condo's founding papers, the recorded documents that created it". |
| The one photo does not show the subject | Not fixed, and recorded in NEEDS 14. Wikimedia Commons still answers "too many requests". The Openverse API timed out. The spalling photo the verifier approved could not be downloaded. The shot list in `shot-list.md` is ready. The photo partner's address is with the owner, not in this repo, so I did not send it. The lead or the owner sends it with the /hoa/special-assessments/ list. With the salt sentence cut, the aerial now sits in the section about the age of buildings here, which is what it shows. The caption is now "Their roofs, rooftop boxes and stacked balconies are the kind of parts a reserve fund saves for." The drawing of the example building is still the picture of the subject. |

### Owner's eye nits

- The feed title is now tied in by the newer-building FAQ. A feed of older buildings is still NEEDS 12.
- The offer cost and timing wait on the owner (PROPOSED.md).
- "Fresher studies also come with fewer surprises." is cut. The sentence now says the clients "were told to charge a new special assessment about half as often". Row 6's limit holds: these were the firm's recommendations to its own clients.
- Association Reserves is named once, in the gauge caption. After that the page says "the firm's own clients", "The same reserve-study firm's example" and "the same reserve-study firm's clients".
- The $28 now sits only in the calculator, which says "per unit a month in dues". It is clearly a dues figure.
- The shared chrome at 320 and 1024 is handled for this page (see the critic).
- Strengths kept: the building drawing, the $380,000 card, the calculator, "A building can pass and still be weak", the age chart, "we get the papers through the seller", and the papers strip (card 3 reworded).

## Findings I did not take, and why

- **Critic: put row 33 in front of an independent verifier.** Not possible in this stage. My brief gives no helper agent, and Rosen Hagood's server refuses this session. I took the critic's fallback instead: the fee clause is cut, and the remaining sentence matches the flooding page word for word.
- **Owner's eye: send the shot list.** The partner's address is not in this repo, so the lead or the owner sends it from the owner's Gmail.
