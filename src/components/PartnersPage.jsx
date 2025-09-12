import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "react-bootstrap/Image";
import HeroSectionP from "./patnerPage-components/HeroSectionP";
import Channelpartner from "./patnerPage-components/Channelpartner";
import WhyPartnerwithAdiance from "./patnerPage-components/WhyPartnerwithAdiance";
import Globalnetwork from "./patnerPage-components/Globalnetwork";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PartnersPage = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Partner With Us - Adiance Technologies</title>
        <meta
          name="description"
          content="Partner with Adiance Technologies for cutting-edge surveillance solutions. Expertise in PCB manufacturing, AI,and smart tech for customized, security systems."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <HeroSectionP />
          <Channelpartner />
          <WhyPartnerwithAdiance />
          <Globalnetwork />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
