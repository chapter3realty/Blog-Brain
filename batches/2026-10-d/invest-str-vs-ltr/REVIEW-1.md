# Review round 1: /invest/str-vs-ltr/, what the fixer changed

Three reviewers failed version 1 (critic 5, reader 7, owner's eye 7). Every change is in `specs/str-vs-ltr.js` or in files under this batch folder. The built page was never edited by hand. Version 1: `wf2/invest-str-vs-ltr/fix1/str-vs-ltr.v1.js` and `index.v1.html`.

## Gates after the fix

- `score.js` (SCORE_TODAY=2026-11-01): 100/100. The cut "What else changes" table was the page's data table; the jobs block is now a real table (January and July), so A6 still passes.
- `claims-scan.js`, `facts-check.js`: no hits on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording. `photos.js check`: all records pass.
- `build.js check`: OK. `build.js audit`: only the two date FAILs (lead's `node build.js dates`, NEEDS 13) and the A20 note (no Tim quote; never written).
- `critic.mjs` at 320, 390, 768, 1024, 1440: 0 blocking, 0 warnings (was 3 blocking). Shots: `wf2/invest-str-vs-ltr/r1shots/`; section shots at 320, 390 and 1440: `wf2/invest-str-vs-ltr/r1/sec/`. I looked at the first screen, each section and the photo at full size.
- Repetition: "82" nights is now in the visible text 5 times (tile, short answer, break-even answer, calculator, one FAQ), was about 9. "19" check-outs: once. "The building's rules": once in the body plus the "what we do" line. "Booked or blocked", "RMV", "founding rules" and "top-quarter mark": gone.

## New facts

Two rows added to `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check:
- Row 32: a two-bedroom open all year at the middle fill rate (34 percent of nights, row 5) books about 124 nights and keeps about $23,400, about $8,000 more than the lease. Our arithmetic from rows 2, 5, 13 and 16, by the calculator's method. Also "about one listing in five was booked 30 nights or fewer" (row 5, 22.3 percent).
- Row 33: AirROI's costs leave out one-time setup "such as furniture and photos"; the short-term rental insurance policy is "on top of" the home's insurance and is counted.

## Critic

| Finding | What I did |
|---|---|
| Blocking: "Who rents all year" brings back the cut row-27 claim | H2 is now "How many Horry County jobs last all year?" (On this page: "Jobs all year"). It opens with the approved row-27 sentence. No sentence says who rents. |
| Blocking: search strip cut off at 320, page 364 px | Shared chrome; NEEDS 9. Worked around in the spec (`BAND_FIX`, same rules as dst, plus the chip row wraps). Critic at 320: clean. |
| Blocking: header 1029 px at 1024 | Shared chrome; NEEDS 10. Worked around in the spec between 1000 and 1100 px. Critic at 1024: clean. |
| Month chart sums to about $22,800 against the table's $12,400 | Caption now says each bar is the average listing open that month, any size, so the 12 bars are a listing open all year, close to the two-bedroom open all year in the first chart, not the middle listing. The first chart now has that year-round bar (row 32), so the page gives one answer. |
| Top-quarter bar in a "two-bedroom" chart | Bar removed. The figure is one sentence: "One that takes in more than three in four Myrtle Beach listings, of any size, keeps about $27,700 run all year, about $12,000 more than the lease." |
| Calculator $15,254 against table $15,250; "$3,000" against a $2,850 gap | Every kept figure is rounded to $100 in the chart, prose and calculator ($15,300 lease, $12,400, $23,400). Each gap is the gap between printed figures ($2,900 to "about $3,000"; $8,100 to "about $8,000"; $12,400 to "about $12,000"). A `must()` check stops the build if they part. |
| Repetition | "What else changes" table and "fits when" lists cut. Pros and cons is the one comparison block, rewritten so no item repeats a body sentence. FAQ answers reworded. |
| Hero tiles wrap one word a line at 320 and 390 | Tiles are 2 x 2 below 480 px; looked at 390: each tile two lines. |
| First screen at 390 | The dek now answers ("Open all year and run by you, a two-bedroom Airbnb keeps more than a lease. Many open only part of the year, and most city neighborhoods allow only a lease."). The feed strip placement is the edge's; NEEDS 11. |
| Dek describes the page | Same change. |
| SEO: month H2 and pros-and-cons H2 | "How much does a Myrtle Beach Airbnb make each month?" and "What are the pros and cons of an Airbnb and a long-term rental in Myrtle Beach?" |
| "almost always" rests on listing marks | "In an oceanfront condo building, the listing almost always says yes." |
| "shows the top of the range" | "One friend of ours shows what busy condos can do." No ranking claim. |
| Cleaner sentence, jargon | Cleaner sentence cut. "Top-quarter mark", "booked or blocked", "founding rules", the part-year clause in the short answer: gone or said in plain words. |
| Byline date older than data | Lead's `node build.js dates` (NEEDS 13). |
| 14-day exception without the link | FAQ text cannot hold a link (mkpage). The body now has the line with the link in "Is it allowed": "A home rented out 14 days or fewer a year is not taxed as lodging; our page on the 14-day rule explains it." |
| headlines.json | NEEDS 12. |
| Pros card much shorter at 1440 | Cards stretch to the same height; a fourth Airbnb pro added and the long con shortened. The empty right half is the site's article width (NEEDS 14). |
| read.wall false hit at 320 | Gone; the critic shows no read.wall now. A new one in "What we do" was broken with an h3 over the story. |

## Reader

| Finding | What I did |
|---|---|
| Blocking: no answer for a middle two-bedroom open all year | The first chart and the short answer now give it: open all year and booked about a third of its nights (about 124), it keeps about $23,400, about $8,000 more than the lease. The middle listing's lower figure is explained as many listings open only part of the year. The 34 percent sentence that led the reader to 124 by hand is replaced by that sentence. |
| Blocking: the overlay is named but not explained | Partly. The rule's text is STRUCK in the ledger (row 18) until Section 1808 is read again in a browser, so the page cannot say what it does. The ordinance number is cut (owner's eye). The page now says we check whether the overlay covers the building before you offer, so the reader does not have to. |
| Two lease numbers ($1,504 and $1,270) | The month key reads "The lease keeps about $1,270 a month" and the caption says it is the $1,504 rent less utilities and one empty month, spread over the year. |
| Why the owner pays utilities on a lease | Chart note: HUD's standard rent counts utilities, so we take them out on both sides; if your tenant pays them, the rent is that much lower. |
| Who collects the lodging tax | "On a stay under 90 days, the guest pays the lodging taxes on top of the price, about 13 percent inside the city, and Airbnb collects them." (row 21; verifier allowed "and the city's"). The tile "Lodging tax: paid by the guest" is replaced. |
| Jargon | "Top-quarter mark", "booked or blocked", "RMV", "the listing marks", "a short-term rental estimate" all reworded. "HUD's standard two-bedroom rent" is kept in the chart note. The note says AirROI counts North Myrtle Beach apart. |
| Conway paragraph | Cut, with the Conway photo. |
| Snowbird winter rent, license fee amount | No source gives either (license page gives no rate, row 23). The fee clause is cut; the snowbird line keeps the 90-day tax point and the link. |
| HOA fee | The fee figure is STRUCK (row 26: unit not confirmed). The page says the fee is the same either way; our offer runs the address. |
| Repetition, generic opener | Same as the critic rows. The opener "An Airbnb earns more when it books often..." is gone. |
| Story | Kept, moved near the end. |

## Owner's eye

| Finding | What I did |
|---|---|
| Blocking: repetition | One comparison block (pros and cons); table and fits-when lists cut. Counts above. |
| Blocking: top-quarter presented as a two-bedroom | Out of the chart; named "of any size" in its one sentence; out of the short answer and the FAQ. |
| Blocking: chart and calculator disagree | The year-round case uses the calculator's method. The middle listing's figure stays (row 14), and the chart note says the $20,100 includes guests' cleaning fees, which pay the cleaner. The calculator note says the same. |
| Blocking: jargon and leading with the source | Short answer rewritten in plain words, no "AirROI's market", no part-year clause. AirROI is in chart notes and the sources line. Fannie Mae line: "Standard loans, the kind Fannie Mae buys, are not made in a condo building with a required rental pool or hotel services such as a front desk." Zoning: "the city's residential zones do not allow it, except one, the Residential Multifamily Visitor zone." |
| Blocking: the overlay sentence | Ordinance number cut; link kept; we check whether it covers the building. |
| Blocking: story placement and the cleaner line | Story moved into "What does Chapter3 do", above the offer. Cleaner line and "Chapter3 does not manage rentals" cut from the body (the FAQ still answers it). |
| Blocking: "Price the home both ways before you choose." | Now "We price it both ways before you offer." |
| Blocking: furnishing and insurance | Airbnb con: "It has to be furnished, with photos, before the first guest, and it needs its own short-term rental insurance. We count the insurance here, not the furniture." Lease pro: "It can be rented unfurnished, so there is no setup to buy." (row 33). No setup figure: none has a source. |
| Blocking: Conway photo | Cut. The tower photo's caption now says what it shows for the page. |
| Blocking: numbers too exact | "takes in $18,048" is now "rent $1,504 a month"; manager basic plan "about 13 to 17 percent"; vacancy "About 11 to 12 percent of South Carolina's rentals stood empty in each quarter of 2026 reported so far"; the 48-condo sentence is now "about $5,000 a year on an oceanfront condo listed near $325,000". July income "about $6,800". |
| Blocking: "90 days or fewer" does not show fewer than 82 | Now "about one listing in five was booked 30 nights or fewer in the year" (row 5, 22.3 percent). |
| Blocking: title "Real Numbers" | "Airbnb vs Long-Term Rental in Myrtle Beach: 82 Nights to Win" (60 characters). The meta description and share title carry the 82 nights. |
| Tile "Lodging tax" | Replaced. Tiles: Break-even 82 nights a year; June to August 47% of the income; Oceanfront condos 95% allow nightly (row 25, 402 of 422); City neighborhoods mostly lease only (row 17). |
| Jobs caption technical | Caption: "counted where people work (U.S. Bureau of Labor Statistics)". "Not seasonally adjusted; recent months preliminary" moved to the sources line. |
| Conway paragraph | Cut. |
| Feed strip fills on the live site | Cannot check from here; the preview shows the fallback strip. NEEDS 11. |
| Kept | Calculator, month chart, area table, the "Get both numbers" offers. |

## Where I did not follow a finding

- **Reader: say what the overlay does.** The rule's text is STRUCK (row 18): Municode and the city's PDF returned 403 to the researcher and the verifier. Writing it from the September read would put a struck claim back. The page says we check it per address and links to /invest/str-rules/.
- **Reader: HOA fee, license fee, winter monthly rent.** No verified row gives any of them (row 26 struck the fee; row 23 has no rate; no source for winter rent).
- **Critic: add the /invest/14-day-rule/ link in the FAQ.** FAQ text must be plain characters (mkpage). The link is in the body instead.
