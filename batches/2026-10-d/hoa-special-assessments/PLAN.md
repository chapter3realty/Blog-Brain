# Plan: /hoa/special-assessments/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (32 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-10-d/hoa-special-assessments/` (its `README.md` lists every file). Spec to write: `specs/special-assessments.js` (none exists; the live page was hand-made). Build with `node tools/mkpage.js specs/special-assessments.js`.

## The reader and their job

A buyer looking at a condo on the Grand Strand, often from out of state, often an investor or a second-home buyer. Someone told them "watch for special assessments", or the HOA papers mention one. Second reader: an owner who just got the notice, or a seller with one pending.

Their job, in one verb: **avoid** (a five-figure bill after closing). Then, if they own: **pay or fight** it knowing the rules.

What they want first: what it is, how big it can get, and whether the board can do it without a vote. What they already know: little. "Regime", "master deed", "pro rata" and "Fannie Mae" are new words. What worries them: that they buy and the bill lands a month later; that the seller hid it; that the bank will not lend. What they ask next: who pays at closing, can I pay over time, is it deductible, does insurance cover it.

## The deciding fact (checked first)

**South Carolina law puts no cap on a special assessment, and the buyer of a condo is liable with the seller for whatever the seller owes the association at closing, up to the amount on the association's statement** (rows 8 and 18). That makes the page's promise real: the risk is the reader's, the law does not stop it, and the papers we read are the only early warning. Both rest on the code text (Title 27 Chapters 30 and 31), read in full on 2026-11-01.

## What the live page has worth keeping

