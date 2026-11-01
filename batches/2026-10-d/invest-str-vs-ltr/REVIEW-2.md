# Review round 2: /invest/str-vs-ltr/, what the fixer changed

Three reviewers failed version 2 (critic 6, reader 6.5, owner's eye 7). Every change is in `specs/str-vs-ltr.js`, in `facts.md` or in `NEEDS.md`. The built page was never edited by hand. Version 2 is saved at `wf2/invest-str-vs-ltr/fix2/` (spec, page, facts).

## Gates after the fix

- `score.js` (SCORE_TODAY=2026-11-01): 100/100. The cut jobs table was the page's data table. A new table (what you keep at 60, 82, 100, 124 and 150 booked nights, row 38) replaces it.
- `claims-scan.js` and `facts-check.js`: no hits on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording.
- `build.js check`: OK. `build.js audit`: only the two date FAILs (the lead's `node build.js dates`, NEEDS 13) and the A20 note. A "real story" FAIL came up and is fixed (see the story row below).
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings. Shots: `wf2/invest-str-vs-ltr/r2/shots/`. Section shots at 320, 390 and 1440: `wf2/invest-str-vs-ltr/r2/sec/`. I looked at the first screen at each width, at "Which earns more" and at the break-even section.
- Calculator, 7 input sets (`r2/calc.mjs`). 252/1504/82/0 gives 82 nights and $15,300 either way. 252/1504/124/40 gives 173 nights, and the lease is about $4,400 more. 300/1800/100/0 gives 83 nights. An 80 percent share gives "more than 365". A $0 rate gives "Enter a nightly rate."
- Visible text: "both ways" 3 times (H1, short-answer offer, final band). "Before you offer" or "an offer" 3 times (short-answer offer, the What we do box, final band). Zero for "snowbird", "overlay", "So ", em dashes and the SWEEP sentences.

## Critic

| Finding | What I did |
|---|---|
| Blocking: "Most oceanfront condos for sale allow both." | Now "Most oceanfront condos for sale in Myrtle Beach are marked as allowing nightly stays." "Both" is gone. The overlay sentence is cut. The last line now reads "we read the zoning, the city rules for the building, and the building's own rules". |
| Blocking: "Airbnb collects them" | Now "Airbnb collects the state taxes and Horry County's" (row 21's words), then "Our page on short-term rental rules lists the filing an owner may still make." That matches /invest/str-rules/. |
| Blocking: the unconditioned dek | "Run it yourself, and a two-bedroom Airbnb leaves you more than a lease once guests book it about 82 nights a year. Most city neighborhoods allow only a lease." |
| Blocking: rows 32 and 33 only VERIFIED-BY-FIXER | I did not write them. I re-checked both against the raw AirROI file and redid the arithmetic, and marked them VERIFIED with my note. Row 33 has a wording correction: the policy is on top of Airbnb's AirCover, not the home's insurance. The page never said the latter. |
| Hero tiles leave one word alone | Tiles are two by two at every width, up to 640 px, with each value on one line from 480 px. A no-break space goes before each value's last word. Seen at 320, 390 and 1440. |
| Pros card stretched | `align-items:start`. The cards keep their own height. |
| Listing strip | Shared edge chrome (NEEDS 11). |
| "One that takes in more than three in four..." | "The owner of a listing that takes in more than three in four others, of any size, keeps about $27,700 a year, about $12,000 more than with the lease." |
| Month caption read twice | Cut to a source line and one sentence. |
| Offer repeated | Cut from the pros/cons tails, the FAQ and the "is it allowed" line. It stays in the short-answer offer, the What we do box and the final band. |
| $8,000 and $3,000 back to back | The short answer now names each case: "if you run it yourself and guests book it a third of the nights in the year ... about $8,000 a year more", then "Many listings book fewer nights, and the owner of the middle two-bedroom listing keeps about $3,000 less". |
| Jobs section has no "so what" | Cut, with its table, its source and its checks. Row 27 has no verified tie to tenants. The vacancy line moved to "Which earns more", next to the lease figure. |
| "Can you Airbnb a house" only answers for the city | New row 36 (county zoning code read today). Body: "Carolina Forest is outside city limits, in unincorporated Horry County. There the county's zoning code has no short-term rental rule. A home's HOA rules may still not allow nightly stays." A link sends North Myrtle Beach and Conway to /invest/str-rules/. The FAQ answer has the county line. |
| "nightly rent" | "a nightly rental's income" |
| Vacancy margin missing | "give or take about 3 points" added |
| Tile drops "Myrtle Beach" and "marked" | "Myrtle Beach oceanfront condos: 95% marked nightly" |
| Manager H3 | "What does an Airbnb manager cost in Myrtle Beach?" |
| Byline date | Lead (NEEDS 13). |
| Lodging tax FAQ said the rule twice | One statement: "No. South Carolina charges its 7 percent state tax only on stays under 90 days, plus local taxes." Then the two exceptions. |
| Credits note repeats | Replaced in the spec with "Our crops keep the photo's CC BY-SA 4.0 license." (ShareAlike needs the license line). NEEDS 19. |
| critic.mjs counting | Tool note, NEEDS 18. |

## Reader

| Finding | What I did |
|---|---|
| Blocking: nothing for an owner who hires a manager | New row 35. "With a full-service manager at 40 percent, the owner of the two-bedroom booked 124 nights keeps less than with a lease. To keep as much as with a lease, guests have to book it at least about 135 nights a year." This is a lower bound that holds on any base. The exact figure waits for owner question 1 (NEEDS 20). The calculator has a "Manager's share of the nightly rate" box. A line says what running it yourself means: you, or people you hire for each job, take the bookings, answer guests, send the cleaner and arrange repairs. The basic plan line adds "and you still arrange the cleaning and repairs". The FAQ gives "at least about 135". |
| Blocking: which line is mine; "middle" both wins and loses | The chart's bars are now "Airbnb booked a third of the nights in the year" (124 nights) and "the middle two-bedroom listing". The break-even text says "booked as often as the middle Myrtle Beach listing, a third of its open nights". It gives why many fall short, with new row 34: "About four listings in ten are open to guests nine months a year or less, and about one in five was booked 30 nights or fewer". The nights table shows each step from 60 to 150 nights. |
| Blocking: lease figure and vacancy; HUD rent against oceanfront | "Our lease figure allows one empty month a year. [vacancy, with its margin] Each extra empty month costs you about $1,500 of rent." Then "The lease figure uses HUD's standard two-bedroom rent for the whole metro area. For an oceanfront unit, put its own rent in the calculator below." The lease bar reads "11 months at $1,504". |
| Blocking: "overlay" unexplained; NMB, Conway, Carolina Forest | The overlay sentence is cut (row 18 stays STRUCK). Carolina Forest has its county line (row 36). North Myrtle Beach and Conway go to the town-by-town page. |
| Lead says "it depends" | Dek and short answer rewritten (above). |
| Column mixes nights and dollars | Column "what comes in": "about 124 nights at $252", "11 months at $1,504", "$20,100 of bookings and fees". |
| Too many numbers | "4.7" is gone from the prose ("about 17 stays of four or five nights"; calculator "Stays of average length"). January 2026 and the jobs figures are cut. |
| Chart notes | Both cut to a source line and one sentence. |
| Any-size month chart against a two-bedroom lease | Kept. The title says "the average Myrtle Beach Airbnb ... against a two-bedroom lease". AirROI publishes month figures for all sizes only. |
| Two July numbers | "In July the average listing takes in about $6,800, and its owner keeps about $4,200 of it." |
| Jargon | "snowbird", "overlay", "condotel", "the kind Fannie Mae buys" and "hotel services" in the plain sense are gone. The rental pool line: "requires owners to rent through a shared rental pool, or that offers hotel services such as a front desk". "Residential Multifamily Visitor zone" is kept: it is the zone's name. |
| What the 75 percent means | Tail: "Only that 75 percent counts toward the income the loan is based on." |
| HOA fee, furnishing, permit cost, filings | No verified row gives an HOA fee (row 26 STRUCK), a furnishing cost (owner question 3) or a permit amount (row 23). Furnishing: "We price the furniture and photos for the unit you pick." Filings: the str-rules link. |
| 40 to 60 percent seems high | Row 19, the owner's observed range, verified against str-market.json. Kept as "in what we have seen". |
| Map | Not added. The areas are in the count chart; a map is a larger build for the lead to weigh. |
| Dates | NEEDS 13. |
| Generic pros/cons | One Airbnb pro cut (July moved to the month section). Each lease pro is literal. A one-line opener sums up both. |
| Story lacks bedrooms and who manages | "He now helps manage fourteen units" (the bank's summary). The bank gives no bedrooms, so none are added. |

## Owner's eye

| Finding | What I did |
|---|---|
| FIG-5 "Where you buy can decide first." | "Not every home may be rented by the night." |
| FIG-4 "82 Nights to Win" | Title: "Airbnb vs Long-Term Rental, Myrtle Beach: 82-Night Break-Even" (61 characters). The description and H2 say "match a lease", not "win" or "beat". |
| FIG-3 a lease or night acting | The owner is the actor: "you keep ... with the lease", "the owner of ... keeps", calculator rows "You keep with the Airbnb" and "You keep with the lease", month key "Lease: about $1,270 a month to the owner", "In four winter months you keep less than with a lease." "Summer pays", "A busy listing does far better" and "One friend of ours shows" are gone. |
| FIG-4, FIG-7 "holds", "sit", "the listing agent's word, not the city's", "Which way should your home run?" | All gone. "A listing's mark is what the listing agent entered." Final band: "Should your home be an Airbnb or a lease?" |
| SHAPE-2 "So the 12 bars..." and the first chart note | Both captions cut to a source line and one sentence. |
| Short answer gives two answers | One answer with one number each way (above). |
| Repetition | Counts above. The FAQ answers now carry new facts: the county zoning, the 135-night manager figure, the manager range under "Does Chapter3 manage rentals?" and a different break-even framing. |
| Jobs section | Cut. |
| Overlay sentence | Cut. |
| Managed break-even | Row 35 lower bound and the calculator box. The exact figure waits for owner question 1. |
| "We count the insurance here, not the furniture." | Con: "You furnish it, with photos, before the first guest, and you buy a short-term rental insurance policy." Tail: "We price the furniture and photos for the unit you pick." This is the reviewer's suggested wording. It promises a service, so the owner should approve it. Owner question 3 still has no figure. |
| Story without tension; label drift | It is now an example beside the top-quarter figure (row 30 requires that placement): "An example from a friend of ours..." plus "He now helps manage fourteen units." The bank's full label "his real numbers, from a real story, not a promise" fails `build.js audit` (punch rule on "real story"). The page uses "His real numbers, not a promise.", the bank's words less the banned phrase. NEEDS 16. I added no tension, because the bank has none and a story may not gain a detail. |
| Federal tax and must-answer 7 | New row 37 (26 CFR 1.469-1T, read today), under the H3 "What taxes apply to each?". A lease is a rental activity, so for most owners its losses are passive. A home whose average guest stays seven days or less is not one, and the average Myrtle Beach stay is under five nights. A link goes to /invest/str-tax-treatment/. |
| Overlay limits on long leases (must-answer 2) | Still STRUCK (row 18). The page no longer implies every oceanfront condo can choose either way. |
| Pros card, hero tiles | Fixed (see Critic). |
| Byline date | NEEDS 13. |
| "4.7" | "four or five nights" |
| "snowbird rental" | "Some owners rent the winter as one stay of 90 days or more." |
| Listing strip | NEEDS 11. |
| Tighter photo crop | Not changed. The crop is set in `photos.json` and the shared photo kit. At 390 the towers fill the lower half and the caption names them. Left for the lead. |
| Footer idiom | NEEDS 17. |

## Where I did not follow a finding

- **Story label wording.** The bank's full label fails the website build, and the website's rules win. The page uses the closest wording that passes (NEEDS 16).
- **Story tension.** The bank has no tension, and adding a detail is not allowed.
- **Map** (reader nit) and **tighter photo crop** (owner's-eye nit). Both are left for the lead. Neither is a truth or rule problem.
- **Month chart is any size** (reader nit). AirROI's month figures cover all sizes only. The title says so.
