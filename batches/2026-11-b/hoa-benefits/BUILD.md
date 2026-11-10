# BUILD: /hoa/benefits/ (Lane U, batch 2026-11-b)

Built 2026-11-10 from `PLAN.md`, `facts.md` and `VERIFY.md` in this folder. Only VERIFIED rows, and CORRECTED rows in the verifier's wording, are on the page. Rows 13 and 14 (STRUCK) are not used.

## Files

- Spec: website working copy `specs/hoa-benefits.js` (new; it replaces the hand-made page). Built with `node tools/mkpage.js specs/hoa-benefits.js`.
- Page: `chapter3realty/hoa/benefits/index.html`.
- Data, read by the spec and never typed: `data/2026-11-b/hoa-benefits/` (`findings.json`, `chart-farm-fee.json`, `chart-pool.json`, `chart-price-by-beach.json`, `chart-complaints.json`, `from-2026-11-a/scdca-concerns.json`). The files keep the researcher's first chart labels. The spec maps them to the verifier's labels and checks every figure against its ledger row.
- Images: `chapter3realty/images/2026-11-b/hoa-benefits/`
  - `the-farm-pool-from-above-2026-600w.webp` and `-1200w.webp`, copied from `batches/2026-10-b/images/the-farm/`. NOAA NGS, public domain. The licence record is `data/2026-10-b/photos.json` (slug the-farm, file `images/buyers/the-farm/the-farm-pool-from-above-2026.webp`). That path is not on the live site, so the page serves this copy.
  - `share.jpg`, the share card from `tools/ogcard.js`.

## Outline

- **Title:** "Are HOA Fees Worth It? What $107 Buys in Myrtle Beach" (53 characters).
- **Description:** 146 characters.
- **H1:** "Are HOA fees worth it on the Grand Strand?"
- **Italic line:** "Yes, when the fee buys what you would pay for anyway."
- **Short answer:**
  - The fee is worth it when it buys what you would pay for anyway, for less than it costs alone.
  - The Farm's HOA spends about $43 of each home's $107 fee on cable TV.
  - Its pool line is about $63 a home a year.
  - The trade-off is room: smaller lots, and few houses with a fee list boat parking.
- **Top offer:** "Have us price a home's fee".

Sections:

1. **What does an HOA fee pay for?**
   - The Farm at Carolina Forest as the worked example.
   - Chart A: each home's share of the budget, by line. Cable TV is shown in the accent color.
   - What that means for the reader.
   - The pool photo.
   - Del Webb North Myrtle Beach in one line.
   - The Farm's trade-off.
   - Links to the hub and to The Farm's guide.
   - Strip: the-farm.
2. **Is the pool worth the HOA fee?**
   - Chart B: a home's share of the pool line against one adult's city pass, with each senior price beside it.
   - Myrtle Trace (H3): fifteen ponds to fish, what the fee keeps up, and a short list of its rules.
   - Strip: myrtle-trace.
   - Offer: "Have us get the budget".
