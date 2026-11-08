# Ten new pages, batch 2026-11-n (2026-11-08)

Two patches, 0016 and 0017. They go on top of the other chat's chain in `website-patches/v1.37-on-87f7d0f8/` (0004 to 0015), because the new pages use that chain's approved design and its author rule.

Pages:

- /sell/best-time-to-sell/
- /sell/cash-offer/
- /sell/seller-disclosure/
- /sell/repairs-before-selling/
- /sell/sell-or-buy-first/
- /sell/divorce/
- /buyers/pool-homes/
- /buyers/homes-near-the-beach/
- /buyers/new-construction/builders/
- /submarkets/myrtle-beach/market-common/

It also adds links to them in one sentence each, in:

- the seller hub
- best neighborhoods
- no-HOA homes
- new construction
- new-construction rentals
- the Myrtle Beach guide

It also adds share cards and the sitemap and llms.txt entries. llms-full.txt is left out on purpose: run `node build.js llmsfull` after applying.

## 0017 (same day, after the owner's review)

- Home strips in place of the map links, and feeds on the buyer pages (idx-lib: strips may be a feature search; eight new strips in places.js; five feeds in feeds.js).
- FAQ dropdowns in `tools/mkpage.js`. Each page switches to dropdowns the next time it is built from its spec. The 10 new pages and the 7 pages linked here are already rebuilt.
- New construction keeps one sentence on the builders and links the builders page.
- An offer for owners selling alone on the disclosure page, and links to it from the FSBO and undisclosed-flooding pages.

## One problem before deploying

The chain was made on 87f7d0f8. The live branch has since moved to 6af8c521 (the "573" address removal, the hidden election pages, the mobile and search work). Patch 0004 no longer applies there. It conflicts in 21 built pages, llms.txt, llms-full.txt and sitemap.xml, mostly the footer.

The chain needs one more rebase onto the live branch. After that, 0016 applies on top, since it adds new files and changes only a few lines in existing ones.

## Order

1. The chain, rebased onto the live branch.
2. 0016, then 0017.
3. `node build.js dates`
4. `node build.js llmsfull`
5. `node build.js check`
6. `node build.js audit`
7. Push.
8. `.\deploy.ps1`

## Tested on 87f7d0f8 plus the chain

- audit: zero blocking.
- score: 94 to 100 for each page.
- claims-scan: 0 findings on these pages.
- house-claims: 0 on these pages.
- critic, at 390 and 1440 px: 0 blocking on 8 of the 10 pages. /sell/divorce/ and /buyers/new-construction/builders/ have no real photo yet. They wait on the photo partner's shots (each page's `shot-list.md`).
