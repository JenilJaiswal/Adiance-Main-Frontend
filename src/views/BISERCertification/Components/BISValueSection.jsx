"use client";

import React from 'react';
import './BISValueSection.css';

const checkItems = [
  'Support for BIS-ER & STQC certification under your brand',
  'Scalable, India-focused manufacturing',
  'White-label, compliance-ready products',
  'Faster go-to-market with reduced regulatory friction',
];

const BISValueSection = () => {
  return (
    <section className="bis-value-section">
      <div className="bis-value-left">
        <p className="bis-value-text">
          From certified manufacturing to guiding you through certification
          under your brand, we simplify the entire journey to market.
        </p>
      </div>

      <div className="bis-value-right">
        <ul className="bis-value-list">
          {checkItems.map((item, i) => (
            <li key={i} className="bis-value-item">
              <span className="bis-check-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="11" fill="#4CAF50" />
                  <path d="M6 11.5L9.5 15L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="bis-value-tagline">
          Bring products to market without delays—fully compliant and brand-ready.
        </p>
      </div>
    </section>
  );
};

export default BISValueSection;
