# Must-answer list: /invest/rent-prices/

Batch 2026-11-a, Lane U. Built 2026-11-02 from Google search suggestions (40 queries, saved in the website copy at `data/2026-11-a/invest-rent-prices/raw/google-suggestions.txt`), the judge's notes for this page in `audit/judged-2026-10-31.json`, and what investors and owners tell Chapter3 (`stories/stories.json`). "People also ask" could not be read (Google blocks the results page to scripts); the suggestion lists carry the same questions in short form.

## Who searched this, and why

Two readers type the same words.

1. **The investor or the owner of a house.** They own a house here, or have a listing open, and want to know what it would rent for each month. They know the bedroom count and roughly where it is. They do not know the towns, the gap between what landlords ask and what tenants pay, or whether rents are still rising. They worry that the rent they plan on is too high, and that the house will sit empty. Next they ask: "would it pay at this price?" (that is /invest/run-the-numbers/) and "who will rent it?"
2. **The renter moving here.** They want the monthly cost of a 1 or 2 bedroom apartment or a 3 bedroom house, and the cheapest areas. The page is an investor page, but this reader gets the same numbers in the same tables. The offer is to the first reader.

Why they typed it: "how much can I rent my house for" is a planning question before buying or before moving out and keeping the house. "Is rent going down" is an investor checking whether to buy now. "Why is rent so high in Myrtle Beach" is a renter or a skeptic of the market.

## What the suggestions show (ranked by how many suggestions point to each group)

| Group | Suggestions that point to it | What the reader typed |
|---|---|---|
| A. The average rent, for the town | 20+ | "average rent in myrtle beach (sc)", "how much is rent in myrtle beach", "average monthly rent", "average rent price", "average rent horry county", "average rent conway sc", "average rent in north myrtle beach", "average rent in surfside beach sc" |
| B. By bedrooms and kind of home | 20+ | "rent in myrtle beach for 2 bedroom", "3 bedroom house for rent myrtle beach", "average rent for 1 bedroom apartment", "how much to rent a house in myrtle beach", "how much does it cost to rent a condo", "myrtle beach apartment prices", "3 bedroom houses under $1500" |
| C. By area, and the cheapest | 15 | "carolina forest rent", "socastee houses for rent", "conway sc rent", "murrells inlet rentals long term", "north myrtle beach", "surfside beach", "cheapest place to rent", "cheap houses for rent under $1000" |
| D. How much can I rent my house for | 12 | "how much can i rent my house for", "per month", "calculator", "zillow", "section 8", "how to determine rent price for a house", "how to find rent prices in an area" |
| E. Raising the rent, the law | 12 | "south carolina rent control", "does south carolina have rent control", "how much can a landlord raise rent in sc", "south carolina rent increase laws", "is south carolina a landlord friendly state", security deposit (6) |
| F. Is it a good place to buy a rental | 6 | "is myrtle beach a good place to buy rental property", "myrtle beach rental market", "is myrtle beach a good investment", "is myrtle beach cheap to live" |
| G. Up or down, and the season | 5 (empty lists, but typed) | "is rent going down in myrtle beach", "myrtle beach rent increase", "myrtle beach rental market 2026", "myrtle beach rent seasonal", "best month to rent" |
| H. Long-term, not vacation | 8 | "myrtle beach long term rentals", "long term rental homes", "murrells inlet rentals long term" (most "myrtle beach rentals" suggestions are vacation rentals; the page says once that it is about leases of a year) |

## The must-answer list, in order

1. **What a house rents for here, in one number, with what it includes.** The typical asking rent for a house in the Myrtle Beach area, and for an apartment, now. Whether utilities are in it. (Groups A, B)
2. **By bedrooms.** 2, 3 and 4 bedroom houses; 1 and 2 bedroom apartments and condos. Lease rent and the utilities on top. (B)
3. **By named area.** Carolina Forest, Socastee, Myrtle Beach, North Myrtle Beach, Surfside Beach, Murrells Inlet, Garden City, Little River, Conway, Red Hill, and the cheapest and dearest. The judge: "There is no rent for a 3-bedroom house in Carolina Forest, Socastee, Conway or North Myrtle Beach." (C)
4. **New lease against an old one.** Why one number is not "the rent": a tenant who moved in this year pays much more than one who has stayed five years. This is what an owner must plan on, and what a buyer of a rented house must know. (D, F)
5. **Are rents rising or falling, and against prices.** House rents over the last year and since 2019, next to house values, and what that does to a rental's return. (F, G)
6. **Why rent is high here.** Population growth from people moving in. (A, "why is rent so high")
7. **Which month to sign and end a lease.** The season in asking rents; the August story near the college. (G)
8. **How much can I rent my house for, and how we set it.** What raises and lowers the rent with numbers (bedrooms, house or apartment, how new the lease is), and what our agents do for one house. No automated value for any address. (D)
9. **The government rent (fair market rent) and what it is not.** One table, once, with the 40th percentile and utilities said plainly; the voucher reader is linked to /invest/section-8-rentals/. (A, D "section 8")
10. **Can a landlord raise the rent, and by how much.** No local rent control is allowed in South Carolina; how a month-to-month lease ends. Deposits and the rest link to /invest/landlord-rules/. (E)
11. **Is it a good place to buy a rental.** One line and a link: rent against price is /invest/run-the-numbers/'s subject. (F)
12. **Furnished and short leases, students.** One line each, linked to /invest/mid-term-rentals/ and /invest/student-rentals/. (H)

## Questions only the brokerage can answer (proposed answers; ask once)

- Do our agents set a rent for one house from MLS lease records of nearby homes? The live page says "An agent runs the number from current local leases and listings". Proposed: keep that sentence as the owner approved it on the live page; do not add a count of leases.
- Does Chapter3 have a story of a rent set too high, or a house that sat empty? None is in stories.json. Proposed: no story on that; use `august-turnover`.
