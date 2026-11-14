# Build: /buyers/land/ (batch 2026-11-d, Lane N, version 1, 2026-11-13)

Website working copy: `scratchpad/wt-139`. Files written there, nothing else touched:
- `specs/land.js` (new)
- `chapter3realty/buyers/land/index.html` (built by `node tools/mkpage.js specs/land.js`)
- `data/2026-11-d/land/photos.json` (new: the photo's license record)
- `chapter3realty/images/2026-11-d/land/country-land-outside-loris-from-above{,-600w,-1200w,-1x1,-4x3,-16x9}.webp` (new)

Facts: VERIFIED rows, and CORRECTED rows at the verifier's wording only. Nothing from VERIFY "Not to publish" is on the page: no $1,615, no ordinance, no study figure, no "runs past Aynor tea-colored", no porch "since the 1870s".

## Outline

- **Title (53):** Land for Sale in Horry County, SC: What an Acre Costs
- **Description (153):** Land for sale in Horry County, by the acre: asking prices by area and tract size, and what to check first: septic approval, zoning, water and flood zone.
- **H1:** Land for sale in Horry County, SC. **Italic line:** What an acre costs, and what you can build on it.
- **Sub:** An acre of land for sale is listed at about $25,000 around Loris and over $150,000 near Myrtle Beach. A lot with no sewer needs a state septic permit first.
- **Short answer:** $25,000 an acre around Loris, $40,000 around Aynor, about $150,000 in Myrtle Beach, Carolina Forest and Socastee (tracts of an acre or more); bigger tracts cost less an acre. The three checks: septic permit, zoning, flood zone; no perc test since the late 1970s.
- **Top offer bar:** "Found land? We check the septic, flood map and zoning before you offer." / Have us check a parcel (/contact/).

Sections:
1. **What does an acre of land cost in Horry County?** About 760 listings in Horry, 170 in Georgetown; middle ask $195,000 and middle size 1.7 acres (two medians, F34). Chart A (8 areas, from `chart-ppa-by-area.json`, tract counts shown). Loris ZIP codes have the most land of the areas counted, 266 and 70 of 10+ acres (F37); 17 tracts of 100+ acres. Asking prices, not sales.
2. **Land around Loris and Aynor: river landings, longleaf pine and old farms.** The wow. H3 Around Loris: tobacco markets by 1903, top county by the 1920s (F29); Cartwheel Bay trail, flytraps (F32); the NAIP photo. H3 Around Aynor: Galivants Ferry landings, fish, the scenic stretch below US 378 (F30 corrected); the Stump (F31 corrected, two sentences); link which-town. Strip `land-loris-aynor`. H3 Around Conway and Longs: $51,000 and $73,000 an acre; the two Waccamaw landings at Longs (F33); link Conway guide. Strip `land-conway-longs`.
3. **The more land you buy, the less each acre costs.** $686,000 an acre under half an acre, $19,000 at 20+ acres (F35). Chart B (5 sizes).
4. **Do you need a perc test to buy land in South Carolina?** No (F1). Permit before a house or manufactured home; no building permit without it (F2). Bold list: apply online $150 with deed or survey map (F3, link deeds guide); borings under the traditional method (F3, F5); wet soil, bedrooms (F4, F5); five years (F3). H3 room needed: 120 gal a bedroom, 360 for three, repair area (F6); 75 ft and 25 ft (F8); engineered system (F7 corrected). H3 the listings: 1 in 4 marked "perc or septic approved" (F38 corrected); we ask for the permit itself. **Offer:** Have us check the septic.
5. **Is there public water and sewer, or do you need a well?** 4 in 10 list public water, 1 in 3 public sewer, 41 a well (F38). No sewer means septic, no water means a well; we ask the provider (F9). GSWSA (F11 corrected); City of Loris (F12). Well notice $70 and certified driller (F10).
6. **What can you build on land in Horry County?** FA and CFA half an acre, 90 ft wide (F13). Table C: FA/CFA, RE, AG4/AG5 5 acres, AG6/AG7 1.5 acres (F14 corrected), SF and MSF. LFA 1 acre; the 25 percent rule for older lots (F13, F17). Our count at the map point: about half in FA or CFA, 6 in 10 tracts of an acre or more, 62 in SF (F40). Link GIS map guide. H3 deed restrictions: 74 mention them, 111 marked mobile home allowed (F39). H3 campers with every condition (F18 corrected). **Offer:** Have us read the lot's rules.
7. **Does land in Horry County need road frontage?** 50 ft, cul-de-sac condition, planning commission (F15 corrected). 60 ft setback on named highways, two stretches of Highway 9 (F16 corrected). 77 dirt or gravel, 49 private road, 27 easement (F39 corrected).
8. **Is the land in a flood zone?** 1 in 8 (91 of 763) in the high-risk zone at the map point, 24 moderate (F40); a big tract can reach a zone away from its point. 3 ft rule in the unincorporated county (F24); more papers (F20). H3 Wetlands (F9 corrected). Links: flood zone check (sentence left out until that page exists), undisclosed flooding. **Offer:** Have us check the flood map.
9. **What does it cost to build on your own land in Horry County?** About $1,650 in state and county fees for a 2,000 sq ft house with septic and well (F3 + F10 + F19, computed in the spec). Table D: septic $150, well $70, building permit about $1,425 on 2,000 sq ft, manufactured home $150 plus zoning after a $5 registration, zoning letter $25, rezoning $250 / $500 plus $10 an acre (F23), impact fees charged since October 2021 (F21 corrected). Story from `nc-client-build-longs` (F41), no lender named. Links: new construction, builders, what is being built. The loan line, word for word (F42), with the AfBA disclosure after the sources.
10. **Is farm and timber land taxed less in South Carolina?** Farm-use value on application (F26); 5 acres timber, 10 acres or $1,000 income (F26); rollback taxes (F27 corrected); home and 5 acres at 4 percent (F25). Link property taxes. **Offer:** Have us look up the land's tax.
- **FAQ (6):** perc test before buying; cheapest land near Myrtle Beach; mobile home on land; camper on land; hunting land (30 marked, F39); Pawleys Island area ($342,000).
- **End band:** Know what the land can hold before you offer. / Ask us about a tract (/contact/). (Fix round 1; see REVIEW-1.md.)
- **Sources line** (under 90 words), then the AfBA disclosure, the photo credit and the ImageObject.

Every request button goes to /contact/ (five boxes and two strip fallbacks). Links out in sentences, our own pages: which-town, Conway, deeds, GIS map, undisclosed flooding, new construction, builders, what is being built, property taxes (9; flood zone check becomes the 10th once built).

Picture: one USDA NAIP aerial (public domain), the which-town record's own export URL re-run at 2000 x 1500 for this page's 1x1, 4x3 and 16x9 crops (Article.image and og:image). Looked at full size: fields, wide lots, pine woods, a wet hollow. Record in `data/2026-11-d/land/photos.json`; `checkEmbedded` passes.

## Gate results (2026-11-13)

| Gate | Result |
|---|---|
| `score.js --only /buyers/land/` (SCORE_TODAY=2026-11-13) | 98/100. SEO 92, AEO 100, Human 100, Trust 100. Only fail: S8 inbound links (0), a lead item below. P2 numbers 3.5 per 100 words (99%). |
| `claims-scan.js` | 0 findings on the page (0 site-wide). |
| `facts-check.js` | 0 on the page. The 4 wrong sentences reported are on other pages (llms-full.txt and two others), not new. |
| `house-claims.js` | 0 sentences to scope or source. |
| `critic.mjs` 390, 1024, 1440 | 0 blocking. 1 warning at 390: the AfBA disclosure reads as 960 px of plain text (legal text, kept as it is on /buyers/programs/). First run had chart labels spilling ("$342,000 an acre"); the value is now the price alone, with "an acre" in the title and note. |
| `build.js check` | OK. |
| `build.js audit` | FAIL lines on this page: "missing from sitemap.xml" and "orphan" only (both lead items). Warnings: not in llms.txt, no Tim Nash quote (we write none), 23 sentences over 22 words, "may" 5 times (verifier wording on wetlands and septic). |
| `struck-check.js --strict` | 2 hits of "two campers" (row 18). Both carry every condition the verifier asked for: no house or business, tagged, registered, road-ready, approved sewer or septic, permitted power, 15 days a month. The pattern fires on the phrase itself. |

Shots (taken after the last build; the preview's sample photos do not load, so strips show their fallback buttons):
- `scratchpad/nd/land/shots/buyers-land-390.png`
- `scratchpad/nd/land/shots/buyers-land-1024.png`
- `scratchpad/nd/land/shots/buyers-land-1440.png`
- critic JSON: `scratchpad/nd/land/critic.json`

Looked at every screen as a stranger: the first phone screen holds the H1, byline, sub and the short answer; charts are one card each with a plain title; tables and lists are plain under thin rules; the Loris section is broken into Around Loris, Around Aynor and Around Conway and Longs, with the photo under the Loris paragraph.

## For the lead

1. **sitemap.xml:** `<url><loc>https://chapter3realty.com/buyers/land/</loc><priority>0.7</priority></url>` (the date from `build.js dates`).
2. **llms.txt** (Buyers section): `- [Land for sale in Horry County](https://chapter3realty.com/buyers/land/): asking price per acre by area and tract size (our count of listings), the SC septic permit (no perc test since the 1970s), zoning lot sizes and mobile home rules, water, road access, flood and the fees to build.`
3. **Feed under the opening (`idx-lib/feeds.js`):** `LAND = { head: "Your own land: acreage for sale", q: [{ type: "land", status: "active", lotMin: "1", min: "40000", has: "county_horry" }, { type: "land", status: "active", lotMin: "1", min: "60000", has: "county_georgetown" }], allowTypes: true, link: "type=land" }` for `/buyers/land/`. The quality bar leaves land out unless a page is about it; `allowTypes` as MULTI does. No price in the title.
4. **New places (`batches/2026-10-b/data/idx-places.json`, index false):**
   - `land-loris-aynor`: type land, active, lotMin 1, ZIPs 29569, 29545, 29581, 29511, 29544. Strip title on the page: "Your own acres around Loris and Aynor" (true only with lotMin 1).
   - `land-conway-longs`: type land, active, lotMin 1, ZIPs 29526, 29527, 29528, 29568. Strip title: "Room to spread out near Conway and Longs".
   If the places schema cannot take a type, the strips stay empty and the "Send me land ..." buttons show (they already do in the preview).
5. **Rebuild this spec once `/buyers/flood-zone-check/` exists:** until then the whole sentence that points to it is left out (`live()` in the flood section); the rebuild adds it with its link.
6. **Sibling pages that should link here** (on words already there where possible):
   - /buyers/new-construction/ ("more on your own lot"): "To build on your own lot instead, see what [land for sale in Horry County](/buyers/land/) costs an acre."
   - /buyers/new-construction/builders/ ("To build on a lot you own, you hire a builder"): "Before you hire one, see [what land costs and what the septic permit needs](/buyers/land/)."
   - /buyers/no-hoa-homes/ (the country around Loris and Aynor entries): "Rather buy the land and build? See [land for sale around Loris and Aynor](/buyers/land/)."
   - /buyers/relocating/which-town/ (Loris "The most land for the money" and Aynor "An acre is the usual lot"): "An acre of land for sale here is listed at about $25,000 ([land prices by area](/buyers/land/))." Note: the owner asked that this page stay as built; add one link only, no other change.
   - /buyers/property-records/gis-map/ ("Buying land, or splitting a lot"): "Our guide to [buying land in Horry County](/buyers/land/) covers the septic permit, zoning and road frontage."
   - /buyers/common-mistakes/ ("Septic tanks are rare at the beach and more common inland"): "Buying land with no sewer? The state's septic permit comes first ([buying land](/buyers/land/))."
   - /submarkets/conway/ (the north edge, biggest lots): "For land around Conway, see [what an acre costs](/buyers/land/)."
   - /invest/what-is-being-built/ (the Aynor and Longs rows): "For land for sale near these projects, see [land for sale in Horry County](/buyers/land/)."
   - /buyers/ hub: a card or line "Land for sale: what an acre costs, and the septic, zoning and flood checks" to /buyers/land/.
7. **Shared facts to settle (from VERIFY):** /invest/horry-county-growth-roads-permits/ now redirects to /buyers/new-construction/, so its $1,615 is off the live site unless the spec is reused; /buyers/relocating/which-town/ still carries the S4 wording "runs past Aynor with tea-colored water" (VERIFY row 30); the county's zoning summary (AG6, AG7 "two acres") disagrees with the ordinance (1.5 acres), and this page uses 1.5.
8. **Photo partner shot list** (templates/photo-request-email.md): the US 501 bridge landings at Galivants Ferry; a cleared tract with road frontage on a county road near Aynor or Loris; a longleaf pine stand at Cartwheel Bay; a septic soil boring flag if he sees one.

## On the owner's question: the biggest share of the searches

This page takes the land-for-sale searches no page owned (head term "land for sale horry county", 720 a month, plus acreage, farms, lots, cheap land, perc test, septic permit, mobile home, camper and the town-name land searches). It leaves "land records", "GIS", "zoning map" and "deeds" to the property records pages, so the two do not compete. What raises its share most now: the feed and the two strips live (searchers for land for sale want listings first), the inbound links in item 6 (S8 is the only score fail), and the sitemap line so Google finds it.

## Round 2

Built with `node -r <preload> tools/mkpage.js specs/land.js`: the bundled tools/blog-brain-2026-10-b/tools/glass.js has no homesQ, so a preload pointed it at Blog-Brain's glass.js (the lead should refresh the bundle).

Changed (specs/land.js only):
- Five strips under the "Price an acre, by lot size" chart, one per row, in the chart's order and words, under a short heading "Land for sale, by lot size". Searches and live counts (curl /homes/api/strip, all `ok`):
  - Lots under half an acre: `type=land&lotMax=0.5`, 1,196 (lotMax ignored by the live site until v1.40, so this count is all land; the strip fills once v1.40 ships)
  - Half an acre to 1 acre: `type=land&lotMin=0.5&lotMax=1`, 900 (lotMin only until v1.40)
  - 1 to 5 acres: `type=land&lotMin=1&lotMax=5`, 726 (lotMin only until v1.40)
  - 5 to 20 acres: `type=land&lotMin=5&lotMax=20`, 351 (lotMin only until v1.40)
  - Lots of 20 acres or more: `type=land&lotMin=20`, 166
- Area strips replace both "Send me land ..." offers and the old G.homes places:
  - "Acres for sale in Loris" (after the Loris photo): `type=land&city=Loris&lotMin=1`, 128
  - "Land for sale in Aynor": `type=land&city=Aynor`, 17
  - "Land for sale in Conway": `type=land&city=Conway`, 150
  - "An acre or more in Longs": `type=land&city=Longs&lotMin=1`, 32
- The owner's Longs story (nc-land-in-longs), his words only, moved from the fees section to the Longs part of "Around Conway and Longs".
- G.homesQScript() added once.

Offers kept (two in the body): "Have us check the septic" and "Have us check the flood map". Hero and bottom bands unchanged. Removed: "Have us read the lot's rules" and "Have us look up the land's tax".

Gates: score 98 (H5 80%: 4 calls to action for 10 sections, because strips are not counted and the body offers are cut to two; P2 numbers 3.7; T2 1 sentence). claims-scan 0, house-claims 0, critic 0 blocking (1 warning: the disclosure paragraph, unchanged), build check and audit clean for this page.
