# Plan: /invest/str-tools/

Batch 2026-10-d, Lane U. Research stage, 2026-11-01. Inputs: `must-answer.md`, `facts.md` (rows all pending verification), `NEEDS.md`, `PROPOSED.md`, `OWNER-QUESTIONS.md`, the judge's entry in `audit/judged-2026-10-31.json`. The live page is hand-made (no spec, no entry in `data/headlines.json`). The writer builds `specs/str-tools.js` with mkpage; the donor chrome brings the new listing-search sentence (SWEEP, "For the other helpers"). Data and scripts: `web2/data/2026-10-d/invest-str-tools/` (`findings.json` from `compute.py`). Every chart value and worked-example number comes from `findings.json`, never typed.

## The reader and their job

An investor, often from out of state, with a listing open: most often a two-bedroom condo in an oceanfront building in Myrtle Beach or North Myrtle Beach, sometimes a beach house in Surfside, Garden City or Murrells Inlet. A vendor calculator gave a gross. He clicked "Short-term rental tools" in the site menu (142 pages carry that link). His job: **get his own number** for one rental: what it keeps before any loan, and how many nights it must book to pay its own bills. He worries the gross is the best case, that the condo fee eats it, and that January is empty. He will ask next: which town does better, can I even rent nightly there, what does a manager cost, who pays the lodging tax.

What he would pay an expert for: the costs nobody's calculator subtracts (the building's fee and South Carolina's 6 percent tax on a rental), set against what rentals here really book, town by town.

## The deciding fact

The condo fee decides the deal (rows 9 to 13). The middle two-bedroom condo for sale in an oceanfront building inside Myrtle Beach that is marked for nightly rentals lists at about $327,000 with an HOA fee of about $1,200 to $1,250 a month. Fee, tax at 6 percent (254.6 mills) and insurance come to about $20,100 a year. Each booked night of a Myrtle Beach two-bedroom keeps about $192 after Airbnb's fee and running costs (row 12), so it needs about 105 booked nights to pay those bills before any loan. The average two-bedroom books about 87 nights and keeps about $15,800 before the fee and the tax. So the average one falls about $4,300 short of the fee and tax alone (about $3,000 where the fee also pays the electric, as it does for 31 of the 48). North Myrtle Beach towers are the same: about 98 nights needed, about 72 booked. Where the fee is low, the same math works: a Surfside Beach two-bedroom condo (fee about $375 a month) needs about 40 nights and the average books about 80; Garden City (fee about $575) needs about 63 and the average books about 95 (row 6). The finding a reader cannot get elsewhere: on the Grand Strand the building's monthly fee, not the town's gross, decides whether a nightly rental pays its own bills.

That replaces the live page's unsourced "45 to 55 percent for the year" and makes the calculator the page's centre.

Two checks the verifier must make before the writer leans on it (rows 10, 12, 13): (1) whether AirROI's per-size revenue includes the guest's cleaning fee (if not, the Myrtle Beach shortfall shrinks to about $1,000, still short); (2) what the HOA fee covers: 31 of the 48 Myrtle Beach listings say electric, 44 internet, so the utilities line mostly comes back (row 13). Also from row 13: 40 of the 48 are in an on-site rental program, which takes its own share; the page links /invest/rental-program-vs-airbnb/.

## Unique findings (no other page has these)

