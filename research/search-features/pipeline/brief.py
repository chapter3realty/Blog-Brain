"""Write the labelers' reference list (labels.txt) from the CRM's fixed list.

  python3 brief.py <crm>/src/lib/idx/listing-labels-list.ts
"""
import re, sys
src = open(sys.argv[1]).read()
rows = re.findall(r'\{ key: "([a-z0-9_]+)", label: "([^"]*)", group: "[a-z]+", sees: "(dp|d|p)", mls: (?:true|false), about: "([^"]*)" \}', src)
assert len(rows) > 300, len(rows)
photo = [r for r in rows if "p" in r[2]]
desc = [r for r in rows if "d" in r[2]]
out = ["PHOTO LABELS (use only these keys for photos):"]
out += [f"{k} = {l}" + (f" ({a})" if a else "") for k, l, s, a in photo]
out += ["", "DESCRIPTION LABELS (use only these keys for the description):"]
out += [f"{k} = {l}" + (f" ({a})" if a else "") for k, l, s, a in desc]
open("labels.txt", "w").write("\n".join(out) + "\n")
print(len(photo), "photo labels,", len(desc), "description labels")
