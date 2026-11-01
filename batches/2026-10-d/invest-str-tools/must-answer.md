# Must-answer list: /invest/str-tools/

Batch 2026-10-d, Lane U, research stage, 2026-11-01. Built from real demand before any research (CRAFT 1, `templates/must-answer.md`).

## What this page is

142 pages link here from the site menu as "Short-term rental tools" or "Short-Term Rentals". The reader clicks it expecting tools and numbers. The live page gives prose and three unsourced ranges (judge, `audit/judged-2026-10-31.json`). The siblings already own their parts:

| Question | Owner page |
|---|---|
| Where nightly rentals are legal, city by city; the lodging tax table | /invest/str-rules/ |
| Market-wide Airbnb income, by area and percentile | /invest/airbnb-income/ |
| The same home run nightly against a yearly lease | /invest/str-vs-ltr/ (this batch) |
| Accommodations tax and business licences | /invest/accommodations-tax/ |
| Setup after closing | /invest/str-setup/ |
| Federal tax rules (7-day, 14-day) | /invest/str-tax-treatment/, /invest/14-day-rule/ |
| Stays of 90 days or more | /invest/mid-term-rentals/ |
| Condotel loans | /invest/condotel-financing/ |
| Rental program or self-run | /invest/rental-program-vs-airbnb/ |

So this page owns **the numbers for one nightly rental you are looking at**: what it brings in, what comes off, what it keeps before any loan, and how many nights it must book to pay its own bills, town by town. Plus a short index of the other STR pages by the question each answers.

## Where the demand came from

1. **Google suggestions**, read 2026-11-01 through `suggestqueries.google.com`, 52 seed phrases (script `web2/data/2026-10-d/invest-str-tools/pull-suggestions.sh`, raw `raw/google-suggestions-2026-11-01.txt`). Grouped:
   - The tool itself: "airbnb calculator", "... profit", "... income", "... by address", "airbnb profit calculator spreadsheet", "short term rental calculator", "... income calculator", "... profit calculator", "airbnb break even calculator", "airbnb occupancy rate calculator".
   - Occupancy: "myrtle beach airbnb occupancy rate", "airbnb occupancy rate by zip code", "... in my area", "what is a good occupancy rate for airbnb".
   - Income: "myrtle beach average airbnb gross income", "how much does an airbnb make a year / per month", "myrtle beach condo rental income", "myrtle beach vacation rental income".
   - Is it worth it: "is myrtle beach good for airbnb", "is myrtle beach a good airbnb investment", "is myrtle beach a good place to buy rental property", "is airbnb profitable for hosts", "is airbnb profitable in 2026".
   - Costs: "airbnb expenses list", "airbnb cleaning fee average", "airbnb cleaning fee for 3 bedroom house", "airbnb management fee percentage", "what percentage does airbnb take", "airbnb service fee for hosts".
   - Season: "myrtle beach off season dates", "myrtle beach peak season dates", "myrtle beach busiest month", "myrtle beach off season rates", "myrtle beach off season monthly rentals", "myrtle beach water temperature by month".
   - Where: "myrtle beach short term rental zoning map", "myrtle beach short term rental map", "north myrtle beach short term rental zoning map", "surfside beach sc short term rental map", "myrtle beach airbnb for sale", "myrtle beach airbnb properties for sale", "short term rentals myrtle beach for sale".
   - Rules and tax: "myrtle beach short term rental laws / regulations / ordinance", "north myrtle beach short term rental license", "horry county short term rental laws", "horry county short term rental tax", "south carolina short term rental tax".
   - Long questions with no suggestions (too long), but the plain form of the job: "myrtle beach airbnb calculator", "is airbnb profitable in myrtle beach", "how much does an airbnb make in myrtle beach", "myrtle beach short term rental investment".
