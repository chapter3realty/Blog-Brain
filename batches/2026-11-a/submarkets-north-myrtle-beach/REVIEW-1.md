# Review round 1: /submarkets/north-myrtle-beach/

Fixer, 2026-11-04. Three reviewers (critic 7, reader 7.5, owner 7). Every blocking item is fixed in the spec (`specs/north-myrtle-beach.js`), never in the built page. New facts are rows 44 to 51 of `facts.md`: rows 44 to 47 and 51 are VERIFIED-BY-FIXER, for the lead to re-check; rows 48 to 50 carry verified rows of /buyers/cost-to-own/ and /buyers/relocating/which-town/, read from their own data files with a `must()` check.

## What changed, finding by finding

### Critic, blocking

1. **Hero tiles overflow at 320 px ("$565,000$310,000").** The price tiles are gone (the owner's first finding asks the same). The four tiles are now Beach "About 9 miles", Channel houses "About 680", Barefoot golf "4 courses", Nightly rentals "City license". Every value breaks at a space. The spec also sets `min-width:0` and `overflow-wrap:break-word` on the tile text, so a long word cannot spill. glass.js and page-kit.js are not touched.
2. **Ratios split across lines ("About 3 in" / "4").** `inTen()` now joins the ratio with no-break spaces. The flood chart label joins "houses 95%" and "condos 84%" the same way.
3. **No year in the photo captions.** Every caption now gives its year: "Cherry Grove from a height in 2012", "2023 aerial" on each NAIP picture, and 1941 on the new postcard. A `must()` fails the build if a new caption loses its year.

### Critic, nits taken

- "A lender must require" is now "A federally regulated lender must require ..., and any lender can ask for it elsewhere" (row 20).
- The golf-cart crossing roads are the city's four, with 27th Avenue South (row 29). They are in the FAQ only now.
- Crescent Beach: "only about 1 house in 100 is in the flood zone, the fewest of the beach parts" (row 18).
- Pros: "Almost no flood zone across the waterway, and about 7 in 100 homes west of US 17."
- Seabrook: "about $750,000, the middle of 9 sales". Sunset Harbour: "about $760,000 (9 sales)".
- "off the water" is now "elsewhere in Cherry Grove" (row 14 includes oceanfront houses).
- The Crescent Beach "$665,000 to $718,000" now says what the two numbers are: two county names for the original lots, with middle prices of about $665,000 and $718,000.
- "Across Ocean Drive" is gone. The Ocean Drive entry now gives the spread of its prices (row 10: the middle half ran from about $385,000 to $980,000).
- "the walk out to the point" is cut.
- SLED is no longer named. The safety FAQ says we do not rate places and we pull reported crime for any house; no source is named, so no row is needed.
- The sanitation sentence is cut.
- Barefoot Landing now says "about 11 minutes by car from Main Street" (row 33).
- The yearly-cost totals have their own ledger row (51), and the old two-line total is replaced (see the reader's first finding).
- The listings chart shows manufactured homes at $145,000 (row 15).
- The short answer no longer has "Where you buy inside it matters most." The price range sits in one sentence with the city middle.
- The 1440 px H3s are larger (1.65rem at 1000 px and up) and have more space above them.

Not changed: the cream band below the footer at 1440 px is site-wide (not in this spec). The 390 px read.wall on the FAQ is the Sources line and the photo credits, as the critic said.

### Reader, blocking

1. **The yearly cost left out the biggest bills.** The section now gives the full yearly cost before any mortgage, house and condo side by side: property tax, home insurance, a flood policy outside the zone, HOA or condo fee, and upkeep. A typical house as your home: about $8,400. A typical condo: about $11,000, because of the condo fee (about $700 a month at the middle in ZIP 29582). As a second home or rental: about $13,000 and $14,000. A short "Where the other figures come from" says what each figure is, including the wind-and-hail rule on the beach side of US 17, and the insurance quote we get before an offer (story `insurance-quote-before-offer`, wording from cost-to-own row 21).
2. **How far the low-flood parts are from the beach.** New row 44 (VERIFIED-BY-FIXER): from a typical house west of US 17, Ocean Boulevard is about 4 minutes by car; from across the waterway, about 11. Both entries say so.
3. **Why the share of main homes matters.** The paragraph under the table says what the column means: where few houses are the owner's main home, most are second homes or rentals, and fewer neighbors live there all year. The con says the same thing and its answer is a fact: "Inland, about 3 in 4 houses are the owner's main home."

### Reader, nits taken

- Flood zones explained in plain words: the policy rows read "In the flood zone, back from the ocean (A zone)" and "In the flood zone on the oceanfront, where waves reach (VE zone)". One sentence says the VE zone is the oceanfront, where storm waves add to the flood (44 CFR 64.3, as verified in the Myrtle Beach ledger row 20).
- "at the middle" is used less; "typical" is used in the short answer, the prices section, the table headings and the yearly cost.
- County value against price: "The tax is on the county's value of the home, and a sale resets that value toward the price you pay" (cost-to-own row 14, verified).
- The shag sentence is rewritten so the Senate is not the subject (see the owner's item 7).
- The lodging-tax example has one figure: "about $240 in lodging taxes, which the owner collects and pays to the state, the city and the county."
- The "how it is worked out" tax lines are cut to one sentence plus the link.
- Hurricane Hazel and the trash paragraph are gone.

Not changed: the "Live from the MLS" box and the "Updated" date are site-wide (the homes feed and `build.js dates`). The parts map at 390 px keeps its size; its numbered legend carries the names.

### Owner, blocking

1. **The headline leads with price and fear.** The H1 sub-line is now "A boat behind the house in Cherry Grove, Main Street in Ocean Drive, golf and newer houses across the waterway." The price and flood tiles are gone (see critic 1). The short answer opens with which part suits which buyer; price is one sentence after it, and flood is not in the short answer.
2. **The short answer never says which part suits which buyer.** It now says: a boat behind the house, Cherry Grove; Main Street and a maritime forest, Ocean Drive; a house near the ocean for less, Crescent Beach or Windy Hill; newer houses and little flood zone, across the waterway or west of US 17.
3. **Too much scrolling before the first place.** The eight parts are now the first section after the short answer. "Living here" follows them and is cut to four short paragraphs, the Myrtle Beach comparison and the drive map. Golf carts, dogs, schools and safety are in the FAQ only.
4. **Entries in a reporter's voice.** Each entry now opens with who the part suits ("Little River Neck suits a buyer who wants a house among owners who live there"). The part-level middle price, main-home share and flood share are no longer repeated in the entries; the table holds them once. New things to sell each part: Barefoot Resort's four golf courses and the Norman course on the waterway (row 45); the shag pavilion at Ocean Drive, with a 1941 postcard of it (row 46); Windy Hill's start after the war (row 47); the 4- and 11-minute drives to Ocean Boulevard (row 44); new streets being cleared west of US 17 (2023 aerial). Little River Neck now leads with main homes and new houses; its manufactured homes are one line at the end.
5. **The same facts said three times.** The table has no flood column now; the flood chart alone gives flood by part. The table moved up into the parts section, right after the map, and the entries no longer repeat its numbers. "No special rental zoning or permit" is now in the short answer and the rental section only (cut from the pros). Atlantic Beach is called a separate town twice (the Crescent Beach entry and the photo caption). The Cherry Grove flood point is in the entry, the chart and one con.
6. **"Someone's main home" never turned into meaning.** See the reader's third finding. The headline no longer mentions it.
7. **Insurance jargon.** See the reader's first nit.
8. **Sentences that say nothing.** The sanitation sentence and the Hazel history are cut. The shag line now says what the shag is and where crowds danced it, with the postcard.
9. **Missing searches: golf, events, pictures.** Golf: row 45, in the hero tiles, the across-the-waterway entry and the pros. (A golf FAQ was tried and cut: the score wants 4 to 8 FAQ entries.) Pictures: three new labelled NAIP aerials, one each for Tilghman Beach, Windy Hill and west of US 17, and the 1941 postcard of the Ocean Drive pavilion. Each was looked at full size; records are in `photos.json`, made by `images/aerial_render_fix1.py` and `images/add_photos_fix1.js`. The Atlantic Beach aerial moved to the Crescent Beach entry; Windy Hill has its own picture. Little River Neck, Crescent Beach and across the waterway use the existing pictures or none; the photo partner's shot list (`shot-list.md`) still covers them.
10. **The listing count gave no day.** The sentence now reads "On November 3, 2026, about 250 houses and 575 condos were for sale in the city. Ask us to run the count again for the part you like." The day comes from `findings.json listings.pulled`, never typed. The cheap-condo count is gone.

### Owner, nits taken

- The per-part buttons read "Send me homes in Cherry Grove" and so on.
- The H3s are larger on desktop.
- "We look up the assigned schools" and "We do not rate any place as safe" now appear once each, in the FAQ.
- Heritage Shores is named once in the Cherry Grove entry.

## Findings I did not take, and why

- **Events (owner item 9).** No city page listing its festivals or events could be read: the city's Special Events link served the Aquatic Center page, and the SOS festivals stay in "Not verified 1". The Alabama Theatre's page gives an address (4750 Hwy 17 S) but does not say it is at Barefoot Landing, so it is not named. A verified events row is a lead or research task; the page says nothing about events rather than guess.
- **The H1 swap against data/headlines.json (owner nit).** The struck "allowed citywide" is why the H1 changed (NEEDS.md item 2). The lead updates headlines.json.
- **Per-part home strips (owner nit).** None of the sibling town pages have them yet; the owner reviewer did not count it.
- **Little River Neck's drive to the beach.** The PIN-to-part file the drive pull used has a different Neck from row 8 (386 houses against 1,413), so its 4.6 minutes is not printed.
- **An aerial for Little River Neck and Crescent Beach.** Not made this round, to save tokens; the photo partner's shot list covers them.
- **The 320 px read.wall warnings** that remain (the short answer at about 950 px, the rental section, the FAQ end matter) are warnings, not blocking; each is under 1.5 phone screens or end matter.

## Gates after the fixes (2026-11-04)

- `node tools/mkpage.js specs/north-myrtle-beach.js`: builds. Every new number is checked by a `must()` against its data file.
- `score.js --only /submarkets/north-myrtle-beach/` (SCORE_TODAY=2026-11-04): 100/100 (SEO 100, AEO 100, Human 99, Trust 100). One partial: P2, 4.3 numbers per 100 words (the bar is 3.5). The yearly-cost table and the part entries carry them. The old version was not measured on this rule.
- `claims-scan.js`: 0 findings. `facts-check.js`: 0 hits on this page.
- `house-claims.js`: 0 after scoping two sentences ("Only about 1 in 4 houses is the owner's main home"; "the other houses are taxed as second homes or rentals").
- `build.js check`: OK.
- `build.js audit`: this page has no FAIL of its own. Its two "!!" lines are the dateModified and "Updated" date against the sitemap, the same as before this round; `node build.js dates` fixes them, and the lead runs it at the end. One warning: no attributed sentence from Tim or Devin (A20). The story bank has no Tim quote for this place, so none is written.
- `critic.mjs`: 0 blocking at 1440 and 768 (the round's first run found a 768 px table spill from the long "Houses that are the owner's main home" header; the header is now "Main homes" and the paragraph under the table says what it means). 0 blocking at 390 and 320. The phone runs went without `--shots`, because the full-page phone screenshot of this page (about 37,000 px tall) hung twice. Warnings: read.wall on the short answer at 320 (947 px), on the rental section at 320 (911 px) and on the FAQ end matter (the Sources line and nine photo credits).
- Shots looked at (`wf2/submarkets-north-myrtle-beach/fix1/shots/`): the hero tiles at 320 and 390 fit inside their tiles; the parts table at 320 keeps "1 in 4", "3 in 4" and "2 in 3" on one line; every new aerial and the postcard were looked at full size before use.
