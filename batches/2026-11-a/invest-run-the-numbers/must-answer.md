# Must-answer list: /invest/run-the-numbers/

Batch 2026-11-a, Lane U. Built 2026-11-01 from Google search suggestions (35 queries, saved in the website copy at `data/2026-11-a/invest-run-the-numbers/raw/google-suggestions.txt`), the judge's notes in `audit/judged-2026-10-31.json`, and what investors ask Chapter3 (`stories/stories.json`). "People also ask" could not be read (Google blocks the results page to scripts); the suggestion lists carry the same questions in short form.

## Who searched this, and why

An investor, often from out of state, has one Grand Strand listing open in another tab. They want to know if it is a good deal before they offer. They know the national rules of thumb (1 percent rule, cap rate, cash flow). They do not know what is different here: the tax rate on a rental, the tax jump after a sale, condo dues, rental bans. They worry the listing's numbers are the seller's numbers, not theirs. Next they will ask: "so what would this one make?" That is the offer.

Owner's line for this reader (`investor-common-question`, usable): the most common investor question is "send me properties with analytics to prove it".

## What the suggestions show (ranked by how many suggestions point to each group)

| Group | Suggestions that point to it | What the reader typed |
|---|---|---|
| A. A calculator / spreadsheet | 30+ | "rental property calculator", "free", "spreadsheet", "analysis tool", "cash flow calculator", "investment property calculator", "dscr calculator" |
| B. How to analyze one deal | 15 | "how to analyze a rental property deal", "how to run numbers on investment property", "running the numbers on a rental property", "how to calculate cash flow on rental property" |
| C. Is it a good investment | 14 | "is this rental property a good investment", "is rental property a good investment in 2026", "is myrtle beach a good place to buy rental property", "is a myrtle beach condo a good investment" |
| D. The rules of thumb and the ratios | 25 | "1% rule rental property", "1 rule rental property calculator", "2 rule", "50 rule rental property", "cap rate", "what is a good cap rate for rental property", "cash on cash return", "what is a good cash on cash return", "dscr calculator formula" |
| E. Tax on a rental here | 10 | "horry county rental property tax", "south carolina rental property tax rate", "south carolina investment property tax calculator", "horry county personal property tax rate" |
| F. Expenses list | 8 | "rental property expenses list", "rental property expenses checklist", "rental property expenses calculator" |
| G. How much it should cash flow | 2 | "how much should a rental property cash flow", "how much cash flow is good for rental property" |
| H. Local listings and managers | 10 | "myrtle beach investment property for sale", "myrtle beach rental property management" |

## The must-answer list, in order

1. **Is this rental a good deal? The answer in two sentences**, with the deciding fact: in Horry County the rent rarely covers the price by the national rules, and the tax and the dues decide most deals. (Groups B, C.)
2. **A calculator on the page,** before any form: price, rent, tax at 6 percent for the town, dues, insurance, management, repairs and empty months. It returns the yearly rent left after costs, the cap rate, and the coverage ratio once the reader types their own loan payment. No rate and no payment from us. (Group A.)
3. **A worked example, shown as the sheet we send,** for a real local case: a typical three-bedroom house and a typical two-bedroom condo, priced from live listings in aggregate, rent from HUD's figure for the ZIP, tax from the 2026 county levy. Each line with its source. (Judge: "never shows one".)
4. **Does the 1 percent rule work here?** How many homes for sale pass it today, by ZIP, our own count. (Group D, top suggestion after the calculator.)
5. **What is a good cap rate and cash-on-cash return here?** Define each in one line, with the owner's targets where they exist (rental-returns owns the area returns; link it). (Group D.)
6. **The 50 percent rule:** what share of the rent the costs take here, from the two worked examples, house against condo. (Group D.)
7. **The property tax on a rental in Horry County, and why the listing's tax is not yours.** 6 percent ratio, the school operating tax, the reset after a sale, the 25 percent exemption for 6 percent property and its January 31 notice. Our count from 2026 deeds of how far the price runs above the seller's taxed value. (Group E; the cost "that stops more deals", story `property-tax-rental`.)
8. **The full list of costs,** each with what it is here: tax, insurance (landlord policy, wind, flood), dues, management, repairs, empty months, licenses, and the furniture tax notice on a furnished rental. (Group F.)
9. **How much should it cash flow?** No national figure; the owner's coverage target (1.25) and what it means. (Group G.)
10. **Condos: do the dues sink the deal?** Our count of how many condos pass the 1 percent test before and after dues. (Group C, "is a myrtle beach condo a good investment".)
11. **What a calculator cannot see.** A rental ban in the HOA papers, a seller's cash flow that will not be yours, a community where prices rose and rents did not. Real stories only. (Judge idea 3.)
12. **What we send, how fast, and what it costs you.** Free, same day; the form. Kept from the live page, said once. (The page's offer.)
13. **Short-term rental numbers:** one line and a link to the STR tools, airbnb-income and str-rules pages (owners of those facts).

## Owner question

- The judge asked for a special assessment story. `stories/stories.json` has none from our files (`hoa-lien-flip` is a hypothetical, "not a real case"). Not asked yet: the page goes without it. Proposed question for `templates/owner-questions.md`: "Has a client of ours had a special assessment change the numbers on a rental, before or after closing? What was the bill, and what happened?"
