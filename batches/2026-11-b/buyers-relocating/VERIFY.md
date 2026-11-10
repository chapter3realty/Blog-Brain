# Verification: /buyers/relocating/ (batch 2026-11-b, the relocation hub)

Independent verifier, 2026-11-10. I did not research this page. Ledger: `facts.md` in this folder (status and note columns updated). Struck list: `batches/2026-11-b/facts/buyers-relocating-struck.json` (new, 18 entries: rows 7, 8, 15 and the section G list). Each entry fires on its own struck wording and no approved wording fires one; `node tools/struck-check.test.js` prints "all controls pass".

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 23 (1-6, 9-14, 16, 17, 19, 21, 22, 24-29) |
| CORRECTED | 7 (new: 7, 8, 15; carried with the sibling verifier's wording, checked: 18, 20, 23, 30) |
| STRUCK | 0 rows. The county's horse rule inside row 8 is struck and replaced. |

New rows I checked from scratch: 7, 8, 12, 13, 14, 15, 24, 28. Carried rows were checked against the named sibling row and the story bank.

## What I opened and reran

- Horry County, "About Our Beaches", live. It matches DATA/raw/horry-beaches.html byte for byte. Both quotes (golf carts, horses) are there.
- SCDMV "Moving To SC", live. It matches DATA/raw. Both 45-day quotes are there.
- SC Bar Ethics Advisory Opinion 05-16, live. It matches DATA/raw. I read it in full.
- IRS `countyinflow2223.csv`, downloaded fresh. Its 206 Horry rows are the same as the copy in data/2026-11-a.
- Census 2024 county gazetteer, downloaded fresh. It is identical to DATA/raw.
- Census county adjacency 2024. Brunswick County, NC borders Horry County.
- `build_hub.py`, rerun from a scratch copy. Its hub.json is identical to DATA/hub.json. The Charlotte control is 170 miles.
- Valhalla router (valhalla1.openstreetmap.de), as the second router for the drive figures:

  | Trip | Valhalla | OSRM |
  |---|---|---|
  | Brunswick | 52 | 51 |
  | Fairfax | 442 | 438 |
  | Broward | 695 | 693 |
  | Suffolk | 764 | 747 |
  | Worcester | 854 | 842 |
  | Charlotte | 176 | 170 |

- `out-of-state-buyers.json`, counted myself. The SC, US, Canada, other-country and blank counts match. So do every state's count, the condo split and the ten guide states (2,902).
- The ten `/buyers/relocating/from-<state>/` pages exist. None of them prints a mileage.
- On the conflict over rows 7 and 8, I also read three more sources:
  - the Georgetown County Sheriff's Office (2020-11-04)
  - Myrtle Beach State Park's own page (S.C. State Parks)
  - two Sun News pieces carried on Yahoo (2024-03-18, golf carts; 2025-01-24, horses)
- The Horry County Code (Municode) could not be opened. library.municode.com and api.municode.com answer 403 behind Cloudflare.

## Corrections

**Row 7 (golf carts).** CORRECTED, for geography.

- "Horry County's beaches" reads as every beach in the county, cities included. The county runs about 9 miles of beach, in three stretches outside the towns.
- The Georgetown County Sheriff's Office confirms the November 1 start. It says the rule stops at the county line just south of the Garden City Pier.
- Use: "From November 1 through February 28, golf carts with a valid state permit and a licensed driver may go on the beaches Horry County runs: its unincorporated stretches, which include the Horry County part of Garden City Beach" [Horry County, About Our Beaches, read 2026-11-10; Georgetown County Sheriff's Office, 2020].
- Open conflict: a Sun News piece (2024) says the county bans every motor vehicle on the beach. Both official sources say otherwise, so the row stands. The lead should confirm the code section once Municode can be read.

**Row 8 (horses).** CORRECTED. The county's horse line must not be printed.

- The county page still says it. Its text has not changed since at least 2015 (a campground copied it then), and the code could not be opened.
- The Sun News (2025) says Horry County bans horses on the beach year round.
- In that stretch, the one operator that publishes a horse rule is Myrtle Beach State Park. It gives other dates and requires a permit. That is the trap of a live guide page that may show old text.
- The verifier question in the note: "central portion" is the county stretch from Springmaid Pier to the Surfside Beach town line, with the campgrounds. Garden City is south of Surfside and outside it. The note's "(Garden City and the county stretches near Surfside)" is wrong.
- Use: "Myrtle Beach State Park opens its beach to riders and their horses from the third Saturday in November through the last day of February. Each horse needs a season permit and a current negative Coggins test, and no horse stays overnight" [S.C. State Parks, Myrtle Beach State Park, Things to Do, https://southcarolinaparks.com/myrtle-beach/things-to-do, read 2026-11-10].
- Never "November 1" with horses. Never the county zone. Never "owners pick up after them".
- PLAN item 3 (give the beaches page the county's horse zone) should carry this line instead. The hub's PLAN line 72 ("...and horses are...") needs the same change.

**Row 15 (Brunswick County).** CORRECTED, for a distance word.

- "Next door" holds: Brunswick County shares a border with Horry County.
- "About 50 road miles from Myrtle Beach" is measured from the middle of the county. Its edge at the state line is much closer.
- Use: "North Carolina's largest source of new households is next door: Brunswick County, which borders Horry County; from the middle of the county it is about 50 road miles to Myrtle Beach" [IRS SOI 2022-2023; Census county adjacency 2024; OSRM].

**Row 12 (Florida), note only.**

- The 5 rows OSB 2 adds to reach 3,603 are not unreadable addresses. They are buyers whose tax bill goes to another country (OSB 2: "other country 5").
- hub.json's `outside_sc` (3,598) and `houses_outside_sc` (2,293) leave those 5 out. The page prints OSB's 3,603 and 2,297, never hub.json's values.

## Limits the writer must keep (verified rows)

- **Row 14.**
  - Miles only, with "about".
  - The table head says "from the middle of the county" (the Census internal point).
  - A second router reads 0 to 2 percent longer, so Suffolk and Worcester could round to 760 and 850. Do not imply precision finer than 10 miles.
- **Row 24.**
  - It rests on a 2005 Bar ethics opinion, not a statute. Say "may close by mail".
  - The papers still need a notary and two witnesses to record (row 22).
  - A lender may set its own signing rules. The opinion itself says large loan packages have made closings by mail rarer.
- **Row 13.** "About 8 in 10" (2,902 of 3,603 = 80.5%).
- **Row 3.** "Long Island" means Suffolk and Nassau only, as on the why page.
- **Row 17.** Keep the condition: when you buy with us.
- **Row 26.** Label it our clients' experience, not a promise. No quotation marks.
- **Row 27.** No client name. BrickWood appears only with the inline affiliated business disclosure and "our affiliated lender, BrickWood Mortgage, a separate company".

## Not to publish

- The county's winter horse zone (row 8 as first written), on the hub or on the beaches page.
- Any line that puts horses at Garden City.
- Any sentence that lets golf carts onto a beach inside a city or town, or onto the Georgetown County part of Garden City.
- Section G's live wording. It is now in the struck list file, so `tools/struck-check.js` holds the rewrite to it.
