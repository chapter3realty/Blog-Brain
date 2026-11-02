# Plan: /buyers/common-mistakes/ (Lane U, batch 2026-11-a)

Spec to write: `specs/common-mistakes.js` (new; the live page is old-template HTML with no spec). Ledger: `facts.md` (37 rows). Must-answers: `must-answer.md`. Data: `<web2>/data/2026-11-a/buyers-common-mistakes/` (README lists every script). Build with `node tools/mkpage.js specs/common-mistakes.js`, theme "glass" (tools/glass.js), like /invest/strategies/fix-and-flip/.

## What the live page has worth keeping

- **The headline the owner liked** (`data/headlines.json`): title "Myrtle Beach Buyer Mistakes That Cost the Most | Chapter3", H1 "The Myrtle Beach buyer mistakes that cost the most." Keep both. The new page finally keeps the H1's promise: it ranks the mistakes by dollars.
- **Internal links:** /buyers/first-time-home-buyer-myrtle-beach/ (top note), /buyers/condo-in-litigation/ (condo entry), /contact/ and the phone link. Add the links in "Siblings" below.
- **The idea that we do the checking** ("Our agents find these before you close"). Keep it, made concrete in each entry ("We ...").
- **The deed fee line** (seller pays, $3.70 per $1,000, buyer pays at a master-in-equity sale): true and registered (`deed-fee-payer`), but /buyers/closing-costs/ owns it. One FAQ line with a link.
- **The buyer-representation point**, corrected (rows 36, 37). This page is the owner page of registry row `buyer-agreement-source`; keep it true.
- **The three stories** are the best-liked part (judge), but none is in `stories/stories.json`. Cut them now; restore word for word if the owner confirms (facts.md owner question 1, PROPOSED.md 1). Until then, the page carries one real owner observation (`ny-buyer-rules-fit`, row 39) and two labelled examples (rows 12 and 18).
- Nothing else: no calculator, no verified number, no photo. The search box ("Coming soon") goes.

## The reader and their job

A buyer from another state who has bought a house before, somewhere else, and is now buying here: to live in, as a second home, or a condo to rent. They do not know the tax classes, the flood maps, the city lines or the contract here. They are afraid of the mistake they do not know to ask about.

**Job, in one verb: avoid.** Kind of page: **checklist, ranked by cost** (Page shapes: "Not miss anything", with the "Know the total" device of an itemized table). The reader's decision is the spine: for each mistake, "does this apply to me, what does it cost, and who catches it".

## The deciding fact (checked first)

The ranking holds on public records. On the middle Horry County house (about $350,000, row 16), living in it at the 6 percent rate costs about $2,930 a year more in unincorporated Horry County and about $3,930 more in the City of Myrtle Beach (row 12). The county's records show the mistake is common: about 1 in 7 people who bought a house in 2024 and get the tax bill at that house are still taxed at 6 percent (row 13).

## What makes this page unique (findings nobody else has published)

1. **Our count from county records: recent buyers still taxed as a second home.** Of people who bought a house in 2024 and get the tax bill at the house, about 1 in 7 (1,091 of 7,633) are taxed at 6 percent; 2025 buyers about 1 in 5; people who bought in 2018 or 2019 about 1 in 18 (row 13). In district 100 alone that is about $1.8 million a year, a middle of about $2,750 a house (row 14).
2. **Our count: 8 in 10 houses for sale in FEMA's high-risk zone do not say "flood zone" in their listing features** (196 of 245; condos 636 of 814), tested point by point against the county's flood map (row 31).
3. **What flood insurance really costs here, from FEMA's own policy file**: a middle of about $550 a year for a lived-in house outside the high-risk zone, about $1,070 inside it, about $3,240 in the coastal V zone (row 28). Nobody publishes Horry County medians by zone; the live page guessed "$400 to $700 per month".
4. **One flood against a year of cover**: since 2015 the middle FEMA repair payment on a house outside the high-risk zone was about $26,400, more than inside it (about $15,700), and equal to about 48 years of the middle policy (rows 29, 30).
5. **Worked example on a real local rule set: the seller's tax bill.** A $350,000 house held since about 2010 shows a bill of about $800; the buyer of the same house as a second home pays about $4,220, five times as much (row 18).
6. **Why movers miss the 4 percent rate**: the county wants a South Carolina license and car registration at the house before it approves (row 9). Plain, local, and not on the national lists.

