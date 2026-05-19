/* One-shot generator: reads route table below and writes app/<path>/page.jsx wrappers */
const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");

const routes = [
  { p: "/", c: "Home", i: "@/Pages/Home/Home" },
  { p: "/about", c: "AboutUs", i: "@/components/AboutUs" },
  { p: "/innovation", c: "Innovation", i: "@/components/Innovation" },
  { p: "/contact", c: "ContactUs", i: "@/components/ContactUs" },
  { p: "/event", c: "Event", i: "@/Pages/Events/Event" },
  { p: "/event/ifsec-india-2025", c: "IfsecIndia2025", i: "@/Pages/Events/IfsecIndia2025" },
  { p: "/thank-you", c: "ThankYouPage", i: "@/components/ThankYouPage" },
  { p: "/blog-thank-you", c: "ThankYouPage", i: "@/components/ThankYouPage" },
  { p: "/partner-thank-you", c: "ThankYouPage", i: "@/components/ThankYouPage" },

  { p: "/adiance-thermal-camera-f", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72F210AC)"' },
  { p: "/adiance-thermal-camera-n", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72N210AC)"' },
  { p: "/adiance-thermal-camera-l", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72L210AC)"' },
  { p: "/4k-bullet-anpr-ptz-camera", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="Edge AI Based PTZ ANPR Bullet Camera" imgIdx={0}' },
  { p: "/4k-face-recognition-camera", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="Edge AI Based Face Recognition Dome Camera" imgIdx={0}' },
  { p: "/edge-ai-based-object-n-face-detection-cameras", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="Edge AI Based Object & Face Detection Cameras" imgIdx={0}' },
  { p: "/4g-dome-ptz-camera", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="AMBICAM 4G Dome PTZ Camera (VM-72BPTZ410AC)"' },
  { p: "/4g-mini-bullet-camera", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)"' },
  { p: "/cloudxvr", c: "ProductShow", i: "@/components/ProductShow", props: 'productTitle="ADIANCE 8-16 Channel XVR – VM-72XVR816"' },
  { p: "/edge-ai-cctv-cameras", c: "SSeries", i: "@/Pages/SSeries/SSeries" },

  { p: "/eco-series", c: "EcoSeries", i: "@/Pages/EcoSeries/EcoSeries" },
  { p: "/bis-er-certification", c: "BISERCertification", i: "@/Pages/BISERCertification/BISERCertification" },
  { p: "/r-series", c: "RSeries", i: "@/components/RSeries", props: 'title="R Series"' },
  { p: "/h-series", c: "RSeries", i: "@/components/RSeries", props: 'title="H Series"' },
  { p: "/oem-services", c: "OEM", i: "@/Pages/Services/OEM/OEM" },
  { p: "/odm-services", c: "ODM", i: "@/Pages/Services/ODM/ODM" },
  { p: "/jdm-services", c: "JDM", i: "@/Pages/Services/JDM/JDM" },
  { p: "/pcb-assembly-service", c: "PCB", i: "@/Pages/Services/PCB/PCB" },

  { p: "/ndaa-compliance", c: "NdaaCompliance", i: "@/Pages/NdaaCompliance/NdaaCompliance" },
  { p: "/us", c: "UsLanding", i: "@/Pages/UsLanding/UsLanding" },

  { p: "/thermal-camera", c: "ThermalCamera", i: "@/components/ThermalCamera" },
  { p: "/anpr-camera", c: "ANPRCamera", i: "@/components/ANPRCamera" },
  { p: "/4kcamera", c: "_4KCamera", i: "@/components/_4KCamera" },
  { p: "/edgeaicamera", c: "EdgeAICamera", i: "@/Pages/EdgeAICamera/EdgeAICamera" },
  { p: "/4gcamera", c: "_4GCamera", i: "@/components/_4GCamera" },

  { p: "/downloads", c: "Downloads", i: "@/components/Downloads" },
  { p: "/datasheet", c: "Datasheet", i: "@/components/Datasheet" },
  { p: "/firmware", c: "Firmware", i: "@/components/Firmware" },
  { p: "/tools", c: "Tools", i: "@/components/Tools" },
  { p: "/terms-of-service", c: "TermsOfService", i: "@/components/TermsOfService" },
  { p: "/privacy-policy", c: "PrivacyPolicy", i: "@/components/PrivacyPolicy" },
  { p: "/warranty-service", c: "WarrantyService", i: "@/components/WarrantyService" },
  { p: "/warranty-policy", c: "WarrantyPolicy", i: "@/components/WarrantyPolicy" },
  { p: "/blog", c: "Blogs", i: "@/components/Blogs" },
  { p: "/blog/[urlTitle]", c: "Blog1", i: "@/components/Blog1" },

  { p: "/admin", c: "LoginDash", i: "@/AdianceAdmin/pages/LoginDash" },
  { p: "/admin/reset", c: "Reset", i: "@/AdianceAdmin/pages/ForgotPassword/Reset" },
  { p: "/admin/dashboard", c: "Dashboard", i: "@/AdianceAdmin/pages/Dashboard/Dashboard" },
  { p: "/admin/verify", c: "OtpVerification", i: "@/AdianceAdmin/pages/OTP/OtpVerification" },

  { p: "/robotics", c: "Robotics", i: "@/components/Robotics" },

  { p: "/public-safety", c: "PublicSafety", i: "@/components/PublicSafety" },
  { p: "/traffic-management", c: "Trafic", i: "@/components/Trafic" },
  { p: "/crowd-control", c: "CrowdControl", i: "@/components/CrowdControl" },
  { p: "/smart-cities", c: "SmartCities", i: "@/components/SmartCities" },
  { p: "/remote-security", c: "Remote", i: "@/components/Remote" },
  { p: "/education", c: "Education", i: "@/components/Education" },
  { p: "/healthcare", c: "Hospital", i: "@/components/Hospital" },
  { p: "/public-transport", c: "PublicTransport", i: "@/components/PublicTransport" },
  { p: "/retail", c: "Retail", i: "@/components/Retail" },
  { p: "/smart-safe-city", c: "SmartCity", i: "@/components/SmartCity" },
  { p: "/bank-finance", c: "BankFinance", i: "@/components/BankFinance" },
  { p: "/high-traffic", c: "HighTraffic", i: "@/components/HighTraffic" },

  { p: "/autoplay", c: "AutoplayCarousel", i: "@/components/AutoplayCarousel" },
  { p: "/compliance", c: "Compliance", i: "@/components/Compliance" },
  { p: "/cyber-security", c: "CyberSecurity", i: "@/components/CyberSecurity" },
  { p: "/manufacturing", c: "Manufacturing", i: "@/components/Manufacturing" },
  { p: "/product-engineering", c: "ProdEngineering", i: "@/components/ProdEngineering" },
  { p: "/cloud-application", c: "CloudApplication", i: "@/components/CloudApplication" },

  { p: "/partners", c: "PartnersPage", i: "@/components/PartnersPage" },
  { p: "/thanks", c: "ThankYouPage", i: "@/components/ThankYouPage" },
  { p: "/wifi-ptz-camera", c: "WifiCameraPdf", i: "@/components/WifiCameraPdf" },
];

const geoSlugs = [
  "cctv-camera-manufacturer-usa","cctv-camera-manufacturer-india","cctv-camera-manufacturer-uk","cctv-camera-manufacturer-germany","cctv-camera-manufacturer-australia","cctv-camera-manufacturer-uae","cctv-camera-manufacturer-saudi-arabia","cctv-camera-manufacturer-japan","cctv-camera-manufacturer-canada","cctv-camera-manufacturer-france","cctv-camera-manufacturer-italy","cctv-camera-manufacturer-spain","cctv-camera-manufacturer-netherlands","cctv-camera-manufacturer-sweden","cctv-camera-manufacturer-poland","cctv-camera-manufacturer-czech-republic","cctv-camera-manufacturer-ireland","cctv-camera-manufacturer-singapore","cctv-camera-manufacturer-malaysia","cctv-camera-manufacturer-thailand","cctv-camera-manufacturer-indonesia","cctv-camera-manufacturer-philippines","cctv-camera-manufacturer-vietnam","cctv-camera-manufacturer-south-korea","cctv-camera-manufacturer-taiwan","cctv-camera-manufacturer-new-zealand","cctv-camera-manufacturer-brazil","cctv-camera-manufacturer-argentina","cctv-camera-manufacturer-colombia","cctv-camera-manufacturer-chile","cctv-camera-manufacturer-peru","cctv-camera-manufacturer-venezuela","cctv-camera-manufacturer-mexico","cctv-camera-manufacturer-nigeria","cctv-camera-manufacturer-kenya","cctv-camera-manufacturer-south-africa","cctv-camera-manufacturer-egypt","cctv-camera-manufacturer-ghana","cctv-camera-manufacturer-morocco","cctv-camera-manufacturer-israel","cctv-camera-manufacturer-bahrain","cctv-camera-manufacturer-kuwait","cctv-camera-manufacturer-oman","cctv-camera-manufacturer-qatar","cctv-camera-manufacturer-turkey","cctv-camera-manufacturer-australia-v2","cctv-camera-manufacturer-canada-v2","cctv-camera-manufacturer-germany-v2","cctv-camera-manufacturer-uk-v2","cctv-camera-manufacturer-usa-v2",
];
geoSlugs.forEach((s) => routes.push({ p: "/" + s, c: "GeoPage", i: "@/Pages/SEOPages/GeoPage/GeoPage" }));

const seoLandingSlugs = [
  "anpr-camera-manufacturer","edge-ai-camera-manufacturer","complete-surveillance-solutions","non-chinese-soc-camera-manufacturer","non-chinese-cctv-camera-manufacturer","oem-white-label-platform","full-solution-oem-camera-manufacturer","oem-camera-manufacturer-europe","oem-camera-manufacturer-middle-east","private-label-security-camera-supplier","custom-cctv-camera-manufacturer","white-label-cctv-camera-manufacturer","ndaa-compliant-cctv-camera-manufacturer","gdpr-compliant-surveillance-manufacturer","stqc-compliant-cctv-cameras","global-presence","oem-cctv-camera-manufacturer-usa","qualcomm-edge-ai-camera-manufacturer","qualcomm-soc-future-edge-ai-surveillance-cameras","start-your-own-cctv-brand","cctv-oem-for-telecom-isp","alternative-to-chinese-cameras","smart-city-cctv-solutions","banking-finance-cctv-manufacturer","product-portfolio","smart-home-oem-camera-manufacturer","white-label-baby-monitor-manufacturer","white-label-pet-camera-manufacturer",
];
seoLandingSlugs.forEach((s) => routes.push({ p: "/" + s, c: "SEOLandingPage", i: "@/Pages/SEOPages/LandingPage/SEOLandingPage" }));

const seoBlogSlugs = [
  "how-to-choose-oem-cctv-manufacturer","how-to-choose-oem-cctv-manufacturer-checklist","white-label-vs-branded-cctv-cameras","ndaa-compliant-cctv-cameras-buyers-guide","oem-cctv-camera-moq-explained","supply-chain-diversification-cctv-manufacturing","geopolitics-of-guts-why-non-chinese-soc-is-new-baseline","comparing-qualcomm-ambarella-novatek-for-cctv","how-to-migrate-cctv-brand-from-chinese-soc","china-plus-one-strategy-cctv-manufacturing","supply-chain-diversification-2026","the-complete-guide-to-ndaa-compliant-surveillance-cameras","white-label-vs-private-label-cctv-cameras","why-surveillance-needs-built-in-vms-cloud","qualcomm-soc-future-edge-ai-surveillance-cameras",
];
seoBlogSlugs.forEach((s) => routes.push({ p: "/blog/" + s, c: "SEOBlogPage", i: "@/Pages/SEOPages/BlogPage/SEOBlogPage" }));

routes.push({ p: "/case-study/white-label-edge-ai-camera-japan", c: "SEOBlogPage", i: "@/Pages/SEOPages/BlogPage/SEOBlogPage", props: 'type="case-study"' });

function pathToDir(p) {
  if (p === "/") return APP_DIR;
  return path.join(APP_DIR, ...p.split("/").filter(Boolean));
}

function pageContent({ c, i, props }) {
  const propStr = props ? " " + props : "";
  return `"use client";

import ${c} from "${i}";

export default function Page() {
  return <${c}${propStr} />;
}
`;
}

let count = 0;
let skipped = 0;
for (const r of routes) {
  const dir = pathToDir(r.p);
  const file = path.join(dir, "page.jsx");
  if (fs.existsSync(file)) {
    skipped++;
    continue;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, pageContent(r));
  count++;
}

const notFoundPath = path.join(APP_DIR, "not-found.jsx");
if (!fs.existsSync(notFoundPath)) {
  fs.writeFileSync(
    notFoundPath,
    `"use client";

import NotFound from "@/components/NotFound";

export default function NotFoundPage() {
  return <NotFound />;
}
`,
  );
  count++;
}

console.log(`Wrote ${count} page files. Skipped ${skipped} existing.`);
