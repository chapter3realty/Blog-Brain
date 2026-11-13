# Must-answer: /buyers/property-records/ (the hub and the lookup tool)

Read 2026-11-13. Demand: DataForSEO US monthly (`research/dataforseo-2026-11-13.md`, `research/data/dataforseo-volumes-2026-11-13.txt`), the lead's suggestion file (`scratchpad/kw/suggest.json`, 168 records strings), and a fresh pull of Google suggestions for 20 seeds (`wt-139/data/2026-11-d/property-records/raw/suggest/*.json`, script `scripts/pull-suggestions.sh`). People also ask: no SERP was pulled for these queries, so it is not known. The research note says "horry county land records" returns data brokers (Acres, Regrid, PropertyScout, AcreValue), Facebook answer pages and CourthouseDirect, with no local guide.

## Why people type it

| Search (US monthly) | The likely reason |
|---|---|
| horry county property lookup (2,400) | Has an address. Wants everything the county knows about it, on one screen, now. |
| horry county property records (2,400) | Same, plus "where are the official records". Does not know the county splits them across the Register of Deeds, the GIS map and the Treasurer. |
| horry county property search (2,400) | Wants the search box. Often hit the county map's sign-in screen first (gis F2). |
| horry county property records search (1,300) | Same as above. |
| horry county property search by name (880), by name free (260), by owner, public records search by name | Wants to know what a person owns, or to find their own parcel by name. We do not run a name search (privacy, LOOKUP-TOOL.md). The county's own name searches are the deed index and the tax search; the task pages own those steps. |
| property records by address, property search by address (110 each), records search by address free, address lookup | The tool's exact job. The county's tax search has no address box (tax F4) and its map needs an account (gis F2). |
| who owns property in horry county sc | Wants an owner. The tool gives the deed record button (book and page), where the county shows the owner. Never the name on our page. |
| horry county property appraiser (a Florida word) | Means the Assessor. One line: Horry County calls it the Assessor. |
| myrtle beach property records, property records myrtle beach sc, north myrtle beach / surfside beach property records | Thinks the city keeps them. Property records are county records; the tool answers the city question with a line that surprises people (row 17 to 19). |
| pawleys island property records, georgetown county sc property records / search by address / by name | Pawleys Island and Litchfield are in Georgetown County (deeds F33). One short section, links to Georgetown's own tools. |
| horry county flood zone by address, is my address in a flood zone | Owned by /buyers/flood-zone-check/ (parallel page). The tool shows the zone line and links there. |
| what is my evacuation zone, check evacuation zone by address | Not owned by any page. The tool answers it in one line; no keyword claim beyond "evacuation zone" in the tool's label. |
| horry county zoning by address, zoning codes | The gis-map page owns zoning codes. The tool shows the code with one plain line. |

## The must-answers, ranked

1. **Look up a property in Horry County by address, free, with no sign-in.** The tool. First screen. This is what 4 of the 5 owned searches want.
2. **What do the county's records say about this address?** One card: matched address, parcel number (PIN) and tax map number (TMS), lot, land area, town or unincorporated county, flood zone in plain words, hurricane evacuation zone, county zoning code.
3. **Where do I get the deed, the tax bill and the parcel map for it?** Buttons already filled in: the deed record by book and page (rows 13, 14), the tax search with the PIN to copy (tax F4), the parcel map by PIN (gis F14). One line each to the task pages for the steps.
4. **Who owns it, and can I search by name?** The owner is on the county's deed record behind the button. The county searches by name in two places, the deed index and the tax search; one line each and the link. We do not offer a name search.
5. **Is it inside the city?** A mailing city is not the town line. About 3 in 4 addresses with a Myrtle Beach mailing city are outside Myrtle Beach city limits (row 18). Inside or outside decides who sets the zoning and the rental rules (rows 20, 21).
6. **What do county records not show?** HOA debts, rental rules and the cost of insurance. What we check, and the link to the page that owns each.
7. **Pawleys Island and Litchfield (Georgetown County).** Where Georgetown's map, deed search, tax bills and records search are.
8. **Is Chapter3 the county?** No. Said once near the tool: "Public records from Horry County and FEMA. Chapter3 is not the county."

