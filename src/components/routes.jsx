import LoginDash from "../AdianceAdmin/pages/LoginDash";
import Reset from "../AdianceAdmin/pages/ForgotPassword/Reset";
import Dashboard from "../AdianceAdmin/pages/Dashboard/Dashboard";
import OtpVerification from "../AdianceAdmin/pages/OTP/OtpVerification";
import AboutUs from "./AboutUs";
import ANPRCamera from "./ANPRCamera";
import AutoplayCarousel from "./AutoplayCarousel";
import BankFinance from "./BankFinance";
import Blog1 from "./Blog1";
import Blogs from "./Blogs";
import BuyBackOfferPage from "./BuyBackOfferPage";
import CloudApplication from "./CloudApplication";
import Compliance from "./Compliance";
import ContactUs from "./ContactUs";
import CrowdControl from "./CrowdControl";
import CyberSecurity from "./CyberSecurity";
import Datasheet from "./Datasheet";
import Downloads from "./Downloads";
import Education from "./Education";
import Event from "../Pages/Events/Event";
import Feedback from "./Feedback";
import FutureGrowth from "./FutureGrowth";
import HighTraffic from "./HighTraffic";
// import Home from "./Home";
import Home from "../Pages/Home/Home";
import OEM from "../Pages/Services/OEM/OEM";
import ODM from "../Pages/Services/ODM/ODM";
import Hospital from "./Hospital";
import Innovation from "./Innovation";
import Manufacturing from "./Manufacturing";
import PartnersPage from "./PartnersPage";
import PartnerWithUsPage from "./PartnerWithUsPage";
import PrivacyPolicy from "./PrivacyPolicy";
import ProdEngineering from "./ProdEngineering";
import ProductShow from "./ProductShow";
import PublicSafety from "./PublicSafety";
import PublicTransport from "./PublicTransport";
import Remote from "./Remote";
import Retail from "./Retail";
import Robotics from "./Robotics";
import RSeries from "./RSeries";
import SmartCities from "./SmartCities";
import SmartCity from "./SmartCity";
import SSeries from "../Pages/SSeries/SSeries";
import Sustainability from "./Sustainability";
import TermsOfService from "./TermsOfService";
import ThankYouPage from "./ThankYouPage";
import ThermalCamera from "./ThermalCamera";
import Trafic from "./Trafic";
import WarrantyPolicy from "./WarrantyPolicy";
import WarrantyService from "./WarrantyService";
import WifiCameraPdf from "./WifiCameraPdf";
import Firmware from "./Firmware";
import Tools from "./Tools";
import EdgeAICamera from "../Pages/EdgeAICamera/EdgeAICamera";
import NdaaCompliance from "../Pages/NdaaCompliance/NdaaCompliance";
import UsLanding from "../Pages/UsLanding/UsLanding";
import _4KCamera from "./_4KCamera";
import _4GCamera from "./_4GCamera";
import _360Approach from "./_360Approach";
import IfsecIndia2025 from "../Pages/Events/IfsecIndia2025";
import NotFound from "./NotFound";
import CareerHome from "./career/CareerHome";
import JDM from "../Pages/Services/JDM/JDM";
import PCB from "../Pages/Services/PCB/PCB";
import EcoSeries from "../Pages/EcoSeries/EcoSeries";

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
  // { path: "/admin/blogs", element: <LoginDash /> },
  // { path: "/admin/blog/:urlWords", element: <BlogNewPage /> },
  // ----------ADMIN ENDS------------
  { path: "/robotics", element: <Robotics /> },

  // Industry applications
  { path: "/public-safety", element: <PublicSafety /> },
  { path: "/trafic-management", element: <Trafic /> },
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
