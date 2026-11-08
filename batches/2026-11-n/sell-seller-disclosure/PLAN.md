# Plan: /sell/seller-disclosure/ (batch 2026-11-n, Lane N)

Researcher, 2026-11-08. Inputs: `must-answer.md`, `facts.md` (29 rows, all awaiting the verifier), the four approved pilots' DESIGN.md files and specs (fsbo.js, pawleys-island.js, liens-and-foreclosure.js, condos.js). Spec to write: `specs/sell-seller-disclosure.js` (new). Data: `<web4>/data/2026-11-n/sell-seller-disclosure/` (`form-checklist.json`, `seaward-findings.json`, `ownership-findings.json`, `acs-findings.json`; README.md there).

## The reader and their job

A homeowner in Horry County who is about to list, or has a buyer, and has just been handed (or found) the state form. Often a second-home or rental owner who has not lived there, or a long-time owner who has been through several storms. They want to fill it in right, and they fear being sued after closing. Many are not sure their sale needs the form at all.

**Job, in one verb: comply.** Find out if the form applies, answer each question honestly with the records in hand, and add the extra papers a beach or pre-1978 home needs. Kind of page: explainer of a rule (`reports/Page shapes by kind of page.md` section 5) with a checklist inside it (section 7). Lead with the rule in one sentence and who it does not apply to.

## The deciding fact for the reader

The duty is to tell what you actually know, on the state's form, before the buyer signs. "No Representation" does not get you out of it, and a seller who knowingly leaves a problem off can owe the buyer's losses, court costs and attorney fees (rows 7, 8, 26). Here, two things catch sellers that a national page never mentions:

1. **"During your ownership" reaches back over the storms.** Eight items on the form ask about your own years, five of them about water (row 11). About 1 in 3 homes in Horry County has a last recorded sale from before Hurricane Florence, and about 3 in 10 from before Matthew (row 14). Those owners answer for those storms.
2. **Beachfront homes need a second disclosure, in the contract.** About 10,700 homes in Horry County, nearly all condo units, sit on land that reaches past the state's beach setback line (rows 17, 18).

## Title tag and H1

