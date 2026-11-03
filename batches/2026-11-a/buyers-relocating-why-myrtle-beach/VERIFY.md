# Verification: /buyers/relocating/why-myrtle-beach/

Verifier, 2026-11-03. I did not research these rows. I opened or downloaded every source myself and re-ran the data. My downloads and scripts are in the scratch folder `wf2/buyers-relocating-why-myrtle-beach/v/` (not saved).

**Counts: 44 rows. 36 verified, 7 corrected, 1 struck.** The status and note columns of `facts.md` now match this file. Ten struck-wording entries are in `buyers-relocating-why-myrtle-beach-struck.json`. Every entry fires on its struck wording and none fires on the approved wording. `node tools/struck-check.test.js`: all controls pass.

## What I re-ran

- **IRS county migration files.** I downloaded all ten full files (2018-2019 to 2022-2023) from irs.gov. The 2023-2024 files return 404. I ran `irs_migration.py` on the full files. Its summary, top origins, top destinations and regions are identical to DATA `irs-migration.json`. The IRS user guide (`2223inpublicmigdoc.pdf`) section E.6 lists the "Other flows" regions by state. They are the Census regions the script uses. Section C.1 says the 2022-2023 file holds income earned in 2022.
- **Census population estimates, Vintage 2025.** I downloaded the county, metro and city files and the press release. Every value matches. I also downloaded the OMB 2023 and 2020 delineation files.
- **ACS 2024.** I re-pulled B05002, B07001 and B01002 (1-year), and B25103 (5-year) for 16 counties, from data.census.gov. Every value matches.
- **Zillow ZHVI county file.** I downloaded the file and read the 2026-09-30 column. Every value matches.
- **CRM map API.** I re-read the API at 23:20Z. Counts were within 2 of the researcher's.
- **BLS QCEW.** I re-pulled the 2019 and 2025 annual files. Every value matches.
- **SC RFA projections.** The workbook I downloaded is byte-identical to DATA raw. Every value matches.
- **NOAA water temperature.** I averaged hourly readings for station 8661070 from the CO-OPS API. The averages match.
- **NCEI clear-day file.** I downloaded it. Every value matches.
- **S.C. Code.** I read chapters 12-6, 12-16 and 12-37 live.
- **26 U.S.C. 2011.** I read it at LII.

## Corrections

| Row | Status | What was wrong | Safe wording [attribution] |
|---|---|---|---|
| 8 | corrected | "Few households go back the other way" is wrong in general. The North Carolina counties trade households both ways: Brunswick 255 in and 224 out; Mecklenburg 228 in and 194 out; Wake 182 in and 127 out. The five ratios are right. | Few households go back to the New York and New Jersey counties: for every household that moved from Horry County to Suffolk County, New York, about six came from it; Ocean County, New Jersey, about five; Orange County, New York, about seven. North Carolina counties trade households both ways [IRS 2022-2023]. |
| 9 | corrected | "Most people who leave do not go far" is not supported. 2,297 of 9,143 leaving households (25 percent) went to another South Carolina county. Named North Carolina rows add 1,227. That is under half. | The top destinations for households that leave Horry County are nearby: Georgetown County, SC, Brunswick County, NC, and Charleston County, SC. About one in four households that leave go to another South Carolina county. More households moved from Horry to Charleston County than came from it [IRS 2022-2023]. |
| 13 | corrected | "No metro grew faster since 2020" is our ranking of one file. It flips with the base year. From the April 2020 base, Myrtle Beach leads, 21.80 to 21.60. From the July 2020 estimate, The Villages leads, 21.09 to 20.85. A superlative needs two sources that agree. | Since the 2020 census the Myrtle Beach metro grew about 22 percent, one of the two fastest of the country's 387 metro areas, with The Villages, Florida [Census Vintage 2025, our ranking]. |
| 23 | corrected | The values are right. "In the counties that send the most movers it is higher" overstates. Columbus County, NC is one of the ten largest out-of-state sources, and its value is lower ($198,207). Florence, Richland and Marion counties in South Carolina are also lower. | In most of the out-of-state counties that send the most movers it is higher: about $730,000 in Suffolk County, NY ... [Zillow ZHVI, all homes, September 2026]. Call the figure Horry County, never the metro. |
| 25 | corrected | The counts hold. "On the Grand Strand" is the wrong geography. The feed's own pins reach inland Marion and Florence county areas (to about 79.9 W). For all home types, they also reach into North Carolina well past the border towns. | Of the about 3,700 houses for sale in our MLS area now (Horry and Georgetown counties and nearby parts of South Carolina and North Carolina) ... [CRM map API, aggregate counts]. |
| 34 | corrected | The claim leaves out the 2026 rider that buyers-retirees row 19 (corrected) carries. | At 65, the first $50,000 of your home's value is exempt from property tax once you have lived in South Carolina for a year; for 2026 only, an owner who already qualified in 2025 gets $75,000 [12-37-250; proviso 117.220]. |
| 42 | corrected | The story says "many people around the city core". "Much of the population" overstates it. | Making friends is harder than movers expect, because many people near the city core are tourists or a seasonal population that leaves. Our advice: buy outside the City of Myrtle Beach and be a regular at places tourists do not go, such as gyms and clubs [stories.json making-friends-seasonal]. |

