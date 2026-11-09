# Fix: /invest/strategies/brrrr/

Round 1 already added "Reviewed by Tim Nash, Broker-in-Charge" and softened the lender lines. What is left is the two discount figures (facts rows 1 to 3, NOT FOUND). They come out of the title, the H1, the lede and the body. The page has no spec; edit its source the way round 1 did.

## Head (row 1)

- `<title>`, og:title, twitter:title and the schema "headline": "BRRRR in Myrtle Beach: Bank-Owned Homes 17% Under Market" becomes "The BRRRR Method in Myrtle Beach: Buy, Rehab, Rent, Refinance".
- Meta description and og:description stay. "local permit data" is not on the page; if the writer touches the description, end it at "using rent and DSCR numbers." (optional).

## H1 (row 1)

Now: "The BRRRR method in Myrtle Beach: bank-owned houses about 17 percent under market."
New: "The BRRRR method in Myrtle Beach: one sum of cash, house after house." Keep the italic second line at the approved size.

## Lede (row 1)

Now: "BRRRR uses one pool of capital to buy rental after rental. The Horry County math: bank-owned houses about 17 percent under market, and the refinance that returns your cash."
New: "BRRRR uses one sum of cash to buy rental after rental. It works here when you buy a bank-owned or worn house below its fixed-up value, in a place where the rent is strong, and the refinance returns your cash."

(Every part of the new sentence is already in the body: "Bank-owned listings are the usual starting point", "The house also has to sit where rent is strong", "The refinance that returns your cash".)

## "Where the discounted houses come from" (rows 1, 2)

- Delete: "By our own tracking of sales, bank-owned houses have sold about 17.34 percent under market value on average."
- Paragraph two, now: "The same tracking puts distressed condo units at about 22.32 percent under market, the deeper discount because condo supply is larger and many investors will not buy into a building at all."
  New: "Distressed condo units sell at a deeper discount, because condo supply is larger and many investors will not buy into a building at all."
  (Owner's observation, stories.json `distressed-condo-discount`, without the number. The "Condos" section already says the same; the writer may cut this sentence instead if it repeats.)

## Grandfather line (row 4)

"Tim's grandfather owned rental properties in Myrtle Beach" is confirmed. No change.

## After the edit

- Grep the built page and chapter3realty/llms-full.txt for "17.34", "22.32", "17 percent under" and "17%": none may remain on this page's entry.
- The d2 indent fix in the triage row is a layout change, not a fact; it is outside this pass.
