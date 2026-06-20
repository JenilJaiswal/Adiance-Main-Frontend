"use client";

import React from "react";

const ImageGallery = () => {
  // Array of image paths
  const imagePaths = [
    "images/adiance-factory-008.webp",
    "images/adiance-factory-006.webp",
    "images/adiance-factory-002.webp",
    "images/adiance-factory-005.webp",
    "images/adiance-factory-007.webp",
    "images/adiance-factory-004.webp",
  ];

  return (
    <div className="image-gallery">
      <h2 className="gallery-title">CCTV Manufacturing Service</h2>
      <div className="image-grid">
        {imagePaths.map((path, index) => (
          <div className="image-item" key={index}>
            <img src={path} alt={`Image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .image-gallery {
          max-width: 800px;
          margin: 5% auto;
        }

        .gallery-title {
          text-align: center;
          font-size: 36px;
          margin-bottom: 12%;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
        }

        .image-item img {
          width: 100%;
          border-radius: 10px;
          max-height: 200px; /* Increase the size of images */
        }

        @media screen and (max-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
            margin: 5%; /* Change to 2 columns on smaller screens */
          }

          .gallery-title {
            font-size: 24px; /* Reduce the size of the title for smaller screens */
            margin-bottom: 4%; /* Adjust margin for the title */
          }

          .image-item img {
            max-height: 120px; /* Reduce the size of images for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
