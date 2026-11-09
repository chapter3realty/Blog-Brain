# Verifier: /sell/net-proceeds/ (batch 2026-11-b)

Independent verifier, 2026-11-09. I did not research these rows. I opened every source in `facts.md` myself, re-ran `pull_listings.py` and `build_findings.py`, and recounted the listings with my own script. The status and note columns of `facts.md` now match this file. The struck list is `batches/2026-11-b/facts/sell-net-proceeds-struck.json` (now 24 entries). Each entry's struck wording fires it, and no entry's approved wording fires any entry. The live page and four sibling pages (/sell/fsbo/, /sell/home-value/, /sell/capital-gains/, /buyers/closing-costs/) carry none of it. `node tools/struck-check.test.js`: all controls pass.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 30: 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 |
| CORRECTED | 8: 4, 5, 13, 15, 24, 28, 29, 30 (4, 15 and 28 are wording only: the facts hold) |
| STRUCK | 2: 14 (no source: no figure), 18 (no source: no range) |

The writer may use VERIFIED rows as written. A CORRECTED row may be used only in the wording below. The four NEW rows came out: 5 CORRECTED, 13 CORRECTED, 30 CORRECTED, 31 VERIFIED.

## Every correction

1. **Row 5 (NEW).** The arithmetic holds: 0.379, 0.377, 0.375 and 0.382 percent. Two faults.
   - "At every price" was not measured. Four price points were. Below about $20,000 the $25 of recording fees push the share over half of 1 percent.
   - "About 0.4 percent of the price, plus the commission you agree" reads as the whole cost. The seller also pays their attorney (row 14, no figure) and any HOA charges on the box (row 10).
   - "The law sets" trips build.js (`SETS_REGEX`).
   Use: "The fees in state law (deed stamps, deed recording and one mortgage release) come to under half of 1 percent of the price at each of the county's four price points, about 0.38 percent. The commission, the seller's attorney fee and any HOA charges come on top." [SC Code 12-24, 8-21-310; DATA findings.json tiers]

2. **Row 13 (NEW).** EAO 11-06 says the buyer's attorney "typically prepares the settlement statement". It does not say that attorney usually pays off the seller's mortgage. That part is only the facts the inquirer gave. The fee holding is about ethics (Rule 1.5), "absent additional facts and circumstances".
   Use: "In a standard South Carolina closing, the buyer's attorney typically prepares the settlement statement. When that attorney also sends the seller's mortgage payoff, the attorney may add a reasonable payoff handling fee to the seller's side, though the seller is not the attorney's client. A seller may refuse to sign a settlement statement they do not agree with." [SC Bar Ethics Advisory Opinion 11-06; an ethics opinion, not a law]
   No dollar amount.

3. **Row 30 (NEW).** Every count is right (see Re-runs). The words are not. "About the same at every price" does not fit the row's own numbers: 62.5 percent under $300,000 against about 56 above.
   Use: "Of 2,188 resale houses and townhouses for sale in Horry County, 1,260 (more than half) have cut their asking price. More than half have cut at every price: about 6 in 10 under $300,000, and about 56 percent in each higher band." The band counts (307 of 491; 403 of 714; 318 of 569; 232 of 414) can go in a table. Resale condos: 1,372 of 2,652 (about half). [CRM active listings, aggregate, 2026-11-09]
   The meaning "below the first list price" is the CRM's. I could not open a page that states it. Say "have cut their asking price", not by how much or when.

4. **Row 29.** Regulation Z's business-purpose rule for rentals has a carve-out that matters on this coast. 1026.3(a) comment 4: "If the owner expects to occupy the property for more than 14 days during the coming year, the property cannot be considered non-owner-occupied". Its own example is a beach house rented out for most of the year.
   Use: "On a home loan made for personal use, the servicer must send an accurate payoff statement within seven business days of a written request. A loan made to buy a rental the owner does not use counts as a business loan, and that rule does not cover it. A beach place the owner planned to use more than 14 days a year still counts as personal." [12 CFR 1026.36(c)(3); 1026.3(a) comment 4]
   Struck: "A loan made to buy a rental is not covered by that rule."

5. **Row 24.** Form 310 para 21 says the attorney prorates "based on the available tax information deemed reliable by the Closing Attorney", and that buyer and seller adjust between themselves if it later proves wrong. "Best information available" is not its wording.
   Use: "The closing attorney figures the tax split from the tax information they judge reliable. If the bill later turns out different, buyer and seller settle the difference between themselves." [Form 310 (03/2026) para 21]

