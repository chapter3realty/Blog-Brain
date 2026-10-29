/**
 * photo-warmer: a Cloudflare Worker that copies every listing's photos ahead of visitors
 * (owners, 2026-10-28: "auto download the photo 240 a minute every minute until it has all of them").
 *
 * Every minute (Cron Trigger "* * * * *") it calls the website 18 times at once. Each call copies at
 * most 12 homes' first photos into the PHOTOS bucket, in both sizes, and stops early when the MLS
 * says fewer than 40 photos are left this minute or 600 this hour (idx-lib/photo.js, warm()). That is
 * up to about 216 photos a minute, under the MLS limit of 240, so visitors still get theirs. When
 * every home has its copy, the calls find nothing to fetch and only check; new listings are copied
 * within the hour.
 *
 * Setup (dash.cloudflare.com):
 *   1. Workers & Pages > Create > Worker > name it photo-warmer > Deploy > Edit code: paste this file > Deploy.
 *   2. photo-warmer > Settings > Variables and Secrets > Add > Secret, name WARM_KEY, the same value as the
 *      website's WARM_KEY.
 *   3. photo-warmer > Settings > Triggers > Cron Triggers > Add > "* * * * *" (every minute).
 *
 * No key or password is written in this file. It needs nothing but WARM_KEY.
 */
const SITE = "https://chapter3realty.com/homes/api/warm";
const SLOTS = 18;

async function run(env) {
  if (!env.WARM_KEY) return { ok: false, error: "WARM_KEY is not set on this Worker" };
  const calls = Array.from({ length: SLOTS }, (_, i) =>
    fetch(`${SITE}?slot=${i}&slots=${SLOTS}`, { headers: { "x-warm-key": env.WARM_KEY } })
      .then((r) => r.json())
      .catch(() => ({ ok: false })));
  const out = await Promise.all(calls);
  return {
    ok: out.some((o) => o && o.ok),
    fetched: out.reduce((n, o) => n + ((o && o.fetched) || 0), 0),
    stored: out.reduce((n, o) => n + ((o && o.stored) || 0), 0),
    alreadyKept: out.reduce((n, o) => n + ((o && o.kept) || 0), 0),
    pages: (out.find((o) => o && o.pages) || {}).pages || null,
    errors: [...new Set(out.filter((o) => !o || !o.ok).map((o) => (o && o.error) || "no answer"))],
  };
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(run(env).then((r) => console.log(JSON.stringify(r))));
  },
  // To see one minute's work, open the Worker's address with ?key=<your WARM_KEY>. Without the key it only
  // says it is running, so nobody else can start extra runs.
  async fetch(request, env) {
    const key = new URL(request.url).searchParams.get("key");
    if (!env.WARM_KEY || key !== env.WARM_KEY) return new Response("photo-warmer is running every minute.", { headers: { "content-type": "text/plain" } });
    return new Response(JSON.stringify(await run(env), null, 2), { headers: { "content-type": "application/json" } });
  },
};
