"use client";

import React from 'react';
import './BISGatewaySection.css';

const checkItems = [
  'BIS-ER compliance aligned with STQC certification',
  'Eligibility for government and regulated deployments',
  'Confidence in enterprise-grade security requirements',
];

const BISGatewaySection = () => {
  return (
    <section className="bis-gw-section">

      {/* ── Top header: title + subtitle ── */}
      <div className="bis-gw-header">
        <h2 className="bis-gw-title">Compliance Is the Gateway to Market Access</h2>
        <p className="bis-gw-subtitle">
          In India, surveillance products must meet strict regulatory standards.
        </p>
      </div>

      {/* ── Bottom: camera bg image with overlaid content ── */}
      <div
        className="bis-gw-body"
        style={{ backgroundImage: "url('/N_Images/GatewaytoMarketAccess_bg.png')" }}
      >
        {/* BIS + STQC certification badge */}
        <div className="bis-gw-icon-wrap">
          <img
            src="/N_Images/bis_icon.svg"
            alt="BIS-ER Certified by STQC"
            className="bis-gw-icon"
            loading="lazy"
          />
        </div>

        {/* Left text content */}
        <div className="bis-gw-content">
          <p className="bis-gw-para">
            Adiance ensures you're not just manufacturing—but entering the market the right way:
          </p>

          <ul className="bis-gw-list">
            {checkItems.map((item, i) => (
              <li key={i} className="bis-gw-item">
                <span className="bis-gw-check">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#4CAF50" />
                    <path d="M6 11.5L9.5 15L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bis-gw-tagline">
            <p>Compliance isn't a hurdle when it's built into your product from day one.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BISGatewaySection;
