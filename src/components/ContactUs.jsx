import React from "react";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Breadcrumb from "./Breadcrumb";
import ContactForm from "./ContactForm";
import ContactMidSection from "./ContactMidSection";
import Footer from "./Footer/Footer";
import ContactZoho from "./ContactZoho";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Adiance Technologies",
  "url": "https://www.adiance.com",
  "logo": "https://www.adiance.com/images/Logo.webp",
  "image": "https://www.adiance.com/images/Logo.webp",
  "telephone": "+91 9687779999",
  "email": "contact@adiance.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House No. 7, Arista Eight, Corporate House, Rajpath Rangoli Rd, behind Satyam House, Bodakdev",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380059",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.0340",
    "longitude": "72.5070"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/adiancetechnologies",
    "https://www.linkedin.com/company/adiancetechnologies",
    "https://x.com/adiancetech",
    "https://www.instagram.com/adiancetech/"
  ]
};

const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.adiance.com" },
    { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.adiance.com/contact" }
  ]
};

export default function ContactUs() {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  return (
    <div>
      <Helmet>
        <title>Get in Touch for CCTV & Security – Adiance Technologies</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact Adiance Technologies for inquiries, support, or product details. We're here to help with your security needs."
        />
        <meta
          name="keywords"
          content="contact CCTV manufacturer, get a quote CCTV camera, OEM camera inquiry"
        />
        <meta property="og:title" content="Contact Adiance | Get a Quote for CCTV Cameras & OEM Services" />
        <meta property="og:description" content="Have questions or need assistance? Contact Adiance Technologies for inquiries, support, or product details. We're here to help with your security needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Contact Adiance | Get a Quote for CCTV Cameras & OEM Services" />
        <meta name="twitter:description" content="Have questions or need assistance? Contact Adiance Technologies for inquiries, support, or product details." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(contactBreadcrumbSchema)}</script>
      </Helmet>
      <Header />
      <Breadcrumb />
      <NavHeader text={"Contact Us"} />

      <ContactZoho />

      <ContactMidSection />
      <Footer />
    </div>
  );
}
