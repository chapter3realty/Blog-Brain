# Plan: /invest/rent-prices/

Batch 2026-11-a, Lane U. Spec: `specs/rent-prices.js` (exists; rewrite it). Ledger: `facts.md` (rows marked verified only). Data: `data/2026-11-a/invest-rent-prices/findings.json`. Must-answer list: `must-answer.md`.

## What the judge said, and how this plan answers each point

| Judge's problem | Answer |
|---|---|
| No rent for a 3-bedroom house in Carolina Forest, Socastee, Conway or North Myrtle Beach | Rent by named area from Census places, including Carolina Forest, Socastee and Murrells Inlet (rows 12, 13), plus what landlords ask now by ZIP (row 14) |
| Leads with the fair market rent, which includes utilities and is the 40th percentile; the same table three times | Lead with the asking rent for a house (row 1) and what renters in houses pay (row 3). The fair market rent appears once, in one table, low on the page, with what it is (row 9) |
| "What changes the rent" has no numbers | Every factor with a number: house against apartment (rows 3, 4), bedrooms (row 3), a new lease against an old one (row 7), utilities (row 5), the season (row 17) |
| Stray sentence about first buyers in a new community | Cut |
| No photo, one small chart, mostly tables on a phone; dates in body copy | Three charts and a map-like area chart, photos from the shot list; periods only in chart notes, computed from the data |
| "Read the budget before you offer" | Gone. We do the work: "We set the rent for the house before you offer" (row 24) |

## What to keep from the live page

- The H1 question "How much does a house rent for in Myrtle Beach?" (it matches the search). `data/headlines.json` has no entry for this page; spec pages keep their titles.
- The fair market rent table (one place only) and its 40th-percentile definition (row 9).
- The analyzer link /invest/long-term-rental/ (row 23) and the agent offer (row 24), and the CTA target /invest/run-the-numbers/.
- Internal links: /invest/student-rentals/, /invest/mid-term-rentals/, /invest/where-to-buy/, /buyers/property-taxes/, /invest/landlord-insurance/, /invest/property-management/, /invest/new-construction-rentals/. Add /invest/section-8-rentals/ and /invest/landlord-rules/.
- The homes feed `FOUR_BED_RENTAL` in `idx-lib/feeds.js` stays (four-bedroom homes for sale, for the investor).
- Cut: "What comes out of the rent" (eight costs). /invest/run-the-numbers/ owns costs, coverage and the 1 percent rule; one sentence and a link.

## The reader and their job

An investor or a house owner who wants the monthly rent for a house like theirs, here, now, before buying or before renting it out. Job, in one verb: **know** the number for their house (bedrooms, area), and whether it is rising. Second reader: a renter moving here; the same tables serve them.

## The deciding fact

Public data gives rent by bedrooms and by named area without MLS lease data: Census ACS by place (Carolina Forest and the others are census-designated places), Census microdata for houses alone, and Zillow's house index for today's asking rent. Checked first; see facts.md.

## Findings no other site has

1. **A new lease costs about 30 percent more than an old one** (row 7). On a 3-bedroom house, a tenant who moved in within two years pays about $1,600 a month in lease rent; one who has stayed five years or more pays about $1,250. Our own run of Census microdata; no table publishes it. It is the reason one "average rent" misleads, and it warns a buyer that a seller's rent roll can be below a new lease.
2. **Rent by named area, side by side with what landlords ask now** (rows 12 to 14). Census rent for Carolina Forest, Socastee, Murrells Inlet, Garden City, Little River, Myrtle Beach, North Myrtle Beach, Surfside Beach, Red Hill and Conway, next to Zillow's asking rent by ZIP. Compiled here; no one publishes this table.
3. **Rents kept rising after prices stopped** (row 15). Since four years ago, the asking rent for a house rose about 8 percent and the typical house value stayed flat; a year's rent went from about 6.3 to about 6.8 percent of the value. A comparison not published for this metro.
4. **Which month to end a lease** (row 17): asking rents peak in August and bottom in January, with the August story near the college (row 25).
5. **Two sources agree on a new 3-bedroom lease at about $1,800 with utilities** (row 8): renters who moved in recently, and the federal rent. A cross-check that makes the headline number trustworthy.

## Title, H1, description (proposals; the writer decides)

- Title (30 to 65 characters): "Myrtle Beach Rent Prices: Houses, by Area and Bedrooms | Chapter3"
- H1: "How much does a house rent for in Myrtle Beach?"
- h1em: "By bedrooms, by area, and what a new lease costs."
- Description: "What a house rents for in Myrtle Beach: by bedrooms, in Carolina Forest, Socastee, Murrells Inlet and 7 more areas, and why a new lease costs about 30 percent more than an old one."

## Page shape

Market data (CRAFT 3; `reports/Page shapes by kind of page.md` section 6), with a decision at the end. The main relation is **amount by place and by kind of home**, then **trend**. Lead with the latest number and its change, then the breakdowns, then what it means for an owner, then the next step. Not a list of places: areas are rows in one table and one chart, never a section each (no "What does a house rent for in X?" asked ten times).