- **The idea of the best section**: "How to spot one before you make an offer" (minutes, the reserve study against the building's age, the budget, flat dues while insurance rose). It now rests on rows 11, 12, 14, 15 and 16, and it says what *we* read, not what the reader should read.
- **The correct contract point**: an assessment billed before closing is normally the seller's, one billed after is the buyer's, and the purchase contract decides the grey middle. Keep it, now with the statute under it (rows 17, 18).
- **Links**: `/hoa/reserves/` (reserves), `/sell/sell-my-condo/` (sellers), `/invest/non-warrantable-condos/` (the FAQ named it but did not link it), `/contact/`. Add: `/hoa/liens-and-foreclosure/`, `/hoa/master-insurance-ho6/`, `/hoa/tax-deductible/`, `/hoa/documents/`, `/hoa/south-carolina-hoa-laws/`, `/invest/condo-buildings/` (the building directory), hub `/hoa/`.
- **Breadcrumb** Home / HOA Guide / Special Assessments. **Title** keeps "Condo Special Assessments in Myrtle Beach".
- **The legal notice**, shortened to the site's standard one-line form (not legal advice, see an attorney); the old one types a date ("verified in July 2026") and must not.
- No real story, no calculator, no verified number on the old page. `data/headlines.json` has no entry for this URL; the spec sets the title and H1.

## What must not survive (judge, SWEEP, claims)

- The "Our AI document analysis" box that prints `%s` twice. Gone with the rebuild; do not port the block.
- The same call to action four times. One slim bar under the answer, one offer box at the end, same label (CRAFT 3).
- "It can run into the thousands per unit" as the only size. Replace with row 3 (a real case) and row 5 (the labelled example).
- "Verified July 2026", "Updated October 28, 2026" typed in copy. Dates come from `build.js dates`.
- "Scrutiny of condo building safety tightened across the country after 2021" (no source), "Coastal windstorm premiums have risen sharply" (no source on this page; the insurance page owns it), "almost never a surprise to the board" (no source).
- The listing-search sentence "including off-market homes before they hit the public sites" (SWEEP). mkpage takes the new sentence from its donor; check the built page.
- H2s that are labels ("What a special assessment is"). Each H2 is the question a reader types (judge; STANDARD A5).
- FAQ schema that does not match the visible text (faq-match S12). Build both from one array in the spec.

## The shape

Kind: **law or rule explainer with a cost core, ending in a checklist** (CRAFT 3; "Page shapes" sections 5, 2 and 7). Main relations: *condition* (can they, who pays, will the loan close) and *amount* (how big, how it splits). Dominant shape: the rule in one sentence, then question headings each answered in their first sentence, a worked-example table, a who-pays rule table, and the numbered list of what we read.

Not a list of places, not market data. Two local findings carry it: the age of the condos for sale against HUD's part lives (why it happens here) and the county's lien record (what happens when owners cannot pay).

Wrong-shape checks: the first section is not history or statute text; the page says who the condo rules do not cover (a neighborhood of houses, whose covenants decide); it ends with what we do, as steps; each figure is stated once.

## Sections, in order, with what each proves

0. **Hero.** H1, byline, short answer (about 80 words), key-facts row. Proves the reader gets what they typed on the first phone screen.
   - Title (60 chars max): "Myrtle Beach Condo Special Assessments: Who Pays | Chapter3" (58). Meta description: "A special assessment can follow a Myrtle Beach condo to its buyer. How big they get, who pays at closing, and the papers we read before you offer."
   - H1, two lines (hook backed by rows 8 and 18): "A special assessment on a Myrtle Beach condo" / "can follow the condo to its buyer." Alternative: "Condo special assessments in Myrtle Beach:" / "South Carolina law sets no cap."
   - Short answer draft, facts from rows 1, 6, 8, 18: a one-time bill on top of dues for what the budget, the reserve fund and insurance do not cover; South Carolina sets no cap; your share is your unit's percentage in the master deed; if the seller has not paid, the buyer can owe it, up to the association's statement; we read the minutes and the list of assessments before you make an offer.
   - Key-facts row (glass icon chips, words beside each): "No cap in South Carolina law" (row 8); "Your share: your unit's percentage in the master deed" (row 6); "Buyer liable with the seller, up to the HOA's statement" (row 18); "Can stop a Fannie Mae loan" (row 20).
   - Slim offer bar: "Send us the building. We read its minutes before you offer." Button "Have us check a building".
1. **"What is a special assessment, and how is it different from dues and reserves?"** Rows 1, 2, 13. Our drawing (visual 2): insurance pays first, then the reserve fund, then the owners. One sentence that a neighborhood of houses works the same way through its covenants, without the condo statute. Link `/hoa/reserves/` in a sentence ("how much a building should have saved").
2. **"How much is a special assessment?"** Row 3 first: the Pawleys Island case, $88,398 a unit for a window and concrete job, as the court recorded it, said as a past case. Then the worked example (visual 3) from row 5, labelled, with row 6 on why the bigger unit pays more. One line from row 21: $10,000 a unit is the line where Fannie Mae calls an unfunded repair critical. Proves: the reader can plan with a number and knows how their share is figured.
3. **"Why do Grand Strand condos get them?"** Our count (row 10, visual 4): 65 percent of condos for sale are in buildings built before 2000; 46 percent before 1990; 4 percent since 2010. Then HUD's part lives (row 11, visual 5): a building from the 1980s has passed its roof, elevator and window lives at least once. Then what lenders call critical near the ocean (row 12: sea walls, balconies, waterproofing, water intrusion). One photo from the photo partner (shot 1 or 2) beside the balcony sentence. Proves: the local reason, from our own data, not a national list.
4. **"Can the HOA charge one without a vote? Is there a limit?"** Rows 7, 8, 9, 4. No state cap; the bylaws decide the vote; courts defer to a board acting in good faith within its documents; and the Shipyard Village owners who voted no still paid, through two years of higher budgets. Plus the complaint numbers (rows 30, 31, 32): Horry County has the most HOA complaints in the state, and its complaints over fees or special assessments rose from 12 to 30 in a year. Proves: the reader knows their real leverage, which is before the vote and before the purchase.
5. **"How we spot one before you make an offer."** Numbered list (visual 6), each item with what it tells us: the last 12 to 24 months of board minutes (row 14); the association's list of special assessments and needed repairs (row 15); any engineer or inspection report from the last 3 years (rows 15, 21); the reserve study against the building's age (rows 10, 11; link `/hoa/reserves/`); the budget and the receipts book (row 14); the seller's disclosure answer to "Has the owners association levied any special assessments" and "known common area problems", and what "No Representation" means (row 16). Then "Words in the minutes we look for" box: phrases drawn from the sources (row 12 and 15 wording: "water intrusion", "balconies", "waterproofing", "engineer report", "necessary repairs", "special assessment"; row 4: "added to the operating budget"), labelled as what we look for. Proves the "we do the work" promise.
6. **"Who pays a special assessment when the condo sells?"** Rule table (visual 7): billed and unpaid before closing (paid from the sale price, row 17; buyer liable with seller up to the statement, row 18); voted but billed after closing (the contract decides; we write it in); being discussed, not voted (the disclosure form does not ask, row 16; the minutes show it, row 14). Then row 19: we get the association's statement before closing. Link `/sell/sell-my-condo/` for sellers.
7. **"Can a special assessment stop my loan?"** Rows 20, 21: what the lender must learn about each assessment; a critical repair not yet fixed makes the building ineligible; an evacuation order does too. One sentence and link to `/invest/non-warrantable-condos/`. Never a rate or a down payment percentage.
8. **"Can I refuse to pay, or pay over time?"** Rows 22, 25, 23, 24. No opting out; payment plans and bank loans are the board's choice; unpaid becomes a lien behind taxes and the mortgage, foreclosable in court; a neighbor's unpaid share after a bank foreclosure is spread over everyone. Then our lien count (row 26, visual 8): 548 associations recorded a lien against at least one owner in 2025, the most since 2010, up from 359 in 2021. Link `/hoa/liens-and-foreclosure/`.
9. **"Is it tax deductible? Does insurance pay?"** Two short answers: rows 27, 28 (home you live in: no; rental: maintenance yes, improvement by depreciation), link `/hoa/tax-deductible/`; row 29, link `/hoa/master-insurance-ho6/`.
10. **Final offer box**, same component as the top bar: headline "Have us check a building before you offer", one sentence ("Send us the building's name. We request its minutes, its list of special assessments and its reserve study, and tell you what is coming."), one button. Contact form with the page named.
11. **Homes feed** (IDX, `NEWER_CONDOS`, "Condos in buildings built since 2005", already mapped in `idx-lib/feeds.js`). It sits after the offer. Its title says only what the search did.
12. **FAQ**, open text, FAQPage schema from the same array, about 10 questions, each answer led by the fact: What is a condo special assessment? (rows 1, 2) How much can it be? (rows 3, 5) Can an HOA charge one without a vote in South Carolina? (row 7) Is there a limit in South Carolina? (row 8) Who pays at closing, buyer or seller? (rows 17, 18) Does the seller have to disclose one? (row 16) Can I refuse to pay? (rows 22, 23) Can I get a payment plan? (row 25) Can it stop my loan? (row 20) Is it tax deductible? (rows 27, 28) Special assessment or reserve fund: what is the difference? (row 2)
13. **Sources line**: S.C. Code Title 27 Chapters 30, 31 and 50, Title 33 Chapter 31; Fisher v. Shipyard Village Council of Co-Owners (S.C. 2016); Fannie Mae Selling Guide B4-2.1-03; SC Real Estate Commission disclosure addendum; HUD CNA useful life table; IRS Publications 527 and 530; SC Department of Consumer Affairs 2026 HOA report and data; Horry County Register of Deeds lien index (our count); Chapter3's count of condos for sale. Method lines (the bulk-filer rule, the year bands) go here, not in the body. The short legal notice.

"On this page": What it is, How much, Why here, Votes and limits, How we spot one, Who pays at sale, Loans, Refusing and paying, Tax and insurance, Questions.

Schema: Article (author Person per site practice), BreadcrumbList, FAQPage. No Legislation markup. The spec, not this plan, decides the byline.

## Visuals

1. **Key-facts row** (glass icon chips, `G.glassIcons` or `h.glance`). Rows 6, 8, 18, 20.
2. **"Who pays first" drawing.** Our own inline SVG: three steps left to right (phone: top to bottom): "1 Insurance", "2 The reserve fund", "3 The owners, by master-deed percentage (the special assessment)". Flat, glass frame, labels at body size. Alt text says the same. Facts: rows 2, 13. No icon of money or people.
3. **Worked-example table** (`h.table`), built from `worked-example.json`: Unit, Units like it, Share in the master deed, Your share of $900,000; total row ($900,000; 100 percent). Caption "Example: a $1.2 million roof with $300,000 saved". Not a picture of any building.
4. **Bar chart** (`G.bars`), built from `listing-ages.json` row "(all)": condos for sale by decade built (before 1980, 1980s, 1990s, 2000s, 2010s, 2020 or later), count and share; feature text for the two oldest bands from row 11 ("past a 20-year roof and elevator life"). Caption "Condos for sale on the Grand Strand, by the year the building was built". Note: "Our count of active MLS listings; year built as listed."
5. **"What comes due when" strip.** Our own inline SVG ruler from 0 to 50 years with the 13 parts of `eul-subset.json` placed at their HUD life, and two markers: "a building from 1999 is 27" and "from 1989 is 37" (2026 minus the year, computed in the spec from the build year, not typed). If a ruler is too dense at 375 px, use `G.bars` with the years as values. NEEDS.md asks for a shared timeline helper.
6. **Numbered checklist** (`h.ol`) "What we read before you make an offer", then a small glass box "Words in the minutes we look for".
7. **Rule table** (`h.table`, cards on a phone): When the assessment was charged / Who pays / Why.
8. **Lien chart.** Associations recording a lien against at least one owner, by year, 2010 to 2025, from `liens-by-year.json` (`associations_filing_any_count`); 2026 shown separately as "first 10 months". `G.bars` has horizontal bars only; 16 rows read fine on a phone, highest value labelled. A line chart is better (NEEDS.md). Caption "Associations that put a lien on at least one owner's home, Horry County". Note: "Our count of the Register of Deeds index. Timeshare resorts, a utility and trustees left out. A lien can be for any unpaid charge, not only a special assessment."
9. **Photos** (from the photo partner; see the shot list). One in section 3 beside the balcony and concrete sentence, one in section 2 or 4 (roof work or scaffolding). Never two stacked. Until they arrive, no photo is better than a decorative one. Free-licence stand-ins, looked at full size on 2026-11-01:
   - "Hotels along the Grand Strand Beachfront 2.jpg", DiscoA340, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront_2.jpg. Shows: oceanfront towers lining the beach in Myrtle Beach, a newer tower in front and older ones down the beach, people on the sand. Usable beside the row 10 chart only with a caption that says what it shows ("Oceanfront towers in Myrtle Beach. Most condos for sale here are in buildings built before 2000."), credit and licence link. Needs a licence record in `tools/photos.js`.
   - "Hotels along the Grand Strand Beachfront.jpg", same author and licence, https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg. A close view of one tower's balconies and older towers behind. Second choice.
   - Rejected: "Homes and Resorts Along Myrtle Beach.jpg" (shows houses on an island and marsh, not condos; the title misleads); "Beach Resorts at Myrtle Beach, SC.jpg" (distant, blurry, construction site in front); "Devastation in Myrtle Beach after Hazel.webp" (1954 houses, a person's name on a sign, licence claim doubtful for an unknown 1954 photographer).
   - The judge's FEMA idea: no FEMA or other public-domain photo of a damaged Grand Strand condo was found (FEMA's Matthew release for Myrtle Beach is text only). Not used.

## Sibling owners (one fact, one owner)

- `/hoa/reserves/` (rebuilt in this batch by another helper) **owns** reserve studies, percent funded and what a building should save. This page says "the reserve fund pays second" (row 2) and links. It does not state Fannie Mae's reserve rule.
- `/hoa/liens-and-foreclosure/` owns lien priority and foreclosure steps. This page gives rows 23 and 24 in two sentences and links. **This page owns the Horry County lien count** (row 26); the liens page may cite it with a link. Proposed registry row in `PROPOSED.md`.
- `/hoa/master-insurance-ho6/` owns deductibles and loss assessment coverage (row 29).
- `/hoa/tax-deductible/` owns the tax rules; this page gives rows 27 and 28 in two sentences. Both rest on the same IRS text, so the two pages agree.
- `/hoa/dues-increases/` owns the 48-hour budget notice (registry `hoa-48-hour-notice`). This page does not mention the 48-hour rule.
- `/invest/non-warrantable-condos/` owns the lender detail. This page gives rows 20 and 21.
- `/hoa/liens-and-foreclosure/` already cites the 2026 SCDCA report (14.1 percent wanted a lien ban). Rows 30 to 32 use other cells of the same report; no conflict.

## Photo partner shot list (for `templates/photo-request-email.md`)

Most wanted first. All from public ground (sidewalk, street, public beach access), landscape, three of each, no faces, no plates, no unit numbers, no rental-company signs in focus. The page will not name the building in a caption.

1. **Balcony or concrete repair on an older oceanfront condo tower.** Scaffolding, a swing stage, or shored balconies on a building on Ocean Boulevard. For the section on why older Grand Strand buildings get special assessments. Map link: https://www.google.com/maps/search/?api=1&query=N+Ocean+Blvd+Myrtle+Beach+SC
2. **Rusted balcony railings or cracked, stained balcony edges, close enough to see.** From the beach or the street, on any older building. For the line on what wears out first near salt water.
3. **A roof or exterior job under way on a mid-rise condo.** A crane, a roofing crew, wrapped walls. Anywhere on the Grand Strand. For the worked example ("a $1.2 million roof").
4. **A row of older oceanfront condo buildings from the beach.** Several buildings in one frame, so no one building is the subject. For the chart of condos for sale by year built. Map link: https://www.google.com/maps/search/?api=1&query=Ocean+Blvd+North+Myrtle+Beach+SC
5. **An elevator machine room door or rooftop equipment, only if he is invited in by a client.** Optional. For "elevator machinery: 20 years".

## Things to tell the writer

- Every number comes from a verified row; charts from the JSON files, never typed. Three numbers a paragraph at most. Compute "years old" from the build year in the spec.
- Spell out once: "homeowners association (HOA)", "horizontal property regime, the legal name for a condo in South Carolina", "master deed", "Fannie Mae, whose rules most condo loans follow", "reserve fund".
- Row 3 is a 2008 case: say "in one Pawleys Island case the state Supreme Court decided" and give the year only in the sources line if at all (no dates in body copy). State only what the court recorded.
- Row 26: "associations put a lien on owners' homes", never "owners failed to pay special assessments". Row 31: "fees or special assessments".
- Never tell the reader to read the minutes, ask the HOA or check the statement. We do it (CRAFT 5).
- No metaphors: not "follow the condo" if the reviewer reads it as one; the alternative H1 is ready.
- Not legal advice: one line in the notice, and "a South Carolina attorney" once in section 4 for a board that broke its own documents.
- Run `house-claims.js`, `claims-scan.js`, `repeat-check.js --strict`, `structure-check.js --strict` after each draft.
