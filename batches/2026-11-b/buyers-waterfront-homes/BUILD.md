# BUILD: /buyers/waterfront-homes/ (batch 2026-11-b)

Built 2026-11-10 from `PLAN.md` and the VERIFIED and CORRECTED rows of `facts.md` only, at the verifier's values and wording (`VERIFY.md`). Not deployed, not committed. `build.js stitch`, `dates` and `llmsfull` were not run.

## Files (website working copy `scratchpad/wt-live`)

- Spec: `specs/waterfront-homes.js` (new; the live page was hand-made). Build: `node tools/mkpage.js specs/waterfront-homes.js`. URL kept.
- Page: `chapter3realty/buyers/waterfront-homes/index.html`.
- Data read: `data/2026-11-b/buyers-waterfront-homes/deeds-findings.json`, `listings-findings.json`, `from-2026-11-a/findings.json`, `from-2026-11-a/bridges.json`, `from-2026-11-a/chart-tides.json`, and `data/2026-11-a/submarkets-north-myrtle-beach/findings.json` (Cherry Grove). The verifier's corrections (rows 1, 2, 8, 16) and GC row 13 are typed in the spec next to their row, and each is checked against the value it replaces, so a re-run of the data stops the build until the correction is checked again.
- Photos: `data/2026-11-b/buyers-waterfront-homes/photos.json` (new). Seven records copied from the pages that licensed and checked them (`reused_from` in each record); captions rewritten to name only what is in the frame. Five files are used where they are. Two (`oceanfront-houses-from-the-ocean`, `garden-city-marsh-from-above`) had no embedded metadata, so they were copied to `chapter3realty/images/2026-11-b/buyers-waterfront-homes/` and their metadata embedded with `photos.js embedMetadata` (`copied_from` in the record). The share image is the Little River waterway aerial (16x9 crop, public domain).
- No other page or shared file was touched (no idx-lib, partials, idx-places.json or headlines.json edits).

## Outline

- **Title** (59): Waterfront Homes in Myrtle Beach: Prices From Ocean to Lake. **Description** (154): Waterfront homes in Myrtle Beach: what a home on the ocean, the Intracoastal, the marsh, a channel, a river or a lake costs, docks, flood, homes for sale.
- **H1**: Waterfront homes in Myrtle Beach: / *from the ocean to the lake, what each one costs.* (italic line at about half the H1's size). Sub (25 words): From the sun coming up out of the ocean to a boat at your own dock, seven kinds of water, each with its own price. Byline Devin Day, reviewed by Tim Nash.
- **Short answer**: a house on the beach about $2.2 million, on the waterway about $1.3 million (rows 1, 3); a condo in an oceanfront building about $200,000 (row 2), and every waterfront house for sale under $300,000 is on a lake or pond (row 11).
- Slim offer bar: "Tell us the boat and the budget. We send the homes on the water that fit." / Send me waterfront homes that fit. "On this page" with short labels.
1. **What does a waterfront home cost in Myrtle Beach?** Two sentences, then the glass chart "On the beach, a house sold for the most and a condo for the least": beach house $2.2 million, waterway $1.3 million, Garden City salt marsh $1.24 million, Cherry Grove channels $715,000, Waccamaw River $537,000, any house in Horry County $375,000 (gray reference, row 8 corrected), condo in an oceanfront building $200,000. No lake bar (row 7 struck).
2. **Which kind of waterfront home fits you?** A plain numbered list under thin rules, one want per line, each jumping to its entry. Then seven numbered entries (H3), each: the wow first, the trade-off, the price in a sentence, one photo (beside the text from 1,100 px), its homes strip with an offer pill as fallback.
   1. Oceanfront houses: the sun comes up out of the ocean (row 23 corrected, rows 1, 9, 16, story `ny-client-boat`). Pill: Book a showing on the oceanfront.
   2. A condo in an oceanfront building: the same sunrise for less (rows 2, 10 corrected; links /invest/condo-buildings/ and /invest/condos/; no condo H2). Pill: Get the condos that face the ocean.
   3. Intracoastal Waterway homes: your boat at your own dock (rows 24, 20, 16, 33, 3). Pill: Book a showing on the waterway.
   4. Marsh front homes: crabs off your own dock (rows 25, 21, 14, 5, 6). Pill: Have us check the depth at a marsh dock.
   - Mid-roll offer: "Not sure which water fits your boat?" / Have us match the water to your boat.
   5. Cherry Grove channel homes: a boat out the back door (rows 26 corrected, 21, NMB 13, 4). Pill: Get the Cherry Grove channel homes for sale.
   6. Waccamaw River homes: dark water, cypress and a wildlife refuge (rows 27 corrected, 28, 16, 3). Pill: Get the homes on the Waccamaw River.
   7. Lakefront homes: water out back on a smaller budget (rows 11, 29, 13; no deed price, no flood share). Pill: Get the lakefront homes under $500,000.
3. **Can you build a dock on your waterfront lot?** The count (row 12, count only), the SCDES permit and what it covers, the lot rule (75 and 50 feet, lots since May 23, 1993), the dock master plan, the creek-width table (rule in force now, "usually", not the waterway, the proposal needs the legislature), fee, wait, repairs, storms, selling, other approvals as a list under rules, 86 houses with no HOA fee (row 30). Offer: "Buying a house for its dock?" / Have us look up the dock's permit before you offer.
4. **Do you need flood insurance on a waterfront home?** The lender rule; a table of the high-risk share by water (ocean VE about 6 in 10, channels all but 3 of about 680, river all but 4 of about 460, waterway 3 in 10 wholly outside and 6 in 10 middle outside); a table of FEMA policy costs (row 18); the lot is not the house; links /buyers/undisclosed-flooding/ and /buyers/coastal-insurance/.
5. **Can you get from your dock to the ocean by boat?** Little River Inlet's channel, Murrells Inlet; H3 bridges (13 crossings table, 65 feet fixed, swing and rail clearances, the Little River rush-hour rule, Barefoot Landing and Socastee on signal), Socastee bridge photo, the 12-foot design depth and the rock ledges; H3 tide chart "At an ocean-side dock the water drops 4 feet or more, on the waterway about 2" (four bars); H3 deeded slips (322, 223 in Little River, Mariner's Pointe about $16,500). Offer: "Will your boat make it to the ocean from this house?" / Ask us which bridges stand between a house and the inlet.
6. **Oceanfront or ocean view: what does waterfront mean in a listing?** Short: first row against a view; 117 name the waterway, 22 are marked waterfront; lake and canal listings all marked; what we check.
- **FAQ** (6, each answered on the page): sunrise; cheapest waterfront; how much more; can I build a dock; a boat without a dock; flood insurance.
- **End band**: "Tell us the water you want." / Set up a waterfront tour.
- Sources line (12 links); the listing count date ("counted November 10, 2026") is read from `listings-findings.json`.

