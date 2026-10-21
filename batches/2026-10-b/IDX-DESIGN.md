# IDX on the guide pages and the homepage (round 15, 2026-10-21; built 2026-10-22 to the CRM's contract v1)

The owner: "the photos for each community could be a horizontally scrolling IDX feed and try to get it to show a wide variety of photos as it scrolls. it could just show house and price." And: "figure out how to design using the IDX for these pages and the homepage ... in a way that maximizes beauty and conversion rates."

This builds on the listing search the CRM session built (CRM Ticket 404). That work is on two branches: CRM branch `main-ms4kir` and website branch `idx-public` (commit 3c5aef6). Neither is merged or live. It has one MLS feed with three tiers. The public tier shows the facts, one photo and the listing firm. A free sign-up shows every photo and the full details.

## What a reader sees on a guide page

- In each community, right after its first paragraph, where its photo was: one row titled "Homes for sale in Cherry Grove now", with a "See all" link. The owner (2026-10-21): the feed "will act as the photos". The photo we have stays as the placeholder until the row fills, then it hides itself.
- The row scrolls sideways. On a phone about 1.7 cards show, so the next card peeks in and invites a swipe. On a wide screen 4 cards show.
- Each card is the house photo, with the price on a glass chip over it. Under it, in small print: "Listed by [firm] · CCMLS". MLS rules require the listing firm on every card (CCMLS 16.14).
- Up to 10 homes, spread across the community's price range: the lowest, the highest and evenly between them, photos first. The row shows the range of what the money buys, not ten look-alikes.
- The last card is "See all N homes in Cherry Grove". It opens the community's search page, where the sign-up shows the full details. That is the conversion step.
- The MLS disclaimer appears once, at the end of the page (CCMLS 16.16 and 16.17).
- **The Farm** has one strip, right under the top offer, so the homes for sale are the first thing after the short answer.

## When it shows nothing

The strip is an empty slot in the page until the listing search is on (`IDX_LIVE=1`). A place with fewer than 3 homes for sale keeps its empty slot. An empty slot takes no space, and the place's photo shows instead, where it has one. The page itself never holds listing data, so a stale price can never be printed into the page.

## How it is built

| Part | Where | What it does |
|---|---|---|
| The slot | `tools/glass.js` `homes(slug, name, photo)`, in all five specs | `<div class="hx-strip" data-place="cherry-grove" data-name="Cherry Grove"></div>`, then the photo in `<div class="hx-fallback">`, which CSS hides once the strip has cards |
| The look | `tools/glass.js` `homesCss()` | Glass cards, the price chip, sideways scroll with snap, reduced-transparency fallback |
| Filling it | `website-patches/idx-strips.patch`, applied to `idx-lib/near.js` on `idx-public` | At the edge, reads `/api/idx/places/<slug>` for each slot, picks the spread, writes the cards, adds the disclaimer once. A page with strips skips the generic "Homes near X" blocks at the bottom. Tested against a mock CRM: 12 homes give 10 cards across the range; 2 homes give an empty slot; the disclaimer appears once. |
| The places | `batches/2026-10-b/data/idx-places.json` | 58 places for the CRM's place catalog: slug, name, the pages each strip is on, and a draft match rule (MLS subdivision names; no-HOA areas use the area plus "association fee blank or 0, detached"). |

## The day the MLS data arrives

1. In the CRM, add the 58 places to `places-catalog.ts`. Match each by its MLS subdivision names. For each, check every section name its ledger counts (for example, Barefoot's four sections, Prince Creek's sections outside Seasons).
2. Run the CRM's read-only `scripts/idx-preview.ts` for each place. Each should return 3 or more active homes. A place with fewer stays hidden, which is fine.
3. Look at the photos the spread picks for 5 places. If one place repeats a builder's same plan, prefer one photo per street in the spread.
4. Apply `idx-strips.patch` on `idx-public`, build, and run the private preview (`IDX_PREVIEW_WORD`).
5. Then the CRM session's own go-live list: the CCAR notice, the attorney's read of the terms, the keys, `IDX_LIVE=1`.

