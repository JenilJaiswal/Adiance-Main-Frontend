"use client";

import React, { useRef, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import "../styles/MidBar.css";
import NavigationBar from "./NavigationBar";
import SmartLink from "./SmartLink";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function MidBar() {
  const textRef = useRef(null); // Ref for the text container

  useEffect(() => {
    // Adjust the height of the button to match the height of the text container
    if (textRef.current) {
      const height = textRef.current.clientHeight; // Get the height of the text container
      const button = document.getElementById("quoteButton"); // Get the button element
      if (button) {
        button.style.height = `${height}px`; // Set the height of the button to match the height of the text container
      }
    }
  }, []);

  const handleGetQuote = () => {
    // Redirect to the Contact Us page
    window.location.href = "/contact";
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5%",
          marginBottom: "0.1%",
          marginLeft: "10%", // Added marginLeft to align logo to the left
          marginRight: "10%", // Added marginRight to leave space for the Get Quote button
          // fontFamily: "Inknut Antiqua, serif",
        }}
      >
        <SmartLink to="/">
          <img
            src="/images/Logo.webp"
            alt="Logo"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginRight: "20px",
            }} // Added marginRight for space between logo and div tags
          />
        </SmartLink>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column", // Change to column direction
            alignItems: "right",
            marginLeft: "auto", // Pushes the div containing the two rows and button to the right
            padding: "0 20px", // Adding padding to the left and right sides
          }}
        > */}
        {/* Certified Section */}
        {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "2%",
              borderBottom: "1px solid",
            }}
          >
            <Box mr={2}>
              <VerifiedIcon style={{ color: "#00C853", fontSize: 24 }} />
            </Box>
            <div>
              <Typography
                variant="subtitle2"
                className="midbar-subtitle2"
                // style={{ fontFamily: "Inknut Antiqua, serif" }}
              >
                ISO 9901 0098 Certified
              </Typography>
            </div>
          </div> */}
        {/* Number 1 Supplier Section */}
        {/* <div
            style={{
              display: "flex",
              // alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Box mr={2}>
              <StarIcon style={{ color: "#FFA500", fontSize: 24 }} />
            </Box>
            <div>
              <Typography
                variant="subtitle1"
                gutterBottom
                className="midbar-subtitle1"
              >
                The Best In India
              </Typography>
            </div>
          </div>
        </div> */}
        <Button
          id="quoteButton"
          variant="contained"
          style={{ backgroundColor: "#BF0603" }} // Add margin to separate button
          onClick={handleGetQuote}
        >
          Get Quote
        </Button>
      </div>
      {/* <NavigationBar /> */}
    </div>
  );
}
