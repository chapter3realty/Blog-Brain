# Review 1: /buyers/relocating/ (fix round)

Reviewer: pass=false, score 8. Two blocking findings, ten nits. Fixer, 2026-11-10. Spec: `specs/relocating.js` in the website working copy. Copies from before this round: `scratchpad/relocating.spec.before-review1.js` and `scratchpad/relocating.index.before-review1.html`.

## Findings declined, and why

- **End band alignment at 1440, and the 8 px at 390.** Declined for this round. The centered end band is the closing-band style copied from /sell/, which the owner approved. Moving it on this page alone would make this hub differ from its siblings. If the lead wants the band to line up with the text column, it is one rule in the shared style, for every glass page at once.
- **Sources block and FAQ wrap widths at the bottom.** Declined: both widths come from `tools/mkpage.js` (the FAQ and sources markup). This round touches only this page's spec.
- **"Few visuals" at 1440 (critic warning).** Kept as is, as the reviewer allowed. One photo and one table for a hub with no place of its own. A second photo would be decoration.
- **Video tours in step 2.** Still waits on owner question 1 (facts H). Step 2 now says we tour the homes for the buyer, the wording facts H set for the time before an answer.
- **The edge feed title and the sibling's out-of-state section.** Lead items in BUILD.md (1 and 2). Not this page's files. The lead should confirm the feed shows homes once deployed.
- **"Updated June 12, 2026".** `node build.js dates` sets it before deploy. This round does not run it, per the brief.

## What changed (appended after the rebuild)

Blocking 1, repetition. Each fact is now said once.
- Step 7 lost the no-video-notary sentence and the "may close by mail" sentence. It now reads: in a closing by mail the papers are sent to you to sign and return; the attorney must be reachable by phone or email; you sign the deed or mortgage before a notary where you live, with two witnesses, and it is filed here; a lender may set its own signing rules (rows 24, 22). "records here" is now "is filed here".
- Step 6 lost the lender-choice sentence. It keeps row 19 and row 21.
- The FAQ entry "Do I have to be at the closing?" is cut. The short answer and step 7 answer it.
- FAQ "Can I sign my closing papers on a video call?" now carries row 23 (verifier's wording) and one plain line: ask your closing attorney how you will sign.
- FAQ "Who picks the closing attorney?" now carries row 20 (verifier's wording) and is the only place it is said.
- FAQ "Can I move to Myrtle Beach before I have a job here?" is row 26 only ("Yes", then the line labelled our clients' experience). The remote-job line (row 25) stays only under the jobs link.
- New FAQ "Which state do most out-of-state buyers come from?" keeps the FAQ at four (score A7 needs 4). It gives North Carolina's 916 and New York's 438 (row 11), read from hub.json, which the page shows only in the table.
- The lead form's opener no longer repeats the end band ("Leave your name and number.").
- repeat-check --strict: passes (0 identical, 0 near, 0 shapes). BUILD.md said it passed before this round; it did not.

Blocking 2, technical wording. Step 5 is now "A home inspection is the buyer's job in South Carolina. We line up the inspection." Both are row 18's wording; the 27-50 link sits on "the buyer's job". The disclosure-law and agents-have-no-duty sentence is gone. Step 7 went from six sentences of rules to four plain ones.

Nits taken.
- Step 2: "We tour the homes you like for you, and we tell you what the listing photos do not show. If you want to see a house yourself, we plan the showings around your trip." The first sentence is the facts H interim wording; no video.
- The wow: the short answer now says "In Myrtle Beach, a January day averages a high of about 56 degrees." (row 4). The weather line keeps only row 5. The golf carts (row 7, verifier's wording, two sentences) are one line under the beaches guide. The state park horse paragraph (row 8) is cut; BUILD.md lead item 3 already gives it to the beaches page. Its source link (Myrtle Beach State Park) left the sources list.
- The photo moved under "Where should I live?". Its caption now says what it shows: "Garden City Beach from over the ocean in 2011: raised houses and condos along the sand, with the salt marsh behind them." Credit line to match.
- H2 opener: "We do most of the work here while you stay where you are. These are the seven steps, in order."
- "About 8 in 10 out-of-state buyers here come from these ten states." Table note: "Buyers: Horry County homes bought in a year by people with a tax bill in that state."
- Step 1: "Start with our 13 towns near Myrtle Beach, compared."
- FAQ title "Questions about relocating": the "On this page" label is two lines at 320, not three. No page links to the old anchor.
- Found on the shots: a link inside a guide's fact line was set to display:block and broke the sentence. Links inside those lines are now inline.

Gates (final build).
- score.js (SCORE_TODAY=2026-11-09): 97/100 (SEO 100, AEO 100, Human 97, Trust 79), no FAIL. Partial: P7 one picture for 1,050 words, T2 one first-hand sentence. The old P10 partial ("law does not limit") is gone.
- repeat-check --strict and structure-check --strict: pass. house-claims: 0. struck-check (buyers-relocating-struck.json): no struck wording. claims-scan: 0. facts-check: 0 on this page (the 4 sitewide are the old ones on from-massachusetts, from-virginia and llms-full.txt).
- build.js check: OK. build.js audit: only the two mkpage date lines (build.js dates before deploy) and the note on no attributed sentence from a licensed person.
- critic at 320, 390, 1440 (preview on 8871): 0 blocking; one warning at 1440, few visuals (1 photo, 1 table), as before.
- No em dash, no sentence opening with "So", no "Here is", no copy sentence over 28 words. No BrickWood, rate or payment. Request buttons: /contact/ four times, and the phone.
- Shots: scratchpad/rv1/buyers-relocating/shots2/ (320, 390, 1440), slices viewed in scratchpad/rv1/buyers-relocating/cut2/.

Files touched: specs/relocating.js, chapter3realty/buyers/relocating/index.html (rebuilt by mkpage), this file.