- **Title tag (50 characters):** `South Carolina Seller Disclosure: All 28 Questions`. Search words first ("south carolina seller disclosure"), then one true fact from the page (the form has 28 numbered questions, row 10; the page lists every one). The `| Chapter3` suffix is added by the kit if it adds one; check the length then.
- **H1:** `What a seller must disclose in South Carolina`, with the italic sub line (about half the H1 size, its own line): `The state form's 28 questions, in plain words, and the two extra papers some homes need.`
- **Hero sub-header (no we, our or us):** `Who must fill in the form, what each question means, what you do not have to say, and what happens if something is left out.`
- **Meta description:** `South Carolina sellers must give buyers the state disclosure form before the contract. All 28 questions in plain words, the exemptions, flood and beachfront rules, and lead paint.` (check length against the kit's limit)

## Page shape and sections, in order

One column of text about 665 px; every block (chart, list, card row, table, offer) at the one 720 px width. On screens 1,100 px and wider, the checklist's group index or a photo may sit beside the paragraphs that explain it. Calm: cards only in section 2, where the reader chooses (does my sale need the form?). Plain lists under thin rules everywhere else. No box inside a box.

**0. Short answer (first two sentences, under the H1).** "Yes. If you sell a house, condo or townhouse in South Carolina, you must give the buyer the state's disclosure form before the buyer signs the contract, unless your sale is one of 15 exempt kinds." Then: "You answer what you actually know, and you can owe the buyer if you knowingly leave a problem off." (rows 1, 5, 7, 26). Three short facts under a thin rule, not tiles: 28 numbered questions; 8 items ask about your own years; homes before 1978 need the lead form too.

**Slim offer bar** under the short answer: "Selling soon? Have us pull your home's flood zone, beach line and build year before you fill in the form." Button: `Have us pull your home's records` -> /contact/. (Needs owner Q2 before ship; until then use the pricing offer, see Offers.)

**1. "Who has to fill in a seller disclosure in South Carolina?"** Proves: every owner named in the contract, for homes of one to four units, including a lease with an option to buy (rows 1, 2). Investors and companies are not exempt, and a rental you never lived in still needs it (row 6). One sentence on co-owners. Link /sell/rental-property/ in a sentence.

**2. "Which sales do not need the form?"** The one chooser on the page: a row of cards at 720 px, the reader finds their case. Cards (one line each): Family (only to a spouse, children, grandchildren, parents or grandparents; "solely"), Co-owners, Estate or trust or court order (link /sell/inherited-house/), Foreclosure and the bank's sale after it, Divorce transfer between spouses (link /sell/divorce/), New home never lived in (link /buyers/new-construction/), Public auction, Timeshare, Both agree in writing. Below: "Selling as is does not skip the form" (row 25; link /sell/repairs-before-selling/ and /sell/cash-offer/ in a sentence). Rows 5, 6, 25.

**Offer box 1 (after section 2, tied to "does my sale need it"):** headline `Not sure your sale is exempt?` Body: an agent reads your situation against the state's list and tells you what the closing attorney will want. Button: `Ask us about your sale` -> /contact/.

**3. "When do you give the buyer the disclosure, and does the buyer sign it?"** Before the contract, or when your contract says; the buyer signs that they received it; it is not a warranty; correct it if anything changes before closing (the roof example); a missing form does not stop the closing but is still a broken duty (rows 3, 9). A small three-step line (List / Before the contract / Before closing), plain, not cards.

**4. "What does 'actual knowledge' mean, and what is No Representation?"** Yes, No and No Representation in three short lines under a thin rule (rows 7, 8). One plain sentence in the form's own terms: questions 1 to 14 ask what you actually know of a problem, and questions 15 to 28 also count a notice you received, such as a letter from the county (row 7). Do not define "actual knowledge" beyond that. Attach an expert's report and you are not liable for its mistakes unless grossly negligent (row 26, the form's words). A question about what you "should have known" goes to an attorney (row 7 note).

**5. "What does the South Carolina disclosure form ask?" (the checklist, the page's center).** Built from `form-checklist.json`: nine groups in the form's order (Water and sewer; Roof and structure; Plumbing, electrical, heating and cooling; Termites and pests; Rules, permits, title and water; Lead, mold and other hazards; Leases and vacation rentals; Utility charges; HOA), each item as a plain line with a check box, its number, and a small tag on the eight "your years" items and the water items. The addendum's 11 questions as a tenth group, shown when the reader ticks "HOA or condo" (or always shown, collapsed under its heading on a phone). A print button. On wide screens the group index sits in the right column. Rows 10, 11, 20, 23. Links: /sell/fsbo/ has the drawing of the form for owners selling alone ("If you are selling without an agent, our for-sale-by-owner page shows the form itself"); /hoa/documents/ for the HOA papers; /sell/sell-my-condo/ for bookings in one sentence.

**6. "Do you have to disclose a problem you already fixed?"** Short. For the roof, the structure and flood repairs, yes: the form asks you to describe repairs while you owned it, with dates (row 11). Plain list of the three.

**Offer box 2 (after section 6, tied to filling it in right):** headline `Fill it in with the records in front of you` Body: before you list, we look up your home's flood zone, whether it sits past the beach setback line, and its build year, so your answers match the public record. Button: `Have us look up your home` -> /contact/. (Owner Q2; fallback: `Have us price your home first` -> /sell/home-value/.)

**7. "Do you have to disclose flooding when you sell a house in South Carolina?"** Yes, in the questions the form asks: questions 20 and 22 to 28 (row 12). The local finding: the chart below (row 14), then FEMA's 8,815 claims here and 1 in 4 outside the high-risk zone, to say it matters away from the water too (row 13). What you can check yourself before you answer: your FEMA claim history (only the owner can ask for it), your insurer's claims report (CLUE) (rows 15, 16). Link /buyers/undisclosed-flooding/ for what a buyer can find out; link /buyers/coastal-insurance/ for flood insurance in one sentence. Never say a home flooded.

**8. "What extra disclosure does a beachfront home need?"** Rows 17, 18, 19. The law in one plain sentence (the contract must say the home may be affected by the setback line and give the erosion rate). What the two lines are, in plain words (baseline along the top of the main dune; setback line drawn landward of it). Our count by beach (bar chart). Lines are being redrawn by 2028; Horry's new ones are not set yet. "Ask your closing attorney to put it in the contract." The addendum's coastal zone question is separate (row 20).

**Offer box 3 (after section 8, tied to the beach line):** headline `Selling an oceanfront condo or house?` Body: a Chapter3 agent checks where your building sits against the state's line before you sign a listing, and tells your attorney. Button: `Have us check the beach line` -> /contact/. (Owner Q2.)

**9. "Do you need a lead paint disclosure in South Carolina?"** Rows 21, 22. Who (most homes built before 1978), what (pamphlet, what you know, reports, warning in the contract, 10 days to test, keep three years), the four cases not covered (a studio with no bedroom matters here). The local chart: share built before 1980 by town. One sentence explaining why the chart says 1980.

**10. "What do you not have to disclose in South Carolina?"** Row 24: a death, a disease very unlikely to spread, the sex offender registry; never lie if asked directly. Short, plain, three lines.

**11. "What happens if a seller does not disclose something?"** Rows 26, 27, 28, 29. Owe actual losses, court costs, and maybe the winner's attorney fees; many claims have three years under SC law, and when the clock starts is for an attorney; your agent must disclose material adverse facts they know (said in the same sentence: a fact that significantly lowers the value or the soundness of the home); the buyer still inspects.

**12. "How to fill in your seller disclosure, step by step."** Numbered list (the action list a rule page needs). 1 Check the 15 exemptions. 2 Gather what you have: roof year, repair invoices and permits, termite bond, HOA dues and contact, any lease or booking. 3 Ask FEMA for your flood claim history and order your CLUE report. 4 Answer each question; Yes means explain or attach a report. 5 Built before 1978: the lead form and pamphlet. 6 On the beach: ask the attorney for the setback statement. 7 Give it before the contract; keep a copy the buyer signed. 8 Correct it if anything changes before closing. Each step names its ledger row in the spec comment.

**Full offer band (end):** headline `Selling a home on the Grand Strand?` Body: the listing offer of the sell hub, with the disclosure prepared before the first showing. Button: `Have us plan your sale` -> /contact/. Words not used elsewhere on the page.

**FAQ (only questions not answered word for word above; four at most):** "Is a seller disclosure required for new construction?" (row 5, item 10), "Can buyer and seller agree to skip the disclosure?" (row 5, item 13), "How long is a seller's disclosure good for?" (row 9), "Does an investor who never lived in the house have to fill it in?" (row 6). Drop any the sections already answer in their first sentence.

**Sources box:** SC Code Title 27 Chapter 50 (statmast.php address), 48-39-330 and 48-39-280, 15-3-530; the commission's form; EPA lead page; FEMA NFIP data FAQ; SC DES beachfront lines page and viewer; Horry County GIS; Census ACS B25034; method notes for the three counts. Legal notice: this page states the law and the form; it is not legal advice; ask a South Carolina attorney about your sale.

## Offers (owner, 2026-11-03)

- Slim bar under the short answer; three offer boxes (after sections 2, 6 and 8), each tied to the question that section just answered, each with its own headline and a large button, never the same words twice; the full band at the end.
- Every button to /contact/ is a request ("Have us ...", "Ask us ...").
- **Blocker:** the record look-up offer (bar, boxes 2 and 3) needs the owner's yes (OWNER-QUESTIONS Q2). If he says no, the bar becomes `Have us price your home before you list` -> /sell/home-value/, box 2 becomes the pricing offer, and box 3 becomes `Ask us about selling an oceanfront condo` -> /contact/.
- Never: "our lender", a rate, a payment, or legal advice phrased as advice. No offer promises a "safe" or "complete" disclosure.

## Visuals (one per idea)

1. **The checklist** (section 5): the form's questions as plain check-box rows, from `form-checklist.json`; tags for "your years" (eight) and water (twelve). Print button. This is the page's main tool.
2. **Chart: "When did the current owner buy?"** (section 7): one horizontal bar for all homes with a recorded sale, split at Matthew (Oct 2016) and Florence (Sept 2018): bought before Matthew 29 percent, between Matthew and Florence about 7 percent, after Florence 63 percent. From `ownership-findings.json` (the middle band is 36.7 - 29.2; the script computes it, never typed). One-line note: "Last recorded sale in the county's parcel file. Owners who bought before a storm answer the form's 'during your ownership' questions for it." Optionally a second bar for houses in FEMA's high-risk zone (38 percent before Florence).
3. **Chart: homes past the beach setback line, by beach** (section 8): bars for North Myrtle Beach 4,181, Myrtle Beach 2,952, Arcadian Shores 1,766, Garden City 1,368, Surfside 356, Briarcliffe Acres 117, from `seaward-findings.json`, with "nearly 9 in 10 are condo units" as the note. A map would be better: a strip map of the coast with the setback line and the counted parcels as dots is possible from `raw/setback-current.json` and the parcel rows in scratch, but it is a second visual for one idea; the bar chart is enough unless the lead wants the map (NEEDS.md).
4. **Chart: share of homes built before 1980, by town** (section 9): ten places with 4,000 or more homes, from `acs-findings.json`: Surfside Beach 35, Conway 32, Myrtle Beach 28, North Myrtle Beach 19, Socastee 14, Garden City 11, Red Hill 10, Murrells Inlet 8, Little River 6, Carolina Forest 1, with the county line at 13.5 (2025 1-year; the chart notes the town figures are 2020-2024 5-year estimates). Leave off towns under 4,000 homes (wide margins).
5. **Exemption cards** (section 2): the only cards.
6. **Steps** (section 12): numbered list with the line between steps, no card around each.
7. **One photo** (section 8): a U.S. government (public domain) oblique aerial of the Horry oceanfront showing dunes and the first row of buildings. Candidates, all from USGS baseline survey 11CCH03 (flown 2011-08-24, public domain, https://doi.org/10.5066/F7N877XX), none used on another page (used frames: 174830, 175124, 175156, 175537, 175549, 175601, 175655, 175857, 175915, 175948, 180052, 180133, 180143, 180150, 180158, 180234, 180512, 180542, 180608, 180624, 181208):
   - `2011_0824_181304d` (plane at 33.839280 N, 78.589513 W, North Myrtle Beach, Cherry Grove area): houses behind the dune line. Zip `11CCH03_0824_181000.zip`.
   - `2011_0824_180321d` (33.753945 N, 78.790418 W, about Arcadian Shores): oceanfront towers and the beach. Zip `11CCH03_0824_180000.zip`.
   - `2011_0824_175531d` (33.565900 N, 79.000063 W, Garden City): houses and a pier. Zip `11CCH03_0824_175500.zip`.
   - `2011_0824_180019d` (33.687183 N, 78.877428 W, Myrtle Beach): towers along Ocean Boulevard. Zip `11CCH03_0824_180000.zip`.
   Pull the frame from its zip by HTTP range request, as /sell/fsbo/ did (its `photos.json` provenance shows the method); the plain image URLs return 404 today. Look at it at full size. The caption names no building and says only what the frame shows and the year ("Oceanfront homes in North Myrtle Beach in 2011"), never that a building is past the line. License record for `tools/photos.js`: "Public domain", license_url https://www.usa.gov/publicdomain/label/1.0/, author U.S. Geological Survey. Wikimedia Commons refused requests today; if the writer finds a CC BY or CC BY-SA photo of a dune walkover there, credit it.
   No photo elsewhere: the page's other visuals are its tools and charts. No stock image of a form or a handshake.

## The photo partner's shot list

For `templates/photo-request-email.md` (the owner sends it from his Gmail; the partner's address is with the owner):

1. A dune walkover and the dune line behind oceanfront houses in North Myrtle Beach or Garden City, from the beach, at low tide, no people's faces, no house numbers readable (section 8).
2. The same kind of scene in front of a row of oceanfront condo towers in Myrtle Beach (section 8, the condo case).
3. A house raised on pilings in a flood-prone street away from the beach, for example in Socastee or Conway near the Waccamaw, wide, no address readable (section 7).
4. An older brick ranch house in Conway or Myrtle Beach from the 1960s or 1970s, street view, no address readable (section 9, lead).
5. A septic tank lid or a well head in a yard, close up, nothing identifying (section 5, optional).

His photos are our own photos once he confirms in writing.

## What the page must not do

- Repeat what another page owns: the drawing of the form and the FSBO steps (/sell/fsbo/), what a buyer can find out about past floods (/buyers/undisclosed-flooding/), flood insurance costs (/buyers/coastal-insurance/), HOA document detail (/hoa/documents/), condo bookings (/sell/sell-my-condo/), estates (/sell/inherited-house/), repairs (/sell/repairs-before-selling/), cash buyers (/sell/cash-offer/), divorce (/sell/divorce/). One sentence and a link each.
- Give legal advice. State the law and the form, say when to ask an attorney.
- Name a building, a company or an HOA with a judgment. Use any MLS sold data. Give a value for any address.
- Print a fact from a row that is not `verified`, or a story not in `stories/stories.json`.
- Use "safe", "family-friendly" or other steering words; the stigma section is about the law, not a neighborhood.
- Type a number a chart or the checklist could read from its JSON.
