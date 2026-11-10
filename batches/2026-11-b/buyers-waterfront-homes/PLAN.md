# Plan: /buyers/waterfront-homes/ (batch 2026-11-b)

Researcher's plan, 2026-11-10. Ledger: `facts.md` (34 rows: 17 reused from verified ledgers, 17 new and PENDING a verifier). Must-answer list: `must-answer.md`. Data: `data/2026-11-b/buyers-waterfront-homes/` in the website working copy (README there). Spec to write: `specs/waterfront-homes.js` (none exists; the live page was hand-made). Batch 2026-11-a planned this page on 2026-11-04 (`batches/2026-11-a/buyers-waterfront-homes/PLAN.md`) and it was never built; that plan's dock, bridge and tide work is kept here. What is new: a price for every kind of water, a wow for every kind, homes strips by kind, and flood by kind.

## 1. The live page: what is worth keeping

Read 2026-11-10 (`chapter3realty/buyers/waterfront-homes/index.html`, 116 KB, no spec).

Keep:
- **The idea of the page**: "waterfront" here means several different purchases. The live five kinds (oceanfront, waterway, channel or creek, river, lake) become seven with prices: the ocean splits into houses and condos, and the salt marsh gets its own entry.
- **The boater's questions** (depth at low tide, the bridges, the ride to the inlet, the permit and its transfer, the bulkhead, the HOA's rules). They come back as what we check, each with its local answer (rows 12 to 22).
- **The page's feed** `DOCK` ("Homes with their own dock", `idx-lib/feeds.js` line 94) under the opening.
- **Its links**: /buyers/coastal-insurance/, /buyers/undisclosed-flooding/, /buyers/flood-insurance-after-the-election/, and the town pages. Add /buyers/no-hoa-homes/, /submarkets/conway/, /invest/condo-buildings/, /invest/condos/, /buyers/best-neighborhoods/.
- **The URL** and the search words in the title: "Waterfront Homes in Myrtle Beach".

Replace:
- The title's promise "The Dock Sets the Value" with no price behind it (triage). The deeds show the kind of water sets the price far more than the dock: an oceanfront house about $2.2 million against a lake house about $495,000 (rows 1, 7). The dock shows in asking price per square foot (row 12).
- "DHEC" (twice): SCDES since July 1, 2024 (row 13).
- "$15,000 and $45,000" for a dock and "often around four" months: no source (Not verified 1).
- "a few hundred dollars ... between one and three thousand dollars" for flood: FEMA's own costs (row 18) and the flood map by kind of water (row 16).
- "True oceanfront houses are scarce and cluster toward Cherry Grove ... and the Pawleys Island and Litchfield stretch": not verified. Replaced by the count (row 1: about 410 first-row houses in the county; listings by city, row 9).
- "Little River has the most marinas and the quickest big-water access": not counted. Replaced by rows 20 and 31.
- The full lead form above the answer and five identical "Set up a waterfront tour" buttons; the checkmark bullets; no question headings; no sources line; no photo.

## 2. The reader and the decision

A buyer who wants to live on the water at the Grand Strand: often a boater, often from out of state, sometimes a second-home buyer. They know none of the place names, bridges or inlets. **Their decision: which water to buy on, at what price, and whether the house will do what they want the water for: a sunrise, a boat that reaches the ocean, a dock to crab from, a quiet river, a calm lake.** What worries them: paying for water they cannot use, a dock they cannot build, flood insurance. What they ask next: can I add a dock, how far to the ocean, which bridges, is it worth it.

## 3. The answer in two sentences

A house on the beach itself resold for about $2.2 million at the middle in the past year, and a house on the Intracoastal Waterway for about $1.3 million. A house on a lake or pond went for about $495,000, and a condo in an oceanfront building for about $214,000, the lowest price on the water.

(Rows 1, 3, 7, 2. Each sentence 27 words. Lead with what it buys right after, in the hero sub-header: "From the sun coming up out of the ocean to a boat at your own dock, seven kinds of water, each with its own price.")

## 4. Search title and H1

