import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/bootNavbar.css";
import { Link as RouterLink } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { MdLocalOffer } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

import { BiSolidOffer } from "react-icons/bi";

const ResponsiveNavbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSmallScreen = screenWidth <= 993; // Adjust the threshold as needed

  const handleGetQuote = () => {
    // Redirect to the Contact Us page
    window.location.href = "/partner-with-us";
  };

  const handleExternalLink = (e) => {
    e.preventDefault(); // Prevent default RouterLink behavior
    window.open("https://adiance1.zohodesk.in/portal/en/home", "_blank");
  };

  return (
    <Navbar
      expand="lg"
      // fixed="top"
      // sticky="top"

      className="navbar-light bg-light transition "
      data-bs-theme="dark"
      style={{
        // borderBottom: scrolled ? "1px solidrgb(0, 0, 0)" : "none", // Red border when scrolled
        boxShadow: scrolled ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none", // Softer red shadow effect
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "white", // Keep it light
        transition: "all 0.3s ease-in-out",
        // marginBottom: "600px"
      }}
    >
      <Container fluid="xl">
        {isSmallScreen && (
          <Navbar.Brand
            as={Link}
            to="/"
            // style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <img
              src="/images/Logo-241x47-1.png"
              width="auto"
              height="25"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
          </Navbar.Brand>
        )}

        {/* <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginRight: "5%", color:"black" }}
        /> */}
        {/* <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />
        </div> */}
        <div>
          <Navbar.Toggle
            as="div"
            className="bg-light"
            aria-controls="basic-navbar-nav"
          >
            <span
              className="toggle-icon"
              style={{
                background: "none",
                border: "none",
                color: "black",
                fontSize: "24px",
              }}
            >
              {/* <MenuOpenIcon fontSize="large"/> */}
              {/* <span className="toggle-icon"> */}
              <MenuIcon className="icon-closed" fontSize="large" />
              {/* <MenuOpenIcon className="icon-open" fontSize="large" /> */}
              {/* </span> */}
            </span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto "
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!isSmallScreen && (
              <Nav.Link as={Link} to={"/"}>
                <img
                  src="/images/Logo-241x47-1.png"
                  width="auto"
                  height="40"
                  className="d-inline-block align-top"
                  alt="Your Logo"
                />
              </Nav.Link>
            )}

            {/* <Nav.Link
              as={Link}
              to="/"
              style={{
                whiteSpace: "nowrap",
                color: location.pathname === "/" ? "#444444" : "#000000",
                fontWeight: location.pathname === "/" ? "bolder" : "normal",

                // fontWeight: location.pathname === "/about" ? "bold" : "normal",
                fontSize: screenWidth > 993 ? "18px" : "inherit",
              }}
            >
              Home
            </Nav.Link> */}

            {/* <Nav.Link
              as={Link}
              to="/buyback-cctv-camera-offer"
              style={{
                whiteSpace: "nowrap",
                color: location.pathname === "/buyback-cctv-camera-offer" ? "#444444" : "#000000",
                fontWeight: location.pathname === "/buyback-cctv-camera-offer" ? "bolder" : "normal",

                // fontWeight: location.pathname === "/about" ? "bold" : "normal",
                fontSize: screenWidth > 993 ? "18px" : "inherit",
              }}
            >
              Buyback Offer 🎉
            </Nav.Link> */}

            {/* buyback offer */}
            {/* <Box sx={{ position: "relative", display: "inline-block" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  right: "1px",
                  backgroundColor: "#FFC107",
                  color: "#000",
                  padding: "6px",
                  borderRadius: "50%",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  animation: "glow 1.5s infinite alternate ease-in-out", // Glowing Animation
                  "@keyframes glow": {
                    "0%": { boxShadow: "0 0 5px rgba(255, 193, 7, 0.6)" },
                    "100%": { boxShadow: "0 0 15px rgba(255, 193, 7, 1)" }, // Intense glow effect
                  },
                }}
              >
                <BiSolidOffer
                  size={18}
                  style={{
                    animation: "pulse 1.5s infinite alternate ease-in-out",
                  }}
                />
              </Box>

              <Nav.Link
                as={Link}
                to="/buyback-cctv-camera-offer"
                style={{
                  position: "relative",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  whiteSpace: "nowrap",
                  fontWeight:
                    location.pathname === "/buyback-cctv-camera-offer"
                      ? "bolder"
                      : "normal",
                  fontSize: "18px",
                  padding: "12px 20px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Buyback Offer
              </Nav.Link>
            </Box> */}

            <Nav.Link
              as={Link}
              to="/innovation"
              style={{
                fontSize: screenWidth > 993 ? "18px" : "inherit",
                // color:
                // location.pathname === "/innovation" ? "white" : "#A9A9A9",
                color:
                  location.pathname === "/innovation" ? "#444444" : "#000000",
                fontWeight:
                  location.pathname === "/innovation" ? "bolder" : "normal",
              }}
            >
              Innovation
            </Nav.Link>

            <NavDropdown
              title={
                <span
                  className="nav-dropdown-item dropdown-toggle"
                  style={{
                    color: "#444444",
                    fontSize: screenWidth > 993 ? "18px" : "inherit",
                    fontWeight: "normal",
                  }}
                  // style={{
                  //   fontSize: screenWidth > 993 ? "18px" : "inherit",
                  //   color: "#444444",
                  //   fontWeight: "normal",
                  // }}
                >
                  Products
                </span>
              }
              // title="Products"

              // style={{
              //   fontSize: screenWidth > 993 ? "18px" : "inherit",
              //   color: "#444444"
              // }}
            >
              {screenWidth > 992 ? (
                <NavDropdown.Item
                  style={{ fontSize: screenWidth > 993 ? "18px" : "inherit" }}
                  className="no-hover"
                >
                  <table style={{ marginRight: "40px" }}>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/3mp-4g-bullet-all-time-color-camera-a-series"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                A Series
                              </RouterLink>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/h-series"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                H Series
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/5g-edge-ai-camera-s-series-surveillance"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                S Series
                              </RouterLink>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/r-series"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                R Series
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/thermal-camera"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                Thermal Camera
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink
                                to="/adiance-thermal-camera-f"
                                className="link"
                              >
                                Adiance Thermal Camera - F
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink
                                to="/adiance-thermal-camera-n"
                                className="link"
                              >
                                Adiance Thermal Camera - N
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink
                                to="/adiance-thermal-camera-l"
                                className="link"
                              >
                                Adiance Thermal Camera - L
                              </RouterLink>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/cloudxvr"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                Cloud XVR
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/cloudxvr" className="link">
                                Adiance 8-16Channel XVR
                              </RouterLink>
                            </li>
                            <li>
                              <br />
                            </li>
                            <li>
                              <br />
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/anpr-camera"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                ANPR Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/edge-ai-based-ptz-anpr-bullet-camera"
                                className="link"
                              >
                                Edge Ai based PTZ ANPR Camera
                              </RouterLink>
                            </li>
                            <li>
                              <br />
                            </li>
                            <li>
                              <br />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/4kcamera"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                4K Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/4k-bullet-anpr-ptz-camera"
                                className="link"
                              >
                                4K Bullet ANPR PTZ Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/4k-face-recognition-camera"
                                className="link"
                              >
                                4K Face Recognition Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/edge-ai-based-object-n-face-detection-cameras"
                                className="link"
                              >
                                4K Object & Face Detection Cameras
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/edgeaicamera"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                Edge-Ai Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/edge-ai-based-ptz-anpr-bullet-camera-3"
                                className="link"
                              >
                                Edge AI Based PTZ ANPR Bullet Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/edge-ai-based-recognition-camera"
                                className="link"
                              >
                                Edge AI Based Face Recognition Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/edge-ai-based-object-n-face-detection-camera"
                                className="link"
                              >
                                Edge AI Based Object & Face Detection Cameras
                              </RouterLink>
                            </li>
                            <li>
                              <br />
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="/4gcamera"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                4G Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/4g-dome-ptz-camera"
                                className="link"
                              >
                                4G Dome PTZ Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/4g-mini-bullet-camera"
                                className="link"
                              >
                                4G Mini Bullet Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/4g-dome-camera" className="link">
                                4G Dome Camera
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/h265-4g-dome-ptz-camera"
                                className="link"
                              >
                                H.265+ 4G Dome PTZ Camera
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item
                    as={Link}
                    to="/3mp-4g-bullet-all-time-color-camera-a-series"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    A Series
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/h-series"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    H Series
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/5g-edge-ai-camera-s-series-surveillance"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    S Series
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/r-series"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    R Series
                  </NavDropdown.Item>
                  <NavDropdown
                    title="Thermal Camera"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/adiance-thermal-camera-f"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Adiance Thermal Camera - F
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/adiance-thermal-camera-n"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Adiance Thermal Camera - N
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/adiance-thermal-camera-l"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Adiance Thermal Camera - L
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Cloud XVR"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/cloudxvr"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Adiance 8-16Channel XVR
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="ANPR Camera"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/edge-ai-based-ptz-anpr-bullet-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Edge AI Based PTZ ANPR Bullet Camera
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="4K Camera"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/4k-bullet-anpr-ptz-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4K Bullet ANPR PTZ Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/4k-face-recognition-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4K Face Recognition Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/edge-ai-based-object-n-face-detection-cameras"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4K Object & Face Detection Cameras
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Edge-Ai Camera"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/edge-ai-based-ptz-anpr-bullet-camera-3"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Edge AI Based PTZ ANPR Bullet Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/edge-ai-based-recognition-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Edge AI Based Face Recognition Camera
                    </NavDropdown.Item>
                    <Nav.Item style={{ width: "100%" }}>
                      <NavDropdown.Item
                        as={Link}
                        to="/edge-ai-based-object-n-face-detection-camera"
                        style={{
                          fontSize: screenWidth > 993 ? "20px" : "inherit",
                        }}
                      >
                        {window.innerWidth < 466 ? (
                          <>
                            Edge AI Based Object & Face
                            <br />
                            Detection Cameras
                          </>
                        ) : (
                          "Edge AI Based Object & Face Detection Cameras"
                        )}
                      </NavDropdown.Item>
                    </Nav.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="4G Camera"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/4g-dome-ptz-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4G Dome PTZ Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/4g-mini-bullet-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4G Mini Bullet Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/4g-dome-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      4G Dome Camera
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/h265-4g-dome-ptz-camera"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      H.265+ 4G Dome PTZ Camera
                    </NavDropdown.Item>
                  </NavDropdown>
                </> // Empty fragment when screenWidth <= 992
              )}
            </NavDropdown>

            <NavDropdown
              title={
                <span
                  className="nav-dropdown-item dropdown-toggle"
                  style={{
                    fontSize: screenWidth > 993 ? "18px" : "inherit",
                    color: "#444444",
                    fontWeight: "normal",
                  }}
                >
                  Solutions
                </span>
              }
              // title="Solutions"
              id="basic-nav-dropdown"
              // style={{
              //   fontSize: screenWidth > 993 ? "18px" : "inherit",
              // }}
            >
              {screenWidth > 992 ? (
                <NavDropdown.Item
                  style={{ fontSize: screenWidth > 993 ? "18px" : "inherit" }}
                  className="no-hover"
                >
                  <table style={{ marginRight: "40px" }}>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              <RouterLink
                                to="#"
                                className="link h6"
                                // style={{ margin: "20%" }}
                              >
                                Scenario Based
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink to="/public-safety" className="link">
                                Public Safety and Security
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink
                                to="/trafic-management"
                                className="link"
                              >
                                Traffic Management & Monitoring
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink to="/crowd-control" className="link">
                                Crowd Control
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink to="/smart-cities" className="link">
                                Smart Cities & Infrastructure
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink
                                to="/remote-security"
                                className="link"
                              >
                                Remote-Security
                              </RouterLink>
                            </li>
                            <li>
                              {/* <DoubleArrowIcon className="doubleArrow" /> */}
                              <ArrowRightIcon />
                              <RouterLink to="/high-traffic" className="link">
                                High-Traffic Infrastructure
                              </RouterLink>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul>
                            <li>
                              <RouterLink to="#" className="link h6">
                                Industry based
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/education" className="link">
                                Education
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/healthcare" className="link">
                                Healthcare
                              </RouterLink>
                            </li>

                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/public-transport"
                                className="link"
                              >
                                Public Transport
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/retail" className="link">
                                Retail
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/smart-safe-city"
                                className="link"
                              >
                                Smart & Safe city
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/bank-finance" className="link">
                                Banking & Finance
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown
                    title="Scenario Based"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/public-safety"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Public Safety and Security
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/trafic-management"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Traffic Management & Monitoring
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/crowd-control"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Crowd Control
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/smart-cities"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Smart Cities & Infrastructure
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/remote-security"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Remote Security Surveillance
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/high-traffic"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      High-Traffic Infrastructure
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Industry based"
                    id="basic-nav-dropdown"
                    style={{
                      paddingLeft: "5px",
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/education"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Education
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/healthcare"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Healthcare
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/public-transport"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Public Transport
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/retail"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Retail
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/smart-safe-city"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Smart & Safe city
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/bank-finance"
                      style={{
                        fontSize: screenWidth > 993 ? "20px" : "inherit",
                      }}
                    >
                      Banking & Finance
                    </NavDropdown.Item>
                  </NavDropdown>
                </> // Empty fragment when screenWidth <= 992
              )}
            </NavDropdown>

            <NavDropdown
              title={
                <span
                  className="nav-dropdown-item dropdown-toggle"
                  style={{
                    fontSize: screenWidth > 993 ? "18px" : "inherit",
                    color: "#444444",
                    fontWeight: "normal",
                  }}
                >
                  Support
                </span>
              }
              // title="Support"
              // id="basic-nav-dropdown"
              // style={{
              //   fontSize: screenWidth > 993 ? "18px" : "inherit",
              // }}
            >
              {screenWidth > 992 ? (
                <NavDropdown.Item
                  style={{ fontSize: screenWidth > 993 ? "18px" : "inherit" }}
                  className="no-hover"
                >
                  <table style={{ marginRight: "40px" }}>
                    <tbody>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              {/* <RouterLink to="/support" className="link h6">
                               Contact Support
                              </RouterLink> */}
                              <RouterLink
                                to="#"
                                className="link h6"
                                onClick={handleExternalLink}
                              >
                                Help Center
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/warranty-service"
                                className="link"
                              >
                                Warranty Service
                              </RouterLink>
                            </li>
                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/warranty-policy"
                                className="link"
                              >
                                Warranty Policy
                              </RouterLink>
                            </li>

                            <li>
                              <ArrowRightIcon />
                              <RouterLink
                                to="/terms-of-service"
                                className="link"
                              >
                                Terms of Service
                              </RouterLink>
                            </li>

                            <li>
                              <ArrowRightIcon />
                              <RouterLink to="/feedback" className="link">
                                Feedback
                              </RouterLink>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown.Item>
              ) : (
                <>
                  {/* <NavDropdown.Item
                    as={Link}
                    href="https://adiance1.zohodesk.in/portal/en/home"
                    to="/support"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                     Contact Support 
                  </NavDropdown.Item> */}

                  <NavDropdown.Item
                    as="a"
                    href="https://adiance1.zohodesk.in/portal/en/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    Help Center
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/warranty-service"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    Warranty Service
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/warranty-service"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    Warranty Policy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/terms-of-service"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    Terms of Service
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/feedback"
                    style={{
                      fontSize: screenWidth > 993 ? "20px" : "inherit",
                    }}
                  >
                    Feedback
                  </NavDropdown.Item>
                </> // Empty fragment when screenWidth <= 992
              )}
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/blog"
              style={{
                fontSize: screenWidth > 993 ? "18px" : "inherit",
                color: location.pathname === "/blog" ? "#444444" : "#000000",
                fontWeight: location.pathname === "/blog" ? "bolder" : "normal",
              }}
            >
              Blogs
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/partners"
              style={{
                fontSize: screenWidth > 993 ? "18px" : "inherit",
                color:
                  location.pathname === "/partners" ? "#444444" : "#000000",
                fontWeight:
                  location.pathname === "/partners" ? "bolder" : "normal",
              }}
            >
              Partner
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              style={{
                fontSize: screenWidth > 993 ? "18px" : "inherit",
                color: location.pathname === "/about" ? "#444444" : "#000000",
                fontWeight:
                  location.pathname === "/about" ? "bolder" : "normal",
                whiteSpace: "nowrap", // Prevents text wrapping
              }}
            >
              About Us
            </Nav.Link>

            {/* <nav style={{ display: "flex", gap: "1rem" }}> */}
            <Nav.Link
              as={Link}
              to="/contact"
              style={{
                color: location.pathname === "/contact" ? "#444444" : "#000000",
                fontWeight:
                  location.pathname === "/contact" ? "bolder" : "normal",
                fontSize: screenWidth > 993 ? "18px" : "inherit",
                // width: "100%",
              }}
            >
              <Button
                id="quoteButton"
                variant="outlined"
                style={{
                  color:
                    location.pathname === "/contact" ? "#444444" : "#000000",
                  fontWeight:
                    location.pathname === "/contact" ? "bolder" : "normal",
                  backgroundColor: "transparent",
                  borderColor: "#444444",
                  textTransform: "none",
                  whiteSpace: "nowrap", // Prevents text wrapping
                  minWidth: "120px", // Ensures enough space for the text
                  // padding: "8px 16px", // Adjust padding to fit text properly
                }}
              >
                Contact us
              </Button>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/partner-with-us"
              style={{
                whiteSpace: "nowrap",
                color:
                  location.pathname === "/partner-with-us"
                    ? "white"
                    : "#A9A9A9",
                fontSize: screenWidth > 993 ? "18px" : "inherit",
              }}
            >
              <Button
                variant="contained"
                onClick={handleGetQuote}
                style={{
                  backgroundColor: "#BF0603",
                  color: "#ffffff",
                  textTransform: "none",
                }}
                // endIcon={<ChevronRightIcon />}
              >
                Partner With us
              </Button>
            </Nav.Link>
            {/* </nav> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
