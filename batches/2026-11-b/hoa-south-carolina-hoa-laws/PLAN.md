# Plan: /hoa/south-carolina-hoa-laws/

Batch 2026-11-b, Lane U. Research half, 2026-11-10. Ledger: `facts.md` (55 rows: 31 reused from verified sibling ledgers, 23 new and pending the verifier, and row 24, which is both). Demand: `must-answer.md`. Data and scripts: website `data/2026-11-b/hoa-south-carolina-hoa-laws/` (README there). Spec to write: `specs/south-carolina-hoa-laws.js`. None exists; the live page is hand-made, so this is its first spec (author "devin").

## The reader and their decision

Two readers. An owner in a dispute (a fine, an unrecorded rule, a board that will not answer) who wants to know what the law lets the HOA do and where to take it. A buyer, often from North Carolina, New York or Florida, who wants to know what South Carolina protects before they buy into an HOA or condo. Both expect a state agency to police HOAs. Neither knows that the state's HOA law is short and the recorded papers decide almost everything.

Their decision: **owner:** push back, file with the state, go to magistrate court, or see a lawyer. **Buyer:** whether this community's papers fit how they plan to live, and so whether to offer.

## The answer in two sentences

South Carolina has no single law that runs HOAs: the 2018 HOA Act requires every HOA and condo to record its papers, give 48 hours' notice before a budget increase (unless it is a nonprofit), open its budget and owner list, and accept magistrate court for money disputes up to $7,500, while the Nonprofit Corporation Act and the condo law add meetings, records and liens. Fines, dues limits, rental rules and developer turnover are not in state law at all; they are in your community's recorded documents, and no state agency will make an HOA follow them (rows 1, 2, 6 to 13, 24).

## What the live page has worth keeping

- The title's search words, "South Carolina HOA Laws" (no entry in `data/headlines.json`, so no owner-approved headline to keep).
- The six provisions of the 2018 Act, now as rows of the law map (rows 6 to 12).
- The strongest idea on the page: "No agency will overturn your HOA's decision", with the 68 percent, 19 percent and under-1-percent outcomes (row 18) and the "voluntary mediation" quote (row 14).
- What complainants want changed (row 22), now beside Horry County's own count (row 21).
- FAQ questions: what the Act is, who regulates HOAs, can I complain to the state, must documents be recorded, must a seller disclose an HOA. Answers rewritten from verified rows.
- The offer words "Ask us about a community" and the end band "Buying into an association? We read the documents against how you plan to live, before you are committed."
- The legal notice, shortened, with no typed date.
- Cut: "Verified July 2026"; "the honest answer matters"; "Which is precisely why"; the FAQ on budget notice (one line and a link to dues-increases, which owns it).

## Findings no other site has

1. **How Horry County's 416 HOA complaints ended (2022 to 2025), our count of the state's workbooks** (row 20): 269 closed with the HOA's answer on file, 101 undecided, 19 with no answer from the HOA, 10 with the owner satisfied. The middle one took 33 days.
2. **What Horry County owners asked the state to change** (row 21): open meetings 41 in 100, records rules 30, a ban on liens and foreclosure 20, developer turnover 19. Each topic links the page that covers it, so the chart is also the page's map of the HOA guide.
3. **The law map**: one table of every common question, what state law says (with the section), and where the rest lives. No result in the top ten maps the three laws to the questions; one of them cites the wrong section.
4. **The papers are local and they change** (rows 46, 47): 554 association papers recorded in Horry County in January 2019 against 29 to 57 a year before the Act; in the last year about 700 more by more than 300 associations, 60 of them fine policies.
5. **Three states side by side on fines** (rows 43, 44): SC none; North Carolina a hearing and $100 a day; Florida $100 a violation, $1,000 in all, and no lien under $1,000. For newcomers from those states (row 45).
6. **Five bills of the 2025-2026 session, none law** (row 42), including S. 903, which passed the Senate 39 to 0 and is not on the liens page.

