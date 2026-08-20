"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Full interactive blog page (Header, styled article, related posts, Footer).
// Kept exactly as before: client-only, unchanged.
const Blog1 = dynamic(() => import("@/components/Blog1"), { ssr: false });

/**
 * T3 fix — server-rendered blog body.
 *
 * On the server (and until the client mounts), we render `fallback` — a plain
 * server-rendered version of the article (title + image + body paragraphs)
 * produced in app/blog/[urlTitle]/page.jsx. That puts the real article text in
 * the initial HTML, so crawlers (incl. JS-less AI crawlers) and Google's first
 * pass see content instead of an empty shell (no more soft-404).
 *
 * Once mounted, we swap to the full interactive <Blog1> — no visual
 * duplication, and Blog1 itself is untouched (no risky SSR refactor).
 */
export default function BlogSSRBody({ fallback }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <Blog1 /> : fallback;
}
