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

  const WebpageSchema = {"@context":"https://schema.org","@type":"WebPage","name":"AI CCTV Camera & Robotic Arm OEM-ODM Manufacturer - Adiance","description":"Leading OEM-ODM manufacturer of AI CCTV cameras & robotic arms. Adiance Technologies powers smart security and automation with innovation & precision.","url":"https://www.adiance.com/","datePublished":"2003-01-07","dateModified":"2025-09-15","publisher":{"@type":"Organization","name":"Adiance Technologies","url":"https://www.adiance.com/","logo":{"@type":"ImageObject","url":"https://www.adiance.com/images/Logo-241x47-1.png","width":205,"height":40},"sameAs":["https://www.facebook.com/adiancetechnologies/","https://www.instagram.com/adiancetech/","https://www.linkedin.com/company/adiancetechnologies/","https://x.com/adiancetech","https://www.youtube.com/@AdianceTechnologies"]},"primaryImageOfPage":{"@type":"ImageObject","url":"https://www.adiance.com/images/SCameraPageOG.jpg","width":1512,"height":800,"caption":"AI CCTV & Robotic Arm OEM-ODM Manufecturer"},"inLanguage":"en-US"}

  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
     <Helmet>
        <title>AI CCTV Camera & Robotic Arm OEM-ODM Manufacturer - Adiance</title>
        <meta
          name="description"
          content="Leading OEM-ODM manufacturer of AI CCTV cameras & robotic arms. Adiance Technologies powers smart security and automation with innovation & precision."
        />
        <meta
          name="google-site-verification"
          content="ToZv5ontdwBZWArKbClqliVv4Zzduzs5-CbhZxgxaE4"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Robots Meta Variants */}
        <meta name="robots" content="index, follow" />
        {/* <meta name="robots" content="index, nofollow" /> */}
        {/* <meta name="robots" content="noindex, follow" /> */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="AI CCTV Camera & Robotic Arm OEM-ODM Manufacturer - Adiance"
        />
        <meta
          property="og:description"
          content="Leading OEM-ODM manufacturer of AI CCTV cameras & robotic arms. Adiance Technologies powers smart security and automation with innovation & precision."
        />
        <meta
          property="og:image"
          content="https://www.adiance.com/images/SCameraPageOG.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta
          name="twitter:title"
          content="AI CCTV Camera & Robotic Arm OEM-ODM Manufacturer - Adiance"
        />
        <meta
          name="twitter:description"
          content="Leading OEM-ODM manufacturer of AI CCTV cameras & robotic arms."
        />
        <meta
          name="twitter:image"
          content="https://www.adiance.com/images/SCameraPageOG.jpg"
        />
        <meta name="twitter:url" content={canonicalUrl} />

        {/* Other Essentials */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify(WebpageSchema)}
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
      {/* <AutoplayCarousel /> */}
      <Footer />
    </div>
  );
}

export default Home;
