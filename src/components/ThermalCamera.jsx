import React, { useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import ThermalCameraSlider from "./ThermalCameraSlider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
          <title>Thermal Camera Solutions - AI-Powered Fever Detection</title>
          <meta
            name="description"
            content="Thermal cameras with AI analytics detect fever and elevated body temperatures in real-time, ensuring safety in airports, offices, and healthcare facilities."
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Header />
        <NavHeader text={"Thermal Camera"} />
        <div className="thermal-camera-container">
          <Typography variant="h5" gutterBottom>
            <strong>
              Thermal Scanning View of Multiperson + Fever Detection Icon +
              Title Over the Image "Seeing Beyond the Visible from image & Video
              using AI Analytics"
            </strong>
          </Typography>

          {/* <Typography variant="h4" gutterBottom style={{ marginTop: "5%" }}>
          <strong>
            Thermal Camera Manufacturers for Body Temperature Screening, Get
            valuable insights from image and video results using Smart AI
            Analytics
          </strong>
        </Typography> */}

          <Typography variant="body1">
            <br />
            In an era where health and safety are paramount concerns,{" "}
            <b>
              the integration of cutting-edge technology becomes imperative.
            </b>{" "}
            Thermal camera technology emerges as a frontline solution, offering
            a seamless blend of innovation and precision in body temperature
            screening. Through the lens of these sophisticated devices, we
            unlock a realm of insights, transcending the visible spectrum to
            safeguard public health.
            <br />
            <br />
            <b>
              With the ability to detect elevated body temperatures swiftly and
              accurately, thermal cameras serve as vigilant sentinels in diverse
              environments. From bustling airports to corporate offices and
              healthcare facilities, these devices provide an invaluable layer
              of protection against potential health threats. Leveraging the
              power of AI analytics, they not only detect febrile individuals
              but also offer actionable data insights for informed
              decision-making.
            </b>
            <br />
            <br />
            At the heart of this transformative technology lies the synergy
            between thermal imaging and AI analytics. By amalgamating advanced
            algorithms with thermal scanning capabilities, these cameras enhance
            efficiency and reliability in fever detection.{" "}
            <b>
              Real-time monitoring becomes seamless, empowering stakeholders to
              proactively address health concerns and mitigate risks
              effectively.
            </b>
            The significance of thermal camera manufacturers in this landscape
            cannot be overstated. Pioneering companies drive innovation forward,
            continually refining and advancing thermal imaging solutions to meet
            evolving needs. With a commitment to excellence, they enable
            seamless integration of thermal cameras into existing
            infrastructures, fostering a safer and healthier environment for
            all.
          </Typography>

          <div style={{ margin: "5%" }}>
            <ThermalCameraSlider />
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
                    <li>Enhanced Safety</li>
                    <li>Seamless Integration</li>
                    <li>Realtime Insights</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "features" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Body Temperature Detection</li>
                    <li>Mask Detection</li>
                    <li>Social Distancing Monitoring</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "applications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Public Spaces</li>
                    <li>Workplace Safety</li>
                    <li>Healthcare Facilities</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "specifications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>High-Resolution</li>
                    <li>Thermal Imaging</li>
                    <li>AI Analytics</li>
                    <li>Cloud Connectivity</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "setup" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  For optimal performance, first, mount your thermal camera
                  strategically to maximize coverage. Then, use the intuitive
                  software to configure settings. Connect the camera to the
                  cloud for data transmission and storage.
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
