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
