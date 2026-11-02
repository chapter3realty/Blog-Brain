# Verify: /invest/condos/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself, or re-ran its script into my own scratch folder (`wf2/invest-condos/verify/`). I did not reuse the researcher's raw files.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `invest-condos-struck.json` in this folder, 23 entries. Every entry fires on its own struck text, and no approved wording fires (tested with `tools/struck-check.js`). On the live /invest/condos/ the list finds 5 phrases the rewrite must remove: "19 million visitors", "outperform most coastal", "2.5 to 3.8 times", "front desks" and "most conventional lenders".

**For the lead:** batch mode reads `batches/2026-11-a/facts/*-struck.json`. My brief let me write only in this folder, so please copy the file there.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 19: rows 1, 2, 3, 4, 8, 9, 10, 11, 13, 14, 15, 16, 18, 21, 24, 30, 31, 32, 33 |
| CORRECTED | 13: rows 5, 6, 7, 12, 17, 19, 20, 23, 25, 26, 27, 28, 29 |
| STRUCK | 1: row 22 |

A CORRECTED row may be used only in its corrected wording below.

## What I re-ran

- **Zillow.** I downloaded both metro files again and recomputed every month, peak, trough, recovery and ratio. Every value matches. September 2026 is still the last month.
- **County parcels.** I re-ran the four count queries (40,963; 8,797; 186,037; 115,633) and pulled all 40,963 condo parcels myself. Identical.
- **Deeds.** I rebuilt the deed file from batch 2026-10-d's `web.patch` (13,194 sales) and re-ran `analyze.py` on my own parcel pull. Every sales figure is identical.
- **Flood.** I re-ran `fetch_flood.py` on all 10,047 sale points. Condo figures are identical. The other-homes figure was from a partial run (row 28).
- **CRM.** I re-ran `pull_listings.py` (273 calls). One more condo and one more house are for sale now; every median, threshold and share is unchanged.
- **HUD.** I re-ran the HUD FHA condo search for Horry County: 9 approved, 117 of any status, as of 11/02/2026.
- **Live sources.** I fetched 12-43 and 27-31 from scstatehouse.gov, the 2026 levy PDF, Fannie Mae B4-2.1-03, the ACS tables, SCDOR ST-575, the City of Myrtle Beach tax notice and Airbnb's tax article.

## Every correction

1. **Row 5 (condo against house ratio).** Only 2 months were lower than September 2026, not 3: May and June 2021. The ratio's high was July 2006 (82.6 percent), not the condo value peak.
   - Use: "The typical metro condo is worth about 64 percent of the typical house. In mid-2006 it was about 83 percent, the highest in 25 years. Only 2 other months since late 2001 were lower: May and June 2021."
2. **Row 6 (how many complexes).** The 40,963 units are right. The 1,480 "regimes" are legal-description names. They split one complex by phase and by typing errors (three spellings of one Pinnacle tower; "CORAL BACH"), and 110 names hold one unit. Merged, there are about 740 groups. So the complex count and "median 8 units" are not supported, and 49.3 percent is a floor.
   - Use: "Horry County has about 41,000 condo units. Almost half of them, about 20,000, are in large complexes of 100 units or more."
   - Cut "half the county's condo complexes have 8 units or fewer". PLAN.md shot 3 and `shot-list.md` shot 3 use it.
3. **Row 7 (main homes).** The counts are right. The 4 percent rate counts units taxed as a legal residence, not main homes; a full-time owner who never applied sits at 6 percent. 256 units are at other ratios.
   - Use: "About 1 in 5 condo units (about 8,800 of 41,000) is taxed at the 4 percent rate for its owner's legal residence. Of the county's other homes, about 6 in 10 are. The rest are taxed at 6 percent, the rate for rentals, second homes and any home whose owner has not claimed the legal-residence rate."
4. **Row 12 (time to sell).** The arithmetic is right (12.2 and 3.7 months). Months of supply is not time to sell, and no row measures time to sell.
   - Use: "About 2,660 condos are for sale in Horry County, about 12 months of sales at last year's pace. For houses and townhouses it is about 4 months."
5. **Row 17 (rentals allowed).** The flag is "short-term rentals allowed", not nightly.
   - Use: "About 7 in 10 condos for sale say they allow short-term rentals."
6. **Row 19 (FHA and VA).** The counts are right. But HUD's list holds only 9 approved FHA condo projects in Horry County, so 307 listings that say FHA is not what an FHA buyer can get. This matches /buyers/va-loans/ row 3.
   - Use: "About 1 in 9 condo listings (307) say they accept FHA and about 1 in 12 (228) VA. HUD's FHA list holds only 9 approved condo projects in Horry County, so we confirm the building with the lender before you offer."
7. **Row 20 (6 percent rule).** This is the same correction as RTN row 1. "Which includes every rental" is too absolute, and the 72 days are per calendar year, with a military exception.
   - Use: "A home that is not its owner's legal residence, such as a unit rented out year-round or a second home, is taxed on 6 percent of its value. A legal residence rented out more than 72 days in a calendar year loses the 4 percent rate, unless its owner is on active military duty under orders."
