# Plan: /invest/property-management/

Batch 2026-11-a, Lane U. Spec: `specs/property-management.js` (exists; rewrite it). Ledger: `facts.md` (rows marked verified only). Data: `data/2026-11-a/invest-property-management/findings.json` and `fees.json`. Must-answer list: `must-answer.md`.

## What the judge said, and how this plan answers each point

| Judge's problem | Answer |
|---|---|
| The H1 asks what management costs and the page never gives a number | The first two sentences give it: about 10 percent of the monthly rent, plus half a month to a full month's rent to place a tenant (rows 2, 3). Then the dollars a year on a typical house (row 11). |
| The site disagrees with itself: the analyzer says 8 to 10 percent; this page only had one national firm's 10 and 15 | One value: "about 10 percent, with some plans at 8" agrees with the analyzer's "8 to 10 percent" (row 2). Short-term figures use the site's existing ranges, 13 to 17 and 40 to 60 percent (row 8), with the published local figures beside them (row 7). |
| Most of the page is licence and trust-account law the landlord did not search | Law shrinks to one section near the end, "What South Carolina makes a manager do, and how to get out", in plain rules (rows 18 to 24). The deposit detail links to /invest/landlord-rules/. |
| A to-do list for the reader: eight "ask" items | Gone. We do the work: "We read the agreement's fee lines and exit terms with you, and check the manager's licence, before you sign" (rows 21, 31, 34). The reader gets a short list of what we look for, written as what we check. |
| The fee table is 3 cramped columns of long text at 390 px | The fee table becomes cards on a phone (`compareCards`), two short cells each. The worked year is a 4-row table with a total row, numbers only. |
| No photos, no chart, no worked example | A bar chart of where far-away owners live (row 13 to 16), a worked year in a table (row 11), an illustration of the money flow (tenant to trust account to owner, rows 19, 20), photos (below). |
| Ideas: published fee schedules; a worked year; LLR licence count; a decision table; a worked booking for accommodations tax | Done: rows 1 to 7, row 11, the decision table, and the taxed-or-not table for a booking (rows 25 to 27). The LLR count is blocked by a reCAPTCHA (Not verified; NEEDS.md). |

## What to keep from the live page

- The H1 question "What does property management cost in Myrtle Beach?" (it matches the search). Title stays "Myrtle Beach Property Management: What It Costs | Chapter3" (30 to 65 characters; `data/headlines.json` has no entry for this page).
- The law it cited, cut down: licence (40-57-20), manager-in-charge and trust account (40-57-136), the agreement's terms (40-57-135(J)), the deposit (27-40-410), disclosure (27-40-420). Every line is re-read in this ledger.
- The short-term tax facts, now with the cleaning-fee rule and the county fee inside and outside city limits (rows 25 to 28).
- The CTA target /invest/run-the-numbers/ and the owner-approved line "we read the owner-use and exit terms of any agreement with you before you sign".
- Internal links: /invest/rental-program-vs-airbnb/, /invest/accommodations-tax/, /invest/str-setup/, /invest/run-the-numbers/. Add /invest/long-term-rental/ (the analyzer), /invest/landlord-rules/, /invest/rent-prices/, /invest/str-vs-ltr/, /invest/out-of-state/, /invest/condos/, /invest/landlord-insurance/.
- The homes feed `WARRANTY_RENTAL` in `idx-lib/feeds.js` ("Rental-friendly houses with a home warranty") stays. A home warranty is a fair hook for an owner who will not be there for repairs; the spec does not change feeds.js.
- Cut: the "What is a property manager?" textbook opening (one plain list of the work replaces it); the "Ask for ..." list; the paragraph on the tenant notice after closing (it moves into one FAQ line).

## The reader and their job

An owner, or a buyer about to own, a rental on the Grand Strand, who usually lives somewhere else. Job, in one verb: **decide** whether to hire a manager, knowing what it costs in dollars. Second readers: a buyer of an oceanfront condo comparing the building's rental desk with an outside manager; a local owner deciding to self-manage.

