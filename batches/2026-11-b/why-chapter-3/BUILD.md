# Build: /why-chapter-3/ (batch 2026-11-b, Lane U, second rewrite)

Built 2026-11-12 from PLAN.md, with VERIFIED and CORRECTED rows only, in the verifier's wording (VERIFY.md). The owner on the first rewrite: "seems alot more like a big disclosure rather than selling ourselves ... it really glossed over our tools". This build sells the tools and the people. The law sections, the check table, the flood chart, the Conway photo and the lender block are gone. The license facts are one small line near the end.

The page describes the **live** AI search, as the verifier asks (VERIFY.md, top): "describe the home you want", the AI reads the listing descriptions for every visitor, the best fits move up, no photo row and no reasons.

Spec: website working copy `specs/why-chapter-3.js`, author "devin" (byline Devin Day, reviewed by Tim Nash; Devin is not named in the copy). URL kept. The first build of 2026-11-10 is in git history.

## Outline

- **Title (55):** Why Chapter3 Realty: AI Home Search on the Grand Strand. "AI home search" is a search no page on the site owns. "Myrtle Beach real estate team" stays with /about/, "guides & tools" with /guides/.
- **Description (139):** Search Grand Strand homes in your own words with Chapter3 AI, see the best fits first, run the numbers free, and meet the people behind it.
- **H1:** Why choose Chapter3 Realty on the Grand Strand? (mkpage refuses an H1 with no place, so "Why Chapter3 Realty?" became this.) **Italic line:** Describe the home you want. Our AI finds it, and our agents check it before you offer.
- **Short answer:** Chapter3 AI builds the search from your own words and puts the best fits first (rows 1, 2, 5). Tim Nash, 30+ years (row 22); on a home you are serious about, the HOA papers, a rental analysis and an insurance quote before you offer (rows 29, 31).
- **Top offer bar:** "Tell us the home you want. We find it and check it before you offer." Button: Find me a home -> /contact/.
- **Edge feed under the opening:** the lead's (`idx-lib/feeds.js`), not this page's. See note 3.

