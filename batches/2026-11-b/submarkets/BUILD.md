# /submarkets/: build record (the town guides hub)

Built 2026-11-10 from `PLAN.md`, using VERIFIED and CORRECTED rows of `facts.md` only, in the verifier's wording (`VERIFY.md`).

## Files

- Spec: `specs/submarkets.js` (new). The live page was hand-made. It is now built with `node tools/mkpage.js specs/submarkets.js`. The URL and canonical are kept.
- Page: `chapter3realty/submarkets/index.html`.
- Data: `data/2026-11-b/submarkets/`.
  - `build_towns.py` now carries the verifier's wording: H13, H18, H19 and H21 wow lines; "the county's list names no rental permit" (H27); H31 struck; the four "where" cells; the Garden City group (H6); the Surfside inland range (H5); Pawleys' Georgetown sale-date window.
  - The Myrtle Beach wow says "is about 1.3 miles long", as the guide prints it. The audit refuses "runs about".
  - Re-run: "all nine match their guides".
  - `towns.json` was rebuilt from it. `map-points.json` is unchanged.
- Images: none new. The page shows four photos already licensed on their guides, with credits and ImageObject schema:
  - Little River waterfront and Surfside pier: NAIP and NOAA, public domain.
  - MarshWalk: NAIP, public domain.
  - Pawleys north end: CC BY-SA 4.0.
- The Surfside pier's 16x9 crop is the share image.

## Outline

1. **Hero.**
   - H1: "Grand Strand town guides: nine places near Myrtle Beach."
   - Italic line at about half the H1's size: "What a home costs in each, and what people love there."
   - Sub: "In these towns you can own a boat slip in Little River, dance the shag in North Myrtle Beach, or walk Surfside Beach's pier for free."
   - Byline: Devin Day, reviewed by Tim Nash.
   - Crumb: Home / Guides / Town guides.
2. **Short answer.** Nine guides from Little River to Pawleys Island. A house or townhouse in Conway resold for about $265,000; a house near the ocean in Surfside Beach sold for about $1 million. Myrtle Beach and Surfside Beach allow nightly rentals only in some zones.
3. **Slim offer bar.** "Tell us how you will use the home. We send the homes that fit." The button "Send me homes" goes to /contact/. The site's edge feed "Top homes, town by town" sits under the opening, as before.
4. **H2 "What towns are near Myrtle Beach?"**
   - One line of introduction.
   - The map: the nine places, numbered in table order, with Census TIGER/Line places and Horry GIS. It was added because the scorer's place-map rule is a blocker, and a reader from out of state does not know where the towns are.
   - The table, built from `towns.json`: Town (with its "where" words and a "Send me [Town] homes" link to /contact/?place=) | Why people love it (the wow) | Middle sale price, past year (the group named in each cell; two lines for Surfside and Pawleys) | Renting by the night.
   - Groups: "On the beach, north to south", then "Inland".
   - Below 900 px, each town is one block under a thin rule: name, where, wow, price, rule, request link.
   - Two notes under thin rules: why the 13-town comparison's figures differ (H36), and that an HOA or the deed can bar rentals, with a link to /invest/str-rules/.
   - One sentence linking which-town and best-neighborhoods.
   - Mid offer: "Found a home in one of these towns?", button "Have us check one address" (/contact/).
5. **H2 "What do these towns look like?"** Four photos, two by two, one column under 560 px: Little River's slip basin, the Surfside Beach pier, the MarshWalk, and the north end of Pawleys Island.
6. **H2 "Buying a home to rent out on the Grand Strand?"**
   - Three links under thin rules: /invest/airbnb-income/, /invest/where-to-buy/, /invest/str-rules/.
   - Two sentences on what we check for one home.
7. **FAQ.** Four questions, each answered on the page: what towns are near Myrtle Beach; can you rent by the night in every town; which towns are inland; where the prices come from.
8. **Sources.** One line, then photo credits.
9. **End band.** "Tell us your budget and how you will use the home." The button "Send me the homes that fit" goes to /contact/.

There are four different offer wordings, and every button only links. No chart: the nine prices are for different kinds of home, so the plan's reason still holds. Fix round 1 (REVIEW-1.md) reversed this. Each town now has its own homes() strip under its row, with a map-search and request fallback (owner, 2026-11-08: "each town should have an IDX feed").

## Decisions taken

1. **Carolina Forest's wow line is H22.** The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres. The row is VERIFIED. The owner wants a wow for every place. The fallback, H23 "no city tax", is not a wow.
2. **Conway's rule cell** says only "We check the city's zoning for each address." H30 is struck.
3. **The NMB rule cell** keeps "An HOA or the deed can still bar rentals" (H25).
4. **Myrtle Beach's "where" words** are "The city in the middle of the Grand Strand". The verifier found this true by latitude (5th of 9 in `map-points.json`). See lead item 7.

## Gate results (final run)

