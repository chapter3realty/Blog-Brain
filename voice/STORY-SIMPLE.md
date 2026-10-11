# The simple story test

A reader should understand a story in one read on a phone. The owner read the Del Webb at Grande Dunes example and called it "impossible to understand" (2026-10-11). It asked the reader to hold a three-part rule, two visits and a count of nights. This page is the test that would have caught it. The research is in `research_notes/Short stories for retiree buyers/simple_stories.md`.

Use it with `STORY-CRAFT.md`. All of STORY-CRAFT's legal limits still apply. Every story runs 4 to 6 sentences.

## The test

A story passes only if every answer is yes.

### Before writing

1. **Retell first.** Write the story in one sentence: "[Who] wants [one thing], but [one problem], so the agent [one act]." If it needs a second "but" or a second want, cut one.
2. **Child sentence.** Write the problem the way a 10-year-old would say it, in 12 words or fewer, with no rule words. "The rules only let grandkids stay part of the year." If you cannot, the problem belongs in the FAQ, not in a story.

### On the draft

3. **One want, one problem, one fix.** One buyer or one couple. Other family appear only as part of the want.
4. **No counting.** The reader never adds, subtracts, or compares two dates or two numbers. At most one number tied to the problem, and the reader does nothing with it. A small count of people ("two grandsons") may sit beside it. If the story must compare, give the comparison in words ("about two weeks more than that"), never as two figures to subtract.
5. **No "if".** No "if", "unless", "except", "would have" or "could have". The rule's conditions and exceptions stay in the FAQ above the story.
6. **One timeline, moving forward.** No second deadline to hold beside the first. No flashback. No second check or re-count. A want may name one plan with two parts ("all summer and again at Christmas") as long as the reader never adds them up; the story gives the total in words.
7. **No word to look up.** No "covenant", "PUD", "Zone AE", "the city's plan", "under 19", "any 12 months in a row". Say what the rule does to them.
8. **One thing to picture.** A dog, a calendar, a patio, a contract on the table.
9. **Short.** 4 to 6 sentences. Most under 20 words; none over 25. Nothing the reader must scroll back to check.
10. **STORY-CRAFT limits.** **Example:** label, present tense, the agent acts with a service on record, a real problem from the page, no prices, nothing about who lives there, and the ending is what the buyer can now do.

### The cold retell (checker)

11. Read the story once on a phone, out loud, at normal speed. Do not reread. Cover it and write in one sentence what happened. Compare it with the writer's retell. It fails if yours is missing the want, the problem or the fix, or if you stumbled or wanted to reread.
12. For a story the owner flagged, or a new kind of story, ask someone who has not seen the page to read it once and tell it back. Do not help. A wrong retell is the story's fault, not the reader's.

## Why the four drafts failed

| Page | What failed |
|---|---|
| Del Webb at Grande Dunes | Counting nights (4), a rule with three parts (7), two visits in one 12-month window (6), a re-count (6), "If the visits had not fit, they could have" (5) |
| Del Webb North Myrtle Beach | "The city's plan for the neighborhood" (7); the story is otherwise close |
| Myrtle Trace | "A lot that backs onto the golf course or a pond" is a rule with two cases (5, 7); "where it goes and how it is built" adds detail to hold |
| Seasons at Prince Creek West | "The high-risk flood zone" and "the federal flood map" (7); first sentence has no want (1) |

## The four stories, as published in version 13 (2026-10-11)

The researcher's drafts were checked and tightened before they went on the pages. Three changes, each a lesson:

