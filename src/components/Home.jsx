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
import Certifications from "./Certifications";
import OurOfferings from "./OurOfferings";
import InnovationHome from "./InnovationHome";
import SseriesCamera from "./s-series-page/SseriesCamera";
import FaqsSection from "./faqsSection";
import faqsData from "./faqsData";
import Achieved from "./Achieved";
import BlogView from "./BlogView";
import Testimonials from "./s-series-page/Testimonials";

function Home() {
  const organizationSchema = { "@context": "http://schema.org", "@type": "Organization", "name": "Adiance Technologies", "url": "https://www.adiance.com", "logo": "https://www.adiance.com/images/Logo-241x47-1.png", "contactPoint": { "@type": "ContactPoint", "telephone": "+91 9687779999", "email": "contact@adiance.com", "contactType": "Sales", "areaServed": "Global" }, "sameAs": ["https://www.facebook.com/adiancetechnologies", "https://www.linkedin.com/company/adiancetechnologies", "https://x.com/adiancetech", "https://www.instagram.com/adiancetech/", "https://youtube.com/@adiancetechnologies"], "address": { "@type": "PostalAddress", "streetAddress": "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "380054", "addressCountry": "IN" }, "foundingDate": "2003", "description": "Searching for for a reliable CCTV camera manufacturing company in India? Adiance Technologies provides CCTV cameras, NVRs, cloud VMS and custom OEM/ODM electronics solutions." };

  const FAQSchema = { "@context": "https://schema.org", "@type": "FAQPage", "url": "https://www.adiance.com", "mainEntity": [{ "@type": "Question", "name": "Who is the best OEM CCTV camera manufacturer in India?", "acceptedAnswer": { "@type": "Answer", "text": "Many brands search for reliable OEM partners from India. Adiance Technologies is one of the companies offering large-scale CCTV camera manufacturing with PCB design, firmware development, and hardware engineering under one roof." } }, { "@type": "Question", "name": "How do I choose the right ODM partner for electronics or CCTV cameras?", "acceptedAnswer": { "@type": "Answer", "text": "When choosing an ODM partner, look for in-house R&D, PCB assembly capabilities, firmware engineering, testing labs, certification support, and scalable production capacity. Adiance Technologies provides all these capabilities." } }, { "@type": "Question", "name": "How long does it take to develop a custom CCTV camera or IoT device?", "acceptedAnswer": { "@type": "Answer", "text": "Development time depends on the product complexity but typically ranges from 4 to 12 weeks, including design, prototyping, testing, and pre-production stages." } }, { "@type": "Question", "name": "Which Indian company offers end-to-end electronics manufacturing?", "acceptedAnswer": { "@type": "Answer", "text": "Adiance Technologies is an Indian electronics manufacturing company offering end-to-end services including PCB design, SMT assembly, CCTV camera manufacturing, robotics hardware development, and turnkey electronics production." } }, { "@type": "Question", "name": "How much does OEM CCTV camera manufacturing cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "OEM CCTV camera manufacturing cost in India varies based on components, image sensors, chipset selection, AI requirements, and order volume. Indian manufacturers generally offer competitive pricing compared to China." } }] };

  const WebpageSchema = { "@context": "https://schema.org", "@type": "WebPage", "name": "Best CCTV Camera Manufacturer In India  - OEM & ODM CCTV Company", "description": "Are you looking for a reliable CCTV manufacturing company in India? Adiance provides AI CCTV cameras, NVRs, cloud VMS and custom OEM/ODM electronics solutions.", "url": "https://www.adiance.com", "datePublished": "2003-01-07", "dateModified": "2025-12-31", "publisher": { "@type": "Organization", "name": "Adiance Technologies", "url": "https://www.adiance.com", "logo": { "@type": "ImageObject", "url": "https://www.adiance.com/images/Logo-241x47-1.png", "width": 205, "height": 40 }, "sameAs": ["https://www.facebook.com/adiancetechnologies", "https://www.linkedin.com/company/adiancetechnologies", "https://x.com/adiancetech", "https://www.instagram.com/adiancetech/", "https://youtube.com/@adiancetechnologies"] }, "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.adiance.com/images/slider1.png", "width": 1440, "height": 800, "caption": "India's Leading CCTV Camera Manufacturer" }, "inLanguage": "en-US" }

  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Best CCTV Camera Manufacturer In India  - OEM & ODM CCTV Company</title>
        <meta
          name="description"
          content="Are you looking for a reliable CCTV manufacturing company in India? Adiance provides AI CCTV cameras, NVRs, cloud VMS and custom OEM/ODM electronics solutions."
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
          content="Best CCTV Camera Manufacturer In India  - OEM & ODM CCTV Company"
        />
        <meta
          property="og:description"
          content="Are you looking for a reliable CCTV manufacturing company in India? Adiance provides AI CCTV cameras, NVRs, cloud VMS and custom OEM/ODM electronics solutions."
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
          content="Best CCTV Camera Manufacturer In India  - OEM & ODM CCTV Company"
        />
        <meta
          name="twitter:description"
          content="Are you looking for a reliable CCTV manufacturing company in India? Adiance provides AI CCTV cameras, NVRs, cloud VMS and custom OEM/ODM electronics solutions."
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
          {JSON.stringify(FAQSchema)}
        </script>
      </Helmet>
      <Header />
      {/* <IfsecModal /> */}
      {/* <PopUpForm /> */}

      <ImageSlider />
      {/* <ProductSlider /> */}
      {/* <IconsWithTitles /> */}
      <MidSection />
      <Certifications />
      <InnovationHome type="service" />
      <OurOfferings />
      <Achieved />
      <BlogView />
      {/*  */}
      <Testimonials />
      <SseriesCamera
        title="Start Your OEM/ODM Project With Adiance — Connect With Our Engineering Team"
        buttonText="Start Your Project"
        subTitle={null}
      />
      <FaqsSection faqsList={faqsData.home} />
      <Footer />
    </div>
  );
}

export default Home;
