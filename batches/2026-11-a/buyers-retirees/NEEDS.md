# Needs from shared files: /buyers/retirees/ (batch 2026-11-a)

For the lead. Nothing here was changed in a shared file; each item has a workaround inside `specs/retirees.js`.

## 1. glass.js: the end offer band is drawn as the light top bar

- What: on the preview, the website's listing notice ("Updated ... Source: Coastal Carolinas Association of REALTORS ...") is added inside `<main>` after the end offer band. The band is then no longer `:last-child`, so glass.js `COMPACT_RULES` (selector `main#main>section[style^="background:var(--navy)"]:not(:last-child)`) gives it the light glass bar. Its headline and text stay ivory, so they are almost invisible on the light card.
- Seen on: /buyers/retirees/ and /invest/strategies/fix-and-flip/ (screenshots at 390 px). Likely every glass page with the end band.
- Fix proposed: in glass.js, select the top bar by position or content, not by `:not(:last-child)`. For example `section[style^="background:var(--navy)"]:not(:has(>.wrap>h2))`: mkpage gives the top band a `<p>` headline and the end band an `<h2>`.
- Workaround on this page: `PAGE_CSS` in the spec restores the dark panel on the band whose first child is an H2.

## 2. compare.js: cells over 40 letters

- The decision table ("If this is you, then ...") needs a sentence per row. compareCards refuses cells over 40 letters, so the spec draws its own glass cards (`decide()` in the spec). A shared "decision cards" block in compare.js would let other decision pages use it.
