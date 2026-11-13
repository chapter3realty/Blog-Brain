# Verify: /buyers/property-records/tax-bill/

Independent verifier, 2026-11-13. I did not research this page. I fetched every source again myself (37 pages, PDFs, the tax sale .docx and both tax sale lists), read the SC Code sections at scstatehouse.gov, probed the county tax portal myself, and re-ran `scripts/delinquent.py`. My copies are in the scratchpad (`verify-taxbill/`), outside both repos. The bill I opened is a county-owned parcel's; no owner, address, PIN or bill of a person is printed here.

**Counts (50 rows):** 44 verified, 6 corrected (rows 8, 26, 31, 32, 34, 38), 0 struck whole. Two parts of rows are struck: the open reading of the "Residential Exemption" bill line (row 37), and "the 21st Avenue office is closed" (row 30). Struck list: `batches/2026-11-d/facts/buyers-property-records-tax-bill-struck.json` (8 entries; each fires on its struck wording and its approved wording fires none).

## Corrections

**Row 8. Card fees.** The fee figures match the Tax Payer Services page word for word. But the Real Property Tax page says "payments paid in person with a credit or debit card, online and by phone are subject to the same convenience fees", and also that "Convenience fees apply to all tax payments paid online". The two county pages disagree on the in-office debit charge ($3.95 flat against 2.35%).
- Use: Online, e-check is free and a card is 2.35%. By phone, e-check is $0.50 and a card is 2.35% plus $0.50. In the office, paying by card costs a fee; a credit card is 2.35%. The county keeps none of it. [Tax Payer Services, "Tax Payments & Receipts"]
- Cut the $3.95 debit figure until the Treasurer confirms it. This touches `table-payment-fees.csv` (in person, debit) and must-answer row 3.

**Row 26. Dealer-purchase vehicle bill.** The vehicle page says the license is suspended if the bill is not paid within 120 days. The Delinquent Tax page gives the fuller rule: "Taxes are delinquent 120 days from the date of your new car purchase. After 120 days a final notice is mailed giving additional 30 days to pay. If taxes remain unpaid after 30 days from the date of the final notice a suspension will be placed". SC Code 12-37-2740(A) requires the 30-day letter first.
- Use: A dealer-purchase bill is due when it comes. If it is still unpaid 120 days after the purchase, a final notice gives 30 more days before the driver's license and registration are suspended. The DMV charges $50 to reinstate. [Delinquent Tax page; SC Code 12-37-2740]
- The rest of row 26 is verified.

