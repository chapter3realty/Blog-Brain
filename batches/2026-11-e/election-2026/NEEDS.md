# NEEDS: /market-reports/2026-election/ (page 1, the hub)

Shared changes this page needs. The builder did not make them (outside the edit list).

1. **Sitemap, llms.txt, dates.** The page is not in `sitemap.xml` or `llms.txt` yet, and its date is mkpage's build date. Run `node build.js dates` and the listing steps when the seven pages ship.
2. **Inbound links.** Link the hub from `/market-reports/` (the hub page) and from the six sibling pages. The score already counts 4 pages linking here.
3. **Co-author byline check.** On the first audit run, `build.js` (line about "owner name in page copy outside the byline") stripped only "By Devin Day, Operations Officer", so the new co-author byline ("By Devin Day, Chief Operating Officer, and Abdulla Hijazi ...") failed it on every election page. A later run passed; someone had changed `build.js` in the working copy. Confirm that change is the intended fix and keep it.
4. **State House photo.** The ledger's preferred State House file (Kirchel, "State House Grounds ... SC 01") shows an office tower and trees, not the State House. Do not use it as a State House photo on any of the seven pages. A current State House photo, or the Horry County Government and Justice Center today, would help this page (photo partner shot list, item 5).
5. **Shared photo.** Page 2 (first-time buyer tax credit) also uses the U.S. Capitol west front (Architect of the Capitol, public domain). Keep it on one page if the lead prefers no repeat; this page can drop it without losing a fact.
6. **A fresh verifier** should read the sentences written from corrected rows before release: the 2008-2010 credit study line (F110), the Lincoln study lines (F149-F151), the FHFA margin-of-error line (F198, VERIFY "Recomputed"), and the plan rows marked "as reported" (F060-F069).
