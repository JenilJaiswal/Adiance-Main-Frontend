"use client";

import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@/compat/react-router-dom";

const _4KCameraSlider = () => {
  const products = [
    {
      id: 1,
      title: "AMBICAM 4G Dome PTZ Camera (VM-72BPTZ410AC)",
      imageUrl: ["/images/PTZ.webp"],
      link: "/4g-dome-ptz-camera",
    },
    {
      id: 2,
      title: "AMBICAM 4G Mini Bullet Camera (VM-72H4G110AC)",
      imageUrl: ["/images/adiance-4g-camera.webp"],
      link: "/4g-mini-bullet-camera",
    },
    {
      id: 3,
      title: "AMBICAM 4G Dome Camera (VM-72AD4G210C)",
      imageUrl: ["/images/P9-AMBICAM-4g-dome-camera-VM-72AD4G210C-02.webp"],
      link: "/4g-dome-camera",
    },
    {
      id: 3,
      title: "AMBICAM H.265+ 4G Dome PTZ Camera (VM-72BPTZ410AC)",
      imageUrl: ["/images/P7-AMBICAM-4g-dome-ptz-camera-VM-72BPTZ410AC-02.webp"],
      link: "/h265-4g-dome-ptz-camera",
    },
  ];

  return (
    <div
      style={{
        margin: "20px",
        width: "100%", // Set a fixed width for the container
        maxWidth: "1200px", // Set maximum width if needed
        margin: "0 auto", // Center the container horizontally
      }}
    >
      <div
        className="products-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", // Adjust columns based on available space
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            to={product.link}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
                height: "375px",
              }}
            >
              <center>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    height: "200px", // Adjusted height to fit container
                    width: "auto", // Take full width
                    transition: "transform 0.3s",
                    //   objectFit: "cover", // Ensure the image covers the container
                    marginLeft: "20%",
                    marginTop: "15%",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </center>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default _4KCameraSlider;
