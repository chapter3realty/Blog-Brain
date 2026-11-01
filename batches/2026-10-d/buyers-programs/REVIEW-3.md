# Review round 3: /buyers/programs/, what the fixer changed

Spec: `specs/programs.js` (round 2 kept at `wf2/buyers-programs/programs.r2.js`). New rows: facts.md F13 to F18, VERIFIED-BY-FIXER. Photo record: `data/2026-10-d/buyers-programs/photos.json`. Shared-helper notes: NEEDS.md 15 to 17.

Gates after the fix: score 99/100 (only P1 at 50%: $114,960, $134,120 and $17,500 are official limits, as in round 2). claims-scan 0 on this page. facts-check 0 on this page. house-claims 0. struck-check: no struck wording. photos.js check: all records pass. critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 9 warnings (AfBA small text and line length, kept on purpose; the two outcome cards in the timeline at 1024; read.wall on the boxed Dana example and on the last FAQ answer plus sources and AfBA). build.js check OK. build.js audit on this page: only the two date lines (the lead runs `node build.js dates`) and the A20 note (no Tim quote; never written).

## Critic, blocking

1. **Feed titled "3+ bedrooms under $300,000".** Not changed: `idx-lib/feeds.js` is the lead's file. NEEDS 13 has the `SC_HOUSING` line; NEEDS 15 repeats it, or the lead takes the feed off this page.
2. **Recapture clause.** Restored word for word: "SC Housing pays it back if you ask in writing by June 30 of the next year; the refund is reported to the IRS as income." "Set levels" now reads "the levels in the recapture notice from your lender" (F3), and "recapture tax" is explained as "an increase in your federal income tax for the year you sell" (F3).
3. **Photo.** Main Street is gone. The photo is now a white house under live oaks in Conway's historic district (Pollinator, CC BY-SA 3.0; the record `conway-historic-home` from data/photos.json, copied with its files into this page's folders; photos.js check passes). It sits under the town chart, lazy-loaded, with the credit on the photo and in a Photo credits block after the sources. Caption: "A house under live oaks in Conway's historic district." It does not claim the house is under the limit, since its price is not known. Looked at full size: it shows what the caption says.
4. **"Five ... open, though ... closed".** Now: "Four SC Housing programs are open to Horry County buyers now. A fifth, Palmetto Heroes, is closed until its next round. The voucher program works only where the local housing authority takes part."
5. **"Off-frame modular".** Now: "Houses, townhomes, condos in an approved building, and modular homes count, up to $450,000. A modular home is built in sections in a factory and set on a foundation, not on a steel frame." The manufactured H3 opens: "A manufactured home, once called a mobile home, is built on a permanent steel frame to HUD's code. The Homebuyer Program does not take it." Source: SC Code 23-43-20 and 40-29-20 (F15).

## Critic, warnings

- 15-year chart: the end tick reads "After year 15". At 320 px it wraps to two lines so it clears "Year 10" (the first build had an 18 px overlap; fixed and re-checked).
- Hero: "Across the beach towns, about a third are." (the pooled 36 percent). The body sentence that said it again is cut (owner 1).
- "Yes, when we last checked." is now "Yes." (owner 6).
- "Two local routes" is now "Two other routes".
- FAQ label: the FAQ H2 and its On this page label are now "SC Housing questions" (mkpage uses one string for both).
- Row 33: now "In Chapter3's experience, a building with a rental program usually fails the rules for a conventional loan, because so many owners are investors." That is what "non-warrantable" means, and it no longer stretches to FHA or VA (VERIFY correction 12). The lead approves the wording.
- F7 to F12: the critic re-read them and says they hold; the lead may mark them verified.
- Odd card in the 2-column grids, AfBA text size: unchanged (critic: acceptable).

## Reader, blocking

