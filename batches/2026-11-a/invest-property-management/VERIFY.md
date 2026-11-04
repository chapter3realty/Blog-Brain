# Verification: /invest/property-management/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did not research these facts. Ledger: `facts.md` (status and verifier columns now filled). Struck list: `invest-property-management-struck.json` (11 entries; each struck sentence fires its entry and each approved wording fires none; on the current live page it already catches rows 17 and 24).

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 23: 2, 3, 4, 5, 7, 8, 9, 11, 14, 16, 17, 18, 20, 21, 22, 27, 28, 29, 30, 32, 33, 34, 35 |
| CORRECTED | 12: 1, 6, 10, 12, 13, 15, 19, 23, 24, 25, 26, 31 |
| STRUCK | 0 |

## How each source was checked

- **Fee pages (rows 1 to 7).** Re-read live on 2026-11-04: Beach Rental Group, J & P Unlimited, the BHHS rentals site, Childs (fee page and home page), PURE, Coastal Heights, Marble, Hemlane, RenPro, MBVHR, Seaside, Evolve. Every quoted term is on the live page. Ocean Breeze answered with a bot check, and its host cannot be reached from this session. I checked it from the researcher's saved copy (`raw/fees/oceanbreeze.html`) only.
- **County parcels (rows 13 to 16).** Re-ran the count queries live. All homes: 227,000, which is 102,511 at 6 percent plus 124,489 at 4 percent. Condos at 6 percent: 32,162. No home has a zero or null ratio. A fresh pull of `fetch_owner_distance.py` and `fetch_bulk_addresses.py` gave identical counts, and `owner-distance.json` rebuilt the same. The bulk list holds the same 261 addresses, in a different order.
- **PUMS (rows 9 and 10).** Re-ran the sibling's PUMS analysis. `detached_moved_in` is the same (MV 1 = 25.8). The 3-bedroom median is $1,608, with a margin of plus or minus $284.
- **CRM (row 17).** Live aggregate count today: 873 of 1,074 oceanfront-building condos list a vacation rental program. The reused file gives 871 of 1,071. The share is the same.
- **Law (rows 18 to 30).** Re-read live: SC Code 40-57 and 27-40, 12-36-920, the SCDOR accommodations page, the Horry County hospitality fee page, the Myrtle Beach business FAQ, IRS Publication 527 (2025 returns) and HUD's overview. LLR's lookup page lists the licence types (row 31).
- **Arithmetic (rows 6, 11, 12, 14, 15, 16).** Redone by hand. All match `findings.json`.
- **Stories and rules (rows 32 to 35).** Each matches `stories/stories.json` and `voice/RULES.md`.

## Corrections

1. **Row 1 (method).** Only three of the five pages print an office in Horry County. The BHHS rentals site prints no office address. Its fee page footer reads 2015, and that does not prove it was last updated in 2015. Use: "five managers that serve Horry County: three with an Horry County office, one Myrtle Beach rentals site of a Berkshire Hathaway HomeServices franchise, one regional firm in Summerville."
2. **Row 6.** The 9.4 percent on a $1,600 rent holds. Cut "the 7 percent applies only when the rent is above about $2,140". The firm's home page calls the plan "a flat fee of $150.00 per month", so the fee may never be 7 percent of the rent. Use: "A plan that prints 'as low as 7 percent' with a $150 monthly minimum costs about 9 percent on a $1,600 rent. $150 is more than 7 percent of any rent under about $2,140 [firm's fee page; A and B class homes only]."
3. **Row 10.** The data counts households in rented houses that moved in within 12 months. It does not count houses that got a new tenant. Use: "About 1 in 4 households renting a house here moved in within the past 12 months [ACS PUMS 2020-2024, PUMAs 02701 and 02702]."
4. **Row 12.** The file does not say what a basic plan's percentage is charged on. The bookings include the cleaning fees guests pay. Use: "The average Myrtle Beach listing takes in about $25,800 a year in bookings, cleaning fees included. If a basic plan's 13 to 17 percent is taken on all of it, that is about $3,300 to $4,500 [str-market.json]."
5. **Row 13 (and the wording of rows 14 and 15).** The numbers stand. The 22 ZIP codes are Horry County's post offices plus Pawleys Island, including Aynor, Conway, Loris, Green Sea and Nichols. They are not "the Grand Strand". Use "outside the area: outside Horry County's post-office ZIP codes and Pawleys Island". The 6 percent group also holds homes that are not rentals or second homes. Say: "of the homes here not taxed as anyone's legal residence (rentals, second homes and others), about 63 percent".
6. **Row 15.** The numbers stand. Cut the list of who sits at the bulk addresses (timeshare and resort companies, builders, landlords, managers). The pull read addresses, not owner names, so the list is a guess. Use: "Leave out the 261 mailing addresses that receive 10 or more of these tax bills each (10,827 homes), and about 64 percent of the rest still go outside the area."
7. **Row 19.** A property manager is supervised by a broker-in-charge or a property manager-in-charge (40-57-30(39)). Use: "Every licensed manager works under a broker-in-charge or a property manager-in-charge, who answers for the trust account where the tenant's deposit sits."
8. **Row 23.** The 30 days also wait for the tenant to hand back the home ("delivery of possession"). Use: "within 30 days after the tenancy ends, the tenant hands back the home and asks for the deposit, whichever is later."
9. **Row 24.** A manager who signs a lease without the notice becomes the landlord's agent only for notices and legal papers, and for the landlord's duties on that lease (27-40-420(c)). The law also counts that manager as a landlord (27-40-210(6)). Use: "A manager who signs a lease without that notice takes on the landlord's duties for that lease and receives the tenant's notices and legal papers."
10. **Row 25.** Two limits were missing. The tax applies to stays under 90 days. An owner who books guests directly needs no retail licence when the home is rented no more than one week in each calendar quarter, but still files and pays the tax once a year. Use: "On stays under 90 days, whoever takes the guest's booking and payment collects the state's 7 percent on the full booking. An owner who rents only through a manager or a booking site needs no state retail licence. An owner who books guests directly needs one, unless the home is rented no more than one week in each calendar quarter."
11. **Row 26.** The cleaning-fee rule is verified. The sentence "the manager's share is not on the guest's bill" goes past SCDOR, which says only that the manager answers "for the full amount of the booking". Use: "The manager collects the tax on the full amount of the booking." The live page's line "the manager's fees count as part of the rent for accommodations tax" is also on the struck list.
12. **Row 31.** The licence lookup exists and shows property managers and managers-in-charge. "We check a manager's licence" is a practice, not a fact. It stays off the page until the owner answers owner question 2.

