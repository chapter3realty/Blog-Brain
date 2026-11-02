# Needs from shared files: /buyers/common-mistakes/ (batch 2026-11-a)

For the lead. Nothing here was changed in a shared file.

## 1. compare.js: the ranked table has cells over 40 letters

The opening table (PLAN.md section 0) has "What it costs" and "Who it hits" cells of 40 to 60 letters. compareCards refuses cells over 40 letters (the retirees page hit the same limit). Workaround: the spec draws its own glass cards for the phone and a plain glass table for wider screens. A shared "ranked cards" or "decision cards" block in compare.js would serve both pages.

## 2. /buyers/buying-in-myrtle-beach/ (same batch, page 18) copies this page's mistakes

The judge's notes for that page say its mistakes sections copy /buyers/common-mistakes/ and should be cut with a link here. Tell that page's writer: link to /buyers/common-mistakes/ for mistakes, and do not restate the 4 and 6 percent cost, the flood figures or the STR rule with different numbers (this page owns rows 12, 13, 28 to 31).

## 3. /invest/str-rules/ says "fewer than 30" grandfathered houses

The city's planning page says 24 (facts.md row 23). Not this page's file; PROPOSED.md 2 has the registry row.

## 4. glass.js end-band contrast

If the retirees NEEDS.md item 1 (end offer band drawn as the light top bar when the listing notice follows it) is not fixed in glass.js by build time, copy the retirees spec's PAGE_CSS workaround.

## 5. checkpoint.sh saves an empty web.patch while the spec does not exist yet

`git add -N -- "$@"` fails for the whole list when one pathspec (here `specs/common-mistakes.js`, not written yet in the research stage) matches nothing, so new files are not intent-added and the diff is empty. The first research checkpoint pushed a 0-byte web.patch. Workaround used: `git add -N` on the data folder alone, then the same checkpoint command again (39 files saved). Fix proposed: add each pathspec on its own, or pass `--ignore-missing`, in checkpoint.sh.

## 6. Build stage notes (writer, 2026-11-02)

- **Investor footer on a buyer page.** The site footer says "The Myrtle Beach investor-focused brokerage. DSCR analysis, STR analysis, and condo-by-condo ROI data". On this page the reader is a buyer moving here (CRAFT 4, "The page's surroundings are part of the page"). Site fix, not this page's file.
- **The ranked list and the stage steps count as "On this page" lists** in score.js H14. Each entry's data-toc label is set to its card label, so all 27 links match; H14 still marks the opening section, the steps section and the FAQ "not listed" (77%). A rule that knows a ranked list from a contents list would clear it.
- **Photos reused, not new.** Wikimedia Commons returned HTTP 429 for both TS Debby files again at build time, so the page reuses three public-domain records already on the site (see photos.json reused_from). The USGS houses-and-towers frame is copied into this page's image folder, so the page does not depend on /submarkets/myrtle-beach/ shipping.
- **"catch" is banned by build.js** (owner, 2026-09-05). PLAN.md and must-answer.md used "when we catch it"; the page says "when we check for it".

## 7. Review round 1 (fixer, 2026-11-02)

- **Shared header at 1000 to 1120 px.** The phone number pushes the page 5 px wide at 1024 px (also on /invest/strategies/fix-and-flip/). Worked around in this spec's PAGE_CSS with the retirees rule (the digits hide in that band; the icon and its label stay). Fix once in the shared header CSS and drop both page rules.
- **Homes strip search box at 320 px.** `.hx-fb-ai` ran 40 px past the column. Worked around in PAGE_CSS with the retirees rule. Fix once in the strip's own CSS.
- **Compact top offer bar.** At 390 and 1024 px its glass edge starts 8 to 18 px left of the text column (glass.js COMPACT_RULES: `width:calc(100% - 32px)` and `margin-left:max(16px, ...)`). The text inside lines up; the edge does not. Not changed here; a glass.js choice for every page.
- **Photo credits note** "Chapter3 Realty resized these photos and cropped some of them." comes from photos.js and its test; it records the change a CC licence asks us to state. Not changed here.
- **critic.mjs read.wall** fires on the FAQ (an H3 every 3 to 6 lines). False hit, as in round 0.
