# Must-answer list: /why-chapter-3/ (second rewrite, 2026-11-12)

The first rewrite (2026-11-10) built the page around what we check before an offer and what South Carolina law asks of an agent. The owner read it on 2026-11-12: "the why chapter3 realty seems alot more like a big disclosure rather than selling ourselves. Also saying how we do the stuff makes it feel less cool. it really glossed over our tools we also have the only Ai powered real estate search tool with dynamic preview photos. i would make that page more about selling ourselves rather than a big disclaimer."

This list replaces the first one. Sources:
- Google search suggestions, 20 new seeds on tools and choosing a firm: `data/2026-11-b/why-chapter-3/raw/google-suggestions-tools-2026-11-12.txt` in the website working copy, made by `scripts/pull-suggestions-tools.sh` beside it. The 31 seeds of 2026-11-10 (`raw/google-suggestions-2026-11-10.txt`) still apply.
- Search Console as the triage reports it: 0 clicks, 16 impressions in 28 days. No query-level export is in this repo.
- The triage row (`reports/triage-2026-11-08.md`) and the cannibalization entry "Chapter3 Realty brokerage / team / why work with us" (`reports/cannibalization-2026-11-08.json`, owner /about/).
- The story bank (`stories/stories.json`) and the site's own code (`idx-lib/`, `functions/homes/`).

Google's "People also ask" box cannot be read by a script. On "why use a real estate agent" and "what makes a good real estate agent" it asks the same questions as the suggestions below.

## Who lands here, and what they decide

1. **Someone who already found us.** They clicked "Why Us" in the menu, an author note, or a button on a guide. Branded searches have almost no volume ("chapter3 realty" suggests only "chapter 3 realty"; "chapter 3 realty reviews" suggests nothing). They are deciding: **is this firm worth my time, and do I let them help me find, buy, sell or analyze a home?**
2. **Someone choosing a firm or a search tool.** They type "myrtle beach real estate agents", "real estate company myrtle beach", "why use a real estate agent when buying", "what makes a good real estate agent for buyers", "ai home search", "ai real estate search", "search homes with ai", "ai powered real estate search". The AI searches are national, with real volume, and no page on our site answers them.

What they want: proof that working with us gets them something they cannot get on a portal. The first screen must show it, not describe it.

## The questions, ranked

| # | Question (reader's words) | Evidence | Deciding fact | Who owns it |
|---|---|---|---|---|
| 1 | **Why choose Chapter3 Realty?** | Menu label "Why Us"; branded searches; the page's URL. | The tools a reader can use right now (facts rows 1 to 14) and the people behind them (rows 22 to 26). | **This page.** /about/ keeps "Myrtle Beach real estate team". |
| 2 | **Can I search for homes with AI? What does it do?** | Suggestions: "ai home search" (10), "ai real estate search" (10), "search homes with ai", "find homes with ai", "ai powered real estate search". | You type what you want and why, in your own words. Chapter3 AI turns it into filters from 753 MLS features, says in one line what it understood, and keeps the thread ("cheaper", "what about Conway") (rows 1 to 4). Live demo: "condo I can airbnb near the beach under 300k" became four filters and 1,266 condos (row 3). | **This page.** No page on the site has a title with "AI". /homes/ and /homes/map/ own "homes for sale". |
| 3 | **Is Chapter3's the only AI home search?** | The owner's claim. | No. Zillow (2023), Realtor.com (2025, 2026) and BoldTrail's broker sites (2025) have natural-language search, and one Myrtle Beach brokerage site has an AI search switch on (rows 15 to 21). **The page does not print "only"** (BUILD note). It says what ours does that a reader can see: it reads the listing descriptions while you look, and pulls the homes that fit to the top with photos and a reason (row 5). | This page states what ours does, with no comparison. |
| 4 | **Can I see the homes before I click?** | The owner's "dynamic preview photos". | The AI picks row with photo cards (row 5); homes rows that scroll themselves on 131 of our 141 pages (rows 9, 10); a click on a map dot shows the home's photo and price (row 7). | **This page.** |
| 5 | **Can I search on a map?** | Suggestion "myrtle beach homes for sale map" (no suggestions; real query). | 2D and 3D, click any spot to search there, homes within miles of a place you go every day (row 7). | /homes/map/ owns the search itself; this page shows it and links. |
| 6 | **What can I work out myself, for free?** | Suggestions: "myrtle beach rental property calculator", "myrtle beach airbnb calculator" (no suggestions; real queries owned by the tools). | The rental analyzer reads the MLS (row 11); the Airbnb calculator; cost to own; property tax; closing costs; seller net; capital gains; cost of living (row 12). | Each calculator page owns its own search. /guides/ owns "Myrtle Beach real estate guides & tools". This page names each in one line and links. |
| 7 | **Where do your numbers come from?** | Judge (2026-10-31): "no proof". "myrtle beach real estate records" is a suggestion. | The county's deed records: 13,194 home sales read for /sell/home-value/ (row 13); 804 condo sales across 47 oceanfront buildings (row 14); our flood count, about 1 in 5 (row 27). | Each guide owns its finding; this page names one line each and links. |
| 8 | **Who are the people? What do I get working with you?** | "what makes a good real estate agent for buyers", "why use a real estate agent when buying", "what does a real estate agent do for a buyer". | Tim Nash, Broker-in-Charge, 30+ years on the Grand Strand, third generation (rows 22, 23); his published words to every relocation client (row 24); what we do: free rental analyses and pricing reviews, an insurance quote before you offer, rental-ban communities filtered out, liens checked before closing (rows 28 to 32). | **This page** for "what you get". /about/ for the team. |
| 9 | **Are you licensed?** | "south carolina real estate license lookup" (10, from 2026-11-10). | License 28849; Tim Nash 43182; the state's lookup (rows 33 to 35). | **This page**, one line near the end. No law section. |

## Searches this page gives up, or leaves alone

- "Myrtle Beach real estate team", "who is Tim Nash": **/about/**.
- "Myrtle Beach real estate guides & tools": **/guides/**. This page links to each tool by name; it does not title itself "tools".
- "homes for sale Myrtle Beach", "Myrtle Beach homes for sale map": **/homes/**, **/homes/map/**.
- Each calculator's search ("rental property calculator", "Airbnb calculator", "property tax calculator", "closing costs calculator", "net proceeds", "capital gains"): **its own page**.
- "what to check before making an offer", "how to find out if a house has flooded": **/buyers/undisclosed-flooding/** and the HOA pages. The first rewrite tried to take "what to check before making an offer"; it gives that up.
- "south carolina real estate license lookup", "what does a buyer's agent have to tell you": not this page's search any more. One line of license facts stays.
- "best real estate agent myrtle beach", "top realtor in myrtle beach": no page claims these. A superlative needs two sources that agree (RULES FACT-4), and none exist.

## What the page must not do

- Print "only", "first" or "the best" about the AI search (rows 15 to 21).
- Knock other brokerages or the portals, by name or not.
- Teach financing, or name a rate, a payment or a down payment. The rental analyzer is described by what it estimates for a rental (rent, costs, cash flow, return), never by its loan inputs.
- Give or imply a value for any address. The rental analyzer shows an "Estimated value" line; this page never mentions it (BUILD note for the lead).
- Name Devin, write a quote for Tim, or tell a story not in `stories/stories.json`.
- Put a listing photo, a Google map image or any MLS data into a screenshot (rules/images.md; the IDX exception covers the live feed only).
- Promise a reply time, "every client", or a count of clients, sales or reviews.
