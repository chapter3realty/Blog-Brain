# Review round 1: /submarkets/myrtle-beach/market-common/

Fixed 2026-11-08 in `specs/market-common.js` only, then rebuilt. New facts are ledger rows 37 to 43 (VERIFIED-BY-FIXER), with their sources saved under `data/2026-11-n/submarkets-market-common/raw/sources/`, `hood-details.json` and `images/amenity-tiles/`.

## What changed, finding by finding

### Critic (blocking)

1. **Price table cut off at 390 and 320.** The table is gone. Each neighborhood's price is now one line in the neighborhood list (a plain list under thin rules), so nothing can clip on a phone. Owner reviewer and reader asked for the same fix.
2. **Sideways scroll at 1024.** Added `@media (min-width:980px) and (max-width:1099px){header nav.primary{gap:2.4rem!important}}`, as in pawleys-island.js. critic.mjs at 1024: 0 blocking.
3. **Listing count with no day.** The sentence now reads "On November 8, 2026, 66 homes were for sale in the area: 43 houses, 20 townhomes, 2 condos and 1 lot." The date comes from `listings-findings.json` (`pulled`), not typed. A new offer box under it: "Get today's count of homes for sale ... Have us run the count again". It also fixes the reader's "66 does not add up" note.

### Critic (nits taken)

- #flood wall: the 38 / 14 / 10 split is a three-line list under a thin rule.
- Hero tile "Homes at high flood risk 2%" is now "High flood risk: 62 homes", the same length as the others.
- Noise map: its left edge moves in 80 px on wide screens so it sits centered in the 720 px column. "Atlantic Ocean" label moved inside the frame.
- AE sentence: "At all 62, a big flood can bring rising water, but not ocean waves." (score.js P6 refuses the term "zone AE" in prose.)
- Walk sentence: the measure is now last ("measured from the middle of those streets to Valor Park"). A bracketed version failed the site audit.
- Card copy "One resold for about $525,000 at the middle" is now "A house here resold for about $525,000, the middle price."
- Belle Harbor noise line now names the part the ledger groups: "In Belle Harbor and the Sanctuary section of Withers Preserve, at the west end, the nearest is about 1.8 miles" (ledger row 8 note: Sanctuary is in the Clemson Tract part).
- Compare cell "Valor Park is here" is now "Starting point".
- FAQ "What was The Market Common before?" and "How far ... from the beach?" removed; the page has its own sections for both.
- Noise map note is now "The shaded area covers both the airport's map for today and its forecast for 2038. We traced it from the airport's drawing, so its edge is close but not exact."
- Offer button "Have us price a Market Common home" removed with the seller box; the prices box now serves buyers.
- S8 (no inbound link) stays the lead's job: NEEDS.md items 1 and 16.

### Reader (blocking)

