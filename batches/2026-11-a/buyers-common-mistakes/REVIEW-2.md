# Review round 2: /buyers/common-mistakes/ (batch 2026-11-a)

Fixer, 2026-11-02. Re-check result was pass=false, score 8.5, with one blocking item. All changes are in `specs/common-mistakes.js`; the page was rebuilt with `node tools/mkpage.js`.

## Gates after the fixes

- score.js: 99/100 (SEO 100, AEO 100, Human 98, Trust 100). Left, as in round 1: P6 at 75% on "Legal Residence Application" (the county's name for its form); H14 at 83% (the ranked list counts as a contents list; NEEDS 6).
- claims-scan: no hit on this page. facts-check: no hit on this page.
- house-claims: 0 sentences to scope or source.
- critic.mjs on port 8784 at 320, 390, 1024 and 1440: 0 blocking. One warning at 320 and 390, read.wall on the FAQ's last answer, the known false hit (NEEDS 7).
- build.js check: OK. build.js audit: the only FAIL lines for this page are dateModified and "Updated", which wait for `node build.js dates` (the lead runs it). A20 stays a warning; we write no quote for Tim Nash.
- Shots looked at: hero at 390 and 1440 (tile reads "8 in 10 listings do not say so"), the flood chart at 390 and 1440 (houses row only).

## What changed, by finding

1. **Blocking: HOA share named Horry County.** Fixed. The entry now says "About 7 in 10 houses for sale on the Grand Strand have an HOA fee." Row F4 counts the whole CCMLS feed, so the Grand Strand is the right name. facts.md row F4's page wording is updated to match. No re-count was needed.
2. **Nit: deck and short answer say the same sentence.** Fixed. The short answer now opens with its own fact: "Of people who bought a house in Horry County in 2024 and get its tax bill at that house, about 1 in 7 are still taxed at 6 percent. That is the costliest mistake here, and it comes back every year until they apply for 4 percent." First sentence is 29 words (score A2 needs 30 or fewer). The deck is unchanged.
3. **Nit: too many numbers in entry 4.** Taken. The condo row (814/636/178) is cut from the flood chart. The chart and its captions now say "Houses". The flood insurance table ($550/$1,070/$1,370) stays; it answers what the zone costs a buyer.
4. **Nit: hero tile drops "in the listing".** Fixed. The tile reads "8 in 10 listings do not say so". The body and chart caption keep "in their listing's feature list".
5. **Nit: county refund exception (12-43-220(c)(3)).** Not changed. "Under state law, you have two years" stays true, and the exception depends on a county council vote we have not found for Horry County. Adding it would send the reader to check something. A lead may add it if a council ordinance is found.
6. **Nit: F6 (Freddie Mac) not re-checked by the reviewer.** No change to the page. The lead re-checks F6 with the other VERIFIED-BY-FIXER rows.
7. **Bar labels at 320 and 390, critic, header and search box.** Confirmed fixed in round 1; critic.mjs shows no page scroll at 320 or 1024 after this rebuild.
