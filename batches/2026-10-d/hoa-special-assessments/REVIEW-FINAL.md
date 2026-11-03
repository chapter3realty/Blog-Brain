# Final fix: /hoa/special-assessments/ (batch 2026-10-d)

Spec: `specs/special-assessments.js` (website working copy). The spec before this round is in the scratch folder (`sa-spec-before-final.js`). Every change is in the spec or this page's data. Nothing in the built page was edited by hand.

## The lead's open items

| Item | What I changed |
|---|---|
| "No cap" said five times: say it once | It is now said once, in the short answer ("South Carolina law puts no cap on one."). The H3 "Is there a limit on a special assessment?" and its "No." are cut. The votes answer now says where a limit can be: "Any limit on the amount is in those bylaws and the founding papers." The H3 over the two cards asks something new: "Does South Carolina require a reserve study or regular structural inspections?" "No. The state's condo and HOA laws require neither." (row 8). Round 3 had already cut the hero chip, the "No cap" card and the FAQ. |
| Talks about data we do not have: cut it | "The one local case we found in a court record was ..." is now "At one Pawleys Island condo, the board proposed about $65,000 to $88,000 a unit." (row 3). Round 3 had already cut "We found no public record of a typical amount here" and "The court's opinion does not say what each owner paid in the end." No sentence on the page now says what we did not find. |
| Depreciation line must match IRS Pub. 527 | Was: "One for an improvement is not deductible, but you may be able to recover your share through depreciation." Now: "On a condo you rent out, dues or assessments paid for maintenance of the parts every owner shares are deductible rental expenses. A special assessment for an improvement is not deductible. You may be able to recover your share of the improvement's cost by taking depreciation." Pub. 527 (2025), "Condominiums" (raw/irs-p527.txt, row 28): "you can deduct any dues or assessments paid for maintenance of the common elements. You can't deduct special assessments you pay to a condominium management corporation for improvements. However, you may be able to recover your share of the cost of any improvement by taking depreciation." |
| Who pays when the vote is before closing and the bill after | The table row was the only place it was said. The body now says it in full, after the table: "When owners vote for one before closing and the bill comes after, the association bills you, as the owner then, unless the offer says the seller pays it. The offer can say the same for installments due after closing." Rows 34 (27-31-190 with 27-31-220) and 18's note (the contract decides between buyer and seller). This replaces the installments-only sentence. |
| Loss assessment coverage: primary source or cut | **Cut.** I searched again for a South Carolina Department of Insurance page or an official copy of the condo owner's policy form. I found insurer pages, a property manager's article and other states' regulators (Maryland), and no South Carolina primary source. The sentence "What your own condo policy can pay toward your share is on our master insurance page." is removed. The page no longer says or implies that an owner's policy pays any share. The site nav still links to /hoa/master-insurance-ho6/. |
| "%s" template residue in the analysis box | The rebuilt page has no "%s" anywhere (grep: 0; score.js H9 clean). The live page's "%s" box was cut in round 1. |

## Audit sentences fixed this round

- "More of South Carolina's HOA complaints ... and so are about 2 in 5 ..." (32 words, and "so" mid-sentence) split in two: "... than in any other county. Associations there are also the subject of about 2 in 5 of the complaints over fees or special assessments." (rows 30, 31)
- Closing band (31 words): "One of our agents reads its minutes, its list of special assessments and its reserve study, if it has one. Then we tell you what they show, before you make an offer."
- Photo changes line in `photos.json` (45 words) split into two sentences under 28 words. Same facts.

## Photo metadata

exiftool is now in the container. `photos.js embed` wrote the record into all six files. `photos.js check` with the image root: all records pass, 0 file failures. NEEDS.md 12 is closed.

## Gates on the final build

- score.js (SCORE_TODAY=2026-11-03): 100/100, SEO 100, AEO 100, Human 100, Trust 100. H9 (residue) clean.
- claims-scan: 0 findings.
- facts-check: nothing on this page (the 8 findings site-wide are on other pages).
- house-claims: 0.
- struck-check (`hoa-special-assessments-struck.json`): no struck wording.
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking, 0 warning.
- build.js audit, this page: two date failures (schema and visible "Updated" date against the sitemap), which `build.js dates` fixes. Two warnings, the same as rounds 1 to 3: no boxed offer mid-page (cut on the owner's finding) and no named quote (we write none).
- My own sentence check: no sentence over 28 words, none opening "So" or "Here is", no pseudo-cleft.

## Still open, for the owner

- Whether the building check is free and whether it commits the buyer (reader, rounds 1 to 3). No row, story or rule answers it, so the page does not say.