1. **What the homes are like.** The house card now says a typical house for sale has 3 or 4 bedrooms and about 2,190 square feet; the townhome card says 2 or 3 bedrooms (row 42). Each neighborhood has its own line: homes, lot size (row 41), its pool or clubhouse (row 40), and its price. The hero caption no longer says the pictured homes are not for sale. No photo of a house for sale exists yet; shot-list.md shots 1 and 2 are still open.
2. **Is Cresswind age-restricted?** Now stated plainly in the Cresswind line, a paragraph and a new FAQ: Kolter Homes built it as what it called an active adult community, aimed at older buyers; its word was "age targeted", which is not the same as limited by age; its rules on who may buy or live there are not published online, and we read them for any Cresswind home. (Row 39, Kolter's 2012 and 2013 pages.)
3. **Two townhome prices.** Explained once, in the prices section: "about $375,000 across the whole area. In the town center it was about $400,000, and in Emmens Preserve about $380,000." The hero no longer carries a townhome price. The townhome card names the town center figure as the town center's.
4. **The EPA award raised a worry and left it.** The award line is gone. "What was The Market Common before?" (now last) says what the Air Force reported in 2019: 229 cleanup sites closed, 15 still open (old landfills and groundwater sites), every site being cleaned up to the standard for homes, and no limit on the soil or groundwater that rules out homes (row 43, AFCEC).

### Reader (nits taken)

- One flood figure: "62 homes" everywhere; the comparison now prints "62 of about 2,480 (2.5%)" so the houses-only share shows its count.
- West Lake and Sweetgrass Square are now named on both maps and in the neighborhood list.
- Rental FAQ answers first: "Only in the town center."
- History timeline cut (dates now: 1993, 2008, 2019, 2038 and the listing day).
- Decibel mechanics cut ("counts every sound from 10 p.m....").
- "insurance" now links to /buyers/coastal-insurance/.
- "at the middle" is now "the middle price" or "a typical house", with one plain line: "half sold for less and half for more".

### Owner reviewer (blocking)

1. **Leads with price.** Hero chips are now about the place: about 17 places to eat and drink, a farmers market on Saturdays, the beach about 5 minutes by car, 62 homes at high flood risk. The first short-answer paragraph is the town center and the beach; prices moved to the second paragraph.
2. **History lesson first.** The section is now last, two sentences plus the cleanup facts and the Warbird Park jets. The timeline, the jobs figure, the back gate and the EPA award are gone.
3. **Neighborhoods were names and counts.** Each main neighborhood now has a line: what kinds of homes, lot size, amenities seen on the 2023 aerial (Cresswind's clubhouse, pool, tennis and pickleball courts and lake path; pools at Emmens Preserve, Belle Harbor, Balmoral, Park Place and The Reserve; Emmens Preserve's park with a pavilion), and price. Cresswind is described as Kolter's active adult community. **Not done as asked:** "state that Cresswind is age-restricted". No primary source says so: Kolter's own word was "age targeted", directory sites disagree, and the covenant is not online (ledger Not verified 3). The page states what the builder said and that we read the rules for the home. Saying "age-restricted" would claim a fact we cannot show. "When built" is given only where a source has it (the town center 2008, Cresswind from late 2012); the county parcel layer has no year built (Not verified 6).
4. **Life is thin and late.** "What is it like to live in The Market Common?" is now the first section: restaurants and shops named from the town center's own directory, the movie theater, Barnes & Noble, bowling, the children's museum, the parks, and "A normal week at the town center" (movie Mondays, trivia Tuesdays and Thursdays, e-bike tours, the Saturday farmers market, live music, Art in the Park in April and November; rows 37 and 38). Tables trimmed from five to three (the 11-row price table is gone; the walk chart stays as a chart).
5. **Airport noise in technical terms.** Opens "You will hear planes here, because the airport's runway runs along the town center's east side. Even so, no home in The Market Common is inside the area the airport's own map marks as too loud for homes." The decibel mechanics are cut; "65 decibels" stays once, in the map key, for anyone who wants the measure.
6. **Price table cut off on a phone.** Removed (see critic 1).
7. **Numbers without meaning; two flood figures; five townhome prices.** The main-home share now says what it means: "Most neighbors live here all year ... so more of those homes are second homes or rentals." One flood figure (62 homes). Townhome prices explained in one place. P2 is 6.2 numbers per 100 words (was 6.3); every number left answers a buyer's question.
8. **Hero photo shows homes you cannot buy.** Caption is now "A corner of the town center, with shops on the ground floor." It no longer contradicts the page. The neighborhood photos still wait on the photo partner (shot-list.md 1 and 2).

### Owner reviewer (nits taken)

- Filler cut: "Each kind of home costs and feels different here." and "Water can still reach a home outside the zones."
- "On foot it is about 45 minutes" appears once (FAQ entry removed).
- Buttons, all different: "Have us send the list", "Have us find Market Common houses", "Have us find Market Common townhomes", "Ask about Market Common condos", "Have us run the count again", "Have us check a home", "Have us set up showings", "Send us your wish list".
- Moderate zone explained: "where a lender does not require flood insurance."
- Rental FAQ plainer, answer first.
- Carolina Forest drive cell reads "About 25 min, to its public library".
- IDX feed key: NEEDS.md 15. Header overflow: fixed on the page (NEEDS.md 17).

## Findings not taken, and why

- **Critic: Grand Park lake photo is dim.** True, and true to its caption. It is the only free-licensed lake photo; shot-list.md 4 asks the photo partner for a morning shot.
- **Owner: put the neighborhood map or walk list beside its paragraphs on wide screens.** The lake photo now sits beside the life section's paragraphs. The map and the chart stay full width: the map's labels need its width to stay readable.
- **Critic: 320 px read.wall on the short answer.** It is the short answer (critic agreed it is acceptable).
- **repeat-check strict: one "identical but for names and numbers" pair** in the phone version of the comparison ("Houses in a high-risk flood zone: 62 of about 2,480 ..." / "13 of about 7,920 ..."). It is a parallel three-item comparison; the same wording is the point.

## Gates after the fix

- mkpage: builds.
- build.js audit: no error on this page except the lead's two (missing from sitemap.xml; orphan).
- build.js check: only the sitewide footer-partial line (NEEDS.md 12).
- score.js (SCORE_TODAY=2026-11-08): 96/100 (SEO 92, AEO 100, Human 96, Trust 100). Fails only S8 (inbound links, the lead's). P2 at 23 percent.
- claims-scan: 0 findings. facts-check: nothing on this page (the WRONG lines are other pages). struck-check: clean (one struck phrase, "helicopter tours", was caught and changed to "helicopter flights"). house-claims: 0. site-audit: only inbound and sitemap (the lead's).
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 2 warnings at 320 (the short answer and #flood paragraphs). Shots in `wfn/submarkets-market-common/shots2/`; I looked at 390 and 1440 in full.
- ogcard.js failed with a browser network error; the page uses its hero 16x9 photo as its share image (S5 passes).
