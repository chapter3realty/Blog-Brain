# Verification: batch 2026-11-e

Verifier: an independent agent that did not research these facts. Read on 2026-11-04. Every row in `facts.md` was checked against its source, opened by the verifier. The status column in `facts.md` now holds each result and the source read.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 100 |
| CORRECTED | 34 |
| STRUCK | 0 |
| Total | 134 |

No row was struck whole. Six rows had a clause struck inside a CORRECTED row: F019, F082, F173, F191, and the precinct counts in F005 and F008. The struck wording is in `facts/election-2026-struck.json` (20 entries, controls pass, and `node tools/struck-check.test.js` passes).

## Sources the verifier could not open

- **SC Election Commission JSON feed** (`enr-scvotes.org`): 403 for every request. In its place the verifier used the Commission's own results report from 12:00 a.m. Nov. 4 (`scvotes.gov/wp-content/uploads/2026/11/2026-11-03-12AM-General-Election-Results.xlsx`), the latest file on scvotes.gov/2026-general-election-results. The report gives no precinct counts. All 2026 results are unofficial and not certified. scvotes.gov warns that its night-of system "has been experiencing intermittent issues".
- **Horry County results feed**: 403. Horry council and school board rows rest on WMBF's results page, which says "these are uncertified".
- **2024 results** (F021, F190): read from the Commission's certified election history database (contests 7131 and 7324), not the 2024 feed.
- Axios (F105), the senate.gov Byrd Rule page (F114), and myhorrynews (F191): 403 or 429.

## Corrections that change a headline number or claim

1. **Senate control (F020).** The row said control was "not settled". CBS News projects Democrats won control of the Senate ("Democrats win control of Senate, CBS News projects"). Write it as a projection.
2. **Statewide vote totals (F004, F006, F013).** The vote counts were from an earlier read. Commission report, 12 a.m.: Andrews 1,034,418, Graham 948,133; Wilson 1,046,730, Johnson 951,437; Burns 26,496, Williams 22,803. The percentages do not change.
3. **School board District 7 (F018).** Sasser 5,348 (51.83%), Graham 4,966 (48.12%), not 4,664 to 4,370. WMBF does not call Graham the incumbent.
4. **"First woman" (F019).** Andrews is "the first woman elected to represent South Carolina in the U.S. Senate" (PBS, NPR). Strike the claim that Darline Graham was the first woman to serve: no source read says it.
5. **The $50,000 credit (F102).** H.R. 3475 does not make buyers repay the credit. It adds the credit to taxable income if the home is sold, rented out or stops being the main home within five years. The thresholds rise with inflation after 2025.
6. **H. 3841 sponsors (F154).** Hewitt (District 108, Charleston and Georgetown) and Yow (District 53, Chesterfield, Darlington and Lancaster) are not Horry representatives. Only Hardee and Bailey are.
7. **S. 768 (F155).** $150,000 for those eligible in tax year 2025 and for 10-year residents. $75,000 for 5-year residents. It replaces the $50,000 exemption and is not added to it. Passed the Senate 44-0.
8. **ROAD to Housing Act (F100, F101).** Primary text found: Public Law 119-101, Sec. 1001. Each term in the row matches. Add one: the investor ban is repealed 15 years after it takes effect. Jan. 7, 2027 recomputed as 180 days after July 11, 2026. The vote tallies (85-5, 358-32) are still from the law firm summary only.
9. **RIDE IV and I-73 (F191, F192).** The ballot text caps the tax at 25 years or $6.35 billion. Its I-73 item is "a local match of up to one half" of the cost from SC 22 to the county line, and only once SCDOT has signed contracts to finish I-73 to I-95. The $450 million figure is WIS's. Do not write "no funding". Write that funding for most of the $1.6 billion cost is not identified.

## Other corrections (wording, attribution, carve-outs)

