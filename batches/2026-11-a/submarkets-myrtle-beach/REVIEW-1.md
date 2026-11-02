# Review round 1: what changed, by finding

Page /submarkets/myrtle-beach/, spec `specs/myrtle-beach.js`, fix round 1, 2026-11-02. The spec was rewritten from the copy down; the data checks were kept. New facts are ledger rows 41 to 52, marked VERIFIED-BY-FIXER, for the lead to re-check. Version 1 of the spec is saved in the scratch folder as `fix1/myrtle-beach.v1.js`.

## The new shape

The page now leads with life in the city and the places, then the rental rules:

1. What is it like to live in Myrtle Beach? (the Boardwalk, the hospital, the airport, golf and The Market Common as four cards; the off season)
2. Where should you live in Myrtle Beach? (the map, then each part sold on what it has, then its price)
3. Can you rent a home by the night in Myrtle Beach?
4. Which oceanfront condo buildings in Myrtle Beach sell the most? (with a loan question)
5. Does an oceanfront condo in Myrtle Beach pay for itself?
6. Are Myrtle Beach home prices dropping?
7. Is a Myrtle Beach address in the City of Myrtle Beach?
8. What do property tax and flood insurance cost in Myrtle Beach?
9. Pros and cons, FAQ

New H1: "Myrtle Beach real estate: where should you buy?" with "Where people live, and where you can rent by the night." The schema headline (ogTitle) is now the H1 and its second line, word for word.

## Critic

1. **overlap.spill at 320 on the building chart.** Fixed. The glass bar chart is replaced by a table (compareCards), so no label can spill. At 320 a new spill showed on the hero chips ("Boardwalk"); the chips now take two columns below 420 px. critic.mjs: 0 blocking at 320, 390, 768, 1024 and 1440.
2. **Where-to-live parts give numbers only.** Fixed with new verified rows. Grande Dunes: the free Ocean Club membership (pool, dining, classes, its own way onto the beach), the public marina, the public course with holes on the Waterway, the members' course, the tennis club (row 44). The Market Common: shops, restaurants, a movie theater, apartments above the stores (row 45); Grand Park and Valor Park with the lake and its 1.1-mile path, sports fields, picnic areas, fishing and Savannah's Playground (row 46). Older neighborhoods: Pine Lakes, the first course in Myrtle Beach, 1927 (row 42); The Dunes Golf and Beach Club on the ocean, host of the PGA Tour's Myrtle Beach Classic (row 43); the houses that face the beach across wide lawns (photo record). Price now comes last in each part.
3. **"In the neighborhoods zoned for houses" contradicts part 4; R-zone condos.** Fixed. The answer now names the three house parts "or a condo, on the oceanfront or off it". Part 4 says nearly every oceanfront condo building is in a rental zone (row 9: all but one oceanfront condo for sale), and that the R-zone condos are off the oceanfront.
4. **Number density (P2).** Fixed. Score P2 passes (score.js 100/100). Cut: the ZIP code table, the owner-share chart, the builder count, the $670 a month sentence, the AirROI 38 percent sentence, the fine and jail figures, the price ranges in parts 3 and 4, the for-sale column of the split table, the numbers in the pros and cons, and the 4 in 100 and 3 in 4 in FAQ 1. $1,528 and $404 are now only in the tax table and the FAQ.
5. **"these buyers".** Fixed: "About 3 in 4 buyers of these oceanfront condos have their tax bill mailed outside South Carolina."
6. **"That also shows the building is run for renting"; figurative headings.** Fixed. The sentence is cut. H3 is now "Most of the year's rental income comes in summer"; part 4's heading is "A condo on the oceanfront".

