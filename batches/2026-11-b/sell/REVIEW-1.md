# Review 1: /sell/ (fix round)

Reviewer: pass=false, score 8. Writer's fix round, 2026-11-09. Spec: `specs/sell.js` in the website working copy (`scratchpad/wt-live`). No data file, image or other page was changed.

## Findings declined or changed from the reviewer's wording

- **The wholesaling passage: the reviewer's suggested sentence is not used as written.** It said: "A person who puts your house under contract only to sell that contract to someone else is not a buyer, and South Carolina bars a brokerage from that practice". Selling the contract is assigning it. Row 20 quotes SC Code 40-57-30(44): "'Wholesaling' does not refer to the assigning or offering to assign a contractual right to purchase". The suggested sentence would say the law bars the exact thing the law leaves out. The new passage opens with what it means for the seller, as asked. It keeps the law's definition: a contract, then offering the house before owning it. The carve-out stays in the same passage, in plain words, as the verifier required. It ends with what the seller does about it: "Before you sign with any cash buyer, ask whether they will own the house." I could not ask the verifier to move the carve-out to the sources line, so it stays where VERIFY.md row 20 puts it.
- **"if the buyer agrees in writing" (Form 375) is not used.** Row 29 says only that the contract lists the addendum, "nothing about its terms". The page now says "The contract also has a page you and your buyer can add if you need to stay in your home after closing." That says both sides sign it without describing the addendum's terms.
- **The read.wall warning at 320 px (939 px in #share-of-asking) stays.** The section is three short paragraphs and an offer box. I shortened the buyer's-market line and moved 97.3 out of its opening. The measure still counts the offer box, and the reviewer judged it borderline.
- **The homes feed in the preview.** It shows only "See all homes" because the preview has no real listings or photos. This is not in the spec. Check the strip on staging before release.
- **Byline "Updated June 12, 2026".** Confirmed from `build.js`: `trueDate()` dates an uncommitted content change to the day it runs ("uncommitted content change"), and `dates` writes that day to the byline, the schema and the sitemap. I did not run `build.js dates`, as instructed. At release it will print the release day.
- **Photo kept, caption changed.** `critic.mjs` blocks a blog with no real photo, and no other lawful photo shows a listed home. The caption no longer claims what the picture cannot show. It now says only "Houses and condo towers side by side on the beach in Myrtle Beach." It sits under the sentence about Myrtle Beach-area condos and houses, so it shows the two kinds of home that sentence compares.
- **Owner questions, not answered on the page:** (1) what Chapter3 charges to list, and (2) the typical time from an accepted offer to closing, from the brokerage's files. No ledger row covers either one. The lead should add them to `templates/owner-questions.md`. That file is outside this page's scope.
- **Out of scope here:** the link from /sell/home-value/'s H3 "The time of year" to /sell/#best-month (a sibling page), and the footer's "investor-focused brokerage" line on the seller hub (a site fix).
- **Dates in the body.** "From January to September 2026" stays once in the short answer, because the period has to be said once. "On November 9, 2026 we counted" is allowed (owner, 2026-11-03), and the chart note keeps its 12 months. "On a 2026 sale" now appears once, in the cost list, because the 5.21 percent rate is for 2026 only. The FAQ copy is gone.

## What changed (spec only, then rebuilt)

Blocking:
1. Short answer: "A company that bought a house to fix up and resell paid about 70 cents for each dollar it later sold the house for." This is the reviewer's sentence, with "buys" changed to "bought" so it matches "paid".
2. "Can I sell my house and buy another at the same time?": "Your offer on the next home can say that it goes ahead only if your current home sells and closes. The state's standard contract has a box for that." Then: "The contract also has a page you and your buyer can add if you need to stay in your home after closing." The FAQ entry is rewritten the same way. Form numbers are only in the sources line: "Forms: SCR 504 (purchase depends on sale), SCR 375 (stay after closing), DOR I-295 (hold-back)."
3. Hold-back item: "If it was your main home and its profit is tax-free under federal law, nothing is held back. If you sign the state's form, the hold-back is 5.21 percent of your profit only, not of the whole price." The capital gains link now "works out the tax on your profit and names the form". FAQ: "The buyer must hold back part of the price for South Carolina income tax, unless the sale is exempt. If you sign the state's form, the buyer holds back a share of your profit only." The page no longer uses "federal exclusion", "gain affidavit" or "the gain alone".
4. Cash buyer passage: "The cash buyer we bring you buys your house and owns it. South Carolina law calls it wholesaling when someone signs a contract to buy a house, then offers the house to other buyers before owning it. A brokerage may not do that or help anyone do it. Selling the contract itself to someone else is not wholesaling under that law. Before you sign with any cash buyer, ask whether they will own the house." The struck "wholesaling is illegal" wording is not used.

Nits taken:
5. "How close to the asking price...": opens with condos, not 97.3 again: "Condos sold for 96.0 percent of their last asking price on average this year, a little under houses. Both shares are of the last asking price, after any price cuts." The buyer's-market line is now "Is it a buyer's market? See our guide to buying in Myrtle Beach."
6. Repetition. "About 4 months" now appears three times (tile, short answer, comparison table). It is gone from the "Should I list..." paragraph, the "How long" section and the FAQ. "70 cents" now appears three times (short answer, table, the cash section); it is gone from the FAQ. The five FAQ answers are shorter and say their section's point in other words.
7. Offers no longer share words. The mid button "Get both numbers for my house" is now "Show me the listed and cash prices". The form intro is now "A licensed agent calls you to talk through your home and your timing." The top bar keeps "Get both numbers for your home".
8. Meta description: "in 2026" is now "Jan. to Sept. 2026" (158 characters, built from the spec's guarded period).
9. "His numbers, not a promise." is now "One sale, not a promise."
10. Fees item, in plainer words: "Most of it is the state's fee on the deed. The rest is the county's charge to record the deed and the release of your paid-off mortgage. On the state's standard contract, the seller pays these." This matches /sell/net-proceeds/ (deed stamps $1,295, recording $15, mortgage release $10; NP 4) without adding a number.
11. Photo credits: the generic second line "Chapter3 Realty resized these photos and cropped some of them." is removed in the spec. The photo's own line already says "Chapter3 Realty resized the photo and cut 1x1, 4x3 and 16x9 crops." The spec stops the build if the helper's wording changes. `tools/photos.js` is unchanged.

No new fact, so no VERIFIED-BY-FIXER row. Every changed sentence restates row 19, 20, 23 (NP 4), 26, 28 or 29, using that row's limits.

## Gates (final build)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/sell.js` | wrote chapter3realty/sell/index.html |
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /sell/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100). One draft scored P10 at 75% for "law lets"; that sentence was reworded. |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on /sell/. The 4 sitewide hits are the same as before (from-massachusetts, from-virginia, llms-full.txt). |
| `house-claims.js` | 0 |
| `struck-check.js` sell-struck and sell-net-proceeds-struck | no struck wording |
| `repeat-check.js --strict`, `structure-check.js --strict` | pass |
| `inbound.js --only /sell/` | 12 referring pages |
| `node build.js check` | no FAIL outside /invest/airbnb-income/ (another agent's page) |
| `node build.js audit` | /sell/: only the two date lines that `build.js dates` fixes at release, and the A20 note (no Tim Nash quote may be written). The sources block first came out at 92 words; it was trimmed to under 90. |
| `critic.mjs http://127.0.0.1:8871 /sell/ --widths 320,390,1440` | 0 blocking. 1 warning at 320 px (read.wall, 939 px in #share-of-asking, see above). |
| Reading pass | No sentence over 28 words except the consent text, which must stay word for word. No em or en dash. No sentence opens with "So" or "Here is". Devin is named only in the byline. No rate, no payment. |

Preview: port 8871 (`tools/preview.mjs`, pid 9420, already running). It serves the working copy's `chapter3realty/` through a symlink, so it shows this build.

Shots and slices, read at full size (the top, the cash section, the share-of-asking section, the cost list, the sell-and-buy section, the sources and the credits):
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/sell/shots/sell-320.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/sell/shots/sell-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/sell/shots/sell-1440.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/sell/critic.json`
- Slices: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/sell/slices/`

Copies of the spec and page from before this round: `scratchpad/sell.js.round0` and `scratchpad/sell-index.round0.html`.
