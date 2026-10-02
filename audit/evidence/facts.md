# Fact audit: chapter3realty.com

Audit date: 2026-10-01 (sources read 2026-10-01 and 2026-10-02).
Copy audited: the clean deployed copy at `scratchpad/live/chapter3realty/` (132 `index.html` files). Text was extracted from each page's HTML, scripts and styles removed, then searched. Calculators were read from each page's inline script and from `assets/taxcalc.3f0c25088b.js`.
Only primary sources are cited: SC Code (scstatehouse.gov), SCDOR, Horry County, City and town pages and fee schedules, SC Housing, US Census, HUD, IRS, Freddie Mac. A news item or search summary is never cited as the source of a value. Where a primary source could not be opened, the item is marked unverifiable.

Severity scale:
- **High**: a reader acting on the sentence could lose money, miss a deadline, or break a rule.
- **Medium**: wrong or stale, but the reader is unlikely to act on it alone.
- **Low**: imprecise wording, a mislabel, or a small drift.

## Counts

| Group | Count |
|---|---|
| Confirmed errors (wrong as stated) | 19 |
| Cross-page conflicts | 12 |
| Internal contradictions within one page | 5 |
| Stale items as of 2026-10-01 | 14 |
| Calculator defects or stale constants | 6 |
| Claims verified against a primary source | 56 |
| Unverifiable (no primary source reachable or none exists) | 14 |

---

## 1. Confirmed errors

