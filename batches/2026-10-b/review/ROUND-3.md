# Batch 2026-10-b, round 3: what the owner's-eye review found

An independent reviewer graded the five pages on 2026-10-13 (`OWNER-EYE-*.md` in this folder): The Farm 8, affordable places 8, best neighborhoods 7, gated 7, no HOA 7. The bar is 9: a page the owner would not change. Each writer gets the list for its own page. These rules apply to every page.

1. **A story is new to this site.** Two pages reused the arc and details of a live, approved story with new names (Seasons, Myrtle Trace). A reader who reads both pages sees a template. First look in `stories/stories.json` for a real story that fits this page. Otherwise write a labelled example with its own arc, built on this page's deciding fact. The agent does only what Chapter3 records as a service (`stories/stories.json`). It runs 4 to 6 sentences, passes `tools/story-check.js` and `voice/STORY-SIMPLE.md`, and sits near the end. Not every story should end with "the agent checked, and they made the offer".
2. **One button label per page.** Use the same words for the offer everywhere on the page.
3. **Every map dot has a name or a number in a key, and every label sits at its own place.** A pin sits on the thing its label names, not on the road beside it.
4. **No method sentences in the body.** "Our measure of price on this page is...", "by the county's tax estimator", "fiscal year 2024 data": these go in the sources line. The body says what the number is in plain words.
5. **Shorter.** The approved live Myrtle Trace page has about 1,800 words. Cut every paragraph that repeats a table, a card or an earlier section. Aim for 25 phone screens or fewer (best neighborhoods: 32 or fewer).
6. **One fact, one value across the five pages.** Where two pages give a figure for the same place, they say the same thing, or each names its own group in the same sentence ("the gated sections", "houses for sale with no HOA fee").
7. **No hedge on a number the reader plans by.** "Appears to be" a fee is not usable. Find the primary source and state it, or leave it out.

Then rebuild, rerun every gate, refresh the preview, commit only your own paths (`git commit -- <paths>`), push, and report. Do not grade your own page.
