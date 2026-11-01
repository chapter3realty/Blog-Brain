# Plan: /buyers/first-time-home-buyer-myrtle-beach/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (41 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/`. Spec to write: `specs/first-time-home-buyer.js` (none exists; the live page was hand-made).

## The reader and their job

A renter in Horry County, or someone moving here, buying a first home to live in. A working household: the county's renters have a middle income of about $51,700 (row 25). They have heard the beach is expensive and that you need 20 percent down. They typed "first time home buyer myrtle beach", "first time home buyer sc requirements", "first time homebuyer programs in south carolina" or "average home price myrtle beach".

Their job, in one verb: **plan**. Know how little cash it can take, what their money buys here, where those homes are, and the steps, then call us.

What they want first: how much cash, and whether a house (not only a condo) is within reach. What they know: nothing about FHA, USDA, SC Housing, flood zones or the 4 percent rate. Worries: 20 percent down; out-of-state cash buyers; a condo that turns out to be a trap; a surprise bill after closing. Next question: where to look, who to call.

What they would pay an expert to tell them (CRAFT 1): which kind of home their budget really buys here and where; every way the cash to close comes down; the one form that cuts the tax bill by about two thirds; whether the condo they like can get a loan.

## The deciding fact (checked first)

The H1 the owner liked promises "less cash than you think". Can a `/buyers/` page prove it? PLAYBOOK A17 bans a down payment amount or percentage on every `/buyers/` page, and A14 bans rates and payments. "No down payment" is allowed. So the page proves the promise with the ways the cash comes down, each from a verified row, and never with a down payment figure:
1. No down payment on VA (row 14) and USDA (rows 15, 16), and USDA's area holds about 6 in 10 houses listed at or under $450,000 here, nearly all inland.
2. The seller, a builder or the agents can pay closing costs, up to 6 percent of the price on FHA (row 12): up to $16,200 on the middle $270,000 house (rows 5, 12). Most builders here offer incentives to FHA, VA and conventional buyers (row 17).
3. SC Housing's $10,000 (row 18, owned by `/buyers/programs/`).
4. Gifts from family, an employer, a charity or a program (row 13).
5. Up to $10,000 from an IRA without the 10 percent penalty (row 19).
6. The deed fee is the seller's (row 29); the earnest money is credited at closing (row 28).

This holds. The page can be written as planned.

The second fact that changes the page: **a first house is within reach here, inland.** 2,147 houses sold for under $300,000 in the year (row 4), 521 of them new from a builder (row 3). 576 are listed now at or under $300,000; the middle one has 3 bedrooms and about 1,470 square feet (row 5). The live page's message, condos and "inland" in one sentence, undersells this.

## What the live page has worth keeping

- **The headline** (`data/headlines.json`): title "First Home in Myrtle Beach? You May Need Less Cash | Chapter3"; H1 "Your first home in Myrtle Beach / may take less cash than you think." Keep both; the page now delivers the promise. It passes the local-H1 rule (A22d).
- **Links** (all still right): `/buyers/closing-costs/` (the closing cost calculator; the page has none of its own), `/buyers/programs/`, `/buyers/affordable-places-to-live/`, `/submarkets/conway/`, `/invest/strategies/small-multifamily/` (living in one unit of a duplex), `/buyers/va-loans/`, `/buyers/relocating/`, `/buyers/common-mistakes/`, `/buyers/buying-in-myrtle-beach/`, `/submarkets/`. Add: `/buyers/property-taxes/`, `/buyers/coastal-insurance/`, `/hoa/special-assessments/`, `/buyers/new-construction/`, `/sell/out-of-state-buyers/` (for the buyer-competition line).
- **Ideas that were right, now with facts:** condos and townhomes as entry points (rows 2, 6); the building must be approved for the loan (rows 21 to 23); we read the HOA papers before the offer (CRAFT "We do the work"); a duplex with an owner-occupied loan (link only); "first-time buyer generally means 3 years" (row 10, now with its exceptions).
- **The disclaimer line** "Chapter3 Realty is not a lender", kept in the sources line.
- No calculator, no story, no verified number on the live page.

## What must not survive

