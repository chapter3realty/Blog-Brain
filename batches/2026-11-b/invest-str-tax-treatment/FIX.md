# Fix: /invest/str-tax-treatment/

The page has no spec. Make the change in its source the way the round 1 light fixes did. Do not type a date: if the "Sources ... Read September 5, 2026" line is generated, leave it to `node build.js dates`; add the read date of rows 1 to 3 through the same mechanism.

## FAQ, "Can I deduct Airbnb losses from my W-2 income?" (rows 1, 2, 3)

Replace the answer with:

> For a long-term rental, up to $25,000 of loss can reduce your salary income if you take part in the management decisions. The full amount applies while your income is $100,000 or less. Above that it shrinks by half of every dollar over $100,000, and it is gone at $150,000. It does not apply to a short-term rental with average stays of seven days or less. There, the loss can reduce your salary only if you pass a material participation test.

(Round 1 already wrote the first, second, fourth and fifth sentences. Only the third sentence is new. "Income" here is modified adjusted gross income; the body links the passive activity rules for the detail, so the FAQ keeps the plain word.)

## Body, "What is the difference between active and passive income?", third paragraph (row 1)

Now: "That allowance starts to shrink once your income passes $100,000."
New: "That allowance starts to shrink once your income passes $100,000, and it is gone at $150,000."

## Body, "What is a rental pool, and why does it matter here?" (row 4, NOT FOUND)

Now: "Many Myrtle Beach oceanfront buildings require the pool. You cannot opt out. Others let you manage the unit yourself or hire your own manager."
New: "A building's own documents can require the pool. In that building you cannot opt out. Other buildings let you manage the unit yourself or hire your own manager."

Support: the Fannie Mae Selling Guide wording "The HOA or project's legal documents require owners to make their unit available for rental pooling" (research/invest-next/rental-program-vs-airbnb-facts.md). It says such documents exist; it names no building, so the page names none and counts none.

No count and no link to the directory as a count: the directory does not record which buildings require the pool. The link to /invest/condo-buildings/ may stay as "how each building runs its rentals", not as a list of mandatory pools.

## Nothing else changes

The "Any rest is released at a taxable sale" line is already in the body (round 1). Keep the title, the tests table and every offer.
