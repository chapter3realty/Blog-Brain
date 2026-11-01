# Verification: /invest/strategies/dst/

Verifier: batch 2026-10-d, independent verifier (prompts/verifier.md). I did not research these facts. Every source below was opened by me on 2026-11-01, unless the row says it could not be opened. The status column of `facts.md` now matches this file.

Struck wording is in `batches/2026-10-d/facts/invest-strategies-dst-struck.json` (17 entries). Each entry fires on its struck wording and on none of the approved wordings. `node tools/struck-check.test.js` prints "all controls pass".

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 16: rows 1, 4, 5, 7, 8, 9, 10, 16, 17, 18, 19, 20, 21, 22, 23, 24 |
| CORRECTED | 11: rows 2, 3, 6, 11, 12, 13, 14, 15, 25, 26, 27 |
| STRUCK | 0 rows. Parts of rows 3, 11 and 25 are cut (see below) |

## Data scripts re-run

- `fetch_formd.sh` downloaded the four SEC Form D quarters again. `formd_dst.py`, run in a scratch copy, gave the same `formd_dst_rows.csv` and `formd_dst_summary.json`, byte for byte after sorting keys.
- `worked_example.py` gave the same `worked_example.json`. I redid the arithmetic by hand. It matches, and it matches /sell/capital-gains/.
- `horry_owners.py` gave the same `horry_owners.json`. `horry_dst_parcels.py` gave the same 11 parcels and the same summary.
- One small bug in `formd_dst.py`: `date_range` sorts the dates as text, so it prints "01-APR-2026" to "31-OCT-2025". The real range, read from the rows, is 2025-10-01 to 2026-09-30. Nothing on the page uses that field.

## Corrections

**Row 2.** "Not a security" is wrong. The ruling says that for federal income tax the owner owns an undivided share of the building, not a trust certificate. Under securities law the share is a security (row 10). Use: "For federal income tax purposes you are treated as owning an undivided share of the building, not a trust certificate. Your share of the rent and of the deductions, such as depreciation, goes on your own return [Rev. Rul. 2004-86]."

**Row 3.** The seven limits are all in the ruling. "Short-term government bonds" is wrong. The ruling says short-term obligations of, or guaranteed by, the United States, and bank certificates of deposit, that mature before the next distribution date. Use: "short-term U.S. government debt or bank certificates of deposit that come due before the next payout". Cut "the seven deadly sins": no primary source.

**Row 6.** In the ruling the trust did not buy the building with a loan. A bought it with a nonrecourse note, and the trust took the note over: "Upon contribution, DST assumes A's rights and obligations under the note". Use: "In the IRS ruling, the trust took over the building's loan, and neither the trust nor any owner is personally liable on it [Rev. Rul. 2004-86]."

**Row 11.** investor.gov refused this container (HTTP 403), and the Wayback copy reset the connection. A search index shows the "highly illiquid" sentence on the bulletin. I could not read the hold-indefinitely or total-loss sentences. Use what an opened SEC page says: "DST shares are restricted securities: they cannot be resold on a public market unless the conditions of SEC Rule 144 are met [SEC Rule 506(b) and 506(c) pages; SEC, Rule 144: Selling Restricted and Control Securities, https://www.sec.gov/reports/rule-144-selling-restricted-control-securities]." The two other sentences stay off the page until someone opens the bulletin in a browser and confirms them.

