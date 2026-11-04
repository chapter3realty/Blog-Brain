# Plan: /hoa/documents/ (Lane U)

Batch 2026-11-a. Researcher's plan for the builder, 2026-11-04. Facts come only from `facts.md` rows once a verifier marks them `verified`. Data and chart rows: website `data/2026-11-a/hoa-documents/` (its `README.md`). Must-answer list: `must-answer.md`.

## What the live page has, and what to keep

The live page (946 words, about 450 of them real information; judge total 22 of 50) has:
- **Worth keeping:** the nine-document list (expand it into the table below); the SCDCA "documents after purchase" point (replace the statewide 32/53 with the Horry rows 31 to 33); the links to `/hoa/reserves/`, `/hoa/special-assessments/`, `/buyers/coastal-insurance/`, `/buyers/condo-in-litigation/`; the offer "Have us review the documents" and the phone line; the seller-must-disclose FAQ (now with the 11 questions, rows 4 to 6).
- **No** calculator, tool, story, chart, table or photo. No owner-liked headline: `data/headlines.json` has no entry for `/hoa/documents/`. The live title tag "What to Look for in HOA Documents Before Buying | Chapter3" matches the top search ("what to look for in hoa documents"); keep its words.
- **Cut:** "That is an agent failure, plainly", "The fix is unglamorous" (opinion lines); "Verified July 2026" (a typed date); the FAQ that repeats the body; the HOA internet homes strip above the answer (see NEEDS.md).

Every judge problem is solved below: pictures, tables and charts (sections 2, 3, 4, 5, 8); the strip above the answer (NEEDS.md, and the answer starts in the first screen); a local answer (Register of Deeds, copy cost, no SC packet law, Horry complaint data); red-flag thresholds with numbers (section 6); voice; question headings, a table, local names, an og-image; no typed date.

## The reader and their job

A buyer about to offer on, or already under contract for, a condo, townhouse or house in an association on the Grand Strand. Often from another state, where the law hands a buyer the HOA papers and a few days to cancel. They came to learn **what in these papers should stop them, in time to walk away.** They worry about a rule that blocks their plan (renting, a boat, a golf cart, a pet) and about money (an assessment, thin savings, a lawsuit). Next question: "and if I find something, what then?"

**Job in one verb:** check. **Kind of page:** checklist, with a short timeline (CRAFT 3; Page shapes 7 and 3). The main relation is condition: "if the papers show X, it means Y." The red-flag table and the document table carry it.

## The deciding fact (checked first)

**South Carolina gives a buyer no resale packet by law and no right to cancel tied to the HOA papers** (rows 3, 4, 6). The seller owes one form before the contract, and missing it does not void the deal. Virginia, Maryland and Florida, where many of our buyers come from (row 28), each give a cancel right (rows 24 to 26). The buyer's only clock here is the contract's own review period. This is the spine of the page: read the papers inside that window, because nothing else will make them arrive.

## Title, H1, description

- **Title tag (30 to 65 characters):** "What to Look for in HOA Documents Before Buying in SC" (52). Alternative: "HOA Documents Before You Buy: SC Red Flags | Chapter3".
- **H1:** "What to look for in HOA documents before you buy in South Carolina"
- **Hero sub-header (no we, our or us):** "South Carolina gives a buyer no HOA packet by law. The red flags, where the papers are, and when to read them."
- **Description:** "The HOA documents to get before buying on the Grand Strand, the red flags with numbers, where Horry County keeps them, and why SC gives buyers less time than VA, MD or FL."
- **Key-facts row (icons with words), each from one row:** about 5 of 6 homes for sale come with an association (1); no SC law requires a resale packet (3); county pages are viewable only in Conway (13); rules must be filed each January (9).

## Sections, in order, with what each proves

Every H2 is a question people search (STANDARD A4). One fact, one place.

