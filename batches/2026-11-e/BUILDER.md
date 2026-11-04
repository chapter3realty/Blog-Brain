# Builder brief, batch 2026-11-e (read fully before writing)

You build one page of the seven election pages in `BRIEF.md` (same folder). Do not create, archive or message any Claude Code session. Never deploy. Never git commit or push in either repo.

## Paths
- Website working copy: `/tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/web3` (WEB). It is the live branch today. Build with `node tools/mkpage.js specs/<your spec>.js` in WEB.
- Blog-Brain: `/home/user/Blog-Brain` (BB). Read `CRAFT.md`, `voice/RULES.md`, `voice/VERDICTS.md`, `STANDARD.md`, `rules/images.md` first. WEB's `CLAUDE.md` and `PLAYBOOK.md` hold the owner's voice and compliance rules and win any conflict.
- Ledger: `BB/batches/2026-11-e/facts.md`. Use only rows marked VERIFIED or CORRECTED, at their corrected values; read `VERIFY.md` for the corrections. `predictions.md` has the past examples; `VERIFY.md` lists the predictions.md items you must not use or must reword. `photos.md` has free-licence photos. `must-answer.md` has the questions per page. `facts/election-2026-struck.json` lists phrases that must not appear.
- The bar: study `WEB/specs/home-value.js`, `programs.js`, `reserves.js`, `undisclosed-flooding.js`, `dst.js` and their built pages. Copy the approach, not the wording.

## What the owner asked for (2026-11-04)
"use all your skills as a brain to create these blogs, be bipartisan and talk about all of her policies and plans, make it co-authored by Devin Day COO and Abdulla Hijazi CMO, and take past examples to try and predict what will happen with her policies both short and long term."

- **Author:** `author: "devin+abdulla"` in the spec (mkpage writes the co-author byline and schema). Never name Devin, Abdulla or Paul in the copy. No quote for Tim Nash, no story that is not in `BB/stories/stories.json`.
- **Bipartisan:** each party's plan in its own words (campaign pages, direct quotes), the same space and the same tests for each. Neither party is praised or blamed. Where the evidence is contested, give the strongest source on each side and say who funded it.
- **Predictions:** for each policy, a short-run (first 1 to 2 years) and long-run (5+ years) section built only on past examples in the ledger: "Where this was tried before, X happened; if it passes here, the same mechanism points to Y, within this range." Say what has to happen first (who must vote, how many votes). Never predict a price or rate as a single number. Never state an interest rate or a payment amount.
- **The election:** results are unofficial until certified; say "unofficial count" and "AP called" or "conceded" exactly as the ledger says. The governor's race has no AP call. Write the page so it stays true after certification.
- **Local:** every page ties the policy to Myrtle Beach, Horry County or the Grand Strand with a local number from the ledger, a worked example, a table or a chart built from ledger values.
- **Compliance:** no fair-housing steering words; BrickWood Mortgage only with its inline disclosure if named at all (better not); no financing offers.

## Page rules
- The answer in the first two sentences, under a question heading that matches a real search. Question headings throughout.
- At least two findings no other site has (our own table from the ledger, the worked tax example, the vote-count math, the FHFA after-each-election chart).
- A visual at least every screen or two on a phone: tables, charts (built from data in the spec, never typed as an image), a free-licence photo with credit, a timeline of what happens when. Put new data files under `WEB/data/2026-11-e/<slug>/` and new images under `WEB/chapter3realty/images/2026-11-e/<slug>/`, each photo with a licence record that `BB/tools/photos.js` accepts.
- Short sentences, the owner's register: literal, no em dashes, no metaphors, no hype, each fact said once.
- Internal links: to the other election pages by their URLs in `BRIEF.md` (they will exist), and to existing guides where they help (for example /buyers/property-taxes/, /invest/str-rules/, /buyers/coastal-insurance/).
- FAQ: 3 to 6 questions, only ones answered on the page. Sources section with the primary links.

## Edit only
Your spec `WEB/specs/<your spec>.js`, your page `WEB/chapter3realty/<your url>/`, `WEB/data/2026-11-e/<slug>/`, `WEB/chapter3realty/images/2026-11-e/<slug>/`, and `BB/batches/2026-11-e/<slug>/`. Nothing else. Do not run `node build.js stitch`, `dates` or `llmsfull`. If you need a shared change, write it in `BB/batches/2026-11-e/<slug>/NEEDS.md`.

## Gates (all must pass before you answer)
In BB: `SCORE_TODAY=2026-11-04 node tools/score.js --site WEB/chapter3realty --only <url>`; `node tools/claims-scan.js WEB` (0 findings on your page); `node tools/facts-check.js WEB`; `node tools/house-claims.js WEB/chapter3realty<url>index.html`. Start a preview: `node BB/tools/preview.mjs WEB --port <your port>` in the background, then `node BB/tools/critic.mjs http://localhost:<port> <url> --widths 390,768,1440 --shots /tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/wf3/<slug>` with 0 blocking. In WEB: `node build.js check` and `node build.js audit` (an orphan or date note on your new page is expected until the lead links it and runs dates; nothing else may fail). Look at every shot at full size and fix anything crowded, overlapping or confusing.

## Answer
Spec path, the page outline (H2s), the unique findings, gate results, shot folder, and anything in NEEDS.md.
