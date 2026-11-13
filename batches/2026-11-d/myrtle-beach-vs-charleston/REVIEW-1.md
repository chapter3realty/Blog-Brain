# Review round 1: /buyers/relocating/myrtle-beach-vs-charleston/ (2026-11-13)

Reviewer: pass=false, score 7.5. Four blocking items, ten nits. This file says what was changed, and why any finding was declined or changed only in part.

## Declined, or taken in part

- **Nit, flood heading.** Kept "Is flood insurance more common in Charleston?". Our data answers how many buildings carry a federal flood policy, not how often a place floods. A heading "Does Charleston flood more than Myrtle Beach?" would promise an answer the page does not have. The verifier also struck the high-tide flood day counts (row 40). The other half of the nit is done: the section now says FEMA's file has no matching high-risk zone count for Horry County, followed by the offer to check a house's zone.
- **Nit, the beach-walk strip.** No change. `walk_to_beach` is the site's own feed flag. The live feeds use it with the same words ("Walk to the beach for under $500,000", "Houses you can walk to the beach from" in `idx-lib/feeds.js`). The strip title says "Walk to the beach", not "a short walk", so CRAFT's quarter-mile rule for "a short walk" does not apply. The lead item in BUILD.md (check that the flag works without `city`) stands.
- **Nit, FAQ answers collapsed at every width.** This is the site template, not this page. Left for the site.
- **Nit, 320 px read.wall warnings.** The subhead one remains (the hero sub plus the short answer, 938 px; the short answer is two short paragraphs, and the table of contents follows). Property tax (1,009 px) and flood (1,023 px) include their offer boxes, so the text runs are shorter than the numbers suggest. Jobs (918 px) already has two H3s. None is blocking. The Charleston section's wall (1,160 px) is fixed with three H3s.
- **Blocking 3, the healthcare fact.** The healthcare page's ledger has no Charleston row to borrow (it has the VA clinic only). The MUSC facts come from MUSC's own About page instead (row 47, VERIFIED-BY-FIXER).
- **Nonstop flights.** Both airports' websites returned 403, so the page gives no count of nonstop routes. It uses the FAA's 2025 boardings and hub sizes instead (row 46).

## What changed (rebuilt, gates re-run, shots re-taken)

New ledger rows 42 to 47 in `facts.md`, all VERIFIED-BY-FIXER, each quote read in a saved copy in `<wt>/data/2026-11-d/myrtle-beach-vs-charleston/raw/`:
- 42: Myrtle Beach, after the summer season and until May 1, leashed dogs and bikes on the beach and the Boardwalk at any hour (City of Myrtle Beach, 2026-09-09; same as verified row G5 of the STR tools ledger).
- 43: the Boardwalk, about 1.3 miles (City of Myrtle Beach; same as verified row 41 of the Myrtle Beach guide).
- 44: ferries from downtown Charleston to Fort Sumter, where the Civil War began in April 1861 (NPS).
- 45: Fort Moultrie on Sullivan's Island, where patriots in a palmetto-log fort beat the Royal Navy in 1776 (NPS).
- 46: FAA 2025 boardings: Charleston 3,142,402 (medium hub), Myrtle Beach 1,743,132 (small hub), about 1.8 times.
- 47: MUSC, founded in Charleston in 1824, the state's only comprehensive academic health system, with the state's only NCI-designated cancer center (MUSC).

Blocking items:
1. **A wow factor for each place.**
   - The short answer now gives a picture for each place. Myrtle Beach: "after the summer season, you can walk a leashed dog on the beach at any hour". Charleston: "ferries leave downtown for Fort Sumter, where the Civil War began".
   - The beach section now opens with the place, and the counts follow. Myrtle Beach: the 1.3-mile Boardwalk beside the sand, and the off-season dog and bike rule. Charleston: Fort Moultrie on Sullivan's Island, 1776.
   - The verdict row "The beach on a weeknight" now reads "The city is on the ocean. Charleston's beaches are on islands, in towns of their own." It no longer gives a count.
