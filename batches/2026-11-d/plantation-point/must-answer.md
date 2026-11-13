# Plantation Point, Myrtle Beach: what people search, and what this page must answer

Page: `/submarkets/myrtle-beach/plantation-point/` (new). Spec: `specs/plantation-point.js`. Data: `data/2026-11-d/plantation-point/`.

## Demand

| Search | Volume a month | Source |
|---|---|---|
| plantation point | 880 (US, all places named Plantation Point) | `scratchpad/kw/ranked-c21theharrelsongroup.com.json` (DataForSEO, 2026-10-19). C21 The Harrelson Group ranks 1 with `/plantation-point-homes/`. |
| plantation point homes for sale | 50 | same file. C21 ranks 2. |

The 880 is the head term for every Plantation Point in the country. The suggestions show who shares it: Plantation Point in Bluffton SC (apartments and an HOA), Plantation Pointe dentistry, Florence KY, Scottsboro AL, Rockledge FL, "plantation point shopping center". The Myrtle Beach share is the part we can win; the title and first line must say "Myrtle Beach" so Google pairs the page with the right place.

Google suggestions (Firefox client, pulled 2026-11-13, `data/2026-11-d/plantation-point/raw/google-suggestions.txt`), Myrtle Beach ones only:

- plantation point myrtle beach; plantation point myrtle beach sc
- plantation point myrtle beach (sc) homes for sale; for sale plantation point myrtle beach sc; realtor com plantation point myrtle beach sc
- plantation point golf course myrtle beach; plantation point golf course
- plantation point plaza myrtle beach (the shopping center at the entrance: Food Lion)
- plantation point hoa fees; plantation point homeowners association (mixed with Bluffton)
- where is plantation point; plantation point reviews
- the landing at plantation point; the landing at plantation point sc
- myrtlewood golf course homes for sale
- Near misses Google offers in the same box: inlet point plantation, north point plantation (other places; do not chase).

People also ask: not pulled. No SERP file in `scratchpad/kw/serp.json` holds a Plantation Point query, and Google's results page is not fetched from here. The suggestions above stand in for it.

## Why they typed it (the reader behind each search)

| Search | Likely reason | What answers it |
|---|---|---|
| plantation point myrtle beach | A buyer heard the name (a listing, a friend, a drive past the Food Lion) and wants to know what it is and whether it fits | Where it is, what the homes are, what they sell for, the water and the golf, the fee |
| ... homes for sale | Ready to look | The live homes strip, the count for sale, the price range |
| plantation point hoa fees | Expects a big-community fee; worried about rules | The deciding fact: no home for sale lists a monthly fee; the HOA owns only a small entrance parcel; what the recorded restrictions are |
| plantation point golf course | Thinks there is a Plantation Point course | The course next door is Myrtlewood (PineHills and Palmetto); 88 lots back onto it |
| where is plantation point | A place name with no map in their head | West of the US 17 Bypass at 38th Avenue North, on the Intracoastal Waterway, outside the city limits, minutes from Broadway at the Beach |
| the landing at plantation point | A cheaper door into the same location | The Landing: 95 smaller houses, its own 1980 covenants, sales around $280,000 |
| plantation point plaza | The shopping center | One line: Food Lion and the plaza at the entrance |

## What a buyer would pay an expert to tell them (research list)

1. Is there an HOA fee, and what are the rules? (deciding fact)
2. What do the homes cost, and what did they really sell for, not list for?
3. How big are the lots and houses; how old are they?
4. Which lots are on the waterway, and which on the golf course?
5. Is it in a flood zone; do I need flood insurance?
6. Is it in the City of Myrtle Beach (taxes, trash, beach parking decal)?
7. How far is the beach, the airport, groceries, the hospital?
8. Can I rent it (by the night, by the month)?
9. What is special here that a stranger would not know? (wow factor)

## The deciding fact

**Is there a mandatory HOA fee?** Checked first. Result: no home for sale lists one. Of the 6 houses for sale in Plantation Point, 3 listings say there is no HOA and 3 name an HOA with a $0 fee (`listings.json`, `fee_at_or_under: {0: 6}`). The only parcel the county shows in the association's name is a common-area parcel of about 1,035 square feet, described as "17 BYPASS; COMMON AREA". The October no-HOA ledger reached the same place (batches/2026-10-b/facts/no-hoa-facts.md rows 117, 148, 171: 7 of 7 listed with no fee; "an HOA owns a common-area parcel"). What the recorded restrictions say cannot be read online (images are kept at the Register of Deeds in Conway). The page states the fee fact plainly and offers to pull the restrictions for a buyer's lot.

## What the siblings already own (this page must not take these)

| Sibling | Owns | How this page treats it |
|---|---|---|
| `/submarkets/myrtle-beach/` (town guide) | "Myrtle Beach real estate", "where to live in Myrtle Beach", "is a Myrtle Beach address in the City of Myrtle Beach", Myrtle Beach STR rules, oceanfront condos, MB property tax and flood insurance | Links up to it once ("Myrtle Beach" in the first section). Says only that Plantation Point is outside the city and what that means here; does not explain the city question in general. |
| `/buyers/best-neighborhoods/` | "best neighborhoods in Myrtle Beach" (a list of 12; Plantation Point is not on it) | Not a list page. Lead may add Plantation Point to best-neighborhoods later; if so, best-neighborhoods gets one entry with its own angle and links here. |
| `/buyers/no-hoa-homes/` | "homes with no HOA near Myrtle Beach" (16 areas; Plantation Point was cut on 2026-10-15) | This page says "no monthly HOA fee" for one community; it does not compare areas. Ask the lead to add one link from no-hoa-homes' Pine Lakes or Myrtle Heights entry. |
| `/buyers/golf-communities/` | "Myrtle Beach golf communities", membership | Says the course next door is Myrtlewood and that it is a public course; no membership comparison. |
| `/buyers/waterfront-homes/` | waterfront prices by kind of water, docks, flood on waterfront homes | Gives the count of waterway lots here and their two sales; links to waterfront-homes for docks. |
| `/buyers/pool-homes/` | "homes with a pool in Myrtle Beach", pool costs, fences | States the pool share here once, compares to the county once, links to pool-homes for upkeep. |
| `/hoa/fees-by-neighborhood/` (built in parallel) | "HOA fees by neighborhood" across many places | This page owns "plantation point hoa fees" (the community's own name). If fees-by-neighborhood lists Plantation Point, it gives the one-line $0 and links here. |
| `/buyers/property-taxes/` | "4% vs 6%", "Horry County property tax rate" | One line with the two yearly figures for the typical sale here; links to property-taxes for the rule. |
| `/invest/str-rules/` | STR rules, Grand Strand | One line: county zoning sets no rental-length limit here; the recorded restrictions can. Links to str-rules. |
| `/homes/near/<community>/` (IDX place pages) | "homes for sale in <community>" (cannibalization map 2026-11-08) | This page owns both the name and "homes for sale" for Plantation Point (C21 wins both with one URL). Recommend the lead set the `plantation-point` place to `index: false` with the strip linking here, as Myrtle Trace and Tidewater were handled. Lead's call. |

## This page owns

- plantation point myrtle beach; plantation point myrtle beach sc
- plantation point homes for sale (with the strip; see above)
- plantation point hoa / hoa fees (Myrtle Beach)
- plantation point golf course myrtle beach (answer: Myrtlewood next door)
- where is plantation point (Myrtle Beach)
- the landing at plantation point
- myrtlewood golf course homes (secondary; nobody else owns it)
