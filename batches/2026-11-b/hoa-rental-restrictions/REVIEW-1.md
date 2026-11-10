# Review round 1: /hoa/rental-restrictions/ (2026-11-10)

The reviewer's verdict: pass=false, score 8. Six blocking findings, nine nits. All six blocking findings are fixed in the spec (website copy `specs/hoa-rental-restrictions.js`). Not deployed, not committed. `build.js stitch`, `dates` and `llmsfull` not run.

## Findings declined or taken in part

- **Dates (nit).** Dropped "In 2013" (with the builder's 2013 list) and "approved by the board in 2023" (Coquina Harbour). Kept the rest. Each one is the rule itself (Florida's July 1, 2021 cut-off), the case being told (The Atrium's 1997 vote, filed 1998; the 2015 and 2017 court cases), the range of a count (2012 to October 2026), or Pulte's 2017 claim, which the ledger (row 32) says to attribute and date.
- **Sand Dunes strip head.** Not flagged and already a picture ("Sand Dunes condos for sale, with a lazy river on the oceanfront"). Kept.
- **Cannibalization on three siblings.** Outside this page's folders. It stays with the lead as BUILD item 3. The reviewer agrees this page takes no sibling's search.
- **Byline and IDX disclaimer dates.** Set by `node build.js dates`, which is not run here, by rule.
- **Coquina Harbour's $500,000 boat insurance line.** Cut rather than kept after the wow. The ledger's verifier preferred the slip over the figure (row 41), and a dollar amount next to a home invites a reader to read it as a cost.

## What changed (fix round 1)

Blocking:
1. **Coquina Harbour wow.** Now opens: "Coquina Harbour's condos line a marina basin off the Intracoastal Waterway in Little River. Your boat can sit in a slip a short walk from your door. The county lists 78 boat-slip parcels in the harbor's marina." The insurance line is cut. The heading reads "a condo on a boat basin, with 12-month leases". New row 65 (VERIFIED-BY-FIXER): the aerial looked at full size; its record says condo buildings line both sides of the basin.
2. **Seasons at Prince Creek West wow.** The 2013 builder line is gone. Now: "The Murrells Inlet MarshWalk is about 10 minutes away by car, and so is the beach in Garden City. At home, the management company lists indoor and outdoor pools, tennis and bocce." New rows 63 (both drive times, OSRM re-run today: 9.7 min, 4.43 mi; 12.4 min, 6.02 mi, rounded as the sibling ledger does) and 64 (FirstService release re-fetched today, quote exact), both VERIFIED-BY-FIXER, carried from the Seasons ledger rows 76, 81 and 56.
3. **Strip heads, bold and true.** Del Webb: "Del Webb homes with the beach club in the dues". Myrtle Trace: "Myrtle Trace homes among fifteen ponds" (not "on": not every home is on a pond). North Beach Plantation: "North Beach Plantation: an island resort you can rent your way" (the entry heading already says "rent it any way you like"). The Farm: "The Farm homes, where the board can't ban renting". Coquina Harbour: "Coquina Harbour condos on a boat basin off the waterway". Seasons: "Seasons at Prince Creek West homes, 10 minutes from the MarshWalk". BUILD.md "For the lead" item 2 carries the new heads.
4. **Credit on the burned-in label.** The harbour aerial's credit now sits under the photo in small grey type, above the caption, so no words sit on the labels at any width. The photo also keeps its 4:3 frame at every width; the wide-screen 16:9 cut was cropping the top of the US 17 label. Both changes are in the spec only (photos.js is shared and unchanged), with a check that fails if the credit goes back inside the frame. Seen at 320, 390 and 1440.
5. **The 29-word Del Webb sentence.** Now two: "At Del Webb at Grande Dunes, beach club access comes with the base HOA dues. Pulte said in 2017 it was the only Del Webb in the country to do that." The present tense rests on new row 62 (VERIFIED-BY-FIXER): the 2025 budget still pays the Grande Dunes Ocean Club from all owners' dues (hub ledger row 10).
6. **The grandfather point.** Rule-change section opens "Yes, by the vote its papers require." and stops. The Florida table's South Carolina row reads "Everyone, including owners who bought first." The point now stands in the short answer, the law section and the FAQ.

Nits taken:
- Myrtle Trace leads with the ponds: "Myrtle Trace has fifteen ponds. They sit on 42 acres of common land the HOA owns, with the clubhouse and the pool."
- North Beach Plantation: "One step comes first." is now "Rental guests must register."
- The addendum quote drops "CCRBR": it "asks the seller about any owners association "resale or rental restrictions"."
- The credits list no longer ends with "Chapter3 Realty resized these photos and cropped some of them." Each credit already says what was changed. Done in the spec; photos.js is unchanged.
- "association's rules" stays plain (a first try at "posted rules" fired the scorer's P9 attribution check).

## Gates (rebuilt 2026-11-10)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/rental-restrictions/` | 99/100 (SEO 100, AEO 100, Human 99, Trust 100), 2,322 words. The one partial is unchanged: P6, "master deed" 5 times. |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page (the same 4 older wrong sentences on other pages) |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js .../hoa-rental-restrictions-struck.json <page>` | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/critic.mjs http://localhost:8872 /hoa/rental-restrictions/ --widths 320,390,1440` | 0 blocking, 0 warning at each width |
| `node build.js check` | OK |
| `node build.js audit`, this page | Same as before: FAIL only on the mkpage date lines (`node build.js dates` sets them); warnings for 3 body dates, "may/might" 17 times, A20 (no Tim quote, by rule). |
| `node tools/inbound.js <site> --only /hoa/rental-restrictions/` | 9 referring pages |

By hand on the built text: no sentence over 28 words, no em or en dash, none opens with "So" or "Here is", no rate or payment, Devin only in the byline. "bought before" appears 3 times (short answer, law section, FAQ), "CCRBR", "One step", "Besides the roads", "In 2013" and "$500,000" 0 times.

Shots: full page `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/hoa-rental-restrictions/shots/hoa-rental-restrictions-320.png`, `-390.png`, `-1440.png`; each changed entry at each width, `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/hoa-rental-restrictions/el-<entry>-<width>.png`; critic JSON `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/hoa-rental-restrictions/critic.json`. Looked at: the harbour figure at 320, 390 and 1440 (credit under the photo, every label whole), and the Coquina Harbour, Del Webb, Seasons and Myrtle Trace entries.

Files touched: website copy `specs/hoa-rental-restrictions.js` and `chapter3realty/hoa/rental-restrictions/index.html` (rebuilt); Blog-Brain `facts.md` (rows 62 to 65), `BUILD.md` (strip heads), this file. Spec before this round: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/hrr-spec-before-fix1.js`.
