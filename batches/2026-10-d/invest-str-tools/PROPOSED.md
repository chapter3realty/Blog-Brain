# Proposed registry rows: /invest/str-tools/

For `facts/registry.json`, after verification. Each is on two pages or easy to get wrong.

1. **`mb-2br-oceanfront-condo-fee`** (owner page /invest/str-tools/; also /invest/str-vs-ltr/): "The middle two-bedroom condo for sale in an oceanfront building inside Myrtle Beach that allows nightly rentals asks about $325,000 to $327,000, with an HOA fee of about $1,200 to $1,250 a month." Source: CRM map API, aggregate, 2026-11-01. staleBy 2027-02-01. Wrong patterns: none yet; set after the writer's wording.
2. **`airroi-period-2026-09`** (owner /invest/airbnb-income/): "AirROI figures on the site cover the 12 months to September 2026 and count cleaning fees in gross." Wrong pattern: the August values from `str-market.json` printed beside the new ones, e.g. `\$20,946|\$38,356` on any page that also prints `\$25,807|\$47,603`. staleBy 2027-01-01.
3. **`horry-mills-2026-rental`** (owner /buyers/property-taxes/): "2026 total mills on a rental: Myrtle Beach 254.6, North Myrtle Beach 221.2, Surfside Beach 214.2, Murrells Inlet - Garden City 207.3, unincorporated 201.0, Conway 272.5." Wrong pattern: `216\.2` beside North Myrtle Beach (the 2025 figure on the rental-returns calculator). staleBy 2027-08-01. Needs the verifier's check of the add-on levies (facts row 4 note).

## From review round 1 (fixer, 2026-11-01)

- **Registry candidate, `mb-oceanfront-hoa-fee`**: a typical two-bedroom condo for sale in an oceanfront building inside Myrtle Beach that allows nightly rentals has an HOA fee of about $1,225 a month (ledger rows 9 and 31; CRM aggregate). It is on this page and on /invest/str-vs-ltr/. Stale monthly, because listings change.
- **Registry candidate, `garden-city-waccamaw-condos`**: of the two-bedroom condos for sale in the Garden City area marked for nightly rentals, nearly all are on Waccamaw Drive, within about 0.1 mile of the shore, at fees of about $575 a month (row 31). Useful to /submarkets/garden-city/ and /buyers/no-hoa-homes/ if either names condo fees.
