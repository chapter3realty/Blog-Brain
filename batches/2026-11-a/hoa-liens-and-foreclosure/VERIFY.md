# Verification: /hoa/liens-and-foreclosure/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-02. I did none of the research. I opened every source again from this container, and did not rely on the researcher's saved copies. Each row's status and note are also in `facts.md`.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 3, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 18, 20, 23, 24, 25, 26, 27, 28, 29, 31, 32, 36, 37 | 25 |
| CORRECTED | 2, 4, 8, 10, 13, 19, 21, 30, 33, 34, 35, 38 | 12 |
| STRUCK | 22 | 1 |
| PENDING | 39 (photo place; the licence is verified) | 1 |

Struck list: `hoa-liens-and-foreclosure-struck.json` in this folder, 15 entries. Every entry's struck wording fires it, and every approved wording fires none (tested with `tools/struck-check.js`). `node tools/struck-check.test.js` still prints "all controls pass". **For the lead:** batch mode reads `batches/2026-11-a/facts/*-struck.json`. My brief let me write only in this folder, so please copy the file there.

The struck list already fires once on the live page: "14.1 percent of homeowners who filed a complaint" (row 21).

## What I opened

- SC Code chapters 27-31, 27-30, 27-32, 15-39, 15-11, 22-3, 29-3 and 33-31, read live at scstatehouse.gov.
- The Winrose opinions (S.C. 2019 and Ct. App. 2018) and Wachesaw (S.C. 2015), as PDFs from cases.justia.com.
- Bailey (Ct. App. 1994) at hallapproved.com. This is a reprint of the opinion. No court copy could be reached.
- Horry County's Master in Equity page, sale list and bidder sheet.
- The county parcel layer 24.
- The SCDCA 2026 report.
- Fannie Mae B4-2.2-02 and B4-2.1-03.
- S. 366, H. 3447 and H. 5204 on scstatehouse.gov.
- 11 U.S.C. 523 at law.cornell.edu.
- The SC Bar's lawyer referral page.
- The CRM map API.
- The Commons file page.

## Data re-run

- **Sale list.** I parsed the live sale list with my own script and queried the parcel layer myself (`wf2/hoa-liens-and-foreclosure/mycheck.py` in the scratchpad). It gave the same results as the researcher's files:
  - 19 cases: 4 HOA and 15 mortgage.
  - All four HOA cases show "No" for deficiency.
  - HOA judgments of $11,545.00, $14,988.49, $24,205.07 and $36,354.46.
  - County values of $164,900 to $370,000.
  - Ratios of 4.5, 9.1, 9.8 and 10.3%.
  - Land-use codes 107, 107, 107 and 110.
- **Condo check.** The three code-107 parcels have legal descriptions that read "HPR" or "UNIT", with a land value of 0. The code-110 parcel is a subdivision lot.
- **Winrose arithmetic.** I redid it:
  - 250 + 80.87 + 542.80 + 2,025 = 2,898.67
  - 2,898.67 / 250 = 11.6
  - (542.80 + 2,025) / 2,898.67 = 88.6%
  - 3,036 / 61,996 = 4.9%
- **CRM counts.** I re-queried them on 2026-11-02. They were unchanged: 23 of 8,790.

## Corrections

**Row 2. "Confirmed" overstates the 2019 case.**
- The Supreme Court's line comes from a case whose covenants expressly allowed foreclosure, and the court set that sale aside.
- Use: "For a neighborhood HOA, the lien and the power to foreclose come from the recorded covenants [Bailey, Ct. App. 1994]. In a 2019 case whose covenants allowed foreclosure, the Supreme Court said the HOA had the legal right to foreclose, and still set the sale aside [Winrose]."

**Row 4. Bailey is bound to its facts.**
- The covenants there did not claim priority, and the purchase money mortgage was recorded first.
- Use: "In a 1994 case, an HOA's lien for dues counted only from the date each assessment was set and fell due, so a mortgage recorded before then came first; those covenants did not claim priority [Bailey, Ct. App. 1994]."

**Row 8. "No further notice" is a fact of the Winrose case, not a rule I could confirm for today.**
- The opinion quotes SCRCP 71(a) and 77(d) as they stood in 2019. The current official rule text could not be opened.
- Use: "In the Winrose case, the owners did not answer the suit and got no further notice of the judgment or the sale [Winrose 2019]."
- The sale notice still runs in the newspaper (row 9).

**Row 10. "Final that day" is wrong.**
- Section 15-39-760 says only that the bidding does not stay open. A court can still set a sale aside: Winrose's was set aside five years later.
- Use: "When no deficiency judgment is demanded, the bidding closes at the sale; it does not stay open 30 days for higher bids."
- PLAN sections 3 and "What they do not know" use "final that day". Change both.

**Row 13. The $250 is the unpaid dues left in the judgment, not the dues missed.**
- The master listed $500 and credited a $250 payment the owners made after the suit was filed (footnote 1).
- The chart label "Dues missed" in `chart-winrose-judgment.json` must read "Unpaid dues in the judgment".

