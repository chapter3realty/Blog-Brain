# Fix: /invest/str-rules/

The page has no spec; it is a hand-kept page (its copy sits in chapter3realty/invest/str-rules/index.html). Make the change there the way round 1 did, then run `node build.js dates` so the "Updated" line moves. Do not type a date.

## Byline (rows 1, 2)

Now: "By Devin Day, Operations Officer · Reviewed by Tim Nash, Broker-in-Charge · Rules verified July 19, 2026 · Updated November 7, 2026"
New: "By Devin Day, Operations Officer · Reviewed by Tim Nash, Broker-in-Charge · Updated <set by build.js dates>"

`build.js dates` does not manage a "Rules verified" date, so a typed one goes stale again. The "Updated" line is the one date the build keeps true.

## Lede (no new fact; it reuses "The one-paragraph map")

Now: "Seven jurisdictions, seven different sets of rules. Where short-term rentals are allowed, what they license, and what they tax."
New: "The City of Myrtle Beach bans short-term rentals in nearly all residential districts. North Myrtle Beach allows them citywide with a license, and unincorporated Horry County has no short-term rental ordinance at all."

Keep "The one-paragraph map" paragraph in the body as it is.

## North Myrtle Beach section (row 1)

Now: "It has not been adopted as of July 2026, but the city did pass a nuisance party ordinance in February 2026 aimed squarely at out-of-control rentals, and a June 2026 incident renewed the pressure."
New: "City Council has not adopted it. The city did pass a nuisance party ordinance in February 2026 aimed squarely at out-of-control rentals, and a June 2026 incident renewed the pressure."

(Row 1 covers every council agenda from July 20 to November 2. The February and June sentences are unchanged.)

## State bill sentence in the opening (row 2)

Now: "A bill to stop cities from banning STRs statewide was introduced in 2025 and has not passed."
New: "A state bill to stop cities from banning them, H. 3861, was introduced in January 2025. It never left the House committee." Link "H. 3861" to /invest/short-term-rental-rules-statehouse/.

## Footer line (rows 1, 2)

Now: "Rules verified July 19, 2026 against city, county, and state sources. Ordinances change, North Myrtle Beach's likely will, and we update this page when they do. If you are reading this months later, ask us what changed."
New: "Rules checked against city, county, and state sources on the date this page was updated. Ordinances change, and we update this page when they do. Ask us what changed for the one address you are looking at."

(Drops "North Myrtle Beach's likely will", a forecast with no source.)

## Not in this pass

The italic subtitle size is a layout fix. The title stays.
