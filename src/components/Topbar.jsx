"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Icon,
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
import "../styles/Topbar.css";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    setContactInfo(getContactInfo(selectedCountry));
  }, [selectedCountry]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    handleMenuClose();
  };

  const getContactInfo = (country) => {
    switch (country) {
      case "India":
        return { phone: "+91 9510222944", email: "info@adiance.com" };
      case "USA":
        return { phone: "(408) 359-8800", email: "info@adiance.com" };
      case "Asia":
        return { phone: "+91 9510222944", email: "info@adiance.com" };
      default:
        return { phone: "+91 9510222944", email: "info@adiance.com" };
    }
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="topbar-container">
      <AppBar
        position="static"
        style={{
          backgroundColor: "#EDEDED",
          color: "black",
          height: "40px", // Adjust the height as desired
        }}
        elevation={0} // Remove the shadow effect
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginLeft: "10%", // Push to the right
              marginRight: "auto", // Push to the left
              width: "60%", // Adjust the width as desired
              marginBottom: "20px", // Add bottom margin
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              style={{ textTransform: "none" }}
              disableRipple
            >
              <>
                <Typography variant="body2">{selectedCountry}</Typography>
                <ExpandMoreIcon fontSize="small" />
              </>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  "& .MuiMenuItem-root": {
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={() => handleCountrySelect("India")}>
                India
              </MenuItem>
              <MenuItem onClick={() => handleCountrySelect("USA")}>
                USA
              </MenuItem>
              <MenuItem onClick={() => handleCountrySelect("Asia")}>
                Asia
              </MenuItem>
            </Menu>
            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
            >
              <PhoneIcon
                style={{ color: "#BF0603", marginRight: 5, fontSize: 14 }}
              />
              <Typography
                variant="body2"
                style={{ marginRight: 10, color: "black", fontSize: 12 }}
              >
                {contactInfo.phone}
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <EmailIcon
                style={{ color: "#BF0603", marginRight: 5, fontSize: 14 }}
              />
              <Typography
                variant="body2"
                style={{ color: "black", fontSize: 12 }}
              >
                {contactInfo.email}
              </Typography>
            </div>
          </Box>
          {/* Social media icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "20%",
              marginRight: "10%", // Add margin-right
              marginBottom: "20px",
            }}
          >
            <IconButton
              color="inherit"
              onClick={() =>
                handleIconClick("https://www.facebook.com/adiancetechnologies")
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
              onClick={() => handleIconClick("https://twitter.com/adiancetech")}
              disableRipple // Disable hover effect
            >
              <Twitter fontSize="small" />
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
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
