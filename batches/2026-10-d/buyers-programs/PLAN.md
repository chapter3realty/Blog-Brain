# Plan: /buyers/programs/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (35 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-10-d/buyers-programs/`. Spec to write: `specs/programs.js` (none exists; the live page was hand-made).

## The reader and their job

A renter in Horry County, or someone moving here, with a steady income and a decent credit score, who can see themselves paying for a house each month but does not have the cash to close. They typed "sc housing down payment assistance income limits", "horry county down payment assistance" or "first time home buyer programs sc".

Their job, in one verb: **qualify**. Then choose the program and take the first step.

What they want first: how much, and whether they are under the limits. What they already know: nothing about SC Housing, "bond", "targeted" or "forgivable". What worries them: a catch they find out later; that they earn too much; that they are not "first-time"; that the homes they want (a condo near the beach, a house in Conway) do not count. What they ask next: how to apply, and who to call.

## The deciding fact (checked first)

Horry County is still a "targeted" county (row 1). Checked against three current SC Housing documents: the handout list, the February 2026 program guide ("any other county not listed above are considered targeted") and the June 2026 limits sheet (Horry is not in the non-targeted list). So the page can say: **you do not have to be a first-time buyer here; you must not own a home when the loan closes.**

The second fact that changes the page: the $10,000 is **not** forgiven a little each year. It is owed in full until the 15 years are up, and repaid in full on a sale, refinance or move before then (row 3, two places in SC Housing's own guide). The judge's drawing idea ("falls to zero over the 15 years") is wrong and must not be drawn.

## What the live page has worth keeping

- The H1 the owner liked (`data/headlines.json`): "South Carolina down payment help: / what it is, and what it is not." Keep both lines and the title "SC Down Payment Help: What It Is and Isn't | Chapter3". It passes mkpage's local-H1 test ("South Carolina"). The first sentence of the answer names Horry County.
- The facts it had right, now from current rows: targeted county (row 1), 640 credit score (row 6), the homebuyer course (row 7), the 15-year term (row 3), the home types (row 8).
- The honest line, in a new form: "Sometimes the program is the right call. Sometimes a smaller house or a longer save is." It is the brokerage speaking, not financing.
- Links: `/buyers/first-time-home-buyer-myrtle-beach/` and `/buyers/closing-costs/` (it has the closing cost calculator; the page has no calculator of its own).
- Breadcrumb Home / Buyers / this page.
- No real story, no verified numbers worth keeping as they were (all dated 10.01.2025), no calculator on the page.

## What must not survive (judge, SWEEP, claims scan)

- "Interest Rate 0%", "Monthly Payments None", "competitive fixed interest rate", any "0%" anywhere, "no monthly payments".
- "We run the numbers both ways and show you", and any line where Chapter3 prices, quotes or compares loans.
- "assists low-to-moderate income families" and every other line copied from SC Housing's handout.
- "An Chapter3 agent", "Updated 10.01.2025", the kicker sentence in capitals, the "Myrtle Beach buyers use them regularly" claim (no source).
- The listing-search sentence "including off-market homes before they hit the public sites" (SWEEP). mkpage takes the new sentence from its donor; check it after the build.
- The "Required disclosure" block can go if the body does not name BrickWood (PLAYBOOK A16; the footer carries the disclosure). Proposed: do not name BrickWood (facts.md, question 1).
- The meta description's "grants" and "how to qualify" promise is kept only because the new page delivers it (row 13: "not a grant" is the answer).

## The shape

Kind: **law or rule explainer** that ends in a **decision** (CRAFT 3; "Page shapes" sections 5 and 9). The main relation is a condition: if your income, price and situation are X, this program fits. Dominant shape: the rule in one sentence, a rule table (test, Horry County number, what we check), then a decision table for which program. Not a list of places; not a cost page (no down payment or payment figures are allowed, so there is no "total cash to close" table).

Wrong-shape checks: the first section is not history or SC Housing's mission; the page says who it does not fit (over the limit, owns a home, a building the loan will not approve); it ends with numbered steps; each number is stated once.

## Sections, in order, with what each proves

0. **Hero.** H1, byline, short answer (about 90 words), and a key-facts row with words: "$10,000 toward closing", "Income up to $114,960 (1 or 2 people) or $134,120 (3 or more)", "Homes up to $450,000", "Credit score 640", "Forgiven after 15 years in the home". Proves: the reader gets what they typed in on the first phone screen. Short answer draft facts: rows 1, 2, 3, 4, 6.
   Slim offer bar under it (CRAFT 3, "Measure the top").
1. **"Do you qualify in Horry County?"** A rule table, five rows: income (row 4, row 5: everyone on the loan or the deed counts), home price (row 4), owning a home now (row 1), credit and debts (row 6), living in it with no cosigner (rows 9, 10). Third column: what we check for you. Then one short paragraph, **"Do you earn too much?"**: most renters here are under the limit (row 27, 83 percent under $100,000), the limit is about 1.7 times the county's median household income (row 26), and about twice what HUD calls low income here (row 22). Proves: these programs are not only for low incomes, which is the opposite of what the old page's agency wording said.
2. **"What is the catch?"** The 15-year rule. Our own drawing (below). Worked example in text: sell in year 10, the $10,000 comes out of the sale; stay 15 years, it is gone. A refinance before year 15 repays it too. Then the two lesser catches: a federal recapture tax that SC Housing pays back (row 11), and money that runs out (row 12). Proves: the reader knows the trade-off before they sign, and trusts the page because it says it.
3. **"Which homes count, and where are they?"** The local finding. Bar chart of houses for sale at or under $450,000 by town (row 28): four in five inland, under a third at the beach. Then condos: 89 percent are under the price limit (row 29), but the loan must approve the building, HUD's list has 9 approved condo projects in all of Horry County (row 30), and buildings with a rental program are usually not approved (row 33, the owner's knowledge). Then manufactured homes (not on the Homebuyer Program's list; Palmetto Home Advantage takes them, row 8, row 13) and the 5-acre limit (row 8). A homes feed under it: houses under $450,000 with a Conway address. Proves: the reader can picture where to look, with numbers no one else has.
4. **"Which SC Housing program fits you?"** Decision table ("If this is you" / "Look at"), then a two-column comparison of the Homebuyer Program and Palmetto Home Advantage (who, income limit, price limit, help, forgiven after, repaid if), cards on a phone. Rows: own no home and under the limits → Homebuyer Program, or County First (same limits, row 14). Earn more, a home over $450,000, own another home, or a manufactured home → Palmetto Home Advantage (row 13: $140,000 of your own income, no price limit, up to 4 percent of the loan, 10 years). Teacher, nurse, police, firefighter, EMT, veteran, military → Palmetto Heroes, closed for 2026 after about four weeks (row 16): be ready with a contract when it opens. Disability in the family → Families with Disabilities (row 15). Housing Choice Voucher → voucher homeownership (row 19). Then one line: Made It Home has no homes here (row 17), and the tax credit certificate has ended (row 18). Proves: the reader leaves with one program name.
5. **"Can you buy with no money down?"** USDA and VA need no down payment (row 32). Our USDA map (below): the coastal strip is outside USDA's area; 61 percent of houses for sale under $450,000 are inside it, nearly all with Conway, Loris, Aynor or Longs addresses (row 31). VA: one sentence and a link to `/buyers/va-loans/`. Proves: a buyer who wants no down payment knows which towns to look in.
6. **"Is there help from Horry County or Myrtle Beach?"** The honest answer to a top search: the county's HOME money funds builders and nonprofits, not buyers (row 20). Two real local routes: Habitat for Humanity of Horry County (row 24) and grants from the Federal Home Loan Bank of Atlanta through member banks (row 25). Proves: the page answers the question it cannot answer with a yes.
7. **"How do you apply?"** Numbered steps (rows 7, 12, 21): pick an SC Housing approved lender (92 loan officers listed for Horry County, including three builders' mortgage companies); take the course; get approved for the program; find a home under $450,000 with us; sign the contract; the lender reserves the loan and the $10,000; close. Then "What we do": we search for homes under the limit, check whether the condo building is approved, check the address on USDA's map, and introduce you to an approved lender. Our preferred lender does not make SC Housing loans (question 1, proposed yes, no name). Proves: the reader knows the first call to make, and that we do the checking.
8. **Final offer box**, same component as the top: headline "Find a home that fits SC Housing's limits", one sentence, one button ("Show me homes that qualify"), to the contact form with the program named. No financing words in the label (A17b).
9. **FAQ**, open text, FAQPage schema, 8 to 10 questions, each answer led by the fact: Is it a grant? (no, rows 2, 13). Do I have to be a first-time buyer? (row 1). What happens if I sell before 15 years? (row 3). Can I use it on a condo? (rows 8, 30). Can family help with a gift? (row 9). What are SC Housing's interest rates? (we do not state rates; the lender quotes them; no row needed). When does Palmetto Heroes open again? (no date published; it filled in about four weeks, row 16). Can I use a Section 8 voucher? (row 19). What about the tax credit certificate? (row 18). Is there a Myrtle Beach program? (row 20).
10. **Sources line**: SC Housing (program pages, the 2026 guide, the June 2026 limits sheet), HUD (condo list, income limits via Horry County), USDA Rural Development eligibility map, Census ACS, Horry County Community Development, FHLBank Atlanta, Habitat for Humanity of Horry County, Chapter3's count of homes for sale. Method lines (how the count and the map test were done) go here, not in the body (CRAFT 5).

"On this page" list: Qualify, The catch, Which homes, Which program, No money down, Local help, How to apply, Questions.

Schema: Article (author Person Devin Day, the byline only), BreadcrumbList, FAQPage. No Review, no FinancialProduct, no LoanOrCredit (it would put terms in schema).

## Visuals

1. **Key-facts row** (glass icon chips, words beside each number). Data: rows 2, 3, 4, 6.
2. **Rule table** (`h.table`): Test / In Horry County / What we check.
3. **The 15-year drawing.** Our own inline SVG (or `tools/illustrations.js` if it gains a step chart; see NEEDS.md): a flat bar labeled "You owe $10,000" from "Move in" to "Year 15", then a drop to "$0, forgiven". Two markers: "Sell in year 10: repay $10,000" and "Still there in year 15: keep it". No interest, no payment line. Alt text says the same in words. Flat and clean, glass frame.
4. **Bar chart** (`G.bars`): share of houses for sale at or under $450,000, by town, nine bars, highest first; feature text "545 of 674 houses" beside each; built from `data/2026-10-d/buyers-programs/chart-houses-by-town.json`, never typed. Caption: "Houses for sale at or under SC Housing's $450,000 limit, by town" and a note that towns are mailing addresses and prices are list prices.
5. **Comparison table / cards** (`compareCards` in `_kit.js` or `h.table`): Homebuyer Program vs Palmetto Home Advantage.
6. **USDA map.** Our own map from `usda-map.json` (county outline, the shaded "outside USDA's area" coastal strip, nine town labels, the ocean). `tools/area-map.js` has no polygon overlay, so the writer draws it as inline SVG in the spec (NEEDS.md asks for the helper). Labels at body size, placed from the file's coordinates. Caption: "Inside USDA's area on our map: most houses for sale with a Conway, Loris, Aynor or Longs address. Outside it: the coast from Little River to Murrells Inlet." Credit: "Map: Chapter3 Realty, from USDA Rural Development's eligibility map and Census county lines." Link to USDA's own address lookup in the sources line, not as a to-do in the copy.
7. **Numbered steps** (`h.ol`).
8. **Homes feed** (IDX, "Live from the MLS"): houses under $450,000, Conway. Check `idx-lib/feeds.js` picks a feed for this URL; if it does not take a max price, file it in NEEDS.md (done) and use the default buyers feed.
9. **One photo, from the photo partner** (below). Until it arrives, no photo: a decorative Conway photo would be a claim it cannot make. Already-licensed fallbacks in `data/photos.json`, if the writer wants one next to the "inland towns" sentence: "Conway Downtown Historic District Jun 10" (public domain, Pubdog, https://commons.wikimedia.org/wiki/File:Conway_Downtown_Historic_District_Jun_10.JPG), caption only "Downtown Conway", beside the Conway sentence. It shows the town, not homes under the limit, so it is second best. Wikimedia Commons search was rate-limited (HTTP 429) on 2026-11-01; no new candidates were found.

## Sibling owners (one fact, one owner)

- This page **owns** every SC Housing program fact: the $10,000, the 15-year rule, the Horry County limits, the 640 score, Palmetto Home Advantage, County First, Palmetto Heroes. Proposed registry entry in `PROPOSED.md`.
- `/buyers/affordable-places-to-live/` keeps its one paragraph ($10,000, the limits, $450,000) and its link here; its row 191 note says this page "explains the Homebuyer Program step by step, including the credit score it needs". This page must do that.
- `/buyers/first-time-home-buyer-myrtle-beach/` (rebuilt in this batch by another helper) should give one line and link here, not repeat the program tables.
- `/buyers/va-loans/` owns VA. Its Palmetto Heroes FAQ ("closed on April 13, 2026") agrees with row 16. Its line "SC Housing offers a lower rate on some of its loans taken without its down payment help" has no SC Housing source found here (facts.md, Not verified); flagged for the lead, not edited.

## Photo partner shot list (for `templates/photo-request-email.md`)

Most wanted first. All from public roads, no faces, no plates, no house numbers, landscape, three of each.

1. **A street of houses in a Conway subdivision**, for the programs page, to show the kind of house most often listed under SC Housing's $450,000 limit. A street with several similar one-story houses, front yards and the street in view. Area: a neighborhood within a few minutes' drive of downtown Conway, not the Carolina Forest side (Carolina Forest is outside USDA's area, and the photo should show a place inside it). Before sending, the coordinator tests the chosen street against `usda-map.json`. Map link: https://www.google.com/maps/search/?api=1&query=Conway+SC+29526
2. **New houses being built in Longs or Loris**, for the same page, to show new homes under the limit inland. A street with a finished house and one under construction. Map links: https://www.google.com/maps/search/?api=1&query=Longs+SC+29568 and https://www.google.com/maps/search/?api=1&query=Loris+SC+29569
3. **Seagate Village, Myrtle Beach**, from Mallard Lake Drive, for the condo section: one of the 9 condo communities on HUD's approved list. The buildings and the street, no unit numbers. Map link: https://www.google.com/maps/search/?api=1&query=Mallard+Lake+Dr+Myrtle+Beach+SC+29577
4. **A row of oceanfront condo towers on Ocean Boulevard**, from a public beach access or sidewalk, for the line about rental-program buildings. No single building as the subject, no hotel signs in focus. Map link: https://www.google.com/maps/search/?api=1&query=Ocean+Blvd+Myrtle+Beach+SC

## Things to tell the writer

- Every number comes from a verified row; the chart from the JSON. Three numbers a paragraph at most.
- Spell out once: "down payment assistance (DPA)", "SC Housing (the South Carolina State Housing Finance and Development Authority)", "USDA", "VA", "FHA". "Bond program" is SC Housing's own name: say it once, with "SC Housing calls this its bond program".
- No dates in body copy. "the 2026 round", "the limits for loans reserved from June 2026" are dates; the byline date and "2026/2027 limits" in the sources line are enough. Where a reader needs to know the limits are current, say "this year's limits" and let `build.js dates` carry the date.
- Never tell the reader to check the USDA map, the HUD list or the limits sheet: we check them (CRAFT 5, "We do the work").
- The CTA offers homes and an introduction, never a loan, a rate or a pre-approval.
- Run `house-claims.js`, `claims-scan.js`, `repeat-check.js --strict`, `structure-check.js --strict` after each draft.
