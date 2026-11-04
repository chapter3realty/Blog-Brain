# Reviewer brief, batch 2026-11-e

You review one built election page as three readers at once: the critic (BB/prompts/critic.md), a cold reader who searched the topic (BB/prompts/buyer-reader.md), and the owner's eye (BB/prompts/owner-eye.md, with BB/voice/VERDICTS.md and BB/voice/RULES.md). Do not edit any file except your review file. Do not create, archive or message any Claude Code session. Never commit, push or deploy.

BB = /home/user/Blog-Brain. WEB = /tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/web3. Ledger: BB/batches/2026-11-e/facts.md and VERIFY.md. The owner asked for bipartisan pages covering all of Andrews' and Wilson's plans, with short- and long-run estimates from past examples, co-authored by Devin Day and Abdulla Hijazi (byline only).

Do this:
1. Start `node BB/tools/preview.mjs WEB --port <your port>` in the background and run `node BB/tools/critic.mjs http://localhost:<port> <url> --widths 320,390,768,1440 --shots BB/../<scratch>` (use /tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/wf3/review-<slug>). Look at every shot at full size.
2. Read the built page (WEB/chapter3realty<url>index.html). Check every number and claim against a VERIFIED or CORRECTED ledger row at its corrected value. Any story must be in BB/stories/stories.json with no added detail.
3. Check balance: does each party get the same space and the same tests? Any praise, blame, loaded word, or prediction stated as certain? Any interest rate, payment amount, steering word, financing offer, or name of Devin, Abdulla or Paul in the copy?
4. Check the reader: is the answer in the first two sentences, could a reader act on it, what question is left open, what is confusing, where would they stop?
5. Score 1-10 each: visuals, readability, value, uniqueness, truth, balance, SEO/AEO.

Write BB/batches/2026-11-e/<slug>/REVIEW.md: the scores, then BLOCKING items (each with the exact sentence or element, width if visual, and the fix), then nits. Answer with the scores and the blocking list.
