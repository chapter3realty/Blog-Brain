# Build: /buyers/flood-zone-check/

Writer, 2026-11-13. A new page (Lane N). Built from `PLAN.md` and only VERIFIED rows, or CORRECTED rows at the verifier's safe wording (`VERIFY.md`). Nothing deployed, nothing committed.

## Files (website working copy `wt-139`)

- Spec: `specs/flood-zone-check.js`
- Page: `chapter3realty/buyers/flood-zone-check/index.html` (built by `node tools/mkpage.js specs/flood-zone-check.js`)
- Share card: `chapter3realty/og/buyers-flood-zone-check.jpg` (Blog-Brain `tools/ogcard.js`)
- Data, read by the spec, never typed: `data/2026-11-d/flood-zone-check/listing-vs-map.json` and `chart-high-risk-tagged.csv` (pull of 2026-11-13, 21:00 UTC). The spec checks every printed count against its ledger row and stops the build if the file changes.
- Photo: the Crescent Beach USGS oblique aerial already on the site (`images/buyers/no-hoa/crescent-beach-streets-from-the-ocean-2011-*.webp`, public domain, record in `data/2026-10-b/photos.json`). No new image, so `images/2026-11-d/flood-zone-check/` was not needed.

## Title, headline, description

- Title (57): `Is My House in a Flood Zone? Horry County Flood Map Check`
- H1: `How to check if a Horry County house is in a flood zone`; italic line: `Look it up on FEMA's map before you make an offer.`
- Sub (26 words): `About 4 in 5 Horry County homes for sale in FEMA's high-risk flood zone did not come up in a home search filtered for flood zone.`
- Description (149): `Is my house in a flood zone? Check any Horry County address on FEMA's flood map, learn what AE, VE and X mean, and how often a home search misses it.`
- Changed from PLAN: the H1 is a statement, not "Is this house in a flood zone?". A yes/no H1 cannot be answered yes or no for an unknown house (score A3), and mkpage needs a place in the H1. The short answer now opens with the rule: "If the address is in zone AE or VE on FEMA's flood map, the house is in the high-risk flood zone."

## Outline

1. Short answer (3 short paragraphs): AE or VE is high risk and a bank loan needs flood insurance (F18, F21, F22); type the address into FEMA's Flood Map Service Center (F11); do not count on a home search: about 4 in 5 of 1,122 did not come up (F1, F2).
2. Slim offer bar: "Send us the address of a house you like. We find its flood zone." Button "Have us find the zone".
3. H2 "Does a home search show the flood zone?" "Not reliably." About 1 in 6 homes for sale is in the zone (F1). The chart (F2), our search's rule (F9), three facts under thin rules: condos about 3 in 4 (F4, link to condo master insurance), zone VE about 4 in 5 (F5 safe wording, storm waves), every price band under 3 in 10 and 45 of 59 at $1 million and up (F6 safe wording). The mismatch both ways, 166 of 397 (F8). Offer: "Have us check this house's flood zone".
4. H2 "Three steps on FEMA's flood map". Open the Map Service Center, read the zone letter, download or print the map (F11, F12). "Check each address, not the town" with the Crescent Beach photo; caption: about 1 in 3 North Myrtle Beach homes for sale is in the zone (F7, postal city). Map effective December 2021 with four revisions since (F13 safe wording). The county's Flood Zones layer, link to the GIS map guide (F15).
5. H2 "What does my flood zone mean?" Table of VE, AE or A, shaded X, X, with "Does a bank loan need flood insurance?" (F17, F18, F20 without "X500", F21, F24). At least about 1 in 4 over 30 years (F19). Links: coastal insurance (cost), waterfront homes (where VE reaches).
6. H2 "When will the lender tell me the house is in a flood zone?" The written notice a reasonable time before the loan closes; a cash buyer gets none (F25 safe wording, no time order with the offer). The NFIP wait (F23 safe wording). Get the zone and a quote before the offer. Link: undisclosed flooding. Offer: "Get a flood zone check and quote".
7. H2 "Does the house have an elevation certificate?" What it records and when it is required (F26 safe wording). The county posts about 1,700 from 2010 to 2025, by permit, not address (F27). We look for it. Link: common mistakes.
8. FAQ, 5 entries, each answered on the page: ZIP code, flood map PDF, how new the map is, Zone X and insurance, the cash buyer's notice.
9. Sources line (CCMLS in aggregate, the day of the count from the data file, 80 of 80 pins matched FEMA's live map, Georgetown left out), photo credits, end band "Found a house? Send us the address."

Every button goes to `/contact/` (the site opens the short pop-up). Four offers, four different labels. Words of prose: 926 (score.js). Internal links: 9 pages (coastal-insurance, undisclosed-flooding, master-insurance-ho6, waterfront-homes, property-records/gis-map, common-mistakes, plus the hub and contact).

Not used, by the verifier's rules: our lookup tool (F14, struck until built), "X500" (F20), "price does not change it" (F6), "after your offer is accepted" (F25), photos or descriptions feeding the flag (F9), the floodplain managers' phone (F16; it would tell the reader to call, and we do the work). No story, no quote, no premium, rate or payment.

## Gates (2026-11-13, final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-13 node tools/score.js --only /buyers/flood-zone-check/` | 94/100 (SEO 92, AEO 100, Human 96, Trust 79). One FAIL: S8, no other page links here yet (lead item below). Partials: P6 "Zone X", "AE/VE", "elevation certificate" (the words this reader searches; each is explained on the page), T2 first-hand sentences 1 of 2. |
| `node tools/claims-scan.js wt-139` | 0 findings |
| `node tools/facts-check.js wt-139` | 0 on this page (4 wrong sentences on 3 other pages, all older: llms-full.txt and others) |
| `node tools/house-claims.js .../flood-zone-check/index.html` | 0 sentences to scope or source |
| `node tools/struck-check.js --batch batches/2026-11-d --strict` | buyers-flood-zone-check, 17 patterns: no struck wording |
| `node tools/critic.mjs http://localhost:8893 /buyers/flood-zone-check/ --widths 390,1024,1440` | 0 blocking, 0 warnings at all three widths |
| `node build.js check` | OK |
| `node build.js audit` | FAIL only "missing from sitemap.xml" and "orphan: no other page links to it" (both lead items). Warnings: not in llms.txt; no attributed Tim Nash sentence (none in the story bank); 7 sentences over 22 words (none over 28). |

Fixed during the build: the critic's "blog with no real photo" block (added the Crescent Beach photo with a fact caption), a phone "wall of text" in the lender section (two facts now a list), the audit's "we/our" in the sub, "listing (say home)", and a first H2 that was not a question; the wide chart's "231 homes" label (white on the slate bar); the facts list was 17 px against 19.6 px paragraphs (now the site's reading size).

