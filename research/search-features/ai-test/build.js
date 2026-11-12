// Builds the exact prompt idx-lib/map.js sends, from the live filter list. node build.js <map.js> <out dir>
const fs = require("fs"), vm = require("vm");
const src = fs.readFileSync(process.argv[2], "utf8");
const a = src.indexOf("var prompt=\"You are the home search"), z = src.indexOf(";\n  return fetch(\"https://api-proxy", a);
const code = src.slice(a, z);
const j = JSON.parse(fs.readFileSync("filters.json", "utf8"));
const keys = [], names = {}, cnt = {};
j.groups.forEach((g) => g.items.forEach((it) => { keys.push(it.k); names[it.k] = it.l; cnt[it.k] = it.n; }));
const Q = fs.readFileSync("sentences.txt", "utf8").split("\n").filter(Boolean);
fs.mkdirSync(process.argv[3], { recursive: true });
Q.forEach((q, i) => {
  const wm = src.match(/var WANT_KEYS=(\[[^\]]*\])/);
  const ctx = { q, before: [], state: { toString: () => "" }, left: "", keys, names, cnt, JSON, WANT_KEYS: wm ? JSON.parse(wm[1]) : [] };
  vm.runInNewContext(code, ctx);
  fs.writeFileSync(`${process.argv[3]}/q${String(i).padStart(2, "0")}.txt`, ctx.prompt);
});
console.log(Q.length, "prompts,", fs.statSync(`${process.argv[3]}/q00.txt`).size, "bytes each");
