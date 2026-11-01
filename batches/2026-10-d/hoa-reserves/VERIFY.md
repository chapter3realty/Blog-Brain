# Verification: /hoa/reserves/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did none of the research. I opened every source again or downloaded it again into a scratch folder. The status column of `facts.md` matches this file, and each row's note in `facts.md` gives the full reason.

**Counts:** 32 rows. 23 VERIFIED, 9 CORRECTED, 0 STRUCK.

A CORRECTED row may go on the page only in the wording given after "Use:" in its `facts.md` note. Its old wording is in the struck list, `hoa-reserves-struck.json` in this folder, with 10 entries (the 9 corrected rows, and row 16's wording limit). Each entry fires on its struck wording, and none fires on the approved wording or on the live page. `node tools/struck-check.test.js` prints "all controls pass". The batch-mode reader looks in `batches/2026-10-d/facts/`; the lead should copy the list there. I may edit only this folder.

## What I re-ran

- **South Carolina code.** I fetched Title 27 Ch. 30 and 31 and Title 33 Ch. 31 again and searched for reserve, replacement fund, capital, study, sinking, budget, fund, inspection and engineer. The hits match the researcher's. I read 27-31-160, 180, 190, 250, 420 and 430, 27-30-140 and 150, and 33-31-1602.
- **Florida.** 718.112 and 553.899 fetched again (2026 Florida Statutes; 718.112 last amended by ch. 2026-14). I opened the state's reserve threshold page. SB 722 (2026) died in committee.
- **New Jersey, Maryland, Virginia.** I fetched each law again and read the full sections. I opened New Jersey DCA's PRED page. I read Maryland's 2026 HB 956 fiscal note: it does not touch 11-109.4.
- **Fannie Mae.** B4-2.2-01 (served at the b4-2.2-02 address) and B4-2.1-01 fetched live; both say "Published: October 07 2026". Every quote is found. LL-2026-03 still returns 403.
- **Freddie Mac.** The bulletin copy I downloaded from tenaco.com is byte-identical to `raw/`, and its PDF metadata says "Author: Freddie Mac", created 2026-03-18. Freddie's own FAQ (sf.freddiemac.com/faqs/condominium-unit-mortgage-faq) confirms the August 3, 2026 Streamlined Review end and the baseline and highest-recommendation rules. No freddiemac.com page I could read states the 15 percent.
- **CAI, NRSS, Association Reserves, HUD.** All four PDFs downloaded again; all byte-identical to `raw/`. Every quote is found.
- **IRS.** countyinflow2223.csv downloaded again from irs.gov; the Horry rows equal `raw/` (207 rows); `horry_inflow_states.py` gives the same totals. 2022-2023 is the newest year (the 2023-2024 file returns 404).
- **CRM listings.** `pull_condo_ages.py` re-run at 04:52Z (API refreshed 04:40Z), with 0 errors. Every count and median is identical to the researcher's pull. The API source is CCMLS active listings, all "For sale"; sampled pins run from latitude 33.42 to 33.90.
- **Worked example.** `worked_example.py` re-run gives identical output. I redid every product, sum and division by hand.

## Corrections

1. **Row 3, who pays when the money is short.** 27-31-250(B) is in the section on insured property that is damaged or destroyed. It is not a rule for every repair. The general sharing rule is 27-31-190. Use: "In a South Carolina condo, every owner pays a share of the cost of keeping up and repairing the shared parts, in the percentage set for the unit in the master deed. After damage, what insurance and the reserve do not cover is shared the same way."
2. **Row 5, the study's time span.** The rule changed. CAI's 2025 explanation of its current standards says the standards "require that reserve studies display a minimum 30 years of income and expenses". The 20 years is from the 1998 text. Use: "At least 30 years of projected income, expenses and ending balances, and a list of the parts with each one's life, years left and current cost."
3. **Row 7, owners' access.** 27-30-150 covers only HOAs not organized under the Nonprofit Corporation Act. Members of a nonprofit HOA use 33-31-1602, which needs written notice five business days ahead. For accounting records it also needs a good-faith demand for a proper purpose. Use: "HOA members can inspect and copy the budget and the accounting records after giving written notice five business days ahead." The condo half (27-31-180) is right.
4. **Row 10, the strong band.** The report says "Low risk of special assessments", not "rare". Use: "70 percent or more is strong (a low risk of special assessments)."
5. **Row 12, what the lender leaves out.** The guide says these types of income "may be excluded". Use: "It may leave out income for things like cable or internet, and special assessment income."
6. **Row 18, Florida's $25,000 line.** It is adjusted for inflation each year. The state's page says "2026 Threshold: $25,675". Use: "and for any other item over $25,675 in 2026 (the line rises with inflation each year)."
7. **Row 21, New Jersey.** The study duty covers every association of a planned development with $25,000 or more of shared capital assets. The five-year rule (section 6.c) binds only a "covered building owner": a condo or co-op building with a concrete, masonry, steel or hybrid frame. New Jersey's DCA names condominiums as planned developments, so "condos among them" is confirmed. Use: "A 2024 New Jersey law makes associations of planned developments, condos among them, do and pay for a capital reserve study with a 30-year funding plan; associations with under $25,000 of shared capital assets are exempt. For condo and co-op buildings with a concrete, masonry or steel frame, the study must be redone and reviewed at least every five years, and the building needs a structural inspection within 15 years of its certificate of occupancy."
8. **Row 23, Virginia.** The "except" clause is in subsection B. The budget statement (C) applies only when the study shows a need for reserves. Subsection D lets the board use reserves, extra assessments or loans. Use: "Unless the condo's own papers say otherwise, the board must study reserves at least every five years and review them every year. When the study shows reserves are needed, the budget must show the cash saved and the study's recommendation. The board may still pay for repairs with reserves, extra assessments or loans."
9. **Row 32, what we do.** The story does not say "before the offer". Use: "Our agents read the HOA documents for a buyer." The live offer sentence is the owner's copy and may stay.

## Limits on verified rows

- **Row 1.** 27-31-430 requires an architect's or engineer's condition report, with remaining useful life, when rental units are converted to condos. That is a one-time disclosure, not a reserve rule, so the claim stands. The page must not say that no South Carolina law asks anyone to look at a building's condition. The only 2025-2026 bill found is H.3235, a study committee resolution still in committee.
- **Row 16.** The page may say: "Freddie Mac raises the test to 15 percent for applications from January 4, 2027; it says it made the change with its regulator and in alignment with Fannie Mae." It may not say that Fannie Mae requires 15 percent: Fannie's own letter could not be read, and its guide (October 7, 2026) still says 10 percent. "In alignment with Fannie Mae" is said of the bulletin's changes as a group.
- **Row 19.** If the page says "no voting it away", add that since 2025 the reserves for these items may be funded by regular assessments, special assessments, lines of credit or loans (718.112(2)(f)2.c.).
- **Row 20.** A milestone inspection is by a licensed architect or engineer. Write "an engineer or architect".
- **Rows 4 and 9.** Cite CAI's 2025 explanation first. It confirms the terms; the 1998 text is a firm's copy of an old edition.

## Claims that should not be published

None beyond the researcher's "Not verified" list, which stands. Never write that Fannie Mae's guide requires 15 percent (row 16). Never write a 20-year study span (row 5).

## Photo candidates in PLAN.md

- **"Hotels along the Grand Strand Beachfront 2.jpg".** File page: DiscoA340, own work, 14 August 2022, CC BY-SA 4.0, 3,264 x 2,448, description "Hotels along the Grand Strand Beachfront in Myrtle Beach, South Carolina." I looked at it at 1,920 px. It shows a row of oceanfront towers on the beach, a newer tall white tower in front. The licence is acceptable with credit and a share-alike note. Limits:
  - The towers can be identified, and a restaurant sign shows at the far left. The caption must not name a building or say anything about any building's age, reserves or condition.
  - The sibling `/hoa/special-assessments/` plans to use it. Use it here only if the lead assigns it.
- **"Concrete spalling caused by oxide jacking at the Herbst Pavilion, Fort Mason Center, San Francisco.jpg".** Commons API: Cullen328 (Jim Heaphy), own work, 2012-02-10, CC BY-SA 3.0, 3,264 x 1,840. Commons rate-limited the original file, so I looked at the 1,920 px rendition. It shows a concrete wall with patches broken away along a line, rusted steel bars exposed, and a window and a roll-up door at the right. It is a wall, not a balcony. The caption "Concrete breaks off when the steel inside it rusts." matches the picture. No ledger row supports a second sentence about balconies or salt water, so leave it out. The caption must not imply a Grand Strand building. The licence is acceptable with credit.
