# Shared needs: /sell/cash-offer/

1. **CRM map API: `has=fixer_upper` returns HTTP 503** on every try (2026-11-08, with and without `type=`), while `has=cash_only_listing` works and the filter list counts 142 "Needs work" listings. The page uses the filter list's count. Whoever owns `homes/api` should look at the filter.
2. **The whole-feed map query with a `has=` filter and no `type=` also returned 503.** Queries by type work.
3. **scstatehouse.gov moved chapter pages** from `/code/t40c057.php` to `/code/statmast.php?title=40&chapter=57` (the old URL now redirects to a 404 after the first hop with curl). Source links on built pages that use the old form should be checked by the site audit.
4. **Hub links (lead):** /sell/ should link /sell/cash-offer/; /sell/net-proceeds/, /sell/repairs-before-selling/, /sell/inherited-house/ and /sell/rental-property/ could each link it in one sentence.