## The deciding fact

The tool can only exist if the county's and FEMA's public map services answer a visitor's browser on chapter3realty.com. Tested 2026-11-13 with `Origin: https://chapter3realty.com`: every source sent `Access-Control-Allow-Origin: https://chapter3realty.com` (rows 1 to 13). The open parcel layer carries no owner names (row 3), so the tool can show parcel facts without ever touching a name. Second deciding fact: a deed record opens from a link built on its book and page (deeds F19), and 274,147 of 302,631 parcels (about 9 in 10) carry a book and page (row 13). That makes "the deed in one click from an address" real.

## Sibling pages and the searches each owns

| Page | Owns (title / keywords) | This hub's line to it |
|---|---|---|
| /buyers/property-records/deeds/ ("Horry County Land Records: Free Deed Search by Name") | land records 18,100; register of deeds 3,600; deed search 1,000; deed search by name; deed book, plat, lien, fraud alert, recording fees, copy of a deed; georgetown county deed search | Table row and one line under the deed button. Never "land records" or "deed search" in this page's title, H1 or keywords. |
| /buyers/property-records/gis-map/ ("Horry County GIS Map: Parcel Search, Login & Property Lines") | horry county gis 8,100; gis map, gis login; parcel search; tax map 1,000; tax map number; PIN lookup; property lines; zoning map and codes; georgetown county gis | Table row; the map button; the zoning line links its codes section. Never "gis", "parcel search" or "tax map" in this page's title, H1 or keywords. |
| /buyers/property-records/tax-bill/ ("Horry County Tax Payments & Records: Pay Online, E-Check Free") | tax payments 6,600; taxes 4,400; tax assessor 2,900; tax records 2,400; tax records by name 590; tax office 1,000; property tax search 1,000; tax bill search; georgetown county tax payments | Table row; the tax button. Never "tax records" or "tax search" here. Note the conflict below. |
| /buyers/property-taxes/ ("Horry County Property Tax Rate: 4% vs 6%, With a Calculator") | horry county property tax, rate, 4% vs 6%, estimate | Not linked from the card. One link from "what records do not show": the yearly tax on a home you buy is figured from the price and the 4% or 6% ratio, not last year's bill. |
| /sell/home-value/ | what is my home worth, home values, assessed vs market value | The tool shows no value. One line: "What it would sell for" links here. |
| /buyers/flood-zone-check/ (parallel, first workflow) | is my house in a flood zone, horry county flood map, flood zone map | The flood line links there ("what your zone means for a purchase"). Never "flood zone map" in this page's keywords. |
| /buyers/undisclosed-flooding/ | has this house flooded, Supplemental Flood Zone, flood history by address | Optional line on the card if the address is inside the county's Supplemental Flood Zone (row 9), linking there. |
| /hoa/estoppel-and-transfer-fees/ | HOA estoppel letter, who pays | "HOA debts" row in "what records do not show". |
| /hoa/rental-restrictions/ and /invest/str-rules/ | can an HOA ban rentals; Myrtle Beach short-term rental rules | "Rental rules" row. |
| /buyers/coastal-insurance/ | homeowners insurance cost, wind and flood | "Insurance cost" row. |
| /buyers/relocating/hurricanes/ | Myrtle Beach hurricanes | The evacuation line may link it ("what a hurricane season here is like"). |
| /invest/foreclosures/ | tax sale, master in equity | Not linked from the hub. |

**Conflict to fix (for the lead):** the tax-bill spec's keywords include "Horry County tax records" and its title has "Records". "tax records" (2,400) is a tax search and fits there. But "property records" must not appear in the tax-bill title or H1. It does not today. No change needed unless a later click pass adds it.

## What this page will own

horry county property records; horry county property lookup; horry county property search; horry county property records search; horry county property search by name (the explanation and the links, not a name search); horry county property records by address / search by address / online free; horry county property information / parcel information; horry county real estate records; myrtle beach property records (and north myrtle beach, surfside beach); horry county public records search property; pawleys island property records and georgetown county sc property records (one section; the deeds, gis and tax pages keep their own Georgetown lines); what is my evacuation zone Horry County (the tool's line only).