| # | Page(s) | Exact quote | Correct value | Primary source | As of | Severity |
|---|---|---|---|---|---|---|
| E1 | /submarkets/north-myrtle-beach/ | "Operators need an annual short-term-rental permit and a business license, the property must pass a physical and fire-safety inspection, and every rental must have a Responsible Local Agent on file. An owner can serve as their own agent only if they live within 30 miles" ; status box: "Allowed with an annual STR permit, business license, and a Responsible Local Agent (out-of-state owners must appoint one)"; FAQ: "Yes, but you must appoint a Responsible Local Agent within 30 miles of the property" | No STR permit, inspection or local-agent rule is in force. The city says: "There is currently no special zoning or permit process required beyond standard licensing." The local-agent ordinance is a 2024 draft. | https://www.nmb.us/833/Short-term-Rentals | read 2026-10-01 | High |
| E2 | /hoa/south-carolina-hoa-laws/ (twice), /hoa/benefits/, /hoa/developer-control-turnover/ | "Homeowners must be given notice at least 48 hours before the meeting at which a decision to raise the annual budget is made." ; "The law sets that floor at 48 hours." ; "State law can allow as little as 48 hours." | The 48-hour rule does not apply to an association incorporated under the SC Nonprofit Corporation Act, 27-30-140(2). Most associations are. /hoa/dues-increases/ states the carve-out; these pages do not. | https://www.scstatehouse.gov/code/t27c030.php (27-30-140) | Code read 2026-10-01 | High |
| E3 | /hoa/south-carolina-hoa-laws/ | "Owners have access to inspect and copy the association's annual budget and membership list." | 27-30-150 limits that right to associations not subject to the Nonprofit Corporation Act. | https://www.scstatehouse.gov/code/t27c030.php (27-30-150) | 2026-10-01 | Medium |
| E4 | /buyers/coastal-insurance/ (lines in body and checklist) | "Close to the beach, roughly east of Highway 17 Business, South Carolina lets insurers exclude wind from the homeowners policy." ; "which side of Highway 17 Business it sits on" | In Horry County the wind pool "coastal area" is "all areas in Horry County east of U.S. Highway No. 17 or By-Pass 17, whichever is farther to the west." In Myrtle Beach that is the Bypass, not Business 17. The page understates the territory. | https://www.scstatehouse.gov/code/t38c075.php (38-75-310(5)(c)) | 2026-10-01 | High |
| E5 | /submarkets/carolina-forest/ | "The state wind pool's Horry County territory runs east of the Intracoastal Waterway's west bank and east of US 17 further south." | The Intracoastal Waterway line is the rule for Beaufort, Colleton and Charleston. Horry's line is US 17 or Bypass 17, whichever is farther west. The page's conclusion that Carolina Forest is outside the territory still holds, because Carolina Forest is west of the Bypass. | same, 38-75-310(5)(a) and (c) | 2026-10-01 | Medium |
| E6 | /submarkets/myrtle-beach/ | "The city defines short-term as under 90 days (not the state 30)" | The state line is also 90 days. Accommodations proceeds "supplied to the same person for a period of ninety continuous days are not considered proceeds from transients." | https://www.scstatehouse.gov/code/t12c036.php (12-36-920(A)) | 2026-10-01 | Medium |
| E7 | /buyers/relocating/from-pennsylvania/ | "up to $3,000 of retirement income before 65 and up to $10,000 from 65, per person, plus an age-65 deduction of up to $15,000, plus the standard deduction every filer gets." | The age-65 deduction is $15,000 "reduced by any amount the taxpayer deducts" as retirement income, so the two do not stack. From tax year 2026 there is no federal standard deduction on the SC return; the SCIAD replaces it and falls to $0 at federal AGI of $95,000 (single) or $190,000 (joint). | https://www.scstatehouse.gov/code/t12c006.php (12-6-1170(B)); https://dor.sc.gov/sites/dor/files/policies/IL26-20.pdf | IL 26-20 dated 2026-08-31 | High |
| E8 | /buyers/relocating/from-florida/ | "at 65 and older South Carolina deducts up to $15,000 of income per person on top of the standard deduction." ; "after a $30,000 standard deduction for a married couple" | Same as E7. No standard deduction from 2026. The $30,000 SCIAD applies in full only to joint AGI up to $80,000 and phases to $0 at $190,000. | IL 26-20 (above) | 2026-08-31 | High |
| E9 | /buyers/relocating/from-maryland/, /buyers/relocating/from-north-carolina/, /buyers/relocating/from-virginia/ | "a retirement deduction of up to $3,000 before 65 and up to $10,000 from 65, plus a separate age-65 deduction of up to $15,000." (NC, MD); VA: "plus a separate age-65 deduction of up to $15,000 per person against any income." | Reads as stacking ($25,000 at 65). The statute reduces the $15,000 by the retirement deduction claimed. Maximum combined per person at 65 is $15,000 (military retirement aside). Known trap in MISTAKES/HANDOFF. | 12-6-1170(B) | 2026-10-01 | High |
| E10 | /buyers/relocating/from-connecticut/, /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ | CT: "South Carolina starts a joint return with a $30,000 standard deduction" ; MA: "South Carolina's $30,000 joint standard deduction" ; VA: "South Carolina's standard deduction is $15,000 single and $30,000 joint" and "about twice Virginia's" | It is the SCIAD, not a standard deduction, and it phases out: single $15,000 up to $40,000 AGI, $0 at $95,000; joint $30,000 up to $80,000, $0 at $190,000. A typical relocating couple above $80,000 gets less, and above $190,000 gets none. | IL 26-20 | 2026-08-31 | High |
| E11 | /buyers/va-loans/ | "The Palmetto Heroes DPA provides $10,000 but raises your interest rate by an average of 2 percentage points. On a VA loan that might otherwise qualify at 6.5%, the DPA-adjusted rate could be 8.5%." | SC Housing describes the program as "$10,000 in forgivable down payment assistance and low, fixed-rate mortgage loans." No source supports a 2-point increase. The same page also says "plus a reduced interest rate". The sentence also states interest rates, which the site's own rules forbid. | https://schousing.sc.gov/news/sc-housing-launch-2026-palmetto-heroes-program-10000-down-payment-assistance-public-servants ; 2026 Program Guide https://schousing.sc.gov/sites/schousing/files/Documents/Homebuyers/Palmetto%20Heroes/2026%20Palmetto%20Heroes%20Program%20Guide%20(03.16.2026).pdf | 2026-03-16 | High |
| E12 | /invest/str-tools/ | "under a 2025 ordinance passed to protect lodging taxes" | The conversion overlay is Ordinance 2024-69, second reading December 10, 2024 (city agenda; code history "Ord. No. 2024-69, 12-10-24"). /invest/str-rules/ has the right date. | City agenda, recorded in research/invest-next/where-to-buy-facts.md line 50: https://www.cityofmyrtlebeach.com/agenda_details_T15_R388.php ; ordinance PDF https://www.cityofmyrtlebeach.com/2024-069%20Conversion%20Overlay_Short%20Term%20Rentals%20(1st).pdf | 2024-12-10 | Low |
| E13 | /buyers/relocating/which-town/ | "Murrells Inlet and Pawleys Island straddle the Horry and Georgetown county line" | Pawleys Island is entirely in Georgetown County (MISTAKES item 9). Murrells Inlet does straddle the line. | Census place record; MISTAKES.md #9 | 2026-10-01 | Medium |
| E14 | /invest/ hub, /invest/condos/, and 8 submarket pages (myrtle-beach, north-myrtle-beach, surfside-beach, murrells-inlet, garden-city, little-river, conway, pawleys-island) | invest hub: "the bill often runs close to double an owner-occupant's" ; condos: "assessed at South Carolina's 6 percent ratio, roughly double the owner-occupant rate" ; submarkets: "the effective tax on the same home can be close to double" | The ratio alone is 1.5 times. With the school operating exemption the bill is about 3.3 times (unincorporated Horry) to 4.3 times (City of Myrtle Beach), as /buyers/property-taxes/ computes from the same millage. "Close to double" understates a rental's tax by roughly $2,000 to $3,000 a year on a $400,000 house. | Horry County 2026 levy https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf ; 12-43-220 https://www.scstatehouse.gov/code/t12c043.php | levy certified 2026-07-27 | High |
| E15 | /sell/ | "South Carolina closing attorneys are required to withhold South Carolina's top individual rate" | The statute puts the duty on the buyer: "A lending institution, real estate agent, or closing attorney is not liable for the collection" but must remit what it did withhold. | https://www.scstatehouse.gov/code/t12c008.php (12-8-580(A),(D)(2)) | 2026-10-01 | Low |
| E16 | /invest/llc/ | "If the members live outside South Carolina on the day of the sale, the buyer withholds state income tax" | Residence of an entity seller is not the members' residence. A partnership is nonresident if its "principal place of business is located outside of this State"; a corporation if "incorporated outside of this State". A disregarded LLC is its owner. | 12-8-580(C)(1) | 2026-10-01 | Medium |
| E17 | /buyers/common-mistakes/ | "South Carolina charges deed stamps of $3.70 per $1,000 of purchase price ... On a $350,000 purchase that is $1,295 in deed stamps alone" (in a buyer budgeting section) | The rate is right. The fee "is the liability of the grantor", the seller, except on a master-in-equity or government deed. A buyer reading this budgets $1,295 they do not owe. Other pages (/buyers/closing-costs/, /sell/) correctly assign it to the seller. | https://www.scstatehouse.gov/code/t12c024.php (12-24-10, 12-24-20) | 2026-10-01 | Medium |
| E18 | /buyers/common-mistakes/ | "Since August 2024, South Carolina requires a written buyer representation agreement before an agent can show you homes" | The touring agreement comes from the NAR settlement practice rules (MLS policy), not SC law. SC law requires writing to create an agency relationship (40-57-30) but does not bar showing a customer without one. | https://www.scstatehouse.gov/code/t40c057.php | 2026-10-01 | Low |
| E19 | /buyers/relocating/from-maryland/, /buyers/relocating/from-virginia/ | "The median bill here is $1,337." | $1,337 is the South Carolina statewide median (ACS 2024 1-year), as the site's own tax data file labels it (`medianPropertyTaxBill`). The research file records the Horry County median as $944 (ACS 2020-24). Other pages say "the median South Carolina bill is $1,337", which is correct. | data/relocating/state-tax.json; research/relocating/state-tax-table.md 1.3 (Census ACS B25103) | ACS 2024 | Low |

