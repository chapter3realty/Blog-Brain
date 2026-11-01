# Plan: /buyers/retirees/ (Lane U, batch 2026-11-a)

Spec to write: `specs/retirees.js` (new; the live page is old-template HTML with no spec). Ledger: `facts.md` (50 rows). Must-answers: `must-answer.md`. Data: `<web2>/data/2026-11-a/buyers-retirees/` (README lists every script).

## The reader and their job

A couple or a single person, 60 to 70, in New York, New Jersey, Pennsylvania, Ohio or North Carolina, who has vacationed here. They do not know the towns or the tax words. Their worries, in order: will the money last, is a hospital close, what happens in a hurricane, then where to live and whether a 55+ community is the answer.

**Job, in one verb: decide** whether to retire here, and if so, how to set it up so the low costs are real. Kind of page: **decision guide** (Page shapes, section 9), with a cost table and a comparison table inside it.

## The deciding fact (checked first)

South Carolina's income tax changed for 2026 (Act 110, signed March 30, 2026; SCDOR Information Letter 26-20). Under the 2026 rules, a married couple, both 66, with $40,000 of Social Security and a $30,000 pension owes **no** South Carolina income tax (row 11). The live page's tax section predates the law. Every tax line on the page is rebuilt from rows 1 to 13.

## What makes this page unique (findings nobody else has published)

1. **Our count from county tax records: how many homes in each 55+ community are someone's full-time home.** 83 to 93 percent of homes in the four communities are taxed at the 4 percent legal residence rate, against 76 percent of houses county-wide (rows 25 to 27). A retiree learns which places stay lived-in in January. No one has published this.
2. **The hurricane evacuation zone of every home in each 55+ community**, tested parcel by parcel against SCEMD's own zone map: three of the four are outside every zone; every Seasons home is in Zone C (row 39).
3. **Three worked 2026 income tax examples under the new law** (rows 11 to 13). Published nowhere yet; most sites still print the 2025 rules.
4. **One $400,000 house, three tax bills**: at 64, at 65 with the homestead exemption, and as a second home, from the 2026 certified levy (row 23). The second-home bill is almost four times the 65+ bill.
5. **The age rule for grandchildren, side by side** for the four communities (rows 29 to 32): 90 nights for under-19s in one, 60 days for under-18s in another, no limit in a third.
6. **Coast against inland heat**: Conway has about 58 days a year of 90 degrees or more; Myrtle Beach about 22 (row 42).

## Title, H1, first screen

- Title (owner liked it, `data/headlines.json`): "Retire to Myrtle Beach: The Costs People Miss | Chapter3". Keep.
- H1 (owner liked it): "Retiring to Myrtle Beach: the costs retirees underestimate." Keep. The page now delivers it: the costs people miss are the ones you have to apply for (4 percent, homestead), the second-home tax, insurance, and the storm plan.
- Short answer, first two sentences (draft for the writer, from rows 11, 23, 25): "Usually yes, if you will live here most of the year. A retired couple living on Social Security and a modest pension often owes no South Carolina income tax in 2026, and a $400,000 house you live in is taxed about $1,290 a year once you are 65." Third sentence names the catch: the low tax only comes after you apply for it, and the same house as a second home is taxed about $4,820.
- Key-facts row (4 glass tiles with icons and words): "$0 state tax on Social Security" (row 5); "About $1,290 a year: property tax at 65 on a $400,000 home" (row 23); "4 hospitals with an emergency room" (row 34; check McLeod before counting it); "3 of 4 55+ communities outside every evacuation zone" (row 39).
- Then the slim offer bar. Remove: the dead "Search homes ... Coming soon" box, the orange "Find My Community" band, the FAQ-first layout, the separate Mistakes block.

## Sections in order, and what each proves

1. **Is Myrtle Beach a good place to retire? (the decision table)**
   Heading is the search. Under it, a decision table, "If this is you" against "Then", 6 rows, each from a row:
   - You will live here most of the year: apply for the 4 percent rate and, at 65, the homestead exemption; a $400,000 house is taxed about $1,290 (rows 17 to 20, 23).
   - It will be a second home for a few years first: the same house is taxed about $4,820 until it becomes your legal residence (rows 15, 23).
   - You live on Social Security and a modest pension: you may owe no state income tax (row 11).
   - Your pension is a public pension from another state: South Carolina taxes it past its deductions; example, about $560 a year (row 12).
   - You want a hospital within 10 minutes: three of the four 55+ communities are (row 35).
   - You do not want to plan an evacuation by zone: three of the four are outside every zone (row 39).
   The table answers "pros and cons" without a pros-and-cons list. The cons are in the rows.

