# FIX: /buyers/relocating/moving-checklist/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 1, Conway "who it serves": "water in some areas just outside it" understates row 2 (Conway also serves sewer outside the city in some areas) and uses a distance word. Write "Water and sewer inside the city, and in some areas outside it."


Source: `data/relocating/pages/moving-checklist.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here. Keep every other figure on the page as it is.

## 1. Utility table: fill the two empty rows (rows 1, 2, 4, 5)

Row "Conway". Old cells: "Runs its own utility billing." / "Ask the city."

New:
- Provider and who it serves: "City of Conway. Water and sewer inside the city, and water in some areas just outside it."
- Deposit and fees: "Inside the city, a $100 deposit and a $50 service charge. Outside the city, a $150 deposit for water and sewer or $75 for water only, plus the $50 charge. The city sets up service only after the closing." (rows 1, 2, 3)

Row "Georgetown County Water and Sewer District". Old cells: "Pawleys Island and Litchfield, on the Georgetown side." / "Ask the district."

New:
- Provider and who it serves: keep "Pawleys Island and Litchfield, on the Georgetown side."
- Deposit and fees: "A transfer fee to put the account in your name: $161 for water and sewer if you own, $261 if you rent." (rows 4, 5)

Do not write "deposit" in the district's cell (row 5 note).

## 2. Golf cart rules: a three-row list (no new facts)

Old paragraph after "Towns can add rules, and three of them have.":
> North Myrtle Beach allows carts sunrise to sunset on 35 mph roads and lets them cross, but not drive along, Ocean Boulevard, 27th Avenue South, Highway 17, and Sea Mountain Highway; the fine is $100 and up to 30 days. Surfside Beach is the exception on hours: carts with permanently mounted headlights and taillights may run at night, carts without lights only from 30 minutes before sunrise to 30 minutes after sunset. The City of Myrtle Beach keeps daylight hours, bars carts from sidewalks and multi-use paths, and closes Ocean Boulevard to carts over Memorial Day weekend.

New: a list (`<ul>`, or a three-row table with the columns "Town" and "What it adds"), one row per town, same words split into short sentences:
- **North Myrtle Beach.** Sunrise to sunset, on 35 mph roads. Carts may cross Ocean Boulevard, 27th Avenue South, Highway 17 and Sea Mountain Highway, but not drive along them. The fine is $100 and up to 30 days.
- **Surfside Beach.** Carts with permanently mounted headlights and taillights may run at night. Carts without lights run from 30 minutes before sunrise to 30 minutes after sunset.
- **City of Myrtle Beach.** Daylight hours. No carts on sidewalks or multi-use paths. Ocean Boulevard is closed to carts over Memorial Day weekend.

Keep "Outside city limits the state rules apply." after the list.

## 3. Nothing else

The triage says the page earns clicks. Keep the rest as it is. Rebuild with the assembler and run `node build.js dates`.
