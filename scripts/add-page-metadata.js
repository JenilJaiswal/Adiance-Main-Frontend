/* Rewrites every app/**page.jsx so:
 *   - page.jsx becomes a Server Component that exports `metadata`
 *     (per-route title / description / canonical / OG / robots),
 *   - the actual UI component is loaded by a sibling ClientPage.jsx
 *     wrapper that keeps `dynamic(..., { ssr: false })` so existing
 *     client-only components (Helmet, useLocation, window/document)
 *     continue to work unchanged.
 *
 * Run with:  node scripts/add-page-metadata.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "app");

const importRe =
  /const\s+(\w+)\s*=\s*dynamic\(\s*\(\)\s*=>\s*import\(["']([^"']+)["']\)\s*,\s*\{\s*ssr:\s*false\s*\}\s*\);?/;
const renderRe = /return\s+<(\w+)([^/>]*)\s*\/?\s*>/;

function pageRouteFromFile(file) {
  const rel = path.relative(APP, path.dirname(file)).split(path.sep).join("/");
  if (!rel) return "/";
  return "/" + rel;
}

function isDynamicRoute(routePath) {
  return routePath.split("/").some((seg) => seg.startsWith("[") && seg.endsWith("]"));
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name === "page.jsx") out.push(p);
  }
  return out;
}

function clientPageContent(componentName, componentPath, propsStr) {
  return `"use client";

import dynamic from "next/dynamic";

const ${componentName} = dynamic(() => import("${componentPath}"), { ssr: false });

export default function ClientPage() {
  return <${componentName}${propsStr ? " " + propsStr : ""} />;
}
`;
}

function serverPageContent(routePath, isDyn) {
  if (isDyn) {
    return `import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export async function generateMetadata({ params }) {
  const slug = params?.urlTitle || "";
  const title = slug
    ? slug
        .replace(/-/g, " ")
        .replace(/\\b\\w/g, (c) => c.toUpperCase()) + " | Adiance Blog"
    : "Adiance Blog";
  return buildMetadata("${routePath.replace(/\[[^\]]+\]/g, "")}".replace(/\\/+$/, "") || "/blog", {
    title,
    canonical: \`/blog/\${slug}\`,
  });
}

export default function Page() {
  return <ClientPage />;
}
`;
  }
  return `import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("${routePath}");

export default function Page() {
  return <ClientPage />;
}
`;
}

const files = walk(APP);
let rewritten = 0;
let skipped = 0;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const importMatch = src.match(importRe);
  const renderMatch = src.match(renderRe);

  if (!importMatch || !renderMatch) {
    skipped++;
    continue;
  }

  const componentName = importMatch[1];
  const componentPath = importMatch[2];
  const propsStr = (renderMatch[2] || "").trim();
  const routePath = pageRouteFromFile(file);
  const dyn = isDynamicRoute(routePath);

  const dir = path.dirname(file);
  const clientPath = path.join(dir, "ClientPage.jsx");

  fs.writeFileSync(clientPath, clientPageContent(componentName, componentPath, propsStr));
  fs.writeFileSync(file, serverPageContent(routePath, dyn));
  rewritten++;
}

console.log(
  `Rewrote ${rewritten} page wrappers, skipped ${skipped} (already migrated / unusual pattern).`,
);
