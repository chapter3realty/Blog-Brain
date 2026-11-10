# Review 1 fixes: /hoa/south-carolina-hoa-laws/

The reviewer's verdict was pass=false, score 8: two blocking items and twelve nits. I edited only the website spec `specs/south-carolina-hoa-laws.js` and rebuilt it with mkpage. I added no new fact; every changed line uses a ledger row that was already VERIFIED or CORRECTED. I did not touch the data folder, the images folder, idx-lib/ or partials/.

## Blocking

1. **The repeated H2 "Can an HOA fine you, foreclose, raise dues or ban rentals in South Carolina?" is gone.** Its five rules repeated the question table, and the H2 competed for /hoa/violations-and-fines/'s search.
   - The table lacked two facts, and both are now in it. The fines row adds "Whether a fine can become a lien depends on the papers" (row 25). The foreclosure row already said the condo lien comes from the condo law and a neighborhood's comes from its papers.
   - The NC and Florida comparison now has its own H2, "How do South Carolina's HOA laws compare with North Carolina and Florida?" (TOC "Other states"). It sits right after "Which law applies". No sibling page has this H2: violations-and-fines never mentions NC or Florida, and the from-north-carolina and from-florida pages do not cover HOA law. The story-bank offer ("Have us read the papers") moved with it.
   - The "no cap on fines" fact now appears in the hero tile, the short answer, the table row and the SC row of the three-state table. The SC row is needed for the comparison.
   - "$7,500" now appears in four places, down from five: the short answer, the table, "Where an owner can take a dispute" and the "Can I sue my HOA" FAQ. The hero tile now shows row 47's local count instead: "About 700 association papers recorded in Horry County in the past 12 months". The "What is the HOA Act" FAQ now says "lets magistrate court hear money disputes under the Act", with no figure.
2. **There is now one complaint figure per place.**
   - Step 5 now says only what happens: "Consumer Affairs closes it and counts it in its yearly report. It says the data helps lawmakers decide if the law needs to change." That is row 17, and it replaces the 452/68/19/4 figures.
   - After the steps, one line gives the statewide one-year figure: "In 2025, 140 of the 452 HOA complaints in the state's yearly report, 31 percent, were about associations in Horry County."
   - Then: "We counted how the state closed Horry County's 416 complaints over four years, 2022 to 2025:" and the chart.
   - The FAQ "Can I complain about my HOA to the state?" now uses the same Horry figure (10 of 416), not the statewide 4 of 452.

## Nits taken

- **Read walls.** The 320 px wall in #unenforceable is gone. The 2019 paragraph and the count list were cut, and the Hilton Head case is now a fifth bold line in the rules list ("An unclear rule"). The wall in #complaint is gone too: the row 17 paragraph was cut, and the two short lines now lead into the chart.
- **"Where the rules are filed"** is down to two short sentences and a link (row 48): the county's index is online, copies come from the Register of Deeds in Conway, and /hoa/documents/ shows which papers to get. The 2019 count (row 46) and the 400 and 60 counts are off this page; /hoa/documents/ owns them.
- **The "6 in 10 outside the Loris area" line was dropped.** /hoa/ owns it. The Census PUMS source left the sources line with it.
- **Second chart title** is now "The change Horry County HOA complaints named most: open meetings". It names complaints, not owners (row 21). I did not use the suggested "What Horry County owners want changed most", because it is close to row 21's struck framing (owners asking the state).
- **Step 1** now leads with the action: "Raise it with the board first. Talk with the board, and check your HOA's papers for a dispute process. That is Consumer Affairs' first advice." The 98 percent follows (row 52). The step leaves out "in writing" because the ledger does not say it. The "HOA's own process" line in "Where an owner can take a dispute" was cut, so the advice is not said twice.
- **Who enforces.** The clause "none will overturn your HOA's decision" is gone. The paragraph now reads: "No state agency enforces South Carolina's HOA Act. In its own words, Consumer Affairs "does not administer or enforce" the Act." It ends with row 14's "cannot ... require an outcome". I did not use the reviewer's "cannot make the HOA change its decision", because that is not row 14's wording either.
- **Florida and North Carolina line:** "Florida's limits cover HOAs, not condos. North Carolina's cover planned communities."
- **The row 17 sentence on the January 31 report** was cut. Its one useful clause is in step 5.
- **Bills:** the line is now "Not yet. None of the five HOA bills below, from the 2025-2026 session, has become law." The H3 is now "Five HOA bills from the 2025-2026 session". The "dies if it is not passed" clause is gone, so the line stays true after the session ends. Before release, still re-check each bill's status line ("now in ...") against the five bill pages (row 42, stale by 2027-01).
- **The Florida hearing cell** is now two sentences: "Yes, with 14 days' written notice. The hearing is before a committee of ..." (row 44's wording).

## Declined or left to the lead

- **The end band's centering at 1440 px** is site-wide. It is the same end-band CSS as garden-city.js and hoa.js. It is not this page's fix.
- **The empty homes feed in the preview.** The NO_HOA feed comes from idx-lib, which I may not edit. The empty feed is the preview's sample data. The lead should confirm the live feed fills, and set the bolder title from BUILD.md: "No HOA, no board, no fines: homes for sale now".
- **"The HOA Act has no rule on late fees, fines, liens or foreclosure"** in "Which law applies" stays. It is one of the Act's five topics in reverse (row 6), and it is not a repeat of a table row.

## Gates after the fix (rebuilt with `node tools/mkpage.js specs/south-carolina-hoa-laws.js`)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-10 score.js --only` | 100/100 (SEO, AEO, Human, Trust all 100), 2,025 words of prose (was 2,393) |
| claims-scan | 0 findings |
| facts-check | 0 on this page. The same 4 older lines on other pages remain (from-massachusetts, from-virginia, llms-full.txt) |
| house-claims | 0 |
| struck-check (21 patterns) | no struck wording |
| repeat-check --strict | passes |
| structure-check --strict | passes |
| build.js check | OK |
| build.js audit | Only the mkpage date lines (dateModified and "Updated" vs sitemap lastmod) and the usual "~" note asking for a quote. I did not run `node build.js dates`. |
| inbound.js --only | 11 referring pages |
| critic.mjs on the preview (port 8874), widths 320, 390 and 1440 | 0 blocking and 0 warnings at all three widths. The 320 px read.wall warnings are gone. |

I looked at the shots for the hero, the comparison H2 and table, the unenforceable list, who enforces, the complaint steps, the chart, and the bills section. Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/fix-sclaws/shots/` (320, 390, 1440). Slices: `.../fix-sclaws/sl390/` and `.../fix-sclaws/sl1440/`. Critic JSON: `.../fix-sclaws/critic.json`. The spec as it was before this round: `.../fix-sclaws/spec-before.js`.

H2 order now: The laws, Which law applies, Other states (NC and Florida), Unenforceable rules, Records and meetings, Who enforces, Complaints, Changes, FAQ.