From the judge (`audit/judged-2026-10-31.json`), every one solved:
- "No amount, no program limit, no income limit and no example": rows 5, 12, 18, 33 give them; the programs page gives the full limits.
- "It says it will not post numbers that go stale": cut. Numbers carry a staleBy date in the ledger; `build.js dates` carries the page date.
- General text with no local data ("check the zone before you fall for a house"): replaced by row 9 (3 in 100 starter houses in the high-risk zone) and "we check the flood zone of every house you offer on".
- Too much link and offer space (next-steps card grid, three offers, two link rows): one offer box at the top (slim) and one at the end; links go in sentences.
- No FAQPage or Breadcrumb schema, no question headings, no photo, table or chart: all added (below).

From SWEEP.md and the claims rules:
- The listing-search sentence "including off-market homes before they hit the public sites" (mkpage takes the new sentence from its donor; check after the build).
- "A large share of Grand Strand buyers are paying cash from out of state" (no source; replaced by row 24).
- "Chapter3 works alongside an affiliated preferred lender, so your pre-approval, your offer, and your closing are handled by one team" and "fewer dropped balls": reads as financing as a service (claims `financing-as-service`, A17b). Replace with "our preferred lender" in one plain sentence, no team claim.
- "a licensed agent and lender can tell you your real number": a non-answer (CRAFT "Answer here").
- "SC Housing homebuyer loans, competitive fixed-rate mortgages": a rate claim; cut.
- "Talk to a local agent" CTA label is fine; no "Talk to Devin" exists on this page. No Devin or Paul in the copy.
- "Your lender will usually require only hazard insurance, plus flood insurance if the home is in a flood zone": rewrite from row 35.

## The shape

Kind: a **topic guide for a plan** (`reports/Page shapes`, "Topic guide page": the answer to the title question first, what it costs, the steps, what can go wrong, the next step). The main relation is **price to kind of home** (what a budget buys), with **amount to item** (the ways the cash comes down) as the answer block and **step to step** at the end. Dominant shape: the price ladder. The page leads with the cash answer because the H1 promises it, then the ladder carries the rest.

Wrong-shape checks:
- The answer to "how much cash" is in the first screen, as words, not only in a chart.
- No section is a field list; each kind of home gets what living in it is like (rooms, lot, the building) as well as price.
- The page names its trade-offs: a condo building the loan will not approve; the 6 percent bill; flood in the coastal zone.
- It would not read the same for another town: every number is Horry County.
- No down payment figure, rate or payment anywhere, including the FAQ and schema.

## Sections, in order, with what each proves

0. **Hero.** H1 (kept), byline, short answer of about 100 words: "Your first home here can take far less cash than 20 percent. VA and USDA loans need no down payment, and USDA's area takes in most inland houses. A seller or builder can pay your closing costs. SC Housing adds $10,000 for buyers under its limits. And a house is within reach: 576 are listed now in Horry County at or under $300,000, most with 3 bedrooms, nearly 7 in 10 in Conway, Longs or Loris ZIP codes." Rows 5, 8, 12, 14 to 18. (The writer checks "20 percent" against A17: it names the myth as a share of price. If the audit flags it, write "far less than people expect".)
   Key-facts row (glass icon chips, words beside each number): "576 houses listed at or under $300,000" · "Middle one: 3 bedrooms, about 1,470 sq ft" · "No down payment: VA, USDA" · "Seller can pay closing costs" · "About $990 a year in county tax at the 4 percent rate". Rows 5, 12, 14, 15, 33.
   Slim offer bar under it (CRAFT 3, "Measure the top").