1. **What should you look for in HOA documents before buying?** (short answer, first screen)
   Proves: the five checks, in the order that kills deals: a rule that blocks your plan (rental, pets, parking: rows 5, 12); the money (reserve line against the lender's 10 percent: row 18); what is coming (minutes: special assessments, repairs: row 21); what is owed (statement of amounts due: row 17); whether a lender will lend (rows 19, 20). Then the deciding fact in one sentence. Slim offer bar under it: "Send the address. We read the papers before your review period ends."
2. **Which HOA documents should you get, and what does each one tell you?**
   Table (cards on a phone): document, the names it goes by here ("declaration" or "CC&Rs" for an HOA; "master deed" for a condo, which South Carolina calls a horizontal property regime), where it comes from (county record, the association or manager, the seller, the lender), the one question it answers. Rows: declaration or master deed; bylaws; rules and regulations; budget, balance sheet and income statement; reserve study; board minutes (12 to 24 months); master insurance certificate (link `/hoa/master-insurance-ho6/`); statement of amounts due (link `/hoa/estoppel-and-transfer-fees/`); the lender's condo questionnaire; the seller's disclosure addendum. Rows 2, 4, 8 to 12, 17.
   Under it, **the labelled master-deed drawing** (our illustration, built from 27-31-100 and 27-31-150, row 12): a page outline with 5 labels: "your unit's share of the costs (d)", "what the common elements are (c)", "any limits on leasing, amount and term (h)", "the bylaws, recorded with it", "how many votes it takes to change it". No real association's text. This answers the judge's "show a real line" idea without naming an association.
   Mid-roll offer: "Have us pull the recorded declaration for one address."
3. **Does South Carolina make the HOA give a buyer these papers?**
   Proves the deciding fact. **Comparison table** (unique: nobody compares the states our buyers come from): South Carolina, Virginia, Maryland, Florida (HOA), North Carolina (condo); columns "packet by law", "when", "your right to cancel", "fee limit". Built from `chart-states.json`; blank cells are left out, never filled. Then the seller's addendum: the 11 questions turned into two short lists, "what the seller tells you" and "what only the documents tell you" (row 5). A new home's first sale skips the form (row 7). Rows 3 to 7, 24 to 28.
4. **Are HOA documents public record in Horry County?**
   Proves: yes for the recorded ones, but the county index is online and the pages are not; you view them in Conway (rows 13, 14, 16). Copy cost with the worked example (row 15). Rules must be filed by January 10 each year, so a rule passed this spring may be in force and not yet on file; the association's current copy is the one that counts (row 9). We pull them. Photo: the Government and Justice Center, where the Register of Deeds is (below). Budget, minutes and reserve study are not recorded; owners can inspect them on 5 business days' notice, and the seller is the owner who can ask (rows 10, 11).
5. **How often do HOA rules change in Horry County?** (unique finding 1)
   **Bar chart from `chart-recorded.json`:** association papers filed per year, 2012 to 2026 (2026 marked partial), stacked by kind, with January 2019 called out: 554 papers in one month after the 2018 law's first deadline, against 29 to 57 a year before it (row 29). Then the last 12 months: at least 778 papers from more than 350 associations, including 60 fine policies and 43 collection policies (rows 30, 30a). What it means for the buyer: the rules you read at contract can change after you buy; the minutes show what is coming. Wording limits from rows 29 and 30 ("our count of the county index", "at least").
   Mid-roll offer: "Have us read the minutes for what is coming."
6. **What are the red flags in HOA documents?**
   **Red-flag table:** the flag, where it shows up, the test with its number, what it means for you. Rows: reserve line under 10 percent of dues income (15 percent for applications from January 4, 2027) (18); more than 15 percent of units 60 days behind (19); a lawsuit about the building (20); critical repairs or deferred maintenance (21); commercial space over 35 percent (22); a lender's review that finds the building ineligible ("non-warrantable", defined once) and what that means for a rental-program building (23, story `rental-program-buildings`); a rule that blocks your plan (5, 12; stories rows 36, 37). Links: `/hoa/reserves/`, `/buyers/condo-in-litigation/`, `/hoa/special-assessments/`, `/hoa/rental-restrictions/`.
7. **When do the papers arrive, and what if you find a problem?**
   **Numbered steps (`<ol>`)**, each with who does it: before the offer (seller's addendum; we pull the recorded declaration); the contract (the review period is the only clock in SC); during the review (budget, minutes, reserve study, insurance; the lender's questionnaire); before closing (statement of amounts due, capped liability, condos: row 17); after you buy (rules filed each January; your own right to inspect: rows 9, 10). Then "If you find a problem": ask the association, negotiate with the seller, or leave inside the window. No day counts for the SC contract (not researched; no source).
   Mid-roll offer: "Have us read the papers before your review period ends."
8. **What happens to buyers who read them too late?** (unique finding 2)
   **Chart from `chart-scdca.json`:** Horry County owners who complained to the state, 2022 to 2025: when they were told the home was in an association (198 before closing, 119 at closing, 55 after) and when they got the papers (124 before, 235 after); 55 of 413 said they were denied access (rows 31 to 33). One line: Horry County sends the state more HOA complaints than any other county (row 35). Population said plainly: owners who complained, not all owners. Then the story (rows 36, 37): our agents read the papers against the buyer's plan, boats, carts, rentals and pools.
9. **FAQ** (open text, answers not in the body word for word): Are HOA documents public record in South Carolina? Who pays for HOA documents? How long does it take to get HOA documents? (SC sets no deadline; no local figure, see facts "Not verified" 1.) Can I back out of buying because of the HOA documents? Does the seller have to tell me there is an HOA? What are CC&Rs? Can I see the HOA's minutes before I buy? Is a new South Carolina HOA law coming? (H. 5204, not law, row 34.)
10. **Final offer band**, then a one-line sources list, then a short legal notice with no date.

On-this-page list: yes (more than 4 sections). Phone screens: aim for the first table within 2 screens.

## Unique findings (the bar)

1. **Our count of the county index:** association papers recorded in Horry County by year, 2012 to 2026, and the January 2019 jump after the 2018 law; at least 778 papers in the last 12 months from more than 350 associations (rows 29, 30, 30a). Nobody has published this.
2. **Horry County complaint data cut by timing:** told of the association at or after closing (174 of 372), papers after purchase (235 of 359), denied access (55 of 413) (rows 31 to 33).
3. **A comparison nobody publishes for this reader:** what Virginia, Maryland, Florida and North Carolina law give a buyer, against South Carolina (rows 24 to 28).
4. **A worked local case:** the county copy cost for a 60-page declaration ($64), and the statute-built master-deed drawing (rows 12, 15).

## Visuals

| Visual | Section | Built from | Notes |
|---|---|---|---|
| Key-facts row with icons | hero | rows 1, 3, 9, 13 | `tools/icons.js` |
| Document table (cards on phone) | 2 | rows 2, 4, 8 to 12, 17 | plain column names |
| Labelled master-deed drawing | 2 | row 12 | our own SVG illustration; labels name the statute letters; no real association text |
| State comparison table | 3 | `chart-states.json` | leave blank cells out |
| Bar chart, papers recorded per year | 5 | `chart-recorded.json` | flat glass style; 2026 partial marked; January 2019 called out; data table under it |
| Red-flag table | 6 | rows 18 to 23 | |
| Numbered steps | 7 | rows 9, 10, 17 | real `<ol>` |
| Bars, Horry complainants | 8 | `chart-scdca.json` | two short bar groups; label the population |
| Photo, Government and Justice Center | 4 | sibling licence record | below |

**Photo (free licence, already recorded by a sibling):** Horry County Government and Justice Center, 1301 Second Avenue, Conway, where the Register of Deeds and its public viewing area are. Wikimedia Commons, https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg , by Pollinator at English Wikipedia, CC BY-SA 3.0, licence record in `data/2026-11-a/hoa-liens-and-foreclosure/photos.json`. Looked at full size by this researcher (the 1200 px copy): brick wings on each side of a white columned entrance, a parking lot, a radio tower; matches. Caption: "Horry County's Government and Justice Center in Conway. The Register of Deeds keeps the recorded HOA papers here, and its public viewing area is where the pages can be read." Copy the files into `chapter3realty/images/2026-11-a/hoa-documents/` with this page's own `photos.json` record (or reference the sibling's files; the builder decides), and note that the liens page uses the same photo. No other free photo shows the subject. A photo of a condo lobby, a packet of papers or a notice board would decorate, not prove; leave them out until the partner's own shots arrive.

