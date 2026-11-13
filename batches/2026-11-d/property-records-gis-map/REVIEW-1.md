# Review 1, fix round: /buyers/property-records/gis-map/

Reviewer: pass=false, score 8. Fixed in `<wt-139>/specs/property-records-gis-map.js` and rebuilt with `node tools/mkpage.js specs/property-records-gis-map.js`. No new fact was added, so there is no VERIFIED-BY-FIXER row.

## What changed

### Blocking

1. **Zoning intro claimed area (TRUTH).** "These are the codes that cover the most ground on the county map" is now "The table shows six codes you will see often on the county map." F30 counts map shapes only; the new sentence claims no area and no rank. SF 20 stays: it is the seventh most common code by shape count (403), so "often" is true, and its row is backed by F41 (Table 2-1: 20,000 SF).
2. **Dead references to sibling guides.** Rebuilt after /buyers/property-records/deeds/ and /buyers/property-records/tax-bill/ were built. The page now links "deed and plat search guide" (deeds) and "the lot's tax bill" and "how to look up a tax bill" (tax-bill). /buyers/flood-zone-check/ is still not built, so the Flood Zones row now ends at "FEMA's flood zone codes, such as AE and VE." The sentence "Our flood zone guide says what each one means for a buyer" is written only when that page exists in the working copy (`live()` in the spec). A rebuild after it ships brings the sentence and its link back.
3. **Main button wrapped at 390 px.** The label is now "Open the county GIS map". It sits on one line at 390 and 1440. At 320 px it wrapped "map" alone, so below 360 px the pill has a smaller pad and 1rem text; it now sits on one line at 320 too.

### Nits taken

- **"1 in 4 has no TMS" five times.** Cut from the parcel card's TMS row (now "The 10-digit tax map number.") and from the tax map paragraph (now "For a lot with no TMS, search by PIN or address."). It stays in step 2, the PIN/TMS table ("About 3 in 4 lots") and the FAQ.
- **Accuracy section restated its scope.** The second sentence is now "About 1 in 10 is drawn more than 10% bigger or smaller." The chart note keeps the 85,490 count, because a chart should read on its own.
- **Near duplicate, step 1 and FAQ.** The FAQ answer is now "The sign-up form shows no fee and has no payment step. To skip the account, send us the address and we pull the parcel card for you." (repeat-check: 0 identical, 0 near). The second sentence keeps the answer over 15 words (score A7) and is a true offer: the page's buttons already promise the parcel card, free.
- **Year chips looked tappable.** The 11 years are now a plain timeline: each year is plain text under a thin colored bar (gray for 1998 and 2001, brass for color), with no pill shape and no fill. The key uses the same bars.
- **Pawleys strip title.** Now "Your place near Pawleys Island: homes and condos within 4 miles". True from the place's own record in `batches/2026-10-b/data/idx-places.json` (town-pawleys-litchfield: `near` the town's centre, `miles: 4`, no type filter, so houses and condos). If the lead changes that radius or adds a type filter, change the title with it.
- **320 px orphans.** Request buttons and the H1 now use `text-wrap` (balance for buttons, pretty for the H1). At 320 the buttons read "Have us pull / the parcel", and the H1 no longer ends on "number" alone.

## Declined, and why

- **A before and after aerial pair (optional).** It needs two public domain aerials of the same spot in two years, each with a license record. The county's own imagery is not used on the page (its terms are not in our image rules), and NAIP years for one spot were not pulled or licensed in this round. The NAIP photo stays, captioned as it is. A pair is a good next step: a shot list for the photo partner or two NAIP tiles (public domain) with records.
- **Bring "Free" back into the FAQ title.** Not until the county GIS office confirms in writing (F5, VERIFY 5). The answer stays at what the form shows.
- **Strip photos in the shots.** The preview's sample photos still do not load (photos.test), so the shots show the fallback pill. Routing them is a preview tool fix, outside this page.
- **The hub /buyers/property-records/** is a lead item: it must ship with this page (breadcrumb and first section link to it).

## Gates (after the last rebuild, 2026-11-13)

| Gate | Result |
|---|---|
| `score.js --only` (SCORE_TODAY=2026-11-13) | 99/100 (SEO 100, AEO 100, Human 99, Trust 100). S8 now passes (3 pages link here). P6 "plat" 9 times, kept as before. |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on this page (the 4 older site-wide hits are on other pages) |
| `house-claims.js` | 0 sentences |
| `struck-check.js` (this page's struck file) | no struck wording |
| `repeat-check.js --strict` | passes; 0 identical, 0 near duplicates |
| `build.js check` | Safe to deploy |
| `build.js audit` | only "missing from sitemap.xml" (lead item), plus notes: not in llms.txt, no Tim Nash sentence, 7 sentences over 22 words (none over 28) |
| `critic.mjs` at 320, 390, 1440 (preview on port 8922, now stopped) | 0 blocking, 0 warnings |

Compliance re-checked on the built page: no em dashes, no sentence opening with "So", no "Here is", Devin only in the byline and schema, every request button to /contact/, no rate, payment or value.

Shots and crops: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/fix1-shots/` (full pages at 320, 390, 1440; crops go-*, years-*, h1-*, btn*-320). Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-gis-map/fix1-critic.json`.

## For the lead

- Rebuild this spec once /buyers/flood-zone-check/ is built; the flood guide sentence and link then appear.
- BUILD.md's outline still names the old button label and strip title; this file supersedes those two lines.
