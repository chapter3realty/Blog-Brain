# Deploy order, on the live branch at 87f7d0f8 (2026-11-07)

The live branch moved (election hub, dates from the full history), so v1.33d to v1.36 were rebased onto it. Apply in this order, in C:\c3 after `git fetch` and `git reset --hard origin/claude/github-account-check-wutg8b`:

1. `..\Blog-Brain\website-patches\v1.33a-rebased-data-2026-10-d.patch` (unchanged, applies as is)
2. `..\Blog-Brain\website-patches\v1.33b-rebased-data-2026-11-a.patch` (unchanged)
3. `..\Blog-Brain\website-patches\v1.33c-rebased-images.patch` (unchanged)
4. the patches in this folder, 0004 to 0023, in number order (0023: light fixes on about 45 pages. 0022: triage round 1, seven pages redesigned, four titles, one page per place. 0021: homes near the top of more buyer pages: the STR calculator, first-time buyers, retirees, four town pages and seven pages that had none. 0019: a slow town search no longer leaves a strip empty; it fills after the page loads (Loris, 2026-11-08). 0020: the FAQ on every article folds into questions a reader taps open; the served page keeps every answer open for search engines) (0016: the 13-town page with expert selling points and a homes strip per town; it also changes idx-lib/places.js, functions/homes/[[path]].js and functions/sitemap-homes.xml.js) (0014: the 13-town page back to its first version, and Devin Day the author on every page; 0015: nine more guides redesigned the approved way). 0007 and 0010 are earlier tries that later patches undo (0011, 0012); 0013 is the redesign of the five pilots with every word kept.

`git am` each one. Then `node build.js dates`, `node build.js llmsfull`, `node build.js check`, `node build.js audit`, push, and `.\deploy.ps1`.

Tested again 2026-11-08 with 0019 and 0020: the whole chain applies with `git am` on a fresh 87f7d0f8 and matches the working copy outside data/. Tested 2026-11-07: all nine apply with `git am` on a fresh checkout of 87f7d0f8, and the result matches the working copy (except line endings in twelve raw source files under data/, which nothing serves).

This folder replaces v1.33d, v1.34, v1.35 and v1.36 (do not apply those).
