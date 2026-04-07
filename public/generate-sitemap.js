const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream, statSync } = require("fs");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

// Configuration
const HOSTNAME = "https://www.adiance.com/";
const API_URL = process.env.API_URL || "https://backend.adiance.com:443";

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
      '/edgeaicamera': 'src/components/EdgeAICamera.jsx',
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
      '/autoplay': 'src/components/AutoplayCarousel.jsx',
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

  // Main navigation pages - weekly updates
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/innovation", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.8 },
  { url: "/partner-with-us", changefreq: "weekly", priority: 0.8 },

  // Product series pages
  { url: "/r-series", changefreq: "weekly", priority: 0.8 },
  { url: "/h-series", changefreq: "weekly", priority: 0.8 },
  { url: "/thermal-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/anpr-camera", changefreq: "weekly", priority: 0.8 },
  { url: "/4kcamera", changefreq: "weekly", priority: 0.8 },
  { url: "/edgeaicamera", changefreq: "weekly", priority: 0.8 },
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
  {
    url: "/5g-edge-ai-camera-s-series-surveillance",
    changefreq: "weekly",
    priority: 0.8,
  },

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
  { url: "/autoplay", changefreq: "monthly", priority: 0.4 },
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
    const possibleEndpoints = [
      `${API_URL}/api/blogs/getAllBlogs?page=1&limit=1000`, // Correct endpoint
      `${API_URL}/api/blogs?page=1&limit=1000&status=published`, // New vmukti endpoint
      `${API_URL}/api/blogs?page=1&limit=1000`, // New endpoint without status filter
      `${API_URL}/getAllBlogs?page=1&limit=1000`, // Legacy endpoint
      `${API_URL}/blogs?page=1&limit=1000`, // Direct blogs endpoint
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

      console.log(`Successfully fetched ${blogUrls.length} blog URLs`);
      return blogUrls;
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
