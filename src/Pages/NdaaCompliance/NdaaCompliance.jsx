import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CTASection from "../../N_Component/CTASection";
import FAQ_Section from "../../N_Component/FAQ_Section/FAQ_Section";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SecurityIcon from "@mui/icons-material/Security";
import FlightIcon from "@mui/icons-material/Flight";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import "./NdaaCompliance.css";

const trustBadges = [
  { label: "NDAA Section 889 Compliant" },
  { label: "ONVIF Certified" },
  { label: "Made in India" },
  { label: "ISO Certified Manufacturing" },
];

const complianceSectors = [
  { icon: AccountBalanceIcon, sector: "Federal Agencies", desc: "All U.S. government departments" },
  { icon: SchoolIcon, sector: "Education", desc: "K-12 schools and universities with federal funding" },
  { icon: LocalHospitalIcon, sector: "Healthcare", desc: "Hospitals receiving Medicare/Medicaid" },
  { icon: SecurityIcon, sector: "Defense Contractors", desc: "DoD suppliers and subcontractors" },
  { icon: FlightIcon, sector: "Transportation", desc: "Airports, ports, transit authorities" },
  { icon: ElectricBoltIcon, sector: "Critical Infrastructure", desc: "Energy, water, financial systems" },
];

const whyAdiance = [
  { title: "100% Compliant Supply Chain", desc: "Zero components from NDAA-banned entities. Every camera is manufactured with a fully traceable, compliant supply chain from chipset to final assembly." },
  { title: "Edge AI Technology", desc: "On-device AI analytics including face detection, intrusion alerts, people counting, and object classification — no cloud dependency required." },
  { title: "4G/LTE Connectivity", desc: "Deploy surveillance anywhere with built-in cellular connectivity. Ideal for remote government facilities, border security, and temporary installations." },
  { title: "Cloud VMS Platform", desc: "Centralized video management with Adiance CloudXVR — manage hundreds of cameras across multiple locations from a single dashboard." },
  { title: "OEM/ODM Flexibility", desc: "White-label manufacturing with custom firmware, branding, and packaging. Perfect for integrators who need compliant products under their brand." },
  { title: "Competitive Pricing", desc: "Premium technology without premium pricing. Adiance delivers Axis-level quality at significantly lower total cost of ownership." },
];

const productLineup = [
  { name: "Edge AI Box Camera", desc: "AI-powered analytics with on-device processing", link: "/edgeaicamera" },
  { name: "4G Dome PTZ Camera", desc: "Remote monitoring over cellular networks", link: "/4g-dome-ptz-camera" },
  { name: "4G Mini Bullet Camera", desc: "Compact 4G LTE surveillance", link: "/4g-mini-bullet-camera" },
  { name: "S-Series AI Cameras", desc: "Smart AI detection and alerts", link: "/s-series-ai-cctv-cameras" },
  { name: "ANPR Camera", desc: "Automatic number plate recognition", link: "/anpr-camera" },
  { name: "Cloud XVR", desc: "Cloud-based video recording platform", link: "/cloudxvr" },
];

const comparisonRows = [
  { feature: "NDAA Section 889 Compliant", adiance: true, banned: false, others: true },
  { feature: "Edge AI Analytics", adiance: true, banned: true, others: "Varies" },
  { feature: "4G/LTE Models", adiance: true, banned: "Limited", others: "Limited" },
  { feature: "Cloud VMS Platform", adiance: true, banned: "Proprietary", others: "Varies" },
  { feature: "OEM/ODM Manufacturing", adiance: true, banned: "Available", others: "Limited" },
  { feature: "Solar-Powered Options", adiance: true, banned: "Limited", others: "Rare" },
  { feature: "Price Competitiveness", adiance: "Excellent", banned: "Low Cost", others: "Premium" },
  { feature: "ONVIF Compatible", adiance: true, banned: true, others: true },
];

