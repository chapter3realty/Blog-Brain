# Plan: /buyers/property-records/gis-map/

Spec: `specs/property-records-gis-map.js` (copy the structure of `home-value.js` and `garden-city.js`; glass theme). Author "devin". Facts: `facts.md` rows (F#). Questions: `must-answer.md`.

## The reader and their decision

A buyer or owner in Horry County who typed "horry county gis" and hit a sign-in screen, or who wants to know where a lot's lines are. They decide one of three things: make the county account and use the map themselves, send us the address and let us pull it, or call a surveyor because the map cannot settle their question.

What they fear: a fence or shed on the wrong side of a line, a lot smaller than the listing says, a bill or a deed they cannot find without a number.

## The answer in two sentences

The Horry County GIS map is at horrycountysc.gov/gis/parcels, and it now asks you to sign in with a county account before it shows a parcel. Once in, search by address, owner, PIN or TMS, click the lot, and the card gives its owner, PIN, zoning, acreage and deed book; the lines are a tax map, not a survey.

## Search title, H1, sub

- **Title (57 characters):** `Horry County GIS Map: Free Parcel Search & Property Lines`
  - Carries "horry county gis map" (8,100), "parcel search", "property lines", and "free" (searched four ways). "Free" holds only if the verifier passes F5. If not: `Horry County GIS Map: Parcel Search, Login & Property Lines` (59).
- **Meta description:** The Horry County GIS parcel map now needs a county sign-in. How to get in, search by address, owner or PIN, and read lines, acreage, zoning and the tax map number.
- **H1:** Horry County GIS map: find any parcel, its lines and its tax map number
- **Hero sub (write last):** The county's parcel map now opens on a sign-in screen. Three steps get you from that screen to a lot's lines, acreage and zoning.
- One plain line in the first section, from the owner's brief: "Chapter3 is a real estate brokerage, not the county. The map belongs to Horry County."

## First screen: it does the job

1. H1, byline, the hero sub.
2. A large button, straight to the county: **"Open the Horry County GIS map"** -> https://www.horrycountysc.gov/gis/parcels (an outside link, opens in a new tab; not a request button).
3. Three numbered steps, short, with a small glass icon each:
   1. **Make a county account, then sign in.** "Register" asks for your name, email, mailing address and phone (F3, F5). It may text or email a code (F4).
   2. **Search by address, owner, PIN or TMS.** Open the Search tab and pick one (F9). The PIN is the safest: every parcel has an 11-digit PIN, and about 1 in 4 has no TMS (F19, F20).
   3. **Click the lot.** The card shows the owner, PIN, zoning, acreage and the deed book and page (F10). Zoom in to see the length of each line (F23).
4. The slim offer bar under the steps: **"No county account? Send us the address."** "We pull the parcel, the recorded plat and the flood zone, free." Button: "Have us pull the parcel" -> #lead-form.

Measure the top on a phone before writing: the H1 to the end of step 3 should fit in about one and a half screens. The site's own feed sits under the opening (the edge places it); see "Homes strips".

## Sections, in order

Headings are exact questions where people ask them; statements where a statement reads better.

1. **(First screen above.)** One line linking up to the hub: "This page is the map. The deeds, the tax bill and the other county records are on our property records guide" (link /buyers/property-records/).

2. **What the parcel card tells you** (statement heading). A drawn card (V1) with each field in plain words: who owns it, the PIN, the TMS, the zoning code, the acreage, the deed book and page ("where the deed is filed"), the date it last sold, the soil. Then one short paragraph: the card shows no value and no tax (F10). Value: link /sell/home-value/. Tax: link /buyers/property-records/tax-bill/ with "the PIN on the card opens the tax bill" (F22).

3. **How do I find property lines in Horry County?** Short numbered how-to: zoom in until the line lengths show, in whole feet (F23, F24); use Tools, Measurement, Distance for a fence run (F11); turn on Building Footprints to see the house and shed against the lines (F25); then pull the recorded plat with the deed book and page (link /buyers/property-records/deeds/). Drawing V2 under it.
   - Mid offer: **"Have us pull the plat for your lot."** "Send the address. We find the recorded plat and send it to you." -> #lead-form.

4. **Is the Horry County GIS map accurate?** First sentence answers: "Close enough to find a lot, not close enough to place a fence." Then the county's own words, quoted once (F15). Then our finding, the page's first unique fact: on lots the county lists with an acreage, 4 in 5 are drawn within 5% of it, and about 1 in 10 is off by more than 10% (F35, F36). On a one-acre lot, 10% is about 4,400 square feet (F38). Chart V3. One line on why: the listed acreage and the drawn shape come from different county records, and neither is a survey (method limit, F35 note).

5. **When do you need a surveyor?** A short bold list, each with what it saves you from: a fence or wall near a line; an addition, pool or shed near a setback (link the zoning section; F41 gives SF 10's 10-foot side setback); a disagreement with a neighbor; buying land or splitting a lot; an HOA that asks for a surveyor's drawing (link /submarkets/carolina-forest/the-farm/, F56). Then: South Carolina licenses surveyors, and the state's lookup confirms a license (F55). No prices (none found).
   - Mid offer: **"Buying a lot or a house with land? We check the lines before you offer."** "We pull the recorded plat and tell you if a surveyor is worth it." -> #lead-form.

6. **What is the Horry County tax map number?** The tax map is this parcel map; the TMS is its 10-digit tax map number (F21). The PIN is 11 digits and every parcel has one (F19). About 1 in 4 parcels shows no TMS on the map, so search by PIN or address (F20). The county's tax estimator asks for the PIN (F22): link /buyers/property-taxes/ for the estimate and /buyers/property-records/tax-bill/ for the bill.

7. **What do zoning codes like CFA, FA and SF 10 mean?** One sentence: the code on the card says what can be built and how far from the lines. Table V4 with six codes. Then: inside Myrtle Beach, North Myrtle Beach, Conway, Surfside Beach and the other towns, the county map shows no zoning; each town keeps its own map (F29). One wow line for the beach: in Garden City, the map's overlay marks the few areas where new buildings may rise past 35 feet, up to 180 (F33).
   - Mid offer: **"Want to know what you can build on a lot?"** "Send the address. We read the zoning and the setbacks for that lot." -> #lead-form.

8. **See the land in 1998, and every few years since** (statement heading; the page's wow). The Imagery tab holds the county's own aerial photos from 11 years, 1998 to 2026, each sharp to about 6 inches (F12, F13). The first two are black and white (F13). What a buyer sees: when the house went up, what stood there before, when the neighbors built. Then a short list, "Layers worth turning on": Flood Zones (link /buyers/flood-zone-check/ for what a zone means; F28), Contours every 2 feet (F27), Soils (F34), the planned Interstate 73 route (F31), airport overlay zones (F32).
   - Homes strip H1 here (see below).

9. **Georgetown County GIS for Pawleys Island and Litchfield** (statement heading; the searched name). Georgetown's map opens with no sign-in (F44). Search by TMS, address or road, not owner (F45). The TMS is 13 digits, typed with hyphens, in the county's own format "05-0029-049-00-00" (F46). Spell out "South", shorten "Drive" to "DR" (F47). Owner search: the Assessor's qPublic site (F48). Two things Horry's map does not offer: about two parcels in three carry a plat reference (F51; plat slides need an "S" in front in the deeds search, F52), and the state's beachfront baseline and setback lines are a layer (F49), the line an oceanfront buyer asks about. The Swipe tool lays two aerial years side by side (F50). Same caution: the county says the map does not replace a survey, deed or plat (F53).
   - Homes strip H2 here.

10. **GIS map questions** (FAQ, open text, five to seven entries, each answered in its first sentence):
    - Is the Horry County GIS map free? (F5, if verified)
    - Why does the map ask me to sign in? (F2: the county requires its account; one account also opens Land Records, F6)
    - Can I search the GIS map by owner name? (F9: type each word of the name)
    - Why is the TMS blank on my parcel? (F20)
    - Does the GIS map show what a house is worth? (F10: no; link /sell/home-value/)
    - Can I print the map? (F11: Tools, Print Map)
    - Is Chapter3 the county? (No; we are a brokerage, and we pull records for buyers and owners free.)

11. **End offer band:** "Send us the address. We pull the parcel, the plat and the flood zone, free." Button: "Send us the address" -> #lead-form. Sources box after it.

About 1,400 to 1,800 words. The page answers one question (use the map) and the three a reader asks next (lines, accuracy, numbers). Zoning, aerials and Georgetown are short.

## Visuals (each readable at a glance; drawn, never screenshots of county sites)

- **V1, the parcel card, drawn.** A glass card shaped like the county's card, with placeholder values ("Owner name", "00000000000") and a plain label beside each field: "PIN: the number every county office uses", "Deed Book and Page: where the deed is filed", "Zoning Code: what you can build". Caption: "A drawing of the card the county map shows when you click a lot. Your lot's details fill these fields." No real parcel.
- **V2, the map's line and the surveyor's line, drawn.** One lot from above: a solid line with corner pins marked "Surveyor's corners", and a thin dashed line beside it marked "The county map's line". A small note: "The county draws its lines for taxes. A surveyor finds the corners in the ground." Caption says it is a drawing, not a real lot. One message; no numbers.
- **V3, the chart (from `chart-drawn-vs-listed-by-lot-size.csv`).** `glass.bars`, five bars, share of lots drawn more than 10% off the listed acreage: under 1/4 acre 4.7%, 1/4 to 1/2 acre 10.5%, 1/2 to 1 acre 17.9%, 1 to 5 acres 13.2%, 5 acres or more 10.0%. Title: "About 1 in 10 lots on the county map is drawn more than 10% off its listed acreage." Note: "Lots the county lists with an acreage, 85,490 in all. Chapter3 compared each drawn shape with its listed acreage." Round to whole percents on the page.
- **V4, zoning table.** Six rows: CFA, FA, HC, SF 10, MSF 10, SF 40 (or GR). Columns: "Code", "What it allows", "Smallest lot", "House set back from the front / side". Fill only from F39 to F41 and the ordinance's Table 2-1; a verifier adds the SF 40 and GR rows from the same table before use. Phone: cards.
- Icons on the three first-screen steps (`tools/icons.js`). No photo is needed; no place on the page is the subject. If a photo is wanted for section 8, it must be a public domain aerial (USGS or NOAA) with a license record, never the county's imagery unless rules/images.md allows county work.

## Homes strips (the owner's strongest tool)

- **Site feed under the opening (lead adds to `idx-lib/feeds.js`):** a new feed for this page, houses on an acre or more across the county: `H({ min: "250000", lotMin: "1" })` over Conway, Myrtle Beach, Little River, Loris, Aynor and Murrells Inlet (the lead picks towns that fill at least 10). Title: **"Your own acre: houses on an acre or more"**. True only with `lotMin: "1"`. Check the live count first.
- **H1, after section 8 (the aerials):** the same idea as a glass `homes()` strip only if the lead prefers a strip to the feed. Do not run both.
- **H2, in section 9:** `G.homes("town-pawleys-litchfield", "Pawleys Island and Litchfield", "", "Pawleys Island and Litchfield homes, creek to ocean")`. The title must hold for the place's search (4 miles round the town's centre); if the lead cannot confirm both creek and ocean homes appear, use "Homes for sale in Pawleys Island and Litchfield". Lead adds this page to the place's `pages` list.

## Offers (four on the page, never the same words)

| Where | Headline | Button |
|---|---|---|
| Under the steps | No county account? Send us the address. | Have us pull the parcel |
| After property lines | Have us pull the plat for your lot. | Send me the plat |
| After surveyor | Buying a lot or a house with land? We check the lines before you offer. | Have us check the lines |
| After zoning | Want to know what you can build on a lot? | Have us read the zoning |
| End band | Send us the address. We pull the parcel, the plat and the flood zone, free. | Send us the address |

Every request button links to #lead-form (or /contact/); the site opens the pop-up. The county map button is the only outside button.

## Unique findings (what no other site has)

1. The county map now sits behind a sign-in, with the exact steps to get in and the fields of the sign-up form (F2 to F5).
2. Our count of all 302,630 parcels: drawn lot against listed acreage, 1 in 10 off by more than 10%, worst on half-acre to one-acre lots (F35 to F37).
3. About 1 in 4 parcels has no TMS on the map; every parcel has an 11-digit PIN (F19, F20).
4. Eleven years of county aerials, 1998 to 2026, at about 6 inches (F12, F13).
5. Georgetown: no sign-in, 13-digit TMS format, plat references on two parcels in three, beachfront setback lines (F44 to F52).

## Links

- Out (in sentences): /buyers/property-records/ (up), /buyers/property-records/deeds/, /buyers/property-records/tax-bill/, /buyers/flood-zone-check/, /buyers/property-taxes/, /sell/home-value/, /submarkets/carolina-forest/the-farm/, /buyers/land/ (once live), /submarkets/garden-city/ (the height overlay line), /submarkets/pawleys-island/ (Georgetown section).
- County and state links: the GIS map, Register, the zoning ordinance PDF, the county zoning page, Georgetown One Map, qPublic (after a browser check), the SC licensee lookup.

## For the lead (BUILD.md)

- **Sitemap and llms.txt:** add `/buyers/property-records/gis-map/`. llms.txt line: "Horry County GIS map: how to get past the county sign-in, search by address, owner or PIN, read lines, acreage and zoning; 1 in 10 lots drawn more than 10% off their listed acreage; Georgetown County's open map."
- **Feed:** new entry in `idx-lib/feeds.js` for this page ("Your own acre: houses on an acre or more", `lotMin: "1"`).
- **Place:** add `/buyers/property-records/gis-map/` to `pages` of `town-pawleys-litchfield` in `batches/2026-10-b/data/idx-places.json`.
- **Pages that should link here (six or more), on words already there:** the hub /buyers/property-records/ (first screen, "GIS map"); /buyers/property-records/deeds/ ("the parcel map"); /buyers/property-records/tax-bill/ ("find the PIN"); /buyers/flood-zone-check/ ("the county's map"); /buyers/property-taxes/ ("PIN" in the calculator or FAQ); /buyers/land/ ("zoning code", "acreage"); /submarkets/carolina-forest/the-farm/ ("a land surveyor's drawing of the lot"); /submarkets/garden-city/ (height overlay); /buyers/undisclosed-flooding/ (old aerials); the ~25 pages whose sources say "Horry County GIS" may link the words to this page instead of the county (the lead decides).
- **Hub lookup tool:** the map accepts `/gis/parcels/pin/<PIN>` and `/gis/parcels/tms/<TMS>` (F14). Test after sign-in before building on it.
- **Link check:** add https://www.horrycountysc.gov/gis/parcels, /register, the ordinance PDF, the Georgetown One Map and the LLR lookup to the monthly check.
- **Zoning ownership:** this page takes "horry county zoning map / zoning code"; /buyers/land/ links here.

## For the verifier (rows that need a browser or a second look)

- F5 "free": confirm the sign-up has no fee anywhere (page, terms, confirmation email text if shown).
- F7 Map Your Move sign-in; F16 that the signed-in Legend matches the open service's layers; F44 Georgetown opens without a sign-in; F48 qPublic opens.
- F33: read the full Section 834 C sentence before the Garden City line is used.
- F35 to F37: rerun `scripts/analyze.py` on the raw file; check the compared group description.