**Row 12.** The quotes are in NASD Notice to Members 05-18 (published March 2, 2005). The notice is about TIC interests only. Nothing in it supports "forerunner", so say "a similar product". NASD Rule 2420 has been replaced by FINRA Rule 2040 (amended by SR-FINRA-2014-037, effective August 24, 2015, https://www.finra.org/rules-guidance/rulebooks/finra-rules/2040). Use: "In 2005 the securities regulator warned about a similar product, tenant-in-common shares sold for 1031 exchanges: as the fees rise, they offset the money saved by putting off the tax, and the shares are illiquid [NASD NtM 05-18]. Today FINRA Rule 2040 bars a securities firm from paying a person who is not registered but would need to be [FINRA Rule 2040]."

**Row 13.** 160 is a floor, and lower than the note says. Another 19 filings have DST in the name and the industry "Other Real Estate" but ticked the pooled-fund box, so the script dropped them. 10 more filed under the industry "Other", and 9 of those are real estate by name (one is the Hardeeville multifamily DST). Counting every original filing with DST in the name, except the "Pooled Investment Fund" industry group, gives 189 filings and $11.9 billion. Use: "at least 160 new DST real estate offerings ... set out to raise more than $10.8 billion; the middle one about $41 million". There are 159 distinct trusts, because NLC Health Investors DST filed twice.

**Row 14.** The counts are right: 159 of 160, and 95 + 3 = 98 under 506(c). "Closed to anyone but accredited investors" overstates the 62 filings under 506(b). The field records what was reported when the form was filed. Use: "159 of the 160 filings reported no non-accredited investor when they were filed, and 98 claimed Rule 506(c), which allows accredited buyers only."

**Row 15.** The counts are right. "All from one sponsor" is wrong. 20 of the 21 filings at $1,000 share one sponsor's address and related persons. The 21st is a different issuer in Castle Rock, Colorado. Use: "21 of those listed $1,000; 20 of the 21 came from one sponsor's numbered series."

**Row 25.** The script re-run gives the same results: 11 parcels, 10 owners, $201,747,318, and 6 of 10 last sales since 2024-11-01. One parcel is a pump station valued at $32. I measured the places on the county's road layer:
- Haven Pointe's parcel is about 200 to 250 m from Carolina Forest Blvd, not on it.
- Grandview at Clear Pond is 4 to 5 km from any segment of US 501, so "off US 501" fails.
- Market Village is about 200 to 250 m from the US 17 Bypass, so "off" becomes "near".

Property types:
- Both apartment parcels carry code 211. Grandview has unit-numbered addresses and points labelled AMENITY and DOG PARK. Listing sites (secondary) say both are apartment communities.
- Market Village has 140 small building footprints: a residential community.
- Code 373 includes a 20-acre parcel whose largest building is 76,934 sq ft, which is not a store.
- The two Water Tower Rd sites have no building footprint in the county layer.

So "stores" and "distribution" are not confirmed. Use: "two large apartment communities, one near Carolina Forest Boulevard and one in the Clear Pond area, a residential community near the US 17 Bypass, and commercial and industrial sites".

**Row 26.** The counts re-run the same. But codes 101, 107 and 109 are not every home in the county. About 31,000 more improved parcels carry other 1xx codes, among them 108 (condo-type units, 2,887) and 110 (patio-home lots, 2,350). 101, 107 and 109 are the three largest classes. The shares hold when 108 and 110 are added: 26.3 percent, and 57.6 percent for condo-type units. Use: "Of the 196,245 house lots, condo units and townhouse lots with a building in the county's three largest home classes, 50,413 (about 1 in 4) have an owner whose tax-bill address is outside South Carolina. For condo units it is 35,215 of 61,818, more than half."

**Row 27.** The counts re-run the same. The three counts leave out the 1,380 parcels with no deed date. "Used-up depreciation" overstates. A rental is depreciated over more than 10 to 20 years, and the second homes in this count take no depreciation. Use: "Long holds mean large gains and, for a rental, years of depreciation already taken."

## Notes on verified rows the writer needs

- Row 5: the ruling's trust is not publicly traded. The general sentence also rests on row 10 (restricted securities). 10 years is the ruling's example only.
- Row 7: Form 8824 instructions (2025). "A share of a DST's loan can count" applies the general rule. It is not an IRS sentence about DSTs, so keep "can".
- Row 18: the ruling quotes the pre-2018 1031(a)(2). Do not cite it as current law. 721(b) and the terms of the deal can make the swap into units taxable, so keep "can itself be tax-free".
- Row 19: I read all 13 annual reports. Each one describes an operating-partnership option to buy the DST interests for OP units, cash or both. Name none of them.
- Row 23: the ratified H. 4216 (R117, A110, approved March 30, 2026) does not amend 12-6-1150, so the 44 percent deduction stands.
- Row 24: the 5.21 percent assumes the seller's other South Carolina taxable income already reaches $30,000. The sibling page makes the same assumption.

## Photo candidates in PLAN.md

| Candidate | Licence on the file page | Result |
|---|---|---|
| File:Myrtle_Beach,_South_Carolina_02.JPG | CC BY-SA 4.0, own work, Elisa.rolle, taken 2013-10-12 | Do not use. It is 1,024 x 685 px, under the 1,200 px minimum in rules/images.md. Its keyword "Georgia20131014" also casts doubt on the place. |
| File:Myrtle_Beach,_South_Carolina_13.JPG | CC BY-SA 4.0, own work, Elisa.rolle, taken 2013-10-12 | Do not use. Same size problem (1,024 x 685 px) and the same keyword. |
| images/buyers/no-hoa/surfside-beach-houses-from-the-sand.webp (File:Surfside_Beach_Shoreline.jpg) | CC BY-SA 4.0, own work, BullDawg2021, 2023-07-16, 4,032 x 3,024 px; matches the site's record in data/2026-10-b/photos.json | Licence OK. It shows beach houses, not condos. |

The photo partner shot list (PLAN.md items 1 and 2) and the planned caption say "on Carolina Forest Boulevard" and "off US 501 near Clear Pond". Both fail (row 25). Write "near Carolina Forest Boulevard" and "in the Clear Pond area". The entrance at Haven Pointe is on a side street, about 200 to 250 m from the boulevard.

## Claims that should not be published

- "Seven deadly sins" (row 3).
- The hold-indefinitely and total-loss sentences of the investor bulletin, until someone opens it (row 11).
- "Distribution sites" and "stores" for the Horry County DST parcels (row 25).
