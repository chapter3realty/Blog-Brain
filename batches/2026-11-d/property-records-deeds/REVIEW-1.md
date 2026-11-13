# Review 1 fixes: /buyers/property-records/deeds/

Review 1: pass=false, score 8.5. Two blocking items, nine nits. Fixed in `wt-139/specs/property-records-deeds.js` and rebuilt with mkpage.

## Blocking

1. **"Type SMITH JOHN for John Smith." said twice.** Fixed. Step 1 of "By name" now says only the new tip: "Search every spelling too, with and without a middle initial." The example and the 3-letter rule stay once, in the top steps.
2. **"Chapter3 is a real estate brokerage, not the county." said three times.** Fixed. It stays once, under the first navy button. The office card has no caption now. The FAQ item "Is Chapter3 the Register of Deeds?" is cut.

## Nits taken

- **Tax-bill link.** "county tax bill" now links /buyers/property-records/tax-bill/ (the page is built in wt-139). The property tax guide link stays, on "explains the rates". BUILD.md's note that the link was taken out no longer holds.
- **The 99 in 100 line.** It moved to the "Map #" row of the index entry drawing: "The lot's parcel number. 99 in 100 deeds carry one." The memo search line now gives the fact that fits it (row 20, 99.9%): "Almost every deed, 999 in 1,000, carries that short description of its lot." The spec checks `with_memo_pct === 99.9`.
- **The 1/1/1984 From date.** Step 3 now says: "The form fills in a From date of January 1, 1984, but names reach back to late 1979. For an older deed, set the From date earlier." (rows 5 and 6.)
- **Kinds of deed.** The bullet now explains two of them, from two new rows marked VERIFIED-BY-FIXER in facts.md:
  - Row 44, SC Code 27-7-10: "In a warranty deed, the seller promises to defend the title against anyone's lawful claim."
  - Row 45, SC Code 12-51-130: "A tax deed goes to the buyer at a sale for unpaid property tax, once the owner's time to redeem it runs out."
  - The quitclaim deed is no longer named in this bullet. No source read for it says what it is. The exemptions list still names the quitclaim that only confirms title.
  - Raw statute files: `wt-139/data/2026-11-d/property-records-deeds/raw/sc_code_t27c007.html` and `sc_code_t12c051.html`. Both statutes are added to the sources line.
- **Near repeats in the offers.**
  - "Through us" now reads "Free, by email, from the address alone." The offer under it keeps "We pull the deed from the county and email it to you".
  - The lien offer now opens "We search the recorded loans, liens and lawsuit notices on the house".
  - The fraud alert offer now opens "Forward it to us." Only the top offer still says "Send us the address".
- **FAQ.** Cut "Is Chapter3 the Register of Deeds?" (blocking item 2) and "Does the Horry County fraud alert cost anything?" (the H2 answers it with "Yes" and "free"). Added "What is a plat, and how do I find one in Horry County?" The page did not define a plat, and "plat search" is a search this page owns. The answer is from row 29 (definition) and row 7 and the Book/Page section (book type P). The FAQ now has 4 entries, which keeps score A7 at 100%.

## Nits declined

- **"Are deed records public", "Can I see my deed online" and "What does a copy cost" in the FAQ.** Kept. Each one is a question people type, and the reviewer notes the FAQ schema has real value. Each answer is short and none repeats a sentence word for word (repeat-check strict passes). Cutting them would leave 1 FAQ entry and drop A7.
- **The text column at 1440.** This is the site template, not this page.
- **No homes feed in the preview.** The site's edge adds it (BUILD.md lead item 3).
- **P6 "grantor".** Explained in place, as the reviewer says.

## Gates after the fix

| Gate | Result |
|---|---|
| `repeat-check.js --strict` | passes: 0 identical, 0 near sentences; 0 repeated shapes |
| `struck-check.js` (buyers-property-records-deeds-struck.json) | no struck wording |
| `score.js --only` (SCORE_TODAY=2026-11-13) | **99/100**: SEO 100, AEO 100, Human 99, Trust 100. Only P6 "grantor" at 75% (explained in place). |
| `claims-scan.js wt-139` | 0 findings |
| `facts-check.js wt-139` | 0 lines on this page. The 4 wrong sentences are on the Massachusetts and Virginia relocation pages and llms-full.txt, as before. |
| `house-claims.js` | 0 sentences |
| `build.js check` | OK |
| `build.js audit` | For this page: "missing from sitemap.xml" (lead) and the cannibalisation line with /hoa/documents/ (lead item 4), both as before. WARN only: llms.txt, no Tim Nash quote (none allowed), 7 sentences over 22 words (none over 28). |
| No em dash, no sentence opening "So", no "Here is" | clean |
| `critic.mjs` 320, 390, 1440 (preview on port 8921) | **0 blocking, 0 warning** at each width. JSON: `scratchpad/nd/property-records-deeds/critic-r1-<width>.json` |

## Shots

`scratchpad/nd/property-records-deeds/shots-r1/` (scratchpad is `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/`). Read at 390:
- The "By name" steps read cleanly. Step 1 is one line of new advice, and step 3 now carries the 1979 note.
- The index entry card shows the "Map #" row with "99 in 100 deeds carry one."
- "The kind of deed" bullet reads in five short lines.
- The office card ends at its last row, with no caption.

Nothing overlaps. The preview was stopped after the shots.

## Lead note

BUILD.md is updated: the tax-bill link is now on the page. If deeds ships before tax-bill, remove that link.
