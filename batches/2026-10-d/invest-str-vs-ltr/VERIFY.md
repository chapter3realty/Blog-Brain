# Verification: /invest/str-vs-ltr/

Independent verifier, batch 2026-10-d, 2026-11-01. I did not research these facts. Ledger: `facts.md` (status and note columns updated in place). Struck list: `invest-str-vs-ltr-struck.json` in this folder; its entries fire on the struck wording and stay quiet on the approved wording. `node tools/struck-check.test.js` prints "all controls pass". The current live page has none of the struck wording. The list sits in this folder because of the shared-files rule. The lead copies it to `batches/2026-10-d/facts/` for batch mode.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 18: 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 17, 19, 21, 23, 24, 30, 31 |
| CORRECTED | 12: 8, 12, 14, 15, 16, 20, 22, 25, 26, 27, 28, 29 |
| STRUCK | 1: 18 (the rule text; the ordinance number and date stay) |

Photos: 1 of 2 candidates passes.

## What I opened and re-ran

- **AirROI** Myrtle Beach, Conway and North Myrtle Beach pages, re-downloaded. All three are byte-identical to `raw/`. Every quote was found.
- **HUD FY27_FMRs.xlsx**, the Census HVS table and the Horry County levy PDF, re-downloaded. All are byte-identical to `raw/`.
- **BLS series**: the full South Carolina file, re-downloaded. All 105 values match the raw TSV. Also opened `sm.area`, `sm.supersector` and `sm.footnote`.
- **OMB 2023 delineation** (Census `list1_2023.xlsx`). CBSA 34820 is Horry County only.
- **Zillow ZORI ZIP file**, re-downloaded. The three values match.
- **Statutes and codes, read today**: S.C. Code 12-36-920 and 12-43-220(e), 24 CFR 888.113 at LII, and SCDOR ST-575 (Rev. 2/5/26).
- **Airbnb Help Center** articles 2328 and 1857, read today.
- **Fannie Mae Selling Guide** B4-2.1-03, read today.
- **City of Myrtle Beach**: the zoning news item, the business license FAQ and the council agenda of 2024-12-10, read today with WebFetch.
- **`compute.py`**, re-run on a copy of `raw/`. `findings.json` came out identical to the researcher's.
- **`pull_listings.py`**: I re-queried 22 of its totals and the 98 pins of the worked condo. Every one matches.
- **Our own files**: `data/str-market.json` "management", and the three stories in `stories/stories.json`.

## Every correction

1. **Row 8, North Myrtle Beach four-bedroom.** Cut "where nightly renting pulls ahead". The claim compares against the metro four-bedroom FMR, which the row's own note forbids. Print the AirROI figures only.
2. **Row 12, vacancy.** "Close to that rate" is wrong. One month empty is 8.3 percent. The state rate was 11.2 to 12.3 percent, each with a margin of about 3 points. Say "a little below that rate".
3. **Row 14, the main result.** AirROI's annual figures count every active listing, "including those open only part of the year". In Myrtle Beach, 41.5 percent of listings were open 270 days or fewer. So the two-bedroom median ($20,100 gross, $12,400 kept) and average are not a home rented nightly all year. The lease side is a full year less one month. The arithmetic is right, but every "typical two-bedroom" sentence needs the words "counting listings open only part of the year". The top-quarter figure is AirROI's full-year case. This limit also applies to the deciding fact, part 1, and to the Conway sentence.
4. **Row 15, the gross ratio.** Same limit as row 14. A listing at the top-quarter mark grosses about 2.5 times the lease. Do not write "only the top quarter gross 2 to 3 times": listings above the mark gross more.
5. **Row 16, break-even.** The self-run figures are verified: 82 nights, 22 percent of the year, 17 bookings. The 40 percent and 60 percent manager figures (172 nights, and "no number of nights") are struck until owner question 1 is answered. The file gives the base as "gross profit", but the script applies the share to the nightly rate.
6. **Row 20, state lodging tax.** 12-36-920(A) has two carve-outs the claim leaves out:
   - fewer than six sleeping rooms in the owner's own home (the place of abode);
   - rent excluded under IRC 280A(g), the 14-day rule.

   The 5 plus 2 split is not in the statute. Airbnb article 2328 lists it.
7. **Row 22, Airbnb fees.** Write "most hosts on the split fee pay 3 percent". Airbnb's page says "Most hosts pay a 3% service fee, but some pay more."
8. **Row 25, listing counts.** All the counts match. The geography words are wrong:
   - "city=Conway" is the address city. 675 houses have a Conway address; only 75 are marked inside city limits.
   - The North Myrtle Beach condos are filtered by address city, with no city-limits filter.
   - "Across the Grand Strand" (3,743 houses, 2,867 condos) is really every listing in the site's search. That search includes Conway, Loris, Aynor, Longs, Pawleys Island (Georgetown County) and Calabash (North Carolina).
9. **Row 26, the worked condo.** These are verified: n = 48, the median price of $327,000, the middle half from $269,900 to $389,900, and the tax of $4,995. The HOA fee figure ($1,225 to $1,250 "a month") is struck for now, because its unit is not confirmed:
   - the map API returns no fee;
   - listing pages show the fee only to registered visitors;
   - the `hoaMax` filter runs in the CRM, which may compare a quarterly fee as it was entered.

   Restore it after a registered read of three of the 48 listings shows the field is monthly. Sibling /invest/str-tools/ row 9 prints the same fee, so the same hold applies there.
