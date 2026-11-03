# Plan: /buyers/relocating/why-myrtle-beach/

Researcher, 2026-11-03. Ledger: `facts.md` (44 rows). Must-answers: `must-answer.md`. Data: `<web2>/data/2026-11-a/buyers-relocating-why-myrtle-beach/` (DATA). The page is built from `data/relocating/pages/why-myrtle-beach.js` with `data/relocating/assemble-page.js`, or moved to `specs/relocating-why-myrtle-beach.js`. Never hand-edit the built page.

## 1. The reader and their job

Someone in New York, New Jersey, Pennsylvania, North Carolina, Ohio or Maryland who keeps hearing that "everyone" is moving to Myrtle Beach. Many have vacationed here. They are deciding whether to start looking for real. Their job, in one verb: **decide** whether the move is worth a serious look, by learning why others came, whether it is still happening, and whether it works for them.

They worry that the hype is a sales pitch, that it is overcrowded now, that people regret it and leave, that pay is low, and that they are too late. They ask next: what their house buys here, what it costs to live, which town.

## 2. The deciding fact (checked first)

The page can be written as planned only if the counts show that people really are arriving, more than leave, and that the growth comes from movers. They do:
- IRS: about 15,000 households in, about 9,100 out, in the latest year; more in than out in all five years (rows 2, 3).
- Census: more deaths than births every year since 2020; all growth is people moving in (row 14).
- Census: the fastest percent growth of any US metro since 2020 on the Census file (row 13), second in the last year in the Census Bureau's own table (row 12).

## 3. What to keep from the live page

| Keep | Why | Change |
|---|---|---|
| Title tag "Why Is Everyone Moving to Myrtle Beach? 4 Reasons, in Numbers" (`data/headlines.json`, owner liked) | The searched phrase, exactly | Keep. It is under 65 characters. |
| H1 "Why everyone is moving to Myrtle Beach: four reasons, told with numbers." (headlines.json) | Owner liked it | The judge says "everyone" overstates. Proposed H1: "Why are so many people moving to Myrtle Beach? Four reasons, in numbers." It keeps the owner's shape and promise and matches the suggestion "why are so many people moving to myrtle beach". The lead decides; if the owner's H1 stays, the first sentence must give the real count. |
| The four-reasons frame (price, taxes, the coast all year, growth) | It is the promise | Each reason gets one number of our own, not "see the X page". |
| IRS migration and the income comparison | The judge's strongest data | Becomes a chart and a table. Fix the "2.5 times" claim: that is total income; per household it is 1.5 times (row 6). |
| Census metro rank | True and searched | Keep, with the 2020-2025 ranking added (row 13). |
| Boston hotel manager, Ohio move, Virginia "Miami" line, Maryland transplant | Real stories | Told whole, from rows 39 to 44, not as fragments. |
| Links to the ten state pages, weather, pros and cons, cost of living, hub | The site's relocating cluster | Kept as one line each inside the origin section, plus jobs, retirees, which-town, getting-around, hurricanes, property taxes. |
| Lead form `relocating-why-myrtle-beach` | Live form id | Keep the id; new labels per the audit rules. |

Remove: every "Devin" in the copy (BIZ-6; the author note may name him); "parking spaces back home" (metaphor, no number); "property tax near 0.38 percent" (no base; row 27 replaces it); the fragment quotes; the "From the Northeast / Midwest / Southerner" label headings; "Every figure ... is sourced on the page it links to".

## 4. Every judge's problem, solved

| Judge's problem | Solved by |
|---|---|
| A summary of other pages, 850 words of real information | Sections 2 to 6 carry our own counts: IRS in and out by region and county, births vs deaths, city vs county growth, born-elsewhere share, what a house buys with live counts. Links become one line each. |
| Devin named four times | "One of our team" (row 40); Devin only in byline and author note. |
| Parking-spaces line | Cut. Row 23 gives the real price gap. |
| Fragment quotes | Section 7: two to four whole stories, each a different shape. |
| No table, chart, map or photo; H1 overstates | Four charts and tables, a tool, a decision table, three photos. H1 per section 3. |
| States averaged $418,000 to $669,000 with no list; tax 0.38 percent with no base | County-by-county table with names (row 23); tax as dollars on a stated house (row 27) and owners' median bills by county (row 26). |
| Topic-early, short answer, question H2s, section leads, table | Every H2 is a searched question; each section's first sentence answers it with the subject named; the short answer is the first two sentences. |

## 5. Page shape