## Wow factor and offers

The page sells no place, so there is no place's wow fact to find. Its hook is the local finding the reader could not have guessed: only 10 of 416 Horry County complaints ended with the owner satisfied, and the rule that decides their case is a paper on file in Conway that changes every year. Every offer follows from that: we pull and read the recorded papers before you commit.

Every request button links to `#lead-form` (or `/contact/?place=...`); the site opens the short pop-up by itself (owner, 2026-11-10). No two offers use the same words.

1. Top, slim bar under the short answer: **"Ask us about a community"** (kept) and the phone.
2. After "What rules can an HOA not enforce": **"Have us pull a community's recorded rules before you offer"**. One sentence: we ask the seller for the papers and check the county index for each rule's recording.
3. After the three-state fines table: **"Moving here from another state? Have us read the papers against how you live"**. One sentence from story row 55 (boats, golf carts, rentals, pools).
4. After the complaint section: **"Done with your HOA? See homes with none"**, with the homes strip below (see Homes strips).
5. End band: **"Buying into an association?"** with the kept line "We read the documents against how you plan to live, before you are committed."

Never an offer to settle a dispute, give legal advice or act for an owner against an HOA. Chapter3 is a brokerage.

## Sections in order (question headings people search)

Kind of page: a law explainer that is also the hub for six sibling law pages (`reports/Page shapes by kind of page.md` section 5). Each answer is one or two sentences and a link; only the complaint process, records and meetings, and "unenforceable rules" get full sections, because no sibling owns them.

**Title tag:** "South Carolina HOA Laws: What They Say and Who Enforces Them | Chapter3"
**H1:** "South Carolina HOA laws" with a second line "What the state sets, and what your HOA's own papers set" (STRUCT-5: 8 to 30 words, a statement).
**Description:** "South Carolina's HOA laws in one table: what the HOA Act, the condo law and the nonprofit law require, what they leave to your papers, and how Horry County's complaints ended."
**Byline:** Devin Day, reviewed by Tim Nash (mkpage sets it). Dates by mkpage and `node build.js dates` only.

1. **What are South Carolina's HOA laws?** The two-sentence answer (rows 1, 6, 24). Then the law map, the page's main visual (below). One line under it: about 6 in 10 Horry County homeowners pay an HOA or condo fee (row 49), so these rules reach most homes here. Slim offer 1.
2. **Which law applies to my HOA or condo?** Three short items, one per law (row 2): the HOA Act, every HOA and condo, from 2018 and unchanged since a one-phrase fix in 2019 (rows 4, 5); the Nonprofit Corporation Act, if the HOA filed as a nonprofit, with how to check at the Secretary of State (row 3); the condo law, from 1962 (row 53), for condos. One line: a POA is an HOA under the Act if it meets the test, link /hoa/hoa-vs-poa/ (row 5).
3. **What HOA rules are unenforceable in South Carolina?** Four plain items: a rule not recorded by January 10 after it was adopted (row 8); papers not recorded at all (row 7); an amendment without the vote the papers require (row 38); a ban on one portable US flag (row 39). Then one sentence: courts read an unclear rule in the owner's favor (row 37). Local line: about 700 association papers were recorded in Horry County last year, 60 of them fine policies; the county's index is online and the pages are copied at the Register of Deeds in Conway (rows 47, 48), link /hoa/documents/ for the 2019 spike (row 46). Offer 2.
4. **Can an HOA fine you, foreclose, raise dues or ban rentals in South Carolina?** Four short answers under bold labels, each one or two sentences and a link, never a sub-heading that copies a sibling's title:
   - Fines: no cap, no hearing right; the word is not in either law (row 24) -> /hoa/violations-and-fines/.
   - Foreclosure: yes, through the court; a condo by statute, a neighborhood by its covenants (rows 26, 27) -> /hoa/liens-and-foreclosure/.
   - Dues: no cap; 48 hours' notice unless a nonprofit (rows 9, 33); no reserve law (row 34) -> /hoa/dues-increases/, /hoa/reserves/.
   - Rentals: allowed to ban or limit if the papers say so; no grandfather rule; a condo's limits must be in the master deed (rows 35, 36) -> /hoa/rental-restrictions/.
   - Developer turnover: no state deadline (row 40) -> /hoa/developer-control-turnover/.
   Then the three-state fines table (visual 2). Offer 3.
