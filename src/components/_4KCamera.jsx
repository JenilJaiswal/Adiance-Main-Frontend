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
import _4KCameraSlider from "./_4KCameraSlider";
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
          <title>Adiance 4K UHD AI Camera | Advanced Security & ANPR</title>
          <meta
            name="description"
            content="Adiance 4K UHD Camera with AI, deep learning, ANPR, & real-time alerts. High accuracy surveillance with proactive threat detection & efficient video retrieval."
          />
          <meta name="keywords" content="4K camera, UHD surveillance, AI 4K CCTV camera" />
          <meta property="og:title" content="Adiance 4K UHD AI Camera | Advanced Security & ANPR" />
          <meta property="og:description" content="Adiance 4K UHD Camera with AI, deep learning, ANPR, & real-time alerts. High accuracy surveillance with proactive threat detection & efficient video retrieval." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Header />
        <NavHeader text={"4K Camera"} />
        <div className="thermal-camera-container">
          {/* <Typography variant="h5" gutterBottom>
            <strong>
              Elevate your surveillance capabilities to a new level of precision
              with Adiance's True 4K Smart Cloud CCTV Camera. Powered by AI and
              deep learning technology, this camera goes beyond traditional
              surveillance, offering intelligent object detection and real-time
              response for enhanced security and efficiency.
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
            The Adiance 4K UHD Camera is more than just a surveillance
            device—it's a revolution in security technology. With its True 4K
            resolution and advanced features, this camera sets a new standard
            for visual clarity and intelligence in monitoring. Utilizing
            Artificial Intelligence and Deep Learning, it actively identifies
            and responds to potential threats in real time, ensuring proactive
            protection for your property.
            <br />
            <br />
            Equipped with Long Range Object People and ANPR identification
            capabilities, the Adiance camera offers precise tracking and
            monitoring of human and vehicle presence. Its active response system
            and real-time alarm functionality provide peace of mind, knowing
            that your surroundings are under constant vigilance. Extracting key
            data from vast video footage facilitates efficient search and
            retrieval, streamlining security processes for maximum
            effectiveness.
            <br /> <br />
            From residential to commercial applications, the Adiance 4K UHD
            Camera stands as a beacon of innovation and security assurance. Its
            intuitive design, coupled with cutting-edge technology, makes it the
            ultimate choice for those seeking comprehensive surveillance
            solutions. Invest in the future of security with Adiance and
            experience unparalleled protection like never before.
          </Typography>

          <div style={{ margin: "5%" }}>
            <_4KCameraSlider />
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
                    <li>Active Response</li>
                    <li>Efficient Video Footage Retrieval</li>
                    <li>High Accuracy</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "features" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>4K UHD Resolution</li>
                    <li>H.264/H.265 Compression</li>
                    <li>Built-in Analytics</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "applications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Security Surveillance</li>
                    <li>Traffic Monitoring</li>
                    <li>Crowd Control</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "specifications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Resolution: True 4K UHD</li>
                    <li> Compression: H.264/H.265</li>
                    <li> Analytics: Built-in object detection</li>
                    <li> Connectivity: Cloud-based</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "setup" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  First, find the perfect spot for your camera to maximize
                  coverage. Then, connect it to your network with Ethernet
                  cables for smooth integration with your cloud-based security
                  system. Once connected, you can adjust settings like motion
                  detection and alarms through the camera's interface. Finally,
                  integrate the camera with your existing security system for a
                  unified monitoring and control experience.
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