The relation in the content is **trend plus origin**: people arriving over time, from places. The dominant shape is **market data on people** (CRAFT 3, "See the direction"; Page shapes 6): the headline number with its period, a line chart, the table behind it, the breakdown by place, then what it means for the reader. Two secondary shapes ride on it: a **tool** for "what does my house buy here" (shape 8) and a **decision table** to close (shape 9). It is not a list of places: town choice belongs to /buyers/relocating/which-town/.

First screen on a phone: H1, byline, the two-sentence answer, and a row of four key facts. No photo above the answer.

## 6. Sections in order, and what each proves

Write so `node build.js audit` passes the first time: no sentence over 28 words; none opening with "So"; no "Here is", "Here's what" or pseudo-clefts; the hero sub-header never says we, our or us; buttons to /contact/ are requests ("Ask us ...", "Send ..."); never "the best", "top-rated", "family-friendly", "safe".

0. **Hero.** H1 (section 3). Sub-header, no we/our/us, for example: "Horry County grew faster than any US metro since 2020, and all of the growth came from people moving in." (rows 13, 14). Key-facts row, four glass chips with words: "427,551 people, up 22% since 2020" (11); "About 15,000 households in a year, 9,100 out" (2); "6 in 10 residents born in another state" (19); "Typical home: about $320,000 here, $730,000 on Long Island" (23).

1. **"Why are so many people moving to Myrtle Beach?"** The answer in two sentences: four reasons, one number each. (a) A house here costs a fraction of one where movers come from (row 23). (b) Owners who live in their homes pay about $944 a year in property tax, against thousands up north (26). (c) The winter is short: the ocean is still in the low 70s in October, and the nearest long-term station counts about 111 clear days a year against 66 in Cleveland (36, 37). (d) The work followed: jobs up about 9 percent since 2019 against about 5 nationally (29). Then a slim offer bar: "Ask us what your house buys here."
   Proves: the reasons are real and measurable.

2. **"Is Myrtle Beach still growing?"** Yes. Line chart of Horry County's population 2020 to 2025 (row 11), with the state's projection to 2030 and 2035 as a dashed line, labelled "projected" (18). The Census rank in one sentence (12, 13). Then the surprise: more people die here than are born, so every new resident is a mover; about 39 more people a day in the last year (14, 15). Then where they went: the City of Myrtle Beach has about 41,000 people; four of five new residents since 2020 settled outside any city limits (16, 17). Answers "is it overcrowded" with where the growth is, not a verdict. Link getting-around.
   Proves: the growth is real, recent, and almost all from movers; it is in the inland county, not the beach towns.
   Visual: V1 line chart; one small paired bar "births 16,400 / deaths 25,800" (row 14) beside it.

3. **"Where are people moving to Myrtle Beach from?"** Answer: from everywhere on the East Coast, most of all the New York suburbs and North Carolina; six in ten residents were born in another state, and almost as many in the Northeast as in South Carolina (19, 20). V2 paired bars: households arriving and leaving by region (row 4): the Northeast sends about three for every one that goes back. V3 table: the top origin counties outside South Carolina (row 7), with households arriving, households going back, and "for every one who left" (row 8), and the typical home value there (row 23). Under the table, one line per origin state to its state page (New York, New Jersey, Pennsylvania, Connecticut, Massachusetts, Maryland, Virginia, North Carolina, Ohio, Florida). No per-region paragraphs.
   Proves: who is coming, from where, and that few go back to the Northeast. A finding no other site has.

4. **"What would my house buy in Myrtle Beach?"** Answer first with the worked example: a typical Suffolk County home sells for about $410,000 more than a typical home here, before costs (24). V4 tool: pick your county (the 16 in zhvi-origins.json, plus "Horry County" as a check): it shows the typical value there and here, the difference before costs, and how many houses for sale on the Grand Strand now are priced at or under your home's value (live from `/homes/api/map?type=house&max=<value>`, with the MLS line and refresh time; fall back to listings-counts.json). Under it, a static table for engines and no-script readers (rows 23, 25). Then property tax: V5 small table of owners' median yearly bill by county (row 26), and the one New York household's story (28). A "See houses under $X" link to the home search, and the offer: "Send us your budget and we will send you the houses it buys here." (No automated value for any address, here or up north.)
   Proves: the money side, in the reader's own county, with live inventory. A comparison nobody has published at county level with live counts.

5. **"What do retirees pay in South Carolina taxes?"** Answer: no tax on Social Security; the rest in five short lines (rows 32 to 35) and one property tax line on a $400,000 house lived in, about $1,470 a year (27). Link /buyers/retirees/ for the worked returns. Never "perfect for retirees".
   Proves: the tax reason with statute-backed numbers, without copying the retirees page.

