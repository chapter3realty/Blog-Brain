# Plan: /hoa/hoa-vs-poa/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (26 rows, all awaiting the verifier). Demand: `must-answer.md`. Data and scripts: website `data/2026-10-d/hoa-hoa-vs-poa/` (its `README.md` lists every file). Spec to write: `specs/hoa-vs-poa.js` (none exists; the live page is hand-made, so the writer builds it with `tools/mkpage.js` and the batch kit, the way `specs/fix-and-flip.js` and `specs/no-hoa-homes.js` are built).

## The reader and their job

A buyer looking at a Grand Strand listing that says "POA", "HOA" or "regime fee", often from out of state, often weighing a condo against a house. Second reader: an owner in a master-planned community who just got two bills. Third: an investor comparing a condo's fee with a house's.

Their job, in one verb: **choose** (which kind of home and association to buy into), then **know** what they are signing up for.

What they want first: is a POA different from an HOA here, and does it matter. What they already know: almost nothing. "Regime", "master deed", "planned unit development", "common elements" and "council of co-owners" are new words. "POA" also means power of attorney to them. What worries them: a fee that is not what it seems, a roof bill they did not expect, a second association after closing. What they ask next: what does the fee pay for, how much is it, can there be two, how do I know.

## The deciding fact (checked first)

**South Carolina's HOA Act defines an association by what it does, not by its name: any group that runs a planned community or a condo regime under a recorded declaration that makes owners pay** (row 1). The state's own seller form puts HOA, POA, condo owners association and horizontal property regime under one name (row 5). So the page can answer the title in its first sentence: in South Carolina an HOA and a POA are the same thing in law. The difference that matters is a house in a neighborhood against a unit in a condo regime (rows 6 to 11), and whether there is a second layer (rows 20 to 22).

## What the live page has worth keeping

- **The right idea, stated too thinly.** "The label matters less than the documents" and "in a condo regime you own the unit plus an undivided share of the common elements" are correct. Keep both, now with the statute under them (rows 1, 2, 7).
- **The three surprises** (comparing a regime fee with an HOA fee, insuring the wrong thing, a second association after closing). Keep them as the structure of the "what goes wrong" section, each now with a number or a record behind it (rows 15, 17, 9, 13, 20 to 24).
- **"Which is the first thing we check."** Keep the service claim; the page now says what we check, in steps.
- **Links**: `/hoa/` (hub), `/buyers/coastal-insurance/`, `/hoa/reserves/`, `/hoa/rental-restrictions/`, `/contact/`. Add: `/hoa/master-insurance-ho6/` (insurance split), `/hoa/south-carolina-hoa-laws/` (the 2018 Act), `/hoa/documents/` (what we read), `/hoa/special-assessments/` (sibling in this batch, the lien count), `/buyers/no-hoa-homes/` (the 30 percent with none), `/invest/non-warrantable-condos/` (lender review), `/hoa/tax-deductible/`.
- **Title idea**: "HOA vs POA vs Condo Regime in South Carolina" is what people search. Keep the words, see the hero below. `data/headlines.json` has no entry for this URL, so the spec sets the title and H1.
- **Breadcrumb** Home / HOA Guide / HOA vs POA.
- No calculator, no real story, no verified number, no picture on the old page. Nothing else to port.

## What must not survive (judge, SWEEP, claims)

- "The terms are used loosely" as the whole answer, and "Read the declaration, not the name" (tells the reader to do our work). The answer now names the law and what we check.
- "Check for both" in the FAQ (homework). We check.
- "In most single-family HOAs your roof is your problem" without a source. Replace with row 17's count and row 26.
- "This follows directly from the two points above, and it is why condo dues are usually higher" without numbers. Replace with rows 15 and 17.
- "Verified July 2026" in the sources line and "information here was verified in July 2026" in the legal notice (typed dates). Shorten the notice to the site's one-line form.
- The listing-search sentence "including off-market homes before they hit the public sites" (SWEEP). mkpage takes the new sentence from its donor; check the built page.
- The "Houses where the HOA mows the lawn" strip above the answer on a phone (judge). The homes feed goes after the final offer.
- Two calls to action plus a legal notice that weigh as much as the content (judge). One slim bar under the answer, one offer box at the end, same label.
- H2s that are labels ("The direct answer", "What changes", "Why it matters"). Each H2 is the question a reader types.
- The weak meta description (critic seo.description). New one below.

## The shape

Kind: **comparison** (CRAFT 3; "Page shapes" section 4), with a short **rule explainer** core (section 5) because the first question is "is it the same in law". Main relations: *options* (house in an HOA or POA, condo regime, townhouse, master association) and *condition* (which law, who pays for what).

