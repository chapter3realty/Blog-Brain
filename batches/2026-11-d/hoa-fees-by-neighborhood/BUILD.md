# Build: /hoa/fees-by-neighborhood/ (batch 2026-11-d, Lane N, version 1, 2026-11-13)

Website working copy: `scratchpad/wt-139`. Files written there, nothing else touched:
- `specs/hoa-fees-by-neighborhood.js` (new)
- `chapter3realty/hoa/fees-by-neighborhood/index.html` (built by `node tools/mkpage.js specs/hoa-fees-by-neighborhood.js`)
- `chapter3realty/og/hoa-fees-by-neighborhood.jpg` (the page's share card, `node tools/ogcard.js`; scorer S5)
- `data/2026-11-d/hoa-fees-by-neighborhood/display-names.json` (new, by hand: plain names for 56 MLS names, and the two lot-rent communities the verifier found)
- `data/2026-11-d/hoa-fees-by-neighborhood/photos.json` (new: two public-domain records copied from `data/2026-10-b/photos.json`)
- `chapter3realty/images/2026-11-d/hoa-fees-by-neighborhood/waterbridge-from-above-{600w,1200w}.webp` (copied byte for byte from `Blog-Brain/batches/2026-10-b/images/best-neighborhoods/`; no live page served them)

The Farm photo uses the files /hoa/benefits/ already serves (`images/2026-11-b/hoa-benefits/`, byte-identical to the batch 2026-10-b files).

Facts: VERIFIED rows, and CORRECTED rows at the verifier's values and wording only. Nothing from VERIFY "Do not publish" is on the page. Corrected values the data files do not hold (3,990; Waterbridge 23 of 26 and $449; The Farm 12 of 14; Del Webb GD 19 houses and 7 villas; 2,097 of 2,411) are typed in the spec with their row number, and the page says them in words ("nearly all", "most", "close to 9 in 10"), each checked by a `must()` against the row. Conway Plantation and Crystal Lake show as leased land (VERIFY row 15, ledger row 53); the other 14 manufactured-home rows with no fee show "No HOA fee listed / Ask about lot rent".

## Outline

- **Title (59):** HOA Fees by Neighborhood: 382 Myrtle Beach Area Communities
- **Description (148):** The monthly HOA fee in 382 neighborhoods from Little River to Pawleys Island and Conway, from the homes for sale: what it includes, and second fees.
- **H1:** HOA fees in 382 Myrtle Beach area neighborhoods. **Italic line (about half the H1):** What each one costs a month, and what you get for it.
- **Sub (the wow, 27 words):** In Waterbridge, most homes for sale list a $150 monthly HOA fee, in a neighborhood with a pool complex, pocket parks and over 80 acres of lakes. (F11, F44)
- **Short answer:** $95 a month in the middle neighborhood of houses; about 6 in 10 charge $100 or less. Higher where the fee includes more: about $300 with lawn care, about $250 in the middle townhome neighborhood. (F2, F4, F5, F8)
- **Top offer bar:** "Serious about one home? We get its HOA budget and rules before you offer." / Ask about one home's HOA (/contact/).
- **On this page:** Find a fee, By town, What a fee buys, Carolina Forest, Two fees or none, Townhomes, FAQ (two columns on a phone, three wide).

Sections:
1. **What is the HOA fee in each neighborhood?** Where the table reaches (F1 corrected). Link up to /hoa/. **The tool** (one glass card): search box (matches the plain and the MLS name and the town), town list (14 towns with counts), sort (most for sale, A to Z, fee low, fee high). Opens on the 12 neighborhoods with the most homes for sale, then "Show all 382 neighborhoods". Columns: Neighborhood (town, and the kind of home when not houses; linked to its own page for 7 rows) | For sale | Monthly HOA fee (middle half, or "Leased land / Lot rent, no HOA fee", or "No fee listed", plus "20 of 21 list a fee" where not all list one) | Fee includes | Amenities listed. On a phone each row is a card: name and town at left, fee at right, then the small facts. Method note inside the card (we checked each of the 2,585 homes' fees to the dollar). Cresswind is not in the table (fewer than 3 for sale): its 12,000 sq ft clubhouse and amphitheater (F40, no 55+). **Offer:** Not in the table, or serious about one home? / Ask us about one neighborhood.
2. **How much are HOA fees in each town?** Chart (11 towns, F9): Surfside Beach $72 up to Pawleys Island $236; Myrtle Beach $110; "the Socastee area", "the Carolina Forest area" (includes Wild Wing and Waterway Palms).
3. **What do you get for the HOA fee?** Bands chart (F3 corrected labels; $301 to $500 and over $500 joined as "Over $300", 19). Pool and clubhouse $115 against $68 (F6); lawn care $300 against $90 (F5). H3 A pool and a clubhouse for under $50: The Lakes, Aberdeen, Long Bay, Southgate, Lakeside at Eagle Nest ("the listings mark", F7 corrected, list stopped where the verifier allowed); "each rests on only a few homes, so we confirm the fee". H3 the 55+ communities: Seasons ($340, internet, trash, lawn; F35), Del Webb NMB ($315, the builder's lawn care and 175-channel TV; F36 corrected wording), Myrtle Trace ($95, 55+ single-family homes and a few townhouses, dues go to the pool, clubhouse, roads, common areas and ponds, 42 acres with fifteen ponds; F33 corrected; no "gate"). H3 the top of the range: North Beach Plantation cottages $898 with lawn care and internet, Waterside Pointe $503, Prince George Ocean $493, "among the highest" (F17 corrected); link gated communities. **Offer:** Choosing between two neighborhoods? / Ask us about two neighborhoods.
4. **What are HOA fees in Carolina Forest?** 34 neighborhoods, houses $46 to $159, all but one mark a pool (F10). Chart: the 12 house neighborhoods with the most homes for sale, cheapest first, amenities beside each (phone: one line each, no bars). Link the Carolina Forest guide. H3 Waterbridge (F37, F44, F11): photo (USDA NAIP, pools and clubhouse labelled) and the `waterbridge` strip. H3 The Farm, two pools for $107 (F38, F12): photo (NOAA, large pool and activity center) and the `the-farm` strip; link The Farm guide.
5. **Two fees, or no HOA fee at all.** Close to 9 in 10 list a fee (F21 corrected). H3 a second fee: The Orchards $225 to $255 in all, Planters Point $450 to $500 (F38); Del Webb at Grande Dunes $400 house, $445 villa, plus the mandatory Beach Club fee to the Grande Dunes master association (F34 corrected; declaration linked). Link /hoa/hoa-vs-poa/. H3 One community, many names (F19 corrected; no "master community", no "town center"): Grande Dunes $232 to $503; Prince Creek $99 to $180 and Seasons $342, with Prince Creek West's 2,700 acres and The Park's two pools (F41); Market Common $63 to $220, townhomes $450 and $490. H3 Leased land: Ocean Lakes (2,579 lease sites on a mile of oceanfront, F43, F16), Lakeside Crossing (F39), Conway Plantation and Crystal Lake ("we read their listings", VERIFY row 15); the other manufactured-home communities: ask about lot rent. H3 No HOA fee listed: 35 neighborhoods of houses or townhomes, Hagley Estates, Windy Hill Beach, Pine Lakes (F15 corrected); Plantation Point (F14, F42); link no-HOA homes. **Offer:** Name the home, and we find every fee it pays. / Ask us about every fee on a home.
6. **Why are townhome HOA fees higher?** $250, more than twice houses (F8); most townhouse listings include lawn care and trash, more than a third insurance, fewer than 1 in 10 house listings lawn care (F32). Condos: about $650 (F30, one line, link /hoa/) and the condo buildings page. Links: cost to own, dues increases.
- **FAQ (5, only questions answered above):** Lakeside Crossing; Carolina Forest; why a listing's fee differs from the HOA's; is the fee part of the monthly cost; condo fees.
- **End band:** Get the budget and the rules before you offer. / Ask us about a home's HOA (/contact/).
- **Sources line**, then the two photo credits and their ImageObject schema.

Every request button goes to /contact/ (top bar, three boxes, end band, two strip fallbacks). Internal links in sentences (17 pages): /hoa/, /buyers/gated-communities/, /submarkets/carolina-forest/, /submarkets/carolina-forest/the-farm/, /hoa/hoa-vs-poa/, /buyers/55-plus-communities/ and its four community pages, /submarkets/myrtle-beach/plantation-point/, /buyers/no-hoa-homes/, /invest/condo-buildings/, /buyers/cost-to-own/, /hoa/dues-increases/.

The tool was tested in a browser (Playwright, preview): opens on 12 rows; "grande dunes" finds 11; a name not in the table gives the "send us the name" line; the Carolina Forest area shows 34; fee low and high sorts put no-fee rows last; "Show all" shows 382; no script errors. The inline script has no backslash and no regular expression (VERDICTS 2026-10-26).

## Gate results (2026-11-13, after the last build)

| Gate | Result |
|---|---|
| `score.js --only /hoa/fees-by-neighborhood/` (SCORE_TODAY=2026-11-13) | 97/100. SEO 92, AEO 100, Human 98, Trust 100. Only fail: S8 inbound links (0), lead item 5. P2 numbers 4.7 per 100 words of prose (65%): the page is a fee table, and the numbers left are the fees a reader came for. |
| `claims-scan.js` | 0 findings (0 site-wide). |
| `facts-check.js` | 0 on this page. The 4 wrong sentences it reports are on other pages (the SC deduction on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt), not new. |
| `house-claims.js` | 0 sentences to scope or source. |
| `critic.mjs` 390, 1024, 1440 | 0 blocking, 0 warnings. First runs: "blog with no real photo" (fixed with the two aerials), the Waterbridge file missing from the site (copied in), and a 1,099 px wall of text under the table at 390 (the method note moved into the tool card). |
| `build.js check` | OK. |
| `build.js audit` | FAIL lines on this page: "missing from sitemap.xml" and "orphan" only (lead items 1 and 5). Warnings: not in llms.txt (item 2), no Tim Nash quote (we write none), 4 sentences over 22 words (none over 28). First run also failed "first section heading is not a question" and the term "on a listing"; both fixed. |

Shots (after the last build; the preview's sample photos do not load, so the two strips show their fallback buttons):
- `scratchpad/nd/hoa-fees-by-neighborhood/shots/hoa-fees-by-neighborhood-390.png`
- `scratchpad/nd/hoa-fees-by-neighborhood/shots/hoa-fees-by-neighborhood-1024.png`
- `scratchpad/nd/hoa-fees-by-neighborhood/shots/hoa-fees-by-neighborhood-1440.png`
- critic JSON: `scratchpad/nd/hoa-fees-by-neighborhood/critic.json`

Looked at as a stranger, every screen: the first phone screen holds the H1, italic line, byline, the Waterbridge sub and the short answer; the tool is one card with three plain controls, and each row on a phone is a card with the fee at the right; each chart is one card with a plain title; lists sit under thin rules. Fixed after looking: on a phone the fee had dropped under "For sale" and sat indented (now beside the name), "Most homes for sale" was cut off in the sort box at 1440, the contents list was one long column on a wide screen, and the Carolina Forest chart's bars added height on a phone (now one line a row).

## For the lead

1. **sitemap.xml:** `<url><loc>https://chapter3realty.com/hoa/fees-by-neighborhood/</loc><priority>0.7</priority></url>` (the date from `build.js dates`).
2. **llms.txt** (HOA section): `- [HOA fees by neighborhood](https://chapter3realty.com/hoa/fees-by-neighborhood/): the monthly HOA fee in 382 neighborhoods of houses, townhomes and manufactured homes around Myrtle Beach (our count of homes for sale), what the fee includes, fees by town, Carolina Forest's HOAs, second fees and leased land.`
3. **Feed under the opening (`idx-lib/feeds.js`):** `"/hoa/fees-by-neighborhood/": { ...AMENITIES, head: "Homes for sale in neighborhoods with a pool and a clubhouse", withStrips: true },` (AMENITIES already filters `has=community_pool,clubhouse`; withStrips as /hoa/benefits/, because the page carries two strips).
4. **Places (`batches/2026-10-b/data/idx-places.json`):** no new place. Add `/hoa/fees-by-neighborhood/` to the `pages` of `waterbridge` and `the-farm`. Strip titles on the page: "Waterbridge homes for sale: a pool complex and 80 acres of lakes" and "The Farm homes for sale: two pools and a clubhouse".
5. **Sibling pages that should link here** (on words already there where possible):
   - /hoa/ (the line that sends readers to the gated and golf pages for fees community by community): "Every neighborhood's own fee, 382 of them, is in our [HOA fees by neighborhood](/hoa/fees-by-neighborhood/) table."
   - /submarkets/carolina-forest/ ("Community fees and figures change; we confirm current numbers with each community before you offer"): "Each Carolina Forest neighborhood's fee now is in our [HOA fees by neighborhood](/hoa/fees-by-neighborhood/) table."
   - /buyers/cost-to-own/ (the HOA line of the yearly cost): "Look up the HOA fee in your neighborhood in our [fee table](/hoa/fees-by-neighborhood/)."
   - /buyers/no-hoa-homes/ (opening): "To compare, see [what HOA fees are, neighborhood by neighborhood](/hoa/fees-by-neighborhood/)."
   - /hoa/hoa-vs-poa/ (the two-associations section): "Which neighborhoods list a second fee is on our [HOA fees by neighborhood](/hoa/fees-by-neighborhood/) page."
   - /hoa/benefits/ (what the fee buys): "What the fee is in each neighborhood with a pool and a clubhouse: [HOA fees by neighborhood](/hoa/fees-by-neighborhood/)."
   - /hoa/dues-increases/: "What each neighborhood charges now is in our [HOA fees by neighborhood](/hoa/fees-by-neighborhood/) table."
   - /submarkets/myrtle-beach/plantation-point/ and /submarkets/carolina-forest/the-farm/: "Compare this fee with other neighborhoods' in our [HOA fees by neighborhood](/hoa/fees-by-neighborhood/) table."
   - /buyers/relocating/which-town/: one link only, no other change (the owner asked that it stay as built): "[HOA fees by town](/hoa/fees-by-neighborhood/#by-town)."
   - /buyers/new-construction/: "What the HOA fee is in each newer neighborhood: [HOA fees by neighborhood](/hoa/fees-by-neighborhood/)."
6. **Shared facts to settle (from VERIFY):** the live /buyers/55-plus-communities/del-webb-grande-dunes/ says "Your HOA fee includes basic lawn care and the beach club." Declaration 7.13 makes the Beach Club fee a master-association charge "separate from, and in addition to" the association's fee; this page says so, and that page should be corrected. The live Myrtle Trace page says the fee keeps up "the gates"; the HOA's site says "gate" (the back gate only). One fact, one value: The Farm $107, Myrtle Trace $95, Seasons about $340 ($342 in the table), Del Webb NMB $315, Del Webb GD about $400 ($401 to $435), Plantation Point no fee and Tidewater $192 to $231 all agree with their own pages.
7. **Recount before release.** The table is the count of 2026-11-13 ("counted in November 2026" on the page, read from findings.json). The data README has the rerun (about 30 minutes, resumes from CACHE); after a rerun, rebuild the spec and re-check the `must()` lines against a re-verified ledger.
8. **analyze.py (data folder):** the verifier asked that Conway Plantation and Crystal Lake be marked `leased_land`. The spec does it at display time from display-names.json, so the verified findings stay byte for byte as checked; fold it into analyze.py at the next recount.

## Scorer note

H4 (image or labelled chart) and A9 (primary sources) passed only once the photos were in: the scorer counts an `svg role="img"` as a chart, not glass.js `bars()` (a `role="table"` with an aria-label), and it counts the photo credits' .gov links as primary sources. Before the photos, a page with three glass charts scored "no labelled chart". A fix belongs in `tools/score.js` with its controls, not in this batch.

## Review 1 (2026-11-13)

Fixed after review 1 (pass=false, 7.5); details and gates in REVIEW-1.md. Closing navy card rule added. No dollar figure in the table where fewer than half the listings give a fee, or a fee under $15 rests on one or two (9 rows). Waterbridge "over 80 acres of lakes and natural areas". The section 3 H2 is now "Which neighborhoods give the most for the fee?", with the 55+ list cut to one link. Townhome $250 against /hoa/'s $290 explained (new ledger row 55). Cresswind moved into the offer. Phone table cards now put the name on its own line. Gates: score 97, critic 0 and 0 at 320, 390, 1024 and 1440, build check OK.

## Round 2 (2026-11-14, FIXES-2.md Group C)

Changed:
- Every community name in the table now links to `/homes/?subdivision=<MLS name>` (the name the table was counted by, URL-encoded), 382 links. A community with its own guide keeps a "Guide" link under the name.
- Waterbridge and The Farm offers are now live strips. Searches and live counts on 2026-11-14 (`/homes/api/strip`, all `ok`):
  - "Waterbridge houses, with the pool complex and lakes": `subdivision=Waterbridge&type=house`, 26.
  - "Houses in The Farm, with two pools and an activity center": `subdivision=Carolina Forest - The Farm&type=house`, 14. (`The Farm` alone matches 28, other communities too, so the MLS name is used.)
  - "Townhomes where the HOA does the lawn care", in the townhome section: `type=townhouse&has=lawn_care_included`, 278.
- "Why are townhome HOA fees higher?" is answered: the fee covers more. Lawn care 84 in 100 townhouse listings against 8 for houses, trash 72 against 46, insurance 37 against 4; pest control, cable, water and sewer almost never in house listings. New facts row 56 (VERIFIED-BY-FIXER, same source as row 32). A "how to compare with a house" paragraph and a line to ask which insurance policy. Two h3s break the section.
- Every other question on the page (headings, FAQ, table notes) was read; each was already answered in the text. FAQ gained the townhome question.
- Offers kept: "Not in the table, or serious about one home?" and "Name the home, and we find every fee it pays." Removed: "Choosing between two neighborhoods?" (kept the closing band and hero offer, which are not "Have us check" boxes). Removed offers: the two "Send me" fallbacks.
- Gates: score 99, claims-scan 0, house-claims 0, critic 0 blocking and 0 warning at 390 and 1440, build check OK.

Note for the lead: `specs/_kit.js` prefers the stale `tools/blog-brain-2026-10-b/`, which has no `G.homesQ`. I built with a Node preload that maps those requires to /home/user/Blog-Brain/tools (scratchpad r2/remap.js). The package step needs the same.
