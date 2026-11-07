export const meta = {
  name: 'redesign-batch',
  description: 'Rebuild a batch of blogs through the lean page line: research, verify, build, one review, one fix, one short re-check; every step saved to GitHub',
  phases: [
    { title: 'Research', detail: 'must-answer list, fact ledger, local data per page' },
    { title: 'Verify', detail: 'an independent verifier checks every fact row' },
    { title: 'Build', detail: 'spec, visuals, free-licence photos, build, gates' },
    { title: 'Review', detail: 'one review by three lenses, one fix, one short re-check' },
  ],
}

// args: { web, bb, sp, batch, today, session?, pages: [{url, slug, spec}] }. See batches/2026-11-a/BRIEF.md.
const WEB = args.web, BB = args.bb, SP = args.sp, BATCH = args.batch
const B = `${BB}/batches/${BATCH}`
const SESSION = args.session ? `CLAUDE_SESSION_URL=${args.session} ` : ''
const CK = (p, stage) => `${SESSION}TMPDIR=${SP} ${BB}/tools/checkpoint.sh ${WEB} ${B} ${p.slug} "Batch ${BATCH} ${p.url}: ${stage}" specs/${p.spec} chapter3realty${p.url} data/${BATCH}/${p.slug} chapter3realty/images/${BATCH}/${p.slug}`

