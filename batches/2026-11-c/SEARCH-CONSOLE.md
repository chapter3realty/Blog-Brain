# Search Console, 2026-11-12 exports

Share links from the owner (Coverage drilldowns), kept for later checks:
- https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Achapter3realty.com&item_key=CAMYFyAC&sharing_key=krOWrT5iPB9D8pYXlYZGzw
- https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Achapter3realty.com&item_key=CAMYEyAC&sharing_key=sUjH8i3BL-Upwx2r1z5gXw
- https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Achapter3realty.com&item_key=CAMYDSAC&sharing_key=jVBlODHJWQWKwvzM4r9NEw
- https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Achapter3realty.com&item_key=CAMYNCAC&sharing_key=ErLigbUWNWDDX5mXoVLmwA
- https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Achapter3realty.com&item_key=CAMYFiAC&sharing_key=xBL8vodFnnG3RXdiMpPVPA

## What the rows held

| Issue | Pages | What they are | Fix |
|---|---|---|---|
| Crawled, not indexed | 30 | 22 photo-proxy cards, 3 app.chapter3realty.com files, /homes/api/filters, one ?mls= analyzer link, one filtered search, two listing pages. No guide. | robots.txt (v1.39); app.chapter3realty.com needs its own robots.txt (CRM side) |
| Discovered, not indexed | 4 | del-webb-grande-dunes, myrtle-trace, from-massachusetts, hurricanes. Never crawled (last crawl 1969-12-31 means none). Each has 6 to 10 referring pages. | Crawl time freed by v1.39; Request indexing on each |
| Server error (5xx) | 20 | 16 listing pages, filtered searches and map links (late October to early November); two old URLs (/buyers/first-time-buyer-guide/, /buyers/lender-dpa/) that now 301 correctly | robots.txt; the old two need nothing |
| Not found (404) | 27 | sold listings, filtered searches and map links, /homes/p/, /cdn-cgi/l/email-protection, and five URLs from the site before this one (/markets/..., /night, /audio/, /listings/...) | robots.txt; the old five stay 404 |
| Other 4xx | 5 | /homes/api/register, returning, hearts, views, claim | robots.txt |
| Noindex | 6,154 | listing pages | robots.txt |

Speed, measured 2026-11-13 with Googlebot's user agent: 0.3 to 0.5 s with a warm cache; 1.6 to 3.7 s on the first visit after the cache expires. v1.39 caps that at about 1.8 s.
