# Review round 2: /buyers/undisclosed-flooding/

Batch 2026-10-d, Lane U. The fixer's record of what changed for each finding. All edits are in `specs/undisclosed-flooding.js`. Nothing was edited in the built page by hand. The spec before this round is saved at `wf2/buyers-undisclosed-flooding/spec-before-fix2.js` in the scratch folder. New shots: `wf2/buyers-undisclosed-flooding/fix2/el/` (hero, steps, years figure, chart, tiles, cards, story and bottom band at 390 and 1440) and `fix2/shots/` (critic, five widths).

## Gates after the fix

- `mkpage`: built, hero sub 28 words.
- `score.js` (SCORE_TODAY=2026-11-01): 100/100 (SEO, AEO, Human and Trust all 100). P2 1.3 numbers per 100 words. H14 is "--": the contents list is off (owner nit).
- `claims-scan`: 0 findings. `facts-check`: 0 on this page. `house-claims`: 0. `repeat-check --strict`: passes (one identical line, "It is free, with no obligation.", in the two offers only). `struck-check`: no struck wording.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. `scrollWidth` equals the window at 390 and 1440.
- `build.js check`: OK. `build.js audit`: only the two date lines, which the lead's `build.js dates` run sets. A new audit line ("hero sub says we/our/us") came up on the first draft and is fixed.
- Text counts in `<main>`: "before you offer" once in the body (short answer) plus the bottom band H2; "before you make an offer" 0; "for any reason" 0; "termination fee" 0; Devin only in the byline; no Paul; no search-box sentence, testimonial or "Talk to Devin".

## Critic

| Finding | What changed |
|---|---|
| Blocking: row 37 is VERIFIED-BY-FIXER and its sources conflict | I could not get an independent check: this helper has no agent tool, and no public SCR source or copy of Form 310 was found (two searches, 2026-11-01). I took the critic's fallback. Cut: "for any reason", "the termination fee the contract names", "The buyer and seller set its length", "After it ends, that right ends", and "only inside" in the short answer. Kept, both backed by Rosen Hagood, which I re-opened: the short answer "the South Carolina REALTORS sales contract gives you a due diligence period to end it", and the H3 "In that period the buyer can end the contract with a written notice of termination to the seller", with the link on "can end the contract". Added "We tell you what ending it would cost under the contract you sign, before you sign it." facts.md row 37 records all of this and stays VERIFIED-BY-FIXER for the lead. |
| Blocking: chart bars scaled to 51 on a 0 to 100 track | Bars are now `width: pct%`, so 51% fills half the track. Caption says "out of 100 percent". Checked at 390 and 1440. |
| Warning: "Only the owner can get them" against the FAQ | Step 1 tag is now "From the seller". Bottom band: "the two claim reports a buyer cannot get". The FAQ keeps "Only the owner, an insurer or a lender". |
| "is the same" needs a second read | Cut. Step 1 now says FEMA will not give a buyer the claims, then "We ask the seller for those, and for the insurance industry's claims report on the house, called CLUE." Who can order CLUE and how far back it goes is said once, in the FAQ. |
| Three places against five checks | "Three places" is cut. The dek and the H2 both say five. |
| Dek does not give the how-to | Dek: "Five checks show it: FEMA's claim records, two flood maps, the county's records, repair permits and the house itself. You get all five for any house you send." |
| Empty listing strip | Shared feed, NEEDS.md 5. Not changed. |
| "offer" alone on a line | Hero offer title is now "Have us check a house's flood history". Bottom band H2 has a non-breaking space in "you offer" (checked at 390 and 1440). |
| Tile breaks "More than / 2,000" at 768 | Non-breaking space in "More than 2,000". |
| Ragged right edges at 1440 | The number tiles now cap at 760 px, the same as the text figures. The three cards and the two compare tables keep their wider shared grids. |
| Row 10 wording | Unchanged: "at least 15 percent more" stays for the lead to confirm (REVIEW-1). |
| "these photos" in the credit | Shared `photos.js` text. Not changed. |

## Reader

| Finding | What changed |
|---|---|
| Blocking: what sending an address costs or commits me to | Both address offers now say "It is free, with no obligation." This is the site's own lead form text on buyer pages ("Free, no obligation. We reach out the same day, evenings included."). Whether we do it for a buyer who already has an agent is still a question for the owner (PROPOSED.md 6). |
| Three or five | Fixed (see the critic). |
| Off-topic listing box | Shared feed, NEEDS.md 5. |
| The timeline figure is hard to read | The title now states the point: "For about 3 in 4 resale houses for sale here, Florence came before the seller bought." The left box says "The form does not ask." and its chip says "Florence, 2018, is here". The right box says "The form asks about floods, claims, repairs and federal flood aid." Three markers sit under the boxes: "House built", "Seller buys" (at the split) and "Your offer". |
| Which checks can I do myself | Not changed. The owner's rule (2026-10-14) is that pages say "we check", never "you check". The page says the maps are public (tag) and that only the owner can get the claim records (FAQ). |
| Chart caption is report-speak | Now: "Each bar is the share of that storm's paid flood claims, out of 100 percent, on buildings insured as outside FEMA's high-risk zone. Storms are grouped by their main cause of flooding in FEMA's records." |
| AE and "flood height the map gives" | The AE sentence is cut. Card 2 now reads: the house "must be raised above the flood height on FEMA's map" (row 24 quote: "must be elevated above the base flood elevation"). |
| Too many numbers (severe repetitive loss, 1 in 4 since 1978) | The body keeps one figure for repeat-flood houses ("nearly 1 in 5 ... are outside it"). The FAQ keeps the full FEMA test, because the reader who searches that term wants the test, and dropping its conditions would make it untrue. "Since 1978, nearly 1 in 4" stays once, in the H2 answer. |
| Question 20 to 23 | The question cards and their numbers are cut. |
| "well inside" | Now "stand on the orange land, away from its thin edges". |
| Map does not label neighborhoods | Not changed. Names would not read at 390 at county scale. |
| Example has no ending | The example now has one (see the owner). |
| How long is due diligence, what is the fee | Not added. No verified source (row 37). The page says we tell you the cost under your contract. |
| Byline date, investor footer | The lead's `build.js dates` run; the footer is shared chrome. |

