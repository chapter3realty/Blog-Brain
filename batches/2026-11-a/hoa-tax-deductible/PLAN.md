# Plan: /hoa/tax-deductible/

Batch 2026-11-a, Lane U. Research half, 2026-11-04. Ledger: `facts.md` (35 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-11-a/hoa-tax-deductible/`. Spec to write: `specs/hoa-tax-deductible.js` (none exists; the live page is hand-made, so this is its first spec). Photo partner: `shot-list.md`. Registry proposals: `PROPOSED.md`.

## The reader and their job

Mainly a buyer or owner of a Grand Strand condo who rents it, or plans to, and uses it some weeks a year. They typed "are hoa fees tax deductible on rental property", "on a second home" or "where do hoa fees go on schedule e". Second, an owner who lives in the home and hopes the dues lower the tax. Third, someone who works from home.

Their job, in one verb: **know** whether the rule lets them deduct the dues, and **how much**, in dollars, for their own mix of rented and personal nights.

What they already know: dues are big here. What they do not know: that on a home you live in the IRS lists the dues beside insurance, utilities and internet as costs you cannot deduct, and Grand Strand dues often contain all three; that a week of personal use changes the share, and a few more nights can make the condo count as a home and cap the deduction; that an improvement assessment is spread over 27.5 years on a rental and added to basis on a home; that South Carolina follows the same rules, and an owner from out of state reports the rent here.

Worry: claiming wrong, or losing money they could have kept. Next question: what the dues and the tax bill are on a condo they are looking at, and whether its building lets them rent. That is our offer.

## The deciding fact (checked first)

Deductibility turns on use, and the IRS says so in plain words:
- Main home: "Homeowners association fees, condominium association fees, or common charges" are on the list of payments "You can't deduct" (row 1, Pub. 530). They are not a real estate tax, because an association, not a government, imposes them (row 2).
- Rental: "you can deduct any dues or assessments paid for maintenance of the common elements" (row 3, Pub. 527).
- Both: split by days, rented days over rented plus personal days; empty days count for neither (row 10).

The page can be written as planned. The live page's three-way answer was right; it had no numbers, no local fact and no tool.

## The findings no other site has

1. **Our count: the rental answer is the common one here** (row 22). Only about 1 in 5 Horry County condo units is taxed at the 4 percent rate for its owner's legal residence; inside Myrtle Beach about 1 in 11. National pages lead with the main-home "no". On the Grand Strand most condo owners are in the "yes, partly" group. This sets the order of the page.
2. **Our comparison: the dues are many times the property tax** (rows 30 to 32). From three real 2026 county bills: for a Myrtle Beach condo that is its owner's legal residence, a year of typical dues (about $9,300) is about 11 times the property tax (about $830). Only the tax is deductible on a home, and only if you itemize. On a condo taxed as a rental, dues are still almost 4 times the tax in Myrtle Beach and 2.5 times in North Myrtle Beach. This answers "do HOA fees count as property tax?" (14 suggestions) with a picture.
3. **Dues by area, as the deduction a full-year rental gets** (row 27): from $4,500 a year in Socastee to $10,500 in Myrtle Beach's north end. The judge's "show what is at stake" idea, from public counts.
4. **What the dues include, counted** (row 28, new pull): about 8 in 10 condos for sale say the dues include building insurance, 85 percent water and sewer, 71 percent internet; in oceanfront buildings 58 percent include electric. Each of those is also on the IRS's nondeductible list for a home (row 1). On a rental they are deductible either way.
5. **A worked example with the county's middle dues** (row 33), and the twist a reader will not expect: cutting personal nights from 20 to 14 raises the deductible dues from about $6,700 to about $7,000 and removes the cap, because the condo stops counting as a home.
6. **The county's day count beside the IRS's** (row 25): a legal residence keeps the 4 percent rate only if rented 72 days or fewer, and the assessor may ask for the Schedule E where the dues are deducted. A main-home owner who rents on the side meets both rules.

## What the live page has worth keeping

- The title's search words: "Are HOA Fees Tax Deductible in South Carolina?" No entry for this page in `data/headlines.json`, so there is no owner-approved headline to keep. Keep the question and "South Carolina" in the title tag.
- The three-way answer (live in it / rent it / both), now with dollars.
- The day-split rule, the repair-day rule, the under-15-days rule, "keep a log": now each from its row (10, 12, 15, 18).
- The special assessment section, now answered fully: the live page's "a question for your CPA, not for a website" becomes Pub. 523's basis line (row 8) and the exclusion (row 9).
- The five FAQ questions (main home, rental, part year, special assessment, home office), rewritten from verified rows. Home office: "employees cannot" (row 19) is the firm part.
- Internal links: /hoa/, /hoa/special-assessments/, /hoa/documents/, /hoa/rental-restrictions/, /buyers/cost-to-own/, /invest/long-term-rental/. Add /invest/14-day-rule/ (the judge: link it, end the overlap), /invest/str-tax-treatment/, /invest/rental-depreciation/, /buyers/property-taxes/, /invest/condos/.
- The sources line's IRS links (Pub. 527, 530, 587), plus Pub. 523, the Schedule E instructions and the SC Code sections. Drop "Verified July 2026" (dates are set by machine).
- One line that this is general information, not tax advice, in the sources line only.

## What must not survive (judge, rules)

- "General information, so ask a CPA" in the hero, and "ask a CPA" as the end of three answers. The page answers; one plain line says a CPA prepares the return.
- "Whether it lowers your taxable gain when you sell is a question for your CPA, not for a website. Do not assume it does." Replaced by row 8.
- "What to ask for before you buy": move-in charges, the resale statement and rental rules wander off the question and repeat four other HOA pages. Cut. The resale-statement claim is true for condos (row 35, 27-31-220) but belongs to /hoa/estoppel-and-transfer-fees/; one link replaces the section.
- H2s as statements ("Live in it and you get no deduction"). Every H2 becomes the question people search.
- "Give your CPA the association's own description of the work." (tells the reader to do the work). Becomes "We get the assessment notice and the minutes that describe the work."
- The same CTA ("Talk through the numbers") three times.
- No photo or visual of any kind (judge). Now a calculator, three charts, a rule table and one photo.
- Any sentence on the 14-day rule beyond one line and the link.

## The shape

**A rule explainer with a calculator inside** (CRAFT 3: "know if a rule applies", then "get their own number"; `reports/Page shapes by kind of page.md` sections 5 and 8). The rule in one sentence first, a rule table by situation, then the tool with its worked example, then the local numbers that show what is at stake, then the two hard cases (special assessments, out-of-state owners), then the actions. A yes-or-no question gets its answer in the first two sentences.

Answer-engine sentences: the first sentence under each H2 names the subject ("HOA fees on a home you live in are not tax deductible.").

## The page, top to bottom

Title tag (30 to 65 characters), for the writer to choose: "Are HOA Fees Tax Deductible in South Carolina? | Chapter3" (live, 56) or "Are HOA Fees Tax Deductible? Rentals vs. Homes, SC | Chapter3" (60). Meta description carries "rental property", "second home", "special assessment", "Schedule E".

H1 (warmer): "Are HOA fees tax deductible?" with a second line such as "Only for the nights the condo is rented." The hero sub-header never says we, our or us.

| # | Section (H2 as a question) | What it proves | Rows | Visual |
|---|---|---|---|---|
| 0 | Hero and short answer | First two sentences: "No, on a home you live in. Yes, on a condo or HOA home you rent out, and for the rented share of the days when you rent it and use it too." Key-facts row: about $650 a month (middle Horry condo dues); 1 in 5 condos taxed as a legal residence; 27.5 years for an improvement assessment on a rental. Slim offer bar. | 1, 3, 10, 22, 26, 5 | Key-facts chips (glass icons with words) |
| 1 | Are HOA fees tax deductible? | The rule table: situation, are the dues deductible, what it means. Rows: lived in all year; second home you never rent; rented all year; rented and used (split); rented fewer than 15 days; special assessment for upkeep vs improvement; home office (employee, self-employed). Then one sentence on why the rental row is the common one here (row 22). | 1 to 4, 10, 15, 16, 19, 22 | Rule table (cards on a phone) |
| 2 | How much of my HOA fee can I deduct if I rent the condo and use it? | The calculator: monthly dues (default $650, the county's middle), nights rented at a fair price, personal nights. Returns the rental share, the deductible dues in dollars, and whether the condo counts as a home (then: deductions stop at the rent; link /invest/14-day-rule/). Under it, the worked example as a table and text: $0, $7,800, about $6,690, about $6,990 (row 33). One line each on what counts as a personal night (family, below-fair rent) and repair days. | 10 to 16, 26, 33 | Calculator; a four-bar chart of the example cases |
| — | Mid offer | "Have us price the dues and rental rules for one condo": we read the budget and the rental rules, and send the dues and what they include. | stories `hoa-rental-bans-filtered` | Offer box |
| 3 | What do HOA fees come to on a Grand Strand condo? | Dues by ZIP area, with the yearly amount a full-year rental deducts (row 27). Then what the dues include (row 28), and the line that turns it into a tax point: on a home, the insurance, utilities and internet inside the dues are all on the IRS's nondeductible list; on a rental they are rental costs either way. | 1, 26 to 28 | Horizontal bars by ZIP (glass.bars, from `chart-dues-by-zip.json`); five icon chips with percentages |
| 4 | Do HOA fees count as property tax? | No: an association is not a government (row 2). The picture: a year of dues against a year of property tax, three real 2026 bills (rows 31, 32). Property tax on a home is deductible only if you itemize. Why the rented condo's tax is higher, in one sentence (row 30), link /buyers/property-taxes/. The county's 72-day rule and the Schedule E it may ask for (row 25). | 2, 25, 30 to 32 | Paired bars, dues vs tax, from `chart-dues-vs-tax.json` |
| — | Mid offer | "Have us pull the tax bill and the dues for a condo you like". Different words from the first offer. | | Offer box |
| 5 | Is an HOA special assessment tax deductible? | Upkeep: deductible on a rental like dues; nothing on a home. Improvement: on a rental, spread over 27.5 years, Example $10,000 → about $364 a year, a little less the first year (rows 4 to 7). On a home, added to the cost basis (row 8); it matters only if the gain passes $250,000, or $500,000 for a married couple (row 9). We get the assessment notice and the minutes that describe the work. Link /hoa/special-assessments/ and /invest/rental-depreciation/. | 4 to 9 | 2 by 2 table: upkeep or improvement, rental or home |
| 6 | Does South Carolina treat HOA fees differently? | No: SC starts from the federal figures, and these rules are not among those it sets aside (row 21). About 6 in 10 condo owners here get their tax bill outside SC (row 23); their rent, less the dues and other costs, is South Carolina income (row 24). | 21, 23, 24 | The photo (below), captioned with row 22's city figure |
| 7 | Where do HOA fees go on Schedule E, and what do I keep? | Line 19, "Other" (row 17). Line 2 asks for the rented days and personal days (row 18). Numbered steps: keep the association's statements; keep a night log (rented, personal, repair days); keep the assessment notice and minutes; give your preparer the day counts. "We get the budget, statements and minutes before you buy." | 17, 18 | Numbered steps |
| 8 | FAQ | Rewritten from rows: Are HOA fees deductible on my primary residence? (1, 2) On a rental? (3) On a second home I never rent? (1) If I rent my home fewer than 15 days? (15, 25) Can I deduct HOA fees if I work from home? (19, 20 only if verified) Can I deduct HOA fees from capital gains? (8, 9) Do family stays count as personal use? (11) | as listed | Open text, no accordions |
| 9 | End offer band, related reading, sources | Offer: "Send us the condo you are looking at". Related: the links above. Sources line: IRS Pub. 527, 530, 523, 587; Schedule E and its instructions; S.C. Code 12-6-560, 12-6-1720, 12-43-220; Horry County parcels and Treasurer; the CRM count method with the CCMLS line. "General information, not tax advice." | | |

Phone length target: about 9 to 10 screens, down from 12,600 px of text. Measure the top: hero, short answer, chips and the slim bar must leave the rule table starting within the second screen.

## Visuals

| Visual | Built from | Notes |
|---|---|---|
| Key-facts chips | rows 22, 26, 5 | Words with every icon. |
| Rule table | rows 1 to 4, 10, 15, 16, 19 | Situation / deductible? / what it means. Cards at 320 and 390 px. |
| Calculator | rows 10 to 16; default $650 (row 26) | Inline in the spec, as in `specs/fix-and-flip.js`. No rate, no payment fields. Must reproduce the five cases in `worked-example.json` (A29b: three hand-worked cases at least). Personal nights > max(14, 10% of rented) → "counts as your home"; rented < 15 and counts as a home → $0 and "rent not reported". Zero personal nights → 100 percent. |
| Worked example bars | `worked-example.json` | Four bars, labelled by use. |
| Dues by ZIP, with yearly deduction | `chart-dues-by-zip.json` | glass.bars. Label "middle monthly dues of condos for sale". 8 areas. |
| What the dues include | `includes.json` via `findings.json` "dues_include" | Five chips: insurance 79%, water and sewer 85%, trash 91%, internet 71%, electric 27% (oceanfront 58%). |
| Dues vs property tax | `chart-dues-vs-tax.json` | Three pairs of bars. Chart note names both groups (row 32). |
| Special assessment 2x2 | rows 4 to 9 | Small table. |
| Steps | rows 17, 18 | Numbered list. |

Charts are drawn flat in the liquid-glass style (CRAFT 4); every number comes from the data files, never typed.

## Photo

One photo, under section 6 or beside the dues-by-area chart:

- **Candidate:** "Atlantica III & II, Myrtle Beach, SC.jpg", Wikimedia Commons, https://commons.wikimedia.org/wiki/File:Atlantica_III_%26_II,_Myrtle_Beach,_SC.jpg , by Carl Dunn, **CC BY 2.0** (https://creativecommons.org/licenses/by/2.0/), 2592 x 3872, taken 2009-06-01. Looked at full width (1280 px) on 2026-11-04: a 15-plus-story condo tower in blue, gray and yellow at dusk, palm trees and a street with parked trucks in front, two people walking away from the camera at the bottom edge (backs only, not recognizable), no readable sign, no plate readable at page size. Portrait: crop to landscape for the page.
- **Why it carries a fact:** the county's parcel layer has "ATLANTICA HPR" units in tax districts 898 and 899 (City of Myrtle Beach): 138 units, 134 of them at the 6 percent rate (RAW parcel file; not for the page). Caption names no building: "A condo tower in Myrtle Beach. Inside the city, about 1 in 11 condo units is taxed as its owner's legal residence; the rest are taxed as rentals or second homes." (row 22 wording). The builder confirms the street and makes the licence record (`tools/photos.js`), with the credit "Photo: Carl Dunn, CC BY 2.0".
- **Rejected:** "Homes and Resorts Along Myrtle Beach.jpg" (CC BY-SA 2.0, formulanone): it shows beach houses on an island with a marsh behind, not condos, and the place is not shown to be Myrtle Beach. "Beach Resorts at Myrtle Beach, SC.jpg" (CC BY-SA 4.0): two distant towers behind a construction site from SC 31; shows nothing the page says. Oceanfront tower aerials are already on /hoa/hoa-vs-poa/, /hoa/reserves/, /hoa/special-assessments/ and /invest/condos/; do not reuse a fifth time.
- **Our own illustration (stand-in the judge named):** the worked-example chart is the day-split picture; no separate drawing needed.

The photo partner's shots (below) replace the stand-in when they arrive.

## Photo partner's shot list

In `shot-list.md`. In short: (1) a bank of mailboxes or the association office door inside a Grand Strand condo building's common area, no names or unit numbers; (2) a condo pool deck or lobby with no people, the common areas the dues pay for; (3) an oceanfront condo building from a public beach access, with two buildings in frame so none is singled out.

## Siblings and overlap

- /invest/14-day-rule/ owns the day rules. This page states the home test once (row 13) and links there. Both pages must state the same rule: personal use of more than 14 days, or more than 10 percent of the days rented at a fair price, whichever is greater.
- /hoa/special-assessments/ already says the tax line in short and links here ("has the detail"). Its Pub. 527 wording matches rows 3 and 4. Its worked example is its own; ours is a labelled $10,000 example.
- /invest/condos/ owns the condo counts (rows 22, 26, 29 reuse its numbers). Same values, different use.
- /buyers/property-taxes/ owns the 4 percent rate and the 72 days. This page gives one sentence each and links.
- /buyers/cost-to-own/ uses $650 a month for the middle condo dues. Same value here.

## Owner questions

None. The rules come from IRS publications and the SC Code; the numbers from public records and the CRM in aggregate. One optional item in `facts.md`: whether the page may repeat the 14-day page's "we can put you with a CPA who works on beach condos locally". If unconfirmed, leave it out.
