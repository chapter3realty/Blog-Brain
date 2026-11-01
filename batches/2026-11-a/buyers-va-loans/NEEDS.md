# Needs: /buyers/va-loans/

No shared helper change needed. The map uses area-map.js regionMap({ name, places }) as documented; the charts use glass.js as other pages do.

## tools/checkpoint.sh: a missing pathspec empties web.patch

At the research stage `specs/va-loans.js` and the images folder do not exist yet. `git add -N -- <all pathspecs>` then fails ("pathspec 'specs/va-loans.js' did not match any files"), nothing is marked intent-to-add, and web.patch comes out empty with no error. Workaround used here: the checkpoint was run with only the paths that exist (`data/2026-11-a/buyers-va-loans`). Suggested fix: add only the pathspecs that exist, for example filter with `[ -e "$WEB/$p" ]` before `git add -N`, and warn when web.patch is empty.
