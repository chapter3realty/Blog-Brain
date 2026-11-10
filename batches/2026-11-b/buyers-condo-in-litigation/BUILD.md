# Build: /buyers/condo-in-litigation/ (batch 2026-11-b)

Built 2026-11-10 from PLAN.md, with VERIFIED and CORRECTED rows only, in the verifier's wording (VERIFY.md). The spec is new: website working copy `specs/condo-in-litigation.js`, author "devin". The July page was hand-made; the URL is kept.

## Outline

- **Title** (62): "Buying a Condo in Litigation in Myrtle Beach: When It's a Deal". The searched words first, then the owner's hook from the July page.
- **H1**: "Can you buy a condo in litigation in Myrtle Beach?" Italic line: "Yes. A building that has already made its repairs can be the best deal in Myrtle Beach." (the owner's July headline idea).
- **Description** (160): what Fannie Mae and FHA allow, which suits are minor, real Grand Strand cases, and when it is a deal.
- **Short answer**: yes; cash works because the building rules of Fannie Mae, Freddie Mac and FHA apply to the loans they buy or insure (row 14); most of those loans cannot be used while the suit runs, unless it is a minor kind. A building that has made its repairs can be a real chance; an unrepaired structural problem can mean a large bill.
- **Top bar**: "Heard the building is in a lawsuit? We find out what it is about before you offer." / "Ask about a building".
1. **Can you get a mortgage on a condo in litigation?** Rows 1 (CORRECTED: "Fannie Mae will not buy"), 2, 7. H3 "Which lawsuits count as minor?": six plain items from row 3 (CORRECTED, the repair carve-out with "losing would not hurt it"), then row 4. H3 "What does FHA allow?": rows 9 and 10 in the verifier's wording. **Table** "Can you buy with it? By kind of lawsuit" (4 rows, conventional, FHA, cash; words, no symbols; folds to labelled lines on a phone). Link to /invest/non-warrantable-condos/ on "Fannie Mae's rules for a building". **Offer**: "Told the building is in a lawsuit?" / "Find out what the suit is about" (row 37: our building review covers any lawsuit).
2. **Which loans still work on a condo in litigation?** Cash (row 14 safe wording) and loans kept outside Fannie Mae and Freddie Mac, with one published program's limit (row 13; Newrez only in the sources). Cash does not remove the risk. BrickWood in the approved words, with the disclosure. Link to /invest/condotel-financing/.
3. **How do you find out if a condo is in litigation?** We do it (row 37). Plain list: the questionnaire (row 12, unquoted; link /hoa/documents/), the attorney's letter (row 8), what FHA asks (row 11), the court record (row 18: federal suits are listed elsewhere). The seller's form does not ask (row 16). **Offer**: "Send us the building's name." / "Ask about a building's lawsuits".
4. **When is a condo in litigation a good deal?** When the association is suing the builder for repairs already made. The USGS 2011 photo of oceanfront condo towers (public domain, reused from /invest/condos/; none of the buildings in it is named for a suit). A chance and two warnings (rows 3, 22; link /hoa/special-assessments/). H3 "Can a builder still be sued over an older building?": rows 20 and 21 in the verifier's wording, the count with its day from `findings.json`. **Homes strip** "Find your Myrtle Beach condo. We check its building for lawsuits." (pill until the place exists).
5. **How long does condo litigation last on the Grand Strand?** 7 to 14 years (row 35). **Chart** "Grand Strand condo lawsuits ran 7 to 14 years" (three cases on a 2000 to 2026 track, from `chart-timeline.json`; Renaissance Tower is not drawn, since its end is row 34). Riverwalk and Magnolia North (rows 23 to 28), Wedgewood (row 29 CORRECTED), Renaissance Tower (rows 31, 32, attributed to the owners' lawsuit). **The wow**: a card, "51 Renaissance Tower units changed hands in the past year, after the evacuation and the owners' suit", then 37, 23 and 8 at the others (row 33, no denominators). **Offer**: "Want a building's court record before you offer?" / "Ask about one building".
- **FAQ** (5): FHA loan, dues suits, does the seller have to tell you, how long, can you sell. Each repeats an answer on the page.
- **End band**: "Found a condo in a building with a lawsuit?" / "Send us the building" (keeps the July page's "before you risk a dollar").
- Every button links to /contact/; the strip's pill to /contact/?place=Myrtle%20Beach.

Cut from the July page: the story (row 36, not in stories.json), "Conventional, FHA and VA all decline", VA (no row), "defect lawsuits tend to cluster as a building matures", the "non-warrantable" FAQ, "our preferred lender", "So instead of walking away", "The play", the blanket disclaimer.

Never on the page: a rate, payment or down payment figure; a name from a caption; a unit, address or value; any view of a named building's loan status today; the Renaissance case's end; court images.

## Files

- Spec: `<website>/specs/condo-in-litigation.js`
- Page: `<website>/chapter3realty/buyers/condo-in-litigation/index.html`
- Data: `<website>/data/2026-11-b/buyers-condo-in-litigation/photos.json` (new: the reused USGS record with this page's reuse note). Other data files unchanged.
- Share card: `<website>/chapter3realty/images/2026-11-b/buyers-condo-in-litigation/share.jpg` (tools/ogcard.js, moved out of og/; spec `ogImage`).

## Gates (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /buyers/condo-in-litigation/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,668 words of prose |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page (4 wrong sentences elsewhere, all old: from-massachusetts, from-virginia, llms-full.txt) |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js` (this page's list, and NW's, CF's, CB's) | no struck wording |
| `node tools/repeat-check.js --strict`, `structure-check.js --strict` | pass |
| Sentence scan of `<main>` | none over 28 words, no "So"/"And"/"But" opener, no "Here is", no dashes |
| `node tools/critic.mjs http://localhost:8873 /buyers/condo-in-litigation/ --widths 390,1024,1440` | 0 blocking, 0 warnings |
| `node build.js check` | OK |
| `node build.js audit` | no FAIL on this page except the two mkpage date lines (dateModified and "Updated" against the sitemap). Note: no attributed sentence from a named licensed person (we write none). |
| `node tools/inbound.js <site> --only /buyers/condo-in-litigation/` | 6 referring pages |

Fixed after the first look at the shots: the critic blocked a blog with no photo (the USGS photo added); a wall of text in the Renaissance part at 390 px (the 51 now sits in a card); the table's third column wrapped "Yes, if losing would not hurt the association" into four lines on a phone (each answer now on its own labelled line); the timeline's track was too short at 1440 px (a narrower name column); "safety, structure, livability or use" said five times (now three); the hidden hero sub said "we" and ", not X" (audit).

## Shots

Looked at full size at 390, 1024 and 1440 px.
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-condo-in-litigation/shots/buyers-condo-in-litigation-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-condo-in-litigation/shots/buyers-condo-in-litigation-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-condo-in-litigation/shots/buyers-condo-in-litigation-1440.png`
- critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-condo-in-litigation/critic.json`

The preview does not run the site's edge, so the page feed and the strip are empty in the shots; the strip shows its pill.

## For the lead

1. **New homes place** for `batches/2026-10-b/data/idx-places.json` (not edited here): slug `myrtle-beach-condos`, name "Myrtle Beach", q `{"type": "condo", "near": "33.70882,-78.88539", "miles": 3}` (the town-myrtle-beach point), `index: false`, pages ["/buyers/condo-in-litigation/"]. Strip title on the page: "Find your Myrtle Beach condo. We check its building for lawsuits." Not checked live from here: confirm 10 or more results.
2. **Page feed**: `idx-lib/feeds.js` maps this page to OCEAN_CUT ("Oceanfront condos with a price cut"), which fits the page's deal idea. Add **`withStrips: true`** for this URL, since the page now carries a named strip; without it the edge drops the feed. A bolder head, if wanted and true by its filter: "Oceanfront condos where the seller already cut the price".
3. **Owner question (story), the strongest thing the July page had.** Row 36: the oceanfront unit in a building in a structural-defect suit, repairs done, closed the week the suit ended. Not in `stories/stories.json`, so it is off the page. Proposed: record it as the July page told it (commit b6ce1657), with "more than a thousand dollars in earnest money", "one of the agent's best sales" and "steep discount" only if he confirms. It would go at the top of "When is a condo in litigation a good deal?", 4 to 6 sentences, ending "one buyer's result, not a promise".
4. **Owner question (service).** Does the team search the Horry County court index by the association's name and get the complaint and the attorney's letter on every condo purchase? The page says only what row 37 allows ("our building review on every condo purchase covers any lawsuit") and states the court index as a fact, not as our step. A yes lets section 3 say "We search the county's court index under the association's name" (the verifier's safe wording, row 18).
5. **For a verifier (short re-check).** The table's cells were not ruled on in VERIFY.md. "Usually not" for an FHA loan where the association sues the builder over repairs already made rests on row 10 (HUD has no repairs-done exception, and a defect suit relates to structure). "Yes" for conventional and FHA in the dues and insured-suit rows rests on rows 3 and 9 to 10, with the note under the table. The sentence "Fewer buyers can get a loan there while the suit runs, so fewer buyers compete for each unit" is reasoning from rows 1 and 10, not a row.
6. **Referring pages** to add in body text (owner, 2026-11-09), on words already there: /hoa/documents/ (its lawsuit red flag), /hoa/special-assessments/ (where owners went to court), /invest/condos/, /sell/sell-my-condo/. Six pages link here today.
7. **Renaissance Tower's end** (row 34): the dismissal order is on PACER, 4:22-cv-03556, if the owner wants the outcome on the page.
8. **Photo partner** (optional): nothing needed. The page reuses the USGS 2011 aerial already on /invest/condos/ and /invest/non-warrantable-condos/ (third use). A new photo of Grand Strand oceanfront towers, no named building, would end the reuse.
