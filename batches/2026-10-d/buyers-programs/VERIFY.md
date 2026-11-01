# Verification: /buyers/programs/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did none of the research. Every source was opened again or downloaded again into a scratch folder. The status column of `facts.md` matches this file.

**Counts:** 35 rows. 22 VERIFIED, 12 CORRECTED, 1 STRUCK.

A CORRECTED row may go on the page only in the wording given under "Use" (in `facts.md` column 10). Its old wording is in the struck list, `buyers-programs-struck.json` in this folder. It has 13 entries. Each fires on its struck wording, and none fires on the approved wording. `node tools/struck-check.test.js` prints "all controls pass". The batch-mode reader looks in `batches/2026-10-d/facts/`; the lead should copy the list there. I may edit only this folder.

## What I re-ran

- **SC Housing.** I downloaded the training guide PDF again (7,005,181 bytes, made 2026-04-06), the limits sheet, the handout, and every program and news page. I converted the PDFs with `pdftotext -layout`. The guide text matches `raw/COMBINED_TRAINING_03.2026.txt`.
- **Horry County.** I downloaded the HOME page, both HOME limit PDFs, and the CDBG and Housing Rehabilitation pages. All numbers match.
- **Census.** I pulled ACS B19013 and B25118 again, 1-year and 5-year, and redid every sum and share. All match. I checked the bracket labels against the Census variable list.
- **CRM listings.** I spot-checked the live API at 03:30Z: Conway houses 675 (674 at the pull), 545 at or under $450,000; Myrtle Beach 462 under; North Myrtle Beach 258; condos under the limit 2,538. These are consistent.
- **USDA map work.** I ran `pull-usda.sh` again; the files are identical. I ran `pull-listing-points.py` again (4,771 homes, 138 calls) and `build-findings.py` on the fresh points. The house tallies are identical: 1,024 eligible, 647 not, 8 outside Horry. The town splits are identical too. I tested 13 named places against the shape.
- **HUD condos.** I ran `pull-hud-condos.sh` again: 9 approved projects (the list is dated "as of 10/31/2026") and 117 with any status. The nine names match.
- **Find a Lender, Horry.** I fetched it again, with county option 166 selected. It has 92 rows.

## Corrections

1. **Row 1, targeted county.** The rule covers any other property, not only a home. A mobile home taxed as real property counts; bare land is allowed. Use: "They must not own any other property, or a share of one, when the loan closes (bare land is allowed)."
2. **Row 6, debt limit.** The 45 percent limit is the Homebuyer (Bond) Program's. Palmetto Home Advantage allows the lesser of 50 percent or the underwriting system's approval. Use: "Every SC Housing program needs a credit score of at least 640, or more if the loan's insurer requires it. On the Homebuyer Program, monthly debts can be at most 45 percent of income."
3. **Row 11, recapture refund.** SC Housing repays only the tax actually paid, not fees, interest or penalties. The buyer must ask in writing by June 30 of the year after the sale. SC Housing reports the refund to the IRS as income (Form 1099). Use: "SC Housing pays it back if you ask in writing by June 30 of the next year; the refund is reported to the IRS as income."
4. **Row 13, Palmetto Home Advantage.**
   - Manufactured homes must be doublewide or larger, built in 1994 or later, on a permanent foundation. Fannie Mae, Freddie Mac and FHA loans need a 660 score; USDA needs 640.
   - "No price limit" means no program limit. The loan type's own limits still apply.
   - A repeat buyer may hold at most two financed homes, the new one included.
   - Use: "It takes doublewide or larger manufactured homes on a permanent foundation, usually with a credit score of at least 660."
5. **Row 15, Families with Disabilities.** The program covers anyone in the household, not only a family member. The disability must be permanent and shown by SSI, SSDI or long-term disability income. There is no first-time buyer rule. Only FHA, VA or USDA loans qualify. The two SC Housing pages still disagree on income, so state no income rule.
6. **Row 20, Horry County.** Cut "Horry County has no down payment program a buyer applies to." The county's CDBG page lists "homebuyer down payment assistance" among the uses CDBG money may fund, so the absence is not proven. Keep the HOME fact: the program funds developers and nonprofits, not buyers directly.
7. **Row 21, lenders.** The 92 rows hold 91 different loan officers; one name is listed twice. Merging the company spellings gives 40 to 42 companies. Use: "about 90 loan officers at about 40 companies."
8. **Row 22, income limits.** These are HUD's 2026 **HOME program** income limits, not HUD's general limits. Name the program in the sentence.
9. **Row 24, Habitat.** No source says "free". Write "volunteer Financial Mentor".
10. **Row 28, listings by town.** The towns are mailing cities, and Murrells Inlet includes Georgetown County homes. Do not write "nine Horry County towns". Use: "nine Grand Strand and inland towns" (by mailing address).
11. **Row 31, USDA area.** The 14.7 percent figure divides by the county outline, and that outline reaches about 3 miles into the ocean. The USDA shape stops at the shore. Measured against the county's land (TIGERweb AREALAND, 2,934.6 km²), the strip is 476.3 / 2,934.6 = 16.2 percent at most. Use: "less than a fifth of the county's land." Every listing figure in the row reproduced exactly.
12. **Row 33, rental-program buildings.** The owner's word is "non-warrantable", a conventional-loan term. Do not stretch it to "not approved for these loans", which would take in FHA and VA. Use: "Buildings with a rental program are usually non-warrantable, because so many owners are investors."

## Struck

- **Row 14, County First.** SC Housing's County First web page lists 31 counties, including Florence and Horry. SC Housing's lender program guide (Community Lending Initiatives, effective February 2, 2026) says "29 targeted underserved counties" and lists 29 without Florence or Horry. The two also disagree on loan types. No source settles it. Cut County First from the page, or say only that SC Housing's two documents disagree about Horry.

## Not to publish from any row

- An interest rate, "0%", "no monthly payments", a payment amount, or a down payment or recapture percentage. The sources state them; the rows leave them out.
- Habitat's $2,000 down payment figure.
- A median sale price backed out of row 23's $294,000.

## Notes for the writer

- The page now on disk (`chapter3realty/buyers/programs/index.html`) still has row 1's old wording: "must not own a home or have any ownership interest in a home". The struck list fires on it.
- Row 16: "fastest" is SC Housing's statement about its own program. Attribute it to SC Housing.
- Row 30: several of the nine projects are approved only for some phases or buildings. Do not say every unit in them is approved.
- Row 35: write "more than 50,000 new homeowners".

## Photo candidates (PLAN.md)

- **"Conway Downtown Historic District Jun 10"** (Wikimedia Commons, by Pubdog, 20 June 2010). VERIFIED.
  - Licence: on its file page, the author released it into the public domain worldwide ("I, the copyright holder of this work, release this work into the public domain", category PD-self). That matches the record in `data/photos.json` (Public domain, Pubdog, own work, 2010-06-20). `tools/photos.js check` reports no problem for this record.
  - Content: I looked at the site copy (`images/55-plus/myrtle-trace/conway-main-street-1200w.webp`) at full size. It shows Main Street at Third Avenue in downtown Conway: old brick shop buildings, the street and traffic lights. The caption "Downtown Conway" is accurate.
  - Limits: it shows no homes, so it cannot illustrate homes under the limit. The photo is from 2010 and shows shop signs.
- Wikimedia's API rate-limited me (HTTP 429), so I read the file page itself. PLAN.md names no other candidate. The four photo-partner shots are not taken yet, so there is nothing to check.