const COMMON = `
You are on batch ${BATCH}, Lane U (upgrade of a live page), of the chapter3realty.com production line. The owner asked: "redesign the UI of each blog; identify blogs that have very bad or little information and provide massive value and engaging information that is unique and thought provoking to a human, and simple to understand."
Repos: website working copy ${WEB} (pages in ${WEB}/chapter3realty, specs in ${WEB}/specs built by 'node tools/mkpage.js specs/<file>.js', shared helpers ${WEB}/specs/_kit.js, ${BB}/tools/glass.js, ${BB}/tools/compare.js, ${BB}/tools/area-map.js). Blog-Brain ${BB} holds the line: CRAFT.md (read it first, it is the skill), STANDARD.md, WORKFLOW.md, voice/RULES.md, voice/VERDICTS.md, stories/stories.json, prompts/*.md, rules/claims.json, rules/images.md, facts/registry.json. The website's own CLAUDE.md and PLAYBOOK.md hold the owner's voice and compliance rules and win any conflict. Our best recent pages are the bar: /invest/strategies/fix-and-flip/ (spec ${WEB}/specs/fix-and-flip.js), /buyers/no-hoa-homes/, /submarkets/carolina-forest/the-farm/, /buyers/affordable-places-to-live/. Study how they are built before writing.
Preview: node ${BB}/tools/preview.mjs ${WEB} --port <your port> (run it in the background; it serves the site with sample homes; see ${BB}/tools/fixtures/preview/README.md for routing sample photos in Playwright). Never use port 8767.
Saving: a container restart deletes the scratch folder and everything not on GitHub (it happened on 2026-11-01). At the end of your stage, and after any step that took long, run the checkpoint command you are given. It saves your page's website diff and your batch folder to GitHub. Never run git commit or git push yourself in either repo.
Hard rules: Do not create, archive or message any Claude Code session. Never deploy. Do not run 'node build.js stitch', 'node build.js dates' or 'node build.js llmsfull' (the lead runs them once at the end). Never type a date into a page. Never write a quote for Tim Nash or a story that is not in stories/stories.json, and never add a detail to one. Never state an interest rate or a payment amount. BrickWood Mortgage is an affiliate, never "our lender" or owned; naming it in the body needs the inline affiliated-business disclosure; "our preferred lender" is fine. Devin Day may be the byline only, never named in copy; never name Paul. No automated value (AVM) for any address or listing. MLS sold data may be shown only to registered visitors: public page copy, tables and charts use public records (Horry County deeds and parcels, Census, BLS, NOAA, FEMA, state and county sites) or the CRM's active listings counted in aggregate. No fair-housing steering words (family-friendly, safe, best schools, top schools, perfect for retirees, exclusive, and the like). Facts on the page come only from rows marked verified in the page's ledger. The page does the work: never tell the reader to go check something we could check.
Reuse before you pull (lead, 2026-11-03: research and verification were a third of every group's cost): before pulling Horry County deeds, parcels, FEMA zones, NFIP data, Census tables or CRM listings, look in ${WEB}/data/2026-10-d/*/ and ${WEB}/data/${BATCH}/*/ for a sibling's pull of the same data (for example 12 months of county deeds in data/2026-10-d/sell-out-of-state-buyers/) and reuse it, naming the file in the ledger row. Short-term rental figures come only from ${WEB}/data/str-market.json, never from AirROI's pages directly (one fact, one value; batch 2026-11-a group 3 printed two).
Length (owner, 2026-11-07): there is no word cap. Read CRAFT "Rules are thoughts, not orders" first. A narrow question is answered tightly; a comparison, list or town guide is complete. Say each fact once. Every rule in this brief is a thought to weigh against what makes this page good for its reader.
Write so the site's audit passes the first time (node build.js audit failed on these in every group): no sentence over 28 words; no sentence that opens with "So"; no "Here is" or "Here's what"; no pseudo-cleft ("What you have left is ..."); the hero sub-header never says we, our or us; a button to /contact/ is a request ("Have us ...", "Ask us ...", "Send ..."), never "Run ... for me"; never "the best", "top-rated", "family-friendly", "safe".
Images: rules/images.md. Only CC0, public domain, CC BY or CC BY-SA photos with credit (Wikimedia Commons is the usual source), our own photos, and our own charts, maps and illustrations; never listing, builder, MLS, news or Google images, never an AI image of a real place. Every photo gets a licence record that ${BB}/tools/photos.js accepts. Put new image files for your page only under ${WEB}/chapter3realty/images/${BATCH}/<slug>/. Look at every picture at full size and check it shows what the caption says.
Shared files: edit only your own page's spec, your own page, files under your own batch folder ${B}/<slug>/, and new files under ${WEB}/data/${BATCH}/<slug>/ and ${WEB}/chapter3realty/images/${BATCH}/<slug>/. Do not edit _kit.js, glass.js, compare.js, area-map.js, shared CSS or any other page. If you need a shared helper changed, add a note to ${B}/<slug>/NEEDS.md and work around it inside your spec. Proposed new rows for facts/registry.json or stories go in ${B}/<slug>/PROPOSED.md.
Writing: the owner's register. Literal, short sentences, no em dashes, no metaphors, no filler, no hype.
Scratch files under ${SP}/wf2/<slug>/.`

const RESEARCH = (p) => `${COMMON}
Page: ${p.url} (slug ${p.slug}). Batch folder: ${B}/${p.slug}/. Checkpoint command: ${CK(p, 'research')}
A judge rated the live page among the weakest on the site. Its notes (problems, ideas, photo needs) are the entry for "https://chapter3realty.com${p.url}" or "${p.url}" in ${BB}/audit/judged-2026-10-31.json. Read them first; every problem there must be solved by the new page.
Your job: the research half (prompts/researcher.md and templates/must-answer.md in ${BB}).
1) Read the live page fully (${WEB}/chapter3realty${p.url}index.html, and its spec if one exists in ${WEB}/specs). List what it has worth keeping (calculators, tools, real stories, verified numbers, internal links, the headline in ${WEB}/data/headlines.json the owner liked).
2) Build the must-answer list from real demand: search suggestions and "People also ask" for the topic and its local versions (Myrtle Beach, Horry County, Grand Strand, South Carolina), the questions a buyer, seller or investor asks us, and the deciding fact the reader needs to act. Save it as ${B}/${p.slug}/must-answer.md.
3) Research every item to primary sources and build the fact ledger ${B}/${p.slug}/facts.md: numbered rows, each with the claim, the exact number or rule, the source URL, the date read, and a quote or table cell from the source. Pull real local data that makes the page unique (Horry County deed or parcel data, Census ACS, BLS, FEMA flood maps, NOAA, SC Code of Laws, county and city ordinances, SC Housing, HUD, IRS, the CRM's active listings in aggregate via https://chapter3realty.com/homes/api/map?<params>). Save raw data and the script that pulled it under ${WEB}/data/${BATCH}/${p.slug}/ so charts are built from data, never typed. Aim for the fewest rows that answer everything, and for at least two findings a reader cannot get anywhere else: our own count from public records, a comparison nobody has published, a worked example on a real local case, a map we drew. This is what made the owner call the 2026-10-d pages 'top top tier': read ${BB}/batches/2026-11-a/BRIEF.md 'What the bar looks like' before you start.
4) Write ${B}/${p.slug}/PLAN.md: the reader and their job, the deciding fact, the page shape (CRAFT 3 and ${BB}/reports/Page shapes by kind of page.md), the sections in order with what each proves, the visuals (charts, maps, tables, steps, photos and their free-licence candidates with URLs and licences), and the photo partner's shot list for this page.
5) Run the checkpoint command.
Answer with a short summary: rows in the ledger, the unique findings, the planned shape.`

