# PROPOSED: /hoa/benefits/ (research stage, 2026-11-04)

## facts/registry.json

1. **typical-hoa-fee-by-type.** "The middle HOA fee of homes for sale with a fee: condo about $640 a month, townhouse about $275, house about $95 (CRM feed, $5 steps)." Source: `data/2026-10-d/hoa-hoa-vs-poa/fees-by-type.json`; asOf 2026-11-01; staleBy 2026-12-15; ownerPage /hoa/hoa-vs-poa/. Wrong pattern to catch a second condo value in HOA copy: `\$6(?:[0-35-9]0|45)\b[^.]{0,40}\b(?:condo|HOA) fee` with an `unless` for "Horry County" when the Horry-only $650 is meant. Reason: the site prints $640 and $650 for the same thing on three pages (NEEDS item 2).
2. **hoa-no-price-premium-local.** "In Horry County, houses for sale with an HOA fee list for less per square foot than houses without one, in 12 of 13 ZIP codes; the 2019 national study's 4 percent premium does not show up in local asking prices." Source: `data/2026-11-a/hoa-benefits/price-test.json`; asOf 2026-11-04; staleBy 2027-05; ownerPage /hoa/benefits/. Wrong pattern: `\bHOAs? (?:increase|raise|add to|boost)s? (?:property|home) values?\b` with an `unless` for "nationally|national|study". Reason: generic copy elsewhere may repeat the national claim as if local.

## stories.json

None. The page uses `ny-buyer-rules-fit` as recorded.
