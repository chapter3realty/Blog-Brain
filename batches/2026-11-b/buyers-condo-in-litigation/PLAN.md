# Plan: /buyers/condo-in-litigation/ (batch 2026-11-b, rebuild)

Inputs: `must-answer.md`, `facts.md` (rows cited as F1 to F37), data in the website copy at `data/2026-11-b/buyers-condo-in-litigation/`. No spec exists for this page: it is a hand-built July page. The rebuild gets `specs/condo-in-litigation.js` (author "devin"), built with `node tools/mkpage.js`.

## 1. The live page: what is worth keeping

Read 2026-11-10 (699 words, title "A Myrtle Beach Condo in Litigation Can Be the Best Deal").

Keep:
- **The owner's idea, in the H1 and title:** a building in a lawsuit can be the best deal. The rebuild keeps it as the hook, after the searched words.
- **The owner's real deal** (F36): unit in a building in a structural-defect suit, repairs already done, sellers stuck, contract signed with closing set after the suit, underwriter told everything, closed the week the suit ended, steep discount. It is the most persuasive thing on the page. It needs a stories.json record first (owner question 1).
- **"We tell you everything we find about a building before you risk a dollar."** Keep as the end offer's line.
- **The FAQ logic of "Does a condo in litigation always mean you should walk away?"**: what the suit is about, whether repairs are done, how close it is to ending. It becomes the spine of the "good deal" section.
- **Why lenders say no, in plain words:** they fear an assessment or a failed building behind their loan.

Fix or cut:
- "Conventional, FHA and VA all decline": too broad. Fannie Mae, Freddie Mac and FHA each allow minor suits (F3, F7, F9). VA has no verified row: VA is not named.
- "This pattern is common with aging condo buildings ... defect lawsuits tend to cluster as a building matures": unsourced. Replaced by the state's time limits (F20) and our count of building ages (F21), which say something sharper: here, most condos for sale are past the builder-suit window.
- The FAQ "What does it mean when a condo is non-warrantable?" and "non-warrantable / portfolio loan" wording: `/invest/non-warrantable-condos/` owns it. One linked clause.
- "our preferred lender can walk you through": replaced with "our affiliated lender, BrickWood Mortgage, a separate company".
- The heading "So instead of walking away, our agent built a plan" (opens with "So"); "The play"; the eyebrow "A Real Grand Strand Deal".
- The blanket disclaimer "shared for illustration, not a promise of results or lending, tax, or legal advice". STORY-5: one short line on the one outcome ("one buyer's result, not a promise").

## 2. The reader and the decision

A buyer who found a condo they like, often oceanfront, and was just told "the building is in litigation", by a lender who said no, an agent, or the association's questionnaire. Many are from out of state and know none of the buildings. Some are investors who heard these units sell for less.

The decision: **walk away, wait, or buy, and with what money.** They worry about losing earnest money, a big assessment, a building that is unsafe, and being stuck with a unit no one can finance.

## 3. The answer in two sentences

Yes, you can buy a condo in a building that is in a lawsuit: cash always works, but most conventional and FHA loans cannot close while the association is in a suit about the building, unless it is one of the minor kinds lenders allow. A building that has already finished the repairs it sued over can be a real discount; one with an unrepaired structural problem usually means a large bill is coming, so we read the case before you offer.

## 4. Title, H1, description

- **Title (55 characters):** "Condo in Litigation in Myrtle Beach? Who Can Still Lend". Searched words first ("condo in litigation", "Myrtle Beach"), then the answer people want. Alternative keeping the owner's hook: "Condo in Litigation in Myrtle Beach: When It's a Deal" (52).
- **H1:** "Can you buy a condo in litigation in Myrtle Beach?" Second line, the owner's idea: "Yes, and sometimes it is the best deal on the beach."
- **Hero sub (write last):** about the loan rule and the repairs: "A lawsuit stops most loans, not the sale. A building that has finished its repairs can sell for less than it is worth."
- **Description:** "Can you buy or finance a Myrtle Beach condo in litigation? What Fannie Mae and FHA allow, which suits are minor, real Grand Strand cases, and when it is a deal."
- **Keywords:** condo in litigation, condo litigation Myrtle Beach, Fannie Mae condo litigation, FHA condo litigation, HOA in litigation, buying a condo in litigation. Not "non-warrantable", "special assessment" or "condotel".

