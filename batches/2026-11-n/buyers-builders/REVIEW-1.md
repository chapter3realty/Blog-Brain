# Review round 1: what changed, by finding

Page /buyers/new-construction/builders/, spec `specs/buyers-new-construction-builders.js` (version 2). Every new fact is a VERIFIED-BY-FIXER row (F1 to F10) in facts.md, and each is held by a `must()` line in the spec.

## Blocking

1. **Critic, lender sentence ("8 in 10 buyers used it").** Cut, with every percentage. One plain sentence after the profiles: "Each of the five owns all or part of a mortgage company, and most of their buyers who take a mortgage use it. That choice is separate from the house." (F10). Each profile names the company only.
2. **Critic, map caption ("each dot is a new home").** The map now gathers points into cells of about 1 km per builder, and each dot's area grows with the homes it stands for, the five largest drawn on top. Caption: "Each dot is a place where a builder sold new homes. A larger dot stands for more homes." Labels are larger (21 in the 440 frame); Surfside Beach, Loris and North Myrtle Beach moved off the dots and inside the frame.
3. **Critic, reader, owner: "Five community companies".** Taken off the ranking (critic option 2, owner's second choice). No source ties them to one builder (row 15 struck; chesapeakehomes.com is a parked domain, so it cannot be checked). The chart is now 15 builders, and "Each bar is one builder" is true. Title, H1 line, hero tile and short answer say 15 (F1). One sentence under the chart names them once: "Five more sellers each sell new homes in one community and carry its name, such as Waterbridge SC LLC in Waterbridge. Their deeds name no builder, so we count them apart." The town table names builders only; D.R. Horton now leads Little River (F3). Totals stay 5,277, now worded "new homes sold to their first owners".
4. **Reader, custom and own-lot builders.** A short paragraph at the end of the first section says the page covers builders that sell in their own communities, that a builder on your own lot works under a construction contract, that the license check applies to that builder too, and links the guide's build-time section (/buyers/new-construction/#how-long).
5. **Critic, reader, owner: Dream Finders and Ashton Woods asking above their sold range.** The asking-price column is gone. No verified row explains it. The table is now Builder, Typical price range, For sale now (the reader found the for-sale counts useful).
6. **Owner, the photo.** Cut (no house in it, an old date, clutter beside the numbers). Photo credits and the share image went with it. The partner's street photos are the fix (NEEDS 14). critic.mjs now blocks "blog with no real photo" at 1440; I chose the owner's instruction ("Cut it, or wait for the partner's photos") over the tool. A Commons search found no free photo of a new Horry County street.
7. **Owner, the homes never described; five lists per builder.** New section "What are the five largest builders like?": one entry each for D.R. Horton, Lennar, Ryan Homes, Pulte Homes and Meritage Homes, with the price, Where, The homes (type, bedrooms and size of the homes for sale now, F6; Ryan from NVR's own words, since only 1 is listed), Warranty and Lender. The old communities list, owners list and warranty table are gone. The other builders worth a line (Mungo, Great Southern now Stanley Martin, Starlight and Ashton Woods, Dream Finders, Beazer, Toll) are one list, each entry with its towns, owner and warranty. The chart and the town table stay for comparing.
8. **Owner, too many numbers; method sentences.** Cut "Builders sold about 3 in 10 of the 17,774..." and "D.R. Horton's pace rose...". Cut every lender percentage and "capture rate". Cut the sold counts in the profiles ("The second most"), the repeated prices in the other-builders list, and the price-range sentence in the prices section. Score P2 went from 4.3 to 3.6 numbers per 100 words.
9. **Owner, method and repetition.** "We counted homes sold in county deeds. We do not rate build quality." left the short answer; the chart note now ends "We count homes sold and do not rate build quality." "county deeds" is down from 9 to 5 (notes and sources), "before you sign" from 9 to 2. "which the county records as Indigo Grove" and "We count the deeds of that company under Dream Finders" are gone.
10. **Owner, too many dates.** Reading text now holds two ("in 2026" for Stanley Martin and Beazer); score P3 passes. May 4, October 20, December 2018, 2023, fiscal year and the month ranges are in notes and sources only.
11. **Owner, a fact said twice.** Cut the paragraph "About 1,090 new homes were listed..." before the budget block, and the sentence before the contract offer box.
12. **Owner, "Five community companies" unanswered.** See 3.
13. **Owner, hard words.** Table headings are "Typical price range" and "For sale now". "capture rate", "joint venture", "trade name", "fiscal year" and "Middle asking price" are gone from the reading text. Meritage's joint venture reads "It shares a mortgage company with a partner". The mailing-town note moved into the section's first paragraph. "options" is explained: "Upgrades are the features you add, which builders call options."
14. **Owner, Del Webb.** Pulte's entry names Del Webb North Myrtle Beach (linked to its page) first, says "Del Webb is PulteGroup's brand for active adults" and links the 55+ guide. FAQ added: "Is Del Webb part of Pulte?" Pulte's count includes Del Webb North Myrtle Beach: all 114 of Pulte's North Myrtle Beach sales sit within 800 m of its sales office (F4, F5).

## Nits taken

- Critic and owner: photo credits text gone (no photo).
- Owner: town table names the builders only, no counts.
- Owner: the license FAQ is now two short sentences.
- Owner and reader: the "best builder" FAQ points to the checklist as the way to judge one, and no longer repeats the count.
- Owner: a plain line on what the builder's lender means (see 1), with the guide link.
- Reader: "Your own inspection" added to the checklist (now seven things), linked to the guide's inspections section.
- Critic: "Toll Brothers: towns" under a communities lead-in is gone; Toll's entry names SayeBrook.
- Critic: the 176-in-frame caption is gone with the photo.

## Nits not taken, and why

- Reader: who pays our fee at a builder. Owner question O1, still open; the guide owns it.
- Reader: HOA fees by community, minutes to the beach. Not in a verified row; the HOA item in the checklist and the 55+ and community pages cover what we have.
- Owner: dot colours hard to tell apart on a phone. The key names each colour and the town table carries the numbers; the larger dots now separate the builders better.
- Owner: the site footer line. Shared partial (NEEDS 15).
- Critic: read.wall at 320 (1,015 px from "Three communities..." through the offer box). A tool false hit: the span includes the offer box. Unchanged.
- Critic: two sale counts on the site (5,108 vs 5,277). Already NEEDS 2, for the lead.

## Gates after the rebuild (2026-11-08)

- mkpage: built, 3,442 words in main.
- critic.mjs at 320, 390, 1024, 1440: 0 blocking at 320, 390 and 1024; at 1440, 1 blocking "blog with no real photo" (item 6). Earlier map overlaps (Atlantic Ocean against Surfside Beach, North Myrtle Beach cut off) and a 320 px price-table overflow were fixed before this run. Shots in `wfn/buyers-builders/shots2/`.
- score.js: all ok except P2 97% (3.6 per 100 words), T2 50%, S5 (sitewide share image; NEEDS 11) and S8 (no inbound links; NEEDS 1).
- claims-scan 0, house-claims 0, facts-check 0 on this page.
- build.js audit: this page's blocking items are only "missing from sitemap.xml" and "orphan" (the lead's, NEEDS 1 and 10). An "announcing an absence" hit on "are not on the chart" was fixed.