const VERIFY = (p) => `${COMMON}
Page: ${p.url} (slug ${p.slug}). Checkpoint command: ${CK(p, 'verify')}
You are the independent verifier (${BB}/prompts/verifier.md). You did not research these facts.
Check every row of ${B}/${p.slug}/facts.md against its source, opening the source yourself; re-run any data script under ${WEB}/data/${BATCH}/${p.slug}/ and check its numbers. Mark each row VERIFIED, CORRECTED (with the right value and source) or STRUCK (with the reason) in a new file ${B}/${p.slug}/VERIFY.md, and update facts.md in place so its status column matches. Be strict: a number from a secondary site, an old year, a rule that changed, or a source that does not say it is CORRECTED or STRUCK. Also check the PLAN.md photo candidates' licences on their file pages. Run the checkpoint command. Answer with the counts and every correction.`

const BUILD = (p, port) => `${COMMON}
Page: ${p.url} (slug ${p.slug}). Your preview port: ${port}. Your spec file: ${WEB}/specs/${p.spec} (create it, or update it if it exists). Checkpoint command: ${CK(p, 'build')}
Inputs: ${B}/${p.slug}/must-answer.md, facts.md (use only VERIFIED or CORRECTED rows, at their corrected values), VERIFY.md, PLAN.md.
0) The owner, 2026-11-03: "we need more CTA's ... mid roll CTA's are lacking", "speaking as simple as you can so inexperienced humans can understand", "putting the information they want the most at the top". So: the slim offer bar under the short answer, then an offer box (h.cta or the kit's offer box) after about every second section, each tied to the question that section just answered, with its own headline and a large button, never the same words twice, and the full offer band at the end. Write every sentence for a first-time buyer: replace or explain in the same sentence any word they would not use. The short answer and the first section answer the most searched question first, before any background.
1) Write the spec in the style of ${WEB}/specs/fix-and-flip.js: header comment with batch, lane, sources; charts and tables built from the data files; free-licence photos with licence records; question headings that match real searches; the answer in the first two sentences; a worked example; a short FAQ that only repeats questions answered on the page; sources. Keep what the live page had worth keeping (tools, calculators, stories, the headline). The design must be the new standard: scannable on a phone, a visual at least every screen or two, no wall of text, nothing overlapping. Build with 'node tools/mkpage.js specs/${p.spec}' in ${WEB}. Run the checkpoint command as soon as the first build works.
2) Run the gates and fix every failure: in ${BB}: SCORE_TODAY=${args.today} node tools/score.js --site ${WEB}/chapter3realty --only ${p.url}; node tools/claims-scan.js ${WEB} (your page must have 0 findings); node tools/facts-check.js ${WEB}; node tools/house-claims.js ${WEB}/chapter3realty${p.url}index.html; node tools/critic.mjs http://localhost:${port} ${p.url} --widths 390,768,1440 --shots ${SP}/wf2/${p.slug}/shots (0 blocking). In ${WEB}: node build.js check and node build.js audit (a date failure on your own page is expected before the lead runs dates; nothing else may fail).
3) Look at the shots at full size yourself. Fix anything a human would find cramped, crowded, overlapping, too long or confusing.
4) Write ${B}/${p.slug}/shot-list.md: the photo partner's shot list (place, what to shoot, why, which section it replaces a stand-in in), short and specific.
5) Run the checkpoint command.
Answer with: the page's new outline, the gate results, and the shot paths.`

