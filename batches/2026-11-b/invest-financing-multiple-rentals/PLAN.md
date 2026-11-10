# Plan: /invest/financing-multiple-rentals/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (46 rows: 32 carried from the verified 2026-11-a ledger, 9 of them re-opened today; 14 new and waiting for a verifier), the triage row, cannibalization cluster 32, the live page and spec (`specs/financing-multiple-rentals.js`), and the owner's round 3 and round 4 notes on this page (website `research/invest-next/owner-answers-batch4.md`).

## Why it is being rebuilt

Triage: the URL is about financing, the H1 is about mistakes, the story is told twice, and the only local fact is the 6 percent tax. Search Console: 0 clicks on 1 showing in 28 days. The one problem a reader has, in one sentence: **a reader who typed "how to finance a second rental" gets three mistakes and one story, and never learns where the money comes from or what a lender here will do.**

## Step 1. What the live page has that is worth keeping

- **The owner's spine from round 4 (2026-09-07):** "common mistakes people make buying a second rental have our story in there talk about 0 dollar down opportunities". The mistakes, the story and the equity all stay. The rebuild puts the answer to the searched question first and the mistakes in their own section.
- The story (`reserve-story`), told once, in the live wording: "It took him longer. He did it the safer way, he kept a reserve, and he can keep buying now." Change "a client" to "a buyer" (row 28).
- The mild paperwork paragraph (row 29), as the owner asked ("Dont make this sound too harsh").
- "The down payment still exists. It comes from a house you already own instead of your bank account." Plain and true (row 3).
- "Two loans now depend on the rents. ... If one does not, you bought a house that costs you money every month." Keep the idea; reword to name the rent counted (row 5).
- Reserves: "Reserves are money in your accounts on the day the loan closes. The lender does not take it, hold it or freeze it." The owner asked for this (round 3; row 13).
- The ten-property limit as one short section halfway down (owner: "a very very very small side note that applies to almost nobody").
- Links: /invest/strategies/dscr-loans/, /invest/strategies/small-multifamily/, /buyers/property-taxes/, /invest/cash-to-close/.
- The offer wording "We run the rent on the next house and check the numbers with both loans on them before you offer" (row 32).
- The sources note: "Educational only, not a loan offer. Chapter3 is a real estate brokerage. Loan rules change; a loan officer confirms them for your file."

