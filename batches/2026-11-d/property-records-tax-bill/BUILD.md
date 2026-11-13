# Build: /buyers/property-records/tax-bill/

Built 2026-11-13 on wt-139. Spec: `wt-139/specs/property-records-tax-bill.js` (glass theme; structure of `property-records-gis-map.js`, `home-value.js` and `garden-city.js`). Author "devin"; Tim Nash reviews. Facts: VERIFIED rows and CORRECTED rows at the verifier's wording only. Data: `wt-139/data/2026-11-d/property-records-tax-bill/`. Share card: `wt-139/chapter3realty/og/buyers-property-records-tax-bill.jpg` (tools/ogcard.js).

## Search title, H1, description

- Title (61): `Horry County Tax Payments & Records: Pay Online, E-Check Free`. It keeps the plan's lead words ("tax payments" 6,600, "online" 720) and adds "records" (2,400, plus "by name" 590), with the true hook from F8. The plan's alternative left out "online" and the hook.
- Description (158): "Pay Horry County taxes online: search tax records by name, PIN or notice number, the card fee, the January 15 due date, installments and Tax Assessor appeals." It carries "horry county taxes" (4,400) and "tax assessor" (2,900), as must-answer asked.
- H1: "Horry County tax payments: find your bill and pay it online". Italic line, about half the H1's size: "Search by owner name or PIN, pay by e-check for free, and do it by January 15 to avoid a penalty."
- Sub: "The county's tax search needs no account. Three steps take you from an owner's name or a PIN to a paid bill."

## Outline

1. Short answer: pay on the Treasurer's Tax Payments and Receipts site, search by owner name, PIN, map number or notice number; e-check free, card 2.35%; due January 15, 3% the next day, 15% on March 17.
2. **How do I pay Horry County taxes online?** Navy button to the county's search (new tab), a note that the site is the Treasurer's and Chapter3 is a brokerage, not the county (Chrome or Edge, not Safari). Three steps with glass icons. Offer 1: "Have only an address? We find the bill." / "Have us find the bill". One line up to the hub and across to the deeds page.
3. **How much does it cost to pay Horry County taxes online?** Fee table (from `table-payment-fees.csv`, rewritten to VERIFY 8: no $3.95). The oldest year first; the county keeps none of the fee; paying by mail.
4. **When are Horry County property taxes due?** Penalty drawing (four bars from `timeline-unpaid-tax.csv`: none, 3%, 10%, 15%). Not getting the bill does not stop the penalty. Two worried-reader answers: "Did my lender already pay it?" and "Bought this year, and the bill went to the seller?" (F15; link to closing costs). Offer 2: "Bought or selling this year? We check who owes the bill." / "Have us check the bill".
5. **Can you pay Horry County property taxes in installments?** Schedule table (from `table-installments.csv`), then sign-up window, who qualifies, coupons only, the refund rule for a seller, the yearly packet.
6. **How do you search Horry County tax records by name, PIN or address?** Each way in one line; no address search, with the GIS guide for the PIN. Drawing of the bill's lines and what each means (no real bill; no reading of the Residential Exemption line, F37). The 4% rate on a home you live in, with links to property taxes, common mistakes and cost to own. Offer 3: "Looking at a house? See its tax bill before you offer." / "Have us pull the bill".
7. **What does the Horry County Tax Assessor do?** Three office cards (Assessor, Auditor, Treasurer) with phone numbers. H3 "Where are the Horry County tax offices?": the four Treasurer offices, the photo of the Government and Justice Center at 1301 Second Avenue (main office and the tax sale), the new Central Coast Complex in Carolina Forest (no "21st Avenue closed"), the mailing address.
8. **How do you appeal your Horry County property value?** 90 days after a notice is mailed; any time in a year with no notice (VERIFY 31). Five numbered steps with the 30-day counts. The 80% rule, the five-year reset and 15% cap, who can present it (VERIFY 34; no "11 members"). Offer 4: "Think the value is too high? We pull the recent sales." / "Have us pull the sales" (we send sales; we do not file or argue).
9. **What happens if Horry County property tax is not paid?** Timeline from the delinquent notice to the 12 months to redeem. Our finding: the opening-bid chart (from `chart-tax-sale-opening-bids.csv`): about half the properties on the list have an opening bid under $2,700; 1,772 properties, about 1 parcel in 170; 459 mobile homes on a second list. The list's day (November 12) is read from the data file. Link to the foreclosure and tax sale guide.
10. **How do you pay Horry County vehicle tax?** Renewals, the high-mileage month, the paper receipt for a first registration, the dealer bill (VERIFY 26 wording), the moving checklist; the PT-100 line for a property that was not the owner's home (VERIFY 38 wording), link to rental setup.
11. **Georgetown County tax payments for Pawleys Island and Litchfield.** Payment site, Treasurer, DMV receipt, installments every year, delinquency and sale, the 2025 reset and 90-day appeal, rentals' two notices, qPublic. No card fee printed (F42).
12. FAQ (7, each answered on the page): pay by phone; copy of a receipt; never got a bill; penalty waivers; unclaimed refunds; the Myrtle Beach office; is Chapter3 the county.
13. Sources line and photo credit. Closing band: "Buying a house in Horry County? We read its tax bill with you." / "Have us read the tax bill".

