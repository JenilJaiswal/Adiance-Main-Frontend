/* Rewrite every app/**page.jsx to use next/dynamic with ssr:false
 * so we get pure CSR (matching the original CRA behavior) and avoid
 * server-render errors from window/document access at top level.
 */
const fs = require("fs");
const path = require("path");

const APP = path.join(__dirname, "..", "app");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name === "page.jsx" || entry.name === "not-found.jsx") out.push(p);
  }
  return out;
}

const importRe = /^import\s+(\w+)\s+from\s+["']([^"']+)["'];?\s*$/m;
const propRe = /return\s+<\w+([^/>]*)\s*\/>;/;

let changed = 0;
for (const file of walk(APP)) {
  const s = fs.readFileSync(file, "utf8");
  if (s.includes("next/dynamic")) continue;
  const importMatch = s.match(importRe);
  if (!importMatch) continue;
  const compName = importMatch[1];
  const compPath = importMatch[2];
  const propsMatch = s.match(propRe);
  const propsStr = propsMatch ? propsMatch[1].trim() : "";

  const next = `"use client";

import dynamic from "next/dynamic";

const ${compName} = dynamic(() => import("${compPath}"), { ssr: false });

export default function Page() {
  return <${compName}${propsStr ? " " + propsStr : ""} />;
}
`;
  fs.writeFileSync(file, next);
  changed++;
}

console.log(`Converted ${changed} page wrappers to dynamic ssr:false.`);
