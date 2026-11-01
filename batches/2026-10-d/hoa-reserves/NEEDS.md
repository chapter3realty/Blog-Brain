# Needs: /hoa/reserves/

Shared helpers this page would use. Until they exist, the writer works around each inside `specs/reserves.js`.

1. **A banded gauge** (a 0 to 100 bar with colored bands and labelled markers) in `tools/glass.js`. Used here for percent funded (PLAN visual 3). Work-around: inline SVG in the spec, colors from the glass theme tokens.
2. **Two-series bars** in `G.bars` (30+ and 40+ years side by side). Work-around: one series, the 40-year share in a sentence.
3. **A small calculator shell** (labelled inputs, live output, works without script for the worked example). The fix-and-flip spec carries its own; this page does the same.
4. **Wikimedia rate limit.** Every Commons request from this session on 2026-11-01 got 429 or "too many requests" (several helpers share the address). A shared, cached Commons lookup in `tools/photos.js` with one request at a time would let helpers in a batch share results.

Added by the writer, 2026-11-01:

5. **compareCards cells are capped at 40 letters** (`tools/compare.js`). The state table needs short sentences in its cells. Work-around: the spec builds its own table that turns into cards under 700 px (`.rs-st`). A shared "long cells" option would let other pages do the same.
6. **The closing band on a glass page** is styled as the top offer bar when the site adds a block after it. Work-around copied from /hoa/special-assessments/ into this spec's CSS.
7. **exiftool is not installed** in this container, so `tools/image-meta.js` fails S13 on every page (18 of 18) and `photos.js embed` cannot write the metadata into the new photo's files. Run `node tools/photos.js embed data/2026-10-d/hoa-reserves/photos.json chapter3realty` where exiftool exists, before release.
8. **The site's listing search block** ("Live from the MLS") sits between the hero and the short answer, so the short answer starts below the first phone screen. Work-around: the hero sub line carries the yardstick in one sentence, so the first screen still has an answer.
