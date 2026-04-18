import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CTASection from "../../N_Component/CTASection";
import FAQ_Section from "../../N_Component/FAQ_Section/FAQ_Section";
import Clients from "../../N_Component/Clients";
import Testimonials from "../../Pages/Home/Home_Mid/Component/Testimonials";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TrafficIcon from "@mui/icons-material/Traffic";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./SSeries.css";

/* ===== DATA ===== */

const heroBadges = ["Edge AI", "3MP QHD", "Wi-Fi / LAN / 4G LTE", "IP66 Rated"];

const whyItems = [
  { id: "panel1", title: "Plug-N-Play + All-in-One App", desc: "Go live in minutes. Control live view, alerts, playback, reports, and multiple cameras in the ArcisAI app. Includes 2-year warranty and responsive support.", img: "/images/sentiment_analysis_accordian.webp" },
  { id: "panel2", title: "Event-Based Intelligence", desc: "Clean, actionable notifications with false-alert filtering and auto detection reports delivered to your app in real time.", img: "/images/ExecellentAudio.webp" },
  { id: "panel3", title: "Clear Vision, Day & Night", desc: "3MP QHD (2304x1296 @30fps) with 10x digital zoom, low-light sensitivity (0.1Lux color / 0.01Lux B/W) and Smart IR (4 LEDs) for up to 50 m.", img: "/images/videiliveStriming.webp" },
  { id: "panel4", title: "Instant Deterrence & 2-Way Talk", desc: "Built-in siren, strobe light, microphone, and speaker so you can intervene in the moment.", img: "/images/Zeroinstoletion.webp" },
  { id: "panel5", title: "Connect Anywhere (Wi-Fi / LAN / 4G LTE)", desc: "Works where Wi-Fi isn't feasible via CAT-1 LTE (FDD B1/B3/B5/B8; TDD B34/B38/B39/B40/B41). ONVIF 2.4 for easy VMS integration.", img: "/images/sentiment_analysis_accordian.webp" },
  { id: "panel6", title: "Outdoor-Ready & Reliable", desc: "IP66 weatherproofing, 4000V lightning protection, stable DC 12V (<=12W) operation - plus secure cloud storage plans.", img: "/images/ExecellentAudio.webp" },
];

const features = [
  { title: "Unattended Baggage", desc: "Instantly flags left objects in lobbies, branches, and transit zones to trigger SOP checks and prevent security risks.", img: "/images/Buggagedetection.webp" },
  { title: "Missing Objects", desc: "Alerts when assets or merchandise disappear from shelves, showrooms, or stockrooms - speeding investigation and loss recovery.", img: "/images/sentiment_analysis_accordian.webp" },
  { title: "Line Crossing", desc: "Monitors restricted perimeters (server rooms, cash areas, yards) and alerts the moment a boundary is breached for rapid response.", img: "/images/Linecrossing.webp" },
  { title: "Area Intrusion", desc: "Secures no-go zones like data centers, warehouses, and loading bays—auto-notifying teams when someone enters after hours or without authorization.", img: "/images/Areadetection.webp" },
  { title: "Customer Traffic (Footfall & Dwell)", desc: "Measures entries, exits, and dwell times across stores, branches, and campuses—turning visitor flow into staffing and layout decisions.", img: "/images/Humandetection.webp" },
  { title: "Motion Detection", desc: "Detects unusual movement after hours on floors, aisles, or parking lots—reducing patrol load and catching incidents early.", img: "/images/motion-ditection.webp" },
  { title: "Human Detection", desc: "Differentiates people from background motion to cut false alerts—ideal for office corridors, factory floors, and reception areas.", img: "/images/Humandetection.webp" },
  { title: "Face Detection", desc: "Captures clear face events at entrances and counters for audit trails, incident review, and compliance support.", img: "/images/Facedetection.webp" },
];

