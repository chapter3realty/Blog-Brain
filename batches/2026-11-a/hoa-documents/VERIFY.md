# Verification: /hoa/documents/

Batch 2026-11-a, Lane U. Independent verifier (`prompts/verifier.md`), 2026-11-04. I did none of this research. I opened every source myself, re-ran every data script, and pulled fresh copies where I could. The ledger is `facts.md`, and its status column now matches this file. The struck list is `hoa-documents-struck.json`, with 14 entries. Every entry fires on its struck wording and none fires on approved wording (checked with `tools/struck-check.js`). `node tools/struck-check.test.js` prints "all controls pass".

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 22: 1, 2, 3, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 20, 21, 22, 29, 31, 32, 35, 36, 37 (row 5 on the current form, a new source) |
| CORRECTED | 16: 4, 9, 10, 17, 18, 19, 23, 24, 25, 26, 27, 28, 30, 30a, 33, 34 |
| STRUCK | 0 whole rows. Parts struck: "$250" (25), "at least 716" and "362" (30), "778" and "most of them phase amendments" (30a) |

A corrected row may be used only in the safe wording in its verifier note.

## What I re-ran

- **County index (rows 29, 30, 30a).** I ran `analyze_recorded.py` again on the 534 monthly pulls in `wf2/hoa-documents/raw-private/`. The output is identical to `recorded-by-year.json`. I also re-pulled three months from AcclaimWeb live, and each total matched the saved pull: RESTRICTIONS 2019-01 had 560 rows, 2026-10 had 70, and AMENDMENT DEED BOOK 2016-03 had 36. No saved month was cut short.
- **Rules filed elsewhere.** I pulled MISC - DEEDS WITH PAGES (086) for all of 2016, December 2018 and January 2019. It held no association rules. HCG RESTRICTIONS (146) was empty in those months. My pulls are in `wf2/hoa-documents/vscripts/priv/`. They carry party names, so they stay in scratch.
- **SCDCA (rows 31 to 33).** I downloaded the 2023 and 2026 workbooks from consumer.sc.gov again. Both are byte-identical to the saved copies. `scdca_documents.py` gives identical output. The workbook date ranges confirm calendar years 2022 to 2025.
- **Listings (row 1).** I re-ran `pull_listings.py`. It found 5,718 of 6,887 listings with a fee (83.0%), against 5,737 of 6,911 in the researcher's pull. The fractions hold.
- **Statutes.** I fetched the live pages for SC 27-30, 27-31, 27-50 and 33-31, VA 55.1-2308 and 55.1-2312, MD 11B-106, FL 720.401 (2026), NC 47C-4-109, bill H. 5204 with its status page, and the Fannie Mae guide B4-2.2-01 and B4-2.1-03 (guide published October 7, 2026). I also fetched the Register of Deeds page and its copy form (form modified March 17, 2026), the county's reply to an image request, and the Real Estate Commission's forms page and current disclosure form.

## Every correction

