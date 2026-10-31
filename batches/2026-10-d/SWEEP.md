# Banned-claims sweep, batch 2026-10-d

Scope: every page on the website working copy except the 12 that other helpers are rebuilding (/buyers/programs/, /sell/out-of-state-buyers/, /hoa/special-assessments/, /invest/strategies/dst/, /sell/home-value/, /buyers/first-time-home-buyer-myrtle-beach/, /buyers/new-construction/, /buyers/undisclosed-flooding/, /hoa/hoa-vs-poa/, /hoa/reserves/, /invest/str-vs-ltr/, /invest/str-tools/).

## Counts

`node tools/claims-scan.js <web2>`

| | All pages | Pages in this sweep | The 12 rebuilt pages |
|---|---|---|---|
| Before | 216 (8 critical, 191 high, 17 medium) | 199 (6 critical, 176 high, 17 medium) | 17 (2 critical, 15 high) |
| After | 17 (2 critical, 15 high, 0 medium) | 0 | 17 (2 critical, 15 high) |

The new `top-ranked schools` pattern (below) found 4 more sentences: 3 on /submarkets/carolina-forest/ and 1 in llms.txt. All 4 are fixed and are not in the "before" count.

Checks after the sweep:

- `npm test` in Blog-Brain: every suite prints "all controls pass" (exit 0).
- `node build.js check`: OK, with the same 2 warnings as before.
- `node build.js audit`: 2 FAIL, both on /invest/rental-returns/. Its dates were reset when the page was rebuilt from its spec. mkpage writes the publication date as the update date, and `node build.js dates` sets the right one. The lead runs that at the end. Before the sweep, audit passed on a clean checkout of HEAD. The only other change in its output is reading-level and near-duplicate numbers that moved by 1 point.

## How each kind of page was changed

- Hand-made pages: the HTML was edited directly, including meta, og, twitter and JSON-LD.
- /invest/rental-returns/: `specs/rental-returns.js` was edited and rebuilt with `node tools/mkpage.js`. The rebuild also picked up changes the generator made since the page was last built: og image alt text, the Person author in the schema, section ids, and where the CTA sits. It also reset the dates, as noted above.
- Relocating pages: `data/relocating/pages/<page>.js` was edited and rebuilt with `assemble-page.js`. Rebuilding beaches.js with no edits gave a byte-identical page, so these diffs hold only the sweep.
- The listing-search box is in the page chrome on 141 pages, and no partial holds it. The sentence was changed on 129 pages, including both donors that chrome is copied from (`/invest/14-day-rule/` for mkpage and `/buyers/cost-to-own/` for the relocating pages). That way every later rebuild carries the new sentence. The 12 rebuilt pages were not touched (see "For the other helpers").

## Every sentence, before and after

### Every page (listing-search box), 129 pages

- Before: "Live MLS search is launching soon. Set your criteria and we will send matching Grand Strand listings to your inbox, including off-market homes before they hit the public sites."
- After: "Live MLS search is launching soon. Set your criteria and we will send matching Grand Strand listings to your inbox."
- Rule: off-market-promise.

### /

- Team card. Before: "Devin runs the day-to-day operations of Chapter3 Realty and builds the tools on this site for you to use." After: "Runs the day-to-day operations of Chapter3 Realty and builds the tools on this site for you to use." This is the same shape as Tim Nash's card ("Over 30 years selling..."). The name and title above the bio stay (see the narrowed pattern below). Rule: individual-named.
- Testimonial removed, the third of five. "They flagged active building permits and a development two streets over that no other agent mentioned. We bought knowing exactly what was coming." Relocated from Ohio, five stars. Its comparison with other agents has no source, and audit C-H2 (where each testimonial came from) is still open with the owner. A customer's words cannot be rewritten, so the card was removed and the carousel relabelled from "of 5" to "of 4" (slides and dots). The carousel script counts the slides itself. If the owner has the source, the card can come back with first name, town and year. Rule: superlative.

### /about/

- Team card: the same bio change as on /. Rule: individual-named.
- "30+ years on the Grand Strand under our Broker-in-Charge." Then, before: "We have closed in every submarket from Little River to Pawleys Island." After: "Every one of those years was in this one market." The new sentence repeats the fact already in Tim Nash's bio on the same page ("Every year of that experience is in this one market"). Chapter3 was formed in 2026, so "we have closed" could not be true. Rule: firm-experience.

### /buyers/

- og:description and twitter:description. Before: "Buy a home in Myrtle Beach with a brokerage that has its own lender and 18 years of local loan data. Know what to check before you make an offer." After: "Every guide for buying a home in Myrtle Beach, in one place. Know what to check before you make an offer." Rules: financing-as-service, firm-experience.

