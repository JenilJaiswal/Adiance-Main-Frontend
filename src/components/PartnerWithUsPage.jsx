import React from "react";
import Header from "./Header";
import NavHeader from "./NavHeader";

import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import DealersLandingPageForm from "./DealersLandingPageForm";

export default function () {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  return (
    <div>
      <Helmet>
        <title>Fill out the contact form to partner</title>
        <meta
          name="description"
          content="Become a dealer with Adiance Technologies! Fill out the contact form to partner with a leader in advanced surveillance and smart security solutions."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Partner With Us"} />

      <DealersLandingPageForm />
      <Footer />
    </div>
  );
}
