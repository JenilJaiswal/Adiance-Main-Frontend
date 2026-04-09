import { lazy } from "react";

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
const BuyBackOfferPage = lazy(() => import("./BuyBackOfferPage"));
const CloudApplication = lazy(() => import("./CloudApplication"));
const Compliance = lazy(() => import("./Compliance"));
const ContactUs = lazy(() => import("./ContactUs"));
const CrowdControl = lazy(() => import("./CrowdControl"));
const CyberSecurity = lazy(() => import("./CyberSecurity"));
const Datasheet = lazy(() => import("./Datasheet"));
const Downloads = lazy(() => import("./Downloads"));
const Education = lazy(() => import("./Education"));
const Event = lazy(() => import("../Pages/Events/Event"));
const Feedback = lazy(() => import("./Feedback"));
const FutureGrowth = lazy(() => import("./FutureGrowth"));
const HighTraffic = lazy(() => import("./HighTraffic"));
const Home = lazy(() => import("../Pages/Home/Home"));
const OEM = lazy(() => import("../Pages/Services/OEM/OEM"));
const ODM = lazy(() => import("../Pages/Services/ODM/ODM"));
const Hospital = lazy(() => import("./Hospital"));
const Innovation = lazy(() => import("./Innovation"));
const Manufacturing = lazy(() => import("./Manufacturing"));
const PartnersPage = lazy(() => import("./PartnersPage"));
const PartnerWithUsPage = lazy(() => import("./PartnerWithUsPage"));
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
const Sustainability = lazy(() => import("./Sustainability"));
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
const _360Approach = lazy(() => import("./_360Approach"));
const IfsecIndia2025 = lazy(() => import("../Pages/Events/IfsecIndia2025"));
const NotFound = lazy(() => import("./NotFound"));
const CareerHome = lazy(() => import("./career/CareerHome"));
const JDM = lazy(() => import("../Pages/Services/JDM/JDM"));
const PCB = lazy(() => import("../Pages/Services/PCB/PCB"));
const EcoSeries = lazy(() => import("../Pages/EcoSeries/EcoSeries"));

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

  // Catch-all route
  { path: "*", element: <NotFound /> },
];

export default routes;
