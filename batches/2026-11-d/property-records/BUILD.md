# Build: /buyers/property-records/ (the hub and the property lookup)

New page, batch 2026-11-d, built 2026-11-13 in the working copy wt-139.

- Spec: `<wt-139>/specs/property-records.js` (glass theme; author "devin"; structure from `home-value.js`, `garden-city.js` and the sibling `property-records-gis-map.js`).
- Page: `<wt-139>/chapter3realty/buyers/property-records/index.html`.
- Share card: `<wt-139>/chapter3realty/og/buyers-property-records.jpg` (tools/ogcard.js; looked at once).
- The tool, in `<wt-139>/data/2026-11-d/property-records/`:
  - `lookup-core.js`: pure functions that read each source's answer (finder, parcels, address points, town limits, evacuation zones, FEMA and the county's copy, Supplemental Flood Zone, zoning, deed book and page) and build the card's plain lines and links.
  - `lookup-ui.js`: the box, the suggestions (at most five), the card, the copy button, the Georgetown card. It reads `window.PR_CFG` from the spec.
  - `lookup-test.js`: 60 controls on the answers saved in `raw/api/`, each rule with a pass and a fail, and a renamed field failing a named control. `node data/2026-11-d/property-records/lookup-test.js` prints "all controls pass (60)". With `--live` it asks the county again at the courthouse and the Carolina Forest library and checks the field names: 67 of 67 passed on 2026-11-13 (node needs `NODE_USE_ENV_PROXY=1` in this container).
  - The spec writes both files into the page as they are, minus comments and indentation, so the page and the test run the same code. The inline script is 21 KB (build.js check note).
- Data read by the spec: `address-points-by-place.json` and `chart-mailing-city-vs-town-limits.csv`. Every share is read from them and checked against its row (R17, R18, R19, R22); a mismatch stops the build.
- Facts: VERIFIED rows, and CORRECTED rows at the verifier's wording only. Left out on purpose: "rooftop" (R1), "free" for the county sign-in (R35), "no punctuation" and an index start year (R32), "cannot be filled in by a link" (R15), any share as homes or parcels (R17 to R22), the evacuation populations (R11), parcel type meanings (R31), the condo building's address (R4, R6), qPublic (R46), any insurance dollar figure (R40), the base flood elevation (kept off the card for calm; the flood guide owns it).
- Photo: the Justice Center record from the deeds page (`data/2026-11-d/property-records-deeds/photos.json`, CC BY-SA 3.0), reused unchanged with the deeds page's own caption fact, credited under the sources with ImageObject schema. No new image file.

## Outline

