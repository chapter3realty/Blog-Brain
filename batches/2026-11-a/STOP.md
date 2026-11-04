# Stopping point, 2026-11-03

## Live and ready

| Patch | What | State |
|---|---|---|
| v1.20 to v1.27 | Search fixes, the first 15 rebuilt guides, Chapter3 AI | Pushed by the owner to the live branch (ends at "Chapter3 AI ..."); deploy with `.\deploy.ps1` from C:\c3 |
| v1.28 | Group 3 (cost to own, condos, rent prices, where to buy, Murrells Inlet), the STR data refreshed sitewide, the relocating pages' frozen chrome | Ready. Applies on the live branch (tested) |
| v1.29 | Nothing cut off on a small phone: the homes row's search wraps below 380 px; the neighborhoods hub title fits at 320 px | Ready. Applies after v1.28 (tested) |

## The check before stopping

The browser critic (`tools/critic.mjs`) was run at 320, 390 and 1440 px on every page these patches touch:
- the 20 rebuilt guides;
- /invest/airbnb-income/, /invest/rental-returns/ and /buyers/second-home/;
- the /invest/ and /submarkets/ hubs;
- the analyzer.

**All 20 rebuilt guides have no blocking finding.** The one thing cut off sitewide was the homes row's search at 320 px, which ran 44 px past the screen on every page with a homes row; v1.29 fixes it.

These blocking findings were already on the live site before these patches (checked against chapter3realty.com), and none is a cut-off. Left for the next round:
- **No real photo:** /invest/airbnb-income/, /submarkets/, /invest/long-term-rental/, /buyers/relocating/beaches/ and /sell/.
- **/buyers/second-home/:** no answer on the first phone screen.
- **/invest/long-term-rental/:** 17 questions in the FAQ schema that are not shown on the page (an SEO risk). One paragraph is set at 14.5 px on a phone.
- **/sell/:** one paragraph of small text.

## Group 4, stopped by the owner

| Page | Saved |
|---|---|
| /submarkets/north-myrtle-beach/ | must-answer, fact ledger, plan, shot list (research done; not verified) |
| /submarkets/surfside-beach/ | the same, plus NEEDS |
| /buyers/buying-in-myrtle-beach/ | must-answer and shot list only |
| /buyers/relocating/which-town/ and /buyers/relocating/why-myrtle-beach/ | nothing |

To restart: run `workflows/redesign-batch.js` (now the leaner line, `FASTER.md`) with these five pages. The researchers will find the saved ledgers in each page's folder.

## Still to do, in order

1. Group 4 (the five pages above).
2. The seven unshipped 2026-10-d pages, one fix and one re-check each (`BRIEF.md`, "Open items").
3. The pre-existing critic findings above.
4. Weak pages from the judges' file not yet scheduled: 24 articles and 10 hubs (owner's count, 2026-11-03).
5. Photos: `photo-request-group-1.md` to `-3.md`, sent once Gmail is connected.

## v1.30, 2026-11-03: more offers and plainer words on the 20 rebuilt guides

The owner asked for more offers mid-page, simpler words and the most wanted answer first. Each of the 20 pages now has an offer after about every second section, tied to that section; its top is reworded for a first-time buyer; no fact changed. A separate reader checked each set of five, and fixers applied every item. The new score rule H5 (one offer per two sections) passes on all 20. The critic finds nothing blocking at 320 and 390 px on the six pages sampled, and audit and check pass. v1.28, v1.29 and v1.30 apply in order on the live branch (tested).

Open: /hoa/special-assessments/ still words "special assessment" differently from /hoa/reserves/ ("a one-time bill to each owner for a cost the fund cannot cover"). Match it when that page ships.

## v1.31, 2026-11-04: the seven unshipped 2026-10-d guides

/sell/out-of-state-buyers/, /hoa/special-assessments/, /buyers/first-time-home-buyer-myrtle-beach/, /buyers/new-construction/, /hoa/hoa-vs-poa/, /invest/str-vs-ltr/ and /invest/str-tools/.

The line used was `workflows/finish-batch.js`:
1. One fix from each page's last review and the brief's open items.
2. A re-check, beside an independent check of every new fact.
3. The lead applied the verifier's sentence corrections: the SC hold-back on "the price less your selling costs"; Socastee "west"; Arcadia's builders; the amenities row on HOA vs POA; the hedged HOA sentence on STR vs LTR; the Sea Shadow fees.
4. The offers and plain-words pass, a reader check and its fixes.
5. The lead shortened three button labels on new construction that were cut off at 320 px.

Results:
- claims-scan finds 0 banned claims on the whole site; the last 10 were on these seven old pages.
- struck-check is clean, and the critic finds 0 blocking at 320, 390 and 1440 px.
- audit and check pass.
- v1.28 to v1.31 apply in order on the live branch.
