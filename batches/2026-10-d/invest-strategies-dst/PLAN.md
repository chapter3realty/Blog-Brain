# Plan: /invest/strategies/dst/

Batch 2026-10-d, Lane U. Research stage, 2026-11-01. Inputs: `must-answer.md`, `facts.md` (27 rows, all pending verification), `OWNER-QUESTIONS.md`, the judge's entry in `audit/judged-2026-10-31.json`, audit item 10. The live page is hand-made (no spec); the writer builds `specs/dst.js` with mkpage, which also brings the new listing-search sentence from the donor chrome (SWEEP, "For the other helpers").

## The reader and their job

A landlord with a Grand Strand rental, often held for many years and often from out of state, who is tired of managing it. Someone has told him a DST lets him sell, put off the tax and never take a tenant's call again. His job is to **decide**: is a DST right for this sale, or is it a sales pitch? He worries about being locked in, about fees, and about whether he even qualifies. He will ask next: what would I actually pay, and how do I get my money out?

A second reader: a 1031 buyer whose replacement search is going badly, who has heard a DST can rescue the exchange.

What he would pay an expert to tell him: the real cost against the real tax saved, in dollars, and what he gives up.

## The deciding fact

Checked first: IRS Revenue Ruling 2004-86 lets a taxpayer trade real property for a share of a Delaware statutory trust in a 1031 exchange, if the trust stays inside the ruling's limits (facts rows 1 to 4). The page names the ruling.

The deciding fact for the reader is the trade, in dollars: on the site's standard example sale (/sell/capital-gains/), a DST puts off about $39,300 of tax, and at the median sales commission about $22,600 of the money going in pays commissions, before the sponsor's other fees (row 24). That sentence is the hinge of the page.

## Unique findings (no other page has these)

1. **Our count of 160 DST offerings filed with the SEC in the 12 months to September 2026** (SEC Form D data, rows 13 to 16): the usual minimum was $100,000 (57 of 156), 159 of 160 took no non-accredited investor, and sales commissions alone came to 6 percent of the money raised in the middle filing, 9 percent or more in 20 of 144. Built by `formd_dst.py`; nobody publishes this from the filings.
2. **The commission against the tax, for one Grand Strand sale** (row 24): more than half the tax put off goes to sales commissions. FINRA's own warning that fees can offset the tax saved (row 12) backs the framing.
3. **DSTs already own the Grand Strand** (row 25): at least 10 trusts own 11 Horry County parcels the county values at about $200 million, including two large apartment communities, one on Carolina Forest Boulevard; six of the ten bought since November 2024.
4. **The landlord this page is for** (rows 26 and 27): 1 in 4 Horry County homes, and more than half of its condos, are owned from out of state; 9,192 of those homes last changed hands more than 15 years ago.
5. **The REIT buy-back trap** (rows 17 to 19): some DSTs sold by large REITs can turn your shares into REIT partnership units after two years, at the sponsor's choice, and units cannot be used in a later 1031 exchange.

## Shape

A **decision guide built around a comparison** (`reports/Page shapes by kind of page.md` sections 9 and 4; CRAFT 3). Main relation: options. The reader chooses among three roads for one sale, so the comparison table is the visual that does the work, and the verdict by situation leads.

First screen on a phone: H1, byline, two-sentence answer, a row of four key facts with words. Nothing above the answer.

## Title, description, H1

- Title tag: `DST 1031 Exchange: Rules, Fees, Pros and Cons | Chapter3 Realty` (search words: DST, 1031 exchange, rules, fees, pros and cons). Writer checks the scorer's title length.
- Meta description: "A Delaware statutory trust lets you sell a rental, put off the tax and stop managing. What it costs, who can buy one, and what you give up, from 160 SEC filings."
- H1: `Delaware statutory trust (DST): a 1031 exchange with no tenants`. The first sentence answers; the H1 names the subject and the trade.
- Byline: the 1031 page's (Devin Day, reviewed by Tim Nash), dates by `build.js dates` (lead), pending owner question 1.

## Sections in order, and what each proves

0. **Short answer and key facts.** Two sentences: what a DST is and the trade ("You sell your rental, put the money into a share of a large property a sponsor runs, and the tax stays put off. In return your money is locked in until the sponsor sells, you have no say, and fees come out first."). Verdict with conditions in one more sentence: fits a landlord who is done managing, meets the SEC's wealth test and will not need the money for years. Key facts row (icon chips with words): "Accredited investors only" (row 14), "Usual minimum $100,000" (row 15), "Sales commission about 6%" (row 16), "Money locked until the trust sells" (rows 5, 11). Then a slim offer bar (CRAFT 3 "Measure the top"): "Selling a Grand Strand rental? We plan the sale around your exchange deadlines."

