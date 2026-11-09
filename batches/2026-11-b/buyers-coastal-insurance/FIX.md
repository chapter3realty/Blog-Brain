# FIX: /buyers/coastal-insurance/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 3 and step 4: the $4,500 to $5,300 range has no verified row (row 3, comparison half struck). Use the fallback: cut the range.
- Step 3: "The comparison sites quote one set of coverage at today's prices" has no row. Cut it.
- Step 3: "quotes on the same house vary by thousands of dollars" has no row in this ledger.
- Step 3: "leaves out wind pool policies" should read "leaves out wind pool and surplus-lines policies" (row 2).


File: `chapter3realty/buyers/coastal-insurance/index.html`. No spec in `specs/` builds this page. Rows are in `facts.md` here. Use verified rows only.

## 1. Title (no fact)

`<title>` and og:title: "Myrtle Beach Homeowners Insurance Cost: Home, Wind and Flood". Keep the H1 as it is unless the scorer flags it.

## 2. One answer sentence in the hero, above the MLS row (rows 1, 2)

Old hero line:
> Typical single-family policies here cost about $1,500 to $3,500 a year in the standard market.

New hero line (one sentence, set in the dek style so it shows on the first screen on a phone):
> In 2022 the average homeowners policy on a house in Horry County cost about $1,600 to $2,900 a year, depending on the ZIP code, before any separate wind or flood policy. (rows 1, 2)

Move this line above the MLS widget so it is on the first screen at 390 and 1440 wide.

## 3. The direct answer: the national figure, and why the two differ (rows 1, 2, 3, 5)

Old paragraph:
> National comparison sites price one standardized $300,000 house. They put Myrtle Beach between about $4,500 and $5,300 a year, among the highest in South Carolina and well above the inland cities. Both numbers come from actual quotes. On the coast, quotes on the same house vary by thousands of dollars, so the person who shops wins. Premium benchmarks come from the South Carolina Department of Insurance; check any address's flood zone free at the FEMA Map Service Center.

New:
> National comparison sites price one standard $300,000 house. They put Myrtle Beach at about $4,500 to $5,300 a year. The federal figure above is different: it is the average premium actually paid on real policies in 2022, with each owner's own coverage and deductible, and it leaves out wind pool policies. The comparison sites quote one set of coverage at today's prices. On the coast, quotes on the same house vary by thousands of dollars, so shopping pays. The federal figures are from the U.S. Treasury's homeowners insurance data, 2018 to 2022. Check any address's flood zone free at the FEMA Map Service Center.

Notes:
- "Both numbers come from actual quotes" goes. Row 1 is not quotes; it is written premium per policy.
- "among the highest in South Carolina and well above the inland cities" goes: no row supports it.
- "Premium benchmarks come from the South Carolina Department of Insurance" goes (row 5). Link the Treasury workbook instead: https://home.treasury.gov/news/press-releases/jy2791 (release) and the .xlsx (row 1).
- The $4,500 to $5,300 figure stays as the page's existing statement about comparison sites. Row 3 is not verified for it. If the verifier cannot open a comparison site's method note, cut the dollar range and keep only "National comparison sites price one standard $300,000 house, and their figures run higher."

## 4. FAQ "How much is homeowners insurance in Myrtle Beach?" (rows 1, 2, 4)

Old first sentence:
> Local single-family policies commonly cost about $1,500 to $3,500 a year in the standard market, and comparison sites quoting a standardized $300,000 house put Myrtle Beach between about $4,500 and $5,300, among the highest in South Carolina.

New:
> In 2022 the average homeowners policy on a house in Horry County cost about $1,600 to $2,900 a year, depending on the ZIP code, before any separate wind or flood policy. Comparison sites that price one standard $300,000 house today put Myrtle Beach at about $4,500 to $5,300. (rows 1, 2; same condition on the second sentence as step 3)

Keep the rest of the answer.

## 5. Sources list

Add: "U.S. Treasury, Federal Insurance Office, homeowners insurance data by ZIP code, 2018 to 2022 (premiums per policy)". Remove the claim that SCDOI is the source of the premium figures; keep the SCDOI link for the wind pool and the SC Safe Home facts.

## 6. Split the rentals and condo walls (no new facts)

Break the "Does renting my house out raise my insurance?" answer and the rentals and condo sections into paragraphs of three sentences or fewer. Keep every figure as it is.

## Do not

- Do not state the $1,500 to $3,500 range anywhere unless the owner confirms it is from Chapter3's own quotes (facts.md, question).
- Do not name an insurer.