## Screenshots

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/flood-zone-check/shots/`
- `buyers-flood-zone-check-390.png`
- `buyers-flood-zone-check-1024.png`
- `buyers-flood-zone-check-1440.png`

Critic JSON: `.../scratchpad/nd/flood-zone-check/critic.json`. Every shot was read at full size. The page has no homes strip until the lead adds its feed, so the shots show none.

## Lead items

1. **sitemap.xml:**
   `<url><loc>https://chapter3realty.com/buyers/flood-zone-check/</loc><lastmod>(set by build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.70</priority></url>` (the same priority as /buyers/undisclosed-flooding/).
2. **llms.txt** (next to the flooding and coastal insurance lines):
   `- [Is My House in a Flood Zone? Horry County Flood Map Check](https://chapter3realty.com/buyers/flood-zone-check/): How to check any Horry County address on FEMA's flood map, what zones AE, VE and X mean for a bank loan, and our count of high-risk homes for sale a flood-zone search misses.`
3. **Feed for this page** (`idx-lib/feeds.js`; the page has no feed yet). Proposal, beach-close houses with no flood filter (this page shows that filter misses about 4 in 5 high-risk homes):
   `"/buyers/flood-zone-check/": cut("Beach-close houses we can zone-check for you", towns(["North Myrtle Beach", "Myrtle Beach", "Surfside Beach", "Garden City", "Murrells Inlet", "Pawleys Island"], H({ min: "250000", has: "beach_1mi" })), "type=house&has=beach_1mi", SINCE_2010),`
   Alternative with a bolder title: houses raised on pilings near the beach, `has: "beach_1mi,raised_home"`, titled "Beach houses raised up on pilings". Check either for 10 or more homes on the live API first (the API answered "stale" for the verifier). Never `not: "flood_zone"`, and never a title that says "outside the flood zone".
