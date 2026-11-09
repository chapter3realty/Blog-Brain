"""Combine every helper's output into the one file the CRM loads (data/listing-labels/all.jsonl).

  python3 build_file.py <crm repo> <workdir>

Description labels come from out/a-*.jsonl (the full run; earlier test files fill gaps),
photo labels from out/p-*.jsonl. One line per home with both, because the CRM replaces a
home's labels with the newest file's (docs/listing-labels.md). Known labels only (merge.py rules).
"""
import glob, json, os, re, sys
crm, work = sys.argv[1], sys.argv[2]
src = open(os.path.join(crm, "src/lib/idx/listing-labels-list.ts")).read()
rows = re.findall(r'\{ key: "([a-z0-9_]+)", label: "[^"]*", group: "[a-z]+", sees: "(dp|d|p)"', src)
P = {k for k, s in rows if "p" in s}
D = {k for k, s in rows if "d" in s}
desc, photo, dropped = {}, {}, 0
# Renamed after helpers had used the old key (gas range was mapped to the MLS's gas-service key).
RENAME = {"natural_gas": "gas_range"}
def lines(pattern):
    for f in sorted(glob.glob(os.path.join(work, "out", pattern))):
        for line in open(f):
            try:
                o = json.loads(line)
                if re.fullmatch(r"[A-Za-z0-9]{1,40}", o.get("k", "")):
                    yield o
            except Exception:
                pass
for pat in ["test-*.jsonl", "t10-*.jsonl", "a-*.jsonl", "r-*.jsonl"]:
    for o in lines(pat):
        d = sorted({RENAME.get(x, x) for x in o.get("d", []) if RENAME.get(x, x) in D})
        dropped += len(o.get("d", [])) - len(d)
        desc[o["k"]] = d
for o in lines("p-*.jsonl"):
    p = {RENAME.get(x, x): n for x, n in (o.get("p") or {}).items() if RENAME.get(x, x) in P and isinstance(n, int) and 0 <= n <= 199}
    dropped += len(o.get("p") or {}) - len(p)
    photo[o["k"]] = p
keys = sorted(set(desc) | set(photo))
out = os.path.join(crm, "data/listing-labels/all.jsonl")
with open(out, "w") as f:
    for k in keys:
        f.write(json.dumps({"k": k, "d": desc.get(k, []), "p": photo.get(k, {})}, separators=(",", ":")) + "\n")
n = sum(len(desc.get(k, [])) + len(photo.get(k, {})) for k in keys)
print(f"{len(keys)} homes ({len(desc)} with description labels, {len(photo)} with photo labels), {n} labels, {dropped} unknown dropped")
