# Final fix: what changed, item by item

Page /buyers/first-time-home-buyer-myrtle-beach/, spec `specs/first-time-home-buyer.js` (version 4). Fixer, 2026-11-03. New facts are facts.md rows 53 to 55, marked VERIFIED-BY-FIXER for the lead to re-check. Row 52 (the old photo) is marked replaced.

## The lead's open items

1. **FHA's smallest down payment is never stated.** PLAYBOOK A17 bans a down payment percentage on every /buyers/ page, and `build.js audit` errors on one. So the page now states the rule in words (row 11):
   - A new first cash card, "FHA's smallest down payment, at a 580 score": "Every buyer with a credit score of 580 or more can get FHA's smallest down payment. From 500 to 579 you put more down, and below 500 FHA does not insure the loan. Your lender gives you the dollar figure for your price."
   - The short answer now says: "On an FHA loan, a credit score of 580 or more gets FHA's smallest down payment, and the seller can pay your closing costs."
   - The qualify card is shorter, so the rule is not said a third time: "SC Housing needs at least a 640 credit score. FHA needs 500, and 580 for its smallest down payment."
   - The count is now "Seven things can lower what you bring."
2. **The insurance question is left open.** The page now gives a figure, carried at the verified values of the cost-to-own ledger (row 54, Census microdata, 2024):
   - Two new rows in the yearly cost table:
     - Home insurance on a house: about $2,000 a year in the middle; half of owners pay $1,300 to $3,000.
     - A condo owner's own insurance: about $800 a year; the condo fee may also pay the building's insurance.
   - The note under the table says what the figure is: owners who live in their home, fire, hazard and flood insurance, Horry County outside the Loris area.
   - Under "Flood and wind": "The insurance figures above include flood and wind policies where owners have them. Your own quote depends on the house." The page links /buyers/cost-to-own/.
   - The checklist's quote offer keeps the story's condition: "If you buy with us, we get you one before you make an offer on a house."
   - "Census microdata" is added to the sources.
3. **The four neighborhoods copy /buyers/affordable-places-to-live/.** This page now tells each one by the loan that fits it. The owner page keeps what each place is like.
   - Cut, because they were the owner page's material: the CCU and HGTC drive, the HOA open land, the quarter-acre lots, the gate, "1980s" and the inspector line.
   - Each entry now gives the kind of home, the middle price (row 50) and whether USDA's no-down-payment loan can be used there. Three are "Inside USDA's area." The Golf and Yacht Club entry says: "Outside USDA's area, so a USDA loan cannot be used here. An FHA or VA loan can, and on either the seller can pay your closing costs."
   - USDA's area for each one is new research (row 53). Every deed sale in each neighborhood was tested against USDA's single-family ineligible layer, and a live point query at each neighborhood's center gave the same answer on 2026-11-03.
   - The intro says it once: "Three are new from a builder and inside USDA's area on USDA's own map. There, a buyer who qualifies can use a USDA loan with no down payment."
   - The closing line links the owner page "for what life is like in each of the four, and eight more".
4. **One line contradicts itself on first-time rules.** The qualify card used to say "It does not stop you. SC Housing ... has no first-time rule: you must not own any other property". It now reads:
   - "SC Housing's main program in Horry County does not ask whether you owned a home in the past. It asks only that you own no other property, or a share of one, on the day the loan closes. Bare land is allowed. The IRA rule above is different: no main home in the last two years."
   - The meaning is row 10's Use wording. The struck list does not fire on it.
5. **The photo does not show the subject.** The Golf and Yacht Club NAIP aerial is gone, files and record. Its middle was open grass and a pond.
   - The new photo is a NOAA aerial from January 2026 (public domain, about twice as sharp as NAIP). It shows three streets of small one-story houses in Bent Oak Estates, City of Myrtle Beach.
   - I framed it on deed sales: 9 of the 10 houses that sold inside the frame went for under $300,000 (row 55; `frame-sales.py`).
   - It sits under the "For sale now" tiles, beside the middle $270,000 house. Caption: "Houses in Bent Oak Estates, in the City of Myrtle Beach, from above in January 2026. Nine of the 10 houses that sold in this view in the past year went for under $300,000."
   - The record is `data/.../photos.json`. Metadata is embedded, and `photos.js check` passes.
   - I looked for a ground-level photo first, and none could be used:
     - The Commons houses in Horry County are beach houses or historic-district houses with house numbers, and Market Common townhouses with no price row.
     - NAIP 2023 predates Amber Bluff and Indigo Grove (both were bare land).
     - NOAA's 2026 flight does not reach Conway or Longs.
   - The photo partner's shots 1 and 2 remain the better answer (NEEDS 14).

## Blocking items from REVIEW-2

None were left standing. Round 2's critic.mjs result was 0 blocking, and it is 0 again.

## Also changed, to pass the gates

- `build.js audit` raised two new FAILs for this page, and both are fixed:
  - The sources block was over 90 words. It is now shorter.
  - Keyword cannibalisation on "homestead exemption horry county" with /buyers/retirees/. The keyword is dropped from this page; the FAQ answer stays.
- Four sentences over 28 words are split: the short answer's earnest money line, step 3, the USDA card's map line, and the new neighborhood intro.

## Gates (final build)

- score.js (SCORE_TODAY=2026-11-03): 99/100 (SEO 100, AEO 100, Human 98, Trust 100), the same as round 2. Two items are still open:
  - P2: 4.0 numbers per 100 words (target 3.5). The insurance figures added numbers.
  - P6: "homestead exemption", kept on purpose in its FAQ.
- claims-scan: 0 findings on this page.
- facts-check: nothing on this page.
- house-claims: 0.
- struck-check: no struck wording. I ran this page's list and also the affordable, programs, common-mistakes and cost-to-own lists.
- photos.js check: all records pass.
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking. 2 warnings: read.wall on the shared hero at 320 and 390, the same as round 2 (NEEDS 10).
- build.js audit: the only FAILs for this page are the two date mismatches that the lead's dates run sets. The A20 line is a warning only, and the page carries no quote for Tim.
