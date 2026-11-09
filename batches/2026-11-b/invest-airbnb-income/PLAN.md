# Plan: /invest/airbnb-income/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-09. Inputs: `must-answer.md`, `facts.md` (27 rows: 19 carried from verified ledgers, 8 new or partly new and awaiting a verifier, 2 stories among them), `DATA/findings.json` (`data/2026-11-b/invest-airbnb-income/`, made by `analyze.py`), the triage row, the cannibalization cluster, the live page and its four siblings read live.

## Why it is being rebuilt

Triage: "The numbers contradict each other." The dek and FAQ say Airbnbs net "a third to half" of gross and "$8,000 to $23,000 a year"; the page's own condotel example nets $1,600 on $26,000. It gives three management scales on three bases. It quotes five vendors and calls the spread the answer. Search Console: 108 showings and 1 click in 28 days at position 6.9, falling. The page is on the first page and is not chosen, most likely because its title is a range from two vendors that it then says do not agree.

The fix is one source and one method: every gross figure from `data/str-market.json` (and the same AirROI update for sizes and months, checked against it by `analyze.py`), and every net figure from /invest/str-tools/'s own arithmetic on its own two condos.

**There is no spec.** The live page is hand-built HTML. The writer makes `specs/airbnb-income.js` (author "devin", url `/invest/airbnb-income/`), built with `node tools/mkpage.js specs/airbnb-income.js`. It reads `data/str-market.json` for every town figure and `data/2026-11-b/invest-airbnb-income/findings.json` for sizes, months and the worked example, and `must()`s that the two agree (as `specs/str-tools.js` lines 71 to 78 do). Models: `specs/str-tools.js` (the same data, `G.bars`, the season chart) and `specs/home-value.js` (approved, 2026-11-01: question headings, our own table up top).

## What the live page has that is worth keeping

- The question in the H1 and the searched words: "How much do Airbnbs make in Myrtle Beach?", "Airbnb income by area", "seasonality", "what a Myrtle Beach Airbnb nets".
- The answer in the first sentence, and the idea of leading with a number.
- The area table (its eight figures are right and match STRM, row 2) and the month figures ($6,800 July, $1,340 January, row 11).
- The point that Myrtle Beach's lower average is the mix of homes ("two-thirds one- and two-bedroom condo listings, while the south strand is mostly whole homes"). Row 7 now proves it with the size table instead of asserting it.
- The monthly spread (top tenth $6,770+, the middle $2,530, row 9), moved up into the answer.
- "Revenue includes the cleaning fees guests pay," said once.
- "The management structure is the investment decision": kept as an idea, said with one scale (rows 20 to 23).
- The offer to run an address, the phone line 854.333.2135 and "We answer evenings."
- Links: /invest/str-rules/, /invest/str-tools/, /invest/condotel-financing/, /invest/str-setup/, the property tax page, /buyers/coastal-insurance/.
- The edge feed under the opening: `idx-lib/feeds.js` maps `/invest/airbnb-income/` to `STR_OCEAN`, "Oceanfront condos where nightly rentals are allowed" (Myrtle Beach and North Myrtle Beach, condo, oceanfront unit, nightly allowed). The owner asked for it at the top. Keep it.

Cut: everything in facts.md "Struck from the live page" (eleven items), including the five-vendor table, every net shortcut, the three unsourced profiles, the three management scales, the $45,000 client portfolio (not in the story bank), the "control" paragraph, the market-size and ordinance section, and the BrickWood line.

## The reader and their decision

Someone weighing a Grand Strand rental: a buyer pricing a condo or house before an offer, or an owner deciding whether to rent their place by the night. Often from another state. They have seen one big average somewhere. They do not know that the average mixes studios with eight-bedroom houses, that half the listings take in less than it, that summer is half the year, or that the HOA fee can eat the rest.

**Their decision:** is a nightly rental of this size, in this town, worth buying (or worth renting out)? **The job, in one verb:** know the number for their kind of home. **Kind of page:** market data (CRAFT 3: the latest number and its period, a chart and its table), with one worked example from gross to net. It is a numbers page, so it stays short and calm: about 1,400 to 1,800 words, four visuals, no calculator.

## The answer, in two sentences

