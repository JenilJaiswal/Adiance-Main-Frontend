import React from "react";
import Header from "./Header";
import NavHeader from "./NavHeader";
import ContactForm from "./ContactForm";
import ContactMidSection from "./ContactMidSection";
import Footer from "./Footer";
import ContactZoho from "./ContactZoho";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function () {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  return (
    <div>
      <Helmet>
        <title>Get in Touch for CCTV & Security – Adiance Technologies</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact Adiance Technologies for inquiries, support, or product details. We're here to help with your security needs."
        />

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Contact Us"} />

      <ContactZoho />

      <ContactMidSection />
      <Footer />
    </div>
  );
}