## The homepage

The homepage was redesigned (commit 54703db5, live). With the feed, five additions, top to bottom:

1. **One search bar in the hero:** a place or a price, then "Search homes". It goes to `/homes/`. It replaces nothing the hero already does well.
2. **"New this week":** one strip, the same glass cards, the 10 newest listings across the Grand Strand, spread across price. New listings are the reason a buyer comes back.
3. **"Choose by what you love":** five glass cards, one per guide (the beach, golf and gates, no HOA, The Farm, on a budget). Each card holds a small strip of 4 homes from that guide's places, and a link to the guide. The guides do the selling; the strip shows it is real.
4. **"Under $300,000":** one strip for first-time buyers, with a link to the affordable guide.
5. **One offer:** "Tell us what you want nearby. We will send three neighborhoods." The same offer as the best-neighborhoods page, so there is one clear next step.

Beauty rules for all of it: large photos, the price on a glass chip, no badges on top of the photo except the price, one row per idea, nothing that moves by itself. Conversion rules: every strip ends with "See all", and every "See all" leads to the sign-up for full details.

## SEO and AEO

The cards are written into the page at the edge, so search engines see real links to listing pages. The guide text, the FAQ, the schema and the short answers stay exactly as they are; the strips add fresh content without changing what the page answers. The pages are cached for 5 minutes while the feed is on.

## Built (2026-10-22): the website side of contract v1

The CRM's contract v1 replaced the earlier `idx-public` design. The website side is built on a new website branch, `claude/idx-v1`, on top of the live site and batch 2026-10-b. It is off until `IDX_LIVE=1`. Its own guide is `docs/idx-website.md` on that branch. In short:

- `/homes/` search, `/homes/<MLS#>` (301 to the listing's URL), one page per listing, `/homes/near/<place>/` for every community on these pages, `/homes/terms/`, and `/sitemap-homes.xml`.
- The public sees one photo and the key facts; a free sign-up with name, email and phone (terms box unticked and required, texts optional with the locked TCPA wording, Turnstile) shows every photo and the full details. Heart and "Tour this home" on every listing.
- The guide pages' strips are filled at the edge from the CRM search: `subdivision` words for a named community, `near` a point for an area (`data/idx-places.json`). They pan sideways with no scroll bar; a mouse drags them.
- Every card shows the price and, under it, the listing firm at the same size. The MLS requires the firm on every listing, no smaller than the listing's own text (CCMLS 16.14, contract §8.1), so it cannot be smaller than the price.
- The footer now names Chapter3 Realty, Corp. (linked home) and says Equal Housing Opportunity; the privacy policy has the listing search section (contract §8, §9).
- 64 controls against a mock CRM pass (`node tools/idx-test.mjs` on that branch).
- A separate security and MLS review found 3 high, 4 medium and 12 low problems. All are fixed, each with a control where a test can show it: the page script broke on `$$` inserted through `String.replace`; `/homes/terms/` was read as an MLS number; a slow CRM had no timeout (now 8 s, and 3 s for a guide page's strips, after which the page shows its photos); listing text with `$'` could break the head; a malformed CRM answer gave an error page; a bad sign-up cookie was kept on search and place pages; edited pages kept the static file's ETag. Sign-out is now a same-origin POST, with its own button. A re-check by the same reviewer confirmed every fix and found three small new problems in the sign-out and "See them all" buttons; those are fixed too. The maintenance redirect no longer allows `//other-site`.
- The whole website change is saved here as `website-patches/idx-v1-listing-search.patch`. It applies on top of batch 2026-10-b (`git apply --check` passes).

The pages themselves (round 15): no glass offer boxes anymore; on best, gated, no-HOA and affordable the top is the title, the short answer and the guide, then the entries. The homes strip is each place's offer.
