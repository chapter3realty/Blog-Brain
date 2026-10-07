# Voice rules: what the owner corrected, by class

Read this before you write a page. A reviewer checks the page against `REVIEW-PASS.md` after.

Every rule here comes from a correction the owner made to a real page. In the past each correction became a ban on one phrase, and the next page used a new phrase of the same kind. So the rules are grouped by class. Learn the class. A phrase that is not on any list can still break the rule.

## Read this first

**Simple first (owner, 2026-10-07). These come before every other rule, on every page and every piece of writing.** The owner: "please please please do not take what im telling you as a lesson for this one type of thing or this one blog understand that in everything you do you need to make it as easy to understand as possible ... blogs need to be simple enough to understand a baby could read it and figure everything out".

- P1. Write for a reader who knows nothing: not the town, not the roads, not the words. If a child could not follow it, rewrite it.
- P2. Few numbers, and round ones. "About $300,000", never "$299,965". Two or three numbers in a section, not ten.
- P3. Say what it means for the reader, never what the thing is. "You probably will not need flood insurance", not "the home is in FEMA Zone X".
- P4. Show it. A map of where the place is, photos, and icons beat paragraphs. Never name a thing the reader cannot picture (a builder's model name, a road); show it or leave it out.
- P5. Every question the page asks, the page answers. "Ask the manager" or "read the rules" is not an answer.
- P6. Say the date once, at the top. Not in every section.
- P7. On a page for people buying a home to live in, lead with the home, what it offers, and the area around it. Price comes later and softly. Never in the headline. Cost-first is for investor pages.
- P8. Leave out details that only show how much we know. If the reader would not miss it, cut it.

**Buyer first (owner, 2026-10-06).**

- A. Lead with what the buyer of this page wants most, good news first, then the drawbacks. Never lead with records, history or method.
- B. Use the words a buyer who has done no research uses. No industry terms: "plans", "platted", "assessed value", "declaration", "development agreement", a company's initials.
- C. Speak as the expert the buyer trusts. State the fact. Do not write "records show", "according to", "per Pulte". Put a few source links through the page and the rest in the sources line.
- D. Tell the buyer what a fact means for them, not why or how it works. The explainer lives on another page; link it.
- E. Answer the next question the page makes them ask: a flood zone makes them ask what flood insurance costs.
- F. Keep it simple and warm, the way a good agent talks: "408 homes are already built", not "408 parcels carry a building value".

1. Say the thing itself: subject, verb, object. No metaphor, idiom or figure of speech of any kind.
2. Only people act. A number, law, lease, house or tax never sets, carries, maps, decides, wins, sits, runs, catches or does anything for anyone.
3. One idea per sentence. 28 words at most, 16 on average. No asides, no And/So openers, no teasers, no hedges.
4. Write about the house, the money and the rule. Never about the page, the writing or what the reader is thinking.
5. The short answer is the answer, with the number. If a sentence would be true on another page, it is not the answer.
6. Replace every term with the plain word (P1, P3). Section headings are plain questions that say what the section answers, and the section answers them (P5).
7. Chapter3 is a brokerage. It lends nothing, manages nothing, and no headline offers a loan. Devin Day is the author only. Paul is never named.
8. Every H1 names the place. Every investor page says, in specific facts, why to use Chapter3 here.
9. Every number comes from a source you opened. A ratio's two sides describe the same things. The brokerage's own published number beats your arithmetic.
10. A story is real and anonymous, or it is labelled "Example" with every number sourced, rounded, and no arithmetic (P2). Never write a quote for anyone.

## How to read a rule

- **Owner:** his words, verbatim, with the date and the file and line where they are recorded. Typos are his and are kept.
- **Bad:** a sentence that was on a page he read, live or in a preview.
- **Good (recorded):** the fix that shipped, as recorded. **Good (suggested):** written here; it adds no fact and has not been shown to him.
- **Enforced by:** the `build.js` check in the website repo that fails or warns on it, or "reading pass" when no pattern can catch it. A check that matches a list only catches that list.

Paths are in the website repo (`chapter3realty/Chapter3-Website`, branch `claude/github-account-check-wutg8b`) unless they start with `Blog-Brain/`. `RL` is `research/relocating/owner-answers.md`. `B3`, `B4` and `B5` are `research/invest-next/owner-answers-batch3.md`, `-batch4.md` and `-batch5.md`. The full record of each correction is in `edits.jsonl` in this folder.

Rule counts: PLAIN 8, BUYER 8, FIG 7, SHAPE 10, WORD 5, STRUCT 9, BIZ 8, FACT 9, LOCAL 5, STORY 7, CTA 4, OWNER 5. Total 85. When PLAIN or BUYER conflicts with another rule, PLAIN wins, then BUYER, except the legal rules in BIZ and FACT.

---

## PLAIN. Simple enough for anyone (owner, 2026-10-07, after version 4 of the 55+ batch)

He had a third-party reader go through version 4. Verdict, verbatim: "it is a very hard read because numbers are exact and there's too many numbers you also are mentioning the date so much". These rules are the class behind that, for every page, not fixes to those pages.

### PLAIN-1. Write for a reader who knows nothing.
- Owner: "youre still assuming people know things that are industry or community specific ... people out of state don't know roads or anything about the city at all including where this community is".
- Bad: "Myrtle Trace is west of both US 17 and Bypass 17." "The Stardom, the Stellar and the Renown."
- Good (suggested): a map with the community, the beach and the towns, and "about 20 minutes from the beach by car".
- Enforced by: buyer reader; `score.js` plain-words list.

### PLAIN-2. Few numbers, and round ones.
- Owner: "numbers are exact and there's too many numbers".
- Bad: "the middle single-family flood policy for a Zone X home cost $561 a year, fees included. Half cost between $432 and $725."
- Good (suggested): "Flood insurance here usually costs about $600 a year."
- Exact figures stay in the fact ledger. On the page: round to what a person would say out loud. A table may hold a few more numbers than prose.
- Enforced by: `score.js` number density and exact-amount checks.

### PLAIN-3. Say what it means for the reader, not what the thing is.
- Owner: "people who arent in insurance dont klnow what flood zone X means just talk about what something means for a customer ... nobody knows what a yellow zone is but they know if you said something like \"the house requires flood insurance because it sits in a flood zone\" ... notice how i only mentioned the thing that impacted the reader".
- Bad: "Myrtle Trace is in FEMA flood Zone X, an area of low flood risk."
- Good (suggested): "Homes here are not in a flood zone, so your lender will not require flood insurance."
- Enforced by: reading pass, buyer reader.

### PLAIN-4. Show it: a map, photos, icons.
- Owner: "to make it an easier read you could use more images and icons ... the names of houses is something nobody knows at all so photos are going to be easier to understand ... it needs more images and photos ... one good image would be showing them in a dynamic picture".
- Every place page has a map showing where the place is and what is near it. Every page has a picture or icon row in the first screen. A thing the reader cannot picture is shown or left out.
- Photos must be ours or licensed for reuse with credit. Never a builder's or a listing's photo, and never a made-up photo presented as the real place.
- Enforced by: `score.js` visuals check.

### PLAIN-5. Every question the page asks, the page answers.
- Owner: "theres a few times where you propose a question and then dont answer it or the answer is just go find out by reading stuff."
- Bad: a heading "What do the HOA dues include?" answered with "Ask the management company for the budget."
- If no source gives the answer, do not ask the question. Put the offer to find out in a CTA, not in an answer.
- Enforced by: `score.js` deflection check; buyer reader.

### PLAIN-6. Say the date once.
- Owner: "you also are mentioning the date so much".
- The page carries its updated date at the top. Body copy says "this year", "last year" or nothing. A date stays only where the reader needs it to act (a deadline).
- Enforced by: `score.js` date-mention count.

### PLAIN-7. On a page for people buying a home to live in, lead with the home and the area. Price later, softly, never in the headline.
- Owner: "youre focusing too much on what stuff cost and what a logical investor would care about which would be great for investor pages but for these pages people buying ahouse care more about the house and what it offers and the area around it rather than th price also leading with prices would scare people away and even in the headline it does it."
- Bad: H1 "What does a new home in Del Webb North Myrtle Beach cost? From $585,990".
- Good (suggested): "What is it like to live in Del Webb North Myrtle Beach?"
- Enforced by: `score.js` price-in-headline check on non-investor pages.

### PLAIN-8. Leave out what only shows how much we know.
- Owner: "talking about all the details and exact things just sound like you're flexing your smarts."
- Test: would the reader miss this sentence? If not, cut it.
- Enforced by: reading pass.

## BUYER. Write for the buyer (owner, 2026-10-06, after the first 55+ batch)

He read four pages that passed every check and scored 100. His verdict: "I think you did very well at writing these blogs but i think you don't lead with the most valuable information to the target buyer of that page and i think that a huge portion of the content is technical knowledge that the customer wouldn't really care to learn about." These rules are the class behind that, not fixes to those pages. They outrank STRUCT-2 and STORY-3 where those asked for definitions and arithmetic.

### BUYER-1. Lead with what the target buyer of this page wants most. Good news first, then the drawbacks.
- Owner: "i think you are leading with too much technical information lead with what a buyer would want to know rather than how many acres were annexed by the city and also give is a bit of a nice realtor feel like the community has 408 homes to choose from currently built. we don't need to lead with records show and so on with that sort of information worst case just source it." (Blog-Brain session, 2026-10-06). "and of course we always lead with the good then bad."
- Bad: "The city of North Myrtle Beach annexed the 171.24 acres in October 2020." (second paragraph of the Del Webb North Myrtle Beach draft)
- Good (suggested): "Del Webb North Myrtle Beach has about 408 homes built and new ones still for sale, a mile from the beach."
- Enforced by: reading pass, and the buyer reader (`Blog-Brain/prompts/buyer-reader.md`).

### BUYER-2. No industry terms. Use the words a buyer who has done no research uses.
- Owner: "i think you are using some industry terminology with Pulte and its three \"plans\", AAM and so on these industry terms are just words that a normal buyer who hasn't done much research wouldn't know." (Blog-Brain session, 2026-10-06)
- Bad: "Pulte lists three Del Webb plans"; "Ask AAM"; "497 home lots platted"; "assessed value"; "legal residence"; "development agreement".
- Good (suggested): "three home designs"; "ask the management company"; "about 500 homesites"; "your primary home".
- Do not define a term to make it usable. Replace it. Keep a term only when the buyer will see it on a form they sign, and then say it once, in plain words.
- Enforced by: reading pass, and the buyer reader.

### BUYER-3. Speak as the expert. State the fact; source it lightly.
- Owner: "i think you present a lot of stuff a little too formally such as according to the records and so on when we are the experts we are the people they go to and they trust so we should just present the facts to them with a few sources thorough the page." (Blog-Brain session, 2026-10-06)
- Bad: "County records show 497 home lots platted in five phases." "Pulte lists lawn care and a TV package."
- Good (suggested): "About 500 homes are planned, and about 408 are built." "Your dues include lawn care and a TV package."
- A price or a fee still carries its date ("in October 2026"). Facts about a named builder or HOA stay dated and observable (BIZ, website CLAUDE.md rule 5). The date stays; the attribution goes to the sources line.
- Enforced by: reading pass.

### BUYER-4. Say what it means for the buyer, not why or how it works.
- Owner: "they just want to know what does it mean for them without any explanation on why or how or where it came from" (Blog-Brain session, 2026-10-06). "think about how a regular buyer needs a simple easy to read page that maybe doesnt dive deeper into how everything works because they want to learn"
- Bad: the tax section that explains assessment ratios, mills and the school operating levy before giving the bill.
- Good (suggested): "On a $700,000 home you live in, expect about $3,000 a year in property tax. At 65 you can lower it." Then link /buyers/property-taxes/ for how it is worked out.
- A worked example gives the results. Arithmetic appears only where one line of it helps the buyer trust the number.
- Enforced by: reading pass, and the buyer reader.

### BUYER-5. Answer the next question the page makes the buyer ask.
- Owner: "is there a question that a regular buyer would ask based on information they learned about in our page for example i feel like they would ask about the flood insurance cost after the del webb north myrtle beach in a flood zone? section." (Blog-Brain session, 2026-10-06)
- Every section ends by asking: what will they ask now? If the answer is a fact, add it (verified). If it is a service, offer it in a CTA.
- Enforced by: the buyer reader lists the questions it still has.

### BUYER-6. A good agent's warmth, in literal words.
- Owner: "give is a bit of a nice realtor feel like the community has 408 homes to choose from currently built" (Blog-Brain session, 2026-10-06).
- Frame a fact as what the buyer gets: homes to choose from, a clubhouse to use, the beach a mile away. Still no metaphors (FIG), no superlatives, no judgment about a named builder or HOA (BIZ).
- Enforced by: reading pass.

### BUYER-7. Research what buyers ask about an HOA community's life, not only its rules.
- Owner: "something in my experience people like to know about for HOA's is how many events do they hold for the community." (Blog-Brain session, 2026-10-06)
- For any community page: events and clubs (how many a month, from a public calendar or newsletter), what is in walking distance, pets, guests, golf carts. Rules and records come after.
- Enforced by: the research brief template (`Blog-Brain/templates/research-brief.md`).

### BUYER-8. Simple and easy to read beats complete.
- A page a buyer finishes beats a page that covers everything. Cut what the buyer would not miss. Detail lives on the explainer pages; link them.
- Enforced by: the buyer reader marks every paragraph it would skip.

## FIG. Figurative language (42 recorded corrections)

The owner's position: the site speaks literally and directly, with no other way of speaking. He listed every device by name on 2026-08-31 (RL:801-850) and asked for all of them to be banned.

### FIG-1. Say the literal fact. No metaphor, simile, idiom, hyperbole, understatement, euphemism or allusion.
- Owner: "The geography does the rest Remove and do a revamp on the whole page to remove metaphors idioms similes anything that isnt direct and to the point spaking in plain english and hard code the prevention of saying anything you find." (2026-08-31, RL:785)
- Bad: "the state they bought into" (/buyers/relocating/from-florida/)
- Good (recorded): "what they wanted" (RL:781)
- Enforced by: `FIGURATIVE`, `AI_TELL_PHRASES`, `REGISTER_REGEX` (idiom family). Each holds a list of phrases that already shipped. A new figure passes them. Reading pass for the rest.

### FIG-2. Only people act. Numbers, prices, taxes, states, houses, salaries and documents do not sit, move, follow, send, catch, leave, spend, want or care.
- Owner: "replace all metaphors and idioms and personification" (2026-08-16, build.js:718). On "catches almost nobody": "never say it again" (2026-09-05, build.js:855).
- Bad: "a northern salary spends against Myrtle Beach prices" (/buyers/relocating/jobs/). Also shipped: "one exemption catches almost nobody", "taxes move against the mover", "Florida sent".
- Good (recorded): "hold northern pay and live here and you are earning at the higher end of wages in this market" (RL:357-361)
- Good (suggested), for the exemption: "Almost no rental owner qualifies for this exemption."
- Enforced by: `REGISTER_REGEX` (a rule, tax or table that catches, wants or leaves; "catch" in any form), `AI_TELL_PHRASES` ("outgrow", "moves the other way"). Reading pass for every other subject.

### FIG-3. A law, lease, rule, judgment, contract or deed does nothing for anyone. It requires, allows, states or says.
- Owner: "a law never does anything for you why are we personifying a law? its against the rules." (2026-09-07, B3:336)
- Bad: "The state's landlord and tenant law does not do that for you." (/invest/student-rentals/, deleted). Also: "the judgment sets the compliance date".
- Good (recorded): "the judgment states the compliance date" (PLAYBOOK.md:448-452)
- Enforced by: `REGISTER_REGEX` (two personification entries: does that for you; cares, wants, expects, thinks, watches). "The law requires" passes.

### FIG-4. Use the literal verb. Not sets, carries, maps, runs, sits, decides, wins, covers, clears, reaches, holds or kills.
- Owner: "I dont like the term sets hard code to never say sets like that depending on the lease stuff like that is better but the lease never sets anything condition doesnt set anything nothing sets anything hard code it away." (2026-09-06, B3:276). "All of this carry new loan and stuff is bullshit metaphors replace all of that in all 5 pages with more literal talking" (2026-09-07, B4:198).
- Bad: "The refinanced house needs to carry its new payment from its own rent" (/invest/financing-multiple-rentals/)
- Good (suggested, PLAYBOOK.md:467-468): "the rent on the new house must pay its payment"
- The replacements on record:

| Figurative | Literal | Where recorded |
|---|---|---|
| the judgment sets the compliance date | the judgment states the compliance date | PLAYBOOK.md:450-452 |
| state law sets no maximum deposit | state law has no maximum deposit | PLAYBOOK.md:450-452 |
| carries a premium | rents for more | B4:288 |
| flood carries a surcharge | adds | B4:289 |
| the analyzer carries both | includes both | B4:289 |
| kill more deals | stop more deals | B4:290 |
| hold the larger vouchers | have | B4:291 |
| covers (a housing authority) | serves | B4:291-292 |
| reach your rent | at or above your rent | B4:292 |
| runs about $342,000 | costs, is, or averages about $342,000 | PLAYBOOK.md:124-126 |
| so finding the property that clears it is the work | finding the property is the hard part that agents tend to leave up to you | RL:1190-1192 |
| maps the loan | deleted | B4:200 |

- Enforced by: `SETS_REGEX` (error on the five batch-3 pages and on pages published from 2026-09-07, warning on older pages), `CARRY_REGEX` (error on pages built from 2026-09-07, warning on 13 older pages), `MAPS_REGEX` (error everywhere), `AI_TELL_PHRASES` ("runs about", "run higher"). Reading pass for covers, clears, sits, reaches, holds, kills and any verb not listed.

### FIG-5. No aphorisms. An abstract subject that decides, wins, or is where something is made or lost. Name who does what and what it costs them.
- Owner: "it is against your rules to talk like this whatever this phrase is called delete it from the face of the website and NEVER let me see it ever again we speak plain and consice and literal no other way of speakig at all." (2026-09-02, RL:1146-1149)
- Bad: "Cash wins the houses that speed decides." (/invest/strategies/fix-and-flip/). Also: "Which one you are buying decides whether the strategy works at all." (/invest/strategies/brrrr/)
- Good (suggested, PLAYBOOK.md:351-352): "The buyer who can close soonest usually gets the house."
- Enforced by: `AI_TELL_REGEX` (made or lost, X is where the Y is made, X wins the Y that, speed/cash/price decides, decides who, is what decides), `REGISTER_REGEX` (aphorism shapes), `FIGURATIVE` ("things decide", "one rule decides").

### FIG-6. No spatial or object metaphors for numbers and rules: line, gap, ceiling, door, map, trap, clock, layer, route. Give the number and say what happens above and below it.
- Owner: "We only speak extremely literal. No phrases of any kind at all ever." (2026-09-05, build.js:843). "our line is a phrase we should hardcode away." (2026-09-10, build.js:869-870)
- Bad: "which line of the map your property sits on" (/invest/accommodations-tax/)
- Good (his wording for that page, PLAYBOOK.md:421-423; the live page adds "on that booking"): "If Airbnb or VRBO take the payment, they are responsible for the taxes. If you take the payment, you are responsible for the taxes."
- More recorded pairs: "our line is a 1.25 coverage ratio" to "our target is 1.25"; "a ceiling" to "the most the authority pays"; "a gap" to "a wait"; "That gap is the manager" to "This relies on a good manager."
- Enforced by: `REGISTER_REGEX` (spatial family, "our line"), `FIGURATIVE` ("one line decides", "the line that changes"). Reading pass for ceiling, door, trap, gap used in a new way.

### FIG-7. No idioms, including small ones: on paper, in hand, get it right, the last word, in your pocket, seals it, on the table, rule of thumb, does the rest, finishes the cycle.
- Owner: "never finishes the cycle. bro never use a phrase ever again in your life hard code it" (2026-09-03, RL:1198)
- Bad: "never finishes the cycle." (/invest/strategies/brrrr/)
- Good (recorded): "does not work" (RL:1198-1199)
- Enforced by: `REGISTER_REGEX` (idiom family, "get it right", "rule of thumb"), `AI_TELL_PHRASES` (money idioms), `AI_TELL_REGEX` ("finish the cycle"). A story told by the owner or Tim is rewritten the same way (STORY-4).

---

## SHAPE. Sentence shape (55 recorded corrections)

The most frequent correction is one word: "Delete." 44 recorded corrections were a deletion, and most of them put nothing in its place. Before you keep a sentence, ask what fact the reader loses without it.

### SHAPE-1. One idea per sentence. On pages published from 2026-09-05: 28 words at most, 16 on average.
- Owner: "Don't use any phrases and make each sentence as simple and easy to understand as possible." (2026-09-07, B4:29)
- Bad: "Expecting the same paperwork. Each lender and each underwriter asks for its own list, and a seller can ask for more too. Expect a different list from last time, even with the same broker. We ask for the least the file needs, and the underwriter still writes the list." (/invest/financing-multiple-rentals/, B4:202)
- Good (the target register, his own words): "If Airbnb or VRBO take the payment, they are responsible for the taxes. If you take the payment, you are responsible for the taxes." Thirteen words, then eleven.
- Enforced by: `PUNCH` (40 words and a mean of 20 sitewide), strict caps (28, mean 16, warning at 22) on `STRICT_REGISTER_PAGES` and every page published from 2026-09-05. Length only. Reading pass for one idea per sentence.

### SHAPE-2. No verbal tics: asides in brackets of five words or more; sentences that open with And or So (and But, Or, Yet on new pages); hedging or intensifying adverbs; summarizers.
- Owner: "also lets make sure that we hard code sentences being punchy and snappy and valuable" (2026-09-01, RL:1055-1056)
- Bad: "How you actually live" (PLAYBOOK.md:288)
- Good (recorded): "how you live"
- Enforced by: `PUNCH` (`PUNCH_WORDS`: actually, very, really, quite, basically, in short, that said, the takeaway and the rest; `PUNCH_OPENER`; the aside check; may/might warning over four).

### SHAPE-3. No teasers or build-ups. Do not announce a fact. State it.
- Owner: "The wanting is specific: replace with They want to and hard code against phrases like this" (2026-08-31, RL:789). "straight to the point no build ups" (2026-09-05, HANDOFF.md:964)
- Bad: "The wanting is specific:" (/buyers/relocating/from-florida/). Also: "This is the sentence most cost segregation articles leave out." (/invest/cost-segregation/)
- Good (recorded): "They want to ..."
- Enforced by: `PUNCH` (here is how, the good news, which is why, most articles leave out, what nobody tells you), `AI_TELL_PHRASES` (here's the kicker, the truth is), `FILLER`, `SELF_REFERENTIAL`.

### SHAPE-4. No clefts. Not "What X does is Y", "If what you want is", "is what decides". Write "X does Y".
- Owner: "What the leftover money does is your call: delete what would you call phrases like those? whatever you would call it hard code ever saying it pseudo-cleft sentence hard code from ever saying one of these again and remove them from this page" (2026-08-31, RL:797)
- Bad: "What the leftover money does is your call:" (/buyers/relocating/from-florida/)
- Good (suggested): "You choose how to use the leftover money."
- Enforced by: `AI_TELL_REGEX` (three pseudo-cleft shapes, "is what decides").

### SHAPE-5. No contrast framing. Not "not just X, but Y", "minutes, not weeks", or a negative tail that only adds rhythm. State the one true thing.
- Owner (from the list he sent): "Contrast Framing ("Not X, but Y"): AI loves creating immediate dramatic balance." (2026-08-31, RL:828)
- Bad: "Picking the right strategy should take minutes, not weeks." (/invest/strategies/). Also deleted: "not from the day a tenant reports a problem." (/invest/new-construction-rentals/)
- Good (recorded, his words on another line): "count it as a gain, but not part of the plan." (B4:173)
- Enforced by: `AI_TELL_REGEX` (contrast shapes), `PUNCH` (time contrast), `SUBHEAD` (", not X" in a sub). Reading pass for other negative tails.

### SHAPE-6. No hedges and no refusal to answer. Give the number or the rule. A required disclaimer on one household's numbers ("his numbers, not a promise") stays.
- Owner: "give actual data and say on average yes or no whenever it shows on the site." (2026-08-31, PLAYBOOK.md:177-178). On his own answer: "I guess you should take this advice and replace my dep3nds on your strategy fro a more concrete answer." (2026-09-06, B3:213-214)
- Bad: "That is a fact about the tests. It is not a verdict on you." (/invest/str-tax-treatment/). Also: "Averages understate the real spread," and "We will not promise that".
- Good (recorded): "On average, yes." followed by the figures (RL:887-902)
- Enforced by: `AI_TELL_PHRASES` (will not promise, cannot promise, it seems like), `REGISTER_REGEX` (hedge family: not a verdict, nobody can, will not tell you whether). Reading pass for "it depends" with no answer after it.

### SHAPE-7. Write about the subject. Never about the page, the writing, other websites, or what the reader asks or wants.
- Owner: "delete this type of speech from all 5 pages" (2026-09-09, HANDOFF.md:2079-2080). "Don't say marketing copy" (2026-08-20, build.js:1165)
- Bad: "The numbers below are the whole page." (/invest/rental-returns/). Also: "Two things the owner of a rental here asks about are not on the list", "The rule of thumb is short.", "this page spends as much time on the exit as on the purchase".
- Good (recorded): "Student status is not on that list" became "Student status is not protected" (PLAYBOOK.md:736-738)
- Enforced by: `REGISTER_REGEX` (announcing an absence, what the reader asks about, rule of thumb), `SELF_REFERENTIAL`, `JARGON` ("this article", "marketing copy"), `PUNCH` ("in plain English"). Reading pass for any other sentence about the page.

### SHAPE-8. No filler. If the reader loses no fact when a sentence is deleted, delete it. A literal sentence can still be filler.
- Owner: "The rent depends on this number. Delete this" (2026-09-07, B3:322)
- Bad: "The rent depends on this number." (/invest/student-rentals/). This was itself the rewrite PLAYBOOK A22a suggested for "sets". Also deleted: "A seller can ask for more.", "not in the sales office.", "Price the house without the incentive.", "for that math".
- Good: no sentence.
- Enforced by: `FILLER` (eight phrases). Reading pass.

### SHAPE-9. Do not number a list in prose, and do not refer back by position. Name the thing.
- Owner: "Never say anything is first or second or anything." (2026-09-16, build.js:881-882). On "The second pool is smaller and steadier": "This sentance is not structured in a way that makes sense. say the students who want cheap housing and the families who blah bla blah and then delete second pool is" (2026-09-07, B3:320)
- Bad: "The second pool is smaller and steadier, and it rents the nicer houses." (/invest/student-rentals/)
- Good (suggested, from the shipped text): "Students want the cheapest house that fits their group. Families who move to Conway to be near a student pay a premium for a nice house close to campus."
- Enforced by: `REGISTER_REGEX` (numbering in prose), `ANAPHORA` (the former, the latter, as mentioned above).

### SHAPE-10. Every instruction names the thing to check, who checks it, and what a bad answer costs.
- Owner: "explain why failing the test is bad and remove confirm which case i don't like that phrase sounds AI hardcode the prevention of that phrase." (2026-09-02, RL:1114-1116)
- Bad: "Confirm which case you are buying." (/invest/strategies/brrrr/). Also: "confirm they exist before the walls are closed up".
- Good (recorded): "confirm with your contractor all permits have been applied for and gotten" (RL:1169-1170)
- Enforced by: `AI_TELL_REGEX` ("confirm which", "determine which", "which case you are"). Reading pass for the shape.

---

## WORD. Plain words (14 recorded corrections)

### WORD-1. Use the word a buyer uses. Explain a measure in plain words.
- Owner: "Covenants is a big word use rules" (2026-09-07, B4:109). "never use an industry term ever in an article, hard code that" (2026-08-20, build.js:1132-1133). "This is complicated sounding." (2026-09-07, B4:318)
- Bad: "It is the 40th percentile of gross rents for standard-quality units, so 60 percent of standard units rent above it." (/invest/rent-prices/)
- Good (recorded): "the rent that 40 out of 100 standard homes rent at or below" (B4:381-382)
- Enforced by: `JARGON` (a narrow list: listing for house, price point, SFR and others), `INDUSTRY` warning. Reading pass.

### WORD-2. Do not make up a term.
- Owner: "Housing money doesnt make sense." (2026-08-31, RL:777)
- Bad: "What to expect from the housing money" (/buyers/relocating/from-florida/)
- Good (recorded, the calculator line): "plus about $185,000 on the house, and a smaller loan with it." (RL:524-525)
- Enforced by: `AI_TELL_PHRASES` ("housing money", "house money"). Reading pass.

### WORD-3. One word for one thing. A property gaining value is "appreciation". A home you live in is a "primary residence".
- Owner: "Always use the term appreciation instead of anything else when talking about it." (2026-09-11, build.js:873-874)
- Bad: "price change" (/invest/rental-returns/). Also "as a legal residence" (/invest/new-construction-rentals/).
- Good (recorded): "appreciation"; "Primary residence" (B4:177, 266)
- Enforced by: `REGISTER_REGEX` (price rise, price change, price growth, rise in value, value growth). Reading pass for other pairs.

### WORD-4. None of the AI vocabulary: delve, leverage, navigate, unlock, foster, crucial, pivotal, vibrant, dynamic, robust, seamless, journey, landscape.
- Owner (from the list he sent): "Verbs: Delve, leverage, harken, resonate, unlock, navigate, encapsulate, underscore, foster." (2026-08-31, RL:849)
- Bad: "navigating bylaws" (RL:726-728)
- Good (suggested): "reading the bylaws"
- Enforced by: `AI_TELL_PHRASES`, `AI_TELL_REGEX`, `PUNCH` (buzzwords).

### WORD-5. Proper English. A family is "them", not "it". A heading is a sentence a person would say.
- Owner: "Thats not proper English" (2026-09-07, B4:194)
- Bad: "What reserves does each rental add?" (/invest/financing-multiple-rentals/). Also "You screen the family and rent to it."
- Good (recorded): "How much do lenders want in reserves?"; "Rent to them." (B4:79, 282)
- Enforced by: reading pass.

---

## STRUCT. Page structure (46 recorded corrections)

### STRUCT-1. The short answer holds the answer and nothing else: what it costs, what it returns, what it appreciates, or "on average, yes" or "no" with the number. If a sentence in it would be true on a different page, it is not the answer.
- Owner: "take this lesson when it comes to making a simple short answer in the other pages too." (2026-09-11, PLAYBOOK.md:687-688). "I think these first paragraphs need to be much more straight to the point without any filler to help AEO." (2026-08-31, RL:791)
- Bad: "Two numbers, and the price you buy at decides both." followed by "those are all-cash returns, before any loan. With a loan the rent has to cover the payment too, and our line is a 1.25 coverage ratio." (/invest/rental-returns/, MISTAKES.md:604-607). Also: "The cash flow depends on when you buy." (/invest/new-construction-rentals/)
- Good (recorded): three facts and nothing else: what a Horry County rental costs, the return with a manager and without one, and appreciation over five and ten years (HANDOFF.md:2137-2139). Short paragraphs; the last one gives a reason to read on.
- Enforced by: reading pass. No check measures whether a summary is a summary.

### STRUCT-2. Say what the subject is before you say anything about it. Prefer the plain word to the term (BUYER-2); define a term only when the buyer will meet it on a form.
- Owner: "The page is assuming I know." (2026-09-05, PLAYBOOK.md:415). "Explain what the master deed is and make sure all 5 pages are giving proper context before explaining something like why do we care about the master deed it feels random here" (2026-09-07, B3:306)
- Bad: "What does the master's deed carry?" (/invest/foreclosures/). Also: "The City of Conway counts a household as no more than three unrelated people" with no context.
- Good (recorded order): the section now defines the master-in-equity and the deed before the warranty point (HANDOFF.md:1550-1551).
- Enforced by: on strict pages the first section heading must be a question. That is all. Reading pass for every term.

### STRUCT-3. Section headings are plain questions a reader would type, and each says what its section answers.
- Owner: "Structure as many headlines as a question as possible." (2026-09-05, build.js:2042-2043). "stop speaking in metaphors and rhymes and shit be clear if someone reads this they have no idea at all what the next section is about" (2026-08-20, build.js:1171-1172)
- Bad: "What must you give the tenant at move-in?" (/invest/landlord-rules/). He said: "make this more clear on what the section is about". Also: "What to bring, and the dates that bind".
- Good (recorded): "What must a landlord give a new tenant in writing?" (HANDOFF.md:1428-1429)
- Enforced by: question-heading check (strict pages: 60 percent and the first heading; other pages warn under 50 percent), `VAGUE_HEADING`, H2 length and generic-label checks. Reading pass for "does it say what the section answers".

### STRUCT-4. No section that says what the page will not do. No negative framing in a heading.
- Owner: "eradicate the hedges" (2026-09-05, build.js:861)
- Bad: "What will this page not tell you?" (/invest/str-tax-treatment/)
- Good: no such section. A disclaimer goes in the sources line (PLAYBOOK A22).
- Enforced by: disclaimer-section check on H2s, `HEADER_NEGATIVE`.

### STRUCT-5. The hero sub-header is the second headline: 8 to 30 words, the page's topic word, a number or a place, written to the reader, a statement, no "we", no ", not X", no template. Write it last, after the H1. A reader must understand it alone.
- Owner: "all of our subheaders need to be keyword and attention grabbing lets make hard rules so that it does it right every time" (2026-09-01, RL:1049-1051). "Explain this better in the sub header i don't get it." (2026-09-07, B3:314)
- Bad: "A Conway student rental serves the rest, under the city's cap of three unrelated tenants." (/invest/student-rentals/)
- Good (recorded): "about 4 to 9 percent of the price in rent each year" (/invest/rental-returns/, HANDOFF.md:2070-2071)
- Enforced by: `SUBHEAD` (all eight rules). Reading pass for whether a stranger understands it.

### STRUCT-6. One subject per page. Answer the reader's next question. Never raise a problem without its fix.
- Owner: "Can you talk about a solution to this parking problem you introduced? if there is no solution than delete the problem" (2026-09-07, B3:326)
- Bad: the student-rental parking section, which named the problem and no fix.
- Good (recorded): "a driveway that holds one car per tenant and a lease that limits the cars" (HANDOFF.md:1535-1536)
- Enforced by: reading pass.

### STRUCT-7. Write for the buyer, not the industry. Apply the buyer test to every sentence: would a buyer standing in the property do anything differently because of it?
- Owner, on a table column naming who requires each policy: "lets delete that and at the top mention how the lender may require these policies" (2026-09-07, B4:312)
- Bad: a "Who requires it" column (/invest/landlord-insurance/). Also the /hoa/ batch, which named six rule-writing bodies and carried ten dates. He works in the industry and could not understand half of one page (MISTAKES.md:98).
- Good (recorded): "your lender may require all three" (B4:377-378)
- Enforced by: `INDUSTRY` warning (three or more bodies), explicit-date warning (more than two), sources block cap (90 words), readability grade. Reading pass for the buyer test.

### STRUCT-8. Short blocks. A paragraph over three sentences becomes a table or a bold list. Steps are bold. A long section is split.
- Owner: "the information after the short answer needs to be put in much more simple sentences [...] and using graphs and not super long paragraphs." (2026-09-07, B4:81). "Split these up into different sections its too long" (2026-09-03, RL:1194)
- Bad: seven paragraphs under the steps on /invest/strategies/brrrr/.
- Good (recorded): six sections: the buy, sourcing, condos, the work, the refinance, the repeat (RL:1194-1196).
- Enforced by: no `build.js` check. `Blog-Brain/tools/score.js` scores paragraph length and visual breaks (STANDARD H2, H3). Reading pass.

### STRUCT-9. One page owns each question. Other pages link to it.
- Owner: "are any of these pages cannibalizing other pages like this one on the rules page Can you end a lease to sell the house?" (2026-09-06, B3:282). "Have we not talked about this on the website already?" (2026-09-07, B4:310)
- Bad: "Can you end a lease to sell the house?" answered on both /sell/rental-property/ and /invest/landlord-rules/.
- Good (recorded): only the landlord page answers it; the selling page links there (HANDOFF.md:1438-1440).
- Enforced by: the near-duplicate checker in `build.js` (page-to-page overlap), and the FAQPage repeat check (one page). Reading pass for the same question in different words.

---

## BIZ. Business boundaries (18 recorded corrections)

### BIZ-1. Chapter3 is a brokerage. It is affiliated with BrickWood Mortgage, but they are not the same company, and Chapter3 does no financing work at all. BrickWood lends, or "your lender" does.
- Owner: "there is an affiliation... but we are not the same company and Chapter3 does no financing work at all" (2026-10-04, Blog-Brain/STANDARD.md:118). "never talk as if we finance the loan always as BrickWood Finances the loan." (2026-08-30, RL:637-638). "dont ever say we bring it under one roof cause thats illegal so hard code it to never say that again" (2026-08-14, build.js:1621-1622)
- Bad: "We price it deal by deal" (/invest/strategies/dscr-loans/). Also: "Our mortgages usually require only hazard insurance", "under one roof", "an in-house mortgage lender", "we underwrite".
- Good (recorded): "BrickWood Mortgage prices it deal by deal", with the AfBA disclosure (MISTAKES.md:130)
- Enforced by: `LEND_VOICE`, the offers-credit check, the roof check, the in-house check, the underwriting check. `Blog-Brain/tools/claims-scan.js`: `lender-identity`, `lender-possessive`, `financing-as-service`.

### BIZ-2. No title, H1, hero sub or CTA label reads as an offer of a loan. A loan rule is one short section halfway down, never the subject of the page.
- Owner: "we are NOT a lending company we are a real estate brokerage NEVER talk in away that makes it sound like we can finance a house." (2026-09-07, B4:304). On the sub: "re write the entire subheader thats all loan company shit that we have NOTHING to do with" (B4:302)
- Bad: "Finance Multiple Rental Properties in Myrtle Beach | Chapter3"
- Good (recorded): "Buying a Second Rental in Myrtle Beach", with the H1 "What goes wrong when you buy a second rental in Myrtle Beach?" (B4:372-373)
- Enforced by: `LEND_HEADLINE` (sitewide error on title, H1, hero sub and CTA labels). Reading pass for a page whose subject has drifted to loans.

### BIZ-3. No licence claim for anyone at Chapter3: no NMLS number, no "MLO", "loan originator" or "loan officer". A loan fact stands alone; when it needs a source, it is "according to a loan officer at our preferred lender".
- Owner: "Dont mention my NMLS or say im a licensed loan originator with Chapter3 ever that's illegal just state the fact and if you need to get credibility say according to a loan officer at our preferred lender" (2026-09-07, B3:308)
- Bad: "Reviewed by Chapter3's licensed mortgage loan originator, NMLS 2721275." (117 pages)
- Good (recorded): "according to a loan officer at our preferred lender"
- Enforced by: `NMLS_NUMBER_REGEX`, `MLO_SCHEMA_REGEX`, `MLO_CLAIM_REGEX` (sitewide, schema included). claims-scan `licence-claim`.

### BIZ-4. Never state an interest rate or a payment amount. A down-payment percentage only on the four business-purpose pages, with the lender named. Everywhere else, offer to get the numbers.
- Owner, on his own equity figures: "Now these %'s may be reg Z issues so be careful when you are writing this please and fact check what i said i could always be wrong." (2026-09-07, B4:21)
- Bad: "10% minimum down payment" (MISTAKES.md:129)
- Good (recorded, his sentence): "if you need to know what the rates and monthly prices would look like here in myrtle call us and we can work with our preferred lender to give you solid numbers." (B4:175)
- Enforced by: `TRIGGER_DOWN`, `TRIGGER_DOWN_NEAR`, `DOWN_PAYMENT_OK_PAGES`, the rate and payment checks. claims-scan `interest-rate`.

### BIZ-5. Chapter3 does no property management. Nothing says it manages, screens, collects rent or files evictions.
- Owner: "lets remove this because we don't do any property management make sure nothing says we do." (2026-09-07, B3:300)
- Bad: "When Chapter3 manages the unit, the broker-in-charge files it for you" (/invest/landlord-rules/)
- Good: the section is deleted. Describe what a property manager does, as a third party.
- Enforced by: reading pass. No check exists.

### BIZ-6. Names. Devin Day may be the visible author: byline, author note, schema. He is never named in the copy, a story or a CTA. Paul is never named. A story from his files is "in Chapter3's files". Tim Nash is "Tim Nash" in every visible place.
- Owner: "make a rule to never say my name hardcode remove my name from all these pages on the pages we are making now." (2026-09-06, B3:262). "i can be the author and it can be visible... do not name paul on the site yet" (2026-10-05, Blog-Brain/STANDARD.md:124)
- Bad: "Devin Day's example" (batch-3 pages, MISTAKES.md:328-330)
- Good (recorded): "in Chapter3's files"
- Enforced by: `OWNER_NAME_REGEX` on `NO_OWNER_NAME_PAGES` and pages published from 2026-09-07, byline excluded. claims-scan `individual-named` catches "Devin" and "Paul" on every surface except JSON-LD.

### BIZ-7. Never name an attorney, inspector, insurer or screening company without an AfBA, and never promise one person's involvement in every deal.
- Owner: "i dont want to say a specific attorney because we dont have an AFBA with any attorney but we do work with plenty of attorneys who can help with those things." (2026-09-06, B3:49-50)
- Bad: a team member who reviews "every agreement and addendum" (MISTAKES.md:110)
- Good (suggested): "We work with several closing attorneys and can introduce you."
- Enforced by: reading pass.

### BIZ-8. Fair housing. Describe the property and the place, never the people who live there. No safety, crime, school-quality or "suits families" claims.
- Owner: no words recorded verbatim. He asked that police complaint volume not be mentioned (RL:37-38).
- Bad (cut before publishing): "South Carolina is safer" (RL:270)
- Good (recorded rule): "describe the sand, never the demographic" (RL:276-277)
- Enforced by: `FAIR_HOUSING` list. claims-scan `fair-housing`.

---

## FACT. Facts and numbers (22 recorded corrections)

### FACT-1. Every fact comes from a primary source you opened. A search summary is not a source. A fact that changes an existing sentence gets the same treatment as a new one.
- Owner: "i got an understanding of the law but you do alot fo research and make sure we know all the laws and that its explained in the site cause i could get things wrong" (2026-09-06, B3:26-28)
- Bad: a claim, from a search summary citing a listing site, that Georgetown County requires a business licence for stays under 30 days. It was used to "correct" a right sentence on /invest/str-rules/ (MISTAKES.md:184-199).
- Good (recorded): the county's own FAQ: no business licence in unincorporated areas. The original sentence was restored.
- Enforced by: no `build.js` check. `Blog-Brain/tools/facts-check.js` catches known-wrong facts in `facts/registry.json` only. Reading pass and a verifier who did not do the research.

### FACT-2. A ratio's top and bottom describe the same set of things. Before you publish a yield, name both populations in one sentence.
- Owner: "a $401,110 typical home I dont think this is the typical price for an investment property here which may be lowering our Cap rate." (2026-09-09, HANDOFF.md:1972-1974)
- Bad: "2.3 to 3.6 percent", a modest rental's rent divided by the price of every home in the ZIP (/invest/rental-returns/)
- Good (recorded): "4.2 to 7.5 percent with a manager and 5.1 to 8.8 percent without one" (rent divided by the cheaper third of homes)
- Enforced by: reading pass.

### FACT-3. A number the brokerage published from experience beats your derivation. When they disagree, suspect your arithmetic, show the owner both with the inputs, and ask before you edit.
- Owner: no words recorded. The writer had replaced the long-term rental page's "5 to 7 percent cap range" with a wrong derivation and logged it as the brokerage's error (MISTAKES.md:580-599).
- Bad: "1.1 to 2.3 percent with a manager" (/invest/long-term-rental/)
- Good (recorded): the brokerage's range restored, linked to the returns page.
- Enforced by: reading pass.

### FACT-4. A superlative needs two sources that agree. Otherwise say "among the highest" and give the range. The same applies to claims about Chapter3.
- Owner: "verify everything is accurate again" (2026-08-31, RL:904)
- Bad: "above $5,000 a year, the highest in South Carolina" (/buyers/coastal-insurance/)
- Good (recorded): "among the highest", with the range (RL:910-912)
- Enforced by: `SALESY` (ranking claims about the firm), claims-scan `superlative`. Reading pass for market superlatives.

### FACT-5. Answer with the number. A percentage says what it is a percentage of. Where the reader pays it, give the dollar amount too.
- Owner: "25%20% more than what why mention it randomly [...] I also dont know how much it costs to get a landlord policy so you get the price for it." (2026-09-07, B4:314)
- Bad: "Landlord policy. About 25 percent more by the trade body's figure. 15 to 20 percent more in Chapter3's files" (/invest/landlord-insurance/)
- Good (recorded): "about $1,700 to $4,400 a year here, 15 to 25 percent more than the homeowner policy on the same house" (B4:342-344)
- Enforced by: reading pass.

### FACT-6. One number, one page that owns it, one dated source. Never copy a figure by hand from another page or a research table.
- Owner: "10.5 may have been older numbers but you got those numbers 10.5 is some areas not every one of them now" (2026-09-07, B5:26)
- Bad: "+10.5% year-over-year" (an /invest/ hub tile with no source)
- Good (recorded): four dated tiles, each linked to the page that owns its figure (PLAYBOOK.md:489-492)
- Enforced by: no `build.js` check. `facts-check.js --stale` for registry entries. Reading pass.

### FACT-7. One client's pattern is not a rule. Say it was one client's.
- Owner: "Is this accurate or are you just saying this because that's what one of our investors do?" (2026-09-07, B4:99)
- Bad: "Which houses work best for voucher tenants?" answered with one investor's buying pattern as fact (/invest/section-8-rentals/)
- Good (suggested): "One client bought three-bedroom fixer-uppers and added a bedroom. That was his plan."
- Enforced by: reading pass.

### FACT-8. Check the owner's facts too, and print only what the source supports.
- Owner: "fact check what i'm saying" (2026-09-07, B4:11)
- Bad (his draft claim): a family that damages a house can "never get another voucher ever"
- Good (recorded): the family "can lose it", for five years, and while they owe the authority money (B4:44)
- Enforced by: reading pass.

### FACT-9. When prose describes what a calculator does, check the prose against the calculator's output.
- Owner: no words recorded.
- Bad: "up to $10,000 of retirement income PLUS an age deduction of up to $15,000 per person" (four state pages). The calculator was right; the two do not stack.
- Good: the combined cap is $15,000 per person (MISTAKES.md:126).
- Enforced by: reading pass. The calculator itself is tested by `test-tax.js`; the prose is not.

---

## LOCAL. Local edge (10 recorded corrections)

### LOCAL-1. Every H1 names the place: Myrtle Beach, Horry County, the Grand Strand, or a town on it. Section headings name it where a reader would.
- Owner: "All of our headers need to be local specific we cant compete nationally with these national sounding headlines." (2026-09-07, B4:300)
- Bad: "How do you finance more than one rental property?"; "Does the government pay on time?"
- Good (recorded): "What goes wrong when you buy a second rental in Myrtle Beach?"; "Does Horry County pay on time?" (B4:93, 373)
- Enforced by: `HEADLINE_PLACE` (H1: error on pages built from 2026-09-07, warning on older pages). The H2 check asks for one keyword or place in one H2 only. Reading pass for the rest.

### LOCAL-2. Every investor page says why to use Chapter3 here, in specific true facts, several times, inside the sections where each fact belongs.
- Owner: "all of the investor strategy pages (brrr, DSCR, 1031 so on) should be focused on why we are the best brokerage to help them in myrtle beach and the grand strand otherwise we just compete with national brands." (2026-09-02, RL:1084-1086)
- Bad: "are what we are worth to an investor." (/invest/strategies/)
- Good (recorded): "are why investors are so successful with Chapter3 Realty" (RL:1077-1078)
- Enforced by: `LOCAL EDGE` (at least four sentences pairing Chapter3 with a place, on /invest/strategies/ only). Reading pass on every other page.

### LOCAL-3. Local and niche facts go above national facts.
- Owner: "do you think national brand answers are up high and not the local or niche stuff that we would be showing in results for?" (2026-09-06, B3:258)
- Bad: /invest/llc/ led with answers any national site gives.
- Good (recorded): the page reordered local-first: every investor client holds title in an entity, the loan closes in the LLC's name, the deed, the 4 percent ruling (HANDOFF.md:1408-1414)
- Enforced by: reading pass.

### LOCAL-4. In a process, each step says what Chapter3 does at that step.
- Owner: "the page should basically just be a step by step of the process and what we do to help each step of the way and super informational as we go." (2026-09-02, RL:1097-1100)
- Bad: a fix-and-flip process whose first step was "buy" (/invest/strategies/fix-and-flip/)
- Good (recorded, his words): "Buy below market. Work with chapter three to find homes in distress and below market price" (RL:1156-1158)
- Enforced by: reading pass.

### LOCAL-5. Not salesy. The reason is a fact, not an adjective. No "call today", "best", "#1", "world-class", "the only brokerage".
- Owner: "The page shouldnt be too salesly and desperate should just read as informkational adn frequently drop casually why we are the greatest." (2026-09-02, RL:1086-1088)
- Bad (his draft, kept off the site): "better than any brokerage in the area" (RL:951, 966-968)
- Good (recorded): "1031 replacement buyers are one of the largest groups of investors we work with" (RL:966-968)
- Enforced by: `SALESY`, claims-scan `superlative` and `firm-experience`.

---

## STORY. Stories and examples (6 recorded corrections)

### STORY-1. A story is real, anonymous and told about a person: "an agent at Chapter3", "one of our agents", or "in Chapter3's files". The company is never the actor in a story.
- Owner: "can you change wording on our stories to be like our agents or an agent at our company or an agent at Chapter3 instead of chapter3 did this ya know?" (2026-09-01, RL:1046-1047)
- Bad: a story told as "Chapter3 did" (flip page, inherited-house story)
- Good (recorded): "an agent at Chapter3" (RL:1067)
- Enforced by: reading pass. `OWNER_NAME_REGEX` catches the owner's name only.

### STORY-2. Never write a quote for Tim Nash, and never write a story that did not happen. Ask in `Blog-Brain/templates/owner-questions.md` and wait.
- Owner: instruction of 2026-09-03, recorded as "draft it, send it to him, wait" (PLAYBOOK.md:375-377). Not verbatim.
- Bad (removed before shipping): "Most Florida movers we talk with", a claim of client conversations that were never recorded (RL:595-597)
- Good (recorded): the sentence addresses the reader instead.
- Enforced by: reading pass.

### STORY-3. Where no real story fits, write a worked example. Label it "Example" where it starts. Write it like a real person and situation. Every number comes from a verified fact row. Give the results; show arithmetic only where one line helps the buyer trust the number (BUYER-4). Never say the people are clients, never say they are not, never write "our client" or "we helped".
- Owner: "just make it example and then talk like its a real person and story" (2026-10-05, Blog-Brain/STANDARD.md:103). Earlier: "i dont understand this question but go ahead and make an illustrative story for it" (2026-09-06, B3:78). "Example with round numbers. Can you make this example interactable as well and let them change the numbers to test their own deals." (2026-09-03, RL:1228-1229)
- Bad: no recorded instance yet.
- Good (the pattern in Blog-Brain/STANDARD.md:103): "Example: Mark and Lisa are moving from Ohio with $400,000 to spend..." Every figure after that line comes from the fact ledger.
- Enforced by: reading pass.

### STORY-4. His stories and Tim's are rewritten in the same literal register as the page.
- Owner: no words recorded. The writer applies FIG-1 to them.
- Bad (from his own story): "on paper", "told him everything", "getting nowhere", "bothered to knock" (HANDOFF.md:1352-1353). Tim's "like toothpicks" (RL:216).
- Good: the literal detail. "She got her home on paper" becomes a statement of what the written lease gave her.
- Enforced by: `REGISTER_REGEX` and the other phrase checks, except that client quotations are exempt. Reading pass.

### STORY-5. A story ends with what happened and what it means for the reader, in plain words. One specific outcome carries the short line "his numbers, not a promise". No blanket "stories may be illustrative" line anywhere.
- Owner: "Spending the reserve. mention how it took him a bit longer but he did it safer and can successfully grow now" (2026-09-07, B4:204)
- Bad: a reserve story that ended without the result.
- Good (recorded): "It took him longer. He did it the safer way, he kept a reserve, and he can keep buying now." (B4:286-287)
- Enforced by: reading pass.

### STORY-6. A story shows how Chapter3 helps. Do not use it to criticize other companies.
- Owner: "Neither of them would have called a company they found in an ad. Replace with this is only one story illustrating how Chapter3 benefits its investors with our relationships." (2026-09-02, RL:1080-1082)
- Bad: "Neither of them would have called a company they found in an ad."
- Good (recorded): "This is only one story illustrating how Chapter3 benefits its investors with our relationships."
- Enforced by: reading pass.

### STORY-7. When he asks for a picture, he means a scene told in words. Do not add a drawing unless he asks for one in those words.
- Owner: "I paint a picture. I didn't mean actual pictures." (2026-08-28, RL:347)
- Bad: a two-panel golf-cart drawing on /buyers/relocating/beaches/
- Good (recorded): the winter cart season told as a scene: the cooler and buckets in the cart, the sand at Garden City, the empty beach (RL:349-352)
- Enforced by: reading pass.

---

## CTA. Calls to action (28 recorded corrections)

### CTA-1. A CTA offers a person's help with the reader's next purchase or sale, in his words. Use the labels he chose. Not "Send the address", not "want the rules priced in", not a check the click does not perform.
- Owner: "i don't like the "Send the address" CTA if you cant think of a good related CTA make it "Call a Specialized Agent"" (2026-09-07, B4:101)
- Bad: "Own a rental and want the lease checked against these rules? Send the address and the lease. We tell you what the unit rents for now and which lease terms to update." (/invest/landlord-rules/)
- Good (recorded): "Have us help buy your next rental" (B3:288)
- His labels on record: "Call a specialized agent"; "Let us make it simple"; "Have us help buy your next unit"; "Want to rent to college students?"; "Want help buying a house for this strategy?"; "Want to buy a new construction home?"; "Want to buy a rental?"; "Have us help find a new rental."; "We help get insurance quotes if you need them."; "Have us find you your next investment"; "Call to learn more"; "Talk to a specialized agent"; "Speak to an expert"; "an investment property for sale" (one, not three).
- Enforced by: `CTA_PROMISE` (a label on a form CTA must read as a request), `CTA_DESTINATIONS` (a button goes to a tool or a contact page). Reading pass for the wording.

### CTA-2. A CTA sits in a section that says something good about the subject and matches what that section is about.
- Owner: "This CTA is great but lets put it in a section where we are saying something good about construction instead of sorta bad" (2026-09-07, B4:169). "Move the CTA down here and separate the 2 ways to find out what a house will rent for" (B4:322-323)
- Bad: "Want to buy a new construction home?" placed under a section on the risks (/invest/new-construction-rentals/)
- Good (recorded): moved to the first section, under a paragraph on why a new house is a simple rental (B4:262-264)
- Enforced by: reading pass.

### CTA-3. Every CTA goes to a working tool or to a contact page, and its label says what really happens.
- Owner: "every CTA on the site needs to either go to a functional value based tool or to a contact us pop up/page. Normal links are for linking to pages; the CTAs are trying to get conversions." (2026-08-25, build.js:1113-1115)
- Bad: "Check the drive from an address", pointing at a lead form (build.js:2217-2218)
- Good (suggested, the pattern in build.js:2219-2220): "Have us check the drive from an address"
- Enforced by: `CTA_DESTINATIONS`, `CTA_PROMISE`.

### CTA-4. Two CTAs inside the article: one about a third of the way down, one before the last section. The phone number is a button.
- Owner: no words recorded. He read a finished page and said there were no CTAs in the article (MISTAKES.md:100). He flagged phone numbers as underlined text twice (MISTAKES.md:108).
- Bad: one CTA, in the hero (45 pages)
- Good: two boxed CTAs in the body.
- Enforced by: in-article CTA warning (under two on a page over 900 words), the tel-link check in a CTA row.

---

## OWNER. Working with the owner (7 recorded corrections)

### OWNER-1. When a request could mean two things he has seen, say in one line which one you are building.
- Owner: "oh im sorry i meant after the animation is done the city spins a little which is cool i wanted more of that after the animation was over." (2026-10-01, MISTAKES.md:711-713)
- Enforced by: reading pass.

### OWNER-2. On a part of the site that works, report the cause and the options, and stop. Change it when he asks.
- Owner: "the pop up was always perfect." (2026-09-13, MISTAKES.md:692)
- Enforced by: reading pass.

### OWNER-3. A command for him says where to run it and what must be running. One command per block. In PowerShell, write `curl.exe`.
- Owner: no words recorded (MISTAKES.md:116-119).
- Enforced by: reading pass.

### OWNER-4. A preview shows the page as a visitor gets it. Never open an overlay or modal automatically in a preview.
- Owner: "whatever you did about the search listing feature reverse it." (2026-08-31, RL:928-929)
- Enforced by: reading pass.

### OWNER-5. When he says a page is unreadable, the checks are wrong, not the owner. Find the class of the mistake and fix every instance of it. "Hard code that" means a check in `build.js` in the same commit as the fix.
- Owner: no single quote. Recorded in MISTAKES.md:181-182 and HANDOFF.md:36-37.
- Enforced by: this file, `REVIEW-PASS.md`, and `edits.jsonl`.

---

## What no check enforces today

These classes have no `build.js` check at all, or only a check on a narrow list:

- **Stories and examples:** none. Whether a story is real, anonymous, told about a person, or labelled "Example" is read by a person.
- **Facts and numbers:** none in `build.js`. Primary sources, matching populations in a ratio, the brokerage's number versus a derivation, one client's pattern, and the base of a percentage are all reading-pass items. `Blog-Brain/tools/facts-check.js` knows only the facts already in its registry.
- **Working with the owner:** none.
- **Page structure, in part:** the short answer (STRUCT-1), defining terms (STRUCT-2), one subject and no problem without a fix (STRUCT-6), and the buyer test (STRUCT-7) have no check. Headings, sub-headers and disclaimer sections do.
- **CTA wording and placement:** only the label verb and the destination are checked.
- **Local edge outside /invest/strategies/:** only the H1 place check runs.
- **Figurative language:** every check is a list. A new metaphor passes all of them.

## Keeping this current

When the owner corrects a sentence:

1. Append one line to `edits.jsonl` with the date, page, the text before, what he said, the text after, the class, his exact words, and the file and line where it is recorded. Leave a field empty when the source does not have it. Never invent a before or an after.
2. Find the class in this file. If the correction is a new kind within the class, add a rule with his words, the bad line and the fix.
3. If he says "hard code it", add the pattern to `build.js` in the website repo with a firing and a quiet control from real site text, in the same commit as the fix (MISTAKES 46, 65).
4. If no pattern can catch it, add a yes/no question to `REVIEW-PASS.md`.
