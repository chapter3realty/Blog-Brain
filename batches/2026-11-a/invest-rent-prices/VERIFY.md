# Verification: /invest/rent-prices/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-02. I did not research these facts. I opened the sources myself and re-pulled each data file into my own folder (`scratchpad/wf2/invest-rent-prices/verify/`), then recomputed every number with my own scripts. Ledger: `facts.md` (status and note columns updated, 28 rows). Struck list: `invest-rent-prices-struck.json` (14 entries; each fires on its struck wording, and none fires on the approved wording or on the live page).

A CORRECTED row may be used only with the wording in its note.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 4, 5, 9, 10, 12, 13, 19, 20, 22, 23, 24, 25, 27, 28 | 14 |
| CORRECTED | 1, 2, 3, 6, 7, 8, 11, 14, 15, 16, 17, 18, 21, 26 | 14 |
| STRUCK | none as a whole row. Struck parts: the 3-bedroom "30 percent" gap (row 7), "two independent sources agree" (row 8), the second clause of row 21 | 0 |

## How the data rows were checked

- **Zillow (rows 1, 2, 14 to 17).** I downloaded all six CSVs from files.zillowstatic.com myself. Every value matches to the decimal. I recomputed the seasonal table from the sm and sm_sa files; every month matches. Zillow's ZIP file lists Brunswick County, NC ZIPs (Leland, Southport, Oak Island, Bolivia, Supply, Shallotte, Carolina Shores) in the "Myrtle Beach-Conway-North Myrtle Beach, SC-NC" metro. So Zillow's metro is not Horry County. Census's 2024 metro is Horry County alone (383,016 people).
- **Census tables (rows 6, 12, 13, 19).** I pulled B25064, B25031, B25058 and B25032 from data.census.gov for all 13 areas. Every estimate and margin matches.
- **PUMS (rows 3 to 5, 7, 8, 22).** I wrote my own script and ran it on psam_h45.csv. Every median, margin and share matches `pums-2024-5yr.json`. I checked the area against the Census 2020 tract-to-PUMA file. 02701 has 32 Horry tracts and 02702 has 34. Neither has a tract outside Horry. 02601 has the other 12 Horry tracts, which hold Loris, Aynor and Green Sea. All five survey years use the same PUMA codes. I also ran the gaps in row 7 with the 80 replicate weights, using a difference and a ratio for each replicate.
- **HUD (rows 8 to 11, 28).** huduser.gov answered my download with a bot challenge (HTTP 202, `x-amzn-waf-action: challenge`), and WebFetch cannot resolve the host. I did not work around the challenge. I read the researcher's full saved copy of `FMR_All_1983_2027.csv` (4,765 rows; Horry row fips 4505199999). I read the definitions in 24 CFR 888.113 and 982.503 on eCFR (as of 2026-10-01).
- **Population (row 18).** I downloaded co-est2025-alldata.csv myself. Every figure matches.
- **Law (rows 20, 21).** I opened SC Code 27-39, 27-40 and 39-5 on scstatehouse.gov myself.
- **Stories (rows 25 to 27).** Checked against the verbatim text in `stories/stories.json`.

## Corrections

| Row | What was wrong | Use instead | Source |
|---|---|---|---|
| 1, 2, 15, 16, 17 | Scope. Zillow's "Myrtle Beach, SC" metro includes Brunswick County, NC. "Typical asking rent" and "typical house value" are Zillow's terms, but its definition page could not be read (zillow.com is blocked in this session). | "Zillow's rent index for the Myrtle Beach metro, which Zillow draws to include Brunswick County, NC" in the sources line. Never "Horry County" for a Zillow metro figure. Until the lead pastes Zillow's definition, write "Zillow's rent index" and "Zillow's middle-tier house value index". | Zillow ZIP file, Metro column; ACS 2024 B01003 for the metro |
| 3 | The PUMS area is most of Horry County, not all of it. The 2-bedroom house figure (margin 30 percent) and the 4-bedroom one (26 percent) fail the page's own 25 percent rule. | In most of Horry County, the middle lease rent for a rented house is about $1,400 a month, and about $1,500 for 3 bedrooms. Utilities are extra [ACS PUMS 2020-2024, 2024 dollars]. | PUMS rerun; 2020 tract-to-PUMA file |
| 6 | "Most renters live in apartments and condos" is too firm. The share is 51.7 percent. | About 3 in 10 rented homes in Horry County are houses. About half are apartments and condos, and about 1 in 7 is a mobile home [ACS 2020-2024, B25032]. | B25032, re-pulled |
| 7 | The 3-bedroom gap ($373, plus or minus $401 at 90 percent) is not firm. The gap is firm on larger groups: all renters $1,338 against $926 (ratio 1.44, plus or minus 0.22), and all rented houses $1,608 against $1,072 (gap $536, plus or minus $311). | A lease signed in the last two years costs more than one five years old. Across rented homes in most of Horry County, the newer leases run about 40 percent higher (about $1,340 against $930). In rented houses, about $1,600 against about $1,100 [ACS PUMS 2020-2024, 2024 dollars]. Use the 3-bedroom pair only in a table marked "wide margin". | PUMS replicate weights |
| 8 | "Two independent sources agree" is wrong. The FMR is the 40th percentile of what recent movers pay for any kind of home. The PUMS figure is the median for 3-bedroom houses. The match is a coincidence, not a cross-check. | Renters of 3-bedroom houses who moved in within two years pay about $1,800 a month with utilities. HUD's fair market rent for 3 bedrooms, the 40th percentile of what recent movers pay for any kind of home, is $1,823 [24 CFR 888.113; HUD FY2027]. | 24 CFR 888.113(a) |
| 11 | FY2016 to FY2027 is eleven years, not ten. | About 55 percent in ten years, from $1,172 (FY2017) to $1,823. Or: about 75 percent since fiscal 2016, from $1,044. | FMR file, fmr17_3 |
| 14 | The ZIP labels are wrong. Market Common is in 29577, not 29579. 29575 has no part of Socastee CDP. "29572 north Myrtle Beach" reads as the city of North Myrtle Beach. "Burgess" is not a Census area. 29585 is in Georgetown County. 29527 has one month of data. | 29579 Carolina Forest and Forestbrook; 29588 Socastee; 29575 Surfside Beach; 29572 Myrtle Beach, north end; 29576 Murrells Inlet and Garden City; 29585 Pawleys Island (Georgetown County). Mark 29527 "new series" or leave it out. | Census 2020 ZCTA-to-place relationship file |
| 17 | August is about half a percent above the trend, not "about 1 percent". | Asking rents run about half a percent above the year's trend in August, the high, and about 1.4 percent below it in January, the low: a swing of about 2 percent. | Zillow sm / sm_sa, recomputed |
| 18 | "Why rents rose" states a cause that the source does not show. | While rents rose, Horry County grew from about 351,000 people in 2020 to about 428,000 in 2025, about 22 percent. More people died than were born, so the growth came from people moving in. | Census Vintage 2025 |
| 21 | The clause "so a landlord who wants a higher rent offers a new lease" is not in the statute. | Either side can end a month-to-month lease with 30 days' written notice [SC Code 27-40-770(b)]. | scstatehouse.gov |
| 26 | The verbatim says the rents "did not raise with the price". It does not say they stayed flat. | ...and the rents did not rise with the prices. | stories.json `little-river-townhouses` |

