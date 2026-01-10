import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

const IfsecIndia2025 = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  const imageGallery1 = [
    { id: 1, src: "/images/IFSEC_carousel_1.png", alt: "IFSEC India 2025 - Booth Setup" },
    { id: 2, src: "/images/IFSEC_carousel_2.png", alt: "IFSEC India 2025 - Product Display" },
    { id: 3, src: "/images/IFSEC_carousel_3.png", alt: "IFSEC India 2025 - Visitor Engagement" },
    { id: 4, src: "/images/IFSEC_carousel_4.png", alt: "IFSEC India 2025" },

  ];

  const imageGallery2 = [
    { id: 5, src: "/images/IFSEC_gallery_1.png", alt: "IFSEC India 2025 - Team Interaction" },
    { id: 6, src: "/images/IFSEC_gallery_2.png", alt: "IFSEC India 2025 - Live Demo" },
    { id: 7, src: "/images/IFSEC_gallery_3.png", alt: "IFSEC India 2025 - Technology Showcase" }
  ];

  const handleDemoClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div>
      <Helmet>
        <title>Adiance Technologies Showcases ArcisAI at IFSEC India 2025</title>
        <meta 
          name="description" 
          content="At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations." 
        />
        <meta property="og:title" content="Adiance Technologies Showcases ArcisAI at IFSEC India 2025" />
        <meta 
          property="og:description" 
          content="At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations." 
        />
        <meta property="og:url" content="https://www.adiance.com/event/ifsec-india-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Adiance Technologies Showcases ArcisAI at IFSEC India 2025",
            "description": "At IFSEC India 2025, Adiance Technologies showcased ArcisAI's AI CCTV ecosystem, Eco-Series cameras, NVRs, ABD device, and cloud-ready VMS innovations.",
            "url": "https://www.adiance.com/event/ifsec-india-2025",
            "datePublished": "2025-12-14",
            "dateModified": "2025-12-14",
            "publisher": {
              "@type": "Organization",
              "name": "Adiance Technologies",
              "url": "https://www.adiance.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.adiance.com/images/Logo-241x47-1.png",
                "width": 205,
                "height": 40
              },
              "sameAs": [
                "https://www.facebook.com/adiancetechnologies/",
                "https://www.instagram.com/adiancetech/",
                "https://www.linkedin.com/company/adiancetechnologies/",
                "https://x.com/adiancetech",
                "https://www.youtube.com/@AdianceTechnologies"
              ]
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://www.adiance.com/images/ifsec-hero-image.jpg",
              "width": 1512,
              "height": 800,
              "caption": "Adiance Technologies at IFSEC India 2025"
            },
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>

      <Header />
      <NavHeader text={"IFSEC India 2025"} />

      <div className="ifsec-page">

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="hero-title">
                Adiance Technologies Showcases ArcisAI at IFSEC India 2025
              </h1>
              <p className="hero-description">
                At IFSEC India 2025, we proudly presented our flagship brand ArcisAI, demonstrating our Made-in-India OEM-ODM expertise in CCTV manufacturing. Held at Bharat Mandapam, New Delhi, from 11–13 December 2025, the event was the perfect platform to showcase our full AI CCTV ecosystem.
              </p>
              <p className="hero-description">
                Visitors experienced our EdgeAI cameras, CloudAI solutions, smart STQC cloud VMS, ArcisGPT AI assistant, enterprise-grade NVRs and Arcis Bridging Device (ABD). Our solutions highlighted how businesses can achieve smarter monitoring, proactive threat detection and advanced analytics, all backed by our robust OEM-ODM capabilities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Section 1 - Continuous Scrolling */}
      <section className="image-gallery-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-title">Image Gallery</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="continuous-scroll-container">
                <div className="continuous-scroll-track">
                  {/* First set of images */}
                  {imageGallery1.map((image) => (
                    <div key={`first-${image.id}`} className="scroll-item">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="scroll-image"
                        onError={(e) => {
                          e.target.src = "/images/placeholder-gallery.jpg";
                        }}
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {imageGallery1.map((image) => (
                    <div key={`second-${image.id}`} className="scroll-item">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="scroll-image"
                        onError={(e) => {
                          e.target.src = "/images/placeholder-gallery.jpg";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Three Days Section */}
      <section className="three-days-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">Three Days of Innovation, Engagement & AI Surveillance at IFSEC India 2025</h2>
              <p className="section-description">
                Over the three days, our booth was buzzing with system integrators, distributors, enterprise visitors, and technology enthusiasts. Attendees explored how our AI-powered CCTV systems enhance security, reduce response times, and deliver actionable insights.
              </p>
              <p className="section-description">
                The exhibition gave us the opportunity to show the growing need for advanced, India-made surveillance solutions that cater to homes, retail spaces, campuses, factories, and warehouses. Through live demonstrations and interactive discussions, visitors understood how our solutions combine intelligence, reliability, and flexibility to meet diverse security requirements.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Complete Range Section */}
      <section className="complete-range-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">Exploring the Complete ArcisAI Surveillance Range</h2>
              <p className="section-description">
                At the event, we presented the full ArcisAI lineup, highlighting both our product innovation and OEM expertise. Attendees experienced our S-Series EdgeAI cameras, Eco-Series models, and the complete Dome, Bullet, PTZ, and Baby PTZ range in 3MP and 5MP variants.
              </p>
              <p className="section-description">
                Our NVR solutions demonstrated high-performance recording and seamless AI event management. Live EdgeAI demos showed real-time detections processed directly on the cameras, while CloudAI analytics displayed actionable insights across multiple locations.
              </p>
              <p className="section-description">
                ArcisGPT drew strong attention as a conversational AI assistant, transforming traditional CCTV systems into interactive security solutions. Visitors also explored our STQC-certified cloud VMS, which allows centralized control, AI alerts, playback, and multi-location device management. The Arcis Bridging Device showed how existing third-party cameras can integrate into the ArcisAI ecosystem without replacing hardware, providing businesses with a practical upgrade path.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Innovations Section */}
      <section className="innovations-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">New Innovations We Introduced at IFSEC India 2025</h2>
              <p className="section-description">
                During the event, we unveiled new additions designed to provide more intelligent, unified, and scalable monitoring. Our upgraded NVRs allow longer-duration recording and smooth AI event handling, while the new Eco-Series cctv cameras and compact Baby PTZ models offer flexible deployment options.
              </p>
              <p className="section-description">
                The ABD integration device attracted particular interest, demonstrating how businesses can seamlessly upgrade existing CCTV setups to AI-powered surveillance. Together, these enhancements reinforced our position as a leading Indian OEM delivering end-to-end smart surveillance solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Landmark Moment Section */}
      <section className="landmark-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">Why IFSEC India 2025 Was a Landmark Moment for Adiance</h2>
              <p className="section-description">
                IFSEC India 2025 marked an important milestone for Adiance Technologies. The event highlighted our ability to combine AI innovation with Made-in-India OEM expertise. Visitors recognized how our ArcisAI cameras, NVRs, and cloud systems provide smarter monitoring, faster responses, and reliable analytics.
              </p>
              <p className="section-description">
                The exhibition strengthened our position as one of the <strong>top AI CCTV technology providers in India</strong> and showcased our commitment to delivering scalable, future-ready security solutions across industries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Section 2 */}
      <section className="image-gallery-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-title">Moments from IFSEC India 2025</h2>
            </Col>
          </Row>
          <Row className="gallery-row">
            {imageGallery2.map((image) => (
              <Col lg={4} md={4} sm={6} xs={12} key={image.id} className="gallery-col">
                <div className="gallery-item">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                    onError={(e) => {
                      e.target.src = "/images/placeholder-gallery.jpg";
                    }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="cta-title">Book a Demo and Experience India's Most Advanced AI CCTV Solutions</h2>
              <Button 
                variant="primary" 
                className="cta-btn"
                onClick={handleDemoClick}
                size="lg"
              >
                Schedule a Demo
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .ifsec-page {
          font-family: 'Arial', sans-serif;
        }

        .hero-section {
          padding: 100px 0 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 30px;
          line-height: 1.2;
          text-align:left;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #5a6c7d;
          line-height: 1.7;
          margin-bottom: 20px;
          text-align: justify;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 30px;
          position: relative;
          text-align:left;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: #dc3545;
        }

        .section-description {
          font-size: 1.1rem;
          color: #5a6c7d;
          line-height: 1.7;
          margin-bottom: 20px;
          text-align: justify;
        }

        .section-description strong {
          color: #dc3545;
          font-weight: 700;
        }

        .image-gallery-section {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .image-gallery-section:nth-of-type(even) {
          background-color: #f8f9fa;
        }

        /* Continuous Scrolling Styles */
        .continuous-scroll-container {
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .continuous-scroll-track {
          display: flex;
          width: calc(400px * 8); /* 4 images × 2 sets × 400px each */
          animation: continuousScroll 20s linear infinite;
        }

        .scroll-item {
          flex-shrink: 0;
          width: 400px;
          height: 300px;
          margin-right: 20px;
        //   border-radius: 15px;
          overflow: hidden;
        //   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .scroll-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .scroll-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        @keyframes continuousScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 4 - 80px)); /* Move by 4 images + margins */
          }
        }

        /* Pause animation on hover */
        .continuous-scroll-container:hover .continuous-scroll-track {
          animation-play-state: paused;
        }

        .gallery-row {
          margin-top: 50px;
        }

        .gallery-col {
          margin-bottom: 30px;
        }

        .gallery-item {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #ffffff;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .gallery-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }

        .three-days-section,
        .complete-range-section,
        .innovations-section,
        .landmark-section {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .complete-range-section,
        .landmark-section {
          background-color: #f8f9fa;
        }

        .cta-section {
          padding: 100px 0;
          background: #dc3545;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 40px;
          line-height: 1.2;
        }

        .cta-btn {
          background: white;
          color: #dc3545;
          border: none;
          padding: 15px 40px;
          font-weight: 1000;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-btn:hover {
          background: #f8f9fa;
          color: #c82333;
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-description {
            font-size: 1rem;
            text-align: left;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .section-description {
            font-size: 1rem;
            text-align: left;
          }

          .gallery-image {
            height: 200px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-btn {
            padding: 12px 30px;
            font-size: 1rem;
          }

          .continuous-scroll-track {
            width: calc(300px * 8);
            animation-duration: 16s;
          }

          .scroll-item {
            width: 300px;
            height: 250px;
            margin-right: 15px;
          }

          @keyframes continuousScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-300px * 4 - 60px));
            }
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 80px 0 60px 0;
          }

          .hero-title {
            font-size: 1.8rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .three-days-section,
          .complete-range-section,
          .innovations-section,
          .landmark-section,
          .image-gallery-section {
            padding: 60px 0;
          }

          .cta-section {
            padding: 80px 0;
          }

          .cta-title {
            font-size: 1.6rem;
          }

          .gallery-image {
            height: 180px;
          }

          .continuous-scroll-track {
            width: calc(250px * 8);
            animation-duration: 14s;
          }

          .scroll-item {
            width: 250px;
            height: 200px;
            margin-right: 10px;
          }

          @keyframes continuousScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 4 - 40px));
            }
          }
        }
      `}</style>
      </div>

      <Footer />
    </div>
  );
};

export default IfsecIndia2025;