1. **The building's fee against what the rental keeps** (rows 6, 9 to 13): the middle nightly-allowed two-bedroom oceanfront condo for sale in Myrtle Beach (fee about $1,225 a month: 105 nights needed, 87 booked) and North Myrtle Beach (about $1,075: 98 needed, 72 booked), against the middle one in Surfside Beach (about $375: 40 needed, 80 booked) and Garden City (about $575: 63 needed, 95 booked). Each with its own fee, its town's millage and its town's two-bedroom nightly rate. From our own listing count (CRM) and the county levy.
2. **Town by town, the two-bedroom and three-bedroom numbers** (rows 14, 15): eight towns side by side, one source, one period. The live site has the towns only as averages of all sizes (str-market.json, August).
3. **The season, two kinds of place, with the ocean's temperature** (rows 16 to 19): month by month for Myrtle Beach (81 percent condos) and Murrells Inlet (60 percent houses), against Springmaid Pier water temperature from NOAA. July earns about 5.1 times January in Myrtle Beach, 4.3 times in Murrells Inlet, 3.0 in Pawleys Island, 2.5 in Conway.
4. **More hosts every year** (row 20): active listings grew 24 to 69 percent in a year in seven of eight towns (Myrtle Beach 43 percent). More than half of Myrtle Beach listings were booked or blocked 90 days or fewer (row 20).
5. **How many homes for sale say nightly is allowed, by town** (row 21): Myrtle Beach city 541 of 641 condos and 18 of 201 houses; North Myrtle Beach 482 of 589 condos and 112 of 258 houses; Conway 34 of 675 houses. Counts only.

## Shape

A **calculator page** (CRAFT 3; `reports/Page shapes by kind of page.md`, "Get their own number"): lead with the tool, plus a worked example in text, then the town table that sets its defaults. Main relation: amount. The town table is a comparison inside the calculator page, not a second shape.

First screen on a phone: H1, byline, a three-sentence answer (the deciding fact in plain words), and a row of three key facts with words (`G.glassIcons`). Then a slim offer bar. The calculator starts within one phone screen of the answer. Nothing large above the answer.

