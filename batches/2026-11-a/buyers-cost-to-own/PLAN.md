# Plan: /buyers/cost-to-own/

Researcher, 2026-11-02. Lane U. Inputs: `must-answer.md`, `facts.md` (36 rows), `DATA/examples.json` (every number in the table, the chart and the worked examples), the judge's entry in `audit/judged-2026-10-31.json`, CRAFT 3 (cost or fee breakdown) and `reports/Page shapes by kind of page.md` section 2.

## The reader and their job

A buyer with a price in mind, often moving here or buying a second place. A lender has shown them a payment. They suspect it is not the whole cost, and they are right. Their job: **know the total they will pay each year on top of the loan, and see what moves it** (house or condo, home or second home, which town). Then decide what to buy and where.

What they fear: a surprise bill after closing (the tax jump, a flood policy the lender asks for, a condo fee that keeps rising). What they will ask next: can I afford it, and can you price this one house for me.

## The deciding fact

**The middle Horry County house, about $350,000, costs about $7,550 a year besides the mortgage if you live in it, about $630 a month: tax about $1,290, the county stormwater fee $89, insurance about $2,000, HOA about $900 and upkeep about $3,300. As a second home it is about $10,500.** (facts 1, 7, 9 to 12, 17, 25, 31.) Our cross-check: owners of a paid-off house here told the Census they pay about $555 a month for the same parts less upkeep; our example gives $546 (fact 2).

## What the live page has worth keeping