1. **Row 4, the seller's form.** The standalone addendum PDF (2013) is no longer on the Real Estate Commission's forms page. The current form is `https://llr.sc.gov/re/recpdf/Property-Condition-Disclosure-Statement-06.2025.pdf`, a 7-page disclosure statement marked "Effective 6/1/2023". Its section IX asks whether the home is in an HOA, and a yes means "owner must complete the attached ... Addendum". The addendum is page 7. "The seller's one duty" overstates: the seller owes the whole disclosure statement unless the sale is exempt. Use: "Unless the sale is exempt, the seller fills in the state's disclosure form before the contract is signed. If the home is in an association, that includes a one-page HOA addendum."
2. **Row 9, the rules carve-out.** An association must give rules to a member who asks, *unless* they are posted in a common area or on its website (27-30-130(B)(1)(b)).
3. **Row 10, the inspection right.** The five-day right covers minutes of *members'* meetings, not board minutes. An HOA that is not a nonprofit corporation must give owners access only to its yearly budget and member list (27-30-150).
4. **Row 17, the condo buyer's liability.** This does not apply to a buyer at a foreclosure sale (27-31-220).
5. **Row 18, the reserve test.** The 10 percent test is Fannie Mae's, and Fannie's live guide still says 10 percent. The 15 percent from January 4, 2027 is Freddie Mac's (Bulletin 2026-C). Do not say Fannie Mae requires 15 percent; this is the sibling verifier's limit too. Do not say "for a conventional loan". Say "in Fannie Mae's full review".
6. **Row 19, delinquencies.** The figures are verified word for word. The scope is Fannie Mae's full project review, not every conventional loan, because the guide also has waivers of project review (B4-2.1-02).
7. **Row 23, non-warrantable.** The guide says such projects are "ineligible for sale to Fannie Mae". It does not say no conventional loan is possible. "Too many investors" is the owner's reason, not the guide's.
8. **Row 24, Virginia.** The sections are in the Resale Disclosure Act (Chapter 23.1, common interest communities, condos included), not the Property Owners' Association Act. Exempt sales are left out. The 3 days run from receipt when the certificate comes after ratification, and from ratification when it comes before.
9. **Row 25, Maryland.** $250 is only the base cap. The state housing department adjusts it for inflation every 2 years from 2018, and I could not read the current figure. The law also allows extra fees for an inspection and for faster delivery. Do not print $250. Say "the law caps the fee".
10. **Row 26, Florida.** The buyer may void "within 3 days after receipt ... or prior to closing, whichever occurs first". The 2026 statute text is unchanged from 2025.
11. **Row 27, North Carolina.** Write "most condo resales". Sales that need a public offering statement, and those exempt under 47C-4-101(b), are left out.
12. **Row 28, the heading.** The IRS data counts all households that moved to the county, not Chapter3's buyers. Use: "Where newcomers to Horry County come from."
13. **Row 30, papers in the last 12 months.** About 55 of the 716 kept rows are timeshare plan amendments, ClubWyndham declarations, cost-sharing easements, board consents or blank titles. So "at least 716" is not supported. Use "about 700 papers". The 403 rules and policies hold ("about 400"). Distinct filers: 362, or 353 when spelling variants are merged. Use "more than 300 associations". The keyword counts (60, 43, 83) hold.
14. **Row 30a, master deed amendments.** The 62 holds. Use "more than 700 in all" instead of 778, and "more than 100 a year" for 2012 to 2018, because that stream includes timeshare declarations. "Most of them phase amendments" is struck: only 551 of the 1,437 titles from 2012 to 2018 name a master deed, and the titles do not say "phase".
15. **Row 33, copies.** Write "had not received a copy", not "never received".
16. **Row 34, H. 5204.** The 15 days apply to the seller certification and the governing documents, not the whole packet. The packet must be kept on a website at no charge. Status: referred to committee on February 18, 2026, with no action since. It is not law.

## Claims that should not be published

- Any figure from "Not verified" 1, the Grand Strand packet fee or turnaround time. The live estoppel page's "about three days" has no source.
- "$250" for Maryland (row 25).
- "Most of them phase amendments to master deeds" (row 30a).
- Any sentence saying the Register of Deeds viewing area is "the only place" the pages can be read. The county also sends copies by mail (row 15). PLAN.md's photo caption is fine as written. Shot-list item 1 says "the only place the pages can be read". That is a brief to the partner, not page copy, but do not carry it onto the page.

## Photo candidate (PLAN.md)

**Horry County Government and Justice Center, Conway.** Source: `https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg`. I read the file page's own text with `action=raw`. The API and WebFetch were refused with a rate limit and a blocked domain.

- **Licence:** `{{GFDL-user-en-with-disclaimers|1=Pollinator|migration=relicense}}`, which means GFDL relicensed to CC BY-SA 3.0. The author is Pollinator at English Wikipedia, "transferred from en.wikipedia", original upload 2006-11-23, 2100x1400. The sibling's licence record (`data/2026-11-a/hoa-liens-and-foreclosure/photos.json`) matches: CC BY-SA 3.0, credit required, share-alike. **VERIFIED.**
- **Subject:** I looked at the sibling's 1200 px copy at full size. It shows brick wings on each side of a white columned entrance across a parking lot, flagpoles, a radio tower and a water tower, two parked cars, and no legible sign, plate or person. This matches the caption. The place check (1301 Second Avenue) is the sibling writer's. The photo is from 2006, and the caption must not date it.

## Notes for the writer

- Row 1 counts change daily. Print counts from one pull only.
- Rows 18 and 19 go stale on 2027-01-04.
- Row 34 must be re-checked when the 2027 session opens.
- Row 13 must be re-checked before release.
