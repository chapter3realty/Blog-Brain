# Must-answer list: /submarkets/ (the town guides hub)

Built 2026-11-10 from:
- Google search suggestions for 28 hub searches (`data/2026-11-b/submarkets/raw/google-suggestions.txt`, `pull-suggestions.sh`), plus the 41 seeds which-town pulled on 2026-11-03 (`data/2026-11-a/buyers-relocating-which-town/raw/google-suggestions.txt`).
- Search Console, the owner's exports in the scratchpad (`gsc/`: 28 days to 2026-11-06; `gsc2/`: Oct 16-26 against Oct 27-Nov 6).
- The triage row and the cannibalization entry of 2026-11-08.

People also ask was not read: Google's results pages are closed to automated clients. The suggestions and Search Console stand in for it.

## The reader

Someone who has heard of Myrtle Beach and wants to see the places around it before reading one long guide. Often a buyer from out of state, sometimes an investor. They do not know which towns exist, where they are, or how they differ.

What they want first: the list of places, each in one line, with what a home there costs and whether they could rent it by the night. Then a link into the one guide that fits. What worries them: picking the wrong town from far away. What they ask next: the guide itself, or the 13-town comparison if they are still choosing where to live.

Why they typed it: they are sorting the area before a trip or a call. The hub is a front door, not the answer to a deep question.

## What Search Console says

- The hub has no row in the 28-day pages export (gsc/Pages.csv) and none in the compare export. It earns almost no search showings today.
- The guides do: Carolina Forest 452 showings, Pawleys Island 318, Myrtle Beach 118, Garden City 93, Conway 77, Surfside Beach 72, Murrells Inlet 69, Little River 56 (1 click), North Myrtle Beach 36.
- No query in either export names the hub's subject ("grand strand towns", "area guides"). Town queries ("carolina forest sc city guide", "pawleys island real estate") go to the guides.

So the hub's job is to route readers and pass links to the guides. It should be short, clear and complete, not a page that tries to rank for the guides' questions.

## The list, ranked

| # | Question, in the reader's words | Demand | Who owns it | What the hub does |
|---|---|---|---|---|
| 1 | **What towns are around Myrtle Beach?** | "towns near myrtle beach", "myrtle beach area towns", "myrtle beach surrounding towns", "grand strand towns", "grand strand cities", "beach towns near myrtle beach" | Shared. which-town lists "grand strand towns" and "grand strand cities" in its must-answer #2, for living. The hub is the directory of our guides. | The nine places in one table, each linked to its guide, with where it is in a few words. |
| 2 | **What does a home cost in each town?** | (not a suggestion for the hub's seeds; "myrtle beach area home prices by town" and "grand strand home prices" return nothing) | which-town owns the price comparison for living ("How do the towns compare on price..."). Each guide owns its own prices. | One figure per guide, the guide's own, with the group named in the cell. No chart, no ranking. |
| 3 | **Can I rent it by the night there?** | "can you airbnb in myrtle beach", "where can you airbnb in myrtle beach" | /invest/str-rules/ owns the rules; each guide owns its town's rule (cannibalization 2026-11-08). | A few words per town from the guide's verified row, and a link to /invest/str-rules/. Never a heading on this question. |
| 4 | **What is each town like? What would I love there?** | "beach towns near myrtle beach", "small / quiet / cute beach towns near myrtle beach", "towns near myrtle beach to visit / to live" | Each guide; which-town for "to live". | One wow line per town, taken from that guide's verified rows. |
| 5 | **Which town fits me?** | "towns near myrtle beach to live", "to retire", "best towns near myrtle beach" | /buyers/relocating/which-town/ (the 13-town comparison the owner praised). | One sentence near the top that links it. The hub does not compare or recommend. |
| 6 | **Where are they on a map?** | "grand strand map with towns", "myrtle beach area map with towns", "map of myrtle beach and surrounding towns" | which-town (#2 in its list). | The table runs north to south and says where each town is. No map unless the reviewer finds readers lost (points ready in `map-points.json`). |
| 7 | **Homes for sale in these towns** | "grand strand real estate", "grand strand sc real estate" | The hub's edge feed "Top homes, town by town" and each guide's strips. | Keep the edge feed. Each row ends in a short request for that town's homes. |
| 8 | **How long is the Grand Strand?** | "how long is the grand strand", "how many miles long is the grand strand" | Nobody on the site. | Not on this page: no guide carries the length, and the hub adds no new facts. Logged for the lead as a possible line. |

## Searches the page gives up

- "how much do Airbnbs make" by town: /invest/airbnb-income/ owns it. The live hub's AirROI revenue table goes; one sentence links that page and /invest/where-to-buy/ (which owns "best areas for Airbnb").
- "Myrtle Beach neighborhoods" and "best neighborhoods": /buyers/best-neighborhoods/ owns them. The live H1 "Myrtle Beach neighborhoods." and the title "Grand Strand Neighborhoods" go (cannibalization fix).
- "where to live near Myrtle Beach", "which town", "cheapest town", "cost of living Horry County": which-town and its siblings.
- "who buys in each" (promised in the live lede): a fair-housing risk and not a property fact. Dropped.

## The deciding fact

Does every guide carry one verified price, one verified rental rule and one verified wow line the hub can repeat? Checked 2026-11-10 against each guide's ledger:
- Price: yes, all nine (facts.md rows H1 to H10; `build_towns.py` re-reads each from the guide's own data file and confirms the figure on the page).
- Rental rule: yes for eight. Conway's rule row (CW 42) was struck by its verifier; the hub says we check the city's zoning for each address.
- Wow line: yes for eight. Carolina Forest's guide has no verified row a reader would picture. That needs a lead decision (PLAN.md).

## What the siblings already own (do not repeat)

| Sibling | Owns | Link from the hub |
|---|---|---|
| /buyers/relocating/which-town/ | which town fits you; prices, yearly cost and drives across 13 towns; city or county | Yes, near the top, on "compare 13 towns" |
| /buyers/best-neighborhoods/ | best neighborhoods, neighborhoods map | Yes, in the closing links |
| /invest/str-rules/ | where nightly rentals are legal, town by town; the tax table | Yes, from the rental column's note |
| /invest/airbnb-income/ | what a nightly rental earns by town | Yes, one sentence for investors |
| /invest/where-to-buy/ | best areas to buy a rental or an Airbnb | Yes, same sentence |
| The nine guides | everything about their own town | Each row |
