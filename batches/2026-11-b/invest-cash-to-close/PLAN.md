# Plan: /invest/cash-to-close/ (batch 2026-11-b)

Researcher, 2026-11-10. Spec `specs/cash-to-close.js`; data `data/2026-11-b/invest-cash-to-close/` (every number from `example.json`, `strip-counts.json`, `band-fees.json`); rows in `facts.md`.

## What the live page does well (keep)

- The Closing Disclosure definition: cash to close is the wire; total closing costs exclude the down payment (row 8).
- Every line an investor meets, including the ones people forget: reserves, the tax escrow at 6 percent, the HOA statement, the flood policy's 30-day wait for a cash buyer, the penalty waiver when the first bill goes to the prior owner.
- SC specifics: an attorney runs the closing; the deed recording fee is the seller's except in three cases; $15 and $25 filing fees; the condo statement that caps the buyer's liability (27-31-220); earnest money within 48 hours.
- Plain question headings and a clean FAQ. Five sources, all primary.

## The one problem

A reader who asks "how much cash do I need" gets a list of who sets each line and no amount. The page ends with "We build it for one address at a time." Fix: a worked example with dollars, from public data, for the two homes most buyers here look at.

## The reader and their decision

An investor, often from out of state, often new to rentals, looking at a Grand Strand condo or house. Decision: can I buy now, and how much cash must I have on the day I offer? Worried about: a surprise at the closing table, and the lender's reserves rule. Next question: what can I buy for that, and who will run the numbers on a listing?

## The answer in two sentences (short answer)

With a loan, the middle condo ($232,000) takes about $7,000 beyond your down payment, and the middle house ($362,000) about $12,800: about 3 to 3.5 percent of the price. The lender then wants six months of the full monthly cost left in your account; the tax, insurance and dues part alone is about $5,600 on the condo and $4,300 on the house.

