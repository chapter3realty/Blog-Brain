"""Check the helpers' output and write one CRM label file.

  python3 merge.py <crm>/src/lib/idx/listing-labels-list.ts <out.jsonl> <result files...>

Keeps only known keys from the right list, photo numbers 0-199, the last line per home.
Prints how many lines and labels were dropped, so a helper that drifts is seen.
"""
import json, re, sys
src = open(sys.argv[1]).read()
rows = re.findall(r'\{ key: "([a-z0-9_]+)", label: "[^"]*", group: "[a-z]+", sees: "(dp|d|p)"', src)
P = {k for k, s in rows if "p" in s}
D = {k for k, s in rows if "d" in s}
homes, dropped, bad = {}, 0, 0
for f in sys.argv[3:]:
    for line in open(f):
        line = line.strip()
        if not line:
            continue
        try:
            o = json.loads(line)
            k = o["k"]
            assert re.fullmatch(r"[A-Za-z0-9]{1,40}", k)
        except Exception:
            bad += 1
            continue
        d = [x for x in o.get("d", []) if x in D]
        p = {x: n for x, n in (o.get("p") or {}).items() if x in P and isinstance(n, int) and 0 <= n <= 199}
        dropped += len(o.get("d", [])) - len(d) + len(o.get("p") or {}) - len(p)
        homes[k] = {"k": k, "d": sorted(set(d)), "p": p}
with open(sys.argv[2], "w") as out:
    for h in homes.values():
        out.write(json.dumps(h, separators=(",", ":")) + "\n")
n = sum(len(h["d"]) + len(h["p"]) for h in homes.values())
print(f"{len(homes)} homes, {n} labels; dropped {dropped} unknown labels and {bad} bad lines")
