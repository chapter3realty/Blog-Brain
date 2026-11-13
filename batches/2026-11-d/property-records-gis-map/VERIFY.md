# Verification: /buyers/property-records/gis-map/

Verifier: independent agent, batch 2026-11-d. I did not research this page. Every source was opened again on 2026-11-13, not read from the researcher's quotes.

How I checked:

- The county's live app code (`/gis/parcels/assets/index-Db2YLDyV.js`), byte for byte the same as `raw/gis-app-index.js`.
- The live sign-in pages for the GIS map, Land Records and Map Your Move, and the register form's live code.
- Every count queried again on the county's open service, `HorryCountyGISApp/MapServer`. I re-ran `scripts/layer_stats.py`.
- `scripts/pull_parcels.py` re-run: the new pull is byte for byte the same as `raw/parcels-area-acreage.json`.
- `scripts/analyze.py` re-run: same result as `drawn-vs-listed.json`. I also redid the shares in my own code.
- The zoning ordinance PDF downloaded again (same file), and Section 201, Section 834 and Table 2-1 read in full.
- Georgetown's map config, web map and parcel service queried live.
- SC LLR's board page and license lookup opened.

My working files are in the scratchpad: `ver/`.

**Totals: 58 rows. 51 verified, 7 corrected, 0 struck.** The six wording corrections are in `batches/2026-11-d/facts/buyers-property-records-gis-map-struck.json`, and each was tested. Every struck wording fires its entry, and no approved wording fires.

## A. The county's GIS parcel map

