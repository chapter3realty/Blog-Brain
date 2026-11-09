# Fact ledger: /buyers/relocating/from-new-york/

Researcher pass, 2026-11-09. Triage row (Light fix): the New York numbers disagree with the sister page. This page: "Overall prices here are about 17 percent below the New York metro area" and "A household earning $95,000 ... on about $79,000". The cost-of-living calculator for the same New York area shows "Cost of living 33% lower" and "$50,600 ... $24,400 less than you earn". Make the two pages use one price index, or state which index each number is; put the fact in facts/registry.json; delete the "someone who deals with New York buyers weekly" paragraph or rewrite it as a plain statement; rename the MLS widget. Only the facts for the index question are here.

Deciding fact (4c): what each number measures. Result: the 17 percent is the federal price index (BEA); the 33 percent is the site's own buyer-weighted index, a model, not a federal figure. Both are reproduced below.

Columns 8 and 9 are for the verifier.

| # | Claim, as the page will state it | Value and unit | Source: primary only | URL opened | Verbatim quote or table cell | As of | Stale by | Verifier status | Verifier note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | On the federal price index, overall prices in the Myrtle Beach metro are about 17 percent below the New York metro. | RPP all items 2024: Myrtle Beach-Conway-North Myrtle Beach MSA 93.642; New York-Newark-Jersey City MSA 112.563. 93.642 / 112.563 = 0.8319, so 16.8 percent lower | U.S. Bureau of Economic Analysis, Regional Price Parities by MSA (MARPP), 2024 | https://apps.bea.gov/regional/zip/MARPP.zip (file MARPP_MSA_2008_2024.csv) | "Myrtle Beach-Conway-North Myrtle Beach, SC (Metropolitan Statistical Area)", LineCode 1, "RPPs: All items", 2024 = "93.642"; "New York-Newark-Jersey City, NY-NJ (Metropolitan Statistical Area)", LineCode 1, "RPPs: All items", 2024 = "112.563". Same values in the website repo: `data/relocating/col-places.json` rpp.all and `data/relocating/raw/MARPP/MARPP_MSA_2008_2024.csv`. | 2024 prices; read 2026-11-09 | 2026-12 (BEA's next release, usually December) | VERIFIED | Both sides are whole metros (MSA). US average = 100. Verifier 2026-11-09: MARPP.zip opened: 2024 all items 93.642 and 112.563; 93.642 / 112.563 = 0.8319, 16.8 percent lower. |
| 2 | Housing about 44 percent lower; utilities about 31 percent lower; goods about 13 percent lower; other services about 7 percent lower. | Housing 83.129 / 148.616 = 0.559 (44.1% lower); utilities 87.986 / 127.018 = 0.693 (30.7%); goods 96.339 / 110.261 = 0.874 (12.6%); other 98.284 / 105.836 = 0.929 (7.1%) | same as row 1 | same as row 1 | LineCodes 2 to 5, 2024: "RPPs: Goods" 96.339 / 110.261; "RPPs: Services: Housing" 83.129 / 148.616; "RPPs: Services: Utilities" 87.986 / 127.018; "RPPs: Services: Other" 98.284 / 105.836. | read 2026-11-09 | 2026-12 | VERIFIED | Already on the page; all four hold. BEA housing is rent, including an imputed rent for owners (README-coli.md), not home prices. Verifier 2026-11-09: All four 2024 values match; ratios 44.1, 30.7, 12.6 and 7.1 percent lower. |
| 3 | A household earning $95,000 in the New York metro keeps the same standard of living here on about $79,000, on the federal price index. | 95,000 x 93.642 / 112.563 = 79,031 | Arithmetic on row 1 | same as row 1 | 95,000 x 0.8319 = 79,031. | read 2026-11-09 | 2026-12 | VERIFIED | Holds. It is a price-level comparison only: no taxes, no house purchase. Say "on the federal price index". Verifier 2026-11-09: 95,000 x 0.8319 = 79,031. |
| 4 | The site's cost-of-living calculator uses its own buyer-weighted index, which counts home prices more heavily. On it, New York to Myrtle Beach comes out about 33 percent lower, and $75,000 there is like about $50,600 here. | coli: Myrtle Beach 86.302; New York-Newark-Jersey City 127.916. 86.302 / 127.916 = 0.6747 (32.5% lower); 75,000 x 0.6747 = 50,601 | Chapter3's model, `data/relocating/col-places.json` field coli; method in `data/relocating/README-coli.md` | data file | README-coli.md: "`coli` — the buyer-weighted index the page uses"; "Weights: C2ER's own published category weights. Housing 28.03%, utilities 9.65%, groceries 13.06% + transportation 11.50% ..., health 4.36% + miscellaneous 33.40%"; "Housing is now half the price ratio and half the BEA housing parity"; "A destination constant of 0.92 is applied to Myrtle Beach." "This is a correction, not a measurement". | generated 2026-08-20 | when col-places.json is rebuilt | CORRECTED | NOT a primary-source fact. It is the site's model, and the README says so. It must never be stated as a federal figure or as C2ER data (README: "It is not C2ER data and must never be described as such"). The triage's "$24,400 less" is 75,000 - 50,600 = 24,400. Verifier 2026-11-09: Values match (86.302, 127.916; 32.5 percent; $50,601). Wording wrong: the bigger gap is not only home prices. README-coli.md: housing is half Zillow's home value ratio and half BEA's housing parity, and "A destination constant of 0.92 is applied to Myrtle Beach". Safe: "Our calculator uses its own estimate. It prices housing partly from home values and is adjusted to match published cost of living indexes, so it shows a bigger gap for New York, about a third lower [our model]." |
| 5 | Typical home value, July 2026: about $342,000 in the Myrtle Beach metro against about $737,000 in the New York metro. | ZHVI July 2026 (snapshot read 2026-08-20): Myrtle Beach 342,010; New York 737,078 | Zillow Research, ZHVI, all homes, smoothed, seasonally adjusted, metro | data file `data/relocating/col-places.json` (zhvi, zAsOf 2026-07-31); current file https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv | Snapshot: "zhvi": 342010 (Myrtle Beach, SC), "zhvi": 737078 (New York, NY), "zAsOf": "2026-07-31". Current file, read 2026-11-09, column 2026-07-31: Myrtle Beach 339,406; New York 724,590. Column 2026-09-30: Myrtle Beach 339,738; New York 730,949. | snapshot 2026-08-20; current read 2026-11-09 | monthly | CORRECTED | Zillow has revised July since the snapshot (Myrtle Beach -0.8%, New York -1.7%). Not part of this fix; flag for the next refresh of col-places.json so every sister page moves together. Verifier 2026-11-09: Zillow's current file, column 2026-07-31: Myrtle Beach $339,406, New York $724,590 (September: $339,738, $730,949). The page's $342,000 and $737,000 are a superseded snapshot. Refresh col-places.json for every sister page at once. |

