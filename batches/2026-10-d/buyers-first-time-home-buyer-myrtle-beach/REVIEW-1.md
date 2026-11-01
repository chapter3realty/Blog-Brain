# Review round 1: what changed, finding by finding

Page /buyers/first-time-home-buyer-myrtle-beach/, spec `specs/first-time-home-buyer.js` (version 2). Fixer, 2026-11-01. New facts are facts.md rows 42 to 47, marked VERIFIED-BY-FIXER for the lead to re-check.

## Critic (pass=false, 5)

Blocking:
1. "$270,000, the middle house listed now". Fixed. The worked example is now "What can come off your cash on a $270,000 house", with the note "$270,000 is the middle of the houses listed now in Horry County at or under $300,000." The step 8 line is gone (the saving is said once, in the yearly cost section).
2. "plan to the dollar". Fixed: "Property tax is the yearly cost you can work out before you buy." A note under the table gives row 33's limits (county value, special districts and stormwater fee left out).
3. Flood zone "AE or VE" left out A. Fixed by removing the codes (the owner bans them): "A lender must require flood insurance when the building is in a high-risk flood zone. We look that up for every home you offer on."
4. "Most buyers here qualify for more than they think." Cut. The section opens "An FHA loan has no first-time rule, and neither does SC Housing's main program in Horry County."
5. End CTA text unreadable. Fixed in the spec's CSS: the band whose heading is an h2 gets its dark panel back. Cause and shared fix in NEEDS.md item 4 (the feed's MLS notice follows the band, so glass.js's `:not(:last-child)` rule fires). Checked in the 390 px shot.
6. 320 px sideways scroll from the search bar. Fixed with a scoped workaround; NEEDS.md item 5 has the shared fix. critic.mjs: 0 blocking at 320.
7. 1024 px header. Fixed with a scoped workaround; NEEDS.md item 6. critic.mjs: 0 blocking at 1024.

Nits taken: hero chip now "Often no down payment / on VA and USDA loans"; the SC Housing repayment clause is in the cash card and the FAQ; the "buy while you live in another state" line and the "No" FAQ are cut (the FAQ is now "How soon do I have to move in on an FHA loan?"); electric and water are two rows; "Once the value changed" is "In one case, the value changed"; "On one, the seller" is "On an FHA loan, the seller"; numbers per 100 words 4.7 to 3.7 (the 24-bar chart is six stacked bars with shares only, the ZIP chart is cut, the medians sentence is cut); jargon defined or cut ("conventional loan" defined, "reconsideration of value" and "comparable sales" now "gather recent sales of similar homes and ask for the value to be looked at again", "appraised value" kept with the appraisal step, "trust account" kept with the broker condition from row 28); the "what buyers expect" openers are cut (the H1 the owner liked stays); VA, USDA, HUD, FHA and SC Housing are named in full once; every block is 760 px wide at most so the right edges line up at 1440; the qualify grid has 6 cards; hero chips are shorter at 320.
Not changed: the photo. It is still the stand-in (Main Street, Conway), now inside the Amber Bluff entry with a caption about why it matters ("about a seven-minute drive from Amber Bluff"). The shot list is still with the photo partner.

## Reader (pass=false, 7)

1. "How much cash, never told." The short answer and the cash section now say what the cash is made of: the down payment, the closing costs (the fees to make the loan and close, plus prepaid items) and the earnest money, and what lowers each. **A dollar figure or percent for the down payment is not on the page, on purpose:** PLAYBOOK A17 bans a down payment amount or percentage on every /buyers/ page, and `build.js audit` errors on one. The page says the lender gives that figure with the pre-approval. A typical closing cost total is also not on the page: `/buyers/closing-costs/` has "2 to 5 percent" but no primary source was found for it (facts.md "Not verified"); the calculator link stays.
2. FHA minimum down payment. Same rule (A17). The credit card now says it in words: "At 580 or more, FHA allows its smallest down payment; below 580 you put more down."
3. The $16,200 tile. Now "Closing costs the seller pays ... The seller can cover only your actual closing costs, and has to agree to it in your offer" (row 43, HUD).
4. Deed fee inside the cash example. Moved out of the example to one sentence: it is the seller's, except on a government or court deed such as a HUD home.
5. SC Housing income limit. Given: about $115,000 for one or two people and about $134,000 for three or more, price up to $450,000 (row 18). The limits are rounded on the page (scorer P1); row 18 has the exact $114,960 and $134,120. USDA's own income limit is not given: rd.usda.gov returned 403 (row 15 note), so no row.
6. "Our map" for USDA. Fixed: the card says about 6 in 10 houses listed at or under $450,000 are inside USDA's area, nearly all with a Conway, Loris, Aynor or Longs address. "These are the same towns inside USDA's area" is cut.
7. Usual earnest money. Not on the page: no source. Proposed as an owner question (PROPOSED.md 5). The step now says what happens to it.
8. Condo HOA fee range and insurance figure. Not on the page: no source. The CRM pull has no fee field (PROPOSED.md 6). For insurance, the page now says plainly that no public source gives a fair average for a starter house here, and that the quote we get is the real figure (PROPOSED.md 4).
9. "4 percent" meaning. Fixed: "The 4 percent rate means your home is taxed on 4 percent of its value. Any home you do not file for is taxed on 6 percent."
Nits taken: chart is short now; four numbers in two sentences cut; terms explained (above; "reserve study" and "bylaws" are now "the rules ... the money saved for repairs"); the termite step says what the letter tells you; the 29579 note is cut with the ZIP chart; the wind line is "In Myrtle Beach, homes east of the U.S. 17 Bypass"; the deadline is "by January 15 after the year you move in" (row 46); FHA mortgage insurance has its own card (row 42). The "Updated June 12, 2026" byline is for the lead's dates run (audit shows it as the only remaining FAIL for this page). The AI search box and feed are shared site chrome above the short answer; not changed.

