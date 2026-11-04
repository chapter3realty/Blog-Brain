# Verifier: /sell/net-proceeds/ (batch 2026-11-a)

Independent verifier, 2026-11-04. I did not research these rows. I opened every source myself, re-ran `build_findings.py` and `pull_listings.py`, and recounted the listings with my own script. The status and note columns of `facts.md` now match this file. The struck wording is in `sell-net-proceeds-struck.json` (14 entries). Each entry fires on its struck sentence and on none of the approved wording; I checked this with `tools/struck-check.js` on a test page. The live page has none of it today.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 19: 8, 9, 10, 11, 13, 15, 16, 17, 19, 22, 24, 25, 27, 28, 30, 31, 32, 33, 36 |
| CORRECTED, source only (the claim stands, the cited form changes) | 4: 1, 2, 3, 4 |
| CORRECTED | 13: 5, 6, 7, 12, 14, 18, 20, 21, 23, 26, 29, 34, 35 |
| STRUCK | 0 rows. Two sentences inside rows were struck: row 26's second sentence and row 35's first sentence. |

The writer may use VERIFIED rows as written. CORRECTED rows may be used only in the safe wording in the row's note.

## The deciding fact: Form 310 has a new version

The ledger quotes Form 310 (9/2023). The South Carolina REALTORS replaced it on March 9, 2026. Their 2/6/26 post says: "March 9 forms vendors update the residential agency forms, purchase agreements, and non-agency transaction brokerage forms". There is also a post titled "Forms Video (SCR310) Update on March 9, 2026". The new form is public at https://screaltors.org/wp-content/uploads/2026/02/310.pdf. The file is dated 4 March 2026, its footer reads "SCR FORM 310 (03/2026)", and it has no draft mark. A copy is in `wf2/sell-net-proceeds/priv/scr-310-2026-03.pdf` and `.txt`.

What it means for the page:
- **The same in 03/2026:** who pays what in 6.A (seller: deed preparation, deed stamps, recording, payoffs and releases, prorated taxes, the seller's broker, the seller's attorney; buyer: both title policies, title exam, inspections, appraisal, survey), the HOA box (the seller pays if no box is ticked), and the seller-credit cap. The deciding fact holds. The page can still be written as planned.
- **New in 6.A(4):** an Option A or B on whether any of the seller's credit may go to the buyer's broker.
- **Gone:** the home warranty clause (old paragraph 14). A warranty is now only an addendum box (Form 555, paragraph 26). Row 5 is corrected.
- **Gone:** the default sentence on special assessments (old paragraph 22). 6.B now makes the parties choose Option 1 or Option 2. Row 6 is corrected.
- **Gone:** the "no representation as to the legal adequacy" footer. Row 7 is corrected.
- **Renumbered:** prorations moved from paragraph 22 to paragraph 21.
- **Never print "9/2023" on the page.**
- **Owner question Q4** should now ask whether our agents write offers on Form 310 (03/2026).

## Every correction

1. **Rows 1 to 4, source only.** Cite Form 310 (03/2026) at the URL above. The claims stand. Row 4: if the page says what the seller's credit can pay for, use the new Option A or B wording.
2. **Row 5.** The current form has no home warranty clause.
   Use: "The standard contract has no home warranty clause. Buyer and seller can add one with a separate addendum."
3. **Row 6.** The contract has no default for a special assessment.
   Use: "For a special assessment approved before closing, the contract has two boxes: the seller pays all of it, or only the part due in the year of closing. One approved after closing is the buyer's."
   The tax proration sentences stand, under paragraph 21.
4. **Row 7.** The footer line is gone.
   Use: "Buyer and seller can change its terms in writing, and the form tells both sides they are responsible for getting legal advice before they sign."
5. **Row 12.** The numbers hold: $18,044,870 and a median of $1,147, recomputed from the OSB sales. But they come from the formula, not from what sellers paid.
   Use: "By the state's formula, the deed stamps on the 13,194 home sales recorded in Horry County from October 2025 through September 2026 come to about $18 million; the middle sale's came to about $1,150."
6. **Row 14.** The arithmetic holds. The $10 release applies only when there is a mortgage.
   Use: "On the middle $350,000 home with a mortgage to release, the costs set by law and the state contract come to $1,320."
7. **Row 18.** 201.0 mills applies to most homes outside city limits, not all of them (CTO 10).
   Use: "For most homes outside city limits ..."
8. **Row 20.** The ratios are totals over totals, keyed to the last deed, not to how long one owner has held the home.
   Use: "So when a home's last deed is old, its tax bill, and the tax credit at closing, is often smaller than one figured on today's price."
   Struck: "long-time owner ... usually".
