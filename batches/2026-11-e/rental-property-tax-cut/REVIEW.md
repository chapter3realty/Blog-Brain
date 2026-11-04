# Review: /invest/rental-property-tax-cut/

Reviewer: critic, cold reader and owner's eye, on the built page in `web3` (preview port 8914), 2026-11-04. Shots at 320, 390, 768 and 1440 were read at full size, in slices (`scratchpad/wf3/review-rental-property-tax-cut/`). The calculator was tested: city and unincorporated, $350,000 and $200,000, and an empty box. Every result matches the levy file.

## Scores

| Test | Score |
|---|---|
| Visuals | 8 |
| Readability | 8 |
| Value | 9 |
| Uniqueness | 9 |
| Truth | 8 |
| Balance | 8 |
| SEO/AEO | 9 |

## The numbers you asked about, recomputed

| Claim on the page | Recomputed from the data files and ledger | Stands? |
|---|---|---|
| Unincorporated, "like an owner's home": $1,173 | 350,000 x 0.04 = 14,000. 192.9 - 109.1 = 83.8 mills (F144, F148, F086). 14,000 x 0.0838 = $1,173.20. | Stands. It is derived, not a ledger row, and the data README says so. Calculator at $200,000 gives $670 (8,000 x 0.0838 = 670.40), also right. |
| The parts of the $5,347 bill | Assessed 21,000 (F145). School operating 109.1 mills = $2,291.10; city 83.4 = $1,751.40; county 52.1 = $1,094.10; school debt 10.0 = $210.00. Sum $5,346.60 = F145. | Stands. All four round correctly and add to the total. |
| "About a sixth" of the tax base | 47.2 / 3 = 15.7 points of 2018 assessed value (F149). A sixth is 16.7. | The arithmetic stands as "about a sixth", but the scope does not. See Blocking 2. |
| "4 votes short" / "4 Democratic votes" | 83 needed (F083) - 79 Republicans (F011) = 4. | Stands, as the unofficial count. The page gives the recount caveat (F014). |
| "If 42 of the 45 Democrats voted no, it would fail" | 45 - 42 = 3 Democratic yes votes. 79 + 3 = 82, one short of 83. With 41 no, 79 + 4 = 83 passes. So 42 is the smallest number of no votes that stops it. | Stands, at the unofficial 79-45 split. |

Other figures checked: $3,564 and $2,037 (F146, F147); $4,051 and $2,701 (F148); savings $1,782 to $3,310 (5,346.60 - 3,564.40, 5,346.60 - 2,037.00); unincorporated savings $1,350 to $2,878; "a third to three fifths less" (33.3% and 61.9%); waste levy "about 4%" (8.1 / 192.9 = 4.2%); 83 and 31 (F083); 34 R, 12 D (F012); 51.71% to 47.00% (F006); H. 3841 109-0 and 43-0 (F154); Lincoln shares (F149, at the CORRECTED definition, no "second homes"); 0.5% and 1.5% attributed to the Lincoln study (F152 CORRECTED); Florida 10% and "3% or inflation, whichever is lower" (F158 CORRECTED); 25% exemption and January 31 (F143); 7%, 3% and the 14-day carve-out (F088, F089); S. 815 (F153); November 2028 route (F084). The "taxes stop more rental deals than insurance" line is the owner's story in `stories/stories.json` (line 2875), with nothing added.

## Earlier audit flags

| Flag | Status |
|---|---|
| "runs the other way" | Gone. |
| ", not only" | Gone. |
| "obviously" | Gone. The WIS quote now opens with an ellipsis before "looking at Act 388". |
| Sentences starting "And" | Gone. None in the copy. |
| Sentences over 28 words | One is left. See Blocking 3. |

No em dashes. No interest rate, payment amount, lender or financing offer. Devin Day and Abdulla Hijazi are in the byline only. Paul is not named.

## BLOCKING

1. **Hero card spills at 320 px.** The third stat card, "83 House votes / needed; Republicans hold 79". The word "Republicans" runs 3 px outside its card (critic `overlap.spill`, span.t at 206,608). Fix: let the card text wrap inside its box at narrow widths (smaller stat sub-text below 340 px, or `overflow-wrap:anywhere`), or shorten the sub-line to "needed; GOP has 79" only if the owner accepts "GOP". The safest is "needed. Republicans: 79" at a smaller size. Re-run the critic at 320.

2. **"About a sixth" is stated wider than its source.** Two sentences:
   - "It would take about a sixth of the taxable value off Horry County's rolls, at 2018 shares."
   - "About a sixth of the county's taxable value would come off rentals."

   Table 2.3 covers only real property the county assessor values (F149 CORRECTED: "properties valued by county assessors"). It leaves out property the state values (manufacturing, utilities) and personal property and vehicles. So it is not the county's whole roll. The figure also assumes every parcel in the 6% "other residential" class moves to 4%, and the FAQ says lawmakers have not decided whether a second home that is never rented is in. Fix the first: "At 2018 shares, it would take about a sixth of the taxable value off the real property the county assessor values, if every home now taxed at 6% moved to 4%." Fix the second the same way: "About a sixth of the taxable value of the real property the county assessor values would come off, at 2018 shares."