8. **Row 22 (unit insurance), STRUCK.** The figure comes from an insurance agency's page. RTN rows 30 and 31, which it reuses, were STRUCK by that page's fixer-verifier. No insurance dollar figure goes on this page.
9. **Row 23 (worked example).** The listing medians reproduce (162 listings, $340,000, $1,075), and so does the arithmetic. Three fixes:
   - Remove the struck $970, so the total is $18,094.
   - The tax is before the 25 percent exemption (RTN row 5).
   - $4,100 is the base unincorporated rate only. Arcadian Shores adds 27.7 mills.
   - Use: "A year: HOA fee about $12,900; property tax at the rental rate inside the City of Myrtle Beach, before the 25 percent exemption, about $5,200. Total about $18,100 a year before insurance, the loan, utilities the fee does not cover, management and cleaning. Outside city limits, at the base unincorporated rate, the tax would be about $4,100; some fire districts add more."
10. **Row 25 (Fannie Mae hotel rule).** The source does not say "buys most conventional loans" or "front desk". It lists short-term rentals only when the HOA or its manager offers them.
    - Use: "Fannie Mae, one of the two companies that buy conventional loans, will not buy a loan on a unit in a building run like a hotel, even if each unit is owned separately. Signs it lists: registration services, the HOA or its manager renting units by the day or for short stays, daily cleaning, central key systems, a rental pool, or rent shared with the HOA or a rental company."
11. **Row 26 (critical repairs).** The $10,000 example dropped its carve-out: repairs paid for by a special assessment or by the unit owner do not count.
    - Use: "or in a building that needs critical repairs, for example repairs over $10,000 a unit due within 12 months that no special assessment pays for."
12. **Row 27 (lien).** The statute also puts "other liens, duly recorded" ahead of the association's lien. This matches /hoa/liens-and-foreclosure/ row 3.
    - Use: "Unpaid assessments are a lien on the unit that ranks ahead of every other lien except property tax liens and recorded mortgages and other recorded liens. A buyer, other than one at a foreclosure sale, is jointly liable with the seller for what the seller owes up to the sale, limited to the amount on a statement the association must issue when the buyer asks."
13. **Row 28 (flood).** The condo figures are exact. The other-homes figure came from a partial run (5,985 of 9,936 points): it is 10.4 percent, not 10.9.
    - Use: "about 1 in 10 other homes sold (10.4 percent)".
14. **Row 29 (Boston story).** The label "from one house sale" leaves out the $100,000 he had saved.
    - Use: "a house sale and his savings bought three oceanfront condos". Keep every limit in stories.json.

## Notes on verified rows

- **Row 8.** 18.8 percent: "nearly 1 in 5" is closer than "about 1 in 5".
- **Row 11.** I checked the tax-district areas against the deed file's Census place. Districts 880, 882, 891, 893, 898 and 899 are all in Myrtle Beach city, and 550 is North Myrtle Beach city.
- **Row 21.** 201.0 mills is the base unincorporated rate. The levy also lists Arcadian Shores 27.7, Murrells Inlet-Garden City fire 28.0 and watershed districts of 2.4 to 2.8 mills.
- **Row 24.** The local layers now have a primary source, not only Airbnb. The City of Myrtle Beach notice says that from July 1, 2021 the city collects 0.5 percent and 1 percent and the county collects 1.5 percent inside the city. With ST-575's 10 percent, the total is 13 percent.

## Should not be published

- Row 22: no insurance dollar figure.
- Row 6: the complex count (1,480) and "half the complexes have 8 units or fewer".
- The "Rows the page should not use" list is confirmed. "19 million visitors" is in the registry's `unsourced` list. "2.5 to 3.8 times" conflicts with registry `rental-vs-residence-tax`. I found no source for "outperform most coastal rental markets". All three are in the struck list, and all three are on the live page now.

## Photos (PLAN.md candidates)

I read each Commons file page. I could not view any of them: upload.wikimedia.org and the Commons API returned HTTP 429 to every request again. **None may be used until someone opens it at full size.**

| File | Licence on the file page | Author, date | What the page says it shows |
|---|---|---|---|
| Myrtle Beach, South Carolina, USA 100420-F-8430J-049.JPG | Public domain (PD US Air Force) | U.S. Air Force photo/Airman 1st Class Amber E. N. Jacobs, 20 April 2010; source shaw.af.mil | No subject is described: the description is tourism copy. 960 x 686 is the original size, so it is small for a hero image. |
| Myrtle Beach Hotels.jpg | CC BY-SA 3.0 | Hlecroy, 8 June 2011, own work | "Hotels in Myrtle Beach. Foreground: the boat launch area." Category "Hotels in South Carolina". The caption must not call these buildings condos. |
| Myrtle Beach, SC, photographed from 9th floor of hotel IMG 4501.JPG | CC BY 3.0 | Billy Hathorn, 16 July 2012, own work | "photo from ninth floor of a hotel of the beach in early morning". It shows a view of the beach, not a building. |
| North Myrtle Beach seen from South Carolina Highway 31 - 01.jpg | CC BY-SA 4.0 | DiscoA340, 13 May 2023, own work | "North Myrtle Beach seen from South Carolina Highway 31". It may not show any condo tower. |

All four licences are on the allowed list in `rules/images.md`. Credit the author and the licence on each one.