Cut:
- The h1em "The mistakes, the story, the equity." and the short answer that retells the story.
- "Lenders cap the cash you can take out of a rental below the cap on a home you live in" as an unsourced line; row 1 gives the dollar figure instead.
- "the new house pays about three times the tax" (the registry figure is 3.3 times outside city limits; row 23).
- "DSCR loans or portfolio loans, which have no such limit" and "Most ask for two to six months" (a lender's blog, not primary; dropped in 2026-11-a).
- "Most investors never think about it", "Write down what happens ...", "Ask for the figure before you shop", "Send each document the day the loan officer asks" (to-dos for the reader; we do the work).

## The reader and their decision

An owner of one rental, often living in another state, who wants a second one here. They know their first loan. They want to know where the money for the next one comes from, whether a lender here will lend against what they own, and how much cash they must keep. Their fear: one good rental becomes two bad ones.

**Their decision:** pay for the next rental with savings, with a cash-out refinance on the first rental, or with a line of credit on the home they live in, and whether they can carry two houses through a bad stretch. **The job, in one verb:** plan. **Kind of page:** a decision guide with one worked example (CRAFT 3, "Decide"). About 1,600 to 1,900 words: each section answers a searched question.

## The answer, in two sentences (then one more)

You pay for a second rental with savings, or with the equity in a home you already own: a cash-out refinance on your first rental, or a line of credit on the home you live in. The lender then wants the new rent to cover the new house, and cash left in your accounts after closing.

One more line, the local fact: "In 2025, lenders here made 1,228 lines of credit on homes their owners live in, and 17 on rentals." (Rows 3, 1, 5, 11, 34. First sentence 31 words: the writer splits it at the colon.)

## Title, H1, sub-header, description, keywords

- **Title (58 characters):** `How to Finance a Second Rental in Myrtle Beach With Equity`.
  The triage's "Financing a Second Rental in Myrtle Beach: Equity, Reserves, Limits" **fails build.js**: `LEND_HEADLINE` refuses a title, H1, hero sub or button that starts with "Finance" or "Financing" (PLAYBOOK A17b, owner 2026-09-07). "How to finance ..." passes the check and carries the top suggestion ("how to finance a second rental property", four seeds). Reserves and limits go in the description.
- **H1:** "How do you finance a second rental in Myrtle Beach?" (triage). It passes `LEND_HEADLINE` and names the place (`HEADLINE_PLACE`). It is the reader's question, not an offer. A17b: "The page can be about loans; the headline cannot read as an offer of one."
- **Owner's-eye flag (for the lead).** On 2026-09-07 the owner wrote "FUCK NO" to the title "Finance Multiple Rental Properties in Myrtle Beach" and moved the page to "Buying a Second Rental". The new title is a how-to question, not an offer. If the owner's-eye reviewer reads it as a loan company's headline, use the fallback: title `Second Rental in Myrtle Beach: Equity, Reserves, Limits` (55), H1 "How do you pay for a second rental in Myrtle Beach?".
- **Hero sub-header (24 words, no we, no offer):** "A typical Myrtle Beach-area house bought in 2019 has gained about $130,000. That equity can pay the down payment on the next rental." (rows 16, 3; "down payment" with no number).
- **Description (about 155 characters):** "How to finance a second rental in Myrtle Beach: cash-out refinance or HELOC, Fannie Mae reserves with multiple financed properties, the 10-home limit, local numbers."
- **ogTitle:** "How do you finance a second rental in Myrtle Beach?" **crumb:** "Second rental". **eyebrow:** "Repeat investors".
- **Keywords:** how to finance a second rental property Myrtle Beach; using equity to buy another rental property; HELOC on rental property Myrtle Beach; HELOC on primary residence to buy investment property; cash-out refinance investment property; Fannie Mae reserves multiple financed properties; how many rental properties can you finance; second rental property mistakes. Not "DSCR loan" (dscr-loans), not "cash to close" (cash-to-close), not "second home" (second-home), not "rental property calculator" (long-term-rental).
- **author:** "devin" (Devin Day byline, Tim Nash reviewer, set by mkpage). Devin is never named in the copy.

## Sections in order (question headings people search)

"On this page": Equity, HELOC, Reserves, Rent counted, Turned down, Mistakes, The limit, FAQ.

1. **Hero and short answer (first phone screen).** H1, byline, sub-header, the two-sentence answer and the local line. A row of two key facts with words, no more: "about $130,000: what a typical 2019 house has gained" (row 16); "17 lines of credit on rentals here in 2025" (row 34). Slim offer bar: "Send us what you own and the house you want. We run both with the loans on them." Button "Send us your two houses" to /contact/. The site's edge feed sits under the opening (see BUILD.md for its title).

2. **How much cash can your first Myrtle Beach rental give you?** (searches: "how to use equity to buy another rental property", "cash out refinance investment property").
   - First sentence is the answer: what you can take out depends most on when you bought.
   - **Visual 1, bar chart** from `chart-equity-by-year.json`: one bar per purchase year, 2015 to 2025, labelled in rounded dollars. Title: "A house bought here by 2020 has gained over $100,000. One bought in 2022 to 2024 has gained about nothing." Bars for 2022 to 2025 sit at the zero line, each labelled with its own small change from the file (2024 is about -$6,000), never "about $0". No axis to read: the label is on the bar. Source line under it: Zillow Home Value Index, Myrtle Beach area, September 2026.
   - The worked example (label "Example", rows 1, 17): bought in 2019 for about $233,900, worth about $364,300 now. The largest new loan on it is about $273,200. If you still owe $150,000, a cash-out refinance frees about $123,200 before closing costs. Bought in 2022, it frees little or nothing.
   - Timing in one sentence: the loan paid off must be at least a year old, and you must have owned the house six months (row 2).
   - "The down payment still exists. It comes from a house you already own." (kept line; row 3). One link to /invest/how-long-to-hold/ for the price history.
   - **Mid offer:** "Want to know what your rental could free up?" One sentence: "Send us the address and what you owe. An agent pulls the recent sales near it, and a loan officer at our preferred lender gives you the refinance figure." Button "Send us your rental". (No automated value: an agent's sales, not a number from a model.)

3. **Can you get a HELOC on a rental property here?** (searches: "heloc on rental property", "can you take out a heloc on an investment property", "heloc on primary residence to buy investment property").
   - First sentence is the answer: it is rare here; the line of credit lenders make is on the home you live in.
   - **Visual 2, three horizontal bars** from `chart-equity-routes.json`, one message. Title: "Lenders here put lines of credit on homes people live in, not on rentals." Bars: "Line of credit on a home the owner lives in: 1,228"; "Cash-out refinance on a rental: 149"; "Line of credit on a rental: 17". Caption: "Loans made in Horry County in 2025, as lenders reported them." (row 34).
   - Of 56 rental line-of-credit applications that reached a decision, 35 were turned down, about 6 in 10 (row 35). A line of credit may require that you live in the home (row 42).
   - The other route: a line of credit on the home you live in can pay the down payment on the rental under the standard rules. Its payment then counts as a debt when you qualify (row 3). If you already have a mortgage, the line is a second mortgage you pay besides the first (row 43). Define HELOC once: "a home equity line of credit, or HELOC".
   - No rate, no payment, no lender name.

4. **What reserves does Fannie Mae require when you own other financed homes?** (search: "fannie mae reserve requirements for multiple financed properties").
   - First sentence is the answer: six months of the new house's full monthly cost, plus a share of what you owe on your other financed homes.
   - **Visual 3, a small table** (glass card, three rows), readable at a glance:

     | Financed homes you have, counting the new one | Extra cash to keep |
     |---|---|
     | 1 to 4 | 2% of what you owe on the others |
     | 5 or 6 | 4% |
     | 7 to 10 | 6% |

     One line under it: your own home and the new house are left out of "the others" (row 12).
   - The worked number (rows 19, 20, 23): on the example, the new house's tax is about $4,700 a year at the 6 percent rate (link /buyers/property-taxes/ on "the 6 percent rate"; 3.3 times an owner-occupant's bill outside city limits), and the dues $1,200. The rule asks you to keep about $8,400, plus six months of the new loan's payment and insurance. Never a dollar payment.
   - The kept lines: the lender does not take it, hold it or freeze it; it checks it is there (row 13). Cash from a refinance cannot count toward that same refinance's reserves (row 4).
   - One sentence each, with a link: what else you bring to closing (/invest/cash-to-close/); a DSCR lender sets its own reserve rule (/invest/strategies/dscr-loans/).
   - **Mid offer:** "Have us work out the cash to keep for your two houses." One sentence: "Send us what you own and what you owe. We put the reserve, the tax and the dues for both houses on one page before you offer." Button "Have us run the reserve".

5. **How much of the new rent does the lender count?** (searches: "what percentage of rental income can be used for mortgage", "can you use short term rental income to qualify").
   - First sentence: on a long-term rental you buy, three quarters of the rent, from the appraiser's rent schedule or a lease that transfers (row 5).
   - The example: if the appraiser's rent came in at $2,230, HUD's figure for a 3-bedroom in Carolina Forest, the lender would count about $1,670 (row 18).
   - Nightly rental: half the market rent, only against its own cost, and only where nightly rentals are legal (row 7; link /invest/str-rules/).
   - A year as a landlord: with 12 months on your tax return, rent left over counts as income; with less, it can only cover that house's own cost (row 6).
   - **Homes strip** here, after the Carolina Forest example: `homes("cf-rentals", "Carolina Forest", fallback, head)` with the head "Carolina Forest 3-bedroom houses where long-term renting is allowed" (a new place, BUILD.md). Until the lead adds it, use `homes("town-carolina-forest", "Carolina Forest", fallback, "Carolina Forest homes for sale now")`. Fallback: the offer "See homes in Carolina Forest" to /contact/.

6. **Is it hard to get a loan on a second rental here?** (searches: "is it hard to get a second mortgage for a rental property", "can i get a second mortgage to buy a rental property").
   - First sentence: most get one: about 1 in 7 applications to buy a rental here that reached a decision was turned down in 2025 (row 37).
   - The reasons, as a three-line bold list, no chart: **The home itself** (its value or its type): 120 of 271. **Debt compared with income:** 65. **Not enough cash for the down payment and closing costs:** 36 (row 38). One sentence: a lender can give more than one reason.
   - What we do about each, literally: we look at the building and the house before you offer, and link /invest/non-warrantable-condos/ for condo buildings lenders refuse; the reserve page above covers the cash. Words from rows only; no claim that a denial was a condo.
   - **Mid offer:** "Send us the listing before you offer." One sentence: "We check the house and the building the way a lender will, and run the rent and the tax." Button "Send us the listing".

7. **What goes wrong when you buy a second rental in Myrtle Beach?** (the owner-approved old H1, now an H2; search "second rental property mistakes").
   - Three bold leads, each said once: **Expecting the same paperwork** (row 29, mild). **No plan for the worst case**, made a number: two houses like the example empty for three months cost about $2,950 in tax and dues, plus three payments on each loan and the insurance, and about $13,400 of rent at HUD's figure is not collected (row 21). We help plan for it before you buy (row 30). **Spending the reserve:** the story, once (row 28), ending with the live line.
   - One literal sentence from row 22: the lender's reserve is a minimum; three empty months take about $2,950 of it in tax and dues, before any loan payment.

8. **Is there a limit on how many rentals you can finance?** One short section, four or five sentences, as the owner asked.
   - The standard loan allows ten financed homes, counting your own home if it has a mortgage and the new one (row 9). A loan you are not personally on, such as one made to your LLC, does not count (row 10).
   - Almost nobody here reaches it: about 170 owners in the county, people and companies together, hold ten or more homes taxed at the 6 percent rate (row 46).
   - Past it, or in an LLC, investors use a DSCR loan (link /invest/strategies/dscr-loans/; one sentence; row 14 and /invest/llc/). A duplex or fourplex counts as one home (row 9; link /invest/strategies/small-multifamily/).
   - Optional, one sentence, if the section reads thin: about 1 in 20 home sales here in the last 12 months went to a buyer who bought two or more that year (row 24). Use it once, here or not at all.

9. **FAQ** (open text, four entries, each answer two or three sentences, none repeating a section in full):
   - "Can I use a HELOC on my house to buy a rental property?" (rows 3, 43; link section 3)
   - "Can I use equity from one rental to buy another in Myrtle Beach?" (rows 1, 2, 3, 31)
   - "Does the lender hold my reserves?" (row 13; kept from the live page)
   - "Can my second rental be in an LLC?" (row 14; link /invest/llc/)

10. **Bottom offer band:** h2 "Buying your second rental in Myrtle Beach?" p "Send us what you own and the house you want. We run the rent on the next house and check the numbers with both loans on them before you offer." Button "Plan the next one with us" to /contact/.

Sources line: Fannie Mae Selling Guide (B2-1.3-03, B2-2-03, B3-3.8-01 to -03, B3-4.1-01, B3-4.3-15); Freddie Mac maximum LTV table; HMDA 2025, Horry County (FFIEC); CFPB HELOC booklet; Zillow Home Value Index, Myrtle Beach metro (includes Brunswick County, NC); Horry County deed and parcel records; HUD Small Area Fair Market Rents FY2027; SC Code 12-43-220. Method notes (HMDA's reporting thresholds, "investment property" includes homes bought to resell) go here, not in the copy.

## The visuals, each readable at a glance

1. **Equity by year bought** (section 2): bars, labels on the bars, the message in the title. One color; the near-zero years in a lighter tint, each with its own label.
2. **Where owners took cash out in 2025** (section 3): three horizontal bars, the count at the end of each bar. The message in the title.
3. **The reserve tiers** (section 4): a three-row table in a glass card.
Nothing else. No map (the page is not about a place). The denial reasons stay a bold list. Charts are built from the data files with `glass.js` (`data/2026-11-b/invest-financing-multiple-rentals/chart-*.json`), never typed.

## Where homes strips go

- The edge feed under the opening (feeds.js; this page today gets `TOWNHOUSE_RENTAL`, "Townhouses where long-term rentals are allowed"). Proposed bolder, true title in BUILD.md.
- One `homes()` strip after the Carolina Forest example in section 5 (BUILD.md: a new place).
- The place's wow: this page sells a plan more than a place, so the wow is the money: "a typical house bought here in 2019 has gained about $130,000" (hero) and the HMDA line about lines of credit. The Carolina Forest strip carries the place itself. No invented local color.

## The offers

Slim bar under the answer; mid offers after sections 2, 4 and 6; the bottom band. Every button links to /contact/ (the site opens the short pop-up and sends the button's words). Four different headlines and labels, each tied to its section:
- "Send us your two houses" (top)
- "Send us your rental" (what it could free up)
- "Have us run the reserve" (reserves)
- "Send us the listing" (before you offer)
- "Plan the next one with us" (bottom)
No label starts with "Finance", "Refinance" or "Get a loan" (`LEND_HEADLINE`). The lender is "our preferred lender" (BIZ-3); if the writer names it, "our affiliated lender, BrickWood Mortgage, a separate company", with the footer disclosure.

## Referring pages

Six today (/guides/, /invest/, /invest/cash-to-close/, /invest/how-long-to-hold/, /invest/strategies/brrrr/, /invest/strategies/dscr-loans/). The lead may add links on words already there in /buyers/property-taxes/ (rental tax section, "buying a second rental"), /invest/llc/ and /invest/run-the-numbers/. This page touches only its own spec.

## Gates the writer must expect

- `LEND_HEADLINE` on title, H1, sub and buttons; `HEADLINE_PLACE` on the H1.
- `TRIGGER_DOWN` and `TRIGGER_DOWN_NEAR`: no percentage near "down" or "down payment"; the reserve table's 2, 4, 6 percent sit in their own sentences and table, never beside "down payment".
- The rate and payment checks: no dollar figure next to "payment" or "loan payment".
- `struck-check.js` with the 2026-11-a struck list (`batches/2026-11-a/invest-financing-multiple-rentals/invest-financing-multiple-rentals-struck.json`).
- Sentences of 28 words at most; no "So" openers; no "Here is"; no em dashes; no metaphors ("a floor, not a plan" is one).
