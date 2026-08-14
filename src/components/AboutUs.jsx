"use client";

import React from "react";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer/Footer";
import AboutMidSection from "./AboutMidSection";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

export default function AboutUs() {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>About Adiance - OEM Camera Manufacturer India | Since 2003</title>
        <meta
          name="description"
          content="Learn about Adiance Technologies, India's leading NDAA compliant OEM camera manufacturer since 2003. Providing OEM, ODM & JDM services with in-house R&D, PCB assembly, and AI-powered surveillance solutions."
        />
        <meta
          name="keywords"
          content="Adiance Technologies, CCTV manufacturer India, surveillance camera company"
        />
        <meta property="og:title" content="About Adiance - OEM Camera Manufacturer India | Since 2003" />
        <meta property="og:description" content="Learn about Adiance Technologies, India's leading NDAA compliant OEM camera manufacturer since 2003. OEM, ODM & JDM services with in-house R&D." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="About Adiance - OEM Camera Manufacturer India | Since 2003" />
        <meta name="twitter:description" content="Learn about Adiance Technologies, India's leading NDAA compliant OEM camera manufacturer since 2003." />
        {/*
          Organization is emitted globally by app/layout.js and the canonical +
          BreadcrumbList by buildMetadata()/<PageSchema> on /about. All three
          were being defined a second time here, client-side.
        */}
      </Helmet>
      <Header />
      <Breadcrumb />
      <NavHeader text={"About Us"} />
      <AboutMidSection />
      <Footer />
    </div>
  );
}
