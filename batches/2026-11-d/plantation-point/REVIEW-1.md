# Review 1: /submarkets/myrtle-beach/plantation-point/

Reviewer: pass=false, score 8. Three blocking items, ten nits. All three blocking items are fixed. Spec: `specs/plantation-point.js` in the website working copy `scratchpad/wt-139`. Before-copies: `scratchpad/nd/plantation-point/spec-before-review1.js` and `index-before-review1.html`.

## Findings declined or taken in part

- **Edge-feed title "Plantation Point homes with room for a pool".** Not taken as worded: the feed filter cannot check that a lot has room for a pool. BUILD.md now has "Half the houses have a pool: Plantation Point homes for sale", which is true of the neighborhood (row 6) and claims nothing about one listing.
- **"Bring the club's patio up next to the pools".** Taken another way. The patio is now the hero sub line (row 12, the verifier's wording), so section 1 does not say it again. The club, its two courses and the PineHills quote come right after the pools and the aerial.
- **Pool fact four times before the photo.** Now three, each saying something different: the H1 ("half the houses have a pool"), the glance row (the count, 176), and section 1 (176 of 352 against about 1 in 16 across the county). The short answer no longer says it.
- **History lead.** It now opens with Myrtle Beach Farms' role (row 24). The second sentence still says the company "recorded" the restrictions, because row 23 allows "recorded by" and forbids "built by".
- **Critic tool miss (overflow inside a scroll box).** Not changed here: this helper touches only its own page. For the tools owner: `critic.mjs` should report a table wider than its scroll box when a column is cut off.
- **P2 (numbers per 100 words) fell from 91% to 76%.** Kept. The added numbers are the reviewer's location line, the pool count and the 35 lots in the FAQ answer.

## What changed (round 1)

1. **Flood truth (blocking).** "A lender will not require flood insurance" is gone from the section and the FAQ. Both now say "FEMA's high-risk zone, the zone where a lender requires flood insurance" (the 2026-10-b verifier's wording). The FAQ adds the 35 lots: "Where the zone touches 35 lots along the water, it stops short of the houses, so we check each house's flood history before you offer." The section is now one sentence, then a two-item list (along the water; flood history), then the offer. The 320 px read.wall on #flood is gone.
2. **Repetition (blocking).** The new hero sub line is its own hook: "Myrtlewood Golf Club, next to Plantation Point, serves food and drink to people who do not play, and it has a patio by the Intracoastal Waterway." It names the place and a place word, so `build.js audit`'s two sub-line checks pass. The short answer no longer repeats the waterway and golf line or the pool. Its first paragraph now says where the place is. Section 1's "the Intracoastal Waterway along one side and the Myrtlewood golf courses along another" is cut. The HOA section opens with new detail: "Not one of the 6 Plantation Point homes for sale lists a monthly fee, and 3 of them say there is no HOA at all." The 320 px read.wall on the hero is gone.
3. **Comparison table at 320 px (blocking).** The labels are now Houses, Lot, Under roof, Pools, Golf lots, Waterway lots, "Sold, past year" and "Beach by car". "About" is dropped from the cells, and the note under the table says the sizes, prices and drives are the typical one, rounded. "sq ft" and "min" have no-break spaces. The "Restrictions recorded" row is gone. Below 400 px the headers are not in capitals, and the box and cell padding are narrower. Measured: 254 px of table in a 270 px box at 320, 294 in 310 at 360, 324 in 340 at 390. No cell overflows, and nothing is cut off.
4. **Where is it (nit).** The short answer now says "between the US 17 Bypass and the Intracoastal Waterway, near 38th Avenue North. The nearest public beach access is about 2.7 miles away." New facts.md row 41 is VERIFIED-BY-FIXER: 505 of 506 lot centers fall between the bypass line and the Waterway's edge. The 506th lies past the east end of the Waterway shape in the map frame. The plaza and the beach access are across the bypass. The map has a small arrow toward the beach, "Beach, 2.7 mi", in the empty corner past the bypass, and the caption and the map's text title explain it.
5. **Row 36 label (nit).** "Beach parking" is now "City parking decal".
6. **Selling order in section 1 (nit).** The order is now: the pools against the county, the aerial, Myrtlewood and the quote, the clubhouse drive, the lots and houses, then "Most are full-time homes: the county taxes about 85 in 100 houses here as their owner's primary residence." The SF 10 zoning sentence moved to the lots section.
7. **History (nit).** It opens with "Myrtle Beach Farms, formed in 1912 and later Burroughs & Chapin, played a central role in the growth of Myrtle Beach." Then: "It recorded Plantation Point's restrictions in phases, starting in 1990."
8. **"About N minutes away by car" (nit).** The beach line left the short answer. The clubhouse is now "a 10-minute drive". Only The Landing's Food Lion line keeps the old ending. repeat-check --strict passes.
9. **Map labels at 320 px (nit).** Below 380 px the small labels use the full label size: 12 px on screen at 320 (was about 8 to 9), and 14 px at 360 and 390.
10. **The Landing section.** "Landing Development Corporation recorded its own restrictions." is cut. It was recorder language, and row 23 does not show which rules bind which street.
11. **BUILD.md.** The outline, the gate results and the edge-feed title are updated. The IDX places, sitemap and llms.txt lines and the sibling list are unchanged and still for the lead.

## Gates after the fix (port 8925 preview)

| Gate | Result |
|---|---|
| `mkpage.js` | Built; hero sub 26 words. |
| `score.js` (SCORE_TODAY=2026-11-13) | 97/100 (SEO 92, AEO 100, Human 99, Trust 100). Only FAIL: S8, the lead's sibling links. |
| `critic.mjs` 320, 390, 1440 | 0 blocking, 0 warnings at every width. JSON `scratchpad/nd/plantation-point/r1-critic.json`; shots `scratchpad/nd/plantation-point/r1-shots/`. |
| `build.js check` | OK. |
| `build.js audit` | Only the lead's "missing from sitemap.xml" and "orphan". The two sub-line FAILs that the first draft of the new sub line caused are cleared. |
| `claims-scan.js` | 0 findings. |
| `facts-check.js` | 0 on this page. |
| `house-claims.js` | 0. |
| `struck-check.js` | No struck wording. |
| `repeat-check.js --strict` | Passes. |
| `image-meta.js --only` | Pass. |
| `photos.js check` | All photo records pass. |
| By hand | No sentence over 28 words. No em dash, no "So" opener, no "Here is". |

Shots looked at: the hero and the short answer at 320 and 390; the table at 320 and 390; the map at 320 and 1440; the flood section at 320; section 1 at 390 (`scratchpad/nd/plantation-point/r1-*.png`).
