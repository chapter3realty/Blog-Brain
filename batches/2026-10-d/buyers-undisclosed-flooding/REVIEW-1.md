# Review round 1: /buyers/undisclosed-flooding/

Batch 2026-10-d, Lane U. The fixer's record of what changed for each finding. All edits are in `specs/undisclosed-flooding.js` and this page's `photos.json`. Nothing was edited in the built page by hand. The spec before the fix is saved at `wf2/buyers-undisclosed-flooding/spec-before-fix1.js` in the scratch folder.

## Gates after the fix

- `mkpage`: built, hero sub 29 words.
- `score.js` (SCORE_TODAY=2026-11-01): 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,836 words. Before: P6 Zone X and "elevation certificate", P9 "the seller says", P10 "house must carry", S7 3 linked pages, A7 one FAQ answer opened with "It". All fixed.
- `claims-scan`: 0 hits on this page. `facts-check`: 0 on this page. `house-claims`: 0. `struck-check` with this page's struck list: no struck wording.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. `scrollWidth` equals the window at 320, 390 and 1440.
- `build.js check`: OK. `build.js audit`: only the two date lines (schema and visible "Updated" against the sitemap), which the lead's `build.js dates` run sets.
- Shots looked at: hero at 320 and 390, the chart, the form-years figure, the map, the tiles and the photo at 390 (`wf2/buyers-undisclosed-flooding/fix1/`).

## Critic

| Finding | What changed |
|---|---|
| Blocking: search box runs past 320 px | Scoped CSS in the spec, the same rule /sell/home-value/ uses: under 380 px the box and its field take `min-width:0;max-width:100%`, and "Find houses" wraps to its own full-width line. 320 px now has no sideways scroll. Shared fix asked for in NEEDS.md 4. |
| Blocking: header phone past 1024 px | Scoped CSS: `.header-ctas .hdr-phone` hidden from 1000 to 1100 px. Critic 0 at 1024. NEEDS.md 4. |
| Blocking: hero tile drops the group ("resales last sold") | Tile now "About 3 in 4 / resale houses for sale changed hands after Florence". "last sold" is gone everywhere. The figure caption carries the full group ("that we could match to a county parcel"). |
| Blocking: the seller's-years point three times in two screens; a sentence twice | The point is now in the dek and the H2 answer, and the table and figure show it. Cut from the short answer, from "Four of them ask only about the seller's own years" and from the story's closing line. The short answer's second paragraph now gives a new fact (the due diligence period). The figure caption is now the data note only. |
| Blocking: jargon | "take-up rate" is now "about one federal flood policy for every seven residential buildings" (row 23 group kept). "rated" is now "insured as outside FEMA's high-risk zone", glossed once ("the policy was priced for a lower-risk zone"); the chart caption says "the flood zone each policy was priced in". "prior-claims charge" cut. The AE sentence now reads "Outside city limits, in the part of FEMA's high-risk zone that the map labels AE, the lowest floor must be at least three feet above the flood height the map gives". I kept the label AE because "the part with a set flood height" would also take in the VE zone, where the rule differs (VERIFY 13). "unincorporated" is now "outside city limits" (3 places). "Brass marks" is now "Orange marks". |
| Blocking: service claims | "We get the flood insurance quote" is now "We help you get a flood insurance quote before you offer." The chips are now "Public maps: we pull them" (maps are public, row 14), "We ask the county" (step 3) and "We ask the county or city" (step 4). The short answer no longer calls permits public: "We pull the county's flood maps and ask its staff about past floods and repair permits." |
| Nit: "3 in 4" breaks at 320 | Non-breaking spaces in the tile label and the figure title. Checked at 320. |
| Nit: 45% tile drops "paid" and "rated" | "45% / of paid Florence claims were insured outside FEMA's zone". |
| Nit: short answer drops the group | The short answer no longer states the 3 in 4 figure. |
| Nit: "hold clues we read" | "We look for clues at the house and on its street at the showing." |
| Nit: "Public: we ask" | "We ask the county". |
| Nit: "The map further down" links to the H2 | The map figure has `id="florence-map"`; the link reads "Our map of the two". |
| Nit: credit cut off at 390; the credits' second line and "1x1, 4x3 and 16x9 crops" | `photos.json` now has `display_credit: "Photo: SC National Guard"` (fits at 390, checked) and `changes: "Chapter3 Realty cropped the left edge to hide a mailbox number"`. `photos.js check` passes. The line "Chapter3 Realty resized these photos and cropped some of them." comes from `tools/photos.js` creditsList for every page (the license note of changes), so I left it. No exiftool here, so the file's embedded metadata still has the old "changes" text; the lead can run `photos.js embed` where exiftool exists. |
| Nit: FAQ repeats body sentences | The lender notice is now only in the FAQ (cut from the body). The CLUE and FEMA-by-address answers are reworded and shorter. The surcharge sentence in the FAQ no longer matches the body. |
| Nit: entities not named in full | Step 1 now opens "The Federal Emergency Management Agency (FEMA) runs federal flood insurance." CLUE and the National Flood Insurance Program are not spelled out: the owner's rule is no industry terms, and the full names add three more. |
| Nit: schema headline differs from the H1 | `ogTitle` is now the H1: "Did this Myrtle Beach house flood before? How to find its flood history". |
| Nit: three equal-height cards at 1440 | Not changed. Shorter text in the third card closed part of the gap. Equal heights are the grid's default on every glass page. |
| Nit: feed fallback in the preview | NEEDS.md 5. |