5. **Can I see my HOA's records and go to its meetings?** Records: the nonprofit list and the budget-and-owner-list rule (row 10); the condo ledger (row 11). Meetings: a yearly owners' meeting, 10 to 60 days' notice, 5 percent can call a special meeting, board meetings need no notice unless the bylaws say so (row 31); a condo's 51 percent vote by value (row 30); no state law opens board meetings to owners, though bylaws can (row 32). Close with what a buyer does instead: the papers come through the seller, link /hoa/documents/.
6. **Who enforces South Carolina HOA law?** Heading answer kept from the live page in its spirit: no state agency overturns an HOA's decision. Consumer Affairs records and forwards complaints and is barred from acting as a referee (rows 13, 14). The routes: the HOA's own process, magistrate court up to $7,500 (row 12), a condo owner's suit under the condo law (row 29), a lawyer through the SC Bar's referral line (row 51).
7. **How do I file an HOA complaint in South Carolina?** Numbered steps (rows 15, 16, 52): raise it with the board in writing and check the papers for a dispute process; file online or on paper with the HOA Supplemental Questionnaire (without it the complaint is not counted: 78 in 2025); the agency sends it to the HOA (row 13); it closes with one of four outcomes (row 18). Then the Horry chart (visual 3) and the line on Horry's lead (row 19). One sentence on why to file anyway: the yearly report goes to the Governor and the legislature (row 17). Offer 4 and the homes strip.
8. **Is South Carolina changing its HOA laws?** Visual 4 (what Horry owners asked for, each bar linked), one sentence that statewide the top asks match (row 22, shares of recommendations). Then the five bills as a short plain list: what each would do and where it stopped; "none has become law" (row 42). Bill detail on foreclosure stays on /hoa/liens-and-foreclosure/.
9. **FAQ** (open text): What is the South Carolina Homeowners Association Act? Who regulates HOAs in South Carolina? Can I complain about my HOA to the state? Do HOA documents have to be recorded in South Carolina? Does a seller have to disclose an HOA in South Carolina? (row 41) Can I sue my HOA in South Carolina? (rows 12, 29, 51) Is condo law different from HOA law in South Carolina? (rows 2, 26, 29, 36) Can I refuse to join an HOA? one line and a link to /hoa/, which owns it (row 50). No FAQ on fines, dues, foreclosure or rentals (siblings own them).
10. End offer band (offer 5). Sources line (the statutes, the report and workbooks, the bill pages, NC and FL statutes, the county index, Census). Legal notice, shortened, no date.

"On this page" list with short labels: The laws, Which applies, Unenforceable rules, Fines and more, Records and meetings, Who enforces, Complaints, Changes, FAQ.

## Visuals (each readable at a glance, one message each)

