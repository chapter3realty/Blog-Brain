# Review round 1: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Fixer, 2026-11-01. Three reviewers (critic 5, reader 7, owner 7, none passed). Every change is in `specs/hoa-vs-poa.js` (built with `node tools/mkpage.js specs/hoa-vs-poa.js`), the photo files and record in this page's image and data folders, and this batch folder. No built page was edited by hand.

## Gates after the fix

- score.js (SCORE_TODAY=2026-11-01): 99/100. SEO 96, AEO 100, Human 100, Trust 100. 1,822 words. The one gap is S8 (one page links here; NEEDS 7, other pages are not ours to edit).
- claims-scan: 0 findings. facts-check: 0 hits on this page. house-claims: 0. struck-check: no struck wording. repeat-check: strict passes (0 identical, 0 near, 0 repeated shapes).
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking from this page. Three blocking findings stay, and all three are shared: the feed's "Find houses" button cut off at 320, the page 364 px wide at 320 (the feed), and 1029 px wide at 1024 (the header phone). `/invest/strategies/fix-and-flip/` measures the same three in the same preview (NEEDS 10). Two read.wall warnings at 320 (the short answer, now 947 px, and the FAQ list).
- build.js check: OK. build.js audit, this page: the two date mismatches (the lead's `build.js dates` fixes them) and the A20 warning (no named quote; we write none).
- Shots: `wf2/hoa-hoa-vs-poa/r1/shots/` (full page) and `wf2/hoa-hoa-vs-poa/r1/el-*.png` (each figure at 320, 390 and 1440). I looked at the fee table, the drawing, the community cards, the comparison cards, the dark complaint card, the photo and the first two phone screens.

## Critic

### Blocking

1. **Fee-cover table overlaps at 320.** Fixed. At 520 px and below each row now stacks: the item on its own line, its three shares under it in three columns. The "Covers" header is kept for screen readers and hidden on screen. Checked at 320: no overlap.
2. **Page 364 px wide at 320 (feed search box).** Shared, not in this spec. NEEDS 10.
3. **Page 1029 px wide at 1024 (header phone).** Shared. NEEDS 10.
4. **"In a master-planned community, two sets of rules and two charges."** Fixed: "A second association, with its own rules and fee, in some master-planned communities."
5. **Townhouse internet 25% and shared amenities 56% have no ledger row.** Added ledger row 27 (VERIFIED-BY-FIXER): 84 of 338 and 189 of 338 in `has-with-fee.json`, the same pull the verifier reproduced for row 17. The spec now throws if the file stops giving 25 and 56. The lead re-checks the row.

### Nits taken

- Offer pills wrapped to three lines and promised homes on a /contact/ link. Now "Ask about Grande Dunes", "Ask about Barefoot Resort", "Ask about Prince Creek", at 1rem. Two lines at 1440 with no word alone.
- The Grande Dunes entry ("75th supplement", "assignment of architectural review between the master and each of two...") is rewritten in plain words: what the master covers, the two neighborhood POAs, and what architectural review is.
- "however denominated" and "regardless of name" are cut. The short answer says "whatever it calls itself".
- Repetition: "$640" now appears in the glance tile, the short answer, the chart and the fee FAQ (from 8). "The same thing in law" is in the short answer only (and the meta description). "Nearly seven times" is said once.
- Personifying lines cut: "A condo hands the building to the association", "The view from the beach cannot tell you...".
- Fannie Mae "which buys home loans from lenders" is cut. "Usually about $95" is now "the typical house fee". "Usually, if attached" is now "Yes, if attached in a larger building" (row 14: an attached unit in a project of more than ten units). The chart bands now say "roughly".
- "or none at all on some houses" under the HOA house card is cut. That card now says "The smallest monthly fee."
- "Three things, again and again." is cut, with the intro line.
- Photo credits plural: shared partial, NEEDS 13.
- SEO: "South Carolina Homeowners Association Act" is named in full in the short answer and FAQ. "Horry County Register of Deeds" and "National Flood Insurance Program" are named and linked. The H1 holding the h1em is the kit's markup (NEEDS 11).
- PROPOSED.md row 3 now uses the merged 526 and 52/20/9/18.
- The hero offer box stepping 8 px left is the shared hero (NEEDS 12).
- The drawing's small label: at 390 the condo labels now render at about 17 px (the text box is 21 to 22 px tall). The label is unchanged. The panel title is now "A condo".

### Nits not taken

- **Service promise ("get the documents").** I took out "get the documents" and "collect the association's papers a lender asks for". The page now promises only what the owner's 2026-10-14 verdict covers: "We find every association on the home, and each one's fee, before you make an offer" and "We read each association's papers before you make an offer". Ordering copies from Conway is no longer promised. **The lead should confirm both lines with the owner if in doubt** (ledger Question 1).

## Reader

1. **"How much does a second association add?"** No verified row gives the fee of any layer (ledger "Not verified": the documents were not read, no fee for any layer). The CRM has no second-fee filter (NEEDS 2). I did not invent one. The page now says this plainly and answers with what we do: "The county record shows which associations a community has, but not what each one charges, and the seller's disclosure form has room for one association. For a home in a community like these, we find each association and its fee before you make an offer." The section also says what two layers mean for an owner: "two bills and two sets of rules". **The finding is right; the fix is partial until the lead or the CRM can count second fees.**
2. **Community cards read like a clerk's log.** Rewritten in plain words (see critic nits). They still do not say whether every home pays both, because the verifier ruled that out (VERIFY "Not to publish": which homes pay which).
3. **What a lien means for me.** Answered in the first section: a POA whose papers make you pay can put a lien on your home, as an HOA can. One in five of the associations that recorded a lien here in 2025 had "POA" in the name (ledger row 29). In a condo, an unpaid fee is a lien the association can foreclose in court like a mortgage (row 28, S.C. Code 27-31-210(a), the sibling page's verified row, which I re-read on the live code page). For a house, the recorded papers decide, and we read them. Links to `/hoa/liens-and-foreclosure/` and `/hoa/violations-and-fines/`. A new FAQ: "Can a POA put a lien on my house?"

Nits taken: the hero tiles are now two facts that read alone ("About $95, typical house fee a month"; "About $640, typical condo fee a month"). "Regime" is used only where it is defined (the regime fee section and its FAQ), plus once in the name chart. The tax-sale line now says what it means for the owner ("Your property tax bill is for your unit alone..."). The January 10 rule, the deed "in Horizontal Property Regime" line and the "however denominated" quote are cut. The flood line is rewritten ("Flood insurance has a cap...") with what we do. The Fannie Mae project-size bullets are cut. Townhouse cells now say what changes on a lot and as a unit. The voluntary answer says what it means: "If the papers on your home make you pay, the dues are not voluntary, whatever the group calls itself." The six-step process section is cut.

Nits not taken: whether voluntary POAs are common here, or whether one can become mandatory later. No verified row holds either, so the page does not claim them. The feed above the short answer is shared (NEEDS 14).

## Owner

1. **"Covenants".** Cut on all three lines. The page says "rules" or "papers".
2. **Teaching the method.** The six-step "How do we find every association" section is cut. A short section, "What do we check before you make an offer?", keeps the investor rental story (row 25), the two links and the offer card.
3. **Personifying.** Cut or rewritten: "The state's HOA Act goes by", "Its own words for the paperwork agree", "The state's seller form treats every name alike", "A condo hands the building", "The view from the beach cannot tell you", "its papers can decide your loan" and "A condo's association papers can decide the loan". The remaining subjects are people, associations and owners. score.js P10 passes.
4. **Legal and industry wording.** The short answer is plain ("a group that runs a neighborhood or a condo building is an HOA when recorded papers make the owners pay it dues, whatever it calls itself"). "Regime" now appears only in the regime fee section, its FAQ and its contents label, and once in the name chart, where it is a word found in association names. "Master deed" is gone (score.js P6 passes): the page says "the condo's founding papers". The community entries say what each layer runs. score.js P6 and build.js INDUSTRY pass.
5. **Repetition.** Each fact is said once in the body. The $640 and $95 figures are in the tile, the short answer and the chart. Only the fee FAQ repeats them, because an FAQ answer must stand alone. The paragraph under the fee table no longer retells it. It says what to do with it: compare the whole yearly cost; on most houses the insurance is a bill of its own. Surprise 1 ("fees that buy different things") is cut. The condo pros no longer list what the fee covers. The 65% lead-in sentence is cut: the dark card now has its own title, "The papers often come late". The voluntary H3 is cut (the FAQ keeps it). The common-parts list is in one paragraph only. The drawing caption is "Our drawing of what you own in each." repeat-check strict passes.
6. **Surface-level on lien, fine, foreclose, strictness.** Lien and foreclosure: answered (see Reader 3). Fines: linked to `/hoa/violations-and-fines/`, which owns that subject. "Is a POA less strict than an HOA": the page answers that the name changes nothing. The papers decide, and we read them. There is no verified row on strictness by name, so the page makes no count.
7. **Filler.** Cut: "No kind is better.", "Three things, again and again...", "Which homes pay which association is in the recorded documents for each lot.", "A condo is not always a tower, either".
8. **Hero tiles.** "One law HOA or POA" and "Two layers in some places" are cut. Two fee tiles remain.
9. **Layout at 320.** The fee table is fixed (critic 1). The feed and header overflow are shared (NEEDS 10).

Nits taken: the photo is re-cut from the verifier's 1920 px download to the towers and the beach (most of the sky removed). I viewed it at full size. The record (`photos.json`) passes `tools/photos.js check`, and the share crops are re-cut too. The caption is still the verifier's "Oceanfront towers in Myrtle Beach." The sentence before it now makes the point in plain words: "A building here becomes a condo when its owner records the condo's founding papers at the county." The Fannie Mae section is now one paragraph. Not taken here: the feed title and subheader (shared, NEEDS 14). The "Updated July 27, 2026" date is left for the lead's `build.js dates` run.

## New ledger rows (facts.md, VERIFIED-BY-FIXER, for the lead to re-check)

- 27: townhouse internet 25% (84/338) and shared amenities 56% (189/338).
- 28: S.C. Code 27-31-210(a), an unpaid condo assessment is a lien the association can foreclose in court like a mortgage (verified as row 23 on `/hoa/special-assessments/`; re-read on the live code page today).
- 29: one in five (103 of 526) lien-filing associations have "POA" in the name. This is row 18's corrected count, used for the lien answer.
