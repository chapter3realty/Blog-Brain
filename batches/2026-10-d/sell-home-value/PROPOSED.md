# Proposed rows: /sell/home-value/

## facts/registry.json

1. `reassessment-cap-15` : "Between sales, a South Carolina reassessment may raise a property's taxable value by no more than 15 percent in five years; the limit does not apply in the year a sale's value is first taxed (SC Code 12-37-3140(B))." Source https://www.scstatehouse.gov/code/t12c037.php. Owner page /buyers/property-taxes/. On two pages (/buyers/property-taxes/, /sell/home-value/). Wrong patterns to catch: "15 percent (a|per) year", "capped at 15 percent each year", "15% annual cap" (the cap is per five-year reassessment period, not per year). Controls: firing "taxes can rise only 15% per year"; quiet "no more than 15 percent in five years".
2. `horry-reassessment-year` : "Horry County's latest countywide reassessment was in 2024; the one before was in 2019." Source https://www.horrycountysc.gov/departments/assessor/guide-to-assessment/. staleBy 2029-01 (next cycle). Owner page /buyers/property-taxes/.
3. `ati-reset-date` : "A sold property is valued as of December 31 of the year of the sale (SC Code 12-37-3140(A)(1)(b))." Owner page /buyers/property-taxes/.

## rules/claims.json

4. `valuation-called-appraisal` : a licensee's valuation may not be called an appraisal (SC Code 40-60-30(1)). Pattern idea: `\b(free|our|complimentary|no-cost)\s+(home\s+)?appraisals?\b`, unless `\b(lender|appraiser|licensed appraiser|bank)\b` in the same sentence. Controls to take from real site text after a scan (none of the 2026-11-01 pages use "free appraisal"; the scan found no hit). Also worth a check rule: a page with a home-valuation form must carry the sentence "This valuation service may not be used for the purposes of obtaining financing in a federally related transaction."

## stories/stories.json

None. No pricing or CMA story is in the bank, and none is proposed without the owner.
