"""Photo rounds: batch the homes whose sheets are ready, and clear sheets already labeled.

  python3 rounds.py <workdir> batch   # writes pbatch/f-NNNN.txt (3 homes each) for ready homes not batched; prints "from to"
  python3 rounds.py <workdir> clean   # deletes the sheets of homes in batches whose output exists
  python3 rounds.py <workdir> status
"""
import json, os, sys
W, cmd = sys.argv[1], sys.argv[2]
H = {}
for l in open(os.path.join(W, "homes.jsonl")):
    h = json.loads(l); H[h["key"]] = h
pb = os.path.join(W, "pbatch")
def batched():
    out = {}
    for f in os.listdir(pb):
        if f.startswith("f-"):
            for line in open(os.path.join(pb, f)):
                if line.strip():
                    out[line.split(":")[0]] = f[:-4]
    return out
def labeled(name):
    p = os.path.join(W, "out", f"p-{name}.jsonl")
    return os.path.exists(p) and os.path.getsize(p) > 0
if cmd == "batch":
    files = set(os.listdir(os.path.join(W, "sheets")))
    have = batched()
    # Homes already labeled by the 3-home method in the test (p-v3-*); the rest of the test is done again.
    test = set()
    for f in os.listdir(os.path.join(W, "out")):
        if f.startswith("p-v3-"):
            test |= {json.loads(l)["k"] for l in open(os.path.join(W, "out", f)) if l.strip()}
    ready = []
    for k in [l.strip() for l in open(os.path.join(W, "all-keys.txt")) if l.strip()]:
        n = min(len(H[k]["photos"]), 25)
        if k in have or k in test or n == 0 or f"{k}-{(n - 1) // 9}.jpg" not in files:
            continue
        ready.append(k)
    nums = [int(v[2:]) for v in set(have.values())]
    start = max(nums) + 1 if nums else 0
    i = start
    for j in range(0, len(ready) - len(ready) % 3, 3):
        with open(os.path.join(pb, f"f-{i:04d}.txt"), "w") as f:
            for k in ready[j:j + 3]:
                f.write(k + ": " + " ".join(sorted(x for x in files if x.startswith(k + "-"))) + "\n")
        i += 1
    print(start, i)
elif cmd == "clean":
    n = 0
    for k, b in batched().items():
        if labeled(b):
            for x in range(3):
                p = os.path.join(W, "sheets", f"{k}-{x}.jpg")
                if os.path.exists(p):
                    os.remove(p); n += 1
    print("removed", n, "sheets")
else:
    b = batched()
    names = set(b.values())
    print(len(H), "homes;", len(b), "batched in", len(names), "batches;", sum(1 for x in names if labeled(x)), "batches labeled")