2. **What does it cost a year to own a home here at 65?** (cost shape inside the guide)
   Lead with the total in one sentence. Table for one $400,000 house in unincorporated Horry County: three columns (lived in, under 65 / lived in, 65 and older / second home or rental), rows: property tax, stormwater fee ($89.40, row 24), HOA fee (the range of the four communities, $95 to about $445 a month, rows 29 to 32; "no HOA" outside them), flood cover if wanted (about $550 to $600, row 41), homeowners insurance (our quote, see owner question 1). A total row for the lines we can price. Glass bar chart of the three tax bills from `examples.json`.
   Then **"The costs people miss"**, four short items, each with what we do about it: the 6 percent rate until you apply (row 17); the homestead exemption needs its own application at the county auditor and a year of residency (rows 19, 20); you certify no other legal residence for any purpose, so you cannot keep a northern homestead (row 17); moving in late still gets the whole year (row 18, good news, put it first in the list). One real story: `ny-client-tax-drop` (row 49), labelled one household, not a promise.
   Never a mortgage payment or a rate.

3. **Does South Carolina tax retirement income in 2026?**
   First sentence: "South Carolina does not tax Social Security, and for 2026 most retirees with modest incomes owe little or no state income tax." Then a table of the three worked examples (household, income, 2026 SC tax: $0, about $560, $0), built from `examples.json`, each labelled "Example". Under it, the rules in plain words, one line each: retirement deduction (row 6), age-65 deduction and that the two do not stack (row 7, registry `sc-age-65-deduction`), military (row 8), the new SCIAD (row 4), the 2026 rates (row 2), the $60,000 filing line for couples both 65+ (row 9). One line: the law changed for 2026 (row 1). Link the relocating pages for each state's comparison; make no claim about other states' rules.
   Optional, only if the build has time: a small estimator using the exact functions in `build_examples.py`. The three examples carry the section without it.

4. **Which 55+ communities are there, and how do they compare?**
   Lead with finding 1: "In each of these four, 83 to 93 percent of homes are taxed as someone's full-time home. Across the county, 76 percent of houses are." Glass bar chart from `communities.json` (four bars and the county line).
   Then the comparison table (cards on a phone), from `communities.json`: where; homes; built; HOA fee; grandchildren and guests (the age rule); nearest hospital and minutes; evacuation zone; homes for sale now (a link per community, not a typed count). Each card ends with its own offer: "See homes for sale in Myrtle Trace", linked to the community's page or listings. Siblings own the details: one line each, then link to the full guide (CRAFT 3, siblings share places, not facts).
   One real story: `blackmoor-to-seasons` (row 48).
   Then the honest point: most homes here have no age rule. About 2,100 one-level houses are for sale, two in three under $400,000, most of them inland (row 45). Glass bar chart of one-level houses for sale by town, under and over $400,000, from `listings-counts.json` (re-pull on build day). Our buyers' mix line (row 50) only if it helps; never to point anyone to a place.
   Leave Cresswind out of the table (no readable age rule). Murrells Inlet is a town, not a community.

5. **How close is a hospital?**
   One map (`tools/area-map.js`): the four 55+ communities and the hospitals with an emergency room, drive minutes from rows 35 and the geocodes in `raw/geocodes.json`. Then a short table: hospital, town, emergency room (yes), the closest of our four communities and minutes. One line on McLeod Health Carolina Forest (48 beds, ribbon cut August 27, 2026; say it is opening, not open, unless a newer source says open, row 36). **Do not print CMS star ratings** (row 37): it is a rating of named companies, and the owner's rule is facts, never a verdict on a named company. Link to Medicare's Care Compare as the place to read ratings.

6. **What about hurricanes and flooding?**
   First sentence: the state's evacuation zones, in plain words (row 38). Then which community is in which (row 39), stated once (it is also a table column; here it gets the meaning: the zones are drawn around storm surge, so a home outside every zone is not in the area the state plans to move out for rising sea water; wind still reaches it). Do not write that Zone C leaves last: Annex C does not say so. Flood: all four are in FEMA's lower-risk zone X, with 45 Seasons lots touching the high-risk zone at an edge (row 40); a policy if you want one costs about $550 to $600 (row 41). Never "safe". Link /buyers/coastal-insurance/ and the storm history page.

7. **What is the weather like for retirees?**
   Small glass chart: days of 90 degrees or more and nights at or below freezing, Myrtle Beach and Conway (row 42, `raw/noaa-annual-*.csv`). One line from the story bank: in the off season nothing closes but the attractions (row 47, not quoted).

8. **Frequently asked questions** (one merged list, open text, no repeats of the sections above; each answer starts with the subject named):
   - How do I apply for the homestead exemption in Horry County? (rows 19, 20; link /buyers/property-taxes/)
   - Can grandchildren visit or live in a 55+ community? (rows 29 to 32, 33)
   - How many people 65 and older live in Horry County? (row 43; about 4,000 a year move from other states, row 44)
   - Do I pay South Carolina tax on my car? (one line, link /buyers/property-taxes/; no claim, Not verified 3)
   - Is South Carolina better than Florida for retirees? (one line and a link to /buyers/relocating/; no claim)
   - Do I lose the 4 percent rate if I rent the home out? (link /buyers/property-taxes/, which owns the 72-day rule)

