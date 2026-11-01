# Review 2: /sell/home-value/, what changed

Fix round 2, batch 2026-10-d. Every change is in `specs/home-value.js`; the page was rebuilt with `node tools/mkpage.js specs/home-value.js`. Every figure is still read from findings.json. Two rows were added to facts.md as VERIFIED-BY-FIXER (9b, the house-only test figures; 24, the condo or house rule under the picker). Row 25 records that no Zillow figure could be verified.

## Gates after the fix

- score.js (SCORE_TODAY=2026-11-01): 99/100 (SEO 100, AEO 100, Human 99, Trust 100). Partial: P2 3.6 numbers per 100 words (was 4.0); P6 "CMA" (kept, NEEDS item 6).
- claims-scan: 0 findings. facts-check: no hit on this page. house-claims: 0. Struck list (22 patterns): 0 hits.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 0 warning. Shots: `wf2/sell-home-value/fix2/shots/`; element and section crops in `fix2/el/`; measurements from `fix2/m.mjs`.
- build.js check: no line for this page. build.js audit: only the two date lines (dateModified 2026-07-25 against sitemap 2026-10-27), which the lead's `build.js dates` run sets. The audit's two new lines from this round (". So" opening a sentence, "stand in for") were fixed.
- Chart text measured in the browser: 13.0 px at 320, 16.0 at 390, 13.3 at 600, 15.5 at 768, 1024 and 1440. Every card edge is the same at each width (1440: 154 to 914; 1024: 34 to 794) except the shared glass top bar (NEEDS item 10).

## Critic, blocking

