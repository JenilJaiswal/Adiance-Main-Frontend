"use client";

import React from "react";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer/Footer";
import AboutMidSection from "./AboutMidSection";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const aboutOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Adiance Technologies",
  "url": "https://www.adiance.com",
  "logo": "https://www.adiance.com/images/Logo.webp",
  "description": "Adiance Technologies is a global leader in CCTV camera manufacturing, cloud storage, and security solutions. Providing OEM, ODM, and JDM services with cutting-edge AI technology since 2003.",
  "foundingDate": "2003",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House No. 7, Arista Eight, Corporate House, Rajpath Rangoli Rd, behind Satyam House, Bodakdev",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380059",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "telephone": "+91 9687779999",
    "email": "contact@adiance.com"
  },
  "sameAs": [
    "https://www.facebook.com/adiancetechnologies",
    "https://www.linkedin.com/company/adiancetechnologies",
    "https://x.com/adiancetech",
    "https://www.instagram.com/adiancetech/",
    "https://youtube.com/@adiancetechnologies"
  ]
};

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.adiance.com" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.adiance.com/about" }
  ]
};

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
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(aboutOrganizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutBreadcrumbSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumb />
      <NavHeader text={"About Us"} />
      <AboutMidSection />
      <Footer />
    </div>
  );
}