**Row 31. Appeal deadlines.** The $1,000 trigger, the first assessment and the 90 days are right (SC Code 12-60-2510(A)(1), (A)(3): 90 days "after the assessor mails the property tax assessment notice"). The no-notice rule is wrong. The county's Questioning Values page still shows old text: object by January 15 or waive the protest. The current statute says: "In years when there is no notice of property tax assessment, the property taxpayer may appeal ... at any time. The appeal must be submitted in writing to the assessor. An appeal submitted before the first penalty date applies for the property tax year for which that penalty would apply. An appeal submitted on or after the first penalty date applies for the succeeding property tax year." [SC Code 12-60-2510(A)(4)]. The first penalty date is January 16 (row 13).
- Use: Object in writing within 90 days after a value notice is mailed. In a year with no notice, you may appeal in writing at any time; one filed by January 15 counts for that year's bill, and a later one counts for the next year. [SC Code 12-60-2510(A)(3) and (A)(4)]
- PLAN section 7's first sentence and must-answer row 7 carry the struck wording. Fix both.
- Count from the mailing date, not "receiving" (the county's 2024 flyer says "receiving").

**Row 32. Appeal steps.** The four 30-day steps are right in SC Code 12-60-2520, -2530 and -2540. The court is the Administrative Law Court (the county page uses the old name, "Administrative Law Judge Division"). The "11 members" is only on the county summary page, which row 31 shows carries superseded text. No roster was found.
- Use the steps; cut the member count.

**Row 34. Who may represent an owner.** The county page cites "12-4-335", which is not in the current Code. Current law is SC Code 12-60-90(C). It allows (1) the people who may represent a taxpayer before the IRS under Circular 230 sections 10.3(a) to (c) and 10.7 (attorneys, CPAs, enrolled agents, the taxpayer himself, an immediate family member, and certain partners, officers, full-time employees and fiduciaries), and (2) "a real estate appraiser who is registered, licensed, or certified pursuant to Chapter 60, Title 40 ... in a matter limited to questions concerning the valuation of real property." It covers the administrative process, including the county board; not the Administrative Law Court.
- Use: A lawyer, a CPA, an enrolled agent, or a licensed or certified appraiser on a value question may present the appeal for you, and you may do it yourself. A real estate agent is not on the list. [SC Code 12-60-90(C)]
- The offer copy stands: we send recent sales; we do not file or argue the appeal.

**Row 38. Second homes and furniture.** The PT-100 rule is verified: "If you owned a property in Horry County on December 31st of the prior year and this was not your legal residence, you are required to complete and submit a Personal Property Return." The page does not say "yearly" or that a separate bill follows. State law exempts "all household goods and furniture used in the home of the owner", but not those in "apartments, or other places of business" [SC Code 12-37-220(A)(5)]. The county's Real Property Tax page lists FFAE notices among the October bills, and Georgetown's FAQ ties the second notice to rentals (row 48).
- Use: If a property was not your legal residence on December 31, the Auditor asks for a personal property return (PT-100). Furniture in a rental is taxed on its own notice (FFAE). [Tax Payer Services; Real Property Tax page; SC Code 12-37-220(A)(5)]
- Do not say every second home gets a furniture bill.

## Parts struck

- **Row 37, the open item.** No bill, county page or search result ties the bill's "Residential Exemption" line to the 4% legal residence credit. The county FAQ example calls it a "School credit". Do not tell a reader that a $0 on that line means the 4% is off. The row's own claim (4% plus the school operating credit; apply to the Assessor) is verified on the Guide to Assessment page.
- **Row 30, the 21st Avenue office.** The live Treasurer page and the live Auditor page both list Myrtle Beach at 332 Hinson Dr, and the county's release of 2026-10-16 lists the Treasurer, Auditor and Assessor at the Central Coast Complex. I could not call. Say the Myrtle Beach office is now at 332 Hinson Drive. Do not say the old office closed. The release is dated October 16, 2026, so "new" is fair. The site fixes for the lead stand (moving-checklist, landlord-rules).

## Notes on verified rows

- **Rows 3 to 7, the portal.** My own probe, with no account or saved cookie: an owner-name search ("HORRY COUNTY", tax year 2025) returned 25 bills; a PIN search and a map number search each returned the bill; a notice number search returned one bill (hint: "Please enter your Notice number. Example: 099778899."); two address strings typed in the name box returned "No records matched the search criteria provided." The columns and the bill labels are as listed. A PIN search labels its column "PIN" instead of "Identification No.". The bill I opened shows "Issue Date: 09/26/25". The year list is 2016 to 2026; say "about ten years".
- **Row 9.** The portal also says: "In order to locate all delinquent Personal Property taxes, you must search by Name or Tax ID#."
- **Row 11.** The phone number is the real property page's; see row 50.
- **Row 12.** The county's 2024 release says bills go out "the first week of October". "In early October" is also safe.
- **Row 13.** SC Code 12-45-180(A) starts the 3% after January 15 "or thirty days after the mailing of tax notices, whichever occurs later". With October bills, January 16 is later; the county's dates hold.
- **Row 17.** The release is dated 10/7/2025 (for the bills due January 15, 2026). No 2026 release was found. The sentence is general and holds.
- **Row 18.** In-person installment payments are check or cash; by mail, check only.
- **Row 20.** The letter is dated August 25, 2017, and is still linked as "Installment Letter for Attorney's" on the live installment page. Its footer gives the old 21st Avenue address; do not take an address from it. SC Code 12-45-75(D) and the ordinance (item 6) agree: the payments are a credit applied after the final payment.
- **Row 21.** The SC Association of Counties survey is a secondary source. The primary source agrees: Ordinance 66-07, third reading May 1, 2007, "effective for the 2008 property tax year". Cite the ordinance. The installment page's "I am pleased to introduce" is old text; do not call the plan new.
- **Row 23.** The sale is "Tuesday, December 1, 2026, beginning at 9:00 a.m." The opening bid is made on behalf of the Forfeited Land Commission. "Early December", no date.
- **Row 24.** The county files I downloaded are byte-identical to the researcher's. `delinquent.py` re-run gives identical output. My own count: 1,772 data rows, no blank PIN, no non-numeric bid, median $2,708.86, 362 under $1,000, 843 under $2,500 (47.6%, "48%"), 152 over $10,000; mobile homes 459, median $585.54. The real estate list has some mobile homes with land. Say "1,772 properties on the list as of November 12" from the data file, not "pieces of real estate" if the writer wants to be exact.
- **Row 25.** I checked the units. The parcel layer (302,630 features, as gis F17) carries condo units as their own records: 60 of 60 sampled "UNIT" PINs from the list and 60 of 60 others are in the layer. Both counts are PINs, so the share holds: 1,771 / 302,630 = 0.585%, about 1 in 171. "About 1 in 170 parcels", tied to the list's date.
- **Row 28.** The FAQ's role sentence is right, but the same FAQ says the last reassessment was 2014 and the next 2019. That text is stale; use only the role sentence.
- **Row 29.** The Auditor page writes the South Strand address as "9630 Scipio Lane, Suite K, Myrtle Beach, SC 29588"; the Treasurer page writes "Surfside, SC 29588". Use the Treasurer's. Each Treasurer office also lists (843) 915-6470 (not labeled).
- **Row 33.** The statute's trigger is "if it is reasonably expected" the appeal will not be resolved by December 31; the difference is then billed or refunded with interest.
- **Row 35.** The "Property Appeal" link opens a county OnBase form that needs a browser to render; I could not read its fields. Link the Tax Payer Services page, as the row says.
- **Row 36.** The 15% cap is on the market value used for tax, for all real property (not only homes), and it is not a cap on the bill. It does not apply to improvements or the year after a sale (SC Code 12-37-3140(B)).
- **Row 39.** The tax refund search is "by Name or Notice number", 3 to 6 weeks, and pre-2022 funds go to the State Treasurer. The quote "To see if you have unclaimed funds, search our refund database" is from the stormwater section (3 to 4 weeks); do not mix the two.
- **Row 44.** Georgetown's form is headed "for Tax Year 2026" but says "MUST APPLY BY JANUARY 15,2027" and asks that 2026 taxes be paid first. Write "by January 15", no year, as the row says.
- **Row 45.** Georgetown's sale this year is Monday, December 7, 2026. "In December" holds.
- **Row 46.** Georgetown's page also says "you will have until the deadline stated on your notice". "90 days from the notice" holds.
- **Row 49.** The figures match `scratchpad/kw/volumes.txt`. "assessor property search 260" is "horry county tax assessor property search". The file also has "property tax records by address" 170, which this page cannot serve with the portal (no address search). Planning only.
- **Row 50.** The two numbers are on the two county pages as stated. A web search found no third county source. Give the Treasurer's main line, (843) 915-5470, and no pay-by-phone number.

## Should not be published

- The $3.95 in-office debit fee (row 8), until the Treasurer confirms it.
- "By January 15 or you lose the right to protest" in a year with no notice (row 31).
- Any reading of the "Residential Exemption" line as the 4% status (row 37).
- "The 21st Avenue office is closed" (row 30).
- Any owner, PIN, address or bill from the tax sale lists or the portal. None is in this file.
