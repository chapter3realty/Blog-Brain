# BUILD: /buyers/senior-living/

Built 2026-11-13 from PLAN.md, with VERIFIED and CORRECTED rows only, at the verifier's wording (VERIFY.md). No row 30, no row 25 figure, no "34", no "nearest ... Little River".

- Spec: `wt-139/specs/senior-living.js` (glass theme, author "devin")
- Page: `wt-139/chapter3realty/buyers/senior-living/index.html`
- Data: `wt-139/data/2026-11-d/senior-living/senior-living.json`

**Data fix.** `build.py` now reads the continuing care workbook from `min_row=6`, so it no longer counts the header row. I re-ran it, and `ccrc.statewide` is 33 (VERIFY row 19). Nothing else in the JSON changed. The spec checks every figure it prints against its ledger row with `must()`, so a changed data file stops the build.

## Outline

- **Title** (61 characters): Assisted Living Myrtle Beach SC: $5,850 a Month, Town by Town
- **Description** (151 characters): Assisted living in Myrtle Beach costs about $5,850 a month. Compare memory care, nursing homes and continuing care, and see the licensed homes by town.
- **H1:** Senior living around Myrtle Beach, SC. The italic line under it, at about half the H1's size, reads "What each choice costs, and what it gives you."
- **Hero tiles, 2 by 2 on a phone:** Assisted living $5,850 a month; Nursing home, shared room $8,900 a month; Care at home $31 an hour; Assisted living homes, 23 licensed.
- **Slim top offer:** "Have us plan the move".
- **Short answer:** $5,850 a month and $70,200 a year; 20 licensed homes in Horry County and 3 more in Murrells Inlet and Pawleys Island. While no one needs daily care, a home you own costs far less a year, and a non-medical caregiver costs $31 an hour.

Sections:

1. **How much is assisted living in Myrtle Beach?**
   - One bar chart from `costs.monthly`: adult day care, assisted living, care at home, nursing home shared and private.
   - Three bold-led lines: against the state and the U.S., third of the SC areas, care at home.
   - No published figure for memory care or independent living.
   - Offer: "Have us price the house".
2. **Assisted living vs. nursing home vs. independent living: what is the difference?**
   - A six-row table (your own home with help, independent living, assisted living, memory care, nursing home, continuing care). It becomes labelled cards on a phone.
   - Then the rule on who assisted living may keep and the 30-day move (F17), the missing license for independent living (F28) and the HUD buildings (F27).
3. **Where is assisted living around Myrtle Beach?**
   - The town table from `by_town`: Myrtle Beach 8/718, Murrells Inlet 5/455, Conway 5/248, Little River 3/260, Pawleys Island 2/179; total 23/1,860.
   - A list: North Myrtle Beach (F11 corrected wording), home sizes and Horry County's rank (F13, F14a), the hurricane plan (F18).
   - Links to the DPH map and /buyers/relocating/healthcare/.
   - Offer: "Have us plan a day of tours".
4. **Memory care and nursing homes around Myrtle Beach**
   - Alzheimer marks, 14 and 13 (F12).
   - 8 nursing homes with 824 beds by town, 7 of 8 dual certified, not a promise of a bed (F14, F26).
   - Adult day care and the hospice house; Care Compare link.
   - H3 "Who pays for long-term care": Medicare (F23), OSS (F24).
5. **Continuing care: two licensed campuses on the Grand Strand**
   - 33 statewide; Brightwater and The Lakes at Litchfield (F19); the definition (F20).
   - Four protections: the refund, 30 days to cancel with the eighth-day charge, the disclosure, the finance check (F21, F22).
   - Offer: "Have us time the sale to the move".
6. **When does buying a home still make sense?**
   - $1,380 a year at 65 against $70,200, with a link to /buyers/retirees/.
   - Care at home at $31 an hour.
   - **Wow detail:** the beach stays within reach. Horry County lends beach wheelchairs free (F32), and Surfside Beach has chairs through its police department and five accesses with wheelchair access (F33).
   - Photo: the Surfside Beach Pier from the air, NOAA, public domain. The record already exists in `data/2026-11-a/submarkets-surfside-beach/photos.json`, and the caption states the pier's wheelchair access.
   - Two homes strips: "One-level homes near the beach: every room on one floor" and "Condos with an elevator and no yard to keep". Each has a pill as its fallback.
   - Links to the 55+ hub and /buyers/cost-to-own/.
7. **How do you sell the house and move to the right-size home?**
   - Five bold-led steps that link /sell/home-value/, /sell/sell-or-buy-first/, /sell/out-of-state-buyers/, /sell/net-proceeds/ and /sell/capital-gains/.
   - The `ny-client-tax-drop` story, rounded and labelled as one household's result, not a promise.
   - A house in another state is listed by an agent there, and we time the move.
8. **FAQ** (6 questions, open text, each answered in the body): Medicare, help paying (OSS), the hurricane plan, the independent living license, adult day care cost, memory care cost.
9. **Sources** (14 links). The survey year is read from the data file. Photo credits follow.
10. **End band:** "Sell the house, find the right-size home." with the button "Ask us to plan it".

Offers: the slim bar, 3 mid offers, 2 strip fallbacks and the end band. All go to /contact/, and no two use the same words. The page links to 13 of our own pages. No interest rate, payment amount, BrickWood, listing data, named-home ranking, or quote for Tim Nash. Devin Day is not named in the copy.

## Gate results (final build)

