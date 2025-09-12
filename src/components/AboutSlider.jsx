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
        Our Products
      </h2>

      <Grid
        container
        spacing={2}
        padding="4% 8%"
        marginRight={{ base: "5%", md: "0" }} // Corrected syntax
      >
        {/* Product 1 */}
        <Grid item xs={12} sm={6} md={3}>
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
              onMouseEnter={() => setHovered0(true)}
              onMouseLeave={() => setHovered0(false)}
            >
              <img
                // src="/images/P6-Edge-AI-Based-PTZ-ANPR-Bullet-Camera-VM-72BPTZ5AIVE-01.png"
                src="/images/CCTV_01.png"
                alt="Product Image"
                style={{
                  maxWidth: getMaxWidth(),
                  height: "auto",
                  transition: "transform 0.3s",
                  transform: hovered0 ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>
            <div style={{ marginTop: "2%" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                A Series
              </h3>
              <Link to="/3mp-4g-bullet-all-time-color-camera-a-series">
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
        </Grid>

        {/* Product 2 */}
        <Grid item xs={12} sm={6} md={3}>
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
                // src="/images/P9-AMBICAM-4g-dome-camera-VM-72AD4G210C-02.png"
                src="/images/CCTV_04.png"
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
        </Grid>

        {/* Product 3 */}
        <Grid item xs={12} sm={6} md={3}>
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
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img
                src="/images/CCTV_02.png"
                alt="Product Image"
                style={{
                  maxWidth: getMaxWidth(),
                  height: "auto",
                  transition: "transform 0.3s",
                  transform: hovered2 ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>
            <div style={{ marginTop: "2%" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                S Series
              </h3>
              <Link to="/5g-edge-ai-camera-s-series-surveillance">
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
        </Grid>

        {/* Product 4 */}
        <Grid item xs={12} sm={6} md={3}>
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
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <img
                // src="images/P25-Edge-AI-Based-Object-Face-Detection-Cameras-VM-72B5AIVE-02-1.png"
                src="/images/CCTV_03.png"
                alt="Product Image"
                style={{
                  maxWidth: getMaxWidth(),
                  height: "auto",
                  transition: "transform 0.3s",
                  transform: hovered3 ? "scale(1.1)" : "scale(1)",
                }}
              />
            </div>
            <div style={{ marginTop: "2%" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                R Series
              </h3>
              <Link to="/r-series">
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
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSlider;
