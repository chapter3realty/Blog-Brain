# Review round 2: /invest/str-tools/

Fixer, batch 2026-10-d, 2026-11-01. All changes are in `web2/specs/str-tools.js`; the page was rebuilt with `node tools/mkpage.js specs/str-tools.js`. Two new ledger rows: 32 (city business license) and 33 (town map points), both VERIFIED-BY-FIXER, for the lead to re-check.

## Gates after the fixes

- `score.js` (SCORE_TODAY=2026-11-01): 100/100. SEO 100, AEO 100, Human 100, Trust 100.
- `claims-scan.js`: 0 findings. `facts-check.js`: no hit on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording.
- `critic.mjs` at 320, 390, 768, 1024, 1440: 0 blocking, 4 warnings. All 4 are the same `read.wall` false hits the critic named in round 2 (the calculator block at 390 and 320, the dek and short answer at 320, the last FAQ answer and the Sources line at 320).
- `build.js check`: OK. `build.js audit`: the page's two FAILs are the date mismatch (Updated June 12, 2026 and schema dateModified against the sitemap). The lead's `node build.js dates` run fixes them. The A20 warning (no quote from a licensed person) stays: we may not write a quote for Tim Nash.
- I looked at the new section shots at 320, 390 and 1440: the nights chart, the town map, the growth and houses charts, the season chart and the calculator.

## Critic

| Finding | What changed |
|---|---|
| Blocking: meta description says "the 6 percent property tax" | Now "the condo fee, the property tax and Airbnb's cut". The description feeds the meta, og, twitter and both JSON-LD copies; the built page has no "6 percent property" left. The spec's header comment is fixed too. |
| Blocking: the unsourced 11 percent fall and "after it changed how it counts" | Cut. The yoy code and its read of `data/str-market.json` are gone. The section now ends with a verdict for the buyer (see owner item 4). |
| "The beach condos on Waccamaw Drive ... have fees less than half that" | Now "The typical beach condo on Waccamaw Drive in Garden City Beach has a fee less than half that, and needs about 66 nights to pay its bills." |
| "Across all sizes, the towns with the highest averages rent bigger homes" (Surfside and Garden City not in a row) | Narrowed to Murrells Inlet and Myrtle Beach (row 7): "Counting all sizes, Murrells Inlet's average Airbnb took in nearly twice Myrtle Beach's. Most of Murrells Inlet's listings are houses, and most of its homes sleep groups." |
| "Little River and Conway take in less on average" stumble | The sentence is cut (owner item 5). |
| "If you will rent it all year, plan on this line" | Now "your result is likely closer to this line." |
| "Some owners fill the winter with one long stay" | Cut. The paragraph starts at the 90-day rule. |
| Dates | Left for the lead's `build.js dates` run. |
| FAQ names the condotel page with no link | FAQ text must be plain (mkpage refuses tags). The answer no longer names a page: "A condotel, a condo run as a hotel, needs its own kind of loan." The link stays in the guide card. |
| 320 wraps in the growth and houses charts | The growth chart's feature is "8,698 listings" (no "now"; the note says "Active listings now"). The houses chart joins its pair with no-break spaces ("112 of 258" stays on one line). At 320, "North Myrtle Beach · 4,564 listings" still wraps after the number, which keeps the number with its word. |
| "Property tax a year, $" leaves the ? alone | The label and its ? sit in one inline-flex span, so the ? stays beside the label's last line. |
| 1440 layout, centred last card | Shared kit (NEEDS.md 14). Not changed. |
| Season chart at 320 | Under 400 px the month and value columns are narrower, the card padding is smaller and the bars are thicker. The bars are now about 110 px wide at 320, and January reads as a bar. |
| Search placeholder clipped at 320, empty strip in preview | Shared component and preview feed. Not changed. |

## Reader

| Finding | What changed |
|---|---|
| Blocking: two answers disagree (110 nights, then 87 and -$4,209, then 135 and +$4,600, "plan on this line") | The short answer now opens with the verdict and both cases: "On average, no. A typical two-bedroom Airbnb in an oceanfront Myrtle Beach building, run by its owner, books about 87 nights a year and falls about $4,200 short of its bills, before any loan. Open to guests all year, it keeps about $4,600. With a manager, it about breaks even at best." The calculator still opens on 87 nights, the measured average, which matches the first sentence. The worked example says plainly that the average listing is open only part of the year, says 135 is the all-year case, and tells the reader to put 135 in the nights to see it. |
| Blocking: the out-of-state owner with a manager | New last paragraph of the worked example: "The calculator starts with no manager. With a manager at 15 percent of the bookings, the same condo needs about 139 nights, so it falls about $600 short even when open all year." Arithmetic from run(), guarded in the spec: at 135 nights, 15 percent gives -$553; 12.6 percent, the low end of the basic plans we have seen (row 23), gives +$264. So the short answer says "about breaks even at best". The cleaner paragraph now adds: "The calculator starts with no manager, so if you will not be here to check the cleaning, put in a manager's share." |
| How many nights an inland Surfside golf condo books | No source gives it, so the page gives no number. The Surfside card now says what the reader can use: "An inland condo may book fewer nights than the town's average of 80, which counts the beach condos too. It pays its bills at about 42, about half that average." |
| "More hosts" read like a footnote | Rewritten (owner item 4). |
| Listing box placement and type | Shared feed. In production `idx-lib/feeds.js` gives this page STR_400 ("Nightly rentals allowed, under $400,000"), placed under the opening. Not a spec change. |
| Date before the data | Lead's dates run. |
| "With tax and insurance" vs "your own condo insurance policy is extra"; why insurance differs by town | The short answer now says "its bills", and the chart key says "the HOA fee, tax and rental insurance". The insurance card says it is AirROI's cost for Myrtle Beach, that it differs by town, and that the calculator fills in each town's; the calculator's fill note now names "AirROI's rental insurance and permit cost there". |
| Words: RMV, grandfathered, tax district's rate, DSCR, condotel, founding rules, booked or blocked | RMV: "the zone for apartment and condo buildings for visitors". Grandfathered: "may still rent nightly, because they did before the zoning" (the city's own words, row 26). Tax tip: "at the tax rate for its address", plus "about 1.5 percent of the price". Condotel: "a condo run as a hotel". Founding rules: "the building's own rules". Booked or blocked: "booked, or blocked by their owner". DSCR was already defined. |
| Too many numbers in one sentence | The utilities, cleaning and lodging-tax sentences are cut to one number or none (owner item 3). |
| "according to a loan officer at our preferred lender" reads like a report | Now "A loan officer at our preferred lender tells us that ..." BrickWood is not named. |
| No map | Added: a map of the eight towns at the top of the town section, drawn with page-kit `placesMap` from the Census label points the map tool already uses (row 33). Every town is named on it at 390. Caption: "Map of the eight towns on this page, from Little River south to Pawleys Island, and Conway inland." |