9. **Row 21.** The seven-business-day payoff rule is in Regulation Z. Regulation Z does not cover a loan to buy a rental that the owner does not live in (1026.3(a) commentary).
   Use: "On a home loan made for personal use, the servicer must send an accurate payoff statement within seven business days of a written request. A loan made to buy a rental is not covered by that rule."
10. **Row 23.** The date is wrong: the law took effect on February 1, 2012.
    Use: "recorded after February 1, 2012".
11. **Row 26.** The row printed CTO 25's whole-feed figure, which CTO's verifier replaced. "Every condo" is wrong by one. The second sentence is unsupported and is struck.
    Use: "Of about 3,060 houses for sale in Horry County ZIPs, about 830 (more than 1 in 4) list no HOA fee. All but one of 2,686 condos for sale list one."
12. **Row 29.** These are units with a mailing address, not owners (HD-tax 23).
    Use: "About 6 in 10 Horry County condo units, and about 1 in 5 other homes, have their tax bill mailed to an address outside South Carolina."
13. **Row 34. A script fault.** When a price band is empty, the map API returns a total of 0 but still sends up to 144 unrelated fallback pins. `pull_listings.py` counts them as matches. That is why the union of pins ran above the API's totals: house price cuts 1,973 against 1,899, townhouse 247 against 196. My recount (`DATA/verify_recount.py`, `DATA/verify-recount.json`) drops those pins. Every set then equals the API total within 4.
    The corrected numbers:

    | Group | Price cut | Share |
    |---|---|---|
    | Resale houses and townhouses | 1,264 of 2,187 | 57.8% |
    | Under $300,000 | 325 of 498 | 65.3% |
    | $300,000 to $450,000 | 403 of 707 | 57.0% |
    | $450,000 to $700,000 | 311 of 563 | 55.2% |
    | Over $700,000 | 225 of 419 | 53.7% |
    | Resale condos | 1,347 of 2,627 | 51.3% |

    "About 7 in 10 under $300,000" becomes "about 2 in 3".
    **Writer: fix `band()` in `pull_listings.py`** so it skips the pins when `d["total"] == 0`. Then re-run it and `build_findings.py`. `findings.json` holds the wrong counts until then. Sibling risk: any other page that counted this API's pins by price band with a `has=` filter.
14. **Row 35.** The same fault.
    Use: "Of 1,000 houses and townhouses for sale in Horry County that advertise a home warranty, 935 are new construction. Only 65 of 2,187 resale houses (about 3 in 100) advertise one, and 33 of 2,627 resale condos."
    The "builder's offer, not a seller's habit" framing is struck.

## Re-runs

- `build_findings.py`: re-run on the website copy. Its output was identical to the committed `findings.json`.
- `pull_listings.py`: re-run at 2026-11-04T12:51Z into scratch (`wf2/sell-net-proceeds/verify/out/`). Its counts were within 2 of the committed file, with the same fallback fault (row 34).
- `verify_recount.py`: my corrected count. Saved with its output in DATA.
- Deed fees: recomputed from `out-of-state-buyers.json` in integer cents. Total $18,044,870.40, median $1,147.00.

## Photo candidate (PLAN.md)

"New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg"

- **Licence: confirmed** on the file page. CC BY-SA 3.0 Unported, also offered under GFDL 1.2. Author "Pollinator at English Wikipedia", transferred from en.wikipedia. Original is 2,100 x 1,400.
- **What I saw:** I viewed it at 1,280 px; the original download was rate-limited. It shows a two-storey brick government complex with a white-columned central entrance, a three-storey wing on the right, a radio tower and a parking lot. Two cars are parked; no plate or sign is readable. No person is the subject.
- **What it cannot show:** that this is 1301 Second Avenue, or that the Register of Deeds is inside. The county page gives the address but not the building. The photo is 20 years old.
- **Caption only what it shows:** "Horry County's courthouse and county office complex in Conway, in 2006."
- **Credit:** "Photo: Pollinator at English Wikipedia, CC BY-SA 3.0, via Wikimedia Commons."
- Do not caption it as the place where deeds are recorded unless a county source ties the Register of Deeds to this building. The photo partner's shot 1 replaces it when it arrives.

## Not checked or blocked

- view.flodesk.com and ggar.com (secondary summaries of the 2026 form changes) do not resolve from this session. They were not needed: I read the form itself.
- commons.wikimedia.org's API returned 429; I read the file page HTML and the 1,280 px thumbnail instead.
