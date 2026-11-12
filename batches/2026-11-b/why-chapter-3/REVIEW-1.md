# Review 1: /why-chapter-3/ (pass=false, score 8), fix round

Fixed 2026-11-10 in the website working copy, `specs/why-chapter-3.js`, rebuilt with `node tools/mkpage.js specs/why-chapter-3.js`. New facts: rows 33 and 34 in facts.md (VERIFIED-BY-FIXER, the statute's own definitions, from the saved copy of SC Code Title 40 Chapter 57). Row 20 has a fixer note on its new wording.

## Blocking: the flood finding read as a mark against our own search

Lead note 3 (which MLS field fills `flood_zone`) could not be answered here. The CRM repo, `chapter3realty/chapter3-crm`, holds the mapping (`src/lib/home-search/mls-filters.ts`, named in `idx-lib/features.js`). Adding it to this session was refused, so I did not read it. Option (a), "the listing does not mark a flood zone", stays off the page.

I took option (b), within row 20's verified wording:
- **H2:** "Can a home search tell you if a home is in a flood zone?" is now "How do we check if a home is in a flood zone?"
- **Lead:** "We look up the home's spot on FEMA's flood map ourselves, before you offer. A flood-zone search of the listings is not enough."
- **Finding:** "Of those whose map pin falls inside the high-risk zone, about 1 in 5 comes up when the MLS listings are searched for flood zone."
- **Chart title:** "A flood-zone search of the MLS listings finds about 1 in 5 homes in FEMA's high-risk zone". The key reads "come up in a flood-zone search", and the aria label matches.
- **FAQ:** the question is now "How does Chapter3 check if a home is in a flood zone?" The answer opens with what we do, then gives the count.
- **The sources line** still says it was our CCMLS listing feed and the flood-zone filter. The source is named, but our tool is no longer the headline.

Why "MLS listings" is true: `flood_zone` is one of the MLS features as the CRM names them (`idx-lib/features.js`). The page never says what the listing's own field holds.

The question of whether to fix the filter goes to the lead (BUILD.md, note 5b). Five feeds titled "no flood zone listed" use `not: flood_zone`. This page's count found that 888 of 1,118 high-risk homes do not carry that flag.

## Nits taken

- **Road sentence:** cut "Horry County extended Fred Nash Boulevard around the end of the airport runway...". "You can meet the team on our About page." stays. The county road page stays in the sources line, because it places the road by the airport.
- **Deed index line (section 1):** it is now one active line that says what we do: "Horry County's deed index is online but its documents are not, so we get the HOA's recorded documents from the Register of Deeds in Conway." It does not say "only" (row 14's limit). The Conway photo stays until the owner's office photo arrives (BUILD note 4).
- **Jargon:**
  - "Material adverse fact" is explained once, in section 3, from 40-57-30(25) (row 33).
  - "Customer" and "transaction broker" are explained in the same place they appear, from 40-57-30(13) and (43) (row 34).
  - The second "material adverse facts" (section 5) is now plain: "serious problems with the home or the deal that are not easy to find out".
  - In the table, "the HOA addendum to the seller's form" is now "the seller's answers to the state's 11 HOA questions" (row 13).
- **Repetition:**
  - "We go and look" is now said once, in the short answer.
  - Section 3 is now a short list of what the law asks of a buyer's agent. It states the hidden-defect rule once, in the law's terms.
  - The FAQ answers about the license and the lender are reworded, so neither repeats a body sentence word for word.
  - License 28849 now appears twice (section 4 and the FAQ), not three times. The lookup paragraph says "the firm's license number".
- **FAQ heading:** "Why Chapter3 FAQ" is now "Questions about what Chapter3 checks".

## Nits declined, and why

- **Homes strip under the opening.** It needs an entry in `idx-lib/feeds.js`, which this page may not edit. A `glass.js` `homes()` strip needs a place in `idx-places.json`, and the page names no place. It stays as BUILD lead note 1, with the proposed NEWEST title.
- **Two stacked closing offers.** The second band is `partials/footer.html` and is on every page. The page's own end band is the one tied to its offer, so it stays. This is lead note 10(a).
- **Double credit sentence.** It comes from `tools/photos.js` creditsList and is on 51 pages. A change there needs its own test and a sitewide check. This is lead note 10(b).
- **Byline date.** `node build.js dates` sets it. That step was not run, as briefed.
- **read.wall at 320 px.** These are the same two false hits the reviewer named: the disclosure-form paragraph in #flood-zones and the lender block in #cost. The new 390 px wall in #flood-zones and the 320 px wall in #the-law are gone. I cut the extra paragraph after the chart, and section 3 is now a list.

## Changes, and the gates after them

Spec: `specs/why-chapter-3.js`. Page: `chapter3realty/why-chapter-3/index.html`.

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /why-chapter-3/` | 100/100 (SEO, AEO, Human, Trust 100), 1,196 words. The first rebuild had one P10 hit, "a home can sit", and that sentence was then cut. |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | 0 on this page. The same 4 sitewide hits on other pages as before (SC standard deduction). |
| `node tools/house-claims.js` | 0 |
| `node tools/struck-check.js why-chapter-3-struck.json` | no struck wording |
| `node build.js check` | OK. One sitewide WARN, as before. |
| `node build.js audit` | Only the two mkpage date lines (`dates` sets them), plus the same two "~" notes. |
| `node tools/critic.mjs http://localhost:8871 /why-chapter-3/ --widths 320,390,1024,1440` | 0 blocking at every width. 0 warnings at 390, 1024 and 1440. 2 read.wall warnings at 320, the false hits above. |
| Own check of `<main>` text | No sentence over 28 words, no em dash, no "So" or "Here is" opener, no "our home search". |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/why-chapter-3/shots/` (320, 390, 1024, 1440). Critic JSON: `.../rb2/why-chapter-3/critic.json`. I read the 390 and 1440 shots in slices across sections 1 to 6 and the end. The flood section opens with what we do, and the bar's title no longer names our search. Section 3 reads as two plain items under thin rules. The cost section explains each term where it appears.

Not run, as briefed: `node build.js stitch`, `dates`, `llmsfull`. Nothing was deployed, committed or pushed.

---

# Review 1 of the second rewrite: /why-chapter-3/ (pass=false, score 8), fix round of 2026-11-12

The section above is the fix round for the first rewrite (2026-11-10). This section is the fix round for the reviewer's pass on the second rewrite (BUILD.md of 2026-11-12). Spec: website working copy `specs/why-chapter-3.js`, rebuilt with `node tools/mkpage.js specs/why-chapter-3.js`. The spec before this round is saved at `scratchpad/why-chapter-3.spec.before-r1.js`. New facts: rows 38, 39 and 40 in facts.md, marked VERIFIED-BY-FIXER with their sources.

## Blocking 1: a cold seller got nothing

- **Short answer:** the second paragraph now has a buyer line and a seller line: "On a home you want to buy, our team gets the HOA papers, a rental analysis and an insurance quote before you offer. On a home you want to sell, the pricing review is free." (row 28)
- **"What do you get":** a fifth item, "Selling? Two numbers before you choose": "We show you the price range for a listing and what a cash buyer would pay, side by side. Our seller net calculator shows what you keep." (row 38, the site's own words on /sell/, live and in the working copy; row 12 for the calculator.)
- **The story:** `tenant-occupied-sale-13-days`, in the /sell/ page's verified wording (sell row 21, CORRECTED): "One of our agents sold a rented house for an owner who was moving to New York. The agent offered it to our list of investors, and a cash buyer closed within 13 days of the day he listed. One sale, not a promise." (row 39). No name and none of his cash-flow or loan figures, as the story's limits ask.
- **Seller offer:** "Thinking of selling? Send us the address. An agent sends back both numbers, free, and nobody here pushes you either way." Button: "Get both numbers for my home", linked to /contact/.
- **FAQ:** "pricing reviews are free, for buyers and sellers".
- **To keep the page calm,** two offers moved rather than adding a fifth. The investor offer ("Send me homes with the numbers to prove it") moved from section 5 to the end of section 3, where the reader has just seen the numbers. Section 2's "Send me homes" offer is gone: the homes strip is the offer there (owner, 2026-11-08: the button is the fallback), and the top bar and the end band already ask the same thing. The page now has the top bar, two offers in the body (investor and seller) and the end band.

## Blocking 2: three spec-sheet lines

1. "131 of our 141 pages carry a live row ... It scrolls slowly by itself and stops when you touch it." Now: **"Homes on the page you are reading.** Most pages on our site open with a live row of homes for sale and the AI search box. The most appealing homes come first, not the cheapest, each with its photo." (rows 9 and 10, CORRECTED: "the most appealing first and never sorted by price, photos first".) The spec still reads the count from `tools.json` and refuses to build unless more than half the pages carry a row.
2. "For 45 it gives the monthly HOA fee, and for 42 what units sold for." Now: "Compare 47 oceanfront buildings in Myrtle Beach and North Myrtle Beach. For most, it shows the monthly HOA fee and what units sold for." The spec still checks 47, 45 and 42 against `table.json` (row 14).
3. "It reads the homes on screen first." is cut. What the reader gets is kept: "The best fits move to the top, and homes the description rules out leave the list."

## Nits taken

- **Repetition.** "Describe the home you want" is now once, in the italic line under the H1. The short answer says "Tell Chapter3 AI what you want, in your own words". Section 1 says "Type a sentence, the way you would tell an agent." The FAQ says "Type the home you want as a sentence". "Before you offer" or "before you make an offer" is now three times: the italic line, the short answer and the insurance item. The top bar says "We find it, and we check it for you." The strip offer is gone. The insurance item's bold line is now "Know the insurance cost first", so it no longer says it twice. The hidden `sub` line no longer says it either. `repeat-check --strict` passes.
- **The features chart.** The seven bars ("The listing itself 52") are gone, and the 13 px labels at 320 px with them. In their place is one card: "Ask for any of 753 things, from a dock to no HOA", then five chips with the asks the body already named ("A dock for the boat", "Near the beach", "A private pool", "No HOA", "A condo you can rent by the night"). The caption is "Each one is a filter it knows. They come in 7 groups:" followed by the groups in plain words (row 4). The count and the groups still come from `tools.json`. The body sentence that listed the same asks is cut. The line before the card now says "the MLS's own list of features" (row 2's wording), so the number is said once.
- **The place strip.** The Garden City Airbnb strip is replaced by the existing place `wf-oceanfront-condos`: condos with an oceanfront unit within 25 miles of Myrtle Beach (row 40). Its title is "Wake up to the ocean: oceanfront condos for sale now". This is a want most buyers share, whether they are relocating or buying a second home. The USGS photo stays as its fallback: it shows oceanfront condo buildings at Garden City Beach, inside the strip's 25 miles. Its caption now says "Oceanfront condo buildings". BUILD lead note 4 is updated: add `/why-chapter-3/` to that place's `pages` list.
- **A new 320 px wall.** The first rebuild had one critic `read.wall` at 320 px under "Where do our guides get their numbers?". The two guides are now a two-item list in the page's plain-list style, "Home value guide" and "Condo building guide", each a link. The wall is gone.

## Nits declined, and why

- **"Dynamic preview photos" glossed over.** The photo row the owner may mean was taken off the live site on 2026-11-07 (VERIFY row 5). The page cannot describe it as live. "Photos right on the map" stays first in section 2's list, and "Homes on the page you are reading" now says each home comes with its photo. BUILD note 2 still asks the owner what he meant; if he means something else, it is a one-line change. "Only" stays off the page (rows 15 to 21).
- **Byline and CCMLS dates.** `node build.js dates` and the edge set them. That step is the lead's. `build.js audit` shows only the two date lines on this page.
- **FAQ answers behind "+".** mkpage writes each answer as an open `<h3>` and `<p>`. The fold is added sitewide after the build, not by this spec. It stays with the lead.
- **Lead items** (the live-branch merge and re-pull, the analyzer's financing inputs and "Estimated value", the footer's DSCR lines) stay in BUILD notes 5 to 7. The "131 of 141" count is no longer printed. After the merge, the re-pull still feeds the guard and the sources note.

## Gates after the changes

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /why-chapter-3/` | 100/100 (SEO, AEO, Human, Trust 100), 1,094 words |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | 0 on this page. Sitewide, the same 4 known wrong sentences on 3 other pages (SC standard deduction). |
| `node tools/house-claims.js` | 0 |
| `node tools/struck-check.js why-chapter-3-struck.json` | no struck wording |
| `node tools/repeat-check.js --strict` | passes: 0 identical or near sentences, 0 repeated shapes |
| `node build.js check` | OK. The one WARN is sitewide (index.html inline script). |
| `node build.js audit` | Only the two date lines (`dates` sets them), and the "~" note about a quote from a named licensee. None is written; never a quote for Tim. |
| `node tools/critic.mjs http://localhost:8872 /why-chapter-3/ --widths 320,390,1024,1440` | 0 blocking and 0 warnings at every width (preview: `tools/preview.mjs` on port 8872) |
| Own check of `<main>` | No sentence over 28 words, no em dash, no "So" or "Here is" opener. Devin appears only in the byline. No rate, payment or value. "Only" is never said about the search. |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/why-chapter-3/fix1/shots/` (320, 390, 1024, 1440). Slices: `.../fix1/slices/`. Critic JSON: `.../fix1/critic.json`. I read the 390 and 1440 slices of section 1 (the demo and the new card), section 2 (the list and the strip's fallback photo), section 3 (the table, the guides list and the investor offer) and section 5 (the seller item, the story, the seller offer and the license line). One thing I changed after looking: the card's caption sat tight under the chips, so it now has 1rem of space above it. In the preview the strip stays empty, so the fallback photo shows.

Not run, as briefed: `node build.js stitch`, `dates`, `llmsfull`. Nothing was deployed, committed or pushed.