| # | Status | Note |
|---|---|---|
| 1 | VERIFIED | Online Services links "GIS Parcels" to https://www.horrycountysc.gov/gis/parcels. Page title "GIS Application \| Horry County Government". |
| 2 | VERIFIED | The live code has "Requires a www.horrycountysc.gov account for authorized access." The router sends every map route to `/login` unless a saved `parcel_token` exists. One limit: `/disclaimer` opens without a sign-in. Write "before it shows the map", not "before it shows anything". |
| 3 | VERIFIED | "Having trouble?", Register (https://www.horrycountysc.gov/register) "to create an account", "Recover my Username \| Password". |
| 4 | VERIFIED | When the server answers 202, the code shows a "Two-Factor Authentication" form with a "Two Factor Code" box. Keep "may ask". |
| 5 | CORRECTED | Verified from the live form code: "Register: Step 1" asks for Name, User Name, Email, Password and Confirm Password. "Register: Step 2" ("Account Contact") asks for Address 1, Address 2, City, State, Zip Code and Phone. There is no payment, fee or card text in the form. **"Free" is not verified.** No county page says the account is free; I searched Online Services, Land Info, the Assessor and the web. Safe wording: "The account form asks for your name, email, mailing address and phone, and has no payment step [county register form, read 2026-11-13]." Struck: "free" for the county account or the county map. This removes "Free" from PLAN's first title; use PLAN's fallback title. "Free" can go back only if the county GIS office confirms it in writing. |
| 6 | VERIFIED | `/apps/landrecords` redirects to "Sign In \| Land Records" with "**Requires an Horry County Government account for authorized access." It links to the same /register, username recovery and password recovery pages as the GIS map, so one account is supported. |
| 7 | CORRECTED | The Map Your Move main map (`/`) and `/details/:pin` are behind a sign-in: a saved `mapyourmove_token` check, with a redirect to `/login`. Its `/flood-info` route is not behind a sign-in. **"There is no county map that skips the sign-in" is wrong.** The county's ArcGIS site lists public map apps (Delinquent Tax Web Map, Major Residential Developments, Know Your Zone), and its parcel service is open to anyone (section B). Safe wording: "The county's parcel map, Land Records and Map Your Move each ask for a county account sign-in [county apps, read 2026-11-13]." |
| 8 | VERIFIED | "Legend Tab", "Imagery Tab", "Search Tab", "Tools Tab". The note text is in the code. |
| 9 | VERIFIED | The options are Address, Owner, PIN and TMS. Owner search is `LOWER(OwnerName) LIKE '%word%'` for each word, joined by AND. PIN and TMS use `startsWith`. |
| 10 | VERIFIED | The card's fields, in order: Owner Name, PIN, TMS, Lot, Parcel Type, Zoning Code, Municipality, Zip Code, District (the tax district), Legal Desc., Square Footage, Acreage, Dist. Name, Dist. Population, Owner Address, Condo Label, Lots, Deed Book, Deed Page, Date Transferred, Soil Type. The card has no market value, assessed value or tax. Two details for the writer: "Square Footage" on the card is the drawn shape's area (`Shape_Area`), and "Acreage" is the listed acreage. A reader can compare the two on any lot (section C). "Date Transferred" is the layer's SaleDate. Compliance note: the open copy of the layer has market and assessed value fields (MarketProp, AssessedProp and others). The page must not point readers to those values for an address. |
| 11 | VERIFIED | "Measurement Tools" with "Distance" and "Area" (DistanceMeasurement2D and AreaMeasurement2D), and "Print Map". |
| 12 | VERIFIED | `Aerials1998` to `Aerials2026`, with labels 1998, 2001, 2005, 2008, 2009, 2010, 2014, 2017, 2020, 2023 and 2026. All 11 services answered. |
| 13 | VERIFIED | Ten years have `pixelSizeX` 0.5 in EPSG 3361 (international feet), which is 6 inches. 2023 is 0.1524 in EPSG 3857: 6 inches in Web Mercator units, about 5 inches on the ground at this latitude. 1998 and 2001 have one band (black and white). 2005 to 2010 and 2026 have three bands; 2014 to 2023 have four. This is the size the county serves, not a stated capture resolution. Write "about 6 inches a pixel", not "sharp enough to see" a named object. |
| 14 | VERIFIED | The routes `/pin/:pin`, `/tms/:tms` and `/details/:pin` are in the code. Not tested after sign-in (no account). Without a sign-in a deep link lands on the login screen. Test one before the lookup tool relies on it. |
| 15 | VERIFIED | The disclaimer at /gis/parcels/disclaimer has "The GIS data and mapping application represent the parcel fabric as used for taxing purposes and not for survey purposes." and "The Data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness." Online Services has this sentence and a Land Records version ("The Land Record data and mapping application ..."). |

## B. Layers and counts (re-queried live)

| # | Status | Note |
|---|---|---|
| 16 | VERIFIED | The open service has layers 16 to 41, plus annotation layers 0 to 15, named as listed. The signed-in app reads `GISApp/HorryCountyGIS/MapServer` with layer 24 (its code says so). That service answers "Token Required", so its layer list is still an inference. Say "the county map's layers include", which holds either way. |
| 17 | VERIFIED | `{"count":302630}`. The OBJECTIDs run from 1 to 302,630, so the pull missed none. |
| 18 | VERIFIED | max(SaleDate) = 1794323668000 = 2026-11-10 UTC. Never print it. |
| 19 | VERIFIED | Server side: `PIN >= 10000000000` returns 302,626, and `PIN IS NULL` returns 4. |
| 20 | VERIFIED | Server side: TMS is null on 70,062, blank on 665 and "<Null>" on 92, for 70,819 (23.4%). 231,799 have 10 characters (231,797 are all digits). 62,211 of the blanks are parcel type 2. Write "nearly 1 in 4" or "about 1 in 4". |
| 21 | VERIFIED | The live page has "TAX MAP NUMBER -- A ten (10) digit number that is assigned for property identification and location." |
| 22 | VERIFIED | The live Assessor page has the quote, word for word ("you'll need the PIN number ... locate a PIN by address or owner name"). |
| 23 | VERIFIED | 806,611 pieces. 517,104 have DIMENSION or DIMENSION2 (64.1%). The layer has two label classes, `[DIMENSION]` and `[DIMENSION2]`, so both are drawn. It shows from minScale 2,400. |
| 24 | VERIFIED | 129 and 5 pieces have fractions. The unit is feet: on a sample of 1,416 pieces, the median of the label divided by the drawn length is 1.000. |
| 25 | VERIFIED | 417,124. minScale 4,800. |
| 26 | VERIFIED | 244,565. |
| 27 | VERIFIED | 101 distinct values, every 2, from -42 to 158. The layer's own vertical system is "NAVD88 height - Geoid12B (foot)", so the unit is feet. It shows from minScale 6,000. Do not call the negative values ground. Do not print the range. "Lines every 2 feet of height" is safe. |
| 28 | VERIFIED | FLD_ZONE: 0.2 PCT ANNUAL CHANCE FLOOD HAZARD 1,322; AE 711; VE 42; A 5. The fields include FLD_ZONE, SFHA_TF, STATIC_BFE, DEPTH and V_DATUM. These are shape counts; keep them off the page. |
| 29 | VERIFIED | The four points give the same results. The fourth point is inside the county's own "CAROLINA FOREST" community area (Public/Communities). Stronger test: 40 random points inside each of the 8 cities' polygons (320 points) returned no county zoning area. |
| 30 | VERIFIED | 9,617 areas. The counts match. |
| 31 | VERIFIED | 63,870. The field is `DBO.Proposed_I73_COMBINED_DES.Entity`. Say "planned route" only. |
| 32 | VERIFIED | The airport zones are Horizontal, Inner Approach, Outer Approach, Runway Protection, Transition, Conical and Future Use Protect. The corridor overlay names are as listed. |
| 33 | CORRECTED (wording) | The layer has "GARDEN CITY OVERLAY ZONE" 35, 80, 120 and 180 FT, with MaxHeight 35, 80, 120 and 180. Section 834 C in full: "The height of all new construction within the Garden City Overlay shall not exceed thirty-five feet (35'), except those areas designated on the attached map, or unless rezoned as a Planned Development District (PDD). A height of up to one hundred eighty feet (180') may be approved in a PDD." The ordinance ties its only stated 180-foot figure to a PDD approval. "New buildings may go to 180 feet" reads as a right, and it is not one. Safe wording: "The county map's Garden City overlay marks height zones of 35, 80, 120 and 180 feet [MapServer/29]. The ordinance caps new buildings at 35 feet except in areas its map shows, or in a PDD, where up to 180 feet may be approved [Zoning Ordinance Section 834 C]." Also: Section 834 F refers to zones that allow 55 feet or more, and the map layer has no 55-foot zone. Do not call the four zones the full list of limits. |
| 34 | VERIFIED | 16,223 areas. Kenansville fine sand, 0 to 6 percent slopes: 1,529. Goldsboro loamy fine sand, 0 to 2 percent slopes: 1,319. |

## C. Drawn lot against listed acreage

Re-pulled and re-run; the output is identical. I recomputed every share in my own code.

| # | Status | Note |
|---|---|---|
| 35 | VERIFIED | 216,968 parcels have no acreage or 0 (also a server count). 12,511 have a non-empty condo label. 85,490 are compared. In the compared set, the median listed acreage is 1.0 and 50.5% are 1 acre or more. 80,993 of the 85,490 are parcel type 2. Keep "on lots the county lists with an acreage". |
| 36 | VERIFIED | Within 2%: 62.67%. Within 5%: 80.08%. Within 10%: 89.29%. Off more than 10%: 10.71% (9,156). Off more than 25%: 2.73% (2,330; 1 in 36.7). The median difference is 1.17%. The drawn shape is bigger on 51.2% of lots, and bigger on 50.5% of those off more than 10%. "1 in 37" holds; "about 3 in 100" is plainer. |
| 37 | CORRECTED (wording) | The bands are verified as listed. The 1/2 to 1 acre band is the highest at 17.9%. The chart title idea, "About 1 in 10 lots on the county map ...", reads as every lot, but 72% of parcels list no acreage. Safe wording: "Of the lots the county map lists with an acreage, about 1 in 10 is drawn more than 10% bigger or smaller [our count of 85,490 lots, county parcel layer, 2026-11-13]." |
| 38 | VERIFIED | 43,560 x 0.10 = 4,356 square feet. |

The method limit stands. Neither number is a survey. The data shows the two county figures disagree, not which one is right.

## D. Zoning codes

| # | Status | Note |
|---|---|---|
| 39 | VERIFIED | Section 201 intent statements, quoted word for word. The ordinance's FA name is "Forest and Agriculture Zoning District". |
| 40 | VERIFIED | Section 201, "Highway Commercial District", quoted as given. |
| 41 | VERIFIED | Table 2-1: SF10 and MSF10 are 10,000 SF, front 25', side 10', rear 15', corner side 15', height 35', width 70'. SF20 and MSF20 are 20,000 SF, 40', 15', 25', corner 22.5', 35', 90'. GR single-family is 6,000 SF. The MSF10 row's uses are "Single Family" and "Manufactured Home". |
| 42 | VERIFIED | "On May 1, 2007, Horry County Council passed an ordinance re-titling all residential zoning classifications ... does NOT affect property setbacks or allowable land uses." The same page adds: "However the minimum square-footage of the lots may have lowered." Never print the year. |
| 43 | VERIFIED | The strings are in `raw/suggest/horry_county_zoning_map.json`. |

## E. Georgetown County

| # | Status | Note |
|---|---|---|
| 44 | VERIFIED | The One Map item has access "public". Its web map (fe1f4006...) has access "public". The parcel service answers anonymous queries. The county GIS page links "County Mapping Portal" to georgetown.maps.arcgis.com. I did not open it in a browser, but every part it loads is public. |
| 45 | VERIFIED | One search widget, with sources "TMS no" (TMS), "Roads" (St_Name, St_Full) and "E911 Address" (Add_Partial, Add_Full). There is no owner source and no query or filter widget. The About text is word for word. The map does have a "Parcel Label TMS + Owner" layer, so owner names can show as labels on the map. Searching by owner is not possible. |
| 46 | VERIFIED | The county's words: "contains 13 digits ... 05-0029-049-00-00 ... including the hyphens". In a sample of 392 lots, 38 have a letter after the 4-digit block (for example 99-9999I-999-99-99). Show the format only. |
| 47 | VERIFIED | "SOUTH HAZARD ST — not S HAZARD ST", "HAGLEY DR — not HAGLEY DRIVE". The page must not copy the county's em dash. |
| 48 | CORRECTED | Both links are in the map's Additional Resources. The Georgetown Deeds text says it "can be used to enter owner, plat references, deed book or page". The deeds Name Search page opened ("Georgetown County Search Deeds"). qPublic's text says only "searchable in numerous ways". qPublic returned 403 (a bot check), and this session cannot reach it, so "qPublic searches by owner" is unverifiable. The only sources I found for it are secondary. Safe wording: "To search Georgetown by owner name, use the Register of Deeds name search. The map also links the Assessor's qPublic database [Georgetown One Map, Additional Resources]." The deeds search finds names on recorded documents. It is not a list of current owners. |
| 49 | VERIFIED | The layer titles are as listed. "FEMA - Floodplain" is FEMA's own NFHL service (hazards.fema.gov). The aerial layers are 2014, 2017, 2018, 2022 and 2024. The map also has an "Education" layer; keep it off the page (no school claims). |
| 50 | CORRECTED (wording) | The Swipe tool and the quote are verified. The county's example, "2023 aerial photos vs 2024", names a year the map does not carry: its aerials are 2014, 2017, 2018, 2022 and 2024. Safe wording: "The Swipe tool compares two aerial years, for example 2022 and 2024." |
| 51 | VERIFIED | Count 47,947. PLAT is not null and not blank on 31,131 (64.9%). max(last_edited_date) = 2026-11-09. Never print the date. |
| 52 | VERIFIED | "Please note plat slides need an S added in front of them, e.g. S839-2". |
| 53 | VERIFIED | Both disclaimer sentences are word for word. |
| 54 | VERIFIED | (843) 545-3071 and gis@gtcounty.org on the One Map. The GIS division page lists 843-545-3071. The division page URL now redirects to https://gtcountysc.gov/260/GIS-Asset-Management. |

## F. Surveyors

| # | Status | Note |
|---|---|---|
| 55 | VERIFIED | "The South Carolina State Board of Registration for Professional Engineers and Surveyors regulates Professional Engineers, Professional Surveyors, and firms offering or providing engineering and/or surveying services." Its Licensee Lookup goes to verify.llronline.com/LicLookup/Engineers/Engineer.aspx?div=50, which opened as "Engineers and Land Surveyors". |
| 56 | VERIFIED | The live Farm page has the sentence. It matches 2026-10-b `the-farm-facts.md` row 53 (verified): the HOA FAQ says "ANY APPLICATION SUBMITTED WITHOUT A SURVEYOR'S PLAT WILL NOT BE ACCEPTED". Link it; do not restate it. |

## G. Search demand (plan only)

| # | Status | Note |
|---|---|---|
| 57 | CORRECTED | "horry county gis" 8,100 and "tax map" 1,000 are in `research/dataforseo-2026-11-13.md`. "horry county property lines" 140 is in `kw/volumes.json`. **"parcel search 70" is in no file I could find: unverifiable.** Also, PLAN.md puts 8,100 on "horry county gis map". The 8,100 is for "horry county gis", and no volume for "gis map" was found. |
| 58 | VERIFIED | Every string is in `kw/suggest.json` or `raw/suggest/*.json`. |

## Do not publish

- "Free" for the county's account, map or parcel search (row 5), until the county says so.
- Any line that no county map works without a sign-in (row 7).
- Market or assessed values from the open parcel layer for any address (row 10 note). That would be a value for an address.
