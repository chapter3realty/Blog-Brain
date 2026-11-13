# Review 1: fixes to /hoa/fees-by-neighborhood/

Reviewer result: pass=false, score 7.5. Every blocking item is fixed in `specs/hoa-fees-by-neighborhood.js`. Spec before the fixes: `scratchpad/hoa-fbn-spec-before-review1.js`.

## Blocking, fixed

1. **Closing box unreadable (320, 390, 1440).** Added the closing navy band rule from garden-city.js and hoa.js to the page CSS, with its max-width:699px variant: `main#main>section[style^="background:var(--navy)"]:last-of-type:not(.c3-x)>.wrap{background:linear-gradient(160deg,...)}`. The shots at 320, 390 and 1440 now show ivory words on a dark card.
2. **Fees from one or two listings shown as a neighborhood's fee (VERIFY row 22, ledger rows 16 and 22).** The fee cell now shows no dollar figure when fewer than half the listings give a fee, or when a fee under $15 rests on one or two listings. It says "Too few list a fee", with "1 of 5 list one. Ask us." On manufactured-home rows it says "Ask about lot rent." instead. These rows sort last under "Fee, lowest first" and "Fee, highest first". Nine rows: Mount Gilead, Myrtle Dunes, North Litchfield Beach, The Olde Village, Brandywine S (townhomes, 1 of 4 at $404), and the manufactured-home rows Folly Estate, Waterway View Community, Foxfire and Windjammer Village - GC. A `must()` pins the list, and checks that Rosehaven ($9 to $11 on all 7) still shows its fee. "Fee, lowest first" now opens on Rosehaven $9 to $11. The method note in the tool card adds: "Where too few give one, we find it for you." Lakeside Crossing still shows "Leased land / Lot rent, no HOA fee" (row 16).
   - I used "Too few list a fee" rather than the reviewer's "No HOA fee listed. Ask about lot rent." on manufactured rows. One or two of their listings do give a fee, so "No HOA fee listed" would not be true.
3. **"over 80 acres of lakes" (row 44).** The hero now reads "Waterbridge has a pool complex, pocket parks and over 80 acres of lakes and natural areas. Most of its homes for sale list a $150 monthly HOA fee." That is two sentences, because the longer phrase took the one sentence to 30 words. The H3 is now "Waterbridge: a pool complex, and lakes through the neighborhood". The Waterbridge homes strip title had the same problem ("a pool complex and 80 acres of lakes"). It is now "Waterbridge homes for sale: pools, pocket parks and lakes".
4. **Sibling overlap with /hoa/.** The H2 "What do you get for the HOA fee?" is now "Which neighborhoods give the most for the fee?" (contents label "Most for the fee"). The 55+ H3 (Seasons, Del Webb NMB, Myrtle Trace, word for word on /hoa/) is cut to one line: "Fees in the 55+ communities, and what each one includes, are on our 55+ communities page." The Myrtle Trace HOA source left with it. The three 55+ community pages are still linked from their table rows.

## Nits taken

- **Townhome conflict with /hoa/ ($250 here, $290 there).** The townhome section now gives the basis: "In the middle townhome neighborhood, the HOA fee is about $250 a month ... Counted home by home instead, the middle townhouse fee is about $290, as our Myrtle Beach HOA fees guide shows." New ledger row 55 (VERIFIED-BY-FIXER), from batch 2026-11-b hoa row 1 (VERIFIED 2026-11-09) and the live /hoa/ text. The same section now has its inclusions as a short list, because the extra sentence made a 929 px wall at 320 (critic warning, cleared).
- **Cresswind stray paragraph.** Moved into the offer under the table: "A neighborhood needs 3 homes for sale to be in the table. Cresswind Myrtle Beach, with its 12,000-square-foot clubhouse and outdoor amphitheater, had fewer. Send us any name or address, and we find its HOA fee." Row 40 still applies: Cresswind is not called 55+.
- **"The Carolina Forest area includes Wild Wing and Waterway Palms."** Cut.
- **Repetition.** The condo $650 line is now only in the FAQ. The townhome section keeps only the condo buildings link. The FAQ "What are HOA fees in Carolina Forest?" is cut, because it repeated the section of the same name word for word.
- **Phone table cards at 320.** On a phone each row now puts the name on its own full line, then the town and kind, then "Monthly HOA fee: $150", then the small facts. No more two-line names beside the fee.
- **"fifteen ponds".** Gone with the 55+ list.
- **Prince Creek West semicolon.** Now two sentences.

## Nits declined

- **Short answer before the Waterbridge line.** The reviewer marked this acceptable. The owner asks for a wow line where a page sells, and the short answer box is directly under it on the first phone screen (390 shot). Kept.
- **Waterbridge aerial crop.** The file is copied byte for byte from batch 2026-10-b. Its label was placed from Horry County GIS coordinates, and the record keeps that method. A tighter crop of the 1200 px file would cut the "U.S. government aerial photo" mark and need an upscale. A proper crop means re-exporting from NAIP at 2400 px and redrawing the label with the batch 2026-10-b script. That is a job for the photo record's owner, not for this round. The caption names the subject.
- **Critic tool miss.** The ivory-on-cream check belongs in `tools/critic.mjs`, with a passing and a failing control. That is a tools change, outside this page's files. For the lead: `tools/contrast-scan.js` exists in the website repo and may be the place to start.

## Gates after the fixes (preview on port 8892)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/hoa-fees-by-neighborhood.js` | Built. Hero sub 28 words. All `must()` checks pass, including the new F22 list. |
| `node build.js check` | OK. |
| `node build.js audit` | On this page, only "missing from sitemap.xml" and "orphan" (lead items), plus the warnings "not in llms.txt" and "no Tim Nash quote" (we write none). |
| `score.js --only /hoa/fees-by-neighborhood/` (SCORE_TODAY=2026-11-13) | 97/100. SEO 92, AEO 100, Human 98, Trust 100. The only failure is S8 (inbound links), a lead item. P2 is 4.6 numbers per 100 words (68%). The numbers are the fees a reader came for. |
| `claims-scan.js` | 0 findings. |
| `facts-check.js` | 0 on this page. The 4 it reports are on other pages, as before. |
| `house-claims.js` | 0. |
| `critic.mjs` 320, 390, 1024, 1440 | 0 blocking, 0 warnings. |

Shots, looked at:
- Full page: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/hoa-fees-by-neighborhood/r1-shots/` (320, 390, 1024, 1440).
- Crops: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/hoa-fees-by-neighborhood/r1-crops/`. The `closing-*` crops show the dark closing card, with every line readable. The `tool-lo-*` crops show the table sorted by lowest fee, with phone cards that have the name on top. The `hero-*` crops show the new lead.
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/hoa-fees-by-neighborhood/r1-critic.json`.
