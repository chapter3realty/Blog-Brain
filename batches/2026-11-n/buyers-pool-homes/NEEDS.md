# Shared needs: /buyers/pool-homes/

For the lead. This page does not edit shared files.

1. **The search words do not know "Carolina Forest".** `/homes/api/map?q=house%20with%20a%20pool%20in%20carolina%20forest` drops the place and returns all 305 pool houses (facts row 22). The CRM has the key `area_carolina_forest`. A rule in `idx-lib/query.js` that maps "carolina forest" (and the other `area_*` names: Socastee, Garden City, Arcadian Shores, Cherry Grove, Prestwick and Lakewood, Litchfield, Barefoot Resort, Windy Hill, Crescent Beach, Ocean Drive) to its area key would let every page link a town search in plain words. Until then this page links Carolina Forest with the filter URL.
2. **A homes row for this page, if the lead wants one** (`idx-lib/feeds.js`): houses with a private pool (`type=house&has=pool`), Horry County, at least 10 results on the day. The page itself does not need it; the live search is its main offer.
3. **The contact form topics** `pool-home-search` and `pool-check`, if the form reads a topic; otherwise the plain `/contact/` link.
