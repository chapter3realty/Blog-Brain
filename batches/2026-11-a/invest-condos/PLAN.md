# Plan: /invest/condos/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-02. Ledger: `facts.md` (33 rows, all awaiting a verifier; use only rows marked `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/invest-condos/` (`zhvi-compare.json`, `findings.json`, `listings.json`; build every chart and table from them, never type a number). Spec to write: `specs/condos.js` (none exists; the live page is hand-made).

## What the judge said, and how this plan answers each point

| Judge's problem | Answer in this plan |
|---|---|
| The short answer is a hedge ("excellent and money pits"); no data at all | The verdict names who it is for and who it is not for, with the 25-year value record against houses (rows 1 to 5). Three of our own counts and a worked yearly cost follow (rows 7, 9 to 12, 23). |
| "Can outperform most coastal rental markets" and "19 million visitors" have no source | Both cut (facts.md "Rows the page should not use"). |
| "2.5 to 3.8 times" conflicts with "about three times" elsewhere | No multiple on this page. The tax is given in dollars on the worked example (row 23); the multiple stays with /buyers/property-taxes/ (registry `rental-vs-residence-tax`). |
| The fee list tells the reader to verify; the FAQ says "check it before you buy" | Section 7 says what we check and what it means. No "verify", "check", "ask the HOA" addressed to the reader. |
| "Most aggressive and expensive on-site managers" with no figures | Cut. Owner question 1 asks for a range of management splits; until then the page says only that we compare the building's rental program with outside managers. |
| No sources line, primary source or local place; scorer fails verdict, question-h2, table, primary-sources, local-entities, sources-line | Every H2 is a searched question; verdict in the first words; three tables; sources line names Zillow Research, Horry County deeds and parcels, FEMA map layer, SC Code, Fannie Mae, Census; local places named in the copy (North Myrtle Beach, the City of Myrtle Beach, Horry County). |
| All text with check marks; no photo of a condo building | Two charts, a decision table, a cost table, a checklist, key-fact chips; one photo of oceanfront condo towers (free licence, or the photo partner's). |
| Idea: Zillow condo index against houses since 2001 | Section 2 chart (rows 1 to 5). |
| Idea: condo vs house resale gains from deeds | The flip page owns the quick-resale gains; this page links it in one sentence and uses a different deed count (sale prices by area and under $200,000, rows 9 to 11; months of supply, row 12). |
| Idea: worked yearly cost of a typical oceanfront condo | Section 4 (row 23): about $19,000 a year before any loan. |
| Idea: decision table | Section 1, right under the verdict. |
| Idea: FEMA zones, "most towers are VE" | Tested. Not so at the parcel point (row 28): about 1 in 6 condos sold sat in a high-risk zone, 42 of 2,439 in VE. The page says what is true. |
| Idea: buildings with the most recorded sales | Not printed here: /submarkets/myrtle-beach/ owns that table for the city, and its counts (resales) differ from ours (all sales) on the same buildings. Link to it and to /invest/condo-buildings/. |

## What the live page has worth keeping

The live page (hand-made, no spec, about 380 words of real information) has no calculator, chart, table, story or verified number, and no entry in `data/headlines.json`. Keep:
- **The question as the H1** ("Are Myrtle Beach condos a good investment?"): it is the top search (must-answer group A).
- **The idea that the building matters more than the unit**, now proved with rows 6, 7, 17 to 19, 25 to 28.
- **"Oceanfront units here still start under $200,000"**: true today and now counted (row 15: 508 of 1,071 oceanfront-building condos for sale ask under $200,000). Say it with the count, and that many are studios and one-bedrooms.
- **"In most buildings you are not required to use the on-site manager, though some master deeds add rules"**: keep only as "we read the master deed and the rental program contract before you buy" unless the owner gives more (owner Q1).
- **Internal links**, in sentences: the analyzer /invest/long-term-rental/, /invest/condo-buildings/, /invest/condotel-financing/, /invest/strategies/dscr-loans/, /invest/property-management/, /invest/rental-program-vs-airbnb/, /invest/cost-segregation/, /sell/sell-my-condo/, /contact/. Add /invest/run-the-numbers/, /invest/non-warrantable-condos/, /hoa/reserves/, /hoa/special-assessments/, /buyers/condo-in-litigation/, /buyers/undisclosed-flooding/, /submarkets/myrtle-beach/, /invest/str-rules/, /invest/strategies/fix-and-flip/.
- **"Our preferred lender, BrickWood Mortgage"** link: allowed wording, but naming BrickWood in the body needs the inline affiliated-business disclosure in the same paragraph. Simpler: "a loan officer at our preferred lender" with no name.
- Cut everything in facts.md "Rows the page should not use".

## The reader and their job

An investor, often from out of state, thinking about one condo, usually in an oceanfront building. Job: **decide whether a condo here is a good investment for them, and what to look for in the building.** They know condos have fees. They do not know how high the fees run, that a rental pays the 6 percent tax rate, that many oceanfront buildings cannot get a normal loan, or that condo values fell harder than houses last time. They worry about a special assessment, a storm, and a manager who takes most of the rent. Next they ask: "which building, and what would this one make?" That is the offer: send us the building or the listing.

## The deciding fact (checked first)

Condo values here have not grown like houses. In the Myrtle Beach metro the typical condo fell about 43 percent from 2006 to 2012 (houses about 30), took about 15 years to pass its old high (houses about 13), grew about 107 percent since late 2001 (houses about 149), and is about 11.5 percent below its 2023 high while houses are within 2 percent of theirs (rows 1 to 4). So the page is not "yes, pick the building". It is: a condo here is bought for income and a low entry price, not for growth, and the building decides whether the income is there.

## Findings no other site has

1. **Condos against houses, 25 years, one chart** (rows 1 to 5). Nobody local has published the condo and house series side by side through the crash, the recovery and the current fall. The condo is now worth about 64 percent of a house, as low as it has been in 25 years (3 of 299 months lower).
2. **Our count from county parcels: about 1 in 5 condos is someone's home** (8,797 of 40,963), against about 6 in 10 other homes (row 7). Half of all condo units are in 104 complexes of 100 units or more (row 6). The reader learns that a condo building here is a building of rentals and second homes, which is why the rules, the fee and the rental program matter more than the unit.
3. **Our count from deeds and listings: about 12 months of condos for sale, against about 4 months of houses** (row 12). A condo is easier to buy and slower to sell. This is the buyer's leverage today and the seller's problem later.
4. **North Myrtle Beach condos sell for about twice Myrtle Beach's** ($340,000 against $175,000, deeds; the asking prices show the same split, row 11 and 16).
5. **The yearly cost of one typical oceanfront condo, in dollars** (row 23): fee about $12,900, tax about $5,200 inside the city, unit insurance about $970; about $19,000 a year before the loan, management and cleaning.

## Title, H1, description

- Title (30 to 65 characters): **"Are Myrtle Beach Condos a Good Investment? The Numbers"** (54). Alternative: "Myrtle Beach Condo Investment: Prices, Fees, Pros and Cons" (58). Both keep the top search words ("good investment", "condo", "pros and cons").
- H1: "Are Myrtle Beach condos a good investment?" / em: "For rental income, often. For a rising price, houses have done better."
- Description (one sentence, numbers from rows 1 and 9 to 14): for example "Condos here fell 43% after 2006 and are 11% off their 2023 high. The middle one sells for about $224,000 with a $650 HOA fee. Here is who they suit."
- Keep the URL, `crumb` (Home / Invest / Condo Investing), `author: "devin"`, reviewer Tim Nash. No date typed; `build.js dates` sets it.

## Page shape

Decision guide (CRAFT 3; `reports/Page shapes by kind of page.md` section 9): verdict with conditions, then a decision table, then one section per condition in order of how often it decides the case, then the cost, then what to do next. A market chart (section 2) carries the deciding fact; a cost table (section 4) carries the yearly total. One offer box near the top (slim bar) and one at the end.

Short answer (first two sentences under the H1, the verdict): "Usually yes, if you want rental income near the beach and you buy into a sound building that allows nightly rentals. Usually no, if you are counting on the price to rise: over 25 years condos here grew about 107 percent and houses about 149 percent, and condos fell further in the last crash." Then one line: the middle condo sold for about $224,000 last year, and the middle HOA fee for sale is about $650 a month.

Key-fact chips (glass, with words, 3 only): "Middle condo sale: about $224,000" (row 9); "Middle HOA fee: about $650 a month" (row 14); "About 12 months of condos for sale" (row 12).

## Sections, in order, and what each proves

0. **Short answer + chips + slim offer bar** ("Send us a building or a listing. We read its papers and run the numbers before you offer.").

1. **"Is a condo or a house the better investment in Myrtle Beach?"** (toc: Condo or house). The decision table, "If this is you" against "Then", 6 rows, each from verified rows:
   - You want the lowest price into a beach rental → a condo (rows 10, 13, 15: about half the oceanfront condos for sale ask under $200,000).
   - You are counting on the price to rise → a house (rows 1 to 4).
   - You want to rent by the night near the ocean → a condo in an oceanfront building that allows it (row 17).
   - You need an FHA or VA loan → most likely a house; few condos for sale take them (row 19).
   - You may need to sell within a few years → a house sells faster (row 12).
   - You do not want to manage a roof, a pool or the building's insurance → a condo; the fee usually covers them (row 18).
   One sentence under it: the building decides the rest (link to section 7).

2. **"How have Myrtle Beach condo prices done compared with houses?"** (toc: Prices). Answers "condo market crash", "prices dropping", "appreciation". Chart 1 (below). Text: the fall (row 1), the recovery (row 2), now (row 3), 25 years (row 4), condo as a share of a house (row 5). Say what it means: a lower entry price and a cheaper unit next to a house than at any time since 2001, but no record of steady growth. No forecast.

3. **"What do condos cost to buy in Myrtle Beach and North Myrtle Beach?"** (toc: Prices to buy). Answers "condos under $200,000", "cheap", "North Myrtle Beach condo prices". Rows 9, 10, 11, 13, 15. Chart 2 (below). One sentence on the cheap end: many of the oceanfront units under $200,000 are studios and one-bedrooms (row 15 note: 629 of 1,071). Link to the homes search for condos under $200,000.

4. **"How much does it cost to own a Myrtle Beach condo each year?"** (toc: Yearly cost). Answers taxes, HOA fees, insurance. The cost table (below) for the worked example (row 23), then:
   - Why the fee is high: an oceanfront fee is about $925 against about $650 for all condos (rows 14, 15), and about 8 in 10 fees include the building's insurance (row 18). About 1 in 5 condos for sale charge more than $1,000.
   - Taxes: one sentence on 6 against 4 percent (row 20), the dollars are in the table; the 25 percent exemption and the tax reset go to /invest/run-the-numbers/ in one linked sentence. Lodging taxes are paid by the guest, about 13 percent inside the city (row 24), link /invest/str-rules/.
   - Special assessments: one sentence and links to /hoa/special-assessments/ and /hoa/reserves/.

5. **"Can you rent out a Myrtle Beach condo by the night?"** (toc: Renting it). Answers "Airbnb", "rental income", "rental management". Rows 17, 7 (who owns condos: 1 in 5 is a main home, so the building is run for renters), 31 (rental programs, escrow and transfer fees), 29 (the Boston story, short, labelled "his real numbers, from a real story, not a promise"). Then: we compare the building's rental program with outside managers before you buy (owner Q1 may add a range). Link /invest/rental-program-vs-airbnb/ and the analyzer /invest/long-term-rental/ for one unit's numbers. Inside the City of Myrtle Beach, zoning decides where nightly rentals are legal: one line and a link to /submarkets/myrtle-beach/.

6. **"Can you get a mortgage on a Myrtle Beach oceanfront condo?"** (toc: Loans). Answers "condotel", "financing". Rows 25, 26, 19, 32, 31. Two sentences of the Fannie Mae rule in plain words, the FHA and VA counts, the cash point (a non-warrantable building ties up more cash; no percentage). "A loan officer at our preferred lender" for any loan fact. Links /invest/condotel-financing/ and /invest/non-warrantable-condos/. If BrickWood Mortgage is named, the inline affiliated-business disclosure goes in the same paragraph.

7. **"What should you look for in a Myrtle Beach condo building?"** (toc: The building). Steps, as what we do (owner Q2): the budget and the fee; the reserve study and any special assessment voted or planned (link /hoa/reserves/); the rental rules and any rental program (row 33); the loan status (row 25); the flood zone and the master policy (row 28: about 1 in 6 condos sold sat in a high-risk zone; link /buyers/undisclosed-flooding/); any lawsuit (link /buyers/condo-in-litigation/); the seller's balance with the HOA (row 27: we get the association's statement before closing). Then the upside of knowing a building: our observation of the 22.32 percent average discount from a distressed owner in a sound building (row 30). Link /invest/condo-buildings/ for oceanfront buildings and their fees.

