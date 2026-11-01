# Review round 2: /invest/strategies/dst/, what changed

Three reviewers read the built page: critic (5), reader (7), owner's-eye (7.5). Every blocking item is fixed in `specs/dst.js`, not in the built page. New facts: ledger rows 31 and 32, both VERIFIED-BY-FIXER, for the lead to re-check.

## Critic

| Finding | What changed |
|---|---|
| "On a typical rental sale" | Now "On a $400,000 rental sale, our example below, ...". The table caption is "Three choices for our $400,000 example sale", so the "Tax this year" row is labelled as the example. |
| "We read every new DST real estate offering ... at least 160" | Now "We counted 160 DST real estate offerings filed with the SEC in the last year." No "every", no "read", no "at least". The chart and the text use the same 160 and 156. The sources line gives the window (October 2025 to September 2026). |
| "a building leased to one business" | Now "an apartment community or a commercial or industrial building" (row 25). |
| REIT answer "one building against many" | The H3 is gone from the body. The FAQ now reads: "No. A REIT is a company, and its owners hold shares in it. A DST share counts, for federal income tax, as owning part of the trust's real estate itself, and that is what lets it go into a 1031 exchange." The body says "a trust that owns real estate". |
| "FINRA's free BrokerCheck" | "free" cut. |
| Five step cards in one row at 1024 and 1440 | The steps are one column at every width (820 px wide at 1024 and 1440). Checked in the new shots. |
| Hero tiles 180 x 136 px, five lines | The hero's media box is no longer held to 760 px when it holds the tiles. At 1440 the four tiles fill 1,132 px and stand 88 px tall; at 1024 they fill 956 px. "Who can buy" is two lines. One tile is now a benefit: "What you get: No tenants, tax later". |
| Photo does not show the subject | The condo aerial is gone. In its place: a U.S. government aerial (USDA NAIP 2023, public domain) of the apartment community a DST owns off Carolina Forest Boulevard, with the trust's parcel outlined from the county file, under the map in "Do DSTs own property on the Grand Strand?". Caption: "An apartment community a DST owns off Carolina Forest Boulevard, from above. The orange line is the trust's parcel." Ledger row 31; record in photos.json, which `photos.js check` passes. Checked at full size: the outline holds 13 apartment buildings, garages, parking, a pool and a pond, and nothing else. The NOAA 2026 tiles do not reach this parcel. A ground photo from the photo partner would still be better (NEEDS 12). |
| The "done managing" sentence three times | Said once, in the short answer. The hero sub is now a definition: "A Delaware statutory trust (DST) owns real estate and sells shares in it. A share can replace your rental in a 1031 exchange, with no tenants and no tax yet." The Which-one-fits line is now "if you would rather own a slice of a large property someone else runs than a rental of your own." The cons tail is gone with the pros and cons section. |
| "Selling and paying the tax costs about $39,000" | Now "If you sell and pay the tax, it is about $39,000, federal and South Carolina." |
| Nit: headings with one word alone | `text-wrap: balance` on h1, h2 and h3 in the page CSS. |
| Nit: hero first line without a verb | Fixed by the new hero sub above. |
| Nit: Article headline 123 characters | The headline is now the ogTitle, 80 characters. |
| Nit: "Your selling costs only" row | That row is cut. The table has four rows: tax this year, income, work each month, when you get the money. |
| Nit: thin generic sections | The pros and cons section is cut. The 1031 backup section stays: it answers the one DST-specific case (a DST named on the day-45 list as a backup) and the debt point. |
| Nit: feed | Not fixable from the spec. NEEDS 13 for the lead. |

## Reader

