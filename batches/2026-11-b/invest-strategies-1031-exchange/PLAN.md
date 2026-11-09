# Plan: /invest/strategies/1031-exchange/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-09. Inputs: `must-answer.md`, `facts.md` (48 rows: 20 carried from verified ledgers, 24 new and awaiting a verifier, 4 stories), the triage row, the cannibalization report (clusters 18 and 24) and the live page.

## Why it is being rebuilt

Triage: "The page sends away the one South Carolina fact a searcher needs." Its South Carolina section says the rate, forms and refund are on the capital gains page. Everything else is federal text any site has, with no local data. Search Console: 263 showings and 0 clicks in 28 days at position 14.6, about 170 of them for "South Carolina" plus "1031", and 2 for "sc i-295". The page never names the I-295.

**There is no spec.** The live page is hand-built HTML. The writer makes a new spec, `specs/1031-exchange.js` (author "devin", url `/invest/strategies/1031-exchange/`), built with `node tools/mkpage.js specs/1031-exchange.js`, reading `data/2026-11-b/invest-strategies-1031-exchange/findings.json`. `specs/dst.js` is the nearest model (approved by the owner, 2026-11-01).

## What the live page has that is worth keeping

- The title's searched words, "1031 Exchange in South Carolina".
- The plain names for the trade words: "the property you sell", "the property you buy", "a qualified intermediary, a neutral company that holds your money". Keep "relinquished" and "replacement" once each, because the forms use them.
- The numbered steps with what Chapter3 does at each one (LOCAL-4): before you list; the sale closes; days 1 to 45, shop on the numbers; day 45, the written list; the loan alongside; day 180. Each step is rewritten from rows 23 to 31.
- The plain wording of the three identification rules (row 28, same values).
- The tax-return cutoff and the extension note (row 24), and "the dates do not move" (row 36, reworded).
- The real stories: the New York investor with more than 200 properties, told as Tim's client (row 45); 1031 buyers as one of the largest groups we work with (row 46); the team working to both dates (row 47); judging a replacement on cap rate and tenant history (row 48, without the line about other brokerages).
- The reverse exchange basics and the name "exchange accommodation titleholder" (row 37).
- Links to /invest/how-long-to-hold/, /invest/cost-segregation/, /invest/long-term-rental/ (the analyzer), /invest/strategies/dst/, /sell/capital-gains/, /invest/strategies/dscr-loans/.
- The FAQ questions people search: does it work in SC; the deadlines; into several properties; who holds the money; delayed; reverse; can the deadlines be extended; from another state into SC. Answers rewritten from rows.
- The phone number 854.333.2135.

Cut: the eight items in facts.md "Struck from the live page", the "Why people do it / What can go wrong" boxes (they repeat the steps), the repeated sales paragraphs ("Speed is the reason the team matters", said three times), and "confirm with a tax advisor" in every answer (one line in the sources box).

## The reader and their decision

An owner of a Grand Strand rental, most often a condo, who lives in another state and is about to sell, or an investor from another state who wants to buy here with an exchange. They know a 1031 puts off the tax. They do not know that South Carolina holds back part of an out-of-state seller's money at closing, that one box on Form I-295 stops it, or that a late-year sale has less than 180 days. They fear losing the deferral on a technicality.

**Their decision:** exchange now through a qualified intermediary, and buy what here? Or sell and pay. **The job, in one verb:** follow the steps without missing a date, and keep the state from holding back their money. **Kind of page:** a how-to with deadlines (numbered steps and a timeline) plus a rule explainer for the state part (CRAFT 3). It runs long because the reader needs the state step, the clock, the list and the market; each section answers one searched question.

## The answer, in two sentences

A 1031 exchange works in South Carolina under the federal rules: name the replacement within 45 days of your sale and own it within 180. If you live in another state, the buyer must hold back 5.21 percent at closing unless your Form I-295 claims the exchange, and through a qualified intermediary nothing goes to the state.

(Rows 2, 7, 10, 19, 23. 25, 22 and 7 words. The third clause holds "if the exchange is completed" in the section below; the writer may move it there if the sentence reads as a promise.)

## Title, H1, description, keywords

- **Title (58 characters):** `1031 Exchange in South Carolina: Rules, 45/180 Days, I-295`. The searched words first, then two facts the page gives. Plus the site suffix if mkpage adds it.
- **H1:** "1031 exchange in South Carolina: the rules, the clock and the state's hold-back". Says the same as the title.
- **Hero sub-header (no we, our or us; 8 to 30 words):** "South Carolina follows the federal 1031 rules. An out-of-state seller meets one state step at closing: a 5.21 percent hold-back that the exchange box on Form I-295 stops."
- **Description:** "1031 exchange in South Carolina: the 45 and 180 day rules, the Form I-295 exchange box that stops the 5.21% hold-back, a Myrtle Beach example and what to buy."
- **Keywords:** 1031 exchange South Carolina; South Carolina 1031 exchange rules; SC I-295 1031; 1031 exchange 45 day rule; 1031 exchange 180 days; 1031 exchange Myrtle Beach; South Carolina reverse 1031 exchange; delayed 1031 exchange; 1031 exchange vacation home; 1031 exchange properties for sale Myrtle Beach. Not "South Carolina nonresident seller withholding" (owned by /sell/capital-gains/).