## Title, H1, first screen

- Title (keep, owner liked): "Myrtle Beach Buyer Mistakes That Cost the Most | Chapter3".
- Meta description (draft): "The Myrtle Beach home buyer mistakes ranked by what they cost on a $350,000 house: the 6 percent tax, flood cover, the seller's tax bill, condo reserves, city rental zones."
- H1 (keep): "The Myrtle Beach buyer mistakes that cost the most."
- Short answer, first two sentences (draft for the writer, from rows 12, 13, 28, 29): "The costliest mistake here is living in your home but paying the 6 percent tax rate meant for second homes: on a $350,000 house that is about $2,930 a year. About 1 in 7 people who bought a house in 2024 and live there still pay it." Third sentence: "The next ones are about flood cover and the seller's tax bill, and each one below says what it costs and when we catch it."
- Key-facts row (3 glass tiles, icon plus words, from rows 12, 31, 29): "About $2,930 a year: 6 percent instead of 4 on a $350,000 house"; "8 in 10 houses for sale in the high-risk flood zone do not say so in the listing features"; "About $26,400: the middle flood repair on a house outside the high-risk zone".
- Then the slim offer bar (glass top bar): "Send us the address before you offer."
- Measure the top on a phone before writing (CRAFT 3): H1, byline, answer, tiles and the bar must fit about 1.5 screens; the ranked table starts by screen 2.
- Remove: the broken search box, the "Before You Buy" kicker block above the H1 (keep the first-time buyer link as one line under the answer), the two navy "Talk to an Agent" bands in the middle.

## Sections in order, and what each proves

"On this page" list (short labels): The ranked list; 1 The 6 percent tax; 2 The seller's tax bill; 3 Flood cover outside the zone; 4 A flood zone the listing does not show; 5 Condo reserves; 6 Weekly rentals in Myrtle Beach; 7 The inspection; 8 Who your agent works for; 9 Rules that do not fit; 10 Your job before closing; When we catch each one; Questions.

### 0. What are the biggest mistakes when buying a house in Myrtle Beach? (the ranked table)

