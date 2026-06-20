/* Rewrite imports of the renamed src/Pages -> src/views directory.
 * Covers @/Pages/, ../Pages/, ../../Pages/, ../../../Pages/, etc.
 * Excludes src/AdianceAdmin/pages (lowercase, different directory).
 */
const fs = require("fs");
const path = require("path");

const ROOTS = [path.join(__dirname, "..", "src"), path.join(__dirname, "..", "app")];
const exts = new Set([".js", ".jsx", ".ts", ".tsx"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(entry.name))) out.push(p);
  }
  return out;
}

const importLineRe = /(from\s+["']|import\(["']|require\(["'])((?:\.{1,2}\/)+|@\/)Pages\//g;

let touched = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    let s = fs.readFileSync(file, "utf8");
    const orig = s;
    s = s.replace(importLineRe, (_m, head, prefix) => `${head}${prefix}views/`);
    if (s !== orig) {
      fs.writeFileSync(file, s);
      touched++;
    }
  }
}

console.log(`Rewrote Pages -> views imports in ${touched} files.`);
