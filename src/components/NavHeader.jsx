import React from "react";

// Array of image URLs
const imageUrls = [
  // "/images/Adiance-Banner-001.webp",
  "/images/innovation-header.webp",
  "/images/product-header.webp",
  // "/images/Adiance-Banner-003.webp",
];

const getRandomImageUrl = () => {
  // Generate a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};

const NavHeader = ({ text }) => {
  // Get a random image URL
  const randomImageUrl = getRandomImageUrl();

  return (
    <div className="nav-header">
      <img src={randomImageUrl} alt="Header" className="header-image" />
      <div className="text-overlay">{text}</div>

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
