# Proposed registry rows: /invest/str-vs-ltr/

For `facts/registry.json`, once facts rows are verified. Each needs a firing and a quiet control from real site text.

1. **`fmr-2027-myrtle-beach`** (row 9). "HUD's FY2027 Fair Market Rent for the Myrtle Beach-North Myrtle Beach-Conway HUD Metro FMR Area: $1,155 studio, $1,258 one bedroom, $1,504 two, $1,823 three, $1,981 four." On /invest/rent-prices/ and this page. ownerPage /invest/rent-prices/. staleBy 2027-10-01. Wrong pattern: an FY2026 figure stated as current.
2. **`str-vs-ltr-gross-multiple`** (row 15). "The typical Myrtle Beach two-bedroom Airbnb grosses about 1.1 times a year's lease at HUD's standard rent; only a top-quarter listing grosses 2 to 3 times." ownerPage /invest/str-vs-ltr/. Wrong pattern: `\b(?:2|two)\s*(?:-|to)\s*(?:3|three)\s*(?:x|times)\b[^.]{0,80}\b(?:gross|rent|lease|long-term)` unless the sentence names the top quarter. It was wrong once (the live title).
3. **`airroi-myrtle-beach-2026-09`** (rows 1 to 6), only if the lead refreshes `str-market.json` (NEEDS 1); otherwise that file stays the one source and this page reads from it.

No new stories. Rows 29 to 31 use existing story-bank entries with their limits.