Every request button goes to /contact/. The one outside button goes to the county's payment site and is styled navy, so it does not read as our offer. No homes strip in the body: the edge feed sits under the opening (PLAN "Homes strips"). Own pages linked from the body: 12 (gis-map, deeds, closing costs, property taxes twice, common mistakes, cost to own, Carolina Forest, foreclosures, moving checklist, rental setup, Pawleys Island). The hub link is written as plain words until /buyers/property-records/ exists in the working copy (`sib()`); rebuild this spec once it does.

## Gate results (final build)

| Gate | Result |
|---|---|
| `score.js --only /buyers/property-records/tax-bill/` (SCORE_TODAY=2026-11-13) | 97/100 (SEO 92, AEO 100, Human 99, Trust 100). One FAIL: S8, no other page links here yet (lead item). P6 at 75%: "legal residence" once, defined in the same sentence ("A home you live in, which the county calls a legal residence"). |
| `claims-scan.js <wt-139>` | 0 findings |
| `facts-check.js <wt-139>` | 0 on this page. The 4 wrong sentences site-wide are older (from-massachusetts, from-virginia, llms-full.txt). |
| `house-claims.js` on the page | 0 sentences |
| `struck-check.js --batch batches/2026-11-d --strict` | no struck wording on this page (15 patterns) |
| `repeat-check.js --strict` | passes |
| `critic.mjs` at 390, 1024, 1440 | 0 blocking, 0 warnings |
| `build.js check` | OK, nothing on this page |
| `build.js audit` | two FAILs, both lead items: "missing from sitemap.xml" and "orphan: no other page links to it from body copy". Notes only: not in llms.txt, no Tim Nash sentence (none may be written), 5 sentences over 22 words (none over 28). |

Fixed on the way: no photo in the blog (critic block; now the licensed Government and Justice Center photo, reused from /hoa/liens-and-foreclosure/), no chart the scorer could read (the penalty drawing is now an SVG), no share card, "sets" (register), a caption that put each penalty a day late, three tables that stacked into long label rows on a phone (now plain two- and three-column tables), a duplicated redeem line, double rules under tables and steps, an oversized penalty chart on wide screens, sentences over 28 words, "may" where "can" or a plain statement reads better.

Phone measure: the H1 to the end of step 3 is about 2.2 phone screens (the plan hoped for 1.5). The short answer box that mkpage places under the hero takes the difference; the county button is on the second screen.

