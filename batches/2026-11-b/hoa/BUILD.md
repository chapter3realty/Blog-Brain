# BUILD: /hoa/ (the HOA hub, batch 2026-11-b)

Built 2026-11-09 from `PLAN.md`, VERIFIED and CORRECTED rows of `facts.md` only (at the verifier's wording, `VERIFY.md`), and the data in the website working copy `data/2026-11-b/hoa/`.

Files (website working copy):
- Spec: `specs/hoa.js` (new; the live page was hand-made). Built with `node tools/mkpage.js specs/hoa.js`.
- Page: `chapter3realty/hoa/index.html`.
- Data: `data/2026-11-b/hoa/` (findings.json, chart-fee-by-kind.json, table-covers.json, budgets.json, read by the spec); `photos.json` added (one USGS record, copied from /hoa/documents/).
- Images: `chapter3realty/images/2026-11-b/hoa/houses-and-towers-from-the-ocean*.webp` (USGS, public domain; the same frame /hoa/documents/ and /buyers/common-mistakes/ show, copied so this page stands alone). Looked at full size before use.

Every figure on the page is read from the data files, and each is checked against its ledger row with a `must()` in the spec. The build stops if a rerun moves a number.

## Outline

Title (54): "Myrtle Beach HOA Fees: About $95 a House, $650 a Condo". Description (157): typical fees by kind of home and what each covers.
H1 kept (data/headlines.json): "Myrtle Beach HOA fees," with "and what each one covers." as the italic line at about half the H1's size.

0. **Hero.** Eyebrow "The HOA guide". Three key-fact rows (house about $95, condo about $650, oceanfront tower about $940 a month; rows 1, 2). Sub: a house fee may include trash pickup, a tower fee often the power bill (row 4). Byline Devin Day, reviewed by Tim Nash.
   The edge's homes feed for /hoa/ (HOA_COVERS) stays under the opening.
   **Short answer:** house $95, townhouse $290, condo $650, tower $940; why a condo fee is higher; about 6 in 10 tower fees include the power bill (rows 1, 2, 4).
   **Slim offer:** "Have us check what a fee covers".
1. **How much are HOA fees in Myrtle Beach?** Chart 1, "A condo in an oceanfront tower pays about ten times a house's fee": house, townhouse, condo off the ocean, tower, each with the range half pay (rows 1, 2, 6). Then the yearly figures ($1,140 and $7,700). The Census check (house $90, outside the Loris area; row 7 corrected). About 6 in 10 homeowners pay a fee here against 1 in 3 elsewhere in SC (row 8).
2. **What do HOA fees cover in Myrtle Beach?** Table: 8 items by 4 kinds of home, a pie and a number in 10 per cell (row 4). Then one line per kind. Own insurance: house $2,000, condo owner $800, "may also pay" (row 21 corrected). Regime fee in one line with the hoa-vs-poa link (row 26). Link to cost-to-own.
3. **Why are HOA fees so high in Myrtle Beach?** Ten times a house fee. The building's federal flood policy is about $405 a unit a year, about $34 a month (row 9). Most of a $940 fee goes to other insurance, utilities and upkeep. Photo: houses and towers on one beach. Links: condo-buildings, master-insurance-ho6.
   **Offer:** "Have us read the building's budget".
4. **What does an HOA fee buy in a neighborhood of houses?** Chart 2, "A house's fee goes up with what its neighborhood has": no shared amenities listed $70, a pool or clubhouse $110, a gate $160, a gate and golf $200 (row 3). About 9 in 10 gated golf listings name a security service (row 4). Prestwick $185 to $197 with a main gate off Highway 544, and Leatherleaf $385 to $398 (row 17 corrected). Waterbridge about $150, with its pool complex and clubhouse (row 19 corrected). Links: gated and golf communities.
5. **What are HOA fees in Myrtle Beach's 55+ communities?** The range runs from $95 (Myrtle Trace) to about $400 (Del Webb at Grande Dunes) (rows 12, 13). Del Webb North Myrtle Beach $315, where the builder lists lawn care and a 175-channel TV package (row 15 corrected). Seasons about $340 (row 16). Two budgets side by side, as plain lists under thin rules:
   - Myrtle Trace, of each $100 of income (row 14).
   - Del Webb at Grande Dunes, of each $100 of the main budget, with no dollar total and no year in the copy (row 10 corrected). "About a fifth goes to the Grande Dunes Ocean Club" is stated about the budget only. The page never says the listing fee includes it (row 11, struck list).
   Link to 55+ communities. **Offer:** "Have us add up every fee".
6. **Where are HOA fees lowest in Myrtle Beach?** Table of the condo fee in 8 areas (row 20 corrected). Houses by area, counting no-fee houses. In 29582 and 29575 more than half list no fee. About 3 in 10 houses list no fee (row 5). 4 in 100 pre-1980 houses list a fee, against about 8 in 10 built 2010 or later (row 28). You cannot opt out (row 25). No cap on dues; the limits are in the association's own recorded rules (row 27 corrected). Links: no-hoa-homes, dues-increases.
7. **Are HOA complaints common in Horry County?** 31 percent of the state's complaints, the most per person, Georgetown second (row 22). Most common: the HOA did not follow its own rules, then maintenance (row 23). Link to SC HOA laws. Then the H3 "How we check an association before you offer", the four steps kept from the live page in plain words.
8. **What else should you know about HOAs in South Carolina?** All 15 child pages once, in four groups (money; rules and the law; condo insurance and damage; before you buy). Plain lists under thin rules, two columns on a wide screen. The link text is the question each page answers.

FAQ (5; each repeats a question answered on the page): how much; monthly or yearly; what is a regime fee; can I refuse to join an HOA; can HOA fees go up.

Sources line: the listings feed, Census PUMS 2024, OpenFEMA, the Del Webb at Grande Dunes 2025 budget, the Myrtle Trace 2026 budget, SC Consumer Affairs, SC Code 27-30 and 27-31. End band kept word for word ("Looking at a place with an association?" / "Have us review an HOA").

Offers: the slim bar, then boxes after sections 3 and 5, the four steps in section 7, and the end band. No two offers use the same words.

### Departures from the plan, and why

- **No `G.homes` strip** (the plan asked for Grande Dunes). The website's edge drops a page's own feed when the page carries any strip, unless the feed is marked `withStrips` (`idx-lib/edge.js` line 249). /hoa/'s feed, HOA_COVERS, is not marked. Adding a strip would have removed the condo feed under the opening, so the page keeps that feed. If the lead wants named strips too, the one-line change is `"/hoa/": { ...HOA_COVERS, withStrips: true }` in `idx-lib/feeds.js`. I did not change that file; it is outside this page's scope.
- **Chart 1 has four bars, not six.** The three house tiers moved to their own chart in section 4, so no fee is shown twice. The all-condo $650 is in the chart note.
- **Chart 3 (the Del Webb budget) is a plain list beside Myrtle Trace's.** Two budgets read as one comparison; a second bar chart in a row looked busy.
- **Gated golf examples are in section 4,** where the gated golf tier is. Section 5 is 55+ only.
- **Cut for want of a verified row:**
  - "no state agency enforces the HOA Act" (no row in this ledger);
  - "oceanfront" for the Ocean Club;
  - the tower pool and security shares (in the data file, but not in row 4's claim);
  - "older streets" as where no-fee houses are;
  - the V-zone flood figure and the 176 percent rise (cut to keep the numbers down).
- **Plain-word fixes (score P6, P10):** "covenants", "master deed", "horizontal property regime", "estoppel" and "HO-6" are out of the prose and the guide links. "Pays for" became "includes" or "goes to".

## Gate results (final build)

From Blog-Brain:
- `SCORE_TODAY=2026-11-09 node tools/score.js --site <wt-live>/chapter3realty --only /hoa/`: **99/100** (SEO 100, AEO 100, Human 98, Trust 100). The one partial is P2, few numbers: 4.7 per 100 words against 3.5. That is a note on a fee page whose answer is numbers. Already cut: the V-zone figure, the 176 percent and the "a month" on every table cell.
- `node tools/claims-scan.js <wt-live>`: 0 findings sitewide (0 on /hoa/).
- `node tools/facts-check.js <wt-live>`: 0 on /hoa/. The 4 wrong sentences are on /buyers/relocating/from-virginia/ and llms-full.txt, which existed before this page.
- `node tools/house-claims.js <wt-live>/chapter3realty/hoa/index.html`: 0 sentences to scope or source.
- `node tools/struck-check.js --batch batches/2026-11-b --preview <dir> --strict`: no struck wording on the page.
- `node tools/repeat-check.js ... --strict`: passes. `node tools/structure-check.js ... --strict`: passes.
- `node tools/critic.mjs http://localhost:8872 /hoa/ --widths 390,1024,1440`: **0 blocking, 0 warning** at all three widths.
  - The first run found 7 blocking: bar values spilling at 390 and 1024, page scroll at 1024 and 390, and a wall of text at 390.
  - Fixed: shorter bar values with headroom; the 980 to 1099 px header gap rule from garden-city.js; the photo moved under the flood paragraph.
- No em dash, no sentence opening with "So", "And" or "But", no "Here is", no sentence over 28 words in the body. "Devin" appears only in the byline. No rate, payment amount, address value or named building fee.

In the website working copy:
- `node build.js check`: OK. One sitewide warning on the home page's inline script; not this page.
- `node build.js audit`: FAIL lines for /hoa/ are only the two mkpage date lines (schema dateModified and the visible "Updated" against the sitemap; `node build.js dates` sets them). The net-proceeds date lines belong to the other agent's page.
  - The audit's first run found a keyword clash: "condo fees myrtle beach" was declared by /buyers/cost-to-own/ too. The keyword was removed from this page.
  - One note remains (~): no attributed sentence from a licensed person. Left as is: no quote for Tim Nash is written.

## Looked at as a stranger (every shot at full size, in slices)

The page is calm: one card style for the two charts, the table, the photo and the offers, and plain lists and tables under thin rules.

Fixed after looking:
- The "On this page" box was one tall column at 1440 px. It is now three columns from 700 px.
- The end band showed faint ivory text on a light card. It now uses the dark band rule from garden-city.js.
- The photo credits showed a duplicate general credit line. It is removed, as on /hoa/documents/.
- The phone key-fact rows ran 17 px past the gutter. The label now wraps and the figure stays on one line.
- The area table said "a month" on every cell. It is now in the header.
- Section 1 no longer opens by repeating the short answer.
- The short answer no longer starts with the same words as the sub.

Shots (final build):
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/shots/hoa-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/shots/hoa-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/shots/hoa-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa/critic.json`
- The slices I looked at were cut from the earlier shots and replaced with each run. `.../rb1/hoa/cuts/390-tiles.png` is the phone key-fact rows from the final build.

Preview stopped (`fuser -k 8872/tcp`).

## For the lead (outside this page's scope)

1. **The one value for the condo fee** (PLAN 7). This page prints "about $650" for a condo and "about $290" for a townhouse. /hoa/hoa-vs-poa/ still prints $640 and $275. The proposed registry row `typical-hoa-fee-by-type` should name /hoa/ as owner, with `data/2026-11-b/hoa/findings.json` as its source, and hoa-vs-poa should change or link here.
2. **`withStrips` for /hoa/** in `idx-lib/feeds.js`, if a Grande Dunes or Seasons strip is wanted in section 5 (see above).
3. Not run here, and needed before release: a cold reader, the owner's-eye review and a fresh verifier on the reworded corrected rows (CRAFT 8).
