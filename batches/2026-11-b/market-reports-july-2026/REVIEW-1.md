# Review 1: /market-reports/july-2026/ (fix round)

Reviewer: pass=false, score 8. Five blocking findings and nine nits. Fixer, 2026-11-10. Spec: `<web>/specs/july-2026.js` (the copy before this round is `scratchpad/july-2026.before-r1.js`). `<web>` = `scratchpad/wt-live`. No date typed. Not run: `build.js stitch`, `dates`, `llmsfull`. Only this page, its spec and its folders were touched.

## Declined or changed from the finding

- **FAQ: "cut it, or keep only one open line".** mkpage refuses a page with fewer than three FAQ entries (`tools/mkpage.js` line 93), and this round may not edit mkpage. Three entries stay, but none repeats a section and none is hidden. The heading is now "What else changed in June 2026?". The site's fold script only folds a section whose H2 says "FAQ" or "questions", so the answers are open text (CRAFT 4, "Hide nothing"). The four old entries are gone. The three now are: condo days, 137 against 102 two Junes before (row 7, not said elsewhere on the page); building permits, June and January to June, 555 and 3,336 (row 18; the January to June figure is new to the page, and the permits line left section 3); and where the newest numbers are (the line the reviewer kept). Scorer A7 is now 80% for three entries. I accept that.
- **The photo.** Kept. It is the page's one picture, and the scorer and the critic need one. The caption is now plain: "Houses and condo towers on the same beach in Myrtle Beach." The "CCAR reports the two kinds of home apart" line is gone.
- **"Fewer houses for sale" in the dek and the short answer.** Kept in both. The dek is the headline and the short answer is the answer. Section 3 says it once more, with the detail. The chart title, the table title and the FAQ no longer say it.

