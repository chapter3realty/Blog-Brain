# HOA fees by neighborhood: what people search, and what this page must answer

Page: `/hoa/fees-by-neighborhood/` (new). Spec: `specs/hoa-fees-by-neighborhood.js`. Data: `data/2026-11-d/hoa-fees-by-neighborhood/`. Ledger: `facts.md` in this folder.

## Demand

No single head term. Demand is a long tail of "<community> hoa fees" and "<town> hoa fees", each small, plus a few area-wide questions.

| Search | Volume a month | Source |
|---|---|---|
| lakeside crossing conway sc hoa fees | 90 | `scratchpad/kw/volumes.txt` (DataForSEO, 2026-11-13) |
| cresswind myrtle beach hoa | 50 | same |
| carolina forest hoa | 30 | same |
| hoa myrtle beach | 30 | same (owned by /hoa/) |
| average hoa fees in south carolina | 20 | same |
| 19 more "<community> hoa (fees)" searches (Bridgewater, Country Lakes, Heather Glen, Heather Lakes, Cypress Keyes, Del Webb NMB, Heritage Plantation, Lafayette Park, Landmark, Arrowhead, Avalon, Baywatch, Hillsborough ...) | 10 each | same |
| about 45 more community names with an "hoa" suggestion | under 10 or not measured | `scratchpad/kw/suggest.json` (lead) |

Taken together, about 65 Grand Strand community names show up in Google's suggestions with "hoa" or "hoa fees" after them (73 strings, less non-names such as "china", "club", "no"). No one community is worth a page of its own for this search. One table that answers all of them is.

Google suggestions pulled for this page (Firefox client, 2026-11-13, `data/2026-11-d/hoa-fees-by-neighborhood/raw/google-suggestions.txt`, script `pull-suggestions.sh`), local ones only:

- hoa fees myrtle beach; how much are hoa fees in myrtle beach sc; average hoa fees in myrtle beach; why are hoa fees so high in myrtle beach; lowest hoa fees in myrtle beach
- carolina forest hoa fees
- bridgewater little river sc hoa fees; country lakes little river sc hoa fees (and "... payment"); heather glen little river sc hoa fees; windjammer village little river sc hoa fees
- hoa fees at ocean lakes myrtle beach; hoa fees at myrtle beach resort (condo and campground resorts: not this page)
- hoa fees myrtle beach condos; average condo fees in myrtle beach; how much are condo fees in myrtle beach (condos: /invest/condo-buildings/ and /hoa/)

From the lead's 3,704 suggestions (`scratchpad/kw/suggest.json`), the community names typed with "hoa" or "hoa fees": Arcadia, Arrowhead, Atalaya, Avalon (Carolina Forest), Baywatch, Bridgewater, Carolina Forest, Conway Plantation, Country Lakes, Cresswind, Cypress Keyes, Cypress Ridge, Cypress Village, Del Webb NMB, Fairway Oaks, Hagley Estates, Hampton Place, Heather Glen, Heather Lakes, Heritage Park, Heritage Plantation, Heritage Preserve, Hidden Brooke, Hillsborough, Hope Pointe, Indigo Creek, International Club, Kingston Oaks, Lafayette Park, Lakeside Crossing, Landmark, Linksbrook, Magnolia (NMB), Market Common, Midtown Village, Murrells Inlet Oaks Village, Noble, Oak Glen, Ocean Keyes, Ocean Pines, Park West, Pirate Cove, Prince Creek, Quail Creek, Reflections, Ridgefield, River Club, Rosehaven, Southgate, Southwood, Springfield, Sun Colony, Sweetgrass, Sweetwater, The Farm, The Parks, The Reserve (Market Common; Pawleys), Tidewater, Tradition, True Blue, Waterbridge, Wild Wing, Windjammer Village, Woodlake Village, Woodlyn Meadows, Wynbrooke.