## Struck

| Row | Why |
|---|---|
| 10 | The values are right ($68,215 and $82,912), but the claim cannot stand. (1) It crosses the IRS series break that starts with 2022-2023 (row 1), which row 3 says not to read as a trend. (2) The income years are 2018 and 2022, and the figures are not adjusted for inflation, which accounts for most of the gap. I could not reach the BLS CPI table to measure the real change (rate limit), so there is no safe number to offer. Leave it out. |

## Wording notes on verified rows

- **Row 6.** $82,912 is a mean per return. Say "on average", never "typical". The live page's "2.5 times the income" is the ratio of the totals. It is struck unless "in total" is in the same sentence.
- **Row 7.** Keep "outside South Carolina". Georgetown County (531) is the largest source overall. The sibling struck entry `sell-out-of-state-buyers 11` fires without it.
- **Row 11.** "Since 2023" is now sourced. The OMB 2023 delineation file lists only Horry County in CBSA 34820. The 2020 file named the metro "Myrtle Beach-Conway-North Myrtle Beach, SC-NC".
- **Row 18.** The quote "indicative rather than definitive" is not on the RFA page as it is served today. Drop it from the quote column. The values are right; say "projects".
- **Row 27.** The live page's "near 0.38 percent" is struck.
- **Row 35.** SC's estate tax chapter uses the IRC "as described in Section 12-6-40(A)": the IRC as amended through December 31, 2024. Section 2011 was repealed in 2014, so the tax is zero. The Tax Foundation line is secondary and not needed.

## Sibling figures (one fact, one value)

- **Row 26** matches sell-out-of-state-buyers row 22 on every shared county.
- **Rows 32 to 34 and 27** match buyers-retirees rows 5 to 8, 19 and 23. Row 34 now carries that row's correction.
- **Rows 36 and 37** match the weather page's printed wording.
- **Row 12** ("second fastest") matches the press release and the other pages that print it.
- **Rows 23 and 29:** the researcher's PROPOSED.md covers the $342,000 metro figure and the jobs-page update. I agree with both.

## Photo candidates (PLAN.md section 8)

I checked each licence on Commons through its API (`extmetadata`) on 2026-11-03. After that, Commons returned 429 to every request.

| Candidate | Licence on the file page | Author, date | Finding |
|---|---|---|---|
| File:SkyWheel_Myrtle_Beach_in_August_2022.jpg | CC BY-SA 4.0, own work | DiscoA340, 2022-08-14 | Licence OK; credit "DiscoA340, CC BY-SA 4.0". **Not yet viewed** at full size: the thumbnail returned 429. The writer must look at it before captioning. |
| File:Beach_Resorts_at_Myrtle_Beach,_SC.jpg | CC BY-SA 4.0, own work | DiscoA340, 2022-06-05 | Licence OK, but **reject it for this caption**. I viewed it at 1280 px. Its description says "seen from SC 31". It shows a construction site and a tree line, with two condo towers far off on the horizon. No beach is in frame, so "Oceanfront resorts along the beach" would be false. It is also low quality. |
| File:Myrtle_Beach_(24050832475).jpg | CC BY-SA 2.0, from Flickr | Tom Long ("from Oak Island, USA"), 2015-06-13; uploaded by Юрий Д.К. | Licence OK; credit "Tom Long, CC BY-SA 2.0". **Not yet viewed**: 429. The Commons description says only "Myrtle Beach". Look at it before captioning it "boardwalk area". |
| Carolina Forest aerials (invest-where-to-buy NAIP; invest-run-the-numbers NOAA) | Public domain (USDA NAIP via The National Map; NOAA ERI 2026) | federal | Licence records are in `data/2026-11-a/invest-where-to-buy/photos.json` and `invest-run-the-numbers/photos.json`. Two sibling verifiers passed them. `photos.js check` fails on the files' embedded metadata, not on the licence. Run `photos.js embed` on any copy made for this page. |
| Conway riverwalk (File:Waccamaw_River_Warehouse_Historic_District_Jun_10.JPG) | {{PD-self}}, Pubdog, 2010 | Pubdog, 2010-06-20 | Licence OK; two sibling verifiers checked the file page (which-town, where-to-buy). Caption it as the warehouse district, 2010. |

## Should not be published at all

- **Row 10** (the movers' income "has risen").
- **The live page's "2.5 times the income"** without "in total".
- **The live page's "near 0.38 percent".**