1. **The law map** (section 1). Table, three columns: "Question", "What South Carolina law says", "Read more". About ten rows: record the papers; budget notice; records; meetings; fines; foreclosure; dues; rentals; developer turnover; flags; complaints. Middle column a plain answer with the section number small ("Must be recorded to count. 27-30-130"). Rows the law does not cover say "Nothing. Your papers decide." Built from a data file in the spec (each cell names its ledger row). Cards on a phone, one per question. Plain list style, no card inside a card (the approved liens DESIGN.md).
2. **Fines in three states** (section 4). Three-row table: State | Cap on a fine | Hearing before a fine | Can a fine become a lien. SC: none / not in state law / the papers decide. NC: $100 a day under the statute's process / yes, unless the declaration sets its own / yes. Florida: $100 a violation, $1,000 in all, unless the papers say otherwise / yes, 14 days' notice, three-owner committee / not under $1,000. Rows 24, 25, 43, 44.
3. **How 416 Horry County complaints ended** (section 7). From `chart-complaint-outcomes.json`. Title, one message: "Only 10 of 416 Horry County HOA complaints ended with the owner satisfied". Horizontal bars, counts on the bars, plain labels ("The HOA answered", "Facts in dispute, left undecided", "The HOA never answered", "Still open", "Owner satisfied", "Dropped"). Note: "Our count of SC Consumer Affairs' reports, 2022 to 2025. 'The HOA answered' is the state's 'adequate business response': the HOA replied to every point, whether or not the owner was satisfied."
4. **What Horry County owners asked the state to change** (section 8). From `chart-what-owners-want.json`, the four "change the rules" bars only; each label is a link to its sibling (open meetings links to section 5 of this page). Title: "What Horry County owners asked the state to change". Note: "416 complaints, 2022 to 2025; an owner could pick more than one." The "who should enforce" numbers go in one sentence, not a second chart.

No photo is needed to carry a fact. If the lead wants one, the Register of Deeds building in Conway (the licensed Commons photo of the Government and Justice Center used on /hoa/liens-and-foreclosure/, `data/2026-11-a/hoa-liens-and-foreclosure/photos.json`) fits section 3, where the papers are filed. Do not reuse it if liens shows it near the top; one page owns a photo.

## Homes strips

The page names no place, so no named-place strips. The site's edge already puts a feed under the opening. One strip, in section 7 after offer 4, for the owner who is done with an HOA: **title "No HOA, no board: Grand Strand houses for sale now"**, filtered to houses with no association fee across Horry County. True by its filter. No such slug exists in `batches/2026-10-b/data/idx-places.json` (only town slices such as `nohoa-surfside-beach`); the lead adds a feed `nohoa-grand-strand` in BUILD.md, or the strip is left out. Fallback: no photo; the strip takes no space when empty. Link under it: /buyers/no-hoa-homes/ (it owns that search; this page does not claim it).

## Siblings and links

- Each sibling gets one link, on the words of its question, in section 4 or 5: violations-and-fines, liens-and-foreclosure, dues-increases, reserves, rental-restrictions, developer-control-turnover, documents, hoa-vs-poa, the hub /hoa/. Also /hoa/special-assessments/ and /hoa/estoppel-and-transfer-fees/ in the law map's "Read more" column.
- This page keeps "South Carolina HOA laws", "SC Homeowners Association Act", "who regulates HOAs in South Carolina" and "SC HOA complaint". It gives up the live FAQ on budget notice to dues-increases.
- Referring pages: 11 today (`tools/inbound.js`). For the lead: /hoa/documents/, /hoa/rental-restrictions/ (being rebuilt in this batch; tell its writer) and /hoa/hoa-vs-poa/ do not link here yet; each has a sentence on the HOA Act or the recording rule where "South Carolina's HOA law" can become the link.

## Notes for the writer

- Plain words, 28 words a sentence at most, no em dashes, no "So" to open a sentence, no "Here is". Say "the HOA Act" and "the condo law" after the first full name. One section number per row of the law map at most; elsewhere the sources line holds the citations.
- Never "no agency regulates HOAs" (struck); say no agency enforces the Act and the state is barred from acting as a referee.
- Every percent says what it is a percent of ("of 416 Horry County complaints"). Row 21 and row 22 use different bases; never put them in one sentence as if they compare.
- Never name an HOA, a person or a law firm from the complaint file, a case or a bill page. Cases go in the sources line by name only.
- The legal notice stays: general information, not legal advice; a South Carolina attorney for a specific dispute.
- Pending rows wait for the verifier: 1 to 4, 14 to 18, 20 to 22, the first sentence of 24, 31, 32, 39, 40, 42 to 44, 51 to 53, 55.
