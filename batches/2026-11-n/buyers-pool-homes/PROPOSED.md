# Proposed registry rows and story requests: /buyers/pool-homes/

## Registry (`facts/registry.json`), once facts rows 9 to 11 are verified

- **id `horry-pool-barrier`**: "Horry County has adopted the 2021 International Swimming Pool and Spa Code. Every pool needs a barrier at least 48 inches tall, with a self-closing, self-latching gate that opens away from the pool (ISPSC 305, quoted in the county's Pool Fence Affidavit)." Source: https://www.horrycountysc.gov/media/r2sebvu1/pool-fence-affidavit-2021-ispsc.pdf . Reason: /buyers/no-hoa-homes/ already mentions "pool fences" in a town's fence rules, and any page on new construction, rentals or no-HOA homes may state a pool-fence height. A wrong-value pattern to catch: a pool fence height of 4 feet stated as a state law, or any height other than 48 inches for the county.
- **id `sc-pool-code-local`**: "South Carolina law lets counties and cities adopt a swimming pool code; it does not require one (SC Code 6-9-60)." Wrong-value pattern: "South Carolina (state )?law requires[^.]{0,60}pool fence".
- **id `sc-home-inspector-pool`**: "South Carolina home inspectors work to the ASHI Standard of Practice, which does not require them to inspect swimming pools, spas or fences (LLR RBI FAQ; ASHI 4.2)." Stale by 2027-02-08 because ASHI approved a revision in January 2026 with its start date to be announced.

Each needs a firing and a quiet control from real site text, per `CLAUDE.md`.

## Story requests

See `OWNER-QUESTIONS.md` item 3 (a client who bought or passed on a house because of its pool).
