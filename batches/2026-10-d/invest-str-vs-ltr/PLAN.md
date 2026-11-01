# Plan: /invest/str-vs-ltr/

Batch 2026-10-d, Lane U. Research stage, 2026-11-01. Inputs: `must-answer.md`, `facts.md` (31 rows, all pending verification), `OWNER-QUESTIONS.md`, `NEEDS.md`, `PROPOSED.md`, the judge's entry in `audit/judged-2026-10-31.json`. The live page is hand-made (no spec). The writer builds `specs/str-vs-ltr.js` with mkpage; the donor chrome brings the new listing-search sentence (SWEEP, "For the other helpers").

## The reader and their job

A buyer or owner with one home in mind: most often a one- or two-bedroom oceanfront condo in Myrtle Beach, sometimes a house inland. Often from out of state. He has seen Airbnb income figures and an agent's "two to three times the rent". His job is to **choose one** for this home: nightly or yearly. He worries the Airbnb numbers are the best case, that the city or the HOA will say no, and that he will be stuck cleaning or paying a manager half. He will ask next: how many nights does it need, what happens in January, will the lender count it, and can I switch later.

What he would pay an expert for: the same home run both ways, in dollars kept, with the rule that may decide it for him.

## The deciding fact

1. The rule decides first (rows 17, 18, 25). Inside Myrtle Beach city limits, houses in R zones cannot rent nightly (except RMV), and condos in short-term buildings between Kings Highway and the ocean cannot rent for 90 days or more. The listings agree: 402 of 422 oceanfront-building condos for sale in the city are marked for short-term rentals; 1 of 294 Carolina Forest houses is.
2. Where both are allowed, the money (rows 13 to 16): the typical Myrtle Beach two-bedroom grosses about 1.1 times a lease, not 2 to 3 times, and keeps about $2,850 a year **less** than the lease when run by its owner. It needs about 82 booked nights to break even with the lease; more than half of Myrtle Beach listings are booked or blocked 90 days or fewer. Only a top-quarter listing clearly wins (about $12,400 more a year), and a full-service manager at 40 percent takes most of that.

That replaces the live title's "Two to three times the gross", which is true only of the top quarter (row 15).

## Unique findings (no other page has these)

1. **The same home run both ways, in dollars kept** (rows 13, 14): typical, average and top-quarter Myrtle Beach two-bedroom against a lease at HUD's standard rent, and a Conway three-bedroom. Built by `compute.py`.
2. **The break-even in nights** (row 16): 82 nights self-run (17 bookings); about 172 with a full-service manager at 40 percent; never at 60 percent. Set against how often listings actually book (row 5: 56 percent booked or blocked 90 days or fewer).
3. **Month by month, nightly kept against the lease kept** (rows 4, 13, 14): the average listing keeps less than the lease in November, December, January and February, and about the same in October; June to August carry the year (47 percent of revenue).
4. **Our count of homes for sale by what the listing allows** (row 25): oceanfront condos almost all nightly, Carolina Forest houses almost none, Conway 34 of 675, all houses 465 of 3,743.
5. **Why the lease has a floor** (row 27): about 151,700 jobs here even in January, 119,400 outside leisure and hospitality.

## Shape

A **comparison that ends in a decision** (`reports/Page shapes by kind of page.md`, comparison and decision guide; CRAFT 3). Main relation: options for one home. Lead with the verdict by situation; the visual that does the work is the same home in two columns (a table on desktop, two cards on a phone), then the month chart, then the break-even tool.

First screen on a phone: H1, byline, a two-sentence answer, and a row of three key facts with words. The two giant hero tiles ("Long Term Rentals", "Short Term Rentals") are removed (judge). Nothing large above the answer.

## Title, description, H1

- Title tag: `Airbnb vs Long-Term Rental in Myrtle Beach: Real Numbers` (search words: Airbnb, long-term rental, Myrtle Beach; the old "2-3x the Gross" is false for the typical home and goes). The owner liked the current title and H1 (`data/headlines.json`); the new title keeps its first half word for word. Writer checks the scorer's title length.
- Meta description: "Airbnb or a yearly lease for a Myrtle Beach condo or house? The same home run both ways, the nights it needs to break even, and where the city decides for you."
- H1, two lines, the owner's shape kept: "Short-term or long-term rental in Myrtle Beach?" / "Run the same home both ways." The first line is the owner's line word for word; the second line replaces "Two to three times the gross, and the costs." (now false). Record the change for the owner.
- Byline: as the live page, Devin Day, Operations Officer; add "Reviewed by Tim Nash, Broker-in-Charge" only if he reviews it (the str-rules page carries it). Dates by `build.js dates` (lead).

