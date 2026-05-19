/* One-shot codemod:
 *   - Add "use client" directive to component files that use React hooks / imports
 *   - Rewrite `from "react-router-dom"` -> `from "@/compat/react-router-dom"`
 *   - Rewrite REACT_APP_ env vars to NEXT_PUBLIC_
 *   - Rewrite process.env.PUBLIC_URL to "" (Next serves /public at root)
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "src");
const EXCLUDE = new Set(["App.js", "App.test.js", "index.js", "setupTests.js", "RedirectManager.js"]);

const exts = new Set([".js", ".jsx"]);
const hookRegex = /\buse[A-Z]\w+\(/;
const reactImportRegex = /from\s+["']react["']/;
const useClientRegex = /^\s*["']use client["'];?\s*$/m;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "compat") continue;
      walk(p, out);
    } else if (exts.has(path.extname(entry.name))) {
      if (EXCLUDE.has(entry.name)) continue;
      out.push(p);
    }
  }
  return out;
}

let touched = 0;
let directiveAdded = 0;
let rrdRewritten = 0;
let envRewritten = 0;
let publicUrlRewritten = 0;

for (const file of walk(SRC)) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;

  // 1. Rewrite react-router-dom imports
  if (s.includes("react-router-dom")) {
    s = s.replace(
      /(from\s+["'])react-router-dom(["'])/g,
      '$1@/compat/react-router-dom$2',
    );
    if (s !== orig) rrdRewritten++;
  }

  // 2. Rewrite env vars
  const beforeEnv = s;
  s = s.replace(/process\.env\.REACT_APP_/g, "process.env.NEXT_PUBLIC_");
  if (s !== beforeEnv) envRewritten++;

  // 3. Rewrite PUBLIC_URL -> ""
  const beforePub = s;
  s = s.replace(/process\.env\.PUBLIC_URL/g, '""');
  if (s !== beforePub) publicUrlRewritten++;

  // 4. Add "use client" if missing and the file uses hooks or imports react
  const needsDirective =
    !useClientRegex.test(s) &&
    (reactImportRegex.test(s) || hookRegex.test(s));
  if (needsDirective) {
    s = '"use client";\n\n' + s;
    directiveAdded++;
  }

  if (s !== orig) {
    fs.writeFileSync(file, s);
    touched++;
  }
}

console.log(
  `Touched ${touched} files. Added "use client" to ${directiveAdded}. Rewrote react-router-dom in ${rrdRewritten}. Rewrote REACT_APP_ in ${envRewritten}. Rewrote PUBLIC_URL in ${publicUrlRewritten}.`,
);