Writer's derivations from verified rows, for the next re-check: "about six times the middle house in Horry County" ($2.2 million against $375,000, rows 1 and 8: 5.8), "less than half of what one on the waterway did" ($537,000 against $1.3 million, row 3: 0.41), "It costs far less than a house on the beach" (rows 1, 2).

Left out on purpose: any lake deed price and lake flood share (rows 7, 17 struck); the dock price per square foot (row 12, and WF row 24); the waterway asking price (row 11); "every morning" north of central Myrtle Beach (row 23); the middle-half range for the oceanfront houses (row 1); the Myrtle Beach and North Myrtle Beach condo medians (condo pages own them; cut for number density); Dock Holidays slips (cut for number density); the map of the water (CRAFT: a drawing that takes effort is cut; the bridge table carries the route); the 2026-11-a map geojson.

## Gate results (final build, 2026-11-10)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /buyers/waterfront-homes/` | **100/100** (SEO 100, AEO 100, Human 100, Trust 100), 2,516 words. One partial: P2 number density 3.5 per 100 words (90 numbers in about 2,550 words), 99%. |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page. The 4 site-wide hits are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt, as before this build. |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/structure-check.js <page> --strict` | passes |
| `node tools/struck-check.js --batch batches/2026-11-b --preview <dir> --strict` | buyers-waterfront-homes: no struck wording (28 patterns). An earlier draft had "close by" (a distance word, not measured); cut. |
| `node tools/image-meta.js --only /buyers/waterfront-homes/` | passes (after the two copies with embedded metadata) |
| `node tools/inbound.js` | 6 referring pages: /buyers/undisclosed-flooding/, /guides/, /submarkets/garden-city/, /little-river/, /murrells-inlet/, /north-myrtle-beach/ |
| `node tools/critic.mjs http://localhost:8875 /buyers/waterfront-homes/ --widths 390,1024,1440` | 0 blocking, 0 warning at all three widths |
| `node build.js check` | OK, safe to deploy |
| `node build.js audit` | No FAIL on this page except the two mkpage date lines (schema dateModified and visible "Updated July 25, 2026" against sitemap lastmod; `node build.js dates` sets them). Two "~" notes: no attributed sentence from a named licensed person (no quote written for Tim Nash, by rule); "may" 6 times (each is the verified rule's own "may": a dock master plan, a lot that may get a dock, mud at low tide twice, other approvals). |

Fixed along the way: the description had no topic word; a section opener ("It depends on the water."); "plat" and "elevation certificate" put in plain words; "law gives" (a law does not act); the banned word "catch"; the selection list was read as a contents list (H3s now carry `data-toc`, and the list numbers are drawn by CSS); number density 4.6 to 3.5; the tide chart's value text spilled out of its card at every width and the page was 392 px wide at 390 (chart max set to 7 feet, shorter value text); a 974 px wall of text in entry 4 (photo moved); an unverified "homes for sale usually ask more"; a 30-word FAQ sentence.

## Shots

Full-page screenshots of the final build, looked at in tiles at full size:
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/shots/buyers-waterfront-homes-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/shots/buyers-waterfront-homes-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/shots/buyers-waterfront-homes-1440.png`
- Tiles: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/tiles/`; critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/critic.json`.

What a stranger sees: on a phone the answer, the offer bar and the contents list fill the first screen; the price chart reads in one look; the seven wants are a calm numbered list; each entry is text, one photo and one pill. On a wide screen each entry's photo sits beside its text. The bridge table is long on a phone (13 rows) but plain. The lake entry has no photo (none licensed yet).

## For the lead, outside this page's files

1. **Homes strips.** Each entry carries a slot for a new place. Until the place exists, the entry's pill shows. The place contract searches only by subdivision or by a point and miles, so these need either a `has` filter on places or feed strips marked `withStrips`. Titles are true only for these filters; check each count on the day (a strip under 3 homes shows nothing).

| slug | title (data-head) | search it needs | count on 2026-11-10 |
|---|---|---|---|
| wf-oceanfront-houses | Wake up on the beach: oceanfront houses for sale | `type=house&waterfront=1&has=water_ocean` | 28 |
| wf-oceanfront-condos | The ocean from your balcony: condos facing the ocean | `type=condo&has=oceanfront_unit` | 717 |
| wf-waterway | Your boat out back: homes on the Intracoastal Waterway | `type=house&waterfront=1&has=water_icw` | 22 (11 also name a lake; consider leaving those out) |
| wf-marsh | Crabbing water out back: homes on the salt marsh | `type=house&waterfront=1&has=water_marsh` or `water_creek` | 5 + 13. Fallback: point the slot at `gc-on-the-marsh`. |
| wf-cherry-grove-channels | A boat out the back door: Cherry Grove channel homes | `type=house&has=water_canal&near=33.834,-78.628&miles=1.5` | 35 canal homes on the Strand (check how many are in Cherry Grove). If only `nmb-cherry-grove` is possible, its title must be the place name, not "channel homes". |
| wf-river | Wake up on the river: riverfront homes for sale | `type=house&waterfront=1&has=water_river` | 26 (any river: Georgetown 11, Conway 8; the title says "the river", not the Waccamaw) |
| wf-lakes-under-500k | Lake living under $500,000 | `type=house&waterfront=1&has=water_lake&max=500000` | 262 of 429 ask under $500,000 |

   Also: a bolder title for the page feed `DOCK` (`idx-lib/feeds.js` line 94), true by its filter: "Bring the boat: homes with their own dock".
2. **headlines.json**: `/buyers/waterfront-homes/` still holds the old title and H1 ("The Dock Sets the Value", "the dock decides the value"). Update it to the title and H1 above.
3. **Sibling values the verifier flagged**: MB ledger row 18 (oceanfront condos in Myrtle Beach, $148,000) uses the same set-back-prone locator; "about $150,000" holds. WF row 24 (dock $388 against $343 a square foot) has the same lake mix as struck row 12; any page that prints it should drop it.
4. **Photo partner shot list** (send from the owner's Gmail, `templates/photo-request-email.md`): sunrise over the ocean from a dune walkover between central Myrtle Beach and Garden City; a boat tied at a private dock on the waterway; one marsh dock at high tide and the same dock at low tide; a Cherry Grove channel with boats; the Waccamaw's cypress from the water at Conway; a lake-lot dock with a kayak (the lake entry now uses the licensed Plantation Lakes aerial from /buyers/best-neighborhoods/; a ground photo would be better). Never a listing photo.
5. **Links in** (aim for more than 6): /buyers/no-hoa-homes/ (the boat owner's reader), /buyers/coastal-insurance/ and /buyers/flood-insurance-after-the-election/ (flood by kind of water), /submarkets/conway/ (the river), /buyers/best-neighborhoods/ (Plantation Lakes' lake), /buyers/second-home/.
6. Dates: run `node build.js dates` at release (the byline shows the July date until then).