const REVIEW_SCHEMA = {
  type: 'object',
  properties: { pass: { type: 'boolean' }, score: { type: 'number' }, blocking: { type: 'array', items: { type: 'string' } }, nits: { type: 'array', items: { type: 'string' } } },
  required: ['pass', 'score', 'blocking'],
}

const LENSES = (p, port) => [
  { key: 'critic', prompt: `${COMMON}\nYou are the critic (${BB}/prompts/critic.md) for ${p.url}. Do not edit anything. Start the preview on port ${port + 100}. Run node ${BB}/tools/critic.mjs http://localhost:${port + 100} ${p.url} --widths 320,390,1024,1440 --shots ${SP}/wf2/${p.slug}/critic-shots and look at every shot at full size. Follow prompts/critic.md exactly, with the ledger ${B}/${p.slug}/facts.md and VERIFY.md. Return pass=true only when nothing is blocking and every score is 9 or more; score = your lowest score; blocking = each issue with the exact sentence or element and the width.` },
  { key: 'reader', prompt: `${COMMON}\nYou are the cold reader (${BB}/prompts/buyer-reader.md) for ${p.url}. Do not edit anything. You have never seen this site. Read the built page (${WEB}/chapter3realty${p.url}index.html; you may render it with the preview on port ${port + 200} and read it at 390 px). Could you act on it? What question did it leave open? What confused you? Where did you stop reading? Is anything in it something you already knew from the first Google result? Return pass=true only if no gap would stop you acting; score out of 10; blocking = each gap or confusion with the sentence.` },
  { key: 'owner', prompt: `${COMMON}\nYou are the owner's eye (${BB}/prompts/owner-eye.md) for ${p.url}, a fresh reviewer. Do not edit anything. Read voice/VERDICTS.md and voice/RULES.md first, then the built page (${WEB}/chapter3realty${p.url}index.html) and its shots in ${SP}/wf2/${p.slug}/. Score it as the owner would, out of 10. Return pass=true only at 9 or more with nothing the owner has corrected before; blocking = each thing that keeps it under 9, with the sentence.` },
]

const FIX = (p, port, reviews, round) => `${COMMON}
Page ${p.url} (slug ${p.slug}), fix round ${round}. Your preview port: ${port}. Your spec: ${WEB}/specs/${p.spec}. Checkpoint command: ${CK(p, 'review round ' + round)}
Three independent reviewers read the built page. Their findings:
${reviews.map((r) => `=== ${r.key}: pass=${r.pass}, score=${r.score}\nBlocking:\n${(r.blocking || []).map((x) => '- ' + x).join('\n')}\nNits:\n${(r.nits || []).map((x) => '- ' + x).join('\n')}`).join('\n')}
Fix every blocking item in the spec (never in the built page), using only verified facts (research and verify a new fact yourself only if a reviewer's gap needs one, and record it in facts.md with its source marked VERIFIED-BY-FIXER so the lead can re-check it). Also take the nits that are plainly right. If you think a finding is wrong, say why in ${B}/${p.slug}/REVIEW-${round}.md instead of changing the page. Rebuild, re-run every gate from the build step (score, claims-scan, facts-check, house-claims, critic.mjs 0 blocking, build.js check and audit) and look at the new shots. Append to ${B}/${p.slug}/REVIEW-${round}.md what you changed for each finding. Run the checkpoint command. Answer with that list.`

