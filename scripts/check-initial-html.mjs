#!/usr/bin/env node
/**
 * Initial-HTML check: fetches routes WITHOUT running JavaScript and fails if the
 * server response is an empty shell. Run against `next start` (or staging):
 *
 *   node scripts/check-initial-html.mjs --base http://127.0.0.1:3000 \
 *        --file tests/fixtures/audit-shell-urls.txt --ua googlebot
 *   node scripts/check-initial-html.mjs --base http://127.0.0.1:3000 \
 *        --paths /about,/contact --expect-redirect /products=/product-portfolio
 *
 * Per route it asserts: HTTP 200 (or the expected 301/308 target), exactly one
 * <h1>, enough visible body text, a <title>, a canonical link, internal links
 * in the markup, and no literal "[object Object]".
 */
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const base = opt("base", "http://127.0.0.1:3000").replace(/\/$/, "");
const minChars = Number(opt("min-chars", 400));
const minLinks = Number(opt("min-links", 5));
const uas = {
  browser: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  social: "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
};
const ua = uas[opt("ua", "browser")] || opt("ua");

const paths = [];
if (opt("paths")) paths.push(...opt("paths").split(",").filter(Boolean));
if (opt("file")) {
  paths.push(...readFileSync(opt("file"), "utf8").split("\n").map((l) => l.trim()).filter((l) => l.startsWith("/")));
}
const redirects = (opt("expect-redirect") || "").split(",").filter(Boolean).map((p) => p.split("="));

const visibleText = (html) =>
  html
    .replace(/<head[\s\S]*?<\/head>/i, "")
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

let failures = 0;
const fail = (p, msg) => {
  failures += 1;
  console.log(`FAIL ${p}: ${msg}`);
};

for (const [from, to] of redirects) {
  const res = await fetch(base + from, { redirect: "manual", headers: { "user-agent": ua } });
  const loc = res.headers.get("location") || "";
  const ok = [301, 308].includes(res.status) && (loc === to || loc.endsWith(to));
  console.log(`${ok ? "ok  " : "FAIL"} redirect ${from} -> ${res.status} ${loc} (expected ${to})`);
  if (!ok) failures += 1;
}

for (const p of [...new Set(paths)]) {
  const res = await fetch(base + p, { redirect: "manual", headers: { "user-agent": ua } });
  if (res.status !== 200) {
    fail(p, `status ${res.status}`);
    continue;
  }
  const html = await res.text();
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  const chars = visibleText(html).length;
  const links = new Set([...html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/gi)].map((m) => m[1])).size;
  const problems = [];
  if (h1 !== 1) problems.push(`h1 count ${h1}`);
  if (chars < minChars) problems.push(`visible chars ${chars} < ${minChars}`);
  if (links < minLinks) problems.push(`internal links ${links} < ${minLinks}`);
  if (!/<title>[^<]+<\/title>/i.test(html)) problems.push("no <title>");
  if (!/<link[^>]+rel="canonical"/i.test(html)) problems.push("no canonical");
  if (html.includes("[object Object]")) problems.push("contains [object Object]");
  if (problems.length) fail(p, problems.join("; "));
  else console.log(`ok   ${p} h1=1 chars=${chars} links=${links}`);
}

console.log(failures ? `\n${failures} check(s) FAILED` : `\nAll ${paths.length + redirects.length} checks passed`);
process.exit(failures ? 1 : 0);