3. **Is a beach club worth a higher HOA fee?**
   - Del Webb at Grande Dunes (H3): the Ocean Club, then a plain list (the Ocean Club, the amenity center, what is not allowed), then what you pay: the Beach Club fee on top of the assessments, and the listed fee of about $400 we check (fix round 1: Pulte's 2017 claim cut). Strip: del-webb-grande-dunes.
   - Barefoot Resort (H3): the cabana, the shuttle, the North Tower pool and the Residents' Club as a plain list, then the fees and which neighborhoods belong. Strip: barefoot-resort.
4. **Is a gated community worth the HOA fee?**
   - The guard wage, then the cost of one gate as a plain list of three lines.
   - Dye Estates.
   - "We do not rate any place as safe or unsafe."
   - Offer: "Have us find every fee on a home".
5. **Are condo fees worth it in Myrtle Beach?**
   - A plain list: the building's insurance, the roof, and a policy lenders accept.
   - Links to the hub, the condo buildings page and the master policy page.
6. **Do HOAs increase property value in Myrtle Beach?**
   - $205 against $274 a square foot, and the lot sizes.
   - Chart C, a real table: two bars for each distance band.
   - The ZIP code result, the 2019 national study, and the share of houses with a fee 1 to 10 miles from the beach.
   - Offer: "Ask us for houses with no HOA".
7. **What do you give up in an HOA?**
   - A plain list: room for a boat or an RV, things you cannot build or park (with the New York buyers story, rules-fit version), no cap in state law, and a low fee can mean thin savings.
   - Complaints (H3), with Chart D.
   - Offer: "Have us read the rules".
8. **What do we check before you buy a home with an HOA?** Six numbered items, then "We do not publish an opinion about any named association."

**After the sections:**

- FAQ, four questions, each answered on the page:
  - Waste of money?
  - Sell for more?
  - Is a gated community worth it?
  - Can an HOA raise fees?
- Sources: 15 links and one note on method (Pulte, 2017 was cut in fix round 1).
- Legal notice.
- End band: "Have us review the fee".

Every request button and pill links to /contact/. No two offers share words, and none repeats the hub's.

## Gate results (final build)

| Gate | Result |
|---|---|
| `score.js --only /hoa/benefits/` (SCORE_TODAY=2026-11-09) | 99/100. SEO 100, AEO 100, Human 99, Trust 100. One partial: P9 "posted rules list". It is kept on purpose: the verifier asked that the Del Webb amenity list be tied to the posted rules. |
| `claims-scan.js` | 0 findings, site-wide. |
| `facts-check.js` | No hit on this page. The 4 wrong sentences are on /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt. They were there before this build. |
| `house-claims.js` | 0 sentences to scope or source. |
| `struck-check.js --batch batches/2026-11-b --strict` | hoa-benefits: no struck wording (37 patterns). |
| `repeat-check.js --strict` | Passes. |
| `critic.mjs` at 390, 1024 and 1440 | 0 blocking. 1 warning at 390: about 930 px of text in "property value" between the chart and the offer box. It is three short paragraphs, and was left as is. |
| `build.js check` | OK, safe to deploy. |
| `build.js audit` | For this page, only the mkpage date lines: the schema and visible "Updated" date do not match the sitemap lastmod. There is also the advisory "~" on quoting Tim Nash. No quote was written: the owner's rule forbids it. |
| `inbound.js --only /hoa/benefits/` | 6 referring pages. |

**Not run (as instructed):** `build.js stitch`, `dates` and `llmsfull`.

## Shots

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/shots/hoa-benefits-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/shots/hoa-benefits-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/shots/hoa-benefits-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/critic.json`

Every shot was read at full size, in slices.

**Fixed after looking:**

- On a phone, the price table's caption broke one word per line.
- Text walls in the gate, condo, Barefoot and Myrtle Trace parts became plain lists.
- Five "is on our page" sentences were rewritten.

**In the preview, the four strips show their fallback pills.** The places do not list this page yet (item 2 below). The edge feed does not show either (item 1).

## Needs for the lead

The page touches nothing in `idx-lib/`, `partials/` or `batches/2026-10-b/data/idx-places.json`.

1. **Keep the edge feed on a page with strips.**
   - `idx-lib/feeds.js` maps /hoa/benefits/ to AMENITIES. The page carries four `G.homes()` strips, so `idx-lib/edge.js` drops that feed unless it has `withStrips: true`.
   - Ask: give /hoa/benefits/ its own copy, `{ ...AMENITIES, withStrips: true }`, with a bolder title that is true. The feed is houses built in 2000 or later, $260,000 and up, with a community pool and a clubhouse. Suggested (fix round 1): "Newer homes with a neighborhood pool and clubhouse". **Do not ship the page before items 1 and 2 are in:** in the preview the page shows no homes at all.
2. **Add /hoa/benefits/ to `pages` for four existing places** in `idx-places.json`. No new place is needed.
   - `the-farm`
   - `myrtle-trace`: index stays false.
   - `del-webb-grande-dunes`: index stays false.
   - `barefoot-resort`
3. **Strip titles in the spec**, each true while its ledger rows hold:
   - the-farm: "Homes in The Farm, with pools open until 9 p.m. all season" (row 46, VERIFIED-BY-FIXER from the recorded 2024 amenity rules; TF row 61).
   - myrtle-trace: "Myrtle Trace homes with fifteen ponds to fish" (rows 8 and 9).
   - del-webb-grande-dunes: "Del Webb homes with a membership in the Grande Dunes Ocean Club" (row 12).
   - barefoot-resort: "Barefoot homes with an ocean cabana and a waterway pool for members" (rows 19 and 21). "For members" is there because not every Barefoot neighborhood belongs to the association.
4. **Struck list.** `batches/2026-11-b/facts/hoa-benefits-struck.json` already holds 30 entries. Per VERIFY.md, do not copy the 2026-11-a file over it.
5. **Registry.** Consider `hoa-no-price-premium-local`: houses with an HOA fee list for less a square foot than houses without one, in 12 of 13 Horry County ZIP codes. The source is facts rows 31 to 33. The page prints it, and the hub may cite it.
6. **Photo record.** To have `tools/image-meta.js` or `photos.js` find the copied pool photo at its new path, add a record for `images/2026-11-b/hoa-benefits/the-farm-pool-from-above-2026.webp` that copies the 2026-10-b record. The other way is to ship the original path under `images/buyers/the-farm/`.
7. **Stale dates to re-check:**
   - Row 45 on 2027-01-04: the page does not print the 10 percent test.
   - Rows 24 and 36 by 2026-12.
   - Rows 31 to 34 by 2026-12-15.
   - Myrtle Trace's truck rule in February 2027 (row 10).
8. **Photo partner shot list.** Send it with the group email (PLAN section 5):
   - Barefoot's Beach Cabana from the beach.
   - A Myrtle Trace pond.
   - The Farm's activity center and pool.
   - A staffed guardhouse from the public road.
   - A boat on a trailer on a street with no HOA.


## Fix round 1 (2026-11-10)

See `REVIEW-1.md`. New ledger rows 46 and 47 (VERIFIED-BY-FIXER). Row 15 (Pulte) is no longer on the page. Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-benefits/r1/shots/`.
