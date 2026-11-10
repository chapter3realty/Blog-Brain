# FIXER-VERIFY: /submarkets/

Independent verifier, 2026-11-10. I did not research these rows. Rows checked: every row whose status starts VERIFIED-BY-FIXER (H3, H12, H14, H15, H21). That status is the row's status in its town ledger; the hub verifier's ruling follows it in the same cell. I re-ran `build_towns.py` on a copy (so the working copy's `towns.json` was not touched): "all nine match their guides", and its output equals the committed `towns.json`. I re-queried Horry County GIS layers 24 and 31, and opened the city news item, the airport's home page and the Conway Parks Guide PDF myself. I read the built page's `<main>`.

Counts: 4 VERIFIED, 1 CORRECTED (already corrected; the page carries the corrected wording), 0 STRUCK.

| # | Status | Reason |
|---|---|---|
| H3 | VERIFIED | `data/2026-11-a/submarkets-myrtle-beach/house-resales.json` houses: "n": 459, "median": 539500.0; the re-run rounds it to $540,000. Page: "Middle sale price $540,000 a resold house in the city". |
| H12 | VERIFIED | Layer 24, LandUseCode 306, queried today: 322 parcels. Two are not slips ("COQUINA HARBOR NORTH; PHASE II", 2.05 acres; "BRYANT DR & WHARF AV"). Mariner's Pointe 116, Coquina Harbour 80, Lightkeepers 25 = 221; Dock Holidays 93 and Harbourgate 6 are outside. 221 / 320 = 69 percent (221 / 319 if Harbourgate's "MCU-1" common unit is left out; still 69). Page: "About two of every three deeded boat slips in the county are here: slips you buy and own, each on its own deed." Holds. |
| H14 | VERIFIED | cityofmyrtlebeach.com news item, read today: "Later additions have extended the boardwalk to 16th Avenue North and a total of 1.3 miles in length"; its third section is "a meandering oceanfront promenade". Page: "Downtown, the Boardwalk is about 1.3 miles long, beside the ocean." |
| H15 | VERIFIED | flymyrtlebeach.com, read today: "With more than 50 nonstop destinations". Layer 31 at the terminal (33.6797, -78.9283), queried today: MYRTLE BEACH. Page: "The airport is inside the city, with nonstop flights to more than 50 destinations." |
| H21 | CORRECTED | Conway Parks Guide PDF, read today: "ADA compliant playground replicating the F.G. Burroughs Steamboat"; "The Riverwalk is an approximately 1.5 miles of breathtaking views of the Waccamaw River". The row's "old river steamboat" is not in it; the hub verifier corrected it and the struck list already has entry "submarkets H21". Page: "Riverfront Park on the Waccamaw has a playground built like a steamboat, the F.G. Burroughs, beside a riverwalk of about 1.5 miles." That is the corrected wording; no change needed. |