3. **One sentence over 28 words is left (31 words).** Past-examples table, Florida row: "The taxable value of a home that is not the owner's homestead, with nine units or fewer, can rise at most 10% a year, for every tax but the school tax." Fix: "Florida caps the yearly rise in taxable value at 10% for a home of nine units or fewer that is not the owner's homestead. The cap covers every tax but the school tax."

## Nits

- **Photo.** At every width a blurred white umbrella fills the lower left third of the frame. At 320 the photo is a thin strip. A tighter crop on the towers (drop the umbrella) would read better. Not blocking: the licence and subject are fine.
- **Share chart labels at 320 and 390.** "35.5% of value", "30.8% of tax base" and the rest are about 9 px. Raise them to 12 px on phones.
- **"Homes owners live in"** reads like the typo "homes owners" in three places: the Act 388 table row ("Homes owners live in stopped paying..."), the long-run bullet ("Homes owners live in and businesses would pay..."), and the share chart label. Use "Homes their owners live in".
- **"In the House, Democrats now decide whether a rental change can pass."** True by the arithmetic, but it puts the outcome on one party. Plainer: "In the House, a rental change needs Democratic votes."
- **"Florida's cap on rentals"** (table row label). The cap covers every non-homestead home of nine units or fewer, rented or not. Use "Florida's cap on non-homestead homes".
- **Calculator.** It does not apply the 25% exemption a rental gets after a sale. Add one line under it: "Before the 25% exemption a rental gets when it sells."
- **42 Democrats.** If a recount moves one seat, the number becomes 41 or 43. The recount paragraph is two sections up. A short "at today's count" in the sentence would hold it.
- **read.wall warnings** at 390 (912 px) and 320 (two runs, 1,075 px and 912 px), in the hero-to-short-answer run and in "What we do now". The hero run is the dek, the stat cards and the short answer, so it is acceptable. "What we do now" at 320 could take a short list for its three actions.

## The reader

- The answer is in the first two sentences: what Wilson plans, and the $5,347 / $3,564 / $2,037 bills. The third tells the reader there is no bill yet and gives the vote gap.
- A reader can act on it: the calculator, and the advice to "buy and sell on the tax a rental pays today".
- The question left open: who pays the difference. The page says the state has not said, which is true. No source answers it.
- Where a reader would stop: after the calculator, for most investors. The cost and long-run sections serve the reader who wants to know whether it will pass.

## Balance

Wilson's plan gets more space because it is the subject of the page. Johnson gets the same tests in a side-by-side table (goal, names the rental rate, other items, whose words), and the page says plainly that his summary does not name which taxes. Andrews is placed correctly as federal. Both sides of the Act 388 debate are given: the USC note and Lincoln study against, nohometax.org for. No prediction is stated as certain; the past-examples table ends "None of this is a forecast".

## Fix round 1: changes made (builder, 2026-11-04)

Blocking:
1. **320 px stat card.** The third hero card now reads "83 of 124 / House votes a change needs". The 79 is said in the short answer. Below 360 px the card sub-text is .75rem. Re-shot at 320: nothing spills, and no word breaks.
2. **"About a sixth" scoped.** Section "What would it cost": "Suppose every home now taxed at 6% moved to 4%. At 2018 shares, that would take about a sixth of the taxable value off the real property the county assessor values." Long-run card: "About a sixth of the taxable value of the real property the county assessor values would come off, at 2018 shares." The first sentence is split in two to stay under 28 words.
3. **Florida cell split.** "Florida caps the yearly rise in taxable value at 10% for a home of nine units or fewer that is not the owner's homestead. The cap covers every tax but the school tax."

Nits:
- Photo recropped to the towers (x 240 to 880, y 200 to 520 of the 1920 px rendition). Only the top of one umbrella shows, in a corner, and no person is in the frame. The record's `what`, `alt` and `subject_check` are updated, and `photos.js check` passes.
- Share chart redrawn for phones: viewBox 300, labels 17 to 18, shorter bars so the labels fit. Vote chart: viewBox 300, labels 16 to 18, marker label shortened to "83 needed" / "31 needed".
- "Homes their owners live in" in every place it appeared: the Act 388 table row, the long-run bullet, the chart label, its aria text, and the state fund sentence.
- "In the House, a rental change needs Democratic votes. At today's count, if 42 of the 45 Democrats voted no, it would fail even with every Republican voting yes."
- Table row label: "Florida's cap on non-homestead homes".
- Under the calculator: "Before the 25% exemption a rental gets when it sells."
- "What we do now": the three actions are a list under "When you buy or sell a rental, our agents check its numbers three ways:".

Not changed: the read.wall warning in the hero run at 320 and 390. As the review says, it is the dek, the cards and the short answer.
