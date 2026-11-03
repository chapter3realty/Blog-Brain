# Fixer rows, independent check: /invest/where-to-buy/

Verifier, 2026-11-03. I did none of the research. Scope: the four rows marked VERIFIED-BY-FIXER (26F, 29F, 35, 36). The owner's rule (2026-10-26) settles the source of 26F and 29F: data/str-market.json. I checked the file's figures, the rounding, the arithmetic and the page's wording, not the source.

Opened again today: data/str-market.json; the eight AirROI market pages (written to `scratchpad/airroi-2026-11-03.json`); OpenFEMA NfipPolicies v3 for the eleven ZIP codes (24,000 policies re-pulled; `nfip_r1.py`'s grouping re-run); the Myrtle Beach rental-zone file and the spec that draws it.

Result: 4 verified, 0 corrected, 0 struck. Eight page sentences say more than their rows; struck wording added to `invest-where-to-buy-struck.json` (four entries: 26F, 26F, 29F, 26F). "Many owners compete for those guests." is no longer on the page.

| Row | Verdict | Value or reason |
|---|---|---|
| 26F | VERIFIED | File revenue: MI 38,356; Surfside 35,482; GC 33,942; NMB 28,667; Pawleys 27,953; MB 20,946. Page rounding right ($38,000, $35,000, $34,000, $29,000, $28,000, $21,000); Murrells Inlet the most and Myrtle Beach the least of the six. The short answer's "$20,000 to $38,000" should read $21,000, as the Myrtle Beach section does. The file is stale: AirROI today (12 months to September 2026) shows MI 47,603, Surfside 42,902, GC 41,223, NMB 34,401, Pawleys 31,430, MB 25,807; the order holds. Two sibling pages already print today's AirROI values for the same markets (/submarkets/murrells-inlet/ "about $47,600"; /invest/condos/ Myrtle Beach $25,807), so the site shows two values per market until the refresh. The page names the source only in the sources line ("Nightly income: AirROI's average per listing") and once as "the rental data's Murrells Inlet area". It never says the figures are a rental-data company's estimate, and three sentences say "here", "in the city" or "each", which the row does not support (AirROI's towns are its own market areas; an average is not each rental's). |
| 29F | VERIFIED | 300,000 x 0.06 x 0.2212 = 3,982; 28,667 − 3,982 − 8,400 = 16,285; 16,285 / 300,000 = 5.43 percent. Longs: 27,240 − 3,617 − 1,200 = 22,423; 7.48 percent. NMB 221.2 mills (171.2 + 50.0) is district 550, checked on a bill in sibling rows (VERIFY row 21). After the refresh: 34,401 − 3,982 − 8,400 = 22,019, 7.34 percent, still under Longs. The page's "city average" and "the city's average for every nightly rental" say more than the row: it is AirROI's North Myrtle Beach market average over the Airbnb listings it tracks, not the city's and not every rental. |
| 35 | VERIFIED | Re-pulled each ZIP (policyEffectiveDate 2025-09-01 to 2026-08-31) and re-ran the grouping: beach V 569, median 3,284; beach A 4,365, 1,358; beach X 8,055, 588; inland A 1,404, 994.5; inland X 6,075, 566. Occupancy types 1 and 11 hold no condo units (unit policies are type 16, condominium code U); dropping the one non-N record moves nothing. |
| 36 | VERIFIED | `map-str-zones.geojson` has one "str" feature, "Nightly rentals allowed (shaded on the city's map)"; the spec (line 159) draws that feature. Page: "the dark blue on the map". Minor: the map's alt text says the zones run "along the ocean"; they also cover stretches of the Bypass and US 501 and The Market Common. |

## Page sentences to change

Row 26F (by the owner's ruling, the page must call these a rental-data company's estimate of what an average nightly rental took in):
- "A nightly rental there took in about $20,000 to $38,000 on average in the past year, before costs." to "A rental-data company estimates that the average nightly rental there took in about $21,000 to $38,000 in a year, before costs." (After the refresh: "about $26,000 to $48,000 in the 12 months to September 2026".)
- "A nightly rental here took in about $29,000 a year on average, before costs." to "In the rental data's North Myrtle Beach area, the average nightly rental took in about $29,000 a year, before costs."
- "The average nightly rental here brought in about $35,000 a year." to "In the rental data's Surfside Beach area, the average nightly rental brought in about $35,000 a year, before costs."
- "Nightly rentals in Garden City earned about $34,000 each a year, on average." to "In the rental data's Garden City Beach area, the average nightly rental took in about $34,000 a year, before costs."
- "In the city, the average nightly rental earned about $21,000 a year, the least of the six beach areas." to "In the rental data's Myrtle Beach area, the average nightly rental took in about $21,000 a year, the least of the six beach areas."
- Optional: "the average nightly rental made about $38,000 a year" to "took in about $38,000 a year, before costs" (Murrells Inlet section), so no sentence reads as profit.

Row 29F:
- Worked example label "What a nightly rental took in, city average" to "What the average nightly rental took in, rental data for North Myrtle Beach".
- "Its income is the city's average for every nightly rental, houses and condos of every size, not this condo's." to "Its income is a rental-data company's estimate of the average Airbnb listing in its North Myrtle Beach area, houses and condos of every size, not this condo's."

## For the lead

- The struck list's older entries for rows 26 and 29 (vendor figures; "16,300", "5.4 percent", "$28,700") now fire on the figures the owner's rule put back. Retire them or give them an "unless", or the struck check fails on approved text.
- Two other struck entries fire on the built page today: row 8, "A subdivision's recorded rules decide, and we read them for each house." (Socastee section; approved: "Horry County's zoning sets no limit on how long a home outside the towns may be rented. A subdivision's recorded rules can."), and row 1, "South Carolina's lodging tax applies to stays of less than 90 days in a row." (the 15-day carve-out is in the next sentence, so the entry fires; join the two sentences or narrow the entry).