| Finding | What I did |
|---|---|
| Area table wraps label and price differently row to row at 390 | The 20-row table is gone (owner's finding). Its place is a 6-row table of the three highest and three lowest areas. On a phone each row is the name, then two cells, each a small label over a value that does not wrap ("Middle price / $620,000", "Middle half sold / $450,000 to $910,000"); under 380 px the cells stack. Every value is a six-figure price, so every row has the same shape. Checked at 320, 390 and 768. |
| Condo chart splits "640" from "sq ft" | Non-breaking spaces between the number and the unit, and inside "sq ft", in the feature and the value text ("640 sq ft", "$322 a sq ft"). At 390 the line breaks before "640 sq ft", never inside it. |
| Inline SVG chart text scales from 10 px to 27 px | Each inline chart (price change, dot chart) is drawn twice from the data: a phone one (viewBox 300, shown under 600 px, at most 310 px wide, centered) and a wide one (viewBox 600, shown from 600 px, at most 620 px). Measured 13.0 to 16.0 px at every width. Labels that would run past the right edge flip to the left of their mark. |
| Nit: "is lower still" (equal on 1 in 3) | "The taxable value on your tax bill is lower on most homes: about 2 in 3 Horry County homes are taxed on less than the county's value." |
| Nit: ledger gap for the house-only 16 percent | facts.md row 9b, VERIFIED-BY-FIXER from findings.json methods_test.house (16.1, 8.8, n 4,919). |
| Nit: practice claims ("For a condo, we start from...", "We price a home on the water...", the five steps) | Made generic: "A comparative market analysis, or CMA, does five things the quick numbers cannot: It keeps only sales like the home..." The condo-building and water-or-golf rules are inside step 1 as what a CMA does, not as our policy. "Our agents do a CMA for your home, free" is the service promise already in the ledger. |
| Nit: "Water and golf" is thin; "Condo or house, and the building" has no number | Both H3s are gone. Water and golf is in step 1; the lender sentence and link sit after the list. |
| Nit: card right edges step | One width, 760 px, for the contents box, the offers, the charts, the table, the figures, the photo and the form. |
| Nit: orphans | "1 in 4 condos" and "1 in 15 houses" use non-breaking spaces; the form pill is "Same day"; "six nearest sales" and "a $350,000 house" are held together. Not changed: the contents labels at 320 ("How we price / it"); they are short and the H14 rule ties them to the headings. |
| Nit: the sitewide homes strip | Edge, not spec; NEEDS item 8 stands. |
| Nit: H2s without the place | "What changes a home's price in Myrtle Beach?" and "How much will I keep when I sell in Myrtle Beach?". "Why is the county's value not my home's price?" kept: it already names the county's value, and a sixth "Myrtle Beach" reads as stuffing. |
| Nit: "Your area changes what a home is worth a lot" | "Prices differ a lot by area:". "worth" moved to the next paragraph (score S11). |
| Nit: byline date | Lead's `build.js dates` run. |
| Nit: both photos reused | One photo now (owner). The share image is NEEDS item 9. |

## Reader

| Finding | What I did |
|---|---|
| Ocean paragraph: which number is which; 2.5 times between what | The paragraph is cut. The condo fact is the sentence above the chart. The house fact is in the photo caption, with both distances named: "Houses for sale within 0.1 mile of the ocean ask about 2.5 times as much a square foot as houses more than 2 miles away." |
| Townhouse: which button? | The option reads "House or townhouse", and the note under the picker says: "Pick Condo unit if your deed is for one unit in a condo building or complex. Any other home counts as a house, including a townhouse or mobile home on its own lot." This is the data's own rule (facts row 24). |
| "How much will I keep" gives one cost and links | It now lists what comes off: the commission, the loan payoff, the closing costs, and the one cost set in law (the deed fee, $1,295 on $350,000), then the calculator for the reader's own price. No commission or closing-cost figure: none is in the ledger, and commission is set between seller and broker. |
| Where my house sits in my area's range | Not added. A price per square foot by area needs sold square feet (MLS, registered visitors only) or heated square feet, which the county parcel layer does not have (facts.md, Not verified). "Newer and bigger sits near the top" is not tested in our data. The page says that this is the part the agent works out. |
| Dates disagree | Lead's dates run. |
| Three names for the county's value | One name in the body, "the county's value", defined once: "the county's value, which is the market value on the home's county property record". The FAQ question keeps "county assessed value" because that is what people search; its answer uses "the county's value". |
| "two numbers you can look up yourself" | "Two other quick numbers are often used as a price: ... We checked both ..." |
| County value plus about what? | Not added: the owner asked for fewer numbers in this section. The 6 in 10 and 7 in 10 sentence stays. |
| Appraisal law read like a form | The full disclosure sentence is quoted once, under the form. The CMA section says it in plain words: the agent "must tell you that the valuation may not be used to get financing in a federally related transaction." |
| How long homes take to sell, how many compete | Not added: no verified row for days on market, and the owner asked for fewer numbers. The new-builds paragraph covers competition. Left for a later round. |

## Owner

| Finding | What I did |
|---|---|
| The list of areas twice | Kept the picker (all 20 areas, both kinds of home, the middle half and the count). Cut the table to the three highest and three lowest middle house prices, with the middle half on each row, under a caption that says so. The picker's note says the picker has all 20. |
| Too many numbers mid-page | The three Redfin tiles are one sentence (6.6 percent, about $23,000 on $350,000, 1 in 7). Cut "4 in 10 came within 5 percent" and "For a typical condo it was 13 percent off". Also cut the builder count (about 2,000) and the flood-test counts (14 neighborhoods, 52 houses). Score P2: 3.6 per 100 words, from 4.0. |
| County value section is a lesson | Cut the 15 percent rule and the tenure chart (cap-by-tenure.json is no longer read). Three short paragraphs: the county's value is a mass estimate for tax (9 percent off on a typical house); the taxable value is lower on most homes, so the tax bill is not a guide to your price; a sale resets it, so the buyer's bill can be higher. |
| Price chart in index points | Now percent change since mid-2021: the axis reads −40% to +60%, the marks read "mid-2021" and "now: up 52%", and the caption reads "Change in house prices in Horry County since mid-2021, by quarter: up about half by mid-2025, then about flat for a year." The phone version's labels are 13 to 16 px. |
| Neither photo says its point | One photo, the Crescent Beach aerial, under the ocean chart. The caption states the fact: houses within 0.1 mile ask about 2.5 times as much a square foot as houses more than 2 miles away. Looked at full size: buildings on the beach, then streets of houses. I used the house figure, not the owner's suggested condo one, because the photo shows houses, and the condo fact already sits in the sentence above the chart. "First-row" is not used: the verifier struck it (row 17). |
| Literal-language breaks | "Prices differ a lot by area"; "The county's value is above the price on most condos and below it on most houses"; FAQ: "the lowest middle house price was about $234,000, in the city of Loris, and the highest about $620,000"; "were inside FEMA's high-risk flood zone"; the "sits under our form" sentence is gone; "Half of the homes sold for more than the middle price, and half for less." The FAQ's "state law limits" became "under state law it can rise only so far between sales" (score P10). |
| Ocean paragraph hard to follow | Cut (see Reader). |
| "Water and golf" thin; "Condo or house, and the building" not a question | Both headings are gone; their content is in the CMA steps (see Critic). "What changes a home's price in Myrtle Beach?" now has two H3s: the ocean and the flood line. |
| Zestimate left out | Zillow's accuracy page blocked us again (zillow.com 403 page; the Wayback Machine reset the connection). No Zillow figure is on the page. As the owner suggested for that case, the section opens: "Every online estimate, Zillow's Zestimate included, can be close on one home and far off on the next." The keywords line adds "Zestimate accuracy Myrtle Beach". facts.md row 25. |
| Repetition | "most like it" 5 to 2, "same day" 6 to 2 in the body (hero bar and form pill; the hidden thank-you line keeps its own), "free" 8 to 5 (eyebrow, sub, the CMA line, the pill, one FAQ). The end band is now "Ask what your home is worth." The disclosure is quoted once. FAQ answers are shorter and say it differently from the body: the price answer gives the lowest and highest of 20 areas, the estimate answer gives Redfin only, the county answer gives the reason in one line. |
| Nit: homework framing | Fixed (see Reader). |
| Nit: low appraisal ends on the buyer | Kept, told from the seller's side as the story bank asks, and shorter: "Our agents see low appraisals only rarely here. When a buyer's appraisal comes in low, they send recent sales of similar homes with a request for a reconsideration of value. Once, the value changed." The buyer detail is dropped, not changed; nothing is added. It keeps the page's one first-hand line (score T2). |
| Nit: hero sub-line repeats the first H2 | The italic line is now "Recorded sale prices by area, and how we price yours." |
| Nit: IDX strip on a seller page | NEEDS item 8 stands. |
| Nit: byline date | Lead's dates run. |

## Findings I did not take, and why

- Critic and owner both asked to keep the original data (the six-nearest test, condos below the county value, no discount inside the flood line, new homes competing). All of it stays.
- The share image and Article.image still use the round-1 beach photo's crops, which are no longer shown on the page. image-meta requires 1x1, 4x3 and 16x9 crops at 1,200 px whenever a page shows a hero-class photo, and the Crescent Beach file is only 1200 x 782. NEEDS item 9 asks for Crescent Beach crops from the USGS original.
