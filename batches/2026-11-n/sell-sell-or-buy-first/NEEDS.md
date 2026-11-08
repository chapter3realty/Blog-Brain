# Needs from the lead: /sell/sell-or-buy-first/

1. **Hub links.** Add /sell/sell-or-buy-first/ to the /sell/ hub list and to `llms.txt`. The hub's "Contingent Closing Coordination" paragraph (in the retirement sellers block) can link here in one sentence ("If your next purchase is contingent on this sale ...").
2. **Sibling links in this batch.** /sell/best-time-to-sell/ already plans a link here ("your own dates: a purchase"). /sell/cash-offer/ and /buyers/new-construction/builders/ may link here in one sentence each. This page links to /sell/best-time-to-sell/ (the month), /sell/cash-offer/ (speed), /sell/net-proceeds/, /sell/capital-gains/, /sell/rental-property/, /buyers/property-taxes/, /buyers/new-construction/.
3. **One timing value on two pages.** /sell/best-time-to-sell/ gives Zillow's days to contract and to close by calendar month for 2018 to 2025 (its rows 7, 8). This page gives the last 12 months (row 8: about 8 weeks plus about 5 weeks, about 3 months). Both come from the same files. Keep "about 5 weeks to close" worded the same on both pages; see PROPOSED.md for a registry row.
4. **Components.** The chooser cards reuse fsbo.js's chooser style (one card style, no box inside a box). Chart A is a 100 percent stacked bar chart; if `_kit.js` has no stacked-bar helper, the spec draws it as inline SVG from `chart-moves.json`. Drawing B is an inline SVG timeline built from the same file. No shared CSS change is planned.
5. **The Affiliated Business Arrangement Disclosure.** The AFBA text lives as a constant inside `specs/programs.js`. This spec copies it. If the lead wants one shared copy, that is a `_kit.js` change for the lead.
6. **Homes row.** No special feed. The site's default row is fine.

## After the build (writer, 2026-11-08)

7. **Sitemap and llms.txt.** `build.js audit` errors on "/sell/sell-or-buy-first/ missing from sitemap.xml" and warns "not listed in llms.txt". Both are shared files; the lead adds the page.
8. **Links in.** score.js S8: only /sell/best-time-to-sell/ links here from body copy. The /sell/ hub sentence in item 1 would make two.
9. **No lender named.** The page offers "a loan officer at our preferred lender" instead of BrickWood, so no AFBA block was copied (item 5 is moot).
10. **Contact links.** Every offer goes to plain `/contact/`. A query string (`/contact/?topic=...`) hides the box from the audit's mid-read CTA check, which matches `href="/contact/"` exactly.
