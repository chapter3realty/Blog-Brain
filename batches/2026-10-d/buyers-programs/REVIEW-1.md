# Review round 1: /buyers/programs/, what the fixer changed

Spec: `specs/programs.js` (round 0 kept at `wf2/buyers-programs/programs.r0.js`). New facts: facts.md rows F1 to F6, VERIFIED-BY-FIXER. Shared-helper notes: NEEDS.md 8 to 12.

Gates after the fix: score 99/100 (was 96; P1 still 50%: $114,960, $134,120 and $17,500 are official limits and stay exact). claims-scan 0. facts-check 0 on this page. house-claims 0. struck-check: no struck wording. critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 8 warnings (AfBA small text and line length, kept on purpose, NEEDS 7; the two outcome boxes at 1024; two read.wall warnings at 320). build.js check OK. build.js audit: only the date mismatch (lead runs `node build.js dates`) and the A20 note (no Tim quote; never written).

## Critic, blocking

1. End band unreadable. Fixed in the spec: page CSS gives the last-of-type navy band's `.wrap` the glass DARK panel back. Checked at 390 and 1440: ivory text on the dark panel. critic.mjs now measures contrast; 0 hits. Root cause logged, NEEDS 8.
2. Feed search box at 320. Worked around in page CSS (`max-width:100%`, `min-width:0`, pills wrap). No page scroll at 320 now. NEEDS 9.
3. Header at 1024. Worked around in page CSS (header gap 2rem between 1000 and 1100 px). Page is 1024 px wide now. NEEDS 10.

## Critic, nits

- Awkward wraps: non-breaking spaces in "15 years", "10 years", "year 10", "year 15", "4 percent". The FAQ "What happens if I sell before 15 years?" was cut (it repeated the section). H1 "first-time buyer." kept on one line.
- "$0" cell: min-width 2.8rem and padding. Checked at 320.
- Map labels: town labels 20 units (about 12 px at 320). "Atlantic Ocean" moved from the map into the key.
- Feed title: lead's file, NEEDS 12.
- Entities: FHA, VA, USDA spelled out in the new loan table; HUD spelled out at the condo tile. Glosses added: off-frame modular, prepaid items, appraisal gap, doublewide. "Non-warrantable" replaced by "most lenders will not lend on" (also clears scorer P6).
- Inland and beach towns now named in the sentence, and the chart's second column says "inland", "beach town" or "north coast" for each town.
- "Sometimes the program is the right call..." cut. "Closing costs are the other half" cut.
- H3 renamed "Manufactured homes".
- Myrtle Beach: the local-help section and its FAQ now say Myrtle Beach is a member of the county's HOME consortium (F4).
- Title now "SC Housing Down Payment Help in Horry County | Chapter3" (S1 ok).
- Step 1 links to SC Housing's Find a Lender list for Horry County. Sources line adds Find a Lender, Census B25118 and the county HOME page.
- Dana example rewritten with a turn (she still owns the Ohio house, so she sells it before the Conway closing), ends with what it means (STORY-5), and moved to the last section (T2), under its own H3.
- P1 and P2: $68,800 sentence cut; P2 now 3.2 per 100 words.
- Dates: lead (build.js dates).

## Reader, blocking