1. **Can you search for homes with AI?** Yes, in your own words (row 1, corrected). **Visual 1, "Type it the way you would say it":** two demo cards from `tools.json`: the sentence in a search-box shape, the filters our search read as chips, the count ("1,266 condos for sale matched", "7 houses for sale matched"), each a link that runs the search on /homes/map/?q= (row 3). The spec drops a demo whose count is 0 or that reads fewer than 3 filters. Then: it reads what you want and why, more than 700 MLS features, one line on what it understood (rows 2, 4). **Visual 2, "More than 700 things you can ask for":** the seven feature groups as bars, one SVG drawn twice (phone and wide) so the text stays at reading size (row 4). Then "Keep talking to it" and "Never about who you are" (row 2).
2. **Can you see which homes fit before you click?** The AI reads the full description and details, the homes on screen first; best fits move to the top; ruled-out homes leave; no sign-up (row 5, corrected, in the verifier's words). Plain list: photos right on the map, 2D or 3D (row 7); homes near your daily drive (row 7); ask about any home, with the limit beside it (rows 6, 8); live homes on our guides, 131 of 141 pages, up to 10 homes, photo, price, firm, scrolls by itself (rows 9, 10, corrected). **Homes strip:** `str-garden-city-beach-condos`, "Best Airbnb opportunities in Garden City Beach"; its fallback is the USGS Garden City Beach photo (public domain), shown only until the strip has homes. **Offer:** "Tell us what you want in a home." Button: Send me homes.
3. **Which numbers can you run yourself, for free?** The rental analyzer by rent, costs, cash flow, return and permits only (row 11), linked to /invest/run-the-numbers/ (the framed analyzer) rather than /invest/long-term-rental/, whose title leads with DSCR. **Visual 3:** the seven other calculators as a two-column table in the card, each a link with one line in the tool's own words; it folds to one column under 560 px (row 12). H3 "Where do our guides get their numbers?": 13,194 home sales at the county's Register of Deeds, October 2025 to September 2026 (row 13, read from the home-value guide's `findings.json`); 47 oceanfront buildings, the fee for 45, sale prices for 42 (row 14, corrected, read from the condo guide's `table.json`); link to /guides/.
4. **Who will you work with at Chapter3?** Tim's 30+ years and three generations (row 22); Fred Nash Boulevard by the airport, named for his father (row 23), linked to the county's road page. The idea of Tim's published words in the firm's voice, no quote marks (row 24 allows it): "This is a small town to us. We want to run into you at the grocery store ..." Then row 26: we build these tools ourselves; we find the home for you. Link: meet the team.
5. **What do you get when you work with Chapter3?** Free consultations, rental analyses and pricing reviews; you pay only under a written agreement you choose to sign (row 28). Plain list: an insurance quote before you offer (row 31); only communities that let you rent (row 30); the papers behind the home (row 29); no old HOA debt at closing (row 32). **Offer:** "Send me homes with the numbers to prove it." (row 25). Button: Send me the homes and numbers. **License line**, small type, no heading: 28849, Tim Nash 43182, the state's Licensee Lookup (rows 33 to 35).

- **FAQ (4):** Does Chapter3 have an AI home search? Do you have to sign up to use the AI search? Does it cost anything to talk with Chapter3? Is Chapter3 Realty licensed in South Carolina? Each repeats a page answer in other words.
- **End band:** "Tell us the home you want." Phone and hours (row 36). Button: Tell us what you want -> /contact/.
- **Sources:** Chapter3 home search, Licensee Lookup, Fred Nash Boulevard (county road page), Register of Deeds (county page). The note gives the count day. Photo credit: USGS, public domain.

Words: 1,077 of prose (score.js). Every request button links to /contact/; the site opens the short pop-up.

Not on the page, on purpose:
- "only", "first" or "best" about the search (rows 15 to 21; note 1);
- the phrase "dynamic preview photos" as a label (note 2);
- the flood count (row 27). On a page that sells our search, "a flood-zone filter finds about 1 in 5" reads as a mark against it, and /buyers/undisclosed-flooding/ owns that finding;
- any rate, payment, down payment or value; the analyzer's loan inputs and its "Estimated value" line;
- a quote for Tim, a story not in the story bank, Devin's name, the street number, a reply-time promise, "every" about a service.

## Files (website working copy)

- Spec: `specs/why-chapter-3.js`
- Page: `chapter3realty/why-chapter-3/index.html` (`node tools/mkpage.js specs/why-chapter-3.js`)
- Data: `data/2026-11-b/why-chapter-3/tools.json`, re-pulled on build day (2026-11-12T03:24Z) with `scripts/pull_tools.mjs`. Every count matched the verified file (8,858; 753 in 7 groups; 1,266 and 7; 141 and 131). The earlier pull is saved at `scratchpad/tools-2026-11-12T0256.json`. Also read: `data/2026-10-d/sell-home-value/findings.json` (row 13) and `data/2026-11-b/invest-condo-buildings/table.json` (row 14).
- Photo record: `data/2026-11-b/why-chapter-3/photos.json`, now the Garden City Beach record copied from `data/2026-11-b/invest-strategies/photos.json` (USGS oblique aerial, 2011, public domain). The image file is the existing `images/2026-11-a/invest-condos/garden-city-condos-2011.webp`.
- Share card: `chapter3realty/images/2026-11-b/why-chapter-3/share.jpg`, remade with `tools/ogcard.js` from the new H1 and moved out of `og/`.

## Gates

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /why-chapter-3/` | 100/100 (SEO, AEO, Human, Trust 100), 1,077 words. First run 87: no topic word or place in the title, no table, no picture, one primary source, one first-hand sentence, one sentence over 40 words. Each fixed in the page, not around it. |
| `node tools/claims-scan.js` | 0 findings sitewide |
| `node tools/facts-check.js` | 0 on this page. Sitewide, the same 4 known wrong sentences on 3 other pages (SC standard deduction: from-massachusetts, from-virginia, llms-full.txt). |
| `node tools/house-claims.js` | 0 sentences to scope or source |
| `node tools/struck-check.js --batch batches/2026-11-b --strict` | why-chapter-3 (25 patterns): no struck wording |
| `node tools/critic.mjs http://localhost:8872 /why-chapter-3/ --widths 390,1024,1440` | 0 blocking, 0 warning at every width. The first run blocked at 1440 on "a blog with no real photo"; the strip's Garden City Beach fallback photo fixed it. |
| `node build.js check` | OK. The one WARN is sitewide (index.html inline script). |
| `node build.js audit` | The only FAILs are the two mkpage date lines (dateModified and the visible Updated date against the sitemap lastmod); `node build.js dates` sets them. One "~" note: no quote from a named licensee (none is written; never a quote for Tim). |
| Own check of `<main>` | No sentence over 28 words, no em dash, no "So" or "Here is" opener; Devin only in the byline and author note. |

Not run, as briefed: `node build.js stitch`, `dates`, `llmsfull`. Nothing was deployed, committed or pushed.

## Screenshots

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/why-chapter-3/shots/`: `why-chapter-3-390.png`, `why-chapter-3-1024.png`, `why-chapter-3-1440.png`. Critic JSON: `.../rb1/why-chapter-3/critic.json`. Slices read at full size: `.../rb1/why-chapter-3/slices/`. In the preview the strip and the edge feed stay empty (no live listings), so the fallback photo shows.

What I changed after looking:
- The phone chart labels read at about 14 px. The phone drawing is narrower now, so they read at about 16 px.
- The calculators table was cramped at 390 px. It now folds under 560 px: the name, then its line.
- "what units sold for at 42" read badly. It now reads "For 45 it gives the monthly HOA fee, and for 42 what units sold for."
- The guides answer began with a fragment. It now begins "We count the county's own records ourselves."
- The chart caption repeated the day. It now says the count is from the same day as the searches above, so the body gives the day once.

## Notes for the lead

1. **"Only" is not printed.** The owner says Chapter3 has "the only Ai powered real estate search tool with dynamic preview photos". The check (facts rows 15 to 21) found natural-language search on Zillow, Realtor.com and BoldTrail broker sites, and one Myrtle Beach brokerage site (CENTURY 21 Stopper & Associates, Real Geeks) with an AI search setting on. Most other local sites could not be read by a script. The page says what ours does, with no comparison. To revisit, a person with a browser tries the search on each local site in row 21.
2. **"Dynamic preview photos": ask the owner what he means.** The photo-card row the researcher read it as was removed from the live site on 2026-11-07 (VERIFY row 5). The page shows the candidates without his label: "Photos right on the map" (a dot's photo card, row 7) and the live rows of homes that scroll by themselves (row 9). If he means something else, it is a one-line change in section 2.
3. **Feed head (idx-lib, not mine to edit).** `idx-lib/feeds.js` line 384 gives `/why-chapter-3/` the NEWEST feed with the head "Just listed on the Grand Strand. Pick one, and we check it first", from the first rewrite. Proposed: "Just listed on the Grand Strand. Tell our AI what you want" (NEWEST is homes listed in the last 21 days; the feed carries the AI box).
4. **Place strip.** The page uses the existing place `str-garden-city-beach-condos`. Add `/why-chapter-3/` to its `pages` list in `idx-lib/places.js` (a record only; edge.js does not read it). No new place or feed is needed.
5. **Merge the live branch before any deploy** (VERIFY.md, top). The working copy's `idx-lib` and `functions/` are older than the live AI search. Deployed as they are, they would roll it back to the 2026-11-05 version. After the merge, re-run `scripts/pull_tools.mjs` and rebuild: the live branch had 146 sitemap pages on 2026-11-12, so "131 of our 141 pages" may change (the spec reads it from the file).
6. **The rental analyzer (row 11).** /invest/long-term-rental/ still asks for financing terms, shows "Estimated value", and its title leads with DSCR. The page links to /invest/run-the-numbers/ instead and describes the analyzer by rent, costs, cash flow, return and permits. The analyzer itself is the lead's call, after the owner's 2026-11-12 message on financing.
7. **Sitewide footer.** The footer still says "DSCR analysis" in its brand line and lists "DSCR Loans" under Strategies. After the owner's message on financing, that is worth a look (`partials/`, not mine).
8. **Condo guide description.** It says 45 buildings; the guide covers 47 (VERIFY row 14).
9. **Photo partner.** The best picture for the people section is our own photo of the Fred Nash Boulevard road sign by the airport. It is worth adding to the next shot list (`templates/photo-request-email.md`). The page now has no photo of its own beyond the strip's fallback. On the live site, once the strip fills, that photo hides. The critic would then report "a blog with no real photo" at 1440 px, and the sign photo would fix it.
10. **Owner questions.** The five of 2026-11-10 stay open. The page says nothing that depends on them.
