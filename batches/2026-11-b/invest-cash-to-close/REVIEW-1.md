# Review 1, fix round: /invest/cash-to-close/

Writer, 2026-11-10. The reviewer's verdict: pass=false, score 8. One blocking item (no homes near the top) and nine nits. Nothing was committed, deployed, stitched or dated. idx-lib/, partials/ and batches/2026-10-b/data/idx-places.json were not edited.

## Findings declined or only partly taken

- **Read.wall at 320 px, "Send me oceanfront condos I can rent nightly" (1,049 px).** Kept. The reviewer called this a false hit: it spans the empty strip's fallback pill, two short paragraphs and the second pill. When the two places exist, the strips fill and the wall is gone.
- **Repetition of $5,600 and $4,300.** Taken in part. The short answer no longer gives them. They stay in the table (the centerpiece) and in the reserves section's "In our example" line, for a reader who jumps to Reserves from the contents list.
- **FAQ "Who pays the deed recording fee".** Shortened, not cut to a pointer. The section says who pays. The FAQ adds the one thing the section leaves out: a few kinds of deed put the fee on the buyer, such as one from a court foreclosure sale. "Master-in-equity" is gone.
- **"Updated September 6, 2026".** No action, as the reviewer said. `node build.js dates` sets it.

## What changed (fix round 1)

Blocking:
- **Homes near the top.** BUILD.md "For the lead" item 2 now asks the lead to change `idx-lib/feeds.js` line 336 to `"/invest/cash-to-close/": RENT_BY_NIGHT,`. That feed is "Oceanfront condos you can rent by the night". It already has `withStrips: true`, so edge.js keeps it over the page's own strips. It matches the page's wow fact. CUT_RENTAL is not used. To check placement, I ran a scratch copy of functions/ and idx-lib/ with only that change and the two new places (`scratchpad/ctc-shadow`, port 8879, now stopped). The feed sits under the hero tiles and byline and above the short answer, at 320 and 390 px. In the preview, the stand-in CRM does not apply the `has` flags, so the feed fell back to "Condos for sale on the Grand Strand". edge.js does this by design when it cannot make a title true.

Nits taken:
- **320 px table.** At 379 px and less, each row is a grid. The line name and its note run across the full width, and the two amounts sit under them in the head row's columns. The Total row stays on one line. The table caption is a full-width block. Explicit table roles (table, rowgroup, row, columnheader, rowheader, cell) keep the table's meaning for screen readers when the display changes. At 390 and 1440 px the table looks the same as before.
- **Hero button.** "Get the cash-to-close sheet" is now "Work out my cash to close". It has no hyphen, and at 320 px it wraps between words.
- **Wow line.** It now reads: "Near the middle condo price, about 100 condos for sale sit right on the ocean, and their listings say you can rent them by the night." The photo and the strip follow it. The fee sentence comes after the strip: "Their middle HOA fee is about $765 a month." The comparison with "a condo off the beach" is gone, because no ledger row supports it.
- **Fallback photo.** The photo of towers against the sky is replaced by a USGS public-domain photo. It shows the surf, the beach with umbrellas, the pools and the towers. Its record is copied unchanged from `data/2026-11-a/submarkets-myrtle-beach/photos.json`. Caption: "Oceanfront towers with their pools above the beach in Myrtle Beach, seen from a plane over the ocean." The credit and the image schema follow the new photo. The photo is used on 2 other pages (/market-reports/ and /submarkets/myrtle-beach/).
- **House strip title.** It is now "Houses you can rent out, near Myrtle Beach". This is true by the place's `rentals_allowed` filter within 25 miles of Myrtle Beach. I did not use "Rental-ready", because the filter shows that renting is allowed, not what condition the house is in. BUILD.md item 1 is updated.
- **Repetition.** The short answer drops the reserves figures. The FAQ answer on whether cash to close can change is now one line that points to the story in "What is included". The earnest money FAQ no longer repeats the 48-hour rule. In section 3, the "Sections A, B and C" entry now reads "The loan costs line in our example." The definition is no longer given three times.
- **Glosses.** Each new gloss was added as a VERIFIED-BY-FIXER row in facts.md (rows 33 and 34).
  - "DSCR loan": "one the lender qualifies on the rent, not on your income" (DSCR row 3, wording the verifier allows once).
  - "unit policy": "the owner's own policy for the inside of the unit, belongings and liability", in the table note (HO6 row 9).
  - "prepaids": "bills paid ahead" (row 8, the CFPB definition).
  - "business credit": "a loan for a business purpose" (row 11).
  - "master-in-equity deed": removed from the FAQ.
- **Walls of text.** After the table, three paragraphs became a plain list: "What the lines pay for", "About 3 percent of the price on a condo, 3.5 on a house" and "Your down payment". The two cushion rules in the tax section became a two-item list: "The usual limit" and "A loan to buy a rental". The critic's warnings at 320 px went from 4 to 1, the false hit above.
- **Audit fixes on the way.** One sentence of 30 words was split. "the escrow rules leave it out" (flagged as personification) now reads "The escrow limit does not apply to it".

Files touched: `specs/cash-to-close.js`, `chapter3realty/invest/cash-to-close/index.html` (built), `data/2026-11-b/invest-cash-to-close/photos.json`, Blog-Brain `facts.md` (rows 33, 34), `BUILD.md` (lead items 1 and 2, outline, files), this file.

## Gates (after the last build)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/cash-to-close.js` | built, 3,219 words in main |
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/cash-to-close/` | 100/100 (SEO, AEO, Human, Trust 100), 1,718 words |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page (the 4 WRONG lines are on other pages and llms-full.txt, as before) |
| `node tools/house-claims.js <page>` | 0 |
| `node tools/struck-check.js invest-cash-to-close-struck.json <page>` | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node build.js check` | exit 0, "Safe to deploy" |
| `node build.js audit` | this page: only the two date lines (set by `node build.js dates`) and two notes (no quote from a licensed person, which we never write; 13 sentences over 22 words, none over 28) |
| `node tools/critic.mjs http://localhost:8874 /invest/cash-to-close/ --widths 320,390,1440` | 0 blocking at every width. 1440 and 390: 0 warnings. 320: 1 read.wall (the false hit above). |

Shots I looked at: `scratchpad/rb1/invest-cash-to-close/r1shots/` (full pages at 320, 390 and 1440) and `r1sl/` (slices). The 320 px table, the hero button, section 1's list, the wow line, the photo and the tax section were read at full size. The scratch copy's shots are in `r1shadow/` (the edge feed under the hero at 320 and 390). The critic JSON and gate logs are in `r1-critic.json`, `r1-score.txt`, `r1-claims.txt`, `r1-facts.txt`, `r1-check.txt` and `r1-audit.txt` in the same folder. The last wording change ("The usual limit") came after the critic run. It changed a lead-in only, and the text gates were run again after it.