The average Airbnb in the Myrtle Beach area took in about $25,800 from guests in a year, and the middle one about $2,500 in a typical month. Size decides most of it. In seven of eight towns, an average two-bedroom took in about $21,000 to $28,000; in most, a four-bedroom about $42,000 to $73,000.

(Rows 2, 6, 7, 9. 27, 5 and 22 words. "Before any cost" goes in the next line ("Gross is what guests paid"). Four-bedroom range: the five towns with 50 or more four-bedroom listings, $41,600 to $73,300; Garden City (19) and Little River (11) are left out, hence "in most". AirROI's sizes count condos and houses together: "a four-bedroom", never "a four-bedroom house".)

Then one line, the bridge to the example (rows 19, 20): "What you keep depends on the HOA fee. A two-bedroom Garden City Beach condo keeps about $5,000 after its bills; a typical Myrtle Beach oceanfront two-bedroom falls about $4,000 short."

## Title, H1, description, keywords

- **Title (55 characters):** `How Much Do Myrtle Beach Airbnbs Make? By Town and Size`. The searched words first ("how much do Airbnbs make", "Myrtle Beach"), then what only this page gives. No vendor range. Site suffix if mkpage adds it.
- **H1:** "How much do Airbnbs make in Myrtle Beach, by town and size?" Says the same as the title.
- **Hero sub-header (no we, our or us):** "What Grand Strand Airbnbs take in from guests, by town, size and month, and what is left after the bills."
- **Description:** "How much do Myrtle Beach Airbnbs make? About $25,800 a year on average. By town, by bedrooms and by month, plus one condo worked from gross to net."
- **Keywords:** how much do Airbnbs make in Myrtle Beach; Myrtle Beach Airbnb income; Myrtle Beach average Airbnb gross income; Myrtle Beach Airbnb revenue by month; North Myrtle Beach Airbnb income; Murrells Inlet Airbnb income; Surfside Beach Airbnb income; Myrtle Beach condo rental income; how much does a 2 bedroom Airbnb make Myrtle Beach; Myrtle Beach Airbnb data. Not "Airbnb calculator", "occupancy rate", "break even" (str-tools), not "cap rate" (rental-returns), not "Airbnb vs long-term rental" (str-vs-ltr).

## Sections in order (question headings people search)

"On this page": The answer, By town, By size, By month, What you keep, Managers, Worth it?, Questions.

1. **Hero.** H1, byline (machine date), sub-header. Three key-fact chips with words, each a different fact: "$25,800 a year, the average Airbnb" (row 2); "$21,000 to $28,000 for a two-bedroom" (row 7); "47% of the year in June to August" (row 12).

2. **How much do Airbnbs make in Myrtle Beach?** First screen. The two-sentence answer, then the bridge line. "Gross is what guests paid, cleaning fees included" (row 1), once. Slim offer bar: "Send us a listing. We send what Airbnbs like it take in nearby." The edge feed (STR_OCEAN) sits right under this opening; nothing goes between them.

3. **How much does an Airbnb make in each Grand Strand town?** Chart 1 (below). Under it, two sentences: Murrells Inlet's average is nearly twice Myrtle Beach's (row 7), and four in five Myrtle Beach listings are condos while most of Murrells Inlet's are houses (row 4, STT 7 wording). Then: "For the same size, the towns are close", the hand-off to section 4. One line marks Conway and Little River as small markets (row 2), and one FAQ line covers Carolina Forest (row 3).

4. **How much does a two-, three- or four-bedroom Airbnb make?** The size table (below). First sentence is the answer: "In seven of the eight towns, an average two-bedroom took in about $21,000 to $28,000 a year, and a three-bedroom about $28,000 to $39,000" (row 7). Then the middle-listing point, plainly: "The middle listing takes in less than the average. In North Myrtle Beach the middle two-bedroom took in about $14,900, against an average of $20,700" (row 8). Then the bigger homes: an average listing with four bedrooms or more took in about two to four times a two-bedroom in the same town (row 6; Pawleys Island four-bedroom 1.8 times, Murrells Inlet five-plus 3.8, North Myrtle Beach five-plus 4.2). That is most of the gap in the town chart; never write that more houses always mean more income (row 4 note: Conway). Homes strip here (see Homes strips). Mid-roll offer: "Tell us the town and the bedrooms. We send homes for sale where nightly stays are allowed."

5. **How much does a Myrtle Beach Airbnb make each month?** Chart 2 (below). First sentence: "A Myrtle Beach Airbnb takes in about five times as much in July as in January" (row 11). Then a month in money: the middle listing about $2,530, the middle half $1,270 to $4,330, the top tenth $6,770 or more (row 9). Then the even years: June to August is 47 percent of the year in Myrtle Beach and 37 percent in Pawleys Island, the most even (row 12). One line: renting the winter as one stay of 90 days or more is on /invest/mid-term-rentals/.

6. **How much do you keep from a Myrtle Beach Airbnb?** The worked example (below), two condos side by side, the same two as /invest/str-tools/. Lead: "What is left depends most on the HOA fee." Then the table. Then two lines: with a manager at 15 percent of the bookings, the Garden City condo keeps under $2,000 (row 20); open all year, the Myrtle Beach condo keeps about $4,500 (row 19). Costs are AirROI's low-end shares for an owner who runs it, said once (row 14). Link: "Run your own condo, with its own fee and tax, through our Airbnb calculator" (/invest/str-tools/). Mid-roll offer: "Have us run one condo's fee, tax and bookings before you offer."

7. **What does an Airbnb manager take in Myrtle Beach?** Short, one scale. Managers here that publish their rates charge 10 to 25 percent of each booking (row 21). In what we have seen, a basic plan runs about 13 to 17 percent; full service, which adds taxes, maintenance and repairs, is priced as a share of the profit (row 22). An oceanfront resort's rental desk, on its 2017 terms, kept 38.6 percent before other charges; link /invest/rental-program-vs-airbnb/ (row 23). The cheapest-cleaner observation, without quotation marks (row 26). Link /invest/property-management/.

8. **Is an Airbnb in Myrtle Beach a good investment?** Three or four sentences, no verdict. The listing count grew 43 percent in a year in the Myrtle Beach area, and more than half of listings were booked or blocked 90 days or fewer (row 24). A buyer should plan on the nights listings book now (str-tools' line, reworded). Links in sentences: the lease comparison (/invest/str-vs-ltr/), the return on the price (/invest/rental-returns/), where nightly stays are allowed (/invest/str-rules/).

9. **Myrtle Beach Airbnb income questions** (FAQ, open text, each answer two sentences or fewer, no repeat of a section): How much does an Airbnb make a month in Myrtle Beach? (row 9). Do these figures include the cleaning fee? (row 1). What percentage does Airbnb take? (row 16). What occupancy does a Myrtle Beach Airbnb get? (row 2: 36 percent of open nights; nights to break even on /invest/str-tools/). Which town makes the most? (rows 2, 7). Is there Airbnb income data for Carolina Forest? (row 3). Who pays the lodging tax? (row 27, link /invest/accommodations-tax/).

10. **Sources line** (one block): AirROI's eight market pages, 12 months to September 2026, through `data/str-market.json`; our count of condos for sale; our arithmetic, the same as our Airbnb calculator; managers' published fee pages; the Horry County 2026 levy; S.C. Code 12-43-220. Not legal or tax advice. **End offer band:** "Want these numbers for one address?" One sentence, the phone line, "We answer evenings."

## The visuals (each one message, readable at a glance)

1. **By area (chart).** `G.bars`, one bar per town, sorted high to low, the all-size average a year from guests at the end of each bar. Beside each name, one plain fact: the listing count, marked "few listings" for Conway and Little River. Title, the message: "Murrells Inlet's Airbnbs took in the most a year, Little River's the least". Caption: "Average per listing, all sizes, cleaning fees included, before any cost. AirROI, 12 months to September 2026." No gridlines, no second series. Data: STRM `revenue`, `listings`.
2. **By size (table, for comparing).** Rows are the eight towns in the chart's order; columns "2 bedrooms", "3 bedrooms", "4 bedrooms" (average a year, rounded to $100). A dash where a town has none; "few" after a figure from under 30 listings. Four columns fit at 390 px. Header: "What the average Airbnb took in a year, by bedrooms". Data: `findings.json` towns[].by_size.
3. **By month (chart).** Twelve vertical bars for the Myrtle Beach area, July marked in the brand colour, the value above July and January only. Title: "A Myrtle Beach Airbnb takes in about five times as much in July as in January". Caption: "Average per listing open that month, last two years. AirROI." The same values as /invest/str-tools/'s season chart (row 11). No second town on the chart; Murrells Inlet and Pawleys Island are one sentence each.
4. **Gross to net (two-column ledger).** "Garden City Beach condo" and "Myrtle Beach oceanfront condo". Lines: Guests pay; The cleaner (paid by the cleaning fee); Airbnb's fee; Utilities and internet; Supplies and repairs; = Left before the bills; HOA fee; Property tax; Rental insurance and permit; = What you keep, before any loan. Last row in large type: "+$5,100" and "about −$4,200" (the Myrtle Beach line rounds as str-tools does in prose: "about $4,000 short"). Under the head of each column, one line: "asks about $345,000 · HOA fee about $575 a month · 95 nights at $243" and "asks about $327,000 · 87 nights at $252" (the HOA fee figure per the row 19 hold). Data: `findings.json` worked.

Four visuals on a page this long. No map (str-tools has the towns map), no photo that only decorates, no icons beyond the chips.

## Homes strips

- **The edge feed stays first:** STR_OCEAN under the opening. A page that carries its own `G.homes()` slot takes the edge feed off unless feeds.js says `withStrips: true` (1031 batch, `idx-places-add.json` "feeds" note). So if the strip below is used, the lead changes `idx-lib/feeds.js` line 307 to `"/invest/airbnb-income/": { ...STR_OCEAN, withStrips: true }`.
- **One strip, in section 4,** under the bigger-homes sentence: `G.homes("str-garden-city-beach-houses", "Garden City Beach")`, the slug /invest/str-tools/ already uses (houses within 0.8 mile of Waccamaw Drive). The lead adds `/invest/airbnb-income/` to that slug's `pages` in `batches/2026-10-b/data/idx-places.json` and regenerates `idx-lib/places.js`. Why Garden City: its average five-bedroom took in about $98,400 (row 6), and in the Garden City area about three in four houses for sale are marked for nightly rentals (STT 21). The strip cannot filter on nightly rentals (edge.js `placeParams` takes only subdivision, near, miles, type, hoa), so its title stays the default "Homes for sale in Garden City Beach now", never "rental-ready". Fallback: the section's offer, not a photo.
- No strip for Murrells Inlet: most of its houses for sale are not marked for nightly rentals (STT 21: 17 percent), so a strip there would show homes the page's numbers do not describe.

## Offers (each different words, each a request to /contact/)

1. Slim bar under the answer: "Send us a listing. We send what Airbnbs like it take in nearby."
2. After the size table: "Tell us the town and the bedrooms. We send homes for sale where nightly stays are allowed."
3. After the worked example: "Have us run one condo's fee, tax and bookings before you offer."
4. End band: "Want these numbers for one address?" Phone 854.333.2135, "We answer evenings."

No lender offer and no BrickWood line on this page. If a writer adds one, it is "our affiliated lender, BrickWood Mortgage, a separate company", with no rate and no payment.

## Inbound links (17 today; aim 6 or more: met)

`node tools/inbound.js <web> --only /invest/airbnb-income/` on 2026-11-09: 17 referring pages (/buyers/relocating/from-massachusetts/, /guides/, /invest/, /invest/rental-program-vs-airbnb/, /invest/rental-returns/, /invest/run-the-numbers/, /invest/str-tax-treatment/, /invest/str-tools/, /invest/str-vs-ltr/, /sell/sell-my-condo/, /submarkets/carolina-forest/, /submarkets/conway/, /submarkets/garden-city/, /submarkets/little-river/, /submarkets/murrells-inlet/, /submarkets/north-myrtle-beach/, /submarkets/surfside-beach/). Recount after the build. Five of those link sentences no longer match the page (For the lead, items 6 to 10).

## For the lead: sibling sentences that must change (copy to BUILD.md)

Figures on all four siblings already agree with this page: the town averages, listings and occupancy (STRM), the twelve months, the two worked condos and the $27,700 top-quarter line are the same numbers. What remains is who owns the search, one cost method, and stale link wording.

1. **/invest/str-tools/** (`specs/str-tools.js`), the cannibalization fix not yet applied: title "Myrtle Beach Airbnb Calculator and Numbers by Town" → "Myrtle Beach Airbnb Calculator: Nights to Pay the Bills"; H1 "How much would you keep from a Myrtle Beach Airbnb?" → "Myrtle Beach Airbnb calculator: how many nights pay the bills?"; first H2 "How much profit does a Myrtle Beach Airbnb make?" → "How many nights does it take to pay the bills?"; drop the keywords "how much does an Airbnb make in Myrtle Beach" and "Myrtle Beach Airbnb occupancy rate" (spec line 702); add under the lede "What Myrtle Beach Airbnbs gross, by area and month, is on our Airbnb income page."
2. **/invest/str-tools/**, section "Which Grand Strand town does an Airbnb do best in?" and its two-bedroom chart by town: this page now owns gross by town and size. Recommend one sentence and a link in its place, or keep the section as it is with the H2 reworded to the nights question ("Which town's condos pay their bills in the fewest nights?"). Its figures agree; the question is the one this page answers.
3. **/invest/str-tools/** FAQ "How much does an Airbnb make in Myrtle Beach?": answer points to this page instead of "The chart of towns above".
4. **/invest/rental-returns/** (`specs/rental-returns.js` line 76, `STR_EXP = 0.55`): "Nightly costs take 55 percent of revenue, covering management, cleaning, utilities, platform fees, the 6 percent tax and insurance" is a second cost method (triage: "one method"). AirROI's own lines (row 14) plus a manager at 15 percent of bookings come to about 52 percent before the tax and the HOA fee, so the two do not match. Either cite the method in the sources line as a cap-rate assumption or rebuild the costs from rows 14 and 21. Also "at 60 percent, which is what a well-run listing books": no row; AirROI's tiers are 56 percent or more for the top quarter, 74 percent or more for the top tenth (SVL 5). Lead's call.
5. **/invest/str-vs-ltr/**: no change needed. Its H2 is already "What an Airbnb and a two-bedroom lease earn each month", and it links here twice.
6. **/buyers/relocating/from-massachusetts/**: "The market-wide ranges, from five data vendors, are on our Airbnb income page" → "What Airbnbs take in here, town by town, is on our Airbnb income page."
7. **/submarkets/surfside-beach/**: "AirROI figures for all nine submarkets are on our Airbnb income page" → "for eight towns" (Carolina Forest has none, row 3).
8. **/submarkets/garden-city/**: "compare all nine submarkets" → "compare eight towns".
9. **/submarkets/murrells-inlet/**: "our long-term rental analyzer and Airbnb income page run both sides for one house" → this page runs no house. Suggest "our Airbnb calculator and long-term rental analyzer run both sides for one house", linking /invest/str-tools/ and /invest/long-term-rental/.
10. **/invest/str-tax-treatment/**: "What management costs against doing it yourself is on our Myrtle Beach Airbnb income page" still holds if section 7 stays; if the writer cuts section 7, point it at /invest/rental-program-vs-airbnb/.
11. **`data/str-market.json`** (shared): it has no size rows and no months, so "one source" holds through `analyze.py`'s agreement check, as on /invest/str-tools/. `DATA/str-market-add.json` is a ready block (bySize, months, summerShare, topQuarterGross, condoPct, housePct for each market, from the same update). If the lead adds it, this page and str-tools both read sizes and months from the one file at the next refresh.

## Open items for the verifier and the writer

- Rows 4 (six towns), 5 (studio, one, four, five-plus), 6 (four and five-plus), 7, 8, 9, 10 (seven towns), 12 (multiples) are new and need an independent check against the saved AirROI pages (`data/2026-10-d/invest-str-tools/raw/airroi-*.html`, byte-identical to what the str-tools verifier downloaded) and `findings.json`.
- Row 19's HOA fee figure: SVL 26 holds "$1,2xx" until a registered read shows the field is monthly; /invest/str-tools/ prints "about $1,200 a month". The verifier rules once for both pages.
- No owner question is needed for the first draft. The cut client portfolio ($45,000 per unit) returns only if the owner gives it to the story bank.
