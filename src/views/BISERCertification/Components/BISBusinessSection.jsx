"use client";

import React from 'react';
import './BISBusinessSection.css';

const items = [
  {
    title: 'OEM Partners (Brands & Distributors)',
    desc: 'Launch your product line with compliant, ready-to-brand solutions and certification support.',
  },
  {
    title: 'ODM Clients (Custom Builds)',
    desc: 'Develop tailored products with compliance and certification built into the process.',
  },
  {
    title: 'System Integrators & Channel Partners',
    desc: 'Expand into private-label offerings without navigating certification complexity alone.',
  },
];

const BISBusinessSection = () => {
  return (
    <section
      className="bis-biz-section"
      style={{
        backgroundImage: [
          "url('/N_Images/businessModel-bg.jpg')"
        ].join(", ")
      }}
    >
      <div className="bis-biz-left">
        <h2 className="bis-biz-heading">
          Built for Every<br />Business Model
        </h2>
      </div>

      <div className="bis-biz-right">
        {items.map((item, i) => (
          <div key={i} className="bis-biz-item">
            <span className="bis-biz-check">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="13" fill="#4CAF50" />
                <path d="M7.5 13.5L11.5 17.5L18.5 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="bis-biz-text">
              <p className="bis-biz-title">{item.title}</p>
              <p className="bis-biz-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BISBusinessSection;
