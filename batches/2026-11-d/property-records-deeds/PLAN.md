# Plan: /buyers/property-records/deeds/

Spec `specs/property-records-deeds.js` (author "devin"), copying the structure of `specs/home-value.js` and `specs/garden-city.js`. Data `data/2026-11-d/property-records-deeds/`. Facts: `facts.md` in this folder (43 rows). Demand and sibling owners: `must-answer.md`.

## The reader and their decision

A person with a house in mind, and a name or an address. A buyer checking the seller owns it and nothing is recorded against it. An owner who lost the deed or paid off a mortgage. An heir. A neighbor with a fence question. Many are not our customers yet, and most do not know the county has two tools called "land records".

Their decision: which county search to use, what to type, and whether to go to Conway, mail a form, or let someone pull the papers. They are worried about wasting a trip and about missing a lien.

## The answer in two sentences

Horry County's land records are free to search online at the Register of Deeds' site, AcclaimWeb: choose Name, type the last name first with no commas ("SMITH JOHN"), and every deed, mortgage, lien and plat under that name since 1984 is listed. The list is online, but the documents are not: you read them in Conway, order a copy by mail for $8, or send us the address and we pull them free.

## Title, H1, description

- **Title (51):** `Horry County Land Records: Free Deed Search by Name`
  (Alternative, 57: `Horry County Land Records: Free Deed Search, Step by Step`.) The searched words come first; "free" and "by name" are the two words most added in the suggestions.
- **H1:** `Horry County land records: how to search deeds, liens and plats`
- **Hero sub (statement):** `The Register of Deeds search is free, lists every deed by name since 1984, and takes three steps.`
- **Description (about 150):** `How to search Horry County land records at the Register of Deeds: deeds, mortgages, liens and plats by name, free since 1984, and how to get the deed itself.`
- **Keywords:** horry county land records, horry county register of deeds, horry county deed search, horry county deed search by name, horry county deeds, horry county deed book search, horry county plat search, horry county lien search, horry county property fraud alert, horry county register of deeds recording fees, copy of deed horry county, georgetown county deed search. Never "property records", "property search", "gis", "tax", "deed stamps" (siblings own them).

## The first screen (phone)

