# Verify: /invest/rental-depreciation/

Independent verifier, 2026-11-09. I re-queried Horry County GIS layer 24 for the three PINs and the three condo counts, matched the deeds in the website's out-of-state-buyers.json, measured the parcel shapes around Roxanne Towers and the Surfside lot, and redid the arithmetic. I did not open the assessor's property cards; the GIS layer carries the assessor's values.

Counts: 5 VERIFIED, 1 CORRECTED, 0 STRUCK.

## Correction

- Row 2, CORRECTED (group). Land $190,000, building $115,000, total $305,000 and the 62 percent share are right. But the record is land use 109, the townhouse class (the website's own scripts read 109 as townhouses: data/2026-10-d/invest-strategies-dst/horry_owners.py, data/2026-11-a/submarkets-little-river/analyze.py). Every one of the 72 "OCEAN PINES II" parcels is 109, and this lot measures about 106 square meters from the county parcel shape. Safe wording: "A townhouse in Surfside Beach that sold for the same $326,000 shows land $190,000 and building $115,000, a land share of about 62 percent [county record]." Or pick a code 101 house at $326,000 instead.

## Verified, with notes

- Row 1: PIN 44013030037, land use 101 (house class), lot about 668 square meters. Values and deed as quoted.
- Row 3: PIN 42415040028, Roxanne Towers HPR, land 0, building 212,000, tax district 899. Oceanfront, measured from the county parcel shapes: stepping seaward (southeast) from the tower's parcel, no parcel for 117 meters (beach); stepping landward, a gap of about 20 meters (the road) and then "EASTERN SECT" lots. "An oceanfront tower in Myrtle Beach" is supported.
- Row 4: the counts reproduce. The group is residential parcels whose legal description says "HPR". "Of about 40,700 condo units in the county record, all but 8 show no land value" is fair.
- Rows 5 and 6: arithmetic redone. The values are the county's current values, applied to a late-2025 and an early-2026 purchase, as the ledger notes.

## FIX.md: sentences that go beyond the verified rows

- "Two real Horry County houses that each sold for $326,000 show how far the share moves." One is a townhouse (row 2). Write "Two real Horry County homes".
- "A house near the beach in Surfside Beach shows land $190,000 and building $115,000". Two problems. It is a townhouse (row 2). And "near the beach" has no measure; the parcel shapes put the lot roughly 900 meters to 1 kilometer from the beach in a straight line. Cut "near the beach", or give the measure.
- "Most do not. Of about 40,700 condo units in the county record, all but 8 show no land value. A unit in a condo tower in Myrtle Beach that sold for $215,000 shows land $0 and building $212,000." Rows 3 and 4. Pass. "An oceanfront tower" is allowed (row 3).
- Optional lede, "A condo record usually shows no land value": row 4. Pass.
- Never print the PIN, lot, unit, subdivision or deed book on the page. The plan already says so.

Struck list: batches/2026-11-b/facts/invest-rental-depreciation-struck.json.
