# Build: /hoa/south-carolina-hoa-laws/ (batch 2026-11-b, Lane U)

Built 2026-11-10 from PLAN.md. It uses only VERIFIED rows, and CORRECTED rows at the verifier's wording (VERIFY.md). Each block in the spec names its ledger rows.

- Spec: website `specs/south-carolina-hoa-laws.js` (new; the live page was hand-made). Built with `node tools/mkpage.js specs/south-carolina-hoa-laws.js`. URL kept.
- Page: website `chapter3realty/hoa/south-carolina-hoa-laws/index.html`.
- Data changed, in `data/2026-11-b/hoa-south-carolina-hoa-laws/`:
  - `build_charts.py`: the verifier's row 20 and 21 fixes. The label "Dropped by the owner" is now "Closed: the owner did not send what the state asked for". The title "What Horry County owners asked the state to change" now says what the complaints said should change in the HOA's papers. I re-ran it, and both chart files were rewritten. The counts did not change. The spec checks every count against the ledger and fails if the old wording comes back.
  - `photos.json` (new): one license record for the photo below.
- Image (new), in `chapter3realty/images/2026-11-b/hoa-south-carolina-hoa-laws/`: the South Carolina State House in Columbia, by Farragutful, CC BY-SA 4.0, from Wikimedia Commons. It comes in a 600w file, a 1200w file and the base file, each with its metadata embedded (`tools/photos.js check`: all records pass). It sits in the "changes" section, under the sentence on the bills. Its caption says only "where the General Assembly meets". I looked at it at full size. It shows the building only, and no person is the subject.
- Share card (new): `chapter3realty/og/hoa-south-carolina-hoa-laws.jpg`, from `tools/ogcard.js`. This one file is outside the page's own folders. Commons would only serve a 1920 x 1081 copy of the photo, and `photos.js crops` needs at least 1,200 px on the short side. The page therefore shares its own text card. Delete the card if the lead prefers the sitewide image.
- I did not touch any file in `idx-lib/`, `partials/` or `batches/2026-10-b/data/idx-places.json`.

## Outline

Title (60 characters): "South Carolina HOA Laws: What They Say and Who Enforces Them". Description (156): "South Carolina HOA laws in one table: what the HOA Act, condo law and nonprofit law require, what they leave out, and how 416 Horry County complaints ended." H1: "South Carolina HOA laws:" with the italic line "what the state requires, and what your HOA's papers say." at about half the H1's size. Hero facts: no cap on fines in the HOA Act or the condo law; $7,500, the most magistrate court hears in an HOA money dispute; 10 of 416 Horry County complaints ended with the owner satisfied.

0. Short answer (rows 1, 7, 12, 13, 24, 35, 40). Slim top offer: "Buying into an HOA? We read its recorded papers before you offer." The button keeps the old words: "Ask us about a community".
1. What are South Carolina's HOA laws? (rows 2, 49) The page's main table, "South Carolina HOA law, question by question". It has 12 rows: question, what the law says (with one section number), and the page that covers it. Below 600 px each row is one block. Then 6 in 10 Horry homeowners pay an HOA or condo fee.
2. Which South Carolina law applies to my HOA or condo? (rows 2 to 6, 50, 53) Three bold lines: the HOA Act (2018, changed once in 2019, at the row 4 wording), the Nonprofit Corporation Act (with the Secretary of State search) and the condo law (1962). The Act's five topics. POA (link to hoa-vs-poa). An owner cannot opt out (link to the hub).
3. What HOA rules are unenforceable in South Carolina? (rows 7, 8, 37, 38, 39, 46, 47, 48) Four bold lines: a rule not recorded by January 10, papers never recorded, an amendment without the vote, a ban on the U.S. flag. The Hilton Head case at the row 37 wording, with a link to rental-restrictions. H3 "Where the rules are filed": the last 12 months' count (about 700 papers, about 400 rules and policies, 60 fine policies), the county index, and the 2019 spike with a link to documents. Offer: "Have us pull the recorded rules".
4. Can an HOA fine you, foreclose, raise dues or ban rentals in South Carolina? (rows 24 to 28, 33 to 36, 40, 43 to 45) One answer and one link for each of fines, foreclosure, dues (with reserves), rentals and developer turnover. H3 table: fines in three states (South Carolina, North Carolina, Florida), at the row 43 and 44 wording. Offer, from story row 55: "Have us read the papers".
5. Can I see my HOA's records and go to its meetings? (rows 10, 11, 30, 31, 32, 41) The records by kind of HOA, then the meetings: the yearly meeting, a special meeting, board meetings (row 31 corrected) and the condo vote. Seller disclosure. A link to documents.
6. Who enforces South Carolina HOA law? (rows 12 to 14, 29, 51, 52) No agency enforces the Act, and Consumer Affairs is not a referee, in its own words. Four places an owner can take a dispute. No offer here: Chapter3 does not act in disputes.
7. How do I file an HOA complaint in South Carolina? (rows 13 to 20) Five numbered steps. Chart: "Only 10 of 416 Horry County HOA complaints ended with the owner satisfied" (an SVG drawn for phone and for wide screens, with the satisfied bar in brass). Horry leads the state (row 19). Why each complaint counts (row 17). Offer: "Send me homes with no HOA", plus a link to /buyers/no-hoa-homes/.
8. Is South Carolina changing its HOA laws? (rows 21, 22, 42) "Not yet", then the photo, then the five bills at the row 42 corrected wording, with a link to liens-and-foreclosure. H3 "What Horry County complaints would change", with a bar chart from chart-what-owners-want.json. Each bar links to the page that covers its topic. Then one line on enforcement choices (row 21) and one statewide line (row 22, kept in its own sentence).
9. FAQ, 7 questions, each answered above: the HOA Act; who regulates HOAs; complaining to the state; recording; seller disclosure; suing an HOA; condo law vs HOA law. Sources line, legal notice (no date) and photo credit. End band: "Buying into an association?" with the kept line. Button: "Have us read a community's papers".

