# Verification: /buyers/condo-in-litigation/ (batch 2026-11-b)

Verifier, 2026-11-10. I did none of the research. I fetched every source again into my own folder (`scratchpad/vcil/dl/`) and re-ran both data scripts into `scratchpad/vcil/rerun/`. The ledger's status column now carries each verdict. Struck wording is in `batches/2026-11-b/facts/buyers-condo-in-litigation-struck.json` (13 entries). Each entry fires on its own struck wording, no approved wording fires, and `node tools/struck-check.test.js` prints "all controls pass". The July page now in the working copy fires none of them.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 2, 4 to 18, 22 to 28, 30 to 32, 35, 37 | 28 |
| CORRECTED | 1, 3, 20, 21, 29, 33 | 6 |
| STRUCK | 19, 34 | 2 |
| Not verifiable (owner question) | 36 | 1 |

## What I opened

- Fannie Mae B4-2.1-03, live (11/04/2026). Every quote in rows 1 to 6 and 14 is on the page.
- Freddie Mac 5701.3: guide.freddiemac.com returned 401 to a script, and the host is outside this session's network. I read the copy the NW verifier saved (identical file, effective 05/06/2026). The lead can allow the host to re-read it live.
- HUD 4000.1 Update 18, the full 14 MB PDF (issued Aug. 12, 2026): II.A.8 (13) pp. 519 to 520; II.C.2 (D) pp. 789 to 790; II.A.1 Condominium Unit standard.
- Newrez checklist 3/2026, the usalliance Form 1076 (March 2016), the SCREC form (7 PDF pages), Title 15 Chapter 3: all live, all match the researcher's copies.
- Opinions 4888, 4943, 27698, 6124 and 26909 at sccourts.org, and the Renaissance Tower complaint at classaction.org. The four PDFs are byte-identical to the researcher's.
- Horry County Clerk of Court page (the Public Index link is there; the index returned 406 to me).
- WMBF, Apr. 3, 2026 (row 34). It opened this time, but it is news.
- Horry County parcel layer 24, and the Chapter3 map API, by re-running the scripts.

## Every correction

1. **Row 1.** The guide says what Fannie Mae will buy. It does not say a loan "cannot close". Use: "Fannie Mae will not buy a loan on a unit in a building whose association is named in a pending lawsuit, or whose developer is in a suit about the building's safety, structure, livability or use, unless the lender finds the suit minor in a way the guide lists [B4-2.1-03, 11/04/2026]".
2. **Row 3.** The repair case is missing its carve-out. The guide adds "and there is no anticipated material adverse impact to the HOA ... if funds are not recovered". Use: "suing to recover money for repairs already made, when losing would not hurt the association". The lender decides whether a suit is minor.
3. **Row 20.** The 8-year limit covers only buildings whose certificate of occupancy came after July 1, 2005 (2005 Act No. 27, in the code's editor's note). Older buildings had 13 years, and Op. 6124 applied the 13-year text to Wedgewood. Use: "A defect suit must be brought within three years of when the problem was or should have been found. For a building finished after mid-2005, the limit is eight years after completion; older buildings had 13. Neither limit protects a builder guilty of fraud, gross negligence or recklessness [S.C. Code 15-3-530, 15-3-640, 15-3-670; Op. 6124]".
4. **Row 21.** The counts reproduce exactly: 2,860 listings, of which 73 were built in 2018 or later and 1,914 in 2000 or earlier.
   - The total is the whole CCMLS feed. It includes Conway (33), Longs (22), Pawleys Island (96) and Calabash, NC (3). Say "for sale in the local MLS", not "on the Grand Strand".
   - The note's meaning, "in an older building the suit to worry about is the repair fight, not a builder suit", is wrong. Wedgewood sued 17 years after it was built, through the gross-negligence exception. Use: "Most condos for sale here are in buildings past the usual time limit for a builder suit, but a suit claiming gross negligence can still come years later."
5. **Row 29.** Wedgewood did not sue "under the gross-negligence exception". The jury found gross negligence, and that finding lifted the time limit. The defect list comes from the complaint; the expert testified that the defects let water in. Use: "The association sued in 2018, about 17 years after it was built. A jury found gross negligence, which lifts the time limit, and awarded $6.75 million; the Court of Appeals affirmed in 2025 [Op. 6124]".
   - The parcel tie is confirmed. The only Wedgewood regime on the county layer has nine buildings (BLDG 1 to 9) and 111 units, so the opinion's "eleven-unit" reads as 111.
   - The case sentence still says "in Horry County".
6. **Row 33.** The re-run gives the same counts of recent last sales: 51, 37, 23 and 8. Two denominators were wrong:
   - Renaissance Tower's 324 includes 5 commercial unit parcels. The tower has 319 condo units, and all 51 recent sales are condo units.
   - Magnolia North's 366 includes one garage. Its count is 37 of 365.
   - Riverwalk (23 of 216) and Wedgewood (8 of 111) stand.
   - The page wording "51 of its units" is safe.

## Struck

- **Row 19.** No one has opened a court image from the Public Index. The only support is link patterns found in another page's patch.
- **Row 34.** A secondary source. WMBF reports a $1.25 million settlement, approved in November, and a dismissal on Feb. 3, 2026. The primary source is the D.S.C. docket, 4:22-cv-03556, on PACER.

## Limits the writer must keep (verified rows)

- **Row 9.** A suit that ended within 12 months still counts for FHA only when it was about safety, structure, livability or use, or carries a risk insurance does not cover. "A building that just settled can still fail FHA" is on the struck list.
- **Row 11.** FHA also wants the engineering and expert reports, with repair costs and status. "The same five questions are the ones we ask" needs the owner's yes.
- **Row 12.** Do not quote the questionnaire. Fannie's current form still returns 403.
- **Row 14.** A cash purchase has no loan for those rules to govern. Never imply that cash removes the risk.
- **Row 16.** The absence holds on all 7 pages. A building defect could still be a "known common area problem", so the page says the form asks about common-area problems, not about a lawsuit.
- **Row 18.** The county index lists state Circuit and Family Court cases only. A federal suit, like Renaissance Tower's, is not in it. Never write that it shows every suit.
- **Row 31.** The complaint's "has remained unoccupied" dates from October 2022. The news (not printable) says owners returned in February 2023. Never write that the building is still empty.
- **Row 35.** 7 to 14 years is right. Wedgewood's 2025 ruling is the last one read; we did not search for a later petition.

## Not to publish

- **Row 36, the owner's deal.** It is not in `stories/stories.json`. That includes "more than a thousand dollars", "one of the agent's best sales" and "steep discount". The owner records it first.
- **Row 34**, the settlement and the dismissal.
- Any conclusion about a named building's loan status today, as the ledger header already says.
