import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Globalnetwork from "./patnerPage-components/Globalnetwork";

const EventMidSection = () => {
  const pastEventLogos = [
    { name: "IFSEC", logo: "/images/IFSEC_logo.png" },
    { name: "Semicon India", logo: "/images/semicon-india-logo.png" },
    { name: "SmartTech Asia", logo: "/images/smarttech-asia-logo.png" }
  ];

  const ctaData = {
    title: "Build Your Next CCTV Product Line with",
    highlight: "Adiance",
    description: "Start Your Manufacturing Journey with India's Leading OEM/ODM Partner"
  };

  // IFSEC Event Images for Carousel
  const ifsecEventImages = [
    {
      id: 1,
      src: "/images/event_carousel_1.png",
      alt: "IFSEC India 2025 - Adiance booth showcase"
    },
    {
      id: 2,
      src: "/images/event_carousel_2.png", 
      alt: "IFSEC India 2025 - Product demonstration"
    },
    {
      id: 3,
      src: "/images/event_carousel_3.png",
      alt: "IFSEC India 2025 - Team interactions"
    },
    {
      id: 4,
      src: "/images/event_carousel_4.png",
      alt: "IFSEC India 2025 - Technology display"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === ifsecEventImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [ifsecEventImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="event-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="hero-title">
                Collaborating Better, Stronger and Across Industries
              </h1>
              <p className="hero-description">
                We actively participate in major OEM/ODM, CCTV manufacturing, and security 
                technology exhibitions to connect with brands, system integrators, distributors, 
                and global hardware partners. These platforms help us demonstrate our Made-in-India 
                manufacturing strength, showcase our OEM/ODM capabilities, and build long-term 
                partnerships with businesses across industries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Past Event Logos Section */}
      <section className="past-events-logos">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="logos-grid">
                {pastEventLogos.map((event, idx) => (
                  <div key={idx} className="logo-item">
                    <img 
                      src={event.logo} 
                      alt={`${event.name} logo`}
                      className="event-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Past Events Details Section */}
      <section className="past-events-details">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-title">A Glimpse into Past Events</h2>
            </Col>
          </Row>
        </Container>
        
        {/* Full Screen Width Container */}
        <div className="full-screen-event-container">
          {/* Image Carousel */}
          <div className="full-width-carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-slides-container"
                style={{
                  transform: `translateX(-${currentImageIndex * 25}%)`
                }}
              >
                {ifsecEventImages.map((image) => (
                  <div
                    key={image.id}
                    className="carousel-slide"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="carousel-image"
                      onError={(e) => {
                        e.target.src = "/images/ifsec-event.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
                
              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                {ifsecEventImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{
                    width: `${((currentImageIndex + 1) / ifsecEventImages.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content Directly Below - Full Width */}
          <div className="event-content-full-width">
            <Container>
              <Row className="align-items-center">
                <Col lg={2} md={2} sm={3} xs={12} className="logo-col">
                  <div className="event-logo-container">
                    <img 
                      src="/images/IFSEC_logo.png" 
                      alt="IFSEC India Logo"
                      className="event-logo-below"
                      onError={(e) => {
                        e.target.src = "/images/Logo.png";
                      }}
                    />
                  </div>
                </Col>
                <Col lg={8} md={8} sm={7} xs={12} className="description-col">
                  <div className="event-description-container">
                    <p className="event-description-below">
                      At IFSEC India 2025, Adiance Technologies and its flagship brand ArcisAI showcased our Made-in-India OEM-ODM expertise under the ArcisAI × Adiance identity. Our booth highlighted the full AI CCTV range - Dome, Bullet, PTZ - along with OEM/ODM services, PCB assembly, and hardware customization, reflecting our commitment to delivering world-class CCTV solutions.
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={2} sm={2} xs={12} className="button-col">
                  <div className="event-button-container">
                    <Button 
                      variant="primary" 
                      className="event-btn-below"
                      href="/event/ifsec-india-2025"
                    >
                      More Event Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Globalnetwork data={ctaData} />

      <style jsx>{`
        .event-page {
          font-family: 'Arial', sans-serif;
        }

        .hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #5a6c7d;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .past-events-logos {
          padding: 60px 0;
          background-color: #ffffff;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 50px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #dc3545;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          align-items: center;
          justify-items: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .logo-item {
          padding: 30px;
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #ffffff;
          width: 100%;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .event-logo {
          transform: scale(2);
        }

        .event-logo {
          max-width: 200px;
          max-height: 100px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .past-events-details {
          padding: 80px 0 0 0;
          background-color: #f8f9fa;
        }

        /* Full Screen Event Container */
        .full-screen-event-container {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
        }

        /* Content Full Width */
        .event-content-full-width {
          background: rgba(0, 0, 0, 0.8);
          padding: 25px 0;
          width: 100%;
        }

        .past-events-details .row {
          margin: 0;
        }

        .past-events-details .col-12 {
          padding: 0;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 50px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #dc3545;
        }

        /* Unified Container Styles */
        .unified-event-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        /* Full Width Carousel Styles */
        .full-width-carousel-container {
          position: relative;
          width: 100%;
          margin-bottom: 0;
          border-radius: 0;
          overflow: hidden;
          box-shadow: none;
        }

        /* Content Attached Styles */
        .event-content-attached {
          background: rgba(0, 0, 0, 0.8);
          padding: 25px 20px;
          margin: 0;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .carousel-slides-container {
          display: flex;
          width: 400%;
          height: 100%;
          transition: transform 0.8s ease-in-out;
          will-change: transform;
        }

        .carousel-slide {
          width: 25%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 10;
        }

        .indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.3);
        }

        .indicator.active {
          background: #dc3545;
          border-color: #dc3545;
          box-shadow: 0 0 15px rgba(220, 53, 69, 0.6);
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 10;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #dc3545, #c82333);
          transition: width 0.3s ease;
          box-shadow: 0 0 15px rgba(220, 53, 69, 0.6);
        }

        /* Content Below Image Styles */
        .event-content-row {
          margin-top: 40px;
        }

        .event-info-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.1);
          position: relative;
          overflow: hidden;
        }

        .event-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #dc3545, #c82333);
        }

        .event-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .event-logo-section {
          flex-shrink: 0;
        }

        .event-brand-logo {
          max-width: 120px;
          max-height: 70px;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .event-title-section {
          flex-grow: 1;
          text-align: center;
        }

        .event-title-main {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #2c3e50, #dc3545);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .event-date-badge {
          display: inline-block;
          background: linear-gradient(135deg, #dc3545, #c82333);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
        }

        .event-action-section {
          flex-shrink: 0;
        }

        .event-cta-btn {
          background: linear-gradient(135deg, #dc3545, #c82333);
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(220, 53, 69, 0.3);
        }

        .event-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(220, 53, 69, 0.4);
          background: linear-gradient(135deg, #c82333, #bd2130);
        }

        .event-description-section {
          margin-bottom: 30px;
        }

        .event-description-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #5a6c7d;
          text-align: justify;
          margin: 0;
        }

        .event-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          background: rgba(220, 53, 69, 0.05);
          border-radius: 12px;
          border-left: 4px solid #dc3545;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          background: rgba(220, 53, 69, 0.1);
          transform: translateX(5px);
        }

        .highlight-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #dc3545, #c82333);
          border-radius: 50%;
          color: white;
          flex-shrink: 0;
        }

        .highlight-item span {
          font-weight: 600;
          color: #2c3e50;
          font-size: 0.95rem;
        }

        /* Content Below Image Styles - Remove all margins and gaps */
        .event-content-below-row {
          margin-top: 0;
          margin-bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          padding: 25px 20px;
          border-radius: 0 0 20px 20px;
          align-items: center;
        }

        .logo-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .event-logo-container {
          background: white;
          padding: 15px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(1.4);
        }

        .event-logo-below {
          max-width: 80px;
          max-height: 50px;
          object-fit: contain;
        }

        .description-col {
          padding-left: 20px;
          padding-right: 20px;
        }

        .event-description-container {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .event-description-below {
          color: white;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          text-align: justify;
        }

        .button-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .event-button-container {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .event-btn-below {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 0.9rem;
        }

        .event-btn-below:hover {
          background: white;
          color: #2c3e50;
          transform: translateY(-2px);
        }

        .event-content {
          padding-left: 40px;
        }

        .event-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .event-description {
          font-size: 1rem;
          color: #5a6c7d;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .event-details-btn {
          padding: 12px 30px;
          font-weight: 500;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .event-details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.6rem;
          }

          .logos-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            max-width: 400px;
          }

          .logo-item {
            height: 120px;
            padding: 20px;
          }

          .event-logo {
            max-width: 180px;
            max-height: 80px;
          }

          .carousel-wrapper {
            height: 350px;
          }

          .carousel-slides-container {
            transition: transform 0.6s ease-in-out;
          }

          .carousel-indicators {
            bottom: 20px;
            gap: 10px;
          }

          .indicator {
            width: 12px;
            height: 12px;
          }

          .event-info-card {
            padding: 30px 25px;
          }

          .event-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .event-title-main {
            font-size: 1.8rem;
          }

          .event-description-text {
            font-size: 1rem;
            text-align: left;
          }

          .event-highlights {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .highlight-item {
            padding: 12px 15px;
          }

          .highlight-icon {
            width: 35px;
            height: 35px;
            font-size: 1.3rem;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 60px 0;
          }

          .past-events-logos,
          .past-events-details {
            padding: 50px 0;
          }

          .logos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .carousel-wrapper {
            height: 280px;
          }

          .carousel-slides-container {
            transition: transform 0.5s ease-in-out;
          }

          .full-width-carousel-container {
            border-radius: 15px 15px 0 0;
            margin-bottom: 0;
          }

          .event-content-below-row {
            padding: 15px 10px;
            border-radius: 0 0 15px 15px;
          }

          .event-logo-below {
            max-width: 60px;
            max-height: 40px;
          }

          .event-description-below {
            font-size: 0.85rem;
          }

          .carousel-indicators {
            bottom: 15px;
            gap: 8px;
          }

          .indicator {
            width: 10px;
            height: 10px;
          }

          .event-info-card {
            padding: 25px 20px;
          }

          .event-content-simple {
            padding: 30px 20px;
          }

          .event-content-below-row {
            flex-direction: column;
            text-align: center;
            padding: 20px 15px;
          }

          .logo-col {
            margin-bottom: 15px;
          }

          .description-col {
            padding-left: 0;
            padding-right: 0;
            margin-bottom: 15px;
          }

          .event-description-below {
            text-align: center;
            font-size: 0.9rem;
          }

          .event-btn-below {
            font-size: 0.85rem;
            padding: 8px 16px;
          }

          .event-title-main {
            font-size: 1.6rem;
          }

          .event-date-badge {
            font-size: 0.8rem;
            padding: 6px 15px;
          }

          .event-cta-btn {
            padding: 10px 25px;
            font-size: 0.9rem;
          }

          .event-description-text {
            font-size: 0.95rem;
          }

          .event-highlights {
            margin-top: 20px;
          }

          .highlight-item {
            padding: 10px 12px;
          }

          .highlight-icon {
            width: 30px;
            height: 30px;
            font-size: 1.1rem;
          }

          .highlight-item span {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EventMidSection;