# Fixer verify: /buyers/homes-near-the-beach/

Batch 2026-11-n. Independent verifier, 2026-11-08. This checks the ledger rows marked VERIFIED-BY-FIXER. There is one: row 26. Rows 19, 28 and 30 only mention the word in their notes; their status is VERIFIED or CARRIED, so they are not part of this check.

## Result

| Row | Status |
|---|---|
| 26 | CORRECTED |

The counts in row 26 hold. Four page sentences built from it do not say what the counts say.

## What I did

- Wrote my own script (`scratchpad/wfn/buyers-homes-near-the-beach/fixver/chk.py`). It reads the raw `pins.json` and `walks.json` directly and does not use `fix1_budget.py`. Rules: the walk is `walk_m + snap_m`, under half a mile. Campground homes are dropped with the regex from `verify_campground.py`. The price bands are under $400,000 and $400,000 up to $600,000.
- Under $400,000: 20 houses. By city, 14 North Myrtle Beach, 5 Myrtle Beach, 1 Murrells Inlet. Middle size 1,358.5 sq ft (about 1,360). Beds: 13 with 3, 6 with 2, 1 with 4. Matches.
- $400,000 to $600,000: 51 houses. By stretch, 23, 17 and 11 (Surfside 8, Murrells Inlet 2, Garden City Beach 1). Middle size 1,461 sq ft (about 1,460). 38 have 3 bedrooms. Matches. No house is priced exactly $400,000 or $600,000. One campground home in the band was dropped, as the rule says.
- Streets, North Myrtle Beach, under $400,000: Edge Dr. 3, Hillside Dr. S 3, numbered avenues South 6 (11th x2, 23rd, 26th, 28th, 43rd), Live Oak 1, Madison 1. That is 12 of 14. Myrtle Beach: Collins St. 2, N Oak St. 1, so 3 of 5. Matches.
- Live search, opened today: `https://chapter3realty.com/homes/api/map?type=house&has=walk_to_beach&city=North%20Myrtle%20Beach&max=400000`. It returns total 19, with no campground home. I placed each pin in `data/2026-11-a/submarkets-north-myrtle-beach/map-parts.geojson`: Crescent Beach 12, Ocean Drive / Crescent Beach 3, Ocean Drive 2, Windy Hill 1, Little River Neck 1. Matches.
- The ledger note is wrong. It says "11 of the 14 walk-counted NMB houses fall strictly inside the Crescent Beach part, 1 more on its line." The count is 10 strictly inside, 2 where the Ocean Drive and Crescent Beach shapes overlap (705 11th Ave. S, 1004 Edge Dr.), 1 Ocean Drive only (701 11th Ave. S) and 1 Windy Hill (704 43rd Ave. S). Of all 20 houses under $400,000, that puts 10 to 12 in Crescent Beach. That is "about half", not "more than half" and not "most".

## Sentences to change

1. Short answer (spec line 413):
   - Page: "More than half the houses under $400,000 a short walk from the sand are in Crescent Beach, in North Myrtle Beach."
   - Use: "About half the houses under $400,000 a 10-minute walk or less from the sand are in Crescent Beach, in North Myrtle Beach."
   - Why: 10 of 20 are strictly inside, 12 of 20 if the overlap counts. "A short walk" is a distance word; the measure is a walk of under half a mile.
2. Crescent Beach card, beach towns section (spec line 436):
   - Page: "Most of the houses under $400,000 a short walk from the sand are here."
   - Use: "About half of the houses under $400,000 a 10-minute walk or less from the sand are here."
   - Why: the same as 1.
3. Walk table, $400,000 to $600,000 row, middle size (spec line 287 rounds to the nearest 50):
   - Page: "1,450 sq ft"
   - Use: "1,460 sq ft". Use `n0(M46.median_sqft)`, as the row above it does. The median is 1,461, and the ledger and the spec's own `must()` say 1,460.
4. Streets paragraph (spec line 482), first sentence:
   - Page: "In Crescent Beach, most of the houses under $400,000 are on Edge Drive, Hillside Drive South and the numbered avenues, such as 11th, 23rd and 28th Avenue South."
   - Use: "In North Myrtle Beach, most of these houses are on Edge Drive, Hillside Drive South and the numbered avenues South, such as 11th, 23rd and 28th Avenue South."
   - Why: the row counts streets by North Myrtle Beach (12 of 14), not by Crescent Beach. One of the two 11th Avenue South houses is in Ocean Drive only.

Nit, not blocking: the next sentence, "In Myrtle Beach, 3 of the 5 are on Collins Street and North Oak Street.", has no earlier "5" on the page. Suggested: "Another 5 are on the Myrtle Beach stretch, and 3 of those are on Collins Street and North Oak Street." The numbers are right.

## Struck list

I added three entries for row 26 to `buyers-homes-near-the-beach-struck.json`: "more than half / most ... in Crescent Beach / are here", "1,450 sq ft", and "In Crescent Beach, most of the houses under $400,000 are on Edge Drive". On the built page, `tools/struck-check.js` finds all four struck sentences. The replacement wording above finds none. `node tools/struck-check.test.js`: all controls pass.
