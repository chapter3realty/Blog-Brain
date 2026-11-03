# Needs from shared helpers: /buyers/cost-to-own/

None at the research stage. The calculator is inline on the live page and has no spec; the builder writes it into the new `specs/cost-to-own.js`.

## Round 1 (fixer, 2026-11-02)

1. `tools/compare.js`: each `compareCards` call writes an unscoped `.c3-cc` style block, and a five-column table stacks below 50em. Two tables on one page with different widths break each other: at 640 to 799 px the narrower table stacks too, with its numbers still right-aligned (critic round 1, 768 px). Ask: scope each block to its own table (a generated class), or export `CC_CSS` so a page can emit one block. Work-around in `specs/cost-to-own.js`: both tables take `css: false`, and the page carries one 40em block taken from a throwaway two-row table (`CC_STYLE`), with a `must()` that fails if compare.js moves off 40em.
2. `tools/page-kit.js` / `photos.js` `creditsList`: the generic line "Chapter3 Realty resized these photos and cropped some of them." repeats the per-photo change line above it (critic nit). Shared; not changed here.
3. The homes strip ("LIVE FROM THE MLS") and the AI search box between the hero and the short answer come from the website's edge, not the spec. The reader said they push the short answer down a full screen at 390 px. The line under the strip title ("Confirm before you buy.") also comes from the shared feed; the owner has said feed titles get no line under them.

## Build round 2 (builder, 2026-11-03)

4. The owner asked (2026-11-03) for an AI chat about each house, with every AI chat in one color and one logo. This page has no AI box of its own; the only one is the shared feed's "AI-POWERED SEARCH" box from the website's edge. When the shared chat style lands, nothing in `specs/cost-to-own.js` needs to change.
