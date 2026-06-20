"use client";

import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CTASection from "../../N_Component/CTASection";
import "./IfsecIndia2025.css";

const IfsecIndia2025 = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const imageGallery1 = [
    { id: 1, src: "/images/IFSEC_carousel_1.webp", alt: "IFSEC India 2025 - Booth Setup" },
    { id: 2, src: "/images/IFSEC_carousel_2.webp", alt: "IFSEC India 2025 - Product Display" },
    { id: 3, src: "/images/IFSEC_carousel_3.webp", alt: "IFSEC India 2025 - Visitor Engagement" },
    { id: 4, src: "/images/IFSEC_carousel_4.webp", alt: "IFSEC India 2025" },
  ];

  const imageGallery2 = [
    { id: 5, src: "/images/IFSEC_gallery_1.webp", alt: "IFSEC India 2025 - Live Demo" },
    { id: 6, src: "/images/IFSEC_gallery_2.webp", alt: "IFSEC India 2025 - Team Interaction" },
    { id: 7, src: "/images/IFSEC_gallery_3.webp", alt: "IFSEC India 2025 - Technology Showcase" },
  ];

  return (
    <div>
      <Helmet>
        <title>Adiance Technologies Unveils ArcisAI Innovation at IFSEC India 2025</title>
        <meta
          name="description"
          content="At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Adiance Technologies Unveils ArcisAI Innovation at IFSEC India 2025" />
        <meta
          property="og:description"
          content="At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations."
        />
        <meta property="og:image" content="https://www.adiance.com/images/IFSEC_carousel_1.webp" />
        <meta property="og:url" content="https://www.adiance.com/event/ifsec-india-2025" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Adiance Technologies Unveils ArcisAI Innovation at IFSEC India 2025" />
        <meta
          name="twitter:description"
          content="At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations."
        />
        <meta name="twitter:image" content="https://www.adiance.com/images/ifsec-hero-image.webp" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Adiance Technologies Unveils ArcisAI Innovation at IFSEC India 2025",
            "description": "At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations.",
            "url": "https://www.adiance.com/event/ifsec-india-2025",
            "datePublished": "2026-01-12",
            "dateModified": "2026-01-12",
            "publisher": {
              "@type": "Organization",
              "name": "Adiance Technologies",
              "url": "https://www.adiance.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.adiance.com/images/Logo-241x47-1.webp",
                "width": 205,
                "height": 40,
              },
              "sameAs": [
                "https://www.facebook.com/adiancetechnologies/",
                "https://www.instagram.com/adiancetech/",
                "https://www.linkedin.com/company/adiancetechnologies/",
                "https://x.com/adiancetech",
                "https://www.youtube.com/@AdianceTechnologies",
              ],
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://www.adiance.com/images/ifsec-hero-image.webp",
              "width": 1512,
              "height": 800,
              "caption": "Adiance Technologies at IFSEC India 2025",
            },
            "inLanguage": "en-US",
          })}
        </script>
      </Helmet>

      <Header />

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <section className="ifsec-hero-section">
        <img
          src="/N_Images/ifsec_event_home_main.webp"
          alt="Adiance Technologies at IFSEC India 2025"
          className="ifsec-hero-bg"
        />
        <div className="ifsec-hero-overlay">
          <div className="ifsec-hero-content">
            <h1 className="ifsec-hero-title">
              Adiance Technologies Showcases ArcisAI at IFSEC India 2025
            </h1>
            <p className="ifsec-hero-description">
              At IFSEC India 2025, we proudly presented our flagship brand ArcisAI, demonstrating
              our Made-in-India OEM-ODM expertise in CCTV manufacturing. Held at Bharat Mandapam,
              New Delhi, from 11–13 December 2025, the event was the perfect platform to showcase
              our full AI CCTV ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── SCROLL IMAGE GALLERY ─────────────────────────────── */}
      <section className="ifsec-scroll-gallery-section">
        <div className="ifsec-section-header ifsec-container">
          <h2 className="ifsec-section-title">Image Gallery</h2>
        </div>
        <div className="ifsec-scroll-container">
          <div className="ifsec-scroll-track">
            {imageGallery1.map((image) => (
              <div key={`a-${image.id}`} className="ifsec-scroll-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="ifsec-scroll-image"
                  onError={(e) => { e.target.src = "/images/placeholder-gallery.webp"; }}
                />
              </div>
            ))}
            {imageGallery1.map((image) => (
              <div key={`b-${image.id}`} className="ifsec-scroll-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="ifsec-scroll-image"
                  onError={(e) => { e.target.src = "/images/placeholder-gallery.webp"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE DAYS OF INNOVATION ─────────────────────────── */}
      <section className="ifsec-content-section">
        <div className="ifsec-container">
          <div className="ifsec-section-header">
            <h2 className="ifsec-section-title">
              Three Days of Innovation, Engagement & AI Surveillance
            </h2>
          </div>
          <p className="ifsec-section-description">
            Over the three days, our booth was buzzing with system integrators, distributors,
            enterprise visitors, and technology enthusiasts. Attendees explored how our AI-powered
            CCTV systems enhance security, reduce response times, and deliver actionable insights.
          </p>
          <p className="ifsec-section-description">
            The exhibition gave us the opportunity to show the growing need for advanced,
            India-made surveillance solutions that cater to homes, retail spaces, campuses,
            factories, and warehouses. Through live demonstrations and interactive discussions,
            visitors understood how our solutions combine intelligence, reliability, and flexibility
            to meet diverse security requirements.
          </p>
        </div>
      </section>

      {/* ── COMPLETE RANGE ───────────────────────────────────── */}
      <section className="ifsec-content-section ifsec-bg-gray">
        <div className="ifsec-container">
          <div className="ifsec-section-header">
            <h2 className="ifsec-section-title">
              Exploring the Complete ArcisAI Surveillance Range
            </h2>
          </div>
          <p className="ifsec-section-description">
            At the event, we presented the full ArcisAI lineup, highlighting both our product
            innovation and OEM expertise. Attendees experienced our S-Series EdgeAI cameras,
            Eco-Series models, and the complete Dome, Bullet, PTZ, and Baby PTZ range in 3MP and
            5MP variants.
          </p>
          <p className="ifsec-section-description">
            Our NVR solutions demonstrated high-performance recording and seamless AI event
            management. Live EdgeAI demos showed real-time detections processed directly on the
            cameras, while CloudAI analytics displayed actionable insights across multiple locations.
          </p>
          <p className="ifsec-section-description">
            ArcisGPT drew strong attention as a conversational AI assistant, transforming
            traditional CCTV systems into interactive security solutions. Visitors also explored our
            STQC-certified cloud VMS, which allows centralized control, AI alerts, playback, and
            multi-location device management. The Arcis Bridging Device showed how existing
            third-party cameras can integrate into the ArcisAI ecosystem without replacing
            hardware, providing businesses with a practical upgrade path.
          </p>
        </div>
      </section>

      {/* ── NEW INNOVATIONS ──────────────────────────────────── */}
      <section className="ifsec-content-section">
        <div className="ifsec-container">
          <div className="ifsec-section-header">
            <h2 className="ifsec-section-title">
              New Innovations We Introduced at IFSEC India 2025
            </h2>
          </div>
          <p className="ifsec-section-description">
            During the event, we unveiled new additions designed to provide more intelligent,
            unified, and scalable monitoring. Our upgraded NVRs allow longer-duration recording and
            smooth AI event handling, while the new Eco-Series CCTV cameras and compact Baby PTZ
            models offer flexible deployment options.
          </p>
          <p className="ifsec-section-description">
            The ABD integration device attracted particular interest, demonstrating how businesses
            can seamlessly upgrade existing CCTV setups to AI-powered surveillance. Together, these
            enhancements reinforced our position as a leading Indian OEM delivering end-to-end smart
            surveillance solutions.
          </p>
        </div>
      </section>

      {/* ── LANDMARK MOMENT ──────────────────────────────────── */}
      <section className="ifsec-content-section ifsec-bg-gray">
        <div className="ifsec-container">
          <div className="ifsec-section-header">
            <h2 className="ifsec-section-title">
              Why IFSEC India 2025 Was a Landmark Moment for Adiance
            </h2>
          </div>
          <p className="ifsec-section-description">
            IFSEC India 2025 marked an important milestone for Adiance Technologies. The event
            highlighted our ability to combine AI innovation with Made-in-India OEM expertise.
            Visitors recognized how our ArcisAI cameras, NVRs, and cloud systems provide smarter
            monitoring, faster responses, and reliable analytics.
          </p>
          <p className="ifsec-section-description">
            The exhibition strengthened our position as one of the{" "}
            <a href="https://www.adiance.com/">top AI CCTV technology providers in India</a> and
            showcased our commitment to delivering scalable, future-ready security solutions across
            industries.
          </p>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────────── */}
      <section className="ifsec-photo-grid-section">
        <div className="ifsec-container">
          <div className="ifsec-section-header">
            <h2 className="ifsec-section-title">Moments from IFSEC India 2025</h2>
          </div>
          <div className="ifsec-photo-grid">
            {imageGallery2.map((image) => (
              <div key={image.id} className="ifsec-photo-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => { e.target.src = "/images/placeholder-gallery.webp"; }}
                />
                <div className="ifsec-photo-overlay">
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Book a Demo and Experience India's Most Advanced AI CCTV Solutions"
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default IfsecIndia2025;