## Sections in order (question headings people search)

"On this page": Answer, Hold-back, Example, Deadlines, Day-45 list, What to buy, Vacation condo, Cash kept, The loan, Reverse, FAQ.

1. **Hero.** H1, byline, sub-header. Three key-fact chips with words: "45 days to name it, 180 to own it" (row 23); "5.21% held back from out-of-state sellers" (row 2); "Form I-295, box 16, stops it" (row 7).

2. **Does a 1031 exchange work in South Carolina?** First screen. The two-sentence answer. One more line: the state uses the federal code and taxes the deferred gain only when you sell without exchanging (row 19). Slim offer bar: "Plan the exchange with us before you list." The site's edge feed sits under this opening (feeds.js: "Rented now: income property from $400,000"), which fits a replacement buyer and the example's $376,000. Keep it.

3. **How does a 1031 exchange stop South Carolina's withholding at closing?** The section the triage asked for. Order:
   - The rule in one sentence: when the seller's home is in another state, the buyer must hold back 5.21 percent for a 2026 sale; the closing attorney usually sends it in (rows 1, 2, 17). Of the gain with the I-295, of the price less selling costs without it (rows 1, 4). A corporation: 5 percent (row 3). Never more than the cash due to you (row 14).
   - A tax-deferred exchange is not a "sale" for this rule (rows 5, 6).
   - The I-295's item 16 and its three boxes, in plain words, as a short list: a swap on the same day; an exchange where you keep some cash (the cash part is withheld); an exchange through a qualified intermediary (rows 7, 8).
   - What happens with the intermediary box, as four short numbered steps: you tick the box and sign before a notary; the I-290 is filled in as if the sale were taxed and handed to the intermediary with the amount; the buyer and the intermediary sign that the intermediary pays if the exchange fails; finish the exchange and nothing is filed or paid (rows 10, 12, 16).
   - If you skip the intermediary: you can pay the hold-back from other money so the whole sale goes into the exchange, and ask for it back once it is done (row 9). One line on the refund, with the link to /sell/capital-gains/ (row 13).
   - What we do: we put the exchange on the contract and send the closing attorney's office and your intermediary the same dates (row 47 and the live page's step 2). No promise that a named person handles it.
   - Not here: the general withholding refund steps and the capital gains rates (owner: /sell/capital-gains/).

4. **Example: an owner in another state sells a Myrtle Beach condo.** Labelled "Example". Row 43, written as a situation, the result in words: "With no form, about $19,600 is held back. With the form stating the gain, about $9,700. With the exchange box and an intermediary, nothing goes to the state." Then: "To put off all of the tax, the next property costs $376,000 or more." Then the cash-kept line (row 43). The chart (Visual 1) sits under the paragraph. Mid-roll offer after it: headline "Selling a Grand Strand rental from another state?", one sentence "We plan the closing around your exchange, with the form and the dates in place before the buyer signs.", button "Have us plan the closing". The writer checks the sentence against what the team does; if unsure, the owner question is one line.

5. **What are the 1031 exchange 45-day and 180-day rules?** The timeline (Visual 2) first, then the numbered steps kept from the live page, each with what we do (rows 23, 27, 30, 31, 47, 48).
   - Both clocks count calendar days from the day the sale closes, and run together (row 23).
   - The return date can come first: a sale that closes after mid-October has its 180th day after April 15; file an extension to keep the full 180 (row 24).
   - The dates move only with IRS disaster relief. After Hurricane Helene, every South Carolina county got it, exchanges included (row 36). One sentence, no promise.
   - The date tool (Visual 3) at the end of the section.

6. **How do you name replacement properties by day 45?** In writing, signed, sent to the intermediary; telling your own agent or attorney does not count (rows 27, 31). Describe each by address or legal description (row 27). The three rules as a three-item list (row 28). You can change the list before day 45, in writing only (row 29). Our part: two or three strong picks and a backup, judged on rent, cap rate and tenant history (row 48). Mid-roll offer: "Have us build your day-45 shortlist" / "Send the price range from your sale; we send back the strongest picks and a backup." Button "Start my shortlist".

