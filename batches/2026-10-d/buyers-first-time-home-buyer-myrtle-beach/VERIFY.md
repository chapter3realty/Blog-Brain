# Verification: /buyers/first-time-home-buyer-myrtle-beach/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did none of the research. I downloaded every source again into a scratch folder and re-ran every data script. The status column of `facts.md` matches this file.

**Counts:** 41 rows. 22 VERIFIED, 19 CORRECTED, 0 STRUCK.

A CORRECTED row may go on the page only in the wording given under "Use" in `facts.md` column 10. For rows 2, 4 and 9 only the numbers change. The old wording of every CORRECTED row is in the struck list, `buyers-first-time-home-buyer-myrtle-beach-struck.json` in this folder. It has 19 entries. Each fires on its struck wording, and none fires on its approved wording. `node tools/struck-check.test.js` prints "all controls pass". None of the entries fires on the page as it is now. The batch-mode reader looks in `batches/2026-10-d/facts/`; the lead should copy the list there. I may edit only this folder.

## What I re-ran

- **Deed sales.** I ran `build_findings.py` on a copy of the raw files. I added a fresh pull of the flood zones (`fetch_flood.py`: 758 polygons, AE 711, VE 42, A 5, all "STUDY1"). The output is identical: `findings.json`, `chart-ladder.json`, `chart-zip.json` and `map-starter-points.json`. I ran it again on fresh pulls of ZIP layer 20 (27 areas) and parcel layer 24 (12,922 rows). The output is still identical.
- **My own checks on the method.** I read sample legal descriptions for every land use code. I compared each sale price with the county's market value. I counted the ZIP order myself.
- **CRM listings.** I ran `pull_listings.py` again at 2026-11-01T04:00Z (167 calls, 5,018 listings up to $400,000, 4,415 inside Horry County). The house and condo figures are identical. Townhouses at or under $300,000 dropped from 202 to 201.
- **Sources.** I downloaded these again and read them as text:
  - HUD Handbook 4000.1, the full PDF ("Issued: August 12, 2026"), and its glossary
  - the HUD FHA and Fannie/Freddie limit queries
  - the HUD condo search (the programs page's `pull-hud-condos.sh`: 9 approved, "as of 11/01/2026")
  - IRS Publication 590-B (2025) and the IRS early-distribution table
  - the VA purchase loan page
  - SC Housing's handout
  - SC Code Title 12 chapters 24, 37 and 43, 40-57 and 38-75
  - S.C. Code Regs. chapter 27
  - Doe v. McMaster
  - the Horry County Treasurer and Assessor pages, and the 2026 levy PDF (byte-identical, certified 7/27/2026)
  - FloodSmart
  - 42 U.S.C. 4012a
  - ACS 2024 1-year tables B25119, B25064 and B25003
  - 7 CFR part 3555 from eCFR (USDA's own page still returns 403)
- **Owner pages.** For rows that rest on `/buyers/programs/` and `/sell/out-of-state-buyers/`, I read those pages' verifier notes and carried their corrections over.

## Data fix the writer must make

Land use code 117 is garage and parking units, not homes. There are 18 sales, described as "GARAGE UNIT", "PARKING UNIT" or "GARAGE SPACE", priced from $15,000 to $103,284. Their legal descriptions say "HPR", so `kind()` counted them as condos. Add one line at the top of `kind()` in `build_findings.py`:

```
    if lu == "117": return "other"
```

Then rebuild. I ran that change in scratch. Only condo figures and totals move:

| Figure | Was | Is |
|---|---|---|
| Kept sales | 12,793 | 12,775 |
| Condos | 4,350 | 4,332 |
| Condo median | $218,000 | $219,000 |
| Condos under $300,000 | 3,156 | 3,138 |
| Under $300,000, all homes | 5,881 (46.0%) | 5,863 (45.9%) |
| Under $200,000, condos | 1,894 of 2,416 (78.4%) | 1,876 of 2,398 (78.2%) |
| Ladder band $0 to $150,000 | 1,374 total, 1,094 condos | 1,356 total, 1,076 condos |
| Flood, condos under $300,000 | 490 of 2,944 (16.6%) | 490 of 2,926 (16.7%) |
| Tax bill out of state, condos under $300,000 | 1,520 of 2,896 (52.5%) | 1,509 of 2,878 (52.4%) |

Every house and townhouse figure is unchanged. That covers the ZIP chart, the starter map, the flood share (78 of 2,403) and the out-of-state share (349 of 2,307).

A limit to keep in mind: 118 of the 2,147 house deeds under $300,000, and 111 condo deeds, were for less than half the county's market value. Most are likely lots built on later, or family sales. The county's value tracks prices closely: the median sale is 1.0 times it. Say "more than 2,000 houses", not an exact count.

## Corrections

1. **Rows 1, 2, 4, 9 and 24: numbers.** These are the figures in the table above. The wording of rows 2 and 9 stands.
2. **Row 10, SC Housing's rule.** The rule covers any other property, not only a home, and bare land is allowed (programs row 1, corrected).
3. **Row 14, VA.** VA's page says a VA loan "often offers" no down payment. Use: "A VA loan often needs no down payment, as long as the price is not above the appraised value."
4. **Row 15, USDA.** The SC Housing handout is a secondary source for USDA's rule. The primary source is 7 CFR 3555.103: the loan may be up to the lesser of the appraised value plus the guarantee fee, or the price plus eligible costs. Under 3555.2 the program is for low- and moderate-income buyers. Use: "A USDA guaranteed loan can cover the full price, with no down payment, when the home appraises at the price or more; it is for low- and moderate-income buyers in USDA's area."
5. **Row 19, IRA withdrawal.** The source adds a condition the row leaves out: "If you are married, your spouse must also meet this no-ownership requirement."
6. **Row 23, rental-program condos.** The owner said "non-warrantable". Do not write "not approved for these loans" (programs row 33, corrected).
7. **Row 24, local buyers.** Cut "mostly competes with local buyers". A South Carolina tax-bill address also includes buyers who moved here from other states.
8. **Row 25, homeowners.** B25003 counts occupied homes only. Use: "About 4 in 5 households in Horry County own their home." The old wording was about all homes, and Horry County has many vacant and seasonal ones.
9. **Row 28, earnest money.** The statute covers money "received by a broker-in-charge". It does not say the broker must hold the money. A check's 48 hours run from written acceptance of the offer. Use: "If a real estate broker holds your earnest money, a check must go into the broker's trust account within 48 hours after both sides accept the offer in writing, not counting weekends and bank holidays."
10. **Row 29, deed fee.** The buyer is secondarily liable for the fee. On a master-in-equity or government deed, such as a HUD home, the buyer owes it (12-24-20(B)). Keep the exception.
11. **Row 30, attorney.** The court's words are "under the supervision of attorneys". Use "supervised by", not "run by". The sibling row 12 was corrected the same way.
12. **Row 35, flood insurance.** "Only" is not in the law; a lender may also require flood insurance outside the zone. Use: "A lender must require flood insurance when the building is in a high-risk flood zone."
13. **Row 36, wind pool.** No source says "many policies leave out wind". 38-75-1230 says insurers may exclude wind and hail only inside the wind pool area. Use: "where insurers may leave wind and hail out of a homeowners policy."
14. **Row 38, low appraisal.** "Send the appraiser" adds a detail the story does not have. Use: "our agents gather comparable sales for a reconsideration of value."
15. **Row 39, termite letter.**
    - The rule applies only if a report is issued for a sale or mortgage.
    - "Not a warranty" is not in the regulation.
    - Use: "If a termite letter is issued for a South Carolina sale or mortgage, it must be on the state's official Wood Infestation Report form, signed by a licensed pest control applicator. It reports visible damage, infestation and moisture in the parts the inspector can reach, and lists the parts it could not."
16. **Row 40, preferred lender.** The source is a proposed answer, not the owner's. No source supports "our preferred lender handles the loan". Use the live programs page's line: "When an SC Housing program fits, a Chapter3 agent connects you with an SC Housing approved lender."

## Verified with a wording note

- Row 6: about 200 townhouses.
- Row 7: say "the 29579 ZIP, which includes Carolina Forest".
- Row 12: up to 6 percent "in all". The cap also counts seller-paid buydowns.
- Row 18: "at least a 640 credit score".
- Row 20: the programs row's wording, "no longer offers ... said it would end June 30".
- Row 33: about $990, $3,260 and $2,260.
- Row 41: an owner aged 65 or older must also have lived in South Carolina for a year.

## Should not be published

Nothing needs to be cut entirely. Every row has a safe wording.

## Photos (PLAN.md)

- **"Conway Downtown Historic District Jun 10"**, by Pubdog. I opened the Commons file page. Its licensing says: "I, the copyright holder of this work, release this work into the public domain. This applies worldwide." The photo is own work, taken 20 June 2010. Its record in `data/photos.json` says the same. I looked at the 1,200 px copy at full size, which is the live file `images/55-plus/myrtle-trace/conway-main-street-1200w.webp`. It shows Main Street at Third Avenue in downtown Conway: two-story brick shop buildings, a traffic light and a few cars. The caption "Downtown Conway" is true. The photo is from 2010, so the caption must not say "today". It shows the town, not starter houses, as the plan says.
- **"Home in the historic district, Conway, South Carolina (18 November 2006)"**, by Pollinator. Its licence on the file page is CC BY-SA 3.0 Unported, with the attribution "Pollinator at the English-language Wikipedia". The licence is usable with credit and share-alike. The plan already rejects it for this page, because an old historic-district house is not a starter house. I agree.
- Commons' API returned HTTP 429 to me as well, so I searched for no new candidates.
