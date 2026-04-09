import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ThermalCameraSlider = () => {
  const products = [
    {
      id: 1,
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72F210AC)",
      imageUrl:
        "/images/P2-VMUKTI-CLOUD-BASED-THERMAL-CAMERA-VM-72F210AC-01.webp",
      link: "/adiance-thermal-camera-f",
    },
    {
      id: 2,
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72N210AC)",
      imageUrl:
        "/images/P1-VMUKTI-CLOUD-BASED-THERMAL-CAMERA-VM-72N210AC-01.webp",
      link: "/adiance-thermal-camera-n",
    },
    // Add more products as needed
    {
      id: 3,
      title: "ADIANCE CLOUD BASED THERMAL CAMERA – (VM-72L210AC)",
      imageUrl: "/images/Vmukti-Thermal-Camera-New-1.webp",
      link: "/adiance-thermal-camera-l",
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

export default ThermalCameraSlider;
