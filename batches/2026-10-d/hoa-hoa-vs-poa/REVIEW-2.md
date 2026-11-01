# Review round 2: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Fixer, 2026-11-01. Critic 5 (fail), reader 7.5 (pass), owner 7 (fail). Every change is in `specs/hoa-vs-poa.js`, built with `node tools/mkpage.js specs/hoa-vs-poa.js`. New data: `data/2026-10-d/hoa-hoa-vs-poa/community-fees.json` and `pull_community_fees.py` (README updated). New ledger rows 30 and 31 in `facts.md`, both VERIFIED-BY-FIXER. No built page was edited by hand. No finding was judged wrong.

## Gates after the fix

- score.js (SCORE_TODAY=2026-11-01): 99/100. SEO 96, AEO 100, Human 100, Trust 100. 1,833 words. The one gap is S8 (one page links here; NEEDS 7).
- claims-scan 0. facts-check 0 hits on this page. house-claims 0. struck-check: no struck wording. repeat-check --strict passes (0 identical, 0 near). photos.js check passes.
- critic.mjs at 320, 390, 768, 1024 and 1440 on port 8788: **0 blocking, 0 warning** (round 1: 3 blocking, 2 warnings). JSON: `wf2/hoa-hoa-vs-poa/r2/critic.json`; shots: `wf2/hoa-hoa-vs-poa/r2/shots/` and `r2/el-*.png`.
- build.js check OK. build.js audit, this page: the two date mismatches (the lead's `build.js dates`) and A20 (no named quote; we write none).
- I looked at: the first two phone screens at 390, the feed at 320, the header at 1024, the community cards at 320, 1024 and 1440, the contents box at 1440, the comparison cards, the dark complaint card and the checklist at 390.

## Critic

### Blocking

1. **Feed search box past the edge at 320; "Find houses" cut off.** Fixed on this page with a page-scoped rule: the feed's search label may shrink. The page is 320 px wide at 320. The shared fix is still the lead's (NEEDS 10, 15).
2. **Header phone, 1029 px at 1024.** Fixed on this page with a page-scoped rule for 900 to 1100 px (less padding on the phone link). The page is 1024 wide. Shared fix still the lead's (NEEDS 15).
3. **Loan rule reverted from correction 7.** Fixed in correction 7's terms: "reviews the whole condo project before a loan on an attached unit. That applies to a project of more than ten units, and to one of five to ten units inside a larger community or under a master association." Then: "Three kinds of home skip the full review: a detached condo, a small condo project, and a house or townhouse in a neighborhood where every owner must belong to the HOA." The comparison cell is now "Yes, except detached or small buildings".
4. **Six fee-table cells with no ledger row.** Added row 30 (VERIFIED-BY-FIXER): condo internet 1,996/2,866 (70), amenities 2,504/2,866 (87); house internet 234/2,590 (9), amenities 1,576/2,590 (61); townhouse water and sewer 64/338 (19), trash 247/338 (73). The counts are in the same `has-with-fee.json` the verifier re-ran in full (VERIFY.md, "What I re-ran"). The spec now checks all 18 cells and throws if one moves. **The lead re-checks rows 27 to 31.** I had no way to start an independent verifier in this stage.

### Nits

- Rows 27 to 29 VERIFIED-BY-FIXER: unchanged; for the lead, with 30 and 31.
- FAQ lien answer: now "Yes, if its recorded papers make you pay dues, as an HOA can. That is a claim on your house for the unpaid dues."
- Feed title and subheader: shared (NEEDS 1, 8, 14). Not in this spec.
- Card buttons: each card is a column with the offer pinned to the bottom, on one line from 380 px. At 320 the label wraps balanced ("Ask about / Prince Creek"). Barefoot's offer is "Ask about Barefoot". The Prince Creek card's empty space is gone, because each card now leads with its fee line.
- Hero tiles: "typical monthly house fee", "typical monthly condo fee". No word alone at 390.
- "Lien" explained where first used: "A lien is a legal claim on the home for the money owed." Foreclosure: "the way a lender forecloses a mortgage".
- H1 subtitle: "What changes the fee, and why some homes pay two associations." The H1 holding it is still the kit (NEEDS 11).
- Contents box: two columns from 700 px (five rows at 1440).
- Photo credits plural: shared (NEEDS 13).
- Dates: left for `build.js dates`.
- Service lines beyond the approved two: cut "We read the association's policy before you buy yours..." and "We read them for the home you send us and tell you what is yours to keep up." The new checklist promises only what Question 1 and row 25 cover (see Owner 5).
- Townhouse row: now "A lot or a unit, as its deed says"; roof and lender "Like a house or a condo, by the deed". It is still a reading of rows 8 and 14, with no row of its own.
- Grande Dunes: "The master association covers the whole community" is cut. The card keeps the two neighborhood POAs and the architectural review agreement (row 20 safe wording).
- read.wall at 320: both are gone. The short answer is shorter.

## Reader

1. **How much do two fees come to.** New ledger row 31 (VERIFIED-BY-FIXER), from a new aggregate pull of homes for sale (`pull_community_fees.py`, the same map API as rows 15 and 17, counts only). Each card now opens with a fee: Grande Dunes houses list about $350 a month, nearly four times the typical $95 house fee; Barefoot condos about $570, a little under the typical condo fee; Prince Creek houses about $140. It also says what those listings say the fee covers (amenities, a gate, insurance, trash). The section says plainly that a listing's fee "may leave out a second association's fee", because the API reads one fee field (NEEDS 16). Grande Dunes condos (17, median near $2,000) and Barefoot houses (14) are left out as too few.
2. **"A POA covers more kinds of property."** The first section now opens with it: "You may read that a POA covers more kinds of property than an HOA, such as empty lots or shops. In South Carolina the name does not change what the group is. What it runs and what the owners pay are in its recorded papers." The Barefoot card now calls the nonresidential association "a separate one, with its own papers".
3. **"Lien".** Explained (see critic nits).
4. **"Condo fee for sale here".** The short answer now says "On the Grand Strand, the typical fee on a condo for sale is about $640 a month, and on a house about $95". County data says Horry County, and MLS data says Grand Strand.
5. **Community cards read like a record.** Each card now leads with the fee and what it covers, for the owner. Cut: "a cost-sharing agreement for its common areas is on file", "The county record shows...", "It records the design guidelines and the policy for adding new communities". The verifier's bar on saying which homes pay which association still holds.
6. **What we check opened with an investor.** It now opens "We read the papers of every association on the home, and we check these four things", followed by a numbered list. The investor line is one example inside item 3.

Nits taken: the timeshare and the founding-papers sentences are cut from the body (the timeshare exception stays in FAQ 1 only, where correction 1 needs it). The MLS counts in the chart note are cut. The lien-chart method note is cut to one sentence. "HPR" is cut from the chart. "Detached condo" is defined. The flood line is now "together pay at most $250,000 for your unit" ("a loss is paid once" is cut). The tax-sale sentence is cut from the body; "Your property tax bill is for your unit alone" stays only in pros. The complaint card now says where to complain: "Owners file these complaints with South Carolina Consumer Affairs." The feed is shared.

Not taken: whether a POA must follow the same meeting and records rules as an HOA. No verified row holds it beyond row 1; `/hoa/south-carolina-hoa-laws/` owns the Act's other sections.

## Owner

1. **The same answer four times at the top.** The hero sub is now a dek: "Local fees by kind of home, what each fee covers, and three communities with more than one association." The answer is said once, in the short answer. The first H2 opens with the POA-covers-more claim, not "Only the name." FAQ 1 is the short version (two sentences). $95 and $640 now appear in the tiles, the short answer, the chart and the fee FAQ. The FAQ must stand alone, so it keeps them.
2. **The same offer six times.** Now: the hero offer (find every association), the "What we check" list and its card ("Send us the address of a home you like, condo or house"), the three "Ask about" pills, and the bottom band ("Ask about any home on the Grand Strand. An agent replies with what we find."). Cut: the complaint card's "We read each association's papers...", surprise 2's "We find every association on the home...", the two-associations line "we find each association and its fee...", and the house upkeep line. "Unit alone" is now in the what-you-own text once and in pros once.
3. **Technical detail.** Cut: the "Horizontal Property Regime" name ending, the timeshare sentence in the short answer, "A building here becomes a condo when...", and the chart notes on condo words, two label words and names left out. The Fannie Mae rule is now in two short paragraphs, told as what it means for the loan. Its numbers stay, because correction 7 needs them to be true.
4. **Two associations: no number, clerk's voice.** See Reader 1 and 5.
5. **What we check does not answer its heading.** It is now a numbered list of four checks, each with one line on what it means for the buyer. (1) Every association the home belongs to. (2) What each one charges and what the fee covers. (3) The rules that could change your plans, such as a ban on renting. (4) Who keeps up and insures what. Special assessments, reserves and the master insurance policy are **not** listed as checks. Ledger Question 1 covers finding every association and reading their papers, and nothing more. The page links to the reserves and master-insurance pages. **If the owner confirms that agents also check reserves and special assessments, add them as items 5 and 6.**
6. **The stat card is hard to read.** Now: "65% of Horry County owners who complained to the state about their association got its papers only after they bought." The qualifier moved to the source line: "235 of the 359 complaints from 2022 to 2025 that said when the owner got the papers."
7. **The top is cluttered.** The hero lost its repeated answer, and the tiles no longer wrap. The feed between the hero and the short answer is the edge's (NEEDS 1, 8, 14). It still reads "Homes with no HOA fee", and the lead must fix or confirm it before the owner sees the page.
8. **Telling the reader to do the work.** Cut: "Compare the whole yearly cost of each home, not the two fees." (the page states both yearly totals), "The recorded papers say which kind it is.", and "You may insure your unit on your own policy." It now reads "a policy on your own unit is a separate one". No row says a lender requires one, so the page does not say it.

Nits taken: pros and cons drop the lender line and say "The policy on the house is a bill of its own". The flood line is plainer. The comparison cells are plainer. Not taken: a photo of a named community. None is licensed yet; the photo partner's shot list (`shot-list.md`) stands. Credits plural: NEEDS 13.

## New ledger rows (facts.md, VERIFIED-BY-FIXER, for the lead to re-check)

- 30: the six fee-table cells (counts above), from the file the verifier re-ran.
- 31: the typical listed fee and fee-cover shares in Grande Dunes (houses), Barefoot (condos) and Prince Creek (houses), from `community-fees.json` (pulled 2026-11-01T15:29Z).
