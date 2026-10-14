# Lessons from batch 2026-10-b: five buyer pages

Written 2026-10-13, during the batch. Batch 2026-10-a taught 65 lessons (`lessons-2026-10-a.md`). This file holds only what batch b added or proved. Each lesson is general: the five pages are the evidence, not the subject.

The batch: best neighborhoods, gated communities, homes with no HOA, The Farm at Carolina Forest, and the most affordable places near Myrtle Beach. Five writers, five verifiers, five cold readers, one independent reviewer, one integrator.

## What the cold readers found

Every one of the five pages scored 100 on every gate before the readers saw it. Every reader still wrote "I came for ___ and the page never told me". That is five blockers the gates could not see.

**B1. The reader wants the yearly cost in dollars.** Four of five readers came, in part, for what owning would cost them each year. The pages gave pieces: a fee a month, a tax rate per $100,000, a flood policy "if required". A reader does not add up pieces. Rule: any page about where to buy gives one line for the typical home, "about $X a year besides the mortgage", built from verified rows, with its parts named. Never a mortgage payment or a rate. (CRAFT 1.)

**B2. Spell out every abbreviation once, even the common one.** Two readers did not know what an HOA fee pays for, on pages that used "HOA" 28 times. The writers knew the word too well to see it. (CRAFT 5.)

**B3. Answer the question you cannot answer.** The gated reader came to learn whether a gate makes a place safe. Fair housing rules out rating a place. The page now says what a gate does, what it does not do, that we rate no place as safe or unsafe, and where the official public data is. Silence would have read as hiding. (CRAFT 1.)

**B4. The reader's own constraint leads.** The no-HOA reader owned a boat and a work truck. The page mentioned a boat once, five screens down. The must-answer list had "what you gain"; it did not have "what will the town let me park". A must-answer list built from searches misses the reason behind the search. Ask why this person typed it. (CRAFT 1.)

**B5. Price on the first screen when the reader is deciding whether to look.** Three readers found the typical price eight or nine screens down. (CRAFT 3.)

**B6. "Ask an agent" is a non-answer when the page has the answer.** Readers counted every "ask us" and read it as distrust of the page's own facts. Use it only where the answer depends on the one house, and say what gets checked. (CRAFT 5.)

**B7. One page, one value.** The readers caught three different drive-time ranges on one page, and $70,000 against $71,000. Gates check a fact against the registry, not against the same page. (CRAFT 5; a scorer rule is a candidate.)

## What the verifiers caught in the round-2 facts

Writers added 37 new rows to answer the readers. A separate verifier checked each. None was invented, and 2 were wrong as applied. More than 40 page sentences changed. Every kind of error below was a sentence saying more than its source (CRAFT 2, "A sentence may not say more than its source"). These are new forms of it.

**B8. A definition applies only where its source applies it.** The Defense Department defines "site closeout" (land usable without limits, no more cleanup money) in a footnote about closed bases. The page applied it to a different program's land. The sentence was true of the word, not of the place. Check that a definition and the thing it describes come from the same program, law or table.

**B9. An average describes the group it was taken from.** FEMA's typical flood policy cost for a ZIP code mixed second homes, which carry a surcharge, with homes people live in. The page was about a home you live in: $1,300, not $1,500. Match the group behind a number to the reader's case.

**B10. A total on two pages is built from the same parts.** One page counted a county stormwater fee in "tax", another did not. Each total was correct and the two disagreed. Name the parts of every total, and use the same parts wherever it appears.

**B11. "No rule" needs a search for the rule.** "The county has no limit on a work truck on your lot" was wrong: a home-business section limits service vehicles. Before saying a law is silent, search the whole code for the opposite, under other names (home occupation, service vehicle, commercial vehicle).

**B12. "Not online" and "online" are two claims.** The county's deed index is online; the documents are not. Say which part.

**B13. A public data link must do what the copy says.** A "crime map" was a map of calls for service, part of its data months old. A "search by address" site searched by agency. Open the link, use it once, and describe it as it works. If it would mislead, leave it out.

**B14. An aerial shows shapes, not staff.** A building between two lanes with gate arms is what the picture shows. "Gatehouse" with a guard is a claim the picture cannot carry.

**B15. "Only", "none" and "every" need every case checked.** "None of these is on the beach" was false for two places. Before an absolute word, check it against every item on the page.

## Process

