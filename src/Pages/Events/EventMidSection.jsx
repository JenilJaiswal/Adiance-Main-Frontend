import { useState, useEffect } from "react";
import CTASection from "../../N_Component/CTASection";
import "./EventMidSection.css";

const pastEventLogos = [
  { name: "IFSEC",          logo: "/images/IFSEC_logo.png" },
  { name: "Semicon India",  logo: "/images/semicon-india-logo.png" },
  { name: "SmartTech Asia", logo: "/images/smarttech-asia-logo.png" },
];

const ifsecEventImages = [
  { id: 1, src: "/images/event_carousel_1.png", alt: "IFSEC India 2025 - Adiance booth showcase" },
  { id: 3, src: "/images/event_carousel_3.png", alt: "IFSEC India 2025 - Team interactions" },
  { id: 4, src: "/images/event_carousel_4.png", alt: "IFSEC India 2025 - Technology display" },
];


const EventMidSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? ifsecEventImages.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === ifsecEventImages.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="event-mid-hero-section">
        <img
          src="/images/Adiance-Banner-001.jpg"
          alt="Adiance at Industry Events"
          className="event-mid-hero-bg"
        />
        <div className="event-mid-hero-overlay">
          <div className="event-mid-hero-content">
            <h1 className="event-mid-hero-title">Events</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="event-mid-intro-section">
        <div className="event-mid-container">
          <div className="event-mid-section-header">
            <h1 className="event-mid-section-title">
              Collaborating Better, Stronger and Across Industries
            </h1>
            <p className="event-mid-section-desc">
              We actively participate in major OEM/ODM, CCTV manufacturing, and security
              technology exhibitions to connect with brands, system integrators, distributors,
              and global hardware partners. These platforms help us demonstrate our Made-in-India
              manufacturing strength, showcase our OEM/ODM capabilities, and build long-term
              partnerships with businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS ────────────────────────────────────── */}
      <section className="event-mid-logos-section">
        <div className="event-mid-container">
          <div className="event-mid-section-header">
            <h2 className="event-mid-section-title">Events We've Been Part Of</h2>
          </div>
          <div className="event-mid-logos-grid">
            {pastEventLogos.map((event, idx) => (
              <div key={idx} className="event-mid-logo-card">
                <img
                  src={event.logo}
                  alt={`${event.name} logo`}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS ──────────────────────────────────────── */}
      <section className="event-mid-past-section">
        <div className="event-mid-section-header">
          <h2 className="event-mid-section-title">A Glimpse into Past Events</h2>
        </div>

        {/* Carousel */}
        <div
          className="event-mid-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="event-mid-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {ifsecEventImages.map((image) => (
              <div key={image.id} className="event-mid-carousel-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => { e.target.src = "/images/ifsec-event.jpg"; }}
                />
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="event-mid-progress-bar">
            <div
              className="event-mid-progress-fill"
              style={{
                width: `${((currentIndex + 1) / ifsecEventImages.length) * 100}%`,
              }}
            />
          </div>

          {/* Bottom-right navigation buttons */}
          <div className="event-mid-nav-btns">
            <button className="event-mid-nav-btn" onClick={prev} aria-label="Previous">
              <img src="/N_Images/left_direction.svg" alt="Previous" loading="lazy" />
            </button>
            <button className="event-mid-nav-btn" onClick={next} aria-label="Next">
              <img src="/N_Images/right_direction.svg" alt="Next" loading="lazy" />
            </button>
          </div>
        </div>

        {/* Event info bar */}
        <div className="event-mid-info-bar">
          <div className="event-mid-info-inner">
            <div className="event-mid-info-logo">
              <img
                src="/images/IFSEC_logo.png"
                alt="IFSEC India Logo"
                loading="lazy"
                width="600"
                height="400"
                onError={(e) => { e.target.src = "/images/Logo.png"; }}
              />
            </div>
            <div className="event-mid-info-text">
              <h3 className="event-mid-info-title">IFSEC India 2025</h3>
              <p className="event-mid-info-desc">
                At IFSEC India 2025, Adiance Technologies and its flagship brand ArcisAI
                showcased our Made-in-India OEM-ODM expertise. Our booth highlighted the full
                AI CCTV range along with OEM/ODM services, PCB assembly, and hardware
                customization.
              </p>
            </div>
            <a href="/event/ifsec-india-2025" className="event-mid-info-btn">
              More Event Details
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTASection
        title="Build Your Next CCTV Product Line with Adiance"
        description="Start Your Manufacturing Journey with India's Leading OEM/ODM Partner"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default EventMidSection;
