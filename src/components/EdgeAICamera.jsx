import React, { useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import EdgeAISlider from "./EdgeAISlider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
const ThermalCamera = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;
  const [activeTab, setActiveTab] = useState("benefits");
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
          <title>Edge AI Camera | Real-Time Smart Surveillance</title>
          <meta
            name="description"
            content="Discover Edge AI Cameras with real-time AI, low cost & versatile design. Ideal for security monitoring, industrial automation & smart city applications."
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Header />
        <NavHeader text={"Edge AI Camera"} />
        <div className="thermal-camera-container">
          {/* <Typography variant="h4" gutterBottom style={{ marginTop: "5%" }}>
          <strong>
            Thermal Camera Manufacturers for Body Temperature Screening, Get
            valuable insights from image and video results using Smart AI
            Analytics
          </strong>
        </Typography> */}

          <Typography variant="body1">
            Introducing the future of surveillance technology our Realtime Edge
            AI-based Smart Cloud Camera. By harnessing the power of artificial
            intelligence and edge computing, this cutting-edge camera brings
            intelligent decision-making and real-time data processing directly
            to the edge of your network.
          </Typography>

          <div style={{ margin: "5%" }}>
            <EdgeAISlider />
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
                    <li>Efficient Data Processing</li>
                    <li>Cost Effectiveness</li>
                    <li>Flexibility</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "features" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Realtime AI</li>
                    <li>Low Cost</li>
                    <li>Versatile Design</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "applications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Security Monitoring</li>
                    <li>Industrial Automation</li>
                    <li>Smart Cities</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "specifications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>
                      {" "}
                      Data Processing: Edge AI algorithms running locally on the
                      camera
                    </li>
                    <li>
                      {" "}
                      Connectivity: Cloud-based data transfer for remote
                      monitoring and analysis
                    </li>
                    <li>
                      {" "}
                      Resolution: High-definition video capture for detailed
                      surveillance footage
                    </li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "setup" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  To ensure effective surveillance, security cameras should be
                  strategically placed for maximum coverage. They must be
                  connected to the network and then customized with settings and
                  AI features to fit your needs. Finally, integrate the cameras
                  with your security system for centralized monitoring and
                  control across various locations.
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
