"use client";

import React from 'react';
import './BISHeroSection.css';

const BISHeroSection = () => {
  return (
    <section className="bis-hero-section" style={{ position: 'relative', width: '100%', maxWidth: '1518px', margin: '0 auto', overflow: 'hidden' }}>
      <picture style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <source media="(max-width: 768px)" srcSet="/N_Images/bis-mobile-bg.png" />
        <img
          src="/N_Images/BIS_ER_bg.jpg"
          alt="BIS-ER Certified ArcisAI Cameras"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          loading="eager"
        />
      </picture>

      <div className="overlay-bis" />

      <div className="bis-slide-wrapper">
        <div className="bis-slide-right">
          <h1 className="bis-slide-heading">
            BIS-ER Certified by<br />STQC Certification
          </h1>
          <p className="bis-slide-subheading">Ready for Your Brand</p>
          <p className="bis-slide-desc">
            Adiance enables you to launch fully compliant CCTV and surveillance
            products in India—under your own brand.
          </p>
          <div className="bis-slide-badges">
            <picture>
              <source media="(max-width: 768px)" srcSet="/N_Images/bis-icon-mobile.svg" />
              <img
                src="/N_Images/bis-icon.svg"
                alt="BIS-ER Certificate"
                className="bis-icon-img"
              />
            </picture>
          </div>
          {/* <a href="/bis-er-certification" className="bis-slide-cta">Explore More</a> */}
        </div>
      </div>
    </section>
  );
};

export default BISHeroSection;
