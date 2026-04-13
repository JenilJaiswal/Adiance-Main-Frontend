import React from "react";
import "./HeroSection.css";

const badges = ["33 SKUs", "3MP & 5MP", "Bullet • Dome • PTZ • Indoor", "Made in India"];

function HeroSection() {
  return (
    <section className="eco-hero">
      <img
        src="/N_Images/Slider2.webp"
        alt="ECO Series CCTV Cameras"
        className="eco-hero-bg"
        fetchpriority="high"
        decoding="async"
        width="1440"
        height="800"
      />
      <div className="eco-hero-overlay" />
      <div className="eco-hero-content">
        <span className="eco-hero-badge">ECO Series</span>
        <h1 className="eco-hero-title">ECO Series Cameras</h1>
        <p className="eco-hero-description">
          Value-Engineered AI Surveillance — 33 SKUs Across Bullet, Dome, PTZ & Indoor
        </p>
        <div className="eco-hero-badges">
          {badges.map((b, i) => (
            <span key={i} className="eco-hero-pill">{b}</span>
          ))}
        </div>
        <div className="eco-hero-ctas">
          <a href="/contact" className="eco-hero-cta-primary">Request a Quote</a>
          <a href="/contact" className="eco-hero-cta-secondary">View Datasheet</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
