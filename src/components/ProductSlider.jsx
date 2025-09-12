import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      id: 1,
      title: "4G Camera",
      imageUrl: "/images/4g-camera-768x768.jpg",
      link: "/4gcamera",
    },
    {
      id: 2,
      title: "Edge AI Camera",
      imageUrl: "/images/Edge-AI-Camera-768x768.jpg",
      link: "/edgeaicamera",
    },
    {
      id: 3,
      title: "ANPR Camera",
      imageUrl: "/images/ANPR-Camera-768x768.jpg",
      link: "/anpr-camera",
    },
    {
      id: 4,
      title: "Thermal Camera",
      imageUrl: "/images/Thermal-Camera-768x768.jpg",
      link: "/thermal-camera",
    },
    {
      id: 5,
      title: "Cloud XVR",
      imageUrl: "/images/XVR-768x768.jpg",
      link: "/cloudxvr",
    },
    {
      id: 6,
      title: "4K Camera",
      imageUrl: "/images/4k-Camera-768x768.jpg",
      link: "/4kcamera",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "5%",
        marginLeft: "10%",
      }}
      className="product-slider-container"
    >
      <AliceCarousel
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        dotsDisabled={false} // Enable dots
      >
        {products.map((product, index) => (
          <div key={product.id}>
            <div
              className="product-image-container"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <Link to={product.link} className="product-title">
                  {product.title}
                </Link>
              )}
            </div>
          </div>
        ))}
      </AliceCarousel>
      <style>
        {`
          .product-image-container {
            position: relative;
            width: 300px;
            height: 300px;
            background-size: cover;
            background-position: center;
          }

          .product-image-container img {
            width: 100%;
            height: 100%;
            margin: 0 5px; // Adjusted margin to reduce space between images
          }

          .product-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 10px;
            background: rgba(0, 0, 0, 0.7); /* Grey background with opacity */
            color: white;
            font-size: 24px;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s; /* Added transition for opacity and transform */
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: bold;
            text-decoration: none; /* Remove underline */
          }

          .product-image-container:hover .product-title {
            opacity: 1;
            transform: translateY(0); /* Smooth transition for transform property */
          }

          .alice-carousel__prev-btn,
          .alice-carousel__next-btn {
            display: none;
          }

          .alice-carousel__dots {
            transform: translateX(-60px); // Move dots 20px to the left
          }

          @media screen and (min-width: 450px) and (max-width: 750px) {
            .product-slider-container {
                marginTop: "40%",
                marginLeft: "30%",
            }
        `}
      </style>
    </div>
  );
};

export default ProductSlider;