### /buyers/buying-in-myrtle-beach/

- Meta description, og, twitter and the Article JSON-LD description. Before: "Buying a home in Myrtle Beach? See real price trends, off-market listings, and what sellers hide. ..." After: "Buying a home in Myrtle Beach? See real price trends, new-listing alerts, and what sellers hide. ..." Rule: off-market-promise.
- Hero form title. Before: "Get off-market listings". After: "Get new listings by text".
- Hero form text. Before: "See homes before they hit the public market. Leave your name and number and our team will reach out." After: "Tell us what you want. Leave your name and number and our team will reach out when a home fits."
- Form thank-you. Before: "Thanks. Our team will reach out with off-market listings shortly." After: "Thanks. Our team will reach out shortly."
- Final CTA button. Before: "Get Off-Market Listings". After: "Start my search".
- FAQ answer, visible and in the FAQPage schema. Before: "That mix of honesty and local depth is why buyers often say Chapter3 Realty is the best brokerage to buy a home from." After: "We do that work before you make an offer, not after." Rule: superlative.
- Not changed: the form's internal CRM labels in the script ('Off-market listing alert request', 'Off-Market Alert Form'). No reader sees them, and the CRM may route on them. The owner can rename them in the CRM and the page together.

### /buyers/common-mistakes/

- Before: "Your agent costs you nothing in most transactions. Seller compensation covers the buyer agent fee in the majority of Myrtle Beach closings. Get your own representation." After: "Who pays your agent is written in the agreement you sign, and it is negotiable. Sellers often agree to pay it, but you may owe part or all of it. Get your own representation." Rule: agent-free. The "majority of closings" figure had no source and was cut.

### /buyers/relocating/ (visible text and the FAQPage schema)

- Before: "Carolina Forest is the most popular landing spot for families relocating to the Grand Strand. It has the best schools in Horry County, approximately 30 sub-neighborhoods across a range of price points, and an active resale market." After: "Carolina Forest is the town relocating buyers ask about most. It has approximately 30 sub-neighborhoods across a range of price points and an active resale market." Rule: fair-housing.
- Before: "A zip code that looks average in the statistics may contain a top-rated school district, a golf-cart-friendly community, or a high-performing STR corridor." After: "A zip code that looks average in the statistics may contain a golf-cart-friendly community or a high-performing STR corridor." Rule: fair-housing.
- Before: "The town most relocating families tour first has its own guide: Carolina Forest." After: "The town most relocating buyers ask about has its own guide: Carolina Forest." Rule: fair-housing.

### /buyers/retirees/

- Before: "Plenty of the area suits retirees without the age restriction, and some of our retiree buyers are happier in Pawleys Island or Murrells Inlet..." After: "Most of the area has no age restriction, and some of our retiree buyers are happier in Pawleys Island or Murrells Inlet..." Rule: fair-housing.

### /guides/

- Before: "City income taxes end, the car tax is new, and what surprised Devin." After: "City income taxes end, the car tax is new, and what surprised one of our team." Rule: individual-named.
- Before: "The biggest master-planned community: top schools and new construction." After: "The biggest master-planned community: new construction and no city tax." Rule: fair-housing.

### /submarkets/

- Before: "The biggest master-planned community: top schools, new construction, long-term rentals." After: "The biggest master-planned community: new construction, no city tax, long-term rentals." Rule: fair-housing.

### /submarkets/carolina-forest/

- Meta description, og and twitter. Before: "... 26,000+ residents, medians near $418K-$465K, top-ranked schools, and no city tax." After: "... 26,000+ residents, medians near $418K-$465K, eleven subdivisions, and no city tax." Rule: fair-housing (new pattern).
- Hero sub. Before: "... 26,000+ residents, eleven subdivisions, the county's flagship school zone, no city tax, and no wind-pool insurance surcharge." After: "... 26,000+ residents, eleven subdivisions, no city tax, and no wind-pool insurance surcharge."
- Before: "The draw is a combination of five things: the county's flagship school zone, twenty years of continuous new construction, single-family prices well below beach product, and no municipal millage. Insurance is standard homeowner coverage..." After: "The draw is a combination of four things: twenty years of continuous new construction, single-family prices well below beach product, no municipal millage, and simpler insurance. Insurance is standard homeowner coverage..." The old sentence listed four things after "five"; the count is now true.

### /submarkets/surfside-beach/

- Meta description and Article JSON-LD. Before: "Surfside Beach, SC real estate: family-friendly beach home prices, rental income, and the value this quieter oceanfront town offers buyers and investors." After: "Surfside Beach, SC real estate: beach home prices, rental income, and the value this quieter oceanfront town offers buyers and investors."
- og and twitter. Before: "Surfside Beach, SC real estate guide: family-friendly home and condo prices, rental income, ..." After: "Surfside Beach, SC real estate guide: home and condo prices, rental income, ..." Rule: fair-housing.

