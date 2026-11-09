# VERIFY: /submarkets/carolina-forest/

Independent verifier, 2026-11-09. The rows reuse county deed data in the website copy. I read `data/2026-11-a/invest-where-to-buy/findings.json`, `data/2026-11-a/buyers-relocating-which-town/findings.json` and the deeds file `data/2026-10-d/sell-out-of-state-buyers/out-of-state-buyers.json`, and recounted what the deeds file allows. The parcel land-use data behind the house and townhouse split is not in the repo, so I could not re-run that split.

Counts: 4 VERIFIED, 0 CORRECTED, 2 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | VERIFIED | The deeds file holds 13,194 sales; its source line reads "Horry County AcclaimWeb DEED (001) recorded 2025-10-01..2026-09-30; Horry County GIS layers 24 and 22 read 2026-11-01". Dates are recording dates. The method lines match both earlier ledgers. |
| 2 | VERIFIED | findings.json: house resales 405, median 440,000, p25 324,950, p75 598,950, builder sales 61; which-town findings agree. The house figure rests on the 2026-11-a re-run (verified there), since the deeds file has no land use. |
| 3 | VERIFIED | findings.json: 91 resales, median 172,000, p25 160,000, p75 195,000. My recount from the deeds file (place "Carolina Forest CDP", not a builder sale, condo): 87 resales, median $172,000. |
| 4 | VERIFIED | findings.json: 34 resales, median 229,500 (p25 211,250, p75 244,500), 19 builder sales. Small sample: "about". |
| 5 | STRUCK | Redfin's $418,000, SC Realtors' $464,710 and "roughly 1,330 homes" have no primary source here. Cut all three. |
| 6 | STRUCK | No row for the $329,000 county or $266,000 city figure. Cut both. (The deeds file gives a county-wide resale median of $300,000 over every kind of home; that is a different group and is not a row.) |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 3, "Most homes sold here are houses: 405 of the 530 resales." 530 is houses, condos and townhouses only (405 + 91 + 34); other kinds of homes are left out. Write "405 of the 530 house, condo and townhouse resales".
2. Step 4, FAQ "to over $1 million on the Intracoastal": no row. Keep it only with its own row, or cut it.
3. Not in the FIX: the rental section still says "condos in the $200,000s" (struck-check hit, "Carolina Forest rental rules: long-term leases, not short-term"). Row 3 puts the middle condo at $172,000. Change it with the other two $200,000s sentences.
4. Step 3, "In the year to September 2026": the dates are recording dates, October 1, 2025 to September 30, 2026. "Deed records ... in the year to September 2026" is accurate.

Struck list: `batches/2026-11-b/facts/submarkets-carolina-forest-struck.json`. On the live page it finds every old figure: $418,000, $464,710, $215,500, $329,000, "1,330 homes" and the three "$200,000s" condo sentences.