6. **"Are there jobs in Myrtle Beach, and what does work pay?"** Answer: jobs grew about 9 percent since 2019; average pay is about $50,000, about 64 cents on the national dollar (29, 30). Half our northern buyers arrive with a remote job (31). Business owners report they cannot charge northern prices (43). Link /buyers/relocating/jobs/.
   Proves: the work reason honestly, with its catch.

7. **"Why do people leave Myrtle Beach?"** Answer: about 9,100 households a year leave, most for nearby counties: Georgetown, Brunswick, Charleston (9). More leave Horry for other South Carolina counties than arrive from them (5). Households leaving report about $55,000 of income against about $83,000 for those arriving (6). The plain reasons we can show, each with what to do: pay (30); a seasonal population near the city core makes friends slower (42); summer heat and storm season (link weather, hurricanes, pros-and-cons). No verdict on any place.
   Proves: the page is honest; answers "are people leaving" with numbers.

8. **"What do people say after they move here?"** Two to four whole stories, different shapes (CRAFT 6): the Boston hotel manager's numbers, labelled "his real numbers, from a real story, not a promise" (39); one of our team from a village of 400 in Ohio and the vehicle tax that surprised him (40); a Virginia client's Miami line (41); a Maryland colleague's three observations (44). No quotation marks on any of them (not direct quotes). Simple story test applies.
   Proves: first-hand evidence no other site has.

