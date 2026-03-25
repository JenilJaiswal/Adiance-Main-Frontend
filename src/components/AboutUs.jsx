import React from "react";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import AboutMidSection from "./AboutMidSection";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
export default function () {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`; // Set canonical dynamically

  return (
    <div>
      <Helmet>
        <title>About Us | Leading Security & Surveillance Innovator</title>
        <meta
          name="description"
          content="Discover Adiance, a global leader in CCTV, cloud storage & security solutions. Providing OEM & ODM services with cutting-edge technology & certified quality."
        />
        <meta
          name="keywords"
          content="Adiance Technologies, CCTV manufacturer India, surveillance camera company"
        />
        <meta property="og:title" content="About Adiance | NDAA Compliant Camera Manufacturer Since 2003" />
        <meta property="og:description" content="Discover Adiance, a global leader in CCTV, cloud storage & security solutions. Providing OEM & ODM services with cutting-edge technology & certified quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"About Us"} />
      <AboutMidSection />
      <Footer />
    </div>
  );
}
