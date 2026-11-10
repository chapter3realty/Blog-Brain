# Fixer rows, independent check (2026-11-10)

/hoa/rental-restrictions/. Rows marked VERIFIED-BY-FIXER: 62, 63, 64 and 65.

| Row | Result | Note |
|---|---|---|
| 62 | CORRECTED | Budget PDF (ResourceCenter/Download/48372~3384081) re-downloaded: Department 1 Operating carries "40015 Assessments - GD Ocean Club ... 781,440.00" and "51997 Ocean Club Fees ... 781,440.00", a pass-through collected from all owners, as a line of its own beside "40005 Assessments". The recorded declaration (48372~3083079, PDF p. 55, printed 50, Sec. 7.13, read by OCR today) says: "The assessments and other charges payable to the Master Association include a mandatory fee payable by all Owners for membership in, or the right to use of, the 'Beach Club' in Grande Dunes ... The assessments, charges, fees, and other payments due to the Master Association are separate from, and in addition to, the Assessments provided for in this Declaration". So the beach club is a required fee billed with the dues, not part of the base dues. "Base HOA dues" stays Pulte's 2017 wording, said as Pulte's. Right value: every owner pays a mandatory Beach Club fee for the Grande Dunes Ocean Club, and the association collects it as its own line with its dues [declaration Sec. 7.13; budget to 9/30/2025]. |
| 63 | VERIFIED | OSRM re-run today: MarshWalk 581.9 s, 7,131.2 m (9.7 min, 4.43 mi); Atlantic Avenue boardwalk access 745 s, 9,683.6 m (12.4 min, 6.02 mi). Same points as the Seasons ledger rows 76 and 81. "About 10 minutes" for the beach uses that ledger's verified rounding (over 10 minutes, to the nearest 5); 12.4 is the edge of it. Router time without traffic. |
| 64 | VERIFIED | FirstService release fetched today, dated January 31, 2024: "Seasons at Prince Creek, a 55 and better community in Murrells Inlet, offers its residents a beautiful clubhouse, indoor and outdoor pools, a fitness center, tennis, and bocce ball." The release says "Seasons at Prince Creek"; the Seasons ledger row 56 already tied it to this community. |
| 65 | CORRECTED | The photo (NAIP, April 2023) shows condo buildings beside the basin, which Coquina Harbour shares with Lightkeepers Village. Measured today from county layer 24 (LegalDescr LIKE '%COQUINA%'): the Coquina Harbour condo parcels are about 120, 330 and 510 ft, edge to edge, from the nearest boat-slip parcel. "Short walk" holds, but the page gives no measure (CRAFT 2). "Your boat can sit in a slip" reads as if a slip comes with the condo: the slips are separate parcels ("COQUINA HARBOUR MARINA; DOCK SLIP UNIT ..."), apart from the units. Right value: the marina's boat slips are their own parcels, about 100 to 500 feet from the condo buildings [county parcels, 2026-11-10]. |

## Page sentences to change

Row 62. Page: "At Del Webb at Grande Dunes, beach club access comes with the base HOA dues. Pulte said in 2017 it was the only Del Webb in the country to do that."
Use: "At Del Webb at Grande Dunes, every owner pays a required fee for the Grande Dunes Ocean Club, the beach club, and the association bills it with its own dues. Pulte said in 2017 it was the only Del Webb in the country to include beach club access in its base HOA dues."

Row 65. Page: "Your boat can sit in a slip a short walk from your door. The county lists 78 boat-slip parcels in the harbor's marina."
Use: "The county lists 78 boat-slip parcels in the harbor's marina, each its own parcel, about 100 to 500 feet from the condo buildings."
"Coquina Harbour's condos line a marina basin off the Intracoastal Waterway in Little River." can stay: the photo shows it.

Struck list: `batches/2026-11-b/facts/hoa-rental-restrictions-struck.json`, entries "rental-restrictions 62" and "rental-restrictions 65". `node tools/struck-check.test.js`: all controls pass.
