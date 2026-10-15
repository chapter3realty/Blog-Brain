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

**B29. An aerial can show the wrong neighborhood.** The Deerfield aerial had passed three reviews. When the writer laid the county parcel lines over it, its left half was two other neighborhoods, Southwood and Belle Mer, and the lake and canal in it were theirs. The frame was centered on a point, not on the parcels. Rule: draw the county parcel or subdivision outline over every aerial of a named place before labelling it, and test every label point against that outline. A label that tests outside is wrong, however right it looks.

**B30. A rewrite can undo a verified correction.** Round 9's verifier changed "owners drive golf carts" to "listings say golf carts are allowed" (row 220). In round 10 the writer rewrote the entry for depth and the old claim came back. A new row's cited source can also drift: three round 10 rows cited the wrong row number. Rule: after a rewrite, the writer reads each changed sentence against the final corrected wording of its row, and the verifier checks old rows the rewrite touched, not only the new ones.

**B31. Distance words drift.** Writing "what is nearby" for twelve places, the writer reached for easy words: "a short walk", "just west", "just across SC 707", "a few minutes". The verifier measured all 35 places: eleven words failed, among them a "short walk" of a mile and a store "across" the road that was on the near side. CRAFT 2 now gives each word a measured limit, and the verifier prompt lists the trap.

**B32. The frame moved, the photo did not.** Three affordable aerials were re-centered by changing the frame record and redrawing the labels for it, but the image was still the old export. Every name dot landed on the wrong houses, one in the neighborhood next door, and the captions read backwards. The verifier caught it by re-exporting both frames and matching pixels. `photos.js check` now fails a record whose `frame.bbox_wgs84` and `source_request` bbox differ by more than 2% of the frame; on the round 10 data it fails exactly those three.

**B33. Straight-line distance is not the drive.** A store "about a third of a mile away" was 0.7 mile by road; one "under a mile" was 1.2. For anything the reader drives to, give the drive time (CRAFT 2). `struck-check --batch` now also reads `rules/distance-words.json` and fails "a short drive", "close by", "a few blocks", "just across" and "a few minutes" when the sentence gives no number with a unit. On the round 10 previews it found 12, on three pages, after two verifier passes.

**B34. A distance has two ends.** The gated page measured Huntington Beach State Park to a road deep inside the park (15 minutes); the entrance is 11. Seaside's "a quarter to a half mile from the ocean" came from one dot; measured over all 130 lots, half are farther than half a mile. Rule (CRAFT 2): say where the measure starts, end it where the reader arrives, and measure a range over every lot.

**B35. Corrections read like notes.** Round 10's review graded best, gated and affordable 8 with no high finding. Almost every medium was a true sentence that had become a verifier's note: straight-line caveats, sales counts, "rough guide", measuring points, three errand drives per entry. Writers had pasted the verifier's safe wording. Rule (CRAFT 5): the verifier gives the fact, the writer gives the sentence. The method goes in the ledger and the sources line.

**B36. Count sales in the deed index, not the listings.** The gated page said The Bluffs had 4 sales in a year and "Homes rarely come up for sale". The county deed index had about 34 deeds of $10,000 or more for it in the same window; Seaside had 12, not 6. The rows had counted MLS closings, which miss sales that never touched the MLS. A "few homes sell here" claim, a sales count and a price range all need the deed index joined to the parcels (as the affordable ranking did), and a turnover claim needs a comparison across places, not one count.

**B37. The note voice changes form.** Round 11's review left best, gated and affordable at 8 again, with no high finding. The verifier's voice had moved from "in a straight line" to "deeded", "recorded", "from the middle of the neighborhood" and sentences pasted from a struck list's `use` field. Writers also weakened facts to stay under the number limit ("miles of shoreline") instead of cutting a weaker number. Rules: a struck list's `use` is the approved fact, not copy to paste; the last step before a page goes to review is one read aloud as a top local agent talking to a buyer; when a limit binds, cut the least useful number, never blur the most useful one.

**B38. A second source is a check, not a replacement.** After B36, the gated writer swapped every Georgetown County price from MLS closings to the county's last-sale table. The verifier reconciled the two sale by sale and found the county pull was the worse one: its filters missed whole subdivisions (DeBordieu's Ocean Oaks, Wachesaw East's Cottages at Planters Point), a street spelled with a backtick, and sales hidden behind a later $5 deed. DeBordieu fell from $2 million to $1.7 million on the swap and went back. Rule: when two sources disagree, match them sale by sale and explain each difference; never switch sources wholesale. A county legal description can omit the subdivision name; check the deed index and the MLS neighborhood field too.

## The owner's third read (2026-10-14, after round 13)

Our own reviewers graded four pages 9 of 10. The owner read them and found each one a long, repeated preamble followed by a reporter's notes. The lessons below are the root causes, not the symptoms.

**B39. Data availability chose the content.** Every entry on every page carried the same fields: year built, square feet, number of homes, price, fee, drive. They were the fields our sources (county parcels, deeds, MLS) give for any place, so research gathered them for every place, and the writers wrote what they had. The gated page and the affordable page got the same facts, though a gated buyer and a first-time buyer want different things. Rule (CRAFT 1): before research, write what this page's searcher would pay to know, and research that, place by place. A field that is easy to fetch is not a reason to print it.