- **Title** (59 characters, keeps the searched words, adds the page's fact): `Waterfront Homes in Myrtle Beach: Prices From Ocean to Lake`. Update `data/headlines.json` (the lead's file).
- **H1**: "Waterfront homes in Myrtle Beach: / from the ocean to the lake, what each one costs." Same promise as the title.
- **Description**: "What a house on the ocean, the waterway, the marsh, a creek, the river or a lake sold for, the dock and flood rules, and homes for sale on each."
- Keywords this page owns: waterfront homes Myrtle Beach, oceanfront homes (houses) Myrtle Beach, Intracoastal Waterway homes for sale Myrtle Beach, homes with boat dock, marsh front homes, Cherry Grove channel homes, Waccamaw River homes, lakefront homes Myrtle Beach, dock permit South Carolina. Not: oceanfront condos (condo pages), golf (golf page), second home, beach house (second-home page).

## 5. The shape

The reader's job is to **choose one** of several waters (CRAFT 3, a list of places: here, places are kinds of water). The approved shape: a short answer and one picture of the answer, a short selection guide by want, then one numbered entry per kind, each led by its wow, then the questions every kind shares (dock, flood, the boat route), a short FAQ, the end offer. Long is fine: a reader compares kinds on detail (CRAFT, "Rules are thoughts"). First kind starts within about one phone screen after the chart.

Top of the page on a phone: H1, byline (Devin Day, reviewed by Tim Nash), the two-sentence answer, a slim offer bar, then the price chart. No form above the answer. No map at the top.

## 6. Sections, in order (question headings people search)

