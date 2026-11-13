# Plan: /buyers/property-records/ (the hub and the property lookup tool)

Spec `specs/property-records.js` (author "devin"; copy the structure of `specs/home-value.js` and `specs/garden-city.js`; glass theme through `tools/glass.js`). Data `data/2026-11-d/property-records/`. Facts `facts.md` (rows R#; sibling rows as deeds F#, gis F#, tax F#). Demand and sibling owners `must-answer.md`. The tool's brief is `../LOOKUP-TOOL.md` (owner, 2026-11-13: "super simple looking and easy to use ... an all in one tool").

## The reader and their decision

A person with one address in Horry County in mind: a buyer looking at a listing, an owner who wants their own records, an heir, a neighbor. They typed "horry county property records", "property lookup" or "property search" and expect one box. Most have already hit the county map's sign-in screen or a data broker's paywall.

Their decision: is this place what I think it is (the lot, the town, the flood risk), and where do I get its deed and tax bill? A buyer then decides whether to look closer, ask for the papers, or move on.

What they fear: a flood zone they did not know about, a house that is "Myrtle Beach" on the mail but not in the city, an HOA debt or a rental rule that comes with the house, and paying a website for public records.

## The answer in two sentences

Type the address in the box: the card shows the parcel number, the lot, the town, the flood zone and the hurricane evacuation zone from Horry County's and FEMA's public maps, free, with no sign-in. Then one tap opens that parcel's deed record, its tax bill search and its county map page.

## Title, H1, description, keywords

- **Title (57):** `Horry County Property Records Search: Free Address Lookup`
  Carries "horry county property records" (2,400), "property records search" (1,300), "lookup" (2,400), "free" and "address" (the two most added words in the suggestions). "property search" (2,400) is matched by the words in order in the H1 and description.
  Alternative (53): `Horry County Property Records: Free Lookup by Address`.
- **H1 (announcement; CRAFT "Announcement pages"):** `Horry County property records: look up any address`
- **Hero sub (write last; statement):** `Parcel number, town, flood zone and evacuation zone from the county's and FEMA's maps, plus the deed and tax bill one tap away.`
- **Description (about 155):** `Free Horry County property search by address: parcel number, lot, town limits, flood zone and evacuation zone, with links to the deed, tax bill and parcel map.`
- **Keywords:** horry county property records, horry county property lookup, horry county property search, horry county property records search, horry county property search by address, horry county property records by address, horry county property search by name, horry county property information, myrtle beach property records, horry county public records property search, pawleys island property records. Never: land records, deed search, register of deeds, gis, parcel search, tax map, tax records, tax payments, flood zone map (siblings own them; must-answer.md).
- **One plain line under the box:** "Public records from Horry County and FEMA. Chapter3 is not the county." (LOOKUP-TOOL.md)

## The first screen (phone): the tool

1. H1, byline, hero sub (one line on a phone if it fits; cut the sub before the box moves down).
2. **The box.** Full width, 18 px text, placeholder `Type an address in Horry County`. One button, full width under it on a phone: **Look it up**. Suggestions drop under the box as the visitor types (R2), at most five, tap to pick.
3. The small line: "Public records from Horry County and FEMA. Chapter3 is not the county."
4. **The card** appears under the button and fills line by line, each line as its source answers. One column, a one-word label on the left, the plain meaning on the right, a thin divider between lines. No map, no chart, no badges.

The site's edge then places its homes feed under the opening (the page's first `<section>` after the hero). Nothing else on the first screen.

### The card, line by line