---

## 2. Cross-page conflicts

| Fact | Page A | Page B | Page C / others | Which is correct | Source |
|---|---|---|---|---|---|
| C1. North Myrtle Beach STR permit | /invest/str-rules/: "No special permit beyond that today ... It has not been adopted as of July 2026" | /submarkets/north-myrtle-beach/: annual STR permit, inspection, Responsible Local Agent within 30 miles (see E1) | /invest/str-tools/: "It has not been adopted as of September 2026"; /invest/where-to-buy/: "adopted none by the date on this page" | No permit. A, C correct; B wrong. | https://www.nmb.us/833/Short-term-Rentals |
| C2. 6% vs 4% tax gap | /buyers/property-taxes/: "roughly 3.3 times ... about 4.3 times" | /invest/, /invest/condos/, 8 submarket pages: "close to double" / "roughly double" | /invest/financing-multiple-rentals/: "about three times"; /buyers/closing-costs/, /invest/strategies/fix-and-flip/: "several times"; /sell/inherited-house/: "roughly double or more" | 3.3 to 4.3 times on 2025 and 2026 millage | Horry 2026 levy; 12-43-220 |
| C3. Lodging tax, City of Myrtle Beach | /invest/str-rules/: 13% | /submarkets/myrtle-beach/: "a business license and the 10 percent lodging tax" | /invest/airbnb-income/: "about 13 percent" | 13% total. 10% is only the state and local sales-tax layer on accommodations (SCDOR ST-575 lists 10% for Myrtle Beach); county hospitality 1.5%, city hospitality 1% and city accommodations 0.5% sit on top. | https://dor.sc.gov/sites/dor/files/forms/ST575.pdf |
| C4. Annual visitors | /invest/j1-rentals/: "about 17 million visitors a year" | /invest/airbnb-income/: "18.2 million visitors ... in 2025" | /invest/, /invest/condos/: "roughly 19 million"; /sell/out-of-state-buyers/: "19M+" | No primary source opened. Use one figure with its year and source on every page. | unverifiable (tourism bureau figure, not government) |
| C5. Out-of-state buyer share | /buyers/relocating/: "40 percent of Myrtle Beach buyers relocate from out of state" | /sell/out-of-state-buyers/: "60%+ Buyers relocate from out of state" | none | Neither page cites a source. HANDOFF lists this as unresolved. | unverifiable |
| C6. STR occupancy | Submarket "illustrative" charts: annual averages 44% to 53%, July peaks 54% to 91% (Myrtle Beach Jul 90%, Jan 19%; Surfside Jul 91%) | Same pages, AirROI box: annual occupancy 30.3% to 37.7% (MB 33.2%) | /invest/airbnb-income/: MB July 58.7%, January 23.4%, annual "31 to 35 percent of all calendar nights"; /invest/long-term-rental/ calculator default 62%; /invest/rental-returns/: "60 percent, which is what a well-run listing books" | AirROI data (2026-08-08) is the only sourced figure. The illustrative curves run about 15 to 20 points above it and contradict it on the same page. Note: HANDOFF's "AirROI 41.5 to 48.9%" no longer matches the live pages. | data/str-market.json (AirROI, dataAsOf 2026-08-08) |
| C7. Typical home value | /buyers/buying-in-myrtle-beach/: "today's typical value near $310,000" (FHFA-scaled) | 15+ relocation pages and /invest/how-long-to-hold/: "$342,000" / "$342,010" (Zillow, July 2026) | /submarkets/carolina-forest/: "Horry County median sits near $329,000"; /sell/: "single-family median ... about $360,000" | Different measures. The $310,000 figure conflicts with the Zillow figure used everywhere else for the same "typical value". Pick one measure per claim and name it. | research/invest-next/hold-facts.md (Zillow ZHVI) |
| C8. Conversion overlay date | /invest/str-rules/: "In December 2024" | /invest/str-tools/: "a 2025 ordinance" | none | December 10, 2024 (E12) | city agenda |
| C9. McLeod Carolina Forest hospital | /invest/what-is-being-built/: "cut its ribbon on August 27, 2026 ... opens this fall" | /buyers/relocating/healthcare/: "McLeod said in January 2026 that it remains on schedule to open in 2026" ; FAQ "slated to open fully in 2026" | /buyers/relocating/pros-and-cons/: "Three more hospitals are in progress. One is a 48-bed McLeod hospital in Carolina Forest." | what-is-being-built is current (McLeod release dated 2026-09-01, recorded in research/invest-next/construction-pipeline-facts.md line 73). The other two are stale. | McLeod Health release (hospital's own) |
| C10. Pawleys Island county | /buyers/relocating/which-town/: straddles the county line | /invest/where-to-buy/: "the town of Pawleys Island are in Georgetown County" | /submarkets/pawleys-island/ | Georgetown County only (E13) | MISTAKES #9 |
| C11. Murrells Inlet county | /invest/where-to-buy/: "Murrells Inlet, Litchfield and the town of Pawleys Island are in Georgetown County." | /submarkets/murrells-inlet/: "straddles Horry County to the north and Georgetown County to the south" | Property tax calculators place "Murrells Inlet / Garden City" on Horry millage only | Straddles. Horry levies a "Murrells Inlet - Garden City Fire District" (28.0 mills), so part is in Horry; the south side is Georgetown. | Horry 2026 levy |
| C12. Buyer closing costs | /buyers/buying-in-myrtle-beach/, /buyers/common-mistakes/: "2-4%" | /buyers/closing-costs/: "2 to 5 percent of the price in closing costs and prepaids" | /invest/how-long-to-hold/: "about 3 percent" | Not a factual conflict if prepaids are counted on one side only. Align the wording. | n/a | 

---

## 3. Internal contradictions within one page

| # | Page | Statement 1 | Statement 2 | Resolution | Severity |
|---|---|---|---|---|---|
| I1 | /invest/llc/ | "Single-member or multi-member changes nothing about the deed rules or the loan." | Same page: a multi-member LLC owes no recording fee only "when the only consideration is an interest in the company", and "A deed to a multi-member LLC is exempt only when the contribution is tax-free under the federal partnership rule". The single-member exemptions are unconditional (12-37-3150(B)(11); SCDOR fee manual). | Delete "deed rules" from the sentence or say the multi-member exemptions are conditional. | Medium |
| I2 | /submarkets/north-myrtle-beach/ | Line 5: "rentals allowed citywide, and a licensing regime still in draft." | Lines 86, 131, 136, FAQ: permit, inspection and local agent described as in force (E1). | The draft statement is correct. | High |
| I3 | /buyers/va-loans/ | "Palmetto Heroes program through SC Housing provides $10,000 in forgivable down payment assistance plus a reduced interest rate" | "raises your interest rate by an average of 2 percentage points" | SC Housing: low fixed rate (E11). | High |
| I4 | /market-reports/ hub | Card: "Myrtle Beach market report: July 2026 ... Every number sourced." | Body: "Until the monthly report launches, these pages carry our sourced Grand Strand numbers." and FAQ: "The figures here are illustrative." | The report exists; the hub text is from before launch. | Low |
| I5 | /invest/non-warrantable-condos/ | Body: "A newer change taking effect in July 2026 softens part of this: the share of the building's deductible tied to your own unit gets capped at 50,000 dollars" | FAQ: "A conventional-lending rule updated in early 2024 requires ... a deductible no higher than 5 percent of that coverage" with no mention of the July 2026 change | HANDOFF: Fannie Mae LL-2026-03 replaced B7-3-04, effective for applications from 2026-07-01. The FAQ states the superseded rule as current. Body wording is future tense and is now past. Fannie Mae blocked the fetch (403), so the $50,000 figure is unverified here. | Medium |

---

## 4. Stale items as of 2026-10-01

| # | Page(s) | Quote | What changed | Source | Severity |
|---|---|---|---|---|---|
| S1 | /buyers/property-taxes/, /buyers/cost-to-own/, /buyers/closing-costs/, /invest/rental-returns/ (calculators and copy) | "the county's certified tax year 2025 millage"; option values North Myrtle Beach 216.2, Conway 269.3 | Horry County certified 2026 levies on 2026-07-27, and 2026 bills mail around October 1. North Myrtle Beach rose from 45.0 to 50.0 mills (total 221.2). Conway rose from 98.1 to 101.3 (total 272.5). Loris 108.0 to 111.0. County 52.1, school operating 109.1, school debt 10.0, Myrtle Beach 83.4, Surfside 43.0, fire 20.2 + 1.5, Murrells Inlet-Garden City fire 28.0, waste 8.1 unchanged, so the 201.0, 254.6, 214.2 and 207.3 totals still hold. | 2026: https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf ; 2025: SC Association of Counties, https://www.sccounties.org/sites/default/files/uploads/resource-files/property-tax-rates-by-county-2025.pdf p.18-19 | Medium |
| S2 | /buyers/property-taxes/ | "Real numbers for a $400,000 house, tax year 2025" and "the Myrtle Beach TDF credit at the 2025 level" | 2026 bills are now issuing. The page itself says the city cut the TDF credit for 2026, so the city 4% figure ($1,430) is known to be low for 2026. 2026 TDF credit percent not verified. | Horry 2026 levy | Medium |
| S3 | /market-reports/july-2026/ and /market-reports/ hub | "Myrtle Beach housing market report: July 2026" (June 2026 data, published July 19, 2026) | Latest report is three months old. No August or September report. | n/a | Medium |
| S4 | /market-reports/july-2026/ | "The national average 30-year fixed was 6.55 percent for the week of July 16, 2026 ... and remain below the 6.75 percent of a year ago." (FAQ "What are mortgage rates right now?") | Correct for July 16 (6.55). On 2026-10-01 Freddie Mac shows 7.28 percent, above the 6.34 percent of 2025-10-02. The "right now" answer is now wrong in direction. The site rules also forbid stating a rate. | https://www.freddiemac.com/pmms/docs/PMMS_history.csv | Medium |
| S5 | /buyers/va-loans/ | "Palmetto Heroes adds $10,000 in forgivable help for qualifying service members and veterans" | The 2026 program opened March 16 and closed April 13, 2026 after 272 loans. Not available until the 2027 round. | https://schousing.sc.gov/news/sc-housings-palmetto-heroes-program-closes-26-registering-272-home-loans | Medium |
| S6 | /buyers/programs/ | "Source ... schousing.sc.gov · Updated 10.01.2025"; "sourced directly from ... documentation, dated 10.01.2025" | Source is 12 months old. SC Housing issued 2026/2027 limits effective for reservations from 2026-06-01 (limits PDF below). Horry is still a targeted county ("any county not listed"). | https://schousing.sc.gov/sites/schousing/files/Documents/Homebuyers/2026-2027%20(LENDER)SC%20Housing%20Homebuyer%20Home%20Price%20and%20Income%20Limits%20(06.01.2026).pdf | Low |
| S7 | /buyers/first-time-home-buyer-myrtle-beach/ | "South Carolina housing programs (through SC Housing) ... offer down-payment assistance, first-time-buyer loans, and a mortgage tax credit." | SC Housing's 2026/2027 limits chart says "MCC ends June 30". The mortgage credit certificate is no longer offered. | same limits PDF | Medium |
| S8 | /buyers/relocating/healthcare/, /buyers/relocating/pros-and-cons/ | "remains on schedule to open in 2026"; "Three more hospitals are in progress. One is a 48-bed McLeod hospital in Carolina Forest." | Ribbon cut August 27, 2026; opening this fall (C9). | McLeod release via research/invest-next/construction-pipeline-facts.md | Low |
| S9 | /invest/non-warrantable-condos/ | "A newer change taking effect in July 2026" | Already in effect (I5). | HANDOFF "Facts that were expensive to establish" | Low |
| S10 | /invest/student-rentals/ | "Fall 2026 begins August 19 and ends December 11." ; "Fall move-in runs August 12 to 16" | Dates are past. True for the current term, but a landlord planning ahead needs Fall 2027. | CCU calendar (not re-opened) | Low |
| S11 | /invest/student-rentals/, /invest/mid-term-rentals/ | "The university had 12,006 students in fall 2025, a record" | Fall 2026 census enrollment is normally published in September. Not checked. | CCU (not re-opened) | Low |
| S12 | /invest/str-rules/ | "Rules verified July 19, 2026"; "It has not been adopted as of July 2026" | Still accurate on 2026-10-01 per the city page, but the date is 2.5 months old on the page that says North Myrtle Beach "likely will" change. | nmb.us/833 | Low |
| S13 | /invest/airbnb-income/ | "Airbnb is migrating hosts to a host-only fee this year" | "This year" with no year. Rewrite with a date. | n/a | Low |
| S14 | /invest/what-is-being-built/ | "US 501 from SC 31 to SC 544 and the downtown 501 realignment finish in fall 2026." ; "The theater was scheduled for summer 2026 and is now expected toward the end of the year." | Due now. Re-check before the next update. | not checked | Low |

Not stale: `data/str-market.json` was retrieved 2026-08-15 with a 90-day refresh rule, so the AirROI figures are due by 2026-11-13. The SC 2025 return deadline is October 15, 2026 (SCDOR extension); no page was found stating April 15 for 2025 returns.

---

## 5. Calculator constants

| Calculator (page) | Hard-coded constants | Check | Result |
|---|---|---|---|
| Property tax (/buyers/property-taxes/) | SCHOOL_OPS 109.1; TDF 0.6745; ratios 0.04 / 0.06; homestead $50,000; mills: MB 254.6 (city 83.4), NMB 216.2, Surfside 214.2, Conway 269.3, MI/GC 207.3, unincorporated 201.0 | 2026 levy | NMB and Conway stale (S1). TDF 0.6745 is the 2025 level; the page says it fell for 2026 (S2). Murrells Inlet option uses Horry millage only; a Georgetown-side parcel is mispriced. Homestead applied before the TDF credit; acceptable. |
| Cost to own (/buyers/cost-to-own/) | Same millage and TDF; default rate 7 percent; insurance $160/mo; maintenance 1 percent | 2026 levy | Same millage issue. Default interest rate field set to 7: a default is not a quote, but it is a stated rate on a page that must not state one. |
| Closing costs (/buyers/closing-costs/) | Same millage; origination 1 percent; appraisal $575; attorney $850; owner's title $330 + $2.10 per $1,000 over $100,000; lender's title $125; CL-100 $110; recording $40; VA funding fee 2.15 / 1.5 / 1.25 percent first use, 3.3 percent subsequent; deed fee $1.85 per $500 (ceil); default rate 6.5; commission 5.9 | VA fee tiers match the current VA table; deed fee matches 12-24-10 including "fractional part"; millage stale (S1); title and attorney figures unverifiable | Partly stale |
| Net proceeds (/sell/net-proceeds/) | deed fee $1.85 per $500 | 12-24-10 | Verified |
| Capital gains (/sell/capital-gains/) | RATE 0.0521; DED 0.44; 2026 0% bracket to $49,450 / $98,900; 15% to $545,500 / $613,700; NIIT 3.8% over $200,000 / $250,000; recapture 25%; 121 exclusion $250,000 / $500,000 | SC values verified (IL 26-20, 12-6-1150, 12-8-580). Federal bracket numbers match Rev. Proc. 2025-32 as quoted on the page but the IRS document was not re-opened. Recapture is taxed at a flat 25 percent, which is the maximum; lower-bracket sellers are overstated. SC tax is a flat 5.21 percent of 56 percent of the gain, ignoring the 1.99 percent bracket and the $966 subtraction; small overstatement. | Minor |
| Relocation tax calculator (cost-of-living + 10 from-state pages; `assets/taxcalc.3f0c25088b.js`) | SC brackets 1.99% to $30,000, 5.21% above; `std: { s: 15000, m: 30000 }`; retirement $3,000 / $10,000; age-65 $15,000 less retirement and military; HORRY_MILLS 201.0; SCHOOL_OPS 109.1; HOMESTEAD 50,000 | The bracket math equals SCDOR's "(5.21% x TI) minus $966". The deduction is a flat $15,000 / $30,000 with no SCIAD phase-out. IL 26-20: single $15,000 reduced over AGI $40,000 to $95,000; joint $30,000 reduced over $80,000 to $190,000. | **Defect, High.** Understates SC tax for every household above $40,000 (single) or $80,000 (joint). Example: joint AGI $150,000, SCIAD is about $10,910, not $30,000; the calculator understates SC tax by about $995 a year. |
| Rental returns (/invest/rental-returns/) | RR_TAX: little-river 201, NMB 216.2, MB 254.6, carolina-forest 201, surfside 214.2, murrells-inlet 207.3, pawleys-island 233.9 + $96, conway 269.3; tax = price x 0.06 x mills; management 10 percent | 2026 levy | NMB and Conway stale (S1). Pawleys 233.9 mills + $96 not verified against Georgetown County. |
| Section 8 (/invest/section-8-rentals/) | FMR 1155 / 1258 / 1504 / 1823 / 1981 | HUD FY27_FMRs.xlsx | Verified |
| Long-term rental comparison (/invest/long-term-rental/) | price 350,000; rent 2,100; ADR 185; STR occupancy 62; LTR costs 35%; STR costs 50% | AirROI market average 30 to 38 percent | The 62 percent default is a full-time-host figure (the site's own airbnb-income page says "around 63 percent if you run it full-time like the median active host"). It is near double the market average shown on the submarket pages. Label it. |

---

## 6. Claims verified against a primary source

| # | Claim (page examples) | Verified value | Source | As of |
|---|---|---|---|---|
| V1 | 4% legal residence, 6% other (/buyers/property-taxes/ and ~40 pages) | 12-43-220(c) and (e) | https://www.scstatehouse.gov/code/t12c043.php | 2026-10-01 |
| V2 | Renting more than 72 days a year loses the 4% (/buyers/property-taxes/, /invest/str-rules/) | "not rented for more than seventy-two days in a calendar year" | 12-43-220(c)(2)(iv) | 2026-10-01 |
| V3 | Six months to report a change in use (/buyers/property-taxes/) | "within six months of the change" | 12-43-220(c)(2)(vi) | 2026-10-01 |
| V4 | One 4% residence per household; spouse and dependent children | certification text, 12-43-220(c)(2)(ii)-(iii) | same | 2026-10-01 |
| V5 | 4% application by the first penalty date (Jan 15 window) | Horry assessor: "before the first penalty date" | https://www.horrycountysc.gov/departments/assessor/guide-to-assessment/ | 2026-10-01 |
| V6 | Homestead: first $50,000, 65 by Dec 31 of prior year, resident one year | 12-37-250(A)(1) | https://www.scstatehouse.gov/code/t12c037.php | 2026-10-01 |
| V7 | Horry homestead application in person at the Auditor | "Application must be made in person at the Horry County Auditor's Office" | Horry assessor guide | 2026-10-01 |
| V8 | 15% cap on reappraisal increases over 5 years | "limited to fifteen percent within a five year period" | Horry assessor guide | 2026-10-01 |
| V9 | 25% ATI exemption, notify before January 31 | 12-37-3135(B)(2)(a), (C) | t12c037 | 2026-10-01 |
| V10 | Single-member LLC deed is not an assessable transfer | 12-37-3150(B)(11) | t12c037 | 2026-10-01 |
| V11 | Sale of more than half an LLC is an ATI; notify within 45 days; penalty $100 to $1,000 (/invest/llc/) | 12-37-3150(A)(8) | t12c037 | 2026-10-01 |
| V12 | School operating 109.1 mills (2025 and 2026) | 109.1 | 2026 levy PDF; SCAC 2025 | 2026-07-27 |
| V13 | Unincorporated 201.0 mills; MB 254.6; Surfside 214.2; MI/GC 207.3 | 171.2 base + district items | 2026 levy PDF | 2026-07-27 |
| V14 | $50 road fee per vehicle; $89 unincorporated stormwater fee | $50.00; $89.00 | SCAC 2025 p.18-19 | Feb 2026 edition |
| V15 | Penalties 3%, then 10%, then 15% | 12-45-180(A) | https://www.scstatehouse.gov/code/t12c045.php | 2026-10-01 |
| V16 | $400,000 examples: MB about $1,430 / $6,110; unincorporated about $1,470 / $4,820 (tax year 2025) | Recomputed exactly from levy figures | levy PDFs | 2025 |
| V17 | Vehicles assessed at 6% | "Motor vehicles - 6.0%" | SCAC 2025 p.2 | Feb 2026 |
| V18 | Deed recording fee $1.85 per $500 ($3.70 per $1,000) | 12-24-10(A) | https://www.scstatehouse.gov/code/t12c024.php | 2026-10-01 |
| V19 | Seller (grantor) owes the deed fee; master-in-equity buyer owes it | 12-24-20 | t12c024 | 2026-10-01 |
| V20 | SC 2026 rates 1.99% under $30,000; 5.21% minus $966 | IL 26-20; SCDOR IIT page | https://dor.sc.gov/sites/dor/files/policies/IL26-20.pdf ; https://dor.sc.gov/iit | 2026-08-31 |
| V21 | H.4216 signed March 30, 2026 (Act 110 of 2026) | SCDOR news | https://dor.sc.gov/news/information-about-h-4216 | 2026-04-15 |
| V22 | SCIAD $15,000 / $22,500 / $30,000 (amounts only; phase-out missing on site, see E10) | IL 26-20 | same | 2026-08-31 |
| V23 | Nonresident seller withholding at the top individual rate; 5% for corporations; changed by 2024 law (/sell/capital-gains/, /invest/llc/, /sell/rental-property/) | 12-8-580(A)(1); 2024 Act No. 215 replaced "seven percent" | https://www.scstatehouse.gov/code/t12c008.php | 2026-10-01 |
| V24 | 5.21% for a 2026 sale; 6.0% for 2025 | 12-8-580 + IL 26-20; editor's note 2025 schedule 6.0% | t12c006, IL 26-20 | 2026 |
| V25 | 44% deduction of net capital gain | 12-6-1150(A) | t12c006 | 2026-10-01 |
| V26 | Retirement deduction $3,000 before 65, $10,000 from 65; age-65 $15,000 reduced by it (correct on /buyers/55-plus-communities/, /buyers/relocating/cost-of-living/, from-new-york, from-connecticut, from-massachusetts, from-ohio) | 12-6-1170(A),(B) | t12c006 | 2026-10-01 |
| V27 | State accommodations 7% (5% + 2%); 90 continuous days | 12-36-920(A) | t12c036 | 2026-10-01 |
| V28 | 14-day exclusion also exempts the state accommodations tax | 12-36-920(A)(2) | t12c036 | 2026-10-01 |
| V29 | Local accommodations tax max 3%; cumulative county + city cap 3% (/invest/where-to-buy/) | 6-1-520, 6-1-540 (with a pre-1996 grandfather clause the page omits) | https://www.scstatehouse.gov/code/t06c001.php | 2026-10-01 |
| V30 | Sales tax 8% unincorporated Horry, 9% Myrtle Beach; Georgetown 7%; accommodations 9% / 10% / 8% | ST-575 | https://dor.sc.gov/sites/dor/files/forms/ST575.pdf | Rev. 2026 |
| V31 | Surfside STR licence $90 minimum + $2.27 per $1,000 over $2,000; minimums doubled for nonresidents | Fee schedule | https://surfsidebeach.org/DocumentCenter/View/2833/ | FY25-26, amended 2026-03-10 |
| V32 | Surfside hospitality 1% and local accommodations 0.5% on lodging; 90-day exemption | same | same | same |
| V33 | NMB requires only a business licence and accommodations tax remittance today | city page | https://www.nmb.us/833/Short-term-Rentals | 2026-10-01 |
| V34 | NMB nuisance party ordinance adopted (/invest/str-rules/) | "Recently, the City adopted an ordinance ... nuisance parties" | https://www.nmb.us/CivicAlerts.aspx | 2026-10-01 |
| V35 | HOA Act effective May 2018 | 2018 Act No. 245, eff May 17, 2018 | t27c030 | 2026-10-01 |
| V36 | No state cap on HOA fines; "fine" not in the HOA Act or Horizontal Property Act (/hoa/violations-and-fines/, /hoa/benefits/) | word absent from 27-30 and 27-31 | t27c030, https://www.scstatehouse.gov/code/t27c031.php | 2026-10-01 |
| V37 | Condo buyer jointly and severally liable for unpaid assessments | 27-31-220 | t27c031 | 2026-10-01 |
| V38 | Buyer takes title subject to vacation rentals beginning within 90 days of recording (/sell/) | 27-50-250(A) | https://www.scstatehouse.gov/code/t27c050.php | 2026-10-01 |
| V39 | Security deposit itemized within 30 days | 27-40-410(a) | https://www.scstatehouse.gov/code/t27c040.php | 2026-10-01 |
| V40 | 14-day cure notice; 5 days after rent due; 75-day retaliation bar (/invest/landlord-rules/) | 27-40-710(A),(B); 27-40-910(g) | t27c040 | 2026-10-01 |
| V41 | Magistrate civil limit $7,500 | 22-3-10 | https://www.scstatehouse.gov/code/t22c003.php | 2026-10-01 |
| V42 | SC LLC articles fee $110 | 33-44-1204 fee list ("one hundred ten dollars") | https://www.scstatehouse.gov/code/t33c044.php | 2026-10-01 |
| V43 | New residents: 45 days to get an SC licence | 56-1-20 (2023 Act No. 51) | https://www.scstatehouse.gov/code/t56c001.php | 2026-10-01 |
| V44 | 45 days to register an out-of-state vehicle | 56-3-212(F) ("has forty-five days to properly license and register") | https://www.scstatehouse.gov/code/t56c003.php | 2026-10-01 |
| V45 | $250 one-time fee for a vehicle first titled in another state | 56-3-627(D)(1) | t56c003 | 2026-10-01 |
| V46 | Golf cart: $5 permit, 5 years, 35 mph roads, 4 miles, daylight (/buyers/relocating/moving-checklist/, /pros-and-cons/) | 56-2-90 (2025 Act No. 64, eff May 22, 2025; former 56-2-105 repealed) | https://www.scstatehouse.gov/code/t56c002.php | 2026-10-01 |
| V47 | Wind pool coastal area definition (used to judge E4, E5) | 38-75-310(5) | t38c075 | 2026-10-01 |
| V48 | Metro ranked 2nd for percent growth, 3.2%, year to July 2025; county +21.8% since 2020 (/buyers/relocating/jobs/) | 427,551; 414,307; base 351,036 | https://www.census.gov/newsroom/press-releases/2026/2025-popest-metro-micro-counties.html Table 11 | 2026-03-26 |
| V49 | FY2027 FMR Horry: $1,155 / $1,258 / $1,504 / $1,823 / $1,981 (/invest/rent-prices/, /invest/section-8-rentals/) | exact match | https://www.huduser.gov/portal/datasets/fmr/fmr2027/FY27_FMRs.xlsx | FY2027 |
| V50 | Palmetto Heroes $10,000, 15-year forgivable, 0% second lien | Program guide | SC Housing guide (E11 link) | 2026-03-16 |
| V51 | Horry is a targeted county for SC Housing (/buyers/programs/) | "ANY COUNTY NOT LISTED ABOVE" under TARGETED | SC Housing 2026/2027 limits PDF | 2026-06-01 |
| V52 | Freddie Mac 30-year 6.55% week of July 16, 2026; April low about 6.30 | PMMS history | https://www.freddiemac.com/pmms/docs/PMMS_history.csv | 2026-10-01 |
| V53 | Section 121 $250,000 / $500,000, 2 of 5 years | IRS Topic 701 | https://www.irs.gov/taxtopics/tc701 | 2026-10-01 |
| V54 | FIRPTA withholding 15% (/invest/canadian-buyers/) | IRS FIRPTA page | https://www.irs.gov/individuals/international-taxpayers/firpta-withholding | 2026-10-01 |
| V55 | Rent under 15 days: income excluded (14-day rule) | IRS Topic 415 | https://www.irs.gov/taxtopics/tc415 | 2026-10-01 |
| V56 | Lodging totals 11% (Pawleys, unincorporated Georgetown), 12% (unincorporated Horry, NMB, Surfside), 13% (City of Myrtle Beach) (/invest/str-rules/) | Arithmetic from ST-575 accommodations column plus local layers: Georgetown 8% + 3%; Horry 9% + 3% hospitality fee; Surfside 9% + 1.5% county + 1% + 0.5%; MB 10% + 1.5% + 1% + 0.5%. NMB 9% + 1.5% + 1.5% uses the site's own NMB 1.5% figure, not re-opened. | ST-575; Surfside fee schedule; Horry treasurer per research file | 2026 |

Note on V56: Conway on the same table is 12%, but the layers the site itself records for Conway (9% + 1.5% county + 1% city hospitality) add to 11.5%. Unless Conway levies a further 0.5% local accommodations tax, Conway is 11.5%. Not verified either way. See U3.

Federal 1031 timelines (45 and 180 days, cut off by the return due date) and 27.5-year residential depreciation were not re-opened: uscode.house.gov was under maintenance and the IRS 1031 page returned no text. They match IRC 1031(a)(3) and 168(c) and are not counted above.

---

## 7. Unverifiable

| # | Claim | Page(s) | Why |
|---|---|---|---|
| U1 | Out-of-state buyer share, 40% vs 60%+ | /buyers/relocating/, /sell/out-of-state-buyers/ | No source cited, none found. |
| U2 | Visitors 17M / 18.2M / 19M | see C4 | Tourism bureau figure, not a government source. |
| U3 | Conway lodging total 12% | /invest/str-rules/ | Conway code not opened; layers on the site sum to 11.5%. The research file says all seven totals were never verified. |
| U4 | NMB city 1.5% accommodations fee; Horry 3% / 1.5% hospitality fee split | /invest/str-setup/, /invest/property-management/, /invest/rental-program-vs-airbnb/ | Horry treasurer page and NMB hospitality page not re-opened in this pass. |
| U5 | "roughly 5,400" licensed STRs in North Myrtle Beach | /invest/str-rules/ | No city figure found. |
| U6 | Fannie Mae LL-2026-03 per-unit deductible cap $50,000 | /invest/non-warrantable-condos/ | singlefamily.fanniemae.com returned 403. |
| U7 | SC Safe Home grant "up to $7,500"; Horry received the most grants in 2025 | /buyers/coastal-insurance/ | DOI page loads content by script; statute 38-75-485 sets no amount. |
| U8 | SCRA rent ceiling $10,542.60 for 2026 | /invest/landlord-rules/ | Federal Register notice not opened. |
| U9 | Insurance premium ranges ($1,500 to $3,500; $4,500 to $5,300; landlord $1,700 to $4,400; NFIP average $740 to $930) | /buyers/coastal-insurance/, /invest/landlord-insurance/ | Comparison-site and agent figures; FEMA NFIP data not opened. |
| U10 | Myrtle Beach TDF credit percent for 2026 | /buyers/property-taxes/ | City budget not opened. |
| U11 | Pawleys Island millage 233.9 + $96 | /invest/rental-returns/ calculator | Georgetown County levy not opened. |
| U12 | "fewer than 30" / "only 24" grandfathered houses in Myrtle Beach | /invest/str-rules/, /invest/str-setup/, /buyers/common-mistakes/ | Consistent with each other; city source not opened. |
| U13 | Horry County $31.2M state accommodations tax in 2024, "roughly 30 percent" of the state | /invest/airbnb-income/ | SC Department of Revenue / PRT distribution report not opened. |
| U14 | Superlatives: "Del Webb North Myrtle Beach is the only large 55+ community still building"; "Out-of-state buyers make the highest offers"; "#2 Fastest-growing US metro in migration" | /buyers/55-plus-communities/, /sell/out-of-state-buyers/ | No source. The Census rank is for percent population growth, not migration, so the "#2 in migration" label is at least mislabeled. |

---

## 8. Other notes

- /buyers/buying-in-myrtle-beach/: "Chapter3 is affiliated with BrickWood Mortgage (NMLS #189497) ... providing mortgages locally for over 18 years". HANDOFF (2026-07-30) says pages should use the referral-benefit wording, not "affiliated". Compliance item, passed to the compliance audit.
- /buyers/property-taxes/ calls the school exemption a "credit" on the submarket pages ("the owner-occupant school credit"). Under Act 388 it is an exemption (12-37-220(B)(47)). Low.
- /invest/llc/: "A deed from a partnership or a corporation back to an owner pays the fee." 12-24-40(9) exempts a family partnership to a partner when the only consideration is a reduction of interest. Low.
- /buyers/relocating/moving-checklist/ homestead line says residency must be "one full year ... as of December 31". The statute says "a resident of this State for at least one year"; it does not tie residency to December 31. /buyers/55-plus-communities/ says "one full calendar year". Low; align to the statute wording.
- /sell/capital-gains/ example: "$60,000 of depreciation recapture taxed federally at 25 percent". 25 percent is the maximum rate on unrecaptured section 1250 gain. Low.
- 2026 SC decoupling from federal itemized deductions: /hoa/tax-deductible/ "Your county property tax may be deductible if you itemize" is right federally; from 2026 it has no effect on the SC return. Low.
