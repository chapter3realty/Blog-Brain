# /sell/cash-offer/: design

Batch 2026-11-n, Lane N (a new page). Spec: `specs/sell-cash-offer.js` in the website working copy. Screenshots: `<scratch>/wfn/sell-cash-offer/shots/` (390, 768 and 1440 px, full page).

## What the page is

A decision guide for a Horry County owner who got a cash offer, or is thinking of asking for one. The job, in one verb: decide. Take the cash, list it as it is, or fix it and list it. The reader fears two things: losing a lot of money, and being taken by a stranger. The page answers both with the county's own records and a checklist of what our agents check.

The answer comes first: list it, unless the house needs heavy repairs, cannot get a loan or insurance, or must be sold by a fixed date. Then the number: companies that bought houses from their owners and resold them within a year had paid a middle 68 percent of the resale price. On a $260,000 house that is about $178,000, or $82,000 less.

Order: who the cash buyers are, how much less a cash offer is and how it is priced, what you keep three ways, when cash is the better choice, selling as is, how we check the buyer and the contract (with South Carolina's 2024 wholesaling law), a short FAQ.

## Which approved treatment, and why

The four pilots of batch 2026-11-a (selling by owner, Pawleys Island, HOA liens, condos). Selling by owner is the closest model: a seller page with a worked example, a three-ways comparison and plain legal facts.

- **Headline.** Two lines, with the italic sub line at about half the H1 size. The hero sub paragraph is hidden, as on the pilots, because the short answer says it.
- **Three key facts under the H1** (68 percent, 1 in 9, at least 1 in 3). On a phone they are three short rows, not squeezed columns.
- **Offers.** The slim bar under the short answer, an offer box after the price section, after the "when cash is better" section and after the checklist, and the full band at the end. Each is tied to the question just answered, and no two use the same words. Every button to /contact/ is a request ("Send us ...", "Have us ...").
- **One card style, used once.** The three ways to sell (cash, as is, fixed up) are the one place the reader chooses between options. They use the same comparison table as the selling-by-owner page: a table on a wide screen, three cards on a phone.
- **Plain lists under thin rules everywhere else.** The three kinds of cash buyer, the wholesaling rules, and the six things we check (numbered, no box around each item). The decision table is a plain table under thin rules; on a phone each row becomes a heading and its answer.
- **Large numbers under a thin rule, no box,** for three small sets of figures: buyers with no loan recorded, the quick resales and neighbors' prices, and the cash-only listings counted on the day.
- **One block width of 720 px** for charts, lists, the table, the stat rows and the offers. Text keeps its own measure.
- **On screens 1,100 px and wider,** the bought-and-resold chart sits beside the three paragraphs that explain it, and the photo sits beside the two paragraphs that open "When is a cash offer the better choice?". Below 1,100 px nothing floats.

## What was changed after looking at the screenshots

- The bought-and-resold chart spilled its price label out of its frame in the 380 px side column. Its rows now stack (name, then bar) inside that column.
- The spare height beside the chart opened a gap between two paragraphs; the grid now puts the spare space after the last paragraph.
- The three-ways table had six narrow columns. The "How it works" column was dropped; the table has five.
- "55 manufactured homes" broke into three lines of large type. The large figure is now the number alone.
- Two long runs of text on a phone (the price section, the wholesaling law) became a pair of large numbers and a plain list.
- The decision table's caption collapsed to one word a line on a phone; fixed.

## The photo

One photo, the only one the page needs until the photo partner's shots come in: floodwater on a street of houses in the Conway area after Hurricane Florence (SC National Guard, public domain; the record of /buyers/undisclosed-flooding/, reused; VERIFY.md P1). Its caption states row 22's fact: a house left with damage to its structure cannot get a loan Fannie Mae will buy until it is repaired. It is a second choice. The shot list asks for a roadside "we buy houses" sign, a house that needs work, a renovated one and an "as is" rider, and any of them should replace it.

## Gates (2026-11-08)

- score.js: 99/100. The one point below 100 is S8 (2+ pages link here), which the hub links in NEEDS.md fix.
- claims-scan: 0 findings on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording. repeat-check --strict: passes.
- critic.mjs at 390, 768 and 1440 px: 0 blocking, 0 warnings.
- build.js check: the only failure on this page is the sitewide footer (150 pages differ from partials/footer.html until `node build.js stitch` runs, which this stage does not run).
- build.js audit: this page fails only on "missing from sitemap.xml" and three links to sibling pages of this batch that are not built yet (/sell/repairs-before-selling/, /sell/divorce/, /sell/seller-disclosure/).