- F005, F008: drop "125 of 128 precincts"; the verifier could not read it.
- F009: the percentages are right. The vote counts in the example moved slightly.
- F014: add the recount law. S.C. Code 7-17-280 requires a recount at a margin of 1% or less, so House Districts 27 (0.23 points) and 89 (0.70 points) qualify.
- F060, F062, F063, F064, F069: Wilson's agenda items come from Fox Carolina's and HERE Columbia's reports of it (the two agree), not his campaign site. Write "as reported". The Act 388 page should rest on his direct quote (WIS, Oct. 28): "obviously looking at Act 388 and reforming how we assess property taxes on those types of properties."
- F070: Johnson's platform lines are WMBF's summary, not his words.
- F082: strike "(This is how the 2011 25% exemption for 6% property works.)". It is not sourced.
- F088: the 7% accommodations tax has carve-outs: fewer than six rooms in the owner's own home, IRC 280A(g) rentals (14 days or fewer), and stays of 90 days or more.
- F091: the HOA Act runs 27-30-110 to 27-30-170.
- F114: sources added. senate.gov says cloture needs three-fifths, or 60. 2 U.S.C. 641(e)(2) limits reconciliation debate to 20 hours.
- F143: notice is due before Jan. 31 of the first year claimed.
- F149: "Other Residential" is, in the study's words, "typically rental property with an assessment ratio of 6 percent". Do not add "second homes".
- F151: the quote is in Chapter 2 near Table 2.3, not on p. 50.
- F152: this is a student law note, so a secondary source. The 0.5% and 1.5% rates come from Kenyon and Paquin (Lincoln Institute 2020, Vol. 2, ch. 1, p. 9). Attribute them to that study.
- F157: the county page says the 2024 reassessment was "scheduled". It does not confirm it was carried out.
- F158: Florida's homestead cap is 3% or the CPI change, whichever is lower.
- F173: the overlay covers commercial districts east of Kings Highway. Council passed it unanimously in December 2024, and it took effect at once. Strike "270-day moratorium from April 2024".
- F176: the Arizona $500,000 insurance rule can also be met by platform coverage.
- F177: the quoted Florida text is the current statute. The "duration or frequency" wording may not be 2011 wording. Write "Florida law today".
- F178: the veto release does not describe the bill. Use the flsenate.gov summary, or just "a vacation rental bill".
- F195: the 2021 freeboard rule passed second reading. The final vote was set for July 13, 2021, and its outcome is not confirmed.

## Recomputed

- **Millage example (F145-F148).** Every figure recomputes exactly from the 2026 levy sheet: 254.6 mills, $5,346.60, $3,564.40, $1,782.20, $2,037.00, 192.9 mills, $4,050.90, $2,700.60. It is still not confirmed which parcels pay the 8.1-mill waste levy. Publish the 192.9-mill figures, or say "where the waste levy applies".
- **FHFA (F198-F200)**, from `hpi_at_metro.csv`, CBSA 34820: +5.62%, +5.01%, +21.60%, +8.50%, +2.97%; -9.68%, -4.95%, -9.38%; latest +0.83% (2026 Q2). All match. FHFA gives each value a standard error of about 8 index points, or about 2%. So +3.0% and +0.8% fall inside the error band. Say so on page 1.
- **Census permits (F196, F197).** All 21 one-unit values and all listed 5+ values match the county files.
- **Two-thirds (F083).** 83 House votes and 31 Senate votes. Republicans have 79 House seats in the unofficial count, so they need Democratic votes.
- **Election seats (F011).** Recounted from the Commission report: 79 R, 45 D.
- **Treasury score (F112).** The yearly cells sum to -31,016.

## predictions.md: claims that do not rest on a verified row

1. Section 2: "Michigan passed a state limit in July 2026 (search summary only, not verified)". It has no row. Cut it.
2. Section 1: "per standard deviation of a ZIP code's exposure". The abstract does not say ZIP code. Drop "ZIP code's".
3. Section 1: "Andrews backs it [H.R. 3475]". Her plan backs "a $50,000 tax cut" that "members of Congress from both parties have proposed" and names no bill. Linking it to H.R. 3475 is our inference (F102). Write it that way.
4. Section 5: "In Horry in 2018, non-owner-occupied homes were 36.4% ...". Use the study's definition (F149): other residential, typically rental property.
5. Section 5: "project partners the SC Chamber Foundation and SC Realtors". The source says only that they picked the ten counties (F150).
6. Section 6, Florida: "2011 law barred new local bans and limits on rental duration". See F177; write "Florida law today". "a bill to move more control to the state": use the bill summary (F178).
7. Section 7: "I-73 has no construction funding [F192]". RIDE IV money exists on conditions (F191). Write that funding for most of the cost is not identified.
8. Section 7: "The 2026 schedule sets about $1,615". The site's build bans "sets". Use "charges" or "lists".
9. Section 4: "before Andrews takes office [F001]". F001 is Graham Nordone's term end. Cite WBTV (term starts Jan. 3, 2027), now in F003's source, or say "before the new Congress".
10. Section 8: add the FHFA standard error (see Recomputed).

