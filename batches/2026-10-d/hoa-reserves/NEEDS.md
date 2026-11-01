# Needs: /hoa/reserves/

Shared helpers this page would use. Until they exist, the writer works around each inside `specs/reserves.js`.

1. **A banded gauge** (a 0 to 100 bar with colored bands and labelled markers) in `tools/glass.js`. Used here for percent funded (PLAN visual 3). Work-around: inline SVG in the spec, colors from the glass theme tokens.
2. **Two-series bars** in `G.bars` (30+ and 40+ years side by side). Work-around: one series, the 40-year share in a sentence.
3. **A small calculator shell** (labelled inputs, live output, works without script for the worked example). The fix-and-flip spec carries its own; this page does the same.
4. **Wikimedia rate limit.** Every Commons request from this session on 2026-11-01 got 429 or "too many requests" (several helpers share the address). A shared, cached Commons lookup in `tools/photos.js` with one request at a time would let helpers in a batch share results.