4. **Site-wide, from the study:** feeds that use `not: "flood_zone"` (`SINCE_2010`, `LL_INS`, `florida`, `DRY_450`, `BEACH_DRY`) still let high-risk homes through. Keep their titles silent on flooding. `BEACH_DRY`'s comment in feeds.js says the owner wanted homes "outside of flood zones" on /buyers/undisclosed-flooding/; the filter cannot promise that.
5. **No new place** in `idx-places.json`: the page carries no `homes()` strip.
6. **Pages that should link here** (on words already there where possible):
   - /buyers/common-mistakes/, under "Will the listing tell me the house is in a flood zone?": "Our full count is in our [flood zone study]: about 4 in 5 high-risk homes for sale did not come up under flood zone." Also refresh its 245 / 196 houses figures from this page's data file, so the site has one value.
   - /buyers/coastal-insurance/, on the existing sentence "Check any address's flood zone free at the FEMA Map Service Center": add "Our guide shows [how to check if a house is in a flood zone] in three steps."
   - /buyers/undisclosed-flooding/, in the answer to "Will the lender tell me if the house is in a flood zone?": "To find the zone yourself before you offer, see [how to check a house's flood zone]."
   - /buyers/property-records/gis-map/, on "Flood Zones. FEMA's flood zone codes, such as AE and VE.": "What each code means for a bank loan is in our [flood zone guide]."
   - /buyers/waterfront-homes/, under "Do you need flood insurance on a waterfront home?": "To check one address, use [FEMA's map, step by step]."
   - /buyers/relocating/hurricanes/, on "Check the flood zone of the address, not the town name.": link "Check the flood zone of the address" here.
   - /buyers/homes-near-the-beach/, where it covers the flood zone: "[Check the flood zone of any beach house] before you offer."
   - /why-chapter-3/, the one line on our flood count: point its link here instead of /buyers/undisclosed-flooding/.
   - /buyers/property-records/ (new, parallel page): its flood line, per its PLAN.
   - /buyers/buying-in-myrtle-beach/ and /buyers/first-time-home-buyer-myrtle-beach/, where they say "flood zone".
7. **When the lookup tool is live and tested** at /buyers/property-records/ (an AE, a VE and an X address), add it as step 1 here, with a verified row. Until then the struck list blocks any sentence about it.
8. **Re-run the pull on the release day** (`RAW=<empty dir> python3 -I scripts/pull_listing_vs_map.py <datadir>`, then `build_charts.py`), as the verifier asked. The spec stops the build if a count changes; update the checks and the copy then. "About 4 in 5" held on 11-10, 11-12 and 11-13.
9. **Site frame, not this page:** the footer's "The Myrtle Beach investor-focused brokerage" line reads oddly on a buyer page (CRAFT 4, the page's surroundings).

## Fix round 1 (2026-11-13), lead items added

See `REVIEW-1.md` for what changed. Item 7 above is done: the property records search is step 1 (row 14b, VERIFIED-BY-FIXER, tested at AE, VE and X).

10. **Cannibalization.** /buyers/undisclosed-flooding/ has the FAQ "Will the lender tell me if the house is in a flood zone?", the same question as this page's H2 "When will the lender tell me the house is in a flood zone?". Cut that FAQ there to one line that links here (this page owns it). /buyers/common-mistakes/ ("Will the listing tell me the house is in a flood zone?", 245 / 196 from an older pull) and /why-chapter-3/ (229 of 1,122, 2026-11-12): refresh both from `data/2026-11-d/flood-zone-check/listing-vs-map.json` (231 of 1,122 came up, 2026-11-13) and link them here.
11. **Feed title.** PLAN's wording for item 3, if the lead prefers it: "Beach-close houses we can zone-check today". Either title is fine; never a title that says "outside the flood zone".
12. **Struck row 14.** Its condition is met (the tool tested at AE, VE and X; facts row 14b). The lead may retire `fzc 14` in `batches/2026-11-d/facts/buyers-flood-zone-check-struck.json`, or add an `unless` for "property records search".
13. **Inbound links.** /buyers/property-records/ now links here (score S8: 1 page). The list in item 6 still stands.

## Round 2

Built with a preload that points the bundled glass.js at Blog-Brain's (it has no homesQ yet).

Changed (specs/flood-zone-check.js):
- One strip, in the zone-letters section after the insurance and waterfront links, with a one-line lead-in: "Homes raised on pilings", `has=raised_home`, live total 671, `ok`. The title is true of the search ("Raised on pilings" is a listing feature) and says nothing about the flood zone. G.homesQScript() added once.
- Offers kept: both body offers ("Have us check this house's flood zone", "Get a flood zone check and quote"), plus the hero and bottom bands. None removed.

Gates: score 96 (P6 plain-words terms and A10 were already there), claims-scan 0, house-claims 0, critic 0 blocking, 0 warnings.
