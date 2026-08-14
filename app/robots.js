const SITE = "https://www.adiance.com";

const AI_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "DuckDuckBot",
  "YandexBot",
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
    host: SITE,
  };
}
