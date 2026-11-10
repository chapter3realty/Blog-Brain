# Must-answer list: /invest/condotel-financing/ (Lane U, batch 2026-11-b)

Sources read 2026-11-10:
- Google suggestions for 35 seeds: website copy `data/2026-11-b/invest-condotel-financing/raw/google-suggestions-2026-11-10.txt` (`pull-suggestions.sh`).
- Search Console, site-wide queries (scratch `gsc/Queries.csv`, 28 days to 2026-11-06; `gsc2/Queries.csv`, the two 11-day periods). Pages: this page 151 showings, 0 clicks, position 21.6; `/invest/non-warrantable-condos/` 63 showings, position 21.5.
- "People also ask" could not be read from this session (no results page). The question-form suggestions stand in for it: "what makes a condo a condotel", "are condo hotels a good investment", "what is a condotel loan", "how does a condotel work", "why are condos hard to finance", "can you finance a condo".
- The triage row and the cannibalization cluster for this page; `stories/stories.json` (no condotel story; the live page's "after a year of lender declines" story is not in the bank).

## The one question

**"Can I get a loan on a Myrtle Beach condotel, and which loan?"** The searched words: "condotel financing" (35 showings, position 16.4), "condotel loans" (17), "condo hotel financing" (10), "condotel financing myrtle beach" (suggested), "condotel mortgage", "condotel lenders", "condotel dscr loans".

## What people search, ranked

| # | Search (as typed) | Evidence | Likely reason behind it | Where the page answers |
|---|---|---|---|---|
| 1 | condotel financing; condotel financing myrtle beach; condotel loans; condo hotel financing; financing a condotel; how to finance a condotel | GSC 35 + 17 + 10 + 3 + 3; suggestions | They found a resort unit they like, often a place they vacationed, and a bank said no or they heard banks say no | The short answer and the first section: which loans close on these units and which do not |
| 2 | condotel loan requirements; condotel down payment (Google rewrites it to "condo down payment"); condotel mortgage rates | GSC 2; suggestions | "What do I need, and how much cash?" | The unit test (size, bedroom, kitchen, no forced rental pool), from a published program sheet. Down payment in words only on this page (PLAYBOOK A17, `build.js` DOWN_PAYMENT_OK_PAGES); a link to `/invest/non-warrantable-condos/`, where the lender's figures are allowed. No rate, ever. |
| 3 | what is a condotel; condotel meaning; condotel definition; what makes a condo a condotel; what is considered a condotel; how does a condotel work | GSC 2 + 1 + 1; suggestions | The listing said "rental program" or "resort" and they want to know what that changes | Two sentences in plain words, then Fannie Mae's own signs of a hotel-run building, put as what a buyer sees |
| 4 | condo hotel myrtle beach; myrtle beach condo hotels (for sale); condotel for sale myrtle beach | Suggestions | They want to see units, and to know which buildings count | "Which Myrtle Beach buildings run like hotels?": our counts, a few named buildings each with its wow detail and a homes strip, and a link to the full directory on `/invest/condo-buildings/` |
| 5 | condotel fha; condotel va loan; can you get a va loan on a condo | Suggestions | A buyer with an FHA or VA plan | One answer: FHA's own contract bars renting under 30 days, and no oceanfront building is on HUD's approved list. VA is a home you live in. |
| 6 | condotel dscr loans; dscr condotel; condotel investment loans | GSC 3 + 2; suggestions | An investor who will rent nightly | One line on how a DSCR loan qualifies, then the link: `/invest/strategies/dscr-loans/` owns DSCR |
| 7 | condotel lenders; condo hotel lenders; condotel lenders south carolina (no suggestion) | GSC 1 at position 9; suggestions | "Who will do it?" | Our affiliated lender, BrickWood Mortgage, a separate company, in the approved wording and with the AfBA pointer. No other lender named as an offer. |
| 8 | are condo hotels a good investment; is a condotel a good investment; condotel pros and cons | Suggestions | They are deciding whether the hard loan is worth it | A short "what you gain and what it costs you" list from verified rows; the investment verdict link goes to `/invest/condos/` |
| 9 | condotel vs condo; condotel vs timeshare | Suggestions | Terms | One FAQ line each. Timeshare: one sentence, no section. |
| 10 | why are condos hard to finance; fannie mae condotel | Suggestions | The reason | Inside the short answer: the building, not the borrower |

## The reason behind the top search

The searcher is usually not asking what a condotel is. A bank said no, or the listing says "cash" or "rental program", and they want to know whether any loan will work on the unit they already like, and what it takes. The second fear, unspoken: "Will I be stuck when I sell?" The page answers both: which units a non-agency lender accepts, and that these units do sell (804 recorded sales in the 47 directory buildings in a year).

## The deciding fact

**Do the agency loans really refuse a Myrtle Beach rental-program building, and is there a published, non-percentage test a unit can pass for the loans that remain?** Checked 2026-11-10: **yes to both.**
- Fannie Mae B4-2.1-03 (11/04/2026) makes a project ineligible if it is "managed and operated as a hotel or motel", has "voluntary rental-pooling ... agreements with the HOA or management company", or is "professionally managed by a hotel or resort management company that also facilitates short term rentals". About 8 in 10 oceanfront condos for sale say they are in a rental program (885 of 1,093).
- FHA's borrower contract (HUD-92561) bars renting "for a period less than 30 days".
- A published non-agency condotel program (Newrez Smart, 3/2026) states the unit test: at least 500 square feet, a separate bedroom, a full kitchen, and no rental pooling. About 1 in 5 rental-program condos for sale is under 500 square feet (199 of 885), and 179 are studios.

That is the page: the agency loans do not fit, the condotel loans do for most units, and the unit's size and layout decide it. Down payment stays in words on this page (A17).

## What siblings already own (do not take their search)

| Search | Owner | This page does |
|---|---|---|
| non-warrantable condo; warrantable vs non-warrantable condo; what does non-warrantable mean; how to check if a condo is warrantable; the master insurance deductible rule | `/invest/non-warrantable-condos/` (lead's decision for this round) | Uses the word once, defined in one sentence ("every condotel is non-warrantable, not every non-warrantable building is a condotel"), and links it. Drops the live page's H2s "What makes a condo non-warrantable" and "How to check condo warrantability before you offer". No keyword "non-warrantable". |
| down-payment percentages for these loans | `/invest/non-warrantable-condos/` (in `DOWN_PAYMENT_OK_PAGES`, with BrickWood named as the source) | Says "more down than a regular condo loan" and links there |
| oceanfront condos for sale; each building's fee, amenities and sales | `/invest/condo-buildings/` | Names a few hotel-run buildings with one hotel-side wow line each and links the directory. No fee table, no building-by-building entries. |
| rental program vs Airbnb; which buildings have rental programs (the table) | `/invest/rental-program-vs-airbnb/` | One count (8 in 10) and a link. No program table, no fee split. |
| DSCR loans | `/invest/strategies/dscr-loans/` | One sentence and a link |
| are Myrtle Beach oceanfront condos a good investment | `/invest/condos/` | One sentence and a link |
| condo in litigation | `/buyers/condo-in-litigation/` | Not mentioned, or one link in the FAQ |
| what a Myrtle Beach Airbnb earns | `/invest/airbnb-income/` | No income figures |
| HOA transfer fees and escrow | `/hoa/estoppel-and-transfer-fees/` | One line from the story bank, linked |