7. **What can a 1031 exchange buy on the Grand Strand?** The local findings. Order:
   - One line: buyers from other states bought 54 percent of the condos sold in Horry County in the past year (row 40), and 1031 buyers are one of the largest groups we work with (row 46).
   - The table (Visual 4): what is for sale in Horry County today by kind of home, and what each kind sold for in the past year (rows 41, 42).
   - What it means for the example's $376,000, in one sentence each: 471 condos and 1,720 houses ask that much or more; buildings with 2 to 4 units are scarce, 51 for sale, most above $600,000 (row 42). Splitting into two or three condos is allowed by the three-property rule (row 28). Link /invest/strategies/small-multifamily/ and /invest/condos/ once each. Cap rates: one line and the link to /invest/rental-returns/. The analyzer: one line and /invest/long-term-rental/.
   - The 200-property client, told as Tim's client, two or three sentences (row 45). Then one line linking /invest/how-long-to-hold/ and /invest/cost-segregation/, which the live page already has.
   - Homes strips, here and nowhere else on the page (see "Homes strips").

8. **Can you 1031 exchange a vacation condo you also use?** Rows 34, 35. Many Grand Strand condos are rented by the week and used by their owner a few weeks a year. The IRS safe harbor, in one plain paragraph: owned 24 months; each year, rented 14 days or more at a fair rent and used yourself no more than 14 days or 10 percent of the rented days. The same test on the condo you buy, for 24 months after. A home you only live in does not qualify; the home-sale exclusion is on /sell/capital-gains/. Mid-roll offer: "Have us count your rental and personal days" is not a service we can promise; use "Want rental-ready condos for the replacement? Tell us your budget." Button "Send me rental condos".

9. **What happens if you keep some of the cash?** Rows 25, 11, 43. The cash you keep is taxed, up to your gain. The state holds back 5.21 percent of that part only; the intermediary sends the state a corrected form (row 11). In the example, keeping $30,000 means about $1,560 held back. Federal tax applies too; the rates are on /sell/capital-gains/ (link). A smaller loan on the new property counts like cash kept (DST 7), one sentence.

10. **How do you finance the replacement inside 180 days?** Short. The loan has to close inside the same 180 days, so the lender starts during the search (live page, step 5). "Our affiliated lender, BrickWood Mortgage, a separate company", or your own lender. A DSCR loan qualifies on the rent: one line and the link to /invest/strategies/dscr-loans/. No rate, payment or down payment.

11. **How does a reverse 1031 exchange work in South Carolina?** Short, rows 37 and 23. Buy first; a company your intermediary sets up holds title; the agreement within 5 business days; the same 45 and 180 days. Nothing about cost or lenders without a row. One line for the hands-off option: /invest/strategies/dst/.

12. **The end offer band.** Site component. Headline "Trading a rental for one here?" Button "Talk through your exchange", phone button.

