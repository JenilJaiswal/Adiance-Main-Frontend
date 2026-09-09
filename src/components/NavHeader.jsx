"use client";

import React from "react";

// Array of image URLs
const imageUrls = [
  // "/images/Adiance-Banner-001.webp",
  "/images/innovation-header.webp",
  "/images/product-header.webp",
  // "/images/Adiance-Banner-003.webp",
];

// Deterministic pick from `text` (a simple string hash) instead of
// Math.random(): this component now renders on the server (see the
// dynamic-import ssr fix across ClientPage.jsx files), and Math.random()
// picking a different image on the server vs. the client on hydration was a
// React hydration mismatch on every page that renders <NavHeader>.
const getImageUrlFor = (text) => {
  const key = String(text || "");
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % imageUrls.length;
  return imageUrls[index];
};

const NavHeader = ({ text }) => {
  const randomImageUrl = getImageUrlFor(text);

  return (
    <div className="nav-header">
      <img src={randomImageUrl} alt="Header" className="header-image" loading="eager" fetchpriority="high" decoding="async" width="1440" height="400" />
      {/*
        This banner is the visual page title on every page that uses it, but
        was a plain <div> — so ~40 pages (product pages, industry pages,
        legal pages, /about, /contact, /blog, /partners...) had no <h1> tag
        at all in their HTML. NavHeader is used exactly once per page
        (verified — no page renders it twice, and no page that uses it has
        its own separate <h1> elsewhere), so making this an <h1> gives every
        one of those pages a single, correct page-title heading at once.
      */}
      <h1 className="text-overlay">{text}</h1>

      <style jsx>{`
        .nav-header {
          position: relative;
          width: 100%;
          max-width: 100%;
        }

        .header-image {
          width: 100%;
          height: auto; /* Set height to auto to maintain aspect ratio */
          max-height: 400px; /* Limit maximum height */
        }

        .text-overlay {
          position: absolute;
          top: 50%;
          left: 10%; /* Adjust text position from the left */
          transform: translateY(-50%);
          color: white; /* Text color */
          font-size: 36px; /* Text font size */
          font-weight: bold; /* Text font weight */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow */
          width: 30%;
        }

        @media screen and (max-width: 835px) {
          .text-overlay {
            font-size: 14px; /* Adjust font size for smaller screens */
            // width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default NavHeader;
