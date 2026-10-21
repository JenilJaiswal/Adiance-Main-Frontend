"use client";

// Statically imported (no `dynamic(..., { ssr: false })`) so the homepage body
// is present in the server-rendered HTML. Crawlers that don't execute JS —
// GPTBot, ClaudeBot, PerplexityBot and friends — previously received an empty
// shell here and saw none of the page copy.
//
// Home and its children (Header, Home_Slider, WhatWeDo, Home_mid, Footer) touch
// `document` only inside useEffect, which does not run during SSR.
import Home from "@/views/Home/Home";

// `faq` is the server-rendered visible FAQ (see HomeFaq).
export default function ClientPage({ faq = null }) {
  return <Home faq={faq} />;
}