There are four offers in the body and the end band, and no two use the same words. Every button links to /contact/, where the site opens its short pop-up. The page makes no offer to settle a dispute or to act against an HOA.

Sibling questions given up to their owners, with one sentence and a link each: fines, foreclosure and the bills' detail, dues, reserves, special assessments, rentals, turnover, the buyer's papers, HOA vs POA, and the fee. The FAQ on budget notice is gone; it is one table row with a link to dues-increases.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/south-carolina-hoa-laws/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 2,393 words of prose |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | 0 on this page. 4 wrong sentences elsewhere, all there before this build: from-massachusetts, from-virginia, llms-full.txt |
| `node tools/house-claims.js` | 0 sentences |
| `node tools/struck-check.js --strict` | hoa-south-carolina-hoa-laws (21 patterns): no struck wording |
| `node tools/repeat-check.js --strict` | passes |
| `node tools/structure-check.js --strict` | passes |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking, 0 warning at all three widths |
| `node build.js check` | OK |
| `node build.js audit` | This page shows only the mkpage date lines (schema dateModified and the visible "Updated" date vs sitemap lastmod) and the usual "~" note asking for a quote from a named person. We never write one. |
| `node tools/inbound.js --only` | 11 referring pages |

Fixed along the way:
- mkpage refused a sources line of 122 words, then 104 and 91. I shortened the link names.
- The first score was 95. Three fixes:
  - It had no chart with alt text, because glass bars are not an SVG. The outcomes chart is now an SVG with a full aria-label.
  - "in 2025" appeared four times. It now appears twice.
  - It had two attributions and two "law gives" phrases. All were rewritten.
- The first critic run blocked at 1440 px because the page had no real photo. The State House photo fixed it. The run also warned of two text walls at 390 px. I turned the recorded-papers count into a list, and I moved the North Carolina and Florida notes into the table.
- The audit flagged "laws leave" and "on paper" twice. All three were rewritten.

## Screenshots (looked at full size, every slice)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-south-carolina-hoa-laws/shots/hoa-south-carolina-hoa-laws-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-south-carolina-hoa-laws/shots/hoa-south-carolina-hoa-laws-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-south-carolina-hoa-laws/shots/hoa-south-carolina-hoa-laws-1440.png`
- Slices: `.../rb1/hoa-south-carolina-hoa-laws/slices/` (390), `slices2/` (1440), `slices3/` (1024). Each chart and the table alone: `.../rb1/hoa-south-carolina-hoa-laws/fig1024-*.png`, `fig390-*.png`. Critic JSON: `.../rb1/hoa-south-carolina-hoa-laws/critic.json`.

Fixed after looking:
- The phone table's "Read more" links ran together ("Unenforceable rulesHOA documents"). They are now spaced on the phone and stacked on a wide screen.
- The last outcome label overlapped its bar at 1440 px. The label column is now wider.
- The "what complaints would change" bars were drawn against 416, so they looked tiny. They are now drawn against the largest bar, and the "of 416" text stays.
- Section 8 put the chart between the "Not yet" answer and the bills. The bills now come first.
- Copy fixes:
  - "A buyer sees the papers before closing" was wrong; the documents page shows that many buyers get them after. It now reads "the seller must tell you about the HOA".
  - "Two of those states" was unclear. It now names North Carolina and Florida.
  - "An unclear rule can lose" was a figure of speech. It now says the rule can be read against the HOA.

## For the lead

1. **Homes feed title (idx-lib/feeds.js; I did not edit it).** The edge feed for this URL is NO_HOA, headed "Homes with no HOA fee". It already sits under the opening, so the page has no second no-HOA strip in its body. The owner wants a bold, personal title that is still true. Proposed: **"No HOA, no board, no fines: homes for sale now"**. It is true by the feed's filter (hoa=0). This page's readers are owners worn out by a board, and buyers weighing an HOA. The plan's slug `nohoa-grand-strand` is not needed while the edge feed serves this URL.
2. **The wow factor on this page.** The page sells no place. Its hook is the local finding a reader could not guess: only 10 of 416 Horry County complaints ended with the owner satisfied. Also, about 700 association papers were recorded here in one year, 60 of them fine policies. Both figures are in the hero, the chart and section 3, and each offer follows from them.
3. **Referring pages.** 11 today. Per PLAN, /hoa/documents/, /hoa/rental-restrictions/ (rebuilt in this batch by another writer) and /hoa/hoa-vs-poa/ do not yet link here. Each has a sentence on the HOA Act or the recording rule where "South Carolina's HOA law" can become the link.
4. **Before release (verifier's notes):** re-check the five bill pages (row 42) and the county's notice that its document images are not online (row 48).
5. **Photo.** A larger copy of the State House photo (at least 1,200 px on its short side) would let the page share the photo instead of the text card. Commons limited the download here.
6. Not run, as instructed: `node build.js stitch`, `dates`, `llmsfull`. The page's date lines will be set by `dates`.
