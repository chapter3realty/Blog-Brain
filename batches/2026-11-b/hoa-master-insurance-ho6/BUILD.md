# Build: /hoa/master-insurance-ho6/ (batch 2026-11-b, Lane U)

Built 2026-11-10 from PLAN.md and only VERIFIED or CORRECTED rows in facts.md, at the verifier's wording (VERIFY.md). Row 8 (the $1,000 loss assessment figure) is STRUCK, so the page prints no dollar figure for it.

- Spec: website `specs/master-insurance-ho6.js` (new; the page had none). Built with `node tools/mkpage.js specs/master-insurance-ho6.js`. URL kept.
- Page: website `chapter3realty/hoa/master-insurance-ho6/index.html`.
- Data changed, in `data/2026-11-b/hoa-master-insurance-ho6/`:
  - `pull_nfip_claims.py` now pulls the RCBAP codes H and L as well as A and U (the verifier's row 19 fix). Re-pulled from OpenFEMA 2026-11-10: A 570, H 253, L 27, U 589 claims.
  - `build_findings.py` counts H and L with A, and drops the struck $1,000 bar and field (row 20). The rebuilt `findings.json` matches the verifier's row 19 figures exactly: Ian 101 claims, $8,211,380; Matthew 113, $7,654,476; Florence 39, $8,380,786; Hugo 232, $17,131,447. The spec checks each one.
  - `photos.json` (new): the USGS public domain aerial from /hoa/special-assessments/, record copied, image files unchanged at their 2026-10-d path. It shows roofs, balconies and a pool, under the sentence on what the building's policy insures. It is also the share image.
- No file touched in `idx-lib/`, `partials/` or `batches/2026-10-b/data/idx-places.json`.

## Outline

Title (57): "Condo Master Policy vs HO-6 in Myrtle Beach: What to Buy". H1: "Condo master policy vs HO-6 in Myrtle Beach:" with the italic line "what each covers, and how much to buy." at about half the H1's size. Hero facts: your own HO-6 about $800 a year; your unit flood policy about $495 a year; your share of a 5% storm deductible about $6,500 (labeled example).

0. Short answer (two short paragraphs: what each policy insures; ask first for the storm deductible, about $6,500 an owner in the example, and a basic policy pays only a small set amount). Slim top offer: "Name the building. We read its insurance papers with you." Button "Have us read the papers".
1. What is the difference between a condo master policy and an HO-6? (rows 1, 9, 10, 25, 28) The photo; table "who insures what" (four rows, cards on a phone).
2. Does the condo master policy cover the inside of my unit? (rows 1, 2, 28) Bare walls, single entity, all in; a chart "The further right, the more the building's policy insures" (drawn twice, phone and wide); the "walls in" caution at the verifier's wording; how to find which kind. Offer: "Have us read the building's insurance section".
3. How much HO-6 coverage do I need for my mortgage? (rows 5, 6, 7, 22) Fannie Mae's five rules as bold lines; "not a law"; the building's 5% and $50,000 limits; H3 "Does an HO-6 cover wind and hail?" (east of US 17 or Bypass 17).
4. Does an HO-6 cover the master policy deductible? (rows 3, 4, 5, 20, struck-row 8 wording) Loss assessment coverage; chart "A 5 percent storm deductible could bill each owner about $6,500" (1%, 2%, 5%, from chart-deductible-share.json); what we compare before closing; links to who-pays and special assessments (one sentence each); H3 on the capital-letter warning, quoted. Offer: "Have us compare the deductible to your quote".
5. How does flood insurance work on a Myrtle Beach condo? (rows 11 to 19) The RCBAP and the unit policy; 701 of 702 meet the 80 percent rule; 276 buy $250,000 a unit; $405 a unit in the fee; no cover for belongings (151 of 1,172 buy contents); unit policy about $495, half $370 to $640, 3 in 4 outside high-risk zones; $250,000 combined; the deductible assessment surprise; most deductibles $1,250; table of the four storms with the largest payments.
6. What should I ask for before I buy a condo, and when? Papers first, then the policy once; seven papers we read under thin rules; story rows 23 and 24 (quote before the offer if you buy with us; the cheapest policy that satisfies you and your lender); landlord insurance link.
7. FAQ (5, each answered on the page): HO-6 if the HOA has a master policy; required in South Carolina; cost in Myrtle Beach; how much loss assessment coverage; what an RCBAP is.
8. Sources line (11 links, method note) and photo credit; end band "Buying a condo? Get an insurance quote before you offer." Button "Ask for an insurance quote".

Every button links to /contact/; the site opens its short pop-up. Four offers, no two alike. Sibling questions given up: who pays the deductible and how it is split (who-pays), what a special assessment is, house insurance and the wind pool (coastal-insurance), the fee breakdown (/hoa/), rentals (landlord-insurance). No named building.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/master-insurance-ho6/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,844 words |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | 0 on this page (4 wrong sentences elsewhere, all pre-existing: from-massachusetts, from-virginia, llms-full.txt) |
| `node tools/house-claims.js` | 0 sentences |
| `node tools/struck-check.js --strict` | hoa-master-insurance-ho6 (13 patterns): no struck wording |
| `node tools/repeat-check.js --strict` | passes |
| `node tools/structure-check.js --strict` | passes |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking, 0 warning at all three widths |
| `node build.js check` | OK |
| `node build.js audit` | this page: only the mkpage date lines (schema dateModified and visible "Updated July 29, 2026" vs sitemap lastmod), and the usual "~" note on a quote from a named person (we never write one) |
| `node tools/inbound.js --only` | 11 referring pages |

The first critic run gave two "wall of text" warnings at 390 px; fixed with an H3 ("How do I find out which kind my building has?") and the quoted capital-letter warning as a block. The first audit flagged "nobody can" and "The good news"; both rewritten. Score's first run failed on four terms from plain-words.json (estoppel, master deed, wind pool, warrantable), "fee pays for", the weak opener under section 2, and the missing share image; all fixed.

## Screenshots (looked at full size, every slice)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-master-insurance-ho6/shots/hoa-master-insurance-ho6-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-master-insurance-ho6/shots/hoa-master-insurance-ho6-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-master-insurance-ho6/shots/hoa-master-insurance-ho6-1440.png`
- Slices: `.../rb1/hoa-master-insurance-ho6/slices2/`; critic JSON: `.../rb1/hoa-master-insurance-ho6/critic.json`.

Fixed after looking: the policy-kind chart's phone text was too small and its column names ran together (now 15 px, two-line names, "HO-6" in the cells); the "On this page" label broke as "HO-/6" (now "The two policies"); the $800 line no longer contradicts the opening ("may also pay" dropped, the verified figure kept with its group); "most conventional loans" said twice in a row.

## For the lead

1. **Feed title (idx-lib/feeds.js, HOA_INSURED, not edited here).** Today: "Condos whose HOA fee covers the insurance". The owner wants it bold and personal, and true. Proposed: **"On the sand, with the building's insurance already in the fee"**, narrowed to Horry oceanfront buildings: `type=condo&has=county_horry,oceanfront_building,hoa_includes_insurance` (888 listings on 2026-11-10, ledger row 26). The flag is the listing agent's and does not say which policy, so the title says "insurance in the fee", never "master policy". If "on the sand" is judged too loose for every oceanfront-building listing, use "Oceanfront condos with the building's insurance already in the fee".
2. **The wow factor on this page.** The page sells a kind of home, not a place, so its "want to be there" detail is the strip title above and the good news the reader cannot find elsewhere: Horry condo buildings with a federal flood policy are insured close to full value (701 of 702), and most flood deductibles are $1,250. No named building (condo-buildings owns them).
3. **/buyers/coastal-insurance/** prints a unit policy at "$40 to $60 a month" ($480 to $720 a year). The verified figure here is about $800 a year (row 10). Flag for that page's owner; this page prints only $800.
4. **Photo partner.** A shot of an oceanfront condo building's roof and balconies from the beach would replace the reused 2011 aerial (PLAN 6.4).
5. **Owner question (facts.md):** a real named-storm deductible percentage and the loss assessment limits clients bought, from closings. Proposed answer if none: the labeled example stays.
6. Not run, as instructed: `node build.js stitch`, `dates`, `llmsfull`. The page's date lines will be set by `dates`.
