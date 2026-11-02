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
