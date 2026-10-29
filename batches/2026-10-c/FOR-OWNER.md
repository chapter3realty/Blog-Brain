# Batch 2026-10-c: the fix and flip page

Page: /invest/strategies/fix-and-flip/ (rebuilt; it keeps its address and its June 13 publish date).
Patch: website-patches/v1.18-fix-and-flip-page.patch. Apply it after v1.17 (the deal finder).

## Deploy (PowerShell)

1. `cd C:\Blog-Brain; git pull; cd C:\c3`
2. If v1.17 is not in yet: `git am C:\Blog-Brain\website-patches\v1.17-deal-finder.patch`
3. `git am C:\Blog-Brain\website-patches\v1.18-fix-and-flip-page.patch`
3b. `git am C:\Blog-Brain\website-patches\v1.19-ai-search-map-click-listing-retry.patch`
4. `git push origin HEAD:claude/github-account-check-wutg8b`
5. `.\deploy.ps1`

## How it was checked

- Facts: 38 ledger rows, researched by one agent and checked by another (34 verified, 4 corrected); a second verifier read every reworded sentence (21 fixed).
- The county's deeds were pulled twice by two agents and matched exactly; all 768 deed pages were opened.
- A cold reader (an Ohio investor) and four owner's-eye rounds: 7, 8, 8, 8.5, then 9 of 10 with no high or medium finding.
- Gates: build.js audit and check, score.js 99, claims-scan and facts-check quiet on the page, struck-check and repeat-check pass.

## Still open (OWNER-QUESTIONS.md)

1. Answered 2026-10-29: worth about $390,000 once repaired (now on the page).
2. Repair costs per square foot (light, medium, full) that our agents use.

## Lesson

An automated value on a house needs its own MLS licence (AVM), which we do not have. The deal finder and this page show the facts of nearby sales and let the agent set the after-repair value. Any future tool that puts a dollar value on a listing needs that licence first.