1. "Is the $10,000 a second monthly bill, with interest?" Partly answered. SC Housing's own handout says the $10,000 has a zero rate and no monthly payments, but the ledger header, CLAUDE.md and PLAYBOOK A14 keep any rate and any payment term off the page, and the judge removed "Interest Rate 0%" and "Monthly Payments None" from the live page on purpose. The page now says (F2) that the $10,000 has its own loan estimate from the lender, the federal form that lists a loan's terms, and that the timeline shows the balance stays $10,000 until year 15. **For the lead or owner:** if "no monthly payments" may be said about a government program on this page (the audit's "review" tier), it is the one sentence this reader wanted. The fixer did not decide that.
2. Which loan, and how much cash. Added the H3 "Which loan does the $10,000 go with?" with a four-row table (FHA, VA, USDA, conventional: whose rules, who can use it, down payment needed or none, what the $10,000 can pay), F1. It says the $10,000 can go to closing costs and prepaid items on a VA or USDA loan. No down payment amount or percentage (PLAYBOOK A17). The table also restores scorer A6.
3. The rate FAQ. Rewritten as "Who decides the interest rate on an SC Housing loan?": SC Housing decides the rate on its own first mortgage, a fixed rate posted daily for its lenders; it makes the same loan with or without the $10,000, so the buyer can ask the lender to quote it both ways. No rate stated (F1).

## Reader, nits

- Money open today: the "money is limited" item now says SC Housing's program page offers the $10,000 and lists Palmetto Heroes as closed.
- Recapture tax: now says why it exists, that it is an extra federal income tax in the year of the sale, and that it applies only on a sale at a gain with income above set levels (F3). Still no percentage (row 11).
- Words: "loan's insurer", "bond program", "targeted counties" (now only in the FAQ, with its meaning), "non-warrantable" all removed or glossed.
- 1,679 vs 1,671 and the "nine towns" split: both counts are gone; shares are said in words and the towns are named.
- HUD bar removed from the income chart.
- First screen: hero tiles removed. The sub leads with the $10,000 and the inland finding.
- Feed: NEEDS 12.
- FHLB grants: the 80 to 120 percent grant is named (Workforce Housing Plus+). Which banks have money left is not knowable from a public page (facts.md, "Not verified").
- Not answered: whether a seller takes an offer with SC Housing help as readily, and whether it slows the closing. No source; only the brokerage knows. Suggested owner question for `templates/owner-questions.md` (the lead files it): "When a buyer uses SC Housing's $10,000, do sellers or listing agents here treat the offer differently, and does it add time to the closing?"

## Owner, blocking

1. End band: fixed (critic 1).
2. Palmetto Home Advantage three times: side-by-side table cut; the H3 keeps only what the card does not say (own income up to $140,000 for any household size, no price limit of its own, the two-financed-homes rule). Homebuyer Program card now reads "The $10,000 on this page".
3. Repetition: H1 says the first-time point once; it is cut from the short answer and the qualify intro; the FAQ keeps it as the search question with the targeted-county reason; Dana now shows a different point (sell the other home first). The $10,000-and-15-years fact: hero sub no longer says 15 years; short answer says it once; the repay section explains it; the grant FAQ keeps it as its answer; the fit card and the table no longer repeat it; the "sell before 15 years" FAQ is cut. Hero tiles removed.
4. Too many exact numbers: tiles gone; "Of 3,011 ... 1,679", "Conway has the most ... 545", the nine "x of y houses", "2,411 of 2,707", "1,024 of the 1,671 we could place" and "43 of 462" are all gone, said as "about four in five", "about a third", "about six in ten", "fewer than one in ten". Each word is checked in the spec against the data files.
5. Inland and beach split: towns named (critic nit).
6. Filler and figures: both sentences cut; the Conway count sentence cut.
7. Feed: lead, NEEDS 12.
8. H1: now "Down payment help in Horry County: you do not have to be a first-time buyer." Local (LOCAL-1), a fact the page proves (row 1), and not a loan offer (BIZ-2). headlines.json needs the same change, NEEDS 11.
9. Sideways scroll: fixed at 320 and 1024 (critic 2 and 3).

## Owner, nits

- Agency legal name and "bond program": cut.
- Photo: kept, because critic.mjs blocks a blog with no photo. Its caption ties it to the USDA finding. A better photo (a house in Conway or Loris) was not found: Wikimedia's API returned 429 (rate limit) for the two Conway residential files tried. The shot list already asks the photo partner for qualifying houses.
- Underwriting terms: "loan's insurer" and "monthly debts" rewritten ("Some loan types ask for a higher score. All your monthly debt payments together can be at most 45 percent of your income.").
- Made It Home! and the HOME card: one line each now; the HOME card is gone.
- $68,800 sentence: cut.
- Dana: given a turn (see critic nits).
- Offer strength and closing time: see reader nits, owner question.
- Icons: Palmetto Heroes now a pin, voucher a key. The icon set has no badge or voucher drawing; NEEDS could ask for one, not filed.
- Strengths kept: the inland-coast shares, the USDA map, the condo check line, the USDA lookup line, the bank-grant line, the lender wording and #afba.