0. **Short answer** (above), **slim offer bar**: "Tell us the boat and the budget. We send the homes on the water that fit." Button: "Send me waterfront homes that fit" (#lead-form).
   **Chart 1** (built from `chart-prices.json`): "What a house on each kind of water sold for". Horizontal bars, one per kind, the price on each bar and the count small; "a house on no water" as a gray reference bar. Title says one thing; the note under it: "Middle resale price, Horry County deeds, the past year." The site's edge puts the `DOCK` feed under the opening (no spec work).

1. **H2 "Which kind of waterfront home fits you?"** A plain list, one line per want, each jumping to its entry (no cards, no icons): the sun coming up out of the ocean (1, 2); a boat at your own dock that can reach the ocean (3); a dock to crab from, on the tide (4); a boat out the back on a canal (5); a quiet river and a wildlife refuge (6); water for less, mostly outside the flood zone (7).

2. **The seven entries.** Each entry: an H2 with its number, its searched words and its wow; the wow first; what a normal day there is like; the honest trade-off; one price sentence; one photo or aerial under its sentence; its homes strip; its offer. Facts said once, in the entry that owns them.
   1. **"1. Oceanfront houses: the sun comes up out of the ocean"**. Wow: from about Windy Hill south to Garden City the beach faces southeast, so the sun rises out of the ocean every morning of the year (row 23; one line on Cherry Grove's shore). Scarce: about 410 houses in the whole county sit in the first row; 20 resold in the past year (row 1). Trade-off: about 6 in 10 of their lots reach the VE wave zone (row 16), the costliest flood insurance (row 18). Price: resold for about $2.2 million at the middle; 28 for sale ask about $3.4 million (rows 1, 9). Story here or in section 6: `ny-client-boat` (row 32, told exactly). Offer: "Book a showing on the oceanfront".
   2. **"2. Oceanfront condos: the same sunrise from about $215,000"**. Wow: the same sunrise (row 23) from a balcony; the lowest price on the water: about 1,100 for sale in oceanfront buildings, middle ask about $215,000, about 2 in 3 under $300,000; about 720 face the ocean (row 10). Resold for about $214,000 countywide; inside Myrtle Beach about $148,000 (MB row 18's figure), in North Myrtle Beach about $505,000 (row 2). Trade-off: the HOA fee and the building (one sentence, link /invest/condo-buildings/ and /invest/condos/; no fee number here). Offer: "Get the oceanfront condos that face the ocean".
   3. **"3. Intracoastal Waterway homes: your boat at your own dock"**. Wow: the waterway is a protected channel behind the coast from Norfolk to Key West; from a dock here a boat can head north or south without going out on the ocean (row 24), and the ocean is a short run out Little River Inlet (row 20). Every fixed bridge is 65 feet (row 19). The tide moves only about 2 feet in the middle of the waterway (row 21). Good news on flood: on about 6 in 10 waterway house lots the middle of the lot is outside the high-risk zone (row 16). Price: about $1.3 million, about twice the houses nearby, in every stretch (rows 3, 33: about 985 houses touch it). Offer: "Book a showing on the waterway".
   4. **"4. Marsh front homes: crabs off your own dock"**. Wow: on salt water you need no license to crab with up to three drop nets, traps or hand lines (row 25), and the marsh floods and drains about 4 feet twice a day (row 21). Trade-off: at low tide a dock on a small creek can sit on mud, and the creek's width limits the dock's size (rows 14, 21). Price: in Garden City, about 260 houses on the salt marsh or a tidal creek; 13 sold for about $1.24 million, about twice the houses nearby (row 5); across the county line, Murrells Inlet's marsh houses about $930,000 over three years (row 6, its safe wording). Links: /submarkets/garden-city/, /submarkets/murrells-inlet/, /submarkets/pawleys-island/. Offer: "Have us check the depth at the dock at low tide".
   5. **"5. Cherry Grove channel homes: a boat out the back door"**. Wow: the dug channels lead to the city's boat ramp and out through Hog Inlet to the ocean (row 26); the tide moves about 4 1/2 feet (row 21). Trade-off: nearly every house is in the high-risk flood zone (NMB row 13 via row 16). Price: about $715,000, only a little more than Cherry Grove off the water (row 4). Link /submarkets/north-myrtle-beach/. Offer: "Get the Cherry Grove channel homes for sale".
   6. **"6. Waccamaw River homes: blackwater, cypress and a wildlife refuge"**. Wow: the refuge's tidal freshwater swamps, cypress, a blackwater paddle, swallow-tailed kites and 200 other birds (row 27); the tide still moves about a foot at Conway (row 28). Trade-off: nearly every river lot reaches the high-risk zone (row 16). Price: about $537,000, against about $330,000 nearby (row 3). Link /submarkets/conway/. Offer: "Get the homes on the Waccamaw River".
   7. **"7. Lakefront homes: water for less, mostly out of the flood zone"**. Wow (money and calm): every waterfront house for sale under $300,000 is on a lake or pond (row 11); about 9 in 10 lake houses that sold sit outside the high-risk zone (row 17), where a FEMA policy runs about $550 a year for a house you live in (row 18). Price: about $495,000 resold, about $415,000 for houses nearby on no water (row 7); 429 for sale at about $450,000 (row 11). Plantation Lakes: 9 on the lake for sale, about $780,000 to $1.3 million (row 29), link /buyers/best-neighborhoods/ for its lake. The state's coastal dock permit does not cover a lake; we check the HOA's rules (row 13 wording). Offer: "Get the lakefront homes under $500,000".
   Offer box after entry 4 (mid-roll): "Not sure which water fits your boat? Tell us its height and draft. We name the water and the bridges that work." Button "Have us match the water to your boat".

3. **H2 "Does a dock add value to a waterfront home?"** Houses with a dock ask about $388 a square foot against $310 without, on tidal water and rivers; only 52 of 506 waterfront houses list one (row 12). A dock is a state permit, not a feature of the lot: the 75-foot rule, size by creek width (a five-row table), the fee, the clocks, repairs, storms and transfer (rows 13 to 15). Offer: "Have us check the dock's permit before you offer".

4. **H2 "Do you need flood insurance on a waterfront home?"** One plain table, "How much of each water sits in the high-risk flood zone" (rows 16, 17; built from `chart-flood.json`): oceanfront houses (nearly all lots reach it; about 6 in 10 reach the wave zone); Cherry Grove channels (nearly all); Waccamaw River (nearly all lots reach it); Intracoastal Waterway (about 3 in 10 lots wholly outside); lake or pond (about 9 in 10 sold houses outside). Then FEMA's costs by zone and the lender rule (row 18). Links: /buyers/coastal-insurance/, /buyers/undisclosed-flooding/. Offer: "Have us price the flood policy on one house".

5. **H2 "Can you get from your dock to the ocean by boat?"** The map (one, short and wide: the waterway, the two inlets, the crossings by kind; built from `from-2026-11-a/map-water.geojson`). The bridge ladder from `bridges.json` (a plain vertical list: mile, name, 65 feet or the swing span's closed height); the Little River rush-hour rule; the rock ledges (rows 19 to 22). Chart 2, `chart-tides.json` grouped to four bars: "How far the water drops at a dock": ocean side about 4 to 5 feet, waterway about 2, river at Conway about 1. Slips as the other way (row 31, link /submarkets/little-river/). Offer: "Ask us which bridges stand between a house and the inlet".

6. **H2 "Oceanfront or ocean view: what does waterfront mean in a listing?"** Short. A listing that names a water is often near it, not on it: of 117 houses whose listing names the waterway, 22 are marked waterfront (row 34). We check the lot line and the deed. The story (`ny-client-boat`) fits here if not used in entry 1.

7. **FAQ** (open text, each one sentence of answer first, each says something its section does not repeat word for word): Does the sun rise over the ocean in Myrtle Beach? What is the cheapest waterfront? Are there waterfront homes with no HOA? (86, row 30, link /buyers/no-hoa-homes/) Can I build a dock on my lot? Can I keep a boat without a dock? How much more does a waterfront home cost?

8. **End band**: "Tell us the water you want. We line up the homes and check the dock, the depth and the flood zone before you tour." Button: "Set up a waterfront tour" (#lead-form).

9. **Sources line**: Horry County deeds and GIS, USGS NHD, FEMA (OpenFEMA, county flood layer), NOAA (Coast Pilot 4, CO-OPS tides, solar equations), SCDES, SC Code 48-39 and R.30-12, 33 CFR 117, SC DNR, US Fish and Wildlife Service, our listings feed (date read from listings-findings.json).

"On this page": yes, short labels (Prices, Which water, the seven kinds, Docks, Flood, By boat, FAQ).

## 7. Visuals (each readable at a glance, each from a data file)

| # | Visual | Data | One message |
|---|---|---|---|
| 1 | Horizontal bars, one per kind, gray reference bar | `chart-prices.json` | "The ocean costs the most, a lake the least" (plain title: "What a house on each kind of water sold for") |
| 2 | Four bars | `from-2026-11-a/chart-tides.json` (grouped) | "On the ocean side the water drops 4 feet or more at the dock" |
| 3 | A plain five-row table in words | `chart-flood.json` | "The waterway and the lakes are the waters most often outside the flood zone" |
| 4 | A vertical bridge list | `from-2026-11-a/bridges.json` | "Every fixed bridge is 65 feet" |
| 5 | One map, short and wide | `from-2026-11-a/map-water.geojson` | Where the waterway, the inlets and the bridges are |
| 6 | Dock size by creek width, five rows | row 14 | Wider creek, bigger dock |

The dock comparison stays a sentence (two numbers do not need a chart). No icons, no tiles, no cards in the first screens.

## 8. Homes strips (the page's strongest offer)

The site's edge already shows `DOCK` under the opening. Each entry gets a strip of its own homes. The place contract (`idx-places.json`, contract v1 §5) searches only by subdivision or by a point and miles; it cannot filter by a water key, and a near-point strip would mix water and dry homes, which would make a water title untrue. **For BUILD.md, for the lead** (this researcher edits no idx-lib, partials or idx-places.json):

| Entry | Proposed strip title (bold, true by its filter) | Search it needs | On 2026-11-10 |
|---|---|---|---|
| 1 Oceanfront houses | "Wake up on the beach: oceanfront houses for sale" | `type=house&waterfront=1&has=water_ocean` | 28 |
| 2 Oceanfront condos | "The ocean out your window: oceanfront condos" | `type=condo&has=oceanfront_unit` | 717 |
| 3 Waterway | "Your boat out back: homes on the Intracoastal Waterway" | `type=house&waterfront=1&has=water_icw` | 22 (9 with a dock) |
| 4 Marsh | "Crab off the dock: homes on the marsh and tidal creeks" only if every home has a dock (`has=private_dock` added); else "Homes on the salt marsh and tidal creeks" | `type=house&waterfront=1&has=water_marsh` or `water_creek` | 5 + 13 |
| 5 Cherry Grove channels | "A boat out the back door: Cherry Grove canal homes" | `type=house&has=water_canal&near=33.834,-78.628&miles=1.5` | 35 canal homes on the Strand |
| 6 Waccamaw River | "Homes on the Waccamaw River" | `type=house&waterfront=1&has=water_river` | 26 |
| 7 Lakes | "Lake living under $500,000" | `type=house&waterfront=1&has=water_lake&max=500000` | 262 of 429 ask under $500,000 (count at build) |

Options for the lead: (a) extend places to carry a `has` filter (a CRM contract change), or (b) carry these as feed strips (`cut(...)` with `has`, as feeds.js does), marked `withStrips`. Fallbacks if neither is ready: existing places `gc-on-the-marsh` (entry 4), `nmb-cherry-grove` (entry 5, mixed with beach homes: its title must then be the place name, not "canal homes"), `plantation-lakes` (entry 7, subdivision search). Each strip's fallback is the entry's offer pill. Titles must be checked against the filter on build day; a strip with under 3 homes shows nothing.
Also for the lead: a bolder title for the page feed `DOCK`, true by its filter: "Bring the boat: homes with their own dock".

## 9. Offers

All buttons link to `#lead-form` or /contact/; the site opens the short pop-up and sends the button's words. Two never share words.
- Slim bar (top): "Send me waterfront homes that fit".
- One per entry: "Book a showing on the oceanfront"; "Get the oceanfront condos that face the ocean"; "Book a showing on the waterway"; "Have us check the depth at the dock at low tide"; "Get the Cherry Grove channel homes for sale"; "Get the homes on the Waccamaw River"; "Get the lakefront homes under $500,000".
- Mid-roll after entry 4: "Have us match the water to your boat".
- After the dock section: "Have us check the dock's permit before you offer".
- After the flood section: "Have us price the flood policy on one house".
- After the boat section: "Ask us which bridges stand between a house and the inlet".
- End band: "Set up a waterfront tour".

## 10. Photos

No photo above the answer. One per entry, under its sentence. Already licensed (records in `from-2026-11-a/photos-2026-11-a.json` and the siblings' photos.json; look at each full size before use):
- Cherry Grove channels from above (NAIP 2023, public domain): entry 5.
- Murrells Inlet creek-front docks over the marsh (NAIP): entry 4.
- Socastee swing bridge and the high bridge (NAIP): section 5.
- Little River harbours (NAIP): the slips line.
- Garden City pier and oceanfront houses from above (NAIP, `images/2026-11-a/submarkets-garden-city/garden-city-pier-from-above-*`): entry 1 (caption names only what is in frame).
- "Oceanfront towers along the beach in Myrtle Beach" (Commons, DiscoA340, CC BY-SA 4.0, credit), as on /invest/condo-buildings/: entry 2.
- New NAIP crops (public domain, the siblings' method): a waterway stretch with private docks (entry 3), the Waccamaw at Conway with water in frame (entry 6), a lake neighborhood (entry 7).
- **Photo partner shot list** (email from the owner's Gmail, `templates/photo-request-email.md`; the lead sends it): sunrise over the ocean from a dune walkover between Windy Hill and Garden City; a boat tied at a private dock on the waterway; a marsh dock at high tide and the same dock at low tide; a Cherry Grove channel with boats; the Waccamaw's cypress from the water at Conway; a lake-lot dock with a kayak. Never a listing photo.

## 11. Notes for the writer and the verifier

- One value per fact: Cherry Grove channels from NMB rows 13 and 14; Myrtle Beach oceanfront condos from MB row 18 ($148,000); Garden City marsh from GC row 13 as corrected (`build_charts.py` carries it); flood costs from CM row 28; slips from LR as corrected; tide from WF row 17 wording.
- Siblings own: see the table in `must-answer.md`. This page never writes an oceanfront condo H2, a golf word, or Cherry Grove's history.
- Never a dollar value for a dock, a forecast, a rate or a payment, or a sentence on who lives on any water. Never "best", "safe", "nestled", "stunning". Sentences 28 words or fewer, none opening with "So", no "Here is", no em dashes.
- The verifier's first jobs: rows 1 (oceanfront rule on an aerial), 23 (sunrise re-run and one NOAA check), 16 (the flood rule), 7 (lake lots on an aerial), 2 (condo method), 12 and 34 (listing counts drift daily: re-count on build day if more than a week has passed).