const industries = [
  { icon: LocationCityIcon, title: "Smart Cities", desc: "Our AI security cameras watch plazas, transit points, and infrastructure in real time - helping your teams prevent incidents, manage crowds, and keep the city moving.", link: "/smart-cities" },
  { icon: SchoolIcon, title: "Education", desc: "With our AI CCTV Cameras, you'll monitor entrances, corridors, and exam halls - reducing vandalism, ensuring fair tests, and keeping students and staff safe all day.", link: "/education" },
  { icon: LocalHospitalIcon, title: "Healthcare", desc: "Our S-series AI security cameras at ICUs, pharmacies and entries to control access, capture clear evidence and support compliance - so your staff can focus on patients.", link: "/healthcare" },
  { icon: TrafficIcon, title: "Traffic Management", desc: "Use ArcisAI S-series AI CCTV cameras to read flow, spot incidents and flag violations in real time—informing signal timing and keeping roads safer for everyone.", link: "/traffic-management" },
  { icon: AccountBalanceIcon, title: "Banking & Finance", desc: "With our AI security CCTV cameras, you deter threats, support fraud investigations and maintain audit trails that satisfy internal and regulatory checks.", link: "/bank-finance" },
];

const faqData = {
  title: "FAQs Related to EdgeAI CCTV Cameras",
  qa: [
    { question: "What is the S-Series AI CCTV Camera?", answer: "The S-Series is our latest line of AI CCTV Cameras that deliver live view, alerts, playback, reports, and multi-camera management in one ArcisAI app—built for enterprise reliability and quick deployment." },
    { question: "How do alerts work?", answer: "You get real-time, event-based notifications in the ArcisAI app. Alerts are designed to be clean and actionable, with false-alert filtering and auto-generated detection reports." },
    { question: "What night performance can we expect?", answer: "Clear evidence day and night: 3MP QHD (2304×1296 @30fps), low-light sensitivity (0.1 Lux color / 0.01 Lux B/W), and Smart IR (4 LEDs) up to ~50 m." },
    { question: "How do we manage many cameras across locations?", answer: "The ArcisAI app centralizes live view, alerts, playback, and reports with multi-site/device management, so ops teams can act quickly from anywhere." },
  ],
};

/* ===== COMPONENT ===== */

