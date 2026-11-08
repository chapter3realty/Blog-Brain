# Review round 1: /sell/seller-disclosure/

Three reviewers: critic (FAIL, 5), reader (FAIL, 7), owner's eye (FAIL, 8). All fixes are in `specs/sell-seller-disclosure.js`, rebuilt with mkpage. Nothing was edited in the built page.

## What changed, finding by finding

### Critic, blocking

1. **"Sellers most often miss two things" had no source.** Replaced: "Two things touch many Grand Strand sales. One is the flood questions about the years you owned the home. The other is a beachfront statement for homes on lots past the state's setback line, about 10,700 in Horry County." (rows 11, 12, 18). DESIGN.md line 16 fixed the same way.
2. **The flood count said four and listed 20, which is outside 22 to 28.** Now: "Question 20 asks whether the house flooded while you owned it. Questions 22 to 28 ask about ... Five of these questions, 20 and 25 to 28, ask only about the years you owned the home." This matches the brown numbers in the checklist and row 11.
3. **"Seaward", "setback line" and "baseline" in the answer sentence.** The section now opens: "The state draws a beachfront setback line a set distance inland from the top of the main sand dune. A home on a lot that reaches past that line, toward the ocean, needs a second statement in the sale contract." "Seaward" and "baseline" are gone from the page (row 17's statute is summarized as "the state's beach lines").
4. **"Questions 15 to 28 also count a notice".** Now: "For questions 15 to 28, the form asks what you know or were told in a notice, such as a letter from the county." (row 7)
5. **Unexplained words.** Each is now explained in the same line: termite bond ("a contract with a pest control company", item IV-B; step 2 says "your termite contract"), easements ("which give someone else a right to use part of your land", item 17), special assessments ("charges the association adds on top of the regular dues", addendum 3), beach renourishment ("sand added back to the beach", item 28 and the flood section).
6. **The slim offer left "form." alone at 1024 and 1440.** Headline shortened to "Selling soon? Start with your flood zone." It also no longer repeats the button's words. A `text-wrap:balance` rule on that one line keeps it to two even lines ("Selling soon? Start / with your flood zone.") at 1024 and 1440. Checked in the shots.
7. **Part headings stepped in and out at 390 and 320.** The part label now always sits above the title, at every width. Checked at 320 and 390.

### Critic, nits taken

- The HOA addendum's coastal zone line is cut, along with the whole "When the state redraws the lines" subsection (the owner's finding).
- Loris is out of the lead text. The text now says "about 1 in 3 in Conway and Surfside Beach, and about 1 percent in Carolina Forest". The chart note says why small towns are left off: "because the estimates for them are rough".
- The parcel-file note is gone with the storm table. The setback chart caption is now "Homes on lots that reach past the beach setback line, by beach".
- The FSBO overlap went to NEEDS.md item 12 for the lead.

### Reader, blocking

