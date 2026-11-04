# Must-answer list: /buyers/waterfront-homes/

Batch 2026-11-a, Lane U. Built 2026-11-04 from Google search suggestions for 66 queries (`data/2026-11-a/buyers-waterfront-homes/raw/google-suggestions.txt`, made by `pull-suggestions.sh`), the judge's notes for this page (`audit/judged-2026-10-31.json`), the owner's past words on boat buyers (CRAFT 1: "Homes with no HOA" was typed by a boat owner who wanted to know what the town lets them park), and what a buyer must know to act. No Search Console export was available to this helper.

## What the suggestions say

- The biggest group by far is **oceanfront and beachfront**: "oceanfront homes myrtle beach", "beachfront homes myrtle beach for sale", "ocean front homes north myrtle beach", "oceanfront homes surfside beach". Most "waterfront" searches here mean the ocean first.
- Then the **Intracoastal Waterway**: "intracoastal waterway homes for sale myrtle beach", "... north myrtle beach", "intracoastal waterway myrtle beach map", "is the intracoastal waterway saltwater", "are there alligators in the intracoastal waterway", "intracoastal waterway rules".
- **Places**: North Myrtle Beach, Little River ("waterfront homes for sale in heather glen", "lake front homes at little river"), Murrells Inlet, Surfside Beach, Conway ("waterfront homes for sale in conway sc under $200 000 / $150 000"), "cherry grove channel homes for sale", "waccamaw river homes for sale", "waterfront homes for sale in waterbridge myrtle beach".
- **No HOA**: "waterfront homes for sale in myrtle beach sc with no hoa", "... little river sc with no hoa".
- **Docks and permits**: "dock permit south carolina", "do you need a permit to build a dock", "do you need a permit to repair a dock", "ocrm dock permit lookup", "scdes dock permit", "south carolina dock regulations", "how much does it cost to build a dock (with a boat lift / in charleston sc / per square foot)", "boat lift cost", "bulkhead cost per linear foot", "bulkhead replacement cost", "riparian rights south carolina".
- **Flood**: "ae flood zone require flood insurance", "ve flood zone insurance cost", "ae flood zone meaning", "how much is flood insurance in myrtle beach".
- **Bridges and inlets**: "socastee swing bridge schedule", "barefoot landing swing bridge schedule", "little river swing bridge schedule today", "little river inlet dredging", "little river inlet tides", "myrtle beach tide chart".
- **Worth it**: "is waterfront property a good investment", "are waterfront homes a good investment", "is waterfront property worth it", "cheapest waterfront homes".
- **Slips**: "boat slip for sale myrtle beach / north myrtle beach".

## Why they typed it (CRAFT 1)

- "Waterfront homes myrtle beach": wants to know what is for sale and what it costs, and does not yet know that "waterfront" here means five different waters. The likely reason: a picture of a house with a dock and a boat, or a house on the beach.
- "With boat dock", "deep water", "intracoastal": owns or wants a boat and needs to know if the boat can get from the house to the ocean, and how long that takes.
- "Dock permit", "can I build a dock": found a lot or a house with no dock and wants to know if one is allowed.
- "Under $200,000", "cheapest": wants water on a small budget and needs to know which water that buys.
- "Is it a good investment / worth it": wants to know what the water adds to the price, and what it costs to keep.
- "AE / VE flood zone insurance cost": a lender has told them, or will, that flood insurance is required.

## The list, ranked

1. **What does "waterfront" mean here, and which kind fits me?** The five kinds (ocean, the Intracoastal Waterway, the Cherry Grove channels and marsh creeks, the Waccamaw River, lakes and ponds), where each is, and what each is good for (looking, fishing, a boat).
2. **What do waterfront homes cost here, by kind of water?** Homes for sale now on each kind of water, in aggregate: how many, middle asking price. What county deeds say houses on the water sold for compared with houses nearby that are not on it. The deciding fact: how much the water adds.
3. **Which ones have a dock?** How many waterfront houses for sale have their own dock. Most do not. The share on each kind of water.
4. **Can I build a dock, and what does it take?** The state permit (SCDES Bureau of Coastal Management, the agency that replaced DHEC's coastal office), the lot width rule (75 feet at the marsh edge for lots made after 1993; under 50 feet, no dock), dock size by creek width, the dock master plan, the fee, the notice and decision times, the Army Corps, the HOA. Repairs and rebuilding after a storm. Transfer to a buyer.
5. **Can my boat get to the ocean from here, and how?** The inlets (Little River Inlet in the north; Murrells Inlet opens to the ocean but not to the waterway; Winyah Bay at Georgetown in the south). Every bridge from the state line to Socastee with its clearance; the three swing bridges and the railroad bridge; when they open; the rock ledges.
6. **How deep is it, and how much does the tide move?** The tide range on each kind of water, from NOAA: about 5 feet at the ocean and the inlet, about 4 at Cherry Grove and Murrells Inlet, about 2 feet on the waterway in the middle, about 1 at Conway. What that means at a dock at low tide. The federal channel depth.
7. **Flood insurance on the water: is it required and what does it cost?** AE and VE in plain words. What single-family policies cost a year by zone in the waterfront ZIP codes, from FEMA's own policy data, for a home lived in and a second home.
8. **Is it a good investment, and what does it cost to keep?** The price difference from deeds, plus what the owner pays that a non-water owner does not (flood insurance, the dock and bulkhead upkeep, permits). No forecast.
9. **Waterfront on a budget, and with no HOA.** Where the lowest-priced water is (lakes and ponds; the Waccamaw), from listings in aggregate. Whether waterfront homes with no HOA exist, counted.
10. **Boat slips instead of a dock.** Deeded slips in Horry County marinas and what they sold for (owned by the Little River page; this page gives one line and a link).
11. **Is the Intracoastal salt water? Are there alligators?** One FAQ line each, only if a primary source answers it. (Not researched in this round; see the ledger's Not verified.)
12. **What we check before an offer on a waterfront home.** The dock permit and its transfer, the depth at the dock at low tide, the bridges between the house and the ocean, the flood zone and the policy, the bulkhead, the HOA's water rules. Said as what we do, not a list for the reader.
13. **Homes for sale now:** the live feed of homes with their own dock (`idx-lib/feeds.js` already maps this page to `DOCK`).
