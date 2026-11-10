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