Every other claim in predictions.md rests on a VERIFIED or CORRECTED row.

## must-answer.md (spot check)

- Page 2: "the matching bill is H.R. 3475". This is an inference (F102). Write "most likely".
- Page 2, Q1: "No federal one [F113]". F113 is Treasury's 2024 statement. No row shows that no credit was enacted after 2024. The ROAD to Housing Act summary read does not create one, but the verifier did not read all 59 sections.
- Page 1: "Wilson won governor, Johnson conceded, no AP call found" is VERIFIED. "Andrews won" is VERIFIED: AP called it at 10:39 p.m. and CBS projected it.

## photos.md: licences checked on each file page

All 20 licences match the file pages. Credit details to carry into `tools/photos.js`:

| File | Licence on page | Author on page | Note |
|---|---|---|---|
| State House Grounds ... SC 01 | CC BY-SA 4.0 | Thomas Kirchel | 15 March 2025. Preferred State House photo. |
| State House, Southeast view with Strom Thurmond Statue | CC BY-SA 4.0 | DXR | A statue of a real person is in frame; use the Kirchel file. |
| Columbia - South Carolina State House (postcard) | Public domain (PD US no notice) | Asheville Post Card Co. | About 1950. 989 x 1536. |
| United States Capitol - west front | Public domain | Architect of the Capitol | 1997. |
| 2018-03-25 Capitol West Front, Newseum terrace | CC BY-SA 4.0 | Beethoven | |
| New Horry County Courthouse ... (2006) | CC BY-SA 3.0 | Pollinator at English Wikipedia | Photo 2006. |
| Old Horry County Courthouse | CC BY-SA 4.0 | Upstateherd | 21 Oct. 2013, 1024 x 768. |
| Conway city hall 0782 | CC BY-SA 3.0 | Pollinator at en.wikipedia | |
| Atlantic Ocean shoreline in Myrtle Beach | CC BY-SA 3.0 | Loadmaster (David R. Tribble) | 30 June 2014, 2592 x 1728 (the missing size and date). |
| Myrtle Beach's rapidly growing skyline | CC BY-SA 3.0 | Bz3rk (Wikivoyage); James Willamor named on page | 400 x 300. Thumbnail only. |
| NMB seen from SC 31 - 01 and - 02 | CC BY-SA 4.0 | DiscoA340 | 13 May 2023. |
| North Myrtle Beach, SC | CC BY-SA 4.0 | JefferyGoldman | 11 Aug. 2016. |
| North Myrtle Beach Banner | CC BY-SA 3.0 | Melikamp | 29 April 2012. |
| Surfside Beach Shoreline | CC BY-SA 4.0 | BullDawg2021 | 16 July 2023. |
| Surfside beach in 2026 | CC BY-SA 4.0 | WXchaser | 26 Aug. 2026. |
| Sunrise at Surfside Beach - panoramio | CC BY 3.0 | Lance L Lowry | 15 Feb. 2014. |
| Carolinas_smp_2018254 | Public domain | NASA Earth Observatory images by Joshua Stevens and Lauren Dauphin | 11 Sept. 2018. |
| SCDOT workers ... Highway 21 (FEMA) | Public domain | Bill Koplitz (FEMA) | 18 Oct. 2015. Not Horry; the caption must say where. |
| Businesses along Gill Creek ... (FEMA) | Public domain | Bill Koplitz (FEMA) | 21 Oct. 2015, Columbia. Same caption rule. |

The verifier did not judge whether people are the subject of any frame beyond the notes above. That check is for the photo step.

## Not checked

The "Not verified" items at the end of facts.md were not rows, and the verifier did not work them: TIGTA figures, Barron et al., Surfside and county STR rules, and the TischlerBise study. They stay out of the pages.