People also ask: not pulled (Google's results page is not fetched from here; `scratchpad/kw/serp.json` holds no query on this subject). A web search for "HOA fees by neighborhood Myrtle Beach" (2026-11-13) shows what ranks now: HOA's HUB (hoashub.com) pages that "estimate" one fee per association from tiny samples (its North Myrtle Beach median rests on three communities), Zillow's "low HOA fees" filter pages, a builder's HOA page (Pulte, Berkshire Forest), and agents' condo-fee tables. None gives a measured range for every neighborhood with homes for sale. That is the gap this page fills.

## Why they typed it

| Search | Likely reason | What answers it |
|---|---|---|
| "<community> hoa fees" | A buyer has a home or a community in mind and wants the monthly number before they call anyone | The community's row: the fee range on the homes for sale there now, how many homes, the town |
| "<community> hoa" (no "fees") | Fee, rules or a contact. Many want to know what they get for it | The row, plus what the listings say the fee pays for (lawn, internet, trash, a pool, a clubhouse) |
| lakeside crossing conway sc hoa fees | A retiree saw a low price and wants the monthly cost | It has no HOA fee: the homes sit on rented land in a 55+ community, and the lot rent is the monthly cost (reused verified row; /buyers/55-plus-communities/ owns the detail) |
| carolina forest hoa fees | Carolina Forest is not one HOA. A buyer thinks it is | Carolina Forest is many neighborhoods, each with its own fee; the table filtered to Carolina Forest shows them side by side |
| hoa fees myrtle beach; average hoa fees in myrtle beach | The typical number | Owned by /hoa/ ("about $95 a house, $650 a condo"). This page gives one line and links there |
| lowest hoa fees in myrtle beach | Wants the cheapest monthly cost | /hoa/ owns "Where are HOA fees lowest" (condos by area). This page's table sorts by fee; it does not take that heading |
| why are hoa fees so high in myrtle beach | Condo shock | /hoa/ and /invest/condo-buildings/ own it. Not here |
| "<town> homes no hoa" | Wants no fee | /buyers/no-hoa-homes/ owns it. This page says in one line that many neighborhoods list no fee, and links there |

## What a buyer would pay an expert to tell them

1. **What is the fee in the neighborhood I am looking at, really?** Not a guess from one old listing: the range on every home for sale there now.
2. **What do I get for it?** Lawn care, internet and cable, trash, a pool, a clubhouse, tennis. Two fees that look alike can buy very different things.
3. **Is there a second fee?** A master association on top of the neighborhood's own (Grande Dunes, Prince Creek, Barefoot), a beach club fee, a lot rent instead of an HOA.
4. **Which neighborhoods give the most for a low fee?** A pool and clubhouse for about $100 against $300 for lawn, internet and a 55+ clubhouse.
5. **Will it go up?** Owned by /hoa/dues-increases/. One line and a link.
6. **What is in the budget and the rules for the one home I want?** Our offer: we get the HOA's budget and rules for any home you are serious about.

## The deciding fact

The page can be written as planned only if the site's own map API gives a fee range for enough neighborhoods to make a useful table, using homes for sale only and saving nothing but counts and ranges. Test (2026-11-13): the map's `hoaMax` filter works per subdivision name (Hope Pointe: 2 houses at `hoaMax=3000`, 0 at `hoaMax=100`; Waterbridge 26 houses), and a three-circle sweep from Calabash to Pawleys Island found 4,213 houses, townhomes and manufactured homes for sale. Result (2026-11-13): **382 South Carolina neighborhoods have 3 or more homes for sale, 2,585 homes in all, and each has a measured fee range in whole dollars** (facts.md row 1). It holds. A check that the method is right: every community with its own page on the site comes out at that page's verified fee to the dollar (The Farm $107, Myrtle Trace $95, Del Webb North Myrtle Beach $315, Seasons $342, Del Webb at Grande Dunes $401, Waterbridge $150, Plantation Point no fee; facts.md rows 11 to 14).

Of the about 65 community names people search with "hoa", about 40 are in the table. The rest have fewer than 3 homes for sale now (Cresswind 1, Hope Pointe 2) or none; for those the page offers to look the fee up.

A second deciding check: the "gated" flag is not usable per neighborhood. It is ticked on 24 of 26 Waterbridge houses (2026-11-13), and Waterbridge is a neighborhood of houses with a pool complex and a clubhouse that no verified row calls gated. The page never says a neighborhood is gated from listing flags.

## What siblings own (this page must not take their search)

| Page | Owns | This page's relation |
|---|---|---|
| /hoa/ | "Myrtle Beach HOA fees", "average HOA fees", "what HOA fees cover", "why are HOA fees so high", "where are HOA fees lowest" (condos by area), 55+ fee range, HOA complaints | Links up to it once near the top ("what a typical fee is and what it covers"). No heading asks the average or the lowest. |
| /hoa/dues-increases/ | "how much can an HOA raise dues in SC" | One line in the FAQ with a link |
| /invest/condo-buildings/ | Oceanfront condo building fees, "condo HOA fees Myrtle Beach" | This page lists neighborhoods of houses, townhomes and manufactured homes only. Condos: one line and a link |
| /buyers/no-hoa-homes/ | "homes with no HOA", "no HOA" by town | Rows with no fee listed say so; a line and a link for the reader who wants none |
| /buyers/cost-to-own/ | "cost to own a home in Myrtle Beach", yearly total, the calculator | Link where the reader adds the fee to tax and insurance |
| /buyers/55-plus-communities/ and its four community pages | "55+ communities Myrtle Beach", each 55+ community by name | Rows for those communities link to their pages; the page does not compete for "55+" |
| /buyers/gated-communities/, /buyers/golf-communities/ | gated / golf communities | Rows link there where a page names the community. No "gated" label from flags |
| /buyers/affordable-places-to-live/ | cheapest neighborhoods | No "cheapest neighborhoods" heading |
| /submarkets/carolina-forest/ (+ /the-farm/), /submarkets/myrtle-beach/market-common/, /submarkets/myrtle-beach/plantation-point/ | the place itself, including "<place> HOA fee" for The Farm and Plantation Point | The row links to the community page. Same figures (one fact, one value): the pilot's `listings.json` and this page's table come from the same API on the same day |

This page owns: "HOA fees by neighborhood" (Myrtle Beach, the Grand Strand) and the long tail "<community> HOA fees" for every community that has no page of its own. When a community page is built, the row links to it and the community page owns its own name.
