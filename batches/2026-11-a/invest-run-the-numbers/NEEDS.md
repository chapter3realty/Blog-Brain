# Needs from shared tools: /invest/run-the-numbers/

1. **exiftool is not installed in this session.** `tools/photos.js embedMetadata` needs it, so the credit, licence and alt text are not embedded in the five files under `images/2026-11-a/invest-run-the-numbers/`. The record in `data/2026-11-a/invest-run-the-numbers/photos.json` passes `photos.js check`. To finish: `node tools/photos.js embed <photos.json> <site>/chapter3realty` where exiftool exists.
2. **critic.mjs "read.wall" counts a card of HTML (the numbers sheet, a div with role="group") and the lead form as no visual.** Three phone warnings on this page come from that. Not blocking. A shared fix would count `[role=group]`, `[role=img]` and `form`-like blocks with inputs as visuals.
3. **score.js H3 counts no chart on this page** because the glass charts (`G.bars`) are `role="table"` and the rent bars are `div role="img"`, not `svg role="img"`. The rule passes at 88%. A shared fix would count `.c3-gchart` and `[role=img]`.
4. **build.js audit, my page:** only the two expected date failures (dateModified and the visible Updated line) until the lead runs `node build.js dates`.
