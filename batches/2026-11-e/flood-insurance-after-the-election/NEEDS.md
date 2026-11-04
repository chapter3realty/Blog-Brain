# Needs from the lead: /buyers/flood-insurance-after-the-election/ (page 3)

Shared changes this page needs. The builder did not make them, because they are outside the page's own files.

1. **build.js byline exclusion for the co-author byline.** `build.js audit` fails every "devin+abdulla" page with "owner name in page copy outside the byline". The check strips only `By Devin Day, Operations Officer` (build.js, near line 2030). The co-author byline mkpage writes is `By Devin Day, Chief Operating Officer, and Abdulla Hijazi, ...`. The page copy does not name Devin anywhere else. The same failure is on /invest/horry-county-growth-roads-permits/. Fix: let the strip regex accept `Chief Operating Officer` too.
2. **Sitemap and llms.txt.** The page is missing from sitemap.xml and llms.txt. The lead adds it and runs `node build.js dates`.
3. **Photo metadata.** exiftool is not installed here, so `tools/image-meta.js` fails S13 on the Capitol photo's five files. Run `node tools/photos.js embed <WEB>/data/2026-11-e/flood-insurance-after-the-election/photos.json <WEB>/chapter3realty` where exiftool exists. The licence record passes `photos.js check`.
4. **Dead link until page 2 ships.** The page links /buyers/first-time-buyer-tax-credit/. It resolves once page 2 is built.
5. **Inbound links.** /buyers/coastal-insurance/ and /buyers/undisclosed-flooding/ talk about flood insurance and could link here in a sentence about the Dec. 11 deadline. Their specs are not this builder's to edit.
6. **Photo credits template line (review nit 6).** The credits block always says "Chapter3 Realty resized these photos and cropped some of them", even with one photo. It is the shared photos.js / page-kit text.
7. **Photo partner.** Send him the page 3 shot list (batches/2026-11-e/photos.md, item 3: a raised house in a Horry flood zone, a street near the Waccamaw River). Swap it in for the NASA map or beside it when it arrives.
8. Item 1 (the co-author byline) no longer fails in the audit. Item 4 is resolved: page 2 is built.
