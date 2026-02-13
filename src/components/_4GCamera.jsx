import React, { useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import ThermalCameraSlider from "./ThermalCameraSlider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import _4GCameraSlider from "./_4GCameraSlider";
import { useLocation } from "react-router-dom";

const ThermalCamera = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bf0603",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <title>4G FHD Security Camera | Remote Surveillance Solution</title>
          <meta
            name="description"
            content="4G FHD Security Camera with seamless connectivity, HD clarity, real-time alerts & easy setup. Ideal for remote locations, parking lots & outdoor security"
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Header />
        <NavHeader text={"4G Camera"} />
        <div className="thermal-camera-container">
          {/* <Typography variant="h5" gutterBottom>
            <strong>
              Experience unparalleled security coverage with Adiance's
              innovative 3G/4G Cloud CCTV Security Camera. Designed for outdoor
              and remote locations, this camera offers seamless surveillance
              with 3G/4G connectivity, ensuring reliable monitoring even in
              areas with limited or no WiFi access.
            </strong>
          </Typography> */}

          {/* <Typography variant="h4" gutterBottom style={{ marginTop: "5%" }}>
          <strong>
            Thermal Camera Manufacturers for Body Temperature Screening, Get
            valuable insights from image and video results using Smart AI
            Analytics
          </strong>
        </Typography> */}

          <Typography variant="body1">
            <br />
            <br />
            Experience unparalleled security with the Adiance 4G FHD Security
            Camera, your ultimate surveillance solution for remote locations and
            parking lots. Engineered to thrive in areas with limited WiFi
            access, this cutting-edge camera harnesses the power of 4G-LTE and
            3G networks, ensuring seamless connectivity wherever you go. With
            its built-in SIM card slot, you can count on uninterrupted coverage,
            making it perfect for outdoor environments where traditional systems
            fall short.
            <br />
            <br />
            Gone are the days of complex setups and wiring headaches. The
            Adiance camera streamlines installation with its plug-and-play
            design, eliminating the need for NVR/DVR systems. Enjoy the freedom
            to focus on what truly matters – protecting your property with ease
            and efficiency. Its Full HD resolution guarantees crisp, clear
            footage, providing you with the assurance that every detail is
            captured with precision.
            <br /> <br />
            Stay one step ahead of potential threats with smart motion alerts
            that deliver real-time notifications directly to your smartphone or
            device. Whether you're monitoring a construction site, a parking
            lot, or a remote property, you can trust the Adiance camera to keep
            you informed, no matter where you are. Invest in peace of mind and
            embrace security that knows no bounds with the Adiance 4G FHD
            Security Camera.
          </Typography>

          <div style={{ margin: "5%" }}>
            <_4GCameraSlider />
          </div>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "5%" }}
          >
            <Grid item xs={12}>
              <div>
                {/* Tab Buttons */}
                <Button
                  onClick={() => handleTabClick("benefits")}
                  variant={activeTab === "benefits" ? "contained" : "outlined"}
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: activeTab === "benefits" ? "primary.main" : "",
                  }}
                >
                  Benefits
                </Button>
                <Button
                  onClick={() => handleTabClick("features")}
                  variant={activeTab === "features" ? "contained" : "outlined"}
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: activeTab === "features" ? "primary.main" : "",
                  }}
                >
                  Features
                </Button>
                <Button
                  onClick={() => handleTabClick("applications")}
                  variant={
                    activeTab === "applications" ? "contained" : "outlined"
                  }
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: activeTab === "applications" ? "primary.main" : "",
                  }}
                >
                  Applications
                </Button>
                <Button
                  onClick={() => handleTabClick("specifications")}
                  variant={
                    activeTab === "specifications" ? "contained" : "outlined"
                  }
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor:
                      activeTab === "specifications" ? "primary.main" : "",
                  }}
                >
                  Technical Specifications
                </Button>
                <Button
                  onClick={() => handleTabClick("setup")}
                  variant={activeTab === "setup" ? "contained" : "outlined"}
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: activeTab === "setup" ? "primary.main" : "",
                  }}
                >
                  Setup
                </Button>
              </div>
            </Grid>
            {/* Display Active Tab Content */}
            {activeTab === "benefits" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Precision Security</li>
                    <li>Immersive Clarity</li>
                    <li>Real time Alerts</li>
                    <li>Streamlined Operations</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "features" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Edge AI Technology</li>
                    <li>Facial Recognition</li>
                    <li>High Resolution Video</li>
                    <li>H.265+ Compression</li>
                    <li>Dome Design</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "applications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Access Control</li>
                    <li>Retail Analytics</li>
                    <li>Crowd Management</li>
                    <li>Facility Security</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "specifications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Resolution: 4K (3840×2160)</li>
                    <li> Frame Rate: 30 fps</li>
                    <li> Video Compression: H.265+</li>
                    <li>
                      {" "}
                      AI Features: Facial Recognition, ANPR Detection, Object
                      Detection, Intrusion Detection
                    </li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "setup" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Install the dome camera in a secure location with a clear
                  view. Then, connect the camera to power and your network using
                  the included cables. Next, configure the camera's settings and
                  AI features through the user-friendly software. For accurate
                  identification with facial recognition, finetune the settings.
                  Finally, test the camera and make adjustments to optimize its
                  performance.
                </Typography>
              </Grid>
            )}
          </Grid>

          <style jsx>{`
            .thermal-camera-container {
              margin: 5% 10%;
            }
            .features-list {
              margin-top: 20px;
              padding-left: 20px;
            }
          `}</style>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ThermalCamera;