### /why-chapter-3/

- Before: "Instant rent, return, cap rate, and vacation-rental analysis on any Grand Strand address. No other local brokerage offers this." After: "Instant rent, return, cap rate, and vacation-rental analysis on any Grand Strand address." Rule: superlative.

### /invest/

- Meta description, og and twitter. Before: "Myrtle Beach investment property analysis: free DSCR estimates, STR and long-term rental data, and off-market deals from a data-driven Grand Strand team." After: "Myrtle Beach investment property analysis: free DSCR estimates, STR and long-term rental data, and submarket research from a data-driven Grand Strand team." Rule: off-market-promise.
- Hero. Before: "Investment property in Myrtle Beach with the numbers run first: long-term and short-term rental analysis on live data, submarket research, and DSCR, condotel and non-warrantable condo loans through BrickWood Mortgage." After: "Investment property in Myrtle Beach with the numbers run first: long-term and short-term rental analysis on live data, submarket research, and the DSCR coverage numbers a lender will ask for." Rule: financing-as-service. The old sentence also named BrickWood with no inline disclosure.

### /invest/strategies/brrrr/

- Meta description, og and twitter. Before: "... Build a Grand Strand rental portfolio with DSCR financing and local permit data." After: "... Build a Grand Strand rental portfolio using rent, DSCR and local permit data." Rule: financing-as-service.
- CTA button. Before: "Get off-market listings". After: "Send me investment properties". The text above it already says "have us send you an investment property for sale". Rule: off-market-promise.

### /invest/strategies/1031-exchange/

- Before: "We search the Coastal Carolinas MLS and our off-market sources and bring you a short list, usually two or three strong picks and a backup." After: "We search the Coastal Carolinas MLS and bring you a short list, usually two or three strong picks and a backup."
- Before: "We search the Coastal Carolinas MLS and our off-market sources, run the numbers on every candidate, and bring you..." After: "We search the Coastal Carolinas MLS, run the numbers on every candidate, and bring you..." Rule: off-market-promise.

### /invest/rental-returns/ (spec)

- Before: "We send you what fits, including off-market properties that never reach the public sites, with the return run on each one." After: "We send you what fits, with the return run on each one." Rule: off-market-promise.

### /sell/

- Eyebrow. Before: "Talk to Devin Directly". After: "Talk to us directly". The HTML comment "TALK TO DEVIN" became "TALK TO US".
- Before: "Call or text Devin directly. No scripts, no "let me have someone call you." Devin runs operations and pricing, and he is the person who picks up the phone." After: "Call or text us directly. Questions about price are answered by our Broker-in-Charge, Tim Nash." Rule: individual-named. Devin is not a licensee, and pricing belongs to the broker (STANDARD C7).

### Relocating pages (data files, rebuilt)

All rule individual-named. The story bank's limits say to tell these as "one of our team" (stories.json: ohio-move, sunglasses, gas-cheaper, murrells-inlet-team-choice and others). No story detail was added or removed.

- beaches: "Devin brings his dog to the sand..." became "one of our team brings his dog to the sand..."
- cost-of-living: "Devin calls cheaper gas the best everyday change since his own move from Ohio." became "One of our team, who moved here from Ohio, calls cheaper gas the best everyday change since the move."
- from-maryland: "...and Devin, who wrote this page, rides one himself:" became "...and another of our team rides one too:"
- from-ohio, hero sub: "What surprised Devin after he made this move." became "What surprised one Ohio transplant after the move." The first rewrite, with "our team", broke the audit rules for the hero (31 words, and "our"). This one is 29 words.
- from-ohio, H2: "Two things cost more here, and Devin hit both" became "Two things cost more here, and one of our team hit both".
- from-ohio: "Devin, who wrote this page, arrived from Ohio three years ago, ..." became "One of our team arrived from Ohio three years ago, ..."
- from-ohio, H2 and text: "What surprised Devin after the move" / "Devin moved here from Pleasant City, ..." became "What surprised one of our team after the move" / "One of our team moved here from Pleasant City, ..."
- from-ohio, FAQ (visible and schema): "What surprised Devin most after moving from Ohio?" became "What surprised one of our team most after moving from Ohio?"
- getting-around: "One concrete commute, Devin's:" became "One concrete commute, from one of our team:"
- hurricanes: "Devin, who wrote this page, remembers noticing it during Tropical Storm Debby." became "One of our team remembers noticing it during Tropical Storm Debby."
- jobs: "...and Devin's phone held through Tropical Storm Debby." became "...and one team member's phone held through Tropical Storm Debby."
- moving-checklist: "Devin, who wrote this page, moved here from Ohio three years ago, ..." became "One of our team moved here from Ohio three years ago, ..."
- moving-checklist: "Devin lived here more than a year before he learned the decal existed." became "One of our team lived here more than a year before he learned the decal existed."
- weather: "Devin, who wrote this page, moved here from Ohio expecting to leave snow behind." became "One of our team moved here from Ohio expecting to leave snow behind."
- which-town: "Devin, who wrote this page, lives in Murrells Inlet." became "One of our team lives in Murrells Inlet."
- why-myrtle-beach: "...winters mild enough that Devin rides his motorcycle into December." became "...winters mild enough that one of our team rides his motorcycle into December."
- why-myrtle-beach: "Ohio buyers, and Devin is one, tend to name two things first." became "Ohio buyers, including one of our team, tend to name two things first."
- why-myrtle-beach: "Devin's own move, with the vehicle tax..." became "One team member's own move, with the vehicle tax..."

