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
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

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
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/image-sitemap.xml`],
    host: SITE,
  };
}
