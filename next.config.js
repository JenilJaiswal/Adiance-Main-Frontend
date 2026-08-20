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
