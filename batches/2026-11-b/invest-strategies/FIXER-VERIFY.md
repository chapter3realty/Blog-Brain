# Fixer rows, independent check: /invest/strategies/

Verifier who did none of this research, 2026-11-10.

| Row | Status | Reason |
|---|---|---|
| 42 | VERIFIED | Re-ran `build_findings.py` from a copy (inputs linked read-only): findings.json identical. `dscr.cases[0..1].pct_tax_ins_dues` 30.7 and 34.4. Arithmetic redone: Longs $320,000 x 0.06 x 201.0 / 1000 / 12 = $322, insurance $3,300 / 12 = $275, dues $100; $697 / $2,270 = 30.7%. Carolina Forest $390,000 gives $392 + $275 + $100 = $767 / $2,230 = 34.4%. DSCR rows 16 and 17 are VERIFIED by their own verifier. Page: "Take a middle-priced 3-bedroom house in Longs or Carolina Forest, outside city limits. Its tax, insurance and HOA dues take about a third of HUD's rent figure for its ZIP, which leaves room for the loan." It keeps the limits (HUD's figure for the ZIP, outside city limits) and has no rate or payment amount. "Middle-priced" is the middle asking price (DSCR row 14). |
| 43 | VERIFIED | City of Myrtle Beach page re-opened (HTTP 200): "Most traditional residential neighborhoods in the City of Myrtle Beach are NOT zoned for short-term rentals. “Short-term” means any rental of less than 90 days." The page carries no date. Page: "In the City of Myrtle Beach, a rental under 90 days is short-term, and most of the city's traditional neighborhoods are not zoned for it." |

No row is CORRECTED or STRUCK. No struck-list entry needed.