First screen on a phone: H1, byline, the short answer with the house figure, the apartment figure and the yearly change; a row of 3 key-fact chips: "House: about $2,070 asking", "3-bedroom lease: about $1,500 plus utilities", "Up about 3% in a year".

## Sections, in order, and what each proves

1. **Short answer** (no heading change; the kit's short-answer block). Two sentences: a house listed for rent here asks about $2,070 a month, an apartment about $1,580 (row 1); asking rents for houses rose about 3 percent in a year (row 2). Third sentence: renters already in a 3-bedroom house pay about $1,500 plus about $200 of utilities (rows 3, 5). Top offer: slim bar, "Have us set the rent for your house" to /invest/run-the-numbers/.
2. **"How much is rent in Myrtle Beach, by bedrooms?"** Answer first: the 3-bedroom house figure. Table from `findings.json` pums_lease_rent: rows 1-bedroom apartment, 2-bedroom apartment, 2-bedroom house, 3-bedroom house, 4-bedroom house; columns "Lease rent a month" and "Plus utilities" (rows 3, 4, 5). One line: about 3 in 10 rented homes are houses, and 6 in 10 rented houses have 3 bedrooms (rows 6, 22), so the 3-bedroom house is the market's middle. Proves: the number for the reader's own house.
3. **"What does rent cost in Carolina Forest, Socastee and the rest of the Grand Strand?"** Answer first: highest in Murrells Inlet and Carolina Forest, lowest in Conway's city limits (row 12). Chart 1 (horizontal bars, `G.bars`, from findings.areas): middle rent with utilities by area, sorted high to low, Horry County as the reference bar; each bar's feature text is the 3-bedroom figure where its margin is not wide (row 13). Then the table: area; middle rent, all homes; 3 bedrooms; what landlords ask now in its ZIP (row 14). Plain column names. A note under it: the first two columns are every lease in place, old and new; the last is homes listed now. Proves: the area answer the judge said was missing.
4. **"Why does a new lease cost more than the rent the last tenant paid?"** Unique finding 1 (row 7). Chart 2: two bars, "Moved in within 2 years" about $1,600 and "Stayed 5 years or more" about $1,250, 3-bedroom houses. What it means for an owner: plan on the new-lease figure when buying empty, and on the old figure when buying with a tenant in place until the lease ends. Optional one line of row 27 if the lead allows (run-the-numbers owns it). Proves: why "the average rent" is not the number to plan on.
5. **"Is rent going up or down in Myrtle Beach?"** Answer first: up about 3 percent for houses in a year, at its highest (row 2). Chart 3 (line, hand-built SVG from findings zillow_house_series_sept and zillow_house_value_series_sept, indexed to 100 at the first year, or two small lines): house rent against house value since 2015; the last four years marked. Text: rents rose about 8 percent in four years while values stayed flat; a year's rent went from about 6.3 to 6.8 percent of the value (row 15); since 2019 both rose about half (row 16). Why: the county grew about 22 percent since 2020, all from people moving in (row 18). Table of values under the chart (September of each year). Link: /invest/run-the-numbers/ for whether one house pays. Story (row 26) only if run-the-numbers drops it.
6. **"When is the best month to rent out a house here?"** Answer first: list it to start in summer; asking rents are highest in August and lowest in January (row 17). Small bar strip of the twelve months (from zillow_seasonal_pct_by_month), labelled "above or below the year's trend". The August story near the college (row 25), one short paragraph, linked to /invest/student-rentals/.
7. **"How much can I rent my house for?"** What we do (rows 23, 24): the analyzer for a screening estimate; an agent sets the rent for the house from local leases and listings before you offer. What moves it, as a short numbered list with one number each: bedrooms (row 3), house or apartment (rows 3, 4), a lease that is new (row 7), who pays utilities (row 5), furnished and shorter leases (link /invest/mid-term-rentals/, no number). Offer box (the kit's CTA, same component as the end): "Tell us the address. We set the rent before you offer."
8. **"What is the fair market rent in Horry County?"** One table, once (row 9): studio to four bedrooms. Plain: it includes utilities, 40 of 100 standard homes rent at or below it, the voucher program uses it (row 28), linked to /invest/section-8-rentals/. One line: it rose about 75 percent for 3 bedrooms in ten years (row 11). Keep this section short; it is the reader's second number, not the first.
9. **"Can a landlord raise the rent in South Carolina?"** Two sentences: no city or county may limit rents (row 20); a month-to-month lease ends with 30 days' written notice (row 21). Link /invest/landlord-rules/ for deposits and the rest.
10. **FAQ** (open text, 5 questions, each a real suggestion; no new facts, each answer a different angle than the body):
    - "What is the average rent in Horry County?" (row 19: about $1,255 with utilities, all homes; South Carolina and U.S. for comparison, row 12.)
    - "How much does it cost to rent a condo in Myrtle Beach?" (row 4, long-term lease; vacation rentals are another market, link /invest/condos/.)
    - "Where is rent cheapest on the Grand Strand?" (row 12: Conway's city limits; row 13.)
    - "Did the fair market rent go down?" (row 10: the 4-bedroom figure fell; 3-bedroom rose.)
    - "Is Myrtle Beach a good place to buy a rental?" (row 15 in one line, then /invest/run-the-numbers/.)
11. **Sources** line and the end offer: "Get the rent for the house you are looking at" (keep the live bottom CTA, tel link).

Siblings: /invest/run-the-numbers/ owns costs, ZIP-level fair market rents, the 1 percent rule and stories 25 and 26 of its ledger. /invest/section-8-rentals/ owns voucher rules. /invest/landlord-rules/ owns the law past rows 20 and 21. /invest/student-rentals/ owns student details.

## Visuals

| # | What | Built from | Notes |
|---|---|---|---|
| 1 | Bar chart: middle rent by area, Horry County as reference | findings.areas (median_gross_rent; 3-bedroom as feature where wide is false) | `G.bars` from glass.js; caption with the period from findings.acs_period |
| 2 | Two bars: new lease against long tenant, 3-bedroom houses | findings.new_vs_long_lease_3br | `G.bars`, rounded to the nearest $50 in labels |
| 3 | Line chart: house rent and house value since 2015, indexed | findings.zillow_house_series_sept, zillow_house_value_series_sept | Hand-built SVG in the spec (no shared line helper; see NEEDS.md); 11 px text minimum at 375 px; table of values under it |
| 4 | Twelve-month strip: the season | findings.zillow_seasonal_pct_by_month | Small bars above and below a zero line; months as letters plus a full-name aria-label |
| 5 | Tables: by bedrooms; by area; fair market rent | findings | Plain column names; cards on a phone if the kit does that |
| 6 | Key-fact chips under the short answer | findings.headline, pums_lease_rent | Three chips, words plus number |

No map: a reader compares amounts, and bars read better than shaded areas (Cleveland and McGill, in the shapes report). If the lead wants one, `tools/area-map.js` regionMap with the ten areas as numbered places and no rent on the map, placed beside chart 1; optional.

## Photos

Each photo shows the sentence beside it. One photo at a time, under its sentence, never above the answer.

| Where | Shows | Candidate now | Licence | Status |
|---|---|---|---|---|
| Section 2 (by bedrooms) | A street of rented one-story houses | Photo partner, shot 1 | own | ask |
| Section 3 (by area) | Houses in Carolina Forest from above | NOAA Emergency Response Imagery, 2026 pre-event flight (the run-the-numbers page already uses a crop: do not repeat its frame; crop a different street, or skip) | public domain (17 USC 105) | builder decides |
| Section 3 | An older street in Conway, the lowest-rent area | https://commons.wikimedia.org/wiki/File:Conway_Residential_Historic_District_Jun_10.JPG (judge's stand-in) | public domain per the judge's note; confirm on the file page | confirm licence; /buyers/programs/ uses a Conway historic home: check it is not the same file |
| Section 6 (the season, students) | Coastal Carolina University, near the student rentals | https://commons.wikimedia.org/wiki/File:Kimbel_Library.jpg (judge's stand-in) | CC BY-SA 4.0 per the judge's note; confirm, credit the author | confirm licence |
| Section 4 or 7 | A "for rent" sign in a yard (no phone number or company readable) | Photo partner, shot 3 | own | ask |

Commons rate-limited this session's API calls; the builder confirms each licence in `tools/photos.js` and looks at each file at full size before use.

## Photo partner's shot list (for `templates/photo-request-email.md`)

1. **A street of one-story rental-type houses in Socastee or Forestbrook**, from the sidewalk, three or four houses in frame, daytime. Landscape. No people, no plates, no house numbers readable.
2. **A typical 3-bedroom house on a street in Carolina Forest**, from the street, whole front and yard. Landscape and a square crop.
3. **A "For Rent" yard sign in front of a house**, anywhere on the Grand Strand, with the sign's phone number and company not readable (or shot from an angle). Landscape.
4. **An apartment or condo building west of Highway 17**, from the street, the whole building. Landscape.
5. **Older houses near Coastal Carolina University in Conway**, from the street, two or three houses. Landscape.

## Writer cautions

- Numbers from `findings.json` only, rounded as the ledger says: about $2,070, about $1,580, about $1,500, about $200, about 30 percent, about $1,600 and $1,250. No more than three numbers in a paragraph; the rest go in the tables.
- Periods (the ACS years, the Zillow month) appear only in chart and table notes, computed from the data file (`acs_period`, `zillow_latest_month`). No typed dates in the body.
- "Asking rent" for Zillow, "lease rent" (contract rent) and "with utilities" (gross rent) for Census. Say which once per table, never "average" for a median except in the FAQ question that readers type.
- The areas: name the place, never who lives there. No "family-friendly", "safe", "best".
- Never a rent for an address; never a lease of one home; never MLS data.
- One fact, one value: the fair market rent appears in one table; the house asking rent is the same rounded figure in the chips, the short answer and the FAQ.