8. **FAQ** (open text, 5 questions, each answer from the rows above, first sentence is the answer):
   - "Are Myrtle Beach condo prices dropping?" (row 3)
   - "Why are HOA fees so high in Myrtle Beach?" (rows 14, 15, 18)
   - "Are Myrtle Beach condos in a flood zone?" (row 28)
   - "Do you need to live in a Myrtle Beach condo to get the lower tax rate?" (row 20)
   - "Is North Myrtle Beach or Myrtle Beach better for a condo?" (rows 11, 16: price only, by feature, no steering)

9. **Offer box** (the site's end box): "Send us a building or a listing. We read the budget, the reserve study, the rental rules and the loan status, and run the numbers before you offer." Same label as the top bar.

Sources line: Zillow Research (ZHVI metro, condo/co-op and single-family); Horry County Register of Deeds index and county parcel and flood map layers; Census ACS 2020-2024 if row 8 is used; S.C. Code 12-43-220 and 27-31-210, -220; Horry County 2026 tax levy; Fannie Mae Selling Guide B4-2.1-03; active listings from CCMLS through our site, counted in aggregate.

## Visuals

| # | Visual | Data file | What it shows | Notes |
|---|---|---|---|---|
| 1 | Line chart, two lines: typical condo and typical house value, Myrtle Beach metro, 2001 to 2026 | `zhvi-compare.json` `chart_yearly_december` (December points plus 2026-09) | The deeper fall, the slower recovery, the current dip | Label three points from `findings.condo`: 2006 high, 2012 low, 2023 high. Flat glass style, both themes, a table of values under it (CRAFT 3, market data). |
| 2 | Horizontal bars: middle condo sale price by area (North Myrtle Beach, outside city limits and other towns, City of Myrtle Beach) and a bar for all other homes | `findings.json` `sales.condo_by_area`, `sales.other.median_price` | NMB about twice MB; condos under houses | Sale counts in the bar labels. Round to $1,000 in labels as the text does ($340,000, $200,000, $175,000, $326,000). |
| 3 | Cost table with a total row: HOA fee, property tax at the rental rate in the City of Myrtle Beach, unit insurance, total | `listings.json` `oceanfront_building_2bed`; rows 21, 22 | About $19,000 a year before the loan | Caption: the middle 2-bedroom for sale in an oceanfront building, not a value for any unit. One extra line: outside city limits the tax is about $4,100. |
| 4 | Decision table, 6 rows (section 1) | rows named in section 1 | Condo or house, by situation | Cards on a phone (`compareCards` or a two-column table that stacks). |
| 5 | Two short bars or a pair of chips: share of condos that are someone's main home (21 percent) against other homes (62 percent) | `raw/ratio-counts.json` | A condo building here is mostly rentals and second homes | Optional; may sit in section 5 as one chip row instead. |
| 6 | Numbered steps (section 7), icons with words | none | What we check in a building | `tools/icons.js`; no check-mark wall. |
| 7 | One photo of oceanfront condo towers (section 3 or 5) | photo record | What an oceanfront building looks like | See Photos. Caption states the fact beside it (e.g. "Oceanfront condo towers in Myrtle Beach. About 94 in 100 oceanfront condos for sale say they allow nightly rentals."). |

No map: the page is about a kind of property, not a place, and the city and NMB pages own the maps.

## Photos

Wikimedia Commons file pages were read for licences in this session; every image download returned HTTP 429, so **none has been viewed yet**. The builder must open each at full size, confirm it shows condo towers and no person as the subject, no readable business sign as the subject, and write a licence record `tools/photos.js` accepts. Files go under `chapter3realty/images/2026-11-a/invest-condos/`.

| Use | File | Licence (from the file page) | URL | Note |
|---|---|---|---|---|
| Section 3 or 5, first choice | Myrtle Beach, South Carolina, USA 100420-F-8430J-049 | Public domain (U.S. Air Force photo) | https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_South_Carolina,_USA_100420-F-8430J-049.JPG | Likely an aerial of the beachfront; confirm towers are visible at phone width |
| Section 3 or 5 | Myrtle Beach Hotels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Myrtle_Beach_Hotels.jpg | Title says hotels; caption must say "oceanfront towers", not "condos", unless the buildings are known condo regimes |
| Section 5 | Myrtle Beach, SC, photographed from 9th floor of hotel IMG 4501 | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_SC,_photographed_from_9th_floor_of_hotel_IMG_4501.JPG | The view an oceanfront renter buys; caption by fact |
| Section 3 (North Myrtle Beach) | North Myrtle Beach seen from South Carolina Highway 31 - 01 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:North_Myrtle_Beach_seen_from_South_Carolina_Highway_31_-_01.jpg | Only if towers are visible |
| Avoid | Resorts Along Myrtle Beach; Homes and Resorts Along Myrtle Beach (CC BY-SA 2.0, formulanone) | | | Planned for /submarkets/myrtle-beach/; two pages should not share one photo |

## Photo partner shot list

Also in `shot-list.md`. The page works without these; each replaces a Commons stand-in or adds the subject itself.

1. **An older low-rise oceanfront condo building next to a newer high-rise tower, on one block of Ocean Boulevard** (Myrtle Beach or North Myrtle Beach). From the beach side or the street, daylight, landscape, both buildings whole. Why: shows that "oceanfront condo" covers very different buildings, with different fees and loan status. Section 7.
2. **The parking deck and pool deck side of a typical Ocean Boulevard tower.** From the street or a public beach access, landscape. Why: shows what the HOA fee pays for. Section 4.
3. **A garden-style condo complex away from the beach** (two or three stories, several buildings around a pool or a pond, for example west of US 17 or in Carolina Forest). Landscape. Why: half the county's condo complexes have 8 units or fewer, and many condos are not towers. Section 3.
No person as the subject, no readable unit numbers, plates or business signs. With each photo, send the street and the building or complex name, and confirm in writing that we may use it as our own.

## Siblings and who owns what

- **/submarkets/myrtle-beach/** (this batch) owns everything inside the City of Myrtle Beach: the nightly-rental zones, the city's condo main-home share (about 1 in 8), the city's condo flood share, the busiest oceanfront buildings in the city, the city's months of supply and its one-bedroom income example. This page gives county figures only and links there once (section 5).
- **/invest/run-the-numbers/** (this batch) owns the rental calculator, the tax reset after a sale, the 25 percent exemption, the 1 percent rule counts and its Myrtle Beach condo sheet. This page links it in section 4 and does not restate its condo example.
- **/buyers/property-taxes/** owns the rental-to-home tax multiple (registry `rental-vs-residence-tax`).
- **/invest/condotel-financing/** and **/invest/non-warrantable-condos/** own loan detail. This page gives the Fannie Mae rule in two sentences.
- **/invest/condo-buildings/** owns oceanfront buildings and their fees, building by building.
- **/hoa/reserves/** and **/hoa/special-assessments/** own reserves and assessments. **/hoa/liens-and-foreclosure/** (this batch) may own the lien rule; match its wording for row 27.
- **/invest/strategies/fix-and-flip/** owns quick-resale gains for condos and houses.
- **/sell/out-of-state-buyers/** owns out-of-state buyer shares; this page does not print them.
- **/invest/str-rules/** owns lodging taxes (row 24 is one line).

## Writer cautions

- No interest rate, payment, or down payment percentage anywhere; row 32 is qualitative.
- No value for any unit; the worked example is "the middle 2-bedroom for sale", from 162 listings.
- No forecast. Rows 1 to 5 say what happened.
- Row 17 and 19 are what listings say. Write "say they allow", "say they accept", and that we confirm the building's rules and the loan.
- Row 11 uses city limits; row 16 uses mailing city. Use row 11 for the claim; row 16 only as "asking prices show the same split".
- Row 28: "at the center of its parcel" stays in the ledger and the sources line, not the sentence. Never "most towers are in VE".
- "North Myrtle Beach or Myrtle Beach" is answered by price, fee and what the buildings offer, never by who lives there (fair housing).
- Each fact once. The $224,000, $650 and 12 months appear in the chips and once in their section; the verdict carries the 107 and 149 percent.
- The Boston story: never name the hotel brand or the building; "helps manage fourteen units"; label it.
- Do not tell the `quiet-sale-condo` story (limits: hub only).
- No "check", "verify" or "ask the HOA" addressed to the reader. We check.
- Spell out HOA once ("homeowners association (HOA) fee"), FHA, VA, FEMA once each.