- `SCORE_TODAY=2026-11-09 node tools/score.js --site <wt-live>/chapter3realty --only /submarkets/`: **98/100** (SEO 100, AEO 100, Human 100, Trust 79). No FAIL and no blocker.
  - The only partial is T2, first-hand experience (1 sentence). No story in `stories/stories.json` belongs on a hub, and none was invented.
- `node tools/claims-scan.js <wt-live>`: 0 findings sitewide.
- `node tools/facts-check.js <wt-live>`: 4 wrong sentences on 3 pages, none on /submarkets/. They are tax rows on /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt, which were there before this page.
- `node tools/house-claims.js .../submarkets/index.html`: 0 sentences.
- `node tools/struck-check.js batches/2026-11-b/facts/submarkets-struck.json .../submarkets/index.html`: no struck wording.
- `node tools/critic.mjs http://localhost:8876 /submarkets/ --widths 390,1024,1440`: 0 blocking and 0 warnings at all three widths. Earlier runs found two problems, both fixed:
  - At 1440 px, "a blog with no real photo". Fixed with the photo section, drawn at 352 px so the critic reads it as a photo.
  - "Few visuals".
- `node build.js check`: OK.
- `node build.js audit`: the only FAIL lines on /submarkets/ are the two mkpage date lines ("schema dateModified 2026-06-12 != sitemap lastmod", "visible Updated June 12, 2026"). `node build.js dates` fixes them. Fixed along the way:
  - sources block 92 words;
  - "runs about";
  - no "towns" in the sub;
  - "one thing" in the description;
  - the keyword "Grand Strand towns", which which-town already declares.
- One `~` note remains: no quote from a named licensed person. A quote for Tim Nash is never written.

## Shots (looked at in full, as a stranger)

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/submarkets/shots/`:
- `submarkets-390.png`
- `submarkets-1024.png`
- `submarkets-1440.png`

The critic's JSON is `critic.json` in the folder above.

Fixed from the shots:
- The request link's arrow stood apart from its words. It now stays on the word "homes".
- A double rule under the table.
- The map was a full screen at 1024 px. It is now 620 px wide at most.
- The aerial photos were cramped two-up on a phone. They are now one column under 560 px.

## For the lead (not edited here)

1. **Feed (idx-lib/feeds.js, `TOP_EACH`, line 163; "/submarkets/" at line 305).**
   - It covers seven towns and leaves out Garden City and Carolina Forest, two of the nine guides (H38).
   - Give /submarkets/ its own feed of all nine, so other pages that use TOP_EACH do not change. `towns()` already maps Garden City to `area_garden_city`. Carolina Forest is `["subdivision", "Carolina Forest"]`, as in `RENT_TOWNS`.
   - Use a bold, true title, for example "Pick your town: top homes for sale in all nine". Run it against the live search, as every feed is (at least 10 homes).
2a. **Town strips (fix round 1).** The hub now carries nine `G.homes()` strips. They use places that already exist: `town-little-river`, `town-north-myrtle-beach`, `town-myrtle-beach`, `town-surfside-beach`, `town-garden-city`, `town-murrells-inlet`, `town-pawleys-litchfield`, `town-carolina-forest` and `town-conway`.
   - Add "/submarkets/" to each one's `pages` in Blog-Brain `batches/2026-10-b/data/idx-places.json` and in `idx-lib/places.js`. No new place is needed.
   - If the owner wants Pawleys Island alone, add a `town-pawleys-island` near search and change one line of the spec.
2b. **Photo partner shot list** (owner's Gmail, `templates/photo-request-email.md`):
   - the Surfside Beach pier from the sand;
   - the MarshWalk at dusk;
   - the Little River slips from the dock;
   - the end of the Garden City Pier.
   These replace the two remaining aerials, and the Little River aerial taken out in fix round 1.
2. **The Carolina Forest guide** (hand-made, no spec). Add H22 in one sentence: "The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres." The hub already uses it.
3. **Sibling wording the verifier struck, still live:**
   - /submarkets/north-myrtle-beach/: "a DJ plays beach music from 7" (H13).
   - "Half-mile" MarshWalk (H18) on five pages: /submarkets/murrells-inlet/, /buyers/no-hoa-homes/, /buyers/second-home/, /buyers/relocating/why-myrtle-beach/ and /buyers/relocating/which-town/.
   - /submarkets/conway/: "old river steamboat" (H21).
4. **/invest/str-rules/** goes past the guides' verified words:
   - NMB "citywide" (H33);
   - Pawleys "no business license at all" (H34);
   - Conway "never adopted" (H35).
5. **Re-check at build:**
   - The NMB rule page says "currently" (H25).
   - The Surfside ledger URL is 404. Cite Town Code 17-396.10; the page links the working Zoneomics copy (H26).
6. **Two prices per town across the site (H36).** The hub names the group in each cell and says once why which-town differs.
7. **Ledger line to add:** a Where entry for Myrtle Beach, "in the middle of the Grand Strand", from `map-points.json` latitude order.
8. **Dates:** run `node build.js dates` so the byline and schema dates match the sitemap.