## The deciding fact

Local managers publish their fees: five that serve Horry County print their long-term terms, and four of five charge 10 percent of the rent (rows 1, 2). Without it the H1 could not be answered from a source. Checked first.

## Findings no other site has

1. **Two in three rentals and second homes here are owned from outside the Grand Strand** (rows 13 to 16). Of about 102,500 Horry County homes taxed at the 6 percent rate (not anyone's legal residence), 63 percent send the tax bill outside the Grand Strand: 78 percent of condos, 57 percent of other homes. Leave out the 261 big mailing addresses (timeshare companies, builders, large landlords) and it is still 64 percent. The control holds: 98.5 percent of legal-residence homes mail locally. Our own count from the county's parcel file. It is the reason this page exists: most owners cannot drive over when the air conditioning fails.
2. **What local managers actually print, in one table** (rows 1 to 7). The share, the leasing fee, the renewal fee and the setup fee from every Horry County manager we found that publishes them, plus the vacation rental figures. No site compiles this; the live page said no number could be found.
3. **The real yearly cost is about 12 percent, not 10** (row 11). On a $1,600 house, the 10 percent share is about $1,900 a year; a year with a new tenant comes to about $2,700 to $3,400; a renewal year about $2,000. With a new tenant about 1 year in 4 (row 10, from Census microdata), the long-run cost is about $2,200 to $2,400 a year. A worked example on published local terms.
4. **"As low as 7 percent" is about 9 percent on a typical house** because of a $150 minimum (row 6). Small, surprising, and it teaches the reader to compare dollars.

## The page shape

Kind of page: **cost breakdown that ends in a decision** (CRAFT 3: "Know the total" leads with the typical total and an itemized table with a total row; "Decide" gives a decision table). The cost is what they typed; the decision is why they typed it. One dominant shape per section; the spine is the reader's decision, not the topic's outline.

Top of the page on a phone: H1, byline, the two-sentence answer, a row of three key-fact chips ("About 10% of the rent", "Half to one month's rent to place a tenant", "About 12% a year all in"), the slim offer bar. Under 1.5 phone screens before the first section.

## Sections, in order, with what each proves

1. **Short answer** (no heading change; the kit's short-answer block). "Most Myrtle Beach property managers that publish their fees charge 10 percent of the monthly rent on a long-term rental, plus half a month to a full month's rent each time they place a tenant. On a typical 3-bedroom house that is about $2,200 to $2,400 a year over time, about 12 percent of the rent." Then one sentence for vacation rentals: "A vacation rental manager takes about 13 to 17 percent of bookings for a basic plan and about 40 to 60 percent for full service." Then: "Chapter3 does not manage property. We help you pick a manager and run the numbers with the real fee in." Rows 2, 3, 8, 11, 35.
2. **"How much do property managers charge in Myrtle Beach?"** The published long-term terms as cards (phone) or a table (desktop): one card per firm, unnamed ("A North Myrtle Beach firm", "A Myrtle Beach firm", "A regional firm"), with share, leasing fee, renewal fee, setup fee. One line on what is left out (eviction charges, repair markups: story `pm-eviction-fees`, row 32). One sentence on the 7 percent minimum (row 6). Proves: the number, from the source. Rows 1 to 6, 32.
3. **"What does a manager cost in a year on a typical house?"** The worked year table: 10 percent share; leasing fee in a year with a new tenant; renewal fee in a year it renews; long-run average with the "1 in 4" turnover; total row. One sentence: "That is why we put about 12 percent, not 10, into the numbers before you buy." Mid-roll offer 1: "Have us run this house with a manager's fee in" (to /invest/run-the-numbers/). Rows 9 to 11.
4. **"What does a vacation rental manager charge here?"** Two plain cards: basic plan (13 to 17 percent; you arrange cleaning and repairs) and full service (40 to 60 percent; marketing to repairs). Under them, what local firms print (10 to 25 percent; one firm charges cleaning to guests), and the Myrtle Beach worked year: about $25,800 in bookings, about $3,300 to $4,500 to a basic plan. Link to /invest/str-vs-ltr/ and /invest/rental-program-vs-airbnb/. Rows 7, 8, 12.
5. **"Do I need a property manager, or can I manage it myself?"** Opens with unique finding 1 and its chart (where owners of 6 percent homes get their tax bill). Then the decision table (below). Then the self-manage line from story `str-cheapest-cleaner` (row 33) and what an unlicensed helper may not do (row 22). Mid-roll offer 2: "Ask us which managers our investors use" (to /contact/, row 34). Rows 13 to 17, 22, 33, 34.
6. **"What does a property manager do for the fee?"** Two short lists side by side (long-term; short-term), plain verbs: advertise, screen under fair housing law (row 30), sign the lease, collect rent, arrange repairs, return the deposit; or price, book, message guests, clean between stays, file the taxes. The money-flow illustration under it (tenant, trust account, owner; rows 19, 20). Rows 19, 20, 30.
7. **"Who files the taxes on a short-term rental?"** The taxed-or-not table for one booking: the nights (taxed), a required cleaning fee (taxed), an optional cleaning fee (not taxed), the manager's share (not on the guest's bill; the tax is on the full booking). Then who pays it in (whoever takes the payment; retail licence only if you book guests yourself), the county fee (3 percent outside city limits, 1.5 percent inside), the Myrtle Beach business licence. Link to /invest/accommodations-tax/ and /invest/str-setup/. Rows 25 to 28.
8. **"What South Carolina makes a manager do, and how to get out of a contract"** Five plain rules, one sentence each: licence (row 18); manager-in-charge and trust account, deposits stay until the lease ends (rows 19, 20); the agreement must be written and state the pay, renewal pay in underlined capitals on page one, no tie to a later sale (row 21); automatic renewal only with a 30-day exit after the first term (row 21: "how to fire a property manager"); the deposit is your duty too, 30 days, three times (row 23, link /invest/landlord-rules/). Then what we do: "We check the manager's licence and read the fee lines and exit terms with you before you sign" (rows 31, 34). Mid-roll offer 3: "Send us the management agreement before you sign it". Rows 18 to 24, 31.
9. **FAQ** (open text, 6 items): Are management fees tax deductible? (row 29); Do I need a licence to manage my own rental? (row 18); Where is my tenant's deposit kept? (row 20); Who pays the accommodations tax when a manager books the guest? (row 25); How do I get out of a management agreement? (row 21); Is an HOA management company the same thing? (one line: no; this page is about a manager who rents out your home; link /hoa/).
10. **Bottom offer band**: "Pick a manager with the numbers in front of you." / "Send the address. We run the rent, taxes, insurance, dues and the manager's real fee, and introduce the managers our investors use." Button: "Send us the address".

Every button to /contact/ is a request ("Ask us ...", "Send us ...", "Have us ..."). No two offers share wording. The hero sub-header has no we, our or us: "What managers here charge, what it costs in a year, and when you need one."

## The decision table (section 5)

Rows from verified facts only; plain words in each cell.

| Your rental | Usually | Why |
|---|---|---|
| A house on a yearly lease, and you live outside the Grand Strand | Hire a manager | Repairs, showings and the 30-day deposit list need someone nearby (rows 13, 23). About 12 percent a year (row 11). |
| A house on a yearly lease, and you live here | Your choice | No licence is needed to manage your own (row 18). You still owe the deposit list in 30 days and the owner notice (rows 23, 24). |
| A condo in an oceanfront building | Compare the building's rental desk with an outside manager | Most oceanfront condos for sale list a rental program (row 17); link /invest/rental-program-vs-airbnb/. |
| A vacation house or condo you run on a booking site | A manager, or a basic plan plus a cleaner you trust | Cleaning between stays is the work that goes wrong (row 33). Basic plan 13 to 17 percent, full service 40 to 60 (row 8). |
| Several units | Get the agreement read before you sign | The fee lines and the exit terms decide the cost (rows 4, 5, 21). |

The writer may cut a row a cold reader does not need. No row describes a person (no "retirees", no "families").

## Visuals

| Visual | Where | Built from | Tool |
|---|---|---|---|
| Key-fact chips (3) | Under the short answer | `findings.json` lt_fees, worked_year | `glance` / `atAGlance` in `_kit.js` |
| Published fee cards | Section 2 | `fees.json` long_term (names removed in the spec) | `compareCards` (cards on a phone) |
| Worked-year table with total row | Section 3 | `findings.json` worked_year | `h.table` |
| Basic against full-service cards | Section 4 | STRM management; `fees.json` short_term | `compareCards` |
| Bar chart: where the owners of rentals and second homes get their tax bill (Grand Strand 37%, elsewhere in SC 7%, North Carolina 17%, other states 39%, abroad under 1%), with condos and other homes as two bars or a note | Section 5 | `findings.json` owners.chart_6pct, condo/house shares | `G.bars` in `tools/glass.js` (flat, liquid-glass style) |
| Decision table | Section 5 | rows above | `h.table`, cards on a phone |
| Money-flow drawing: tenant pays rent and deposit; the deposit stays in the manager's trust account; rent goes to the owner after the bank clears it, less the fee | Section 6 | rows 19, 20 | our own SVG, `tools/illustrations.js` if a fitting scene exists; otherwise an inline SVG in the spec under `images/2026-11-a/invest-property-management/` |
| Taxed-or-not table for a booking | Section 7 | rows 25 to 27 | `h.table` |
| Homes feed | End | `WARRANTY_RENTAL` | site feed, unchanged |

## Photos

Each must show the fact in the sentence beside it, captioned with that fact. Look at each at full size and at 390 px before use.

| Spot | Photo | Licence and source | Status |
|---|---|---|---|
| Section 4 (vacation rentals) | Oceanfront towers along the beach in Myrtle Beach | CC BY-SA 4.0, DiscoA340, https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg ; already on the site as `images/2026-10-d/invest-str-vs-ltr/myrtle-beach-oceanfront-towers-from-the-beach-1200w.webp` (and its other sizes) with its record in `data/2026-10-d/invest-str-vs-ltr/photos.json` | Licensed; reuse (credit as recorded). Caption: "Oceanfront towers in Myrtle Beach, where most condos for sale list a rental program." |
| Section 5 (decision, condo row) | Condo towers on North Ocean Boulevard, Myrtle Beach, from the air | Public domain, USGS, https://doi.org/10.5066/F7N877XX ; on the site at `images/2026-11-a/invest-condos/myrtle-beach-condo-towers-2011.webp` | Licensed; use only if section 4's photo is not used (one oceanfront photo per page). |
| Section 3 (worked year, a house) | Streets of houses in Carolina Forest from above | Public domain, NOAA NGS, `images/2026-11-a/invest-rent-prices/carolina-forest-streets-from-above.webp` | Licensed; weak (an aerial reads as texture on a phone). Use only until the partner's photo 2 arrives. |
| Section 6 or 8 | A key lockbox on the door of a rental house | Partner photo 1 (shot list). Commons search for a CC0 lockbox photo was blocked (HTTP 429) on 2026-11-04; the builder may retry `Category:Key lock boxes` on Commons. | Pending |

## Photo partner's shot list

In `shot-list.md`.

## Sibling and site notes

- **One value:** "about 10 percent" here agrees with the analyzer's "8 to 10 percent"; the short-term ranges match /invest/str-vs-ltr/, /invest/str-tools/ and /invest/condos/. The 7 percent state tax and the county fee match /invest/accommodations-tax/.
- **Owners:** /invest/landlord-rules/ owns the deposit and eviction law; /invest/accommodations-tax/ owns the tax stack; /invest/condos/ owns the rental-program counts; /invest/rent-prices/ owns the rent. This page uses each once and links.
- **/invest/out-of-state/** links here; finding 1 is a natural link back ("Two in three owners of rentals here live outside the Grand Strand").
