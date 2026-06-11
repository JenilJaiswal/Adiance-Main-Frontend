"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "@/compat/react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CTASection from "../../N_Component/CTASection";
import FAQ_Section from "../../N_Component/FAQ_Section/FAQ_Section";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SecurityIcon from "@mui/icons-material/Security";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FlightIcon from "@mui/icons-material/Flight";
import "./UsLanding.css";

const reasons = [
  { title: "NDAA Section 889 Compliant", desc: "Every Adiance camera meets federal procurement requirements. No components from Hikvision, Dahua, Huawei, ZTE, or Hytera." },
  { title: "TAA Compliant Manufacturing", desc: "Products manufactured in compliance with the Trade Agreements Act, eligible for GSA Schedule and federal contracts." },
  { title: "US-Based Support", desc: "Dedicated support team for US customers with business-hours coverage. Technical assistance, RMA, and warranty service." },
  { title: "Federal Pricing Programs", desc: "Competitive government pricing available for bulk deployments. Volume discounts for school districts and state agencies." },
];

const markets = [
  { icon: AccountBalanceIcon, title: "Federal Government", desc: "NDAA-compliant cameras for federal buildings, courthouses, VA facilities, and government offices. Full compliance documentation provided." },
  { icon: SchoolIcon, title: "K-12 and Higher Education", desc: "Safe and compliant surveillance for schools and universities receiving federal E-Rate funding. AI-powered threat detection and campus monitoring." },
  { icon: LocalHospitalIcon, title: "Healthcare", desc: "HIPAA-aware camera solutions for hospitals and clinics receiving Medicare/Medicaid funding. Patient safety and facility security." },
  { icon: SecurityIcon, title: "Defense and Military", desc: "Rugged, NDAA-compliant cameras for military installations, defense contractors, and critical infrastructure protection." },
  { icon: LocationCityIcon, title: "State and Local Government", desc: "City surveillance, public safety, traffic monitoring, and smart city solutions for municipalities and state agencies." },
  { icon: FlightIcon, title: "Transportation", desc: "Airport security, transit authority monitoring, highway surveillance with 4G/solar cameras for remote locations." },
];

const products = [
  { name: "Edge AI Box Camera", ideal: "Federal buildings, military bases", link: "/edgeaicamera" },
  { name: "4G Dome PTZ Camera", ideal: "Border security, remote facilities", link: "/4g-dome-ptz-camera" },
  { name: "S-Series AI Cameras", ideal: "Schools, hospitals, campuses", link: "/s-series-ai-cctv-cameras" },
  { name: "ANPR Camera", ideal: "Parking, law enforcement, toll roads", link: "/anpr-camera" },
  { name: "ECO Series Cameras", ideal: "Budget deployments, bulk orders", link: "/eco-series" },
  { name: "Cloud XVR", ideal: "Multi-site management platform", link: "/cloudxvr" },
];

const UsLanding = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div className="us-landing-container">
      <Helmet>
        <title>NDAA Compliant Security Cameras for the United States | Adiance</title>
        <meta name="description" content="Adiance provides NDAA Section 889 compliant security cameras for US government agencies, schools, hospitals, and enterprises. A trusted Hikvision and Dahua alternative with Edge AI and 4G LTE." />
        <meta name="keywords" content="NDAA compliant cameras USA, security cameras for US government, Hikvision alternative United States, government approved CCTV, federal security camera supplier" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="NDAA Compliant Security Cameras for the United States | Adiance" />
        <meta property="og:description" content="Government-approved NDAA Section 889 compliant cameras for US federal agencies, education, healthcare, and enterprise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="NDAA Compliant Security Cameras for the United States | Adiance" />
        <meta name="twitter:description" content="Government-approved NDAA Section 889 compliant cameras for US federal agencies, education, healthcare, and enterprise." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Helmet>

      <Header />

      {/* Section 1 — Hero */}
      <section className="us-hero">
        <img
          src="/N_Images/Slider2.webp"
          alt="NDAA Compliant Cameras for US"
          className="us-hero-bg"
          fetchpriority="high"
          decoding="async"
          width="1440"
          height="800"
        />
        <div className="us-hero-overlay" />
        <div className="us-hero-content">
          <span className="us-hero-badge">United States</span>
          <h1 className="us-hero-title">NDAA-Compliant Security Cameras for the United States</h1>
          <p className="us-hero-description">
            Trusted by government agencies, school districts, and enterprises across America. Fully compliant with NDAA Section 889 — a proven alternative to banned Chinese manufacturers.
          </p>
          <div className="us-hero-ctas">
            <a href="/contact" className="us-hero-cta-primary">Get a US Quote</a>
            <a href="/ndaa-compliance" className="us-hero-cta-secondary">Learn About NDAA</a>
          </div>
        </div>
      </section>

      {/* Section 2 — Why US Organizations Choose Adiance */}
      <section className="us-section">
        <div className="us-container">
          <h2 className="us-section-title">Why US Organizations Choose Adiance</h2>
          <div className="us-reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="us-reason-card">
                <span className="us-reason-num">0{i + 1}</span>
                <h3 className="us-reason-title">{r.title}</h3>
                <p className="us-reason-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Solutions for US Markets */}
      <section className="us-section">
        <div className="us-container">
          <h2 className="us-section-title">Solutions for US Markets</h2>
          <div className="us-markets-grid">
            {markets.map((m, i) => (
              <div key={i} className="us-market-card">
                <div className="us-market-icon">
                  <m.icon style={{ fontSize: 30, color: "#BF0603" }} />
                </div>
                <h3 className="us-market-title">{m.title}</h3>
                <p className="us-market-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Products */}
      <section className="us-section">
        <div className="us-container">
          <h2 className="us-section-title">NDAA-Compliant Products for US Deployment</h2>
          <div className="us-products-grid">
            {products.map((p, i) => (
              <Link key={i} to={p.link} className="us-product-card">
                <h3 className="us-product-name">{p.name}</h3>
                <p className="us-product-ideal">Ideal for: {p.ideal}</p>
                <span className="us-product-link">View Product &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Partner CTA */}
      <CTASection
        title="Partner with Adiance in the United States"
        description="We are actively building our US distribution network. Whether you are a security integrator, government procurement officer, or technology distributor, we would love to hear from you."
        buttonText="Request US Pricing"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default UsLanding;