**Row 19. "Home" mortgage cases is not shown.**
- 5 of the 14 cases have no parcel link.
- The $23.7 million case is not shown to be commercial. The list says "additional properties involved".
- Use: "The other 14 mortgage cases ranged from about $68,000 to $471,000, leaving out one case of about $23.7 million that covers several properties."

**Row 21. Two corrections.**
- "Files the most" becomes: "More of the complaints in the state's 2026 report came from Horry County than any other county (31% of 452)."
- 14.1% is a share of the top recommendations for changing governing documents, not of complainants. Use: "Among the recommendations for changing HOA papers, 14.1% asked to forbid liens or foreclosure."
- The live page has this wrong now.

**Row 30. A title search does not show every association debt.**
- The condo lien arises by statute when dues go unpaid. It does not have to be recorded.
- A lis pendens "may" be filed. It is not required.
- Use: "A title search shows a lien the association has recorded and any notice of a lawsuit. Dues owed but not recorded show only in the association's statement."

**Row 33. The claim drops "but prior to the acquisition of title".**
- Use: "The bank, or whoever buys at the bank's foreclosure sale, does not owe the unpaid dues from between the day that mortgage was recorded and the day it took title; that share becomes a common expense of all owners."

**Row 34. Cut "Dues from before the filing can be" wiped out.**
- Section 523(a)(16) only says it does not except those dues from discharge.
- Whether a discharge removes a recorded lien was not researched.
- Keep only the first sentence.

**Row 35. S. 366 does not bar all HOA foreclosure.**
- It would make foreclosure clauses in an HOA's governing documents unenforceable.
- It would protect a primary residence from a court sale brought only by an HOA.
- It says an HOA may still place a lien for dues, fines or fees.

**Row 38. "About 3 in 1,000" rounds 2.6 up.**
- The 8,790 includes land and manufactured homes.
- Use: "Fewer than 3 in 1,000 listings for sale here are marked as foreclosures (23 of 8,790)."

## Struck

**Row 22. The county's bidder sheet says "A defaulting Mortgagor may pay the debt".**
- That does not cover an association case. Do not cite it for HOA debts.
- Replacement, verified in Winrose part I: "Paying the bill may not end the lawsuit. In Winrose, the owners paid $250 and got a letter that the lien was satisfied, but the HOA did not withdraw its suit." The quote: "The HOA, however, did not withdraw its suit."
- PLAN section 6, action 1 must change.

## Limits the writer must keep (verified rows)

- **Timeshares (rows 1, 2, 16).** "Through the court, never a private sale" is true for houses and condos, not timeshares. The Timeshare Lien Foreclosure Act (27-32-300 and after) lets a timeshare's papers give a trustee a power of sale without a court. This matters in Horry County. Either scope the page to "a house or condo" or name the exception. Struck list entry liens 1, 2.
- **Condo priority (row 3).** The statute puts recorded mortgages and all other recorded liens ahead of the condo lien, with no "recorded before" condition. Do not put "liens recorded later" below the association's lien in the condo row of PLAN's priority table. Struck list entry liens 3.
- **Row 7.** A lis pendens "may" be filed. The heading "The lawsuit is recorded against the property" needs "may be".
- **Row 23.** Confirmed: a magistrate cannot hear a case where title to real property is in question (22-3-20(2)), so foreclosures go to circuit court and the Master in Equity.
- **Row 28.** The buyer's cap does not apply to a buyer at a foreclosure sale.
- **Row 29.** The story says "something we look at and make sure we know about before closing". It does not say "every closing", and it does not say that we request the association's statement. PLAN section 7's "We request the association's statement before every closing" needs the owner's confirmation, or must say "we check for unpaid fees before closing".
- **Row 31.** This rule applies to Fannie Mae Full Review only. A separate 15% test applies to each special assessment.
- **Rows 35 to 37.** None of these bills is law.

## Photo (PLAN candidate, row 39)

- **Licence: VERIFIED** on the Commons file page.
  - CC BY-SA 3.0 Unported, with GFDL 1.2 as a second licence.
  - Author: "Pollinator at English Wikipedia". Transferred from en.wikipedia.
  - 2,100 x 1,400.
  - Credit: "Pollinator at English Wikipedia, CC BY-SA 3.0".
- **Place: PENDING.**
  - upload.wikimedia.org returned HTTP 429 to every image request, so I could not look at the picture.
  - The file page has no camera coordinates.
  - The complex at 1301 Second Avenue was built about 2001 to 2003 (search summary). That fits a "new" courthouse photographed in 2006, but it is not proof.
  - Before the page uses it, someone must look at it full size against a current photo of 1301 Second Avenue.
  - The photo partner's shot (shot-list.md) would replace it.

## Not reachable from this session

- **Official SCRCP rule text.** sccourts.org rule pages return 404, and two mirror hosts are outside this session's network.
- **Images on upload.wikimedia.org.** Every request got HTTP 429.
- **The official U.S. Code site.** uscode.house.gov returned 404. I used Cornell's reprint.
- **Bailey from a court source.** Only the hallapproved.com reprint was reachable.

If the lead wants these opened, `www.charlestoncounty.org` and `www.courtrules.net` have to be allowed in the session's network settings. Both carry the Rule 71 text.
