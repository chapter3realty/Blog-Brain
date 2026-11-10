# Must-answer list: /why-chapter-3/

Built 2026-11-10 from:
- Google search suggestions for 31 seed queries: `data/2026-11-b/why-chapter-3/raw/google-suggestions-2026-11-10.txt` in the website working copy, made by `scripts/pull-suggestions.sh` beside it.
- The triage row (`reports/triage-2026-11-08.md`, "Rebuild the content") and the cannibalization entry "Chapter3 Realty brokerage / team / why work with us" (`reports/cannibalization-2026-11-08.json`).
- Search Console as the triage reports it: 0 clicks, 16 impressions in 28 days. No query-level export is in this repo.
- The judge's notes (`audit/judged-2026-10-31.json`, total 19 of 50) and the manual findings (`audit/manual-findings.json`, 12 rows on this page).
- The story bank (`stories/stories.json`).

Google's "People also ask" box cannot be read by a script. Its usual questions on these searches match the suggestion groups below.

## Who searches this, and why

Two kinds of reader land here.

1. **Someone who already found Chapter3.** They read a guide, saw a listing on the site or got a call back. They are deciding whether to hire us to buy (or sell) a home on the Grand Strand. Branded searches have almost no volume ("chapter 3 realty" returns only itself and "ch realty iii"), so most of these readers arrive from our own pages and buttons, not from Google.
2. **Someone choosing any agent.** They type "how to choose a real estate agent for buying", "questions to ask a realtor before hiring them", "what to check before making an offer on a house", "how to check if a realtor is licensed". These have real volume. The page can earn some of them only where its answer is about the Grand Strand and its public records.

Why they typed it: they are afraid of paying too much, or of buying a problem the listing hid (a flood, a lawsuit, a rental ban, a special assessment). They want proof that this agent will look, not a promise.

## The questions, ranked

| # | Question (reader's words) | Evidence | Deciding fact | Who owns it |
|---|---|---|---|---|
| 1 | **What does Chapter3 check before I make an offer?** | The cannibalization fix names this as the page's search ("How Chapter3 Checks a Home Before You Offer"). Suggestions: "what to check before making an offer on a house", "what to do before putting an offer on a house", "due diligence when buying a condo", "how to research a property before buying". | The study's contents (live page, owner's own words) and the public record behind each check (facts rows 11 to 19). Whether it runs on *every* purchase is an owner question. | **This page.** Each check links to the sibling that owns its detail. |
| 2 | **What will the listing and the seller not tell me?** | Suggestions: "how to find out if a house has flooded before" (10 variants), "what to look for when buying a condo". Judge: "no proof". | South Carolina law asks an agent to disclose what the agent "actually" knows and says an agent "is not obligated to discover latent defects" (rows 7, 8). The seller's form asks about floods only in the seller's years (row 11). Our count: how often a listing's own flood field misses FEMA's high-risk zone (row 20). | **This page** for the short answer and our count. Flood detail: /buyers/undisclosed-flooding/. |
| 3 | **Is Chapter3 licensed, and who is responsible for my deal?** | Suggestions: "south carolina real estate license lookup" (10 variants), "how to check if a realtor is licensed" (10), "broker in charge south carolina". | Company licence 28849, Broker-in-Charge Tim Nash 43182 (owner's facts, on the live site). The state's lookup is public but behind a captcha, so no script read it (rows 1 to 3, 6). What the law makes a Broker-in-Charge do (row 5). | **This page** for "how to check us" in one short section. /about/ keeps the team and Tim's background. |
| 4 | **Do I have to sign anything, and what does it cost me?** | Suggestions: "do i have to sign a buyer agent agreement", "how does a buyers agent get paid" (10), "do i need a buyers agent". | SC law: no agency relationship exists without a written agreement; until then you are a customer (row 10). Our own line on /contact/: consultations, rental analyses and pricing reviews are free; you pay only under a written agreement you choose to sign (row 22). Whether the study needs a signed buyer agreement first is an owner question. | **This page**, short. No sibling owns buyer-agent pay; this page should not try to rank for "how does a buyer's agent get paid" either (a national search, and the answer turns on each agreement). |
| 5 | **What can I check myself, for free?** | Judge: "no screenshot of a tool". Live page: "Free tools". | The tools the site really has, from the live footer and /homes/map/ (rows 23, 24). | **This page** names and links them in one list. /guides/ owns "Myrtle Beach real estate guides". |
| 6 | **How fast will someone answer me?** | Manual findings: four different promises on four pages. | No single promise is approved (row 25). | Owner question. The page gives the phone, the hours and the pop-up, and no time promise, until he picks one. |
| 7 | **Who are the people?** | Branded search "chapter 3 realty". | Team, Tim's 30 years, three generations (rows 26, 27). | **/about/** owns it. This page gives one true line and a link. |
| 8 | **Do I have to use your lender?** | The live page's BrickWood block. | The AfBA disclosure (row 28). | Footer and /about/. This page says it once, in the approved words. |

## Searches this page gives up

- "Chapter3 Realty team", "Myrtle Beach real estate team", "who is Tim Nash": **/about/**. Remove "Why work with Chapter3 Realty" from the H1 and the title.
- "Myrtle Beach real estate guides", "Myrtle Beach investor tools": **/guides/**.
- "how to find out if a house has flooded": **/buyers/undisclosed-flooding/**. This page states one finding and links.
- "can you buy a condo in litigation", "how to check if a condo is in litigation": **/buyers/condo-in-litigation/**.
- "what to check in HOA documents": **/hoa/documents/**. Reserves, special assessments and rental bans: their own HOA pages.
- "Horry County permit search", "what is being built near me": **/invest/what-is-being-built/** and **/invest/horry-county-growth-roads-permits/**.
- "how to analyze a rental property": **/invest/run-the-numbers/**.
- "best real estate agent myrtle beach", "top real estate agents myrtle beach": no page should claim these. A superlative about Chapter3 needs two sources that agree (RULES FACT-4), and none exist.

## What the page must not do

- Knock other brokerages or Zillow (manual findings; LOCAL-5).
- Present Tim Nash's 30 years as the firm's (the firm opened in 2026).
- Print any count, review, quote, time promise or "every" that no source gives.
- Tell the flood story from the live page. It is not in `stories/stories.json`; the question has been open since 2026-11-01 (`batches/2026-10-d/buyers-undisclosed-flooding/PROPOSED.md`, question 1).
