export const meta = {
  name: 'finish-2026-10-d',
  description: 'Finish the seven rebuilt but unshipped 2026-10-d pages: one fix of the last review\'s open items, then a short re-check and a check of any new facts',
  phases: [
    { title: 'Fix', detail: 'one fixer per page, from the last review and the brief' },
    { title: 'Check', detail: 'short re-check of the fixed items, and an independent check of new facts' },
  ],
}

const WEB = args.web, BB = args.bb, SP = args.sp
const B = `${BB}/batches/2026-10-d`
const CK = (p, stage) => `CLAUDE_SESSION_URL=${args.session} TMPDIR=${SP} ${BB}/tools/checkpoint.sh ${WEB} ${B} ${p.slug} "Batch 2026-10-d ${p.url}: ${stage}" specs/${p.spec} chapter3realty${p.url} data/2026-10-d/${p.slug} chapter3realty/images/2026-10-d/${p.slug}`

const COMMON = `You are finishing a page of chapter3realty.com that was rebuilt in batch 2026-10-d and reviewed, but not shipped. Do not create, archive or message any Claude Code session. Never deploy. Never run git commit or git push yourself; the checkpoint command saves your work. Do not run node build.js stitch, dates or llmsfull.
Website working copy: ${WEB} (pages in chapter3realty/, specs in specs/, build with 'node tools/mkpage.js specs/<file>.js' from ${WEB}). Blog-Brain: ${BB}. CRAFT.md is the skill; the website's CLAUDE.md and PLAYBOOK.md hold the voice and compliance rules and win any conflict. Edit only this page's spec, its data under data/2026-10-d/<slug>/, its images under chapter3realty/images/2026-10-d/<slug>/, and files in ${B}/<slug>/. Never hand-edit the built page. Note anything shared in ${B}/<slug>/NEEDS.md.
Hard rules: facts only from verified ledger rows; never a quote for Tim Nash or a story not in stories/stories.json; no interest rate or payment amount; BrickWood is an affiliate, never "our lender"; Devin Day only in the byline; no Paul; no fair-housing words; short-term rental figures only from ${WEB}/data/str-market.json (refreshed 2026-11-03 to AirROI's 12 months to September 2026; revenue includes guest cleaning fees; never present the change since August as growth).
Write so the audit passes the first time: no sentence over 28 words; none opening with "So"; no "Here is"; no pseudo-cleft ("What X is ..."); no we/our/us in the hero sub-header; a button to /contact/ is a request ("Have us ...", "Ask us ...", "Send ..."); no metaphors, no em dashes.`

const FIX = (p, port) => `${COMMON}
Page ${p.url} (slug ${p.slug}), spec ${WEB}/specs/${p.spec}. Preview port ${port}. Checkpoint command: ${CK(p, 'final fix')}
1) Read the last review, ${B}/${p.slug}/${p.review}, and every earlier REVIEW file there, plus the ledger facts.md and VERIFY.md. Then these open items from the lead's brief, which must all be closed:
${p.open}
2) Fix every open item and every blocking item still standing from the last review, in the spec, using only verified ledger rows at their verified values. If a gap needs a new fact, research it to a primary source and add it to facts.md marked VERIFIED-BY-FIXER with the source and quote. Cut rather than hedge.
3) Rebuild. Run, and fix every failure on this page: in ${BB}: SCORE_TODAY=${args.today} node tools/score.js --site ${WEB}/chapter3realty --only ${p.url}; node tools/claims-scan.js ${WEB} (0 findings on this page); node tools/facts-check.js ${WEB} (nothing on this page); node tools/house-claims.js ${WEB}/chapter3realty${p.url}index.html; node tools/struck-check.js <the page's struck list in ${B}/${p.slug}/ or ${B}/facts/> ${WEB}/chapter3realty${p.url}index.html; start node ${BB}/tools/preview.mjs ${WEB} --port ${port} in the background and run node ${BB}/tools/critic.mjs http://localhost:${port} ${p.url} --widths 320,390,1024,1440 (0 blocking). In ${WEB}: node build.js audit (only a date failure on this page is allowed).
4) Write ${B}/${p.slug}/REVIEW-FINAL.md: each item and what you changed. Run the checkpoint command. Answer with that list and the gate results.`

const SCHEMA = { type: 'object', properties: { pass: { type: 'boolean' }, score: { type: 'number' }, blocking: { type: 'array', items: { type: 'string' } } }, required: ['pass', 'blocking'] }

const results = await pipeline(
  args.pages,
  (x, p, i) => agent(FIX(p, 8800 + i * 10), { label: `fix ${p.slug}`, phase: 'Fix' }),
  async (fixed, p, i) => {
    const [recheck, facts] = await parallel([
      () => agent(`${COMMON}\nShort re-check of ${p.url}. Do not edit anything and do not review the whole page. The fixer's notes are in ${B}/${p.slug}/REVIEW-FINAL.md; the items were:\n${p.open}\nand the blocking items in ${B}/${p.slug}/${p.review}. For each item, read the built page (${WEB}/chapter3realty${p.url}index.html) and say whether it is fixed or rightly declined. Also start node ${BB}/tools/preview.mjs ${WEB} --port ${8805 + i * 10} in the background and run node ${BB}/tools/critic.mjs http://localhost:${8805 + i * 10} ${p.url} --widths 320,390,1440; report any blocking finding. pass=true only if every item is fixed or rightly declined and the critic has 0 blocking; blocking = each item still open, quoted, with the fix.`, { label: `re-check ${p.slug}`, phase: 'Check', schema: SCHEMA }),
      () => agent(`${COMMON}\nYou are an independent fact verifier (${BB}/prompts/verifier.md) for ${p.url}. Do not edit any page or spec. In ${B}/${p.slug}/facts.md, find the rows marked VERIFIED-BY-FIXER. If there are none, answer pass=true with no blocking at once. Otherwise open each row's source yourself, re-run any script behind it, and write ${B}/${p.slug}/FIXER-VERIFY.md: row, VERIFIED / CORRECTED / STRUCK, and for each row that is not VERIFIED the exact page sentence (from ${WEB}/chapter3realty${p.url}index.html) and its replacement. pass=true only if every row is VERIFIED; blocking = each sentence to change, quoted, with its replacement.`, { label: `fixer-facts ${p.slug}`, phase: 'Check', schema: SCHEMA }),
    ])
    const open = [...((recheck && !recheck.pass && recheck.blocking) || []), ...((facts && !facts.pass && facts.blocking) || [])]
    return { url: p.url, done: open.length === 0, open }
  },
)
return { results }