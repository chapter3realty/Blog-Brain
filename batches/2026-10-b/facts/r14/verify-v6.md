# Gated communities, round 14c verification v6

Date: 2026-10-15. Page: /buyers/gated-communities/. Rows 400, 402, 405, 407, 440, 442, 443, 480, 481, 482, 484, 489, 493, 497, 499, 500 (16). Every URL opened by me (curl or fetch; the county layer by query). No listing, agent site or aggregator opened. Redfin, Zillow and Realtor.com not opened.

## Counts

| Status | Rows | Count |
|---|---|---|
| verified | 402, 405, 440, 442, 443, 480, 481, 482, 484, 489, 493 | 11 |
| verified with corrected wording | 400, 407, 497, 499, 500 | 5 |
| wrong | none | 0 |
| unverifiable | none | 0 |

Corrections are in `struck-v6.json` (5 entries; each fires on its struck text and not on its approved text, checked with node; `node tools/struck-check.test.js` prints "all controls pass").

## Corrections

- **400 Tidewater tags.** Past tense and attributed, not the present: "Tidewater Plantation (about 1,100 homes, three entrances) moved from key fobs to hands-free RFID vehicle tags [TagMaster case study, undated]." The page also calls Tidewater a community "in North Carolina" (maker's error).
- **407 Prestwick gate.** Drop the present-tense claim about public golfers and "lets in the paying public". Use: "A 2016 Prestwick page describes the drive in as passing a guard gate on the way to the bag drop; ask the club whether the gate is staffed today."
- **497 Prestwick memberships.** Drop "has sold no golf memberships since 2015". Use: "Prestwick announced in December 2015 that it would end golf memberships and become a daily-fee course on December 31 [Club + Resort Business, 2015]; its site today lists no membership." The source is trade press; I found no primary statement.
- **499 Ocean Club.** Not safe for Calais, Palermo and Villa Venezia by name. Use: "Many Grande Dunes homes come with a household membership to the Ocean Club; we confirm it for each home [Grande Dunes Master Association]."
- **500 Golf Village POA.** The county says "GOLF VILLAGE POA" and "THE GOLF VILLAGE POA INC", not "Property Owners' Association". Use: "County records show the Golf Village POA owns the common areas labeled Palermo and Villa Venezia; Calais has its own POA." No source shows Palermo is part of Golf Village.

Notes on rows verified without change: 442 gives no proof of a staffed gate (the guardhouse email name is the only sign; no hours). 493 Legends does print prices for two other tiers.

## Special questions

1. **Row 400, primary source?** It is the maker's own marketing case study. It is primary for what TagMaster supplied to Tidewater at some time (undated; upload paths suggest 2016 to 2021), and not for how the gate works today. It does not mention guards or hours. The page may state the past change from key fobs to RFID tags, the reason given, 1,100 homes and three entrances, attributed to the maker and dated as "undated". It may not state present-day operation.
2. **Row 407, present tense?** No. The only source is a 2016 marketing sentence ("the look and feel of a private club from the minute your drive through the guard gate and up to the bag drop"). The club's current home page does not mention a gate. Use the wording above.
3. **Rows 499 and 500, Ocean Club for Calais, Palermo and Villa Venezia?** No. The association says "As a Grande Dunes homeowner, you receive a complimentary household membership to the Grande Dunes Ocean Club", with no condition and no neighborhood list. Calais and Villa Venezia are on its neighborhood list and its contacts sheet; Palermo is on neither. Strongest true wording: "Many Grande Dunes homes come with a household membership to the Ocean Club; we confirm it for each home." The Ocean Club's own site published no membership terms I could read.
4. **Rows 480 to 497, "none of the private clubs here publishes its dues"?** Do not write "none". What I checked, by club: Wachesaw (no price), The Reserve (none), McConnell Golf (none), The DeBordieu Club (none), the Dye Club (no price in the page text; a video I could not watch), Grande Dunes Members Club (categories page has no price; the master association points to the club for "membership details and pricing"), Legends Heritage Club Membership (none, but the same page prints $49.95 a year and $39.95 a month for two other tiers), Prestwick (no memberships). Not checked: the Ocean Club (its membership page returned no text) and any club not in these rows. Safe wording: "The clubs we checked list their membership types but not their prices; you call or fill in a form [club sites, October 2026]."
