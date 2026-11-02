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