## Owner's eye

| Finding | What changed |
|---|---|
| Blocking: the short answer does not answer the H1 | It now opens "On average, no." with the dollar figure in the first two sentences (see reader item 1). |
| Blocking: the calculator default against the page's advice; "booked as often as the average one" confusing | Decision: the calculator opens on the measured average (87 nights). The short answer gives that case first, so the tool and the answer agree. The all-year sentence now reads "The average listing is open to guests only part of the year. Open all year and booked at the same rate, it books about 135 nights ...", ending "your result is likely closer to this line. Put 135 in the nights booked to see it." |
| Blocking: too many numbers | Airbnb's fee card has one number (15.5 percent); the older split fee is a phrase with its link, and the card says the calculator uses AirROI's town average. Cleaning card: one number ($151), the Murrells Inlet fee, 4.7 nights and 19 stays are gone. Utilities card: no percents in the text. Manager card: "about 13 to 17%" and the 15 percent / 139 line moved to the worked example. "541 of the 641 condos" is now "about 5 in 6" (guarded in the spec). The lodging-tax example is one sentence: "The guest pays the lodging taxes on top of the price, about 13 percent inside the City of Myrtle Beach, and Airbnb collects them." "About one in eight more than 180" is cut. |
| Blocking: "too many Airbnbs?" never answers and talks about the data source | It opens "Yes, hosts are adding listings fast." and ends with what it means for a buyer: "For a buyer, this means you should not count on more nights than listings here book now. The calculator starts from that count, not from a summer week." The AirROI income sentence and "Garden City Beach's page gives no growth figure" are cut. |
| Blocking: the Conway sentence contradicts the chart | Cut. The season section already says Pawleys Island has the most even year. |
| Blocking: repetition | The FAQ "Can you Airbnb in Myrtle Beach?" is replaced by "Do you need a business license for an Airbnb in Myrtle Beach?" (row 32 and row 27; the owner listed this as a gap). The nights FAQ no longer repeats the short answer: "The count depends most on the HOA fee. The four typical condos in the chart above need about 42 to 110 booked nights a year to pay their bills." "The calculator below runs any listing" is gone from the short answer. The three offers now say three different things: hero "We check its HOA fee and its tax before you offer"; middle "We read the building's budget and what its fee pays for, at no cost"; bottom "We check whether its building and zoning allow nightly rentals before you write an offer, at no cost. Call 854.333.2135. We answer evenings." |
| Blocking: the HOA table buried the strongest point | It is now a chart: one pair of bars a place, nights needed (brass) against nights booked (slate), zero-based on one scale, with the HOA fee under each name. It stays a real `<table>` (with explicit roles), so the page keeps its data table (score A6). On a phone it is one short card; checked at 320, 390 and 1440. |
| Hero tile missing "to pay the bills" | Added: "Lower-fee condos: About 40 to 70 nights to pay the bills". |
| Garden City photo after a Murrells Inlet paragraph | Moved under the houses chart in "Can you Airbnb a home", where the Garden City area leads. New caption: "Beach houses between the ocean and the marsh at Garden City Beach. In the Garden City area, about three in four houses for sale are marked for nightly rentals." (row 21: 38 of 51, guarded in the spec). |
| Cleaner advice beside a $0 manager | Linked in one line (see reader item 2). |
| Lodging-tax example | One sentence (see above). |
| Furnishing cost; City of Myrtle Beach business license | Business license: added from the city's own notice (row 32). Furnishing cost: no verified source in the ledger, so it is not on the page. Row 13 says all 48 worked Myrtle Beach condos are sold furnished, which lowers the first-year cost for the oceanfront case; I did not add it to keep the numbers down. A furnishing figure needs research and a verifier; I suggest it for a later round. |
| 1280 empty right half | Shared layout (NEEDS.md 14). |

## Not changed, and why

- The read.wall warnings are false hits (as the critic said in round 2).
- `chapter3realty/images/2026-10-d/invest-str-tools/springmaid-pier-from-the-ocean-2011*.webp` are left from round 1 and no page uses them. I did not delete them: they are staged in the website index and the checkpoint takes that diff. The lead may drop them.
