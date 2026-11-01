# Restore the website working copy for batch 2026-10-d

A container restart deletes the scratch folder. Every helper saves its page's website diff to
`batches/2026-10-d/<slug>/web.patch` (tools/checkpoint.sh). To rebuild the working copy:

```
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 3 -b claude/github-account-check-wutg8b https://github.com/chapter3realty/chapter3-website web2
cd web2
for v in v1.20-ai-memory-closest-ring-speed v1.21-ai-reads-descriptions-phone-layout v1.22-instant-layout v1.23-hover-photos-feeds; do git am <Blog-Brain>/website-patches/$v.patch; done
for p in <Blog-Brain>/batches/2026-10-d/*/web.patch; do git apply --binary "$p"; done
```

Each web.patch is against the commit in the web.base file beside it.