## Sections in order, and what each proves

0. **Short answer** (proves: the verdict). Two sentences, then one line per reader:
   - "In Myrtle Beach a nightly rental grosses more than a yearly lease, but for the typical two-bedroom it keeps less, about $12,400 a year against $15,250, before the mortgage, tax and HOA fee. It pulls ahead once it books more than about 82 nights a year; a top-quarter listing keeps about $12,400 more than the lease." (Do not say "the top quarter books more than 82 nights": AirROI gives the top quarter's fill as a share of open nights, not a count of nights.)
   - "Pick nightly if": the building allows it, the home books like the top quarter (big, on or near the beach, open in summer), and you run it or pay a basic manager. "Pick yearly if": it is a house in an R zone or a Carolina Forest or Conway neighborhood, you want one move-in a year, or a full-service manager would run it.
   - Key facts row (icon chips with words, `G.glassIcons`): "82 nights to beat a lease" (16), "Typical 2-bedroom keeps $2,850 less" (14), "19 check-outs a year" (6).
   - Then a slim offer bar (CRAFT 3, "Measure the top"): "Send us one address. We run it both ways and read the building's rules before you offer."

1. **First, the rule may decide for you** (proves: whether the choice exists). Answers "can I Airbnb in Myrtle Beach". Four short lines, each a place the reader knows, each from a row:
   - City of Myrtle Beach houses and condos in R zones: no stays under 90 days, except RMV (17).
   - Short-term condo buildings between Kings Highway and the ocean inside the city: no stays of 90 days or more; leases chained to get past it are a violation (18). Say plainly: "In those buildings the choice is already nightly."
   - Unincorporated county (Carolina Forest, Socastee) and Conway: no county short-term rental ordinance; the HOA decides. Link /invest/str-rules/ for city by city, no restating.
   - The count (25), as a small table or bar chart: "What homes for sale say", rows Myrtle Beach oceanfront condos (402 of 422 nightly), North Myrtle Beach oceanfront condos (209 of 226), North Myrtle Beach houses (112 of 258), Surfside Beach houses (23 of 84), Conway houses (34 of 675), Carolina Forest houses (1 of 294). Note under it: "As marked by the listing agent. We read the master deed and the zoning before you offer."
   - Then: we check the zoning and the master deed on the address before an offer (we do the work).

2. **The same home, run both ways** (proves: the unique finding). Table on desktop, two cards on a phone (`compareCards` from `specs/_kit.js`, two options). Home: a two-bedroom condo in a Myrtle Beach oceanfront building where both are allowed (a building outside the overlay, or one with a long-term license). Rows, short cells:
   - Money in a year: nightly typical two-bedroom $20,100 / average two-bedroom $25,100 / a top-quarter Myrtle Beach listing $44,250 (2, 3; the top quarter is all sizes, and its label must say so); yearly two-bedroom $18,048 (9).
   - Running costs: Airbnb's fee, utilities, supplies, repairs, insurance, permit; cleaning paid by the guest (3); yearly: the same utilities and one month empty (13).
   - Kept before the loan, tax and HOA fee: $12,400 / $15,500 / $27,700 against $15,250 (13, 14).
   - Work: about 19 check-outs a year (6) against one move-in.
   - Lodging tax: the guest pays about 13 percent on top (20, 21); a lease of 90 days or more pays none (20).
   - What a lender counts: about 75 percent of a nightly estimate, according to a loan officer at our preferred lender (29); the signed lease.
   Under it, three sentences: what is the same either way (property tax at 6 percent, about $5,000 a year on a two-bedroom oceanfront condo listed near $325,000, the middle of the 48 for sale in the city that allow nightly stays; the HOA fee, about $1,225 to $1,250 a month in the middle for those condos; the loan) (24, 26). Then the Conway three-bedroom in one line: typical nightly keeps about $17,400 against the lease's $18,900 (14), and Conway has 106 Airbnbs in all (7). Then the big-house line: in North Myrtle Beach the typical four-bedroom grossed about $36,400 (8), which is where nightly renting pulls ahead.
   The method in one line under the table, and in full in the sources line: "Self-run, at AirROI's published cost shares; the lease at HUD's standard rent."

3. **How many nights it needs** (proves: the break-even, the reader's own number). Lead sentence: "Each booked night of a Myrtle Beach two-bedroom keeps about $190 after Airbnb's fee and running costs, so it needs about 82 nights a year to match a lease." Then the tool (visual 3). Then the hard truth with row 5: more than half of Myrtle Beach listings were booked or blocked 90 days or fewer; the typical listing fills about a third of its open nights; the top quarter more than half. Then management (19): with a full-service manager at 40 percent, about 172 nights; at 60 percent, no number of nights matches the lease (16). A basic plan at about 12.6 to 17.5 percent sits between. State that Chapter3 does not manage rentals.

4. **Month by month: where the lease wins** (proves: seasonality in one look). Chart (visual 2): kept per month, nightly average listing against the lease's flat line. Lead sentence: "The average Myrtle Beach Airbnb keeps less than a lease from November through February and about the same in October; June, July and August bring in almost half the year." (4, 14). Then the middle path in two sentences: a furnished stay of 90 days or more is not taxed as lodging (20) and covers the winter, but it is not allowed in short-term buildings between Kings Highway and the ocean (18). Link /invest/mid-term-rentals/.

5. **Who rents all year** (proves: the lease's floor). Two sentences and one small figure or two key numbers (27): about 151,700 jobs in January, 119,400 of them outside leisure and hospitality; leisure and hospitality jobs rise by about 13,000 by July. The lease rests on the first number; the nightly rental rests on the second. Link /invest/rent-prices/ for rents by area.

6. **The good and the hard** (`prosCons` or two short lists), each from a row, each hard point with what to do about it. Nightly, good: more money in summer (4), the top quarter keeps much more (3, 14), the owner can use the home in the off weeks (row 5 note: blocked nights). Nightly, hard: winter months below the lease (4); 19 check-outs (6); a manager can take 40 to 60 percent (19); lenders count about 75 percent (29); condotel buildings shut out standard loans (28). Yearly, good: one move-in, the same rent every month, the signed lease counts in full (29), year-round jobs (27). Yearly, hard: about one South Carolina rental in nine sits empty at a time (12); in short-term oceanfront buildings in the city it is not allowed (18); the rent is capped by the market, not the calendar.

7. **What Chapter3 does** (proves: the offer). We run one address both ways: the long-term rental analyzer for the lease side (/invest/long-term-rental/), the STR atlas for the nightly side (/invest/str-tools/), and we read the zoning and the master deed before you offer. We do not manage rentals. Offer box, same component as the top bar: "Send us an address. We run it both ways." Phone 854.333.2135 (kept). The final offer keeps the live page's "We answer evenings."

8. **FAQ**, open text, each answer names the subject first: Is Airbnb or a long-term rental more profitable in Myrtle Beach? Can you Airbnb a condo in Myrtle Beach? Can I rent my oceanfront condo long-term? How many nights does a Myrtle Beach Airbnb need to book? What does an Airbnb manager cost here? Do I pay lodging tax on a long-term lease? Is short-term or long-term easier to finance? What about renting to snowbirds? (Fixes the live FAQ's stray paragraph that argued nightly rentals are safer; that paragraph is cut.)

9. **Sources line**: AirROI market pages for Myrtle Beach, Conway and North Myrtle Beach (12 months to September 2026); HUD FY2027 Fair Market Rents and 24 CFR 888.113; Zillow ZORI (cross-check); Census HVS Table 1; BLS CES Myrtle Beach-Conway-North Myrtle Beach; S.C. Code 12-36-920 and 12-43-220; Horry County 2026 levy; City of Myrtle Beach zoning notice, Code Appendix A Section 1808 (Ord. 2024-69), business license FAQ; Airbnb Help Center 1857 and 2328; Fannie Mae B4-2.1-03; our count of active listings from the MLS feed, by what the listing agent marked; our arithmetic (`compute.py`). "On this page" list (8 sections).

## What the judge asked for, and where it is solved

| Judge's problem | Solved in |
|---|---|
| "2-3x the Gross" and 45-60 / 35-45 percent expense ratios unsourced, no worked example | Title changed; section 2 runs one home both ways from rows 3, 9, 13, 14; the expense ratios are replaced by AirROI's line-by-line costs; "2 to 3 times" is stated as the top quarter only (15) |
| No single property run both ways | Section 2 (two-bedroom condo, Conway house) and the Carolina Forest count in section 1 |
| Two giant hero tiles on a phone | Removed; one-line verdict for each reader in section 0 |
| Comparison table built from divs (A6 fails) | A real `<table>` on desktop (compareCards renders a table plus cards; writer confirms the scorer sees it) |
| Generic prose and the "get honest" metaphor | Cut; every sentence carries a local number |
| Contradictory last FAQ paragraph (nightly "safer") | Cut |
| "Most purchases are DSCR" unsourced; to-do lines ("all three need checking") | Cut; section 1 says what we check |
| No sources line, no picture, no question headings | Sources line; question headings (sections 1 to 5 as the reader's questions); photos below |

Ideas taken: three kinds of home both ways (section 2: condo and Conway house; Carolina Forest answered by the count), break-even calculator (section 3), who rents year-round (section 5, BLS; Census ACS not pulled, Not verified 6), where nightly is allowed (section 1, as a count table; a zoning map is not built: the city's zoning GIS was not opened, and str-rules owns the rules), mid-term as the middle path (section 4, one paragraph and a link, not a third column, since mid-term has its own page and the overlay bans it in the buildings that matter), one-line verdicts (section 0). Taxes at 6 percent and the HOA fee from the CRM: section 2's "the same either way" line.

## Kept from the live page

- The headline's first line and the title's first half (`data/headlines.json`, owner liked).
- Links: /invest/long-term-rental/ (rental analyzer), /invest/str-tools/ (STR atlas), /invest/airbnb-income/, /invest/str-rules/, /invest/str-tax-treatment/ (in the FAQ for the federal tax difference), /contact/, the phone line and "We answer evenings".
- The offer "Send us an address ... we will run the rent, the expenses and the association documents before you write an offer, at no cost" (kept in substance).
- The snowbird middle path, now with the 90-day line and the overlay limit.
- Nothing else: the live page has no tool, no story and no sourced number.

## Removed

Hero tiles; "2-3x the Gross"; the expense ratios; "Most Myrtle Beach investment purchases today are financed on DSCR loans"; the "control" paragraph in the last FAQ (it contradicts the risk answer and has no source; the same paragraph is on /invest/airbnb-income/, a note for that page's owner in NEEDS.md); "rent growth compounds quietly"; "get honest"; "all three need checking"; "Run an actual address through the tools below for your real numbers" (replaced by the offer). The old listing-search sentence about off-market homes (SWEEP); mkpage's donor chrome brings the new one.

## Visuals

1. **The same home both ways** (section 2). `compareCards` from `specs/_kit.js`, two options, six rows. Our own; no licence.
2. **Month by month, kept** (section 4). `G.bars` from `tools/glass.js` (or a small inline SVG line pair if `G.bars` cannot draw a reference line; see NEEDS.md), built from `findings.json` `mb_months` (`nightly_kept` per month, `lease_kept` flat at about $1,270). Title: "What a Myrtle Beach two-bedroom keeps each month: nightly against a yearly lease". Bars for nightly; a single line or a marked band for the lease. Table of values under it (12 rows). Months below the lease drawn in the muted color with the label "less than the lease".
3. **Break-even tool** (section 3). Our own small calculator, written in the spec (no shared file): inputs nightly rate (default $252), monthly rent (default $1,504), utilities a year (default $1,290), manager's share (0, 15, 40 percent choices); output the nights a year to match the lease, and the check-outs at 4.7 nights. The worked example in text beside it uses the defaults (82 nights, 17 bookings). Formula from row 16, written in the spec's comment. No rate, no payment, no loan.
4. **What homes for sale say** (section 1). A six-row table or `G.bars` of the share marked for short-term rentals, from `findings.json` `listings`. Counts, never addresses.
5. **Photos.** One at a time, each under the sentence it proves:
   - Section 1, beside the overlay sentence: an oceanfront tower row in Myrtle Beach. Candidates, licence read on the file page 2026-11-01, picture **not yet seen** (Commons upload server 429): `File:Hotels_along_the_Grand_Strand_Beachfront.jpg` (https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg, CC BY-SA 4.0, DiscoA340, 2022-08-14, 3264 x 2448); `File:Myrtle_Beach,_North_Ocean_Boulevard_100420-F-4155R-021.jpg` (https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_North_Ocean_Boulevard_100420-F-4155R-021.jpg, public domain, U.S. Air Force, Tech. Sgt. Louis L. Rivers, 2010-04-20, 1050 x 750, small). Public-domain fallback: a USGS 2011 oblique aerial of the Myrtle Beach oceanfront from the same set the site already uses (https://doi.org/10.5066/F7N877XX). Caption must say only what the picture shows: "Oceanfront towers along the beach in Myrtle Beach." No building name. Crop any brand sign out, or do not use.
   - Section 5 or the Carolina Forest line: a street of year-round houses. Already licensed on the site: `images/buyers/the-farm/the-farm-homes-from-above-2026.webp` (NOAA, public domain, record in `data/2026-10-b/photos.json`); caption "Houses on one street in Carolina Forest, from above." Or `images/buyers/no-hoa/conway-older-house-and-oak.webp` (public domain, Pubdog) beside the Conway line: "An older house in Conway's residential historic district."
   - Section 3, turnover: no stand-in exists; the photo partner's shot 3 below. Until then, no picture there.
   - New files go only under `chapter3realty/images/2026-10-d/invest-str-vs-ltr/`, each with a licence record `tools/photos.js` accepts. The writer looks at each full size and at 375 px before use.
   - Share image: an OG card from `tools/ogcard.js`.

## Photo partner shot list (send from the owner's Gmail with `templates/photo-request-email.md`)

For the page that runs one Myrtle Beach home both ways, nightly and yearly. Most wanted first. Public roads, sidewalks and beach accesses only; no faces, plates, house numbers, or signs and logos as the subject.

1. **A row of oceanfront condo towers from a public beach access or Ocean Boulevard sidewalk, inside Myrtle Beach city limits between Kings Highway and the ocean** (any block from about 29th Avenue South to 82nd Avenue North). Wide, landscape, buildings only, three shots: one from the sand looking along the row, one from the street, one at dusk with lights on. For the rule that these buildings stay nightly.
2. **A year-round rental house street in Carolina Forest** (any neighborhood street off Carolina Forest Boulevard). Landscape, houses and driveways, no people. Two shots.
3. **A turnover scene inside a rental we are allowed to shoot**: a stack of folded towels and linens on a bed, a cleaning cart in a condo hallway. No person as the subject. Written permission from the unit's owner first. For the "19 check-outs a year" line.
4. **A house street in Conway** (the residential area near downtown). Landscape, two shots.

## Links

- Out (in sentences): /invest/str-rules/ (rules city by city), /invest/mid-term-rentals/ (90 days or more), /invest/airbnb-income/ (market-wide income), /invest/rent-prices/ (rents by area), /invest/str-tools/ and /invest/long-term-rental/ (the two analyzers), /invest/condotel-financing/ (condotel loans), /invest/str-tax-treatment/ (federal tax, FAQ), /invest/accommodations-tax/ (lodging tax), /invest/ (hub).
- In: already from /invest/, /invest/str-tools/, /invest/airbnb-income/. Proposed for the lead (not edited here): /invest/strategies/ hub card (the judge's hub entry asks for it), and a sentence link from /invest/rent-prices/ ("or run the same home nightly").

## Compliance notes for the writer

- No interest rate, payment amount or down payment percentage anywhere, including the tool and row 29. Row 29 is attributed to "a loan officer at our preferred lender". BrickWood is not named.
- No AVM: the worked condo is the middle list price of homes for sale, in a band, never a value for any address.
- Listing counts are aggregate and active only; no MLS sold data on the page.
- Chapter3 does no property management; the page says so where management comes up.
- No fair-housing words; describe homes and rules, never who lives anywhere.
- We do the work: "we read the master deed and the zoning", never "check your HOA".
- Devin Day only in the byline. No Paul. No quote for Tim Nash. Stories 30 and 31 only with their limits.
- One value per fact on the site: FMR as /invest/rent-prices/; 13 percent lodging tax as /invest/str-rules/; mills as /buyers/property-taxes/. AirROI figures here are newer than `str-market.json`; NEEDS.md asks the lead to refresh that file from the same pages so /invest/airbnb-income/ and this page agree.