No new fact was added, so there are no VERIFIED-BY-FIXER rows. Every new figure on the page is from a verified row: rows 7 (January to June days 125; condo days 102, 132, 137), 8 (January to June condos 95.9 percent), 9 and 10 (June 2024: 3,342 houses, 3.8 months), 14 (condos $220,000 in February, $248,000 the November before), 18 (January to June permits 3,336, down 6.8 percent; the verifier's own check). The spec throws if any of them moves.

## What changed

Blocking:
1. **FAQ.** As above: three open entries, each new; the four that repeated the sections are cut.
2. **One fact said too often.** Section 1 no longer restates the June medians. It now opens with what a median is, then the January to June figures: "From January to June, the median house sold for almost the same as in June, and the median condo for $232,500." The spec checks that the two house medians are within $1,000. The June house median is now in the short answer (rounded) and the at-a-glance table (exact) only. "Fewer houses for sale" is in the dek, the short answer and section 3's first paragraph only.
3. **Section 3 clutter.** The three-Junes table is cut, with its CSS (the 700 px of phone cards). The chart carries the message. The one thing the table added, June 2024, is one clause after the chart: "There were still more houses for sale than two Junes before, when 3,342 were listed and houses had 3.8 months of supply." The months of supply definition stays, ahead of it. The permits paragraph moved to the closing questions. The section is now one paragraph, the chart and one paragraph.
4. **The closing section.** Now "How could Myrtle Beach buyers and sellers use the June 2026 numbers?", opened by one line ("Set the one home you want against them, before you write an offer or set a price."). Three lines, each a figure the page has not said yet, what our agents do with it before an offer, and a link to /contact/:
   - Buying a house: the January to June average of 125 days to an accepted offer; "Our agents check how long the house you like has been for sale, and any price cuts, before you write your offer." Link "Ask us about a house".
   - Buying a condo: 95.9 percent of the last asking price, January to June; "Before you offer, our agents check what the same floor plan sold for in that building." Link "Ask us about a building".
   - Selling: the condo median moved between $220,000 and $248,000 over the year; "One month's median says little about one home, so we price yours from the sales closest to it." Link "Ask us to price your home".
   The filler line "The closing came after that, on the date the contract named." is gone, as are the repeated 4.3, 97.3, 7.6 and 96.2 figures. The hub link that ended the section is now only in the archive box and the last question.
5. **Method notes and abbreviations.** Cut from the body: "We checked the Census permit files too.", "We checked each of CCAR's area pages...", and the paragraph "These figures come from CCAR's June report...". The full names now appear once, in the note under the first table: "Sales through the multiple listing service (MLS) of the Coastal Carolinas Association of REALTORS (CCAR), for Horry and Georgetown Counties. Houses are single-family homes." The reason the area table covers January to June is in that table's note. The sources line carries the method and the link to the new home permits page (that link left section 3 with the permits). "CCAR" in `<main>` went from 17 to 6, three of them in the sources line. Section 4 says "the most of any month in the year to June" instead of "in CCAR's report". Section 5 says "In the Myrtle Beach area, ZIP codes 29572 and 29577".

Nits taken:
- **read.wall at 320.** The four paragraphs after the area table are two now: the inland third and the five areas above the region; then the Myrtle Beach condos and the home value link.
- **Chart axis on phones.** The phone chart is now one row per month with the month and year written out ("Jul 2025" ... "Jun 2026") and each value at the end of its bar, at about 16 px at 390 and 12 px at 320. There are no single letters and no tick labels. In the SVG text the month names come before the values, because claims-scan read "+4.0% Apr" as a rate. The wide chart is unchanged.
- **Area table at 320.** Under 380 px the table is a little smaller (.97rem; area names .95rem at 40 percent), and the last column has no right padding. The shot shows a gutter of about 18 px.
- **Act on an area.** Each area with its own page links to it: Pawleys Island, North Myrtle Beach, Myrtle Beach, Carolina Forest, Garden City, Murrells Inlet, Surfside Beach, Little River, Conway. Socastee and Loris / Longs have no page and stay plain. The spec checks that each linked page exists.
- **Strip fallback.** The pill now says the strip's title word for word: "Oceanfront condos under $205,000 in and around Myrtle Beach" (one constant for both). The place for the lead in BUILD.md is unchanged.
- **One page, one value.** The first-half condo median is $232,500 in the text, the chart and the area table.
- The note under the first table is held to 40rem. At 1024 and 1440 the critic had found it 94 characters a line.

Other scorer effects: the method notes were the page's only first-hand sentences (T2). The two "our agents check" lines in the closing section now carry it. Both describe our standing work, and neither is a story. P3 dates: "June 2025", "June 2024", "February 2026" and "November 2025" in the copy became "the June before", "two Junes before", "in February" and "the November before".

## Gates (final build)

From `/home/user/Blog-Brain`, page `<web>/chapter3realty/market-reports/july-2026/index.html`, preview `python3 -m http.server 8873` in `<web>/chapter3realty`:

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /market-reports/july-2026/` | 98/100 (SEO 100, AEO 98, Human 98, Trust 100), 809 words. No FAIL. Partial: A7 3 FAQ entries (80%); P2 4.5 numbers per 100 words (71%), a market data page; P3 3 date mentions (83%), the question headings that name June 2026. |
| `node tools/claims-scan.js <web>` | 0 findings. The first rebuild had 1, "+4.0% Apr" in the new phone chart. Fixed by ordering the SVG text. |
| `node tools/facts-check.js <web>` | 0 on this page |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/struck-check.js batches/2026-11-b/facts/market-reports-july-2026-struck.json <page>` | no struck wording |
| `node tools/inbound.js <web>/chapter3realty --only /market-reports/july-2026/` | 6 referring pages |
| `node tools/critic.mjs http://localhost:8873 /market-reports/july-2026/ --widths 320,390,1024,1440` | 0 blocking, 0 warning at each width |
| `node build.js check` | OK, safe to deploy |
| `node build.js audit` | This page shows only the two mkpage date lines (`build.js dates` sets them) and the usual A20 note |
| My sentence check of `<main>` | none over 28 words, no em dash, no sentence opening with "So" or "Here is"; no rate, no payment, no BrickWood, no Tim Nash quote, Devin only in the byline |

Shots: `scratchpad/rb1/market-reports-july-2026/r1shots/market-reports-july-2026-{320,390,1024,1440}.png`, cut in `r1parts/` (`s390a.png`, `s390b.png`, `s320.png`, `s320b.png`, `s1440.png`). Critic JSON: `critic-r1.json`. At full size: the page is calm, and section 3 is short. The phone chart reads without effort at 390. The area names are underlined links. The closing questions are open text under one heading. The table at 320 keeps its gutter.

## For the lead

- Unchanged from BUILD.md: the place `mrj-oceanfront-condos-under-205k` in `idx-places.json`. The strip title and the fallback pill now say the same words.
- The page now links to nine submarket pages from the area table and to /invest/what-is-being-built/ from the sources line. That link was in section 3's body before.
