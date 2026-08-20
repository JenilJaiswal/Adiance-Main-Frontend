const SITE = "https://www.adiance.com";

// AI / generative-engine crawlers to grant full access (good for GEO).
// IMPORTANT: search engines (Googlebot, Bingbot, Applebot, DuckDuckBot,
// YandexBot, ...) are deliberately NOT listed here. Giving a search bot its
// own `allow: /` group makes it a more-specific match than the `*` group, so
// it would IGNORE every Disallow below. Search engines must fall through to
// the `*` group so the Disallow rules actually apply to them.
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
];

export default function robots() {
  // Keep this gate in sync with `allowIndex` in src/seo/pageMetadata.js.
  // Production builds are crawlable by default; staging/preview must opt out
  // explicitly with NEXT_PUBLIC_ALLOW_INDEX=false.
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_ALLOW_INDEX === "true" ||
    (process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_ALLOW_INDEX !== "false");

  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/contact-zoho", "/autoplay", "/static", "/*.json$"],
      },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    // public/image-sitemap.xml is an empty stub (no <url> entries), so it is
    // not advertised here — pointing Google at an empty sitemap only produces
    // a Search Console error. Re-add once it is actually populated.
    sitemap: [`${SITE}/sitemap.xml`],
    // NOTE: no `host` field — it emits a `Host:` directive, which is a
    // Yandex-only extension that Google flags as unsupported in GSC.
  };
}