**No og-image today:** the builder makes one with `tools/ogcard.js` from the chart or the photo.

## Photo partner's shot list

In `shot-list.md`.

## Sibling owners

- `/hoa/hoa-vs-poa/` (2026-10-d, unshipped) row 24 uses the same SCDCA before-or-after count (235 of 359). This page is the reader who cares most; propose this page owns it, and hoa-vs-poa links here with one line. Logged for the lead in NEEDS.md.
- `/hoa/reserves/` owns the reserve tests; this page gives one line in the red-flag table.
- `/hoa/estoppel-and-transfer-fees/` owns the statement of amounts due and closing fees; one line and a link.
- `/hoa/liens-and-foreclosure/` uses the same building photo and the 31 percent complaint line; this page uses the line once, in section 8.

## Links

Up: `/hoa/`. Across: `/hoa/reserves/`, `/hoa/special-assessments/`, `/hoa/estoppel-and-transfer-fees/`, `/hoa/rental-restrictions/`, `/hoa/master-insurance-ho6/`, `/hoa/south-carolina-hoa-laws/`, `/hoa/hoa-vs-poa/`, `/buyers/condo-in-litigation/`, `/buyers/coastal-insurance/`, `/buyers/closing-costs/`. 149 live pages already link to `/hoa/documents/`.

## Offers (each different, each a request)

1. Slim bar under the answer: "Send the address. We read the papers before your review period ends."
2. After section 2: "Have us pull the recorded declaration for one address."
3. After section 5: "Have us read the minutes for what is coming."
4. After section 7: "Have us check a building against the lender's tests."
5. Final band: "Send the community name. We get the papers, read them and tell you what we found."

## Writer's limits from the ledger

- Complaint counts are complainants, never "owners" or "buyers" in general.
- County counts are "our count of the county index", "at least".
- No fee or turnaround figure for packets (not verified). No day count for the SC contract's review period.
- H. 5204 is a bill; say so in the same sentence.
- No association named with any finding.
- No sentence over 28 words; no "So" opener; no "Here is"; no pseudo-cleft.
