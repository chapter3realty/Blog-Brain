# Verification: /sell/out-of-state-buyers/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did not research these facts. I opened every source myself, reran the data scripts and wrote a second count in my own code. Ledger: `facts.md` (status and note columns updated). Struck list: `sell-out-of-state-buyers-struck.json` (11 entries; each fires on its struck text and stays quiet on its approved text).

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 2, 3, 4, 5, 6, 8, 9, 10, 13, 14, 16, 17, 19, 24, 25, 26, 28, 29, 30 | 20 |
| CORRECTED | 7, 11, 12, 15, 18, 20, 21, 22, 23, 27 | 10 |
| STRUCK | none | 0 |

## How the data rows were checked (rows 1 to 8)

- Reran `analyze.py` with RAW set to the researcher's raw pull. Output to my own folder (`wf2/sell-out-of-state-buyers/verify/out/`). All 19 summary blocks are the same as `out-of-state-buyers-summary.json`.
- Wrote my own recount from the raw deed rows and parcel file, without the script. Same results: 30,339 deeds; 13,194 home sales; 12,125 matched; 3,603 outside SC; condos 1,306 of 2,402; other 2,297 of 9,723; every state count; every month.
- Re-pulled two weeks from AcclaimWeb live (2026-01-07 and 2026-05-06): 536 and 590 rows. Every row is the same as the raw files.
- Re-read 40 random parcels live from layer 24: owner state, deed book, deed page and land use are unchanged.
- Re-ran the three stock statistics queries live (row 6): every number matches.
- Re-tested 15 random sale points live against Census TIGERweb (BAS 2026 places and CDPs): 15 of 15 agree (row 5).
- Recomputed the same-group price test in my own code (row 7): 316 groups, 3,455 sales, the same medians and shares.

## Corrections

| Row | What was wrong | Use instead | Source |
|---|---|---|---|
| 7 | "Out-of-state buyers do not pay more" is flat. The medians are equal (1.00). But the means are 1.08 for out-of-state buyers and 1.05 for SC buyers, so "do not" says more than the data. | In the same building or subdivision, buyers with an out-of-state tax bill paid the same middle price as South Carolina buyers. The records show no sign that they pay more [deeds Oct 2025 to Sep 2026, 3,455 resales in 316 groups]. | Rerun of analyze.py; own recount |
| 11 | "The largest single source was Suffolk County." Georgetown County, SC sent 531 households, more than Suffolk's 320. | The largest source outside South Carolina was Suffolk County, New York, with 320 households [IRS SOI 2022-2023]. | countyinflow2223.csv, row 45,051,45,043 Georgetown County 531 |
| 12 | "Run by a South Carolina attorney." The court says "under the supervision of attorneys". | Every South Carolina home closing must be supervised by a South Carolina attorney [Doe v. McMaster, 2003]. | sccourts.org Op. 25508 |
| 15 | "In the same room" is not in the law. Also, H. 3602 is "Jaden's Law", a boating-accident bill. The remote-notary text is only a Senate amendment marked "not yet finalized". | A South Carolina notary and the signer must be in each other's physical presence. South Carolina law has no remote (video) notarization [SC Code 26-1-5(1), (13); Title 26 has chapters 1, 2, 3 and 6 only]. | scstatehouse.gov t26c001, title26; t26c004 returns 404 |
| 18 | The hold-back rule is stated without its carve-outs. Under 12-8-580(B)(2), a main home inside the Section 121 exclusion and a tax-exempt or tax-deferred transfer are not "sales". | When the seller's permanent home is outside South Carolina, the buyer must hold back part of the price for South Carolina income tax, unless the sale is exempt (for example, a main home whose gain is inside the federal exclusion) [SC Code 12-8-580]. | t12c008 |
| 20 | The exclusion is stated without the two-year rule and the joint-return use test. | Up to $250,000 of gain, or $500,000 on a joint return, if the seller owned and lived in the home at least 2 of the last 5 years (on a joint return, both spouses must have lived there) and has not used the exclusion on another home in the 2 years before the sale [IRS Topic 701]. | irs.gov/taxtopics/tc701, updated 12-Oct-2026 |
| 21 | "That return is how money held back beyond the tax comes back." The I-290 tells the seller to include a copy with the income tax return. 12-8-580(F) also allows a refund request with an amended withholding statement. | The seller files a South Carolina return for the year of the sale. The amount held back counts toward the tax owed there [I-295 item 8; I-290 instructions]. Refund detail stays on /sell/capital-gains/. | I-295 (Rev. 6/28/22); I-290 (Rev. 7/17/23); t12c008 |
| 22 | Horry is 42 percent of Nassau's median (287,700 / 684,700), not "about half". The tax is 944 against $10,000 or more, which is less than a tenth. | A typical owner-occupied home in Horry County is worth about half of one in Suffolk County, New York, and about two-fifths of one in Nassau County. Its owner pays less than a tenth of the property tax [ACS 2020-2024]. | data.census.gov ACSDT5Y2024 B25077, B25103; all 18 values re-read |
| 23 | "One and a half times as much before credits" contradicts the row's own limit. A legal residence also skips school operating millage, so no multiple of the bill holds. | A home its owner lives in is assessed at 4 percent of market value. A second home or rental is assessed at 6 percent [SC Code 12-43-220(c)(1), (e)]. | t12c043 |
| 27 | "Americans reported." IC3 takes complaints from more than 200 countries. The figures themselves are right. | In 2025, people reported $275 million lost to real estate fraud to the FBI's Internet Crime Complaint Center, up from $174 million in 2024 [IC3 2025 report]. Do not present it as closing wire fraud: IC3 counts business email compromise separately. | ic3.gov 2025_IC3Report.pdf, three-year tables |

