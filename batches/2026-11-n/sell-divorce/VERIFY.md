# Verify: /sell/divorce/ (batch 2026-11-n)

Independent verifier, 2026-11-08. I did none of the research. I opened every source myself, live, and did not trust the pasted quotes. I re-ran the data script. My scratch folder is `scratchpad/wfn/sell-divorce/verify/`.

The ledger is `facts.md`. Its status column now matches this file, and each row's note ends with my note. The preface line "All rows are `awaiting verifier`" is now out of date; I edited only the status and note columns.

Struck wording is in `sell-divorce-struck.json` in this folder (21 entries). The verifier prompt names `batches/2026-11-n/facts/`, but this job may write only under `sell-divorce/`; the lead should copy it there for `struck-check.js --batch`. Every entry fires on its own struck text, and no approved wording fires any entry. `node tools/struck-check.test.js` prints "all controls pass". The page is not built yet. Ten sentences in PLAN.md fire entries already ("both sign the listing", "qualify for alone", "since 1996", "the time away counts against them", "a lender cannot call the loan because the house moved to a spouse"). The writer must use the corrected wording.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 16: rows 2, 3, 5, 6, 8, 11, 13, 15, 18, 19, 21, 22, 25, 27, 28, 35 |
| CORRECTED | 19: rows 1, 4, 7, 9, 10, 12, 14, 16, 17, 20, 23, 24, 26, 29, 30, 31, 32, 33, 34 |
| STRUCK | 0 |

35 rows in all.

**The deciding fact holds.** SC Code 20-3-630(A) makes property acquired during the marriage marital "regardless of how legal title is held". 20-3-660(A) lets the court order a sale and have the clerk sign the deed. Row 1 needs its exceptions stated (see below).

## What I re-ran and opened

- **Data.** I ran `build_findings.py` into my own folder. `findings.json` came out identical. The reused SHV `county_all.resale_house` (n 6,866, median 350,000) matches SHV row 2, which is verified. I downloaded FHFA's `hpi_at_metro.csv` again today. All 206 CBSA 34820 rows match `raw/fhfa-34820.csv`, and 2026Q2 (378.71) is still the latest quarter. I redid every sum in rows 19, 20 and 29 to 33 by hand.
- **Statutes, fetched live today** from `scstatehouse.gov/code/statmast.php` (it now redirects to `statmast?...`):
  - Title 20 Ch. 3, Title 63 Ch. 3, 27-7, 40-57, 12-24 and 40-60
  - Title 15 Ch. 11 (15-11-10, 15-11-20), which is new, for row 7
  - Except for 40-57, each one is byte-for-byte the same as the saved copy in DATA raw. My converter gave 40-57 a different length, but every quoted passage is in the live text.
- **Federal sources:**
  - 12 U.S.C. 1701j-3 at govinfo (2023 edition) and at Cornell
  - 12 CFR 191.5 through the eCFR API, current, for the occupancy carve-out in row 17
  - IRS Pub 523 and Pub 504, both the 2025 editions, "Page Last Reviewed or Updated: 30-Apr-2026"
  - Fannie Mae Selling Guide B2-1.3-02 (10/08/2025) and B3-6-05 (08/05/2026), both published November 04 2026
  - fhfa.gov/data/hpi, for what the All-Transactions index counts
- **South Carolina courts and county:**
  - SCACR 407 RPC 1.15
  - SCADR Rules 2 and 3
  - the Horry County Clerk of Court page
  - the Census geocoder for 1301 2nd Ave, Conway: 33.83244 N, 79.04864 W

## Every correction

