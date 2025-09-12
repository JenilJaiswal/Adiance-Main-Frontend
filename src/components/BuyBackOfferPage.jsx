import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import BuyBackHeroSection from "./buy-back-offer-page/BuyBackHeroSection";
import BuyBackFeatureSection from "./buy-back-offer-page/BuyBackFeatureSection";
import BuyBackWhyTrade from "./buy-back-offer-page/BuyBackWhyTrade";
import BuybackStepper from "./buy-back-offer-page/BuyBackStepper";
import BuyBackCtaSection from "./buy-back-offer-page/BuyBackCtaSection";
import BuyBackCarousel from "./buy-back-offer-page/BuyBackCarousel";

function BuyBackOfferPage() {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Trade Old Cameras for ArcisAI’s Advanced AI CCTV Cameras</title>
        <meta
          name="description"
          content=" Upgrade your outdated or broken CCTV security camera with ArcisAI’s Buyback Offer. Get advanced 4G, 5G, Wi-Fi, Bullet & Wireless AI CCTV camera today!"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Google Tag Manager Tracking Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16815602258"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16815602258');
          `}
        </script>
      </Helmet>
      <Header />
      <BuyBackHeroSection />
      <BuyBackCarousel />
      <BuyBackFeatureSection />
      <BuyBackWhyTrade />
      <BuybackStepper />
      <BuyBackCtaSection />
      <Footer />
    </div>
  );
}

export default BuyBackOfferPage;
