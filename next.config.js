/** @type {import('next').NextConfig} */
const legacyRedirects = {
  "/netherlands-cctv-camera-manufacturer":
    "/cctv-camera-manufacturer-netherlands",
  "/cctv-manufacturer-europe": "/oem-camera-manufacturer-europe",
  "/oem-cctv-india": "/cctv-camera-manufacturer-india",
  "/the-top-10-cctv-camera-manufacturers-in-the-usa": "/blog",
  "/future-and-growth": "/about",
  "/sustainability": "/about",
  "/index.html": "/",
  // T4: legacy Joomla / removed URLs reported as 404 in GSC → closest live page.
  "/index": "/",
  "/hobvy": "/",
  // T4 — remaining GSC "Not found (404)" URLs → closest live 200 target.
  "/about-us": "/about",
  "/thermalcamera": "/thermal-camera",
  "/true-4k-smart-cloud-cctv-camera": "/4kcamera",
  "/cctv-camera-manufacturers-suppliers-exporters": "/oem-services",
  "/voipcallcenter.html": "/",
  "/technology/innovation": "/innovation",
  "/realtime-edge-ai-based-smart-cloud-camera": "/edgeaicamera",
  "/adiance-cloud-based-thermal-camera-n": "/adiance-thermal-camera-n",
  "/5g-cctv-camera-manufacturing": "/4gcamera",
  // Legacy /seo/ doorway page → its canonical hub (rest of /seo/* 404 by design).
  "/seo/oem-cctv-manufacturer-europe": "/oem-camera-manufacturer-europe",
  // Missing compliance PDF → the live compliance-documents hub.
  "/compliance/adiance-rohs-statement.pdf": "/compliance-documents",
  "/top-5-company-thermal-camera-manufacturers": "/thermal-camera",
  "/oem-cctv-camera-manufacturer-india": "/cctv-camera-manufacturer-india",
  "/360-approach": "/about",
  // /contact-us and /partner are not routes — these 301s dead-ended on a 404
  // and dropped the link equity instead of passing it on.
  "/feedback": "/contact",
  "/partner-with-us": "/partners",
  "/2022/02/17": "/blog",
  "/smart-anpr-lpr-cctv-camera": "/anpr-camera",
  "/best-5-emerging-trends-in-ai-based-cctv-surveillance-technology": "/blog",
  "/edge-ai-based-ptz-anpr-bullet-camera-vm-72bptz5aive-2":
    "/4k-bullet-anpr-ptz-camera",
  "/smart-thermal-cctv-camera": "/thermal-camera",
  "/hello-world": "/blog",
  "/tag/wifi-camera-manufacturer": "/wifi-ptz-camera",
  "/wp-content/plugins/revslider/public/assets/js": "/",
  "/nvr-series": "/cloudxvr",
  "/indoor-cctv-": "/4g-dome-ptz-camera",
  "/video-surveillance-": "/innovation",
  "/top-5-company-thermal-camera-": "/thermal-camera",
  "/voipgateway.html": "/",
  "/2023/07/27": "/blog",
  "/panoramic": "/4g-dome-ptz-camera",
  "/video-surveillance-manufacturer-in-the-usa": "/about",
  "/adiance-": "/",
  "/edge-ai-based-face-recognition": "/4k-face-recognition-camera",
  "/wireless-ip-cctv-camera-manufacturer-supplier": "/wifi-ptz-camera",
  "/5g-edge-ai-camera-s-series-surveillance": "/4gcamera",
  "/adiance-leading-supplier-for-cctv-surveillance": "/about",
  "/dome-cctv-camera-manufacturer": "/4g-dome-ptz-camera",
  "/4g-dome-camera": "/4g-dome-ptz-camera",
  "/edge-ai-based-object-face-detection-cameras-2":
    "/edge-ai-based-object-n-face-detection-cameras",
  "/smart-edge-ai-cloud-cctv-camera": "/cloud-application",
  "/bullet-cctv-camera-manufacturer": "/4k-bullet-anpr-ptz-camera",
  "/adiances-next-generation-factory-building-a-smart-surveillance-camera-family":
    "/about",
  "/adiance-cloud-based-thermal-camera": "/thermal-camera",
  "/smart-anpr-lpr": "/anpr-camera",
  "/smart-wifi-cloud-cctv-camera": "/wifi-ptz-camera",
  "/blog/complete-guide-ndaa-compliant-surveillance-cameras":
    "/blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras",
  "/scalable-and-cloud-ready-xvr": "/cloudxvr",
  "/adianance-4g-mini-bullet-camera": "/4g-mini-bullet-camera",
  "/adiance-4g-mini-bullet-camera": "/4g-mini-bullet-camera",
  "/europe": "/oem-camera-manufacturer-europe",
  "/oem": "/oem-services",
  "/Trafic-Management": "/traffic-management",
  // No trailing slash: `trailingSlash: false` + the middleware strip normalise
  // the path before redirects match, so the slashed key never fired and the URL
  // 404'd instead of redirecting.
  "/unlocking-innovation-in-camera-manufacturing": "/innovation",
  "/cctv-manufacturer-ahmedabad": "/about",
  "/how-is-ai-technology-making-video-surveillance-systems-smarter": "/blog",
  "/white-label-home-security-camera": "/white-label-cctv-camera-manufacturer",
  // Still live and indexable in production (200) although no app/seo route
  // exists in this repo, so it duplicates /white-label-cctv-camera-manufacturer
  // on a money keyword. 301 rather than letting it 404 on the next deploy, so
  // its accumulated ranking signals consolidate onto the canonical page.
  "/seo/white-label-cctv-camera-manufacturer":
    "/white-label-cctv-camera-manufacturer",
  "/japan-cctv-camera-manufacturer": "/cctv-camera-manufacturer-japan",
  "/h265-4g-dome-ptz-camera": "/4g-dome-ptz-camera",
  "/industries/smart-cities": "/smart-cities",
  "/products/arcis-bridge": "/",
  "/industries/education": "/education",
  "/oem-cctv-manufacturer-india": "/oem-cctv-camera-manufacturer-usa",
  "/industries/public-transport": "/public-transport",
  "/products/edge-ai-camera": "/edgeaicamera",
  "/products/robotic-arm": "/robotics",
  "/industries/bank-finance": "/bank-finance",
  "/products/eco-series": "/eco-series",
  "/products/cloud-vms": "/cloud-application",
  "/products/nvr": "/cloudxvr",
  "/white-label-vs-branded-cctv-cameras": "/blog",
  "/supply-chain-diversification-cctv-manufacturing": "/blog",
  "/how-to-choose-oem-cctv-manufacturer": "/blog",
  "/ndaa-compliant-cctv-cameras-buyers-guide": "/blog",
  "/oem-cctv-camera-moq-explained": "/blog",
  "/industries/public-safety": "/public-safety",
  "/industries/retail": "/retail",
  "/top-5-things-to-know-before-starting-cctv-manufacturing": "/blog",
  "/blog/661921c42125c9f9e2d81608": "/blog",
  "/wifi-camera-manufacturer": "/wifi-ptz-camera",
  "/4g-camera": "/4gcamera",
  "/adianance-cloud-based-thermal-camera-f": "/adiance-thermal-camera-f",
  "/blog/679cbf82eec2800b46544898": "/blog",
  "/adiance-cloud-based-thermal-camera-f": "/adiance-thermal-camera-f",
  "/edge-ai-based-ptz-anpr-bullet-camera-vm-72bptz5aive-3":
    "/4k-bullet-anpr-ptz-camera",
  // Master Action Plan PRIORITY 2: "camera manufacturing services" ranks at
  // position ~3.1 for 148 impressions but 0 clicks — Google is showing this
  // dead legacy URL (no live route, no prior redirect) as the result, so the
  // click never lands anywhere. Send it to the live page that best matches
  // the query intent instead of dropping the link equity on a 404.
  "/security-camera-manufacturing": "/oem-services",
  "/ip-bullet-camera-and-dome-cctv-camera-manufacturer-supplier": "/oem-services",
  // Matches the fix already live in production (commit 913827f) — 14 dead
  // links across 13 published blog posts pointed at this old slug.
  "/s-series-ai-cctv-cameras": "/4gcamera",
  // Status-audit finding: this legacy blog post and the richer landing page
  // at the non-/blog/ path are the same article. src/seo/legacyBlogMeta.jsx
  // already pointed the blog copy's canonical at the landing page (a
  // correct, deliberate fix), but a canonical tag only *hints* — it doesn't
  // stop Google crawling and reporting both as duplicate/alternate pages.
  // A 301 removes the duplicate outright and still passes any link equity
  // the /blog/ URL had picked up.
  "/blog/qualcomm-soc-future-edge-ai-surveillance-cameras":
    "/qualcomm-soc-future-edge-ai-surveillance-cameras",
  // Status-audit P4: these 5 "-v2" pages are alternate-copy duplicates of
  // their base country page, already correctly self-canonicalising to the
  // base (src/seo/pageMetadata.js) but still live as separate crawlable
  // URLs. 301 them outright rather than leaving Google to rely on the
  // canonical hint alone.
  "/cctv-camera-manufacturer-australia-v2": "/cctv-camera-manufacturer-australia",
  "/cctv-camera-manufacturer-canada-v2": "/cctv-camera-manufacturer-canada",
  "/cctv-camera-manufacturer-germany-v2": "/cctv-camera-manufacturer-germany",
  "/cctv-camera-manufacturer-uk-v2": "/cctv-camera-manufacturer-uk",
  "/cctv-camera-manufacturer-usa-v2": "/cctv-camera-manufacturer-usa",

  // Final Audit Checklist (2026-09-07), row 108: GSC shows a live, indexed
  // URL with a literal backtick character in it (almost certainly a
  // malformed inbound link, e.g. someone linked to us using Markdown
  // backticks by mistake and the raw text leaked into an href). It 404s
  // with no redirect today. Route it to the real page instead of losing
  // whatever link equity it has.
  "/full-solution-oem`-camera-manufacturer": "/full-solution-oem-camera-manufacturer",
  "/full-solution-oem%60-camera-manufacturer": "/full-solution-oem-camera-manufacturer",

  // Final Audit Checklist, row 107: GSC's "excluded by noindex" report for
  // these 11 URLs is actually old renamed/retired page slugs now correctly
  // 404ing (Next's not-found page legitimately carries noindex — that part
  // is fine) — but several of these old URLs never got a 301 to the page
  // that replaced them, so the ranking/link-equity they'd built up is being
  // thrown away instead of passed on. Mapped each to its current equivalent.
  "/cctv-manufacturer-middle-east": "/oem-camera-manufacturer-middle-east",
  "/cctv-manufacturer-africa": "/oem-services",
  "/healthcare-surveillance-manufacturer": "/healthcare",
  "/partner": "/partners",
  "/it-cctv-camera-manufacturer": "/oem-services",
  "/edge-ai-based-object-face-detection-cameras": "/edge-ai-based-object-n-face-detection-cameras",
  "/edge-ai-based-face-recognition-camera": "/4k-face-recognition-camera",
  "/customized-cctv-surveillance-cameras": "/custom-cctv-camera-manufacturer",
  "/adiance-h-265-4g-dome-ptz-camera": "/4g-dome-ptz-camera",
  // NOTE: /smart-edge-ai-cloud-cctv-camera, /smart-anpr-lpr, /panoramic, and
  // /wireless-ip-cctv-camera-manufacturer-supplier (also flagged by this
  // audit) already had redirects further up this file from earlier work —
  // left as-is rather than duplicated here.

  // GSC "Not found (404)" — exact URL list pulled live from Search Console
  // (2026-09-10, 22 URLs total). Cross-checked the other 18 against this file
  // first: they already had redirects above from earlier sessions, just not
  // deployed yet (same root cause as everything else in this list — nothing
  // from this engagement is live). These 4 were the only genuine new gaps.
  "/download-catalog": "/downloads",
  // No single current page covers "Latin America" as a region (unlike Europe
  // and the Middle East, which have dedicated /oem-camera-manufacturer-*
  // pages) — the region is served by individual country pages instead
  // (Brazil, Mexico, Argentina, Chile, Colombia, Peru, Venezuela). Sending to
  // the page that indexes all of them rather than picking one country
  // arbitrarily.
  "/cctv-manufacturer-latin-america": "/global-presence",
  // Literal test content, never real — send to the blog hub rather than
  // leave it 404ing with no redirect at all.
  "/blog/testing": "/blog",
  // Retired blog post with no current equivalent slug (checked the full
  // current /blog listing — nothing matches this topic closely enough to
  // pick a specific replacement).
  "/blog/how-ai-surveillance-improves-workplace-safety-and-compliance": "/blog",

  // GSC "Soft 404" pull (2026-09-11, 44 URLs total). Cross-checked all 44
  // against src/RedirectManager.js — a legacy react-router redirect map that
  // is dead code (its only importer, src/App.js, imports plain
  // "react-router-dom", which isn't even in package.json — it hasn't shipped
  // since the Next.js migration). 34 of the 44 already had correct mappings
  // sitting in that dead file (mirrored into legacyRedirects above already,
  // e.g. /industries/*, /products/*, /oem-cctv-manufacturer-india, etc.) —
  // same root cause as everything else here: correct, just never deployed.
  // These 5 are legacy CMS ObjectId-style blog slugs (the same pattern as
  // /blog/661921c42125c9f9e2d81608 above) with no current equivalent post.
  "/blog/how-aipowered-cctv-cameras-reduce-theft-crime-a-complete-guide": "/blog",
  "/blog/661f6f822125c9f9e2d81d13": "/blog",
  "/blog/65fd2f53b1851c17f1b8f01e": "/blog",
  "/blog/ultimate-guide-to-choosing-the-right-oem-cctv-camera": "/blog",
  "/blog/the-future-of-ai-cctv-cameras-how-smart-surveillance-is-changing-security": "/blog",
};

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://*.doubleclick.net https://connect.facebook.net https://cdn.jsdelivr.net https://*.zoho.com https://*.zohopublic.com https://*.zohopublic.in https://*.zohostatic.com",
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net",
  "connect-src 'self' https://*.adiance.com https://backend.adiance.com https://arcisai.io https://*.arcisai.io https://*.arcisai.io:5000 https://www.google-analytics.com https://*.googletagmanager.com https://www.google.com https://*.doubleclick.net https://*.facebook.com https://*.zoho.com https://*.zohopublic.com https://*.zohopublic.in",
  "media-src 'self' https:",
  "frame-src 'self' https://www.googletagmanager.com https://*.zoho.com https://*.youtube.com https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.zoho.com",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
];

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value: cspDirectives.join("; "),
  },
];

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  // DEV-11 (Core Web Vitals): reduce unused JS. Tree-shake barrel imports from
  // the heavy UI libraries so a page only ships the components it actually uses.
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "@mui/lab",
      "@mui/styles",
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "react-icons",
      "react-bootstrap",
      "framer-motion",
    ],
  },
  // Strip console.* (except errors) from production bundles.
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/image-sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/.well-known/security.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
  async redirects() {
    const dynamic = [
      { source: "/anrpcamera", destination: "/anpr-camera", statusCode: 301 },
      {
        source: "/s-series",
        destination: "/4gcamera",
        statusCode: 301,
      },
      // T4: legacy Joomla content URLs (/index.php?option=com_content&...) that
      // were never redirected after the migration. 1:1 targets are unknown, so
      // send them to the homepage hub. 301.
      {
        source: "/index.php",
        has: [{ type: "query", key: "option", value: "com_content" }],
        destination: "/",
        statusCode: 301,
      },
    ];
    const legacy = Object.entries(legacyRedirects).map(
      ([source, destination]) => ({
        source,
        destination,
        // Emit an explicit 301 (Next's `permanent: true` sends 308; GSC/audits
        // expect a classic 301 for these legacy content redirects).
        statusCode: 301,
      }),
    );
    return [...dynamic, ...legacy];
  },
  async rewrites() {
    const backend =
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";
    return {
      fallback: [
        { source: "/api/:path*", destination: `${backend}/api/:path*` },
        { source: "/images/:path*", destination: `${backend}/images/:path*` },
        { source: "/upload/:path*", destination: `${backend}/upload/:path*` },
      ],
    };
  },
};

module.exports = nextConfig;
