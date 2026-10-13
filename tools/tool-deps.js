#!/usr/bin/env node
/*
 * tool-deps.js: the Blog-Brain files a tool needs beside it, for tools/package-batch.js.
 *
 * toolFiles(root, list) returns the files in list (paths from the Blog-Brain root) and every file
 * they load from beside them, followed down, sorted. A tool loads a neighbour by a relative
 * require ("./icons.js", "../rules/claims.json") or by a fixed path from its own folder
 * (path.join(__dirname, "geo", "grand-strand-v2.json")). Comments are skipped, so a usage
 * example in a header is not read as a need. A path outside root, or one that is not a file, is
 * left out; a listed file that does not exist throws.
 *
 *   node tools/tool-deps.js tools/page-kit.js tools/compare.js
 */
"use strict";
const fs = require("fs"), path = require("path");

function toolFiles(root, list) {
  const out = new Set(), todo = [...list];
  while (todo.length) {
    const f = path.normalize(todo.shift()).split(path.sep).join("/");
    if (out.has(f)) continue;
    const abs = path.join(root, f);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) throw new Error(`tool-deps: ${f} is not a file in ${root}`);
    out.add(f);
    if (!/\.js$/.test(f)) continue;
    const src = fs.readFileSync(abs, "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    const deps = [...src.matchAll(/\brequire\(\s*["'](\.{1,2}\/[^"']+)["']\s*\)/g)].map((m) => path.join(path.dirname(f), m[1]))
      .concat([...src.matchAll(/path\.join\(\s*__dirname((?:\s*,\s*"[^"]+")+)\s*\)/g)].map((m) => path.join(path.dirname(f), ...[...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]))));
    for (const d of deps) {
      if (path.relative(root, path.join(root, d)).startsWith("..")) continue;
      const hit = [d, d + ".js", d + ".json"].find((c) => fs.existsSync(path.join(root, c)) && fs.statSync(path.join(root, c)).isFile());
      if (hit) todo.push(hit);
    }
  }
  return [...out].sort();
}

module.exports = { toolFiles };

if (require.main === module) {
  const list = process.argv.slice(2);
  if (!list.length) { console.error("usage: node tools/tool-deps.js <tool> ..."); process.exit(2); }
  console.log(toolFiles(path.join(__dirname, ".."), list).join("\n"));
}
