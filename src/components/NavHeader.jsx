"use client";

import React from "react";

// Array of image URLs
const imageUrls = [
  // "/images/Adiance-Banner-001.webp",
  "/images/innovation-header.webp",
  "/images/product-header.webp",
  // "/images/Adiance-Banner-003.webp",
];

// Deterministic pick instead of Math.random(): a random image on every render
// caused an SSR/client hydration mismatch (server picks one image, the client
// re-render can pick another) and made the header image non-reproducible for
// testing. Hashing the page's own title text keeps the pick stable across
// server and client for a given page, while still varying page to page.
const getImageUrlFor = (text) => {
  if (!text) return imageUrls[0];
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return imageUrls[hash % imageUrls.length];
};

const NavHeader = ({ text }) => {
  const imageUrl = getImageUrlFor(text);

  return (
    <div className="nav-header">
      <img src={imageUrl} alt="Header" className="header-image" loading="eager" fetchpriority="high" decoding="async" width="1440" height="400" />
      {/* Checklist heading-hierarchy audit (2026-09-10): this was a plain <div>,
          meaning any page whose only visible title comes from <NavHeader> (Privacy
          Policy, Terms of Service, Warranty pages, etc.) shipped with NO <h1> at
          all. Now a real <h1>, same visual styling via .text-overlay. */}
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
