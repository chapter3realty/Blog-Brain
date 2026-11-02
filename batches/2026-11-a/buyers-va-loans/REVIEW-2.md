# Review round 2: /buyers/va-loans/, what the fixer changed

Fixer, 2026-11-02. Re-check: pass=false, score 8.5, one blocking item. Every change is in `specs/va-loans.js`; the page was rebuilt with `node tools/mkpage.js specs/va-loans.js`. No new fact and no new ledger row.

## Gates after the fix

- score.js: 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- critic.mjs at 320, 390 and 1440: 0 blocking, 0 warnings. Shots: `wf2/buyers-va-loans/critic-shots-r2/`, JSON `critic-r2.json`. Section shots at 390 of the changed parts: `r2-sellers.png`, `r2-kind-chart.png`, `r2-va-approved-condos.png`. I looked at each.
- claims-scan, facts-check: no finding on this page. house-claims: 0. struck-check: no struck wording. repeat-check and structure-check: strict pass.
- build.js check: OK. build.js audit: the same as round 1. Only the date mismatches, which the lead's `node build.js dates` sets, and the A20 warning.

## Blocking

| Finding | What changed |
|---|---|
| Price paragraph has six figures | Now one comparison and one figure: "VA is most common in the middle of the market, and about 7 in 10 new houses for sale are marked VA." The $250,000 to $300,000 band, its 2 in 3, and the 1 in 4 at $1 million and up are cut. A new build guard stops the build if the middle band no longer leads the top band by more than double, so the words stay true to row 9 on the next pull. |
| "About 20 times as many as HUD's list" (flexing) | Now "many more than HUD's list for FHA loans." The point stays (rows 2 and 3), the multiple is gone. The build still checks the ratio. |

## Nits

| Finding | What changed |
|---|---|
| Caption and sellers section both say a listing without the mark can still take VA | Cut from the chart caption. The sellers section keeps it, with what we do about it. |
| Two "4 percent" figures | Not changed. Each is named where it appears and is in a different section: "the 4 percent rate, the lower tax rate for the home you live in" in the tax steps, and "the VA's 4 percent limit ... only for other help from the seller" in the closing section. Renaming either would move away from the term the county and the VA use. |
| Selling "a little thin"; living there is in linked guides | Not changed. The reviewer marked it fixed. Saying more about life in Conway or Carolina Forest would repeat those guides and need new ledger rows. |
| Single word "units" on its own line at 320 | Not changed. The reviewer called it cosmetic, and the card title is the VA's own wording (row 14). |
| Rows F1 to F12 marked VERIFIED-BY-FIXER | For the lead: these still need an independent check before the page ships. This round added no row. |
| Shared MLS box and footer on the first screen | Still logged in NEEDS.md. |