**B40. Our checks measured our rules, not the sale.** Fourteen rounds of verifiers, repeat checks and reviewers made the pages accurate, varied and plain, and graded them 9. None of those checks asks the owner's question: would this make a buyer want to live there and call us? Proxies (no repeated sentence, a measured distance, a verified figure) were met while the goal was missed. Rule (CRAFT 8, prompts/owner-eye.md): the review starts with the sale. Does each entry make a reader want the place? Could the paragraph be about any other place? Is there a way to act on each place?

**B41. The kit built the preamble.** The page kit offered a hero, a glance row, a "what are you looking for" legend, a numbered map, a comparison table, illustrations and an ItemList. Each page used most of them, so the list of places appeared three or four times before the first place, with pictures nobody could read. Rule (CRAFT 3): the first place starts within one phone screen of the short answer. The list of places appears once, as the selection guide, and the guide says what each place does best. One map. A comparison table only if a reader would use it, and simple.

**B42. A reporter's voice does not sell.** The verifier's careful wording, the "facts" line, counts and ranges made each entry read like a record. A buyer wants to be sold on the place by someone who knows it. Rule (CRAFT 5): write like the best agent in town showing the place: lead with the best thing a buyer could not have guessed, then what a normal day there is like, then the trade-off, then the price in one sentence, then an offer to see it. Gloss what anyone can see (a pond, a pool). Every claim still rests on a verified row; selling is choosing and ordering true things, not inventing.

**B43. Every place needs a next step.** No entry offered a way to act on the place the reader had just been sold on. Rule (CRAFT 3): each place ends with its own short offer, for example "Book a showing in Wachesaw Plantation", which goes to the contact form with the place named.

**B44. Design is part of trust.** The owner called the graphs and icons dated. A page that looks old reads as old information. Rule (CRAFT 4): batch 2026-10-b pages use the modern "liquid glass" style (translucent panels, soft blur, light borders) for the background, cards, icons, maps and charts, with contrast checked. A chart says one thing a reader wants at a glance, and can carry each place's best feature, not only its price.

## Round 14 rebuild

**B45. A correction is a new sentence, and it needs its own check.** In round 14 two fresh verifiers read only the sentences writers had reworded after a correction. On affordable, 2 of 18 had drifted. On gated, 13 of 46 had drifted. The drifts were small:
- "the" in place of "a" ("the daily sunset gathering place");
- a dropped "several" or "native";
- "covers the neighborhood" where the source says only "coverage is 24 hours";
- a source's one sentence turned into a general rule;
- two resales written as a price range.

The struck list catches old wording coming back. It cannot catch new wording that goes past the source. Rule (CRAFT 8, WORKFLOW): after a writer applies corrections, a verifier who has not seen the page before reads every corrected sentence against the source before the review. Writers do not hedge a claim they cannot stand behind, for example with "(the club's account)". They state the part the source supports, or cut the claim.

**B46. Five leads wrote five pages in parallel, and the same facts landed on two or three of them.** Each lead researched its own places. Nobody owned the places the pages share: Tidewater, Barefoot, Grande Dunes, the Golf and Yacht Club, The Farm, Cherry Grove, Surfside and Pine Lakes. The round 14 reviewers found the gated page's club facts on best neighborhoods nearly word for word, and the flytrap preserve leading three pages. The owner had named this: "the same information was given to gated communities as you gave to affordable communities". Rule (CRAFT 3, WORKFLOW): before writing a batch, list every place two pages share and assign each shared fact to one page, by which reader cares most. The other page takes its own angle. The record is `batches/<batch>/review/SIBLING-OWNERS.md`.

**B47. Every page ran 3 to 4 phone screens before its first place.** The order the brief set was the hero, the short answer, the offer box, the guide, the map, then the first place. Each part was useful, but together they were too long. The dark offer band alone was about 300 to 550 px, and three stacked map panels were 1.8 screens. Rule (CRAFT 3): measure the top in pixels before writing it. A top offer is a slim bar, and the big band goes at the end. A map on a phone is short and wide. The page says its count of places once.

**B48. A few listings describe the homes we saw, not every home.** In round 14c the affordable writer described the homes in six places from 2 to 5 listings each. The check found eight sentences that made those few into a rule: "Most are three-bedroom", "The townhomes have two stories", "the three-bedroom plan puts the main bedroom downstairs". A middle price was also written as every sale ("Expect to pay"). Rule (writer prompt): say what a small sample shows as what we have seen ("The townhomes we've seen for sale here have ..."). Say a typical price as a typical past sale ("usually sold for about $X last year"). An agent who has walked through three homes says so; that is also the selling voice. Amended after the 14d review: that fix put the sample in the copy ("The two we saw for sale ...") in 7 of 12 entries, which is the reporter's voice again. The better fix is a source that covers every home: county records of each parcel, or the builder's plans. Use listings for one detail at most.

## To add after the review

The owner's-eye review, the integration, and the owner's own response will add lessons here.
