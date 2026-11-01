# Plan: /buyers/va-loans/

Batch 2026-11-a, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (40 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-11-a/buyers-va-loans/`. Spec to write: `specs/va-loans.js` (none exists; the live page is hand-made, so this is its first spec).

## The reader and their job

A veteran or service member, often moving here or retiring here, who already knows the VA loan in general. They typed "va loan condo approval list", "va loan myrtle beach", "va loan second home" or "sc disabled veteran property tax exemption". A smaller group: a seller deciding whether to take a VA offer.

Their job, in one verb: **qualify the home**. Can I use my benefit on the place I want here, and what does it save me? Then: pick homes that work, and line up the tax exemption.

What they want first: whether the beach condo they picture works with VA. What they already know: no down payment, no PMI. What they do not know: that the VA keeps its own condo list, how few oceanfront towers are on it, what share of houses here take VA, and what South Carolina's exemption is worth in dollars. What worries them: falling for a home they cannot buy with the benefit; an appraisal that kills the deal; filing the exemption wrong. What they ask next: show me homes that take VA; is this building on the list.

## The deciding fact (checked first)

A VA loan on a condo needs a VA-accepted project (row 1: 38 CFR 36.4347(c), VA purchase page). Checked against the VA's own report for Horry County (row 2). This makes the condo question the spine of the page: 176 condo communities are accepted, about 20 times FHA's 9 (row 3), but only 2 of the 29 oceanfront resort towers in our directory have an accepted project on file (row 5), and only 3 in 100 oceanfront-building condos for sale are marked VA (row 6). Houses are the opposite: about half take VA (row 8).

The second fact that changes the page: South Carolina's disabled-veteran exemption is filed with **SCDOR, after** the county grants the 4 percent rate (rows 23, 24). The live page told readers to apply at the county auditor. That is wrong and is struck.

## The findings no other site has

1. **The VA condo count for Horry County, against FHA's** (rows 2, 3): 176 VA-accepted condo communities vs 9 FHA. Nobody publishes this comparison for the Grand Strand. The bar for the VA buyer is lower than most people think, except at the beach.
2. **Our oceanfront directory matched to the VA list** (row 5): 2 of 29 towers. With the live-listing share (row 6, 31 of 1,088), the reader learns the real pattern: VA works for villas, golf condos and townhomes, rarely for oceanfront resort towers.
3. **Who takes VA, by town and price, counted from today's listings** (rows 8 to 10): 2 in 3 houses in Conway and Longs, 1 in 4 in North Myrtle Beach; 7 in 10 new houses.
4. **The disabled-veteran exemption in dollars, by town** (row 27): $1,470 to $2,610 a year on a $400,000 county value, from the 2026 levy, on the same model and value as /buyers/property-taxes/.
5. **The appraisal in local context** (row 20): 14 in 100 Horry homes are older than 1980, against 48 in 100 nationally, so the older-house appraisal items are rarer here.
6. **Drive times to the VA clinic from nine towns** (row 31), measured.

## What the live page has worth keeping

- The H1 frame the owner liked (`data/headlines.json`): line 1 "VA loans in Myrtle Beach:". Line 2, "what the VA appraisal checks here.", promises an appraisal checklist that the ledger cannot back yet (the VA handbook's Chapter 12 could not be read; facts.md Not verified). Use line 2 **"which condos and homes qualify."** and the title **"VA Loans in Myrtle Beach: Which Condos and Homes Qualify | Chapter3"** (62 characters). If the verifier reads Chapter 12 and the checklist goes in, the old line 2 can come back. Proposed in PROPOSED.md so the headlines file stays in step.
- The homes feed already set for the page (`idx-lib/feeds.js` VA_FEED: "3+ bedrooms under $400,000, and the seller takes VA", Myrtle Beach, Conway, Little River, Longs). It fits the finding: the middle VA-marked house is $350,000 to $400,000 (row 9) and inland towns lead. Keep it; one link to the full VA search (`/homes/map/?has=va_accepted`).
- True facts it had, now on rows: no down payment, no PMI, the funding fee waiver for disability compensation (row 15), reuse (rows 14, 21), Palmetto Heroes closed for 2026 (row 33), condo approval needed (row 1).
- The service sentence "We check VA condo approval status on every building we show to veteran buyers." Keep as a service statement, said once, in the condo section.
- The BrickWood paragraph and the inline disclosure: keep only if the body names BrickWood. Proposal: say "our preferred lender" and do not name BrickWood in the body, so no inline AfBA block is needed (PLAYBOOK A16; footer carries it).
- Links: /buyers/closing-costs/, /buyers/relocating/, /buyers/. Add /buyers/programs/, /buyers/property-taxes/, /invest/condo-buildings/, /buyers/coastal-insurance/, /buyers/retirees/, /buyers/new-construction/, /invest/non-warrantable-condos/.
- No calculator, no real story about a VA buyer, no verified number worth keeping as written.

## What must not survive (judge, rules)

- The dead "Coming soon" search box, the orange band and the empty strip before content; the FAQ and "Mistakes" block above the article. The condo answer given twice.
- "Competitive interest rates ... the rate is usually strong"; the DPA "rate impact" mistake; any rate; any funding fee percentage or down payment percentage (Reg Z; PLAYBOOK A14, A17).
- "Many Grand Strand buildings already hold approval" (replaced by rows 2 to 6), "the military community around Market Common uses them heavily", "significant and growing military retiree population", "VA medical facilities at SC bases are close", "Shaw ... Fort Jackson ... Beaufort" (true but not this reader's need; no row).
- "apply through the Horry County Auditor's office" (wrong, row 24). "This application is easy to complete but is missed by many buyers" (no source).
- "We word the contract so the VA appraisal ... protects the deal" (a legal-work claim with no source; say what we check instead).
- The 13.6 px disclosure line, and the 1,248 px wall in the veterans section on a phone.

## The shape

Kind: **decision guide built on a rule** (CRAFT 3; "Page shapes" sections 5 and 9). The main relation is a condition: if the home is a house, usually yes; if a condo, only if the project is on the VA's list; if a beach second home, no. Dominant visual: one decision table near the top ("The home you want / Can you use VA? / What we check"), then the evidence charts. The tax exemption is a second rule with its own small table and numbered steps.

Wrong-shape checks: the page does not open with what a VA loan is (the reader knows); the national basics are one compact block, late; every number is stated once; the steps for the exemption are numbered; the page says plainly who it does not fit (beach second home, rental, a tower not on the list).

## Sections, in order, with what each proves

0. **Hero.** H1 (two lines above), byline, short answer under 90 words: "Yes. About half of the houses for sale here take VA, and the VA has accepted about 175 condo communities in Horry County. The catch is the beach: only 2 of the 29 big oceanfront resort towers we track have a VA-approved project. A 100 percent permanently disabled veteran also pays no property tax on the home, worth $1,470 to $2,610 a year on a $400,000 home." Key-facts row with words (icons.js chips): "About 1 in 2 houses take VA", "176 condo communities approved", "2 of 29 oceanfront towers", "$1,470 to $2,610 a year in tax saved", "12 minutes to the VA clinic from Myrtle Beach". Slim offer bar under it. Rows 2, 5, 8, 27, 31.
1. **"Can you use a VA loan on the home you want here?"** The decision table, 6 rows: a house; a townhouse; a condo in a villa or golf community; an oceanfront resort condo; a beach second home or rental; a 2 to 4 unit house you live in. Columns: usually / what decides it / what we check. Rows 1, 5, 6, 8, 12 to 14. Proves the whole page in one screen.
2. **"Which condos in Myrtle Beach are VA-approved?"** (the top search). First sentence: the count and the FHA comparison. Then the oceanfront pattern (rows 5, 6), the chart "Share of homes for sale marked as taking VA, by kind of home" (`chart-va-by-kind.json`: houses 52, townhouses 46, all condos 9, rental-program condos 4, oceanfront-building condos 3), and what happens if a building is not on the list (row 4: reviews happen; 27 finished in a year). Service line: we check the VA list for every condo before a VA buyer writes an offer. Name only Beach Cove Resort and the Renaissance Tower at Myrtle Beach Resort as on the list (row 5), and Seagate Village as on both lists (row 38). Link /invest/condo-buildings/ and /invest/non-warrantable-condos/. Photo: oceanfront row (partner shot 1); stand-in none (no free photo of a named tower is needed; do not use a building as a decorative image).
3. **"Do sellers in Myrtle Beach accept VA offers?"** Bar chart by town (`chart-houses-by-town.json`), sorted, each bar labelled "Conway 2 in 3"; one sentence on price (`chart-houses-by-price.json`: highest at $250,000 to $300,000, 1 in 4 above $1 million); new homes 7 in 10 with the owner's builder-incentive line (row 10); flood-zone line (row 10b) with a link to /buyers/coastal-insurance/; assumable loans are rare: 18 homes (row 11). Then the homes feed (VA_FEED). Method in the sources line: the MLS financing field, one day's listings, a listing without the flag may still take VA.
4. **"Can you buy a beach house or a rental with a VA loan?"** No, unless you live there: the certification (row 12), "most lenders require you to move in within 60 days" (row 13, owner's words), up to 4 units if you live in one (row 14), and why a house with a long lease is hard to buy (row 13). Short.
5. **"Do disabled veterans pay property tax in South Carolina?"** First sentence: a permanently and totally disabled veteran pays none on the home, up to 5 acres, and two cars (rows 22, 23). Table "What the exemption saves a year on a $400,000 home" by town (row 27, `findings.json` exemption_example). Numbered steps (rows 23 to 26): 1) the 4 percent legal residence with the Horry County Assessor; 2) the certificate from the Horry County Veterans Affairs Office in Conway (row 25) or the VA, not the rating letter; 3) apply to SCDOR in MyDORWAY (Form PT-401-I) with the recorded deed; 4) a new rating counts for the whole year, and up to two years back. Then "Rated below 100 percent?" with the Homestead Exemption at 65 (row 28). Links /buyers/property-taxes/. We-do-the-work line: we set the 4 percent application in motion at closing and give the veteran the checklist (service statement only; no claim we file with SCDOR).
6. **"What does the VA appraisal check here?"** The loan cannot exceed the appraised value (row 17), what that means at the offer, and the local context chart: homes built before 1980, Horry 14 in 100 vs US 48 in 100 (row 20). The MPR checklist only if Chapter 12 is verified (Not verified). Photo: a 1970s to 1980s ranch house (partner shot 3) only if the checklist goes in.
7. **"What will a VA buyer pay at closing?"** Funding fee: who pays none (row 15), the refund (row 16), only the fee can be rolled in (row 15). Seller can pay the closing costs; 4 percent cap on other concessions (row 18). Link the VA's funding fee chart and /buyers/closing-costs/. No percentages.
8. **"Where is the VA clinic in Myrtle Beach?"** The clinic (row 30), our map (area-map.js `regionMap` of places: the clinic and nine towns, numbered, with the measured minutes, row 31) and the drive to Charleston (row 32). Then the community in numbers: about 30,000 veterans, 9 in 100 adults (row 29); the base closed in 1993 and Warbird Park's Wall of Service (row 37); military retirement pay is not taxed by SC (row 35), link /buyers/retirees/. Photo: public-domain 1985 USAF aerial of the base, or the 2006 CC0 photo of the former base operations building (below), captioned with row 37's fact only.
9. **"Who qualifies, and how much can you borrow?"** One compact block: COE service minimums (row 36), no limit with full entitlement (row 21), the $832,750 county figure for a second VA loan (row 21b), no VA credit-score minimum, SC Housing's 640 (row 19), Palmetto Heroes closed for 2026 and the year-round SC Housing route on /buyers/programs/ (rows 33, 34).
10. **FAQ (open text, not repeating the sections):** What rate will I get (the lender quotes it; we do not); Can I have two VA loans (row 21b); Can a Guard or Reserve member use it (row 36); Can I use VA on a manufactured home or a new build (row 14); Does a surviving spouse keep the tax exemption (row 22); Does the VA require flood insurance (row 10b).
11. **Final offer box:** "Send us the building or the house. We check the VA list and the listing's financing before you tour." Same box component as the top bar.

Sources line under the page: the VA condo report and HUD's list (dates read), the CRM counts (MLS financing field, one day), the 2026 levy, ACS 2024, OSRM free-flow.

## Visuals

| Visual | Built from | Notes |
|---|---|---|
| Key-facts chips | rows 2, 5, 8, 27, 31 | tools/icons.js, glass style |
| Decision table | rows 1, 5, 6, 8, 12 to 14 | cards on a phone |
| Bar chart: share marked VA by kind of home | `chart-va-by-kind.json` | 5 bars; label each "1 in 2", "3 in 100"; one colour, the oceanfront bar marked |
| Bar chart: houses marked VA by town | `chart-houses-by-town.json` | sorted high to low; mailing-city note in the source line |
| Small table or bar: by price band | `chart-houses-by-price.json` | may be one sentence instead if the page runs long |
| Table: tax saved a year by town | `findings.json` exemption_example | 6 rows; rounded to $10 |
| Numbered steps: the exemption | rows 23 to 26 | 4 steps |
| Two-bar chart: homes built before 1980 | `findings.json` year_built_acs2024 | Horry vs US (and SC) |
| Map: the VA clinic and nine towns with minutes | `raw/drives.json`, clinic point from va.gov | tools/area-map.js `regionMap({ name, places })`; Google Maps link to 1800 Airpark Drive |
| Photo, base history | Commons, below | one photo, under its sentence |

Free-licence photo candidates (look at each at full size before use; licence record in `data/photos.json`; files under `chapter3realty/images/2026-11-a/buyers-va-loans/`):

| File | Licence | Author | What it shows | Use |
|---|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Mbafb-1985.jpg | Public domain (USAF) | United States Air Force | Aerial of Myrtle Beach AFB, 1985, 527 x 750 | Section 8, the base. Small; check sharpness at phone width |
| https://commons.wikimedia.org/wiki/File:Myrtle_Beach_AFB_-_Oblique_Airphoto_-_Looking_west_to_east.jpg | Public domain (per Commons; author "Unknown photographer"; verify the template) | unknown | Oblique air photo of the base, 1958, 892 x 604 | Alternative for section 8 |
| https://commons.wikimedia.org/wiki/File:Former_Myrtle_Beach_AFB_Base_Operations_Building.jpg | CC0 | James McAdams | Former base operations building, 2006, 491 x 368 | Too small for a hero; caption only "the former base operations building" |
| https://commons.wikimedia.org/wiki/File:The_Market_Common,_Myrtle_Beach_(December_2023)_01.jpg | CC BY-SA 4.0, credit DiscoA340 | DiscoA340 | The Market Common, 2023, 6000 x 4000 | Only with a caption that says what it shows (the shopping district on the former base) and only if a row supports "on the former base" (not on the ledger now) |
| https://commons.wikimedia.org/wiki/File:F-100F_56-3448_over_Myrtle_Beach_Air_Force_Base.jpg | Public domain (USAF) | USAF | A jet over the base, 1960 | Decorative; skip |

No free photo of the VA clinic was found on Commons (searched). Ask the partner (shot 2).

## Photo partner's shot list

In `shot-list.md`.

## Open items for the builder

- The chart and map numbers come from the data files; none typed.
- The CRM counts are a one-day snapshot (rows 6, 8 to 11). If the build is more than a month later, rerun `pull-listings.py` and `build-findings.py`.
- Row 21b goes stale when FHFA posts the 2027 limits (late November 2026).
- Sibling pages: /buyers/programs/ owns SC Housing and Palmetto Heroes; /buyers/property-taxes/ owns the 4 percent and the millage; /buyers/retirees/ owns retirement income tax; /invest/condo-buildings/ owns building details. This page links each and states only its own angle.
