# Plan: /invest/rental-program-vs-airbnb/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-04. Ledger: `facts.md` (use only rows marked `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/invest-rental-program-vs-airbnb/` (`findings.json` from `compute.py`, `listings.json`, `raw/by-building.json`). Build every number, chart and table from `findings.json`; never type one. Spec: `specs/rental-program-vs-airbnb.js` (exists; rewrite it).

## What the judge said, and how this plan answers each point

| Judge's problem | Answer in this plan |
|---|---|
| Never answers "what you keep"; the share is "in the agreement, ask for it" | The first two sentences give the number: one oceanfront program's written terms took 38.6 percent of the rent before other charges, and its sample statement paid the owner about 29 cents of each rent dollar (rows 1 to 3). Airbnb takes 15.5 percent, Vrbo 12 (rows 11, 12). |
| No worked example | Two: per $1,000 of rent (row 13) and one real year on the average Myrtle Beach listing, both ways (row 15). Plus the manual's real sample statement drawn as a statement (row 3). Plus a calculator. |
| Names no Myrtle Beach building or local entity | Our building table from live listings (CRM rows): which oceanfront buildings have most units for sale in a rental program. Local bodies named: City of Myrtle Beach, Horry County, SCDOR, the S.C. Real Estate Commission. |
| Gives the reader tasks ("Ask for it", "Check the exclusivity clause", "Read the agreement") | Every one becomes "we": we pull the program agreement and the last 12 statements, we read the exclusivity and exit terms, we check who remits each tax. The FAQ answers with what the one agreement we read says, then what we check. |
| No photos, one text table | A drawn owner statement, a per-$1,000 bar chart, a comparison table, a building table, a decision table, the calculator, and one or two photos of oceanfront towers with a front desk resort (Commons stand-in; photo partner's shot list). |
| No FAQ for "how much do rental programs charge in Myrtle Beach" | First FAQ, answered with rows 1 and 16. |
| Idea: master-deed list of required programs | Not done: the county's deed index is not searchable by clause, and reading master deeds one by one is a separate project. The building table answers the reader's need (where programs are) from listings; the page says we read each building's recorded documents before an offer. |
| Idea: real program shares from client statements | Owner question 1. The manual is the published stand-in. |
| Idea: one building, program statement against AirROI | AirROI building figures may not be used (brief: str-market.json only). Row 15 uses the city's average listing instead. |
| Idea: calculator | Planned: gross bookings, program share, monthly program charges, platform fee (15.5 or 12), cleaning and supplies per year, owner hours. Returns net both ways, the gap, and dollars per hour of the owner's time. Defaults from rows 1, 2, 11, 14. |
| Idea: CRM count of program listings by building | Done (CRM rows). |
| Idea: who remits which tax, two columns | Section 6 table (rows 17 to 19). |

## What the live page has worth keeping

The live page is spec-built (`specs/rental-program-vs-airbnb.js`, about 1,100 words), has no calculator, chart, story or local number, and no entry in `data/headlines.json`. Keep:
- **The H1 question** "Rental program or Airbnb for a Myrtle Beach condo?" and the promise "What you keep." Now the page keeps it.
- **The definitions** (a rental program is the building's own rental desk; what self-managing involves). Shorter.
- **The tax facts**, re-verified (rows 17 to 19), in the owner's own register: "If Airbnb or Vrbo take the payment, they are responsible for the taxes."
- **The lender section**, re-verified (row 8) and made concrete (row 9).
- **The checklist of agreement terms**, turned into "what we read in the agreement" (no reader tasks).
- **Internal links**, in sentences: /invest/airbnb-income/, /invest/accommodations-tax/, /invest/14-day-rule/, /invest/condotel-financing/, /invest/non-warrantable-condos/, /buyers/coastal-insurance/, /invest/run-the-numbers/. Add /invest/str-tools/ (calculator for the self-managed side), /invest/str-vs-ltr/, /invest/str-tax-treatment/, /invest/property-management/, /invest/condo-buildings/, /invest/condos/, /invest/str-rules/.
- **The homes feed** `RENTAL_PROGRAM` in `idx-lib/feeds.js` ("Condos in buildings with a rental program", Myrtle Beach and North Myrtle Beach). It matches the page. Leave it.
- **Drop:** "Airbnb's host fee is 3 percent", "Vrbo 5 percent plus 3 percent" (both wrong now), the "Card processing: often a separate line" cell (not sourced), "In most programs the program does [set the rate]" (not sourced), the AirCover paragraph (owned by /buyers/coastal-insurance/; one link is enough).

## The reader and their job

An owner or buyer of an oceanfront condo, most often living out of state (about 58 percent of county condo units mail the tax bill outside South Carolina, row 24). The listing or the HOA says the unit is "in the rental program". Job: **decide whether to keep the unit in the building's program or run it on Airbnb or Vrbo, or which kind of building to buy.** They know Airbnb. They do not know what the desk keeps, that the agreement may make the desk the only agent, that leaving takes months, or that the program can change the loan. Worried about: fees eating the income, and a bad cleaner and night calls if they self-manage. Next question: which buildings work which way, and what we do.

## The deciding fact (checked first)

What a program takes. Found in a primary local document: one oceanfront resort's owner manual set the program at 35 percent of gross rent plus 2.6 percent marketing and 1 percent inventory, with a $53 monthly club fee and repairs on top (rows 1 and 2). Its sample statement paid the owner $66.84 of $229.95 (row 3). The manual is an older copy (2017 to 2021), so the page states its terms in the past tense as one program's written terms. The owner-observed manager range (40 to 60 percent full service, row 16) shows the figure is in line with the market today.

## Findings no other site has

1. **A real Myrtle Beach owner statement, line by line** (row 3), and the program's full terms (rows 1, 2, 4 to 7): fee, extra charges, the only-agent rule, the 90-day exit, the dishware brands. No local page publishes one.
2. **The break-even, in one number** (row 13): of each $1,000 of rent the program left $614, Airbnb leaves $845. Self-managing wins as long as the cleaner, linens, supplies and your time cost less than $231 of each $1,000. And one real year (row 15): about $6,600 a year in Myrtle Beach, about $8,600 in North Myrtle Beach, to pay the cleaner and the owner's hours.
3. **The manual against the lender's hotel list** (row 9): four of the hotel services lenders name (front desk registration, central keys, central phone, decorating rules) are written into that program's rules. It shows the reader why a program building gets a different loan, from the documents, not from a claim.
4. **Our count from live listings** (CRM rows): how many oceanfront condos for sale say they are in a rental program, how their conventional-loan flag compares with the rest, and the buildings where nearly every unit for sale is in the program.
5. **What changed**: Airbnb is moving every host to 15.5 percent and Vrbo now charges 12 percent (rows 11, 12). The old 3 percent figure, still on many sites and on the live page, is going away. This also narrows the gap between self-managing and a program.

## Title, H1, description

- Title (30 to 65 characters): **"Myrtle Beach Condo Rental Program vs Airbnb: What You Keep"** (58). Alternative: "Rental Program vs Airbnb in Myrtle Beach: Fees and Net" (54). Keeps "rental program", "Airbnb", "Myrtle Beach", "condo".
- H1: "Rental program or Airbnb for a Myrtle Beach condo?" / em: "What you keep, both ways."
- Hero sub (no we, our, us): "A rental desk can keep close to 40 cents of each rent dollar. Airbnb now keeps 15.5. The gap pays the cleaner and your time."
- Description, one sentence from rows 1, 11, 13: "One Myrtle Beach rental program kept 38.6% of rent; Airbnb takes 15.5%. See the owner statement, the break-even and the buildings with programs."
- Keep the URL, crumb, `author: "tim"` as live (or the batch's byline rule), no date typed.

## Page shape

Comparison (CRAFT 3; `reports/Page shapes by kind of page.md` section 4), with the decision guide's table (section 9) as its verdict. Order: the verdict by situation; a three-column comparison table (Rental program, Airbnb or Vrbo yourself, Local manager); one section per attribute that decides it, in order of how much it moves the money; the worked example both ways with the same numbers; which fits which owner; the next step. Offers: slim bar under the short answer, a box after about every second section, the full band at the end. Each offer is a request ("Have us ...", "Send us ...").

## Sections, in order, and what each proves

1. **Short answer** (no H2). First two sentences: "A Myrtle Beach rental program usually keeps far more of each booking than Airbnb. One oceanfront resort's program kept 38.6 percent of the rent before other charges; Airbnb now takes 15.5 percent from most hosts." Then: the program asks nothing of your time; self-managing keeps about $230 more of each $1,000 for the cleaner and your hours. Rows 1, 11, 13. Slim offer: "Send us the building. We pull the program terms and run it both ways."
2. **H2 "How much does a rental program take in Myrtle Beach?"** The manual's terms in a sentence; the drawn owner statement (row 3); what managers here take (row 16). Visual: the statement as a receipt-style card built from `findings.json` `manual.statement`. Proves: the number the judge asked for, from a document.
3. **H2 "Which keeps more: the program, Airbnb or Vrbo?"** The per-$1,000 bar chart (`per_1000`: program 614, Airbnb 845, Vrbo 880, full-service manager 400 to 600). The break-even line (row 13). Then the comparison table (below). Proves: the gap in one picture. Offer box: "Have us run your building's numbers both ways."
4. **H2 "What does a year look like both ways?"** The worked year (row 15) as a two-column table with a total row, Myrtle Beach and North Myrtle Beach. Then the calculator, defaults from the Myrtle Beach year. Says what is left out of both sides (HOA fee, tax, insurance, utilities). Proves: the gap in dollars a reader can plan with, and the dollars per hour of their own time.
5. **H2 "Which Myrtle Beach buildings have rental programs?"** The CRM count and the building table (CRM rows): building, city, units for sale, share in a program. One sentence on the conventional-loan flag gap. Link to /invest/condo-buildings/ for fees by building. Offer: "See condos for sale in a rental program" (the homes feed) and "Have us read a building's program agreement". Proves: the local, named answer.
6. **H2 "Can you leave the program or list on Airbnb too?"** The only-agent clause, the referral commission instead, the 90-day exit with rekeying (rows 4, 5). What we read in every agreement before an offer: the share and its base, every charge, exclusivity, owner-use terms, the exit notice and what happens to booked stays. Proves: the trap readers do not see coming.
7. **H2 "Can you still use your own condo?"** Owner stays booked through the office and checked in at the front desk (row 7); the 14-night rule either way (row 22), linked. Short.
8. **H2 "Does a rental program change the loan?"** The lender's hotel list (row 8) and the manual matched against it (row 9) as a two-column table: "What the lender lists" / "What the program's rules say". Our owner's view (row 10). Links to /invest/condotel-financing/ and /invest/non-warrantable-condos/. Offer: "Have us check how lenders treat a building before you offer." Proves: why the program building is a different purchase.
9. **H2 "Who pays the lodging taxes in each case?"** Table: Program books / Airbnb or Vrbo books / You book directly, against state tax, county fee, city taxes, license (rows 17 to 20). The owner's sentence. Link /invest/accommodations-tax/ for the totals.
10. **H2 "Who is allowed to run it for you?"** Row 21: an owner needs no license; anyone paid to list or rent it for you needs a South Carolina license. A short paragraph, because readers search "co-host". Row 23 in two sentences with a link to /invest/str-tax-treatment/.
11. **H2 "Which one fits which owner?"** Decision table, 4 to 5 rows, described by how the owner uses the unit, never by who the owner is (STANDARD C5): "You want no calls and live far away" → program; "You will answer guests and can hire a cleaner you trust" → self-managed; "You want to stay often in peak weeks" → self-managed in a building that allows it; "The building's documents require the program" → the question is whether that building's numbers work with the share taken out. One line from stories `str-cheapest-cleaner` as our observation (no quote marks): the worst self-managing mistake we see is the cheapest cleaner.
12. **FAQ** (open text): "How much do rental programs charge in Myrtle Beach?", "Do I have to join the building's rental program?", "Can I use Airbnb while I am in the program?", "Who pays the accommodations tax when the program books the guest?", "Does Airbnb still charge hosts 3 percent?", "Does joining a rental program affect my loan?". Each answers with a fact, then what we do.
13. **Sources line** and **end offer band**: "The owner statement shows what you keep. Send us the building and we run it both ways." Disclaimer: educational, not tax or legal advice.

## Comparison table (section 3)

Columns: Rental program | Airbnb or Vrbo, run yourself | Local manager. Rows, each from a row: what it takes (38.6% plus charges, row 1 to 2 / 15.5% or 12%, rows 11 to 12 / 40 to 60% full, 13 to 17% basic, row 16); who cleans (the program / your cleaner / the manager); who sets prices and books (the program, the only agent in the agreement we read, row 4 / you / the manager); your own stays (through the front desk, row 7 / any time / by agreement); leaving (90 days' notice in the agreement we read, row 5 / any time / by contract); taxes (the program pays / the platform pays on its bookings / the manager, county says check, row 19); your time (almost none / messages, calendar, cleaner, repairs / little). On a phone: cards, one per option.

## Visuals

| # | Visual | Data | Tool |
|---|---|---|---|
| 1 | Owner statement card (receipt style: rent, fees, other charges, check) | `findings.json` manual.statement | spec HTML with glass card; numbers read from the JSON |
| 2 | Bar chart: owner keeps of each $1,000 (program, Airbnb, Vrbo, full-service manager low and high) | `findings.json` per_1000 | `G.bars` (glass.js) |
| 3 | Comparison table, cards on a phone | rows 1, 2, 4, 5, 7, 11, 12, 16, 19 | `compareCards` (compare.js) |
| 4 | Worked year table with total row | `findings.json` years | `h.table` |
| 5 | Calculator: net both ways, gap, dollars per owner hour | defaults from `findings.json` | spec script, like fix-and-flip's |
| 6 | Building table: building, city, for sale, share in program | `findings.json` buildings.table | `h.table`; top 10 to 12 rows |
| 7 | Lender list against the manual, two columns | rows 8, 9 | `h.table` |
| 8 | Tax table: who pays, three columns | rows 17 to 20 | `h.table` |
| 9 | Decision table | rows as cited | `h.table` |

Charts flat and clean, liquid glass cards (CRAFT 4). One picture at a time, under its sentence.

## Photos

Wikimedia Commons answered HTTP 429 to every query from this container on 2026-11-04, so **no file page was opened and no licence is confirmed**. The builder must open each file page, check the licence, look at the picture full size and at phone width, and write a licence record `tools/photos.js` accepts. Files go under `chapter3realty/images/2026-11-a/invest-rental-program-vs-airbnb/`.

| Use | Candidate | Licence (to confirm) | Note |
|---|---|---|---|
| Section 2 or 8, the oceanfront resort context | File:Myrtle_Beach,_South_Carolina,_Thanksgiving_2018.jpg (https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_South_Carolina,_Thanksgiving_2018.jpg) | CC BY-SA 4.0 per the judge's note | The beach from a high floor. Caption by fact: what an oceanfront program unit rents. |
| Section 5 | File:Myrtle_Beach_Pier_in_August_2022.jpg (https://commons.wikimedia.org/wiki/File:Myrtle_Beach_Pier_in_August_2022.jpg) | CC BY-SA 4.0 per the judge's note | Only if oceanfront towers are visible behind the pier; otherwise drop. |
| Avoid | The USGS 2011 aerials and "oceanfront towers from the beach" photos already on /invest/condos/, /invest/str-tools/ and /invest/str-vs-ltr/ | | Two pages should not share one photo. |

No photo of a named resort's logo, sign or front desk interior. A drawn statement and charts carry the facts; a photo here only sets the place, so one is enough.

## Photo partner shot list

Also in `shot-list.md`.

1. **The covered entrance and check-in drive of an oceanfront resort with an on-site rental desk**, from the public street, daylight, landscape. No people as the subject, no readable sign as the subject. Why: shows what "the building's rental desk" is. Section 2, top.
2. **A row of oceanfront condo towers on Ocean Boulevard, from the beach**, landscape, several buildings whole. Why: the page counts listings by building; shows the reader the kind of building. Section 5.
3. **A keypad lock on a condo door in a self-managed building**, close, no unit number visible. Why: self-managing means keyless check-in you run yourself. Section 3, beside the comparison table.
4. **A resort-style keycard lock on a condo door**, close, no unit number visible. Why: the program's central key system is one of the lender's hotel signs (row 9). Section 8. Pair with shot 3.

With each photo, send the street and the building, and confirm in writing that we may use it as our own.

## Siblings and who owns what

- **/invest/str-tools/** owns the self-managed calculator, the Airbnb fee share by plan (86 percent on 15.5), and the town tax totals. This page's calculator compares the two ways only, and links there for a full self-managed estimate.
- **/invest/str-vs-ltr/** owns nightly against yearly lease. One link.
- **/invest/condo-buildings/** owns oceanfront buildings and their HOA fees. Section 5 counts programs only and links there.
- **/invest/condos/** (this batch) owns condo stock, out-of-state ownership, the lender rule in two sentences. This page reuses its 57.7 percent once and gives the lender rule in full, because here it decides the choice.
- **/invest/accommodations-tax/** and **/invest/str-rules/** own the tax totals and city rules.
- **/invest/14-day-rule/** and **/invest/str-tax-treatment/** own the tax rules; one paragraph each here.
- **/invest/property-management/** (this batch) owns managers for long-term rentals and what a manager does. This page owns the on-site program. Match row 16's wording with it.

## Writer cautions

- The manual: past tense, "one oceanfront resort's owner manual" or "the program's written terms". Never "Myrtle Beach programs take 38.6 percent", never "today". Name the document in the sources line only (recommended).
- Row 15 is not a promise of income. Say "on the average Myrtle Beach listing's bookings".
- Chapter3 does not manage, book or clean (BIZ-5). "We pull the agreement and the statements, read the terms and run the numbers" is what we do.
- No rate, payment or down payment. The loan section stays qualitative.
- CRM: "listings that say the unit is in a rental program", never "buildings that require a program".
- Fair housing: describe the use, never the owner.
- Each fact once: 38.6 percent and 15.5 percent appear in the short answer, the chart and the table; nowhere else in body text.
- Sentences under 28 words, no "So" openers, no "Here is", no pseudo-clefts, no em dashes.