(Rows 1, 24 to 26. Read every figure from `example.json`. The down payment is your lender's figure, never ours.)

## Title, H1, description

- Title: "How Much Cash to Close on a Myrtle Beach Rental? | Chapter3"
- H1: "How much cash do you need to close on a Myrtle Beach rental?" h1em: "Beyond the down payment."
- Description: "About $7,000 on the middle condo and $12,800 on the middle house, beyond the down payment, from 2025 Horry County loan records. Plus six months of reserves."
- Keywords: cash to close investment property, how much cash to buy a rental property Myrtle Beach, are closing costs higher on investment property, investment property reserves. Drop "closing costs investment property South Carolina" (closer to /buyers/closing-costs/).

## Sections, in order

1. **How much cash do you need to close on a rental here?** The worked example. Visual 1. Two paragraphs: what is in each line, in plain words (loan costs are the lender's fees, the appraisal, the lender's title policy and the attorney's settlement work; the cushion is money the lender holds for the next tax and insurance bills). Then "Plus your down payment, which your lender quotes. Our affiliated lender, BrickWood Mortgage, a separate company, can quote it." Link "How much down a DSCR loan takes" to /invest/strategies/dscr-loans/. Then the strip of oceanfront condos (below) with its wow line, and the rental-houses strip.
2. **Are closing costs higher on an investment property?** Yes, about $1,500 more at the middle (row 4). Visual 2. One sentence: the lender's own fees were about 1.6 percent of the loan on a rental against 0.8 on a home you live in (row 5). One sentence: about 3 in 10 purchase loans here in 2025 were for a home the buyer would not live in (row 2). Method (row 3) goes in the sources box. Link /buyers/closing-costs/ for every SC closing cost.
3. **What is included in cash to close?** The live page's definition (row 8), shortened, and the Closing Disclosure letters (row 9) so the reader can match their form to Visual 1. What is not in it: reserves (shown, not spent), the inspection and wood report (paid before), what you pay after closing.
4. **How many months of reserves does a lender want on a rental?** Fannie Mae: six months for a rental, two for a second home, none for a one-unit home you live in (row 19). Two published DSCR programs: three to six months, twelve for a first-time investor at one (row 21). Other financed properties: one sentence (row 20) and a link to /invest/financing-multiple-rentals/, which owns the second-rental search. The example's figure (row 26), in months and in the non-loan dollars only.
5. **Why is the tax escrow so large on a rental?** The 6 percent ratio (row 13), the October bill due January 15 (row 16), the seller's credit by contract, and a cushion of at most two months (row 11). The yearly tax in the example: about $3,540 and $4,370. Penalty waiver when the bill goes to the prior owner (live page). Link /buyers/property-taxes/.
6. **What does a condo add at closing?** The association statement and the buyer's liability cap (row 29); no state cap on statement, transfer or capital fees, so ask for the figure before you offer; link /hoa/estoppel-and-transfer-fees/. Many condo fees include the building's insurance policy (HOA row 4), so the unit policy is smaller. The middle condo fee near this price, about $550 a month, counts in reserves (row 17). Flood: a policy with a loan starts at closing; a cash buyer waits 30 days (row 28).
7. **What do you pay after closing?** A short list: the licenses (row 31, one item, link /invest/accommodations-tax/), utility deposits, the first repairs and furnishing. Keep it short.

FAQ (no repeats of the sections): Does cash to close include the down payment? (yes; row 8). Who pays the deed recording fee in South Carolina? (live). Do I need an owner's title policy? (live). Can cash to close change before closing? (story `low-appraisal-reconsideration`, no amounts, no quotation marks). Where does the earnest money go? (row 30). Does a cash buyer need reserves? (no lender rule applies; the loan-cost line drops; the attorney, title, insurance and tax lines stay).

## Visuals (each one message, readable at a glance)

1. **Table: "Cash to close beyond the down payment, with a loan".** Columns: the line (with its Closing Disclosure letter), the middle condo, the middle house. Rows: loan costs; mortgage recording $25; first year of insurance; insurance cushion; tax cushion; **Total** (about $7,000; about $12,800); a last row set apart: "Reserves, shown not spent: 6 months of the loan payment, plus about $5,600 / $4,300". A note under it lists what is not in the total (row 24 notes). Built from `example.json` (`lines_rounded`, `total_rounded`). On a phone the two money columns stay side by side.
2. **Bar chart (glass.js `bars`): "A rental loan cost about $1,500 more to close".** Three bars: a home you live in $4,900, a second home $5,500, a rental $6,400. Caption: "Middle loan costs, conventional home purchase loans, Horry County, 2025 (HMDA)". From `example.json` `chart_loan_costs_by_use`.

No calculator: /buyers/closing-costs/ owns "closing cost calculator", and /invest/long-term-rental/ is the analyzer. The two-column table is the tool.

## Homes strips (glass.js `homes()`)

The edge feed already sits under the opening. Two strips in section 1, after the table:

- **Condo strip.** Head: "Oceanfront condos you can rent by the night, near $232,000". Wow line above it (row 18): "At the middle condo price, about 100 condos for sale have a unit on the ocean and allow nightly rentals." Read the count at build; print "about 100" only while it rounds there.
- **House strip.** Head: "Houses near $362,000 you can rent out". Line: most houses near this price allow renting, and few allow nightly rentals (382 and 21 of 498), so the house example is a long-term rental.

## Offers

- Every request button links to `#lead-form` (the site opens the short pop-up). The live page sends them to /invest/run-the-numbers/; change that.
- Mid-page CTA after section 1: "Send us a listing. We build its cash to close, line by line, before you offer." Button: "Get the cash-to-close sheet".
- After section 4: one plain line naming "our affiliated lender, BrickWood Mortgage, a separate company" for the down payment and reserves figure. No rate, no payment.
- Bottom CTA: same offer. Link /invest/run-the-numbers/ in the text for readers who want to judge the deal itself.

## Rules the writer must keep

- No down-payment percentage anywhere (rows 22 and 23 stay off the page). No interest rate, no loan payment, no per-day interest.
- "About" and "at the middle" on every example figure. Say once that the example uses one agency's insurance estimates and 2025 loan records, and that a listing's real figures differ.
- 28 words at most per sentence; no em dashes; no sentence opens with "So"; no "Here is".

## For the lead (BUILD.md)

- New idx places (not in `idx-places.json`; the lead adds them): `ctc-oceanfront-str-condos` {near "33.69000,-78.89200", miles 25, type "condo", has "oceanfront_unit,str_allowed", min "200000", max "265000"}; `ctc-rental-houses` {near "33.69000,-78.89200", miles 25, type "house", has "rentals_allowed", min "330000", max "395000"}. No existing place uses `min`; if the strip does not support it, drop `min` and change the heads to "under $265,000" and "under $395,000".
- Inbound links (the page has 6): add one from /buyers/closing-costs/ (the cannibalization fix asks for it; protected page, the lead decides), /invest/strategies/dscr-loans/, /hoa/estoppel-and-transfer-fees/, /buyers/property-taxes/ and the /invest/ hub.
- Owner question (optional, facts.md): attorney, owner's title and HOA charges from our own settlement statements; and whether this page joins `DOWN_PAYMENT_OK_PAGES`. Default: no.
