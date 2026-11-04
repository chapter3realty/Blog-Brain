# Review round 1: /submarkets/surfside-beach/ (fix round 1, 2026-11-04)

Reviewers: critic (5), reader (7), owner's eye (7). All three blocked. Every fix is in `specs/surfside-beach.js`; the built page was rebuilt from it. New facts are ledger rows 45 to 53 in `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check.

## What changed, by finding

### Critic, blocking
1. **Vrbo in the chart note.** Note now reads "AirROI, the active Airbnb listings in its Surfside Beach market. Gross bookings, before cleaning, platform and management costs." The count is left out of the note so the page shows one value (about 550, in the text).
2. **"A lender requires flood insurance."** New row 48 (42 U.S.C. 4012a(b), saved `raw/usc-42-4012a.html`). Sentence now: "A federally backed or regulated mortgage on a home in a high-risk zone requires flood insurance."
3. **"so it is not income".** Cut. "You collect it and send it on." stays.

### Critic, nits
- Map has no streets: the map now draws every county street centerline in the town (`map-streets.geojson`, from the same layer 18 pull) and labels Ocean Blvd, Dogwood Dr N, Lakeside Dr, Poplar Dr N and S, Surfside Dr, and 13th Ave S, 6th Ave S, 8th Ave N and 16th Ave N. New row 46 (our measurement, `build_streets.py` -> `band-edge-streets.json`) gives the sentence on where the line runs: Dogwood Drive North north of the pier (houses on both sides), Willow Drive South near the pier, then just behind the houses on Lakeside Drive.
- Map too small on a phone: below 700 px the map is two pictures, "South of the pier" and "North of the pier", each about 350 px tall at 390. Labels read at about 15 to 18 px. Shapes are drawn once in `<defs>` and reused with `<use>`, so the page grew only about 10 KB. Checked at 320, 390 and 1440 (`wf2/.../fix1/shots/`).
- Aerial said "tints": caption, alt, credit, schema description and the image files' embedded metadata now say "lines", and the caption says land outside both lines is in other districts (`photos.json` record; `photos.js embed` run on that one record only; `photos.js check` passes).
- Button labels that leave one word alone: now "Send us the listing", "Have us pull the sales", "Have us price the tax", "Have us check for flooding", "Ask about renting it out". The top offer is "Send me Surfside Beach homes".
- Pros card shorter than Cons: scoped CSS stretches both cards to the same height at 760 px and up.
- Numbers breaking from units: drive table uses a non-breaking space ("15 min"). The beach rules table with "8 a.m." and "October 31" is gone (see owner item 6).
- Sentences over 28 words: the 37-word 48 percent sentence is three sentences; the 31-word tax sentence is now a table; the FAQ tax answer is two sentences. A text check of the built page finds no sentence over 28 words.
- "C4" unexplained: now "the town's entertainment district" in the text, and in the map key.
- "look inland: in R1, 71 percent are main homes": con now reads "Near the ocean, only about 1 home in 8 is taxed as its owner's main home." with "On the inland streets with the largest lots, about 7 in 10 are." No "look inland".
- "nearly half lived outside South Carolina": now "gave a mailing address outside South Carolina".
- "many at the end of a street": cut.
- "Owning here gets you free beach parking": cut. The page says what row 22 says: two free passes per household for an owner who lives elsewhere.
- "Most houses here have no HOA fee": now "Most houses for sale in the town had no HOA (homeowners association) fee when we counted, about 6 in 7."
- Beach-access button to /contact/: now the pill "Get the homes for sale in Surfside Beach" at the end of the life section.
- "compare all nine submarkets": now "AirROI figures for all nine submarkets are on our Airbnb income page."
- Life section mostly rules: rewritten (owner item 6).
- Byline and schema dates: left for the lead's `build.js dates` run. These two date lines are the only audit errors left. A20 (a named licensed person's sentence) stays a warning: no Surfside story or quote is in `stories.json`.
- read.wall warnings: the yearly-cost section now has a table and the prices section is shorter. At 320 two warnings remain: the FAQ box (also a tool false hit in round 1) and the worked-example paragraph in #airbnb.
- critic.mjs homes strip: a tool issue (critic.mjs should wait for the strip). Not changed here.

### Reader, blocking
1. **The two in three listings outside the town.** New row 45 (reused from the verified row 8 in invest-where-to-buy): "Those homes are on county land, where the town's rental rules do not apply. Horry County's zoning has no limit on how long a home there may be rented, but a subdivision's recorded rules can. We read those rules for the home you like." The con says the same in short form.
2. **Renting by the month.** The open question is cut (owner: answer it or delete the problem). The page states only what the code says: on the inland streets the town allows rentals of a year or more, and none under 30 days. "Stays under 90 days" is gone. The rental section now says the owner files the town's fees every month.
3. **Worked example stops early, and "6 percent" read as 6 percent of the price.** The table now ends at gross bookings and tax, the tax row says "as a rental, if the county values it at the price paid", and a plain line follows: "That leaves about $38,000 before every other cost: the condo dues, cleaning, management, insurance, utilities and any loan." No dues, management or insurance figure is verified, so none is printed.
4. **4 and 6 percent read as the tax rate.** Rewritten: "South Carolina does not tax the whole value of a home. For your main home, the tax rate applies to 4 percent of the county's value ..."
5. **Golf cart hours.** The ordinance's hours are not verified (Not verified 3; the ordinance text was not found, and news is not a source). The "we get the hours for you" line and the "speakers argued" line are cut. The page keeps that the town passed its own ordinance in 2025 and the state's night-light rule.