Heading is the search ("biggest mistakes when buying a house", plus the place). First sentence: the answer (the 6 percent tax). Then the **ranked table** (glass table; cards on a phone via compare.js, or the spec's own cards if a cell passes 40 letters, as the retirees spec did): columns "Mistake", "Who it hits", "What it costs on a $350,000 house", "When we catch it". Ten rows, in this order, each from a row:

| # | Mistake (short label) | Who it hits | What it costs (from) | When we catch it |
|---|---|---|---|---|
| 1 | Living here at the 6 percent tax rate | Anyone who will live in the home | About $2,930 a year; about $14,700 in five years (row 12) | At closing, and after you move in |
| 2 | Budgeting from the seller's tax bill | Second-home and rental buyers | About $3,400 a year more than the seller's bill shows (row 18) | Before you offer |
| 3 | No flood cover outside the high-risk zone | Owners outside the zone | One middle flood repair about $26,400; cover about $550 a year (rows 28 to 30) | During due diligence |
| 4 | A high-risk flood zone the listing does not show | Buyers who rely on the listing | Cover the loan will need: about $1,070 a year lived in, about $1,370 if not (row 28) | Before you offer |
| 5 | A condo building that has not saved for repairs | Condo buyers | Example: about $4,750 a unit in one bill (row 35) | Before you offer |
| 6 | Planning weekly rentals in a Myrtle Beach residential zone | Investors | The rental plan; fines up to $500 per occurrence (row 23) | Before you offer |
| 7 | A thin or skipped inspection | Every buyer, most of all on septic or well | The repair, and your chance to ask the seller to pay (row 25) | During due diligence |
| 8 | Assuming the agent you called works for you | Buyers who call off a sign | Advice on your side of the deal (rows 36, 37) | Before you tour |
| 9 | Rules that do not fit how you live | Boat, cart and rental owners | The boat, the cart or the rental (row 39) | Before you offer |
| 10 | Changing jobs before closing | Movers | The loan, days before closing (row 38) | Before closing |

Build the table from one JS array in the spec, fed from `examples.json` and the findings files (never typed numbers). Each label links to its entry.

### Entries 1 to 10, one place each (numbered, in table order)

Each entry: an H2 that is a question a reader asks, the answer in the first sentence, the local fact that makes it different here, what it costs, and **what we do** (CRAFT 5: we do the work; never "check", "verify", "ask the HOA"). No label lines. Each fact said once on the page. Entries 1 to 5 run 150 to 250 words; 6 to 10 run 80 to 150.

1. **"Are you paying the 6 percent tax on a home you live in?"** Rule in plain words (rows 1 to 4): live in it and apply, and the county taxes 4 percent of the value with no school operating tax; otherwise 6 percent and the full school tax. Cost: the $350,000 example in both places (row 12). Finding 1 chart (below). Why people miss it: the county wants the SC license and SC car registration at the house, tax returns, and the old home's bill with no exemption (row 9); you certify no one in the household claims another state (row 4). Good news first inside the entry: move in any time in the year and the rate covers the whole year (row 8); apply once (row 6). Deadline: the county asks by the end of May; the law's last day is January 15 after the tax year (rows 5, 6). Missed it: a refund of recent overpaid years can be claimed (row 10). What we do (owner question 2): we price the bill both ways for your plan, and at closing we hand you the county's checklist and the order to do it in (license, car, then apply online, row 7). Link /buyers/property-taxes/ (owns the bill) and, for 65 and older, /buyers/retirees/ (owns the homestead exemption).
   - **Visual: bar chart (glass, flat), "Still taxed at 6 percent, with the tax bill mailed to the house"**: bought 2018 or 2019: 6 percent; bought 2024: 14 percent; bought 2025: 22 percent. From `parcels-findings.json` (counts in the alt text and a small table under it). Caption says the group: houses owned by a person, the bill mailed to the house.
2. **"Why is my tax bill so much higher than the seller's?"** The seller's bill is the seller's: a long-held home is taxed on a capped value (row 17), and a sale resets it, first taxed the year after (row 15). Labelled example (row 18): three bars, "Seller's bill about $800", "Your bill as your home about $1,290", "Your bill as a second home about $4,220". What we do: we never price a deal from the seller's bill; we price it at your price and your class. Link /buyers/property-taxes/ for the reset.
   - **Visual: three-bar chart** from `examples.json` "seller_bill_example". Labelled "Example".
3. **"Do I need flood insurance if the house is not in a flood zone?"** No lender makes you buy it; the answer is the two numbers. Rows 20 and 19 (3 in 10 paid claims since 2015 were outside the high-risk zone), row 29 (the middle repair outside was about $26,400, more than inside), row 28 (cover outside about $550 a year for a lived-in house), row 30 (about 48 years of cover). What we do: get a flood quote inside the due diligence period on every house, in or out of the zone. Link /buyers/undisclosed-flooding/ (owns "did this house flood").
   - **Visual: two glass number tiles side by side** ("About $26,400: one middle flood repair outside the high-risk zone" | "About $550 a year: the middle policy there for a home you live in"), from `examples.json` "flood". Photo under the sentence: the CC0 Tropical Storm Debby street photo (below), caption states only what it shows.
4. **"Will the listing tell me the house is in a flood zone?"** Often not: finding 2 (row 31). About 1 in 4 condos resold in the county sat in the zone, and 1 in 15 houses (row 22). With a regulated lender in the high-risk zone, the loan requires flood insurance and the lender must tell you in writing before signing (row 21); what it costs (row 28, lived in, not lived in, V zone). What we do: we test every address against FEMA's map before you offer, not at the lender's notice.
   - **Visual: one stacked bar per type** (houses: 49 say so, 196 do not; condos: 178 and 636), from `flood-tag-findings.json`, re-pulled at build (stale 2026-12).
5. **"How do I know a condo building has saved enough for repairs?"** South Carolina does not require reserves (row 33); most condos for sale are in buildings built in 1996 or earlier (row 34, age computed in the spec); labelled example $380,000 gap, about $4,750 a unit (row 35), and the lender rule rising to 15 percent from January 4, 2027 (row 35). What we do: we get the budget, the reserve figure and the minutes before you offer. Link /hoa/reserves/ (owns how much is enough), /hoa/special-assessments/, /buyers/condo-in-litigation/.
   - **Photo:** partner shot 2 (an older oceanfront building under repair). Until then, no photo.
6. **"Can I rent my Myrtle Beach house by the week?"** Inside the City of Myrtle Beach, only where zoning allows it; R districts do not, except RMV; 24 grandfathered houses; fines up to $500 and/or 30 days per occurrence (row 23). One sentence: the rules change town by town, and the unincorporated county is different; link /invest/str-rules/ (owns every town). What we do: we check the zoning of the address before you offer.
7. **"Should I skip the inspection to win the house?"** No: the law puts the duty to inspect on you (row 25), and the seller's form is what the seller knows (row 26). Septic and wells: rare at the beach, common inland (row 32: about 1 in 16 houses for sale lists a septic tank; about 1 in 4 in Loris, 1 in 3 in Aynor, 1 in 11 in Conway; 79 list a well). What we do: we line up the inspection inside the due diligence period, with the septic and well checks where they apply (owner question 2). The real stories go here if the owner confirms them.
   - **Photo:** partner shot 1 (a septic cleanout or tank lid in a yard). Until then, no photo.
8. **"Does the agent I called work for me?"** Not until you both sign: SC presumes you are a customer and the firm a transaction broker (row 36). The written agreement before touring, what it must say, and that fees are negotiable and not set by law (row 37). Never "costs you nothing", never a commission rate. What we do: we explain both choices on the first call and put our duties in writing.
9. **"Will the HOA let me keep my boat, golf cart or rental?"** The owner's observation (row 39, rules-fit version, no quotation marks): the biggest mistake buyers from New York make is not checking the covenants against how they live. What we do: we read the covenants before the offer (owner question 2). Link /buyers/no-hoa-homes/ for buyers who want no HOA.
   - **Photo:** partner shot 3 (a golf cart parked on a neighborhood street).
10. **"Can I change jobs while buying a house?"** On most conventional loans the lender checks your job again no more than 10 business days before closing (row 38). One short paragraph. Never a rate or payment; any loan detail is "a loan officer at our preferred lender".

### When we catch each one (the stage timeline)

A step timeline (numbered glass steps, horizontal on desktop, vertical on a phone): **Before you tour** (8), **Before you offer** (2, 4, 5, 6, 9), **During due diligence** (3, 7), **Before closing** (10), **After closing** (1). Each step lists only the mistake numbers and short labels, linked to the entries, plus one line on the due diligence period (row 27: the period you and the seller agree on; inside it you can end the contract with notice and the agreed fee). No new facts, no repeated text. This answers the judge's "group by stage" without a second list of the same mistakes.

### Questions (FAQ, open text, FAQPage schema)

Only questions whose answers are not already in an entry:
- "Who pays the deed stamps in South Carolina?" The seller, $3.70 per $1,000, except a master-in-equity or government sale (registry `deed-fee-payer`; cite its owner page /buyers/closing-costs/ ledger, or cut if the verifier wants a row here).
- "Do out-of-state buyers make different mistakes?" Yes: the tax class (mistake 1) and the license and car registration the county asks for (row 9). One sentence, links.
- "What are the costs of buying besides the price?" One line, link /buyers/closing-costs/ (owns it; do not print a percentage here).

### The offer

One label throughout: "Send us the address". Top: slim glass bar. End: the full offer band: "Send us the address before you offer. We price the tax bill both ways, test the flood map, check the city's zoning and get the HOA papers." (owner question 2 must confirm the list). Phone link. No middle bands.

### Sources line

At the end, one plain list: SC Code sections (12-43-220, 12-37-220, 12-45-70, 12-60-2560, 12-54-85, 12-37-3140, 27-50, 40-57-350, 40-57-370), Horry County Assessor checklist and news, Horry County Auditor 2026 levy, Horry County GIS parcels and flood zones (our counts), OpenFEMA NFIP policies and claims (our counts), City of Myrtle Beach planning page, NAR, Fannie Mae Selling Guide, Chapter3 listing data counted in aggregate. Method lines go here, not in the entries.

## Siblings: who owns which fact

| Fact | Owner page | This page |
|---|---|---|
| How a tax bill is built, the reset, the calculator | /buyers/property-taxes/ | The cost of the mistake and our count; link |
| Homestead exemption at 65 | /buyers/retirees/ | One link in entry 1 |
| Did this house flood, disclosure law on flooding | /buyers/undisclosed-flooding/ | Flood cost and the listing finding; link |
| Wind and homeowners insurance | /buyers/coastal-insurance/ | Link only |
| STR rules for every town | /invest/str-rules/ | City of Myrtle Beach rule only; link |
| Reserves, assessments | /hoa/reserves/, /hoa/special-assessments/ | One example; links |
| Closing costs, deed fee | /buyers/closing-costs/ | FAQ line; link |
| Steps of a purchase | /buyers/buying-in-myrtle-beach/ (also in this batch) | Its writer should cut its copied mistakes sections and link here (judge). Tell the lead (NEEDS.md 2). |

Retirees uses a $400,000 example; this page uses $350,000 (the county's middle resale house). The ratios (3.3 and 3.8 times) match /buyers/property-taxes/.

## Visuals, summary

| Visual | Kind | Data |
|---|---|---|
| Key-facts row | 3 glass tiles with icons | examples.json, flood-tag-findings.json, claims-findings.json |
| Ranked table | glass table, cards on a phone | examples.json and findings files |
| Still at 6 percent by year bought | flat bar chart | parcels-findings.json |
| Seller's bill vs yours | 3-bar chart, labelled Example | examples.json |
| One flood vs a year of cover | 2 number tiles | examples.json |
| Listings in the zone that say so | stacked bars | flood-tag-findings.json (re-pull at build) |
| When we catch each one | numbered step timeline | none (labels and links) |
| Photos | see below | |

No map: the one map the judge asked for (city rental zones) cannot be drawn from a source we can reach (facts.md Not verified 1), and a map of the FEMA zone already lives on /buyers/undisclosed-flooding/.

## Photos and free-licence candidates

Every photo gets a licence record that `tools/photos.js` accepts, files under `chapter3realty/images/2026-11-a/buyers-common-mistakes/`. Look at each at full size before use.

| Use | Candidate | Licence | Status |
|---|---|---|---|
| Entry 3 (flood outside the zone) | "TS Debby flooding on Sixth Ave. S.jpg", Wikimedia Commons, by Johnson524, 5712 x 4284. Description: "Flooded street on Sixth Ave. S in North Myrtle Beach, SC, during Tropical Storm Debby". https://commons.wikimedia.org/wiki/File:TS_Debby_flooding_on_Sixth_Ave._S.jpg | CC0 (read from the Commons API 2026-11-02) | Builder: open full size; caption only "A flooded street in North Myrtle Beach during Tropical Storm Debby." Do not say the street is in or out of the high-risk zone unless tested. No date in the caption. |
| Entry 3, alternative | "TS Debby flooding on US 17 N.jpg", same uploader, https://commons.wikimedia.org/wiki/File:TS_Debby_flooding_on_US_17_N.jpg | not read (API rate-limited) | Builder: open the licence page. |
| Entry 1, optional | "New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg", https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg | not read | Only if a source puts the Assessor's office in that building; the application is online, so the photo is optional. The 4 vs 6 bar chart carries the entry. |
| Entries 5, 7, 9 | Photo partner shots 1 to 3 | our own once confirmed in writing | See shot-list.md |

Rejected: the Großbeeren septic field photos (Germany, not the subject here); Florence National Guard photos (people as the subject).

## Photo partner shot list

In `shot-list.md`: a septic cleanout or tank lid in an inland yard, an older oceanfront condo building under repair, a golf cart on a neighborhood street, a raised house with flood vents on a street near the beach, and optionally the Horry County government center in Conway.

## Wrong-shape questions (CRAFT 3)

- Is this really a checklist, or a cost page? Both: the reader came to "not miss anything", and the H1 promises "cost the most". So the list is ranked by cost, with the itemized table as the opening device, not a total.
- Would a stage-ordered list be better than a cost-ordered one? The H1 is about cost. The stage view is kept as one compact timeline after the entries, linking back, so neither list repeats the other.
- Is anything here a place list? No. No neighborhood is named with a conclusion.

## Gates the builder must run

repeat-check --strict, structure-check, struck-check, claims-scan (watch "costs you nothing", "best", "family-friendly", "safe"), facts-check (registry `rental-vs-residence-tax`, `deed-fee-payer`, `buyer-agreement-source`, `wind-pool-line`), house-claims (B54) on "most houses" sentences, critic.mjs at 390/768/1440, FAQPage and BreadcrumbList schema present.
