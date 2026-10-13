#!/usr/bin/env node
/*
 * Controls for tool-deps.js, which tells tools/package-batch.js what to copy into the website's
 * tools/blog-brain/ with each listed tool.
 *
 *   node tools/tool-deps.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");
const { toolFiles } = require("./tool-deps.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn) => { try { fn(); return false; } catch { return true; } };
const ROOT = path.join(__dirname, "..");

/* The real tools. */
const kit = toolFiles(ROOT, ["tools/page-kit.js"]);
check("page-kit.js brings the tools it loads, and theirs", ["tools/area-map.js", "tools/icons.js", "tools/photos.js", "tools/story-check.js", "tools/illustrations.js"].every((f) => kit.includes(f)), kit.join(" "));
check("page-kit.js brings the map data area-map.js reads", kit.includes("tools/geo/grand-strand-v2.json") && kit.includes("tools/geo/grand-strand.json"));
const cmp = toolFiles(ROOT, ["tools/compare.js"]);
check("compare.js brings rules/claims.json and icons.js", cmp.includes("rules/claims.json") && cmp.includes("tools/icons.js") && !cmp.includes("tools/photos.js"), cmp.join(" "));
check("the 2026-10-a list is unchanged plus page-kit's own needs", toolFiles(ROOT, require("../batches/2026-10-a/upload.json").blogBrainTools.files).includes("tools/story-check.js"));

/* A fixture: what is followed and what is not. */
const d = fs.mkdtempSync(path.join(os.tmpdir(), "tool-deps-"));
const put = (f, s) => { fs.mkdirSync(path.dirname(path.join(d, f)), { recursive: true }); fs.writeFileSync(path.join(d, f), s); };
put("t/a.js", '/* usage: require("./c.js") */\nconst b = require("./b");\nconst x = require("../../outside.js");\nconst g = path.join(__dirname, "geo", "e.json");\nconst n = require("fs");\n// require("./c.js")\n');
put("t/b.js", 'module.exports = require("../r/rules.json");');
put("t/c.js", "");
put("t/geo/e.json", "{}");
put("r/rules.json", "{}");
const got = toolFiles(d, ["t/a.js"]);
check("follows relative requires, with or without .js, and on into .json", got.includes("t/b.js") && got.includes("r/rules.json"), got.join(" "));
check("follows a fixed path from the tool's own folder", got.includes("t/geo/e.json"));
check("skips a require inside a comment, a package name and a path outside the root", !got.includes("t/c.js") && got.length === 4, got.join(" "));
check("a listed file that does not exist throws", throws(() => toolFiles(d, ["t/missing.js"])));
fs.rmSync(d, { recursive: true, force: true });

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