### Reader, nits taken
- Hero tile now "Beach: About 2 miles long".
- Zone codes: said once in the rental section ("The town calls them its R3 and C3 zones"), in the map key, the building-rules cards and one FAQ answer. Elsewhere "near the ocean" and "inland".
- Words: "middle" kept only in the price chart, where its note explains it; "Community Rating System Class 7", "Class 5", "AE and VE", the evacuation zones and "before credits and the cap" are gone; "100-year flood level" is explained as "the flood height on FEMA's map".
- Flood sentence rewritten in two short sentences.
- Price figures: asking prices and the town-wide $534,000 are cut. One price sentence in the price section, then the chart.
- Near-ocean yearly cost: new row 47. The yearly-cost table now shows both sides: an inland house you live in (about $2,750) and a house near the ocean, rented or a second home (about $12,300).
- AirROI tiles: the occupancy and nightly-rate tiles are gone; the text gives the listing count and the average year's bookings, and the chart title says it is one month.
- Ocean Lakes: the $248,000 county building value and the 949 of 956 count are cut. The page says what you own and that the site comes with a yearly lease from the campground, which we go through with you. The fee itself is not public (Not verified 2).
- "Is Surfside Beach safe?" is now "What about crime in Surfside Beach?"
- Not taken: the MLS box between the hero and the short answer is the site's frame, not this page. A small locator map of the town against Myrtle Beach: the short answer says "south of Myrtle Beach" and the drive table gives Market Common and Broadway; a locator map needs area-map.js work outside this spec. Schools: still not verified (Not verified 6); the FAQ says we look up the assigned schools.

### Owner's eye, blocking
1. **Audience and lead.** H1 is now "Surfside Beach real estate: life in a two-mile beach town, and where you can rent by the night." The hero sub, tiles and short answer lead with the town. "What is it like to live in Surfside Beach?" is the first section; "Is it part of Myrtle Beach?" second; the rental map third. `data/headlines.json` still holds the old H1 (a shared file); the lead may want to update it.
2. **Fixation on the rental line.** The rental line is now in the H1, the end of the hero sub, one tile, one sentence of the short answer, its own section, the building-rules cards, the Airbnb section and one con. The life section, the own-town section (apart from the county rule) and the flood section no longer mention it. repeat-check passes strict.
3. **Industry terms.** See the reader nits above. R3 is named once as the town's own name.
4. **Too many exact numbers.** Cut: 1,662 of 4,045; 45 of 77; 2,579; 949 of 956; 36 of 42; $1,256 and $702 (now "about $1,250" and "about $700"); $42,902 (now "about $43,000"); 551 (now "about 550"); the occupancy and nightly-rate tiles; 7.1 percent stays once in the text.
5. **Price in the short answer.** Gone. The short answer is the town, then what each side is for.
6. **The life section is rules, not selling.** Rewritten from the town's own event pages (rows 49 to 53): the Family Beach name, the pier, "A year of town events" (barbecue festival and cook-off, the kite festival at the pier, three golf cart parades down Ocean Boulevard, free Sunday concerts in Memorial Park next to the library, the end-of-summer fireworks off the pier with free shuttles, the Thursday arts and crafts market), golf carts, the beach, then drive times. The beach-rules table is cut; dogs and parking are one sentence each and stay in the FAQ.
7. **Questions raised and left open.** Both cut (reader items 2 and 5).
8. **Same offer twice.** Top offer: "Live there, rent it, or both? Tell us. We send the homes that fit." / "Send me Surfside Beach homes". Rental section: "Send us the listing". Every offer on the page now has its own words.
9. **County figure shown as a value.** The Ocean Lakes building value is cut. The yearly-cost table labels its first row "The county's value for tax".
10. **Hero tile and rosy bottom line.** Tile fixed; worked example fixed (reader item 3).
11. **No streets.** Map streets and the street sentence (critic nit; row 46).
12. **Photos repeat one subject.** The 2011 oblique of the old pier is cut, so the page has three photos: the pier (its own section), the beach (the beach section) and the aerial with zoning lines (the rental section). New photos of the inland streets and town life were not possible this round: the Wikimedia Commons API returned HTTP 429 again, and the Commons category for the town holds only beach and pier shots. The inland street and Memorial Park shots are on the photo partner's list (`shot-list.md`); the lead should send it.

### Owner's eye, nits taken
- "We look up the schools" is now in the FAQ only.
- Pro "Its own police, beach rules and a map" replaced with "Free summer concerts in Memorial Park and golf cart parades on Ocean Boulevard." Another pro is now "About 2 miles of beach with 36 public accesses." so the 0.8-mile line is not said three times.
- One caption for the beach photo, the record's own ("Beach houses along the sand at Surfside Beach.").
- "Turned so the beach runs along the bottom; the arrow points north." cut from the caption.
- FAQ "safe": changed (reader nits).

## Where I disagree
- None of the findings. One partial: the owner asks for a photo of the inland streets at ground level now. No lawful one exists that I could reach today; the page carries no stand-in photo rather than a wrong one.

## Gates on the final build
- `mkpage`: built. `score.js`: 100/100. `claims-scan`: 0 findings. `facts-check`: nothing on this page. `house-claims`: 0. `struck-check` (this page's list): no struck wording. `repeat-check --strict`: passes. `photos.js check`: all records pass.
- `critic.mjs` at 320, 390, 1024, 1440: 0 blocking, 3 warnings (read.wall: FAQ box at 390 and 320, #airbnb worked example at 320).
- `build.js check`: OK. `build.js audit` for this page: only the two date lines (lead's `build.js dates`) and the A20 warning.
- Shots: `wf2/submarkets-surfside-beach/fix1/shots/` (map at 1440, phone halves at 390 and 320, page slices) and `fix1/critic-shots/`.
