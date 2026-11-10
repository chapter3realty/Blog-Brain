# Build notes for the lead: /why-chapter-3/

Nothing here is edited by this page's agent (idx-lib/, partials/ and idx-places.json are the lead's).

1. **Feed (idx-lib/feeds.js).** `/why-chapter-3/` has no entry, so the edge puts no homes under the opening. Proposed: `"/why-chapter-3/": { ...NEWEST, head: "Just listed on the Grand Strand. Pick one, and we check it" }`. The search (active, listed in the last 21 days, $250,000 and up, five towns) makes "Just listed on the Grand Strand" true; the second sentence is our offer, not a claim about the homes. If a feed title may not carry an offer, keep NEWEST's own title.
2. **No new place.** The page names no place, so it needs no `homes()` strip and no idx-places.json entry.
3. **Trade-name line (partials, compliance).** The header logo reads "Chapter III Realty". SC Code 40-57-135(E)(3) says a firm that operates under a trade name must reveal who holds it (facts.md R5). The live footer says "Chapter3 Realty Corp ... license 28849" but has no line tying "Chapter III Realty" to it. The 2026-10-01 audit proposed "Chapter III Realty is a trade name of Chapter3 Realty Corp, SC real estate company licence 28849" (`audit/evidence/compliance.md` C5). For the lead and the owner to decide; it is sitewide, not this page's.
4. **Photo.** The office front at 573 Vista Drive, from the street, no people. A request for the photo partner (owner's Gmail, `templates/photo-request-email.md`).
5. **Referring links** after the rebuild: see PLAN.md "Referring pages".
6. **Data.** `data/2026-11-b/why-chapter-3/listing-vs-map.json` is the file of record for the flood-field count. Re-run before release with `RAW=<scratch> python3 -I scripts/pull_listing_vs_map.py data/2026-11-b/why-chapter-3` (about 10 minutes; it re-pulls every listing). The listing pulls and FEMA polygons stay in the scratch folder, out of the repo.
