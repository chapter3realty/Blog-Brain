# FIX: /buyers/relocating/healthcare/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- The count "six" leaves out McLeod Health Carolina Forest, which has admitted patients in four beds since January 2025 (row 2). Lead decides; true wording in VERIFY.md item 1.
- South Strand "is building it", "is going up", "going up beside it": news only (row 6 STRUCK at primary). Say Grand Strand Health plans it (row 5) and local news reported the groundbreaking.
- Tidelands "say plans for it are underway": present tense on a September 2025 statement (row 7 CORRECTED). Write "In September 2025, MUSC Health and Tidelands Health said plans for it remained underway."
- Tidelands campus sentence: the long-term acute care hospital is not in the 2026 State Health Plan; only the rehabilitation hospital is.
- Drive table caption, column, dek and FAQ: "the nearest hospital" must be "the nearest of five main hospitals" (row 8 CORRECTED). The note must say McLeod Health Carolina Forest is not in the count, not only its new building.


Source: `data/relocating/pages/healthcare.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here.

## The count, everywhere the same

Row 1 (is the new McLeod building open?) is NOT FOUND. Use option B now. If the verifier opens McLeod's own page and it says the hospital is open to patients, use option A instead. One option on every surface; never mix.

The wording that is true either way (option B): "three new hospitals approved for the county: McLeod Health Carolina Forest held its ribbon cutting in August 2026; South Strand and Tidelands Carolina Bays are still to come." Rows 3, 4.

### Title and headline (spec lines 46 and 48)

- B: `'Myrtle Beach Hospitals: 6 Today and 3 New Ones Approved'`
- A: `'Myrtle Beach Hospitals: 7 Today, 2 More Coming'`

### H1 italic line

- Old: "six hospitals now, and three more on the way."
- B: "six hospitals, and three new ones approved."
- A: "seven hospitals now, and two more coming."

Set the italic line at the approved size (half the H1).

### Hero dek (spec line 53, rows 4, 8, 9)

- Old: "Six hospitals serve Horry and Georgetown counties, led by a Level I trauma center. Three more are being built or opening. Beds, addresses, the VA clinic and drive times."
- B: "Six hospitals serve Horry and Georgetown counties, led by a Level I trauma center. The state has approved three more. Beds, addresses, the VA clinic and the drive to the nearest hospital from six towns."
- A: "Seven hospitals serve Horry and Georgetown counties, led by a Level I trauma center. Two more are coming. Beds, addresses, the VA clinic and the drive to the nearest hospital from six towns."

### Meta description (spec line 47)

- Old: "... the three being built or opening, ..."
- B: "... the three new ones the state has approved, ..."
- A: "... the two still coming, ..."

### Section "Three hospitals are being built or opening" (rows 3 to 7)

- H2 B: "Three new hospitals approved". A: "One new hospital open, two more coming".
- Old intro: "This is unusual and it is a direct consequence of how fast the county is growing. The status of each one below is as of October 2026."
- New intro: "The state approved all three in September 2023. Each one's status is below." (row 4) Remove the typed "as of October 2026"; do not type a new date.
- McLeod Health Carolina Forest, 48 beds. Old sentence: "McLeod held a ribbon cutting for the new building on 27 August 2026 and said it would open to patients that fall." B: "McLeod held a ribbon cutting for the new building on 27 August 2026." (row 3) A: replace with the opening sentence from the new row. Keep the other sentences.
- South Strand Hospital, 59 beds. Old: "Grand Strand Health broke ground on 9 February 2026 on the US-17 Bypass at Sheffield Parkway, where it runs South Strand Medical Center. Fifty-nine inpatient beds and four operating rooms, with completion expected late 2027." New: "Grand Strand Health is building it off the US-17 Bypass at Sheffield Parkway, where it runs South Strand Medical Center. Local news reported the groundbreaking on 9 February 2026. Fifty-nine inpatient beds and four operating rooms." (rows 5, 6) The completion year goes (row 6: sources conflict). Keep the sentence about the free-standing emergency departments only if its own row is verified; it was not re-checked here.
- Tidelands Health Carolina Bays, 36 beds. Old: "Site work has begun and construction is expected to finish in late 2028." New: "Tidelands Health and MUSC Health say plans for it are underway." (row 7; MUSC, September 2025) Keep the campus sentence (long-term acute care and rehabilitation hospitals), which the state records support (construction-pipeline-facts.md 2.3).

### FAQ "Are new hospitals being built in Myrtle Beach?" (spec line 34)

- Old: "Two are under construction. McLeod Health held a ribbon cutting for its 48-bed Carolina Forest hospital on August 27, 2026, and said it would open to patients that fall. Grand Strand Health broke ground in February 2026 on the 59-bed South Strand Hospital on the US-17 Bypass, due late 2027. Tidelands Health has begun site work on a 36-bed hospital at SC-31 and SC-707, due late 2028."
- B: "Yes. The state has approved three. McLeod Health held a ribbon cutting for its 48-bed Carolina Forest hospital on August 27, 2026. Grand Strand Health's 59-bed South Strand Hospital is going up on the US-17 Bypass; local news reported the groundbreaking in February 2026. Tidelands Health plans a 36-bed hospital at SC-31 and SC-707." (rows 3 to 7)
- A: "Yes. McLeod Health's 48-bed Carolina Forest hospital is open [row]. Two more are coming: ... (as B, last two sentences)."

### FAQ "What hospitals are in Myrtle Beach?"

- Old last sentence: "Three more are being built or opening."
- B: "The state has approved three more." A: "McLeod Health Carolina Forest's new 48-bed building is the seventh, and two more are coming."

### "The area you choose changes the drive" paragraph

- Old: "Carolina Forest has the McLeod Health Carolina Forest hospital, whose new 48-bed building held its ribbon cutting in August 2026" stays (row 3). "with the 59-bed hospital under construction beside it" becomes "with the 59-bed hospital going up beside it" (row 6, news).

## Drive table (row 8; row 9 NOT FOUND)

Add, under the H2 "The area you choose changes the drive", before the first paragraph:

Caption: "Minutes by car to the nearest hospital, from the middle house of each place, with no traffic. Our measurement. Summer traffic on US 17 and SC 501 adds time."

| Where you live | Nearest hospital for most homes | About |
|---|---|---|
| Little River | McLeod Health Seacoast | 7 minutes |
| North Myrtle Beach | McLeod Health Seacoast | 10 minutes |
| Myrtle Beach | Grand Strand Medical Center | 12 minutes |
| Carolina Forest | Conway Medical Center or Grand Strand Medical Center | 13 minutes |
| Conway | Conway Medical Center | 13 minutes |
| Murrells Inlet | Tidelands Waccamaw | 6 minutes |

Note under the table: "Measured to five hospitals: Grand Strand Medical Center, Conway Medical Center, Tidelands Waccamaw, McLeod Seacoast and McLeod Loris. The new McLeod Carolina Forest building is not in the count. Free-standing emergency rooms are not in it either." (rows 8, 9)

Do not call this an emergency room table (row 9). Do not add an ER column.

In the FAQ "Does where I buy change how far I am from a hospital?", add after the first sentence: "From the middle house in each of six towns, the nearest hospital is 6 to 13 minutes away with no traffic, by our measurement." (row 8)

## Build

Rebuild with the assembler and run `node build.js dates`.
