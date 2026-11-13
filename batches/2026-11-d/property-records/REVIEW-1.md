# Review 1: /buyers/property-records/ (fix round)

Reviewer verdict: pass=false, score 8. Six blocking items, eleven nits. All six blocking items are fixed in `specs/property-records.js`. Two nits are partly declined, with reasons below.

## Declined or partly declined

- **The card's own offer ("Want the deed, the tax bill and the HOA papers in one email? Free.") is kept.** It is the one offer made at the moment a reader has one address on screen, and it is the strongest. The three page offers were changed around it instead, so no other offer sells that bundle or uses its words.
- **The Horry table links to our guides, not the county sites (asymmetric with Georgetown).** Kept, as the reviewer allowed. The hub routes to the three task pages, which own the steps and the county links. Georgetown has no task page of its own, so its list links the county sites.
- **The Pawleys strip still shows only its fallback pill in the preview.** The preview fills a strip only for pages listed in `idx-places.json`, which this build may not edit. BUILD.md asks the lead to add `/buyers/property-records/` to `town-pawleys-litchfield`. The site's own feed under the opening also needs the lead's feed entry.
- **struck-check, gis-map list, "free and needs no account":** a false positive. The sentence is about the deed index (R32's safe wording, word for word), not the GIS map. The page never calls the county map free.

## What changed (fix round 1, 2026-11-13)

Blocking:
1. **Offers, four promises, no shared words.** Mid offer 1: "Skip the three county websites." / "Comparing a few homes? An agent gathers the county records for each one and tells you what stands out, free." / "Let us make it simple" (the owner's label). Mid offer 2 drops its opening "Send us the address." End band: "Found a home you like? See it with a local agent." / "We set up the showing, walk the lot with you and answer what its records cannot." / "Set up a showing". "Send us the address" is gone from the page (RULES CTA-1: the owner dislikes it).
2. **One number.** "Skip the four county websites" is now "Skip the three", matching the short answer's three places.
3. **Rental rules said once.** Section 1 now ends on zoning, with a link to the GIS page's zoning codes. Section 4's rental bullet keeps the fact and now carries both links (/invest/str-rules/, /hoa/rental-restrictions/).
4. **FAQ no longer repeats the body.** Removed "Is the lookup free?", "Can you search by name?" and "Is Chapter3 part of Horry County?". Added "How do I find the owner of a property in Horry County?" (R14, VERIFY 15) and "Why can't the lookup find my address?" (R1, R48, the tool's own street-only message). FAQ is now five questions. "PIN vs TMS" and "are lot lines exact" were not used: the GIS page already owns both ("What is the Horry County tax map number?", "Is the Horry County GIS map accurate?"). One "Chapter3 is not the county" line remains, under the box. The by-name section's "The deed record ... names the parties" moved to the owner FAQ, so it is said once. "No sign-in" now appears 3 times, each about a different thing (our tool, the Treasurer, Georgetown's map).
5. **Pawleys: a wow line and a bold title.** Strip title "Top homes in Pawleys Island and Litchfield" (the owner's town-page wording). Beside it: "Pawleys Island itself is less than 4 miles long and mostly one house wide, with a salt marsh between it and the mainland. The island and most of the land around it share ZIP code 29585, so a Pawleys Island address does not always mean a house on the island." Pawleys ledger rows 2 and 3 (2026-11-a), added here as rows 52 and 53, VERIFIED-BY-FIXER.
6. **Chart readable at 320.** The two SVGs are replaced by one chart with HTML labels: 17 px at 390 and 1440, 16 px at 320 and below. The percentages stay on one line. The bars now measure the title's word: Myrtle Beach 74%, Conway 73%, Surfside Beach 66%, North Myrtle Beach 4% outside. The spec checks these four against the CSV (R18, R19) and stops the build on a mismatch.

Nits taken:
- **The demo address dead end.** The card now says, for the courthouse PIN only: "The courthouse is tax-exempt, so the tax search finds no bill for it." (VERIFY 15; `CFG.noBill`; `lookup-ui.js`). Driven in the browser at 320 against the live county: the line shows under the Records buttons.
- **4% or 6%:** "Yours is figured at 4% if it is the home you live in, and at 6% if not." (tax F27, F37; row 54). Plain words: the scorer's P6 flagged "legal residence".
- **GIS and plat explained once.** Short answer: "the county's online map (GIS)". The table, the by-name section and Georgetown now say "online map" or "the county's map". Plat: "a plat (a surveyor's drawing of the lots)" (deeds F29; row 56).
- **Placeholder** is "Type an address"; it fits at 320.
- **Photo credits** say the change once: the deeds record's own "cropped and resized" note is left out here; the list's closing line stays.
- **Flood office wording.** The table's flood row no longer gives the phone number ("FEMA's flood map. Our lookup reads it for any Horry County address."). The FAQ keeps VERIFY 27's safe wording, so the number is said once.
- **BUILD.md feed title:** "Top homes in Horry County".
- The short answer's first sentence grew to 29 words; it now reads "Horry County keeps property records in three places..." (28).

Also: /buyers/flood-zone-check/ now exists in the working copy, so this rebuild links it in the table's flood row and on the card's Flood line ("What your zone means when you buy").

## Gates after the fix

| Gate | Result |
|---|---|
| `score.js --only /buyers/property-records/` (SCORE_TODAY=2026-11-13) | 100/100 (SEO, AEO, Human, Trust 100) |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on this page (the 4 site-wide wrong sentences are on older pages) |
| `house-claims.js` | 0 |
| `struck-check.js`, every 2026-11-d list and the Pawleys list | clean except the gis-map false positive above |
| `repeat-check.js --strict` | passes |
| `build.js check` | "Safe to deploy"; note: 21 KB inline script (the tool) |
| `build.js audit` | only "missing from sitemap.xml" fails (the lead adds it); notes: not in llms.txt, no Tim Nash sentence, 5 sentences over 22 words (none over 28) |
| `critic.mjs` at 320, 390, 1440 (preview on 8891) | 0 blocking, 0 warnings |
| `lookup-test.js` | all controls pass (60) |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records/fix1/` (`buyers-property-records-320.png`, `-390.png`, `-1440.png`, crops `c320-*.png` and `c1440-*.png`, and `courthouse-320.png`, the filled card). Looked at: the chart at 320 and 1440, the first offer, the Georgetown section and strip, the FAQ, the credits and the end band, and the filled courthouse card.