Nits taken:
- ZIP 29572 "About 75 in 100": the ZIP table is gone.
- "On the west side" of Meridian: the Meridian sentence is gone (owner and reader also flagged it).
- Worked example: the title is "A typical one-bedroom's income on a typical oceanfront one-bedroom's price", the answer opens "At typical figures", and a sentence says we used the market's typical one-bedroom income, not this unit's own.
- USGS photos: each credit now ends "August 2011".
- FAQ on North Myrtle Beach now states the contrast.
- Schema headline matches the H1.
- "Myrtle Beach International Airport" is named; FEMA is spelled out once.
- Bold "Houses" label: the owner-share chart is gone.
- Hero chips: four short chips (Boardwalk 1.3 miles; Airport 50+ nonstop cities; Houses mostly main homes; Nightly rentals most condos), two columns on small phones.
- Table and chart widths: the two inline charts now use the figure's own width; the tables are the kit's compareCards and keep its width (not changed: shared helper).
- Duplicate image with /buyers/common-mistakes/: for the lead (NEEDS 10).
- Homes strip for section 3: the strip now has its own title, "Homes for sale near Pine Lakes now", the prose names Pine Lakes, and the pill after it is removed.
- read.wall on the oceanfront paragraphs: gone at 320 after the rewrite. Remaining read.wall warnings at 320 are the hero sub plus byline, part 4, the prices section and the FAQ answer followed by sources and credits (the false hit the critic named).

## Reader

