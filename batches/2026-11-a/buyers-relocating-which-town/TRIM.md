# Trim: /buyers/relocating/which-town/

Owner, 2026-11-07: cut each rebuilt page to one main question (STANDARD A14, CRAFT 1 "One main question per page").
Spec: `specs/relocating-which-town.js` in the website worktree. The untrimmed page is kept at `scratchpad/trim/before/buyers-relocating-which-town.html`.

## The main question

**Where should I live near Myrtle Beach: which town fits me?** These are the title's words ("Where to Live Near Myrtle Beach: 13 Towns Compared") and the H1's words ("Which Grand Strand town fits you?"). The searches that land here ask the same thing: "is myrtle beach a good place to live", "best places to live myrtle beach sc", "best areas to live in myrtle beach sc".

The answer is the short answer, the filter list with the map, and the 13 numbered places. Each place has what it does best, its trade-off and its price.

## The follow-ups (what a reader of that question asks next)

1. What does a house cost there, to buy and to keep each year? (must-answer 3 and 4: the price chart and the yearly-cost section with the Longs and North Myrtle Beach cards)
2. How far is the beach, the airport and a hospital, and does it flood? (must-answer 7 and 11: the side-by-side table)
3. What changes inside city limits? (must-answer 8: the tax chart and the city-or-county table)
4. Myrtle Beach or North Myrtle Beach? (must-answer 5: the first FAQ answer)

## What was cut, and where each side question lives now

**A fact said twice (kept where it belongs):**
- "Half for more and half for less" after the Loris and Myrtle Beach prices. The definition of a typical house stays once, at the top of the list.
- Trash pickup in the Little River and Conway entries. It stays in the city-or-county table and one sentence below it.
- The North Myrtle Beach share of main homes on the tax rolls. It stays in the FAQ answer on year-round homes.
- "Fewer than half the houses here are taxed as someone's main home" in the Surfside Beach entry. The FAQ answer keeps it; the entry keeps the "1 in 8 along the ocean" detail.
- "With a Myrtle Beach address" in the Carolina Forest entry. The FAQ answer on Myrtle Beach addresses keeps it.
- Socastee's "15 minutes or less to the beach, the airport and the mall". It stays in the Myrtle Beach entry and the table.
- Pawleys Island's "about a third of houses in the flood zone, the highest share". The table shows 32 percent.
- "4 percent, not 6 percent" in the yearly-cost section. The FAQ answer on year-round homes keeps it.

**A method note (moved to the sources box or the table caption):**
- "This page's Longs is the part outside the city": now "Longs: outside North Myrtle Beach" in the sources line.
- "The cards use about $2,000, the middle Horry County owners pay": now "Card insurance: the Horry County middle" in the sources line.
- The list of five hospitals behind the "To a hospital" column: now in the table's caption.
- "The lot sizes are in the entries for Loris and Aynor": cut.
- "The next section shows where that yearly cost comes from": cut.
- Every source link is still on the page (trim-check).

**A side question (one sentence and a link, or cut):**
- Renting by the night, place by place (the six-line list): cut. The city-or-county table keeps the county rules. The Myrtle Beach entry and the FAQ keep the city rule. One sentence links to `/invest/str-rules/`.
- Home and flood insurance (the $2,000 middle, the $1,300 to $3,000 range, wind and hail east of US 17, the $1,070 and $550 FEMA policies): cut. `/buyers/cost-to-own/` carries all of them. The Surfside Beach example ($10,400 against $8,800) stays, with the link.
- The tax break at 65: one sentence remains, linked to `/buyers/property-taxes/`. The per-town savings ($180, $330) are cut.
- Golf carts under state law ($5 decal, insurance, 35 mph roads): cut. The city-or-county table row stays, and Garden City keeps its beach golf-cart season. The SC Code 56-2 link stays in the sources box.
- The county's drop-off centers: one sentence remains.
- "If you buy with us, we get you an insurance quote" and "We check the city line for any address you send us": cut. The offers beside them say the same.

**Town detail that its own submarket page already carries (each entry still links its guide):**
- Little River: the Kings Highway sentence.
- Conway: the Crabtree Swamp streets and city trash pickup.
- North Myrtle Beach: Ocean Drive, McLean Park, Ingram Dunes and the shag.
- Myrtle Beach: Pine Lakes (1927), and the Grand Park and Valor Park sentence (the photo caption still names both parks).
- Surfside Beach: the pier's shops, and "7 in 10 on inland streets".
- Garden City: the pier pass and the fishing license.
- Carolina Forest: "almost none listed as open to nightly rentals" (a rental side question).

Loris, Aynor, Longs, Socastee and Carolina Forest have no submarket page, so their entries keep their detail.

**Kept as it was:** the hero, the short answer, the map and the filter list, all 13 photos, the price chart, the drive table, the yearly-cost cards, the tax chart, the city-or-county table, the four FAQ answers, both client stories, every source link, and all 21 offers. The offer text was shortened, and no two offers share their words.

**Reworded only:** six price lines, so "typical" is in 6 of 13 entries, not 8. The Murrells Inlet cost line, so it no longer copies the Loris line.

## Numbers, before and after

| | Before | After |
|---|---|---|
| Prose words (score.js) | 3,036 | 2,259 (down 26 percent) |
| Words in `<main>` (trim-check) | 4,582 | 3,850 |
| Content sections (focus rule; the 13 places count as one) | 5 | 5 |
| H2 headings | 19 | 19 |
| FAQ entries | 4 | 4 |
| Offers | 21 | 21 |
| Entry length, repeat-check (min, median) | 87, 121 | 70, 96 |
| score.js total (SCORE_TODAY=2026-11-07) | 98 | 99 |
| A14 focus | 19 percent | 59 percent |
| repeat-check --strict | passes | passes |
| house-claims | 0 | 0 |

## Why it stops at 2,259 words, not 1,800

The 13 places use 1,420 of the 2,259 words. Each entry needs its price line and its offer. The repeat-check floor needs a median entry of 90 words or more. The median is now 96, and five entries are already under 90.

The fixed parts use another 270 words: the short answer, the filter list of 13 lines, the map legend and the end offer. That leaves about 110 words for the price, the yearly cost, the city line and the FAQ together. Getting there means removing the follow-ups, which this trim is not allowed to do.

The rule fits a page about one place. For a list of 13 places, it needs either a higher cap or fewer places. See the open issues.

## Checks

- `node tools/trim-check.js before after`: the only finding is "Updated August", the byline date. `mkpage.js` writes the published date (2026-08-25) into the byline, and `node build.js dates` sets the modified date later. A copy with the byline date as the dates step sets it prints "clean (no new number, no new name, every source kept)".
- `node build.js audit`: the sources line was 91 words, now under 90. Two FAIL lines remain, the dateModified and the visible "Updated" date, and they clear when the owner runs `node build.js dates`. The audit also gives the warning (~, not FAIL) for a quote from a named licensed person (PLAYBOOK A20).
