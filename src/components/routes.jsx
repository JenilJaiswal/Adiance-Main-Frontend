import { lazy } from "react";

// SEO Pages
const GeoPage = lazy(() => import("../Pages/SEOPages/GeoPage/GeoPage"));
const SEOLandingPage = lazy(() => import("../Pages/SEOPages/LandingPage/SEOLandingPage"));
const SEOBlogPage = lazy(() => import("../Pages/SEOPages/BlogPage/SEOBlogPage"));

// Admin
const LoginDash = lazy(() => import("../AdianceAdmin/pages/LoginDash"));
const Reset = lazy(() => import("../AdianceAdmin/pages/ForgotPassword/Reset"));
const Dashboard = lazy(() => import("../AdianceAdmin/pages/Dashboard/Dashboard"));
const OtpVerification = lazy(() => import("../AdianceAdmin/pages/OTP/OtpVerification"));

// Pages
const AboutUs = lazy(() => import("./AboutUs"));
const ANPRCamera = lazy(() => import("./ANPRCamera"));
const AutoplayCarousel = lazy(() => import("./AutoplayCarousel"));
const BankFinance = lazy(() => import("./BankFinance"));
const Blog1 = lazy(() => import("./Blog1"));
const Blogs = lazy(() => import("./Blogs"));
const CloudApplication = lazy(() => import("./CloudApplication"));
const Compliance = lazy(() => import("./Compliance"));
const ContactUs = lazy(() => import("./ContactUs"));
const CrowdControl = lazy(() => import("./CrowdControl"));
const CyberSecurity = lazy(() => import("./CyberSecurity"));
const Datasheet = lazy(() => import("./Datasheet"));
const Downloads = lazy(() => import("./Downloads"));
const Education = lazy(() => import("./Education"));
const Event = lazy(() => import("../Pages/Events/Event"));
const HighTraffic = lazy(() => import("./HighTraffic"));
const Home = lazy(() => import("../Pages/Home/Home"));
const OEM = lazy(() => import("../Pages/Services/OEM/OEM"));
const ODM = lazy(() => import("../Pages/Services/ODM/ODM"));
const Hospital = lazy(() => import("./Hospital"));
const Innovation = lazy(() => import("./Innovation"));
const Manufacturing = lazy(() => import("./Manufacturing"));
const PartnersPage = lazy(() => import("./PartnersPage"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const ProdEngineering = lazy(() => import("./ProdEngineering"));
const ProductShow = lazy(() => import("./ProductShow"));
const PublicSafety = lazy(() => import("./PublicSafety"));
const PublicTransport = lazy(() => import("./PublicTransport"));
const Remote = lazy(() => import("./Remote"));
const Retail = lazy(() => import("./Retail"));
const Robotics = lazy(() => import("./Robotics"));
const RSeries = lazy(() => import("./RSeries"));
const SmartCities = lazy(() => import("./SmartCities"));
const SmartCity = lazy(() => import("./SmartCity"));
const SSeries = lazy(() => import("../Pages/SSeries/SSeries"));
const TermsOfService = lazy(() => import("./TermsOfService"));
const ThankYouPage = lazy(() => import("./ThankYouPage"));
const ThermalCamera = lazy(() => import("./ThermalCamera"));
const Trafic = lazy(() => import("./Trafic"));
const WarrantyPolicy = lazy(() => import("./WarrantyPolicy"));
const WarrantyService = lazy(() => import("./WarrantyService"));
const WifiCameraPdf = lazy(() => import("./WifiCameraPdf"));
const Firmware = lazy(() => import("./Firmware"));
const Tools = lazy(() => import("./Tools"));
const EdgeAICamera = lazy(() => import("../Pages/EdgeAICamera/EdgeAICamera"));
const NdaaCompliance = lazy(() => import("../Pages/NdaaCompliance/NdaaCompliance"));
const UsLanding = lazy(() => import("../Pages/UsLanding/UsLanding"));
const _4KCamera = lazy(() => import("./_4KCamera"));
const _4GCamera = lazy(() => import("./_4GCamera"));
const IfsecIndia2025 = lazy(() => import("../Pages/Events/IfsecIndia2025"));
const NotFound = lazy(() => import("./NotFound"));
const JDM = lazy(() => import("../Pages/Services/JDM/JDM"));
const PCB = lazy(() => import("../Pages/Services/PCB/PCB"));
const EcoSeries = lazy(() => import("../Pages/EcoSeries/EcoSeries"));
const BISERCertification = lazy(() => import("../Pages/BISERCertification/BISERCertification"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/innovation", element: <Innovation /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/event", element: <Event /> },
  { path: "/event/ifsec-india-2025", element: <IfsecIndia2025 /> },
  // { path: "/partner-with-us", element: <PartnerWithUsPage /> },
  { path: "/thank-you", element: <ThankYouPage /> },
  { path: "/blog-thank-you", element: <ThankYouPage /> },
  { path: "/partner-thank-you", element: <ThankYouPage /> },
  // { path: "/buyback-cctv-camera-offer", element: <BuyBackOfferPage /> },

  // Product routes
  {
    path: "/adiance-thermal-camera-f",
    element: (
      <ProductShow productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72F210AC)" />
    ),
  },
  {
    path: "/adiance-thermal-camera-n",
    element: (
      <ProductShow productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72N210AC)" />
    ),
  },
  {
    path: "/adiance-thermal-camera-l",
    element: (
      <ProductShow productTitle="ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72L210AC)" />
    ),
  },
  {
    path: "/4k-bullet-anpr-ptz-camera",
    element: (
      <ProductShow
        productTitle="Edge AI Based PTZ ANPR Bullet Camera"
        imgIdx={0}
      />
    ),
  },
  {
    path: "/4k-face-recognition-camera",
    element: (
      <ProductShow
        productTitle="Edge AI Based Face Recognition Dome Camera"
        imgIdx={0}
      />
    ),
  },
  {
    path: "/edge-ai-based-object-n-face-detection-cameras",
    element: (
      <ProductShow
        productTitle="Edge AI Based Object & Face Detection Cameras"
        imgIdx={0}
      />
    ),
  },
  {
    path: "/4g-dome-ptz-camera",
    element: (
      <ProductShow productTitle="AMBICAM 4G Dome PTZ Camera (VM-72BPTZ410AC)" />
    ),
  },
  {
    path: "/4g-mini-bullet-camera",
    element: (
      <ProductShow productTitle="AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)" />
    ),
  },
  {
    path: "/cloudxvr",
    element: (
      <ProductShow productTitle="ADIANCE 8-16 Channel XVR – VM-72XVR816" />
    ),
  },
  {
    path: "/edge-ai-cctv-cameras",
    element: (
      <SSeries />
    ),
  },

  // Series pages
  { path: "/eco-series", element: <EcoSeries /> },
  { path: "/BIS-ER-certification", element: <BISERCertification /> },
  { path: "/r-series", element: <RSeries title="R Series" /> },
  { path: "/h-series", element: <RSeries title="H Series" /> },
  {path: "/oem-services", element: <OEM />},
  {path: "/odm-services", element: <ODM />},
  {path: "/jdm-services", element: <JDM />},
  {path: "/pcb-assembly-service", element: <PCB />},

  // Compliance & Regions
  { path: "/ndaa-compliance", element: <NdaaCompliance /> },
  { path: "/us", element: <UsLanding /> },

  // Camera pages
  { path: "/thermal-camera", element: <ThermalCamera /> },
  // { path: "/anrpcamera", element: <ANPRCamera /> },
  { path: "/anpr-camera", element: <ANPRCamera /> },
  { path: "/4kcamera", element: <_4KCamera /> },
  { path: "/edgeaicamera", element: <EdgeAICamera /> },
  { path: "/4gcamera", element: <_4GCamera /> },

  // Other pages
  { path: "/downloads", element: <Downloads /> },
  { path: "/datasheet", element: <Datasheet /> },
  // { path: "/feedback", element: <Feedback /> },
  { path: "/firmware", element: <Firmware /> },
  { path: "/tools", element: <Tools /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/warranty-service", element: <WarrantyService /> },
  { path: "/warranty-policy", element: <WarrantyPolicy /> },
  { path: "/blog", element: <Blogs /> },
  { path: "/blog/:urlTitle", element: <Blog1 /> },
  // { path: "/careers", element: <CareerHome /> },
  // ----------ADMIN STARTS------------
  { path: "/admin", element: <LoginDash /> },
  { path: "/admin/reset", element: <Reset /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/verify", element: <OtpVerification /> },
  // ----------ADMIN ENDS------------
  { path: "/robotics", element: <Robotics /> },

  // Industry applications
  { path: "/public-safety", element: <PublicSafety /> },
  { path: "/traffic-management", element: <Trafic /> },
  { path: "/crowd-control", element: <CrowdControl /> },
  { path: "/smart-cities", element: <SmartCities /> },
  { path: "/remote-security", element: <Remote /> },
  { path: "/education", element: <Education /> },
  { path: "/healthcare", element: <Hospital /> },
  { path: "/public-transport", element: <PublicTransport /> },
  { path: "/retail", element: <Retail /> },
  { path: "/smart-safe-city", element: <SmartCity /> },
  { path: "/bank-finance", element: <BankFinance /> },
  { path: "/high-traffic", element: <HighTraffic /> },

  // Miscellaneous
  { path: "/autoplay", element: <AutoplayCarousel /> },
  // { path: "/sustainability", element: <Sustainability /> },
  // { path: "/360-approach", element: <_360Approach /> },
  // { path: "/future-and-growth", element: <FutureGrowth /> },
  { path: "/compliance", element: <Compliance /> },
  { path: "/cyber-security", element: <CyberSecurity /> },
  { path: "/manufacturing", element: <Manufacturing /> },
  { path: "/product-engineering", element: <ProdEngineering /> },
  { path: "/cloud-application", element: <CloudApplication /> },

  { path: "/partners", element: <PartnersPage /> },
  { path: "/thanks", element: <ThankYouPage /> },
  { path: "/wifi-ptz-camera", element: <WifiCameraPdf /> },

  // ---- GEO PAGES (45 countries) ----
  { path: "/cctv-camera-manufacturer-usa", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-india", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-uk", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-germany", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-australia", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-uae", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-saudi-arabia", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-japan", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-canada", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-france", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-italy", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-spain", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-netherlands", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-sweden", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-poland", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-czech-republic", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-ireland", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-singapore", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-malaysia", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-thailand", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-indonesia", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-philippines", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-vietnam", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-south-korea", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-taiwan", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-new-zealand", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-brazil", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-argentina", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-colombia", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-chile", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-peru", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-venezuela", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-mexico", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-nigeria", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-kenya", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-south-africa", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-egypt", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-ghana", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-morocco", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-israel", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-bahrain", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-kuwait", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-oman", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-qatar", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-turkey", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-australia-v2", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-canada-v2", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-germany-v2", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-uk-v2", element: <GeoPage /> },
  { path: "/cctv-camera-manufacturer-usa-v2", element: <GeoPage /> },

  // ---- SEO LANDING PAGES ----
  { path: "/anpr-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/edge-ai-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/complete-surveillance-solutions", element: <SEOLandingPage /> },
  { path: "/non-chinese-soc-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/non-chinese-cctv-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/oem-white-label-platform", element: <SEOLandingPage /> },
  { path: "/full-solution-oem-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/oem-camera-manufacturer-europe", element: <SEOLandingPage /> },
  { path: "/oem-camera-manufacturer-middle-east", element: <SEOLandingPage /> },
  { path: "/private-label-security-camera-supplier", element: <SEOLandingPage /> },
  { path: "/custom-cctv-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/white-label-cctv-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/ndaa-compliant-cctv-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/gdpr-compliant-surveillance-manufacturer", element: <SEOLandingPage /> },
  { path: "/stqc-compliant-cctv-cameras", element: <SEOLandingPage /> },
  { path: "/global-presence", element: <SEOLandingPage /> },
  { path: "/oem-cctv-camera-manufacturer-usa", element: <SEOLandingPage /> },
  { path: "/qualcomm-edge-ai-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/qualcomm-soc-future-edge-ai-surveillance-cameras", element: <SEOLandingPage /> },
  { path: "/start-your-own-cctv-brand", element: <SEOLandingPage /> },
  { path: "/cctv-oem-for-telecom-isp", element: <SEOLandingPage /> },
  { path: "/alternative-to-chinese-cameras", element: <SEOLandingPage /> },
  { path: "/smart-city-cctv-solutions", element: <SEOLandingPage /> },
  { path: "/banking-finance-cctv-manufacturer", element: <SEOLandingPage /> },
  { path: "/product-portfolio", element: <SEOLandingPage /> },
  { path: "/smart-home-oem-camera-manufacturer", element: <SEOLandingPage /> },
  { path: "/white-label-baby-monitor-manufacturer", element: <SEOLandingPage /> },
  { path: "/white-label-pet-camera-manufacturer", element: <SEOLandingPage /> },

  // ---- SEO BLOG PAGES ----
  { path: "/blog/how-to-choose-oem-cctv-manufacturer", element: <SEOBlogPage /> },
  { path: "/blog/how-to-choose-oem-cctv-manufacturer-checklist", element: <SEOBlogPage /> },
  { path: "/blog/white-label-vs-branded-cctv-cameras", element: <SEOBlogPage /> },
  { path: "/blog/ndaa-compliant-cctv-cameras-buyers-guide", element: <SEOBlogPage /> },
  { path: "/blog/oem-cctv-camera-moq-explained", element: <SEOBlogPage /> },
  { path: "/blog/supply-chain-diversification-cctv-manufacturing", element: <SEOBlogPage /> },
  { path: "/blog/geopolitics-of-guts-why-non-chinese-soc-is-new-baseline", element: <SEOBlogPage /> },
  { path: "/blog/comparing-qualcomm-ambarella-novatek-for-cctv", element: <SEOBlogPage /> },
  { path: "/blog/how-to-migrate-cctv-brand-from-chinese-soc", element: <SEOBlogPage /> },
  { path: "/blog/china-plus-one-strategy-cctv-manufacturing", element: <SEOBlogPage /> },
  { path: "/blog/supply-chain-diversification-2026", element: <SEOBlogPage /> },
  { path: "/blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras", element: <SEOBlogPage /> },
  { path: "/blog/white-label-vs-private-label-cctv-cameras", element: <SEOBlogPage /> },
  { path: "/blog/why-surveillance-needs-built-in-vms-cloud", element: <SEOBlogPage /> },
  { path: "/blog/qualcomm-soc-future-edge-ai-surveillance-cameras", element: <SEOBlogPage /> },

  // ---- CASE STUDY PAGES ----
  { path: "/case-study/white-label-edge-ai-camera-japan", element: <SEOBlogPage type="case-study" /> },

  // Catch-all route
  { path: "*", element: <NotFound /> },
];

export default routes;
