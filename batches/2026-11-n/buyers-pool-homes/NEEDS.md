# Shared needs: /buyers/pool-homes/

For the lead. This page does not edit shared files.

1. **Hub, sitemap and llms.txt.** The audit fails the page as missing from `sitemap.xml` and as an orphan (no body link from another page). Link it from /buyers/ and, in a sentence, from /buyers/gated-communities/ or /buyers/no-hoa-homes/ (both name neighborhood pools), then list it in `llms.txt`.
2. **The sibling link, once /buyers/homes-near-the-beach/ is built.** Add to the end of the second paragraph of "Where are the homes for sale with a pool in Myrtle Beach?": `Our ${h.a("/buyers/homes-near-the-beach/", "homes near the beach page")} shows how far each area is from the sand.` It was taken out because the audit fails a dead internal link.
3. **The search words do not know "Carolina Forest".** `/homes/api/map?q=house%20with%20a%20pool%20in%20carolina%20forest` drops the place and returns all pool houses (facts row 22). A rule in `idx-lib/query.js` mapping "carolina forest" and the other `area_*` names to their keys would let pages link a town search in plain words. Until then the page links each town with the filter form (`type=house&city=<town>&has=pool,county_horry`, or the `area_*` key).
4. **A button to the live search.** The build allows a button only to /contact/, a tool page, tel: or a form anchor, so the live map search is a text link. If the owner wants the map search as a button, `/homes/map/` needs to be in `CTA_DESTINATIONS` in `build.js`.
5. **Photo metadata.** `exiftool` is not installed in this container, so `node tools/photos.js embed` could not write the credit into the three webp files under `images/2026-11-n/buyers-pool-homes/`. Run it once where exiftool exists.
6. **A homes row for this page, if the lead wants one** (`idx-lib/feeds.js`): houses with a private pool (`type=house&has=pool`), Horry County. The page does not need it.
