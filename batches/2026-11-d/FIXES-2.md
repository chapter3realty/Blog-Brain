# Round 2 fixes (owner, 2026-11-14, on the preview)

The owner's words, in short: show the houses, do not offer to send them. "It's by far the strongest CTA we have." An IDX strip for each row of the land chart, for each area a page describes, for each community; every HOA name links to our search filtered for it; answer the questions the HOA page asks; the Longs land story; end Myrtle Beach vs Charleston with what Myrtle Beach does better.

## The tools

- Every new page now has a feed at the top (idx-lib/feeds.js, the lead added them).
- `G.homesQ(q, head)` in Blog-Brain tools/glass.js: a live strip for any search, filled in the browser from `/homes/api/strip?<q>`. Put `G.homesQScript()` once in the page. Keys: type, lotMin, lotMax, subdivision, city, near, miles, min, max, beds, has, not, hoa, hoaMax, waterfront, yearMin, domMax. City is one of Myrtle Beach, North Myrtle Beach, Surfside Beach, Garden City, Murrells Inlet, Pawleys Island, Little River, Conway, Longs, Loris, Aynor, Calabash. Feature keys for `has`: only those in `curl -s https://chapter3realty.com/homes/api/filters`.
- Check every strip's search on the live site before you use it: `curl -s "https://chapter3realty.com/homes/api/strip?<q>"` must answer `ok` with 3 or more homes (`total`). lotMax is new and the live site ignores it until v1.40 ships: check those with lotMin only, and note it. List each strip, its search and its count in BUILD.md.
- A link to our search: `/homes/?subdivision=<name>` (or any of the keys above).

## Rules for strips

- A strip replaces every offer that says "Send me ... homes" (G.offer with a "Send me" or "Get the ... sent to you" label). Show the homes there instead.
- The strip's title is bold, personal and true of its search: "Lots of 20 acres or more", "Plantation Point houses with their own pool". Never "Homes for sale now" alone, never nerdy.
- Put a strip where the text has just named the place or the kind of home, under that paragraph or chart.
- Keep at most two service offers (the "Have us check..." boxes) on a page, the two most useful. The strips are the main call to action.

## Per page

Group A: /buyers/property-records/ (and its lookup-ui.js), /deeds/, /gis-map/, /tax-bill/.
- Lookup card: the "Homes" line becomes a live strip of homes within a mile of the address (`near=<lat>,<lng>&miles=1`), titled "Homes for sale within a mile of this address", with the link as the fallback when the strip is empty or fails. Drop the "Want the deed, the tax bill and the HOA papers in one email?" offer from the card. Put the strip's URL builder in lookup-core.js with a control in lookup-test.js.
- Replace the Pawleys Island G.offer on the hub and the GIS page with a strip.
- Deeds: copies cost Chapter3 $0.50 a page from a $25 escrow account (facts row 11), so "we get the deed for you, free" stays true once the owner opens the account (in BUILD.md as an owner item). Keep two offers.
- GIS: a strip of houses on an acre or more where the page talks about lot size. Keep two offers.
- Tax bill: keep two offers.

Group B: /buyers/land/, /buyers/flood-zone-check/.
- Land: under the "Price an acre, by lot size" chart, one strip per row, in the row's order and words: under half an acre (type=land&lotMax=0.5), half an acre to 1 acre (lotMin=0.5&lotMax=1), 1 to 5 acres (lotMin=1&lotMax=5), 5 to 20 acres (lotMin=5&lotMax=20), 20 acres or more (lotMin=20). Calm: a short heading and the five strips, no extra copy. Then a land strip for each area the page describes (the town sections), replacing the "Send me land around ..." offers.
- Land: the owner's story (stories/stories.json "nc-land-in-longs"): "Clients of ours from North Carolina bought land in Longs and built a new house there with a builder." Use those words, in the section where it fits (Longs, or building on land), with nothing added.
- Flood zone check: one strip only if a search makes a true title; never a title that says homes are outside the flood zone from the listing data (the page shows that data misses most of them).

Group C: /hoa/fees-by-neighborhood/, /buyers/senior-living/.
- HOA: every community name in the table links to `/homes/?subdivision=<the name as the MLS spells it, the name the table was counted by>`. Replace the Waterbridge and The Farm offers with strips.
- HOA: read every question the page asks (headings, the FAQ, the table notes). Each must be answered on the page, plainly, in two to four sentences. The owner named "Why are townhome HOA fees higher?" as one it asks and does not answer. Elaborate where a buyer would want one more fact, without making it complicated. New facts need a source row marked VERIFIED-BY-FIXER.
- Senior living: replace the two "Send me" offers with strips. In each town section, one strip of one-level homes in that town if the search finds 3 or more.

Group D: /submarkets/myrtle-beach/plantation-point/, /invest/condo-buildings/palace-resort/, /buyers/relocating/myrtle-beach-vs-charleston/.
- Plantation Point: strips for the whole neighborhood, the waterway houses, the pool houses and the golf houses where each search finds 3 or more; they replace "Tell us: waterway, fairway or pool". Plus homes near Plantation Point (near its center, 1 mile) as a wider strip.
- Palace Resort: replace the G.offer with a strip of Palace units; add one of oceanfront condos nearby.
- Myrtle Beach vs Charleston: replace the two "Send me" offers with strips. End the article with a section on what Myrtle Beach does better, from verified rows only, upbeat and true, without running Charleston down. A strip after it.
