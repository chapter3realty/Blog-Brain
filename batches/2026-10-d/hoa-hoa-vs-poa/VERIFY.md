# Verify: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Independent verifier, 2026-11-01. I did not research these facts. I opened every source myself and re-ran every data script. Ledger: `facts.md` (its status column now matches this file). Struck list: `hoa-hoa-vs-poa-struck.json` (25 entries). Each struck wording fires its entry, no approved wording fires any entry, and the current built page has no struck wording. Its usual place is `batches/2026-10-d/facts/`. The lead should copy it there, because this stage may edit only this folder.

**Counts:** 26 rows. 11 VERIFIED, 15 CORRECTED, 0 STRUCK. A corrected row may be used only in the safe wording below.

## What I re-ran

| Script or source | Result |
|---|---|
| `pull_fees.py`, `refine_medians.py`, `pull_has_with_fee.py` (CRM map API, about 04:10 UTC) | Same totals and steps as the saved JSON. Condo 2,867 (1 with no fee), townhouse 368 (30), house 3,743 (1,153). |
| `classify_names.py` on the private lien month files (`wf2/hoa-special-assessments/raw-private`) | Reproduces 548, 286, 103, 48, 104, 7, 488 and the 5 and 4. Merged by spelling (the sibling verifier's `dedupe_filers.py` rule): 526. |
| `scdca_docs.py` on the four workbooks | Reproduces 416, 235, 124, 57. The four live workbooks on consumer.sc.gov are byte-identical to the saved ones. |
| `pull_layer_rows.py`, `pull_layers.py` (AcclaimWeb, live) | The same 60, 28, 10, 13, 2, 29 and 10 rows. `layers.json` is identical. One new Prince Creek West rules document, 5138/2087, was recorded 2026-10-15. |
| scstatehouse.gov t27c030, t27c031, t27c050 (live) | Every quote is word for word. Bills S.903, H.5204 and H.3447 (2025-26) would amend Chapter 30, but none was enacted. |
| LLR addendum PDF, govinfo 44 CFR 61 App. A(3) 2025, eCFR version list, Fannie Mae B4-2.1-01 (08/05/2026) | All quotes are found. |
| AcclaimWeb image request, Horry County Register of Deeds page and Copy Request Form | The no-images notice is live. Copies can also be ordered by mail. |

## Row by row

| # | Status | The point |
|---|---|---|
| 1 | CORRECTED | The claim leaves out the timeshare exclusion. A POA is an HOA only if it meets the test. |
| 2 | VERIFIED | |
| 3 | CORRECTED | Wording only. "Is set by" fails build.js (SETS_REGEX). |
| 4 | VERIFIED | Bills are pending, but none was enacted. |
| 5 | CORRECTED | 27-50-30 exempts some sales. "Any association" needs "unless the sale is exempt". |
| 6 | CORRECTED | "Why the deed gives a condo away" overstates 27-31-120, and it is figurative. |
| 7 | CORRECTED | "Outright" and "can never be split up or sold off" go further than 27-31-60 and -70. |
| 8 | VERIFIED | Keep "unless the master deed says otherwise". |
| 9 | VERIFIED | |
| 10 | VERIFIED | |
| 11 | CORRECTED | 27-31-270 protects a paid-up unit's title. It does not bar a sale of the building. |
| 12 | VERIFIED | |
| 13 | VERIFIED | No substantive change to App. A(3) since 2021. |
| 14 | CORRECTED | The review line is not "more than ten units". Five- to ten-unit projects inside a larger development or a master association also need review. A PUD can be townhouses. |
| 15 | VERIFIED | The medians, bands, ratio and yearly figures reproduce. |
| 16 | VERIFIED | 29.8 to 29.9 percent. |
| 17 | CORRECTED | Trash: 1,204 / 2,590 = 46.49 percent, so **46**, not 47. |
| 18 | CORRECTED | 548 counts name spellings (the sibling verifier struck it). Merged it is 526. Five names were misspelled and sat in the wrong bucket. "INC" in a name is not proof of incorporation. The sibling's wording is "unpaid charges", not "unpaid assessments". |
| 19 | CORRECTED | Merged, the count is 4, not 5. A Tower or Villas name does not prove a condo regime. "Master associations are common" has no source. |
| 20 | CORRECTED | About 40 of the 75 supplements appear in the index. The index does not show which way the assignment goes. "A home there answers to" is cut (personification, not verified). |
| 21 | VERIFIED | |
| 22 | CORRECTED | "A second association" is wrong. The index also lists a Prince Creek West Property Owners Association Inc. |
| 23 | CORRECTED | The documents are not shown to the public online. They can be viewed in Conway or ordered by mail. |
| 24 | VERIFIED | The workbooks match the live files. |
| 25 | CORRECTED | The story is about a rental plan for investors, not any buyer's plan. |
| 26 | CORRECTED | Scope it to the HOA Act. "Splits the roof" and "sets no rule" fail the build. |

## Every correction, with the safe wording

1. **Row 1.** "Any group that runs a planned neighborhood or a condo regime, where a recorded declaration makes owners pay assessments, is a homeowners association under the state's HOA Act, except a timeshare plan. A property owners association (POA) that meets that test is one too [S.C. Code 27-30-120(6)]."
2. **Row 3.** "The recorded documents decide whether dues are voluntary or mandatory, not the name." The writer's sentence in the row stays: "If no recorded document makes you pay, it is not an HOA under South Carolina's HOA Act."
3. **Row 5.** "Before a contract, the seller of a home in any kind of association gives the buyer the state's disclosure addendum, unless the sale is exempt (for example a home never lived in, a foreclosure or court sale, an auction, or both sides agree in writing to skip it) [SC REC addendum; S.C. Code 27-50-30, 27-50-40]." The form has one line for charges and one for the contact.
4. **Row 6.** "A regime's name in its master deed must end in 'Horizontal Property Regime', and a deed may describe a unit by its number 'in Horizontal Property Regime' [27-31-100(e), 27-31-120]." Cut "why the deed gives a condo away".
5. **Row 7.** "A condo owner owns the unit alone, plus a share of the common parts, set as a percentage in the master deed. The common parts stay undivided; no owner can force them to be split up, and selling a unit sells its share with it. The owners together are the council of co-owners, which may incorporate [27-31-20(e), -60(a), -70, -90, -120]."
6. **Row 11.** "Property tax is billed on each condo unit, not on the building. If a neighbor does not pay, a tax sale cannot take your unit while your own taxes are paid [27-31-270]."
7. **Row 14.** "Fannie Mae requires a project review for an attached condo unit in a project of more than ten units, or of five to ten units that is part of a larger development or master association. It waives the full review for detached condo units, small condo projects and units in a planned unit development (a neighborhood where every owner must belong to the HOA) [Selling Guide B4-2.1-01, 08/05/2026]." No ledger row supports "whose loan rules many lenders follow".
8. **Row 17.** Trash among houses with a fee is **46 percent** (1,204 of 2,590), not 47.
9. **Row 18.** "Of the about 526 associations that recorded a lien for unpaid charges in Horry County in 2025, about half have 'homeowners' or 'HOA' in the name, one in five 'property owners' or 'POA', fewer than one in ten a condo word, and about one in five another name. Nine in ten have 'Inc.' or 'Corp.' in the name [our count, Horry County Register of Deeds index, CONDO LIEN (064), name spellings merged]." The merged, misspelling-fixed counts are: HOA 275 (52.3%), POA 103 (19.6%), condo 45 (8.6%), another association name 97 (18.4%), no label 6 (1.1%), Inc or Corp 480 (91.3%). Use shares, not 548, 286 or 488.
10. **Row 19.** "A few names mix a condo word with 'property owners' or 'homeowners'. Some carry no label word at all, only a place name such as a Tower or Villas. Only 4 have 'master' in the name." Drop "though master associations are common" and the five-year "15 of 1,192".
11. **Row 20.** "Grande Dunes, in Myrtle Beach, has a master association, the Grande Dunes Master Association. Its master declaration's 75th supplement is on file, along with a common-area cost sharing agreement. The county index shows an assignment of architectural review between the master and each of two neighborhood property owners associations inside Grande Dunes, Bal Harbor and Cipriana Park." Cut "A home there answers to the master and to its neighborhood association."
12. **Row 22.** "Prince Creek West also has an association for its roads and parks, the Prince Creek West Road and Park Districts Association, which records its own rules and its own policy for collecting late assessments." Do not say "a second" or count the layers; the index also shows a Prince Creek West Property Owners Association Inc.
13. **Row 23.** "Horry County's deed index is free to search online, but the county does not show the documents themselves to the public online. They are viewed and printed in Conway, or ordered by mail [AcclaimWeb notice; Register of Deeds Copy Request Form]." "So we go and get them" still needs the owner's yes (Question 1).
14. **Row 25.** "When we search for an investor's rental, we leave out communities that ban renting and read the HOA documents for rules that would hurt the rental plan." Do not name the teller.
15. **Row 26.** "South Carolina's HOA Act has no rule on who maintains or insures a house in a planned community; the condo rules apply only to horizontal property regimes. For a house, the recorded covenants decide; in most house listings the fee does not include insurance [27-30-110 to -340; row 17]."

## Not to publish

- The number 548 and the counts 286, 103, 104 and 488 on any surface. Use the merged shares in row 18.
- Any sentence that says which Grande Dunes, Barefoot or Prince Creek homes pay which association. The documents were not read.
- "The deed gives a condo away", "answers to", "splits the roof", "sets no rule", "is set by". These are figurative, or build.js refuses them.
- Any association name from the lien index (row 18 and 19 rule; unchanged).

## Other things for the writer and the lead

- Rows 20, 21 and 22 have " | " inside their quote cells. This breaks the markdown table. I left it, because the verifier may edit only the status and note columns.
- The old page's FAQ lines "Read the declaration, not the name" and "Check for both" are still in the built page (PLAN says they go).
- A new Prince Creek West rules document (5138/2087, 2026-10-15) is newer than the researcher's pull. It does not change row 22.

## Photo candidates (PLAN.md section 9)

I read each licence on its Commons file page (wikitext) and viewed every file I could download.

| File | Licence on the file page | Viewed at full size | Verdict |
|---|---|---|---|
| Hotels along the Grand Strand Beachfront 2.jpg (DiscoA340) | self, CC BY-SA 4.0 (own work), own work, 2022-08-14 | Yes, at 1920 px | **Usable, with a limited caption.** It shows oceanfront towers along the beach in Myrtle Beach, with beachgoers small in the foreground and a shop sign small at the left edge. The file calls them hotels. No row supports "many are condo regimes", so the caption is "Oceanfront towers in Myrtle Beach" and nothing more. Credit: "DiscoA340, CC BY-SA 4.0, via Wikimedia Commons". The photo partner's shot 3 is still better. |
| The Market Common, Myrtle Beach (13 May 2023) 29.jpg | self, CC BY-SA 4.0 (own work) | Yes | **Not usable.** It shows a shopping street with a mixed-use building (a store sign at street level), not homes. No ledger row covers Market Common. |
| ... (13 May 2023) 33.jpg | self, CC BY-SA 4.0 (own work) | Yes | **Not usable.** A lake and lawn. Houses are only specks in the far distance. |
| ... (13 May 2023) 35.jpg | self, CC BY-SA 4.0 (own work) | Yes | **Not usable.** A lake and lawn. No homes can be seen. |
| ... (December 2023) 08.jpg | self, CC BY-SA 4.0 (own work) | Yes | **Not usable.** A historical marker whose subject is a photo of a person (rules/images.md). |
| CarolinaForest001.jpg to 005.jpg (Isipeoria) | `{{PD-user-en}}`, but the description says the photo "is released into the public domain under Wikipedia and its subsidiary projects" and "may reappear under Flickr under different licensing terms" | No (HTTP 429) | **Not usable.** The release is limited to Wikimedia projects, which is not a clear public-domain grant for our site. The files are also 500 x 375 and dated 2007. |

No new photo licence record is needed unless the writer uses the Grand Strand file. Its record goes in `photos.json` with the licence, author and file-page URL above.
