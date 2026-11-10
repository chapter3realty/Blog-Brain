# Plan: /submarkets/ (the town guides hub)

Lane U, rebuild. Facts: `facts.md` (rows H1 to H31 for the page; H32 to H39 are for the lead). Demand: `must-answer.md`. Data: `data/2026-11-b/submarkets/towns.json`, made by `build_towns.py`.

## 1. The live page, and what is worth keeping

Read 2026-11-10 (`chapter3realty/submarkets/index.html`, hand-made, no spec; 416 words in main).

Keep:
- The URL and canonical, and the nine guides it links (14 referring pages already point here).
- One entry per town, each linked to its guide. The live one-line cards are the right size; their words are not.
- Carolina Forest shown honestly as a place that is not a nightly-rental market.
- The links out to the market reports and the guides list.

Cut:
- The H1 "Myrtle Beach neighborhoods." and the title "Grand Strand Neighborhoods" (they compete with /buyers/best-neighborhoods/).
- The lede's promise of property tax, flood risk, schools and "who buys in each" (none delivered; the last is a fair-housing risk).
- The AirROI revenue table (owned by /invest/airbnb-income/; vendor figures).
- The six "Start from what you are trying to do" cards (they answer which-town's question, and carry unverified claims: facts.md H37).
- The FAQ ("How many submarkets does Chapter3 cover?" is nobody's search) and the word "submarket".
- The crumb "Invest / Neighborhoods": the hub serves buyers too. Make it "Home / Town guides".

## 2. The reader and their decision

A buyer, often from out of state, sometimes an investor, who knows the name Myrtle Beach and not the places around it. The decision: which one or two town guides to read, and whether a home there can earn nightly rent. They leave the hub for a guide, for which-town if they are still choosing where to live, or for a request.

## 3. The answer in two sentences

Chapter3 has a guide to each of nine places on the Grand Strand, from Little River at the North Carolina line to Pawleys Island at the south end. A house costs about $265,000 in Conway and about $1 million near the ocean in Surfside Beach, and Myrtle Beach and Surfside Beach allow nightly rentals only in set zones.

(Rows H11, H4, H24, H26. The writer may reword; the figures and groups stay.)

## 4. Search title and H1

- Title: "Grand Strand Town Guides: Home Prices, Rental Rules | Chapter3" (51 characters before the brand). It keeps the searched words "Grand Strand" and "town", and promises only what the table gives. It drops "Taxes" from the cannibalization file's proposed title, because the page has no tax column.
- H1: "Grand Strand town guides: nine places, and the best thing about each."
- Description: the two-sentence answer, shortened.
- Byline: Devin Day (spec author "devin"), reviewed by Tim Nash.

## 5. The sections, in order

1. **Hero:** H1, byline, the two-sentence answer.
2. **Slim offer bar:** "Tell us how you will use the home. We send the homes that fit." Button "Send me homes" to /contact/.
3. **The edge feed "Top homes, town by town"** stays where the site puts it, under the opening. Nothing added to the page for it.
4. **One sentence, then the link:** "Still choosing where to live? Compare 13 towns side by side on which town fits you." (/buyers/relocating/which-town/). This is the only place the hub talks about choosing.
5. **H2 "Myrtle Beach area towns at a glance"** (the searched words "myrtle beach area towns"). The one table (section 6). Under it, two short notes:
   - "Each price is the middle sale in the past year from county deed records, for the kind of home that town's guide leads with. Our 13-town comparison draws its own town lines, so its figures differ a little." (H36)
   - "An HOA can bar nightly rentals even where the town allows them. Our short-term rental rules page has every town's rule in full." (H25, H27; link /invest/str-rules/)
6. **Mid offer:** "Have us check one address. We confirm its town, its zoning and the HOA's rental rules before you make an offer." Button to #lead-form. (The same service /invest/str-rules/ offers.)
7. **H2 "Buying a home to rent out?"** Three sentences, each a link: what a nightly rental earns in each town (/invest/airbnb-income/), where we would buy a rental (/invest/where-to-buy/), and the best neighborhoods once you pick a town (/buyers/best-neighborhoods/). No figures.
8. **End offer band:** "Tell us your budget and how you will use it. We send the homes that fit, in the towns that fit." Button to /contact/.
9. **Sources box:** county deed records (Horry and Georgetown), each town and county rule page in facts.md, and "each figure is the one its town guide prints".

About 450 to 600 words in main. A hub that routes readers is better short. No FAQ: no question here is the hub's own to answer.

## 6. The visual: one table, read at a glance

Built from `towns.json`, never typed. Beach towns north to south, then a small "Inland" label and the two inland places.

| Column | What it holds | Example (Garden City) |
|---|---|---|
| Town | The name, linked to the guide, and where it is in a few words | **Garden City**, on the beach south of Surfside, run by two counties |
| Why people love it | The wow line (H12 to H21) | At the far end of the Garden City Pier, people learn line dances out over the ocean. |
| A home usually sells for | The guide's figure, with its kind of home named | About $320,000 for a condo on the ocean side |
| Rent it by the night? | The verified words (H24 to H30) | No rental permit on the Horry side; no county business license on the Georgetown end |

Rows (from `towns.json`): Little River (H1, H12, H27), North Myrtle Beach (H2, H13, H25), Myrtle Beach (H3, H14, H24), Surfside Beach (H4, H16, H26), Garden City (H6, H17, H27, H28), Murrells Inlet (H7, H18, H27, H28), Pawleys Island (H9 then H8 as a second line, H19, H29); inland: Carolina Forest (H10, decision 1, H27), Conway (H11, H21, H30).

- On a phone each row becomes one glass card in the same order: the town name as its link, the wow line first in larger type, then price and rental words as two plain lines, then a small text link "Send me [Town] homes" to /contact/ (the place named, so the pop-up sends it with the lead). On a wide screen, a table with the same request link under each town name.
- Pawleys Island's price cell has two lines (island, mainland), because its wow and its rental rule are about the island. Every other cell has one figure.
- No bar chart of prices: the nine figures are for different kinds of home, so bars would compare unlike things, and which-town already charts prices.
- No map. The table's order and the "where" words place each town. `map-points.json` is ready if a cold reader gets lost.
- Each wow line under 28 words, no em dashes, no "stunning" or "nestled". Lead each card with the wow, not the price (owner, 2026-11-10).

## 7. Homes strips

None added. The edge feed under the opening stays, and every guide carries its own strips. Each card's request link is the per-town offer. BUILD.md lists one feed change for the lead.

## 8. The offers

1. Slim bar under the answer: "Send me homes" (/contact/).
2. One request link per town card: "Send me [Town] homes" (/contact/).
3. Mid offer after the table: "Have us check one address" (#lead-form).
4. End band: "Tell us your budget and how you will use it" (/contact/).

Four distinct wordings. Every button only links; the site opens the short pop-up.

## 9. Decisions for the lead

1. **Carolina Forest's wow line.** Its guide has no verified line a reader would picture (facts.md "Not verified" 1). Proposed: add WT 25 to the Carolina Forest guide's "what it is" section in one sentence ("The county's Bike and Run Park, on the Intracoastal Waterway, has about 7 miles of mountain-bike and hiking trails on 70 acres."), then the hub uses it (H22). Fallback, if the guide is not touched: "No city tax: most homes are outside any city or town." (H23), which is true but is not a wow.
2. **Three /invest/str-rules/ sentences go past what the town guides' verifiers allowed** (H33 to H35: NMB "citywide", Pawleys "no business license at all", Conway "never adopted"). The hub uses the verified words. str-rules needs a fact fix in a later round, or the site disagrees with itself one click apart.
3. **Two prices per town across the site** (H36). The hub names the group in each cell and says once why which-town differs. A later round could give which-town and the guides one shared group per town.
4. **The hub is hand-made HTML today.** The rebuild should be a new spec (`specs/submarkets.js`, mkpage) so it is never hand-edited again.