- **Title (57):** Horry County Property Records Search: Free Address Lookup
- **Description (159):** Free Horry County property search by address: parcel number, lot, town limits, flood zone and evacuation zone, with links to the deed, tax bill and parcel map.
- **H1 (announcement):** Horry County property records: look up any address
- **Italic line (about half the H1):** The parcel, the flood zone, the deed and the tax bill, in one box.
- **Sub:** Type an address. The card shows Horry County's and FEMA's public records for it, line by line, with no sign-in.
- **The tool (first screen, in the hero under the sub):** one box ("Type an address"), one button ("Look it up"), suggestions as you type, then the card, one line per source as it answers:
  Address · Parcel (PIN with Copy, TMS, lot) · Land (the county's acreage, else the drawn area) · Town (inside a town, or unincorporated, with the mailing-city note) · Zoning (county code, only outside the towns; links the GIS page's codes) · Flood (zone in plain words with the verified mortgage rule; FEMA tried twice, then the county's copy; Supplemental Flood Zone line when inside, linking /buyers/undisclosed-flooding/) · Hurricane (zone A, B or C, or none; never "safe") · Records (Deed record by book and page, else Deed search; Tax bill with ?PIN=; Parcel map, county sign-in) · Homes (homes for sale within a mile, /homes/map/?near=) · Offer ("Want the deed, the tax bill and the HOA papers in one email? Free." / Email me the papers; at a condo building: "Tell us the unit number..." / Send us the unit number). A failed source becomes a link to the public map or is left out. Georgetown words or 29585 give the Georgetown card. Under the box: "Public records from Horry County and FEMA, read live for each address. Chapter3 is not the county." and a "Try 1301 Second Ave, Conway" button (the courthouse).
- **Short answer:** the three places the county keeps records; our free lookup reads the public maps with no sign-in and its card opens the deed record and tax bill.

Sections (no contents list):

1. **Your mail says Myrtle Beach. The city line may not.** (the wow) About 3 in 4 street addresses that say "Myrtle Beach" are outside the city; the mailing city comes from the post office; about 7 in 10 street addresses are outside every town; we checked all 246,621 points. V1: a bar chart with HTML labels (16 to 17 px at every width), "Most Myrtle Beach mailing addresses are outside the city": Myrtle Beach 74%, Conway 73%, Surfside Beach 66%, North Myrtle Beach 4% outside. Zoning by side of the line, with a link to the GIS page's zoning codes; "Look it up" back to the tool.
2. **Where are Horry County property records kept?** Table (cards on a phone): deed, mortgage, lien, plat · lot lines, zoning, aerials · tax bill · flood zone (with the flood office's number) · what the home would sell for, each with the county's place and our guide. The Justice Center photo. The Assessor, Auditor and Treasurer in one sentence (catches "property appraiser"). **Offer:** "Skip the three county websites." / a few homes' records gathered by an agent / Let us make it simple.
3. **Can you search Horry County property records by name?** Yes, two county searches, last name first: the deed index (free, no account) and the tax search; the GIS map after a sign-in. Our lookup is by address only and shows no names.
4. **What do Horry County property records not show?** Unpaid HOA charges (with what our agents check), rental rules, the cost of insurance, your own tax bill (4% or 6%), each with its page. **Offer:** "Have us check what the records leave out." / Have us check the home. (Rental rules are said once, here, with both rental links.)
5. **Pawleys Island and Litchfield: Georgetown County records.** Georgetown's map, deeds and tax bills. One wow line beside the strip (the island is less than 4 miles long and mostly one house wide, with a salt marsh behind it; ZIP 29585 is shared with the mainland). Homes strip `town-pawleys-litchfield`, "Top homes in Pawleys Island and Litchfield", fallback pill "Get the homes for sale in Pawleys Island".
6. **FAQ (5):** how to find the owner; why the lookup cannot find an address; why a condo shows many parcel numbers; my evacuation zone (about 1 in 3 street addresses is in one); who answers flood map questions (12 floodplain managers, (843) 915-5090).
7. **End band:** "Found a home you like? See it with a local agent." / Set up a showing.

Every request button goes to /contact/. About 770 words of prose under the tool.

Links out (body): deeds, gis-map, tax-bill, /sell/home-value/, /invest/str-rules/, /hoa/rental-restrictions/, /hoa/estoppel-and-transfer-fees/, /buyers/coastal-insurance/, /buyers/property-taxes/, /buyers/undisclosed-flooding/, /submarkets/pawleys-island/ (14 internal links at 1440). The card adds /buyers/property-records/gis-map/#zoning, /buyers/undisclosed-flooding/ and /homes/map/.

## Gate results (2026-11-13)

| Gate | Result |
|---|---|
| `score.js --only /buyers/property-records/` (SCORE_TODAY=2026-11-13) | **100/100** (SEO 100, AEO 100, Human 100, Trust 100). S8 passes on the two siblings that already link here. |
| `claims-scan.js <wt-139>` | 0 findings |
| `facts-check.js <wt-139>` | 0 on this page. The 4 wrong sentences site-wide are older (from-massachusetts, from-virginia, llms-full.txt). |
| `house-claims.js` on the page | 0 sentences |
| `struck-check.js --batch batches/2026-11-d --strict` | no struck wording (18 patterns) |
| `repeat-check.js --strict` | passes |
| `critic.mjs` at 390, 1024, 1440 | **0 blocking, 0 warnings** (1 photo, 2 other visuals) |
| `build.js check` | nothing failing; one note: 21 KB inline script (page-specific, the tool). "Safe to deploy." |
| `build.js audit` | one FAIL, a lead item: "missing from sitemap.xml". Notes only: not in llms.txt, no Tim Nash sentence, 4 sentences over 22 words (none over 28). |
| `lookup-test.js` | all controls pass (60); `--live` 67 of 67 |

Fixed on the way: a P10 "maps say" in the sub; S5 (own share card); H4 and T2 (the chart is now an SVG; two true first-hand sentences: "We checked all 246,621 points...", "Our agents check the balance before closing"); the critic's two blockers (no photo; 0 words of answer on the first phone screen, see the critic note below); the audit's "Rather" hedge and 2 of 5 question headings (now 3 of 5); list text smaller than paragraphs; record pills underlined; suggestions opening again after a lookup; the condo offer.

The tool was driven in a real browser against the live county services (each request answered through node's fetch, TLS verified): the courthouse (one parcel, deed 1837/226, Zone X, Conway, no zone), a North Myrtle Beach condo building (165 parcel numbers, no single PIN, AE, zone A, the unit-number offer), the Carolina Forest library with FEMA forced to fail (county copy answered Zone X; unincorporated with the Myrtle Beach mailing note; zoning GR; deed 2435/1135), a street with no house number ("Add the house number"), a street match with no lot (937 Broadway: the map link), and a Pawleys Island address (the Georgetown card). No page errors.

Shots (full page, served by tools/preview.mjs on port 8891, then stopped):
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/shots/buyers-property-records-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/shots/buyers-property-records-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/shots/buyers-property-records-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/critic.json`
- Filled cards: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/prtest/condo-1440.png`, `.../prtest/cf-390.png`, `.../prtest/mb-390.png`, `.../prtest/gt-390.png`, `.../prtest/street-390.png` (`courthouse-390.png` predates the fix for the suggestion list that reopened over the box). Driver: `.../prtest/try.cjs`.

The Pawleys strip shows its fallback pill in the shots (photos.test does not load). The site's feed under the opening is not in the shots: it needs the feed entry below.

## For the lead

### Owner approvals (Claude's proposal; the tool works either way)

1. **The deed-book layer (R13).** The card asks the county parcel app's layer 24 for PIN, DeedBook, DeedPage and Acreage only, so "Deed record" opens the record itself for about 9 in 10 parcels. The layer also holds owner names and values; the tool never asks for them (a control fails if a field list ever names owner, value, price, sale or mail). To turn it off: `deedLayer: false` in the spec's `CFG`; the button then opens the deed search and the Land line uses the drawn area.
2. **The county sign-in button.** One "Parcel map (county sign-in)" button by PIN (`/gis/parcels/pin/<PIN>`). Not tested after a sign-in by anyone (R16): test once with a county account. The property card route was left off to keep the card calm.
3. **Evacuation wording.** "Evacuation zone A. The zones mark land at risk of storm surge from the ocean." No claim about which zone is nearest or about order.

### Rebuild once the siblings exist

- /buyers/flood-zone-check/ is not built in this working copy. The spec writes its link only when the page exists (`live()`); today the table's flood row links /buyers/undisclosed-flooding/ and the card's flood line has no guide link. Run `node tools/mkpage.js specs/property-records.js` after it is built.
- `specs/property-records-tax-bill.js` uses `sib()` for this hub and its hub crumb; rebuild it now that the hub exists, and it becomes a third inbound link. `specs/property-records-gis-map.js` likewise links tax-bill, deeds and flood-zone-check only when built.

### Sitemap

```
<url><loc>https://chapter3realty.com/buyers/property-records/</loc><lastmod>(build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
```
Priority 0.85, the same as /buyers/property-taxes/: the hub of three task pages, for 2,400 searches a month each on "horry county property records", "property lookup" and "property search".

### llms.txt

```
- [Horry County Property Records Search: Free Address Lookup](https://chapter3realty.com/buyers/property-records/): A free lookup by address that reads Horry County's and FEMA's public maps: parcel number, land, town limits, flood zone, hurricane evacuation zone, and links to the deed record and tax bill. Where each county record is kept, the county's name searches, what records do not show, and Georgetown County for Pawleys Island; about 3 in 4 street addresses that say Myrtle Beach are outside the city.
```

### Feed (idx-lib/feeds.js)

A feed for this page under the opening (the tool sits in the hero, so the feed lands right under it): active houses and condos across Horry County, spread across the price range, title **"Top homes in Horry County"** (fix round 1: the old title ended in the "homes for sale now" pattern the owner called empty on 2026-10-26; "Top homes in" is his town-page wording). Keep it a normal (top) feed, not `low`. Check the live count first (10 or more).

### Place (Blog-Brain batches/2026-10-b/data/idx-places.json)

Add `/buyers/property-records/` to `pages` of `town-pawleys-litchfield` (the strip in the Georgetown section uses it). No new place.

### Site menu

"Property records" under Buyers in the site menu (README lead item), pointing here.

### Pages that should link here (six or more)

| Page | Where | Suggested sentence (link on the bold words) |
|---|---|---|
| /buyers/property-records/tax-bill/ | first screen (rebuild only; `sib()` is there) | "Deeds, the parcel map and the county's other records are in our **Horry County property records guide**." |
| /buyers/property-records/deeds/ | first screen (already links; keep) | "Every county record in one place: **Horry County property records**." |
| /buyers/property-records/gis-map/ | first section (already links; keep) | "Deeds, tax bills and the county's other records are in our **Horry County property records guide**." |
| /buyers/property-taxes/ | where the PIN or a bill comes up | "Find any address's parcel number with our **free Horry County property lookup**." |
| /sell/home-value/ | the county value section | "The county's records for your address, in one card: **look up your property**." |
| /buyers/undisclosed-flooding/ | where it names the flood zone or the Supplemental Flood Zone | "See an address's flood zone and whether it is in the county's Supplemental Flood Zone with our **property lookup**." |
| /buyers/buying-in-myrtle-beach/ | where it names city limits or the county | "About 3 in 4 street addresses that say Myrtle Beach are outside the city; **check any address**." |
| /buyers/relocating/hurricanes/ | the evacuation zone part | "Find the evacuation zone for any address with our **Horry County property lookup**." |
| /buyers/land/ | parcel or acreage | "Look up a lot's parcel number, acreage and zoning with our **free property lookup**." |
| /hoa/documents/ | where it says what public records show | "What the county's public records show for an address: **Horry County property records**." |
| /sell/inherited-house/ | finding the deed or the tax bill | "Find the deed record and the tax bill for the house with our **property lookup**." |
| /sell/fsbo/ | the paperwork part | "Pull the county's records for your address with our **free lookup**." |

### Other

- **The test's home.** `lookup-test.js` sits in the page's data folder because this build may touch only that folder. The lead may move it to `tools/lookup-test.mjs` with `tools/fixtures/lookup/` (PLAN), and add `--live` to the monthly link check.
- **Monthly link check (tools/site-audit.js):** the eleven service URLs in `lookup-core.js` (PR_SRC), https://acclaimweb.horrycounty.org/AcclaimWeb/, https://horrycountytreasurer.qpaybill.com/Taxes/TaxesDefaultType4.aspx, https://www.horrycountysc.gov/gis/parcels, https://msc.fema.gov/portal/home, https://experience.arcgis.com/experience/fa729743d97047579f348d68f9643ba1, https://www.georgetowndeeds.com/, https://georgetowncountysctax.com/, the Flood News PDF (its file name changes with each issue).
- **Staleness.** The 12 floodplain managers is a February 2026 count (R27). The address-point shares (R17 to R22) move slowly; recount with `scripts/analyze_addresses.py` once a year.
- **Critic note (not changed):** `critic.mjs` drops a paragraph from the first-screen count when a sibling element holds an input, even one inside a real `<form>`. It hid this page's hero sub. The page passes because the line under the box sits in its own wrapper and counts. The rule's comment says it is meant for lead forms that are not in a `<form>`; the lead may narrow it.
- **Cannibalization:** the title and keywords avoid "land records", "deed search", "gis", "parcel search", "tax map", "tax records" and "flood zone map" (must-answer.md). The audit's one cannibalisation line ("horry county register of deeds") is between deeds and /hoa/documents/, not this page.

## Fix round 1 (2026-11-13)

See `REVIEW-1.md`. Gates after the fix: score 100/100; claims-scan 0; facts-check 0 on this page; house-claims 0; struck lists clean except one false positive (REVIEW-1); repeat-check --strict passes; build.js check "Safe to deploy" (21 KB inline script note); build.js audit: only "missing from sitemap.xml" fails; critic.mjs 0 blocking, 0 warnings at 320, 390 and 1440; lookup-test all controls pass (60).
Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/fix1/` (full pages at 320, 390, 1440; crops; `courthouse-320.png`, the filled card).
/buyers/flood-zone-check/ now exists in the working copy, so this build links it (table row and the card's Flood line).

## Round 2 (2026-11-14)

Group A: hub, deeds, gis-map, tax-bill (owner's FIXES-2.md).

**Strips (live counts from /homes/api/strip, 2026-11-14)**
- Hub, Georgetown section: "Houses for sale in Pawleys Island", `city=Pawleys Island&type=house`, 118 homes. Replaces the Pawleys G.offer.
- GIS, Georgetown section: the same strip and search, 118 homes. Replaces the Pawleys G.offer.
- GIS, end of the accuracy section (where lot size is the subject): "Houses on an acre or more", `type=house&lotMin=1`, 296 homes.
- Lookup card, "Homes" line: "Homes for sale within a mile of this address", `near=<lat>,<lng>&miles=1`, built by `prHomesStripQ` in lookup-core.js (control added in lookup-test.js, now 65 controls, all pass). The strip fills in the visitor's browser; the old "See homes for sale near this address" link stays under it as the fallback and is removed once the strip fills. Checked on the live site with a Pawleys-area point: ok, 21 homes. The Georgetown card keeps its Pawleys guide link.
- Preview has no listing feed, so strips are empty there.

**Offers kept**
- Hub: "Skip the three county websites" and "Have us check what the records leave out" (two), plus the page-end showing offer. The card still shows "Tell us the unit number" only for an address with several parcels.
- Deeds: "The deed itself is not online" (top, the free deed) and "Have us check a house for liens". "We get the deed for you, free" stays true once the owner opens the $25 escrow account with the county (copies are $0.50 a page, facts row 11). OWNER ITEM: open that account.
- GIS: "No county account? Send us the address" and "Buying a lot or a house with land? We check the lines".
- Tax bill: "Have only an address? We find the bill" and "Looking at a house? See its tax bill before you offer".

**Offers removed**
- Card: "Want the deed, the tax bill and the HOA papers in one email?" (both the normal and the Georgetown card).
- Deeds: "Have us get the deed" (duplicate of the top offer), "Got an alert you did not expect?".
- GIS: "Have us pull the plat for your lot", "Want to know what you can build on a lot?".
- Tax bill: "Bought or selling this year? We check who owes the bill", "Think the value is too high? We pull the recent sales".

**Other**
- GIS: one sentence reworded to "We checked the layer: the map draws 417,124 building outlines" (same fact F25) so the first-hand rule still passes after the offer removals.
- H5 (calls to action per section) now reads 60% on the GIS page, because the rule counts offers and not strips. The owner's two-offer limit wins. Suggest the lead teach H5 to count strips.
- Build note: the website working copy's packaged tools/blog-brain-2026-10-b/tools/glass.js has no homesQ. I built with a node require hook (scratchpad r2-hook.js) that points to Blog-Brain's glass.js. The lead should refresh the package before deploy.
- Gates: score 99, 99, 99, 99 (GIS from 97 after the T2 fix; only H5 and P6 "plat" below 100); claims-scan 0; house-claims 0; critic 0 blocking, 0 warning at 390 and 1440 on all four; build.js check Safe to deploy; build.js audit no FAIL on these pages. Shots: scratchpad/r2/.
