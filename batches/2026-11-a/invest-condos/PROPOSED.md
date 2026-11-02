# Proposed registry rows: /invest/condos/

For `facts/registry.json`, after the verifier marks the ledger rows verified. Each fact is likely to appear on more than one page.

| Proposed id | Fact | Source | Ledger rows | Owner page | Wrong patterns to watch |
|---|---|---|---|---|---|
| `mb-metro-condo-zhvi-crash` | In the Myrtle Beach metro, the typical condo value (Zillow ZHVI, condo/co-op, mid tier) fell about 43 percent from its November 2006 high to January 2012 and first passed that high again in October 2021; the typical house fell about 30 percent and recovered in August 2020. | https://www.zillow.com/research/data/ (metro condo and sfr CSVs) | 1, 2 | /invest/condos/ | a condo crash figure other than about 43 percent for the metro; "condos recovered by 2016" and the like |
| `horry-condo-main-home-share` | About 1 in 5 Horry County condo units (8,797 of 40,963 on 2026-11-02) is taxed at the 4 percent legal-residence rate, against about 6 in 10 other homes. | Horry County GIS parcel layer 24 count queries (`data/2026-11-a/invest-condos/raw/ratio-counts.json`) | 7 | /invest/condos/ (county); /submarkets/myrtle-beach/ (city, about 1 in 8) | a county share stated as the city's, or the reverse |

No new stories. The owner questions are in `facts.md` ("Questions only the brokerage can answer").
