"use client";

import React from 'react'
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";
import Header from '../../components/Header/Header'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import Home_mid from './Home_Mid/Home_mid'
import Footer from '../../components/Footer/Footer'
import Home_Slider from './Home_Slider/Home_Slider';
const organizationSchema = { "@context": "http://schema.org", "@type": "Organization", "name": "Adiance Technologies", "url": "https://www.adiance.com", "logo": "https://www.adiance.com/images/Logo.webp", "contactPoint": { "@type": "ContactPoint", "telephone": "+91 9687779999", "email": "contact@adiance.com", "contactType": "Sales", "areaServed": "Global" }, "sameAs": ["https://www.facebook.com/adiancetechnologies", "https://www.linkedin.com/company/adiancetechnologies", "https://x.com/adiancetech", "https://www.instagram.com/adiancetech/", "https://youtube.com/@adiancetechnologies"], "address": { "@type": "PostalAddress", "streetAddress": "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "380054", "addressCountry": "IN" }, "foundingDate": "2003", "description": "Adiance Technologies is an NDAA compliant OEM camera manufacturer in India. We provide white-label CCTV cameras, AI-powered surveillance solutions, NVRs, cloud VMS, and custom OEM/ODM/JDM electronics manufacturing services for global markets." };

const FAQSchema = { "@context": "https://schema.org", "@type": "FAQPage", "url": "https://www.adiance.com", "mainEntity": [{ "@type": "Question", "name": "Who is the best OEM CCTV camera manufacturer in India?", "acceptedAnswer": { "@type": "Answer", "text": "Many brands search for reliable OEM partners from India. Adiance Technologies is one of the companies offering large-scale CCTV camera manufacturing with PCB design, firmware development, and hardware engineering under one roof." } }, { "@type": "Question", "name": "How do I choose the right ODM partner for electronics or CCTV cameras?", "acceptedAnswer": { "@type": "Answer", "text": "When choosing an ODM partner, look for in-house R&D, PCB assembly capabilities, firmware engineering, testing labs, certification support, and scalable production capacity. Adiance Technologies provides all these capabilities." } }, { "@type": "Question", "name": "How long does it take to develop a custom CCTV camera or IoT device?", "acceptedAnswer": { "@type": "Answer", "text": "Development time depends on the product complexity but typically ranges from 4 to 12 weeks, including design, prototyping, testing, and pre-production stages." } }, { "@type": "Question", "name": "Which Indian company offers end-to-end electronics manufacturing?", "acceptedAnswer": { "@type": "Answer", "text": "Adiance Technologies is an Indian electronics manufacturing company offering end-to-end services including PCB design, SMT assembly, CCTV camera manufacturing, robotics hardware development, and turnkey electronics production." } }, { "@type": "Question", "name": "How much does OEM CCTV camera manufacturing cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "OEM CCTV camera manufacturing cost in India varies based on components, image sensors, chipset selection, AI requirements, and order volume. Indian manufacturers generally offer competitive pricing compared to China." } }] };

const WebpageSchema = { "@context": "https://schema.org", "@type": "WebPage", "name": "NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance", "description": "Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets.", "url": "https://www.adiance.com", "datePublished": "2003-01-07", "dateModified": "2025-12-31", "publisher": { "@type": "Organization", "name": "Adiance Technologies", "url": "https://www.adiance.com", "logo": { "@type": "ImageObject", "url": "https://www.adiance.com/images/Logo.webp", "width": 205, "height": 40 }, "sameAs": ["https://www.facebook.com/adiancetechnologies", "https://www.linkedin.com/company/adiancetechnologies", "https://x.com/adiancetech", "https://www.instagram.com/adiancetech/", "https://youtube.com/@adiancetechnologies"] }, "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.adiance.com/images/slider1.webp", "width": 1440, "height": 800, "caption": "India's Leading CCTV Camera Manufacturer" }, "inLanguage": "en-US" }

const WebSiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "name": "Adiance Technologies", "url": "https://www.adiance.com", "potentialAction": { "@type": "SearchAction", "target": "https://www.adiance.com/blog?q={search_term_string}", "query-input": "required name=search_term_string" } };

const Home = () => {
    const location = useLocation(); // Get the current route
    const canonicalUrl = `https://www.adiance.com${location.pathname}`;

    return (
        <div className="home-container">
            <Helmet>
                <title>NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance</title>
                <meta
                    name="description"
                    content="Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets."
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
                    content="NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance"
                />
                <meta
                    property="og:description"
                    content="Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets."
                />
                <meta
                    property="og:image"
                    content="https://www.adiance.com/images/SCameraPageOG.webp"
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
                    content="NDAA Compliant OEM Camera Manufacturer | White Label CCTV | Adiance"
                />
                <meta
                    name="twitter:description"
                    content="Adiance is an NDAA compliant OEM camera manufacturer in India. White-label CCTV, AI-powered surveillance, and custom security solutions for US/global markets."
                />
                <meta
                    name="twitter:image"
                    content="https://www.adiance.com/images/SCameraPageOG.webp"
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
                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(FAQSchema)}
                </script>
                {/* WebSite Schema (for sitelinks search box) */}
                <script type="application/ld+json">
                    {JSON.stringify(WebSiteSchema)}
                </script>
            </Helmet>
            <Header />
            <Home_Slider />
            <WhatWeDo />
            <Home_mid />
            <Footer />
            
            <style jsx>{`
                .home-container {
                    overflow-x: hidden;
                    width: 100%;
                    max-width: 100vw;
                }
                
                /* Global overflow control */
                :global(html) {
                    overflow-x: hidden;
                }
                
                :global(body) {
                    overflow-x: hidden;
                    max-width: 100vw;
                }
            `}</style>
        </div>
    )
}

export default Home