1. H1, byline, the two-sentence answer.
2. One large button: **Open the Horry County deed search** (to https://acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeName, new tab). Under it, small: "This is the county's own search. Chapter3 is not the county."
3. Three numbered steps as one drawn strip (see V1):
   1. **Open the search and accept the county's terms.** No account.
   2. **Choose Name. Type the last name, then the first, no commas: SMITH JOHN.**
   3. **Read the list:** the date, the kind of paper, the book and page. Click a row for the price and lot.
4. Slim offer bar: "The deed itself is not online. Send us the address and we pull the deed, the plat, any liens and the HOA papers for you, free." Button: "Send us the address" (#lead-form).
5. One quiet line of links: Pawleys Island or Litchfield: Georgetown County's search (anchor to its section). The parcel map: our GIS map guide. Every record in one place: Horry County property records (hub).

The site's edge then places its homes feed under the opening. No other strip: this page names no place to live, and a second strip would crowd a tool page.

## Sections, in order

Each heading is the searched question. The first sentence under each is the answer with the subject named.

1. **Are Horry County land records free?** Yes to search (rows 2, 3). The documents are not online (row 10), and that is the one thing most readers miss. One sentence on account holders (row 11, no price unless verified). Link to section 2.
2. **How do I get a copy of my deed in Horry County?** Three ways: in person in Conway, by mail on the county's form, or we pull it. Copy cost table (V6, rows 12 and 13). Certified copy: when a court or a lender asks for one. Mid offer: "Have us get the deed" ("We pull the deed from the county and email it to you, free.").
3. **How do I search Horry County deeds by name?** The name rules (rows 4, 5): last name first, no punctuation, at least 3 letters, both buyer and seller sides by default, a company as recorded ("D R HORTON INC", row 21), try every spelling (row 2), narrow by date or book type. Diagram V2.
4. **Can I search Horry County deeds by address?** No address box in the deed list (row 24 caution). The two-step bridge: address to owner and parcel number on the county map (link /buyers/property-records/gis-map/ or the hub's lookup tool), then the name or the book and page. For a subdivision, the memo search finds every lot (row 22).
5. **How do I look up a deed by book and page?** Book/Page search (row 7); where a book and page shows up (a plat, a title paper, the tax card); plat books in the same search. One sentence on the direct book-and-page link (row 19) for the hub's tool, not the reader.
6. **How do I find a mortgage, a lien, a plat or an easement?** Table V4 (row 8): what you want, the document type to tick, what it tells you. A paid-off mortgage shows as MORTGAGE SATISFACTION. Then **what is not in the deed list**: unpaid property tax (Treasurer, link tax-bill), court judgments (row 31, only once verified), HOA lien details (link /hoa/liens-and-foreclosure/). Mid offer: "Have us check a house for liens before you offer" (to /contact/).
7. **How do I read a deed?** Drawn sample deed V5 with six labels: grantor (seller), grantee (buyer), consideration (price), legal description (lot, subdivision, plat book and page), TMS or PIN, previous owner (rows 28, 29, 30). The finding: 36 of every 100 deeds recorded here in a year show no price (row 20, V7), and why (row 27: estates, family trusts and companies, corrections). One line on deed stamps ($3.70 per $1,000, the seller pays) with a link to /sell/net-proceeds/. Link /sell/inherited-house/ on "deed of distribution".
8. **How far back do Horry County land records go online?** Name search from 1984 (row 5). Older entries by book and page to about 1980; older books are "non-indexed" pages (row 6, after office confirmation). The list runs a few days behind the recording desk (row 9). About 116 deeds are recorded every weekday (row 20).
9. **Does Horry County have a property fraud alert?** Yes: the Recording Notification Service, free, by email (row 16). Three steps, and the one tip that matters: list every version of your name ("DOE JOHN", "DOE JOHN J", "DOE JOHN JR"). What it does and does not do (row 17). Georgetown sends texts too (row 40). Button to the county sign-up (external).
10. **How do I search Georgetown County deeds (Pawleys Island, Litchfield)?** Rows 33 to 41: its own search, the name format, documents viewable online when the image is there (the contrast with Horry), copies, the 2021 book codes. External button: "Open the Georgetown County deed search".
11. **Horry County Register of Deeds: phone, hours and address.** Card V8 (row 14), plus "Chapter3 is not the county; the office does not give legal advice" (row 41 is Georgetown's; for Horry say only what we can source). Not a question heading: a label reads better here.

End: full offer band (V9). Then a short FAQ only for questions not answered above (for example "Can I record a deed myself?" only if sourced; otherwise no FAQ).

"On this page" list with short labels: Free? / Get a copy / By name / By address / Book and page / Liens and plats / Read a deed / How far back / Fraud alert / Georgetown / Office.

## Visuals (each says one thing at a glance; liquid glass style; drawn, never a screenshot)

| # | What | Its one message | Built from |
|---|---|---|---|
| V1 | Three numbered step cards with a tiny drawn screen in each | "Three steps, no account" | rows 1, 2, 4 |
| V2 | "Where to click": a drawn, simplified Name search panel with four callouts: the Name box filled "SMITH JOHN", the Both / seller / buyer choice, the From date (1/1/1984 shown as "1984"), the Search button | "Type the last name first" | rows 4, 5, 7 (field names from `raw/aw_name_form.html`) |
| V3 | Two-column table, Horry vs Georgetown: search online, the documents online, copy price, fraud alert, how current | "Horry lists the papers; Georgetown shows them when it can" | rows 9, 10, 12, 16, 34 to 40 |
| V4 | Table: you want / tick this type / it tells you (deed, mortgage, paid-off mortgage, contractor lien, condo lien, tax lien, lawsuit notice, easement, covenants, plat) | "Which box to tick" | row 8 |
| V5 | A drawn sample deed marked SAMPLE, placeholder names ("SELLER'S NAME"), six numbered labels | "Six things to read on a deed" | rows 26 to 30 |
| V6 | Copy cost table: in person, by mail, certified, plats | "A deed copy by mail is $8" | rows 12, 13 |
| V7 | One stat tile, a 10 by 10 dot grid with 36 dots shaded: "36 of every 100 deeds show no price" | the finding | row 20 (`deed-index-stats.json`) |
| V8 | Office card: phone (tap to call), hours, address with map link | "Call before you drive" | row 14 |
| V9 | End offer band | the offer | n/a |

No chart of monthly deed counts: it says nothing the reader can use. Monthly counts stay in the JSON.

## Offers (four, each worded differently; every button to /contact/ or #lead-form)

1. Slim bar, first screen: "Send us the address. We pull the deed, the plat, any liens and the HOA papers for you, free." Button "Send us the address".
2. After "copy of my deed": "Have us get the deed." Button "Get the deed for me".
3. After liens: "Have us check a house for liens before you offer." Button "Check a house for liens".
4. End band: "Buying or selling in Horry or Georgetown County? Send one address. We pull every recorded paper on it and tell you what it means." Button "Send an address".

The offer is a service claim. A live page already says it ("In Horry County the index is online; we pull the pages at the county for you", /hoa/documents/), so it needs no new owner question. "Free" was set by the lead's brief.

## Unique findings (what no other result has)

1. Horry County's documents are not online; the free index is. The brokers ranking for "land records" never say it.
2. 36.5% of the deeds recorded in a year show $0, with the state law that explains it.
3. The name index starts in 1984, older entries reach about 1980 by book and page, and earlier books are non-indexed pages (our probe).
4. Horry vs Georgetown side by side: Georgetown shows images online when it has them, and its fraud alert also texts.
5. The address-to-deed bridge, which the county's own site does not explain.

## How this page wins the biggest share of its searches (for the lead and the owner's question)

1. **Match the words exactly.** Title and H1 start "Horry County land records"; the H2s are the suggestion strings people type ("by name", "free", "by address", "deed book", "lien search", "plat", "fraud alert", "copy of my deed", "register of deeds phone"). The first sentence under each is a quotable answer with the county named, for the AI Overview.
2. **The first screen does the job.** A button straight to the county search and three steps. A searcher who gets what they came for does not go back to Google. The brokers make them sign up.
3. **Serve both meanings of "land records" without taking the map's search.** One line and a link sends the map seeker to gis-map; the hub's lookup tool catches the address seeker. The family of four pages then owns the cluster instead of splitting it.
4. **Say what the county does not:** the name format, that the papers are not online, what the index misses, how to go from an address to a deed. That is the reason to link to us.
5. **Links.** Six or more referring pages with the words "Horry County land records" or "deed search" in the sentence (list below), the site menu's "Property records", and the hub's first screen. For Lane O: the hub's lookup tool and this page are what a local title attorney, a closing attorney's blog or a genealogy group would link.
6. **Stay right.** Put every county URL on the page into the monthly link check (tools/site-audit.js), so a county change is caught before readers see a dead button.
7. **Georgetown in one section, not a separate page.** Its searches are small; one section and its own button covers them.

## For BUILD.md (lead items)

- New place: none. New feed: none. New homes strip: none.
- sitemap.xml: `https://chapter3realty.com/buyers/property-records/deeds/`
- llms.txt: `- [Horry County land records and deed search](https://chapter3realty.com/buyers/property-records/deeds/): how to search the Register of Deeds by name, book and page or document type; copies; fraud alert; Georgetown County.`
- Keyword fix on a sibling: /hoa/documents/ drops "Horry County Register of Deeds" from its keywords and links this page on "Register of Deeds".
- Pages that should link here, on words already in their text where possible: /buyers/property-records/ (first screen), /buyers/property-records/gis-map/, /buyers/property-records/tax-bill/, /hoa/documents/, /hoa/liens-and-foreclosure/, /sell/inherited-house/ (deed of distribution), /sell/fsbo/ (recording the deed), /buyers/closing-costs/ (title search), /sell/net-proceeds/ (deed stamps), /invest/foreclosures/ (lis pendens and recorded notices), /submarkets/pawleys-island/ (Georgetown deeds), /sell/home-value/ ("from the county's deeds").
- County URLs for the link check: acclaimweb.horrycounty.org/AcclaimWeb/search/SearchTypeName, /SearchTypeBookPage, PublicRecordsNotificationWeb/Subscribe, horrycountysc.gov/departments/register-of-deeds/, the Copy Request Form PDF, the price list PDF, www.georgetowndeeds.com, gtcountysc.gov/178/Register-of-Deeds.
- For the hub's lookup tool: the deed button can open a document by book and page (row 19); it cannot fill in a name.
- Verifier must re-open: rows 6, 11, 28, 31, 38, 40, 42 (each names what to check).