const faqs = [
  { q: "What is NDAA Section 889 compliance?", a: "NDAA Section 889 of the National Defense Authorization Act prohibits U.S. federal agencies from procuring or using telecommunications and video surveillance equipment from specific Chinese manufacturers including Huawei, ZTE, Hytera, Hikvision, and Dahua, as well as their subsidiaries and affiliates." },
  { q: "Are Adiance cameras NDAA compliant?", a: "Yes. Adiance cameras are designed and manufactured without any components from the banned entities listed under NDAA Section 889. Our entire product line is fully compliant and suitable for use in U.S. government facilities, education institutions, and federally-funded projects." },
  { q: "Who needs NDAA-compliant cameras?", a: "Any organization receiving U.S. federal funding or contracting with the federal government must use NDAA-compliant equipment. This includes government agencies, military installations, public schools and universities, healthcare facilities receiving federal funds, airports, and critical infrastructure." },
  { q: "How do Adiance cameras compare to Hikvision and Dahua alternatives?", a: "Adiance offers comparable or superior technology including Edge AI analytics, 4G/LTE connectivity, and cloud VMS at competitive pricing. Unlike banned manufacturers, Adiance cameras can be deployed in any government or federally-funded project without compliance risk." },
  { q: "Does Adiance offer OEM/ODM manufacturing for NDAA-compliant cameras?", a: "Yes. Adiance provides full OEM and ODM manufacturing services, allowing security integrators and distributors to offer NDAA-compliant cameras under their own brand with custom firmware, housing, and packaging options." },
  { q: "What certifications do Adiance cameras hold?", a: "Adiance cameras are NDAA Section 889 compliant, ONVIF Profile S/T/G compatible, and manufactured in ISO-certified facilities. We also support RTSP, HTTPS encryption, and comply with international data protection standards." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Adiance",
  "url": "https://www.adiance.com",
  "description": "Manufacturer of NDAA-compliant security cameras and video surveillance solutions",
  "address": { "@type": "PostalAddress", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "addressCountry": "IN" },
};

const renderCell = (val) => {
  if (val === true) return <span className="ndaa-check">&#10003; Yes</span>;
  if (val === false) return <span className="ndaa-cross">&#10007; Banned</span>;
  return <span className="ndaa-neutral">{val}</span>;
};

const NdaaCompliance = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div className="ndaa-compliance-container">
      <Helmet>
        <title>NDAA Compliant Security Cameras | Section 889 Approved | Adiance</title>
        <meta name="description" content="Adiance manufactures NDAA Section 889 compliant security cameras. Government-approved alternative to Hikvision & Dahua with Edge AI, 4G LTE, and Cloud VMS. Trusted by US federal agencies." />
        <meta name="keywords" content="NDAA compliant cameras, NDAA Section 889, government approved security cameras, Hikvision alternative, Dahua alternative, compliant CCTV manufacturer, federal security cameras" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="NDAA Compliant Security Cameras | Adiance Technologies" />
        <meta property="og:description" content="Government-approved NDAA Section 889 compliant cameras. A trusted alternative to banned manufacturers with advanced AI surveillance technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="NDAA Compliant Security Cameras | Adiance Technologies" />
        <meta name="twitter:description" content="Government-approved NDAA Section 889 compliant cameras. A trusted alternative to banned manufacturers with advanced AI surveillance technology." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <Header />

      {/* Section 1 — Custom Hero with Badges */}
      <section className="ndaa-hero">
        <img
          src="/N_Images/Slider3.webp"
          alt="NDAA Compliant Cameras"
          className="ndaa-hero-bg"
          fetchpriority="high"
          decoding="async"
          width="1440"
          height="800"
        />
        <div className="ndaa-hero-overlay" />
        <div className="ndaa-hero-content">
          <h1 className="ndaa-hero-title">NDAA Section 889 Compliant Security Cameras</h1>
          <p className="ndaa-hero-description">
            Government-Approved Video Surveillance — A Trusted Alternative to Banned Manufacturers
          </p>
          <div className="ndaa-hero-badges">
            {trustBadges.map((badge, i) => (
              <span key={i} className="ndaa-hero-badge">{badge.label}</span>
            ))}
          </div>
          <a href="/contact" className="ndaa-hero-cta">Request a Quote</a>
        </div>
      </section>

      {/* Section 2 — What is NDAA */}
      <section className="ndaa-section ndaa-what">
        <div className="ndaa-container">
          <h2 className="ndaa-section-title">What is NDAA Section 889?</h2>
          <div className="ndaa-what-content">
            <p className="ndaa-text">
              The National Defense Authorization Act (NDAA) Section 889 prohibits U.S. federal agencies and their contractors from procuring telecommunications and video surveillance equipment from specific Chinese manufacturers — including <strong>Hikvision</strong> and <strong>Dahua</strong> — due to national security concerns.
            </p>
            <p className="ndaa-text">
              This regulation affects every organization that does business with the U.S. federal government, receives federal grants, or operates within federally-funded facilities including schools, hospitals, military bases, and government buildings.
            </p>
          </div>

          <h3 className="ndaa-subsection-title">Who Must Comply?</h3>
          <div className="ndaa-sectors-grid">
            {complianceSectors.map((s, i) => (
              <div key={i} className="ndaa-sector-card">
                <div className="ndaa-sector-icon">
                  <s.icon style={{ fontSize: 28, color: "#BF0603" }} />
                </div>
                <div>
                  <h4 className="ndaa-sector-name">{s.sector}</h4>
                  <p className="ndaa-sector-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why Adiance */}
      <section className="ndaa-section ndaa-why">
        <div className="ndaa-container">
          <h2 className="ndaa-section-title ndaa-title-white">Why Choose Adiance for NDAA Compliance?</h2>
          <div className="ndaa-why-grid">
            {whyAdiance.map((item, i) => (
              <div key={i} className="ndaa-why-card">
                <span className="ndaa-why-num">0{i + 1}</span>
                <h3 className="ndaa-why-card-title">{item.title}</h3>
                <p className="ndaa-why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Product Lineup */}
      <section className="ndaa-section ndaa-products">
        <div className="ndaa-container">
          <h2 className="ndaa-section-title">NDAA-Compliant Product Lineup</h2>
          <p className="ndaa-section-subtitle">Every Adiance camera is fully compliant with NDAA Section 889 and ready for deployment in government and federally-funded facilities.</p>
          <div className="ndaa-products-grid">
            {productLineup.map((p, i) => (
              <Link key={i} to={p.link} className="ndaa-product-card">
                <h3 className="ndaa-product-name">{p.name}</h3>
                <p className="ndaa-product-desc">{p.desc}</p>
                <span className="ndaa-product-link">View Product &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Comparison */}
      <section className="ndaa-section ndaa-compare">
        <div className="ndaa-container">
          <h2 className="ndaa-section-title">Adiance vs. Banned Manufacturers</h2>
          <div className="ndaa-table-wrap">
            <table className="ndaa-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Adiance</th>
                  <th>Hikvision / Dahua</th>
                  <th>Other NDAA Brands</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="ndaa-table-feature">{row.feature}</td>
                    <td>{renderCell(row.adiance)}</td>
                    <td>{renderCell(row.banned)}</td>
                    <td>{renderCell(row.others)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <FAQ_Section faqsList={{
        title: "FAQs",
        qa: faqs.map((f) => ({ question: f.q, answer: f.a })),
      }} />

      {/* Section 7 — CTA */}
      <CTASection
        title="Ready to Switch to NDAA-Compliant Cameras?"
        description="Get a free consultation and product samples. Our team will help you transition from banned equipment to fully compliant Adiance solutions."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default NdaaCompliance;
