# Plan: /invest/strategies/ (batch 2026-11-b)

Researcher, 2026-11-10. Facts: `facts.md` in this folder (rows cited as R1 to R40). Questions: `must-answer.md`. Data: website `data/2026-11-b/invest-strategies/` (`build_findings.py` writes `findings.json` and `chart-entry-prices.json`; `pull-suggestions.sh` and `raw/google-suggestions-2026-11-10.txt`).

## Why it is being rebuilt

Triage ("Rebuild the content"): a thin hub. Six cards, each with one generic line ("Good for: owners with big gains who want to trade up") and no local number. Sales claims in place of facts ("Those relationships are why investors are so successful with Chapter3 Realty", "a large share"). The byline has no Tim Nash review. It competes with /invest/ ("Pick the strategy before you pick the property").

The problem a reader has, in one sentence: they cannot tell from this page which strategy fits their money and time here, because nothing on it is about here.

## What the live page has that is worth keeping

- **The one-line "watch out for" on each card.** Plain and true: "hard deadlines; miss one and the tax comes due"; "repair overruns or a low bank value can trap your cash in the deal"; "one blown repair budget can erase the whole profit"; "more tenants means more repairs, more calls, and more turnover"; "your money is locked up and returns are not guaranteed". Keep the sense of each, tie it to a local fact where one exists (R10, R18, R28).
- **"All six close here. DSCR purchases and 1031 replacements are the most common. BRRRR closes the least often, because the discounted, fixable house is the scarce ingredient."** True to `strategy-mix` (R1). Keep; cut the "large share" clause.
- **The quiet off-market sale.** The hub is the only page allowed to tell it (R2). Keep it in the vague form; drop "out-of-state business owner" and "rental units".
- **"A new company can outspend us on ads ... It cannot reproduce years of friendships"** (R3). Keep the first two sentences; cut "Those relationships are why investors are so successful".
- **The four FAQ topics** (best strategy, cash needed, help with the loan, out-of-state investors). Rewrite each with a local fact and the affiliate wording (R40).
- **The closing promise:** "We will run the rent, the expenses and the association documents before you write an offer, at no cost." Keep. The button becomes a request to /contact/; the phone number stays as a second, plain link.

Cut: the hospitals paragraph and "priced low for a coastal market" (no row; the story bans the forecast), "Most of our investors come from the Northeast" (R25 replaces it with a sourced fact), the cards, "Talk to an investor agent" as the only offer.

## The reader and their decision

Someone with money to put into Grand Strand real estate who has not chosen how. Often from another state (R25). Some are selling a rental elsewhere with a gain. Some have cash and a free summer. Some want income and no calls at night. They know the words from podcasts; they do not know what each one costs to start here, how often it happens here, or which fits them.

**Decision:** which of the eight ways fits my money, my time and my goal here, and which page do I read next?

## The answer, in two sentences (then two more)

For steady income, buy a house to rent by the year with a DSCR loan, which qualifies on the rent. A middle 3-bedroom house inland leaves about half its rent for the loan.

Selling a rental with a big gain? A 1031 exchange or a DST puts off the tax. With cash and time for a project, a flip or BRRRR starts with a worn house.

(R9, R11, R23, R27, R16. 20, 13, 7, 10 and 16 words. The first two sentences are the answer for the most common reader; the second pair routes the others, and the guide in section 1 finishes the job. No rate, no payment, no down payment share.)

## Title, H1, italic line, description, keywords

