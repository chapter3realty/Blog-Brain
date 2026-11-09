# Verify: /invest/strategies/1031-exchange/ (batch 2026-11-b)

Independent verifier, 2026-11-09. I did not research this page. Ledger: `facts.md` (status and notes columns updated). Struck list: `batches/2026-11-b/facts/invest-strategies-1031-exchange-struck.json` (22 entries; every entry fires on its struck wording, no approved wording fires, `node tools/struck-check.test.js` prints "all controls pass").

**Counts: 48 rows. VERIFIED 35, CORRECTED 13, STRUCK 0 whole rows.** Two half-rows are struck inside corrected rows (3 and 18: the LLC sentences).

## How I checked

- **Fetched again on 2026-11-09:** SCDOR H. 4216 page, I-290, I-295 and RR 09-13. All four were byte-identical to the researcher's raw copies. I extracted the PDFs' text myself.
- **Opened myself:**
  - Cornell LII: 26 USC 1031 and 6072, 26 CFR 1.1031(k)-1, 26 USC 267 and 280A.
  - IRS: Instructions for Form 8824 (2025) and the like-kind tips page (updated 01-May-2026).
  - Internal Revenue Bulletins 2008-10 (Rev. Proc. 2008-16), 2018-50 (Rev. Proc. 2018-58), 2004-33 (Rev. Rul. 2004-86) and 2000-40 (Rev. Proc. 2000-37), and release SC-2024-08.
- **SC Code 12-8 and 12-6:** www.scstatehouse.gov does not resolve from this session, and neither does law.justia.com. I read the 2026-11-07 copies in `DATA/raw/`. They are current: 12-8-580's history ends with 2024 Act No. 215, and 12-6-50 includes item (21) from 2026 Act No. 110. To re-open them live, allow www.scstatehouse.gov in the session's network settings.
- **Data:**
  - Re-ran `analyze.py` on the researcher's pull, in a scratch copy of the folder. `findings.json` and `raw/listings-prices.json` came out byte-identical.
  - Recounted the listings by hand from `listings-prices.json`.
  - Checked the live map API totals: unchanged.
  - Re-pulled the 2-to-4-unit pins and tested the county line with a different point-in-polygon method: same 51, median, and 44.
  - Redid every sum and date by hand.
- **Carried rows:** matched against OOS, DST, HV and HTD values and their limits.

## Corrections (CORRECTED rows)