- **Step 3 did not say how to get the FEMA record.** The flood section now has "Your home's flood claim record". It is a short list: where to send the request (in writing to FEMA's records office, or online at dhs.gov/foia, marked "Privacy Act Request"), what to put in it, and how to sign it (before a notary, or under penalty of perjury). New row 30 has the source: 6 CFR 5.21, the rule FEMA's FAQ points to (VERIFIED-BY-FIXER). The CLUE report has its own short subsection that says who sells it: "You order it from LexisNexis Risk Solutions, online, by phone or by mail." New row 31 has the Utah page's words. The Utah link is no longer inline, so a reader is not sent to a Utah site in the middle of a sentence. Step 3 now points to "the flooding section", which says how to ask for each record.

### Reader, nits taken

- The open question about a flood claim from before you bought is answered. "Question 25 asks only about claims while you owned the home. Question 23 asks about any flood risk you know of, and the form says you must disclose what you know when you fill it in. A South Carolina attorney can say whether an older claim belongs in your answer to question 23." Row 32 has the source: form p.1 and Q23 and Q25.
- A download link is under the checklist: "Our short wording of the state form, updated June 2025. Download the form for the full wording of each question." The checklist section's first link is now "state form".
- "Brass numbers" is now "The brown numbers". "Cloud the title" is now "does not put a defect on the title" (row 3's "create a defect in title"). "A land contract paid in installments" is now "a land contract, where the buyer pays you over time".
- The storm table and its exact numbers are gone (see the owner's findings). The setback math and the survey-grid line are gone.
- "The oceanfront homes for sale now are on our map" is cut. It was for buyers.

### Reader, nits not taken

- **When No Representation is the right answer for a rental you never lived in.** The form's words are the whole rule: you "do not have the current knowledge necessary" to answer Yes or No (row 8). Giving the rental as an example of when to use it would be advice the form does not give. The page keeps the form's words.
- **"A transfer to a residential trust."** These are the statute's words (row 5, item 12). No primary source in the ledger defines it. The next sentence already sends an unsure seller to the closing attorney.

### Owner, blocking

1. **The flood count.** Fixed as in critic item 2.
2. **Repetition.**
   - (a) The "When" paragraph is now one sentence: "Before the buyer signs the contract, unless your contract names another time." Each timeline step says something new. The second says the buyer's signature means they received the form. The third gives the form's own example: "If the roof starts to leak after you hand it over, correct the form or make the repair before closing." The paragraph that repeated it is cut. The "not a warranty" line now appears once, in the last section: "The form is not a warranty, and it does not replace the buyer's inspection." Steps 7 and 8 are merged ("Keep a copy the buyer signed, and keep it true until closing"), so the list has seven steps. The FAQ answer stays, because FAQ answers repeat by design.
   - (b) The as-is rule is now one sentence: "Selling "as is", which means without repairs, still needs the form, unless the sale is one of the 15 kinds."
   - (c) The setback count is introduced once: "We checked every home parcel in Horry County against the state's setback line map. About 10,700 homes are on lots that reach past that line." The chart note keeps only "Each condo unit counts once ...".
   - (d) The beachfront statement is now required only in the section opening and the offer. "For a lot like that, the sale contract needs the beachfront statement ... Ask the closing attorney to include it." is cut. Step 6 is kept, because the steps are the order of work, but it no longer restates the rule. It is now "On the beach? Add the setback statement: Your agent raises it with the closing attorney before the contract." That is also the owner's nit: "we" or "your agent", not "you ask".
3. **Technical details cut.** Gone from the page:
   - the baseline and setback-distance sentences, and the survey-grid and erosion-rate sentence;
   - the whole "When the state redraws the lines" subsection (the DES source is gone with it);
   - "The HOA question was added to the law in 2018" (the 2018 Act source is gone with it);
   - "We read the commission's form ... and wrote each of its questions as one short line below.";
   - the parcel-file note.
4. **The storm table.** Cut. The finding is two rounded sentences. "We checked the last recorded sale of every home in Horry County. More than 1 in 3 (37 percent) last sold before Hurricane Florence in September 2018. About 3 in 10 (29 percent) last sold before Hurricane Matthew in October 2016." The claims are said once, with what they show: "FEMA paid more than 1,000 flood claims in the county for Matthew and nearly 900 for Florence." The 8,815 total is gone. Only the "nearly 1 in 4 outside the high-risk zone" share stays, in the section's opening answer.
5. **A question raised and not answered.** Answered as in the reader's nit (row 32). The words a first-time seller would not know are explained in the same line, as in critic item 5. "Seaward" is gone. The swash is no longer in the caption.

### Owner, nits taken

- Loris: dropped from the text (see the critic nits).
- "Ask the closing attorney" is now "Your agent raises it with the closing attorney" (step 6). The body sentence is cut.
- Caption: "Oceanfront condo buildings north of Myrtle Beach in 2011. Most of the homes we counted on lots past the setback line are condo units like these." Following VERIFY.md, it never says these buildings are past the line.
- H1: now "South Carolina seller disclosure: all 28 questions", the same as the title tag (CRAFT 7). The italic line is now "What the state form asks, who is exempt, and the extra papers some homes need."
- FSBO overlap:
  - The FEMA sentence is reworded and folded into the flood answer.
  - The offer now reads "Send us the form once it is filled in. An agent reads it and marks any Yes that still needs an explanation or a report."
  - The FSBO link sentence now says what that page adds: "If you are selling without an agent, our for-sale-by-owner page covers the rest of that sale."
  - The lead paint paragraph stays here, because this page owns the question. NEEDS.md item 12 asks the lead to trim FSBO.

### Owner, nits not taken

- Page length: the owner's reviewer said it is right for the question. About 600 words of technical and repeated text were cut in this round anyway.

## Gates after the fix

- mkpage: built.
- `node build.js audit`: no error for the page except "missing from sitemap.xml". The lead fixes that at stitch, which this task may not run. 0 sentences over 28 words.
- score: 98/100 (SEO 100, AEO 89, Human 100, Trust 100). A6 "at least one data table" now fails, because the storm table was cut on the owner's finding. Trust T2 was failing after the method lines were cut. Two "We checked" sentences now carry the page's own counts (parcels and setback map), and T2 passes. A table would bring A6 back, but the owner asked for fewer exact numbers. The score passes without it.
- claims-scan 0, struck-check clean, house-claims 0, repeat-check `--strict` passes, structure-check `--strict` passes, facts-check: nothing for this page.
- site-audit: only the sitemap entry (the lead's step).
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking. There are 4 read.wall warnings at 320, down from 5. Each is an H2 answer of 3 or 4 short paragraphs. The line-length warning at 1024 is gone.
- Shots looked at: the hero and the offer bar at 1024 and 1440; the checklist part headings at 390 and 320; the flooding and beachfront sections at 1440; the FEMA list at 390. The photo sits beside the beach paragraphs at 1440. Files are in `scratchpad/wfn/sell-seller-disclosure/fix1/`.