1. **Three roads for one rental sale** (proves: what each choice costs and gives, in dollars). Comparison cards (`compareCards`, three cards on a phone, a table on desktop): Sell and pay the tax / 1031 into another rental here / 1031 into a DST. Rows, short cell text: tax now; work each month; who decides; when you can get the money; who can do it; what it costs to enter; what happens at the end. Under it, the worked example in four short sentences (row 24, numbers from `worked_example.json`): the gain, the tax put off, the commission on the same money. Then "Which one fits": three or four lines ("Choose a DST if ...", "Choose another rental if ...", "Pay the tax if ...", "Keep it and hire a manager if ..." linking /invest/property-management/ and /invest/how-long-to-hold/). The fourth road earns us nothing; it is on the page because a decision page gives each option fairly (page shapes 9, IPDAS).

2. **What a DST is, and why the IRS allows it** (proves: the deciding rule). Revenue Ruling 2004-86 in plain words (row 1); you are taxed as owning a slice of the building, so your share of rent and depreciation is on your return (row 2); owners are not liable for the trust's loan (row 6). The money-path diagram goes here (visual 2). Answers "is a DST a REIT": no; a REIT share is stock, a DST share is treated as real property (rows 2, 8).

3. **The seven limits, and why your money is locked** (proves: the cost of "hands-off"). A numbered list, each limit in one line and what it means for the owner (row 3): no new money, so a big repair cannot be paid by raising cash from owners; no refinancing; no new leases; no selling one building to buy another; cash parked only in short-term bonds; cash paid out on a schedule; only minor changes to the building. Then the trap in one sentence: give the manager more power and the IRS calls it a partnership, and the 1031 fails (row 4). Says "seven deadly sins" once, as the trade's name for them (row 3, Not verified 6).

4. **Who can buy one** (proves: whether the door is open). The accredited test in one sentence (row 9), the home not counted. 159 of 160 filings took no non-accredited investor; under Rule 506(c) the seller must check (rows 10, 14).

5. **What it costs: what 160 SEC filings show** (proves: the unique finding). Chart A, minimums (row 15). Chart B, sales commissions as a share of the money raised (row 16). Text: the commission is only the part the form shows; the sponsor's other fees are in the offering memorandum (Not verified 2). FINRA's warning that fees can eat the tax saved (row 12), stated as the regulator's warning about these products' forerunner.

6. **How you get your money out** (proves: the exit, the horror-story question). No date you choose; the sponsor decides when to sell (row 3 limit 4, row 5). The SEC's own words in plain form: highly illiquid, may have to hold indefinitely, can lose it all (row 11). When the trust sells: exchange again, with new 45 and 180 day clocks, or pay the tax (row 8). The REIT buy-back: after two years some sponsors can swap your shares for partnership units, and units cannot go into a later 1031 (rows 17 to 19). At death: heirs' basis steps up, the same as for a rental you keep (row 20).

