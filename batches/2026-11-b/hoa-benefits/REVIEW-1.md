# REVIEW-1: /hoa/benefits/, fix round 1 (2026-11-10)

The reviewer's verdict was pass=false, score 8. All four blocking items are fixed in `specs/hoa-benefits.js`. The plainly right nits are taken. Two nits are declined, with reasons below.

## Declined, with reasons

- **"Are condo fees worth it in Myrtle Beach?" has no local number.** Declined for this round. No verified row in this ledger gives a local condo figure that this page owns. The fees building by building belong to /invest/condo-buildings/, and the master policy belongs to /hoa/master-insurance-ho6/. Adding one of their numbers here would compete with those pages. The section answers the question and sends the reader to the page that owns each detail. The reviewer called this fine for cannibalization.
- **The H2 "What does an HOA fee pay for?" sits close to the hub's "What do HOA fees cover in Myrtle Beach?"** Kept. The reviewer rated the risk low: this section is one community's budget, line by line, and the hub's is listing fields. The section links to the hub in its last paragraph.
- **The byline shows "Updated July 29, 2026" in the preview.** This is not a page fault. `build.js audit` still reports the schema and visible date against the sitemap lastmod. The lead's `node build.js dates` run clears it. It was not run here, as instructed. The lead should check the byline after that run.
- **P9 partial (75%): "posted rules list".** Kept on purpose, as in the first build. The verifier asked that the Del Webb amenity list be tied to the community's posted rules. It is now one item in a short list, not a paragraph.

## What changed

### Blocking

1. **Property value, first sentence.** It was "HOAs do not raise asking prices here." It is now the reviewer's wording: "Not in asking prices. Here, newer houses with an HOA fee list for less a square foot than houses without one." The 2019 study and "Our count here compares asking prices and does not show a cause." are now in the same list item, so the three answers no longer disagree.
2. **Del Webb at Grande Dunes.**
   - The Pulte 2017 sentence is cut (VERIFY row 15: it pulls against row 11). Its source link is removed. The sources box is down to 15 links.
   - The H3 opens with the master association's Ocean Club statement (row 12, verifier wording).
   - A short list follows: the Ocean Club, the amenity center (the posted rules) and what is not allowed.
   - Then what the reader pays: "What you pay: every owner pays a mandatory Beach Club fee to the Grande Dunes master association, on top of the association's own assessments." This is row 11, in the verifier's wording.
   - Then: "A Del Webb house lists a fee of about $400 a month. We check what that figure covers, and what the master association bills on top, before you offer." This is row 17. It never says the listing fee includes the club (H struck list 11).
3. **The Farm's wow factor and strip title.**
   - New sentence, before the pool photo: "From April 15 to October 15, both pools stay open until 9 p.m., so a swim after work is part of what the fee buys." This is new row 46, VERIFIED-BY-FIXER. The fixer downloaded the recorded 2024 amenity rules and read the hours line by OCR. TF row 61 also has it.
   - New list item "On The Farm's north edge": "The state bought land there for a nature preserve. That land holds habitat for the Venus flytrap." This is new row 47, VERIFIED-BY-FIXER, from the SCDNR release of June 10, 2025, re-opened today, and TF rows 79 and 99. It does not say the land is dedicated or open.
   - The Farm's rules sit beside it as "The trade-off", so the section no longer ends on a bare paragraph of rules.
   - The strip title was "Homes in The Farm, where $107 a month includes cable TV". It is now "Homes in The Farm, with pools open until 9 p.m. all season".
4. **Two sentences over 28 words, each split in two.**
   - Fannie Mae: "...no more than 5 percent of its coverage. When it is charged per unit, the limit is $50,000 a unit."
   - The New York buyers story: "The biggest mistake we see buyers from New York make is not checking that the community's rules fit how they live. That means the HOA rules on boats, golf carts, rentals and pools." This keeps the approved rules-fit version in stories.json.

### Nits taken

- **Property value.**
  - The ZIP sentence now opens "Counting houses of every age, ..." and ends "Among newer houses only, it is 10 of 10."
  - The three paragraphs after the chart are now a short list: "ZIP code by ZIP code", "What a national study found" and "Often there is no choice". This removes the 929 px and 1100 px walls.
- **Room for a boat or an RV.** It now opens "Our listing feed covers the Grand Strand from Pawleys Island into North Carolina. In it, about 3 in 100 houses for sale with an HOA fee list parking...". This is VERIFY row 36's scope.
- **Beach club intro.** It now reads: "Two places here have one: the Grande Dunes Ocean Club for Del Webb at Grande Dunes owners, and a private ocean cabana in parts of Barefoot Resort." Barefoot is a cabana, and the master association's statement is no longer said twice.
- **#beach-club wall at 320.** The Del Webb run is now a list, like Barefoot's.
- **FAQ heading.** It is now "Common questions about HOA fees".
  - "Is an HOA worth it? Quick answers" was tried first. `build.js audit` read the "On this page" labels as the pseudo-cleft "What we check Is", and repeat-check stopped seeing the section as an FAQ.
- **Myrtle Trace strip title.** It is now "Myrtle Trace homes with fifteen ponds to fish".
- **Feed title for the lead (BUILD.md item 1).** It is now "Newer homes with a neighborhood pool and clubhouse". It is true to the AMENITIES filter: built in 2000 or later, a community pool and a clubhouse.
  - BUILD.md now says plainly not to ship before lead items 1 and 2 are in.
  - Strip titles in BUILD.md item 3 are updated.
- **Ledger.** `facts.md` has rows 46 and 47 (VERIFIED-BY-FIXER, with sources and quotes). The spec header lists them and says row 15 is no longer used.

### Kept as the reviewer asked

- The first-screen answer.
- The question headings.
- The budget chart.
- The gate list.
- Chart C.
- The six-item checklist.
- Every request button goes to /contact/ (12 links).

## Gates after the fix (port 8876 preview, `tools/preview.mjs`)

| Gate | Result |
|---|---|
| `score.js --only /hoa/benefits/` (SCORE_TODAY=2026-11-09) | 99/100: SEO 100, AEO 100, Human 99, Trust 100. P9 is 75%, from "posted rules list" (kept, see above). |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 hits on this page. The 4 known wrong sentences are elsewhere, as before. |
| `house-claims.js` | 0 |
| `struck-check.js --strict` | hoa-benefits (37 patterns): no struck wording. "Next door" was caught as struck CRAFT 2 wording; the label became "On The Farm's north edge". |
| `repeat-check.js --strict` | passes |
| Sentence check (28 words, "So", "Here is", em dash) | 0 in the body |
| `critic.mjs` at 320, 390, 1024, 1440 | 0 blocking, 0 warnings. A first pass flagged 917 px at 320 in #what-it-buys; it was fixed by the north edge and trade-off list. |
| `build.js check` | OK, safe to deploy |
| `build.js audit` | Only the mkpage date lines (cleared by `build.js dates`) and the advisory A20 note on quoting Tim. No quote was written. |
| `inbound.js` | 6 referring pages |

Not run, as instructed: `build.js stitch`, `dates` and `llmsfull`.

The shots are in `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/r1/shots/` (`hoa-benefits-320.png`, `-390.png`, `-1024.png`, `-1440.png`). The changed parts were read in slices at 390 and 1440. The four strips still show their fallback pills until the lead does BUILD.md items 1 and 2.
