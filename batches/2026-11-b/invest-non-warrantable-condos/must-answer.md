# Must-answer list: /invest/non-warrantable-condos/ (Lane U, batch 2026-11-b)

Sources read 2026-11-10:
- Google suggestions for 43 seeds: website copy `data/2026-11-b/invest-non-warrantable-condos/raw/google-suggestions-2026-11-10.txt` (`pull-suggestions.sh`).
- Search Console, site-wide queries: scratch `gsc/Queries.csv` (28 days to 2026-11-06) and `gsc2/Queries.csv` (the two 11-day periods). This page: 63 showings, 0 clicks, position 21.5 (triage row; condotel must-answer).
- "People also ask" could not be read from this session (no results page). The question-form suggestions stand in for it: "what makes a condo non warrantable", "what is the difference between warrantable and non warrantable condos", "should i buy a non warrantable condo", "can a non warrantable condo become warrantable" (seed only), "how to find out if a condo is warrantable", "why is my condo non warrantable", "does fannie mae allow non warrantable condo".
- The triage row, the cannibalization cluster, the sibling plan `batches/2026-11-b/invest-condotel-financing/PLAN.md` (which gives this page the non-warrantable searches), and `stories/stories.json` (`rental-program-buildings`, `unwarrantable-condo-ltv`, `distressed-condo-discount`). The live page's two stories (the buyer on Social Security; the master policy rewritten mid-deal) are not in the story bank.

## The one question

**"What is a non-warrantable condo, and is the Myrtle Beach building I like one?"** The searched words: "warrantable vs non warrantable condo" (6 showings, position 21), "non warrantable condo" (2), "what does non warrantable condo mean", "what does it mean when a condo is non warrantable", "non-warrantable condo loan", "non warrantable condo financing".

## What people search, ranked

