# Plan: /hoa/liens-and-foreclosure/

Batch 2026-11-a, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (39 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-11-a/hoa-liens-and-foreclosure/`. Spec to write: `specs/liens-and-foreclosure.js` (none exists; the live page is hand-made, so this is its first spec). Photo partner: `shot-list.md`. Registry and sibling notes: `PROPOSED.md`.

## The reader and their job

Mainly an owner in Horry County who is behind on HOA or condo dues, or just got a lien letter or a summons. They typed "can an hoa foreclose on your home", "what happens if you don't pay hoa fees" or "hoa lien south carolina". Second, a buyer of a condo or an HOA home who fears inheriting the seller's debt. Third, an investor reading "horry county foreclosure list" who sees "HOA" in the lien column.

Their job, in one verb: **stop it** (the owner) or **avoid it** (the buyer). They need to know whether a small bill can really cost the house, how fast, what it will cost, and the one step that ends it.

What they already know: HOAs charge dues and send late notices. What they do not know: that the power to foreclose is real here and comes from the recorded papers; that the lien sits behind an earlier mortgage, so an HOA sale leaves the mortgage on the house; that fees, not dues, make the bill big; that an owner who ignores the summons hears nothing more, not even the sale date; that the sale is final that day; and that it happens here every month.

Worry: losing a house with equity over a few hundred dollars. Next question: can Chapter3 sell it before the sale, or check a unit before closing.

## The deciding fact (checked first)

Yes, a South Carolina association can foreclose for unpaid dues, through the court. Condos by statute (row 1: 27-31-210(a), "may be foreclosed by suit ... in like manner as a mortgage"). Neighborhood HOAs through their recorded covenants, enforced in equity (row 2: Bailey; Winrose, where the Supreme Court said the HOA "had the legal right" to foreclose). The lien is behind a mortgage recorded before the dues fell due (rows 3, 4). The page can be written as planned.

The second fact that shapes the page: the Homeowners Association Act says nothing about late fees, liens or foreclosure (row 5, every section title read; the Nonprofit Corporation Act searched too). So the rules a reader lives under are in their own declaration, and the state sets no cap on the fees. The live page's "the answer is never generic" becomes a concrete statement: here is what the law sets, and here is what your papers set.

## The findings no other site has

1. **Our count from the county's sale list** (rows 18 to 20): of the 19 cases on Horry County's list for the November 2 sale, 4 were association debts and 15 mortgages. Three of the four are condo units. The association judgments ran about $11,500 to $36,400, about 5 to 10 percent of the county's value of each home. No one publishes this split; the county's list has the column, nobody counts it.
2. **The $250 that became $2,898.67, as a chart** (rows 13, 14): the court's own breakdown in Winrose. Dues are 9 percent of the bill; lawyers and court costs are 89 percent. Then the house sold for $3,036. The live page's "costs escalate quickly" becomes four bars from a court record.
3. **A real timeline in months** (row 12): 3 months behind to a lien, 5 months from suit to judgment, about 2 weeks from judgment to auction. Paired with our local rules (rows 9, 10): the first-Monday sale in Conway, and the fact that every association case on the list sold with no 30-day upset period.
4. **A Murrells Inlet case** (row 11, Wachesaw): the owner offered the full amount after the sale, and the association's lawyers refused it. The deciding action for a reader who is behind: pay, or settle in writing, before the sale.
5. **Horry County leads the state in HOA complaints** (row 21): 31 percent of the state's total, the most per person.

## What the live page has worth keeping

- The title's search words: "Can an HOA Foreclose in South Carolina?" (title tag). No entry for this page in `data/headlines.json`, so there is no owner-approved headline to keep. Keep the question as the title tag; the H1 can be warmer (below).
- The judicial-foreclosure point and the priority point, now with cites (rows 1 to 4).
- The estoppel point for buyers, now with the statute that caps the buyer's liability (row 28), and the link to /hoa/estoppel-and-transfer-fees/.
- The 14.1 percent complaint figure, now with Horry County's share around it (row 21).
- Internal links: /hoa/special-assessments/, /hoa/documents/, /hoa/south-carolina-hoa-laws/, /contact/. Add /hoa/violations-and-fines/ (fines), /invest/foreclosures/ (buying at the sale), /hoa/reserves/ and /hoa/dues-increases/ where they answer the next question.
- FAQ questions 1, 2, 3 and 5 (foreclose, priority, what happens, withholding), rewritten from verified rows. Question 4 (find out before I buy) moves into the buyer section.
- The legal notice block (website PLAYBOOK compliance). Shorten its body; drop "verified in July 2026" (the date is set by machine).

## What must not survive (judge, rules)

- No statute cites and no outbound links. Every rule sentence now has its row; the sources line links the statutes, the two Supreme Court opinions, the county page and the SCDCA report (the judge's links-out failure).
- "Generally", "typically", "potentially", "costs escalate quickly". Each is replaced by the row's fact or cut.
- "It is a question for a South Carolina attorney rather than a website" as the answer to the H1 reader. Replace with the "if you are behind now" steps (rows 22 to 25) and one plain line on when a lawyer is worth it, with the SC Bar's $50 referral.
- "Request an estoppel ... This is not optional diligence" (tells the reader to check). Becomes "We request the association's statement before every closing" (CRAFT 5, we do the work).
- The "Distressed sales" homes strip above the answer on a phone (judge). Move the homes feed to the end, under its own heading. The DISTRESSED feed is in `idx-lib/feeds.js`, a shared file: leave it, and place the strip low in the spec. See NEEDS below.
- The repeated CTA ("Have us check a unit before you close" three times).
- "Verified July 2026" in the sources line.

## The shape

A law or rule explainer with a sequence inside it (CRAFT 3; `reports/Page shapes by kind of page.md` section 5, with a timeline because the rule has steps and deadlines). Main relation: **condition then sequence**. The rule in one sentence first, then who it applies to (condo vs HOA), then what happens in order, then what to do, then the buyer's side.

H1 (warmer human question, same promise as the title): "Can an HOA take your house in South Carolina over unpaid dues?" Title tag: "Can an HOA Foreclose in South Carolina? Liens & Unpaid Dues | Chapter3" (verify 30 to 65 characters; trim "Liens &" if long).

First screen on a phone: H1, byline, and the answer: "Yes. A South Carolina condo or homeowners association can put a lien on your home for unpaid dues and ask a court to sell it, even if your mortgage is current. On Horry County's list for one month's sale, 4 of the 19 homes were being sold for association debts." Then a slim offer bar (not the full box).

## Sections, in order, with what each proves

1. **Can an HOA foreclose on your house in South Carolina?** (H2 = the top search.) The answer above, then: it goes through the court, never a private sale; condos by statute, HOAs by their recorded papers; the state HOA law sets no limit on the fees. A two-row table: Condo association / Neighborhood HOA, with columns "Where the power comes from", "Can it foreclose?", "Ranks behind". Rows 1, 2, 5, 16.
2. **How often does it happen in Horry County?** The 4-of-19 finding as a simple bar or a 19-square grid (4 filled), the range of the four debts against the range of the mortgage debts, and "about 5 to 10 percent of the home's county value". One line: Horry County files the most HOA complaints in the state. Rows 18 to 21. Caption under the chart names the list and that it is one month.
3. **What happens if you stop paying HOA dues?** A numbered timeline, each step with what the owner gets and how long it took in the real case: (1) late charge and interest, per your declaration; (2) the lien is recorded, about 3 months in; (3) the lawsuit and a notice on the property's title (lis pendens); (4) no answer means no more notice, not even of the sale; (5) judgment, then the sale is advertised three weeks in the paper; (6) the auction at 11 a.m. on the first Monday in Conway; with no deficiency demanded, it is final that day; (7) the buyer gets a deed, and the mortgage is still on the house. Rows 6 to 10, 12, 15. Photo of the Government and Justice Center beside step 6 (row 39), captioned with what happens there.
4. **How does a small HOA bill turn into thousands?** The Winrose chart (four bars: dues $250, interest $80.87, court costs $542.80, attorney fees $2,025). Three sentences: what it was, what the house sold for, what the Supreme Court said ("a last resort, not a business model"). The owners won only because the bid was below 5 percent of their equity, five years later. Rows 13, 14. Label it as one South Carolina case.
5. **Does an HOA lien come before your mortgage?** A priority table, top to bottom: property taxes; a mortgage recorded before the dues fell due; the association's lien; liens recorded later. Each row with its source in a small column. Then what that means both ways: an HOA sale leaves the mortgage on the house; a bank's foreclosure wipes out a condo's old dues and every owner pays them (row 33). Condo owners in foreclosure owe rent (row 17). Rows 3, 4, 15 to 17, 33.
6. **Behind on HOA dues? What to do now.** Numbered actions, good news first: (1) pay or get a written plan before the sale; the county takes it off the sale when the debt is paid (row 22, subject to the verifier); (2) answer the summons, or you hear nothing more (row 8); (3) after the gavel, the association can refuse your money: the Murrells Inlet case (row 11); (4) a dispute over the amount under $7,500 can go to magistrate court (row 23); (5) a lawyer through the SC Bar, $50 for the first half hour (row 24); (6) selling first: the association is paid from the sale price at closing, and we can list it (row 25, offer). Then one line: withholding dues starts the steps above; a condo owner cannot opt out (row 26).
7. **Buying a condo or HOA home: will the seller's unpaid dues follow you?** We request the association's statement before every closing; the statute caps what a condo buyer owes at that statement; unpaid dues come out of the seller's proceeds (rows 25, 28, 29). Then the building's health: more than 15 in 100 units 60 days late blocks a Fannie Mae loan; one lawsuit against one owner does not (rows 31, 32). Link /hoa/estoppel-and-transfer-fees/, /hoa/reserves/. Offer: "Have us check a unit before you close."
8. **Is the law changing?** A three-row table of the 2025-2026 bills (S. 366, H. 3447, H. 5204): what each would do, where it stands. One line: none is law. Rows 35 to 37.
9. **Homes for sale** (the feed, moved here from the top), with row 38 as its line: about 3 in 1,000 homes for sale here are foreclosures.
10. **FAQ** (open text): fines (row 27), paid-off house (row 1: the lien attaches to the property, mortgage or not), bankruptcy (row 34), after a bank foreclosure (row 33), statute of limitations (leave out: not verified), withholding dues (row 26).
11. **Sources line**, the legal notice, and the final offer box.

On this page list (four or more sections): Can they foreclose / How often here / The steps / How the bill grows / Your mortgage / Behind now / Buying / New bills / FAQ.

## Visuals

| Visual | Section | Built from | Notes |
|---|---|---|---|
| Condo vs HOA rule table (2 rows x 3 columns) | 1 | rows 1 to 5, 16 | Cards on a phone. |
| 19-square grid or two-bar chart: 4 association, 15 mortgage | 2 | `chart-mie-sale-by-lien.json` | Glass style (`tools/glass.js`). Caption: "Cases on Horry County's list for one month's foreclosure sale. Source: Horry County Master in Equity." No addresses. |
| Range bars: association debts vs mortgage debts | 2 (optional) | `findings.json` mie.hoa_judgments, mie.mortgage_residential_judgments | Only if it reads in one second; else one sentence. |
| Numbered timeline, 7 steps, with "about 3 months", "5 months", "2 weeks" from the real case | 3 | rows 6 to 10, 12, 15 | Steps component; months, not dates. |
| Photo: Horry County Government and Justice Center, Conway | 3, beside step 6 | Wikimedia Commons, CC BY-SA 3.0, "Pollinator at English Wikipedia", https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg | Seen full size: the brick complex with the white portico and flagpoles. Caption: "Foreclosure cases in Horry County are heard and sold at the Government and Justice Center in Conway." Needs a licence record in `data/photos.json`, credit line, and the verifier's check that it is 1301 Second Avenue. Replace with the photo partner's shot when it comes. |
| Bar chart: $250 to $2,898.67 by part | 4 | `chart-winrose-judgment.json` | Four bars, labelled in dollars; title says the finding ("Fees were 9 in 10 dollars of the bill"). |
| Priority table, 4 rows | 5 | rows 3, 4, 16 | First column is the plain name; source column small. |
| Numbered action list, 6 items | 6 | rows 8, 11, 22 to 25 | |
| Bills table, 3 rows | 8 | rows 35 to 37 | Links to scstatehouse.gov. |

No icons needed. No map: the page is about a rule, and the only place (the courthouse) gets a photo.

## Photo partner's shot list

In `shot-list.md`: the Government and Justice Center entrance on Second Avenue, Conway (replaces the 2006 Commons photo); an older mid-rise condo building exterior from public ground, no name or sign readable (the page's subject without naming a building). Never a building that is on the sale list.

## Open items for the builder

- **Verifier first.** Rows 2, 4, 5, 18 to 20 and 22 carry the stretch risks noted in column 10. Row 22 ("Mortgagor") decides whether action 1 can cite the county.
- **Homes strip placement.** Put the feed at the end of the spec. If the spec cannot move it, note it in NEEDS.md; do not edit `idx-lib/feeds.js` (shared).
- **No dates in body copy.** The Winrose timeline is given in months. The sale list is "one month's list"; the byline date covers it.
- **Re-run before release.** `READ_DATE=<day> python3 -I pull-mie.py && python3 -I build-findings.py` if the build happens after the December list is posted; the page's numbers come from `findings.json`, never typed.
- **One value per fact on the site.** /hoa/violations-and-fines/ says the condo lien "outranks most other claims" (see PROPOSED.md).
- **Compliance.** No rate (the Winrose clause has one: say "interest"). No address, case number or owner from the sale list. Do not name the company that bought in Winrose. "Not legal advice" once, in the notice.
