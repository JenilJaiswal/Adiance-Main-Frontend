import React from "react";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import EventMidSection from "./EventMidSection";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Event() {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Insights from Adiance at Industry Events, Expos & Global Manufacturing",
    "description": "Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases.",
    "url": "https://www.adiance.com/event",
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12",
    "publisher": {
      "@type": "Organization",
      "name": "Adiance Technologies",
      "url": "https://www.adiance.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.adiance.com/images/Logo-241x47-1.png",
        "width": 205,
        "height": 40
      },
      "sameAs": [
        "https://www.facebook.com/adiancetechnologies/",
        "https://www.instagram.com/adiancetech/",
        "https://www.linkedin.com/company/adiancetechnologies/",
        "https://x.com/adiancetech",
        "https://www.youtube.com/@AdianceTechnologies"
      ]
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.adiance.com/images/ifsec-event.jpg",
      "width": 1512,
      "height": 800,
      "caption": "Adiance Technologies - Events"
    },
    "inLanguage": "en-US"
  };

  return (
    <div>
      <Helmet>
        <title>Insights from Adiance at Industry Events, Expos & Global Manufacturing</title>
        <meta
          name="description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Insights from Adiance at Industry Events, Expos & Global Manufacturing" />
        <meta
          property="og:description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta property="og:image" content="https://www.adiance.com/images/event_carousel_1.png" />
        <meta property="og:url" content="https://www.adiance.com/event" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Insights from Adiance at Industry Events, Expos & Global Manufacturing" />
        <meta
          name="twitter:description"
          content="Connect with the Adiance team at leading cctv manufacturing, OEM, and security hardware events. Stay updated on upcoming expos and explore our latest product showcases."
        />
        <meta name="twitter:image" content="https://www.adiance.com/images/ifsec-event.jpg" />

        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />
      <NavHeader text={"Events"} />
      <EventMidSection />
      <Footer />
    </div>
  );
}