# Round 14c gated verification v7 (2026-10-15)

Rows checked: 520, 522, 523, 524, 526, 527, 529, 530, 531. Sources opened myself: Horry County AcclaimWeb (deed index and book/page records), Horry County GIS MapServer layers 19 and 24, FEMA's National Flood Hazard Layer (hazards.fema.gov, NFHL layer 28, which answered), Myrtle Trace HOA pages and gates PDF, 42 U.S.C. 4012a.

## Counts by status

| Status | Rows | Count |
|---|---|---|
| verified | 530 | 1 |
| verified with corrected wording | 520, 522, 523, 524, 526, 527, 529, 531 | 8 |
| wrong | none | 0 |
| unverifiable | none | 0 |

Every correction has a struck entry in `struck-v7.json` (9 entries). Each pattern fires on its struck text and not on its use text (checked with node).

## Corrections

- **520.** The counts reproduce (96 deeds by East Coast Developers LLC as grantor), but two of the 96 are not lot sales (nine common-area parcels to the association; one "several lots" deed). 94 lots first sold by East Coast of about 160. "Built out" and "one developer" are not shown: a grantor shows who sold, not who built, and other sellers sold the remaining lots. Use "sold at least 94 of roughly 160 lots".
- **522.** Titles only. The two gate policies list the grantor as "SEASIDE PLANTATION", not the association. "The gate runs on written rules" is not shown; do not say what any policy requires or that it is current.
- **523.** True and stronger than written: FEMA's own layer puts all 193 parcels in Zone X, minimal flood hazard. But Zone X is itself a FEMA zone, so "touches no FEMA flood zone" is wrong in letter.
- **524.** All 520 parcels are in Zone X on FEMA's layer. The nearest AE polygon is between 860 and 870 m from a lot with a building (matches 867 m, 0.54 mile). "Height above the rivers shows on the flood map" is not what a flood map shows; strike it.
- **526.** The page lists contacts; it does not say volunteer, owner, or that the library is in the clubhouse. Residents, not owners.
- **527.** Two named residents, not "owner volunteers". Back gates only; the front entrance is not gated.
- **529.** Residents, not owners. The five-year phrase belongs to the referral list, not to the residents who offer paid services.
- **531.** LA-5 is 0.7 percent, so "1 to 10 percent" becomes "less than 1 to about 10". A fourth parcel on AE (Parcel E) is association land. I count 476 parcels, not 471. A lot edge in the zone does not put the house in it.

No claim needs to be dropped.

## Answers to the special questions

**Rows 523 and 524: flood zones.**
- County layer 19 holds only non-X polygons. I intersected each place's bounding box against it server-side. Covington Lake East has one AE and one 0.2 percent polygon in its box; neither touches any of the 193 parcels. Myrtle Trace has none in its box. Six random lots per place, whole-lot and centre tests: nothing.
- FEMA NFHL layer 28 answered. I tested every parcel: Covington Lake East 193 of 193 and Myrtle Trace 520 of 520 meet only Zone X, "area of minimal flood hazard". Five lot-centre points per place agree.
- What the page may tell a buyer: "On FEMA's current map every lot here is in Zone X, minimal flood hazard. None is in a high-risk zone (the Special Flood Hazard Area) or the shaded moderate zone. The federal rule that makes a lender require flood insurance covers homes in the high-risk zones, so it does not apply to any home here by the current map." Do not say "no risk" or "no flood zone"; Zone X is a zone, floods happen outside mapped zones, a lender or buyer may still choose insurance, and a map revision can change a lot.
- Lender rule check: 42 U.S.C. 4012a(b) directs regulated lenders not to make, increase, extend or renew a loan secured by improved real estate in "an area that has been identified by the Administrator as an area having special flood hazards" unless it is insured. That is the Special Flood Hazard Area (A and V zones). Shaded X and unshaded X are outside it.

**Row 522: recorded policies.** Only the index is online: four 2019 records, 4 pages each. Gate Access Rules (4174/75, 1/9/2019, association as grantor), parking policy (4174/97, 1/9/2019, association), and entrance gate and security policies for contractors and service providers (4206/2942) and for real estate agents (4206/2946), both 5/10/2019 with the grantor listed as "SEASIDE PLANTATION". The page may name the four titles, dates and page counts, and say the online index shows titles only. It may not say what they require, who may enter, or that they are in force today.

**Row 530: the 62.54 acres and the open strips.** Partly. Row 151's verifier drew five tracts (B1, II-E, II-F, C, D: 59.53 acres) over the aerial and found them on the strips of grass and woods. Tract E (3.01 acres) was not in that check. Say: "six tracts, 62.54 acres, one deed recorded September 2020" and "five of them, about 59.5 acres, lie on the open strips". New fact from the deed (4343/534): grantors Heron Point Golf Club Limited Partnership and Condo World Development LLC, $800,000, 6 pages. A grantor's name with "Golf Club" in it does not show the land was a golf course; the page must not say it.

**Rows 526 to 529: Myrtle Trace's own site.** All current: the Other Contacts and Contractor Referrals pages were modified 2026-10-14; the gates PDF (2025) is still the document linked on the Covenants, Policies and Procedures page. Row 528 was not mine.

## Other findings
- The county GIS layer 19 omits Zone X, so "no polygon" there is not proof by itself; FEMA's layer 28 supplies the Zone X answer.
- The ledger's 471 lots in the Golf and Yacht Club does not reproduce (476 parcels by the same name test). The three-lot claim holds.
- AcclaimWeb "Starts With" for SEASIDE PLANTATION returns 4 rows today, not 5.
