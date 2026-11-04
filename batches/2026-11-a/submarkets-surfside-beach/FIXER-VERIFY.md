# Fixer rows, independent check: /submarkets/surfside-beach/

Verifier, 2026-11-04. I did none of the research. Scope: the nine rows marked VERIFIED-BY-FIXER (45 to 53). Page read: `web2/chapter3realty/submarkets/surfside-beach/index.html`.

Opened again today:

- the Horry County Zoning Ordinance PDF (346 pages, downloaded and searched in full);
- 42 U.S.C. 4012a at Cornell LII;
- the town's event pages 352, 344 and 365 (live), and the saved copies of 326, 344, 350, 352, 365, 367, 393 and 396;
- the town's zoning map PDF, rendered at 300 dpi around Lakeside Drive and Willow Drive South.

Re-run: `build_streets.py` on the earlier verifier's own road pull (`wf2/submarkets-surfside-beach/verify/raw/roads.json`), into my own folder; the results are identical to `band-edge-streets.json`. I also joined county address points to `parcel-zones.json` by PIN for the three edge streets, and re-read the OpenFEMA policy file split by `primaryResidenceIndicator`.

Result: 6 verified, 3 corrected, 0 struck. pass = false. There are four page edits, one for row 46 (two places), one for row 47 (two table cells) and one for row 49. Struck entries were added to `submarkets-surfside-beach-struck.json` for rows 46, 47 and 49. All 15 entries fire on their struck wording, and no approved wording fires. `node tools/struck-check.test.js`: all controls pass.

