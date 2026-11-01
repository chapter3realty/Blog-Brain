# Plan: /sell/home-value/

Batch 2026-10-d, Lane U. Research 2026-11-01. Ledger: `facts.md` (23 rows, all pending the verifier). Must-answers: `must-answer.md`. Data and scripts: `<website>/data/2026-10-d/sell-home-value/` (findings.json, cap-by-tenure.json, README.md).

## The reader and the job

An owner in Horry County who typed "what is my home worth" or "Myrtle Beach home prices". Most will sell within a year; some need the number for insurance, an estate or a divorce. They have already seen an online estimate and probably the county's value. They worry the number is wrong, that prices are falling, and that an agent will flatter them to win the listing.

The job, in one verb: **get** a first number they can trust, and know why it is only a first number.

## The deciding fact

Public records give a real first number. 11,047 resales recorded in Horry County in the 12 months to September 2026, by area and by house or condo (facts rows 1 to 3). The page needs no MLS sold data in public.

## What the live page has worth keeping

- The H1 the owner liked (`data/headlines.json`): "What is my home worth / in Myrtle Beach?" and the title "What Is My Myrtle Beach Home Worth? Free, Same Day | Chapter3". Keep both. The title's "Free, Same Day" is the owner's service promise.
- The byline: Tim Nash, Broker-in-Charge; reviewer Devin Day (byline and schema only, never in copy).
- The service promises: free, no obligation to list, a call the same day including evenings, the full analysis usually within a day or two, "We show you the exact sold homes behind it". Keep, now backed by the worked example.
- The lead form with its full TCPA consent text (keep word for word) and the phone number 854.333.2135. One form only (judge problem 4).
- Internal links that still fit, each in a sentence: /sell/net-proceeds/ (what you keep), /sell/capital-gains/, /buyers/property-taxes/ (owns the buyer's tax reset), /buyers/coastal-insurance/, /invest/non-warrantable-condos/ (condo financing moves price), /sell/ (hub), /sell/fsbo/, /sell/sell-my-condo/, /market-reports/ (monthly report).
- Four FAQ questions that match search demand: what a CMA is, CMA against appraisal, are online estimates accurate, does it cost anything. Rewrite every answer from ledger rows.
- No calculator, no real story, and no verified number on the live page. Nothing else to keep.

Cut: the two "Want us to look at it for you?" boxes, the "It depends" answer, "Spring sales move fastest here", every "appraisal" word used for our own work (row 19), and the old listing-search sentence about off-market homes in the page chrome (SWEEP.md, "For the other helpers"; the mkpage donor carries the new sentence).

## The shape

Main relation: amount by place (what homes like mine sold for, here), then a claim to test (which first number to trust). CRAFT 3 table: "Get their own number" (calculator shape, `reports/Page shapes by kind of page.md` section 8) with a market-data lead (section 6). It is not an AVM: the tool takes an area and a type, never an address or a value, and returns the area's recorded range. No input of the owner's county value either; a tool that turns one home's county value into a price would be an automated value for that home (hard rule).

Wrong-shape checks for the report: Is the first number on the first phone screen? Is there a number in text, not only in the tool? Is the CMA shown, not described? Is there one offer, not five?

## Sections, in order, and what each proves

1. **H1 and the short answer (first screen).** "In the 12 months to September 2026, the middle resale house in Horry County sold for about $350,000 and the middle condo for about $215,000. In your area it can be far from that: about $265,000 for a house in Conway, about $535,000 in North Myrtle Beach." Byline above. Rows 2, 3. The dates come from the data file and the build, never typed (the lead runs `build.js dates`; the writer prints the period from findings.json "meta").
2. **Slim offer bar.** "Get the number for your home: free, the same day, with the sales behind it." Button to the form at the end. One label for every offer on the page.
3. **"What did homes like mine sell for?" The area picker and table.** A two-step picker (area, then house or condo) shows the middle price and the middle half ("half sold between $X and $Y") and the count. Under it the full table of 20 areas, house and condo columns, cells under 20 sales left blank with a dash. Proves the first number. A one-line note: recorded deed prices, resales only; new homes from builders sold for about $337,000 (houses), so a resale competes with them (row 4). Rows 1 to 4. On a phone the table becomes cards (compare.js `cardsBelow`).
4. **"Are home prices dropping here?"** Line chart of the FHFA index for the metro, 2016 to the latest quarter, from `fhfa_myrtle_beach_msa.series`. Sentence: flat for a year (+0.8 percent), after +52 percent in five years; peak in the third quarter of 2025 (row 6). Then one line from our own records: the monthly middle resale price stayed between about $333,000 and $368,000 for houses (row 5). Then the finding no one else has: 7 in 10 condos that sold in 2026 went for less than the county's value on them, while most houses sold above it (row 7). Say what it means for a condo seller: price to the recent sales in your building, not to the county card. No forecast.
5. **"How close is an online estimate, or the county's number?" Our test.** The page's unique finding. Three bars on one scale, "how far off, for a typical home": the middle price of the six nearest sales, 16 percent; the county's value, 10 percent; an online estimate for a home not on the market, 6.6 percent (rows 8, 9). Label clearly that the first two are our test of 7,865 recorded 2026 resales and the third is the estimate company's own published figure for Horry County. Turn it into dollars on a $350,000 house: about $56,000, $35,000 and $23,000. Close with the plain lesson: a number made without seeing the house is a first look; the last 5 to 10 percent is condition, size, view and the building, which is the agent's work. Do not rank the three as a contest (different homes and periods, row 9 note). Name no estimate company in the bar label; say "an online estimate (the company's own Horry County figure)" and give the source in the sources line.
6. **"How we price your home: one example, step by step."** The worked example (row 10), as numbered steps with a dot strip (one dot per sale on a price line, the sold price marked):
   1. The six nearest houses that sold before it: $270,000 to $720,000. Their middle, $556,000, was 16 percent too high. Only one of the six was in the same subdivision.
   2. The county's value: $515,000, 7 percent too high.
   3. What we do next (no numbers we cannot publish): keep only sales like it in size, age, lot and condition, from the same subdivision or the next one over, from the MLS file; adjust each for what differs; look at it in person; check what is for sale against it now. Then the range and a list price.
   4. The house sold for about $482,000.
   Labelled "Example, from county records". No street, subdivision, month or unit. Then one sentence: your CMA comes with the sold homes behind it (live page promise).
7. **"What moves the price here?" Three drivers with our numbers.** One short block each, good news first:
   - The ocean. Asking price per square foot doubles from two miles inland to the first row: condos $168 to $322, houses $198 to $501. First-row condos are about half the size, so their prices end up close (row 17). Chart: two short bar rows (condo, house) by distance band. Photo: the beach seen from a high floor of an oceanfront building (candidate 1).
   - Condo or house, and the building. Tie to row 7 (condos below the county value) and to financing: link /invest/non-warrantable-condos/ in one sentence.
   - The flood line. 1 in 7 resales sat in FEMA's high-risk zone (1 in 4 condos). Inside a subdivision, those houses did not sell for less (row 18). Say what it means: a buyer's lender will want flood insurance; link /buyers/coastal-insurance/. Do not state the water explanation (not verified).
   Water and golf frontage: no public number; one sentence that we price those from sales on the same water or the same course, with the photo of homes and docks on the Intracoastal Waterway (candidate 2). No dollar claim.
8. **"Why is the county's value not my price?"** Rule shape: the rule in one sentence first. The county revalues every home every five years (last 2024, before that 2019, row 11). Between sales, the taxable value may rise no more than 15 percent in five years (row 13). A sale resets it as of December 31 of that year (row 12). Our count: 2 in 3 homes are taxed on less than the county's own market value, and the longer since the last sale, the bigger the gap, from about 95 percent for homes last sold in 2023 to 2024 down to about 59 percent before 2005 (rows 14, 15). Chart: one bar per "last sold" band, from cap-by-tenure.json. Meaning for a seller, said once: your tax bill is not a guide to your price, and your buyer's bill will be figured on the new price and on 4 or 6 percent (row 16); link /buyers/property-taxes/ for the buyer's numbers. One line on objecting to a county value within 90 days of the notice (row 22), or leave it to the property-tax page.
9. **"From the number to what you keep."** Two sentences and links: /sell/net-proceeds/ (commission, deed fee of $3.70 per $1,000 owed by the seller, attorney, payoff; row 23), /sell/capital-gains/. Then /sell/ and /sell/fsbo/ in one sentence.
10. **The offer (one form).** Headline: "Get the number for your home." One sentence: the address, a call the same day, the CMA with the sold homes behind it, no obligation to list. The form with its consent text. Beside the form, in small text but at body size on a phone: "This valuation service may not be used for the purposes of obtaining financing in a federally related transaction." (row 19, required by SC law). Never call it an appraisal.
11. **FAQ (open text, question headings):** What is my home worth in Myrtle Beach (the short answer and the table link); Are online home value estimates accurate here (row 8, 9); What is the difference between a CMA and an appraisal (rows 19, 20, 21; the low-appraisal story, briefly, from the seller's side); Why is my county assessed value different from my market value (rows 12 to 15); Are Myrtle Beach home prices dropping (row 6, 7); Does a home valuation cost anything (owner policy); Should I get a valuation if I am not selling yet (keep, reworded: insurance, an estate, timing).
12. **Sources line.** Horry County Register of Deeds and GIS (with the method in one plain sentence), FHFA, Redfin's published accuracy table, SC Code sections, our CRM's active listings counted in aggregate. Method notes live here, not in the body (CRAFT 5).

"On this page" list after the short answer: Your area, Prices now, Online estimates, An example, What moves price, County value, Get your number.

## Visuals (each carries a fact in the sentence beside it)

| # | Visual | Data | Tool |
|---|---|---|---|
| V1 | Area picker and table (cards on a phone) | findings.json `by_area` | spec code, compare.js `cardsBelow` |
| V2 | Line chart, FHFA index 2016 to latest, with its table of values | `fhfa_myrtle_beach_msa.series` | glass chart style (`G.chartCss`), table under it |
| V3 | Three bars, "how far off for a typical home" | `methods_test.all` and `redfin_horry.classic` | `G.bars` (one accent, values at the bar ends) |
| V4 | Dot strip for the worked example: six sales, the county value, the sold price on one price line | `worked_example` | inline SVG in the spec |
| V5 | Asking price per square foot by distance from the ocean, condo and house rows | `listings.condo_by_ocean`, `house_by_ocean` | `G.bars` |
| V6 | Taxable value as a share of the county's market value, by year last sold | cap-by-tenure.json (bands 2023-2024 back to before 2005) | `G.bars` |
| V7 | Numbered steps for the CMA | text | the kit's step list |

Charts are built from the data files at build time, never typed. Chart text 11 px or more at 375 px wide. One chart per section, never two stacked.

## Photos

Every one has a licence record already in `<website>/data/photos.json`; reuse the existing files and records, look at each at full size, and write a new caption that states the fact the section uses.

1. The beach and ocean in Myrtle Beach seen from a high floor (Wikimedia Commons, File:Myrtle_Beach,_South_Carolina,_Thanksgiving_2018.jpg, CC BY-SA 4.0, in photos.json as `images/55-plus/del-webb-grande-dunes/myrtle-beach-beach-from-above.webp`). For section 7, the ocean block: "What a first-row condo sells: the view from a high floor straight onto the beach."
2. The Intracoastal Waterway in North Myrtle Beach lined with homes and docks (File:Intracoastal_Waterway_in_North_Myrtle_Beach.jpg, CC BY-SA 4.0, `images/55-plus/del-webb-north-myrtle-beach/intracoastal-waterway-north-myrtle-beach.webp`). For the water and golf sentence.
3. Optional, public domain: the USGS 2011 oblique "Crescent Beach section of North Myrtle Beach seen from a plane over the ocean: the beach, a few oceanfront buildings, and streets of beach houses" (doi 10.5066/F7N877XX, `images/buyers/no-hoa/crescent-beach-streets-from-the-ocean-2011.webp` in data/2026-10-b/photos.json). It shows first row against the streets behind it in one frame, which the per-foot chart describes. Use only if V5 needs a picture; never stack it with photo 1.

New image files, if any, go only in `chapter3realty/images/2026-10-d/sell-home-value/`. No listing photos, no aerial without labels.

## Photo partner's shot list (`templates/photo-request-email.md`)

For /sell/home-value/. Each photo must show the thing named; wide shots, no people as the subject, no house numbers or plates readable.

1. One oceanfront condo tower in Myrtle Beach and the building directly behind it across Ocean Boulevard, in one frame from the beach or a public walkway. Purpose: first row against second row, the price-per-foot finding.
2. The view from a first-row balcony and from a second-row balcony at about the same floor, if the partner has access through an owner who agrees (two photos). Purpose: the same floor plan shown two ways.
3. A house on the Intracoastal Waterway with its dock, and the house across the street with no water, from the public road. Purpose: the water driver.
4. Houses along a golf fairway, from a public road or cart path where allowed. Purpose: the golf driver.
5. A street of similar houses in a Carolina Forest subdivision (no addresses readable). Purpose: the worked example's setting, without naming it.
6. The Horry County Government and Justice Center in Conway, outside, wide. Purpose: the county value section (only if the county page names the building at 1301 Second Avenue; see the out-of-state ledger row 30).

## Siblings and owners of facts

- /sell/out-of-state-buyers/ owns: the out-of-state share, month counts of closings, the deed pull itself. This page reuses the pull, not those facts.
- /buyers/property-taxes/ owns the buyer's tax reset in dollars. This page says the rule once and links.
- /sell/net-proceeds/ owns seller costs; /buyers/closing-costs/ owns the deed fee (registry `deed-fee-payer`).
- /buyers/undisclosed-flooding/ (this batch) owns a house's flood history. This page gives only the flood-line count and the same-subdivision result.
- /market-reports/ publishes the MLS association's monthly figures. This page does not repeat them; link it in section 4.

## Hard-rule checks for the writer

- No interest rate, no payment amount. No AVM: no address box, no value box.
- MLS sold data never on the public page: all prices are deed prices; listing figures are active asking prices counted in aggregate (row 17).
- Never "appraisal" for our CMA; the disclosure sentence beside the form (row 19).
- No dates typed in body copy or captions; the 12-month period comes from the data file.
- Devin Day only in the byline and schema. No Paul. No "Talk to Devin". No testimonial.
- No fair-housing words; describe areas by homes and prices only.
- Name no estimate company in copy unless the reviewer agrees; the figure is Redfin's own and must be attributed in the sources line.

## Questions for the owner

None. Everything the page needs is in the ledger or is the owner's existing service policy.
