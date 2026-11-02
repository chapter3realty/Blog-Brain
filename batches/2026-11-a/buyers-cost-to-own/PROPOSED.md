# Proposed registry rows: /buyers/cost-to-own/

Researcher, 2026-11-02. For the lead. Nothing here is applied.

## 1. Update `rental-vs-residence-tax` (facts/registry.json)

The entry says a rental's tax is "about 3.3 times (unincorporated) to 4.3 times (City of Myrtle Beach)". The 4.3 used the city credit of 67.45 percent (2025). On 2026 bills the credit is 53.4 percent (facts row 11), and the same $350,000 house gives 3.8 in the city, 3.3 outside city limits, 3.0 in North Myrtle Beach, 3.1 in Surfside Beach and 2.5 in Conway (facts row 13; `data/2026-11-a/buyers-cost-to-own/examples.json` "tax_chart_same_house"). /buyers/property-taxes/ already says "about 2.5 to 3.8 times".

Proposed fact: "On 2026 millage, a second home or rental pays about 2.5 times (Conway) to 3.8 times (City of Myrtle Beach) the property tax of the same house as a legal residence; about 3.3 times outside city limits." Add a `wrong` pattern for "4.3 times" near "tax" so an old page that still prints it is caught. Firing control: "about 4.3 times an owner-occupant's". Quiet control: "about 3.8 times in the City of Myrtle Beach".

## 2. New: `horry-home-insurance-median`

"Horry County owners of a one-family house pay a middle of about $2,000 a year for home insurance (fire, hazard and flood); about $1,400 in the rest of South Carolina (Census ACS PUMS 2024 1-year)." Source: facts row 17. Likely to appear on /buyers/coastal-insurance/, /buyers/retirees/ and the relocating pages, which have no local figure today (RET open question 1; invest-run-the-numbers "Not verified"). staleBy 2027-10-01.

## 3. Flag for the RET verifier

RET 24 says "Every house in unincorporated Horry County also pays a stormwater fee of $89.40 a year". AFF 72 shows a 2026 Carolina Forest bill in tax district 800 with "Fees $0.00". "Most" is safe; "every" is not proven.