## 5. Kind of page and shape

A **decision guide** ("Usually yes, unless"), with one rule table and one chart. Short-to-medium: about 1,400 to 1,700 words. It answers one question and the four that follow it. No list of places: the named buildings are evidence, shown once in the chart and one paragraph.

## 6. Sections, in order (question headings people search)

**Opening (first phone screen).** H1, byline (Devin Day, reviewed by Tim Nash), then the two-sentence answer (section 3). Slim offer bar: "Have us check a condo building for lawsuits" -> /contact/.

1. **Can you get a mortgage on a condo in litigation?**
   First sentence: "Usually not a conventional or FHA loan while the association is in a lawsuit about the building, but a minor suit does not stop the loan." (F1, F10.)
   - Why, in one plain sentence: a lender fears a large repair bill or a failing building behind its loan.
   - The minor suits that do not stop a Fannie Mae loan, as a short plain list (F3, with NW row 8's safe wording): the association suing an owner for unpaid dues; a suit the insurer defends and the insurance covers; a suit over damage to one unit; a suit over no money; one expected to cost under a tenth of the building's savings; and money sought for repairs already done. Arbitration and mediation count the same as a suit (F2).
   - A defect suit the association brings against the builder is not minor until the repairs are done (F4). This sentence sets up the story.
   - FHA's extra year: a suit that ended in the past 12 months still counts for FHA (F9). Freddie Mac's rule is close to Fannie Mae's (F7).
   - Link: "Fannie Mae's rules for a building" -> `/invest/non-warrantable-condos/` (the anchor the sibling asked for).
   - **Visual 1: "Which loans can close, by kind of lawsuit"** (section 7).
   - Mid offer: "Have us find out what the lawsuit is about" (one sentence: we get the complaint and the attorney's letter and tell you which loans can close).

2. **Which loans still close while a condo is in a lawsuit?**
   Cash, first (F14). Then loans a lender keeps or sells outside Fannie Mae and Freddie Mac; one published program reviews suits case by case and still refuses any suit about structure (F13), so for a structural suit, cash is often the only way in. One sentence: "Our affiliated lender, BrickWood Mortgage, a separate company, can tell you which loans fit the building." Link `/invest/condotel-financing/` for the loans themselves. No rate, no payment, no down payment percentage.

3. **How do you find out if a condo is in litigation?**
   We do the work; no to-do list. Bold steps, each saying what we do and what it means:
   - **We ask the association.** The questionnaire lenders send asks whether the association is in any active or pending lawsuit, and asks for the attorney's papers (F12).
   - **We read the attorney's letter and the complaint.** What the suit is about, its risk, when it may end, whether insurance pays, and what it does to the association's money: the same five things FHA asks (F11, F8).
   - **We search the county's court index under the association's name** (F18), and read the board minutes.
   - **Why the seller's form is not enough:** South Carolina's form asks about common-area problems and title, not about a lawsuit (F16).
   Offer: "Send us the building's name. We will pull its court record before you offer." (Owner question 2 confirms the team does this.)

4. **When is a condo in litigation a good deal?**
   Good news first. The two kinds of suit (F22, F4):
   - **The association suing the builder, with the repairs done.** The owners are trying to get back money already spent. The building is in better shape than before, and sellers who cannot get buyers financed often take less. This is where the deals are.
   - **A suit about an unrepaired structural problem, or owners suing their own board.** A large repair bill is likely coming to every owner. Link `/hoa/special-assessments/` once ("how a special assessment is set").
   - **The owner's story** here, told as recorded (F36), 4 to 6 short sentences, ending with what it means for the reader and "one buyer's result, not a promise". Only if owner question 1 is answered; otherwise this section runs without it and the labelled-example route is not used (the facts would carry no number worth an example).
   - **Our count (F21):** of 2,860 condos for sale on the day we counted, about 73 were in buildings built in 2018 or later. The state's 8-year limit on defect suits (F20) means most buildings here are past the age when owners sue the builder. In an older building the suit to read for is the repair fight. (Say the day the count ran, from the file.)
   - Homes strip (section 8), then offer: "Have us read a building's file before you offer".

5. **How long does condo litigation last on the Grand Strand?**
   First sentence: "In the cases in the court record here, 7 to 14 years from the first filing to the last ruling." (F35.)
   - **Visual 2: the case timeline** (section 7), each building with "units sold in the past year" beside it (F33).
   - One paragraph per kind, no repeats: Riverwalk at Arrowhead Country Club and Magnolia North, two Myrtle Beach complexes built 1997 to 2002, sued in 2003, won at trial in 2009 and on appeal in 2011 and 2012 (F23 to F26); the builder had gone out of business in 2003, and whether its insurer had to pay was settled in 2017 (F27). Wedgewood, in Horry County, sued in 2018 about 17 years after it was built and won in 2025 (F29). Crossmann's Myrtle Beach-area condos settled for about $16.8 million (F30). At most one dollar figure in the section's prose (P2): the chart carries the years.
   - Renaissance Tower: the 21-story oceanfront building evacuated on October 7, 2022; owners sued in federal court that month; the owners' lawsuit says some units could not sell and buyers backed out of contracts (F31, F32). Then the wow line, true and sourced: in the past year, 51 of its units changed hands (F33). Nothing about how the case ended (F34 is not printable).
   - What it means for the reader: a suit near its end can be waited out, as in the owner's story; a suit just filed can run for years.

6. **Frequently asked questions** (open text, only new facts):
   - "Can you sell a condo that is in litigation?" Yes; buyers are cash or outside-Fannie loans; units in every building above kept selling (F33).
   - "Will my HOA fees go up if the association loses a lawsuit?" One sentence and the link to `/hoa/special-assessments/`.
   - "Does a lawsuit over a fall at the pool stop a loan?" Only if insurance does not cover it (F5).
   - "Does a lawsuit the association files against an owner for unpaid dues stop a loan?" No (F3, F9); link `/hoa/liens-and-foreclosure/`.
   - "Can a seller hide a lawsuit?" The state form does not ask, and a seller who knows of a problem and hides it may owe damages (F16, F17); link `/buyers/undisclosed-flooding/` for the disclosure law. (Cut if it repeats section 3.)

**End offer band:** "Found a condo in a building with a lawsuit? We read the case and the association's papers and tell you everything we find before you risk a dollar." Button -> /contact/.

**Sources box:** Fannie Mae B4-2.1-03; Freddie Mac 5701.3; HUD 4000.1 Update 18; Form 1076; SC Code 15-3-640 and 15-3-670; the SC disclosure form; Op. 4888, 4943, 6124, 26909, 27698; D.S.C. 4:22-cv-03556 complaint; Horry County parcel layer; our listing count (the day it ran). The method notes (last-sale dates, name ties) go here, not in the copy.

## 7. Visuals (each readable at a glance)

**Visual 1: "Which loans can close, by kind of lawsuit."** A small glass table, 5 rows, 3 columns, check or cross with a word, no footnote symbols. Columns: "Conventional loan", "FHA loan", "Cash". Rows:
| Kind of lawsuit | Conventional | FHA | Cash |
|---|---|---|---|
| The association sues an owner for unpaid dues | Yes | Yes | Yes |
| The insurer defends it and insurance covers it | Yes | Yes | Yes |
| The association sues the builder; repairs already done | Often | Usually no | Yes |
| A suit about the building's safety or structure | No | No | Yes |
| A suit that ended in the past 12 months | Yes | Counts as a suit | Yes |
Each cell from F3, F4, F9, F10, F14. The verifier checks every cell; "Often" is the honest word where Fannie Mae asks the lender to judge (F3's "upon investigation and analysis", F4's "no anticipated material adverse impact"). FHA's "Usually no" rests on F10: FHA has no repairs-done exception, and a defect suit relates to the building's structure; the verifier decides whether HUD's text supports "No" or needs the softer word. On a phone: one card per row. A one-line note under it: "A loan from outside Fannie Mae and Freddie Mac may also work, except for a structural suit" (F13).

**Visual 2: "Grand Strand condo lawsuits ran 7 to 14 years."** One horizontal timeline per case, years 2000 to 2026, a bar from the suit's filing to its last ruling, a dot for the trial, labels in words ("sued 2003", "won at trial 2009", "insurer's case decided 2017"). Renaissance Tower shows "sued 2022" and no end. On the right of each row: "Units sold in the past year: 51" (from `findings.json`). Built from `chart-timeline.json` and `findings.json`; no number typed in the spec. Plain title, one message, no legend.

**No third chart.** The building-age count (F21) is one sentence in section 4; a bar chart of it would be a second message on a calm page. If the reviewer wants it, `chart-ages.json` is ready.

No photos of the named buildings: the page does not show a building next to its lawsuit. A photo request is not needed.

## 8. Homes strips

- The site's edge already puts a feed under the opening.
- One `glass.js homes()` strip in section 4, after the two kinds of suit: condos for sale in Myrtle Beach. Title, bold and true: "Myrtle Beach condos for sale now. We check each building's court record before you offer." **New place for the lead** (BUILD.md): slug `myrtle-beach-condos`, q `{"type": "condo", "near": "33.70882,-78.88539", "miles": 3}` (the town-myrtle-beach point), `index: false`. No strip for any named litigation building.

## 9. Offers (every button -> /contact/ or #lead-form; the site opens the short pop-up)

| Where | Headline / button |
|---|---|
| Under the short answer (slim bar) | "Have us check a condo building for lawsuits" |
| After section 1 | "Have us find out what the lawsuit is about" |
| After section 3 | "Send us the building's name. We will pull its court record." / "Check a building's court record" |
| After the homes strip, section 4 | "Have us read a building's file before you offer" |
| End band | "Found a condo in a building with a lawsuit?" / "Have us read the case" |

Five offers, no two with the same words. No offer names BrickWood or a loan.

## 10. Siblings and links

- Gives up "non-warrantable" to `/invest/non-warrantable-condos/` (drops the live FAQ) and loans to `/invest/condotel-financing/`; assessments to `/hoa/special-assessments/`; dues suits to `/hoa/liens-and-foreclosure/`; disclosure law to `/buyers/undisclosed-flooding/`; reserves to `/hoa/reserves/` (one link, on Renaissance's reserves).
- Up-link: `/buyers/`. Across: `/hoa/documents/` (the questionnaire, on "the questionnaire lenders send").
- Referring pages, on words already there (owner, 2026-11-09): condotel-financing ("any lawsuit"), non-warrantable-condos ("guide to buying a condo in litigation"), condo-buildings ("buying a condo in litigation"), buyers/common-mistakes ("condos in a lawsuit") already link here. Add: `/hoa/documents/` (its lawsuit red flag, HD row 20), `/hoa/special-assessments/` (Shipyard Village's owners went to court), `/invest/condos/`, `/sell/sell-my-condo/`. Run `node tools/inbound.js <site> --only /buyers/condo-in-litigation/`; aim for 6 or more.

## 11. For the lead (owner questions and BUILD notes)

1. **Owner question (story).** The live page's story has no stories.json record. Proposed answer: record it as told on the July page (commit b6ce1657, "built from the owner's real deal"), with "more than a thousand dollars in earnest money" and "one of the agent's best sales" kept only if he confirms. The page uses it as recorded, adding nothing.
2. **Owner question (service).** Does the team search the Horry County court index by the association's name for every condo purchase? The condotel page already says our building review covers "any lawsuit" (F37). Proposed answer: yes; the offer in section 3 depends on it.
3. **A count from the court index, by hand.** The Public Index cannot be scripted. If the owner wants the triage's "count of local condo buildings with a suit", a person can search the index by name for the 47 directory buildings (`/invest/condo-buildings/`), about an hour. The page runs without it.
4. **The Renaissance case's end** (F34): the dismissal order is on PACER, 4:22-cv-03556, if the owner wants the outcome on the page.
5. **New homes place:** `myrtle-beach-condos` (section 8). Do not edit idx-lib/, partials/ or idx-places.json from this page's work.
6. **Verifier priorities:** F16 (absence claim), F12 (2016 form version), F14 (cash wording), F29/F33 (the Wedgewood parcel tie), Visual 1's cells.