6. **Row 4, wording only.** The figures hold. build.js refuses "set by".
   Use: "On the middle $350,000 home with a mortgage to release, the fees in state law that the state contract puts on the seller come to $1,320: deed stamps $1,295, deed recording $15, mortgage release $10."

7. **Row 15, wording only.** The NAR page says it. But "not set by law" trips build.js.
   Use: "Agents' fees are fully negotiable, and no law fixes them." "No rule requires it" rests only on the page's "can". Write "it is a choice, not a requirement".

8. **Row 28, wording only.** The approved sentence from 2026-11-a opens with "So", which the brief bans.
   Use: "When a home's last deed is old, its tax bill, and the tax credit at closing, is often smaller than one figured on today's price."

9. **Row 14 note.** No figure, as before. Do not label the calculator line "set by the attorney" (build.js). Write "Attorney's fee (ask the closing attorney)" or similar.

## Struck list changes

- Added 8 entries: stale 2026-11-a listing counts (2,187; 1,264; 325 of 498; 935; 65 of 2,187; 2,627; "2 in 3 under $300,000"), "about the same at every price", row 5's "at every price" and "0.4 percent ... plus the commission", row 13's "usually ... pays off", row 24's "best information available", row 28's "So when", row 29's rental sentence, and "set by law" / "the law sets" (rows 4, 5, 15).
- Updated the approved wording of 2026-11-a entries 14, 20, 21, 34 and 35, and of the researcher's two 2026-11-b entries, so that no approved wording carries struck text. The old "use" for 34 and 35 held the 2026-11-a counts.
- Added `unless: buyer` to the researcher's row 5 entry. It fired on the buyer closing-costs sentence "Buyers in South Carolina typically pay 2 to 5 percent".

## Re-runs

- `pull_listings.py`: re-run at 2026-11-09T03:16Z into scratch, at the same feed refresh (03:00:14Z) as the researcher's run. Output identical to `listings.json`. Every API set within 4 of the API's own total. Seven narrow band searches came back one pin short.
- My recount (`DATA/verify2_recount.py`, `verify2-recount.json`): shapely's polygon test on the Census outline, not the script's ray cast. Every count matches exactly. No price-cut, warranty or new-construction pin falls outside the "all" set. A sample of pins shows only "For sale" status.
- HOA re-pull (`DATA/verify2_hoa.py`), for row 22. Inside the same outline, 790 of 2,929 houses (27.0 percent) and 24 of 307 townhouses list no HOA fee. No condo inside the county does (0 of 2,694). Row 22's "more than 1 in 4" still holds.
- `build_findings.py`: run into scratch on my listings file. Output identical to `findings.json`, apart from the pull time.
- Deed fees recomputed in integer cents from `out-of-state-buyers.json`: 13,194 sales, $18,044,870.40, median $1,147.00.
- Owners outside SC recomputed from the stock files: condos 23,653 of 40,963 (35 with no state), other homes 35,264 of 186,037.

## Sources opened today

Form 310 (03/2026) PDF; SC Code chapters 8-21, 12-8, 12-24, 12-37, 12-43, 12-45, 27-1, 27-30, 27-31, 27-50, 33-31 and 37-10; Doe v. McMaster (Op. 25508); SC Bar EAOs 06-11, 00-17 and 11-06; NAR's settlement page; the CFPB payoff answer, Regulation Z 1026.36 and the 1026.3 commentary; the CFPB wire-fraud post; IRS Topic 701, Publication 523 and the 1099-S instructions; HUD Handbook 4000.1 Update 18; the VA funding fee page; the SC DOR H. 4216 page and Form I-295; Horry County's certified 2026 levy sheet.

## For the writer

- The SC Code `t12c024.php`-style links in the ledger now return a 404 with a redirect to `statmast.php?title=12&chapter=24`. Link the `statmast.php` address, or site-audit will flag the old one.
- Row 22 (ZIP group, 3,060 houses, 2026-11-02) and rows 30 and 31 (county outline, 2,188 resale houses and townhouses, 2026-11-09) are different groups and pulls. Do not put them in one sentence.
- Row 21's story has a $7k hypothetical. Do not print it.
- Nothing here should stay off the page entirely, other than rows 14 and 18 (no figures).
