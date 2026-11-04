# NEEDS: /buyers/first-time-buyer-tax-credit/ (page 2)

Shared changes and checks this page needs from the lead. Builder did not edit anything outside the page's own files.

1. **Chart quarters outside the ledger.** The price chart draws every quarter of 2007 to 2013 from FHFA's `hpi_at_metro.csv` (CBSA 34820), saved as `WEB/data/2026-11-e/first-time-buyer-tax-credit/fhfa-myrtle-beach-2006-2014.json`. The spec checks that the fourth-quarter values equal ledger row F199. The other quarters come from the same file but are not ledger rows. One sentence in the chart caption rests on them: "after a small rise in late 2010" (2010 Q2 178.20, Q3 179.50, Q4 181.92). The aria-label says prices were "about 8 percent higher in 2007" (2007 Q2 231.48 against 2008 Q4 211.91). A verifier should confirm both, or cut them.
2. **Sitemap and llms.txt.** `build.js audit` reports the page missing from `sitemap.xml` and `llms.txt`. That is the lead's step (stitch and dates).
3. **Facts stated without a ledger row** (general civics, low risk): a House bill passes by simple majority; the president signs it; Ways and Means is the House committee that writes tax law; a federal income tax credit applies the same way in every state. Add rows if the verifier wants them.
4. **Not stated, on purpose:** that a bill not passed by the end of a Congress must be reintroduced. It is the main reason H.R. 3475 cannot pass as it stands after January. Add a row (for example from congress.gov's "About bills" page) and the page can say it in the "What it takes to pass" section.
5. **Derived figure:** "Democrats ... with fewer than 60 seats" is 47 seats before the election plus the four pickups CBS reports (F020). Arithmetic only.
6. **Photo partner:** no Grand Strand place photo is needed. The page uses the U.S. Capitol (public domain, Architect of the Capitol); its record is in `WEB/data/2026-11-e/first-time-buyer-tax-credit/photos.json`, and its 16x9 crop is the share image.