| Row | What was wrong | Use instead [source] |
|---|---|---|
| 1 | Leaves out the exemption, which is the point of this page. | "When the seller's permanent home is outside South Carolina, the buyer must hold back part of the price for South Carolina income tax, unless the sale is exempt" [SC Code 12-8-580(A), (B)(2)]. Then rows 5 and 6. |
| 3 | No source names LLCs. The statute puts "other nonresident entity" at 5 percent, so "an LLC taxed as a partnership is withheld at the individual rate" is unsupported. | Keep only: "A seller that is a corporation is withheld at 5 percent instead" [Form I-290 line 2; 12-8-580(A)(1)]. Cut the LLC sentence. |
| 18 | "An out-of-state LLC with no SC business history is a nonresident": the statute's list is individual, corporation, partnership, trust, estate. No LLC. | "A business seller can be treated as a resident on the same form if it has done business in South Carolina for the last two tax years, will keep doing it, is registered here and has filed a South Carolina return with none overdue" [12-8-580(C)(2); I-295 item 10]. |
| 26 | "Any real property ... is like-kind to any other" drops the IRS's "generally". A condo or a house must be held for rent or investment on both sides. | "Real property in the United States is generally like-kind to other US real property, improved or not, if both are held for business or investment" [IRS like-kind tips page; IRC 1031(a), (h)]. |
| 30 | "is the safe harbor": the regulation has four. | "A qualified intermediary holding the money under a written agreement that limits your right to it is one of the IRS safe harbors" [26 CFR 1.1031(k)-1(g)(1), (g)(4)]. |
| 32 | "a relative" is too broad. Family is only a spouse, ancestors, descendants, brothers and sisters, plus controlled companies. The claim also misses the exceptions. | "Trading with a close family member (a spouse, parent, grandparent, child, grandchild, brother or sister) or a company you control: if either of you sells the property you got within two years, the deferred gain is taxed, with a few exceptions such as a death" [IRC 1031(f)(1)-(3); 267(b), (c)(4)]. |
| 34 | "used it yourself" is too narrow. Personal use follows 280A(d)(2): your days, your family's days, and days anyone pays less than a fair rent. | "...and personal use was no more than 14 days or 10 percent of the rented days, whichever is more. Days your family uses it, or anyone pays less than a fair rent, count as personal use" [Rev. Proc. 2008-16 section 4.02, 4.03; IRC 280A(d)(2)]. |
| 36 | "Move only when the IRS gives disaster relief": Rev. Proc. 2018-58 also covers terroristic or military actions and combat-zone service. The postponement also has caps. | "The IRS can postpone the 45 and 180 days after a federally declared disaster, but never past the tax return's due date with extensions" [Rev. Proc. 2018-58 section 17]. Helene relief ran to May 1, 2025. Never imply it is current. |
| 37 | The titleholder is any person who is not you or a disqualified person, not "a company set up for the job". The 5 business days had no starting point. | "In a reverse exchange, another party that is not you or your agent (an exchange accommodation titleholder) takes title to the new property first. You and it sign a written agreement within 5 business days, name the property you will sell within 45 days, and finish within 180 days" [Rev. Proc. 2000-37 section 4.02, modified by 2004-51]. |
| 38 | Drops the ruling's limits that DST 1 carries. | "A share of a Delaware statutory trust can be the replacement if the trust stays inside Rev. Rul. 2004-86's limits and the other 1031 rules are met." |
| 39 | "When those owners sell, the buyer must withhold" ties a tax-bill address to a home state. OOS 1 and 6 forbid that. | Keep the first sentence. State the withholding rule on its own (row 1). |
| 41 | "houses about $350,000": HV 2's group is houses and other homes, meaning everything that is not a condo. | "Houses and other homes that are not condos: about $350,000 ...". Keep HV 3's limits: condo place figures cover 68 percent of condo resales, and Garden City is Horry County deeds only. |
| 43 | "nothing with the exchange box and a qualified intermediary" is wrong at closing. Under RR 09-13 Option 2 step 2, the I-290 and "the amount necessary to pay the withholding" go to the intermediary at closing. The $1,563 on the cash kept is paid later by the intermediary on a modified I-290 (step 5). It is not held back at closing. | "With the exchange box and a qualified intermediary, the withholding amount goes to the intermediary at closing, and the state is paid nothing if the exchange is completed. Keep $30,000 in cash and the intermediary sends the state about $1,560 on it." All arithmetic is correct. |

## Verified rows with limits the writer must keep

- **Row 2:** 5.21 percent is for a 2026 sale only. The BEA can lower the top rate by February 15 each year.
- **Rows 5 and 6:** never say a 1031 is exempt from withholding without the DOR's condition: "Tax must be withheld where replacement property has not been identified at the time of sale."
- **Row 9:** never name Form I-290X. The current I-290 says "The I-290X is no longer used". An amended I-290 refunds only before the seller's tax year ends. After that, the refund comes on the South Carolina return (row 13).
- **Row 10:** keep "the buyer remains liable" if the page names the contract. Never say the intermediary may spend the withholding amount on the replacement.
- **Row 24:** applies to an individual who files by calendar year. The page states no calendar date.
- **Row 27:** two more cases count as naming a property: one received before day 45, and one named in the signed exchange agreement.
- **Row 31:** relatives and related companies are disqualified too.
- **Rows 45 to 48:** story limits as written. For the lender, use "our affiliated lender, BrickWood Mortgage, a separate company".

## The researcher's struck list (live page)

I agree with all eight strikes, and seven are now in the struck list. Strike 7 needs no entry, because rows 1 to 17 replace that sentence.

- **Strike 8 is a correction, not only a reword.** The live page says "The IRS extends them only for presidentially declared disasters." The source says federally declared disasters, plus other cases. The live page's "The dates themselves never move" is also struck under row 36.
- **The live page's reverse-exchange sentence goes too.** "a company created by your qualified intermediary ... parks the title" is struck under row 37.
- **Run against the live page,** the struck list finds 14 phrases. All of them are expected on the old page.

## Do not publish

- The LLC sentences in rows 3 and 18.
- "Holds back nothing" for the intermediary route (row 43).
- Any wording that the withholding amount may be spent on the replacement (row 10).
- Any claim tying owners' tax-bill states to withholding (row 39).