1. **How much cash.** The section now leads with the answer: "With a VA or USDA loan, the $10,000 can cover most or all of the cash you bring to closing. Those loans need no down payment, so all of it goes to closing costs and prepaid items." Then: "With an FHA or conventional loan, you also need a down payment, and the $10,000 goes toward both." Then the closing cost guide link ("adds up the costs at closing for a home at your price") and the lender's figure before an offer. **Not done, and why:** the minimum down payment share for FHA or conventional is a down payment percentage, banned on every /buyers/ page (PLAYBOOK A17, A14; ledger's never list).
2. **Monthly payments on the $10,000.** The short answer now ends "you repay all of it, from the sale or the new loan", and the timeline says the same. "No monthly payments" itself stays off: it is on the ledger's never list (a Reg Z term, the number of payments) and was struck from the live page. If the lead and owner allow it for a government program, it is one sentence after "Only if you sell, refinance or stop living in the home".
3. **The catch: does the first mortgage cost more with the help.** The rate FAQ now adds: "SC Housing makes the loan with or without the $10,000, so we have the lender quote it both ways before you choose." (F1, F18). No rate is stated or compared; no source says the rates differ.
4. **Palmetto Home Advantage repaid early.** Added: "If you sell, refinance or move out within the 10 years, you repay all of the help." (row 13).

## Reader, nits

- Families with Disabilities amount: the card now says "The same 15-year forgivable help" (row 15). SC Housing's page for it gives no dollar figure, so the page gives none.
- Voucher housing authority: not found on any public page (NEEDS 17). Unchanged.
- FHLB 2026 money: not knowable from a public page (ledger gap). Unchanged: "we find out which nearby banks still have money".
- "When we last checked": cut.
- Words: modular (critic 5), "approved condos" now "condos in an approved building", recapture tax and "set levels" (critic 2). "Targeted" is explained in the first FAQ, as before.
- Habitat in dollars: "for three people in 2026, about $23,000 to $62,000 a year" (F14; rounded to keep the scorer's exact-amount rule).
- Map: Carolina Forest and Socastee are now labelled (smaller, in italics, with an open ring, so they do not read as towns with a USDA pin). Checked at 320, 390 and 1440.
- "About a third": see critic warning 2.
- Feed: NEEDS 15.
- BrickWood disclosure: unchanged. It stays in `#afba` because 287 pages link to it (NEEDS 7).
- Photo at 390 px: lazy loading; it shows in a real scroll (checked in the element shots).
- FHLB numbers: split into two lines, one per income band.

## Owner, blocking

1. **Town paragraph repeats the chart.** Cut. In its place one fact the chart does not show: "Conway has more houses for sale at or under $450,000 than any other town, Myrtle Beach included." (F12). The photo caption no longer says it.
2. **USDA paragraph repeats the table.** "Inland, nearly all were. At the beach, fewer than one in ten were." cut; "About six in ten" kept.
3. **Hedge in the cash section.** See reader 1: no "it depends" left; it leads with the VA/USDA answer and backs it with the closing cost guide link. The closing cost guide link at the end of the last section was removed, so it is linked once.
4. **Local help leads with HOME.** Now: "Not from the county or the cities directly. Horry County runs HUD's HOME program for Horry, Georgetown and Williamsburg counties, and that money goes to developers and nonprofits, not to buyers. Two other routes help buyers themselves." HOME is named as HUD's program; the member town list (F4) is off the page.
5. **"Open" and "closed".** See critic 4.
6. **"When we last checked".** Cut.
7. **Industry terms.** Modular and manufactured (F15). SSI and SSDI: "Social Security disability income (SSI or SSDI)". NVR: "DHI Mortgage, Lennar Mortgage and NVR Mortgage Finance, the mortgage companies of the builders D.R. Horton, Lennar and NVR" (row 21). FHA, VA, USDA and conventional: a four-line list in the cash section (F13). Habitat in dollars (F14). **Not done:** the bank grants' "80 percent of the area's median income" in dollars. FHLBank Atlanta's release does not say which median or table it uses, so a dollar figure would be a guess.
8. **Photo.** See critic 3. A house of a qualifying price from the photo partner is still the better photo (shot-list.md).
9. **Feed.** Lead (NEEDS 15).

## Owner, nits

- "SC Housing" count: one cut in the grant answer ("a grant from anyone else"). Most of the rest name the agency where the subject changes; the lead may trim more.
- Condo H3 repeat: "A condo must also be in a building your loan approves." cut.
- Short answer and the seven cards: unchanged (owner: acceptable for a summary).
- The own-no-other-property rule three times: Dana's last line is now an action, "set the closing on your new home for after the sale of the old one."
- Seller paying closing costs: new FAQ, "Yes, within the limits of your FHA, VA, USDA or conventional loan. SC Housing's guide adds no limit of its own on help from the seller." (F16).
- FHLB card: two lines.
- AfBA: unchanged (NEEDS 7).
