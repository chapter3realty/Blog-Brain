# Review round 2: /hoa/special-assessments/ (batch 2026-10-d)

What changed for each finding. Spec: `specs/special-assessments.js` (website working copy). Rebuilt with mkpage. The spec before this round is in the scratch folder (`wf2/hoa-special-assessments/spec-before-r2.js`).

## Gates after the fixes

- score.js: 100/100 (SEO, AEO, Human and Trust all 100).
- claims-scan: 0. facts-check: 0 hits on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass. SWEEP residue (off-market search sentence, "%s", "Talk to Devin"): none.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. (One run in the middle found the page 328 px wide at 320 px, from the new calculator layout. Fixed before the final run.)
- My own Playwright check: the three calculator inputs share both edges inside the card's padding at 320 (64 to 256 px, content box 41 to 279), 390 and 1440. The worked-example table fits its box at 320 (scroll width 270 equals client width 270). Typing in the calculator works: 2,000,000 and 300,000 at 0.95% gives $16,150; a saved amount above the cost gives $0 and the "no special assessment is needed" line; numbers are formatted with commas when a field loses focus.
- build.js check: OK. build.js audit, this page: the same four lines as round 1 (two date mismatches that `build.js dates` fixes, no boxed offer in the middle, no named quote). Two new audit errors from this round's hero line and a bracketed case name were fixed.

## New ledger rows (facts.md, VERIFIED-BY-FIXER, for the lead to re-check)

- **Row 33**, the due diligence period. Copied from the flooding and reserves ledgers, in the reserves page's wording, so the three pages agree.
- **Row 34**, a bill that comes after closing is the owner's at that time. A reading of 27-31-190 and 27-31-220 together, not a sentence in the code.
- **Row 35**, names: owners sued the association; the South Carolina Supreme Court ruled on Fisher v. Shipyard Village in 2016; Chapter 31 is the Horizontal Property Act. From the raw opinion and code copies.

## Critic

