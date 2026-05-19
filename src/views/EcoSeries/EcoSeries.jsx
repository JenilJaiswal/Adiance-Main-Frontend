"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import ProductFilter from "./ProductFilter/ProductFilter";
import CTASection from "../../N_Component/CTASection";
import "./EcoSeries.css";

const stats = [
  { value: "33 SKUs", label: "Products" },
  { value: "3MP & 5MP", label: "Resolutions" },
  { value: "4 Types", label: "Form Factors" },
  { value: "Made in India", label: "Manufacturing" },
];

const StatsBar = () => (
  <section className="eco-stats-bar">
    <div className="eco-stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="eco-stat-item">
          <span className="eco-stat-value">{stat.value}</span>
          <span className="eco-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const EcoSeries = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div
      className="eco-series-page"
    >
      <Helmet>
        <title>ECO Series CCTV Cameras | 33 SKUs | Adiance</title>
        <meta
          name="description"
          content="ECO Series CCTV cameras - 33 SKUs of value-engineered AI surveillance. Bullet, dome, PTZ & indoor models with 3MP/5MP resolution, WiFi, PoE, 4G & IP connectivity. Made in India."
        />
        <meta
          name="keywords"
          content="CCTV cameras, ECO series, bullet camera, dome camera, PTZ camera, IP camera, WiFi camera, 4G camera, PoE camera"
        />
        <meta name="author" content="Adiance" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="ECO Series CCTV Cameras | 33 SKUs | Adiance" />
        <meta property="og:description" content="ECO Series CCTV cameras - 33 SKUs of value-engineered AI surveillance. Bullet, dome, PTZ & indoor models with 3MP/5MP resolution, WiFi, PoE, 4G & IP connectivity. Made in India." />
        <meta property="og:image" content="https://www.adiance.com/images/Eco-Series-Security-CCTV-Cameras.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="ECO Series CCTV Cameras | 33 SKUs | Adiance" />
        <meta name="twitter:description" content="ECO Series CCTV cameras - 33 SKUs of value-engineered AI surveillance. Bullet, dome, PTZ & indoor models with 3MP/5MP resolution, WiFi, PoE, 4G & IP connectivity. Made in India." />
        <meta name="twitter:image" content="https://www.adiance.com/images/Eco-Series-Security-CCTV-Cameras.webp" />
        <meta name="twitter:url" content={canonicalUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Helmet>

      <Header />
      <HeroSection />
      <StatsBar />
      <ProductFilter />
      <CTASection
        title="White Label & OEM Solutions Available"
        description="The entire ECO Series is available for white-label and OEM customization. Customize hardware, firmware, and branding to match your business requirements."
        buttonText="Learn More"
        buttonLink="/oem-services"
      />
      <Footer />
    </div>
  );
};

export default EcoSeries;
