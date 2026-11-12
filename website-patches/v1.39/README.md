# v1.39: crawl fixes from Search Console (2026-11-13), on the live branch at 945e2154 or newer

One patch, `0001`. Applied with `git am -3` in C:\c3-v138, pushed as the chapter3realty account, then `deploy.ps1 -ClonePath C:\c3-v138`.

What the exports of 2026-11-12 showed (batches/2026-11-c/SEARCH-CONSOLE.md):
- 6,154 noindex pages crawled: the listing pages under /homes/.
- "Crawled, not indexed" (30): photo-proxy cards (/homes/p/card?u=...), /homes/api/filters, an analyzer link with ?mls=, a filtered search, two listing pages, and app.chapter3realty.com files. No guide.
- "Discovered, not indexed" (4): /buyers/55-plus-communities/del-webb-grande-dunes/, /buyers/55-plus-communities/myrtle-trace/, /buyers/relocating/from-massachusetts/, /buyers/relocating/hurricanes/. Never crawled.
- 5xx (20) and 404 (27): listing pages, filtered searches and map links, plus old URLs that now redirect or are gone.

The patch:
- robots.txt skips /homes/ (except /homes/ itself and /homes/near/ place pages), /cdn-cgi/ and ?mls= links, for every crawler, and lists sitemap-homes.xml.
- The page waits at most 1.8 s for listings, not up to 3 s a step; searches still running finish in the background and fill the cache.

Tested: applies with `git am -3` on 945e2154, idx-test passes (with a new control under 2.5 s), build check and audit pass.
