# The property lookup tool (owner, 2026-11-13: "making it super simple looking and easy to use is going to be the key and then making it an all in one tool would be amazing")

Lives at the top of /buyers/property-records/ (and as a small box on the three task pages). One box: "Type an address in Horry County." One button. Results in one card.

## What it shows, all from public sources, live in the visitor's browser (nothing stored)

| Line | Source (tested 2026-11-13) |
|---|---|
| The address, matched | Horry County locator: gisportal.horrycounty.org/server/rest/services/Locators/County_Locator/GeocodeServer/findAddressCandidates (CORS allows chapter3realty.com) |
| Parcel numbers (PIN, TMS), lot, land area in acres | OpenData/Parcels/MapServer/0/query by point (fields PIN, TMS, LOT, SHAPE.STArea()); allows chapter3realty.com |
| Flood zone (A, AE, VE, X, X shaded) in plain words | FEMA NFHL MapServer/28 query by point (FLD_ZONE, ZONE_SUBTY, STATIC_BFE); allows chapter3realty.com |
| City or town, or unincorporated county | OpenData/Municipalities |
| Hurricane evacuation zone | OpenData/EvacuationZones_Horry |
| Zoning | the Zoning folder (find the public layer) |
| Buttons, already filled in | the county's deed search, tax bill, property card and parcel map for this PIN or address (URL patterns from the three task pages' research) |
| Homes for sale near it | our own search, /homes/map/?near=lat,lng |
| The offer | "Want the deed, the tax bill and the HOA papers in one email? Free." to /contact/ |

Owner name and value are not pulled into our page: the county's own pages show them behind the buttons. No reverse search by a person's name on our side (privacy); the deeds page explains the county's own name search.

## Rules
- Mobile first: the box and button fill the width; the card is one column; every line has a one-word label and a plain-English meaning ("Zone AE: high risk. A lender will require flood insurance.").
- Under 1 second to the first line; each line fills as its source answers; a source that fails shows "Open it on the county site" with the link, never an error wall.
- Works without our edge or the CRM. Georgetown County addresses (Pawleys Island, Litchfield) get links to Georgetown County's tools.
- Say plainly: "Public records from Horry County and FEMA. Chapter3 is not the county." A flood zone line links /buyers/flood-zone-check/.
- An idx-test style control: a fixture for each source's answer shape, so a change at the county fails the test, not the page.
