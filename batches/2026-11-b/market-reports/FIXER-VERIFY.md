# FIXER-VERIFY: /market-reports/

Independent verifier, 2026-11-10. I did not research these rows. Rows checked: every row marked VERIFIED-BY-FIXER (21, 22). I downloaded the CCAR file again (sha256 1c71eff8...d497af5, the same file) and read pages 2 and 3 myself. I read the Myrtle Beach findings file and the built page's `<main>`.

Counts: 2 VERIFIED, 0 CORRECTED, 0 STRUCK.

| # | Status | Reason |
|---|---|---|
| 21 | VERIFIED | `data/2026-11-a/submarkets-myrtle-beach/findings.json` listings.oceanfront_condos_inside: "n": 668, "in_str_zone": 667. MB ledger row 9 is verified (verifier 2026-11-02, re-queried the CRM). Page: "Inside the city of Myrtle Beach, nearly every condo for sale in an oceanfront building sits where the city allows nightly rentals." Inside the city, no CCAR figure in the sentence, no count. Limit: listings pulled 2026-11-02; the ratio is what is said. |
| 22 | VERIFIED | CCAR pp. 2-3 read again: houses for sale 3,994 then 3,855; condos 3,235 and 3,235 (0.0%); months of supply 4.2 and 7.5; days to an accepted offer, Jan to Sep, 122 and 131. Arithmetic redone: 3,855 < 3,994 ("fewer houses"); 3,235 = 3,235 ("the same number of condos"); 7.5 / 4.2 = 1.79 ("almost twice as long"); 3,855 + 3,235 = 7,090 ("about 7,100"); 122 days = 4.0 months, 131 > 122 ("about 4 months ... condos a little longer"). Every page sentence stays inside these. |