- **score.js:** 94/100 (SEO 83, AEO 100, Human 100, Trust 79).
  - FAIL S5, no share image of its own. Lead item 5.
  - FAIL S8, no inbound links yet. Lead item 4.
  - T2 at 50%: one first-hand sentence, the NY story. There is no second verified story that fits.
- **claims-scan.js:** 0 findings on the site, 0 on this page.
- **facts-check.js:** 0 sentences on this page. The 4 wrong sentences on 3 other pages, including llms-full.txt, are not mine.
- **house-claims.js:** 0 sentences to scope or source.
- **struck-check.js --strict:** no struck wording on this page.
- **repeat-check --strict:** passes. **structure-check --strict:** passes.
- **critic.mjs** at 390, 1024 and 1440: 0 blocking, 0 warnings.
  - The first run flagged two text walls (costs, by town) and a 164-character description. All three are fixed.
  - The 2 by 2 tiles fixed the cramped hero row on a phone.
- **build.js check:** OK.
- **build.js audit:** only "missing from sitemap.xml" and "orphan" are FAIL, and both are lead items.
  - Notes, not failures: not in llms.txt; no attributed Tim Nash sentence, because we never write one; 13 sentences over 22 words. None is over 28.

## Shots

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/senior-living/shots/`

- `buyers-senior-living-390.png`
- `buyers-senior-living-1024.png`
- `buyers-senior-living-1440.png`

Critic JSON: `.../nd/senior-living/critic.json`. The preview's sample photos do not load, so both strips show their pill fallbacks in the shots.

## Lead items (this page did not edit these files)

1. **sitemap.xml:** add `<url><loc>https://chapter3realty.com/buyers/senior-living/</loc><lastmod>(from build.js dates)</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`. The priority matches /buyers/retirees/.
2. **llms.txt** (under /buyers/, next to the retirees and 55+ lines): `- [Senior Living Around Myrtle Beach](https://chapter3realty.com/buyers/senior-living/): Assisted living costs about $5,850 a month here; nursing homes, care at home, memory care and continuing care compared, with the 23 licensed assisted living homes by town.`
3. **New homes places** (Blog-Brain `batches/2026-10-b/data/idx-places.json` and idx-lib/places.js; `index: false`, `listOnly: true`, pages ["/buyers/senior-living/"]). Both tags are in idx-lib/features.js FEED_KEYS.
   - `senior-one-level-near-beach`: `{ type: "house", has: "one_level,near_beach" }`, title "One-level homes near the beach: every room on one floor".
   - `senior-elevator-condos`: `{ type: "condo", has: "elevator_building" }`, title "Condos with an elevator and no yard to keep".
   - The site's edge feed under the opening: a general Grand Strand homes feed, or the one-level place above.
4. **Pages that should link here** (S8 and the audit orphan line). One sentence each, on words already there where possible:
   - /buyers/55-plus-communities/: end the "CCRC and all-inclusive options" section with "Assisted living, memory care and continuing care costs are on our [senior living page](/buyers/senior-living/)." The plan suggests cutting that section's entrance-fee figures, which have no verified row.
   - /buyers/retirees/, near hospitals or in the FAQ: "When more care is needed, our [senior living guide](/buyers/senior-living/) compares assisted living, nursing homes and care at home, with costs here."
   - /buyers/relocating/healthcare/, after the hospital list: "For assisted living and nursing homes by town, see [senior living around Myrtle Beach](/buyers/senior-living/)."
   - /buyers/relocating/ (hub), in its list of guides: "[Senior living around Myrtle Beach](/buyers/senior-living/): what each level of care costs, and the licensed homes by town."
   - /sell/sell-or-buy-first/: "Selling a parent's house before a move into care? Our [senior living page](/buyers/senior-living/) has what care costs here."
   - /sell/out-of-state-buyers/: "If the move is into care, [senior living around Myrtle Beach](/buyers/senior-living/) shows what each choice costs."
   - /buyers/cost-to-own/: "If you are comparing owning with assisted living, [our senior living page](/buyers/senior-living/) has the monthly costs."
   - /submarkets/surfside-beach/, beside the beach wheelchair sentence (optional): "More on care and housing is on our [senior living page](/buyers/senior-living/)."
5. **Share image:** run `node tools/ogcard.js <site>/chapter3realty /buyers/senior-living/` (score S5). It writes `og/buyers-senior-living.jpg`, outside this page's folders.
6. **Search ownership:** this page owns the assisted living, senior living, independent living, memory care, nursing home and continuing care searches. The 55+ hub keeps "55+ communities" and "retirement communities Myrtle Beach".
7. **Photo request (owner's Gmail, `templates/photo-request-email.md`):** a beach wheelchair, or the access mat at one of Surfside Beach's wheelchair accesses, in daylight, with no people as the subject. It would replace the pier aerial beside "The beach, by wheelchair". Added in review round 1.
8. **Ship together:** lead item 4's cut of the 55+ hub's "CCRC and all-inclusive options" H2 should ship in the same release as this page. The hub lists Covenant Towers next to the two licensed campuses, but this page says there are two (row 19).

## Review round 1 (2026-11-13)

See `REVIEW-1.md`. In the by-town section, the count table is now each town's licensed homes by name, A to Z, with beds (row 36), each with its nearest main hospital (row 37). The HUD apartments have a plain-words H3 (row 38). The repeated lines are cut, and the choices table and hero are fixed at 1440. All gates were re-run. Critic: 0 blocking and 0 warnings at 320, 390 and 1440. Shots: `scratchpad/nd/senior-living/fix1-shots/`.
