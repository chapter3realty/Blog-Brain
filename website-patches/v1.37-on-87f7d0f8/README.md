# Deploy order, on the live branch at 87f7d0f8 (2026-11-07)

The live branch moved (election hub, dates from the full history), so v1.33d to v1.36 were rebased onto it. Apply in this order, in C:\c3 after `git fetch` and `git reset --hard origin/claude/github-account-check-wutg8b`:

1. `..\Blog-Brain\website-patches\v1.33a-rebased-data-2026-10-d.patch` (unchanged, applies as is)
2. `..\Blog-Brain\website-patches\v1.33b-rebased-data-2026-11-a.patch` (unchanged)
3. `..\Blog-Brain\website-patches\v1.33c-rebased-images.patch` (unchanged)
4. the patches in this folder, 0004 to 0018, in number order (0016: the 13-town page with expert selling points and a homes strip per town; it also changes idx-lib/places.js, functions/homes/[[path]].js and functions/sitemap-homes.xml.js) (0014: the 13-town page back to its first version, and Devin Day the author on every page; 0015: nine more guides redesigned the approved way). 0007 and 0010 are earlier tries that later patches undo (0011, 0012); 0013 is the redesign of the five pilots with every word kept.

`git am` each one. Then `node build.js dates`, `node build.js llmsfull`, `node build.js check`, `node build.js audit`, push, and `.\deploy.ps1`.

Tested 2026-11-07: all nine apply with `git am` on a fresh checkout of 87f7d0f8, and the result matches the working copy (except line endings in twelve raw source files under data/, which nothing serves).

This folder replaces v1.33d, v1.34, v1.35 and v1.36 (do not apply those).
