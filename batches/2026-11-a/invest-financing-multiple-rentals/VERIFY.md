# Verify: /invest/financing-multiple-rentals/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did none of the research. Ledger: `facts.md` (status column updated in place). Struck wording: `invest-financing-multiple-rentals-struck.json` (13 entries; each fires on its struck wording, and no approved wording fires).

**Result: 32 rows. 19 VERIFIED, 13 CORRECTED, 0 STRUCK as whole rows.** Two parts of corrected rows are struck: the insurance figure (row 19, and with it every total that carried it) and the second half of row 22.

## What I opened

- Fannie Mae Selling Guide, 10 sections, fetched fresh (all HTTP 200): B2-1.1-01 (10/05/2022), B2-1.3-03 (12/10/2025), B2-2-01 (09/03/2025), B2-2-03 (11/05/2025), B3-3.8-01, -02, -03, -05 (09/02/2026), B3-4.1-01 (08/07/2024), B3-4.3-15 (10/30/2009). Every quote in the ledger is on the page word for word.
- Freddie Mac maximum LTV table (HTTP 200). Fannie Mae's Eligibility Matrix: still 403.
- Zillow ZHVI metro CSV, re-downloaded (data through 2026-09-30). `build_equity.py` re-run on my copy: identical output.
- SC Code Title 12 Chapter 43 (HTTP 200): 12-43-220 (c)(1) and (e).
- Horry County parcel layer 24: the three count queries re-run live; same totals (226,741; 101,843; 120,776).
- `analyze_repeat.py`, `analyze_owners.py`, `build_examples.py` re-run: identical outputs. Then I recounted with the classification fixes below: `data/2026-11-a/invest-financing-multiple-rentals/verify/verify_recount.py` writes `verify/verify-recounts.json` (counts only, no names).
- The CRM map API, re-queried with and without the Horry County filter.
- `stories/stories.json` (four ids), the live page in the website working copy, the sibling ledger `invest-run-the-numbers/` and its `FIXER-VERIFY.md`, the registry.
- Commons file page of the photo stand-in (raw wikitext; the API was rate-limited).

## Corrections