- A rule never acts ("the rules say", "the rules only let"). A person or a fact does (RULES 1, the kit's check).
- Vague is not simple. "The rules only let a grandchild stay part of the year" leaves the reader asking how long. One plain number the reader does nothing with ("up to 90 nights a year") and one plain comparison ("about two weeks too long") is simpler than a guess.
- A cold reader (2026-10-11) stopped at "their plan is about two weeks too long" ("Too long for what?") and counted in their head. The fix puts the limit in its own sentence and the comparison in the next: "A grandchild can stay up to 90 nights a year. Their plan is about two weeks more than that." The same reader did not know what a dog run is; the story now says "a small pen beside the house".
- Every claim must be true as written. "All summer plus Christmas is too long" is not certain for a short summer. "Their plan is about two weeks too long" is true because the story sets the plan.

### Del Webb at Grande Dunes

**Example:** Bill and Nancy are moving from Ohio, and they want their two grandsons to stay with them all summer and again at Christmas. They like a villa in Del Webb at Grande Dunes. Before they make an offer, their Chapter3 agent reads the neighborhood's rules with them. A grandchild can stay up to 90 nights a year. Their plan is about two weeks more than that. Bill and Nancy cut two weeks from the summer visit and make their offer.

Retell: Bill and Nancy wanted the grandsons all summer and at Christmas, but that is longer than a grandchild may stay, so the agent caught it and they cut the summer visit before the offer.

Child sentence: Grandkids can only stay about three months a year.

### Del Webb North Myrtle Beach

**Example:** Frank and Joyce plan to spend summers near their son in Michigan. While they are away, they want to rent their new house to vacationers by the week. They pick out a new house in Del Webb North Myrtle Beach and are ready to sign the builder's contract. Before they sign, their Chapter3 agent reads the renting rules for the neighborhood with them. Every renter there must stay at least 30 days, so they cannot rent by the week. Frank and Joyce plan on one renter for the whole summer, and they sign the contract.

Retell: Frank and Joyce wanted weekly renters, but renters there must stay a month, so the agent caught it before they signed and they planned on one summer renter.

Child sentence: Renters have to stay a whole month, not one week.

### Myrtle Trace

**Example:** Pat is moving from Erie, Pennsylvania, with her dog, Max, and she wants a fenced back yard where he can run. She likes a house in Myrtle Trace that backs onto the golf course. Before she makes an offer, her Chapter3 agent reads the neighborhood's rules with her. A house on the golf course cannot have a fence around its back yard. The agent shows her that a dog run, a small pen beside the house, is allowed once the HOA approves it. Pat makes her offer, with a plan for Max's dog run beside the patio.

Retell: Pat wanted a fence for her dog, but that house cannot have one, so the agent found that a dog run is allowed and she made her offer.

Child sentence: She is not allowed to put a fence around her yard.

### Seasons at Prince Creek West

**Example:** Carol and Jim are moving from Buffalo, and they want a house in Seasons that backs onto the woods. They find one they like and plan to make an offer that night. First, their Chapter3 agent checks the government's flood map for that house. The back of the house is in the high-risk flood area, so their lender will require flood insurance. That is a yearly bill Carol and Jim had not planned on. The agent gets them a quote that afternoon, and they make their offer that night knowing the cost.

Retell: Carol and Jim liked a house that turned out to need flood insurance, so the agent got them a quote that afternoon and they made their offer knowing the cost.

Child sentence: The house needs flood insurance they did not know about.

## The machine checks

`tools/story-check.js` refuses a story that breaks tests 4, 5 and 9: more than two different numbers (digits or words), a price, any "if", "unless", "except", "would have" or "could have", fewer than 4 or more than 6 sentences, or a sentence over 25 words. `score.js` runs it on every page with a story (STANDARD T8), and the batch kit runs it when it builds a story. Tests 1, 2, 3, 6, 7, 8, 11 and 12 need a reader.

## Notes for the checker

- Each rule in these stories matches the page's own fact: Grande Dunes, guests under 19 up to 90 nights in any 12 months in a row; North Myrtle Beach, renters stay at least 30 days; Myrtle Trace, no back-yard fence on a golf course or pond lot, and a dog run once the HOA approves it; Seasons, if the house is in the zone the lender requires flood insurance. The exact rule stays in the FAQ. The story gives only what it means.
- The services are on record: reading the HOA documents for rules (`stories.json` hoa-rental-bans-filtered, ny-buyer-rules-fit) and an insurance quote before the offer (insurance-quote-before-offer).