Notes on verified rows that limit the wording:
- Row 2: Childs prints "as low as 7%" with a $150 minimum, for A and B class homes only. Never write "7 percent" alone.
- Row 9: use $1,600 only as the worked example's rent. It is never a market finding (rent-prices row 7).
- Row 17: say "about 8 in 10" and "list a vacation rental program". Never "a rental desk is usually there".
- Row 27: the 3 and 1.5 percent are the county's fee only. Cities may add their own.
- Row 28: the business licence rule is the City of Myrtle Beach's only.

## Nothing to withhold from the page

No row needs to come off the page, as long as the corrections above are used.

## Photos (PLAN.md candidates)

| Photo | Licence check | Looked at full size | Verdict |
|---|---|---|---|
| `images/2026-10-d/invest-str-vs-ltr/myrtle-beach-oceanfront-towers-from-the-beach-1200w.webp` | Commons file page (raw wikitext, read 2026-11-04): `{{self\|cc-by-sa-4.0}}`, own work of DiscoA340, 2022-08-14. Matches the record in `data/2026-10-d/invest-str-vs-ltr/photos.json`. | Yes: high-rise towers behind the dune, a lifeguard stand on the right. | Licence OK. The author's description reads "Hotels along the Grand Strand Beachfront". Do not caption the pictured towers as condos. PLAN's caption ("Oceanfront towers in Myrtle Beach, where most condos for sale list a rental program") implies they are condos. Use the recorded caption: "Oceanfront towers along the beach in Myrtle Beach." |
| `images/2026-11-a/invest-condos/myrtle-beach-condo-towers-2011.webp` | USGS data release doi 10.5066/F7N877XX, which resolves to coastal.er.usgs.gov. A U.S. government work, public domain. Record in `data/2026-11-a/invest-condos/photos.json`. | Yes: oceanfront towers and pool decks from a plane, with the beach in front. | OK. |
| `images/2026-11-a/invest-rent-prices/carolina-forest-streets-from-above.webp` | NOAA NGS emergency response imagery, a U.S. government work, public domain. Record in `data/2026-11-a/invest-rent-prices/photos.json`. | Yes: rows of houses on curving streets, with pine woods between them. | Licence OK. I did not re-check the place. The record and the rent-prices verifier place the tile in Carolina Forest. |
| Lockbox (partner photo 1) | Pending. No file yet. | n/a | Pending. |

## Blocked in this session

- `www.oceanbreezebeachvacations.com`: a bot check on direct fetch, and the host is not allowed in this session's network. Row 7 rests on the researcher's saved copy for that firm.
- `commons.wikimedia.org`: the API answered 429. The raw file page did load.
- The container's disk had about 3 MB free during this check. If the checkpoint fails, that is the likely cause.
