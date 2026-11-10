# Build: /market-reports/july-2026/ (batch 2026-11-b, the July 2026 report, June 2026 data)

Writer, 2026-11-10. Spec: `<web>/specs/july-2026.js` (the page's first spec; the live page was hand-made). Page: `<web>/chapter3realty/market-reports/july-2026/index.html`. Data: `<web>/data/2026-11-b/market-reports-july-2026/june.json` (unchanged). Share card: `<web>/chapter3realty/images/2026-11-b/market-reports-july-2026/market-report-june-2026-share.jpg` (tools/ogcard.js, moved out of `og/`). `<web>` = `scratchpad/wt-live`.

URL kept. mkpage kept the page's datePublished, 2026-07-19 (row 21). No date typed. Not run: `build.js stitch`, `dates`, `llmsfull`.

## Outline

- Title: "Myrtle Beach Housing Market Report: June 2026 Data | Chapter3" (61). Description (156): "June 2026 data for Myrtle Beach and the Grand Strand: the median house $359,945, the median condo $244,270, homes for sale, condo offers and prices by area."
- H1: "Myrtle Beach housing market report: June 2026 data." Italic line (about half the H1): "Prices stayed level. Fewer houses were for sale, and more condo buyers had an offer accepted."
- Byline: Devin Day, reviewed by Tim Nash (spec author "devin").
- Archive line (the hero sub, shown in a small box under the byline): "This report covers June 2026. Find the newest numbers in the Myrtle Beach market reports, and whether it is a buyer's market today in the buying guide."
- Short answer: the June medians, about $360,000 and about $244,000, both within 2 percent of a year earlier; fewer houses for sale; 21.5 percent more condo offers accepted. No offer bar under it (archive page; the edge feed follows).
1. **What did Myrtle Beach homes sell for in June 2026?** The two medians and their change; the first-half medians; what a median is. Visual: "June 2026 at a glance", seven rows, houses and condos, June 2025 in small type (rows 2, 4, 7, 8, 9, 10, 12, 13). What CCAR's figures cover (row 1). Photo: houses and condo towers on the same beach (USGS, public domain, record from /submarkets/myrtle-beach/).
2. **Were Myrtle Beach home prices falling in June 2026?** Not for houses (three Junes, about $360,000 to $365,000); condos 7 percent below 2024 (row 6). Chart: three first halves, houses and condos (glass.js bars). The 12-month range (row 14). Offer: "Want these numbers for your own street?" / "Send me my street's sales" (/contact/).
3. **Did the rise in Myrtle Beach homes for sale stop in June 2026?** Yes, for houses: 3.4 percent fewer, the second month in a row, after ten months above (rows 9, 11). Chart: the 12 monthly changes, two brass bars below zero (labelled SVG, phone and wide). Table: three Junes of houses and condos for sale and months of supply (rows 9, 10). Months of supply in plain words. Permits, 555, down 6.9 percent, with the link to /invest/what-is-being-built/ (row 18).
4. **Were buyers coming back to Myrtle Beach in June 2026?** The wow line: 486 condo offers accepted, 21.5 percent more, the most of three Junes (row 12). House offers up about 8 percent; 1,127 house closings, the most of the 12 months in the report (rows 13, 3). Homes strip: "Oceanfront condos under $205,000 in and around Myrtle Beach" (row 22 wording; fallback pill "Send me oceanfront condos in Myrtle Beach under $205,000"). Offer: "Found a condo you like? We check the building first." / "Have us check the building".
5. **What did homes sell for in each Myrtle Beach area in the first half of 2026?** Highest and lowest areas; why the table is January to June. Table: ten areas with ZIP codes or MLS area, house and condo medians with sales counts, and the all-region row (rows 15, 16). Conway and Loris / Longs hold more than a third of house sales; the region's median is below five beach areas (row 17, verifier wording). Myrtle Beach area condos $205,000, down 12.8 percent (row 16). Link to /sell/home-value/.
6. **What did June 2026 mean for Myrtle Beach buyers and sellers?** Three lines (house buyers, condo buyers, sellers), past tense, no forecast. Link to the hub.
- FAQ, "Questions about the June report": four questions, each answered above (median price, were prices falling, homes for sale, where the newest numbers are).
- Sources: CCAR Monthly Indicators June 2026, CCAR Local Market Update June 2026, CCAR MLS FAQ, Census Building Permits Survey. Photo credit, legal line (no legal, tax or lending advice).
- End band: "Get the newest numbers for your street or building." / "Send me the numbers" (/contact/).

Changes from PLAN.md: the national price clause is out (row 20 STRUCK); the strip title uses the verifier's "in and around Myrtle Beach" and is not tied to the ZIP-code median (row 22); row 17 uses the verifier's wording; the house offer sits after section 2 instead of 4, so offers fall after sections 2 and 4 and at the end; one labelled 12-month chart was added in section 3 (the deciding fact, row 11) and one public-domain photo in section 1, because the scorer and the critic need a picture with alt text; mkpage needs at least three FAQ entries, so the FAQ has four dated ones. Prose rounds to the nearest $1,000 and drops most years (the owner's "numbers are exact ... mentioning the date so much"); the tables keep the exact CCAR figures.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /market-reports/july-2026/` | 99/100 (SEO 100, AEO 100, Human 99, Trust 100). No FAIL. Partial: P2 numbers 4.4 per 100 words (73%); a market data page. |
| `node tools/claims-scan.js <web>` | 0 findings sitewide, 0 on this page |
| `node tools/facts-check.js <web>` | 0 on this page. 4 wrong sentences on 3 other pages (state income tax: /buyers/relocating/from-massachusetts/, /from-virginia/, llms-full.txt), not touched |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source |
| `node tools/struck-check.js --batch batches/2026-11-b` (page copied as `rb1/market-reports-july-2026/preview/market-reports-july-2026.html`) | 22 patterns, no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/inbound.js <web> --only /market-reports/july-2026/` | 6 referring pages |
| `node tools/critic.mjs http://localhost:8873 /market-reports/july-2026/ --widths 390,1024,1440` | 0 blocking, 0 warning at each width (390 and 1024+1440 run separately: the three-width run hung once at 390 and was stopped) |
| `node build.js check` | OK, safe to deploy |
| `node build.js audit` | On this page only the mkpage date lines (schema dateModified and visible "Updated July 19, 2026" against sitemap lastmod 2026-10-04; `build.js dates` sets them) and the usual note "no attributed sentence from a named licensed person" |

Fixed on the way: a missing share image (S5), no labelled picture (H4, P7, critic photos.blog-no-photo), five exact amounts and 29 date mentions in prose (P1, P3), two overlapping chart labels (critic), "our" in the hero sub (audit), one 29-word sentence, a sentence shape in four sections (repeat-check).

## Shots

`scratchpad/rb1/market-reports-july-2026/shots/market-reports-july-2026-390.png`, `-1024.png`, `-1440.png`; cut into screens in `scratchpad/rb1/market-reports-july-2026/parts/`. Critic JSON: `critic-390.json`, `critic-wide.json` in the same folder. Read at full size: calm, one card style, tables under thin rules, nothing cramped; the strip's fallback pill and the condo offer sit one above the other until the strip fills.

## For the lead (this page does not edit these)

- **New place** in `batches/2026-10-b/data/idx-places.json`: `{"slug": "mrj-oceanfront-condos-under-205k", "name": "Myrtle Beach", "pages": ["/market-reports/july-2026/"], "q": {"near": "33.70882,-78.88539", "miles": 3, "type": "condo", "has": "oceanfront_unit", "max": "205000"}, "index": false}`. 154 condos on 2026-11-10 (row 22). Strip title on the page: "Oceanfront condos under $205,000 in and around Myrtle Beach". Until it exists, the fallback pill shows.
- **Edge feed title** for "/market-reports/july-2026/" in `idx-lib/feeds.js` (optional): "Beach condos where the seller already cut the price" (true for the CONDO_CUT filter).
- **Hub card**: the hub's report list says "Sales, prices and homes for sale, the median price by Grand Strand area, and building permits". It stays true. The hub spec checks this page still says "June 2026"; it does.
- **Referring pages**: six. /submarkets/carolina-forest/ and /submarkets/myrtle-beach/ link it for "the region"; the lead may point those to /market-reports/ (the hub has newer numbers).
- **Sitemap**: `changefreq` "yearly" for this archive URL, if the build sets it.
- **Rate scanner**: the page states no rate; `facts-check` and `claims-scan` find nothing on it.
- **Release**: run `node build.js dates` so dateModified and the byline's "Updated" match the sitemap.