7. **A DST as a 1031 backup** (proves: the second reader's answer). Only if it is on the day-45 list (row 8). If your rental had a mortgage, the debt paid off counts like cash unless replaced; a DST's own loan can count toward it (row 7). Link to /invest/strategies/1031-exchange/ for the deadlines in full.

8. **The landlord this page is for, and DSTs that already own here** (proves: local, first-hand data). Two short paragraphs and visual 4 (rows 26, 27): 1 in 4 homes and more than half of condos owned from out of state; how long they have held. Then row 25: DSTs own apartments, stores and industrial buildings here, about $200 million by the county's values. Optional: the recorded story `tenant-occupied-sale-13-days`, told exactly as recorded (owned 15 years, moving to New York to be with his sister, did not want to manage from far away or pay someone else to, cash buyer closed 13 days after listing), only to picture the reader; no word on what he did with the money. It is published on /sell/rental-property/; use it only if the writer judges the page needs a person, and in a shorter retell.

9. **The good and the hard** (`prosCons`), each from a row, each hard point with what to do about it. Good: tax put off (1), no management (3), owners not liable for the loan (6), depreciation still yours (2), step-up at death (20). Hard: money locked (5, 11), no say (3), commission before other fees (16), accredited only (9), a single-tenant trust cannot re-lease freely (3), the REIT unit trap (17, 18).

10. **What Chapter3 does** (proves: the offer is real). We sell the rental, time the listing to the exchange, work the dates with the qualified intermediary and the closing attorney, and handle the South Carolina withholding affidavit (link /sell/capital-gains/). We do not sell DST shares or advise on securities; a licensed securities professional does. We take no fee from any DST seller (owner question 2). Offer box (the same component as the top bar's full version): "Plan the sale of your rental around your exchange." Link /sell/rental-property/.

11. **FAQ**, open text, each answer names the subject in its first sentence: What does DST stand for? Is a DST the same as a 1031 exchange? Is a DST a REIT? What is the minimum to invest in a DST? Can I sell my DST shares early? Can I do a 1031 out of a DST? Do I still get depreciation? Are DSTs safe? Can Chapter3 sell me a DST?

12. **Sources line**: IRS Rev. Rul. 2004-86 (IRB 2004-33); 26 U.S.C. 1031, 721, 1014; IRS Form 8824 instructions; IRS Topics 409 and 559; SEC accredited investors, Rule 506(b), Rule 506(c); SEC investor bulletin on Regulation D; FINRA Notice 05-18; SEC Form D data sets (our count, 2025 Q4 to 2026 Q3); Horry County GIS parcels (our count); S.C. Code 12-6-1150; SCDOR on H. 4216. "On this page" list (12 sections).

## What the judge asked for, and where it is solved

| Judge's problem | Solved in |
|---|---|
| The generic, loose expert quote ("shield and defer any taxation", REIT comparison) | Removed (owner question 1); section 2 says what a DST is precisely and answers "is a DST a REIT" |
| No numbers to plan with: hold period, fees, worked comparison | Sections 1 and 5 (worked example, 160 filings); hold period: the page says no date is yours to choose and gives the SEC's warning, because no primary source gives a typical hold (Not verified 1) |
| Rev. Rul. 2004-86 not named; accredited test not defined | Sections 2, 3, 4 |
| Almost nothing local; the oceanfront rental-program listing strip | Section 8 (county data); the listing strip is removed. The reader is a seller; the offer is the sale |
| Title and H1 fail the scorer; no Article schema, sources, outbound links; long quote paragraph | New title and H1; Article (author, reviewer, image from `tools/ogcard.js`), BreadcrumbList, FAQPage; sources line; outbound links to every primary source; no paragraph over the long-paragraph limit |
| "NOT" in capitals; "tenants, toilets, and 2 a.m. phone calls" | Both cut |

Ideas taken: the three-way table (section 1), the accredited one-liner (4), the limits in plain words (3), the out-of-state owners and hold length (8), the listing strip removed.

## Kept from the live page

- The FAQ questions "What does DST stand for?", "Is a DST the same as a 1031 exchange?", "Can Chapter3 set up a DST for me?" (answers rewritten; the last no longer sends readers to the guest).
- The line that Chapter3 does not sell DST shares and coordinates the closing with the qualified intermediary.
- The "Why people do it / What can go wrong" boxes, replaced by the fuller good-and-hard list from rows.
- The traditional-1031 against DST comparison, grown into the three-road table.
- Links: /invest/strategies/1031-exchange/ (the live page links it three times; once in copy plus the FAQ is enough), /sell/capital-gains/, /sell/net-proceeds/, /invest/strategies/ hub.
- Headline: `data/headlines.json` has no entry for this page; no owner-liked headline to keep.
- No calculator, tool, real story or verified number on the live page. Its "$100,000 commonly" is now backed by row 15; its "$25,000 to $50,000 mostly reserved for cash investors" is cut (Not verified 3).

## Removed

The guest paragraph, his name in the byline, his phone and website, the Cetera disclosure (all pending owner question 1). The oceanfront listing strip. "Talk to an agent" footer offer wording is replaced by the page's own offer. Any old listing-search sentence about off-market homes (SWEEP); mkpage's donor chrome brings the new one. The unsourced line "Many of the landlords Chapter3 has sold for on the Grand Strand fit the first description" (no story backs it). "Our agents on the Grand Strand meet that landlord every month" (no story backs it).

## Visuals

1. **Three roads comparison** (section 1). `compareCards` from `specs/_kit.js`, three options, seven rows. Our own; no licence needed.
2. **The money path** (section 2). Our own inline SVG, five boxes left to right on desktop, top to bottom on a phone: Your rental sells (day 0) → the money goes to the qualified intermediary, never to you → by day 45 you name the DST (and any backups) in writing → by day 180 the intermediary buys your DST share → the trust pays you rent on a schedule, and the sponsor decides when to sell. Labels from rows 1, 3, 8. Liquid-glass style per `tools/glass.js` tokens.
3. **Chart A and Chart B** (section 5). `G.bars` from `tools/glass.js`, built from `data/2026-10-d/invest-strategies-dst/formd_dst_summary.json` (`extra.min_buckets`, `extra.fee_buckets`), never typed. Chart A: "Minimum investment in 156 DST offerings" (five bars). Chart B: "Sales commissions as a share of the money raised, 144 offerings" (four bars), with a note that other fees are not on the form.
4. **Out-of-state owners and how long they have held** (section 8). Three key-figure tiles or one small `G.bars` (10+, 15+, 20+ years) from `horry_owners.json`.
5. **Photos.** The judge: "Not much needed." The page's pictures are its own diagram and charts. One photo only if it carries the sentence beside it:
   - Preferred: the photo partner's shot of the DST-owned apartment community on Carolina Forest Boulevard, from the public road, beside row 25's sentence. Caption: "An apartment community on Carolina Forest Boulevard owned by a Delaware statutory trust." No name of the community or the sponsor.
   - Free-licence stand-in for the out-of-state condo sentence (row 26), already licensed on the site: `images/buyers/no-hoa/surfside-beach-houses-from-the-sand.webp` (CC BY-SA 4.0, record in `data/2026-10-b/photos.json`, via `photoSetB`). It shows beach houses, not condos; use only beside a sentence about homes owned from out of state, or not at all.
   - Wikimedia Commons candidates looked at full size on 2026-11-01: `File:Myrtle Beach, South Carolina 02.JPG` (https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_South_Carolina_02.JPG, CC BY-SA 4.0, Elisa.rolle): a row of raised three-story beach houses on a Myrtle Beach street, with a rental company's sign on one; crop the sign out or do not use. `File:Myrtle Beach, South Carolina 13.JPG` (https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_South_Carolina_13.JPG, CC BY-SA 4.0, Elisa.rolle): one raised wooden beach cottage. Neither shows a fact on this page; both are fallbacks only. Commons rate-limited the API after a few calls; the writer confirms each licence on the file page before use and writes the licence record for `tools/photos.js`. New files go only under `chapter3realty/images/2026-10-d/invest-strategies-dst/`.
   - Share image: an OG card from `tools/ogcard.js` (the live page has none; audit T16).

## Photo partner shot list (send from the owner's Gmail with `templates/photo-request-email.md`)

For the page on DSTs, to show readers that trusts of this kind already own buildings here. Most wanted first. All from public roads or sidewalks; no faces, plates, house numbers or signs as the subject.

1. **Apartment community on Carolina Forest Boulevard** (map: https://www.google.com/maps/search/?api=1&query=33.7643,-78.8891). The buildings from the public road at the entrance, landscape, three shots. The entrance sign may be in the frame, small, or out of it.
2. **Apartment community in the Clear Pond area** (map: https://www.google.com/maps/search/?api=1&query=33.7971,-78.9444). Same as 1.
3. **A row of older condo buildings seen from a public beach access or sidewalk in Myrtle Beach** (any block of Ocean Boulevard). For the sentence that more than half of the county's condos are owned from out of state. Wide, buildings only.

## Links

- Out (in sentences): /invest/strategies/1031-exchange/ (deadlines, identification), /sell/capital-gains/ (the tax and the withholding affidavit), /sell/rental-property/ (selling with a tenant in place), /invest/rental-depreciation/ (why depreciation runs out), /invest/how-long-to-hold/ and /invest/property-management/ (the fourth road), /invest/strategies/ (hub).
- In: already from /invest/strategies/1031-exchange/, /sell/capital-gains/, /invest/, /invest/strategies/. Proposed for the lead: one sentence link from /sell/rental-property/'s 1031 paragraph ("or put the money into a DST and stop managing"). Not edited here (shared files rule).

## Compliance notes for the writer

- No return figure, no interest rate, no payment amount. The commission is a share of money raised, not a payment the reader makes; say "about $22,600 of it pays sales commissions".
- Name no sponsor, trust, REIT or building (researcher rule 9). Rows 17, 19 and 25 hold names for the verifier only.
- Chapter3 is not a broker-dealer: no "we recommend this DST", no "we check the offering". The page tells the reader what to ask a licensed securities professional only where we cannot check it ourselves (securities documents), which is the honest form of "we do the work".
- No fair-housing words; describe how an owner uses a property, never who the owner is. "Owned from out of state" describes the owner's mailing address, which is fine.
- Devin Day only in the byline; no Paul; Tim Nash quoted nowhere (no recorded quote on DSTs).
- One value per fact across the site: the tax figures match /sell/capital-gains/ exactly ($186,000 gain, about $33,900 federal, about $5,400 South Carolina).