## Reader

| Finding | What changed |
|---|---|
| What if the seller will not send the records | New H3 in the checks section, "What if the seller will not send the records?": we tell you before you offer, and you decide with what the maps, the county and the house showed: offer, offer less, or walk away. |
| A flood found after the offer is signed | New H3 "Can I back out if I find a flood after I sign?", and one line in the short answer. On the South Carolina REALTORS contract the buyer and seller set a due diligence period. Inside it the buyer can end the contract for any reason with a written notice and the termination fee, and after it that right ends. New fact row 37, VERIFIED-BY-FIXER (a Charleston law firm and an SC agent's page; the form itself is for members only). The lead should re-check it. |
| What "Send us the address" costs | Not answered on the page: nothing in the rules or the ledger says it is free or what it commits the reader to. Asked the owner in PROPOSED.md 4. |
| 45% and "half" for the same fact | "Half (433 of 863) on today's map" is cut. The page uses 45 percent, insured as outside the zone, everywhere. |
| Florence is never named as a hurricane or dated | The dek says "Hurricane Florence in 2018". The chart shows each storm's year. The figure chip reads "Florence, 2018". Matthew is "Hurricane Matthew in 2016". Each year is read from the claims data (new row 38, VERIFIED-BY-FIXER). |
| 1,000 against 2,000 houses; "edge strip" | The tiles now read: "About 400 houses stand well inside the orange land", "More than 2,000 houses stand on land Florence's water covered. The map shows where water covered the ground, not which houses took water inside", and "Nearly 90 homes for sale". "edge strips", 700 and the square miles are cut. |
| What to look for inside the house | Not added. No primary source could be opened (facts.md, Not verified 2), and the owner has not said what our agents look for (PROPOSED.md 3 and 5). Writing it from contractor blogs would break the ledger rule. |
| Off-topic listing box; investor footer | The box is the site's listing edge (NEEDS.md 5). The footer is shared chrome. |
| Words not known | resales (glossed in the figure caption: "not new builds"), AE (glossed), base flood height (cut), Zone X (cut from the FAQ question), unincorporated (cut), regulated lender (now "a bank or other federally regulated lender", FAQ only), take-up rate (cut), prior-claims charge (cut), severe repetitive loss (kept as FEMA's name and defined in the FAQ), rated in (cut), material adverse fact (now "every serious problem the agent knows of"). "No Representation" now opens "It is an answer on the form." CLUE is kept, glossed as "the insurance industry's claims report on a house". |
| Places not on the map | Not changed. The map labels towns at a scale where neighborhoods would not read at 390. The sentence is short and its source is the NWS. |
| Too many numbers in one sentence | 8,815 and 2,047 cut (now "nearly 1 in 4"); 1,094 and 203 now "about 1,100" and "nearly 1 in 5"; 87, 6,450 and 21 now "nearly 90"; the grant counts 63, 86 and 8 cut ("FEMA grants have also listed flood-prone buildings here to buy after Hurricanes Floyd and Matthew"); "21.16 feet" now "a record crest, more than three feet above the old record". |
| Six dates in the body | Now "since 1978" once, "mid-2024" once (row 11 needs it: no newer count), and storm years. "April 2023" and "October 2015" in prose are cut. |
| The Example stops before the ending | Added a closing sentence: "The buyer decides on the offer knowing what the form left out." The story kit refuses a condition ("If the seller sends..."), so the possible outcomes are in the H3 above the form section instead. |
| Condo page line | Cut. |
| The disaster-aid sentence | The repayment clause is cut. Now: "A seller who took federal flood aid that required flood insurance must tell you in writing, in the sale papers, that you must keep flood insurance on the house." |
| "Talk to an attorney" with no help | Added "We work with several attorneys here and can introduce you." (RULES BIZ-7 wording; no attorney named). |
| Credit cut off; credits' second line | See the critic nit above. |

## Owner's eye

| Finding | What changed |
|---|---|
| HIGH: Florence assumed known | See the reader's finding: "Hurricane Florence in 2018" in the dek; a year beside every storm. |
| HIGH: repetition | Seller's-years point: see the critic finding. "About 3 in 4" now appears twice (hero tile and the figure title), down from 4. "That notice is about the zone" now appears once (FAQ). |
| HIGH: too many exact numbers | See the reader's finding. P2 in score.js: 1.7 numbers per 100 words. |
| MEDIUM: 45% and half | Half is cut. |
| MEDIUM: industry terms | See the critic finding. |
| MEDIUM: details that flex | Cut: "Western Carolina University", "12 certified floodplain managers", "Thin strips along the edges", "counting losses from April 2023 on", "counting since 1978" in the FAQ, and the grant counts. |
| MEDIUM: legal text the buyer will not use | Cut: "The law does not change either side's rights over problems the seller did not know of", the whole agent-not-liable paragraph, and the repayment clause. Kept what the buyer can act on: what a lying seller owes, what your own agent must tell you (plain words), who handles each complaint, the time limit, and the attorney introduction. |
| MEDIUM: the next question (can I back out) | New H3 with row 37. See the reader's finding. |
| MEDIUM: sentences about other pages | The condo-in-litigation and home-value sentences are cut. The hurricane, coastal-insurance, waterfront, new-construction and common-mistakes links are on words inside working sentences. |
| MEDIUM: the homes feed does not back the page | NEEDS.md 5. The page cannot set the feed; `idx-lib/feeds.js` is shared. |
| LOW-MEDIUM: hedges | "In some cases a seller's flood policy can be transferred" is cut (with the waterfront pointer sentence). "No, a clean claim history proves little on its own" is now "No. A house with no flood insurance leaves no flood claim." "can be a sound buy when" is now "Buy a house that flooded only when three things are true." |
| Nit: step 5 with no "we" | Step 5 now says "We use the county's own flood checks. We look at whether water flows away..." |
| Nit: FAQ repeats step 1 and the surcharge | See the critic nit. |
| Nit: Florence chip has no year | "Florence, 2018". |
| Nit: byline date | For the lead's `build.js dates` run. |
| Nit: attorney with no offer from us | Added the BIZ-7 line. |

## Wording I derived from a CORRECTED row, for the lead to check

- Row 10: "The worst of them, which FEMA calls severe repetitive loss, pay at least 15 percent more for federal flood insurance." The approved wording is "a 15 percent surcharge, or the prior-claims charge if that is higher", so the charge is at least the 15 percent surcharge. The FAQ keeps the full test, including "at least two of the payments must be within 10 years of each other".
- Row 10: "its claim history can raise the cost of its flood insurance" (the approved wording: two or more claims since April 2023 raise the premium).
- Row 25: "about 1,100" for 1,094; "nearly 1 in 5" as approved.
- Row 33: "Nearly 90" for 87 (the spec checks it is within 3).
- Row 34: "Most resale houses for sale here changed hands after Hurricane Florence" in the dek, from "About 3 in 4 ... that we could match to a county parcel"; the figure caption carries the full group.
- Row 32: "About 400 houses stand well inside the orange land" uses only the first figure of the approved pair (400 and 700).