## Owner's eye (pass=false, 7)

1. Opening says it three times; 576 five times. The dek has no numbers now ("What your cash to buy is made of, what lowers it, and the neighborhoods near Conway and Longs where starter houses sell."; audit wants a place name). The hero tiles say three different things (VA and USDA, seller-paid closing costs, SC Housing). The short answer is one paragraph about the cash. 576 appears once, in the "For sale now" tile.
2. Repetition. "3 bedrooms and about 1,470 square feet": once (tile). USDA "can cover the full price": twice (card, FAQ). SC Housing "under its limits": the tile and the FAQ. The insurance quote: the check list, the insurance paragraph, and the table row points to it; the mid-page CTA and step 2 no longer repeat the checks ("run the checks above"). The "as the comparison above shows" pointer is cut.
3. Starter houses answer was a town name. The section now names four neighborhoods from the deeds with the road each is off and why to live there (rows 44 and 45): The Townes at Amber Bluff (Conway, off Savannah Bluff Road, 63 new townhomes under $300,000), Indigo Grove (off SC 90 near Longs, 44), Birchwood (off SC 905, 25), Myrtle Beach Golf and Yacht Club (33 resale). Seven more names follow (Cypress Ridge, Tupelo Park, Warner Crossing, Andalusia, Kingston Oaks, Meadows Edge, Spring Grove). Each entry links the owner page's anchor.
4. SC Housing limits withheld. Given (reader 5).
5. Insurance figure. Not possible from a source (reader 8; PROPOSED.md 4). I think the owner's finding is right in spirit, but a made-up or unsourced range would break the ledger rule; an owner answer would fix it.
6. Condo/house field list. Rewritten as two short paragraphs each, about what it means for the buyer (the loan, the flood insurance, who the neighbors are).
7. Jargon. Flood zone codes, "bylaws", "reserve study", "reconsideration of value" are gone. Steps say what happens and what we do: the inspection step says what the inspector and the termite letter do; the earnest money step drops the 48 hours and the weekends rule.
8. Worked example. Two tiles, both money off the buyer's cash; the deed fee and the "Credited" tile are gone. The hero tile "Up to $16,200 seller can pay on $270,000" is replaced.
9. Too many exact numbers. The kind-of-home chart is six stacked bars with rounded shares and no counts; the ZIP table is cut; condo count is "About 1,700"; FHA limit "about $541,000".
10. Filler. The rate compliance sentence, the reassurance openers and "Eight steps, from the lender's letter to the tax form" are cut. The utility bill note now sits under the table it explains.
11. Pictures. The photo now sits in the Amber Bluff entry with a reason in its caption. No starter-house photo yet (shot list pending). The top feed: in the preview it fell back to "See all homes" because the sample homes have no FHA flag; the live URL's feed fills ("Under $300,000, and the seller takes FHA", seven listing links on 2026-11-01). Not this page's code.
12. 1024 px layout. Fixed (critic 7).
Nits taken: steps intro cut; wind line simplified; "On one" fixed. Not taken: the word "guide" still appears 11 times in <main>. The links stay, because each now follows an answer given on this page (the limits, the neighborhoods, the tax figure) instead of standing in for it.

## Findings I think are wrong or cannot be met

- Reader 1 and 2 (a down payment dollar figure or FHA percentage): banned by PLAYBOOK A17 on /buyers/ pages, which wins over a reviewer. Answered in words instead.
- Reader 8 and owner 5 (insurance and HOA figures): no verifiable source; proposed as owner questions and a data pull.
- struck-check: `no-hoa-homes-struck.json` row 69 fires on "a fifth of an acre" in the house tile. False hit: that struck row is about North Myrtle Beach lot sizes on the no-HOA page; this page's 0.20 acre is row 5 (CRM listings, verified). The second hit was removed with the condo/house rewrite.

## Gates after the rebuild

- score.js: 99/100 (SEO 100, AEO 100, Human 99, Trust 100). Open: P2 3.7 numbers per 100 words (target 3.5); P6 "homestead exemption" (kept on purpose: the paragraph explains that search term).
- claims-scan: 0 findings. facts-check: no hits on this page. house-claims: 0. struck-check (this page's list): no struck wording.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings. Shots: `wf2/buyers-first-time-home-buyer-myrtle-beach/r1/shots/` and element shots in `r1/`.
- build.js check: OK. build.js audit: the only FAILs for this page are the two date mismatches the lead's dates run sets.
