const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, statSync } = require("fs");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

// Configuration
const HOSTNAME = "https://www.adiance.com/";
const API_URL = process.env.API_URL || "https://backend.adiance.com:443";

// Blog slugs the CMS still publishes but that next.config.js 301-redirects
// elsewhere. Listing a redirecting URL in the sitemap wastes crawl budget and
// hides the real destination. Keep in sync with `legacyRedirects`.
const REDIRECTED_BLOG_URLS = new Set([
  "/blog/complete-guide-ndaa-compliant-surveillance-cameras", // -> /blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras
  "/blog/661921c42125c9f9e2d81608", // -> /blog
  "/blog/679cbf82eec2800b46544898", // -> /blog
]);

// Fallback blog URLs (can be updated manually if API is not available)
const FALLBACK_BLOG_URLS = [
  // Add your blog URLs here as fallback
  // Example: { url: "/blog/sample-blog", changefreq: "monthly", priority: 0.6 }
];

// Function to get last modification time of static page files
function getLastModTime(url) {
  try {
    // Map URLs to their corresponding component files
    const urlToFileMap = {
      '/': 'src/components/Home.jsx',
      '/about': 'src/components/AboutUs.jsx',
      '/innovation': 'src/components/Innovation.jsx',
      '/contact': 'src/components/ContactUs.jsx',
      '/partner-with-us': 'src/components/PartnerWithUsPage.jsx',
      '/r-series': 'src/components/RSeries.jsx',
      '/h-series': 'src/components/RSeries.jsx',
      '/thermal-camera': 'src/components/ThermalCamera.jsx',
      '/anpr-camera': 'src/components/ANPRCamera.jsx',
      '/4kcamera': 'src/components/_4KCamera.jsx',
      '/4gcamera': 'src/components/_4GCamera.jsx',
      '/adiance-thermal-camera-f': 'src/components/ProductShow.jsx',
      '/adiance-thermal-camera-n': 'src/components/ProductShow.jsx',
      '/adiance-thermal-camera-l': 'src/components/ProductShow.jsx',
      '/4k-bullet-anpr-ptz-camera': 'src/components/ProductShow.jsx',
      '/4k-face-recognition-camera': 'src/components/ProductShow.jsx',
      '/edge-ai-based-object-n-face-detection-cameras': 'src/components/ProductShow.jsx',
      '/4g-dome-ptz-camera': 'src/components/ProductShow.jsx',
      '/4g-mini-bullet-camera': 'src/components/ProductShow.jsx',
      '/cloudxvr': 'src/components/ProductShow.jsx',
      '/5g-edge-ai-camera-s-series-surveillance': 'src/components/SSeries.jsx',
      '/public-safety': 'src/components/PublicSafety.jsx',
      '/traffic-management': 'src/components/Trafic.jsx',
      '/crowd-control': 'src/components/CrowdControl.jsx',
      '/smart-cities': 'src/components/SmartCities.jsx',
      '/remote-security': 'src/components/Remote.jsx',
      '/education': 'src/components/Education.jsx',
      '/healthcare': 'src/components/Hospital.jsx',
      '/public-transport': 'src/components/PublicTransport.jsx',
      '/retail': 'src/components/Retail.jsx',
      '/smart-safe-city': 'src/components/SmartCity.jsx',
      '/bank-finance': 'src/components/BankFinance.jsx',
      '/high-traffic': 'src/components/HighTraffic.jsx',
      '/downloads': 'src/components/Downloads.jsx',
      '/datasheet': 'src/components/Datasheet.jsx',
      '/firmware': 'src/components/Firmware.jsx',
      '/tools': 'src/components/Tools.jsx',
      '/warranty-service': 'src/components/WarrantyService.jsx',
      '/warranty-policy': 'src/components/WarrantyPolicy.jsx',
      // '/sustainability': 'src/components/Sustainability.jsx',
      // '/360-approach': 'src/components/_360Approach.jsx',
      // '/future-and-growth': 'src/components/FutureGrowth.jsx',
      '/compliance': 'src/components/Compliance.jsx',
      '/cyber-security': 'src/components/CyberSecurity.jsx',
      '/manufacturing': 'src/components/Manufacturing.jsx',
      '/product-engineering': 'src/components/ProdEngineering.jsx',
      '/cloud-application': 'src/components/CloudApplication.jsx',
      '/partners': 'src/components/PartnersPage.jsx',
      '/terms-of-service': 'src/components/TermsOfService.jsx',
      '/privacy-policy': 'src/components/PrivacyPolicy.jsx',
      '/blog': 'src/components/Blogs.jsx',
      // '/thank-you': 'src/components/ThankYouPage.jsx',
      // '/thanks': 'src/components/ThankYouPage.jsx',
      '/wifi-ptz-camera': 'src/components/WifiCameraPdf.jsx',
      '/robotics': 'src/components/Robotics.jsx',
      // '/autoplay': 'src/components/AutoplayCarousel.jsx',
      '/event': 'src/components/Event.jsx',
      '/event/ifsec-india-2025': 'src/components/IfsecIndia2025.jsx',
    };

    const filePath = urlToFileMap[url];
    if (!filePath) {
      // If no specific file mapping, use the main App.js or routes file as fallback
      const fallbackFiles = [
        'src/App.js',
        'src/components/routes.jsx',
        'package.json'
      ];

      for (const fallbackFile of fallbackFiles) {
        try {
          const stats = statSync(path.join(__dirname, '..', fallbackFile));
          return stats.mtime.toISOString();
        } catch (err) {
          continue;
        }
      }
      return new Date().toISOString(); // Current date as fallback
    }

    // Get the file path relative to the project root
    const fullPath = path.join(__dirname, '..', filePath);
    const stats = statSync(fullPath);
    return stats.mtime.toISOString();
  } catch (error) {
    console.log(`Could not get lastmod for ${url}: ${error.message}`);
    return new Date().toISOString(); // Current date as fallback
  }
}