| Row | Verdict | Value or reason |
|---|---|---|
| 45 | VERIFIED | I searched the full ordinance text myself for: short-term, vacation rent, vacation home, nightly, Airbnb, homestay, transient, lease, rented, consecutive days, and "less than 30/90 days". No rental-length rule turned up. "Short-term occupancy" appears only in the Destination Park (campground) district's intent. "Permanent vacation homes" appear only as a conditional use in destination parks. The definitions of Hotel/Motel, Bed and Breakfast and Boarding house describe lodging businesses, not a rental-length limit. The sibling row (invest-where-to-buy 8) is still CORRECTED with this safe wording. Page: "Horry County's zoning has no limit on how long a home there may be rented, but a subdivision's recorded rules can." It matches, and it avoids the banned "sets". |
| 46 | CORRECTED | The numbers re-run exactly: Dogwood N 920 m in the band and 801 m in R1/R2; Lakeside 1,438 m and 0 m; Willow S 513 m and 843 m; edge points Lakeside 21, Dogwood N 17, Willow S 8 of 67. Dogwood is right: houses with a Dogwood Dr N address are 35 R3/C3, 26 R1/R2 and 10 PD. **Lakeside is wrong.** The street's centerline is all inside the band, but the line runs along the street's inland edge, not behind the houses. Of the 46 houses with a Lakeside Dr address, 15 are in R2 or R1, each wholly inside the district (zone_share 1.0). All 15 are on the inland side of the street, south of about 6th Avenue South (along-shore position -591 m to -1,279 m from the pier). All 22 houses on the ocean side are R3. The 9 inland-side R3 houses are at the north end, where the line is still on Willow. The town's zoning map shows the same: green R2 lots front the inland side of Lakeside from about 6th to 11th Avenue South, and the blue R3 is on its ocean side. The edge follows Willow Dr S for 483 m (about 0.3 mile, from about 1st to 6th Avenue South), then Lakeside for 1,390 m. "For a few blocks" also fails the distance-word rule (rules/distance-words.json). |
| 47 | CORRECTED | The arithmetic is right: 857,423 x 0.06 x 0.2142 = $11,019.60. The column is "A house near the ocean, rented or a second home", but its flood figure ($1,256) is the median of all 301 single-family policies in block group 512021, primary homes included (the trap of an average whose group differs from the page's case). The second-home and rental policies (`primaryResidenceIndicator` false) have a median of $1,343.50 (196 policies) in 512021 and $1,349.50 (100) in the north ocean block group 512012; both together, $1,345 (296). Use about $1,350 for the flood cell. The total is 11,020 + 1,345 = $12,365, so about $12,400. The county value ($857,423, R3 houses, 752) and the tax figure ($11,000) stand. |
| 48 | VERIFIED | 42 U.S.C. 4012a(b)(1)(A) covers regulated lending institutions, (b)(2) covers federal agency lenders, and (b)(3) covers loans Fannie Mae and Freddie Mac buy. Each applies in a special flood hazard area of a community where NFIP insurance is available; the town takes part (CRS Class 7, row 14). Private flood insurance that meets the coverage rule also counts. Page: "A federally backed or regulated mortgage on a home in a high-risk zone requires flood insurance." It matches. |
| 49 | CORRECTED | Live page 352: "EVERY Sunday, May 24th through August 30th from 4:00 p.m. to 7:00 p.m." and "Next to the Surfside Beach Library". Free and in Memorial Park, both right. "Every Sunday evening" is wrong for a 4 to 7 p.m. concert. Most of it is in the afternoon, and a reader who comes in the evening finds it over. Give the hours. |
| 50 | VERIFIED | 365: Memorial Day route down Ocean Boulevard from 16th Ave N to 16th Ave S. 367: same route; "There is no fee to join the fun!" 344 (live): Yuletide parade in December; roads closed: Ocean Blvd S from 16th Ave S to Surfside Drive, and Surfside Drive. All three use Ocean Boulevard. Page wording matches. |
| 51 | VERIFIED | 393: kite festival at the fishing pier, Saturday, April 25; free shuttles (pier lot closed). 396: End of Summer Fireworks Festival, Sunday, September 6, 2026, at the pier; "Fireworks Show off the Pier"; "Free shuttle service from all parking lots". Page matches. Nit, not a fact error: the page lists it under "Fall", but the town calls it the end of summer and holds it before the equinox. "Late summer" would fit, or the "All season" group. |
| 52 | VERIFIED | 350: "two fun days", BBQ competition, both days "FREE ADMISSION", March 6 and 7. 326: "Thursdays, March 19th through November 12th", "Corner of Surfside Drive and Willow Drive", "Admission is FREE!" The page does not name the business that presents the market. Page matches. |
| 53 | VERIFIED | 344 and 396: "#thefamilybeach"; 396 also: "Surfside Beach, also known as the Family Beach". The live home page text does not say it (it may be in the logo image). The town's own event pages are enough for "The town calls itself the Family Beach." |

## Page sentences to change

1. Row 46, the rental-line paragraph (section "Where can you rent by the night in Surfside Beach?"):
   - Now: "South of the pier, it follows Willow Drive South for a few blocks. Then it runs just behind the houses on Lakeside Drive, which are on the rental side."
   - Use: "South of the pier, it follows Willow Drive South for about 0.3 mile, to about 6th Avenue South. From there it follows Lakeside Drive: houses on the ocean side of Lakeside are on the rental side, and houses on its inland side are not."

2. Row 46, the `<title>` of all three map SVGs (c3-sb-map-t, c3-sb-map-s, c3-sb-map-n):
   - Now: "North of the pier the line between them follows Dogwood Drive North; south of the pier it runs behind Lakeside Drive."
   - Use: "North of the pier the line between them follows Dogwood Drive North; south of the pier it follows Willow Drive South, then Lakeside Drive."

3. Row 47, the yearly-cost table, column "A house near the ocean, rented or a second home":
   - Row "Flood policy, if you insure for flood": "$1,250" becomes "$1,350".
   - Row "Total, besides the mortgage and home insurance": "$12,300" becomes "$12,400".
   - The flood section's "There, a typical flood policy on a house costs about $1,250 a year." stays. It is all policies south of the pier (row 15).

4. Row 49, "A year of town events", Summer:
   - Now: "A free concert in Memorial Park, next to the library, every Sunday evening."
   - Use: "A free concert in Memorial Park, next to the library, on Sundays from 4 to 7 p.m."

## Notes for the lead

- struck-check reads neither SVG titles nor table cells that hold only a figure. The row 46 map titles and the row 47 cells cannot be guarded by the struck list. Check those four places by eye after the fix.
- Row 43 (outside this scope; verified earlier): the inland column "An inland house you live in" uses $702, the median of all 64 policies in block group 512023. The 51 primary-home policies there have a median of $664 and the 13 others $939. "About $700" is still within rounding, but the group is not the column's case. The lead may want "about $650" and a total of about $2,700.
- Row 51 nit: the "Fall" heading for the end-of-summer fireworks (above).
