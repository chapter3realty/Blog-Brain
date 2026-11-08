# Plan: /buyers/new-construction/builders/

Batch 2026-11-n, Lane N (new page). Research by the research helper, 2026-11-08. Ledger: `facts.md` (25 rows, all awaiting a verifier; use only rows marked `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-n/buyers-builders/` (`findings.json` is the one file charts and tables read). Spec to write: `specs/buyers-new-construction-builders.js`. Design to copy: the four approved pilots (`batches/2026-11-a/{sell-fsbo,submarkets-pawleys-island,hoa-liens-and-foreclosure,invest-condos}/DESIGN.md`).

## The reader and their job

A buyer, often from another state, who has driven past model homes and wants to know which builders matter here. They know D.R. Horton or Lennar from home and have never heard of Mungo, Beverly, Chesapeake or Great Southern. Their job: **pick two or three builders worth visiting**, by where they build and what their homes cost, and walk in knowing what to ask. They are worried about quality and about being pushed into the builder's lender.

What they would pay an expert to tell them:
- who really builds the most here, not who advertises the most;
- which builders build in the town and price they want;
- who is behind an unfamiliar name on a sign, a deed or a contract;
- what each builder puts in writing (warranty, its own lender), and what to ask before signing.

## The deciding fact (checked first)

The builders can be counted by name from county deeds for the latest 12 months: 5,280 of 17,778 home sales from November 2025 to October 2026 were a builder's sale to a first owner, and 17 builders sold 50 or more (rows 1, 2). That count is the page's spine. Without it the page is a list of names.

## Findings no other site has

1. **Our own count of new homes sold by every builder in Horry County, from county deeds** (rows 1 to 3): the ranking, each builder's middle price and middle half. D.R. Horton 1,397, Lennar 967, Ryan Homes 477, Pulte 382, Meritage 313. Nobody publishes this.
2. **Who builds where, town by town** (row 4): the builders that sold most in each mailing town, with the town's middle builder price. Conway is D.R. Horton's (678 of 1,479); Longs is split between Lennar, Meritage, D.R. Horton and Ryan; Aynor is Starlight's.
3. **What the listings miss** (row 8): Ryan Homes sold 477 homes here and had 1 in the MLS feed; H&H sold 88 and had none. A buyer who searches listings sees only part of the market.
4. **The names behind the signs** (rows 11 to 15): Ryan Homes is NVR; Mungo is Clayton Properties Group (Berkshire Hathaway); Great Southern Homes became part of Stanley Martin on May 4, 2026; Starlight is Ashton Woods; Chesapeake's deeds name a separate company for each community (row 15, if verified).
5. **Warranty and lender side by side, from each builder's annual report** (rows 16 to 24): the stated warranty and how many of its buyers used its own mortgage company, for eight builders that file with the SEC. Each figure exists in a 10-K; no one has put them in one table for this market.

## Title tag, H1, description

- **Title tag (55 characters):** `New Home Builders in Myrtle Beach, Ranked by Homes Sold`. Starts with the top search ("new home builders myrtle beach") and adds the one fact that makes the page different: a ranking from records, which is true and says nothing about quality. If the build adds " | Chapter3" (66 total), the lead decides whether to drop the suffix on this page. Alternative with a number (54): `New Home Builders in Myrtle Beach: Who Sold 5,280 Homes`; the number is Horry County, so the H1 sub line must say Horry County.
- **H1, line 1:** "New home builders in Myrtle Beach, ranked by homes sold"
- **H1, italic sub line (about half size):** "Who built the 5,280 new homes sold in Horry County in a year, where, and for how much" (number read from `findings.json`).
- **Hero sub-header (no we, our or us):** "Counted from county deeds: every builder that sold 50 or more homes, the towns it builds in and what its homes cost."
- **Description (about 150 characters):** "D.R. Horton and Lennar built about 45% of the new homes sold around Myrtle Beach last year. Every builder, its towns, prices, warranty and own lender."

## Page shape

A **ranked list with a comparison**: the main relation is **options** (builders) measured by **amount** (homes sold) and **place** (towns). Not a list of places with long entries; the reader scans and compares, so the core is one chart and two tables, then a short checklist. About 1,400 to 1,700 words. "Ranked by homes sold" is said once at the top and once in the FAQ, plainly: the page does not rate quality.

Layout from the pilots: two-line headline with the half-size italic sub line; the answer first; plain tables under thin rules (no card around them; on a phone, plain rows split by a rule); one block width of about 720 px for the chart, tables, list and offers. Cards are not used: the reader compares numbers, which a table does better. On screens 1,100 px and wider, the ownership list (section 4) may sit beside the paragraph that introduces it. If a screen looks busy, take something away.

## Sections, in order, and what each proves

0. **Hero.** H1, sub line, byline (Devin Day, reviewed by Tim Nash), sub-header. Three short key-fact rows (icon, label, number) from `findings.json`: "New homes builders sold in 12 months: 5,280" / "Builders that sold 50 or more: 17" / "Middle price of a builder's home: about $335,000". Never typed.

1. **Short answer** (H2: "Who builds the most new homes around Myrtle Beach?"). D.R. Horton and Lennar, about 45 percent of the 5,280 new homes builders sold in Horry County in the 12 months to October 2026. Ryan Homes, Pulte Homes and Meritage Homes follow; 17 builders sold 50 or more. Builders sold about 3 in 10 of all homes recorded. The ranking is by homes sold, from county deeds; it says nothing about quality. (Rows 1, 2.)
   - **Slim offer bar:** "See every new home for sale now" → `/homes/map/?has=new_construction`.

2. **The chart: homes sold by each builder** (H2: "Which builders sold the most homes in Horry County?"; rows 2, 3). Horizontal bars, 17 builders, each bar labelled with its count and, in small gray type at the bar's end, the middle price ("1,397 · about $325,000"). The five largest in the brand color, the rest in a lighter tint. One line under it: "New homes builders sold to their first owners, recorded November 1, 2025 to October 31, 2026. Houses, townhouses and condos. Horry County Register of Deeds." Then two sentences: the five largest sold about two-thirds; the rest are mostly regional builders that sell a few hundred or fewer homes a year here. One sentence on custom builders: the small local builders who build on single lots sold fewer than 50 each and are not on the chart.
   - Writer's rule: the chart names the builder as buyers know it (Ryan Homes, Mungo Homes, Stanley Martin), and section 4 explains the deed names.

3. **Where does each builder build?** (rows 4, 5, 6). Lead sentence: three mailing towns, Conway, Longs and Myrtle Beach, took about 3 in 4 of the new homes. **The town table** from `findings.json` by_town (10 rows, Nichols left out): town, new homes sold, the builders that sold the most there (two to four names, each with its count), middle price. A note under it: "A town here is the mailing address, not city limits. Myrtle Beach includes Carolina Forest and Socastee addresses." Each town name links to its area page where one exists (/submarkets/conway/, /submarkets/myrtle-beach/, /submarkets/north-myrtle-beach/, /submarkets/little-river/, /submarkets/murrells-inlet/, /submarkets/surfside-beach/). Then one short paragraph from row 6: three communities where two or three large builders sell side by side (Arcadia, Waterbridge, SayeBrook), so a buyer can compare builders in one visit. One sentence links /buyers/new-construction/#where for what the ten largest communities have.
   - **Offer box A** (headline "Compare two builders in one afternoon"; one sentence: "Tell us the town and your price. We pick the builders that fit and set up the visits, as your agent from the first one."; button "Have us plan your builder visits") → `/contact/?topic=builder-visits`.

4. **What does each builder's home cost?** (rows 3, 7, 8). Lead: the middle new home sold for about $335,000, against about $295,000 for a home sold by its owner. **The price table**: builder; what its homes sold for (the middle half, "about $279,000 to $375,000"); what it asks now (middle asking price and how many it listed; under 15 listed, count only). Ordered as the chart. A short note under it: "Sold: county deeds, 12 months. Asking: homes listed for sale on [date set by build], from the MLS feed." Then the budget answer (row 7): 280 new homes asked $300,000 or less, most from D.R. Horton (83) and Lennar (45), then Beverly, Stanley Martin, Starlight and DRB. Then row 8 in two sentences: some builders sell almost entirely through their own sites and sales offices. Ryan Homes sold 477 here and had one home in the MLS feed that day. We ask those builders for their homes directly.
   - Link: one sentence to /buyers/new-construction/#tax-bill for what the price leaves out (lot premiums, options, the first tax bill). Do not repeat any of it.

5. **Who owns the names on the signs?** (rows 11 to 15). Lead: several builders here sell under one name and sign deeds under another. A plain list under a thin rule, five items, one or two sentences each:
   - Ryan Homes: a trade name of NVR, so its deeds say NVR Inc.
   - Mungo Homes: part of Clayton Properties Group, a Berkshire Hathaway company, since 2018; its deeds say Clayton Properties Group.
   - Great Southern Homes: a South Carolina builder that became part of Stanley Martin Homes on May 4, 2026; its homes for sale are now listed by Stanley Martin's sales company.
   - Starlight Homes: an Ashton Woods company.
   - Chesapeake Homes: its deeds name a separate company for each community (row 15; if not verified, the item becomes "Five community companies ... sold 240 homes" with no builder named, or is cut).
   - One closing sentence in our voice: we read the seller's name on the contract and the deed with you, so you know who stands behind the warranty.
   - On screens 1,100 px and wider, the list sits beside the lead paragraph.
   - **Offer box B** (headline "Know who you are buying from"; "Send us the builder's contract before you sign. We read it with you, line by line."; button "Send us the builder's contract") → `/contact/?topic=builder-contract`.

6. **How do the builders' warranties and lenders compare?** (rows 16 to 24). Lead sentence: most of the large builders state a warranty of 1 year on most of the house and up to 10 years on the structure, and most own a mortgage company that most of their buyers use. **The table**: builder; warranty it states; its own mortgage company; share of its buyers who used it (nationwide). Rows: D.R. Horton, Lennar, Ryan Homes (NVR), Pulte, Meritage, Beazer, Toll Brothers, Dream Finders. Empty cells say "not stated in its annual report", never a guess. A note: "From each company's latest annual report; nationwide, not Myrtle Beach only. Each company counts its share its own way." Then two sentences: You never have to use the builder's lender (link /buyers/new-construction/#incentives, which owns the incentive and lender question). Beazer is the one large builder here with no mortgage company of its own; it names several lenders for each community and lets buyers compare their offers.
   - No rate, no payment, no "buy-down" or "rate lock" words. BrickWood Mortgage is not named on this page.
   - Link /buyers/new-construction/#warranty-law for what South Carolina law adds to a warranty.

7. **What to ask any builder before you sign** (rows 25 and links). A short checklist under thin rules, icon plus one line each, each saying what we do, never "check it yourself":
   1. The license: South Carolina requires a state license for any home job over $5,000. We check the builder's license before you sign (row 25).
   2. The warranty, in writing: what it covers each year, and who to call (section 6).
   3. The HOA: the monthly fee, what it pays for, and when the builder hands the HOA to the owners (link /hoa/developer-control-turnover/).
   4. The lot premium and the options: link /buyers/new-construction/#tax-bill.
   5. The incentive and the lender it comes with: link /buyers/new-construction/#incentives.
   6. Your own agent: register us before your first visit or online sign-up (link /buyers/new-construction/#your-agent). Who pays stays with that page and owner question O1.
   - No offer box here: the final band follows.

8. **FAQ** (open text, 5 entries, each answer first and safe alone):
   - "Which home builder is the best in Myrtle Beach?" Answer: we rank by homes sold, not quality; what can be compared is where, price, warranty and lender; we read any builder's contract with you.
   - "Is D.R. Horton or Lennar bigger in Myrtle Beach?" (rows 2, 3, 4).
   - "Why can't I find Ryan Homes in the listings?" (row 8).
   - "Who is Clayton Properties Group?" (row 12).
   - "Do investors buy new homes from builders here?" (row 10, optional; link /invest/new-construction-rentals/).

9. **Full offer band** (headline "Pick your builder with an agent on your side"; "We set up the visits, read the contract and check the house before you close."; button "Have us set up your builder visits") → `/contact/?topic=builder-visits`. Different words from offer A.

10. **Sources** box: the deed index, the county GIS layers, the MLS line, the eleven SEC filings, the Clayton release, the Starlight page, SC Code 40-59.

## Offers (owner, 2026-11-03)

| Where | Headline | Button | Link |
|---|---|---|---|
| Under the short answer (slim bar) | See every new home for sale now | See new homes | `/homes/map/?has=new_construction` |
| After section 3 (box A) | Compare two builders in one afternoon | Have us plan your builder visits | `/contact/?topic=builder-visits` |
| After section 5 (box B) | Know who you are buying from | Send us the builder's contract | `/contact/?topic=builder-contract` |
| End (full band) | Pick your builder with an agent on your side | Have us set up your builder visits | `/contact/?topic=builder-visits` |

The lead checks each link once in the preview. A per-builder search link (`/homes/map/?has=new_construction,builder_dr_horton` and so on) may go in the price table as "See its homes"; the CRM filters miss some in-house listings (Stanley Martin: filter 51, own firm 62), so the label says "homes listed now", not "all homes".

## Visuals (one per idea)

1. **Bar chart: homes sold by each builder** (section 2), from `findings.json` by_builder (sales, price.median). Flat, clean, the site's glass card only if it is the one chart card style the pilots use. Alt text names the top five with counts.
2. **Town table** (section 3), from by_town.
3. **Price table** (section 4), from by_builder.price and listings.by_builder.
4. **Ownership list** (section 5): a plain list with a small icon, not a diagram.
5. **Warranty and lender table** (section 6), typed from rows 16 to 23 (these are text, not data; each cell from a verified row).
6. **Checklist** (section 7): icons from `tools/icons.js` (badge, shield, home, tag, bank, person).
7. No map: /buyers/new-construction/ already has the county map with the ten largest communities, and the town table answers "where" here. No photo of a builder's home, sign, model or logo (task brief). No AI image.

Photo candidates (free licence): none needed. A U.S. government aerial (USDA NAIP, public domain) of the community with the most builder sales, Auberon Woods in Conway (center 33.82629 N, 78.85293 W, `findings.json` top_community), was considered as a "before and after"; the USGS NAIP service holds only the 2023 flight at that point, so there is no "before". /buyers/new-construction/ already uses a NAIP aerial of a new street. Leave it out.

## The photo partner's shot list

Optional, for a later version; the page works without photos. Send with `templates/photo-request-email.md` only if the lead wants one picture for section 3:
- A street of finished new houses in a large new community in Conway or Longs, from the sidewalk, in morning light. No builder sign, flag, banner, logo, sales trailer or license plate in the frame. No people as the subject.
- The same kind of street with houses still in framing and bare lots, to show a community still being built. Same rules.
- Note for him: it is a photo of the street, not of a builder; we will not name a builder in the caption.

## Sibling and overlap notes

- /buyers/new-construction/ owns: new against nearly new, the ten largest communities and what they have, the first tax bill, lot premiums and options (Toll's quarter-of-the-price figure), your own agent and registration, incentives and the builder's lender, spec or to-be-built, inspections, warranty law. This page links each in one sentence and repeats none. Its chart (top five, October 2025 to September 2026, 5,108 sales) and this page's chart (17 builders, November 2025 to October 2026, 5,280 sales) are different windows and rules; see NEEDS.md.
- /invest/new-construction-rentals/ owns building to rent. /hoa/developer-control-turnover/ owns HOA handover.
- Sibling /submarkets/myrtle-beach/market-common/: the only builder deeds with "MARKET COMMON" in the memo in the window are 15 from Sands Building Group (a builder under 50 sales, not on the chart). The Market Common page owns that; this page does not name it.
- Sibling /buyers/homes-near-the-beach/ and /buyers/pool-homes/: no overlap.