## Owner's eye

| Finding | What changed |
|---|---|
| Blocking: "before you offer" said 13 times | Now once in the short answer ("We run these checks before you offer.") and once in the bottom band H2. Cut from the steps, step 4's miss line, the "seller will not send" H3 ("we tell you right away"), the due diligence H3 ("That is why we run these checks first."), the map offer, the cards intro, card 3 ("quote on the house"), the CLUE FAQ and the hero offer title. |
| Blocking: the seller's-years point fills 2.5 screens | The six question cards, "No question asks directly ..." and the form's question numbers are cut. One sentence replaces them: "The form asks about floods, flood insurance claims, flood repairs and federal flood aid, each only for the seller's years. One question asks about any flood risk the seller knows of." The figure stays. The dek no longer says it, and the example moved to the end. |
| Blocking: "Do these checks before you offer." | Now "We run these checks before you offer." The short answer is all "we". |
| Blocking: three against five | Fixed (see the critic). |
| Blocking: technical and legal detail | Cut: the AE sentence; "about 1,100" repeat-loss properties; the buyout's goal of 61, 52 homes and "mid-2024" (now "has bought dozens of homes in the Socastee area that flooded again and again"); the FEMA grants sentence; "A missing form does not cancel the sale or delay the closing"; the foreclosure-lender clause (the no-form list now ends "In those sales, the five checks matter more."). The severe repetitive loss FAQ is shorter but keeps FEMA's test (see the reader). |
| Blocking: facts said twice | $500 is now only in step 4 (card 1 says "as in check 4"). The outside-the-zone share: the summary line under the chart has no numbers now, and the FAQ "If a house is outside the flood zone ..." is cut (the H2 asks the same question). 45% is now in the hero tile and the chart; 1 in 4 once. The third hero tile ("Only the owner can get FEMA's claims") is cut; the hero has two tiles. The step 1 CLUE detail is only in the FAQ. "Only the owner" is now in the short answer and the FAQ. |
| Blocking: the example has no tension or ending and sits mid-page | Moved to the end of the last section, under a new H3 "How a flood check can change an offer". New ending: the seller will not send the claim records, and "The buyer walks away and offers on a house a mile off, on land the water did not cover." Meaning: "The form never asked about that flood. The county's map showed it." Passes the story kit and the simple story test (6 sentences). |
| Nit: first hero tile | Now "About 3 in 4 / resale houses for sale: the seller's form does not ask about Florence" (row 34). |
| Nit: "own flood checks" | Now "the county's questions about water around a house" (row 17). |
| Nit: "real" and "should" | Now "A flood repair done legally leaves a permit record." |
| Nit: personification | "During Hurricane Florence in 2018, the Waccamaw River at Conway rose to a record crest". "In storm surge, almost every paid claim here was inside FEMA's high-risk zone. In rain and river floods, far more were outside it." |
| Nit: attorney "now" | "If you already bought a house that flooded and the seller hid it, talk to a South Carolina real estate attorney." |
| Nit: sentence about another page | Cut. The link is now on "federal flood policy" in "Horry County has about one federal flood policy for every seven residential buildings, so most houses here have no federal flood policy to claim on." |
| Nit: signs inside a house | Not added. No verified source; PROPOSED.md 5 asks the owner. |
| Nit: homes feed | NEEDS.md 5. |
| Nit: 2.5 screens to the first H2 | The contents list is off (`toc: false`) and the hero has two tiles, not three. |

## Wording for the lead to check

- Row 37 (VERIFIED-BY-FIXER): "gives you a due diligence period to end it" and "In that period the buyer can end the contract with a written notice of termination to the seller." See facts.md row 37.
- Row 34: hero tile "resale houses for sale: the seller's form does not ask about Florence" (row text: "For those houses, the seller's form never asks about Florence").
- Row 11: "has bought dozens of homes in the Socastee area" for 52 closed.
- Row 25: "nearly 1 in 5 Horry County properties on FEMA's list of repeat flood claims are outside it".
- Row 24: "must be raised above the flood height on FEMA's map".
- "It is free, with no obligation." from the site's lead form text (PROPOSED.md 6).