10. **Row 27, jobs.** BLS supersector 65 is private education and health services; public schools are counted under government. Write "private education and health". "All year" means January to September 2026, and the September figure is preliminary. Cut "is what fills long leases": no source supports it. "Horry County" is confirmed by the OMB 2023 delineation.
11. **Row 28, Fannie Mae.** Write "standard (Fannie Mae) loans", not "most loan programs". "Primarily transient" and "hotel type services" are two separate grounds, and each one alone makes a project ineligible.
12. **Row 29, lender figures.** Cut "a lender counting a lease uses the signed rent": it is in no story or source. Keep only the 75 percent from story `dscr-lender-figures`, attributed to "a loan officer at our preferred lender".

## Struck

**Row 18, the conversion overlay rule text.** I could not open any copy of Section 1808:

- Municode, the Municode API and the ordinance PDF on cms6.revize.com all returned 403 or Cloudflare "Access blocked" (curl and WebFetch).
- The agenda page shows "2024-69 Conversion Overlay_Short Term Rentals (2nd Reading)" on December 10, 2024. It records no vote.
- The rule body rests on one read from 2026-09-06.
- A second earlier read (batch 2026-10-b, second-home ledger line 114) records Sec. 1808.C as covering commercial uses between Kings Highway and the ocean. That differs from the claim.

Until someone reads Section 1808 in a browser and records the quote, the page may say only this: Myrtle Beach adopted a short-term rental conversion overlay, Ordinance 2024-69, on December 10, 2024 (registry `conversion-overlay-date`). Then link /invest/str-rules/.

## Claims that should not be published now

- **Deciding fact, part 2**: "for most oceanfront condos inside the city the choice is already made, one way". It rests on row 18. Hold it until Section 1808 is re-read. The plan to lead with the rule does not stand until then.
- **Deciding fact, part 1**: it stands only with the part-year limit from row 14. The finding that the typical two-bedroom keeps about $2,850 less than a lease compares listings that include part-year ones with a full-year lease. The writer must say so where the number appears.
- **The manager break-even** (172 nights at 40 percent, none at 60 percent): hold until owner question 1 is answered.
- **The worked condo's HOA fee figure**: hold until the field is confirmed monthly.

## Photo candidates (PLAN.md, Visuals 5)

| Candidate | Licence on the file page | Picture, seen at 1920 px | Verdict |
|---|---|---|---|
| `File:Hotels_along_the_Grand_Strand_Beachfront.jpg` | CC BY-SA 4.0, DiscoA340, own work, 2022-08-14, 3264 x 2448 | High-rise oceanfront towers seen from the beach, with dune grass and a lifeguard stand. No readable sign or logo. | **Passes.** Caption: "Oceanfront towers along the beach in Myrtle Beach." Credit: DiscoA340, CC BY-SA 4.0, with a link to the licence. Do not call them condos or name a building. |
| `File:Myrtle_Beach,_North_Ocean_Boulevard_100420-F-4155R-021.jpg` | Public domain (PD-USGov-Military-Air Force), Tech. Sgt. Louis L. Rivers, 2010-04-20, 1050 x 750 | A street of gift shops and attractions on Ocean Boulevard. The business signs are the subject ("Gay Dolphin", a "Moving Theater" sign, a dinosaur figure). No oceanfront towers. | **Struck.** It does not show the caption, and signs and logos are the subject (rules/images.md). |
| USGS 2011 oblique aerial (fallback) | Not a file page; not checked | Not seen | Check its record before use. |

The two images already on the site (`the-farm-homes-from-above-2026.webp`, `conway-older-house-and-oak.webp`) were outside this check.

## Sources opened

- AirROI: https://www.airroi.com/airbnb-data/united-states/south-carolina/myrtle-beach , /conway , /north-myrtle-beach
- HUD: https://www.huduser.gov/portal/datasets/fmr/fmr2027/FY27_FMRs.xlsx ; 24 CFR 888.113 at https://www.law.cornell.edu/cfr/text/24/888.113
- Census: https://www.census.gov/housing/hvs/data/rates/tab1_state05_2026_rvr.xlsx ; https://www2.census.gov/programs-surveys/metro-micro/geographies/reference-files/2023/delineation-files/list1_2023.xlsx
- BLS: https://download.bls.gov/pub/time.series/sm/sm.data.42.SouthCarolina (and sm.area, sm.supersector, sm.footnote)
- Zillow: https://files.zillowstatic.com/research/public_csvs/zori/Zip_zori_uc_sfrcondomfr_sm_month.csv
- Horry County: https://www.horrycountysc.gov/media/kufln4qp/tax-levy-2026_2.pdf
- S.C. Code: https://www.scstatehouse.gov/code/t12c036.php ; https://www.scstatehouse.gov/code/t12c043.php ; SCDOR https://dor.sc.gov/sites/dor/files/forms/ST575.pdf
- Airbnb: https://www.airbnb.com/help/article/2328 ; https://www.airbnb.com/help/article/1857
- Fannie Mae: https://selling-guide.fanniemae.com/sel/b4-2.1-03/ineligible-projects
- City of Myrtle Beach: https://www.cityofmyrtlebeach.com/news_detail_T6_R1468.php ; https://www.cityofmyrtlebeach.com/careers/business/business_faq.php ; https://www.cityofmyrtlebeach.com/agenda_details_T15_R388.php
- CRM: https://chapter3realty.com/homes/api/map (22 queries) ; https://chapter3realty.com/homes/api/filters
- Commons file pages for both candidates, and the images through Special:FilePath.
- These returned 403 or an empty page: Municode Section 1808, api.municode.com, the cms6.revize.com ordinance PDF, and the HUD FMR landing page.
