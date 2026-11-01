# Review round 1: /invest/strategies/dst/, what the fixer changed

Three reviewers (critic 7, reader 7, owner's eye 7) failed version 1. Every change is in `specs/dst.js` or in files under this batch folder, `data/2026-10-d/invest-strategies-dst/` and `images/2026-10-d/invest-strategies-dst/`. The built page was never edited by hand. Version 1 of the spec and page: `wf2/invest-strategies-dst/fix1/dst.v1.js` and `index.v1.html`.

## Gates after the fix

- `score.js`: 100/100 (was 99). P1 now passes: prose says "about $39,000" and "about $23,000"; the chart and table use the same rounded figures.
- `claims-scan.js`, `facts-check.js`, `house-claims.js`: no hits on this page. `struck-check.js`: no struck wording.
- `build.js check`: OK. `build.js audit`: two FAILs left, both the date (byline "Updated July 12, 2026" and dateModified against the sitemap). The lead's `node build.js dates` sets them (NEEDS 6).
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings (was 7 blocking, 1 warning). Shots: `wf2/invest-strategies-dst/r1shots/`; section crops at 320 and 1440: `wf2/invest-strategies-dst/fix1/`. I looked at each.
- `photos.js check`: all photo records pass.

## New facts

Three rows added to `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check:
- Row 28: FINRA's check-registration page (who must be registered, BrokerCheck).
- Row 29: 26 U.S.C. 1031(b) (cash kept out of the exchange is taxed up to the gain).
- Row 30: the map points and "none of the 11 parcels is a house or condo", computed from the row 25 data file by `dst_parcel_points.py`.

The payout and the loss sentences use no new source. They follow from verified rows: the trust pays out "all available cash less reserves" (row 3); it cannot take new money or sign new tenants (row 3); commissions are paid out of the money raised (rows 16 and 24). The page states no return, no payout amount and no hold period.

## Critic

| Finding | What I did |
|---|---|
| Blocking: hero tiles overlap at 320 | Below 480 px the tiles are 2 x 2, with `min-width:0` and a 1.4 line height. Critic at 320 and 390: clean. |
| Blocking: search box 29 percent cut off at 320, page 364 px wide | Shared chrome. Logged in NEEDS 8. Worked around in the spec's CSS under `max-width:379px` (the textarea shrinks). Critic at 320: clean. |
| Blocking: header 1029 px wide at 1024 | Shared chrome. Logged in NEEDS 7. Worked around in the spec's CSS between 1000 and 1100 px (smaller nav gaps). Critic at 1024: clean. |
| Blocking: "10 or more" against "the ten" | The tile reads "10" from the data file. The sentence reads "Six of the 10 trusts bought since November 2024." |
| Blocking: "works only real property for real property" | Now "A 1031 exchange trades real property only for other real property." |
| Blocking: chart 21 against text 44 | The first bar is now labelled "$1,000" (all 21 asked exactly $1,000; a `must()` check holds it). The text says only "Most asked $100,000 or more." The 44 is gone. |
| Feed with 0 homes, off-topic | Site chrome. NEEDS 10 (and item 2). |
| "We sell the rental. Chapter3 sells ..." said twice | One sentence: "Chapter3 sells the rental." |
| Limit 5 repeats itself | Limit 5 is cut. Only three limits remain (owner's eye). |
| "usually comes up" | Gone. The story now sits in "What we do", introduced as "The sale is the part we do. One of our sales, for an owner who was done managing from far away:" |
| Pros card 315 px shorter than Cons | Four short items each, and the cards stretch to one height. |
| "On this page" one long column | Two columns from 760 px; ten links instead of eleven. |
| #backup wall of text at 320 | The cash and mortgage rules are a two-item list. |
| Tile "10 or / more" wraps | Fixed with the tile. |
| Alt text undercounts | photos.json alt: "Three mid-rise condo buildings and three condo towers ...". The `what` field is corrected too. |
| Duplicate credit line | Stripped in the spec. photos.js adds it; NEEDS 9. |
| SEO: H2s name no place | Three H2s now name the Grand Strand: the three choices, "Do DSTs own property on the Grand Strand?" and "What does Chapter3 do when you sell a Grand Strand rental for a DST?". |
| Byline date | The lead's dates pass. |
| New warning I caused: 913 px wall in the cost section | The mid-page offer box sits after the dollar paragraph, and the FINRA paragraph is a callout. |

## Reader

| Finding | What I did |
|---|---|
| Never says the money can be lost | New H2 "What do you give up in a DST, and can you lose money?", with H3s "What does a DST pay you?" and "Can you get back less than you put in?": the payout falls with the rent or a repair; commissions and fees come out first, so the building has to gain value before your share is worth what you paid; a sale below the trust's price returns less still. Limit 2 says a building with one tenant depends on that tenant's rent. |
| What a DST pays against rent | An "Income" row in the three-choices table ("The rent, less your costs" against "A share of leftover cash; not fixed"), the H3 above, and an FAQ "How much does a DST pay?". No figure: none has a primary source (facts.md, Not verified 8). |
| Who sells it and how to check them | "Anyone who sells you a DST share must be registered with FINRA, the SEC or the state ... FINRA's free BrokerCheck lists each securities firm and broker, with their licenses and record." (row 28). This is a fact about who may sell, not an errand. We cannot check a firm the reader has not named, and Chapter3 does not advise on securities. |
| "Commission About 6%" reads as the agent's fee; "6 percent" used twice | Tile label "DST sales commission". The chart note says "$24,000 of selling costs" (not "6 percent") and "The DST's commissions come on top of those selling costs." The chart bar reads "DST sales commissions on the same money". |
| "Buyers / Accredited" confused a seller | Tile now "Who can buy: $1M+ net worth or $200K+ income". |
| The listing box above the answer | Site chrome, NEEDS 10. |
| 10 against "the ten" | Fixed (critic row). |
| Too many numbers, jargon (REIT, sponsor, basis, OP Units, Rule 144, 506(c), nonrecourse, undivided share, the middle half) | Cut or said plainly. REIT is spelled out. Sponsor is defined in the short answer. "basis" becomes "Your heirs generally take it at its value on the date of death". OP Units become "units in its partnership". Rule 144 becomes "the SEC's conditions" (linked). 506(c) becomes "the seller must also check that you qualify" (linked). The nonrecourse and undivided-share sentences are gone. The out-of-state owner counts and their chart are gone. The commission spread (5 to 8.4 percent, 20 of 144) is gone. |
| "higher-income seller" not explained | The chart note gives the thresholds ($200,000, or $250,000 married filing jointly) and names the 3.8 percent tax on investment income (row 22). |
| "the securities regulator" unnamed | "the securities regulator now called FINRA". |
| How long offerings hold | No primary source gives a usual hold (facts.md, Not verified 1). The page says so in one sentence: "We found no public record of how long DSTs usually hold." The ruling's 10-year example stays, as an example. |
| Part in a DST, the rest as cash | The #backup list: "You can put part of the money into the exchange and keep the rest. The cash you keep is taxed, up to the amount of your gain." (row 29). |
| Limit 5 repeats | Cut. |

## Owner's eye

| Finding | What I did |
|---|---|
| "road" metaphors, "live by", "cash waits", "so the dates hold" | All gone. TOC "Three choices"; table "Three choices for one rental sale"; "so your exchanges stop there". A sweep of the built page finds no "road". |
| Too technical | The seven limits are now three: no new money, no refinancing or new tenant, no say in when it sells. Each says what it means for the seller. The undivided-share, Delaware-corporation, Rule 506(c) count, OP Units, restricted securities and nonrecourse sentences are cut or put in one plain line. |
| Too many exact numbers; two Form D charts | One Form D chart is left (minimums). The commission chart, the commission spread, the minimum counts in prose and the out-of-state counts and chart are gone. Prose dollar amounts are rounded. P2 is 2.6 numbers per 100 words (was 3.8). |
| Repetition of 6 percent, locked in, 45 and 180 | "About 6%" is now in the tile, the cost section's first line and the dollar chart only. The table cell, the cons list and the FAQ no longer say it. "Locked in" is in the short answer and the cons list. The FAQ "Can I sell my DST shares early?" is cut. 45 and 180 days are in the steps and the mid-page offer. The #backup section keeps day 45 only, which is its point. |
| Story in the wrong place, no tension, sends the reader away | The story is in "What does Chapter3 do", the last section. It now tells the hard part from stories.json, as published on /sell/rental-property/: cash flow over $1,200 a month against about half for the next owner, the tenant buyout held as the fallback, the agent marketing to investors who accept modest cash flow in an appreciating area, a cash buyer in 13 days. No detail is added. The link away is gone. |
| Investor page must sell Chapter3 locally, step by step | The five steps moved into "What we do", each with a line for our agent: we price the rental and time the listing; we choose a buyer who can close on the date and give the intermediary and closing attorney the closing figures; we find and show backup rentals here before day 45; we handle that purchase so it closes by day 180; we find the next rental here when the trust sells. |
| "Ask the securities professional ..." errands | Gone. No con ends with an errand. "each trust's own papers give its term" is gone. |
| Out-of-state statistics with no point; vague DST parcels | The owner counts and the bar chart are cut. The DST parcels section now has our own map of the three home communities, says "None of them is a house or a condo. A DST share would be a slice of a large building like these, not a rental of your own", and says "If you own an apartment community or a building leased to one business, DST sponsors are among the buyers here." |
| Photo does not show the subject | Our own map of the DST-owned communities is the section's picture. See "Where I did not follow a finding" for the photo. |
| Layout defects | Fixed (critic rows). |
| "Buyers / Accredited", "Money / Locked in" tiles | Now "Who can buy: $1M+ net worth or $200K+ income", "Usual minimum: $100,000", "DST sales commission: About 6%", "Your money back: When the trust sells". |
| "What comes out going in", "Already sold" | Now "What you pay to get in" and "Nothing left to sell". |
| What a DST pays; what DSTs hold here | Payout: see the reader rows. Holdings: the map and the sentence on two apartment communities, a residential community, and commercial and industrial sites. |
| Nit: feed under the title | NEEDS 10. |
| Nit: duplicate credit line | Stripped (critic row). |
| Nit: short answer and "Which one fits" both give the choice | The short answer's second paragraph is one line: "It fits only if you are done managing, pass the SEC's wealth test, and will not need the money for years." |
| Nit: two "Plan my rental sale" boxes near the end | The inline box at the end is gone. One offer box sits mid-page (after the dollar example), the closing band stays. `build.js audit` asks for a boxed offer mid-page. |

## Where I did not follow a finding, and why

1. **Name the DST-owned properties (owner's eye).** The ledger's row 25 note says "Do not name a trust, a sponsor or a building on the page", and the shot list says the page will not name them. The verifier confirmed the types and places, not the community names as businesses. I kept them unnamed and made them concrete instead: the map, "near Carolina Forest Boulevard", "in the Clear Pond area", "near the US 17 Bypass". The owner can approve naming them; the names are in row 25.
2. **Drop the oceanfront photo (owner's eye, critic).** Without it, `critic.mjs` blocks the page ("a blog with no real photo in <main>"). No licensed photo of a DST-owned community exists yet. The aerial stays as a stand-in, moved to the three-choices section, where it shows the kind of rental many readers own. Its caption says what it shows and gives one verified fact (more than half of the county's condo units have an owner outside South Carolina, row 26). It is no longer the share image: the page now has its own card from `ogcard.js`. Shot-list items 1 and 2 go to the photo partner (NEEDS 12).
3. **The no-fee sentence.** Still held for owner question 2 (NEEDS 3).
