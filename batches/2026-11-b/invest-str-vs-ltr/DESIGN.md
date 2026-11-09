# /invest/str-vs-ltr/: design pass

Reader: someone who owns or is about to buy a Myrtle Beach home, often a two-bedroom condo, and wants to know whether it pays more as an Airbnb or on a yearly lease. They want one number each way, how many nights it takes, the slow months, and what can go wrong.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-16 at 1440 x 900, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer gives one answer with one number each way: 82 nights to match a lease, about $8,000 more at 124 nights, about $3,000 less for the middle listing.
- The "same two-bedroom, both ways" bar chart: three bars, the number on each bar.
- The nights table (60 to 150 nights against the lease) and the break-even calculator, which opens on the 82-night answer and takes a manager's share.
- The month chart: twelve months against the lease line, the four winter months in grey.
- The honest parts: the top-quarter listing, the friend's example with "His real numbers, not a promise", the manager's 40 to 60 percent and the 135 nights it then takes.
- The count of homes for sale by what the listing allows, the oceanfront photo, the federal tax note, the pros and cons with what to do about each con, the FAQ, the sources and every offer.

## What looks ugly, cluttered or hard to read

1. **The first screen is all headline and badges** (`first-1440.png`, `first-390.png`). The italic "Run the same home both ways." is set at the H1's size, so it is as loud as the question. Under it, four badges sit in a two by two grid of white cards. On a phone the H1, the italic line and the four cards fill the screen, and the answer starts at the bottom edge, three lines cut off.
2. **The contents list is a tall white card** (`slice-02`, `phone-03`): seven links, one per row, about 260 px of box between the offer and the first section.
3. **The pros and cons are two pairs of big cards** (`slice-10` to `slice-12`). Each con carries a second line inside the bullet, so the cons card runs a whole screen while the pros card beside it stops halfway, leaving an empty block. Four cards in a row of boxes.
4. **Boxes everywhere, and a ragged right edge** (`slice-02`, `slice-04`, `slice-06`, `slice-08`). The nights table is a white card, the friend's example a box, the photo a framed card, and there are four offer boxes in the body (the top offer, "Can the home you like take nightly guests?", "What do the Airbnbs near one building take in?", "Both numbers for one home"). Blocks end at 774 px (calculator), 874 (offers), 914 (month chart and photo), 974 (bar charts) and 1,114 (the table). The right edge jumps every screen.
5. **The month chart takes effort** (`slice-10`). Its title, "What the owner of the average Myrtle Beach Airbnb keeps each month, against a two-bedroom lease", describes the chart but does not say what it shows. Each month's number sits at the far right, up to 400 px from the end of its bar, so the eye has to run across to match them. The other two chart titles also describe rather than say the finding.

## One change per problem

1. The italic line at about half the H1's size, on its own line. The four badges become flat facts between two thin rules, the number first and the words under it: four across on a wide screen, two across on a tablet, four short rows on a phone. The answer under the byline now shows in the first phone screen.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. The pros and cons become plain two-column lists under a thin rule, with "Pros" and "Cons" as small brass labels. The what-to-do line under each con stays, in smaller navy type after a brass arrow, so it reads as the answer to the con, not a second bullet.
4. One card style, kept for the two bar charts, the month chart, the calculator and the offers. The nights table becomes a plain table under thin rules (a table on a phone too, not five cards). The friend's example keeps its brass left rule and loses its box. The photo loses its frame, and on screens 1,180 px and wider it sits beside the homes-for-sale chart, whose first row is the oceanfront condos it shows. Every block is 720 px wide, the same as the offers. The body offers go from three to two: the "nightly guests" offer leaves with the section the overlap fix replaces (below); the month offer and "Both numbers for one home" stay, plus the top offer and the closing band.
5. The month chart's numbers sit at the end of each bar. The three chart titles say the finding in plain words, with the same facts.

## Overlap fix (given)

- The month H2 is renamed "What the same two-bedroom earns each month, both ways", and one short sentence links to /invest/airbnb-income/ for market-wide figures.
- The H2 "Can you Airbnb a home in Myrtle Beach?" and its zoning, license, lodging-tax and "nightly guests" offer are replaced by one sentence linking to /invest/str-rules/. The homes-for-sale chart, the photo and the federal income tax note stay: they compare the two choices, and no other page has them. They move to the end of "Which earns more".
- Keywords dropped: "Myrtle Beach condo Airbnb" and "Horry County short term rental" (both are whether-you-can searches the rules page owns). No keyword asked how much an Airbnb makes.

## Word changes

- H2 "How much does a Myrtle Beach Airbnb make each month?" -> "What the same two-bedroom earns each month, both ways".
- Added: "What Myrtle Beach Airbnbs gross across the market is on our Airbnb income page."
- H2 "Can you Airbnb a home in Myrtle Beach?" and its section -> "Whether a home can rent by the night, and the license and tax, is on our short-term rental rules page."
- Chart title "What the owner of a Myrtle Beach two-bedroom keeps in a year, before the loan, tax and HOA fee" -> "Booked a third of the year, a Myrtle Beach two-bedroom Airbnb leaves its owner more than a lease. The middle listing leaves less." Its note now starts "What the owner keeps in a year, before the loan, tax and HOA fee."
- Chart title "Homes for sale that the listing marks as allowing short-term rentals" -> "Homes for sale marked for short-term rentals: most oceanfront condos, fewer houses".
- Chart title "What the owner of the average Myrtle Beach Airbnb keeps each month, against a two-bedroom lease" -> "The owner of the average Myrtle Beach Airbnb keeps more than a lease each month, except November to February".

## Cut sentences (the overlap fix)

- H2: "Can you Airbnb a home in Myrtle Beach?"
- "Inside Myrtle Beach city limits, a stay under 90 days counts as short-term. The city's residential zones do not allow it, except one, the Residential Multifamily Visitor zone. Most of the city's traditional neighborhoods are not zoned for it."
- "Carolina Forest is outside city limits, in unincorporated Horry County. There the county's zoning code has no short-term rental rule. A home's HOA rules may still not allow nightly stays. North Myrtle Beach and Conway have their own rules; our page on short-term rental rules gives them town by town."
- "Every rental in the City of Myrtle Beach, short-term or long-term, needs a city business license."
- "A listing's mark is what the listing agent entered." (the chart's note says the same: "by what the listing agent entered")
- Offer: "Can the home you like take nightly guests?" / "Before you offer, we tell you what its zoning, the city's rules and the building's own rules allow." / "Have us read its rental rules"
- H3: "What taxes apply to each?"
- "On a stay under 90 days, the guest pays the lodging taxes on top of the price. South Carolina's state tax on the stay is 7 percent. Inside Myrtle Beach, the state and local sales tax on a room comes to 10 percent, and the city and county add their own taxes. Airbnb collects the state taxes and Horry County's."
- "Our page on short-term rental rules lists the filing an owner may still make. A home rented out 14 days or fewer a year is not taxed as lodging; our page on the 14-day rule explains it."

The FAQ keeps its answers on where nightly stays are allowed and on lodging tax, so those facts are still on the page. Their sources stay in the sources box.