| Row | Was | Correct | Why |
|---|---|---|---|
| 4 | Cash from refinancing the house you are buying cannot count as its reserves. | Cash taken out in a cash-out refinance cannot count toward the reserves for that same refinance. | The "subject property" of a cash-out refinance is the house refinanced. A purchase is not a refinance. |
| 8 | Renting out the home you live in and buying another ... | Renting out the home you live in when you buy a new home to live in ... | B3-3.8-05 applies only when the borrower buys a new primary residence. It is not the rule for buying a rental. |
| 12 | A share of what you owe on your other financed rentals | ... on your other financed homes, not counting your own home and the new one | The base is all other financed properties, which includes a financed second home. |
| 18 | HUD's rent is $2,230; the lender counts about $1,670 of it. | If the appraiser's rent schedule came in at $2,230 (HUD's figure for the ZIP), the lender would count about $1,670. | The lender uses Form 1007 or a transferring lease, not HUD's figure. HUD's figure is rent plus utilities. |
| 19 | Insurance about $3,300; $767 a month, $9,200 a year | Tax and dues about $5,900 a year, about $492 a month. Insurance is the reader's own quote. | RTN row 30 still reads VERIFIED-BY-FIXER, but the lead's check on 2026-11-02 struck it (RTN `FIXER-VERIFY.md`, `GROUP-1.md`). It is one agency's 2024 estimate, approximated, a secondary source. The live run-the-numbers page prints no premium. |
| 20 | About $10,100 ($4,600 + $5,464) plus six months of principal and interest | About $8,400 ($2,950 + $5,464), plus six months of the new loan's payment and insurance | Row 19. 6 x 491.67 = 2,950; 0.02 x 273,200 = 5,464; total 8,414. |
| 21 | About $4,600 in tax, insurance and dues; $13,380 of rent | About $2,950 in tax and dues; about $13,400 of rent at HUD's figure for the ZIP | Row 19. 2 x 3 x 491.67 = 2,950. The rent is HUD's rent plus utilities. |
| 22 | Covers the tax, insurance and dues with about $5,500 left, but not the six loan payments unless ... | Met exactly, the minimum reserve is six months of the new loan's payment and insurance plus about $8,400. Three empty months on both houses take about $2,950 of that in tax and dues, plus three payments on each loan. | 8,414 - 2,950 = 5,464 still holds. The second half is a payment comparison, and as written it is not right. Struck. |
| 23 | A legal residence rented out more than 72 days in a year loses the 4 percent rate. | ... more than 72 days in a calendar year loses the 4 percent rate (active-duty military on orders keep it). | RTN row 1's verifier added this carve-out. The rewrite dropped it (lesson B30). |
| 24 | 257 buyers: 126 people, 131 companies; 650 homes; 193 bought two | 255 buyers: 138 people (13 through a trust), 117 companies; 645 homes, 4.9 percent; 192 bought two | 13 "companies" are a person's trust (name ends in TR). One "person" is a charity foundation. One "company" is a resort company. The two are left out. "Common" overstates 2 percent of buyers. Say "about 1 in 20 home sales went to a buyer who bought two or more that year". |
| 25 | Half of those homes send the tax bill outside SC. | Of those homes the buyers still own, half send the tax bill outside South Carolina (50.4 percent of 484). Middle price $195,000; all sales $310,000; condos 30 percent. | The share is computed only for homes still owned of record by the buyer. |
| 26 | 6,070 own two or more; 4,091 own two; 3,563 are people; 23,290 homes | About 6,000 (5,977) own two or more; about 4,100 (4,060) own exactly two; about 4,200 (4,181) are people, 634 of them through a trust; about 1,800 companies; about 20,600 homes | 634 "companies" are a person's trust. 93 "owners" are resort, timeshare, campground and condo association firms holding 2,709 units: Marriott 363, South Beach Resort 247, Westgate 221 and others. The 226,741 are residential parcels with a building, and resort-held condo units are in them. |
| 27 | 67 of 3,563 houses; 432 of 1,897 condos "in Horry County" | 9 of 2,889 houses; 417 of 1,756 condos; 26 of 304 townhouses (feed 2026-11-04T14:00Z) | Wrong place. Without `has=county_horry`, the API counts the whole CCMLS area, which takes in North Carolina and other SC counties. |

The recounts in rows 24 and 26 use name rules (in `verify_recount.py`), so they are a floor, as the researcher's counts were. Round them on the page.

## Verified, with scope notes for the writer

- Rows 2 to 15 are Fannie Mae's rules. Row 1 is Freddie Mac's table. Name each agency in the sources line. Fannie's Eligibility Matrix could not be opened.
- Row 6: proof of the 12 months can be a tax return, a business return, or a lease dated 12 months before the application.
- Row 9: the count of ten includes the new house. Each borrower's separately financed homes add to it.
- Row 14: the claim's second sentence opens with "So", which the site audit refuses.
- Row 16: the index is a typical home's value, not a price paid. Say "a typical house worth about $233,900 in September 2019". The years 2023 and 2024 are also slightly down.
- Row 28: the owner says "a buyer", not "a client".

## Photo stand-in (PLAN.md)

"Conway Residential Historic District Jun 10" by Pubdog. The Commons file page wikitext reads `{{PD-self}}`, Source `{{own}}`, dated 2010-06-20. Public domain: **licence confirmed**. I looked at `images/buyers/no-hoa/conway-older-house-and-oak-1200w.webp` at full size. It shows a white wood house with black shutters, behind a large oak with spreading limbs, a brick planter and a driveway. The house number is blurred. Two notes:

- The path in PLAN.md (`conway-older-house-and-oak.webp`) does not exist on disk. Only the `-600w` and `-1200w` variants do.
- "Live oak" is not in the Commons description. The caption can say "a large oak" to say only what the picture shows. The house is a private home. The caption must not imply it is a rental.

No other photo candidate is proposed.

## Not to publish

- The $3,300 insurance figure, and every total built on it ($767, $9,200, $4,600, $10,100).
- Row 22's payment comparison.
- The uncorrected counts in rows 24, 26 and 27.
