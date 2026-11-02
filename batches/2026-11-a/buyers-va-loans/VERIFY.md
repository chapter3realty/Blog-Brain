# Verify: /buyers/va-loans/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself or re-ran its script into my own scratch folder. I did not reuse the researcher's raw files.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `buyers-va-loans-struck.json`. Every entry fires on its own struck text, and no approved wording fires. `node tools/struck-check.test.js` passes.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 25: rows 1, 2, 6, 7, 8, 10, 10b, 11, 13, 14, 16, 17, 18, 19, 21b, 23, 24, 25, 27, 29, 30, 33, 34, 35, 37 |
| CORRECTED | 15: rows 3, 4, 5, 9, 12, 15, 20, 21, 22, 26, 28, 31, 32, 36, 38 |
| STRUCK (whole row) | 0 |

Clauses were struck inside five rows: 3 ("A VA buyer can choose from"), 4 ("Twelve more were pending"), 5 (the two rejected towers and "25 have no record"), 15 ("Most buyers") and 20 ("come up less here").

## What I re-ran

- **VA condo report.** I ran `pull-va-condos.sh` into my own folder. Horry: 229 records, 187 approved, 176 names. Georgetown: 16 of 19. Identical to the researcher's.
- **HUD FHA list.** I ran `pull-hud-condos.sh`. It returned 9 approved and 117 in all, "as of 11/01/2026".
- **CRM counts.** I ran `pull-listings.py` on 2026-11-02. A few counts moved by one listing. Every share and the median band are unchanged.
- **Census.** I re-pulled ACS 2024 B21001 and B25034 and checked the variable labels on api.census.gov. Every figure is identical.
- **Drives.** I ran `pull-drives.py`. The minutes are identical. The origin points match the 2024 Gazetteer, and the clinic point matches va.gov.
- **Build.** I ran `build-findings.py` on my own pulls. The only differences are the one-listing CRM moves above.
- **Live pages.** I fetched every va.gov, scstatehouse.gov, SCDOR, Horry County, FHFA, SC Housing, govinfo and City of Myrtle Beach source. For both CFR sections I also checked the eCFR history: there has been no change since 2016.
- **VA Lender's Handbook.** I read chapters 12 and 16 on KnowVA in a browser. They were updated Aug 12 and Aug 19, 2026. The researcher could not open them.

## Every correction

1. **Row 3 (VA list against FHA list).** The counts are right: 176 names against 9, so 19.6. Strike "A VA buyer can choose from ... as an FHA buyer". A count on a list is not what a buyer can choose from. Each HUD approval also expires (the dates run from 2027 to 2029).
   - Use: "The VA's list holds about 20 times as many accepted Horry County condo communities as HUD's FHA list: about 175 against 9."
2. **Row 4 (reviews in a year).** The figures 27, 22 and 5 are right. The 12 pending records are not from that year. Only 5 were received after Nov 1, 2025. The others go back to 2014.
   - Use: "Five more requests from that year were still pending."
   - Chapter 16 says who sends the request: "the lender/sponsor".
3. **Row 5 (the 29 oceanfront buildings).** Only two are accepted: Beach Cove Resort and the Renaissance Tower at Myrtle Beach Resort. Two other claims fail:
   - Ocean Dunes Tower 1 (75th Ave N) is a separate regime. It is not part of the Sand Dunes row (201 74th Ave N).
   - Island Vista (6000 N Ocean Blvd) shares its street number with a pending request filed as SEA CABIN, so "25 have no record" fails.
   - Use: "2 have an accepted VA record ... None of the other 27 does."
4. **Row 9 (North Myrtle Beach).** 70 of 254 is 28 percent. Use "about 3 in 10", not "about 1 in 4".
5. **Row 12 (the move-in rule).** The spouse clause, 38 U.S.C. 3704(c)(2), applies only when the veteran is on active duty and cannot live in the home because of it.
   - Use: "If you are on active duty and cannot live there because of it, your spouse can meet the rule."
6. **Row 15 (the funding fee).** No source says "most buyers".
   - Use: "Unless you are exempt, you pay a one-time VA funding fee."
   - The ledger's note "No percentages on the page" is wrong: the VA page shows them. Our page still must not.
7. **Row 20 (older homes).** The ACS figures are right. The paint rule is now verified in chapter 12, topic 32: "If the dwelling was built before 1978, the presence of lead-based paint must be presumed. Any defective lead-based paint is a safety hazard that must be remediated."
   - Strike "come up less here". No source measures how often appraisals flag it.
   - State the two facts side by side instead.
8. **Row 21 (getting entitlement back).** Restoration is on the VA eligibility page, not on the limits or purchase page. It has conditions, and the veteran asks for it.
   - Use: "After you sell the home and pay off the VA loan, you can ask the VA to restore your entitlement."
9. **Row 22 (surviving spouse).** A qualified surviving spouse is one who stays unmarried, lives in the home and owns it (12-37-220(B)(1)(f)).
   - Use: "A surviving spouse who has not remarried and lives in the home keeps it, and can move it to a later home."
