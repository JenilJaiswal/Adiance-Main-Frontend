"use client";

import React from 'react';
import './BISOEMSection.css';

const checkItems = [
  'BIS-ER Certified Hardware aligned with STQC standards',
  'Customizable products, firmware, and branding',
  'End-to-end certification support for your brand',
  'Designed for government, enterprise, and channel markets',
  'Reliable, high-volume manufacturing',
];

const BISOEMSection = () => {
  return (
    <section className="bisoem-section">

      {/* ── Left panel ── */}
      <div className="bisoem-left">

        {/* Background SVG — rotated, low opacity */}
        <img
          src="/N_Images/bg.png"
          alt=""
          className="bisoem-bg-svg"
          aria-hidden="true"
        />

        {/* ODM banner — top */}
        <div className="bisoem-banner bisoem-banner-top">
          <span>ODM</span>
        </div>

        {/* Top camera — exploded view */}
        <img
          src="/N_Images/OEM_CCTV.webp"
          alt="ODM Camera Manufacturing"
          className="bisoem-cam bisoem-cam-top"
          loading="lazy"
        />

        {/* OEM banner — sits behind bottom camera */}
        <div className="bisoem-banner bisoem-banner-bottom">
          <span>OEM</span>
        </div>

        {/* Bottom camera — overlaps OEM banner */}
        <img
          src="/N_Images/OEM_Hero_Right_2.svg"
          alt="OEM Your Brand Camera"
          className="bisoem-cam bisoem-cam-bottom"
          loading="lazy"
        />

      </div>

      {/* ── Right panel ── */}
      <div className="bisoem-right">
        <h2 className="bisoem-heading">
          OEM / ODM Built Around<br />Compliance and Scale
        </h2>

        <ul className="bisoem-list">
          {checkItems.map((item, i) => (
            <li key={i} className="bisoem-item">
              <span className="bisoem-check">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="11" fill="#4CAF50" />
                  <path d="M6 11.5L9.5 15L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="bisoem-tagline">
          Everything you need to build, certify, and scale your surveillance
          portfolio—through a single partner.
        </p>
      </div>

    </section>
  );
};

export default BISOEMSection;