9. **The final offer** (same box as the top): "Tell us how you want to live. We will price your year here: the tax at your price, the HOA fee, three insurance quotes, the flood zone and the drive to the hospital." This is the gap the page cannot fill alone (insurance).

Links out, in sentences: /buyers/property-taxes/, /buyers/coastal-insurance/, /buyers/55-plus-communities/ and the four guides, /buyers/relocating/ and the from-<state> pages, /buyers/relocating/moving-checklist/, /buyers/undisclosed-flooding/. Hub up: /buyers/.

## Visuals (all built from data files)

| # | Visual | Data file | Notes |
|---|---|---|---|
| V1 | Key-facts row, 4 glass tiles | examples.json, zones-findings.json | Words with every icon |
| V2 | Decision table, 6 rows | facts rows | Cards on a phone |
| V3 | Bar chart: tax on one $400,000 house, three ways | examples.json | Label each bar with its dollar figure |
| V4 | Table: three 2026 income tax examples | examples.json | "Example" label on each |
| V5 | Bar chart: share of homes taxed as a full-time home, four communities and the county | communities.json | Finding 1 |
| V6 | Comparison table of the four 55+ communities (cards on a phone) | communities.json | Each card ends with its own offer |
| V7 | Bar chart: one-level houses for sale by town, under and over $400,000 | listings-counts.json | Re-pull on build day |
| V8 | Map: four communities and hospitals, drive minutes | drives.json, raw/geocodes.json | `tools/area-map.js`, one map only |
| V9 | Small chart: hot days and freezing nights, coast and Conway | raw/noaa-annual-*.csv | |

## Photos

Every photo must show the fact in the sentence beside it. None is needed for the answer; the charts and the map do the work. Today's free-licence candidates, all to be checked at full size by the builder before use:

| Candidate | Licence | Use only if |
|---|---|---|
| https://commons.wikimedia.org/wiki/File:Boardwalk_-_panoramio_(5).jpg (Thomson M, 2015) | CC BY 3.0 | Its location is confirmed (the file says only "Boardwalk", in the Murrells Inlet category). Viewed full size: a long wooden boardwalk over salt marsh, houses on the far bank. Not the restaurant MarshWalk. |
| https://commons.wikimedia.org/wiki/File:Houses_by_the_marsh_-_panoramio.jpg (Thomson M, 2015) | CC BY 3.0 | Not viewed yet; check before use |
| https://commons.wikimedia.org/wiki/File:Huntington_beach_state_park_salt_marsh.jpg | Public domain | Small (850 px); only beside a sentence about the state park |
| The four 55+ guides' own aerials and photos already on the site | already licensed | Reuse in the comparison cards, one per community, with their existing records |

Put any new file under `chapter3realty/images/2026-11-a/buyers-retirees/` with a record `tools/photos.js` accepts.

### Shot list for the photo partner (from public roads and sidewalks; no people as the subject, no signs or logos as the subject)

1. A one-level house with a two-car garage on a street in Myrtle Trace, Conway, from the road. Morning light.
2. The same kind of street in Seasons at Prince Creek West, near Murrells Inlet, from the road.
3. The Del Webb at Grande Dunes clubhouse building from a public road, the building as the subject, not the sign.
4. Grand Strand Medical Center, Myrtle Beach: the building only, from the street.
5. Conway Medical Center: the building only, from the street.
6. A beach access walkway in Myrtle Beach on a winter weekday, to show the quiet off season (row 47).
7. The Murrells Inlet MarshWalk boardwalk and docks at dinner time, wide, with no faces.
8. Market Common: the shops and the lake walk, from public sidewalks.

## Sibling and site notes

- Siblings that own facts used here: /buyers/property-taxes/ (tax mechanics, vehicle tax, 72-day rule), /buyers/coastal-insurance/ (insurance), the four 55+ guides (fees, homes, rules), /buyers/relocating/from-* (each state's taxes). This page gives the retiree's angle and links.
- The relocating pages and /buyers/property-taxes/ may print 2025 income tax rules; see PROPOSED.md.
- The homes feed for this page is ONE_LEVEL in `idx-lib/feeds.js`; no change needed.

## Wrong-shape checks for the reviewer

- Does the first sentence answer "is it a good place to retire" with conditions?
- Can a reader find the row that fits them in the decision table in under a minute?
- Does any section list factors without saying which way they point?
- Does any tax fact appear in more than one section? (It must not: the cost section owns property tax, section 3 owns income tax.)