- **Title:** "Myrtle Beach Real Estate Investment Strategies: 8, Compared | Chapter3" (about 68 characters with the brand; drop " | Chapter3" if the build caps at 60). Keeps the words the page ranks for today (position 16.9) and the phrase no one owns (must-answer: "real estate investment strategies myrtle beach" has no suggestion and no owner).
- **H1:** "Eight real estate investment strategies on the Grand Strand, compared" (the cannibalization fix's wording, with eight). "Grand Strand" in the H1 keeps it off /invest/'s "Myrtle Beach investment property".
- **Italic line:** "A local number for each, and who it fits."
- **Description:** "Eight ways to invest in Grand Strand real estate, from a $100,000 DST share to a $520,000 duplex: a local number for each, who it fits and what goes wrong." (about 155 characters; the two dollar figures come from findings.json.)
- **Keywords:** real estate investment strategies Myrtle Beach; types of real estate investing; best real estate investment strategy for beginners; how much money do you need to start investing in real estate; invest in real estate without being a landlord; BRRRR vs fix and flip; 1031 exchange vs DST. Never "Myrtle Beach investment property", "is Myrtle Beach a good place to invest", "where to buy a rental", "how much do Airbnbs make", "short-term vs long-term rental".
- **Byline:** Devin Day, author; Reviewed by Tim Nash, Broker-in-Charge (byline, author note and schema). The date comes from mkpage and `node build.js dates`.

## The shape

A decision guide with a list. The reader's job is "choose one", across eight options, so a side-by-side table is too wide; a calm numbered list does the work (CRAFT 3: a list is read one item at a time). One chart answers the money question. Short paragraphs, no cards, no tiles row, no icons grid.

## Sections in order

Top of the page on a phone: H1, italic line, byline, the two-sentence answer, the slim offer bar. The edge feed sits under the opening (the site does this). Then "On this page" (seven short labels).

**1. "Which real estate investment strategy fits you?"** (the selection guide)
Two sentences first: the deals we see most are DSCR purchases and 1031 trades, and BRRRR is the rarest because the worn house must also sit where rent is strong (R1, R15). Then a plain list, one line each, by what the reader wants, never by who they are:
- Monthly income, financed on the rent → long-term rental (1) with a DSCR loan (4)
- The most income a home can earn, and you accept the work → short-term rental (2)
- Several rents from one building, or you will live in one unit → small multifamily (3)
- One sum of cash reused, house after house → BRRRR (5)
- A project you finish and sell → fix and flip (6)
- You are selling a rental with a big gain → 1031 exchange (7)
- The same, and you are done being a landlord → DST (8)
Each line links its entry below (anchors), not the child page, so the reader stays oriented.

**2. "What are the main real estate investment strategies here?"** (the eight entries)
Grouped under four short labels so the relations are clear: what you buy and hold (1 to 3), how you pay for it (4), how you add value (5, 6), how you trade without the tax now (7, 8). Each entry: a headline with the strategy's plain name, then 60 to 90 words in this order: what it is in one sentence; its local number as a sentence a local agent would say; who it fits; the hard part, kindly, with a fact; the link to its page in the text ("Our DSCR loan guide works out..."). Every number below is read from `findings.json` or the named row; none is typed.

1. **Long-term rental.** A house listed for rent asks about $2,070 a month (R6). Fits: income with the fewest moving parts. Hard part: the 6 percent tax rate on a rental, and HOA rules (R12, R5). Link /invest/long-term-rental/ (the analyzer) and /invest/rent-prices/. One clause to /invest/str-vs-ltr/ for the comparison.
2. **Short-term rental.** The average Airbnb in the Myrtle Beach area took in about $25,800 from guests over a year (R31). Wow line: in Murrells Inlet the average was about $47,600 (R33), or 7 in 10 condos for sale say nightly rentals are allowed (R34); pick one, not both. Fits: the most income a home can earn, for an owner who accepts the work or pays a manager. Hard part: city zones that bar nightly rentals (R35). Link /invest/airbnb-income/ and /invest/str-rules/. **Homes strip here** (see Strips).
3. **Small multifamily.** 58 duplexes to fourplexes sold in the county in the year, at about $520,000 at the middle (R19). Wow line: about three in four of the county's duplexes, triplexes and fourplexes stand within a mile of the ocean (R20). Fits: several rents from one roof; or you live in one unit, and an FHA or VA loan can buy up to four (R22). Hard part: an FHA loan bars renting any unit under 30 days (R22). Link /invest/strategies/small-multifamily/. **Homes strip here.**
   Mid-page offer A (after entry 3): "Have us run the rent and the costs on any address" → /contact/.
4. **DSCR loan.** Not a property but the loan most investors here use for 1 to 3 and the BRRRR refinance: it qualifies on the rent (R11). A middle 3-bedroom house in Longs or Carolina Forest leaves 46 to 49 percent of the rent for the loan at our 1.25 target (R9). Hard part: on the middle oceanfront two-bedroom rented by the night, the dues, tax and insurance alone pass the rent a lender counts (R10). Fits: self-employed buyers and anyone past a few financed homes. Link /invest/strategies/dscr-loans/ ("down payment and credit figures from our affiliated lender are on our DSCR loan page").
5. **BRRRR.** Buy a worn house, rehab, rent, refinance, repeat. One local case: about $90,000 of work took a house from about $180,000 to about $384,000 in value in about three months; it is now a short-term rental (R13, "his numbers, not a promise"). Where they turn up: dated houses in Conway, Socastee and Carolina Forest, north to Longs and Little River (R14). Hard part: a low appraisal leaves cash in the house. Link /invest/strategies/brrrr/ and /invest/foreclosures/.
6. **Fix and flip.** 344 quick resales in the year; when a company resold, the middle gain between the two deed prices was about $75,000, before costs; the biggest house gains were in Conway, Carolina Forest and Little River (R16). Hard part: 66 of the 344 sold for less than the earlier deed price (R18). Fits: cash, a licensed contractor and a few months. Link /invest/strategies/fix-and-flip/.
   Mid-page offer B (after entry 6): "Get our list of worn houses priced under their fixed-up value" → /contact/ (the flip and BRRRR pages call it the flip list; the words differ here).
7. **1031 exchange.** Sell one rental, buy another, put off the tax; name the next one within 45 days and own it within 180 (R23). Local line: about 3 in 10 homes sold here go to buyers whose tax bill goes to another state (R25), so the trade from a costly market to here is common. Never call them 1031 buyers. Hard part: the deadlines rarely move. Link /invest/strategies/1031-exchange/. Optional: Tim's longtime client with 200 properties (R26), one sentence, if the entry needs a person.
8. **DST.** A share of a large property a sponsor runs; it can be the replacement in a 1031 (R41). Wow line: 10 DSTs already own 11 Horry County parcels the county values at about $200 million, including an apartment community on Carolina Forest Boulevard (R30). The usual minimum is $100,000 (R27), and buyers must be accredited (R29). Hard part: about 6 percent goes to sales commissions, and the money is locked until the trust sells (R28). Fits: done being a landlord. Link /invest/strategies/dst/.
   Mid-page offer C (after entry 8): "Plan the sale and the next purchase with us before you list" → /contact/.

**3. "How much money do you need to start investing in real estate here?"** (the chart)
One chart, then two sentences. The chart's title is its message: "The ways in start far apart: from a $100,000 DST share to a $520,000 duplex". The sentences: the cash a lender asks for follows from the price and the loan, and our affiliated lender's figures are on the DSCR loan page; a DST share is the one way in under the price of a condo here, and only for accredited buyers (R27, R29, R37, R38). No down payment share on this page (PLAYBOOK A17).

**4. "BRRRR or flip, long-term or nightly, 1031 or DST: how do they differ?"** (the pairs people search)
Four lines, one sentence each, each ending in its link:
- BRRRR or flip: both start with a worn house; a flip sells it, BRRRR keeps it and refinances (BRRRR page).
- Fix and flip or rent: a flip pays once; a rental pays monthly and keeps the house (flip page).
- Long-term or nightly: "Our side-by-side runs the same home both ways" (/invest/str-vs-ltr/). No figures here; that page owns them.
- 1031 or DST: both put off the tax; a 1031 buys a rental you run, a DST buys a share someone else runs (DST page).

**5. "How does Chapter3 find investment deals here?"** (how we help)
Three short paragraphs: relationships that surface properties before they list (R3); the quiet sale (R2); a loan does not rule out an off-market deal (R39). One line: we filter out communities that ban rentals and read the HOA papers before you offer (R5). No superlatives. The offer: "Send me properties with the numbers run" (R4) → /contact/.

**6. FAQ** (open text, five questions)
- "What is the best real estate investment strategy for beginners?" Usually a long-term rental on a house, financed on its rent, because the numbers are the simplest to check (R6, R9). Then the conditions that change it.
- "Can you invest in real estate here without being a landlord?" A DST (R27 to R29), or any rental with a property manager (link /invest/property-management/).
- "Can Chapter3 help with the loan?" "Chapter3 finds and checks the property. Our affiliated lender, BrickWood Mortgage, a separate company, can quote the loan, or use your own lender." (R40.) No rate, no payment, no down payment share.
- "Which strategy suits an investor who lives out of state?" A long-term rental with a local manager asks the least of your time; a DST asks none. (R25 for the context sentence, once, if not used in entry 7; say it once only.)
- "Which strategies happen most here?" DSCR purchases and 1031 trades; BRRRR is the rarest (R1). Only if section 1's opening sentence is cut; otherwise drop this question (one fact, one place).

**7. Closing offer band.** "Send us an address, or tell us your cash and your goal." The kept promise ("We will run the rent, the expenses and the association documents before you write an offer, at no cost"). Button: "Send me investment properties with the numbers" → /contact/. Under it, a plain link "Or call 854.333.2135" (tel:).

Length: about 1,600 to 1,900 words. It is a hub for eight strategies; each entry earns its 60 to 90 words. Cut anything a child page says better.

## Visuals (each readable at a glance)

1. **The entry-price chart** (`G.bars`, from `chart-entry-prices.json`; never typed). Five horizontal bars, starting at 0: a DST share (usual minimum) $100,000; a condo $215,000; a house a flipper bought $265,000; a house $350,000; a duplex to fourplex $520,000. Name column "Way in", feature column a short source note ("usual minimum, SEC filings", "middle sale, county deeds"), value column "Middle price". The DST bar is drawn as `reference: true` (neutral), because it is an investment minimum, not a home price, and its label says "minimum". Caption: "The ways in start far apart: from a $100,000 DST share to a $520,000 duplex". Note: "Home prices: middle sale recorded in Horry County, October 2025 to September 2026. DST: the most common minimum in SEC filings over the same 12 months." Sources line below. One message, no legend.
2. **No other chart.** The guide in section 1 is text. No cards, no tiles row. One small glass label per group heading in section 2 is enough; skip icons if they add nothing.
3. **No photo** unless the writer has a licensed photo of a real Grand Strand duplex or a flip in progress (`tools/photos.js`); the strips carry the homes. If a photo is wanted, the shot list is one line for the photo partner: "a row of beach duplexes in Cherry Grove or Crescent Beach, from the street". Do not stall the build for it.

## Homes strips and feeds (owner, 2026-11-10: bold, personal, true)

- **Under the opening (the site's edge feed, MIX):** today "Rentals, distressed sales and duplexes for sale now". Propose a bolder true title: "This week's investment buys: rentals, fixers and duplexes". Because the page adds its own strips, the edge drops this feed unless `/invest/strategies/` gets `withStrips: true` in `idx-lib/feeds.js`. Lead's job (BUILD list).
- **After entry 2 (short-term rental):** `G.homes("str-garden-city-beach-condos", "Garden City Beach", "", "Best Airbnb opportunities in Garden City Beach")`. An existing place; the title is the owner's own example. Lead adds `/invest/strategies/` to its `pages`.
- **After entry 3 (small multifamily):** `G.homes("duplexes-around-myrtle-beach", "the Myrtle Beach area", "", "Two, three or four rents from one roof")`. An existing place (2 to 4 units, 25 miles around Myrtle Beach). True by definition. Lead adds `/invest/strategies/` to its `pages`.
- No third strip. Fixers already show in the edge feed (MIX includes distressed sales); a third strip would crowd the list.

## Offers (every button to /contact/ or #lead-form; the site opens the pop-up and sends the button's words)

| Where | Headline | Button | Href |
|---|---|---|---|
| Slim bar under the answer | Tell us your cash and your goal. We send properties that fit, with the numbers run. | Send me properties that fit | /contact/ |
| After entry 3 | We run the rent, the tax and the HOA rules on any address before you offer. | Have us run an address | /contact/ |
| After entry 6 | Worn houses priced under their fixed-up value, in the areas where rent is strong. | Get the worn-house list | /contact/ |
| After entry 8 | Selling a rental to buy the next one? We time the sale to the 45 and 180 days. | Plan my sale and next buy | /contact/ |
| Section 5 | Some of the best deals never list. | Send me properties with the numbers run | /contact/ |
| Closing band | Send us an address, or tell us your cash and your goal. | Send me investment properties with the numbers | /contact/ (plus "Or call 854.333.2135") |

No two offers use the same words. Six on a long hub is at the upper edge; if the page looks busy, drop the section 5 button (its paragraph links /contact/ in the text) before any other.

## Compliance checks for the writer

- No interest rate, no payment amount, no down payment percentage (the hub is not on `DOWN_PAYMENT_OK_PAGES`). "More money down than a home loan" is the furthest the hub goes.
- BrickWood only as "our affiliated lender, BrickWood Mortgage, a separate company". Chapter3 never lends.
- Never "344 homes" (R16 note). Never "1031 buyers" for R25. "Myrtle Beach area" for AirROI, never "the City of Myrtle Beach". The DSCR shares are for houses outside city limits.
- R13: no street name, no "no money down", label as his numbers.
- R2: vague form only.
- R19, R20, R21 are NEW in the small multifamily ledger and unverified: the verifier checks them here or waits for that page's pass.
- Fair housing: places are named by price, house age, distance to the ocean and rules, never by who lives there. No "family-friendly", "safe", "exclusive".
- Plain words, sentences of 28 words or fewer, no em dashes, no sentence starting with "So", no "Here is". No dates in body copy.
- "Each fact once": the $100,000 DST minimum appears in the description, entry 8 and the chart; the entry says it in words and the chart shows it. The chart caption and description are the only repeats.

## BUILD list for the lead (outside this page's folders)

1. **Spec:** the page has no spec; it is hand-built HTML. Build a new `specs/strategies.js` with mkpage and `tools/glass.js` (bars, homes, offer, homesCss). Data from `data/2026-11-b/invest-strategies/findings.json` and `chart-entry-prices.json`.
2. **idx-places.json** (`batches/2026-10-b/data/idx-places.json`, then regenerate `idx-lib/places.js`): add `/invest/strategies/` to the `pages` of `str-garden-city-beach-condos` and `duplexes-around-myrtle-beach`. No new place.
3. **idx-lib/feeds.js:** `"/invest/strategies/": { ...MIX, withStrips: true }`, and if the owner approves, MIX's head "This week's investment buys: rentals, fixers and duplexes".
4. **Referring pages** (today 6: /guides/, /invest/, the 1031, BRRRR, DSCR and small multifamily pages). Add a link in the text of /invest/strategies/fix-and-flip/ and /invest/strategies/dst/ (both have none), and of /invest/str-vs-ltr/ and /invest/airbnb-income/ on words already there ("other ways to invest here"). Target eight or more.
5. **/invest/:** its "Pick the strategy before you pick the property" section should end with one line linking this hub ("All eight strategies, compared"), and keep its own four short cards; it owns "Myrtle Beach investment property".
6. **BRRRR page (not this page):** it has no local market number since rows 1 to 3 were struck. A count of foreclosure-sale deeds could serve it once the Register of Deeds' document types are checked (facts.md, "Not used").

## Wrong-shape questions

- **Should this be a table of eight strategies?** No. Eight rows with five columns will not fit a phone, and the reader reads one strategy at a time. The guide list and the entries do the work; the chart carries the one comparison that reads as numbers.
- **Is the chart's message real?** Yes: the reader asks "how much money do I need", and the prices span five times from bottom to top. The DST bar is a minimum, marked neutral, so it is not read as a home price.
- **Does the hub compete with a child?** Each child gets one number and one hard part, never its formula, steps or table. The pairs section gives one sentence and the link. The H1 says "Grand Strand" and "strategies", not "investment property".
- **Is anything here only a device?** The "wow line" appears in three entries (2, 3, 8), where a true, striking fact exists; the others carry their number alone.
- **Is the top short?** H1, italic line, byline, two sentences, slim bar. The first entry is about two phone screens down, after a seven-line guide. If the guide plus "On this page" pushes it past that, fold "On this page" into the guide.
