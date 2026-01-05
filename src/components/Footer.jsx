import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@mui/material";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import XIcon from "@mui/icons-material/X";
import {
  IconButton,
  Box, // Import Box component for layout
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Facebook,
  LinkedIn,
  Pinterest,
  Twitter,
  Instagram,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

const Footer = () => {
  useEffect(() => {
    // var Tawk_API = Tawk_API || {},
    //   Tawk_LoadStart = new Date();
    // (function () {
    //   var s1 = document.createElement("script"),
    //     s0 = document.getElementsByTagName("script")[0];
    //   s1.async = true;
    //   s1.src = "https://embed.tawk.to/665ff94f981b6c564778a96b/1hvjeboab";
    //   s1.charset = "UTF-8";
    //   s1.setAttribute("crossorigin", "*");
    //   s0.parentNode.insertBefore(s1, s0);
    // })();
  }, []);

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: false, email: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError({ name: !formData.name, email: !formData.email });
      return;
    }

    try {
      await axios.post("https://backend.adiance.com:443/subscribe", formData);
      alert("Subscription successful!");
      setFormData({ name: "", email: "" });
    } catch (error) {
      alert("Subscription failed!");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column centered">
          <center>
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="logo"
              style={{ marginBottom: "10%" }}
            />
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 768px)": {
                  paddingLeft: "55%",
                },
              }}
            >
              {/* Icons */}
              {/* Your icon buttons */}

              <IconButton
                color="inherit"
                onClick={() =>
                  handleIconClick(
                    "https://www.facebook.com/adiancetechnologies"
                  )
                }
                disableRipple // Disable hover effect
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  handleIconClick(
                    "https://www.linkedin.com/company/adiancetechnologies/"
                  )
                }
                disableRipple // Disable hover effect
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  handleIconClick("https://in.pinterest.com/Adiancetech/")
                }
                disableRipple // Disable hover effect
              >
                <Pinterest fontSize="small" />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  handleIconClick("https://twitter.com/adiancetech")
                }
                disableRipple // Disable hover effect
              >
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  handleIconClick("https://www.instagram.com/adiancetech/")
                }
                disableRipple // Disable hover effect
              >
                <Instagram fontSize="small" />
              </IconButton>
            </div>
            {/* subscribe to newsLetter */}
            <Box
              sx={{
                maxWidth: 400,
                margin: "0 auto",
                padding: 2,
                // borderRadius: "8px",
                // boxShadow: 3,
                // backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "14px",
              }}
            >
              {/* <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={error.name}
                  helperText={error.name ? "Name is required" : ""}
                  InputProps={{
                    sx: {
                      color: "white",
                      // height: "40px",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  sx={{
                    marginBottom: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ddd",
                      },
                      "&:hover fieldset": {
                        borderColor: "#aaa",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#333",
                      },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  error={error.email}
                  helperText={error.email ? "Email is required" : ""}
                  InputProps={{
                    sx: {
                      color: "white",
                      // height: "40px",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  sx={{
                    marginBottom: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ddd",
                      },
                      "&:hover fieldset": {
                        borderColor: "#aaa",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#333",
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#bf0603",
                    color: "white",
                    width: "100%",
                    fontSize: "14px",
                  }}
                >
                  Subscribe to Newsletter
                </Button>
              </form> */}
            </Box>
          </center>
        </div>

        <div className="footer-column">
          <Typography variant="h6" className="column-title">
            About Us
          </Typography>
          <ul className="menu">
            <li>
              <RouterLink to="/about">Company Profile</RouterLink>
            </li>
            <li>
              <RouterLink to="/cyber-security">Cyber Security</RouterLink>
            </li>
            {/* <li> <a href="#">Support</a> </li> */}{" "}
            <li>
              <RouterLink to="/compliance">Compliance</RouterLink>
            </li>
            {/* <li>
              <RouterLink to="/sustainability">Sustainability</RouterLink>
            </li> */}
            {/* <li>
              <RouterLink to="#">Quality</RouterLink>
            </li> */}
            {/* <li>
              <RouterLink to="/future-and-growth">Future and Growth</RouterLink>
            </li> */}
            {/* <li>
              <RouterLink to="/360-approach">360 Approach</RouterLink>
            </li> */}
          </ul>
        </div>

        <div className="footer-column">
          <Typography variant="h6" className="column-title">
            Scenario Based Solutions
          </Typography>
          <ul className="menu">
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/public-safety">
                Public Safety and Security
              </RouterLink>
            </li>
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/trafic-management">
                Traffic Management & Monitoring
              </RouterLink>
            </li>
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/crowd-control">Crowd Control</RouterLink>
            </li>
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/smart-cities">
                Smart Cities & Infrastructure
              </RouterLink>
            </li>
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/remote-security">Remote-Security</RouterLink>
            </li>
            <li>
              {/* <DoubleArrowIcon className="doubleArrow" /> */}
              <RouterLink to="/high-traffic">
                High-Traffic Infrastructure
              </RouterLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <Typography variant="h6" className="column-title">
            Industry Based Solutions
          </Typography>
          <ul className="menu">
            <li>
              <RouterLink to="/education">Education</RouterLink>
            </li>
            <li>
              <RouterLink to="/healthcare">Healthcare</RouterLink>
            </li>

            <li>
              <RouterLink to="/public-transport">Public Transport</RouterLink>
            </li>
            <li>
              <RouterLink to="/retail">Retail</RouterLink>
            </li>
            <li>
              <RouterLink to="/smart-safe-city">Smart & Safe city</RouterLink>
            </li>
            <li>
              <RouterLink to="/bank-finance">Banking & Finance</RouterLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <Typography variant="h6" className="column-title">
            Newsroom
          </Typography>
          <ul className="menu">
            <li>
              <RouterLink to="/blog">Blogs</RouterLink>
            </li>
            {/* <li>
              <RouterLink to="/#">Success Story</RouterLink>
            </li> */}
          </ul>

          <Typography variant="h6" className="column-title">
            Support
          </Typography>
          <ul className="menu">
            <li>
              <RouterLink to="/warranty-service">Warranty Service</RouterLink>
            </li>{" "}
            <li>
              <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="/warranty-policy">Warranty Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
            </li>
            <li>
              <RouterLink to="/feedback">Feedback</RouterLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <RouterLink to="/contact" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className="column-title">
              Contact Us
            </Typography>
          </RouterLink>
          <div
            className="contact-details"
            sx={{
              "@media (max-width: 768px)": {
                paddingLeft: "55%",
              },
            }}
          >
            {/* Contact details */}
            <Typography
              variant="body1"
              style={{
                display: "flex",
                // alignItems: "center",
                fontSize: "14px",
              }}
              sx={{
                "@media (max-width: 768px)": {
                  paddingLeft: "15%",
                  paddingRight: "15%",
                },
              }}
            >
              <LocationOnIcon sx={{ color: "#bf0603", marginRight: "5px" }} />
              7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath
              Club, Bodakdev, Ahmedabad - 380054
            </Typography>
            <Typography
              variant="body1"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
              sx={{
                "@media (max-width: 768px)": {
                  paddingLeft: "15%",
                  paddingRight: "15%",
                },
              }}
            >
              <EmailIcon sx={{ color: "#bf0603", marginRight: "5px" }} />
              contact@adiance.com
            </Typography>
            <Typography
              variant="body1"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
              sx={{
                "@media (max-width: 768px)": {
                  paddingLeft: "15%",
                  paddingRight: "15%",
                },
              }}
            >
              <PhoneIcon sx={{ color: "#bf0603", marginRight: "5px" }} />
              +91-96877 79999
            </Typography>
          </div>
        </div>
      </div>
      <IconButton
        onClick={() => window.scrollTo(0, 0)}
        style={{
          backgroundColor: "#bf0603",
          color: "white",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: "1000", // Ensure it's above other content
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>

      <RouterLink to="/contact">
        <IconButton
          style={{
            backgroundColor: "#bf0603",
            color: "white",
            position: "fixed",
            bottom: "140px",
            right: "20px",
            zIndex: "1000", // Ensure it's above other content
          }}
        >
          <ForwardToInboxIcon />
        </IconButton>
      </RouterLink>

      <div className="copyright-container">
        <Typography variant="body1" className="copyright-text">
          Copyright 2020 Adiance, All Right Reserved.
        </Typography>
      </div>
      <style jsx>{`
        .footer {
          background-color: #ffffffff; /* White background */
          color: black; /* Default text color */
          padding: 20px 0 0 0;
          font-size: 13px;
          margin-top: 5%;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          // align-items: center;
          max-width: 1200px;
          margin: 3% auto;
          padding: 0 20px;
        }

        .footer-column {
          flex: 1;
          margin: 0 1%;
        }

        .logo {
          width: auto;
          height: 40px;
        }

        .company-name {
          font-size: 16px;
          margin-top: 10%;
        }

        .column-title {
          color: #bf0603; /* Red title color */
          margin-top: 0; /* Adjusted margin */
          font-size: 16px;
          font-weight: bold;
        }

        .menu {
          list-style-type: none;
          padding: 0;
        }

        .menu li {
          margin-bottom: 10px;
        }

        .menu li a {
          color: inherit; /* Inherit text color */
          text-decoration: none;
        }

        .contact-details p {
          margin: 5px 0;
        }

        .copyright-container {
          background-color: #ffffffff; /* Black background */
          text-align: center;
          padding: 10px 0;
          margin-top: 20px; /* Adjusted margin */
          width: 100%; /* Ensure full width */
        }

        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 5%;
          // padding-bottom: 5%;
        }

        .copyright-text {
          color: black; /* Grey text color */
          margin: 0; /* Remove default margins */
          padding: 0; /* Remove default padding */
        }

        @media screen and (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-column {
            margin: 10px 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
