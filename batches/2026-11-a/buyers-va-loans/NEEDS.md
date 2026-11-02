# Needs: /buyers/va-loans/

No shared helper change needed. The map uses area-map.js regionMap({ name, places }) as documented; the charts use glass.js as other pages do.

## tools/checkpoint.sh: a missing pathspec empties web.patch

At the research stage `specs/va-loans.js` and the images folder do not exist yet. `git add -N -- <all pathspecs>` then fails ("pathspec 'specs/va-loans.js' did not match any files"), nothing is marked intent-to-add, and web.patch comes out empty with no error. Workaround used here: the checkpoint was run with only the paths that exist (`data/2026-11-a/buyers-va-loans`). Suggested fix: add only the pathspecs that exist, for example filter with `[ -e "$WEB/$p" ]` before `git add -N`, and warn when web.patch is empty.

## Build stage, 2026-11-02

- **exiftool is not installed in this container,** so `tools/image-meta.js` fails S13 on "embedded metadata cannot be read" for every image on the page (and `photos.js embed` cannot run). The page's ImageObject JSON-LD is in (`photos.js imageSchema`), so the schema half passes. The Warbird Park files in `images/2026-11-a/buyers-va-loans/` need `node tools/photos.js embed data/2026-11-a/buyers-va-loans/photos.json chapter3realty` on a machine with exiftool before upload. apt could not find `libimage-exiftool-perl` here.
- **The page CSS repeats /buyers/programs/'s three fixes** (its NEEDS.md 8 to 10): the end band drawn as the slim bar when the feed's MLS notice follows it, the feed's search box running past a 320 px screen, and the header gap between 1000 and 1100 px. They belong in glass.js and the shared CSS.
- **The site footer** says "The Myrtle Beach investor-focused brokerage. DSCR analysis, STR analysis ..." on a page for veterans buying a home to live in (CRAFT 4, "The page's surroundings are part of the page"). A site fix, not this page's.
- **Wikimedia Commons answered 429** (rate limit) for every search from this container, so no new Commons photo could be looked at. The two photos are public domain: the USGS aerial already on /hoa/reserves/, and the Library of Congress Warbird Park photo (its batch 2026-10-b record never reached the site; this page carries its own files).