Siblings (decided before writing, CRAFT 3 "Siblings share places, not facts"):
- /invest/str-vs-ltr/ (this batch) owns nightly against a yearly lease (82 nights to match a lease, kept by month against the lease). This page never compares with a lease; it compares with the home's own bills. Link it once in the calculator's notes: "Thinking of a yearly lease instead?"
- /invest/str-rules/ owns the rules and the lodging-tax table. This page gives one line per kind of place and links out. No 90-day rule section, no condotel section (the live page's two sections go).
- /invest/airbnb-income/ owns market-wide income by percentile. This page uses per-size figures and costs, and links there for the full report.
- /invest/accommodations-tax/ owns the tax. This page gives one dollar figure for a summer week and links out.

## Title, description, H1

- Title tag: `Myrtle Beach Airbnb Calculator: Costs, Nights to Break Even | Chapter3` (search words: Airbnb calculator, Myrtle Beach, break even; the menu's word "tools" is served by the H1 kicker). Writer checks the scorer's title length; fallback `Myrtle Beach Airbnb Calculator and Numbers by Town | Chapter3`.
- Meta description: "What a Grand Strand Airbnb keeps after the condo fee, the 6 percent property tax and Airbnb's cut, town by town, and how many nights it must book to pay its bills."
- H1, two lines in the site's shape: "What will a Myrtle Beach Airbnb keep?" / "Run it before you offer."
- Breadcrumb stays "Short-Term Rentals". Byline as the live page (Devin Day, Operations Officer); dates by `build.js dates` (lead).
- No headline in `data/headlines.json` for this URL, so nothing the owner liked is replaced.

## Sections in order, and what each proves

0. **Short answer** (proves: the deciding fact). Three sentences, from rows 5 and 9 to 12:
   - "A Myrtle Beach Airbnb keeps about 63 cents of each dollar guests pay, after Airbnb's fee, the cleaner and the running costs. On the most common one for sale, a two-bedroom condo in an oceanfront building in Myrtle Beach, the condo fee and property tax come to about $20,100 a year, so it must book about 105 nights just to pay them. The average Myrtle Beach two-bedroom books about 87."
   - Key facts row: "105 nights to pay the condo fee and tax" (12), "47% of the year's income in June to August" (17), "43% more Myrtle Beach Airbnbs than a year ago" (20).
   - Slim offer bar: "Send us a listing. We run its fee, its tax and its season before you offer."

1. **The calculator** (proves: the reader's own number). Heading as a question: "How much will this Airbnb keep?" One sentence above it says what it does. Inputs, each with a plain label:
   - Town (8 choices; sets the nightly rate, the nights booked, the cleaning share and the tax mills from `findings.json`; Pawleys Island has no Horry mills, so its tax field starts empty with a note, see NEEDS).
   - Bedrooms (2 or 3; sets the nightly rate and nights from the town's size row).
   - Price. HOA fee a month. Nightly rate. Nights booked a year.
   - Who runs it: you (0), a basic manager (about 15 percent), a full-service manager (about 40 to 60 percent; slider at 50) (row 23, owner-observed, said as "what owners here pay").
   - "The HOA fee pays the electric and internet" (a checkbox; drops the utilities line) (row 13).
   Outputs, as an itemized list with a total line: money from guests; Airbnb's fee; cleaning (paid by the guest's cleaning fee, shown as in and out); utilities, supplies and repairs; insurance and permit; manager; HOA fee; property tax at 6 percent; **kept before any loan**; **nights it must book to pay its bills**; kept as a percent of the price. No loan, no rate, no payment, no down payment.
   Under it, the worked example in text (rows 9 to 13), the defaults for Myrtle Beach two-bedroom: price $327,000, fee $1,225 a month, $252 a night, 87 nights. Four short sentences, no method words; the method goes in the sources line.
   Written in the spec as inline JS (the pattern in `specs/fix-and-flip.js` `c3Flip` and `specs/rental-returns.js` `c3Ret`); no shared file is edited. Formula in a spec comment, copied from `compute.py`.

2. **What the building's fee does to the numbers** (proves: the deciding fact, in four towns; rows 6, 9 to 13). Heading: "Why does the condo fee decide it?" An itemized table with a total row (cost breakdown shape), one column per town: Myrtle Beach, North Myrtle Beach, Surfside Beach, Garden City; rows: middle price, HOA fee a year, property tax, insurance and permit, bills a year, kept per booked night, nights to pay the bills, nights the average two-bedroom books. On a phone, four cards (`compareCards`). Lead sentence: "In the oceanfront towers the condo fee is the biggest bill, and it decides whether the rental pays." Under the table, two sentences: the towers' fee often pays the electric and internet (31 and 44 of the 48 in Myrtle Beach, row 13), and most of those condos are in the building's rental program (40 of 48), which takes its own share (link /invest/rental-program-vs-airbnb/); the lower-fee condos in Surfside Beach and Garden City pay their bills at about 40 and 63 nights. Then: we read the building's budget and what the fee covers before an offer. A photo beside it: oceanfront condo towers in Myrtle Beach (below).

3. **Town by town** (proves: which town, and why). Heading: "Which Grand Strand town does an Airbnb do best in?" A table of eight towns (cards on a phone): listings, average gross (all sizes), the two-bedroom's typical and average gross and nightly rate, the three-bedroom's average gross, share of the year in June to August, listings growth in a year. One sentence per town only where it carries a fact the table cannot (Murrells Inlet and Garden City are house markets with the strongest averages; Little River and Conway are inland with flatter seasons). Each town links to its submarket page. Plus the homes-for-sale count marked nightly per town (row 21), as one column or a line under the table. A map is optional: if the writer uses one, it is `tools/area-map.js` with the eight towns labeled, and it replaces nothing else (one map on the page).

4. **The season** (proves: why winter is the risk). Heading: "How empty is a Myrtle Beach Airbnb in winter?" Chart (visual 3): average income per listing by month, Myrtle Beach and Murrells Inlet, with the water temperature at Springmaid Pier as a row of small labels under the months. Lead sentence: "A Myrtle Beach Airbnb earns about five times as much in July as in January, when the ocean is about 50 degrees." Then: June to August bring in 47 percent of the year in Myrtle Beach and 43 percent in Murrells Inlet; inland and marsh-side towns are flatter (Pawleys Island 37, Conway 38) (rows 16, 17). July stays are booked about 58 days ahead in Myrtle Beach, so a July week is usually booked by mid-May (row 19). One line on winter stays of 90 days or more, with a link to /invest/mid-term-rentals/ (they are not taxed as lodging; they are not allowed in short-term buildings between Kings Highway and the ocean inside the city, rows 8 and 26). Table of values under the chart. A photo of the Garden City beach houses and marsh (below) beside the house-market sentence.

5. **What comes off each booking** (proves: the cost lines in dollars). Heading: "What does Airbnb take, and what else comes off?" A short list, each with its number: Airbnb's fee (15.5 percent for most hosts, about 14 percent on average here) (row 22); cleaning, paid by the guest's cleaning fee (a typical fee is about $151 in Myrtle Beach, $225 in Murrells Inlet) (row 24); utilities about 5 percent, supplies about 2, repairs about 3 (row 11); a manager about 15 percent basic or 40 to 60 percent full service (row 23); the lodging tax, which the guest pays on top: about $229 on a $1,764 July week in Myrtle Beach, collected by Airbnb (row 25), link /invest/accommodations-tax/. Then the owner's observation (row 28), told as what we see: the worst mistake we see is running it from another state with the cheapest cleaner; theft and damage followed. Then what the top rentals do: pick one kind of guest (golf, college, workers, people moving here) and stay filled. Use the story bank's words; do not add "families with young children" (the live page added that detail; the story says "family"; leave it out to stay clear of the fair-housing word list).

6. **More hosts every year** (proves: the crowding risk). Heading: "Is Myrtle Beach getting too many Airbnbs?" Two or three sentences and `G.bars` (visual 4): listings growth in a year by town, from row 20. Then the same row: more than half of Myrtle Beach listings were booked or blocked 90 days or fewer in the year, and about one in eight more than 180. What it means: a new listing competes on the calendar, so the nights in the calculator matter more than the nightly rate.

7. **Can you rent it nightly?** (proves: the rule, briefly). Heading: "Can you Airbnb a home in Myrtle Beach?" Three lines from rows 26 and 27, then the link to /invest/str-rules/ for city by city: inside Myrtle Beach, no zone beginning with R allows stays under 90 days except RMV, and fewer than 30 houses in residential zones are grandfathered; oceanfront short-term buildings between Kings Highway and the ocean cannot be leased for 90 days or more; North Myrtle Beach needs a business license, renewed every year, with no separate permit. Then: we check the zoning and the master deed on the address before an offer.

8. **The other short-term rental pages, by question** (proves: the "tools" the menu promises). `G.guideCards`: "How much do Airbnbs make here?" /invest/airbnb-income/; "Airbnb or a yearly lease?" /invest/str-vs-ltr/; "Where is it legal?" /invest/str-rules/; "What tax does the guest pay?" /invest/accommodations-tax/; "What do I set up after closing?" /invest/str-setup/; "Rental program or self-run?" /invest/rental-program-vs-airbnb/; "How many nights can I use it myself?" /invest/14-day-rule/; "How is the income taxed?" /invest/str-tax-treatment/; "Rent it for 90 days or more instead?" /invest/mid-term-rentals/; "Can I get a loan on a condotel?" /invest/condotel-financing/. Short labels; no new facts.

9. **What Chapter3 does** (proves: the offer). We run one address: the building's fee and what it covers, the tax at 6 percent, the rules for that zone and building, the town's season, before you offer. We do not manage rentals. Offer box, same component as the top bar: "Send us a listing. We run the numbers before you offer." Phone 854.333.2135 and "We answer evenings" (kept).

10. **FAQ** (open text; each answer names the subject first): Can you Airbnb in Myrtle Beach? How much does an Airbnb make in Myrtle Beach? What occupancy rate does a Myrtle Beach Airbnb need? What is the slow season in Myrtle Beach? What percentage does Airbnb take? How much is a cleaning fee in Myrtle Beach? Who pays the lodging tax? Is Myrtle Beach a good place to buy an Airbnb? (Answer from the deciding fact, without a verdict on the market: it pays when the fee and price leave room for the nights the town books; we run the address.) Can I finance an Airbnb condo? (One line: lenders count about 75 percent of a short-term estimate, according to a loan officer at our preferred lender, row 29; condotels link /invest/condotel-financing/; no rate, no down payment.)

11. **Sources line**: AirROI market pages for eight towns (12 months to September 2026, read 2026-11-01); our count of active listings from the MLS feed by what the listing agent marked; Horry County Auditor, certified 2026 levy; S.C. Code 12-43-220; NOAA CO-OPS station 8661070, Springmaid Pier, 2022 to 2025; SCDOR ST-575; Airbnb Help Center 1857 and 2328; City of Myrtle Beach zoning notice; City of North Myrtle Beach short-term rentals page; our arithmetic (`compute.py`). "On this page" list (8 sections).

## What the judge asked for, and where it is solved

| Judge's problem | Solved in |
|---|---|
| Called "tools" with no tool, chart or table | Section 1 calculator; section 2 table; section 3 town table; section 4 chart; section 8 index |
| Unsourced occupancy ranges, no month figure, no area split | Rows 14 to 17: per-town, per-size, per-month figures with a sources line; the old ranges are cut |
| No short answer; statement headings | Section 0; every heading a question people search |
| Repeats str-rules and str-vs-ltr | Rules cut to three lines and a link; 90-day and condotel sections cut; no lease comparison |
| Hedges and to-do lines ("treat with suspicion", "always confirm", "check references") | Cut; replaced by what we check (sections 2, 7, 9) and the cleaner observation told as what we see |
| Long paragraphs, small text, no picture of a named place | Short sections, tables and cards; photos of Myrtle Beach towers and Garden City houses |

Ideas taken: month-by-month chart for two kinds of place (section 4, Murrells Inlet for the house market); break-even calculator with a worked example from the CRM at 6 percent and the 2026 levy, no loan (sections 1, 2); the tax in dollars on a summer week (section 5); NOAA water temperature beside the curve (section 4); link out for the rules (section 7). Not taken: the zoning map. The City of Myrtle Beach publishes its zones only as a PDF map (`ZoningandCityLimitsMap.pdf`), with no public GIS layer found, and Horry County's zoning layer covers the unincorporated county only. A map belongs on /invest/str-rules/ (NEEDS.md).

## Kept from the live page

- The menu's promise: the page becomes the tools page.
- Links: /invest/airbnb-income/, /invest/str-rules/, /invest/mid-term-rentals/, /invest/condotel-financing/, /invest/long-term-rental/ (in the calculator note), /submarkets/ (town links), /why-chapter-3/, /contact/, the phone line and "We answer evenings".
- The offer: "Send us an address ... We will run the rent, the expenses and the association documents before you write an offer, at no cost" (kept in substance).
- The cleaner observation and the one-kind-of-guest point (story bank `str-cheapest-cleaner`), rewritten as what we see, without the added detail.
- North Myrtle Beach's license line (registry `nmb-str-permit`) and the Myrtle Beach overlay line, cut to one sentence each.

## Removed

The unsourced occupancy ranges ("teens to low 30s", "80s or low 90s", "45 to 55 percent"); "Treat any blended annual figure with suspicion"; "Always confirm the zoning and HOA rules"; "check references and pay for reliability"; "A beautiful house in the wrong zone is not an Airbnb"; the 90-day mid-term section (one line and a link remain); the financing section and the BrickWood naming in body copy (the affiliated-business disclosure is then not needed in the body; the FAQ line uses "our preferred lender"); "Talk to a Grand Strand STR specialist" (vague second offer label); "families with young children" and "house hunters visiting before a move" (added details); "We publish a month-by-month occupancy estimate on every one of our neighborhood pages" (not checked; cut unless the writer confirms it on the submarket pages); the old listing-search sentence about off-market homes (SWEEP).

## Visuals

1. **The calculator** (section 1). Our own, inline in the spec.
2. **The fee table** (section 2). `compareCards` from `specs/_kit.js`, four towns, eight rows, from `findings.json` `examples`. Our own.
3. **The season chart** (section 4). Two lines (or paired bars) by month from `findings.json` `months.myrtle-beach` and `months.murrells-inlet`, the water temperature from `months.water_f` as labels under the months. If `G.bars` cannot draw two series, the writer draws a small inline SVG in the spec (NEEDS.md). Title: "What an average Airbnb earns each month: Myrtle Beach and Murrells Inlet". Table of values under it (12 rows).
4. **Listings growth** (section 6). `G.bars` from `findings.json`: one bar per town, growth in percent, from row 20. Garden City has no growth figure on its page; leave it out of the chart and say so in the note.
5. **Photos.** One at a time, each under the sentence it proves:
   - Section 2, beside the Myrtle Beach condo example: oceanfront condo towers in Myrtle Beach. Candidates: (a) public domain, U.S. Geological Survey 2011 oblique aerials of the South Carolina coast (https://doi.org/10.5066/F7N877XX), the same set the site already uses for Garden City, Crescent Beach and Cherry Grove; pick a frame of the Myrtle Beach oceanfront towers; (b) `File:Hotels_along_the_Grand_Strand_Beachfront.jpg` (https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg, CC BY-SA 4.0, DiscoA340, licence as recorded by the str-vs-ltr researcher; picture not yet seen, Commons returned 429 today). Caption says only what it shows: "Condo towers along the beach in Myrtle Beach." No building name; crop out any brand sign.
   - Section 4, beside the house-market sentence: `images/buyers/no-hoa/garden-city-beach-and-marsh-from-the-ocean-2011-1200w.webp` (USGS, public domain, record in `data/2026-10-b/photos.json`). Seen today at full size: rows of beach houses between the ocean beach and a wide marsh with docks. Caption: "Beach houses between the ocean and the marsh at Garden City Beach." Copy into `images/2026-10-d/invest-str-tools/` with its licence record, or reference the existing file.
   - Optional, section 3 beside the Surfside line: `images/buyers/no-hoa/surfside-beach-houses-from-the-sand-1200w.webp` (CC BY-SA 4.0, BullDawg2021, record in `data/2026-10-b/photos.json`). Use only if the section has no other picture; one picture at a time.
   - New files go only under `chapter3realty/images/2026-10-d/invest-str-tools/`, each with a licence record `tools/photos.js` accepts. The writer looks at each full size and at 375 px before use.
   - Share image: an OG card from `tools/ogcard.js`.

## Photo partner shot list (send from the owner's Gmail with `templates/photo-request-email.md`)

For the page that shows what a Grand Strand Airbnb keeps, town by town. Most wanted first. Public roads, sidewalks, piers and beach accesses only; no faces, plates, house numbers, or signs and logos as the subject.

1. A row of oceanfront condo towers on the beach in Myrtle Beach, from the sand at a public access, wide, morning light. (Section 2.)
2. The same beach access in Myrtle Beach in winter, nearly empty, and again in July, from the same spot and angle. (Section 4, the season in one look.)
3. Springmaid Pier from the beach, any month. (Section 4: the water temperature comes from the gauge on this pier.)
4. A street of two-story beach houses in Surfside Beach or Garden City Beach, from the street. (Section 3.)
5. A marsh-side street of houses in Murrells Inlet, with the marsh in view, from the road. (Section 4, the house market.)
6. A beach-house street in Cherry Grove or Crescent Beach, North Myrtle Beach, from the street. (Section 3.)
7. An oceanfront condo building's beach side in North Myrtle Beach, from the sand, no signs. (Section 2.)

## Open items for the lead

- `data/str-market.json` (AirROI, read 2026-08-15) is stale by 2026-11-13 and AirROI's numbers have moved a lot since (Myrtle Beach average $20,946 then, $25,807 now; Murrells Inlet $38,356 then, $47,603 now; revenue change from minus 10.7 to plus 7.8 percent). This page and /invest/str-vs-ltr/ use today's pages; /invest/airbnb-income/ still prints the August figures. One fact, one value: see NEEDS.md.
