import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AboutSlider = () => {
  const [hovered0, setHovered0] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const getMaxWidth = () => {
    return window.innerWidth > 2000
      ? window.innerWidth > 2500
        ? "30%"
        : "40%"
      : window.innerWidth > 600
      ? "70%"
      : "40%";
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "5%",
          marginBottom: "2%",
        }}
      >
        Explore Our Product Line
      </h2>

      <Grid
        container
        spacing={2}
        padding="4% 8%"
        marginRight={{ base: "5%", md: "0" }} // Corrected syntax
      >

        {/* Product 2 */}
        {/* <Grid item xs={12} sm={6} md={3} style={{ display: "none" }}>
          <div
            style={{
              background: "linear-gradient(35deg, #e6e6e6 50%, #bf120f 50%)",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
              margin: "4%",
              width: "100%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
                flex: "1 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <img
                // src="/images/P9-AMBICAM-4g-dome-camera-VM-72AD4G210C-02.webp"
                src="/images/CCTV_04.webp"
                alt="Product Image"
                style={{
                  maxWidth: getMaxWidth(),
                  height: "auto",
                  transition: "transform 0.3s",
                  transform: hovered1 ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>
            <div style={{ marginTop: "2%" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                H Series
              </h3>
              <Link to="/h-series">
                <button
                  style={{
                    backgroundColor: "#242424",
                    color: "#fff",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </Grid> */}

        {/* S Series only (clickable image) */}
        <Grid item xs={12}>
          <div
            style={{
              background: "transparent",
              padding: 0,
              borderRadius: "10px",
              boxSizing: "border-box",
              margin: "2% 0",
              width: "100%",
              height: "auto",
              display: "block",
            }}
          >
            <div
            style={{
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
                width: "100%",
              }}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <Link to="/5g-edge-ai-camera-s-series-surveillance" style={{ display: "inline-block", width: "100%" }}>
                <img
                  src="images/S-series cameras.webp"
                  alt="S-series cameras"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    transition: "transform 0.3s",
                    transform: hovered2 ? "scale(1.01)" : "scale(1)",
                    borderRadius: "6px",
                  }}
                />
              </Link>
            </div>
            {/* Title and button removed per request to show only image */}
          </div>
        </Grid>

      </Grid>
    </>
  );
};

export default AboutSlider;