### llms.txt

- Ohio entry. Before: "...the Ohio residency test, and what surprised Devin after his own move." After: "...the Ohio residency test, and what surprised one of our team after the same move." Rule: individual-named.
- Carolina Forest entry. Before: "...medians near $418k-$465k, top-ranked schools, no city tax, ..." After: "...medians near $418k-$465k, no city tax, ..." Rule: fair-housing (new pattern).
- llms-full.txt still has the old text. The lead's `node build.js llmsfull` rebuilds it.

## Patterns changed in rules/claims.json

1. **individual-named, narrowed.** `ignore` gained `\bDevin Day\s*,?\s*Operations Officer\b`.
   - The hit was a false positive. The team cards on /about/ and the homepage show "Devin Day" with "Operations Officer" under it. The /about/ page also has "Devin Day, Operations Officer." in its licences paragraph. /about/ is the url of the schema author (`/about/#devin-day`), so the card is the author note the owner allowed (2026-10-05).
   - His name with his title is now quiet. A sentence about him still fires, and so does a bare "Devin" CTA.
   - New quiet controls: the card as it now reads (name, title, then the bio without his name) and "Devin Day, Operations Officer."
   - New firing controls: the old bio sentence, and "Call or text Devin directly."
   - The rule's "why" says this.
2. **fair-housing, widened.** A new pattern, `\b(?:top|highly|best|well)[- ](?:ranked|rated) schools\b`. The old `top schools` pattern missed "top-ranked schools" in the /submarkets/carolina-forest/ meta description.
   - Firing control: that real meta sentence.
   - Quiet control: the rewritten meta sentence.
   - Across the site it hit only those 3 Carolina Forest tags and the Carolina Forest line in llms.txt. All 4 are fixed.

No other hit was a false positive. Each one was read in its own sentence.

## For the other helpers (pages not touched here)

- Every one of the 12 rebuilt pages still has the old listing-search sentence ("including off-market homes before they hit the public sites"). A page rebuilt with mkpage or assemble-page gets the new sentence from its donor. A hand-made page needs the sentence above.
- /sell/out-of-state-buyers/ has the same testimonial removed from the homepage ("two streets over that no other agent mentioned"). It also has "Talk Strategy With Devin" and "Talk to Devin Directly".
- Their remaining hits: /hoa/reserves/ and /hoa/special-assessments/ "%s" (critical); /buyers/programs/ "Interest Rate 0%"; /sell/out-of-state-buyers/ "Devin" (2).

## Seen but not banned by any rule (left for the owner)

- /submarkets/carolina-forest/ still rates schools: "ranked 33rd in the state by U.S. News", proficiency against state averages, "the school system that drives demand" (JSON-LD), and "tenant demand follows the school zones". BIZ-8 says no school-quality claims. No pattern catches these. They need a decision on how far the schools section may go.
- /submarkets/carolina-forest/: "Most of our relocating clients tour it first, and many stop looking after." Nothing in the story bank backs this.
- /buyers/relocating/ says "approximately 30 sub-neighborhoods" in Carolina Forest. /submarkets/carolina-forest/ says "eleven subdivisions". Neither is in facts/registry.json.
- The other four homepage testimonials still have no name, date or platform (audit C-H2). "Chapter3 is the only one that ran real DSCR..." is also a comparison, but the pattern does not catch it.
- /about/ and /why-chapter-3/ name BrickWood Mortgage ("18 years of local loan files through BrickWood Mortgage") with no inline affiliated-business disclosure.

## Tests

- `node tools/claims-scan.test.js`: all controls pass, with the 6 new controls.
- `npm test`: all 19 suites pass, exit 0.