1. **"How much cash do you need to buy a first home in Myrtle Beach?"** The six ways the cash comes down, as a short numbered list, each one line with its fact (rows 12 to 19, 29, 28). Then the worked line: "On the middle $270,000 house, an FHA seller credit can be as much as $16,200." Then what is still yours to pay: the inspection and termite report (row 39), the first year of insurance, and the tax and insurance deposit at closing, all of which a seller credit can cover. Link `/buyers/closing-costs/` for the calculator. Proves: the H1's promise, in the first section.
2. **"What does a first-home budget buy here?"** The price ladder chart (below). Then three short paragraphs, one per kind, each with the home itself: condos under $250,000 are mostly 1-bedroom, about 740 square feet (row 6); townhouses at or under $300,000 have 3 bedrooms and about 1,430 square feet (row 6); houses at or under $300,000 have 3 bedrooms, about 1,470 square feet, on a fifth of an acre (row 5). The surprise: new houses sold for less than resales in the middle, about $349,000 against $375,000, and 521 new houses sold under $300,000 (row 3); most builders offer incentives to FHA, VA and conventional buyers (row 17). Proves: a house is within reach, and what it looks like.
3. **"Where are the starter houses?"** Map of houses and townhouses that sold under $300,000 (below), then the ZIP bars: about 7 in 10 sales in 29527 Conway, about 6 in 10 in 29569 Loris, about 4 in 10 in 29526 Conway and 29568 Longs, about 1 in 5 in the 29579 ZIP that includes Carolina Forest, about 1 in 12 in North Myrtle Beach (row 7). One sentence on drive or town life only from rows on the sibling pages; the neighborhoods are on `/buyers/affordable-places-to-live/` (one link, no list repeated). One line: these are the same inland towns inside USDA's area (row 16). Homes feed under it: houses, at or under $300,000, Conway or Longs (if the feed takes a price cap; NEEDS item 3). Proves: where to look, from records no one else counts.
4. **"Condo or house for a first home?"** Two comparison cards (`compareCards`), condo and house, five lines each: what you get (row 6 / row 5), getting the loan (rows 21 to 23: the building must be approved; 9 approved projects in Horry County; rental-program buildings usually are not), flood (row 9: 1 in 6 condos under $300,000 in the high-risk zone, 3 in 100 houses), who else is buying (row 24: about half of cheap condos to out-of-state owners, 1 in 7 houses), the HOA fee and assessments (link `/hoa/special-assessments/`). Then "What we check before you offer": the building's loan approval, the HOA budget and reserves, the flood zone, the insurance quote (row 34). Proves: the condo trade-off, kindly and in numbers.
5. **"What will it cost each year besides the loan?"** The tax example (row 33): about $990 a year at 4 percent, about $3,260 at 6 percent, so the form is worth about $2,260 a year; how to get it (row 32: apply before the January 16 penalty date; we remind every buyer at closing). One line: readers call it the homestead exemption, which here is the separate break for owners 65 and over (row 41). Insurance: we get a quote before the offer (row 34); flood insurance is required in the high-risk zone (row 35) and few starter houses are in it (row 9); the wind pool line in one sentence with a link (row 36). Optional: one of our team's own summer power and water bills on a 1,400 square foot house (row 37), labelled as one household's. Proves: the yearly cost in dollars (CRAFT 1), with no loan payment.
6. **"Do you qualify?"** A short rule table (`h.table`): Test / The rule here / What we check. Rows: "Have you owned a home?" (row 10: FHA 3 years, the IRA rule 2 years, SC Housing in Horry no first-time rule); credit score (row 11: FHA from 500, 580 and up for its largest loan; row 18: SC Housing 640); income (row 25 against row 18: SC Housing's limit is about 2.2 times the renters' middle income); the loan size (row 26: FHA's limit here is $541,287, far above the homes on this page); living in it (row 11: move in within 60 days). Proves: most readers qualify for more than they think.
7. **"Steps to buy your first home here"** (numbered `h.ol`, each step a verb, who does it, how long): 1 Talk to a lender and get pre-approved (our preferred lender, or an SC Housing approved lender when that program fits, row 40). 2 Take the homebuyer course if you use SC Housing (row 18 via programs). 3 Pick the kind of home and the area with us (sections 2 to 4). 4 Get the insurance quote (row 34). 5 Make the offer; the earnest money goes into the broker's trust account within 48 hours (row 28). 6 Inspection and the termite letter (row 39). 7 The appraisal; if it comes in low, our agents send comparable sales for a reconsideration (row 38). 8 Close with a South Carolina attorney (row 30). 9 Move in (within 60 days on FHA, row 11), then file for the 4 percent rate (row 32). Proves: the order, and that we do the checking.
8. **Final offer box**, same component as the top (`G.offer`): headline "Find a first home that fits your budget", one sentence ("Tell us your budget and the kind of home. We send houses and condos that fit, check each building and flood zone, and get you an insurance quote before you offer."), one button "Send me homes in my budget", to the contact form with the page named. No financing words in the label (A17b).
9. **FAQ** (open text, FAQPage schema), each answer led by the fact: How much do I need to buy a house in Myrtle Beach? (section 1 in two sentences). Are there first-time home buyer programs in Horry County? (SC Housing, row 18; no county program a buyer applies to, programs row 20; link). What credit score do I need? (rows 11, 18). Is there a first-time home buyer tax credit in South Carolina? (row 20, rows 31 to 33). Can a condo be my first home? (rows 21 to 23). What is the FHA loan limit in Horry County? (row 26). Do I need flood insurance? (rows 35, 9). Can I use my IRA? (row 19). Do I have to live in South Carolina already? (keep the live answer: no; the home must be your main home; link `/buyers/relocating/`). What are first-time buyer interest rates? (we do not state rates; the lender quotes them; no row).
10. **Sources line**: Horry County deed index and parcel records; Horry County GIS flood zones and ZIP areas; Chapter3's count of homes for sale (CCMLS, in aggregate); HUD Handbook 4000.1 and FHA mortgage limits; VA; IRS Publication 590-B; SC Code 12-43-220, 12-37-220, 12-37-250, 40-57-136; 42 U.S.C. 4012a and FloodSmart; Horry County Auditor 2026 levy and Treasurer; Census ACS 2024; SC Housing (via `/buyers/programs/`). Method lines (filters, land use codes, center points) go here, not in the body (CRAFT 5). "Chapter3 Realty is not a lender. Equal Housing Opportunity."

"On this page": Cash, What it buys, Where, Condo or house, Yearly cost, Qualify, Steps, Questions.

Schema: Article (author Person Devin Day, byline only), BreadcrumbList (Home / Buyers / First-time home buyer), FAQPage. No FinancialProduct, no LoanOrCredit.

## Visuals

1. **Key-facts row** (glass icon chips, `G.glassIcons` or `icons.js atAGlance`): rows 5, 12, 14, 15, 33.
2. **The price ladder** (the page's main visual). Built from `chart-ladder.json`, never typed. Eight price bands down the side (under $150,000 to $450,000 and up); for each, horizontal bars side by side for condos, townhouses and houses, the house bar split into new and resale by shade (or a separate "new houses" value in the label). Not stacked (Page shapes: no stacked bars), so this is a small grouped-bar chart; `G.bars` takes one value per row, so either three `G.bars` blocks (one per kind, same bands, same max) or an inline SVG in the spec with the glass tokens (NEEDS item 1). The one-glance message, in the caption: "Under $200,000, 8 in 10 homes that sold were condos. From $250,000, most were houses." Rows 1, 2.
3. **"What it looks like" tiles** under the ladder: three glass cards (condo under $250,000 / townhouse at or under $300,000 / house at or under $300,000) with bedrooms, square feet, lot, and how many are listed now. Rows 5, 6. Our own drawing per card (`tools/illustrations.js` has no house-type drawings; plain icons from `icons.js` are enough).
4. **Starter-house map.** Dots for the 2,403 houses and townhouses that sold under $300,000 (`map-starter-points.json`), new ones in a second color, on our county base map with town labels at body size. `area-map.js` has no dot layer (NEEDS item 1); the writer either draws the dots as inline SVG over `regionMap`'s projection, or uses `regionMap({ areas })` with the six ZIP areas as outlined areas and a note each ("7 in 10 under $300,000"). Caption: "Houses and townhouses that sold for under $300,000 in the past year cluster inland, around Conway, Longs and Loris." Credit: "Map: Chapter3 Realty, from Horry County deed and parcel records." Then the ZIP bars (`G.bars` from `chart-zip.json`, top 8 ZIPs by count, the share as the value, the count as the feature text).
5. **Condo or house cards** (`compareCards` from `_kit.js`/`compare.js`): rows 5, 6, 9, 21 to 24.
6. **Rule table** (`h.table`): section 6.
7. **Numbered steps** (`h.ol`): section 7.
8. **Homes feed** (IDX, "Live from the MLS"): houses at or under $300,000 in Conway and Longs, if `idx-lib/feeds.js` takes a price cap for this URL (NEEDS item 3); else the default buyers feed, and the copy does not promise a price.
9. **Photos.** None until the photo partner's shots arrive (below): a decorative beach or downtown photo would be a claim the page cannot make (CRAFT 4). Already-licensed fallbacks in `data/photos.json`, each only beside the sentence it shows:
   - "Conway Downtown Historic District Jun 10", Pubdog, public domain, https://commons.wikimedia.org/wiki/File:Conway_Downtown_Historic_District_Jun_10.JPG (file `images/55-plus/myrtle-trace/conway-main-street.webp`), caption "Downtown Conway", beside the Conway sentence in section 3. It shows the town, not starter houses; second best.
   - "Home in the historic district, Conway, South Carolina (18 November 2006)", Pollinator, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Home_in_the_historic_district,_Conway,_South_Carolina_(18_November_2006).jpg. Not for this page: an old historic-district house is not a starter house, and the caption would mislead.
   Wikimedia Commons search returned HTTP 429 (rate limit) on 2026-11-01, the same as for the programs page; no new candidates were found. The writer may retry Commons search for "Conway, South Carolina" street scenes and "Carolina Forest" before the build; every candidate needs a licence record `tools/photos.js` accepts and a full-size look.

## Photo partner shot list (for `templates/photo-request-email.md`)

For the first-time buyer page, to show the kinds of homes a first budget buys here. Most wanted first. All from public roads, no faces, no plates, no house numbers, landscape, three of each. The photos go under `chapter3realty/images/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/` once he confirms in writing.

1. **A street of one-story houses in a Conway subdivision** (29526 or 29527), to show the house most often sold under $300,000 here. Several similar houses, front yards and the street in view. Map link: https://www.google.com/maps/search/?api=1&query=Conway+SC+29527
2. **A street of new houses in Longs** (29568), with a finished house and one being built, to show new houses under $300,000. Map link: https://www.google.com/maps/search/?api=1&query=Longs+SC+29568
3. **Townhomes in Carolina Forest** (29579), a row of two-story townhomes from the street, to show the townhouse that sells near $250,000. Map link: https://www.google.com/maps/search/?api=1&query=Carolina+Forest+Myrtle+Beach+SC+29579
4. **A small condo building a few blocks from the beach in Myrtle Beach**, two or three stories with outside stairs, from the sidewalk, for the condo card. No unit numbers, no building sign as the subject. Map link: https://www.google.com/maps/search/?api=1&query=Myrtle+Beach+SC+29577
5. **A house in Loris** (29569), one story on a large lot, for the line about the inland towns. Map link: https://www.google.com/maps/search/?api=1&query=Loris+SC+29569

Items 1 and 2 overlap the programs page's items 1 and 2 (Conway subdivision street; new houses in Longs or Loris). One trip can serve both pages: the coordinator sends one combined email for the batch and assigns each photo to one page (CRAFT "Siblings share places, not facts"), so the same photo is not on both.

## Sibling owners (one fact, one owner)

- `/buyers/programs/` owns every SC Housing fact, the USDA map, the HUD condo count and the county's HOME program. This page uses rows 15, 16, 18, 20, 22, 23, 40 as one line each, with the same values, and links there. It does not show SC Housing's limits table.
- `/buyers/property-taxes/` owns the 4 and 6 percent math for every town. This page gives one worked example (row 33) from the same levy; its 3.28 ratio agrees with registry `rental-vs-residence-tax` ("about 3.3 times (unincorporated)").
- `/buyers/closing-costs/` owns the closing cost table, the deed fee and the attorney closing.
- `/buyers/coastal-insurance/` owns the wind pool and insurance costs.
- `/sell/out-of-state-buyers/` owns the out-of-state buyer counts. This page's row 24 is a new cut (under $300,000, by kind) from the same file; it does not repeat the 54 percent condo share.
- `/buyers/affordable-places-to-live/` owns the neighborhoods. This page gives ZIP areas and counts, and links there for places.
- `/buyers/new-construction/` (rebuilt in this batch) may want row 3 (new houses sold below resales). This page owns it; that page links here or takes the same value from `findings.json`.
- **This page owns:** the price ladder (rows 1 to 4), what is listed now under $300,000 (rows 5, 6, 8), the starter houses by ZIP (row 7), the flood share by price and kind (row 9), the first-time definitions side by side (row 10), the FHA rules that change a first-time buyer's cash (rows 11 to 13), the IRA rule (row 19), the FHA loan limits (rows 26, 27). Proposed registry rows in `PROPOSED.md`.

## Things to tell the writer

- Every number from a verified row; the charts and the map from the JSON files. Three numbers a paragraph at most.
- No down payment amount or percentage, no rate, no payment, no rent compared with a payment. Rows 11 and 12 hold "90%" and "6 percent of the sales price": the 90 percent never goes on the page; the 6 percent is a seller credit. Run `node build.js audit` on the first draft.
- Spell out once: FHA (the Federal Housing Administration's loan), VA, USDA, SC Housing, HOA, "high-risk flood zone (zone AE or VE on the flood map)".
- No dates in body copy ("the past year" for the deed window; the sources line names October 2025 to September 2026).
- We do the work: "we check the building's loan approval, the flood zone and the HOA papers before you offer", never "check the zone".
- One value per fact: $270,000, about $990 a year, about $3,260, about $2,260, 576, 2,147, 521.
- Run `house-claims.js`, `claims-scan.js`, `repeat-check.js --strict`, `structure-check.js --strict`, `sibling-check.js` after each draft.