// Static pages with different priorities and change frequencies
const staticPages = [
  // Homepage - highest priority
  { url: "/", changefreq: "daily", priority: 1.0 },
  // ===== SSR LANDING PAGES (added 2026-04-18 by Dev Agent Session 2) =====
  // These pages are ranking on Google page 1 and MUST be in the sitemap.
  { url: "/ndaa-compliant-cctv-camera-manufacturer", changefreq: "weekly", priority: 0.95 },
  { url: "/white-label-cctv-camera-manufacturer", changefreq: "weekly", priority: 0.95 },
  { url: "/oem-cctv-camera-manufacturer-usa", changefreq: "weekly", priority: 0.95 },
  { url: "/non-chinese-cctv-camera-manufacturer", changefreq: "weekly", priority: 0.95 },
  { url: "/private-label-security-camera-supplier", changefreq: "weekly", priority: 0.95 },
  { url: "/non-chinese-soc-camera-manufacturer", changefreq: "monthly", priority: 0.85 },
  { url: "/full-solution-oem-camera-manufacturer", changefreq: "monthly", priority: 0.85 },
  { url: "/oem-camera-manufacturer-middle-east", changefreq: "monthly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-australia", changefreq: "monthly", priority: 0.8 },
  { url: "/cctv-camera-manufacturer-india", changefreq: "monthly", priority: 0.8 },



  // Main navigation pages - weekly updates
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/innovation", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.8 },

  // Product series pages
  { url: "/r-series", changefreq: "weekly", priority: 0.8 },
  { url: "/h-series", changefreq: "weekly", priority: 0.8 },
  { url: "/thermal-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/anpr-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/4kcamera", changefreq: "weekly", priority: 0.8 },
  { url: "/4gcamera", changefreq: "weekly", priority: 0.8 },

  // Individual product pages
  { url: "/adiance-thermal-camera-f", changefreq: "weekly", priority: 0.8 },
  { url: "/adiance-thermal-camera-n", changefreq: "weekly", priority: 0.8 },
  { url: "/adiance-thermal-camera-l", changefreq: "weekly", priority: 0.8 },
  { url: "/4k-bullet-anpr-ptz-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/4k-face-recognition-camera", changefreq: "weekly", priority: 0.8 },
  {
    url: "/edge-ai-based-object-n-face-detection-cameras",
    changefreq: "weekly",
    priority: 0.8,
  },
  { url: "/4g-dome-ptz-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/4g-mini-bullet-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/cloudxvr", changefreq: "weekly", priority: 0.8 },

  // Industry application pages
  { url: "/public-safety", changefreq: "weekly", priority: 0.8 },
  { url: "/traffic-management", changefreq: "weekly", priority: 0.8 },
  { url: "/crowd-control", changefreq: "weekly", priority: 0.8 },
  { url: "/smart-cities", changefreq: "weekly", priority: 0.8 },
  { url: "/remote-security", changefreq: "weekly", priority: 0.8 },
  { url: "/education", changefreq: "weekly", priority: 0.8 },
  { url: "/healthcare", changefreq: "weekly", priority: 0.8 },
  { url: "/public-transport", changefreq: "weekly", priority: 0.8 },
  { url: "/retail", changefreq: "weekly", priority: 0.8 },
  { url: "/smart-safe-city", changefreq: "weekly", priority: 0.8 },
  { url: "/bank-finance", changefreq: "weekly", priority: 0.8 },
  { url: "/high-traffic", changefreq: "weekly", priority: 0.8 },

  // Support and utility pages
  { url: "/downloads", changefreq: "weekly", priority: 0.8 },
  { url: "/datasheet", changefreq: "weekly", priority: 0.8 },
  { url: "/firmware", changefreq: "weekly", priority: 0.8 },
  { url: "/tools", changefreq: "weekly", priority: 0.8 },
  { url: "/warranty-service", changefreq: "weekly", priority: 0.8 },
  { url: "/warranty-policy", changefreq: "weekly", priority: 0.8 },

  // Company information pages
  // { url: "/sustainability", changefreq: "weekly", priority: 0.8 },
  // { url: "/360-approach", changefreq: "weekly", priority: 0.8 },
  // { url: "/future-and-growth", changefreq: "weekly", priority: 0.8 },
  { url: "/compliance", changefreq: "weekly", priority: 0.8 },
  { url: "/cyber-security", changefreq: "weekly", priority: 0.8 },
  { url: "/manufacturing", changefreq: "weekly", priority: 0.8 },
  { url: "/product-engineering", changefreq: "weekly", priority: 0.8 },
  { url: "/cloud-application", changefreq: "weekly", priority: 0.8 },
  { url: "/partners", changefreq: "weekly", priority: 0.8 },

  // Legal pages
  { url: "/terms-of-service", changefreq: "monthly", priority: 0.5 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.5 },

  // Blog listing page
  { url: "/blog", changefreq: "weekly", priority: 0.8 },

  // Thank you pages
  // { url: "/thank-you", changefreq: "monthly", priority: 0.3 },
  // { url: "/thanks", changefreq: "monthly", priority: 0.3 },

  // PDF pages
  { url: "/wifi-ptz-camera", changefreq: "monthly", priority: 0.6 },

  // Event pages
  { url: "/event", changefreq: "monthly", priority: 0.6 },
  { url: "/event/ifsec-india-2025", changefreq: "monthly", priority: 0.6 },

  // Miscellaneous
  { url: "/robotics", changefreq: "weekly", priority: 0.8 },
  // /autoplay is Disallow'd in robots.txt — a blocked URL must not be
  // advertised as indexable in the sitemap.
  // { url: "/autoplay", changefreq: "monthly", priority: 0.4 },
  // === GEO Country Pages (Added 2026-04-19) ===
  { url: "/cctv-camera-manufacturer-uae", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-saudi-arabia", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-usa", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-uk", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-canada", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-germany", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-france", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-japan", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-south-korea", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-singapore", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-brazil", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-israel", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-netherlands", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-italy", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-spain", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-mexico", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-south-africa", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-turkey", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-qatar", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-kuwait", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-oman", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-bahrain", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-sweden", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-poland", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-malaysia", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-thailand", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-vietnam", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-indonesia", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-philippines", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-colombia", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-chile", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-nigeria", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-kenya", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-egypt", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-taiwan", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-morocco", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-ghana", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-czech-republic", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-new-zealand", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-ireland", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-argentina", changefreq: "weekly", priority: 0.85 },
  // === Alternative-To Pages ===
  { url: "/alternative-to-chinese-cameras", changefreq: "weekly", priority: 0.9 },
  // === Use-Case Landing Pages ===
  { url: "/smart-city-cctv-solutions", changefreq: "weekly", priority: 0.85 },
  { url: "/banking-finance-cctv-manufacturer", changefreq: "weekly", priority: 0.85 },
  // === Smart Home OEM Pages ===
  { url: "/smart-home-oem-camera-manufacturer", changefreq: "weekly", priority: 0.85 },
  { url: "/white-label-baby-monitor-manufacturer", changefreq: "weekly", priority: 0.85 },
  { url: "/white-label-pet-camera-manufacturer", changefreq: "weekly", priority: 0.85 },
  // === Technology Pages ===
  { url: "/anpr-camera-manufacturer", changefreq: "weekly", priority: 0.85 },
  { url: "/edge-ai-camera-manufacturer", changefreq: "weekly", priority: 0.85 },
  // === Compliance Pages ===
  { url: "/gdpr-compliant-surveillance-manufacturer", changefreq: "weekly", priority: 0.85 },
  // === Other Key Pages ===
  { url: "/complete-surveillance-solutions", changefreq: "weekly", priority: 0.85 },
  { url: "/product-portfolio", changefreq: "weekly", priority: 0.85 },
  // === Reconciled with production sitemap (added 2026-07-30) ===
  { url: "/alternative-to-hikvision", changefreq: "weekly", priority: 0.9 },
  { url: "/alternative-to-dahua", changefreq: "weekly", priority: 0.9 },
  { url: "/compliance-documents", changefreq: "monthly", priority: 0.7 },
  { url: "/sample-request", changefreq: "monthly", priority: 0.6 },
  { url: "/tools/ndaa-compliance-checker", changefreq: "monthly", priority: 0.7 },
  { url: "/tools/chinese-camera-restrictions-map", changefreq: "monthly", priority: 0.7 },

  // === Live indexable routes that were missing from the sitemap entirely ===
  // Verified 200 on production. Deliberately NOT added: /edgeaicamera (removed
  // on purpose in 7ead5f0) and /blog/qualcomm-soc-future-edge-ai-surveillance-
  // cameras (canonicalised to the landing page of the same name).
  { url: "/oem-services", changefreq: "weekly", priority: 0.8 },
  { url: "/odm-services", changefreq: "weekly", priority: 0.8 },
  { url: "/jdm-services", changefreq: "weekly", priority: 0.8 },
  { url: "/pcb-assembly-service", changefreq: "weekly", priority: 0.8 },
  { url: "/ndaa-compliance", changefreq: "weekly", priority: 0.8 },
  { url: "/bis-er-certification", changefreq: "weekly", priority: 0.8 },
  { url: "/stqc-compliant-cctv-cameras", changefreq: "weekly", priority: 0.8 },
  { url: "/custom-cctv-camera-manufacturer", changefreq: "weekly", priority: 0.8 },
  { url: "/start-your-own-cctv-brand", changefreq: "weekly", priority: 0.8 },
  { url: "/oem-white-label-platform", changefreq: "weekly", priority: 0.8 },
  { url: "/oem-camera-manufacturer-europe", changefreq: "weekly", priority: 0.8 },
  { url: "/cctv-oem-for-telecom-isp", changefreq: "weekly", priority: 0.8 },
  { url: "/qualcomm-edge-ai-camera-manufacturer", changefreq: "weekly", priority: 0.8 },
  { url: "/qualcomm-soc-future-edge-ai-surveillance-cameras", changefreq: "weekly", priority: 0.8 },
  { url: "/edge-ai-cctv-cameras", changefreq: "weekly", priority: 0.8 },
  { url: "/eco-series", changefreq: "weekly", priority: 0.8 },
  { url: "/global-presence", changefreq: "weekly", priority: 0.8 },
  { url: "/us", changefreq: "weekly", priority: 0.8 },
  { url: "/news", changefreq: "weekly", priority: 0.8 },
  { url: "/cctv-camera-manufacturer-peru", changefreq: "weekly", priority: 0.85 },
  { url: "/cctv-camera-manufacturer-venezuela", changefreq: "weekly", priority: 0.85 },
  { url: "/case-study/white-label-edge-ai-camera-japan", changefreq: "monthly", priority: 0.7 },
  // Static (non-CMS) blog posts — these live in app/blog/<slug>/ and are never
  // returned by the CMS fetch below, so they have to be listed explicitly.
  { url: "/blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/bis-er-01-certified-cctv-camera-companies-india", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/china-plus-one-strategy-cctv-manufacturing", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/comparing-qualcomm-ambarella-novatek-for-cctv", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/geopolitics-of-guts-why-non-chinese-soc-is-new-baseline", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-choose-oem-cctv-manufacturer", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-choose-oem-cctv-manufacturer-checklist", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-migrate-cctv-brand-from-chinese-soc", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/ndaa-compliant-cctv-cameras-buyers-guide", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/oem-cctv-camera-moq-explained", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/supply-chain-diversification-2026", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/supply-chain-diversification-cctv-manufacturing", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/white-label-vs-branded-cctv-cameras", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/white-label-vs-private-label-cctv-cameras", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/why-surveillance-needs-built-in-vms-cloud", changefreq: "monthly", priority: 0.6 },
];

// Function to fetch blog URLs from API
async function fetchBlogUrls() {
  try {
    console.log("Fetching blog URLs from API...");
    console.log(`API URL: ${API_URL}`);

    // Disable SSL verification for this request
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    // Configure axios to handle SSL issues
    const axiosConfig = {
      timeout: 15000,
      headers: {
        "User-Agent": "Sitemap-Generator/1.0",
        Accept: "application/json",
      },
      // Disable SSL verification
      httpsAgent: new (require("https").Agent)({
        rejectUnauthorized: false,
      }),
    };

    // Try multiple possible API endpoints
    // Use ONLY the published endpoint so drafts/unpublished posts can never
    // enter the sitemap. Do not fall back to getAllBlogs (no status filter).
    const possibleEndpoints = [
      `${API_URL}/api/blogs?page=1&limit=1000&status=published`,
    ];

    let response;
    let lastError;

    for (const endpoint of possibleEndpoints) {
      try {
        console.log(`Trying endpoint: ${endpoint}`);
        response = await axios.get(endpoint, axiosConfig);
        console.log(`Success with endpoint: ${endpoint}`);
        break;
      } catch (error) {
        console.log(`Failed with endpoint: ${endpoint} - ${error.message}`);
        lastError = error;
        continue;
      }
    }

    if (!response) {
      throw lastError;
    }

    console.log("API Response Status:", response.status);
    console.log("API Response Data:", JSON.stringify(response.data, null, 2));

    // Handle both old and new API response structures
    let blogs = [];

    if (
      response.data &&
      response.data.status === "success" &&
      Array.isArray(response.data.data)
    ) {
      blogs = response.data.data;
    } else if (response.data && Array.isArray(response.data.blogs)) {
      blogs = response.data.blogs;
    } else if (Array.isArray(response.data)) {
      blogs = response.data;
    }

    if (blogs.length > 0) {
      const blogUrls = blogs.map((blog) => ({
        url: `/blog/${blog.metadata?.urlWords || blog.urlTitle || blog._id}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: blog.updatedAt || blog.createdAt || blog.date,
      }));

      // De-duplicate by URL — the CMS can return the same slug more than once.
      // Also drop any entry that failed to resolve a slug (/blog/undefined),
      // and any slug that next.config.js 301-redirects elsewhere (a sitemap
      // must advertise the destination, never the redirecting URL).
      const seenUrls = new Set();
      const uniqueBlogUrls = blogUrls.filter((b) => {
        if (!b.url || b.url === "/blog/undefined" || seenUrls.has(b.url)) return false;
        if (REDIRECTED_BLOG_URLS.has(b.url)) return false;
        seenUrls.add(b.url);
        return true;
      });

      console.log(
        `Successfully fetched ${blogUrls.length} blog URLs (${uniqueBlogUrls.length} unique after de-duplication)`
      );
      return uniqueBlogUrls;
    }

    console.log("No blogs found or API response format unexpected");
    console.log("Response data structure:", response.data);
    return [];
  } catch (error) {
    console.error("Error fetching blog URLs:", error.message);
    console.error("Error details:", error.response?.data || error.stack);
    console.log("Using fallback blog URLs...");

    if (FALLBACK_BLOG_URLS.length > 0) {
      console.log(`Using ${FALLBACK_BLOG_URLS.length} fallback blog URLs`);
      return FALLBACK_BLOG_URLS;
    }

    console.log(
      "No fallback URLs available, continuing with static pages only..."
    );
    return [];
  }
}

// Function to create sitemap
async function createSitemap() {
  try {
    console.log("Starting sitemap generation...");

    // Fetch blog URLs
    const blogUrls = await fetchBlogUrls();
    console.log(`Found ${blogUrls.length} blog URLs`);

    // Safety guardrail: never write an incomplete sitemap.
    // If the CMS fetch failed or returned an implausibly low number of
    // published blogs, abort WITHOUT touching the existing sitemap files.
    const MIN_EXPECTED_BLOGS = 100;
    if (blogUrls.length < MIN_EXPECTED_BLOGS) {
      console.error(
        `ABORT: only ${blogUrls.length} blog URL(s) fetched (expected >= ${MIN_EXPECTED_BLOGS}). ` +
        `Refusing to overwrite the sitemap with an incomplete blog set. ` +
        `Check the CMS API before regenerating.`
      );
      process.exit(1);
    }

    // Add lastmod to static pages
    const staticPagesWithLastmod = staticPages.map(page => ({
      ...page,
      lastmod: getLastModTime(page.url)
    }));

    // Combine static pages and blog URLs
    const allUrls = [...staticPagesWithLastmod, ...blogUrls];

    // Define output paths
    const outputPaths = [
      path.join(__dirname, "sitemap.xml"),
      path.join(__dirname, "src", "sitemap.xml"),
      path.join(__dirname, "..", "sitemap.xml"),
    ];

    // Remove existing sitemap files
    outputPaths.forEach((outputPath) => {
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
        console.log(`Removed existing sitemap: ${outputPath}`);
      }
    });

    // Create sitemap for each output path
    for (const outputPath of outputPaths) {
      // Ensure directory exists
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Create sitemap stream
      const sitemap = new SitemapStream({ hostname: HOSTNAME });
      const writeStream = createWriteStream(outputPath);

      // Pipe sitemap to write stream
      sitemap.pipe(writeStream);

      // Add all URLs to sitemap
      allUrls.forEach((url) => {
        sitemap.write(url);
      });

      sitemap.end();

      // Wait for this sitemap to complete
      await streamToPromise(sitemap);

      console.log(`Created sitemap: ${outputPath}`);
    }

    console.log(`Sitemap created successfully with ${allUrls.length} URLs!`);
    console.log(`Sitemap files created at:`);
    outputPaths.forEach((outputPath) => {
      console.log(`  - ${outputPath}`);
    });

    // Log summary
    console.log("\nSitemap Summary:");
    console.log(`- Homepage: 1 URL (priority: 1.0, changefreq: daily)`);
    console.log(
      `- Static pages: ${staticPages.length - 1
      } URLs (priority: 0.8, changefreq: weekly)`
    );
    console.log(
      `- Blog pages: ${blogUrls.length} URLs (priority: 0.6, changefreq: monthly)`
    );
    console.log(`- Total URLs: ${allUrls.length}`);
  } catch (error) {
    console.error("Error creating sitemap:", error);
    process.exit(1);
  }
}

// Run the sitemap generation
createSitemap();