## Proposed registry entry (for facts/registry.json; the fixer adds it with a firing and a quiet control)

```json
{
  "id": "rpp-ny-myrtle-beach",
  "fact": "On BEA's 2024 Regional Price Parities, overall prices in the Myrtle Beach metro (93.642) are about 17 percent below the New York-Newark-Jersey City metro (112.563). The cost-of-living calculator's 33 percent is the site's own buyer-weighted index, not a federal figure.",
  "source": "https://apps.bea.gov/regional/zip/MARPP.zip (MARPP_MSA_2008_2024.csv, LineCode 1, 2024)",
  "quote": "RPPs: All items 2024: Myrtle Beach-Conway-North Myrtle Beach 93.642; New York-Newark-Jersey City 112.563",
  "asOf": "2026-11-09",
  "staleBy": "2026-12-31",
  "ownerPage": "/buyers/relocating/from-new-york/",
  "wrong": [
    {
      "pattern": "\\b(?:3[0-9]|2[5-9]) percent (?:lower|below|cheaper)\\b[^.]{0,80}\\bNew York\\b|\\bNew York\\b[^.]{0,80}\\b(?:3[0-9]|2[5-9]) percent (?:lower|below|cheaper)\\b",
      "unless": "\\bour (?:own )?(?:buyer-weighted )?(?:index|calculator|estimate)\\b|\\bcalculator\\b",
      "note": "The federal price index puts Myrtle Beach about 17 percent below New York. A 25 to 39 percent figure is the calculator's own index and must be labeled as ours."
    }
  ]
}
```

The pattern needs a firing control (a sentence like "prices are 33 percent lower than New York") and a quiet control (this page's "about 17 percent below the New York metro area", and a labeled calculator sentence). Read every hit on the live site before trusting it.

## Not verified

- Nothing for the index question.

## Questions only the brokerage can answer

- None. The "someone who deals with New York buyers weekly" paragraph is deleted or made plain (FIX), not asked about.