10. **Row 26 (the first year).** SCDOR counts from "the year the veteran acquires the property ... or the effective date, whichever comes later".
    - Use: "... the whole year the disability began, if they owned the home that year; if they bought it later, from the year they bought it."
11. **Row 28 (Homestead Exemption).** Two conditions were missing:
    - For tax year 2026 only, an owner who already qualified in 2025 gets $75,000. This is proviso 117.220, matching /buyers/retirees/ row 19. SCDOR's page says "For Tax Year 2026, the State temporarily authorized an additional Homestead Exemption".
    - The age route needs one year of South Carolina residency, and the owner must hold the home in fee simple or a life estate.
12. **Row 31 (drive times).** Carolina Forest is 21.9 minutes. CRAFT 2 rounds that to "about 20", not 22.
13. **Row 32 (Charleston).** Charleston is the nearest VA medical center from the clinic. I measured from the clinic: Charleston 131 minutes, Fayetteville VAMC 164, Dorn VAMC in Columbia 181.
    - For the north end it is not the nearest. Fayetteville is the shorter drive from Loris (113 against 167 minutes), Little River (146 against 169) and North Myrtle Beach (148 against 158).
    - Use the safe wording in the row's note.
14. **Row 36 (Guard and Reserve).** The 6 creditable years count only if the member still serves, or left with an honorable discharge or on the retired list.
15. **Row 38 (Seagate Village).** The 2025-12-10 VA record is "Accepted With Conditions", not without. HUD gives the address as "Mallard Lake Drive". "Off Mallard Lake Drive" was not measured.
    - Use "on Mallard Lake Drive".

## Notes on verified rows

- **Row 23.** One word in the PT-401-I quote was off. The form reads "either solely to the applicant or jointly with a spouse".
- **Row 27.** Every levy figure and the arithmetic check out. The six mill totals match the /buyers/property-taxes/ calculator exactly.
  - The 53.4 percent Myrtle Beach credit rests on the 2026-10 ledger row 104, which a verifier passed then. The city's budget PDF refused my download (a bot check), so I did not re-open it.
  - Write "Murrells Inlet or Garden City (Horry County side)".
- **Row 10b.** Say "listed as in a flood zone". The CRM flag is the listing's own entry, not a check against the FEMA map.
- **Rows 7 and 13.** These are owner stories with limits. Never name the teller in copy. Attribute loan facts to "a loan officer at our preferred lender".

## Not on the ledger, now readable (for the researcher, not the page)

Chapter 12 opened, so the minimum property requirement checklist can be researched and sent to a verifier. Two lines the researcher may want:
- Topic 33(b): a wood-destroying insect report is required in "very heavy" or "moderate to heavy" termite zones.
  - High-rise condo units are exempt. Side-by-side villas and townhomes are not, unless the HOA shows proof of treatment.
- Topic 34: "Radon Gas has been removed in its entirety" (change date Feb 27, 2026).

These are not verified rows. A verifier must check them before they reach the page.

## The live page today

`struck-check.js` finds two struck phrases on the current /buyers/va-loans/:
- "entitlement is restored" (FAQ)
- "Most VA borrowers pay a one-time VA funding fee" (Mistakes section)

The rewrite must replace both.

## For the lead (other pages)

/buyers/relocating/healthcare/ and /buyers/relocating/pros-and-cons/ say the nearest VA medical center is in Charleston, with no limit. From Loris, Little River and North Myrtle Beach, the Fayetteville VA Medical Center is the shorter drive (row 32).

## Photo candidates (PLAN.md)

| File | Licence on the file page | Verdict |
|---|---|---|
| Mbafb-1985.jpg | `{{PD-USGov-Military-Air Force}}`, author and source "United States Air Force", 1985. Moved from en.wikipedia (2006). There is no source URL. | Licence OK. I could not view it: Commons rate-limited my downloads (429). The writer must look at it at full size before use. It is small (527 x 750). |
| Myrtle_Beach_AFB_-_Oblique_Airphoto_-_Looking_west_to_east.jpg | `{{PD-US-no notice}}`. Author and source `{{unknown photographer}}`. No publication record. | Reject. Nothing on the page proves it was published without a notice. |
| Former_Myrtle_Beach_AFB_Base_Operations_Building.jpg | `{{cc-zero}}`, James McAdams on Flickr. FlickreviewR passed 2015-09-29. | OK. I viewed it at full size (491 x 368). It shows a low building with a control tower cab and a "General Aviation Terminal" sign. A caption may say only "the former base operations building". |
| The_Market_Common,_Myrtle_Beach_(December_2023)_01.jpg | `{{self/cc-by-sa-4.0}}`, DiscoA340, own work. | Licence OK, but reject. At full size it is a close-up of a lit "FARROW PARKING" sign at night. It does not show the Market Common, and a sign is its subject. |
| F-100F_56-3448_over_Myrtle_Beach_Air_Force_Base.jpg | `{{PD-USGov-Military-Air_Force}}`, USAF, 1960. The description says F-100D, but the file name says F-100F. | Licence OK. The plan already skips it as decorative. |
