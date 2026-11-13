# Build: /buyers/property-records/gis-map/

New page, batch 2026-11-d, built 2026-11-13 in the working copy wt-139.

- Spec: `<wt-139>/specs/property-records-gis-map.js` (glass theme; author "devin"; structure from `home-value.js` and `garden-city.js`).
- Page: `<wt-139>/chapter3realty/buyers/property-records/gis-map/index.html`.
- Share card: `<wt-139>/chapter3realty/og/buyers-property-records-gis-map.jpg` (tools/ogcard.js).
- Data read by the spec: `<wt-139>/data/2026-11-d/property-records-gis-map/` (drawn-vs-listed.json, chart-drawn-vs-listed-by-lot-size.csv, layers-and-counts.csv, raw/aerials-*.json). Every figure is read from these files and checked against its ledger row in the spec; a mismatch stops the build.
- Facts: VERIFIED rows, and CORRECTED rows at the verifier's wording only. Left out on purpose: "free" for the county account or map (F5), "no county map skips the sign-in" (F7), Garden City heights without the PDD condition (F33), qPublic as an owner search (F48), any value from the open parcel layer (F10 note), the contour range (F27), flood shape counts (F28).

## Outline

- **Title (59):** Horry County GIS Map: Parcel Search, Login & Property Lines (the plan's fallback; "Free" struck).
- **Description (150):** The Horry County GIS parcel map now asks for a county sign-in. How to get in, search by address, owner or PIN, and read lot lines, acreage and zoning.
- **H1:** Horry County GIS map: find any parcel, its lines and its tax map number
- **Italic line (about half the H1):** Every lot in the county, with its lines, its zoning and aerial photos back to 1998.
- **Sub:** The county's parcel map now opens on a sign-in screen. Three steps get you from that screen to a lot's lines, acreage and zoning.
- **Short answer:** the map is the county's parcel map and now asks for a county sign-in; search by address, owner, PIN or TMS and click the lot; the card's fields; the lines are drawn for taxes, not surveyed.

Sections (no contents list, as on the bar pages, so the steps sit right under the answer):

1. **How do I use the Horry County GIS map?** Navy outside button "Open the Horry County GIS map" (new tab). "The map belongs to Horry County. Chapter3 is a real estate brokerage, not the county." Three numbered steps with icons: make an account (Register; the form's fields; no payment step; a code may be asked), search (Address, Owner, PIN, TMS; 1 in 4 lots has no TMS), click the lot. **Offer:** "No county account? Send us the address." / Have us pull the parcel. Up-link to the hub.
2. **What does the parcel card tell you?** V1, the drawn parcel card: nine fields, each with a plain meaning. No value, no tax; links to home value and the tax bill page.
3. **How do I find property lines in Horry County?** Four bold steps (line lengths in whole feet on about 2 in 3 line pieces; Measurement Tools; Building Footprints, 417,124 outlines; the recorded plat). V2, the drawing of the surveyed line and the county's line, with an HTML key. **Offer:** "Have us pull the plat for your lot." / Send me the plat.
4. **Is the Horry County GIS map accurate?** "Close enough to find a lot, but not close enough to place a fence." The county's disclaimer, quoted. Our finding: 85,490 lots with a listed acreage; 4 in 5 within 5%; about 1 in 10 drawn more than 10% bigger or smaller; 10% of an acre is about 4,400 square feet. V3 chart (glass bars, five lot sizes, half-acre to one-acre lots highest at 18%). Both ways; neither number is a survey; Acreage and Square Footage on the card.
5. **When do you need a surveyor?** Five bold cases (fence, addition near a side line with the SF 10 side setback, a dispute, land or a split, an HOA that asks, linking The Farm). SC LLR board and licensee lookup. **Offer:** "Buying a lot or a house with land? We check the lines before you offer." / Have us check the lines.
6. **What is the Horry County tax map number?** TMS is the 10-digit tax map number; table PIN vs TMS; "We checked every parcel on the county map, and about 1 in 4 shows no TMS"; the tax estimator asks for the PIN; links to property taxes and the tax bill page.
7. **What do zoning codes like CFA, FA and SF 10 mean?** Table of six codes (CFA, FA, HC, SF 10, MSF 10, SF 20), cards on a phone. Three bold lines: SF 10 setbacks, no county zoning inside the towns, Garden City height zones with the PDD condition. **Offer:** "Want to know what you can build on a lot?" / Have us read the zoning.
8. **See the land in 1998, and every few years since** (the wow). The 11 aerial years as a strip (1998 and 2001 black and white), a public domain NAIP aerial of new streets west of US 17 (record reused from /submarkets/north-myrtle-beach/), and five layers worth turning on (Flood Zones, Contours, Soils, Interstate 73, Airport Overlays).
9. **Georgetown County GIS for Pawleys Island and Litchfield.** Open map, no sign-in; 13-digit TMS format; address spelling; owner search through the deeds name search; 2 in 3 parcels with a plat reference and the S prefix; beachfront baseline and setback lines; Swipe (2022 and 2024); same survey warning. Homes strip `town-pawleys-litchfield`, title "Homes for sale around Pawleys Island and Litchfield", fallback pill "Get the homes for sale in Pawleys Island".
10. **FAQ (7):** account needed; does the county charge (form fields, no payment step, no fee shown); owner-name search (word order does not matter); no TMS; does it show value (no); print; is Chapter3 the county.
11. **End band:** "Send us the address. We pull the parcel, the plat and the flood zone." / Send us the address.

Every request button goes to /contact/. The county button is the only outside button. About 1,600 words of prose.

## Gate results (2026-11-13)

| Gate | Result |
|---|---|
| `score.js --only /buyers/property-records/gis-map/` (SCORE_TODAY=2026-11-13) | **97/100** (SEO 92, AEO 100, Human 99, Trust 100). One FAIL: S8, no page links here yet (lead item below). P6 notes "plat" 9 times: kept, it is the word readers search ("horry county plat maps"). |
| `claims-scan.js <wt-139>` | 0 findings |
| `facts-check.js <wt-139>` | 0 on this page. The 4 wrong sentences site-wide are older (from-massachusetts, from-virginia, llms-full.txt). |
| `house-claims.js` on the page | 0 sentences |
| `struck-check.js --batch batches/2026-11-d --strict` | no struck wording on this page (13 patterns) |
| `repeat-check.js --strict` | passes |
| `critic.mjs` at 390, 1024, 1440 | **0 blocking, 0 warnings** (1 photo, 6 other visuals, 9 internal links) |
| `build.js check` | nothing on this page; "Safe to deploy" |
| `build.js audit` | two FAILs, both lead items: "missing from sitemap.xml" and "orphan: no other page links to it from body copy". Notes only: not in llms.txt, no Tim Nash sentence, 7 sentences over 22 words (none over 28). |

Fixed on the way: struck "Free, with no county account" (F5 pattern), "for the record"/"worth ordering"/"No one can" (register), a 32-word sentence, 5 of 10 headings as questions (now 7 of 10), the glass header overflow at 1024 px, no photo in the blog, a 974 px wall of text in the zoning section, tiny legend text in the line drawing, frames inside frames.

Shots (full page, served by tools/preview.mjs on port 8922, then stopped):
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/shots/buyers-property-records-gis-map-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/shots/buyers-property-records-gis-map-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/shots/buyers-property-records-gis-map-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/critic.json`

The Pawleys strip shows its fallback pill in the shots, because the preview's sample photos (photos.test) do not load. The site's feed under the opening is not in the shots: it needs the feed entry below.

## For the lead

### Rebuild once the siblings exist

The spec links four sibling pages only when their `index.html` exists in the working copy (`sib()` in the spec), so `build.js audit` shows no dead link today. Their words show as plain text until then:
- /buyers/property-records/deeds/ ("deed and plat search guide", property lines section)
- /buyers/property-records/tax-bill/ ("the lot's tax bill", parcel card section; "how to look up a tax bill", tax map section)
- /buyers/flood-zone-check/ ("flood zone guide", aerials section)

When those pages are built, run `node tools/mkpage.js specs/property-records-gis-map.js` again and the links appear. The hub /buyers/property-records/ is linked always (breadcrumb and first section); it must ship in the same release.

Optional, when /buyers/land/ is live: in the surveyor list, "Buying land, or splitting a lot." can link "land" to /buyers/land/.

### Sitemap

```
<url><loc>https://chapter3realty.com/buyers/property-records/gis-map/</loc><lastmod>(build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.80</priority></url>
```
Priority 0.80: below the hub and property taxes (0.85), above most guides (0.70), for 8,100 searches a month on "horry county gis".

### llms.txt

```
- [Horry County GIS Map: Parcel Search, Login & Property Lines](https://chapter3realty.com/buyers/property-records/gis-map/): How to get past the county's sign-in, search by address, owner, PIN or TMS, and read the parcel card; property lines and when to call a surveyor; of the lots the county lists with an acreage, about 1 in 10 is drawn more than 10% bigger or smaller; zoning codes; aerial photos since 1998; Georgetown County's open map.
```

### Feed (idx-lib/feeds.js)

A new feed for this page under the opening, houses on an acre or more: `H({ min: "250000", lotMin: "1" })` over Conway, Myrtle Beach, Little River, Loris, Aynor and Murrells Inlet (add towns until it fills at least 10). Title: **"Your own acre: houses on an acre or more"**. The title is true only with `lotMin: "1"`; check the live count first. No second acre strip is on the page.

### Place (Blog-Brain batches/2026-10-b/data/idx-places.json)

Add `/buyers/property-records/gis-map/` to `pages` of `town-pawleys-litchfield` (the strip in the Georgetown section uses it).

### Pages that should link here (six or more; S8 and the audit orphan line clear when two do)

| Page | Where | Suggested sentence (link on the bold words) |
|---|---|---|
| /buyers/property-records/ (hub) | first screen, the map entry | "To see a lot's lines, acreage and zoning, use **the Horry County GIS map**; our guide gets you past its sign-in." |
| /buyers/property-records/deeds/ | "Can I search deeds by address?" | "Find the owner and the deed book and page first on **the county's parcel map**." |
| /buyers/property-records/tax-bill/ | the PIN step | "The PIN is on the parcel card of **the Horry County GIS map**." |
| /buyers/flood-zone-check/ | where it names the county's map | "Turn on Flood Zones on **the county's GIS map** to see the zone line across a lot." |
| /buyers/property-taxes/ | the calculator or FAQ, where the PIN comes up | "The county's estimator asks for the PIN, which is on **the county's parcel map**." |
| /buyers/land/ | acreage or zoning | "Read a lot's **zoning code and acreage on the county map**, and why the map's acreage is not a survey." |
| /submarkets/carolina-forest/the-farm/ | the fence or shed rule (row text: "with a land surveyor's drawing of the lot") | "A fence or shed needs the HOA's approval first, with a land surveyor's drawing of the lot. **When you need a surveyor**." |
| /submarkets/garden-city/ | the county or flooding section | "The county's GIS map marks **Garden City's height zones** along the beach road." |
| /buyers/undisclosed-flooding/ | where it uses county maps | "The county map's **aerial photos back to 1998** show what stood on a lot before the house." |
| /submarkets/pawleys-island/ | where it names Georgetown County GIS | "Georgetown County's map is open to anyone; **how to search it by TMS or address**." |

About 25 pages name "Horry County GIS" only in their sources line. The lead may point those words here instead of at the county (the lead decides; a sources link is not body copy and does not count for S8).

### Other

- **Hub lookup tool:** the county map has routes `/gis/parcels/pin/<PIN>` and `/gis/parcels/tms/<TMS>` (F14). Without a sign-in they land on the login screen. Test one after signing in before building on them.
- **Monthly link check (tools/site-audit.js):** https://www.horrycountysc.gov/gis/parcels, https://www.horrycountysc.gov/register, https://www.horrycountysc.gov/gis/parcels/disclaimer, the zoning ordinance PDF (https://www.horrycountysc.gov/media/i0pfcm2o/appendix-b-zoning-ordinance-upated-912026.pdf; its file name changes with each update), https://experience.arcgis.com/experience/fa729743d97047579f348d68f9643ba1, https://www.georgetowndeeds.com/NameSearch.php, https://gtcountysc.gov/260/GIS-Asset-Management, https://verify.llronline.com/LicLookup/Engineers/Engineer.aspx?div=50.
- **Zoning ownership:** this page takes "horry county zoning map / zoning code (CFA, FA, HC)". /buyers/land/ should link here, not explain the codes.
- **Data size:** `data/2026-11-d/property-records-gis-map/raw/` is 77 MB, of which `parcels-area-acreage.json` is 54 MB. The spec does not read raw/ except the eleven small `aerials-*.json` files. Keep the large file out of the website commit (or move it to Blog-Brain) if the repo has a size rule.
- **Photo:** the aerial is the existing NAIP record `images/2026-11-a/submarkets-north-myrtle-beach/west-of-us-17-new-streets-from-above-1200w.webp` (public domain, its record in `data/2026-11-a/submarkets-north-myrtle-beach/photos.json`, credited under the sources). No new image file.
- **Free:** "free" for the county account stays off the page until the county's GIS office confirms it in writing (VERIFY 5). If it does, the title can go back to the plan's first choice.
