import React from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import ProductSlider from "./ProductSlider";
import MidSection from "./MidSection";
import Footer from "./Footer";
import AboutSlider from "./AboutSlider";
import { Helmet } from "react-helmet";
import AutoplayCarousel from "./AutoplayCarousel";
import IconsWithTitles from "./IconsWithTitles";
import IfsecModal from "./IfsecModal";
import { useLocation } from "react-router-dom";
import PopUpForm from "./PopUpForm";

function Home() {
  const organizationSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    url: "https://www.adiance.com/",
    name: "Adiance Technologies",
    logo: "https://www.adiance.com/images/Logo-241x47-1.png",
    email: "contact@adiance.com",
    telePhone: "+91 9687779999",
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "India",
        streetAddress:
          "7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Adiance Technologies",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      streetAddress:
        "Arista@Eight corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380054",
    },
    pricerange: "$$$",
    email: "contact@adiance.com",
    telePhone: "+91 9687779999",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:30-18:30",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.115852",
      longitude: "5.846040",
    },
    image: "https://www.adiance.com/images/Logo-241x47-1.png",
  };

  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Manufacturing & AI Innovation - Adiance Technologies</title>
        <meta
          name="description"
          content="Advanced solutions in Drone tech,Robotic Arms, AI CCTV, PCB, SMT, OEM & ODM services—innovation for security, automation, and manufacturing excellence."
        />
        <meta
          name="google-site-verification"
          content="ToZv5ontdwBZWArKbClqliVv4Zzduzs5-CbhZxgxaE4"
        />
        <link rel="canonical" href={canonicalUrl} />
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Header />
      {/* <IfsecModal /> */}
      {/* <PopUpForm /> */}

      <ImageSlider />
      {/* <ProductSlider /> */}
      <IconsWithTitles />
      <MidSection />
      <AutoplayCarousel />
      <Footer />
    </div>
  );
}

export default Home;