9. **"Should you move to Myrtle Beach?"** V6 decision table, "If this is you / The move usually ...": selling a home worth more than about $320,000 (works: row 23); living on retirement, a pension or a remote job (works: 31, 32 to 34); needing a local salary near northern pay (hard: 30); wanting to be outdoors in winter (works: 36, 37); wanting a big-city night life (one Virginia client's line, 41); running a business that bills by the hour (hard: 43). Then the main offer box.

10. **Offer box** (same component as the top bar): "Ask us what your move looks like." One sentence on what the reader gets (a call with an agent who knows the area). Keep the lead form id.

11. **FAQ** (open text, schema from the same array): Is Myrtle Beach the fastest growing city in America? (the city vs the metro: rows 12, 13, 16); Is Myrtle Beach overcrowded? (17, 18); Are people leaving Myrtle Beach? (2, 9); Where do people moving to Myrtle Beach come from? (7, 19); Is it cheaper to live in Myrtle Beach? (23, 26, 30; link cost of living); Is Myrtle Beach a good place to retire? (32 to 35, retirees link); Is Myrtle Beach a good place for families? (fair-housing line: we describe homes, prices, taxes and services, never who a place suits; link schools and which-town); Is Myrtle Beach safe? (we do not rate any place as safe or unsafe; city police inside a city, Horry County Police outside, publish their own reports; no numbers). Each answer's first sentence names Myrtle Beach and answers.

12. **Sources line and author note.** Sources: IRS SOI migration data; Census Bureau population estimates (Vintage 2025) and ACS 2024; SC Revenue and Fiscal Affairs Office projections; BLS QCEW; Zillow Research ZHVI; Coastal Carolinas MLS listings via our site (with the MLS disclaimer); S.C. Code Title 12; NOAA. Method notes go here, not in the copy ("our ranking of the Census file", "region totals add the IRS 'other flows' lines"). Author note may name Devin Day (byline rule).

## 7. Visuals

| # | Visual | Data file | Notes |
|---|---|---|---|
| V0 | Key-facts row, four glass chips with words | rows 2, 11, 19, 23 | Same values as the text, rounded the same way. |
| V1 | Line chart: Horry County population 2020 to 2025, solid; RFA projection 2026 to 2035, dashed, labelled "projected" | census-pep.json `pop`; rfa-projection.json | Table of values under it. Points marked. 11 px text minimum at 375 px. |
| V1b | Two bars: births vs deaths, July 2020 to July 2025 | census-pep.json `components` | One chart, one point: deaths outnumber births. |
| V2 | Paired horizontal bars by region: households arriving and leaving, latest IRS year | irs-migration.json `regions["2022-2023"]` | Two colors, legend in words; "for every one who left" as a label at the bar end (3.2, 1.5, 1.6, 1.8). |
| V3 | Table: top 10 origin counties outside SC: county (and the city a reader knows: Long Island, Charlotte, Raleigh, Jersey Shore), arrived, left, ratio, typical home value | irs-migration.json `top_origins_2223`; zhvi-origins.json | Cards on a phone. Never a state ranking (row 7 limit). |
| V4 | Tool: "What your house buys here" | zhvi-origins.json; listings API, fallback listings-counts.json | No payment, no rate, no AVM for an address. Shows the MLS source line and refresh time with the live count. |
| V5 | Table: owners' median yearly property tax, Horry vs origin counties | acs.json; sibling acs-origin-counties.json | "$10,000 or more" for top-coded cells. |
| V6 | Decision table | rows as listed in section 9 | Open, all rows visible; cards on a phone. |
| V7 (optional, if time) | Our own map: eastern US with a dot at each top origin county sized by households arriving | irs-migration.json; Census Gazetteer county centroids (public domain) | A map we drew. Skip if it would be the only map of shapes a reader cannot read in a second (CRAFT 4). V2 and V3 already carry the facts. |

Use `tools/glass.js` for chips and cards and the batch's chart style; build every chart from the JSON, never typed.

## 8. Photos

One photo per section where it carries the sentence beside it; none above the answer. Every file gets a licence record that `tools/photos.js` accepts and goes under `chapter3realty/images/2026-11-a/buyers-relocating-why-myrtle-beach/`. Look at each at full size before captioning (Commons rate-limited the researcher on 2026-11-03; none of the Commons candidates have been viewed yet).

| Section | Shows (caption fact) | Candidate | Licence |
|---|---|---|---|
| 1 (the coast reason) | The beach and the SkyWheel on the oceanfront boardwalk | https://commons.wikimedia.org/wiki/File:SkyWheel_Myrtle_Beach_in_August_2022.jpg (DiscoA340, 2022) | CC BY-SA 4.0, credit |
| 1 (alternative) | Oceanfront resorts along the beach | https://commons.wikimedia.org/wiki/File:Beach_Resorts_at_Myrtle_Beach,_SC.jpg (DiscoA340, 2022, a wide panorama; crop) | CC BY-SA 4.0, credit |
| 1 (alternative) | The beach and boardwalk area | https://commons.wikimedia.org/wiki/File:Myrtle_Beach_(24050832475).jpg (Tom Long, 2015) | CC BY-SA 2.0, credit |
| 2 (where the growth went) | New streets of houses cut from woods in Carolina Forest, outside city limits | Reuse `images/2026-11-a/invest-where-to-buy/carolina-forest-houses-and-woods-from-above.webp` (USDA NAIP) or `invest-run-the-numbers/carolina-forest-houses-from-above.webp` (NOAA NGS); licence records in those folders' photos.json | Public domain |
| 2 (optional, stronger) | The same square mile of Carolina Forest in an older NAIP year and the latest, side by side | USDA NAIP via https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer (older years from USGS EarthExplorer NAIP) | Public domain. Label streets from real coordinates. |
| 6 or 7 (inland and older towns) | The Waccamaw River and old warehouses in Conway | Reuse `images/2026-11-a/invest-where-to-buy/conway-riverwalk-and-warehouses.webp` (Pubdog, Commons) | Public domain |

## 9. Photo partner's shot list (also in shot-list.md)

1. The Grand Strand beach on a weekday in October or November: a wide shot with few people, to show the off season (section 1).
2. The oceanfront boardwalk and the SkyWheel from the beach side, daytime (section 1).
3. A new-construction street in Carolina Forest with houses going up and finished houses beside them (section 2).
4. Downtown Conway's Riverwalk on the Waccamaw River (section 7 or the FAQ).
5. Ocean Drive in North Myrtle Beach, street level, off season (section 3).
6. SC 31 (Carolina Bays Parkway) at an interchange, from a public overpass or roadside, to show the roads built for the growth (section 2).

Not wanted: people as the subject, moving trucks with company names, or signs with a brokerage's logo.

## 10. Siblings and ownership

- /buyers/relocating/which-town/ (same group) owns town-by-town facts. This page names towns only for where the growth went (rows 16, 17).
- /buyers/retirees/ owns the tax worked examples; this page carries rows 32 to 35 and links.
- /sell/out-of-state-buyers/ owns the deed count of buyers by tax-bill state (row 38). This page uses row 38 at most once, as context, and never calls those buyers movers.
- /buyers/relocating/jobs/ owns jobs and wages; this page carries rows 29 and 30 in rounded form.
- /buyers/relocating/weather/ and /pros-and-cons/ own weather and the full cons list.
- /buyers/relocating/cost-of-living/ owns the cost calculator. The tool here compares home values by origin county and counts listings; it does not compute a cost of living.

## 11. Open items for the lead

- One value for "the typical home here": this page uses the Horry County figure (about $320,000, Sept 2026) because it compares counties; other relocating pages print the Zillow metro figure (about $342,000, July 2026). See PROPOSED.md.
- The jobs page's 146,055 and 9.1 percent are from the preliminary file; the final file reads 146,160 and 9.2. This page says "about 146,000" and "about 9 percent".
- H1 choice (section 3).
