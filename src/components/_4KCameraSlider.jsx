import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const _4KCameraSlider = () => {
  const products = [
    {
      id: 1,
      title: "Edge AI Based PTZ ANPR Bullet Camera",
      imageUrl: [
        "/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-02.webp",
      ],
      link: "/4k-bullet-anpr-ptz-camera",
    },
    {
      id: 2,
      title: "Edge AI Based Face Recognition Dome Camera",
      imageUrl: [
        "/images/P5-Edge-AI-Based-Face-Recognition-VM-72D5AIVE-01-1.webp",
      ],
      link: "/4k-face-recognition-camera",
    },
    {
      id: 3,
      title: "Edge AI Based Object & Face Detection Cameras",
      imageUrl: [
        "/images/P4-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-01.webp",
      ],
      link: "/edge-ai-based-object-n-face-detection-cameras",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust columns based on available space
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
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{
                  height: "200px", // Adjusted height to fit container
                  width: "200px", // Take full width
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
