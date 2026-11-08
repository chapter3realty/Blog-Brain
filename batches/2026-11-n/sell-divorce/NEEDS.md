# Shared needs: /sell/divorce/

For the lead. Nothing here is this page's to change.

1. **The contact form.** For this page's offers, the form would serve the reader better with one optional choice, "Does your spouse know you are writing to us? Yes / No / We are writing together", and no field that asks why. If the shared form cannot take a page-specific field, the page works without it.
2. **Hub link.** /sell/ (the sellers hub) should link /sell/divorce/ in a sentence. /sell/index.html already mentions divorce (it matched a search for the word); the lead decides the wording.
3. **Sibling links into this page.** /sell/cash-offer/ (sibling) already plans a link to /sell/divorce/ in its "when is cash the better choice" table. /sell/capital-gains/ has no divorce section; a one-sentence link from it to this page's tax section would serve readers who arrive there.
4. **Wikimedia rate limit.** Commons returned "Too many requests" for both photo candidates on 2026-11-08, as it did for the cash-offer sibling. The builder retries with a slower, identified user agent.
5. **Sitemap and llms.txt (writer, 2026-11-08).** The audit's one failure on this page is "missing from sitemap.xml"; llms.txt does not list it yet. Both are the lead's step with the hub link.
6. **No new image folder.** The page reuses `images/2026-11-a/hoa-liens-and-foreclosure/horry-government-justice-center.webp` and its record (copied to `data/2026-11-n/sell-divorce/photos.json` with this page's caption). `images/2026-11-n/sell-divorce/` does not exist, so the checkpoint's `git add -N` on that pathspec fails; the other paths were added by hand once and the patch now carries them.

## Added in fix round 1 (2026-11-08)

7. **IDX feed (owner: "every blog needs an IDX feed on it that is pre filtered to what that blog is about").** `/sell/divorce/` is not in `idx-lib/feeds.js`, and this page may not edit it. Please add `"/sell/divorce/": COMPETITION` (the /sell/ hub's "homes competing with yours right now" feed) next to the other /sell/ rows, so the strip sits near the top as on /sell/fsbo/.
8. **A photo.** The reused courthouse photo is out: the owner reviewer said it is not of the topic and the reader sees it twice across pages. The critic tool now blocks "a blog with no real photo" (photos.blog-no-photo). The owner's words allow "leave the photo out", and nothing on Commons fits (a for-sale sign is a brand sign; the one Horry County street shot is a bridge wall). Please send the photo partner the shot list in `shot-list.md`; when his photo arrives it goes beside the steps.
9. **Share card.** The page's own share card is `images/2026-11-n/sell-divorce/share.jpg`, made with `tools/ogcard.js` and moved out of `og/` so this page writes no file outside its folders. The spec points og:image at it.
10. **Old image folder note (item 6) is replaced:** `images/2026-11-n/sell-divorce/` now exists (the share card only).
