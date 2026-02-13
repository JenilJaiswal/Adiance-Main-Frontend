import React, { useState } from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import AnprSlider from "./AnprSlider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const ANPRCamera = () => {
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
          <title>ANPR Camera for Traffic Monitoring & Crime Prevention</title>
          <meta
            name="description"
            content="Adiance Technologies  ANPR Cameras use AI-powered plate recognition for real-time traffic monitoring & law enforcement. Enhance security & road safety today."
          />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Header />
        <NavHeader text={"ANPR Camera"} />
        <div className="thermal-camera-container">
          <Typography variant="h5" gutterBottom>
            <strong>
              Number plate recognition image from highway or cross road + ANPR
              Icon + "ANPR Camera for Traffic monitoring and crime prevention"
            </strong>
          </Typography>

          <Typography variant="body1">
            <br />
            Unlocking the power of cutting-edge technology, Adiance ANPR Cameras
            stand as beacons of innovation in the realm of traffic management
            and crime prevention. With a seamless blend of advanced image
            recognition and deep learning algorithms, these cameras redefine the
            landscape of Automatic Number Plate Recognition (ANPR) systems.
            <br />
            <br />
            At the heart of Adiance ANPR Cameras lies a sophisticated
            deep-learning algorithm meticulously crafted for License Plate
            Recognition (LPR). This powerful technology enables real-time
            identification of vehicle number plates with unparalleled accuracy,
            even amidst challenging environmental conditions. Whether it's a
            bustling highway or a busy crossroad, these cameras excel in
            capturing and decoding license plates with precision, ensuring
            seamless traffic monitoring.
            <br />
            <br />
            But Adiance ANPR Cameras go beyond mere plate recognition.
            Leveraging state-of-the-art vehicle feature recognition, they
            possess the capability to discern crucial details about vehicles,
            enhancing security and surveillance efforts. Moreover, these cameras
            serve as vigilant guardians against traffic violations, thanks to
            their intelligent detection capabilities. From speeding to illegal
            parking, Adiance ANPR Cameras are equipped to identify and flag a
            myriad of infractions, promoting safer roadways and bolstering law
            enforcement efforts.
          </Typography>

          <div style={{ margin: "5%" }}>
            <AnprSlider />
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
                    <li>Enhanced Security</li>
                    <li>Increased Efficiency</li>
                    <li>Cost Savings</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "features" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>ANPR Analytics</li>
                    <li>True WDR</li>
                    <li>Live Streaming View</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "applications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Law Enforcement</li>
                    <li>Traffic Management</li>
                    <li>Parking Facilities</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "specifications" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  <ul>
                    <li>Deep Learning Algorithm</li>
                    <li>High-Resolution Imaging</li>
                    <li>Network Connectivity</li>
                  </ul>
                </Typography>
              </Grid>
            )}
            {activeTab === "setup" && (
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  To ensure effective automatic license plate recognition
                  (ANPR), cameras should be strategically mounted at highway
                  exits, crossroads, or parking entrances. Next, the system's
                  settings and analytics are customized to fit your specific
                  surveillance needs. Finally, integration with existing
                  security systems or management software allows for
                  comprehensive data management and surveillance.
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

export default ANPRCamera;