| Finding | What changed |
|---|---|
| What a DST pays each year | No public, primary source gives a payout figure (ledger, Not verified 8; Form D has no yield field), and the page may not promise a return. So the page now says where the figure is: "If the sponsor projects a payout, the projection is in its offering document, often called a private placement memorandum (PPM)", and that FINRA tells the firms that sell these to check that a projected yield can be supported by the property's own operations (new row 33). The FAQ "How much does a DST pay?" is cut, as the owner's-eye review asked. |
| Where the other fees and the hold are | The PPM is named, with four things to look for: every fee with its amount, the projected payout and what it rests on, how long the sponsor plans to hold, and who the tenants are and how long their leases run. Ask for it before you name a DST on your day-45 list. The callout says to look for the rest of the fees in the PPM. "We found no public record of how long DSTs usually hold" is cut. |
| The story does not connect | The lead-in now says what it is: "The sale is the part we do. This story is about a sale only, for an owner who was done managing from far away:". No detail added; the story is as published on /sell/rental-property/. |
| The debt paragraph | Rewritten: "It counts as cash you received and is taxed the same way, unless the replacement carries as much debt or you add cash. A DST can help: your share of its loan can count toward that debt. If your rental has a mortgage, raise it with your intermediary and tax adviser before you choose a DST. We give them the closing figures." |
| "159 reported no buyer outside the test" | Now "In 159 of the 160 DST offerings we counted, every buyer so far had passed the test when the offering was filed" (row 14's verified wording, in plain words). |
| "$1,000 · 20 of the 21 from one sponsor's series": can I buy one for $1,000? | The chart note now reads "20 of these from one sponsor". The text adds: "Those 20 were filed under the rule that lets only buyers who pass the wealth test in." New row 32 (VERIFIED-BY-FIXER): all 20 are Rule 506(c) filings. |
| Map label "Homes near US 17 Bypass" against "None of them is a house or a condo" | The label is "Rental-home community near the US 17 Bypass" (row 25's verifier). The text says "a community of rental homes". "None of them is a house or a condo" is gone; the text now says "A DST share would be a slice of a property like these, not a house or condo of your own." |
| Nit: when to hire the intermediary | Step 1 "Before you list": "You choose a qualified intermediary, the company that will hold the money during the exchange, and start talking to a DST seller." |
| Nit: tax return cutting day 180 short | Step 4 says which return: "If your tax return for the year of the sale is due before day 180, that due date comes first; an extension on the return moves it later." |
| Nit: "units in its partnership" | Now "a stake in the REIT's own partnership". |
| Nit: condo caption and out-of-state count | Gone with the photo. |
| Nit: "every" and "at least" | Fixed (see critic). |
| Nit: the byline date | The lead's `node build.js dates` (NEEDS 6). |
| Nit: feed | NEEDS 13. |

## Owner's-eye

| Finding | What changed |
|---|---|
| Repeats: the fit test three times | Once, in the short answer. |
| Repeats: "the payout falls" four times | Once in the short answer ("the payout can fall"), and the H3 "What does a DST pay you?" says "The amount moves with the rent and with the cash held back for repairs." Cons and the FAQ are cut. |
| Repeats: "money back only when the trust sells" five times | The hero tile and the "Plan to hold" line are gone. It stays in the short answer, the table row, the step "The trust sells" and the H2 answer in "Getting out". "Can you get back less" no longer opens with it. |
| Repeats: REIT units four times | Once, in the "Getting out" card. The REIT FAQ no longer mentions the units. |
| Pros and cons recap, and FAQs that repeat the body | The pros and cons section is cut. Four FAQs are cut: "What does DST stand for?", the minimum, "How much does a DST pay?" and "Can Chapter3 set up a DST for me?". The four left answer what the body does not: is a DST a 1031, is it a REIT, how its income is taxed, and liability on its loan. |
| "We found no public record of how long DSTs usually hold." | Deleted. "Getting out" opens with when the money comes back. |
| "$200 million county value, rounded" and "The values are the county's own" | The tile reads "county value for tax, all 11". The lead-in is gone. |
| Too technical | Cut from the body: the partnership sentence, the ruling's liability and ownership mechanics, the "Is a DST a REIT?" H3, "Revenue Ruling 2004-86" by name (the body links "ruled"; the sources line keeps the name), and "Series 7, 65 or 82" (now "Holders of certain securities licenses also pass."). The REIT and liability points are FAQs, one plain answer each. |
| Dates and hedges | Cut: "in 2011", "In 2005", "in the year to September 2026" (twice), "since November 2024" (now "in the last two years"), and "every ... at least". The body has no year in it; the only years are in the photo credit and the sources line. |
| Unsupported "typical"; too many numbers in the caption | "On a $400,000 rental sale". The example chart has two bars (the tax, the commission) and one note: the $376,000 that goes into the DST. Purchase price, depreciation, selling costs, the exclusion figures and the 3.8 percent tax are behind the capital gains link. |
| Photo does not show the subject | Fixed (see critic): the DST-owned apartment community, from above. The page is not left without a photo, because critic.mjs blocks a blog with none. |
| Homes feed off-topic and empty | Not fixable from the spec (shared idx-lib/feeds.js). NEEDS 13 sets out the lead's choice. |
| FAQ dodges "How much does a DST pay?" | Cut, as asked. The body says where the projection is and what to ask. |
| Awkward sentences | Hero sub is a full definition. The buyout sentence: "If no investor came, the plan was to offer the tenant a buyout, so buyers who would live in the house could bid too." "put off" is down from 8+ to 3 in the body (the tax "the exchange puts off", "put off, not forgiven", "the gain you put off"). |
| Nit: hero tiles cramped; all costs | Fixed (see critic). |
| Nit: "still yours to deduct" | The FAQ reads "you deduct your share of the depreciation." |
| Nit: two offers with the same line; three buttons | The mid-page offer is cut. Two "Plan my rental sale" buttons remain (hero and end). The end offer has its own words: "Send us the address. We price the rental, time the closing to your 45 and 180 days, and give your intermediary and closing attorney the figures." `build.js audit` now warns "no boxed CTA in the middle of the read". That is a warning, and the owner's-eye review asked for one fewer button, so I left it. |
| Nit: story bridge line | Not added: no source says most DST buyers give that reason. The lead-in names the link instead ("an owner who was done managing from far away"). |
| Nit: table eight cards on a phone | Four rows now. |
| Nit: the apartment-owner sentence | Kept. It is a verified local fact (row 25), and it is one sentence. |

## Gates after the rebuild

- `node tools/mkpage.js specs/dst.js`: built.
- score.js (SCORE_TODAY=2026-11-01): 100/100.
- claims-scan: 0 findings. facts-check: no hits on this page (9 wrong sentences on 5 other pages, none ours). house-claims: 0. struck-check: no struck wording.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings (1 photo, 4 other visuals).
- `node build.js check`: OK.
- `node build.js audit` on this page: two date FAILs (dateModified and "Updated July 12, 2026" against the sitemap), which the lead's `node build.js dates` fixes (NEEDS 6); two warnings (no mid-page boxed CTA, see above; no attributed sentence from Tim or Devin, which we may not write).
- New shots: `wf2/invest-strategies-dst/r3shots/` (full pages) and `r3el/` (hero tiles, steps, photo, stats at 390, 1024, 1440). Checked: the tiles sit on one or two lines across the full hero at 1024 and 1440 and two by two at 390; the steps are one column; the photo is 760 px at desktop and full width at 390, with its caption and credit.

## Still for the lead

- Ledger rows 28 to 33 are VERIFIED-BY-FIXER. The critic re-checked 28 (without "free") and 29. Rows 30 to 33 need a re-check. Row 33 backs the PPM sentences, which were on the spec without a row until now.
- The feed under the title (NEEDS 13).
- The dates run (NEEDS 6).
- The ground photo from the photo partner (NEEDS 12).