const SSeries = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  const [activeWhy, setActiveWhy] = useState("panel1");
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  const currentWhy = whyItems.find((w) => w.id === activeWhy);
  const activeFeature = features[activeFeatureIdx];

  return (
    <div className="ss-series-container">
      <Helmet>
        <title>EdgeAI - S-Series AI CCTV Cameras for Smart Protection | Adiance</title>
        <meta name="description" content="Deploy EdgeAI S-Series AI CCTV cameras in minutes. Get clean alerts, reliable night vision and easy multi-site control for safer operations across industries." />
        <meta name="keywords" content="S-Series AI camera, EdgeAI CCTV, smart surveillance camera, Adiance S-Series" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="EdgeAI - S-Series AI CCTV Cameras for Smart Protection | Adiance" />
        <meta property="og:description" content="Deploy EdgeAI S-Series AI CCTV cameras in minutes. Get clean alerts, reliable night vision and easy multi-site control for safer operations across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EdgeAI - S-Series AI CCTV Cameras for Smart Protection | Adiance" />
        <meta name="twitter:description" content="Deploy EdgeAI S-Series AI CCTV cameras in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "S-Series EdgeAI CCTV Cameras",
            "description": "India's most advanced Edge AI CCTV cameras with 3MP QHD, Wi-Fi/LAN/4G LTE connectivity, IP66 rated, smart IR up to 50m.",
            "brand": { "@type": "Brand", "name": "Adiance" },
            "manufacturer": { "@type": "Organization", "name": "Adiance Technologies", "url": "https://www.adiance.com" },
            "url": canonicalUrl,
            "image": "https://www.adiance.com/N_Images/S-Series-Edge-AI-CCTV-Cameras.webp",
            "category": "Surveillance Cameras"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.adiance.com" },
              { "@type": "ListItem", "position": 2, "name": "Edge AI CCTV Cameras", "item": canonicalUrl }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* 1. Hero */}
      <section className="ss-hero">
        <img src="/N_Images/S-Series-Edge-AI-CCTV-Cameras.webp" alt="S-Series AI CCTV Cameras" className="ss-hero-bg" fetchpriority="high" decoding="async" width="1440" height="800" />
        <div className="ss-hero-overlay" />
        <div className="ss-hero-content">
          <span className="ss-hero-badge">S-Series</span>
          <h1 className="ss-hero-title">S-Series: India's Most Advanced EdgeAI CCTV Cameras</h1>
          <p className="ss-hero-desc">A new era of CCTV built around your safety: The S-Series adapts to your world and protects you every second.</p>
          <div className="ss-hero-pills">
            {heroBadges.map((b, i) => <span key={i} className="ss-hero-pill">{b}</span>)}
          </div>
          <div className="ss-hero-ctas">
            <a href="https://calendly.com/book-a-demo-with-adiance/60min" target="_blank" rel="noreferrer" className="ss-hero-cta-primary">Book Demo</a>
            <a href="/contact" className="ss-hero-cta-secondary">Let's Talk</a>
          </div>
        </div>
      </section>

      {/* 2. Clients */}
      <Clients showTitle={true} />

      {/* 3. Why Choose — Vertical Split */}
      <section className="ss-section ss-why">
        <div className="ss-container">
          <h2 className="ss-section-title">Why Choose S-Series AI CCTV Camera</h2>
          <p className="ss-section-subtitle">Discover how the S-Series AI CCTV security camera makes surveillance smarter, faster and more reliable. With easy setup, mobile app control, crystal-clear video, event-based alerts and outdoor-ready durability, it's built to give you peace of mind every day.</p>
          <div className="ss-why-layout">
            <nav className="ss-why-nav">
              {whyItems.map((w) => (
                <button key={w.id} className={`ss-why-nav-btn ${activeWhy === w.id ? "ss-why-nav-btn-active" : ""}`} onClick={() => setActiveWhy(w.id)}>
                  {w.title}
                </button>
              ))}
            </nav>
            <div className="ss-why-panel" key={activeWhy}>
              <div className="ss-why-panel-img">
                <img src={currentWhy.img} alt={currentWhy.title} loading="lazy" decoding="async" width="600" height="400" />
              </div>
              <div className="ss-why-panel-info">
                <h3 className="ss-why-panel-title">{currentWhy.title}</h3>
                <p className="ss-why-panel-desc">{currentWhy.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features — Left Buttons + Right Panel */}
      <section className="ss-section ss-features-section">
        <div className="ss-container">
          <h2 className="ss-section-title">Instant Detection. Instant Action. EdgeAI CCTV Cameras</h2>
          <p className="ss-section-subtitle">Experience smarter detection and faster decisions via Edge AI CCTV security cameras: precise alerts, live view and immediate deterrence - unified in one app.</p>
          <div className="ss-features-layout">
            <div className="ss-features-nav">
              {features.map((f, i) => (
                <button
                  key={i}
                  className={`ss-features-nav-btn ${activeFeatureIdx === i ? "ss-features-nav-btn-active" : ""}`}
                  onClick={() => setActiveFeatureIdx(i)}
                >
                  {f.title}
                </button>
              ))}
            </div>
            <div className="ss-features-panel" key={activeFeatureIdx}>
              <div className="ss-features-panel-img">
                <img src={activeFeature.img} alt={activeFeature.title} loading="lazy" decoding="async" width="600" height="400" />
              </div>
              <div className="ss-features-panel-info">
                <h3 className="ss-features-panel-title">{activeFeature.title}</h3>
                <p className="ss-features-panel-desc">{activeFeature.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="ss-section ss-industries">
        <div className="ss-container">
          <h2 className="ss-section-title">Build Safer Systems With EdgeAI Security Cameras</h2>
          <p className="ss-section-subtitle">Our S-series AI CCTV Cameras deliver real-time intelligence across smart cities, schools, hospitals, traffic hubs, and banks to prevent risks before they escalate.</p>
          <div className="ss-industries-grid">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <React.Fragment key={i}>
                  {i === 1 && (
                    <div className="ss-industries-center-img">
                      <img src="/N_Images/S-Series.webp" alt="S-Series Camera" loading="lazy" decoding="async" width="400" height="400" />
                    </div>
                  )}
                  <Link to={ind.link} className="ss-industry-card">
                    <div className="ss-industry-card-header">
                      <IconComp style={{ fontSize: 48, color: "#BF0603" }} />
                      <ArrowOutwardIcon className="ss-industry-arrow" />
                    </div>
                    <h3 className="ss-industry-title">{ind.title}</h3>
                    <p className="ss-industry-desc">{ind.desc}</p>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title="Protect What Matters With S-Series AI CCTV Cameras"
        description="Designed for modern enterprises: faster response, fewer false alarms, and visibility you can trust."
        buttonText="Book Installation"
        buttonLink="/contact"
      />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. FAQ */}
      <FAQ_Section faqsList={faqData} />

      <Footer />
    </div>
  );
};

export default SSeries;
