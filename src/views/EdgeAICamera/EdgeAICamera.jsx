"use client";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { Link } from "@/compat/react-router-dom";
import CTASection from "../../N_Component/CTASection";
import "./EdgeAICamera.css";

const products = [
  {
    id: 1,
    title: "Edge AI Based PTZ ANPR Bullet Camera",
    imageUrl:
      "/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-01.webp",
    link: "/edge-ai-based-ptz-anpr-bullet-camera",
  },
  {
    id: 2,
    title: "Edge AI Based Face Recognition Dome Camera",
    imageUrl: "/images/P5-Edge-AI-Based-Face-Recognition-VM-72D5AIVE-02.webp",
    link: "/edge-ai-based-recognition-camera",
  },
  {
    id: 3,
    title: "Edge AI Based Object & Face Detection Camera",
    imageUrl:
      "/images/P4-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-02.webp",
    link: "/edge-ai-based-object-n-face-detection-cameras",
  },
];

const tabs = [
  {
    key: "benefits",
    label: "Benefits",
    items: [
      "Efficient Data Processing",
      "Cost Effectiveness",
      "Flexibility",
    ],
  },
  {
    key: "features",
    label: "Features",
    items: ["Realtime AI", "Low Cost", "Versatile Design"],
  },
  {
    key: "applications",
    label: "Applications",
    items: ["Security Monitoring", "Industrial Automation", "Smart Cities"],
  },
  {
    key: "specifications",
    label: "Technical Specifications",
    items: [
      "Data Processing: Edge AI algorithms running locally on the camera",
      "Connectivity: Cloud-based data transfer for remote monitoring and analysis",
      "Resolution: High-definition video capture for detailed surveillance footage",
    ],
  },
  {
    key: "setup",
    label: "Setup",
    content:
      "To ensure effective surveillance, security cameras should be strategically placed for maximum coverage. They must be connected to the network and then customized with settings and AI features to fit your needs. Finally, integrate the cameras with your security system for centralized monitoring and control across various locations.",
  },
];

const EdgeAICamera = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const currentTab = tabs.find((t) => t.key === activeTab);

  return (
    <div>
      <Helmet>
        <title>CCTV Camera Products | AI-Powered Surveillance Cameras | Adiance</title>
        <meta
          name="description"
          content="Explore Adiance CCTV camera range: edge AI cameras, PTZ cameras, bullet cameras, dome cameras, and NVRs. All NDAA-compliant with Qualcomm and Novatek chipsets."
        />
        <meta
          name="keywords"
          content="edge AI camera, CCTV camera products, PTZ camera, bullet camera, dome camera, NVR"
        />
        <link rel="canonical" href="https://www.adiance.com/edgeaicamera" />
        <meta property="og:title" content="CCTV Camera Products | AI-Powered Surveillance Cameras | Adiance" />
        <meta property="og:description" content="Explore Adiance CCTV camera range: edge AI cameras, PTZ cameras, bullet cameras, dome cameras, and NVRs. All NDAA-compliant with Qualcomm and Novatek chipsets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adiance.com/edgeaicamera" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CCTV Camera Products | AI-Powered Surveillance Cameras | Adiance" />
        <meta name="twitter:description" content="Explore Adiance CCTV camera range: edge AI cameras, PTZ cameras, bullet cameras, dome cameras, and NVRs. All NDAA-compliant with Qualcomm and Novatek chipsets." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="edgeai-hero">
        <img
          src="/N_Images/EdgeAI.webp"
          alt="Edge AI Camera"
          className="edgeai-hero-bg"
          fetchpriority="high"
          decoding="async"
          width="1440"
          height="800"
        />
        <div className="edgeai-hero-overlay" />
        <div className="edgeai-hero-content">
          <span className="edgeai-hero-badge">Edge AI</span>
          <h1 className="edgeai-hero-title">Edge AI Camera</h1>
          <p className="edgeai-hero-description">
            Introducing the future of surveillance technology — our Realtime Edge AI-based Smart Cloud Camera. By harnessing the power of artificial intelligence and edge computing, this cutting-edge camera brings intelligent decision-making and real-time data processing directly to the edge of your network.
          </p>
          <div className="edgeai-hero-pills">
            <span className="edgeai-hero-pill">Realtime AI</span>
            <span className="edgeai-hero-pill">Low Cost</span>
            <span className="edgeai-hero-pill">Versatile Design</span>
          </div>
          <div className="edgeai-hero-ctas">
            <a href="/contact" className="edgeai-hero-cta-primary">Request a Quote</a>
            <a href="/datasheet" className="edgeai-hero-cta-secondary">View Datasheet</a>
          </div>
        </div>
      </section>

      {/* Tabs Section — Vertical Split Layout */}
      <section className="edgeai-info-section">
        <div className="edgeai-info-container">
          <div className="edgeai-info-left">
            <h2 className="edgeai-info-heading">Why Choose<br />Edge AI?</h2>
            <nav className="edgeai-info-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`edgeai-info-nav-btn ${activeTab === tab.key ? "edgeai-info-nav-btn-active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="edgeai-info-right">
            <h3 className="edgeai-info-tab-title">{currentTab.label}</h3>
            <hr />
            {currentTab.items ? (
              <div className="edgeai-info-items">
                {currentTab.items.map((item, i) => (
                  <div key={i} className="edgeai-info-item">
                    <span className="edgeai-info-item-number">0{i + 1}</span>
                    <span className="edgeai-info-item-text">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="edgeai-info-paragraph">{currentTab.content}</p>
            )}
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="edgeai-products-section">
        <div className="edgeai-products-container">
          <h2 className="edgeai-section-title">Our Edge AI Camera Range</h2>
          <div className="edgeai-products-grid">
            {products.map((product) => (
              <Link key={product.id} to={product.link} className="edgeai-product-card">
                <div className="edgeai-product-image-wrap">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="edgeai-product-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="edgeai-product-title-bar">
                  {product.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Ready to Deploy Edge AI Surveillance?"
        description="Get in touch with our team to explore how Edge AI cameras can transform your security infrastructure with real-time intelligence."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <Footer />
    </div>
  );
};

export default EdgeAICamera;
