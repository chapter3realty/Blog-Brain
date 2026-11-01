# Review round 1: /invest/str-tools/, what the fixer changed

Fixer, 2026-11-01. Every change is in `specs/str-tools.js`; the page was rebuilt with `node tools/mkpage.js`. New facts are ledger rows 30 and 31 (VERIFIED-BY-FIXER) and a note on row 12; the lead re-checks them.

## Gates after the fix

- `mkpage`: builds; every `must()` check holds, including new ones for rows 20, 31 and the managed case.
- `score.js` (SCORE_TODAY=2026-11-01): 100/100, no blockers.
- `claims-scan`: 0. `facts-check`: 0 on this page. `house-claims`: 0. `struck-check`: no struck wording. `repeat-check --strict`: passes, 0 identical and 0 near sentences. `structure-check --strict`: passes. `site-audit`: nothing on this page.
- `build.js audit`: two date lines remain (visible "Updated June 12, 2026" and schema dateModified against the sitemap). The lead's `node build.js dates` sets them. Plus the A20 note (no attributed quote), which is a "~" warning and not an error. `build.js check`: OK.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: **0 blocking**, 4 warnings, all `read.wall`: the calculator (critic's own false hit, a visual block), the hero at 320 (byline plus sub line), and the FAQ at 320.
- Calculator probe (`wf2/invest-str-tools/fix1/s/calc.mjs`): all eight towns, both sizes, the quick picks, a 15 percent manager and the "?" tips work. No script errors.

## Critic

| Finding | What I did |
|---|---|
| Blocking: listing strip search row runs past 320 px | The workaround from specs/dst.js, in this spec's CSS: at 379 px and under the search box, badge and question row shrink, and the filter chips wrap. scrollWidth is 320 at 320. NEEDS.md 11. |
| Blocking: header 1029 px wide at 1024 | The specs/dst.js workaround, from 1000 to 1100 px. Critic at 1024: 0 findings. NEEDS.md 12. |
| Blocking: FAQ comma splice "Visitor zone, Most houses" | The FAQ answer is rewritten as a short answer in three sentences. The page and the FAQPage schema now read: "Most houses in city neighborhoods cannot be rented nightly, because the city's residential zones do not allow stays under 90 days." |
| Blocking: calculator carries one town's condo into another | A town or size with no worked condo now clears the price and the HOA fee. The fee, tax, "You keep a year" and "Nights needed" show "--". The result line reads "Put in the listing's price and HOA fee to see what you keep." until both are entered. Probed on Murrells Inlet, Pawleys Island, Little River, Conway and 3 bedrooms. |
| Blocking: 3-bedroom rate and nights, per-town insurance, permit and cleaning shares in no verified row; 5 of 8 AirROI pages not linked | Ledger row 30, VERIFIED-BY-FIXER. I read all eight saved AirROI pages: 8 three-bedroom rows, 16 insurance and permit lines, 8 cleaning shares and 8 Airbnb fee shares. All match `findings.json`. All eight AirROI pages are now in Sources. To keep the sources line at 90 words, the first link is "AirROI: Myrtle Beach" and the next seven are town names, and the levy link is "County tax levy". |
| Nit: "$4,200" against the ledger's $4,272 | The page says "about $4,200", which matches the calculator's -$4,209 (87 whole nights). Row 12 now carries a fixer note on the rounding. |
| Nit: description 163 characters | Now 150. "Town by town," is cut. |
| Nit: H2 without a place | It is now "What does Airbnb take from a Myrtle Beach rental, and what else comes off?" |
| Nit: hero tile wrap at 320, line-height 1.25 | Line height is 1.4. Under 700 px the tiles are one row each, with the label and value on one line. Seen in the 320 shot. |
| Nit: wraps at 1440 in the town and houses charts | The town chart has no feature now (see the next row). The houses chart uses short names ("North Myrtle Beach") and "112 of 258". The note still says the count is by address. |
| Nit: three-bedroom figure next to the town name read as the bar's value | The town chart shows two-bedroom figures only. The three-bedroom figures stay in the calculator (row 30). |
| Nit: "where the house market is" | It now reads "In Murrells Inlet, where most Airbnbs are houses, they bring 43 percent." |
| Nit: "DSCR lenders", "201.0 mills" | The FAQ now reads "Loans approved on the rental's income, called DSCR loans, count only about 75 percent...". The word "mills" is gone. The Surfside fill line says the tax is "at the rate for most condos with a Surfside Beach address, which sit outside the town; inside the town it is a little higher." |
| Nit: "Inland, Little River and Conway"; "$21,000 to $28,000 on the coast" beside Little River's $11,800 | The text now reads "Away from the ocean beach, Little River and Conway..." and "In seven of the eight, the average two-bedroom took in about $21,000 to $28,000 a year. Little River took in far less." A `must()` check confirms that Little River is the low one and that the other seven fall in that range. |
| Nit: three block widths in one section | Not changed. The table width comes from the shared compare.js and the photo width from page-kit. The left edges align. |
| Tool false hits (read.wall on the calculator, empty strip in shots) | Agreed. No change. |

