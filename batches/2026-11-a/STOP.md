# Stopping point, 2026-11-03

## Live and ready

| Patch | What | State |
|---|---|---|
| v1.20 to v1.27 | Search fixes, the first 15 rebuilt guides, Chapter3 AI | Pushed by the owner to the live branch (ends at "Chapter3 AI ..."); deploy with `.\deploy.ps1` from C:\c3 |
| v1.28 | Group 3 (cost to own, condos, rent prices, where to buy, Murrells Inlet), the STR data refreshed sitewide, the relocating pages' frozen chrome | Ready. Applies on the live branch (tested) |
| v1.29 | Nothing cut off on a small phone: the homes row's search wraps below 380 px; the neighborhoods hub title fits at 320 px | Ready. Applies after v1.28 (tested) |

## The check before stopping

The browser critic (`tools/critic.mjs`) was run at 320, 390 and 1440 px on every page these patches touch:
- the 20 rebuilt guides;
- /invest/airbnb-income/, /invest/rental-returns/ and /buyers/second-home/;
- the /invest/ and /submarkets/ hubs;
- the analyzer.

**All 20 rebuilt guides have no blocking finding.** The one thing cut off sitewide was the homes row's search at 320 px, which ran 44 px past the screen on every page with a homes row; v1.29 fixes it.

These blocking findings were already on the live site before these patches (checked against chapter3realty.com), and none is a cut-off. Left for the next round:
- **No real photo:** /invest/airbnb-income/, /submarkets/, /invest/long-term-rental/, /buyers/relocating/beaches/ and /sell/.
- **/buyers/second-home/:** no answer on the first phone screen.
- **/invest/long-term-rental/:** 17 questions in the FAQ schema that are not shown on the page (an SEO risk). One paragraph is set at 14.5 px on a phone.
- **/sell/:** one paragraph of small text.

## Group 4, stopped by the owner

| Page | Saved |
|---|---|
| /submarkets/north-myrtle-beach/ | must-answer, fact ledger, plan, shot list (research done; not verified) |
| /submarkets/surfside-beach/ | the same, plus NEEDS |
| /buyers/buying-in-myrtle-beach/ | must-answer and shot list only |
| /buyers/relocating/which-town/ and /buyers/relocating/why-myrtle-beach/ | nothing |

To restart: run `workflows/redesign-batch.js` (now the leaner line, `FASTER.md`) with these five pages. The researchers will find the saved ledgers in each page's folder.

## Still to do, in order

1. Group 4 (the five pages above).
2. The seven unshipped 2026-10-d pages, one fix and one re-check each (`BRIEF.md`, "Open items").
3. The pre-existing critic findings above.
4. Weak pages from the judges' file not yet scheduled: 24 articles and 10 hubs (owner's count, 2026-11-03).
5. Photos: `photo-request-group-1.md` to `-3.md`, sent once Gmail is connected.

## v1.30, 2026-11-03: more offers and plainer words on the 20 rebuilt guides

The owner asked for more offers mid-page, simpler words and the most wanted answer first. Each of the 20 pages now has an offer after about every second section, tied to that section; its top is reworded for a first-time buyer; no fact changed. A separate reader checked each set of five, and fixers applied every item. The new score rule H5 (one offer per two sections) passes on all 20. The critic finds nothing blocking at 320 and 390 px on the six pages sampled, and audit and check pass. v1.28, v1.29 and v1.30 apply in order on the live branch (tested).

Open: /hoa/special-assessments/ still words "special assessment" differently from /hoa/reserves/ ("a one-time bill to each owner for a cost the fund cannot cover"). Match it when that page ships.

## v1.31, 2026-11-04: the seven unshipped 2026-10-d guides

/sell/out-of-state-buyers/, /hoa/special-assessments/, /buyers/first-time-home-buyer-myrtle-beach/, /buyers/new-construction/, /hoa/hoa-vs-poa/, /invest/str-vs-ltr/ and /invest/str-tools/.

The line used was `workflows/finish-batch.js`:
1. One fix from each page's last review and the brief's open items.
2. A re-check, beside an independent check of every new fact.
3. The lead applied the verifier's sentence corrections: the SC hold-back on "the price less your selling costs"; Socastee "west"; Arcadia's builders; the amenities row on HOA vs POA; the hedged HOA sentence on STR vs LTR; the Sea Shadow fees.
4. The offers and plain-words pass, a reader check and its fixes.
5. The lead shortened three button labels on new construction that were cut off at 320 px.

Results:
- claims-scan finds 0 banned claims on the whole site; the last 10 were on these seven old pages.
- struck-check is clean, and the critic finds 0 blocking at 320, 390 and 1440 px.
- audit and check pass.
- v1.28 to v1.31 apply in order on the live branch.

## v1.32 and the rebase, 2026-11-04

v1.32 is group 4: North Myrtle Beach, Surfside Beach, buying in Myrtle Beach, which town and why Myrtle Beach. The two relocating guides now build from specs.

**The live branch moved.** Another session pushed 257a5a6, the seven election guides, on top of v1.27. That commit changed `tools/mkpage.js` (a co-author byline), the dates on about 20 pages, llms.txt and the sitemap. v1.28 to v1.32 no longer apply to it.

