"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  ArrowForward,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SmartLink from "./SmartLink";

// Creating a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Set primary color to black
    },
  },
});

// Creating styles using makeStyles hook
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuLink: {
    textDecoration: "none",
    color: "#f5f5f5",
    marginRight: "40px",
    textTransform: "uppercase",
    fontSize: "1rem",
    "&:hover": {
      color: "#666", // Changing text color on hover to light grey
    },
  },
  subMenu: {
    display: "none", // Initially hide the submenu
    position: "absolute",
    top: "100%", // Position below the parent menu item
    left: 0,
    padding: "8px",
    zIndex: 1, // Ensure the submenu appears above other elements
    width: "220px", // Set width of the submenu
    backgroundColor: "rgba(0, 0, 0)", // Background color with opacity
    fontSize: "12px",
  },
  superSubMenu: {
    display: "none", // Initially hide the super submenu
    position: "absolute",
    top: 0,
    left: "100%", // Position to the right of the parent submenu
    backgroundColor: "rgba(0, 0, 0)", // Background color of the super submenu
    padding: "8px",
    zIndex: 1,
    width: "325px", // Set width of the super submenu
    fontSize: "12px",
  },
  menuItem: {
    position: "relative",
    "&:hover $subMenu": {
      display: "block", // Show the submenu on parent menu item hover
    },
  },
  subMenuItem: {
    position: "relative",
    "&:hover $superSubMenu": {
      display: "block", // Show the super submenu on parent submenu item hover
    },
  },
  appBar: {
    backgroundColor: "rgba(0, 0, 0)", // Set background color of the app bar to black
  },
});
const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.menuItem}
              style={{ marginLeft: "10%" }}
            >
              <SmartLink to="/" className={classes.menuLink}>
                Home
              </SmartLink>
            </Typography>

            <Typography variant="h6" className={classes.menuItem}>
              <SmartLink to="/innovation" className={classes.menuLink}>
                Technology
              </SmartLink>
              <div className={classes.subMenu}>
                <Typography variant="body1">
                  <SmartLink to="/innovation" className={classes.menuLink}>
                    Innovation
                  </SmartLink>
                </Typography>
              </div>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <a href="#" className={classes.menuLink}>
                Product
              </a>
              <div className={classes.subMenu}>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/thermal-camera" className={classes.menuLink}>
                    Thermal Camera
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-f"
                        className={classes.menuLink}
                      >
                        Adiance Thermal Camera - F
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-n"
                        className={classes.menuLink}
                      >
                        Adiance Thermal Camera - N
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-l"
                        className={classes.menuLink}
                      >
                        Adiance Thermal Camera - L
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/cloudxvr" className={classes.menuLink}>
                    Cloud XVR
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Adiance 8-16Channel XVR
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/anpr-camera" className={classes.menuLink}>
                    ANPR Camera
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/edge-ai-based-ptz-anpr-bullet-camera"
                        className={classes.menuLink}
                      >
                        Edge Ai based PTZ ANPR Camera
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>

                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/4kcamera" className={classes.menuLink}>
                    4K Camera
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/4k-bullet-anpr-ptz-camera"
                        className={classes.menuLink}
                      >
                        4K Bullet ANPR PTZ Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/4k-face-recognition-camera"
                        className={classes.menuLink}
                      >
                        4K Face Recognition Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/edge-ai-based-object-n-face-detection-cameras"
                        className={classes.menuLink}
                      >
                        4K Object & Face Detection Cameras
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>

                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/edgeaicamera" className={classes.menuLink}>
                    Edge-Ai Camera
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/edge-ai-based-ptz-anpr-bullet-camera-3"
                        className={classes.menuLink}
                      >
                        Edge AI Based PTZ ANPR Bullet Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/edge-ai-based-recognition-camera"
                        className={classes.menuLink}
                      >
                        Edge AI Based Face Recognition Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/edge-ai-based-object-n-face-detection-camera"
                        className={classes.menuLink}
                      >
                        Edge AI Based Object & Face Detection Cameras
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/4gcamera" className={classes.menuLink}>
                    4G Camera
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/4g-dome-ptz-camera"
                        className={classes.menuLink}
                      >
                        4G Dome PTZ Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/4g-mini-bullet-camera"
                        className={classes.menuLink}
                      >
                        4G Mini Bullet Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/4g-dome-camera"
                        className={classes.menuLink}
                      >
                        4G Dome Camera
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/h265-4g-dome-ptz-camera"
                        className={classes.menuLink}
                      >
                        H.265+ 4G Dome PTZ Camera
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
              </div>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <a href="#" className={classes.menuLink}>
                Solutions
              </a>
              <div className={classes.subMenu}>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/thermal-camera" className={classes.menuLink}>
                    Scenario Based
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink
                        to="/public-safety"
                        className={classes.menuLink}
                      >
                        Public Safety and Security
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-n"
                        className={classes.menuLink}
                      >
                        Traffic management & monitoring
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-l"
                        className={classes.menuLink}
                      >
                        Crowd Control
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-l"
                        className={classes.menuLink}
                      >
                        Smart Cities & Infrastructure
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink
                        to="/adiance-thermal-camera-l"
                        className={classes.menuLink}
                      >
                        Remote Security Surveillance
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
                <Typography variant="body1" className={classes.subMenuItem}>
                  <SmartLink to="/cloudxvr" className={classes.menuLink}>
                    Industry based
                  </SmartLink>
                  <div className={classes.superSubMenu}>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Education
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Healthcare
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Public Transport
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Retail
                      </SmartLink>
                    </Typography>
                    <Typography variant="body1">
                      <SmartLink to="/cloudxvr" className={classes.menuLink}>
                        Smart & Safe city
                      </SmartLink>
                    </Typography>
                  </div>
                </Typography>
              </div>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <SmartLink to="/support" className={classes.menuLink}>
                Support
              </SmartLink>
              <div className={classes.subMenu}>
                <Typography variant="body1">
                  {/* <SmartLink to="/downloads" className={classes.menuLink}>
                    Download Center
                  </SmartLink>
                </Typography>
                <Typography variant="body1">
                  <SmartLink to="/datasheet" className={classes.menuLink}>
                    Datasheet
                  </SmartLink> */}
                </Typography>
                {/* <Typography variant="body1">
                  <SmartLink to="/feedback" className={classes.menuLink}>
                    Feedback
                  </SmartLink>
                </Typography> */}
              </div>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <SmartLink to="/blog" className={classes.menuLink}>
                Blog
              </SmartLink>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <SmartLink to="/contact" className={classes.menuLink}>
                Contact Us
              </SmartLink>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
              <SmartLink to="/about" className={classes.menuLink}>
                About Us
              </SmartLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavigationBar;