## Screenshots

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-tax-bill/shots/`
- `buyers-property-records-tax-bill-390.png`
- `buyers-property-records-tax-bill-1024.png`
- `buyers-property-records-tax-bill-1440.png`

Critic JSON: `.../nd/property-records-tax-bill/critic.json`. Slices looked at full size: `.../nd/property-records-tax-bill/cuts/`.

## For the lead

### Sitemap

```
<url><loc>https://chapter3realty.com/buyers/property-records/tax-bill/</loc><lastmod>(build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
```

0.85: the page owns the largest search cluster of the three task pages (tax payments 6,600; tax assessor 2,900; tax records 2,400), the same priority as /buyers/property-taxes/.

### llms.txt

```
- [Horry County Tax Payments & Records: Pay Online, E-Check Free](https://chapter3realty.com/buyers/property-records/tax-bill/): Horry County tax payments: find a tax bill by owner name, PIN, map number or notice number (no address search), pay online (e-check free, card 2.35%), the January 15 due date and penalties, installments, what each line on the bill means, the Assessor, Auditor and Treasurer offices, value appeals, our count of the tax sale list, vehicle tax, and Georgetown County.
```

### Rebuild after the hub ships

Review 1: the breadcrumb reads "Buyers" until /buyers/property-records/ exists in the working copy, and the hub sentence is plain words. Rebuild `specs/property-records-tax-bill.js` after the hub is built; both then link the hub.

### New places or feeds

None. The page uses the site's edge feed under the opening. No named strip (a second strip would clutter a task page).

### Pages that should link here (11; on words already there where possible)

| Page | Suggested sentence (link on the bold words) |
|---|---|
| /buyers/property-records/ (hub, first screen) | "To find and pay a tax bill, use our **Horry County tax bill guide**." |
| /buyers/property-records/gis-map/ | Its spec already links here through `sib()` ("the lot's tax bill", "how to look up a tax bill"). Rebuild `specs/property-records-gis-map.js` and the links appear. |
| /buyers/property-records/deeds/ | "Unpaid county tax is the Treasurer's; **look up and pay the tax bill** by owner name or PIN." |
| /buyers/property-taxes/ | Cut the "Horry County property tax due dates and penalties" calendar to one line: "Bills mail in October and are due January 15; the **due dates, penalties and how to pay** are on our tax bill page." (must-answer: this page owns due dates and penalties; the rate, 4% vs 6% and the estimate stay there.) |
| /buyers/cost-to-own/ (property tax row) | "Last year's bill for any home is on the county's tax search; **here is how to find it**." |
| /buyers/common-mistakes/ (the 6% mistake) | "The bill shows the assessed value: **see what each line on the tax bill means**." |
| /buyers/closing-costs/ (seller's share of the year) | "After closing, the next bill may go to the seller; **who owes it and how to pay it**." |
| /invest/foreclosures/ ("What about the county tax sale?") | "Our count of this year's **tax sale list** shows about half the opening bids under $2,700." |
| /buyers/relocating/moving-checklist/ (vehicle tax step) | "Pay the vehicle tax first; the DMV needs the **paper receipt from a Treasurer's office**." |
| /sell/inherited-house/ (back taxes) | "Back taxes on the house are on the county's tax search; **here is how to find the bill**." |
| /hoa/tax-deductible/ (tax receipt) | "A copy of a property tax receipt is on the county's site; **how to print one**." |

### Site fixes found (from the ledger)

- /buyers/relocating/moving-checklist/ gives the Auditor and Treasurer in Myrtle Beach at 1201 21st Avenue North. The county now lists 332 Hinson Drive (F30). /invest/landlord-rules/ (spec line 93) gives the Myrtle Beach magistrate at 1201 21st Avenue North; the county's release lists a magistrate court at the Central Coast Complex. Say "now at 332 Hinson Drive"; do not say the old office closed (VERIFY 30).
- Register `horry-tax-office-myrtle-beach` (332 Hinson Drive) in `facts/registry.json`, with a firing and a quiet control from site text.

### Optional photo

Ask the photo partner for the Central Coast Complex entrance on Hinson Drive. It would replace or join the Conway building photo in the offices section.

## How this page gets the biggest share of its searches

The owner asked how to take the biggest share of these searches. Five things matter, in order:

1. **One page per search.** The page owns tax payments, tax records, tax bill search, tax office and tax assessor. /buyers/property-taxes/ must drop its due-date calendar to one line and a link here (above). Otherwise the two pages split "due date" and "penalty" searches.
2. **Inbound links.** S8 fails today: no page links here. The 11 sentences above, the hub's first screen and a "Property records" menu item (README) give Google the signal.
3. **Words people type, in titles and headings.** The title carries "tax payments", "records" and "online". The H2s carry "pay Horry County taxes online", "tax records by name, PIN or address", "Tax Assessor", "tax offices", "installments", "appeal", "vehicle tax" and "Georgetown County tax payments". The description carries "horry county taxes".
4. **The answer first, and something only we have.** The county button and three steps sit on the second phone screen. Our count of the tax sale list and the drawing of the bill's lines are on no other site.
5. **Watch it.** After it is live, check Search Console for "horry county tax payments" each week. If it shows often and gets few clicks, try the plan's alternative title.
