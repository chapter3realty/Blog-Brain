# Proposed registry rows and requests: /sell/seller-disclosure/

## facts/registry.json

1. **`sc-disclosure-form-shape`.** The commission's Residential Property Condition Disclosure Statement ("Effective 6/2023; Updated 6/2025") has nine parts and 28 numbered questions, each answered Yes, No or No Representation; the addendum has 11. It is on three pages now (/sell/fsbo/, /buyers/undisclosed-flooding/, this page). Known-wrong forms to catch: "28-question form" as if that were all, "in nine parts" spreading the 28 over all nine (FSBO 8's verifier), "15 questions". Source: https://llr.sc.gov/re/recpdf/Property-Condition-Disclosure-Statement-06.2025.pdf (md5 393ba8c3af8a7a1f0f0a2802e26ecd5c). staleBy 2027-02.
2. **`sc-disclosure-exemptions`.** 15 exempt kinds of sale (SC Code 27-50-30). Known-wrong: "family sales are exempt" (only spouse and lineal relatives, "solely"); "as-is sales are exempt" (no such item); "investors are exempt". staleBy 2027-02.
3. **`sc-beachfront-disclosure`.** SC Code 48-39-330: a contract for property in whole or in part seaward of the setback line must carry the setback statement. Known-wrong to catch: calling it a question on the commission's form (it is a contract term); giving a date for Horry's new lines (not set as of 2026-11-08). staleBy 2027-02, and when DES sets new Horry lines.
4. **`sc-code-url`.** The statehouse code address moved to `statmast.php?title=..&chapter=..` (see NEEDS 2). A registry note, not a fact.

Each needs a firing and a quiet control from real site text in its test file, per the repo rules.

## Story requests

None beyond OWNER-QUESTIONS Q1.