| Label | What it shows | Source and parse | Plain words (examples) | If the source fails |
|---|---|---|---|---|
| Address | The county's matched address | R1. Accept score 90 or more and a PointAddress or StreetAddress. A StreetName only: "Add the house number." Pawleys, Litchfield, Georgetown or 29585 in the text: the Georgetown card (R48). | "1301 SECOND AVE, Conway, SC 29526" | "We could not find that address. Try the street number and name, or open the county's map." + map link |
| Parcel | PIN with a Copy button; TMS; lot if filled | R6 by point within 5 m, then R3 by `PIN=`. No address point: R3 by point. PIN is a number: print as an 11-digit string. LOT " " or null: leave out. More than one parcel at the point: "A building with N units on record. Each unit has its own parcel number." (R4) | "PIN 36800000016 · TMS 1370607007" | "Open it on the county's map" (gis-map page) |
| Land | Acres | Acreage from R13 if the owner allows that layer; else drawn area / 43,560 with "about" (R3, gis F36). Condo building: leave out. | "About 0.3 acre" | leave the line out |
| Town | Inside a town, or unincorporated county | R10. No feature: unincorporated. If the mailing city differs from the town: say so (R17 to R19). | "Inside the City of Conway." / "Unincorporated Horry County. The mail may say Myrtle Beach; the county's rules apply." | leave the line out |
| Flood | Zone in plain words | R7 (FEMA), 5-second timeout, then R8 (county copy). Zone A, AE, AO, AH: "high risk"; V, VE: "highest risk, with ocean waves"; X with "0.2 PCT": "moderate risk"; X minimal: "low risk" (R23 to R26). Base flood elevation shown only when filled (not -9999). Optional second line inside the county's Supplemental Flood Zone (R9) linking /buyers/undisclosed-flooding/. | "Zone AE: high risk. A lender will require flood insurance." / "Zone X: low risk. No federal rule requires flood insurance here." Link: "What your zone means when you buy" -> /buyers/flood-zone-check/ | "Open FEMA's flood map" -> https://msc.fema.gov/portal/home |
| Hurricane | Evacuation zone A, B or C, or none | R11 | "Evacuation zone A, the area nearest the ocean's storm surge." / "Outside every hurricane evacuation zone." Never "safe". | leave the line out |
| Zoning | County zoning code, only outside the towns | R12, only when Town is unincorporated. Inside a town: "City zoning: ask the City of X" with the town's planning page (lead picks URLs). | "Zoning PUD." Link to gis-map's zoning codes section. | leave the line out |
| Records | Four buttons, filled in for this parcel | Deed record: `https://acclaimweb.horrycounty.org/AcclaimWeb/details/JumpToBookPage/1/<book>/<page>` when R13 gives a book and page; else the county's deed search. Tax bill: Copy PIN, then open `https://horrycountytreasurer.qpaybill.com/Taxes/TaxesDefaultType4.aspx` (R15; choose PIN). Property card: `https://www.horrycountysc.gov/gis/parcels/details/<PIN>` and parcel map: `/gis/parcels/pin/<PIN>` (R16; both ask for a county sign-in, said on the button: "county sign-in"). | Button words: "Deed record", "Tax bill (PIN copied)", "Property card", "Parcel map" | each button is a plain link; it always works |
| Homes | Homes for sale near it | `/homes/map/?near=<lat>,<lng>&miles=1` (R49) | Button: "See homes for sale near this address" | always shown |
| Offer | One line and one button | `#lead-form` (the site's pop-up). Button words: "Email me the papers". | "Want the deed, the tax bill and the HOA papers in one email? Free." | always shown |

Rules the build keeps (LOOKUP-TOOL.md):
- Nothing stored. No owner name, value or sale price is requested from any source (R3 has none; R13 is asked for PIN, DeedBook, DeedPage, Acreage only).
- Under 1 second to the first line: the address line prints from the finder's answer; the other calls run at the same time.
- A failed source never shows an error. Its line becomes a link to the county's own page, or is left out.
- Works without the edge or the CRM; the homes link and the offer are plain links.
- No reverse search by name.

### The test (owner: "a change at the county fails the test, not the page")

The website has the pattern: `tools/idx-test.mjs` with `tools/fixtures/`, printing "all controls pass". Add `tools/lookup-test.mjs` and `tools/fixtures/lookup/*.json`, copied from `data/2026-11-d/property-records/raw/api/` (the real answers saved 2026-11-13). The parse functions live once in the spec as plain functions; the spec exports them for the test and writes them into the inline script with `fn.toString()`, so the test and the page run the same code. Controls, each a pass and a fail:
- finder: PointAddress 100 accepted; StreetName rejected with "Add the house number"; Pawleys miss (64.66) rejected (`geocode-*.json`).
- parcel: one parcel (`parcels-conway-1301.json`); 165 stacked (`parcels-nmb-102.json`); none (`parcels-mb-937.json`); PIN number to 11-digit string; LOT " " dropped.
- flood: AE with BFE 11 (`fema-nmb-102.json`); X minimal (`fema-conway-1301.json`); county copy shape (`countyfema-*.json`); a connection error falls back.
- town: named (`muni-*.json`); empty means unincorporated (`muni-cf-point.json`).
- evacuation: A (`evac-nmb-102.json`); none (`evac-conway-1301.json`).
- zoning: PUD (`zoning-cf-point.json`); empty (`zoning-conway-1301.json`).
- deed: book and page to the AcclaimWeb link (`gisapp24-deedbook-1301.json`).
- a field renamed or missing in a fixture fails a named control.
An optional `--live` flag re-queries the same public points and compares field names, for the monthly link check.

## Sections, in order (under the tool)

Headings are statements where a statement reads better; questions where people type the question.

1. **(The tool, above.)**
2. **"Your mail says Myrtle Beach. The town line may not."** (statement; the page's wow finding, R17 to R19). Answer first: about 3 in 4 addresses with a Myrtle Beach mailing city are outside the City of Myrtle Beach, and about 7 in 10 Horry County addresses are outside every town. Then what it decides, two short lines: county or town zoning (R20); the rental rules a buyer meets (R21, link /invest/str-rules/). The card's Town line answers it for any address. **Visual V1.** About 120 words.
3. **Where each Horry County property record lives** (the owner's "What you want / where to find it" table). Three columns: What you want · Where the county keeps it · Our guide. One line each, no steps (the task pages own them):
   - The deed, a mortgage, a lien, a plat -> Register of Deeds index (online list; documents in Conway) -> **Horry County land records** /buyers/property-records/deeds/
   - The parcel map, lot lines, zoning code, aerial photos -> the county GIS map (free county sign-in) -> **Horry County GIS map** /buyers/property-records/gis-map/
   - The tax bill, paying it, the Assessor's value -> the Treasurer's tax search (no sign-in) -> **Horry County tax bills** /buyers/property-records/tax-bill/
   - The flood zone and what it means for a purchase -> FEMA's map -> /buyers/flood-zone-check/
   - What the home would sell for -> not a county record -> /sell/home-value/
   On a phone the table becomes stacked cards. One sentence under it: "Horry County calls its value office the Assessor" (catches "property appraiser"; R30).
4. **Can you search Horry County property records by name?** (people type it, 880). Yes, in two county searches: the deed index (last name first, free, since 1984; R32) and the tax search (last name first; R34). One line each with the link to the task page that shows the steps. One line: our lookup works by address only. No more.
5. **What county records do not show** (statement). Three short rows, each: what is missing, what we check, the page that owns it.
   - HOA debts: a condo buyer can owe the seller's unpaid charges up to the association's statement (R36); we check the balance before closing (R38). -> /hoa/estoppel-and-transfer-fees/
   - Rental rules: the town and the HOA decide, not the deed or the bill (R39). -> /hoa/rental-restrictions/
   - Insurance cost: not a county record (R40). -> /buyers/coastal-insurance/
   - (Optional fourth) The tax you will pay: last year's bill may be the seller's 4% bill (R41). -> /buyers/property-taxes/
   Then the mid-page offer (glass `offer`): **"Send us the address. We pull the deed, the tax bill and the HOA papers and check the balance, free."** Button "Send us the address" -> #lead-form.
6. **Pawleys Island and Litchfield: Georgetown County records** (statement). Two sentences and four links: the open map (R43), the deed search with images (R44), tax bills (R45), qPublic records (R46). Our tool covers Horry County addresses.
7. **Questions** (open text, short): Is this free? (yes; the county's map needs a free sign-in, our box does not). Why no owner's name? (the county shows it behind the deed button; we do not search people). Why does a condo show many parcels? (each unit has its own; R4). How current is it? (it reads the county's and FEMA's maps live, each time). Is Chapter3 the county? (no). Who answers flood map questions at the county? (12 certified floodplain managers, (843) 915-5090; R27). 5 to 6 answers, no repeats of sections.
8. Sources box (method and the scripts), byline, reviewer.

Length: the tool, then about 900 to 1,200 words. A tool page; short is right (CRAFT: "A narrow question is better short").

## Visuals (each readable at a glance)

- **The tool card** is the page's main visual. It must look calm: white glass card, one column, label left in small caps, meaning right in 18 px. A thin progress line under each label while its source loads. Check at 390 px.
- **V1, one bar chart** from `chart-mailing-city-vs-town-limits.csv`: four horizontal bars, "share of addresses inside the town's own limits", for Myrtle Beach 26%, Conway 27%, Surfside Beach 34%, North Myrtle Beach 96%. Title: **"Most 'Myrtle Beach' addresses are outside the city"**. Each bar labeled with its percent at its end; no axis needed. Built with `glass.js bars` from the CSV, never typed.
- No evacuation-zone chart (R22 stays one sentence in the FAQ or the Hurricane line's link text, if used at all). No map: the county's map is behind the buttons, and a second map would fight the card.

## Homes strips

- The edge's feed sits under the opening (all pages).
- The card's "See homes for sale near this address" link is the personal strip for every visitor.
- No glass `homes()` strip: the page names no place to live. If the lead wants one, a single strip after section 2 titled **"Homes inside Myrtle Beach city limits"** (city=Myrtle Beach) would sit on the finding; one strip at most.

## Offers

1. In the card: "Want the deed, the tax bill and the HOA papers in one email? Free." Button "Email me the papers" -> #lead-form.
2. After "What county records do not show": "Send us the address. We pull the deed, the tax bill and the HOA papers and check the balance, free." -> #lead-form.
3. The site's own pop-up does the rest (owner, 2026-11-10). No other buttons ask for anything.

## Links

- Up and across: the three task pages (table and buttons), /buyers/flood-zone-check/, /buyers/undisclosed-flooding/ (only the Supplemental Flood Zone line), /sell/home-value/, /hoa/estoppel-and-transfer-fees/, /hoa/rental-restrictions/, /invest/str-rules/, /buyers/coastal-insurance/, /buyers/property-taxes/.
- Pages that should link here (for BUILD.md; aim for six or more, on words already there where possible): the three task pages' first screens ("All Horry County property records" / "look up any address"), /buyers/property-taxes/ ("look up a property"), /sell/home-value/ ("the county's records"), /buyers/undisclosed-flooding/ (flood zone by address), /buyers/buying-in-myrtle-beach/, /sell/fsbo/, /sell/inherited-house/, /hoa/documents/, /invest/foreclosures/, /buyers/land/ (parcel lookup), /buyers/relocating/hurricanes/ (evacuation zone by address). And "Property records" in the site menu (README lead item).
- New place, feed, sitemap and llms.txt lines go in BUILD.md for the lead. No new homes place.

## Open questions (Claude decides; the owner approves)

1. **The deed-book layer (R13).** It is the public map service behind the county's sign-in map, and it also holds owner names and values. Proposed: use it for PIN, DeedBook, DeedPage and Acreage only, so the Deed button opens the record itself for about 9 in 10 parcels. If the owner says no, the Deed button opens the county's deed search and the Land line uses the drawn area. The tool works either way.
2. **The county's sign-in for the Property card and Parcel map buttons.** Proposed: keep both, with "county sign-in" on the button, because the county offers no other parcel page.
3. **Evacuation line wording.** Annex C says zones are drawn by storm surge risk; it does not say in what order they are called. Proposed: "the area nearest the ocean's storm surge" for A, and no claim about order.

## Must-not

No rate, no payment, no value for any address, no owner's name, no listing data except the homes link, no claim about safety, crime or schools (the county's Schools layer is not used), no date typed in the copy, no sentence over 28 words, no "Here is", no sentence opening with "So".
