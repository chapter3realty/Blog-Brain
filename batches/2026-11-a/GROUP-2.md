# Group 2: patch v1.26

Pages: /submarkets/garden-city/, /submarkets/little-river/, /submarkets/myrtle-beach/, /submarkets/pawleys-island/, /buyers/common-mistakes/. Patch: `website-patches/v1.26-four-towns-and-common-mistakes.patch`, after v1.25.

## The line

The workflow ran on all five; it was stopped once by the 5-hour usage limit and resumed from its cache. The first review scored the pages 6 to 8. The last fix closed every item the re-check left open, and the lead read each one on the built page:
- Garden City has condo dues in its worked example.
- Little River's part 5 opens with the drive.
- Myrtle Beach names the neighborhoods where houses resell near the city's middle price.
- Pawleys Island has winter life, its restaurants and the hammock.
- Common mistakes no longer gives a whole-MLS count for one county.

## The lead's own checks

1. **Facts the fixers added.** One independent verifier checked all 44 VERIFIED-BY-FIXER rows (`<slug>/FIXER-VERIFY.md`): 34 verified, 10 corrected, none struck. The lead applied all 17 sentence changes. Among them:
   - The pier café keeps long hours in winter.
   - The karaoke and the bands are summer only.
   - "No public record gives the depth" is now "the county's parcel records do not".
   - The slip tax is on the county's full value, and a capped value may be lower.
   - Fannie Mae's "whose rules most home loans follow" is cut, and so is the hotel-room comparison.
   - BisQit is cut from the restaurant count.
   - The Hammock Shops are named for the Original Hammock Shop.
   - The SC wind and hail line covers named coastal areas of other counties too.
   - "7 in 10 houses on our MLS, which covers the Grand Strand and inland Horry County".
   - Property tax refunds: a county council may allow more years.
2. **Siblings.** The town pages were compared by whole names (`review/SIBLING-OWNERS.md`). Garden City and Pawleys Island both told Atalaya's history; Pawleys keeps it, and Garden City links to it.
3. **Gates.**
   - Scores are 99 to 100.
   - struck-check, house-claims, `build.js check` and `audit` all pass, and so does `npm test`.
   - claims-scan and facts-check find nothing new: only the old findings on pages not in this batch.
   - v1.20 to v1.26 apply cleanly to a fresh live clone, and every page and spec matches.
4. **llms.txt.** The five entries are rewritten from each page's own title and description.

## Notes for later

- The Dunes Golf and Beach Club grounds are outside the city limits (county municipal layer). The Myrtle Beach page never says otherwise.
- The CRM map API returns at most 144 pins per call, and it ignores `county=` and unknown `city=` values. Its `inside_city_limits` flag disagrees with the city outline; use the outline.
- Photos: `photo-request-group-2.md` is drafted and not sent.

## Stopped here (owner, 2026-11-02)

The owner stopped the run after group 2 because usage was high. Group 3 (cost to own, condos, rent prices, where to buy, Murrells Inlet) was stopped during research; whatever its helpers saved is in each `<slug>/` folder. Still to do: groups 3 and 4 (pages 11 to 20) and the seven unshipped 2026-10-d pages. Before /buyers/cost-to-own/ is rebuilt, apply `relocating-donor.patch`: it freezes that page's current chrome as `data/relocating/donor-cost-to-own.html`, so the relocating pages keep their header and footer. A rebuild of beaches.js with it was byte-identical.