Dominant shape: the verdict by situation in the first screen, then one comparison table (4 options as columns on desktop, cards on a phone), then one section for each attribute that decides the choice, in order of how much it matters (what you own and who fixes it, then the fee and what it buys, then two layers, then the loan and insurance), then the steps we take, then the offer.

Wrong-shape checks (from "Page shapes" section 4): the page has "vs" in the title and a table, so the table must be on the first two phone screens; no more than 4 options; the verdict comes first; no option gets a long section of its own that the table does not summarize; no winner.

## Sections, in order, with what each proves

0. **Hero.** H1, byline, short answer (about 80 words), key-facts row. Proves the reader gets the answer on the first phone screen.
   - Title (60 max): "HOA vs POA vs Condo Regime in South Carolina | Chapter3" (55). It keeps the search words and spells nothing out; the H1 does that.
   - Meta description (about 150): "In South Carolina an HOA and a POA are the same thing in law. What a condo regime is, what each fee pays for, and how a home can have two associations." Check it against the critic.
   - H1, two lines: "HOA or POA? In South Carolina," / "the law treats them the same." Alternative: "HOA, POA or condo regime:" / "what the fee on a Grand Strand home really buys." Both are backed by rows 1 and 5.
   - Short answer draft, facts from rows 1, 6, 15, 20: A property owners association (POA) and a homeowners association (HOA) are the same thing under South Carolina law: a group that runs shared property under a recorded declaration that makes every owner pay. The difference that matters is the kind of home. A condo is a "horizontal property regime", where the association owns and insures the building with you, and the typical fee here is about $640 a month. A house in an HOA keeps its own roof, and the typical fee is about $95. Some communities have two associations.
   - Key-facts row (glass icon chips, words beside each): "HOA and POA: one law" (row 1); "Condo fee about $640 a month" (row 15); "House fee about $95 a month" (row 15); "Some homes answer to two associations" (rows 20 to 22).
   - Slim offer bar under the answer: "Send us the address. We find every association it belongs to." Button "Have us check a property".