| # | Search (as typed) | Evidence | Likely reason behind it | Where the page answers |
|---|---|---|---|---|
| 1 | warrantable vs non warrantable condo; non warrantable condo meaning; what is a non warrantable condo; what does it mean when a condo is non warrantable | GSC 6 + 1 + 1 + 2; every seed suggests "meaning" and "vs" | A lender, a listing or an agent used the word, and they want it in plain English | The short answer and the first section: a loan in this building cannot be sold to Fannie Mae or Freddie Mac, so the usual loan is off the table; other loans and cash still work |
| 2 | what makes a condo non warrantable; what makes a condo non warrantable fannie mae; why is my condo non warrantable; fannie mae ineligible project characteristics | Suggestions (9 forms) | "Why this building? Is it something wrong with it?" | Fannie Mae's published reasons, grouped by what a buyer can see, with the good-news reasons first (too many renters, a rental desk) and the hard stops last (litigation, critical repairs) |
| 3 | non warrantable condo list; fnma non warrantable condo list; fannie mae warrantable condo list / lookup; warrantable condo list | Suggestions on 5 seeds | "Just tell me which buildings." | There is no public Fannie Mae list (CPM is a lender tool). Our own table: for each oceanfront building, the public signs a lender's review looks for, from county records and live listings. Never a verdict; we confirm a building from its documents. |
| 4 | how to find out if a condo is warrantable; is my condo warrantable; condo questionnaire | Suggestions; GSC none | They have a unit in mind and fear losing earnest money | What we check and when: the questionnaire, the budget, the master policy, the minutes, a suit, before the offer. We do the work; the reader does not get a to-do list. |
| 5 | non warrantable condo loan; non warrantable condo financing; non warrantable condo lenders; non warrantable condo down payment; minimum down payment for non warrantable condo | GSC 1 + 1; suggestions | "Can I still get a loan, and how much cash?" | Which loans close here (portfolio, non-QM, DSCR, cash) and a down-payment range from BrickWood Mortgage on a rental the buyer does not live in (PLAYBOOK A17; this page is in `DOWN_PAYMENT_OK_PAGES`). No rate, ever. |
| 6 | fha non warrantable condo; va loan non warrantable condo; fha approved condos myrtle beach (no suggestion) | Suggestions | A first-time buyer or a veteran | FHA's own list for Horry County: 9 approved of 117 records; none of the 45 oceanfront buildings in our county match except Sea Mark Tower (one of the Caravelle's buildings). VA: 2 of 29 resort buildings accepted. Link `/buyers/va-loans/`, `/buyers/programs/`. |
| 7 | fannie mae condo deductible; fannie mae condo master policy deductible; fannie mae condo insurance requirements | Suggestions (8 forms) | A buyer told "the building's insurance fails" | One section: the master policy must insure the full rebuild cost, with a deductible of at most 5 percent of that (and $50,000 a unit). Why coastal buildings miss it. Link `/hoa/master-insurance-ho6/` for the HO-6 and the deductible share. |
| 8 | fannie mae condo guidelines single entity ownership; freddie mac condo guidelines investor concentration; fannie mae condo guidelines owner occupancy; fannie mae condo guidelines commercial space | Suggestions | Lender jargon met in a denial | The single-owner test (20 percent) with our county count; the investor red flag (75 percent) with our county count; commercial space (35 percent) in one line |
| 9 | should i buy a non warrantable condo; is a non warrantable condo a good investment; non warrantable condo resale | Suggestions | The real decision | Good and hard, plainly. The story bank's line: a building full of investors is run for renting. Resale: the next buyer faces the same loans. |
| 10 | can a non warrantable condo become warrantable | Seed (no suggestions) | A seller or a patient buyer | Yes, when the reason is fixed (a new policy, a suit settled, dues collected); status is checked at each loan |
| 11 | freddie mac condo reserve requirements; fannie mae condo guidelines changes; fannie mae condo guidelines 2026 | Suggestions | "What changed?" | One short dated-by-machine note: the 10 percent reserve test rises to 15 percent for applications from January 4, 2027 (Freddie Mac's bulletin; link `/hoa/reserves/`) |

## The reason behind the top search

Most people who type "warrantable vs non warrantable" have just heard the word from a lender or seen "cash or portfolio loan only" on a listing. They want to know three things: whether the building is broken, whether any loan will work, and whether they will be stuck when they sell. Here the answer surprises them: nearly every oceanfront building on the Grand Strand trips one of Fannie Mae's tests, and usually for a reason that has nothing to do with the building's condition (renters, a rental desk, one company owning a block of units).

## The deciding fact

**Do Fannie Mae's published project rules, applied to public records, show why so many Grand Strand oceanfront buildings are non-warrantable, building by building?** Checked 2026-11-10: **yes.**
- Fannie Mae B4-2.1-03 (11/04/2026) lists the ineligible projects: run as a hotel, a rental pool, a suit about safety or structure, critical repairs, more than 35 percent commercial space, one owner holding more than 20 percent of units in a building of 21 or more. It also lists red flags that make a lender look harder, including 75 percent or more of units owned as investments or second homes.
- Horry County's parcel records, for the 45 directory buildings with a county regime: 545 of 11,822 units (4.6 percent) are taxed at the owner-occupant rate. In 44 of 45 buildings, at least 75 percent are not. An inland FHA-approved community, Seagate Village, shows 49 percent, so the test separates homes from rentals.
- The same records: in 6 buildings, one owner name holds more than 20 percent of the units in a regime of 21 or more (Anderson Ocean Club 55 percent, Towers on the Grove 58 percent, Prince Resort 33 percent, Sands Ocean Club 30 percent, SeaWatch up to 29 percent, Avista 21 percent).
- Live listings: 795 of 965 condos for sale in these buildings carry the rental-program flag (16 buildings at 90 percent or more).

That is the page: the rules, and the buildings, with the reason for each. A lender's review of the documents still decides; the page says so once.

## What siblings already own (do not take their search)

| Search | Owner | This page does |
|---|---|---|
| condotel financing; condotel loans; condo hotel financing; what is a condotel; condotel lenders; condotel requirements (500 sq ft) | `/invest/condotel-financing/` (sibling plan, this round) | One sentence: every condotel is non-warrantable; not every non-warrantable building is a condotel. Link. No "condotel" in the title, H1, description or keywords. |
| oceanfront condos for sale; each building's fee, amenities, wow line, sales | `/invest/condo-buildings/` | Uses each building only for its Fannie test (owners, rental desk, one owner's share) and links the directory. Reuses at most one verified wow line per named building. |
| condo in litigation | `/buyers/condo-in-litigation/` | One line in the reasons list, linked |
| master policy vs HO-6; who pays the deductible; how much HO-6 | `/hoa/master-insurance-ho6/` | Only the warrantability side: the 5 percent and $50,000 rule and why a building fails it. Link for the rest. |
| HOA reserves, how much is enough | `/hoa/reserves/` | The 10 and 15 percent tests in one line, linked |
| rental program vs Airbnb; which buildings have programs | `/invest/rental-program-vs-airbnb/` | One count and a link |
| DSCR loans | `/invest/strategies/dscr-loans/` | One sentence and a link |
| VA loans; FHA and SC Housing programs | `/buyers/va-loans/`, `/buyers/programs/` | One line each, with our counts, linked |
| are Myrtle Beach oceanfront condos a good investment | `/invest/condos/` | One link from "Should you buy one?" |
| condo questionnaire, HOA documents | `/hoa/documents/` | Names the questionnaire as part of what we check; no section on the document itself |