2. **Search results** for "Myrtle Beach Airbnb calculator": vendor tools (AirROI, AirDNA, Mashvisor, BNBCalc) that ask for an address and give a gross, with costs as a blank or a national average. None subtracts the condo's own HOA fee and South Carolina's 6 percent property tax, which are the two biggest bills on an oceanfront condo here.
3. **What the owner hears** (`stories/stories.json`): the worst short-term mistake is self-managing with the cheapest cleaner (`str-cheapest-cleaner`); lenders count about 75 percent of a short-term estimate (`dscr-lender-figures`); rental programs sit in oceanfront short-term buildings (`rental-program-buildings`); a retired hotel manager runs three oceanfront condos (`boston-hotel-manager`).
4. **The judge**: a month-by-month chart for two kinds of place (an oceanfront tower and a marsh-side house); a break-even calculator with a worked example for one real building type from the CRM data, with taxes at 6 percent and the 2026 levy and no loan payment; where nightly rentals are allowed; the lodging tax in dollars on a summer week; NOAA water temperature beside the occupancy curve; link out for the rules instead of restating them.

## Why they typed it

- Most searchers have a listing open: an oceanfront condo or a beach house. A vendor calculator gave them a gross. They want to know what is left after the HOA fee, the tax and the cleaner, and whether the number is real.
- A searcher who has not picked a town wants to know which town's rentals do best, and why.
- A searcher asking about the off season wants to know how empty January is and what it costs them.

## The list, ranked (research in this order)

1. **What will a nightly rental here keep, before any loan?** Gross, then each cost in dollars, then what is left. For a real kind of home for sale today, not a made-up one. ("airbnb profit calculator", "condo rental income", "is airbnb profitable".)
2. **How many nights must it book to pay its own bills?** The condo fee, the property tax at 6 percent and insurance, divided by what one booked night keeps. Set against how many nights listings here really book. ("airbnb break even calculator", "occupancy rate", "what is a good occupancy rate".)
3. **Which town: what each one brings in and how its season runs.** Average gross, nightly rate, share of nights booked, the two-bedroom and three-bedroom figures, by town. ("myrtle beach average airbnb gross income", "north myrtle beach airbnb", "surfside beach airbnb", "murrells inlet airbnb", "best place to buy airbnb".)
4. **How seasonal is it?** Month by month for an oceanfront condo market (Myrtle Beach) and a house market (Murrells Inlet), the share of the year earned in the three best months, and the water temperature by month. ("off season dates", "peak season dates", "busiest month", "water temperature by month".)
5. **What does each cost line come to?** Airbnb's fee, cleaning (paid by the guest's fee), utilities, supplies, repairs, insurance, management. ("airbnb expenses list", "what percentage does airbnb take", "airbnb management fee percentage", "cleaning fee average".)
6. **What tax does the guest pay on top?** The lodging tax on a summer week in dollars, and that the guest pays it, not the owner. Link /invest/accommodations-tax/. ("horry county short term rental tax".)
7. **Can I rent it nightly at all?** One line per kind of place, from the rule, then link /invest/str-rules/. Say how many homes for sale are marked for nightly rentals in each town. ("myrtle beach short term rental zoning map", "can you airbnb in myrtle beach", "airbnb for sale".)
8. **Is it getting more crowded?** How many more listings each town has than a year ago. (Not searched as such; it is the reason behind "is myrtle beach good for airbnb" and the fact a top agent would raise.)
9. **The other STR pages, by question** (the "tools" the menu promises).
10. **What Chapter3 does next:** we run one address: the building's fee and what it covers, the tax, the rules, the season, before an offer. Chapter3 does not manage rentals.

## The deciding fact (CRAFT 2, researcher 4c)

For the page as planned: **on the most common kind of nightly rental for sale here, a two-bedroom condo in an oceanfront building, the condo fee and the 6 percent property tax alone are larger than what the average two-bedroom Airbnb keeps after its running costs.** If that holds, the page's message is not "Airbnbs gross $X" but "the building's fee decides the deal", and the calculator must start from the fee. Checked first; see `facts.md` rows 9 to 12.

## Words readers use (say each once, in context)

Airbnb, short-term rental, STR, vacation rental, nightly rate, occupancy rate, cleaning fee, Airbnb fee (service fee), HOA fee (the condo association fee), property manager, off season, peak season, break-even, calculator, oceanfront, condo, gross income.