**B16. Shared index, shared commits.** Five writers worked in their own website clones but committed to one Blog-Brain checkout. The stop hook made the coordinator commit everything, so writers' files went out in "WIP" commits. One writer's commit then held another writer's deletions, and had to be reverted. Rule: each agent commits only its own paths (`git commit -- <paths>`), and the coordinator's work-in-progress commits are labeled as such. Better still: each writer gets its own Blog-Brain worktree too. (WORKFLOW.)

**B17. Verify per page as each writer finishes.** Running one verifier per page as soon as its writer reported kept the line moving. No page waited for the slowest. The verifier's finding went back to the same writer, who still had the page in mind.

**B18. A cross-page check needs one agent who reads all the pages.** The neighborhoods verifier caught The Farm's tax mismatch because it was told to compare. Every verifier prompt should name the sibling pages that state the same facts.

**B19. The site's own banned-word list shapes the copy.** The build refuses "sets" and some personification. A verifier's safe wording can fail the build; the writer then rewords. Give verifiers the site's banned list.

**B20. A shared tool change can move a live page.** Batch b widened the shared map data. Three of batch a's live pages would have drawn different roads on their next rebuild, with no copy changed and no gate failing. The integrator caught it only because it rebuilt the old pages with the new tools and compared. Rule: before a batch ships a changed shared tool, rebuild every live page that loads it and compare byte for byte. If anything moves, ship the batch its own copy of the tools (`tools/blog-brain-<batch>/`) or make the change opt-in.

**B21. Review rounds converge when each finding is graded.** Round 1 of the owner's-eye review gave 8, 8, 7, 7, 7 with no severity. Round 2 asked for high, medium or low on each finding: the pages rose to 9, 9, 8, 8, 8, and the medium items were few and concrete. Asking a reviewer to grade each finding, and to say when a page is ready, stops the loop from inventing work (CRAFT 8, "Stop by rule").

**B22. A page can score 100 with a broken layout.** The gated spec never loaded the photo stylesheet. Its two aerials ran 1,200 px wide on a desktop, and the credit was a bare blue link. Every gate passed, and two reviewers missed it. The third caught it at 1280 px. Rule: every reviewer looks at desktop width as well as phone width, and a check that every photo on the page has its styling belongs in a gate (candidate: a scorer or image-meta rule that fails a figure whose stylesheet is missing).

**B23. Repetition moves to the next field.** After round 7, the writers cut the repeated price line. The repetition came back in a new field: street names in every entry, rice in every history, the year each course opened, lot counts. Cutting one sentence does not fix the cause. The cause is research that gathers the same fields for every place. The fix is research that looks for what only this place has (CRAFT 5, "Say something new, every time"), and a check that counts shapes and devices, not words.

**B24. A repeat check belongs in the gates.** `tools/repeat-check.js` looks for five things: identical sentences, a sentence shape in three or more sections, a device in more than 40% of entries, thin entries, and theme words. Its first runs found repetition on all five pages that two reviewers had missed. A labelled line in every entry ("The catch:") counts as a device. The affordable writer moved the trade-off into the table instead. `--strict` is now part of CRAFT 8.

**B25. Filler is a class, not a sentence.** The owner banned "Your own doors, locks and alarm are still yours to choose." The class is any sentence that is true of every place, that reassures, or that tells the reader what they already know. Each writer swept for the class, not the sentence.

**B26. A ranking drawn from records must include new homes.** Dropping sales without a county building value dropped every new home, because the county had not yet assessed them. The affordable ranking was biased toward old houses until the filter was removed. One county subdivision name can also cover two places miles apart. Check the map, not only the name.

**B27. We do the work.** The owner: "never say in any page you check anything say we check." A page that teaches the reader the agent's job (how to check a deed for an HOA) is cut. One line says what we check.

**B28. Cutting a repeat leaves a hole.** Round 9's review graded gated and affordable 7. Both cured round 8's repetition by cutting: the rice lines, the designer years, the street lists. Nothing new went in. Gated entries fell to a median of 78 words, three of them 39 to 47; affordable's places became 59-word spec sheets over a table that repeated them. The fix for repetition is a new fact, not a shorter entry. `repeat-check --strict` now fails an entry under 60 words, or a median under 90 on a list of four or more. Run on the round 9 pages, it failed exactly the three the reviewer failed and passed the two it passed.

## To add after the review

The owner's-eye review, the integration, and the owner's own response will add lessons here.