## Reader

| Finding | What I did |
|---|---|
| Two answers ($4,200 short and $4,600 kept); "37 percent of what?" | The worked example is now three short paragraphs. The average listing books about 87 nights and falls about $4,200 short. That average includes part-year listings. A listing open all year, "booked as often as the average one", books about 135 nights and keeps about $4,600. It ends: "If you will rent it all year, plan on this line." The "37 percent" is gone. |
| Calculator keeps the old condo when the town changes | Fixed. See the critic's blocking item above. |
| No managed case; what to type for full service | The manager card now says the calculator takes a share of the nightly bookings, and that at 15 percent the worked condo needs about 139 booked nights instead of 110 (our arithmetic, the row 12 note). Full service is "priced as a share of the profit, not of the bookings". Its 40 to 60 percent is not on the page, because its base is owner question 1. |
| "Property tax at 6 percent of the price" read as 6 percent of $327,000 | A "?" beside "Property tax a year" now says: "The county taxes a rental you do not live in on 6 percent of its value, times the tax district's rate. On the worked condo that is about $5,000 a year." |
| Hero tile "43% more in a year" misread as income | The tile is gone. The three tiles are: "Oceanfront Myrtle Beach: About 110 nights to pay the bills"; "Lower-fee condos: About 40 to 70 nights"; "June to August: Nearly half the year's income". |
| Nit: AirROI never explained | The calculator's first paragraph now says "from AirROI, a company that publishes Airbnb data town by town". |
| Nit: RMV jargon; overlay not explained | The text now reads "The city allows it in no residential zone except RMV, its multifamily zone for visitors." I cut the overlay sentence: its rule was struck (VERIFY 8), so the page cannot say what it changes. The link to /invest/str-rules/ stays. |
| Nit: typo | Fixed (critic's blocking item). |
| Nit: tax blank with no warning near the result | The result line still adds "Property tax is not counted." The fill line says why, and the tax line reads "--" or "not counted". |
| Nit: "theft and damage followed"; "college" guest | The text now reads: "The worst short-term rental mistake our team sees is running it yourself with the cheapest cleaner. We have seen theft and damage follow." The kinds of guest are now "golfers, workers or people moving here". "College" is dropped because the story gives no detail of it, and the verifier allows leaving a kind out. |
| Nit: did rates fall as listings grew? | A new paragraph answers it from row 20's note. AirROI's yearly change in Myrtle Beach income "showed a fall of about 11 percent a few months ago, and a rise of 8 percent now, after it changed how it counts". So the calculator starts from nights booked. Both figures are read from files (`str-market.json` yoy -10.7; `findings.json` +8). |
| Nit: no loan box | Not added. Every result says "before any loan", and the page states no payment amount (house rule). |
| Nit: byline date | The lead's dates run fixes it. |

## Owner's eye

| Finding | What I did |
|---|---|
| Name buildings and roads, not only towns | New research, row 31 (`pull_complexes.py`, `verify/coast_distance.py`, CRM aggregate plus each listing's public "Subdivision" line; no address or MLS number kept). The short answer now names "the beach condos on Waccamaw Drive in Garden City Beach". A new list in the HOA fee section has one card a place: <br>- **Garden City:** Waccamaw Drive, with Beach House, Sea Watch and Garden Sands at $600 or less. <br>- **Surfside Beach:** mostly inland, at Retreat at Glenns Bay, Golf Colony at Deerfield and Grand Palms Resort, a mile or more from the beach; Sea Shadow on the oceanfront is over $1,000. <br>- **Myrtle Beach:** fees under $800 at Ocean Forest Villas and Beach Colony; the fee pays the electric at Sand Dunes, the Caribbean, Dunes Village, Carolinian Beach Resort and Grande Shores. <br>- **North Myrtle Beach:** the fee pays the electric at most of Bay Watch and Beach Cove. <br>The research also found that the Surfside Beach row is mostly inland golf and resort complexes. The page now says so, and says the town average it is set against counts the beach condos too. |
| Repetition | Each repeated item is now said once: <br>- the split-fee sentence: costs card only; <br>- the cleaning-fee sentence: the FAQ now gives a pointer, $151, and who pays; <br>- "the middle two-bedroom ... that allows nightly rentals": the worked example only, elsewhere "a typical two-bedroom in an oceanfront building"; <br>- "counting listings open only part of the year": once, in the worked example; <br>- the zoning sentence: once in the body, with a different short FAQ. <br>The FAQ answers are now short pointers ("The season chart above shows each month..."). repeat-check `--strict` passes with 0 identical and 0 near sentences. |
| Too many exact numbers | The short answer has three numbers: $1,225, 110 and 66. The worked example has one or two numbers a paragraph. "8,698" is now "far more listings than any other town". The July-over-January multiples and the 37 percent are gone. |
| Not proper English | The comma splice, the "As we have seen them" fragment and the tense clash are all rewritten (above). |
| Industry terms | "Overlay" is cut. "Gross profit" is now "a share of the profit". DSCR is defined. "Mills" is gone. RMV is glossed. AirROI is defined. "Legal residence" is now "a rental you do not live in" (score.js P6). |
| Pier photo; "2011" in captions | The pier photo is removed from the page; its file and licence record stay in `photos.json`, unused. "2011" is cut from both captions. The NOAA gauge stays named in the season chart's caption and in Sources. |
| Hero tiles | Rewritten as three complete thoughts with no warning at the top (see the reader's item). |
| Nit: phone charts render as lists | `phoneList` is off for the town, growth and houses charts. They show bars on a phone (seen in the 320 shot). |
| Nit: calculator opens on a loss | A row of quick picks above the calculator reads "Start from a typical condo: Myrtle Beach oceanfront, North Myrtle Beach oceanfront, Garden City Beach, Surfside Beach". One tap switches to a condo that pays its bills. |
| Nit: a "?" instead of fine print | The fine-print paragraph is gone. Two "?" buttons hold its content: one beside "Property tax a year", one beside "You keep a year" (AirROI's low-end shares, condo policy extra, no loan, Chapter3 does not manage rentals). Each opens on hover, focus or tap, with aria-expanded. |
| Nit: feed title | Generated outside the spec. NEEDS.md 13. |
| Nit: one kind of guest, no example | The story gives no example, and a story may get no added detail, so none is added. |
| Nit: desktop right column empty | It comes from the theme layout. NEEDS.md 14. |

## Where I did not follow a finding

- **Full-service manager percent.** The owner asked for "say what it means, or cut it". The base the file gives is "gross profit", and owner question 1 asks what that means. I cut the number rather than guess. The text keeps what full service includes and that it is priced on profit.
- **Basic-plan base.** The 12.6 to 17.5 percent stays, as "the basic plans we have seen here". `str-market.json` gives no base for it. If owner question 1's answer covers it, the calculator could use it as a default.