- **The headline the owner liked** (`data/headlines.json`): title "The Real Monthly Cost to Own in Myrtle Beach | Chapter3"; H1 "The real monthly cost to own / a home in Myrtle Beach." Keep both. The page now answers it in a month figure and a year figure.
- **The calculator** (inline `coCalc()` in the live page; there is no spec, `specs/cost-to-own.js` is new). Its tax model is right and matches /buyers/property-taxes/: the 2026 levies by town, 4 or 6 percent, the 109.1-mill school exemption, the Myrtle Beach credit at 53.4 percent. Keep the model and the town list. Fix: (a) show "Cost besides the loan" as its own result line, filled from the first load, so a reader who never types a rate still sees a number (the judge's first problem); the loan line keeps waiting for the reader's own rate and down payment (owner rule, no rate filled in); (b) insurance default $2,000 a year from fact 17, not the $160 a month placeholder; (c) upkeep default $3,300 a year (fact 31) in place of "1 percent"; (d) HOA default $75 a month for a house and $650 for a condo (facts 25, 26), switched by a house or condo choice; (e) add the $89.40 fee for the unincorporated choice and $82 for Surfside (fact 12); (f) price default $350,000 (fact 7).
- **Internal links**, each in a sentence that says what the target answers: /buyers/property-taxes/ (how to apply, the bill line by line), /buyers/coastal-insurance/ (wind pool and policies), /hoa/master-insurance-ho6/ (what the building policy covers), /hoa/special-assessments/, /invest/non-warrantable-condos/, /invest/condos/, /buyers/common-mistakes/ (paying 6 percent by mistake), /buyers/no-hoa-homes/ (the 3 in 10 houses with no fee), /buyers/undisclosed-flooding/.
- **No real story** on the live page. Two usable ones exist: `household-utility-bills` (fact 35) and `insurance-quote-before-offer` (fact 21).
- **Cut:** the lead form above the answer; the same offer three times; "Two numbers to check before you offer" and "Get it during due diligence" (the reader does the work; CRAFT 5); the 1 percent upkeep claim; the $160 insurance placeholder; three link-only paragraphs.

## The page shape

CRAFT 3, **cost or fee breakdown**: the total in a sentence, the itemized table with a total row, the parts that move it most, the worked example, then the calculator, then how to lower it and the next step. The reader's decision (house or condo, home or second home) is the spine of the middle sections. Wrong-shape tests: the page has an HTML table with a total row; the total is in text, not only in the calculator; no reader has to add rows up; no pie chart.

## Sections, in order, with what each proves

Every heading is a question people search (must-answer items in brackets). Every first sentence under a heading is the answer, with the subject named.

0. **Top (first phone screen).** H1, byline, then: "The middle house in Horry County costs about $7,550 a year to own besides the mortgage, about $630 a month, if you live in it. As a second home it costs about $10,500." A key-facts row of four glass chips: Tax $1,290; Insurance $2,000; HOA $900; Upkeep $3,300. Then a slim offer bar (one line and a button). [1]

1. **How much does it cost to own a home in Myrtle Beach each year?** [1, 12] The itemized table (facts 1, 12): line, what it is, as your home, as a second home, with a **total row** and a per-month row. Below it, one line for utilities (about $2,280 more, fact 33) and one for flood (none unless the lender requires it; facts 22, 23). Then the cross-check in one sentence: owners of a paid-off house here report about $555 a month for the same bills (fact 2). Proves: the number is real, not a guess.

2. **Is a condo cheaper to own than a house in Myrtle Beach?** [8, 4] Lead with the finding no one else has published (fact 6): in Myrtle Beach and North Myrtle Beach the middle condo costs more to own each year than the middle house, besides the mortgage, because of the condo fee. Then why, in plain words: the fee pays for the building and the shared property (fact 28), so a condo owner's own insurance is about $800 (fact 19). Then the town table, houses and condos (facts 4, 5) as `compareCards` (a table on a wide screen, cards on a phone): town, middle price, tax, HOA a month, total a year. One line under it: insurance and upkeep are one county figure for every row, so the rows differ by tax and HOA. Then: 6 in 10 homeowners here pay an HOA or condo fee, 1 in 3 elsewhere in the state (fact 27); 3 in 10 houses for sale have none (fact 25, link /buyers/no-hoa-homes/). Proves: the reader can choose between a house and a condo, and between towns, by dollars.

3. **How much more does a second home cost in property tax?** [2, 9] The bar chart (fact 13): the same $350,000 house in six tax areas, two bars each (your home, second home). Headline of the chart: "A second home pays 2.5 to 3.8 times the tax." Then three short lines: the 4 percent rate needs an application (fact 9); the seller's bill is not yours, because a sale resets the value (fact 14); at 65 the first $50,000 is exempt (fact 15). Link /buyers/property-taxes/ for the steps, /buyers/common-mistakes/ for paying 6 percent by mistake. Proves: the "three times" claim, in dollars, by town.

4. **What does homeowners insurance cost in Myrtle Beach?** [3, 5] Lead: owners of a house here pay a middle of about $2,000 a year, about 40 percent more than in the rest of South Carolina (fact 17). Then wind: east of the Bypass an insurer may leave wind out and the owner buys it separately (fact 20; link /buyers/coastal-insurance/). Then flood in two sentences: a lender requires it in the high-risk zone (fact 22); it costs about $550 a year outside that zone and about $1,070 inside for a house you live in (fact 23); about 1 in 15 houses resold sits in it, 1 in 4 condos (fact 24). Then the service: we get an insurance quote for the address before you offer (fact 21). Proves: the insurance line has a local source, and the reader knows when flood applies.

5. **How much should I budget for upkeep?** [6] Lead: about $3,300 a year for a house, about $690 for a condo unit (facts 31, 32). Then the four big replacements as icon cards: roof about $10,400 (1 in 9 owners replaced one in two years), central air about $7,000, heating about $5,000, water heater about $1,000 (fact 30). One line: the old 1 percent rule is a little high (fact 31). Photo here: an outdoor air conditioning unit near the ocean (partner shot 3). Proves: the upkeep line is measured, not a rule of thumb.

6. **What are electric and water bills like?** [7] Three sentences: about $150 a month for electricity on a house, lower than the rest of the state ($190); water about $480 a year; condo owners about $90 and $200 (fact 33). One of our team's bills as one household (fact 35). Proves: utilities are a smaller surprise than people expect.

7. **Work out your own number** [14] The calculator (see fixes above), after the table. Under it, one sentence: the loan line waits for your lender's rate; everything else is filled in from this page.

8. **Is Myrtle Beach expensive to own a home in?** [11] Short comparison card set, "here vs the rest of South Carolina", from one Census survey: insurance $2,000 vs $1,400; electricity $150 vs $190 a month; a paid-off house all-in $555 vs $504 a month; share paying an HOA fee 61 vs 33 percent (facts 17, 27, 33, 34). Answer sentence: owning here costs about $50 a month more than elsewhere in the state on a paid-off house, mostly insurance and HOA fees, partly offset by lower electric bills. Proves: a plain answer to a top search, from data no one has published side by side.

9. **The offer (one box, the same component as the top bar).** "Send us an address. We price the tax at your rate, get an insurance quote and read the HOA budget before you offer." One label everywhere, for example "Price this home". The form sits here, after the answer.

10. **FAQ** (open text, 5 or 6): What is PITI and what is not in it (fact 36; no amount, no rate); Why are condo fees so high in Myrtle Beach (facts 26, 28; link /hoa/master-insurance-ho6/, /hoa/dues-increases/); Do I need flood insurance (facts 22, 23); How is the tax worked out (fact 9 to 11, link); Does the cost change if I rent it out (tax at 6 percent, fact 13; insurance not public, say we quote it).

Sources line: each source named once with its period. Methods (PUMS geography, the $25-step HOA medians, AHS region) go in the sources line, not the copy.

## Visuals

| What | Where | Built from | Notes |
|---|---|---|---|
| Key-facts chips (tax, insurance, HOA, upkeep) | Top | examples.json worked_example.unincorporated | glass chips with icons and words |
| Itemized cost table with total row and month row | Section 1 | examples.json worked_example | two value columns: your home, second home |
| Town table, houses and condos | Section 2 | examples.json houses, condos | `compareCards` (compare.js); cards on a phone |
| Bar chart, 4 vs 6 percent, same house, six tax areas | Section 3 | examples.json tax_chart_same_house | `glass.bars`; flat, two colors with labels; values on bars |
| Replacement cost cards (roof, air, heating, water heater) | Section 5 | ahs-2023-replacements.json | icons from tools/icons.js |
| Here vs rest of South Carolina cards | Section 8 | pums-2024-1yr*.json, pums-moe.json | four pairs |
| Calculator | Section 7 | live model, new defaults | keep tax model; add "Cost besides the loan" |

No map: the subject is an amount, not a place (the town table names the towns). No pie chart.

## Photos

The judge's photo needs: a typical house on a Carolina Forest street; an older condo building in Myrtle Beach, outside; a rooftop or air conditioning unit showing salt air wear. Each photo goes under the sentence whose fact it shows; never above the answer; one at a time.

| Slot | Shows (caption states only this) | Best source | Free-licence candidate | Licence |
|---|---|---|---|---|
| Section 1 | A typical one-story house on a Carolina Forest street | Partner shot 1 | Fallback: a USGS NAIP or NOAA 2026 pre-event aerial of a Carolina Forest street of houses, labelled (sources the 2026-10-b pages used: https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer ; https://noaa-eri-pds.s3.amazonaws.com/index.html#2026_Pre_Event/EC2601a_OB_N_RGB/). Do not reuse `images/2026-11-a/invest-run-the-numbers/carolina-forest-houses-from-above` (sibling's picture). | Public domain (U.S. government) |
| Section 2 | A row of older oceanfront condo buildings in Myrtle Beach | Partner shot 2 | USGS coastal oblique photographs, South Carolina, 2011 (https://doi.org/10.5066/F7N877XX), a frame over central Myrtle Beach; batch 2026-10-b used the same set for Litchfield and Crescent Beach | Public domain (USGS) |
| Section 5 | An outdoor air conditioning unit beside a house near the ocean, with corroded fins | Partner shot 3 only | None found; Wikimedia Commons was rate-limited all session ("too many requests"). Builder: search Commons for "air conditioner condenser" with "Own work", CC0 or CC BY, and open the file page. A generic unit is fine only if the caption claims nothing local. | Own photo |
| Section 5, optional | A shingle roof being replaced, crew not recognizable | Partner shot 4 | Commons, same search rule | Own photo |

Look at each at full size and at 375 px before captioning. No logos, signs or people as the subject; no house numbers or plates readable. Every photo gets a `photos.json` record that `tools/photos.js` accepts.

## Photo partner shot list (for `templates/photo-request-email.md`)

1. **A typical house in Carolina Forest.** A one-story house on a neighborhood street, whole house in frame from the sidewalk, roof and yard visible, daylight. Two or three different streets. No people, no readable house numbers, no cars with plates, no for-sale signs.
2. **An older condo building in Myrtle Beach, outside.** A mid-rise oceanfront or near-ocean building from the street or the beach, showing the roof line, balconies and outside walls. Two buildings, one older and one newer if easy. No building name or logo as the subject.
3. **Salt air on equipment.** An outdoor air conditioning unit next to a house within a few blocks of the ocean, close enough to see the fins. Ask the owner before photographing on private property; a unit visible from the street is fine.
4. **A roof replacement in progress**, from the street, crew small and not recognizable. Optional.
5. **A house raised on pilings** in Garden City or Surfside Beach, from the street (for the flood line). Optional.

Ask for at least 1200 px wide, landscape, plus one square crop of shot 1. Written line that he took them and Chapter3 may use them on its website and marketing.

## Sibling owners (one fact, one value)

- /buyers/common-mistakes/ owns: paying 6 percent by mistake (CM 13, 14), flood claims outside the zone, the refund rule. This page links; it prints only the same-house tax figures (CM 12 values).
- /buyers/retirees/ owns the 65+ exemption detail (RET 19, 20). This page gives one line and links.
- /invest/run-the-numbers/ owns rental returns, landlord insurance and the condo dues count (its row 14). This page prints "about $650" for the middle condo fee; that page says "between $600 and $700". Same pull method, a day apart: the lead should pick one wording for both.
- /buyers/property-taxes/ owns the bill mechanics and the application steps.
- /buyers/coastal-insurance/ owns wind pool rules and policy shopping.

## Risks for the writer

- No mortgage payment, rate or down payment anywhere, including the calculator defaults and the FAQ.
- "Besides the mortgage" in every total sentence. The condo finding (fact 6) must say the condo's loan is smaller.
- Second-home totals change only the tax (no public second-home insurance figure). Say so in the table note.
- Upkeep and the replacement costs are South Atlantic region figures from a 2023 survey; insurance, utilities and the paid-off figure are Horry County (most of it) from 2024. Say each source's area once, in the sources line.
- Never "salt air raises upkeep by X": no source. The photo can show corrosion; the caption states only what it shows.
- No fair-housing words; no rating of towns.
