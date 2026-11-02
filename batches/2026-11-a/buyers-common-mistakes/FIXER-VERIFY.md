# Fixer rows, independent check: /buyers/common-mistakes/

Checked 2026-11-02 by a verifier who did not research them. Scope: the 6 rows marked VERIFIED-BY-FIXER (F1 to F6). Counts: 3 VERIFIED, 3 CORRECTED, 0 STRUCK. The ledger's status column is not edited here.

| Row | Verdict | Value or reason |
|---|---|---|
| F1 | CORRECTED | 38-75-1230 quote matches. The page states the Horry County line (38-75-310(5)(c)) as if it were the state's only line. The "coastal area" also covers named parts of Georgetown, Charleston, Beaufort and Colleton Counties, each on its own line ((5)(a), (b), (d) and on). On the Grand Strand, Georgetown County's Waccamaw Neck has its own line. So "Elsewhere in the state ... the director's approval" is wrong for those areas. |
| F2 | VERIFIED | 40-57-30(43) quote matches. The card's "before you both sign" also rests on 40-57-350(C): "At the time of first substantive contact, it is presumed that the potential buyer or seller is to be a customer of the real estate brokerage firm and that the real estate brokerage firm will be acting as a transaction broker". |
| F3 | VERIFIED | 38-75-330(A) quote matches. |
| F4 | CORRECTED | Live CRM: type=house 3,689; hoa=0 1,101; so 2,588 (70.2%). (The hoaMax=0 filter gives 1,137, which would make it 69.2%. Both are 7 in 10.) The feed is wider than the Grand Strand. Conway 671, Loris 154 and Aynor 44 houses are inland, and Calabash, N.C. adds 55. The coastal towns alone (Myrtle Beach, North Myrtle Beach, Surfside, Murrells Inlet, Little River, Pawleys Island, Calabash) are 1,448 of 1,932, about 3 in 4. 7 in 10 is the share for the whole feed, not for the Grand Strand. Note: the CRM ignores a `county=` or unknown `city=` value and returns the whole feed. |
| F5 | CORRECTED | 12-54-85(F)(1) quote matches, and 12-60-2560(A) points to it. 12-43-220(c)(3), the section the row cites, also says: "A county council, by ordinance, may allow refunds for the county government portion of property taxes for such additional past years as it determines advisable." The page gives two years with no carve-out. |
| F6 | VERIFIED | freddiemac.com/about: "purchasing from lenders single-family and multifamily residential mortgage loans". |

## Page sentences to change

| Row | Page sentence now | Replace with |
|---|---|---|
| F1 | East of U.S. 17 or Bypass 17, whichever is farther west, South Carolina lets an insurer leave wind and hail out of a homeowners policy. | In Horry County east of U.S. 17 or Bypass 17, whichever is farther west, and in named coastal areas of other counties, South Carolina lets an insurer leave wind and hail out of a homeowners policy. |
| F1 | Elsewhere in the state, an insurer needs the state insurance director's approval to do it. | Outside those areas, an insurer needs the state insurance director's approval to do it. |
| F4 | About 7 in 10 houses for sale on the Grand Strand have an HOA fee, so most houses here come with a homeowners association (HOA) and its rules. | About 7 in 10 houses for sale on our MLS, which covers the Grand Strand and inland Horry County, have an HOA fee, so most houses here come with a homeowners association (HOA) and its rules. |
| F5 | Under state law, you have two years from the day you paid that bill. | Under state law, you have two years from the day you paid that bill, and a county council may allow refunds of the county's own share for more past years. |

F3's page sentence ("The state's backup insurer for wind sells one to owners in this coastal area who cannot get it from another insurer.") still reads right once F1 names the areas. The F1 rewrite keeps "In Myrtle Beach, that line is the Bypass." as it is. The F4 replacement still passes the build's 7 in 10 check. Whether Horry County has an ordinance under 12-43-220(c)(3) is not known; the F5 wording does not say it has one.

Struck list: 4 entries added to `buyers-common-mistakes-struck.json` (F1, F1, F4, F5). All 4 fire on the built page now.
