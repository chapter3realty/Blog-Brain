# Shared needs: /sell/cash-offer/

1. **CRM map API: `has=fixer_upper` returns HTTP 503** on every try (2026-11-08, with and without `type=`), while `has=cash_only_listing` works and the filter list counts 142 "Needs work" listings. The page uses the filter list's count. Whoever owns `homes/api` should look at the filter.
2. **The whole-feed map query with a `has=` filter and no `type=` also returned 503.** Queries by type work.
3. **scstatehouse.gov moved chapter pages** from `/code/t40c057.php` to `/code/statmast.php?title=40&chapter=57` (the old URL now redirects to a 404 after the first hop with curl). Source links on built pages that use the old form should be checked by the site audit.
4. **Hub links (lead):** /sell/ should link /sell/cash-offer/; /sell/net-proceeds/, /sell/repairs-before-selling/, /sell/inherited-house/ and /sell/rental-property/ could each link it in one sentence.
5. **Sitemap and llms.txt (lead):** /sell/cash-offer/ is missing from sitemap.xml (build.js audit fails on it) and from llms.txt.
6. **Links in from other pages (lead):** score.js S8 wants two pages linking here from body copy. /sell/ and /sell/net-proceeds/ are the best two (item 4).
7. **A homes feed for this page (idx-lib/feeds.js, shared):** none is set for /sell/cash-offer/. Proposed: "Houses the seller lists as cash only", `type=house&has=cash_only_listing` (22 houses on 2026-11-08, above the 10 minimum), fallback COMPETITION. The page already links /homes/map/?type=house&has=cash_only_listing in the as-is section.
8. **Sibling links:** the page links /sell/repairs-before-selling/, /sell/divorce/ and /sell/seller-disclosure/, which this batch is building. build.js audit reports them as dead until those pages are built.
9. **Footer:** build.js check fails on every page (150) because pages differ from partials/footer.html; `node build.js stitch` fixes it. Not run in this stage.
10. **Checkpoint:** the command's last pathspec, chapter3realty/images/2026-11-n/sell-cash-offer, does not exist (the page reuses the flood photo files from images/2026-10-d/buyers-undisclosed-flooding/ and adds no image), and a missing pathspec makes checkpoint.sh write an empty web.patch. The checkpoint was run without that pathspec.
