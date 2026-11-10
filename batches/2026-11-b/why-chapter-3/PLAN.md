# Plan: /why-chapter-3/ (batch 2026-11-b, Lane U, rebuild)

Inputs: `must-answer.md`, `facts.md` (rows cited as R1 to R32), the triage row, the cannibalization entry, the judge's notes (`audit/judged-2026-10-31.json`) and the manual findings. The live page is hand-made; build a spec, `specs/why-chapter-3.js`, author "devin" (byline Devin Day, reviewed by Tim Nash). Do not name Devin in the copy.

## What is worth keeping from the live page

- **The building study as the page's idea.** It is the one thing on the page a reader can use: HOA bylaws and financial records, the building's lawsuit history, and the rental analysis (R23, the owner's own list). Keep the list and the line "Even if you never intend to rent it out, that analysis tells you whether you are paying a fair price" in plainer words.
- **"Before a dollar is at risk"** as the timing: we check before the offer, not after.
- **The free tools,** now named and linked one by one (R27).
- **The offer "Send the address and we will run the study before you make an offer"** and the phone button.
- **The links** to /buyers/undisclosed-flooding/, /sell/inherited-house/, /invest/strategies/1031-exchange/, /invest/condotel-financing/, /buyers/va-loans/ where a section needs them, and the end link to /about/.
- Cut everything listed in facts.md "Not on the page". The SMS form leaves the first screen (judge: it asks for a phone number before the page says anything).

## The reader and their decision

A person who has found a home on the Grand Strand, or soon will, and is deciding whether to let Chapter3 represent them. Many are out of state. They are afraid of buying a problem the listing does not show: a flood, a lawsuit, a rental ban, a big HOA bill. They have read that every agent says the same things. They need proof that we look, and an easy way to check who we are.

Their decision: **send us the address of a home before they offer, or not.**

## The answer, in two sentences

Before you offer on a Grand Strand home, a Chapter3 agent checks its flood record, its HOA papers and the building's court cases, gets you an insurance quote, and runs the rental numbers. South Carolina law asks an agent to tell you what they know; the study is how we find out what the listing does not say.

(The permit check joins the first sentence only if the owner confirms it, question 2.)

## Title, H1, sub

- **Title (60 characters):** "How Chapter3 Checks a Home Before You Offer | Chapter3 Realty" (cannibalization fix). It gives up "Chapter3 Realty team" to /about/.
- **H1:** "What does Chapter3 check before you offer on a Grand Strand home?"
- **Hero sub (statement, under 30 words):** "We read the county's records, the HOA's papers and the building's court history. Then we tell you what we found, before your money is at risk."
- Description: "What a Chapter3 agent checks before you offer on a Myrtle Beach area home, the public record behind each check, and how to look up our license."

## Sections, in order

Each heading is a question people search, in their words. Each section answers it in its first two sentences.

1. **What does Chapter3 check before you make an offer?** (the short answer, then the table)
   - The two-sentence answer above.
   - **Visual 1: "What we check, and where the record is".** A plain table, one row per check, an icon in the first cell. Columns: what we check; the record (a link to the public source); what it can tell you; the page with the detail. Rows:
     - Flood record: FEMA's map, the county's Florence flood map, the county's floodplain staff, the seller's claim records (R12, R16, R17) -> /buyers/undisclosed-flooding/
     - HOA papers: the state's HOA addendum before the contract, the recorded documents at the county, the budget, the rental rules (R13, R14, R24) -> /hoa/documents/
     - Lawsuits: the county's court index, searched under the association's name (R15) -> /buyers/condo-in-litigation/
     - Unpaid HOA fees and liens, before closing (R26) -> /hoa/liens-and-foreclosure/
     - Insurance: a quote before you offer (R25) -> /buyers/coastal-insurance/
     - Rental numbers: long-term and nightly rent, occupancy by month, the return (R23) -> /invest/run-the-numbers/
     - Building permits nearby: **only if the owner confirms (question 2)** -> /invest/what-is-being-built/
   - One line: the analysis is useful even if you never rent the home, because it shows whether the price fits what the home earns (R23). No value for any address.
   - **Offer:** "Send us the address. We check it before you offer." -> /contact/ (the site opens the pop-up).

2. **Does a listing tell you if a home is in a flood zone?** (the page's own finding)
   - Answer first, from `listing-vs-map.json`: of the homes for sale in Horry County that stand in FEMA's high-risk flood zone, about 1 in 5 has a listing that marks a flood zone (R20). Say "does not mark a flood zone", never "says it is not in one".
   - One sentence: the seller's disclosure form asks about past flooding only in the seller's own years (R12). Link /buyers/undisclosed-flooding/ for the rest.
   - **Visual 2: one bar, at a glance.** Title: "Most homes for sale in FEMA's flood zone do not say so in the listing". One horizontal bar for all homes in the zone, split into "listing marks a flood zone" and "listing does not". Two labels, the two counts, the date the count ran, the source line (CCMLS attribution, Horry County GIS, FEMA effective 12/16/2021). Built from the data file. If the owner wants it simpler still: five house icons, one filled.
   - **Offer:** "Ask us to check a home's flood record" -> /contact/.

3. **What does a buyer's agent have to tell you in South Carolina?**
   - Answer first: every material adverse fact the agent actually knows (R8). The law says an agent does not have to discover hidden defects (R9), and the buyer still has their own duty to inspect (R8).
   - What we do with that: we go and look, using the records in the table, and we tell you when you need an inspector, an attorney or an insurer (R10). Name none (BIZ-7).
   - Short. No line about what other agents do. Link the SC Code section once in the sources box.

4. **Is Chapter3 Realty licensed, and who supervises your deal?** (answers "south carolina real estate license lookup" for our firm)
   - **The wow line first (R30, R31):** Tim Nash, our Broker-in-Charge, has sold real estate on the Grand Strand for over 30 years. Fred Nash Boulevard, the road around the end of the airport runway, is named for his father, who sold real estate here before him. Link /about/ for the team.
   - Then the record: Chapter3 Realty Corp, South Carolina real estate company license 28849; Tim Nash, license 43182 (R1, R2). How to check: the state's Licensee Lookup, Real Estate Commission, search "Chapter3" or the number; the state updates it nightly (R6). Office at 573 Vista Drive, Murrells Inlet, by appointment (R3).
   - What the law makes a Broker-in-Charge do, in one short list of four (R7). Describe the role; never "Tim reads every deal".
   - The logo's name: "Chapter III Realty", a registered name of Chapter3 Realty Corp (R4, R5), in one line only if the lead keeps the trade-name line in the footer (BUILD.md note).

5. **Do you have to sign anything, and what does it cost?**
   - Answer first: in South Carolina no agent represents you until you agree in writing (R11). Before that you are a customer, and you still get honesty, care, prompt offers and the adverse facts that are hard to find (R11).
   - Our line: consultations, rental analyses and pricing reviews are free; you pay only under a written agreement you choose to sign (R22).
   - Whether the full study is free and needs no agreement first: owner question 3. The page says only R22 until he answers.

6. **What can you check yourself, for free?**
   - Answer first: the live listing search and map, with the count of homes for sale and the day it ran (R19), the rental deal analyzer, and five calculators (R27). A clean list, one line each, each a link. No tiles, no badges.
   - The guides: one link to /guides/.

7. **Frequently asked questions** (three, none repeating a section)
   - "Do I have to use your lender?" Our affiliated lender, BrickWood Mortgage, is a separate company; you do not have to use it; the AfBA disclosure inline (R32).
   - "How do I reach Chapter3?" The phone, 854.333.2135, its hours, and the office by appointment (R3). No time promise (R29, owner question 4).
   - "Do you check homes for sellers too?" Only if the owner answers question 5(a) (the seller story) or confirms the practice; otherwise drop this entry.

**Story:** none in this version. If the owner confirms the flooded-house story word for word (question 5(a)), it goes into `stories/stories.json` and onto the page after section 2, as the last thing before the FAQ (STORY rules: an agent at Chapter3; no added detail).

**End offer:** "Tell us which home you are looking at" -> /contact/, and "Call 854.333.2135" (tel:). A link to /about/ ("Meet the team").

Length: about 1,200 to 1,500 words. It answers one main question; the rest is short.

## Homes strip

The page names no place, so it carries no `glass.js` homes() strip. It needs one edge feed under the opening (the site's edge adds it when the page has a feed). `/why-chapter-3/` has none in `idx-lib/feeds.js` today. Listed in BUILD.md for the lead: the existing NEWEST search with a bolder, personal title that the search still makes true, for example "Just listed on the Grand Strand. Pick one, and we check it." The reader's next step is exactly that.

## Offers, in order

| Where | Words | Goes to |
|---|---|---|
| After section 1 | Send us the address. We check it before you offer. | /contact/ |
| After section 2 | Ask us to check a home's flood record | /contact/ |
| Edge feed under the opening | (the feed itself) | listings |
| End | Tell us which home you are looking at; Call 854.333.2135 | /contact/; tel:+18543332135 |

No form in the first screen. The pop-up handles every /contact/ link.

## Photos

Our own only. The office front at 573 Vista Drive from the street, no people (photo partner shot list, through the owner's Gmail; `templates/photo-request-email.md`). Until it arrives, no photo: the table and the bar are the page's pictures. A screenshot of our own rental analyzer may sit in section 6 (our own image).

## Referring pages

21 pages link here now, mostly the relocation author block ("Why Us", `tools/inbound.js`). After the rebuild, add links in the text of the pages whose readers want this next, on words already there: /buyers/undisclosed-flooding/ ("we check" lines), /buyers/condo-in-litigation/, /hoa/documents/, /buyers/common-mistakes/, /buyers/ and /about/ ("what we check before you offer").

## Owner questions

Five questions, added to `templates/owner-questions.md` under "Batch 2026-11-b, /why-chapter-3/". The page is buildable without the answers: each unanswered item is left out, as marked above.
