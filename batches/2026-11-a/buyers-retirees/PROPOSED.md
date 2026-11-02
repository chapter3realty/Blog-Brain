# Proposed registry rows and site fixes: /buyers/retirees/

For the lead. Nothing here is applied. Each row needs a firing and a quiet control in `tools/facts-check.test.js`, taken from real site text, before it goes in `facts/registry.json`.

## 1. sc-income-tax-2026 (new)

- fact: For tax years after 2025, South Carolina taxes the first $30,000 of taxable income at 1.99 percent and the rest at 5.21 percent (5.21 percent minus $966). It starts from federal adjusted gross income and replaces the federal standard deduction with its own SCIAD ($15,000 single, $30,000 joint, phased out by income). Act 110 of 2026.
- source: https://dor.sc.gov/sites/dor/files/policies/IL26-20.pdf ; https://www.scstatehouse.gov/code/t12c006.php (12-6-510(C))
- asOf: 2026-11-01. staleBy: 2027-02-15 (the top rate can fall from tax year 2027 on the February 15 forecast).
- ownerPage: /buyers/retirees/ (income tax for retirees); the relocating pages print their own comparisons.
- wrong patterns to scan for (read every hit before trusting the count):
  - `\btop (?:marginal )?(?:income )?(?:tax )?rate (?:of|is) 6(?:\.0)?\s?(?:%|percent)` and `\b6\.2\s?(?:%|percent)\b[^.]{0,80}\bincome tax` (2024 and 2025 rates printed as current)
  - `\b3 brackets\b|\bthree (?:income )?tax brackets\b` near "South Carolina"
  - `\bfederal standard deduction\b[^.]{0,80}South Carolina` (SC no longer adopts it)
- Why: the live retiree page states income tax rules from before Act 110. A scan of the built site on 2026-11-01 found: /sell/capital-gains/ says "The 2025 top rate was 6.0 percent" (true for 2025; the 2026 rate is 5.21 percent, so the page may need a 2026 line); /buyers/relocating/from-connecticut/, /from-massachusetts/ and /from-virginia/ mention a "standard deduction" (check each hit: if it describes South Carolina using the federal standard deduction, it is wrong from 2026). Batch 2026-11-a also rebuilds /buyers/relocating/why-myrtle-beach/ and /which-town/; their writers should use this row.

## 2. sc-social-security-untaxed (new)

- fact: South Carolina does not tax Social Security benefits (12-6-50(4) does not adopt IRC section 86).
- source: https://www.scstatehouse.gov/code/t12c006.php
- asOf: 2026-11-01. staleBy: 2027-11-01. ownerPage: /buyers/retirees/.
- wrong: `South Carolina[^.]{0,60}\btaxes? (?:part of |some of )?Social Security\b` (read each hit; "does not tax" must stay quiet).

## 3. Extend `sc-age-65-deduction`

- Add to the fact: military retirement pay is fully deductible at any age (12-6-1171(A)), and from 2026 the age-65 deduction sits beside the new SCIAD (both are 12-6-1140 deductions). The existing row's "do not stack" rule is unchanged.

## 4. homestead-exemption-timing (new)

- fact: The $50,000 homestead exemption needs one year of South Carolina residency and age 65 by December 31 of the year before; apply to the county auditor before July 16 for that year's bill, or before the first penalty date to have that year's bill reduced (12-37-250(A)(1), (3), (4)(a)).
- ownerPage: /buyers/property-taxes/. Used here.
- wrong: `homestead[^.]{0,80}\bautomatic(?:ally)?\b` (it never is).

## Stories

No new stories. The page uses four existing ones as recorded (`off-season-open`, `blackmoor-to-seasons`, `ny-client-tax-drop`, `pa-buyers-retirees` / `client-origins`).

Two client claims on the live page are not in the story bank and are cut: the New York couple saving "over $20,000 a year", and "clients whose kids now attend Coastal Carolina University tuition-free". If the owner has these on record, he can add them to `stories/stories.json`; until then they stay off every page.

## Verifier notes on these proposals (2026-11-02)

- Item 3: "both are 12-6-1140 deductions" is wrong. The age-65 deduction is 12-6-1170(B); the SCIAD is 12-6-1140(15). Also 12-6-1170(C): the age-65 deduction is reduced by the same person's military retirement deduction. Fix the wording before the row goes in.
- Item 4: the application goes to the county auditor "and to the governing body of the municipality" where the home is (12-37-250(A)(4)(a)). Add that. The statute says nothing about applying only once; do not add "once".
- New, item 5, `homestead-2026-proviso`: For tax year 2026 only, a person who was eligible for the homestead exemption in 2025 gets an additional $25,000 exemption, $75,000 in all. Source: FY 2026-27 General Appropriations Act (H.5126, ratified R 276), Part IB, proviso 117.220, https://www.scstatehouse.gov/sess126_2025-2026/appropriations2026/tap1b.htm ; not among the governor's 14 vetoes (veto letter of August 17, 2026, which says "increasing the Homestead Exemption from $50,000 to $75,000"). ownerPage: /buyers/property-taxes/ (that page states $50,000 with no 2026 note; the lead should decide whether it needs one). staleBy: 2027-07 (a later budget may repeat or drop it). wrong: none yet; a $75,000 figure stated as the standing rule would be wrong.

## Review round 1 additions

- **sc-rental-72-days (new).** fact: A home taxed at the 4 percent rate keeps it only if it is not rented for more than 72 days in a calendar year. source: S.C. Code 12-43-220(c)(2)(i), https://www.scstatehouse.gov/code/t12c043.php ("not rented for more than seventy-two days in a calendar year"). ownerPage: /buyers/property-taxes/. wrong patterns to scan: `\b(?:14|fourteen) days\b[^.]{0,80}\b4 ?(?:%|percent)\b` (the 14-day federal rule mixed up with the 72-day state rule); read every hit.
- **myr-nonstops (new).** fact: The Myrtle Beach airport's route map lists more than 50 nonstop destinations on ten airlines (read 2026-11-02). source: https://www.flymyrtlebeach.com/flight-information/route-map/. ownerPage: /buyers/relocating/getting-around/. staleBy: 2027-02. Two pages now print it (getting-around and retirees).