**Rebased as v1.33a to v1.33d.** Use these on the live branch instead of v1.28 to v1.32. They apply in order on 257a5a6 (tested), and the pages, specs and code match the lead's copy file for file.
- a: data for the 2026-10-d guides
- b: data for the 2026-11-a guides
- c: images
- d: pages, specs and code

The six pages both sides changed are rebuilt from their specs with the new mkpage.js. llms.txt is merged, keeping the seven election entries. The roads-and-permits guide drops two keywords other guides own, after the audit flagged them as cannibalisation.

All gates pass on the result:
- `build.js check` and `audit`
- `idx-test`
- claims-scan: 0 findings
- facts-check: only the 7 old hits

The packaging copy is now a full clone of the live branch with the four parts applied. Every later patch is built on it.

## v1.34, 2026-11-04: group 5

The pages are /hoa/documents/, /hoa/tax-deductible/, /invest/property-management/, /invest/rental-program-vs-airbnb/ and /sell/fsbo/. Built in the packaging copy, which is the live branch with v1.33a to v1.33d applied. The lead applied the re-check's open items:
- **HOA documents:**
  - The chart that compared a month with whole years is cut.
  - Two repeats are cut.
  - "We pull the pages at the county for you."
  - "May face the same review."
- **Property management:** the H1's second line no longer repeats the short answer.
- **Rental program vs Airbnb:** four sentences are scoped to their source.
- **FSBO:**
  - The Attorney General's 2007 opinion is stated as what it is.
  - "Did not actively market it".
  - A card no longer repeats the steps.

Results:
- Scores are 99 to 100, and H5 passes on all five.
- struck-check, claims-scan (0) and facts-check (only the 7 old hits) pass, and so do audit and check.
- The critic finds 0 blocking at 320, 390 and 1440 px.
- v1.34 applies after v1.33d on the live branch (tested).

## 2026-11-07: one main question, titles, and the trim pilot

- Research and plan: `research/one-question-pages-2026-11.md`. Rule `focus` (STANDARD A14) in `tools/score.js`; CRAFT 1 and 7; the builder brief.
- `website-patches/v1.35-titles-that-match-the-search.patch`: eight titles and descriptions (property taxes, closing costs, home and flood insurance, STR rules, 55+, Carolina Forest, HOA fines, HOA vs POA). Applies after v1.34.
- `website-patches/v1.36-pilot-one-question-trims.patch`: which town, Pawleys Island, FSBO, HOA liens, condos cut to one main question. Cut only; `tools/trim-check.js` clean on all five. Applies after v1.35. Waiting for the owner's look (preview artifact https://claude.ai/artifact/8NGL4UAzvB9GP6Dvp6sxBg).
- Deploy order: v1.33a, v1.33b, v1.33c, v1.33d, v1.34, v1.35, then v1.36 once approved. Run `node build.js dates` after applying.
- Working copy for the next trims: scratchpad `wt-titles` (a worktree of pkg2 at the v1.36 commit). 26 more rebuilt pages are over the cap (list in the focus results).
- Open: the election guides compete with property taxes, STR rules and insurance (research file, section 5), awaiting the owner. The condos title should add "oceanfront". Phone length is now mostly charts and tables; one chart per question is the owner's call.

## 2026-11-07, later: rebased on the live branch, titles restored, election guides

- The live branch moved to 87f7d0f8 (election hub, dates from full history). v1.33d to v1.36 were rebased. Deploy from `website-patches/v1.37-on-87f7d0f8/README.md`: v1.33a, v1.33b, v1.33c, then 0004 to 0009. Do not apply v1.33d, v1.34, v1.35 or v1.36.
- Working copy: scratchpad `wt-live` (a worktree of pkg2, HEAD d8dacb12).
- Photo emails: both written (`batches/2026-11-a/photo-emails/email-1.txt`, `email-2.txt`), to Hijazi.car@gmail.com, cc Devinday19@gmail.com. Not sent: the connected Google account has no Gmail mailbox ("User has not been assigned a storage replica").
- Which town fits you, redesigned as a comparison landing page (research: `research/comparison-landing-page-2026-11.md`): `website-patches/v1.37-on-87f7d0f8/0010-...`. The full chain (v1.33a to c, then 0004 to 0010) applies on 87f7d0f8. Open: the mid-page offer boxes sit half-width on a desktop; on a phone the nine filter chips stack in a tall column; the phone page is a little longer than before (35,200 px against 33,300) because the table and card facts were added.
- Round 2 of the pilots (2026-11-07): the five pages restored to their full versions (0011, 0012) and redesigned with every word kept (0013). Each page's DESIGN.md (what is good, what looked wrong, what changed) is in its batch folder. Deploy: v1.33a to c, then 0004 to 0013. Open: the condos contents label "Myrtle Beach condo investing FAQ" needs a `faqToc` option in mkpage.js to shorten; the shared MLS strip sits between the hero and the short answer on every page.
- 2026-11-08: the 13-town page as first built and Devin Day the author everywhere (0014); nine more guides redesigned the approved way (0015): North Myrtle Beach, buying in Myrtle Beach, STR tools, DST, Garden City, reserves, rental program or Airbnb, Myrtle Beach, HOA documents. DESIGN.md in each batch folder. Deploy: v1.33a to c, then 0004 to 0015, then `node build.js dates`. Not yet given this treatment: the other 23 rebuilt pages. Left alone on purpose: the 13-town page and /invest/where-to-buy/ (a long list page, the owner's call). Scores: `reports/scores-2026-11-08.md`.
