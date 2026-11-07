# Deploy order, on the live branch at 87f7d0f8 (2026-11-07)

The live branch moved (election hub, dates from the full history), so v1.33d to v1.36 were rebased onto it. Apply in this order, in C:\c3 after `git fetch` and `git reset --hard origin/claude/github-account-check-wutg8b`:

1. `..\Blog-Brain\website-patches\v1.33a-rebased-data-2026-10-d.patch` (unchanged, applies as is)
2. `..\Blog-Brain\website-patches\v1.33b-rebased-data-2026-11-a.patch` (unchanged)
3. `..\Blog-Brain\website-patches\v1.33c-rebased-images.patch` (unchanged)
4. the six patches in this folder, 0004 to 0009, in number order

`git am` each one. Then `node build.js dates`, `node build.js llmsfull`, `node build.js check`, `node build.js audit`, push, and `.\deploy.ps1`.

Tested 2026-11-07: all nine apply with `git am` on a fresh checkout of 87f7d0f8, and the result matches the working copy (except line endings in twelve raw source files under data/, which nothing serves).

This folder replaces v1.33d, v1.34, v1.35 and v1.36 (do not apply those).
