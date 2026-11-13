# Plan: /buyers/property-records/tax-bill/

Spec: `specs/property-records-tax-bill.js` (copy the structure of `home-value.js` and `garden-city.js`; glass theme via `tools/glass.js`: `page`, `bars`, `offer`, `homes`, `glassIcons`). Author "devin". Facts: `facts.md` rows (F#). Questions and sibling lines: `must-answer.md`. Data: `wt-139/data/2026-11-d/property-records-tax-bill/`.

## The reader and their decision

A Horry County owner (or a buyer looking at a house) who typed "horry county tax payments", "tax records" or "tax assessor". Most want to pay this year's bill now, at the lowest cost, before the January date. Some have only an address. Some think the value is wrong. A few cannot pay it all at once, or already missed the date.

Their decision: pay it themselves today on the county's site (and how), sign up for installments, file a value objection before the deadline, or send us the address and let us find the bill.

What they fear: paying a card fee they did not need to, paying twice when the lender already paid, a penalty for a bill that went to the seller, and losing the house.

## The answer in two sentences

Look up and pay a Horry County tax bill on the Treasurer's Tax Payments and Receipts site: search by owner name (last name first), PIN, map number or notice number, and pay by e-check for free or by card for 2.35%. The bill is due January 15; a 3% penalty starts the next day and reaches 15% on March 17.

## Search title, H1, sub

- **Title (60 characters):** `Horry County Tax Payments: Search & Pay Online (E-Check Free)`
  - Leads with the 6,600 search; carries "online" (720), "search" (tax bill search 480, property tax search 1,000). The hook is a true fact from F8 and answers "tax payments online free".
  - Alternative if the lead wants "records" and "assessor" in the title: `Horry County Tax Payments, Records & Assessor: Pay a Bill` (57).
- **Meta description (about 155):** Pay Horry County taxes online: search a tax bill or tax records by name, PIN or notice number, the card fee, the January 15 date, installments and how to appeal the Assessor's value.
- **H1:** Horry County tax payments: find your bill and pay it online
- **Hero sub (write last):** The county's tax search needs no sign-in, and paying by e-check is free. Three steps take you from a name or PIN to a paid receipt.
- One plain line in the first section: "Chapter3 is a real estate brokerage, not the county. The tax site, the bill and the payment belong to the Horry County Treasurer."

## First screen: it does the job

1. H1, byline, hero sub.
2. A large button straight to the county: **"Open the county's tax search and payment page"** to https://horrycountytreasurer.qpaybill.com/Taxes/TaxesDefaultType4.aspx (an outside link, new tab; not a request button). Under it, small: "Horry County Treasurer's site. Use Chrome or Edge; the site does not work in Safari" (F8).
3. Three numbered steps, each one short line and a glass icon:
   1. **Pick the bill type and year.** Real Estate for a house or lot, Vehicle for a car or truck (F3).
   2. **Search by owner name, PIN, map number or notice number.** Type the name last name first. There is no address search (F4).
   3. **Add the bill to the cart and pay.** E-check is free; a card costs 2.35%. The receipt comes by mail and can be printed from the same site (F8, F11).
4. Slim offer bar under the steps: **"Have only an address? Send it to us."** "We find the PIN and last year's bill and send you both." Button: "Have us find the bill" to #lead-form.

Measure on a phone: H1 to the end of step 3 in about one and a half screens. The site's edge feed sits under the opening.

## Sections, in order

Exact-question headings where people ask the question; statements where a statement reads better (CRAFT; owner 2026-11-12).

1. **(First screen above.)** One line up to the hub: "This page is the tax bill. Deeds, the parcel map and the other county records are on our property records guide" (/buyers/property-records/). One line across: "The PIN is on the parcel card of the county map" (/buyers/property-records/gis-map/).

2. **How much does it cost to pay Horry County taxes online?** First sentence: "Paying online by e-check costs nothing; a credit or debit card costs 2.35%." Fee table V1 (from `table-payment-fees.csv`): online, phone, in person, mail or drop box, by e-check, credit and debit. Then two lines a reader would miss: the county will not take this year's bill online or by phone while an older year is unpaid, and the oldest year is paid first (F9); the county keeps none of the fee (F8). No dollar example of a fee on a bill (no payment amounts).

3. **When are Horry County property taxes due?** First sentence: "January 15, for the bill mailed in October; a mailed payment counts by its postmark." Then the penalty timeline V2 (from `timeline-unpaid-tax.csv`, first five rows): Jan 15, Jan 16 3%, Feb 2 10% in all, Mar 17 15% in all and delinquent (F12, F13). Not getting the bill does not stop the penalty (F12). Two answers for the worried reader:
   - **Did my lender already pay it?** A lender that holds the tax in escrow may pay before January. The search shows each bill's status and payment date; check it before paying (F6, F17).
   - **Bought this year, and the bill went to the seller?** The law makes the Treasurer waive the penalty when the new owner got no notice. The tax is still owed (F15). Proration at closing: one link to /buyers/closing-costs/.
   - Mid offer: **"Bought or selling this year? We check who owes the bill."** "Send the address. We pull the bill and its status before closing." to #lead-form.
   - Lead to settle with /buyers/property-taxes/ (must-answer): this section owns due dates; the sibling keeps one line and a link.

4. **Can you pay Horry County property taxes in installments?** First sentence: "Yes: five payments ahead, each 16.67% of last year's tax, then a final bill for the rest." Table V3 (from `table-installments.csv`). Then the rules in a short bold list: sign up between December 1 and January 15, one form per parcel (F18, F19); not for vehicles, boats or a tax paid through a lender's escrow (F18); coupons by mail, in person or a drop box, not online (F18); the money is held until the final payment, and a seller asks for a refund, because a buyer cannot use the seller's payments (F20). Link the county's installment page. Do not call the plan new (F21).

5. **How do you find a Horry County tax bill by name, PIN or address?** (the tax records searches). Each way in one line: owner name last name first; PIN (11 digits) or map number (10 digits) from the parcel card; notice number from the bill (F4, F40). No address search: the county sends address searches to its Land Records map, which needs an account (F41; link the gis-map page for how). What a bill shows, in plain words (V4, a drawn bill with labels): the appraised value, the assessed value, the tax district, each tax and fee, and the credits, including the 4% residence line (F7, F37 once verified). If F37 passes: "On a home you live in, an empty residence line means the 4 percent rate is not on the bill" with links to /buyers/property-taxes/ (how to apply) and /buyers/common-mistakes/ (how often it happens). Receipts for about ten years are on the same site (F3).
   - Mid offer: **"Looking at a house? See its tax bill before you offer."** "We pull last year's bill and tell you what changes when you buy." to #lead-form. (The estimate itself links /buyers/property-taxes/; no numbers here.)

6. **What does the Horry County Tax Assessor do?** First sentence: "The Assessor sets the value on the bill and decides the 4 percent rate; the Treasurer takes the payment." Three-office card row V5: Assessor (value, ownership, 4% status, address changes), Auditor (figures the bill, vehicles, homestead 65+), Treasurer (collects, receipts, installments) (F28). Then the offices table V6: four Treasurer offices with addresses, hours 8 to 5 weekdays, and the three phone numbers (F29). One line: the Myrtle Beach office is in the new Central Coast Complex on Hinson Drive in Carolina Forest, with the Treasurer, Auditor and Assessor together (F30; say "moved from 21st Avenue" only if the verifier confirms the close).

7. **How do you appeal your Horry County property value?** First sentence: "Write to the Assessor within 90 days of a value notice, or by January 15 of the next year if no notice came." Then a numbered how-to V7, plain (F31, F32): object in writing (the county's online Property Appeal form, F35); meet the Assessor; written protest within 30 days; the Board of Assessment Appeals within 30 days; the Administrative Law Court within 30 days. Two lines readers need: an appeal still open on December 31 is billed on 80% of the protested value and corrected later (F33); the county's values were last reset countywide in its 2024 reassessment, and between resets the taxable value can rise at most 15% in five years unless the home sells or is improved (F36; the sale reset is the rate page's, link it).
   - Offer: **"Think the value is too high? We pull the recent sales."** "Send the address. We send the nearby sales you can attach to your objection." to #lead-form. The copy must not say we file or argue the appeal (F34: agents may not represent).

8. **What happens if Horry County property tax is not paid?** First sentence: "On March 17 the tax is delinquent, and after a series of notices the property goes to the county's tax sale in early December." Timeline continues V2 (rows six to eleven of `timeline-unpaid-tax.csv`): notices from April 1, certified notice, a notice posted on the property, three Thursdays of ads, the sale, 12 months to redeem (F22, F23). **The page's unique finding:** chart V8 from `chart-tax-sale-opening-bids.csv`: "On the county's current tax sale list, half the opening bids are under $2,700." 1,772 pieces of real estate and 459 mobile homes (F24); the bid includes this year's tax and the penalties (F23). If the verifier passes F25: "about 1 parcel in 170". No names, buildings or addresses. One line and a link for buyers at the sale: /invest/foreclosures/.

9. **How do you pay Horry County vehicle tax?** Short. Renewal bills come about a month before the plate expires and can be paid on the same site (F26). A first registration needs the paper receipt from a Treasurer office, because the DMV does not take the online receipt (F10). A dealer purchase bill is due on receipt; 120 days unpaid suspends the registration (F26). New residents: one link to /buyers/relocating/moving-checklist/. A rental or second home also gets a furniture return each year: one line, link /invest/str-setup/ (F38).

10. **Georgetown County tax payments for Pawleys Island and Litchfield** (statement heading, the searched name). Pay at georgetowncountysctax.com (F42); the Treasurer at 129 Screven Street, Georgetown (F43). Installments too, but you apply every year by January 15 (F44). Delinquent on March 17, tax sale in December (F45). Values were reset in 2025, with 90 days from the notice to appeal, free, on the form on the notice (F46). Property records on qPublic (F47). A rental gets a second notice for its furniture (F48). No Georgetown card fee (none published, F42).

11. **FAQ** (open text, short, not repeating sections): "Can I pay Horry County taxes by phone?" (yes, with the fees; number per F50 once verified); "How do I get a copy of my tax receipt?" (F11, F3); "I never got a bill. Am I still late?" (F12); "Can I get a penalty waived?" (F15, F16); "Is there unclaimed tax money in my name?" (F39); "Where is the Horry County tax office in Myrtle Beach?" (F30).

12. **Closing offer band** (full width): **"Buying a house in Horry County? We read its tax bill with you."** "Send the address. We pull the bill, check the 4 percent line and tell you what the tax will be after you buy." Button to /contact/. One link to /buyers/cost-to-own/ for the yearly total.

Sources box: every county page and SC Code section in the facts, linked to readable pages; the tax sale list as "Horry County Treasurer, tax sale list, counted by Chapter3". The list's date comes from the data file.

## Visuals (each one message, readable at a glance)

| # | What | Title (plain, one point) | Data |
|---|---|---|---|
| V1 | Fee table, 4 rows by 3 columns, glass card; "free" in bold | "E-check online is free" | `table-payment-fees.csv` (F8, F11) |
| V2 | Horizontal timeline, two parts (sections 3 and 8), each date a chip | "Pay by January 15 and there is no penalty" / "From a missed bill to the tax sale" | `timeline-unpaid-tax.csv` (F12, F13, F22, F23) |
| V3 | Six-row schedule table | "Five payments ahead, then the rest" | `table-installments.csv` (F18) |
| V4 | A drawn sample bill (no real values; labels only, like the gis page's card drawing) with five callouts: appraised value, assessed value, district, credits, total | "What each line on the bill means" | F7, F37 (`tools/illustrations.js` or inline SVG) |
| V5 | Three glass cards with icons | "Three county offices, three jobs" | F28 |
| V6 | Office table: office, address, hours | "Four places to pay in person" | F29, F30 |
| V7 | Numbered steps with the day counts in bold | "Four steps, 30 days each" | F31, F32 |
| V8 | Bar chart, `glass.bars`, real estate only, seven ranges, the median marked | "Half the homes and lots on the tax sale list owe under $2,700" | `chart-tax-sale-opening-bids.csv`, `delinquent-summary.json` (F24) |

No photos of a person, a building or a listing are needed. A photo of the Central Coast Complex would be our own only if the photo partner shoots it (CLAUDE.md); optional, listed for the lead.

## Homes strips

This is a utility page; the reader came to pay a bill. The site's edge feed under the opening is the one strip it needs. One optional named strip, near the closing band, for the buyer reading section 5: `homes("town-carolina-forest", "Carolina Forest", "", "Homes for sale in Carolina Forest now")` only if the lead wants a second strip; the place exists in `idx-places.json`. Recommendation: no extra strip. A second one would clutter a page whose job is a task.

## Offers (each with different words; buttons to #lead-form or /contact/)

1. Slim bar, first screen: "Have only an address? Send it to us." / "Have us find the bill".
2. After section 3: "Bought or selling this year? We check who owes the bill."
3. After section 5: "Looking at a house? See its tax bill before you offer."
4. After section 7: "Think the value is too high? We pull the recent sales." (no representation)
5. Closing band: "Buying a house in Horry County? We read its tax bill with you."

## Wow details (true, sourced, what makes a reader glad they came)

- E-check online costs nothing; most readers expect a card fee (F8).
- The tax search needs no account, while the county map does (F5).
- A buyer whose bill went to the seller gets the penalty waived by law (F15).
- The installment plan splits the bill into six parts (F18).
- The Myrtle Beach tax office is now in Carolina Forest (F30).
- Our count: half the opening bids on this year's tax sale list are under $2,700 (F24).

## Compliance checks for the writer

- No tax amount, rate or payment for any person or address; fees are the county's percentages and flat fees (F8). No example bill with dollars (V4 uses labels only).
- Chapter3 is not the county, in plain words, in section 1.
- Offers never say we appeal for the owner (F34) or that we pay the tax.
- No name, building, address, PIN or notice number from the tax sale list or the portal.
- No dates typed in copy except recurring deadlines (January 15, March 17 and the like). "2024 reassessment" and "2025" (Georgetown) are the counties' names for events; the lead decides whether to keep them or write "the last countywide reassessment".
- Never "check the bill yourself" as an instruction; say what the search shows and what we check (CRAFT "We do the work").

## For the lead (BUILD.md)

- New page: /buyers/property-records/tax-bill/. Sitemap line and llms.txt line: "Horry County tax payments: find a tax bill by name or PIN, pay online (e-check free), due dates, installments, Assessor appeals; Georgetown County too."
- No new homes place (uses the edge feed).
- Pages that should link here (on words already there where possible): /buyers/property-records/ (hub, first screen), /buyers/property-records/gis-map/ and /deeds/ (planned), /buyers/property-taxes/ ("due dates and penalties" calendar; one line and link, "pay or look up a bill"), /buyers/cost-to-own/ (property tax row), /buyers/common-mistakes/ (the 6% mistake: "see it on the bill"), /buyers/closing-costs/ (tax proration), /invest/foreclosures/ ("What about the county tax sale?"), /buyers/relocating/moving-checklist/ (vehicle tax step), /sell/inherited-house/ (back taxes), /hoa/tax-deductible/ (tax receipt). That is eleven.
- Site fixes found: /buyers/relocating/moving-checklist/ gives the county Auditor and Treasurer in Myrtle Beach at 1201 21st Avenue North; the county now lists 332 Hinson Drive (F30). /invest/landlord-rules/ (spec line 93) gives the Myrtle Beach magistrate at 1201 21st Avenue North; the magistrate court is listed at the Central Coast Complex too. Register "horry-tax-office-myrtle-beach" in facts/registry.json once verified.
- /buyers/property-taxes/: cut its due-date calendar to one line and link here (cannibalization, must-answer).
- Ask the photo partner (optional): the Central Coast Complex entrance on Hinson Drive.