| Row | Wrong | Use |
|---|---|---|
| 1 | "a house bought during the marriage is marital property" (no exceptions) | "...is usually marital property, even if only one spouse's name is on the deed. The exceptions include a house bought with one spouse's inherited or premarital money, or one a prenuptial agreement leaves out" [20-3-630(A)(3), (4)]. |
| 4 | Exceptions list missing (A)(3) and (A)(4); "stays theirs" | Add "what was bought with either of those" and "what a written agreement such as a prenuptial agreement leaves out". Say the premarital house "is not marital property under the law"; whether later retitling changes that is case law, so send the reader to an attorney. |
| 7 | "once it is filed, it does" | "After it is filed, a buyer or lender who takes an interest later is bound by the case. It does not affect a lender or buyer whose rights came first" [20-3-670(A)(2)(a); 15-11-20]. It is filed with the county's clerk of court. |
| 9 | Three-month wait stated as if it covers every ground | "On most grounds a final divorce cannot be granted until three months after the case is filed. On the one-year-apart ground, the hearing can be held and the divorce granted once the other spouse has answered or is in default, whichever comes first" [20-3-80]. |
| 10 | "Contested issues ... go to court-ordered mediation" | "Most contested issues ... must go to mediation, unless the case is exempt or the spouses agree to arbitration or early neutral evaluation instead. A mediator is a neutral person who helps the two sides talk. The mediator does not decide, and any agreement is voluntary" [SCADR Rules 2, 3]. |
| 12 | "both sign the listing" as law; "any change to an accepted deal" | The statute says "the property owner". Both signing is practice only: "we have both sign the listing". (H)(4) covers "changes or modifications made during negotiations", which must be in writing, initialed and dated by both. |
| 14 | "in trust until they agree in writing or a court decides" | "keep the disputed part separate until they agree, a court decides, or a narrow exception in the rule applies" [RPC 1.15(e)]. The rule has no "in writing". (e)(2) can apply if the attorney represents only one spouse. |
| 16 | "often paid with a new loan"; "qualify for the loan alone" | "can be paid with a new loan"; "must qualify for the new loan under Fannie Mae's rules". The Guide does not say "alone". |
| 17 | Garn-St Germain divorce exemption with no occupancy limit | 12 CFR 191.5(b) limits the exemptions to "a home occupied or to be occupied by the borrower", and (v) to a spouse who "occupies or will occupy the property". Use: "...moves a home of one to four units to the borrower's spouse, when the borrower lived in the home and the spouse who gets it lives there or will." A rental or second home is not covered. |
| 20 | No nonresident-alien limit; "a buyout deed saves the $1,295" | "...exempt from the deed fee, unless the spouse receiving it is a nonresident alien. A buyout deed pays no deed fee; a sale of the same $350,000 house pays $1,295." A buyout deed would not owe $1,295 anyway: its value is its own consideration (12-24-30). |
| 23 | "time away counts against the spouse who left" | "Without one of those papers, the time after you move out does not count as time you lived there." The other spouse must actually live there as their main home. |
| 24 | No "generally", no nonresident-alien carve-out, no residence test | "Generally ... This does not hold if the spouse who receives it is a nonresident alien ... can count the time the other spouse owned it, but must meet the 2-year living-there test on their own" [Pub 523]. |
| 26 | "if your divorce is not final by December 31" | "If you have no final decree of divorce or separate maintenance by the last day of your tax year (December 31 for most people), you count as married for that whole year" [Pub 504]. |
| 29 | "before the closing attorney's fee" | "before the closing attorney's fee and other closing costs". The numbers are right. |
| 30 | "qualify for it alone" | Row 16 wording. The numbers are right. |
| 31 | "until the old loan is paid off, both owe it" | "until the old loan is paid off or the lender releases the other spouse, both owe it" (rows 17, 18). |
| 32 | "tracks repeat sales" | "tracks repeat sales and refinance appraisals" (FHFA: All-Transactions adds "appraisal data obtained from the Enterprises"). 378.71 for 2026Q2 is right. |
| 33 | "any house bought since mid-1996" | The 1996Q2 gain is $1,291 under the limit, inside the index's own error up to 1997Q3. Use "a typical house bought in 1998 or later"; mid-1990s "close to the limit". The 2006, 2016 and 2021 figures stand: about $199,000 / $151,000, $167,000 / $183,000, and $230,000 / $120,000. Say "a typical house that sells for about $350,000 today would have cost about ... in mid-2016", not "a house bought for". |
| 34 | "the Clerk of Court ... is at 1301 Second Avenue"; venue in two cases | The county page lists a main office (1301 Second Ave, Conway) and a Central Coast Complex office (332 Hinson Dr, Myrtle Beach). Venue has three cases plus a nonresident rule [20-3-60]. Use the full wording in the ledger, or cut the venue sentence. |

## Notes on verified rows

- **Row 3.** I found no equal-split rule or presumption anywhere in Title 20 Ch. 3. Factor (2), marital fault, is also on the list.
- **Row 8.** The sentence "until the order is filed, if one of you dies, the other owns the whole house" is allowed only for a deed that names exactly the two spouses as joint tenants with rights of survivorship [27-7-40(a)(i)].
- **Row 15.** Carry FSBO's wording: "the middle resale home, condos aside", or "houses and other homes". Never write "the middle resale house" alone (SHV row 1).
- **Row 22.** For the $500,000, both spouses must also meet the look-back test.
- **Row 27.** I added a Pub 523 primary quote for the second sentence: "your gain or loss is the gain or loss on the entire sale multiplied by your percentage of ownership".

## Photos (PLAN.md)

| Candidate | Licence on its file page (checked live 2026-11-08) | Verdict |
|---|---|---|
| `File:New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg` | CC BY-SA 3.0 Unported, also GFDL. Author "Pollinator at English Wikipedia", transferred from en.wikipedia. Taken 18 November 2006, 2,100 x 1,400. Description: "New Horry County Courthouse and county office complex, Conway, South Carolina". | **Licence cleared.** This photo is already on the site: `images/2026-11-a/hoa-liens-and-foreclosure/horry-government-justice-center.webp`, with a full record in `data/2026-11-a/hoa-liens-and-foreclosure/photos.json`. Reuse that file and record; do not download it again. I looked at the 1,200 px copy. It shows the modern complex: brick wings on each side of a white columned entrance, with a parking lot, a radio tower and two parked cars. No person or plate can be read. The original returned Wikimedia's error page today. Caption it as Commons describes it, "Horry County's courthouse and county office complex in Conway", with no date. Matching it to 1301 Second Avenue rests on the hoa-liens writer's imagery check. I confirmed only the geocode. |
| `File:Horry County Courthouse.jpg` | CC BY-SA 4.0, Krabbit7, 2 September 2013, 4,000 x 3,000. Description "Horry County Courthouse". No coordinates. | **Reject for this page.** I looked at the 1,920 px rendition (the original was not downloaded). It shows a two-story red brick building with white columns, a cupola and the lettering "...COUNTY COURT HOUSE" on the lawn front. That is the historic courthouse, not the modern complex where the Clerk of Court for the Circuit and Family Court sits (row 34). A caption tying it to divorce cases would be wrong. |

The photo partner's shot (shot-list.md) is still preferred.

## Should not be published at all

- Any of the struck wording above. PLAN.md's chip "Under $250,000: the gain on a typical Horry County house bought since 1996" must change to "1998 or later".
- "Both spouses must sign the listing" as a legal rule. It is our practice only (owner Q1).
- None of the 35 rows is struck.
