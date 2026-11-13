# Review 1: /buyers/flood-zone-check/ (fix round)

Reviewer: pass=false, score 8. Three blocking items and nine nits. Fixer, 2026-11-13. Nothing deployed, nothing committed.

## Findings declined or changed

- **Blocking 1, the word "our" in the sub.** Declined in part. `build.js audit` fails any hero sub with "we/our/us" (line 2189, an owner rule, and the website's rules win). The sub now scopes the count to the search we measured without that word: "Of Horry County homes for sale in FEMA's high-risk flood zone, about 4 in 5 did not come up in this site's home search filtered for flood zone." (28 words by mkpage's count.) The reader cannot take it to mean Zillow or any other site. The meta description and share title now say "our home search" too ("a home search" there had the same fault).
- **Nit, step 2 "the zone is printed on the shaded area as ZONE AE".** Declined. No verified row says how FEMA's viewer prints the zone, and I could not open FEMA's viewer pages from here. Step 1 is now our property records search, which names the zone and what it means, so the reader no longer needs to read FEMA's map unaided. Step 2 still points to the table for what each letter means.
- **Nit, replace the Crescent Beach photo with the lookup tool's result card.** Not done this round. A screenshot of the card would show a real address and needs a licence record as our own image. The photo's caption carries its point (about 1 in 3 North Myrtle Beach homes for sale is in the zone), and the critic finds no photo problem. For the lead: a card screenshot at the courthouse (a public building, Zone X) would be a safe choice if the owner wants it.
- **Nit, the homes feed and the cannibalization items.** These touch idx-lib and other pages, which this round may not edit. They are in BUILD.md "Lead items" (items 3, 6 and 10).

## What changed (spec `specs/flood-zone-check.js`, rebuilt with mkpage)

1. **Truth (blocking 1).** Sub: "did not come up in this site's home search filtered for flood zone". Short answer: "Do not count on a home search to tell you" is gone. Meta description and og title: "our home search".
2. **First-screen repetition (blocking 2).** The 4 in 5 finding is said once, in the sub. Short answer paragraph 3 is now "Do not count on a search filter. We check FEMA's map for every house you send us." The chart title gives the counts: "Of 1,122 homes for sale in the high-risk flood zone, 231 came up under our flood zone filter". The chart's screen-reader label no longer repeats "about 4 in 5". The 320 px wall in the opening is gone.
3. **FAQ repetition (blocking 3).** The map-date paragraph is cut from the body (the FAQ "How new is Horry County's flood map?" keeps it). The cash-buyer list line is cut from the body (the FAQ keeps it). The ZIP code FAQ, which repeated the photo caption word for word, is replaced by a new question the body does not answer: "Can I use private flood insurance for the loan?" (row 22, 42 U.S.C. 4012a(b)(1)(B); row 23 note on a private policy's own wait). The Zone X FAQ no longer repeats the table; it adds FEMA's recommendation (row 24's FloodSmart source). `repeat-check --strict`: 0 identical or near sentences.
4. **Our lookup tool as step 1 (nit).** Tested at VE by the fixer (an address point inside a county VE shape, matched by the county locator through `prPickMatch`, FEMA NFHL layer 28 through `prFlood`: "Zone VE: high risk, from tidal flooding with waves..."; the county copy agreed). AE and X were tested in a real browser by the property-records build. New ledger row **14b, VERIFIED-BY-FIXER**. Step 1: "Type the address into our free property records search. It reads FEMA's flood map at the address, then names the zone and what it means." The short answer links it too. The H2 is now "Three steps to check an address". Struck row 14's pattern does not fire on this wording; the lead may retire that struck entry, since its condition (tested at AE, VE and X) is met.
5. **Elevation certificate reason (nit).** New ledger row **29, VERIFIED-BY-FIXER**: FloodSmart's cost page, "Elevation certificates aren't required to get flood insurance, but they can help you pay less." (saved to `data/2026-11-d/flood-zone-check/raw/web/floodsmart-flood-insurance-cost.html`; added to Sources as "costs"). The section is now one opening sentence and three short labelled lines: why you want one, when the rules require one (row 26 safe wording), where to find one (row 27).
6. **Plain words (nits).** "zone A, AE or VE" in the short answer, matching the table. "a 1 in 4 chance or more over 30 years" (row 19: 1 percent or greater gives 26 percent or more). "At every price, fewer than 3 in 10".
7. **Lender section.** With the cash-buyer line gone, the 320 px critic found a new 991 px wall. The NFIP wait and "Before you offer" are now two short labelled lines under thin rules.
8. Small fixes the gates asked for: "in plain words" (audit punch rule) reworded; a 29-word short-answer sentence split; "The law tells lenders" (P10) now "Under federal law, a lender must accept..."; the sources block cut to 90 words; the orphan "too." at 390 px removed.

## Gates after the fix

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/flood-zone-check.js` | wrote the page, hero sub 28 words, no notes |
| `SCORE_TODAY=2026-11-13 node tools/score.js --only /buyers/flood-zone-check/` | 95/100 (was 94). SEO 96, AEO 97, Human 96, Trust 79. S8 50% (1 inbound page now: /buyers/property-records/); A10 67% (2 places); P6 the zone letters and "elevation certificate" (the words this reader searches, each explained); T2 1 first-hand sentence. |
| `node tools/claims-scan.js wt-139` | 0 findings |
| `node tools/facts-check.js wt-139` | 0 on this page |
| `node tools/house-claims.js` | 0 sentences |
| `node tools/struck-check.js buyers-flood-zone-check-struck.json` (and `--batch --preview --strict`) | no struck wording |
| `node tools/repeat-check.js --strict` | passes, 0 identical, 0 near |
| `node build.js check` | Safe to deploy |
| `node build.js audit` | only "missing from sitemap.xml" fails (lead). Warnings: not in llms.txt; no Tim Nash sentence (none in the story bank). The orphan error is gone. |
| `node tools/critic.mjs http://127.0.0.1:8893 /buyers/flood-zone-check/ --widths 320,390,1440` | 0 blocking, 0 warnings at all three widths (was 1 warning at 320) |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/flood-zone-check/fix1-shots/` (320, 390, 1440), crops in `.../fix1-crops/`, critic JSON `.../fix1-critic.json`. I read the 320 and 1440 opening, and every 390 crop: the sub says the finding once, the short answer is three short paragraphs, the chart title gives 231 of 1,122, the lender and certificate sections read as short labelled lines, and the FAQ has five questions. The preview server on port 8893 is stopped.
