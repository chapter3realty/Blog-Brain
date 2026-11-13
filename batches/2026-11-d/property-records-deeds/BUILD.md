# Build: /buyers/property-records/deeds/

Built 2026-11-13 on wt-139. Lane N, version 1.

- Spec: `wt-139/specs/property-records-deeds.js` (author "devin", glass theme, the structure of `home-value.js`, `garden-city.js` and its sibling `property-records-gis-map.js`).
- Page: `wt-139/chapter3realty/buyers/property-records/deeds/index.html`.
- Data: `wt-139/data/2026-11-d/property-records-deeds/`.
  - `deed-index-stats.json` (the researcher's count, row 20).
  - `page-facts.json` (new). It holds the fees, the office, the document types, the index entry's fields and the Horry vs Georgetown rows, each with its ledger row.
  - `photos.json` (new). The one photo record, reused from /hoa/liens-and-foreclosure/ with its own caption.
- Images: no new files. The page shows `images/2026-11-a/hoa-liens-and-foreclosure/horry-government-justice-center*.webp`, which is already on the site. The record is CC BY-SA 3.0, Pollinator at English Wikipedia. Its place was checked by that page's fixer against courthouses.co. That page's ledger row 39 still says "pending" for a fresh verifier. The lead should mark it there.
- Facts: VERIFIED rows, and CORRECTED rows at the verifier's wording only. The struck list passes: `struck-check.js` finds no struck wording, 20 patterns.

## Title, H1, sub

- **Title (51):** Horry County Land Records: Free Deed Search by Name
- **Description (156):** How to search Horry County land records at the Register of Deeds: deeds, mortgages, liens and plats by name, free, and how to get a copy of the deed itself.
- **H1:** Horry County land records: how to search deeds, liens and plats
- **Italic line:** Deeds, mortgages and liens back to late 1979, free to search by name.
- **Sub:** The Horry County land records search is free, needs no account and takes three steps. Reading the deed itself takes a trip to Conway or a copy.

## Outline

The short answer: free online at the Register of Deeds' search with no account. Choose Name and type the last name first. The papers themselves are in Conway, by mail from $8, or pulled by us free.

1. **How do I search Horry County land records?**
   - The navy "Open the Horry County deed search" button and the line "Chapter3 is not the county".
   - Three steps with icons.
   - Offer 1: "The deed itself is not online." Button "Send us the address".
   - A quiet line of links: the GIS map guide, Georgetown, the hub.
   - An "On this page" list with 13 short labels.
2. **Are Horry County land records free?** Yes. The index is online but the documents are not (the deciding fact, R10). The photo of the Government and Justice Center. The county's "Land Records" app is the parcel map and needs a county account, so it links to the GIS map guide.
3. **How do I get a copy of my deed in Horry County?** Three ways and a copy-cost table. Offer 2: "Have us get the deed." Button "Get the deed for me".
4. **How do I search Horry County deeds by name?** A drawing of the Name search with four numbered fields (V2), then the four fields explained.
5. **Can I search Horry County deeds by address?** Two steps: from the GIS map's parcel card to the deed book and page, then to the deed. The memo search finds a subdivision. 99 in 100 deeds carry a parcel number.
6. **How do I look up a deed by book and page in Horry County?** A small tool: type a deed book and page and the county's page for that deed opens in a new tab (R19). Book types for plats, mortgages and liens.
7. **How do I find a mortgage, a lien, a plat or an easement in Horry County?** A table of what you want and which document type to pick (11 rows, R8). What the index does not hold: judgments (Clerk of Court), property tax and unrecorded HOA dues. Offer 3: "Have us check a house for liens before you offer." Button "Ask us to check for liens".
8. **How do I read a Horry County deed?** A drawn index entry with 10 fields (V5). The stat tile: 36.5% of deeds show $0 or no price, with a 10 by 10 dot grid (V7, our count of 30,339 deeds). It does not say why. A link to home value for real sale prices. What the deed itself adds, including the affidavit (R28 corrected).
9. **How far back do Horry County land records go online?** Names from late 1979 at Deed Book 660. Older books, back to Book 1, open by book and page only. The list runs a few days behind. About 2,500 deeds a month.
10. **Does Horry County have a property fraud alert?** Three steps: list every version of your name, then a navy sign-up button. An alert cannot stop a recording. Offer 4: "Got an alert you did not expect?" Button "Have us look at a new filing".
11. **How do I search Georgetown County deeds for Pawleys Island and Litchfield?** A navy button. The name format, the 2021 book codes and records back to the late 1860s. A Horry vs Georgetown table (V3). Georgetown's alert link. The free removal of a personal number (SC 30-2-330).
12. **Horry County Register of Deeds: phone, hours and address.**
    - The office card (V8), with tap to call and a map link.
    - H3 "Horry County recording fees" (#fees): the flat-fee table, the deed fee at $3.70 per $1,000 with who owes it (R26 corrected), and the exempt deeds (R27 corrected).
    - Links to net proceeds, closing costs and FSBO.

**FAQ (5):** Are deed records public? Can I see my deed online? What does a copy cost? Does the fraud alert cost anything? Is Chapter3 the Register of Deeds?

**End band:** "Buying or selling in Horry or Georgetown County? Send one address." Button "Send an address".

Every request button goes to /contact/.

**Our own pages linked (14):**
- /buyers/property-records/ (hub and breadcrumb)
- /buyers/property-records/gis-map/
- /hoa/liens-and-foreclosure/
- /hoa/documents/
- /invest/foreclosures/
- /sell/inherited-house/
- /sell/home-value/
- /buyers/property-taxes/
- /submarkets/pawleys-island/
- /sell/net-proceeds/
- /buyers/closing-costs/
- /sell/fsbo/

Review 1 fix: section 7 ("Property tax") now links /buyers/property-records/tax-bill/ on "county tax bill". The page is built in wt-139. If the lead ships deeds before tax-bill, remove that link (audit fails on a dead link).

**Not used:**
- Online image purchase or escrow viewing (R11 struck).
- "No punctuation" in names (R4).
- "The index starts in 1984" (R5 limit).
- "116 a weekday" (R20).
- Any private name, lot, price or parcel (R21).
- "$0 because" (R27).
- "Every deed has an affidavit" (R28).
- A judgment search claim (the Public Index is linked only as the courts' case search, R31).

## Gate results (final build)

| Gate | Result |
|---|---|
| `score.js --only` (SCORE_TODAY=2026-11-13) | **98/100**: SEO 96, AEO 100, Human 99, Trust 100. S8 is at 50% (1 referring page, gis-map; lead item). P6 is at 75%: "grantor" is the county's own field label, and the page says "on a deed, the seller" beside it. |
| `claims-scan.js wt-139` | 0 findings, none on this page |
| `facts-check.js wt-139` | No wrong sentence on this page. The 4 wrong sentences it reports are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt, from before this build. |
| `house-claims.js` | 0 sentences to scope or source |
| `struck-check.js --strict` | buyers-property-records-deeds: 20 patterns, no struck wording |
| `critic.mjs` 390, 1024, 1440 | **0 blocking, 0 warning** at every width. Round 1 blocked on "blog with no real photo" (fixed with the photo) and 1029 px at 1024 (the header nav gap, fixed as on garden-city). |
| `build.js check` | OK, exit 0. No line for this page. |
| `build.js audit` | Two FAILs on this page. (1) "missing from sitemap.xml" (expected; lead). (2) "cannibalisation: keyword 'horry county register of deeds' declared by /buyers/property-records/deeds/, /hoa/documents/". The fix is on /hoa/documents/ (lead item 4). WARN only: not in llms.txt, no Tim Nash quote (none allowed), 6 sentences over 22 words (none over 28). |

The preview was stopped with `fuser -k 8921/tcp`.

## Shots

Full pages, made after the final build:

- `scratchpad/nd/property-records-deeds/shots/buyers-property-records-deeds-390.png`
- `scratchpad/nd/property-records-deeds/shots/buyers-property-records-deeds-1024.png`
- `scratchpad/nd/property-records-deeds/shots/buyers-property-records-deeds-1440.png`

The same pages cut into screens are in `scratchpad/nd/property-records-deeds/shots/parts/`. The critic JSON is `scratchpad/nd/property-records-deeds/critic.json`. Scratchpad is `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/`.

What changed after looking at the shots as a stranger:
- Each drawing was a card inside a card. Now one card.
- The fee and copy tables stacked into seven "Fee: $25" rows on a phone. Now two columns at every width.
- "How far back" said the 1979 line three times. Now once.
- The Georgetown list repeated the table's rows. Now the table holds them.
- The stat caption repeated the sentence under it. Now the caption says only what a dot is.

The preview's homes feed does not load its sample photos, so the edge feed under the opening is not in the shots.

## Lead items

1. **sitemap.xml:** `<url><loc>https://chapter3realty.com/buyers/property-records/deeds/</loc><priority>0.8</priority></url>`. Use the file's own format and set lastmod with `build.js dates`. Priority 0.8 because this is the biggest search in the property records family (18,100 + 3,600 + 1,000 a month).
2. **llms.txt** (under the buyer guides, next to the GIS map line): `- [Horry County land records and deed search](https://chapter3realty.com/buyers/property-records/deeds/): how to search the Register of Deeds by name, book and page or document type; copies and fees; the free fraud alert; Georgetown County for Pawleys Island.`
3. **Homes feed at the edge** (`idx-lib/feeds.js`):
   - No new place and no new strip on the page.
   - Suggested: `"/buyers/property-records/deeds/": FRESH_MID` (title "Fresh listings from $300,000 to $600,000"). A reader checking a house's records is close to buying, and fresh listings near the middle price suit them.
   - NEWEST is the safe fallback.
4. **Cannibalisation fix on /hoa/documents/** (the plan's sibling item). Drop "Horry County Register of Deeds" from its `keywords`. Link this page on the words "Register of Deeds" in its text. This clears the audit FAIL on both pages.
5. **Hub /buyers/property-records/:** link this page in its first screen, on words like "search Horry County land records and deeds". The page links the hub in its breadcrumb and first section.
6. **Monthly link check** (`tools/site-audit.js`). Add these county URLs from the page:
   - acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeName
   - acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeBookPage
   - acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeComments
   - the JumpToBookPage pattern
   - acclaimweb.horrycounty.org/PublicRecordsNotificationWeb/Subscribe
   - the RNS page and guide PDF
   - the Copy Request Form and price list PDFs
   - publicindex.sccourts.org/horry/publicindex/ (HTTP 406 to scripts; check it by hand)
   - www.georgetowndeeds.com
   - fraudalert.bislandrecords.com/?county=georgetown
   - gtcountysc.gov/178/Register-of-Deeds
7. **Photo record:** mark /hoa/liens-and-foreclosure/ ledger row 39 verified once a fresh verifier confirms the place. This page reuses the photo.
8. **Pages that should link here**, with a sentence on words already near their text:
   - **/buyers/property-records/gis-map/** already links here ("deed and plat search guide"). No change.
   - **/hoa/documents/:** "The recorded ones are in the county's deed index; our [Horry County deed search guide](/buyers/property-records/deeds/) shows how to find them by name."
   - **/hoa/liens-and-foreclosure/:** "A recorded lien or a lis pendens shows in the county's deed index; see [how to search Horry County land records](/buyers/property-records/deeds/)."
   - **/sell/inherited-house/:** "A deed out of the estate is recorded at the Register of Deeds; our [Horry County deed search guide](/buyers/property-records/deeds/) shows how to find the family's deeds."
   - **/sell/fsbo/:** "The deed fee is paid when the deed is recorded; [Horry County's recording fees](/buyers/property-records/deeds/#fees) are flat per document."
   - **/buyers/closing-costs/:** "Deed stamps are paid when the deed is recorded at the [Horry County Register of Deeds](/buyers/property-records/deeds/)."
   - **/sell/net-proceeds/:** "The deed stamps line is the state's fee to record your deed; see [Horry County's recording fees](/buyers/property-records/deeds/#fees)."
   - **/invest/foreclosures/:** "A lis pendens and a notice of foreclosure are recorded in the county's deed index; see [how to search Horry County land records](/buyers/property-records/deeds/#liens)."
   - **/submarkets/pawleys-island/:** "Pawleys Island deeds are in Georgetown County's own search; our [deed search guide](/buyers/property-records/deeds/#georgetown) shows how to use it."
   - **/sell/home-value/:** "Sale prices come from the county's deeds; [how to search Horry County land records](/buyers/property-records/deeds/) shows where they are recorded."
   - **/buyers/property-records/tax-bill/** (once built): "Liens and deeds are at the Register of Deeds, not the tax office; see [how to search Horry County land records](/buyers/property-records/deeds/)."
9. **Hub lookup tool** (LOOKUP-TOOL.md): this page's book and page box uses `https://acclaimweb.horrycounty.org/AcclaimWeb/details/JumpToBookPage/1/<book>/<page>` (R19, deed books). A name cannot be prefilled by link.

## How this page wins the biggest share of its searches

1. The title and H1 start with "Horry County land records". The H2s are the suggestion strings: free, copy of my deed, by name, by address, book and page, mortgage, lien, plat, easement, how far back, fraud alert, Georgetown, phone and hours.
2. The first screen does the job. It has the county button and three steps, and no sign-up.
3. The page says what the county and the data brokers do not:
   - the documents are not online;
   - how to go from an address to a deed;
   - what the index does not hold;
   - 36.5% of deeds show no price (our count).
4. The family of four pages (hub, deeds, GIS map, tax bill) splits the cluster cleanly. The map seeker gets one line and a link to gis-map.
5. Inbound links (item 8) are the next lever. Today one page links here.
