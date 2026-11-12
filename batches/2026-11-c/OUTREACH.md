# Email outreach and backlinks (Lane O), started 2026-11-12

Goal: real sites that already serve Grand Strand buyers link to one page of ours that helps their readers. No paid links, no link swaps, no mass mail.

## Status

- Gmail connector: works, connected to the firm's info@ mailbox (2026-11-12).
- Mail setup checked 2026-11-12: SPF (Google), DKIM (google selector) and DMARC p=reject are all published. Mail from this address should not land in spam for setup reasons.
- Volume (owner, 2026-11-13): up to 15 personal emails a day from info@, which already sends a lot. Start at 10 a day for the first week, then 15. Stop and slow down if more than 3 in 100 bounce or anyone marks one as spam.
- Signer (owner, 2026-11-13): the owner, Devin Day, by name. This is email, not site copy, so the rule against naming him on the site does not apply.
- No past vendors yet, and BrickWood's contacts are not for Chapter3 outreach (owner, 2026-11-13). Every email is cold, so each one has to give something first.
- Order: Claude writes each email as a Gmail draft. The owner reads it in Gmail. Claude sends only after the owner says "send".

## Rules for every email

1. One person, one email, written for that site. Never a list blast.
2. The owner approves every email before it is sent. Claude sends only after "send".
3. Sent from info@, signed by Devin Day. Real name, the firm name "Chapter3 Realty Corp", the office as the site gives it (Vista Drive, Murrells Inlet, SC 29576, no street number: owner, 2026-11-07), and 854.333.2135.
4. Offer one page that answers a question their readers have. Say what is on it in one sentence.
5. Never offer money, a gift or a link back for a link. Never ask for "dofollow".
6. Never claim a fact the page does not prove. Never state a rate or a payment.
7. One follow-up after 7 days at most. A no, or no reply after the follow-up, ends it. Anyone who asks not to be emailed goes on the do-not-contact list below.
8. Log every send and every reply in the table below.

## The local program (owner, 2026-11-13)

"We should be emailing the same reporters and news stations ... we're local ... I can meet with them in person." "Maybe we even write the blog for them and send it to them in the email in their branding." "Me and the other owners will meet with people every day and call."

Two tracks, one goal: links, and being known by every local professional who touches a home sale.

### Track 1: the same local reporters, every month

- One list of about 15 to 20 people: the real estate, growth, weather and business reporters and producers at the local TV stations, newspapers and business papers. The same people each month, never a blast list.
- What they get: one sourced number a month from our data (the deed records, the flood study, permits), the page behind it, and an open offer to meet, or to have an owner or Tim on camera.
- The aim is to be the brokerage they call when they need a number or a quote. Links follow from that.

### Track 2: local professionals, 15 emails a day

Who, and the article each gets:

| Profession | Free article for their blog, in their voice | Our page it cites |
|---|---|---|
| Insurance agents | What buyers miss about flood zones in a listing | the flood study |
| Home inspectors | The four things that stall a Myrtle Beach sale (roof near 20, heat and air, termites, moisture) | /sell/repairs-before-selling/ |
| Roofers, heat-and-air companies | Is a 20-year-old roof a deal-breaker here? | /sell/repairs-before-selling/ |
| Closing attorneys | The HOA estoppel letter, or the 28 seller disclosure questions | /hoa/estoppel/, /sell/seller-disclosure/ |
| Property and HOA managers | Where you can rent by the night, town by town | /invest/str-rules/ |
| Appraisers | What sold near you, from the county's deeds | /sell/home-value/ |
| Movers, stagers, photographers | A moving checklist, or what buyers look at first | /buyers/relocating/moving-checklist/ |

Rules for the free articles (Google treats large guest-post campaigns built for links as link spam):
1. Each article is written once, for one business. Never the same article to two people.
2. It is written for their customers and is useful without us. Our page appears once, as the source of a fact, linked on the study's or the page's name ("Chapter3 Realty's flood study"), never on a keyword like "Myrtle Beach real estate agent".
3. Their voice, their branding: we read their site first and send a preview with their logo and colors, plus plain text they can paste. Nothing is published by us.
4. We never put words in their mouth: no claim about their business, no quote, no rate or price for their service. They edit and approve.
5. No insurance, legal or loan advice in our voice.

### The sequence for each professional

1. Day 0: email, signed by Devin, with the gift (the article and the fact behind it). Nothing to do but read it.
2. Day 2 or 3: a call from an owner: "I sent you something Tuesday; did it come through?"
3. Day 7: one follow-up email if there is no reply.
4. A coffee or a visit when they say yes. Every touch goes in the tracker.

### Owner, 2026-11-13 (second message)

- "We need to be finding as much information about the people we email as possible on an individual level and we need to save the information we learn about them as they email us back so that everything stays personal." Each contact has a record: public professional facts found before the first email, then every reply, call and meeting, with what we learned. Claude reads the record before writing to that person.
- Cadence: more than once a month for reporters, when there is something worth sending. Professionals: the sequence above, then a useful touch about once a month.
- Calls: after the emails go out, Claude gives the owner a call list each day (name, firm, phone, what was sent, one line to open with).
- Links: no nofollow request and no keyword anchors (see below). The link sits on the page or study name where the article cites our fact.

### Where the list lives

This repo is public. Names, emails, phone numbers and notes about people never go in it. The list and the tracker live in a private place (a private tracker page and the info@ Gmail), and only counts and methods are written here.

### Lists

Built 2026-11-13: 688 people and firms in 16 groups, in the private tracker "Grand Strand Network". 212 have an email published on their own site or checked on the source page (after a second, deeper pass of each site); 476 have a business phone; 258 are named people. The helpers could not open most local sites, so every email was read from the firm's own pages by a script, not taken from search summaries. The next chat is briefed in `EMAIL-CHAT-HANDOFF.md`.


Built from public pages only: the outlets' staff pages, the state's licensee lookups, firms' own websites. Each entry has a source. The Chamber's local media list (myrtlebeachareachamber.com) is blocked from Claude's network; the owner can download it if Chapter3 is a member.

## Targets, in order

| # | Kind | Target | Page we offer | Why they would link | Contact | Status |
|---|---|---|---|---|---|---|
| 1 | Affiliate | BrickWood Mortgage partner and bio pages | home page | The owner controls it. Audit O-8: it does not link today. | owner | owner to do |
| 2 | Profile | Google Business Profile, Bing Places, Apple Business Connect | home page | Citations; see `templates/offsite-checklist.md` | owner | owner to do |
| 3 | Membership | Myrtle Beach Area Chamber member listing | home page | Member listings link out | owner | ask owner if a member |
| 4 | Membership | CCAR office record | home page | Fix phone and add website (checklist) | owner | owner to do |
| 5 | Local press | Local TV and newspaper newsrooms | `/market-reports/` | A dated, sourced data point each month | to find | research |
| 6 | Local business | Home inspectors, insurance agents, closing attorneys, property managers, movers | the guide that fits their customer (flood insurance, HOA estoppel, moving checklist, property management) | Their clients ask these questions | to find | research |
| 7 | Community | HOAs and community sites with a "links" or "resources" page | that community's guide | Our guide is about their community | to find | research |
| 8 | Data | Bloggers and reporters who cite Grand Strand prices | the market report and the towns compared page | A citable, sourced number | to find | research |

Rows 1 to 4 need the owner's accounts, not email from Claude. Rows 5 to 8 are the email work.

## Send log

| Date sent | To (site) | Page offered | Reply | Follow-up | Result |
|---|---|---|---|---|---|

## Do not contact

(none yet)