13. **Frequently asked questions** (open text, each answer from rows; no FAQ repeats a section's sentence):
   - Do I have to buy in the same state? No; any US real property is like-kind to any other (row 26).
   - Can I exchange into a DST? Yes, one line and the link (row 38).
   - Can I 1031 into a home I will live in? A home used only as your own does not qualify; rental use first is the safe-harbor test (rows 34, 35). No five-year figure without a row.
   - Can I exchange with a family member? The two-year rule (row 32).
   - Does South Carolina tax the gain later? Yes, when you sell without exchanging; it follows the federal rules (rows 19, 20). One line, link to /sell/capital-gains/ for the amount.
   - My LLC owns the condo. Is it withheld? An LLC taxed as a partnership is withheld at the individual rate; a corporation at 5 percent (row 3). The resident and business boxes (row 18), one sentence.
   - I am Canadian. Is there another hold-back? Yes, a federal one; one line and the link to /invest/canadian-buyers/.
   - Who reports the exchange? You, on Form 8824 with your return (row 33).

14. **Sources box.** IRC 1031 and 6072, 26 CFR 1.1031(k)-1, Rev. Proc. 2008-16, Rev. Proc. 2018-58, IRS release SC-2024-08, Form 8824 instructions, SC Code 12-8-580, 12-6-40, 12-6-50, 12-6-1150, SCDOR Forms I-295 and I-290, SC Revenue Ruling #09-13, SCDOR's H. 4216 page, Horry County deed and parcel records, our count of active listings with the day it ran. One line: "We are not tax advisers; your intermediary and tax adviser confirm the exchange."

The 200-property story sits in section 7 (it is the reason a reader trusts us with the replacement), not at the end. The page carries one story.

## Visuals (each readable at a glance, built from findings.json)

1. **Bar chart, horizontal, four bars.** Title: "What South Carolina holds back when you sell a $400,000 condo". Bars: "No form: about $19,600"; "Form with your gain: about $9,700"; "Exchange keeping $30,000 cash: about $1,560"; "Full exchange with an intermediary: $0". Labels on the bars in words and dollars; no axis numbers. One line under it: "Example. Sold from another state in 2026; bought for $250,000; $60,000 of depreciation taken." Built with glass.js `bars()` from `worked_example`.
2. **Timeline drawing, one line.** Day 0 "Your sale closes" to day 45 "Your list is due" to day 180 "You own the new property". A small marker on the line: "April 15 comes first for a sale after mid-October". No calendar dates. Plain SVG, no icons fighting the line. If it reads as busy on a phone at 375 px, use three stacked rows instead.
3. **A two-field date tool.** "Your closing date" (date input) gives "Day 45" and "Day 180" as dates, and, if day 180 is after the next April 15, the line "File a tax extension to keep the full 180 days." Answers "1031 exchange 45 day calculator" and "timeline calculator" (suggestions). It opens with the answer for today's date, computed in the browser, so no date is typed in the page. No other inputs. Script inside the spec's template string: no backslash escapes (VERDICTS 2026-10-26).
4. **Table, four rows.** Title: "What an exchange can buy in Horry County". Columns: Kind of home / For sale now / Middle asking price / Asking $376,000 or more / Middle sale price, past year. Rows: Condos 2,694 / about $215,000 / 471 / about $215,000; Houses 2,929 / about $420,000 / 1,720 / about $350,000; Townhouses 307 / about $265,000 / 58 / n.a.; 2 to 4 units 51 / about $680,000 / 44 / n.a. A caption with the day the count ran, taken from findings.json `meta.listings_pulled`, and the offer to run it again. Cards on a phone. If the past-year column makes the table busy, drop it and keep one sentence.

No photo is needed. A photo of a condo tower would claim nothing the copy says (CRAFT 4). The homes strips carry the pictures.

## Homes strips

The owner (2026-11-08): the strip is the strongest offer; show the homes where the page talks about a kind of home. Section 7 is that place.

- **Strip 1:** "Buildings with 2 to 4 units for sale on the Grand Strand." Needs a new entry in the website's `idx-places.json` (`type: "multi"`, near the middle of Myrtle Beach, a wide radius). That file is shared and outside this page's folder: the lead adds it, or tells the writer to.
- **Strip 2:** "Condos rented now, ready for an exchange buyer." A place entry with `type: "condo"`; the lead checks whether a place query can carry `has` or `min` (seen keys today: near, miles, subdivision, type, hoa). If not, "Condos for sale near the beach in Myrtle Beach" with type only.
- Each strip keeps the "Send me homes" button as its fallback (glass.js `homes()` fallback), never as the main offer.
- The edge feed under the opening stays as it is.

## Offers

Five, never the same words twice (CTA-1, H5):
1. Slim bar under the answer: "Plan the exchange with us before you list."
2. After the example: "Have us plan the closing".
3. After the day-45 list: "Start my shortlist".
4. Section 7: the two homes strips, each with its fallback button.
5. End band: "Talk through your exchange", and the phone button 854.333.2135.

## Siblings and links

- Links out, once each, on the words: /sell/capital-gains/ (refund steps, rates, home exclusion), /invest/strategies/dst/, /invest/how-long-to-hold/, /invest/cost-segregation/, /invest/rental-depreciation/ (the depreciation that a sale recaptures), /invest/rental-returns/, /invest/long-term-rental/, /invest/condos/, /invest/strategies/small-multifamily/, /invest/strategies/dscr-loans/, /invest/canadian-buyers/, /invest/strategies/ (up to the hub).
- Referring pages today: 13 (`node tools/inbound.js <site> --only /invest/strategies/1031-exchange/`: /guides/, /invest/, /invest/cost-segregation/, /invest/how-long-to-hold/, /invest/llc/, /invest/rental-depreciation/, /invest/strategies/, /invest/strategies/dst/, /sell/capital-gains/, /sell/rental-property/, /submarkets/murrells-inlet/, /submarkets/pawleys-island/, /why-chapter-3/). Over 6; no new links needed. Re-run after the build.
- Cannibalization fixes on siblings (from the report; not this page's edit): /invest/strategies/dst/ drops the keyword "sell rental property Myrtle Beach 1031"; /invest/how-long-to-hold/ drops "1031 exchange holding period". This page's H2 on withholding names the exchange, so it does not compete with /sell/capital-gains/ for the generic withholding search.

## For the lead

- facts.md row 4: the ledger for /sell/out-of-state-buyers/ (OOS 31) says the no-form hold-back is "of the whole price" ($400,000 x 5.21% = $20,840). Its live page is right: "5.21% of price minus selling costs, under $20,840". The ledger wording only; no page change.
- The verifier opens SC Code chapters 12-8 and 12-6 in a browser (a plain fetch from this session returned 404) and confirms rows 1, 5, 17, 19, 20 against the live text.
- Listing raw data (MLS numbers, points) is kept outside the repo at `<scratchpad>/raw-1031/listings-active.json`; the repo holds only findings.json and raw/listings-prices.json (type, price, inside the county).