const port = (i) => 8780 + i

const results = await pipeline(
  args.pages,
  (p) => agent(RESEARCH(p), { label: `research ${p.slug}`, phase: 'Research' }),
  (r, p) => agent(VERIFY(p), { label: `verify ${p.slug}`, phase: 'Verify' }),
  (v, p, i) => agent(BUILD(p, port(i)), { label: `build ${p.slug}`, phase: 'Build' }),
  async (built, p, i) => {
    // The lean line (owner, 2026-11-01): one review by three lenses, one fix, one short re-check of the fixes.
    // Never loop full reviews to 9: fresh reviewers always find something new, and the scores stop moving.
    const reviews = (await parallel(LENSES(p, port(i)).map((l) => () =>
      agent(l.prompt, { label: `${l.key} ${p.slug}`, phase: 'Review', schema: REVIEW_SCHEMA }).then((x) => x && { key: l.key, ...x })))).filter(Boolean)
    /* A reviewer that did not answer (a usage limit, an error) is not a pass (2026-11-04: three pages came back "done" with no review). */
    if (reviews.length < 3) return { url: p.url, done: false, open: [`only ${reviews.length} of 3 reviewers answered; run the review again`], reviews: reviews.map((r) => r.score) }
    if (reviews.every((r) => r.pass && r.score >= 9)) return { url: p.url, done: true, reviews: reviews.map((r) => r.score) }
    await agent(FIX(p, port(i), reviews, 1), { label: `fix ${p.slug}`, phase: 'Review' })
    /* Lead, 2026-11-03: the second fix round is gone. It ran on every page and was about a tenth of the cost; the lead
       applies the re-check's list by hand, which takes minutes. The fixer's new fact rows get an independent check here,
       beside the re-check, instead of a separate verifier pass after the workflow. */
    const [recheck, fixerFacts] = await parallel([
      () => agent(`${COMMON}\nShort re-check of ${p.url}. Do not edit anything and do not review the whole page. A fixer just worked through this list:\n${reviews.flatMap((r) => (r.blocking || []).map((b) => '- [' + r.key + '] ' + b)).join('\n')}\nThe fixer's notes are in ${B}/${p.slug}/REVIEW-1.md. For each item, read the built page (${WEB}/chapter3realty${p.url}index.html) and say whether it is fixed or rightly declined. Also run node ${BB}/tools/critic.mjs on the preview (port ${port(i) + 300}) at 390 and 1440 and report any blocking finding. pass=true only if every item is fixed or rightly declined and the critic has 0 blocking; blocking = the items still open.`, { label: `re-check ${p.slug}`, phase: 'Review', schema: REVIEW_SCHEMA }),
      () => agent(`${COMMON}\nYou are an independent fact verifier (${BB}/prompts/verifier.md) for ${p.url}. Do not edit any page or spec. In ${B}/${p.slug}/facts.md, find the rows marked VERIFIED-BY-FIXER. If there are none, answer pass=true with no blocking at once. Otherwise open each row's source yourself, re-run any script behind it, and write ${B}/${p.slug}/FIXER-VERIFY.md: row, VERIFIED / CORRECTED / STRUCK, and for each row that is not VERIFIED the exact page sentence (from ${WEB}/chapter3realty${p.url}index.html) and its replacement. Add struck entries to the page's struck list. pass=true only if every row is VERIFIED; blocking = each sentence to change, quoted, with its replacement.`, { label: `fixer-facts ${p.slug}`, phase: 'Review', schema: REVIEW_SCHEMA }),
    ])
    const open = [...(recheck ? (!recheck.pass && recheck.blocking) || [] : ['the re-check did not answer']), ...(fixerFacts ? (!fixerFacts.pass && fixerFacts.blocking) || [] : ['the fact check did not answer'])]
    return { url: p.url, done: open.length === 0, open, reviews: reviews.map((r) => r.score) }
  },
)
return { results }
