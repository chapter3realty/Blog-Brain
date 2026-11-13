# Plan: /buyers/land/ (new page, spec `specs/land.js`, data `data/2026-11-d/land/`, images `chapter3realty/images/2026-11-d/land/`)

Facts: `facts.md` (row numbers below as F1 to F42). Demand and siblings: `must-answer.md`. Data: `findings.json`, `gis.json`, `chart-ppa-by-size.json`, `chart-ppa-by-area.json`. Author "devin"; Tim Nash reviews. Copy the structure of `specs/home-value.js` (question headings, data read from files, `must()` checks) and `specs/garden-city.js` (place scenes, homes strips with fallbacks, glass charts).

## The reader and the decision

Someone who wants land here: a lot or a few acres to build a house or set a manufactured home, room for a horse, a shop or a garden, or a tract to hold. Many live out of state and cannot walk the land first. **Their decision: is this parcel able to hold the home I want, and is the price per acre fair, before I make an offer?** They fear buying a lot that will not pass for a septic tank, sits in a flood zone, or is zoned against a mobile home.

## The answer in two sentences

Land for sale in Horry County asks about $25,000 an acre around Loris and $40,000 around Aynor, against $150,000 or more near the beach, and the bigger the tract, the less each acre costs (F35, F36). Before you offer, check three things: the state's septic approval (South Carolina has not used a perc test since the late 1970s), the zoning, and the flood map (F1, F13, F24).

## Title, description, H1, hero

- **Title (52):** `Land for Sale in Horry County, SC: What an Acre Costs`
- **Meta description:** Land for sale in Horry County, by the acre: asking prices by area and tract size, and what to check first: septic approval, zoning, water and flood zone.
- **H1:** `Land for sale in Horry County: what an acre costs and what you can build on it`
- **Hero sub (write last, 8 to 30 words):** e.g. "An acre asks about $25,000 around Loris and over $150,000 near the beach. Septic, zoning and flood decide what a lot can hold." (figures from `findings.json`, rounded in the spec)
- **Hero offer:** "Found a piece of land? Send us the parcel. We check the septic, the flood map and the zoning before you offer." Button: "Check a parcel for me" -> `/contact/`.
- **Keywords:** land for sale Horry County SC, acreage for sale Horry County, farms for sale Horry County, lots for sale Horry County, cheap land Horry County, land for sale Conway SC, land for sale Loris SC, land for sale Aynor SC, perc test South Carolina, Horry County septic permit, mobile home on land Horry County, buying land in Horry County. **Never** "land records", "GIS", "zoning map", "homes with land", "impact fees" as a keyword (siblings own them).

## Sections, in order

The site's edge puts its feed under the opening. Below it:

1. **What does an acre of land cost in Horry County?** (question heading, the head search). First two sentences: the answer above. Then **Chart A** (by area). One sentence under it: around Loris, Green Sea and Nichols there is more land for sale than anywhere else in either county, 266 pieces, 70 of them 10 acres or more (F37). One line: these are asking prices of land for sale now, counted from the listings (F34); no single listing is named.
2. **West of the Waccamaw: river land and longleaf pine** (statement heading; the wow, sold like a local agent). Three short paragraphs, each a true scene, then a strip:
   - The Little Pee Dee runs tea-colored past cypress swamps and sandbars, and is the county's western edge; a public landing on each side of the US 501 bridge at Galivants Ferry (F28, F30, F33).
   - West of Loris, between Green Sea and Nichols, Cartwheel Bay's trail runs through longleaf pine past wild Venus flytraps and pitcher plants, free, dawn to dusk (F32).
   - This is old farm country: by 1903 tobacco markets thrived in Conway and Loris, and by the 1920s Horry grew more tobacco than any county in the state (F29). Since the 1870s, candidates have come to the Stump at Galivants Ferry (F31).
   - **Homes strip (land):** `G.homes("land-loris-aynor", "around Loris and Aynor", <fallback>, "Your own acres around Loris and Aynor")`. Fallback: the which-town NAIP aerial of wide country lots outside Loris (public domain; copy its file and license record into this page's image folder) and a button "Send me land around Loris and Aynor" -> `/contact/`.
   - One sentence and a strip for the middle of the county: land around Conway and Longs asks about $51,000 and $73,000 an acre on tracts of an acre or more (F36), with the Waccamaw landings at Longs (F33). **Homes strip:** `G.homes("land-conway-longs", "around Conway and Longs", <fallback>, "Room to spread out near Conway and Longs")`.
3. **The more land you buy, the less each acre costs** (statement heading). **Chart B** (by size). One sentence: a lot under half an acre asks about $686,000 an acre, a tract of 20 acres or more about $19,000 (F35). One sentence: that is why the per-acre price of a small lot near the beach is not comparable to farmland (no second chart).
4. **Do you need a perc test to buy land in South Carolina?** (question heading; "horry county perc test", "perc test south carolina"). First sentence: No. The state has not used perc tests since the late 1970s; its inspector reads the soil instead (F1). Then a bold, numbered-by-bold-words list (not prose numbers):
   - **Apply online**, $150, with the plat or deed (F3).
   - **The inspector bores the soil** in at least two spots; the soil's color shows how high the water rises in the wettest season (F5). Wet weather can delay the visit (F4).
   - **The permit to construct** is good for five years (F3). Without it the county will not issue a building permit (F2).
   - What it means for the lot: the drainfield needs room for 120 gallons a day per bedroom and a spare area half its size, and must sit 75 feet from a well or a creek and 25 feet from a ditch (F6, F8). A lot that fails can need an engineered system that costs thousands more, and some land cannot take one at all (F7).
   - **Our count:** about 1 in 4 land listings in Horry say the septic site is approved (F38). Ask for that permit; if there is none, make the offer depend on one.
   - **Mid offer:** "Send us the parcel. We check whether it has a septic approval, whether sewer reaches it and what the soil evaluation will look for, before you offer." Button: "Check the septic for me" -> `#lead-form`.
5. **Public water and sewer, or a well?** (statement heading). Two short paragraphs: ask the local provider for the lot (F9); Grand Strand Water and Sewer serves from the North Carolina line into Georgetown County, including rural areas west of the Waccamaw (F11); inside Loris the city runs water and sewer (F12). A well needs a $70 state notice and a certified driller (F10). **Our count:** about 1 in 3 listings list public sewer, 4 in 10 public water, 41 a well (F38).
6. **What can you build on it: lot size, mobile homes and campers** (statement heading; "can you put a mobile home on land in horry county", "minimum lot size"). **Table C** (below). Then: deed restrictions can forbid what zoning allows; 74 listings mention them (F39); ask for the recorded restrictions. A lot up to 25 percent under its zone's minimum can still be built on if it was created before the rule (F17). Campers: on vacant LFA, FA or CFA land on or north and west of the Waccamaw, two campers, 15 days a month (F18). **Our count from the county map (F40):** about half of all land listings, and 6 in 10 tracts of an acre or more, sit in FA or CFA, where a house or a manufactured home needs only half an acre; 62 sit in SF zones, where no mobile home is allowed. Link: "look up a parcel's zone on the county map" -> /buyers/property-records/gis-map/.
   - **Mid offer:** "Want a manufactured home, a barn or a second house on it? Send the parcel. We read the zoning and the deed restrictions for that lot." -> `#lead-form`.
7. **Road frontage and access** (statement heading). A new lot needs 50 feet of frontage on a street; an older lot with none goes to the planning commission (F15). No building within 60 feet of the right of way of Highways 9, 19, 701, 905, 917 and the others named (F16): a highway lot loses that strip. **Our count:** 77 listings are on a dirt road, 49 on a private road, 27 reached by an easement (F39). Ask who maintains the road and for the recorded easement.
8. **Flood zones and wetlands on land** (statement heading). **Our count (F40):** about 1 in 8 land listings (91 of 763) sit in a FEMA high-risk zone at the listing's map point, and 24 more in the moderate zone. A new house there must sit 3 feet above the base flood elevation in the unincorporated county (F24), and the county asks for more papers (F20). Wetlands: the Army Corps decides (F9). One line and links: how to check a flood zone is on /buyers/flood-zone-check/; past floods on /buyers/undisclosed-flooding/.
9. **What does it cost to build on your own land?** (question heading). **Table D** (below). One sentence each: the impact fee depends on the size of the home and counts a mobile home as single-family (F21, F22), link /invest/horry-county-growth-roads-permits/ for the schedule. Building a builder's house in a new community instead: /buyers/new-construction/ and /buyers/new-construction/builders/. Growth near a parcel: /invest/what-is-being-built/. **Loans, one line only:** "Our affiliated lender, BrickWood Mortgage, a separate company, can explain land and construction loans." (F42; with the site's standard affiliate disclosure.) No rate, term or down payment.
10. **Farm and timber land: what happens to the tax** (statement heading; "land tax horry county"). Farm-use value needs 5 acres of timber or 10 acres of other farm use, or farm income (F26). Building on it ends that and brings rollback taxes for the year of the change and the three before it (F27); ask the seller whether the tract is taxed as farm land. Your home and up to 5 acres get the 4 percent rate when you live there (F25), link /buyers/property-taxes/.
11. **A story, near the end** (F41, within its limits): clients from North Carolina bought land in Longs, built with a builder and expanded their cleaning business here. Two sentences, no builder named, no claim about cost; "our preferred lender" if a lender is named at all.
12. **Land for sale questions** (FAQ, 5 to 6): Can you do a perc test before buying land? (F1, F3: apply for the septic permit, with the seller's consent, before closing) / Where is the cheapest land near Myrtle Beach? (F36) / Is there hunting land for sale in Horry County? (F39: 30 listings say so) / Can I live in a camper on my land? (F18) / How do I get a loan for land? (F42) / What about land around Pawleys Island? (F36; Georgetown County sets its own zoning; link /buyers/property-records/gis-map/ Georgetown section).
13. **End offer band:** "Send us the parcel before you offer. We check the septic, the flood map, the zoning and the road." Button: "Send us the parcel" -> `#lead-form`. Sources box after it.

About 1,800 to 2,300 words. It is a guide plus a price table, and each section answers one check a buyer makes.

## Visuals (each readable at a glance)

- **Chart A, `glass.bars` from `chart-ppa-by-area.json`.** Title: "An acre costs least in the county's rural west". Eight horizontal bars, cheapest first, label "$25,000 an acre" style, a small "(212 tracts)" count. Note: "Asking prices of land for sale, tracts of 1 acre or more, November 2026" is set by mkpage dates, never typed.
- **Chart B, `glass.bars` from `chart-ppa-by-size.json`.** Title: "The more land you buy, the less each acre costs". Five bars from "Under half an acre" to "20 acres or more".
- **Table C, what each rural zone allows** (from F13, F14; unincorporated county): columns "Zone", "Smallest lot for a home", "Mobile home allowed?". Rows: CFA and FA (half an acre; yes), LFA (1 acre; per the ordinance's use table, verifier to confirm, else drop the column cell), RE (1 acre; no), AG4 / AG5 (5 acres; no / yes), AG6 / AG7 (2 acres; no / yes), SF / MSF (6,000 to 40,000 sq ft; no / yes). Different from the GIS page's code table: this one answers "can I put my home here".
- **Table D, the costs of building on your own land** (F3, F10, F19, F21, F23): septic application $150; well notice $70; building permit about 70 cents a square foot plus $25 (about $1,425 on 2,000 sq ft, computed in the spec); impact fees about $1,615 on a 1,500 sq ft house; manufactured home permit $150 plus zoning; zoning letter $25. No construction cost, no loan figure.
- **The checklist as five glass icon cards** at the top of section 4? No: the page is calm with the two charts and two tables. The checks are the section headings themselves.
- **Photos:** the NAIP aerial of country lots outside Loris (fallback, reused with its record). Photo partner shot list (templates/photo-request-email.md): the US 501 bridge landing at Galivants Ferry on the Little Pee Dee; a cleared tract with road frontage on a county road near Aynor or Loris; a longleaf pine stand at Cartwheel Bay; a septic soil evaluation flag or boring (if he sees one). No listing photo is saved.

## Homes strips and feeds (for the lead, in BUILD.md)

- **Site feed under the opening (new entry in `idx-lib/feeds.js`):** `LAND = { head: "Your own land: acreage for sale", q: [{ type: "land", status: "active", lotMin: "1", min: "40000", has: "county_horry" }, { type: "land", status: "active", lotMin: "1", min: "60000", has: "county_georgetown" }], allowTypes: true, link: "type=land" }` (the quality bar leaves land out unless the page is about it; `allowTypes` as MULTI does). The lead sets the ranking; no price in the title.
- **New places (lead adds to `idx-places.json`):** `land-loris-aynor` (land, an acre or more, near Loris and Aynor, ZIPs 29569, 29545, 29581, 29511, 29544), `land-conway-longs` (land, an acre or more, ZIPs 29526, 29527, 29528, 29568). Each needs `type: land` and `lotMin: 1` in `q`; if the places schema cannot take a type, the lead tells the writer and the strips become the fallback buttons.
- Strip titles are bold and true: "Your own acres around Loris and Aynor" (true when lotMin is 1), "Room to spread out near Conway and Longs".

## Offers

| Where | Words | Button |
|---|---|---|
| Hero | Found a piece of land? Send us the parcel. We check the septic, the flood map and the zoning before you offer. | Check a parcel for me (/contact/) |
| After the perc test section | Send us the parcel. We check whether it has a septic approval, whether sewer reaches it, and what the soil test will look for. | Check the septic for me (#lead-form) |
| After zoning | Want a manufactured home, a barn or a second house on it? Send the parcel. We read the zoning and the deed restrictions. | Have us read the zoning (#lead-form) |
| Strip fallbacks | Send me land around Loris and Aynor / near Conway and Longs | (/contact/) |
| End band | Send us the parcel before you offer. We check the septic, the flood map, the zoning and the road. | Send us the parcel (#lead-form) |

"Perc" appears in the offer only as the reader's word ("what people call a perc test") once; the state's step is the septic permit.

## Links

- **Out (in sentences):** /buyers/new-construction/, /buyers/new-construction/builders/, /invest/what-is-being-built/, /invest/horry-county-growth-roads-permits/, /buyers/property-records/gis-map/, /buyers/property-records/deeds/ (the plat or deed for the septic application), /buyers/flood-zone-check/, /buyers/undisclosed-flooding/, /buyers/property-taxes/, /buyers/no-hoa-homes/ (for a house on land), /buyers/relocating/which-town/ (Loris and Aynor), /submarkets/conway/, /buyers/common-mistakes/ (septic on a house).
- **Pages that should link here (six or more, on words already there):** /buyers/new-construction/ ("land" or "lot" in "Where are new homes being built"), /buyers/new-construction/builders/ ("build on your lot"), /invest/what-is-being-built/ (Aynor and Longs rows), /buyers/no-hoa-homes/ ("The country around Loris: new houses on large lots" and "Aynor: an acre and a river landing"), /buyers/relocating/which-town/ (Loris and Aynor lot size), /buyers/property-records/gis-map/ ("Buying a lot or a house with land?"), /buyers/common-mistakes/ (septic), /submarkets/conway/ (SC 905 large lots), /buyers/ hub.
- **Sitemap and llms.txt (lead):** add `/buyers/land/`. llms.txt line: "Land for sale in Horry County: asking price per acre by area and tract size (our count of listings), the SC septic permit (no perc test since the 1970s), zoning lot sizes and mobile home rules, water, access, flood and the costs to build."

## What only this page has

1. Our price per acre for land in Horry and the Pawleys Island area, by area and by tract size, counted from every land listing (F35, F36).
2. Our count of what land listings say about septic approval, sewer, water, mobile homes, roads and restrictions (F38, F39), and the county map's zoning and flood zone under each listing (F40).
3. The plain correction to the most searched question: South Carolina does not do perc tests (F1), with the state's real steps and fees.
4. The camper rule west of the Waccamaw (F18) and the 60-foot highway setback (F16), which no land guide we found states.