| Finding | Change |
|---|---|
| Payment order stated for every big repair (row 2 covers only damage to an insured part) | Intro: "When a part of a condo building the association must insure is damaged, the repair is paid in this order." The caption and the list's label say "Who pays to repair damage to an insured part of a South Carolina condo building, in order." |
| Shipyard figures with no year (row 3) | Text: "the board said in 2008 that two of its buildings needed extensive repairs ... at $12 million to $13 million." Card: "The special assessment its board proposed in 2009 for each unit in two of its buildings." The "How much" answer says "proposed in 2009". The FAQ answer that held the figure is gone (owner: FAQ repeated the body). |
| "A few thousand dollars a unit or tens of thousands" unsourced | Now: "We found no public record of a typical amount here. The one local case in a court record was about $88,000 a unit, proposed in 2009. In our example below, it is $5,850 to $10,350." The two example figures are read from worked-example.json and checked against row 5. I wrote "We found no" instead of "No public record gives", because the ledger's "Not verified" list records our search, not a proof that none exists. |
| "Whoever owns the unit when it is billed" had no row, and contradicted the row above | Row 34 added. The card now says "The owner when it is billed, by default". compare.js limits a cell to 40 letters, so "unless the offer says otherwise" could not fit; the paragraph right after the cards says it: "The offer can say the seller pays an assessment that is voted or coming, or gives you a credit for it at closing." The row above now says "Written into the offer" (owner), so the two rows no longer conflict. |
| Lien caption dropped the verifier's limit | Caption: "Our count of the Horry County Register of Deeds index, rounded to the nearest 10. A lien can be for any unpaid charge, including a special assessment. A few liens filed under other types are missed. The count is not adjusted for the growing number of associations." The "has climbed back since" sentence is cut (owner), so the page no longer reads a trend into it. |
| Calculator inputs past the padding at 320 and 390 | Each field is a flex row with a fixed slot for "$" before and "%" after, and the input is flex:1 with min-width:0, inside a one-column grid with minmax(0,1fr). All three inputs share both edges inside the padding (measured above). The card is 760 px wide at 1440, like the case card and the table. |
| Worked-example table at 320 and 390 | Names use a non-breaking hyphen and do not wrap. Header is "Unit" and "Bill" (no "EACH UNIT'S / BILL"). "in all" is cut. The first column takes 62 percent; on a phone the cell padding is smaller, so the table no longer scrolls inside its box. The bill column is right-aligned. |
| Readability: foreclosure rule, "reserve study", fragment link, hero chip | Foreclosure: "A neighbor's unpaid share can become every owner's cost. When a lender forecloses on a unit, some of that unit's unpaid assessments are split among all the owners." (owner asked to cut the mechanics; this keeps row 24's meaning). Reserve study defined at first use: "A reserve study is a list of the building's big parts, with when each needs replacing and what it will cost." Fragment is now a sentence: "Our reserves page shows how much a building should have saved." The third chip is cut; reader and owner both found it meaningless, and the short answer says it in full. |
| Entities not named in the body | "The South Carolina Supreme Court ruled on the case, Fisher v. Shipyard Village, in 2016." "The U.S. Department of Housing and Urban Development (HUD) publishes how long building parts last." "South Carolina's condo law, the Horizontal Property Act, does not apply to a neighborhood of houses." (The audit flags a bracketed case name as an aside, so the case name is in the sentence.) |
| Nit: H2 wrap at 1024 | Non-breaking space in "South Carolina?"; at 1024 the second line is "South Carolina?". |
| Nit: "46 / percent" | The town percentages are cut (owner). |
| Nit: "30 of / 76" at 320 | Non-breaking spaces in "30 of 76" and "140 of 452". |
| Nit: calculator values with no commas | The fields are text fields with commas (1,200,000 and 300,000), formatted again when a field loses focus; the script strips commas and "$" before it adds. |
| Nit: "On this page" one column from 768 up | Two columns from 700 px, in the spec's own style (NEEDS 11). |
| Nit: block widths step at 1440 | Calculator now 760 px like the case card and table. The glass bar charts are about 820 px; that width is in glass.js, so it stays. |
| Nit: lien chart labels small at 320 | Value labels 15 to 17, year labels 14 to 16 in the chart's own units. |
| Nit: "Board minutes ... says so in its minutes" | "A board that is pricing a repair or hiring an engineer usually records it in its minutes." |
| Nit: "The HOA documents a buyer receives are only part of them" | Cut. The link is now its own line at the end of the section: "Our page on HOA documents explains each paper a buyer gets." |
| Nit: heading not a search people type | "How can I tell if a condo has a special assessment coming?" (ToC "How to spot one"; the id is unchanged). |
| Nit: listing count has no as-of | staleBy proposed in PROPOSED.md item 5. |
| Critic tool gap | NEEDS 10. |

## Reader

| Finding | Change |
|---|---|
| When do I get the records, and can I cancel after I sign? | The section now says: "The right to see them belongs to owners, so we ask the seller for them before you make an offer." A new H3, "What if the papers come after I sign?", answers with row 33: "Then we read them inside the contract's due diligence period. The standard South Carolina sales contract has one, for a length you and the seller agree on. Inside it, you can end the contract for any reason, with written notice and the fee the contract names. After it ends, that right ends." The hero line no longer promises "before you make an offer": "Before you are bound to buy, you know what a Myrtle Beach building's minutes and its list of special assessments say. An agent reads them for you." |
| "Talked about, not yet voted": what can I do? | New lines after the cards: "If the minutes show one coming, we tell you. Before you offer, you can offer less, ask for that credit, or not make an offer." The credit sentence before it now covers an assessment that is "voted or coming". |
| Does the check cost money, do I have to sign first? | **Not changed. Question for the lead and owner.** No ledger row, story or rule says what the building check costs or whether a buyer signs an agreement first. I did not write "free" or "no obligation". The closing band now says when the reader hears back: "... and tells you what they show before you make an offer." If the owner gives an answer, it goes in the bottom band's text. |
| One document, four names; "deed" read as my own deed | One name everywhere: "the condo's founding papers". The short answer says what they are: "Your unit's percentage, set in the condo's founding papers. They were recorded when the condo was created." Chip: "Your share / in the founding papers". "Master deed" is the legal name, but score.js flags it as an industry term (rules/plain-words.json says "the condo's founding rules"), and the owner asked for it to be explained before use. "Founding papers" keeps it plain and avoids the word "deed". The page says we find the percentage for the reader, so the reader does not need the legal name. |
| "Your limit / the HOA's statement" chip; what is the statement called? | Chip cut. The who-pays paragraph links "Our page on that statement and its fee" to /hoa/estoppel-and-transfer-fees/. I did not put "estoppel" in the prose: score.js flags it as an industry term. The short answer names it in plain words: "the association's written statement of what the seller owes". |
| Nit: complaints and lien charts tell me nothing about my condo | The complaints part now ends: "For a buyer, a dispute over an assessment shows up in the board's minutes. We read them for one." The lien sentence is down to two sentences (owner). |
| Nit: too many numbers | Cut: the 2,866 sentence (the chart note keeps the total), "Only 4 percent", the two town percentages, the lien history sentence. |
| Nit: foreclosure paragraph | One plain sentence (see critic). |
| Nit: does my condo insurance pay any of it? | **Not answered, on purpose.** Row 29's loss assessment clause was struck by the verifier (no primary South Carolina source). The page keeps one link to the master insurance page. A sourced answer needs a primary row (the policy form or the SC Department of Insurance) and belongs on /hoa/master-insurance-ho6/. |
| Nit: lender checklist sentences | Cut: "For each special assessment, current or planned, the lender must learn ..." and "Fannie Mae tells lenders to ask for both." The list item now says what the list shows: "It shows what is billed now and what repairs are planned." |
| Nit: does this matter when I pay cash? | New FAQ: "Does a special assessment matter if I pay cash?" Answer: "Yes. You owe your share like every other owner. Fannie Mae's loan rules do not stop a cash purchase, but they apply to a later buyer of your unit who needs a loan." |
| Nit: dates | The year-heavy lines are cut (town shares, lien history, the FAQ case). The 2008 and 2009 years stay: the critic requires them (row 3 must be stated as that case, not today's amount). |
| Nit: homes strip before the short answer | Not changed: the edge places it there on the owner's instruction (round 1). |

## Owner's eye

| Finding | Change |
|---|---|
| "The purchase contract decides" | "Written into the offer". |
| "The repair cost moved into the yearly budget" | Card: "The board added the repair cost to the 2010 and 2011 budgets instead." (row 4's two years). The FAQ line is gone. |
| Idioms: "step in", "walking away from the unit", "For scale" | "A court can rule against a board that breaks its own founding papers or bylaws." "Not using the shared areas, or leaving the unit empty, does not end it." "For scale" cut from the HUD chart note. |
| "behind property taxes and recorded mortgages" | "An unpaid condo assessment is a lien on the unit. If the unit is sold to pay its debts, property taxes and the mortgage are paid first, then the association." |
| FAQ repeats the H2s; the statement line said 3 times | New FAQ of four questions the body does not answer: voted after I sign; can an HOA for houses charge one (row 8); can a board borrow instead (row 25); does it matter if I pay cash (rows 1, 20). The statement line is now in the short answer and once in the who-pays section. Not used: "does a condo policy pay my share" (row 29 struck) and "can the seller raise the price" (no row). |
| Technical detail: foreclosure mechanics, lender checklist | Both cut (see critic and reader). |
| Loans: what it means for the buyer; contradiction with the $10,000 line | "For a buyer, that means a lender cannot sell your loan on a unit there to Fannie Mae." This restates row 20 in buyer terms. I did not write "you may need a bigger down payment or cash": no verified row says it. The $10,000 line is now "A repair over $10,000 per unit, due within 12 months, with no money set aside for it." Row 21's "unfunded" is said in plain words, and the carve-out sentence that read as a contradiction is gone. |
| Hero line and chips | Hero line: see reader. Chips: two ("No cap / in SC law", "Your share / in the founding papers"). One name for the document (see reader). The audit requires the hero line to speak to the reader with "you", with no "we", and to name a place, so it is "Before you are bound to buy, you know what a Myrtle Beach building's minutes and its list of special assessments say. An agent reads them for you." |
| Court opinion used before a lawsuit is mentioned | "Owners sued the association. The South Carolina Supreme Court ruled on the case, Fisher v. Shipyard Village, in 2016. The court's opinion does not say what each owner paid in the end." (row 35). The business judgment lines in the votes section now open "In the Shipyard Village case, the South Carolina Supreme Court said ...", so they tie to the case. |
| Complaints chart with no meaning | Meaning sentence added after the chart (see reader). I did not use "more than anywhere else" for fees and special assessments: row 31 gives Horry 30 of 76 but does not rank the other counties in that category. |
| Too many numbers; method in the caption | Town percentages and the lien history sentence cut. The caption keeps only its source and the verifier's limits. Row 26 says the limits must stay on the page, so I did not cut them to the source alone. |
| Nit: "planning life" | "A building built before 1990 is older than HUD expects a flat or shingle roof, elevator machinery or aluminum windows to last." The reserve study item says "the parts HUD expects to be worn out". |
| Nit: reserve study undefined | Defined at first use (see critic). |
| Nit: section ends on the attorney line | The votes section now ends on what we do ("We read them for one."). The attorney line stays in the middle. |
| Nit: H1 "can pass to its buyer" | "The buyer of a Myrtle Beach condo can owe the seller's special assessment". |
| Nit: "book of receipts and expenses" | "The budget and the record of every expense. A condo board must keep a detailed record of every receipt and expense, open to all owners." |
| Nit: photo | Kept. |
| Nit: empty homes strip in unrouted shots | Not changed; the strip fills with sample photo routing (round 1). |

## Where I did not follow a finding, and why

- **Cost of the building check, and whether a buyer signs first (reader).** Only the owner can answer. Not written.
- **Insurance paying a share (reader).** Row 29 struck; belongs on /hoa/master-insurance-ho6/.
- **"Many lenders will not make a regular loan ... bigger down payment or cash" (owner).** The owner asked for it only from a verified row, and there is none. The page restates row 20 for the buyer instead.
- **"Unless the offer says otherwise" inside the card (critic).** compare.js limits a cell to 40 letters. The card says "by default", and the next paragraph says what the offer can change.
- **"Master deed" and "estoppel" in the prose (reader).** score.js P6 flags both as industry terms. The page uses "the condo's founding papers" and "that statement", and does the finding for the reader.

## Re-check before the checkpoint

The spec was rebuilt with mkpage; the output is byte-for-byte the page above. Gates re-run on it: score.js 100/100, claims-scan 0, facts-check 0 on this page, house-claims 0, critic.mjs 0 blocking and 0 warning at 320, 390, 768, 1024 and 1440 (shots in `wf2/hoa-special-assessments/shots-r2b/`), build.js check OK, build.js audit the same four lines as round 1. Element shots at 320 and 1440: the three calculator inputs share both edges inside the padding, the worked-example names stay on one line, and the page is 320 px wide at 320.