- **Does an oceanfront condo pay for itself; the HOA fee.** Partly fixed. The section now says plainly that about $8,100 a year is left for the HOA fee, a policy on the unit and any loan, and that whether the unit pays depends on the building's fee. The page does not give a typical HOA fee: the CRM shows the fee only to registered visitors, county records do not hold it, and the building fees on /invest/condo-buildings/ are unverified. Asked for an aggregate in NEEDS 8. I did not use another broker's listing pages, which are MLS data.
- **How do I pay for one?** Fixed. New H3 "Can you get a loan on an oceanfront condo?": Fannie Mae's rule for buildings managed like a hotel (row 49), then "Buyers in those buildings pay cash or use a loan made for condo-hotel units. Our preferred lender can tell you which loans work in the building you like." No rate, no payment, no down payment, no lender named. Row 49's note asks the lead to confirm the second sentence.
- **The conversion overlay seems to contradict the rule.** Fixed by removing it. Row 11 (what the overlay does) is struck, so the page cannot explain it.
- **Insurance counted twice.** Fixed. Running costs list "a short-term rental policy"; what is left pays "a policy on the unit itself".
- **Too many condo prices.** Fixed. The section gives one price to plan on: "For a one-bedroom on the oceanfront, plan on about $160,000, the middle asking price today." The $155,000 rental-zone median is gone. The Zillow chart is labeled as Zillow's typical value.
- **$300,000 for a house: where?** Not fixed. Houses below the three parts' prices are in the "rest" group of analyze.py, which mixes villas, townhouses and houses in commercial zones; no ledger row splits it by kind or names those neighborhoods. A new row would need a by-kind count from the parcel rows. I left it out rather than state an unverified place.
- **What do I get for $53,000?** Fixed. The table now says what each building has for sale, and the text says the lowest prices are for studios of about 400 square feet, the size of a hotel room, at Tides, Driftwood and Oasis (row 52). The chart is sorted by price, highest first.
- **Nits taken:** RMV, "R zones", "zoning district", "months of supply", "grandfathered", "special assessment" and "condo reserves" are gone from the copy. The AirROI and "Our counts" sentences are gone from the body (AirROI stays in the chart caption). No sentence leads with a company name. The jobs sentence has one number. Meridian is gone. The tax-bill paragraph now says why it matters in its first sentence ("Most buyers here live out of state"). The Market Common rental answer is one answer: the town center's zone (a few hundred houses) allows them, the other neighborhoods do not, and each HOA can still ban them. The hero tile "Homes in the city 31,100" is gone. Lodging tax: the page says Airbnb collects the state, county and city taxes on its bookings, and you collect them on a booking you take yourself (row 50). Daily life: the new first section (Boardwalk, hospital, airport, golf, shops). The airport line gives its distance from the ocean and its nonstop cities.
- **Not taken:** the license fee amount (the city's fee schedule was not opened; the page says it is based on the rent you collect). Summer traffic, groceries and drive times: no verified source this round.
- **"Updated June 12, 2026":** the lead's `build.js dates` sets it.

## Owner's eye

- **HIGH, fixed on one topic.** Fixed. The first two sections are life in the city and the places. "rentals" and "zones" now sit in the rental section, part 4 and the FAQ. The first answer is a choice for two buyers, not a zoning answer.
- **HIGH, the place entries do not sell the place.** Fixed as in critic 2. Market Common now opens with the shops, not the acreage. Each part has two to three sentences on what it has before its price. Four places is still four: I did not add a fifth part without a verified life row for it (Meridian is the next largest house district, and its main fact is the flood zone).
- **HIGH, the shape (Grande Dunes 7 screens down).** Fixed. Grande Dunes now starts about 5 screens below the H1 at 390 px (it was about 7), after the short answer, the life cards and the map.
- **HIGH, personification.** Fixed. Gone: "That one rule splits it into two markets", "Summer pays for the year", "the neighborhoods the R zones protect", "The rental zoning keeps the house neighborhoods lived in", "The rule shows in the condos too", "The reason is supply". Also rewritten: "Every zone bans" (now "The city bans"), "Those zones cover" (now "include"), "the buildings run a rental program" (now "have"), "a condo building passes the cost" (now "a condo's HOA adds the cost"), "it decides" (now "depends on"), "the example takes" (now "we used"). score.js P10 passes.
- **HIGH, too many exact numbers and terms.** Fixed as in critic 4. "911 of 1,004", "43 of 264", "33 of 86", "All but one of the 668", "40 percent of its 513 houses" and the builder line are gone. RMV, the overlay ordinance, "months of supply" and the Meridian district are gone. The ZIP cards are gone; the city-or-county answer names the places (Carolina Forest, Forestbrook, Socastee).
- **MEDIUM-HIGH, budget stock first.** Fixed. The section no longer opens "The cheapest ones". The table is sorted by price, highest first (Dunes Village first, Tides/Driftwood/Oasis last), and says what each building has for sale.
- **MEDIUM, sending the reader to other pages.** Fixed. Removed: the home value guide line, the special assessments and reserves line, "Our page on short-term rental rules ... explains it", the coastal insurance and flood history links, the condo investing link, the airbnb-income and long-term rental links. The flood section now answers the next question: flood insurance on a house usually costs about $800 a year in the high-risk zone and about $600 outside it (row 51, FEMA policies in the city). Links kept: Carolina Forest, North Myrtle Beach and the property tax guide (how to apply for the lower rate).
- **MEDIUM, repetition.** Fixed. Three offers, each different: the top ("Tell us if you will live in it or rent it. We send the homes that fit."), one mid-page box after the places ("Tour the part of the city you like"), and the end ("Send us an address or a building ... its zone, its HOA's rules on rentals, its HOA fee and its flood zone"). "before you offer" is gone from the copy. One pill remains, "Get the oceanfront condos for sale in Myrtle Beach"; the duplicate "Get the condos for sale" pill and the three place pills are gone (the homes strips are the offer). The mid-page box answers build.js audit's "no boxed CTA in the middle" warning.
- **MEDIUM, yearly cost answers only tax.** Fixed by the heading and the content: "What do property tax and flood insurance cost in Myrtle Beach?" now answers both, and the condo's building insurance is in the HOA fee. Homeowner's insurance and HOA fees are not on the page: no verified figure (NEEDS 8).
- **MEDIUM, hero chips.** Fixed as in the critic nit.
- **MEDIUM, loan jargon and label headings.** Fixed. Loan: as in the reader item. Headings are now questions: "If a listing says short-term rentals are allowed, can you rent it nightly?", "What does a nightly rental need?", "Will you need flood insurance?", "Can you get a loan on an oceanfront condo?". The one label H3 left is "Most of the year's rental income comes in summer", a literal statement.
- Nits: the Market Common caption now says what the outline shows ("The homes outlined in orange are next to the shops and to the lake and ball fields of Grand Park"). "the beach at the door" is gone. The orange rule on the last FAQ heading did not appear in my 390 px screenshots. The homes strips render with the preview's sample homes (three strips, 416 px each); the sample cards show Conway addresses from the fixture. Part 4 still has no strip of its own (NEEDS 9).

## Gates after the fix

- score.js (SCORE_TODAY=2026-11-02): 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- claims-scan: 0 findings on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking; 5 read.wall warnings at 320 and 390 (listed above).
- build.js check: OK. build.js audit, this page: the two date lines (set by the lead's `build.js dates`) and the A20 note to quote Tim or Devin, which this line never writes.