## Notes on verified rows the writer must keep

- Row 3: the "other" group includes some condos not described as HPR. Say "other homes", not "houses and townhomes".
- Row 5: Garden City CDP reaches into Georgetown County. The figure counts Horry sales only.
- Row 8: the header line "December was close behind" is wrong. May (350) is second after October (352); December (336) is third.
- Row 10: the rank is by percent population growth. By the number of domestic movers, Charlotte is first and Myrtle Beach is not near the top.
- Row 16: 62-8-106(c) also accepts a power of attorney that met the law of the state where it was signed.
- Row 24: the act covers homes of 1 to 4 units. For a condo, the statement covers the unit, not the common elements (27-50-10(4)).
- Row 28: "the attorney's office and our agent confirm by phone" is a practice claim. The CFPB page does not support it. Owner question.
- Row 29: 15 percent of the amount realized. Say "a Canadian owner who is not a U.S. citizen or resident".
- Row 30: the building name is now sourced. The county's Community Facilities Element (2023, horrycountysc.gov/media/f1ljtdgl/community-facilities-element.pdf) says: "Horry County Government Main Offices are located at the Horry County Government and Justice Center at 1301 2nd Avenue in downtown Conway. Offices include: ... Register of Deeds".

## Photo candidates (PLAN.md)

| File | Licence on the file page | What it shows at full size | Verdict |
|---|---|---|---|
| New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg | CC BY-SA 3.0 Unported and GFDL. Author: Pollinator at English Wikipedia; moved to Commons by Machaerus. 2,100 x 1,400. No personality-rights tag. | A two-wing red-brick complex with white trim, a central pediment entrance, flagpoles, a radio tower and a parking lot. One car, no people as the subject. | Licence OK. Credit "Pollinator, CC BY-SA 3.0". The file name says courthouse and county offices, and the county says the Register of Deeds is in the Government and Justice Center at 1301 2nd Avenue. Nothing on the file page ties this photo to that address. Before the caption names the building, match it to the county aerial or a current photo. Otherwise caption it "Horry County courthouse and county offices, Conway, in 2006". |
| Hotels along the Grand Strand Beachfront.jpg | CC BY-SA 4.0. Own work by DiscoA340, 14 August 2022. 3,264 x 2,448. No coordinates. | Oceanfront high-rises from the dunes, sea oats in front, a lifeguard stand at right, beachgoers far off. | Licence OK. Credit "DiscoA340, CC BY-SA 4.0". The description says "hotels ... in Myrtle Beach". The caption may say "Oceanfront towers in Myrtle Beach" only. It must not call them condos unless the writer finds the buildings in the county layer as HPR. |

Commons API returned 429. I read the file pages and the image files directly.

## Should not be published at all

- The live page's "they pay more", "60%+ buyers relocate", the buyer quotes, the seasonal "Peak/Slow" bars, and the unresearched visitor, sun and golf figures (already cut by the researcher; confirmed).
- Any statement that a remote-online-notarized deed from another state will record in Horry County (row 15 limit).
