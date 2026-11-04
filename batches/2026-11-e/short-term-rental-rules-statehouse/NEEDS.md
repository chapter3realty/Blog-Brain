# Needs from the lead: page 6, /invest/short-term-rental-rules-statehouse/

1. **Verify NEW-1 to NEW-4** (NEW-ROWS.md) with an agent that did not read them. Only the vote section rests on them.
2. **build.js audit, co-author byline.** The owner-name check strips only "By Devin Day, Operations Officer". The co-author byline from mkpage ("By Devin Day, Chief Operating Officer, and Abdulla Hijazi ...") trips "owner name in page copy outside the byline" on every page in this batch. The name is in the byline only. build.js needs to accept the co-author byline.
3. **Sitemap, llms.txt, inbound links.** Audit fails "missing from sitemap.xml" and warns "not listed in llms.txt". score S8: one page links here. Please link from /invest/str-rules/, /invest/accommodations-tax/ and page 1, and run the sitemap and dates steps.
4. **Share card.** I ran `node tools/ogcard.js <web>/chapter3realty /invest/short-term-rental-rules-statehouse/`, which wrote `chapter3realty/og/invest-short-term-rental-rules-statehouse.jpg` (new file, used only by this page). It is outside my edit list. Keep it or drop it.
5. **/invest/str-rules/ Surfside claims.** That page says Surfside Beach allows rentals under 30 days only in R3 and C3. This batch's ledger could not confirm Surfside's rules ("third-party pages conflict"). This page links to str-rules and states no Surfside zones. Worth a check on str-rules.
6. **Photo partner shot list** (photos.md item 2): a quiet single-family street in an R-zoned Myrtle Beach neighborhood, and an RMV block, for the zone contrast. The page now has one Commons photo of oceanfront towers (Loadmaster, CC BY-SA 3.0, cropped).
7. **build.js check** fails on /invest/rental-property-tax-cut/ (footer differs from the partial). That is page 4, not this page.
