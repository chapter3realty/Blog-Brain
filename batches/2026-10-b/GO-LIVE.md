# Going live: batch 2026-10-b and the listing search

Rehearsed on 2026-10-23 on a fresh copy of the live branch at 39036014: batch b installs, the listing search applies on top with no conflict, 69 listing controls pass, and `node build.js preflight` passes.

The listing search stays switched off after the deploy. Nothing changes for visitors except the five new pages, the footer line, and the privacy section, until step 4.

## 1. Put the code on the website (PowerShell)

```powershell
cd C:\Blog-Brain
git pull origin claude/beautiful-bell-7fe8p5

cd C:\c3
git checkout claude/github-account-check-wutg8b
git pull origin claude/github-account-check-wutg8b
git status                       # must say: nothing to commit, working tree clean
```

Then run every step in `batches/2026-10-b/upload/README-UPLOAD.md`, "Windows PowerShell", up to and including `git commit`. Stop before its `git push`. Then add the listing search:

```powershell
git am -3 "C:\Blog-Brain\website-patches\idx-v1-listing-search.patch"
node build.js stitch
node tools/idx-test.mjs          # must end: all controls pass
node build.js preflight          # must end without FAIL
git push origin claude/github-account-check-wutg8b
```

Then deploy as usual with `deploy.ps1`.

If `git am` stops, run `git am --abort` and tell Claude. Do not fix it by hand.

## 2. See it on the real site, privately

In Cloudflare: dash.cloudflare.com, then Workers & Pages, then the chapter3realty project, then Settings, then Variables and Secrets. Add these to **Production**:

| Name | Type | Value |
|---|---|---|
| `IDX_API_SECRET` | Secret | Abdulla copies it from Railway, chapter3-crm, Variables, IDX_API_SECRET |
| `IDX_PREVIEW_WORD` | Text | A word you pick |

Deploy again so the settings take effect. Then open `https://chapter3realty.com/homes/?idxpreview=<your word>` once. For a day, that browser sees the search, the listing pages and the homes strips with real listings. Search engines and everyone else still see nothing.

Look at the five guide pages and a few listings. Tell Claude which community strips look wrong.

## 3. Before switching it on

- **Turnstile.** Abdulla makes the widget (hostnames chapter3realty.com and www.chapter3realty.com, mode Managed) and puts its secret in Railway as `TURNSTILE_SECRET_KEY`. Add the site key in Cloudflare as `TURNSTILE_SITE_KEY` (Text). Without it, the sign-up says it is unavailable and asks people to call.
- **Attorney.** Reads the terms at `/homes/terms/` and the listing search section of `/privacy/`. If any wording changes, Claude changes it and raises the version.

## 4. Switch it on

In Cloudflare, add `IDX_LIVE` = `1` (Text) to Production, and deploy again. To switch it off, delete `IDX_LIVE` and deploy.

After it is on:

- Add `Sitemap: https://chapter3realty.com/sitemap-homes.xml` to `robots.txt` (Claude can do this), and submit it in Search Console.