2. **Verdict first, the 12-row table cut, the repeats cut.**
   - The verdict table ("Is Myrtle Beach or Charleston better to live in?") is now the first section. It has 10 rows, 5 for each city, each "Why" cell in one short line. The 12-row side-by-side table is gone.
   - "about $98,000 less" now appears in the title, the short answer and the home-prices section only. The verdict row says "about a fifth less", and the FAQ no longer repeats it.
   - "more than 360 public beach accesses" now appears once, in the beach section. It is gone from the H1 line, the short answer, the table and the verdict.
   - "$750 a year" now appears once, in the verdict row. The tax section gives the two bills.
   - The H1 line is now "More home for the money here. More jobs, flights and history in Charleston."
   - The FAQ answers no longer repeat whole sections. They are now: part of Charleston?, how far?, which is bigger?, and is Charleston's airport bigger?
3. **"What Charleston does better"** (it was "What Charleston has more of").
   - It has three H3s: "More flights" (FAA boardings), "The state's teaching hospital" (MUSC, then the VA line) and "History in the harbor" (the two forts, the ferry to Fort Sumter).
   - Population is only in the FAQ now. The "day trip" line is gone.
   - The verdict table gained three Charleston rows: more flights, a major teaching hospital nearby, and history at your door.
4. **Getting-around link.** The first section now links "getting around Myrtle Beach" to /buyers/relocating/getting-around/ ("has the drive to Charleston, the roads and the airport"). The second link, in the Charleston section, is gone. The miles and drive time moved to the FAQ "How far is Myrtle Beach from Charleston?".

Nits taken:
- Healthcare line: "Our Myrtle Beach hospitals guide lists every hospital that serves the Grand Strand." This restates nothing that was struck.
- Flood: "Its file has no matching count for Horry County."
- Line chart on a phone: the narrow SVG is now drawn 280 wide, so its text renders at about 12.5 px at 320 and about 16 px at 390. The end label shortened to "$98K apart" on the narrow chart, because at 280 wide it touched the Charleston line.
- Hero offer and top bar: "Charleston's typical value", not "its". The top bar now reads "Weighing Charleston? Get houses here under $437,000, Charleston's typical value." (the 80-letter limit).
- Photo credits: the crop note prints once (the record's own `changes` note is dropped from the credit row, and the template line stays).
- The hero sub names both places, at the audit's request: "Myrtle Beach and Charleston side by side: ...".
- New sources in the sources line: FAA, MUSC, NPS and City of Myrtle Beach. The note is trimmed to stay under 90 words.

## Gates after the last build

| Gate | Result |
|---|---|
| `score.js --only` (SCORE_TODAY=2026-11-13) | 97/100. SEO 92, AEO 100, Human 99, Trust 100. Only fail: S8 inbound links (0), a lead item. P2: 4.1 numbers per 100 words, down from 4.7. |
| `claims-scan.js` | 0 findings. |
| `facts-check.js` | 0 on this page. The 4 sentences it reports are on other pages, not new. |
| `house-claims.js` | 0. |
| `struck-check.js` | No struck wording. |
| Sentence length | None over 28 words in prose (the longest is 27). No em dash, no "So" opener, no "Here is". |
| `critic.mjs` 320, 390, 1024, 1440 (preview on port 8895) | 0 blocking. 390 and 1440: 0 warnings. 1024: the top bar's line-length warning, as before. 320: the four read.wall warnings described above. |
| `build.js check` | OK. |
| `build.js audit` | FAIL lines on this page: "missing from sitemap.xml" and "orphan" only (both lead items). Warnings: not in llms.txt, no Tim Nash quote (we write none), 7 sentences over 22 words. |

Shots: `scratchpad/nd/myrtle-beach-vs-charleston/r1/shots/` (320, 390, 1024, 1440) and `r1/critic.json`. Looked at as a stranger at 390 and 320:
- The verdict table follows the table of contents and reads as short labelled rows.
- The chart labels are clear and no longer touch the lines.
- The beach section opens with the Boardwalk and the dog rule, with the counts after.
- The Charleston section is three short blocks under H3s.
- The credits say the crop note once.
- Both strips still show their fallback pills in the preview (new places, lead items).

## For the lead (changes to BUILD.md items)

- The llms.txt line can add "the airport, MUSC and Fort Sumter" to its list.
- Sibling links in BUILD.md item 5 still apply. /buyers/relocating/getting-around/ remains the best first one.