1. **"What is the difference between an HOA and a POA?"** Rows 1, 2, 3, 18, 19. The law reads the document, not the name (rows 1, 2). Then our count, the page's first local finding (visual 2): of the 548 associations that recorded a lien in Horry County in 2025, about half call themselves an HOA, one in five a POA, fewer than one in ten use a condo word, and the rest something else; some condo associations call themselves a POA. One sentence on voluntary dues (row 3). One sentence on "POA" as power of attorney, so the searcher knows they are on the right page.
2. **"HOA, POA, condo regime or master association: what changes?"** The comparison table (visual 3). Then the verdict by situation in three short lines, each from rows: "Choose a house in an HOA if you want your own roof and the lowest fee"; "Choose a condo if you want the building, its insurance and most outside work handled for one fee"; "In a master-planned community, expect two layers." No winner.
3. **"What do you own, and who fixes the roof?"** Rows 7, 8, 10, 11, 12, 26. The condo: your unit outright plus a percentage of everything shared; the roof, walls, halls, elevators and the land are shared unless the master deed says otherwise; the association may enter to fix them; each condo has its own tax bill. The house: no statute splits it; the covenants do, and in most listings the fee does not cover the house. Our drawing (visual 4) carries it.
4. **"What is a regime fee, and why is a condo fee so much higher?"** Rows 6, 15, 16, 17. The word, where it comes from (the master deed's name ends in "Horizontal Property Regime"), then the numbers: typical fee by kind of home and the middle half (visual 5), then what the fee pays for (visual 6): insurance in 78 percent of condo fees against 4 percent of house fees. The yearly line (CRAFT 1): "about $7,700 a year for the typical condo fee and about $1,100 for the typical house fee, besides the mortgage and tax." One line that 3 houses in 10 for sale have no association at all, linked to `/buyers/no-hoa-homes/`.
5. **"Can a home have two associations? What is a master association?"** Rows 20, 21, 22, 19. The three real communities from the county record (visual 7): Grande Dunes (master association; neighborhood POAs such as Bal Harbor and Cipriana Park with architectural review the master assigned to them; 75 supplements to the master declaration), Barefoot Resort (a residential master, a separate nonresidential association, regimes for its condo buildings), Prince Creek (a master association, and a road and park association in Prince Creek West with its own collection policy). Name the layers, never the fees (none verified). One line: only 4 associations on the lien list have "master" in their name, so the name will not tell you (row 19).
6. **"What goes wrong, and how we catch it."** The three surprises from the old page, now proved: comparing fees that buy different things (rows 15, 17); insuring the wrong thing (rows 9, 13: the association insures a condo building, the flood program pays at most $250,000 a unit from both policies together; link `/hoa/master-insurance-ho6/`); finding a second association late (rows 5, 23, 24: the seller form has room for one association, the county's documents are not online, and 65 percent of Horry owners who complained to the state got their papers after they bought). Each surprise ends with what we do. Story row 25 in one sentence (we read the documents for rules that would block a plan, such as renting).
7. **"How we find every association a property belongs to."** Numbered steps (visual 8), each with what it tells us: the deed (does it say "in Horizontal Property Regime", row 6); the recorded declaration or master deed and bylaws (rows 2, 4, 12); a search of the county index for a master declaration and supplements that cover the same land (rows 20 to 22); the rules on file, which the law makes the association record each year (row 4); the seller's disclosure addendum and the association's charges for each layer (row 5); for a condo, what a lender will ask about the building (row 14). The page never tells the reader to do these. "We" throughout (CRAFT 5).
8. **"Does it change my loan or my insurance?"** Rows 14, 13, 9. Two short paragraphs: a lender reviews the whole condo building before a loan on one unit and usually does not for a house in an HOA; the association insures a condo building, you insure the inside. Links `/invest/non-warrantable-condos/`, `/hoa/master-insurance-ho6/`, `/buyers/coastal-insurance/`. No rate, no down payment.
9. **"HOA vs POA pros and cons."** Short list, kind, each from a row, each hard point with what to do: more handled for you in a condo fee (row 17) against a higher fee (row 15) and a building review for the loan (row 14); a house fee is small (row 15) but the roof and insurance are yours (rows 17, 26); a master-planned community has more shared amenities and two sets of rules (rows 20 to 22).
10. **Final offer box**, same component as the top bar: headline "Know every association before you offer", one sentence ("Send us the address. We find each association it belongs to, read its documents and tell you what each one charges and what it covers."), button "Have us check a property".
11. **Homes feed** (IDX). It sits after the offer (judge: not above the answer). The current mapping (`LAWN_HOUSE`, "Houses where the HOA mows the lawn") fits section 4's lawn-care line. See `NEEDS.md` for a better pair.
12. **FAQ**, open text, FAQPage schema from the same array, about 9 questions, each answer led by the fact: Is an HOA the same as a POA in South Carolina? (rows 1, 5) What is a regime fee? (row 6) What is a horizontal property regime? (row 6) What do I own in a condo? (row 7) Who insures a condo building? (rows 9, 13) How much are HOA fees on the Grand Strand? (row 15) Can a home have two HOAs? (rows 20 to 22) Is a POA voluntary? (row 3) Are POA dues tax deductible? (one line, link `/hoa/tax-deductible/`).
13. **Sources line**: S.C. Code Title 27 Chapters 30 (HOA Act) and 31 (Horizontal Property Act), and 27-50-40 with the Real Estate Commission's disclosure addendum; Fannie Mae Selling Guide B4-2.1-01; 44 CFR Part 61 App. A(3); SC Department of Consumer Affairs HOA reports; Horry County Register of Deeds index; Chapter3's count of active MLS listings (aggregate). Method and dates of the counts go here, not in the copy.
14. **Legal notice**, the site's one-line form (not legal advice; a South Carolina attorney for your situation). No typed date.

"On this page": The difference, Side by side, What you own, The fee, Two associations, What goes wrong, How we check, Loans and insurance, Pros and cons, Questions.

Schema: Article (author Person per site practice), BreadcrumbList, FAQPage. Optionally `about` with two `Legislation` items (S.C. Code Title 27 Chapters 30 and 31), if the kit supports it; skip if not.

## Visuals

1. **Key-facts row** (glass icon chips). Rows 1, 15, 20 to 22.
2. **"What local associations call themselves" bars** (`G.bars`, horizontal, built from `association-names.json` "2025_any_count"): Homeowners or HOA 286 (52%), Property owners or POA 103 (19%), Another name (community, owners, master) 104 (19%), A condo word (regime, HPR, condominium, co-owners) 48 (9%). Feature text beside one bar only: "Some condo associations are in this bar" beside POA (row 19). Caption: "548 associations that recorded a lien in Horry County in 2025, by the word in their name". Built from the JSON in the spec, never typed. The 7 "other" go in the caption or are left out with a note.
3. **The comparison table** (`compareCards` from `tools/compare.js`, cards on a phone; 4 options). Options: House in an HOA or POA; Townhouse; Condo in a regime; Master association (as a layer). Rows (short cell text, no sentences), each from a row:
   - The law: HOA Act / HOA Act, and the Horizontal Property Act if it is a regime / Horizontal Property Act and HOA Act / HOA Act (rows 1, 6).
   - What you own: the lot and the house / usually the lot and the unit, or a regime unit (writer: say "depends on the deed", row 6) / the unit and a share of everything shared (row 7) / nothing more; it runs the shared land (row 20).
   - Roof and outside walls: you / depends on the documents / the association (row 8) / not the house.
   - Building insurance in the fee: 4 of 100 listings / 34 of 100 / 78 of 100 (row 17) / blank.
   - Typical fee a month: about $95 / about $275 / about $640 (row 15) / "on top of the neighborhood fee" (no number).
   - A lender reviews the project: usually not / depends / yes, over ten units (row 14) / blank.
   Check every cell reads true alone. The townhouse column is the honest "in between"; if the writer finds it confusing at phone width, cut it to 3 options and keep its numbers in section 4's chart.
4. **"What you own" drawing.** Our own inline SVG (`tools/illustrations.js` style, flat, glass frame): left, a house on its lot with "Yours: the lot, the house, the roof" and a shared pool and entrance marked "The association's"; right, a condo building cut away with one unit outlined "Yours: the unit", and roof, walls, halls, elevator and land marked "Shared by every owner, by master-deed percentage". Labels at body size, placed by hand, nothing guessed. Alt text says the two facts. This is the judge's idea and answers "what do I own" at a glance.
5. **Fee chart** (`G.bars`, built from `fees-by-type.json`): typical monthly fee for condo $640, townhouse $275, house $95, with the middle-half range as a thin band or in the label ("most pay $450 to $950"). One accent color. Caption gives the counts of homes. Same values as the tiles, the table and the FAQ (CRAFT 5, one value).
6. **"What the fee pays for" table** (`h.table`, built from `has-with-fee.json`): rows Insurance, Water and sewer, Lawn care, Trash, Internet, Shared amenities; columns Condos, Townhouses, Houses; cells "78 of 100". Caption: "Share of homes for sale with an association fee whose listing says the fee pays for each item." Chart and table must not repeat the same numbers in sentences.
7. **"Two layers" diagram.** Our own inline SVG: one large rounded box "Master association: the entrance, roads, shared amenities, the master covenants", two smaller boxes inside it, "Neighborhood association: its own rules and design review" and "Condo regime: the building". Then three short entries below it for Grande Dunes, Barefoot Resort and Prince Creek, each with its layers by name (rows 20 to 22) and a link to see homes there ("See homes in Grande Dunes", CRAFT 3 offer per place). If the kit has a map, one small map with the three communities, `tools/area-map.js`, Google Maps link. No fees.
8. **Numbered steps** (`h.ol` or the kit's steps block) "How we find every association a property belongs to", 6 steps, each with one line on what it tells us.
9. **Photos** (one at a time, each under its sentence, never above the answer). From the photo partner first (shot list below). Free-licence candidates, licence read through the Commons API on 2026-11-01. None was viewed full size yet: the downloads were refused (HTTP 429). The writer views each one full size before use and drops any that does not show the caption's fact.
   - Section 3 or 4 (a condo building): "Hotels along the Grand Strand Beachfront 2.jpg", DiscoA340, CC BY-SA 4.0, 3264 x 2448, https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront_2.jpg. The sibling page judged it the best free oceanfront tower photo. The caption cannot say it is a condo regime (the file says "hotels"); say "Oceanfront towers in Myrtle Beach. Many are condo regimes, where the owners share the building." only if the verifier accepts it; otherwise use the partner's photo.
   - Section 5 (a master-planned community): "The Market Common, Myrtle Beach (13 May 2023) 29.jpg", "... 33.jpg", "... 35.jpg", "(December 2023) 08.jpg", all DiscoA340, CC BY-SA 4.0, 6000 x 4000, https://commons.wikimedia.org/wiki/File:The_Market_Common,_Myrtle_Beach_(13_May_2023)_29.jpg (and the others by name). Descriptions say only "The Market Common in Myrtle Beach"; they may show shops, not homes. Use only one that shows homes on a street, and only with a sentence about Market Common, which this ledger does not cover (the index shows a "Market Common Residential Amenity Association"; no row). Likely not used.
   - Section 3 (houses in an HOA): "CarolinaForest001.jpg" to "CarolinaForest005.jpg", Isipeoria, public domain, 500 x 375. Too small for a hero; possibly usable small. Low priority.
   - Licence records go in the batch's `photos.json` for `tools/photos.js`; files only under `chapter3realty/images/2026-10-d/hoa-hoa-vs-poa/`.

## Sibling owners (one fact, one owner)

- `/hoa/special-assessments/` (this batch) **owns** the Horry lien count by year (548 associations in 2025) and the condo statute on assessments. This page uses the same 548 (same script population) only as the denominator of its own finding, the name labels, and links there.
- `/hoa/master-insurance-ho6/` owns the policy split and deductibles. This page gives rows 9 and 13 in two sentences and links.
- `/hoa/south-carolina-hoa-laws/` owns the 2018 Act's other sections (budget notice, magistrates court, complaints). This page uses only the definitions (rows 1, 2) and the recording rule (row 4).
- `/hoa/dues-increases/` owns the 48-hour budget notice; not mentioned here.
- `/hoa/tax-deductible/` owns tax; one FAQ line and a link.
- `/buyers/no-hoa-homes/` owns homes with no association; this page gives one line (row 16) and links.
- `/invest/non-warrantable-condos/` owns lender detail; row 14 only.
- `/hoa/` (hub) says "An HOA fee, called a regime fee on many South Carolina condos". Consistent with row 6; no change needed.

## Photo partner shot list (for `templates/photo-request-email.md`)

Most wanted first. All from public roads, sidewalks or public beach access; landscape; three of each; no faces, no plates, no house or unit numbers; a sign may be in the frame, small, never the subject. The page names each community only where a ledger row names it.

1. **The main entrance of Grande Dunes, Myrtle Beach** (the gate or entry road from US 17, from outside the gate). For the "two associations" section, beside the Grande Dunes entry. Map: https://www.google.com/maps/search/?api=1&query=Grande+Dunes+Blvd+Myrtle+Beach+SC
2. **A street of houses inside a neighborhood with an HOA, showing each house with its own roof and yard** (any public street in Carolina Forest or Conway, a few houses in one frame, no single house the subject). For "what you own" beside the house half of the drawing. Map: https://www.google.com/maps/search/?api=1&query=Carolina+Forest+Blvd+Myrtle+Beach+SC
3. **One older oceanfront condo building, full exterior, from the beach** (the whole building in frame, balconies visible; any building on Ocean Boulevard; the page will not name it). For "the roof is shared" and the regime fee section. Map: https://www.google.com/maps/search/?api=1&query=Ocean+Blvd+Myrtle+Beach+SC
4. **The entrance of Barefoot Resort, North Myrtle Beach** (from the public road, US 17 side). For the Barefoot Resort entry. Map: https://www.google.com/maps/search/?api=1&query=Barefoot+Resort+Bridge+Rd+North+Myrtle+Beach+SC
5. **A Prince Creek entrance in Murrells Inlet** (from SC 707 or the public road). For the Prince Creek entry. Map: https://www.google.com/maps/search/?api=1&query=Prince+Creek+Pkwy+Murrells+Inlet+SC
6. **A row of townhouses with shared roofs and one shared lawn**, anywhere on the Grand Strand. Optional, for the townhouse column.

## Things to tell the writer

- Every number from a verified row; charts and the table built from the JSON files in the spec, never typed. Three numbers a paragraph at most. One value per fact on every surface (tiles, table, chart, FAQ): $640, $275, $95; 548.
- Spell out once: "property owners association (POA)", "homeowners association (HOA)", "horizontal property regime, the legal name for a condo in South Carolina", "master deed", "master association", "Fannie Mae, whose loan rules many lenders follow" (no "most": no row supports a share), "planned unit development, a lender's name for a neighborhood with an HOA" (only if the word is used).
- Rows 18 and 19: counts only. Never name an association that recorded a lien. Say "associations that recorded a lien", never "associations".
- Rows 20 to 22: name the communities and their layers, never a fee, never a judgment. Grande Dunes, Barefoot Resort and Prince Creek are a fact about structure, not a recommendation; each still gets its own "See homes in ..." link (CRAFT 3).
- Row 24: "owners who complained to the state", never "most buyers".
- Row 23: "in Conway", no street address.
- Never tell the reader to read the declaration, check the deed, or ask the HOA. We do it (CRAFT 5). The old FAQ's "Check for both" and "Read the declaration, not the name" go.
- No dates in body copy. "The 75th supplement", not the year.
- Fair housing: describe what the association does and costs, never who lives there.
- Not legal advice: one line in the notice, and "a South Carolina attorney" once if the writer needs it for voluntary dues.
- Run `house-claims.js` (the old page's "most single-family HOAs" sentence is the B54 kind), `claims-scan.js`, `repeat-check.js --strict`, `structure-check.js --strict` after each draft.