## Notes on verified rows the writer must keep

- **Rows 4, 5, 22.** Same area limit as row 3: "most of Horry County".
- **Row 9.** Add "paid by recent movers": 888.113(a) draws the 40th percentile from "units ... occupied by recent movers".
- **Row 10.** Write "in the fiscal year 2027 schedule", not "this year".
- **Row 12.** "Highest" and "lowest" hold only among the ten places in the table. Name Murrells Inlet and Carolina Forest together, because their margins overlap.
- **Row 13.** B25031 counts every rented home with that many bedrooms. Write "a 3-bedroom home", not "a 3-bedroom house".
- **Row 20.** The researcher's note "no other state rent limit was found" is wrong. SC Code 39-5-145(B)(1)(b) makes it unlawful, after a governor's state of emergency, to "impose unconscionable prices for the rental or lease of a dwelling unit" in the declared area. 27-40-910 limits a retaliatory increase. Never write that state law sets no limit on rent. The struck list guards this.
- **Row 23.** Lead: the batch rule bars an automated value for any address. The page prints none, but it sends readers to an analyzer that estimates a rent for any address. The owner approved that line on the live page. I flag it; I do not strike it.
- **Row 27.** The verbatim gives no period for "over 1,200" and "600". "A month" comes from the story bank's summary. This is the same note as /invest/run-the-numbers/ row 25.
- **Row 28.** Write "the voucher program sets its payment standard from it" (24 CFR 982.503(a)(2)). HUD's FY2027 SAFMR methodology, Appendix II, does not list the Myrtle Beach area as a mandatory Small Area FMR area.
- **"Not verified" section of facts.md.** "Set from recent movers" is now verified (24 CFR 888.113(a)). The ZIP labels are checked (row 14). Zillow's ZORI definition is still unread.

## Sibling pages

- **/invest/run-the-numbers/** (working copy) says "The rents stayed flat, and the cash flow went away for later buyers" about the same Little River story. My row 26 entry fires on it. That page is not mine to edit, so the lead should fix it there.
- The ZIP labels for 29572 ("north end") and 29579 ("mostly Carolina Forest") agree with the run-the-numbers verifier.
- Run-the-numbers row 34 (all-homes values, three years) and this page's row 15 (houses, four years) do not state the same fact. There is no conflict.

## Photos

| Candidate | File page | Licence | Note |
|---|---|---|---|
| Conway_Residential_Historic_District_Jun_10.JPG | Read with the file's raw wikitext | `{{PD-self}}`, Source `{{own}}`, Author Pubdog, 2010-06-20 | Licence confirmed. The file is already on /buyers/no-hoa-homes/ and /submarkets/conway/ (`images/buyers/no-hoa/conway-older-house-and-oak-*.webp`). A third page would repeat it. Ask the photo partner for shot 5 instead. |
| Kimbel_Library.jpg | Read with the Commons API extmetadata | CC BY-SA 4.0, "Own work", LittleT889, 2020-11-08, attribution required | Licence confirmed. Credit "LittleT889, CC BY-SA 4.0, via Wikimedia Commons". It is already on /submarkets/conway/ in this batch, so check that it is not a repeat. |
| NOAA Emergency Response Imagery (section 3) | No file named | Public domain if it is NOAA imagery | Nothing to check yet. |
| Photo partner shots 1 and 3 | none | own, once he confirms in writing | Not yet asked. |

Process note: on my first Commons API call, I put the account's contact address in the User-Agent header. That should not have been sent. Later calls used no address.
