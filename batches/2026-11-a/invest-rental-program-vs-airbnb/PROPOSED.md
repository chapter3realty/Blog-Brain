# Proposed registry rows: /invest/rental-program-vs-airbnb/

Both facts are on more than one page and one is already wrong on the live site, so each belongs in `facts/registry.json` (CLAUDE.md, "Working on the tools").

## 1. vrbo-host-commission

- fact: Vrbo's pay-per-booking commission is 12 percent of the rent and any fees the host adds, with no separate processing fee when Vrbo takes the payment.
- source: https://help.vrbo.com/articles/How-is-the-booking-fee-calculated
- quote: "Under the pay-per-booking model, a 12% commission rate is charged on the rental amount and any additional fees you charge to the traveler (such as cleaning, pet, and boat fees)"
- asOf 2026-11-04, staleBy 2027-02-04, ownerPage /invest/rental-program-vs-airbnb/
- wrong patterns, each read against the live site on 2026-11-04:
  - `about 8 percent in total` (live /invest/airbnb-income/, built by `specs/str-setup.js`). Note: "Vrbo's pay-per-booking model charges about 8 percent in total."
  - `5 percent commission plus 3 percent` (live /invest/rental-program-vs-airbnb/, fixed by this rebuild).
- firing control: "Vrbo's pay-per-booking model charges about 8 percent in total." Quiet control: "Vrbo takes 12 percent of the rent and the cleaning fee."

## 2. airbnb-host-fee

- fact: Airbnb is moving all home hosts to a single host fee; most hosts pay 15.5 percent. The 3 percent split fee is being phased out.
- source: https://www.airbnb.com/help/article/1857
- quote: "We're in the process of transitioning all home hosts to a single service fee structure. The split-fee structure is being phased out" and "Most hosts pay 15.5%"
- asOf 2026-11-04, staleBy 2027-02-04, ownerPage /invest/str-tools/ (it already says 15.5 percent)
- wrong pattern: `about 3 percent on Airbnb` and `Airbnb's host fee is 3 percent` (the live rental-program page; no other live page found on 2026-11-04 with a search for "3 percent" near "Airbnb").
- firing control: "the platform fee: about 3 percent on Airbnb". Quiet control: "Most hosts pay 15.5 percent, the old split fee of 3 percent is being phased out."

## Wording drift to sweep

The 2026-10-d str-tools and str-vs-ltr ledgers (rows 22) say the 15.5 percent fee is "required for hosts who use property management software". Airbnb's page now says "mandatory for most hosts". Both pages state 15.5 percent, which is still right; only the reason line changed.
