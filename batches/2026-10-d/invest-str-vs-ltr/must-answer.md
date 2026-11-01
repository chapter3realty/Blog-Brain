# Must-answer list: /invest/str-vs-ltr/

Batch 2026-10-d, Lane U, research stage, 2026-11-01. Built from real demand before any research (CRAFT 1, `templates/must-answer.md`).

## Where the demand came from

1. **Google suggestions**, read 2026-11-01 through `suggestqueries.google.com` (raw list: `web2/data/2026-10-d/invest-str-vs-ltr/` is for data; the suggestion dump is in the scratch folder `wf2/invest-str-vs-ltr/suggest.txt`). Seventeen seed phrases. What came back, grouped:
   - The comparison itself: "airbnb vs long term rental", "... income", "... returns", "... calculator", "... taxes", "is airbnb or long term rental more profitable", "is it better to airbnb or long term rental", "short term rental vs long term rental tax benefits", "short term vs long term rental pros and cons", "difference between short term and long term rental", "vacation rental vs long term rental".
   - Local: "short term rentals myrtle beach for sale", "long term rental myrtle beach sc", "long term rentals myrtle beach oceanfront", "long term condo rental myrtle beach", "myrtle beach condo airbnb", "north myrtle beach condo airbnb", "horry county short term rental laws", "horry county short term rental tax", "horry county long term rentals", "snowbird rentals myrtle beach monthly", "winter rental myrtle beach", "seasonal rental myrtle beach", "myrtle beach rental property management".
   - "is airbnb profitable in myrtle beach" and "should i rent my condo short term or long term" returned no suggestions (too long), but both are the plain form of the question.
2. **People also ask / search results** for "Airbnb vs long-term rental Myrtle Beach condo which earns more" (2026-11-01): vendor pages (AirROI, Airbtics, BNBCalc, Mashvisor), BiggerPockets threads, and news on the city's ban on converting short-term rentals east of Kings Highway. The recurring questions: which earns more, after costs; what management costs; is it seasonal; can I even do it here; what lenders count.
3. **What the owner hears** (`stories/stories.json`): the worst short-term mistake is self-managing with the cheapest cleaner (`str-cheapest-cleaner`); lenders count only 75 percent of a short-term rental estimate (`dscr-lender-figures`); rental programs sit in oceanfront short-term buildings, and those buildings are often non-warrantable (`rental-program-buildings`); a retired hotel manager runs three oceanfront condos (`boston-hotel-manager`).
4. **The judge** (`audit/judged-2026-10-31.json`): one property run both ways, a break-even, who rents year-round, where nightly is allowed, the middle path at 90 days, a one-line verdict for each reader.

## Why they typed it

- Most searchers already own, or are about to buy, one specific condo or house. They want to know which way **that** home makes more money, and they suspect the Airbnb numbers they have seen are the best case.
- An owner of an oceanfront condo who is tired of turnovers wants to know if a lease is allowed and what it would pay.
- A buyer from out of state wants to know if nightly renting is even legal for the home in the listing, and whether the lender will count the income.

## The list, ranked (research in this order)

1. **Which makes more money here, after costs, for the same home?** One condo and one house run both ways in dollars a year, with the costs that differ. Not gross. (Every suggestion group.)
2. **Can I do nightly rentals at this home at all?** City of Myrtle Beach: R districts other than RMV are closed; the oceanfront overlay works the other way and bars long leases in short-term buildings. Unincorporated county and HOAs. How many homes for sale say nightly is allowed, by area. ("horry county short term rental laws", "short term rentals myrtle beach for sale", judge.)
3. **How many nights must it book to beat a lease?** The break-even, self-run and with a manager. ("calculator", "returns", judge.)
4. **How seasonal is it?** Month by month, nightly against the lease. Which months fall below the lease. ("winter rental", "seasonal rental", judge.)
5. **What does management cost, and what work is it if I do it myself?** Check-outs a year against one lease. Management ranges. ("rental property management", owner's cleaner story.)
6. **Who rents year-round here?** The job base in January against July. ("long term rental myrtle beach sc", judge.)
7. **The taxes:** who pays lodging tax (the guest), what property tax is either way (6 percent, the same), and the federal tax difference in one line with a link (the 7-day rule lives on /invest/str-tax-treatment/ and /invest/14-day-rule/). ("airbnb vs long term rental taxes", "tax benefits".)
8. **Financing:** what a lender counts for each (a lease against 75 percent of an estimate), and the condotel problem. No rate, no payment, no down payment percentage. (Owner stories, judge.)
9. **The middle path:** furnished stays of 90 days or more, and where they are banned. Link /invest/mid-term-rentals/. ("snowbird rentals myrtle beach monthly", judge.)
10. **Pros and cons, plainly,** each from a row. ("pros and cons".)
11. **What Chapter3 does next:** run one address both ways and read the building's papers before an offer. Chapter3 does no property management (owner, batch 3).

## The deciding fact (CRAFT 2, researcher 4c)

For the reader: **on the typical two-bedroom in Myrtle Beach, nightly renting grosses about 1.1 times a lease, not 2 to 3 times, and keeps less than the lease once its running costs are paid.** Nightly wins clearly only at the top quarter of listings, and a full-service manager takes that edge away. That replaces the live page's title claim.

For the page to be written as planned: the City of Myrtle Beach rule that closes R districts (except RMV) to stays under 90 days, and the conversion overlay that bars stays of 90 days or more in short-term buildings of more than two units between Kings Highway and the ocean. Both are in force (city page read 2026-11-01; overlay text from the code as read 2026-09-06, re-read blocked today, see facts row 15).

## Words readers use (say each once, in context)

Airbnb, short-term rental, long-term rental, vacation rental, lease, nightly, yearly, snowbird, "pros and cons", occupancy, nightly rate, break-even, management fee, rental program, condotel, DSCR.
