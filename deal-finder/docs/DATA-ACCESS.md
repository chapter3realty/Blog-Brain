# Data access

## What there is already

The CRM holds our copy of the MLS: CCMLS through Trestle, on the CCMLS Data Agreement signed 15 Oct 2026. One credential carries IDX Plus and Firm BBO. About 50,000 rows: every listing and 24 months of sales, with every field Trestle sends (`raw`). It refreshes all day (chapter3-crm `src/jobs/mls-sync.ts`).

So the deal finder needs no new feed. It needs a read-only login to that one table.

## What the owner does once

A Claude session in the cloud cannot reach the CRM's database. This is on purpose (chapter3-crm CLAUDE.md). Run this in Supabase, SQL editor, on the CRM's project:

```sql
create role deal_finder login password 'PUT-A-LONG-RANDOM-PASSWORD-HERE';
grant usage on schema public to deal_finder;
grant select on public.mls_listings to deal_finder;
-- mls_listings has deny-all row security. This lets the one role read it, and nothing else.
create policy deal_finder_read on public.mls_listings for select to deal_finder using (true);
```

Then the connection string is the CRM's own pooler address with the new user, in the form:

```
postgresql://deal_finder.<project-ref>:<password>@<pooler-host>:5432/postgres
```

Put it where the tool runs as `DEALS_DATABASE_URL`. Never in a repo or a chat.

The login can read `mls_listings` and nothing else: no contacts, no messages, no leads. The tool opens a read-only transaction on top.

When the deal finder moves inside the CRM (docs/ROADMAP.md, step 2), it uses the CRM's own database connection and this login can be dropped.

## The AVM and the CCMLS agreement

The owner, 2026-10-29: "I do want the AVM and everything else, no restrictions needed to make the best deal finder product. It just won't be shown on the website." The value model is built and on, for staff only. The website gets no value of any kind (`test/views.test.ts`).

One step keeps it covered. CCAR's Data Agreement lists uses one by one: IDX, BBO, Participant Data Use, and AVM. We have IDX and BBO. CCAR said earlier that a new use goes on the same agreement, by reply to the existing thread (chapter3-crm BACKLOG, 5 Oct 2026); an older note there says AVM may be its own application. The reply asks which. A draft, for the owner to send on the MLS@ccarsc.org thread:

> Hello,
>
> Chapter3 Realty, Corp. would like to add the AVM use to our existing CCMLS Data Agreement, on the same Trestle connection.
>
> What we built: an internal tool that values homes for our agents from the CCMLS sales in our licensed copy. It is used by our broker and agents only, inside our CRM. No value is shown on our website, in IDX, or to consumers.
>
> Can this go on our existing agreement, or does it need its own application? Please send whatever form or fee schedule it needs.
>
> Thank you,
> [name], Chapter3 Realty

Until CCAR answers, nothing about the tool changes for staff. If CCAR says no, the CRM page can turn off the value columns with one switch and keep the ranking by comps, as the website version does.
